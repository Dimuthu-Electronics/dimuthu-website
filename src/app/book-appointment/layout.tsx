import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book an Appointment | TV Repair & Installation",
  description:
    "Book an appointment for TV repair, display installation, or panel replacement at Dimuthu Electronics, Ja-Ela. Free diagnostics. Same-week turnaround on most repairs.",
  alternates: {
    canonical: "https://www.dimuthuelectronics.com/book-appointment",
  },
  openGraph: {
    title: "Book an Appointment | TV Repair & Installation | Dimuthu Electronics",
    description:
      "Book an appointment for TV repair, display installation, or panel replacement. Free diagnostics. Ja-Ela, Sri Lanka.",
    url: "https://www.dimuthuelectronics.com/book-appointment",
    images: [
      {
        url: "/images/storefront.webp",
        width: 1200,
        height: 630,
        alt: "Dimuthu Electronics storefront in Ja-Ela, Sri Lanka",
      },
    ],
  },
};

export default function BookAppointmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
