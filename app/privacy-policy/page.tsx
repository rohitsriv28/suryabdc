import React from "react";
import Link from "next/link";
import { Shield } from "lucide-react";
import { BRAND } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy | Surya Business Development Center (SBDC)",
  description: "Privacy Policy and data governance principles for SBDC.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-brand-warm-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <nav className="flex items-center gap-2 text-xs font-semibold text-brand-text-muted mb-6">
          <Link href="/" className="hover:text-brand-orange transition-colors">
            Home
          </Link>
          <span>&gt;</span>
          <span className="text-brand-orange-deep">Privacy Policy</span>
        </nav>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-md space-y-6 text-sm text-brand-text-secondary leading-relaxed">
          <div className="flex items-center gap-4 border-b border-brand-border pb-6">
            <div className="w-12 h-12 rounded-xl bg-brand-orange-tint text-brand-orange flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-maroon">
                Privacy Policy
              </h1>
              <p className="text-xs text-brand-text-muted mt-0.5">
                Surya Business Development Center Pvt. Ltd. (SBDC)
              </p>
            </div>
          </div>

          <p>
            This Privacy Policy describes how Surya Business Development Center
            Pvt. Ltd. (&ldquo;SBDC&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;)
            collects, uses, protects, and discloses personal and business
            information when you use our official website and business
            requirement submission gateway.
          </p>

          <h2 className="text-lg font-bold text-brand-maroon pt-2">
            1. Information We Collect
          </h2>
          <p>
            When you submit a business requirement or contact inquiry, we may
            collect: applicant full name, email address, phone/WhatsApp number,
            enterprise registration details, geographic location, sector, and
            specific support needs.
          </p>

          <h2 className="text-lg font-bold text-brand-maroon pt-2">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li>
              To assess your enterprise requirements and recommend suitable
              programs.
            </li>
            <li>
              To connect your business with relevant external institutions,
              training partners, or donors.
            </li>
            <li>
              To respond to your questions and provide administrative updates.
            </li>
            <li>
              To generate anonymized, aggregated impact statistics for our
              annual reporting.
            </li>
          </ul>

          <h2 className="text-lg font-bold text-brand-maroon pt-2">
            3. Data Sharing &amp; Security
          </h2>
          <p>
            We do not sell, rent, or trade your personal or business data. We
            only share applicant details with prospective partner institutions
            with your explicit consent or as necessary to facilitate the
            requested support.
          </p>

          <h2 className="text-lg font-bold text-brand-maroon pt-2">
            4. Contact Us
          </h2>
          <p>
            For privacy inquiries or data update requests, please contact us at{" "}
            <a
              href={`mailto:${BRAND.email}`}
              className="text-brand-orange-deep font-bold underline"
            >
              {BRAND.email}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
