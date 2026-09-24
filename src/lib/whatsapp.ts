/**
 * Thin client over the WhatsApp Cloud API (Graph).
 *
 * Only what the invoice bot needs: verify that a webhook really came from Meta,
 * send a text reply, and send a PDF back into the same chat.
 */

import { createHmac, timingSafeEqual } from "node:crypto";

const GRAPH_VERSION = process.env.WHATSAPP_GRAPH_VERSION || "v22.0";

function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is not set`);
  return value;
}

const graphUrl = (path: string) =>
  `https://graph.facebook.com/${GRAPH_VERSION}/${required("WHATSAPP_PHONE_NUMBER_ID")}/${path}`;

const authHeader = () => `Bearer ${required("WHATSAPP_TOKEN")}`;

/** Digits only, so 0771234567 / +94 77 123 4567 / 94771234567 all compare equal. */
export function normalisePhone(value: string): string {
  const digits = value.replace(/\D/g, "");
  // Sri Lankan numbers are stored either way round; compare on the last 9.
  return digits.length > 9 ? digits.slice(-9) : digits;
}

/** The phones allowed to use the bot, from WHATSAPP_ALLOWED_SENDERS. */
export function isAllowedSender(waId: string): boolean {
  const allowed = (process.env.WHATSAPP_ALLOWED_SENDERS || "")
    .split(",")
    .map((entry) => normalisePhone(entry))
    .filter(Boolean);
  if (allowed.length === 0) return false; // fail closed: no list, no access
  return allowed.includes(normalisePhone(waId));
}

/**
 * Meta signs every webhook body with the app secret. Anything that doesn't
 * carry a matching signature never reaches the invoice code.
 */
export function verifySignature(rawBody: string, header: string | null): boolean {
  const secret = process.env.WHATSAPP_APP_SECRET;
  if (!secret || !header?.startsWith("sha256=")) return false;

  const expected = createHmac("sha256", secret).update(rawBody, "utf8").digest();
  const received = Buffer.from(header.slice("sha256=".length), "hex");
  if (received.length !== expected.length) return false;
  return timingSafeEqual(expected, received);
}

async function graphPost(path: string, body: BodyInit, headers: HeadersInit = {}) {
  const response = await fetch(graphUrl(path), {
    method: "POST",
    headers: { Authorization: authHeader(), ...headers },
    body,
  });
  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    const detail =
      (payload as { error?: { message?: string } } | null)?.error?.message ??
      `HTTP ${response.status}`;
    throw new Error(`WhatsApp ${path} failed: ${detail}`);
  }
  return payload as Record<string, unknown>;
}

export async function sendText(to: string, body: string): Promise<void> {
  await graphPost(
    "messages",
    JSON.stringify({
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to,
      type: "text",
      text: { preview_url: false, body },
    }),
    { "Content-Type": "application/json" }
  );
}

/** Uploads the PDF, then sends it as a document into the chat. */
export async function sendDocument(
  to: string,
  file: { data: Uint8Array; filename: string; caption?: string }
): Promise<void> {
  const form = new FormData();
  form.append("messaging_product", "whatsapp");
  form.append("type", "application/pdf");
  form.append(
    "file",
    new Blob([new Uint8Array(file.data)], { type: "application/pdf" }),
    file.filename
  );

  const upload = await graphPost("media", form);
  const mediaId = upload.id;
  if (typeof mediaId !== "string") throw new Error("WhatsApp did not return a media id");

  await graphPost(
    "messages",
    JSON.stringify({
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to,
      type: "document",
      document: { id: mediaId, filename: file.filename, caption: file.caption },
    }),
    { "Content-Type": "application/json" }
  );
}
