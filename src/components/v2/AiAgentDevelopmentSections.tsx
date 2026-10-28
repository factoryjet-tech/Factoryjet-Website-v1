import { Fragment, type ReactNode } from 'react';
import { AI_AGENT_FAQ_CATEGORIES, AI_AGENT_FAQS } from './AiAgentDevelopmentFaqs';
import HeroInlineForm from '@/components/HeroInlineForm';
import './AiAgentDevelopmentSections.css';

export const breadcrumbs = [
  { name: 'Home', url: 'https://factoryjet.com/' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
];

/* Phased plan, proof by job type and the forwardable summary (added 2026-10-16).
   Terms match /services and /services/ai-automation: working software on your
   own data before you sign, fixed price per phase in writing, defect cover
   inside the build price, optional support with no monthly minimum. */
const PHASES = [
  { title: 'Scoping call', body: 'Bhavesh runs it. What starts the work, which systems it touches, how often it happens, and where a person must approve.' },
  { title: 'Demo on your data', body: 'Before you sign, the agent runs on a sample of your own documents, emails or calls, so you see what it gets right and where it hands off.' },
  { title: 'Pilot', body: 'One workflow live in your systems, with every draft approved by your team. Paid at milestones.' },
  { title: 'Production', body: 'More volume and the edge cases the pilot found, with monitoring and an alert when a step fails.' },
  { title: 'Rollout', body: 'More workflows, locations or systems, each scoped and priced on its own. Support after launch is optional, with no monthly minimum.' },
];

const PROOF = [
  {
    tag: 'RESEARCH AND ALERTS · LIVE',
    title: 'Washington Law Group',
    body: 'Reads news and police sources across all 50 states every two hours and emails the firm each crash that qualifies. The code is assigned to the firm.',
    links: [{ label: 'Read the case study', href: '/case-studies/washington-law-group-accident-detection-agent' }],
  },
  {
    tag: 'B2B ORDERING AND ERP · IN PROGRESS',
    title: 'Sow Easy',
    body: 'WooCommerce trade ordering connected to Odoo, so orders and stock live in one place.',
    links: [{ label: 'Read the case study', href: '/case-studies/sow-easy-distributor-portal' }],
  },
  {
    tag: 'TRADE REORDERING',
    title: 'GPSUK',
    body: 'Online ordering for trade buyers of promotional products who reorder the same items again and again.',
    links: [{ label: 'Read the case study', href: '/case-studies/gpsuk-promotional-products' }],
  },
  {
    tag: 'ORDERS, INVOICES AND RFQS',
    title: 'Your own workflow',
    body: 'For sales orders, vendor invoices and RFQs, we show the agent working on a sample of your own documents before you sign, so you judge it on your data, not on someone else\u2019s logo.',
    links: [
      { label: 'Sales order agents', href: '/services/sales-order-automation-ai-agents' },
      { label: 'Accounts payable', href: '/services/accounts-payable-automation' },
      { label: 'RFQ agent', href: '/services/ai-agent-development/rfq-bidding-agent' },
    ],
  },
];

const SUMMARY = [
  { k: 'What it is', v: 'An AI agent built for one job inside your systems, such as reading purchase orders or vendor invoices and drafting the record for your team to approve.' },
  { k: 'What you see first', v: 'The agent working on a sample of your own data, before any contract.' },
  { k: 'How it is priced', v: 'One fixed price per phase, in writing, paid at milestones. You decide on each next phase after seeing the last one work.' },
  { k: 'What you own', v: 'The code and the repository from day one. AI and hosting can run in your own accounts, at cost.' },
  { k: 'After launch', v: 'Defects fixed inside the build price for an agreed cover period. Support is optional, with no monthly minimum.' },
  { k: 'Who you deal with', v: 'Bhavesh Barot, founder of FactoryJet. He replies within 24 hours.' },
];

const SUMMARY_MAILTO = `mailto:?subject=${encodeURIComponent('AI agent project: FactoryJet summary')}&body=${encodeURIComponent(
  `${SUMMARY.map((r) => `${r.k}: ${r.v}`).join('\n\n')}\n\nFull page: https://factoryjet.com/services/ai-agent-development#summary`,
)}`;


function AiAgentFaqAccordion() {
  return (
    <div className="faqlist">
      {AI_AGENT_FAQ_CATEGORIES.map((category) => (
        <Fragment key={category.id}>
          <div className="faq-category" id={category.id}>{category.label}</div>
          {AI_AGENT_FAQS.filter((faq) => faq.category === category.id).map((faq) => (
            <details className="faqitem" data-faq-item key={faq.id}>
              <summary data-faq-question>
                <span className="qid">{faq.id}</span>
                <span className="qtext">{faq.question}</span>
                <span className="chev" aria-hidden="true">+</span>
              </summary>
              <p className="ans" data-faq-answer>
                {faq.answer}
                {'link' in faq && faq.link ? (
                  <>
                    {' '}
                    <a href={faq.link.href} style={{ color: 'var(--accent-text)', textDecoration: 'underline', textUnderlineOffset: 3 }}>{faq.link.label}</a>
                  </>
                ) : null}
              </p>
            </details>
          ))}
        </Fragment>
      ))}
    </div>
  );
}

const AGENT_DIRECTORY: { group: string; lead: string; items: { title: string; href: string; line: string }[] }[] = [
  { group: 'By job', lead: 'Agents that take a specific job off a team.', items: [
    { title: 'AI Receptionist', href: '/services/ai-receptionist', line: 'Answers every call 24/7 and books into your calendar' },
    { title: 'AI Customer Support Agents', href: '/services/ai-customer-support-agents', line: 'Resolves Zendesk, Gorgias and Intercom tickets' },
    { title: 'AI SDR & BDR Agents', href: '/services/ai-sdr', line: 'Replies to inbound leads, qualifies, books meetings' },
    { title: 'AI Scheduling Agent', href: '/services/ai-agent-development/ai-scheduling-agent', line: 'Booking, reminders and calendar sync' },
    { title: 'AI Marketing Agent', href: '/services/ai-agent-development/ai-marketing-agent', line: 'Email, SMS and CRM campaigns in your brand voice' },
    { title: 'AI Chatbot Development', href: '/services/ai-chatbot-development', line: 'Website chat that answers from your own content' },
  ] },
  { group: 'Operations & ERP', lead: 'Agents that work inside your back office systems.', items: [
    { title: 'RFQ Automation Agent', href: '/services/ai-agent-development/rfq-bidding-agent', line: 'Reads RFQs and drafts quotes for approval' },
    { title: 'Procurement & Supply Chain Agent', href: '/services/ai-agent-development/procurement-supply-chain-agent', line: 'Supplier emails, PO acknowledgements, open-PO follow-up' },
    { title: 'Manufacturing Operations Agent', href: '/services/ai-agent-development/manufacturing-operations-agent', line: 'Answers from ERP, CMMS and shop-floor data' },
    { title: 'AI Integration Services', href: '/services/ai-integration-services', line: 'Connect AI to your CRM, ERP and apps' },
    { title: 'AI Development Services', href: '/services/ai-development', line: 'Custom AI applications, retrieval and system integration' },
    { title: 'AI Automation', href: '/services/ai-automation', line: 'Lead follow-up, invoicing and reporting, automated' },
    { title: 'AI Agent Monitoring', href: '/services/ai-agent-monitoring', line: 'Support, evaluations and upkeep after launch' },
  ] },
  { group: 'By industry', lead: 'Agents built around one industry’s systems and rules.', items: [
    { title: 'Manufacturing', href: '/services/manufacturing-ai-agents', line: 'Quoting, ERP integration and supply chain' },
    { title: 'Healthcare', href: '/services/healthcare-ai-agents', line: 'HIPAA-aware receptionists and clinical workflows' },
    { title: 'Medical Scribe Agents', href: '/services/ai-medical-scribe-agents', line: 'Clinical notes and referral letters, signed by the doctor' },
    { title: 'Legal', href: '/services/legal-ai-agents', line: 'Intake, document review and practice management' },
    { title: 'Real Estate', href: '/services/ai-agents-for-real-estate', line: 'Lead response, showings and follow-up' },
    { title: 'Property Management', href: '/services/property-management-ai-agents', line: 'Leasing agents for AppFolio, Yardi and more' },
    { title: 'Dental Support Organizations', href: '/services/dental-support-organization-ai-agents', line: 'Central answering and scheduling for every location' },
    { title: 'Restaurants', href: '/services/restaurant-ai-voice-agents', line: 'Phone ordering straight into your POS' },
    { title: 'Automotive Dealers', href: '/services/automotive-ai-voice-agents', line: 'Service scheduling and DMS integration' },
    { title: 'Chemical & Pharma', href: '/services/chemical-pharmaceutical-ai-agents', line: 'Batch records, SDS and LIMS under GxP' },
    { title: 'Agriculture Equipment', href: '/services/agriculture-equipment-ai-agents', line: 'Parts lookup, fault triage and tech dispatch' },
  ] },
];

function AgentDirectory() {
  return (
    <section className="section agentdir" id="all-agents">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Directory</div>
          <h2>Every AI Agent We Build</h2>
          <p>Each agent has its own page: what it does, the systems it connects to, and how we build it.</p>
        </div>
        {AGENT_DIRECTORY.map((g) => (
          <div className="agentdir-group" key={g.group}>
            <div className="agentdir-label">
              <h3>{g.group}</h3>
              <p>{g.lead}</p>
              <span className="mono agentdir-count">{g.items.length} agents</span>
            </div>
            <ul className="agentdir-grid">
              {g.items.map((it) => (
                <li key={it.href}>
                  <a href={it.href}>
                    <span className="agentdir-t">{it.title}</span>
                    <span className="agentdir-l">{it.line}</span>
                    <span className="agentdir-go" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* Answer-first block. AI buyers (ChatGPT, Perplexity) ask use case, systems,
   cost, timeline and ownership questions, in that order (AI-BUYER-SWEEP-RESULTS-
   2026-09-17). Question wording follows what was measured on 2026-10-05:
   "What can an AI agent do for my business?" is a live Google People Also Ask,
   and "how much does an ai agent cost" is the most-asked AI assistant question
   in this cluster (DataForSEO AI keyword data, US). Cost figures are the
   ProductCrafters market range, re-fetched 2026-10-05 and labelled as a market
   reference, never as a FactoryJet price. Timeline wording matches
   /blog/what-is-an-ai-agent-cost-2026. Keep one client name off this block:
   the Washington Law Group case has its own section lower on the page. */
const SHORT_ANSWERS: { tag: string; q: string; a: ReactNode }[] = [
  {
    tag: 'WHAT IT DOES',
    q: 'What can an AI agent do for my business?',
    a: <>It takes one repeat job that follows your rules and does it inside your systems. Agents we build read RFQs and draft quotes in NetSuite or Odoo, answer order and return tickets for Shopify stores in Gorgias or Zendesk, qualify inbound leads into HubSpot, and chase open purchase orders with suppliers. It suits manufacturers, distributors, ecommerce brands and service firms that already run on real software.</>,
  },
  {
    tag: 'SYSTEMS',
    q: 'What will it connect to?',
    a: <>The tools you already pay for. ERP: NetSuite, SAP Business One, Odoo, Microsoft Dynamics 365. CRM: HubSpot, Salesforce. Help desk: Zendesk, Gorgias, Intercom, Freshdesk. Commerce: Shopify, Shopify Plus, BigCommerce. Plus email, Slack and anything with an API. If a system has no API, we tell you on the first call, because that changes the plan.</>,
  },
  {
    tag: 'COST',
    q: 'How much does an AI agent cost?',
    a: <>As a market reference, development firm ProductCrafters puts 2026 custom AI agent builds at about $5,000 to $180,000+. The number of systems the agent reads and writes to moves the price far more than the AI model does. We quote a fixed price for your scope after one call. Our <a href="/blog/what-is-an-ai-agent-cost-2026" style={{ color: 'var(--accent-text)', textDecoration: 'underline', textUnderlineOffset: 3 }}>AI agent cost guide</a> shows what moves the number, including monthly running costs.</>,
  },
  {
    tag: 'TIMELINE',
    q: 'How long does it take?',
    a: <>A pilot on one narrow workflow usually takes two to four weeks. A production agent with permissions, logging, approvals and monitoring usually takes six to twelve weeks. Most of that time goes into connecting your systems and testing edge cases.</>,
  },
  {
    tag: 'OWNERSHIP',
    q: 'What do I own when it is done?',
    a: <>Everything we build for you: the code in your own Git repository, the prompts, the test sets and the connectors. The agent can run in your own cloud account or on a dedicated server we manage for you. You pay the model provider, such as Anthropic or OpenAI, directly. There is no per-agent license from us, so you can keep us on for support or take the work in-house.</>,
  },
  {
    tag: 'AFTER LAUNCH',
    q: 'Who looks after it once it is live?',
    a: <>We do, if you want us to. Agents drift when your prices, policies or data change, so we watch accuracy, update prompts and models, and fix failures. That is what our <a href="/services/ai-agent-monitoring" style={{ color: 'var(--accent-text)', textDecoration: 'underline', textUnderlineOffset: 3 }}>AI agent monitoring and support</a> work covers. We don&apos;t hand over a demo and disappear.</>,
  },
];

function ShortAnswers() {
  return (
    <section className="section vlog" id="short-answers">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Answer First</div>
          <h2>AI Agent Development: The Short Answers</h2>
          <p style={{ marginTop: 18, color: 'var(--body)', fontSize: 16, lineHeight: 1.75 }}>The six things buyers ask us first, answered before the sales part of the page.</p>
        </div>
        <div className="ventries">
          {SHORT_ANSWERS.map((item) => (
            <div className="ventry" key={item.tag}>
              <span className="vtag">{item.tag}</span>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ECOMMERCE_AGENTS: { title: string; href: string; line: string; tags: string[] }[] = [
  {
    title: 'Support agent for Shopify stores',
    href: '/services/ai-customer-support-agents',
    line: 'Answers where-is-my-order, returns and address changes inside Gorgias or Zendesk, using live Shopify order data. Refunds above your limit go to a person.',
    tags: ['Shopify', 'Gorgias', 'Zendesk'],
  },
  {
    title: 'Quotes and reorders for B2B and wholesale',
    href: '/services/ai-agent-development/rfq-bidding-agent',
    line: 'Reads emailed RFQs and purchase orders, checks price lists and stock, and drafts the quote or order for your team to approve.',
    tags: ['NetSuite', 'Odoo', 'Shopify Plus B2B'],
  },
  {
    title: 'Order, stock and accounting sync',
    href: '/services/shopify-ai-agents',
    line: 'Keeps Shopify, inventory and accounting in step, and tells a person when an order and a record do not match.',
    tags: ['Shopify', 'QuickBooks', 'Xero'],
  },
  {
    title: 'Ready-made agent, or custom?',
    href: '/blog/best-ai-agents-for-ecommerce-2026',
    line: 'Our comparison of Gorgias, Fin, Zendesk, Shopify Sidekick and others by job, and the point where a custom agent is worth building.',
    tags: ['Buyer guide'],
  },
];

function EcommerceAgents() {
  return (
    <section className="section capabilities" id="ecommerce-agents">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Ecommerce</div>
          <h2>AI Agents for Ecommerce Stores</h2>
          <p style={{ marginTop: 18, color: 'var(--body)', fontSize: 16, lineHeight: 1.75 }}>Ecommerce is where we build most often: the systems are well documented and the repeat work is easy to count. If a tool you already pay for covers the job, we will say so before we quote a build.</p>
        </div>
        <div className="capgrid">
          {ECOMMERCE_AGENTS.map((item) => (
            <a className="cap" href={item.href} key={item.href}>
              <h3>{item.title}</h3>
              <p>{item.line}</p>
              <div className="systags">
                {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Sales and voice sections (added 2026-10-29). They carry the themes of the
   pages merged into this one by 301. No running-cost numbers here, by rule. */
const LIST_STYLE = { margin: '22px 0 0', paddingLeft: 20, color: 'var(--body)', fontSize: 16, lineHeight: 1.75 } as const;
const BODY_STYLE = { marginTop: 18, color: 'var(--body)', fontSize: 16, lineHeight: 1.75, maxWidth: '70ch' } as const;
const INLINE_LINK = { color: 'var(--accent-text)', textDecoration: 'underline', textUnderlineOffset: 3 } as const;

function SalesAgents() {
  return (
    <section className="section facts" id="ai-sales-agents">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Sales</div>
          <h2>AI Sales Agents for Lead Qualifying and CRM Entry</h2>
        </div>
        <p style={BODY_STYLE}>A sales agent works the first hour after a lead arrives. It reads the form or the email, checks the lead against the rules your team already uses, writes the record into HubSpot or Salesforce, and offers a meeting when the lead fits. Your reps keep the conversations that close deals, and they start each one with the history already in the CRM.</p>
        <ol style={LIST_STYLE}>
          <li>It reads every inbound lead from web forms, email and chat, including the ones that land at 11 pm on a Friday.</li>
          <li>It scores fit against your own rules, such as region, product line, order size or the systems the buyer runs. You write the rules once and the agent applies them the same way to every lead.</li>
          <li>It creates or updates the contact, company and deal in your CRM, with the source and the reason for the score attached, so nobody retypes a form.</li>
          <li>It replies to a qualified lead and offers times from the right rep&apos;s calendar. Anything unclear goes to a person.</li>
          <li>It logs every step, so a sales manager can see why a lead was marked cold and change the rule.</li>
        </ol>
        <p style={BODY_STYLE}>This is the work our <a href="/services/ai-sdr" style={INLINE_LINK}>AI SDR and BDR agents</a> page covers in detail. Before you sign, we run the agent on a sample of your recent leads, so you can set its scores beside your team&apos;s own calls.</p>
      </div>
    </section>
  );
}

function VoiceAgents() {
  return (
    <section className="section facts" id="ai-voice-agents">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Voice</div>
          <h2>AI Voice Agents for Inbound Calls and Booking</h2>
        </div>
        <p style={BODY_STYLE}>A voice agent answers the phone, works out what the caller wants, and does the job in your systems while the caller is still on the line. When it cannot help, it hands the call to a person with a short summary of what was said.</p>
        <ol style={LIST_STYLE}>
          <li>It answers every inbound call, after hours and during the lunch rush, and tells the caller at the start that it is an AI assistant.</li>
          <li>It books, moves or cancels appointments in your scheduling system and texts a confirmation.</li>
          <li>It takes phone orders for restaurants and writes them into the POS, reading items, modifiers and pickup time back to the caller.</li>
          <li>It books service visits for car dealers in the DMS, against real bay and technician slots.</li>
          <li>It transfers to a person when the caller asks, when it is unsure, or when the request falls outside its rules.</li>
        </ol>
        <p style={BODY_STYLE}>Each job has its own page: <a href="/services/ai-call-center-agents" style={INLINE_LINK}>AI call center agents</a> for support lines and contact centers, <a href="/services/restaurant-ai-voice-agents" style={INLINE_LINK}>restaurant AI voice agents</a> for phone orders, and <a href="/services/automotive-ai-voice-agents" style={INLINE_LINK}>automotive AI voice agents</a> for dealer service lanes. Before you sign, we run sample calls built from your own menu, calendar or service rules.</p>
      </div>
    </section>
  );
}

function TellUsTheWorkflow() {
  return (
    <section className="finalcta" id="tell-us">
      <div className="wrap">
        <div>
          <div className="eyebrow">Next Step</div>
          <h2 style={{ marginTop: 16 }}>Tell Us the Workflow You Want an Agent to Run</h2>
          <p>Send us three answers. On the first call we can tell you whether it is a build, a buy or a simpler automation, and what will drive the cost.</p>
          <ol style={{ margin: '22px 0 0', paddingLeft: 20, color: 'var(--body)', fontSize: 15, lineHeight: 1.75 }}>
            <li><strong style={{ color: 'var(--ink)' }}>What starts the work?</strong> An email, a form, a ticket, an RFQ or an order.</li>
            <li><strong style={{ color: 'var(--ink)' }}>Which systems does it touch?</strong> For example NetSuite, Shopify, HubSpot or Zendesk.</li>
            <li><strong style={{ color: 'var(--ink)' }}>How often does it happen, and who does it today?</strong> A rough weekly count is enough.</li>
          </ol>
          <p style={{ marginTop: 18, fontSize: 14 }}>Bhavesh, our founder, reads every enquiry and usually replies within 2 to 3 hours.</p>
        </div>
        <div className="finalcta-form">
          <HeroInlineForm
            region="us"
            source="services_ai_agent_development_tell_us"
            service="AI Agent Development"
            submitLabel="See a demo on my data"
            trustText="Working software on your own data before you sign. Founder replies within 24 hours."
          />
        </div>
      </div>
    </section>
  );
}

function WorkflowIcon({ step }: { step: number }) {
  const paths = [
    'M6 3h8l4 4v14H6V3Zm8 0v5h4M9 12h6M9 16h4',
    'M4 5h16M4 12h16M4 19h16M8 3v4M16 10v4M10 17v4',
    'M5 3h14v18H5V3Zm3 5h8M8 12h3M8 16h3M14 12h2M14 16h2',
    'M12 3 3 7v5c0 5 9 9 9 9s9-4 9-9V7l-9-4Zm-4 9 3 3 5-6',
  ];
  return (
    <span className="workflow-icon" aria-hidden="true">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d={paths[step]} />
      </svg>
    </span>
  );
}

function CapabilityDiagram({ kind }: { kind: number }) {
  return (
    <div className={`cap-diagram diagram-${kind}`} aria-hidden="true">
      <svg viewBox="0 0 440 160" fill="none" stroke="currentColor" strokeWidth="1.5">
        {kind === 0 && <>
          <path className="diagram-wire" d="M112 80h62m92 0h62" />
          <rect className="diagram-surface" x="36" y="31" width="76" height="98" rx="8" />
          <path d="M54 55h40M54 69h40M54 83h24M54 106h16" />
          <rect className="diagram-core" x="174" y="43" width="92" height="74" rx="12" />
          <path d="M201 80h38m-19-19v38M207 67l26 26m0-26-26 26" />
          <rect className="diagram-surface" x="328" y="31" width="76" height="98" rx="8" />
          <path d="M345 55h40M345 69h40m-32 31 9 9 16-18" />
        </>}
        {kind === 1 && <>
          <rect className="diagram-surface" x="45" y="24" width="350" height="112" rx="10" />
          <path className="diagram-faint" d="M65 52h310M65 80h310M65 108h310M105 40v80m76-80v80m76-80v80m76-80v80" />
          <path className="diagram-wire" d="M65 101h38l13-31 19 42 25-63 22 35h38l15-19 18 32 24-41 17 26h61l20-18" />
          <circle className="diagram-core" cx="375" cy="64" r="7" />
        </>}
        {kind === 2 && <>
          <path className="diagram-faint" d="M30 80h380" />
          {[20,32,48,28,62,90,116,82,46,66,98,120,76,38,58,86,56,32,18].map((height,index) => (
            <rect key={index} className="diagram-wave" x={46+index*19} y={80-height/2} width="5" height={height} rx="2.5" stroke="none" />
          ))}
        </>}
        {kind === 3 && <>
          <path className="diagram-wire" d="M134 50h43q15 0 15 15v30q0 15 15 15h44m55 0h30V50h40" />
          <rect className="diagram-surface" x="30" y="22" width="104" height="58" rx="10" />
          <path d="M48 41h68M48 55h42" />
          <rect className="diagram-surface" x="54" y="97" width="80" height="40" rx="8" />
          <path d="M69 116h48" />
          <rect className="diagram-core" x="251" y="82" width="55" height="55" rx="12" />
          <path d="m267 110 8 8 15-18" />
          <rect className="diagram-surface" x="366" y="28" width="44" height="44" rx="8" />
          <path d="M379 50h18m-9-9v18" />
        </>}
        {kind === 4 && <>
          <path className="diagram-wire" d="M105 80h52m125 0h52" />
          {[35,170,305].map((x,index) => <g key={x}>
            <rect className={index===2?'diagram-core':'diagram-surface'} x={x} y="35" width="100" height="90" rx="10" />
            <circle cx={x+50} cy="62" r="11" />
            <path d={`M${x+30} 99c0-24 40-24 40 0M${x+22} 112h56`} />
          </g>)}
        </>}
        {kind === 5 && <>
          <path className="diagram-wire" d="M90 40h58q20 0 20 20v20h104V60q0-20 20-20h58M90 120h58q20 0 20-20V80m104 0v20q0 20 20 20h58" />
          {[24,104].map(y=><g key={y}><rect className="diagram-surface" x="46" y={y} width="44" height="32" rx="6" /><rect className="diagram-surface" x="350" y={y} width="44" height="32" rx="6" /></g>)}
          <rect className="diagram-core" x="193" y="53" width="54" height="54" rx="12" />
          <path d="m214 69-9 11 9 11m12-22 9 11-9 11" />
        </>}
      </svg>
    </div>
  );
}

export default function AiAgentDevelopmentSections() {
  return (
    <div className="aiAgentPage">
      <nav className="crumbs" aria-label="Breadcrumb">
        <div className="wrap">
          {breadcrumbs.map((item, index) => (
            <Fragment key={item.url}>
              {index > 0 && ' / '}
              {index === breadcrumbs.length - 1 ? <b aria-current="page">{item.name}</b> : <a href={item.url}>{item.name}</a>}
            </Fragment>
          ))}
        </div>
      </nav>
      <main id="ai-agent-content">
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Service Specification</div>
              <h1>AI Agent Development for <span className="hero-emphasis">RFQ-to-Quote, Order Entry and ERP Work</span> in NetSuite and SAP</h1>
              <p className="lead">FactoryJet is an agentic AI development company. We design, build, integrate and support custom AI agents that follow your business rules and finish multi-step work inside the systems you already run: NetSuite, SAP, Odoo, Salesforce, HubSpot, Zendesk and Shopify. The jobs are specific: reading an emailed RFQ and drafting the quote, keying a customer PO in as a sales order, matching a vendor invoice to its purchase order. A person approves anything that matters. You own the code.</p>
              <div className="actions">
                <a className="btn btn-primary" href="#tell-us">See a demo on my data</a>
                <a className="btn btn-ghost" href="#short-answers">Cost, timeline, ownership</a>
              </div>
              <p style={{ marginTop: 14, color: 'var(--body)', fontSize: 14, lineHeight: 1.6 }}>Have a brief or RFP? Attach it at step 2. We scope, price and sign each phase on its own.</p>
            </div>
            <form className="specpanel" aria-label="Interactive RFQ workflow illustration">
              <div className="specpanel-bar">
                <span className="statusdot" />
                <span>PIPELINE · RFQ TO QUOTE</span>
                <span className="sys">
                  <span>NETSUITE</span>
                  <span>SAP</span>
                  <span>ODOO</span>
                </span>
              </div>
              <div className="workflow-controls">
                <label className="workflow-toggle" title="Pause or resume the workflow animation">
                  <input type="checkbox" className="workflow-pause" aria-label="Pause workflow animation" />
                  <svg className="pause-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="M5 3v10M11 3v10" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                  <svg className="play-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="m5 3 8 5-8 5Z" fill="currentColor" /></svg>
                </label>
                <button type="reset" className="workflow-replay" aria-label="Replay automatic workflow" title="Replay automatic workflow">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6a5 5 0 1 1 0 4M3 2v4h4" /></svg>
                </button>
              </div>
              <div className="specpanel-body" role="radiogroup" aria-label="Explore workflow steps">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="rfq-step" value="1" />
                  <WorkflowIcon step={0} />
                  <span className="idx">STEP 01</span>
                  <span className="title">Read incoming RFQ</span>
                  <span className="tag">READ</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="rfq-step" value="2" />
                  <WorkflowIcon step={1} />
                  <span className="idx">STEP 02</span>
                  <span className="title">Check pricing rules &amp; live inventory</span>
                  <span className="tag">VERIFY</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="rfq-step" value="3" />
                  <WorkflowIcon step={2} />
                  <span className="idx">STEP 03</span>
                  <span className="title">Compute and write quote</span>
                  <span className="tag">WRITE</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="rfq-step" value="4" />
                  <WorkflowIcon step={3} />
                  <span className="idx">STEP 04</span>
                  <span className="title">Human approval before send</span>
                  <span className="tag">HOLD</span>
                </label>
              </div>
              <div className="specpanel-foot">ILLUSTRATIVE RFQ WORKFLOW: a missing rate is flagged for a person, never guessed.</div>
            </form>
          </div>
        </section>
        <div className="ledger">
          <div className="wrap">
            <div className="ledgercell">
              <div className="k">Founded</div>
              <div className="v">
                <strong className="ledger-number">2014</strong>
              </div>
            </div>
            <div className="ledgercell">
              <div className="k">Before you sign</div>
              <div className="v">We show you working software on your own data before you sign a contract.</div>
            </div>
            <div className="ledgercell">
              <div className="k">Pricing</div>
              <div className="v">A fixed price for an agreed scope, quoted after one call. No hourly meter running in the background.</div>
            </div>
            <div className="ledgercell">
              <div className="k">Track record</div>
              <div className="v"><strong className="ledger-number">500+</strong> businesses served across web, commerce, and AI engagements.</div>
            </div>
          </div>
        </div>
        <ShortAnswers />
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">§ Key Facts</div>
              <h2>What Actually Matters Before You Hire an AI Development Company</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p>An AI agent plans and acts across multiple steps. A chatbot answers one message at a time. If a vendor can&apos;t explain the difference, they&apos;re selling the second thing.</p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <p>Most AI agent projects fail at integration, and the model is rarely the problem. The agent has to read your real data, follow your real policies and hold up through weeks of real use.</p>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>Cost follows the number of systems the agent has to read and write to. As a market reference, development firm ProductCrafters puts 2026 builds at about $5,000 to $180,000+. A narrow pilot takes two to four weeks. Our <a href="/blog/what-is-an-ai-agent-cost-2026" style={{ color: 'var(--accent-text)', textDecoration: 'underline', textUnderlineOffset: 3 }}>AI agent cost guide</a> breaks down what it costs to build, run or rent one. Our <a href="/blog/enterprise-ai-agent-cost-2026" style={{ color: 'var(--accent-text)', textDecoration: 'underline', textUnderlineOffset: 3 }}>enterprise AI agent cost guide</a> sets out published build ranges by stage and company size.</p>
                </div>
                <div className="fact">
                  <div className="sec">§04</div>
                  <p>The three vendor categories are platforms (you build it yourself with LangGraph, CrewAI, or AutoGen), enterprise consultancies (wider transformation programs run by large teams), and specialist agentic AI development companies (custom-built, production-focused, faster than a consultancy, more accountable than a platform). If you are not sure an agent is the right first project, our <a href="/services/ai-consulting" style={{ color: 'var(--accent-text)', textDecoration: 'underline', textUnderlineOffset: 3 }}>AI consulting services</a> start with a readiness assessment and tell you.</p>
                </div>
                <div className="fact">
                  <div className="sec">§05</div>
                  <p>FactoryJet is an AI agent development company in the third category. We build custom AI agents into your ERP, CRM and internal systems, with a human approval step wherever a wrong decision would cost you.</p>
                </div>
              </div>
              <div className="factphoto">
                <img width="1000" height="667" src="/images/us/services/ai-agent-review-signoff.webp" alt="AI-generated illustration of a person reviewing and approving a connected workflow on a tablet" loading="lazy" decoding="async" />
                <div className="cap">FIELD REFERENCE · REVIEW &amp; SIGN‑OFF</div>
              </div>
            </div>
          </div>
        </section>
        <hr className="divider" />
        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Compare</div>
              <h2>How to Choose an AI Agent Development Company</h2>
            </div>
            <div className="tablewrap">
              <table>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>What they are</th>
                    <th>Best for</th>
                    <th>Trade‑off</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Platforms &amp; frameworks<br /><span className="mono tableSubLabel">LangGraph, CrewAI, AutoGen</span></th>
                    <td>Tools and SDKs for building agents yourself</td>
                    <td>Teams with strong internal engineering</td>
                    <td>You own security, integration, and maintenance</td>
                  </tr>
                  <tr>
                    <th>Enterprise consultancies<br /><span className="mono tableSubLabel">Accenture / IBM scale</span></th>
                    <td>Agentic AI as part of a larger transformation program</td>
                    <td>Large, regulated enterprises</td>
                    <td>Longer programs, sized for enterprise budgets</td>
                  </tr>
                  <tr className="us">
                    <th>Specialist development partners<br /><span className="mono tableSubLabel tableSubLabelAccent">FactoryJet</span></th>
                    <td>Custom agents built and wired into your real systems</td>
                    <td>Mid-market teams that want a working agent without a platform to manage</td>
                    <td>Vendor diligence matters more, the category is still maturing</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: 24, color: 'var(--body)', lineHeight: 1.75 }}>Our <a href="/blog/best-ai-agent-development-companies-2026" style={{ color: 'var(--accent-text)', textDecoration: 'underline' }}>comparison of ten AI agent development companies</a> links each firm&apos;s published offer and gives you one question to ask each of them. FactoryJet publishes it and is on the list, which is in alphabetical order. If you are weighing software against a custom build, read <a href="/blog/ai-agent-build-vs-buy-2026" style={{ color: 'var(--accent-text)', textDecoration: 'underline' }}>build or buy an AI agent</a>.</p>
          </div>
        </section>
        <section className="section facts" id="agentic-ai-development">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Agentic AI</div>
              <h2>Agentic AI Development Services</h2>
            </div>
            <div>
              <p style={{ color: 'var(--body)', lineHeight: 1.75 }}>Agentic AI development means building software where an AI model chooses its own next step or tool to reach a goal, inside limits you set. Most buyers use the term for the same work as AI agent development. As an agentic AI development company, our first job is to decide how much choice the model should get: a full agent, a fixed workflow with one AI step, or plain automation.</p>
              <p style={{ marginTop: 18, color: 'var(--body)', lineHeight: 1.75 }}>Take an emailed RFQ. The model reads the line items. Code checks quantities and prices against your rule book. An estimator approves the quote before it goes out. The model gets freedom where the reading is messy, and fixed rules run everything that touches money. Our <a href="/blog/what-is-agentic-ai" style={{ color: 'var(--accent-text)', textDecoration: 'underline' }}>plain-language guide to agentic AI</a> explains the terms.</p>
            </div>
          </div>
        </section>
        <section className="definition" id="definition">
          <div className="definition-image">
            <img className="kenburns" width="1400" height="933" src="/images/us/services/ai-agent-definition-workbench.webp" alt="AI-generated model of an agent connected to documents, a database, tools, and human approval" loading="lazy" decoding="async" />
          </div>
          <div className="definition-copy">
            <div className="eyebrow">Term</div>
            <h2 className="term">AI Agent</h2>
            <p>Software that plans toward a goal, decides what to do next based on context, takes actions across your tools, and adapts when something fails or escalates to a person when it should. That's different from a chatbot (answers one question), traditional automation (if X happens, do Y, no judgment involved), and a fully autonomous AI agent with no human check at all, which isn't what most businesses actually want running against real data. If a vendor's "agent" can't explain what it does when data is missing, it's an automation with better marketing. A marketing team sees the difference fast: our <a href="/services/ai-agent-development/ai-marketing-agent" style={{ color: 'var(--accent-text)', textDecoration: 'underline', textUnderlineOffset: 3 }}>AI marketing agent</a> drafts email, SMS and CRM campaigns in your brand voice, then waits for one-click approval before anything sends.</p>
          </div>
        </section>
        <section className="section capabilities" id="capabilities">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Capabilities</div>
              <h2>AI Agent Development Services</h2>
            </div>
            <div className="capgrid">
              <a className="cap cap-1" href="/services/ai-agent-development/rfq-bidding-agent">
                <div className="caphead">
                  <span className="capid">CAP‑01</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C94A1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
                    <path d="M14 3v5h5" />
                    <path d="m9 15 2 2 4-4" />
                  </svg>
                </div>
                <CapabilityDiagram kind={0} />
                <h3>ERP &amp; Procurement</h3>
                <p>Reads RFQs, checks pricing rules and inventory, and turns a request into a quote inside NetSuite, SAP, or Odoo.</p>
                <div className="systags">
                  <span>NetSuite</span>
                  <span>SAP</span>
                  <span>Odoo</span>
                </div>
              </a>
              <a className="cap cap-2" href="/services/ai-agent-development/manufacturing-operations-agent">
                <div className="caphead">
                  <span className="capid">CAP‑02</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C94A1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m12 14 4-4" />
                    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                  </svg>
                </div>
                <CapabilityDiagram kind={1} />
                <h3>Manufacturing Operations</h3>
                <p>Watches production data and surfaces exactly what a person needs to act on.</p>
                <div className="systags">
                  <span>MES</span>
                  <span>SCADA</span>
                </div>
              </a>
              <a className="cap cap-3" href="/services/ai-receptionist">
                <div className="caphead">
                  <span className="capid">CAP‑03</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C94A1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z" />
                  </svg>
                </div>
                <CapabilityDiagram kind={2} />
                <h3>AI Receptionist &amp; Voice Agents</h3>
                <p>Answers and routes business calls, hands off to a human the moment confidence drops.</p>
                <div className="systags">
                  <span>Telephony</span>
                </div>
              </a>
              <a className="cap cap-4" href="/services/ai-customer-support-agents">
                <div className="caphead">
                  <span className="capid">CAP‑04</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C94A1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
                    <rect x="2" y="13" width="4" height="6" rx="1.5" />
                    <rect x="18" y="13" width="4" height="6" rx="1.5" />
                  </svg>
                </div>
                <CapabilityDiagram kind={3} />
                <h3>Customer Support Agents</h3>
                <p>Resolves tickets against your real knowledge base, integrates with Zendesk and Shopify or Salesforce, escalates with full context.</p>
                <div className="systags">
                  <span>Zendesk</span>
                  <span>Shopify</span>
                  <span>Salesforce</span>
                </div>
              </a>
              <a className="cap cap-5" href="/services/ai-sdr">
                <div className="caphead">
                  <span className="capid">CAP‑05</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C94A1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 17 9 11 13 15 21 6" />
                    <path d="M15 6h6v6" />
                  </svg>
                </div>
                <CapabilityDiagram kind={4} />
                <h3>Sales &amp; SDR Agents</h3>
                <p>Qualifies leads and books meetings against your actual pipeline rules.</p>
                <div className="systags">
                  <span>HubSpot</span>
                  <span>Salesforce</span>
                </div>
              </a>
              <a className="cap cap-6" href="/services/ai-integration-services">
                <div className="caphead">
                  <span className="capid">CAP‑06</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C94A1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="6" cy="6" r="2.5" />
                    <circle cx="18" cy="18" r="2.5" />
                    <circle cx="18" cy="6" r="2.5" />
                    <path d="M8.2 6h7.6" />
                    <path d="M18 8.5V15.5" />
                  </svg>
                </div>
                <CapabilityDiagram kind={5} />
                <h3>Integration Services</h3>
                <p>Connecting an agent (yours or one we build) into CRMs, ERPs, and internal APIs.</p>
                <div className="systags">
                  <span>API</span>
                  <span>Webhooks</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <EcommerceAgents />
        <SalesAgents />
        <VoiceAgents />
        <TellUsTheWorkflow />
        <AgentDirectory />
        <section className="photobreak" id="photobreak">
          <img className="kenburns" width="2000" height="667" src="/images/us/services/ai-agent-tolerance-check.webp" alt="AI-generated model of a software workflow moving through architecture, processing, verification, and output" loading="lazy" decoding="async" />
          <div className="caption"><span className="dot" />FIELD REFERENCE · TOLERANCE CHECK</div>
        </section>
        <section className="section process" id="build">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Process</div>
              <h2>How a Project Runs, Phase by Phase</h2>
              <p>
                Each phase is scoped, priced and signed on its own, in writing. You decide on the next phase after you
                have seen the last one work. Defects found after launch are fixed inside the build price for a cover
                period agreed before work starts.
              </p>
            </div>
            <div className="timeline">
              {PHASES.map((p, i) => (
                <div className="tnode" key={p.title}>
                  <div className="idx">{String(i + 1).padStart(2, '0')}</div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              ))}
            </div>
            <div className="timelineAction">
              <a className="btn btn-primary" href="#tell-us">See a demo on my data</a>
            </div>
          </div>
        </section>
        <section className="section proofByJob" id="proof">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Proof</div>
              <h2>What We Have Built, by Job</h2>
              <p>Clients are named only where they agreed. Each entry links to the full write-up.</p>
            </div>
            <div className="proofgrid">
              {PROOF.map((p) => (
                <div className="ventry" key={p.title}>
                  <span className="vtag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                  <p className="prooflinks">
                    {p.links.map((l, i) => (
                      <Fragment key={l.href}>
                        {i > 0 && ' · '}
                        <a href={l.href}>{l.label}</a>
                      </Fragment>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="vlog" id="vlog">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow eyebrowBlue">Case Study</div>
              <h2>The AI Agent We Built for Washington Law Group</h2>
              <p>A personal injury firm needed to hear about serious commercial-vehicle crashes fast. The agent reads news and police sources across all 50 states every two hours and emails the firm the crashes that qualify.</p>
            </div>
            <div className="ventries">
              <div className="ventry">
                <span className="vtag">SOURCES</span>
                <h3>It never invents a name</h3>
                <p>An AI model pulls the facts from each article. Every name it returns is checked against the article text before it is saved. If the name is not there, it is dropped. This check has caught invented names in real runs.</p>
              </div>
              <div className="ventry">
                <span className="vtag">RULES</span>
                <h3>Fixed rules decide, the lawyer judges</h3>
                <p>A crash qualifies only if a commercial vehicle was involved, it was fatal or life-threatening, and it is 14 days old or newer. The agent shows what a source says about fault and never uses it to filter. That call stays with the firm.</p>
              </div>
              <div className="ventry">
                <span className="vtag">OPERATIONS</span>
                <h3>Owned by the client, run by us</h3>
                <p>The code is assigned to the firm under the agreement. FactoryJet runs and maintains the agent on a dedicated US server with named sign-in and encrypted daily backups. We publish no lead counts or revenue figures, because none have been measured yet.</p>
              </div>
            </div>
            <div className="timelineAction">
              <a className="btn btn-primary" href="/case-studies/washington-law-group-accident-detection-agent">Read the full case study</a>
            </div>
          </div>
        </section>
        <section className="section teamSummary" id="summary">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">For the person who signs</div>
              <h2>The Short Version to Forward to Your Team</h2>
              <p>The person who finds us is rarely the one who signs. This is the page in six lines.</p>
            </div>
            <dl className="summarycard">
              {SUMMARY.map((row) => (
                <div className="summaryrow" key={row.k}>
                  <dt>{row.k}</dt>
                  <dd>{row.v}</dd>
                </div>
              ))}
            </dl>
            <div className="actions">
              <a className="btn btn-ghost" href={SUMMARY_MAILTO}>Email this to a colleague</a>
              <a className="btn btn-primary" href="#tell-us">See a demo on my data</a>
            </div>
          </div>
        </section>
        <section className="section faq" id="faq">
          <div className="wrap">
            <div className="faqwrap">
              <div className="faqintro">
                <div className="eyebrow">FAQ</div>
                <h2 className="faqHeading">AI Agent Development, Answered Directly</h2>
                <p>Real questions buyers ask, no hedging.</p>
                <nav className="faq-catnav" aria-label="FAQ categories">
                  {AI_AGENT_FAQ_CATEGORIES.map((category) => (
                    <a key={category.id} href={`#${category.id}`}>{category.label}</a>
                  ))}
                </nav>
              </div>
              <AiAgentFaqAccordion />
            </div>
          </div>
        </section>
        <section className="section referencesSection references" id="references">
          <div className="wrap">
            <div className="eyebrow">References</div>
            <div className="refs">
              <a href="/blog/what-is-an-ai-agent-cost-2026">AI agent development cost in 2026: build, run or rent</a>
              <a href="/blog/ai-agent-build-vs-buy-2026">Build or buy an AI agent? An honest decision guide</a>
              <a href="/blog/ai-customer-support-agent-architecture-guide">AI customer support agent architecture: Zendesk, Intercom and Gorgias</a>
              <a href="/blog/ai-agents-erp-netsuite-odoo-sap-business-one-2026">AI agents inside NetSuite, Odoo and SAP Business One</a>
              <a href="/blog/best-ai-agents-for-ecommerce-2026">Best AI agents for ecommerce, and when a custom agent wins</a>
              <a href="/services/shopify-ai-agents">Shopify AI agents: orders, wholesale POs, returns and ERP sync</a>
              <a href="/services/erp-ai-agents">ERP AI agents: quotes, orders and invoices inside your ERP</a>
              <a href="/services/netsuite-ai-agents">NetSuite AI agents: RFQs, sales orders and vendor bills in NetSuite</a>
              <a href="/services/ai-automation">Compare: AI Agent Development vs. AI Automation vs. AI Integration Services</a>
              <a href="/blog/what-is-agentic-ai">What Is Agentic AI? A Plain-Language Guide</a>
              <a href="/tools/ai-agent-roi-calculator">AI Agent Cost Calculator</a>
              <a href="/blog/best-ai-consulting-firms-usa-2026">Who does AI strategy vs. who builds: AI consulting firms in the USA, compared</a>
            </div>
          </div>
        </section>
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <h2>Tell Us the Workflow, We'll Tell You the Truth</h2>
              <p>Tell us the workflow you want an agent to run and the systems it touches. We&apos;ll tell you honestly whether that&apos;s a build, a buy, or something in between, before you spend anything. Bhavesh, our founder, reads every enquiry and usually replies within 2 to 3 hours.</p>
            </div>
            <div className="finalcta-form">
              <HeroInlineForm
                region="us"
                source="services_ai_agent_development_final"
                service="AI Agent Development"
                submitLabel="See a demo on my data"
                trustText="Working software on your own data before you sign. Founder replies within 24 hours."
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
