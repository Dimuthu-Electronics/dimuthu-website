/**
 * Invoice types and money maths, kept byte-compatible with the desktop app's
 * `src/lib/invoices.ts` so `InvoicePDF.tsx` can be copied across untouched.
 * The desktop version also reads and writes `invoices.json`; the bot issues
 * one-off bills that are never stored, so all of that is left out.
 */

export type PaymentMethod = "cash" | "card" | "bank_transfer";
/** Internal bookkeeping only — this is not printed on the customer's copy. */
export type PaymentStatus = "unpaid" | "partial" | "paid";

export interface InvoiceItem {
  id?: string;
  invoice_id?: string;
  model: string;
  description: string;
  quantity: number;
  unit_price: number;
}

export interface Invoice {
  id: string;
  invoice_number: string;
  customer_name: string;
  customer_phone: string | null;
  customer_address: string | null;
  invoice_date: string;
  total_amount: number;
  /** Money already received — a checking fee, a deposit, or payment in full. */
  advance_paid: number;
  /** What the advance was for, e.g. "Checking fee received 10 Aug". */
  advance_note: string | null;
  payment_status: PaymentStatus;
  payment_method: PaymentMethod;
  notes: string | null;
  /** Free text, e.g. "6 months on the replaced panel". Blank prints nothing. */
  warranty: string | null;
  /** Invoices are not signed documents; this is opt-in for in-person handover. */
  show_signature: boolean;
  pdf_path: string | null;
  created_at: string;
  updated_at?: string;
  invoice_items: InvoiceItem[];
}

/** Clamps the advance to the total, so an overpayment never goes negative. */
export function settlement(invoice: Pick<Invoice, "total_amount" | "advance_paid">) {
  const total = Number(invoice.total_amount) || 0;
  const paid = Math.max(0, Math.min(Number(invoice.advance_paid) || 0, total));
  return { total, paid, balance: Math.max(0, total - paid) };
}

/** Status follows the money, so the two can never contradict each other. */
export function derivePaymentStatus(total: number, advancePaid: number): PaymentStatus {
  const paid = Number(advancePaid) || 0;
  if (paid <= 0) return "unpaid";
  return paid >= (Number(total) || 0) ? "paid" : "partial";
}
