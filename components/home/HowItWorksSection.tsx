import React from "react";
import Link from "next/link";
import {
  Search,
  ClipboardCheck,
  FileText,
  Briefcase,
  FileCheck,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { PROCESS_STEPS } from "@/lib/data";

const stepIcons: Record<string, React.ReactNode> = {
  "01": <Search className="w-7 h-7 text-brand-orange" />,
  "02": <ClipboardCheck className="w-7 h-7 text-brand-orange" />,
  "03": <FileText className="w-7 h-7 text-brand-orange" />,
  "04": <Briefcase className="w-7 h-7 text-brand-orange" />,
  "05": <FileCheck className="w-7 h-7 text-brand-orange" />,
  "06": <TrendingUp className="w-7 h-7 text-brand-orange" />,
};

export default function HowItWorksSection() {
  return (
    <section className="py-16 sm:py-20 bg-brand-light-gray/60 border-y border-brand-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-orange block mb-2">
            OUR APPROACH
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-maroon tracking-tight">
            A Structured 6-Stage Methodology
          </h2>
          <p className="text-brand-text-secondary text-[16px] mt-3">
            A disciplined, accountable framework to deliver practical and
            achievable business solutions with continuous improvement.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 relative">
          {PROCESS_STEPS.map((step) => (
            <Link
              key={step.step}
              href="/about#approach"
              className="bg-white rounded-2xl p-5 sm:p-6 border border-brand-border/70 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group relative hover:z-20 focus-visible:z-20 focus:outline-none"
            >
              {/* Circular Step Badge with Icon */}
              <div className="relative mb-4">
                <div className="w-16 h-16 rounded-full bg-brand-orange-tint border-2 border-brand-orange/30 flex items-center justify-center group-hover:scale-105 group-hover:bg-brand-orange/20 transition-all duration-300">
                  {stepIcons[step.step] || (
                    <Search className="w-6 h-6 text-brand-orange" />
                  )}
                </div>
                {/* Step Number Tag - floats up & out of the card on hover/focus, slides back on blur */}
                <span className="absolute -top-1.5 -right-1.5 bg-brand-orange text-white text-[10.5px] font-black w-6 h-6 rounded-full flex items-center justify-center shadow-xs z-30 pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-12 group-hover:-translate-x-14 sm:group-hover:-translate-y-14 sm:group-hover:-translate-x-16 group-hover:scale-135 group-hover:shadow-[0_8px_18px_rgba(243,106,33,0.45)] group-hover:ring-2 group-hover:ring-white group-focus-visible:-translate-y-12 group-focus-visible:-translate-x-14 sm:group-focus-visible:-translate-y-14 sm:group-focus-visible:-translate-x-16 group-focus-visible:scale-135 group-focus-visible:shadow-[0_8px_18px_rgba(243,106,33,0.45)] group-focus-visible:ring-2 group-focus-visible:ring-white">
                  {step.step}
                </span>
              </div>

              {/* Step Title */}
              <h3 className="text-[15px] font-extrabold text-brand-maroon tracking-tight group-hover:text-brand-orange transition-colors">
                {step.title}
              </h3>
            </Link>
          ))}
        </div>

        {/* View Full Methodology Link */}
        <div className="mt-10 text-center">
          <Link
            href="/about#approach"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-maroon hover:text-brand-orange border-b-2 border-brand-orange pb-0.5 transition-colors"
          >
            <span>Explore our full 6-stage methodology in About Us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
