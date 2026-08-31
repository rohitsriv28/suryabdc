import React from "react";
import Link from "next/link";
import { ShieldAlert, AlertTriangle, CheckCircle2 } from "lucide-react";
import { BRAND } from "@/lib/constants";

export const metadata = {
  title:
    "Facilitation & Financial Disclaimer | Surya Business Development Centre (SBDC)",
  description:
    "Official legal and operating disclaimer regarding SBDC's role as a facilitator and mediator.",
};

export default function DisclaimerPage() {
  return (
    <div className="bg-brand-warm-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-brand-text-muted mb-6">
          <Link href="/" className="hover:text-brand-orange transition-colors">
            Home
          </Link>
          <span>&gt;</span>
          <span className="text-brand-orange-deep">
            Facilitation Disclaimer
          </span>
        </nav>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-md space-y-8">
          <div className="flex items-center gap-4 border-b border-brand-border pb-6">
            <div className="w-14 h-14 rounded-2xl bg-brand-orange-tint text-brand-orange flex items-center justify-center flex-shrink-0">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-maroon">
                Facilitation &amp; Financial Disclaimer
              </h1>
              <p className="text-xs text-brand-text-muted mt-1">
                Last updated: August 2026 • Legal Operating Framework
              </p>
            </div>
          </div>

          <div className="bg-brand-orange-tint/80 border-2 border-brand-orange-200 rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-brand-orange-deep font-bold text-base">
              <AlertTriangle className="w-5 h-5" />
              <span>Core Operating Principle</span>
            </div>
            <p className="text-sm text-brand-maroon leading-relaxed">
              {BRAND.disclaimer.legal}
            </p>
          </div>

          <div className="space-y-6 text-sm text-brand-text-secondary leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-brand-maroon">
                1. Nature of Services
              </h2>
              <p>
                Surya Business Development Centre Pvt. Ltd. provides business
                development consulting, capacity-building workshops, project
                advisory, and institutional mediation. SBDC does not function as
                a bank, financial institution, licensed money lender, deposit
                collector, or direct grant disbursing entity under the laws of
                Nepal.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-brand-maroon">
                2. No Guarantee of External Approval
              </h2>
              <p>
                Submitting a business requirement or inquiry through SBDC does
                not guarantee approval, sanctioning, or disbursement of any
                financial assistance, loan, or grant from external partner
                organizations. Each donor, bank, or government agency operates
                under its own statutory guidelines and independent evaluation
                mechanisms.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-brand-maroon">
                3. Independence of External Institutions
              </h2>
              <p>
                SBDC has no controlling authority or ownership over external
                development agencies, NGOs, INGOs, commercial banks, or
                government ministries. Connections made are strictly for
                informational and facilitation purposes.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-brand-maroon">
                4. Contact &amp; Verification
              </h2>
              <p>
                If you encounter any individual claiming to represent SBDC who
                promises guaranteed loans in exchange for upfront guarantee
                fees, please report them immediately to{" "}
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-brand-orange-deep font-bold underline"
                >
                  {BRAND.email}
                </a>
                .
              </p>
            </section>
          </div>

          <div className="pt-6 border-t border-brand-border flex justify-between items-center">
            <Link
              href="/"
              className="text-xs font-bold text-brand-orange hover:text-brand-orange-deep"
            >
              &larr; Return to Homepage
            </Link>
            <Link
              href="/submit-requirement"
              className="bg-brand-orange text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow hover:bg-brand-orange-deep"
            >
              Submit Business Requirement
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
