import React from "react";
import Link from "next/link";
import {
  Target,
  Eye,
  CheckCircle2,
  Sparkles,
  MapPin,
  ShieldCheck,
  FolderCheck,
  Users,
  Search,
  ClipboardCheck,
  FileText,
  Briefcase,
  FileCheck,
  TrendingUp,
} from "lucide-react";
import StatsBarSection from "@/components/home/StatsBarSection";
import CtaBannerSection from "@/components/home/CtaBannerSection";
import {
  TEAM_MEMBERS,
  PROCESS_STEPS,
  WHY_SBDC,
  OUR_COMMITMENT,
} from "@/lib/data";
import { BRAND } from "@/lib/constants";

export const metadata = {
  title: "About Us | Surya Business Development Center (SBDC)",
  description:
    "Learn about SBDC's mission, vision, 6-stage approach, Why SBDC pillars, and leadership team facilitating business growth across Nepal.",
};

const approachIcons: Record<string, React.ReactNode> = {
  "01": <Search className="w-6 h-6 text-brand-orange" />,
  "02": <ClipboardCheck className="w-6 h-6 text-brand-orange" />,
  "03": <FileText className="w-6 h-6 text-brand-orange" />,
  "04": <Briefcase className="w-6 h-6 text-brand-orange" />,
  "05": <FileCheck className="w-6 h-6 text-brand-orange" />,
  "06": <TrendingUp className="w-6 h-6 text-brand-orange" />,
};

const whyIcons: Record<string, React.ReactNode> = {
  MapPin: <MapPin className="w-6 h-6 text-brand-orange" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-brand-orange" />,
  FolderCheck: <FolderCheck className="w-6 h-6 text-brand-orange" />,
  Target: <Target className="w-6 h-6 text-brand-orange" />,
  Users: <Users className="w-6 h-6 text-brand-orange" />,
};

export default function AboutPage() {
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
          <span className="text-brand-orange-deep">About Us</span>
        </nav>

        {/* Top Headline */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange-tint text-brand-orange-deep text-xs font-bold uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Who We Are • {BRAND.estd}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-maroon tracking-tight">
            About <span className="text-brand-orange">SBDC</span>
          </h1>
          <div className="w-20 h-1 bg-brand-orange rounded-full mt-3 mb-5" />
          <p className="text-lg sm:text-xl text-brand-text-secondary leading-relaxed font-normal">
            Surya Business Development Center Pvt. Ltd. (SBDC) is a business
            development and consulting company focused on supporting
            entrepreneurs, enterprises, institutions and development
            organizations through practical business solutions, research,
            training and enterprise development.
          </p>
          <p className="text-[15px] text-brand-text-muted mt-3 leading-relaxed">
            We provide professional services in business development, research
            and surveys, entrepreneurship development, training and capacity
            building, feasibility studies, business planning, project
            documentation and business networking.
          </p>
        </div>

        {/* Corporate Headquarters Banner Image */}
        <div className="mt-10 relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[16/9] sm:aspect-[21/9] bg-brand-light-gray">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
            alt="Surya Business Development Center Headquarters"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/85 via-brand-maroon/25 to-transparent flex flex-col justify-end p-4 sm:p-10 text-white">
            <div className="inline-block bg-brand-orange text-white text-[10px] sm:text-xs font-extrabold px-2.5 sm:px-3 py-1 rounded-md uppercase tracking-wider mb-1 sm:mb-2 w-fit">
              Headquarters • Birgunj, Parsa, Madhesh Province
            </div>
            <h2 className="text-lg sm:text-2xl font-bold">{BRAND.name}</h2>
            <p className="text-neutral-200 text-xs sm:text-sm max-w-xl mt-1 hidden xs:block">
              {BRAND.subTagline}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white border-y border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vision */}
            <div className="bg-brand-warm-white rounded-2xl p-8 border border-brand-border shadow-sm hover:shadow-lg transition-all flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-brand-orange-tint flex items-center justify-center text-brand-orange mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange mb-1">
                Our Vision
              </span>
              <h3 className="text-2xl font-bold text-brand-maroon mb-3">
                A Trusted Partner in Nepal
              </h3>
              <p className="text-[15px] text-brand-text-secondary leading-relaxed flex-grow italic">
                &ldquo;To become a trusted business development partner for
                enterprises, entrepreneurs and organizations in Nepal.&rdquo;
              </p>
            </div>

            {/* Mission */}
            <div className="bg-brand-warm-white rounded-2xl p-8 border border-brand-border shadow-sm hover:shadow-lg transition-all flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-brand-orange-tint flex items-center justify-center text-brand-orange mb-6">
                <Target className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange mb-1">
                Our Mission
              </span>
              <h3 className="text-2xl font-bold text-brand-maroon mb-3">
                Strengthen & Empower
              </h3>
              <p className="text-[15px] text-brand-text-secondary leading-relaxed flex-grow italic">
                &ldquo;To strengthen businesses and entrepreneurs by providing
                professional knowledge, practical solutions, research, capacity
                building and opportunities for growth and collaboration.&rdquo;
              </p>
            </div>
          </div>

          {/* Our Commitment Callout */}
          <div className="mt-10 max-w-5xl mx-auto">
            <div className="bg-brand-orange-tint/70 border border-brand-orange/30 rounded-2xl p-6 sm:p-7 text-center">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-orange block mb-2">
                OUR COMMITMENT
              </span>
              <p className="text-base sm:text-lg font-bold text-brand-maroon max-w-3xl mx-auto">
                &ldquo;{OUR_COMMITMENT}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <StatsBarSection />

      {/* Our Approach (6-Stage Methodology) */}
      <section className="py-20 bg-brand-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-orange block mb-2">
              OUR APPROACH
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-maroon tracking-tight">
              A Disciplined 6-Stage Process
            </h2>
            <p className="text-brand-text-secondary text-[15px] mt-2">
              From ground-level understanding to continuous improvement, our
              structured cycle delivers practical, accountable results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 border border-brand-border text-center flex flex-col items-center shadow-xs hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-brand-orange-tint text-brand-orange flex items-center justify-center mb-4">
                  {approachIcons[step.step] || (
                    <Search className="w-6 h-6 text-brand-orange" />
                  )}
                </div>
                <span className="text-[11px] font-extrabold text-brand-orange tracking-widest uppercase mb-1">
                  Step {step.step}
                </span>
                <h3 className="text-base font-bold text-brand-maroon mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-brand-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SBDC? 5 Pillars */}
      <section className="py-20 bg-white border-y border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-orange block mb-2">
              CORE STRENGTHS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-maroon tracking-tight">
              Why SBDC?
            </h2>
            <p className="text-brand-text-secondary text-[15px] mt-2">
              What sets our business development and research consultancy apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {WHY_SBDC.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-brand-warm-white rounded-2xl p-6 border border-brand-border/80 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-orange-tint flex items-center justify-center text-brand-orange mb-4">
                  {whyIcons[pillar.iconName] || (
                    <CheckCircle2 className="w-6 h-6 text-brand-orange" />
                  )}
                </div>
                <h3 className="text-[16px] font-bold text-brand-maroon mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-brand-text-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Dedicated Team Section */}
      <section className="py-20 bg-brand-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-orange block mb-2">
              OUR PEOPLE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-maroon tracking-tight">
              A Dedicated Team by Your Side
            </h2>
            <p className="text-brand-text-secondary text-[15px] mt-3">
              Our team brings together diverse expertise in business
              development, research, program management, and partnerships to
              create measurable impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl overflow-hidden border border-brand-border shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="aspect-[4/4] overflow-hidden bg-brand-light-gray">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-brand-maroon group-hover:text-brand-orange transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs font-bold text-brand-orange-deep mt-0.5 mb-3">
                    {member.role}
                  </div>
                  <p className="text-xs text-brand-text-secondary line-clamp-3 leading-relaxed mb-3">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.expertise.map((exp) => (
                      <span
                        key={exp}
                        className="text-[10.5px] bg-brand-light-gray border border-brand-border px-2 py-0.5 rounded-full text-brand-text-muted"
                      >
                        {exp}
                      </span>
                    ))}
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
          title="Let’s Build the Future Together"
          subtitle="SBDC is ready to work with entrepreneurs, enterprises, development organizations, institutions and business associations."
        />
      </div>
    </div>
  );
}
