import { CheckCircle } from "lucide-react";

const specialties = [
  "Schluter waterproof shower systems",
  "Curbless showers",
  "Designer porcelain tile",
  "Natural stone installation",
  "Contemporary minimalist design",
  "Luxury finish details",
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - content */}
          <div>
            <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase">
              Why Homeowners Choose Mayen Tile
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary mt-4 mb-6">
              Bay Area Homeowners Expect Precision
            </h2>
            <p className="text-slate leading-relaxed mb-8">
              At Mayen Tile, we understand that tile work is one of the most
              visible parts of your home remodeling project. From perfect grout
              lines to advanced waterproofing systems, every detail matters.
            </p>

            <p className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
              We specialize in:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {specialties.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-cream-dark"
                >
                  <CheckCircle size={16} className="text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-cream-dark">
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80&fit=crop&auto=format"
                alt="Precision tile installation"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
