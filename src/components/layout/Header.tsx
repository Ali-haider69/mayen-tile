"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Phone, Mail, Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

function MobileMenu({ onClose }: { onClose: () => void }) {
  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return createPortal(
    <div
      className="fixed inset-0 flex flex-col overflow-y-auto"
      style={{ zIndex: 9999, backgroundColor: "#1B1F23" }}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-6 flex-shrink-0">
        <img src="/images/logo.png" alt="Mayen Tile" className="h-14" />
        <button onClick={onClose} className="text-white/80 p-1">
          <X size={28} />
        </button>
      </div>

      {/* Nav links */}
      <nav className="flex-1 flex flex-col justify-center px-10 gap-2">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-2xl font-serif text-white/80 hover:text-accent-light py-3 transition-colors border-b border-white/5"
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="mt-8 bg-accent text-white font-medium text-sm px-8 py-4 rounded-full text-center tracking-wider uppercase"
          onClick={onClose}
        >
          Free Consultation
        </Link>

        {/* Contact info */}
        <div className="mt-8 flex flex-col gap-3">
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="flex items-center gap-2 text-white/50 hover:text-accent-light text-sm"
          >
            <Phone size={14} />
            {SITE_CONFIG.phone}
          </a>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="flex items-center gap-2 text-white/50 hover:text-accent-light text-sm"
          >
            <Mail size={14} />
            {SITE_CONFIG.email}
          </a>
        </div>
      </nav>
    </div>,
    document.body
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-primary/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.15)]"
            : "bg-transparent"
        )}
      >
        {/* Top accent line */}
        <div className="h-[2px] gold-shimmer" />

        {/* Top bar - hidden on scroll */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-500",
            scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
          )}
        >
          <div className="bg-primary/90 backdrop-blur-sm text-white text-sm py-2.5">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
              <div className="flex items-center gap-6">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-2 hover:text-accent-light transition-colors"
                >
                  <Phone size={13} strokeWidth={1.5} />
                  <span className="font-light tracking-wide">
                    {SITE_CONFIG.phone}
                  </span>
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hidden md:flex items-center gap-2 hover:text-accent-light transition-colors"
                >
                  <Mail size={13} strokeWidth={1.5} />
                  <span className="font-light tracking-wide">
                    {SITE_CONFIG.email}
                  </span>
                </a>
              </div>
              <span className="hidden lg:block text-white/60 text-xs tracking-wider">
                {SITE_CONFIG.license}
              </span>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="/images/logo.png"
              alt="Mayen Tile - Bay Area Tile & Stone Specialists"
              className={cn(
                "transition-all duration-300",
                scrolled ? "h-24" : "h-30"
              )}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-[13px] font-medium tracking-wide transition-colors text-white/80 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-medium text-xs px-6 py-3 rounded-full transition-all duration-300 tracking-wider uppercase hover:shadow-[0_8px_30px_-6px_rgba(184,134,11,0.4)]"
          >
            Free Consultation
            <ArrowRight size={14} />
          </Link>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* Mobile menu - rendered via portal on document.body */}
      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </>
  );
}
