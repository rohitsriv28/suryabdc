# Changelog

All notable changes to the **Surya Business Development Center (SBDC) Web Portal** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.2] - 2026-09-13

### 🔄 Changed
* **Canonical Hostname Harmonization**:
  * Harmonized canonical production hostname to `https://www.suryabdc.com.np` across `SITE_METADATA` (`lib/data.ts`), aligning canonical tags, Open Graph URLs, XML sitemap URLs (`/sitemap.xml`), and `robots.txt` directly with Vercel's primary domain configuration.
  * Preserved apex domain redirect (`https://suryabdc.com.np` → 308 → `https://www.suryabdc.com.np`) without canonical/redirect mismatch for search engine indexation.

---

## [1.1.1] - 2026-09-13

### 🌟 Added
* **Production SEO & Indexing Architecture Overhaul**:
  * **Dynamic Sitemap Generator (`app/sitemap.ts`)**: Generates an automated, valid XML sitemap at `https://suryabdc.com.np/sitemap.xml` referencing all 12 verified public routes with weekly/monthly update frequencies and priorities.
  * **Search Engine Crawl Directives (`app/robots.ts`)**: Generates `https://suryabdc.com.np/robots.txt` allowing all search engines (`User-Agent: * Allow: /`) and pointing directly to the canonical sitemap.
  * **Centralized Metadata Source of Truth (`lib/data.ts`)**: Added `SITE_METADATA` and `PAGE_METADATA` configurations to eliminate hardcoded duplicate meta tags and synchronize page metadata with the sitemap.
  * **Canonical URL & Indexing Strategy**: Configured `metadataBase: new URL("https://suryabdc.com.np")`, explicit canonical `<link>` tags, and Googlebot directives across RootLayout and all pages.
  * **Dedicated Route Layouts for Client Components**: Added server layout wrappers for `/contact`, `/projects`, `/gallery`, and `/submit-requirement` to provide full server-rendered SEO titles, descriptions, and canonical links for `"use client"` pages.
* **Vercel Web Analytics**:
  * Integrated `@vercel/analytics` (`<Analytics />` from `@vercel/analytics/next`) in RootLayout for real-time privacy-friendly traffic and pageview telemetry.

### 🔄 Changed
* Standardized project package name to `"surya_bdc"` in `package.json`.
* Refactored all page routes (`about`, `services`, `activities`, `impact`, `disclaimer`, `privacy-policy`, `terms-of-service`) to consume centralized `PAGE_METADATA`.
* Updated `README.md` repository tree and architecture guide with the new SEO files.

---

## [1.1.0] - 2026-09-12

### 🌟 Added
* **Official Corporate Branding Assets**:
  * Corporate header banner (`/public/logos/SuryaBDC-banner.png`) embedded in `README.md` and branding documentation.
  * Vector-accurate brand logo (`/public/logos/SuryaBDC-logo.png`) and updated favicon (`/public/favicon.png`).
* **Verified Corporate Profile Integration**:
  * Standardized legal identity to **Surya Business Development Center Pvt. Ltd.** (Estd. 2083 B.S., Birgunj, Parsa, Madhesh Province, Nepal).
  * 5 Core Service Pillars: *Business Support & Advisory*, *Training & Capacity Building*, *Market Linkage & Networking*, *Access to Finance & Facilitation*, and *Technology & Digital Enablement*.
  * 9 Specialized Service Areas covering Incubation, Investment Readiness, Digital Transformation, and Compliance.
  * Official **6-Stage Operational Methodology**: `Understand` $\rightarrow$ `Assess` $\rightarrow$ `Plan` $\rightarrow$ `Implement` $\rightarrow$ `Document` $\rightarrow$ `Improve`.
  * Verified institutional partners: **Helvetas Nepal** and **NADA Automobiles Association of Nepal (Madhesh Pradesh)**.
* **Verified Leadership Team Profiles & Photography**:
  * High-resolution leadership portraits (`atul-raut.png`, `minakshi-nanda.png`, `rohit-srivastava.png`) in `/public/images/`.
  * Updated designations:
    * **Atul Raut** – Founder & Director
    * **Minakshi Nanda** – Head of Operations & Business Development
    * **Rohit Srivastava** – CTO – Head of Technology and Digital Operations
* **Changelog**: Initialized `CHANGELOG.md` adhering to Keep a Changelog standards.

### 🔄 Changed
* **Navigation Architecture**:
  * Refactored **"What We Do"** in the top navigation bar from a nested dropdown to a direct, frictionless link pointing directly to `/services`.
* **Iconography Overhaul**:
  * Installed `react-icons` and replaced generic SVG icons with official brand icons (`FaWhatsapp` from `react-icons/fa6`) across the Navbar, Footer, Contact Page, and Floating WhatsApp widget.
  * Standardized UI icons throughout all components to `lucide-react`.
* **Data Layer Synchronization**:
  * Updated `lib/constants.ts` and `lib/data.ts` to replace placeholder content with authentic corporate profile data.
  * Updated Next.js root layout metadata, page titles, and OpenGraph tags to reflect official corporate naming.
* **Documentation**:
  * Comprehensive rewrite of `README.md` with header banner, design system tokens, updated leadership structure, and verification instructions.

---

## [1.0.0] - 2026-08-31

### 🚀 Initial Release
* **Modern Web Platform**:
  * Built on Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS v4.
  * Fully responsive layout with mobile drawer navigation and sticky header.
* **Brand Design System**:
  * 60-30-10 color scheme implementing Brand Orange (`#F36A21`), Deep Orange (`#D95516`), Deep Maroon (`#3B1113`), and Warm White (`#FFFDFC`).
  * Typography powered by Google Font `Plus Jakarta Sans`.
* **Core Page Ecosystem**:
  * **Home (`/`)**: Hero section, service highlights, process overview, verified impact counter, and founder testimonials.
  * **About Us (`/about`)**: Corporate mission, vision, values, and leadership bios.
  * **What We Do (`/services`)**: Comprehensive overview of services, target beneficiaries, and program types.
  * **Submit Requirement (`/submit-requirement`)**: Multi-step business intake wizard with dynamic reference ID generation (`SBDC-2026-XXXXXX`).
  * **Projects (`/projects`)**: Filterable project case studies.
  * **Activities (`/activities`)**: Workshop and event archive.
  * **Impact (`/impact`)**: Impact statistics and success metrics.
  * **Gallery (`/gallery`)**: Photo gallery with modal lightbox preview.
  * **Contact (`/contact`)**: Headquarters contact information, interactive inquiry form, and WhatsApp link.
  * **Governance & Legal**: Disclaimer, Privacy Policy, and Terms of Service.
* **Interactive Features**:
  * Floating quick-connect WhatsApp widget with pre-configured inquiry text.
  * Client-side form validation with accessible error states and confirmation modals.
