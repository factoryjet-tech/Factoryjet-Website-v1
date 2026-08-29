import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import FAQ, { type FAQCategory, type FAQItem } from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import AiAgentRoiCalculator from '@/components/ai-agent/AiAgentRoiCalculator';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

/* ─────────────────────────────────────────────────────────────────────────────
   Freshness signal. Keep honest: bump only when the content actually changes.
───────────────────────────────────────────────────────────────────────────── */
const PAGE_MODIFIED = '2026-08-29';

export const metadata: Metadata = {
  title: 'Custom AI Agent Development Services & Solutions USA | FactoryJet',
  description:
    'Custom AI agent development for US operations and ecommerce teams. Autonomous agents that work support, sales, wholesale, and back-office queues inside Zendesk, HubSpot, NetSuite, and Shopify.',
  keywords: [
    'ai agent development services',
    'ai agent development company',
    'custom ai agent development',
    'custom ai agent development company',
    'ai agent development',
    'ai agent development company usa',
    'ai agents for customer support',
    'agentic ai development company',
    'agentic ai development services',
    'agentic ecommerce agents',
    'agentic ai consultant',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Custom AI Agent Development Services & Solutions USA | FactoryJet',
    description:
      'Custom AI agents for operations and ecommerce leaders: support, sales, wholesale, and back-office workflows wired into the help desk, CRM, ERP, and commerce platforms you already run.',
    url: 'https://factoryjet.com/services/ai-agent-development',
    images: [
      {
        url: 'https://factoryjet.com/images/us/services/hero-ai-agent-us.webp',
        width: 1200,
        height: 800,
        alt: 'FactoryJet AI agent development services',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom AI Agent Development Services & Solutions USA | FactoryJet',
    description:
      'Custom AI agents that work real queues in Zendesk, HubSpot, NetSuite, Shopify, and Slack, with human approval on anything that matters.',
    images: ['https://factoryjet.com/images/us/services/hero-ai-agent-us.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-agent-development',
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
   FAQ content. The FAQPage JSON-LD below is generated from THIS array.
───────────────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'The Basics' },
  { key: 'ecommerce', label: 'E-Commerce & Retail AI' },
  { key: 'integrations', label: 'Systems & Integrations' },
  { key: 'stack', label: 'Stack & Architecture' },
  { key: 'agentic', label: 'Agentic AI & Autonomy' },
  { key: 'safety', label: 'Control, Safety & Governance' },
  { key: 'process', label: 'Process & Ownership' },
  { key: 'choosing', label: 'Choosing a Partner' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  /* ── The basics ── */
  {
    category: 'basics',
    question: 'What is an AI agent, and how is it different from a chatbot?',
    answer:
      'A chatbot writes an answer. An agent takes an action. It receives a trigger, such as a new Zendesk ticket, an abandoned checkout, or a HubSpot form fill, reads the records it needs, decides what to do against rules you set, then writes back: issuing the refund, updating the CRM, booking the meeting, or handing the case to a person with a summary attached.',
  },
  {
    category: 'basics',
    question: 'What does an AI agent development company actually do?',
    answer:
      'Four things: pick a workflow narrow enough to finish, wire the agent into the systems holding the data, define the tools it may call and the limit on each one, then measure it against real cases from your own history. Most of the work is integration and evaluation, not prompt writing.',
  },
  {
    category: 'basics',
    question: 'What is custom AI agent development, and when do we need it instead of an off-the-shelf tool?',
    answer:
      'Buy the tool when your workflow matches the standard product it ships with. Build custom when the agent must read from systems the vendor does not connect to, follow approval rules specific to your business, or write into a record layout only you use. Most mid-market operations have at least one workflow no off-the-shelf vendor covers cleanly.',
  },
  {
    category: 'basics',
    question: 'Which AI models do you build on?',
    answer:
      'We pick per workflow rather than locking into a single vendor. Frontier models from Anthropic (Claude 3.7 / 3.5), OpenAI (GPT-4.5 / o3-mini), and Google (Gemini 2.0 Flash) handle reasoning and tool selection. Smaller models handle classification and extraction, where a large model is wasted. The model sits behind an interface, so swapping it later is configuration rather than a rebuild.',
  },
  {
    category: 'basics',
    question: 'Can an AI agent handle customer support tickets end to end?',
    answer:
      'For a defined slice of the queue, yes. An agent can resolve order status, returns eligibility, subscription changes and account questions inside Zendesk, Freshdesk, Intercom or Gorgias, and triage the rest. Handing an agent the whole queue on day one is the most common way these projects fail.',
  },

  /* ── E-Commerce & Retail AI ── */
  {
    category: 'ecommerce',
    question: 'How do autonomous AI shopping and support agents work with Shopify and Shopify Plus?',
    answer:
      'Agents connect directly via Shopify Admin and Storefront GraphQL APIs. They read live product catalogs, verify warehouse inventory levels across locations, calculate dynamic shipping options, and execute actions like address corrections, return label generation, and order tracking lookups directly in the customer conversation thread.',
  },
  {
    category: 'ecommerce',
    question: 'Can an AI agent automate B2B wholesale order processing and ERP entry?',
    answer:
      'Yes. The agent parses inbound PDF purchase orders or emails, validates line item SKUs against your product catalog, checks customer credit limits and tiered contract pricing in NetSuite or Dynamics 365, drafts the sales order, and requests human confirmation in Slack before committing.',
  },
  {
    category: 'ecommerce',
    question: 'How does Agentic Commerce change conversion rates for ecommerce brands?',
    answer:
      'Agentic commerce shifts shopping from static search filters to active, conversational discovery and instant resolution. Rather than clicking through navigation menus, shoppers ask natural questions (e.g., "Find waterproof hiking boots for wide feet under $180"), and the agent evaluates attributes, recommends matched items, and prepares the cart instantly.',
  },

  /* ── Systems & integrations ── */
  {
    category: 'integrations',
    question: 'Which help desks and CX tools do you integrate with?',
    answer:
      'Zendesk, Freshdesk, Intercom, Gorgias, Front and Salesforce Service Cloud. The pattern is the same in each: a webhook starts the run, the agent reads the ticket and the customer record, and it writes back a reply, an internal note, tags and a disposition field.',
  },
  {
    category: 'integrations',
    question: 'Which CRMs and ERPs can the agent read from and write to?',
    answer:
      'HubSpot, Salesforce and Pipedrive on the CRM side. NetSuite, Microsoft Dynamics 365 Business Central, Sage Intacct and QuickBooks Online on the finance side, plus Shopify for commerce records. Where no connector exists we build against the REST or SOAP API, or a scheduled file interface.',
  },
  {
    category: 'integrations',
    question: 'What is MCP, and why does it matter for us?',
    answer:
      'Model Context Protocol is an open standard for connecting AI applications to external systems, tools and data. Practically, the connector we build for your NetSuite or Zendesk instance stays reusable by any MCP-capable client rather than locked to one vendor, which lowers the cost of your second and third agent.',
  },
  {
    category: 'integrations',
    question: 'What if one of our systems has no usable API?',
    answer:
      'Then we say so during scoping rather than after. The options are a database read replica, a scheduled export, a middleware layer, or leaving that step with a person. We do not screen-scrape a system of record, because it breaks quietly and leaves no audit trail.',
  },
  {
    category: 'integrations',
    question: 'Can the agent work inside Slack or Microsoft Teams?',
    answer:
      'Yes, and for internal workflows that is usually the right front door. The agent posts what it is about to do, a person approves or edits with a click, and the thread becomes the record of the decision. Twilio covers the same pattern over SMS and voice.',
  },

  /* ── Stack & architecture ── */
  {
    category: 'stack',
    question: 'What frameworks do you build AI agents on?',
    answer:
      'We build on LangGraph or direct model vendor SDKs for workflows requiring reliable state and branching, and use LangChain where its integrations save real engineering time. Multi-agent frameworks like CrewAI and AutoGen are applied only when a job genuinely requires distinct role specializations with isolated permissions.',
  },
  {
    category: 'stack',
    question: 'How do you connect an AI agent to our internal documents and data?',
    answer:
      'Through retrieval augmented generation (RAG), not fine-tuning. The agent queries your content at runtime rather than having it baked into model weights, so answers update the moment your documents change. We utilize vector stores such as pgvector or Pinecone for knowledge bases, combined with live API queries to source systems.',
  },
  {
    category: 'stack',
    question: 'How do you measure whether an AI agent is actually working?',
    answer:
      'With an automated evaluation suite built before launch, run against every code change. We track task completion rates, escalation accuracy, tool error rates, and hallucination metrics against real historical cases from your company history.',
  },
  {
    category: 'stack',
    question: 'Can an AI agent run on our own infrastructure instead of a vendor cloud?',
    answer:
      'Yes. The orchestration layer, vector database, and integration connectors can deploy entirely inside your AWS, Google Cloud, or Azure VPC, keeping sensitive enterprise data inside your security perimeter.',
  },

  /* ── Agentic AI ── */
  {
    category: 'agentic',
    question: 'What is agentic AI, and how is it different from an AI agent?',
    answer:
      'An AI agent is the software unit. Agentic AI is the capability to reason dynamically, select tools, assess intermediate outputs, and adapt next actions autonomously toward a defined business objective without relying on rigid deterministic scripts.',
  },
  {
    category: 'agentic',
    question: 'What does an agentic AI development company actually do?',
    answer:
      'It maps the target operational workflow, develops secure tool interfaces into enterprise software, implements guardrail and permission boundaries, and builds continuous evaluation harnesses to prove safety and accuracy before production rollout.',
  },
  {
    category: 'agentic',
    question: 'When should we hire an agentic AI consultant instead of a development team?',
    answer:
      'Hire a consultant when you need to identify high-ROI automation candidates, evaluate feasibility, and architect security policies. Hire a development team once the workflow, integrations, and business metrics are clearly defined. We provide both consultative roadmapping and full-stack development.',
  },
  {
    category: 'agentic',
    question: 'Is agentic AI ready for production, or is it still experimental?',
    answer:
      'It is production-ready for bounded, well-instrumented business workflows with typed tools and clear escalation boundaries. It is not suitable for unconstrained, open-ended tasks without human supervision. Bounded workflows succeed reliably today.',
  },

  /* ── Control & safety ── */
  {
    category: 'safety',
    question: 'What stops the agent from doing something expensive or wrong?',
    answer:
      'Limits are enforced at the tool and API layer, not solely in the prompt. Every tool enforces JSON schema validation, transaction caps (e.g., maximum refund dollar limits), strict allow-lists of writable fields, and automated escalation triggers for ambiguous cases.',
  },
  {
    category: 'safety',
    question: 'How do we audit what the agent did?',
    answer:
      'Every agent execution writes an append-only audit trail capturing the trigger event, retrieved context, tool calls, parameters, and returned outcomes, allowing full replayability for compliance and quality control.',
  },
  {
    category: 'safety',
    question: 'Where does our data go during agent execution?',
    answer:
      'The agent communicates with enterprise APIs using least-privilege OAuth credentials. All inference calls utilize enterprise zero-data-retention agreements, ensuring your proprietary data is never used to train public models.',
  },
  {
    category: 'safety',
    question: 'Who is accountable when an agent makes a mistake?',
    answer:
      'Your organization retains operational governance, exactly as with human staff or software scripts. Responsible engineering ensures potential errors are bounded in cost, immediately surfaced in audit logs, and routed to human review before impacting customers.',
  },

  /* ── Process & ownership ── */
  {
    category: 'process',
    question: 'How long does an AI agent build take?',
    answer:
      'A focused single workflow with one or two system integrations is typically delivered in three to six weeks. Multi-system enterprise deployments with deep ERP workflows follow phased milestone sprints.',
  },
  {
    category: 'process',
    question: 'What happens after we launch?',
    answer:
      'The agent launches in shadow mode where it drafts actions for human approval. Once accuracy benchmarks are proven, autonomy is enabled for approved categories, backed by monitoring dashboards and ongoing maintenance retainers.',
  },
  {
    category: 'process',
    question: 'Do we own the code and the integrations?',
    answer:
      'Yes, 100 percent. You own the complete Git repository, connectors, MCP configurations, evaluation datasets, and cloud infrastructure. There are zero proprietary runtime locks.',
  },

  /* ── Choosing a partner ── */
  {
    category: 'choosing',
    question: 'How do you scope and price AI agent development?',
    answer:
      'Pricing is scoped per workflow based on integration complexity, compliance requirements, and tool depth. We provide fixed milestone proposals before work begins, ensuring predictable budgets without open-ended hourly billing.',
  },
  {
    category: 'choosing',
    question: 'How should we compare AI agent development companies?',
    answer:
      'Ask the provider to walk through a real workflow end to end, specifying the exact API webhooks, tool limits, evaluation harness, and escalation logic. Avoid vendors that only sell generic chatbot wrappers.',
  },
  {
    category: 'choosing',
    question: 'Are you an AI automation agency or a development company?',
    answer:
      'We are a senior software engineering firm. While we utilize workflow orchestration tools where appropriate, we write custom API connectors, evaluation harnesses, and secure MCP services for durable enterprise operations.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schemas
───────────────────────────────────────────────────────────────────────────── */

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((i) => ({
    '@type': 'Question',
    name: i.question,
    acceptedAnswer: { '@type': 'Answer', text: i.answer },
  })),
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/services/ai-agent-development#service',
  serviceType: 'AI agent development',
  name: 'Custom AI agent development services',
  description:
    'Custom AI agent development for operations and ecommerce teams: support, sales, wholesale, and back-office agents built on function calling, Model Context Protocol connectors, and retrieval, integrated with Zendesk, Gorgias, HubSpot, Salesforce, NetSuite, Dynamics 365, Shopify, and Slack.',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
  ],
  audience: {
    '@type': 'BusinessAudience',
    name: 'Mid-market operations, ecommerce, support, and revenue operations teams',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI agent development services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Customer support agent development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sales and lead routing agent development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-commerce & wholesale agent development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Back-office and ERP workflow agent development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Voice and messaging agent development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agent integration and MCP connector development' } },
    ],
  },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-agent-development#webpage',
  url: 'https://factoryjet.com/services/ai-agent-development',
  name: 'Custom AI Agent Development Services & Solutions USA | FactoryJet',
  description:
    'Custom AI agent development for US operations and ecommerce teams: autonomous agents that work real queues in Zendesk, HubSpot, NetSuite, Shopify, and Slack with human-in-the-loop governance.',
  dateModified: PAGE_MODIFIED,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
    jobTitle: 'Founder, FactoryJet',
  },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  about: { '@id': 'https://factoryjet.com/services/ai-agent-development#service' },
};

const BREADCRUMB_ITEMS = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
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

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const STATS = [
  { b: 'One job per agent', s: 'narrow scope, measurable result' },
  { b: 'Your stack', s: 'Zendesk, HubSpot, NetSuite, Shopify' },
  { b: 'Human in the loop', s: 'approval on anything costly' },
  { b: 'You own it', s: 'code, connectors, cloud accounts' },
];

// Citations fetch-verified against the linked primary sources.
const SOURCED = [
  {
    v: 'MCP',
    d: 'Model Context Protocol is described by its maintainers as an open-source standard for connecting AI applications to external systems, including data sources, tools and workflows.',
    src: 'Model Context Protocol documentation',
    href: 'https://modelcontextprotocol.io/docs/getting-started/intro',
  },
  {
    v: 'Nov 2024',
    d: 'Anthropic announced MCP on 25 November 2024 as an open standard for building secure, two-way connections between data sources and AI-powered tools. It is young, which is why we treat connector design as engineering.',
    src: 'Anthropic',
    href: 'https://www.anthropic.com/news/model-context-protocol',
  },
  {
    v: 'Tool calling',
    d: 'OpenAI documents function calling, also known as tool calling, as the way its models interface with external systems and reach data outside their training data. That is the mechanism that turns a model into an agent.',
    src: 'OpenAI API documentation',
    href: 'https://developers.openai.com/api/docs/guides/function-calling',
  },
];

const WALKTHROUGH = [
  {
    n: '01',
    t: 'A trigger fires',
    d: 'A ticket lands in Zendesk carrying the billing tag. Zendesk posts a webhook to the agent endpoint. Nothing is polled, nothing waits to be noticed.',
  },
  {
    n: '02',
    t: 'The agent identifies the customer',
    d: 'It calls the Shopify Admin API on the requester email, pulls recent orders, fulfilment status and carrier tracking, and reads the matching HubSpot contact record.',
  },
  {
    n: '03',
    t: 'It retrieves your policy, not a generic one',
    d: 'Retrieval augmented generation over a vector store holding your returns policy, warranty terms and resolved tickets in that category, so the answer matches what your team would have said.',
  },
  {
    n: '04',
    t: 'It gets a small, typed tool list',
    d: 'Four tools exposed by function calling: get_order, check_refund_eligibility, issue_refund, escalate_to_human. Each carries a JSON schema and a hard limit. There is no fifth tool to improvise.',
  },
  {
    n: '05',
    t: 'It acts inside the limits',
    d: 'Inside the return window and under the auto-approve ceiling, it issues the refund through Shopify and replies on the ticket in the language the customer wrote in.',
  },
  {
    n: '06',
    t: 'It escalates the rest',
    d: 'Outside the window, over the ceiling, or where a chargeback is mentioned, it drafts the reply, attaches its reasoning and records, and assigns the human queue.',
  },
  {
    n: '07',
    t: 'It writes back to every system',
    d: 'The Zendesk ticket gets tags and a disposition field, the Shopify order gets a note, the HubSpot timeline gets an event. Nobody reconciles three tools by hand later.',
  },
  {
    n: '08',
    t: 'It tells a person when it matters',
    d: 'A Slack message in the escalations channel with the ticket link and a two-line summary. Microsoft Teams works the same way.',
  },
  {
    n: '09',
    t: 'It logs everything',
    d: 'Every tool call, argument, result and record ID goes to an append-only audit log keyed to the ticket, so any case can be replayed months later.',
  },
];

const GUARDRAILS = [
  'Least-privilege service accounts with OAuth scopes limited to the fields the job needs, never a shared admin key',
  'Hard ceilings on money-moving tools such as refunds, credits and payment retries, enforced in the tool, not in the prompt',
  'Allow lists for the exact record fields an agent may write, so nothing else can be overwritten by accident',
  'Human-in-the-loop approval on any action you classify as high stakes, with the agent reasoning shown before the click',
  'Confidence and novelty checks that route unusual inputs to a person instead of forcing a guess',
  'Shadow mode at launch: the agent proposes, a human approves, and you watch the disagreement rate before it acts alone',
  'Append-only audit logs and replayable traces for every run, keyed to the source record',
  'Sandbox and production separation, so an agent under test cannot reach a live customer or a live ledger',
  'Rate limits and circuit breakers that stop a loop before it becomes a thousand tickets',
];

const SYSTEMS = [
  {
    t: 'Help desk and CX',
    d: 'Zendesk, Freshdesk, Intercom, Gorgias, Front and Salesforce Service Cloud. Triggers, ticket reads, replies, internal notes, tags and disposition fields.',
  },
  {
    t: 'CRM and revenue',
    d: 'HubSpot, Salesforce and Pipedrive. Contact and deal reads, enrichment, ownership assignment, timeline events, and task creation for the rep who has to follow up.',
  },
  {
    t: 'ERP and finance',
    d: 'NetSuite, Microsoft Dynamics 365 Business Central, Sage Intacct and QuickBooks Online. Invoice and purchase order records, customer masters, credit status and coding.',
  },
  {
    t: 'Commerce and fulfilment',
    d: 'Shopify, Shopify Plus, BigCommerce, WooCommerce, ShipStation and carrier tracking APIs. Orders, fulfilments, refunds, subscription changes and exception handling.',
  },
  {
    t: 'Messaging and voice',
    d: 'Slack, Microsoft Teams, Gmail and Microsoft 365, plus Twilio for SMS and voice. Approvals, notifications and the threads that become your decision record.',
  },
  {
    t: 'Data and work tracking',
    d: 'Postgres, Snowflake, BigQuery, Google Sheets and Airtable for reads, and Jira, Asana, Notion and Confluence for the work an agent creates or closes.',
  },
];

const STACK = [
  'Model Context Protocol servers, so a connector built once is reusable by any MCP-capable client rather than tied to one vendor',
  'Function calling with typed JSON schemas, which is how the model reaches a real system instead of describing what it would do',
  'Retrieval augmented generation over your policies, runbooks and resolved cases, with a vector store such as pgvector or Pinecone',
  'Webhooks and event queues for triggers, with idempotency keys so a retried event cannot double-refund a customer',
  'OAuth scopes and per-tool permission boundaries defined before the first line of agent logic is written',
  'Evaluation sets built from your own historical cases and the outcome your team actually chose',
  'Observability on latency, tool error rate, escalation rate and disagreement rate, reviewed weekly after launch',
  'Model choice per task, with frontier models for reasoning and smaller models for classification and extraction',
];

const FIRST_WINS = [
  {
    t: 'Support',
    d: 'Start with one ticket category in Zendesk, Freshdesk, Intercom or Gorgias, measure it, then take the next.',
    list: [
      'Order status answered from live Shopify and carrier data',
      'Returns and refund eligibility checked against your written policy',
      'Subscription pauses, skips and address changes',
      'Triage, tagging and routing for everything it does not resolve',
    ],
  },
  {
    t: 'Sales and revenue ops',
    d: 'The gain here is usually speed to first touch rather than headcount.',
    list: [
      'Inbound lead enrichment and scoring against your criteria',
      'Owner assignment by territory or round robin in HubSpot or Salesforce',
      'Meeting booking, reminders and no-show follow-up',
      'Slack or Microsoft Teams alerts on anything time critical',
    ],
  },
  {
    t: 'Back office & wholesale',
    d: 'Quieter work, and usually the largest pile of recoverable hours.',
    list: [
      'Invoice and purchase order extraction into NetSuite or Dynamics 365 Business Central',
      'B2B wholesale order validation against tier pricing agreements',
      'Order exception handling and shipment follow-ups across 3PLs',
      'Weekly reporting pulled from Snowflake, BigQuery or Google Sheets',
    ],
  },
];

const NOT_AUTOMATED = [
  'Decisions where two experienced people on your team would answer differently, because there is no correct outcome to measure against',
  'Anything that moves money without a ceiling and an approval path attached to it',
  'Workflows whose source system has no API and no export, where automation would mean screen scraping something that breaks silently',
  'Processes nobody has written down, since the agent would encode whatever the loudest person remembers',
  'Final judgement on hiring, credit, medical or legal outcomes, where a person has to own the call',
  'The genuinely unusual tail of a queue, which is where you want your people spending their day anyway',
];

const STEPS = [
  {
    n: '01',
    t: 'Pick one workflow',
    d: 'We map volume, the written rule, the systems involved and the cost of getting it wrong, then choose the narrowest job worth doing.',
  },
  {
    n: '02',
    t: 'Build the evaluation set',
    d: 'A sample of your real historical cases with the outcome your team chose. Everything after is measured against it, so accuracy is a number rather than an impression.',
  },
  {
    n: '03',
    t: 'Wire the integrations',
    d: 'Connectors, MCP servers, OAuth scopes, webhooks and tool schemas with their limits. This is the part that takes the time, and the part that gets reused.',
  },
  {
    n: '04',
    t: 'Run it in shadow mode',
    d: 'The agent proposes, a person approves, and you watch the disagreement rate on live traffic without a customer seeing an unreviewed action.',
  },
  {
    n: '05',
    t: 'Release, then widen',
    d: 'Autonomy on the cases it has earned, escalation on the rest, plus dashboards and a runbook. The second workflow reuses the same integration layer.',
  },
];

const CLOSERS = [
  'Fixed proposal agreed before work starts, no open-ended hourly billing',
  'You own the repository, the connectors, the prompts and the cloud accounts',
  'Accuracy measured against your own historical cases, not a demo script',
  'Every agent ships with limits, an escalation path and an audit log',
];

const checkIcon = (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
    <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul style={{ marginTop: '20px', display: 'grid', gap: '10px', listStyle: 'none', padding: 0 }}>
      {items.map((item) => (
        <li key={item} style={{ display: 'flex', gap: '10px', fontSize: '15px', lineHeight: 1.55, color: 'var(--pp-body)' }}>
          <span
            style={{
              marginTop: '3px', flex: 'none', display: 'inline-flex', height: '18px', width: '18px',
              alignItems: 'center', justifyContent: 'center', borderRadius: '999px',
              background: 'rgba(240,90,40,0.1)', color: 'var(--pp-orange-dark)',
            }}
          >
            {checkIcon}
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Page Component
───────────────────────────────────────────────────────────────────────────── */

export default function AIAgentDevelopmentPage() {
  return (
    <>
      <script id="aiagent-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="aiagent-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="aiagent-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="aiagent-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* Hero */}
        <section className="pp-dotgrid" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="pp-wrap" style={{ paddingTop: 'clamp(40px,5vh,72px)', paddingBottom: 'clamp(44px,6vh,84px)', position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">Custom AI Agent Development Services</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '19ch' }}>
                  AI agents that work your queues, not a demo.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '50ch' }}>
                  FactoryJet is a custom AI agent development company for operations and ecommerce leaders at 50 to 500 person
                  businesses. We build autonomous agents that pick up support, sales, wholesale, and back-office work inside the systems you
                  already run, with hard limits on what they can do and human approval where it counts.
                </p>
                <HeroInlineForm source="us_ai_agent_dev_hero" region="us" submitLabel="Scope my first agent" />
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 24px 48px -28px rgba(20,17,15,0.28)' }}>
                <Image
                  src="/images/us/services/hero-ai-agent-us.webp"
                  alt="An operations team reviewing an AI agent working a live support queue"
                  width={600}
                  height={400}
                  priority
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Answer-first block */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// the short answer'}</p>
            <h2 style={{ marginTop: '10px' }}>What is custom AI agent development?</h2>
            <p className="pp-lead" style={{ marginTop: '16px', maxWidth: '72ch' }}>
              Custom AI agent development is the engineering discipline of building software that receives a business trigger, reads verified records from your systems of record, decides what to do against deterministic rules, and takes the action itself. A chatbot merely generates text. An autonomous agent issues the refund in Shopify, creates the sales order in NetSuite, updates the CRM, and escalates edge cases to your team.
            </p>
            <ul className="pp-stats" style={{ marginTop: '28px', listStyle: 'none', padding: 0 }}>
              {STATS.map((s) => (
                <li className="pp-stat" key={s.b}><b>{s.b}</b><span>{s.s}</span></li>
              ))}
            </ul>
          </div>
        </section>

        {/* Worked example */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// one job, end to end'}</p>
            <h2 style={{ marginTop: '10px' }}>A refund request, from webhook to audit log</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '70ch' }}>
              Most agencies answer this question with a list of agent types, and that list is the same everywhere. Here
              is one narrow job instead, in the order it happens, for a brand running Zendesk on top of Shopify.
            </p>
            <ol className="pp-bento" style={{ marginTop: '32px' }}>
              {WALKTHROUGH.map((s) => (
                <li className="pp-card" key={s.n}>
                  <p className="pp-mlabel" style={{ marginBottom: '8px' }}>{s.n}</p>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{s.t}</h3>
                  <p>{s.d}</p>
                </li>
              ))}
            </ol>
            <p className="pp-lead" style={{ marginTop: '28px', maxWidth: '70ch' }}>
              Swap Zendesk for Freshdesk, Shopify for NetSuite, and a refund for a credit memo, and the shape holds. The
              systems change. The trigger, the typed tools, the limits, the escalation and the log do not.
            </p>
          </div>
        </section>

        {/* Guardrails */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-mlabel">{'// control'}</p>
                <h2 style={{ marginTop: '10px' }}>What the agent is allowed to do, and what it is not</h2>
                <p className="pp-lead" style={{ marginTop: '14px' }}>
                  The question an operations leader actually asks is not what the agent can do. It is what happens the
                  first time it is wrong. The limits live in the tools rather than the prompt, so being wrong costs a
                  flagged ticket instead of an incorrect financial transaction.
                </p>
                <CheckList items={GUARDRAILS} />
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 24px 48px -28px rgba(20,17,15,0.28)' }}>
                <Image
                  src="/images/us/services/hero-ai-workflow.webp"
                  alt="A workflow view showing agent actions, approvals and escalation points"
                  width={600}
                  height={400}
                  loading="lazy"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Systems */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// integrations'}</p>
            <h2 style={{ marginTop: '10px' }}>The systems we wire an agent into</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              An agent is only as useful as its reach. These are the systems a mid-market operations team usually runs,
              and what an agent reads and writes in each.
            </p>
            <ul className="pp-bento" style={{ marginTop: '32px' }}>
              {SYSTEMS.map((s) => (
                <li className="pp-card" key={s.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{s.t}</h3>
                  <p>{s.d}</p>
                </li>
              ))}
            </ul>
            <p className="pp-lead" style={{ marginTop: '26px', maxWidth: '70ch' }}>
              If a system exposes a REST or SOAP API, a webhook, or a scheduled export, an agent can work with it. If it
              exposes none of those, we say so during scoping and design around it. For commerce-side work that reaches
              into the storefront itself, see our{' '}
              <Link href="/b2b-ecommerce" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>
                B2B e-commerce
              </Link>{' '}
              and{' '}
              <Link href="/agentic-commerce" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>
                Agentic Commerce
              </Link>{' '}
              builds.
            </p>
          </div>
        </section>

        {/* Stack + citations */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }} className="pp-herogrid">
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 24px 48px -28px rgba(20,17,15,0.28)' }}>
                <Image
                  src="/images/us/services/hero-ai-integration.webp"
                  alt="Connected systems showing an agent reading and writing across a business stack"
                  width={600}
                  height={400}
                  loading="lazy"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div>
                <p className="pp-mlabel">{'// the stack'}</p>
                <h2 style={{ marginTop: '10px' }}>The agent-side stack, in plain terms</h2>
                <p className="pp-lead" style={{ marginTop: '14px' }}>
                  There is less magic here than the category suggests. An agent is a model, a small set of typed tools,
                  a retrieval layer over your own documents, and careful plumbing around permissions and failure.
                </p>
                <CheckList items={STACK} />
              </div>
            </div>

            <h3 style={{ marginTop: 'clamp(36px,5vw,56px)' }}>Where the underlying standards come from</h3>
            <ul className="pp-bento" style={{ marginTop: '24px' }}>
              {SOURCED.map((s) => (
                <li className="pp-card" key={s.v}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{s.v}</h3>
                  <p>{s.d}</p>
                  <p style={{ marginTop: '10px', fontSize: '13px' }}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>{s.src}</a>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Interactive ROI Calculator */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <AiAgentRoiCalculator defaultWorkflow="support" source="ai_agent_development_master_hub" />
          </div>
        </section>

        {/* First wins */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// where to start'}</p>
            <h2 style={{ marginTop: '10px' }}>Where a mid-market team gets the first win</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              At 50 to 500 people you have enough volume for automation to matter and not enough headcount to absorb a
              failed project. Start with one narrow, high-volume job that has a checkable right answer.
            </p>
            <ul className="pp-bento" style={{ marginTop: '32px' }}>
              {FIRST_WINS.map((w) => (
                <li className="pp-card" key={w.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{w.t}</h3>
                  <p>{w.d}</p>
                  <ul style={{ marginTop: '12px', display: 'grid', gap: '8px', listStyle: 'none', margin: '12px 0 0', padding: 0 }}>
                    {w.list.map((job) => (
                      <li key={job} style={{ display: 'flex', gap: '9px', fontSize: '14px', lineHeight: 1.5, color: 'var(--pp-body)' }}>
                        <span style={{ marginTop: '2px', flex: 'none', display: 'inline-flex', height: '16px', width: '16px', alignItems: 'center', justifyContent: 'center', borderRadius: '999px', background: 'rgba(240,90,40,0.1)', color: 'var(--pp-orange-dark)' }}>{checkIcon}</span>
                        {job}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Comparison */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// side by side'}</p>
            <h2 style={{ marginTop: '10px' }}>Custom AI agent development compared with the alternatives</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '70ch' }}>
              Custom is not automatically the right call. Here is the honest read on each route, including the ones
              that do not involve us.
            </p>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead>
                  <tr><th>Route</th><th>Best for</th><th>Where it breaks</th><th>Our read</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="name">Built-in vendor AI</td>
                    <td>Deflecting common questions inside one tool</td>
                    <td>Cannot reach systems the vendor does not connect to</td>
                    <td>Try it first. If it covers the job, you are done</td>
                  </tr>
                  <tr>
                    <td className="name">No-code builders</td>
                    <td>Moving data between apps on a fixed path</td>
                    <td>Weak once a real decision, a limit or an audit trail is needed</td>
                    <td>Good glue, not a decision maker</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Custom agent build</td>
                    <td>Workflows spanning several systems with your own rules</td>
                    <td>Needs an owner, sandbox access and real historical cases</td>
                    <td>Where the durable gain sits for most mid-market ops</td>
                  </tr>
                  <tr>
                    <td className="name">In-house build</td>
                    <td>Teams with spare senior engineers and an evaluation habit</td>
                    <td>Integration and evaluation work is larger than it looks</td>
                    <td>Right long term, slow to start from zero</td>
                  </tr>
                  <tr>
                    <td className="name">Large systems integrator</td>
                    <td>Enterprise programmes with a governance mandate</td>
                    <td>Discovery phases longer than a mid-market build takes end to end</td>
                    <td>Overweight for a 50 to 500 person company</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// how it runs'}</p>
            <h2 style={{ marginTop: '10px' }}>How we build it</h2>
            <ul className="pp-bento n5" style={{ marginTop: '32px' }}>
              {STEPS.map((s) => (
                <li className="pp-card" key={s.n}>
                  <p className="pp-mlabel" style={{ marginBottom: '8px' }}>{s.n}</p>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{s.t}</h3>
                  <p>{s.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What we will not automate */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-mlabel">{'// the honest bit'}</p>
                <h2 style={{ marginTop: '10px' }}>What we will not automate</h2>
                <p className="pp-lead" style={{ marginTop: '14px' }}>
                  Saying no to the wrong workflow is the cheapest thing an agency can do for you, and the part most
                  sales conversations skip. These are the jobs we decline or redesign rather than automate.
                </p>
                <CheckList items={NOT_AUTOMATED} />
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 24px 48px -28px rgba(20,17,15,0.28)' }}>
                <Image
                  src="/images/us/services/ai-agency/service-team-ai.webp"
                  alt="An operations team reviewing which workflows are suitable for automation"
                  width={600}
                  height={402}
                  loading="lazy"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mid-page CTA */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(28px,4vw,48px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <h2 style={{ marginTop: 0 }}>Not sure which workflow is the right first one?</h2>
                <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '58ch' }}>
                  That is the decision the whole project turns on, and it is worth getting right before anyone writes
                  a proposal. Tell us the queue that hurts most and which systems it touches. We will say plainly
                  whether an agent is the right answer.
                </p>
                <div style={{ marginTop: '20px' }}>
                  <ModalCTAButton label="Talk to the Founder" region="us" btnVariant="primary-light" />
                </div>
              </div>
              <div className="pp-card" style={{ padding: 'clamp(24px,3vw,34px)' }}>
                <CheckList items={CLOSERS} />
              </div>
            </div>
          </div>
        </section>

        {/* Agent types / internal links */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// by agent type'}</p>
            <h2 style={{ marginTop: '10px' }}>Agent builds by job</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              Each is a narrow build with its own trigger, tool list and escalation rule. Most engagements start with
              one and reuse the same integration layer for the next.
            </p>
            <ul className="pp-bento n8" style={{ marginTop: '32px' }}>
              {[
                { t: 'Customer support agent', d: 'Resolves a defined slice of the help desk queue and triages the rest with a summary attached.', href: '/services/ai-agent-development/ai-customer-support' },
                { t: 'Sales agent', d: 'Enriches, qualifies and routes inbound leads, then writes the reasoning into the CRM record.', href: '/services/ai-agent-development/ai-sales-agent' },
                { t: 'Workflow automation agent', d: 'Runs multi-step back-office chains across the ERP, the CRM and the messaging layer.', href: '/services/ai-agent-development/ai-workflow-automation' },
                { t: 'Scheduling agent', d: 'Books, reschedules and confirms appointments against real calendar and capacity rules.', href: '/services/ai-agent-development/ai-scheduling-agent' },
                { t: 'Voice agent', d: 'Handles inbound calls over Twilio, collects what is needed and routes to the right team.', href: '/services/ai-agent-development/ai-voice-agent' },
                { t: 'AI chatbot', d: 'Answers on the website from your own documentation, and hands off cleanly when it should.', href: '/services/ai-agent-development/ai-chatbot' },
                { t: 'Marketing agent', d: 'Drafts, schedules and reports on campaign work with a person approving anything published.', href: '/services/ai-agent-development/ai-marketing-agent' },
                { t: 'AI SEO and answer engines', d: 'Getting your own pages cited by ChatGPT, Perplexity and AI Overviews is a separate discipline.', href: '/services/ai-seo' },
              ].map((a) => (
                <li className="pp-card" key={a.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>
                    <Link href={a.href} style={{ color: 'inherit', textDecoration: 'underline' }}>{a.t}</Link>
                  </h3>
                  <p>{a.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Manufacturer and distributor builds */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// manufacturing and distribution'}</p>
            <h2 style={{ marginTop: '10px' }}>Agent builds for manufacturers and distributors</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              These three run on the systems a plant, a purchasing desk or a quoting team already uses. The
              integration work is the same. The vocabulary, the standards and the approval rules are not.
            </p>
            <ul className="pp-bento" style={{ marginTop: '32px' }}>
              {[
                { t: 'RFQ and bidding agent', d: 'Reads inbound quote requests, pulls the line items, matches them to the catalogue and drafts the quote for a human to sign off.', href: '/services/ai-agent-development/rfq-bidding-agent' },
                { t: 'Manufacturing operations agent', d: 'Shift handovers, downtime rollups and work-order questions answered from the ERP and the maintenance log. It reads. It does not control anything.', href: '/services/ai-agent-development/manufacturing-operations-agent' },
                { t: 'Procurement and supply chain agent', d: 'Parses supplier acknowledgements and delay notices out of email, reconciles promised dates against the ERP and flags what slipped.', href: '/services/ai-agent-development/procurement-supply-chain-agent' },
              ].map((a) => (
                <li className="pp-card" key={a.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>
                    <Link href={a.href} style={{ color: 'inherit', textDecoration: 'underline' }}>{a.t}</Link>
                  </h3>
                  <p>{a.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* E-Commerce & Agentic AI Operations */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// agentic commerce & retail ops'}</p>
            <h2 style={{ marginTop: '10px' }}>AI agents for modern e-commerce and wholesale operations</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '70ch' }}>
              From high-growth Shopify Plus brands to complex B2B wholesale distributors, we build autonomous agents that resolve customer exceptions, manage inventory allocations, and streamline wholesale order workflows.
            </p>
            <CheckList
              items={[
                'Shopify & Shopify Plus Admin API integration: instant return authorization, warranty replacement, and address updates without human queue delays',
                'B2B wholesale order extraction: ingest purchase orders from email or PDF, validate pricing tiers against ERP masters, and draft NetSuite or QuickBooks sales orders',
                'Carrier tracking & delivery exception routing across FedEx, UPS, USPS, and ShipStation',
                'Autonomous customer support triage inside Gorgias, Zendesk, and Intercom with strict refund thresholds',
                'Omnichannel sync linking Amazon Seller Central, Walmart Marketplace, and direct-to-consumer storefronts',
                'AI shopping assistance and product discovery engineered for next-generation conversational commerce',
              ]}
            />
            <p className="pp-lead" style={{ marginTop: '24px', maxWidth: '70ch' }}>
              Explore our specialized{' '}
              <Link href="/agentic-commerce" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>
                Agentic Commerce
              </Link>{' '}
              and{' '}
              <Link href="/b2b-ecommerce" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>
                B2B E-Commerce
              </Link>{' '}
              architectures.
            </p>
          </div>
        </section>

        <FAQ
          eyebrow="AI AGENT DEVELOPMENT FAQ"
          headline="Questions operations leaders ask before they start"
          lead="The questions that come up on every scoping call, answered here rather than saved for the pitch."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* Final CTA */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="GET STARTED"
            headline="Scope your first agent"
            sub="Tell us the queue that hurts most, which systems hold the data, and what the agent must never be allowed to do. You get a straight read, and a fixed proposal before any work starts."
            primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
            secondaryCta={{ label: 'See our AI SEO work', href: '/services/ai-seo' }}
            objectionHandler="Fixed proposal. You own the code. Every agent ships with limits, escalation and an audit log."
          />
        </div>

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
