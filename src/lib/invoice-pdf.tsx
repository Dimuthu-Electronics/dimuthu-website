/**
 * Renders a parsed WhatsApp message into the same A4 invoice the desktop app
 * produces — `InvoicePDF.tsx` is a straight copy of the app's template, so the
 * bill a customer gets over WhatsApp is identical to one printed in the shop.
 *
 * These invoices carry no number. The shop's numbering continues in the paper
 * book and in the desktop app; a bot-issued final bill stays out of that
 * sequence rather than punching holes in it.
 */

import { renderToBuffer } from "@react-pdf/renderer";
import InvoicePDF from "@/components/InvoicePDF";
import { formatRupees } from "@/lib/format";
import type { ParsedInvoice } from "@/lib/invoice-message";
import { derivePaymentStatus, settlement, type Invoice } from "@/lib/invoices";
import { DEFAULT_SETTINGS } from "@/lib/settings";

/** Today in Ja-Ela, regardless of where the server happens to be running. */
function todayInColombo(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Colombo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function safeFilename(name: string, settled: boolean): string {
  const label = settled ? "Receipt" : "Invoice";
  const cleaned = name.replace(/[\\/:*?"<>|]/g, "-").replace(/\s+/g, " ").trim();
  return cleaned ? `${label} - ${cleaned}.pdf` : `${label}.pdf`;
}

export interface BuiltInvoice {
  data: Uint8Array;
  filename: string;
  caption: string;
}

export async function buildInvoicePdf(parsed: ParsedInvoice): Promise<BuiltInvoice> {
  const items = parsed.items.map((item, index) => ({
    ...item,
    id: `item-${index + 1}`,
  }));

  const total = items.reduce(
    (sum, item) => sum + Number(item.quantity) * Number(item.unit_price),
    0
  );
  const advance_paid = parsed.pay_in_full ? total : parsed.advance_paid;

  const invoice: Invoice = {
    id: "whatsapp",
    invoice_number: "", // deliberately unnumbered — nothing is printed
    customer_name: parsed.customer_name,
    customer_phone: parsed.customer_phone,
    customer_address: parsed.customer_address,
    invoice_date: todayInColombo(),
    total_amount: total,
    advance_paid,
    advance_note: parsed.advance_note,
    payment_status: derivePaymentStatus(total, advance_paid),
    payment_method: parsed.payment_method,
    notes: parsed.notes ?? DEFAULT_SETTINGS.invoice.default_notes ?? null,
    warranty: parsed.warranty,
    show_signature: false, // nobody can sign a PDF sent over WhatsApp
    pdf_path: null,
    created_at: new Date().toISOString(),
    invoice_items: items,
  };

  const data = await renderToBuffer(
    <InvoicePDF invoice={invoice} items={items} settings={DEFAULT_SETTINGS} />
  );

  const { paid, balance } = settlement(invoice);
  const settled = total > 0 && balance === 0;
  const lines = [`*${parsed.customer_name}*`, `Total ${formatRupees(total)}`];
  if (settled) lines.push("Paid in full");
  else if (paid > 0) lines.push(`Paid ${formatRupees(paid)} · Due ${formatRupees(balance)}`);

  return {
    data,
    filename: safeFilename(parsed.customer_name, settled),
    caption: lines.join("\n"),
  };
}
