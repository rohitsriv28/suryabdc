"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, MapPin, Calendar, Eye, X } from "lucide-react";
import { GALLERY_PHOTOS, GalleryPhoto } from "@/lib/data";
import CtaBannerSection from "@/components/home/CtaBannerSection";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const categories = ["All", "Training", "Field Work", "Partnership", "Events"];

  const filteredPhotos =
    selectedCategory === "All"
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-brand-warm-white min-h-screen">
      {/* Header */}
      <section className="pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <nav className="flex items-center gap-2 text-xs font-semibold text-brand-text-muted mb-6">
          <Link href="/" className="hover:text-brand-orange transition-colors">
            Home
          </Link>
          <span>&gt;</span>
          <span className="text-brand-orange-deep">Media &amp; Gallery</span>
        </nav>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange-tint text-brand-orange-deep text-xs font-bold uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Evidence of Impact</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-maroon tracking-tight">
            Photo <span className="text-brand-orange">Gallery</span>
          </h1>
          <div className="w-20 h-1 bg-brand-orange rounded-full mt-3 mb-5" />
          <p className="text-lg text-brand-text-secondary leading-relaxed">
            Photographs from our workshops, stakeholder roundtables, field
            quality audits, and community enterprise showcases.
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

      {/* Photo Grid */}
      <section className="py-12 bg-white border-y border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setActivePhoto(photo)}
                className="bg-brand-warm-white rounded-2xl overflow-hidden border border-brand-border shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-brand-light-gray">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-brand-maroon/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <span className="bg-brand-orange text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                      View Photo
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-brand-maroon text-[11px] font-bold px-2.5 py-1 rounded-full">
                    {photo.category}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-[16px] font-bold text-brand-maroon mb-1.5 group-hover:text-brand-orange transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-brand-text-secondary line-clamp-2 leading-relaxed mb-4 flex-grow">
                    {photo.caption}
                  </p>

                  <div className="mt-auto pt-3 border-t border-brand-border/60 flex items-center justify-between text-[11.5px] text-brand-text-muted">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                      {photo.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-brand-text-muted" />
                      {photo.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActivePhoto(null)}
        >
          <button
            onClick={() => setActivePhoto(null)}
            className="absolute top-6 right-6 text-white hover:text-brand-orange p-2 z-50 bg-black/40 rounded-full"
            aria-label="Close image"
          >
            <X className="w-7 h-7" />
          </button>

          <div
            className="max-w-4xl max-h-[90vh] bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                className="max-w-full max-h-[70vh] object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-6 bg-neutral-900 text-white space-y-2">
              <div className="flex items-center gap-3">
                <span className="bg-brand-orange text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                  {activePhoto.category}
                </span>
                <span className="text-xs text-neutral-400">
                  {activePhoto.location} • {activePhoto.date}
                </span>
              </div>
              <h3 className="text-lg font-bold">{activePhoto.title}</h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {activePhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="py-20">
        <CtaBannerSection />
      </div>
    </div>
  );
}
