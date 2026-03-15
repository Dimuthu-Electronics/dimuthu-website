import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FacebookReels from "@/components/FacebookReels";
import ReviewCard from "@/components/ReviewCard";
import StarRating from "@/components/StarRating";
import { featuredReviews, googleRating } from "@/data/reviews";

export const metadata: Metadata = {
  title: {
    absolute:
      "Dimuthu Electronics | #1 TV Repair, LED/LCD Display Sales & Installation in Ja-Ela, Sri Lanka",
  },
  description:
    "Expert TV repair for Samsung, LG, Sony & all brands. 30+ years experience, 30,000+ jobs completed. LED/LCD display sales, wall mounting & installation. Free diagnostics. Ja-Ela, Sri Lanka. Call 071 447 8552.",
  alternates: {
    canonical: "https://www.dimuthuelectronics.com",
  },
  openGraph: {
    title:
      "Dimuthu Electronics | #1 TV Repair, LED/LCD Display Sales & Installation in Ja-Ela, Sri Lanka",
    description:
      "Expert TV repair for Samsung, LG, Sony & all brands. 30+ years, 30,000+ jobs. Free diagnostics. Call 071 447 8552.",
    url: "https://www.dimuthuelectronics.com",
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

const brands = [
  "Samsung", "LG", "Sony", "Philips", "Toshiba",
  "Hisense", "TCL", "Sharp", "Hitachi", "Haier",
  "JVC", "Innovex", "Softlogic", "Panasonic",
];

export default function Home() {
  return (
    <>
      {/* Hero Section — storefront background */}
      <section className="relative">
        <div className="absolute inset-0">
          <Image
            src="/images/storefront.webp"
            alt="Dimuthu Electronics storefront in Ja-Ela"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="text-secondary font-semibold mb-2">Since 1996 — Ja-Ela, Sri Lanka</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              LED & LCD TV Displays,
              <br />Installation & Repairs
            </h1>
            <p className="mt-5 text-lg text-gray-300 max-w-xl">
              We import LED/LCD display panels, install TVs for homes and businesses,
              and repair all major brands — Samsung, LG, Sony, Philips, and more.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/book-appointment"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-foreground font-semibold rounded-lg hover:bg-secondary-dark transition-colors"
              >
                Book an Appointment
              </Link>
              <a
                href="tel:0714478552"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
              >
                Call 071 447 8552
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Facebook Reels — right below hero for max visibility */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-4">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
              </svg>
              <span className="text-primary text-sm font-medium">From Our Workshop</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">See Us in Action</h2>
            <p className="mt-2 text-muted">
              Watch our latest repairs, installations, and new arrivals
            </p>
          </div>
          <FacebookReels />
          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
            <a
              href="https://www.facebook.com/p/Dimuthu-Electronics-100063125384683/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1877F2] text-white font-semibold rounded-lg hover:bg-[#166FE5] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Follow on Facebook
            </a>
            <a
              href="https://www.tiktok.com/@dimuthu_electronics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-white font-semibold rounded-lg hover:bg-foreground/80 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.48a8.27 8.27 0 004.79 1.52V7.56a4.84 4.84 0 01-1.03-.87z" />
              </svg>
              Follow on TikTok
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">1996</div>
              <div className="mt-1 text-sm text-muted">Established</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">30+</div>
              <div className="mt-1 text-sm text-muted">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">14+</div>
              <div className="mt-1 text-sm text-muted">Brands We Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">30,000+</div>
              <div className="mt-1 text-sm text-muted">Jobs Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview — with real photos */}
      <section className="bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">What We Do</h2>
            <p className="mt-3 text-muted">
              Sales, installation, and repairs — everything for your TV display needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image src="/images/repair-center.webp" alt="TV displays at Dimuthu Electronics" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">TV Display Sales</h3>
                <p className="text-muted text-sm leading-relaxed">
                  LED and LCD panels from 32&quot; to 75&quot;. We import Samsung, LG, Sony, Hisense, and
                  other brands directly — so you get better prices.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image src="/images/tv-testing.webp" alt="Technician testing TV display" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Installation</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Wall mounting, cable management, and full setup. We install displays for homes,
                  offices, and commercial spaces across Ja-Ela and nearby areas.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image src="/images/technicians-working.webp" alt="Technicians repairing TVs" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Repairs</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Screen replacements, backlight repairs, motherboard fixes. We handle all LED/LCD
                  brands with genuine parts and fast turnaround.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex items-center px-5 py-2.5 text-primary font-medium hover:text-primary-dark transition-colors">
              See all services
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us — with real photo */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                30 years of fixing TVs in Ja-Ela
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                Dimuthu Electronics has been on Negombo Road since 1996. We started as a small repair
                shop, and today we import displays directly from international suppliers and service
                every major brand.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Direct imports — no middlemen, better prices",
                  "We stock Samsung, LG, Sony, Philips, Toshiba, and more",
                  "Genuine replacement panels with warranty",
                  "Same-week turnaround on most repairs",
                  "Free diagnostic assessment for all TV issues",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-80 md:h-96">
              <Image
                src="/images/workshop-panels.webp"
                alt="Workshop at Dimuthu Electronics"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-1.5 mb-4">
              <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-secondary-dark text-sm font-medium">Customer Reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Trusted by Our Customers
            </h2>
            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="text-4xl font-bold text-foreground">{googleRating.overall}</span>
              <div>
                <StarRating rating={googleRating.overall} size="md" />
                <p className="text-sm text-muted mt-0.5">
                  Based on {googleRating.totalReviews} reviews on{" "}
                  <a
                    href={googleRating.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark font-medium"
                  >
                    Google
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} truncate />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/reviews"
              className="inline-flex items-center px-5 py-2.5 text-primary font-medium hover:text-primary-dark transition-colors"
            >
              View all reviews
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-center text-sm text-muted mb-6">Brands we sell and repair</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {brands.map((brand) => (
              <span key={brand} className="text-foreground/40 font-bold text-lg tracking-wide">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Need a display, installation, or repair?
          </h2>
          <p className="mt-3 text-blue-100 max-w-xl mx-auto">
            Call us at 071 447 8552 or book online. Walk-ins welcome at our Ja-Ela shop.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-appointment"
              className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-foreground font-semibold rounded-lg hover:bg-secondary-dark transition-colors"
            >
              Book an Appointment
            </Link>
            <a
              href="https://wa.me/94774508318"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
