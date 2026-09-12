import React from "react";
import Link from "next/link";
import { FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Use | Surya Business Development Center (SBDC)",
  description: "Terms and conditions of website use for SBDC.",
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-brand-warm-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <nav className="flex items-center gap-2 text-xs font-semibold text-brand-text-muted mb-6">
          <Link href="/" className="hover:text-brand-orange transition-colors">
            Home
          </Link>
          <span>&gt;</span>
          <span className="text-brand-orange-deep">Terms of Use</span>
        </nav>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-md space-y-6 text-sm text-brand-text-secondary leading-relaxed">
          <div className="flex items-center gap-4 border-b border-brand-border pb-6">
            <div className="w-12 h-12 rounded-xl bg-brand-orange-tint text-brand-orange flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-maroon">
                Terms of Use
              </h1>
              <p className="text-xs text-brand-text-muted mt-0.5">
                Surya Business Development Center Pvt. Ltd. (SBDC)
              </p>
            </div>
          </div>

          <p>
            Welcome to the official website of Surya Business Development Center
            Pvt. Ltd. By accessing or using our website, you agree to comply
            with and be bound by the following terms and conditions.
          </p>

          <h2 className="text-lg font-bold text-brand-maroon pt-2">
            1. Use of Content
          </h2>
          <p>
            All content, including text, photographs, project summaries, logos,
            and graphics published on this portal are the intellectual property
            of SBDC or its licensed partners and may not be reproduced without
            written permission.
          </p>

          <h2 className="text-lg font-bold text-brand-maroon pt-2">
            2. Accurate Information Requirement
          </h2>
          <p>
            When submitting requirements or forms, you agree to provide true,
            accurate, current, and complete information regarding your identity
            and business status.
          </p>

          <h2 className="text-lg font-bold text-brand-maroon pt-2">
            3. Limitation of Liability
          </h2>
          <p>
            SBDC acts as an advisory facilitator. Under no circumstances will
            SBDC be liable for decisions, terms, credit agreements, or actions
            taken by third-party financial institutions, donors, or partner
            organizations.
          </p>

          <h2 className="text-lg font-bold text-brand-maroon pt-2">
            4. Governing Law
          </h2>
          <p>
            These terms are governed by and construed in accordance with the
            laws of Nepal. Any disputes arising shall be subject to the
            exclusive jurisdiction of the courts of Parsa / Kathmandu, Nepal.
          </p>
        </div>
      </div>
    </div>
  );
}
