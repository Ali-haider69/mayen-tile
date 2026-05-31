"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { REVIEWS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev + 1) % REVIEWS.length);
  }, []);

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const goTo = (i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 250 : -250,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -250 : 250,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 bg-warm-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="text-center mb-14">
          <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-primary mt-4 mb-5">
            Client Experiences
          </h2>
          <div className="flex justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-accent fill-accent" />
            ))}
          </div>
          <p className="text-slate-light text-sm">
            5.0 Stars &mdash; Trusted by Silicon Valley Homeowners
          </p>
        </div>

        {/* Carousel */}
        <div className="relative min-h-[280px] overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.25 },
              }}
              className="bg-white rounded-3xl border border-cream-dark shadow-[0_20px_80px_-20px_rgba(0,0,0,0.06)] p-10 md:p-14 relative"
            >
              <Quote
                size={64}
                className="absolute top-8 right-8 text-accent/5"
              />

              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-accent fill-accent"
                  />
                ))}
              </div>

              <p className="text-xl md:text-2xl text-primary/80 leading-relaxed font-light font-serif mb-8">
                &ldquo;{REVIEWS[current].text}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/25 to-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold">
                    {REVIEWS[current].author[0]}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-primary">
                    {REVIEWS[current].author}
                  </p>
                  <p className="text-sm text-slate-light">
                    {REVIEWS[current].location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full border border-cream-dark bg-white hover:border-accent hover:text-accent flex items-center justify-center transition-all duration-300 shadow-sm"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={cn(
                  "rounded-full transition-all duration-300",
                  i === current
                    ? "w-7 h-2 bg-accent"
                    : "w-2 h-2 bg-cream-dark hover:bg-accent/30"
                )}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-11 h-11 rounded-full border border-cream-dark bg-white hover:border-accent hover:text-accent flex items-center justify-center transition-all duration-300 shadow-sm"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/reviews"
            className="text-sm font-medium text-accent hover:text-accent-light transition-colors tracking-wider uppercase"
          >
            Read All Reviews &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
