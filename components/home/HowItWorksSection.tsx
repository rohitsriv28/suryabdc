import React from "react";
import {
  Search,
  ClipboardCheck,
  FileText,
  Briefcase,
  FileCheck,
  TrendingUp,
  AlertCircle,
} from "lucide-react";
import { PROCESS_STEPS } from "@/lib/data";
import { BRAND } from "@/lib/constants";

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
        <div className="text-center max-w-3xl mx-auto mb-16">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 relative">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl p-5 border border-brand-border/70 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col items-center text-center group"
            >
              {/* Circular Step Badge with Icon */}
              <div className="relative mb-4">
                <div className="w-16 h-16 rounded-full bg-brand-orange-tint border-2 border-brand-orange/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {stepIcons[step.step] || (
                    <Search className="w-6 h-6 text-brand-orange" />
                  )}
                </div>
                {/* Step Number Tag */}
                <span className="absolute -top-1.5 -right-1.5 bg-brand-orange text-white text-[10.5px] font-black w-6 h-6 rounded-full flex items-center justify-center shadow-xs">
                  {step.step}
                </span>
              </div>

              {/* Step Title */}
              <h3 className="text-[15px] font-extrabold text-brand-maroon tracking-tight mb-2">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-[12.5px] text-brand-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Prominent Disclaimer Notice Box matching mockup */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="bg-brand-orange-tint/90 border border-brand-orange-200 rounded-2xl p-4 sm:p-5 flex items-start sm:items-center gap-4 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-brand-orange/15 flex items-center justify-center flex-shrink-0 text-brand-orange-deep">
              <AlertCircle className="w-5 h-5" />
            </div>
            <p className="text-[13.5px] text-brand-text-primary leading-relaxed">
              <strong className="font-bold text-brand-maroon">
                Please note:{" "}
              </strong>
              {BRAND.disclaimer.short}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
