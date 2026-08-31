# Surya Business Development Centre (SBDC) Web Portal

> **Empowering Business. Building Futures.**  
> Official corporate portal, impact platform, and structured business-support inquiry gateway for **Surya Business Development Centre Pvt. Ltd.** based in **Birgunj, Parsa, Nepal**.

---

## 🌟 1. Overview & Operating Model

**Surya Business Development Centre Pvt. Ltd. (SBDC)** operates as an independent business facilitation, capacity-building, and mediation organization. SBDC acts as a vital bridge connecting aspiring entrepreneurs, startups, and established Small & Medium Enterprises (SMEs) across Nepal with external funding programs, development agencies, government schemes, and market linkages.

### Core Operating Principle
> [!IMPORTANT]
> **Facilitation & Mediation Role:**  
> SBDC is **not** a direct lender, investor, or grant provider. SBDC evaluates enterprise requirements, audits business viability, prepares dossiers, and connects applicants with relevant external institutions (such as NGOs, INGOs, government agencies, development banks, and training centers). All funding decisions and program approvals remain under the independent discretion of external institutions.

---

## 🎨 2. Brand Design System & Color Palette

The user interface follows the **60-30-10 Design Rule** with custom tokens defined in `@theme` via `@tailwindcss/postcss`:

| Color Token | HEX | RGB | Application |
| :--- | :--- | :--- | :--- |
| **Brand Orange** | `#F36A21` | `RGB(243, 106, 33)` | Primary CTAs, active indicators, step badges, highlights |
| **Deep Orange** | `#D95516` | `RGB(217, 85, 22)` | Hover states, active buttons, gradient accents |
| **Deep Maroon** | `#3B1113` | `RGB(59, 17, 19)` | Primary headings, authority sections, Stats Bar, and Footer |
| **Maroon Light** | `#8A3A3A` | `RGB(138, 58, 58)` | Section dividers, secondary accents |
| **Warm White** | `#FFFDFC` | `RGB(255, 253, 252)` | Main website background |
| **White** | `#FFFFFF` | `RGB(255, 255, 255)` | Elevated cards, content containers |
| **Light Gray** | `#F3F4F6` | `RGB(243, 244, 246)` | Alternate section strips |
| **Border Gray** | `#E5E7EB` | `RGB(229, 231, 235)` | Borders, dividers, form fields |
| **Primary Text** | `#252525` | `RGB(37, 37, 37)` | Main body text and important content |
| **Secondary Text** | `#5F6368` | `RGB(95, 99, 104)` | Descriptions and supporting copy |
| **Orange Tint** | `#FFF1E8` | `RGB(255, 241, 232)` | Highlighted areas, badge containers |
| **Success** | `#16803C` | `RGB(22, 128, 60)` | Success states and confirmation messages |

---

## 🚀 3. Key Features & Page Ecosystem

### 🏠 **Home (`/`)**
* **Hero Section**: Headline *"Empowering Businesses. Building Futures."*, dual CTAs, facilitation badges, and high-res imagery.
* **What We Do**: 5 core service cards with hover animations.
* **4-Step Process**: `01 Tell Us Your Need` $\rightarrow$ `02 We Understand Your Business` $\rightarrow$ `03 We Identify Opportunities` $\rightarrow$ `04 We Connect You` + Disclaimer notice.
* **Featured Projects**: Highlights from Women Entrepreneurship, SME Capacity Building, Youth Training, and Market Access.
* **Impact Stats Bar**: Deep Maroon band with 5 verified metrics (500+ Entrepreneurs Reached, 25+ Training Programs, 150+ Businesses Supported, 30+ Institutional Partnerships, 10+ Development Initiatives).
* **Success Stories Slider**: Interactive quote cards from supported founders (e.g., Green Pleasure Foods).
* **Moments That Inspire Us**: Photo tiles with lightbox preview.
* **Ecosystem Partners**: USAID, World Vision, SNV, Save The Children, CARE, UNDP.
* **Bottom Call-to-Action**: Sunburst banner for direct requirement intake.

### 🏢 **About Us (`/about`)**
* Corporate Headquarters showcase in **Birgunj, Parsa, Nepal**.
* Mission, Vision, and Core Values (Integrity, Empathy, Transparency, Collaboration, Commitment).
* **Leadership & Team**:
  * **Minakshi Nanda** – *Executive Director & Leadership*
  * **Atul Raut** – *Director – Business Development & Strategy*
  * **Rohit Srivastava** – *Director – Operations & Digital Innovation*

### 🛠️ **What We Do / Services (`/services`)**
* Detailed breakdown of 6 service pillars:
  1. Funding Facilitation
  2. Training & Capacity Building
  3. Business Development Support
  4. Entrepreneurship Support
  5. Institutional Facilitation
  6. Marketplace & Network Connections
* Types of Programs & Opportunities (Government Schemes, Funding Calls, Technical Assistance, Incubation & Mentorship).

### 📝 **Submit Business Requirement (`/submit-requirement`)**
* Structured intake gateway for aspiring entrepreneurs and established SMEs.
* Captures applicant details, enterprise registration status, district/location, industry sector, current stage, and required support areas.
* Mandatory facilitation role acknowledgment and data privacy consent.
* Generates an instant **Reference ID** (e.g., `SBDC-2026-XXXXXX`) with a next-steps timeline.

### 📁 **Additional Pages**
* **Projects & Initiatives (`/projects`)**: Filterable catalog by category (*Women Empowerment, Capacity Building, Youth Innovation, Market Linkage*).
* **Activities & Events (`/activities`)**: Workshop & seminar calendar with participant counts and outcomes.
* **Impact & Stories (`/impact`)**: Verified metrics and methodology notes.
* **Photo Gallery (`/gallery`)**: Filterable photo albums with modal Lightbox.
* **Contact Us (`/contact`)**: Office details, interactive message form, and WhatsApp direct link.
* **Legal Disclaimers**: [Facilitation Disclaimer](/disclaimer), [Privacy Policy](/privacy-policy), [Terms of Use](/terms-of-service).
* **Floating WhatsApp Widget**: Persistent bottom-right quick chat CTA with pre-filled message.

---

## 💻 4. Technology Stack

* **Framework**: Next.js (App Router, Turbopack, React 19)
* **Language**: TypeScript
* **Styling**: Tailwind CSS (v4) with `@tailwindcss/postcss`
* **Icons**: Lucide React + custom SVG icons
* **Font**: Google Font `Plus Jakarta Sans` via `next/font/google`
* **Package Manager / Runtime**: Bun / npm

---

## 🛠️ 5. Getting Started & Development

### Prerequisites
* Node.js v20+ or Bun v1.0+

### Installation
```bash
# Clone repository
git clone <repository-url>
cd sbdc-portal

# Install dependencies
bun install
# or
npm install
```

### Running Locally
```bash
# Start Next.js development server
bun run dev
# or
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to view the portal.

### Production Build & Verification
```bash
# Build production bundle & verify routes
bun run build
# or
npm run build

# Start production server
bun run start
```

### Exposing via ngrok (for Mobile / Remote Testing)
When exposing your Next.js development server through ngrok, use the `--host-header=rewrite` flag so Next.js handles script hydration and WebSocket HMR cleanly:
```bash
ngrok http --host-header=rewrite 3000
```

---

## 📂 6. Directory Structure

```
sbdc-portal/
├── app/
│   ├── layout.tsx              # Root layout (Plus Jakarta Sans, Navbar, Footer, WhatsApp)
│   ├── globals.css             # Tailwind v4 theme tokens & color variables
│   ├── page.tsx                # Home page
│   ├── about/page.tsx          # About SBDC & Leadership Team
│   ├── services/page.tsx       # 6 Service Pillars & Opportunity Types
│   ├── submit-requirement/     # Structured Business Intake Form
│   ├── projects/page.tsx       # Filterable Project Case Studies
│   ├── activities/page.tsx     # Workshops & Events Calendar
│   ├── impact/page.tsx         # Verified Metrics & Success Stories
│   ├── gallery/page.tsx        # Photo Gallery with Lightbox
│   ├── contact/page.tsx        # Contact info & Inquiry Form
│   ├── disclaimer/page.tsx     # Facilitation & Financial Disclaimer
│   ├── privacy-policy/page.tsx # Privacy Policy
│   └── terms-of-service/       # Terms of Use
├── components/
│   ├── layout/                 # Navbar, Footer, FloatingWhatsApp
│   ├── ui/                     # Logo, Buttons, Badges, Modals
│   └── home/                   # Hero, WhatWeDo, HowItWorks, FeaturedProjects, StatsBar, etc.
├── lib/
│   ├── constants.ts            # Brand constants, address (Birgunj, Parsa), navigation links
│   └── data.ts                 # Services, Team (Minakshi, Atul, Rohit), Projects, Testimonials
├── next.config.ts              # Next.js configuration & allowedDevOrigins
├── postcss.config.mjs          # PostCSS config with @tailwindcss/postcss
├── tsconfig.json
└── package.json
```

---

## 📄 7. License & Copyright

&copy; 2026 **Surya Business Development Centre Pvt. Ltd.** All Rights Reserved.  
Headquarters: Birgunj, Parsa, Nepal.
