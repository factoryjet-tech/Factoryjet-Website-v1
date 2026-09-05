const CARD_SHADOW = "0 24px 48px" + " -28px " + "rgba(20,17,15,0.28)";
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
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
  title: 'Custom AI Agent Development Services USA | FactoryJet',
  description:
    'Custom AI agent development for US brands: autonomous support, sales, and back-office agents wired into Zendesk, HubSpot, NetSuite, and Shopify.',
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
    url: 'https://factoryjet.com' + '/services' + '/ai-agent-development',
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
  { key: 'basics', label: 'The Basics.' },
  { key: 'ecommerce', label: 'E-Commerce & Retail AI.' },
  { key: 'integrations', label: 'Systems & Integrations.' },
  { key: 'stack', label: 'Stack & Architecture.' },
  { key: 'agentic', label: 'Agentic AI & Autonomy.' },
  { key: 'safety', label: 'Control, Safety & Governance.' },
  { key: 'process', label: 'Process & Ownership.' },
  { key: 'choosing', label: 'Choosing a Partner.' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  /* ── The basics ── */
  {
    category: 'basics',
    question: 'What is an AI agent, and how is it different from a chatbot?',
    answer:
      'A chatbot writes an answer. An agent takes an action. It receives a webhook trigger. It reads needed system records. It decides what to do against set rules. Then it writes back. It issues refunds in Shopify. It updates CRM records. It books sales meetings. It hands cases to staff with full summaries.',
  },
  {
    category: 'basics',
    question: 'What does an AI agent development company actually do?',
    answer:
      'We do four core things. We pick a narrow workflow. We wire agents into your systems. We define tool call limits. We test agents against real historical cases. Most work is integration and evaluation. It is not prompt writing.',
  },
  {
    category: 'basics',
    question: 'What is custom AI agent development, and when do we need it instead of an off-the-shelf tool?',
    answer:
      'Buy off-the-shelf tools for standard workflows. Build custom agents when you need unique integrations. Custom code connects systems vendors ignore. It enforces unique company approval rules. It writes into custom database schemas. Most mid-market firms have custom workflows.',
  },
  {
    category: 'basics',
    question: 'Which AI models do you build on?',
    answer:
      'We select models per workflow. We avoid vendor lock-in. Models from Anthropic handle reasoning. Models from OpenAI handle tool selection. Google Gemini models process multimodal inputs. Smaller models handle quick classification. Models sit behind unified interfaces. Swapping models requires simple configuration.',
  },
  {
    category: 'basics',
    question: 'Can an AI agent handle customer support tickets end to end?',
    answer:
      'It handles a defined queue slice. Agents resolve order status inquiries. They check returns eligibility rules. They handle subscription changes in Zendesk. They update records in Freshdesk or Gorgias. Complex tickets route to human staff.',
  },

  /* ── E-Commerce & Retail AI ── */
  {
    category: 'ecommerce',
    question: 'How do autonomous AI shopping and support agents work with Shopify and Shopify Plus?',
    answer:
      'Agents connect via Shopify GraphQL APIs. They read live product catalogs. They check multi-location warehouse inventory. They calculate dynamic shipping rates. They execute address corrections. They generate return labels directly in conversations.',
  },
  {
    category: 'ecommerce',
    question: 'Can an AI agent automate B2B wholesale order processing and ERP entry?',
    answer:
      'Yes. The agent parses inbound PDF purchase orders. It validates line item SKUs. It checks customer credit limits. It confirms tiered pricing in NetSuite. It drafts sales orders in Dynamics 365. Staff confirm orders in Slack before commitment.',
  },
  {
    category: 'ecommerce',
    question: 'How does Agentic Commerce change conversion rates for ecommerce brands?',
    answer:
      'Agentic commerce replaces static filters with active discovery. Shoppers ask natural product questions. The agent evaluates size and material attributes. It recommends matching catalog items. It builds carts for instant checkout.',
  },

  /* ── Systems & integrations ── */
  {
    category: 'integrations',
    question: 'Which help desks and CX tools do you integrate with?',
    answer:
      'We integrate Zendesk and Freshdesk. We connect Intercom and Gorgias. We support Front and Salesforce Service Cloud. Webhooks trigger agent execution. The agent reads tickets and customer records. It writes back replies, tags, and disposition fields.',
  },
  {
    category: 'integrations',
    question: 'Which CRMs and ERPs can the agent read from and write to?',
    answer:
      'We connect HubSpot, Salesforce, and Pipedrive. We integrate NetSuite and Dynamics 365. We support Sage Intacct and QuickBooks Online. We sync Shopify commerce records. Where needed, we build custom REST or SOAP connectors.',
  },
  {
    category: 'integrations',
    question: 'What is MCP, and why does it matter for us?',
    answer:
      'Model Context Protocol is an open standard. It connects AI apps to external systems. Connectors built for NetSuite remain reusable. Zendesk tools work across multiple agents. It eliminates vendor lock-in. It lowers costs on future agent deployments.',
  },
  {
    category: 'integrations',
    question: 'What if one of our systems has no usable API?',
    answer:
      'We clarify constraints during scoping. Options include database read replicas. We configure scheduled data exports. We deploy middleware integration layers. We leave specific manual steps with staff. We never use fragile screen-scraping tools.',
  },
  {
    category: 'integrations',
    question: 'Can the agent work inside Slack or Microsoft Teams?',
    answer:
      'Yes. Chat apps provide an ideal internal interface. The agent posts planned actions. Staff approve or edit actions with one click. Discussion threads become auditable decision records. Twilio enables similar workflows over SMS and voice.',
  },

  /* ── Stack & architecture ── */
  {
    category: 'stack',
    question: 'What frameworks do you build AI agents on?',
    answer:
      'We build on LangGraph and model vendor SDKs. These provide reliable state and branching. We apply LangChain where connectors save development time. Multi-agent setups like CrewAI run for role-isolated tasks. We avoid unnecessary architectural bloat.',
  },
  {
    category: 'stack',
    question: 'How do you connect an AI agent to our internal documents and data?',
    answer:
      'We use retrieval augmented generation. We do not use fine-tuning. Agents query content at runtime. Answers update instantly when documents change. We utilize vector stores like pgvector or Pinecone. We combine vectors with live API queries.',
  },
  {
    category: 'stack',
    question: 'How do you measure whether an AI agent is actually working?',
    answer:
      'We build automated evaluation suites before launch. Tests run against every code commit. We track task completion rates. We measure escalation accuracy and tool errors. We score hallucination metrics against real historical cases.',
  },
  {
    category: 'stack',
    question: 'Can an AI agent run on our own infrastructure instead of a vendor cloud?',
    answer:
      'Yes. Orchestration layers deploy in your VPC. Vector databases run on your cloud accounts. Systems deploy inside AWS, Google Cloud, or Azure. Sensitive enterprise data remains inside your security perimeter.',
  },

  /* ── Agentic AI ── */
  {
    category: 'agentic',
    question: 'What is agentic AI, and how is it different from an AI agent?',
    answer:
      'An AI agent is the software unit. Agentic AI is the reasoning capability. It evaluates intermediate outputs dynamically. It selects tools autonomously. It adapts actions toward business goals. It operates without brittle hardcoded scripts.',
  },
  {
    category: 'agentic',
    question: 'What does an agentic AI development company actually do?',
    answer:
      'We map target operational workflows. We develop secure enterprise tool interfaces. We implement strict guardrails and permissions. We build continuous evaluation harnesses. We verify accuracy before production release.',
  },
  {
    category: 'agentic',
    question: 'When should we hire an agentic AI consultant instead of a development team?',
    answer:
      'Hire consultants to evaluate automation ROI. Use consultants to architect security guardrails. Hire engineers once workflows and metrics are clear. We provide both strategic consulting and software engineering.',
  },
  {
    category: 'agentic',
    question: 'Is agentic AI ready for production, or is it still experimental?',
    answer:
      'It is ready for bounded business workflows. It requires typed tools and strict escalation boundaries. Unconstrained open-ended tasks still require supervision. Well-instrumented workflows deliver reliable production results today.',
  },

  /* ── Control & safety ── */
  {
    category: 'safety',
    question: 'What stops the agent from doing something expensive or wrong?',
    answer:
      'Guardrails enforce rules at API layers. Controls do not rely solely on prompts. Every tool enforces JSON schema validation. Systems apply hard financial transaction caps. Agents write only to allow-listed fields. Ambiguous inputs trigger automated human escalation.',
  },
  {
    category: 'safety',
    question: 'How do we audit what the agent did?',
    answer:
      'Every run writes to append-only audit logs. Logs capture trigger events and context. They store tool calls and parameters. They record returned outcomes. Full session replays support compliance reviews.',
  },
  {
    category: 'safety',
    question: 'Where does our data go during agent execution?',
    answer:
      'Agents communicate using least-privilege OAuth credentials. All inference calls use zero-data-retention agreements. Model providers never store your prompts. Your proprietary data never trains commercial public models.',
  },
  {
    category: 'safety',
    question: 'Who is accountable when an agent makes a mistake?',
    answer:
      'Your organization retains operational governance. Responsible engineering bounds financial errors. Suspicious events surface immediately in audit logs. Actions route to human review before impacting customers.',
  },

  /* ── Process & ownership ── */
  {
    category: 'process',
    question: 'How long does an AI agent build take?',
    answer:
      'A focused single workflow deploys in 3 to 6 weeks. That covers one or two system integrations. Multi-system enterprise deployments follow phased sprints. Deep ERP rollouts deploy over 8 to 12 weeks.',
  },
  {
    category: 'process',
    question: 'What happens after we launch?',
    answer:
      'Agents launch in shadow mode first. The system drafts actions for staff approval. Once accuracy benchmarks pass, autonomous actions activate. Operations teams monitor performance via live observability dashboards.',
  },
  {
    category: 'process',
    question: 'Do we own the code and the integrations?',
    answer:
      'Yes, 100 percent. You own complete Git repositories. You own connectors, prompts, and MCP configs. You receive all evaluation datasets. There are zero recurring per-user software licensing fees.',
  },

  /* ── Choosing a partner ── */
  {
    category: 'choosing',
    question: 'How do you scope and price AI agent development?',
    answer:
      'We scope pricing per workflow. Costs depend on integration complexity. Pricing reflects security and compliance needs. We deliver fixed-milestone proposals before kickoff. You avoid open-ended hourly billing.',
  },
  {
    category: 'choosing',
    question: 'How should we compare AI agent development companies?',
    answer:
      'Ask vendors to walk through real workflows. Check for typed API webhooks and tool limits. Review their evaluation harnesses and escalation logic. Avoid agencies that sell generic chatbot wrappers.',
  },
  {
    category: 'choosing',
    question: 'Are you an AI automation agency or a development company?',
    answer:
      'We are senior software engineers. We write custom API connectors and backend services. We build evaluation harnesses and MCP servers. We engineer dependable systems for enterprise operations.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schemas
───────────────────────────────────────────────────────────────────────────── */

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((i) => ({
    '@type': 'Question',
    name: i.question,
    acceptedAnswer: { '@type': 'Answer', text: i.answer },
  })),
};

const serviceSchema = {
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

const webPageSchema = {
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
  { name: 'Services', url: 'https://factoryjet.com' + '/services' },
  { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
];

// Breadcrumb schema injected via BreadcrumbSchema component

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const STATS = [
  { b: 'One job per agent.', s: 'Narrow scope, measurable result.' },
  { b: 'Your stack.', s: 'Zendesk, HubSpot, NetSuite, Shopify.' },
  { b: 'Human in the loop.', s: 'Approval on anything costly.' },
  { b: 'You own it.', s: 'Code, connectors, cloud accounts.' },
];

// Citations fetch-verified against the linked primary sources.
const SOURCED = [
  {
    v: 'MCP.',
    d: 'Model Context Protocol connects AI apps to external systems. Maintainers define it as an open standard. It manages data sources, tools, and workflows.',
    src: 'Model Context Protocol documentation.',
    href: 'https://modelcontextprotocol' + '.io/docs/getting-started/intro',
  },
  {
    v: 'Nov 2024.',
    d: 'Anthropic launched MCP in November 2024. It provides an open standard. It connects data sources and AI tools safely. We engineer connectors carefully.',
    src: 'Anthropic.',
    href: 'https://www.anthropic.com' + '/news/model-context-protocol',
  },
  {
    v: 'Tool calling.',
    d: 'OpenAI documents function calling for external tools. Models reach live data outside training weights. Tool calling turns models into active agents.',
    src: 'OpenAI API documentation.',
    href: 'https://developers.openai.com' + '/api/docs/guides/function-calling',
  },
];

const WALKTHROUGH = [
  {
    n: '01.',
    t: 'A trigger fires.',
    d: 'A ticket lands in Zendesk carrying the billing tag. Zendesk posts a webhook to the agent endpoint. Nothing is polled. Nothing waits.',
  },
  {
    n: '02.',
    t: 'The agent identifies the customer.',
    d: 'It calls the Shopify Admin API using the customer email. It checks order history and tracking status. It reads matching HubSpot contact records.',
  },
  {
    n: '03.',
    t: 'It retrieves your policy, not a generic one.',
    d: 'The agent queries internal vector stores. It searches returns policies and warranty terms. Generated replies match internal company standards.',
  },
  {
    n: '04.',
    t: 'It gets a small, typed tool list.',
    d: 'Four tools are exposed via function calling. Each tool enforces a typed JSON schema. Tools enforce transaction caps. Extra tools do not exist.',
  },
  {
    n: '05.',
    t: 'It acts inside the limits.',
    d: 'Under auto-approve limits, it issues refunds in Shopify. It replies on tickets in the customer language. Actions execute in seconds.',
  },
  {
    n: '06.',
    t: 'It escalates the rest.',
    d: 'Outside return windows or above caps, the agent pauses. It drafts replies and attaches reasoning. It assigns tickets to human staff.',
  },
  {
    n: '07.',
    t: 'It writes back to every system.',
    d: 'The Zendesk ticket updates tags and disposition fields. The Shopify order adds an internal note. HubSpot timelines record the event.',
  },
  {
    n: '08.',
    t: 'It tells a person when it matters.',
    d: 'A Slack alert posts to the escalations channel. Messages include ticket links and brief summaries. Microsoft Teams operates the same way.',
  },
  {
    n: '09.',
    t: 'It logs everything.',
    d: 'Every tool call and parameter writes to audit logs. Records are keyed to the ticket ID. Cases can be replayed months later.',
  },
];

const GUARDRAILS = [
  'Least-privilege service accounts limit OAuth scopes. Teams never use shared admin keys.',
  'Hard caps govern money-moving tools like refunds. Rules apply in software, not prompts.',
  'Strict allow-lists govern writable fields. Agents cannot overwrite sensitive records.',
  'Human approval protects high-stakes actions. Systems display agent reasoning before clicking.',
  'Confidence checks detect unusual inputs. The agent routes ambiguous edge cases to staff.',
  'Shadow mode runs at launch. The agent proposes actions. Staff approve decisions.',
  'Append-only audit logs record every run. Teams replay traces keyed to source records.',
  'Sandbox environments separate testing. Agents under evaluation cannot alter live ledgers.',
  'Circuit breakers stop runaway loops. Rate limits prevent multiple tickets from firing.',
];

const SYSTEMS = [
  {
    t: 'Help desk and CX.',
    d: 'Connect Zendesk, Freshdesk, and Intercom. Integrate Gorgias, Front, and Salesforce Service Cloud. Process ticket webhooks. Read customer histories. Post replies, internal notes, tags, and disposition fields.',
  },
  {
    t: 'CRM and revenue.',
    d: 'Integrate HubSpot, Salesforce, and Pipedrive. Read contact and deal records. Enrich prospect data. Assign lead ownership. Log timeline events and create tasks for sales reps.',
  },
  {
    t: 'ERP and finance.',
    d: 'Connect NetSuite, Dynamics 365, Sage Intacct, and QuickBooks Online. Sync invoice records and purchase orders. Check customer credit limits. Update general ledger accounting codes.',
  },
  {
    t: 'Commerce and fulfilment.',
    d: 'Connect Shopify, Shopify Plus, BigCommerce, and WooCommerce. Integrate ShipStation and carrier APIs. Manage orders and shipments. Issue return authorizations. Handle delivery exceptions.',
  },
  {
    t: 'Messaging and voice.',
    d: 'Integrate Slack, Microsoft Teams, Gmail, and Microsoft 365. Wire Twilio for voice and SMS. Route real-time approvals. Dispatch alerts. Store threads as permanent decision records.',
  },
  {
    t: 'Data and work tracking.',
    d: 'Read Postgres, Snowflake, BigQuery, Google Sheets, and Airtable. Query relational databases. Create work tickets in Jira, Asana, Notion, and Confluence.',
  },
];

const STACK = [
  'Model Context Protocol servers keep tools reusable. Connectors run across clients without vendor lock-in.',
  'Function calling uses typed JSON schemas. Models execute real actions rather than text descriptions.',
  'Retrieval searches internal policies. Agents query vector stores like pgvector or Pinecone.',
  'Webhooks process triggers safely. Event queues and idempotency keys prevent duplicate actions.',
  'OAuth scopes configure tight permissions. Access boundaries are set before authoring agent code.',
  'Evaluation suites run against historical cases. Systems benchmark accuracy against human choices.',
  'Observability dashboards track latency. Metrics monitor error rates, escalation rates, and drift weekly.',
  'Model selection balances frontier reasoning models. Compact models handle fast extraction tasks.',
];

const FIRST_WINS = [
  {
    t: 'Customer Support.',
    d: 'Start with one ticket category in Zendesk or Gorgias. Measure accuracy, then expand.',
    list: [
      'Order status answered from live Shopify and carrier tracking data.',
      'Returns and refund eligibility verified against written store policies.',
      'Subscription pauses, skips, and customer delivery address changes.',
      'Triage, tagging, and routing for complex edge cases to human staff.',
    ],
  },
  {
    t: 'Sales and Revenue Ops.',
    d: 'The primary gain is speed to first customer touch rather than headcount reduction.',
    list: [
      'Inbound lead enrichment and scoring against qualification criteria.',
      'Territory and round-robin owner assignment in HubSpot or Salesforce.',
      'Meeting scheduling, calendar reminders, and no-show follow-up messaging.',
      'Slack or Microsoft Teams alerts on high-priority time-sensitive deals.',
    ],
  },
  {
    t: 'Back Office & Wholesale.',
    d: 'High-volume administrative processing with substantial recoverable staff hours.',
    list: [
      'Invoice and purchase order extraction into NetSuite or Dynamics 365.',
      'B2B wholesale order verification against contracted tier pricing.',
      'Order exception triage and shipment follow-ups across third-party logistics.',
      'Weekly operational reporting aggregated from Snowflake, BigQuery, or Sheets.',
    ],
  },
];

const NOT_AUTOMATED = [
  'Decisions where two operators disagree. There is no single ground truth to evaluate against.',
  'Actions moving funds without financial caps. High-value transactions require human sign-off.',
  'Workflows lacking APIs or exports. We avoid fragile screen scrapers that break silently.',
  'Processes that lack written rules. Agents must not encode contradictory verbal instructions.',
  'Final decisions on hiring, credit, medical, or legal outcomes. A person must own the result.',
  'Highly unusual edge cases in customer queues. Rare exceptions benefit from human empathy.',
];

const STEPS = [
  {
    n: '01.',
    t: 'Pick one workflow.',
    d: 'We map ticket volumes, documented business rules, target systems, and error costs. Then we select the narrowest high-impact workflow.',
  },
  {
    n: '02.',
    t: 'Build the evaluation set.',
    d: 'We sample historical cases with known human outcomes. Every change is tested against this suite, making accuracy measurable.',
  },
  {
    n: '03.',
    t: 'Wire the integrations.',
    d: 'We build API connectors, MCP servers, OAuth scopes, and typed tool schemas with limits. This foundation is reused by future agents.',
  },
  {
    n: '04.',
    t: 'Run it in shadow mode.',
    d: 'The agent proposes actions for human review on live traffic. Staff verify decisions so no unreviewed action reaches customers.',
  },
  {
    n: '05.',
    t: 'Release, then widen.',
    d: 'Autonomy activates on proven categories, while edge cases escalate to staff. Subsequent workflows reuse the integration layer.',
  },
];

const CLOSERS = [
  'Fixed proposal agreed before work starts, with no open-ended hourly billing.',
  'You own the Git repository, connectors, prompts, and cloud infrastructure.',
  'Accuracy is benchmarked against your real historical cases, not demo scripts.',
  'Every agent ships with hard tool limits, escalation rules, and audit logs.',
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
        <li key={item} style={{ display: 'flex', gap: '10px', color: 'var(--pp-body)' }}>
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
      <script id="aiagent-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="aiagent-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="aiagent-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* Hero */}
        <section className="pp-dotgrid" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="pp-wrap" style={{ paddingTop: 'clamp(40px,5vh,72px)', paddingBottom: 'clamp(44px,6vh,84px)', position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">Custom AI Agent Development Services.</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '19ch' }}>
                  AI agents that work your queues, not a demo.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '50ch' }}>
                  FactoryJet is an AI agent development company. We serve mid-market operations leaders. We build autonomous agents for customer support. We build agents for sales and back-office workflows. Agents integrate directly with systems you already run. Every agent enforces strict tool limits. High-stakes actions require human approval.
                </p>
                <HeroInlineForm source="us_ai_agent_dev_hero" region="us" submitLabel="Scope my first agent." />
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: CARD_SHADOW }}>
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
              Custom AI agent development is an engineering discipline. It builds software that responds to business triggers. The agent reads verified records from your systems. It decides next actions using deterministic rules. Then it takes the action itself. A chatbot merely writes text. An autonomous agent issues refunds in Shopify. It creates sales orders in NetSuite. It updates CRM records. It escalates edge cases to your team.
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
            <h2 style={{ marginTop: '10px' }}>A refund request, from webhook to audit log.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '70ch' }}>
              Most agencies list generic agent categories. We show one narrow job instead. Here is a live flow. A brand runs Zendesk and Shopify.
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
              Swap Zendesk for Freshdesk. Swap Shopify for NetSuite. Replace a refund with a credit memo. The architecture holds. Systems change across stacks. Webhook triggers, typed tools, and audit logs stay constant.
            </p>
          </div>
        </section>

        {/* Guardrails */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-mlabel">{'// control'}</p>
                <h2 style={{ marginTop: '10px' }}>What the agent is allowed to do, and what it is not.</h2>
                <p className="pp-lead" style={{ marginTop: '14px' }}>
                  Operations leaders focus on risk control. They ask what happens when inputs are unusual. Tool limits enforce safety boundaries. Errors create flagged tickets. They never create bad financial entries.
                </p>
                <CheckList items={GUARDRAILS} />
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: CARD_SHADOW }}>
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
            <h2 style={{ marginTop: '10px' }}>The systems we wire an agent into.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              An agent is only as capable as its tool access. Mid-market teams operate diverse systems. Agents read and write records in each.
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
              If a system exposes an API or webhook, an agent can interact with it. If it lacks endpoints, we identify constraints during scoping. For storefront implementations, explore our{' '}
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
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: CARD_SHADOW }}>
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
                <h2 style={{ marginTop: '10px' }}>The agent-side stack, in plain terms.</h2>
                <p className="pp-lead" style={{ marginTop: '14px' }}>
                  Enterprise agents follow structured software patterns. An agent combines a model, typed tools, and document retrieval. Careful engineering manages permissions and failure modes.
                </p>
                <CheckList items={STACK} />
              </div>
            </div>

            <h3 style={{ marginTop: 'clamp(36px,5vw,56px)' }}>Where the underlying standards come from.</h3>
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
            <h2 style={{ marginTop: '10px' }}>Where a mid-market team gets the first win.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              Mid-market businesses have high operational volume. Start with a narrow, checkable workflow. Measure performance against verified outcomes before expanding.
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
            <h2 style={{ marginTop: '10px' }}>Custom AI agent development compared with the alternatives.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '70ch' }}>
              Custom development is not always necessary. Here is an objective comparison. Review common automation routes.
            </p>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead>
                  <tr><th>Route.</th><th>Best for.</th><th>Where it breaks.</th><th>Our read.</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="name">Built-in vendor AI.</td>
                    <td>Deflecting basic queries inside one application.</td>
                    <td>Cannot query systems outside vendor walled gardens.</td>
                    <td>Try it first. If it covers your job, you are done.</td>
                  </tr>
                  <tr>
                    <td className="name">No-code builders.</td>
                    <td>Moving data between applications on fixed paths.</td>
                    <td>Fails when dynamic decisions, tool limits, or audit logs are required.</td>
                    <td>Useful for basic glue. Not built for autonomous decisions.</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Custom agent build.</td>
                    <td>Multi-system workflows requiring company-specific rules.</td>
                    <td>Requires business ownership, API sandbox access, and historical test data.</td>
                    <td>Delivers durable efficiency gains for mid-market operations.</td>
                  </tr>
                  <tr>
                    <td className="name">In-house build.</td>
                    <td>Teams with experienced engineers and existing evaluation pipelines.</td>
                    <td>Integration complexity and evaluation harnesses exceed initial estimates.</td>
                    <td>Viable long-term. Slow when starting from scratch.</td>
                  </tr>
                  <tr>
                    <td className="name">Large systems integrator.</td>
                    <td>Multi-year corporate enterprise transformation programs.</td>
                    <td>Discovery phases often take longer than a full custom build.</td>
                    <td>High overhead for businesses with 50 to 500 employees.</td>
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
            <h2 style={{ marginTop: '10px' }}>How we build it.</h2>
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
                <h2 style={{ marginTop: '10px' }}>What we will not automate.</h2>
                <p className="pp-lead" style={{ marginTop: '14px' }}>
                  Declining unsuitable workflows protects engineering investments. These are processes we decline or redesign. We avoid poor automation candidates.
                </p>
                <CheckList items={NOT_AUTOMATED} />
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: CARD_SHADOW }}>
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
                <h2 style={{ marginTop: 0 }}>Not sure which workflow is the right first one?.</h2>
                <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '58ch' }}>
                  Selecting the right initial workflow determines project success. Share your operational pain points and connected systems. We provide a clear feasibility review.
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
            <h2 style={{ marginTop: '10px' }}>Agent builds by job.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              Each build focuses on a specific operational role. Engagements start with one workflow and reuse the core integration layer.
            </p>
            <ul className="pp-bento n8" style={{ marginTop: '32px' }}>
              {[
                { t: 'Customer support agent.', d: 'Resolves routine help desk tickets. Triages complex edge cases with summaries.', href: '/services' + '/ai-agent-development/ai-customer-support' },
                { t: 'Sales agent.', d: 'Enriches and qualifies inbound leads. Logs qualification reasoning in CRM records.', href: '/services' + '/ai-agent-development/ai-sales-agent' },
                { t: 'Workflow automation agent.', d: 'Executes back-office tasks across ERP, CRM, and messaging tools.', href: '/services' + '/ai-agent-development/ai-workflow-automation' },
                { t: 'Scheduling agent.', d: 'Books and confirms appointments against live calendar capacity rules.', href: '/services' + '/ai-agent-development/ai-scheduling-agent' },
                { t: 'Voice agent.', d: 'Answers phone calls via Twilio. Collects details and routes callers.', href: '/services' + '/ai-agent-development/ai-voice-agent' },
                { t: 'AI chatbot.', d: 'Answers questions using verified documentation. Escalates edge cases to staff.', href: '/services' + '/ai-agent-development/ai-chatbot' },
                { t: 'Marketing agent.', d: 'Drafts and schedules campaign assets. Human staff approve published materials.', href: '/services' + '/ai-agent-development/ai-marketing-agent' },
                { t: 'AI SEO and answer engines.', d: 'Optimizes content for citations in ChatGPT, Perplexity, and AI Overviews.', href: '/services' + '/ai-seo' },
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
            <h2 style={{ marginTop: '10px' }}>Agent builds for manufacturers and distributors.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              These agents integrate with plant floor and procurement systems. The integration standards are consistent, while operational rules match industry requirements.
            </p>
            <ul className="pp-bento" style={{ marginTop: '32px' }}>
              {[
                { t: 'RFQ and bidding agent.', d: 'Extracts quote line items. Matches catalog parts. Drafts quotes for human sign-off.', href: '/services' + '/ai-agent-development/rfq-bidding-agent' },
                { t: 'Manufacturing operations agent.', d: 'Answers shift handover and work-order questions from ERP logs safely.', href: '/services' + '/ai-agent-development/manufacturing-operations-agent' },
                { t: 'Procurement and supply chain agent.', d: 'Parses supplier acknowledgements. Reconciles dates against ERP records. Flags delays.', href: '/services' + '/ai-agent-development/procurement-supply-chain-agent' },
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

        {/* Vertical AI-agent builds */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// by industry'}</p>
            <h2 style={{ marginTop: '10px' }}>Agent builds by industry.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              Dedicated engineering for vertical software stacks. Systems integrate with real industry systems of record.
            </p>
            <ul className="pp-bento" style={{ marginTop: '32px' }}>
              {[
                { t: 'Legal AI agents.', d: 'Conflict checks and matter intake synced with Clio and MyCase.', href: '/services' + '/legal-ai-agents' },
                { t: 'Automotive AI voice agents.', d: 'VIN decoding and service booking synced with CDK and Tekion.', href: '/services' + '/automotive-ai-voice-agents' },
                { t: 'Chemical & pharma AI agents.', d: 'Batch record review and SDS authoring synced with LabWare and SAP QM.', href: '/services' + '/chemical-pharmaceutical-ai-agents' },
                { t: 'Agriculture equipment AI agents.', d: 'Parts lookup and fault triage synced with John Deere Operations Center.', href: '/services' + '/agriculture-equipment-ai-agents' },
                { t: 'Manufacturing AI agents.', d: 'RFQ quoting and shop floor scheduling synced with ERP systems.', href: '/services' + '/manufacturing-ai-agents' },
                { t: 'Healthcare AI agents.', d: 'HIPAA-compliant intake and appointment scheduling synced with Epic and Cerner.', href: '/services' + '/healthcare-ai-agents' },
                { t: 'Contractor AI receptionist.', d: 'Emergency dispatch and scheduling synced with ServiceTitan and Jobber.', href: '/services' + '/contractor-ai-receptionist' },
                { t: 'Restaurant AI voice agents.', d: 'Phone orders injected directly into Toast, Square, and Clover.', href: '/services' + '/restaurant-ai-voice-agents' },
                { t: 'AI SDR development.', d: 'Outbound sequences and lead qualification synced with HubSpot and Salesforce.', href: '/services' + '/ai-sdr-development' },
                { t: 'AI customer support agents.', d: 'Order inquiries and refund processing synced with Zendesk and Gorgias.', href: '/services' + '/ai-customer-support-agents' },
                { t: 'Real estate AI agents.', d: 'Lead qualification and showings synced with Follow Up Boss and kvCORE.', href: '/services' + '/ai-agents-for-real-estate' },
                { t: 'Healthcare administrative AI agents.', d: 'Insurance verification and intake workflows under HIPAA BAA agreements.', href: '/services' + '/ai-agents-for-healthcare' },
                { t: 'AI integration services.', d: 'Connect LLMs directly to CRM, ERP, and internal databases securely.', href: '/services' + '/ai-integration-services' },
                { t: 'Ecommerce CRO agency.', d: 'Checkout friction and cart abandonment optimization on Shopify Plus.', href: '/services' + '/ecommerce-cro-agency' },
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
            <p className="pp-mlabel">{'// agentic commerce & retail ops.'}</p>
            <h2 style={{ marginTop: '10px' }}>AI agents for modern e-commerce and wholesale operations.</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '70ch' }}>
              We build agents for Shopify Plus brands. We support B2B wholesale distributors. Agents resolve customer tickets. They allocate warehouse inventory. They streamline wholesale order processing.
            </p>
            <CheckList
              items={[
                'Shopify Admin API integration executes instant return approvals. It applies address corrections without human delay.',
                'B2B wholesale extraction parses PDF purchase orders. It validates pricing tiers against NetSuite masters.',
                'Carrier tracking monitors shipment updates. It routes shipping exceptions across FedEx, UPS, and ShipStation.',
                'Customer support triage resolves inquiries in Gorgias and Zendesk. Actions stay under strict financial refund caps.',
                'Omnichannel connectors sync inventory. Stock balances update across Amazon Seller Central, Walmart, and Shopify stores.',
                'Conversational commerce agents assist shoppers. Tools enable dynamic product discovery and instant cart staging.',
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
          eyebrow="// AI AGENT DEVELOPMENT FAQ."
          headline="Questions operations leaders ask before they start."
          lead="Common scoping questions answered plainly. Learn about integration limits, evaluation suites, and software ownership."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* Final CTA */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="GET STARTED"
            headline="Scope your first agent."
            sub="Share your highest-volume queue and connected systems. We provide a clear feasibility review and a fixed-milestone proposal before kickoff."
            primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
            secondaryCta={{ label: 'See our AI SEO work', href: '/services' + '/ai-seo' }}
            objectionHandler="Fixed proposal. You own the code. Every agent ships with limits, escalation and an audit log."
          />
        </div>

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
