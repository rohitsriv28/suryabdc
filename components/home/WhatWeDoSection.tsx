import React from "react";
import Link from "next/link";
import {
  Coins,
  Presentation,
  TrendingUp,
  Sparkles,
  Building2,
  ArrowRight,
  Handshake,
} from "lucide-react";
import { SERVICES } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Coins: <Coins className="w-7 h-7 text-brand-orange" />,
  Presentation: <Presentation className="w-7 h-7 text-brand-orange" />,
  TrendingUp: <TrendingUp className="w-7 h-7 text-brand-orange" />,
  Sparkles: <Sparkles className="w-7 h-7 text-brand-orange" />,
  Building2: <Building2 className="w-7 h-7 text-brand-orange" />,
  Handshake: <Handshake className="w-7 h-7 text-brand-orange" />,
};

export default function WhatWeDoSection() {
  // Taking the first 5 services as shown on Home mockup
  const homeServices = SERVICES.slice(0, 5);

  return (
    <section className="py-20 bg-brand-warm-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-orange block mb-2">
            WHAT WE DO
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-maroon tracking-tight">
            Connecting You to Opportunities for Growth
          </h2>
          <p className="text-brand-text-secondary text-[16px] mt-3 leading-relaxed">
            We act as a collaborative gateway, understanding your requirements
            and linking your business with specialized external programs,
            training, and institutions.
          </p>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {homeServices.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-brand-border/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Icon Container with Orange Tint */}
              <div className="w-16 h-16 rounded-full bg-brand-orange-tint flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-brand-orange/20 transition-all duration-300">
                {iconMap[service.iconName] || (
                  <Sparkles className="w-7 h-7 text-brand-orange" />
                )}
              </div>

              {/* Service Title */}
              <h3 className="text-[17px] font-bold text-brand-maroon mb-3 group-hover:text-brand-orange transition-colors">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-[13px] text-brand-text-secondary leading-relaxed mb-4 flex-grow">
                {service.shortDesc}
              </p>

              {/* Link */}
              <Link
                href={`/services#${service.id}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:text-brand-orange-deep mt-auto pt-2 group/link"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* View All Services Link */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-maroon hover:text-brand-orange border-b-2 border-brand-orange pb-0.5 transition-colors"
          >
            <span>Explore all our specialized service areas</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
