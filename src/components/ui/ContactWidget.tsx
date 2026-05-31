"use client";

import { useState } from "react";
import { MessageSquareText, Phone, Mail, X } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ContactWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-center gap-3">
      {/* Action buttons — shown when open */}
      <div
        className={cn(
          "flex flex-col items-center gap-3 transition-all duration-300",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        {/* Phone */}
        <a
          href={`tel:${SITE_CONFIG.phone}`}
          className="w-14 h-14 rounded-full bg-accent hover:bg-accent-light flex items-center justify-center shadow-[0_4px_20px_-4px_rgba(184,134,11,0.5)] transition-all duration-300 hover:scale-110"
          aria-label="Call us"
        >
          <Phone size={22} className="text-white" />
        </a>

        {/* Email */}
        <a
          href={`mailto:${SITE_CONFIG.email}`}
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary-light flex items-center justify-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110"
          aria-label="Email us"
        >
          <Mail size={22} className="text-white" />
        </a>
      </div>

      {/* Main toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "group flex items-center gap-3 transition-all duration-300",
          open ? "" : "hover:gap-4"
        )}
        aria-label="Contact us"
      >
        {/* Circle button */}
        <div className="w-14 h-14 rounded-full bg-primary hover:bg-primary-light flex items-center justify-center shadow-[0_4px_24px_-4px_rgba(0,0,0,0.3)] transition-all duration-300">
          {open ? (
            <X size={22} className="text-white" />
          ) : (
            <MessageSquareText size={22} className="text-white" />
          )}
        </div>

        {/* Label — only when closed */}
        <span
          className={cn(
            "bg-white text-primary font-medium text-sm px-5 py-2.5 rounded-full shadow-[0_2px_12px_-2px_rgba(0,0,0,0.1)] transition-all duration-300 whitespace-nowrap",
            open
              ? "opacity-0 scale-90 pointer-events-none w-0 px-0"
              : "opacity-100 scale-100"
          )}
        >
          Contact us
        </span>
      </button>
    </div>
  );
}
