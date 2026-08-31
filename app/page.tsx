import React from "react";
import HeroSection from "@/components/home/HeroSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection";
import StatsBarSection from "@/components/home/StatsBarSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import GalleryPreviewSection from "@/components/home/GalleryPreviewSection";
import PartnerLogosSection from "@/components/home/PartnerLogosSection";
import CtaBannerSection from "@/components/home/CtaBannerSection";

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
