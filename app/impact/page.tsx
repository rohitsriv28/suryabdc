import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Quote, ShieldCheck } from "lucide-react";
import StatsBarSection from "@/components/home/StatsBarSection";
import { TESTIMONIALS, PAGE_METADATA } from "@/lib/data";
import CtaBannerSection from "@/components/home/CtaBannerSection";

export const metadata: Metadata = {
  title: PAGE_METADATA.impact.title,
  description: PAGE_METADATA.impact.description,
  alternates: {
    canonical: PAGE_METADATA.impact.canonical,
  },
};

export default function ImpactPage() {
  return (
    <div className="bg-brand-warm-white min-h-screen">
      {/* Header */}
      <section className="pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <nav className="flex items-center gap-2 text-xs font-semibold text-brand-text-muted mb-6">
          <Link href="/" className="hover:text-brand-orange transition-colors">
            Home
          </Link>
          <span>&gt;</span>
          <span className="text-brand-orange-deep">Impact &amp; Stories</span>
        </nav>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange-tint text-brand-orange-deep text-xs font-bold uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Measurable Transformation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-maroon tracking-tight">
            Our Measurable <span className="text-brand-orange">Impact</span>
          </h1>
          <div className="w-20 h-1 bg-brand-orange rounded-full mt-3 mb-5" />
          <p className="text-lg text-brand-text-secondary leading-relaxed">
            Every business connected, founder trained, and market pathway
            created represents real economic resilience for local communities.
          </p>
        </div>
      </section>

      {/* Stats Band */}
      <StatsBarSection />

      {/* Beneficiary Stories Grid */}
      <section className="py-20 bg-white border-y border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-orange block mb-2">
              REAL VOICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-maroon tracking-tight">
              Stories of Growth &amp; Transformation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="bg-brand-warm-white rounded-3xl p-8 border border-brand-border shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <Quote className="w-8 h-8 text-brand-orange/40 mb-4" />
                  <p className="text-sm text-brand-text-primary italic leading-relaxed mb-6">
                    &ldquo;{test.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-border/60 flex items-center gap-3.5">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-brand-orange-200"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-brand-maroon">
                      {test.name}
                    </h3>
                    <div className="text-xs text-brand-orange-deep font-medium">
                      {test.role}, {test.organization}
                    </div>
                    <div className="text-[10px] text-brand-text-muted">
                      {test.program}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Methodology & Transparency Note */}
      <section className="py-16 bg-brand-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-brand-border shadow-xs space-y-4">
            <div className="flex items-center gap-3 text-brand-maroon">
              <ShieldCheck className="w-6 h-6 text-brand-orange" />
              <h3 className="text-lg font-bold">
                Impact Measurement &amp; Data Integrity Policy
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed">
              All reported beneficiary numbers and enterprise metrics are
              tracked through our operational inquiry management records, signed
              attendance rosters, and post-linkage follow-up surveys. SBDC does
              not claim credit for independent decisions made by external
              funding agencies; our metrics reflect verified connections,
              completed capacity workshops, and documented business linkages.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="py-20">
        <CtaBannerSection
          title="Ready to write your business success story?"
          subtitle="Tell us your business needs and let our facilitators connect you with the right opportunities."
        />
      </div>
    </div>
  );
}
