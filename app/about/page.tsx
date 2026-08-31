import React from "react";
import Link from "next/link";
import {
  Target,
  Eye,
  Gem,
  CheckCircle2,
  ArrowRight,
  FileEdit,
  Users,
  Search,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import StatsBarSection from "@/components/home/StatsBarSection";
import CtaBannerSection from "@/components/home/CtaBannerSection";
import { TEAM_MEMBERS } from "@/lib/data";

export const metadata = {
  title: "About Us | Surya Business Development Centre (SBDC)",
  description:
    "Learn about SBDC's mission, vision, values, leadership team, and our operating model facilitating business growth across Nepal.",
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
            <span>Who We Are</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-maroon tracking-tight">
            About <span className="text-brand-orange">SBDC</span>
          </h1>
          <div className="w-20 h-1 bg-brand-orange rounded-full mt-3 mb-5" />
          <p className="text-lg sm:text-xl text-brand-text-secondary leading-relaxed font-normal">
            We are a business development organization committed to empowering
            entrepreneurs and strengthening businesses through knowledge,
            strategy, and meaningful partnerships.
          </p>
        </div>

        {/* Corporate Headquarters Banner Image */}
        <div className="mt-10 relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[16/9] sm:aspect-[21/9] bg-brand-light-gray">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
            alt="Surya Business Development Centre Headquarters"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/80 via-brand-maroon/20 to-transparent flex flex-col justify-end p-4 sm:p-10 text-white">
            <div className="inline-block bg-brand-orange text-white text-[10px] sm:text-xs font-extrabold px-2.5 sm:px-3 py-1 rounded-md uppercase tracking-wider mb-1 sm:mb-2 w-fit">
              Headquarters • Birgunj, Parsa
            </div>
            <h2 className="text-lg sm:text-2xl font-bold">
              Surya Business Development Centre Pvt. Ltd.
            </h2>
            <p className="text-neutral-200 text-xs sm:text-sm max-w-xl mt-1 hidden xs:block">
              Serving as a central hub connecting Nepali enterprise potential
              with national and global development opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-16 bg-white border-y border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-brand-warm-white rounded-2xl p-8 border border-brand-border shadow-sm hover:shadow-lg transition-all flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-brand-orange-tint flex items-center justify-center text-brand-orange mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-brand-maroon mb-3">
                Our Mission
              </h3>
              <p className="text-[14.5px] text-brand-text-secondary leading-relaxed flex-grow">
                To empower entrepreneurs and existing businesses by connecting
                them with relevant funding opportunities, capacity-building
                programs, and institutional support for sustainable growth.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-brand-warm-white rounded-2xl p-8 border border-brand-border shadow-sm hover:shadow-lg transition-all flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-brand-orange-tint flex items-center justify-center text-brand-orange mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-brand-maroon mb-3">
                Our Vision
              </h3>
              <p className="text-[14.5px] text-brand-text-secondary leading-relaxed flex-grow">
                A thriving entrepreneurial ecosystem where businesses have the
                right connections, knowledge, and resources to grow, innovate,
                and create lasting impact across Nepal.
              </p>
            </div>

            {/* Values */}
            <div className="bg-brand-warm-white rounded-2xl p-8 border border-brand-border shadow-sm hover:shadow-lg transition-all flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-brand-orange-tint flex items-center justify-center text-brand-orange mb-6">
                <Gem className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-brand-maroon mb-3">
                Our Values
              </h3>
              <ul className="space-y-3 text-[13.5px] text-brand-text-secondary">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Integrity:</strong> Honesty and professional ethics
                    in everything we do
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Empathy:</strong> Deep respect and active listening
                    towards entrepreneurs
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Transparency:</strong> Total clarity regarding our
                    facilitation role
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Collaboration:</strong> Building win-win
                    institutional coalitions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Commitment:</strong> Long-term dedication to
                    sustainable enterprise growth
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <StatsBarSection />

      {/* Our Approach (How We Work) */}
      <section className="py-20 bg-brand-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-orange block mb-2">
              OUR APPROACH
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-maroon tracking-tight">
              How We Work
            </h2>
            <p className="text-brand-text-secondary text-[15px] mt-2">
              Our 4-stage operational framework ensuring tailored and impactful
              business linkages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-brand-border text-center flex flex-col items-center shadow-xs">
              <div className="w-16 h-16 rounded-full bg-brand-orange-tint text-brand-orange flex items-center justify-center mb-4">
                <FileEdit className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-brand-orange uppercase mb-1">
                Step 01
              </span>
              <h3 className="text-lg font-bold text-brand-maroon mb-2">
                Understand
              </h3>
              <p className="text-xs sm:text-[13px] text-brand-text-secondary leading-relaxed">
                We listen to your business needs and understand your goals,
                bottlenecks, and market challenges.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border text-center flex flex-col items-center shadow-xs">
              <div className="w-16 h-16 rounded-full bg-brand-orange-tint text-brand-orange flex items-center justify-center mb-4">
                <Users className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-brand-orange uppercase mb-1">
                Step 02
              </span>
              <h3 className="text-lg font-bold text-brand-maroon mb-2">
                Connect
              </h3>
              <p className="text-xs sm:text-[13px] text-brand-text-secondary leading-relaxed">
                We identify suitable programs, organizations, and resources that
                match your distinct profile.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border text-center flex flex-col items-center shadow-xs">
              <div className="w-16 h-16 rounded-full bg-brand-orange-tint text-brand-orange flex items-center justify-center mb-4">
                <Search className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-brand-orange uppercase mb-1">
                Step 03
              </span>
              <h3 className="text-lg font-bold text-brand-maroon mb-2">
                Facilitate
              </h3>
              <p className="text-xs sm:text-[13px] text-brand-text-secondary leading-relaxed">
                We introduce and facilitate your connection with the right
                institutions, mentors, and program officers.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border text-center flex flex-col items-center shadow-xs">
              <div className="w-16 h-16 rounded-full bg-brand-orange-tint text-brand-orange flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-brand-orange uppercase mb-1">
                Step 04
              </span>
              <h3 className="text-lg font-bold text-brand-maroon mb-2">Grow</h3>
              <p className="text-xs sm:text-[13px] text-brand-text-secondary leading-relaxed">
                We support you in accessing opportunities to strengthen skills,
                optimize operations, and grow steadily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Dedicated Team Section */}
      <section className="py-20 bg-white border-t border-brand-border/60">
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
                className="bg-brand-warm-white rounded-2xl overflow-hidden border border-brand-border shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="aspect-[4/4] overflow-hidden bg-brand-light-gray">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                        className="text-[10.5px] bg-white border border-brand-border px-2 py-0.5 rounded-full text-brand-text-muted"
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
          title="Let’s Build a Stronger Future Together"
          subtitle="Tell us what support your business needs and we will connect you with the right opportunities."
        />
      </div>
    </div>
  );
}
