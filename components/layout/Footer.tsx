import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ShieldCheck } from "lucide-react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import Logo from "@/components/ui/Logo";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { SERVICES } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-maroon text-white pt-16 pb-8 border-t border-brand-maroon-light/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="full-white" />
            <p className="text-neutral-300 text-[13.5px] leading-relaxed max-w-sm pt-2">
              Practical solutions for entrepreneurs, enterprises, institutions,
              and development organizations through business development,
              research, training, and strategic enterprise consulting.
            </p>

            {/* Social Links with react-icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-neutral-200 hover:bg-brand-orange hover:text-white transition-all"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a
                href={BRAND.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-neutral-200 hover:bg-brand-orange hover:text-white transition-all"
              >
                <FaLinkedinIn className="w-3.5 h-3.5" />
              </a>
              <a
                href={BRAND.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-neutral-200 hover:bg-brand-orange hover:text-white transition-all"
              >
                <FaInstagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={BRAND.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-neutral-200 hover:bg-brand-orange hover:text-white transition-all"
              >
                <FaYoutube className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Facilitator Notice Pill */}
            <div className="pt-2">
              <div className="inline-flex items-start gap-2 p-2.5 rounded-lg bg-white/5 border border-white/10 text-[11.5px] text-neutral-300 leading-snug">
                <ShieldCheck className="w-4 h-4 text-brand-orange-300 flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Note:</strong> SBDC is a
                  facilitator and mediator. We do not provide direct loans or
                  grants.
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-bold text-brand-orange-300 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-[13.5px]">
              {NAV_LINKS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-neutral-300 hover:text-brand-orange transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/submit-requirement"
                  className="text-brand-orange-300 hover:text-white font-medium transition-colors"
                >
                  Submit Requirement
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-brand-orange-300 uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-2 text-[13.5px]">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-neutral-300 hover:text-brand-orange transition-colors line-clamp-1"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-brand-orange-300 uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3 text-[13px] text-neutral-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <span>{BRAND.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <a
                  href={`tel:${BRAND.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <a
                  href={`mailto:${BRAND.email}`}
                  className="hover:text-white transition-colors"
                >
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 pt-1">
                <FaWhatsapp className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:text-white font-medium transition-colors"
                >
                  Chat with us on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-neutral-400">
          <p>
            &copy; {currentYear} {BRAND.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-brand-orange transition-colors"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link
              href="/terms-of-service"
              className="hover:text-brand-orange transition-colors"
            >
              Terms of Use
            </Link>
            <span>|</span>
            <Link
              href="/disclaimer"
              className="hover:text-brand-orange transition-colors"
            >
              Facilitation Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
