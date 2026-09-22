import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { FEATURED_PROJECTS } from "@/lib/data";

export default function FeaturedProjectsSection() {
  return (
    <section className="py-20 bg-brand-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Top Header & View All Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-orange block mb-2">
              FEATURED PROJECTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-maroon tracking-tight">
              Some of Our Recent Initiatives
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-orange hover:text-brand-orange-deep group transition-colors flex-shrink-0"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-brand-border/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-light-gray">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute top-3 right-3 bg-brand-maroon/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-xs">
                  {project.status}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-[16px] font-bold text-brand-maroon mb-2 group-hover:text-brand-orange transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-[13px] text-brand-text-secondary line-clamp-3 mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Metadata Row */}
                <div className="pt-3 border-t border-brand-border flex items-center justify-between text-[12px] text-brand-text-muted">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                    <span className="truncate max-w-[120px]">
                      {project.location}
                    </span>
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-brand-text-muted" />
                    {project.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
