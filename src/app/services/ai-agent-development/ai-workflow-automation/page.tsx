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

export const metadata: Metadata = {
  title: 'AI Workflow Automation India | FactoryJet',
  description:
    'AI workflow automation for Indian businesses, automate Zoho CRM, Tally, GST invoicing & WhatsApp follow-ups. Fixed price. Live in 2–4 weeks.',
  keywords: [
    'AI workflow automation India',
    'business process automation India',
    'Zoho automation India',
    'n8n workflow automation India',
    'Tally automation India',
    'GST automation India',
    'RPA India',
    'AI automation for SMB India',
    'workflow automation Mumbai',
    'no-code automation India',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Workflow Automation India | FactoryJet',
    description: 'Custom AI workflow automation for Indian businesses. Automate Zoho, Tally, GST, WhatsApp, and cross-system data flows. Fixed price.',
    url: 'https://factoryjet.com/services/ai-agent-development/ai-workflow-automation',
    images: [{ url: 'https://factoryjet.com/images/us/services/hero-ai-workflow.webp', width: 1200, height: 800, alt: 'FactoryJet AI workflow automation services' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Workflow Automation India | FactoryJet',
    description: 'Automate Zoho, Tally, GST, and WhatsApp workflows. Fixed price. Live in 2–4 weeks.',
    images: ['https://factoryjet.com/images/us/services/hero-ai-workflow.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/services/ai-agent-development/ai-workflow-automation' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

// Freshness signal. Benchmark: 56% of Google-AI-Overview-cited pages carry
// dateModified; these pages carried none. Keep this honest: bump it when the
// page's content actually changes, not on every unrelated deploy.
const PAGE_MODIFIED = '2026-08-04';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-workflow-automation#webpage',
  url: 'https://factoryjet.com/services/ai-agent-development/ai-workflow-automation',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Workflow Automation Development India',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  description: 'Custom AI workflow automation for Indian businesses, connect Zoho, Tally, Shopify, WhatsApp, Razorpay, and 20+ tools into automated pipelines with AI decision logic.',
  areaServed: 'IN',
  serviceType: 'AI Workflow Automation',
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-workflow-automation#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/services/ai-agent-development/ai-workflow-automation',
};

const WORKFLOW_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Process Audit',
    description: 'We map your 10 most repetitive manual tasks, identify which tools are involved, and rank them by time saved per week. We then design the automation sequence before writing a single line of code.',
  },
  {
    number: '02',
    title: 'Architecture Design',
    description: 'We design the data flow: which system triggers the workflow, what transformations happen, which AI decisions are needed, how errors are caught, and how the audit trail is maintained. You sign off before we build.',
  },
  {
    number: '03',
    title: 'Build & Integrate',
    description: 'We build the automation using n8n, Make, or a custom Python/Node backend, connecting your Zoho, Tally, Shopify, WhatsApp, and Razorpay accounts via APIs and webhooks. Every integration is tested in a sandbox first.',
  },
  {
    number: '04',
    title: 'Test & Validate',
    description: 'We run the automation against real data samples, including edge cases, duplicate records, and error states, and verify that every system receives accurate data. Your team validates the outputs before go-live.',
  },
  {
    number: '05',
    title: 'Deploy & Hand Over',
    description: 'Live deployment with monitoring, error alert setup, and a recorded walkthrough for your team. All credentials, API keys, and workflow documentation are handed over. Optional monthly maintenance retainer available.',
  },
];

const WORKFLOW_STATS = [
  {
    value: '5–10 hrs',
    label: 'of weekly manual admin time eliminated per automation, typical for Indian SMBs',
    microcopy: 'FactoryJet client data',
    categoryLabel: 'TIME SAVED',
  },
  {
    value: '95%+',
    label: 'reduction in manual data-entry errors across CRM, Tally, and e-commerce systems',
    microcopy: 'across FactoryJet automation deployments',
    categoryLabel: 'ERROR REDUCTION',
  },
  {
    value: '3–6 mo',
    label: 'payback period for most Indian SMB workflow automation projects',
    microcopy: 'based on salary cost of manual work replaced',
    categoryLabel: 'PAYBACK PERIOD',
  },
];

const WORKFLOW_MARKET_STATS = [
  {
    value: '₹22,000 Cr+',
    label: 'India business process automation market projected by 2027',
    sourceUrl: 'https://nasscom.in/knowledge-center/publications',
    sourceLabel: 'NASSCOM AI Report 2024',
  },
  {
    value: '60%',
    label: 'of Indian SMB working hours are spent on tasks that can be automated',
    sourceUrl: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights',
    sourceLabel: 'McKinsey Future of Work India',
  },
  {
    value: '500+',
    label: 'businesses served by FactoryJet, across India, US, UK, and UAE',
    sourceUrl: 'https://factoryjet.com/about',
    sourceLabel: 'FactoryJet Track Record',
  },
];

const WORKFLOW_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'No-Code Tool (n8n DIY)' },
  { label: 'IT Outsourcing Firm' },
  { label: 'Manual Process' },
] as const;

const WORKFLOW_COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: [
      'Fixed one-time price',
      '₹3,000–₹10,000/month (you build it)',
      '₹5,00,000+ (project-based, slow)',
      '₹0 now, ₹15,000–₹40,000/month in salary',
    ],
  },
  {
    feature: 'Zoho + Tally + Razorpay integration',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="nc" kind="partial" />,
      <CompareIcon key="it" kind="yes" />,
      <CompareIcon key="mn" kind="no" />,
    ],
  },
  {
    feature: 'AI decision logic (classification, extraction)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="nc" kind="no" />,
      <CompareIcon key="it" kind="partial" />,
      <CompareIcon key="mn" kind="no" />,
    ],
  },
  {
    feature: 'GST-compliant invoice automation',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="nc" kind="partial" />,
      <CompareIcon key="it" kind="yes" />,
      <CompareIcon key="mn" kind="no" />,
    ],
  },
  {
    feature: 'WhatsApp notification integration',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="nc" kind="partial" />,
      <CompareIcon key="it" kind="partial" />,
      <CompareIcon key="mn" kind="no" />,
    ],
  },
  {
    feature: 'Error handling and audit trail',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="nc" kind="partial" />,
      <CompareIcon key="it" kind="yes" />,
      <CompareIcon key="mn" kind="no" />,
    ],
  },
  {
    feature: 'Fixed-price contract',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="nc" kind="no" />,
      <CompareIcon key="it" kind="no" />,
      <CompareIcon key="mn" kind="no" />,
    ],
  },
  {
    feature: 'You own the code & workflow IP',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="nc" kind="yes" />,
      <CompareIcon key="it" kind="partial" />,
      <CompareIcon key="mn" kind="no" />,
    ],
  },
  {
    feature: 'Built in 1–4 weeks',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="nc" kind="no" />,
      <CompareIcon key="it" kind="no" />,
      <CompareIcon key="mn" kind="no" />,
    ],
  },
  {
    feature: '500+ SMB projects (India, US, UK, UAE)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="nc" kind="no" />,
      <CompareIcon key="it" kind="no" />,
      <CompareIcon key="mn" kind="no" />,
    ],
  },
];

const WORKFLOW_INDUSTRIES = [
  {
    name: 'D2C E-Commerce',
    description: 'Order-to-fulfilment automation: Shopify order → Shiprocket booking → WhatsApp tracking update → Tally entry → Zoho CRM update. Runs in under 60 seconds without anyone touching a keyboard.',
    example: 'D2C brands eliminate 3–6 hours of daily manual order processing within one week of deployment.',
  },
  {
    name: 'Real Estate',
    description: 'Lead intake automation from 99acres, MagicBricks, and Facebook, auto-routed to Zoho CRM by project, site visit booked to Google Calendar, WhatsApp follow-up sent, and telecaller assigned automatically.',
    example: 'Builders reduce lead response time from 4+ hours to under 3 minutes.',
  },
  {
    name: 'Manufacturing & Distribution',
    description: 'Purchase order to Tally entry automation, B2B WhatsApp order receiving, GST invoice generation and dispatch, and inventory sync between Zoho Inventory and your ERP: all without manual re-entry.',
    example: 'Distributors save 8–12 hours per week of billing and inventory data entry.',
  },
  {
    name: 'Financial Services & NBFC',
    description: 'Loan application intake from web forms → KYC document collection via WhatsApp → credit bureau API check → Zoho CRM lead scoring → assigned to RM with full context. Reduces intake processing time by 70%.',
    example: 'NBFCs process 3× more applications with the same team after automation.',
  },
  {
    name: 'Healthcare & Clinics',
    description: 'Appointment booking from website or WhatsApp → doctor availability check → confirmation WhatsApp message → reminder sequence → post-visit feedback request → Zoho CRM update. Zero manual scheduling.',
    example: 'Clinics recover 2–4 hours of front-desk time per day after automation.',
  },
  {
    name: 'Professional Services',
    description: 'Client onboarding automation: contract e-sign → Zoho CRM project creation → Google Drive folder setup → invoice in Zoho Books → onboarding WhatsApp sequence. New clients set up in under 5 minutes.',
    example: 'Consulting firms onboard new clients 5× faster with automated workflows.',
  },
];

const WORKFLOW_PRICING_TIERS = [
  {
    name: 'Workflow Starter',
    priceRange: '',
    description: 'A focused two-system automation that eliminates your single biggest manual repetition.',
    features: [
      '2-system integration (e.g., Zoho CRM + WhatsApp)',
      'Trigger-based workflow (form submit, order placed, lead created)',
      'AI data transformation or classification',
      'Error alerting and retry logic',
      'Audit log for every run',
      '14-day post-launch support',
    ],
    cta: { label: 'Book a Free Strategy Call', modal: true as const, region: 'in' as const },
  },
  {
    name: 'Multi-System Workflow Platform',
    priceRange: '',
    description: '5–10 connected tools in a unified automation platform: your operations on autopilot.',
    features: [
      '5–10 system integrations',
      'Multi-step workflow chains with AI decision logic',
      'Zoho + Tally + Razorpay + WhatsApp + Shopify ready',
      'GST invoice generation and dispatch',
      'Duplicate detection and data validation',
      'Custom admin dashboard to monitor workflow runs',
      'Error recovery and alert routing',
      '30-day post-launch support',
    ],
    cta: { label: 'Get a Custom Quote', modal: true as const, region: 'in' as const },
    popular: true,
  },
  {
    name: 'Full Business Automation Suite',
    priceRange: '',
    description: 'End-to-end automation across sales, operations, finance, and support for scaling Indian businesses.',
    features: [
      'System integrations scoped per project brief',
      'AI document processing (invoices, contracts, KYC)',
      'Full sales pipeline automation (lead → close → invoice)',
      'Operations automation (order → fulfilment → accounting)',
      'Support ticket automation with AI routing',
      'Multi-branch or multi-location support',
      'Real-time operations dashboard',
      '90-day post-launch support + optimisation',
    ],
    cta: { label: 'Schedule an Enterprise Call', modal: true as const, region: 'in' as const },
  },
] as const;

const WORKFLOW_FAQ_CATEGORIES = [
  { key: 'basics', label: 'Automation Basics' },
  { key: 'tools', label: 'Tools & Integrations' },
  { key: 'india', label: 'India-Specific' },
  { key: 'process', label: 'Process & Timeline' },
  { key: 'pricing', label: 'Pricing & ROI' },
];

const WORKFLOW_FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'What is AI workflow automation and what makes it different from basic automation?',
    answer: "Basic automation (n8n, Make, Zapier) connects tools with if-this-then-that rules. It works for predictable, structured data but breaks when inputs are unstructured: a WhatsApp message in Hindi, a PDF invoice with variable formatting, an email that could be a complaint or a sales enquiry. AI workflow automation adds intelligence: the AI reads unstructured inputs, classifies them, extracts data, makes routing decisions, and drafts responses, then the workflow handles the execution. The result is automation that handles real-world messiness, not just clean API calls.",
  },
  {
    category: 'basics',
    question: 'What kinds of tasks can AI workflow automation replace?',
    answer: "The most common tasks we automate for Indian businesses: copying lead data from Facebook/Instagram ads to Zoho CRM, sending follow-up WhatsApp messages when a lead is created, generating and sending GST invoices when an order is placed on Shopify or Razorpay, pushing Tally entries when a payment clears, updating order status in CRM when Shiprocket ships a parcel, routing support tickets by issue type, sending onboarding WhatsApp sequences to new customers, and flagging overdue payments. If your team does it more than a few times a day using two or more tools, we can automate it.",
  },
  {
    category: 'basics',
    question: 'Can the AI handle unstructured data, like documents, emails, or WhatsApp messages?',
    answer: "Yes, this is where AI adds value over basic automation tools. The AI can read a PDF invoice and extract line items, GSTIN, and amounts into structured fields. It can classify an incoming WhatsApp message as a support query, sales lead, or payment confirmation and route accordingly. It can parse an email and determine whether it needs a human response or can be handled automatically. This document and message intelligence is what separates AI workflow automation from simple no-code tools.",
  },
  {
    category: 'basics',
    question: 'What if the workflow fails or receives bad data?',
    answer: "Every automation we build includes error handling, retry logic, and alert routing. If a Razorpay webhook arrives with missing data, the workflow logs the error, retries after a delay, and sends a Slack or email alert to your team if the issue persists. We never build automations that fail silently. Audit logs for every workflow run are accessible through the admin dashboard so you can investigate any anomaly.",
  },
  {
    category: 'tools',
    question: 'Which Indian business tools can you automate?',
    answer: "We automate the full Indian SMB stack: Zoho CRM, Zoho Books, Zoho Inventory, Zoho Desk, Tally ERP (via TallyPrime API), Shopify, WooCommerce, Commerceflo, Razorpay, PayU, Shiprocket, Delhivery, Freshdesk, LeadSquared, Google Workspace (Sheets, Drive, Calendar, Gmail), WhatsApp Business API (via Interakt, Wati, or AiSensy), Facebook and Instagram Lead Ads, 99acres and MagicBricks lead webhooks, and more. If your tool has an API or webhook, we connect to it.",
  },
  {
    category: 'tools',
    question: 'Can you connect tools that do not have native integrations?',
    answer: "Yes. For tools without APIs, like older Tally versions, we use the TallyPrime XML bridge, screen-level automation, or scheduled data exports. For tools with APIs that lack native connectors, we write custom API adapters. For tools that only support email or PDF output, we use AI document parsing to extract structured data. We have connected nearly every tool in the Indian SMB ecosystem over 12 years.",
  },
  {
    category: 'tools',
    question: 'Can you automate WhatsApp notifications and follow-ups?',
    answer: "Yes, WhatsApp automation is one of our most-requested workflows. We connect your triggers (Shopify order placed, Razorpay payment cleared, Zoho lead created, Shiprocket shipment dispatched) to WhatsApp Business API via Interakt, Wati, or AiSensy to send personalised template messages automatically. We handle template approval, opt-in compliance, and DND filtering.",
  },
  {
    category: 'tools',
    question: 'Do I need a developer to manage the automation after it is built?',
    answer: "No. We build an admin dashboard and documentation so your operations team can monitor workflow runs, view logs, update trigger conditions, and manage error queues without writing code. For changes to workflow logic or new system integrations, you can engage us on a maintenance retainer. Most day-to-day operations are handled through the dashboard with no technical knowledge required.",
  },
  {
    category: 'india',
    question: 'Can you automate GST invoice generation and Tally entries?',
    answer: "Yes, GST and Tally automation is one of our most common India deployments. We automate: GST invoice generation from Shopify or Razorpay order data (with correct HSN codes, tax rates, and GSTIN), pushing entries to Tally ERP in real time, sending invoices to customers via WhatsApp or email, and flagging mismatches for reconciliation. This eliminates 2–5 hours of daily data entry for most Indian SMBs.",
  },
  {
    category: 'india',
    question: 'How does the AI handle Indian document formats, like GST invoices and Aadhaar-based KYC?',
    answer: "We build India-specific document parsers that understand GST invoice formats, PAN card fields, Aadhaar data layouts, bank statement structures, and purchase order templates used by Indian manufacturers. The AI extracts structured data from these documents and pushes it into your CRM, ERP, or accounting system, eliminating manual re-entry and the errors that come with it.",
  },
  {
    category: 'india',
    question: 'Can the automation handle multi-language inputs, like WhatsApp messages in Hindi?',
    answer: "Yes. We configure the AI to detect the language of an incoming message, extract the relevant intent and data, process it normally, and respond in the same language. A WhatsApp message in Hindi asking for an order status is understood, processed, and responded to in Hindi: the same workflow handles English queries without any separate configuration.",
  },
  {
    category: 'india',
    question: 'Is our data safe when using API-level integrations?',
    answer: "All integrations use API-level access with the minimum permissions required for the specific automation task, we never request admin-level access unless operationally necessary. Data flows are encrypted in transit, and we do not store your business data on FactoryJet infrastructure. For BFSI, healthcare, and legal clients, we can deploy the automation entirely within your own cloud environment (AWS, GCP, or Azure) with zero third-party data exposure.",
  },
  {
    category: 'process',
    question: 'How long does it take to build a workflow automation?',
    answer: "A focused two-system automation (e.g., Razorpay payment → WhatsApp notification + Tally entry) goes live in 1–2 weeks. Multi-system platforms with 5+ integrations take 3–4 weeks. Full business automation suites take 6–8 weeks. Timeline depends on the number of integrations, complexity of AI logic, and availability of API access from your existing tools.",
  },
  {
    category: 'process',
    question: 'What do you need from us to start?',
    answer: "We need: API access or admin credentials for the tools we are automating (we provide a secure sharing method), a documented description of the current manual process (even a WhatsApp voice note walkthrough works), and a 45-minute discovery call to map edge cases. We handle all technical setup from there and return to you with a workflow design for approval before we build.",
  },
  {
    category: 'process',
    question: 'Can we automate just one process to start and expand later?',
    answer: "Yes, and this is how most clients start. We identify your highest-impact single automation (usually the one consuming the most manual hours), build and deploy it as a Workflow Starter, and measure the time savings. Most clients expand to a multi-system platform within 3–6 months once they see the ROI from the first automation.",
  },
  {
    category: 'process',
    question: 'What happens if our tools change or we switch platforms?',
    answer: "Because you own the code, you are never locked in. If you switch from Razorpay to PayU, or from Shiprocket to Delhivery, we update the integration connectors, typically a 1–3 day engagement on retainer. Workflow logic and AI components are independent of specific tool credentials, so changes are modular and low-risk.",
  },
  {
    category: 'pricing',
    question: 'How is the ROI calculated for a workflow automation project?',
    answer: "The simplest calculation: count the hours your team spends weekly on the manual task being automated, multiply by the hourly cost of that employee, and project across 12 months. Most Indian SMB automations eliminate 5–15 hours per week of admin work, saving ₹12,000–₹40,000/month in salary cost. At our fixed build price, payback is typically 4–6 months, and the automation runs indefinitely after that.",
  },
  {
    category: 'pricing',
    question: 'Are there ongoing costs after the automation is built?',
    answer: "The build fee covers the custom automation. Ongoing costs depend on what you use: n8n or Make subscription (₹2,000–₹6,000/month for their cloud-hosted option, or free if self-hosted), LLM API costs (₹3,000–₹12,000/month for AI-heavy automations), and WhatsApp BSP fees if WhatsApp notifications are included. FactoryJet charges nothing ongoing unless you choose a monthly maintenance retainer.",
  },
  {
    category: 'pricing',
    question: 'Can we get a fixed-price quote before starting?',
    answer: "Yes: every FactoryJet automation project starts with a free discovery call and a fixed-price proposal. We map the automation in detail, identify all integrations and edge cases, and give you a firm price before writing a single line of code. No hourly billing, no scope creep, no surprises. If the scope changes after we start, we discuss it openly and agree on any additional cost before proceeding.",
  },
  {
    category: 'pricing',
    question: 'Do you offer a maintenance retainer after delivery?',
    answer: "Yes: an optional monthly maintenance retainer covers workflow monitoring, error resolution, minor logic updates, and new integration connectors as your tools change. Most clients on the Full Business Automation Suite take the retainer for the first few months. Starter and multi-system clients often manage independently after the 30-day post-launch window.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: WORKFLOW_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

export default function AIWorkflowAutomationINPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script id="ai-workflow-automation-in-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="ai-workflow-automation-in-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
          { name: 'AI Workflow Automation', url: 'https://factoryjet.com/services/ai-agent-development/ai-workflow-automation' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
          { name: 'AI Workflow Automation', url: 'https://factoryjet.com/services/ai-agent-development/ai-workflow-automation' },
        ]} />

        <Hero
        formSlot={<HeroInlineForm region="in" source="services_ai_agent_development_ai_workflow_automation_hero" />}
          eyebrow="AI WORKFLOW AUTOMATION · INDIA"
          headline="Stop Re-Entering Data Between Zoho, Tally, and WhatsApp, Automate It Once"
          lead="Connect your Indian business tools into automated pipelines with AI. When a Razorpay payment clears, the Tally entry writes itself, the GST invoice sends itself, and the WhatsApp notification reaches your customer: all before you finish your chai. Fixed price. Live in 1–4 weeks."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'in' as const }}
          trustItems={[
            '500+ businesses served',
            'Zoho + Tally + Razorpay ready',
            'GST & WhatsApp automated',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p className="font-fj-mono font-medium uppercase text-[#B23E13]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>
                WORKFLOW IN ACTION: EVERY ORDER
              </p>
              <p className="mt-4 font-fj-display text-[1.875rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                From Shopify order to GST invoice to WhatsApp tracking, in under 60 seconds.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Shopify order placed → Shiprocket booking created automatically',
                  'Razorpay payment cleared → GST invoice generated + sent via WhatsApp',
                  'Shipment dispatched → Customer WhatsApp: tracking link sent in Hindi',
                  'Tally ERP → Sales entry created, no manual input needed',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#F05A28]/10 font-fj-mono text-[10px] font-bold text-[#B23E13]">
                      {i + 1}
                    </span>
                    <p className="font-fj-body text-[0.875rem] leading-[1.5] text-fj-neutral-600">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-fj-neutral-100 pt-6">
                <p className="font-fj-body text-[0.8125rem] text-fj-neutral-400">Runs 24/7, no manual intervention, no missed entries, no delayed invoices.</p>
              </div>
            </div>
          }
        />

        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ businesses. 12 years of building. One goal: your results."
          description="Websites designed and built for businesses across India, the US, the UK and the UAE: Shopify stores, B2B companies, and DTC brands. Fixed, transparent pricing, your codebase delivered in full, and a 7-day delivery guarantee."
        />

        <ServiceExplanation
          eyebrow="AI WORKFLOW AUTOMATION EXPLAINED"
          headline="Why AI Workflow Automation Is Different From Zapier or Manual n8n"
          lead="Basic automation tools connect systems with simple if-this-then-that rules. They break the moment data is unstructured: a Hindi WhatsApp message, a PDF invoice, an email with variable formatting. AI workflow automation adds intelligence to handle the real world."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {['Zoho CRM', 'Tally ERP', 'Razorpay', 'Shopify', 'WhatsApp API', 'GST invoices', 'Shiprocket', 'Freshdesk'].map((cap) => (
                  <span key={cap} className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#B23E13]" style={{ fontSize: '10px', letterSpacing: '0.10em' }}>{cap}</span>
                ))}
              </div>
              <p>
                If your team spends any part of their day copying data from one tool to another, leads from Facebook to Zoho, payments from Razorpay to Tally, orders from Shopify to Shiprocket, that is manual work that should not exist. Every hour spent on data entry is an hour not spent on sales, service, or growth. AI workflow automation connects your tools once and eliminates that repetition permanently.
              </p>
              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[
                  { value: '5–10h', label: 'weekly hours saved' },
                  { value: '95%+', label: 'error reduction' },
                  { value: '3–6mo', label: 'payback period' },
                ].map((b) => (
                  <div key={b.value} className="rounded-xl border border-fj-neutral-200 bg-white px-3 py-4 text-center shadow-sm">
                    <p className="font-fj-display font-bold text-[#F05A28]" style={{ fontSize: '1.375rem', lineHeight: 1, letterSpacing: '-0.03em' }}>{b.value}</p>
                    <p className="mt-1.5 font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '0.6875rem', letterSpacing: '0.07em' }}>{b.label}</p>
                  </div>
                ))}
              </div>
              <div className="border-l-2 border-[#F05A28] pl-5 py-1" aria-hidden>
                <p className="font-fj-display font-semibold text-fj-ink" style={{ fontSize: '1.1875rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}>
                  The automation runs while you sleep. The error rate drops to zero.
                </p>
              </div>
              <p>
                FactoryJet AI workflow automations are built on n8n, Make, or custom Node/Python backends, connected to the full Indian SMB tool stack: Zoho, Tally, Razorpay, Shopify, Commerceflo, WhatsApp, Shiprocket, and Freshdesk. The AI layer handles document parsing, language detection, classification, and data extraction, so the automation handles real-world inputs, not just clean API payloads.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>Manual vs. AI Automated</p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { scenario: 'New Razorpay payment', manual: 'Open Tally, find order, enter manually, 5 min per transaction', ai: 'Tally entry written automatically on webhook, 0 seconds' },
                  { scenario: 'Facebook lead ad submission', manual: 'Check ads manager, copy to Zoho, assign to rep, 10 min per lead', ai: 'Auto-added to Zoho, assigned, WhatsApp sent, <30 seconds' },
                  { scenario: 'Shopify order shipped', manual: 'Copy tracking from Shiprocket, paste into WhatsApp, 3 min per order', ai: 'WhatsApp with tracking link sent automatically on dispatch' },
                  { scenario: 'GST invoice needed', manual: 'Open Zoho Books, find order, generate, email, 8 min per invoice', ai: 'Invoice generated and WhatsApp/emailed on payment confirmation' },
                ].map((row) => (
                  <div key={row.scenario} className="px-7 py-4">
                    <p className="font-fj-mono font-semibold text-fj-ink" style={{ fontSize: '0.75rem', letterSpacing: '0.04em' }}>{row.scenario}</p>
                    <div className="mt-2 grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-fj-neutral-50 px-3 py-2">
                        <p className="font-fj-mono uppercase text-fj-neutral-400" style={{ fontSize: '0.625rem', letterSpacing: '0.08em' }}>Manual</p>
                        <p className="mt-1 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem' }}>{row.manual}</p>
                      </div>
                      <div className="rounded-lg border border-[rgba(240,90,40,0.2)] bg-[rgba(240,90,40,0.05)] px-3 py-2">
                        <p className="font-fj-mono uppercase text-[#B23E13]" style={{ fontSize: '0.625rem', letterSpacing: '0.08em' }}>AI Automated</p>
                        <p className="mt-1 font-fj-body text-fj-ink" style={{ fontSize: '0.8125rem' }}>{row.ai}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        <StrategicDarkSection
          eyebrow="THE PROBLEM"
          headline="Your team is doing the work your software should be doing"
          lead="The biggest hidden cost in most Indian SMBs is not a bad strategy, it is the hours spent every day copying data between tools that do not talk to each other. An AI workflow automation eliminates that entirely."
          pillars={[
            {
              icon: '📋',
              title: 'Data entry is eating your best employees',
              body: "Research shows 60% of Indian SMB working hours are spent on tasks that can be automated, copying leads to CRM, entering payments to Tally, sending order confirmations, updating stock levels. These are not strategic activities. Every hour spent on data entry is an hour your team is not selling, supporting customers, or growing the business. AI workflow automation gives those hours back permanently.",
            },
            {
              icon: '⚠️',
              title: 'Manual processes create errors that cost money',
              body: "A missed Tally entry means incorrect GST filings. A delayed Shiprocket booking means late deliveries and customer complaints. A lead that takes 4 hours to reach the CRM has already gone cold. Manual processes have a 1–5% error rate per transaction, at 100 transactions per day, that is 1–5 errors every day compounding into costly corrections, unhappy customers, and compliance risk.",
            },
            {
              icon: '📈',
              title: 'You cannot scale operations without automation',
              body: "Doubling your orders should not mean doubling your admin headcount. AI workflow automation scales with your business, 100 orders or 10,000 orders, the workflow runs the same. The businesses that automate operations early compound an operational advantage: they handle more volume with the same team, respond faster, make fewer errors, and have more data to make better decisions.",
            },
          ]}
        />

        <ServiceJourneyRow
          eyebrow="HOW WE BUILD"
          headline="From process audit to live automation in 1–4 weeks"
          stages={WORKFLOW_JOURNEY_STAGES}
          closingNote="Every automation is tested against real data before it runs on your live systems. You validate the outputs, we fix any edge case before go-live."
        />

        <ServiceExplanation
          eyebrow="TECHNOLOGY"
          headline="The technology stack behind your AI workflow automation"
          lead="We pick the right orchestration tool, AI model, and deployment environment for your business size, data sensitivity, and tool stack. Every architectural decision is documented and handed over."
          reverseOnDesktop
          body={
            <>
              <p>
                Every AI workflow automation has four layers: an orchestration engine (n8n, Make, or custom backend) that manages the flow, API connectors for each tool in your stack, an AI layer for intelligent processing of unstructured inputs, and a monitoring and error-handling layer that keeps the workflow reliable. We pick best-in-class tools for each layer and explain the reasoning.
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
                      { layer: 'Workflow Orchestration', tools: 'n8n, Make (Integromat), custom Node/Python' },
                      { layer: 'AI / LLM Layer', tools: 'Claude, GPT-4o (for document parsing, classification)' },
                      { layer: 'CRM / ERP', tools: 'Zoho CRM, Zoho Books, Tally ERP (TallyPrime API)' },
                      { layer: 'E-Commerce', tools: 'Shopify, WooCommerce, Commerceflo, Unicommerce' },
                      { layer: 'Payments', tools: 'Razorpay, PayU, Cashfree webhooks' },
                      { layer: 'Logistics', tools: 'Shiprocket, Delhivery, Blue Dart APIs' },
                      { layer: 'Communication', tools: 'WhatsApp Business API, email (SMTP / Zoho Mail)' },
                    ].map((row) => (
                      <tr key={row.layer}>
                        <td className="px-5 py-3 font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.8125rem' }}>{row.layer}</td>
                        <td className="px-5 py-3 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem' }}>{row.tools}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>Six Automation Types We Build</p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { name: 'Lead Capture & CRM Automation', desc: 'Facebook/Instagram ads → Zoho CRM → WhatsApp follow-up → rep assignment. Under 30 seconds per lead.' },
                  { name: 'Order-to-Fulfilment Automation', desc: 'Shopify → Shiprocket → tracking WhatsApp → Tally entry. Every order processed without manual intervention.' },
                  { name: 'GST Invoice Automation', desc: 'Razorpay payment → Zoho Books invoice with GST → WhatsApp/email dispatch → Tally accounting entry.' },
                  { name: 'Document Processing AI', desc: 'PDF invoices, KYC documents, and purchase orders parsed by AI → data pushed to CRM, ERP, or Google Sheets.' },
                  { name: 'Support Ticket Routing', desc: 'Inbound WhatsApp/email → AI classifies issue type → routed to correct team → SLA timer started in Freshdesk.' },
                  { name: 'Multi-System Data Sync', desc: 'Bi-directional sync between Shopify, Zoho Inventory, and Tally | stock levels, prices, and order status always in sync.' },
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

        <section className="py-12 md:py-16" style={{ backgroundColor: '#FAFAF7', borderTop: '1.5px solid rgba(240,90,40,0.18)', borderBottom: '1.5px solid rgba(240,90,40,0.18)' }}>
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {WORKFLOW_STATS.map((stat) => (
                <div key={stat.value}>
                  {stat.categoryLabel && (
                    <div className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-fj-mono font-bold uppercase" style={{ fontSize: '9px', letterSpacing: '0.13em', color: '#B23E13', background: 'rgba(240,90,40,0.06)', border: '1px solid rgba(240,90,40,0.22)' }}>
                      <span className="inline-block h-1 w-1 rounded-full" style={{ backgroundColor: '#F05A28' }} aria-hidden="true" />
                      {stat.categoryLabel}
                    </div>
                  )}
                  <p className="font-fj-display font-bold" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', lineHeight: 1, letterSpacing: '-0.04em', color: '#F05A28' }}>{stat.value}</p>
                  <p className="mt-3 font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.9375rem', lineHeight: 1.5 }}>{stat.label}</p>
                  {stat.microcopy && <p className="mt-1.5 font-fj-body text-fj-neutral-400" style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}>{stat.microcopy}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <CityContextSection
          eyebrow="INDIA AUTOMATION MARKET"
          headline="60% of Indian SMB working hours are spent on tasks that should not require a human."
          leadParagraphs={[
            "The Indian business stack is uniquely fragmented: Zoho for CRM, Tally for accounting, Shopify or WooCommerce for e-commerce, Razorpay for payments, Shiprocket for logistics, WhatsApp for communication, none of these talk to each other by default. The gap between each system is filled by a human copying and pasting data, every hour of every working day.",
            "FactoryJet has been building integrations for Indian businesses. We know the Tally ERP XML structure, the Zoho webhook payloads, the Razorpay signature verification quirks, and the Shiprocket rate-card API edge cases. We build automations that work with the real Indian tool stack, not the clean US SaaS stack that documentation assumes.",
          ]}
          bodySlot={
            <>
              <div className="border-l-2 border-[#F05A28] py-1 pl-5" aria-hidden="true">
                <p className="font-fj-display font-semibold text-fj-ink" style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}>
                  Every manual Tally entry is a workflow that should have been automated.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {['D2C E-Commerce', 'Real Estate', 'Manufacturing', 'NBFC / Finance', 'Healthcare', 'Professional Services'].map((ind) => (
                  <span key={ind} className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-medium text-[#B23E13]" style={{ fontSize: '10px', letterSpacing: '0.08em' }}>{ind}</span>
                ))}
              </div>
            </>
          }
          stats={WORKFLOW_MARKET_STATS}
        />

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. No-Code Tool vs. IT Outsourcing vs. Manual Process"
          lead="Fixed price, full code ownership, Indian tool stack built-in: the honest comparison."
          pullQuote={{ stat: 'Fixed price', caption: 'AI workflow automation connecting your two highest-impact systems, with error handling, audit log, and full code ownership. No ongoing fee to FactoryJet.' }}
          columns={WORKFLOW_COMPARISON_COLUMNS}
          rows={WORKFLOW_COMPARISON_ROWS}
          footer="Prices reflect typical Indian market rates as of 2025. FactoryJet fixed-price contracts available for all tiers."
        />

        <IndustriesGrid variant="cards"
          eyebrow="WHO WE BUILD FOR"
          headline="AI workflow automation for every major Indian industry"
          lead="Every industry has different tools, data formats, and compliance requirements. We build for yours."
          sectors={WORKFLOW_INDUSTRIES}
        />


        <GetFreeQuoteCTA />
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What Indian founders say after we automate their operations"
        />

        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything to Know Before You Automate"
          lead="The questions we answer on every Indian workflow automation discovery call, answered honestly, with examples."
          categories={WORKFLOW_FAQ_CATEGORIES}
          items={WORKFLOW_FAQ_ITEMS}
        />

        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="GET STARTED"
            headline="Book a Free Automation Discovery Call"
            sub="Tell us your most painful manual process, usually Tally data entry, lead-to-CRM copying, or order fulfilment notifications. We will map out exactly how to automate it and give you a fixed-price estimate before writing a single line of code."
            primaryCta={{ label: 'Book a Free Discovery Call', modal: true, region: 'in' }}
            secondaryCta={{ label: 'WhatsApp Us', href: 'https://wa.me/919699977699' }}
            objectionHandler="Fixed price. Full code ownership. Zoho + Tally + Razorpay + WhatsApp ready. 500+ businesses served."
          />
        </div>

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
