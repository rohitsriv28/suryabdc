import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CtaBannerSection({
  title = "Looking for support for your business?",
  subtitle = "Tell us what you need and our team will explore relevant opportunities and connect you with the right organization.",
  buttonText = "Submit Your Requirement",
  buttonHref = "/submit-requirement",
}: CtaBannerProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mb-6 sm:-mb-10 relative z-20">
      <div className="bg-gradient-to-r from-brand-orange to-brand-orange-deep rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden text-white flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 border-2 border-brand-orange-300/40">
        {/* Decorative Sun Watermark in background */}
        <div className="absolute -right-12 -bottom-16 w-80 h-80 opacity-15 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
            <circle cx="50" cy="50" r="30" />
            <g stroke="white" strokeWidth="4" strokeLinecap="round">
              <line x1="50" y1="5" x2="50" y2="15" />
              <line x1="50" y1="85" x2="50" y2="95" />
              <line x1="5" y1="50" x2="15" y2="50" />
              <line x1="85" y1="50" x2="95" y2="50" />
              <line x1="18" y1="18" x2="25" y2="25" />
              <line x1="75" y1="75" x2="82" y2="82" />
              <line x1="18" y1="82" x2="25" y2="75" />
              <line x1="75" y1="25" x2="82" y2="18" />
            </g>
          </svg>
        </div>

        {/* Text column */}
        <div className="relative z-10 max-w-2xl text-center lg:text-left space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Take The Next Step</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {title}
          </h2>
          <p className="text-white/90 text-sm sm:text-[16px] leading-relaxed pt-1">
            {subtitle}
          </p>
        </div>

        {/* CTA Button */}
        <div className="relative z-10 flex-shrink-0 w-full sm:w-auto">
          <Link
            href={buttonHref}
            className="w-full sm:w-auto justify-center bg-white hover:bg-neutral-100 text-brand-orange-deep font-extrabold text-sm sm:text-[15px] px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2.5 group transform hover:-translate-y-0.5"
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
