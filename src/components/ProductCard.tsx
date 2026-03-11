"use client";

import Image from "next/image";
import { useState } from "react";

interface Spec {
  label: string;
  value: string;
}

interface ProductCardProps {
  name: string;
  shortDesc: string;
  price: string;
  images: string[];
  specs: Spec[];
  features: string[];
  whatsappNumber: string;
}

export default function ProductCard({
  name,
  shortDesc,
  price,
  images,
  specs,
  features,
  whatsappNumber,
}: ProductCardProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showSpecs, setShowSpecs] = useState(false);
  const [orderSent, setOrderSent] = useState(false);

  const handleOrder = () => {
    const message = encodeURIComponent(
      `Hi, I'd like to order the ${name}.\n\nPlease share the payment details and delivery information.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    setOrderSent(true);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border">
      {/* Image Gallery */}
      <div className="p-4 sm:p-6">
        <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-50 mb-3">
          <Image
            src={images[selectedImage]}
            alt={name}
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedImage(i)}
              className={`relative w-16 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-colors ${
                selectedImage === i
                  ? "border-primary"
                  : "border-border hover:border-gray-300"
              }`}
            >
              <Image
                src={img}
                alt={`${name} - Image ${i + 1}`}
                fill
                className="object-contain p-1"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="px-4 sm:px-6 pb-6">
        <h3 className="text-lg font-bold text-foreground leading-snug">{name}</h3>
        <p className="text-sm text-muted mt-1">{shortDesc}</p>

        {/* Features */}
        <ul className="mt-4 space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
              <svg
                className="w-4 h-4 text-accent mt-0.5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        {/* Specs Toggle */}
        <button
          onClick={() => setShowSpecs(!showSpecs)}
          className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:text-primary-dark transition-colors"
        >
          <svg
            className={`w-4 h-4 transition-transform ${showSpecs ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          {showSpecs ? "Hide Specifications" : "View Specifications"}
        </button>

        {showSpecs && (
          <div className="mt-3 border border-border rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {specs.map((spec, i) => (
                  <tr
                    key={spec.label}
                    className={i % 2 === 0 ? "bg-light-gray" : "bg-white"}
                  >
                    <td className="px-3 py-2 font-medium text-foreground w-2/5">
                      {spec.label}
                    </td>
                    <td className="px-3 py-2 text-muted">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Price */}
        <div className="mt-5 flex items-baseline gap-2">
          <span className="text-2xl font-bold text-foreground">{price}</span>
        </div>
        <p className="text-xs text-muted mt-1">
          Delivery charges apply
        </p>

        {/* Order Button */}
        <div className="mt-4 space-y-3">
          {orderSent ? (
            <div className="text-center py-3 bg-accent/10 rounded-lg">
              <p className="text-sm font-medium text-accent">
                Order request sent! We&apos;ll contact you via WhatsApp shortly.
              </p>
              <button
                onClick={() => setOrderSent(false)}
                className="text-xs text-primary mt-1 hover:text-primary-dark"
              >
                Send again
              </button>
            </div>
          ) : (
            <button
              onClick={handleOrder}
              className="w-full py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#20BD5A] transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Order via WhatsApp
            </button>
          )}

          <p className="text-xs text-center text-muted">
            Place your order and we&apos;ll contact you via WhatsApp to confirm details and payment.
          </p>
        </div>
      </div>
    </div>
  );
}
