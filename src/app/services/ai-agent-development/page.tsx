import type { Metadata } from 'next';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import CityContextSection from '@/components/v2/CityContextSection';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import GetFreeQuoteCTA from '@/components/v2/GetFreeQuoteCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'AI Agent Development Company India | Custom AI Agents | FactoryJet',
  description:
    'AI agent development company in India — WhatsApp AI, customer support, sales & workflow bots. AI automation agency for Indian businesses. Integrated with Zoho & Razorpay. Fixed price. Deployed in weeks.',
  keywords: [
    'AI agent development company India',
    'AI agent development companies India',
    'AI agent development services India',
    'AI agent development India',
    'AI automation agency India',
    'AI chatbot development company India',
    'WhatsApp chatbot development India',
    'WhatsApp AI agent India',
    'conversational AI development India',
    'AI workflow automation India',
    'custom AI agent development India',
    'LangChain development India',
    'Zoho AI integration India',
    'AI voice agent development India',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Agent Development Company India | Custom AI Agents | FactoryJet',
    description:
      'Custom AI agents, WhatsApp automation, and AI-native workflows for Indian businesses. Fixed price. Deployed in weeks — not months.',
    url: 'https://factoryjet.com/services/ai-agent-development',
    images: [
      {
        url: 'https://factoryjet.com/images/services/ai-agents.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet AI Agent Development Services',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agent Development Company India | Custom AI Agents | FactoryJet',
    description:
      'WhatsApp AI, customer support automation, sales agents for Indian businesses. Fixed price. Fast delivery.',
    images: ['https://factoryjet.com/images/services/ai-agents.webp'],
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
        text: 'AI agent development cost depends on scope. A focused single-workflow agent (WhatsApp support bot, lead qualifier, invoice processor) is the entry point. Most Indian businesses need a Growth-tier build covering multiple interconnected agents, CRM/ERP integration, and a management dashboard. Enterprise multi-agent platforms are larger still. Every project is fixed-price and quoted up front after a free discovery call, so you know the full cost before work starts — no hourly billing surprises.',
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
    {
      '@type': 'Question',
      name: 'Which is the best AI agent development company in India?',
      acceptedAnswer: { '@type': 'Answer', text: 'For small and mid-size businesses, FactoryJet makes a strong case: fixed-price projects, senior engineers, weekly demos, and you own the code at the end. If you are searching for the best company to automate my business with AI agents, that is the test to apply. The best AI agency in India for you depends on the job — the best AI automation agency in India for support tickets is not automatically the best AI chatbot development company in India for sales. Whoever you compare, including any best AI development company in India or best AI agent development services in India claim, ask: who scopes the project, is the price fixed, and who owns the result?' },
    },
    {
      '@type': 'Question',
      name: 'What are the top 10 AI agent development companies in India?',
      acceptedAnswer: { '@type': 'Answer', text: 'Lists of the top 10 AI agent development companies in India age fast — this field changes every quarter. The same is true for the top 10 AI automation agencies in India. FactoryJet competes in that set for small and mid-size businesses: fixed pricing, senior-led builds, no lock-in. Use any list as a shortlist, then ask each name to show a working agent, not slides.' },
    },
    {
      '@type': 'Question',
      name: 'How much does an AI chatbot cost in India?',
      acceptedAnswer: { '@type': 'Answer', text: 'A simple FAQ chatbot is the most affordable option; a custom chatbot trained on your products and connected to your CRM costs more because it does more. If you are asking how much does AI chatbot cost in India per month instead, SaaS tools charge a recurring monthly fee but you never own them. FactoryJet builds chatbots you own outright, at a fixed written price quoted up front after a free discovery call.' },
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
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-agent-development#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/services/ai-agent-development',
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
    feature: 'Pricing model',
    values: [
      'Fixed price, quoted up front',
      'High, often open-ended',
      'Lower, but unreliable',
      'Annual subscription (you build it)',
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
    feature: '500+ SMB projects',
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
    priceRange: '',
    description:
      'One focused AI agent that eliminates your highest-impact manual task. Best for businesses automating a single workflow for the first time.',
    features: [
      'Single-workflow AI agent (WhatsApp support, lead qualifier, or invoice processor)',
      'Connects to 1–2 existing tools (Zoho CRM, Razorpay, Freshdesk, or WhatsApp)',
      'Simple admin dashboard — no code required to operate',
      'Claude, GPT-4o, or Gemini as the underlying model',
      'QA, prompt tuning, and guardrail setup included',
      '14-day post-launch support window',
    ],
    cta: { label: 'Book a Strategy Call', modal: true as const, region: 'in' as const },
  },
  {
    name: 'Growth AI Platform',
    priceRange: '',
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
    priceRange: '',
    description:
      'A full multi-agent AI system with private deployment, custom LLM fine-tuning, and a dedicated engineering partner for large Indian enterprises.',
    features: [
      'Agent workflows & tool integrations scoped per project brief',
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
      "AI agent development cost depends on scope. A focused single-workflow agent is the entry point. Most Indian businesses need a Growth-tier build covering multiple interconnected agents, CRM/WhatsApp integrations, and a management dashboard, while enterprise multi-agent platforms are larger. Every project is fixed-price and quoted up front after a free discovery call, so you know the full cost before work starts — no hourly billing surprises.",
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
      "Three differences: structure (flat team — you brief an engineer, that engineer builds it, no account manager layers), SMB depth (500+ small business projects, we understand what a 15-person business actually looks like operationally), and transparency (fixed-price contracts, weekly demos, and you own everything at the end — no lock-in).",
  },

  // Money-query coverage, added 2026-06-11
  {
    category: 'trust',
    question: 'Which is the best AI agent development company in India?',
    answer:
      'For small and mid-size businesses, FactoryJet makes a strong case: fixed-price projects, senior engineers, weekly demos, and you own the code at the end. If you are searching for the best company to automate my business with AI agents, that is the test to apply. The best AI agency in India for you depends on the job — the best AI automation agency in India for support tickets is not automatically the best AI chatbot development company in India for sales. Whoever you compare, including any best AI development company in India or best AI agent development services in India claim, ask: who scopes the project, is the price fixed, and who owns the result?',
  },
  {
    category: 'trust',
    question: 'What are the top 10 AI agent development companies in India?',
    answer:
      'Lists of the top 10 AI agent development companies in India age fast — this field changes every quarter. The same is true for the top 10 AI automation agencies in India. FactoryJet competes in that set for small and mid-size businesses: fixed pricing, senior-led builds, no lock-in. Use any list as a shortlist, then ask each name to show a working agent, not slides.',
  },
  {
    category: 'pricing',
    question: 'How much does an AI chatbot cost in India?',
    answer:
      'A simple FAQ chatbot is the most affordable option; a custom chatbot trained on your products and connected to your CRM costs more because it does more. If you are asking how much does AI chatbot cost in India per month instead, SaaS tools charge a recurring monthly fee but you never own them. FactoryJet builds chatbots you own outright, at a fixed written price quoted up front after a free discovery call.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function AIAgentDevelopmentINPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        id="ai-agents-in-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="ai-agents-in-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <SiteHeader
        locale="in"
        navLinks={[
          { label: 'Services', href: '/services' },
          { label: 'AI Agents', href: '/services/ai-agent-development' },
          { label: 'Portfolio', href: '/portfolio' },          { label: 'Contact', modal: true, region: 'in' },
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
        formSlot={<HeroInlineForm region="in" source="services_ai_agent_development_hero" />}
          eyebrow="AI AGENT DEVELOPMENT COMPANY · INDIA"
          headline="AI Agent Development Company in India — Custom Agents for Your Business, Deployed in Weeks"
          lead="Your competitors are automating the WhatsApp queues, GST workflows, and manual data entry that cost your team 20+ hours a week. FactoryJet builds custom AI agents that connect your Indian business stack — Zoho, Razorpay, Tally, Shiprocket, WhatsApp — and work around the clock without adding headcount."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'in' as const }}
          trustItems={[
            '500+ businesses served',
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
          headline="India's AI Agent Development Company — 500+ Businesses, 25 Years of Building"
        />

        {/* ── 4. AI AGENT SERVICES GRID (WARM BLOOM BENTO) ────────────────── */}
        <section
          className="relative overflow-hidden py-10 md:py-14"
          style={{ background: 'radial-gradient(ellipse 55% 50% at 85% 15%, rgba(240,90,40,0.07) 0%, transparent 70%) #FAFAF7' }}
        >
          {/* secondary bloom — bottom-left */}
          <div
            className="pointer-events-none absolute bottom-0 left-1/4 h-52 w-52 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(240,90,40,0.04) 0%, transparent 70%)' }}
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto max-w-[1120px] px-6 md:px-8">
            {/* Section header */}
            <p
              className="font-fj-mono font-medium uppercase"
              style={{ fontSize: '10px', letterSpacing: '0.13em', color: '#F05A28' }}
            >
              Our AI Agent Services
            </p>
            <h2
              className="mt-1.5 font-fj-display font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: 1.15, letterSpacing: '-0.025em' }}
            >
              Seven AI agents, one partner
            </h2>
            <p
              className="mb-8 mt-2 font-fj-body text-fj-neutral-500"
              style={{ fontSize: '0.9375rem', lineHeight: 1.6, maxWidth: '540px' }}
            >
              Pick the agent built for your workflow — or let us recommend the right stack for your business.
            </p>

            {/* Bento grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {/* ── FEATURED CARD: Workflow Automation ── col-span-2 */}
              <div
                className="group relative col-span-1 sm:col-span-2 flex flex-col overflow-hidden rounded-2xl p-6 transition-transform duration-200 hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(140deg, #FEF3EE 0%, #FFF9F7 50%, #FFFFFF 100%)',
                  border: '0.5px solid rgba(240,90,40,0.22)',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(240,90,40,0.08)',
                }}
              >
                {/* top-cap accent */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-[3px] rounded-t-2xl"
                  style={{ background: 'linear-gradient(90deg, #F05A28 0%, rgba(240,90,40,0.3) 100%)' }}
                  aria-hidden="true"
                />
                <div className="flex flex-1 gap-5">
                  {/* Left panel */}
                  <div className="flex flex-1 flex-col">
                    {/* Icon + pill */}
                    <div className="mb-3 flex items-start gap-3">
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                        style={{ background: 'rgba(240,90,40,0.12)', border: '1px solid rgba(240,90,40,0.22)' }}
                      >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F05A28" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M12 3v4M4.22 6.22l2.83 2.83M3 12h4M4.22 17.78l2.83-2.83M12 21v-4M19.78 17.78l-2.83-2.83M21 12h-4M19.78 6.22l-2.83 2.83"/>
                          <circle cx="12" cy="12" r="3"/>
                        </svg>
                      </div>
                      <span
                        className="mt-1 font-fj-mono font-medium uppercase"
                        style={{ fontSize: '9px', letterSpacing: '0.12em', background: 'rgba(240,90,40,0.10)', color: '#C04010', border: '0.5px solid rgba(240,90,40,0.22)', borderRadius: '999px', padding: '2px 8px' }}
                      >
                        Most Popular
                      </span>
                    </div>
                    <h3
                      className="font-fj-display font-bold text-fj-ink"
                      style={{ fontSize: '1.0625rem', lineHeight: 1.2, letterSpacing: '-0.015em' }}
                    >
                      Workflow Automation Agent
                    </h3>
                    <p
                      className="mt-1.5 font-fj-body text-fj-neutral-500"
                      style={{ fontSize: '0.875rem', lineHeight: 1.6 }}
                    >
                      Eliminate repetitive hand-offs between your apps. Trigger actions across Zoho, WhatsApp, Razorpay, and Tally — automatically.
                    </p>
                    <a
                      href="/services/ai-agent-development/ai-workflow-automation"
                      className="mt-4 font-fj-body font-semibold hover:underline"
                      style={{ fontSize: '0.8125rem', color: '#F05A28' }}
                    >
                      Explore Workflow Automation →
                    </a>
                  </div>

                  {/* Right panel — flow diagram (hidden on mobile) */}
                  <div
                    className="hidden sm:flex shrink-0 flex-col items-center justify-center gap-1 rounded-xl px-3 py-4"
                    style={{ minWidth: '118px', borderLeft: '0.5px solid rgba(240,90,40,0.18)', background: 'rgba(240,90,40,0.03)' }}
                  >
                    {/* Step 1 */}
                    <div
                      className="w-full rounded-lg px-2 py-1.5 text-center"
                      style={{ background: 'rgba(240,90,40,0.06)', border: '0.5px solid rgba(240,90,40,0.15)' }}
                    >
                      <p className="font-fj-mono" style={{ fontSize: '8px', letterSpacing: '0.08em', color: '#6B7280' }}>INPUT</p>
                      <p className="font-fj-body font-semibold text-fj-ink" style={{ fontSize: '9px', marginTop: '1px' }}>Shopify Order</p>
                    </div>
                    {/* Arrow */}
                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" aria-hidden="true">
                      <line x1="6" y1="0" x2="6" y2="10" stroke="rgba(240,90,40,0.4)" strokeWidth="1.2"/>
                      <path d="M2 8l4 5 4-5" stroke="rgba(240,90,40,0.4)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                    {/* Step 2 — highlighted */}
                    <div
                      className="w-full rounded-lg px-2 py-1.5 text-center"
                      style={{ background: '#F05A28', border: '0.5px solid #D04820' }}
                    >
                      <p className="font-fj-body font-bold text-white" style={{ fontSize: '9px' }}>⚡ AI Agent</p>
                    </div>
                    {/* Arrow */}
                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" aria-hidden="true">
                      <line x1="6" y1="0" x2="6" y2="10" stroke="rgba(240,90,40,0.4)" strokeWidth="1.2"/>
                      <path d="M2 8l4 5 4-5" stroke="rgba(240,90,40,0.4)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                    {/* Step 3 */}
                    <div
                      className="w-full rounded-lg px-2 py-1.5 text-center"
                      style={{ background: 'rgba(240,90,40,0.06)', border: '0.5px solid rgba(240,90,40,0.15)' }}
                    >
                      <p className="font-fj-mono" style={{ fontSize: '8px', letterSpacing: '0.08em', color: '#6B7280' }}>OUTPUT</p>
                      <p className="font-fj-body font-semibold text-fj-ink" style={{ fontSize: '9px', marginTop: '1px' }}>CRM + Slack</p>
                    </div>
                    {/* Footer label */}
                    <p className="mt-1 font-fj-mono" style={{ fontSize: '7px', letterSpacing: '0.06em', color: 'rgba(240,90,40,0.55)', textAlign: 'center' }}>auto · no human step</p>
                  </div>
                </div>
              </div>

              {/* ── REGULAR CARDS (6) ── */}
              {[
                {
                  idx: '01',
                  title: 'AI Chatbot',
                  desc: 'Instant answers for your website visitors, 24/7.',
                  href: '/services/ai-agent-development/ai-chatbot',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F05A28" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                  ),
                },
                {
                  idx: '02',
                  title: 'Customer Support Agent',
                  desc: 'Resolve tickets, escalate issues, and close the loop automatically.',
                  href: '/services/ai-agent-development/ai-customer-support',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F05A28" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.88a16 16 0 0 0 6.32 6.32l.98-.93a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  ),
                },
                {
                  idx: '03',
                  title: 'Marketing Agent',
                  desc: 'Draft campaigns, schedule posts, and track performance on autopilot.',
                  href: '/services/ai-agent-development/ai-marketing-agent',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F05A28" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                    </svg>
                  ),
                },
                {
                  idx: '04',
                  title: 'Sales Agent',
                  desc: 'Qualify leads, follow up, and move deals forward without lifting a finger.',
                  href: '/services/ai-agent-development/ai-sales-agent',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F05A28" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                  ),
                },
                {
                  idx: '05',
                  title: 'Scheduling Agent',
                  desc: 'Book appointments, send reminders, and manage calendars hands-free.',
                  href: '/services/ai-agent-development/ai-scheduling-agent',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F05A28" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  ),
                },
                {
                  idx: '06',
                  title: 'Voice Agent',
                  desc: 'Handle inbound calls, collect information, and route to the right team.',
                  href: '/services/ai-agent-development/ai-voice-agent',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F05A28" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
                    </svg>
                  ),
                },
              ].map(({ idx, title, desc, href, icon }) => (
                <div
                  key={idx}
                  className="group relative flex flex-col overflow-hidden rounded-2xl p-5 transition-transform duration-200 hover:-translate-y-1"
                  style={{
                    background: '#FFFFFF',
                    border: '0.5px solid rgba(0,0,0,0.07)',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.03), 0 4px 12px rgba(0,0,0,0.04)',
                  }}
                >
                  {/* mono index */}
                  <span
                    className="pointer-events-none absolute right-4 top-3 font-fj-mono font-bold"
                    style={{ fontSize: '9px', letterSpacing: '0.08em', color: 'rgba(240,90,40,0.38)' }}
                    aria-hidden="true"
                  >
                    {idx}
                  </span>
                  {/* icon circle */}
                  <div
                    className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg"
                    style={{ background: 'rgba(240,90,40,0.09)' }}
                  >
                    {icon}
                  </div>
                  <h3
                    className="font-fj-display font-bold text-fj-ink"
                    style={{ fontSize: '0.9375rem', lineHeight: 1.25, letterSpacing: '-0.01em' }}
                  >
                    {title}
                  </h3>
                  <p
                    className="mt-1 flex-1 font-fj-body text-fj-neutral-500"
                    style={{ fontSize: '0.8125rem', lineHeight: 1.6 }}
                  >
                    {desc}
                  </p>
                  <a
                    href={href}
                    className="mt-3 font-fj-body font-semibold hover:underline"
                    style={{ fontSize: '0.8125rem', color: '#F05A28' }}
                  >
                    Explore →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. WHAT IS AN AI AGENT (LIGHT) ───────────────────────────────── */}
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
                The result is software that works more like a capable employee than a rules engine. It handles peak volumes that overwhelm your human staff, works at 2 AM when your customer places an order, and never calls in sick. Unlike hiring, it costs a fixed amount to build and runs at near-zero marginal cost afterward. FactoryJet has been building software for businesses like yours — we know exactly which workflows are ready for AI and which still need a human touch.
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
                  Seven AI Agent Services
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  {
                    name: 'AI Chatbot',
                    desc: 'Instant answers for your website visitors, 24/7 — no human required.',
                    href: '/services/ai-agent-development/ai-chatbot',
                  },
                  {
                    name: 'Customer Support Agent',
                    desc: 'Resolve tickets, escalate issues, and close the loop automatically on WhatsApp and web.',
                    href: '/services/ai-agent-development/ai-customer-support',
                  },
                  {
                    name: 'Marketing Agent',
                    desc: 'Draft campaigns, schedule posts, and track performance on autopilot.',
                    href: '/services/ai-agent-development/ai-marketing-agent',
                  },
                  {
                    name: 'Sales Agent',
                    desc: 'Qualify leads, follow up, and move deals forward without lifting a finger.',
                    href: '/services/ai-agent-development/ai-sales-agent',
                  },
                  {
                    name: 'Scheduling Agent',
                    desc: 'Book appointments, send reminders, and manage calendars hands-free.',
                    href: '/services/ai-agent-development/ai-scheduling-agent',
                  },
                  {
                    name: 'Voice Agent',
                    desc: 'Handle inbound calls, collect information, and route to the right team.',
                    href: '/services/ai-agent-development/ai-voice-agent',
                  },
                  {
                    name: 'Workflow Automation Agent',
                    desc: 'Trigger actions across Zoho, Razorpay, Tally, and Slack — automatically.',
                    href: '/services/ai-agent-development/ai-workflow-automation',
                  },
                ].map((item) => (
                  <div key={item.name} className="px-7 py-4">
                    <a href={item.href} className="group/link">
                      <p className="font-fj-body font-semibold text-fj-ink group-hover/link:text-[#F05A28] transition-colors" style={{ fontSize: '0.9rem' }}>{item.name}</p>
                      <p className="mt-0.5 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}>{item.desc}</p>
                    </a>
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
                {['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Ahmedabad', 'Kolkata'].map((city) => (
                  <span
                    key={city}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-medium text-[#F05A28]"
                    style={{ fontSize: '10px', letterSpacing: '0.08em' }}
                  >
                    {city}
                  </span>
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
            stat: 'Fixed price',
            caption:
              'the same engineering quality, WhatsApp integration, Zoho/Razorpay connectors, and code ownership as a far more expensive Indian IT firm project.',
          }}
          columns={IN_COMPARISON_COLUMNS}
          rows={IN_COMPARISON_ROWS}
          footer="FactoryJet fixed-price contracts available for all tiers, quoted up front after a free discovery call."
        />

        {/* ── 11. INDUSTRIES GRID ───────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="WHO WE BUILD FOR"
          headline="AI Agent Development Services for Every Major Indian Industry"
          lead="Every sector, built to India-specific workflows — WhatsApp, GST, Razorpay, Zoho, and your actual business stack."
          sectors={IN_INDUSTRIES}
        />

        <GetFreeQuoteCTA />
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

        {/* ── 15. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="GET STARTED"
            headline="Book a Free AI Strategy Call"
            sub="Tell us your biggest operational bottleneck. We will map out exactly which workflows are ready for AI and give you a fixed-price estimate before we write a single line of code. No pitch, no pressure — an honest assessment from engineers who have been building for Indian businesses for 12 years."
            primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'in' }}
            secondaryCta={{ label: 'WhatsApp Us', href: 'https://wa.me/919699977699' }}
            objectionHandler="Fixed price. Full code ownership. WhatsApp + Zoho + Razorpay ready. 500+ businesses served."
          />
        </div>

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
