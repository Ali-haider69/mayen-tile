import { MapPin } from "lucide-react";
import { SERVICE_AREAS } from "@/lib/constants";

export function ServiceAreasSection() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-accent/30 rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-accent/20 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase">
            Coverage
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white mt-4 mb-5">
            Proudly Serving Silicon Valley
          </h2>
          <p className="text-white/40 max-w-xl mx-auto leading-relaxed">
            Expert tile installation across the Bay Area&apos;s most prestigious
            communities.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {SERVICE_AREAS.map((area) => (
            <div
              key={area}
              className="flex items-center gap-2.5 bg-white/5 hover:bg-accent/10 border border-white/5 hover:border-accent/20 rounded-xl px-5 py-3.5 transition-all duration-300 cursor-default"
            >
              <MapPin size={13} className="text-accent flex-shrink-0" />
              <span className="text-sm text-white/70">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
