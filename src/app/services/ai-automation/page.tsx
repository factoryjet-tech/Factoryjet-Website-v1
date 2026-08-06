import type { Metadata } from 'next';
import Link from 'next/link';
import { usServiceAlternates } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
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

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'AI Automation Agency in the USA for Small Businesses | FactoryJet',
  description:
    'AI automation agency in the USA for small businesses. We connect the tools you already run and take the manual steps out of lead follow-up, invoicing, support triage and reporting. Built in n8n, Make and Zapier. Free automation audit.',
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
      description: '3–5 interconnected automated workflows with AI decision layer and full tool integrations.',
    },
    {
      '@type': 'Offer',
      name: 'Enterprise Automation System',
      description: 'Multi-department automation platform with custom AI logic and compliance controls.',
    },
  ],
  
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://factoryjet.com/services/ai-automation#breadcrumb',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'US Services', item: 'https://factoryjet.com/services' },
    { '@type': 'ListItem', position: 3, name: 'AI Automation', item: 'https://factoryjet.com/services/ai-automation' },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const AUTOMATION_TYPES = [
  {
    name: 'Lead Nurturing & CRM',
    description:
      'New inquiry arrives → AI enriches the contact → creates a HubSpot or Salesforce record → triggers a personalized follow-up sequence → books a call when the lead engages. The whole chain runs in seconds rather than whenever someone next opens the inbox, and the sequence rules stay yours to set.',
    example: 'Touches the web form, the enrichment provider, HubSpot or Salesforce, and the calendar. Nothing is sent to a lead without the sequence rules you approved.',
    linkLabel: 'See how it works',
    linkHref: '/contact',
  },
  {
    name: 'Invoice & Billing Automation',
    description:
      'Invoice email arrives → AI extracts vendor, amount, and line items → cross-checks against the purchase order → logs approved items to QuickBooks or Xero → routes exceptions for human review → sends payment reminders at defined intervals.',
    example: 'Reads PDF and photographed invoices, matches against the purchase order, posts to QuickBooks or Xero, and queues anything outside tolerance for a person.',
    linkLabel: 'Get a free audit',
    linkHref: '/contact',
  },
  {
    name: 'Customer Support Triage',
    description:
      'Support ticket arrives → AI reads the message, classifies intent (billing / technical / returns / general), extracts the core request, drafts a response suggestion, and routes to the right team member with full context, before anyone opens their inbox.',
    example: 'Works inside Zendesk, Freshdesk, Intercom or Gorgias. You set which intents it may answer alone and which it drafts for review.',
    linkLabel: 'See pricing',
    linkHref: '#pricing',
  },
  {
    name: 'Inventory & Reorder Automation',
    description:
      'Stock level drops below threshold → AI checks supplier lead time and current open POs → drafts a purchase order → sends to the approver via Slack or email → auto-submits on approval → updates inventory records on confirmation.',
    example: 'Watches stock levels in Shopify or the ERP, checks supplier lead time and open POs, and drafts the reorder for an approver rather than placing it.',
    linkLabel: 'Book a strategy call',
    linkHref: '/contact',
  },
  {
    name: 'Reporting & Analytics Automation',
    description:
      'Every Monday at 7am: AI pulls data from your CRM, ad platform, and e-commerce backend → cleans and aggregates it → writes a plain-English performance summary → flags anomalies → delivers to your inbox and Slack. No BI tool. No manual export.',
    example: 'Pulls from the CRM, the ad platform and the commerce backend, writes a plain-English summary, and flags what moved. No BI tool to learn.',
    linkLabel: 'Get a free audit',
    linkHref: '/contact',
  },
  {
    name: 'HR & Employee Onboarding',
    description:
      'New hire confirmed in your HRIS → IT accounts created automatically → welcome email sequence triggered → training tasks assigned in Notion or Asana → manager check-in calls scheduled → day-30 pulse survey sent. The coordinating is what goes away, not the judgement.',
    example: 'Triggers off the HRIS record: account provisioning, the welcome sequence, task assignment in Notion or Asana, and the day-30 check-in.',
    linkLabel: 'Start a conversation',
    linkHref: '/contact',
  },
];

const AUTOMATION_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Automation Audit',
    description:
      'A free 30-minute call. We map your 3 highest-value manual workflows, estimate the hours you\'ll recover, and size the ROI before any money changes hands. You leave with a clear picture of what to automate first.',
  },
  {
    number: '02',
    title: 'Workflow Mapping',
    description:
      'We document every step of your target process, inputs, decisions, outputs, edge cases, and error states. This becomes the spec your automation is built against. We get your sign-off before building a single connection.',
  },
  {
    number: '03',
    title: 'Build & Connect',
    description:
      'We build the automation in n8n, Make.com, or Zapier depending on your requirements, connect every tool via API, add the AI decision layer where needed, and run it against real data in a staging environment.',
  },
  {
    number: '04',
    title: 'Test & Tune',
    description:
      'We stress-test with your actual edge cases: the weird invoice formats, the partial form submissions, the support tickets that don\'t fit the pattern. We tune the AI classification until it handles your real data reliably, not just the clean examples.',
  },
  {
    number: '05',
    title: 'Deploy & Hand Off',
    description:
      'We go live with full monitoring in place, deliver a recorded walkthrough of your automation dashboard, and cover everything in a 30-day support window. Your automation, your data, your tools, we just connected them.',
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
    feature: 'Pricing model',
    values: ['Fixed-price, scoped upfront', 'Enterprise budgets', 'DIY: your time, forever', 'Hourly, variable'],
  },
  {
    feature: 'Delivery timeline',
    values: ['3 days – 4 weeks', '4–12 weeks', 'Ongoing, never fully done', '2–6 weeks (unreliable)'],
  },
  {
    feature: 'AI decision layer (not just routing)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
    ],
  },
  {
    feature: 'Custom logic for your exact process',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
    ],
  },
  {
    feature: 'No platform lock-in',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="yes" />,
    ],
  },
  {
    feature: 'Non-technical monitoring dashboard',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="diy" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
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
    feature: 'Fixed-price contract',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="no" />,
      <CompareIcon key="diy" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
    ],
  },
  {
    feature: '12+ years of SMB workflow expertise',
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
      'One end-to-end automated workflow for your highest-impact manual process. Connects 2–3 tools, includes an AI decision layer where needed, and goes live in under 2 weeks.',
    features: [
      'Single workflow automation (lead nurturing, invoicing, or support triage)',
      'Connects 2–3 existing tools via API',
      'AI classification or content generation layer (where applicable)',
      'Built in n8n, Make.com, or Zapier based on your stack',
      'Error handling and edge case logic included',
      '14-day post-launch support window',
      'Recorded monitoring dashboard walkthrough',
    ],
    cta: { label: 'Book an Audit', modal: true, region: 'us' },
  },
  {
    name: 'Growth',
    priceRange: 'Most common scope',
    description:
      'Three to five interconnected automated workflows with a shared AI layer, full CRM integration, and a monitoring dashboard. The most popular choice for US SMBs automating their core operations.',
    features: [
      '3–5 interconnected automated workflows',
      'Full CRM integration (HubSpot, Salesforce, Pipedrive, or Zoho)',
      'AI decision layer across all workflows (Claude or GPT-4o)',
      'Custom monitoring dashboard, no code required to operate',
      'Slack and email alert configuration',
      'Team training session + full process documentation',
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
      'Multi-department automation platform with custom AI logic, compliance controls, and a dedicated engineering partner. For businesses where manual workflows are a company-wide problem.',
    features: [
      'Workflow automations fully scoped per project brief',
      'Custom AI models trained on your internal data and terminology',
      'Compliance-ready architecture (HIPAA, SOC 2, or financial services)',
      'Multi-tool orchestration (ERP, CRM, support desk, e-commerce)',
      'Dedicated engineering point of contact',
      'SLA-backed uptime and incident response',
      '90-day post-launch support and iteration window',
      'Quarterly automation roadmap review',
    ],
    cta: { label: 'Schedule an Enterprise Call', modal: true, region: 'us' },
  },
] as const;

const INDUSTRIES = [
  {
    name: 'E-Commerce & Retail',
    description:
      'Automate order confirmation flows, inventory reorder triggers, abandoned cart recovery sequences, product review requests, and customer support triage, so your team manages exceptions, not volume.',
    example: 'Reads orders and stock straight out of Shopify or WooCommerce, and routes anything unusual to a person instead of guessing.',
    linkLabel: 'See e-commerce automation',
    linkHref: '/contact',
  },
  {
    name: 'Professional Services',
    description:
      'Automate client onboarding (contract → welcome sequence → project setup → kickoff scheduling), proposal generation from intake form data, retainer invoice creation, and weekly status report delivery.',
    example: 'Reads the signed contract, opens the project in Asana or Notion, and books the kickoff. The account manager approves, they do not assemble.',
  },
  {
    name: 'Healthcare & Wellness',
    description:
      'HIPAA-aware automation for patient intake, appointment reminders, follow-up sequences after visits, and insurance document processing, built with least-privilege data access and full audit trails.',
    example: 'Least-privilege access to the practice system, an audit trail on every read, and no PHI in a model prompt without your written sign-off.',
  },
  {
    name: 'Real Estate',
    description:
      'Automate lead qualification from Zillow and Realtor.com, listing description generation, CMA report delivery, showing confirmation sequences, and post-close client review requests.',
    example: 'Pulls the enquiry out of Zillow or Realtor.com, drafts the CMA, and queues the showing confirmation for the agent to send.',
  },
  {
    name: 'SaaS & Technology',
    description:
      'Automate trial-to-paid nurture sequences, churn signal alerts, usage-based in-app nudges, customer success check-in scheduling, and product feedback collection and routing.',
    example: 'Watches product usage for the signals you define, then nudges in-app or routes to customer success. You set every threshold.',
  },
  {
    name: 'Finance & Accounting',
    description:
      'Automate invoice processing and matching, expense report extraction, payroll data preparation, monthly reconciliation summaries, and regulatory filing reminders, with a full audit trail on every action.',
    example: 'Extracts and matches, then stops. Anything outside tolerance goes to a person, and every action is written to an audit trail.',
  },
];

/* ─── FAQ ──────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES = [
  { key: 'what-is-automation', label: 'What Is AI Automation' },
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
      'An AI automation agency connects your existing business tools: CRM, email, invoicing, support desk, inventory, and builds automated workflows that run without manual input. Unlike a traditional developer, an AI automation agency uses purpose-built tools like n8n, Make.com, and Zapier, layered with large language model AI for steps that require reading, classifying, or generating content. The result is a system that handles the repetitive part continuously, inside limits you set, and escalates anything outside them to a person rather than deciding alone.',
  },
  {
    category: 'what-is-automation',
    question: 'How is AI automation different from AI agents?',
    answer:
      'AI automation connects and orchestrates your existing tools to eliminate repetitive manual workflows, it is process-focused and built primarily on orchestration tools like n8n, Make.com, and Zapier, with an AI layer for decisions. AI agents are autonomous software programs that perceive unstructured inputs, reason across multiple steps, and take independent action, they are more custom-built and handle tasks that don\'t follow a predictable pattern. Most businesses start with AI automation (faster, lower cost, immediate ROI on specific processes) and add custom AI agents as complexity grows. FactoryJet builds both: the right recommendation comes from your audit, not a sales pitch.',
  },
  {
    category: 'what-is-automation',
    question: 'What business workflows are best suited for AI automation?',
    answer:
      'The best candidates share three traits: they happen frequently (daily or more), they follow a pattern (even if the inputs vary), and they currently require a human to move data between systems or make a simple decision. Top performers: lead routing and follow-up, invoice processing and matching, support ticket triage, inventory reorder triggers, weekly reporting, and employee onboarding. If your team does something more than a few times per day and thinks of it as "boring but necessary," AI automation can almost certainly handle it.',
  },

  /* ── Process & Timeline ── */
  {
    category: 'process',
    question: 'What does the automation process look like from start to finish?',
    answer:
      'Five stages: Automation Audit (free 30-minute call, we identify your top 3 opportunities and estimate ROI), Workflow Mapping (we document every step, input, decision, and edge case, you approve the spec before we build), Build & Connect (we build in n8n, Make, or Zapier and connect your tools via API), Test & Tune (we stress-test against your real data and edge cases, tune the AI until it handles them reliably), and Deploy & Hand Off (we go live, configure monitoring, deliver a dashboard walkthrough, and open your 30-day support window).',
  },
  {
    category: 'process',
    question: 'How long does it take to automate a workflow?',
    answer:
      'Simple single-step automations, connect two tools, trigger an action, can go live in 3–5 business days. Multi-step workflows with AI decision layers and CRM integrations typically take 2–3 weeks. Complex multi-department platforms with custom logic and compliance requirements run 4–8 weeks. We give you a firm timeline after the free audit, not before, because the process you want to automate drives the scope completely.',
  },
  {
    category: 'process',
    question: 'What do you need from me to get started?',
    answer:
      'Access credentials for the tools you want to connect (we use read/write API access, not your login password), a walkthrough of the current manual process (screen share or a Loom recording works), and clarity on what "done" looks like, what should the automation output, and how will you know it worked. We handle everything else: documentation, tool selection, build, testing, and deployment.',
  },
  {
    category: 'process',
    question: 'Do I need to be technical to work with FactoryJet?',
    answer:
      'No. Our process is designed around business owners and operations managers, not IT teams. You explain the workflow in plain language; we translate it into automation. The monitoring dashboard we deliver is built for non-technical operators: you can see what\'s running, review anything the AI flagged for human review, pause or restart workflows, and read a plain-English activity log, no code required.',
  },

  /* ── Pricing & ROI ── */
  {
    category: 'pricing',
    question: 'How much does AI automation cost for a small business?',
    answer:
      'FactoryJet\'s AI automation is fixed-price and scoped to your build: the main drivers are how many workflows you automate, the tool connections involved, and any AI decision layer. Most small businesses choose our Growth tier, covering several interconnected workflows with an AI decision layer, full CRM integration, a monitoring dashboard, and a 30-day support window. Enterprise platforms with multi-department scope are scoped separately. Fixed-price and milestone-paid: our engineering team has served US businesses for 12+ years with US-hour project management. You get a full quote up front after a free audit.',
  },
  {
    category: 'pricing',
    question: 'What is the ROI on AI workflow automation?',
    answer:
      'Labor hours recovered, and you should calculate it with your own numbers rather than ours. Count how many times a week the task runs, multiply by the minutes it takes and the fully-loaded hourly cost of whoever does it, then compare that to the build. We will do that arithmetic with you on the audit call using your figures. We deliberately do not publish a payback window, because it depends entirely on how manual the workflow is today and how clean your data is, and any number we printed here would be marketing rather than measurement.',
  },
  {
    category: 'pricing',
    question: 'Are there ongoing costs after the automation is built?',
    answer:
      'Two types of ongoing costs: tool subscription fees (n8n is self-hostable at near-zero cost; Make.com and Zapier charge monthly based on operation volume) and API usage costs for any AI steps (these go directly to model providers at cost). FactoryJet does not mark up tool or API costs. Optional: a monthly retainer for ongoing optimization, new workflow additions, or maintenance. Most clients self-manage after the 30-day support window.',
  },

  /* ── Tools & Integrations ── */
  {
    category: 'technical',
    question: 'Which automation tools does FactoryJet use?',
    answer:
      'Our primary stack: n8n (self-hosted, audit-ready, best for regulated industries or complex multi-step logic), Make.com (visual, powerful for branching scenarios and data transformation), and Zapier (fastest deployment, 6,000+ native integrations). We add AI decision-making using Claude (Anthropic) and GPT-4o (OpenAI) for classification, summarization, drafting, and extraction steps. CRM integrations run natively with HubSpot, Salesforce, Pipedrive, and Zoho. The tool we recommend depends on your workflow complexity, data privacy requirements, and existing stack, always decided after the audit.',
  },
  {
    category: 'technical',
    question: 'Which CRM, e-commerce, and business tools do you integrate with?',
    answer:
      'CRMs: HubSpot, Salesforce, Pipedrive, Zoho, Close.com. E-commerce: Shopify, WooCommerce, BigCommerce, Magento. Communication: Slack, Gmail, Outlook, Twilio. Accounting: QuickBooks, Xero, FreshBooks. Support: Zendesk, Intercom, Freshdesk, Help Scout. Project management: Notion, Airtable, Asana, Monday.com. If your platform has a REST API or webhook support, and almost all modern business software does, we can connect to it.',
  },
  {
    category: 'technical',
    question: 'What happens if I switch tools after the automation is built?',
    answer:
      'We architect automations with modular integration layers: the workflow logic is separated from the connector code. Swapping HubSpot for Salesforce, or QuickBooks for Xero, typically means updating the connector module, not rebuilding the automation from scratch. How long a swap takes depends on how different the two APIs are, and we will scope it before quoting rather than after. We document every integration point at delivery specifically so future changes are fast and predictable.',
  },

  /* ── Trust & Results ── */
  {
    category: 'trust',
    question: 'Is my business data safe in an automated workflow?',
    answer:
      'Yes. We use API-level integrations only, no screen scraping, no storing your credentials in plain text. Every automation enforces least-privilege data access: the workflow only touches the data it needs for the specific step. For regulated industries (healthcare, legal, finance) we use n8n self-hosted so your data never transits a third-party cloud. Full audit trails on every automation action are standard on all projects.',
  },
  {
    category: 'trust',
    question: 'How is FactoryJet different from a US AI automation agency?',
    answer:
      'Three differences: pricing model (fixed-price and milestone-paid, no account manager layers inflating your invoice), speed (we start building in days, not weeks, no procurement process, no discovery retainer, no waiting for a kickoff slot three months out), and SMB realism (500+ small business projects mean we\'ve seen every edge case in a 10-person company\'s data and we build around it). We also recommend the simplest tool that solves your problem, we won\'t oversell custom AI agents when a Zapier workflow would do the job faster and cheaper.',
  },
  {
    category: 'trust',
    question: 'Can you show me examples of automations you\'ve built?',
    answer:
      'Yes. On a strategy call we walk through builds relevant to your industry and workflow type, with the actual tools, triggers and failure cases on screen rather than a slide of numbers. We do not publish before-and-after percentages here, because a figure from someone else\'s ticket queue tells you nothing about yours and we would rather you judge the work. If we have not built in your specific industry, we will say so upfront.',
  },

  {
    category: 'what-is-automation',
    question: 'Can you automate my Shopify, WooCommerce, or e-commerce store operations?',
    answer:
      'Yes, e-commerce operations is one of the categories where the manual work is most obvious. Common Shopify and WooCommerce automations we build: inventory reorder alerts triggered when stock drops below threshold (notifies supplier and creates PO automatically); order fulfillment routing based on SKU and warehouse location; abandoned cart recovery sequences that adjust messaging based on cart value, customer lifetime value, and time elapsed; post-purchase review request automation with smart timing; return/refund processing automation that handles standard cases without human review; and supplier invoice reconciliation against Shopify order data. Each one reads from Shopify or WooCommerce directly, and each has an approval step you control rather than firing blind.',
  },
  {
    category: 'technical',
    question: 'Can FactoryJet build AI automations that work alongside n8n, Make, or Zapier?',
    answer:
      'Yes, FactoryJet works across all major automation platforms. We build native n8n workflows for businesses that want on-premise or self-hosted automation (n8n is our preferred platform for complex multi-step workflows, it\'s more powerful than Zapier and far cheaper at scale). We build Make (Integromat) scenarios for businesses that prefer a visual canvas. We extend existing Zapier workflows with AI steps via OpenAI and Anthropic API calls. And we build fully custom automation agents in Python or Node.js for workflows that require logic too complex for visual builders. If you have an existing Make or Zapier stack, we can audit it, identify bottlenecks, and either optimize in-place or migrate to n8n to reduce per-task costs.',
  },
  {
    category: 'what-is-automation',
    question: 'How do I know if my business process is a good candidate for AI automation?',
    answer:
      'A process is a strong automation candidate when it has four characteristics: it\'s repetitive (done more than 10 times per week), rule-based (the decision logic can be written down as \'if X then Y\'), data-driven (it involves moving, transforming, or acting on data), and currently done by a human who\'d rather be doing something else. Strong candidates: invoice processing, lead routing, customer support tier-1 responses, report generation, social media scheduling, CRM data enrichment, and order processing. Weak candidates: strategic decisions, creative judgment calls, relationship-building conversations, and novel situations requiring human context. On a discovery call, FactoryJet maps your top 10 workflows and identifies the 2–3 with the highest automation ROI.',
  },
  {
    category: 'trust',
    question: 'Does FactoryJet offer ongoing AI automation support and monitoring after deployment?',
    answer:
      'Yes, automation monitoring is critical because integrations break when third-party APIs change their schemas or rate limits. Every automation FactoryJet builds includes: error handling and alerting (Slack or email notifications when a workflow fails), 30 days of post-deployment support to catch edge cases, and full documentation so your team understands what each workflow does. Beyond that, FactoryJet offers optional automation retainer plans: workflow monitoring, API update response within 24 hours, monthly performance reports (tasks processed, time saved, error rates), and ongoing optimization work each month. Unmonitored automations silently fail, FactoryJet retainer clients know about failures before their customers do.',
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
          "name": "AI Automation Agency in the USA for Small Businesses | FactoryJet",
          "url": "https://factoryjet.com/services/ai-automation",
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
          lead="An AI automation agency doesn't build you a chatbot and call it done. It maps your manual workflows, connects your tools via API, adds an AI decision layer where routing alone isn't smart enough, and hands you a system that runs your operations while your team focuses on the work that actually needs a human."
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
                A Zapier freelancer connects two tools and calls it automation. A US automation agency charges enterprise rates and takes six months. FactoryJet sits in the middle, and builds above both. We map your full workflow, handle the edge cases that break simple automations, and add an AI layer (Claude, GPT-4o) for the steps that require reading, classifying, or generating content rather than just routing a signal.
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
              body: 'Data entry between systems. Manual invoice matching. Lead follow-up that depends on someone remembering to check their inbox. Support ticket sorting. Weekly report building. None of this requires human judgment, it requires a human to do something a computer could do faster and without errors. Every hour your team spends on it is an hour they\'re not spending on the work that actually grows your business.',
            },
            {
              title: 'Speed is a competitive advantage | and you\'re losing it',
              body: 'Speed of response is the part of inbound sales most teams lose without noticing. If a competitor answers an enquiry in under a minute and your team checks the inbox twice a day, they are in conversations you never saw. We are not going to quote you a percentage on this, because the honest version is simpler: time your own current response, then decide whether it is fast enough.',
            },
            {
              title: 'US automation agencies are priced for enterprise budgets',
              body: 'The average US AI automation agency charges enterprise rates for a mid-scope automation project, on a timeline of months. That price point was designed for companies with 100+ employees and a six-figure software budget. FactoryJet\'s Growth tier delivers the same engineering quality, several interconnected workflows with AI decision-making, at fixed-price, in 2–4 weeks. We built for your budget, not theirs.',
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
            "Automation stopped being an enterprise-only line item once the tooling got cheap enough to run one workflow at a time. That is the shift worth noticing: it is no longer a platform decision made once a decade, it is a per-process decision a small team can make this quarter.",
            "McKinsey's read is that in about 60 percent of occupations at least a third of the constituent activities could be automated, while fewer than 5 percent of occupations could be automated end to end. Both halves matter here. There is a lot of manual work to remove, and almost none of it is a whole job, which is exactly why we automate steps and leave a person on the decisions.",
            "FactoryJet has served small and medium businesses across Austin, Miami, Denver, Nashville, Portland, Charlotte, Raleigh, Tampa, and across the US. We understand the operational reality of a business your size, and we know exactly where automation delivers the fastest payback: lead response speed, invoice processing, and support ticket volume.",
          ]}
          stats={US_AUTOMATION_STATS}
        />

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
              Most agency pages describe outcomes. This one describes scope, because scope is what you are
              buying and it is the thing that decides whether the automation survives contact with your real
              data. Every item below is either in a build or it is not, and we mark which on the audit call.
            </p>
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="font-fj-body text-[1.0625rem] font-semibold text-fj-ink mb-4">
                  In every build
                </h3>
                <ul className="space-y-2.5 font-fj-body text-[0.9375rem] leading-[1.6] text-fj-neutral-600">
                  <li>A written workflow map covering inputs, decisions, outputs and the error states, signed off before anything is built</li>
                  <li>API connections to the systems that already hold the data, built against the vendor REST or SOAP interface</li>
                  <li>An AI decision layer only on the steps that need reading, classifying or generating, never on steps a rule handles better</li>
                  <li>An explicit list of what the automation may do on its own and what it must hand to a person</li>
                  <li>Failure alerting into Slack or email, because the dangerous failure mode is the silent one</li>
                  <li>An audit trail on every action the automation takes</li>
                  <li>Testing against your real edge cases, not clean sample data</li>
                  <li>Documentation your team can read, plus a recorded walkthrough</li>
                  <li>Full ownership of the workflows and the code when the engagement ends</li>
                </ul>
              </div>
              <div>
                <h3 className="font-fj-body text-[1.0625rem] font-semibold text-fj-ink mb-4">
                  Where we say no
                </h3>
                <ul className="space-y-2.5 font-fj-body text-[0.9375rem] leading-[1.6] text-fj-neutral-600">
                  <li>Screen-scraping a system of record. It breaks quietly and leaves nothing to audit</li>
                  <li>Automating a process nobody has written down yet. Map it first, or you automate the confusion</li>
                  <li>Letting an automation send external email or move money without an approval step</li>
                  <li>Putting regulated data into a model prompt without your written sign-off</li>
                  <li>Promising a payback window before we have seen how manual and how messy the workflow is</li>
                  <li>Building the second and third workflow before the first one has run clean for a fortnight</li>
                  <li>Replacing a person when the honest answer is that the process needs fixing, not automating</li>
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

