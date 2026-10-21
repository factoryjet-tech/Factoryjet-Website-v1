import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import FAQ, { type FAQCategory, type FAQItem } from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const PAGE_MODIFIED = '2026-10-21';
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
      'Build custom autonomous support agents that resolve tickets in Zendesk, Gorgias, and Intercom with human-in-the-loop governance and hard limits on every action.',
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
      'It depends on your ticket mix, so we measure it instead of promising a number. Structured types such as order status, returns, address changes and subscription changes are the best candidates. In shadow mode the agent drafts replies on your real tickets and your team approves or corrects each one, so you see the actual rate per category before anything goes live. Everything else goes to your team with the full history attached.',
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
  // Ported 2026-09-17 from the retired duplicate support page (301 to this URL).
  // Vendor billing and connector facts fetch-verified that day on intercom.com
  // and zendesk.com (pricing pages and help center articles).
  {
    category: 'basics',
    question: 'How is a custom support agent different from Intercom Fin or Zendesk AI agents?',
    answer:
      'Vendor agents are the fastest way to start. Intercom Fin bills per outcome and Zendesk bills per automated resolution, and both can reach outside systems through their own connectors or actions. A custom agent makes more sense when you need write actions and approval rules that span several systems, or when you want to own the code outright. We build custom agents, so weigh our view with that interest in mind.',
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
  // Added 2026-10-10 for two open buyer questions (Search Console, measured
  // 9 Oct 2026). Every vendor fact below was fetch-verified on 2026-10-09 on
  // the vendor's own documentation or product page: docs.gorgias.com,
  // support.zendesk.com, intercom.com/help, salesforce.com, manh.com,
  // kibocommerce.com and fluentcommerce.com.
  {
    category: 'integrations',
    question: 'Which customer service AI tools are capable of routing Spanish emails to automated workflows while English emails go to humans, and who delivers this?',
    answer:
      "Gorgias, Zendesk and Intercom can each do this with built-in settings, per their documentation, read October 9, 2026. Gorgias detects up to 54 languages, and a rule can read the ticket language and keep its AI Agent off the tickets you choose. Zendesk triggers can test the requester's language, and its Copilot add-on classifies the language of each new ticket. Intercom detects language on email, and a workflow can target the detected language and hand those emails to its Fin AI agent. A custom agent makes sense when the Spanish workflow needs write actions and approval rules across several systems.",
  },
  {
    category: 'integrations',
    question: 'Which order management and commerce vendors offer AI agents that automate order routing and customer service tasks?',
    answer:
      "Four vendors describe such agents on their own sites, read October 9, 2026. Salesforce Order Management lists Agentic Order Routing for fulfillment exceptions and Agentic Order Support for order status, cancellations and returns. Manhattan's Active Maven is an agentic AI chatbot trained on order management and customer service data. Kibo's Engage function covers chat, email and voice. Fluent Commerce built a where-is-my-order agent for Wilson with Sierra AI. Buy order routing from your order management vendor. A services firm fits on the support side, where we build agents that answer tickets from Shopify, NetSuite or 3PL order data.",
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
      "The agent runs in your own cloud account and calls the AI model through your own business API account. Anthropic and OpenAI do not train their models on business API data by default, and both offer zero data retention for eligible accounts, which we help you request. Conversation logs and order data stay in databases you control, and only your authorized staff and the agent can read a customer's record.",
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
      'We design the agent to fit the controls you already follow, such as SOC 2, the California Consumer Privacy Act (CCPA) and PCI DSS for card payments. The agent never stores or logs full card numbers, because payment details stay with your payment provider. Data deletion and CCPA requests go to a documented manual review. Because the agent runs in your own cloud account, your auditor can review it alongside the rest of your systems.',
  },
  // Ported 2026-09-17 (see note above). OWASP Top 10 for LLM Applications 2025
  // and Twilio Verify docs fetch-verified that day.
  {
    category: 'safety',
    question: 'How does the agent confirm who a customer is before sharing order details?',
    answer:
      'It starts with what you already know. The agent checks that the email address or phone number matches the order record, and it can ask for the order number as well. For riskier requests, such as changing a shipping address or a payment method, it first sends a one-time code by text or email through a service such as Twilio Verify, and acts only after the customer enters it.',
  },
  {
    category: 'safety',
    question: 'How do you stop prompt injection, like a customer telling the agent to ignore its rules?',
    answer:
      'Prompt injection is a message written to change how the AI behaves. OWASP puts it first in its Top 10 risks for large language model applications. We assume some attempts will get past the prompt, so the model never writes to your systems directly. Every action passes through code that checks permissions and dollar limits, and high-risk actions wait for a person to approve them.',
  },
  {
    category: 'process',
    question: 'What is the typical timeline to build and deploy a custom AI support agent?',
    answer:
      'Most builds take 3 to 5 weeks from start to finish. That covers discovery, connector engineering, shadow-mode testing, and a gradual rollout. A single-platform deployment often finishes closer to three weeks. A more complex build usually takes longer. Think multiple ERP systems, or five or more ticket categories. Those land closer to the five-week mark.',
  },
  {
    category: 'process',
    question: 'How much does a custom AI customer support agent cost?',
    answer:
      'It depends on how many ticket types the agent handles, how many systems it has to write to, and how strict your approval rules are, not on the AI model. We quote a fixed price after reviewing your queue. For comparison, Intercom Fin lists $0.99 per resolved outcome (read 21 October 2026), and our Intercom Fin vs Zendesk AI vs custom agent guide sets the vendor list prices side by side.',
  },
  {
    category: 'process',
    question: 'What do you need from us to scope a support agent?',
    answer:
      'Read access to your help desk, or an export of your last 90 days of tickets, so we can see which categories repeat. Your written return, refund and shipping policies. And a list of the systems an agent would need to check, such as Shopify, your 3PL or NetSuite. If your policies only live in people\'s heads, writing them down comes first, and we help with that.',
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
      "Yes. For an order-status question, the agent looks up the order in Shopify or NetSuite. Then it pulls live tracking straight from the carrier's own API. The customer gets the real current location and delivery window, not a generic processing label. It only escalates to a human when a shipment is marked lost, badly delayed, or when the carrier's API still fails to respond after retries.",
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
  // Ported 2026-09-17 (see note above). Image handling guidance fetch-verified
  // that day in Anthropic's vision documentation.
  {
    category: 'scenarios',
    question: 'Can the agent read photos customers attach, like a damaged item?',
    answer:
      'Yes. Current models such as Claude can read images, so the agent can describe the damage, match the photo to the order, and draft a return or warranty case. Anthropic, which makes Claude, tells builders not to rely on image readings for high-stakes decisions without human review. So a person approves any refund or replacement that rests on a photo before it goes out.',
  },
  {
    category: 'scenarios',
    question: 'What happens if Shopify or a carrier API is down when a ticket arrives?',
    answer:
      'The agent does not guess. If a lookup fails or times out, it tells the customer it is still checking and will follow up, then holds the ticket and retries on a schedule. If the outage lasts, the ticket goes to a person with a note saying which system failed. The agent never sends an order status it could not confirm from a live system.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD SCHEMAS
───────────────────────────────────────────────────────────────────────────── */
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const serviceSchema = {
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

const howToSchema = {
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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: BREADCRUMB_ITEMS.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
};

const webPageSchema = {
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
  { b: '3 to 5 weeks', s: 'typical build, from queue audit to live tickets' },
  { b: 'Shadow mode', s: 'your team reviews every draft before the agent sends' },
  { b: '100% Owned', s: 'private Git repo & cloud deployment' },
];

/* ── Sources. One map, used by every inline source link (the `short` label) AND
   by the visible "Sources" list near the foot of the page (the full `label`).
   Each URL was opened on 2026-10-21 and the supporting sentence read before the
   claim was written. Same pattern as /services/insurance-ai-agents. ── */
const CHECKED_ON = '21 Oct 2026';

const SRC = {
  gorgiasShopify: {
    short: 'Gorgias: Shopify order actions',
    label: 'Gorgias Help Center: AI Agent Actions, make changes to Shopify orders',
    url: 'https://docs.gorgias.com/en-US/ai-agent-actions-make-changes-to-shopify-orders-757792',
  },
  gorgiasExplained: {
    short: 'Gorgias: AI Agent explained',
    label: 'Gorgias Help Center: AI Agent explained (skills, actions and handover to humans)',
    url: 'https://docs.gorgias.com/en-US/ai-agent-explained-497772',
  },
  zendeskPricing: {
    short: 'Zendesk: pricing',
    label: 'Zendesk: pricing, AI agents and automated resolutions',
    url: 'https://www.zendesk.com/pricing/',
  },
  zendeskAgentic: {
    short: 'Zendesk: agentic AI',
    label: 'Zendesk help: About AI agents with agentic AI',
    url: 'https://support.zendesk.com/hc/en-us/articles/8966284087066-About-AI-agents-with-agentic-AI',
  },
  zendeskBuilder: {
    short: 'Zendesk: integration builder',
    label: 'Zendesk help: About the integration builder for AI agents',
    url: 'https://support.zendesk.com/hc/en-us/articles/8357756844442-About-the-integration-builder-for-AI-agents',
  },
  intercomPricing: {
    short: 'Intercom: pricing',
    label: 'Intercom: pricing (Fin AI Agent per outcome)',
    url: 'https://www.intercom.com/pricing',
  },
  finProcedures: {
    short: 'Fin: Procedures',
    label: 'Fin: Procedures, automate complex customer queries',
    url: 'https://fin.ai/procedures',
  },
  shopifyRefund: {
    short: 'Shopify: refundCreate',
    label: 'Shopify Admin GraphQL API: refundCreate mutation',
    url: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate',
  },
  airCanada: {
    short: 'Moffatt v. Air Canada, 2024',
    label: 'British Columbia Civil Resolution Tribunal: Moffatt v. Air Canada, 2024 BCCRT 149 (14 Feb 2024)',
    url: 'https://decisions.civilresolutionbc.ca/crt/crtd/en/item/525448/index.do',
  },
  fcc: {
    short: 'FCC release on AI-voice calls, 8 Feb 2024',
    label: 'FCC news release of 8 Feb 2024, titled FCC Makes AI-Generated Voices in Robocalls Illegal',
    url: 'https://docs.fcc.gov/public/attachments/DOC-400393A1.pdf',
  },
} as const;

type SrcKey = keyof typeof SRC;
const SOURCE_KEYS = Object.keys(SRC) as SrcKey[];

/* ── Check before anyone builds. One row per ticket type above: what the help
   desk vendors already ship for it (their own pages, read 2026-10-21) and
   where a custom agent starts. No client is claimed. ── */
const ALREADY_SHIPS: ReadonlyArray<{ ticket: string; ships: string; custom: string; sources: ReadonlyArray<SrcKey> }> = [
  {
    ticket: 'Where is my order',
    ships: 'Gorgias lists order tracking among the post-purchase conversations its AI Agent resolves, as part of its AI Agent subscription.',
    custom: 'Tracking lives in a 3PL portal, a warehouse system or NetSuite that the help desk agent cannot read.',
    sources: ['gorgiasExplained'],
  },
  {
    ticket: 'Cancel or change an order before it ships',
    ships: 'Gorgias AI Agent can cancel an unfulfilled Shopify order, restock it and refund it in full, or edit the shipping address. Gorgias says the cancellation is not passed on to 3PL or fulfillment apps, and points to separate actions for ShipStation, ShipMonk and ShipBob.',
    custom: 'The order has already reached a 3PL or ERP that has no ready-made action, so the change has to land in two systems at once.',
    sources: ['gorgiasShopify'],
  },
  {
    ticket: 'Returns and refunds within policy',
    ships: "Shopify's Admin API has a refundCreate mutation that processes returns and issues payments back to customers, so any agent with the right access scope can do it. Fin Procedures handle queries with multiple steps, business logic and third-party systems.",
    custom: 'The refund rule depends on data the vendor agent cannot see, such as a final-sale list in your ERP, or a dollar cap that has to sit in code.',
    sources: ['shopifyRefund', 'finProcedures'],
  },
  {
    ticket: 'Account and subscription changes',
    ships: 'Zendesk says its AI agents can connect to any API or data source, and now asks admins to build those connections as custom actions. Zendesk AI agents with agentic AI work on messaging, email and voice.',
    custom: 'The change has to be verified against a customer record and written to a billing platform the vendor connection cannot authenticate to.',
    sources: ['zendeskBuilder', 'zendeskAgentic'],
  },
  {
    ticket: 'Anything the agent should not decide',
    ships: 'Gorgias says its AI Agent hands over to your team when it cannot respond confidently, meets a sensitive topic or detects frustration.',
    custom: 'Your hand-off list is longer than the vendor settings allow, or the hand-off has to open a case in a second system with the transcript attached.',
    sources: ['gorgiasExplained'],
  },
];

/* ── Who keeps control. Same three-way split as the insurance page. ── */
type Keeper = 'software' | 'build' | 'person';
const KEEPER_LABEL: Record<Keeper, string> = {
  software: 'Your help desk provides',
  build: 'We set up',
  person: 'Your support team keeps',
};
const GUARDS: ReadonlyArray<{ rule: string; keeper: Keeper; note: string }> = [
  {
    rule: 'Hand-off when unsure',
    keeper: 'software',
    note: 'Gorgias says its AI Agent hands over when it cannot respond confidently, meets a sensitive topic or detects frustration. Check what your own help desk does before you write new rules.',
  },
  {
    rule: 'Billing only on resolved tickets',
    keeper: 'software',
    note: 'Zendesk says you pay only for requests its AI agent resolved, counted as automated resolutions. Intercom lists Fin at $0.99 per outcome. Read how each defines a resolution before you compare them.',
  },
  {
    rule: 'A written hand-off list',
    keeper: 'build',
    note: 'Refunds above your cap, legal threats, chargebacks, safety issues and anything a written policy does not cover go on a list before the build starts. The agent passes those to a named person with the conversation attached.',
  },
  {
    rule: 'Read first, write later',
    keeper: 'build',
    note: 'Version one can read orders and draft replies and cannot change anything. Each write permission, such as a refund or an address change, is switched on separately after your team has reviewed the drafts.',
  },
  {
    rule: 'A log of every lookup and action',
    keeper: 'build',
    note: 'Each ticket is logged with the records the agent read, the action it took and the reply it sent, so a support lead can see what happened and why.',
  },
  {
    rule: 'Policy and exceptions',
    keeper: 'person',
    note: 'What the return window is, which items are final sale and when to make an exception stay with your team. The agent applies the written rule and asks when the rule does not fit.',
  },
  {
    rule: 'Upset and high-value customers',
    keeper: 'person',
    note: 'A complaint that could become a chargeback, a review or a lost account goes to a person. The agent gathers the order history first so that person starts with the facts.',
  },
];

/* ── Where support AI projects go wrong. Four come from the linked pages.
   Three are our own advice and carry no source link. ── */
const BREAKS: ReadonlyArray<{ t: string; b: string; sources: ReadonlyArray<SrcKey> }> = [
  {
    t: 'The agent invents a policy',
    b: "In Moffatt v. Air Canada (2024), Air Canada's website chatbot told a customer a bereavement fare could be claimed after booking, which was not the airline's policy. The tribunal found Air Canada did not take reasonable care to make its chatbot accurate and ordered it to pay C$812.02. An agent should answer policy questions only from the written policy, word for word.",
    sources: ['airCanada'],
  },
  {
    t: 'A cancellation that never reaches the warehouse',
    b: 'Gorgias says its AI Agent cancels the order in Shopify only, and that the cancellation is not passed on to 3PL or fulfillment apps. If your 3PL picks orders within the hour, test what happens to an order cancelled after hand-off before the agent is allowed to cancel anything.',
    sources: ['gorgiasShopify'],
  },
  {
    t: 'Paying twice for what the help desk already does',
    b: 'Zendesk says AI agents are included in every Suite and Support plan, priced per automated resolution. Intercom lists Fin at $0.99 per outcome. Switch on the agent you already pay for and test it on your real tickets before you commission a build.',
    sources: ['zendeskPricing', 'intercomPricing'],
  },
  {
    t: 'Refund rules that live in the prompt',
    b: 'A model can be talked out of an instruction. A dollar cap, a return window and a final-sale list belong in code that checks every refund before it reaches Shopify or the ERP.',
    sources: [],
  },
  {
    t: 'Policies nobody has written down',
    b: 'If the return and exception rules live in senior agents’ heads, the AI agent has nothing to follow. Write them first, then automate them.',
    sources: [],
  },
  {
    t: 'An AI voice that calls customers back',
    b: "A 2024 FCC ruling treats an AI-generated voice on a call as 'artificial' under the TCPA, and the FCC says telemarketers need prior express written consent before robocalling consumers. Take legal advice before any outbound AI call, even a delivery update.",
    sources: ['fcc'],
  },
  {
    t: 'No named person behind the hand-off',
    b: 'An escalation that lands in a shared queue at 2 a.m. waits until morning. Put a name and a response time against refunds, complaints and technical cases before launch.',
    sources: [],
  },
];

/* ── What FactoryJet brings, stated plainly. No client is named and no result
   is claimed. Wording is the approved wording used on /services/insurance-ai-agents:
   the voice and ERP experience (Bhavesh, 9 and 11 Oct 2026), the demo before a
   contract (4 Oct 2026), founded 2014 and 500+ businesses (confirmed), and the
   two fixed prices plus managed upkeep (9 Oct 2026). ── */
const EXPERIENCE: ReadonlyArray<{ t: string; kind: string; what: string; href: string; cta: string }> = [
  {
    t: 'What we build',
    kind: 'Support agents · ERP agents · integrations',
    what: 'On Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs, our agents have handled RFQs (requests for quote), quoting, purchase orders, sales orders and daily bookkeeping. Our integration work covers HubSpot, WhatsApp, Xero and EDI (electronic data interchange). A support agent needs the same parts: a help desk, an order record and a rule book.',
    href: '/services/ai-agent-development',
    cta: 'See AI agent development',
  },
  {
    t: 'A demo before the contract',
    kind: 'A demo on your own tickets',
    what: 'You see working software running on your own data before any contract is signed. For a support team that means a set of your past tickets answered in draft, for your team to check against what was actually sent.',
    href: '/contact',
    cta: 'Book a demo on your own tickets',
  },
  {
    t: 'How long we have been at it',
    kind: 'Founded 2014 · 500+ businesses served',
    what: 'The company started in 2014. Since then it has delivered work for more than 500 businesses, and today it is an ecommerce and AI services firm that designs, builds, implements and supports what it ships.',
    href: '/about',
    cta: 'Read about FactoryJet',
  },
  {
    t: 'Who looks after it',
    kind: 'Managed after launch',
    what: 'A short scoping call comes first. Then FactoryJet puts two fixed prices in writing, one to build the agent and one to support it. After go-live FactoryJet stays responsible for the servers, AI models, API connections and maintenance behind the agent. You own what we build.',
    href: '/services/ai-agent-monitoring',
    cta: 'See monitoring and support',
  },
];

/* ── Ready-made support AI agents. Each line restates the vendor's own page as
   read on 2026-10-21. FactoryJet sells none of them. Feeds the visible list AND
   the ItemList JSON-LD. ── */
const OTHERS: ReadonlyArray<{ name: string; focus: string; says: string; source: SrcKey; more?: SrcKey }> = [
  {
    name: 'Intercom Fin',
    focus: 'Chat and email · billed per outcome',
    says: 'Intercom lists Fin AI Agent at $0.99 per outcome on every helpdesk plan. Fin Procedures let a support team describe a multi-step process in plain language, including business logic and third-party systems, and Fin\'s page says they need no engineering to build.',
    source: 'intercomPricing',
    more: 'finProcedures',
  },
  {
    name: 'Zendesk AI agents',
    focus: 'Messaging, email and voice · billed per automated resolution',
    says: 'Zendesk says AI agents are included in every Suite and Support plan, priced on automated resolutions. Its agentic AI agents are designed to solve complex requests with limited direct human supervision, and connect to outside systems through custom actions.',
    source: 'zendeskPricing',
    more: 'zendeskAgentic',
  },
  {
    name: 'Gorgias AI Agent',
    focus: 'Shopify stores · email, chat, SMS and social',
    says: 'Gorgias says its AI Agent resolves returns, order tracking, cancellations and missing items, and can cancel an unfulfilled Shopify order or edit its shipping address. Changes made in Shopify are not passed on to 3PL or fulfillment apps.',
    source: 'gorgiasExplained',
    more: 'gorgiasShopify',
  },
];

const othersSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Ready-made AI customer support agents from help desk vendors: Intercom Fin, Zendesk AI agents and Gorgias AI Agent',
  itemListElement: OTHERS.map((o, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: o.name,
    url: SRC[o.source].url,
  })),
};

/** Small inline source links, same pattern as /services/insurance-ai-agents.
 *  Renders nothing when a claim is our own and has no source. */
function SourceLinks({ ids }: { ids: ReadonlyArray<SrcKey> }) {
  if (ids.length === 0) return null;
  return (
    <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-0 m-0">
      {ids.map((id) => (
        <a
          key={id}
          href={SRC[id].url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-1.5 py-2 font-mono text-xs font-semibold tracking-wide text-[#B23E13] hover:underline"
        >
          <svg width="10" height="10" viewBox="0 0 9 9" fill="none" aria-hidden="true" className="flex-shrink-0">
            <path d="M1.5 7.5L7.5 1.5M7.5 1.5H3M7.5 1.5V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {SRC[id].short}
        </a>
      ))}
    </p>
  );
}

export default function AiCustomerSupportAgentsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(othersSchema) }} />

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
                We design, build and support AI agents that resolve real tickets inside Zendesk, Gorgias, and Intercom. They connect to live Shopify, ERP, and CRM records. A human stays in the loop for anything that needs judgment, and you own the code.
              </p>
              <HeroInlineForm
                source="services_ai_customer_support_agents"
                region="us"
                submitLabel="See a demo on my data"
            trustText="Working software on your own data before you sign. Founder replies within 24 hours."
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
                  <span className="font-semibold text-[#14110F]">Runs in your own cloud</span>
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

        {/* SHORT ANSWERS (added 2026-09-28). Answer-first block for AI buyers,
            who ask who it is for, systems, cost, timeline and ownership
            (AI-BUYER-SWEEP-RESULTS-2026-09-17). Cost points to the sourced
            cost guide instead of quoting a FactoryJet price. */}
        <section className="pp-section" id="short-answers">
          <div className="pp-container">
            <div className="max-w-3xl mb-8">
              <h2 className="pp-h2">AI Support Agents in Six Short Answers</h2>
            </div>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="pp-card p-6 bg-white">
                <dt className="text-base font-bold text-[#14110F] mb-2">Who is it for?</dt>
                <dd className="text-sm text-[#46403B] leading-relaxed m-0">Shopify and Shopify Plus brands, subscription brands and B2B wholesalers whose help desk fills up with the same questions: where is my order, can I return this, can you change my address, can I skip a delivery.</dd>
              </div>
              <div className="pp-card p-6 bg-white">
                <dt className="text-base font-bold text-[#14110F] mb-2">What does it connect to?</dt>
                <dd className="text-sm text-[#46403B] leading-relaxed m-0">Zendesk, Gorgias, Intercom, Freshdesk, Front, Salesforce Service Cloud and Kustomer on the help desk side. Shopify, NetSuite, Microsoft Dynamics 365, SAP and ShipBob for order, stock and shipping data.</dd>
              </div>
              <div className="pp-card p-6 bg-white">
                <dt className="text-base font-bold text-[#14110F] mb-2">What does it cost?</dt>
                <dd className="text-sm text-[#46403B] leading-relaxed m-0">A fixed price for your scope. It moves with the number of ticket types, the systems the agent writes to and your approval rules. Our <Link href="/blog/what-is-an-ai-agent-cost-2026" className="underline font-semibold text-[#B23E13]">AI agent cost guide</Link> compares building one with renting a vendor agent.</dd>
              </div>
              <div className="pp-card p-6 bg-white">
                <dt className="text-base font-bold text-[#14110F] mb-2">How long does it take?</dt>
                <dd className="text-sm text-[#46403B] leading-relaxed m-0">Most builds take three to five weeks: a week of queue audit, two weeks of connectors, then shadow mode and a gradual rollout one ticket type at a time.</dd>
              </div>
              <div className="pp-card p-6 bg-white">
                <dt className="text-base font-bold text-[#14110F] mb-2">What do I own?</dt>
                <dd className="text-sm text-[#46403B] leading-relaxed m-0">The code, prompts, test sets and connectors, in your own Git repository and cloud account. No per-agent license. We stay on for monitoring and support if you want us to.</dd>
              </div>
              <div className="pp-card p-6 bg-white">
                <dt className="text-base font-bold text-[#14110F] mb-2">How does it work under the hood?</dt>
                <dd className="text-sm text-[#46403B] leading-relaxed m-0">Our <Link href="/blog/ai-customer-support-agent-architecture-guide" className="underline font-semibold text-[#B23E13]">support agent architecture guide</Link> walks through the Zendesk, Intercom and Gorgias integration in detail. Building or rebuilding the store itself? See our <Link href="/services/shopify-development" className="underline font-semibold text-[#B23E13]">Shopify development</Link> work. For agents that work on orders, returns and ERP sync inside the store, see <Link href="/services/shopify-ai-agents" className="underline font-semibold text-[#B23E13]">Shopify AI agents</Link>.</dd>
              </div>
            </dl>
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
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Your Data Stays in Your Cloud</h3>
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


        {/* CHECK BEFORE ANYONE BUILDS (added 2026-10-21, insurance-page proof
            pattern): per ticket type, what the help desk already ships and where
            a custom agent starts, each with its source. */}
        <section className="pp-section pp-tint" id="already-ships">
          <div className="pp-container">
            <div className="max-w-3xl mb-10">
              <h2 className="pp-h2">Check What Your Help Desk Already Ships, Ticket by Ticket</h2>
              <p className="text-base text-[#46403B] mt-3 leading-relaxed">
                Each of the five ticket types above has a ready-made answer in at least one help desk. Here is what the vendors say their own AI agents do, read on their pages on {CHECKED_ON}, and the point where a custom agent starts to earn its cost.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Ticket</th>
                    <th>What the help desk vendors already ship</th>
                    <th>Where a custom agent starts</th>
                  </tr>
                </thead>
                <tbody>
                  {ALREADY_SHIPS.map((row) => (
                    <tr key={row.ticket}>
                      <td className="font-bold align-top">{row.ticket}</td>
                      <td className="align-top">
                        {row.ships}
                        <SourceLinks ids={row.sources} />
                      </td>
                      <td className="align-top">{row.custom}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
                  <li><span className="font-bold text-[#14110F]">Anthropic</span> and <span className="font-bold text-[#14110F]">OpenAI</span> models, called through your own API account, with zero data retention where your account is eligible.</li>
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
          note="Bhavesh, our founder, reads every enquiry and usually replies within 2 to 3 hours."
        />

        {/* COMPARISON MATRIX */}
        <section className="pp-section pp-tint">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="pp-h2 text-center">Support Automation Approaches Compared</h2>
              <p className="text-base text-[#46403B] mt-3">
                How a custom agent compares with the usual alternatives. We build custom agents, so weigh this
                table with that interest in mind.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Capabilities</th>
                    <th>Custom AI Agent (FactoryJet)</th>
                    <th>Help Desk Vendor AI Agents</th>
                    <th>Offshore Support Outsourcing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tr-me">
                    <td className="font-bold">Integration Depth</td>
                    <td className="font-semibold text-[#F05A28]">Deep custom ERP, WMS &amp; Shopify APIs</td>
                    <td>Vendor connectors and actions, within the vendor&apos;s limits</td>
                    <td>Manual UI clicks across screens</td>
                  </tr>
                  <tr>
                    <td className="font-bold">First Response Time</td>
                    <td className="font-semibold text-[#14110F]">Sub-60 seconds 24/7/365</td>
                    <td>Instant, inside the vendor&apos;s platform</td>
                    <td>15 to 45 minute queue lag</td>
                  </tr>
                  <tr className="tr-me">
                    <td className="font-bold">Hallucination Safeguards</td>
                    <td className="font-semibold text-[#F05A28]">Typed JSON schemas &amp; refund limits</td>
                    <td>Set by the vendor&apos;s platform</td>
                    <td>Dependent on agent training</td>
                  </tr>
                  <tr>
                    <td className="font-bold">IP &amp; Code Ownership</td>
                    <td className="font-semibold text-[#14110F]">100% Client Owned (Private Git)</td>
                    <td>None, you subscribe to the vendor&apos;s agent</td>
                    <td>N/A</td>
                  </tr>
                  <tr className="tr-me">
                    <td className="font-bold">Evaluation Harness</td>
                    <td className="font-semibold text-[#F05A28]">Pre-launch testing on 500+ real cases</td>
                    <td>Varies by vendor</td>
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
                  <Link href="/services/ai-sdr" className="underline hover:text-[#F05A28]">
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
                  work, where the stakes for a mistake are even higher. After rollout, ongoing monitoring, test runs and
                  model upgrades are covered by our{' '}
                  <Link href="/services/ai-agent-monitoring" className="underline hover:text-[#F05A28]">
                    AI agent monitoring and support
                  </Link>{' '}
                  plans.
                </p>
              </li>
            </ol>
          </div>
        </section>


        {/* WHO KEEPS CONTROL (added 2026-10-21, insurance-page proof pattern) */}
        <section className="pp-section" id="who-keeps-control">
          <div className="pp-container">
            <div className="max-w-3xl mb-10">
              <h2 className="pp-h2">Who Keeps Control of a Support Agent</h2>
              <p className="text-base text-[#46403B] mt-3 leading-relaxed">
                Some safeguards come with your help desk. Some we write into the build. Two stay with your team whatever software you run.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Safeguard</th>
                    <th>Who owns it</th>
                    <th>How it works</th>
                  </tr>
                </thead>
                <tbody>
                  {GUARDS.map((g) => (
                    <tr key={g.rule} className={g.keeper === 'build' ? 'tr-me' : undefined}>
                      <td className="font-bold align-top">{g.rule}</td>
                      <td className="align-top whitespace-nowrap">{KEEPER_LABEL[g.keeper]}</td>
                      <td className="align-top">{g.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* WHERE SUPPORT AI GOES WRONG (added 2026-10-21) */}
        <section className="pp-section pp-tint" id="where-it-goes-wrong">
          <div className="pp-container">
            <div className="max-w-3xl mb-10">
              <h2 className="pp-h2">Where AI Customer Support Projects Go Wrong</h2>
              <p className="text-base text-[#46403B] mt-3 leading-relaxed">
                Seven failure points, with the source where one exists. The three without a link are our own advice from building agents.
              </p>
            </div>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none p-0 m-0">
              {BREAKS.map((w, i) => (
                <li key={w.t} className="pp-card p-6 bg-white">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-bold text-[#14110F] mb-2">{w.t}</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed m-0">{w.b}</p>
                  <SourceLinks ids={w.sources} />
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* HONEST FIT CHECK
            Ported 2026-09-17 from the retired duplicate support page (301 to this
            URL). Every vendor fact below was fetch-verified that day on the
            vendor's own pricing page or documentation. FactoryJet's interest is
            disclosed in the intro, as the honest-comparison rule requires. */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="max-w-3xl mb-10">
              <h2 className="pp-h2">When a Custom Support Agent Is the Wrong Call</h2>
              <p className="text-base text-[#46403B] mt-3 leading-relaxed">
                We build custom agents, so read this knowing we have a stake in the answer. Your help desk vendor may
                already sell an AI agent that covers your queue, and switching one on is faster than any build. Here
                is how three of them work, described from their own documentation. For a wider comparison that adds
                Klaviyo, Rep AI, Alhena, Algolia and Shopify Sidekick, see our guide to the{' '}
                <Link href="/blog/best-ai-agents-for-ecommerce-2026" className="underline hover:text-[#F05A28]">
                  best AI agents for ecommerce in 2026
                </Link>
                . For billing units, channels and the systems each tool can act on, read{' '}
                <Link href="/blog/intercom-fin-vs-zendesk-ai-vs-custom-ai-agent-2026" className="underline hover:text-[#F05A28]">
                  how Fin, Zendesk AI agents, Agentforce and Gorgias compare with a custom support agent
                </Link>
                . For which ticket types an agent should resolve and which it should hand to a person, read{' '}
                <Link href="/blog/ai-agents-for-customer-service-mid-sized-companies-2026" className="underline hover:text-[#F05A28]">
                  AI agents for customer service: what they resolve
                </Link>
                . If most of your contacts arrive by phone, see{' '}
                <Link href="/services/ai-call-center-agents" className="underline hover:text-[#F05A28]">
                  AI call center agents
                </Link>
                . If you run an insurance agency, see{' '}
                <Link href="/services/insurance-ai-agents" className="underline hover:text-[#F05A28]">
                  insurance AI agents
                </Link>
                . If your business is in the UK, see{' '}
                <Link href="/uk/ai-customer-service" className="underline hover:text-[#F05A28]">
                  AI customer service for UK businesses
                </Link>
                .
              </p>
            </div>

            <div className="overflow-x-auto mb-10">
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Option</th>
                    <th>How it bills</th>
                    <th>Can it act in other systems?</th>
                    <th>Worth knowing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-bold">Intercom Fin</td>
                    <td>
                      $0.99 per outcome, per{' '}
                      <a
                        href="https://www.intercom.com/pricing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-[#F05A28]"
                      >
                        Intercom pricing
                      </a>
                    </td>
                    <td>Yes. Data connectors can fetch live data and take actions in any system with an API, such as Shopify or Stripe.</td>
                    <td>A minimum monthly commitment applies when Fin runs on top of another help desk.</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Zendesk AI agents</td>
                    <td>Per automated resolution</td>
                    <td>Yes. Custom actions can update data outside Zendesk through an API you specify.</td>
                    <td>Included in every Zendesk Suite and Support plan.</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Gorgias AI Agent</td>
                    <td>Charged only when it resolves a conversation</td>
                    <td>Yes, including Shopify order actions such as cancel order and edit shipping address.</td>
                    <td>
                      Those Shopify changes are not passed on to third-party logistics (3PL) or fulfillment apps, per{' '}
                      <a
                        href="https://docs.gorgias.com/en-US/ai-agent-actions-make-changes-to-shopify-orders-757792"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-[#F05A28]"
                      >
                        Gorgias documentation
                      </a>
                      .
                    </td>
                  </tr>
                  <tr className="tr-me">
                    <td className="font-bold">Custom agent (FactoryJet)</td>
                    <td>Fixed-price build, then your own model and hosting costs</td>
                    <td>Yes, any system with an API, with limits and approvals written in code you own.</td>
                    <td>Slower to launch than switching on a vendor agent, and your team owns the upkeep.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none p-0 m-0">
              <li className="pp-card p-6 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  01
                </span>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Your help desk agent already covers the queue.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Switch it on and test it on a sample of your real tickets first. If it resolves your top ticket types
                  within your rules, a custom build adds cost without adding much.
                </p>
              </li>
              <li className="pp-card p-6 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  02
                </span>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Your policies live only in people&apos;s heads.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  An agent cannot follow return, refund, or warranty rules that nobody has written down. Write the rules
                  first, then automate them.
                </p>
              </li>
              <li className="pp-card p-6 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  03
                </span>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Your order data has no API.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  If order records sit in a system with no way to read or update them, an agent can talk but cannot act.
                  Fix the data access before you pay for an agent.
                </p>
              </li>
            </ol>
          </div>
        </section>


        {/* READY-MADE SUPPORT AGENTS + WHAT WE BRING (added 2026-10-21,
            insurance-page proof pattern). OTHERS also feeds the ItemList JSON-LD. */}
        <section className="pp-section pp-tint" id="ready-made-agents">
          <div className="pp-container">
            <div className="max-w-3xl mb-10">
              <h2 className="pp-h2">Ready-Made AI Support Agents, in Their Own Words</h2>
              <p className="text-base text-[#46403B] mt-3 leading-relaxed">
                FactoryJet sells none of these and earns nothing if you choose one. Each entry restates the vendor&apos;s own page as read on {CHECKED_ON}.
              </p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none p-0 m-0">
              {OTHERS.map((o) => (
                <li key={o.name} className="pp-card p-6 bg-white">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">{o.focus}</span>
                  <h3 className="text-lg font-bold text-[#14110F] mb-2">{o.name}</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed m-0">{o.says}</p>
                  <SourceLinks ids={o.more ? [o.source, o.more] : [o.source]} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pp-section" id="what-we-bring">
          <div className="pp-container">
            <div className="max-w-3xl mb-10">
              <h2 className="pp-h2">What FactoryJet Brings to a Support Agent Build</h2>
              <p className="text-base text-[#46403B] mt-3 leading-relaxed">
                No client is named here and no result is claimed. These are the facts we can stand behind.
              </p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none p-0 m-0">
              {EXPERIENCE.map((x) => (
                <li key={x.t} className="pp-card p-6 bg-white">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">{x.kind}</span>
                  <h3 className="text-lg font-bold text-[#14110F] mb-2">{x.t}</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-3">{x.what}</p>
                  <Link href={x.href} className="text-sm font-semibold underline text-[#B23E13]">
                    {x.cta}
                  </Link>
                </li>
              ))}
            </ul>
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
                      src="/bhavesh_card-832.webp"
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


        {/* SOURCES (added 2026-10-21): the full labels of every inline source link. */}
        <section className="pp-section" id="sources">
          <div className="pp-container">
            <div className="max-w-3xl">
              <h2 className="pp-h2">Sources</h2>
              <p className="text-sm text-[#46403B] mt-3 leading-relaxed">
                Each page was opened on {CHECKED_ON} and the supporting sentence read before the claim was written. The Zendesk and Gartner figures in the research section above link to their own pages.
              </p>
              <ul className="mt-4 space-y-2 text-sm list-disc pl-5">
                {SOURCE_KEYS.map((k) => (
                  <li key={k}>
                    <a href={SRC[k].url} target="_blank" rel="noopener noreferrer" className="underline text-[#B23E13]">
                      {SRC[k].label}
                    </a>
                  </li>
                ))}
              </ul>
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
                Speak directly with founder Bhavesh Barot. We will audit your current help desk queues and look at your highest-volume ticket categories. Then we send a fixed-price proposal with real deflection milestones. Send a form instead and Bhavesh usually replies within 2 to 3 hours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#B23E13] text-white font-semibold text-sm hover:bg-[#8F3210] transition-colors shadow-sm"
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
