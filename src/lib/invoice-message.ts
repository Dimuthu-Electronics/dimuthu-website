/**
 * Turns a WhatsApp message into an invoice.
 *
 * The shape is deliberately loose, because this gets typed one-handed at a
 * counter: first line is the customer, a line that looks like a phone number is
 * the phone, `key: value` lines set the optional extras, and everything else is
 * a job line whose price is the number at the end.
 *
 *   Anushka Perera
 *   0771234567
 *   32" display replacement = 25000
 *   paid: 5000 checking fee
 */

import type { InvoiceItem, PaymentMethod } from "@/lib/invoices";

export interface ParsedInvoice {
  customer_name: string;
  customer_phone: string | null;
  customer_address: string | null;
  items: Omit<InvoiceItem, "id" | "invoice_id">[];
  /** Resolved against the total by the caller when the message said "paid: full". */
  advance_paid: number;
  pay_in_full: boolean;
  advance_note: string | null;
  notes: string | null;
  warranty: string | null;
  payment_method: PaymentMethod;
}

export type ParseResult =
  | { ok: true; invoice: ParsedInvoice }
  | { ok: false; error: string };

export const HELP = `Send me a job and I'll send back the invoice PDF.

*Customer name on the first line, then the jobs:*

Anushka Perera
0771234567
32" display replacement = 25000

*Each job line ends with its price.* Add as many as you need.

*Optional extras, one per line:*
addr: 14 Station Road, Ja-Ela
warranty: 6 months on the replaced panel
paid: 5000 checking fee   (or "paid" if settled in full)
note: Old panel returned to customer
method: cash / card / bank

*Two more tricks:*
Panel x2 = 18000        -> quantity 2
LC320DXJ | 32" display = 25000   -> model code before the |`;

const PREFIX = /^(addr|address|note|notes|warranty|paid|method)\s*[:=]\s*(.*)$/i;
/** 7+ digits, optional +, spaces/dashes/brackets — and no letters anywhere. */
const PHONE = /^\+?[\d][\d\s\-()]{6,19}$/;
/** Trailing price, with an optional Rs / = / @ in front of it. */
const PRICED = /^(.*?)[\s=@:]*(?:rs\.?\s*)?(\d[\d,]*(?:\.\d{1,2})?)$/i;
/** "Panel x2" -> quantity 2. */
const QTY = /^(.*?)\s*[x×*]\s*(\d{1,4})$/i;

const METHODS: Record<string, PaymentMethod> = {
  cash: "cash",
  card: "card",
  bank: "bank_transfer",
  bank_transfer: "bank_transfer",
  "bank transfer": "bank_transfer",
  transfer: "bank_transfer",
};

function toNumber(raw: string): number {
  return Number(raw.replace(/,/g, "")) || 0;
}

function parseItem(line: string): Omit<InvoiceItem, "id" | "invoice_id"> | null {
  const priced = PRICED.exec(line);
  if (!priced) return null;

  let description = priced[1].trim();
  const unit_price = toNumber(priced[2]);

  let quantity = 1;
  const qty = QTY.exec(description);
  if (qty) {
    description = qty[1].trim();
    quantity = Number(qty[2]) || 1;
  }

  // "LC320DXJ | 32-inch display" -> model + description, matching the PDF's columns.
  let model = "";
  const pipe = description.indexOf("|");
  if (pipe !== -1) {
    model = description.slice(0, pipe).trim();
    description = description.slice(pipe + 1).trim();
  }

  if (!description && !model) return null;
  return { model, description: description || model, quantity, unit_price };
}

export function parseInvoiceMessage(text: string): ParseResult {
  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length === 0) return { ok: false, error: "That message was empty." };

  const invoice: ParsedInvoice = {
    customer_name: lines[0],
    customer_phone: null,
    customer_address: null,
    items: [],
    advance_paid: 0,
    pay_in_full: false,
    advance_note: null,
    notes: null,
    warranty: null,
    payment_method: "cash",
  };

  const unreadable: string[] = [];

  for (const line of lines.slice(1)) {
    const prefixed = PREFIX.exec(line);
    if (prefixed) {
      const key = prefixed[1].toLowerCase();
      const value = prefixed[2].trim();
      if (key === "addr" || key === "address") invoice.customer_address = value || null;
      else if (key === "note" || key === "notes") invoice.notes = value || null;
      else if (key === "warranty") invoice.warranty = value || null;
      else if (key === "method") invoice.payment_method = METHODS[value.toLowerCase()] ?? "cash";
      else if (key === "paid") {
        // "paid: 5000 checking fee" -> amount + what it was for.
        const amount = /^(\d[\d,]*(?:\.\d{1,2})?)\s*(.*)$/.exec(value);
        if (amount) {
          invoice.advance_paid = toNumber(amount[1]);
          invoice.advance_note = amount[2].trim() || null;
        } else {
          invoice.pay_in_full = true;
          invoice.advance_note = value.replace(/^(full|all|in full)\b/i, "").trim() || null;
        }
      }
      continue;
    }

    // A bare "paid" with nothing after it means settled in full.
    if (/^paid$/i.test(line)) {
      invoice.pay_in_full = true;
      continue;
    }

    // Checked before job lines so a 10-digit phone is never read as a price.
    if (!invoice.customer_phone && PHONE.test(line)) {
      invoice.customer_phone = line;
      continue;
    }

    const item = parseItem(line);
    if (item) invoice.items.push(item);
    else unreadable.push(line);
  }

  if (invoice.items.length === 0) {
    return {
      ok: false,
      error:
        "I couldn't find a job line with a price in that.\n\nEvery job line has to end with its price, like:\n32\" display replacement = 25000",
    };
  }

  if (unreadable.length > 0) {
    return {
      ok: false,
      error: `I couldn't read ${unreadable.length === 1 ? "this line" : "these lines"}:\n\n${unreadable
        .map((line) => `• ${line}`)
        .join("\n")}\n\nEvery job line needs a price at the end. Send "help" for the format.`,
    };
  }

  return { ok: true, invoice };
}
