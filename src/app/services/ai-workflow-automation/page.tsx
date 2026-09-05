import type { Metadata } from 'next';
import Image from 'next/image';
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
import AiAgentRoiCalculator from '@/components/ai-agent/AiAgentRoiCalculator';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'AI Workflow Automation USA | Process AI | FactoryJet',
  description:
    'Custom AI workflow automation for US businesses. Automate lead follow-up, invoice processing, and data sync across your tools. Get a quote.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Workflow Automation Services USA | FactoryJet',
    description:
      'Custom AI workflow automation for US SMBs. Built on n8n, Make.com, and LangChain. fixed-price, milestone-paid. Fast delivery.',
    url: 'https://factoryjet.com/services/ai-workflow-automation',
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
      'Custom AI workflow automation for US small businesses. fixed-price. 2-4 week delivery. Get a quote.',
    images: ['https://factoryjet.com/images/us/services/hero-ai-workflow.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-workflow-automation',
    languages: usServiceAlternates['ai-workflow-automation'],
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
const PAGE_MODIFIED = '2026-09-04';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-workflow-automation#webpage',
  url: 'https://factoryjet.com/services/ai-workflow-automation',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Workflow Automation Services',
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
    'Custom AI workflow automation for US small and medium businesses. Specializing in lead nurturing automation, invoice processing, document workflows, cross-system data sync, and reporting automation built on n8n, Make.com, and LangChain.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Starter Workflow Automation',
      description: 'Single focused workflow automation for one high-impact business process.',
    },
    {
      '@type': 'Offer',
      name: 'Growth Automation Platform',
      description: 'Multi-workflow automation connecting 3-5 systems with operations dashboard.',
    },
    {
      '@type': 'Offer',
      name: 'Enterprise Automation System',
      description: 'Complex multi-department automation with custom business logic and compliance.',
    },
  ],
  
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet builds your AI workflow automation solution',
  description: 'Our process for delivering this work, typically 2 to 4 weeks depending on scope.',
  // Aligned 2026-08-04 to the timeline this page actually states (2 to 4 weeks).
  // 7-day delivery is real for standard website builds, but this page's own
  // process section says 2 to 4 weeks, so P7D contradicted the visible content.
  totalTime: 'P28D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Stage 1 | Discovery & Use-Case Mapping',
      text: 'We audit your workflows to find high-ROI opportunities. We define the exact scope of your solution.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Stage 2 | Architecture & Data Planning',
      text: 'We design the AI architecture, select models, and map your data sources cleanly.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Stage 3 | Build & Integrate',
      text: 'We build your automation workflows and connect them directly to your existing tools.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Stage 4 | Testing & Optimization',
      text: 'We test across edge cases and optimize for speed. We configure real-time monitoring.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Stage 5 | Launch & Training',
      text: 'Your workflows launch in production. We train your team and provide 30-day post-launch support.',
    },
  ],
};

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below, so the two
 *  can never drift into showing a different path than the schema claims. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI Workflow Automation', url: 'https://factoryjet.com/services/ai-workflow-automation' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://factoryjet.com/services/ai-workflow-automation#breadcrumb',
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
    name: 'Lead Follow-Up & Nurturing Automation',
    description:
      'Every new website lead receives a personalized response within 60 seconds. Our system scores intent and enrolls prospects in tailored nurture sequences. Your CRM updates automatically at each step without manual data entry.',
    example: '35% increase in qualified pipeline reported within 60 days of launch.',
    linkLabel: 'See how it works',
    linkHref: '/contact',
  },
  {
    name: 'Invoice & Document Processing',
    description:
      'AI reads incoming invoices, contracts, and vendor receipts automatically. Key fields like totals, due dates, and line items get extracted. Workflows code expenses and route approvals directly to QuickBooks, Xero, or NetSuite.',
    example: '75% reduction in document handling time across client deployments.',
    linkLabel: 'Start a conversation',
    linkHref: '/contact',
  },
  {
    name: 'Support Ticket Triage & Routing',
    description:
      'Inbound customer messages are classified by topic and urgency instantly. The system drafts recommended replies in Zendesk, Gorgias, or Freshdesk. Urgent tickets escalate immediately to Slack while routine requests resolve automatically.',
    example: 'Average first-response time cut from 4 hours to under 20 minutes.',
    linkLabel: 'See pricing',
    linkHref: '#pricing',
  },
  {
    name: 'Employee Onboarding Automation',
    description:
      'New hire start dates trigger automated account provisioning across Google Workspace and Slack. Workflows assign first-week tasks in Jira, training modules, and manager check-ins. HR eliminates manual spreadsheet tracking entirely.',
    example: 'HR teams reclaim 6-8 hours per new hire from manual coordination.',
    linkLabel: 'Book a strategy call',
    linkHref: '/contact',
  },
  {
    name: 'Automated Reporting & Dashboards',
    description:
      'Scheduled workflows pull metrics from Salesforce, GA4, ad platforms, and Stripe. AI summarizes key revenue trends and flags anomalies clearly. Clean executive reports sync to Postgres or BigQuery and arrive in Slack every Monday.',
    example: 'Business owners reclaim 5-8 hours per week of manual reporting time.',
    linkLabel: 'Learn more',
    linkHref: '/contact',
  },
  {
    name: 'Cross-System Data Sync',
    description:
      'Keeps your HubSpot CRM, Shopify store, and accounting tools in sync. Custom n8n and Make.com pipelines update stock levels in real time. Built-in reconciliation prevents duplicate records and webhook sync errors.',
    example: 'Eliminates 10-20 hours per week of copy-paste data entry.',
    linkLabel: 'Get a free assessment',
    linkHref: '/contact',
  },
];

const AUTOMATION_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We run a 60-minute strategy session to map your highest-value workflows. We document decision paths, exception rules, and estimated ROI.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We architect the workflow logic, error handling, and API integration specs. You approve the technical blueprint before coding starts.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Our engineers develop the pipelines in staging with weekly live demos. You test real business data before production deployment.',
  },
  {
    number: '04',
    title: 'Validate',
    description:
      'We test every edge case and API failure scenario. Every error handler is verified to ensure zero silent failures.',
  },
  {
    number: '05',
    title: 'Deploy & Monitor',
    description:
      'We launch your automation with live monitoring and a central operations dashboard. Includes full staff training and 30-day support.',
  },
];

const ROI_STATS = [
  {
    value: '55%',
    label: 'average reduction in manual task time across FactoryJet automation deployments.',
    microcopy: 'based on client-reported hours before and after.',
    categoryLabel: 'TIME SAVED',
  },
  {
    value: '90s',
    label: 'average lead follow-up time with automation vs. 4+ hours manually.',
    microcopy: 'speed is the single biggest driver of lead close rates.',
    categoryLabel: 'LEAD RESPONSE',
  },
  {
    value: 'Fixed Price',
    label: 'milestone-paid automation builds with full code ownership.',
    microcopy: 'specialized engineers, US-caliber output, predictable from quote to launch.',
    categoryLabel: 'PRICING MODEL',
  },
];

const MARKET_STATS = [
  {
    value: '$26B',
    label: 'US intelligent process automation market value by 2028, growing at 13% annually.',
    microcopy: 'MarketsandMarkets research report.',
    categoryLabel: 'MARKET SIZE',
  },
  {
    value: '45%',
    label: 'of US SMBs say manual data entry is their biggest operational time drain.',
    microcopy: 'Salesforce Small Business Report.',
    categoryLabel: 'SMB PAIN POINT',
  },
  {
    value: '3-6×',
    label: 'higher ROI from AI-enhanced automation vs. basic rule-based tools like Zapier.',
    microcopy: 'McKinsey SMB research findings.',
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
    feature: 'Pricing model.',
    values: [
      'Fixed-price, one-time',
      'Enterprise budgets',
      'SaaS fees, limited AI',
      'Hourly, variable',
    ],
  },
  {
    feature: 'Delivery timeline.',
    values: ['2-4 weeks', '2-5 months', 'Hours (limited capability)', '4-8 weeks (unreliable)'],
  },
  {
    feature: 'AI decision-making in workflows.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
    ],
  },
  {
    feature: 'Document & email reading (unstructured data).',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
    ],
  },
  {
    feature: 'Full error handling & monitoring.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="diy" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
    ],
  },
  {
    feature: 'You own the code outright.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="yes" />,
    ],
  },
  {
    feature: 'No ongoing platform seat fees.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="yes" />,
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
    feature: '12+ years of SMB domain experience.',
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
      'One focused workflow automation that eliminates your highest-impact manual process. Best for businesses automating their first workflow.',
    features: [
      'Single workflow automation (lead follow-up, invoice processing, or data sync).',
      'Connects to 2-3 existing tools via API.',
      'AI reasoning layer for decision-making and classification.',
      'Error handling with Slack or email notifications.',
      'Workflow monitoring dashboard.',
      'Full workflow logic documentation.',
      '14-day post-launch support window.',
    ],
    cta: { label: 'Get a Quote', modal: true as const, region: 'us' as const },
  },
  {
    name: 'Growth',
    priceRange: 'Most common scope',
    description:
      'A multi-workflow automation platform connecting 3-5 systems with an operations dashboard. The most popular tier for US SMBs ready to automate seriously.',
    features: [
      'Up to 4 interconnected workflow automations.',
      'Full CRM, e-commerce, or accounting integration.',
      'AI document reading and field extraction.',
      'Operations dashboard showing all workflow runs and exceptions.',
      'Custom error handling and retry logic.',
      'Bi-directional data sync between systems.',
      'Team training session and full documentation.',
      '30-day post-launch support window.',
    ],
    cta: { label: 'Get a Custom Quote', modal: true as const, region: 'us' as const },
    popular: true,
  },
  {
    name: 'Enterprise',
    priceRange: 'Custom scope',
    description:
      'Complex multi-department automation with custom business logic, compliance requirements, and a dedicated engineering partner.',
    features: [
      'Workflow automations fully scoped per project brief.',
      'Complex multi-branch business logic and decision trees.',
      'Private LLM deployment for sensitive data processing.',
      'Enterprise ERP and legacy system integration.',
      'Compliance-ready audit trails (HIPAA, SOC 2 patterns).',
      'Custom analytics and reporting layer.',
      'Dedicated engineering point of contact.',
      '90-day post-launch support and iteration window.',
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

/* ─── FAQ items: 21 conversational Q-A pairs, AI-citation optimized ────── */
const FAQ_ITEMS = [

  /* ── What Is AI Workflow Automation ── */
  {
    category: 'what-is',
    question: 'What is AI workflow automation?',
    answer:
      'AI workflow automation connects your business tools to run complex processes automatically. It reads unstructured emails, documents, and form submissions. It makes decisions and completes tasks that previously required human manual effort.',
  },
  {
    category: 'what-is',
    question: 'How is AI workflow automation different from tools like Zapier?',
    answer:
      'Zapier and Make move records when simple triggers fire. AI workflow automation adds intelligent reasoning. It parses incoming invoice PDFs, categorizes customer inquiries, and makes branching decisions based on document context.',
  },
  {
    category: 'what-is',
    question: 'What kinds of workflows can AI automate for my business?',
    answer:
      'High-ROI workflows include HubSpot lead nurturing, QuickBooks invoice processing, and Zendesk ticket routing. It also handles Slack employee onboarding sequences and Shopify inventory data sync across Postgres databases.',
  },
  {
    category: 'what-is',
    question: 'What tools does FactoryJet use to build AI workflow automation?',
    answer:
      'We orchestrate workflows using n8n and Make.com. AI decision layers run on OpenAI GPT-4o and Anthropic Claude. Complex transformations rely on Python scripts and LangChain agents. We configure self-hosted Docker containers or AWS cloud stacks to suit your privacy needs.',
  },

  /* ── Process & Timeline ── */
  {
    category: 'process',
    question: 'What does the workflow automation development process look like?',
    answer:
      'Our build process includes five clear stages. First, we identify high-value processes in Discovery. Next, we design logic in Design. Then, we connect APIs in Build. Afterward, we test edge cases in Validation. Finally, we launch with full training and support.',
  },
  {
    category: 'process',
    question: 'How long does it take to build and launch AI workflow automation?',
    answer:
      'Single workflow automations launch in 2 to 3 weeks. Multi-system platforms take 4 to 6 weeks. Enterprise deployments across departments run 8 to 12 weeks. We confirm your exact delivery schedule before kickoff.',
  },
  {
    category: 'process',
    question: 'Will I see progress during the build, or just get a final delivery?',
    answer:
      'You see working demos every week during development. Testing with live sample data allows early feedback and adjustments. This iterative cadence ensures zero surprises on launch day.',
  },
  {
    category: 'process',
    question: 'What happens after the automation goes live?',
    answer:
      'Every project includes a 30-day post-launch warranty. We monitor execution logs, resolve edge cases, and train your team. An intuitive operations dashboard lets your staff manage daily runs without writing code.',
  },

  /* ── Pricing & ROI ── */
  {
    category: 'pricing',
    question: 'How much does AI workflow automation cost?',
    answer:
      'Pricing depends on connected tools, logic branches, and compliance rules. Most SMBs choose our Growth tier for multi-system automation. All projects are fixed-price and milestone-paid with guaranteed delivery.',
  },
  {
    category: 'pricing',
    question: 'Why is FactoryJet fixed-price, milestone-paid?',
    answer:
      'We deliver fixed-price projects backed by 12+ years of software experience. Clients work directly with senior engineers rather than sales reps. This lean model lowers development costs and gives you full code ownership.',
  },
  {
    category: 'pricing',
    question: 'What return on investment can I expect from workflow automation?',
    answer:
      'ROI comes from recovered labor hours and faster execution. Automated invoice processing often pays for itself in 2 to 3 months. Instant lead follow-up under 60 seconds typically lifts qualified pipeline by 30%.',
  },
  {
    category: 'pricing',
    question: 'Are there ongoing costs after the automation is built?',
    answer:
      'Ongoing costs include direct model API usage and cloud hosting. Self-hosted n8n instances have zero platform licensing fees. FactoryJet never marks up third-party tool costs.',
  },

  /* ── Technical & Integrations ── */
  {
    category: 'technical',
    question: 'What software platforms can the automation connect to?',
    answer:
      'We connect HubSpot, Salesforce, Shopify, QuickBooks, and Xero. We also sync Slack, Google Workspace, Airtable, and Postgres databases. Any application with a REST API or webhook can be automated.',
  },
  {
    category: 'technical',
    question: 'What happens when an automated workflow fails or hits an edge case?',
    answer:
      'Every workflow includes automated error handling and exponential retries. If an API times out, the system alerts your team in Slack and queues items for review. No transaction fails silently.',
  },
  {
    category: 'technical',
    question: 'Can you automate workflows that involve reading emails or documents?',
    answer:
      'Yes. AI models read incoming emails and extract key data points. They parse PDF invoices, extract line items, and update your accounting software automatically.',
  },
  {
    category: 'technical',
    question: 'Do I need a technical team to manage the automation after launch?',
    answer:
      'No. The visual dashboard displays run histories, success rates, and errors clearly. Non-technical staff can pause or rerun workflows with a single click.',
  },

  /* ── Trust & Results ── */
  {
    category: 'trust',
    question: 'Is my business data safe in automated workflows?',
    answer:
      'We enforce encrypted credential storage, API access controls, and comprehensive audit logs. For healthcare or finance, we configure private LLM deployments that keep data off public servers.',
  },
  {
    category: 'trust',
    question: 'Can AI automation replace our existing Zapier workflows?',
    answer:
      'Yes. AI workflows easily replace complex Zapier chains with higher reliability and lower subscription fees. We audit your existing stack and migrate fragile connections cleanly.',
  },
  {
    category: 'trust',
    question: 'Can I start with one workflow and expand later?',
    answer:
      'Yes, starting with one core workflow is recommended. Once you see tangible time savings, you can connect additional departments using the same modular architecture.',
  },
  {
    category: 'trust',
    question: 'What results have other businesses gotten from FactoryJet automation?',
    answer:
      'An e-commerce client saved 30 hours per week in order processing. A B2B firm reduced lead response time from 4 hours to 90 seconds. An accounting agency reduced invoice processing time by 75%.',
  },
  {
    category: 'trust',
    question: 'How is FactoryJet different from a US automation consultant?',
    answer:
      'We stand apart through fixed pricing, senior engineering, and practical SMB experience. We build reliable software that delivers measurable operational savings from week one.',
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

export default function AIWorkflowAutomationPage() {
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
        id="ai-workflow-automation-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        id="ai-workflow-automation-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader
        navLinks={[
          { label: 'Services', href: '/services' },
          { label: 'AI Automation', href: '/services/ai-workflow-automation' },
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
        formSlot={<HeroInlineForm region="us" source="us_services_ai_workflow_automation_hero" />}
          eyebrow="AI WORKFLOW AUTOMATION · USA"
          headline="Automate the Work That's Eating Your Team's Day"
          lead="Your team spends valuable hours on repetitive manual data entry and document review. FactoryJet designs custom AI workflows to handle these tasks around the clock. We connect your existing software tools with predictable, fixed-price delivery."
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={[
            '500+ businesses served.',
            'Fixed-price, milestone-paid.',
            'Full code ownership.',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#B23E13]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                AUTOMATION IN ACTION
              </p>
              <p className="mt-4 font-fj-display text-[2rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                30 hours of manual work per week, eliminated in the first month.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'New lead fills form → AI qualifies → CRM updated → follow-up email sent in 90 seconds.',
                  'Invoice arrives by email → AI extracts data → coded to GL → routed for approval.',
                  'Monday 7 a.m. → automation pulls 5 data sources → report delivered to Slack.',
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
                  All three workflows running 24/7. No new hires. No missed tasks.
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

        {/* ── 3. WHAT IS AI WORKFLOW AUTOMATION ───────────────────────────── */}
        <ServiceExplanation
          eyebrow="AI AUTOMATION EXPLAINED"
          headline="What Is AI Workflow Automation, and Why Is It Different from Zapier?"
          lead="Basic automation tools move data between apps. AI workflow automation reads unstructured content, makes decisions, handles exceptions, and completes tasks that previously required human manual effort."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {[
                  'Read emails & documents.',
                  'Extract & classify data.',
                  'Make branching decisions.',
                  'Update multiple systems.',
                  'Handle exceptions.',
                  'Report automatically.',
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
                Many teams start with basic Zapier connectors for simple data routing. However, everyday operations involve unpredictable edge cases. Customer emails arrive with varied inquiries and attachment formats. AI workflows analyze intent, extract critical fields, and route tasks intelligently.
              </p>

              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[
                  { value: '55%', label: 'Time saved.' },
                  { value: '24/7', label: 'Runs continuously.' },
                  { value: '2-4mo', label: 'Rapid payback.' },
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
                  The work your team does every day on autopilot, that&apos;s what AI automation eliminates.
                </p>
              </div>
              <p>
                FactoryJet builds AI workflow automation on n8n, Make.com, and LangChain. We connect pipelines directly to your CRM, e-commerce store, and accounting tools. Our team handles the engineering. Your team focuses on high-value human work. We know the reality inside growing companies. We automate messy data, edge cases, and repetitive daily tasks.
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
                    desc: 'CRM, accounting, project management, email, any connected tool gets the right update in real time.',
                  },
                  {
                    step: '04',
                    title: 'Exceptions are handled',
                    desc: 'Edge cases are flagged, errors logged, and your team notified, nothing fails silently.',
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
          lead="The businesses pulling ahead right now aren't bigger or better funded. They've just stopped doing manually what a machine can do reliably."
          pillars={[
            {
              icon: '⏱',
              title: 'Manual processes scale badly and break under volume',
              body: 'When your business grows, administrative tasks expand rapidly. Copying records between systems and opening invoices manually drains staff time. AI automation absorbs peak volume effortlessly without extra hiring.',
            },
            {
              icon: '📉',
              title: 'Slow lead follow-up costs you closed deals',
              body: 'Leads contacted within five minutes qualify 21 times more often. Delaying outreach until the next morning hands deals to fast competitors. Automated instant follow-up fixes this pipeline leak immediately.',
            },
            {
              icon: '💸',
              title: 'Enterprise tools charge enterprise subscription prices',
              body: 'Corporate software vendors charge steep retainers for needlessly complex platforms. FactoryJet builds practical automation at clear, fixed prices. You get senior engineering tailored to your real operations.',
            },
          ]}
        />

        {/* ── 5. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Strategy Call to Live Automation in 2-4 Weeks"
          lead="A structured 5-stage process that keeps you informed at every step and delivers working automation, not a proposal about automation."
          stages={AUTOMATION_JOURNEY_STAGES}
          closingNote="5 STAGES · 2-12 WEEKS DEPENDING ON SCOPE · WEEKLY DEMOS THROUGHOUT"
        />

        {/* ── 6. AUTOMATION TYPES ──────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="WHAT WE BUILD"
          headline="Six Workflow Automations That Pay for Themselves Fast"
          lead="These are the automations that consistently have the clearest ROI for US small and mid-sized businesses. We build all six, and help you figure out which one to prioritize first."
          sectors={AUTOMATION_TYPES}
        />

        {/* ── 7. MARKET STATS ──────────────────────────────────────────────── */}
        <div className="bg-fj-neutral-50">
          <BoringStatsRow stats={MARKET_STATS} align="center" />
        </div>

        {/* ── 8. ROI STATS ─────────────────────────────────────────────────── */}
        <div className="bg-fj-neutral-50">
          <BoringStatsRow stats={ROI_STATS} align="center" />
        </div>

        {/* ── 8B. INTERACTIVE ROI CALCULATOR ──────────────────────────────── */}
        <section className="bg-[#FFF8F5] py-16 md:py-24 border-y border-[#E7DED6]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-sm font-semibold tracking-wider text-[#F05A28] uppercase font-fj-mono">
                Interactive ROI & Hours Saved Estimator
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-[#0F0F12] sm:text-4xl font-fj-display">
                Calculate Your Workflow Automation ROI
              </h2>
              <p className="mt-4 text-lg text-[#333333] font-fj-body">
                Estimate weekly manual hours eliminated by custom workflows. See projected labor savings across your core business systems.
              </p>
            </div>
            <AiAgentRoiCalculator defaultWorkflow="erp" source="ai-workflow-automation" />
          </div>
        </section>

        {/* ── 8C. ARCHITECTURE, ORCHESTRATION & RELIABILITY ──────────────────── */}
        <section className="py-16 bg-[#FAFAF7] border-b border-[#E5E5DC]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-semibold text-[#B23E13] uppercase tracking-widest mb-3">
              SYSTEM ARCHITECTURE
            </p>
            <h2 className="text-3xl font-bold text-[#0F0F12] mb-6">
              Workflow Orchestration, Error Handling &amp; Data Pipeline Architecture
            </h2>
            <p className="text-base text-[#4A4A45] max-w-3xl mb-10 leading-relaxed">
              Resilient workflow automation requires comprehensive error handling, exponential retry backoff, and idempotent execution.
              We build event-driven pipelines using self-hosted or cloud nodes detailed in the{' '}
              <a
                href="https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B23E13] underline font-medium"
              >
                n8n webhook node documentation
              </a>
              . High-throughput queues and asynchronous API calls run on runtimes aligned with the{' '}
              <a
                href="https://docs.python.org/3/library/asyncio.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B23E13] underline font-medium"
              >
                Python asyncio documentation
              </a>
              . Automated payload validation filters out malformed payloads before database transactions commit.
              Every pipeline logs runtime events to central dashboards with instant Slack alerts on failure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-xl border border-[#E5E5DC] shadow-sm">
                <Image
                  src="/images/us/services/ai-agency/service-explanation-tech-stack.webp"
                  alt="Workflow orchestration technical integration diagram"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full h-auto mb-3"
                />
                <h3 className="font-semibold text-[#0F0F12] text-lg mb-1">Trigger &amp; Payload Routing</h3>
                <p className="text-sm text-[#4A4A45]">
                  Instant webhook listeners capture inbound events from Salesforce, NetSuite, and Shopify with zero data loss.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#E5E5DC] shadow-sm">
                <Image
                  src="/images/us/services/ai-agency/service-explanation-before-after.webp"
                  alt="Automated versus manual data processing performance comparison"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full h-auto mb-3"
                />
                <h3 className="font-semibold text-[#0F0F12] text-lg mb-1">AI Reasoning &amp; Extraction</h3>
                <p className="text-sm text-[#4A4A45]">
                  LLM parsing with Claude and GPT-4o turns PDF invoices and emails into structured JSON records.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#E5E5DC] shadow-sm">
                <Image
                  src="/images/us/services/ai-agency/service-team-ai.webp"
                  alt="FactoryJet workflow automation engineering team"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full h-auto mb-3"
                />
                <h3 className="font-semibold text-[#0F0F12] text-lg mb-1">Monitoring &amp; Alerts</h3>
                <p className="text-sm text-[#4A4A45]">
                  Automated retry logic and Slack alerts notify your engineering team before small API timeouts affect customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. COMPARISON TABLE ─────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Traditional Agency vs. DIY Tools vs. Freelancer"
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
            footnote="Platform costs and AI model fees go directly to vendors. Self-hosted n8n is free. Make.com bills by volume. You own all code and credentials."
          />
        </div>

        {/* ── 12. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="We're not a US automation agency with a slick sales deck. That's the point."
          lead="We have built software for over a decade. Our team has shipped 500+ production systems for real businesses. Our workflows run in production every day and handle real company data."
          pillars={[
            {
              icon: '⚡',
              title: 'Speed without cutting corners',
              body: 'Traditional agencies route requests through layers of account managers. At FactoryJet, clients collaborate directly with senior engineers. This direct model cuts build timelines from quarters to weeks.',
            },
            {
              icon: '💡',
              title: 'We understand SMB operations, not just enterprise theory',
              body: 'We build around real operations, including messy CSVs and legacy databases. Our workflows handle real-world exceptions reliably, rather than fragile assumptions from generic slide decks.',
            },
            {
              icon: '🔒',
              title: 'Your code, your data, your infrastructure',
              body: 'You retain full ownership of all code, credentials, and workflow logic. There are zero vendor lock-ins or mandatory ongoing platform fees. You walk away with a permanent business asset.',
            },
          ]}
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything You Need to Know Before You Automate"
          lead="No jargon. No runaround. The questions we get on every strategy call, answered straight."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA ─────────────────────────────────────────────────── */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="READY TO AUTOMATE"
            headline="Book a 30-Minute Workflow Automation Strategy Call"
            sub="We map your top automation opportunities and estimate recovered weekly labor hours. You receive a fixed-price roadmap before committing to anything."
            primaryCta={{ label: 'Get a Quote', modal: true, region: 'us' }}
            secondaryCta={{ label: 'See All AI Services', href: '/services' }}
            objectionHandler="Most clients see full ROI within 90 days. Free call, fixed price, no hidden fees."
          />
        </div>

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

