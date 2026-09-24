/**
 * WhatsApp invoice bot.
 *
 * Meta POSTs here whenever someone messages the shop's bot number. The message
 * is turned into the shop's standard invoice PDF and sent straight back into the
 * same chat, for staff to forward to the customer. Nothing is stored.
 *
 * The URL is public because Meta has to be able to reach it, so the handler is
 * locked down three ways: the request must carry Meta's HMAC signature, the
 * sender must be on WHATSAPP_ALLOWED_SENDERS, and the reply only ever goes back
 * to the chat it came from.
 */

import { buildInvoicePdf } from "@/lib/invoice-pdf";
import { HELP, parseInvoiceMessage } from "@/lib/invoice-message";
import { isAllowedSender, sendDocument, sendText, verifySignature } from "@/lib/whatsapp";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

/**
 * Meta retries a webhook it thinks failed, so the same message can arrive twice.
 * Remembering the ids we've handled stops a retry becoming a second invoice.
 */
const handled = new Set<string>();
function alreadyHandled(id: string): boolean {
  if (handled.has(id)) return true;
  handled.add(id);
  if (handled.size > 500) handled.delete(handled.values().next().value as string);
  return false;
}

interface IncomingMessage {
  id?: string;
  from?: string;
  type?: string;
  text?: { body?: string };
}

function firstMessage(payload: unknown): IncomingMessage | null {
  const entry = (payload as { entry?: { changes?: { value?: { messages?: IncomingMessage[] } }[] }[] })
    ?.entry?.[0];
  return entry?.changes?.[0]?.value?.messages?.[0] ?? null;
}

/** Meta calls this once, when the webhook is first hooked up. */
export async function GET(request: Request): Promise<Response> {
  const params = new URL(request.url).searchParams;
  const verifyToken = process.env.WHATSAPP_VERIFY_TOKEN;

  if (
    params.get("hub.mode") === "subscribe" &&
    verifyToken &&
    params.get("hub.verify_token") === verifyToken
  ) {
    return new Response(params.get("hub.challenge") ?? "", {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  }
  return new Response("Forbidden", { status: 403 });
}

export async function POST(request: Request): Promise<Response> {
  const rawBody = await request.text();

  if (!verifySignature(rawBody, request.headers.get("x-hub-signature-256"))) {
    return new Response("Forbidden", { status: 403 });
  }

  let message: IncomingMessage | null = null;
  try {
    message = firstMessage(JSON.parse(rawBody));
  } catch {
    return new Response("Bad Request", { status: 400 });
  }

  // Delivery receipts and read receipts arrive here too — nothing to do.
  if (!message?.from || !message.id) return ok();
  // Anyone not on the list is ignored outright: no reply, no hint it exists.
  if (!isAllowedSender(message.from)) return ok();
  if (alreadyHandled(message.id)) return ok();

  const from = message.from;

  try {
    if (message.type !== "text" || !message.text?.body?.trim()) {
      await sendText(from, HELP);
      return ok();
    }

    const text = message.text.body.trim();
    if (/^(help|hi|hello|start|\?)$/i.test(text)) {
      await sendText(from, HELP);
      return ok();
    }

    const parsed = parseInvoiceMessage(text);
    if (!parsed.ok) {
      await sendText(from, parsed.error);
      return ok();
    }

    const pdf = await buildInvoicePdf(parsed.invoice);
    await sendDocument(from, pdf);
  } catch (error) {
    // Report the failure into the chat rather than letting Meta retry blindly.
    const detail = error instanceof Error ? error.message : "Unknown error";
    console.error("[whatsapp] invoice failed:", detail);
    await sendText(from, `Sorry — the invoice didn't go through.\n\n${detail}`).catch(() => {});
  }

  return ok();
}

/** Always 200: a non-2xx makes Meta redeliver the same message for hours. */
function ok(): Response {
  return new Response(null, { status: 200 });
}
