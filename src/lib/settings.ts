/**
 * What the invoice prints — company header, bank details, footer. Mirrors the
 * desktop app's Settings screen (`docs/data/settings.json`). Edit here and push;
 * keep it in step with the app so both produce the same bill.
 */

export interface CompanyDetails {
  name: string;
  tagline: string;
  address: string;
  hotline: string;
  phone: string;
  email_primary: string;
  email_secondary: string;
  website: string;
}

export interface BankDetails {
  account_name: string;
  account_number: string;
  bank_name: string;
  branch: string;
  show_on_invoice: boolean;
}

export interface InvoiceSettings {
  prefix: string;
  number_padding: number;
  /** Printed on the invoice, e.g. "Due on receipt". */
  payment_terms: string;
  footer_note: string;
  default_notes: string;
}

export interface AppSettings {
  company: CompanyDetails;
  bank: BankDetails;
  invoice: InvoiceSettings;
}

export const DEFAULT_SETTINGS: AppSettings = {
  company: {
    name: "Dimuthu Electronics",
    tagline: "TV Repair Center and Original LED TV Display Supplier",
    address: "266, Negombo Road, Ja-Ela 11350, Sri Lanka",
    hotline: "0714478552",
    phone: "0113625118",
    email_primary: "dimuthuelectronic@gmail.com",
    email_secondary: "dimuthuelec@yahoo.com",
    website: "www.dimuthuelectronics.com",
  },
  bank: {
    account_name: "Dimuthu Electronics",
    account_number: "087010006407",
    bank_name: "Hatton National Bank",
    branch: "Jaela",
    show_on_invoice: true,
  },
  invoice: {
    prefix: "INV-",
    number_padding: 5,
    payment_terms: "Due on receipt",
    footer_note: "Thank you for choosing Dimuthu Electronics!",
    default_notes: "",
  },
};
