import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

/*
 * Custom MCP server for your ERP or CRM (US, 2026). Written 18 Oct 2026.
 * Target terms (DataForSEO, US, 17 Oct 2026): custom mcp server 1,000/mo KD 1 $25.06 (+6,971% yoy), salesforce mcp
 * server 1,000 KD 11, servicenow mcp server 590 KD 1, how to build an mcp server 480 KD 1, hubspot mcp server 390,
 * build mcp server 320, create mcp server 260, sap mcp server 170, mcp server security 170.
 * PAA (18 Oct): "What is a custom MCP server?", "Can I create my own MCP server?", "Is it hard to create an MCP
 * server?", "What is the structure of an MCP server?", "Can I run MCP servers locally?", "How can I host my own MCP
 * server?", "Are MCP servers obsolete?", "How much does it cost to run an MCP server?" (answered without figures).
 * Outside facts come only from pages opened on 17 and 18 Oct 2026: MCP intro, MCP architecture overview, MCP security
 * best practices, HubSpot MCP developer page. FactoryJet builds MCP servers (confirmed by Bhavesh 17 Oct 2026).
 * No FactoryJet prices, no running or hosting cost figures, no team location.
 * The FAQ array below is the single source for the visible FAQ and FAQPage JSON-LD.
 */

const SRC = {
  intro: 'https://modelcontextprotocol.io/docs/getting-started/intro',
  arch: 'https://modelcontextprotocol.io/docs/learn/architecture',
  security: 'https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices',
  hubspot: 'https://developers.hubspot.com/mcp',
};

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;
const IMG = '/images/blog/custom-mcp-server-erp-crm-mid-sized-companies-2026';

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
                <td key={j} className={`p-3 border border-gray-200 align-top${j === 0 ? ' font-semibold font-fj-mono text-xs' : ''}`}>{c}</td>
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
    q: 'What is a custom MCP server?',
    a: 'A custom MCP server is one you build for your own systems, rather than one a vendor publishes. It speaks the Model Context Protocol, the open standard for connecting AI applications to external systems, and exposes a set of tools (actions), resources (data) and prompts that you choose. Any MCP-capable AI client, such as Claude or ChatGPT, can then use exactly those and nothing else.',
  },
  {
    q: 'Can I create my own MCP server?',
    a: 'Yes. MCP is open source, with official SDKs in several languages and reference servers to learn from. A basic server that wraps one API can be written quickly. A production server for an ERP or CRM takes more care: authentication, narrow permissions, input validation, logging and handling of retries and errors.',
  },
  {
    q: 'Is it hard to create an MCP server?',
    a: 'The protocol part is not hard; the SDKs handle most of it. The hard parts are the same as any integration: knowing exactly which fields an action needs in your ERP, handling records that do not match, making writes safe to retry, scoping permissions tightly, and following the MCP authorization and security guidance for remote servers.',
  },
  {
    q: 'What is the structure of an MCP server?',
    a: 'According to the MCP architecture overview, a server exposes three core primitives: tools (executable functions the AI can invoke, such as API calls or database queries), resources (data sources that provide context, such as records or file contents) and prompts (reusable templates). It communicates over one of two transports: stdio for local servers, or Streamable HTTP for remote servers.',
  },
  {
    q: 'Do I need a custom MCP server if my software vendor already has one?',
    a: 'Check first. Several vendors now publish official servers; HubSpot\'s developer page, for example, describes an MCP server that gives any MCP-compatible AI tool or agent secure read and write access to your HubSpot CRM data. Build custom when there is no official server, when you need narrower or business-level tools, or when one action has to span several systems.',
  },
  {
    q: 'Why would a company build an MCP server for its ERP?',
    a: 'To let AI assistants and agents use ERP data and actions safely without each one being integrated separately. One server, exposing only approved actions such as check stock, get a customer\'s price or create a draft sales order, can serve Claude, ChatGPT, an Agentforce agent calling it through an API, or your own custom agent, all under the same permissions and logs.',
  },
  {
    q: 'What tools should an ERP MCP server expose?',
    a: 'Business-level actions, not raw database access: find customer, get order status, check stock for an item and date, get the price for a customer and item, create a draft sales order, attach a document to a record. Each tool should do one job, validate its inputs and return structured results. Avoid a general "run any query" tool.',
  },
  {
    q: 'Can I run MCP servers locally?',
    a: 'Yes. Local servers use the stdio transport and run on the same machine as the AI client, which suits personal tools and development. The MCP security guidance warns that local servers run with the same privileges as the client unless sandboxed, so company systems are usually better served by a remote server you host and control.',
  },
  {
    q: 'How can I host my own MCP server?',
    a: 'Run it as a remote server using the Streamable HTTP transport in a cloud account your company owns, behind HTTPS, with OAuth-based authentication as MCP recommends. Put it close to the systems it calls, log every request, and give it its own service credentials for each downstream system.',
  },
  {
    q: 'How do you secure an MCP server?',
    a: 'Follow the MCP security best practices: never accept tokens that were not issued for your server (token passthrough is explicitly forbidden), implement per-client consent if you proxy a third-party API, validate redirects, block requests to private network addresses, bind any state handles to the authenticated user, and keep scopes minimal. Then apply least privilege to every downstream system.',
  },
  {
    q: 'What is token passthrough and why does it matter for MCP servers?',
    a: 'Token passthrough is when an MCP server accepts an access token issued for a different service and forwards it downstream. The MCP guidance says it is explicitly forbidden because it bypasses the server\'s own controls, breaks the audit trail and lets a stolen token be reused. Your server should accept only tokens issued for it and use its own credentials downstream.',
  },
  {
    q: 'Can an MCP server write data, or only read?',
    a: 'Both. Tools can perform actions, including writes. For company systems, start read-only, then add write tools one at a time, each with validation, limits and an idempotency key so a retry cannot create a duplicate. High-impact writes, such as payments or price changes, should create drafts or requests for a person to approve.',
  },
  {
    q: 'Which AI clients can use an MCP server?',
    a: 'The MCP documentation names AI assistants such as Claude and ChatGPT and development tools such as Visual Studio Code and Cursor among supported clients. Your own custom agents can use MCP servers too. That is the main reason to build one server rather than separate integrations for each AI tool.',
  },
  {
    q: 'Are MCP servers obsolete?',
    a: 'No. MCP is an active open standard with a published specification, SDKs and a security guide that are still being updated in 2026. What changes is the detail: protocol versions, recommended transports and features. Build your server on a maintained SDK and keep it updated, as you would any integration.',
  },
  {
    q: 'What does an MCP server cost to run?',
    a: 'It depends on traffic, where it is hosted and the systems behind it. FactoryJet quotes the build, and any support you choose, as fixed prices in writing after a short scoping call. Hosting can sit in your own cloud account at cost, and we can keep managing the server, the APIs and the maintenance so your team does not have to.',
  },
  {
    q: 'What is the difference between an MCP server and an API?',
    a: 'An API is how software exposes functions to other software. An MCP server usually wraps one or more APIs and presents them in a standard shape AI clients understand: named tools with descriptions and input schemas that the model can discover and call. You still need the underlying API; MCP makes it usable by many AI clients without separate integrations.',
  },
  {
    q: 'Can one MCP server cover several systems?',
    a: 'Yes, and it is often the point. A "create draft sales order" tool might check the customer in the CRM, price and stock in the ERP, and attach the source PDF from email storage, then return one result. Combining steps into business-level tools gives the AI fewer, safer choices than exposing each system separately.',
  },
  {
    q: 'Do we need MCP if we are building a custom AI agent anyway?',
    a: 'Not strictly; a custom agent can call your APIs directly. MCP pays off when more than one AI client will use the same systems, such as staff using Claude or ChatGPT plus an automated agent, because permissions, logs and tools are defined once. It also makes swapping AI providers easier.',
  },
  {
    q: 'Is there a free MCP server I can use for testing?',
    a: 'Yes. The MCP project publishes reference server implementations and a developer tool, the MCP Inspector, for testing servers. Use them to learn the protocol and test a client before connecting any company system. For your own data, build or configure a server that runs in your account with test credentials first.',
  },
  {
    q: 'Does FactoryJet build MCP servers?',
    a: 'Yes. We build custom MCP servers and API integrations for ERPs, CRMs and other business systems, with narrow business-level tools, scoped permissions and logging, hosted in your own cloud account if you want. You own the code. We show it working against your own systems before you sign.',
  },
];

export const post: BlogPost = {
  id: '774',
  slug: 'custom-mcp-server-erp-crm-mid-sized-companies-2026',
  title: 'Custom MCP Server for Your ERP or CRM: What It Takes to Let ChatGPT and Claude Use Your Data (2026)',
  excerpt:
    'When a mid-sized company should build a custom MCP server, when a vendor\'s official one is enough, the tools an ERP MCP server should expose, how MCP servers are structured and hosted, and the security rules from the MCP documentation that a company server must follow.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Oct 18, 2026',
  dateModified: 'Oct 18, 2026',
  readTime: '13 min read',
  imageUrl: `${IMG}/hero.webp`,
  imageAlt:
    'Seen from behind, two engineers study a monitor showing one central box connected by lines to five smaller boxes, one of them orange, an orange water bottle on the desk.',
  meta: {
    title: 'Custom MCP Server for Your ERP or CRM (2026)',
    description:
      'Build a custom MCP server for your ERP or CRM: when you need one, what tools to expose, how to host it, and the MCP security rules to follow.',
  },
  keyTakeaways: [
    'MCP is an open-source standard for connecting AI applications to external systems. A custom MCP server exposes only the tools, data and prompts you choose.',
    'Check for an official server first. HubSpot, for example, publishes one that gives MCP-compatible AI tools secure read and write access to HubSpot CRM data.',
    'Build custom when your ERP or legacy system has no server, when you need narrower business-level tools, or when one action spans several systems.',
    'Expose business actions (check stock, get customer price, create draft sales order), not raw database access.',
    'Host company servers remotely over Streamable HTTP in your own cloud account, with OAuth as MCP recommends, rather than as local servers.',
    'Follow the MCP security guidance: token passthrough is explicitly forbidden; keep scopes minimal; validate everything.',
    'US searches for "custom mcp server" rose about 70-fold in a year (DataForSEO, 17 October 2026).',
  ],
  faqs,
  content: (
    <article>
      {/* Answer-first block */}
      <div className="bg-white border-2 border-[#E5DFD7] rounded-xl p-6 sm:p-8 mb-10">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-3">The short answer</p>
        <p className="text-lg leading-relaxed mb-0">
          A <strong>custom MCP server</strong> lets AI clients such as ChatGPT, Claude or your own agents use your ERP or
          CRM through a small set of approved actions, like checking stock or creating a draft order, under your
          permissions and logs. Use a vendor&apos;s official server when one exists and fits. Build custom when your
          system has none, or when you need business-level tools that span several systems.
        </p>
      </div>

      <div className="bg-[#FAF8F5] border-l-4 border-[#B23E13] p-5 rounded-r-lg mb-10">
        <p className="text-sm text-[#1F2937] leading-relaxed mb-0">
          <strong>We build custom MCP servers and integrations, so weigh this page with that in mind.</strong> Facts
          about MCP come from the official Model Context Protocol documentation and HubSpot&apos;s developer page, opened
          on 17 and 18 October 2026 and linked where they appear. Search figures are our own DataForSEO measurement for
          the US on 17 October 2026.
        </p>
      </div>

      <p>
        US searches for &quot;custom mcp server&quot; reached about 1,000 a month in October 2026, roughly 70 times a
        year earlier, alongside 1,000 for &quot;salesforce mcp server&quot;, 590 for &quot;servicenow mcp server&quot;
        and 390 for &quot;hubspot mcp server&quot; (DataForSEO, 17 October 2026). Behind those numbers is a simple
        request from staff at mid-sized companies: &quot;let me ask ChatGPT or Claude about our orders and customers,
        safely.&quot; An MCP server is how you answer it.
      </p>

      <h2 id="what-is-mcp">What MCP is, in one paragraph</h2>
      <p>
        The <a href={SRC.intro} {...ext}>Model Context Protocol documentation</a> describes MCP as an open-source
        standard for connecting AI applications to external systems, and compares it to a USB-C port for AI
        applications. An AI application (the host) creates one client per server it connects to. The server is your
        program, and it decides what the AI can see and do.
      </p>

      <h2 id="structure">How an MCP server is structured</h2>
      <Table
        head={['Part', 'What it is (MCP architecture overview)', 'In an ERP server']}
        rows={[
          ['Tools', 'Executable functions the AI can invoke: API calls, database queries', 'check_stock, create_draft_sales_order'],
          ['Resources', 'Data sources that provide context: file contents, records, API responses', 'The price list structure, a customer record'],
          ['Prompts', 'Reusable templates that structure interactions', 'A template for answering an order-status question'],
          ['stdio transport', 'Local, between processes on one machine', 'Development and personal tools'],
          ['Streamable HTTP transport', 'Remote; supports standard HTTP authentication; MCP recommends OAuth', 'A company server in your cloud account'],
        ]}
      />
      <p>
        Source: the <a href={SRC.arch} {...ext}>MCP architecture overview</a>, read on 18 October 2026.
      </p>

      <h2 id="official-or-custom">Official server or custom server?</h2>
      <p>
        Check your vendor first. HubSpot&apos;s <a href={SRC.hubspot} {...ext}>developer page</a>, for example, describes
        an MCP server that gives any MCP-compatible AI tool or agent secure read and write access to your HubSpot CRM
        data. If an official server covers what you need, use it.
      </p>
      <Table
        head={['Situation', 'Use', 'Why']}
        rows={[
          ['Your vendor publishes a server and its tools fit', 'Official server', 'Maintained by the vendor; nothing to build'],
          ['Your ERP or older system has no server', 'Custom server', 'Nothing else will expose it to AI clients'],
          ['The official server exposes more than you want AI to touch', 'Custom server in front', 'Narrower tools and your own limits'],
          ['One action spans CRM, ERP and email', 'Custom server', 'Business-level tools that combine systems'],
          ['Data sits on your own servers, not in the cloud', 'Custom server', 'Runs where it can reach the data'],
        ]}
      />

      <figure className="my-8">
        <img
          src={`${IMG}/server-room.webp`}
          alt="A bald man in a dark green shirt checks a laptop beside an open black network rack with neatly bundled grey cables, an orange cable reel on the floor."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          A company MCP server runs where it can reach your systems, under your own accounts and logs.
        </figcaption>
      </figure>

      <h2 id="erp-tools">The tools an ERP MCP server should expose</h2>
      <p>
        Here is a starting tool list for an order-to-cash server on an ERP such as NetSuite, Odoo, SAP Business One or
        ERPNext. Each tool does one business job, validates inputs, and returns structured results.
      </p>
      <Table
        head={['Tool', 'What it does', 'Access']}
        rows={[
          ['find_customer', 'Look up a customer by name, email, account number or PO', 'Read'],
          ['get_order_status', 'Status, ship date and tracking for an order or PO number', 'Read'],
          ['check_stock', 'Available quantity for an item at a location and date', 'Read'],
          ['get_customer_price', 'Price for a customer and item from their price list', 'Read'],
          ['get_invoice', 'Invoice details or a copy by number', 'Read'],
          ['create_draft_sales_order', 'Creates a draft (never released) with an idempotency key from customer and PO', 'Write, draft only'],
          ['attach_document', 'Attaches a source PDF to an order or customer record', 'Write'],
        ]}
      />
      <p>
        Notice what is missing: no &quot;run any query&quot;, no price changes, no payments, no deletes. Those either do
        not belong in an AI tool or belong behind a person&apos;s approval. Our{' '}
        <a href="/blog/agentic-ai-architecture-mid-sized-companies-2026">agentic AI architecture guide</a> shows where
        this server sits between the agent and your systems.
      </p>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg my-8">
        <h3 className="text-lg font-bold mb-3">Want AI to use your ERP or CRM safely?</h3>
        <p className="mb-4">
          Tell us the system and the questions or actions your team wants from ChatGPT, Claude or an agent. In a
          30-minute call with founder Bhavesh Barot we will check whether an official server exists, sketch the tool
          list, and point out what should need approval. FactoryJet quotes a fixed price in writing after that call.
        </p>
        <a
          href="https://calendly.com/bhavesh-factoryjet/30min"
          {...ext}
          className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors"
        >
          Talk to the Founder
        </a>
      </div>

      <h2 id="security">Security rules from the MCP documentation</h2>
      <p>
        The <a href={SRC.security} {...ext}>MCP security best practices</a> are written for implementers. The rules that
        matter most for a company server:
      </p>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>No token passthrough.</strong> Explicitly forbidden: accept only tokens issued for your server, and use your own credentials downstream.</li>
        <li><strong>Per-client consent</strong> if your server proxies a third-party API with a static client ID, to avoid the confused deputy problem.</li>
        <li><strong>Exact redirect validation</strong> and single-use, short-lived OAuth state values.</li>
        <li><strong>Block private network addresses</strong> when fetching URLs, to prevent server-side request forgery.</li>
        <li><strong>Bind state handles to the user</strong>; never treat holding a handle as proof of identity.</li>
        <li><strong>Minimal scopes</strong>, with step-up only when a higher-risk tool is first used.</li>
      </ol>
      <p>
        On top of that, apply least privilege downstream: the server&apos;s own ERP account should be read-only except
        for the specific write tools you list. The wider agent risks are in our{' '}
        <a href="/blog/ai-agent-security-risks-controls-2026">AI agent security guide</a>.
      </p>

      <h2 id="build-steps">How we approach a custom MCP server</h2>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>List the questions and actions staff and agents need, in their words.</li>
        <li>Check for an official server and what it already exposes.</li>
        <li>Turn the list into business-level tools with input schemas and clear descriptions.</li>
        <li>Map each tool to the exact API calls and fields in your systems.</li>
        <li>Start read-only; add write tools one at a time, with validation and idempotency keys.</li>
        <li>Host remotely in your cloud account with OAuth, logging and rate limits.</li>
        <li>Test from each AI client that will use it, including requests it should refuse.</li>
      </ol>

      <h2 id="mcp-vs-agent">MCP server, custom agent, or both</h2>
      <p>
        A custom agent can call your APIs directly, so MCP is not required for one agent. It pays off when several AI
        clients will use the same systems: staff in Claude or ChatGPT, a support agent, an order-entry agent. Permissions,
        tools and logs are then defined once. If your company runs on Salesforce, an Agentforce agent can reach the same
        backend through an API built alongside the server; see{' '}
        <a href="/blog/agentforce-pricing-vs-custom-ai-agent-2026">Agentforce pricing vs a custom AI agent</a>.
      </p>

      <h2 id="how-factoryjet-works">How FactoryJet builds MCP servers</h2>
      <p>
        We build custom MCP servers and API integrations for ERPs, CRMs and other business systems, and we have worked on
        Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs. You own the code and repository from day one, and
        hosting can sit in your own cloud account at cost. We show the server working against your own systems before
        you sign. FactoryJet quotes the build, and any support you choose, as fixed prices in writing after a short
        scoping call.
      </p>
      <p>
        See <a href="/services/ai-integration-services">AI integration services</a>,{' '}
        <a href="/services/erp-ai-agents">AI agents for ERP systems</a>,{' '}
        <a href="/services/netsuite-ai-agents">NetSuite AI agents</a> and{' '}
        <a href="/services/odoo-ai-agents">Odoo AI agents</a>.
      </p>

      <h2 id="sources">Sources</h2>
      <p className="text-sm text-gray-600">Pages opened and read on 17 and 18 October 2026.</p>
      <ul className="list-disc pl-6 space-y-1 text-sm mb-8">
        <li><a href={SRC.intro} {...ext}>Model Context Protocol, What is the Model Context Protocol (MCP)?</a></li>
        <li><a href={SRC.arch} {...ext}>Model Context Protocol, Architecture overview</a></li>
        <li><a href={SRC.security} {...ext}>Model Context Protocol, Security Best Practices</a></li>
        <li><a href={SRC.hubspot} {...ext}>HubSpot, MCP server developer page</a></li>
        <li>Our own measurement: US search volumes and year-on-year change, DataForSEO, 17 October 2026</li>
      </ul>

      <div className="bg-[#FAF8F5] border-2 border-[#E5DFD7] p-6 sm:p-8 rounded-xl my-10 shadow-sm">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">
          MCP server scoping for mid-sized US companies
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-3">
          Let ChatGPT, Claude and your agents use your ERP, under your rules
        </h3>
        <p className="text-[#4B5563] text-base leading-relaxed mb-6">
          Tell us the system and what people want to ask or do. We will design the tool list, the permissions and the
          approvals, and show the server working against your own data before you sign. FactoryJet quotes a fixed price
          in writing after a short scoping call.
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
            href="/services/ai-integration-services"
            className="inline-flex items-center gap-2 bg-white text-[#1F2937] border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            See AI integration services
          </a>
        </div>
      </div>
    </article>
  ),
};
