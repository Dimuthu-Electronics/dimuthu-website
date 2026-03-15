import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Ja-Ela, Sri Lanka",
  description:
    "Contact Dimuthu Electronics at 266 Negombo Road, Ja-Ela 11350, Sri Lanka. Call 071 447 8552 or 077 450 8318. Open Mon-Sat 9 AM to 5:30 PM. TV repair, display sales & installation.",
  alternates: {
    canonical: "https://www.dimuthuelectronics.com/contact",
  },
  openGraph: {
    title: "Contact Us | Dimuthu Electronics | Ja-Ela, Sri Lanka",
    description:
      "266 Negombo Road, Ja-Ela 11350. Call 071 447 8552. Open Mon-Sat 9 AM - 5:30 PM. TV repair, displays & installation.",
    url: "https://www.dimuthuelectronics.com/contact",
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
