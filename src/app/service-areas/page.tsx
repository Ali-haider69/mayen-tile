import { Metadata } from "next";
import { MapPin, CheckCircle } from "lucide-react";
import { SERVICE_AREAS, SERVICES } from "@/lib/constants";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Service Areas | Mayen Tile — Silicon Valley Coverage",
  description:
    "Mayen Tile serves Palo Alto, Menlo Park, Atherton, Los Altos, Mountain View, and all of Silicon Valley with premium tile installation.",
};

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-accent" />
            <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase">
              Coverage
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-semibold text-white mb-6">
            Service Areas
          </h1>
          <p className="text-xl text-white/50 max-w-2xl font-light leading-relaxed">
            Premium tile installation serving Silicon Valley&apos;s most
            prestigious communities.
          </p>
        </div>
      </section>

      {/* Areas */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary mb-4">
              Proudly Serving Silicon Valley
            </h2>
            <p className="text-slate-light max-w-xl mx-auto">
              We provide expert tile installation throughout the San Francisco
              Peninsula and South Bay.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {SERVICE_AREAS.map((area) => (
              <div
                key={area}
                className="flex items-center gap-3 p-5 rounded-xl bg-white border border-cream-dark hover:border-accent/30 hover:shadow-[0_4px_20px_-4px_rgba(184,134,11,0.1)] transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center transition-colors">
                  <MapPin size={14} className="text-accent" />
                </div>
                <span className="font-medium text-primary">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services available */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-serif font-semibold text-primary mb-4">
              Full Service Range in Every Area
            </h2>
            <p className="text-slate-light max-w-xl mx-auto">
              Every community receives our complete suite of premium services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-cream-dark"
              >
                <CheckCircle size={16} className="text-accent flex-shrink-0" />
                <span className="text-sm font-medium text-primary">
                  {service.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
