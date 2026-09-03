import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import FAQ, { type FAQCategory, type FAQItem } from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const PAGE_MODIFIED = '2026-09-02';

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
  { key: 'scenarios', label: 'Ticket Types & Support Scenarios' },
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
      'In structured queues covering order status lookups, return authorizations, shipping address corrections, product usage guidance, and subscription management, custom agents resolve 65 percent to 80 percent of volume autonomously without human agent intervention. The remaining volume routes to your human team with full conversation context attached, so agents start the handoff already informed instead of asking the customer to repeat themselves.',
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
      "Yes. The agent provides native multi-lingual support in English and Spanish, automatically detecting customer language, referencing translated knowledge base documentation, and responding in the customer native language with high contextual accuracy. Language detection happens on the very first message, so a Spanish-speaking customer never has to select a language option or get routed through an English-first menu before reaching the right conversation.",
  },
  {
    category: 'integrations',
    question: 'Which help desk platforms and ticketing systems do you integrate with?',
    answer:
      'We engineer native bi-directional connectors for Zendesk, Gorgias, Intercom, Freshdesk, Front, Salesforce Service Cloud, and Kustomer via webhooks and REST APIs. The agent reads and writes directly to ticket fields, tags, and macros inside your existing help desk, so agents see the same ticket history and internal notes a human rep would, and no separate tool or browser tab is required to review a conversation.',
  },
  {
    category: 'integrations',
    question: 'How does the support agent connect to Shopify and ecommerce backends?',
    answer:
      'The agent utilizes secure Shopify Admin GraphQL APIs to query customer order histories, verify inventory locations, check fulfillment carrier tracking numbers, and initiate approved return merchandise authorizations. Every lookup uses read-scoped API tokens for order and inventory data, while write actions like issuing an RMA are limited to the specific fields your team explicitly authorizes during setup.',
  },
  {
    category: 'integrations',
    question: 'Can the agent read from internal company knowledge bases and Google Docs?',
    answer:
      "Yes. Through Retrieval Augmented Generation (RAG) backed by pgvector or Pinecone, the agent references your real-time return policies, shipping terms, warranties, and technical product manuals without requiring model fine-tuning. When you update a policy document or Google Doc, the change is reflected in the agent's answers within minutes, not after a multi-week retraining cycle.",
  },
  {
    category: 'integrations',
    question: 'How does the agent integrate with enterprise ERP and WMS platforms?',
    answer:
      'We build custom Model Context Protocol (MCP) connectors and secure API endpoints connecting to NetSuite, Microsoft Dynamics 365, SAP, ShipBob, and custom warehouse management databases. Each connector is scoped to the specific tables and fields the agent actually needs for its ticket workflows, rather than a broad database credential that could touch unrelated financial or HR records.',
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
      'All AI reasoning calls utilize enterprise zero-data-retention agreements with Anthropic and OpenAI. Customer personal data is processed inside your private cloud security perimeter and is never utilized to train public foundation models. Conversation logs and order data live in databases you control, and access is scoped so only your authorized support staff and the agent itself can read a given customer\'s record.',
  },
  {
    category: 'safety',
    question: 'How do you test and evaluate support agent performance prior to launch?',
    answer:
      'We build an automated regression testing harness that runs against 500 or more historical closed tickets from your own help desk, measuring precision, tool calling accuracy, tone alignment, and escalation reliability before customer traffic is routed. The agent must clear your minimum accuracy threshold on this benchmark before it handles a single live conversation, and we re-run the full suite after every prompt or connector change.',
  },
  {
    category: 'safety',
    question: 'What compliance frameworks does the support agent architecture satisfy?',
    answer:
      'The architecture complies with SOC 2 Type II controls, California Consumer Privacy Act (CCPA/CPRA) regulations, and PCI DSS standards by tokenizing sensitive customer payment information. Payment card numbers are never stored or logged in plain text by the agent itself, and any deletion or data-access request a customer submits under CCPA routes to a documented manual review process.',
  },
  {
    category: 'process',
    question: 'What is the typical timeline to build and deploy a custom AI support agent?',
    answer:
      'A production-ready customer support agent connected to your help desk, commerce platform, and knowledge base is delivered in 3 to 5 weeks across discovery, connector engineering, shadow evaluation, and gradual rollout phases. Complex builds involving multiple ERP systems or five or more ticket categories typically land at the longer end of that range, while single-platform deployments often finish closer to three weeks.',
  },
  {
    category: 'process',
    question: 'What is shadow mode and how does it reduce deployment risk?',
    answer:
      'During shadow mode, the AI agent processes live incoming tickets in real time and drafts suggested resolutions internally for human agent review. Once human approval rates exceed 95 percent, autonomous sending is activated for selected ticket categories. This lets your team catch and correct any misclassified intent or edge case before a customer ever sees an AI-drafted reply, rather than discovering problems after launch.',
  },
  {
    category: 'process',
    question: 'Who owns the source code, prompts, and system connectors?',
    answer:
      'You own 100 percent of the Git repository, prompt templates, evaluation datasets, and cloud infrastructure. We hand over complete documentation and deployment assets upon completion. There is no proprietary runtime, licensed platform, or recurring per-agent fee standing between your team and the code, so you can modify, extend, or migrate the agent internally at any point after handoff.',
  },
  {
    category: 'process',
    question: 'How do we schedule a customer support automation consultation with FactoryJet?',
    answer:
      'You can book a 30-minute discovery call directly with founder Bhavesh Barot. We will audit your current ticket volume, resolution times, and deliver a fixed-price implementation proposal. The call focuses on your actual queue data, not a generic sales deck, so you leave with a specific automation-rate estimate and milestone timeline rather than a vague promise.',
  },
  {
    category: 'scenarios',
    question: 'Can the AI agent look up live shipment tracking instead of giving a generic "processing" reply?',
    answer:
      'Yes. For an order-status inquiry, the agent queries Shopify or NetSuite for the order record and pulls live tracking status directly from the fulfillment carrier API, replying with the actual current location and expected delivery window rather than a static status label. It escalates to a human only if the shipment is flagged lost, delayed past a threshold, or the carrier API itself errors out.',
  },
  {
    category: 'scenarios',
    question: 'How does the agent decide whether to auto-approve a refund or send it to a human?',
    answer:
      'The agent checks the order date against your published return window and confirms the item is not on your excluded-SKU list, then calculates the refund or store-credit amount. If the amount falls under a dollar cap you define, it issues the refund and generates the return label automatically. Anything above that cap routes to a human approver with the calculation already attached.',
  },
  {
    category: 'scenarios',
    question: 'Can customers change or pause their subscription directly through the AI agent?',
    answer:
      'Yes. After authenticating the customer, the agent pulls their current subscription record and can pause a cycle, skip a shipment, swap a product variant, or update the payment method directly against your subscription and billing platform, confirming the change and next billing date in the same conversation thread.',
  },
  {
    category: 'scenarios',
    question: "What happens when the AI agent can't resolve a technical troubleshooting case?",
    answer:
      'The agent works through a branching diagnostic script grounded in your own troubleshooting documentation first, and resolves the cases that match a known fix. When the issue does not resolve, it opens a warranty or RMA case and attaches the full diagnostic transcript, so the human specialist starts from the point where the automated diagnosis stopped instead of from zero.',
  },
  {
    category: 'scenarios',
    question: 'Beyond English and Spanish, can the AI support agent be extended to additional languages?',
    answer:
      'The agent ships with native English and Spanish support out of the box, covering the two languages most US commerce brands need first. Because responses are grounded in a shared Retrieval Augmented Generation knowledge base rather than hard-coded scripts, we can extend coverage to additional languages by translating that knowledge base and validating tone, without rebuilding the underlying agent logic.',
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
            <ul className="pp-stat-grid">
              {STATS.map((s, idx) => (
                <li key={idx} className="pp-stat-item">
                  <span className="pp-stat-num">{s.b}</span>
                  <span className="pp-stat-label">{s.s}</span>
                </li>
              ))}
            </ul>
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

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <li className="pp-card p-6 bg-white">
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">73%</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Will Switch After Repeated Bad Service</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  Nearly three-quarters of consumers will switch to a competitor after multiple bad customer service experiences, making fast, consistent ticket resolution a retention issue, not just a convenience.
                </p>
                <a
                  href="https://www.zendesk.com/blog/customer-service-statistics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F05A28] font-mono hover:underline"
                >
                  Source: Zendesk Customer Service Statistics &rarr;
                </a>
              </li>

              <li className="pp-card p-6 bg-white">
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">80%</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Routine Inquiry Deflection</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  Gartner projects agentic AI will autonomously resolve up to 80 percent of common customer service issues without human intervention by 2029.
                </p>
                <a
                  href="https://www.gartner.com/en/newsroom/press-releases/2025-03-05-gartner-predicts-agentic-ai-will-autonomously-resolve-80-percent-of-common-customer-service-issues-without-human-intervention-by-20290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F05A28] font-mono hover:underline"
                >
                  Source: Gartner Newsroom &rarr;
                </a>
              </li>

              <li className="pp-card p-6 bg-white">
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">Less Busywork</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">More Time for Complex Cases</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  Removing repetitive manual work like copy-pasting order details and status lookups is a widely cited factor in frontline agent engagement, freeing human reps to focus on cases that need real judgment.
                </p>
                <span className="text-xs text-[#6E655F] font-mono">
                  Directional observation, not a single verified study
                </span>
              </li>
            </ul>
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

            <ul className="pp-bento">
              <li className="pp-card pp-bento-wide p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  01 // DEEP SYSTEM TOOL CALLING
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Live Shopify, NetSuite &amp; WMS Execution</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  The agent does not just provide advice: it performs actions. It connects via GraphQL to check warehouse fulfillment statuses, adjust delivery addresses before dispatch, generate prepaid return labels, and apply store credits inside defined business guardrails.
                </p>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  02 // KNOWLEDGE RAG
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Real-Time Knowledge Retrieval</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Vector retrieval searches return policies, sizing guides, and technical documentation at runtime, ensuring answers reflect instant catalog updates without fine-tuning.
                </p>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  03 // HUMAN ESCALATION
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Smart Human-in-the-Loop Hand-off</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Ambiguous inquiries, high refund amounts, and agitated sentiment trigger automated routing to senior human agents with contextual summaries attached.
                </p>
              </li>

              <li className="pp-card pp-bento-wide p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  04 // MULTI-LINGUAL SUPPORT
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Fluent English &amp; Spanish Communication</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Serve Spanish-speaking customers with native grammatical precision, adhering to localized brand tone and customer communication standards across the United States.
                </p>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  05 // ENTERPRISE SECURITY
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Zero-Data-Retention Security</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Customer payment credentials and personal identifying information remain completely isolated inside your private cloud perimeter.
                </p>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  06 // 100% CODE OWNERSHIP
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Zero Per-Seat SaaS Taxes</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  You own all code, connectors, and evaluation suites. You pay only standard model token compute costs rather than expensive recurring per-agent licensing fees.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* SUB-VERTICAL DEEP DIVE: FIVE SUPPORT SCENARIOS */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-6">
              <h2 className="pp-h2 text-center">Five Ticket Types, Five Built-for-Purpose Workflows</h2>
              <p className="text-base text-[#46403B] mt-3">
                A generic chatbot script cannot query an order record or write a refund back to your ERP. We engineer distinct tool-calling logic for each high-volume ticket category instead of one all-purpose script.
              </p>
            </div>

            <p className="text-sm text-[#46403B] text-center max-w-3xl mx-auto mb-12">
              <span className="font-semibold text-[#14110F]">51 percent of consumers</span> say they would rather resolve a routine question with a bot than wait for a human agent, and Gartner projects agentic AI will autonomously resolve 80 percent of common service issues while cutting operating costs 30 percent by 2029.{' '}
              <a
                href="https://www.zendesk.com/blog/ai/productivity/ai-customer-service-statistics/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F05A28] font-mono text-xs hover:underline"
              >
                Source: Zendesk &rarr;
              </a>{' '}
              <a
                href="https://www.gartner.com/en/newsroom/press-releases/2025-03-05-gartner-predicts-agentic-ai-will-autonomously-resolve-80-percent-of-common-customer-service-issues-without-human-intervention-by-20290"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F05A28] font-mono text-xs hover:underline"
              >
                Source: Gartner Newsroom &rarr;
              </a>
            </p>

            <ul className="pp-bento n5">
              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  01 // ORDER STATUS &amp; SHIPMENT TRACKING
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Real Tracking Data, Not a Canned Reply</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-3">
                  &ldquo;Where is my order&rdquo; is typically the single highest-volume ticket category in any commerce help desk, and answering it well means cross-referencing the order record, the fulfillment carrier, and sometimes a warehouse system, not sending a generic status line.
                </p>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  The agent queries Shopify or NetSuite directly for the order record, pulls live tracking status from the fulfillment carrier API, and replies inside Zendesk or Gorgias with the actual current location and expected delivery window, escalating to a human only when a shipment is flagged lost, delayed past a threshold, or the carrier API itself errors out.
                </p>
                <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none p-0 m-0">
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Live Carrier Tracking Pull</li>
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Shopify/NetSuite Order Lookup</li>
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Delay-Threshold Escalation</li>
                </ul>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  02 // REFUNDS &amp; RETURN PROCESSING
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Policy Limits Enforced Every Time</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-3">
                  Manually checking whether a return falls inside the return window, confirming the item is not final-sale, and calculating the correct refund is repetitive but still has to be right every time. Getting it wrong either costs margin or costs trust.
                </p>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  The agent checks the order date against your published return window, confirms the SKU is not excluded, calculates the refund or store-credit amount, and either issues it automatically under a defined dollar cap or routes it to a human approver above that cap, generating the prepaid return label and logging the transaction back to Gorgias and your ERP.
                </p>
                <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none p-0 m-0">
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Return-Window &amp; SKU Validation</li>
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Dollar-Cap Auto-Approval</li>
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Prepaid Label Generation</li>
                </ul>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  03 // BILLING &amp; SUBSCRIPTION CHANGES
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Same-Conversation Account Changes</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-3">
                  Customers asking to pause a subscription, swap a product variant, or update a card on file expect it handled in the same conversation, not a ticket that sits for a day while someone manually edits records in a subscription platform.
                </p>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  The agent authenticates the customer, pulls their current subscription record, and executes the requested change (pause, skip a cycle, swap variant, update payment method) directly against your subscription and billing platform, confirming the change and the next billing date back in the same Zendesk or Intercom thread.
                </p>
                <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none p-0 m-0">
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Authenticated Self-Service Changes</li>
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Subscription Platform Write Access</li>
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Next-Billing-Date Confirmation</li>
                </ul>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  04 // TECHNICAL TROUBLESHOOTING
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Structured Diagnostics Before Escalation</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-3">
                  A hardware or software issue needs a structured diagnostic conversation before anyone can tell whether it is a simple fix or a genuine defect, and routing every technical ticket straight to a specialist wastes their time on cases that resolve with a standard fix.
                </p>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  The agent walks the customer through a branching diagnostic script grounded in your actual troubleshooting documentation, resolves the cases that match a known fix, and when the issue does not resolve, opens a warranty or RMA case with the full diagnostic transcript already attached so the specialist is not starting from zero.
                </p>
                <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none p-0 m-0">
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">RAG-Grounded Diagnostic Scripts</li>
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Warranty/RMA Case Creation</li>
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Full Transcript Handoff</li>
                </ul>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  05 // MULTI-LANGUAGE SUPPORT
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Native English &amp; Spanish, Extensible by Design</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-3">
                  Growing US brands increasingly serve Spanish-speaking households as a primary or co-primary language, and routing that volume to a small bilingual team creates a support bottleneck separate from the English queue.
                </p>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  The agent ships with native English and Spanish coverage out of the box, detecting the customer&apos;s language automatically and referencing the same knowledge base and order data as an English conversation. Because responses are grounded in a shared Retrieval Augmented Generation knowledge base rather than hard-coded scripts, additional languages can be added by translating that knowledge base rather than rebuilding the agent.
                </p>
                <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none p-0 m-0">
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Native English &amp; Spanish Coverage</li>
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Shared RAG Knowledge Base</li>
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Bilingual Human Escalation</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/* MID-PAGE CTA */}
        <MidPageCTA
          headline="Not sure which ticket queue to automate first?"
          sub="Send us your current Zendesk or Gorgias ticket breakdown and we'll show exactly which category clears fastest and where a human should still sit."
          label="Get a support automation audit"
        />

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
