import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TV Repair & Installation Services | LED/LCD TV Repairs Ja-Ela",
  description:
    "Expert LED/LCD TV repair, screen replacement, backlight repair, motherboard fix, TV wall mounting & installation in Ja-Ela, Sri Lanka. Samsung, LG, Sony, Philips & all brands. Free diagnostics. Call 071 447 8552.",
  alternates: {
    canonical: "https://www.dimuthuelectronics.com/services",
  },
  openGraph: {
    title: "TV Repair & Installation Services | Dimuthu Electronics",
    description:
      "Expert LED/LCD TV repair, screen replacement, backlight repair, TV installation in Ja-Ela. All brands serviced. Free diagnostics.",
    url: "https://www.dimuthuelectronics.com/services",
    images: [
      {
        url: "/images/technicians-working.webp",
        width: 1200,
        height: 630,
        alt: "Technicians repairing TVs at Dimuthu Electronics",
      },
    ],
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    ...[
      {
        name: "LED/LCD TV Repairs",
        description:
          "Complete TV repair service including screen replacement, backlight repair, motherboard fix, and power supply repair for all major brands.",
      },
      {
        name: "Display Installation",
        description:
          "Professional TV wall mounting, cable management, and display setup for homes, offices, and commercial spaces.",
      },
      {
        name: "Display Panel Sales",
        description:
          "Direct import LED and LCD display panels from 32 to 75 inches. Samsung, LG, Sony, Hisense, TCL and more at competitive prices.",
      },
      {
        name: "Board-Level Repairs",
        description:
          "Microscope-assisted PCB inspection, component-level soldering, T-CON board repairs, and chip-level diagnostics.",
      },
    ].map((s) => ({
      "@type": "Service",
      name: s.name,
      description: s.description,
      provider: {
        "@id": "https://www.dimuthuelectronics.com/#business",
      },
      areaServed: {
        "@type": "Country",
        name: "Sri Lanka",
      },
    })),
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does TV repair cost in Sri Lanka?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TV repair costs vary depending on the issue. Simple fixes like backlight replacement start from a few thousand rupees, while screen replacements depend on the panel size and brand. We offer free diagnostics so you know the exact cost before committing to a repair.",
          },
        },
        {
          "@type": "Question",
          name: "Can you replace a broken TV screen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we replace broken TV screens for all major brands including Samsung, LG, Sony, Philips, and more. We import original display panels directly, so we can offer competitive prices on screen replacements from 32 to 75 inches.",
          },
        },
        {
          "@type": "Question",
          name: "How long does TV repair take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most repairs are completed within the same week. Simple fixes like backlight repairs can be done within 24 hours. Screen replacements typically take 1-3 days depending on panel availability.",
          },
        },
        {
          "@type": "Question",
          name: "Do you repair Samsung, LG, and Sony TVs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we repair all major TV brands including Samsung, LG, Sony, Philips, Toshiba, Hisense, TCL, Sharp, Hitachi, Haier, JVC, Innovex, Softlogic, and Panasonic. We have 30+ years of experience with all these brands.",
          },
        },
        {
          "@type": "Question",
          name: "What areas do you serve for TV repair?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We are based in Ja-Ela on Negombo Road. Customers bring TVs from Ja-Ela, Wattala, Negombo, Colombo, Gampaha, Kandana, Ragama, Kelaniya, and across Sri Lanka. We also offer installation services in these areas.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer warranty on TV repairs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we offer warranty on all our repairs and replacement panels. Display panels come with 6-month or 1-year warranty options. If an issue recurs within the warranty period, we fix it free of charge.",
          },
        },
        {
          "@type": "Question",
          name: "My TV has no picture but has sound. Can you fix it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, this is a common issue usually caused by faulty backlights, a damaged T-CON board, or a failing display panel. We offer free diagnostics to identify the exact cause and provide a repair quote before proceeding.",
          },
        },
        {
          "@type": "Question",
          name: "Can old TVs be repaired or should I buy a new one?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In many cases, old TVs can be repaired at a fraction of the cost of buying new. We specialize in reviving TVs that other shops have written off. Bring it in for a free diagnostic and we will advise you honestly on whether repair is worthwhile.",
          },
        },
      ],
    },
  ],
};

const services = [
  {
    title: "LED/LCD TV Repairs",
    description:
      "Backlight issues, cracked screens, motherboard problems, power supply failures: we handle it all. Bring in your Samsung, LG, Sony, Philips, or any other brand and our technicians will diagnose the issue for free.",
    details: [
      "Screen and panel replacement",
      "Backlight and LED strip repairs",
      "Motherboard and power supply fixes",
      "Software and firmware updates",
      "Free diagnostic assessment",
    ],
    image: "/images/technicians-working.webp",
    imageAlt: "Technicians repairing TVs at Dimuthu Electronics",
  },
  {
    title: "Display Installation",
    description:
      "We install TV displays for homes, offices, restaurants, and shops. Our team handles wall mounting, cable management, and setup, from 32\" bedroom TVs to 75\" commercial displays.",
    details: [
      "Wall mounting for all sizes",
      "Cable concealment and management",
      "Viewing angle optimization",
      "Commercial and multi-screen setups",
      "Sound system connection",
    ],
    image: "/images/tv-testing.webp",
    imageAlt: "Technician testing a large display after installation",
  },
  {
    title: "Display Panel Sales",
    description:
      "We import LED and LCD panels directly from international suppliers. This means you get genuine panels at better prices than most local retailers. Available in all sizes from 32\" to 75\"+ for Samsung, LG, Sony, Hisense, TCL, and more.",
    details: [
      "Direct imports, competitive pricing",
      "All sizes: 32\", 43\", 50\", 55\", 65\", 75\"",
      "Genuine panels with warranty",
      "Replacement panels for repairs",
      "Bulk orders for businesses",
    ],
    image: "/images/workshop-panels.webp",
    imageAlt: "TV display panels at Dimuthu Electronics workshop",
  },
  {
    title: "Board-Level Repairs",
    description:
      "Our workshop is equipped with microscopes and professional soldering equipment for board-level diagnosis and repair. When others say a TV can't be fixed, bring it to us. We often repair what others write off.",
    details: [
      "Microscope-assisted PCB inspection",
      "Component-level soldering",
      "T-CON board repairs",
      "Power board component replacement",
      "Chip-level diagnostics",
    ],
    image: "/images/pcb-microscope.webp",
    imageAlt: "Microscope examining TV circuit board at Dimuthu Electronics",
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-bold">Our Services</h1>
          <p className="mt-3 text-blue-100 max-w-2xl text-lg">
            TV display sales, installation, and repairs for all major brands.
            Visit us at 266 Negombo Road, Ja-Ela or call 071 447 8552.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{service.title}</h2>
                  <p className="mt-3 text-muted leading-relaxed">{service.description}</p>
                  <ul className="mt-5 space-y-2.5">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5">
                        <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-foreground text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative rounded-2xl overflow-hidden h-72 md:h-80 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Got a TV that needs fixing?
          </h2>
          <p className="mt-3 text-muted max-w-xl mx-auto">
            Bring it in for a free diagnostic. We&apos;ll tell you exactly what&apos;s wrong
            and what it costs, no obligation.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-appointment"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
            >
              Book an Appointment
            </Link>
            <a
              href="tel:0714478552"
              className="inline-flex items-center justify-center px-8 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-white transition-colors"
            >
              Call 071 447 8552
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
