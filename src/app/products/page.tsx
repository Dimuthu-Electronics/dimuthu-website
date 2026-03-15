import Image from "next/image";
import type { Metadata } from "next";
import WholesaleForm from "@/components/WholesaleForm";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "LED/LCD TV Display Panels & Android TV Boxes | Buy in Sri Lanka",
  description:
    "Buy original LED/LCD TV display panels (32\" to 65\"), Android TV Stick (Rs. 14,900), Android TV Box (Rs. 11,900). Free installation, warranty included. Wholesale welcome. Dimuthu Electronics, Ja-Ela.",
  alternates: {
    canonical: "https://www.dimuthuelectronics.com/products",
  },
  openGraph: {
    title: "LED/LCD TV Display Panels & Android TV Boxes | Dimuthu Electronics",
    description:
      "Original LED/LCD TV displays, Android TV Stick Rs. 14,900, TV Box Rs. 11,900. Free installation & warranty. Ja-Ela, Sri Lanka.",
    url: "https://www.dimuthuelectronics.com/products",
    images: [
      {
        url: "/images/repair-center.webp",
        width: 1200,
        height: 630,
        alt: "TV displays at Dimuthu Electronics showroom",
      },
    ],
  },
};

const productsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "MX10 F8PRO Android 14 TV Stick",
        description:
          "Plug-and-play Android 14 TV stick with voice remote, 8K HD output, Bluetooth 5.4, WiFi 5, 2GB RAM + 16GB storage. Turn any TV into a Smart TV.",
        image:
          "https://www.dimuthuelectronics.com/images/products/tv-stick/1.jpg",
        offers: {
          "@type": "Offer",
          price: "14900",
          priceCurrency: "LKR",
          availability: "https://schema.org/InStock",
          seller: {
            "@id": "https://www.dimuthuelectronics.com/#business",
          },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "MX10-F1 Android 13 TV Box",
        description:
          "4K Ultra HD Android 13 set-top box with voice remote, dual-band WiFi, 2GB RAM + 16GB Samsung eMMC storage. Full Android TV experience.",
        image:
          "https://www.dimuthuelectronics.com/images/products/tv-box/1.png",
        offers: {
          "@type": "Offer",
          price: "11900",
          priceCurrency: "LKR",
          availability: "https://schema.org/InStock",
          seller: {
            "@id": "https://www.dimuthuelectronics.com/#business",
          },
        },
      },
    },
  ],
};

const displays = [
  { size: "32\"", label: "32 Inch", desc: "Ideal for bedrooms and small spaces" },
  { size: "40\"", label: "40 Inch", desc: "Great for kitchens and offices" },
  { size: "43\"", label: "43 Inch", desc: "Popular choice for living rooms" },
  { size: "50\"", label: "50 Inch", desc: "Perfect for mid-size living rooms" },
  { size: "55\"", label: "55 Inch", desc: "Best for large living rooms" },
  { size: "65\"", label: "65 Inch", desc: "For the ultimate viewing experience" },
];

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsJsonLd) }}
      />
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-bold">LED/LCD TV Displays</h1>
          <p className="mt-3 text-blue-100 max-w-2xl text-lg">
            Original LED display panels from 32&quot; to 65&quot;. All brands available.
            Free installation included with every purchase.
          </p>
        </div>
      </section>

      {/* Showroom photo + intro */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-2xl overflow-hidden h-64 md:h-72">
              <Image
                src="/images/repair-center.webp"
                alt="TV displays at Dimuthu Electronics showroom"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Direct Imports, Better Prices
              </h2>
              <p className="mt-3 text-muted leading-relaxed">
                We import original LED and LCD display panels directly from international
                suppliers. No middlemen means you pay less for genuine, brand-new panels.
              </p>
              <p className="mt-3 text-muted leading-relaxed">
                Prices vary based on availability and import costs.
                Contact us for the latest pricing on any size.
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href="tel:0714478552"
                  className="inline-flex items-center px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Call for Prices
                </a>
                <a
                  href="https://wa.me/94774508318"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-light-gray transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retail — Available Displays */}
      <section className="bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-10">
            <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-3">
              For Retail Buyers
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Available Displays
            </h2>
            <p className="mt-2 text-muted max-w-xl mx-auto">
              Original LED display panels — all major brands. Contact us for pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displays.map((display) => (
              <div
                key={display.size}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-1.5 bg-primary" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {display.label}
                      </h3>
                      <p className="text-sm text-muted">{display.desc}</p>
                    </div>
                  </div>

                  <p className="text-foreground font-medium text-sm mb-3">
                    {display.size} LED Original Display
                  </p>

                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2 text-sm text-muted">
                      <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Original panel — all major brands
                    </li>
                    <li className="flex items-center gap-2 text-sm text-accent font-medium">
                      <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      FREE installation included
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted">
                      <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      6-month &amp; 1-year warranty options
                    </li>
                  </ul>

                  <div className="pt-3 border-t border-border flex gap-2">
                    <a
                      href={`https://wa.me/94774508318?text=${encodeURIComponent(`Hi, I'd like to know the price for a ${display.size} LED Original Display.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors"
                    >
                      Get Price
                    </a>
                    <a
                      href="tel:0714478552"
                      className="inline-flex items-center justify-center px-3 py-2 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-light-gray transition-colors"
                    >
                      Call
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Warranty info */}
          <div className="mt-10 bg-white rounded-xl p-6 md:p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Warranty Options</h4>
                  <p className="text-sm text-muted mt-1">
                    Choose between 6-month or 1-year warranty on all display panels.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Free Installation</h4>
                  <p className="text-sm text-muted mt-1">
                    Every display comes with free professional installation at your location.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-secondary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Best Prices</h4>
                  <p className="text-sm text-muted mt-1">
                    Direct imports from international suppliers — no middlemen, competitive pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left — info */}
            <div className="lg:col-span-2">
              <span className="inline-block bg-secondary/20 text-secondary-dark text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
                For Wholesale Buyers
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Bulk Orders &amp; Wholesale Pricing
              </h2>
              <p className="mt-3 text-muted leading-relaxed">
                We supply LED/LCD display panels in bulk to repair shops, retailers,
                and businesses across Sri Lanka. Get competitive wholesale pricing on
                any quantity.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "All sizes from 32\" to 65\" available",
                  "Original panels — Samsung, LG, Sony, and more",
                  "Competitive bulk pricing",
                  "Dedicated support for wholesale accounts",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 bg-light-gray rounded-xl">
                <p className="text-sm text-muted">
                  <strong className="text-foreground">How it works:</strong> Fill in the form
                  with the displays you need. We&apos;ll review your request and respond with
                  a quotation via WhatsApp.
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              <div className="bg-light-gray rounded-xl p-6 md:p-8">
                <h3 className="text-lg font-bold text-foreground mb-6">
                  Request a Wholesale Quotation
                </h3>
                <WholesaleForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TV Accessories Section */}
      <section className="bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-10">
            <span className="inline-block bg-foreground/10 text-foreground text-sm font-medium px-4 py-1.5 rounded-full mb-3">
              TV Accessories
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Android TV Sticks &amp; Set-Top Boxes
            </h2>
            <p className="mt-2 text-muted max-w-xl mx-auto">
              Make any TV smart. Stream YouTube, Netflix, and more with our Android TV devices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ProductCard
              name="MX10 F8PRO Android 14 TV Stick"
              shortDesc="Plug-and-play TV stick with voice remote. Turn any TV into a Smart TV."
              price="Rs. 14,900"
              whatsappNumber="94774508318"
              images={[
                "/images/products/tv-stick/1.jpg",
                "/images/products/tv-stick/2.jpg",
                "/images/products/tv-stick/3.jpg",
                "/images/products/tv-stick/4.jpg",
                "/images/products/tv-stick/5.jpg",
                "/images/products/tv-stick/6.jpg",
              ]}
              features={[
                "Android 14 with Google Play Store",
                "8K HD video output via HDMI 2.0",
                "Bluetooth 5.4 voice remote included",
                "WiFi 5 (2.4G/5G) + Airplay & Miracast",
                "2GB RAM + 16GB storage",
              ]}
              specs={[
                { label: "OS", value: "Android 14.0 + ATV" },
                { label: "CPU", value: "Quad-core Cortex-A53" },
                { label: "SoC", value: "Rockchip RK3528" },
                { label: "GPU", value: "Mali-450" },
                { label: "RAM / Storage", value: "2GB RAM + 16GB ROM" },
                { label: "HDMI", value: "HDMI 2.0" },
                { label: "USB", value: "1x USB 2.0 Port" },
                { label: "Optical", value: "Digital Audio Output" },
                { label: "TF Card", value: "Up to 64GB supported" },
                { label: "WiFi", value: "802.11 b/g/n/ac (WiFi 5)" },
                { label: "Bluetooth", value: "5.4" },
                { label: "Remote", value: "BT Voice Remote Control" },
                { label: "Casting", value: "Airplay & Miracast" },
              ]}
            />

            <ProductCard
              name="MX10-F1 Android 13 TV Box"
              shortDesc="4K Ultra HD set-top box with voice remote. Full Android TV experience."
              price="Rs. 11,900"
              whatsappNumber="94774508318"
              images={[
                "/images/products/tv-box/1.png",
                "/images/products/tv-box/2.jpg",
                "/images/products/tv-box/3.jpg",
                "/images/products/tv-box/4.jpg",
                "/images/products/tv-box/5.jpg",
                "/images/products/tv-box/6.png",
              ]}
              features={[
                "Android 13 with Google Play Store",
                "4K Ultra HD (4K60) via HDMI 2.0",
                "Dual-band WiFi (2.4G + 5G)",
                "Voice remote control included",
                "2GB RAM + 16GB Samsung eMMC storage",
              ]}
              specs={[
                { label: "OS", value: "Android 13" },
                { label: "CPU", value: "Quad-core ARM Cortex-A53" },
                { label: "SoC", value: "Allwinner H313" },
                { label: "GPU", value: "Mali-G31" },
                { label: "RAM", value: "2GB" },
                { label: "Storage", value: "16GB eMMC (Samsung)" },
                { label: "HDMI", value: "HDMI 2.0 (4K60)" },
                { label: "WiFi", value: "2.4GHz + 5GHz 802.11a/b/g/n/ac" },
                { label: "Bluetooth", value: "5.0 (Optional)" },
                { label: "Languages", value: "30+ multi-language support" },
                { label: "Remote", value: "Voice Remote Control" },
              ]}
            />
          </div>

          {/* How to Order */}
          <div className="mt-12 bg-white rounded-xl p-6 md:p-8 shadow-sm max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-foreground mb-4 text-center">
              How to Order
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h4 className="font-medium text-foreground text-sm">Place Your Order</h4>
                <p className="text-xs text-muted mt-1">
                  Click &quot;Order via WhatsApp&quot; on the product you want
                </p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-primary font-bold">2</span>
                </div>
                <h4 className="font-medium text-foreground text-sm">Confirm &amp; Pay</h4>
                <p className="text-xs text-muted mt-1">
                  We&apos;ll confirm availability and share payment details via WhatsApp
                </p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-primary font-bold">3</span>
                </div>
                <h4 className="font-medium text-foreground text-sm">Get It Delivered</h4>
                <p className="text-xs text-muted mt-1">
                  We&apos;ll deliver to your doorstep. Delivery charges apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
