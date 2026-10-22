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
const PAGE_MODIFIED = '2026-10-22';

/* Official sources, all checked 22 Oct 2026. Every vendor fact on this page links to one of these. */
const SRC = {
  n8nPricing: 'https://n8n.io/pricing/',
  n8nLangchain: 'https://docs.n8n.io/advanced-ai/langchain/overview/',
  n8nCode: 'https://docs.n8n.io/code/code-node/',
  n8nWait: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.wait/',
  n8nHosting: 'https://docs.n8n.io/hosting/',
  n8nLicense: 'https://github.com/n8n-io/n8n/blob/master/LICENSE.md',
  lcGithub: 'https://github.com/langchain-ai/langchain',
  lgGithub: 'https://github.com/langchain-ai/langgraph',
  lgDocs: 'https://docs.langchain.com/oss/python/langgraph/overview',
  lsPricing: 'https://www.langchain.com/pricing',
  crewGithub: 'https://github.com/crewAIInc/crewAI',
  crewPricing: 'https://crewai.com/pricing',
};

const linkCls = 'text-[#F05A28] underline';

export const metadata: Metadata = {
  title: 'LangChain vs n8n vs CrewAI for AI Agents | FactoryJet',
  description:
    'LangChain vs n8n vs CrewAI: what each does, how n8n uses LangChain, licences, list prices and when to combine them. Sourced from official docs, Oct 2026.',
  keywords: [
    'langchain n8n',
    'langchain vs n8n',
    'n8n vs langchain',
    'langchain langgraph and langsmith',
    'n8n vs crewai',
    'crewai vs langchain',
    'n8n langchain integration',
  ],
  openGraph: {
    type: 'article',
    siteName: 'FactoryJet',
    title: 'LangChain vs n8n vs CrewAI for AI Agents | FactoryJet',
    description:
      'LangChain vs n8n vs CrewAI: what each does, how n8n uses LangChain, licences, list prices and when to combine them. Sourced from official docs, Oct 2026.',
    url: 'https://factoryjet.com/comparisons/n8n-vs-langchain-vs-crewai-enterprise',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'LangChain vs n8n vs CrewAI comparison',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LangChain vs n8n vs CrewAI for AI Agents | FactoryJet',
    description:
      'What each tool does, how n8n uses LangChain, licences, list prices and when to combine them. Sourced from official docs, Oct 2026.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/comparisons/n8n-vs-langchain-vs-crewai-enterprise',
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
   FAQ DATA (FAQPage JSON-LD below is generated from this same array)
───────────────────────────────────────────────────────────────────────────── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'architecture', label: 'Framework Architecture & State' },
  { key: 'integrations', label: 'ERP & System Integrations' },
  { key: 'security', label: 'Enterprise Security & VPC' },
  { key: 'plans', label: 'Licences & List Prices' },
  { key: 'verdict', label: 'Architectural Selection Verdict' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'architecture',
    question: 'Does n8n use LangChain?',
    answer:
      "Yes. n8n's own documentation says its AI nodes use LangChain's JavaScript framework. The AI Agent node, the chain nodes, the vector store nodes and the memory sub-nodes are LangChain ideas packaged as visual cluster nodes. When n8n has no node for something, the LangChain Code node lets you write LangChain JavaScript inside the workflow. So a LangChain n8n setup is normal: n8n gives you the canvas and app connectors, and LangChain does the model work underneath.",
  },
  {
    category: 'architecture',
    question: 'LangChain vs n8n: what is the real difference?',
    answer:
      'n8n is a workflow tool. You connect apps on a canvas, trigger runs from a schedule or webhook, and add AI steps where needed. LangChain is a code library in Python or JavaScript that developers import into their own software. Pick n8n when the job is moving data between apps with one or two AI decisions in the middle. Pick LangChain with LangGraph when the agent is the product and you need tests, code review and custom logic.',
  },
  {
    category: 'architecture',
    question: 'What is the difference between LangChain, LangGraph and LangSmith?',
    answer:
      'They are three products from the same company. LangChain is the framework for building agents and LLM apps from ready-made parts and integrations. LangGraph is the low-level runtime for long-running agents that keep state, survive failures and pause for a human. LangSmith is the paid platform for tracing, testing and deploying those agents. LangChain and LangGraph are free under the MIT licence; LangSmith charges per seat and per trace above a free allowance.',
  },
  {
    category: 'architecture',
    question: 'When should a team use LangGraph instead of plain LangChain?',
    answer:
      'Use LangGraph when the agent has to loop, branch, remember, or wait. Plain LangChain is fine for a straight line of steps, such as fetch a document, summarise it, return the answer. LangGraph adds persistence, so an agent can stop for days waiting for approval and resume where it left off, plus interrupts for human review. A refund dispute or an order change with a manager sign-off are typical LangGraph jobs.',
  },
  {
    category: 'architecture',
    question: 'How does state persistence work during long-running agent runs?',
    answer:
      'LangGraph saves graph state through its persistence layer, so a run can fail or pause and pick up from the same step later. In n8n, the Wait node offloads the execution data to the database while paused and reloads it when the resume condition, such as a webhook call, is met. In CrewAI, Flows give event-driven control around Crews; we add an external store when a run must survive a restart.',
  },
  {
    category: 'architecture',
    question: 'Which of the three makes the fewest model calls per task?',
    answer:
      'Usually n8n, because it only calls a model when the workflow reaches an AI node; every other step is plain code or an API call. LangGraph sits close behind, since you decide which graph nodes use a model and which are hand-coded. CrewAI Crews let several agents talk to each other, which tends to mean more calls and slower runs for the same task. Measure it on your own workflow before you commit.',
  },
  {
    category: 'architecture',
    question: 'n8n vs CrewAI: which is better for building AI agents?',
    answer:
      'n8n is better when the agent mostly calls business apps, such as reading a HubSpot deal, checking stock in a spreadsheet and posting to Slack. Its AI Agent node handles tool calls and the rest of the canvas handles the apps. CrewAI is better when several agents with different roles need to research, draft and review together, written in Python. Many teams run a CrewAI crew behind an n8n webhook to get both.',
  },
  {
    category: 'architecture',
    question: 'Can n8n run Python code?',
    answer:
      'Yes. The n8n Code node runs JavaScript or Python as a step in a workflow. The old Python mode, built on Pyodide (Python compiled to WebAssembly), was removed in n8n 2.0, and n8n now documents a native Python option. On n8n cloud you cannot run bash scripts or install custom nodes; the pricing page lists both as self-hosted only. For heavy Python agent logic, a separate LangGraph or CrewAI service is usually cleaner.',
  },
  {
    category: 'integrations',
    question: 'Which framework is best for connecting an ERP like NetSuite or SAP Business One?',
    answer:
      'Start with n8n when the ERP has a standard REST API and the job is moving records, because the visual run log makes failures easy to trace. Move to code in LangGraph when you hit SOAP endpoints, odd XML, strict field validation, or logic that needs unit tests. Our ERP integration work covers Odoo, NetSuite, SAP Business One and ERPNext.',
  },
  {
    category: 'integrations',
    question: 'What is Model Context Protocol (MCP) and do these tools support it?',
    answer:
      'MCP is an open standard for exposing tools and data to AI clients in one format, so a connector built once can serve many agents. All three now touch it. n8n lists "Agents, MCP and AI nodes" on every cloud plan. CrewAI lists "Export as MCP server" on its free and Enterprise plans. LangChain and LangGraph agents can call MCP servers from code. Build the MCP server around your system of record, not around one framework.',
  },
  {
    category: 'integrations',
    question: 'Can n8n and LangGraph be combined in one system?',
    answer:
      'Yes, and it is the pattern we recommend most often. n8n receives webhooks, queues work, cleans the data and writes results back to apps. It hands the reasoning step to a LangGraph service over a private HTTP endpoint and waits for the answer. Each tool does what it is good at: n8n for connectors and visible run logs, LangGraph for state, retries and human approval.',
  },
  {
    category: 'integrations',
    question: 'How do you add human approval steps in each tool?',
    answer:
      'In LangGraph, the graph hits an interrupt, saves state and waits until your app or a Slack button sends the decision. In n8n, the Wait node pauses the run and resumes on a webhook call, so an approve link in an email works. In CrewAI, you put the approval step in a Flow around the Crew. Whichever you use, log who approved what and when.',
  },
  {
    category: 'integrations',
    question: 'Does n8n work with LangSmith tracing?',
    answer:
      'Yes, on self-hosted n8n. The n8n pricing page lists LangSmith tracing and OpenTelemetry tracing (preview) as available in self-hosted editions. That lets you see each model call, prompt and tool result from n8n AI nodes in the same LangSmith project as your LangGraph services. On n8n cloud you rely on n8n execution logs and insights instead.',
  },
  {
    category: 'security',
    question: 'Can all three be self-hosted inside a private VPC?',
    answer:
      "Yes. n8n self-hosts with Docker, npm or Docker Compose, and without a licence key it runs as the free Community edition. LangChain and LangGraph are MIT-licensed libraries, so they run wherever your Python or JavaScript runs, such as AWS ECS, Google Cloud Run or Azure Kubernetes. CrewAI's framework is MIT-licensed too, and CrewAI Enterprise can deploy in your own VPC or infrastructure.",
  },
  {
    category: 'security',
    question: 'How do you stop an agent from doing damage through its tools?',
    answer:
      'Limit what the tools can do, not what the prompt says. We give each tool the narrowest API scope it needs, put caps on amounts and record counts, point read tasks at read-only replicas, and require a human approval step for anything that moves money or deletes data. Then a prompt injection can only reach actions you already decided were safe.',
  },
  {
    category: 'security',
    question: 'How do you keep company data out of public model training?',
    answer:
      'Pick the model route before you build. Options include enterprise API terms from model vendors that exclude your data from training, a private cloud deployment of a hosted model, or an open-weights model on your own servers. n8n, LangChain and CrewAI all let you swap the model provider, so the framework choice does not lock this decision.',
  },
  {
    category: 'security',
    question: 'How do audit logs differ across the three?',
    answer:
      'n8n shows a visual execution log with the input and output of every node, and its Enterprise plan adds log streaming and 365 days of insights. LangGraph pairs with LangSmith or OpenTelemetry for step-by-step traces of every model and tool call. CrewAI Enterprise adds governance features such as SSO, RBAC and PII redaction on its platform. For compliance, ship all of it to one log store you control.',
  },
  {
    category: 'security',
    question: 'Is n8n risky to build a business on?',
    answer:
      'Check the licence first. n8n uses the Sustainable Use License, which lets you use or modify it "only for your own internal business purposes or for non-commercial or personal use". Running n8n inside your company is fine. Reselling n8n itself as a hosted product to others is not, and files marked ".ee" need an n8n Enterprise licence. LangChain, LangGraph and CrewAI are MIT, which has no such limits.',
  },
  {
    category: 'plans',
    question: 'Is n8n free?',
    answer:
      'The self-hosted Community edition is free and on GitHub. The hosted cloud plans charge by monthly workflow executions, and every plan includes unlimited users, unlimited workflows and every integration. On 22 Oct 2026 the n8n pricing page showed US visitors Starter at $20 a month billed annually for 2,500 executions and Pro at $50 a month for 10,000. European visitors see euro prices. Enterprise is priced by sales.',
  },
  {
    category: 'plans',
    question: 'Why do some teams say n8n gets expensive?',
    answer:
      'The jump comes when you need team controls. On the n8n pricing page, SSO and LDAP, multiple environments, queue mode for scaling and Git version control sit in the Business plan, which is self-hosted only and was listed at $800 a month billed annually for 40,000 executions on 22 Oct 2026. Smaller companies can apply for the Start-up Plan, which n8n says gives 50% off Business for teams under 20 employees.',
  },
  {
    category: 'plans',
    question: 'Is CrewAI open source, and what does it cost?',
    answer:
      'Yes. The CrewAI framework is open source on GitHub under the MIT licence, with about 60,000 stars when we checked on 22 Oct 2026. The hosted platform has a free Basic plan with a visual editor, GitHub integration and 50 workflow executions a month. The Enterprise plan has custom pricing and adds SSO, RBAC, PII redaction and deployment in your own VPC.',
  },
  {
    category: 'plans',
    question: 'What does LangSmith cost per seat?',
    answer:
      'On 22 Oct 2026 the LangSmith pricing page listed a Developer plan at $0 for 1 seat with up to 5,000 base traces a month, and a Plus plan at $39 per seat per month with up to 10,000 base traces and access to Deployment. Usage above the allowance is pay as you go. Enterprise is custom priced and adds self-hosted or hybrid deployment, custom SSO and a support SLA.',
  },
  {
    category: 'plans',
    question: 'Is n8n becoming obsolete now that coding agents exist?',
    answer:
      'No sign of it. The n8n Community edition repository showed 208,269 GitHub stars on the n8n pricing page on 22 Oct 2026, and n8n has shipped version 2.0, with its Code node now documenting native Python. What is changing is its role. More teams use n8n as the connector layer around code-based agents in LangGraph or CrewAI, instead of building the whole agent on the canvas.',
  },
  {
    category: 'plans',
    question: 'What are the main alternatives to LangGraph and CrewAI?',
    answer:
      "Inside the same company, LangChain's deepagents package targets long-running agents for complex tasks. Outside it, common choices are the OpenAI Agents SDK, Microsoft AutoGen and LlamaIndex agents, plus n8n or Make for visual builds. Judge each on four things: how it stores state, how it pauses for a human, how you trace runs, and what licence it uses.",
  },
  {
    category: 'verdict',
    question: 'Which framework fits customer support ticket automation?',
    answer:
      'For support inside Zendesk or Gorgias, a LangGraph agent wired to your Shopify GraphQL API and a search index over your help articles works well. It can look up the order, draft the reply, and hand off to a person when the refund is above a set amount. n8n can carry the ticket in and out of the helpdesk around it.',
  },
  {
    category: 'verdict',
    question: 'Which framework fits invoice matching and back-office reconciliation?',
    answer:
      'Use both. n8n picks up the email, pulls the PDF attachment, runs OCR (text extraction) and creates the draft record in the ERP. LangGraph then matches line items against the purchase order, flags mismatches, and routes anything over tolerance to a person for approval. The finance team reads the n8n run log; developers own the LangGraph code.',
  },
  {
    category: 'verdict',
    question: 'When is CrewAI the right choice?',
    answer:
      'CrewAI fits open-ended work where several viewpoints help: market research, competitor scans, first drafts reviewed by a separate critic agent, or scoring a proposal from a buyer, legal and finance angle. It is a weaker fit for strict, repeatable back-office steps, where a fixed n8n workflow or a LangGraph graph is easier to test.',
  },
  {
    category: 'verdict',
    question: 'How do we start an agent build with FactoryJet?',
    answer:
      'Book a 30-minute call with founder Bhavesh Barot. We review the workflow, the systems it touches and your security rules, then recommend n8n, LangGraph, CrewAI or a mix. You see a working demo on your own data before you sign. The build is a fixed price per phase, agreed in writing, and you own the code.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   SOURCED FACT TABLE (vendor facts only, each row linked, checked 22 Oct 2026)
───────────────────────────────────────────────────────────────────────────── */
const FACT_ROWS: ReadonlyArray<{
  fact: string;
  n8n: string;
  lc: string;
  crew: string;
  sources: ReadonlyArray<{ label: string; href: string }>;
}> = [
  {
    fact: 'What it is',
    n8n: 'Visual workflow automation tool; AI nodes use LangChain JS',
    lc: 'LangChain: agent framework. LangGraph: low-level runtime for stateful agents',
    crew: 'Open-source Python framework: Crews (agent teams) and Flows (event-driven control)',
    sources: [
      { label: 'n8n docs', href: SRC.n8nLangchain },
      { label: 'LangGraph docs', href: SRC.lgDocs },
      { label: 'CrewAI GitHub', href: SRC.crewGithub },
    ],
  },
  {
    fact: 'Licence',
    n8n: 'Sustainable Use License (internal business use); ".ee" files need Enterprise licence',
    lc: 'MIT (both repositories)',
    crew: 'MIT',
    sources: [
      { label: 'n8n LICENSE.md', href: SRC.n8nLicense },
      { label: 'LangChain GitHub', href: SRC.lcGithub },
      { label: 'CrewAI GitHub', href: SRC.crewGithub },
    ],
  },
  {
    fact: 'Self-hosting',
    n8n: 'Docker, npm or Docker Compose; free Community edition with no licence key',
    lc: 'Libraries run in your own app; LangSmith Enterprise offers self-hosted and hybrid',
    crew: 'Library runs anywhere; Enterprise deploys on CrewAI cloud, your VPC or your infrastructure',
    sources: [
      { label: 'n8n hosting docs', href: SRC.n8nHosting },
      { label: 'LangSmith pricing', href: SRC.lsPricing },
      { label: 'CrewAI pricing', href: SRC.crewPricing },
    ],
  },
  {
    fact: 'Free tier',
    n8n: 'Self-hosted Community edition',
    lc: 'LangSmith Developer: $0, 1 seat, up to 5k base traces a month',
    crew: 'Basic: free, 50 workflow executions a month',
    sources: [
      { label: 'n8n pricing', href: SRC.n8nPricing },
      { label: 'LangSmith pricing', href: SRC.lsPricing },
      { label: 'CrewAI pricing', href: SRC.crewPricing },
    ],
  },
  {
    fact: 'First paid plan (list price)',
    n8n: 'Starter: $20/month billed annually, 2,500 executions (US price)',
    lc: 'LangSmith Plus: $39 per seat/month, up to 10k base traces',
    crew: 'Enterprise: custom pricing',
    sources: [
      { label: 'n8n pricing', href: SRC.n8nPricing },
      { label: 'LangSmith pricing', href: SRC.lsPricing },
      { label: 'CrewAI pricing', href: SRC.crewPricing },
    ],
  },
  {
    fact: 'Pausing for a human',
    n8n: 'Wait node saves the run to the database and resumes on a webhook call',
    lc: 'LangGraph interrupts plus persistence; resumes from the same step',
    crew: 'Approval logic placed in a Flow around the Crew',
    sources: [
      { label: 'n8n Wait node', href: SRC.n8nWait },
      { label: 'LangGraph docs', href: SRC.lgDocs },
      { label: 'CrewAI GitHub', href: SRC.crewGithub },
    ],
  },
  {
    fact: 'Custom code',
    n8n: 'Code node: JavaScript or Python; bash and custom nodes on self-hosted only',
    lc: 'Python and JavaScript/TypeScript',
    crew: 'Python',
    sources: [
      { label: 'n8n Code node', href: SRC.n8nCode },
      { label: 'n8n pricing', href: SRC.n8nPricing },
      { label: 'LangChain GitHub', href: SRC.lcGithub },
    ],
  },
  {
    fact: 'GitHub stars on 22 Oct 2026',
    n8n: '208,269 (as shown on the n8n pricing page)',
    lc: 'LangChain 148k; LangGraph 43.7k',
    crew: '60k',
    sources: [
      { label: 'n8n pricing', href: SRC.n8nPricing },
      { label: 'LangChain', href: SRC.lcGithub },
      { label: 'LangGraph', href: SRC.lgGithub },
      { label: 'CrewAI', href: SRC.crewGithub },
    ],
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

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'LangChain vs n8n vs CrewAI: Which to Use for AI Agents (2026)',
  description:
    'How n8n, LangChain with LangGraph, and CrewAI differ on architecture, state, human approval, licences and list prices, sourced from official documentation.',
  datePublished: '2026-09-01T00:00:00Z',
  dateModified: `${PAGE_MODIFIED}T00:00:00Z`,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
    jobTitle: 'Founder, FactoryJet',
  },
  publisher: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://factoryjet.com/comparisons/n8n-vs-langchain-vs-crewai-enterprise',
  },
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Comparisons', item: 'https://factoryjet.com/best-ecommerce-platforms' },
    { '@type': 'ListItem', position: 3, name: 'n8n vs LangChain vs CrewAI', item: 'https://factoryjet.com/comparisons/n8n-vs-langchain-vs-crewai-enterprise' },
  ],
};

export default function N8nVsLangchainVsCrewAiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader locale="us" />

      <main className="pp-page">
        {/* HERO SECTION */}
        <section className="pp-hero">
          <div className="pp-hero-grid">
            <div>
              <p className="pp-eyebrow">// AI AGENT FRAMEWORK COMPARISON</p>
              <h1 className="pp-h1">
                n8n vs LangChain vs CrewAI <span className="pp-grad">Enterprise Guide</span>
              </h1>
              <p className="pp-lead">
                LangChain and n8n do different jobs, and n8n&apos;s AI nodes are built on LangChain&apos;s JavaScript
                framework. n8n is a visual tool for connecting apps with AI steps. LangChain, with LangGraph, is a code
                library for agents that keep state and pause for approval. CrewAI is a Python framework for teams of
                role-based agents. Most production systems pair n8n for connectors with LangGraph for reasoning.
              </p>
              <HeroInlineForm
                source="comparisons_n8n_vs_langchain_vs_crewai_enterprise"
                region="us"
                submitLabel="Request Architecture Consultation"
              />
            </div>

            <div className="pp-hero-card">
              <div className="flex items-center justify-between border-b border-[#E7DED6] pb-3 mb-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F05A28]">
                  Architectural Summary
                </span>
                <span className="text-xs text-[#8C827A]">Updated 22 October 2026</span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-1 border-b border-[#F5EFEA]">
                  <span className="text-[#46403B]">App-to-app workflows:</span>
                  <span className="font-semibold text-[#14110F]">n8n (visual, low-code)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F5EFEA]">
                  <span className="text-[#46403B]">Stateful agents with approvals:</span>
                  <span className="font-semibold text-[#14110F]">LangGraph (code-first)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F5EFEA]">
                  <span className="text-[#46403B]">Role-based agent teams:</span>
                  <span className="font-semibold text-[#14110F]">CrewAI (Python)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#46403B]">Pattern we use most:</span>
                  <span className="font-semibold text-[#F05A28]">n8n + LangGraph hybrid</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ANSWER-FIRST DEFINITION SECTION */}
        <section className="pp-section pp-tint">
          <div className="pp-container">
            <div className="pp-card p-6 md:p-8 bg-white border-l-4 border-[#F05A28]">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                The short verdict
              </span>
              <p className="text-base md:text-lg text-[#14110F] leading-relaxed font-medium">
                Use n8n when the work is moving data between business apps with a few AI decisions in the middle. Use
                LangGraph when the agent must remember, branch, retry and wait for a person. Use CrewAI for open-ended
                research and drafting where several agent roles help. For most companies the answer is n8n as the
                integration layer and LangGraph as the reasoning core.
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-base text-[#46403B]">
                <li>
                  <strong>n8n:</strong> visual canvas, app connectors, run logs anyone can read. Licence limits
                  reselling it as a service.
                </li>
                <li>
                  <strong>LangChain + LangGraph:</strong> MIT-licensed code, built for tests, version control and
                  human-in-the-loop steps. Needs developers.
                </li>
                <li>
                  <strong>CrewAI:</strong> MIT-licensed Python, quick to model agent roles. More model calls per task
                  than a fixed graph.
                </li>
                <li>
                  <strong>LangSmith:</strong> the paid tracing and evaluation layer for LangChain apps, also usable
                  from self-hosted n8n.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* VERIFIED FACTS */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="pp-h2 text-center">Three Facts That Change the Comparison</h2>
              <p className="text-base text-[#46403B] mt-3">
                Each one is taken from the vendor&apos;s own documentation, checked 22 Oct 2026.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="pp-card p-6 bg-white">
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">LangChain JS</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Runs inside n8n&apos;s AI nodes</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  n8n&apos;s AI Agent, chain, memory and vector store nodes use LangChain&apos;s JavaScript framework.
                  The LangChain Code node covers anything without a dedicated node.
                </p>
                <a
                  href={SRC.n8nLangchain}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F05A28] font-mono hover:underline"
                >
                  Source: n8n Docs, LangChain in n8n &rarr;
                </a>
              </div>

              <div className="pp-card p-6 bg-white">
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">MIT</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">LangChain, LangGraph and CrewAI licence</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  All three code frameworks use the MIT licence, so you can run, change and ship them inside paid
                  products without a commercial licence.
                </p>
                <a
                  href={SRC.lgGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F05A28] font-mono hover:underline"
                >
                  Source: LangGraph on GitHub &rarr;
                </a>
              </div>

              <div className="pp-card p-6 bg-white">
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">Sustainable Use</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">n8n&apos;s licence has limits</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  n8n may be used or modified &ldquo;only for your own internal business purposes or for
                  non-commercial or personal use&rdquo;. Reselling n8n itself needs a separate agreement.
                </p>
                <a
                  href={SRC.n8nLicense}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F05A28] font-mono hover:underline"
                >
                  Source: n8n LICENSE.md &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* EVALUATION MATRIX + SOURCED FACT TABLE */}
        <section className="pp-section pp-tint">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="pp-h2 text-center">Five-Dimensional Evaluation Matrix</h2>
              <p className="text-base text-[#46403B] mt-3">
                How the three compare on state, tools, human approval, model calls and self-hosting, plus the hybrid
                pattern we build most often.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Evaluation Criteria</th>
                    <th>n8n + LangGraph Hybrid</th>
                    <th>n8n (Standalone Low-Code)</th>
                    <th>LangGraph / LangChain (Python/TS)</th>
                    <th>CrewAI (Python)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tr-me">
                    <td className="font-bold">1. State &amp; Memory</td>
                    <td className="font-semibold text-[#F05A28]">LangGraph persistence + n8n run history</td>
                    <td>Execution data saved per run; chain nodes have no memory, agents do</td>
                    <td>Graph state with persistence and resume</td>
                    <td>Crews for collaboration, Flows for controlled state</td>
                  </tr>
                  <tr>
                    <td className="font-bold">2. Tool Calling &amp; ERP Depth</td>
                    <td className="font-semibold text-[#14110F]">MCP servers + n8n app nodes</td>
                    <td>Pre-built app nodes; every integration on every plan</td>
                    <td>Typed Python/TS tools you write and test</td>
                    <td>Agent tools; can export a crew as an MCP server</td>
                  </tr>
                  <tr className="tr-me">
                    <td className="font-bold">3. Human-in-the-Loop</td>
                    <td className="font-semibold text-[#F05A28]">Slack or email approval, resumed by webhook</td>
                    <td>Wait node, resumes on webhook call</td>
                    <td>Native interrupt and resume</td>
                    <td>Approval step inside a Flow</td>
                  </tr>
                  <tr>
                    <td className="font-bold">4. Model Calls &amp; Speed</td>
                    <td className="font-semibold text-[#14110F]">Model only on decision steps</td>
                    <td>Model only at AI nodes</td>
                    <td>You choose which nodes call a model</td>
                    <td>More calls, agents talk to each other</td>
                  </tr>
                  <tr className="tr-me">
                    <td className="font-bold">5. Private Cloud Self-Hosting</td>
                    <td className="font-semibold text-[#F05A28]">Docker or Kubernetes in your AWS, GCP or Azure</td>
                    <td>Docker, npm or Docker Compose</td>
                    <td>Your own service, any cloud</td>
                    <td>Open-source package; Enterprise in your VPC</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center max-w-3xl mx-auto mt-14 mb-8">
              <h3 className="text-2xl font-bold text-[#14110F]">Licences, Plans and Specs From the Vendors</h3>
              <p className="text-base text-[#46403B] mt-3">
                List prices are what each vendor publishes for its own plans. They are not build or running costs.
                Every row links to the official page, checked 22 Oct 2026.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Fact</th>
                    <th>n8n</th>
                    <th>LangChain / LangGraph / LangSmith</th>
                    <th>CrewAI</th>
                    <th>Source (checked 22 Oct 2026)</th>
                  </tr>
                </thead>
                <tbody>
                  {FACT_ROWS.map((r, i) => (
                    <tr key={r.fact} className={i % 2 === 0 ? 'tr-me' : undefined}>
                      <td className="font-bold">{r.fact}</td>
                      <td>{r.n8n}</td>
                      <td>{r.lc}</td>
                      <td>{r.crew}</td>
                      <td>
                        {r.sources.map((s, j) => (
                          <span key={s.href + s.label}>
                            {j > 0 ? ', ' : ''}
                            <a href={s.href} target="_blank" rel="noopener noreferrer" className={linkCls}>
                              {s.label}
                            </a>
                          </span>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* DEEP DIVE SECTIONS */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="max-w-4xl mx-auto space-y-12">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  DEEP DIVE // n8n
                </span>
                <h2 className="text-2xl font-bold text-[#14110F] mb-4">When to Choose n8n for Enterprise Operations</h2>
                <p className="text-base text-[#46403B] leading-relaxed mb-4">
                  n8n is the right tool when the job is joining cloud apps (HubSpot, Slack, Google Sheets, QuickBooks)
                  with predictable data steps. The visual editor lets operations and IT staff read a workflow without
                  reading code, and n8n cloud plans charge by workflow execution, not by user. Our{' '}
                  <Link href="/n8n-automation" className={linkCls}>n8n automation service</Link> builds and hands over
                  these workflows.
                </p>
                <p className="text-base text-[#46403B] leading-relaxed mb-2"><strong>Best for:</strong></p>
                <ul className="list-disc pl-5 space-y-2 text-base text-[#46403B] mb-4">
                  <li>Lead routing from forms into a CRM, with an AI step that scores or tags the lead.</li>
                  <li>Order, invoice and ticket handoffs between a store, an ERP and a helpdesk.</li>
                  <li>Scheduled reports that pull from several apps and post a summary to Slack or email.</li>
                  <li>Teams that want to see every run, input and output on screen.</li>
                </ul>
                <p className="text-base text-[#46403B] leading-relaxed mb-2"><strong>Watch out for:</strong></p>
                <ul className="list-disc pl-5 space-y-2 text-base text-[#46403B]">
                  <li>Canvases get hard to follow once an agent loops, retries a different tool, or keeps a long conversation.</li>
                  <li>n8n chain nodes do not support memory; you need the AI Agent node for that.</li>
                  <li>SSO, Git version control and multiple environments sit in the Business plan or above.</li>
                  <li>The Sustainable Use License blocks reselling n8n itself as a hosted service.</li>
                </ul>
              </div>

              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  DEEP DIVE // LANGGRAPH &amp; LANGCHAIN
                </span>
                <h2 className="text-2xl font-bold text-[#14110F] mb-4">When to Choose LangGraph for Code-First Reasoning</h2>
                <p className="text-base text-[#46403B] leading-relaxed mb-4">
                  LangGraph is built for agents that have to behave the same way every time. You write the agent as a
                  graph in Python or TypeScript: read state, call the model, call a tool, check the output, move to the
                  next step. LangChain&apos;s docs describe it as a low-level runtime that mixes hand-coded steps with
                  model-driven steps in one graph. Agents of this kind are what our{' '}
                  <Link href="/services/ai-agent-development" className={linkCls}>AI agent development</Link> service builds.
                </p>
                <p className="text-base text-[#46403B] leading-relaxed mb-2"><strong>What you get:</strong></p>
                <ul className="list-disc pl-5 space-y-2 text-base text-[#46403B] mb-4">
                  <li>Durable execution: a run that fails can resume from the last saved step.</li>
                  <li>Interrupts that pause for human review and continue after approval.</li>
                  <li>Short-term working memory and long-term memory across sessions.</li>
                  <li>Normal software habits: code review, unit tests, CI and versioned releases.</li>
                </ul>
                <p className="text-base text-[#46403B] leading-relaxed mb-2"><strong>Watch out for:</strong></p>
                <ul className="list-disc pl-5 space-y-2 text-base text-[#46403B]">
                  <li>You need Python or TypeScript developers to build and change it.</li>
                  <li>Tracing is a separate product (LangSmith) or your own OpenTelemetry setup.</li>
                  <li>Business users cannot edit the flow on a canvas the way they can in n8n.</li>
                </ul>
              </div>

              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  DEEP DIVE // CREWAI
                </span>
                <h2 className="text-2xl font-bold text-[#14110F] mb-4">When to Choose CrewAI for Multi-Agent Teams</h2>
                <p className="text-base text-[#46403B] leading-relaxed mb-4">
                  CrewAI models a workflow as a team. You define agent roles (for example Senior Researcher, Copywriter,
                  Compliance Reviewer), give each a goal and a backstory, and run tasks in sequence or under a manager
                  agent. Its GitHub README splits the framework into Crews, for agents that work together, and Flows,
                  for precise event-driven control.
                </p>
                <p className="text-base text-[#46403B] leading-relaxed mb-2"><strong>Best fit:</strong></p>
                <ul className="list-disc pl-5 space-y-2 text-base text-[#46403B] mb-4">
                  <li>Research synthesis and competitor scans where several viewpoints add value.</li>
                  <li>Drafting with a separate critic or compliance agent that reviews the draft.</li>
                  <li>Proposal scoring from buyer, legal and finance angles.</li>
                </ul>
                <p className="text-base text-[#46403B] leading-relaxed mb-2"><strong>Watch out for:</strong></p>
                <ul className="list-disc pl-5 space-y-2 text-base text-[#46403B]">
                  <li>Agents talking to each other means more model calls and slower runs for the same task.</li>
                  <li>Repeatable back-office steps are easier to test in a fixed graph or n8n workflow.</li>
                  <li>Governance features such as SSO, RBAC and PII redaction are on the Enterprise plan.</li>
                </ul>
              </div>

              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  DECISION STEPS // HOW TO CHOOSE
                </span>
                <h2 className="text-2xl font-bold text-[#14110F] mb-4">How to Choose Between n8n, LangChain and CrewAI</h2>
                <p className="text-base text-[#46403B] leading-relaxed mb-4">
                  We run every new agent project through the same five questions before picking a stack. The deeper
                  version of this method is in our guide to{' '}
                  <Link href="/blog/agentic-ai-architecture-mid-sized-companies-2026" className={linkCls}>
                    agentic AI architecture for mid-sized companies
                  </Link>
                  .
                </p>
                <ol className="list-decimal pl-5 space-y-3 text-base text-[#46403B]">
                  <li>
                    <strong>List the systems the agent touches.</strong> If most steps are app-to-app moves, start in
                    n8n. If the hard part is the decision, start in LangGraph.
                  </li>
                  <li>
                    <strong>Decide who maintains it.</strong> Operations staff can own an n8n canvas. A LangGraph or
                    CrewAI service needs a developer on call.
                  </li>
                  <li>
                    <strong>Mark every step that needs a human.</strong> Approvals that last hours or days favour
                    LangGraph persistence or the n8n Wait node.
                  </li>
                  <li>
                    <strong>Check the licence against your plan.</strong> Selling the automation as your own hosted
                    product rules out plain n8n under the Sustainable Use License.
                  </li>
                  <li>
                    <strong>Build a demo on real data.</strong> Run a few dozen real cases through a thin version and read
                    the traces before you commit to a full build.
                  </li>
                </ol>
                <p className="text-base text-[#46403B] leading-relaxed mt-4">
                  For a worked example of the hybrid pattern with an ERP, read{' '}
                  <Link href="/blog/multi-agent-workflows-langgraph-n8n-enterprise-erp-2026" className={linkCls}>
                    multi-agent workflows with LangGraph, n8n and an ERP
                  </Link>
                  . If you are still choosing a visual tool, see{' '}
                  <Link href="/blog/n8n-vs-zapier-vs-make-ai-workflow-automation-2026" className={linkCls}>
                    n8n vs Zapier vs Make
                  </Link>
                  . When the agent sits on top of order, stock or invoice data, our{' '}
                  <Link href="/services/ecommerce-erp-integration" className={linkCls}>ERP integration</Link> and{' '}
                  <Link href="/services/ai-automation" className={linkCls}>AI automation</Link> teams scope the
                  connectors first.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQS SECTION */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Questions engineering leaders ask about agent frameworks"
          lead="LangChain n8n integration, LangGraph and LangSmith, licences, list prices and when to pick each."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* FINAL CTA */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="pp-card p-8 md:p-12 bg-[#FFF8F5] border border-[#F05A28]/20 text-center max-w-4xl mx-auto">
              <p className="pp-eyebrow">// ARCHITECT YOUR ENTERPRISE AGENT STACK</p>
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#14110F] mb-4">
                Schedule a 30-Minute Technical Architecture Review
              </h2>
              <p className="text-base text-[#46403B] max-w-2xl mx-auto mb-8">
                Speak directly with founder Bhavesh Barot. We review your target workflow, security rules and data
                systems, then show you a working demo on your own data before you sign anything.
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
                  label="Request Technical Blueprint"
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
