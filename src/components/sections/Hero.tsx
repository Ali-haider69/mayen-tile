"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 opacity-40"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1920&q=80&fit=crop&auto=format')",
          }}
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      {/* Decorative lines */}
      <div className="absolute top-1/4 right-10 w-[1px] h-32 bg-gradient-to-b from-transparent via-accent/30 to-transparent hidden lg:block" />
      <div className="absolute bottom-1/4 left-10 w-[1px] h-32 bg-gradient-to-b from-transparent via-accent/30 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-3xl animate-[fadeInUp_0.8s_ease_0.2s_both]">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[1px] w-12 bg-accent" />
            <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase">
              Silicon Valley&apos;s Premier Tile Artisans
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-white leading-[1.1] mb-8">
            Luxury Tile
            <br />
            <span className="text-gold-gradient">Installation</span> for
            <br />
            Exceptional Homes
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/60 mb-12 max-w-xl leading-relaxed font-light">
            Custom bathrooms, waterproof showers, heated floors &mdash; crafted
            with precision for Palo Alto&apos;s most discerning homeowners.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-light text-white font-medium px-8 py-4 rounded-full transition-all duration-300 text-sm tracking-wider uppercase hover:shadow-[0_8px_30px_-6px_rgba(184,134,11,0.5)]"
            >
              Request Consultation
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/gallery"
              className="group inline-flex items-center justify-center gap-3 border border-white/20 text-white hover:border-accent/60 hover:text-accent-light font-medium px-8 py-4 rounded-full transition-all duration-300 text-sm tracking-wider uppercase backdrop-blur-sm"
            >
              <Play size={14} className="fill-current" />
              View Our Work
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-accent/60 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
