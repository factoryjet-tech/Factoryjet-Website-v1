import type { Metadata } from 'next';
import Script from 'next/script';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import CityContextSection from '@/components/v2/CityContextSection';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import PricingTiers from '@/components/v2/PricingTiers';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'AI Agent Development Services India | Custom AI Agents for Indian Businesses | FactoryJet',
  description:
    'FactoryJet builds custom AI agents for Indian businesses — WhatsApp AI, customer support automation, sales AI, and workflow bots that connect Zoho, Razorpay, Tally, and Freshdesk. Fixed price. Deployed in weeks.',
  keywords: [
    'AI agent development India',
    'AI agent company India',
    'WhatsApp AI agent India',
    'custom AI agent development India',
    'AI automation India',
    'AI chatbot development India',
    'LangChain development India',
    'Zoho AI integration India',
    'AI workflow automation India',
    'AI agent for business India',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Agent Development Services India | FactoryJet',
    description:
      'Custom AI agents, WhatsApp automation, and AI-native workflows for Indian businesses. Fixed price. Deployed in weeks — not months.',
    url: 'https://factoryjet.com/services/ai-agent-development',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - AI Agent Development Services India',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agent Development Services India | FactoryJet',
    description:
      'WhatsApp AI, customer support automation, sales agents for Indian businesses. Fixed price. Fast delivery.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-agent-development',
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
   JSON-LD Schemas
───────────────────────────────────────────────────────────────────────────── */

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an AI agent and how is it different from a chatbot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A chatbot answers questions. An AI agent takes action. A chatbot replies when someone types a message. An AI agent connects to your systems — WhatsApp, Zoho CRM, Razorpay, Tally, Freshdesk — reads inputs from multiple sources, makes decisions, and completes multi-step tasks without manual direction. It can check stock, update a CRM record, send a WhatsApp follow-up, process a GST invoice, and report back — automatically, in sequence.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does AI agent development cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet AI agents start from ₹4,00,000 for a focused single-workflow agent (WhatsApp support bot, lead qualifier, invoice processor). Most Indian businesses need the Growth tier from ₹12,00,000, which covers multiple interconnected agents, CRM/ERP integration, and a management dashboard. Enterprise multi-agent platforms start from ₹20,00,000. All prices are fixed — no hourly billing surprises.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you build AI agents that work over WhatsApp for Indian businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — WhatsApp AI is one of our most common India deployments. We build agents on Interakt, Wati, AiSensy, and Yellow.ai that qualify leads on WhatsApp, answer product questions, send order updates, book appointments, and escalate to human agents when needed. The AI reads your Shopify/WooCommerce order data, Zoho CRM, and Google Sheets in real time and responds in Hindi, English, or any regional language.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Indian business tools can your AI agents integrate with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We integrate with the full Indian business stack: Zoho CRM and Freshdesk for customer management, Razorpay and PayU for payment events, Tally ERP and Busy for accounting, Shiprocket and Delhivery for logistics, Interakt/Wati/AiSensy for WhatsApp, Exotel for IVR and voice, LeadSquared for sales pipelines, and Google Workspace. If your platform has an API or webhook, we can connect to it.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build and deploy an AI agent in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Simple single-workflow agents — a WhatsApp support bot, a lead qualifier, an invoice processor — go from kickoff to live in 2–3 weeks. Multi-workflow platforms with CRM integrations and dashboards take 4–6 weeks. Enterprise multi-agent systems run 8–12 weeks. We give you a firm timeline after the discovery call because scope drives everything.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can an AI agent handle GST and compliance workflows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We build agents that extract invoice data, validate GSTINs, calculate correct GST slabs, flag mismatches, and push data to your accounting software — eliminating hours of manual reconciliation every month. The agent creates an audit trail for every transaction it processes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my business data safe when using an AI agent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We use API-level integrations (no screen scraping), enforce least-privilege data access, and maintain full audit trails on every action. For regulated sectors — BFSI, healthcare, legal — we can deploy private LLM setups that process your data without sending it to third-party model providers. All data flows are documented during delivery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a technical team to manage the AI agent after it launches?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. We build every agent with a non-technical operator in mind. The management dashboard lets you see what the agent is doing, review flagged items, pause or resume workflows, and adjust thresholds — without touching code. We include a recorded training session in Hindi or English specific to your agent.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Agent Development Services India',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
  },
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  serviceType: 'AI Agent Development',
  description:
    'Custom AI agents, WhatsApp automation, and AI-native workflows for Indian businesses. Specialising in customer support AI, sales automation, GST compliance bots, and operations agents integrated with Zoho, Razorpay, Tally, and WhatsApp Business.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Starter AI Agent',
      price: '400000',
      priceCurrency: 'INR',
      description: 'Single-workflow AI agent for one focused Indian business problem.',
    },
    {
      '@type': 'Offer',
      name: 'Growth AI Platform',
      price: '1200000',
      priceCurrency: 'INR',
      description: 'Multi-workflow AI agent suite with CRM/ERP integrations and WhatsApp.',
    },
    {
      '@type': 'Offer',
      name: 'Enterprise AI System',
      price: '2000000',
      priceCurrency: 'INR',
      description: 'Multi-agent orchestration platform with custom LLM and private deployment.',
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const IN_AI_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'A 60-minute strategy call. We map your highest-value automation opportunities — WhatsApp overload, manual data entry, repetitive support queries — and size the ROI before a single line of code is written.',
  },
  {
    number: '02',
    title: 'Architect',
    description:
      'We design the agent flow, choose the right LLM (Claude, GPT-4o, or Gemini), map your Indian business tool stack, and deliver a technical spec you approve before we build.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      "Engineering against your stack with weekly demos. Built modularly — WhatsApp integration, CRM connectors, GST logic — so you see it working throughout and can give feedback before it's finished.",
  },
  {
    number: '04',
    title: 'Train & Test',
    description:
      'We run the agent against real business scenarios — Hindi queries, GST edge cases, peak order volumes — tune the prompts and guardrails, and stress-test until it performs reliably.',
  },
  {
    number: '05',
    title: 'Deploy & Scale',
    description:
      'Launch with monitoring, dashboards, and a recorded handover in Hindi or English. Optional monthly retainer to evolve the agent as your business grows. Your code, your keys, your call.',
  },
];

const IN_AI_STATS = [
  {
    value: '68%',
    label: 'average reduction in manual task time',
    microcopy: 'across FactoryJet AI deployments',
    categoryLabel: 'TASK AUTOMATION',
  },
  {
    value: '500M+',
    label: 'WhatsApp Business users in India — your customers are already there',
    microcopy: 'Meta India, 2024',
    categoryLabel: 'WHATSAPP REACH',
  },
  {
    value: '3.2×',
    label: 'faster customer response with AI vs. human-only workflows',
    microcopy: 'FactoryJet client data',
    categoryLabel: 'RESPONSE SPEED',
  },
];

const IN_MARKET_STATS = [
  {
    value: '₹65,000 Cr+',
    label: "India AI market projected by 2027 — fastest-growing in Asia-Pacific",
    sourceUrl: 'https://nasscom.in/ai-report-2024',
    sourceLabel: 'NASSCOM AI Report 2024',
  },
  {
    value: '67%',
    label: 'of Indian enterprises plan to expand AI adoption in the next 12 months',
    sourceUrl: 'https://www.deloitte.com/in/en/research-studies/india-ai-readiness.html',
    sourceLabel: 'Deloitte India AI Readiness',
  },
  {
    value: '72%',
    label: 'of Indian B2C businesses use WhatsApp as a primary sales channel',
    sourceUrl: 'https://meta.com/business/whatsapp-india-report-2024',
    sourceLabel: 'Meta Business India 2024',
  },
];

const IN_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Indian IT Firm' },
  { label: 'Freelancer' },
  { label: 'No-Code Tools' },
] as const;

const IN_COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: [
      '₹4,00,000',
      '₹8,00,000–₹20,00,000',
      '₹2,00,000–₹5,00,000 (unreliable)',
      '₹50,000–₹2,00,000/yr (you build it)',
    ],
  },
  {
    feature: 'Delivery timeline',
    values: ['2–6 weeks', '3–6 months', '4–8 weeks', 'Ongoing — never "done"'],
  },
  {
    feature: 'WhatsApp AI integration',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="it" kind="partial" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="nc" kind="partial" />,
    ],
  },
  {
    feature: 'Zoho / Freshdesk / Tally integration',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="it" kind="partial" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="nc" kind="no" />,
    ],
  },
  {
    feature: 'GST & Razorpay workflow automation',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="it" kind="partial" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="nc" kind="no" />,
    ],
  },
  {
    feature: 'Non-technical management dashboard',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="it" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="nc" kind="partial" />,
    ],
  },
  {
    feature: 'Fixed-price contract',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="it" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="nc" kind="yes" />,
    ],
  },
  {
    feature: 'You own the code & IP',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="it" kind="no" />,
      <CompareIcon key="fl" kind="yes" />,
      <CompareIcon key="nc" kind="no" />,
    ],
  },
  {
    feature: '30-day post-launch support',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="it" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="nc" kind="no" />,
    ],
  },
  {
    feature: '500+ SMB projects since 1999',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="it" kind="no" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="nc" kind="no" />,
    ],
  },
];

const IN_INDUSTRIES = [
  {
    name: 'D2C E-Commerce',
    description:
      'WhatsApp AI that handles order status queries, processes returns, sends Shiprocket shipping updates, and upsells on abandoned carts — integrated with your Shopify or WooCommerce store. Handles 100+ concurrent WhatsApp conversations without adding headcount.',
    example: 'D2C brands report 70%+ ticket deflection within 30 days.',
    linkLabel: 'See e-commerce AI',
    linkHref: '/services/ecommerce-development',
  },
  {
    name: 'Real Estate & PropTech',
    description:
      'AI that qualifies leads from 99acres, MagicBricks, and Housing.com, sends personalised WhatsApp follow-ups, books site visit slots, and routes hot leads to your sales team — all logged to Zoho or LeadSquared automatically.',
    example: 'Builders report 40% more site visits booked without adding telecallers.',
  },
  {
    name: 'BFSI & Fintech',
    description:
      'Lead qualification bots for loans, insurance, and investment products; GST invoice validation agents; Razorpay payment event processors that update your CRM on every transaction; and KYC document extraction bots for faster onboarding.',
    example: 'Lending platforms cut loan application processing time by 60%.',
  },
  {
    name: 'EdTech & Coaching',
    description:
      'WhatsApp enrolment bots that answer course questions, collect payment via Razorpay, send onboarding material, and track attendance — reducing the admin burden on counsellors so they focus on conversions, not coordination.',
    example: 'EdTech platforms report 3× faster lead-to-enrolment conversions.',
  },
  {
    name: 'Healthcare & Diagnostics',
    description:
      'Appointment scheduling bots on WhatsApp, patient intake form automation, prescription reminder agents, and document extraction from medical reports — built with privacy-first architecture and full audit trails for DPDP compliance.',
    example: 'Clinics recover 4–5 hours of front-desk admin time per provider per week.',
  },
  {
    name: 'Manufacturing & B2B',
    description:
      'Purchase order processing agents that extract line items from PDFs, match against Tally inventory, trigger reorder alerts, and route approvals via WhatsApp — eliminating manual data entry from your supply chain workflows.',
    example: 'B2B firms process 500+ POs/hour vs. 8–10 manually.',
  },
];

const IN_PRICING_TIERS = [
  {
    name: 'Starter Agent',
    priceRange: 'From ₹4,00,000',
    description:
      'One focused AI agent that eliminates your highest-impact manual task. Best for businesses automating a single workflow for the first time.',
    features: [
      'Single-workflow AI agent (WhatsApp support, lead qualifier, or invoice processor)',
      'Connects to 1–2 existing tools (Zoho CRM, Razorpay, Freshdesk, or WhatsApp)',
      'Simple admin dashboard — no code required to operate',
      'Claude, GPT-4o, or Gemini as the underlying model',
      'QA, prompt tuning, and guardrail setup included',
      '14-day post-launch support window',
      'Full code and API key ownership',
    ],
    cta: { label: 'Book a Free Strategy Call', modal: true as const, region: 'in' as const },
  },
  {
    name: 'Growth AI Platform',
    priceRange: 'From ₹12,00,000',
    description:
      'A multi-workflow AI platform with deeper integrations, WhatsApp automation, and a management dashboard. The most popular tier for growing Indian businesses.',
    features: [
      'Up to 3 interconnected AI agents (WhatsApp support + lead qualification + invoice ops)',
      'Full Zoho CRM, Freshdesk, Tally, or Shopify integration',
      'WhatsApp Business API on Interakt, Wati, or AiSensy',
      'Razorpay payment event automation',
      'Hindi + English language support in agent responses',
      'Custom analytics dashboard — no third-party BI tool needed',
      'Team training session in Hindi or English + documentation',
      '30-day post-launch support window',
    ],
    cta: { label: 'Get a Custom Quote', modal: true as const, region: 'in' as const },
    popular: true,
  },
  {
    name: 'Enterprise AI System',
    priceRange: 'From ₹20,00,000',
    description:
      'A full multi-agent AI system with private deployment, custom LLM fine-tuning, and a dedicated engineering partner for large Indian enterprises.',
    features: [
      'Unlimited agent workflows and tool integrations',
      'Custom LLM fine-tuning on your proprietary business data',
      'Private cloud or on-premise deployment for regulated sectors',
      'Multi-department rollout (support, sales, ops, finance)',
      'DPDP/IT Act compliance architecture',
      'Dedicated engineering point of contact',
      'SLA-backed uptime and incident response',
      '90-day post-launch support and iteration window',
    ],
    cta: { label: 'Schedule an Enterprise Call', modal: true as const, region: 'in' as const },
  },
] as const;

const IN_FAQ_CATEGORIES = [
  { key: 'what-are-agents', label: 'What Are AI Agents' },
  { key: 'india',           label: 'India-Specific' },
  { key: 'process',         label: 'Process & Timeline' },
  { key: 'pricing',         label: 'Pricing & ROI' },
  { key: 'technical',       label: 'Technical & Integrations' },
  { key: 'trust',           label: 'Trust & Results' },
];

const IN_FAQ_ITEMS = [

  /* ── What Are AI Agents ── */
  {
    category: 'what-are-agents',
    question: 'What is an AI agent and how is it different from a chatbot?',
    answer:
      'A chatbot answers questions. An AI agent takes action. A chatbot replies to typed messages. An AI agent connects to your systems — WhatsApp, Zoho CRM, Razorpay, Tally, Freshdesk — reads inputs from multiple sources, makes decisions, and completes multi-step workflows without manual direction. It can check stock, update a CRM record, send a WhatsApp message, process a GST invoice, and report back — all automatically, in sequence.',
  },
  {
    category: 'what-are-agents',
    question: 'What kinds of tasks can an AI agent handle for an Indian business?',
    answer:
      "AI agents are best at high-volume, rule-based work that currently eats your team's time: answering the same WhatsApp customer queries, qualifying inbound leads from Facebook or Instagram, processing GST invoices, updating Zoho CRM records after a payment, booking appointments, routing Shiprocket delivery exceptions, and generating weekly sales reports. If your team does it more than a few times a day and it follows a pattern, an AI agent can handle it.",
  },
  {
    category: 'what-are-agents',
    question: 'What types of AI agents does FactoryJet build for Indian businesses?',
    answer:
      'Six core types: WhatsApp Support AI (24/7 support bots on Interakt/Wati that handle queries and escalate to humans), Sales AI (lead qualification, outreach on WhatsApp, demo booking), Operations AI (GST invoice processing, PO automation, scheduling), Data & Analytics AI (weekly reporting agents that pull from your CRM or ERP and send summaries), Voice AI (Exotel-based agents that handle inbound calls), and Document Processing AI (agents that extract data from PDFs, invoices, and KYC documents).',
  },
  {
    category: 'what-are-agents',
    question: 'Which AI models power these agents?',
    answer:
      "We use Claude (Anthropic), GPT-4o (OpenAI), Gemini (Google), and open-source models like Mistral and LLaMA depending on your workflow, cost sensitivity, and data privacy requirements. For orchestration we use LangChain, LangGraph, n8n, and Make.com. We don't have a preferred vendor — we pick the right model for each use case and explain the reasoning in plain language.",
  },

  /* ── India-Specific ── */
  {
    category: 'india',
    question: 'Can you build AI agents that work over WhatsApp?',
    answer:
      'Yes — WhatsApp AI is one of our most common India deployments. We build agents on Interakt, Wati, AiSensy, and Yellow.ai that qualify leads, answer product questions, send order updates, book appointments, and escalate to human agents when needed. The AI reads your Shopify/WooCommerce, Zoho CRM, or Google Sheets in real time and responds in Hindi, English, or any regional language.',
  },
  {
    category: 'india',
    question: 'Which Indian business tools can your AI agents integrate with?',
    answer:
      'We integrate with the full Indian stack: Zoho CRM and Freshdesk for customer management, Razorpay and PayU for payment events, Tally ERP and Busy for accounting, Shiprocket and Delhivery for logistics, Interakt/Wati/AiSensy for WhatsApp, Exotel for IVR and voice, LeadSquared for sales pipelines, and Google Workspace. If your platform has an API or webhook, we can connect to it.',
  },
  {
    category: 'india',
    question: 'Can an AI agent handle GST and compliance workflows?',
    answer:
      'Yes. We build agents that extract invoice data, validate GSTINs via the GST portal API, calculate IGST/SGST/CGST automatically, flag mismatches, and push data to your accounting software — eliminating hours of monthly manual reconciliation. The agent creates an audit trail for every transaction it processes, which makes CA reviews significantly faster.',
  },
  {
    category: 'india',
    question: 'Can the AI agent respond in Hindi or regional languages?',
    answer:
      'Yes. We configure agents to respond in Hindi, Hinglish, Marathi, Tamil, Telugu, Gujarati, Kannada, and other languages using multilingual LLM capabilities and automatic language detection. For WhatsApp deployments, the agent detects the language the customer writes in and responds accordingly.',
  },

  /* ── Process & Timeline ── */
  {
    category: 'process',
    question: 'What does the AI agent development process look like from start to finish?',
    answer:
      'Five stages: Discover (60-minute call to map workflows and size ROI), Architect (design agent logic, integrations, and guardrails — you approve before we build), Build (weekly demos throughout), Train & Test (real scenarios including Hindi queries, GST edge cases, peak volumes), and Deploy (launch with monitoring, dashboards, recorded handover in Hindi or English).',
  },
  {
    category: 'process',
    question: 'How long does it take to build and deploy an AI agent?',
    answer:
      "Simple single-workflow agents — a WhatsApp support bot, a lead qualifier, an invoice processor — go from kickoff to live in 2–3 weeks. Multi-workflow platforms with CRM and WhatsApp integrations take 4–6 weeks. Enterprise systems run 8–12 weeks. We give you a firm timeline after the discovery call, not before, because scope drives everything.",
  },
  {
    category: 'process',
    question: 'Will I see progress during the build, or is it a black box?',
    answer:
      "Weekly demos throughout — no exceptions. After every stage we show you what's been built and how it behaves. You can give feedback, adjust the logic, and reprioritise features before we move on. Most clients find that seeing the agent working early changes their thinking about what's possible, and we build room for that.",
  },
  {
    category: 'process',
    question: 'What happens after the AI agent launches?',
    answer:
      "Every engagement includes a 30-day post-launch support window. During that period we fix bugs, tune the agent's behavior based on real usage, and run a training session for your team. After 30 days, you can continue on a monthly retainer or manage it yourself — the dashboard is built for non-technical operators and all code and API keys are yours.",
  },

  /* ── Pricing & ROI ── */
  {
    category: 'pricing',
    question: 'How much does AI agent development cost in India?',
    answer:
      "FactoryJet AI agents start from ₹4,00,000 for a focused single-workflow agent. Most Indian businesses need the Growth tier from ₹12,00,000, covering multiple interconnected agents, CRM/WhatsApp integrations, and a management dashboard. Enterprise multi-agent platforms start from ₹20,00,000. All prices are fixed — no hourly billing surprises.",
  },
  {
    category: 'pricing',
    question: 'What is the typical ROI on an AI agent for an Indian business?',
    answer:
      'The most common return is labor hours recovered. A WhatsApp support agent handling 70% of queries replaces the equivalent of 2–3 support executives at a fraction of the monthly cost. A lead qualification agent that responds to every inbound WhatsApp message within 60 seconds typically increases conversion rates by 20–35%. Most clients see payback within 3–6 months of launch.',
  },
  {
    category: 'pricing',
    question: 'Are there ongoing costs after the AI agent build is complete?',
    answer:
      "Two types: LLM API costs (typically ₹5,000–₹25,000/month for most Indian SMB volumes — these go directly to model providers, we don't mark them up) and optionally a FactoryJet retainer for ongoing optimisation or new features. The retainer is optional; many clients self-manage after the handoff.",
  },

  /* ── Technical & Integrations ── */
  {
    category: 'technical',
    question: 'Do I need a technical team to manage the AI agent after launch?',
    answer:
      "No. We build every agent with a non-technical operator in mind. The management dashboard lets you see what the agent is doing, review flagged items, adjust thresholds, and pause or resume workflows — without touching code. We include a recorded training walkthrough in Hindi or English specific to your agent.",
  },
  {
    category: 'technical',
    question: 'Can you build AI agents for niche Indian business workflows?',
    answer:
      "Yes — most of what we build is custom. We've built agents for jewellery GST compliance, EdTech enrolment funnels, pharmaceutical distribution reorders, NBFC loan application intake, and hospital patient scheduling. The underlying architecture is the same; the workflow logic, prompts, and data connections are built specifically for your process.",
  },
  {
    category: 'technical',
    question: 'What happens if we switch software platforms after the agent is built?',
    answer:
      'We architect agents with modular integration layers — the agent logic is separated from the connector code. Switching from Freshdesk to Zoho Desk, or from Razorpay to PayU, typically means updating the integration module, not rebuilding the agent from scratch. Days of work, not months.',
  },

  /* ── Trust & Results ── */
  {
    category: 'trust',
    question: 'Is my business data safe with an AI agent?',
    answer:
      'Yes. We use API-level integrations (no screen scraping), enforce least-privilege data access so the agent only reads what it needs, and implement full audit trails on every action. For regulated sectors — BFSI, healthcare, legal — we can deploy private LLM setups that process your data without sending it to third-party model providers.',
  },
  {
    category: 'trust',
    question: 'What happens if the AI agent makes a mistake or gives a wrong answer?',
    answer:
      "Every agent includes confidence thresholds (if the model isn't sure, it escalates to a human rather than guessing), guardrails on high-stakes actions (the agent asks for approval before processing payments, sending bulk WhatsApp messages, or updating critical records), and a full action log for auditing. No AI system is 100% accurate — responsible design means errors are surfaced and correctable, not silent.",
  },
  {
    category: 'trust',
    question: 'Do you have results from Indian businesses similar to mine?',
    answer:
      "Yes. We've built AI agents for D2C brands that reduced WhatsApp support volume by 70%, for real estate builders that doubled site visit bookings without adding telecallers, and for B2B manufacturers that eliminated 30+ hours per week of manual invoice processing. We're happy to share relevant examples during a strategy call.",
  },
  {
    category: 'trust',
    question: 'How is FactoryJet different from hiring an Indian IT firm for AI development?',
    answer:
      "Three differences: structure (flat team — you brief an engineer, that engineer builds it, no account manager layers), SMB depth (500+ small business projects since 1999, we understand what a 15-person business actually looks like operationally), and transparency (fixed-price contracts, weekly demos, and you own everything at the end — no lock-in).",
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function AIAgentDevelopmentINPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <Script
        id="ai-agents-in-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="ai-agents-in-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <SiteHeader
        locale="in"
        navLinks={[
          { label: 'Services', href: '/services' },
          { label: 'AI Agents', href: '/services/ai-agent-development' },
          { label: 'Portfolio', href: '/portfolio' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Contact', modal: true, region: 'in' },
        ]}
        cta={{ label: 'Book a Free Call', modal: true, region: 'in' }}
      />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
        ]}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="AI AGENT DEVELOPMENT · INDIA"
          headline="AI Agents Built for Indian Business, Deployed in Weeks"
          lead="Your competitors are automating the WhatsApp queues, GST workflows, and manual data entry that cost your team 20+ hours a week. FactoryJet builds custom AI agents that connect your Indian business stack — Zoho, Razorpay, Tally, Shiprocket, WhatsApp — and work around the clock without adding headcount."
          primaryCta={{ label: 'Book a Free AI Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={[
            '500+ businesses served',
            'Starting from ₹4,00,000',
            'WhatsApp + Zoho + Razorpay ready',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#F05A28]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                WHATSAPP AI IN ACTION
              </p>
              <p className="mt-4 font-fj-display text-[1.875rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                840 WhatsApp queries handled in a single day — zero additional hires.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Customer asks order status on WhatsApp → agent checks Shiprocket → replies in 4 seconds',
                  'Lead messages from Instagram ad → AI qualifies, sends catalogue → books demo to CRM',
                  'Razorpay payment received → agent extracts GST data → logs to Tally → notifies accounts',
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
                  All three workflows run 24/7, 365 days a year — no salary, no sick leave.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        {/* ── 3. TRUST STATS ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ businesses. 25 years of building. One goal: your results."
        />

        {/* ── 4. WHAT IS AN AI AGENT (LIGHT) ───────────────────────────────── */}
        <ServiceExplanation
          eyebrow="AI EXPLAINED"
          headline="What Is an AI Agent, and Why Does Your Business Need One?"
          lead="A chatbot answers questions. An AI agent takes action — connecting to WhatsApp, Zoho, Razorpay, Tally, and your other tools to complete entire workflows automatically, without a human directing every step."
          body={
            <>
              {/* Capability chip strip */}
              <div className="flex flex-wrap gap-2" aria-hidden>
                {[
                  'WhatsApp queries',
                  'Lead qualification',
                  'GST invoicing',
                  'CRM updates',
                  'Order tracking',
                  'Appointment booking',
                  'Payment alerts',
                  'Report generation',
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
                Most Indian business owners have seen WhatsApp chatbots — scripted menus that break the moment someone asks an unexpected question. An AI agent is fundamentally different. Built on large language models (Claude, GPT-4o, Gemini), it understands intent, reads from your live data sources, and takes action — qualifying a lead, updating a Zoho record, processing a Razorpay payment event, sending a follow-up WhatsApp — all without a human directing each step.
              </p>

              {/* 3-col benefit cards */}
              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[
                  { value: '24/7', label: 'Always on' },
                  { value: '0', label: 'Sick leave' },
                  { value: '~₹0', label: 'Marginal cost' },
                ].map((b) => (
                  <div
                    key={b.value}
                    className="rounded-xl border border-fj-neutral-200 bg-white px-3 py-4 text-center shadow-sm"
                  >
                    <p
                      className="font-fj-display font-bold text-[#F05A28]"
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

              {/* Pull quote */}
              <div className="border-l-2 border-[#F05A28] pl-5 py-1" aria-hidden>
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.1875rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  More like a capable team member than a scripted menu.
                </p>
              </div>

              <p>
                The result is software that works more like a capable employee than a rules engine. It handles peak volumes that overwhelm your human staff, works at 2 AM when your customer places an order, and never calls in sick. Unlike hiring, it costs a fixed amount to build and runs at near-zero marginal cost afterward. FactoryJet has been building software for businesses like yours since 1999 — we know exactly which workflows are ready for AI and which still need a human touch.
              </p>

              {/* Industry grid */}
              <div className="grid grid-cols-2 gap-2" aria-hidden>
                {[
                  'D2C e-commerce brands',
                  'Real estate builders',
                  'EdTech platforms',
                  'BFSI / fintech',
                  'Healthcare & diagnostics',
                  'Manufacturing & B2B',
                ].map((ind) => (
                  <div
                    key={ind}
                    className="flex items-center gap-2.5 rounded-lg border border-fj-neutral-200 bg-white px-3.5 py-2.5"
                  >
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F05A28]" />
                    <p className="font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '0.8125rem' }}>
                      {ind}
                    </p>
                  </div>
                ))}
              </div>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              {/* Card header */}
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  How a WhatsApp AI Agent Works
                </p>
              </div>

              {/* Step-flow diagram */}
              <div className="px-7 pt-6 pb-2">
                {([
                  {
                    step: '01',
                    title: 'Receives a trigger',
                    desc: 'Customer messages on WhatsApp, a Razorpay webhook fires, or a form is submitted.',
                  },
                  {
                    step: '02',
                    title: 'Reads your data',
                    desc: 'Queries Zoho CRM, Shiprocket, Tally, your Shopify store, or Google Sheets in real time.',
                  },
                  {
                    step: '03',
                    title: 'Takes action',
                    desc: 'Sends a WhatsApp reply, books a meeting, updates a CRM record, or processes an invoice.',
                  },
                  {
                    step: '04',
                    title: 'Reports & escalates',
                    desc: 'Logs every action with a full audit trail and escalates edge cases to your team.',
                  },
                ] as const).map((item, i, arr) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#F05A28]">
                        <span className="font-fj-mono text-[10px] font-bold text-white">{item.step}</span>
                      </div>
                      {i < arr.length - 1 && (
                        <div className="mt-1 h-full w-px bg-fj-neutral-200" style={{ minHeight: '2rem' }} />
                      )}
                    </div>
                    <div className="pb-5">
                      <p className="font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.9375rem' }}>
                        {item.title}
                      </p>
                      <p className="mt-1 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem', lineHeight: 1.6 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer note */}
              <div className="border-t border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-body text-fj-neutral-400" style={{ fontSize: '0.8125rem' }}>
                  Available 24/7. Responds in Hindi, English, or any language your customers write in.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 5. THE PROBLEM (DARK) ─────────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE PROBLEM"
          headline="Your team is buried in work that AI can handle"
          lead="Most Indian SMBs have the same three bottlenecks: an overflowing WhatsApp inbox, hours of manual data entry across disconnected systems, and a sales team spending more time on admin than selling. These are not people problems — they are automation gaps."
          pillars={[
            {
              icon: '💬',
              title: 'WhatsApp overload is eating your team alive',
              body: "Your customer support team handles the same 10 questions 200 times a day — order status, pricing, product availability. An AI agent answers all of them instantly, in the customer's language, at 2 AM. Your human team focuses on the 20% of queries that actually need a person.",
            },
            {
              icon: '📋',
              title: 'Manual data entry across disconnected systems',
              body: 'Payment received in Razorpay → someone manually updates Zoho CRM → someone else updates Tally → someone sends a WhatsApp receipt. Every step is a delay, a human, and a potential error. One AI agent handles the entire chain automatically.',
            },
            {
              icon: '⏱️',
              title: 'Leads going cold while you sleep',
              body: 'Research on Indian B2B sales shows that responding to a lead within 5 minutes increases qualification rates by 21×. Your competitors with AI agents respond in under 60 seconds, 24/7. Manual follow-up simply cannot compete with that speed.',
            },
          ]}
        />

        {/* ── 6. DEVELOPMENT JOURNEY (LIGHT) ───────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="HOW WE BUILD"
          headline="From discovery to live agent in 2–6 weeks"
          stages={IN_AI_JOURNEY_STAGES}
          closingNote="Every stage ends with a working demo. No black boxes, no surprises at launch."
        />

        {/* ── 7. TECH STACK (LIGHT, REVERSED) ──────────────────────────────── */}
        <ServiceExplanation
          eyebrow="TECHNOLOGY"
          headline="The AI stack we use to build your agent"
          lead="We don't have a preferred vendor — we pick the right tool for each layer of your agent based on your workflow, data sensitivity, and cost requirements."
          reverseOnDesktop
          body={
            <>
              <p>
                Every AI agent we build is assembled from best-in-class components: a large language model for reasoning, an orchestration framework for workflow logic, and connectors for each of your business tools. We document every architectural decision so your team understands exactly what was built and why — no vendor lock-in.
              </p>
              {/* Tech stack table */}
              <div className="overflow-hidden rounded-xl border border-fj-neutral-200 bg-white" aria-hidden>
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-fj-neutral-100 bg-fj-neutral-50">
                      <th className="px-5 py-3 font-fj-mono text-[10px] font-semibold uppercase tracking-widest text-fj-neutral-400">Layer</th>
                      <th className="px-5 py-3 font-fj-mono text-[10px] font-semibold uppercase tracking-widest text-fj-neutral-400">Tools We Use</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-fj-neutral-100">
                    {[
                      { layer: 'LLM / AI Model',   tools: 'Claude, GPT-4o, Gemini, Mistral, LLaMA' },
                      { layer: 'Orchestration',     tools: 'LangChain, LangGraph, n8n, Make.com' },
                      { layer: 'WhatsApp',          tools: 'Interakt, Wati, AiSensy, Yellow.ai' },
                      { layer: 'CRM & Support',     tools: 'Zoho CRM, Freshdesk, LeadSquared' },
                      { layer: 'Payments',          tools: 'Razorpay, PayU, Cashfree webhooks' },
                      { layer: 'Accounting / ERP',  tools: 'Tally ERP, Busy, GST portal API' },
                      { layer: 'Logistics',         tools: 'Shiprocket, Delhivery, Ecom Express' },
                      { layer: 'Voice / IVR',       tools: 'Exotel, Twilio, Knowlarity' },
                    ].map((row) => (
                      <tr key={row.layer}>
                        <td className="px-5 py-3 font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.8125rem' }}>{row.layer}</td>
                        <td className="px-5 py-3 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem' }}>{row.tools}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                For data-sensitive use cases — BFSI, healthcare, legal — we can deploy private LLM setups that process your data on your own infrastructure, with no data leaving your environment. All data flows are documented during delivery.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  Six AI Agent Types We Build
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  {
                    name: 'WhatsApp Support AI',
                    desc: '24/7 support on Interakt/Wati. Handles queries, order status, returns, escalates to humans.',
                  },
                  {
                    name: 'Sales & Lead Qualification AI',
                    desc: 'Qualifies inbound WhatsApp/Instagram leads, sends catalogues, books demos to Zoho CRM.',
                  },
                  {
                    name: 'Operations & Invoice AI',
                    desc: 'GST invoice processing, PO extraction, Tally sync — eliminates manual data entry.',
                  },
                  {
                    name: 'Data & Reporting AI',
                    desc: 'Pulls weekly metrics from CRM/ERP, writes plain-language summaries, sends to WhatsApp/Slack.',
                  },
                  {
                    name: 'Voice AI (IVR)',
                    desc: 'Exotel-based agents handle inbound calls, qualify callers, book appointments, transfer live.',
                  },
                  {
                    name: 'Document Processing AI',
                    desc: 'Reads PDFs, extracts KYC/invoice data, classifies documents, routes for approval.',
                  },
                ].map((item) => (
                  <div key={item.name} className="px-7 py-4">
                    <p className="font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.9rem' }}>{item.name}</p>
                    <p className="mt-0.5 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        {/* ── 8. STATS BAND (CREAM) ─────────────────────────────────────────── */}
        <section
          className="py-12 md:py-16"
          style={{
            backgroundColor: '#FAFAF7',
            borderTop: '1.5px solid rgba(240,90,40,0.18)',
            borderBottom: '1.5px solid rgba(240,90,40,0.18)',
          }}
        >
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {IN_AI_STATS.map((stat) => (
                <div key={stat.value}>
                  {stat.categoryLabel && (
                    <div
                      className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-fj-mono font-bold uppercase"
                      style={{
                        fontSize: '9px',
                        letterSpacing: '0.13em',
                        color: '#F05A28',
                        background: 'rgba(240,90,40,0.06)',
                        border: '1px solid rgba(240,90,40,0.22)',
                      }}
                    >
                      <span
                        className="inline-block h-1 w-1 rounded-full"
                        style={{ backgroundColor: '#F05A28' }}
                        aria-hidden="true"
                      />
                      {stat.categoryLabel}
                    </div>
                  )}
                  <p
                    className="font-fj-display font-bold"
                    style={{
                      fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                      lineHeight: 1,
                      letterSpacing: '-0.04em',
                      color: '#F05A28',
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="mt-3 font-fj-body font-semibold text-fj-ink"
                    style={{ fontSize: '0.9375rem', lineHeight: 1.5 }}
                  >
                    {stat.label}
                  </p>
                  {stat.microcopy && (
                    <p
                      className="mt-1.5 font-fj-body text-fj-neutral-400"
                      style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}
                    >
                      {stat.microcopy}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. INDIA MARKET CONTEXT ───────────────────────────────────────── */}
        <CityContextSection
          eyebrow="INDIA AI MARKET"
          headline="India's AI adoption is accelerating — the window to move first is closing"
          leadParagraphs={[
            "India's AI market is projected to exceed ₹65,000 Cr by 2027, driven by the country's massive WhatsApp user base, the rapid digitisation of SMBs post-GST, and the availability of affordable LLM APIs. D2C brands, real estate firms, EdTech platforms, BFSI companies, and B2B manufacturers are already deploying AI agents to automate customer interactions, streamline compliance, and cut operational costs — without adding headcount.",
            "Indian businesses that automate now are compounding an operational advantage that becomes harder and harder for competitors to close. The question is not whether to adopt AI — it is whether you move before or after your competition does.",
          ]}
          bodySlot={
            <>
              <div className="border-l-2 border-[#F05A28] py-1 pl-5" aria-hidden="true">
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  The best ROI in Indian business right now is automating before your competitor does.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  { label: 'Mumbai', slug: 'mumbai' },
                  { label: 'Delhi', slug: 'delhi' },
                  { label: 'Bangalore', slug: 'bangalore' },
                  { label: 'Hyderabad', slug: 'hyderabad' },
                  { label: 'Chennai', slug: 'chennai' },
                  { label: 'Pune', slug: 'pune' },
                  { label: 'Ahmedabad', slug: 'ahmedabad' },
                  { label: 'Kolkata', slug: 'kolkata' },
                ].map(({ label, slug }) => (
                  <a
                    key={slug}
                    href={`/services/ai-agent-development/${slug}`}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-medium text-[#F05A28] hover:bg-[rgba(240,90,40,0.15)] transition-colors"
                    style={{ fontSize: '10px', letterSpacing: '0.08em' }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </>
          }
          stats={IN_MARKET_STATS}
        />

        {/* ── 10. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Indian IT Firm vs. Freelancer vs. No-Code Tools"
          lead="Fixed price, full ownership, Indian business stack out of the box — here is the honest comparison."
          pullQuote={{
            stat: '₹4,00,000',
            caption:
              'starting price — same engineering quality, WhatsApp integration, Zoho/Razorpay connectors, and code ownership as a ₹15,00,000 Indian IT firm project.',
          }}
          columns={IN_COMPARISON_COLUMNS}
          rows={IN_COMPARISON_ROWS}
          footer="Prices reflect typical Indian market rates as of 2025. FactoryJet fixed-price contracts available for all tiers."
        />

        {/* ── 11. INDUSTRIES GRID ───────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="WHO WE BUILD FOR"
          headline="AI agents for every major Indian industry vertical"
          lead="Every sector, built to India-specific workflows — WhatsApp, GST, Razorpay, Zoho, and your actual business stack."
          sectors={IN_INDUSTRIES}
        />

        {/* ── 12. PRICING (CREAM) ───────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="PRICING"
            headline="Transparent, Fixed-Price AI Agent Development"
            lead="No hourly billing. No scope creep surprises. Every tier includes a fixed price, fixed scope, and full code ownership on delivery."
            tiers={IN_PRICING_TIERS}
            footnote="All prices in INR. LLM API costs (typically ₹5,000–₹25,000/month) are billed directly by model providers and are not marked up by FactoryJet. WhatsApp Business API subscription fees are separate. Custom scopes are quoted after a free discovery call."
          />
        </div>

        {/* ── 13. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What Indian founders say after we build their AI agents"
        />

        {/* ── 14. FAQ (LIGHT — buffer before next dark) ─────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything to Know Before You Start"
          lead="The questions we answer on every Indian AI agent discovery call — answered here, without the runaround."
          categories={IN_FAQ_CATEGORIES}
          items={IN_FAQ_ITEMS}
        />

        {/* ── 15. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="25 years building for businesses your size — now with AI"
          lead="We have been inside 500+ Indian and global businesses. We know what a 15-person operation actually looks like. That context changes how we design AI agents — not just technically, but operationally."
          pillars={[
            {
              icon: '🇮🇳',
              title: 'We build for your stack, not a demo environment',
              body: "We integrate with Zoho, Razorpay, Tally, Shiprocket, and WhatsApp because that's what Indian businesses actually use — not the tools that look good in a pitch deck. Your AI agent works with your existing systems on day one.",
            },
            {
              icon: '📐',
              title: 'Fixed price. You own everything.',
              body: 'No hourly billing, no lock-in, no vendor-owned model. Fixed-price contracts, full code ownership, all API keys in your hands at delivery. After handover, you can self-manage or continue on a retainer — your choice, not ours.',
            },
            {
              icon: '🏗️',
              title: 'SMB depth that enterprise IT firms cannot replicate',
              body: "Large IT firms build for enterprise. We've spent 25 years building for founders and operators running 10–100 person businesses. We understand your operational reality and design agents that fit your team, your budget, and your workflow — not a generic enterprise template.",
            },
          ]}
        />

        {/* ── 16. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="GET STARTED"
            headline="Book a Free AI Strategy Call"
            sub="Tell us your biggest operational bottleneck. We will map out exactly which workflows are ready for AI and give you a fixed-price estimate before we write a single line of code. No pitch, no pressure — an honest assessment from engineers who have been building for Indian businesses for 25 years."
            primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'in' }}
            secondaryCta={{ label: 'WhatsApp Us', href: 'https://wa.me/919876543210' }}
            objectionHandler="Fixed price. Full code ownership. WhatsApp + Zoho + Razorpay ready. 500+ businesses served."
          />
        </div>

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
