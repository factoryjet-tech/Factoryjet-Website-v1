import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';

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
  title: 'AI Chatbot Development India | WhatsApp Chatbot | FactoryJet',
  description:
    'Custom AI chatbots for Indian businesses: WhatsApp agents, website chatbots & multilingual bots. Integrated with Zoho, Razorpay & Shopify. Fixed price.',
  keywords: [
    'AI chatbot development India',
    'WhatsApp chatbot India',
    'chatbot development company India',
    'custom AI chatbot India',
    'WhatsApp AI chatbot India',
    'AI chatbot for business India',
    'Zoho chatbot integration India',
    'Hindi AI chatbot India',
    'chatbot development Mumbai',
    'conversational AI India',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Chatbot Development India | FactoryJet',
    description:
      'Custom AI chatbots for WhatsApp, websites, and support portals. Multilingual, Zoho/Razorpay/Shopify ready. Fixed price. Deployed in 2–3 weeks.',
    url: 'https://factoryjet.com/services/ai-agent-development/ai-chatbot',
    images: [
      {
        url: 'https://factoryjet.com/images/services/ai-agent-development.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet AI Agent Development Services',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Chatbot Development India | FactoryJet',
    description:
      'WhatsApp chatbots, website AI chat, and support bots for Indian businesses. Fixed price. Hindi + English ready.',
    images: ['https://factoryjet.com/images/services/ai-agent-development.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-agent-development/ai-chatbot',
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
   JSON-LD Schemas, faqSchema is declared after CHATBOT_FAQ_ITEMS below
───────────────────────────────────────────────────────────────────────────── */

// Freshness signal. Benchmark: 56% of Google-AI-Overview-cited pages carry
// dateModified; these pages carried none. Keep this honest: bump it when the
// page's content actually changes, not on every unrelated deploy.
const PAGE_MODIFIED = '2026-08-04';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-chatbot#webpage',
  url: 'https://factoryjet.com/services/ai-agent-development/ai-chatbot',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Chatbot Development India',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    address: { '@type': 'PostalAddress', addressCountry: 'IN' },
    
  },
  areaServed: { '@type': 'Country', name: 'India' },
  serviceType: 'AI Chatbot Development',
  description:
    'Custom AI chatbots for Indian businesses: WhatsApp chat agents, website chatbots, and multilingual support bots integrated with Zoho, Razorpay, Shopify, and Freshdesk. Fixed price. Deployed in 2–3 weeks.',
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-chatbot#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/services/ai-agent-development/ai-chatbot',
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const CHATBOT_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'A 45-minute call. We map which conversations are costing your team the most time, top WhatsApp queries, FAQ patterns, lead qualification steps, and identify the highest-ROI chatbot use case to build first.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We design conversation flows, decide on deployment channels (WhatsApp, website, or both), map integrations with your existing stack, and deliver a chatbot design document you approve before we write code.',
  },
  {
    number: '03',
    title: 'Build & Integrate',
    description:
      'Engineering the chatbot with your language, tone, and business rules. We integrate Zoho CRM, Shopify, Freshdesk, Razorpay, or Shiprocket so the bot can take actions, not just answer questions.',
  },
  {
    number: '04',
    title: 'Train & Test',
    description:
      'We run the chatbot against real customer conversation samples, including Hindi queries, edge cases, and abusive inputs, tune the prompts, and stress-test until behaviour is reliable and on-brand.',
  },
  {
    number: '05',
    title: 'Deploy & Hand Over',
    description:
      'Launch on your chosen channel with monitoring, escalation paths to human agents, and a recorded training session. All code, API keys, and WhatsApp Business account access are handed to you at delivery.',
  },
];

const CHATBOT_STATS = [
  {
    value: '70%',
    label: 'of WhatsApp support queries deflected by AI chatbots in D2C deployments',
    microcopy: 'FactoryJet client data',
    categoryLabel: 'DEFLECTION RATE',
  },
  {
    value: '<60s',
    label: 'average WhatsApp response time vs. 4–6 hours with human-only support',
    microcopy: 'across FactoryJet chatbot deployments',
    categoryLabel: 'RESPONSE TIME',
  },
  {
    value: '500M+',
    label: 'WhatsApp Business users in India: your customers are already there',
    microcopy: 'Meta India, 2024',
    categoryLabel: 'WHATSAPP INDIA',
  },
];

const CHATBOT_MARKET_STATS = [
  {
    value: '₹8,200 Cr+',
    label: 'India chatbot market projected by 2028, growing at 28% CAGR',
    sourceUrl: 'https://nasscom.in/ai-report-2024',
    sourceLabel: 'NASSCOM AI Report 2024',
  },
  {
    value: '87%',
    label: 'of Indian consumers prefer messaging apps over phone calls for customer support',
    sourceUrl: 'https://meta.com/business/whatsapp-india-report-2024',
    sourceLabel: 'Meta Business India 2024',
  },
  {
    value: '3.2×',
    label: 'faster lead conversion for businesses responding on WhatsApp within 60 seconds vs. 24 hours',
    sourceUrl: 'https://www.deloitte.com/in/en/research-studies/india-ai-readiness.html',
    sourceLabel: 'Deloitte India, 2024',
  },
];

const CHATBOT_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Scripted Chatbot Tool' },
  { label: 'Freelancer' },
  { label: 'No-Code Builder' },
] as const;

const CHATBOT_COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: [
      'Fixed one-time price',
      '₹3,000–₹15,000/month SaaS',
      '₹1,00,000–₹3,00,000 (unreliable)',
      '₹5,000–₹20,000/month (you build it)',
    ],
  },
  {
    feature: 'Understands natural language',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="nc" kind="partial" />,
    ],
  },
  {
    feature: 'Hindi + regional language support',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="nc" kind="no" />,
    ],
  },
  {
    feature: 'WhatsApp Business API integration',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="sc" kind="partial" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="nc" kind="partial" />,
    ],
  },
  {
    feature: 'Zoho / Freshdesk / Shopify integration',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="nc" kind="no" />,
    ],
  },
  {
    feature: 'Razorpay / GST workflow actions',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="nc" kind="no" />,
    ],
  },
  {
    feature: 'Fixed-price contract (no ongoing SaaS fee)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="nc" kind="no" />,
    ],
  },
  {
    feature: 'You own the code & IP',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="fl" kind="yes" />,
      <CompareIcon key="nc" kind="no" />,
    ],
  },
  {
    feature: '30-day post-launch support',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="nc" kind="no" />,
    ],
  },
  {
    feature: '500+ SMB projects',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="nc" kind="no" />,
    ],
  },
];

const CHATBOT_INDUSTRIES = [
  {
    name: 'D2C E-Commerce',
    description:
      'WhatsApp chatbots that answer order status queries, process returns, send Shiprocket tracking updates, and handle product questions 24/7, integrated directly with your Shopify or WooCommerce store. Frees your support team to focus on complex issues.',
    example: 'D2C brands report 70%+ WhatsApp ticket deflection within 30 days of launch.',
    linkLabel: 'See e-commerce AI',
    linkHref: '/services/ecommerce-development',
  },
  {
    name: 'Real Estate',
    description:
      'Website and WhatsApp chatbots that qualify leads from 99acres, MagicBricks, and Housing.com, answer project FAQs, show available units, and book site visits: all logged automatically to Zoho CRM or LeadSquared.',
    example: 'Builders see 35–50% more site visit bookings without adding telecallers.',
  },
  {
    name: 'EdTech & Coaching',
    description:
      'Enrolment chatbots that answer course questions, collect student details, process Razorpay payment links, send onboarding material, and track batch registration, reducing counsellor workload by 60%+.',
    example: 'EdTech platforms report 3× faster lead-to-enrolment conversion.',
  },
  {
    name: 'Healthcare & Clinics',
    description:
      'WhatsApp appointment booking bots that check doctor availability, confirm slots, send reminders, and handle cancellations, with DPDP-compliant data handling and full audit trails for every interaction.',
    example: 'Clinics recover 3–4 hours of front-desk time per day.',
  },
  {
    name: 'Financial Services',
    description:
      'Lead qualification chatbots for loan applications, insurance queries, and investment products, collecting KYC documents, asking eligibility questions, and routing hot leads to relationship managers in real time.',
    example: 'NBFC platforms cut loan application intake time by 55%.',
  },
  {
    name: 'Retail & Distribution',
    description:
      'B2B ordering chatbots on WhatsApp that let your dealers place orders, check stock levels, track delivery status, and download GST invoices, without calling your sales team or waiting for business hours.',
    example: 'Distributors report 40% fewer inbound sales calls after WhatsApp bot launch.',
  },
];

const CHATBOT_PRICING_TIERS = [
  {
    name: 'Website Chatbot',
    priceRange: '',
    description:
      'A focused AI chatbot for your website, captures leads, answers FAQs, books appointments, and qualifies visitors 24/7.',
    features: [
      'AI-powered website chat widget (no scripted decision tree)',
      'Lead capture with CRM push (Zoho, HubSpot, or Google Sheets)',
      'FAQ knowledge base, trained on your product/service content',
      'Appointment booking with calendar integration',
      'Human handoff trigger when confidence is low',
      'Claude, GPT-4o, or Gemini as the underlying model',
      '14-day post-launch support',
    ],
    cta: { label: 'Book a Free Strategy Call', modal: true as const, region: 'in' as const },
  },
  {
    name: 'WhatsApp AI Chatbot',
    priceRange: '',
    description:
      'A production-grade WhatsApp AI chatbot on Interakt, Wati, or AiSensy, integrated with your CRM, store, and support tools. Our most popular India deployment.',
    features: [
      'WhatsApp Business API on Interakt, Wati, or AiSensy',
      'Zoho CRM / Freshdesk / Shopify / Shiprocket integration',
      'Order status, returns, and product query handling',
      'Lead qualification and demo booking flow',
      'Hindi + English (and regional language) support',
      'Human escalation path with context handover',
      'Razorpay payment link sending from chat',
      '30-day post-launch support',
    ],
    cta: { label: 'Get a Custom Quote', modal: true as const, region: 'in' as const },
    popular: true,
  },
  {
    name: 'Multi-Channel Chatbot Platform',
    priceRange: '',
    description:
      'Website + WhatsApp + support portal chatbot with a unified inbox, analytics dashboard, and deep ERP/CRM integration for scaling Indian businesses.',
    features: [
      'Website chat + WhatsApp + Freshdesk / Zoho Desk in one platform',
      'Unified conversation inbox with agent workspace',
      'Deep Zoho CRM / Tally / Shopify / Razorpay integration',
      'Custom analytics dashboard, conversation volume, deflection, CSAT',
      'Multi-language auto-detection across all channels',
      'Role-based admin access for your support team',
      '90-day post-launch support and optimisation window',
    ],
    cta: { label: 'Schedule an Enterprise Call', modal: true as const, region: 'in' as const },
  },
] as const;

const CHATBOT_FAQ_CATEGORIES = [
  { key: 'basics',      label: 'Chatbot Basics' },
  { key: 'whatsapp',   label: 'WhatsApp & Channels' },
  { key: 'india',      label: 'India-Specific' },
  { key: 'process',    label: 'Process & Timeline' },
  { key: 'pricing',    label: 'Pricing & ROI' },
];

const CHATBOT_FAQ_ITEMS = [

  /* ── Chatbot Basics ── */
  {
    category: 'basics',
    question: 'What is the difference between an AI chatbot and a scripted chatbot?',
    answer:
      "A scripted chatbot follows a fixed decision tree, it works only if the customer clicks the expected buttons and breaks the moment someone types something unexpected. An AI chatbot uses a large language model to understand natural language intent, respond conversationally, and handle questions the script never anticipated. It also takes actions: checking your Shopify order status, updating Zoho CRM, sending a Razorpay payment link, things a scripted bot simply cannot do.",
  },
  {
    category: 'basics',
    question: 'What can an AI chatbot actually do for my Indian business?',
    answer:
      "The most common tasks: answering the same WhatsApp questions 200 times a day (order status, pricing, availability), qualifying inbound leads from ads and capturing them to Zoho CRM, booking appointments or demos without a human involved, sending Razorpay payment links and confirming receipt, processing returns by checking your Shopify or WooCommerce orders, and generating and sending GST invoices from chat. If your support team does it more than a few times a day, an AI chatbot can handle it.",
  },
  {
    category: 'basics',
    question: 'Will the chatbot understand customer questions it was not specifically trained on?',
    answer:
      "Yes, that is the core advantage of AI over scripted bots. Large language models understand intent, not just keywords. A customer asking 'where is my parcel', 'has my order shipped', or 'track my delivery yaar' will all be understood as the same question. The bot reads your Shiprocket/Delhivery data and replies accurately, regardless of how the customer phrases it.",
  },
  {
    category: 'basics',
    question: 'What happens when the chatbot cannot answer a question?',
    answer:
      "Every chatbot we build includes a confidence threshold, if the model is not sure, it escalates to a human agent rather than guessing. We set this up with a context handover (the agent sees the full conversation history) so the customer does not have to repeat themselves. You control where escalations go: a specific WhatsApp number, a Freshdesk ticket, a Zoho CRM task, or a Slack notification.",
  },

  /* ── WhatsApp & Channels ── */
  {
    category: 'whatsapp',
    question: 'Can you build a WhatsApp AI chatbot for my business?',
    answer:
      "Yes, WhatsApp chatbots are our most common India deployment. We build on Interakt, Wati, AiSensy, and Yellow.ai: all Meta-approved WhatsApp Business Solution Providers. The chatbot integrates with your Shopify store, Zoho CRM, Freshdesk, or Google Sheets so it can take real actions, not just reply with text. Deployed on your WhatsApp Business account with your branding.",
  },
  {
    category: 'whatsapp',
    question: 'Which channels can the AI chatbot be deployed on?',
    answer:
      "WhatsApp Business (via Interakt, Wati, AiSensy, or Yellow.ai), your website (embedded widget), Facebook Messenger, Instagram DMs, and support portals like Freshdesk or Zoho Desk. Most Indian businesses start with WhatsApp because 87% of their customers are already there and prefer messaging over phone calls.",
  },
  {
    category: 'whatsapp',
    question: 'Does my business need a WhatsApp Business API account first?',
    answer:
      "No, we handle the WhatsApp Business API setup as part of the project. We work with you to choose the right WhatsApp BSP (Interakt, Wati, or AiSensy based on your volume and budget), complete Meta Business verification, and set up your account. Most Indian businesses are verified and live within 5–7 business days of submitting documents.",
  },
  {
    category: 'whatsapp',
    question: 'Can the chatbot send proactive WhatsApp messages, not just respond?',
    answer:
      "Yes, using WhatsApp template messages (pre-approved by Meta). Common use cases: order shipped notifications, payment confirmation, appointment reminders, follow-up messages to leads who went quiet, and re-engagement campaigns. We set up the template approval process and integrate the broadcast into your Razorpay/Shopify/Zoho workflow so triggers fire automatically.",
  },

  /* ── India-Specific ── */
  {
    category: 'india',
    question: 'Can the chatbot respond in Hindi and regional languages?',
    answer:
      "Yes. We configure chatbots to detect the language the customer writes in and respond in Hindi, Hinglish, Marathi, Tamil, Telugu, Gujarati, Kannada, Bengali, and other languages using multilingual LLM capabilities. Language detection is automatic: one bot handles all languages without separate bots per language.",
  },
  {
    category: 'india',
    question: 'Which Indian business tools can the chatbot integrate with?',
    answer:
      "We integrate with the full Indian business stack: Zoho CRM and Freshdesk for customer management, Razorpay and PayU for payment events and link sending, Tally ERP for accounting, Shiprocket and Delhivery for order tracking, Shopify and WooCommerce for e-commerce data, Interakt/Wati/AiSensy for WhatsApp delivery, and LeadSquared for sales pipelines. If your platform has an API or webhook, we connect to it.",
  },
  {
    category: 'india',
    question: 'Can the chatbot send GST invoices or handle GST-related queries?',
    answer:
      "Yes. We build chatbots that retrieve GST invoices from your Tally or accounting system and share them via WhatsApp as PDFs, answer GSTIN-related billing queries, calculate applicable GST slabs for a product or service, and route GST disputes to your accounts team. Common for B2B distributors and wholesale businesses with high invoice volumes.",
  },
  {
    category: 'india',
    question: 'Can the chatbot handle Razorpay payment links, sending and confirming payments?',
    answer:
      "Yes. We integrate Razorpay webhooks so the chatbot can: generate and send a payment link on WhatsApp when a customer confirms an order, receive the payment success webhook, confirm the transaction to the customer, and log the payment to Zoho CRM or Tally automatically. This replaces manual payment follow-ups entirely.",
  },

  /* ── Process & Timeline ── */
  {
    category: 'process',
    question: 'How long does it take to build an AI chatbot?',
    answer:
      "A focused website or WhatsApp chatbot goes from kickoff to live in 2–3 weeks. Multi-channel chatbots with deeper CRM/ERP integrations take 4–6 weeks. The timeline depends on the number of integrations and how many conversation flows we need to build, we give you a firm estimate after a 45-minute discovery call.",
  },
  {
    category: 'process',
    question: 'What do I need to provide before you start building?',
    answer:
      "Access to your WhatsApp Business account (or we set it up), API keys for the tools we integrate (Zoho, Shopify, Razorpay, etc.), your product/service content for training the knowledge base (FAQs, product catalogue, pricing, even a Google Doc works), and your brand guidelines (tone, language preferences). We send a structured onboarding form after the discovery call.",
  },
  {
    category: 'process',
    question: 'How do you train the chatbot on my specific business content?',
    answer:
      "We build a knowledge base from your existing content, website copy, FAQs, product descriptions, pricing documents, support scripts. We process this into vector embeddings (RAG architecture) so the chatbot retrieves relevant context before answering. You update the knowledge base through a simple admin panel, no technical skills required.",
  },
  {
    category: 'process',
    question: 'What happens after the chatbot goes live?',
    answer:
      "Every project includes a 30-day post-launch window. We monitor conversation logs, tune responses where the bot underperforms, fix any integration issues, and run a training session for your team. After 30 days, you manage the chatbot through the admin dashboard, or continue on an optional monthly retainer for ongoing optimisation and new conversation flows.",
  },

  /* ── Pricing & ROI ── */
  {
    category: 'pricing',
    question: 'How much does an AI chatbot cost in India?',
    answer:
      "FactoryJet AI chatbots are fixed-price and scoped to your build: a focused website chatbot, a WhatsApp AI chatbot with CRM integration, or a multi-channel platform (website + WhatsApp + support portal). Every project is quoted up front after a free discovery call, so you know the full cost before work starts. No hourly billing surprises. Separately, LLM API costs (typically ₹3,000–₹15,000/month for most Indian SMB volumes) are billed directly by model providers.",
  },
  {
    category: 'pricing',
    question: 'What is the typical return on investment for an Indian business chatbot?',
    answer:
      "The most common ROI comes from support labour savings. A WhatsApp chatbot handling 70% of queries replaces 1–2 support executives at a fraction of the cost, payback in 3–6 months for most businesses. Secondary ROI: leads that now get an instant response instead of waiting 4–6 hours convert at significantly higher rates. Most clients see measurable improvement within 30 days of launch.",
  },
  {
    category: 'pricing',
    question: 'Are there ongoing costs after the chatbot is built?',
    answer:
      "Two types: LLM API costs (₹3,000–₹15,000/month for typical Indian SMB chat volumes, billed directly by model providers, we do not mark these up) and your WhatsApp BSP subscription (Interakt/Wati/AiSensy charge separately based on message volume). FactoryJet charges nothing ongoing unless you choose a monthly retainer for optimisation.",
  },
  {
    category: 'pricing',
    question: 'Is my business data safe with an AI chatbot?',
    answer:
      "Yes. We use API-level integrations (no screen scraping), enforce least-privilege access so the chatbot reads only the data it needs, and implement full audit trails on every action. For BFSI, healthcare, and legal sectors, we offer private LLM setups where your data never leaves your infrastructure. All data flows are documented and handed over at delivery.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: CHATBOT_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function AIChatbotINPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="ai-chatbot-in-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="ai-chatbot-in-service-schema"
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
          { name: 'AI Chatbot', url: 'https://factoryjet.com/services/ai-agent-development/ai-chatbot' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
          { name: 'AI Chatbot', url: 'https://factoryjet.com/services/ai-agent-development/ai-chatbot' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="services_ai_agent_development_ai_chatbot_hero" />}
          eyebrow="AI CHATBOT DEVELOPMENT · INDIA"
          headline="AI Chatbots Built for Indian Customers, Live in 2–3 Weeks"
          lead="Your customers are asking the same WhatsApp questions 200 times a day. Your team is drowning in queries that an AI chatbot can handle instantly, in Hindi, English, or any regional language, while pushing data directly into Zoho, Shopify, and Razorpay. Fixed price. No ongoing SaaS fee."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'in' as const }}
          trustItems={[
            '500+ businesses served',
            'WhatsApp + Zoho + Razorpay ready',
            'Hindi & regional languages',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#B23E13]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                WHATSAPP AI CHATBOT IN ACTION
              </p>
              <p className="mt-4 font-fj-display text-[1.875rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                600+ WhatsApp queries resolved automatically: every day, without a single extra hire.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Customer: "Where is my order?" → Bot checks Shiprocket → replies with tracking link in 3 seconds',
                  'Lead from Instagram ad asks price → Bot qualifies, sends catalogue → books demo to Zoho CRM',
                  'Distributor asks for GST invoice → Bot fetches from Tally → sends PDF on WhatsApp instantly',
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
                  Runs 24/7 in Hindi, English, and regional languages, no sick leave, no salary.
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
          headline="500+ businesses. 12 years of building. One goal: your results."
          description="Websites designed and built for businesses across India, the US, the UK and the UAE: Shopify stores, B2B companies, and DTC brands. Fixed, transparent pricing, your codebase delivered in full, and a 7-day delivery guarantee."
        />

        {/* ── 4. WHAT IS AN AI CHATBOT ─────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="AI CHATBOT EXPLAINED"
          headline="Why an AI Chatbot Is Nothing Like the Scripted Bots You Have Tried"
          lead="Scripted chatbots break the moment a customer asks something unexpected. AI chatbots understand intent in plain language, take real actions in your systems, and improve over time, with no script to maintain."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {[
                  'WhatsApp support',
                  'Lead qualification',
                  'Order tracking',
                  'GST invoices',
                  'Appointment booking',
                  'Payment links',
                  'Product FAQs',
                  'Hindi & regional',
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
                The scripted chatbots most Indian businesses have tried, button-click menus, keyword matching, decision trees, fail 40–60% of conversations because customers do not behave the way the script expects. They use different words, mix languages, ask follow-up questions, or type something the script never anticipated. The bot breaks, the customer leaves, and your team picks up the mess.
              </p>
              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[
                  { value: '24/7', label: 'Always on' },
                  { value: '70%', label: 'Ticket deflection' },
                  { value: '<60s', label: 'Response time' },
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
              <div className="border-l-2 border-[#F05A28] pl-5 py-1" aria-hidden>
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.1875rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  More like a knowledgeable team member than a phone menu.
                </p>
              </div>
              <p>
                FactoryJet AI chatbots are built on large language models: Claude, GPT-4o, or Gemini, with a retrieval layer trained on your specific business content: product catalogue, pricing, policies, FAQ answers. The bot understands what your customer means, checks your live data (Shopify orders, Zoho CRM, Shiprocket tracking), and takes action or escalates intelligently. No script to maintain, no tree to update every time you change your pricing.
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
                  AI vs. Scripted Chatbot
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  {
                    scenario: 'Customer types in Hindi',
                    scripted: 'Breaks, only English supported',
                    ai: 'Understands, responds in Hindi automatically',
                  },
                  {
                    scenario: 'Unexpected question asked',
                    scripted: '"Sorry, I did not understand. Please select an option."',
                    ai: 'Understands intent, answers from knowledge base',
                  },
                  {
                    scenario: 'Check Shopify order status',
                    scripted: 'Cannot, no system integration',
                    ai: 'Queries Shopify live, replies with status in 3 sec',
                  },
                  {
                    scenario: 'Send Razorpay payment link',
                    scripted: 'Cannot take actions',
                    ai: 'Generates and sends link on WhatsApp instantly',
                  },
                  {
                    scenario: 'Knowledge base update',
                    scripted: 'Rebuild the decision tree',
                    ai: 'Upload a document, done in minutes',
                  },
                ].map((row) => (
                  <div key={row.scenario} className="px-7 py-4">
                    <p className="font-fj-mono font-semibold text-fj-ink" style={{ fontSize: '0.75rem', letterSpacing: '0.04em' }}>{row.scenario}</p>
                    <div className="mt-2 grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-fj-neutral-50 px-3 py-2">
                        <p className="font-fj-mono uppercase text-fj-neutral-400" style={{ fontSize: '0.625rem', letterSpacing: '0.08em' }}>Scripted</p>
                        <p className="mt-1 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem' }}>{row.scripted}</p>
                      </div>
                      <div className="rounded-lg border border-[rgba(240,90,40,0.2)] bg-[rgba(240,90,40,0.05)] px-3 py-2">
                        <p className="font-fj-mono uppercase text-[#B23E13]" style={{ fontSize: '0.625rem', letterSpacing: '0.08em' }}>AI Chatbot</p>
                        <p className="mt-1 font-fj-body text-fj-ink" style={{ fontSize: '0.8125rem' }}>{row.ai}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        {/* ── 5. THE PROBLEM (DARK) ─────────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE PROBLEM"
          headline="Your team is answering the same WhatsApp messages on repeat"
          lead="The biggest hidden cost in most Indian businesses is not salary, it is repetition. Your support staff spend 60–70% of their time on questions with the same 10 answers. An AI chatbot eliminates that entirely."
          pillars={[
            {
              icon: '💬',
              title: 'WhatsApp support is your most expensive bottleneck',
              body: "500 million Indians use WhatsApp. Your customers are on it. Your team manages it manually, typing the same answers, sending the same tracking links, fielding the same pricing questions: all day, every day. One AI chatbot handles 70%+ of these automatically, in the customer's language, at 2 AM.",
            },
            {
              icon: '⏱️',
              title: 'Leads go cold while your team sleeps',
              body: 'Research shows that responding to an inbound lead within 5 minutes increases conversion rates by 21×. A lead who WhatsApps your business at 11 PM and gets a reply at 9 AM the next morning has likely already enquired with three competitors. An AI chatbot responds in under 60 seconds, around the clock.',
            },
            {
              icon: '🔄',
              title: 'Scripted chatbots create more problems than they solve',
              body: "You tried a button-menu chatbot, it confused customers, increased escalations, and your team spent more time managing the bot than it saved. AI chatbots are fundamentally different: they understand intent, handle unexpected questions, integrate with your real systems, and get smarter over time. The failure mode of scripted bots is not an AI problem.",
            },
          ]}
        />

        {/* ── 6. BUILD JOURNEY (LIGHT) ─────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="HOW WE BUILD"
          headline="From discovery to live chatbot in 2–3 weeks"
          stages={CHATBOT_JOURNEY_STAGES}
          closingNote="Every stage ends with a working demo. You see the chatbot before it talks to your customers."
        />

        {/* ── 7. TECH STACK (LIGHT, REVERSED) ──────────────────────────────── */}
        <ServiceExplanation
          eyebrow="TECHNOLOGY"
          headline="The technology stack behind your AI chatbot"
          lead="We do not have a preferred vendor, we pick the right model and platform for your business, channel, and data sensitivity requirements. Every architectural decision is documented."
          reverseOnDesktop
          body={
            <>
              <p>
                Every chatbot we build has four layers: an LLM for language understanding and response generation, a knowledge base (RAG architecture) trained on your business content, integration connectors for your Indian business tools, and a deployment layer for WhatsApp, website, or both. We choose best-in-class components for each layer and explain the reasoning in plain language.
              </p>
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
                      { layer: 'LLM / AI Model',       tools: 'Claude, GPT-4o, Gemini, Mistral' },
                      { layer: 'Knowledge Base (RAG)',  tools: 'Pinecone, pgvector, Chroma' },
                      { layer: 'Orchestration',          tools: 'LangChain, LangGraph, n8n' },
                      { layer: 'WhatsApp Delivery',     tools: 'Interakt, Wati, AiSensy, Yellow.ai' },
                      { layer: 'Website Widget',        tools: 'Custom React embed, Vercel Edge' },
                      { layer: 'CRM / Support',         tools: 'Zoho CRM, Freshdesk, LeadSquared' },
                      { layer: 'E-Commerce',            tools: 'Shopify, WooCommerce, Shiprocket' },
                      { layer: 'Payments',              tools: 'Razorpay, PayU webhooks' },
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
                For data-sensitive sectors, healthcare, BFSI, legal, we deploy private LLM setups where your data never leaves your infrastructure. No third-party model provider sees your customer conversations.
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
                  Five Chatbot Types We Build
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  {
                    name: 'WhatsApp Support Chatbot',
                    desc: '24/7 customer support on Interakt/Wati. Order status, returns, product queries, human escalation.',
                  },
                  {
                    name: 'Lead Qualification Chatbot',
                    desc: 'Captures and qualifies inbound leads from ads and website. Pushes qualified leads to Zoho CRM.',
                  },
                  {
                    name: 'E-Commerce Assistant',
                    desc: 'Shopify/WooCommerce chatbot for product discovery, order tracking, and Razorpay payment links.',
                  },
                  {
                    name: 'Appointment Booking Chatbot',
                    desc: 'Books appointments, checks availability, sends reminders, handles rescheduling on WhatsApp.',
                  },
                  {
                    name: 'B2B Ordering Chatbot',
                    desc: 'Lets your dealers place orders, check stock, download GST invoices on WhatsApp, 24/7.',
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

        {/* ── 8. STATS BAND ─────────────────────────────────────────────────── */}
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
              {CHATBOT_STATS.map((stat) => (
                <div key={stat.value}>
                  {stat.categoryLabel && (
                    <div
                      className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-fj-mono font-bold uppercase"
                      style={{
                        fontSize: '9px',
                        letterSpacing: '0.13em',
                        color: '#B23E13',
                        background: 'rgba(240,90,40,0.06)',
                        border: '1px solid rgba(240,90,40,0.22)',
                      }}
                    >
                      <span className="inline-block h-1 w-1 rounded-full" style={{ backgroundColor: '#F05A28' }} aria-hidden="true" />
                      {stat.categoryLabel}
                    </div>
                  )}
                  <p
                    className="font-fj-display font-bold"
                    style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', lineHeight: 1, letterSpacing: '-0.04em', color: '#F05A28' }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-3 font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.9375rem', lineHeight: 1.5 }}>
                    {stat.label}
                  </p>
                  {stat.microcopy && (
                    <p className="mt-1.5 font-fj-body text-fj-neutral-400" style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}>
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
          eyebrow="INDIA CHATBOT MARKET"
          headline="500 million WhatsApp users. Your customers expect to chat, not call."
          leadParagraphs={[
            "India is the world's largest WhatsApp market, with over 500 million active users. 87% of Indian consumers prefer messaging over phone calls for customer support, yet most Indian businesses still handle WhatsApp manually, with teams typing the same answers hundreds of times a day. The businesses deploying AI chatbots now are compounding a customer experience advantage their competitors cannot easily close.",
            "The India chatbot market is projected to exceed ₹8,200 Cr by 2028, growing at 28% CAGR. The growth is driven not by large enterprises: most of them already have chatbots, but by SMBs in D2C, real estate, EdTech, healthcare, and B2B distribution discovering that AI chatbots are now affordable enough to deploy at any scale.",
          ]}
          bodySlot={
            <>
              <div className="border-l-2 border-[#F05A28] py-1 pl-5" aria-hidden="true">
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  A lead that waits 6 hours for a reply has already messaged three competitors.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  'D2C E-Commerce',
                  'Real Estate',
                  'EdTech',
                  'Healthcare',
                  'Financial Services',
                  'B2B Distribution',
                ].map((ind) => (
                  <span
                    key={ind}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-medium text-[#B23E13]"
                    style={{ fontSize: '10px', letterSpacing: '0.08em' }}
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </>
          }
          stats={CHATBOT_MARKET_STATS}
        />

        {/* ── 10. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Scripted Chatbot Tool vs. Freelancer vs. No-Code Builder"
          lead="Fixed price, full ownership, Indian business stack out of the box, here is the honest comparison."
          pullQuote={{
            stat: 'Fixed price',
            caption:
              'scoped to your build, AI chatbot with natural language understanding, Hindi support, Zoho CRM integration, and full code ownership. No SaaS subscription. No decision tree to maintain. Quoted up front after a free discovery call, so you know the full cost before work starts.',
          }}
          columns={CHATBOT_COMPARISON_COLUMNS}
          rows={CHATBOT_COMPARISON_ROWS}
          footer="Prices reflect typical Indian market rates as of 2025. FactoryJet fixed-price contracts available for all tiers."
        />

        {/* ── 11. INDUSTRIES GRID (DARK) ────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="WHO WE BUILD FOR"
          headline="AI chatbots for every major Indian industry"
          lead="Every industry has different conversation patterns, integrations, and compliance requirements. We build for yours."
          sectors={CHATBOT_INDUSTRIES}
        />

        <GetFreeQuoteCTA />
        {/* ── 13. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What founders say after we build their AI chatbots"
        />

        {/* ── 14. FAQ (LIGHT) ───────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything to Know Before You Start"
          lead="The questions we answer on every Indian AI chatbot discovery call, answered honestly, without the runaround."
          categories={CHATBOT_FAQ_CATEGORIES}
          items={CHATBOT_FAQ_ITEMS}
        />

        {/* ── 15. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}

        {/* ── 16. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="GET STARTED"
            headline="Book a Free AI Chatbot Strategy Call"
            sub="Tell us your biggest support or lead-response bottleneck. We will map out exactly which chatbot type fits your business and give you a fixed-price estimate before writing a single line of code. No pitch, no pressure: an honest assessment from engineers who have been building for Indian businesses for 12 years."
            primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'in' }}
            secondaryCta={{ label: 'WhatsApp Us', href: 'https://wa.me/919699977699' }}
            objectionHandler="Fixed price. Full code ownership. WhatsApp + Zoho + Razorpay ready. No SaaS lock-in."
          />
        </div>

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
