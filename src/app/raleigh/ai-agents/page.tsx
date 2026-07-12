import type { Metadata } from 'next';
import { usCityAIAlternates } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
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
  title: 'AI Agents & Chatbots for Raleigh NC Businesses | FactoryJet',
  description:
    'Custom AI agents for Raleigh NC — customer support, lead gen & booking. Built for the Research Triangle\'s biotech economy. Fixed-price. Get a quote.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Agents & Chatbots for Raleigh NC Businesses | FactoryJet',
    description:
      'Custom AI agents for Raleigh businesses. Built on GPT-4o and Claude. fixed-price, milestone-paid. Fast delivery. Get a quote.',
    url: 'https://factoryjet.com/raleigh/ai-agents',
    images: [
      {
        url: 'https://factoryjet.com/images/us/raleigh/hero-raleigh.webp',
        width: 1200,
        height: 800,
        alt: 'FactoryJet - AI Agents for Raleigh NC Businesses',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agents & Chatbots for Raleigh NC Businesses | FactoryJet',
    description:
      'Custom AI agents for Raleigh NC businesses. fixed-price, milestone-paid. Get a quote.',
    images: ['https://factoryjet.com/images/us/raleigh/hero-raleigh.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/raleigh/ai-agents',
    languages: usCityAIAlternates['raleigh-ai-agents'],
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
      name: 'What is an AI agent for a Raleigh business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI agent is software that handles multi-step customer interactions autonomously — answering questions, qualifying leads, booking appointments, processing requests, and routing support tickets — using large language models like GPT-4o or Claude. For Raleigh and Research Triangle businesses in biotech, pharma, SaaS, and professional services, an AI agent responds to customers at any hour, connects to your live business systems, and handles the routine workload so your team focuses on the high-value work that drove you to the Triangle in the first place.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does an AI agent benefit Research Triangle companies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Research Triangle\'s economy — biotech, pharma, university spinouts, SaaS, and professional services — shares a common challenge: highly specialized staff spending time on repetitive customer and internal inquiries. An AI agent handles inbound questions, qualifies leads from academic and corporate partners, routes support tickets, and answers policy and service questions 24/7 — so your PhD-level staff, sales engineers, and specialists spend their time on the work that actually requires their expertise.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kinds of AI agents does FactoryJet build for Raleigh companies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We build five core types: Customer Support Agents (24/7 automated answers connected to your live systems), Lead Qualification Agents (engage and qualify inbound prospects from web, email, and events), Research & Knowledge Agents (answer policy, compliance, and product questions from internal documentation), Appointment Booking Agents (scheduling for clinics, service businesses, and professional practices), and E-Commerce Agents (order support, product guidance, returns). Raleigh biotech and SaaS companies most commonly start with lead qualification or internal knowledge agents.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does an AI agent cost for a Raleigh business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pricing is fixed-price and scoped to your build — the main drivers are the number of intents, integrations, and compliance requirements. The Starter tier is a single-purpose agent; Growth covers multi-intent agents with CRM integration, live handoff, and a conversation dashboard; and the Enterprise tier covers custom agents with compliance architecture. Every agent is quoted up front after a free discovery call, so you know the full cost before work starts — no hourly billing, no scope creep.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Raleigh-Durham area a good market for AI adoption?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — the Research Triangle is one of the most educated and technology-forward markets in the US. The concentration of PhD researchers, engineers, and technology companies means both business buyers and consumers are comfortable with AI-driven interactions. Biotech and pharma companies in the Triangle are already investing heavily in AI for internal workflows. Businesses that deploy customer-facing AI agents in this market find high acceptance rates and strong performance in lead qualification and support automation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a Raleigh AI agent connect to biotech CRMs, Salesforce, or custom research platforms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — AI agents integrate with the platforms Research Triangle companies run on. Common connections include Salesforce and HubSpot for CRM, Zendesk and Intercom for support, Calendly and Google Calendar for scheduling, Slack for internal routing, and custom APIs for proprietary biotech and SaaS platforms. For Raleigh companies on modern tech stacks, 70–80% of the integration infrastructure is already in place. We build the AI agent layer on top of what you have.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can our Raleigh compliance or legal team review the AI agent before it goes live?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — compliance review before deployment is built into every regulated-industry engagement. We run a staged testing period where your Research Triangle compliance, legal, or risk team interacts with the agent using real scenarios before any production customer conversations begin. For Raleigh biotech and healthcare clients, this includes reviewing how the agent handles sensitive topic escalation, PHI avoidance, and fallback behavior. We document everything in a format designed for internal control review.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Raleigh biotech or healthcare clients pay extra for HIPAA-aware agent configurations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No surprise add-ons. HIPAA-aware data handling, PHI avoidance, audit trail logging, and private LLM deployment options are included in our Enterprise tier — not charged as separate line items. For most Raleigh healthcare and life sciences clients, the Growth tier already covers the compliance handling they need. We scope this accurately during the discovery session so your budget commitment is clear before work starts.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Agents & Chatbot Development — Raleigh, NC',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: {
    '@type': 'City',
    name: 'Raleigh',
    containedInPlace: {
      '@type': 'State',
      name: 'North Carolina',
    },
  },
  serviceType: 'AI Agent & Chatbot Development',
  description:
    'Custom AI agents and chatbots for Raleigh NC and Research Triangle businesses. Specializing in customer support agents, lead qualification, knowledge management, and e-commerce automation built on GPT-4o and Claude.',
  
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet builds your Raleigh AI agent solution in 7 days',
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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://factoryjet.com/raleigh/ai-agents#breadcrumb',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'US AI Services', item: 'https://factoryjet.com/services/ai-agents' },
    { '@type': 'ListItem', position: 3, name: 'Raleigh', item: 'https://factoryjet.com/raleigh' },
    { '@type': 'ListItem', position: 4, name: 'AI Agents', item: 'https://factoryjet.com/raleigh/ai-agents' },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const RALEIGH_INDUSTRIES = [
  {
    name: 'Biotech & Life Sciences',
    description:
      'Research Triangle Park is one of the largest biotech clusters in the US. Biotech companies use AI agents to handle partnership inquiries, answer technical FAQ questions from academic collaborators, route clinical trial inquiries to the right team, and manage high volumes of inbound from investors and potential partners — without a specialized staff member managing the inbox.',
    example: 'Biotech teams route 60%+ of inbound inquiries automatically before staff review.',
    linkLabel: 'Talk to our team',
    linkHref: '/contact',
  },
  {
    name: 'SaaS & Technology Companies',
    description:
      'Raleigh\'s growing SaaS cluster — from Bandwidth to Pendo to homegrown startups — uses AI agents to handle trial sign-up questions, qualify inbound leads from marketing campaigns, provide onboarding guidance, route support tickets by severity, and answer billing and account questions — letting lean teams scale revenue without scaling headcount.',
    example: 'SaaS companies report 25–35% fewer first-tier support tickets within 60 days.',
    linkLabel: 'See how it works',
    linkHref: '/contact',
  },
  {
    name: 'Professional & Legal Services',
    description:
      'Raleigh\'s professional services market — law firms, accounting practices, consulting firms, and financial advisors — uses AI agents to handle initial client inquiries, collect intake information, answer FAQ questions about services and fees, and schedule consultations automatically — so professionals spend their time on billable work, not inbox triage.',
    example: 'Law firms see 40–50% reduction in time spent on unqualified intake calls.',
    linkLabel: 'Book a strategy call',
    linkHref: '/contact',
  },
  {
    name: 'Healthcare & Medical Practices',
    description:
      'Raleigh\'s healthcare market — anchored by UNC Health, WakeMed, and Duke Health network practices — uses AI agents to handle appointment booking, patient intake, insurance verification FAQs, after-hours inquiries, and pre-visit instructions — filling schedule gaps from the web traffic that arrives outside business hours.',
    example: 'Medical practices fill 25–35% more appointment slots from after-hours web traffic.',
    linkLabel: 'Get a quote',
    linkHref: '#pricing',
  },
  {
    name: 'University & EdTech Adjacent',
    description:
      'The proximity of NC State, UNC Chapel Hill, and Duke creates a dense ecosystem of EdTech companies, research commercialization ventures, and continuing education providers. AI agents handle enrollment inquiries, course FAQs, application status questions, and student support at scale — without the staffing cost of a full admissions or support team.',
    example: 'EdTech companies reduce enrollment inquiry response time from hours to seconds.',
    linkLabel: 'Learn more',
    linkHref: '/contact',
  },
  {
    name: 'E-Commerce & Retail',
    description:
      'Raleigh\'s growing consumer economy — from Cameron Village to North Hills to DTC brands shipping nationally — uses AI agents connected to Shopify or WooCommerce to handle order status, returns, product questions, and restock requests automatically, deflecting the repetitive support volume that grows with every marketing campaign.',
    example: 'DTC brands report 60–70% fewer repetitive support tickets in the first 30 days.',
    linkLabel: 'See pricing',
    linkHref: '#pricing',
  },
];

const RALEIGH_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'A 45-minute call where we map your highest-volume customer interactions, review your existing tools and documentation, identify the best AI agent use case for your Raleigh business, and define what success looks like before we build anything.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We design the conversation flows, escalation logic, integration architecture, and agent behavior. You approve the design document before a line of code is written — no surprises at launch.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Engineering the agent against your tech stack with weekly demos. You test the working agent during the build — not just at the end. Feedback is incorporated before we advance to the next phase.',
  },
  {
    number: '04',
    title: 'Test & Tune',
    description:
      'We run the agent through hundreds of real customer scenarios representative of your industry, fix incorrect answers, tighten escalation thresholds, and tune the prompt until it performs reliably across your most common use cases.',
  },
  {
    number: '05',
    title: 'Deploy & Train',
    description:
      'Live launch with real-time monitoring, a conversation analytics dashboard, and a recorded training session for your team. 30-day post-launch support included. You own the code and all conversation data.',
  },
];

const ROI_STATS = [
  {
    value: '65%',
    label: 'average support ticket deflection across FactoryJet AI agent deployments',
    microcopy: 'before your team starts the day',
    categoryLabel: 'TICKET DEFLECTION',
  },
  {
    value: '<5s',
    label: 'agent response time vs. hours for a human — the biggest driver of lead close rates',
    microcopy: 'speed determines whether you get the deal',
    categoryLabel: 'RESPONSE SPEED',
  },
  {
    value: 'Fixed Price',
    label: 'milestone-paid with full code ownership — 12+ years experience, US-caliber output',
    microcopy: 'predictable from quote to launch — no scope-creep invoices',
    categoryLabel: 'PRICING MODEL',
  },
];

const MARKET_STATS = [
  {
    value: '3×',
    label: 'faster lead response via AI agent vs. email — directly linked to higher close rates',
    microcopy: 'Harvard Business Review Lead Response Study',
    categoryLabel: 'LEAD CONVERSION',
  },
  {
    value: '67%',
    label: 'of US consumers used an AI chatbot or agent for customer support in the past year',
    microcopy: 'Drift Conversational Marketing Report 2024',
    categoryLabel: 'CONSUMER ADOPTION',
  },
  {
    value: '24%',
    label: 'annual growth rate of the US AI chatbot market, projected through 2027',
    microcopy: 'Grand View Research 2024',
    categoryLabel: 'MARKET GROWTH',
  },
];

const COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Triangle AI Agency' },
  { label: 'DIY Tool (Intercom, Drift)' },
  { label: 'Freelancer' },
] as const;

const COMPARISON_ROWS = [
  {
    feature: 'Pricing model',
    values: [
      'Fixed-price, scoped up front',
      'Enterprise-level rates',
      'Ongoing SaaS fee',
      'Per-project, varies widely',
    ],
  },
  {
    feature: 'Delivery timeline',
    values: ['2–3 weeks', '2–5 months', 'Days (limited capability)', '3–6 weeks (unreliable)'],
  },
  {
    feature: 'Custom CRM / system integration',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="diy" kind="partial" />,
      <CompareIcon key="fl" kind="partial" />,
    ],
  },
  {
    feature: 'Live handoff to human agents',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="diy" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
    ],
  },
  {
    feature: 'Multi-channel (web + WhatsApp + SMS)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="diy" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
    ],
  },
  {
    feature: 'You own the code outright',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="yes" />,
    ],
  },
  {
    feature: 'No ongoing SaaS fees',
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
    feature: '12+ years of SMB domain experience',
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
    priceRange: 'Fixed-price',
    name: 'Starter',
    description:
      'One focused AI agent for your highest-impact use case. Perfect for Raleigh businesses adding their first AI agent to handle a single workflow — support, lead capture, or booking.',
    features: [
      'Single-intent agent (support, lead capture, or booking)',
      'Trained on your FAQs, docs, or product catalog',
      'Website embed widget included',
      'GPT-4o or Claude as the underlying model',
      'Admin panel to review conversations',
      'Live handoff to your email or Slack',
      '14-day post-launch support window',
    ],
    cta: { label: 'Get a Quote', modal: true as const, region: 'us' as const },
  },
  {
    priceRange: 'Fixed-price',
    name: 'Growth',
    description:
      'A multi-intent agent with deep CRM integrations and a conversation management dashboard. The most popular tier for Raleigh SMBs and Research Triangle companies serious about automation.',
    features: [
      'Multi-intent agent (support + lead gen + booking in one)',
      'CRM integration (HubSpot, Salesforce, Pipedrive, or Zoho)',
      'Live data pulls (order status, inventory, calendar)',
      'Conversation analytics dashboard',
      'Multi-channel (website + WhatsApp or SMS)',
      'Smart escalation with full transcript handoff',
      'Team training session + documentation',
      '30-day post-launch support window',
    ],
    cta: { label: 'Get a Custom Quote', modal: true as const, region: 'us' as const },
    popular: true,
  },
  {
    priceRange: 'Fixed-price',
    name: 'Enterprise',
    description:
      'A fully custom AI agent system with fine-tuning, enterprise integrations, compliance-aware architecture, and a dedicated engineering partner. Ideal for biotech, pharma, and regulated industries.',
    features: [
      'Custom LLM fine-tuning on your proprietary content',
      'Compliance-aware design (HIPAA, SOC 2, regulated data)',
      'All channels deployed simultaneously',
      'Enterprise CRM and ERP integration',
      'Private cloud deployment option',
      'Advanced analytics with conversion attribution',
      'Dedicated engineering point of contact',
      '90-day post-launch support and iteration window',
    ],
    cta: { label: 'Schedule an Enterprise Call', modal: true as const, region: 'us' as const },
  },
] as const;

/* ─── FAQ categories ─────────────────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'what-is',  label: 'What Is an AI Agent' },
  { key: 'raleigh',  label: 'AI Agents in Raleigh' },
  { key: 'process',  label: 'Process & Timeline' },
  { key: 'pricing',  label: 'Pricing & ROI' },
  { key: 'trust',    label: 'Trust & Results' },
];

/* ─── FAQ items — 21 Q-A pairs, Raleigh / Research Triangle focused ──────── */
const FAQ_ITEMS = [

  /* ── What Is an AI Agent ── */
  {
    category: 'what-is',
    question: 'What is an AI agent for a business?',
    answer:
      'An AI agent is software that handles multi-step tasks autonomously — answering customer questions, qualifying leads, booking appointments, processing orders, or routing support tickets — using large language models like GPT-4o or Claude. Unlike a chatbot that just responds to messages, an AI agent can take actions: look up live data from your CRM, update records, send follow-up emails, or trigger workflows in connected tools. For Raleigh businesses in biotech, SaaS, and professional services, it handles the routine work so your team focuses on the high-value work that requires their expertise.',
  },
  {
    category: 'what-is',
    question: 'What is the difference between an AI agent and a regular chatbot?',
    answer:
      'A chatbot is reactive — it waits for a message and responds. An AI agent is action-oriented — it can receive a trigger, make decisions based on content, take multi-step actions across connected tools, and report back. For example, a chatbot tells a lead you\'ll get back to them. An AI agent qualifies the lead, checks their company against your ICP criteria, updates your CRM, and schedules a demo call with the right sales engineer — all automatically.',
  },
  {
    category: 'what-is',
    question: 'What kinds of AI agents does FactoryJet build for Raleigh companies?',
    answer:
      'We build five core types: Customer Support Agents (24/7 automated answers connected to your live systems), Lead Qualification Agents (engage and qualify inbound prospects in real time), Knowledge & Compliance Agents (answer policy, regulatory, and product questions from internal documentation), Appointment Booking Agents (scheduling for medical practices and professional services firms), and E-Commerce Agents (order support, product guidance, returns for consumer-facing businesses). Research Triangle biotech and SaaS companies most commonly start with lead qualification or knowledge management agents.',
  },
  {
    category: 'what-is',
    question: 'Which AI models power FactoryJet agents?',
    answer:
      'We use GPT-4o (OpenAI), Claude 3.5 Sonnet (Anthropic), and Gemini (Google) depending on your use case, data sensitivity, and budget. For regulated industries in the Research Triangle — healthcare, biotech, legal — we configure the agent with strict data handling rules and can use private LLM deployments. We use Voiceflow, Botpress, and LangChain for orchestration. We pick the model that fits your workflow and compliance requirements.',
  },

  {
    category: 'what-is',
    question: 'Can a Raleigh AI agent connect to biotech CRMs, Salesforce, or custom research platforms?',
    answer:
      'Yes — AI agents integrate with the platforms Research Triangle companies run on. Common connections include Salesforce and HubSpot for CRM, Zendesk and Intercom for support, Calendly and Google Calendar for scheduling, Slack for internal team routing, and custom APIs for proprietary biotech and SaaS platforms. For Raleigh companies on modern tech stacks, 70–80% of the integration infrastructure is already in place. We build the AI agent layer on top of what you have — no rebuilding your stack.',
  },

  /* ── AI Agents in Raleigh ── */
  {
    category: 'raleigh',
    question: 'Is the Research Triangle a strong market for AI agent adoption?',
    answer:
      'Yes — Raleigh-Durham is one of the most educated and technology-forward markets in the US. The concentration of PhD researchers, engineers, and technology companies at NC State, UNC, and Duke means both business buyers and consumers are comfortable with AI-driven interactions. Biotech and pharma companies in the Triangle are already investing heavily in AI for internal workflows. Customer-facing AI agents in this market see high acceptance rates and strong performance in lead qualification and support automation.',
  },
  {
    category: 'raleigh',
    question: 'What Raleigh-specific business problems do AI agents solve?',
    answer:
      'Three Research Triangle-specific problems: First, highly specialized staff spending time on repetitive inbound — biotech researchers answering partnership FAQs, SaaS engineers handling first-tier support, lawyers doing intake triage. An AI agent handles that layer so specialists work on specialist work. Second, a booming population of new residents and business transplants discovering local services online at all hours. Third, a competitive talent market where automating the repetitive work makes your existing team more effective and easier to retain.',
  },
  {
    category: 'raleigh',
    question: 'Which Raleigh industries benefit most from AI agents?',
    answer:
      'Highest-impact industries in the Research Triangle: Biotech and life sciences (partnership inquiries, clinical trial FAQs, investor inbound), SaaS companies (lead qualification, trial onboarding, support deflection), Professional and legal services (intake automation, consultation scheduling, FAQ handling), Healthcare and medical practices (appointment booking, patient intake, after-hours inquiries), EdTech and university spinouts (enrollment inquiries, course FAQs, student support), and E-commerce and retail brands (order support, returns, product guidance).',
  },
  {
    category: 'raleigh',
    question: 'Can AI agents handle sensitive or technical content for biotech and regulated industries?',
    answer:
      'Yes, with careful design. For biotech and pharma clients, we configure AI agents to handle general inquiries, route technical questions to the right subject-matter expert, and avoid making claims outside the scope they\'re trained on. For healthcare, we design HIPAA-aware agents that handle scheduling and general information without storing PHI in the conversation layer. Compliance architecture is part of every enterprise engagement — not an afterthought.',
  },
  {
    category: 'raleigh',
    question: 'Do AI agents work for Raleigh professional services firms — law, accounting, consulting?',
    answer:
      'Yes. Professional services firms lose significant billable time on intake triage, answering FAQs about fees and services, and scheduling consultations. An AI agent handles initial contact, collects intake information, answers common questions about service scope and pricing, and books the first consultation directly to the attorney\'s or consultant\'s calendar. Firms report 40–50% reduction in time spent on unqualified intake — letting professionals spend their time on clients who are a genuine fit.',
  },

  /* ── Process & Timeline ── */
  {
    category: 'process',
    question: 'What does the AI agent development process look like?',
    answer:
      'Five stages: Discover (we map your top customer interactions, review your tools and docs, define success metrics), Design (conversation flows, escalation logic, integration architecture — you approve before we build), Build (develop and connect to your stack with weekly demos), Test & Tune (run through hundreds of real scenarios, fix errors, tighten thresholds), and Deploy (live launch with monitoring, team training, and 30-day support). Every stage ends with something you can see and test.',
  },
  {
    category: 'process',
    question: 'How long does it take to build and launch an AI agent?',
    answer:
      'A single-purpose agent — a support agent for your top 20 questions or a lead capture agent for one landing page — goes from kickoff to live in 2–3 weeks. Multi-intent agents with CRM integration take 4–5 weeks. Enterprise deployments with compliance requirements and multiple integrations run 6–10 weeks. Timeline is confirmed after the discovery session.',
  },
  {
    category: 'process',
    question: 'Will I see the agent working during the build, or just get a final delivery?',
    answer:
      'Weekly demos throughout. Every stage ends with a working demo you can test with real questions and give feedback on. Most Research Triangle clients find that seeing the agent handle actual use-case questions mid-build changes what they want it to prioritize — and we build that flexibility in. Nothing is a surprise at launch.',
  },
  {
    category: 'process',
    question: 'What happens after the AI agent launches?',
    answer:
      'Every engagement includes a 30-day post-launch window. We monitor conversation logs, fix incorrect answers, tune response quality based on real usage, and deliver a recorded training session for your Raleigh team. After 30 days you can continue on a monthly retainer or manage it yourself — the dashboard is built for non-technical operators.',
  },

  {
    category: 'process',
    question: 'Can our Raleigh compliance or legal team review the AI agent before it goes live?',
    answer:
      'Yes — compliance review before deployment is built into every regulated-industry engagement. We run a staged testing period where your Research Triangle compliance, legal, or risk team interacts with the agent using real scenarios before any production customer conversations begin. For Raleigh biotech and healthcare clients, this includes reviewing how the agent handles sensitive topic escalation, PHI avoidance, and fallback behavior. We document everything in a format designed for internal control review and audit records.',
  },

  /* ── Pricing & ROI ── */
  {
    category: 'pricing',
    question: 'How much does an AI agent cost for a Raleigh business?',
    answer:
      'Pricing is fixed-price and scoped to your build — the main drivers are the number of intents, integrations, and compliance requirements. The Starter tier is a single-purpose agent; Growth covers multi-intent agents with CRM integration, live handoff, and a conversation dashboard (the most popular option for Raleigh and Research Triangle SMBs); and the Enterprise tier covers custom agents with compliance architecture for healthcare or regulated industries. Every agent is quoted up front after a free discovery call, so you know the full cost before work starts — no hourly billing, no scope creep.',
  },
  {
    category: 'pricing',
    question: 'Why is FactoryJet fixed-price, milestone-paid?',
    answer:
      'Our engineering team brings 12+ years of focused expertise. Same quality of AI architecture, conversation design, and delivery — without the overhead that inflates traditional agency invoices. We\'ve served US businesses for 12 years. When you brief us, an engineer reads it, not an account manager. No Research Triangle Park office overhead built into the quote.',
  },
  {
    category: 'pricing',
    question: 'What return on investment can I expect from an AI agent?',
    answer:
      'The ROI case is direct. A support agent handling 65% of your tickets typically pays for itself in 2–3 months for a team answering 50+ inquiries per day. For Raleigh professional services firms, even automating 30% of intake triage pays for the agent in weeks of recovered billable hours. Lead agents that respond in under 5 seconds convert 2–5× better than email follow-up.',
  },
  {
    category: 'pricing',
    question: 'Are there ongoing costs after the agent is built?',
    answer:
      'Two types: API usage (a modest monthly cost for most Raleigh SMB agent volumes — paid directly to OpenAI or Anthropic, not marked up by us) and optionally a monthly optimization retainer. Many clients self-manage after the 30-day post-launch window. Enterprise clients with compliance requirements often retain us for ongoing monitoring.',
  },

  {
    category: 'pricing',
    question: 'Do Raleigh biotech or healthcare clients pay extra for HIPAA-aware or compliance-configured agents?',
    answer:
      'No surprise add-ons. HIPAA-aware data handling, PHI avoidance in the conversation layer, audit trail logging, and private LLM deployment options are included in the Enterprise tier — not charged as separate line items. For most Raleigh healthcare and life sciences clients, the Growth tier already covers the compliance handling they need. We scope this accurately during the discovery session so your budget commitment is clear before work starts.',
  },

  /* ── Trust & Results ── */
  {
    category: 'trust',
    question: 'Is customer data safe with an AI agent?',
    answer:
      'We use API-level integrations only — no screen scraping. We enforce least-privilege data access and implement full audit trails on every conversation. For Raleigh healthcare, legal, and biotech clients, we configure the agent to avoid storing PII and sensitive data in the chat layer, and we can use private LLM deployments for maximum control. All conversation logs are owned by you.',
  },
  {
    category: 'trust',
    question: 'What results have other businesses gotten from FactoryJet AI agents?',
    answer:
      'A SaaS company\'s lead qualification agent increased demo bookings by 40% without adding sales headcount. A professional services firm reduced unqualified intake calls by 50% in the first month. An e-commerce brand reduced support ticket volume by 68% in 30 days. A healthcare practice\'s booking agent filled 30% more appointment slots from after-hours website traffic. We share relevant case studies on a strategy call.',
  },
  {
    category: 'trust',
    question: 'Can an AI agent handle the technical complexity of biotech or SaaS products?',
    answer:
      'Yes — with proper training. The AI agent is trained on your product documentation, technical FAQs, knowledge base, and policies. It answers within the scope of what it knows and routes outside that scope to a human expert with the full conversation transcript. Most Research Triangle companies find the agent handles 60–70% of inbound inquiries accurately — and the ones it can\'t handle, it escalates correctly rather than guessing.',
  },
  {
    category: 'trust',
    question: 'How is FactoryJet different from a local Raleigh AI development agency?',
    answer:
      'Three differences: price (specialized engineers serving US businesses for 12+ years), speed (no layers between your brief and the engineer building it — weeks, not months), and SMB depth (500+ small business projects — we understand what operations look like inside a 15-person Raleigh company, not just enterprise AI theory). Research Triangle agencies charge enterprise rates. We don\'t.',
  },
  {
    category: 'trust',
    question: 'Do I need a technical team to manage the agent after launch?',
    answer:
      'No. The admin dashboard lets non-technical team members view conversation logs, update answer content, adjust escalation thresholds, and monitor performance metrics without touching code. Your operations or marketing coordinator can run it day-to-day. If something breaks because a connected platform changes its API, you contact us and we fix it.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function RaleighAIAgentsPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        id="raleigh-ai-agents-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="raleigh-ai-agents-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="raleigh-ai-agents-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        id="raleigh-ai-agents-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader
        navLinks={[
          { label: 'Services', href: '/services' },
          { label: 'AI Agents', href: '/services/ai-chatbot-development' },
          { label: 'AI Automation', href: '/services/ai-workflow-automation' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Contact', modal: true, region: 'us' },
        ]}
        cta={{ label: 'Book a Call', modal: true, region: 'us' }}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="us" source="us_raleigh_ai_agents_hero" />}
          eyebrow="AI AGENTS · RALEIGH, NC"
          headline="Research Triangle Businesses Are Automating the Work That Doesn't Require a PhD"
          lead="Raleigh's economy runs on specialized talent. FactoryJet builds custom AI agents for Raleigh businesses — customer support, lead qualification, appointment booking, and knowledge management — that handle the routine inbound so your team focuses on the high-value work that drove you to the Triangle."
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={[
            '500+ businesses served',
            'Fixed-price, scoped up front',
            'engineered for measurable outcomes',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#B23E13]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                AI AGENTS IN ACTION — RALEIGH
              </p>
              <p className="mt-4 font-fj-display text-[2rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                65% of inbound inquiries handled before your specialists see the inbox.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Biotech partner inquiry asks about licensing terms → agent routes to correct team with context collected',
                  'SaaS trial sign-up asks a pricing question at 10pm → agent answers + books a demo for Thursday',
                  'Law firm prospect asks about service scope → agent collects intake details + schedules a consultation',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#F05A28]/10 font-fj-mono text-[10px] font-bold text-[#B23E13]">
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
                  All three handled automatically — no specialist time required.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 2. TRUST STATS ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ businesses served. 12 years of building. One goal: your results."
        />

        {/* ── 3. WHAT IS AN AI AGENT ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="AI AGENTS EXPLAINED"
          headline="What Is an AI Agent — and Why Raleigh Businesses Need One Now"
          lead="An AI agent that understands what someone is asking, connects to your live business data, and takes action — is a fundamentally different product than a FAQ page or a form that sends an email to your team."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {[
                  'Answer questions instantly',
                  'Qualify leads 24/7',
                  'Route inbound to experts',
                  'Book appointments',
                  'Handle compliance-aware FAQs',
                  'Work across channels',
                ].map((cap) => (
                  <span
                    key={cap}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#B23E13]"
                    style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                  >
                    {cap}
                  </span>
                ))}
              </div>
              <p>
                Most Raleigh businesses think they already have a chatbot — because they have a live chat widget that pings someone on the team. That&apos;s not an AI agent. That&apos;s a notification. An AI agent built on GPT-4o or Claude actually understands the inbound question, knows your products and policies, and gives a complete, accurate answer in under 5 seconds — or routes to the right expert with full context collected.
              </p>

              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[
                  { value: '24/7', label: 'Always live' },
                  { value: '<5s', label: 'Response time' },
                  { value: '65%', label: 'Inquiries deflected' },
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
                  In the Research Triangle, your specialists are the asset. An AI agent makes sure they&apos;re only doing specialist work.
                </p>
              </div>
              <p>
                Raleigh is growing fast — population, business, and competition all increasing simultaneously. An AI agent handles the routine inbound so your biotech team handles biotech, your lawyers handle clients, and your SaaS engineers handle product — not first-tier support emails and FAQ inquiries.
              </p>

              <div className="grid grid-cols-2 gap-2" aria-hidden>
                {[
                  'Biotech & life sciences',
                  'SaaS & tech companies',
                  'Professional services firms',
                  'Healthcare practices',
                  'EdTech & university spinouts',
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
                  How an AI Agent Works
                </p>
              </div>
              <div className="px-7 pt-6 pb-2">
                {([
                  {
                    step: '01',
                    title: 'Customer or partner sends a message',
                    desc: 'Website widget, WhatsApp, SMS, or email — any channel your Raleigh customers and partners use.',
                  },
                  {
                    step: '02',
                    title: 'AI understands the intent',
                    desc: 'GPT-4o or Claude reads the question — even technical or industry-specific phrasing — and identifies what\'s being asked.',
                  },
                  {
                    step: '03',
                    title: 'Pulls your live data',
                    desc: 'Queries your CRM, knowledge base, calendar, help desk, or any connected tool for the relevant answer.',
                  },
                  {
                    step: '04',
                    title: 'Responds or routes to an expert',
                    desc: 'Sends an accurate answer in seconds — or routes to the right subject-matter expert with full context collected.',
                  },
                ] as const).map((item, i, arr) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex shrink-0 flex-col items-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B23E13] font-fj-mono text-[11px] font-bold text-white">
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
                  Full audit trail on every conversation. Compliance-aware by design.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 4. THE PROBLEM (DARK) ─────────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE PROBLEM"
          headline="Specialized talent is too expensive to spend on repetitive inbound."
          lead="The Research Triangle runs on expertise — biotech researchers, software engineers, lawyers, healthcare specialists. When that talent spends hours answering the same questions, the math doesn't work. An AI agent fixes the math."
          pillars={[
            {
              icon: '⏱',
              title: 'Your specialists are answering FAQ emails',
              body: 'A biotech research director answering partnership FAQ emails. A SaaS engineer handling first-tier support tickets. A lawyer triaging intake calls from unqualified prospects. These are real costs — measured in hours of specialized time that should be generating revenue, not answering questions an AI agent can handle in 4 seconds.',
            },
            {
              icon: '📉',
              title: 'After-hours inbound is going unanswered',
              body: 'Raleigh\'s growing population includes a wave of transplants and new businesses that find vendors online at all hours. A lead that submits a form at 9 p.m. and gets a response at 10 a.m. the next day has already contacted two competitors. An AI agent responds in under 5 seconds — any time of day — and captures the lead before the next business day.',
            },
            {
              icon: '💸',
              title: 'Triangle agency rates reflect Triangle costs',
              body: 'Research Triangle AI agencies have Research Triangle overhead — office space, tech wages, account management teams. The same chatbot they build at enterprise-level rates costs a fraction of that with FactoryJet, fixed-price. Specialized engineers serving US businesses for 12 years, without the RTP premium baked into every invoice.',
            },
          ]}
        />

        {/* ── 5. RALEIGH INDUSTRIES ─────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="INDUSTRIES WE SERVE IN RALEIGH"
          headline="AI Agents Built for Raleigh's Research Triangle Economy"
          lead="The Triangle's industries have distinct inbound patterns, compliance requirements, and customer expectations. We build AI agents with that specificity built in from day one."
          sectors={RALEIGH_INDUSTRIES}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Strategy Call to Live AI Agent in 2–5 Weeks"
          lead="A structured 5-stage process that keeps you informed at every step and delivers a working AI agent — not a slide deck about one."
          stages={RALEIGH_JOURNEY_STAGES}
          closingNote="5 STAGES · 2–5 WEEKS TO LAUNCH · WEEKLY DEMOS THROUGHOUT"
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
          headline="FactoryJet vs. Triangle Agency vs. DIY Tool vs. Freelancer"
          lead="The honest breakdown: what you actually get, at what price, and how fast."
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
        />

        {/* ── 10. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="PRICING"
            headline="Transparent, Fixed-Price AI Agent Development for Raleigh Businesses"
            lead="No hourly billing. No scope creep surprises. Every tier includes a fixed scope, a fixed price, and a delivery timeline we stand behind."
            tiers={PRICING_TIERS}
            footnote="All prices in USD. Custom enterprise scopes with compliance architecture quoted after a discovery call. Monthly retainer options available. You own all code and conversation data."
          />
        </div>

        {/* ── 11. WHY FACTORYJET (DARK) ────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="We're not a Research Triangle agency with RTP rates. That's exactly the point."
          lead="We're a 25-year-old software company that has built 500+ production systems for real businesses. The AI agents we build don't live in a demo — they run in production, handling real customer conversations every day."
          pillars={[
            {
              icon: '⚡',
              title: 'Speed without cutting corners',
              body: 'A Triangle AI agency has account managers, coordinators, and a sales team to keep fed. We don\'t. When you brief us, an engineer reads it — not an account manager. That\'s why our timelines are weeks, not quarters. And why our price is significantly lower.',
            },
            {
              icon: '💡',
              title: 'SMB depth across technical industries',
              body: 'We\'ve built for SaaS companies, professional services firms, healthcare practices, and research-adjacent businesses. We know where complexity lives inside a 20-person Raleigh company — the compliance edge cases, the technical knowledge base, the workflows that don\'t match the textbook. We build for that reality.',
            },
            {
              icon: '🔒',
              title: 'You own everything. Always.',
              body: 'No vendor lock-in, no SaaS subscriptions, no proprietary platforms you can\'t leave. We deliver the full codebase, all API credentials, and documentation. If you outgrow us or want to take it in-house, you walk away with an asset — not a dependency.',
            },
          ]}
        />

        {/* ── 12. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything Raleigh Businesses Ask Before Building an AI Agent"
          lead="No jargon. No runaround. The questions we get on every Research Triangle strategy call — answered straight."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ── 13. FINAL CTA ────────────────────────────────────────────────── */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="READY TO START"
            headline="Book a 30-Minute AI Agent Strategy Call"
            sub="We'll review your current inbound volume and workflows, identify where an AI agent would make the biggest difference for your Raleigh business, and give you a fixed-price estimate — before you commit to anything."
            primaryCta={{ label: 'Get a Quote', modal: true, region: 'us' }}
            secondaryCta={{ label: 'See All AI Services', href: '/services' }}
            objectionHandler="Most Raleigh clients see full ROI within 90 days. Free call, fixed price, no hidden fees."
          />
        </div>

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
