import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import FAQ, { type FAQCategory, type FAQItem } from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const PAGE_MODIFIED = '2026-09-01';

export const metadata: Metadata = {
  title: 'AI Customer Support Agent Development USA | FactoryJet',
  description:
    'Custom AI customer support agents for US brands. Automate Zendesk, Gorgias, and Intercom ticket resolution with live ERP sync & human safety. Get an audit.',
  keywords: [
    'automate customer service',
    'ai customer support agent',
    'ai customer service agents',
    'custom ai support agent development',
    'zendesk ai agent integration',
    'gorgias ai agent development',
    'intercom ai agent customization',
    'autonomous customer service agent',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Customer Support Agent Development USA | FactoryJet',
    description:
      'Custom AI customer support agents for US commerce and operations teams. Automate order tracking, refunds, return authorizations, and CRM updates inside Zendesk, Gorgias, and Intercom.',
    url: 'https://factoryjet.com/services/ai-customer-support-agents',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet AI Customer Support Agent Development Services',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Customer Support Agent Development USA | FactoryJet',
    description:
      'Build custom autonomous support agents that resolve tickets in Zendesk, Gorgias, and Intercom with human-in-the-loop governance and zero hallucination risk.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-customer-support-agents',
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
   FAQ DATA
───────────────────────────────────────────────────────────────────────────── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'Core Capabilities' },
  { key: 'integrations', label: 'Help Desk & CRM Integrations' },
  { key: 'safety', label: 'Governance & Hallucination Prevention' },
  { key: 'process', label: 'Implementation & Ownership' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'basics',
    question: 'How do custom AI customer support agents differ from traditional rule-based chatbots?',
    answer:
      'Traditional chatbots follow rigid decision trees and provide pre-written answers. Custom AI support agents evaluate natural language intent, query live database records across Shopify and your ERP, decide appropriate actions against defined business rules, and execute real tasks such as issuing return labels, modifying order addresses, or updating subscription frequencies directly in your help desk.',
  },
  {
    category: 'basics',
    question: 'What percentage of customer support tickets can an AI agent resolve end to end?',
    answer:
      'In structured queues covering order status lookups, return authorizations, shipping address corrections, product usage guidance, and subscription management, custom agents resolve 65 percent to 80 percent of volume autonomously without human agent intervention.',
  },
  {
    category: 'basics',
    question: 'How does an AI support agent handle complex customer inquiries or angry sentiment?',
    answer:
      'When an inquiry falls outside predefined tool parameters, involves negative customer sentiment, or requires custom financial exceptions above authorized limits, the agent immediately routes the conversation to a human specialist in Zendesk, Gorgias, or Slack, providing an executive summary of the issue and relevant customer records.',
  },
  {
    category: 'basics',
    question: 'Can the AI support agent communicate fluently in languages other than English?',
    answer:
      'Yes. The agent provides native multi-lingual support in English and Spanish, automatically detecting customer language, referencing translated knowledge base documentation, and responding in the customer native language with high contextual accuracy.',
  },
  {
    category: 'integrations',
    question: 'Which help desk platforms and ticketing systems do you integrate with?',
    answer:
      'We engineer native bi-directional connectors for Zendesk, Gorgias, Intercom, Freshdesk, Front, Salesforce Service Cloud, and Kustomer via webhooks and REST APIs.',
  },
  {
    category: 'integrations',
    question: 'How does the support agent connect to Shopify and ecommerce backends?',
    answer:
      'The agent utilizes secure Shopify Admin GraphQL APIs to query customer order histories, verify inventory locations, check fulfillment carrier tracking numbers, and initiate approved return merchandise authorizations.',
  },
  {
    category: 'integrations',
    question: 'Can the agent read from internal company knowledge bases and Google Docs?',
    answer:
      'Yes. Through Retrieval Augmented Generation (RAG) backed by pgvector or Pinecone, the agent references your real-time return policies, shipping terms, warranties, and technical product manuals without requiring model fine-tuning.',
  },
  {
    category: 'integrations',
    question: 'How does the agent integrate with enterprise ERP and WMS platforms?',
    answer:
      'We build custom Model Context Protocol (MCP) connectors and secure API endpoints connecting to NetSuite, Microsoft Dynamics 365, SAP, ShipBob, and custom warehouse management databases.',
  },
  {
    category: 'safety',
    question: 'What technical safeguards prevent the AI agent from hallucinating or issuing unauthorized refunds?',
    answer:
      'Safety is enforced at the tool and code execution layer rather than prompt text alone. We implement strict JSON schema validation, transaction dollar limits (e.g. maximum $50 refund cap without human sign-off), field-level database write restrictions, and immutable audit logs.',
  },
  {
    category: 'safety',
    question: 'How is proprietary customer data protected during AI inference?',
    answer:
      'All AI reasoning calls utilize enterprise zero-data-retention agreements with Anthropic and OpenAI. Customer personal data is processed inside your private cloud security perimeter and is never utilized to train public foundation models.',
  },
  {
    category: 'safety',
    question: 'How do you test and evaluate support agent performance prior to launch?',
    answer:
      'We build an automated regression testing harness that runs against 500 or more historical closed tickets from your own help desk, measuring precision, tool calling accuracy, tone alignment, and escalation reliability before customer traffic is routed.',
  },
  {
    category: 'safety',
    question: 'What compliance frameworks does the support agent architecture satisfy?',
    answer:
      'The architecture complies with SOC 2 Type II controls, California Consumer Privacy Act (CCPA/CPRA) regulations, and PCI DSS standards by tokenizing sensitive customer payment information.',
  },
  {
    category: 'process',
    question: 'What is the typical timeline to build and deploy a custom AI support agent?',
    answer:
      'A production-ready customer support agent connected to your help desk, commerce platform, and knowledge base is delivered in 3 to 5 weeks across discovery, connector engineering, shadow evaluation, and gradual rollout phases.',
  },
  {
    category: 'process',
    question: 'What is shadow mode and how does it reduce deployment risk?',
    answer:
      'During shadow mode, the AI agent processes live incoming tickets in real time and drafts suggested resolutions internally for human agent review. Once human approval rates exceed 95 percent, autonomous sending is activated for selected ticket categories.',
  },
  {
    category: 'process',
    question: 'Who owns the source code, prompts, and system connectors?',
    answer:
      'You own 100 percent of the Git repository, prompt templates, evaluation datasets, and cloud infrastructure. We hand over complete documentation and deployment assets upon completion.',
  },
  {
    category: 'process',
    question: 'How do we schedule a customer support automation consultation with FactoryJet?',
    answer:
      'You can book a 30-minute discovery call directly with founder Bhavesh Barot. We will audit your current ticket volume, resolution times, and deliver a fixed-price implementation proposal.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD SCHEMAS
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
  '@id': 'https://factoryjet.com/services/ai-customer-support-agents#service',
  serviceType: 'AI customer support agent development',
  name: 'Custom AI Customer Support Agent Development Services',
  description:
    'Custom AI customer support agent development for US brands and enterprise teams: autonomous resolution of order status, return authorizations, refunds, and product questions inside Zendesk, Gorgias, Intercom, and Shopify.',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'BusinessAudience',
    name: 'DTC brands, B2B wholesale merchants, and mid-market customer support operations',
  },
};

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet Builds and Deploys a Custom AI Customer Support Agent',
  description: 'A 4-phase engineering process for building, evaluating, and launching safe autonomous customer support agents.',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Phase 1: Workflow Scoping & Queue Audit',
      text: 'Analyze historical help desk tickets to identify high-volume, structured categories with clear business rules for automation.',
    },
    {
      '@type': 'HowToStep',
      name: 'Phase 2: API Tool Calling & Knowledge Base RAG',
      text: 'Build typed Model Context Protocol connectors into Zendesk, Shopify, and NetSuite, wired to vector retrieval knowledge bases.',
    },
    {
      '@type': 'HowToStep',
      name: 'Phase 3: Shadow Mode & Benchmark Evaluation',
      text: 'Execute automated regression testing across 500 historical cases and run live shadow drafting with human agent review.',
    },
    {
      '@type': 'HowToStep',
      name: 'Phase 4: Phased Production Rollout & Monitoring',
      text: 'Activate autonomous resolution for approved ticket categories with automated real-time latency and sentiment monitoring.',
    },
  ],
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://factoryjet.com/services' },
    { '@type': 'ListItem', position: 3, name: 'AI Customer Support Agents', item: 'https://factoryjet.com/services/ai-customer-support-agents' },
  ],
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-customer-support-agents#webpage',
  url: 'https://factoryjet.com/services/ai-customer-support-agents',
  name: 'Custom AI Customer Support Agent Development Services USA | FactoryJet',
  description:
    'Custom AI customer support agent development for US brands: autonomous resolution inside Zendesk, Gorgias, Intercom, and Shopify with human-in-the-loop governance.',
  dateModified: `${PAGE_MODIFIED}T00:00:00Z`,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
    jobTitle: 'Founder, FactoryJet',
  },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  about: { '@id': 'https://factoryjet.com/services/ai-customer-support-agents#service' },
};

const STATS = [
  { b: 'Sub-60s', s: 'first response time across all channels' },
  { b: '65% to 80%', s: 'autonomous resolution on Tier-1 queues' },
  { b: 'Zero Slop', s: 'deterministic tool calling & strict guardrails' },
  { b: '100% Owned', s: 'private Git repo & cloud deployment' },
];

export default function AiCustomerSupportAgentsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />

      <SiteHeader locale="us" />

      <main className="pp-page">
        {/* HERO SECTION */}
        <section className="pp-hero">
          <div className="pp-hero-grid">
            <div>
              <p className="pp-eyebrow">// AUTONOMOUS CUSTOMER SERVICE ENGINEERING</p>
              <h1 className="pp-h1">
                Custom <span className="pp-grad">AI Customer Support</span> Agent Development
              </h1>
              <p className="pp-lead">
                Build autonomous customer support agents that resolve real tickets inside Zendesk, Gorgias, and Intercom. Connect live Shopify, ERP, and CRM records with human-in-the-loop escalation governance.
              </p>
              <HeroInlineForm
                source="services_ai_customer_support_agents"
                region="us"
                submitLabel="Request CX Automation Audit"
              />
            </div>

            <div className="pp-hero-card">
              <div className="flex items-center justify-between border-b border-[#E7DED6] pb-3 mb-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F05A28]">
                  Autonomous CX Architecture
                </span>
                <span className="text-xs text-[#8C827A]">Enterprise Production Stack</span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-1 border-b border-[#F5EFEA]">
                  <span className="text-[#46403B]">Supported Help Desks:</span>
                  <span className="font-semibold text-[#14110F]">Zendesk, Gorgias, Intercom</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F5EFEA]">
                  <span className="text-[#46403B]">Commerce Integration:</span>
                  <span className="font-semibold text-[#14110F]">Shopify Plus, NetSuite ERP</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F5EFEA]">
                  <span className="text-[#46403B]">Deployment Mode:</span>
                  <span className="font-semibold text-[#14110F]">Shadow Draft &rarr; Autonomous</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#46403B]">Data Privacy:</span>
                  <span className="font-semibold text-[#F05A28]">Zero-Data-Retention VPC</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS BAND */}
        <section className="pp-stat-band">
          <div className="pp-container">
            <div className="pp-stat-grid">
              {STATS.map((s, idx) => (
                <div key={idx} className="pp-stat-item">
                  <span className="pp-stat-num">{s.b}</span>
                  <span className="pp-stat-label">{s.s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ANSWER-FIRST DEFINITION SECTION */}
        <section className="pp-section pp-tint">
          <div className="pp-container">
            <div className="pp-card p-6 md:p-8 bg-white border-l-4 border-[#F05A28]">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                Concept Definition: Autonomous AI Customer Support Agent
              </span>
              <p className="text-base md:text-lg text-[#14110F] leading-relaxed font-medium">
                An AI customer support agent is an autonomous software system that receives customer inquiries via help desk webhooks, evaluates intent, executes secure API calls across ecommerce and ERP databases, and resolves tickets by performing actions such as order tracking, return processing, and address updates with strict human escalation safeguards.
              </p>
            </div>
          </div>
        </section>

        {/* VERIFIED MARKET STATISTICS */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="pp-h2 text-center">Verified Customer Service &amp; AI Research</h2>
              <p className="text-base text-[#46403B] mt-3">
                Primary benchmarks from leading customer experience and enterprise operations studies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="pp-card p-6 bg-white">
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">73%</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Demand Instant CX Resolution</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  Nearly three-quarters of consumer buyers expect immediate resolution to routine order tracking, exchange, and product inquiries.
                </p>
                <a
                  href="https://www.zendesk.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F05A28] font-mono hover:underline"
                >
                  Source: Zendesk CX Trends Report &rarr;
                </a>
              </div>

              <div className="pp-card p-6 bg-white">
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">80%</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Routine Inquiry Deflection</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  Gartner research projects that customer service organizations utilizing agentic AI resolve up to 80 percent of standard Tier-1 contacts.
                </p>
                <a
                  href="https://www.gartner.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F05A28] font-mono hover:underline"
                >
                  Source: Gartner Customer Service AI Report &rarr;
                </a>
              </div>

              <div className="pp-card p-6 bg-white">
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">3.8x</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Higher Human Agent Retention</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  Removing repetitive manual copy-pasting and order lookups significantly improves human customer support agent engagement and retention.
                </p>
                <a
                  href="https://hbr.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F05A28] font-mono hover:underline"
                >
                  Source: Harvard Business Review &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* BENTO GRID OF BENEFITS */}
        <section className="pp-section pp-tint">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="pp-h2 text-center">Engineering Architecture Built for Reliability</h2>
              <p className="text-base text-[#46403B] mt-3">
                Why custom AI support agents built on function calling outperform generic chatbot plugins.
              </p>
            </div>

            <div className="pp-bento">
              <div className="pp-card pp-bento-wide p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  01 // DEEP SYSTEM TOOL CALLING
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Live Shopify, NetSuite &amp; WMS Execution</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  The agent does not just provide advice: it performs actions. It connects via GraphQL to check warehouse fulfillment statuses, adjust delivery addresses before dispatch, generate prepaid return labels, and apply store credits inside defined business guardrails.
                </p>
              </div>

              <div className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  02 // KNOWLEDGE RAG
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Real-Time Knowledge Retrieval</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Vector retrieval searches return policies, sizing guides, and technical documentation at runtime, ensuring answers reflect instant catalog updates without fine-tuning.
                </p>
              </div>

              <div className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  03 // HUMAN ESCALATION
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Smart Human-in-the-Loop Hand-off</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Ambiguous inquiries, high refund amounts, and agitated sentiment trigger automated routing to senior human agents with contextual summaries attached.
                </p>
              </div>

              <div className="pp-card pp-bento-wide p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  04 // MULTI-LINGUAL SUPPORT
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Fluent English &amp; Spanish Communication</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Serve Spanish-speaking customers with native grammatical precision, adhering to localized brand tone and customer communication standards across the United States.
                </p>
              </div>

              <div className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  05 // ENTERPRISE SECURITY
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Zero-Data-Retention Security</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Customer payment credentials and personal identifying information remain completely isolated inside your private cloud perimeter.
                </p>
              </div>

              <div className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  06 // 100% CODE OWNERSHIP
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Zero Per-Seat SaaS Taxes</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  You own all code, connectors, and evaluation suites. You pay only standard model token compute costs rather than expensive recurring per-agent licensing fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VERTICAL USE CASES */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="pp-h2 text-center">Industry Support Workflows &amp; Use Cases</h2>
              <p className="text-base text-[#46403B] mt-3">
                Tailored automation logic configured to your industry operational requirements.
              </p>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              <div className="pp-card p-6 bg-white border border-[#E7DED6]">
                <h3 className="text-lg font-bold text-[#14110F] mb-2">DTC Apparel &amp; Footwear Brands</h3>
                <p className="text-sm text-[#46403B]">
                  Automates size exchange recommendations, generates prepaid USPS return labels, checks live warehouse inventory, and provides order tracking updates inside Gorgias or Zendesk.
                </p>
              </div>

              <div className="pp-card p-6 bg-white border border-[#E7DED6]">
                <h3 className="text-lg font-bold text-[#14110F] mb-2">B2B Wholesale &amp; Industrial Equipment</h3>
                <p className="text-sm text-[#46403B]">
                  Validates wholesale account tiers in NetSuite, calculates custom contract shipping freight rates, provides PDF spec sheet downloads, and routes RFQ reorders to account managers.
                </p>
              </div>

              <div className="pp-card p-6 bg-white border border-[#E7DED6]">
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Consumer Electronics &amp; Hardware</h3>
                <p className="text-sm text-[#46403B]">
                  Guides customers through multi-step hardware troubleshooting diagnostics, references warranty databases, and initiates warranty RMA claims with human validation checkpoints.
                </p>
              </div>

              <div className="pp-card p-6 bg-white border border-[#E7DED6]">
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Subscription &amp; Recurring Deliveries</h3>
                <p className="text-sm text-[#46403B]">
                  Enables customers to modify delivery frequencies, pause upcoming subscription shipments, switch flavors or product variants, and update billing details seamlessly.
                </p>
              </div>

              <div className="pp-card p-6 bg-white border border-[#E7DED6]">
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Healthcare &amp; Wellness Supplies</h3>
                <p className="text-sm text-[#46403B]">
                  Provides strict policy compliance guidance, answers non-clinical shipping and packaging inquiries, and escalates specialized health questions to human clinical specialists.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON MATRIX */}
        <section className="pp-section pp-tint">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="pp-h2 text-center">Support Automation Approaches Compared</h2>
              <p className="text-base text-[#46403B] mt-3">
                Detailed comparison of custom engineered AI agents versus standard alternatives.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Capabilities</th>
                    <th>Custom AI Agent (FactoryJet)</th>
                    <th>Generic SaaS Add-on Bots</th>
                    <th>Offshore Support Outsourcing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tr-me">
                    <td className="font-bold">Integration Depth</td>
                    <td className="font-semibold text-[#F05A28]">Deep custom ERP, WMS &amp; Shopify APIs</td>
                    <td>Surface-level FAQ text replies</td>
                    <td>Manual UI clicks across screens</td>
                  </tr>
                  <tr>
                    <td className="font-bold">First Response Time</td>
                    <td className="font-semibold text-[#14110F]">Sub-60 seconds 24/7/365</td>
                    <td>Instant but limited to fixed scripts</td>
                    <td>15 to 45 minute queue lag</td>
                  </tr>
                  <tr className="tr-me">
                    <td className="font-bold">Hallucination Safeguards</td>
                    <td className="font-semibold text-[#F05A28]">Typed JSON schemas &amp; refund limits</td>
                    <td>Prompt-level warnings only</td>
                    <td>Dependent on agent training</td>
                  </tr>
                  <tr>
                    <td className="font-bold">IP &amp; Code Ownership</td>
                    <td className="font-semibold text-[#14110F]">100% Client Owned (Private Git)</td>
                    <td>0% (Locked into vendor subscription)</td>
                    <td>N/A</td>
                  </tr>
                  <tr className="tr-me">
                    <td className="font-bold">Evaluation Harness</td>
                    <td className="font-semibold text-[#F05A28]">Pre-launch testing on 500+ real cases</td>
                    <td>Untested generic LLM baseline</td>
                    <td>Sample QA call audits</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQS SECTION */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Questions customer experience leaders ask about autonomous agents"
          lead="Detailed answers to common questions about customer service AI agent engineering, safety, and integrations."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* FINAL CTA */}
        <section className="pp-section pp-tint">
          <div className="pp-container">
            <div className="pp-card p-8 md:p-12 bg-white border border-[#F05A28]/20 text-center max-w-4xl mx-auto">
              <p className="pp-eyebrow">// READY TO AUTOMATE REPETITIVE CX QUEUES?</p>
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#14110F] mb-4">
                Schedule a 30-Minute Customer Support Automation Audit
              </h2>
              <p className="text-base text-[#46403B] max-w-2xl mx-auto mb-8">
                Speak directly with founder Bhavesh Barot. We will audit your current help desk queues, assess high-volume ticket categories, and provide a fixed-price implementation proposal with projected deflection milestones.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#F05A28] text-white font-semibold text-sm hover:bg-[#D8441A] transition-colors shadow-sm"
                >
                  Book Strategy Call via Calendly &rarr;
                </a>
                <ModalCTAButton
                  label="Request CX Proposal"
                  region="us"
                  btnVariant="secondary-light"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
