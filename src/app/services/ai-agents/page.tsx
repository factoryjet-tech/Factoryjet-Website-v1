import type { Metadata } from 'next';
import Link from 'next/link';
import { usServiceAlternates } from '@/data/hreflangMap';
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
import CityContextSection from '@/components/v2/CityContextSection';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import PricingTiers from '@/components/v2/PricingTiers';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'AI Automation Agency & AI Agent Development Company USA | FactoryJet',
  description:
    'Custom AI agents that automate one workflow or your whole back office. FactoryJet is a US-focused AI automation agency — founder-led, shipped in weeks, built for small and mid-size businesses. Talk to the founder.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Automation Agency & AI Agent Development Company USA | FactoryJet',
    description:
      'Custom AI agents that automate one workflow or your whole back office. FactoryJet is a US-focused AI automation agency — founder-led, shipped in weeks, built for small and mid-size businesses.',
    url: 'https://factoryjet.com/services/ai-agents',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - AI Agent Development Services USA',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Agency & AI Agent Development Company USA | FactoryJet',
    description:
      'Custom AI agents that automate one workflow or your whole back office. FactoryJet is a US-focused AI automation agency — founder-led, shipped in weeks, built for small and mid-size businesses.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-agents',
    languages: usServiceAlternates['ai-agents'],
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
      name: 'What exactly is an AI agent, and how is it different from a chatbot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A chatbot answers questions. An AI agent takes action. A chatbot sits in a window and responds to what you type. An AI agent — built on the same large language model technology — connects to your tools, reads inputs from multiple sources, makes decisions, and completes multi-step tasks without you directing every move. It can check your inventory, update a CRM record, send a follow-up email, process a document, and report back on what it did — all in sequence, automatically.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kinds of tasks can an AI agent handle for my business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI agents are best at high-volume, rule-based work that currently eats your team\'s time: answering the same customer questions repeatedly, routing and triaging support tickets, qualifying inbound leads, processing invoices and documents, updating records across systems, scheduling appointments, sending follow-up sequences, and generating reports from raw data. If your team does something more than a few times a day and it follows a pattern, an AI agent can probably handle it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of AI agents does FactoryJet build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet builds six core types: Customer Service AI (24/7 support bots that handle tickets, answer questions, and escalate to humans), Sales AI (lead qualification, outreach sequencing, follow-up automation), Operations AI (invoice processing, scheduling, internal workflow automation), Data & Analytics AI (reporting agents that pull, clean, and summarize business data on demand), Voice AI (phone-based agents that handle inbound calls and book appointments), and Document Processing AI (agents that read, classify, extract, and route contracts, forms, and PDFs).',
      },
    },
    {
      '@type': 'Question',
      name: 'Which AI models power these agents — Claude, GPT-4o, or something else?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use Claude (Anthropic), GPT-4o (OpenAI), Gemini (Google), and open-source models like Mistral and LLaMA depending on your workflow, cost sensitivity, and data privacy requirements. We don\'t have a preferred vendor — we pick the right model for each use case. For orchestration we use LangChain, LangGraph, CrewAI, n8n, and Make.com.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the AI agent development process look like from start to finish?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We follow five stages: Discover (we map your workflows, data sources, and goals), Architect (we design the agent logic, integrations, and guardrails), Build (we develop and connect everything), Train & Test (we run the agent through real scenarios and tune its behavior), and Deploy (we launch, hand off, and train your team). Every stage ends with a demo so you see progress weekly and can course-correct before we build further.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build and deploy an AI agent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Simple single-workflow agents — a lead qualifier, a support bot, an invoice processor — typically go from kickoff to launch in 2–3 weeks. Multi-workflow platforms with CRM integrations and dashboards take 4–6 weeks. Enterprise systems with multiple agents and compliance requirements run 8–12 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will I see progress during the build, or is it a black box until launch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Weekly demos throughout — no exceptions. After every stage we show you what\'s been built and how it behaves. You can give feedback, adjust the logic, and reprioritize features before we move to the next stage.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens after the AI agent launches?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every engagement includes a 30-day post-launch support window. During that period we fix bugs, tune the agent\'s behavior based on real usage, and run a training session with your team. After 30 days, you can continue on a monthly retainer or manage it yourself — all code and API keys are yours.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to build a custom AI agent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet\'s AI agents are fixed-price and scoped to your build — the main drivers are how many workflows the agent handles, the integrations involved, and model usage. Most small businesses choose our Growth tier, covering multiple interconnected agents, CRM integrations, a management dashboard, and a 30-day support window. Enterprise platforms with multi-agent orchestration are scoped separately. All pricing is fixed and confirmed upfront after a free discovery call — no hourly billing, no scope creep.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is FactoryJet fixed-price, milestone-paid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work fixed-price and milestone-paid — every project scoped upfront with no scope-creep invoices. Our lean senior-only team delivers production-grade architecture, code, and handover. No layers of account management, project managers, or sales reps between your brief and the engineer building it. You brief an engineer; that engineer builds it. Full code ownership at handoff.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the typical ROI on an AI agent investment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common return comes from labor hours recovered. A customer support agent handling 70% of tickets replaces hundreds of hours of manual work per month. A lead qualification agent that responds within 60 seconds typically increases conversion rates by 20–35%. Most clients see payback within 3–6 months of launch.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there ongoing costs after the AI agent build is complete?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, two types: API usage costs (these scale with your usage volume and go directly to model providers, not marked up by FactoryJet) and optionally a FactoryJet retainer for ongoing optimization. The retainer is optional; many clients self-manage after the handoff.',
      },
    },
    {
      '@type': 'Question',
      name: 'What software and platforms can an AI agent connect to?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We integrate with most business software via API: CRMs (Salesforce, HubSpot, Pipedrive, Zoho), e-commerce (Shopify, WooCommerce, Magento, BigCommerce), communication tools (Slack, Gmail, Outlook, Twilio), project management (Notion, Airtable, Asana, Monday.com), databases (PostgreSQL, MySQL, Supabase, Firebase), and document storage (Google Drive, Dropbox, Box). If your platform has a REST API or webhook support, we can connect to it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a technical team to manage the AI agent after launch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. We design every agent with a non-technical operator in mind. The management dashboard lets you see what the agent is doing, review flagged items, adjust thresholds, and pause or resume workflows — all without touching code. We include a recorded training walkthrough specific to your agent.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you build AI agents for niche or highly specialized workflows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — most of what we build is custom. We\'ve built agents for insurance claim intake, legal document review, HVAC dispatching, wholesale reorder management, clinical scheduling, and SaaS onboarding sequences. The workflow logic, prompts, data connections, and guardrails are built specifically for your process.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if we switch software platforms after the AI agent is built?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We architect agents with modular integration layers, meaning the agent logic is separated from the connector code. Swapping one CRM for another typically means updating the integration module, not rebuilding the agent from scratch — days of work, not months.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my business data be safe when using an AI agent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We use API-level integrations (not screen scraping), enforce least-privilege data access, and implement full audit trails on every action. For regulated industries — healthcare, legal, finance — we can deploy private LLM setups that process your data without sending it to third-party model providers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if the AI agent makes a mistake or gives a wrong answer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every agent includes confidence thresholds (if the model isn\'t sure, it escalates to a human rather than guessing), guardrails on high-stakes actions (the agent requests human approval before sending emails, processing payments, or updating records), and a full action log for auditing. Responsible design means errors are surfaced and correctable, not silent.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can an AI agent replace my customer support team?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI agents work best as the first line of support — handling 60–80% of routine tickets, order status questions, and common queries automatically. They escalate anything nuanced or sensitive to your human team. Most clients don\'t reduce headcount; they redirect their team to higher-value customer relationships instead of repetitive queries.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is FactoryJet different from hiring a US AI development agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three differences: price (fixed-price, specialized engineers serving US businesses for 12+ years), speed (no account management layers between your brief and the engineer building it), and SMB depth (500+ small business projects — we understand the operational reality of businesses your size, not just enterprise AI theory).',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have results or examples from businesses similar to mine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We\'ve built AI agents for e-commerce brands that reduced support ticket volume by 70%, service businesses that cut lead response time from hours to under 60 seconds, and operations teams that eliminated 30+ hours per week of manual data entry. We\'re happy to share relevant case studies during a strategy call.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is the best AI agent development company in USA?',
      acceptedAnswer: { '@type': 'Answer', text: 'For SMBs and mid-market teams, FactoryJet makes a strong case: custom agents at fixed-price, senior engineers on every build, and full code ownership from day one. The best AI agent development services in USA share three traits worth filtering for: engineers scope the project (not a sales layer), pricing is fixed before work starts, and the agent ships into production with monitoring — not as a demo. Published lists of the top 10 AI agent development companies in USA are a reasonable shortlist; apply those three filters to whoever is on them.' },
    },
    {
      '@type': 'Question',
      name: 'How much does AI agent development cost in USA?',
      acceptedAnswer: { '@type': 'Answer', text: 'AI agent development cost in USA varies widely with integrations and autonomy level, and established agencies bill a steep premium. FactoryJet works fixed-price and milestone-paid, scoped to your build: single-workflow agents, multi-system agents, and complex multi-agent deployments are each scoped up front. Hourly-billed agencies usually land well above their initial estimate on the same scope, which is why we do not bill hourly.' },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Agent Development Services',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  serviceType: 'AI Agent Development',
  description:
    'Custom AI agents, AI automation workflows, and AI-native software for US small and medium businesses. Specializing in customer service AI, sales automation, operations AI, and document processing agents.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Starter AI Agent',
      description: 'Single-workflow AI agent for one focused business problem.',
    },
    {
      '@type': 'Offer',
      name: 'Growth AI Platform',
      description: 'Multi-workflow AI agent suite with CRM integrations and dashboard.',
    },
    {
      '@type': 'Offer',
      name: 'Enterprise AI System',
      description: 'Multi-agent orchestration platform with custom LLM fine-tuning.',
    },
  ],
  
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet builds your AI agent solution in 7 days',
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
  '@id': 'https://factoryjet.com/services/ai-agents#breadcrumb',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'US Services', item: 'https://factoryjet.com/services' },
    { '@type': 'ListItem', position: 3, name: 'AI Agents', item: 'https://factoryjet.com/services/ai-agents' },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const AI_AGENT_TYPES = [
  {
    name: 'Customer Service AI',
    description:
      'An AI agent that handles support tickets, answers FAQs, processes returns, and escalates complex issues to humans — around the clock, without extra headcount. Integrates with Zendesk, Intercom, Freshdesk, or your custom help desk.',
    example: 'Avg. 72% ticket deflection in the first 30 days.',
    linkLabel: 'See how it works',
    linkHref: '/contact',
  },
  {
    name: 'Sales AI Agent',
    description:
      'Qualifies inbound leads, sends personalized outreach sequences, books demos directly to your calendar, and logs every interaction to your CRM. Connects to HubSpot, Salesforce, Pipedrive, and Close.com.',
    example: 'Customers report 3–5× more qualified pipeline within 60 days.',
    linkLabel: 'Start a conversation',
    linkHref: '/contact',
  },
  {
    name: 'Operations AI',
    description:
      'Automates repetitive internal workflows: invoice processing, PO approvals, employee onboarding tasks, scheduling, and inter-department data routing. Built on n8n or Make.com for full auditability.',
    example: '40–65% reduction in manual data entry time reported by clients.',
    linkLabel: 'See pricing',
    linkHref: '#pricing',
  },
  {
    name: 'Data & Analytics AI',
    description:
      'An agent that connects to your databases, pulls weekly metrics, writes plain-English summaries, flags anomalies, and delivers reports to Slack or email — no BI tool subscription required.',
    example: 'Business owners reclaim 6–8 hours/week of manual reporting time.',
    linkLabel: 'Book a strategy call',
    linkHref: '/contact',
  },
  {
    name: 'Voice AI Agent',
    description:
      'Phone-based AI that handles inbound calls, answers questions, books appointments, qualifies callers, and transfers live to staff when needed. Built on Twilio + ElevenLabs with a natural conversational voice.',
    example: 'Handles up to 200 concurrent calls with zero wait time.',
    linkLabel: 'Listen to a demo',
    linkHref: '/contact',
  },
  {
    name: 'Document Processing AI',
    description:
      'An agent that reads, classifies, extracts key fields from, and routes contracts, invoices, forms, and PDFs — eliminating manual data entry from document-heavy workflows in legal, finance, and real estate.',
    example: 'Processes 500+ documents/hour vs. 8–10 manually.',
    linkLabel: 'Get a free assessment',
    linkHref: '/contact',
  },
];

const AI_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'A 60-minute strategy call. We map your highest-value automation opportunities, define the AI use case, and size the ROI before a single line of code is written.',
  },
  {
    number: '02',
    title: 'Architect',
    description:
      'We design the agent flow, choose the right LLM and tools, map data sources and integrations, and deliver a technical spec you approve before we build.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Engineering against your stack with weekly demos. The agent is built modularly so you can see it working — and provide feedback — throughout, not just at the end.',
  },
  {
    number: '04',
    title: 'Train & Test',
    description:
      'We run the agent against real business scenarios, tune the prompts and guardrails, and stress-test edge cases until it performs reliably in production conditions.',
  },
  {
    number: '05',
    title: 'Deploy & Scale',
    description:
      'Launch with monitoring, dashboards, and a recorded handover session. Optional monthly retainer to evolve the agent as your business grows. Your code, your keys, your call.',
  },
];

const ROI_STATS = [
  {
    value: '68%',
    label: 'average reduction in manual task time',
    microcopy: 'across FactoryJet AI deployments in 2024',
    categoryLabel: 'TASK AUTOMATION',
  },
  {
    value: '3.2×',
    label: 'faster customer response with AI agents',
    microcopy: 'vs. human-only support workflows',
    categoryLabel: 'RESPONSE SPEED',
  },
  {
    value: 'Fixed Price',
    label: 'milestone-paid AI agent builds with full code ownership',
    microcopy: 'same output quality — predictable from quote to launch',
    categoryLabel: 'PRICING MODEL',
  },
];

const US_AI_STATS = [
  {
    value: '96%',
    label: 'of enterprises plan to expand AI agent adoption in the next 12 months',
    sourceUrl: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
    sourceLabel: 'McKinsey State of AI 2025',
  },
  {
    value: '$10B+',
    label: 'projected US AI agent market value by end of 2026',
    sourceUrl: 'https://www.grandviewresearch.com/industry-analysis/autonomous-ai-agents-market-report',
    sourceLabel: 'Grand View Research',
  },
  {
    value: '33%',
    label: 'of enterprise software apps will include agentic AI by 2028, per Gartner',
    sourceUrl: 'https://www.gartner.com/en/newsroom/press-releases/2024-agentic-ai-forecast',
    sourceLabel: 'Gartner 2024',
  },
];

const INDUSTRIES = [
  {
    name: 'E-Commerce & Retail',
    description:
      'AI agents that manage inventory alerts, automate customer support, process returns, write product descriptions, and optimize reorder cycles — so your team focuses on growth, not operations.',
    example: 'One Shopify client cut support tickets 74% in 45 days.',
    linkLabel: 'See e-commerce AI',
    linkHref: '/contact',
  },
  {
    name: 'Healthcare & Wellness',
    description:
      'HIPAA-aware AI for patient intake forms, appointment scheduling, follow-up reminders, and document extraction from medical records — built with privacy-first architecture and full audit trails.',
    example: 'Reduces front-desk admin time by 4–5 hours per provider per week.',
  },
  {
    name: 'Real Estate',
    description:
      'AI that qualifies inbound leads from Zillow and Realtor.com, sends personalized follow-up sequences, writes listing descriptions, and books showing appointments directly to your calendar.',
    example: 'Agents report 40% more qualified showings booked per month.',
  },
  {
    name: 'Legal & Compliance',
    description:
      'Document review agents that extract key clauses from contracts, flag risk terms, classify filings, and maintain audit-ready logs — reducing the paralegal hours on high-volume document review.',
    example: 'Processes 100+ contracts per hour vs. 3–4 manually.',
  },
  {
    name: 'SaaS & Technology',
    description:
      'AI for onboarding automation, churn signal detection, in-app support deflection, and intelligent feature usage nudges — connected to your product database and CRM.',
    example: 'SaaS clients report 22% improvement in 90-day retention.',
  },
  {
    name: 'Professional Services',
    description:
      'AI agents for consulting, accounting, and marketing agencies: automated client reporting, proposal drafting, project status updates, and internal knowledge base Q&A for faster team answers.',
    example: 'Reclaims 8–12 hours/week for senior staff from reporting tasks.',
  },
];

const COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'US AI Agency' },
  { label: 'Freelancer' },
  { label: 'DIY Tools' },
] as const;

const COMPARISON_ROWS = [
  {
    feature: 'Pricing model',
    values: [
      'Fixed-price, scoped upfront',
      'Enterprise budgets',
      'Hourly, variable',
      'DIY tool subscriptions',
    ],
  },
  {
    feature: 'Delivery timeline',
    values: ['2–6 weeks', '3–6 months', '4–8 weeks (unreliable)', 'Ongoing — never "done"'],
  },
  {
    feature: 'Custom AI agent (not a chatbot)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'CRM & tool integrations',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="diy" kind="partial" />,
    ],
  },
  {
    feature: 'Non-technical dashboard',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="diy" kind="partial" />,
    ],
  },
  {
    feature: 'You own the code',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="yes" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: '30-day post-launch support',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Fixed-price contract',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="diy" kind="yes" />,
    ],
  },
  {
    feature: '12+ years of SMB domain experience',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
];

const PRICING_TIERS = [
  {
    name: 'Starter',
    priceRange: 'Scoped to your build',
    description:
      'One focused AI agent that solves your highest-impact manual task. Best for businesses automating a single workflow for the first time.',
    features: [
      'Single-workflow AI agent (customer service, sales, or ops)',
      'Connects to 1–2 existing tools (CRM, email, Slack)',
      'Simple admin interface — no code required to operate',
      'Claude or GPT-4o as the underlying model',
      'QA and prompt tuning included',
      '14-day post-launch support window',
    ],
    cta: { label: 'Talk to the Founder', modal: true, region: 'us' },
  },
  {
    name: 'Growth',
    priceRange: 'Most common scope',
    description:
      'A multi-workflow AI platform with deeper integrations and a management dashboard. The most popular tier for growing US SMBs.',
    features: [
      'Up to 3 interconnected AI agents (e.g., sales + support + ops)',
      'Full CRM, e-commerce, or ERP integration',
      'Custom analytics dashboard (no third-party BI tool needed)',
      'Voice AI option (inbound call handling)',
      'Prompt fine-tuning and multi-agent orchestration',
      'Team training session + documentation',
      '30-day post-launch support window',
      'Monthly retainer option for ongoing improvements',
    ],
    cta: { label: 'Get a Custom Quote', modal: true, region: 'us' },
    popular: true,
  },
  {
    name: 'Enterprise',
    priceRange: 'Custom scope',
    description:
      'A full multi-agent AI system with custom LLM fine-tuning, private deployment options, and a dedicated engineering partner.',
    features: [
      'Agent workflows & integrations scoped per project brief',
      'Custom LLM fine-tuning on your proprietary data',
      'Private cloud or on-premise deployment option',
      'Multi-department rollout with change management support',
      'Dedicated engineering point of contact',
      'SLA-backed uptime and incident response',
      '90-day post-launch support and iteration window',
      'Quarterly AI roadmap review',
    ],
    cta: { label: 'Schedule an Enterprise Call', modal: true, region: 'us' },
  },
] as const;

/* ─── FAQ categories ─────────────────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'what-are-agents', label: 'What Are AI Agents' },
  { key: 'process',         label: 'Process & Timeline' },
  { key: 'pricing',         label: 'Pricing & ROI' },
  { key: 'technical',       label: 'Technical & Integrations' },
  { key: 'trust',           label: 'Trust & Results' },
];

/* ─── FAQ items — 21 conversational Q-A pairs, AI-citation optimized ────── */
const FAQ_ITEMS = [

  /* ── What Are AI Agents ── */
  {
    category: 'what-are-agents',
    question: 'What exactly is an AI agent, and how is it different from a chatbot?',
    answer:
      'A chatbot answers questions. An AI agent takes action. A chatbot sits in a window and responds to what you type. An AI agent — built on the same large language model technology — connects to your tools, reads inputs from multiple sources, makes decisions, and completes multi-step tasks without you directing every move. It can check your inventory, update a CRM record, send a follow-up email, process a document, and report back on what it did — all in sequence, automatically.',
  },
  {
    category: 'what-are-agents',
    question: 'What kinds of tasks can an AI agent handle for my business?',
    answer:
      'AI agents are best at high-volume, rule-based work that currently eats your team\'s time: answering the same customer questions repeatedly, routing and triaging support tickets, qualifying inbound leads, processing invoices and documents, updating records across systems, scheduling appointments, sending follow-up sequences, and generating reports from raw data. If your team does something more than a few times a day and it follows a pattern, an AI agent can probably handle it.',
  },
  {
    category: 'what-are-agents',
    question: 'What types of AI agents does FactoryJet build?',
    answer:
      'FactoryJet builds six core types: Customer Service AI (24/7 support bots that handle tickets, answer questions, and escalate to humans), Sales AI (lead qualification, outreach sequencing, follow-up automation), Operations AI (invoice processing, scheduling, internal workflow automation), Data & Analytics AI (reporting agents that pull, clean, and summarize business data on demand), Voice AI (phone-based agents that handle inbound calls and book appointments), and Document Processing AI (agents that read, classify, extract, and route contracts, forms, and PDFs).',
  },
  {
    category: 'what-are-agents',
    question: 'Which AI models power these agents — Claude, GPT-4o, or something else?',
    answer:
      'We use Claude (Anthropic), GPT-4o (OpenAI), Gemini (Google), and open-source models like Mistral and LLaMA depending on your workflow, cost sensitivity, and data privacy requirements. We don\'t have a preferred vendor — we pick the right model for each use case. For orchestration we use LangChain, LangGraph, CrewAI, n8n, and Make.com. Most clients don\'t need to think about this; we handle model selection and explain the reasoning.',
  },

  /* ── Process & Timeline ── */
  {
    category: 'process',
    question: 'What does the development process look like from start to finish?',
    answer:
      'We follow five stages: Discover (we map your workflows, data sources, and goals), Architect (we design the agent logic, integrations, and guardrails), Build (we develop and connect everything), Train & Test (we run the agent through real scenarios and tune its behavior), and Deploy (we launch, hand off, and train your team). Every stage ends with a demo so you see progress weekly and can course-correct before we build further.',
  },
  {
    category: 'process',
    question: 'How long does it take to build and deploy an AI agent?',
    answer:
      'Simple single-workflow agents — a lead qualifier, a support bot, an invoice processor — typically go from kickoff to launch in 2–3 weeks. Multi-workflow platforms with CRM integrations and dashboards take 4–6 weeks. Enterprise systems involving multiple agents, complex data pipelines, and compliance requirements run 8–12 weeks. We give you a firm timeline after the discovery session, not before, because scope drives everything.',
  },
  {
    category: 'process',
    question: 'Will I see progress during the build, or is it a black box until launch?',
    answer:
      'Weekly demos throughout — no exceptions. After every stage we show you what\'s been built and how it behaves. You can give feedback, adjust the logic, and reprioritize features before we move to the next stage. Most clients find that seeing the agent working early changes their thinking about what\'s possible, and we build in room for that.',
  },
  {
    category: 'process',
    question: 'What happens after the AI agent launches?',
    answer:
      'Every engagement includes a 30-day post-launch support window. During that period we fix bugs, tune the agent\'s behavior based on real usage, and run a training session with your team. After 30 days, you can continue on a monthly retainer for ongoing optimization, or manage it yourself — the dashboard is built for non-technical operators and all code and API keys are yours.',
  },

  /* ── Pricing & ROI ── */
  {
    category: 'pricing',
    question: 'How much does it cost to build a custom AI agent?',
    answer:
      'FactoryJet\'s AI agents are fixed-price and scoped to your build — the main drivers are how many workflows the agent handles, the integrations involved, and model usage. Most small businesses choose our Growth tier, covering multiple interconnected agents, CRM integrations, a management dashboard, and a 30-day support window. Enterprise platforms with multi-agent orchestration are scoped separately. All pricing is fixed and confirmed upfront after a free discovery call — no hourly billing, no scope creep.',
  },
  {
    category: 'pricing',
    question: 'Why is FactoryJet fixed-price, milestone-paid?',
    answer:
      'Predictability. Fixed-price means every project is scoped upfront — no hourly billing, no scope-creep invoices, no surprise change orders. Milestone-paid means you pay against delivered work, not against time. Our lean senior-only team delivers production-grade architecture, code, and handover with no layers of account management between your brief and the engineer building it. You brief an engineer; that engineer builds it. You get full code ownership at handoff and the quote you sign is what you pay.',
  },
  {
    category: 'pricing',
    question: 'What is the typical ROI on an AI agent investment?',
    answer:
      'The most common return comes from labor hours recovered. A customer support agent handling 70% of tickets replaces hundreds of hours of manual work per month. A lead qualification agent that responds to every inbound lead within 60 seconds typically increases conversion rates by 20–35% — response speed is the single biggest driver of lead close rates. Most clients see payback within 3–6 months of launch.',
  },
  {
    category: 'pricing',
    question: 'Are there ongoing costs after the build is complete?',
    answer:
      'Yes, two types: API usage costs (these scale with your usage volume and go directly to model providers, not marked up by FactoryJet) and optionally a FactoryJet retainer for ongoing optimization. The retainer is optional; many clients self-manage after the handoff.',
  },

  /* ── Technical & Integrations ── */
  {
    category: 'technical',
    question: 'What software and platforms can an AI agent connect to?',
    answer:
      'We integrate with most business software via API: CRMs (Salesforce, HubSpot, Pipedrive, Zoho), e-commerce (Shopify, WooCommerce, Magento, BigCommerce), communication tools (Slack, Gmail, Outlook, Twilio for SMS and voice), project management (Notion, Airtable, Asana, Monday.com), databases (PostgreSQL, MySQL, Supabase, Firebase), and document storage (Google Drive, Dropbox, Box). If your platform has a REST API or webhook support, we can connect to it.',
  },
  {
    category: 'technical',
    question: 'Do I need a technical team to manage the AI agent after launch?',
    answer:
      'No. We design every agent with a non-technical operator in mind. The management dashboard lets you see what the agent is doing, review flagged items, adjust thresholds, and pause or resume workflows — all without touching code. We also include a recorded training walkthrough specific to your agent. If something breaks or needs updating because a connected platform changed its API, you contact us and we fix it.',
  },
  {
    category: 'technical',
    question: 'Can you build AI agents for niche or highly specialized workflows?',
    answer:
      'Yes — most of what we build is custom. We\'ve built agents for insurance claim intake, legal document review, HVAC dispatching, wholesale reorder management, clinical scheduling, and SaaS onboarding sequences, among many others. The underlying architecture is the same; the workflow logic, prompts, data connections, and guardrails are built specifically for your process. We start with a discovery session to map the workflow before writing a line of code.',
  },
  {
    category: 'technical',
    question: 'What happens if we switch software platforms after the agent is built?',
    answer:
      'We architect agents with modular integration layers, meaning the agent logic is separated from the connector code. Swapping one CRM for another typically means updating the integration module, not rebuilding the agent from scratch — days of work, not months. We document all integration points during delivery specifically so that future changes are straightforward.',
  },

  /* ── Trust & Results ── */
  {
    category: 'trust',
    question: 'Will my business data be safe when using an AI agent?',
    answer:
      'Yes. We architect with data privacy as a baseline requirement, not an afterthought. We use API-level integrations (not screen scraping), enforce least-privilege data access so the agent only touches what it needs, and implement full audit trails on every action. For regulated industries — healthcare, legal, finance — we can deploy private LLM setups that process your data without sending it to third-party model providers. All data flows are documented during delivery.',
  },
  {
    category: 'trust',
    question: 'What happens if the AI agent makes a mistake or gives a wrong answer?',
    answer:
      'Every agent we build includes confidence thresholds (if the model isn\'t sure, it escalates to a human rather than guessing), guardrails on high-stakes actions (the agent requests human approval before sending emails, processing payments, or updating records it shouldn\'t touch autonomously), and a full action log so you can audit exactly what the agent did and when. No AI system is 100% accurate — responsible design means errors are surfaced and correctable, not silent.',
  },
  {
    category: 'trust',
    question: 'Can an AI agent replace my customer support team?',
    answer:
      'It shouldn\'t, and we\'d advise against framing it that way. AI agents work best as the first line of support — handling 60–80% of routine tickets, order status questions, and common queries automatically, around the clock, without wait times. They escalate anything nuanced, emotionally sensitive, or outside their confidence threshold to your human team. Most clients don\'t reduce headcount; they redirect their team to higher-value customer relationships instead of repetitive queries.',
  },
  {
    category: 'trust',
    question: 'How is FactoryJet different from hiring a US AI development agency?',
    answer:
      'Three differences that matter: pricing model (fixed-price and milestone-paid — every project scoped upfront with no scope-creep invoices, backed by 12+ years serving US businesses), speed (no layers of account management between your brief and the engineer building it), and SMB depth (500+ small business projects — we understand the operational reality of businesses your size, not just enterprise AI theory). We also won\'t pitch you an AI agent when a simpler automation would do the job.',
  },
  {
    category: 'trust',
    question: 'Do you have results or examples from businesses similar to mine?',
    answer:
      'Yes. We\'ve built AI agents for e-commerce brands that reduced support ticket volume by 70%, for service businesses that cut lead response time from hours to under 60 seconds, and for operations teams that eliminated 30+ hours per week of manual data entry. We\'re happy to share relevant case studies during a strategy call — and if we haven\'t worked in your specific industry, we\'ll tell you that upfront rather than pretend otherwise.',
  },

  // ── Choosing an agency — money-query coverage, added 2026-06-11 ──
  {
    category: 'what-are-agents',
    question: 'Who is the best AI agent development company in USA?',
    answer:
      'For SMBs and mid-market teams, FactoryJet makes a strong case: custom agents at fixed-price, senior engineers on every build, and full code ownership from day one. The best AI agent development services in USA share three traits worth filtering for: engineers scope the project (not a sales layer), pricing is fixed before work starts, and the agent ships into production with monitoring — not as a demo. Published lists of the top 10 AI agent development companies in USA are a reasonable shortlist; apply those three filters to whoever is on them.',
  },
  {
    category: 'pricing',
    question: 'How much does AI agent development cost in USA?',
    answer:
      'AI agent development cost in USA varies widely with integrations and autonomy level, and established agencies bill a steep premium. FactoryJet works fixed-price and milestone-paid, scoped to your build: single-workflow agents, multi-system agents, and complex multi-agent deployments are each scoped up front. Hourly-billed agencies usually land well above their initial estimate on the same scope, which is why we do not bill hourly.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function AIAgentsPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        id="ai-agents-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="ai-agents-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="ai-agents-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        id="speakable-schema-ai-agents"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "AI Agent Development USA | Custom AI Agents | FactoryJet",
          "url": "https://factoryjet.com/services/ai-agents/",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", ".faq-answer", "[data-speakable]"]
          }
        }) }}
      />
      <script
        id="ai-agents-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader
        navLinks={[
          { label: 'Services', href: '/services' },
          { label: 'AI Agents', href: '/services/ai-agents' },
          { label: 'Portfolio', href: '/portfolio' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Contact', modal: true, region: 'us' },
        ]}
        cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="us" source="us_services_ai_agents_hero" />}
          eyebrow="AI AGENT DEVELOPMENT · USA"
          headline="AI Agents That Run Your Business While You Sleep"
          lead="Your competitors are automating the work that costs you 20 hours a week. FactoryJet builds custom AI agents — for customer support, sales, operations, and more — that work around the clock, integrate with your existing tools, and cost fixed-price vs a US AI agency."
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={[
            '500+ businesses served',
            'fixed-price, milestone-paid',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#F05A28]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                AI AGENT IN ACTION
              </p>
              <p className="mt-4 font-fj-display text-[2rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                3,200 support tickets handled automatically — in the first month.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Customer asks about order status → agent checks Shopify → replies in 4 seconds',
                  'Lead fills out contact form → agent qualifies → books a demo to your calendar',
                  'Invoice arrives by email → agent extracts data → logs to QuickBooks → notifies AP',
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
                  All three workflows run 24/7, without a single new hire.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 2. TRUST STATS ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ businesses. 12 years of building. One goal: your results."
        />

        {/* ── 3. WHAT IS AN AI AGENT ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="AI EXPLAINED"
          headline="What Is an AI Agent, and Why Does Your Business Need One?"
          lead="A chatbot answers questions. An AI agent takes action. It connects to your tools, reads inputs, makes decisions, and completes multi-step workflows — without a human directing every step."
          body={
            <>
              {/* ── Para 1: capability chip strip (aria-hidden) + full paragraph ── */}
              <div
                className="flex flex-wrap gap-2"
                aria-hidden
              >
                {[
                  'Check inventory',
                  'Send customer updates',
                  'Update CRM records',
                  'Book meetings',
                  'Draft contracts',
                  'Process documents',
                  'Report back',
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
                Most business owners have heard of ChatGPT. But a chatbot and an AI agent are fundamentally different things. A chatbot sits in a window and responds to typed questions. An AI agent — built on the same underlying technology — can actually do things: check your inventory, send a customer an update, update a CRM record, book a meeting, draft a contract, process a document, and then report back on what it did.
              </p>

              {/* ── 3-col benefit cards — key props from para 2, visualised (aria-hidden) ── */}
              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[
                  { value: '24/7', label: 'Always on' },
                  { value: '0', label: 'Sick days' },
                  { value: '~$0', label: 'Marginal cost' },
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

              {/* ── Editorial pull-quote before para 2 (aria-hidden — decorative) ── */}
              <div
                className="border-l-2 border-[#F05A28] pl-5 py-1"
                aria-hidden
              >
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.1875rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  More like a capable new team member than a search bar.
                </p>
              </div>
              <p>
                The result is a piece of software that behaves more like a capable new team member than a search bar. It works 24 hours a day, handles the volume spikes that overwhelm your human staff, and never calls in sick. And unlike hiring, it costs a fixed amount to build and runs at near-zero marginal cost afterward.
              </p>

              {/* ── Para 3: full paragraph + industry grid (aria-hidden) ── */}
              <p>
                FactoryJet has been building software for small and mid-sized businesses. We understand what operations look like inside a 10-person company — the manual data entry, the repetitive emails, the spreadsheet that someone has to update every Friday. Those are exactly the workflows AI agents are designed to eliminate. We&apos;ve delivered AI systems for e-commerce brands, real estate teams, SaaS companies, professional services firms, and healthcare practices across the US.
              </p>
              <div className="grid grid-cols-2 gap-2" aria-hidden>
                {[
                  'E-commerce brands',
                  'Real estate teams',
                  'SaaS companies',
                  'Professional services',
                  'Healthcare practices',
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

              {/* Card header bar */}
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  How an AI Agent Operates
                </p>
              </div>

              {/* Step-flow diagram */}
              <div className="px-7 pt-6 pb-2">
                {([
                  {
                    step: '01',
                    title: 'Receives a trigger',
                    desc: 'Email, form submission, scheduled time, webhook, or API call fires.',
                  },
                  {
                    step: '02',
                    title: 'Reads your data',
                    desc: 'Queries your CRM, inventory system, calendar, or any connected tool.',
                  },
                  {
                    step: '03',
                    title: 'Takes action',
                    desc: 'Sends a reply, books a meeting, updates a record, or processes a document.',
                  },
                  {
                    step: '04',
                    title: 'Reports back',
                    desc: 'Logs every action with a full audit trail and notifies your team.',
                  },
                ] as const).map((item, i, arr) => (
                  <div key={item.step} className="flex gap-4">
                    {/* Left column: numbered circle + connector line */}
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
                    {/* Right column: content */}
                    <div className={i < arr.length - 1 ? 'pb-5 pt-0.5' : 'pb-7 pt-0.5'}>
                      <p
                        className="font-fj-body font-semibold text-fj-ink"
                        style={{ fontSize: '0.9375rem', lineHeight: 1.3 }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="mt-1 font-fj-body text-fj-neutral-500"
                        style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stat — full-width tinted footer stripe */}
              <div className="border-t border-fj-neutral-200 bg-fj-neutral-50 px-7 py-6">
                <div className="mb-3 h-[3px] w-8 rounded-full bg-[#F05A28]" aria-hidden />
                <p
                  className="fj-display font-bold text-fj-ink"
                  style={{ fontSize: '2.75rem', lineHeight: 1, letterSpacing: '-0.04em' }}
                >
                  68%
                </p>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-[1.5] text-fj-neutral-600">
                  average reduction in manual task time for FactoryJet AI clients.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 4. THE AI GAP (DARK) ─────────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE PROBLEM"
          headline="Your competitors are automating. Most small businesses are still doing it by hand."
          lead="The gap between companies that have deployed AI and those that haven't is growing fast — and it shows up in response times, operational costs, and customer experience. The businesses winning right now aren't bigger. They're faster."
          pillars={[
            {
              icon: '⏱',
              title: '20–30 hours/week lost to manual work',
              body: 'The average SMB owner spends more than half their working week on tasks that AI can handle: answering the same support emails, updating spreadsheets, chasing invoices, and manually entering data between systems. That time doesn\'t come back — until you automate.',
            },
            {
              icon: '📉',
              title: 'Slow response times are costing you deals',
              body: 'Studies show 78% of customers buy from the first business that responds to their inquiry. If your competitor has a sales AI that follows up in under 60 seconds and you\'re relying on a team member to check email twice a day, the math is not in your favor.',
            },
            {
              icon: '💸',
              title: 'US AI agencies are priced for enterprise, not SMBs',
              body: 'A mid-tier US AI development agency quotes enterprise rates for a production AI system — before the retainer. FactoryJet delivers the same engineering quality at fixed-price, because our experienced team has the same skills with a radically different cost structure.',
            },
          ]}
        />

        {/* ── 5. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How We Build Your AI Agent: from Strategy Call to Go-Live"
          lead="A structured 5-stage process that keeps you informed at every step and delivers a working AI agent — not a PowerPoint about one."
          stages={AI_JOURNEY_STAGES}
          closingNote="5 STAGES · 2–12 WEEKS TO FIRST AGENT IN PRODUCTION · WEEKLY DEMOS THROUGHOUT"
        />

        {/* ── 6. WHAT WE BUILD (AI AGENT TYPES) ───────────────────────────── */}
        <IndustriesGrid
          eyebrow="WHAT WE BUILD"
          headline="Six Categories of AI Agents We Build for US Businesses"
          lead="Every business has different bottlenecks. We build the right type of AI agent for your highest-impact use case — not a generic template you'll outgrow in three months."
          sectors={AI_AGENT_TYPES}
        />

        {/* ── 7. ROI STATS ─────────────────────────────────────────────────── */}
        <div className="bg-fj-neutral-50">
          <BoringStatsRow stats={ROI_STATS} align="center" />
        </div>

        {/* ── 8. OUR FULL AI SERVICES SUITE ────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="OUR AI SERVICES"
          headline="More Than AI Agents: a Full AI Solutions Practice"
          lead="FactoryJet isn't a one-trick AI shop. We offer a complete range of AI services so you can build once and scale — from a single agent to a company-wide AI layer."
          reverseOnDesktop
          body={
            <>
              {/* Service chip strip — aria-hidden decorative */}
              <div className="flex flex-wrap gap-2" aria-hidden="true">
                {['AI Agents', 'AI Automation', 'AI-Native Software', 'AI Apps', 'AI SEO', 'AI Video'].map((svc) => (
                  <span
                    key={svc}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#F05A28]"
                    style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                  >
                    {svc}
                  </span>
                ))}
              </div>
              <p>
                <strong className="font-semibold text-fj-ink">AI Agent Development</strong> — Custom agents that autonomously handle customer service, sales, operations, and data workflows. Built on Claude, GPT-4o, or your preferred model.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">AI Automation</strong> — Workflow automation using n8n, Make.com, and Zapier, connected to your existing business stack. For businesses that need reliable automation without full custom development.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">AI-Native Software</strong> — Greenfield web applications and internal tools built AI-first from the ground up — with LLM capabilities baked into the product architecture, not bolted on.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">AI-Powered Apps</strong> — Add AI features to your existing software: intelligent search, document summarization, recommendation engines, and conversational UI layers.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">AI SEO</strong> — Optimize your website for AI search engines — Google AI Overviews, ChatGPT, Perplexity, and Gemini — using structured data, entity optimization, and answer-first content architecture.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">AI Video Studio</strong> — AI-generated video content, product demos, and social media assets at a fraction of traditional production costs. Scripts, voiceover, visuals, and editing — all delivered in 48 hours.
              </p>
            </>
          }
          rightSlot={
            <div
              className="w-full overflow-hidden rounded-2xl bg-white shadow-sm"
              style={{
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'rgb(229, 231, 235)',
                borderTopWidth: '2px',
                borderTopColor: '#F05A28',
              }}
            >
              {/* Card header */}
              <div className="border-b border-fj-neutral-100 px-8 py-5">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  Our Tech Stack
                </p>
              </div>

              {/* Tech rows */}
              <div className="divide-y divide-fj-neutral-100 px-8">
                {[
                  { category: 'LLMs', tools: 'Claude, GPT-4o, Gemini, Llama' },
                  { category: 'Orchestration', tools: 'LangChain, LangGraph, CrewAI' },
                  { category: 'Automation', tools: 'n8n, Make.com, Zapier' },
                  { category: 'Voice AI', tools: 'Twilio, ElevenLabs, Vapi' },
                  { category: 'Databases', tools: 'PostgreSQL, Supabase, Pinecone' },
                  { category: 'Integrations', tools: 'HubSpot, Salesforce, Shopify, Slack' },
                  { category: 'Infrastructure', tools: 'AWS, Vercel, Cloudflare, Docker' },
                ].map((item) => (
                  <div key={item.category} className="flex items-center justify-between gap-4 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(240,90,40,0.50)]" aria-hidden="true" />
                      <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">
                        {item.category}
                      </p>
                    </div>
                    <p className="text-right font-fj-body text-[0.875rem] text-fj-neutral-600">
                      {item.tools}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer stripe */}
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-8 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full bg-[#F05A28]" aria-hidden="true" />
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.0625rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}
                >
                  Full stack. Zero lock-in.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 9. US MARKET CONTEXT ─────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="THE US AI MARKET"
          headline="AI Agents Are No Longer Optional for US Small Businesses"
          leadParagraphs={[
            "The conversation has shifted from 'should we explore AI?' to 'how fast can we deploy it?' According to McKinsey's 2025 State of AI report, 96% of enterprises plan to expand AI agent adoption in the next 12 months. The businesses moving fastest aren't the Fortune 500 — they're the agile SMBs who can adopt new tools without a six-month procurement process.",
            "FactoryJet has served small and medium businesses in Austin, Miami, Denver, Nashville, Portland, Charlotte, Raleigh, Tampa, and across the US. We understand what the inside of a 10-person business looks like — and we know exactly where AI creates the most leverage: customer response speed, back-office automation, and reducing the manual labor that burns out your best people.",
            "The businesses we build for aren't buying AI because it's trendy. They're buying it because they ran the math: a Growth AI platform that saves 25 staff hours per week pays for itself in weeks — and keeps paying forever.",
          ]}
          bodySlot={
            <>
              {/* Pull-quote — decorative, aria-hidden */}
              <div
                className="border-l-2 border-[#F05A28] py-1 pl-5"
                aria-hidden="true"
              >
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  From &lsquo;should we explore AI?&rsquo; to &lsquo;how fast can we deploy it?&rsquo;
                </p>
              </div>
              {/* City chip strip — decorative, aria-hidden */}
              <div className="mt-5 flex flex-wrap gap-2" aria-hidden="true">
                {['Austin TX', 'Miami FL', 'Denver CO', 'Nashville TN', 'Portland OR', 'Charlotte NC', 'Raleigh NC', 'Tampa FL'].map((city) => (
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
          stats={US_AI_STATS}
        />

        {/* ── 10. COMPARISON TABLE ─────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. US AI Agency vs. Freelancer vs. DIY Tools"
          lead="Not all AI development options are equal. Here's what the decision actually looks like when you compare side by side."
          pullQuote={{
            stat: 'Fixed Price',
            caption: 'milestone-paid with full code ownership — same engineering quality, predictable from quote to launch.',
          }}
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
          footer="Prices and timelines reflect typical market ranges as of 2026. FactoryJet fixed-price contracts available for all tiers."
        />

        {/* ── 12. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="PRICING"
            headline="Transparent, Fixed-Price AI Development"
            lead="No hourly billing. No scope creep surprises. Every tier includes a fixed scope, a fixed price, and a delivery timeline we stand behind."
            tiers={PRICING_TIERS}
            footnote="Custom enterprise scopes quoted after a discovery call. Monthly retainer options available. You own all code and API keys."
          />
        </div>

        {/* ── 13. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="We're not a US AI agency with a fancy website. That's the point."
          lead="We're a 25-year-old software company that has built 500+ production systems for real businesses. The AI we build doesn't live in a slide deck — it runs in production and does actual work."
          pillars={[
            {
              icon: '⚡',
              title: 'Speed without cutting corners',
              body: 'A US AI agency has account managers, project coordinators, and a sales team to keep fed. We don\'t. When you brief us, an engineer reads it — not an account manager. That\'s why our timelines are weeks, not quarters.',
            },
            {
              icon: '💡',
              title: 'SMB domain depth, not startup theory',
              body: 'We\'ve built for e-commerce brands, law firms, healthcare practices, real estate teams, and SaaS companies. We know where the actual complexity lives in a 15-person business. We build for that reality — not for a Y Combinator pitch.',
            },
            {
              icon: '🔒',
              title: 'You own everything. Always.',
              body: 'No vendor lock-in, no SaaS subscriptions, no proprietary platforms you can\'t leave. We deliver the full codebase, all API keys, and documentation. If you outgrow us, you walk away with an asset — not a dependency.',
            },
          ]}
        />

        {/* ── 14. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything You Need to Know Before You Start"
          lead="No jargon. No runaround. Here are the questions we get on every strategy call — answered straight."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* Cities We Serve — internal linking for SEO */}
        <section className="py-10 bg-[#FAFAF7]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-semibold text-[#F05A28] uppercase tracking-widest mb-3">Serving the US</p>
            <h2 className="text-2xl font-bold text-[#0F0F12] mb-6">AI Agent Development Services by City</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { city: 'Austin, TX', href: '/austin/ai-agents/' },
                { city: 'Denver, CO', href: '/denver/ai-agents/' },
                { city: 'Raleigh, NC', href: '/raleigh/ai-agents/' },
              ].map(({ city, href }) => (
                <Link key={href} href={href} className="px-4 py-2 rounded-full border border-[#F05A28] text-[#F05A28] text-sm font-medium hover:bg-[#F05A28] hover:text-white transition-colors">
                  {city}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── 15. FINAL CTA ─────────────────────────────────────────────────── */}
        <div id="final-cta">
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Talk to the Founder — No Obligation"
          sub="In 30 minutes, we'll map your top automation opportunity, estimate the ROI, and tell you exactly what it would cost to build. No pitch. No pressure. Just a straight answer from an engineer who's built it before."
          primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Most clients see ROI within 12 weeks. Free call, fixed price, no hidden fees."
        />
        </div>

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
