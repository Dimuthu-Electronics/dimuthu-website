import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | 30+ Years of TV Repair Since 1996",
  description:
    "Dimuthu Electronics has been serving Ja-Ela and Sri Lanka since 1996. 30,000+ jobs completed, direct panel imports, 14+ brands serviced. LED/LCD TV display sales, installation & expert repairs.",
  alternates: {
    canonical: "https://www.dimuthuelectronics.com/about",
  },
  openGraph: {
    title: "About Us | 30+ Years of TV Repair Since 1996 | Dimuthu Electronics",
    description:
      "Serving Ja-Ela since 1996. 30,000+ jobs, direct imports, 14+ brands. LED/LCD TV displays, installation & repairs.",
    url: "https://www.dimuthuelectronics.com/about",
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

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-bold">About Dimuthu Electronics</h1>
          <p className="mt-3 text-blue-100 max-w-2xl text-lg">
            Serving Ja-Ela and Sri Lanka since 1996. Over 30 years in the electronics business.
          </p>
        </div>
      </section>

      {/* Our Story — with storefront photo */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Dimuthu Electronics opened its doors in <strong className="text-foreground">1996</strong> at
                  266 Negombo Road, Ja-Ela. What started as a small TV repair shop has grown into one
                  of the area&apos;s go-to places for LED/LCD display sales, installation, and repairs.
                </p>
                <p>
                  Over three decades, we&apos;ve built direct relationships with international display
                  panel suppliers. This means we can import genuine Samsung, LG, Sony, Philips, Toshiba,
                  and other brand panels at prices that beat most local retailers.
                </p>
                <p>
                  Our workshop is equipped with professional-grade tools including microscopes for
                  board-level PCB inspection and repair. When other shops say a TV can&apos;t be
                  fixed, customers bring it to us — and we often get it working again.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-80">
              <Image
                src="/images/storefront.webp"
                alt="Dimuthu Electronics shop on Negombo Road, Ja-Ela"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Photos */}
      <section className="bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">Our Workshop</h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-10">
            A look inside where the work happens — our team, tools, and repair processes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative rounded-xl overflow-hidden h-56">
              <Image src="/images/workshop-wide.webp" alt="Dimuthu Electronics workshop" fill className="object-cover" />
            </div>
            <div className="relative rounded-xl overflow-hidden h-56">
              <Image src="/images/technicians-working.webp" alt="Technicians working on TV repairs" fill className="object-cover" />
            </div>
            <div className="relative rounded-xl overflow-hidden h-56">
              <Image src="/images/pcb-microscope.webp" alt="Board-level PCB inspection with microscope" fill className="object-cover" />
            </div>
            <div className="relative rounded-xl overflow-hidden h-56">
              <Image src="/images/tv-testing.webp" alt="Testing a repaired TV display" fill className="object-cover" />
            </div>
            <div className="relative rounded-xl overflow-hidden h-56">
              <Image src="/images/repair-workstation.webp" alt="Professional repair workstation" fill className="object-cover" />
            </div>
            <div className="relative rounded-xl overflow-hidden h-56">
              <Image src="/images/repair-center.webp" alt="TV displays in the repair center" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-10">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-border rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">30+</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Years of Experience</h3>
              <p className="text-muted text-sm leading-relaxed">
                Operating since 1996. We&apos;ve seen every TV problem there is and fixed most of them.
                That experience means faster diagnostics and better repairs.
              </p>
            </div>
            <div className="border border-border rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">14+</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Brands We Service</h3>
              <p className="text-muted text-sm leading-relaxed">
                Samsung, LG, Sony, Philips, Toshiba, Hisense, TCL, Sharp, Hitachi, Haier, JVC,
                Innovex, Softlogic, Panasonic — and more.
              </p>
            </div>
            <div className="border border-border rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">Direct</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Import Capability</h3>
              <p className="text-muted text-sm leading-relaxed">
                We import display panels directly from international suppliers. No middlemen means
                genuine products at competitive prices for our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Come visit us in Ja-Ela
          </h2>
          <p className="mt-3 text-blue-100 max-w-xl mx-auto">
            266 Negombo Road, Ja-Ela. Open Monday to Saturday, 9 AM to 5:30 PM.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-appointment"
              className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-foreground font-semibold rounded-lg hover:bg-secondary-dark transition-colors"
            >
              Book an Appointment
            </Link>
            <a
              href="tel:0714478552"
              className="inline-flex items-center justify-center px-8 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
            >
              Call 071 447 8552
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
