"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { supabase } from "@/lib/supabase";

const serviceTypes = [
  "TV Display Purchase",
  "Professional Installation",
  "TV Repair / Diagnosis",
  "Display Panel Replacement",
  "General Inquiry",
];

export default function BookAppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    preferredDate: "",
    preferredTime: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const { error } = await supabase.from("appointments").insert({
      customer_name: formData.name,
      phone: formData.phone,
      email: formData.email || null,
      service_type: formData.serviceType,
      preferred_date: formData.preferredDate,
      preferred_time: formData.preferredTime,
      description: formData.description || null,
    });

    if (error) {
      alert("Something went wrong. Please call us at 071 447 8552 instead.");
      setSubmitting(false);
      return;
    }

    setSubmitted(true);
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-light-gray">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-foreground">Appointment Booked!</h2>
          <p className="mt-3 text-muted">
            Thanks, {formData.name}. We&apos;ll call you at {formData.phone} to confirm your appointment.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: "", phone: "", email: "", serviceType: "", preferredDate: "", preferredTime: "", description: "" });
            }}
            className="mt-6 inline-flex items-center px-5 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
          >
            Book Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-bold">Book an Appointment</h1>
          <p className="mt-3 text-blue-100 max-w-2xl text-lg">
            Schedule a visit for repairs, installation, or purchases. Or just walk in, we&apos;re at 266 Negombo Road, Ja-Ela.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                      <input type="text" id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Phone Number *</label>
                      <input type="tel" id="phone" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors" placeholder="07X XXX XXXX" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email (optional)</label>
                    <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors" placeholder="your@email.com" />
                  </div>

                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-foreground mb-1.5">What do you need? *</label>
                    <select id="serviceType" required value={formData.serviceType} onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })} className="w-full px-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors bg-white">
                      <option value="">Select a service</option>
                      {serviceTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-foreground mb-1.5">Preferred Date *</label>
                      <input type="date" id="date" required value={formData.preferredDate} onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })} className="w-full px-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-foreground mb-1.5">Preferred Time *</label>
                      <input type="time" id="time" required value={formData.preferredTime} onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })} className="w-full px-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-foreground mb-1.5">Tell us more (optional)</label>
                    <textarea id="description" rows={3} value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full px-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors resize-none" placeholder="E.g. Samsung 55 inch TV, screen is flickering..." />
                  </div>

                  <button type="submit" disabled={submitting} className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50">
                    {submitting ? "Submitting..." : "Book Appointment"}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-semibold text-foreground mb-3">Opening Hours</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-muted">Monday – Saturday</span>
                    <span className="text-foreground font-medium">9:00 AM – 5:30 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted">Sunday</span>
                    <span className="text-foreground font-medium">Closed</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-semibold text-foreground mb-3">Prefer to call or WhatsApp?</h3>
                <div className="space-y-3">
                  <a href="tel:0714478552" className="flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    071 447 8552
                  </a>
                  <a href="https://wa.me/94774508318" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#25D366] font-medium hover:opacity-80 transition-opacity">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    077 450 8318
                  </a>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/10 rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Walk-ins welcome</h3>
                <p className="text-sm text-muted">
                  You don&apos;t need an appointment for quick inquiries or drop-offs. Visit us at
                  266 Negombo Road, Ja-Ela during opening hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
