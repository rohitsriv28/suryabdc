"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Eye, X } from "lucide-react";
import { GALLERY_PHOTOS } from "@/lib/data";

export default function GalleryPreviewSection() {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);
  const previewPhotos = GALLERY_PHOTOS.slice(0, 5);

  return (
    <section className="py-20 bg-brand-light-gray/40 border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-orange block mb-2">
              GLIMPSES OF OUR WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-maroon tracking-tight">
              Moments That Inspire Us
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-orange hover:text-brand-orange-deep group transition-colors flex-shrink-0"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 5-photo responsive flex/grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {previewPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo.imageUrl)}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer group bg-brand-border"
            >
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-end">
                <span className="text-[10px] font-bold text-brand-orange-300 uppercase">
                  {photo.category}
                </span>
                <p className="text-[12px] font-semibold text-white line-clamp-1">
                  {photo.title}
                </p>
                <div className="flex items-center gap-1 text-[10px] text-neutral-300 mt-1">
                  <Eye className="w-3 h-3 text-brand-orange" />
                  <span>Click to view</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <button
            onClick={() => setActivePhoto(null)}
            className="absolute top-6 right-6 text-white hover:text-brand-orange p-2 z-50"
            aria-label="Close image"
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="max-w-4xl max-h-[85vh] rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activePhoto}
              alt="Expanded view"
              className="max-w-full max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
