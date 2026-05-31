"use client";

import { motion } from "framer-motion";
import { Star, Quote, Phone, ArrowRight } from "lucide-react";
import { REVIEWS, SITE_CONFIG } from "@/lib/constants";
import { CTASection } from "@/components/sections/CTASection";
import Link from "next/link";

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary pt-40 pb-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-40 w-80 h-80 border border-accent/30 rounded-full" />
          <div className="absolute bottom-10 left-20 w-48 h-48 border border-accent/20 rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-accent" />
            <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase">
              Testimonials
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-semibold text-white mb-6">
            Client Reviews
          </h1>
          <div className="flex items-center gap-4 mt-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-accent fill-accent" />
              ))}
            </div>
            <span className="text-white/40 text-sm">
              5.0 Rating &bull; Trusted by Bay Area Homeowners
            </span>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase">
              All Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary mt-4">
              Happy Homeowners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group p-7 rounded-2xl bg-white border border-cream-dark hover:border-accent/20 hover:shadow-[0_16px_48px_-12px_rgba(184,134,11,0.1)] transition-all duration-400 relative"
              >
                <Quote
                  size={36}
                  className="absolute top-6 right-6 text-accent/5 group-hover:text-accent/10 transition-colors"
                />
                <div className="flex gap-0.5 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star
                      key={j}
                      size={13}
                      className="text-accent fill-accent"
                    />
                  ))}
                </div>
                <p className="text-primary/75 leading-relaxed mb-5 font-light">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-cream-dark">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                    <span className="text-accent font-semibold text-xs">
                      {review.author[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-primary">
                      {review.author}
                    </p>
                    <p className="text-xs text-slate-light">
                      {review.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick contact band */}
      <section className="py-8 bg-primary">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
          <p className="text-white/50 text-sm font-light">
            Ready to join our happy clients?
          </p>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 text-accent hover:text-accent-light font-medium text-sm transition-colors"
            >
              <Phone size={14} />
              {SITE_CONFIG.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent/20 hover:bg-accent/30 text-accent text-xs font-medium px-5 py-2 rounded-full transition-colors tracking-wider uppercase"
            >
              Get Started
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
