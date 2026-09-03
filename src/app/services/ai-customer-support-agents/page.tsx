import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import FAQ, { type FAQCategory, type FAQItem } from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const PAGE_MODIFIED = '2026-09-03';
const CANONICAL_URL = 'https://factoryjet.com/services/ai-customer-support-agents';

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below, so the two
 *  can never drift into showing a different path than the schema claims. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI Customer Support Agents', url: CANONICAL_URL },
];

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
    canonical: CANONICAL_URL,
    languages: {
      'en-US': CANONICAL_URL,
      'x-default': CANONICAL_URL,
    },
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
      "Traditional chatbots follow rigid decision trees. They give pre-written answers and cannot act on their own. A custom AI support agent works differently. It reads the customer's real question, not just keywords. It checks live records in Shopify and your ERP system. Then it takes real action. It issues a return label, changes a shipping address, or updates a subscription plan, right inside your help desk.",
  },
  {
    category: 'basics',
    question: 'What percentage of customer support tickets can an AI agent resolve end to end?',
    answer:
      'For structured ticket types, the numbers are strong. Think order status, returns, address changes, product questions, and subscription changes. A custom agent resolves 65 percent to 80 percent of that volume on its own. No human agent needs to step in. The rest goes to your team automatically. Each handoff carries the full conversation history. Your human agent sees everything already. The customer never has to repeat themselves.',
  },
  {
    category: 'basics',
    question: 'How does an AI support agent handle complex customer inquiries or angry sentiment?',
    answer:
      "Some cases need a human touch right away. That includes questions outside the agent's defined tools, angry or upset customers, and refund requests above the approved limit. In each case, the agent hands off the conversation immediately. It routes the ticket to a human specialist in Zendesk, Gorgias, or Slack. A short summary and the customer's records go along with it, so nothing gets lost.",
  },
  {
    category: 'basics',
    question: 'Can the AI support agent communicate fluently in languages other than English?',
    answer:
      "Yes. The agent speaks English and Spanish natively. It detects which language the customer is using from their very first message. Then it answers in that same language, pulling from a translated knowledge base. A Spanish-speaking customer never has to pick a language option. They never get routed through an English-first menu first. They just get a real answer, in Spanish, right away.",
  },
  {
    category: 'integrations',
    question: 'Which help desk platforms and ticketing systems do you integrate with?',
    answer:
      'We build direct, two-way connectors for Zendesk, Gorgias, Intercom, Freshdesk, Front, Salesforce Service Cloud, and Kustomer. These run on webhooks and REST APIs. The agent reads and writes ticket fields, tags, and macros right inside your existing help desk. It sees the same ticket history and internal notes a human rep would see. Nobody needs a second browser tab to check a conversation.',
  },
  {
    category: 'integrations',
    question: 'How does the support agent connect to Shopify and ecommerce backends?',
    answer:
      'The agent connects through the Shopify Admin GraphQL API. It looks up order history, checks inventory locations, and pulls live tracking numbers from the fulfillment carrier. It can also start an approved return. Every lookup uses a read-only API token, so it cannot accidentally change order or inventory data. Write actions, like issuing a return, are limited to exactly the fields your team approves during setup.',
  },
  {
    category: 'integrations',
    question: 'Can the agent read from internal company knowledge bases and Google Docs?',
    answer:
      "Yes. The agent uses Retrieval Augmented Generation, or RAG. This method lets it search your real documents for facts. It runs on a vector search database, like pgvector or Pinecone. It reads your live return policies, shipping terms, warranties, and product manuals. There is no need to retrain the underlying model. Update a policy document or a Google Doc, and the agent's answers update within minutes, not weeks.",
  },
  {
    category: 'integrations',
    question: 'How does the agent integrate with enterprise ERP and WMS platforms?',
    answer:
      'We build custom Model Context Protocol connectors and secure API endpoints. These connect to NetSuite, Microsoft Dynamics 365, SAP, ShipBob, and custom warehouse management systems. Each connector only touches the specific tables and fields the agent needs for its ticket work. It never gets a broad database credential that could reach unrelated financial or HR records.',
  },
  {
    category: 'safety',
    question: 'What technical safeguards prevent the AI agent from hallucinating or issuing unauthorized refunds?',
    answer:
      'Safety does not rely on prompt wording alone. It is enforced in the code itself. We use strict JSON schema validation on every action the agent takes. We set hard dollar limits, for example a $50 refund cap without human sign-off. We restrict exactly which database fields the agent can write to. And every action gets logged in an audit trail that cannot be edited or deleted.',
  },
  {
    category: 'safety',
    question: 'How is proprietary customer data protected during AI inference?',
    answer:
      "Every AI call runs under a zero-data-retention agreement with Anthropic and OpenAI. Customer data is processed inside your own private cloud, not a shared one. It is never used to train a public AI model. Conversation logs and order data stay in databases you control. Access is limited too. Only your authorized support staff, and the agent itself, can read a given customer's record.",
  },
  {
    category: 'safety',
    question: 'How do you test and evaluate support agent performance prior to launch?',
    answer:
      'Before an agent ever talks to a real customer, it has to pass a test. We build an automated evaluation harness using 500 or more of your own closed tickets. It measures accuracy, tool-calling reliability, tone, and how well the agent knows when to escalate. The agent must clear a minimum score on this benchmark first. We also re-run the full test suite after every prompt or connector change.',
  },
  {
    category: 'safety',
    question: 'What compliance frameworks does the support agent architecture satisfy?',
    answer:
      'The architecture is built for compliance. It meets SOC 2 Type II controls. It follows the California Consumer Privacy Act and PCI DSS payment standards. Sensitive card numbers are tokenized, so the agent never stores or logs the real number in plain text. A customer can ask to delete their data, or make a request under CCPA. That request routes to a documented manual review process.',
  },
  {
    category: 'process',
    question: 'What is the typical timeline to build and deploy a custom AI support agent?',
    answer:
      'Most builds take 3 to 5 weeks from start to finish. That covers discovery, connector engineering, shadow-mode testing, and a gradual rollout. A single-platform deployment often finishes closer to three weeks. A more complex build usually takes longer. Think multiple ERP systems, or five or more ticket categories. Those land closer to the five-week mark.',
  },
  {
    category: 'process',
    question: 'What is shadow mode and how does it reduce deployment risk?',
    answer:
      'In shadow mode, the agent works on real, live tickets, but nothing gets sent yet. It drafts a suggested reply, and a human reviews it first. Once human approval passes 95 percent for a ticket category, we turn on autonomous sending for that category. This catches mistakes and edge cases before a customer ever sees an AI-written reply. Nothing gets discovered the hard way, after launch.',
  },
  {
    category: 'process',
    question: 'Who owns the source code, prompts, and system connectors?',
    answer:
      'You own all of it: the Git repository, the prompt templates, the evaluation datasets, and the cloud infrastructure, 100 percent. We hand over full documentation and every deployment asset when the project finishes. There is no locked runtime, no licensed platform, and no recurring per-agent fee standing between your team and the code. You can change, extend, or move the agent in-house any time after handoff.',
  },
  {
    category: 'process',
    question: 'How do we schedule a customer support automation consultation with FactoryJet?',
    answer:
      'You can book a 30-minute discovery call directly with founder Bhavesh Barot. We review your ticket volume and resolution times, then send a fixed-price proposal. The call looks at your real queue data. It is not a generic sales pitch. You leave with a specific automation-rate estimate and a real timeline, not a vague promise.',
  },
  {
    category: 'scenarios',
    question: 'Can the AI agent look up live shipment tracking instead of giving a generic "processing" reply?',
    answer:
      "Yes. For an order-status question, the agent looks up the order in Shopify or NetSuite. Then it pulls live tracking straight from the carrier's own API. The customer gets the real current location and delivery window, not a generic processing label. It only escalates to a human when a shipment is marked lost, badly delayed, or when the carrier's API itself fails to respond.",
  },
  {
    category: 'scenarios',
    question: 'How does the agent decide whether to auto-approve a refund or send it to a human?',
    answer:
      'The agent checks the order date against your return window first. It confirms the item is not on your excluded-SKU list. Then it calculates the refund or store-credit amount. If that amount is under a dollar cap you set, it acts right away. It issues the refund and prints the return label. Anything above that cap goes to a human approver, with the full calculation already attached.',
  },
  {
    category: 'scenarios',
    question: 'Can customers change or pause their subscription directly through the AI agent?',
    answer:
      'Yes. First, the agent verifies who the customer is. Then it pulls up their subscription record. From there, it can pause a cycle, skip a shipment, or swap a product variant. It can update the card on file too, directly in your billing platform. It confirms the change and the next billing date, in the same conversation.',
  },
  {
    category: 'scenarios',
    question: "What happens when the AI agent can't resolve a technical troubleshooting case?",
    answer:
      'The agent walks the customer through a diagnostic script first. That script is built from your own troubleshooting documentation. Many cases match a known fix and get resolved right there. When one does not, the agent opens a warranty or RMA case. It attaches the full diagnostic transcript. Your specialist starts from where the automated diagnosis left off, not from zero.',
  },
  {
    category: 'scenarios',
    question: 'Beyond English and Spanish, can the AI support agent be extended to additional languages?',
    answer:
      'The agent ships with native English and Spanish support out of the box. Those cover what most US commerce brands need first. Its answers come from a shared RAG knowledge base, not hard-coded scripts. That matters for adding new languages later. We just translate the knowledge base and check the tone. We do not have to rebuild the agent\'s underlying logic.',
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
  itemListElement: BREADCRUMB_ITEMS.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
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
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* HERO SECTION */}
        <section className="pp-hero">
          <div className="pp-hero-grid">
            <div>
              <p className="pp-eyebrow">// AUTONOMOUS CUSTOMER SERVICE ENGINEERING</p>
              <h1 className="pp-h1">
                Custom <span className="pp-grad">AI Customer Support</span> Agent Development
              </h1>
              <p className="pp-lead">
                We build autonomous support agents that resolve real tickets inside Zendesk, Gorgias, and Intercom. They connect to live Shopify, ERP, and CRM records. A human stays in the loop for anything that needs judgment.
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
                An AI customer support agent is software that reads and answers customer tickets on its own. It receives a ticket through your help desk&apos;s webhook. It figures out what the customer actually needs. Then it makes secure API calls into your ecommerce and ERP systems. It resolves the ticket directly: tracking an order, processing a return, or updating an address. Anything outside its rules goes to a human, every time.
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
                  Nearly three-quarters of consumers will switch to a competitor after repeated bad service. Fast, consistent ticket resolution is not just a nice-to-have. It is a retention issue.
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
                  Gartner projects agentic AI will resolve up to 80 percent of common service issues on its own by 2029.
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
                  Copy-pasting order details and status lookups is repetitive work. Removing it is a widely cited factor in frontline agent engagement. It frees your human reps to focus on cases that actually need judgment.
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
                  The agent does not just give advice. It takes action. It connects through GraphQL. It checks warehouse fulfillment status, updates a delivery address before dispatch, prints a prepaid return label, or applies store credit. All of it happens inside guardrails your team defines. This covers what happens after checkout. When the gap is checkout or product-page conversion instead, our{' '}
                  <Link href="/services/ecommerce-cro-agency" className="underline hover:text-[#F05A28]">
                    ecommerce CRO agency
                  </Link>{' '}
                  services cover that side of the funnel.
                </p>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  02 // KNOWLEDGE RAG
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Real-Time Knowledge Retrieval</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  A vector search runs against your return policies, sizing guides, and technical documentation in real time. When you update your catalog, the agent&apos;s answers update instantly. No fine-tuning required.
                </p>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  03 // HUMAN ESCALATION
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Smart Human-in-the-Loop Hand-off</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  An unclear question, a high refund amount, or an upset customer triggers an automatic handoff. It routes to a senior human agent. A short summary of the case goes along with it.
                </p>
              </li>

              <li className="pp-card pp-bento-wide p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  04 // MULTI-LINGUAL SUPPORT
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Fluent English &amp; Spanish Communication</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Spanish-speaking customers get answers in fluent, natural Spanish, not a stiff translation. The tone matches your brand&apos;s own communication standards across the US.
                </p>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  05 // ENTERPRISE SECURITY
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Zero-Data-Retention Security</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Payment details and personal information stay inside your own private cloud. They never leave that perimeter.
                </p>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  06 // 100% CODE OWNERSHIP
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Zero Per-Seat SaaS Taxes</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  You own all the code, connectors, and evaluation suites. You pay standard model token costs. There is no recurring per-agent licensing fee.
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
                A generic chatbot script cannot query an order record. It cannot write a refund back to your ERP either. So we build separate tool-calling logic for each high-volume ticket category, instead of one all-purpose script.
              </p>
            </div>

            <p className="text-sm text-[#46403B] text-center max-w-3xl mx-auto mb-12">
              <span className="font-semibold text-[#14110F]">51 percent of consumers</span> would rather resolve a routine question with a bot than wait for a human. Separately, Gartner projects agentic AI will resolve 80 percent of common service issues on its own by 2029, while cutting operating costs 30 percent.{' '}
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
                  &ldquo;Where is my order&rdquo; is usually the single highest-volume ticket type in any commerce help desk. Answering it well takes real work. It means checking the order record, the fulfillment carrier, and sometimes a warehouse system. It is not just sending back a generic status line.
                </p>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  The agent queries Shopify or NetSuite directly for the order record. It pulls live tracking status from the fulfillment carrier&apos;s API. Then it replies inside Zendesk or Gorgias with the real current location and delivery window. It escalates to a human in three cases only: lost, badly delayed, or a carrier API failure.
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
                  Checking a return window by hand is repetitive work. So is confirming an item is not final-sale, and calculating the right refund. But it still has to be right every single time. Get it wrong, and you lose either margin or trust.
                </p>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  The agent checks the order date against your return window. It confirms the SKU is not excluded. It calculates the refund or store-credit amount. Under your defined dollar cap, it issues the refund automatically and prints the prepaid return label. Above that cap, it routes to a human approver instead. Either way, the transaction gets logged back to Gorgias and your ERP.
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
                  A customer might ask to pause a subscription, swap a product, or update a card on file. They expect it handled right away, not a ticket that sits for a day while someone edits records by hand.
                </p>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  The agent verifies the customer first. Then it pulls their subscription record. It makes the change directly in your subscription and billing platform. That means pause, skip a cycle, swap a variant, or update the payment method. It confirms the change and the next billing date, right in the same Zendesk or Intercom thread.
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
                  A hardware or software issue needs a structured conversation first. That is the only way to tell a simple fix from a real defect. Routing every technical ticket straight to a specialist wastes their time on cases that have a standard fix already.
                </p>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  The agent walks the customer through a diagnostic script built from your own troubleshooting documentation. Many cases match a known fix and get resolved on the spot. When one does not, the agent opens a warranty or RMA case. The full diagnostic transcript is already attached, so the specialist is not starting from zero.
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
                  More and more US brands serve Spanish-speaking households as a primary language. Routing all of that volume to one small bilingual team creates its own bottleneck, separate from the English queue.
                </p>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  The agent ships with English and Spanish built in. It detects the customer&apos;s language automatically. It uses the same knowledge base and order data either way. Its answers come from a shared RAG knowledge base, not hard-coded scripts. That means we can add new languages later just by translating that knowledge base. We do not have to rebuild the agent.
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

        {/* SYSTEMS COVERAGE */}
        <section className="pp-section pp-tint">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="pp-h2 text-center">Which Help Desk, Commerce, and ERP Systems We Connect To</h2>
              <p className="text-base text-[#46403B] mt-3">
                Every support team runs different software. Here is exactly what we connect to today, and what each connection actually does.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="pp-card p-6 bg-white">
                <h3 className="text-base font-bold text-[#14110F] mb-4">Help Desk &amp; Ticketing</h3>
                <ul className="space-y-3 text-sm text-[#46403B] leading-relaxed list-none p-0 m-0">
                  <li><span className="font-bold text-[#14110F]">Zendesk</span>: full ticket field read and write, macros, and tagging through native REST APIs.</li>
                  <li><span className="font-bold text-[#14110F]">Gorgias</span>: ecommerce-aware ticketing with direct Shopify order context in every ticket.</li>
                  <li><span className="font-bold text-[#14110F]">Intercom</span>: live chat and email tickets in one shared inbox.</li>
                  <li><span className="font-bold text-[#14110F]">Freshdesk</span>: ticket automation for growing support teams.</li>
                  <li><span className="font-bold text-[#14110F]">Front</span>: shared inbox workflows for teams that split support across email and chat.</li>
                  <li><span className="font-bold text-[#14110F]">Salesforce Service Cloud</span>: case management for enterprise support teams already on Salesforce.</li>
                  <li><span className="font-bold text-[#14110F]">Kustomer</span>: a unified customer timeline across every channel.</li>
                </ul>
              </div>

              <div className="pp-card p-6 bg-white">
                <h3 className="text-base font-bold text-[#14110F] mb-4">Commerce &amp; ERP</h3>
                <ul className="space-y-3 text-sm text-[#46403B] leading-relaxed list-none p-0 m-0">
                  <li><span className="font-bold text-[#14110F]">Shopify</span> and <span className="font-bold text-[#14110F]">Shopify Plus</span>: order history, inventory, and fulfillment through the Admin GraphQL API.</li>
                  <li><span className="font-bold text-[#14110F]">NetSuite</span>: order records, inventory, and financial data for larger commerce operations.</li>
                  <li><span className="font-bold text-[#14110F]">Microsoft Dynamics 365</span> and <span className="font-bold text-[#14110F]">SAP</span>: enterprise ERP data for complex, multi-warehouse brands.</li>
                  <li><span className="font-bold text-[#14110F]">ShipBob</span>: live fulfillment and shipping status for 3PL-managed brands.</li>
                </ul>
              </div>

              <div className="pp-card p-6 bg-white">
                <h3 className="text-base font-bold text-[#14110F] mb-4">AI Infrastructure</h3>
                <ul className="space-y-3 text-sm text-[#46403B] leading-relaxed list-none p-0 m-0">
                  <li><span className="font-bold text-[#14110F]">Anthropic</span> and <span className="font-bold text-[#14110F]">OpenAI</span> models, under zero-data-retention agreements.</li>
                  <li><span className="font-bold text-[#14110F]">pgvector</span> and <span className="font-bold text-[#14110F]">Pinecone</span> for vector search across your knowledge base.</li>
                  <li><span className="font-bold text-[#14110F]">Twilio</span> and <span className="font-bold text-[#14110F]">SendGrid</span> for SMS and email notifications tied to a ticket.</li>
                </ul>
                <p className="mt-6 text-sm text-[#6E655F] leading-relaxed border-t border-[#E7DED6] pt-4">
                  Running a platform we have not listed? We scope a custom connector against its published API. The same integration approach shaped our{' '}
                  <Link href="/case-studies/belle-maison-ecommerce-success" className="underline hover:text-[#F05A28]">
                    Belle Maison quote-to-cash rebuild
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHERE THE AGENT SITS: IMAGE BAND */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="pp-h2 text-center">Where the Agent Sits Inside Your Support Stack</h2>
              <p className="text-base text-[#46403B] mt-3">
                Here is what the work actually looks like once an agent goes live.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <figure className="m-0">
                <div className="relative rounded-2xl overflow-hidden border border-[#E7DED6] aspect-[4/3]">
                  <Image
                    src="/images/ai-support/support-ops-ticket-dashboard.jpg"
                    alt="A support operations lead reviewing a live ticket queue dashboard on a wall monitor"
                    width={1376}
                    height={768}
                    className="absolute inset-0 h-full w-full object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <figcaption className="mt-3 text-xs text-[#6E655F] leading-relaxed">
                  A support lead reviewing live ticket queue metrics during shadow-mode evaluation.
                </figcaption>
              </figure>

              <figure className="m-0">
                <div className="relative rounded-2xl overflow-hidden border border-[#E7DED6] aspect-[4/3]">
                  <Image
                    src="/images/ai-support/support-agent-desk-review.jpg"
                    alt="Close view of hands typing on a laptop while reviewing an agent-drafted support reply"
                    width={1376}
                    height={768}
                    className="absolute inset-0 h-full w-full object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <figcaption className="mt-3 text-xs text-[#6E655F] leading-relaxed">
                  An agent-drafted reply moving through human review before it reaches a customer.
                </figcaption>
              </figure>

              <figure className="m-0">
                <div className="relative rounded-2xl overflow-hidden border border-[#E7DED6] aspect-[4/3]">
                  <Image
                    src="/images/ai-support/ecommerce-fulfillment-scan.jpg"
                    alt="A warehouse fulfillment worker scanning a shipment the support agent references for order-status tickets"
                    width={1376}
                    height={768}
                    className="absolute inset-0 h-full w-full object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <figcaption className="mt-3 text-xs text-[#6E655F] leading-relaxed">
                  Order and fulfillment data the agent reads before it answers a shipping question.
                </figcaption>
              </figure>
            </div>

            <p className="text-sm text-[#46403B] leading-relaxed max-w-3xl mx-auto text-center">
              Every ticket the agent touches starts with a live lookup, not a script. It checks the order record. It checks the fulfillment status. Only then does it draft a reply. A human reviewer sees every draft during shadow mode, before any of it reaches a real customer.
            </p>
          </div>
        </section>

        {/* MID-PAGE CTA */}
        <MidPageCTA
          headline="Not sure which ticket queue to automate first?"
          sub="Send us your current Zendesk or Gorgias ticket breakdown. We'll show you exactly which category clears fastest, and where a human should still sit."
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

        {/* ENGINEERING STACK */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="pp-h2 text-center">The AI Support Agent Engineering Stack</h2>
              <p className="text-base text-[#46403B] mt-3">
                What actually runs under the hood, from the first document lookup to the logged action.
              </p>
            </div>

            <ul className="pp-bento">
              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  01 // RETRIEVAL &amp; GROUNDING
                </span>
                <h3 className="text-lg font-bold text-[#14110F] mb-3">Every Answer Starts With a Real Lookup</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  The agent runs Retrieval Augmented Generation against your own knowledge base. It uses vector search and embeddings through pgvector or Pinecone. It only answers from documents you actually own, not a guess.
                </p>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  02 // FUNCTION CALLING &amp; TOOL USE
                </span>
                <h3 className="text-lg font-bold text-[#14110F] mb-3">The Agent Does Not Just Talk. It Acts.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Through function calling and tool use, it calls real APIs: Shopify, NetSuite, Zendesk, and your billing platform. Every action runs through a typed schema. It cannot send a malformed request.
                </p>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  03 // AGENT ORCHESTRATION
                </span>
                <h3 className="text-lg font-bold text-[#14110F] mb-3">Multi-Step Tickets, Sequenced in Order</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Our agent orchestration layer sequences tool calls in order: verify the customer, check the order, calculate the refund, then act. Each step is logged, so a support lead can trace exactly what happened.
                </p>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  04 // GUARDRAILS &amp; DOLLAR CAPS
                </span>
                <h3 className="text-lg font-bold text-[#14110F] mb-3">Rules That Live in Code, Not in a Prompt</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Guardrails sit between the agent and your systems. A refund above your dollar cap cannot be issued without a human. That rule lives in code, not in instructions the model could ignore.
                </p>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  05 // HUMAN IN THE LOOP
                </span>
                <h3 className="text-lg font-bold text-[#14110F] mb-3">The Agent Knows Its Own Limits</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Every deployment keeps a human in the loop for edge cases, high-value refunds, and upset customers. The agent hands off cleanly, with context attached, instead of guessing.
                </p>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  06 // EVALUATION HARNESS
                </span>
                <h3 className="text-lg font-bold text-[#14110F] mb-3">Tested Before It Talks to a Customer</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Before launch, the agent runs against an evaluation harness built from your own historical tickets. It has to clear a minimum accuracy score first. We re-run it after every change. The same evaluation approach carries over to our{' '}
                  <Link href="/services/ai-sdr-development" className="underline hover:text-[#F05A28]">
                    AI SDR agents
                  </Link>{' '}
                  that qualify inbound leads before a rep joins the call.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* ONBOARDING TIMELINE */}
        <section className="pp-section pp-tint">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="pp-h2 text-center">Onboarding Timeline: From Kickoff to Live Ticket Routing</h2>
              <p className="text-base text-[#46403B] mt-3">
                Every deployment follows the same four phases. Most builds go live in three to five weeks.
              </p>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none">
              <li className="pp-card p-6 md:p-8 bg-white">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 1 // WEEK 1</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Ticket Queue Audit &amp; Connector Scoping</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We look at your last 90 days of tickets. We find the highest-volume, most structured categories first. Then we scope exactly which help desk and ERP connectors the agent needs.
                </p>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 2 // WEEKS 2 TO 3</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Connector Engineering &amp; Knowledge Base Setup</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We build the API connectors. We load your knowledge base into the vector search index. Every connector is scoped to only the fields the agent actually needs.
                </p>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 3 // WEEKS 3 TO 4</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Shadow Mode Evaluation</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  The agent drafts real replies on live tickets, but nothing sends yet. Your team reviews every draft. We tune the agent until approval rates clear 95 percent.
                </p>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 4 // WEEKS 4 TO 5</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Gradual Autonomous Rollout</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We turn on autonomous sending, one ticket category at a time. Your team watches the dashboard. We stay hands-on through the first weeks of live traffic. The same phased-rollout discipline protects patients in our{' '}
                  <Link href="/services/healthcare-ai-agents" className="underline hover:text-[#F05A28]">
                    healthcare AI agents
                  </Link>{' '}
                  work, where the stakes for a mistake are even higher.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* FOUNDER LEADERSHIP */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-4">
                <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-4 shadow-md max-w-xs mx-auto">
                  <div className="relative rounded-xl overflow-hidden aspect-square">
                    <Image
                      src="/bhavesh_image.webp"
                      alt="Bhavesh Barot, Founder & CEO of FactoryJet"
                      width={682}
                      height={1024}
                      quality={95}
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 30vw"
                    />
                  </div>
                  <div className="pt-4 text-center">
                    <div className="font-bold text-base text-[#14110F]">Bhavesh Barot</div>
                    <div className="font-mono text-xs text-[#F05A28] font-bold">Founder &amp; CEO, FactoryJet</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <h2 className="pp-h2">Direct Engineering Leadership from Discovery to Deployment</h2>
                <p className="text-sm md:text-base text-[#46403B] leading-relaxed mt-4">
                  Support automation is not a plug-and-play widget. At FactoryJet, founder Bhavesh Barot runs every discovery call himself. We start by reviewing your ticket volume, your help desk&apos;s API access, and your highest-friction categories.
                </p>
                <p className="text-sm md:text-base text-[#46403B] leading-relaxed mt-4">
                  You work directly with senior engineers. They have already built production support agents. This is not a junior account manager reading from a script. The same senior-only approach runs across our broader{' '}
                  <Link href="/services/ai-agent-development" className="underline hover:text-[#F05A28]">
                    AI agent development
                  </Link>{' '}
                  practice, not just customer support.
                </p>
              </div>
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
                Speak directly with founder Bhavesh Barot. We will audit your current help desk queues and look at your highest-volume ticket categories. Then we send a fixed-price proposal with real deflection milestones.
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
