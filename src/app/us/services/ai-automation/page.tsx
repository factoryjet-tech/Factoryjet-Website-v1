import type { Metadata } from 'next';
import Script from 'next/script';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
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
  title: 'AI Automation Agency for US Small Businesses | FactoryJet',
  description:
    'FactoryJet is a US-focused AI automation agency that connects your tools, eliminates manual workflows, and saves 20+ hours per week — starting at $2,500. n8n, Make, Zapier, HubSpot, and custom AI. Free automation audit.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Automation Agency for US Small Businesses | FactoryJet',
    description:
      'Connect your tools. Eliminate manual work. FactoryJet builds AI-powered workflow automation for US SMBs — 60–70% cheaper than a US automation agency.',
    url: 'https://factoryjet.com/us/services/ai-automation',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet — AI Automation Agency USA',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Agency for US Small Businesses | FactoryJet',
    description:
      'Save 20+ hours/week. FactoryJet automates your business workflows with AI — n8n, Make, Zapier, HubSpot. Free audit. 60–70% cheaper than US agencies.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/ai-automation',
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
   JSON-LD Schema
───────────────────────────────────────────────────────────────────────────── */

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an AI automation agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI automation agency connects your existing business tools — CRM, email, invoicing, support desk, inventory — and builds automated workflows that run without manual input. Unlike a traditional software developer, an AI automation agency uses modern tools like n8n, Make.com, and Zapier, layered with large language model AI, to handle decision-making steps that rule-based automation alone cannot. The result is a system that reads, decides, and acts across your stack — 24/7, without a human in the loop.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is AI automation different from AI agents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI automation connects and orchestrates your existing tools to eliminate repetitive manual workflows — it is process-focused and built on tools like n8n, Make.com, and Zapier with an AI decision layer. AI agents are autonomous software programs that perceive inputs, reason about them, and take multi-step actions independently — they are typically more custom-built and handle more complex, unstructured tasks. Most businesses start with AI automation (faster, lower cost, immediate ROI) and layer in custom AI agents as their needs grow. FactoryJet builds both.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does AI automation cost for a small business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet\'s AI automation services start at $2,500 for a single-workflow automation (one process, one set of tool connections). Most small businesses choose the Growth tier at $8,000, which covers 3–5 interconnected workflows with an AI decision layer, full tool integrations, and a 30-day support window. Enterprise automation platforms with multi-department scope start at $20,000. All prices are 60–70% below comparable US automation agencies — our engineering team is India-based with 25+ years serving US businesses.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which tools does FactoryJet use for AI workflow automation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our core automation stack includes n8n (self-hosted, audit-ready workflow automation), Make.com (visual scenario builder for complex multi-step processes), and Zapier (rapid-deployment integrations across 6,000+ apps). We layer AI decision-making using Claude (Anthropic) and GPT-4o (OpenAI) for steps that require reading, classifying, or generating content. For CRM-centric automation we work natively with HubSpot, Salesforce, Pipedrive, and Zoho. The right tool depends on your data privacy requirements, workflow complexity, and existing stack — we recommend after a free audit, not before.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to automate a business workflow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Simple single-step automations (connect two tools, trigger an action) can go live in 3–5 business days. Multi-step workflows with AI decision layers and CRM integrations typically take 2–3 weeks. Complex multi-department automation platforms with custom logic and compliance requirements run 4–8 weeks. We scope every project after a free 30-minute audit so you get a firm timeline before we start — not after.',
      },
    },
    {
      '@type': 'Question',
      name: 'What business workflows can you automate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The highest-ROI workflows we automate for US small businesses: lead nurturing and CRM data entry (new inquiry → enriched contact → HubSpot record → follow-up sequence), invoice and billing (email attachment → extract data → log to QuickBooks → notify AP → send payment reminder), customer support triage (ticket arrives → AI classifies intent → routes to correct team → drafts response suggestion), inventory reorder (stock drops below threshold → AI checks supplier lead time → drafts PO → sends for approval), reporting (pull data from 3+ sources → clean and aggregate → write plain-English summary → send to Slack every Monday), and HR onboarding (new hire confirmed → create accounts → send welcome sequence → assign training tasks → schedule check-ins).',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a technical team to manage automated workflows after launch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. We build every automation with a non-technical operator in mind. You get a simple dashboard to monitor what\'s running, review flagged items, and pause or restart workflows without touching code. We also deliver a recorded walkthrough specific to your automation setup. If a connected platform changes its API or you need to add a new step, you contact us and we handle it — that\'s what the 30-day support window is for.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the ROI on AI workflow automation for a small business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most direct return is labor hours recovered. A typical SMB running 3–5 automated workflows saves 15–25 staff hours per week. At a fully-loaded cost of $35/hour, that\'s $27,000–$45,000 per year in recovered productivity — from an $8,000 Growth automation package. Secondary ROI comes from speed: automated lead follow-up within 60 seconds vs. hours increases close rates by 20–35%. Most clients see full payback within 8–14 weeks of launch.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is FactoryJet different from a US AI automation agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three differences: price (60–70% cheaper — India-based engineers serving US businesses since 1999), speed (no account manager layers between your brief and the engineer building it — we start in days, not weeks), and SMB realism (500+ small business projects mean we know where automation actually breaks in a 10-person company and build around it). We also don\'t lock you into proprietary platforms — every automation we build runs on tools you own or can self-manage.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I switch CRM or change tools after automation is set up?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We build automation with modular integration layers — the workflow logic is separated from the connector code. Swapping HubSpot for Salesforce, or Quickbooks for Xero, typically means updating the connector module, not rebuilding the automation from scratch. We document all integration points at delivery so future changes are fast and predictable. Most tool swaps take 1–3 days of engineering work, not weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you automate workflows that involve AI decision-making — not just routing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — this is where our approach differs from a standard Zapier consultant. We layer large language model AI (Claude, GPT-4o) into workflow steps that require reading, classifying, summarizing, or generating content. Examples: an AI that reads an inbound email, classifies its intent (support vs. sales vs. complaint), extracts the key request, drafts a response, and routes to the right team — all before a human sees it. Or an AI that reads a vendor invoice PDF, extracts line items, checks them against a purchase order, flags discrepancies, and logs the approved items to your accounting system.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Automation Agency Services',
  provider: {
    '@type': 'Organization',
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
      price: '2500',
      priceCurrency: 'USD',
      description: 'Single-workflow automation for one focused business process.',
    },
    {
      '@type': 'Offer',
      name: 'Growth Automation Platform',
      price: '8000',
      priceCurrency: 'USD',
      description: '3–5 interconnected automated workflows with AI decision layer and full tool integrations.',
    },
    {
      '@type': 'Offer',
      name: 'Enterprise Automation System',
      price: '20000',
      priceCurrency: 'USD',
      description: 'Multi-department automation platform with custom AI logic and compliance controls.',
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const AUTOMATION_TYPES = [
  {
    name: 'Lead Nurturing & CRM',
    description:
      'New inquiry arrives → AI enriches the contact → creates a HubSpot or Salesforce record → triggers a personalized follow-up sequence → books a call when the lead engages. Every step runs in under 60 seconds, every time, with no manual input.',
    example: 'Clients report 20–35% more qualified pipeline within 45 days of go-live.',
    linkLabel: 'See how it works',
    linkHref: '/contact',
  },
  {
    name: 'Invoice & Billing Automation',
    description:
      'Invoice email arrives → AI extracts vendor, amount, and line items → cross-checks against the purchase order → logs approved items to QuickBooks or Xero → routes exceptions for human review → sends payment reminders at defined intervals.',
    example: 'AP teams recover 8–12 hours per week from manual invoice processing.',
    linkLabel: 'Get a free audit',
    linkHref: '/contact',
  },
  {
    name: 'Customer Support Triage',
    description:
      'Support ticket arrives → AI reads the message, classifies intent (billing / technical / returns / general), extracts the core request, drafts a response suggestion, and routes to the right team member with full context — before anyone opens their inbox.',
    example: '60–75% of tier-1 tickets handled without human intervention.',
    linkLabel: 'See pricing',
    linkHref: '#pricing',
  },
  {
    name: 'Inventory & Reorder Automation',
    description:
      'Stock level drops below threshold → AI checks supplier lead time and current open POs → drafts a purchase order → sends to the approver via Slack or email → auto-submits on approval → updates inventory records on confirmation.',
    example: 'E-commerce brands eliminate stockouts that were costing 8–15% of monthly revenue.',
    linkLabel: 'Book a strategy call',
    linkHref: '/contact',
  },
  {
    name: 'Reporting & Analytics Automation',
    description:
      'Every Monday at 7am: AI pulls data from your CRM, ad platform, and e-commerce backend → cleans and aggregates it → writes a plain-English performance summary → flags anomalies → delivers to your inbox and Slack. No BI tool. No manual export.',
    example: 'Business owners recover 6–10 hours per week from manual reporting.',
    linkLabel: 'Get a free audit',
    linkHref: '/contact',
  },
  {
    name: 'HR & Employee Onboarding',
    description:
      'New hire confirmed in your HRIS → IT accounts created automatically → welcome email sequence triggered → training tasks assigned in Notion or Asana → manager check-in calls scheduled → day-30 pulse survey sent. Zero manual coordination.',
    example: 'HR teams reduce onboarding admin from 6 hours per hire to under 30 minutes.',
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
      'We document every step of your target process — inputs, decisions, outputs, edge cases, and error states. This becomes the spec your automation is built against. We get your sign-off before building a single connection.',
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
      'We stress-test with your actual edge cases — the weird invoice formats, the partial form submissions, the support tickets that don\'t fit the pattern. We tune the AI classification until it handles your real data reliably, not just the clean examples.',
  },
  {
    number: '05',
    title: 'Deploy & Hand Off',
    description:
      'We go live with full monitoring in place, deliver a recorded walkthrough of your automation dashboard, and cover everything in a 30-day support window. Your automation, your data, your tools — we just connected them.',
  },
];

const US_AUTOMATION_STATS = [
  {
    value: '$33B+',
    label: 'projected US automation-as-a-service market by 2030, up from $10B in 2025',
    sourceUrl: 'https://www.grandviewresearch.com/industry-analysis/automation-as-a-service-market',
    sourceLabel: 'Grand View Research',
  },
  {
    value: '40%',
    label: 'of US small business work hours spent on tasks that could be automated, per McKinsey',
    sourceUrl: 'https://www.mckinsey.com/featured-insights/future-of-work/jobs-lost-jobs-gained-what-the-future-of-work-will-mean-for-jobs-skills-and-wages',
    sourceLabel: 'McKinsey Global Institute',
  },
  {
    value: '3×',
    label: 'faster lead response with automated follow-up vs. manual — the single biggest driver of close rates',
    sourceUrl: 'https://hbr.org/2011/03/the-short-life-of-online-sales-leads',
    sourceLabel: 'Harvard Business Review',
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
    feature: 'Starting price',
    values: ['$2,500', '$10,000–$30,000', '$0 + your time (forever)', '$3,000–$8,000'],
  },
  {
    feature: 'Delivery timeline',
    values: ['3 days – 4 weeks', '4–12 weeks', 'Ongoing — never fully done', '2–6 weeks (unreliable)'],
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
    feature: '25+ years of SMB workflow expertise',
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
    priceRange: 'From $2,500',
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
    cta: { label: 'Book a Free Audit', href: '/contact' },
  },
  {
    name: 'Growth',
    priceRange: 'From $8,000',
    description:
      'Three to five interconnected automated workflows with a shared AI layer, full CRM integration, and a monitoring dashboard. The most popular choice for US SMBs automating their core operations.',
    features: [
      '3–5 interconnected automated workflows',
      'Full CRM integration (HubSpot, Salesforce, Pipedrive, or Zoho)',
      'AI decision layer across all workflows (Claude or GPT-4o)',
      'Custom monitoring dashboard — no code required to operate',
      'Slack and email alert configuration',
      'Team training session + full process documentation',
      '30-day post-launch support window',
      'Monthly retainer option for ongoing improvements',
    ],
    cta: { label: 'Get a Custom Quote', href: '/contact' },
    popular: true,
  },
  {
    name: 'Enterprise',
    priceRange: 'From $20,000',
    description:
      'Multi-department automation platform with custom AI logic, compliance controls, and a dedicated engineering partner. For businesses where manual workflows are a company-wide problem.',
    features: [
      'Unlimited workflow automations across departments',
      'Custom AI models trained on your internal data and terminology',
      'Compliance-ready architecture (HIPAA, SOC 2, or financial services)',
      'Multi-tool orchestration (ERP, CRM, support desk, e-commerce)',
      'Dedicated engineering point of contact',
      'SLA-backed uptime and incident response',
      '90-day post-launch support and iteration window',
      'Quarterly automation roadmap review',
    ],
    cta: { label: 'Schedule an Enterprise Call', href: '/contact' },
  },
] as const;

const INDUSTRIES = [
  {
    name: 'E-Commerce & Retail',
    description:
      'Automate order confirmation flows, inventory reorder triggers, abandoned cart recovery sequences, product review requests, and customer support triage — so your team manages exceptions, not volume.',
    example: 'One Shopify brand cut 18 manual hours per week from operations with 4 automations.',
    linkLabel: 'See e-commerce automation',
    linkHref: '/contact',
  },
  {
    name: 'Professional Services',
    description:
      'Automate client onboarding (contract → welcome sequence → project setup → kickoff scheduling), proposal generation from intake form data, retainer invoice creation, and weekly status report delivery.',
    example: 'Agencies reclaim 10–15 hours per week per account manager from admin tasks.',
  },
  {
    name: 'Healthcare & Wellness',
    description:
      'HIPAA-aware automation for patient intake, appointment reminders, follow-up sequences after visits, and insurance document processing — built with least-privilege data access and full audit trails.',
    example: 'Practices reduce front-desk admin time by 5–8 hours per provider per week.',
  },
  {
    name: 'Real Estate',
    description:
      'Automate lead qualification from Zillow and Realtor.com, listing description generation, CMA report delivery, showing confirmation sequences, and post-close client review requests.',
    example: 'Teams report 30% more follow-ups completed per agent per week.',
  },
  {
    name: 'SaaS & Technology',
    description:
      'Automate trial-to-paid nurture sequences, churn signal alerts, usage-based in-app nudges, customer success check-in scheduling, and product feedback collection and routing.',
    example: 'SaaS companies see 15–22% improvement in trial conversion rates.',
  },
  {
    name: 'Finance & Accounting',
    description:
      'Automate invoice processing and matching, expense report extraction, payroll data preparation, monthly reconciliation summaries, and regulatory filing reminders — with a full audit trail on every action.',
    example: 'Finance teams eliminate 12–20 hours per month of manual data entry.',
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
      'An AI automation agency connects your existing business tools — CRM, email, invoicing, support desk, inventory — and builds automated workflows that run without manual input. Unlike a traditional developer, an AI automation agency uses purpose-built tools like n8n, Make.com, and Zapier, layered with large language model AI for steps that require reading, classifying, or generating content. The result is a system that handles your repetitive processes 24/7, without a human in the loop for the routine decisions.',
  },
  {
    category: 'what-is-automation',
    question: 'How is AI automation different from AI agents?',
    answer:
      'AI automation connects and orchestrates your existing tools to eliminate repetitive manual workflows — it is process-focused and built primarily on orchestration tools like n8n, Make.com, and Zapier, with an AI layer for decisions. AI agents are autonomous software programs that perceive unstructured inputs, reason across multiple steps, and take independent action — they are more custom-built and handle tasks that don\'t follow a predictable pattern. Most businesses start with AI automation (faster, lower cost, immediate ROI on specific processes) and add custom AI agents as complexity grows. FactoryJet builds both — the right recommendation comes from your audit, not a sales pitch.',
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
      'Five stages: Automation Audit (free 30-minute call, we identify your top 3 opportunities and estimate ROI), Workflow Mapping (we document every step, input, decision, and edge case — you approve the spec before we build), Build & Connect (we build in n8n, Make, or Zapier and connect your tools via API), Test & Tune (we stress-test against your real data and edge cases, tune the AI until it handles them reliably), and Deploy & Hand Off (we go live, configure monitoring, deliver a dashboard walkthrough, and open your 30-day support window).',
  },
  {
    category: 'process',
    question: 'How long does it take to automate a workflow?',
    answer:
      'Simple single-step automations — connect two tools, trigger an action — can go live in 3–5 business days. Multi-step workflows with AI decision layers and CRM integrations typically take 2–3 weeks. Complex multi-department platforms with custom logic and compliance requirements run 4–8 weeks. We give you a firm timeline after the free audit, not before, because the process you want to automate drives the scope completely.',
  },
  {
    category: 'process',
    question: 'What do you need from me to get started?',
    answer:
      'Access credentials for the tools you want to connect (we use read/write API access, not your login password), a walkthrough of the current manual process (screen share or a Loom recording works), and clarity on what "done" looks like — what should the automation output, and how will you know it worked. We handle everything else: documentation, tool selection, build, testing, and deployment.',
  },
  {
    category: 'process',
    question: 'Do I need to be technical to work with FactoryJet?',
    answer:
      'No. Our process is designed around business owners and operations managers, not IT teams. You explain the workflow in plain language; we translate it into automation. The monitoring dashboard we deliver is built for non-technical operators: you can see what\'s running, review anything the AI flagged for human review, pause or restart workflows, and read a plain-English activity log — no code required.',
  },

  /* ── Pricing & ROI ── */
  {
    category: 'pricing',
    question: 'How much does AI automation cost for a small business?',
    answer:
      'FactoryJet\'s AI automation starts at $2,500 for a single-workflow automation. Most small businesses choose the Growth tier at $8,000, which covers 3–5 interconnected workflows with an AI decision layer, full CRM integration, a monitoring dashboard, and a 30-day support window. Enterprise platforms with multi-department scope start at $20,000. All prices are 60–70% below comparable US automation agencies — our India-based engineering team has served US businesses for 25+ years.',
  },
  {
    category: 'pricing',
    question: 'What is the ROI on AI workflow automation?',
    answer:
      'The most direct return is labor hours recovered. A typical SMB running 3–5 automated workflows saves 15–25 staff hours per week. At a fully-loaded labor cost of $35/hour, that\'s $27,000–$45,000 per year — from an $8,000 Growth package. Secondary ROI: automated lead follow-up within 60 seconds vs. hours increases close rates by 20–35% (response speed is the single biggest driver of inbound lead conversion). Most clients see full payback within 8–14 weeks of launch.',
  },
  {
    category: 'pricing',
    question: 'Are there ongoing costs after the automation is built?',
    answer:
      'Two types of ongoing costs: tool subscription fees (n8n is self-hostable at near-zero cost; Make.com and Zapier have monthly plans based on operation volume — typically $20–$100/month for SMB usage) and API usage costs for any AI steps (typically $10–$80/month for most business workflows, going directly to model providers at cost). FactoryJet does not mark up tool or API costs. Optional: a monthly retainer for ongoing optimization, new workflow additions, or maintenance. Most clients self-manage after the 30-day support window.',
  },

  /* ── Tools & Integrations ── */
  {
    category: 'technical',
    question: 'Which automation tools does FactoryJet use?',
    answer:
      'Our primary stack: n8n (self-hosted, audit-ready, best for regulated industries or complex multi-step logic), Make.com (visual, powerful for branching scenarios and data transformation), and Zapier (fastest deployment, 6,000+ native integrations). We add AI decision-making using Claude (Anthropic) and GPT-4o (OpenAI) for classification, summarization, drafting, and extraction steps. CRM integrations run natively with HubSpot, Salesforce, Pipedrive, and Zoho. The tool we recommend depends on your workflow complexity, data privacy requirements, and existing stack — always decided after the audit.',
  },
  {
    category: 'technical',
    question: 'Which CRM, e-commerce, and business tools do you integrate with?',
    answer:
      'CRMs: HubSpot, Salesforce, Pipedrive, Zoho, Close.com. E-commerce: Shopify, WooCommerce, BigCommerce, Magento. Communication: Slack, Gmail, Outlook, Twilio. Accounting: QuickBooks, Xero, FreshBooks. Support: Zendesk, Intercom, Freshdesk, Help Scout. Project management: Notion, Airtable, Asana, Monday.com. If your platform has a REST API or webhook support — and almost all modern business software does — we can connect to it.',
  },
  {
    category: 'technical',
    question: 'What happens if I switch tools after the automation is built?',
    answer:
      'We architect automations with modular integration layers: the workflow logic is separated from the connector code. Swapping HubSpot for Salesforce, or QuickBooks for Xero, typically means updating the connector module — not rebuilding the automation from scratch. Most tool swaps take 1–3 days of engineering time. We document every integration point at delivery specifically so future changes are fast and predictable.',
  },

  /* ── Trust & Results ── */
  {
    category: 'trust',
    question: 'Is my business data safe in an automated workflow?',
    answer:
      'Yes. We use API-level integrations only — no screen scraping, no storing your credentials in plain text. Every automation enforces least-privilege data access: the workflow only touches the data it needs for the specific step. For regulated industries (healthcare, legal, finance) we use n8n self-hosted so your data never transits a third-party cloud. Full audit trails on every automation action are standard on all projects.',
  },
  {
    category: 'trust',
    question: 'How is FactoryJet different from a US AI automation agency?',
    answer:
      'Three differences: price (60–70% cheaper — India-based engineers serving US businesses since 1999, no account manager layers inflating your invoice), speed (we start building in days, not weeks — no procurement process, no discovery retainer, no waiting for a kickoff slot three months out), and SMB realism (500+ small business projects mean we\'ve seen every edge case in a 10-person company\'s data and we build around it). We also recommend the simplest tool that solves your problem — we won\'t oversell custom AI agents when a Zapier workflow would do the job faster and cheaper.',
  },
  {
    category: 'trust',
    question: 'Can you show me examples of automations you\'ve built?',
    answer:
      'Yes — on a strategy call we share case studies relevant to your industry and workflow type. Published examples: an e-commerce brand whose support ticket automation deflected 68% of tier-1 tickets in the first 30 days; a professional services firm whose invoice automation recovered 11 hours per week across the AP team; a real estate team whose lead follow-up automation increased contacted-within-5-minutes rate from 12% to 94%. If we haven\'t worked in your specific industry, we\'ll say so upfront.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function AIAutomationPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <Script
        id="ai-automation-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="ai-automation-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <SiteHeader
        navLinks={[
          { label: 'Services', href: '/us/services' },
          { label: 'AI Automation', href: '/us/services/ai-automation' },
          { label: 'AI Agents', href: '/us/services/ai-agents' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Contact', href: '/contact' },
        ]}
        cta={{ label: 'Free Automation Audit', href: '/contact' }}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="AI AUTOMATION AGENCY · USA"
          headline="The AI Automation Agency Built for US Small Businesses"
          lead="Your team is spending 20+ hours a week on work that should run itself — copying data between tools, chasing invoices, following up on leads, writing the same reports. FactoryJet connects your stack, automates the manual steps, and builds in AI decision-making where routing alone isn't enough. Starting at $2,500. 60–70% cheaper than a US agency."
          primaryCta={{ label: 'Book a Free Automation Audit', href: '/contact' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={[
            '500+ businesses automated',
            'From $2,500',
            'n8n · Make · Zapier · Custom AI',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-fj-jet-blue"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                AUTOMATION IN ACTION
              </p>
              <p className="mt-4 font-fj-display text-[1.75rem] font-medium leading-[1.15] tracking-[-0.025em] text-fj-ink">
                Before vs. After Automation
              </p>
              <div className="mt-6 space-y-4">
                {[
                  {
                    before: 'Sales rep manually enters lead into CRM — 8 min per lead',
                    after: 'Form submits → AI enriches → HubSpot record created → sequence triggered — 4 seconds',
                  },
                  {
                    before: 'AP team processes 60 invoices by hand — 12 hrs/week',
                    after: 'Invoice arrives → AI extracts data → matches PO → logs to QuickBooks — zero human touch',
                  },
                  {
                    before: 'Support team sorts 200 tickets manually each morning',
                    after: 'AI reads, classifies, drafts reply, routes to right agent — before inbox opens',
                  },
                ].map((row, i) => (
                  <div key={i} className="rounded-xl border border-fj-neutral-100 bg-fj-neutral-50 p-4">
                    <p className="font-fj-body text-[0.75rem] font-medium uppercase tracking-wide text-red-400">Before</p>
                    <p className="mt-1 font-fj-body text-[0.8125rem] leading-[1.5] text-fj-neutral-600">{row.before}</p>
                    <p className="mt-2 font-fj-body text-[0.75rem] font-medium uppercase tracking-wide text-emerald-600">After</p>
                    <p className="mt-1 font-fj-body text-[0.8125rem] leading-[1.5] text-fj-neutral-600">{row.after}</p>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across the US, UK, and UAE" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ businesses. 25 years of building. Real automation that ships."
        />

        {/* ── 4. WHAT IS AN AI AUTOMATION AGENCY ───────────────────────────── */}
        <ServiceExplanation
          eyebrow="AI AUTOMATION EXPLAINED"
          headline="What an AI Automation Agency Does — and Why It's Different from a Chatbot or a Zapier Freelancer"
          lead="An AI automation agency doesn't build you a chatbot and call it done. It maps your manual workflows, connects your tools via API, adds an AI decision layer where routing alone isn't smart enough, and hands you a system that runs your operations while your team focuses on the work that actually needs a human."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {['n8n', 'Make.com', 'Zapier', 'HubSpot', 'Claude AI', 'GPT-4o', 'Salesforce', 'Shopify'].map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center rounded-full border border-fj-jet-blue/25 bg-fj-jet-blue/8 px-3 py-1 font-fj-mono font-semibold uppercase text-fj-jet-blue"
                    style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <p>
                A Zapier freelancer connects two tools and calls it automation. A US automation agency charges $30,000 and takes six months. FactoryJet sits in the middle — and builds above both. We map your full workflow, handle the edge cases that break simple automations, and add an AI layer (Claude, GPT-4o) for the steps that require reading, classifying, or generating content rather than just routing a signal.
              </p>
              <div
                className="border-l-2 border-fj-jet-blue pl-5 py-1"
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
                Basic automation breaks on edge cases. An invoice that arrives as a photo instead of a PDF. A support ticket written in Spanish. A lead form that has two email addresses. AI automation handles these because it can read and reason — not just match patterns. That&apos;s the layer we add, and it&apos;s why our automations work on real-world data, not just the clean examples you tested in staging.
              </p>
              <p>
                FactoryJet has been building software for US small businesses since 1999. We know what operational complexity looks like inside a 15-person company — the spreadsheet that five people update manually, the inbox that routes to whoever is least busy, the report that takes three hours to build every Friday. Those are exactly the workflows AI automation is designed to eliminate. We build for that reality, not for a startup pitch deck.
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
                borderTopColor: '#0052CC',
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
              <div className="divide-y divide-fj-neutral-100 px-7">
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
                  <div key={item.category} className="flex items-center justify-between gap-4 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-fj-jet-blue/50" aria-hidden="true" />
                      <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">{item.category}</p>
                    </div>
                    <p className="text-right font-fj-body text-[0.8125rem] text-fj-neutral-500">{item.tools}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full bg-fj-jet-blue" aria-hidden="true" />
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
          headline="20 hours a week in manual work is $36,400 a year in lost productivity — per employee."
          lead="At a fully-loaded labor cost of $35/hour, 20 manual hours per week per employee equals $36,400 per year spent on work that contributes zero strategic value. Multiply that across a team of 5 and it's $182,000 annually — in copying data between tools, writing the same emails, and running the same reports. Most SMBs automate this in 3–5 weeks for $8,000. The math is not complicated."
          pillars={[
            {
              title: 'Your team is doing work software should do',
              body: 'Data entry between systems. Manual invoice matching. Lead follow-up that depends on someone remembering to check their inbox. Support ticket sorting. Weekly report building. None of this requires human judgment — it requires a human to do something a computer could do faster and without errors. Every hour your team spends on it is an hour they\'re not spending on the work that actually grows your business.',
            },
            {
              title: 'Speed is a competitive advantage — and you\'re losing it',
              body: 'Research shows 78% of customers buy from the first business that responds to their inquiry. If a competitor has automated lead follow-up that fires within 60 seconds and your team checks the inbox twice a day, they are winning deals you never even knew you were in. The gap between automated and manual is not a technology story — it\'s a revenue story.',
            },
            {
              title: 'US automation agencies are priced for enterprise budgets',
              body: 'The average US AI automation agency charges $15,000–$40,000 for a mid-scope automation project, on a timeline of 3–6 months. That price point was designed for companies with 100+ employees and a six-figure software budget. FactoryJet\'s Growth tier delivers the same engineering quality — 3–5 interconnected workflows with AI decision-making — for $8,000, in 2–4 weeks. We built for your budget, not theirs.',
            },
          ]}
        />

        {/* ── 6. WHAT WE AUTOMATE ───────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="WHAT WE AUTOMATE"
          headline="Six High-ROI Workflow Categories We Automate for US Small Businesses"
          lead="Every business has a different bottleneck. These are the six workflow categories that consistently deliver the highest return on automation investment for the SMBs we work with."
          sectors={AUTOMATION_TYPES}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Free Audit to Automated Workflow — in 5 Structured Stages"
          lead="We don't start building until we understand your process completely. Every stage ends with a deliverable you review and approve — so nothing gets built that you didn't ask for."
          stages={AUTOMATION_JOURNEY_STAGES}
          closingNote="5 STAGES · 3 DAYS TO 4 WEEKS · FREE AUDIT BEFORE ANY COMMITMENT"
        />

        {/* ── 8. US MARKET CONTEXT ─────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="THE US AUTOMATION MARKET"
          headline="AI Automation Is the Fastest-Growing Line Item in SMB Technology Spend"
          leadParagraphs={[
            "The automation-as-a-service market is projected to grow from $10.15 billion in 2025 to $33.12 billion by 2030 — driven almost entirely by small and medium businesses adopting AI workflow tools for the first time. This isn't enterprise technology trickling down. It's SMB-native adoption of tools that didn't exist five years ago.",
            "McKinsey estimates that 40% of US small business work hours are spent on tasks that could be automated with current technology. For a 10-person team at fully-loaded cost, that's over $700,000 per year in recoverable productivity. The businesses capturing that advantage right now aren't bigger — they're faster to act.",
            "FactoryJet has served small and medium businesses across Austin, Miami, Denver, Nashville, Portland, Charlotte, Raleigh, Tampa, and across the US since 1999. We understand the operational reality of a business your size — and we know exactly where automation delivers the fastest payback: lead response speed, invoice processing, and support ticket volume.",
          ]}
          stats={US_AUTOMATION_STATS}
        />

        {/* ── 9. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. US Agency vs. DIY Tools vs. Freelancer"
          lead="Not all automation options are equal. Here's what the decision actually looks like when you compare side by side — on price, capability, and what you're left with after the project ends."
          pullQuote={{
            stat: '60–70%',
            caption: 'cheaper than a comparable US AI automation agency — same engineering depth, India-based cost structure.',
          }}
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
          footer="Prices reflect typical market ranges as of 2026. DIY costs exclude the ongoing staff time required to build and maintain workflows. FactoryJet fixed-price contracts available for all tiers."
        />

        {/* ── 10. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="TRANSPARENT PRICING"
            headline="Fixed-Price AI Automation — No Hourly Billing, No Scope Creep"
            lead="Every tier includes a fixed scope, a fixed price, and a delivery timeline we stand behind. No discovery retainer. No surprise invoices. No 'it depends' until after you've committed."
            tiers={PRICING_TIERS}
            footnote="All prices in USD. Monthly tool subscription fees (Make.com, Zapier) and AI API costs ($10–$80/month for most SMB workflows) are separate — we never mark these up. You own all workflow configurations and API connections."
          />
        </div>

        {/* ── 11. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="INDUSTRIES WE AUTOMATE"
          headline="AI Automation Built for the Operational Reality of Your Industry"
          lead="Generic automation breaks on industry-specific data formats, compliance requirements, and workflow quirks. We've built for yours before — here's what that looks like."
          sectors={INDUSTRIES}
        />

        {/* ── 12. TESTIMONIALS ─────────────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="WHAT CLIENTS SAY"
          headline="4.9/5 across 150+ reviews from US businesses we've automated."
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Every Question We Get on the Free Automation Audit Call — Answered Straight"
          lead="No jargon. No vendor-speak. Just clear answers to the questions every business owner asks before committing to automation."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA ─────────────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="START WITH A FREE AUDIT"
          headline="Book a Free Automation Audit — Walk Away With a Roadmap"
          sub="In 30 minutes, we'll identify your 3 highest-value automation opportunities, estimate the hours you'll recover each week, and tell you exactly what it costs to build. No pitch. No pressure. Just a straight answer from an engineer who's built it before — for a business exactly like yours."
          primaryCta={{ label: 'Book Your Free Audit', href: '/contact' }}
          secondaryCta={{ label: 'See AI Agent Services', href: '/us/services/ai-agents' }}
          objectionHandler="Starts at $2,500. Fixed price. Free audit first. No commitment until you've seen the plan."
        />

      </main>

      <SiteFooter />
    </>
  );
}
