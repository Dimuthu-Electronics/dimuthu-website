"use client";

import { useState } from "react";
import type { FormEvent } from "react";

interface DisplayRow {
  size: string;
  model: string;
  quantity: string;
}

const SIZES = ["32\"", "40\"", "43\"", "50\"", "55\"", "65\"", "Other"];

export default function WholesaleForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [rows, setRows] = useState<DisplayRow[]>([{ size: "", model: "", quantity: "" }]);
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const addRow = () => {
    setRows([...rows, { size: "", model: "", quantity: "" }]);
  };

  const removeRow = (index: number) => {
    if (rows.length === 1) return;
    setRows(rows.filter((_, i) => i !== index));
  };

  const updateRow = (index: number, field: keyof DisplayRow, value: string) => {
    const updated = [...rows];
    updated[index] = { ...updated[index], [field]: value };
    setRows(updated);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const filledRows = rows.filter((r) => r.size && r.quantity);
    if (filledRows.length === 0) return;

    const displayList = filledRows
      .map((r) => `${r.quantity}x ${r.size} — ${r.model || "Any model"}`)
      .join("\n");

    const message = encodeURIComponent(
      `*Wholesale Quotation Request*\n\nName: ${name}\nPhone: ${phone}${email ? `\nEmail: ${email}` : ""}${company ? `\nCompany: ${company}` : ""}\n\n*Displays Needed:*\n${displayList}${notes ? `\n\n*Notes:* ${notes}` : ""}`
    );

    window.open(`https://wa.me/94774508318?text=${message}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-foreground">Quotation Request Sent!</h3>
        <p className="mt-2 text-muted">
          We&apos;ll review your order and respond with a quotation shortly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setRows([{ size: "", model: "", quantity: "" }]);
            setName("");
            setPhone("");
            setEmail("");
            setCompany("");
            setNotes("");
          }}
          className="mt-4 text-primary font-medium hover:text-primary-dark transition-colors"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Contact info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ws-name" className="block text-sm font-medium text-foreground mb-1.5">
            Name *
          </label>
          <input
            type="text"
            id="ws-name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="ws-phone" className="block text-sm font-medium text-foreground mb-1.5">
            Phone *
          </label>
          <input
            type="tel"
            id="ws-phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            placeholder="07X XXX XXXX"
          />
        </div>
        <div>
          <label htmlFor="ws-email" className="block text-sm font-medium text-foreground mb-1.5">
            Email
          </label>
          <input
            type="email"
            id="ws-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="ws-company" className="block text-sm font-medium text-foreground mb-1.5">
            Company / Shop Name
          </label>
          <input
            type="text"
            id="ws-company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full px-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            placeholder="Your business name"
          />
        </div>
      </div>

      {/* Display rows */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Displays Needed *
        </label>
        <p className="text-xs text-muted mb-3">
          Add each display model you need as a separate row. E.g. 55&quot; | HV550QUB-F1L | 3 pcs
        </p>
        <div className="space-y-3">
          {rows.map((row, i) => (
            <div key={i} className="bg-white border border-border rounded-xl p-3 space-y-3 sm:space-y-0 sm:flex sm:gap-3 sm:items-center">
              <div className="sm:w-36 shrink-0">
                <label className="block text-xs text-muted mb-1 sm:hidden">Size</label>
                <select
                  value={row.size}
                  onChange={(e) => updateRow(i, "size", e.target.value)}
                  required
                  className="w-full px-3 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors bg-white text-sm"
                >
                  <option value="">Size</option>
                  {SIZES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-xs text-muted mb-1 sm:hidden">Panel Model</label>
                <input
                  type="text"
                  value={row.model}
                  onChange={(e) => updateRow(i, "model", e.target.value)}
                  placeholder="Panel model (e.g. HV550QUB-F1L)"
                  className="w-full px-3 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors text-sm"
                />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-20">
                  <label className="block text-xs text-muted mb-1 sm:hidden">Qty</label>
                  <input
                    type="number"
                    min="1"
                    value={row.quantity}
                    onChange={(e) => updateRow(i, "quantity", e.target.value)}
                    required
                    placeholder="Qty"
                    className="w-full px-3 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors text-sm"
                  />
                </div>
                {rows.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeRow(i)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors shrink-0"
                    aria-label="Remove row"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Column headers hint — desktop only */}
        {rows.length === 1 && (
          <div className="hidden sm:flex gap-3 mt-1 px-3 text-xs text-muted">
            <span className="w-36 shrink-0">Display size</span>
            <span className="flex-1">Panel model number</span>
            <span className="w-20">Quantity</span>
          </div>
        )}

        <button
          type="button"
          onClick={addRow}
          className="mt-3 inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:text-primary-dark transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add another display
        </button>
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="ws-notes" className="block text-sm font-medium text-foreground mb-1.5">
          Additional Notes
        </label>
        <textarea
          id="ws-notes"
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full px-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors resize-none"
          placeholder="Any specific requirements, brand preferences, etc."
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors inline-flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Request Quotation via WhatsApp
      </button>
    </form>
  );
}
