"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-brand-warm-white min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-brand-text-muted mb-6">
          <Link href="/" className="hover:text-brand-orange transition-colors">
            Home
          </Link>
          <span>&gt;</span>
          <span className="text-brand-orange-deep">Contact Us</span>
        </nav>

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange-tint text-brand-orange-deep text-xs font-bold uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Communication Channels</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-maroon tracking-tight">
            Contact <span className="text-brand-orange">SBDC</span>
          </h1>
          <div className="w-20 h-1 bg-brand-orange rounded-full mt-3 mb-5" />
          <p className="text-lg text-brand-text-secondary leading-relaxed">
            Have a question about our facilitation services, potential
            institutional partnerships, or upcoming training programs? Reach out
            to us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-brand-border shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-brand-maroon border-b border-brand-border pb-3">
                Headquarters &amp; Office
              </h2>

              <ul className="space-y-4 text-sm text-brand-text-secondary">
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange-tint text-brand-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-brand-maroon font-bold text-xs uppercase tracking-wider">
                      Physical Address
                    </strong>
                    <span className="text-sm">{BRAND.address}</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange-tint text-brand-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-brand-maroon font-bold text-xs uppercase tracking-wider">
                      Phone
                    </strong>
                    <a
                      href={`tel:${BRAND.phone}`}
                      className="text-sm hover:text-brand-orange"
                    >
                      {BRAND.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange-tint text-brand-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-brand-maroon font-bold text-xs uppercase tracking-wider">
                      Email
                    </strong>
                    <a
                      href={`mailto:${BRAND.email}`}
                      className="text-sm hover:text-brand-orange"
                    >
                      {BRAND.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange-tint text-brand-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-brand-maroon font-bold text-xs uppercase tracking-wider">
                      Office Hours
                    </strong>
                    <span className="text-sm">{BRAND.officeHours}</span>
                  </div>
                </li>
              </ul>

              {/* Direct WhatsApp CTA Button */}
              <div className="pt-2">
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm py-3.5 px-4 rounded-xl flex items-center justify-center gap-2.5 shadow transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Chat Directly on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Facilitation Disclaimer Badge */}
            <div className="bg-brand-maroon text-white rounded-2xl p-5 border border-brand-maroon-light shadow-xs flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-orange-300 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-neutral-300 leading-relaxed">
                <strong className="text-white font-bold block mb-1">
                  Looking for funding or training support?
                </strong>
                For specific enterprise requirements, please use our structured{" "}
                <Link
                  href="/submit-requirement"
                  className="text-brand-orange-300 underline font-bold"
                >
                  Business Requirement Form
                </Link>{" "}
                to ensure priority triage.
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-border shadow-md">
              <h2 className="text-2xl font-bold text-brand-maroon mb-2">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-brand-text-secondary mb-6">
                Fill out the form below and an SBDC representative will get back
                to you within 24–48 business hours.
              </p>

              {submitted ? (
                <div className="bg-brand-warm-white rounded-2xl p-8 border border-brand-border text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-maroon">
                    Message Sent Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-text-secondary max-w-md mx-auto">
                    Thank you for reaching out, <strong>{formData.name}</strong>
                    . Our team has received your message and will respond
                    shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-brand-orange text-white text-xs font-bold px-5 py-2.5 rounded-xl mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-maroon mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Maya Shrestha"
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
                        placeholder="e.g. maya@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-maroon mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="e.g. +977 98XXXXXXXX"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-maroon mb-1.5">
                        Subject / Inquiry Type
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange/40"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Institutional Partnership">
                          Institutional Partnership
                        </option>
                        <option value="Training & Workshops">
                          Training &amp; Workshops
                        </option>
                        <option value="Media / PR Inquiry">
                          Media / PR Inquiry
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-maroon mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="How can SBDC assist you or your organization?"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40"
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="bg-brand-orange hover:bg-brand-orange-deep text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
