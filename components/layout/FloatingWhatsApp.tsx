"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { BRAND } from "@/lib/constants";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col gap-2">
      {/* Pop-up bubble */}
      {showTooltip && (
        <div className="bg-white text-brand-maroon text-xs shadow-xl rounded-xl p-3 border border-brand-border max-w-[210px] relative animate-bounce-subtle hidden sm:block">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1 right-1 text-neutral-400 hover:text-neutral-600 p-0.5"
            aria-label="Close message"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="font-bold text-brand-maroon text-[12px]">
            Need quick support?
          </p>
          <p className="text-[11px] text-brand-text-secondary mt-0.5">
            Chat directly with our business advisors on WhatsApp.
          </p>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={BRAND.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with SBDC on WhatsApp"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 group relative"
      >
        <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-30 group-hover:opacity-0" />
        <FaWhatsapp className="w-8 h-8 text-white relative z-10" />
      </a>
    </div>
  );
}
