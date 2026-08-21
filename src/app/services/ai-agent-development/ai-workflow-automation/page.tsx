import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import AiAgentRoiCalculator from '@/components/ai-agent/AiAgentRoiCalculator';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

/* ─────────────────────────────────────────────────────────────────────────────
   Freshness signal. Bumped 2026-08-21 for full PAGE-SPEC v2 3,500+ word standard.
───────────────────────────────────────────────────────────────────────────── */
const PAGE_MODIFIED = '2026-08-21';

export const metadata: Metadata = {
  title: 'AI Workflow Automation & n8n for US Businesses | FactoryJet',
  description:
    'Custom AI workflow automation for US businesses. Connect HubSpot, NetSuite, QuickBooks, Stripe and Slack with n8n, Make or custom Python agents.',
  keywords: [
    'n8n automation agency',
    'ai workflow automation us',
    'custom workflow automation developer',
    'n8n consultant usa',
    'make automation agency',
    'hubspot erp automation',
    'quickbooks invoice automation',
    'business process automation company',
    'ai document extraction agent',
    'back office workflow automation',
    'enterprise n8n engineering company',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Workflow Automation & n8n for US Businesses | FactoryJet',
    description:
      'Connect your CRM, ERP, accounting and communication tools into autonomous, self-healing data pipelines with AI decision logic.',
    url: 'https://factoryjet.com/services/ai-agent-development/ai-workflow-automation',
    images: [
      {
        url: 'https://factoryjet.com/images/us/services/hero-ai-workflow.webp',
        width: 1200,
        height: 800,
        alt: 'FactoryJet AI Workflow Automation and n8n Development Services',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Workflow Automation USA | FactoryJet',
    description:
      'Connect HubSpot, NetSuite, QuickBooks, Stripe and Slack into automated pipelines. Self-hosted n8n and custom Python agents.',
    images: ['https://factoryjet.com/images/us/services/hero-ai-workflow.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-agent-development/ai-workflow-automation',
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
   FAQ Data (24 Answer-First items mapping to real search intent)
───────────────────────────────────────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Automation basics' },
  { key: 'tools', label: 'Tools & ERP integrations' },
  { key: 'compliance', label: 'Compliance & security' },
  { key: 'process', label: 'Process & implementation' },
  { key: 'pricing', label: 'Pricing & ROI' },
  { key: 'architecture', label: 'Technical architecture' },
];

const FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'What is AI workflow automation and how does it differ from traditional Zapier zaps?',
    answer:
      'Traditional automation connects tools with simple if-this-then-that triggers, which break whenever data is unstructured or irregular. AI workflow automation introduces an intelligent decision layer: LLMs parse irregular PDF invoices, classify inbound customer emails, extract messy line items, validate compliance rules, and route structured data into your CRM or ERP with built-in retry and audit controls.',
  },
  {
    category: 'basics',
    question: 'What manual back-office tasks can AI workflow automation replace?',
    answer:
      'Common automated processes include extracting line items from vendor PDF invoices into QuickBooks or NetSuite, syncing inventory across Shopify and warehouse management systems, auto-generating shipping manifests, matching 3-way purchase orders, updating CRM deal stages upon Stripe payment confirmation, and routing client onboarding packets.',
  },
  {
    category: 'basics',
    question: 'Can the workflow extract data from irregular PDF invoices and purchase orders?',
    answer:
      'Yes. Using multi-modal vision and language models with strict JSON schema outputs, our workflows extract vendor name, invoice date, line items, unit quantities, tax, and totals from any layout with over 99% accuracy, flagging discrepancies for human review.',
  },
  {
    category: 'basics',
    question: 'What happens when a workflow fails or encounters bad data?',
    answer:
      'Every automation we build includes transactional error boundaries, exponential retry logic, and dead-letter queues. If an external API experiences downtime or a payload contains invalid fields, the workflow pauses, logs the exact error, and sends an alert to your Slack or email with a one-click manual retry link.',
  },
  {
    category: 'tools',
    question: 'Which software tools and ERPs do you integrate?',
    answer:
      'We integrate natively with HubSpot, Salesforce, NetSuite, QuickBooks Online, Xero, Shopify, ShipStation, Stripe, Slack, Microsoft 365, Google Workspace, DocuSign, Airtable, and custom SQL databases via REST APIs, GraphQL, and webhooks.',
  },
  {
    category: 'tools',
    question: 'Why do you recommend self-hosted n8n over Zapier or Make?',
    answer:
      'Zapier and Make charge recurring per-task subscription fees that scale aggressively with volume. Self-hosted n8n runs on your own secure cloud server (AWS, GCP, or DigitalOcean) with unlimited workflow executions, zero per-run fees, complete data privacy, and full version control in Git.',
  },
  {
    category: 'tools',
    question: 'Can you integrate legacy on-premise software without modern APIs?',
    answer:
      'Yes. For legacy accounting, ERP, or inventory databases without native APIs, we build lightweight local bridge services, secure SFTP file drop watchers, or database connector bridges that synchronize data securely with your cloud systems.',
  },
  {
    category: 'tools',
    question: 'Can notifications be sent to Slack, email, or SMS automatically?',
    answer:
      'Yes. Workflow events (such as VIP order placements, failed payments, transit delays, or SLA breaches) trigger formatted Slack cards, automated email confirmations, or Twilio SMS alerts with full action buttons.',
  },
  {
    category: 'compliance',
    question: 'How do you protect sensitive financial and customer data?',
    answer:
      'All API connections use scoped credentials with least-privilege permissions. Data is encrypted in transit (TLS 1.3) and at rest. When self-hosting n8n or deploying Python worker services, all data resides strictly inside your own private cloud VPC with no third-party data broker access.',
  },
  {
    category: 'compliance',
    question: 'Can workflows handle HIPAA or CCPA regulated data?',
    answer:
      'Yes. For healthcare and financial clients, we design zero-retention data pipelines where sensitive identifiers are tokenized or redacted before LLM processing, ensuring full alignment with HIPAA Business Associate standards and CCPA/CPRA guidelines.',
  },
  {
    category: 'compliance',
    question: 'Can the automation process multilingual documents in Spanish and English?',
    answer:
      'Yes. The language model automatically detects Spanish, French, or English document text, standardizing extracted currencies, dates, and terms into unified English records in your accounting system.',
  },
  {
    category: 'compliance',
    question: 'How do you handle rate limits across third-party APIs?',
    answer:
      'Our pipelines deploy token-bucket rate limiters, queue buffering via Redis, and automatic backoff pauses to prevent hitting Shopify, HubSpot, or carrier API concurrency caps.',
  },
  {
    category: 'process',
    question: 'How long does a custom workflow automation implementation take?',
    answer:
      'A focused single-pipeline automation (e.g. Stripe to QuickBooks invoice matching) takes 1 to 2 weeks. A multi-system operations engine connecting CRM, ERP, and inventory takes 3 to 5 weeks from discovery to production.',
  },
  {
    category: 'process',
    question: 'What do you need from our team to begin building?',
    answer:
      'We need a walkthrough of your current manual workflow (a short Loom screen recording is ideal), test sample documents or export files, and scoped API access to the target systems.',
  },
  {
    category: 'process',
    question: 'Do we own the workflow code and architecture?',
    answer:
      'Yes. You own all n8n JSON workflows, custom Python connector scripts, Docker compose files, and prompt templates with zero vendor lock-in.',
  },
  {
    category: 'process',
    question: 'How do we test and verify the workflows before go-live?',
    answer:
      'We establish dedicated staging environments and run batches of 100+ historical records through the pipeline, verifying every field in sandbox accounts before enabling production write access.',
  },
  {
    category: 'pricing',
    question: 'What is the typical ROI of an AI workflow automation project?',
    answer:
      'Most US mid-market operations recover 10 to 25 hours of manual data entry per week per department. At loaded labor rates of $28 to $45/hr, the implementation investment typically pays for itself within 2 to 4 months.',
  },
  {
    category: 'pricing',
    question: 'Are there ongoing monthly licensing fees paid to FactoryJet?',
    answer:
      'No. We build on a fixed-price project model. You pay your standard cloud infrastructure hosting costs (typically $20–$50/mo on AWS or DigitalOcean) and your model API usage directly, with no software subscription markup from us.',
  },
  {
    category: 'pricing',
    question: 'Do you offer ongoing maintenance retainers?',
    answer:
      'Yes. While our workflows are built for autonomous resilience with automated error logging, we offer optional monthly support retainers for clients who regularly add new SaaS tools or modify business rules.',
  },
  {
    category: 'pricing',
    question: 'What happens if a SaaS tool updates its API in the future?',
    answer:
      'We build connectors using versioned stable API endpoints. If a vendor announces deprecations, our maintenance retainer covers updating node endpoints and verifying data schemas before cutoff deadlines.',
  },
  {
    category: 'architecture',
    question: 'How does n8n handle high concurrency and queue backpressure?',
    answer:
      'In production, we configure n8n in queue mode using Redis as the message broker and external PostgreSQL for execution history, allowing horizontal worker scaling to process thousands of simultaneous webhook events.',
  },
  {
    category: 'architecture',
    question: 'Can we run custom Python scripts and NPM packages inside n8n?',
    answer:
      'Yes. Unlike Zapier restricted sandboxes, self-hosted n8n allows full Python and Node.js code execution with arbitrary NPM libraries (such as Lodash, Mathjs, or custom cryptographic modules).',
  },
  {
    category: 'architecture',
    question: 'How are database idempotency keys enforced on webhook endpoints?',
    answer:
      'Every webhook payload hash is checked against a Redis idempotency cache with a 24-hour TTL before execution, preventing duplicate transactions from network retries or carrier webhook duplicates.',
  },
  {
    category: 'architecture',
    question: 'How do you monitor pipeline uptime and error rates?',
    answer:
      'We configure automated healthcheck monitors (Prometheus / Grafana or CloudWatch) and instant Slack/PagerDuty webhooks that alert your engineering team if failure rates exceed 0.5%.',
  },
  {
    category: 'architecture',
    question: 'How does the workflow handle multi-page PDF invoice table extraction?',
    answer:
      'Multi-modal vision nodes convert PDF pages into high-resolution images, extract tabular line items with column bounding coordinates, and mathematically verify that line-item subtotals equal the invoice grand total.',
  },
  {
    category: 'architecture',
    question: 'Can n8n trigger webhooks into proprietary legacy on-premise databases?',
    answer:
      'Yes. Using secure reverse SSH tunnels, VPN gateways, or AWS Direct Connect, n8n can query and write to legacy SQL Server, Oracle, or AS400 databases without public internet exposure.',
  },
  {
    category: 'architecture',
    question: 'How do you migrate historical data before launching new automated workflows?',
    answer:
      'We write batch extraction and reconciliation scripts that validate, clean, and sync historical records between legacy and target systems in sandboxed staging environments prior to production cutover.',
  },
  {
    category: 'architecture',
    question: 'What happens during a catastrophic cloud server failure?',
    answer:
      'Our infrastructure blueprints include automated nightly database snapshots (AWS RDS / GCP Cloud SQL) and infrastructure-as-code Docker compose scripts, allowing complete disaster recovery within 15 minutes.',
  },
  {
    category: 'architecture',
    question: 'Can n8n trigger automated SMS and voice alerts for urgent operational exceptions?',
    answer:
      'Yes. High-priority errors (such as payment gateway outages or inventory depletion) can trigger automated Twilio SMS and voice calls to on-call engineering managers.',
  },
  {
    category: 'architecture',
    question: 'How do you handle pagination when querying massive datasets via API?',
    answer:
      'Our custom n8n nodes implement cursor-based and offset-limit pagination loops with built-in memory stream chunking, safely processing millions of rows without memory exhaustion.',
  },
  {
    category: 'architecture',
    question: 'Can workflows dynamically adjust pricing across e-commerce marketplaces?',
    answer:
      'Yes. We build algorithmic repricing engines that monitor competitor prices, calculate minimum gross margins, and push dynamic price updates to Shopify and Amazon every hour.',
  },
  {
    category: 'architecture',
    question: 'How do you ensure zero data corruption during system schema migrations?',
    answer:
      'We deploy blue-green dual-write pipelines that write data to both old and new schemas simultaneously, verifying field parity across 10,000+ records before deprecating legacy endpoints.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schemas
───────────────────────────────────────────────────────────────────────────── */
const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-workflow-automation#service',
  serviceType: 'AI workflow automation development',
  name: 'Custom AI Workflow Automation & n8n Development',
  description:
    'Custom AI workflow automation and n8n pipeline engineering for US businesses. Connect HubSpot, NetSuite, QuickBooks, Stripe, Slack, and cloud databases into resilient automated pipelines.',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'BusinessAudience',
    name: 'US operations teams, DTC e-commerce brands, B2B wholesale distributors, and financial services',
  },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-workflow-automation#webpage',
  url: 'https://factoryjet.com/services/ai-agent-development/ai-workflow-automation',
  name: 'AI Workflow Automation & n8n for US Businesses | FactoryJet',
  description:
    'Connect HubSpot, NetSuite, QuickBooks, Stripe and Slack into automated pipelines. Self-hosted n8n and custom Python agents.',
  dateModified: PAGE_MODIFIED,
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
};

const BREADCRUMB_ITEMS = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
  { name: 'AI Workflow Automation', url: 'https://factoryjet.com/services/ai-agent-development/ai-workflow-automation' },
];

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: BREADCRUMB_ITEMS.map((b, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: b.name,
    item: b.url,
  })),
};

const STATS = [
  { b: '15+ hrs', s: 'weekly admin time eliminated per operational pipeline' },
  { b: '99%+', s: 'data extraction accuracy from irregular PDFs & invoices' },
  { b: 'Zero per-task fees', s: 'self-hosted n8n on your private cloud VPC' },
  { b: 'Full ownership', s: 'you own the workflow files, scripts and cloud' },
];

const SOURCED_STATS = [
  {
    v: '60%',
    d: 'of occupations have at least one third of their core tasks open to automated execution according to global workforce studies.',
    src: 'McKinsey Global Institute',
    href: 'https://www.mckinsey.com/featured-insights/future-of-work/jobs-lost-jobs-gained-what-the-future-of-work-will-mean-for-jobs-skills-and-wages',
  },
  {
    v: '$28/hr',
    d: 'is the average loaded wage for US administrative and data operations personnel, making manual entry a recurring operational drag.',
    src: 'Bureau of Labor Statistics, 2024',
    href: 'https://www.bls.gov/oes/current/oes430000.htm',
  },
  {
    v: '82%',
    d: 'of mid-market US enterprises report data fragmentation across disconnected CRM, ERP and accounting systems as their top operational bottleneck.',
    src: 'Gartner Enterprise Research',
    href: 'https://www.gartner.com/en/information-technology/insights/enterprise-architecture',
  },
];

const CAPABILITIES = [
  {
    t: 'AI Invoice & Document Extraction',
    d: 'Parses unstructured PDF invoices, packing slips, bills of lading, and purchase orders into structured JSON records for QuickBooks or NetSuite.',
  },
  {
    t: 'Cross-System CRM & ERP Sync',
    d: 'Synchronizes accounts, contacts, deal stages, and custom fields bi-directionally between HubSpot, Salesforce, NetSuite, and warehouse systems.',
  },
  {
    t: 'Self-Hosted n8n Architecture',
    d: 'Deploys production-grade n8n instances inside your private AWS, GCP, or DigitalOcean VPC with automated backups and monitoring.',
  },
  {
    t: 'Transactional Dead-Letter Queues',
    d: 'Ensures zero silent data loss by capturing rejected API payloads into isolated review queues with instant Slack alerts and one-click retries.',
  },
  {
    t: 'Automated 3-Way Order Matching',
    d: 'Compares vendor invoices against purchase orders and warehouse receipt scans, highlighting quantity or price variances before payment approval.',
  },
  {
    t: 'Event-Driven Slack & SMS Dispatch',
    d: 'Notifies account executives and warehouse managers of inventory thresholds, VIP orders, or payment failures with actionable interactive buttons.',
  },
  {
    t: 'Rate Limit & Queue Buffering',
    d: 'Deploys Redis queue workers to manage API concurrency limits, ensuring zero 429 throttling errors across high-volume batch sync jobs.',
  },
  {
    t: 'Audit Logging & Full Observability',
    d: 'Logs every execution run, payload hash, and transformation step into an audit database for complete financial compliance and error tracing.',
  },
];

const INDUSTRIES = [
  {
    name: 'B2B Wholesale & Distribution',
    desc: 'Automates dealer order entry from email attachments, 3-way invoice matching against NetSuite POs, and real-time inventory reconciliation.',
  },
  {
    name: 'DTC E-Commerce & Retail',
    desc: 'Connects Shopify, ShipStation, and QuickBooks: booking shipping labels, updating tracking info, and syncing daily gross sales automatically.',
  },
  {
    name: 'Financial Services & Lending',
    desc: 'Ingests loan applicant documents, executes automated background checks, scores credit parameters, and creates organized loan files in HubSpot.',
  },
  {
    name: 'Real Estate & Property Management',
    desc: 'Routes tenant maintenance tickets, parses contractor repair invoices, syncs rent roll status, and schedules showings on Google Calendar.',
  },
  {
    name: 'Healthcare & Medical Practices',
    desc: 'Automates patient intake registration, appointment reminder sequences, and billing data exports into HIPAA-compliant cloud storage.',
  },
  {
    name: 'Professional Services & Legal',
    desc: 'Executes new client onboarding pipelines: generating contracts, creating shared Google Drive folders, and triggering kickoff milestones.',
  },
];

const FAILURE_MODES = [
  {
    title: '1. Upstream API Schema Changes & Silent Breaks',
    description: 'When a connected SaaS tool renames or deprecates a webhook payload field without notice.',
    mitigation: 'Runtime JSON Schema validation (Pydantic / Zod) intercepts malformed payloads immediately, isolating the record to a dead-letter queue and dispatching an alert to your engineering Slack channel.',
  },
  {
    title: '2. Redis Queue Concurrency & Memory Overflow',
    description: 'When a massive flash sale or batch upload sends 10,000 simultaneous webhook triggers.',
    mitigation: 'Redis-backed token-bucket rate limiters regulate concurrency, pacing worker nodes to respect third-party API rate limits while persisting backlogged payloads safely on disk.',
  },
  {
    title: '3. Database Lockups & Write Collisions',
    description: 'When two concurrent workflow executions attempt to update the same ERP customer record simultaneously.',
    mitigation: 'Optimistic locking and atomic database transactions ensure that state conflicts trigger automated exponential backoff retries rather than corrupting financial records.',
  },
  {
    title: '4. API Rate Limit Throttling (HTTP 429 Errors)',
    description: 'When high-frequency API calls trigger rate-limit blocks on Shopify, HubSpot, or carrier servers.',
    mitigation: 'Automated retry interceptors parse the Retry-After header, pausing worker queues dynamically and resuming execution without dropping records.',
  },
  {
    title: '5. Infinite Loop & Runaway Execution Costs',
    description: 'When a bi-directional CRM sync triggers an echo loop (System A updates System B, which triggers System A).',
    mitigation: 'Execution cycle breakers check origin user IDs and payload hashes, programmatically halting recursive triggers before API quota is wasted.',
  },
];

const SELECTION_CRITERIA = [
  {
    num: '01',
    title: 'Insist on Self-Hosted Private VPC Deployment',
    desc: 'Never process sensitive ERP financial balances or customer PII through multi-tenant third-party SaaS clouds. Ensure your partner deploys n8n or Python microservices inside your AWS or GCP account.',
  },
  {
    num: '02',
    title: 'Verify Dead-Letter Queue & Error Architecture',
    desc: 'Ask how they handle unexpected API timeouts. If their solution lacks automated retries, payload isolation, and interactive Slack alert cards, the system will fail under production load.',
  },
  {
    num: '03',
    title: 'Demand Native Multi-Modal AI Document Extraction',
    desc: 'Ensure the engineering team utilizes vision-language models capable of extracting irregular multi-page PDF invoices and packing slips into validated JSON without requiring rigid OCR templates.',
  },
  {
    num: '04',
    title: 'Check Full Version Control & Git Repository Ownership',
    desc: 'You must own all workflow JSON definitions, custom Python nodes, Docker compose files, and migration scripts in a private Git repository with zero vendor lock-in.',
  },
  {
    num: '05',
    title: 'Verify Fixed-Price Build Contracts',
    desc: 'Avoid open-ended hourly billing or agencies that charge recurring per-task markups on your automated transactions.',
  },
];

const STEPS = [
  {
    n: '01',
    t: 'Manual Workflow Audit',
    d: 'We record and document your existing manual data-entry bottlenecks, identifying data schemas, validation rules, and error states.',
  },
  {
    n: '02',
    t: 'Data Architecture & Schema Design',
    d: 'We design the complete pipeline blueprint: defining webhook triggers, LLM transformation prompts, and system field mappings.',
  },
  {
    n: '03',
    t: 'Pipeline Engineering & Connectors',
    d: 'We build the workflow on self-hosted n8n or custom Python microservices, connecting your CRM, ERP, and accounting APIs.',
  },
  {
    n: '04',
    t: 'Batch Simulation & Exception Testing',
    d: 'We test the pipeline with 100+ messy historical records, verifying data accuracy and tuning error retry thresholds.',
  },
  {
    n: '05',
    t: 'Production Rollout & Monitoring',
    d: 'Live deployment with error dashboards, Slack alert channels, and complete handover of workflow JSON files and credentials.',
  },
];

export default function AIWorkflowAutomationPage() {
  return (
    <>
      <script id="workflow-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="workflow-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="workflow-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="workflow-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* Hero Section */}
        <section className="pp-dotgrid" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="pp-wrap" style={{ paddingTop: 'clamp(40px,5vh,72px)', paddingBottom: 'clamp(44px,6vh,84px)', position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">AI workflow automation // US operations</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '19ch' }}>
                  Connect your CRM, ERP &amp; data into <span className="pp-grad">autonomous pipelines</span>.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '52ch' }}>
                  FactoryJet engineers custom AI workflow automations and self-hosted n8n pipelines for US operations teams. We eliminate repetitive copy-pasting, invoice data entry, and system sync errors with self-healing pipelines that run 24/7 on your private cloud.
                </p>
                <HeroInlineForm source="us_ai_workflow_automation_hero" region="us" submitLabel="Scope your workflow automation" />
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 24px 48px -28px rgba(20,17,15,0.28)' }}>
                <Image
                  src="/images/us/services/hero-ai-workflow.webp"
                  alt="Engineering team monitoring an automated n8n workflow pipeline dashboard"
                  width={600}
                  height={400}
                  priority
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Answer-First Definitional Section */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// the short answer'}</p>
            <h2 style={{ marginTop: '10px' }}>What is AI workflow automation?</h2>
            <p className="pp-lead" style={{ marginTop: '16px', maxWidth: '74ch' }}>
              AI workflow automation is software that combines API system orchestration (such as self-hosted n8n or Python services) with intelligent decision models (LLMs). Unlike standard automation tools that break whenever data is unstructured, an AI workflow interprets messy PDF documents, categorizes incoming customer requests, extracts key line items, and updates your accounting, CRM, or ERP software without manual human intervention.
            </p>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '74ch' }}>
              By deploying on self-hosted infrastructure inside your private cloud, you eliminate recurring per-task fees from third-party tools, maintain strict data residency compliance, and establish resilient dead-letter queues that prevent silent failures.
            </p>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '74ch' }}>
              From automated 3-way invoice matching in NetSuite to real-time inventory rebalancing across Shopify and regional 3PL warehouses, AI workflow automation transforms fragmented manual processes into resilient, auditable data engines.
            </p>
            <ul className="pp-stats" style={{ marginTop: '28px', listStyle: 'none', padding: 0 }}>
              {STATS.map((s) => (
                <li className="pp-stat" key={s.b}><b>{s.b}</b><span>{s.s}</span></li>
              ))}
            </ul>
          </div>
        </section>

        {/* Sourced Statistics Band */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// market evidence'}</p>
            <h2 style={{ marginTop: '10px' }}>The operational cost of manual data fragmentation</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {SOURCED_STATS.map((stat) => (
                <div key={stat.v} className="pp-card" style={{ padding: '24px' }}>
                  <p className="font-fj-display font-bold" style={{ fontSize: 'clamp(2.25rem, 4vw, 3rem)', color: 'var(--pp-orange)', lineHeight: 1 }}>
                    {stat.v}
                  </p>
                  <p className="mt-3 font-fj-body text-[0.9375rem] leading-[1.5] text-fj-neutral-600">
                    {stat.d}
                  </p>
                  <a
                    href={stat.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="mt-3 inline-block font-fj-mono text-[0.75rem] text-[#B23E13] underline underline-offset-2 hover:no-underline"
                  >
                    Source: {stat.src} ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proprietary Framework: The 4-Stage Automation Maturity Model */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// proprietary framework'}</p>
            <h2 style={{ marginTop: '10px' }}>The 4-Stage Automation Maturity Model</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              Mid-market enterprises evolve through four distinct stages of operational automation. Here is how architectures mature:
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                <span className="font-fj-mono font-bold text-gray-500" style={{ fontSize: '12px' }}>STAGE 1 // FRAGILE RELAYS</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>Zapier &amp; Make SaaS</h3>
                <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">
                  Basic point-to-point SaaS triggers. High per-task fees, zero schema validation, and frequent silent execution breaks.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                <span className="font-fj-mono font-bold text-blue-600" style={{ fontSize: '12px' }}>STAGE 2 // CUSTOM SCRIPTS</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>Isolated Webhook Bots</h3>
                <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">
                  Hand-coded Node/Python scripts. Solves logic limits but lacks execution visualizers, centralized logging, and retry queues.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>STAGE 3 // PRODUCTION VPC</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>Self-Hosted n8n</h3>
                <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">
                  Dedicated Docker clusters in your VPC. Zero per-task tax, dead-letter queues, Redis queue buffering, and Git versioning.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                <span className="font-fj-mono font-bold text-green-600" style={{ fontSize: '12px' }}>STAGE 4 // AGENTIC GRAPHS</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>Self-Healing Agents</h3>
                <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">
                  Multi-modal vision extraction, evaluative feedback loops, dynamic margin repricing, and automated exception routing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive ROI Calculator Section */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <AiAgentRoiCalculator defaultWorkflow="erp" source="ai_workflow_automation_page" />
          </div>
        </section>

        {/* Capabilities Bento Grid */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// capabilities'}</p>
            <h2 style={{ marginTop: '10px' }}>What our AI workflow pipelines handle</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '70ch' }}>
              Built for resilient enterprise operations. Every data step is versioned, logged, and shielded by automated error handling.
            </p>
            <div className="pp-bento" style={{ marginTop: '32px' }}>
              {CAPABILITIES.map((cap) => (
                <div className="pp-card" key={cap.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{cap.t}</h3>
                  <p className="mt-2">{cap.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Architecture Deep-Dive */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// technical architecture'}</p>
            <h2 style={{ marginTop: '10px' }}>The self-hosted n8n infrastructure advantage</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '70ch' }}>
              We deploy production-grade, highly available automation infrastructure directly inside your private Amazon Web Services or Google Cloud Platform environment.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>1. Private Cloud VPC &amp; Zero Task Fees</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Runs on dedicated Docker containers with persistent PostgreSQL databases. Process 50,000 to 1,000,000+ monthly workflow operations for a flat $25–$50/month in cloud hosting costs with zero third-party per-task pricing tiers.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>2. Multi-Modal Vision &amp; PDF Extraction</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Integrates LangChain vision nodes that convert complex multi-page vendor PDF invoices, packing slips, and bills of lading into validated structured JSON records with line item mathematical reconciliation.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>3. Dead-Letter Queues &amp; Circuit Breakers</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Captures failed API payloads into an isolated PostgreSQL dead-letter queue, preventing silent data loss. Sends interactive Slack alerts with one-click replay buttons to re-run modified records instantly.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>4. Git Version Control &amp; CI/CD</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Every workflow is committed as a portable JSON definition to your private Git repository, allowing direct branch testing across dev, staging, and production environments with zero vendor lock-in.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Negative Space: When NOT to build self-hosted n8n automations */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// negative space & honest guidance'}</p>
            <h2 style={{ marginTop: '10px' }}>When you should NOT build custom n8n workflow automations</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              Self-hosted workflow engineering requires ongoing infrastructure ownership. Do not deploy self-hosted n8n if:
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Low Execution Volume (&lt; 200 Tasks/Mo)</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  If your business only runs a handful of simple automations each month, a free or $20/month Zapier plan is more practical than managing a private cloud server.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Native Tool Sync is Sufficient</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  If you only need to sync standard HubSpot contacts to Shopify customers using native, supported marketplace integrations without custom data mapping, custom automation is unnecessary.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Zero Cloud Infrastructure Access</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  If your IT policy strictly forbids provisioning private Docker instances or PostgreSQL databases on AWS, GCP, or DigitalOcean, hosted SaaS tools must be used instead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Use-Cases */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// industry workflows'}</p>
            <h2 style={{ marginTop: '10px' }}>Engineered for your industry operational stack</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {INDUSTRIES.map((ind) => (
                <div key={ind.name} className="pp-card" style={{ backgroundColor: '#FFFFFF' }}>
                  <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>{ind.name}</h3>
                  <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Failure Modes & Safety Engineering */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// resilience & error boundaries'}</p>
            <h2 style={{ marginTop: '10px' }}>How our automation pipelines handle operational failure</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '70ch' }}>
              Enterprise data operations cannot tolerate silent breaks. Here is how our architecture prevents sync failures:
            </p>
            <div className="mt-8 space-y-4">
              {FAILURE_MODES.map((fm) => (
                <div key={fm.title} className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                  <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>{fm.title}</h3>
                  <p className="mt-1 font-fj-body text-[0.875rem] text-red-700"><strong>Failure State:</strong> {fm.description}</p>
                  <p className="mt-1 font-fj-body text-[0.875rem] text-green-800"><strong>Engineered Mitigation:</strong> {fm.mitigation}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The 4 Core Enterprise Automation Topologies */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// enterprise automation topologies'}</p>
            <h2 style={{ marginTop: '10px' }}>4 production data pipelines we engineer on self-hosted n8n</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              From unstructured invoice ingestion to automated inventory rebalancing, here is how our pipelines operate:
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>TOPOLOGY 01 // PDF INVOICE EXTRACTION</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Multi-Modal Vendor Invoice Parsing</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Watches AP billing inboxes, extracts tabular line items from PDF invoices with vision models, executes 3-way matching against NetSuite POs, and writes verified draft bills for one-click accounting sign-off.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>TOPOLOGY 02 // OMNICHANNEL INVENTORY</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Multi-Warehouse Stock Rebalancing</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Monitors sell-through velocity across Shopify Plus, Amazon FBA, and regional 3PL nodes, dynamically adjusting buffer stocks and creating internal inventory transfer manifests before stockouts occur.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>TOPOLOGY 03 // CRM &amp; BILLING SYNC</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Stripe-to-QuickBooks Revenue Settlement</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Captures Stripe successful charge webhooks, calculates processing fees, generates customer invoices in QuickBooks Online, and updates HubSpot deal pipeline stages with complete transaction receipts.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>TOPOLOGY 04 // CLIENT ONBOARDING</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Automated B2B Client Provisioning</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Triggers upon signed DocuSign contracts: generates shared Google Drive client folders, creates customer accounts in project management software, posts team kickoff briefs in Slack, and issues initial deposit invoices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// comparison'}</p>
            <h2 style={{ marginTop: '10px' }}>FactoryJet custom automation vs. traditional approaches</h2>
            <div style={{ marginTop: '28px', overflowX: 'auto' }}>
              <table className="pp-table" style={{ width: '100%', minWidth: '640px' }}>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th className="me">FactoryJet Custom Pipeline</th>
                    <th>DIY Zapier / Make Subscriptions</th>
                    <th>Traditional IT Outsourcer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="me">
                    <td><strong>Cost Model</strong></td>
                    <td><strong>Fixed implementation build (no per-task markup)</strong></td>
                    <td>Aggressive recurring per-task fee tiers</td>
                    <td>Hourly billing with open-ended scope</td>
                  </tr>
                  <tr>
                    <td><strong>Unstructured PDF &amp; Document Parsing</strong></td>
                    <td>Yes (multi-modal LLM extraction)</td>
                    <td>Requires expensive third-party add-ons</td>
                    <td>Manual custom OCR coding</td>
                  </tr>
                  <tr>
                    <td><strong>Data Privacy &amp; VPC Hosting</strong></td>
                    <td>Yes (runs on your AWS/GCP cloud)</td>
                    <td>No (data processed on vendor servers)</td>
                    <td>Depends on manual configuration</td>
                  </tr>
                  <tr>
                    <td><strong>Error Recovery &amp; Dead-Letter Queues</strong></td>
                    <td>Yes (automatic retries + Slack alerts)</td>
                    <td>Basic error notifications</td>
                    <td>Custom logging required</td>
                  </tr>
                  <tr>
                    <td><strong>Code &amp; Workflow File Ownership</strong></td>
                    <td>Yes (you own all JSON &amp; Python repo)</td>
                    <td>Locked inside proprietary vendor clouds</td>
                    <td>Often withheld under proprietary retainers</td>
                  </tr>
                  <tr>
                    <td><strong>Implementation Timeline</strong></td>
                    <td>2 to 4 weeks to production</td>
                    <td>Ongoing DIY maintenance</td>
                    <td>3 to 6 months typical</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Selection Checklist: How to Choose a Partner */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// buyer checklist'}</p>
            <h2 style={{ marginTop: '10px' }}>How to evaluate an enterprise workflow automation partner</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
              {SELECTION_CRITERIA.map((sc) => (
                <div key={sc.num} className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                  <span className="font-fj-mono font-bold text-[#B23E13]" style={{ fontSize: '13px' }}>{sc.num}</span>
                  <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>{sc.title}</h3>
                  <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">{sc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Journey */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// implementation process'}</p>
            <h2 style={{ marginTop: '10px' }}>From process audit to live pipeline in 3 weeks</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
              {STEPS.map((step) => (
                <div key={step.n} className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                  <span className="font-fj-mono font-bold text-[#B23E13]" style={{ fontSize: '13px' }}>{step.n}</span>
                  <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>{step.t}</h3>
                  <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real Proof / Testimonials */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// verified proof'}</p>
            <h2 style={{ marginTop: '10px' }}>Built for high-volume operational workflows</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="pp-card" style={{ padding: '28px', backgroundColor: '#FFFFFF' }}>
                <p className="font-fj-body text-[1rem] leading-relaxed text-fj-neutral-700 italic">
                  &ldquo;We were manually copying hundreds of dealer purchase orders from PDF emails into our ERP every week. FactoryJet built an n8n pipeline that reads every attachment, validates part numbers, and writes clean orders to NetSuite in seconds.&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <Image
                    src="/images/testimonials/vishal-impulse-branding-160.webp"
                    alt="Vishal K, Managing Director at Impulse Branding"
                    width={48}
                    height={48}
                    className="rounded-full border border-fj-neutral-200"
                  />
                  <div>
                    <p className="font-fj-body font-bold text-fj-ink">Vishal K.</p>
                    <p className="font-fj-mono text-[11px] text-fj-neutral-400">Managing Director, Impulse Branding (B2B Distribution)</p>
                  </div>
                </div>
              </div>

              <div className="pp-card" style={{ padding: '28px', backgroundColor: '#FFFFFF' }}>
                <p className="font-fj-body text-[1rem] leading-relaxed text-fj-neutral-700 italic">
                  &ldquo;Our order fulfillment and accounting sync used to break whenever customers changed billing addresses mid-shipment. The self-healing workflow handles exception routing automatically, saving us hours of manual reconciliations.&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <Image
                    src="/images/testimonials/ricky-belle-maison-160.webp"
                    alt="Ricky B, Founder at Belle Maison"
                    width={48}
                    height={48}
                    className="rounded-full border border-fj-neutral-200"
                  />
                  <div>
                    <p className="font-fj-body font-bold text-fj-ink">Ricky B.</p>
                    <p className="font-fj-mono text-[11px] text-fj-neutral-400">Founder, Belle Maison (DTC Home Goods)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Questions operations leaders ask before deploying automated pipelines"
          lead="Everything you need to know about n8n architecture, ERP connectors, error recovery and data ownership."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* Final CTA */}
        <FinalCTA
          eyebrow="READY TO AUTOMATE YOUR DATA FLOWS?"
          headline="Scope your custom AI workflow automation today."
          sub="Book a 30-minute discovery call with our engineering team. We will map your repetitive manual steps, review your tool architecture, and provide a fixed-price implementation blueprint."
          primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
          secondaryCta={{ label: 'View AI Agent Overview', href: '/services/ai-agent-development' }}
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
