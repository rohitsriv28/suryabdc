import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark" | "full-white";
  className?: string;
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const isDarkBg = variant === "full-white";

  return (
    <Link
      href="/"
      className={`inline-flex items-center group select-none ${className}`}
    >
      <div
        className={`relative flex items-center transition-all ${
          isDarkBg
            ? "bg-white px-3 py-2 rounded-2xl shadow-sm group-hover:shadow-md"
            : "mix-blend-multiply"
        }`}
      >
        <Image
          src="/logos/SuryaBDC.png"
          alt="Surya Business Development Center Pvt. Ltd."
          width={360}
          height={120}
          priority
          className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
    </Link>
  );
}
