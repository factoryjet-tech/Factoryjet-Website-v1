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
  title: 'n8n & Make Workflow Automation for US Businesses | FactoryJet',
  description:
    'Workflow automation agents for US businesses. Connect HubSpot, QuickBooks, Stripe and Slack with n8n, Make or a custom build. Fixed price. Live in 1–4 weeks.',
  keywords: [
    'n8n automation agency',
    'n8n automation consultant',
    'AI workflow automation US',
    'workflow automation agents',
    'business process automation for US businesses',
    'HubSpot workflow automation',
    'QuickBooks automation',
    'Make.com automation consultant',
    'Zapier alternative for small business',
    'AI automation for US SMBs',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'n8n & Make Workflow Automation for US Businesses | FactoryJet',
    description: 'Custom AI workflow automation agents for US businesses. Connect HubSpot, QuickBooks, Stripe, Shopify, Slack, and cross-system data flows. Fixed price.',
    url: 'https://factoryjet.com/services/ai-agent-development/ai-workflow-automation',
    images: [{ url: 'https://factoryjet.com/images/us/services/hero-ai-workflow.webp', width: 1200, height: 800, alt: 'FactoryJet AI workflow automation services' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'n8n & Make Workflow Automation for US Businesses | FactoryJet',
    description: 'Automate HubSpot, QuickBooks, Stripe, and Slack workflows. Fixed price. Live in 1–4 weeks.',
    images: ['https://factoryjet.com/images/us/services/hero-ai-workflow.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/services/ai-agent-development/ai-workflow-automation' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

// Freshness signal. Benchmark: 56% of Google-AI-Overview-cited pages carry
// dateModified; these pages carried none. Keep this honest: bump it when the
// page's content actually changes, not on every unrelated deploy.
const PAGE_MODIFIED = '2026-08-17';
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
  name: 'AI Workflow Automation Agent Development',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  description: 'Custom AI workflow automation for US businesses, connect HubSpot, QuickBooks, Shopify, Stripe, Slack, and 20+ tools into automated pipelines with AI decision logic, built on n8n, Make, or custom code.',
  areaServed: 'US',
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
    description: 'We design the data flow: which system triggers the workflow, what transformations happen, which AI decisions are needed, how errors are caught, and how the audit log is maintained. You sign off before we build.',
  },
  {
    number: '03',
    title: 'Build & Integrate',
    description: 'We build the automation on n8n, Make, or a custom Python/Node backend, connecting HubSpot or Salesforce, QuickBooks or Xero, Shopify, Stripe, Slack, and Google Workspace or Microsoft 365 through APIs and webhooks. Every integration is tested in a sandbox first.',
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
    label: 'of weekly manual admin time eliminated per automation, typical for a US SMB back office',
    microcopy: 'FactoryJet client data',
    categoryLabel: 'TIME SAVED',
  },
  {
    value: '95%+',
    label: 'reduction in manual data-entry errors across CRM, accounting, and e-commerce systems',
    microcopy: 'across FactoryJet automation deployments',
    categoryLabel: 'ERROR REDUCTION',
  },
  {
    value: '3–6 mo',
    label: 'payback period for most US SMB workflow automation projects',
    microcopy: 'based on salary cost of the manual work replaced',
    categoryLabel: 'PAYBACK PERIOD',
  },
];

const WORKFLOW_MARKET_STATS = [
  {
    value: '60%',
    label: 'of occupations have at least a third of their activities open to automation, which is why we automate steps rather than whole jobs',
    sourceUrl: 'https://www.mckinsey.com/featured-insights/future-of-work/jobs-lost-jobs-gained-what-the-future-of-work-will-mean-for-jobs-skills-and-wages',
    sourceLabel: 'McKinsey',
  },
  {
    value: 'Under 5%',
    label: 'of occupations consist entirely of activities that can be fully automated, which is why a person stays in the loop by design',
    sourceUrl: 'https://www.mckinsey.com/featured-insights/future-of-work/jobs-lost-jobs-gained-what-the-future-of-work-will-mean-for-jobs-skills-and-wages',
    sourceLabel: 'McKinsey',
  },
  {
    value: '500+',
    label: 'businesses served by FactoryJet across the US, UK, UAE, and Asia',
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
    feature: 'What it costs to start',
    values: [
      'Fixed price after a scoping call',
      'Monthly tool subscription, and you build it yourself',
      'Project-based, slow, open-ended',
      'Nothing on paper, paid in salary hours',
    ],
  },
  {
    feature: 'HubSpot + QuickBooks + Stripe integration',
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
    feature: 'Invoice and billing automation',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="nc" kind="partial" />,
      <CompareIcon key="it" kind="yes" />,
      <CompareIcon key="mn" kind="no" />,
    ],
  },
  {
    feature: 'Slack, email and SMS notifications',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="nc" kind="partial" />,
      <CompareIcon key="it" kind="partial" />,
      <CompareIcon key="mn" kind="no" />,
    ],
  },
  {
    feature: 'Error handling and audit log',
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
    feature: '500+ SMB projects delivered',
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
    description: 'Order-to-fulfillment automation: Shopify order → ShipStation label booked → tracking email and SMS sent → QuickBooks entry written → HubSpot record updated. Runs in under 60 seconds without anyone touching a keyboard.',
    example: 'D2C brands eliminate 3–6 hours of daily manual order processing within one week of deployment.',
  },
  {
    name: 'Real Estate',
    description: 'Lead intake automation from Zillow, Realtor.com, and Facebook, auto-routed into HubSpot by market (Austin, Dallas, Phoenix), showing booked to Google Calendar, follow-up text and email sent, and an agent assigned automatically.',
    example: 'Brokerages cut lead response time from 4+ hours to under 3 minutes.',
  },
  {
    name: 'Manufacturing & Distribution',
    description: 'Purchase order to QuickBooks entry automation, B2B orders received by email and parsed by AI, invoice generation and dispatch, and inventory sync between Shopify and your ERP: all without manual re-entry.',
    example: 'Distributors save 8–12 hours per week of billing and inventory data entry.',
  },
  {
    name: 'Financial Services & Lending',
    description: 'Loan application intake from web forms → document collection through a secure upload link → credit bureau API check → HubSpot lead scoring → assigned to a loan officer with full context, with consent flags carried through every step.',
    example: 'Lenders process more applications with the same team once intake stops being a manual queue.',
  },
  {
    name: 'Healthcare & Clinics',
    description: 'Appointment booking from your website → provider availability check → confirmation by text and email → reminder sequence → post-visit feedback request → CRM update. Patient data stays in systems you already have a BAA for.',
    example: 'Clinics recover 2–4 hours of front-desk time per day after automation.',
  },
  {
    name: 'Professional Services',
    description: 'Client onboarding automation: DocuSign contract signed → HubSpot project created → Google Drive folder set up → invoice raised in QuickBooks → onboarding email sequence started. New clients set up in under 5 minutes.',
    example: 'Consulting firms onboard new clients 5× faster with automated workflows.',
  },
];

const WORKFLOW_FAQ_CATEGORIES = [
  { key: 'basics', label: 'Automation Basics' },
  { key: 'tools', label: 'Tools & Integrations' },
  { key: 'compliance', label: 'Compliance & Data' },
  { key: 'process', label: 'Process & Timeline' },
  { key: 'pricing', label: 'Pricing & ROI' },
];

const WORKFLOW_FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'What is AI workflow automation and what makes it different from basic automation?',
    answer: "Basic automation (n8n, Make, Zapier) connects tools with if-this-then-that rules. It works for predictable, structured data but breaks when inputs are unstructured: an email that could be a complaint or a purchase order, a PDF invoice laid out differently every month, a voicemail transcript. AI workflow automation adds a decision layer: the AI reads the unstructured input, classifies it, extracts the data, decides where it goes, and drafts a response, then the workflow handles execution. The result is automation that copes with real-world mess, not just clean API calls.",
  },
  {
    category: 'basics',
    question: 'What kinds of tasks can AI workflow automation replace?',
    answer: "The most common tasks we automate for US businesses: copying lead data from Google and Meta ads into HubSpot or Salesforce, sending the first follow-up email or text the moment a lead is created, generating and sending an invoice when a Shopify or Stripe order clears, pushing entries into QuickBooks or Xero, updating order status when ShipStation dispatches a parcel, routing support tickets by issue type, running onboarding email sequences for new customers, and flagging overdue invoices. If your team does it more than a few times a day across two or more tools, we can automate it.",
  },
  {
    category: 'basics',
    question: 'Can the AI handle unstructured data, like documents and emails?',
    answer: "Yes, and this is where AI adds value over basic automation tools. The AI can read a PDF invoice and pull line items, PO number, and totals into structured fields. It can classify an inbound email as a support question, a sales inquiry, or a payment confirmation and route each one differently. It can read a contract and flag the renewal date. That document and message intelligence is what separates AI workflow automation from a plain no-code tool.",
  },
  {
    category: 'basics',
    question: 'What if the workflow fails or receives bad data?',
    answer: "Every automation we build includes error handling, retry logic, and alert routing. If a Stripe webhook arrives with a missing field, the workflow logs the error, retries after a delay, and posts a Slack or email alert to your team if the problem persists. We never build automations that fail silently. Audit logs for every workflow run are visible in the admin dashboard so you can investigate any anomaly.",
  },
  {
    category: 'tools',
    question: 'Which US business tools can you automate?',
    answer: "We work with the stack most US businesses actually run: HubSpot, Salesforce and Pipedrive, QuickBooks Online, Xero and Bill.com, Google Workspace and Microsoft 365, Slack, Shopify, WooCommerce and BigCommerce, Commerceflo, Stripe, Square and PayPal, ShipStation and EasyPost, Zendesk and Freshdesk, DocuSign, Airtable, Calendly, Twilio for SMS, Google and Meta lead ads, and Zillow and Realtor.com lead webhooks. If your tool has an API or a webhook, we connect to it.",
  },
  {
    category: 'tools',
    question: 'Do you build on n8n, Make, or Zapier?',
    answer: "All three, and custom code when that is the right call. Zapier is the fastest to stand up and the most expensive at volume. Make handles branching logic and visual debugging better. n8n is our usual default because it can be self-hosted, the per-run cost is close to zero, and you keep the workflow files. For anything with heavy AI logic or strict data-residency requirements we write a custom Node or Python service instead. We tell you which one we picked and why, before we build.",
  },
  {
    category: 'tools',
    question: 'Can you connect tools that do not have native integrations?',
    answer: "Yes. For tools with an API but no ready-made connector, we write a custom adapter. For legacy on-premise software, we use scheduled exports, file drops, or a small local bridge service. For tools that only produce email or PDF output, we use AI document parsing to extract structured data. Over 12 years of integration work we have found very little that is genuinely un-connectable.",
  },
  {
    category: 'tools',
    question: 'Can you automate Slack, email and SMS notifications?',
    answer: "Yes, and for most US teams that is where notifications belong. Order placed, payment cleared, lead created, shipment dispatched, SLA about to breach: each can post into a Slack channel, send a templated email, or fire an SMS through Twilio. WhatsApp is available too if your customers actually use it, it is just rarely the default channel here. Any outbound texting we build follows TCPA rules on consent, permitted hours, and opt-out handling.",
  },
  {
    category: 'tools',
    question: 'Do I need a developer to manage the automation after it is built?',
    answer: "No. We build an admin dashboard and documentation so your operations team can monitor workflow runs, view logs, update trigger conditions, and manage error queues without writing code. For changes to workflow logic or new system integrations, you can engage us on a maintenance retainer. Most day-to-day operations are handled through the dashboard with no technical knowledge required.",
  },
  {
    category: 'compliance',
    question: 'How do you handle privacy rules like CCPA and CPRA?',
    answer: "We build the automation to respect the rules that apply to you rather than claim a certification we do not hold. In practice that means only the fields the workflow actually needs get moved, deletion and access requests can be honored because we know exactly which systems hold a given record, and consent flags travel with the contact instead of being dropped at the first integration. If you are subject to CCPA or CPRA, we map the data flow with you before we build.",
  },
  {
    category: 'compliance',
    question: 'Can you work with healthcare data?',
    answer: "We can, with the limits stated plainly. For clinics we automate scheduling, reminders, intake forms, and billing handoffs, and we keep protected health information inside systems you already hold a business associate agreement for rather than routing it through a third-party automation cloud. Where HIPAA applies, we deploy the workflow inside your own cloud account. We do not claim to be a certified vendor, because no such certification exists.",
  },
  {
    category: 'compliance',
    question: 'What rules apply to automated text messages?',
    answer: "US outbound texting is governed by the TCPA. That means documented consent before the first message, no sending outside permitted hours in the recipient's own time zone, a working opt-out on every message, and a suppression list the workflow honors automatically. We build those checks into the workflow itself, so the rule cannot be broken by someone on your team forgetting.",
  },
  {
    category: 'compliance',
    question: 'Can the automation handle Spanish-language inputs?',
    answer: "Yes. We configure the AI to detect the language of an incoming message, extract the intent and data, process it normally, and reply in the same language. A Spanish message asking for an order status is understood, processed, and answered in Spanish, and the same workflow handles English queries without any separate configuration.",
  },
  {
    category: 'compliance',
    question: 'Is our data safe when using API-level integrations?',
    answer: "All integrations use API-level access with the minimum permissions the specific automation task requires, we never request admin-level access unless it is operationally necessary. Data flows are encrypted in transit, and we do not store your business data on FactoryJet infrastructure. For finance, healthcare, and legal clients, we can deploy the automation entirely inside your own cloud environment (AWS, GCP, or Azure) with no third-party data exposure.",
  },
  {
    category: 'process',
    question: 'How long does it take to build a workflow automation?',
    answer: "A focused two-system automation (for example, Stripe payment → invoice raised + QuickBooks entry) goes live in 1–2 weeks. Multi-system platforms with 5+ integrations take 3–4 weeks. Full business automation suites take 6–8 weeks. Timeline depends on the number of integrations, the complexity of the AI logic, and how quickly we get API access to your existing tools.",
  },
  {
    category: 'process',
    question: 'What do you need from us to start?',
    answer: "We need API access or admin credentials for the tools we are automating (we provide a secure sharing method), a description of the current manual process (a screen recording of someone doing it works perfectly), and a 45-minute discovery call to map the edge cases. We handle all technical setup from there and come back to you with a workflow design for approval before we build.",
  },
  {
    category: 'process',
    question: 'Can we automate just one process to start and expand later?',
    answer: "Yes, and this is how most clients start. We identify your highest-impact single automation (usually the one eating the most manual hours), build and deploy it as a Workflow Starter, and measure the time saved. Most clients expand to a multi-system platform within 3–6 months once they see the return from the first automation.",
  },
  {
    category: 'process',
    question: 'What happens if our tools change or we switch platforms?',
    answer: "Because you own the code, you are never locked in. If you move from Stripe to Square, or from ShipStation to EasyPost, we swap the integration connector, typically a 1–3 day engagement on retainer. Workflow logic and AI components are independent of specific tool credentials, so changes stay modular and low-risk.",
  },
  {
    category: 'pricing',
    question: 'How is the ROI calculated for a workflow automation project?',
    answer: "The simplest calculation: count the hours your team spends each week on the manual task being automated, multiply by the loaded hourly cost of the person doing it, and project across 12 months. Most US SMB automations we build take 5–15 hours a week of admin work off the team. Against a fixed build price agreed after the scoping call, payback usually lands within the first few months, and the automation keeps running after that.",
  },
  {
    category: 'pricing',
    question: 'Are there ongoing costs after the automation is built?',
    answer: "The build fee covers the custom automation. What continues depends on what you use: an n8n or Make subscription if you want their hosted option (close to nothing if we self-host n8n for you), LLM API usage for the AI-heavy steps, and carrier fees if SMS is part of the workflow. FactoryJet charges nothing ongoing unless you choose a monthly maintenance retainer.",
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

export default function AIWorkflowAutomationUSPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script id="ai-workflow-automation-us-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="ai-workflow-automation-us-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <SiteHeader
        locale="us"
        navLinks={[
          { label: 'Services', href: '/services' },
          { label: 'AI Agents', href: '/services/ai-agent-development' },
          { label: 'Portfolio', href: '/portfolio' },          { label: 'Contact', modal: true, region: 'us' },
        ]}
        cta={{ label: 'Book a Free Call', modal: true, region: 'us' }}
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
        formSlot={<HeroInlineForm region="us" source="services_ai_agent_development_ai_workflow_automation_hero" />}
          eyebrow="AI WORKFLOW AUTOMATION · UNITED STATES"
          headline="Stop Re-Entering Data Between HubSpot, QuickBooks, and Slack, Automate It Once"
          lead="Connect the tools your business already runs into automated pipelines with an AI decision layer. When a Stripe payment clears, the QuickBooks entry writes itself, the invoice sends itself, and Slack tells your team, before anyone opens a spreadsheet. Fixed price after a scoping call. Live in 1–4 weeks."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'us' as const }}
          trustItems={[
            '500+ businesses served',
            'HubSpot + QuickBooks + Stripe ready',
            'Built on n8n, Make, or custom code',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p className="font-fj-mono font-medium uppercase text-[#B23E13]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>
                WORKFLOW IN ACTION: EVERY ORDER
              </p>
              <p className="mt-4 font-fj-display text-[1.875rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                From Shopify order to invoice to tracking notification, in under 60 seconds.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Shopify order placed → ShipStation label created automatically',
                  'Stripe payment cleared → invoice generated and emailed to the customer',
                  'Shipment dispatched → tracking link sent by email and SMS',
                  'QuickBooks → sales entry created, no manual input needed',
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

        <LogoBar tagline="Trusted by 500+ businesses across the US, UK, UAE, and Asia" />

        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ businesses. 12 years of building. One goal: your results."
          description="Automations, agents, and websites built for businesses across the US, the UK, the UAE and Asia: Shopify stores, B2B companies, and DTC brands. Fixed, transparent pricing, your codebase delivered in full, and a 7-day delivery guarantee."
        />

        <ServiceExplanation
          eyebrow="AI WORKFLOW AUTOMATION EXPLAINED"
          headline="Why AI Workflow Automation Is Different From Zapier or a DIY n8n Build"
          lead="Basic automation tools connect systems with simple if-this-then-that rules. They break the moment data is unstructured: an email with no subject line, a PDF invoice laid out differently every month, a message in Spanish. AI workflow automation adds a decision layer that handles the real world."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {['HubSpot', 'QuickBooks', 'Stripe', 'Shopify', 'Slack', 'Google Workspace', 'ShipStation', 'Zendesk'].map((cap) => (
                  <span key={cap} className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#B23E13]" style={{ fontSize: '10px', letterSpacing: '0.10em' }}>{cap}</span>
                ))}
              </div>
              <p>
                If your team spends any part of their day copying data from one tool to another, leads from Meta into HubSpot, payments from Stripe into QuickBooks, orders from Shopify into ShipStation, that is manual work that should not exist. Every hour spent on data entry is an hour not spent on sales, service, or growth. AI workflow automation connects your tools once and eliminates that repetition permanently.
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
                FactoryJet AI workflow automations are built on n8n, Make, or a custom Node or Python backend, connected to the stack US businesses actually run: HubSpot or Salesforce, QuickBooks or Xero, Stripe, Shopify, Slack, Google Workspace or Microsoft 365, ShipStation, and Zendesk. The AI layer handles document parsing, language detection, classification, and data extraction, so the automation copes with real-world inputs, not just clean API payloads.
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
                  { scenario: 'New Stripe payment', manual: 'Open QuickBooks, find the order, key it in, 5 min per transaction', ai: 'QuickBooks entry written automatically on webhook, 0 seconds' },
                  { scenario: 'Meta lead ad submission', manual: 'Check Ads Manager, copy into HubSpot, assign a rep, 10 min per lead', ai: 'Auto-added to HubSpot, assigned, first email sent, <30 seconds' },
                  { scenario: 'Shopify order shipped', manual: 'Copy tracking from ShipStation, paste into an email, 3 min per order', ai: 'Tracking email and SMS sent automatically on dispatch' },
                  { scenario: 'Invoice needed', manual: 'Open QuickBooks, find the order, generate, email, 8 min per invoice', ai: 'Invoice generated and emailed on payment confirmation' },
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
          lead="The biggest hidden cost in most US small and mid-sized businesses is not a bad strategy, it is the hours spent every day copying data between tools that do not talk to each other. An AI workflow automation eliminates that entirely."
          pillars={[
            {
              icon: '📋',
              title: 'Data entry is eating your best employees',
              body: "McKinsey's estimate is that around 60% of occupations have at least a third of their activities open to automation: copying leads into the CRM, keying payments into accounting, sending order confirmations, updating stock levels. None of that is strategic work. Every hour spent on data entry is an hour your team is not selling, supporting customers, or growing the business. AI workflow automation gives those hours back permanently.",
            },
            {
              icon: '⚠️',
              title: 'Manual processes create errors that cost money',
              body: "A missed QuickBooks entry means a month-end close that does not reconcile. A delayed shipping label means a late delivery and a support ticket. A lead that takes 4 hours to reach the CRM has already gone cold. Manual processes have a 1–5% error rate per transaction, at 100 transactions per day, that is 1–5 errors every day compounding into costly corrections, unhappy customers, and audit risk.",
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
                      { layer: 'Workflow Orchestration', tools: 'n8n, Make, Zapier, custom Node/Python' },
                      { layer: 'AI / LLM Layer', tools: 'Claude, GPT-4o (for document parsing, classification)' },
                      { layer: 'CRM', tools: 'HubSpot, Salesforce, Pipedrive' },
                      { layer: 'Accounting / Finance', tools: 'QuickBooks Online, Xero, Bill.com' },
                      { layer: 'E-Commerce', tools: 'Shopify, WooCommerce, BigCommerce, Commerceflo' },
                      { layer: 'Payments', tools: 'Stripe, Square, PayPal, Authorize.net webhooks' },
                      { layer: 'Logistics', tools: 'ShipStation, EasyPost, UPS and FedEx APIs' },
                      { layer: 'Communication', tools: 'Slack, email (Google Workspace / Microsoft 365), SMS via Twilio' },
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
                  { name: 'Lead Capture & CRM Automation', desc: 'Google and Meta ads → HubSpot → first follow-up email and text → rep assignment. Under 30 seconds per lead.' },
                  { name: 'Order-to-Fulfillment Automation', desc: 'Shopify → ShipStation → tracking notification → QuickBooks entry. Every order processed without manual intervention.' },
                  { name: 'Invoice & Billing Automation', desc: 'Stripe payment → invoice raised in QuickBooks or Xero → emailed to the customer → reconciliation entry created.' },
                  { name: 'Document Processing AI', desc: 'PDF invoices, vendor W-9s, certificates of insurance, and purchase orders parsed by AI → data pushed to CRM, accounting, or Google Sheets.' },
                  { name: 'Support Ticket Routing', desc: 'Inbound email or chat → AI classifies issue type → routed to correct team → SLA timer started in Zendesk.' },
                  { name: 'Multi-System Data Sync', desc: 'Bi-directional sync between Shopify, your inventory system, and QuickBooks | stock levels, prices, and order status always in agreement.' },
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
          eyebrow="US AUTOMATION MARKET"
          headline="Most US business software stacks were bought one tool at a time, and nothing in between them talks."
          leadParagraphs={[
            "The typical US small business stack is assembled piecemeal: HubSpot or Salesforce for CRM, QuickBooks or Xero for accounting, Shopify or WooCommerce for the storefront, Stripe for payments, ShipStation for logistics, Slack and email for everything else. None of it talks to the rest by default. The gap between each system gets filled by a person copying and pasting, every hour of every working day.",
            "FactoryJet builds those connections for a living. We know how Stripe signs its webhooks, where the HubSpot associations API gets awkward, what the QuickBooks Online sandbox will and will not let you post, and how ShipStation rate quoting behaves under load. We build automations against the tools as they actually behave, not as the documentation describes them.",
          ]}
          bodySlot={
            <>
              <div className="border-l-2 border-[#F05A28] py-1 pl-5" aria-hidden="true">
                <p className="font-fj-display font-semibold text-fj-ink" style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}>
                  Every manual accounting entry is a workflow that should have been automated.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {['D2C E-Commerce', 'Real Estate', 'Manufacturing', 'Financial Services', 'Healthcare', 'Professional Services'].map((ind) => (
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
          lead="Fixed price, full code ownership, and the US SMB tool stack built in: the honest comparison."
          pullQuote={{ stat: 'Fixed price', caption: 'AI workflow automation connecting your two highest-impact systems, with error handling, audit log, and full code ownership. No ongoing fee to FactoryJet.' }}
          columns={WORKFLOW_COMPARISON_COLUMNS}
          rows={WORKFLOW_COMPARISON_ROWS}
          footer="Comparison reflects typical US market options as of 2026. FactoryJet quotes a fixed price after a scoping call, for every tier."
        />

        <IndustriesGrid variant="cards"
          eyebrow="WHO WE BUILD FOR"
          headline="AI workflow automation for every major US industry"
          lead="Every industry has different tools, data formats, and compliance requirements. We build for yours."
          sectors={WORKFLOW_INDUSTRIES}
        />


        <GetFreeQuoteCTA />
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What US founders say after we automate their operations"
        />

        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything to Know Before You Automate"
          lead="The questions we answer on every US workflow automation discovery call, answered honestly, with examples."
          categories={WORKFLOW_FAQ_CATEGORIES}
          items={WORKFLOW_FAQ_ITEMS}
        />

        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="GET STARTED"
            headline="Book a Free Automation Discovery Call"
            sub="Tell us your most painful manual process, usually accounting data entry, lead-to-CRM copying, or order and shipping notifications. We will map out exactly how to automate it and give you a fixed-price estimate before writing a single line of code."
            primaryCta={{ label: 'Book a Free Discovery Call', modal: true, region: 'us' }}
            secondaryCta={{ label: 'See All AI Agent Services', href: '/services/ai-agent-development' }}
            objectionHandler="Fixed price after a scoping call. Full code ownership. HubSpot + QuickBooks + Stripe + Slack ready. 500+ businesses served."
          />
        </div>

      </main>

      <SiteFooter locale="us" />
    </>
  );
}
