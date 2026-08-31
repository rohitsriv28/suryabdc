import React from "react";
import { PARTNER_LOGOS } from "@/lib/data";

export default function PartnerLogosSection() {
  return (
    <section className="py-16 bg-brand-warm-white border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-orange block mb-2">
            OUR PARTNERS & ECOSYSTEM
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-maroon tracking-tight">
            Working Together for Greater Impact
          </h2>
        </div>

        {/* Partners Grid / Carousel Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
          {PARTNER_LOGOS.map((partner) => (
            <div
              key={partner.name}
              className="bg-white rounded-xl p-5 border border-brand-border/70 shadow-2xs hover:shadow-md hover:border-brand-orange-200 transition-all duration-300 flex flex-col items-center justify-center text-center h-24 group"
            >
              <span className="font-extrabold text-[17px] tracking-tight text-brand-maroon group-hover:text-brand-orange transition-colors">
                {partner.logoText}
              </span>
              <span className="text-[10.5px] text-brand-text-muted mt-0.5 font-medium line-clamp-1">
                {partner.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
