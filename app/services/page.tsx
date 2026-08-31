import React from "react";
import Link from "next/link";
import {
  Coins,
  Presentation,
  TrendingUp,
  Sparkles,
  Building2,
  Network,
  ArrowRight,
  AlertCircle,
  FileEdit,
  Users,
  Search,
  Handshake,
  CheckCircle2,
} from "lucide-react";
import { SERVICES, PROGRAM_TYPES, PROCESS_STEPS } from "@/lib/data";
import { BRAND } from "@/lib/constants";
import CtaBannerSection from "@/components/home/CtaBannerSection";

export const metadata = {
  title: "What We Do & Services | Surya Business Development Centre (SBDC)",
  description:
    "Explore SBDC's specialized facilitation services: Funding Facilitation, Training & Capacity Building, Business Development, and Market Linkages.",
};

const serviceIcons: Record<string, React.ReactNode> = {
  Coins: <Coins className="w-8 h-8 text-brand-orange" />,
  Presentation: <Presentation className="w-8 h-8 text-brand-orange" />,
  TrendingUp: <TrendingUp className="w-8 h-8 text-brand-orange" />,
  Sparkles: <Sparkles className="w-8 h-8 text-brand-orange" />,
  Building2: <Building2 className="w-8 h-8 text-brand-orange" />,
  Network: <Network className="w-8 h-8 text-brand-orange" />,
};

export default function ServicesPage() {
  return (
    <div className="bg-brand-warm-white flex flex-col">
      {/* Breadcrumb & Hero Header */}
      <section className="pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-brand-text-muted mb-6">
          <Link href="/" className="hover:text-brand-orange transition-colors">
            Home
          </Link>
          <span>&gt;</span>
          <span>What We Do</span>
          <span>&gt;</span>
          <span className="text-brand-orange-deep">Services</span>
        </nav>

        {/* Top Headline */}
        <div className="max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-orange block mb-2">
            OUR SERVICES
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-maroon tracking-tight">
            Solutions that Empower{" "}
            <span className="text-brand-orange">Businesses to Grow</span>
          </h1>
          <div className="w-20 h-1 bg-brand-orange rounded-full mt-3 mb-5" />
          <p className="text-lg sm:text-xl text-brand-text-secondary leading-relaxed font-normal">
            We act as a bridge between entrepreneurs, businesses, and the right
            opportunities, programs, and institutions that can help them grow
            and succeed.
          </p>
        </div>

        {/* Hero Banner Image matching mock */}
        <div className="mt-10 relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[16/9] sm:aspect-[21/8] bg-brand-light-gray">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
            alt="SBDC Advisory and Facilitation Services"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 6 Service Areas Grid */}
      <section
        className="py-16 bg-white border-y border-brand-border/60"
        id="services-grid"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-orange block mb-2">
              OUR SERVICE AREAS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-maroon tracking-tight">
              How We Support You
            </h2>
            <p className="text-brand-text-secondary text-[15px] mt-2">
              Structured assistance tailored to your enterprise lifecycle and
              specific industry requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-brand-warm-white rounded-2xl p-7 border border-brand-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group scroll-mt-28"
              >
                {/* Icon in orange circle */}
                <div className="w-16 h-16 rounded-2xl bg-brand-orange-tint flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-brand-orange/20 transition-all">
                  {serviceIcons[service.iconName] || (
                    <Sparkles className="w-8 h-8 text-brand-orange" />
                  )}
                </div>

                <h3 className="text-xl font-bold text-brand-maroon mb-2.5 group-hover:text-brand-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-[13.5px] text-brand-text-secondary leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Key Benefits */}
                <div className="mt-auto pt-4 border-t border-brand-border/60">
                  <div className="text-xs font-bold text-brand-maroon uppercase tracking-wider mb-2">
                    Key Advantages:
                  </div>
                  <ul className="space-y-1.5 mb-5">
                    {service.benefits.map((b, i) => (
                      <li
                        key={i}
                        className="text-xs text-brand-text-secondary flex items-start gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/submit-requirement?service=${service.id}`}
                    className="w-full bg-white hover:bg-brand-orange hover:text-white text-brand-orange-deep border border-brand-orange/30 font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-2xs"
                  >
                    <span>Request This Support</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section className="py-20 bg-brand-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-orange block mb-2">
              OUR APPROACH
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-maroon tracking-tight">
              A Simple, Transparent Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-white border-2 border-brand-orange-200 shadow-sm flex items-center justify-center text-brand-orange mb-4 relative">
                  <span className="font-extrabold text-lg">{step.step}</span>
                </div>
                <h3 className="text-[17px] font-bold text-brand-maroon mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-brand-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Facilitation Disclaimer Box */}
          <div className="mt-14 max-w-3xl mx-auto">
            <div className="bg-brand-orange-tint border border-brand-orange-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3 shadow-xs">
              <AlertCircle className="w-5 h-5 text-brand-orange-deep flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-brand-text-primary leading-relaxed">
                <strong className="font-bold text-brand-maroon">Note: </strong>
                SBDC does not provide loans, grants, or financial assistance
                directly. All support is subject to the eligibility criteria and
                approval process of the respective organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Types Grid matching mockup */}
      <section className="py-20 bg-white border-t border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-orange block mb-2">
              EXAMPLES OF PROGRAMS WE HELP YOU ACCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-maroon tracking-tight">
              Types of Programs &amp; Opportunities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAM_TYPES.map((prog) => (
              <div
                key={prog.title}
                className="bg-brand-warm-white rounded-2xl overflow-hidden border border-brand-border shadow-xs hover:shadow-md transition-all flex flex-col group"
              >
                <div className="aspect-[16/9] overflow-hidden bg-brand-light-gray">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-[17px] font-bold text-brand-maroon mb-2 group-hover:text-brand-orange transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-[13px] text-brand-text-secondary leading-relaxed flex-grow">
                    {prog.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="py-20">
        <CtaBannerSection
          title="Ready to take the next step?"
          subtitle="Tell us what your business needs and our team will connect you with the right opportunities and support."
          buttonText="Submit Your Requirement"
          buttonHref="/submit-requirement"
        />
      </div>
    </div>
  );
}
