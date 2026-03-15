import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dimuthuelectronics.com"),
  title: {
    default:
      "Dimuthu Electronics | #1 TV Repair, Display Sales & Installation in Sri Lanka",
    template: "%s | Dimuthu Electronics",
  },
  description:
    "LED/LCD TV display sales, professional installation, and expert repair services in Ja-Ela, Sri Lanka. 30+ years experience, 30,000+ jobs completed. Free diagnostics. Call 071 447 8552.",
  keywords: [
    "TV repair Sri Lanka",
    "TV repair Ja-Ela",
    "LED TV repair",
    "LCD TV repair",
    "TV screen repair",
    "TV display replacement",
    "TV panel replacement",
    "Samsung TV repair Sri Lanka",
    "LG TV repair Sri Lanka",
    "Sony TV repair Sri Lanka",
    "Philips TV repair",
    "Hisense TV repair",
    "TCL TV repair",
    "TV installation Sri Lanka",
    "TV wall mounting",
    "electronics repair Sri Lanka",
    "TV board repair",
    "TV motherboard repair",
    "TV backlight repair",
    "TV power supply repair",
    "TV screen replacement",
    "best TV repair Sri Lanka",
    "TV display for sale Sri Lanka",
    "Android TV box Sri Lanka",
    "LED display panel Sri Lanka",
    "TV panel price Sri Lanka",
    "TV repair Negombo",
    "TV repair Gampaha",
    "TV repair Wattala",
    "TV repair Colombo",
    "TV repair Kandana",
    "TV repair Ragama",
    "TV repair near me",
    "Dimuthu Electronics",
    "Dimuthu Electronics Sri Lanka",
    "Dimuthu Electronics Ja-Ela",
  ],
  authors: [{ name: "Dimuthu Electronics" }],
  creator: "Dimuthu Electronics",
  publisher: "Dimuthu Electronics",
  openGraph: {
    type: "website",
    locale: "en_LK",
    siteName: "Dimuthu Electronics",
    title:
      "Dimuthu Electronics | #1 TV Repair, Display Sales & Installation in Sri Lanka",
    description:
      "LED/LCD TV display sales, professional installation, and expert repair services in Ja-Ela, Sri Lanka. 30+ years experience. Call 071 447 8552.",
    images: [
      {
        url: "/images/storefront.webp",
        width: 1200,
        height: 630,
        alt: "Dimuthu Electronics storefront in Ja-Ela, Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dimuthu Electronics | #1 TV Repair, Display Sales & Installation in Sri Lanka",
    description:
      "LED/LCD TV display sales, professional installation, and expert repair services in Ja-Ela, Sri Lanka. 30+ years experience.",
    images: ["/images/storefront.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://www.dimuthuelectronics.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ElectronicsStore"],
      "@id": "https://www.dimuthuelectronics.com/#business",
      name: "Dimuthu Electronics",
      description:
        "LED/LCD TV display sales, professional installation, and expert repair services in Ja-Ela, Sri Lanka. Serving since 1996.",
      url: "https://www.dimuthuelectronics.com",
      telephone: "+94714478552",
      foundingDate: "1996",
      image: "https://www.dimuthuelectronics.com/images/storefront.webp",
      logo: "https://www.dimuthuelectronics.com/images/storefront.webp",
      address: {
        "@type": "PostalAddress",
        streetAddress: "266 Negombo Road",
        addressLocality: "Ja-Ela",
        postalCode: "11350",
        addressCountry: "LK",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 7.0756,
        longitude: 79.8836,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "17:30",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.6",
        reviewCount: "48",
        bestRating: "5",
      },
      sameAs: [
        "https://www.facebook.com/p/Dimuthu-Electronics-100063125384683/",
        "https://www.tiktok.com/@dimuthu_electronics",
      ],
      areaServed: [
        { "@type": "City", name: "Ja-Ela" },
        { "@type": "City", name: "Wattala" },
        { "@type": "City", name: "Negombo" },
        { "@type": "City", name: "Colombo" },
        { "@type": "City", name: "Gampaha" },
        { "@type": "City", name: "Kandana" },
        { "@type": "City", name: "Ragama" },
        { "@type": "City", name: "Kelaniya" },
        { "@type": "Country", name: "Sri Lanka" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Electronics Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "LED/LCD TV Repairs",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Display Installation",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Display Panel Sales",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Board-Level Repairs",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.dimuthuelectronics.com/#website",
      url: "https://www.dimuthuelectronics.com",
      name: "Dimuthu Electronics",
      publisher: {
        "@id": "https://www.dimuthuelectronics.com/#business",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.dimuthuelectronics.com/#organization",
      name: "Dimuthu Electronics",
      url: "https://www.dimuthuelectronics.com",
      logo: "https://www.dimuthuelectronics.com/images/storefront.webp",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+94714478552",
        contactType: "customer service",
        areaServed: "LK",
        availableLanguage: ["English", "Sinhala"],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <TopBar />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
