import React from "react";
import {
  Users,
  GraduationCap,
  Briefcase,
  Handshake,
  TrendingUp,
} from "lucide-react";
import { IMPACT_STATS } from "@/lib/data";

const statIcons: Record<string, React.ReactNode> = {
  Users: <Users className="w-8 h-8 text-brand-orange" />,
  GraduationCap: <GraduationCap className="w-8 h-8 text-brand-orange" />,
  Briefcase: <Briefcase className="w-8 h-8 text-brand-orange" />,
  Handshake: <Handshake className="w-8 h-8 text-brand-orange" />,
  TrendingUp: <TrendingUp className="w-8 h-8 text-brand-orange" />,
};

export default function StatsBarSection({
  className = "",
}: {
  className?: string;
}) {
  return (
    <section
      className={`bg-brand-maroon text-white py-14 border-y border-brand-maroon-light/30 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8 text-center">
          {IMPACT_STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center p-2 sm:p-3 last:col-span-2 sm:last:col-span-1 group"
            >
              <div className="mb-2 sm:mb-3 transform group-hover:scale-110 transition-transform duration-200">
                {statIcons[stat.icon]}
              </div>
              <div className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-[13px] text-neutral-300 font-medium max-w-[150px] leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
