export type ImageAsset = {
  filename: string;
  pageUse: string;
  alt: string;
  agentOwner: string;
  prompt: string;
  status: "approved" | "pending";
};

export type ResultSegment = {
  slug: string;
  label: string;
  image: string;
  alt: string;
  headline: string;
  copy: string;
  next: string[];
  cta: string;
  qualified: boolean;
};

export type FitCheckOption = {
  label: string;
  value: string;
};

export type FitCheckQuestion = {
  id: string;
  question: string;
  helper?: string;
  options: FitCheckOption[];
};

export const imageAssets: ImageAsset[] = [
  {
    filename: "mahroo-private-mobility-hero.webp",
    pageUse: "Homepage hero",
    alt: "Indian family in a private advisory meeting for global residency planning.",
    agentOwner: "Agent 1",
    status: "approved",
    prompt:
      "Premium editorial photograph of an Indian HNI family advisory setting inside a quiet private office. A well-dressed Indian couple in their late 40s sits at a refined table with a discreet advisor partially visible from behind, reviewing clean abstract global mobility planning materials with no readable text.",
  },
  {
    filename: "mahroo-advisory-method.webp",
    pageUse: "Advisory process section",
    alt: "Private advisory desk with planning documents and a world map.",
    agentOwner: "Agent 2",
    status: "approved",
    prompt:
      "Close editorial image of a refined advisory desk with neatly arranged abstract planning materials, deep emerald folder, ivory paper, muted gold desk details, no readable text.",
  },
  {
    filename: "mahroo-family-decision.webp",
    pageUse: "Family motivation section",
    alt: "Indian family discussing long-term mobility and education planning at home.",
    agentOwner: "Agent 3",
    status: "approved",
    prompt:
      "Realistic editorial scene of an Indian family at home in a sophisticated understated living room discussing future education and global options.",
  },
  {
    filename: "mahroo-program-comparison.webp",
    pageUse: "Programs covered section",
    alt: "Abstract program comparison cards for global residency planning.",
    agentOwner: "Agent 4",
    status: "approved",
    prompt:
      "Elegant abstract global route planning image with ivory paper cards, muted gold dots, deep emerald accents, no country names, no flags, no readable text.",
  },
  {
    filename: "mahroo-result-europe.webp",
    pageUse: "Europe result page",
    alt: "Elegant European residency planning materials on a private advisory desk.",
    agentOwner: "Agent 5",
    status: "approved",
    prompt:
      "Premium realistic image suggesting European residency planning without flags or landmarks: ivory table, refined folder, architecture-style papers, no readable text.",
  },
  {
    filename: "mahroo-result-uae.webp",
    pageUse: "UAE/Dubai result page",
    alt: "Indian founder reviewing Dubai business residency planning in a private office.",
    agentOwner: "Agent 6",
    status: "approved",
    prompt:
      "Refined business advisory scene inspired by Dubai without showing famous landmarks directly. Indian founder in a charcoal suit reviews private residency and business planning documents.",
  },
  {
    filename: "mahroo-result-caribbean.webp",
    pageUse: "Caribbean citizenship result page",
    alt: "Discreet citizenship planning materials with a refined tropical advisory tone.",
    agentOwner: "Agent 7",
    status: "approved",
    prompt:
      "Discreet premium image for citizenship due diligence planning, not a vacation scene: ivory advisory table, deep emerald folder, tropical warmth, no text.",
  },
  {
    filename: "mahroo-result-panama.webp",
    pageUse: "Panama result page",
    alt: "Investor residency diversification planning materials on an advisory desk.",
    agentOwner: "Agent 8",
    status: "approved",
    prompt:
      "Sophisticated residency diversification planning image with subtle Latin America cues, warm ivory desk, deep emerald folder, abstract line map with no labels.",
  },
  {
    filename: "mahroo-result-strategic-hni.webp",
    pageUse: "Strategic HNI result page",
    alt: "Multi-jurisdiction planning cards arranged in a private family office.",
    agentOwner: "Agent 9",
    status: "approved",
    prompt:
      "Premium multi-jurisdiction strategy scene in a private family office, overhead charcoal table, ivory planning cards, muted gold lines, no text.",
  },
  {
    filename: "mahroo-result-explorer.webp",
    pageUse: "Explorer / education result page",
    alt: "Private mobility education guide on a calm advisory desk.",
    agentOwner: "Agent 10",
    status: "approved",
    prompt:
      "Calm educational advisory image with clean ivory notebook, deep emerald guide folder, charcoal pen, muted gold bookmark, no text.",
  },
  {
    filename: "mahroo-result-manual-review.webp",
    pageUse: "Sensitive review page",
    alt: "Confidential compliance review folder on a private advisory desk.",
    agentOwner: "Agent 11",
    status: "approved",
    prompt:
      "Serious private compliance review image with charcoal desk, deep emerald confidential folder, ivory checklist paper with no readable text.",
  },
  {
    filename: "mahroo-consultation-booking.webp",
    pageUse: "Consultation booking page",
    alt: "Private consultation room prepared for a confidential advisory call.",
    agentOwner: "Agent 12",
    status: "approved",
    prompt:
      "Private consultation room prepared for a high-trust advisory call, two deep emerald chairs, warm taupe table, ivory walls, no people, no text.",
  },
  {
    filename: "mahroo-booking-confirmation.webp",
    pageUse: "Booking confirmation page",
    alt: "Private consultation appointment materials on a refined desk.",
    agentOwner: "Agent 13",
    status: "approved",
    prompt:
      "Refined appointment confirmation mood image, minimal ivory calendar page with no readable dates, muted gold pen, deep emerald folder.",
  },
  {
    filename: "mahroo-privacy-disclaimer.webp",
    pageUse: "Privacy and disclaimer page",
    alt: "Confidential advisory documents in a private folder.",
    agentOwner: "Agent 14",
    status: "approved",
    prompt:
      "Discreet confidentiality and documentation image, deep emerald folder slightly open on charcoal desk, no readable text, no identity documents.",
  },
  {
    filename: "mahroo-og-preview.webp",
    pageUse: "Open Graph / social preview image",
    alt: "Private global mobility planning brand image for Indian HNI families.",
    agentOwner: "Agent 15",
    status: "approved",
    prompt:
      "Premium brand preview image for an independent residency and citizenship planning advisor: abstract advisory desk, emerald folder, ivory cards, no text.",
  },
];

export const programs = [
  ["Portugal", "For families evaluating EU residency and long-term citizenship optionality through current-law investment routes."],
  ["Greece", "Real-estate-led EU residency for families seeking European access without immediate relocation."],
  ["Malta", "Permanent residence and merit-based citizenship discussions handled with current-law caution."],
  ["UAE / Dubai", "For founders and families building a regional base close to India with long-term residency options."],
  ["Caribbean", "Direct citizenship routes for qualified families where due diligence and official pricing matter."],
  ["Panama", "Residency diversification, USD-linked exposure, and Latin American optionality."],
];

export const results: ResultSegment[] = [
  {
    slug: "europe",
    label: "Europe Planner",
    image: "mahroo-result-europe.webp",
    alt: "Elegant European residency planning materials on a private advisory desk.",
    headline: "Your result: Europe-led residency planning may be the right starting point.",
    copy:
      "Your family appears to be evaluating residency as a long-term access and optionality decision rather than a quick passport purchase. Portugal, Greece, and Malta each serve a different purpose, and current-law details matter before any commitment.",
    next: [
      "Whether you want EU optionality or actual relocation",
      "Whether fund, real estate, or residence routes fit your risk profile",
      "How many family members must be included",
      "Whether your Indian source-of-funds file is ready",
    ],
    cta: "Request a Confidential Consultation",
    qualified: true,
  },
  {
    slug: "uae",
    label: "Dubai / Business Base Planner",
    image: "mahroo-result-uae.webp",
    alt: "Indian founder reviewing Dubai business residency planning in a private office.",
    headline: "Your result: UAE residency may suit your business and family mobility goals.",
    copy:
      "Your answers suggest a practical overseas base close to India, with strong banking, travel, real estate, and business advantages. UAE residency can be attractive without requiring an immediate Europe-first commitment.",
    next: [
      "Whether property, business, or professional eligibility is stronger",
      "Whether Dubai is a lifestyle move, business base, or asset allocation decision",
      "Family inclusion and renewal expectations",
      "How UAE residency interacts with Indian tax and business realities",
    ],
    cta: "Check UAE Golden Visa Fit",
    qualified: true,
  },
  {
    slug: "caribbean",
    label: "Fast Citizenship Planner",
    image: "mahroo-result-caribbean.webp",
    alt: "Discreet citizenship planning materials with a refined tropical advisory tone.",
    headline: "Your result: a direct citizenship route may be worth reviewing, but only with strict due diligence.",
    copy:
      "Speed, global mobility, and family inclusion appear important. Caribbean citizenship-by-investment programs may be relevant, but the right choice depends on family size, travel needs, source-of-funds comfort, and reputation risk.",
    next: [
      "Country-by-country passport utility",
      "Full cost for your family size",
      "Due diligence and source-of-funds readiness",
      "Whether donation or real estate is appropriate",
    ],
    cta: "Request a Confidential Citizenship Review",
    qualified: true,
  },
  {
    slug: "panama",
    label: "Panama / Americas Planner",
    image: "mahroo-result-panama.webp",
    alt: "Investor residency diversification planning materials on an advisory desk.",
    headline: "Your result: Panama may be a practical diversification route.",
    copy:
      "Your answers point toward residency diversification rather than a full European plan. Panama may suit families looking for a USD-linked jurisdiction, real estate exposure, and a direct investor-residency conversation.",
    next: [
      "Whether Panama is for lifestyle, banking, asset diversification, or future relocation",
      "Real estate threshold and holding expectations",
      "Whether Latin America fits your family needs",
      "Whether another jurisdiction should be paired with Panama",
    ],
    cta: "Review Panama Investor Residency Options",
    qualified: true,
  },
  {
    slug: "strategic-hni",
    label: "Strategic HNI / Multi-Jurisdiction",
    image: "mahroo-result-strategic-hni.webp",
    alt: "Multi-jurisdiction planning cards arranged in a private family office.",
    headline: "Your result: you may need a multi-jurisdiction mobility plan, not a single visa.",
    copy:
      "Your decision is not simply which country is cheapest. It may involve children’s education, succession, business presence, banking, tax residency, investment diversification, and family security.",
    next: [
      "Primary objective: mobility, tax, education, business, or security",
      "Shortlist of 2-3 jurisdictions",
      "Indian compliance and source-of-funds readiness",
      "Sequencing what to do now, next, and later",
    ],
    cta: "Request a Confidential Strategy Call",
    qualified: true,
  },
  {
    slug: "explorer",
    label: "Explorer / Not Yet Qualified",
    image: "mahroo-result-explorer.webp",
    alt: "Private mobility education guide on a calm advisory desk.",
    headline: "Your result: start with education before choosing a program.",
    copy:
      "Based on your current budget or timeline, it may be early to begin a formal application. The best next step is to understand realistic program costs, documentation standards, and the difference between residency and citizenship routes.",
    next: [
      "Understand minimum realistic costs",
      "Compare residency and citizenship pathways",
      "Prepare documentation before choosing a country",
      "Revisit your plan when budget and timeline are clearer",
    ],
    cta: "Read the Starter Guide",
    qualified: false,
  },
  {
    slug: "manual-review",
    label: "Sensitive Review",
    image: "mahroo-result-manual-review.webp",
    alt: "Confidential compliance review folder on a private advisory desk.",
    headline: "Your result: your situation should be reviewed privately before any calendar booking.",
    copy:
      "Sensitive details such as visa refusals, litigation, tax notices, PEP exposure, or complex source of funds should be assessed before choosing a jurisdiction or speaking to program sellers.",
    next: [
      "Clarify the nature of the sensitive constraint",
      "Avoid premature country selection",
      "Review whether licensed counsel is required",
      "Decide if a formal application should wait",
    ],
    cta: "Request a Confidential Manual Review",
    qualified: false,
  },
];

export const faqs = [
  ["Is this legal?", "Yes, residency and citizenship-by-investment programs are legal government routes when pursued through official, compliant channels. Each country has its own rules, due diligence, and documentation requirements."],
  ["Will this affect my Indian citizenship?", "India does not permit dual citizenship for Indian citizens. Residency routes, permanent residence, and citizenship routes have very different consequences. Any citizenship pathway should be reviewed carefully for Indian citizenship, OCI eligibility, tax residence, family documents, and timing before a family commits."],
  ["Can you guarantee approval?", "No. Government authorities decide applications. Any advisor who guarantees approval before due diligence should be treated cautiously."],
  ["Can my spouse, children, or parents be included?", "Often yes, but rules vary by country and dependent category. Age, financial dependency, education status, and family documents matter."],
  ["Which is cheapest?", "The lowest advertised price is rarely the best decision. A serious comparison includes government fees, due diligence, legal costs, family size, investment lock-in, resale risk, and reputation."],
  ["Do I need to relocate?", "Some programs require little or no physical stay; others require residence, renewals, or future presence for citizenship. This is one of the first things to clarify."],
  ["Is Portugal still open?", "Portugal’s Golden Visa still exists, but common routes have changed over time. Suitability depends on investment type, processing realities, and your long-term objective."],
  ["Is Malta still citizenship by investment?", "Malta’s former citizenship-by-investment framing has shifted. Malta should be discussed with current-law caution, not old-market assumptions."],
  ["What about Dubai?", "Dubai/UAE is often practical for Indian founders because of proximity, business infrastructure, and long-term residency options. It is not the same as citizenship planning."],
  ["Will my information be private?", "The intake should be confidential and handled only for advisory assessment. Sensitive matters should be discussed privately."],
];

export const fitCheckQuestions: FitCheckQuestion[] = [
  {
    id: "motivation",
    question: "What is your main reason for exploring residency or citizenship planning?",
    options: [
      { label: "Easier global travel", value: "mobility" },
      { label: "Children's education", value: "education" },
      { label: "Business expansion", value: "business" },
      { label: "Family security / Plan B", value: "plan-b" },
    ],
  },
  {
    id: "region",
    question: "Which regions are currently most interesting?",
    options: [
      { label: "Portugal / Europe", value: "europe" },
      { label: "UAE / Dubai", value: "uae" },
      { label: "Caribbean citizenship", value: "caribbean" },
      { label: "Panama / Latin America", value: "panama" },
      { label: "Unsure, need comparison", value: "strategic-hni" },
    ],
  },
  {
    id: "timeline",
    question: "What timeline are you considering?",
    options: [
      { label: "Within 3 months", value: "0-3" },
      { label: "3-6 months", value: "3-6" },
      { label: "6-12 months", value: "6-12" },
      { label: "Researching only", value: "research" },
    ],
  },
  {
    id: "budget",
    question: "What investment range are you comfortable evaluating?",
    options: [
      { label: "Below USD 200k", value: "under-200" },
      { label: "USD 200k-350k", value: "200-350" },
      { label: "USD 350k-600k", value: "350-600" },
      { label: "USD 600k-1M", value: "600-1000" },
      { label: "USD 1M+", value: "1000-plus" },
      { label: "Prefer to discuss privately", value: "private-budget" },
    ],
  },
  {
    id: "investmentStyle",
    question: "Which investment style do you prefer?",
    options: [
      { label: "Government contribution / donation", value: "donation" },
      { label: "Real estate-backed route", value: "real-estate" },
      { label: "Fund or financial investment", value: "fund" },
      { label: "Business or professional eligibility", value: "business" },
      { label: "Flexible if the route is right", value: "flexible" },
    ],
  },
  {
    id: "family",
    question: "Who needs to be included?",
    options: [
      { label: "Only me", value: "self" },
      { label: "Spouse and children", value: "spouse-children" },
      { label: "Parents or dependents too", value: "parents" },
      { label: "Multi-generational family planning", value: "multi-gen" },
    ],
  },
  {
    id: "relocation",
    question: "How important is physical relocation?",
    options: [
      { label: "I prefer minimal stay", value: "minimal" },
      { label: "Short visits are acceptable", value: "short-visits" },
      { label: "Open to partial relocation", value: "partial" },
      { label: "Ready to relocate if needed", value: "relocate" },
    ],
  },
  {
    id: "priority",
    question: "What matters most in the final recommendation?",
    options: [
      { label: "Speed and mobility", value: "speed" },
      { label: "European optionality", value: "eu-optionality" },
      { label: "Business base close to India", value: "business-base" },
      { label: "Education and family continuity", value: "education" },
      { label: "Multi-jurisdiction strategy", value: "multi-jurisdiction" },
    ],
  },
  {
    id: "documentation",
    question: "How prepared is your documentation?",
    helper: "Think source of funds, tax records, family documents, and business ownership trail.",
    options: [
      { label: "Clean and organized", value: "ready" },
      { label: "Mostly ready, needs review", value: "partial" },
      { label: "Complex source-of-funds picture", value: "complex" },
      { label: "Not sure yet", value: "unsure" },
    ],
  },
  {
    id: "sensitive",
    question: "Any sensitive constraints?",
    helper: "Choose the closest option. Sensitive cases are routed to private review before any calendar booking.",
    options: [
      { label: "No known constraints", value: "none" },
      { label: "Past visa refusal", value: "visa-refusal" },
      { label: "Tax, litigation, or compliance concern", value: "tax-legal" },
      { label: "PEP / sanctions / reputational sensitivity", value: "pep" },
      { label: "Source-of-funds complexity", value: "source-complex" },
    ],
  },
  {
    id: "profile",
    question: "What best describes you?",
    options: [
      { label: "Founder / promoter", value: "founder" },
      { label: "C-suite executive", value: "executive" },
      { label: "Investor / family office", value: "investor" },
      { label: "Exporter / international business owner", value: "exporter" },
      { label: "Early-stage explorer", value: "explorer" },
    ],
  },
];
