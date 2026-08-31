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
  { value: "500+", label: "Entrepreneurs Reached", icon: "Users" },
  { value: "25+", label: "Training Programs Conducted", icon: "GraduationCap" },
  { value: "150+", label: "Businesses Supported", icon: "Briefcase" },
  { value: "30+", label: "Institutional Partnerships", icon: "Handshake" },
  { value: "10+", label: "Development Initiatives", icon: "TrendingUp" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "funding-facilitation",
    title: "Funding Facilitation",
    shortDesc:
      "We help businesses identify and access relevant funding opportunities through appropriate institutions.",
    description:
      "SBDC acts as an advisory bridge between emerging enterprises and external funding agencies. We review business viability, prepare documentation standards, and guide entrepreneurs toward suitable development banks, grant programs, and impact investors.",
    iconName: "Coins",
    benefits: [
      "Access to verified institutional grants and government subsidized loans",
      "Assistance in investor-ready business proposals and financial models",
      "Complete transparency with zero hidden intermediary fees",
    ],
    targetAudience: [
      "Startups seeking seed funding",
      "Growth-stage SMEs",
      "Women-led rural enterprises",
    ],
    howWeHelp: [
      "Requirement diagnosis & financial readiness audit",
      "Matching with active partner funding calls",
      "Support with application dossiers and compliance",
    ],
  },
  {
    id: "training-capacity",
    title: "Training & Capacity Building",
    shortDesc:
      "We connect entrepreneurs with quality training and capacity-building programs to strengthen their skills.",
    description:
      "Equipping founders, managers, and operational teams with practical knowledge in financial management, digital transformation, modern sales strategies, and regulatory compliance.",
    iconName: "Presentation",
    benefits: [
      "Customized curricula designed with industry experts",
      "Hands-on workshop formats with real case studies",
      "Post-training mentorship and implementation follow-ups",
    ],
    targetAudience: [
      "New entrepreneurs",
      "Micro-enterprise owners",
      "Youth & student innovators",
    ],
    howWeHelp: [
      "Skills gap assessments for regional clusters",
      "Coordination of specialized masterclasses",
      "Certification and peer-learning cohorts",
    ],
  },
  {
    id: "business-development",
    title: "Business Development Support",
    shortDesc:
      "We assist businesses in identifying growth opportunities, improving operations, and achieving sustainable growth.",
    description:
      "From product positioning to supply chain optimization, SBDC delivers actionable business advisory to help companies scale steadily in competitive markets.",
    iconName: "TrendingUp",
    benefits: [
      "Strategic roadmap formulation",
      "Operational efficiency enhancement",
      "Cost structure and pricing optimization",
    ],
    targetAudience: [
      "Established SMEs aiming to expand",
      "Family-run enterprises formalizing operations",
    ],
    howWeHelp: [
      "One-on-one business advisory clinics",
      "Market feasibility studies",
      "Operational workflow re-engineering",
    ],
  },
  {
    id: "entrepreneurship-support",
    title: "Entrepreneurship Support",
    shortDesc:
      "We encourage and support aspiring entrepreneurs by guiding them toward the right resources, programs, and mentorship.",
    description:
      "Transforming early-stage concepts into viable, registered businesses through structured guidance, legal navigation, and early validation frameworks.",
    iconName: "Sparkles",
    benefits: [
      "Idea validation and prototype assessment",
      "Company registration and tax compliance guidance",
      "Mentorship from experienced domain leaders",
    ],
    targetAudience: [
      "First-time founders",
      "University graduates",
      "Returnee migrant entrepreneurs",
    ],
    howWeHelp: [
      "Pre-incubation roadmaps",
      "Mentorship pairing",
      "Resource toolkit access",
    ],
  },
  {
    id: "institutional-facilitation",
    title: "Institutional Facilitation",
    shortDesc:
      "We collaborate with institutions, government agencies, and organizations to connect businesses with relevant support systems.",
    description:
      "Facilitating multi-stakeholder partnerships between public development authorities, donor-funded projects, NGOs/INGOs, and the private business ecosystem.",
    iconName: "Building2",
    benefits: [
      "Direct linkage with regional development initiatives",
      "Policy advocacy and ecosystem representation",
      "Collaborative project execution",
    ],
    targetAudience: [
      "Sectoral business associations",
      "Chambers of commerce",
      "Development agencies",
    ],
    howWeHelp: [
      "Program coordination & beneficiary mobilization",
      "Field monitoring & impact reporting",
      "Public-private dialogue facilitation",
    ],
  },
  {
    id: "marketplace-network",
    title: "Marketplace & Network Connections",
    shortDesc:
      "We help businesses expand their network by connecting them with partners, markets, and ecosystem stakeholders.",
    description:
      "Connecting local producers, manufacturers, and service providers with B2B buyers, institutional procurement channels, and national market networks.",
    iconName: "Network",
    benefits: [
      "Expanded customer reach beyond local districts",
      "B2B buyer-seller matchmaking meets",
      "Supply chain integration",
    ],
    targetAudience: [
      "Agri-businesses",
      "Handicrafts & artisanal producers",
      "Local manufacturers",
    ],
    howWeHelp: [
      "Trade exhibitions and buyer meets",
      "E-commerce onboarding facilitation",
      "Value chain gap bridging",
    ],
  },
];

export const PROCESS_STEPS: StepItem[] = [
  {
    step: "01",
    title: "Tell Us Your Need",
    description:
      "Share your business requirements, current stage, and growth challenges through our online structured form or direct consultation.",
    iconName: "FileEdit",
  },
  {
    step: "02",
    title: "We Understand Your Business",
    description:
      "Our specialist team examines your requirements, audits feasibility, and clearly identifies your specific operational goals.",
    iconName: "UsersRound",
  },
  {
    step: "03",
    title: "We Identify Opportunities",
    description:
      "We research and pinpoint suitable external programs, donor calls, training initiatives, and institutional partners that match your profile.",
    iconName: "SearchCheck",
  },
  {
    step: "04",
    title: "We Connect You",
    description:
      "We facilitate introductions, assist in dossier alignment, and connect you with the relevant external institution or support program.",
    iconName: "Handshake",
  },
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "women-entrepreneurship-dev",
    title: "Women Entrepreneurship Development Program",
    description:
      "Empowering women entrepreneurs with skills, mentorship, financial literacy, and market linkages across urban and semi-urban clusters.",
    fullDescription:
      "A comprehensive 6-month initiative aimed at accelerating women-owned micro and small enterprises. Participants received dedicated mentoring in digital accounting, brand storytelling, e-commerce listing, and institutional grant readiness.",
    location: "Kathmandu Valley",
    year: "2024",
    category: "Women Empowerment",
    beneficiariesCount: "120+ Female Founders",
    partner: "Development Alliance Network",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    status: "Completed",
    outcomes: [
      "94% of participants formalized digital record keeping",
      "45 enterprises connected with micro-grant opportunities",
      "12 businesses launched direct online sales channels",
    ],
  },
  {
    id: "sme-capacity-building",
    title: "SME Capacity Building Initiative",
    description:
      "Building capacities of small & medium enterprises in business management, finance, supply chain, and digital tools.",
    fullDescription:
      "Targeted support for manufacturing and agro-processing SMEs in the Gandaki region to modernize inventory controls, standardize product quality, and satisfy commercial bank credit guidelines.",
    location: "Pokhara, Gandaki",
    year: "2024",
    category: "Capacity Building",
    beneficiariesCount: "85 SMEs",
    partner: "Regional Enterprise Fund",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    status: "Active",
    outcomes: [
      "Average 22% improvement in operational throughput",
      "Structured credit proposals submitted for 38 SMEs",
      "ISO compliance workshops conducted for 15 food processors",
    ],
  },
  {
    id: "business-training-youth",
    title: "Business Training for Youth",
    description:
      "Hands-on training programs for youth to start and grow sustainable business ventures and social innovations.",
    fullDescription:
      "Practical bootcamps offering young aspiring entrepreneurs end-to-end guidance from business ideation to market testing, financial forecasting, and pitch preparation.",
    location: "Biratnagar, Koshi",
    year: "2024",
    category: "Youth Innovation",
    beneficiariesCount: "200+ Young Innovators",
    partner: "Youth Innovation Trust",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    status: "Completed",
    outcomes: [
      "32 new micro-ventures registered and operational",
      "Seed mentorship provided to top 15 innovative prototypes",
      "100% completion rate across 5 intensive cohort modules",
    ],
  },
  {
    id: "market-access-linkage",
    title: "Market Access & Linkage Program",
    description:
      "Connecting local businesses with markets, institutional buyers, and supply chain value networks.",
    fullDescription:
      "Facilitating structured B2B buyer-seller matchmaking sessions between rural agricultural producers and national supermarket chains and wholesale buyers in Lumbini.",
    location: "Butwal, Lumbini",
    year: "2023 - 2024",
    category: "Market Linkage",
    beneficiariesCount: "60+ Producers & Cooperatives",
    partner: "Agri-Enterprise Council",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    status: "Completed",
    outcomes: [
      "Over NPR 15M in supply contracts facilitated",
      "Direct cold-storage logistics partnerships established",
      "Reduced intermediary markups by 18%",
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
    id: "minakshi-nanda",
    name: "Minakshi Nanda",
    role: "Executive Director & Leadership",
    bio: "Spearheading strategic vision, governance, and institutional collaboration to expand enterprise support and economic development initiatives.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    expertise: [
      "Strategic Governance",
      "Institutional Alliances",
      "Enterprise Development",
    ],
  },
  {
    id: "atul-raut",
    name: "Atul Raut",
    role: "Director – Business Development & Strategy",
    bio: "Leading enterprise advisory, market linkages, and strategic partner matchmaking for emerging startups and established SMEs across Nepal.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    expertise: [
      "Business Advisory",
      "Funding Facilitation",
      "Market Access",
    ],
  },
  {
    id: "rohit-srivastava",
    name: "Rohit Srivastava",
    role: "Director – Operations & Digital Innovation",
    bio: "Managing program operations, digital platform infrastructure, applicant journeys, and scalable workflow systems for sustainable impact.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    expertise: [
      "Operations Management",
      "Digital Transformation",
      "System Architecture",
    ],
  },
];

export const PARTNER_LOGOS = [
  { name: "USAID", logoText: "USAID", subtitle: "Development Partner" },
  {
    name: "World Vision",
    logoText: "World Vision",
    subtitle: "Community Support",
  },
  { name: "SNV", logoText: "SNV", subtitle: "Netherlands Dev Org" },
  {
    name: "Save the Children",
    logoText: "Save the Children",
    subtitle: "Youth Livelihoods",
  },
  { name: "CARE", logoText: "care", subtitle: "Economic Resilience" },
  { name: "UNDP Nepal", logoText: "UNDP", subtitle: "Sustainable Dev" },
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
