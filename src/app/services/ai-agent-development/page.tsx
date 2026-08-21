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
   Freshness signal. Keep honest: bump only when the content actually changes.
───────────────────────────────────────────────────────────────────────────── */
const PAGE_MODIFIED = '2026-08-06';

export const metadata: Metadata = {
  title: 'AI Agent & Agentic AI Development Services USA | FactoryJet',
  description:
    'Custom AI agent development for US operations teams. Agents that work support, sales and back-office queues inside Zendesk, HubSpot, NetSuite, Shopify and Slack.',
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
    'agentic ai consultant',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Agent & Agentic AI Development Services USA | FactoryJet',
    description:
      'Custom AI agents for operations leaders: support, sales and back-office workflows wired into the help desk, CRM and ERP you already run.',
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
    title: 'AI Agent & Agentic AI Development Services USA | FactoryJet',
    description:
      'Custom AI agents that work real queues in Zendesk, HubSpot, NetSuite, Shopify and Slack, with human approval on anything that matters.',
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
   FAQ content. The FAQPage JSON-LD below is generated from THIS array. Never
   hand-write a second copy: schema that disagrees with the visible page is a
   cloaking-adjacent failure and the most common silent bug in this repo.
───────────────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES = [
  { key: 'basics', label: 'The basics' },
  { key: 'integrations', label: 'Systems & integrations' },
  { key: 'stack', label: 'Stack & architecture' },
  { key: 'agentic', label: 'Agentic AI' },
  { key: 'safety', label: 'Control & safety' },
  { key: 'process', label: 'Process & ownership' },
  { key: 'choosing', label: 'Choosing a partner' },
  { key: 'india', label: 'India' },
];

const FAQ_ITEMS = [
  /* ── The basics ── */
  {
    category: 'basics',
    question: 'What is an AI agent, and how is it different from a chatbot?',
    answer:
      'A chatbot writes an answer. An agent takes an action. It receives a trigger, such as a new Zendesk ticket or a HubSpot form fill, reads the records it needs, decides what to do against rules you set, then writes back: issuing the refund, updating the CRM, or handing the case to a person with a summary attached.',
  },
  {
    category: 'basics',
    question: 'What does an AI agent development company actually do?',
    answer:
      'Four things: pick a workflow narrow enough to finish, wire the agent into the systems holding the data, define the tools it may call and the limit on each one, then measure it against real cases from your own history. Most of the work is integration and evaluation, not prompt writing.',
  },
  {
    category: 'basics',
    question: 'What is custom AI agent development, and when do we need it instead of a tool?',
    answer:
      'Buy the tool when your workflow matches the product it ships with. Build custom when the agent must read from systems the vendor does not connect to, follow approval rules specific to your business, or write into a record layout only you use. Most mid-market operations have at least one workflow no vendor covers cleanly.',
  },
  {
    category: 'basics',
    question: 'Which AI models do you build on?',
    answer:
      'We pick per workflow rather than picking a vendor. Frontier models from Anthropic, OpenAI and Google handle reasoning and tool selection. Smaller models handle classification and extraction, where a large one is wasted. The model sits behind an interface, so swapping it later is configuration rather than a rebuild.',
  },

  {
    category: 'basics',
    question: 'Can an AI agent handle customer support tickets end to end?',
    answer:
      'For a defined slice of the queue, yes. An agent can resolve order status, returns eligibility, subscription changes and account questions inside Zendesk, Freshdesk, Intercom or Gorgias, and triage the rest. Handing an agent the whole queue on day one is the most common way these projects fail.',
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

  /* ── Control & safety ── */
  {
    category: 'safety',
    question: 'What stops the agent from doing something expensive or wrong?',
    answer:
      'Limits written into the tools, not into the prompt. Each tool has a JSON schema and a hard boundary: a refund ceiling, an allow list of fields it may write, a rate limit, an environment it cannot leave. Anything outside those bounds is not a judgement call, it is an escalation.',
  },
  {
    category: 'safety',
    question: 'How do we audit what the agent did?',
    answer:
      'Every run writes an append-only log: the trigger, each tool call with its arguments, the result returned, the final action and the record IDs touched. Any case can be replayed. Without that you cannot answer a customer complaint or an auditor, so we treat it as part of the build.',
  },
  {
    category: 'safety',
    question: 'Where does our data go?',
    answer:
      'The agent reads through authenticated APIs using service accounts scoped with OAuth to the minimum permission set the job needs. Model inputs stay limited to the fields the task requires, and for regulated work retrieval and storage can stay inside your own cloud account. Every data path is documented at handover.',
  },
  {
    category: 'safety',
    question: 'Who is accountable when an agent makes a mistake?',
    answer:
      'You are, the same as with any employee or any script, which is exactly why the design points are boundaries, approvals and logs. No AI system is right every time. What responsible design gives you is errors that are visible, bounded in cost, and correctable rather than silent.',
  },

  /* ── Process & ownership ── */
  {
    category: 'process',
    question: 'How long does an AI agent build take?',
    answer:
      'A single narrow workflow with one or two integrations is usually a matter of weeks. Multi-workflow builds with deeper ERP work take longer. The variable that moves the timeline most is access: how quickly we get sandbox credentials, sample data, and a decision maker who can say what correct looks like.',
  },
  {
    category: 'process',
    question: 'What happens after we launch?',
    answer:
      'The agent runs in shadow mode first, proposing actions a person approves, so you can watch the escalation and disagreement rates before it acts alone. Then you get a dashboard, the evaluation harness and the runbook. Ongoing support is a monthly retainer if you want it, not a condition of the build.',
  },
  {
    category: 'process',
    question: 'Do we own the code and the integrations?',
    answer:
      'Yes. The repository, the connectors, the prompts, the evaluation sets and the cloud accounts are yours. There is no proprietary runtime you lose access to if you stop working with us, and nothing you cannot maintain with an ordinary engineering team.',
  },

  /* ── Choosing a partner ── */
  {
    category: 'choosing',
    question: 'How much does AI agent development cost?',
    answer:
      'Scope drives it: how many workflows, how many systems the agent touches, whether those systems have clean APIs, and how strict the compliance requirements are. We scope on a call and send a fixed proposal before any work starts, so the number is agreed up front rather than accumulating hourly.',
  },
  {
    category: 'choosing',
    question: 'How should we compare AI agent development companies?',
    answer:
      'Ask each one to walk one of your real workflows end to end, naming the systems, the trigger, the tools and the escalation rule. Interchangeable answers about agent types tell you nothing. Then ask who owns the code, how accuracy will be measured, and what the agent is forbidden to do.',
  },
  {
    category: 'choosing',
    question: 'Are you an AI automation agency or a development company?',
    answer:
      'Both labels get used for the same work. The distinction worth caring about is whether a firm connects tools with a workflow builder or writes the integration and evaluation layer itself. We do the second, because the first stops being enough as soon as an agent has to decide rather than move data.',
  },

  /* ── India ── */
  {
    category: 'india',
    question: 'Do you build AI agents for companies in India?',
    answer:
      'Yes. India is a market we build for, not a footnote on a US page. The engineering is identical. The system list changes: Zoho CRM, Freshdesk, Tally, Razorpay, Shiprocket and the WhatsApp Business API sit where the US stack would, and the limits, escalation and audit rules carry across unchanged.',
  },
  {
    category: 'india',
    question: 'Can an AI agent work over WhatsApp for an India team?',
    answer:
      'Yes, and in India it is often the main channel rather than a side one. The agent runs on the WhatsApp Business API through Interakt, Wati or AiSensy, detects the language a customer writes in, reads live order and payment records, and escalates to a person on the same thread.',
  },
  {
    category: 'india',
    question: 'Which is the best AI agent development company in India?',
    answer:
      'It depends on the job, so treat any ranked list as a shortlist rather than an answer. Apply the same test everywhere: who scopes the work, is the price fixed before it starts, who owns the code at the end, and can they walk one of your workflows end to end naming real systems.',
  },

  /* ── Stack & architecture ─────────────────────────────────────────────────
     These are the questions an IT head or technical evaluator asks, and they
     were the page's biggest gap: before this block the page named zero agent
     frameworks (no LangChain, LangGraph, CrewAI or AutoGen) and had no
     question covering retrieval, evaluation or self-hosting.

     That matters beyond completeness. The one page ChatGPT has ever cited on
     this site is /b2b-ecommerce, and the mechanism was named-capability
     density, not authority. /services/ai-automation is the best-performing US
     page and names n8n 18x, Zapier 23x, Make 10x. This page had none of that
     vocabulary, and takes 5 impressions a month.
  ─────────────────────────────────────────────────────────────────────────── */
  {
    category: 'stack',
    question: 'What frameworks do you build AI agents on?',
    answer:
      'We build on LangGraph or the model vendor SDKs for anything that needs reliable state and branching, and use LangChain where its integrations save real time. Multi-agent frameworks like CrewAI and AutoGen are useful for a narrow set of problems and a liability for the rest, so we only reach for them when a job genuinely needs several specialised agents rather than one agent with good tools. Tool access goes through MCP servers where a system supports it. The framework should be a decision you can see justified, not a preference you inherit.',
  },
  {
    category: 'stack',
    question: 'How do you connect an AI agent to our internal documents and data?',
    answer:
      'Through retrieval, not fine-tuning, in almost every case. The agent queries your content at run time rather than having it baked into a model, which means answers update the moment your documents do. In practice that is a vector store such as pgvector or Pinecone holding embeddings of your knowledge base, plus direct API reads from the systems of record so live data like order status or ticket history is fetched fresh rather than remembered. Fine-tuning is for changing how a model behaves, not for teaching it your facts.',
  },
  {
    category: 'stack',
    question: 'How do you measure whether an AI agent is actually working?',
    answer:
      'With an evaluation suite built before launch, run against every change afterwards. The metrics that matter are task success rate (did the agent complete the job without a human), escalation rate (how often it correctly hands off), and false-action rate (how often it did something it should not have). We build a fixed set of real cases from your own history, score each release against it, and treat a regression as a blocker. Agents without evals degrade quietly, because nothing errors when an answer is merely wrong.',
  },
  {
    category: 'stack',
    question: 'Can an AI agent run on our own infrastructure instead of a vendor cloud?',
    answer:
      'Yes. The orchestration layer, the vector store and the integration code can all run in your cloud account or on-premise, which keeps your data inside your boundary. The model itself is the part that forces a choice: hosted models from OpenAI or Anthropic mean requests leave your network under their data terms, while open-weight models can run entirely in your environment at the cost of more infrastructure work and usually some capability. We scope this early, because it changes the architecture rather than being a setting you flip later.',
  },
  /* ── Agentic AI ────────────────────────────────────────────────────────────
     Added 2026-08-18. The page had ZERO mentions of "agentic" despite being the
     agent development page. Measured reachability, weakest page-1 incumbent by
     referring domains against our 63:

       agentic ai development company   210/mo   weakest  77   REACHABLE
       agentic ai development services  170/mo   weakest ~77   REACHABLE
       agentic ai consultant             90/mo   weakest  19   REACHABLE
       agentic ai company               880/mo   weakest 348   GATED (IBM, AWS, MIT Sloan)
       agentic ai agency                320/mo   weakest 553   GATED
       agentic ai development           260/mo   learning SERP (MS Learn, DeepLearning.AI)

     So this targets the explicitly commercial long-tail only, roughly 470/mo.
     Do not retarget at "agentic ai company" or "agentic ai agency": those are
     held by IBM, AWS, Salesforce and MIT Sloan at a median of 21,000-31,000
     referring domains.
  ─────────────────────────────────────────────────────────────────────────── */
  {
    category: 'agentic',
    question: 'What is agentic AI, and how is it different from an AI agent?',
    answer:
      'An AI agent is the thing. Agentic AI is the property that makes it worth building. A system is agentic when it decides its own next step toward a goal rather than following a fixed script: it chooses which tool to call, notices when a result is wrong, and retries or escalates. A chatbot with a decision tree is not agentic no matter what the vendor calls it. The practical difference for you is that agentic systems handle the cases nobody wrote a rule for, which is where most of the manual work actually lives.',
  },
  {
    category: 'agentic',
    question: 'What does an agentic AI development company actually do?',
    answer:
      'Four things, in this order. It maps the workflow you want handled and decides honestly whether it needs an agent at all. It builds the tool layer, meaning the reads and writes into your CRM, ERP, helpdesk and data, because an agent without tools is just a chat window. It builds the control layer: what the agent may do unsupervised, what needs a human, and what it must never touch. Then it builds the evaluation suite that proves the thing works before it touches a customer. Most of the effort is the middle two.',
  },
  {
    category: 'agentic',
    question: 'When should we hire an agentic AI consultant instead of a development team?',
    answer:
      'Hire a consultant when you do not yet know what to build. That is a real and common position, and paying for a build in that state is how projects get abandoned. A short consulting engagement should end with a ranked list of candidate workflows, an honest verdict on which ones are worth automating, and a build estimate. Hire a development team once you know the workflow, the systems it touches, and what success looks like. We do both, and we will tell you which one you are actually in.',
  },
  {
    category: 'agentic',
    question: 'Is agentic AI ready for production, or is it still a demo technology?',
    answer:
      'It is production-ready for narrow, well-instrumented jobs and not ready for open-ended ones. An agent that handles a defined workflow with a fixed set of tools, clear escalation and an evaluation suite behind it runs reliably today. An agent given broad autonomy over systems it can write to, without evals, will fail in ways nobody notices for weeks. The difference is not the model, it is the scope and the instrumentation around it. Be suspicious of anyone who does not raise that distinction before quoting.',
  },
  {
    category: 'stack',
    question: 'Do we need one agent or several agents working together?',
    answer:
      'Start with one, and split only when it stops working. A single agent with a well-chosen set of tools handles more than most teams expect, and it is far easier to debug because there is one decision trail. Multi-agent orchestration earns its complexity when tasks genuinely need different capabilities or permissions, for example a research step that reads widely and a separate execution step allowed to write to your CRM. Splitting early is the most common way an agent build becomes hard to reason about.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD. Every const declared here is rendered in the component below.
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
    'Custom AI agent development for operations teams: support, sales and back-office agents built on function calling, Model Context Protocol connectors and retrieval, integrated with Zendesk, Freshdesk, Intercom, HubSpot, Salesforce, NetSuite, Dynamics 365 Business Central, Shopify, Slack, Microsoft Teams and Twilio, with human-in-the-loop escalation and audit logs.',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'India' },
  ],
  audience: {
    '@type': 'BusinessAudience',
    name: 'Mid-market operations, support and revenue operations teams',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI agent development services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Customer support agent development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sales and lead routing agent development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Back-office and workflow agent development' } },
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
  name: 'AI Agent Development Services',
  description:
    'Custom AI agent development for US operations teams, with India coverage: agents that work real queues in Zendesk, HubSpot, NetSuite, Shopify and Slack.',
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

// Citations fetch-verified 2026-08-06 against the linked primary sources.
// Do not edit a claim here without re-opening the source page first.
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
    d: 'Shopify, ShipStation and carrier tracking APIs. Orders, fulfilments, refunds, subscription changes and the exception handling that eats a support queue.',
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
    t: 'Back office',
    d: 'Quieter work, and usually the largest pile of recoverable hours.',
    list: [
      'Invoice and purchase order extraction into NetSuite or Dynamics 365 Business Central',
      'Vendor and customer onboarding checks',
      'Order exception handling and shipment follow-ups',
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
   Page
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
                <p className="pp-eyebrow">AI agent development services</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '19ch' }}>
                  AI agents that work your queues, not a demo.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '50ch' }}>
                  FactoryJet is a custom AI agent development company for operations leaders at 50 to 500 person
                  businesses. We build agents that pick up support, sales and back-office work inside the systems you
                  already run, with hard limits on what they can do and a person in the loop where it counts.
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
            <h2 style={{ marginTop: '10px' }}>What is AI agent development?</h2>
            <p className="pp-lead" style={{ marginTop: '16px', maxWidth: '72ch' }}>
              AI agent development is the work of building software that receives a trigger, reads the records it needs
              from your business systems, decides what to do against rules you set, and then takes the action itself. A
              chatbot writes a reply. An agent issues the refund, updates the CRM, and escalates what it should not touch.
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
                  flagged ticket instead of a refunded order.
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

        {/* India */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// india'}</p>
            <h2 style={{ marginTop: '10px' }}>AI agent development in India</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '70ch' }}>
              We build agents for Indian businesses as well as US ones, and the two are not the same brief. The
              engineering is the same. The system list is not, and copying a US design straight across rarely works.
            </p>
            <CheckList
              items={[
                'WhatsApp Business API as a primary channel rather than a side one, through Interakt, Wati or AiSensy, with language detection across Hindi, English and regional languages',
                'Zoho CRM and Freshdesk where a US build would use HubSpot or Zendesk, with the same read, write and escalation pattern',
                'Tally and Zoho Books for accounting reads, and Razorpay, PayU or Cashfree webhooks as payment triggers',
                'Shiprocket and Delhivery for fulfilment status and delivery exception handling',
                'GST workflows: invoice extraction, GSTIN validation, tax split calculation and a per-transaction audit trail your accountant can follow',
                'Exotel or Twilio for voice and IVR, with the same human handoff rules as the messaging agents',
              ]}
            />
            <p className="pp-lead" style={{ marginTop: '24px', maxWidth: '70ch' }}>
              If you are comparing AI agent development companies in India, apply the test we would apply to ourselves:
              ask each firm to walk one of your workflows end to end, naming the systems and the escalation rule.
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
