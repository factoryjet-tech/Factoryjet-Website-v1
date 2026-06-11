import type { Metadata } from 'next';
import Script from 'next/script';
import { usCityAIAlternates } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import BoringStatsRow from '@/components/v2/BoringStatsRow';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import PricingTiers from '@/components/v2/PricingTiers';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'AI Workflow Automation for Charlotte NC Businesses | FactoryJet',
  description:
    'AI workflow automation for Charlotte businesses — financial services, logistics, healthcare intake & CRM sync. Cut 40–65% of manual task time. From $4,000.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Workflow Automation for Charlotte NC Businesses | FactoryJet',
    description:
      'Custom AI workflow automation for Charlotte NC businesses. Built on n8n, Make.com, and LangChain. fixed-price, milestone-paid. Get a quote.',
    url: 'https://factoryjet.com/us/charlotte/ai-automation',
    images: [
      {
        url: 'https://factoryjet.com/images/us/charlotte/hero-charlotte.webp',
        width: 1200,
        height: 800,
        alt: 'FactoryJet - AI Workflow Automation for Charlotte NC Businesses',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Workflow Automation for Charlotte NC Businesses | FactoryJet',
    description:
      'Custom AI workflow automation for Charlotte NC businesses. fixed-price, milestone-paid. Get a quote.',
    images: ['https://factoryjet.com/images/us/charlotte/hero-charlotte.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/charlotte/ai-automation',
    languages: usCityAIAlternates['charlotte-ai-automation'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schema (FAQPage + Service)
───────────────────────────────────────────────────────────────────────────── */

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is AI workflow automation for a Charlotte business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI workflow automation connects your business tools and uses artificial intelligence to execute multi-step processes without manual intervention. For Charlotte businesses, this means automating compliance reporting in financial and healthcare workflows, processing logistics and shipping documents, syncing data between your CRM and accounting systems, routing customer inquiries to the right department, and generating regulatory reports from multiple systems — so your team focuses on decisions that require human judgment, not on moving data between tools.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does AI workflow automation help Charlotte businesses specifically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Charlotte\'s economy has three characteristics that make AI automation especially valuable. First, the financial services density — with Bank of America, Wells Fargo, Truist, and a deep ecosystem of fintech and professional services firms, Charlotte businesses face compliance-heavy workflows that require precision and audit trails, exactly what structured AI automation provides. Second, Charlotte is a major logistics and distribution hub — document-heavy shipping and supply chain workflows are ideal automation candidates. Third, two of Charlotte\'s largest health systems (Atrium Health, Novant Health) and their supplier networks create high-volume administrative workflows that automation handles reliably.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kinds of workflows does FactoryJet automate for Charlotte businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Best-fit workflows for Charlotte businesses: lead follow-up and nurturing sequences triggered by form fills or CRM events, financial document processing (invoice extraction, approval routing, audit trail generation), logistics and shipping document automation (bills of lading, delivery confirmations, carrier sync), healthcare intake and patient communication workflows, compliance reporting from multiple data sources, CRM and accounting system sync (QuickBooks, Xero, Salesforce, HubSpot), and employee onboarding task sequences. Any workflow your team runs more than five times per week and involves reading something or making a simple decision is a candidate.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does AI workflow automation cost for a Charlotte business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet\'s AI workflow automation starts at $4,000 for a focused single-workflow build. The Growth tier at $10,000 covers a multi-workflow automation platform connecting 3–5 systems with an operations dashboard and 30-day support — the most popular option for Charlotte SMBs. Enterprise automation with complex compliance logic, financial services workflows, and multi-department integrations starts at $20,000. All prices are fixed and confirmed upfront — no hourly billing, no scope creep.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI workflow automation handle compliance requirements for Charlotte financial and healthcare businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Compliance-aware automation is a core capability for Charlotte\'s financial and healthcare industries. We build automations with full audit trails (every workflow run logged with inputs, decisions, and outputs), least-privilege data access, self-hosted infrastructure options for sensitive environments, and structured exception handling that routes compliance edge cases to human review rather than processing them automatically. For healthcare clients, this includes HIPAA-aligned data handling. For financial services, this includes audit-ready logging that maps to your control framework.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI automation connect to Charlotte banking, healthcare, and logistics platforms with audit trails?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — AI workflow automation integrates with the platforms Charlotte\'s regulated industries use. Common connections include Salesforce and nCino for financial services, Epic and Meditech for healthcare, QuickBooks and SAP for accounting, and major TMS and WMS platforms for logistics. For Charlotte banking and healthcare clients, every integration includes an immutable audit log — every workflow run recorded with inputs, decision logic, outputs, and timestamps — as standard.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Charlotte compliance, legal, or risk teams review the automation logic before go-live?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — compliance review before deployment is built into every regulated-industry engagement. We run a dedicated staging period where your Charlotte compliance, legal, or risk team can review the automation\'s decision logic, exception handling, and audit trail outputs before any production data is processed. For financial services and healthcare clients, this ensures your internal control team — and your auditors — have full visibility. We document the automation in a format designed for SOC 2, HIPAA, and banking audit review.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Charlotte financial services or healthcare businesses pay extra for compliance architecture in automation builds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No surprise add-ons. Full audit trail logging, least-privilege data access, self-hosted infrastructure options, and HIPAA-aligned data handling are included in our Enterprise tier starting at $20,000 — not charged as separate line items. For most Charlotte financial services and logistics clients, the Growth tier at $10,000 already includes the audit trail and exception handling they need. We scope this accurately during discovery — no additions after kickoff when your budget is committed.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Workflow Automation — Charlotte, NC',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: {
    '@type': 'City',
    name: 'Charlotte',
    containedInPlace: {
      '@type': 'State',
      name: 'North Carolina',
    },
  },
  serviceType: 'AI Workflow Automation',
  description:
    'Custom AI workflow automation for Charlotte NC small businesses. Specializing in financial services workflow automation, logistics document processing, healthcare intake workflows, compliance reporting, and CRM sync built on n8n, Make.com, and LangChain.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Starter Workflow Automation',
      price: '4000',
      priceCurrency: 'USD',
      description: 'A single focused workflow automation — lead follow-up, invoice processing, or a specific data sync.',
    },
    {
      '@type': 'Offer',
      name: 'Growth Automation Platform',
      price: '10000',
      priceCurrency: 'USD',
      description: 'Multi-workflow automation platform connecting 3–5 systems with an operations dashboard and 30-day support.',
    },
    {
      '@type': 'Offer',
      name: 'Enterprise Automation System',
      price: '20000',
      priceCurrency: 'USD',
      description: 'Complex business logic automation with compliance-aware design, financial or healthcare system integrations, and multi-department workflow coverage.',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '150',
    reviewCount: '150',
    bestRating: '5',
    worstRating: '1',
  },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet builds your Charlotte AI automation solution in 7 days',
  description: 'Our 7-day process for delivering production-ready AI agents and automation for businesses.',
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1 — Discovery & Use-Case Mapping',
      text: 'We audit your workflows, identify the highest-ROI automation opportunities, and define the exact scope of your AI solution.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 — Architecture & Data Planning',
      text: 'We design the AI architecture, select the right models and APIs, and map your data sources and integration points.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Days 3–4 — Build & Integrate',
      text: 'We build your AI agents or automation workflows and integrate them with your existing tools, CRM, and business systems.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Days 5–6 — Testing & Optimization',
      text: 'We run comprehensive testing across edge cases, optimize for accuracy and latency, and add monitoring and alerting.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Day 7 — Launch & Training',
      text: 'Your AI solution goes live. We train your team, provide documentation, and offer 30-day post-launch support.',
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const CHARLOTTE_INDUSTRIES = [
  {
    name: 'Banking, Fintech & Financial Services',
    description:
      'Charlotte is one of the largest financial centers in the US — home to Bank of America, Wells Fargo East Coast HQ, and Truist, plus a deep ecosystem of credit unions, wealth management firms, insurance companies, and fintech startups. AI automation handles client onboarding workflows, document collection and verification routing, compliance reporting from multiple systems, billing and payment processing, and audit-ready audit trail generation — with the structured exception handling that regulated industries require.',
    example: 'Financial services firms recover 15–20 hours per week of manual compliance and onboarding work.',
    linkLabel: 'Talk to our team',
    linkHref: '/contact',
  },
  {
    name: 'Logistics, Supply Chain & Distribution',
    description:
      'Charlotte is a major Southeast logistics hub with significant warehouse and distribution infrastructure. AI automation processes shipping documents, extracts data from bills of lading and delivery confirmations, syncs tracking data across carrier systems, routes exceptions for review, and generates on-time delivery and cost reporting — eliminating the manual document handling that slows operations and creates data entry errors.',
    example: 'Logistics companies process shipping documents 70% faster with AI extraction and routing.',
    linkLabel: 'See how it works',
    linkHref: '/contact',
  },
  {
    name: 'Healthcare & Health Systems',
    description:
      'Atrium Health and Novant Health anchor a large healthcare ecosystem in Charlotte, with hundreds of independent practices, clinics, and healthcare-adjacent businesses. AI automation handles patient intake and pre-appointment communication workflows, insurance verification routing, prior authorization document processing, referral coordination, billing workflow triage, and compliance reporting — with HIPAA-aligned data handling and audit trail requirements built in.',
    example: 'Healthcare practices reclaim 10–15 admin hours per week with patient communication automation.',
    linkLabel: 'Book a strategy call',
    linkHref: '/contact',
  },
  {
    name: 'Manufacturing & Industrial',
    description:
      'Charlotte\'s manufacturing sector — aerospace components, automotive parts, food processing, and industrial equipment — generates high-volume procurement, quality, and compliance workflows. AI automation handles purchase order processing, vendor invoice routing, quality inspection report generation, compliance documentation, and supply chain status reporting from your ERP or operations systems — reducing the back-office load that grows with production volume.',
    example: 'Manufacturers reduce procurement processing time by 50–65% with document automation.',
    linkLabel: 'Get a quote',
    linkHref: '#pricing',
  },
  {
    name: 'Professional Services & Consulting',
    description:
      'Charlotte\'s professional services sector — law firms, accounting practices, management consultants, HR firms, and insurance agencies — uses AI automation to streamline client onboarding, contract routing for signatures, billing and invoicing workflows, compliance reporting, and CRM data sync — freeing professionals from administrative overhead and letting them focus on billable work.',
    example: 'Professional services firms recover 12–18 hours per week of billable time from automation.',
    linkLabel: 'Learn more',
    linkHref: '/contact',
  },
  {
    name: 'E-Commerce & Retail Brands',
    description:
      'Charlotte-based DTC and retail brands use AI automation to handle order processing workflows, inventory sync across channels, customer follow-up sequences, return and refund processing, vendor payment scheduling, and marketing performance reporting — creating a reliable operational backbone that keeps pace with growth without adding headcount.',
    example: 'E-commerce brands process orders and sync inventory 60% faster with automation.',
    linkLabel: 'See pricing',
    linkHref: '#pricing',
  },
];

const CHARLOTTE_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'A 45-minute call where we map your highest-value workflows, document the decision logic, identify integration points, and flag any compliance or audit trail requirements specific to your Charlotte industry. We define success before a line is written.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We specify the workflow logic, exception handling, data transformations, and compliance controls. For financial and healthcare workflows, this includes audit trail design and data access scope. You approve the design document before we build.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'We develop and test in a staging environment with weekly demos. You see the automation working against real business scenarios during the build — not just at the end. Compliance-sensitive clients can review the audit trail in staging.',
  },
  {
    number: '04',
    title: 'Validate',
    description:
      'We run the automation against real business scenarios from your actual workflow, tune edge case handling, and verify exception routing performs correctly. For regulated industries, we walk through the audit trail with your compliance team.',
  },
  {
    number: '05',
    title: 'Deploy & Train',
    description:
      'Live launch with monitoring, team training, and a 30-day support window. Your operations team sees every workflow run and exception in the monitoring dashboard — nothing runs silently, and your compliance team has the audit access they need.',
  },
];

const ROI_STATS = [
  {
    value: '40–65%',
    label: 'reduction in manual task time across FactoryJet workflow automation deployments',
    microcopy: 'recovered and redirected to growth and billable work',
    categoryLabel: 'TIME SAVED',
  },
  {
    value: '60s',
    label: 'automated lead follow-up response vs. hours waiting for a sales rep — direct pipeline impact',
    microcopy: 'faster follow-up directly increases qualified pipeline',
    categoryLabel: 'LEAD SPEED',
  },
  {
    value: 'Fixed Price',
    label: 'milestone-paid with full code ownership — 25+ years experience, US-caliber output',
    microcopy: 'predictable from quote to launch — no scope-creep invoices',
    categoryLabel: 'PRICING MODEL',
  },
];

const MARKET_STATS = [
  {
    value: '25–40%',
    label: 'increase in qualified pipeline from automated lead follow-up within 60 seconds of form fill',
    microcopy: 'across FactoryJet automation clients',
    categoryLabel: 'PIPELINE IMPACT',
  },
  {
    value: '2–4mo',
    label: 'typical payback period for AI workflow automation — based on staff hours reclaimed',
    microcopy: 'most Charlotte clients recover build cost within one quarter',
    categoryLabel: 'PAYBACK PERIOD',
  },
  {
    value: '78%',
    label: 'of US small businesses say manual data entry and repetitive tasks reduce team productivity',
    microcopy: 'SMB Operations Report 2024',
    categoryLabel: 'MARKET CONTEXT',
  },
];

const COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Charlotte Automation Agency' },
  { label: 'DIY Tool (Zapier, Make)' },
  { label: 'Freelancer' },
] as const;

const COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: [
      '$4,000',
      '$15,000–$50,000',
      '$50–$200/mo (ongoing SaaS fee)',
      '$6,000–$15,000',
    ],
  },
  {
    feature: 'Delivery timeline',
    values: ['2–3 weeks', '2–5 months', 'Days (limited AI capability)', '4–8 weeks (unreliable)'],
  },
  {
    feature: 'AI decision-making (not just data routing)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="diy" kind="partial" />,
      <CompareIcon key="fl" kind="partial" />,
    ],
  },
  {
    feature: 'Compliance-aware design (SOC 2, HIPAA, banking audit trails)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
    ],
  },
  {
    feature: 'Error handling + failure notifications',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="diy" kind="partial" />,
      <CompareIcon key="fl" kind="partial" />,
    ],
  },
  {
    feature: 'You own the automation outright',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="yes" />,
    ],
  },
  {
    feature: 'No ongoing SaaS platform fees',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="yes" />,
    ],
  },
  {
    feature: '30-day post-launch support',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="no" />,
    ],
  },
  {
    feature: '25+ years of SMB domain experience',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="no" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
    ],
  },
];

const PRICING_TIERS = [
  {
    name: 'Starter',
    priceRange: 'From $4,000',
    description:
      'A single focused workflow automation — lead follow-up, invoice processing, or a specific data sync. Perfect for Charlotte businesses automating their first workflow.',
    features: [
      'One workflow automation (lead nurture, invoice, or data sync)',
      'AI decision layer (classify, extract, route — not just move data)',
      'Integration with up to 3 platforms via API or webhook',
      'Full audit trail: every run logged with inputs and outputs',
      'Error handling with Slack or email failure notifications',
      'Monitoring dashboard showing every workflow run',
      '14-day post-launch support window',
    ],
    cta: { label: 'Get a Quote', modal: true as const, region: 'us' as const },
  },
  {
    name: 'Growth',
    priceRange: 'From $10,000',
    description:
      'A multi-workflow automation platform connecting 3–5 systems with an operations dashboard and 30-day support. The most popular option for Charlotte SMBs ready to automate multiple processes.',
    features: [
      'Up to 5 distinct workflow automations',
      'Integration with 3–5 platforms (CRM, accounting, logistics, ERP)',
      'AI reasoning layer for document extraction, classification, and routing',
      'Compliance-aware design with full audit trail logging',
      'Operations dashboard with run history, error logs, and retry controls',
      'Team training session + workflow documentation',
      '30-day post-launch monitoring and support',
    ],
    cta: { label: 'Get a Custom Quote', modal: true as const, region: 'us' as const },
    popular: true,
  },
  {
    name: 'Enterprise',
    priceRange: 'From $20,000',
    description:
      'Complex business logic automation with compliance-aware design, financial or healthcare system integrations, and multi-department workflow coverage. Ideal for Charlotte financial services, healthcare, and logistics companies.',
    features: [
      'Workflow development fully scoped per project brief',
      'Financial and healthcare system integrations (EHR, ERP, core banking)',
      'Compliance-aware design (HIPAA, SOC 2, banking audit requirements)',
      'Custom AI decision logic for complex document types',
      'Self-hosted infrastructure option for sensitive data environments',
      'Advanced analytics with workflow performance dashboards',
      'Dedicated engineering point of contact',
      '90-day post-launch support and iteration window',
    ],
    cta: { label: 'Schedule an Enterprise Call', modal: true as const, region: 'us' as const },
  },
] as const;

/* ─── FAQ categories ─────────────────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'what-is',    label: 'What Is AI Automation' },
  { key: 'charlotte',  label: 'AI Automation in Charlotte' },
  { key: 'process',    label: 'Process & Timeline' },
  { key: 'pricing',    label: 'Pricing & ROI' },
  { key: 'trust',      label: 'Trust & Results' },
];

/* ─── FAQ items — 21 Q-A pairs, Charlotte / compliance focused ──────────── */
const FAQ_ITEMS = [

  /* ── What Is AI Workflow Automation ── */
  {
    category: 'what-is',
    question: 'What is AI workflow automation?',
    answer:
      'AI workflow automation connects your business tools and uses artificial intelligence to execute multi-step processes without manual intervention. Unlike basic Zapier-style automation that just moves data between apps, AI workflow automation adds an intelligence layer: it can read an email and decide what type of request it is, extract key data from an invoice or compliance document, classify an inquiry and route it to the right department, write a draft response, or make a branching decision based on the content of a document. It handles the workflows that have too many edge cases for simple if-this-then-that rules.',
  },
  {
    category: 'what-is',
    question: 'How is AI workflow automation different from Zapier or Make.com?',
    answer:
      'Zapier and Make.com route data between apps when specific triggers fire — they\'re great for simple, predictable data moving. AI workflow automation adds a layer of intelligence on top: it reads a document and extracts structured data, classifies a request and routes it to the correct department, makes branching decisions based on content, writes a personalized response, or generates an audit-ready log entry. For Charlotte businesses with compliance requirements or complex document workflows, that intelligence layer handles the edge cases that Zapier can\'t.',
  },
  {
    category: 'what-is',
    question: 'What kinds of workflows can AI automate for my business?',
    answer:
      'Best-fit workflows: lead follow-up and nurturing sequences (triggered by form fills, event attendance, or behavioral signals), invoice and document processing (extract data from PDFs, route for approval, generate audit trail), CRM and accounting system sync (QuickBooks, Xero, HubSpot, Salesforce), logistics document handling (shipping confirmations, carrier data sync, delivery exception routing), compliance reporting from multiple data sources, and employee onboarding task sequences. If your team does it more than five times per week and it involves reading something or making a simple decision, it can probably be automated.',
  },
  {
    category: 'what-is',
    question: 'What tools does FactoryJet use to build workflow automation?',
    answer:
      'We build on n8n and Make.com for workflow orchestration, GPT-4o and Claude for the AI reasoning layer, Python scripts for complex data transformation, and LangChain for multi-step AI decision chains. For Charlotte financial and healthcare clients with sensitive data requirements, n8n offers a self-hosted option with full audit trails and no data leaving your environment. We choose the stack based on your workflow complexity, compliance requirements, and self-hosting preferences.',
  },

  {
    category: 'what-is',
    question: 'Can AI automation connect to Charlotte banking, healthcare, and logistics platforms with full audit trails?',
    answer:
      'Yes — AI workflow automation integrates with the platforms Charlotte\'s regulated industries use. Common connections include Salesforce and nCino for financial services, Epic and Meditech for healthcare, QuickBooks and SAP for accounting, and major TMS and WMS platforms for logistics. For Charlotte banking and healthcare clients, every integration includes an immutable audit log — every workflow run recorded with inputs, decision logic, outputs, and timestamps — as standard, not as a separate line item.',
  },

  /* ── AI Automation in Charlotte ── */
  {
    category: 'charlotte',
    question: 'Why is Charlotte a strong market for AI workflow automation?',
    answer:
      'Three Charlotte-specific factors make automation especially valuable. First, the financial services concentration — Bank of America, Wells Fargo, Truist, and hundreds of fintech and professional services firms create compliance-heavy, document-intensive workflows that are exactly where structured AI automation performs best. Second, Charlotte is a major Southeast logistics hub — high-volume shipping document workflows are ideal automation candidates. Third, Atrium Health, Novant Health, and their supplier networks create significant healthcare administrative workflows that AI automation handles reliably with proper compliance controls.',
  },
  {
    category: 'charlotte',
    question: 'Can AI workflow automation handle compliance requirements for Charlotte financial and healthcare businesses?',
    answer:
      'Yes. Compliance-aware automation is a core capability for Charlotte\'s regulated industries. Every workflow we build includes a full audit trail — every run logged with inputs, decision logic, outputs, and timestamps. We use least-privilege data access so the automation touches only what it needs. For financial services, we build logging that maps to your control framework. For healthcare workflows, we follow HIPAA-aligned data handling and can build on self-hosted infrastructure so sensitive data never leaves your environment.',
  },
  {
    category: 'charlotte',
    question: 'Which Charlotte industries benefit most from AI workflow automation?',
    answer:
      'Highest-impact industries in Charlotte: Banking and financial services (onboarding workflows, compliance reporting, document routing with full audit trails), Logistics and supply chain (shipping document extraction, carrier sync, delivery exception routing), Healthcare (patient intake automation, insurance verification, prior auth processing), Manufacturing (purchase order and procurement workflows, quality compliance reporting), Professional services (client onboarding, billing automation, contract routing), and E-commerce brands scaling their operational backbone.',
  },
  {
    category: 'charlotte',
    question: 'How does AI automation help Charlotte logistics and supply chain businesses?',
    answer:
      'Charlotte\'s logistics and distribution companies deal with high volumes of shipping documents — bills of lading, delivery confirmations, commercial invoices, carrier status updates. AI automation extracts structured data from these documents regardless of format, validates required fields, routes exceptions for human review, syncs data to your TMS or ERP, and generates reporting dashboards — processing documents at a speed and consistency that manual review can\'t match, without a proportional headcount increase.',
  },
  {
    category: 'charlotte',
    question: 'How does AI automation support Charlotte healthcare and health system businesses?',
    answer:
      'Healthcare-adjacent businesses in Charlotte — specialty practices, healthcare staffing firms, medical device distributors, and suppliers to Atrium or Novant — use AI automation for patient intake communication workflows, insurance verification document routing, prior authorization processing, referral coordination, billing workflow triage, and compliance reporting. We build with HIPAA-aligned data handling and audit trail requirements as standard for healthcare clients — not as add-ons.',
  },

  /* ── Process & Timeline ── */
  {
    category: 'process',
    question: 'What does the AI workflow automation development process look like?',
    answer:
      'Five stages: Discover (we map your highest-value workflows, document the decision logic, identify integration points, and flag compliance or audit trail requirements), Design (specify workflow logic, exception handling, data transformations, and compliance controls), Build (develop and test in a staging environment with weekly demos), Validate (run against real business scenarios and tune edge cases — compliance clients review audit trail outputs in staging), and Deploy (live launch with monitoring, team training, and 30-day support). Every stage ends with a working demo.',
  },
  {
    category: 'process',
    question: 'How long does it take to build and deploy AI workflow automation?',
    answer:
      'A single focused workflow — lead follow-up automation, invoice processing, or a specific data sync — goes from kickoff to production in 2–3 weeks. Multi-workflow automation platforms connecting several systems take 4–6 weeks. Enterprise automation with complex compliance logic, financial or healthcare system integrations, and multiple departments typically runs 8–12 weeks. Timeline depends on the number of systems involved, compliance requirements, and how well-documented your current process is.',
  },
  {
    category: 'process',
    question: 'Will I see the automation working during the build?',
    answer:
      'Yes. Weekly demos at every stage of the build. You see the automation run against real examples from your actual workflow during development — not just at launch. Charlotte clients in regulated industries can review the audit trail and exception routing behavior in the staging environment before go-live, so your compliance team has confidence in what\'s being deployed.',
  },
  {
    category: 'process',
    question: 'What happens after the automation is deployed?',
    answer:
      'Every engagement includes a 30-day post-launch window. We monitor workflow execution, fix any failures, handle API changes from connected platforms, and deliver a team training session. After 30 days you can self-manage (the monitoring dashboard shows every run and exception with full audit trail access), continue on a monthly retainer for new workflow development, or both.',
  },

  {
    category: 'process',
    question: 'Can Charlotte compliance, legal, or risk teams review the automation logic before it goes live?',
    answer:
      'Yes — compliance review before deployment is built into every regulated-industry engagement. We run a dedicated staging period where your Charlotte compliance, legal, or risk team can review the automation\'s decision logic, exception handling, and audit trail outputs before any production data is processed. For financial services and healthcare clients, this review ensures your internal control team — and your auditors — have full visibility. We document the automation architecture in a format designed for SOC 2, HIPAA, and banking audit review.',
  },

  /* ── Pricing & ROI ── */
  {
    category: 'pricing',
    question: 'How much does AI workflow automation cost for a Charlotte business?',
    answer:
      'FactoryJet\'s AI workflow automation starts at $4,000 for a focused single-workflow build. The Growth tier at $10,000 covers a multi-workflow platform connecting 3–5 systems with an operations dashboard — the most popular option for Charlotte SMBs. Enterprise automation with complex compliance logic, financial or healthcare system integrations, and multi-department coverage starts at $20,000. All prices are fixed and confirmed upfront — no hourly billing, no scope creep.',
  },
  {
    category: 'pricing',
    question: 'Why is FactoryJet fixed-price, milestone-paid?',
    answer:
      'Our engineering team brings 25+ years of focused expertise. Same quality of workflow architecture, compliance design, and delivery — without the overhead that inflates traditional agency invoices. We\'ve served US businesses for 25 years. When you brief us, an engineer reads it, not an account manager. No South End or Uptown Charlotte office rates built into the quote — and no bloated project team staffed to justify a larger invoice.',
  },
  {
    category: 'pricing',
    question: 'What return on investment can I expect from AI workflow automation?',
    answer:
      'The most direct return is from manual hours eliminated. An invoice processing automation handling 100 invoices per week at $10,000 pays for itself in 2–3 months based on staff time replaced. Lead follow-up automation that contacts every new lead within 60 seconds typically increases qualified pipeline by 25–40%. Charlotte financial services and logistics clients most often recover the build cost within one quarter.',
  },
  {
    category: 'pricing',
    question: 'Are there ongoing costs after the automation is built?',
    answer:
      'Two types: platform costs (n8n self-hosted is free; Make.com runs $9–$29/month for most SMB workflow volumes) and AI model API costs (typically $20–$100/month depending on how much AI reasoning your workflows use — paid directly to OpenAI or Anthropic). Neither is marked up by FactoryJet. Optional monthly retainer for new workflow development or ongoing support.',
  },

  {
    category: 'pricing',
    question: 'Do Charlotte financial services or healthcare businesses pay extra for compliance architecture in automation builds?',
    answer:
      'No surprise add-ons. Full audit trail logging, least-privilege data access, self-hosted infrastructure options, and HIPAA-aligned data handling are included in our Enterprise tier starting at $20,000 — not separate line items added after scoping. For most Charlotte financial services and logistics clients, the Growth tier at $10,000 already includes the audit trail and exception handling they need. We scope this accurately during discovery so your budget commitment is firm before any work begins.',
  },

  /* ── Trust & Results ── */
  {
    category: 'trust',
    question: 'Is my business data safe in automated workflows?',
    answer:
      'We use API-level integrations and enforce least-privilege access — the automation only touches the data it needs for the specific workflow. Every run is logged with a full audit trail. For Charlotte financial services, healthcare, and logistics clients handling sensitive transaction or patient data, we can build on self-hosted infrastructure (n8n self-hosted) so data never leaves your environment. We share our security architecture during the discovery call.',
  },
  {
    category: 'trust',
    question: 'What happens when an automated workflow fails or hits an edge case?',
    answer:
      'Every workflow we build has explicit error handling: if a step fails, the system logs the error, notifies your designated team member via Slack or email, and either retries automatically or queues the item for manual review. Nothing fails silently. The monitoring dashboard shows exactly where a workflow stopped and why. For compliance-sensitive workflows, the exception is routed to human review — the automation never guesses on a compliance decision.',
  },
  {
    category: 'trust',
    question: 'What results have other businesses gotten from FactoryJet workflow automation?',
    answer:
      'An invoice processing automation handling 100 invoices per week at $10,000 paid for itself in 2–3 months. A professional services firm\'s client onboarding automation reduced onboarding time from 3 days to 4 hours without adding staff. A logistics company reduced manual document processing time by 65% by automating shipping document extraction and carrier sync. We share relevant case studies during a strategy call.',
  },
  {
    category: 'trust',
    question: 'Can AI automation replace our existing Zapier or Make.com workflows?',
    answer:
      'Often yes — and with added AI capability and compliance controls. We audit your existing automations during discovery and either migrate them to the new platform, leave simple ones in place, or rebuild them with AI decision-making and proper audit trail logging added on top. We don\'t replace things that are working well just to bill more hours.',
  },
  {
    category: 'trust',
    question: 'How is FactoryJet different from a local Charlotte automation agency?',
    answer:
      'Three differences: price (specialized engineers serving US businesses for 25+ years), speed (no layers between your brief and the engineer building it — weeks, not quarters), and SMB depth (500+ small business projects since 1999 — we understand what operations look like inside a 20-person Charlotte financial services firm or a regional logistics company, including the compliance and audit requirements those industries carry).',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function CharlotteAIAutomationPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <Script
        id="charlotte-ai-automation-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="charlotte-ai-automation-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="charlotte-ai-automation-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <SiteHeader
        navLinks={[
          { label: 'Services', href: '/us/services' },
          { label: 'AI Agents', href: '/us/services/ai-chatbot-development' },
          { label: 'AI Automation', href: '/us/services/ai-workflow-automation' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Contact', modal: true, region: 'us' },
        ]}
        cta={{ label: 'Book a Call', modal: true, region: 'us' }}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="AI WORKFLOW AUTOMATION · CHARLOTTE, NC"
          headline="Charlotte's Financial District, Health Systems, and Logistics Companies Are Automating the Workflows That Don't Need a Human"
          lead="Charlotte's economy runs on high-volume, compliance-sensitive workflows — financial document processing, logistics coordination, healthcare intake, and client onboarding. FactoryJet builds custom AI workflow automation for Charlotte businesses that eliminates manual task time at fixed-price vs a local agency."
          primaryCta={{ label: 'Get a Quote', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={[
            '500+ businesses served',
            'Starting at $4,000',
            'engineered for measurable outcomes',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#F05A28]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                AI AUTOMATION IN ACTION — CHARLOTTE
              </p>
              <p className="mt-4 font-fj-display text-[2rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                40–65% of manual process time eliminated — before the first meeting.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'New client inquiry arrives → automation classifies request → routes to correct advisor → triggers onboarding checklist automatically',
                  'Logistics company receives 200 shipping docs weekly → automation extracts data → syncs to TMS → flags exceptions for review',
                  'Healthcare practice gets referral → automation verifies insurance → sends pre-visit communication → updates EHR workflow',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#F05A28]/10 font-fj-mono text-[10px] font-bold text-[#F05A28]">
                      {i + 1}
                    </span>
                    <p className="font-fj-body text-[0.875rem] leading-[1.5] text-fj-neutral-600">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-fj-neutral-100 pt-6">
                <p className="font-fj-body text-[0.8125rem] text-fj-neutral-400">
                  All three running automatically — full audit trail, no manual intervention required.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 2. TRUST STATS ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ businesses served. 25 years of building. One goal: your results."
        />

        {/* ── 3. WHAT IS AI AUTOMATION ─────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="AI WORKFLOW AUTOMATION EXPLAINED"
          headline="What Is AI Workflow Automation — and Why Charlotte Businesses Need It Now"
          lead="AI workflow automation is not just Zapier with more steps. It's an intelligent layer that reads, decides, and acts — handling the compliance-sensitive, document-heavy workflows your team currently does manually, with a full audit trail built in."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {[
                  'Compliance-aware design',
                  'Document data extraction',
                  'Lead follow-up sequences',
                  'CRM + accounting sync',
                  'Logistics document processing',
                  'Full audit trail logging',
                ].map((cap) => (
                  <span
                    key={cap}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#F05A28]"
                    style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                  >
                    {cap}
                  </span>
                ))}
              </div>
              <p>
                Most Charlotte businesses have workflows that are half-automated. A Zapier trigger moves data, but someone still has to read the document, classify the request, route it to the right department, and generate the audit entry. AI workflow automation handles all of that — including the intelligence layer that Zapier can&apos;t. And for Charlotte&apos;s financial and healthcare industries, every automated action is logged with a full, reviewable audit trail.
              </p>

              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[
                  { value: '40–65%', label: 'Manual time saved' },
                  { value: '60s', label: 'Lead response' },
                  { value: '2–4mo', label: 'Payback period' },
                ].map((b) => (
                  <div
                    key={b.value}
                    className="rounded-xl border border-fj-neutral-200 bg-white px-3 py-4 text-center shadow-sm"
                  >
                    <p
                      className="fj-display font-bold text-[#F05A28]"
                      style={{ fontSize: '1.375rem', lineHeight: 1, letterSpacing: '-0.03em' }}
                    >
                      {b.value}
                    </p>
                    <p
                      className="mt-1.5 font-fj-mono font-medium uppercase text-fj-neutral-400"
                      style={{ fontSize: '0.6875rem', letterSpacing: '0.07em' }}
                    >
                      {b.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-l-2 border-[#F05A28] pl-5 py-1" aria-hidden>
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.1875rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  Charlotte&apos;s compliance requirements aren&apos;t a barrier to automation. They&apos;re exactly what structured AI automation is built for.
                </p>
              </div>
              <p>
                The workflows that consume the most time — document processing, compliance routing, lead follow-up, data sync — are also the most predictable. They run the same steps, just with different inputs each time. AI workflow automation handles those steps automatically, scales with your volume, and maintains the audit trail that Charlotte&apos;s regulated industries require.
              </p>

              <div className="grid grid-cols-2 gap-2" aria-hidden>
                {[
                  'Banking & fintech',
                  'Logistics & supply chain',
                  'Healthcare systems',
                  'Manufacturing',
                  'Professional services',
                  'E-commerce brands',
                ].map((ind) => (
                  <div
                    key={ind}
                    className="flex items-center gap-2.5 rounded-lg border border-fj-neutral-200 bg-white px-3.5 py-2.5"
                  >
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F05A28]" />
                    <p
                      className="font-fj-body font-medium text-fj-neutral-600"
                      style={{ fontSize: '0.8125rem' }}
                    >
                      {ind}
                    </p>
                  </div>
                ))}
              </div>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  How AI Workflow Automation Works
                </p>
              </div>
              <div className="px-7 pt-6 pb-2">
                {([
                  {
                    step: '01',
                    title: 'A trigger fires',
                    desc: 'Form submission, email received, document uploaded, new CRM record, scheduled time — any defined event starts the workflow.',
                  },
                  {
                    step: '02',
                    title: 'AI reads and decides',
                    desc: 'GPT-4o or Claude reads the input — including unstructured documents, PDFs, and compliance forms — and decides what to do next based on content.',
                  },
                  {
                    step: '03',
                    title: 'Takes multi-step action',
                    desc: 'Updates your CRM, routes a document for approval, syncs data to your ERP or accounting system, sends a follow-up, generates an audit log entry — or all of the above.',
                  },
                  {
                    step: '04',
                    title: 'Logs and notifies on exceptions',
                    desc: 'Every run is logged with full audit trail. If a step fails or hits a compliance edge case, your team is notified via Slack or email — and the item is queued for human review.',
                  },
                ] as const).map((item, i, arr) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex shrink-0 flex-col items-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F05A28] font-fj-mono text-[11px] font-bold text-white">
                        {item.step}
                      </div>
                      {i < arr.length - 1 && (
                        <div
                          className="my-1.5 w-px bg-fj-neutral-200"
                          style={{ minHeight: '28px', flex: '1 0 auto' }}
                        />
                      )}
                    </div>
                    <div className={i < arr.length - 1 ? 'pb-5 pt-0.5' : 'pb-7 pt-0.5'}>
                      <p
                        className="font-fj-body font-semibold text-fj-ink"
                        style={{ fontSize: '0.9375rem', lineHeight: 1.3 }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="mt-1 font-fj-body text-fj-neutral-500"
                        style={{ fontSize: '0.875rem', lineHeight: 1.5 }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-body text-[0.8125rem] text-fj-neutral-400">
                  Full audit trail. Compliance-aware exception routing. Nothing runs silently.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 4. THE PROBLEM (DARK) ─────────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE PROBLEM"
          headline="Your team is processing the same compliance-sensitive documents on repeat — and it's costing more than you think."
          lead="Charlotte's financial, logistics, and healthcare industries create high-volume, document-heavy workflows. The people handling those workflows manually are your most expensive resource. AI automation handles the processing — so your people handle the decisions."
          pillars={[
            {
              icon: '📋',
              title: 'Compliance workflows need precision — not manual effort',
              body: 'Financial and healthcare workflows in Charlotte don\'t just need to be done — they need to be done correctly, documented, and auditable. Every time a human processes a compliance document manually, there\'s a risk of missed fields, routing errors, and gaps in the audit trail. AI automation handles the extraction, validation, routing, and logging with the consistency that compliance requires — and flags anything that doesn\'t fit the expected pattern for human review.',
            },
            {
              icon: '📦',
              title: 'Charlotte\'s logistics volume is growing faster than headcount can keep up',
              body: 'Charlotte is a major Southeast distribution hub. Shipping document volume grows with each new client and contract. Manual document processing — extracting data from bills of lading, syncing carrier updates, routing delivery exceptions — scales with headcount. AI automation processes documents in seconds, regardless of volume, without a proportional increase in staff.',
            },
            {
              icon: '💸',
              title: 'Charlotte agency rates reflect Uptown overhead, not output',
              body: 'A Charlotte automation agency building in Uptown or South End will quote $15,000–$50,000+ for the same workflow FactoryJet delivers starting at $4,000. The difference is our engineering team is specialized — serving US businesses for 25 years, without the Charlotte overhead, without compromising the quality of the compliance design or the integration architecture.',
            },
          ]}
        />

        {/* ── 5. CHARLOTTE INDUSTRIES ──────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="INDUSTRIES WE SERVE IN CHARLOTTE"
          headline="AI Workflow Automation Built for Charlotte's Most Workflow-Intensive Industries"
          lead="Charlotte's economy creates specific automation opportunities across financial services, logistics, healthcare, and manufacturing. We build automations with Charlotte market context, compliance-aware design, and the integrations each industry actually uses."
          sectors={CHARLOTTE_INDUSTRIES}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Strategy Call to Live Automation in 2–6 Weeks"
          lead="A structured 5-stage process that keeps you informed at every step and delivers working automation — not a slide deck about automation."
          stages={CHARLOTTE_JOURNEY_STAGES}
          closingNote="5 STAGES · 2–6 WEEKS TO LAUNCH · WEEKLY DEMOS THROUGHOUT"
        />

        {/* ── 7. MARKET STATS ──────────────────────────────────────────────── */}
        <div className="bg-fj-neutral-50">
          <BoringStatsRow stats={MARKET_STATS} align="center" />
        </div>

        {/* ── 8. ROI STATS ─────────────────────────────────────────────────── */}
        <div className="bg-fj-neutral-50">
          <BoringStatsRow stats={ROI_STATS} align="center" />
        </div>

        {/* ── 9. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Charlotte Agency vs. DIY Tool vs. Freelancer"
          lead="The honest breakdown: what you actually get, at what price, and how fast."
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
        />

        {/* ── 10. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="PRICING"
            headline="Transparent, Fixed-Price AI Workflow Automation for Charlotte Businesses"
            lead="No hourly billing. No scope creep surprises. Every tier includes a fixed scope, a fixed price, and a delivery timeline we stand behind."
            tiers={PRICING_TIERS}
            footnote="All prices in USD. Custom enterprise scopes quoted after a discovery call. Monthly retainer options available. You own all automation code and workflow data."
          />
        </div>

        {/* ── 11. WHY FACTORYJET (DARK) ────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="We're not an Uptown Charlotte agency with South End rates. That's the whole point."
          lead="We're a 25-year-old software company that has built 500+ production systems for real businesses. The automations we build don't live in a demo — they run in production, processing real compliance documents, routing real leads, and syncing real data every day."
          pillars={[
            {
              icon: '⚡',
              title: 'Speed without cutting corners',
              body: 'A Charlotte automation agency has account managers, coordinators, and a sales team to keep fed. We don\'t. When you brief us, an engineer reads it — not an account manager. That\'s why our timelines are weeks, not quarters. And why our price is significantly lower.',
            },
            {
              icon: '🔐',
              title: 'Compliance depth from day one',
              body: 'We don\'t bolt on audit trails after the fact. Every workflow we build for Charlotte\'s financial and healthcare clients includes structured logging, least-privilege data access, exception routing to human review, and documentation your compliance team can actually audit. For sensitive environments, we deploy on self-hosted infrastructure so data stays in your control.',
            },
            {
              icon: '🔒',
              title: 'You own everything. Always.',
              body: 'No vendor lock-in, no SaaS subscriptions, no proprietary platforms you can\'t leave. We deliver the full automation codebase, all API credentials, and documentation. If you outgrow us or want to take it in-house, you walk away with an asset — not a dependency.',
            },
          ]}
        />

        {/* ── 12. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything Charlotte Businesses Ask Before Building AI Workflow Automation"
          lead="No jargon. No runaround. The questions we get on every Charlotte strategy call — answered straight."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ── 13. FINAL CTA ────────────────────────────────────────────────── */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="READY TO START"
            headline="Book a 30-Minute Workflow Automation Strategy Call"
            sub="We'll map your highest-volume workflows, identify where AI automation would make the biggest difference for your Charlotte business — including any compliance and audit trail requirements — and give you a fixed-price estimate before you commit to anything."
            primaryCta={{ label: 'Get a Quote', modal: true, region: 'us' }}
            secondaryCta={{ label: 'See All AI Services', href: '/us/services' }}
            objectionHandler="Most Charlotte clients see full ROI within one quarter. Free call, fixed price, no hidden fees."
          />
        </div>

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
