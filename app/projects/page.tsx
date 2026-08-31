"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Users,
  Building,
  ArrowRight,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { FEATURED_PROJECTS } from "@/lib/data";
import CtaBannerSection from "@/components/home/CtaBannerSection";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Women Empowerment",
    "Capacity Building",
    "Youth Innovation",
    "Market Linkage",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.category === selectedCategory);

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
            Projects &amp; Initiatives
          </span>
        </nav>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange-tint text-brand-orange-deep text-xs font-bold uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Track Record</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-maroon tracking-tight">
            Our Projects &amp;{" "}
            <span className="text-brand-orange">Initiatives</span>
          </h1>
          <div className="w-20 h-1 bg-brand-orange rounded-full mt-3 mb-5" />
          <p className="text-lg text-brand-text-secondary leading-relaxed">
            Explore our completed and active facilitation programs designed to
            strengthen enterprise resilience, expand market reach, and develop
            entrepreneur skills.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 pt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-xl transition-all ${
                selectedCategory === cat
                  ? "bg-brand-orange text-white shadow-sm"
                  : "bg-white text-brand-text-secondary border border-brand-border hover:bg-brand-light-gray"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects List */}
      <section className="py-12 bg-white border-y border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-brand-warm-white rounded-3xl overflow-hidden border border-brand-border shadow-sm hover:shadow-xl transition-all flex flex-col group"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-brand-light-gray">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 right-4 bg-brand-maroon text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    {project.status}
                  </span>
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-brand-maroon text-xs font-bold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-maroon mb-3 group-hover:text-brand-orange transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-brand-text-secondary leading-relaxed mb-6">
                    {project.fullDescription || project.description}
                  </p>

                  {/* Key Outcomes */}
                  {project.outcomes && (
                    <div className="bg-white rounded-2xl p-4 border border-brand-border/80 mb-6">
                      <h4 className="text-xs font-bold text-brand-maroon uppercase tracking-wider mb-2">
                        Key Achieved Outcomes:
                      </h4>
                      <ul className="space-y-1.5">
                        {project.outcomes.map((outcome, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-brand-text-secondary flex items-start gap-2"
                          >
                            <CheckCircle className="w-3.5 h-3.5 text-brand-orange flex-shrink-0 mt-0.5" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Metadata Footer */}
                  <div className="mt-auto pt-4 border-t border-brand-border/80 grid grid-cols-2 gap-3 text-xs text-brand-text-muted">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0" />
                      <span>{project.location}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-brand-orange flex-shrink-0" />
                      <span>{project.year}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-brand-orange flex-shrink-0" />
                      <span>{project.beneficiariesCount}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Building className="w-4 h-4 text-brand-orange flex-shrink-0" />
                      <span>{project.partner}</span>
                    </span>
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
          title="Have a project idea or need enterprise support?"
          subtitle="Submit your requirements to explore collaborative opportunities with SBDC and our partner network."
        />
      </div>
    </div>
  );
}
