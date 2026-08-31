import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark" | "full-white";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({
  variant = "dark",
  className = "",
  size = "md",
}: LogoProps) {
  const isDarkBg = variant === "full-white";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 sm:gap-3 group select-none ${className}`}
    >
      {/* Sun Icon Emblem */}
      <div className="relative w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full transform group-hover:rotate-12 transition-transform duration-500 ease-out"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Sun Rays */}
          <g stroke="#F36A21" strokeWidth="4.5" strokeLinecap="round">
            <line x1="50" y1="6" x2="50" y2="18" />
            <line x1="50" y1="82" x2="50" y2="94" />
            <line x1="6" y1="50" x2="18" y2="50" />
            <line x1="82" y1="50" x2="94" y2="50" />
            <line x1="19" y1="19" x2="28" y2="28" />
            <line x1="72" y1="72" x2="81" y2="81" />
            <line x1="19" y1="81" x2="28" y2="72" />
            <line x1="72" y1="28" x2="81" y2="19" />
            <line x1="33" y1="10" x2="38" y2="21" />
            <line x1="62" y1="79" x2="67" y2="90" />
            <line x1="10" y1="33" x2="21" y2="38" />
            <line x1="79" y1="62" x2="90" y2="67" />
            <line x1="67" y1="10" x2="62" y2="21" />
            <line x1="38" y1="79" x2="33" y2="90" />
            <line x1="90" y1="33" x2="79" y2="38" />
            <line x1="21" y1="62" x2="10" y2="67" />
          </g>
          {/* Sun Core Rings */}
          <circle
            cx="50"
            cy="50"
            r="24"
            fill="#FFF1E8"
            stroke="#F36A21"
            strokeWidth="3.5"
          />
          <circle cx="50" cy="50" r="15" fill="#F36A21" />
          <circle cx="50" cy="50" r="8" fill="#D95516" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1 sm:gap-1.5 leading-none">
          <span
            className={`font-extrabold text-[17px] sm:text-[21px] tracking-tight font-serif ${
              isDarkBg ? "text-white" : "text-brand-maroon"
            }`}
          >
            Surya
          </span>
          <span
            className={`font-bold text-[16px] sm:text-[20px] tracking-tight ${
              isDarkBg ? "text-white" : "text-brand-maroon"
            }`}
          >
            Business
          </span>
        </div>
        <span
          className={`text-[10px] sm:text-[12px] font-medium tracking-tight mt-0.5 ${
            isDarkBg ? "text-neutral-200" : "text-brand-maroon"
          }`}
        >
          Development Centre Pvt. Ltd.
        </span>
        <span
          className={`text-[6.5px] sm:text-[7.5px] font-bold tracking-[0.12em] sm:tracking-[0.14em] uppercase mt-0.5 ${
            isDarkBg ? "text-brand-orange-300" : "text-brand-orange-deep"
          }`}
        >
          Empowering Business. Building Futures.
        </span>
      </div>
    </Link>
  );
}
