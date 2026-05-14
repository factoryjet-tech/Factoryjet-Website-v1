import type { Metadata } from 'next';
import Script from 'next/script';
import { usServiceAlternates } from '@/data/hreflangMap';
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
  title: 'AI Integration Services USA | Connect AI to Your Business Tools | FactoryJet',
  description:
    'FactoryJet connects AI capabilities to your existing business software — CRM, e-commerce, ERP, and custom apps. Add AI to tools you already use. Starting at $3,500. Free strategy call.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Integration Services USA | FactoryJet',
    description:
      'Connect GPT-4o, Claude, and AI models to your CRM, e-commerce platform, ERP, and custom software. 60–70% cheaper than US AI integration agencies. Fast delivery.',
    url: 'https://factoryjet.com/us/services/ai-integration-services',
    images: [
      {
        url: 'https://factoryjet.com/images/us/services/hero-ai-integration.webp',
        width: 1200,
        height: 800,
        alt: 'FactoryJet - AI Integration Services USA',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Integration Services USA | FactoryJet',
    description:
      'Connect AI to your existing business tools. 60–70% cheaper than US agencies. Fast delivery. Free strategy call.',
    images: ['https://factoryjet.com/images/us/services/hero-ai-integration.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/ai-integration-services',
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
      name: 'What are AI integration services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI integration services connect AI models — like GPT-4o, Claude, or Gemini — to your existing business software so those tools can think, generate, classify, extract, and summarize using real AI capabilities. Rather than replacing your software, AI integration adds a layer of intelligence to what you already use: your CRM generates follow-up drafts, your e-commerce platform writes product descriptions, your support desk classifies tickets automatically, your ERP flags anomalies in financial data.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between AI integration and building a custom AI app from scratch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Building from scratch means creating a new application with AI built in — usually for a workflow that doesn\'t exist in your current software. AI integration means adding AI capabilities to software you already have and already use. Most businesses need both at different times: integrations first (faster, lower cost, immediate ROI from existing workflows) and custom builds later when you need something your current tools fundamentally can\'t do.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kinds of AI integrations does FactoryJet build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Six core types: CRM AI (email draft generation, lead scoring, follow-up suggestions directly in HubSpot or Salesforce), E-Commerce AI (product description generation, customer review analysis, personalized recommendation APIs for Shopify and WooCommerce), Support Desk AI (automatic ticket classification, AI-drafted reply suggestions, sentiment analysis in Zendesk or Intercom), Document AI (extract, classify, and summarize data from PDFs, contracts, and forms connected to your existing document workflow), Custom App AI (embed GPT-4o or Claude directly into your internal tools via API), and Data Intelligence AI (AI-powered anomaly detection and natural-language queries on your existing databases).',
      },
    },
    {
      '@type': 'Question',
      name: 'Which AI models can you integrate — GPT-4o, Claude, or others?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We integrate GPT-4o (OpenAI), Claude 3.5 Sonnet (Anthropic), Gemini (Google), and open-source models like Mistral and LLaMA 3. Model selection depends on your use case, cost sensitivity, and data privacy requirements. For most business integrations, GPT-4o or Claude gives the best accuracy-to-cost ratio. For regulated industries or private data, we can integrate self-hosted models that never send data to third-party providers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the AI integration development process look like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Four stages: Discover (we audit your current software stack, identify the highest-value AI integration points, and define the data flows), Design (we specify the API architecture, prompt engineering approach, and how AI outputs surface in your existing UI), Build (we develop and test the integration with weekly demos), and Deploy (production launch with monitoring, documentation, and a 30-day support window). Most integrations don\'t require changes to your existing software UI — the AI runs in the background.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to integrate AI into my existing software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A single focused AI integration — adding AI-generated email drafts to a CRM, or automatic ticket classification to a help desk — typically goes from kickoff to production in 1–3 weeks. A multi-system AI integration connecting 3–5 platforms takes 4–6 weeks. Custom integrations with complex data pipelines, fine-tuned models, or legacy system APIs run 8–12 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens after the AI integration is deployed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every engagement includes a 30-day post-launch window: we monitor AI output quality, tune prompts based on real usage, handle API version changes from connected platforms, and deliver team training. After 30 days you can self-manage (documentation covers all integration points) or continue on a monthly retainer for prompt optimization, new integration points, or model upgrades.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do AI integration services cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet\'s AI integrations start at $3,500 for a focused single-system integration. The Growth tier at $9,000 covers multi-system AI integration with a unified API layer and monitoring — the most popular option for US SMBs. Enterprise integrations with custom model fine-tuning, legacy system APIs, and compliance requirements start at $18,000. All prices are 60–70% lower than US AI integration agencies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is FactoryJet 60–70% cheaper than US AI integration agencies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our engineering team is India-based. Same quality of API architecture, prompt engineering, and integration delivery at dramatically lower labor costs. We\'ve served US businesses for 25 years. You brief an engineer; that engineer builds it. No account management layers, no inflated agency overhead.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the ROI from AI integration services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ROI on AI integration typically comes from two sources: time saved (a sales rep writing AI-assisted follow-up emails spends 15 minutes per day instead of 90 minutes — and the AI-assisted emails convert better) and quality improvement (AI-generated product descriptions tested by clients show 15–25% higher conversion rates vs. manually written copy). Most AI integrations pay for themselves within 60–90 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there ongoing costs after the AI integration is built?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'One type: AI model API costs (typically $20–$150/month for most SMB usage volumes, paid directly to OpenAI, Anthropic, or Google — not marked up by FactoryJet). Optional monthly retainer for prompt optimization or new integration points. There are no FactoryJet platform fees after delivery.',
      },
    },
    {
      '@type': 'Question',
      name: 'What software platforms can AI be integrated with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We integrate AI into: CRMs (HubSpot, Salesforce, Pipedrive, Zoho, Close.com), e-commerce platforms (Shopify, WooCommerce, BigCommerce, Magento), support desks (Zendesk, Intercom, Freshdesk, Help Scout), accounting software (QuickBooks, Xero), document management (Google Drive, Box, Dropbox, SharePoint), internal databases (PostgreSQL, MySQL, Supabase, Firebase), and custom web applications (via REST API). If your software has an API or webhook, AI can be connected to it.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does prompt engineering work and why does it matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prompt engineering is the process of designing the instructions you give an AI model to get consistently accurate, on-brand outputs. A poorly written prompt gives generic, inconsistent results. A well-engineered prompt — with the right context, constraints, examples, and output format specification — gives outputs your team can actually use. We invest significant time in prompt engineering for every integration and include documented prompt libraries in every delivery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you add AI to a custom-built internal tool or legacy system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — as long as the system has some form of data access (a database we can read, an API we can call, or files we can process). We\'ve integrated AI into legacy CRMs, custom-built web apps, internal admin panels, and ERP systems with limited modern API support. We document all integration points during delivery so future engineers can maintain them.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will AI integration require changes to the software my team already uses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Usually no. Most AI integrations run as a layer between your existing tools — the AI processes data in the background and surfaces the result (a draft email, a classification, a suggested action) in your existing UI through the platform\'s native API. Your team uses the same software, just with AI-powered features added to it. In some cases we build a lightweight side panel or browser extension if the platform doesn\'t support native AI output placement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is our business data safe when connecting AI to our existing tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use OAuth and API key authentication (not passwords or screen scraping), enforce least-privilege data access so the AI only sees what it needs to complete the task, and implement full request/response logging for audit purposes. For regulated industries, we can configure integrations to use self-hosted or private LLM deployments that process your data locally without sending anything to third-party model providers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you fine-tune an AI model on our specific business data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — on Enterprise tier projects. Fine-tuning trains a base model (GPT-4o, Claude, or an open-source model) on your specific content: your product catalog, your tone of voice, your support ticket history, your domain terminology. The result is a model that generates outputs that sound specifically like your business, not a generic AI. Fine-tuning is most valuable for high-volume, customer-facing outputs like product descriptions, support replies, or sales emails.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you ensure AI outputs are accurate and on-brand?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Four mechanisms: prompt engineering (precise instructions with examples and constraints), output validation (automated checks for format, length, and required fields before outputs reach your team), human-in-the-loop review flows (AI generates a draft, a person approves before it sends), and usage monitoring (we review real output samples during the 30-day post-launch window and tune prompts based on what\'s not performing well).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI integration work for a small team with limited technical resources?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — that\'s the majority of what we build. Most AI integrations are designed to be completely invisible to end users: the AI runs, the output appears in the tool your team already uses, and nobody has to learn a new platform. Managers can review AI output quality from a monitoring dashboard without engineering help. The AI is the hidden layer; your team\'s workflow stays familiar.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the most common first AI integrations US small businesses build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The four most common first integrations are: (1) CRM email draft generation — sales reps click one button and get a personalized, context-aware follow-up draft based on the contact\'s history; (2) support ticket auto-classification — incoming tickets are tagged by topic, urgency, and required team before a human opens them; (3) product description generation — new SKUs get AI-written, SEO-optimized descriptions without a copywriter; (4) document data extraction — invoices, contracts, and forms are read by AI and key fields populated in your database automatically.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have examples of AI integrations you\'ve built for businesses like mine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A Shopify brand\'s product description generator cut copywriting time by 80% while improving conversion rates 18%. A B2B SaaS company\'s HubSpot AI integration reduced sales rep email writing time from 45 minutes to 8 minutes per day. A legal firm\'s contract review integration flagged key clauses in uploaded PDFs, saving 2–3 hours per contract review. We share relevant case studies during a free strategy call.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is FactoryJet different from a US AI development agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three differences: price (60–70% cheaper — India-based engineers serving US businesses for 25+ years), speed (no layers between your brief and the engineer building it — no account managers, project coordinators, or solution architects adding cost and latency), and SMB depth (500+ small business projects since 1999). We understand what AI integration actually looks like in a 15-person business, not just in an enterprise with a dedicated IT department.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Integration Services',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  serviceType: 'AI Integration Services',
  description:
    'AI integration services for US small and medium businesses — connecting GPT-4o, Claude, and other AI models to existing CRM, e-commerce, support desk, and custom software platforms.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Starter AI Integration',
      price: '3500',
      priceCurrency: 'USD',
      description: 'Single-system AI integration for one focused use case.',
    },
    {
      '@type': 'Offer',
      name: 'Growth AI Integration Platform',
      price: '9000',
      priceCurrency: 'USD',
      description: 'Multi-system AI integration with unified API layer and monitoring dashboard.',
    },
    {
      '@type': 'Offer',
      name: 'Enterprise AI Integration',
      price: '18000',
      priceCurrency: 'USD',
      description: 'Custom AI integration with fine-tuning, legacy system APIs, and compliance requirements.',
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const INTEGRATION_TYPES = [
  {
    name: 'CRM AI Integration',
    description:
      'Adds AI-powered capabilities directly inside HubSpot, Salesforce, Pipedrive, or Zoho: one-click email draft generation based on contact history, AI lead scoring, automated follow-up suggestions, and meeting summary generation from call notes — without leaving the CRM your team already uses every day.',
    example: 'Sales reps cut email writing time from 45 min to 8 min per day.',
    linkLabel: 'See how it works',
    linkHref: '/contact',
  },
  {
    name: 'E-Commerce AI Integration',
    description:
      'Adds AI to Shopify, WooCommerce, or BigCommerce: automated product description generation for new SKUs, customer review sentiment analysis, personalized product recommendation APIs, and AI-written SEO metadata — connected directly to your existing store admin and product database.',
    example: 'Shopify brands see 18–25% higher conversion on AI-written product pages.',
    linkLabel: 'Start a conversation',
    linkHref: '/contact',
  },
  {
    name: 'Support Desk AI Integration',
    description:
      'Connects AI to Zendesk, Intercom, Freshdesk, or Help Scout to automatically classify and tag incoming tickets by topic and urgency, draft reply suggestions based on your knowledge base, detect customer sentiment, and surface related past tickets — before a support agent opens the conversation.',
    example: 'Teams report 35% reduction in average handle time per ticket.',
    linkLabel: 'See pricing',
    linkHref: '#pricing',
  },
  {
    name: 'Document AI Integration',
    description:
      'Reads, classifies, and extracts structured data from PDFs, scanned forms, contracts, and invoices — connected to your existing document storage (Google Drive, Box, SharePoint) and downstream tools (QuickBooks, your CRM, your database). No more opening documents one by one.',
    example: 'Processes 200+ documents per hour vs. 10–15 manually.',
    linkLabel: 'Book a strategy call',
    linkHref: '/contact',
  },
  {
    name: 'Custom App AI Integration',
    description:
      'Embeds GPT-4o, Claude, or a fine-tuned model directly into your internal web app, admin panel, or customer-facing product via REST API. AI features appear as native parts of your existing interface — no separate tool for your team to learn, no new login to manage.',
    example: 'Most custom integrations go live in 2–3 weeks from kickoff.',
    linkLabel: 'Learn more',
    linkHref: '/contact',
  },
  {
    name: 'Database & Analytics AI Integration',
    description:
      'Adds natural-language query capabilities to your existing databases (ask questions in plain English, get SQL results) and AI-powered anomaly detection to your reporting pipelines — flagging unusual patterns in revenue, inventory, or user behavior before they become problems.',
    example: 'Finance teams catch data anomalies days earlier than before.',
    linkLabel: 'Get a free assessment',
    linkHref: '/contact',
  },
];

const INTEGRATION_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We audit your current software stack, identify the highest-value AI integration points, map the data flows, and estimate the ROI before we write a line of code. Typically a 60-minute session.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We specify the API architecture, design the prompt engineering approach, and define how AI outputs surface in your existing software. You approve the design doc before we build.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Development and integration testing with weekly demos. You see the AI working inside your actual tools during the build — not in a separate demo environment. Feedback is incorporated at every stage.',
  },
  {
    number: '04',
    title: 'Deploy & Monitor',
    description:
      'Production launch with an output quality monitoring dashboard, full prompt documentation, and a 30-day post-launch window for tuning and support. Your team gets a training walkthrough specific to the integration.',
  },
];

const ROI_STATS = [
  {
    value: '80%',
    label: 'reduction in copywriting time after AI product description integration',
    microcopy: 'reported by Shopify brand clients',
    categoryLabel: 'CONTENT CREATION',
  },
  {
    value: '35%',
    label: 'reduction in support ticket handle time after AI triage integration',
    microcopy: 'average across FactoryJet support desk integrations',
    categoryLabel: 'SUPPORT EFFICIENCY',
  },
  {
    value: '60–70%',
    label: 'cheaper than comparable US AI integration agencies',
    microcopy: 'India-based engineers, US-caliber output',
    categoryLabel: 'COST ADVANTAGE',
  },
];

const MARKET_STATS = [
  {
    value: '85%',
    label: 'of US SMBs say they want AI features in their existing software but haven\'t integrated yet',
    microcopy: 'Salesforce SMB AI Adoption Report 2024',
    categoryLabel: 'INTEGRATION GAP',
  },
  {
    value: '4×',
    label: 'productivity improvement in tasks where humans work alongside AI vs. without it',
    microcopy: 'Stanford Human-AI Collaboration Study',
    categoryLabel: 'PRODUCTIVITY LIFT',
  },
  {
    value: '18%',
    label: 'average conversion rate improvement on AI-generated product descriptions vs. manual copy',
    microcopy: 'Shopify merchant study — FactoryJet client data',
    categoryLabel: 'CONVERSION IMPACT',
  },
];

const COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'US AI Integration Agency' },
  { label: 'SaaS AI Add-On (Copilot, etc.)' },
  { label: 'In-House Developer' },
] as const;

const COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: [
      '$3,500',
      '$15,000–$50,000',
      '$30–$100/user/mo (ongoing)',
      '$8,000–$20,000+ (staff time)',
    ],
  },
  {
    feature: 'Delivery timeline',
    values: ['1–3 weeks', '2–4 months', 'Hours (limited capability)', '4–12 weeks'],
  },
  {
    feature: 'Custom to your specific workflow',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="saas" kind="no" />,
      <CompareIcon key="inhouse" kind="yes" />,
    ],
  },
  {
    feature: 'Connects to your existing CRM / stack',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="saas" kind="partial" />,
      <CompareIcon key="inhouse" kind="yes" />,
    ],
  },
  {
    feature: 'Prompt engineering optimized for your data',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="saas" kind="no" />,
      <CompareIcon key="inhouse" kind="partial" />,
    ],
  },
  {
    feature: 'You own the integration code',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="saas" kind="no" />,
      <CompareIcon key="inhouse" kind="yes" />,
    ],
  },
  {
    feature: 'No ongoing per-user SaaS fees',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="saas" kind="no" />,
      <CompareIcon key="inhouse" kind="yes" />,
    ],
  },
  {
    feature: '30-day post-launch support',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="saas" kind="no" />,
      <CompareIcon key="inhouse" kind="no" />,
    ],
  },
  {
    feature: '25+ years of SMB domain experience',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="no" />,
      <CompareIcon key="saas" kind="no" />,
      <CompareIcon key="inhouse" kind="partial" />,
    ],
  },
];

const PRICING_TIERS = [
  {
    name: 'Starter',
    priceRange: 'From $3,500',
    description:
      'A focused AI integration that adds one AI capability to one existing tool. Best for businesses testing AI with a clear, bounded first use case.',
    features: [
      'Single-system AI integration (CRM, e-commerce, support desk, or custom app)',
      'GPT-4o or Claude as the underlying model',
      'Custom prompt engineering optimized for your data and tone',
      'API integration with output validation',
      'Lightweight monitoring for output quality',
      'Full integration documentation and code ownership',
      '14-day post-launch support window',
    ],
    cta: { label: 'Book a Free Strategy Call', modal: true as const, region: 'us' as const },
  },
  {
    name: 'Growth',
    priceRange: 'From $9,000',
    description:
      'AI integrated across 3–5 tools in your stack with a unified API layer and output quality dashboard. The most popular tier for US SMBs ready to go all-in on AI.',
    features: [
      'Multi-system AI integration (CRM + e-commerce + support desk)',
      'Unified AI API layer with shared model management',
      'Output quality monitoring dashboard',
      'Fine-tuned prompts with A/B testing for best-performing versions',
      'Human-in-the-loop review flows where needed',
      'Team training and full prompt library documentation',
      '30-day post-launch support window',
      'Monthly retainer option for ongoing optimization',
    ],
    cta: { label: 'Get a Custom Quote', modal: true as const, region: 'us' as const },
    popular: true,
  },
  {
    name: 'Enterprise',
    priceRange: 'From $18,000',
    description:
      'Full-stack AI integration with custom model fine-tuning, legacy system APIs, compliance requirements, and a dedicated engineering partner.',
    features: [
      'Custom LLM fine-tuning on your proprietary content and terminology',
      'Legacy system and ERP integration',
      'Private cloud deployment option (no data to third-party model providers)',
      'HIPAA / SOC 2 pattern-compliant data handling',
      'Advanced output quality analytics',
      'Dedicated engineering point of contact',
      'SLA-backed response and uptime commitments',
      '90-day post-launch support and model improvement window',
    ],
    cta: { label: 'Schedule an Enterprise Call', modal: true as const, region: 'us' as const },
  },
] as const;

/* ─── FAQ categories ─────────────────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'what-is',    label: 'What Is AI Integration' },
  { key: 'process',   label: 'Process & Timeline' },
  { key: 'pricing',   label: 'Pricing & ROI' },
  { key: 'technical', label: 'Technical & Security' },
  { key: 'trust',     label: 'Trust & Results' },
];

/* ─── FAQ items — 21 conversational Q-A pairs ────────────────────────────── */
const FAQ_ITEMS = [

  /* ── What Is AI Integration ── */
  {
    category: 'what-is',
    question: 'What are AI integration services?',
    answer:
      'AI integration services connect AI models — like GPT-4o, Claude, or Gemini — to your existing business software so those tools can generate, classify, extract, and summarize using real AI capabilities. Rather than replacing your software, AI integration adds intelligence to what you already use: your CRM writes follow-up drafts, your e-commerce platform generates product descriptions, your support desk classifies tickets automatically.',
  },
  {
    category: 'what-is',
    question: 'How is AI integration different from building a custom AI app from scratch?',
    answer:
      'Building from scratch creates a new application with AI built in — for workflows that don\'t exist in your current software. AI integration adds AI capabilities to tools you already have. Most businesses need both at different times: integrations first (faster, lower cost, immediate ROI from existing workflows) and custom builds later when current tools fundamentally can\'t do what you need.',
  },
  {
    category: 'what-is',
    question: 'What kinds of AI integrations does FactoryJet build?',
    answer:
      'Six core types: CRM AI (email drafts, lead scoring in HubSpot/Salesforce), E-Commerce AI (product descriptions, recommendations for Shopify/WooCommerce), Support Desk AI (ticket classification, reply suggestions in Zendesk/Intercom), Document AI (extract and classify data from PDFs and forms), Custom App AI (embed AI in your internal tools via API), and Data Intelligence AI (natural-language queries and anomaly detection on your databases).',
  },
  {
    category: 'what-is',
    question: 'Which AI models can you integrate — GPT-4o, Claude, or others?',
    answer:
      'We integrate GPT-4o (OpenAI), Claude 3.5 Sonnet (Anthropic), Gemini (Google), and open-source models like Mistral and LLaMA 3. Selection depends on your use case, cost sensitivity, and data privacy requirements. For most business integrations, GPT-4o or Claude gives the best accuracy-to-cost ratio. For regulated industries, we integrate self-hosted models that never send data to third-party providers.',
  },

  /* ── Process & Timeline ── */
  {
    category: 'process',
    question: 'What does the AI integration process look like?',
    answer:
      'Four stages: Discover (audit your software stack, identify the highest-value AI integration points, define data flows), Design (API architecture, prompt engineering approach, how outputs surface in your existing UI), Build (develop and test with weekly demos — you see AI working in your actual tools), and Deploy (production launch with monitoring, documentation, and 30-day support). Most integrations don\'t require changes to your existing software UI.',
  },
  {
    category: 'process',
    question: 'How long does it take to integrate AI into existing software?',
    answer:
      'A single focused integration — AI email drafts in a CRM, or auto-classification in a help desk — goes from kickoff to production in 1–3 weeks. Multi-system integrations connecting 3–5 platforms take 4–6 weeks. Custom integrations with fine-tuned models or legacy APIs run 8–12 weeks. Timeline depends on the number of systems and how well-documented your current APIs are.',
  },
  {
    category: 'process',
    question: 'Will my team see progress during the build?',
    answer:
      'Yes — weekly demos throughout. You see the AI working inside your actual tools during the build, not in an isolated demo environment. Most clients find early demos surface integration details they hadn\'t considered, and we build in room to course-correct at every stage.',
  },
  {
    category: 'process',
    question: 'What happens after the AI integration is deployed?',
    answer:
      'Every engagement includes a 30-day post-launch window: we monitor AI output quality, tune prompts based on real usage, handle API version changes from connected platforms, and deliver team training. After 30 days you can self-manage or continue on a monthly retainer for prompt optimization and new integration points.',
  },

  /* ── Pricing & ROI ── */
  {
    category: 'pricing',
    question: 'How much do AI integration services cost?',
    answer:
      'FactoryJet\'s AI integrations start at $3,500 for a focused single-system integration. The Growth tier at $9,000 covers multi-system integration with a unified API layer and monitoring. Enterprise integrations with fine-tuning and legacy APIs start at $18,000. All prices are 60–70% lower than US AI integration agencies.',
  },
  {
    category: 'pricing',
    question: 'Why is FactoryJet 60–70% cheaper than US AI integration agencies?',
    answer:
      'Our engineering team is India-based. Same quality of API architecture, prompt engineering, and delivery at dramatically lower labor costs. We\'ve served US businesses for 25 years. You brief an engineer; that engineer builds it. No account management layers, no inflated overhead.',
  },
  {
    category: 'pricing',
    question: 'What is the ROI from AI integration services?',
    answer:
      'ROI comes from two sources: time saved (a sales rep using AI-assisted email drafts spends 8 minutes per day instead of 45 minutes) and quality improvement (AI-generated product descriptions show 18–25% higher conversion rates vs. manually written copy). Most integrations pay for themselves within 60–90 days.',
  },
  {
    category: 'pricing',
    question: 'Are there ongoing costs after the integration is built?',
    answer:
      'One type: AI model API costs (typically $20–$150/month for most SMB usage volumes, paid directly to OpenAI, Anthropic, or Google — not marked up by FactoryJet). Optional monthly retainer for prompt optimization or new integration points. No FactoryJet platform fees after delivery.',
  },

  /* ── Technical & Security ── */
  {
    category: 'technical',
    question: 'What software platforms can AI be integrated with?',
    answer:
      'We integrate AI into: CRMs (HubSpot, Salesforce, Pipedrive, Zoho), e-commerce (Shopify, WooCommerce, BigCommerce), support desks (Zendesk, Intercom, Freshdesk), accounting (QuickBooks, Xero), document management (Google Drive, Box, SharePoint), databases (PostgreSQL, MySQL, Supabase, Firebase), and custom web applications via REST API. If your software has an API or webhook, we can connect AI to it.',
  },
  {
    category: 'technical',
    question: 'How do you ensure AI outputs are accurate and on-brand?',
    answer:
      'Four mechanisms: prompt engineering (precise instructions with examples and constraints), output validation (automated checks before outputs reach your team), human-in-the-loop review flows (AI drafts, person approves before sending), and usage monitoring (we review real output samples during the 30-day window and tune prompts based on performance).',
  },
  {
    category: 'technical',
    question: 'Can you integrate AI into a custom-built internal tool or legacy system?',
    answer:
      'Yes — as long as the system has some form of data access (a database we can read, an API we can call, or files we can process). We\'ve integrated AI into legacy CRMs, custom admin panels, and ERP systems with limited modern API support. All integration points are documented during delivery.',
  },
  {
    category: 'technical',
    question: 'Will AI integration require changes to the software my team uses?',
    answer:
      'Usually no. Most AI integrations run as a background layer — the AI processes data and surfaces the result (a draft email, a classification, a suggested action) in your existing UI through the platform\'s native API. Your team uses the same software, just with AI-powered features added to it.',
  },

  /* ── Trust & Results ── */
  {
    category: 'trust',
    question: 'Is our data safe when connecting AI to our existing tools?',
    answer:
      'We use OAuth and API key authentication (not passwords or screen scraping), enforce least-privilege data access, and implement full request/response logging. For regulated industries, we configure integrations to use private LLM deployments that process data locally without sending anything to third-party model providers.',
  },
  {
    category: 'trust',
    question: 'Can you fine-tune an AI model on our specific business data?',
    answer:
      'Yes — on Enterprise tier projects. Fine-tuning trains a model on your specific content: product catalog, tone of voice, support ticket history, domain terminology. The result is a model that generates outputs that sound specifically like your business. Most valuable for high-volume, customer-facing outputs like product descriptions, support replies, or sales emails.',
  },
  {
    category: 'trust',
    question: 'What are the most common first AI integrations US small businesses build?',
    answer:
      'The four most common: (1) CRM email draft generation — sales reps get a personalized follow-up draft with one click; (2) support ticket auto-classification — tickets tagged before a human opens them; (3) product description generation — new SKUs get AI-written, SEO-optimized descriptions automatically; (4) document data extraction — invoices and forms read by AI with key fields populated in your database.',
  },
  {
    category: 'trust',
    question: 'What results have other businesses gotten from FactoryJet AI integrations?',
    answer:
      'A Shopify brand\'s product description integration cut copywriting time by 80% and improved conversion 18%. A B2B SaaS company\'s HubSpot integration reduced sales email writing time from 45 to 8 minutes per day. A legal firm\'s contract review integration saved 2–3 hours per contract review. We share relevant case studies during a free strategy call.',
  },
  {
    category: 'trust',
    question: 'Can AI integration work for a small team with no technical staff?',
    answer:
      'Yes — that\'s the majority of what we build. Most integrations are invisible to end users: AI runs in the background, output appears in the tool your team already uses, nobody learns a new platform. Managers review AI output quality from a monitoring dashboard without engineering help. The AI is the hidden layer; your team\'s workflow stays familiar.',
  },
  {
    category: 'trust',
    question: 'How is FactoryJet different from a US AI development agency?',
    answer:
      'Three differences: price (60–70% cheaper — India-based engineers serving US businesses for 25+ years), speed (no layers between your brief and the engineer building it), and SMB depth (500+ small business projects since 1999 — we understand AI integration inside a 15-person company, not just enterprises with dedicated IT departments).',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function AIIntegrationServicesPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <Script
        id="ai-integration-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="ai-integration-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <SiteHeader
        navLinks={[
          { label: 'Services', href: '/us/services' },
          { label: 'AI Integration', href: '/us/services/ai-integration-services' },
          { label: 'AI Agents', href: '/us/services/ai-agents' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Contact', modal: true, region: 'us' },
        ]}
        cta={{ label: 'Book a Free Call', modal: true, region: 'us' }}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="AI INTEGRATION SERVICES · USA"
          headline="Add AI to the Tools You Already Use — Without Replacing Them"
          lead="Your CRM, e-commerce platform, support desk, and internal apps can all be smarter — right now, without a wholesale software replacement. FactoryJet integrates GPT-4o and Claude into your existing stack so your team gets AI capabilities inside the tools they already know."
          primaryCta={{ label: 'Book a Free AI Integration Call', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={[
            '500+ businesses served',
            'Starting at $3,500',
            '60–70% cheaper than US agencies',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#F05A28]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                AI INTEGRATION IN ACTION
              </p>
              <p className="mt-4 font-fj-display text-[2rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                AI inside the tools your team already uses every day.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Sales rep opens HubSpot contact → one click → personalized follow-up draft ready',
                  'New SKU added to Shopify → AI writes product description + SEO metadata automatically',
                  'Support ticket arrives → AI classifies topic, urgency + drafts reply before agent opens it',
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
                  AI-powered features. Same software your team already knows.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 2. TRUST STATS ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ businesses. 25 years of building. One goal: your results."
        />

        {/* ── 3. WHAT IS AI INTEGRATION ────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="AI INTEGRATION EXPLAINED"
          headline="You Don't Need New Software. You Need AI Inside the Software You Have."
          lead="The fastest path to AI ROI isn't replacing your tools — it's adding intelligence to the ones your team already uses and trusts."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {[
                  'Generate email drafts in CRM',
                  'Write product descriptions',
                  'Classify support tickets',
                  'Extract document data',
                  'Score leads automatically',
                  'Natural-language data queries',
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
                Most businesses spend months evaluating AI tools, signing up for pilots, and trying to get teams to adopt new software — and the majority never actually ship anything. The faster path is different: keep the tools your team already knows and uses every day, and add AI capabilities directly inside them via API. Your sales team stays in HubSpot. Your support team stays in Zendesk. The AI works behind the scenes.
              </p>

              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[
                  { value: '1–3wk', label: 'To first integration' },
                  { value: '4×', label: 'Productivity lift' },
                  { value: '60–90d', label: 'Typical payback' },
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
                  AI adoption fails when it requires new tools. It succeeds when it enhances existing ones.
                </p>
              </div>
              <p>
                We connect GPT-4o, Claude, and other AI models to your CRM, e-commerce platform, support desk, or internal apps using their native APIs. Your sales rep gets a personalized follow-up draft with one click inside HubSpot. Your support agent opens Zendesk and the ticket is already classified and has a draft reply. Your Shopify store generates product descriptions automatically when you add a new SKU. The same workflows, with AI-powered results.
              </p>

              <div className="grid grid-cols-2 gap-2" aria-hidden>
                {[
                  'HubSpot & Salesforce',
                  'Shopify & WooCommerce',
                  'Zendesk & Intercom',
                  'Custom web apps',
                  'QuickBooks & Xero',
                  'Internal databases',
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
                  How an AI Integration Works
                </p>
              </div>
              <div className="px-7 pt-6 pb-2">
                {([
                  {
                    step: '01',
                    title: 'User triggers an action',
                    desc: 'Clicks a button in their existing software, or a background event fires (new ticket, new product, new contact).',
                  },
                  {
                    step: '02',
                    title: 'Integration fetches context',
                    desc: 'Pulls relevant data from your software — contact history, product details, ticket content — to give the AI full context.',
                  },
                  {
                    step: '03',
                    title: 'AI model processes and generates',
                    desc: 'GPT-4o or Claude reads the context and generates a draft, classification, extraction, or suggestion based on your engineered prompts.',
                  },
                  {
                    step: '04',
                    title: 'Output surfaces in your existing UI',
                    desc: 'The result appears inside the tool your team already uses — a draft email in HubSpot, a ticket tag in Zendesk, a description in Shopify.',
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
                  Your team uses the same software. The AI is the invisible layer that makes it smarter.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 4. THE PROBLEM (DARK) ─────────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE PROBLEM"
          headline="Most businesses are paying for AI tools their teams don't actually use."
          lead="The gap between companies getting real ROI from AI and those just paying for licenses comes down to one thing: integration with how people actually work."
          pillars={[
            {
              icon: '⏱',
              title: 'Generic AI tools don\'t know your data',
              body: 'ChatGPT and off-the-shelf AI copilots are powerful but generic. They don\'t know your customer history, your product catalog, your tone of voice, or your specific business rules. The result is outputs that need significant manual editing before they\'re usable — which means your team stops using them within weeks. AI integration connects the model to your actual data so outputs are immediately useful.',
            },
            {
              icon: '📉',
              title: 'SaaS AI add-ons charge per seat, forever',
              body: 'Microsoft Copilot is $30/user/month. Salesforce Einstein is $50/user/month. Intercom Fin is billed by conversation. These fees compound: a 20-person team using multiple AI SaaS add-ons easily spends $20,000+ per year — for capabilities FactoryJet can integrate into your existing tools for a one-time fixed price, with AI costs going directly to the model provider at a fraction of the SaaS markup.',
            },
            {
              icon: '💸',
              title: 'Custom integrations used to require expensive US engineering teams',
              body: 'Connecting AI to a legacy CRM or custom internal tool requires real engineering — it\'s not a no-code project. US AI integration agencies charge $15,000–$50,000 for this work. FactoryJet delivers the same engineering quality at 60–70% less, with the same level of API architecture, prompt engineering, and production reliability.',
            },
          ]}
        />

        {/* ── 5. INTEGRATION TYPES ─────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="WHAT WE BUILD"
          headline="Six AI Integration Categories That Deliver Immediate ROI"
          lead="These are the integrations with the clearest, fastest payback for US small and mid-sized businesses. We build all six and help you identify which one to start with."
          sectors={INTEGRATION_TYPES}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Discovery to AI-Powered Software in 1–6 Weeks"
          lead="A tight 4-stage process focused on getting AI working inside your existing tools as fast as possible — with full quality control built in at every step."
          stages={INTEGRATION_JOURNEY_STAGES}
          closingNote="4 STAGES · 1–12 WEEKS DEPENDING ON SCOPE · WEEKLY DEMOS THROUGHOUT"
        />

        {/* ── 7. MARKET STATS ──────────────────────────────────────────────── */}
        <div className="bg-fj-neutral-50">
          <BoringStatsRow stats={MARKET_STATS} align="center" />
        </div>

        {/* ── 9. ROI STATS ─────────────────────────────────────────────────── */}
        <div className="bg-fj-neutral-50">
          <BoringStatsRow stats={ROI_STATS} align="center" />
        </div>

        {/* ── 10. COMPARISON TABLE ─────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. US Agency vs. SaaS AI Add-Ons vs. In-House Dev"
          lead="The honest breakdown of cost, capability, and timeline across your options."
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
        />

        {/* ── 11. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="PRICING"
            headline="Fixed-Price AI Integration. You Own the Code."
            lead="Three tiers based on the number of systems and complexity of integration. Every tier includes custom prompt engineering, code ownership, and post-launch support."
            tiers={PRICING_TIERS}
            footnote="All prices in USD. AI model API costs ($20–$150/mo for most SMB volumes) go directly to the provider. No FactoryJet platform fees after delivery."
          />
        </div>

        {/* ── 12. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="We connect AI to your real tools. Not to a polished demo."
          lead="25 years building production software for US businesses means we understand the messy reality of actual tech stacks — legacy APIs, undocumented fields, inconsistent data — and we build integrations that work in that reality."
          pillars={[
            {
              icon: '⚡',
              title: 'Prompt engineering that actually performs',
              body: 'A GPT-4o integration is only as good as the prompts behind it. Generic prompts give generic outputs your team won\'t use. We invest heavily in prompt engineering — building prompts that know your products, your tone, your customers, and your specific business rules. Every delivery includes a documented prompt library so you can see exactly how the AI is instructed.',
            },
            {
              icon: '💡',
              title: 'We know your software stack',
              body: 'We\'ve integrated AI into HubSpot, Shopify, Salesforce, Zendesk, QuickBooks, and dozens of custom-built applications. We know the API quirks, the rate limits, the webhook reliability issues, and the authentication patterns. We don\'t learn your stack at your expense — we bring experience with it to the project.',
            },
            {
              icon: '🔒',
              title: 'No vendor lock-in. You own everything.',
              body: 'No proprietary platforms, no FactoryJet middleware subscriptions, no lock-in. We deliver the complete integration code, all API credentials and documentation, and a prompt library you can modify yourself. If you want to take it in-house or change agencies, you walk away with a fully owned, documented AI integration.',
            },
          ]}
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything You Need to Know Before Integrating AI into Your Software"
          lead="No jargon. No runaround. The questions we get on every strategy call — answered straight."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA ─────────────────────────────────────────────────── */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="READY TO ADD AI TO YOUR STACK"
            headline="Book a Free 30-Minute AI Integration Strategy Call"
            sub="We'll audit your current software stack, identify the highest-value integration opportunity, and give you a fixed-price estimate — before you commit to anything."
            primaryCta={{ label: 'Book Your Free Strategy Call', modal: true, region: 'us' }}
            secondaryCta={{ label: 'See All AI Services', href: '/us/services' }}
            objectionHandler="Most integrations pay for themselves within 60–90 days. Free call, fixed price, no hidden fees."
          />
        </div>

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
