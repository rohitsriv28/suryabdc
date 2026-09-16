import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldAlert, CheckCircle2, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-warm-white pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-brand-border/40">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#F36A21_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange-tint border border-brand-orange-200 text-brand-orange-deep text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span>Estd. 2083 • Birgunj, Madhesh Province, Nepal</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-brand-maroon tracking-tight leading-[1.15]">
              Empowering Businesses.{" "}
              <span className="text-brand-orange block sm:inline">
                Building Futures.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-[15px] sm:text-[17px] text-brand-text-secondary leading-relaxed max-w-xl">
              Practical solutions for entrepreneurs, enterprises, institutions,
              and development organizations through business development, field
              research, training, and enterprise consulting.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <Link
                href="/submit-requirement"
                className="bg-brand-orange hover:bg-brand-orange-deep text-white font-bold text-sm sm:text-[15px] px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2.5 group"
              >
                <span>Submit Your Requirement</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/projects"
                className="bg-white hover:bg-brand-light-gray text-brand-maroon border border-brand-border font-bold text-sm sm:text-[15px] px-6 py-3.5 rounded-xl shadow-sm hover:shadow transition-all duration-200 text-center"
              >
                Explore Our Work
              </Link>
            </div>

            {/* Trust Badges matching mockup */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-brand-border/80 shadow-xs">
                <ShieldAlert className="w-4 h-4 text-brand-orange-deep flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-[12.5px] font-medium text-brand-text-secondary leading-snug">
                  We do not provide loans or direct financial assistance.
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-brand-border/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-success flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-[12.5px] font-medium text-brand-text-secondary leading-snug">
                  We facilitate connections with relevant organizations.
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative background sun ring */}
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-brand-orange-tint rounded-full filter blur-3xl opacity-70 pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <div className="aspect-[4/3] relative w-full">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                    alt="SBDC advisory team collaborating with Nepalese entrepreneurs"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-4 left-2 sm:left-6 bg-white rounded-xl p-3 sm:p-4 shadow-xl border border-brand-border flex items-center gap-3 max-w-[240px] sm:max-w-xs">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-brand-orange-tint flex items-center justify-center text-brand-orange flex-shrink-0">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-extrabold text-brand-maroon leading-tight">
                    4+
                  </div>
                  <div className="text-[11px] sm:text-[12px] font-semibold text-brand-text-secondary">
                    Entrepreneurs Guided
                  </div>
                </div>
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -top-3 right-2 sm:-top-4 sm:-right-2 bg-brand-maroon text-white text-[11px] sm:text-[12px] font-bold px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full shadow-lg border border-brand-maroon-light flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
                <span>Verified Ecosystem Network</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
