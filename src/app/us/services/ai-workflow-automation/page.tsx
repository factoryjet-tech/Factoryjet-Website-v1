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
  title: 'AI Workflow Automation USA | Business Process AI | FactoryJet',
  description:
    'FactoryJet builds custom AI workflow automation for US small businesses — lead nurturing, invoice processing, onboarding, data sync, and reporting. Cut 40–65% of manual task time. Delivered in 2–4 weeks. Starting at $4,000. Free strategy call.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Workflow Automation Services USA | FactoryJet',
    description:
      'Custom AI workflow automation for US SMBs. Built on n8n, Make.com, and LangChain. 60–70% cheaper than US automation agencies. Fast delivery.',
    url: 'https://factoryjet.com/us/services/ai-workflow-automation',
    images: [
      {
        url: 'https://factoryjet.com/images/us/services/hero-ai-workflow.webp',
        width: 1200,
        height: 800,
        alt: 'FactoryJet - AI Workflow Automation Services USA',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Workflow Automation Services USA | FactoryJet',
    description:
      'Custom AI workflow automation for US small businesses. 60–70% cheaper. 2–4 week delivery. Free strategy call.',
    images: ['https://factoryjet.com/images/us/services/hero-ai-workflow.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/ai-workflow-automation',
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
   JSON-LD Schema (FAQPage + Service)
───────────────────────────────────────────────────────────────────────────── */

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is AI workflow automation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI workflow automation connects your business tools and uses artificial intelligence to execute multi-step processes without manual intervention. Unlike basic Zapier-style automation that just moves data between apps, AI workflow automation can read unstructured inputs (emails, documents, forms), make decisions based on content, handle exceptions, and complete tasks that previously required a person to think through them — not just click a button.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is AI workflow automation different from regular automation tools like Zapier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zapier and Make.com move data between apps when specific triggers fire — they\'re excellent for simple, predictable data routing. AI workflow automation adds a layer of intelligence on top: it can read an email and decide what kind of request it is, extract key information from an invoice PDF, classify a support ticket before routing it, write a draft response, or make a branching decision based on the content of a document. It handles the workflows that have too many edge cases for simple if-this-then-that rules.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kinds of workflows can AI automate for my business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI workflow automation is best suited for: lead follow-up and nurturing sequences (triggered by form fills or behavioral signals), invoice and document processing (extracting data from PDFs and routing for approval), employee onboarding task sequences, cross-system data sync when records don\'t match cleanly, customer support ticket classification and routing, report generation from multiple data sources, and sales pipeline updates from email and call notes. If your team does it more than five times per week and it involves reading something or making a simple decision, it can probably be automated.',
      },
    },
    {
      '@type': 'Question',
      name: 'What tools does FactoryJet use to build AI workflow automation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We build on n8n and Make.com for workflow orchestration, GPT-4o and Claude for the AI reasoning layer, Python scripts for complex data transformation, and LangChain for multi-step AI decision chains. We choose the stack based on your workflow complexity, data sensitivity, and whether you want to self-manage the automation afterward. n8n gives you a self-hosted option with full audit trails; Make.com is faster to deploy for simpler multi-app workflows.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the AI workflow automation development process look like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Five stages: Discover (we map your highest-value workflows, document the decision logic, and identify integration points), Design (we specify the workflow logic, exception handling, and data transformations), Build (we develop and test in a staging environment with weekly demos), Validate (we run the automation against real business scenarios and tune edge case handling), and Deploy (live launch with monitoring, team training, and a 30-day support window). Every stage ends with a working demo.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build and launch AI workflow automation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A single focused workflow — lead follow-up automation, invoice processing, or a specific data sync — goes from kickoff to production in 2–3 weeks. Multi-workflow automation platforms connecting several systems take 4–6 weeks. Enterprise automation with complex business logic, compliance requirements, and multiple departments typically runs 8–12 weeks. Timeline depends on the number of systems involved and how well-documented your existing processes are.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens after the automation is deployed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every engagement includes a 30-day post-launch window where we monitor workflow execution, fix any failures, handle API changes from connected platforms, and deliver a team training session. After 30 days you can self-manage (the monitoring dashboard shows every workflow run and exception), continue on a monthly retainer for new workflow development, or both.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does AI workflow automation cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet\'s AI workflow automation starts at $4,000 for a focused single-workflow build (Starter tier). The Growth tier at $10,000 covers a multi-workflow automation platform connecting 3–5 systems with an operations dashboard and 30-day support — the most popular option for US SMBs. Enterprise automation with complex business logic, custom integrations, and compliance requirements starts at $20,000. All prices are 60–70% lower than US automation agencies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is FactoryJet 60–70% cheaper than US automation agencies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our engineering team brings 25+ years of focused expertise. Same quality of workflow architecture, integration engineering, and delivery at dramatically lower labor costs. We\'ve served US businesses for 25 years. You brief an engineer; that engineer builds it. No account management layers, no inflated agency overhead.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the typical ROI from AI workflow automation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most direct return comes from manual hours eliminated. An invoice processing automation that handles 100 invoices per week at $10,000 pays for itself in 2–3 months based on the staff time it replaces. Lead follow-up automation that contacts every new lead within 60 seconds (instead of waiting for a sales rep to get to it) typically increases qualified pipeline by 25–40%. Most clients see payback within 2–4 months of launch.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there ongoing costs after the automation is built?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Two types: platform costs (n8n self-hosted is free; Make.com runs $9–$29/month for most SMB workflow volumes) and AI model API costs (typically $20–$100/month depending on how much AI reasoning your workflows use — paid directly to OpenAI or Anthropic). Neither is marked up by FactoryJet. Optional monthly retainer for new workflow development or ongoing support.',
      },
    },
    {
      '@type': 'Question',
      name: 'What software platforms can AI workflow automation connect to?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We integrate with most business software via API or webhook: CRMs (HubSpot, Salesforce, Pipedrive, Zoho, Close.com), e-commerce (Shopify, WooCommerce, BigCommerce), accounting (QuickBooks, Xero, FreshBooks), communication (Gmail, Outlook, Slack, Twilio), project management (Notion, Airtable, Asana, Monday.com, ClickUp), cloud storage (Google Drive, Dropbox, Box, OneDrive), and databases (PostgreSQL, MySQL, Supabase, Firebase). If it has a REST API or webhook, we can build to it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a technical team to manage the automation after launch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The workflow monitoring dashboard shows every run: what triggered it, what it did, whether it succeeded, and what it did when something failed. Your operations team can review the log, rerun failed workflows, and pause or resume automations without writing code. If a connected platform changes its API and breaks a workflow, you contact us and we fix it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens when an automated workflow fails or hits an edge case?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every workflow we build has explicit error handling: if a step fails, the system logs the error, notifies your designated team member via Slack or email, and either retries automatically or queues the item for manual review — depending on how you configure it. Nothing fails silently. The monitoring dashboard shows exactly where a workflow stopped and why, so you or we can fix it quickly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI workflow automation replace our existing Zapier or Make.com automations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Often yes — and for workflows with AI decision-making, the result is more reliable than a Zap that just moves data. We audit your existing automations during discovery and either migrate them to the new platform, leave simple ones in place, or rebuild them with added AI capability. We don\'t replace things that are working well just to bill more hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my business data safe in automated workflows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use API-level integrations with least-privilege access (the automation only touches the data it needs), full audit trails on every workflow run, and encrypted credential storage. For regulated industries — healthcare, legal, finance — we can build workflows that process sensitive data without sending it to third-party AI model providers, using private or local LLM deployments instead.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you automate workflows that involve reading documents or emails?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — this is a core strength of AI-powered automation vs. basic tools. We build workflows that read incoming emails and classify them (support request, billing question, sales inquiry), extract key fields from invoice or contract PDFs, pull data from scanned forms, and summarize lengthy documents into structured records. The AI reads the content; the workflow routes it correctly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the most common AI workflow automations US small businesses build first?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The four most common first automations are: (1) Lead follow-up — new form submission triggers a personalized email sequence and a CRM record within 60 seconds; (2) Invoice processing — incoming invoice emails trigger data extraction, GL coding, and approval routing; (3) Support ticket triage — incoming support emails are classified by topic and urgency, then routed to the right team member with an AI-drafted reply suggestion; (4) Weekly reporting — a scheduled workflow that pulls data from 3–5 sources and generates a plain-English summary delivered to Slack every Monday.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is FactoryJet different from hiring a US automation consultant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three differences: price (60–70% cheaper — specialized engineers serving US businesses for 25+ years), speed (no sales layers between your brief and the engineer building it), and SMB depth (500+ small business projects since 1999 — we know the operational reality of businesses your size, not just enterprise theory). We also won\'t propose AI automation for a workflow where a simple Zap would do the job.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have case studies showing workflow automation results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. An e-commerce brand\'s order fulfillment automation eliminated 30 hours per week of manual data entry. A professional services firm\'s lead follow-up automation reduced average response time from 4 hours to under 90 seconds, increasing qualified pipeline by 35%. An accounting firm\'s invoice processing automation cut document handling time by 75%. We share relevant case studies during a free strategy call.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I start with one workflow and expand later?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — that\'s the most common approach. We recommend starting with the workflow that costs your team the most time or causes the most errors, proving the value quickly, and then expanding to adjacent processes. We architect the first workflow so it\'s modular and easy to extend — you\'re not paying to rebuild the foundation every time you add a new automation.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Workflow Automation Services',
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
    'Custom AI workflow automation for US small and medium businesses. Specializing in lead nurturing automation, invoice processing, document workflows, cross-system data sync, and reporting automation built on n8n, Make.com, and LangChain.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Starter Workflow Automation',
      price: '4000',
      priceCurrency: 'USD',
      description: 'Single focused workflow automation for one high-impact business process.',
    },
    {
      '@type': 'Offer',
      name: 'Growth Automation Platform',
      price: '10000',
      priceCurrency: 'USD',
      description: 'Multi-workflow automation connecting 3–5 systems with operations dashboard.',
    },
    {
      '@type': 'Offer',
      name: 'Enterprise Automation System',
      price: '20000',
      priceCurrency: 'USD',
      description: 'Complex multi-department automation with custom business logic and compliance.',
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const AUTOMATION_TYPES = [
  {
    name: 'Lead Follow-Up & Nurturing Automation',
    description:
      'Every new lead — from a website form, ad click, or list import — gets a personalized follow-up email within 60 seconds, is scored and classified by intent, and moves through a tailored nurture sequence. Your CRM is updated automatically at every step. No lead falls through the cracks at 2 a.m.',
    example: '35% increase in qualified pipeline reported within 60 days of launch.',
    linkLabel: 'See how it works',
    linkHref: '/contact',
  },
  {
    name: 'Invoice & Document Processing',
    description:
      'Incoming invoices, purchase orders, contracts, and forms are read by AI, key fields extracted (vendor, amount, due date, line items), GL-coded based on your chart of accounts, and routed for approval — all without anyone opening a PDF manually. Connects to QuickBooks, Xero, and NetSuite.',
    example: '75% reduction in document handling time across client deployments.',
    linkLabel: 'Start a conversation',
    linkHref: '/contact',
  },
  {
    name: 'Support Ticket Triage & Routing',
    description:
      'Incoming support emails, chat messages, and form submissions are classified by topic and urgency, matched to the right team member or queue, and given an AI-drafted reply suggestion — before a human opens the ticket. High-urgency items surface immediately; routine ones are handled in batches.',
    example: 'Average first-response time cut from 4 hours to under 20 minutes.',
    linkLabel: 'See pricing',
    linkHref: '#pricing',
  },
  {
    name: 'Employee Onboarding Automation',
    description:
      'A new hire\'s start date triggers a coordinated sequence: IT account provisioning requests, welcome emails, first-week schedule, training module assignments, check-in reminders, and manager notifications — all automatically, without HR manually tracking a checklist in a spreadsheet.',
    example: 'HR teams reclaim 6–8 hours per new hire from manual coordination.',
    linkLabel: 'Book a strategy call',
    linkHref: '/contact',
  },
  {
    name: 'Automated Reporting & Dashboards',
    description:
      'A scheduled workflow pulls data from your CRM, e-commerce platform, ads account, and any connected database, runs the numbers, writes plain-English commentary on the key trends and anomalies, and delivers a formatted report to Slack, email, or a shared Google Doc — every Monday morning.',
    example: 'Business owners reclaim 5–8 hours per week of manual reporting time.',
    linkLabel: 'Learn more',
    linkHref: '/contact',
  },
  {
    name: 'Cross-System Data Sync',
    description:
      'Keeps your CRM, e-commerce platform, accounting software, and operations database in sync without manual exports and imports. New orders update inventory, customers update the CRM, payments update accounting — in real time, with conflict resolution logic when records don\'t match cleanly.',
    example: 'Eliminates 10–20 hours per week of copy-paste data entry.',
    linkLabel: 'Get a free assessment',
    linkHref: '/contact',
  },
];

const AUTOMATION_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'A 60-minute session where we map your highest-value workflows, document the decision logic and exception cases, and identify which processes have the clearest ROI to automate first.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We design the workflow logic, define error handling, map every integration point, and specify the AI reasoning layers. You approve the design doc — including what happens when something fails — before we write code.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Development in a staging environment with weekly demos. You see the automation handling real data before it goes anywhere near production. Feedback is incorporated at every stage.',
  },
  {
    number: '04',
    title: 'Validate',
    description:
      'We run the automation against your actual business scenarios — including edge cases and failure modes. Every exception path is tested. Every error handler is verified. Nothing is deployed until it\'s provably reliable.',
  },
  {
    number: '05',
    title: 'Deploy & Monitor',
    description:
      'Production launch with real-time monitoring, an operations dashboard showing every workflow run, and a 30-day support window. Full team training so your operations staff can manage it without engineering help.',
  },
];

const ROI_STATS = [
  {
    value: '55%',
    label: 'average reduction in manual task time across FactoryJet automation deployments',
    microcopy: 'based on client-reported hours before and after',
    categoryLabel: 'TIME SAVED',
  },
  {
    value: '90s',
    label: 'average lead follow-up time with automation vs. 4+ hours manually',
    microcopy: 'speed is the single biggest driver of lead close rates',
    categoryLabel: 'LEAD RESPONSE',
  },
  {
    value: '60–70%',
    label: 'cheaper than a comparable US automation agency',
    microcopy: 'specialized engineers, US-caliber output',
    categoryLabel: 'COST ADVANTAGE',
  },
];

const MARKET_STATS = [
  {
    value: '$26B',
    label: 'US intelligent process automation market value by 2028 — growing at 13% annually',
    microcopy: 'MarketsandMarkets 2024',
    categoryLabel: 'MARKET SIZE',
  },
  {
    value: '45%',
    label: 'of US SMBs say manual data entry is their biggest operational time drain',
    microcopy: 'Salesforce Small Business Report 2024',
    categoryLabel: 'SMB PAIN POINT',
  },
  {
    value: '3–6×',
    label: 'higher ROI from AI-enhanced automation vs. basic rule-based tools like Zapier',
    microcopy: 'McKinsey Automation in SMBs Study',
    categoryLabel: 'AI ADVANTAGE',
  },
];

const COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'US Automation Agency' },
  { label: 'DIY (Zapier / Make.com)' },
  { label: 'Freelancer' },
] as const;

const COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: [
      '$4,000',
      '$15,000–$40,000',
      '$20–$100/mo (SaaS, limited AI)',
      '$6,000–$15,000',
    ],
  },
  {
    feature: 'Delivery timeline',
    values: ['2–4 weeks', '2–5 months', 'Hours (limited capability)', '4–8 weeks (unreliable)'],
  },
  {
    feature: 'AI decision-making in workflows',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
    ],
  },
  {
    feature: 'Document & email reading (unstructured data)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
    ],
  },
  {
    feature: 'Full error handling & monitoring',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
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
    feature: 'No ongoing platform seat fees',
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
    feature: '25+ years of SMB domain experience',
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
    priceRange: 'From $4,000',
    description:
      'One focused workflow automation that eliminates your highest-impact manual process. Best for businesses automating their first workflow.',
    features: [
      'Single workflow automation (lead follow-up, invoice processing, or data sync)',
      'Connects to 2–3 existing tools via API',
      'AI reasoning layer for decision-making and classification',
      'Error handling with Slack or email notifications',
      'Workflow monitoring dashboard',
      'Full workflow logic documentation',
      '14-day post-launch support window',
    ],
    cta: { label: 'Book a Free Strategy Call', modal: true as const, region: 'us' as const },
  },
  {
    name: 'Growth',
    priceRange: 'From $10,000',
    description:
      'A multi-workflow automation platform connecting 3–5 systems with an operations dashboard. The most popular tier for US SMBs ready to automate seriously.',
    features: [
      'Up to 4 interconnected workflow automations',
      'Full CRM, e-commerce, or accounting integration',
      'AI document reading and field extraction',
      'Operations dashboard showing all workflow runs and exceptions',
      'Custom error handling and retry logic',
      'Bi-directional data sync between systems',
      'Team training session + full documentation',
      '30-day post-launch support window',
    ],
    cta: { label: 'Get a Custom Quote', modal: true as const, region: 'us' as const },
    popular: true,
  },
  {
    name: 'Enterprise',
    priceRange: 'From $20,000',
    description:
      'Complex multi-department automation with custom business logic, compliance requirements, and a dedicated engineering partner.',
    features: [
      'Unlimited workflow automations across departments',
      'Complex multi-branch business logic and decision trees',
      'Private LLM deployment for sensitive data processing',
      'Enterprise ERP and legacy system integration',
      'Compliance-ready audit trails (HIPAA, SOC 2 patterns)',
      'Custom analytics and reporting layer',
      'Dedicated engineering point of contact',
      '90-day post-launch support and iteration window',
    ],
    cta: { label: 'Schedule an Enterprise Call', modal: true as const, region: 'us' as const },
  },
] as const;

/* ─── FAQ categories ─────────────────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'what-is',    label: 'What Is AI Automation' },
  { key: 'process',   label: 'Process & Timeline' },
  { key: 'pricing',   label: 'Pricing & ROI' },
  { key: 'technical', label: 'Technical & Integrations' },
  { key: 'trust',     label: 'Trust & Results' },
];

/* ─── FAQ items — 21 conversational Q-A pairs, AI-citation optimized ────── */
const FAQ_ITEMS = [

  /* ── What Is AI Workflow Automation ── */
  {
    category: 'what-is',
    question: 'What is AI workflow automation?',
    answer:
      'AI workflow automation connects your business tools and uses artificial intelligence to execute multi-step processes without manual intervention. Unlike basic Zapier-style automation that just moves data between apps, AI workflow automation can read unstructured inputs (emails, documents, forms), make decisions based on content, handle exceptions, and complete tasks that previously required a person to think — not just click.',
  },
  {
    category: 'what-is',
    question: 'How is AI workflow automation different from tools like Zapier?',
    answer:
      'Zapier and Make.com move data between apps when specific triggers fire — excellent for simple, predictable routing. AI workflow automation adds intelligence on top: it reads an email and decides what kind of request it is, extracts key fields from an invoice PDF, classifies a support ticket before routing it, or makes a branching decision based on document content. It handles workflows that have too many edge cases for simple if-this-then-that rules.',
  },
  {
    category: 'what-is',
    question: 'What kinds of workflows can AI automate for my business?',
    answer:
      'AI workflow automation works best for: lead follow-up and nurturing sequences, invoice and document processing, support ticket classification and routing, employee onboarding task sequences, cross-system data sync, and automated report generation from multiple data sources. If your team does something more than five times per week and it involves reading something or making a simple decision, it can probably be automated.',
  },
  {
    category: 'what-is',
    question: 'What tools does FactoryJet use to build AI workflow automation?',
    answer:
      'We build on n8n and Make.com for workflow orchestration, GPT-4o and Claude for the AI reasoning layer, Python for complex data transformation, and LangChain for multi-step AI decision chains. We choose the stack based on your workflow complexity, data sensitivity, and whether you want to self-host. n8n gives a self-hosted option with full audit trails; Make.com is faster for simpler multi-app workflows.',
  },

  /* ── Process & Timeline ── */
  {
    category: 'process',
    question: 'What does the workflow automation development process look like?',
    answer:
      'Five stages: Discover (map your highest-value workflows and decision logic), Design (workflow architecture, error handling, and integration specs), Build (development in staging with weekly demos), Validate (test against real business scenarios including edge cases), and Deploy (production launch with monitoring, training, and 30-day support). Every stage ends with a working demo.',
  },
  {
    category: 'process',
    question: 'How long does it take to build and launch AI workflow automation?',
    answer:
      'A single focused workflow — lead follow-up, invoice processing, or a data sync — goes from kickoff to production in 2–3 weeks. A multi-workflow platform connecting several systems takes 4–6 weeks. Enterprise automation with complex logic and multiple departments runs 8–12 weeks. Timeline is confirmed after the discovery session.',
  },
  {
    category: 'process',
    question: 'Will I see progress during the build, or just get a final delivery?',
    answer:
      'Weekly demos throughout — every stage ends with the automation running against real data. Most clients find that seeing it work early surfaces edge cases and refinements they hadn\'t thought of, and we build room to course-correct at every stage. Nothing is a surprise at launch.',
  },
  {
    category: 'process',
    question: 'What happens after the automation goes live?',
    answer:
      'Every engagement includes a 30-day post-launch window: we monitor workflow execution, fix any failures, handle API changes from connected platforms, and deliver a team training session. The operations dashboard shows your team every run and exception without engineering involvement. After 30 days you can self-manage or continue on a monthly retainer.',
  },

  /* ── Pricing & ROI ── */
  {
    category: 'pricing',
    question: 'How much does AI workflow automation cost?',
    answer:
      'FactoryJet\'s automation starts at $4,000 for a single focused workflow build. The Growth tier at $10,000 covers a multi-workflow platform connecting 3–5 systems with an operations dashboard — the most popular option for US SMBs. Enterprise automation with complex business logic starts at $20,000. All prices are 60–70% lower than US automation agencies.',
  },
  {
    category: 'pricing',
    question: 'Why is FactoryJet 60–70% cheaper than US automation agencies?',
    answer:
      'Our engineering team brings 25+ years of focused expertise. Same quality of workflow architecture, integration engineering, and delivery at dramatically lower labor costs. We\'ve served US businesses for 25 years. You brief an engineer; that engineer builds it. No account management layers, no inflated agency overhead.',
  },
  {
    category: 'pricing',
    question: 'What return on investment can I expect from workflow automation?',
    answer:
      'The most direct ROI comes from manual hours eliminated. An invoice processing automation handling 100 invoices per week at $10,000 pays for itself within 2–3 months based on replaced staff time. Lead follow-up automation that contacts every new lead within 90 seconds typically increases qualified pipeline by 25–40% vs. manual follow-up. Most clients see full payback within 2–4 months.',
  },
  {
    category: 'pricing',
    question: 'Are there ongoing costs after the automation is built?',
    answer:
      'Two types: platform costs (n8n self-hosted is free; Make.com runs $9–$29/month for most SMB volumes) and AI model API costs (typically $20–$100/month depending on how much reasoning your workflows use — paid directly to OpenAI or Anthropic, not marked up by us). Optional monthly retainer for new workflow development.',
  },

  /* ── Technical & Integrations ── */
  {
    category: 'technical',
    question: 'What software platforms can the automation connect to?',
    answer:
      'We integrate via API with: CRMs (HubSpot, Salesforce, Pipedrive, Zoho), e-commerce (Shopify, WooCommerce), accounting (QuickBooks, Xero, FreshBooks), communication (Gmail, Outlook, Slack, Twilio), project management (Notion, Airtable, Asana, Monday.com, ClickUp), cloud storage (Google Drive, Dropbox, Box), and databases (PostgreSQL, MySQL, Supabase, Firebase). If it has a REST API or webhook, we can build to it.',
  },
  {
    category: 'technical',
    question: 'What happens when an automated workflow fails or hits an edge case?',
    answer:
      'Every workflow includes explicit error handling: if a step fails, the system logs the error, notifies your team via Slack or email, and either retries automatically or queues the item for manual review. Nothing fails silently. The monitoring dashboard shows exactly where a workflow stopped and why, so it can be fixed quickly.',
  },
  {
    category: 'technical',
    question: 'Can you automate workflows that involve reading emails or documents?',
    answer:
      'Yes — this is a core strength vs. basic tools. We build workflows that read incoming emails and classify them (support request, billing question, sales inquiry), extract key fields from invoice or contract PDFs, pull data from scanned forms, and summarize documents into structured records. The AI reads the content; the workflow routes it correctly.',
  },
  {
    category: 'technical',
    question: 'Do I need a technical team to manage the automation after launch?',
    answer:
      'No. The workflow monitoring dashboard shows every run: what triggered it, what it did, whether it succeeded, and what happened when something failed. Your operations team can review logs, rerun failed workflows, and pause automations without writing code. If a platform changes its API, you contact us and we fix it.',
  },

  /* ── Trust & Results ── */
  {
    category: 'trust',
    question: 'Is my business data safe in automated workflows?',
    answer:
      'We use API-level integrations with least-privilege access, full audit trails on every workflow run, and encrypted credential storage. For regulated industries — healthcare, legal, finance — we build workflows that process sensitive data without sending it to third-party AI model providers, using private or local LLM deployments instead.',
  },
  {
    category: 'trust',
    question: 'Can AI automation replace our existing Zapier workflows?',
    answer:
      'Often yes — and for workflows needing AI decision-making, the result is more reliable than basic Zaps. We audit your existing automations during discovery and either migrate them, leave simple ones in place, or rebuild them with added AI capability. We won\'t replace things that are working well just to bill more hours.',
  },
  {
    category: 'trust',
    question: 'Can I start with one workflow and expand later?',
    answer:
      'Yes — that\'s the most common approach. Start with the workflow that costs your team the most time, prove the value quickly, then expand to adjacent processes. We architect the first workflow to be modular and extensible so you\'re not paying to rebuild the foundation every time you add a new automation.',
  },
  {
    category: 'trust',
    question: 'What results have other businesses gotten from FactoryJet automation?',
    answer:
      'An e-commerce brand\'s order fulfillment automation eliminated 30 hours per week of manual data entry. A professional services firm\'s lead follow-up automation cut average response time from 4 hours to 90 seconds, increasing qualified pipeline by 35%. An accounting firm\'s invoice processing automation cut document handling time by 75%. We share relevant case studies during a free strategy call.',
  },
  {
    category: 'trust',
    question: 'How is FactoryJet different from a US automation consultant?',
    answer:
      'Three differences: price (60–70% cheaper because of our efficient low-overhead structure, serving US businesses for 25+ years), speed (no layers between your brief and the engineer building it), and SMB depth (500+ small business projects since 1999 — we understand operations inside a 15-person company, not just enterprise theory). We also won\'t propose AI automation when a simpler solution would do the job.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function AIWorkflowAutomationPage() {
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
          { label: 'AI Automation', href: '/us/services/ai-workflow-automation' },
          { label: 'AI Agents', href: '/us/services/ai-agents' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Contact', modal: true, region: 'us' },
        ]}
        cta={{ label: 'Book a Free Call', modal: true, region: 'us' }}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="AI WORKFLOW AUTOMATION · USA"
          headline="Automate the Work That's Eating Your Team's Day"
          lead="Manual data entry, repetitive follow-ups, document processing, cross-system updates — your team is doing the same tasks over and over. FactoryJet builds AI workflow automation that handles these processes 24/7, connects your existing tools, and costs 60–70% less than a US automation agency."
          primaryCta={{ label: 'Book a Free Automation Strategy Call', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={[
            '500+ businesses served',
            'Starting at $4,000',
            '60–70% cheaper than US agencies',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#F05A28]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                AUTOMATION IN ACTION
              </p>
              <p className="mt-4 font-fj-display text-[2rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                30 hours of manual work per week — eliminated in the first month.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'New lead fills form → AI qualifies → CRM updated → follow-up email sent in 90 seconds',
                  'Invoice arrives by email → AI extracts data → coded to GL → routed for approval',
                  'Monday 7 a.m. → automation pulls 5 data sources → report delivered to Slack',
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
                  All three workflows running 24/7. No new hires. No missed tasks.
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

        {/* ── 3. WHAT IS AI WORKFLOW AUTOMATION ───────────────────────────── */}
        <ServiceExplanation
          eyebrow="AI AUTOMATION EXPLAINED"
          headline="What Is AI Workflow Automation — and Why Is It Different from Zapier?"
          lead="Basic automation tools move data between apps. AI workflow automation reads unstructured content, makes decisions, handles exceptions, and completes tasks that previously required a person to think them through."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {[
                  'Read emails & documents',
                  'Extract & classify data',
                  'Make branching decisions',
                  'Update multiple systems',
                  'Handle exceptions',
                  'Report automatically',
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
                Most small business owners have tried Zapier or Make.com at some point. Those tools are great for simple, predictable data routing: when this happens, do that. But most real business workflows aren&apos;t that simple. An incoming email might be a support request, a sales inquiry, a billing question, or a complaint — and each one needs a different response. A Zap can&apos;t tell the difference. An AI workflow can.
              </p>

              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[
                  { value: '55%', label: 'Time saved' },
                  { value: '24/7', label: 'Runs without you' },
                  { value: '2–4mo', label: 'Typical payback' },
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
                  The work your team does every day on autopilot — that&apos;s what AI automation eliminates.
                </p>
              </div>
              <p>
                FactoryJet builds AI workflow automation on n8n, Make.com, and LangChain — connected to your CRM, e-commerce platform, accounting software, and communication tools. We handle the engineering; you handle the work that actually needs a human. We&apos;ve been building for US small and mid-sized businesses since 1999 and understand the operational reality inside a 10–50 person company. The messy data, the exception cases, the Friday afternoon task that someone always forgets — that&apos;s exactly what we build for.
              </p>

              <div className="grid grid-cols-2 gap-2" aria-hidden>
                {[
                  'E-commerce brands',
                  'Professional services',
                  'Healthcare practices',
                  'SaaS companies',
                  'Real estate teams',
                  'Accounting firms',
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
                  How an AI Workflow Runs
                </p>
              </div>
              <div className="px-7 pt-6 pb-2">
                {([
                  {
                    step: '01',
                    title: 'A trigger fires',
                    desc: 'New form submission, email arrival, scheduled time, webhook, or database change starts the workflow.',
                  },
                  {
                    step: '02',
                    title: 'AI reads the content',
                    desc: 'The AI layer classifies the input, extracts key data, and decides which branch of the workflow applies.',
                  },
                  {
                    step: '03',
                    title: 'Systems are updated',
                    desc: 'CRM, accounting, project management, email — any connected tool gets the right update in real time.',
                  },
                  {
                    step: '04',
                    title: 'Exceptions are handled',
                    desc: 'Edge cases are flagged, errors logged, and your team notified — nothing fails silently.',
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
                  Full audit trail on every workflow run. Your team sees everything.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 4. THE PROBLEM (DARK) ─────────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE PROBLEM"
          headline="Your team is spending half their day on work that follows a pattern. That work belongs in a workflow."
          lead="The businesses pulling ahead right now aren't bigger or better funded — they've just stopped doing manually what a machine can do reliably."
          pillars={[
            {
              icon: '⏱',
              title: 'Manual processes scale badly and break under volume',
              body: 'When your business grows 30%, your admin work grows 30% too — unless you automate. Copy-pasting data between systems, manually triggering follow-up emails, and opening invoices one by one don\'t get faster as volume increases. They just require more people. AI workflow automation absorbs volume spikes without adding headcount.',
            },
            {
              icon: '📉',
              title: 'Slow lead follow-up is costing you closed deals',
              body: 'A lead that filled out your contact form at 7 p.m. on Thursday is 21× more likely to qualify if you follow up within 5 minutes. If your process is "someone from sales checks the inbox the next morning," you\'re giving deals to whoever responds first — and it isn\'t you. Automated follow-up changes that math completely.',
            },
            {
              icon: '💸',
              title: 'Enterprise automation tools are priced for enterprise budgets',
              body: 'Salesforce automation, SAP workflows, and US automation consulting firms charge $40,000+ for systems that are frankly overkill for a 20-person business. FactoryJet builds the same capability for 60–70% less — because our engineering team has the skills with a radically different cost structure, and we don\'t try to solve simple problems with expensive platforms.',
            },
          ]}
        />

        {/* ── 5. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Strategy Call to Live Automation in 2–4 Weeks"
          lead="A structured 5-stage process that keeps you informed at every step and delivers working automation — not a proposal about automation."
          stages={AUTOMATION_JOURNEY_STAGES}
          closingNote="5 STAGES · 2–12 WEEKS DEPENDING ON SCOPE · WEEKLY DEMOS THROUGHOUT"
        />

        {/* ── 6. AUTOMATION TYPES ──────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="WHAT WE BUILD"
          headline="Six Workflow Automations That Pay for Themselves Fast"
          lead="These are the automations that consistently have the clearest ROI for US small and mid-sized businesses. We build all six — and help you figure out which one to prioritize first."
          sectors={AUTOMATION_TYPES}
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
          headline="FactoryJet vs. US Agency vs. DIY Tools vs. Freelancer"
          lead="The honest breakdown: what you actually get, at what price, and how fast."
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
        />

        {/* ── 11. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="PRICING"
            headline="Fixed-Price AI Workflow Automation. No Hourly Billing."
            lead="Three tiers based on workflow complexity and number of systems involved. Every tier includes full code ownership, error handling, monitoring, and post-launch support."
            tiers={PRICING_TIERS}
            footnote="All prices in USD. Platform costs (n8n self-hosted: free; Make.com: $9–$29/mo) and AI model API fees are separate and go directly to the provider. You own all code and credentials."
          />
        </div>

        {/* ── 12. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="We're not a US automation agency with a slick sales deck. That's the point."
          lead="We're a 25-year-old software company that has built 500+ production systems for real businesses. The workflows we build don't live in a demo environment — they run in production every day and handle real business data."
          pillars={[
            {
              icon: '⚡',
              title: 'Speed without cutting corners',
              body: 'A US automation agency has account managers, solution architects, and a sales team to support. We don\'t. When you brief us, an engineer reads it — not an account rep. That\'s why our timelines are measured in weeks, not quarters, and why the work is done by people who understand the technical details of what you actually need.',
            },
            {
              icon: '💡',
              title: 'We understand SMB operations, not just enterprise theory',
              body: 'We\'ve built for e-commerce brands, accounting firms, healthcare practices, and SaaS companies since 1999. We know what a 15-person company\'s data actually looks like — the messy CRM, the inconsistent CSV exports, the Frankenstein spreadsheet someone built five years ago. We build automation that works with your real data, not a clean demo dataset.',
            },
            {
              icon: '🔒',
              title: 'Your code, your data, your infrastructure',
              body: 'No vendor lock-in, no proprietary platforms, no subscriptions you can\'t cancel. We deliver the full workflow logic, all credentials and documentation, and a self-hostable option if you want it. If you want to take it in-house or switch engineers, you walk away with an asset you fully own.',
            },
          ]}
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything You Need to Know Before You Automate"
          lead="No jargon. No runaround. The questions we get on every strategy call — answered straight."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA ─────────────────────────────────────────────────── */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="READY TO AUTOMATE"
            headline="Book a Free 30-Minute Workflow Automation Strategy Call"
            sub="We'll map your highest-value automation opportunity, estimate how many hours per week it would recover, and give you a fixed-price quote — before you commit to anything."
            primaryCta={{ label: 'Book Your Free Strategy Call', modal: true, region: 'us' }}
            secondaryCta={{ label: 'See All AI Services', href: '/us/services' }}
            objectionHandler="Most clients see full ROI within 2–4 months. Free call, fixed price, no hidden fees."
          />
        </div>

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
