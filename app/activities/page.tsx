import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, MapPin, Users, Sparkles, CheckCircle2 } from "lucide-react";
import { ACTIVITIES, PAGE_METADATA } from "@/lib/data";
import CtaBannerSection from "@/components/home/CtaBannerSection";

export const metadata: Metadata = {
  title: PAGE_METADATA.activities.title,
  description: PAGE_METADATA.activities.description,
  alternates: {
    canonical: PAGE_METADATA.activities.canonical,
  },
};

export default function ActivitiesPage() {
  return (
    <div className="bg-brand-warm-white min-h-screen">
      {/* Header */}
      <section className="pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <nav className="flex items-center gap-2 text-xs font-semibold text-brand-text-muted mb-6">
          <Link href="/" className="hover:text-brand-orange transition-colors">
            Home
          </Link>
          <span>&gt;</span>
          <span className="text-brand-orange-deep">
            Activities &amp; Events
          </span>
        </nav>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange-tint text-brand-orange-deep text-xs font-bold uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Community &amp; Capacity In Action</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-maroon tracking-tight">
            Workshops &amp;{" "}
            <span className="text-brand-orange">Activities</span>
          </h1>
          <div className="w-20 h-1 bg-brand-orange rounded-full mt-3 mb-5" />
          <p className="text-lg text-brand-text-secondary leading-relaxed">
            Take a look at our on-the-ground workshops, interactive seminars,
            compliance clinics, and buyer-seller networking sessions.
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-12 bg-white border-y border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {ACTIVITIES.map((act) => (
              <div
                key={act.id}
                className="bg-brand-warm-white rounded-3xl overflow-hidden border border-brand-border shadow-sm hover:shadow-lg transition-all grid grid-cols-1 lg:grid-cols-12 gap-6 group"
              >
                <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-brand-light-gray">
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    {act.type}
                  </span>
                </div>

                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    {/* Meta tags */}
                    <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-brand-text-muted mb-3">
                      <span className="flex items-center gap-1.5 text-brand-orange-deep">
                        <Calendar className="w-4 h-4" />
                        {act.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-brand-orange" />
                        {act.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-brand-orange" />
                        {act.participants} Participants
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-brand-maroon mb-3 group-hover:text-brand-orange transition-colors">
                      {act.title}
                    </h3>
                    <p className="text-sm text-brand-text-secondary leading-relaxed mb-6">
                      {act.description}
                    </p>

                    {/* Key Outcomes */}
                    <div className="bg-white rounded-2xl p-4 border border-brand-border mb-4">
                      <h4 className="text-xs font-bold text-brand-maroon uppercase tracking-wider mb-2">
                        Activity Highlights &amp; Key Outcomes:
                      </h4>
                      <ul className="space-y-1.5">
                        {act.keyOutcomes.map((ko, i) => (
                          <li
                            key={i}
                            className="text-xs text-brand-text-secondary flex items-start gap-2"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange flex-shrink-0 mt-0.5" />
                            <span>{ko}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/submit-requirement"
                      className="inline-flex items-center gap-2 text-xs font-bold text-brand-orange-deep hover:text-brand-maroon transition-colors"
                    >
                      <span>Inquire about future training cohorts</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="py-20">
        <CtaBannerSection
          title="Looking to host or participate in our next training session?"
          subtitle="Get in touch with our program team to request custom workshops for your business or group."
          buttonText="Contact SBDC"
          buttonHref="/contact"
        />
      </div>
    </div>
  );
}
