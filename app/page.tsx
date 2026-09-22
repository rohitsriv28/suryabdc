import React from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";

// Dynamically lazy-load below-the-fold sections for optimal initial bundle & performance
const FeaturedProjectsSection = dynamic(
  () => import("@/components/home/FeaturedProjectsSection")
);
const StatsBarSection = dynamic(
  () => import("@/components/home/StatsBarSection")
);
const TestimonialsSection = dynamic(
  () => import("@/components/home/TestimonialsSection")
);
const GalleryPreviewSection = dynamic(
  () => import("@/components/home/GalleryPreviewSection")
);
const PartnerLogosSection = dynamic(
  () => import("@/components/home/PartnerLogosSection")
);
const CtaBannerSection = dynamic(
  () => import("@/components/home/CtaBannerSection")
);

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <WhatWeDoSection />
      <HowItWorksSection />
      <FeaturedProjectsSection />
      <StatsBarSection />
      <TestimonialsSection />
      <GalleryPreviewSection />
      <PartnerLogosSection />
      <div className="pb-24">
        <CtaBannerSection />
      </div>
    </div>
  );
}
