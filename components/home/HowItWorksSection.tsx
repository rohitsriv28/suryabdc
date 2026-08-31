import React from "react";
import {
  FileEdit,
  Users,
  Search,
  Handshake,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { PROCESS_STEPS } from "@/lib/data";
import { BRAND } from "@/lib/constants";

const stepIcons: Record<string, React.ReactNode> = {
  "01": <FileEdit className="w-8 h-8 text-brand-orange" />,
  "02": <Users className="w-8 h-8 text-brand-orange" />,
  "03": <Search className="w-8 h-8 text-brand-orange" />,
  "04": <Handshake className="w-8 h-8 text-brand-orange" />,
};

export default function HowItWorksSection() {
  return (
    <section className="py-16 sm:py-20 bg-brand-light-gray/60 border-y border-brand-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-orange block mb-2">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-maroon tracking-tight">
            Our Simple 4-Step Process
          </h2>
          <p className="text-brand-text-secondary text-[16px] mt-3">
            A clear, transparent pathway designed to understand your
            requirements and connect you with the most suitable resources.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.step}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Circular Step Badge with Icon */}
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full bg-white border-2 border-brand-orange-200 shadow-md flex items-center justify-center group-hover:border-brand-orange group-hover:scale-105 transition-all duration-300">
                  {stepIcons[step.step]}
                </div>
                {/* Step Number Tag */}
                <span className="absolute -top-2 -right-2 bg-brand-orange text-white text-[12px] font-black w-7 h-7 rounded-full flex items-center justify-center shadow-sm">
                  {step.step}
                </span>
              </div>

              {/* Step Title */}
              <h3 className="text-[18px] font-bold text-brand-maroon mb-2.5">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-[13.5px] text-brand-text-secondary leading-relaxed">
                {step.description}
              </p>

              {/* Arrow separator (hidden on mobile or last element) */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 translate-x-1/2 text-brand-orange/40">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
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
