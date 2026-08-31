"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Building2,
  HelpCircle,
  Clock,
  ArrowRight,
} from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function SubmitRequirementPage() {
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    registrationStatus: "Registered",
    district: "Parsa",
    sector: "Agriculture & Agro-Processing",
    stage: "Established SME (1-5 yrs)",
    supportTypes: ["Funding Facilitation"],
    summary: "",
    estimatedAmount: "",
    consentDisclaimer: false,
    consentData: false,
  });

  const handleSupportToggle = (type: string) => {
    setFormData((prev) => {
      const exists = prev.supportTypes.includes(type);
      return {
        ...prev,
        supportTypes: exists
          ? prev.supportTypes.filter((t) => t !== type)
          : [...prev.supportTypes, type],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consentDisclaimer || !formData.consentData) {
      alert("Please review and accept both consent statements to proceed.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRefId(
        `SBDC-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`,
      );
      setSubmitted(true);
    }, 900);
  };

  return (
    <div className="bg-brand-warm-white min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-brand-text-muted mb-6">
          <Link href="/" className="hover:text-brand-orange transition-colors">
            Home
          </Link>
          <span>&gt;</span>
          <span className="text-brand-orange-deep">
            Submit Business Requirement
          </span>
        </nav>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange-tint text-brand-orange-deep text-xs font-bold uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured Intake Gateway</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-maroon tracking-tight">
            Submit Your{" "}
            <span className="text-brand-orange">Business Requirement</span>
          </h1>
          <p className="text-sm sm:text-base text-brand-text-secondary mt-2">
            Share your enterprise details and requirements. Our specialist team
            will audit your needs and connect you with matching external
            programs and opportunities.
          </p>
        </div>

        {/* Important Facilitation Disclaimer Banner */}
        <div className="bg-brand-orange-tint border-2 border-brand-orange-200 rounded-2xl p-5 mb-8 flex items-start gap-4 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-brand-orange/20 text-brand-orange-deep flex items-center justify-center flex-shrink-0 mt-0.5">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-brand-maroon">
              Important Facilitator Notice
            </h2>
            <p className="text-xs sm:text-[13px] text-brand-text-primary leading-relaxed mt-1">
              Surya Business Development Centre Pvt. Ltd. (SBDC) operates solely
              as a <strong>facilitator and connector</strong>. SBDC does not
              distribute direct loans, microcredit, or grants. All external
              funding and program approvals remain under the independent
              discretion of external institutions.
            </p>
          </div>
        </div>

        {/* Success View */}
        {submitted ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-xl text-center space-y-6 animate-fadeIn">
            <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                Submission Successful
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-maroon">
                Requirement Received
              </h2>
              <div className="inline-block bg-brand-orange-tint border border-brand-orange-200 text-brand-orange-deep font-mono font-bold text-sm px-4 py-1.5 rounded-lg mt-2">
                Reference ID: {refId}
              </div>
            </div>

            <p className="text-sm text-brand-text-secondary max-w-lg mx-auto leading-relaxed">
              Thank you, <strong>{formData.fullName}</strong>. Our enterprise
              advisory team has received your submission for{" "}
              <strong>{formData.businessName || "your business"}</strong>.
            </p>

            <div className="bg-brand-warm-white rounded-2xl p-5 border border-brand-border text-left max-w-lg mx-auto space-y-3">
              <h4 className="text-xs font-bold text-brand-maroon uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-brand-orange" />
                What happens next?
              </h4>
              <ol className="text-xs text-brand-text-secondary space-y-2 list-decimal list-inside leading-relaxed">
                <li>
                  Initial triage &amp; eligibility audit (1–2 business days).
                </li>
                <li>
                  An SBDC case advisor will reach out to you via phone/email.
                </li>
                <li>
                  Matching with current calls for funding, training, or partner
                  programs.
                </li>
              </ol>
            </div>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="bg-brand-orange hover:bg-brand-orange-deep text-white font-bold text-sm px-6 py-3 rounded-xl shadow transition-colors"
              >
                Return to Home
              </Link>
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow transition-colors flex items-center gap-2"
              >
                Follow Up on WhatsApp
              </a>
            </div>
          </div>
        ) : (
          /* Intake Form */
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-brand-border shadow-lg space-y-8"
          >
            {/* Section 1: Contact & Founder Profile */}
            <div>
              <h2 className="text-lg font-bold text-brand-maroon border-b border-brand-border pb-2 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-orange text-white text-xs font-bold flex items-center justify-center">
                  1
                </span>
                Applicant &amp; Contact Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-brand-maroon mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="e.g. Ramesh Karki"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-maroon mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="e.g. ramesh@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-maroon mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="e.g. +977 98XXXXXXXX"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Enterprise Information */}
            <div>
              <h2 className="text-lg font-bold text-brand-maroon border-b border-brand-border pb-2 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-orange text-white text-xs font-bold flex items-center justify-center">
                  2
                </span>
                Enterprise Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-bold text-brand-maroon mb-1.5">
                    Business / Enterprise Name
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) =>
                      setFormData({ ...formData, businessName: e.target.value })
                    }
                    placeholder="e.g. Annapurna Agro Farm"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-maroon mb-1.5">
                    Registration Status
                  </label>
                  <select
                    value={formData.registrationStatus}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        registrationStatus: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange/40"
                  >
                    <option value="Registered (Pvt Ltd / Proprietorship)">
                      Registered (Pvt Ltd / Firm)
                    </option>
                    <option value="Cooperative / Group">
                      Cooperative / Group
                    </option>
                    <option value="Unregistered / Early Idea">
                      Unregistered / Early Idea
                    </option>
                    <option value="In Progress of Registration">
                      In Progress of Registration
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-maroon mb-1.5">
                    District / Location
                  </label>
                  <input
                    type="text"
                    value={formData.district}
                    onChange={(e) =>
                      setFormData({ ...formData, district: e.target.value })
                    }
                    placeholder="e.g. Birgunj (Parsa), Kathmandu, Morang"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-maroon mb-1.5">
                    Industry Sector
                  </label>
                  <select
                    value={formData.sector}
                    onChange={(e) =>
                      setFormData({ ...formData, sector: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange/40"
                  >
                    <option value="Agriculture & Agro-Processing">
                      Agriculture &amp; Agro-Processing
                    </option>
                    <option value="Handicrafts & Artisanal">
                      Handicrafts &amp; Artisanal
                    </option>
                    <option value="Tourism & Hospitality">
                      Tourism &amp; Hospitality
                    </option>
                    <option value="IT & Digital Services">
                      IT &amp; Digital Services
                    </option>
                    <option value="Manufacturing & Production">
                      Manufacturing &amp; Production
                    </option>
                    <option value="Retail & Trade">Retail &amp; Trade</option>
                    <option value="Renewable Energy">Renewable Energy</option>
                    <option value="Other Services">Other Services</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-maroon mb-1.5">
                  Current Enterprise Stage
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    "Ideation / Pre-launch",
                    "Early Stage (< 1 year)",
                    "Established SME (1–5 yrs)",
                    "Scaling (> 5 yrs)",
                  ].map((stg) => (
                    <button
                      key={stg}
                      type="button"
                      onClick={() => setFormData({ ...formData, stage: stg })}
                      className={`text-xs font-semibold py-2 px-3 rounded-lg border text-center transition-all ${
                        formData.stage === stg
                          ? "bg-brand-orange text-white border-brand-orange shadow-xs"
                          : "bg-white text-brand-text-secondary border-brand-border hover:bg-brand-light-gray"
                      }`}
                    >
                      {stg}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 3: Support Needed */}
            <div>
              <h2 className="text-lg font-bold text-brand-maroon border-b border-brand-border pb-2 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-orange text-white text-xs font-bold flex items-center justify-center">
                  3
                </span>
                Support Needed (Select all that apply) *
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
                {[
                  "Funding Facilitation",
                  "Training & Capacity Building",
                  "Business Development Support",
                  "Entrepreneurship Mentorship",
                  "Institutional Facilitation",
                  "Marketplace & Buyer Linkages",
                  "Technical Quality & Packaging",
                  "Company Registration & PAN Guidance",
                ].map((type) => {
                  const checked = formData.supportTypes.includes(type);
                  return (
                    <div
                      key={type}
                      onClick={() => handleSupportToggle(type)}
                      className={`p-3 rounded-xl border cursor-pointer flex items-center gap-2.5 transition-all select-none ${
                        checked
                          ? "bg-brand-orange-tint border-brand-orange text-brand-maroon font-bold"
                          : "bg-white border-brand-border text-brand-text-secondary hover:bg-brand-light-gray"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded border flex items-center justify-center text-white text-[10px] ${
                          checked
                            ? "bg-brand-orange border-brand-orange"
                            : "border-neutral-300"
                        }`}
                      >
                        {checked && "✓"}
                      </div>
                      <span className="text-xs">{type}</span>
                    </div>
                  );
                })}
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-maroon mb-1.5">
                  Describe Your Business &amp; Specific Need in Detail *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.summary}
                  onChange={(e) =>
                    setFormData({ ...formData, summary: e.target.value })
                  }
                  placeholder="Explain what your business does, your key growth bottlenecks, what type of machinery, training, or partner connection you are looking for..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40"
                />
              </div>
            </div>

            {/* Section 4: Consent & Disclaimers */}
            <div className="pt-2 border-t border-brand-border space-y-4">
              <h2 className="text-sm font-bold text-brand-maroon uppercase tracking-wider">
                Mandatory Declarations &amp; Consent
              </h2>

              <label className="flex items-start gap-3 p-3.5 rounded-xl bg-brand-warm-white border border-brand-border cursor-pointer select-none">
                <input
                  type="checkbox"
                  required
                  checked={formData.consentDisclaimer}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      consentDisclaimer: e.target.checked,
                    })
                  }
                  className="mt-1 w-4 h-4 text-brand-orange rounded border-brand-border focus:ring-brand-orange"
                />
                <span className="text-xs text-brand-text-secondary leading-relaxed">
                  <strong className="text-brand-maroon font-bold">
                    Facilitation Role Acknowledgment:{" "}
                  </strong>
                  I acknowledge and understand that Surya Business Development
                  Centre Pvt. Ltd. (SBDC) is a facilitation entity and NOT a
                  direct lender or grant provider. SBDC does not guarantee
                  external funding approval.
                </span>
              </label>

              <label className="flex items-start gap-3 p-3.5 rounded-xl bg-brand-warm-white border border-brand-border cursor-pointer select-none">
                <input
                  type="checkbox"
                  required
                  checked={formData.consentData}
                  onChange={(e) =>
                    setFormData({ ...formData, consentData: e.target.checked })
                  }
                  className="mt-1 w-4 h-4 text-brand-orange rounded border-brand-border focus:ring-brand-orange"
                />
                <span className="text-xs text-brand-text-secondary leading-relaxed">
                  <strong className="text-brand-maroon font-bold">
                    Privacy &amp; Processing Consent:{" "}
                  </strong>
                  I authorize SBDC to review and process the submitted details
                  for identifying appropriate external opportunities and
                  contacting me regarding my requirement.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto justify-center bg-brand-orange hover:bg-brand-orange-deep text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <span>Processing Submission...</span>
                ) : (
                  <>
                    <span>Submit Business Requirement</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
