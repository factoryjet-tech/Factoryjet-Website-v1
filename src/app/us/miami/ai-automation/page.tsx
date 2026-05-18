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
  title: 'AI Workflow Automation for Miami FL Businesses | FactoryJet',
  description:
    'FactoryJet builds custom AI workflow automation for Miami small businesses — lead nurturing, invoice processing, hospitality booking flows, bilingual customer outreach, and data sync. Cut 40–65% of manual task time. Starting at $4,000. Free strategy call.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Workflow Automation for Miami FL Businesses | FactoryJet',
    description:
      'Custom AI workflow automation for Miami businesses. Built on n8n, Make.com, and LangChain. 60–70% cheaper than Miami automation agencies. Free strategy call.',
    url: 'https://factoryjet.com/us/miami/ai-automation',
    images: [
      {
        url: 'https://factoryjet.com/images/us/miami/hero-miami.webp',
        width: 1200,
        height: 800,
        alt: 'FactoryJet - AI Workflow Automation for Miami FL Businesses',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Workflow Automation for Miami FL Businesses | FactoryJet',
    description:
      'Custom AI workflow automation for Miami FL businesses. 60–70% cheaper than local agencies. Free strategy call.',
    images: ['https://factoryjet.com/images/us/miami/hero-miami.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/miami/ai-automation',
    languages: usCityAIAlternates['miami-ai-automation'],
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
      name: 'What is AI workflow automation for a Miami business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI workflow automation connects your business tools and uses artificial intelligence to execute multi-step processes without manual intervention. For Miami businesses, this means automating lead follow-up sequences in English and Spanish, processing hospitality and event booking requests, syncing data between your CRM and accounting tools, routing customer inquiries by language and department, and generating reports from multiple systems — so your team focuses on the relationships and deals that require human judgment.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does AI workflow automation help Miami businesses specifically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Miami\'s business environment has three characteristics that make AI automation especially valuable: First, the bilingual market — a significant portion of Miami\'s customers and business partners communicate in Spanish, and AI automation handles bilingual workflows natively. Second, the hospitality and events economy runs around the clock with high-volume booking, reservation, and logistics workflows that repeat thousands of times per year. Third, Miami\'s international business corridor creates cross-border data and invoicing workflows that are ideal for intelligent automation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kinds of workflows does FactoryJet automate for Miami businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Best-fit workflows for Miami businesses: lead follow-up and bilingual nurturing sequences (automated by language and source), hospitality booking and event logistics coordination, invoice and payment processing (extracting data from PDFs, routing for approval), CRM and accounting system sync (QuickBooks, Xero, Salesforce, HubSpot), customer inquiry routing by language and department, report generation from multiple data sources, and restaurant and hotel reservation management. Any workflow your team runs more than five times per week and involves reading something or making a simple decision is a candidate.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does AI workflow automation cost for a Miami business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet\'s AI workflow automation starts at $4,000 for a focused single-workflow build. The Growth tier at $10,000 covers a multi-workflow automation platform connecting 3–5 systems with an operations dashboard and 30-day support — the most popular option for Miami SMBs. Enterprise automation with complex business logic, multi-language workflows, and international integrations starts at $20,000. All prices are 60–70% lower than comparable Miami or national automation agencies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI workflow automation handle bilingual workflows in English and Spanish?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We build bilingual automation workflows that detect the language of an inbound message or document and route accordingly — responding in English or Spanish, classifying content correctly, and triggering the right workflow branch. For Miami businesses with significant Spanish-speaking customer bases, this eliminates the manual sorting and translation overhead that slows down customer response times and creates errors.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI automation connect to Miami hospitality PMS systems, QuickBooks, or freight platforms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — AI workflow automation integrates with the platforms Miami businesses run on. Common connections include Cloudbeds, Mews, and Opera PMS for hospitality, QuickBooks and Xero for accounting, HubSpot and Salesforce for CRM, Shopify for e-commerce, and TMS and ERP platforms for logistics and trade. Most Miami businesses are on platforms we\'ve integrated before, which means faster deployment and fewer surprises. We confirm compatibility during discovery before quoting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will bilingual automation work correctly for Miami workflows that mix English and Spanish in the same message?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — GPT-4o and Claude handle code-switching natively, which is common in Miami\'s bilingual business environment. The automation classifies and routes correctly even when messages mix English and Spanish in the same sentence. During staging, we test specifically against Miami-typical language patterns — hospitality, trade, and professional services vocabulary in both languages. Correct bilingual routing is part of our acceptance criteria before any automation goes live.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a payment plan for Miami AI automation projects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet uses milestone-based payments. For the $4,000 Starter tier: 50% at kickoff and 50% at delivery. For Growth ($10,000) and Enterprise ($20,000) tiers: 40% at kickoff, 40% at staging approval, 20% at launch. Payments align with working automations you\'ve tested — not with calendar dates. No large upfront commitment before you\'ve seen the Miami AI automation running on your real bilingual business data.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Workflow Automation — Miami, FL',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: {
    '@type': 'City',
    name: 'Miami',
    containedInPlace: {
      '@type': 'State',
      name: 'Florida',
    },
  },
  serviceType: 'AI Workflow Automation',
  description:
    'Custom AI workflow automation for Miami FL small businesses. Specializing in bilingual lead automation, hospitality booking flows, invoice processing, CRM sync, and multi-system data automation built on n8n, Make.com, and LangChain.',
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
      description: 'Complex business logic automation with multi-language support, international integrations, and compliance requirements.',
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const MIAMI_INDUSTRIES = [
  {
    name: 'Hospitality, Hotels & Tourism',
    description:
      'Miami\'s hospitality economy is enormous and workflow-intensive. AI automation handles reservation confirmation sequences, group booking coordination, vendor invoice processing, guest communication follow-ups, review request sequences, and occupancy reporting — eliminating the repetitive manual work that costs hospitality teams hours per day.',
    example: 'Hotel groups reduce reservation admin by 4–6 hours per day with workflow automation.',
    linkLabel: 'Talk to our team',
    linkHref: '/contact',
  },
  {
    name: 'Real Estate & Property Management',
    description:
      'Miami real estate is one of the most active and transaction-heavy markets in the US. AI automation handles lead follow-up sequences from listings and ads, document collection and routing for closings, lease renewal reminders and workflows, maintenance request triage, and cross-system sync between your CRM, property management software, and accounting tools.',
    example: 'Real estate teams close 20–30% more deals with faster, automated follow-up sequences.',
    linkLabel: 'See how it works',
    linkHref: '/contact',
  },
  {
    name: 'Restaurants & Food & Beverage',
    description:
      'Miami\'s restaurant and F&B scene is competitive and high-volume. AI automation handles reservation and event booking confirmation flows, vendor invoice processing and approval routing, catering inquiry workflows, supplier payment scheduling, and daily sales reporting from your POS system — cutting hours of back-office work that doesn\'t need a person to do it.',
    example: 'Restaurant groups reclaim 3–5 hours per day of back-office automation.',
    linkLabel: 'Book a strategy call',
    linkHref: '/contact',
  },
  {
    name: 'International Trade & Logistics',
    description:
      'Miami is a gateway for Latin American trade. Freight forwarders, importers, exporters, and logistics companies use AI automation to process shipping documents, extract data from bills of lading and commercial invoices, route compliance approvals, sync tracking data across systems, and generate regulatory reports — without a team manually handling every document.',
    example: 'Logistics companies process documents 70% faster with AI extraction and routing.',
    linkLabel: 'Get a quote',
    linkHref: '#pricing',
  },
  {
    name: 'Professional Services & Finance',
    description:
      'Miami\'s growing financial and professional services sector — wealth management, accounting firms, law firms, and consultants serving Latin American clients — uses AI automation to handle client onboarding workflows, document collection and routing, billing and invoice processing, compliance reporting, and bilingual client communication sequences.',
    example: 'Professional services firms recover 15–20 hours per week of manual process time.',
    linkLabel: 'Learn more',
    linkHref: '/contact',
  },
  {
    name: 'Retail & E-Commerce Brands',
    description:
      'Miami-based DTC and retail brands with diverse, multilingual customer bases use AI automation to handle order processing workflows, inventory sync across channels, bilingual customer follow-up sequences, return and refund processing, and marketing performance reporting — creating a reliable operational backbone that scales with revenue.',
    example: 'E-commerce brands process orders and sync inventory 60% faster with automation.',
    linkLabel: 'See pricing',
    linkHref: '#pricing',
  },
];

const MIAMI_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'A 45-minute call where we map your highest-value workflows, document the decision logic, and identify integration points — including any bilingual or multi-language requirements specific to your Miami business. We define success before a line is written.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We specify the workflow logic, exception handling, data transformations, and language routing. You approve the design document before we build — including how Spanish and English content is handled if applicable.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'We develop and test in a staging environment with weekly demos. You see the automation working against real business scenarios during the build — not just at the end.',
  },
  {
    number: '04',
    title: 'Validate',
    description:
      'We run the automation against real business scenarios from your actual workflow, tune edge case handling, and verify bilingual routing performs correctly across all expected input types.',
  },
  {
    number: '05',
    title: 'Deploy & Train',
    description:
      'Live launch with monitoring, team training, and a 30-day support window. Your operations team sees every workflow run and exception in the monitoring dashboard — nothing runs silently.',
  },
];

const ROI_STATS = [
  {
    value: '40–65%',
    label: 'reduction in manual task time across FactoryJet workflow automation deployments',
    microcopy: 'recovered and redirected to growth work',
    categoryLabel: 'TIME SAVED',
  },
  {
    value: '60s',
    label: 'automated lead follow-up response vs. hours waiting for a sales rep — direct pipeline impact',
    microcopy: 'faster follow-up directly increases qualified pipeline',
    categoryLabel: 'LEAD SPEED',
  },
  {
    value: '60–70%',
    label: 'cheaper than a comparable Miami or US automation agency',
    microcopy: '25+ years experience, US-caliber output',
    categoryLabel: 'COST ADVANTAGE',
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
    microcopy: 'most Miami clients recover build cost within one quarter',
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
  { label: 'Miami Automation Agency' },
  { label: 'DIY Tool (Zapier, Make)' },
  { label: 'Freelancer' },
] as const;

const COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: [
      '$4,000',
      '$15,000–$45,000',
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
    feature: 'Bilingual (English + Spanish) workflow support',
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
      'A single focused workflow automation — lead follow-up, invoice processing, or a specific data sync. Perfect for Miami businesses automating their first workflow.',
    features: [
      'One workflow automation (lead nurture, invoice, or data sync)',
      'AI decision layer (classify, extract, route — not just move data)',
      'Integration with up to 3 platforms via API or webhook',
      'English and Spanish language support where applicable',
      'Error handling with Slack or email failure notifications',
      'Monitoring dashboard showing every workflow run',
      '14-day post-launch support window',
    ],
    cta: { label: 'Book a Free Strategy Call', modal: true as const, region: 'us' as const },
  },
  {
    name: 'Growth',
    priceRange: 'From $10,000',
    description:
      'A multi-workflow automation platform connecting 3–5 systems with an operations dashboard and 30-day support. The most popular option for Miami SMBs ready to automate multiple processes.',
    features: [
      'Up to 5 distinct workflow automations',
      'Integration with 3–5 platforms (CRM, accounting, hospitality, logistics)',
      'AI reasoning layer for document extraction, classification, and routing',
      'Bilingual workflow support (English + Spanish) where needed',
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
      'Complex business logic automation with multi-language support, international system integrations, compliance requirements, and a dedicated engineering partner. Ideal for Miami trade, hospitality, and financial services companies.',
    features: [
      'Unlimited workflow development within agreed scope',
      'International and cross-border system integrations',
      'Multi-language workflow support (English, Spanish, Portuguese)',
      'Custom AI decision logic for complex document types',
      'Compliance-aware design for regulated industries',
      'Advanced analytics with workflow performance dashboards',
      'Dedicated engineering point of contact',
      '90-day post-launch support and iteration window',
    ],
    cta: { label: 'Schedule an Enterprise Call', modal: true as const, region: 'us' as const },
  },
] as const;

/* ─── FAQ categories ─────────────────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'what-is',  label: 'What Is AI Automation' },
  { key: 'miami',    label: 'AI Automation in Miami' },
  { key: 'process',  label: 'Process & Timeline' },
  { key: 'pricing',  label: 'Pricing & ROI' },
  { key: 'trust',    label: 'Trust & Results' },
];

/* ─── FAQ items — 21 Q-A pairs, Miami / bilingual focused ───────────────── */
const FAQ_ITEMS = [

  /* ── What Is AI Workflow Automation ── */
  {
    category: 'what-is',
    question: 'What is AI workflow automation?',
    answer:
      'AI workflow automation connects your business tools and uses artificial intelligence to execute multi-step processes without manual intervention. Unlike basic Zapier-style automation that just moves data between apps, AI workflow automation adds an intelligence layer: it can read an email and decide what type of request it is, extract key data from an invoice PDF, classify a customer inquiry and route by language or department, write a draft response, or make a branching decision based on the content of a document. It handles the workflows that have too many edge cases for simple if-this-then-that rules.',
  },
  {
    category: 'what-is',
    question: 'How is AI workflow automation different from Zapier or Make.com?',
    answer:
      'Zapier and Make.com route data between apps when specific triggers fire — they\'re great for simple, predictable data moving. AI workflow automation adds a layer of intelligence on top: it reads an email and classifies it, extracts structured data from an unstructured document, makes a branching decision based on content, or writes a personalized response. For Miami businesses with complex hospitality, bilingual, or trade workflows, that intelligence layer handles the edge cases that Zapier misses.',
  },
  {
    category: 'what-is',
    question: 'What kinds of workflows can AI automate for my business?',
    answer:
      'Best-fit workflows: lead follow-up and nurturing sequences (triggered by form fills, event attendance, or behavioral signals), invoice and document processing (extract data from PDFs, route for approval), CRM and accounting system sync (QuickBooks, Xero, HubSpot, Salesforce), customer inquiry routing by language and department, report generation from multiple data sources, hospitality booking coordination, vendor payment scheduling, and employee onboarding task sequences. If your team does it more than five times per week and it involves reading something or making a simple decision, it can probably be automated.',
  },
  {
    category: 'what-is',
    question: 'What tools does FactoryJet use to build workflow automation?',
    answer:
      'We build on n8n and Make.com for workflow orchestration, GPT-4o and Claude for the AI reasoning layer, Python scripts for complex data transformation, and LangChain for multi-step AI decision chains. We choose the stack based on your workflow complexity, data sensitivity, self-hosting preferences, and language requirements. n8n gives a self-hosted option with full audit trails; Make.com is faster to deploy for simpler multi-app workflows.',
  },

  {
    category: 'what-is',
    question: 'Can AI automation connect to Miami-specific tools like hospitality PMS systems, QuickBooks, or freight platforms?',
    answer:
      'Yes — AI workflow automation integrates with the platforms Miami businesses run on. Common connections include Cloudbeds, Mews, and Opera PMS for hospitality, QuickBooks and Xero for accounting, HubSpot and Salesforce for CRM, Shopify for e-commerce, and TMS and ERP platforms for logistics and trade operations. Most Miami businesses are on platforms we\'ve integrated before, which means faster deployment and fewer surprises. We confirm compatibility during the discovery session before quoting your project.',
  },

  /* ── AI Automation in Miami ── */
  {
    category: 'miami',
    question: 'Why is Miami a strong market for AI workflow automation?',
    answer:
      'Three Miami-specific factors make automation especially valuable. First, the bilingual business environment — a large portion of Miami\'s customers and partners communicate in Spanish, creating workflow complexity (sorting, routing, responding) that automation handles natively. Second, Miami\'s hospitality, real estate, and logistics industries are workflow-intensive by nature — high-volume, repeating processes that are exactly what AI automation is designed for. Third, Miami\'s international business corridor creates cross-border document and data workflows that are ideal for AI extraction and processing.',
  },
  {
    category: 'miami',
    question: 'Can AI workflow automation handle English and Spanish workflows?',
    answer:
      'Yes — bilingual automation is a core capability we build for Miami clients. The automation can detect the language of an inbound email, form submission, or document, route it to the correct workflow branch, respond in the appropriate language, and classify content correctly regardless of which language it\'s written in. For Miami businesses with Spanish-speaking customer bases, this eliminates the manual sorting and translation overhead that slows response times and creates errors.',
  },
  {
    category: 'miami',
    question: 'Which Miami industries benefit most from AI workflow automation?',
    answer:
      'Highest-impact industries in Miami: Hospitality and hotels (booking confirmation workflows, vendor invoice processing, guest communication sequences), Real estate (lead follow-up sequences, document collection, closing coordination), Restaurants and F&B (reservation and event booking workflows, supplier payment routing, daily POS reporting), International trade and logistics (shipping document processing, bill of lading extraction, compliance routing), Professional services and finance (client onboarding, billing automation, compliance reporting), and E-commerce brands with multilingual customer bases.',
  },
  {
    category: 'miami',
    question: 'Can AI automation handle international trade and logistics documents?',
    answer:
      'Yes. Miami\'s role as a gateway for Latin American trade creates specific document workflows — bills of lading, commercial invoices, certificates of origin, customs documents — that AI automation handles well. We build automations that extract structured data from these documents, validate completeness, route for approval, sync to your ERP or freight management system, and trigger follow-up tasks — reducing the manual handling that currently requires a team member to touch every document.',
  },
  {
    category: 'miami',
    question: 'How does AI automation help Miami hospitality businesses specifically?',
    answer:
      'Miami hospitality is workflow-intensive: group bookings, event coordination, vendor management, guest communication, and occupancy reporting all involve repetitive multi-step processes. AI automation handles group booking confirmation sequences, vendor invoice extraction and routing for approval, pre-arrival guest communication flows, review request sequences after checkout, and daily occupancy reporting from your PMS to leadership — eliminating hours of back-office work per day per property.',
  },

  /* ── Process & Timeline ── */
  {
    category: 'process',
    question: 'What does the AI workflow automation development process look like?',
    answer:
      'Five stages: Discover (we map your highest-value workflows, document the decision logic, identify integration points, and flag any bilingual requirements), Design (specify workflow logic, exception handling, data transformations, and language routing), Build (develop and test in a staging environment with weekly demos), Validate (run against real business scenarios and tune edge cases), and Deploy (live launch with monitoring, team training, and 30-day support). Every stage ends with a working demo.',
  },
  {
    category: 'process',
    question: 'How long does it take to build and deploy AI workflow automation?',
    answer:
      'A single focused workflow — lead follow-up automation, invoice processing, or a specific data sync — goes from kickoff to production in 2–3 weeks. Multi-workflow automation platforms connecting several systems take 4–6 weeks. Enterprise automation with complex logic, multi-language requirements, and multiple departments typically runs 8–12 weeks. Timeline depends on the number of systems involved and how well-documented your current process is.',
  },
  {
    category: 'process',
    question: 'Will I see the automation working during the build?',
    answer:
      'Yes. Weekly demos at every stage of the build. You see the automation run against real examples from your actual workflow during development — not just at launch. Most Miami clients find that seeing the automation handle their actual edge cases mid-build changes what they want it to prioritize, and we build that flexibility in.',
  },
  {
    category: 'process',
    question: 'What happens after the automation is deployed?',
    answer:
      'Every engagement includes a 30-day post-launch window. We monitor workflow execution, fix any failures, handle API changes from connected platforms, and deliver a team training session. After 30 days you can self-manage (the monitoring dashboard shows every run and exception), continue on a monthly retainer for new workflow development, or both.',
  },

  {
    category: 'process',
    question: 'Will bilingual automation work correctly for Miami workflows that mix English and Spanish in the same message?',
    answer:
      'Yes — GPT-4o and Claude handle code-switching natively, which is common in Miami\'s bilingual business environment. The automation classifies and routes correctly even when messages mix English and Spanish in the same sentence. During our staging period, we test specifically against Miami-typical language patterns — hospitality, trade, and professional services vocabulary in both languages. Correct bilingual routing is part of our acceptance criteria before any automation goes live with your real workflows.',
  },

  /* ── Pricing & ROI ── */
  {
    category: 'pricing',
    question: 'How much does AI workflow automation cost for a Miami business?',
    answer:
      'FactoryJet\'s AI workflow automation starts at $4,000 for a focused single-workflow build. The Growth tier at $10,000 covers a multi-workflow platform connecting 3–5 systems with an operations dashboard — the most popular option for Miami SMBs. Enterprise automation with complex logic, multi-language support, and international integrations starts at $20,000. All prices are 60–70% lower than comparable Miami or national automation agencies.',
  },
  {
    category: 'pricing',
    question: 'Why is FactoryJet 60–70% cheaper than Miami automation agencies?',
    answer:
      'Our engineering team brings 25+ years of focused expertise. Same quality of workflow architecture, integration engineering, and delivery — at dramatically lower labor costs. We\'ve served US businesses for 25 years. When you brief us, an engineer reads it, not an account manager. No Brickell or Wynwood office rates built into the quote.',
  },
  {
    category: 'pricing',
    question: 'What return on investment can I expect from AI workflow automation?',
    answer:
      'The most direct return is from manual hours eliminated. An invoice processing automation handling 100 invoices per week at $10,000 pays for itself in 2–3 months based on staff time replaced. Lead follow-up automation that contacts every new lead within 60 seconds typically increases qualified pipeline by 25–40%. Miami real estate and hospitality clients most often recover the build cost within one quarter.',
  },
  {
    category: 'pricing',
    question: 'Are there ongoing costs after the automation is built?',
    answer:
      'Two types: platform costs (n8n self-hosted is free; Make.com runs $9–$29/month for most SMB workflow volumes) and AI model API costs (typically $20–$100/month depending on how much AI reasoning your workflows use — paid directly to OpenAI or Anthropic). Neither is marked up by FactoryJet. Optional monthly retainer for new workflow development or ongoing support.',
  },

  {
    category: 'pricing',
    question: 'Is there a payment plan for Miami AI automation projects, or is everything due at kickoff?',
    answer:
      'FactoryJet uses milestone-based payments. For the $4,000 Starter tier: 50% at kickoff and 50% at delivery. For Growth ($10,000) and Enterprise ($20,000) tiers: 40% at kickoff, 40% at staging approval, 20% at launch. Your payments align with working automations you\'ve tested and approved — not with calendar dates. No large upfront commitment before you\'ve seen the Miami AI automation running against your real bilingual business data.',
  },

  /* ── Trust & Results ── */
  {
    category: 'trust',
    question: 'Is my business data safe in automated workflows?',
    answer:
      'We use API-level integrations and enforce least-privilege access — the automation only touches the data it needs for the specific workflow. Every run is logged with a full audit trail. For Miami financial services, healthcare, and trade clients handling sensitive customer or transaction data, we can build on self-hosted infrastructure (n8n self-hosted) so data never leaves your environment.',
  },
  {
    category: 'trust',
    question: 'What happens when an automated workflow fails or hits an edge case?',
    answer:
      'Every workflow we build has explicit error handling: if a step fails, the system logs the error, notifies your designated team member via Slack or email, and either retries automatically or queues the item for manual review. Nothing fails silently. The monitoring dashboard shows exactly where a workflow stopped and why, so your team or ours can fix it quickly.',
  },
  {
    category: 'trust',
    question: 'What results have other businesses gotten from FactoryJet workflow automation?',
    answer:
      'An invoice processing automation handling 100 invoices per week at $10,000 paid for itself in 2–3 months. A real estate team\'s lead follow-up automation increased qualified pipeline by 35% without adding sales headcount. A hospitality group reduced back-office admin by 5 hours per day per property. We share relevant case studies during a strategy call.',
  },
  {
    category: 'trust',
    question: 'Can AI automation replace our existing Zapier or Make.com workflows?',
    answer:
      'Often yes — and with added AI capability. We audit your existing automations during discovery and either migrate them to the new platform, leave simple ones in place, or rebuild them with AI decision-making added on top. We don\'t replace things that are working well just to bill more hours.',
  },
  {
    category: 'trust',
    question: 'How is FactoryJet different from a local Miami automation agency?',
    answer:
      'Three differences: price (60–70% cheaper — specialized engineers serving US businesses for 25+ years), speed (no layers between your brief and the engineer building it — weeks, not months), and SMB depth (500+ small business projects since 1999 — we understand what operations look like inside a 15-person Miami business, including the bilingual and international complexity that\'s unique to this market).',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function MiamiAIAutomationPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <Script
        id="miami-ai-automation-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="miami-ai-automation-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <SiteHeader
        navLinks={[
          { label: 'Services', href: '/us/services' },
          { label: 'AI Agents', href: '/us/services/ai-chatbot-development' },
          { label: 'AI Automation', href: '/us/services/ai-workflow-automation' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Contact', modal: true, region: 'us' },
        ]}
        cta={{ label: 'Book a Free Call', modal: true, region: 'us' }}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="AI WORKFLOW AUTOMATION · MIAMI, FL"
          headline="Miami Businesses Are Automating the Workflows That Were Eating Their Team Alive"
          lead="Miami's hospitality, real estate, and international trade economy runs on high-volume, repeating workflows. FactoryJet builds custom AI workflow automation for Miami businesses — lead nurturing, invoice processing, bilingual routing, booking coordination, and data sync — at 60–70% less than a local agency."
          primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={[
            '500+ businesses served',
            'Starting at $4,000',
            '60–70% cheaper than Miami agencies',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#F05A28]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                AI AUTOMATION IN ACTION — MIAMI
              </p>
              <p className="mt-4 font-fj-display text-[2rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                40–65% of manual process time eliminated — before the first coffee.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'New lead fills Spanish-language form → automation detects language → sends bilingual follow-up in 60 seconds',
                  'Hotel receives 80 vendor invoices weekly → automation extracts data → routes for approval → syncs to QuickBooks',
                  'Real estate deal closes → automation triggers document collection → notifies title → updates CRM automatically',
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
                  All three running automatically — no manual intervention required.
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
          headline="What Is AI Workflow Automation — and Why Miami Businesses Need It Now"
          lead="AI workflow automation is not just Zapier with more steps. It's an intelligent layer that reads, decides, and acts — handling the workflows your team currently does manually, in both English and Spanish."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {[
                  'Bilingual workflow routing',
                  'Invoice data extraction',
                  'Lead follow-up sequences',
                  'CRM + accounting sync',
                  'Document processing',
                  'Error handling built-in',
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
                Most Miami businesses have workflows that are half-automated. A Zapier trigger moves data, but someone still has to read the document, classify the request, route it to the right person, and send the right follow-up. AI workflow automation handles all of that — including the intelligence layer that Zapier can&apos;t. And for Miami&apos;s bilingual market, it handles English and Spanish workflows without a human in the middle.
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
                  Miami&apos;s bilingual economy isn&apos;t a challenge for AI automation. It&apos;s exactly where it performs best.
                </p>
              </div>
              <p>
                The workflows that take the most time — invoice processing, lead follow-up, booking coordination, data sync — are also the most predictable. They run the same steps, just with different inputs each time. AI workflow automation handles those steps automatically, scales with your volume, and never misses the Spanish-language lead that comes in on a Saturday afternoon.
              </p>

              <div className="grid grid-cols-2 gap-2" aria-hidden>
                {[
                  'Hospitality & hotels',
                  'Real estate firms',
                  'Restaurants & F&B',
                  'International trade',
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
                    desc: 'Form submission, email received, invoice uploaded, new CRM record, scheduled time — any defined event starts the workflow.',
                  },
                  {
                    step: '02',
                    title: 'AI reads and decides',
                    desc: 'GPT-4o or Claude reads the input — even unstructured documents or mixed-language content — and decides what to do next.',
                  },
                  {
                    step: '03',
                    title: 'Takes multi-step action',
                    desc: 'Updates your CRM, sends a personalized follow-up in the right language, routes a document for approval, syncs data to another system — or all of the above.',
                  },
                  {
                    step: '04',
                    title: 'Logs and notifies on exceptions',
                    desc: 'Every run is logged. If a step fails or hits an edge case, your team is notified via Slack or email with full context.',
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
                  Full audit trail. Bilingual-capable. Nothing runs silently.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 4. THE PROBLEM (DARK) ─────────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE PROBLEM"
          headline="Your team is doing the same workflows on repeat — in two languages — and it's costing more than you think."
          lead="Miami's business complexity is real: bilingual operations, hospitality volume, international trade documentation. The workflows that handle this complexity are eating your team's time. AI automation gives it back."
          pillars={[
            {
              icon: '🌐',
              title: 'Bilingual workflows are twice the manual work',
              body: 'When a Spanish-language lead comes in, someone has to sort it, translate the context, route it to the right person, and draft a response in Spanish. When it comes in at 6 p.m. on Friday, it waits until Monday. AI automation detects the language, routes correctly, and sends a personalized response in Spanish within 60 seconds — any time, any day.',
            },
            {
              icon: '📄',
              title: 'Document-heavy industries are perfect automation candidates',
              body: 'Miami hospitality, real estate, and trade businesses run on documents — invoices, contracts, booking forms, shipping documents, compliance paperwork. Each one requires someone to read it, extract key data, and move it somewhere. AI automation handles this extraction, validation, and routing automatically — processing documents faster and more accurately than manual review.',
            },
            {
              icon: '💸',
              title: 'Miami agency rates are among the highest in Florida',
              body: 'A Miami automation agency building at Brickell rates will quote $15,000–$45,000+ for the same workflow FactoryJet delivers starting at $4,000. The difference is our engineering team is specialized — serving US businesses for 25 years, without the South Florida overhead, without compromising the quality of the integration architecture or the AI design.',
            },
          ]}
        />

        {/* ── 5. MIAMI INDUSTRIES ──────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="INDUSTRIES WE SERVE IN MIAMI"
          headline="AI Workflow Automation Built for Miami's Most Workflow-Intensive Industries"
          lead="Miami's economy creates specific automation opportunities. We build automations with Miami market context, bilingual support, and the integrations each industry actually uses."
          sectors={MIAMI_INDUSTRIES}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Strategy Call to Live Automation in 2–6 Weeks"
          lead="A structured 5-stage process that keeps you informed at every step and delivers working automation — not a slide deck about automation."
          stages={MIAMI_JOURNEY_STAGES}
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
          headline="FactoryJet vs. Miami Agency vs. DIY Tool vs. Freelancer"
          lead="The honest breakdown: what you actually get, at what price, and how fast."
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
        />

        {/* ── 10. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="PRICING"
            headline="Transparent, Fixed-Price AI Workflow Automation for Miami Businesses"
            lead="No hourly billing. No scope creep surprises. Every tier includes a fixed scope, a fixed price, and a delivery timeline we stand behind."
            tiers={PRICING_TIERS}
            footnote="All prices in USD. Custom enterprise scopes quoted after a free strategy call. Monthly retainer options available. You own all automation code and workflow data."
          />
        </div>

        {/* ── 11. WHY FACTORYJET (DARK) ────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="We're not a Miami agency with Brickell rates. That's the whole point."
          lead="We're a 25-year-old software company that has built 500+ production systems for real businesses. The automations we build don't live in a demo — they run in production, processing real invoices, routing real leads, and syncing real data every day."
          pillars={[
            {
              icon: '⚡',
              title: 'Speed without cutting corners',
              body: 'A Miami automation agency has account managers, coordinators, and a sales team to keep fed. We don\'t. When you brief us, an engineer reads it — not an account manager. That\'s why our timelines are weeks, not quarters. And why our price is 60–70% lower.',
            },
            {
              icon: '💡',
              title: 'Bilingual workflow depth',
              body: 'We\'ve built bilingual automation workflows for businesses serving Spanish and English markets since long before AI made it easy. We know the routing edge cases, the document classification challenges, and the compliance considerations that are specific to Miami\'s international business environment.',
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
          headline="Everything Miami Businesses Ask Before Building AI Workflow Automation"
          lead="No jargon. No runaround. The questions we get on every Miami strategy call — answered straight."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ── 13. FINAL CTA ────────────────────────────────────────────────── */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="READY TO START"
            headline="Book a Free 30-Minute Workflow Automation Strategy Call"
            sub="We'll map your highest-volume workflows, identify where AI automation would make the biggest difference for your Miami business — including bilingual requirements — and give you a fixed-price estimate before you commit to anything."
            primaryCta={{ label: 'Book Your Free Strategy Call', modal: true, region: 'us' }}
            secondaryCta={{ label: 'See All AI Services', href: '/us/services' }}
            objectionHandler="Most Miami clients see full ROI within one quarter. Free call, fixed price, no hidden fees."
          />
        </div>

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
