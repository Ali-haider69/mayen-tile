import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";

export function FeaturedProjects() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-primary mt-4">
              Recent Projects
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors tracking-wider uppercase mt-4 md:mt-0"
          >
            View Gallery
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Layout: 1 large left + 3 stacked right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left - large card */}
          <div className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[3/4] lg:aspect-auto lg:min-h-full">
            <div className="absolute inset-0 bg-primary">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                style={{ backgroundImage: `url(${PROJECTS[0].image})` }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={12} className="text-accent" />
                <span className="text-[11px] text-accent font-medium tracking-[0.2em] uppercase">
                  {PROJECTS[0].location}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-2">
                {PROJECTS[0].title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {PROJECTS[0].description}
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span className="inline-flex items-center gap-1.5 text-xs text-accent font-medium tracking-wider uppercase">
                  View Project <ArrowRight size={12} />
                </span>
              </div>
            </div>
          </div>

          {/* Right - 3 stacked cards */}
          <div className="flex flex-col gap-6">
            {PROJECTS.slice(1, 4).map((project) => (
              <div
                key={project.title}
                className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[16/7] flex-1"
              >
                <div className="absolute inset-0 bg-primary">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={11} className="text-accent" />
                    <span className="text-[10px] text-accent font-medium tracking-[0.2em] uppercase">
                      {project.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
