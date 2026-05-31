import { Metadata } from "next";
import { Award, Shield, Users, Eye } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { CTASection } from "@/components/sections/CTASection";
import { BreadcrumbSchema, WebPageSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "About | Mayen Tile — Silicon Valley Tile Artisans",
  description:
    "Learn about Mayen Tile — Silicon Valley's premier tile installation company. Licensed, insured, and committed to luxury craftsmanship.",
};

const values = [
  {
    icon: <Award size={24} strokeWidth={1.5} />,
    title: "Licensed & Insured",
    desc: `${SITE_CONFIG.license}. Fully bonded and insured for complete peace of mind.`,
  },
  {
    icon: <Shield size={24} strokeWidth={1.5} />,
    title: "Waterproofing Experts",
    desc: "Certified in advanced waterproofing systems. We guarantee leak-free installations for life.",
  },
  {
    icon: <Users size={24} strokeWidth={1.5} />,
    title: "Designer Collaborative",
    desc: "We work seamlessly with architects and interior designers on the most complex projects.",
  },
  {
    icon: <Eye size={24} strokeWidth={1.5} />,
    title: "Detail Obsessed",
    desc: "Every cut, every grout line, every transition is executed with unwavering precision.",
  },
];

export default function AboutPage() {
  return (
    <>
      <WebPageSchema title="About Mayen Tile" description="Silicon Valley's premier tile installation company." url="/about" />
      <BreadcrumbSchema items={[{ name: "About", url: "/about" }]} />
      {/* Hero */}
      <section className="relative bg-primary pt-40 pb-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 border border-accent/30 rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-accent" />
            <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase">
              Our Story
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-semibold text-white mb-6">
            Craftsmanship Meets
            <br />
            <span className="text-gold-gradient">Modern Design</span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl font-light leading-relaxed">
            Where Old World artistry meets Silicon Valley innovation.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary mt-4 mb-8">
                Silicon Valley&apos;s Trusted Tile Artisans
              </h2>
              <div className="space-y-5 text-slate leading-relaxed">
                <p>
                  Mayen Tile has been transforming Bay Area homes with premium tile
                  installations for over a decade. We specialize in luxury
                  bathrooms, curbless showers, heated floors, and custom tile work
                  that elevates every space we touch.
                </p>
                <p>
                  Our approach combines Old World craftsmanship with modern
                  techniques and materials. Every project receives our full
                  attention to detail — from precise waterproofing systems to
                  flawless grout lines and perfectly level installations.
                </p>
                <p>
                  We work closely with homeowners, architects, and interior
                  designers throughout Palo Alto, Atherton, Menlo Park, and the
                  greater Silicon Valley area to deliver results that exceed
                  expectations.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl aspect-[4/3] overflow-hidden border border-cream-dark">
                <img
                  src="https://images.unsplash.com/photo-1523413307857-ef24c53571ae?w=1200&q=80&fit=crop&auto=format"
                  alt="Tile craftsman at work"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase">
              Why Us
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary mt-4">
              The Mayen Difference
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item) => (
              <div
                key={item.title}
                className="text-center p-8 rounded-2xl bg-white border border-cream-dark"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-serif font-semibold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
