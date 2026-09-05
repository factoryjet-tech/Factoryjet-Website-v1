import type { Metadata } from 'next';
import { usServiceAlternates } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
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
  title: 'AI Integration Services: Connect AI to Tools | FactoryJet',
  description:
    'Add AI to your existing business software: CRM, e-commerce, ERP & custom apps. Expert AI integration. Get a quote.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Integration Services USA | FactoryJet',
    description:
      'Connect GPT-4o, Claude, and AI models to your CRM, e-commerce platform, ERP, and custom software. fixed-price, milestone-paid. Fast delivery.',
    url: 'https://factoryjet.com/services/ai-integration-services',
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
      'Connect AI to your existing business tools. fixed-price, milestone-paid. Fast delivery. Get a quote.',
    images: ['https://factoryjet.com/images/us/services/hero-ai-integration.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-integration-services',
    languages: {
      'en-US': 'https://factoryjet.com/services/ai-integration-services',
      'x-default': 'https://factoryjet.com/services/ai-integration-services',
    },
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
   JSON-LD Schema (Service + HowTo + Breadcrumb), faqSchema is declared after
   FAQ_ITEMS below, since it derives mainEntity from that array via .map()
───────────────────────────────────────────────────────────────────────────── */

// Freshness signal. Benchmark: 56% of AI-Overview-cited pages carry it.
// Keep honest: bump when the page's content actually changes.
const PAGE_MODIFIED = '2026-08-04';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-integration-services#webpage',
  url: 'https://factoryjet.com/services/ai-integration-services',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Integration Services',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  serviceType: 'AI Integration Services',
  description:
    'AI integration services for US small and medium businesses, connecting GPT-4o, Claude, and other AI models to existing CRM, e-commerce, support desk, and custom software platforms.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Starter AI Integration',
      description: 'Single-system AI integration for one focused use case.',
    },
    {
      '@type': 'Offer',
      name: 'Growth AI Integration Platform',
      description: 'Multi-system AI integration with unified API layer and monitoring dashboard.',
    },
    {
      '@type': 'Offer',
      name: 'Enterprise AI Integration',
      description: 'Custom AI integration with fine-tuning, legacy system APIs, and compliance requirements.',
    },
  ],
  
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet builds your AI integration solution',
  description: 'Our process for delivering this work, typically 1 to 6 weeks depending on scope.',
  // Aligned 2026-08-04 to the timeline this page actually states (1 to 6 weeks).
  // 7-day delivery is real for standard website builds, but this page's own
  // process section says 1 to 6 weeks, so P7D contradicted the visible content.
  totalTime: 'P42D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Stage 1 | Discovery & Use-Case Mapping',
      text: 'We audit your workflows, identify the highest-ROI automation opportunities, and define the exact scope of your AI solution.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Stage 2 | Architecture & Data Planning',
      text: 'We design the AI architecture, select the right models and APIs, and map your data sources and integration points.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Stage 3 | Build & Integrate',
      text: 'We build your AI agents or automation workflows and integrate them with your existing tools, CRM, and business systems.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Stage 4 | Testing & Optimization',
      text: 'We run comprehensive testing across edge cases, optimize for accuracy and latency, and add monitoring and alerting.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Stage 5 | Launch & Training',
      text: 'Your AI solution goes live. We train your team, provide documentation, and offer 30-day post-launch support.',
    },
  ],
};

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below, so the two
 *  can never drift into showing a different path than the schema claims. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI Integration Services', url: 'https://factoryjet.com/services/ai-integration-services' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://factoryjet.com/services/ai-integration-services#breadcrumb',
  itemListElement: BREADCRUMB_ITEMS.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const INTEGRATION_TYPES = [
  {
    name: 'CRM AI Integration',
    description:
      'We add AI-powered workflows directly inside HubSpot, Salesforce, Pipedrive, or Zoho. Sales reps generate email drafts with one click based on contact history. AI handles lead scoring and summarizes call notes without leaving your CRM.',
    example: 'Sales reps cut email writing time from 45 min to 8 min per day.',
    linkLabel: 'See AI automation services',
    linkHref: '/services/ai-workflow-automation',
  },
  {
    name: 'E-Commerce AI Integration',
    description:
      'We connect AI directly to Shopify, WooCommerce, or BigCommerce. Automatically generate product descriptions and SEO metadata for every new SKU. Analyze customer review sentiment to surface instant buying recommendations.',
    example: 'Shopify brands see 18–25% higher conversion on AI-written product pages.',
    linkLabel: 'Explore ecommerce solutions',
    linkHref: '/services/ecommerce-development',
  },
  {
    name: 'Support Desk AI Integration',
    description:
      'We integrate AI with Zendesk, Intercom, Freshdesk, or Help Scout. Incoming tickets are classified and tagged by topic and urgency before an agent opens them. Draft replies pull verified answers from your documentation.',
    example: 'Teams report 35% reduction in average handle time per ticket.',
    linkLabel: 'Explore AI chatbot services',
    linkHref: '/services/ai-chatbot-development',
  },
  {
    name: 'Document AI Integration',
    description:
      'Extract structured data from PDFs, scanned forms, contracts, and invoices automatically. Connect document storage in Google Drive or Box directly to QuickBooks and your CRM. Eliminate manual data entry completely.',
    example: 'Processes 200+ documents per hour vs. 10–15 manually.',
    linkLabel: 'See AI agent development',
    linkHref: '/services/ai-agent-development',
  },
  {
    name: 'Custom App AI Integration',
    description:
      'Embed GPT-4o, Claude, or custom fine-tuned models directly into your internal web app or admin panel via REST API. AI features appear as native parts of your existing interface. Your team requires no new logins.',
    example: 'Most custom integrations go live in 2–3 weeks from kickoff.',
    linkLabel: 'See web app development',
    linkHref: '/services/web-application-development',
  },
  {
    name: 'Database & Analytics AI Integration',
    description:
      'Add natural-language queries to your existing databases. Ask questions in plain English and receive accurate SQL results instantly. Anomaly detection flags unusual revenue or inventory patterns before issues escalate.',
    example: 'Finance teams catch data anomalies days earlier than before.',
    linkLabel: 'Explore AI SEO & data',
    linkHref: '/services/ai-seo',
  },
];

const INTEGRATION_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We audit your software stack and pinpoint high-value integration points. We map data flows and calculate expected ROI before writing code. This takes a single 60-minute session.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We outline the API architecture and prompt engineering strategy. We define how outputs surface inside your software. You approve the technical design before build starts.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'We handle development with weekly live demos. You see AI working inside your actual software tools. Our team incorporates your feedback at each step.',
  },
  {
    number: '04',
    title: 'Deploy & Monitor',
    description:
      'We manage production rollout with quality monitoring dashboards and full prompt libraries. Every client gets a 30-day support window. We also provide clear staff training.',
  },
];

const ROI_STATS = [
  {
    value: '80%',
    label: 'reduction in copywriting time after AI product description integration.',
    microcopy: 'reported by Shopify brand clients.',
    categoryLabel: 'CONTENT CREATION',
  },
  {
    value: '35%',
    label: 'reduction in support ticket handle time after AI triage integration.',
    microcopy: 'average across FactoryJet support desk integrations.',
    categoryLabel: 'SUPPORT EFFICIENCY',
  },
  {
    value: 'Fixed Price',
    label: 'milestone-paid AI integration with full code ownership.',
    microcopy: 'specialized engineers, US-caliber output, predictable from quote to launch.',
    categoryLabel: 'PRICING MODEL',
  },
];

const MARKET_STATS = [
  {
    value: '85%',
    label: 'of US SMBs say they want AI features in their existing software but have not integrated yet.',
    microcopy: 'Salesforce SMB AI Adoption Report 2024.',
    categoryLabel: 'INTEGRATION GAP',
  },
  {
    value: '4×',
    label: 'productivity improvement in tasks where humans work alongside AI vs. without it.',
    microcopy: 'Stanford Human-AI Collaboration Study.',
    categoryLabel: 'PRODUCTIVITY LIFT',
  },
  {
    value: '18%',
    label: 'average conversion rate improvement on AI-generated product descriptions vs. manual copy.',
    microcopy: 'Shopify merchant study: FactoryJet client data.',
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
    feature: 'Pricing model.',
    values: [
      'Fixed-price, one-time.',
      'Enterprise budgets.',
      'Per-user SaaS fees.',
      'Hidden staff-time cost.',
    ],
  },
  {
    feature: 'Delivery timeline.',
    values: ['1–3 weeks.', '2–4 months.', 'Hours (limited capability).', '4–12 weeks.'],
  },
  {
    feature: 'Custom to your specific workflow.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="saas" kind="no" />,
      <CompareIcon key="inhouse" kind="yes" />,
    ],
  },
  {
    feature: 'Connects to your existing CRM / stack.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="saas" kind="partial" />,
      <CompareIcon key="inhouse" kind="yes" />,
    ],
  },
  {
    feature: 'Prompt engineering optimized for your data.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="saas" kind="no" />,
      <CompareIcon key="inhouse" kind="partial" />,
    ],
  },
  {
    feature: 'You own the integration code.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="saas" kind="no" />,
      <CompareIcon key="inhouse" kind="yes" />,
    ],
  },
  {
    feature: 'No ongoing per-user SaaS fees.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="saas" kind="no" />,
      <CompareIcon key="inhouse" kind="yes" />,
    ],
  },
  {
    feature: '30-day post-launch support.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="saas" kind="no" />,
      <CompareIcon key="inhouse" kind="no" />,
    ],
  },
  {
    feature: '12+ years of SMB domain experience.',
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
    priceRange: 'Scoped to your build',
    description:
      'A focused AI integration that adds one AI capability to one existing tool. Best for businesses testing AI with a clear, bounded first use case.',
    features: [
      'Single-system AI integration (CRM, e-commerce, support desk, or custom app).',
      'GPT-4o or Claude as the underlying model.',
      'Custom prompt engineering optimized for your data and tone.',
      'API integration with output validation.',
      'Lightweight monitoring for output quality.',
      'Full integration documentation and code ownership.',
      '14-day post-launch support window.',
    ],
    cta: { label: 'Get a Quote', modal: true as const, region: 'us' as const },
  },
  {
    name: 'Growth',
    priceRange: 'Most common scope',
    description:
      'AI integrated across 3–5 tools in your stack with a unified API layer and output quality dashboard. The most popular tier for US SMBs ready to go all-in on AI.',
    features: [
      'Multi-system AI integration (CRM + e-commerce + support desk).',
      'Unified AI API layer with shared model management.',
      'Output quality monitoring dashboard.',
      'Fine-tuned prompts with A/B testing for best-performing versions.',
      'Human-in-the-loop review flows where needed.',
      'Team training and full prompt library documentation.',
      '30-day post-launch support window.',
      'Monthly retainer option for ongoing optimization.',
    ],
    cta: { label: 'Get a Custom Quote', modal: true as const, region: 'us' as const },
    popular: true,
  },
  {
    name: 'Enterprise',
    priceRange: 'Custom scope',
    description:
      'Full-stack AI integration with custom model fine-tuning, legacy system APIs, compliance requirements, and a dedicated engineering partner.',
    features: [
      'Custom LLM fine-tuning on your proprietary content and terminology.',
      'Legacy system and ERP integration.',
      'Private cloud deployment option (no data to third-party model providers).',
      'HIPAA / SOC 2 pattern-compliant data handling.',
      'Advanced output quality analytics.',
      'Dedicated engineering point of contact.',
      'SLA-backed response and uptime commitments.',
      '90-day post-launch support and model improvement window.',
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

/* ─── FAQ items - 21 conversational Q-A pairs ────────────────────────────── */
const FAQ_ITEMS = [

  /* ── What Is AI Integration ── */
  {
    category: 'what-is',
    question: 'What are AI integration services?',
    answer:
      'AI integration services connect modern AI models like GPT-4o, Claude, and Gemini to your existing business software. This enables your current tools to generate text, classify requests, extract data, and summarize records with real intelligence. Rather than replacing your software, we add AI capabilities directly to what you already use. Your CRM drafts client follow-ups. Your e-commerce store generates product copy. Your help desk tags incoming tickets automatically.',
  },
  {
    category: 'what-is',
    question: 'How is AI integration different from building a custom AI app from scratch?',
    answer:
      'Building from scratch creates an entirely new application. In contrast, AI integration adds smart capabilities to tools you already own. Most businesses start with integrations because they cost less, launch faster, and yield immediate returns. Custom builds can follow later when off-the-shelf software cannot meet your unique business requirements.',
  },
  {
    category: 'what-is',
    question: 'What kinds of AI integrations does FactoryJet build?',
    answer:
      'We build six core integration types. First is CRM AI for email drafts and lead scoring in HubSpot and Salesforce. Second is E-Commerce AI for product descriptions and recommendations on Shopify. Third is Support Desk AI for ticket classification in Zendesk and Intercom. Fourth is Document AI for extracting data from PDFs. Fifth is Custom App AI for internal tools via API. Sixth is Data Intelligence for natural-language queries and anomaly detection.',
  },
  {
    category: 'what-is',
    question: 'Which AI models can you integrate: GPT-4o, Claude, or others?',
    answer:
      'We integrate GPT-4o from OpenAI, Claude 3.5 Sonnet from Anthropic, and Google Gemini. We also support open-source models like Mistral and LLaMA 3. Selection depends on your goals, budget, and privacy standards. For most businesses, GPT-4o or Claude provides the best mix of speed, accuracy, and value. For regulated environments, we deploy private models that keep all data on your own servers.',
  },

  /* ── Process & Timeline ── */
  {
    category: 'process',
    question: 'What does the AI integration process look like?',
    answer:
      'Our process runs in four clear stages. First is Discover: we audit your stack and identify high-value integration points. Second is Design: we map API architecture and prompt engineering. Third is Build: we develop connectors with weekly demos in your actual tools. Fourth is Deploy: we launch with monitoring, full documentation, and 30-day support. Most builds require zero UI changes.',
  },
  {
    category: 'process',
    question: 'How long does it take to integrate AI into existing software?',
    answer:
      'A single focused integration goes from kickoff to production in 1–3 weeks. This includes automated email drafts or ticket triage. Multi-system builds connecting 3–5 platforms take 4–6 weeks. Complex enterprise integrations with fine-tuned models run 8–12 weeks. Delivery timelines depend on your total system count and API documentation quality.',
  },
  {
    category: 'process',
    question: 'Will my team see progress during the build?',
    answer:
      'Yes, you receive weekly live demos throughout the project. You see the AI working inside your actual software tools, not in an artificial test sandbox. Early demos surface useful workflow nuances. We build in ample time to adapt and refine features at each step.',
  },
  {
    category: 'process',
    question: 'What happens after the AI integration is deployed?',
    answer:
      'Every build includes a dedicated 30-day post-launch window. We monitor output accuracy, refine prompt instructions, and adapt to vendor API updates. We also provide thorough team training. After 30 days, your team can self-manage easily or retain us for ongoing feature enhancements.',
  },

  /* ── Pricing & ROI ── */
  {
    category: 'pricing',
    question: 'How much do AI integration services cost?',
    answer:
      'FactoryJet AI integrations are fixed-price and scoped to your build. Key drivers include system count, API complexity, and custom fine-tuning needs. Most clients choose our Growth tier with multi-system connectors and unified monitoring. Enterprise integrations with compliance rules and legacy systems are scoped individually. All quotes are fixed upfront with zero hourly billing.',
  },
  {
    category: 'pricing',
    question: 'Why is FactoryJet fixed-price, milestone-paid?',
    answer:
      'Our engineering team brings 12+ years of focused expertise. Same quality of API architecture, prompt engineering, and delivery without the overhead that inflates traditional agency invoices. We\'ve served US businesses for 12 years. You brief an engineer; that engineer builds it. No account management layers, no inflated overhead.',
  },
  {
    category: 'pricing',
    question: 'What is the ROI from AI integration services?',
    answer:
      'ROI comes from two main sources: hours saved and higher conversion. For example, sales reps using automated email drafts spend 8 minutes daily instead of 45 minutes. E-commerce stores using AI product descriptions report 18–25% higher conversion rates compared to manual copy. Most client builds recover their investment within 60–90 days.',
  },
  {
    category: 'pricing',
    question: 'Are there ongoing costs after the integration is built?',
    answer:
      'You pay AI model API costs directly to OpenAI, Anthropic, or Google at raw cost with zero agency markup. You can also select an optional monthly retainer for prompt tuning or new connectors. FactoryJet charges zero ongoing platform fees once your project is deployed.',
  },

  /* ── Technical & Security ── */
  {
    category: 'technical',
    question: 'What software platforms can AI be integrated with?',
    answer:
      'We integrate AI into standard CRMs like HubSpot and Salesforce. We connect e-commerce stores on Shopify, BigCommerce, and WooCommerce. We support Zendesk, QuickBooks, Google Drive, PostgreSQL, and custom web apps via REST API. If your software has an API or webhook, we connect AI to it.',
  },
  {
    category: 'technical',
    question: 'How do you ensure AI outputs are accurate and on-brand?',
    answer:
      'We enforce accuracy through four mechanisms. First is prompt engineering with explicit constraints. Second is automated output validation before data reaches staff. Third is human-in-the-loop review where a person approves drafts. Fourth is continuous usage monitoring and tuning.',
  },
  {
    category: 'technical',
    question: 'Can you integrate AI into a custom-built internal tool or legacy system?',
    answer:
      'Yes, provided your system has a viable data interface. This includes a readable database, a callable API, or structured file exports. We frequently integrate AI into custom admin portals, legacy CRMs, and older ERP platforms. Our team documents every integration point clearly during handoff.',
  },
  {
    category: 'technical',
    question: 'Will AI integration require changes to the software my team uses?',
    answer:
      'Usually no changes are required. Most integrations run as a secure background service. The AI processes records and returns results directly into your existing interface via native APIs. Your team continues working in their familiar software, now augmented with automated intelligence.',
  },

  /* ── Trust & Results ── */
  {
    category: 'trust',
    question: 'Is our data safe when connecting AI to our existing tools?',
    answer:
      'We protect your data using OAuth and API token authentication. We enforce least-privilege permissions and maintain structured request logs. For highly regulated industries, we deploy private AI models that process data on your infrastructure without sharing records with third-party providers.',
  },
  {
    category: 'trust',
    question: 'Can you fine-tune an AI model on our specific business data?',
    answer:
      'Yes, we offer custom model fine-tuning on Enterprise projects. We train models on your historical support tickets, product catalogs, brand voice, and internal terminology. The resulting model produces outputs that reflect your exact brand persona. This is valuable for high-volume customer emails and public product descriptions.',
  },
  {
    category: 'trust',
    question: 'What are the most common first AI integrations US small businesses build?',
    answer:
      'We see four common starting points. First is CRM email draft generation for one-click sales follow-ups. Second is support ticket auto-classification before an agent opens the queue. Third is automatic product description and metadata generation for new SKUs. Fourth is document data extraction from invoices and intake forms.',
  },
  {
    category: 'trust',
    question: 'What results have other businesses gotten from FactoryJet AI integrations?',
    answer:
      'A Shopify brand cut copywriting time by 80% while boosting conversion by 18%. A B2B SaaS client reduced sales email writing time from 45 minutes to 8 minutes daily. A professional firm saved 2–3 hours per document review. We share relevant case studies on our discovery call.',
  },
  {
    category: 'trust',
    question: 'Can AI integration work for a small team with no technical staff?',
    answer:
      'Yes, non-technical teams make up the majority of our clients. Most integrations operate quietly in the background. Results appear right where your staff already works, so no one needs to learn new software. Managers inspect output quality through a simple dashboard without needing developer support.',
  },
  {
    category: 'trust',
    question: 'How is FactoryJet different from a US AI development agency?',
    answer:
      'We provide three distinct advantages. First is pricing: specialized engineers who have supported US businesses for 12+ years. Second is speed: direct access to the engineers building your solution without account layers. Third is SMB depth: over 500 projects delivered. We understand how to integrate AI inside a 15-person firm effectively.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function AIIntegrationServicesPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="ai-integration-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="ai-integration-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="ai-integration-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        id="ai-integration-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader
        navLinks={[
          { label: 'Services', href: '/services' },
          { label: 'AI Integration', href: '/services/ai-integration-services' },
          { label: 'AI Agents', href: '/services/ai-agent-development' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Contact', modal: true, region: 'us' },
        ]}
        cta={{ label: 'Book a Call', modal: true, region: 'us' }}
      />

      <main className="bg-fj-cream">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="us" source="us_services_ai_integration_services_hero" />}
          eyebrow="AI INTEGRATION SERVICES · USA"
          headline="Add AI to the Tools You Already Use, Without Replacing Them"
          lead="Your CRM, e-commerce store, support desk, and internal apps can all be smarter without replacing your software stack. FactoryJet integrates GPT-4o and Claude directly into your existing tools. Your team gains advanced AI capabilities inside familiar workflows."
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={[
            '500+ businesses served',
            'Fixed price',
            'milestone-paid',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#B23E13]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                AI INTEGRATION IN ACTION
              </p>
              <p className="mt-4 font-fj-display text-[2rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                AI inside the tools your team already uses every day.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Sales rep opens HubSpot contact → one click → personalized follow-up draft ready.',
                  'New SKU added to Shopify → AI writes product description + SEO metadata automatically.',
                  'Support ticket arrives → AI classifies topic, urgency + drafts reply before agent opens it.',
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
                  AI-powered features. Same software your team already knows.
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

        {/* ── 3. WHAT IS AI INTEGRATION ────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="AI INTEGRATION EXPLAINED"
          headline="You Don't Need New Software. You Need AI Inside the Software You Have."
          lead="The fastest path to AI ROI isn't replacing your tools. It's adding intelligence to the ones your team already uses and trusts."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {[
                  'Generate email drafts in CRM.',
                  'Write product descriptions.',
                  'Classify support tickets.',
                  'Extract document data.',
                  'Score leads automatically.',
                  'Natural-language data queries.',
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
                Most businesses spend months evaluating AI tools and signing up for pilots. Most never ship anything meaningful. The faster path is simple. Keep the tools your team already knows. Add AI capabilities directly via API. Your sales team stays in HubSpot. Your support team stays in Zendesk. The AI operates automatically behind the scenes.
              </p>

              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[
                  { value: '1–3wk', label: 'To first integration.' },
                  { value: '4×', label: 'Productivity lift.' },
                  { value: '60–90d', label: 'Typical payback.' },
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
                We connect GPT-4o, Claude, and specialized models using native APIs. A sales rep gets a personalized email draft with one click in HubSpot. A support agent opens Zendesk to find tickets pre-classified with drafted replies. A Shopify store creates optimized product descriptions upon adding a new SKU. Familiar workflows deliver AI-powered efficiency.
              </p>

              <div className="grid grid-cols-2 gap-2" aria-hidden>
                {[
                  'HubSpot & Salesforce.',
                  'Shopify & WooCommerce.',
                  'Zendesk & Intercom.',
                  'Custom web apps.',
                  'QuickBooks & Xero.',
                  'Internal databases.',
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
                    title: 'User triggers an action.',
                    desc: 'A user clicks a button in their current software. Alternatively, a background webhook fires for a new record.',
                  },
                  {
                    step: '02',
                    title: 'Integration fetches context.',
                    desc: 'The system pulls relevant data from your software. This includes contact history, product details, and ticket context.',
                  },
                  {
                    step: '03',
                    title: 'AI model processes and generates.',
                    desc: 'GPT-4o or Claude processes the context. It generates a draft, classification, or extraction using engineered prompts.',
                  },
                  {
                    step: '04',
                    title: 'Output surfaces in your existing UI.',
                    desc: 'The output surfaces directly inside your tool. Staff see a draft email in HubSpot or a tagged ticket in Zendesk.',
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
          lead="Some companies get real ROI from AI while others waste license fees. The deciding factor is simple: integrating AI directly into how staff work."
          pillars={[
            {
              icon: '⏱',
              title: 'Generic AI tools don\'t know your data',
              body: 'ChatGPT and off-the-shelf AI copilots are powerful but generic. They do not know your customer records, catalog, or internal tone. The result is outputs that need heavy manual editing. Because of that friction, staff abandon generic tools within weeks. Custom AI integration connects language models to your actual database, making outputs reliable from day one.',
            },
            {
              icon: '📉',
              title: 'SaaS AI add-ons charge per seat, forever',
              body: 'Microsoft Copilot and Salesforce Einstein charge monthly seat fees. Intercom Fin charges per conversation. These recurring fees compound quickly. A 20-person team can spend tens of thousands annually on seat add-ons. FactoryJet builds these capabilities into your software for a fixed, one-time price. You only pay raw model usage at provider API rates.',
            },
            {
              icon: '💸',
              title: 'Custom integrations used to require expensive US engineering teams',
              body: 'Connecting AI to legacy CRMs or custom databases requires real engineering. It cannot be solved with basic no-code tools. Traditional agencies charge steep ongoing retainers for this work. In contrast, FactoryJet delivers production-grade middleware and prompt engineering at predictable, milestone-paid pricing.',
            },
          ]}
        />

        {/* ── 5. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Discovery to AI-Powered Software in 1–6 Weeks"
          lead="A structured 4-stage process. We get AI functioning inside your existing tools rapidly, with thorough quality checks at every milestone."
          stages={INTEGRATION_JOURNEY_STAGES}
          closingNote="4 STAGES · 1–12 WEEKS DEPENDING ON SCOPE · WEEKLY DEMOS THROUGHOUT"
        />

        {/* ── 6. INTEGRATION TYPES ─────────────────────────────────────────── */}
        <IndustriesGrid
          variant="cards"
          eyebrow="WHAT WE BUILD"
          headline="Six AI Integration Categories That Deliver Immediate ROI"
          lead="These six integration categories deliver the fastest payback for US businesses. We implement each category with custom prompt engineering and clean APIs."
          sectors={INTEGRATION_TYPES}
        />

        {/* ── 6.5. INTEGRATION ARCHITECTURE & CODE CONNECTIONS ──────────── */}
        <section className="bg-white py-14 md:py-20 border-t border-b border-fj-neutral-200">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#B23E13]">
              API & MIDDLEWARE ARCHITECTURE
            </p>
            <h2 className="fj-display mt-3.5 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-fj-ink">
              Enterprise AI middleware and secure API connectors
            </h2>
            <p className="mt-4 max-w-[760px] font-fj-body text-base leading-relaxed text-fj-neutral-600">
              We design production middleware connecting language models to your operational software.
              Our pipelines follow official{' '}
              <a
                href="https://platform.openai.com/docs/guides/function-calling"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 text-[#B23E13]"
              >
                OpenAI Function Calling APIs
              </a>{' '}
              and{' '}
              <a
                href="https://docs.anthropic.com/en/docs/build-with-claude/tool-use"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 text-[#B23E13]"
              >
                Anthropic Claude Tool Use
              </a>
              . Every connection enforces strict JSON schemas, role permissions, and zero data leakage.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col rounded-2xl border border-fj-neutral-200 bg-fj-cream p-5">
                <img
                  src="/images/us/services/hero-ai-integration.webp"
                  alt="Enterprise AI API integration connecting CRM and ERP databases"
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="h-48 w-full rounded-xl object-cover border border-fj-neutral-200 shadow-sm"
                />
                <h3 className="fj-display mt-4 text-lg font-bold text-fj-ink">CRM & ERP Data Sync</h3>
                <p className="mt-2 font-fj-body text-sm text-fj-neutral-600">
                  Bi-directional data pipelines synchronizing HubSpot, Salesforce, NetSuite, and QuickBooks with AI models.
                </p>
              </div>

              <div className="flex flex-col rounded-2xl border border-fj-neutral-200 bg-fj-cream p-5">
                <img
                  src="/images/us/services/hero-ai-workflow.webp"
                  alt="Automated AI workflow and asynchronous background processing queue"
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="h-48 w-full rounded-xl object-cover border border-fj-neutral-200 shadow-sm"
                />
                <h3 className="fj-display mt-4 text-lg font-bold text-fj-ink">Asynchronous Event Queues</h3>
                <p className="mt-2 font-fj-body text-sm text-fj-neutral-600">
                  High-throughput background jobs handling document processing, ticket routing, and automated email drafting.
                </p>
              </div>

              <div className="flex flex-col rounded-2xl border border-fj-neutral-200 bg-fj-cream p-5">
                <img
                  src="/images/us/services/hero-ai-agent-us.webp"
                  alt="Custom AI agent interface embedded directly into business software"
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="h-48 w-full rounded-xl object-cover border border-fj-neutral-200 shadow-sm"
                />
                <h3 className="fj-display mt-4 text-lg font-bold text-fj-ink">In-App Native Interfaces</h3>
                <p className="mt-2 font-fj-body text-sm text-fj-neutral-600">
                  Embedded chrome extensions, sidebar copilots, and modal assistants operating directly in your daily tools.
                </p>
              </div>
            </div>
          </div>
        </section>

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
          headline="FactoryJet vs. Traditional Agency vs. SaaS AI Add-Ons vs. In-House Dev"
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
            footnote="AI model API costs go directly to the provider. No FactoryJet platform fees after delivery."
          />
        </div>

        {/* ── 12. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="We connect AI to your real tools. Not to a polished demo."
          lead="We bring 12 years of production experience for US businesses. We understand legacy APIs, undocumented fields, and irregular data. We build integrations that work reliably in that reality."
          pillars={[
            {
              icon: '⚡',
              title: 'Prompt engineering that actually performs',
              body: 'A GPT-4o integration is only as good as the prompts behind it. Generic prompts give weak outputs your team will ignore. We invest heavily in prompt engineering. We build prompts that know your products, brand tone, and business rules. Every delivery includes a prompt library so you see how the AI is guided.',
            },
            {
              icon: '💡',
              title: 'We know your software stack',
              body: 'We have integrated AI into HubSpot, Shopify, Salesforce, Zendesk, QuickBooks, and custom web applications. We know the API quirks, rate limits, and webhook behaviors. We do not learn your stack on your dime. Instead, we bring seasoned experience directly to your build.',
            },
            {
              icon: '🔒',
              title: 'No vendor lock-in. You own everything.',
              body: 'We use no proprietary platforms and no recurring middleware fees. We deliver complete integration code, credentials, and full documentation. You also receive a prompt library you can edit directly. If you take work in-house later, you retain full ownership of every asset.',
            },
          ]}
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything You Need to Know Before Integrating AI into Your Software"
          lead="No jargon. No runaround. The questions we get on every strategy call, answered straight."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA ─────────────────────────────────────────────────── */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="READY TO ADD AI TO YOUR STACK"
            headline="Book a 30-Minute AI Integration Strategy Call"
            sub="We will audit your software stack and pinpoint high-value integration opportunities. You get a fixed-price estimate before committing to anything."
            primaryCta={{ label: 'Get a Quote', modal: true, region: 'us' }}
            secondaryCta={{ label: 'See All AI Services', href: '/services' }}
            objectionHandler="Most integrations pay for themselves within 60–90 days. Free call, fixed price, no hidden fees."
          />
        </div>

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

