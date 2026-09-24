import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { settlement, type Invoice, type InvoiceItem } from "@/lib/invoices";
import { DEFAULT_SETTINGS, type AppSettings } from "@/lib/settings";
import {
  amountInWords,
  formatDate,
  formatMoney,
  PAYMENT_METHOD_LABELS,
} from "@/lib/format";

const NAVY = "#0f2b46";
const BLUE = "#2563eb";
const INK = "#1f2937";
const MUTED = "#6b7280";
const LINE = "#e5e7eb";

const styles = StyleSheet.create({
  page: {
    paddingTop: 32,
    paddingBottom: 60,
    paddingHorizontal: 36,
    fontSize: 9,
    fontFamily: "Helvetica",
    color: INK,
  },

  /* Header */
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  companyName: { fontSize: 20, fontFamily: "Helvetica-Bold", color: NAVY, letterSpacing: 0.3 },
  tagline: { fontSize: 7.5, color: BLUE, marginTop: 3, textTransform: "uppercase", letterSpacing: 0.5 },
  companyLine: { fontSize: 8.5, color: MUTED, marginTop: 3 },
  invoiceBlock: { alignItems: "flex-end" },
  invoiceWord: { fontSize: 24, fontFamily: "Helvetica-Bold", color: NAVY, letterSpacing: 2 },
  invoiceNumber: { fontSize: 11, fontFamily: "Helvetica-Bold", color: BLUE, marginTop: 2 },
  paidStamp: {
    marginTop: 8,
    paddingVertical: 4,
    paddingHorizontal: 12,
    border: "1.5pt solid #15803d",
    borderRadius: 3,
    color: "#15803d",
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 2,
  },

  rule: { height: 2, backgroundColor: NAVY, marginTop: 12 },
  ruleThin: { height: 1, backgroundColor: LINE, marginTop: 2 },

  /* Contact strip */
  contactStrip: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: "#f8fafc",
    borderRadius: 3,
  },
  contactItem: { fontSize: 8, color: INK, marginRight: 14 },
  contactLabel: { fontFamily: "Helvetica-Bold", color: NAVY },

  /* Parties */
  parties: { flexDirection: "row", marginTop: 16 },
  partyBox: { flex: 1, paddingRight: 16 },
  boxLabel: {
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
    color: MUTED,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  partyName: { fontSize: 11, fontFamily: "Helvetica-Bold", color: NAVY },
  partyLine: { fontSize: 9, color: INK, marginTop: 2 },
  metaRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 3 },
  metaLabel: { fontSize: 8.5, color: MUTED },
  metaValue: { fontSize: 8.5, fontFamily: "Helvetica-Bold", color: INK },

  /* Items table */
  table: { marginTop: 18, borderRadius: 3, overflow: "hidden" },
  tableHeader: { flexDirection: "row", backgroundColor: NAVY, paddingVertical: 7, paddingHorizontal: 6 },
  th: { fontSize: 8, fontFamily: "Helvetica-Bold", color: "#ffffff", letterSpacing: 0.4 },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 7,
    paddingHorizontal: 6,
    borderBottom: `1pt solid ${LINE}`,
  },
  tableRowAlt: { backgroundColor: "#f9fafb" },
  td: { fontSize: 9, color: INK },

  colNo: { width: 22 },
  colModel: { width: 96, paddingRight: 6 },
  colDesc: { flex: 1, paddingRight: 6 },
  colQty: { width: 34, textAlign: "right" },
  colPrice: { width: 76, textAlign: "right" },
  colAmount: { width: 84, textAlign: "right" },

  /* Totals */
  totalsWrap: { flexDirection: "row", marginTop: 12 },
  wordsBox: { flex: 1, paddingRight: 16 },
  words: { fontSize: 8.5, color: INK, fontFamily: "Helvetica-Oblique", marginTop: 3, lineHeight: 1.4 },
  totalsBox: { width: 244 },
  totalsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderBottom: `1pt solid ${LINE}`,
  },
  totalsLabel: { fontSize: 9, color: MUTED },
  totalsValue: { fontSize: 9.5, color: INK, fontFamily: "Helvetica-Bold" },
  grandRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: NAVY,
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginTop: 4,
    borderRadius: 3,
  },
  grandLabel: { fontSize: 10, fontFamily: "Helvetica-Bold", color: "#ffffff", letterSpacing: 0.5 },
  grandValue: { fontSize: 12, fontFamily: "Helvetica-Bold", color: "#ffffff" },

  /* Panels */
  panels: { flexDirection: "row", marginTop: 18 },
  panel: {
    flex: 1,
    border: `1pt solid ${LINE}`,
    borderRadius: 3,
    padding: 10,
  },
  panelTitle: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: NAVY,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 6,
  },
  bankRow: { flexDirection: "row", marginBottom: 3 },
  bankLabel: { width: 76, fontSize: 8.5, color: MUTED },
  bankValue: { flex: 1, fontSize: 8.5, color: INK, fontFamily: "Helvetica-Bold" },
  noteText: { fontSize: 8.5, color: INK, lineHeight: 1.5 },

  /* Handover acknowledgement (opt-in — an invoice is not a signed document) */
  ackBox: { marginTop: 28 },
  ackText: { fontSize: 8.5, color: INK, marginBottom: 22 },
  ackRow: { flexDirection: "row", justifyContent: "space-between" },
  signBlock: { width: 210 },
  signBlockDate: { width: 130 },
  signLine: { borderTop: `1pt solid ${MUTED}`, marginBottom: 4 },
  signLabel: { fontSize: 8, color: MUTED },

  warrantyBox: {
    marginTop: 16,
    border: `1pt solid ${LINE}`,
    borderLeft: `3pt solid ${NAVY}`,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  warrantyText: { fontSize: 9, color: INK, lineHeight: 1.5, marginTop: 3 },

  /* Footer */
  footer: {
    position: "absolute",
    bottom: 26,
    left: 36,
    right: 36,
  },
  footerRule: { height: 1, backgroundColor: LINE, marginBottom: 6 },
  footerText: { fontSize: 8, color: NAVY, fontFamily: "Helvetica-Bold", textAlign: "center" },
  footerSub: { fontSize: 7.5, color: MUTED, textAlign: "center", marginTop: 3 },
  pageNumber: { position: "absolute", bottom: 12, right: 36, fontSize: 7.5, color: MUTED },
});

interface InvoicePDFProps {
  invoice: Invoice;
  items: InvoiceItem[];
  settings?: AppSettings;
}

export default function InvoicePDF({ invoice, items, settings }: InvoicePDFProps) {
  const { company, bank, invoice: invoiceSettings } = settings ?? DEFAULT_SETTINGS;
  const subtotal = items.reduce(
    (sum, item) => sum + Number(item.quantity) * Number(item.unit_price),
    0
  );
  const { total, paid, balance } = settlement({
    ...invoice,
    total_amount: Number(invoice.total_amount) || subtotal,
  });
  // A settled bill IS the customer's receipt, so it says so: heading, totals and
  // PDF title all switch. An unsettled one is a request for payment and carries
  // no status marking.
  const settled = total > 0 && balance === 0;
  const docType = settled ? "Receipt" : "Invoice";
  const hasBankDetails =
    bank.show_on_invoice &&
    !!(bank.account_name || bank.account_number || bank.bank_name || bank.branch);

  const phones = [company.hotline, company.phone].filter(Boolean);
  const emails = [company.email_primary, company.email_secondary].filter(Boolean);

  return (
    <Document
      title={
        invoice.invoice_number
          ? `${docType} ${invoice.invoice_number}`
          : `${docType} - ${invoice.customer_name}`
      }
      author={company.name}
      subject={`${docType} for ${invoice.customer_name}`}
    >
      <Page size="A4" style={styles.page}>
        {/* ---------- Header ---------- */}
        <View style={styles.header}>
          <View style={{ flex: 1, paddingRight: 20 }}>
            <Text style={styles.companyName}>{company.name}</Text>
            {!!company.tagline && <Text style={styles.tagline}>{company.tagline}</Text>}
            {!!company.address && <Text style={styles.companyLine}>{company.address}</Text>}
          </View>
          <View style={styles.invoiceBlock}>
            <Text style={styles.invoiceWord}>{docType.toUpperCase()}</Text>
            {!!invoice.invoice_number && (
              <Text style={styles.invoiceNumber}>{invoice.invoice_number}</Text>
            )}
            {settled && <Text style={styles.paidStamp}>PAID</Text>}
          </View>
        </View>

        <View style={styles.rule} />
        <View style={styles.ruleThin} />

        {/* ---------- Contact strip ---------- */}
        <View style={styles.contactStrip}>
          {phones.length > 0 && (
            <Text style={styles.contactItem}>
              <Text style={styles.contactLabel}>Hot Line: </Text>
              {phones.join("  /  ")}
            </Text>
          )}
          {emails.length > 0 && (
            <Text style={styles.contactItem}>
              <Text style={styles.contactLabel}>Email: </Text>
              {emails.join("  /  ")}
            </Text>
          )}
          {!!company.website && (
            <Text style={styles.contactItem}>
              <Text style={styles.contactLabel}>Web: </Text>
              {company.website}
            </Text>
          )}
        </View>

        {/* ---------- Bill to / invoice meta ---------- */}
        <View style={styles.parties}>
          <View style={styles.partyBox}>
            <Text style={styles.boxLabel}>Bill To</Text>
            <Text style={styles.partyName}>{invoice.customer_name}</Text>
            {!!invoice.customer_address && (
              <Text style={styles.partyLine}>{invoice.customer_address}</Text>
            )}
            {!!invoice.customer_phone && (
              <Text style={styles.partyLine}>Tel: {invoice.customer_phone}</Text>
            )}
          </View>
          <View style={{ width: 200 }}>
            <Text style={styles.boxLabel}>{docType} Details</Text>
            {!!invoice.invoice_number && (
              <View style={styles.metaRow}>
                <Text style={styles.metaLabel}>Invoice No.</Text>
                <Text style={styles.metaValue}>{invoice.invoice_number}</Text>
              </View>
            )}
            <View style={styles.metaRow}>
              <Text style={styles.metaLabel}>Date</Text>
              <Text style={styles.metaValue}>{formatDate(invoice.invoice_date)}</Text>
            </View>
            <View style={styles.metaRow}>
              <Text style={styles.metaLabel}>Payment Method</Text>
              <Text style={styles.metaValue}>
                {PAYMENT_METHOD_LABELS[invoice.payment_method] || "Cash"}
              </Text>
            </View>
            {/* Terms are a request to pay — meaningless once the invoice is settled. */}
            {!settled && !!invoiceSettings.payment_terms && (
              <View style={styles.metaRow}>
                <Text style={styles.metaLabel}>Payment Terms</Text>
                <Text style={styles.metaValue}>{invoiceSettings.payment_terms}</Text>
              </View>
            )}
          </View>
        </View>

        {/* ---------- Items ---------- */}
        <View style={styles.table}>
          <View style={styles.tableHeader} fixed>
            <Text style={{ ...styles.th, ...styles.colNo }}>#</Text>
            <Text style={{ ...styles.th, ...styles.colModel }}>MODEL</Text>
            <Text style={{ ...styles.th, ...styles.colDesc }}>DESCRIPTION</Text>
            <Text style={{ ...styles.th, ...styles.colQty }}>QTY</Text>
            <Text style={{ ...styles.th, ...styles.colPrice }}>UNIT PRICE</Text>
            <Text style={{ ...styles.th, ...styles.colAmount }}>AMOUNT</Text>
          </View>
          {items.map((item, index) => (
            <View
              key={item.id ?? index}
              style={index % 2 === 1 ? { ...styles.tableRow, ...styles.tableRowAlt } : styles.tableRow}
              wrap={false}
            >
              <Text style={{ ...styles.td, ...styles.colNo }}>{index + 1}</Text>
              <Text style={{ ...styles.td, ...styles.colModel }}>{item.model || "-"}</Text>
              <Text style={{ ...styles.td, ...styles.colDesc }}>{item.description}</Text>
              <Text style={{ ...styles.td, ...styles.colQty }}>{item.quantity}</Text>
              <Text style={{ ...styles.td, ...styles.colPrice }}>
                {formatMoney(item.unit_price)}
              </Text>
              <Text style={{ ...styles.td, ...styles.colAmount }}>
                {formatMoney(Number(item.quantity) * Number(item.unit_price))}
              </Text>
            </View>
          ))}
        </View>

        {/* ---------- Totals ---------- */}
        <View style={styles.totalsWrap}>
          <View style={styles.wordsBox}>
            <Text style={styles.boxLabel}>
              {settled ? "Amount Paid in Words" : "Amount Due in Words"}
            </Text>
            <Text style={styles.words}>{amountInWords(settled ? total : balance)}</Text>
          </View>
          <View style={styles.totalsBox}>
            <View style={styles.totalsRow}>
              <Text style={styles.totalsLabel}>Total</Text>
              <Text style={styles.totalsValue}>Rs. {formatMoney(total)}</Text>
            </View>
            {paid > 0 && !settled && (
              <View style={styles.totalsRow}>
                <Text style={styles.totalsLabel}>Less: Advance Paid</Text>
                <Text style={styles.totalsValue}>- Rs. {formatMoney(paid)}</Text>
              </View>
            )}
            {!!invoice.advance_note && paid > 0 && !settled && (
              <View style={{ paddingHorizontal: 8, paddingBottom: 4 }}>
                <Text style={{ fontSize: 7.5, color: MUTED }}>{invoice.advance_note}</Text>
              </View>
            )}
            <View style={styles.grandRow}>
              <Text style={styles.grandLabel}>{settled ? "AMOUNT PAID" : "AMOUNT DUE"}</Text>
              <Text style={styles.grandValue}>Rs. {formatMoney(settled ? total : balance)}</Text>
            </View>
          </View>
        </View>

        {/* ---------- Warranty (only when the job carries one) ---------- */}
        {!!invoice.warranty && (
          <View style={styles.warrantyBox} wrap={false}>
            <Text style={styles.panelTitle}>Warranty</Text>
            <Text style={styles.warrantyText}>{invoice.warranty}</Text>
          </View>
        )}

        {/* ---------- Bank details + notes ---------- */}
        {(hasBankDetails || !!invoice.notes) && (
          <View style={styles.panels}>
            {hasBankDetails && (
              <View style={{ ...styles.panel, marginRight: !!invoice.notes ? 12 : 0 }}>
                <Text style={styles.panelTitle}>Bank Transfer Details</Text>
                {!!bank.account_name && (
                  <View style={styles.bankRow}>
                    <Text style={styles.bankLabel}>Account Name</Text>
                    <Text style={styles.bankValue}>{bank.account_name}</Text>
                  </View>
                )}
                {!!bank.account_number && (
                  <View style={styles.bankRow}>
                    <Text style={styles.bankLabel}>Account No.</Text>
                    <Text style={styles.bankValue}>{bank.account_number}</Text>
                  </View>
                )}
                {!!bank.bank_name && (
                  <View style={styles.bankRow}>
                    <Text style={styles.bankLabel}>Bank</Text>
                    <Text style={styles.bankValue}>{bank.bank_name}</Text>
                  </View>
                )}
                {!!bank.branch && (
                  <View style={styles.bankRow}>
                    <Text style={styles.bankLabel}>Branch</Text>
                    <Text style={styles.bankValue}>{bank.branch}</Text>
                  </View>
                )}
              </View>
            )}
            {!!invoice.notes && (
              <View style={styles.panel}>
                <Text style={styles.panelTitle}>Notes</Text>
                <Text style={styles.noteText}>{invoice.notes}</Text>
              </View>
            )}
          </View>
        )}

        {/* ---------- Handover acknowledgement (only when asked for) ---------- */}
        {invoice.show_signature && (
          <View style={styles.ackBox} wrap={false}>
            <Text style={styles.ackText}>
              Received the above items in good working order.
            </Text>
            <View style={styles.ackRow}>
              <View style={styles.signBlock}>
                <View style={styles.signLine} />
                <Text style={styles.signLabel}>Customer Signature</Text>
              </View>
              <View style={styles.signBlockDate}>
                <View style={styles.signLine} />
                <Text style={styles.signLabel}>Date</Text>
              </View>
            </View>
          </View>
        )}

        {/* ---------- Footer ---------- */}
        <View style={styles.footer} fixed>
          <View style={styles.footerRule} />
          <Text style={styles.footerText}>{invoiceSettings.footer_note}</Text>
          <Text style={styles.footerSub}>
            {[
              phones.length ? `Hot Line ${phones.join(" / ")}` : "",
              emails.join(" · "),
              company.website,
            ]
              .filter(Boolean)
              .join("   |   ")}
          </Text>
        </View>
        <Text
          style={styles.pageNumber}
          fixed
          render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`}
        />
      </Page>
    </Document>
  );
}
