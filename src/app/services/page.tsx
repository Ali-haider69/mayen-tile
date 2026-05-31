import { Metadata } from "next";
import Link from "next/link";
import { Bath, ShowerHead, Flame, ChefHat, Maximize, Home, ArrowRight } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Services | Mayen Tile — Premium Tile Installation",
  description:
    "Explore our tile installation services: bathroom remodeling, curbless showers, heated floors, kitchen backsplashes, large format tile, and Eichler remodeling.",
};

const services = [
  {
    icon: <Bath size={32} strokeWidth={1.5} />,
    title: "Bathroom Tile Remodeling",
    image: "https://images.unsplash.com/photo-1696987007764-7f8b85dd3033?w=800&q=80&fit=crop&auto=format",
    description:
      "Complete luxury bathroom renovations from floor to ceiling. We handle everything from demolition to final grout — creating spa-quality spaces with premium porcelain, natural stone, and designer tile.",
    features: [
      "Full bathroom demolition & prep",
      "Custom tile layout design",
      "Premium material sourcing",
      "Heated floor integration",
      "Frameless glass coordination",
    ],
  },
  {
    icon: <ShowerHead size={32} strokeWidth={1.5} />,
    title: "Curbless Showers",
    image: "https://images.unsplash.com/photo-1651951646668-46562cfb4518?w=800&q=80&fit=crop&auto=format",
    description:
      "Modern barrier-free shower systems with precision slope engineering and advanced waterproofing. Our curbless showers combine accessibility with luxury — featuring linear drains and seamless transitions.",
    features: [
      "Linear drain installation",
      "Schluter waterproofing systems",
      "Precision slope engineering",
      "Large format tile walls",
      "Seamless floor transitions",
    ],
  },
  {
    icon: <Flame size={32} strokeWidth={1.5} />,
    title: "Heated Tile Floors",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80&fit=crop&auto=format",
    description:
      "Radiant floor heating systems installed beneath your tile for ultimate luxury and comfort. We integrate electric and hydronic systems with precise thermostat control.",
    features: [
      "Electric & hydronic systems",
      "Smart thermostat integration",
      "Energy-efficient design",
      "Compatible with all tile types",
      "Warranty-backed installation",
    ],
  },
  {
    icon: <ChefHat size={32} strokeWidth={1.5} />,
    title: "Kitchen Backsplashes",
    image: "https://images.unsplash.com/photo-1582667407868-07060cb5e61f?w=800&q=80&fit=crop&auto=format",
    description:
      "Transform your kitchen with a designer backsplash that makes a statement. From hand-crafted zellige to modern porcelain slabs, we install with precision.",
    features: [
      "Designer tile selection guidance",
      "Precision cuts around outlets",
      "Under-cabinet integration",
      "Slab backsplash installation",
      "Grout color matching",
    ],
  },
  {
    icon: <Maximize size={32} strokeWidth={1.5} />,
    title: "Large Format Tile",
    image: "https://images.unsplash.com/photo-1572742482459-e04d6cfdd6f3?w=800&q=80&fit=crop&auto=format",
    description:
      "Expert installation of oversized porcelain slabs that create seamless, modern surfaces. Requires specialized tools and leveling systems we've mastered.",
    features: [
      "Slabs up to 5' x 10'",
      "Lippage-free leveling systems",
      "Minimal grout line design",
      "Book-matched veining",
      "Structural substrate prep",
    ],
  },
  {
    icon: <Home size={32} strokeWidth={1.5} />,
    title: "Eichler Tile Remodeling",
    image: "/images/eichler.png",
    description:
      "Specialized expertise in mid-century modern Eichler homes. We understand the unique construction, radiant floor systems, and design aesthetic of these iconic homes.",
    features: [
      "Radiant slab floor expertise",
      "Period-appropriate design",
      "Modern material integration",
      "Slab-on-grade waterproofing",
      "Post-and-beam compatibility",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-accent" />
            <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase">
              Our Expertise
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-semibold text-white mb-6">
            Premium Services
          </h1>
          <p className="text-xl text-white/50 max-w-2xl font-light leading-relaxed">
            Every service delivered with uncompromising attention to detail.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-serif font-semibold text-primary mb-5">
                    {service.title}
                  </h2>
                  <p className="text-slate leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-slate"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors tracking-wider uppercase"
                  >
                    Get a Quote
                    <ArrowRight size={14} />
                  </Link>
                </div>
                <div className={`relative ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="rounded-2xl aspect-[4/3] overflow-hidden border border-cream-dark">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-full h-full border border-accent/10 rounded-2xl -z-10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
