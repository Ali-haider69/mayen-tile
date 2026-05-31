import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS, SERVICE_AREAS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Gold accent line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand - wider */}
          <div className="lg:col-span-4">
            <img
              src="/images/logo.png"
              alt="Mayen Tile"
              className="h-20 mb-4"
            />
            <p className="text-sm text-white/50 leading-7 max-w-xs">
              Crafting extraordinary tile installations for Silicon Valley&apos;s
              most discerning homeowners. Where precision meets artistry.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-accent text-[11px] font-semibold uppercase tracking-[0.25em] mb-6">
              Navigate
            </h4>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/50 hover:text-accent-light transition-colors flex items-center gap-1 group"
                >
                  {link.label}
                  <ArrowUpRight
                    size={11}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-3">
            <h4 className="text-accent text-[11px] font-semibold uppercase tracking-[0.25em] mb-6">
              We Serve
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {SERVICE_AREAS.slice(0, 10).map((area) => (
                <span key={area} className="text-sm text-white/50">
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-accent text-[11px] font-semibold uppercase tracking-[0.25em] mb-6">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-3 text-sm text-white/50 hover:text-accent-light transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-white/5 group-hover:bg-accent/10 flex items-center justify-center transition-colors">
                  <Phone size={14} className="text-accent" />
                </div>
                {SITE_CONFIG.phone}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3 text-sm text-white/50 hover:text-accent-light transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-white/5 group-hover:bg-accent/10 flex items-center justify-center transition-colors">
                  <Mail size={14} className="text-accent" />
                </div>
                {SITE_CONFIG.email}
              </a>
              <span className="flex items-center gap-3 text-sm text-white/50">
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin size={14} className="text-accent" />
                </div>
                Palo Alto, California
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Mayen Tile. All rights reserved.
          </p>
          <p className="text-xs text-white/30">{SITE_CONFIG.license}</p>
        </div>
      </div>
    </footer>
  );
}
