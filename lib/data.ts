export interface PageMetadataConfig {
  title: string;
  description: string;
  canonical: string;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}

export const SITE_METADATA = {
  baseUrl: "https://www.suryabdc.com.np",
  siteName: "Surya Business Development Center",
  defaultTitle:
    "Surya Business Development Center (SBDC) | Empowering Businesses. Building Futures.",
  titleTemplate: "%s | Surya Business Development Center (SBDC)",
  defaultDescription:
    "Official corporate portal of Surya Business Development Center Pvt. Ltd. (SBDC). Supporting entrepreneurs, enterprises, institutions, and development organizations through practical business solutions, research, training, and enterprise development.",
  ogImage: "/logos/SuryaBDC-banner.png",
};

export const PAGE_METADATA: Record<string, PageMetadataConfig> = {
  home: {
    title:
      "Surya Business Development Center (SBDC) | Empowering Businesses. Building Futures.",
    description:
      "Official corporate portal of Surya Business Development Center Pvt. Ltd. (SBDC). Supporting entrepreneurs, enterprises, institutions, and development organizations through practical business solutions, research, training, and enterprise development.",
    canonical: "/",
    changeFrequency: "weekly",
    priority: 1.0,
  },
  about: {
    title: "About Us",
    description:
      "Learn about SBDC's mission, vision, 6-stage approach, Why SBDC pillars, and leadership team facilitating business growth across Nepal.",
    canonical: "/about",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  services: {
    title: "What We Do & Services",
    description:
      "Explore SBDC's 5 core pillars: Business Support & Advisory, Training & Capacity Building, Market Linkage, Access to Finance, and Technology Enablement.",
    canonical: "/services",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  submitRequirement: {
    title: "Submit Business Requirement",
    description:
      "Submit your enterprise support, capacity building, or business facilitation requirement to Surya Business Development Center (SBDC).",
    canonical: "/submit-requirement",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  projects: {
    title: "Projects & Case Studies",
    description:
      "Explore case studies, grassroots initiatives, and enterprise development projects facilitated by Surya Business Development Center across Nepal.",
    canonical: "/projects",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  activities: {
    title: "Activities & Events",
    description:
      "Explore our recent workshops, training seminars, networking forums, and enterprise development activities across Nepal.",
    canonical: "/activities",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  impact: {
    title: "Impact & Stories",
    description:
      "Discover the measurable outcomes, beneficiary stories, and enterprise impact facilitated by SBDC across Nepal.",
    canonical: "/impact",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  gallery: {
    title: "Photo Gallery",
    description:
      "Visual archive and moments from Surya Business Development Center workshops, enterprise training sessions, institutional forums, and fieldwork.",
    canonical: "/gallery",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  contact: {
    title: "Contact Us",
    description:
      "Get in touch with Surya Business Development Center Pvt. Ltd. (SBDC) in Birgunj, Parsa, Nepal. Send inquiries, connect via WhatsApp, or visit our office.",
    canonical: "/contact",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  disclaimer: {
    title: "Facilitation & Financial Disclaimer",
    description:
      "Official legal and operating disclaimer regarding SBDC's role as an independent business facilitator, advisory firm, and capacity builder.",
    canonical: "/disclaimer",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  privacyPolicy: {
    title: "Privacy Policy",
    description:
      "Official Privacy Policy and data governance principles for Surya Business Development Center Pvt. Ltd.",
    canonical: "/privacy-policy",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  termsOfService: {
    title: "Terms of Use",
    description:
      "Terms and conditions of website use for Surya Business Development Center Pvt. Ltd.",
    canonical: "/terms-of-service",
    changeFrequency: "yearly",
    priority: 0.3,
  },
};

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  iconName: string;
  badge?: string;
  benefits: string[];
  targetAudience: string[];
  howWeHelp: string[];
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  location: string;
  year: string;
  category: string;
  beneficiariesCount: string;
  partner: string;
  image: string;
  status: "Active" | "Completed" | "Ongoing";
  outcomes: string[];
}

export interface ActivityItem {
  id: string;
  title: string;
  date: string;
  location: string;
  type: "Workshop" | "Training" | "Seminar" | "Networking" | "Field Visit";
  participants: number;
  description: string;
  image: string;
  keyOutcomes: string[];
}

export interface StatItem {
  value: string;
  label: string;
  icon: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  organization: string;
  avatar: string;
  program: string;
}

export interface TeamMemberItem {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  expertise: string[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: "Training" | "Field Work" | "Partnership" | "Events";
  date: string;
  location: string;
  imageUrl: string;
  caption: string;
}

export const IMPACT_STATS: StatItem[] = [
  { value: "100+", label: "Entrepreneurs Reached", icon: "Users" },
  { value: "8+", label: "Training Programs Conducted", icon: "GraduationCap" },
  { value: "10+", label: "Businesses Supported", icon: "Briefcase" },
  { value: "7+", label: "Institutional Partnerships", icon: "Handshake" },
  { value: "5+", label: "Development Initiatives", icon: "TrendingUp" },
];

export const SERVICE_AREAS: string[] = [
  "Business Development",
  "Research & Surveys",
  "Enterprise Development",
  "Entrepreneurship",
  "Training & Capacity Building",
  "Feasibility Studies",
  "Business Plans",
  "Project Support",
  "Business Networking",
];

export const SERVICES: ServiceItem[] = [
  {
    id: "business-development-consulting",
    title: "Business Development & Consulting",
    shortDesc:
      "Business strategy and advisory, business planning, enterprise development, growth support and opportunity identification.",
    description:
      "SBDC provides dedicated advisory and strategic consulting to help emerging startups and established enterprises navigate complex markets, scale sustainably, and unlock new operational opportunities.",
    iconName: "TrendingUp",
    benefits: [
      "Strategic roadmap formulation & market opportunity mapping",
      "Enterprise development and operational re-engineering",
      "Sound business planning & ongoing growth advisory",
    ],
    targetAudience: [
      "Emerging & growth-stage enterprises",
      "Family businesses formalizing operations",
      "Institutions & development bodies",
    ],
    howWeHelp: [
      "Conduct in-depth business diagnostic assessments",
      "Formulate tailored, practical growth strategies",
      "Support continuous implementation and advisory check-ins",
    ],
  },
  {
    id: "research-surveys",
    title: "Research & Surveys",
    shortDesc:
      "Market and enterprise surveys, field data collection, business research, respondent interviews, documentation and reporting.",
    description:
      "Equipped with deep ground-level reach across Birgunj and Madhesh Province, our specialist field research team executes rigorous baseline, midline, and market surveys with high data integrity.",
    iconName: "Search",
    benefits: [
      "Accurate ground-level market intelligence and sector insights",
      "Rigorous qualitative and quantitative field data collection",
      "Actionable reporting, documentation, and stakeholder analysis",
    ],
    targetAudience: [
      "Development agencies & INGOs/NGOs",
      "Industry associations & chambers of commerce",
      "Commercial enterprises planning market entry",
    ],
    howWeHelp: [
      "Survey design, questionnaire drafting & sample framing",
      "Trained local enumerators for direct respondent interviews",
      "Comprehensive data synthesis, analysis, and formal reporting",
    ],
  },
  {
    id: "entrepreneurship-training",
    title: "Entrepreneurship & Training",
    shortDesc:
      "Entrepreneurship development, startup orientation, skills development, capacity building and Training of Trainers (ToT).",
    description:
      "Empowering founders, aspiring youth, and organizational teams through practical masterclasses, startup bootcamps, and structured capacity-building curriculums.",
    iconName: "GraduationCap",
    benefits: [
      "Certified Training of Trainers (ToT) masterclasses",
      "Practical startup orientation & venture launch frameworks",
      "Targeted capacity building for entrepreneurs & professionals",
    ],
    targetAudience: [
      "First-time entrepreneurs and youth innovators",
      "Community leaders, field facilitators & trainers",
      "Micro and small enterprise owners",
    ],
    howWeHelp: [
      "Structured entrepreneurship bootcamps & modular workshops",
      "Customized curriculum design adapted to local business context",
      "Post-training mentorship and implementation support",
    ],
  },
  {
    id: "business-planning-project-support",
    title: "Business Planning & Project Support",
    shortDesc:
      "Feasibility studies, business plans, project reports, market assessment and project documentation.",
    description:
      "We prepare bankable business plans, detailed project reports (DPR), and commercial feasibility assessments that satisfy institutional criteria and support execution.",
    iconName: "FileCheck",
    benefits: [
      "Thorough financial feasibility and viability assessments",
      "Investor-grade and bank-ready business plans",
      "Comprehensive project documentation and compliance dossiers",
    ],
    targetAudience: [
      "SMEs applying for institutional financing or grants",
      "Investors evaluating project viability in Madhesh",
      "Institutions requiring structured project proposals",
    ],
    howWeHelp: [
      "Technical, commercial, and financial viability appraisal",
      "Drafting detailed project reports and operational models",
      "Guidance on regulatory adherence and institutional submission",
    ],
  },
  {
    id: "events-business-networking",
    title: "Events & Business Networking",
    shortDesc:
      "Workshops, conferences, seminars, business meets, exhibitions, trade fairs, networking programs and event management.",
    description:
      "Bridging the gap between entrepreneurs, industry associations, policy stakeholders, and market buyers through high-impact networking events and commercial exhibitions.",
    iconName: "Users",
    benefits: [
      "Direct exposure to B2B buyers, distributors, and partners",
      "High-level conferences, industry roundtables, and seminars",
      "Professional turnkey event management and facilitation",
    ],
    targetAudience: [
      "Business associations and trade chambers",
      "Enterprises seeking new distribution channels",
      "Public-private development stakeholders",
    ],
    howWeHelp: [
      "Concept development, stakeholder mobilization & logistics",
      "Structured B2B buyer-seller matchmaking sessions",
      "Post-event outcomes tracking and partnership facilitation",
    ],
  },
];

export const PROCESS_STEPS: StepItem[] = [
  {
    step: "01",
    title: "UNDERSTAND",
    description: "Understand requirements and ground realities.",
    iconName: "Search",
  },
  {
    step: "02",
    title: "ASSESS",
    description:
      "Collect information and identify challenges and opportunities.",
    iconName: "ClipboardCheck",
  },
  {
    step: "03",
    title: "PLAN",
    description: "Develop practical and achievable solutions.",
    iconName: "FileText",
  },
  {
    step: "04",
    title: "IMPLEMENT",
    description: "Work with stakeholders to deliver agreed activities.",
    iconName: "Briefcase",
  },
  {
    step: "05",
    title: "DOCUMENT",
    description: "Maintain proper records and reporting.",
    iconName: "FileCheck",
  },
  {
    step: "06",
    title: "IMPROVE",
    description: "Learn from results and continuously improve.",
    iconName: "TrendingUp",
  },
];

export const WHY_SBDC = [
  {
    title: "Local Expertise",
    description:
      "Strong understanding of the Birgunj and Madhesh business environment.",
    iconName: "MapPin",
  },
  {
    title: "Professional Approach",
    description: "Structured, accountable and client-focused execution.",
    iconName: "ShieldCheck",
  },
  {
    title: "Field Experience",
    description:
      "Practical experience in surveys, research and enterprise-related activities.",
    iconName: "FolderCheck",
  },
  {
    title: "Business Focused",
    description: "Solutions designed around real business needs.",
    iconName: "Target",
  },
  {
    title: "Collaborative",
    description:
      "Close coordination with clients, stakeholders and project partners.",
    iconName: "Users",
  },
];

export const OUR_COMMITMENT =
  "We are committed to delivering reliable, practical and result-oriented services with professionalism, integrity and accountability.";

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "helvetas-nepal-enterprise-dev",
    title: "Business & Enterprise Development Initiative",
    description:
      "SBDC is currently working with Helvetas Nepal on business and enterprise development-related activities.",
    fullDescription:
      "An ongoing, structured collaboration focusing on local enterprise development, capacity building for regional entrepreneurs, and practical business advisory tailored to Madhesh Province ground realities.",
    location: "Madhesh Province, Nepal",
    year: "2024 - Present",
    category: "Enterprise Development",
    beneficiariesCount: "Regional Enterprises",
    partner: "Helvetas Nepal",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    status: "Active",
    outcomes: [
      "Structured enterprise development activities delivered",
      "Direct engagement with local entrepreneurs and business clusters",
      "Accountable field execution and milestone reporting",
    ],
  },
  {
    id: "nada-madhesh-survey",
    title: "NADA Madhesh Pradesh Survey & Field Research",
    description:
      "Completed survey-related work with practical exposure to field surveys, primary data collection, respondent interaction, and analytical reporting.",
    fullDescription:
      "A comprehensive field study covering enterprises and stakeholders across Madhesh Pradesh. The SBDC research team managed questionnaire administration, respondent mobilization, field interviews, and consolidated reporting.",
    location: "Birgunj & Madhesh Districts",
    year: "2024",
    category: "Research & Surveys",
    beneficiariesCount: "Survey Respondents & Enterprises",
    partner: "NADA Madhesh Pradesh",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    status: "Completed",
    outcomes: [
      "Full coverage of designated field respondent targets",
      "Rigorous primary data collection and ground verification",
      "Comprehensive analytical report and findings delivered to NADA",
    ],
  },
  {
    id: "women-entrepreneurship-dev",
    title: "Women Entrepreneurship Development & Mentoring",
    description:
      "Empowering women entrepreneurs with skills, startup orientation, financial literacy, and market linkages across Madhesh Province.",
    fullDescription:
      "A comprehensive initiative aimed at accelerating women-owned micro and small enterprises. Participants received dedicated mentoring in digital accounting, brand storytelling, and institutional readiness.",
    location: "Birgunj, Madhesh Province",
    year: "2024",
    category: "Entrepreneurship & Training",
    beneficiariesCount: "120+ Female Founders",
    partner: "Enterprise Alliance",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    status: "Completed",
    outcomes: [
      "Practical business plan drafting for participating founders",
      "Hands-on Training of Trainers (ToT) modules completed",
      "Structured peer-networking circles established",
    ],
  },
  {
    id: "sme-feasibility-business-planning",
    title: "SME Feasibility & Business Planning Support",
    description:
      "Assisting small and medium enterprises with feasibility studies, detailed project reports (DPR), and commercial planning.",
    fullDescription:
      "Working closely with agro-enterprises and local businesses to assess operational viability, prepare bank-ready documentation, and optimize business models.",
    location: "Parsa & Bara Districts",
    year: "2024",
    category: "Business Planning",
    beneficiariesCount: "45+ Local SMEs",
    partner: "Madhesh Industry Chamber",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    status: "Completed",
    outcomes: [
      "Feasibility assessments completed across commercial clusters",
      "Bank-aligned project documentation prepared for participants",
      "Operational workflow enhancements implemented",
    ],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    quote:
      "SBDC connected us with a training program and institutional support that completely transformed our business. Today, we are more confident, organized, and growing steadily.",
    name: "Anita Shrestha",
    role: "Founder",
    organization: "Green Pleasure Foods",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80",
    program: "Women Entrepreneurship Development",
  },
  {
    id: "2",
    quote:
      "As a first-time founder, navigating business registration, financial statements, and external opportunity calls was daunting. SBDC guided us step-by-step with tremendous empathy.",
    name: "Dipendra Thapa",
    role: "Co-Founder",
    organization: "Himalayan Agro Biotech",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    program: "SME Capacity Building",
  },
  {
    id: "3",
    quote:
      "The market linkages facilitated by SBDC opened doors to buyers in Kathmandu that we could never have reached on our own. Their commitment to enterprise growth is genuine.",
    name: "Bishnu Maya Gurung",
    role: "Managing Director",
    organization: "Pokhara Artisanal Weaves",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    program: "Market Access & Linkage",
  },
];

export const TEAM_MEMBERS: TeamMemberItem[] = [
  {
    id: "atul-raut",
    name: "Atul Raut",
    role: "Founder & Director",
    bio: "Leading enterprise advisory, strategic partnerships, market linkages, and institutional growth initiatives for emerging ventures and established enterprises across Nepal.",
    image: "/images/atul-raut.png",
    expertise: [
      "Strategic Leadership",
      "Business Advisory",
      "Enterprise Growth",
      "Market Linkages",
    ],
  },
  {
    id: "minakshi-nanda",
    name: "Minakshi Nanda",
    role: "Head of Operations & Business Development",
    bio: "Directing organizational operations, program execution, stakeholder engagement, and business development initiatives to deliver measurable enterprise impact.",
    image: "/images/minakshi-nanda.png",
    expertise: [
      "Operations Management",
      "Business Development",
      "Program Execution",
      "Institutional Relations",
    ],
  },
  {
    id: "rohit-srivastava",
    name: "Rohit Srivastava",
    role: "CTO – Head of Technology and Digital Operations",
    bio: "Architecting digital infrastructure, technology strategy, system design, and scalable workflow automation to drive seamless business and client operations.",
    image: "/images/rohit-srivastava.png",
    expertise: [
      "Technology Strategy",
      "Systems Architecture",
      "Digital Transformation",
      "Workflow Automation",
    ],
  },
];

export const PARTNER_LOGOS = [
  {
    name: "Helvetas Nepal",
    logoText: "HELVETAS",
    subtitle: "Enterprise Development Partner",
  },
  {
    name: "NADA Madhesh Pradesh",
    logoText: "NADA Madhesh",
    subtitle: "Survey & Research Client",
  },
  {
    name: "Business Associations",
    logoText: "Chambers",
    subtitle: "Madhesh Business Network",
  },
  {
    name: "Development Partners",
    logoText: "Dev Partners",
    subtitle: "Institutions & INGOs",
  },
  {
    name: "Financial Institutions",
    logoText: "BFIs",
    subtitle: "Enterprise Financing",
  },
  {
    name: "Enterprise Communities",
    logoText: "MSMEs",
    subtitle: "Regional Innovators",
  },
];

export const PROGRAM_TYPES = [
  {
    title: "Government Schemes",
    description:
      "Access to national and local government programs, subsidized enterprise credit facilities, and fiscal incentives.",
    image:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Funding Opportunities",
    description:
      "Grants, equity funds, and financial support from NGOs, INGOs, and bilateral development partners.",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Training Programs",
    description:
      "Skill development, business management, digital literacy, and technical capacity building for founders.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Technical Assistance",
    description:
      "Expert consulting support to improve production systems, quality standards, packaging, and digital tools.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Market Linkages",
    description:
      "Connecting local producers with commercial buyers, institutional supply contracts, and export pathways.",
    image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Incubation & Mentorship",
    description:
      "Structured incubation guidance, pitch refinement, and executive mentorship for early-stage innovators.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "g1",
    title: "Women Enterprise Bootcamp - Kathmandu",
    category: "Training",
    date: "August 2024",
    location: "Kathmandu",
    imageUrl:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    caption:
      "Participants engaging in financial modeling and digital marketing exercises during the 3-day cohort session.",
  },
  {
    id: "g2",
    title: "Stakeholder Alignment & Partner Consultation",
    category: "Partnership",
    date: "July 2024",
    location: "SBDC Head Office",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    caption:
      "Roundtable dialogue with regional development partners and cooperative leaders.",
  },
  {
    id: "g3",
    title: "SME Technical Field Assessment",
    category: "Field Work",
    date: "June 2024",
    location: "Pokhara, Gandaki",
    imageUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    caption:
      "On-site quality and machinery audit at an agro-processing facility.",
  },
  {
    id: "g4",
    title: "Youth Startup Pitch Day",
    category: "Events",
    date: "May 2024",
    location: "Biratnagar",
    imageUrl:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    caption:
      "Young innovators presenting sustainable business plans to an advisory evaluation panel.",
  },
  {
    id: "g5",
    title: "Agro-Enterprise Buyer-Seller Meet",
    category: "Events",
    date: "April 2024",
    location: "Butwal, Lumbini",
    imageUrl:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    caption:
      "Facilitating supply agreements between agricultural cooperatives and urban distributors.",
  },
  {
    id: "g6",
    title: "Regional Financial Literacy Workshop",
    category: "Training",
    date: "March 2024",
    location: "Chitwan",
    imageUrl:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    caption:
      "Hands-on instruction on banking documentation, tax filing, and cash flow tracking.",
  },
];

export const ACTIVITIES: ActivityItem[] = [
  {
    id: "act-1",
    title: "Masterclass on Access to Subsidized Enterprise Financing",
    date: "September 15, 2024",
    location: "Hotel Annapurna, Kathmandu",
    type: "Workshop",
    participants: 45,
    description:
      "An intensive briefing on government subsidized loan interest subsidies, required bank paperwork, and project feasibility criteria.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    keyOutcomes: [
      "Understanding credit rating and collateral alternatives",
      "Direct Q&A with commercial bank SME officers",
      "Interactive checklist distributed to all attendees",
    ],
  },
  {
    id: "act-2",
    title: "Digital Accounting & Tax Compliance Clinic",
    date: "August 20, 2024",
    location: "SBDC Training Hall, Birgunj, Parsa",
    type: "Training",
    participants: 30,
    description:
      "Practical digital bookkeeping training using accessible accounting software to help small business owners streamline VAT and PAN compliance.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    keyOutcomes: [
      "All 30 businesses setup standard chart of accounts",
      "Reduction in bookkeeping errors by over 50%",
      "Templates provided for monthly financial close",
    ],
  },
  {
    id: "act-3",
    title: "Women in Agri-Business Networking Forum",
    date: "July 12, 2024",
    location: "Pokhara Event Centre",
    type: "Networking",
    participants: 60,
    description:
      "Connecting female agricultural producers and food processors with institutional buyers, cold storage providers, and packaging suppliers.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    keyOutcomes: [
      "8 collaborative supply linkages formed",
      "Joint logistics pooling agreement piloted",
      "Creation of an ongoing peer WhatsApp advisory network",
    ],
  },
];
