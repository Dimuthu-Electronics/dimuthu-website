import Link from "next/link";
import type { Metadata } from "next";
import ReviewCard from "@/components/ReviewCard";
import StarRating from "@/components/StarRating";
import { reviews, googleRating } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Reviews - Dimuthu Electronics | Customer Testimonials",
  description:
    "Read what our customers say about Dimuthu Electronics. 4.6 star rating on Google. LED/LCD TV repairs, installation, and sales in Ja-Ela, Sri Lanka.",
};

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-bold">What Our Customers Say</h1>
          <p className="mt-3 text-blue-100 max-w-2xl text-lg">
            Real reviews from our customers on Google. We take pride in honest
            work and fair pricing.
          </p>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-light-gray rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <div className="text-center sm:text-left shrink-0">
              <div className="text-6xl font-bold text-foreground">
                {googleRating.overall}
              </div>
              <StarRating rating={googleRating.overall} size="lg" />
              <p className="mt-2 text-sm text-muted">
                Based on {googleRating.totalReviews} reviews
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={googleRating.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                    fill="#fff"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#fff"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#fff"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#fff"
                  />
                </svg>
                See Us on Google
              </a>
              <a
                href={googleRating.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-light-gray transition-colors"
              >
                Leave a Review
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews */}
      <section className="bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Ready to experience our service?
          </h2>
          <p className="mt-3 text-blue-100 max-w-xl mx-auto">
            Join our satisfied customers. Book an appointment or visit us at our
            Ja-Ela shop.
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
