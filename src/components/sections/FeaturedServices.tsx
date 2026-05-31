"use client";

import Link from "next/link";
import { Bath, ShowerHead, Flame, ChefHat, Maximize, Home, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  bath: <Bath size={28} strokeWidth={1.5} />,
  shower: <ShowerHead size={28} strokeWidth={1.5} />,
  flame: <Flame size={28} strokeWidth={1.5} />,
  chefHat: <ChefHat size={28} strokeWidth={1.5} />,
  maximize: <Maximize size={28} strokeWidth={1.5} />,
  home: <Home size={28} strokeWidth={1.5} />,
};

export function FeaturedServices() {
  return (
    <section className="py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-primary mt-4 mb-5">
            Our Expertise
          </h2>
          <p className="text-slate-light max-w-xl mx-auto leading-relaxed">
            Premium tile installation services tailored to Silicon Valley&apos;s
            finest homes and most ambitious visions.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="card-glow group relative p-8 rounded-2xl bg-white border border-cream-dark hover:border-accent/20 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-cream group-hover:bg-accent/10 flex items-center justify-center mb-5 transition-colors duration-300">
                <span className="text-accent">{iconMap[service.icon]}</span>
              </div>
              <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-slate-light leading-relaxed mb-5">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors tracking-wider uppercase"
          >
            View All Services
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
