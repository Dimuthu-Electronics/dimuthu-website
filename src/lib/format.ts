/** Formatting helpers shared by the invoice screen and the PDF template. */

/** 12500 -> "12,500.00" */
export function formatMoney(value: number | string): string {
  const n = Number(value) || 0;
  const [whole, decimals] = Math.abs(n).toFixed(2).split(".");
  const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${n < 0 ? "-" : ""}${grouped}.${decimals}`;
}

/** 12500 -> "Rs. 12,500.00" */
export function formatRupees(value: number | string): string {
  return `Rs. ${formatMoney(value)}`;
}

/** "2026-08-13" -> "13 August 2026" */
export function formatDate(iso: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso || "");
  if (!match) return iso || "";
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const [, year, month, day] = match;
  return `${Number(day)} ${months[Number(month) - 1]} ${year}`;
}

const ONES = [
  "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
  "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
  "Seventeen", "Eighteen", "Nineteen",
];
const TENS = [
  "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety",
];

function belowThousand(n: number): string {
  if (n < 20) return ONES[n];
  if (n < 100) return `${TENS[Math.floor(n / 10)]}${n % 10 ? ` ${ONES[n % 10]}` : ""}`;
  return `${ONES[Math.floor(n / 100)]} Hundred${n % 100 ? ` ${belowThousand(n % 100)}` : ""}`;
}

function wholeNumberToWords(n: number): string {
  if (n === 0) return "Zero";
  const scales: [number, string][] = [
    [1_000_000_000, "Billion"],
    [1_000_000, "Million"],
    [1_000, "Thousand"],
  ];
  let remaining = n;
  const parts: string[] = [];
  for (const [size, label] of scales) {
    if (remaining >= size) {
      parts.push(`${wholeNumberToWords(Math.floor(remaining / size))} ${label}`);
      remaining %= size;
    }
  }
  if (remaining > 0) parts.push(belowThousand(remaining));
  return parts.join(" ");
}

/** 12500.5 -> "Rupees Twelve Thousand Five Hundred and Cents Fifty Only" */
export function amountInWords(value: number | string): string {
  const n = Math.max(0, Number(value) || 0);
  const rupees = Math.floor(n);
  const cents = Math.round((n - rupees) * 100);
  const words = `Rupees ${wholeNumberToWords(rupees)}`;
  return cents > 0
    ? `${words} and Cents ${wholeNumberToWords(cents)} Only`
    : `${words} Only`;
}

/** Supplier orders are placed abroad, so they are priced in USD or RMB. */
export type OrderCurrency = "USD" | "RMB";

export const ORDER_CURRENCIES: OrderCurrency[] = ["USD", "RMB"];

/** 1200 -> "USD 1,200.00". The code is spelled out so RMB is never read as yen. */
export function formatOrderAmount(value: number | string, currency: OrderCurrency): string {
  return `${currency} ${formatMoney(value)}`;
}

export const PAYMENT_METHOD_LABELS: Record<string, string> = {
  cash: "Cash",
  card: "Card",
  bank_transfer: "Bank Transfer",
};
