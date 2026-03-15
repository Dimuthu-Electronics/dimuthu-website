"use client";

import Image from "next/image";
import { useState } from "react";
import type { FormEvent } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
          <p className="mt-3 text-blue-100 max-w-2xl text-lg">
            Visit our shop on Negombo Road, Ja-Ela or reach out by phone, WhatsApp, or the form below.
          </p>
        </div>
      </section>

      <section className="bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              {/* Shop Photo */}
              <div className="relative rounded-xl overflow-hidden h-48">
                <Image src="/images/storefront.webp" alt="Dimuthu Electronics shop front" fill className="object-cover" />
              </div>

              {/* Contact Details */}
              <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-sm text-muted">Address</p>
                    <p className="text-foreground font-medium text-sm">266, Negombo Road,<br />Weligampitiya Church Road,<br />Ja-Ela 11350</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-sm text-muted">Phone</p>
                    <a href="tel:0714478552" className="text-foreground font-medium text-sm hover:text-primary transition-colors">071 447 8552</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#25D366] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <div>
                    <p className="text-sm text-muted">WhatsApp</p>
                    <a href="https://wa.me/94774508318" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium text-sm hover:text-primary transition-colors">077 450 8318</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#1877F2] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <div>
                    <p className="text-sm text-muted">Facebook</p>
                    <a href="https://www.facebook.com/p/Dimuthu-Electronics-100063125384683/" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium text-sm hover:text-primary transition-colors">Dimuthu Electronics</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.48a8.27 8.27 0 004.79 1.52V7.56a4.84 4.84 0 01-1.03-.87z" />
                  </svg>
                  <div>
                    <p className="text-sm text-muted">TikTok</p>
                    <a href="https://www.tiktok.com/@dimuthu_electronics" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium text-sm hover:text-primary transition-colors">@dimuthu_electronics</a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
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
            </div>

            {/* Form + Map */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Message Sent!</h3>
                    <p className="mt-2 text-muted">We&apos;ll get back to you soon.</p>
                    <button onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", subject: "", message: "" }); }} className="mt-4 text-primary font-medium hover:text-primary-dark transition-colors">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-foreground mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-1.5">Name *</label>
                          <input type="text" id="contact-name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors" placeholder="Your name" />
                        </div>
                        <div>
                          <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                          <input type="email" id="contact-email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors" placeholder="your@email.com" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="contact-subject" className="block text-sm font-medium text-foreground mb-1.5">Subject *</label>
                        <input type="text" id="contact-subject" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors" placeholder="What is this about?" />
                      </div>
                      <div>
                        <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                        <textarea id="contact-message" rows={4} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors resize-none" placeholder="Your message..." />
                      </div>
                      <button type="submit" className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors">
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>

              {/* Google Maps */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <h3 className="font-semibold text-foreground p-6 pb-0">Find Us</h3>
                <p className="text-sm text-muted px-6 mt-1 mb-4">266, Negombo Road, Weligampitiya Church Road, Ja-Ela 11350</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.3!2d79.88!3d7.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDQnNDguMCJOIDc5wrA1Myc0OC4wIkU!5e0!3m2!1sen!2slk!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dimuthu Electronics location on Google Maps"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
