"use client";

import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-accent" />
            <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase">
              Get In Touch
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-semibold text-white mb-6">
            Start Your Project
          </h1>
          <p className="text-xl text-white/50 max-w-2xl font-light leading-relaxed">
            Ready to transform your space? Let&apos;s discuss your vision.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form - wider */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-serif font-semibold text-primary mb-2">
                Schedule Your Consultation
              </h2>
              <p className="text-slate-light mb-8">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-5 py-3.5 rounded-xl border border-cream-dark bg-white text-primary placeholder:text-slate-light/50 transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-5 py-3.5 rounded-xl border border-cream-dark bg-white text-primary placeholder:text-slate-light/50 transition-all"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-5 py-3.5 rounded-xl border border-cream-dark bg-white text-primary placeholder:text-slate-light/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-5 py-3.5 rounded-xl border border-cream-dark bg-white text-primary placeholder:text-slate-light/50 transition-all"
                      placeholder="(650) 555-0123"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Project Type
                  </label>
                  <select className="w-full px-5 py-3.5 rounded-xl border border-cream-dark bg-white text-primary transition-all appearance-none">
                    <option value="">Select a service...</option>
                    <option>Bathroom Tile Remodeling</option>
                    <option>Curbless Shower</option>
                    <option>Heated Tile Floors</option>
                    <option>Kitchen Backsplash</option>
                    <option>Large Format Tile</option>
                    <option>Eichler Remodel</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-5 py-3.5 rounded-xl border border-cream-dark bg-white text-primary placeholder:text-slate-light/50 transition-all resize-none"
                    placeholder="Describe your project — size, style preferences, timeline, budget range..."
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-light text-white font-medium py-4 rounded-xl transition-all duration-300 text-sm tracking-wider uppercase hover:shadow-[0_8px_30px_-6px_rgba(184,134,11,0.4)]"
                >
                  Request Consultation
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-serif font-semibold text-primary mb-2">
                Contact Info
              </h2>
              <p className="text-slate-light mb-8">
                Prefer to reach out directly? We&apos;re here to help.
              </p>

              <div className="space-y-5 mb-12">
                {[
                  {
                    icon: <Phone size={18} />,
                    label: "Phone",
                    value: SITE_CONFIG.phone,
                    href: `tel:${SITE_CONFIG.phone}`,
                  },
                  {
                    icon: <Mail size={18} />,
                    label: "Email",
                    value: SITE_CONFIG.email,
                    href: `mailto:${SITE_CONFIG.email}`,
                  },
                  {
                    icon: <MapPin size={18} />,
                    label: "Location",
                    value: "Palo Alto, California",
                    href: null,
                  },
                  {
                    icon: <Clock size={18} />,
                    label: "Hours",
                    value: "Mon-Fri 8AM-6PM, Sat 9AM-2PM",
                    href: null,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-4 rounded-xl bg-cream border border-cream-dark"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent">{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-light uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium text-primary hover:text-accent transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-primary">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-2xl aspect-[4/3] overflow-hidden border border-cream-dark">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50696.26428015258!2d-122.18237!3d37.44188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb07b9dba1c17%3A0x80ef75b27f1d9d89!2sPalo%20Alto%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mayen Tile Service Area - Palo Alto, CA"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
