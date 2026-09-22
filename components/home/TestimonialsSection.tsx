"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
    );
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 bg-brand-warm-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-orange block mb-2">
              SUCCESS STORIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-maroon tracking-tight">
              Stories of Growth and Transformation
            </h2>
          </div>
          <Link
            href="/impact"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-orange hover:text-brand-orange-deep group transition-colors flex-shrink-0"
          >
            <span>View All Stories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Testimonial Card with Slider Controls */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-lg relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Avatar container */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden flex-shrink-0 shadow-md border-2 border-brand-orange-200">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Testimonial Content */}
            <div className="flex-grow space-y-4 text-center md:text-left">
              <Quote className="w-10 h-10 text-brand-orange/40 mx-auto md:mx-0" />
              <blockquote className="text-[17px] sm:text-[19px] font-medium text-brand-maroon leading-relaxed italic">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
              <div className="pt-2">
                <div className="text-[17px] font-extrabold text-brand-maroon">
                  — {current.name}
                </div>
                <div className="text-sm text-brand-orange-deep font-semibold">
                  {current.role}, {current.organization}
                </div>
                <div className="text-xs text-brand-text-muted mt-0.5">
                  Supported via {current.program}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-brand-border shadow-md flex items-center justify-center text-brand-maroon hover:bg-brand-orange hover:text-white transition-all z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-brand-border shadow-md flex items-center justify-center text-brand-maroon hover:bg-brand-orange hover:text-white transition-all z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center items-center gap-1 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="p-2 min-w-[24px] min-h-[24px] flex items-center justify-center focus:outline-none"
              >
                <span
                  className={`h-2.5 rounded-full transition-all block ${
                    currentIndex === i
                      ? "w-8 bg-brand-orange"
                      : "w-2.5 bg-brand-border hover:bg-brand-orange/50"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
