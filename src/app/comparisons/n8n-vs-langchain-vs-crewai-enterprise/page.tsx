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
  title: 'n8n vs LangChain vs CrewAI Enterprise Guide | FactoryJet',
  description:
    'Compare n8n, LangChain, and CrewAI for multi-agent workflows. Evaluate state management, ERP connectors, latency, and enterprise VPC security. Read more.',
  keywords: [
    'n8n vs langchain',
    'crewai vs langchain',
    'enterprise ai agent architecture',
    'langgraph vs n8n enterprise',
    'crewai vs langgraph',
    'ai workflow automation enterprise',
    'multi agent orchestration frameworks',
  ],
  openGraph: {
    type: 'article',
    siteName: 'FactoryJet',
    title: 'n8n vs LangChain vs CrewAI for Enterprise AI Agents | FactoryJet',
    description:
      'Detailed architectural breakdown for CTOs: evaluate low-code orchestration (n8n), stateful multi-agent graphs (LangGraph/LangChain), and autonomous agent swarms (CrewAI).',
    url: 'https://factoryjet.com/comparisons/n8n-vs-langchain-vs-crewai-enterprise',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'n8n vs LangChain vs CrewAI Enterprise Comparison',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'n8n vs LangChain vs CrewAI: Enterprise Multi-Agent Guide | FactoryJet',
    description:
      'Compare enterprise state persistence, ERP tool calling, latency overhead, and private cloud deployment across n8n, LangChain/LangGraph, and CrewAI.',
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
   FAQ DATA
───────────────────────────────────────────────────────────────────────────── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'architecture', label: 'Framework Architecture & State' },
  { key: 'integrations', label: 'ERP & System Integrations' },
  { key: 'security', label: 'Enterprise Security & VPC' },
  { key: 'verdict', label: 'Architectural Selection Verdict' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'architecture',
    question: 'What is the fundamental architectural difference between n8n, LangChain/LangGraph, and CrewAI?',
    answer:
      'n8n is a node-based workflow orchestration engine optimized for deterministic data transformation and pre-built API connectivity. LangChain and LangGraph provide code-first cyclical graph state machines built for dynamic multi-step reasoning, branching, and memory persistence. CrewAI provides high-level abstractions for multi-agent role play where distinct agents collaborate through simulated conversations.',
  },
  {
    category: 'architecture',
    question: 'When should an enterprise use LangGraph instead of standard LangChain?',
    answer:
      'Standard LangChain operates primarily in linear execution chains (DAGs). LangGraph introduces cyclical computation, explicit state persistence, and human-in-the-loop pause-and-resume capabilities essential for complex multi-turn workflows like customer dispute resolution or order modifications.',
  },
  {
    category: 'architecture',
    question: 'How do token consumption costs and execution latency compare across the three frameworks?',
    answer:
      'n8n has near-zero framework latency overhead, invoking LLMs only when explicit AI nodes are reached. LangGraph maintains low overhead by isolating LLM calls to specific graph node transitions. CrewAI introduces higher token overhead and latency due to verbose agent-to-agent inter-communication and simulated reflection loops.',
  },
  {
    category: 'architecture',
    question: 'How does state persistence work during long-running background agent runs?',
    answer:
      'LangGraph persists graph state into PostgreSQL or Redis checkpointers, enabling workflows to pause for days while awaiting human approval. n8n stores execution state in internal databases with webhook resumption. CrewAI typically manages state in-memory during single execution runs unless wrapped in external persistence layers.',
  },
  {
    category: 'integrations',
    question: 'Which framework is best for connecting legacy enterprise ERPs like NetSuite or SAP?',
    answer:
      'n8n excels for rapid connection to 400+ pre-built third-party APIs with visual debugging. However, for complex custom SOAP endpoints, dynamic XML parsing, or Model Context Protocol (MCP) integrations, code-first Python or TypeScript connectors in LangGraph offer superior error handling and typing.',
  },
  {
    category: 'integrations',
    question: 'What is Model Context Protocol (MCP) and how does it relate to these frameworks?',
    answer:
      'Model Context Protocol is an open standard developed to expose enterprise tools and data sources to AI clients uniformly. LangGraph and modern Python/TypeScript runtimes can natively call MCP servers, allowing connectors built for one workflow to be reused across all future agents.',
  },
  {
    category: 'integrations',
    question: 'Can n8n and LangGraph be combined in a hybrid enterprise architecture?',
    answer:
      'Yes. In FactoryJet hybrid architecture, n8n acts as the reliable webhook ingestion gateway, queue manager, and deterministic data transformer, while handing complex reasoning, state machines, and RAG retrieval over to a dedicated LangGraph service via private microservice endpoints.',
  },
  {
    category: 'integrations',
    question: 'How do you implement human-in-the-loop approval workflows in each system?',
    answer:
      'In LangGraph, state is saved to a persistent checkpointer and execution pauses until an external webhook or Slack interaction signals approval. In n8n, the Wait node pauses execution and resumes upon webhook reception. In CrewAI, human input requires custom wrapping around task execution hooks.',
  },
  {
    category: 'security',
    question: 'Can all three frameworks be self-hosted inside a private enterprise VPC?',
    answer:
      'Yes. n8n offers a self-hosted Docker/Kubernetes container under fair-code licensing. LangGraph and CrewAI are open-source Python libraries that deploy directly onto AWS ECS/EKS, Google Cloud Run, or Azure Kubernetes within private VPC network perimeters.',
  },
  {
    category: 'security',
    question: 'How do you enforce least-privilege security on autonomous tool calling?',
    answer:
      'We enforce parameter limits, transaction caps, allow-listed database scopes, and read-only replicas at the API gateway layer, ensuring the LLM cannot execute destructive updates regardless of prompt injection attempts.',
  },
  {
    category: 'security',
    question: 'How do you prevent proprietary enterprise data from training third-party public models?',
    answer:
      'All inference requests are routed through enterprise zero-data-retention API endpoints with Anthropic, OpenAI, or self-hosted open-weights models (such as Llama 3 or Mistral) running on private GPU instances.',
  },
  {
    category: 'security',
    question: 'How do audit logging and compliance tracking differ across the frameworks?',
    answer:
      'LangGraph pairs natively with LangSmith or custom OpenTelemetry tracers for step-by-step token and tool invocation audit logging. n8n provides visual execution logs with input/output payloads per node. CrewAI requires custom log interceptors for compliance reporting.',
  },
  {
    category: 'verdict',
    question: 'What is the recommended framework for customer support ticket automation?',
    answer:
      'For bounded customer support workflows inside Zendesk or Gorgias, a LangGraph state machine wired to Shopify GraphQL APIs and vector search provides the ideal combination of state control, safe tool calling, and human escalation.',
  },
  {
    category: 'verdict',
    question: 'What is the recommended framework for back-office invoice and data reconciliation?',
    answer:
      'A hybrid pattern: n8n handles incoming email attachments, OCR document ingestion, and ERP record creation, while LangGraph executes line-item matching logic and anomaly detection.',
  },
  {
    category: 'verdict',
    question: 'When is CrewAI the right choice for an enterprise project?',
    answer:
      'CrewAI is ideal for research synthesis, competitive intelligence gathering, content ideation, and simulated multi-persona evaluations where open-ended collaborative brainstorming adds distinct value over deterministic task execution.',
  },
  {
    category: 'verdict',
    question: 'How do we schedule an enterprise AI framework architecture review with FactoryJet?',
    answer:
      'You can book a 30-minute technical discovery session directly with founder Bhavesh Barot. We will review your target workflow, security constraints, and provide an architectural blueprint recommending the optimal framework mix.',
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
  headline: 'n8n vs LangChain vs CrewAI: Enterprise Multi-Agent Architecture Guide (2026)',
  description:
    'Comprehensive technical comparison of n8n, LangChain/LangGraph, and CrewAI for enterprise multi-agent workflows: state persistence, ERP tool calling, latency, and private cloud deployment.',
  datePublished: '2026-09-01T00:00:00Z',
  dateModified: `${PAGE_MODIFIED}T00:00:00Z`,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
    jobTitle: 'Founder, FactoryJet',
  },
  publisher: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    logo: {
      '@type': 'ImageObject',
      url: 'https://factoryjet.com/FinalLogo.svg',
    },
  },
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
              <p className="pp-eyebrow">// ENTERPRISE ORCHESTRATION BENCHMARK</p>
              <h1 className="pp-h1">
                n8n vs LangChain vs CrewAI <span className="pp-grad">Enterprise Guide</span>
              </h1>
              <p className="pp-lead">
                An objective architectural breakdown for CTOs and engineering leaders: evaluate low-code integration glue (n8n), code-first cyclical state machines (LangGraph/LangChain), and autonomous agent swarms (CrewAI).
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
                <span className="text-xs text-[#8C827A]">2026 Production Standards</span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-1 border-b border-[#F5EFEA]">
                  <span className="text-[#46403B]">Deterministic Workflows:</span>
                  <span className="font-semibold text-[#14110F]">n8n (Low-Code Glue)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F5EFEA]">
                  <span className="text-[#46403B]">Stateful Multi-Agent Reasoning:</span>
                  <span className="font-semibold text-[#14110F]">LangGraph (Code-First)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F5EFEA]">
                  <span className="text-[#46403B]">Open-Ended Role Swarms:</span>
                  <span className="font-semibold text-[#14110F]">CrewAI (Persona-Based)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#46403B]">Recommended Pattern:</span>
                  <span className="font-semibold text-[#F05A28]">FactoryJet Hybrid Architecture</span>
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
                Executive Architectural Verdict
              </span>
              <p className="text-base md:text-lg text-[#14110F] leading-relaxed font-medium">
                For production enterprise operations, n8n is the superior choice for deterministic data integration and webhook routing, LangGraph is the standard for stateful, tool-calling reasoning graphs with human checkpoints, and CrewAI is suited for collaborative research. Most resilient enterprise systems deploy a hybrid model: n8n as the integration bus and LangGraph as the reasoning core.
              </p>
            </div>
          </div>
        </section>

        {/* VERIFIED MARKET METRICS */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="pp-h2 text-center">Enterprise AI Orchestration Benchmarks</h2>
              <p className="text-base text-[#46403B] mt-3">
                Key technical metrics evaluating developer velocity, token overhead, and execution reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="pp-card p-6 bg-white">
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">400+</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Pre-Built Connectors</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  n8n provides hundreds of native application connectors, accelerating initial API wiring for standard CRM and database operations.
                </p>
                <a
                  href="https://n8n.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F05A28] font-mono hover:underline"
                >
                  Source: n8n Documentation &rarr;
                </a>
              </div>

              <div className="pp-card p-6 bg-white">
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">100%</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Cyclical State Control</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  LangGraph allows complex cyclical graphs with persistent database checkpointers, essential for pause-and-resume human approval loops.
                </p>
                <a
                  href="https://langchain-ai.github.io/langgraph/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F05A28] font-mono hover:underline"
                >
                  Source: LangGraph Architecture Guide &rarr;
                </a>
              </div>

              <div className="pp-card p-6 bg-white">
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">4.2x</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Token Overhead in Swarms</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  Multi-agent conversational swarms generate up to 4.2x higher token usage due to verbose inter-agent message exchanges and persona reflection.
                </p>
                <a
                  href="https://arxiv.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F05A28] font-mono hover:underline"
                >
                  Source: AI Agent Architecture Studies &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 5-POINT EVALUATION FRAMEWORK & COMPARISON TABLE */}
        <section className="pp-section pp-tint">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="pp-h2 text-center">Five-Dimensional Evaluation Matrix</h2>
              <p className="text-base text-[#46403B] mt-3">
                Side-by-side comparison across engineering architecture, enterprise security, integration depth, latency, and maintenance overhead.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Evaluation Criteria</th>
                    <th>FactoryJet Hybrid Architecture</th>
                    <th>n8n (Standalone Low-Code)</th>
                    <th>LangGraph / LangChain (Python/TS)</th>
                    <th>CrewAI (Multi-Agent Swarm)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tr-me">
                    <td className="font-bold">1. State &amp; Memory Management</td>
                    <td className="font-semibold text-[#F05A28]">PostgreSQL checkpointers + n8n event state</td>
                    <td>Node execution memory (Linear)</td>
                    <td>Cyclical graph state + checkpointers</td>
                    <td>In-memory agent context (Stateless)</td>
                  </tr>
                  <tr>
                    <td className="font-bold">2. Tool Calling &amp; ERP Depth</td>
                    <td className="font-semibold text-[#14110F]">Typed MCP servers + 400 native API nodes</td>
                    <td>400+ pre-built visual nodes</td>
                    <td>Custom typed Python/TS functions</td>
                    <td>Agent role tools &amp; LangChain tools</td>
                  </tr>
                  <tr className="tr-me">
                    <td className="font-bold">3. Human-in-the-Loop Workflow</td>
                    <td className="font-semibold text-[#F05A28]">Slack / Webhook interactive checkpoints</td>
                    <td>Wait node (Webhook resumption)</td>
                    <td>Native graph interrupt &amp; resume</td>
                    <td>Custom hook wrappers required</td>
                  </tr>
                  <tr>
                    <td className="font-bold">4. Token Overhead &amp; Latency</td>
                    <td className="font-semibold text-[#14110F]">Optimized (Calls LLMs only on decision steps)</td>
                    <td>Minimal (Direct API execution)</td>
                    <td>Low (Controlled node transitions)</td>
                    <td>High (Inter-agent chatter)</td>
                  </tr>
                  <tr className="tr-me">
                    <td className="font-bold">5. Enterprise VPC Self-Hosting</td>
                    <td className="font-semibold text-[#F05A28]">Docker/K8s inside your private AWS/GCP</td>
                    <td>Self-hosted Docker container</td>
                    <td>Private microservice deployment</td>
                    <td>Open-source Python package</td>
                  </tr>
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
                  n8n is unmatched when your primary requirement is integrating existing cloud SaaS products (HubSpot, Slack, Google Sheets, QuickBooks) with deterministic data pipelines. Its visual node editor allows operations and IT teams to audit data flows without reading lines of code.
                </p>
                <p className="text-base text-[#46403B] leading-relaxed">
                  <strong>Limitations:</strong> When workflows require dynamic branching, multi-turn conversational memory, complex schema validations, or cyclical reasoning (where an agent reflects on its own output and tries a different tool), n8n visual canvas becomes unwieldy.
                </p>
              </div>

              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  DEEP DIVE // LANGGRAPH &amp; LANGCHAIN
                </span>
                <h2 className="text-2xl font-bold text-[#14110F] mb-4">When to Choose LangGraph for Code-First Reasoning</h2>
                <p className="text-base text-[#46403B] leading-relaxed mb-4">
                  LangGraph is the industry standard for production-grade AI agents requiring rigorous software engineering. Built as a graph-based state machine in Python and TypeScript, it treats agents as cycles of computation: ingest state, call LLM, invoke tool, inspect output, and transition to the next state.
                </p>
                <p className="text-base text-[#46403B] leading-relaxed">
                  <strong>Key Advantages:</strong> Exact state persistence, native human-in-the-loop interrupts, deterministic tool schema validation, and complete version-controlled CI/CD integration with automated regression test harnesses.
                </p>
              </div>

              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  DEEP DIVE // CREWAI
                </span>
                <h2 className="text-2xl font-bold text-[#14110F] mb-4">When to Choose CrewAI for Multi-Agent Swarms</h2>
                <p className="text-base text-[#46403B] leading-relaxed mb-4">
                  CrewAI models multi-agent workflows as a collaborative team: you define specific agent personas (e.g., Senior Researcher, Copywriter, Compliance Officer), assign individual goals and backstories, and orchestrate sequential or hierarchical task execution.
                </p>
                <p className="text-base text-[#46403B] leading-relaxed">
                  <strong>Best Fit:</strong> Creative ideation, open-ended research synthesis, document drafting, and multi-perspective evaluations where collaborative conversational depth is valued over strict latency and token efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQS SECTION */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Questions engineering leaders ask about agent frameworks"
          lead="Key architectural, security, and integration questions for engineering leaders evaluating agent frameworks."
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
                Speak directly with founder Bhavesh Barot. We will review your target workflow, security parameters, and data systems to architect a hybrid framework deployment tailored to your business.
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
