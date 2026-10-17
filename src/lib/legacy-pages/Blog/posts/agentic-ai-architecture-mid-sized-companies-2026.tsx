import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

/*
 * Agentic AI architecture for mid-sized companies (US, 2026). Written 17 Oct 2026.
 * Target terms (DataForSEO, US, 17 Oct 2026): agentic ai architecture 720/mo KD 18, agentic ai architecture diagram 260,
 * ai agent orchestration 590 KD 8, agentic ai design patterns 260, enterprise agentic ai architecture ($152 CPC),
 * multi agent system architecture 110, agentic workflows, ai agent erp integration.
 * Outside facts come only from pages opened on 17 Oct 2026 (Anthropic, MCP docs, Gartner, OWASP), linked in SRC.
 * Diagram: public/images/blog/agentic-ai-architecture-mid-sized-companies-2026/reference-architecture.svg (hand-drawn SVG).
 * No FactoryJet prices, no running-cost figures, no team location, no build timelines.
 * The FAQ array below is the single source for both the visible FAQ and the FAQPage JSON-LD.
 */

const SRC = {
  anthropic: 'https://www.anthropic.com/engineering/building-effective-agents',
  mcp: 'https://modelcontextprotocol.io/docs/getting-started/intro',
  gartner40: 'https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027',
  owaspLlm06: 'https://genai.owasp.org/llmrisk/llm062025-excessive-agency/',
};

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;
const IMG = '/images/blog/agentic-ai-architecture-mid-sized-companies-2026';

function Table({ head, rows }: { head: string[]; rows: React.ReactNode[][] }) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gray-800 text-white">
            {head.map((h) => (
              <th key={h} className="p-3 text-left border border-gray-700">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 ? 'bg-gray-50' : 'bg-white'}>
              {r.map((c, j) => (
                <td key={j} className={`p-3 border border-gray-200 align-top${j === 0 ? ' font-semibold' : ''}`}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const faqs: FAQItem[] = [
  {
    q: 'What is agentic AI architecture?',
    a: 'It is the way the parts of an AI agent system fit together: where work arrives, the agent itself (a model, its instructions and the loop that decides the next step), the tools it calls, the business systems those tools reach, and the controls around it such as approvals, logs, tests and monitoring. A good architecture keeps permissions in the tool layer and leaves your ERP and CRM unchanged.',
  },
  {
    q: 'What are the main components of an AI agent?',
    a: 'Six parts cover almost every agent: the model (LLM) that reasons, the instructions that define the job and its limits, the context it reads such as policies and past cases, the tools it can call, the orchestration loop that picks the next step, and the guardrails around it: approval rules, logs and an off switch. Remove any one and the agent either cannot act or cannot be trusted to.',
  },
  {
    q: 'What is the difference between an agentic workflow and an AI agent?',
    a: 'Anthropic draws the line clearly: workflows are systems where LLMs and tools are orchestrated through predefined code paths, while agents are systems where LLMs dynamically direct their own processes and tool usage. A workflow follows steps you wrote. An agent chooses its steps. Many good business systems are mostly workflow with one agentic step where judgement is needed.',
  },
  {
    q: 'What does orchestration mean in AI agents?',
    a: 'Orchestration is the logic that decides what happens next: which tool to call, in what order, what to do with the result, when to retry, and when to stop and hand the item to a person. It can be fixed code, a workflow tool, or the model choosing its own next step. Most reliable business agents mix fixed code for the order of steps with the model making decisions inside them.',
  },
  {
    q: 'What is the best AI agent orchestration framework?',
    a: 'There is no single best one. Code frameworks such as LangGraph suit teams that want full control and testing. Workflow tools such as n8n suit simpler, visual flows. Vendor platforms such as Salesforce Agentforce or Microsoft Copilot Studio suit work that stays inside those products. Anthropic recommends starting with LLM APIs directly and adding frameworks only when they earn their place.',
  },
  {
    q: 'Do I need a multi-agent system?',
    a: 'Probably not for your first agent. One agent with a few well-scoped tools handles most single jobs, such as turning emailed purchase orders into draft sales orders. Split into several agents only when one step is complex enough to need its own instructions and tests, or when separate teams own separate parts. More agents means more hand-offs to test and monitor.',
  },
  {
    q: 'Is multi-agent the same as agentic AI?',
    a: 'No. Agentic AI means AI that plans and takes actions through tools. Multi-agent is one way to build it, with several agents each doing part of the work and passing results between them. A single agent is still agentic AI. Multi-agent designs suit larger jobs; they are not a requirement.',
  },
  {
    q: 'What are agentic AI design patterns?',
    a: 'Anthropic names five common workflow patterns: prompt chaining (fixed steps in sequence), routing (sort the input, then send it to the right handler), parallelization (run checks side by side), orchestrator-workers (one model splits a job and assigns parts), and evaluator-optimizer (one model drafts, another critiques). Business agents usually combine routing and prompt chaining with one approval step.',
  },
  {
    q: 'What is MCP and why does it matter for AI agents?',
    a: 'MCP, the Model Context Protocol, is an open-source standard for connecting AI applications to external systems. Its own documentation compares it to a USB-C port for AI applications. For a company it means you can build one MCP server in front of your ERP or CRM that exposes only approved actions, and then any MCP-capable agent, including Claude and ChatGPT, can use it within those limits.',
  },
  {
    q: 'How do AI agents connect to an ERP like NetSuite, Odoo or SAP Business One?',
    a: 'Through the ERP\'s own API, wrapped in a tool or MCP server that exposes only the actions the agent needs, such as find a customer, check stock or create a draft sales order. The agent signs in with its own service account, read-only by default. Where the ERP has no usable API, the tool reads exports or files instead. Screen-clicking automation is the last resort.',
  },
  {
    q: 'Can AI replace an ERP?',
    a: 'No. The ERP remains the system of record for orders, stock, invoices and the general ledger, with its own controls and audit history. AI agents sit in front of it and do the reading, matching and data entry around it: turning emails and PDFs into ERP records, answering questions from ERP data, and flagging exceptions for a person.',
  },
  {
    q: 'Where should AI agent permissions be enforced?',
    a: 'In two places: the tool layer, which exposes only the actions the job needs, and the target system, which refuses anything the agent\'s service account is not allowed to do. Instructions in the prompt are not a permission control, because they can be talked around. OWASP calls the target-system check complete mediation.',
  },
  {
    q: 'Do I need a vector database or RAG for an AI agent?',
    a: 'Only if the agent must search a large body of text, such as hundreds of policy documents or product manuals. RAG (retrieval-augmented generation) fetches the relevant passages and gives them to the model. Many business agents need structured lookups instead: find the order, check the price list. Those are better served by direct queries through a tool than by a vector search.',
  },
  {
    q: 'What is agentic RAG?',
    a: 'Agentic RAG is retrieval where the agent decides what to search for, reads the results, and searches again if the first results are not enough, instead of running one fixed search. It helps when questions are vague or need several sources. It also costs more steps per answer, so use it where a single search often misses.',
  },
  {
    q: 'Which LLM should a business agent use?',
    a: 'Choose per step, not per company. A larger model suits the step that needs judgement, such as deciding whether an email is a new order or a change to an old one. A smaller, faster model often handles extraction and formatting. Keep the model behind your own tool layer so you can switch providers when a model is retired or a better one appears.',
  },
  {
    q: 'How do you stop an AI agent from creating duplicate records?',
    a: 'Give every action an idempotency key, a unique ID built from the source document such as the customer PO number and date, and have the tool check for it before creating anything. Retries happen: a timeout, a model re-run, a second email with the same attachment. Without that check the same order lands in the ERP twice.',
  },
  {
    q: 'What does an agentic AI architecture diagram usually show?',
    a: 'At minimum: the triggers where work arrives, the agent and its model, the tools or MCP servers, the systems of record, and the controls (approval queue, logs, test set, monitoring, secrets, off switch). Ours on this page draws those five layers and the path one request takes through them.',
  },
  {
    q: 'Should I build AI agents on Salesforce Agentforce or Microsoft Copilot Studio?',
    a: 'Use the platform your work already lives in when the job stays inside it. If cases and customer records live in Salesforce, Agentforce builds its actions from your flows, Apex and APIs. If the job crosses systems the platform cannot reach, or needs approval rules spanning your ERP and CRM, a custom agent or a custom tool the platform can call is the better fit.',
  },
  {
    q: 'What is the hardest part of agentic AI architecture?',
    a: 'Integration with existing systems, not the model. Gartner notes that integrating agents into legacy systems can be technically complex and often requires costly modifications. Mapping exactly which fields an action needs, handling records that do not match, and making every action safe to retry takes more work than writing the instructions.',
  },
  {
    q: 'How do you test an agentic AI system?',
    a: 'Build a test set from your own past cases, including ones the agent should refuse or hand to a person, and agree the pass mark before testing. Run it before go-live and again after any change to the model, instructions or tools. Add tests for hidden instructions in documents, permission refusals and cases just over each limit.',
  },
  {
    q: 'Where should a mid-sized company host its AI agents?',
    a: 'In a cloud account the company owns, close to where its other systems run, with the model provider account also in the company\'s name where possible. That keeps data, keys and logs under your control and avoids being locked to one vendor. Agents that run on a schedule need a server or serverless job; chat-triggered ones can run inside the tool where staff ask.',
  },
  {
    q: 'What skills does a team need to build and run agentic AI?',
    a: 'Integration engineering (APIs, data mapping, error handling) matters more than machine learning. You also need someone who can write and test instructions against real cases, someone who understands the business process well enough to set limits, and an owner who reviews results. Many mid-sized companies keep the process owner in-house and hire the engineering.',
  },
];

export const post: BlogPost = {
  id: '767',
  slug: 'agentic-ai-architecture-mid-sized-companies-2026',
  title: 'Agentic AI Architecture for Mid-Sized Companies: A Reference Diagram and the Choices Behind It (2026)',
  excerpt:
    'A five-layer reference architecture for agentic AI at a mid-sized company: where work arrives, the agent, the tool layer where permissions live, your ERP and CRM, and the control layer. With the five workflow patterns, when to go multi-agent, how MCP fits, and a worked example from emailed purchase order to draft sales order.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Oct 17, 2026',
  dateModified: 'Oct 17, 2026',
  readTime: '17 min read',
  imageUrl: `${IMG}/hero.webp`,
  imageAlt:
    'A man in a white shirt draws empty boxes joined by arrows on a whiteboard with an orange marker while a woman with short silver hair in a dark green sweater points at one box.',
  meta: {
    title: 'Agentic AI Architecture for Mid-Sized Companies (2026)',
    description:
      'A five-layer agentic AI architecture diagram for mid-sized companies: agent, tools, MCP, ERP and CRM, approvals and logs, with a worked example.',
  },
  keyTakeaways: [
    'An agentic AI architecture has five layers: where work arrives, the agent, the tool layer, your systems of record, and a control layer of approvals, logs, tests and monitoring.',
    'Permissions belong in the tool layer and in the target system, not in the prompt. Instructions can be talked around; a permission the ERP refuses cannot.',
    'Anthropic separates workflows (predefined code paths) from agents (the model directs its own steps) and recommends the simplest solution that works. Most business agents are mostly workflow with one agentic step.',
    'Start with one agent and a few narrow tools. Split into several agents only when a step needs its own instructions and tests.',
    'MCP is an open standard for connecting AI applications to external systems. One MCP server in front of your ERP can expose only approved actions to any MCP-capable agent.',
    'Make every action safe to retry with an idempotency key, or the same order will land in your ERP twice.',
    'Gartner warns that integrating agents into legacy systems can be technically complex. Budget the effort for integration, not the model.',
  ],
  faqs,
  content: (
    <article>
      {/* Answer-first block */}
      <div className="bg-white border-2 border-[#E5DFD7] rounded-xl p-6 sm:p-8 mb-10">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-3">The short answer</p>
        <p className="text-lg leading-relaxed mb-0">
          An <strong>agentic AI architecture</strong> for a mid-sized company has five layers: where work arrives, the
          agent (model, instructions and the loop that picks the next step), a tool layer that exposes only approved
          actions, your unchanged ERP and CRM, and a control layer of approvals, logs, tests and monitoring. Most first
          agents need one agent and a few narrow tools, not a multi-agent system.
        </p>
      </div>

      <div className="bg-[#FAF8F5] border-l-4 border-[#B23E13] p-5 rounded-r-lg mb-10">
        <p className="text-sm text-[#1F2937] leading-relaxed mb-0">
          <strong>We design, build and support custom AI agents, so weigh this page with that in mind.</strong> The
          diagram is ours, drawn from the way we structure builds on ERPs and CRMs. Outside facts come from Anthropic,
          the Model Context Protocol documentation, OWASP and Gartner, opened on 17 October 2026 and linked where they
          appear. Search figures are our own DataForSEO measurement for the US on the same day.
        </p>
      </div>

      <p>
        About 720 people a month search Google in the US for &quot;agentic ai architecture&quot;, and another 260 for a
        diagram of one (DataForSEO, 17 October 2026). Most of what they find is drawn for a software company building an
        AI product: vector stores, model routers and agent swarms. A mid-sized manufacturer, distributor or services firm
        has a different problem. It already runs an ERP, a CRM and a shared inbox, and it wants an agent to do work
        across them without breaking anything.
      </p>
      <p>
        This guide draws that architecture. It covers the five layers, the choice between a workflow and an agent, when
        a second agent is worth it, how MCP fits, a worked example, and the mistakes we see most. If you are setting the
        rules for your first agent, read it alongside our{' '}
        <a href="/blog/ai-agent-governance-policy-mid-sized-companies-2026">AI agent governance policy guide</a>.
      </p>

      <h2 id="diagram">The reference architecture: five layers</h2>
      <figure className="my-8">
        <a href={`${IMG}/reference-architecture.svg`} {...ext} aria-label="Open the agentic AI reference architecture diagram full size">
          <img
            src={`${IMG}/reference-architecture.svg`}
            alt="Diagram of an agentic AI architecture in five layers: triggers such as email, portal, EDI, Teams and schedules; the agent with orchestrator, model, instructions and context; a tool layer of MCP servers, API connectors and document tools; systems of record such as ERP, CRM, help desk and files; and a control layer with approval queue, logs, test set, monitoring, secrets manager and off switch."
            width={1200}
            height={900}
            loading="lazy"
            decoding="async"
            className="w-full h-auto rounded-xl border border-gray-200 bg-white"
          />
        </a>
        <figcaption className="text-xs text-gray-500 mt-2">
          The path of one request runs top to bottom. The control layer on the right watches the agent and its tools.
          Tap the diagram to open it full size.
        </figcaption>
      </figure>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li>
          <strong>Where work arrives.</strong> A shared inbox, a customer portal, an EDI or file drop, a Teams or Slack
          message, or a schedule. Pick one trigger for the first agent.
        </li>
        <li>
          <strong>The agent.</strong> An orchestrator that reads the request and decides the steps, a model (LLM) that
          does the reasoning, instructions that define the job and its limits, and context such as policies and past
          cases. Specialist steps, such as reading a messy PDF, can sit beside it.
        </li>
        <li>
          <strong>The tool layer.</strong> MCP servers, API connectors and document tools. Each exposes only the actions
          the job needs, signs in with the agent&apos;s own service account, and is where permissions are enforced.
        </li>
        <li>
          <strong>Systems of record.</strong> Your ERP (NetSuite, Odoo, SAP Business One and others), CRM (Salesforce,
          HubSpot), help desk and file stores. They stay as they are and keep their own permission checks.
        </li>
        <li>
          <strong>The control layer.</strong> An approval queue, logs of every tool call, a test set of your own past
          cases, monitoring and alerts, a secrets manager, and an off switch with a named owner.
        </li>
      </ol>

      <h2 id="workflow-or-agent">Workflow or agent: decide how much the model chooses</h2>
      <p>
        Anthropic&apos;s engineering guide{' '}
        <a href={SRC.anthropic} {...ext}>Building effective agents</a> (19 December 2024) gives the cleanest split we
        know. <strong>Workflows</strong> are systems where LLMs and tools are orchestrated through predefined code paths.{' '}
        <strong>Agents</strong> are systems where LLMs dynamically direct their own processes and tool usage. The same
        guide recommends finding the simplest solution possible and adding multi-step agentic systems only when simpler
        ones fall short.
      </p>
      <p>
        For business work that advice is right. The order of steps in most back-office jobs is known: read the document,
        match it to a record, check the rules, prepare the action, get approval. The judgement sits inside one or two of
        those steps. So the reliable design is a workflow you can test, with the model making decisions inside it, rather
        than a free agent deciding the whole route each time.
      </p>
      <h3 id="patterns">The five patterns, with a mid-sized company example for each</h3>
      <Table
        head={['Pattern (Anthropic\'s name)', 'What it does', 'Example in a mid-sized company']}
        rows={[
          ['Prompt chaining', 'Fixed steps in sequence, each using the last one\'s output', 'Read a supplier invoice, extract lines, match to the PO, draft the bill'],
          ['Routing', 'Sort the input, then send it to the right handler', 'Shared inbox: new order, order change, invoice query or complaint'],
          ['Parallelization', 'Run several checks side by side and combine them', 'Check credit limit, stock and pricing on a quote at the same time'],
          ['Orchestrator-workers', 'One model splits a job and assigns the parts', 'An RFQ with 40 lines split by product family for pricing'],
          ['Evaluator-optimizer', 'One model drafts, another critiques against rules', 'A customer reply checked against your returns policy before it goes to a person'],
        ]}
      />

      <figure className="my-8">
        <img
          src={`${IMG}/workflow-review.webp`}
          alt="Seen from behind, a woman with long auburn hair in a cream cardigan points at a monitor showing rows of connected colored blocks while a bald man in a charcoal quarter-zip watches, an orange notebook on the desk."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Most business agents are a fixed sequence of steps with the model deciding inside one or two of them.
        </figcaption>
      </figure>

      <h2 id="multi-agent">One agent or several: when a multi-agent system is worth it</h2>
      <Table
        head={['Signal', 'One agent', 'Split into several']}
        rows={[
          ['Number of distinct jobs', 'One job with a few steps', 'Several jobs owned by different teams'],
          ['Instructions', 'Fit on a page and test well together', 'One step needs long, specialist instructions of its own'],
          ['Testing', 'One test set covers it', 'Each part needs its own test set and pass mark'],
          ['Tools', 'A handful, all for the same job', 'Different parts need different systems and permissions'],
          ['Failure handling', 'One place to stop and hand to a person', 'Parts can fail independently without stopping the rest'],
        ]}
      />
      <p>
        Every hand-off between agents is another place for context to be lost and another thing to test. Start with
        one. Our guide to{' '}
        <a href="/blog/multi-agent-workflows-langgraph-n8n-enterprise-erp-2026">multi-agent workflows with LangGraph and n8n on ERP systems</a>{' '}
        covers the larger designs when you reach them.
      </p>

      <h2 id="orchestration">AI agent orchestration: code, workflow tool or platform</h2>
      <p>
        US searches for &quot;ai agent orchestration&quot; run about 590 a month, and &quot;what is ai agent
        orchestration&quot; rose about 1,500% in a year (DataForSEO, 17 October 2026). Orchestration is the
        logic that decides what happens next: which tool, in what order, what to do with the result, when to retry and
        when to stop. You have three ways to build it.
      </p>
      <Table
        head={['Option', 'Good for', 'Watch for']}
        rows={[
          ['Code (for example LangGraph or plain code on the model APIs)', 'Full control, proper tests, complex rules across systems', 'Needs engineers to change it'],
          ['Workflow tool (for example n8n)', 'Simple, visual flows staff can read', 'Gets hard to test as rules grow'],
          ['Vendor platform (Salesforce Agentforce, Microsoft Copilot Studio)', 'Jobs that stay inside that vendor\'s product and data', 'Reaching systems the platform does not connect to'],
        ]}
      />
      <p>
        Many companies end up with a mix: the platform agent for work inside Salesforce or Microsoft 365, plus a custom
        tool it can call for the system it cannot reach. We compare the code options in{' '}
        <a href="/comparisons/n8n-vs-langchain-vs-crewai-enterprise">n8n vs LangChain vs CrewAI for enterprise</a>, and
        the rent or build choice in our{' '}
        <a href="/blog/ai-agent-build-vs-buy-2026">AI agent build versus buy guide</a>.
      </p>

      <h2 id="tool-layer">The tool layer: APIs, MCP servers and where permissions live</h2>
      <p>
        The <a href={SRC.mcp} {...ext}>Model Context Protocol</a> (MCP) documentation describes MCP as an open-source
        standard for connecting AI applications to external systems, and compares it to a USB-C port for AI
        applications. In architecture terms it is a standard shape for the tool layer. You build one MCP server in front
        of a system, decide exactly which actions it offers, and any MCP-capable client (the docs name Claude and
        ChatGPT among them) can use those actions and nothing else.
      </p>
      <p>Three rules for the tool layer, taken from OWASP&apos;s guidance on <a href={SRC.owaspLlm06} {...ext}>Excessive Agency</a>:</p>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>Narrow tools.</strong> &quot;Create draft sales order&quot; rather than &quot;run any query&quot;.</li>
        <li><strong>Own credentials.</strong> A service account per agent, read-only unless a write action is listed.</li>
        <li><strong>Check twice.</strong> The tool checks the request, and the target system refuses anything the account is not allowed to do.</li>
      </ol>
      <p>
        We build custom MCP servers and API integrations for this layer. See{' '}
        <a href="/services/ai-integration-services">AI integration services</a> for the systems we connect.
      </p>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg my-8">
        <h3 className="text-lg font-bold mb-3">Want this diagram drawn for your systems?</h3>
        <p className="mb-4">
          Bring the job you want an agent to do and the systems it touches. In a 30-minute call with founder Bhavesh
          Barot we will sketch the five layers for your stack and point out where the integration effort sits. FactoryJet
          quotes a fixed price in writing after that call, and we can show working software on your own data before a
          contract.
        </p>
        <a
          href="https://calendly.com/bhavesh-factoryjet/30min"
          {...ext}
          className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors"
        >
          Talk to the Founder
        </a>
      </div>

      <h2 id="worked-example">Worked example: an emailed purchase order becomes a draft sales order</h2>
      <p>
        Here is one request traced through the five layers. We have built purchase and sales order generation on
        several ERPs, including Odoo, NetSuite, SAP Business One and ERPNext, and this is the shape it takes.
      </p>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li>
          <strong>Trigger.</strong> A customer emails a PDF purchase order to the orders inbox. The agent picks it up.
        </li>
        <li>
          <strong>Route.</strong> The model decides: new order, change to an existing order, or something else. Anything
          else goes to the orders team untouched.
        </li>
        <li>
          <strong>Read.</strong> A document step extracts the customer, PO number, ship-to, lines, quantities and
          requested dates.
        </li>
        <li>
          <strong>Match.</strong> Tools look up the customer and each item in the ERP. Customer part numbers are mapped to
          your item codes using the cross-reference table.
        </li>
        <li>
          <strong>Check.</strong> In parallel: price against the customer&apos;s price list, stock against the
          requested date, and credit status. Any mismatch is flagged, not fixed silently.
        </li>
        <li>
          <strong>Guard against duplicates.</strong> The tool builds an idempotency key from the customer and PO number
          and refuses to create a second order with the same key.
        </li>
        <li>
          <strong>Prepare.</strong> The tool creates a draft sales order in the ERP, with the source PDF attached and every
          flag noted on it.
        </li>
        <li>
          <strong>Approve.</strong> The draft lands in the approval queue. A person checks the flags and confirms. Only
          then does the order release.
        </li>
        <li>
          <strong>Record.</strong> Every tool call, the model&apos;s decision at each step and the approval are logged
          against the PO number.
        </li>
      </ol>
      <p>
        Notice where the model is used: routing, reading and spotting mismatches. The order of steps, the duplicate
        check and the ERP write are plain code. That is what makes it testable. Our post on{' '}
        <a href="/blog/ai-agent-architecture-manufacturing-rfq-erp-sync-2026">RFQ-to-ERP agent architecture in manufacturing</a>{' '}
        goes deeper on the quoting side.
      </p>

      <h2 id="control-layer">The control layer: what keeps the agent trusted</h2>
      <Table
        head={['Control', 'What it does', 'Without it']}
        rows={[
          ['Approval queue', 'Holds actions over a limit for a named person', 'Every action reaches your systems unchecked'],
          ['Logs and audit trail', 'Records every tool call, input, result and approval', 'Nobody can say why an order changed'],
          ['Test set', 'Your own past cases, re-run before every change', 'A model update quietly changes behavior'],
          ['Monitoring and alerts', 'Watches handoffs, approver edits, failures and blocked actions', 'Problems surface as customer complaints'],
          ['Secrets manager', 'Keeps keys out of prompts and code', 'Keys leak into logs and repositories'],
          ['Off switch', 'Lets a named owner stop the agent at once', 'A bad day becomes a bad week'],
        ]}
      />
      <p>
        The policy side of these controls, including who owns each one, is in our{' '}
        <a href="/blog/ai-agent-governance-policy-mid-sized-companies-2026">AI agent governance guide</a>, which comes
        with a free policy template. How we run them after launch is on our{' '}
        <a href="/services/ai-agent-monitoring">AI agent monitoring and support</a> page.
      </p>

      <h2 id="mistakes">Six architecture mistakes we see in mid-sized companies</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li><strong>Admin credentials.</strong> The agent connects with an admin login because it was quickest. Give it its own narrow account.</li>
        <li><strong>One giant prompt.</strong> Five jobs in one set of instructions, so nobody can test any of them. Split the job into steps.</li>
        <li><strong>No test set.</strong> The agent is judged on a demo, then surprises everyone on real data. Test on your own past cases.</li>
        <li><strong>Screen clicking where an API exists.</strong> Automation that clicks through the ERP screen breaks on every update. Use the API or an export.</li>
        <li><strong>Multi-agent first.</strong> Several agents built before one has worked. Start with one.</li>
        <li><strong>No retry safety.</strong> A timeout triggers a retry and the order is created twice. Add idempotency keys to every write.</li>
      </ol>
      <p>
        Gartner&apos;s{' '}
        <a href={SRC.gartner40} {...ext}>June 2025 forecast</a> that over 40% of agentic AI projects will be canceled by
        the end of 2027 notes that integrating agents into legacy systems can be technically complex, often disrupting
        workflows and requiring costly modifications. All six mistakes above are integration mistakes. None is about the
        model.
      </p>

      <h2 id="platform-or-custom">Build on a platform or build custom</h2>
      <Table
        head={['If your work...', 'Start with', 'Add custom work when']}
        rows={[
          ['Lives in Salesforce', 'Salesforce Agentforce', 'The job needs your ERP, EDI or a system Salesforce does not reach'],
          ['Lives in Microsoft 365', 'Microsoft Copilot Studio', 'Actions must run in systems outside Microsoft with your own approval rules'],
          ['Crosses ERP, CRM, inbox and files', 'A custom agent with MCP servers or API tools', 'From the start'],
          ['Is mostly one simple flow', 'A workflow tool such as n8n', 'Rules grow beyond what the flow can test'],
        ]}
      />
      <p>
        We do Salesforce and Agentforce work as well as custom builds, so we are comfortable recommending either. Our
        comparison of{' '}
        <a href="/blog/intercom-fin-vs-zendesk-ai-vs-custom-ai-agent-2026">Intercom Fin, Zendesk AI, Agentforce and a custom agent</a>{' '}
        covers the support-desk version of this choice.
      </p>

      <h2 id="how-factoryjet-works">How FactoryJet builds agentic AI for mid-sized companies</h2>
      <p>
        We design, build, implement and support custom AI agents, and you own what we build: the code and repository
        from day one. AI and hosting accounts can run in your name, at cost. We start from your systems: which ones
        hold the data, which have usable APIs, and where the agent should stop and hand to a person. Then we show
        working software on your own data before you sign. FactoryJet quotes the build, and any support you choose, as
        fixed prices in writing after a short scoping call.
      </p>
      <p>
        To see the work by system, start with <a href="/services/ai-agent-development">AI agent development</a>,{' '}
        <a href="/services/erp-ai-agents">AI agents for ERP systems</a>,{' '}
        <a href="/services/netsuite-ai-agents">NetSuite AI agents</a>,{' '}
        <a href="/services/odoo-ai-agents">Odoo AI agents</a> and{' '}
        <a href="/services/sales-order-automation-ai-agents">sales order automation</a>. If you are still deciding
        whether an agent is worth building, our guide to{' '}
        <a href="/blog/ai-proof-of-concept-to-production-2026">scoping an AI proof of concept that reaches production</a>{' '}
        is the next read.
      </p>

      <h2 id="sources">Sources</h2>
      <p className="text-sm text-gray-600">All pages opened and read on 17 October 2026.</p>
      <ul className="list-disc pl-6 space-y-1 text-sm mb-8">
        <li><a href={SRC.anthropic} {...ext}>Anthropic, Building effective agents</a> (19 December 2024)</li>
        <li><a href={SRC.mcp} {...ext}>Model Context Protocol, What is the Model Context Protocol (MCP)?</a></li>
        <li><a href={SRC.owaspLlm06} {...ext}>OWASP GenAI Security Project, LLM06:2025 Excessive Agency</a></li>
        <li><a href={SRC.gartner40} {...ext}>Gartner, Gartner Predicts Over 40% of Agentic AI Projects Will Be Canceled by End of 2027</a> (25 June 2025)</li>
        <li>Our own measurement: US monthly search volumes and year-on-year change, DataForSEO, 17 October 2026</li>
      </ul>

      <div className="bg-[#FAF8F5] border-2 border-[#E5DFD7] p-6 sm:p-8 rounded-xl my-10 shadow-sm">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">
          Architecture call for mid-sized US companies
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-3">
          See your first agent drawn on your own systems, then working on your own data
        </h3>
        <p className="text-[#4B5563] text-base leading-relaxed mb-6">
          Tell us the job and the systems behind it: ERP, CRM, inbox, portal. We will tell you which pieces are workflow,
          which need an agent, what the tool layer should expose and what a person should approve. FactoryJet quotes a
          fixed price in writing after a short scoping call.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://calendly.com/bhavesh-factoryjet/30min"
            {...ext}
            className="inline-flex items-center gap-2 bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors shadow-sm"
          >
            Talk to the Founder
          </a>
          <a
            href="/services/ai-agent-development"
            className="inline-flex items-center gap-2 bg-white text-[#1F2937] border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            See AI agent development
          </a>
        </div>
      </div>
    </article>
  ),
};
