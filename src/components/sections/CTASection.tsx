import Link from "next/link";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto px-6 text-center relative">
        <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase">
          Let&apos;s Create Together
        </span>
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-primary mt-4 mb-5">
          Planning a Tile Project?
        </h2>
        <p className="text-slate-light text-lg mb-10 leading-relaxed max-w-lg mx-auto">
          Schedule your complimentary consultation and let&apos;s bring your
          vision to life.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="inline-flex items-center justify-center gap-2.5 text-primary font-medium hover:text-accent transition-colors"
          >
            <Phone size={16} className="text-accent" />
            {SITE_CONFIG.phone}
          </a>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="inline-flex items-center justify-center gap-2.5 text-primary font-medium hover:text-accent transition-colors"
          >
            <Mail size={16} className="text-accent" />
            {SITE_CONFIG.email}
          </a>
        </div>

        <Link
          href="/contact"
          className="group inline-flex items-center gap-3 bg-accent hover:bg-accent-light text-white font-medium px-10 py-4.5 rounded-full transition-all duration-300 text-sm tracking-wider uppercase hover:shadow-[0_12px_40px_-8px_rgba(184,134,11,0.4)]"
        >
          Request Consultation
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </section>
  );
}
