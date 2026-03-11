import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Dimuthu Electronics | TV Repairs, Installation & Sales",
  description: "LED/LCD TV repair, display installation, and panel sales in Ja-Ela. Samsung, LG, Sony, and all major brands. Call 071 447 8552.",
};

const services = [
  {
    title: "LED/LCD TV Repairs",
    description:
      "Backlight issues, cracked screens, motherboard problems, power supply failures — we handle it all. Bring in your Samsung, LG, Sony, Philips, or any other brand and our technicians will diagnose the issue for free.",
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
      "We install TV displays for homes, offices, restaurants, and shops. Our team handles wall mounting, cable management, and setup — from 32\" bedroom TVs to 75\" commercial displays.",
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
      "Direct imports — competitive pricing",
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
      "Our workshop is equipped with microscopes and professional soldering equipment for board-level diagnosis and repair. When others say a TV can't be fixed, bring it to us — we often repair what others write off.",
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
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-bold">Our Services</h1>
          <p className="mt-3 text-blue-100 max-w-2xl text-lg">
            TV display sales, installation, and repairs — for all major brands.
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
            and what it costs — no obligation.
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
