"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "@/components/ui/Logo";
import { BRAND, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-200">
      {/* Top Info Micro-Bar */}
      <div className="bg-brand-maroon text-white text-[12px] py-1.5 px-4 hidden md:block border-b border-brand-maroon-light/30">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <MapPin className="w-3.5 h-3.5 text-brand-orange" />
              {BRAND.address}
            </span>
            <span className="flex items-center gap-1.5 text-neutral-300">
              <Clock className="w-3.5 h-3.5 text-brand-orange" />
              {BRAND.officeHours}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${BRAND.phone}`}
              className="flex items-center gap-1.5 text-neutral-200 hover:text-brand-orange transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange" />
              {BRAND.phone}
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="flex items-center gap-1.5 text-neutral-200 hover:text-brand-orange transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-orange" />
              {BRAND.email}
            </a>
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium ml-2 transition-colors"
            >
              <FaWhatsapp className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`bg-brand-warm-white border-b transition-shadow duration-200 ${
          scrolled ? "shadow-md border-brand-border" : "border-brand-border/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 py-1">
              <Logo />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-[14.5px] font-semibold transition-all relative py-1 ${
                      isActive
                        ? "text-brand-orange-deep font-bold"
                        : "text-brand-maroon hover:text-brand-orange"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-brand-orange rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Header Primary CTA (Desktop) */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/submit-requirement"
                className="bg-brand-orange hover:bg-brand-orange-deep text-white text-[14px] font-bold px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 flex items-center gap-2 group"
              >
                <span>Submit Your Requirement</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Header Controls */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/submit-requirement"
                className="bg-brand-orange hover:bg-brand-orange-deep text-white text-[11.5px] sm:text-xs font-bold px-3 py-2 rounded-lg shadow-xs transition-colors flex items-center gap-1"
              >
                <span>Submit Need</span>
              </Link>

              {/* Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-brand-maroon hover:bg-brand-light-gray active:bg-brand-orange-tint focus:outline-none focus:ring-2 focus:ring-brand-orange/40 transition-colors"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-brand-orange" />
                ) : (
                  <Menu className="w-6 h-6 text-brand-maroon" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer & Backdrop */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[73px] sm:top-[81px] bottom-0 z-50 bg-black/50 backdrop-blur-xs flex flex-col">
            <div
              className="bg-brand-warm-white border-t border-brand-border overflow-y-auto max-h-[calc(100vh-73px)] sm:max-h-[calc(100vh-81px)] shadow-2xl p-4 space-y-3"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Action Pill */}
              <div className="bg-brand-orange-tint border border-brand-orange-200 rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-orange-deep">
                  <Sparkles className="w-4 h-4" />
                  <span>Business Support Gateway</span>
                </div>
                <span className="text-[10px] uppercase tracking-wider bg-white font-bold px-2 py-0.5 rounded text-brand-maroon">
                  Nepal
                </span>
              </div>

              {/* Navigation Items */}
              <nav className="space-y-1.5 pt-1">
                {NAV_LINKS.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                        isActive
                          ? "bg-brand-orange text-white shadow-xs"
                          : "text-brand-maroon hover:bg-brand-light-gray bg-white border border-brand-border/40"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight
                        className={`w-4 h-4 ${
                          isActive ? "text-white" : "text-brand-text-muted"
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>

              {/* Primary Mobile Action Buttons */}
              <div className="pt-3 space-y-2 border-t border-brand-border">
                <Link
                  href="/submit-requirement"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-brand-orange hover:bg-brand-orange-deep text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors text-sm"
                >
                  <span>Submit Your Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors text-sm"
                >
                  <FaWhatsapp className="w-4 h-4 text-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Contact Footer Info */}
              <div className="pt-3 pb-2 text-xs text-brand-text-secondary border-t border-brand-border/60 flex flex-col gap-2">
                <span className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                  {BRAND.address}
                </span>
                <span className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                  <a
                    href={`tel:${BRAND.phone}`}
                    className="hover:text-brand-orange"
                  >
                    {BRAND.phone}
                  </a>
                </span>
                <span className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="hover:text-brand-orange"
                  >
                    {BRAND.email}
                  </a>
                </span>
              </div>
            </div>

            {/* Click backdrop to close */}
            <div
              className="flex-grow"
              onClick={() => setMobileMenuOpen(false)}
            />
          </div>
        )}
      </div>
    </header>
  );
}
