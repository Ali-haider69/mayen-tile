"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";

const categories = ["All", "Bathrooms", "Showers", "Kitchens", "Floors"];

const projects = [
  {
    title: "Palo Alto Luxury Bathroom",
    category: "Bathrooms",
    location: "Palo Alto",
    description: "Full spa bathroom with curbless shower and heated floors.",
    image: "https://images.unsplash.com/photo-1638799869566-b17fa794c4de?w=800&q=80&fit=crop&auto=format",
  },
  {
    title: "Atherton Spa Remodel",
    category: "Showers",
    location: "Atherton",
    description: "Designer slab shower with frameless glass enclosure.",
    image: "https://images.unsplash.com/photo-1754574741164-a41418029cfb?w=800&q=80&fit=crop&auto=format",
  },
  {
    title: "Los Altos Contemporary Bath",
    category: "Bathrooms",
    location: "Los Altos",
    description: "Minimalist modern tile with floating vanity.",
    image: "https://images.unsplash.com/photo-1643949700215-e61cdca053f7?w=800&q=80&fit=crop&auto=format",
  },
  {
    title: "Menlo Park Eichler Remodel",
    category: "Floors",
    location: "Menlo Park",
    description: "Mid-century inspired tile restoration.",
    image: "/images/eichler.png",
  },
  {
    title: "Mountain View Kitchen",
    category: "Kitchens",
    location: "Mountain View",
    description: "Zellige backsplash with custom pattern layout.",
    image: "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?w=800&q=80&fit=crop&auto=format",
  },
  {
    title: "Woodside Estate Shower",
    category: "Showers",
    location: "Woodside",
    description: "Book-matched porcelain slab shower walls.",
    image: "https://images.unsplash.com/photo-1651951646668-46562cfb4518?w=800&q=80&fit=crop&auto=format",
  },
  {
    title: "Portola Valley Heated Floors",
    category: "Floors",
    location: "Portola Valley",
    description: "Radiant heated limestone flooring throughout.",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80&fit=crop&auto=format",
  },
  {
    title: "Stanford Area Bath",
    category: "Bathrooms",
    location: "Stanford",
    description: "Large format tile with linear drain curbless shower.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80&fit=crop&auto=format",
  },
  {
    title: "Redwood City Backsplash",
    category: "Kitchens",
    location: "Redwood City",
    description: "Hand-painted ceramic tile with brass accents.",
    image: "https://images.unsplash.com/photo-1582667407868-07060cb5e61f?w=800&q=80&fit=crop&auto=format",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-accent" />
            <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase">
              Our Work
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-semibold text-white mb-6">
            Project Gallery
          </h1>
          <p className="text-xl text-white/50 max-w-2xl font-light leading-relaxed">
            A curated collection of our finest tile installations across Silicon
            Valley.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-14 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-accent text-white shadow-[0_4px_20px_-4px_rgba(184,134,11,0.4)]"
                    : "bg-cream text-slate hover:bg-cream-dark border border-cream-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project) => (
                <div
                  key={project.title}
                  className="group relative rounded-2xl overflow-hidden bg-primary aspect-[4/3] cursor-pointer"
                >
                  {/* Background image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-90 z-10" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500 z-10" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin size={11} className="text-accent" />
                      <span className="text-[11px] text-accent font-medium tracking-[0.2em] uppercase">
                        {project.location}
                      </span>
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-white mb-1.5">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/50 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Hover icon */}
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="w-9 h-9 rounded-full bg-accent/90 flex items-center justify-center">
                      <ArrowUpRight size={14} className="text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
