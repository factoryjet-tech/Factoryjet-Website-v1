import type { Metadata } from 'next';
import Link from 'next/link';
import { usServiceAlternates } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import CityContextSection from '@/components/v2/CityContextSection';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import PricingTiers from '@/components/v2/PricingTiers';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import AiAgentRoiCalculator from '@/components/ai-agent/AiAgentRoiCalculator';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'AI Automation Agency USA for Small Business | FactoryJet',
  description:
    'AI automation agency for US small businesses. We automate lead follow-up, invoicing, support triage, and reporting in n8n and Make. Fixed-price delivery.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Automation Agency in the USA for Small Businesses | FactoryJet',
    description:
      'Connect your tools. Eliminate manual work. FactoryJet builds AI-powered workflow automation for US SMBs: fixed-price, milestone-paid, engineered for measurable outcomes.',
    url: 'https://factoryjet.com/services/ai-automation',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet: AI Automation Agency USA',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Agency in the USA for Small Businesses | FactoryJet',
    description:
      'FactoryJet automates the manual steps in your business with AI, built in n8n, Make, Zapier and HubSpot. Free automation audit. Fixed-price and milestone-paid.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-automation',
    languages: usServiceAlternates['ai-automation'],
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
const PAGE_MODIFIED = '2026-08-06';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-automation#webpage',
  url: 'https://factoryjet.com/services/ai-automation',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Automation Agency Services',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  serviceType: 'AI Workflow Automation',
  description:
    'FactoryJet is a US-focused AI automation agency that connects business tools, eliminates manual workflows, and builds AI-powered automation systems for small and medium businesses. Specializing in n8n, Make.com, Zapier, HubSpot, and custom LLM-powered automation.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Starter Automation',
      description: 'Single-workflow automation for one focused business process.',
    },
    {
      '@type': 'Offer',
      name: 'Growth Automation Platform',
      description: '3-5 interconnected automated workflows with AI decision layer and full tool integrations.',
    },
    {
      '@type': 'Offer',
      name: 'Enterprise Automation System',
      description: 'Multi-department automation platform with custom AI logic and compliance controls.',
    },
  ],
  
};

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below, so the two
 *  can never drift into showing a different path than the schema claims. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI Automation', url: 'https://factoryjet.com/services/ai-automation' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://factoryjet.com/services/ai-automation#breadcrumb',
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

const AUTOMATION_TYPES = [
  {
    name: 'Lead Nurturing & CRM',
    description:
      'Inquiries arrive and get enriched instantly. AI creates records in HubSpot or Salesforce and triggers follow-up sequences. Qualified leads book calls on your calendar. Your team controls all messaging rules.',
    example: 'Touches web forms, enrichment APIs, your CRM, and calendar apps. Everything follows your verified sequences.',
    linkLabel: 'See how it works',
    linkHref: '/contact',
  },
  {
    name: 'Invoice & Billing Automation',
    description:
      'Invoices arrive by email or upload. AI extracts vendors, totals, and line items. The system checks purchase orders and logs approved entries into QuickBooks or Xero. Exceptions route to staff immediately.',
    example: 'Reads PDFs and scanned receipts. Matches records against open orders and routes edge cases.',
    linkLabel: 'Get a free audit',
    linkHref: '/contact',
  },
  {
    name: 'Healthcare Intake & Scheduling',
    description:
      'Intake submissions trigger automated data parsing. AI extracts patient and insurance data securely. The workflow checks eligibility and updates schedules in Epic or athenahealth with full audit logs.',
    example: 'HIPAA compliant administrative automation for medical practices and specialty clinics.',
    linkLabel: 'See healthcare AI agents',
    linkHref: '/services/ai-agents-for-healthcare',
  },
  {
    name: 'Real Estate Lead & Tour Automation',
    description:
      'Buyer inquiries trigger instant qualification. AI syncs criteria to Follow Up Boss or kvCORE. The system schedules showings on agent calendars and launches local property alerts.',
    example: 'Cuts lead response times from hours to under sixty seconds across brokerage teams.',
    linkLabel: 'Explore real estate AI agents',
    linkHref: '/services/ai-agents-for-real-estate',
  },
  {
    name: 'Custom AI & LLM Model Integration',
    description:
      'Connect modern language models directly into your ERP, CRM, and internal databases. We build secure REST and webhook middleware with complete client code ownership.',
    example: 'Integrates custom intelligence into existing software without replacing your current stack.',
    linkLabel: 'Explore AI integration services',
    linkHref: '/services/ai-integration-services',
  },
  {
    name: 'HR & Employee Onboarding',
    description:
      'New hires trigger automated provisioning in your HRIS. IT accounts generate instantly, welcome emails launch, and onboarding checklists assign in Asana or Notion.',
    example: 'Automates account provisioning, welcome sequences, task assignments, and pulse check-ins.',
    linkLabel: 'Start a conversation',
    linkHref: '/contact',
  },
];

const AUTOMATION_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Automation Audit',
    description:
      'A free thirty-minute audit call. We identify your three biggest manual bottlenecks. We estimate hours recovered and project ROI before starting.',
  },
  {
    number: '02',
    title: 'Workflow Mapping',
    description:
      'We map every step, rule, input, and failure state. This clear blueprint guides the entire build. You approve the specification upfront.',
  },
  {
    number: '03',
    title: 'Build & Connect',
    description:
      'We build workflows in n8n, Make, or Zapier. We connect tools via standard APIs. We test all actions against real staging data.',
  },
  {
    number: '04',
    title: 'Test & Tune',
    description:
      'We stress-test against edge cases and messy real-world files. We tune prompt constraints until data parsing runs with high accuracy.',
  },
  {
    number: '05',
    title: 'Deploy & Hand Off',
    description:
      'We launch with live error monitoring in place. We deliver video walkthroughs and provide thirty days of post-launch engineering support.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Stats. All three were replaced on 2026-08-06 after fetch-verification failed
   on every one of the previous set:
     - "40% of US small business work hours ... per McKinsey": the cited McKinsey
       page contains no "40 percent" figure and never uses the words "small
       business". Read directly, 2026-08-06. Misattributed.
     - "$33B+ US automation-as-a-service market": Grand View Research sits behind
       a Cloudflare challenge and cannot be verified. Also global, not US.
     - "3x faster lead response, per HBR": that HBR article is paywalled and its
       public abstract does not contain the claim.
   The three below are quoted from the McKinsey page, read in full on 2026-08-06.
   Do not add a statistic here without opening the source and matching the wording.
───────────────────────────────────────────────────────────────────────────── */
/* ─────────────────────────────────────────────────────────────────────────────
   HowTo schema, generated from AUTOMATION_JOURNEY_STAGES, the same array the page
   renders. Rebuilt 2026-08-06: the previous version was hand-written, claimed a
   7-day delivery and named five stages that appear nowhere on the page, while the
   visible process says 3 days to 4 weeks and the FAQ says complex builds run 4 to
   8 weeks. That is the FAQ-schema drift bug in a different tag. Deriving it from
   the array is what stops it recurring. No totalTime is declared, because the
   honest answer depends on the build.
───────────────────────────────────────────────────────────────────────────── */
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet builds an AI automation',
  description:
    'The five stages FactoryJet works through to deliver a production AI automation, from the initial audit to hand-off.',
  step: AUTOMATION_JOURNEY_STAGES.map((stage, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: stage.title,
    text: stage.description,
  })),
};

const US_AUTOMATION_STATS = [
  {
    value: '60%',
    label: 'of occupations have at least one third of their activities open to automation, which is why we automate steps rather than whole jobs',
    sourceUrl: 'https://www.mckinsey.com/featured-insights/future-of-work/jobs-lost-jobs-gained-what-the-future-of-work-will-mean-for-jobs-skills-and-wages',
    sourceLabel: 'McKinsey',
  },
  {
    value: 'Under 5%',
    label: 'of occupations consist ENTIRELY of activities that can be fully automated, which is why a human stays in the loop by design rather than as a concession',
    sourceUrl: 'https://www.mckinsey.com/featured-insights/future-of-work/jobs-lost-jobs-gained-what-the-future-of-work-will-mean-for-jobs-skills-and-wages',
    sourceLabel: 'McKinsey',
  },
  {
    value: '15%',
    label: 'of current activities automated by 2030 is McKinsey\'s own midpoint scenario, in a range running from almost zero to 30 percent depending on adoption speed, cost, labour markets and regulation',
    sourceUrl: 'https://www.mckinsey.com/featured-insights/future-of-work/jobs-lost-jobs-gained-what-the-future-of-work-will-mean-for-jobs-skills-and-wages',
    sourceLabel: 'McKinsey',
  },
];

const COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'US Automation Agency' },
  { label: 'DIY (Zapier / Make)' },
  { label: 'Freelancer' },
] as const;

const COMPARISON_ROWS = [
  {
    feature: 'Pricing model.',
    values: ['Fixed-price, scoped upfront', 'Enterprise budgets', 'DIY: your time, forever', 'Hourly, variable'],
  },
  {
    feature: 'Delivery timeline.',
    values: ['3 days - 4 weeks', '4-12 weeks', 'Ongoing, never fully done', '2-6 weeks (unreliable)'],
  },
  {
    feature: 'AI decision layer (not just routing).',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
    ],
  },
  {
    feature: 'Custom logic for your exact process.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
    ],
  },
  {
    feature: 'No platform lock-in.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="yes" />,
    ],
  },
  {
    feature: 'Non-technical monitoring dashboard.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="diy" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
    ],
  },
  {
    feature: '30-day post-launch support.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="no" />,
    ],
  },
  {
    feature: 'Fixed-price contract.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="no" />,
      <CompareIcon key="diy" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
    ],
  },
  {
    feature: '12+ years of SMB workflow expertise.',
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
    priceRange: 'Scoped to your build',
    description:
      'One end-to-end automated workflow for your highest-impact manual process. Connects 2-3 tools, includes an AI decision layer where needed, and goes live in under 2 weeks.',
    features: [
      'Single workflow automation for lead nurturing, invoicing, or support.',
      'Connects 2-3 existing tools via API.',
      'AI classification or content generation layer where needed.',
      'Built in n8n, Make.com, or Zapier based on your stack.',
      'Error handling and edge case logic included.',
      '14-day post-launch support window.',
      'Recorded monitoring dashboard walkthrough.',
    ],
    cta: { label: 'Book an Audit', modal: true, region: 'us' },
  },
  {
    name: 'Growth',
    priceRange: 'Most common scope',
    description:
      'Three to five interconnected automated workflows with a shared AI layer, full CRM integration, and a monitoring dashboard. The most popular choice for US SMBs automating their core operations.',
    features: [
      '3-5 interconnected automated workflows.',
      'Full CRM integration for HubSpot, Salesforce, Pipedrive, or Zoho.',
      'AI decision layer across all workflows via Claude or GPT-4o.',
      'Custom monitoring dashboard with no code required to operate.',
      'Slack and email alert configuration.',
      'Team training session with full process documentation.',
      '30-day post-launch support window.',
      'Monthly retainer option for ongoing improvements.',
    ],
    cta: { label: 'Get a Custom Quote', modal: true, region: 'us' },
    popular: true,
  },
  {
    name: 'Enterprise',
    priceRange: 'Custom scope',
    description:
      'Multi-department automation platform with custom AI logic, compliance controls, and a dedicated engineering partner. For businesses where manual workflows are a company-wide problem.',
    features: [
      'Workflow automations fully scoped per project brief.',
      'Custom AI models trained on your internal data and terminology.',
      'Compliance-ready architecture for HIPAA, SOC 2, or financial services.',
      'Multi-tool orchestration across ERP, CRM, support desk, and e-commerce.',
      'Dedicated engineering point of contact.',
      'SLA-backed uptime and incident response.',
      '90-day post-launch support and iteration window.',
      'Quarterly automation roadmap review.',
    ],
    cta: { label: 'Schedule an Enterprise Call', modal: true, region: 'us' },
  },
] as const;

/* ─── FAQ ──────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES = [
  { key: 'what-is-automation', label: 'What Is AI Automation' },
  { key: 'scope', label: 'Services & Scope' },
  { key: 'choosing', label: 'Choosing an Automation Partner' },
  { key: 'process', label: 'Process & Timeline' },
  { key: 'pricing', label: 'Pricing & ROI' },
  { key: 'technical', label: 'Tools & Integrations' },
  { key: 'trust', label: 'Trust & Results' },
];

const FAQ_ITEMS = [

  /* ── What Is AI Automation ── */
  {
    category: 'what-is-automation',
    question: 'What is an AI automation agency?',
    answer:
      'An AI automation agency connects your existing business tools. We automate CRM, email, invoicing, and support workflows without manual input. Our team uses n8n, Make, and Zapier layered with modern language models. Your team sets the rules. The automation escalates edge cases to humans.',
  },
  {
    category: 'what-is-automation',
    question: 'How is AI automation different from AI agents?',
    answer:
      'AI automation connects software tools to run structured workflows. It follows clear triggers and rules. AI agents are autonomous programs that reason through unpredictable tasks. Most companies start with AI automation for quick returns. They add custom AI agents as their needs grow.',
  },
  {
    category: 'what-is-automation',
    question: 'What business workflows are best suited for AI automation?',
    answer:
      'The best candidates are frequent and rule-based. Top workflows include lead routing, order sync, and invoice matching. We also automate support ticket triage and weekly reporting. Automation moves data across systems cleanly. Your staff recovers hours every day for strategic client work.',
  },

  /* ── Process & Timeline ── */
  {
    category: 'process',
    question: 'What does the automation process look like from start to finish?',
    answer:
      'We work in five stages. First is a free audit call. Next, we map every input, rule, and edge case. Third, we build connectors in n8n or Make. Fourth, we test against messy real-world data. Finally, we deploy with monitoring and thirty days of post-launch support.',
  },
  {
    category: 'process',
    question: 'How long does it take to automate a workflow?',
    answer:
      'Simple automations connecting two tools go live in three to five business days. Workflows with AI decision layers take two to three weeks. Complex multi-department platforms take four to eight weeks. We provide a firm schedule after your initial audit.',
  },
  {
    category: 'process',
    question: 'Do I need to be technical to work with FactoryJet?',
    answer:
      'No. Our engineers build for business owners and operations leaders. You describe your current process in plain English. We build the automated pipeline. We deliver a visual dashboard so you can review activity and inspect logs without code.',
  },

  /* ── Pricing & ROI ── */
  {
    category: 'pricing',
    question: 'How much does AI automation cost for a small business?',
    answer:
      'FactoryJet delivers all automations on a fixed-price contract. Pricing depends on workflow count, tool APIs, and model complexity. Most clients pick our Growth tier for multi-tool operations. All fees are confirmed upfront with milestone payments.',
  },
  {
    category: 'pricing',
    question: 'What is the ROI on AI workflow automation?',
    answer:
      'ROI comes from recovered labor hours. Multiply weekly manual hours by staff hourly cost, then compare against build price. Most businesses recover their investment within two to four months. We calculate these numbers together during your free audit.',
  },
  {
    category: 'pricing',
    question: 'Are there ongoing costs after the automation is built?',
    answer:
      'You only pay standard subscription fees for tools like Make, Zapier, or self-hosted n8n. AI model API calls are billed directly at cost. FactoryJet adds no markups. We provide optional monthly retainers for ongoing optimization and updates.',
  },

  /* ── Tools & Integrations ── */
  {
    category: 'technical',
    question: 'Which automation tools does FactoryJet use?',
    answer:
      'Our primary platforms are n8n, Make, and Zapier. We integrate large language models from Anthropic and OpenAI for text extraction and classification. We connect directly with HubSpot, Salesforce, Pipedrive, and custom databases via REST APIs and webhooks.',
  },
  {
    category: 'technical',
    question: 'Which CRM, e-commerce, and business tools do you integrate with?',
    answer:
      'We integrate CRMs like HubSpot and Salesforce. We support Shopify, WooCommerce, and BigCommerce stores. We connect QuickBooks, Xero, Zendesk, Slack, Google Drive, and Airtable. Any platform with a REST API or webhook can be automated.',
  },
  {
    category: 'technical',
    question: 'What happens if I switch tools after the automation is built?',
    answer:
      'We design workflows with modular connectors. Swapping HubSpot for Salesforce or QuickBooks for Xero only requires updating the endpoint module. Core business logic remains intact. We document every interface so future changes happen quickly.',
  },

  /* ── Trust & Results ── */
  {
    category: 'trust',
    question: 'Is my business data safe in an automated workflow?',
    answer:
      'Yes. We use direct API credentials with least-privilege permissions. No credentials are stored in plain text. For regulated medical and financial teams, we deploy self-hosted n8n instances. Your data stays entirely within your private infrastructure.',
  },
  {
    category: 'trust',
    question: 'How is FactoryJet different from a traditional US automation agency?',
    answer:
      'We work on fixed pricing with milestone payments. There are no account manager layers inflating your budget. We start development in days rather than months. We build pragmatic solutions using proven tools rather than over-engineering simple workflows.',
  },
  {
    category: 'trust',
    question: 'Does FactoryJet offer ongoing support and monitoring after deployment?',
    answer:
      'Yes. Every build includes thirty days of post-launch warranty and monitoring. We configure Slack and email alerts for failed steps. We also offer monthly retainer plans to handle third-party API changes and build new workflow iterations.',
  },

  /* ── Choosing an Automation Partner ── */
  {
    category: 'choosing',
    question: 'Which AI automation agency should a US small business choose?',
    answer:
      'Choose an agency that audits your current workflows before pitching software. Ensure they work within your existing tools. Verify that you own all automation accounts and code. Finally, confirm they configure monitoring alerts for third-party API failures.',
  },
  {
    category: 'choosing',
    question: 'Should we hire an AI automation agency or build workflows in-house with Zapier or n8n?',
    answer:
      'Build in-house when automations are simple two-step triggers within familiar apps. Hire an agency when workflows cross multiple databases, handle sensitive data, or require complex error logic. Professional builds prevent silent breaks and high maintenance debt.',
  },
  {
    category: 'choosing',
    question: 'What should I ask an AI automation agency before hiring them?',
    answer:
      'Ask five questions. Which of our current tools will run this? Who owns the code and accounts? How do you handle third-party API breaks? Is pricing fixed or hourly? Can you share an example of a workflow failure and how you solved it?',
  },

  /* ── Services & Scope ── */
  {
    category: 'scope',
    question: 'What is included in AI automation agency services?',
    answer:
      'Our engagements include workflow audits, API integration, and custom AI decision logic. We build monitoring dashboards and error-recovery handlers. Every project includes staff training, comprehensive documentation, and thirty days of dedicated support.',
  },
  {
    category: 'scope',
    question: 'What does AI automation for a small business look like in practice?',
    answer:
      'It starts with targeted single workflows. For example, inbound inquiries are enriched and logged to your CRM in seconds. Invoices are parsed, matched against orders, and queued for approval. Automations run quietly in the background without staff intervention.',
  },
  {
    category: 'scope',
    question: 'We already use Zapier. Do we still need AI automation agency services?',
    answer:
      'Simple linear zaps work well for basic triggers. An agency is needed when steps require unstructured reasoning, document extraction, or complex branching. We optimize existing Zapier setups and migrate high-volume tasks to n8n to reduce monthly operational fees.',
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

export default function AIAutomationPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="ai-automation-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="ai-automation-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="ai-automation-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        id="speakable-schema-ai-automation"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://factoryjet.com/services/ai-automation#webpage",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", ".faq-answer", "[data-speakable]"]
          }
        }) }}
      />
      <script
        id="ai-automation-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader
        navLinks={[
          { label: 'Services', href: '/services' },
          { label: 'AI Automation', href: '/services/ai-automation' },
          { label: 'AI Agents', href: '/services/ai-agent-development' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Contact', modal: true, region: 'us' },
        ]}
        cta={{ label: 'Free Automation Audit', modal: true, region: 'us' }}
      />

      <main className="bg-fj-cream">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="us" source="us_services_ai_automation_hero" />}
          eyebrow="AI AUTOMATION AGENCY · USA"
          headline="The AI Automation Agency Built for US Small Businesses"
          lead="Copying data between tools, chasing invoices, following up on leads, writing the same report every Monday. Nobody planned for their team to spend the week on it, it just accumulated. FactoryJet connects your stack, automates the manual steps, and builds in AI decision-making where routing alone isn't enough. Fixed-price and milestone-paid."
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={[
            '500+ businesses automated',
            'Fixed price',
            'n8n · Make · Zapier · Custom AI',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#B23E13]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                ILLUSTRATIVE, NOT A CLIENT RESULT
              </p>
              <p className="mt-4 font-fj-display text-[1.75rem] font-medium leading-[1.15] tracking-[-0.025em] text-fj-ink">
                What the manual version looks like, and what replaces it
              </p>
              <ul className="mt-6 list-none space-y-4 p-0">
                {[
                  {
                    before: 'Sales rep manually enters lead into CRM, 8 min per lead',
                    after: 'Form submits → AI enriches → HubSpot record created → sequence triggered, 4 seconds',
                  },
                  {
                    before: 'AP team processes 60 invoices by hand, 12 hrs/week',
                    after: 'Invoice arrives → AI extracts data → matches PO → logs to QuickBooks, exceptions queued for a person',
                  },
                  {
                    before: 'Support team sorts 200 tickets manually each morning',
                    after: 'AI reads, classifies, drafts reply, routes to right agent, before inbox opens',
                  },
                ].map((row, i) => (
                  <li key={i} className="rounded-xl border border-fj-neutral-100 bg-fj-neutral-50 p-4">
                    <p className="font-fj-body text-[0.75rem] font-medium uppercase tracking-wide text-red-400">Before</p>
                    <p className="mt-1 font-fj-body text-[0.8125rem] leading-[1.5] text-fj-neutral-600">{row.before}</p>
                    <p className="mt-2 font-fj-body text-[0.75rem] font-medium uppercase tracking-wide text-[#B23E13]">After</p>
                    <p className="mt-1 font-fj-body text-[0.8125rem] leading-[1.5] text-fj-neutral-600">{row.after}</p>
                  </li>
                ))}
              </ul>
            </div>
          }
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across the US, UK, and UAE" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ businesses. 12 years of building. Real automation that ships."
        />

        {/* ── 4. WHAT IS AN AI AUTOMATION AGENCY ───────────────────────────── */}
        <ServiceExplanation
          eyebrow="AI AUTOMATION EXPLAINED"
          headline="What an AI Automation Agency Does, and Why It's Different from a Chatbot or a Zapier Freelancer"
          lead="An AI automation agency does not just build a simple chatbot. We map your manual workflows and connect your tools via API. We add an AI decision layer where routing alone is not enough. Your team focuses on high-value human work while automated pipelines run your daily operations."
          body={
            <>
              <ul className="flex list-none flex-wrap gap-2 p-0">
                {['n8n', 'Make.com', 'Zapier', 'HubSpot', 'Claude AI', 'GPT-4o', 'Salesforce', 'Shopify'].map((tool) => (
                  <li
                    key={tool}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#B23E13]"
                    style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                  >
                    {tool}
                  </li>
                ))}
              </ul>
              <p>
                A Zapier freelancer connects two tools and calls it automation. Traditional agencies charge enterprise fees and take six months. FactoryJet sits in the middle. We map your full workflow and handle edge cases that break basic setups. We add an AI reasoning layer using Claude and GPT-4o for steps that require reading, classifying, or generating content.
              </p>
              <div
                className="border-l-2 border-[#F05A28] pl-5 py-1"
                aria-hidden
              >
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  The difference between a Zapier zap and an AI automation is what happens when the input doesn&apos;t fit the pattern.
                </p>
              </div>
              <p>
                Basic automation breaks on edge cases. An invoice that arrives as a photo instead of a PDF. A support ticket written in Spanish. A lead form that has two email addresses. AI automation handles these because it can read and reason, not just match patterns. That&apos;s the layer we add, and it&apos;s why our automations work on real-world data, not just the clean examples you tested in staging.
              </p>
              <p>
                FactoryJet has been building software for US small businesses. We know what operational complexity looks like inside a 15-person company: the spreadsheet that five people update manually, the inbox that routes to whoever is least busy, the report that takes three hours to build every Friday. Those are exactly the workflows AI automation is designed to eliminate. We build for that reality, not for a startup pitch deck.
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
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  Our Automation Stack
                </p>
              </div>
              <ul className="list-none divide-y divide-fj-neutral-100 px-7">
                {[
                  { category: 'Orchestration', tools: 'n8n · Make.com · Zapier' },
                  { category: 'AI / LLMs', tools: 'Claude (Anthropic) · GPT-4o (OpenAI)' },
                  { category: 'CRM', tools: 'HubSpot · Salesforce · Pipedrive · Zoho' },
                  { category: 'E-Commerce', tools: 'Shopify · WooCommerce · BigCommerce' },
                  { category: 'Accounting', tools: 'QuickBooks · Xero · FreshBooks' },
                  { category: 'Support', tools: 'Zendesk · Intercom · Freshdesk' },
                  { category: 'Communication', tools: 'Slack · Gmail · Outlook · Twilio' },
                  { category: 'Storage', tools: 'Notion · Airtable · Google Drive · Box' },
                ].map((item) => (
                  <li key={item.category} className="flex items-center justify-between gap-4 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(240,90,40,0.50)]" aria-hidden="true" />
                      <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">{item.category}</p>
                    </div>
                    <p className="text-right font-fj-body text-[0.8125rem] text-fj-neutral-500">{item.tools}</p>
                  </li>
                ))}
              </ul>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full bg-[#F05A28]" aria-hidden="true" />
                <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">
                  If it has an API, we can automate it.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 5. THE PROBLEM (DARK) ─────────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE COST OF MANUAL WORK"
          headline="The manual hours are the cost, and most teams have never actually added them up."
          lead="Take one task. Count how often it runs in a week, how many minutes it takes, and what the person doing it costs per hour. That number is what the manual version is costing you, and it is usually the first time anyone has written it down. We do this exercise on the audit call with your figures, not a made-up industry average, because your answer and your competitor's will not be close."
          pillars={[
            {
              title: 'Your team is doing work software should do',
              body: 'Data entry between systems wastes staff capacity. Manual invoice matching and slow lead follow-up hurt growth. These tasks do not require human judgment. Modern automation software handles them faster and without errors. Your staff focuses on core operations.',
            },
            {
              title: 'Speed is a competitive advantage | and you\'re losing it',
              body: 'Fast response times win modern buyers. A competitor answering inquiries within one minute wins the deal. Twice-daily inbox checks cause lost revenue. Automating initial outreach keeps your company first in line.',
            },
            {
              title: 'US automation agencies are priced for enterprise budgets',
              body: 'Most enterprise agencies charge six-figure retainers for simple builds. They build on slow multi-month timelines. FactoryJet delivers fixed-price workflows in two to four weeks. You get high-level engineering tailored to your operational budget.',
            },
          ]}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Free Audit to Automated Workflow: 5 Structured Stages"
          lead="We don't start building until we understand your process completely. Every stage ends with a deliverable you review and approve, so nothing gets built that you didn't ask for."
          stages={AUTOMATION_JOURNEY_STAGES}
          closingNote="5 STAGES · 3 DAYS TO 4 WEEKS · FREE AUDIT BEFORE ANY COMMITMENT"
        />

        {/* ── 7. WHAT WE AUTOMATE ───────────────────────────────────────────── */}
        <IndustriesGrid
          variant="cards"
          eyebrow="WHAT WE AUTOMATE"
          headline="Six High-ROI Workflow Categories We Automate for US Small Businesses"
          lead="Every business has a different bottleneck. These are the six workflow categories that consistently deliver the highest return on automation investment for the SMBs we work with."
          sectors={AUTOMATION_TYPES}
        />

        {/* ── 8. US MARKET CONTEXT ─────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="THE US AUTOMATION MARKET"
          headline="Automation stopped being an enterprise-only decision"
          leadParagraphs={[
            "Automation stopped being an enterprise-only line item once tooling became accessible for single workflows. Small teams can now deploy targeted automation in days.",
            "McKinsey research shows that sixty percent of occupations have one third of activities suitable for automation. We automate mechanical steps while leaving human oversight on judgment calls.",
            "FactoryJet serves small and medium businesses across Austin, Miami, Denver, Nashville, Charlotte, and across the US. We deliver fast payback on lead response and invoice processing.",
          ]}
          stats={US_AUTOMATION_STATS}
        />

        {/* ── 8B. INTERACTIVE ROI CALCULATOR ──────────────────────────────── */}
        <section className="bg-[#FFF8F5] py-16 md:py-24 border-y border-[#E7DED6]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-sm font-semibold tracking-wider text-[#F05A28] uppercase font-fj-mono">
                Interactive ROI & Hours Saved Estimator
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-[#0F0F12] sm:text-4xl font-fj-display">
                Calculate Your Automation Return on Investment
              </h2>
              <p className="mt-4 text-lg text-[#333333] font-fj-body">
                Estimate how many manual labor hours your team can eliminate each week and the direct payroll savings delivered by custom automated workflows.
              </p>
            </div>
            <AiAgentRoiCalculator defaultWorkflow="erp" source="ai-automation" />
          </div>
        </section>

        {/* ── 9. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Traditional Agency vs. DIY Tools vs. Freelancer"
          lead="Not all automation options are equal. Here's what the decision actually looks like when you compare side by side, on price, capability, and what you're left with after the project ends."
          pullQuote={{
            stat: 'Fixed Price',
            caption: 'milestone-paid automation builds with full code ownership, same engineering depth, predictable from quote to launch.',
          }}
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
          footer="Compared on scope and on what you are left holding when the engagement ends, not on price. DIY looks cheapest until you count the staff time spent building and then maintaining the workflows."
        />

        {/* ── 9b. WHAT WE ACTUALLY CONNECT ──────────────────────────────────
            Added 2026-08-06. GSC (90 days to 2026-08-04) shows this page ranking
            position 4-6 for "ai automation agency usa", "ai automation agency in
            usa", "ai automation agencies in usa" and "ai automation services in
            usa", but the page never enumerated what an engagement touches. The
            head term "ai automation agency" (4,400/mo) is deliberately NOT
            targeted: its SERP is Reddit at #1 and its AI Overview cites YouTube
            six times out of ten, because the searchers are people wanting to
            START an automation agency, not hire one. Measured 2026-08-06,
            pipeline/research/dfs_aaa_serp.py.
        ─────────────────────────────────────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-semibold text-[#B23E13] uppercase tracking-widest mb-3">
              Scope, in plain terms
            </p>
            <h2 className="font-fj-display text-[2rem] font-medium leading-[1.15] tracking-[-0.025em] text-fj-ink mb-4">
              What an AI automation engagement in the US actually covers
            </h2>
            <p className="font-fj-body text-fj-neutral-600 max-w-[68ch] mb-10">
              Most agency pages describe outcomes. This section outlines scope. These criteria determine whether an automation handles real production data.
            </p>
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="font-fj-body text-[1.0625rem] font-semibold text-fj-ink mb-4">
                  In every build
                </h3>
                <ul className="space-y-2.5 font-fj-body text-[0.9375rem] leading-[1.6] text-fj-neutral-600">
                  <li>A written workflow map covering inputs, decisions, outputs and error states, signed off before anything is built.</li>
                  <li>API connections to existing systems, built against vendor REST or SOAP interfaces.</li>
                  <li>An AI decision layer only on steps needing reading, classifying, or generating.</li>
                  <li>An explicit boundary between autonomous actions and human review steps.</li>
                  <li>Failure alerting in Slack or email to stop silent breaks.</li>
                  <li>A complete audit trail on every action the workflow executes.</li>
                  <li>Stress-testing against real edge cases rather than clean sample data.</li>
                  <li>Readable documentation plus a recorded video dashboard walkthrough.</li>
                  <li>Full client ownership of all workflows, credentials, and code.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-fj-body text-[1.0625rem] font-semibold text-fj-ink mb-4">
                  Where we say no
                </h3>
                <ul className="space-y-2.5 font-fj-body text-[0.9375rem] leading-[1.6] text-fj-neutral-600">
                  <li>Screen-scraping systems of record. It breaks quietly and leaves no audit trail.</li>
                  <li>Automating unmapped processes. Map the workflow first, or you automate confusion.</li>
                  <li>Sending external emails or moving money without human approval gates.</li>
                  <li>Putting regulated customer data into models without written sign-off.</li>
                  <li>Quoting payback windows before inspecting real workflow logs.</li>
                  <li>Building secondary workflows before the first runs clean for two weeks.</li>
                  <li>Replacing staff when a broken process simply needs structural repair.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="TRANSPARENT PRICING"
            headline="Fixed-Price AI Automation: No Hourly Billing, No Scope Creep"
            lead="Every tier includes a fixed scope, a fixed price, and a delivery timeline we stand behind. No discovery retainer. No surprise invoices. No 'it depends' until after you've committed."
            tiers={PRICING_TIERS}
            footnote="Monthly tool subscription fees (Make.com, Zapier) and AI API costs are separate, we never mark these up. You own all workflow configurations and API connections."
          />
        </div>

        {/* ── 12. TESTIMONIALS ─────────────────────────────────────────────── */}
        <TestimonialsSection
          region="us"
          eyebrow="WHAT CLIENTS SAY"
          headline="Rated 4.9/5 on Google across 500+ projects."
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Every Question We Get on the Free Automation Audit Call, Answered Straight"
          lead="No jargon. No vendor-speak. Just clear answers to the questions every business owner asks before committing to automation."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* Cities We Serve, internal linking for SEO */}
        <section className="py-10 bg-[#FAFAF7]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-semibold text-[#B23E13] uppercase tracking-widest mb-3">Serving the US</p>
            <h2 className="text-2xl font-bold text-[#0F0F12] mb-6">AI Automation Services by City</h2>
            {/* Trailing slashes removed 2026-08-06: both hrefs 308-redirected, so every
                internal click and crawl was spending a hop it did not need to. */}
            <ul className="flex list-none flex-wrap gap-3 p-0">
              {[
                { city: 'Miami, FL', href: '/miami/ai-automation' },
                { city: 'Charlotte, NC', href: '/charlotte/ai-automation' },
              ].map(({ city, href }) => (
                <li key={href}>
                  <Link href={href} className="inline-block px-4 py-2 rounded-full border border-[#B23E13] text-[#B23E13] text-sm font-medium hover:bg-[#B23E13] hover:text-white transition-colors">
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 14. FINAL CTA ─────────────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="START WITH A FREE AUDIT"
          headline="Book an Automation Audit and Walk Away With a Roadmap"
          sub="In 30 minutes, we'll identify your 3 highest-value automation opportunities, estimate the hours you'll recover each week, and tell you exactly what it costs to build. No pitch. No pressure. Just a straight answer from an engineer who's built it before, for a business exactly like yours."
          primaryCta={{ label: 'Book Your Free Audit', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See AI Agent Services', href: '/services/ai-agent-development' }}
          objectionHandler="Fixed price. Free audit first. No commitment until you've seen the plan."
        />

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

