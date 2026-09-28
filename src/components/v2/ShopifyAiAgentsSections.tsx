import { Fragment } from 'react';
import HeroInlineForm from '@/components/HeroInlineForm';
import MidPageCTA from '@/components/v2/MidPageCTA';
import {
  SHOPIFY_AI_FAQ_CATEGORIES,
  SHOPIFY_AI_FAQS,
  SRC_OWASP_LLM06,
  SRC_SHOPIFY_DRAFT_ORDERS,
  SRC_SHOPIFY_FLOW,
  SRC_SHOPIFY_RATE_LIMITS,
  SRC_SHOPIFY_REST_LEGACY,
  SRC_SHOPIFY_SIDEKICK,
  SRC_SHOPIFY_WEBHOOKS,
  SRC_SHOPIFY_WEBHOOK_DUPES,
} from './ShopifyAiAgentsFaqs';
import './AiAgentDevelopmentSections.css';
import './ShopifyAiAgentsSections.css';

/*
 * Shopify AI Agent Development (/services/shopify-ai-agents), built 2026-09-28 on the
 * current US design system ("Family A"), mirroring /services/ai-development.
 *
 * Why this page exists: the 2026-09-17 AI buyer sweep found that narrow integration pages
 * earn AI citations (the Shopify + Zendesk support question cited our support page) and
 * that ChatGPT checks shopify.com before naming an agency. No page covered custom AI agents
 * for Shopify store OPERATIONS (orders, wholesale, returns, inventory, ERP), where both
 * FactoryJet focus lines meet.
 *
 * Page ownership (keep it that way):
 *   - this page: AI agents for Shopify store operations
 *   - /services/ai-customer-support-agents: support ticket agents (Zendesk, Gorgias)
 *   - /services/ai-agent-development: agents for any business, any system
 *   - /blog/best-ai-agents-for-ecommerce-2026: ready-made tool comparison
 *
 * Static server component. The only client code is HeroInlineForm.
 * AGENT_JOBS and shopifyAiBreadcrumbs also feed the Service and BreadcrumbList JSON-LD.
 * FAQ array lives in ShopifyAiAgentsFaqs.ts and feeds the accordion AND FAQPage JSON-LD.
 * Images are existing files in public/images (no new generation). No FactoryJet prices.
 */

export const shopifyAiBreadcrumbs = [
  { name: 'Home', url: 'https://factoryjet.com/' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
  { name: 'Shopify AI Agents', url: 'https://factoryjet.com/services/shopify-ai-agents' },
];

/** H1 parts; page.tsx joins them for the WebPage headline so schema and page never drift. */
export const SHOPIFY_AI_H1_LEAD = 'Shopify AI Agent Development:';
export const SHOPIFY_AI_H1_EMPHASIS = 'Agents That Work Your Orders, Returns and Wholesale';

const COST_GUIDE = '/blog/what-is-an-ai-agent-cost-2026';
const EXT = { target: '_blank', rel: 'noopener nofollow' } as const;
const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

/** The Shopify agents we build. Listicle on the page, OfferCatalog in the Service schema. */
export const AGENT_JOBS: ReadonlyArray<{ href?: string; icon: string; title: string; trigger: string; body: string; guard: string; systems: string[] }> = [
  { icon: 'M4 4h16v16H4zM8 9h8M8 13h5', title: 'Order Exception Agent',
    trigger: 'A new order is created in Shopify',
    body: 'Checks every order against your rules and history: address problems, mismatched billing and shipping, unusual quantities, a SKU that is out of stock at the warehouse. Tags the order, writes a one-line reason and routes it to the right person.',
    guard: 'Tags and notes only. It never cancels or edits an order.',
    systems: ['Shopify Admin API', 'Webhooks', 'Shopify Flow'] },
  { href: '/services/shopify-plus-b2b', icon: 'M6 3h9l4 4v14H6V3Zm9 0v4h4M9 12h6M9 16h4', title: 'Wholesale PO-to-Draft-Order Agent',
    trigger: 'A buyer emails a purchase order as a PDF or spreadsheet',
    body: 'Reads the PO, matches the buyer to their company record, matches each line to your SKUs and their price list, and creates a Shopify draft order. Lines it cannot match, like a retired part number, go to your sales team with the reason.',
    guard: 'Creates drafts. A person completes the order.',
    systems: ['Shopify B2B', 'Draft orders', 'Gmail or Outlook'] },
  { icon: 'M4 12a8 8 0 1 0 3-6.2M4 4v4h4', title: 'Returns and Exchanges Agent',
    trigger: 'A customer asks to return or exchange an item',
    body: 'Reads the request, finds the order, checks it against your return window and item rules, and prepares the return or exchange with the right reason code. Clear cases are ready in one click; edge cases go to a person with the policy line quoted.',
    guard: 'Refunds always need a person above the limit you set.',
    systems: ['Shopify returns', 'Loop or AfterShip', 'Helpdesk'] },
  { icon: 'M3 7h18M3 12h18M3 17h10', title: 'Inventory and Reorder Agent',
    trigger: 'Stock drops below a level, or every morning',
    body: 'Compares Shopify stock by location with sales speed and open purchase orders in your ERP or spreadsheet, then drafts a reorder list for your buyer, grouped by supplier. When a supplier confirms, it checks the ship date and price against the PO.',
    guard: 'Drafts reorder lists. A buyer sends every PO.',
    systems: ['Shopify inventory', 'NetSuite or Odoo', 'Google Sheets'] },
  { href: '/b2b-ecommerce', icon: 'M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14', title: 'Shopify-to-ERP Reconciliation Agent',
    trigger: 'Every few hours, and on every sync error',
    body: 'Compares recent Shopify orders, refunds and stock with what landed in NetSuite, Odoo or SAP Business One. When a record is missing or different, it explains the gap in plain words and drafts the fix for your ops team to approve.',
    guard: 'Read-only on the ERP until you approve a fix.',
    systems: ['NetSuite', 'Odoo', 'SAP Business One', 'Celigo'] },
  { href: '/services/ecommerce-development', icon: 'M4 5h16v14H4zM8 9h8M8 13h8M8 17h4', title: 'Catalog and Product Data Agent',
    trigger: 'A supplier sheet arrives, or a product is missing data',
    body: 'Drafts product titles, descriptions, tags and metafields from supplier data in your brand voice, checks them against your rules (required fields, banned claims, size charts) and saves them to Shopify as drafts for review.',
    guard: 'Products stay unpublished until a person approves.',
    systems: ['Products API', 'Metafields', 'Bulk operations'] },
  { href: '/services/ai-customer-support-agents', icon: 'M4 5h16v11H8l-4 4V5Z', title: 'Order Status and Support Agent',
    trigger: 'A where-is-my-order or order-change email arrives',
    body: 'Finds the order in Shopify, reads the tracking status, and drafts a reply inside your helpdesk with the facts filled in. Address changes and cancellations are checked against fulfillment status first. Support has its own page.',
    guard: 'Sensitive cases go to a person with the order attached.',
    systems: ['Zendesk', 'Gorgias', 'Shopify orders'] },
];

/** Every guardrail we build in. Each item is [bold lead, rest of the line]. */
const GUARDRAILS: ReadonlyArray<{ title: string; lead: string; items: ReadonlyArray<readonly [string, string]> }> = [
  { title: 'Shopify connection', lead: 'Built the way Shopify tells app developers to build.', items: [
    ['A custom app on your store', ' with its own token, installed and owned by you'],
    ['Only the API scopes the job needs', ', such as read orders and write draft orders, nothing more'],
    ['GraphQL Admin API', ', because Shopify made REST legacy in October 2024'],
    ['Paced to your plan\'s API limit', ', so the agent never slows your other apps'],
    ['Pinned API version', ', upgraded on purpose, not by surprise'],
  ] },
  { title: 'Events and reliability', lead: 'Shopify says webhooks can repeat, arrive out of order or go missing. We plan for all three.', items: [
    ['Duplicate check on X-Shopify-Webhook-Id', ', so one order never gets two replies'],
    ['No reliance on event order', ': the agent re-reads the order before acting'],
    ['Scheduled reconciliation job', ' that catches any event that never arrived'],
    ['Error alerts to a person', ', never silent failure'],
    ['Idempotent writes', ' so a retry cannot create a second draft order'],
  ] },
  { title: 'Approvals and limits', lead: 'The agent prepares. Your team decides anything with money attached.', items: [
    ['Drafts, tags and notes by default', '; final changes only where you approve them'],
    ['Refunds, discounts and price changes', ' behind a code rule and a person above your limit'],
    ['Daily spend cap', ' on the AI model so a loop cannot run up a bill'],
    ['An off switch', ' your team can flip without calling us'],
    ['Full action log', ': every input, decision and change, kept in your account'],
  ] },
  { title: 'Accuracy and testing', lead: 'If nobody measured it before launch, nobody knows if it works.', items: [
    ['Test set from your real orders and emails', ', with the answer your best person would give'],
    ['Pass mark agreed before the build', ', not after'],
    ['Edge cases on purpose', ': split shipments, partial refunds, B2B terms, bundles'],
    ['Prompt-injection tests', ' using instructions hidden in customer emails'],
    ['Monthly re-scoring', ' against the same set after launch'],
  ] },
];

/** The named systems these agents work with. */
const SYSTEMS: ReadonlyArray<{ group: string; items: string }> = [
  { group: 'Shopify', items: 'GraphQL Admin API, webhooks, draft orders, Shopify B2B, Shopify Flow, metafields, bulk operations, inventory by location' },
  { group: 'ERP and finance', items: 'NetSuite (SuiteTalk REST, RESTlets), Odoo, SAP Business One, QuickBooks Online, Xero' },
  { group: 'Helpdesk', items: 'Zendesk, Gorgias, Gmail, Outlook and shared inboxes' },
  { group: 'Returns and shipping', items: 'Shopify returns, Loop, AfterShip, ShipStation, your 3PL\'s API or order feed' },
  { group: 'Connectors already in place', items: 'Celigo, Shopify Flow and existing ERP syncs: the agent works alongside them' },
  { group: 'AI models', items: 'OpenAI, Anthropic and Google models, picked per step on your test cases' },
];

function DirectoryFaqAccordion() {
  return (
    <div className="faqlist">
      {SHOPIFY_AI_FAQ_CATEGORIES.map((category) => (
        <Fragment key={category.id}>
          <div className="faq-category" id={category.id}>{category.label}</div>
          {SHOPIFY_AI_FAQS.filter((faq) => faq.category === category.id).map((faq) => (
            <details className="faqitem" data-faq-item key={faq.id}>
              <summary data-faq-question>
                <span className="qid">{faq.id}</span>
                <span className="qtext">{faq.question}</span>
                <span className="chev" aria-hidden="true">+</span>
              </summary>
              <p className="ans" data-faq-answer>
                {faq.answer}
                {faq.link && (
                  <>
                    {' '}
                    {faq.link.external
                      ? <a className="faqsrc" href={faq.link.url} {...EXT}>{faq.link.label} ↗</a>
                      : <a className="faqsrc" href={faq.link.url}>{faq.link.label} ↗</a>}
                  </>
                )}
              </p>
            </details>
          ))}
        </Fragment>
      ))}
    </div>
  );
}

export default function ShopifyAiAgentsSections() {
  return (
    <div className="aiAgentPage shopAiPage">
      <nav className="crumbs" aria-label="Breadcrumb">
        <div className="wrap">
          {shopifyAiBreadcrumbs.map((item, index) => (
            <Fragment key={item.url}>
              {index > 0 && ' / '}
              {index === shopifyAiBreadcrumbs.length - 1 ? <b aria-current="page">{item.name}</b> : <a href={item.url}>{item.name}</a>}
            </Fragment>
          ))}
        </div>
      </nav>
      <main id="shopify-ai-agents-content">
        {/* ═══ HERO ═══ */}
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Shopify AI Agents · Registered Shopify Partner</div>
              <h1>{SHOPIFY_AI_H1_LEAD} <span className="hero-emphasis">{SHOPIFY_AI_H1_EMPHASIS}</span></h1>
              <p className="lead" data-speakable>FactoryJet designs, builds and supports custom AI agents for Shopify stores in the US. They read orders, emails and your ERP, prepare the next step as a draft or a tag, and hand anything with money attached to your team. You own the code, and the team that built it stays on after launch.</p>
              <HeroInlineForm source="us_shopify_ai_agents_hero" region="us" submitLabel="Scope my Shopify agent" />
              <p className="hero-alt">Mainly need help with support tickets? See <a href="/services/ai-customer-support-agents">AI customer support agents</a>.</p>
            </div>

            <form className="specpanel" aria-label="Illustration of a wholesale purchase order handled by a Shopify AI agent">
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>AGENT RUN · EMAILED PO TO DRAFT ORDER</span>
                <span className="sys"><span>GRAPHQL</span><span>B2B</span><span>ERP</span></span>
              </div>
              <div className="workflow-controls">
                <label className="workflow-toggle" title="Pause or resume the animation">
                  <input type="checkbox" className="workflow-pause" aria-label="Pause animation" />
                  <svg className="pause-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="M5 3v10M11 3v10" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                  <svg className="play-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="m5 3 8 5-8 5Z" fill="currentColor" /></svg>
                </label>
                <button type="reset" className="workflow-replay" aria-label="Replay animation" title="Replay animation">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6a5 5 0 1 1 0 4M3 2v4h4" /></svg>
                </button>
              </div>
              <div className="specpanel-body" role="radiogroup" aria-label="Explore the agent run">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="shopai-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="M4 6h16v12H4zM4 7l8 6 8-6" /></svg></span>
                  <span className="idx">STEP 01</span>
                  <span className="title">Read the emailed PDF purchase order</span>
                  <span className="tag">READ</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="shopai-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="M4 5h6v6H4zM14 5h6M14 9h4M4 15h16M4 19h10" /></svg></span>
                  <span className="idx">STEP 02</span>
                  <span className="title">Match buyer, SKUs and price list in Shopify</span>
                  <span className="tag">MATCH</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="shopai-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="M8 8l-4 4 4 4M16 8l4 4-4 4" /></svg></span>
                  <span className="idx">STEP 03</span>
                  <span className="title">Check stock and credit terms in the ERP</span>
                  <span className="tag">CHECK</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="shopai-step" value="4" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="M12 3 3 7v5c0 5 9 9 9 9s9-4 9-9V7l-9-4Zm-4 9 3 3 5-6" /></svg></span>
                  <span className="idx">STEP 04</span>
                  <span className="title">Create a draft order for your team to complete</span>
                  <span className="tag">HOLD</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · the agent drafts. A person completes every order.</div>
            </form>
          </div>
        </section>

        <div className="ledger">
          <div className="wrap">
            <div className="ledgercell"><div className="k">Founded</div><div className="v"><strong className="ledger-number">2014</strong></div></div>
            <div className="ledgercell"><div className="k">Shopify</div><div className="v">Registered Shopify Partner. We build Shopify stores and the agents that run inside their operations.</div></div>
            <div className="ledgercell"><div className="k">What you own</div><div className="v">Code, prompts, test sets and logs, in your repository and cloud account. No license fee to us.</div></div>
            <div className="ledgercell"><div className="k">Track record</div><div className="v"><strong className="ledger-number">500+</strong> businesses served across web, commerce and AI work.</div></div>
          </div>
        </div>

        {/* ═══ ANSWER-FIRST FACTS ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">§ The Short Answer</div>
              <h2>What a Shopify AI Agent Does, and When You Need a Custom One</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><div><p data-speakable><span className="stat">A Shopify AI agent is software that does a store job in several steps through Shopify&apos;s official APIs: it reads an order or an email, decides what should happen under your rules, and prepares the action as a draft, a tag or a reply.</span> It is built on a large language model (LLM), the kind of AI behind ChatGPT and Claude, wrapped in code that limits what it may do.</p></div></div>
                <div className="fact"><div className="sec">§02</div><p><span className="stat">Try Shopify&apos;s own tools first.</span> Sidekick is Shopify&apos;s AI assistant in your admin, and it presents changes for your review before applying them. Shopify Flow is a free automation app on the Basic, Grow, Advanced and Plus plans. <a href={SRC_SHOPIFY_SIDEKICK} {...EXT}>Sidekick ↗</a> <a href={SRC_SHOPIFY_FLOW} {...EXT}>Flow ↗</a></p></div>
                <div className="fact"><div className="sec">§03</div><div><p><span className="stat">A custom agent earns its place when one of these is true:</span></p>
                  <ul>
                    <li><span><b>The job starts outside Shopify</b>, like a purchase order arriving by email as a PDF</span></li>
                    <li><span><b>It spans systems</b>, such as Shopify plus NetSuite, a 3PL or your helpdesk</span></li>
                    <li><span><b>Your rules are yours alone</b>: customer price lists, credit terms, return exceptions</span></li>
                    <li><span><b>You need proof</b>: a test score before launch and a log of every action after</span></li>
                  </ul></div></div>
                <div className="fact"><div className="sec">§04</div><p><span className="stat">Shopify made its REST Admin API legacy on October 1, 2024, and new public apps must use the GraphQL Admin API from April 1, 2025.</span> Any agent built today should be on GraphQL, or it starts life as technical debt. <a href={SRC_SHOPIFY_REST_LEGACY} {...EXT}>shopify.dev ↗</a></p></div>
                <div className="fact"><div className="sec">§05</div><p>FactoryJet is a registered Shopify Partner that builds both Shopify stores and AI agents. Bhavesh Barot, our founder, is involved in every AI project, the same team supports the agent after launch, and you own everything we build. If Sidekick, Flow or an app will do the job, we say so on the first call.</p></div>
              </div>
              <div className="factphoto">
                <img src="/images/us/commerce/woocommerce-to-shopify-people-laptop-orders.webp" alt="A store owner in his stockroom reviewing the day's orders on a laptop" width={1280} height={800} loading="lazy" decoding="async" />
                <div className="cap">THE PERSON STAYS IN CHARGE · THE AGENT PREPARES THE WORK</div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ COMPARISON ═══ */}
        <section className="section comparison" id="compare">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Compare</div>
              <h2>Sidekick vs Shopify Flow vs Helpdesk AI vs a Custom Shopify Agent</h2>
            </div>
            <div className="tablewrap">
              <table>
                <thead><tr><th>Option</th><th>What it is</th><th>Best for</th><th>Where it stops</th></tr></thead>
                <tbody>
                  <tr><th>Shopify Sidekick<br /><span className="mono tableSubLabel"><a href={SRC_SHOPIFY_SIDEKICK} {...EXT}>Shopify Help ↗</a></span></th><td>AI assistant inside your Shopify admin</td><td>A person asking questions, editing products or managing orders in the admin</td><td>Works when someone is using it. Does not watch your inbox or ERP on its own</td></tr>
                  <tr><th>Shopify Flow<br /><span className="mono tableSubLabel"><a href={SRC_SHOPIFY_FLOW} {...EXT}>Shopify Help ↗</a></span></th><td>Free rule-based automation: trigger, condition, action</td><td>Fixed rules, like tagging high-value orders or alerting on low stock</td><td>Cannot read a messy email or PDF, or judge which case it is looking at</td></tr>
                  <tr><th>Helpdesk AI agent<br /><span className="mono tableSubLabel">Gorgias, Zendesk, Intercom</span></th><td>AI agent built into your support tool</td><td>Answering routine support tickets from your help content</td><td>Lives in support. Rarely reaches wholesale orders, your ERP or reconciliation</td></tr>
                  <tr className="us"><th>Custom Shopify AI agent<br /><span className="mono tableSubLabel tableSubLabelAccent">This page</span></th><td>An agent built for one of your jobs, on a custom app you own</td><td>Jobs that start outside Shopify, cross systems or follow your own rules</td><td>Takes 5 to 14 weeks to build and needs support. Not worth it if an app already fits</td></tr>
                </tbody>
              </table>
            </div>
            <p className="tablenote">Most stores end up with a mix: Flow for fixed rules, a helpdesk agent for support, and one or two custom agents for the jobs no app covers. Comparing ready-made tools first? Read <a href="/blog/best-ai-agents-for-ecommerce-2026">the best AI agents for ecommerce</a>.</p>
          </div>
        </section>

        {/* ═══ AGENT JOBS (listicle) ═══ */}
        <section className="section platforms" id="agents">
          <div className="wrap">
            <div className="section-head plat-head">
              <div><div className="eyebrow">What We Build</div><h2>7 Shopify AI Agents We Build for Store Operations</h2></div>
              <p>Each one does one job, starts from a clear trigger, and has a hard limit on what it may change. Pick the one that costs your team the most hours today and start there.</p>
            </div>
            <div className="platlist" role="list">
              {AGENT_JOBS.map((job, i) => {
                const inner = (
                  <>
                    <span className="capid">AGT-{String(i + 1).padStart(2, '0')}</span>
                    <div className="plat-name">
                      <svg {...CAP_ICON}><path d={job.icon} /></svg>
                      <h3>{job.title}</h3>
                      <div className="systags">{job.systems.map((s) => <span key={s}>{s}</span>)}</div>
                    </div>
                    <div className="plat-fit"><span className="k">Starts when</span>{job.trigger}<span className="k guard-k">Hard limit</span>{job.guard}</div>
                    <p className="plat-build">{job.body}</p>
                    <span className="plat-go" aria-hidden="true">{job.href ? '↗' : ''}</span>
                  </>
                );
                return job.href
                  ? <a key={job.title} className="plat" role="listitem" href={job.href}>{inner}</a>
                  : <div key={job.title} className="plat" role="listitem">{inner}</div>;
              })}
            </div>
          </div>
        </section>

        {/* ═══ SYSTEMS ═══ */}
        <section className="section comparison" id="systems">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Integrations</div>
              <h2>The Systems Our Shopify Agents Read and Write</h2>
            </div>
            <div className="tablewrap">
              <table>
                <thead><tr><th>Area</th><th>Systems and APIs</th></tr></thead>
                <tbody>
                  {SYSTEMS.map((s) => <tr key={s.group}><th>{s.group}</th><td>{s.items}</td></tr>)}
                </tbody>
              </table>
            </div>
            <p className="tablenote">Official APIs only, never screen scraping. Speed is set by your plan: Shopify&apos;s GraphQL Admin API refills at 100 points a second on Standard plans, 200 on Advanced, 1,000 on Plus and 2,000 on Shopify for enterprise, and a single query can never cost more than 1,000 points. <a href={SRC_SHOPIFY_RATE_LIMITS} {...EXT}>shopify.dev rate limits ↗</a></p>
          </div>
        </section>

        {/* ═══ GUARDRAILS ═══ */}
        <section className="section changes" id="guardrails">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">How We Build It</div>
              <h2>20 Things We Build Into Every Shopify AI Agent</h2>
              <p>Four groups, 20 specific items. If an agency cannot hand you a list this specific, you are buying a demo, not something your store can depend on during a sale.</p>
            </div>
            {GUARDRAILS.map((group, i) => (
              <div className="agentdir-group chg-group" key={group.title}>
                <div className="agentdir-label">
                  <span className="capid">GRP-{String(i + 1).padStart(2, '0')}</span>
                  <h3>{group.title}</h3>
                  <p>{group.lead}</p>
                  <span className="mono agentdir-count">{group.items.length} items</span>
                </div>
                <ul className="chg-list">
                  {group.items.map(([bold, rest]) => <li key={bold}><span><b>{bold}</b>{rest}</span></li>)}
                </ul>
              </div>
            ))}
            <p className="tablenote">Sources: Shopify on <a href={SRC_SHOPIFY_WEBHOOKS} {...EXT}>webhook ordering and reconciliation</a> and <a href={SRC_SHOPIFY_WEBHOOK_DUPES} {...EXT}>duplicate deliveries</a>; OWASP on <a href={SRC_OWASP_LLM06} {...EXT}>excessive agency (LLM06:2025)</a>, the risk of giving an AI too many functions, permissions or too much autonomy.</p>
          </div>
        </section>

        <MidPageCTA
          headline="Know which Shopify job eats the most hours?"
          sub="Tell us the job and the systems involved. On a short call with the founder we will say whether Sidekick, Flow or an app can do it, and if not, what a custom agent involves and how many weeks each phase takes."
          label="Scope my Shopify agent"
        />

        {/* ═══ DEFINITION ═══ */}
        <section className="definition" id="definition">
          <div className="definition-copy">
            <div className="eyebrow">Term</div>
            <h2 className="term">Draft Order</h2>
            <p>A draft order is an order your staff prepare on a customer&apos;s behalf, for sales that come in by phone, email or in person. It only becomes a real order on your Orders page once it is paid or completed. <a href={SRC_SHOPIFY_DRAFT_ORDERS} {...EXT}>Shopify Help</a></p>
            <p>Why it matters for AI: a draft order is the safest place for an agent to write. The agent does the typing and matching, the draft waits, and a person on your team makes it real. We use the same pattern everywhere: tags on orders, unpublished products, reorder lists a buyer sends.</p>
          </div>
        </section>

        {/* ═══ COST ═══ */}
        <section className="section platforms" id="cost">
          <div className="wrap">
            <div className="section-head plat-head">
              <div><div className="eyebrow">Cost</div><h2>What a Shopify AI Agent Costs, and What Drives the Price</h2></div>
              <p>You pay for two things: the build, which we quote as a fixed price per phase after a scoping call, and running costs after launch. These five factors decide where your agent lands. For published market price ranges, see our <a href={COST_GUIDE}>AI agent cost guide</a>.</p>
            </div>
            <div className="platlist" role="list">
              <div className="plat" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>How many systems</h3></div><div className="plat-fit"><span className="k">Lower cost</span>Shopify only</div><p className="plat-build">Every extra system (an ERP, a 3PL, a helpdesk) adds its own API, permissions, test cases and failure modes. An agent that lives in Shopify alone is the simplest build.</p><span className="plat-go" aria-hidden="true"></span></div>
              <div className="plat" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Read or write</h3></div><div className="plat-fit"><span className="k">Lower cost</span>Reads and drafts</div><p className="plat-build">An agent that tags orders or drafts replies is cheaper to make safe than one that writes draft orders, and far cheaper than one allowed to change prices or refunds.</p><span className="plat-go" aria-hidden="true"></span></div>
              <div className="plat" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>How messy the input is</h3></div><div className="plat-fit"><span className="k">Lower cost</span>Clean Shopify data</div><p className="plat-build">Structured order data is easy. Scanned PDFs, free-text emails and supplier sheets with old part numbers need more testing before the agent is right often enough.</p><span className="plat-go" aria-hidden="true"></span></div>
              <div className="plat" role="listitem"><span className="capid">04</span><div className="plat-name"><h3>Volume and peaks</h3></div><div className="plat-fit"><span className="k">Watch for</span>Sales events, big imports</div><p className="plat-build">Order volume drives AI model usage, which you pay the model provider directly, and big jobs must be paced around your plan&apos;s API limit.</p><span className="plat-go" aria-hidden="true"></span></div>
              <a className="plat" role="listitem" href="/services/ai-agent-monitoring"><span className="capid">05</span><div className="plat-name"><h3>Support after launch</h3></div><div className="plat-fit"><span className="k">Monthly</span>Monitoring and fixes</div><p className="plat-build">Shopify versions its API, apps change their data and your policies move. A monthly plan covers re-scoring, fixes and improvements, scoped in advance so the cost is known.</p><span className="plat-go" aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <figure className="photobreak">
          <img src="/images/us/commerce/b2b-ecommerce-people-warehouse-team.webp" alt="Two warehouse staff checking a pallet of boxed orders against a clipboard" width={1280} height={800} loading="lazy" decoding="async" />
        </figure>

        {/* ═══ PROCESS ═══ */}
        <section className="section process" id="how">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Timeline</div>
              <h2>How We Build a Shopify AI Agent, Week by Week</h2>
            </div>
            <div className="timeline">
              <div className="tnode"><div className="idx">01</div><h3>Scope</h3><p>We sit with the people who do the job, agree one number to beat, and check whether Sidekick, Flow or an app already covers it.</p></div>
              <div className="tnode"><div className="idx">02</div><h3>Test set</h3><p>We collect real orders, emails and edge cases from your store, with the answer your best person would give, and agree a pass mark.</p></div>
              <div className="tnode"><div className="idx">03</div><h3>Prototype</h3><p>A working agent on a development store or read-only access, scored on the test set, with running cost per task. Usually 3 to 5 weeks in.</p></div>
              <div className="tnode"><div className="idx">04</div><h3>Build &amp; pilot</h3><p>Custom app, webhooks, approvals and logs, then a pilot on live orders with drafts only. One job on one or two systems: 5 to 8 weeks. Several systems: 8 to 14.</p></div>
              <div className="tnode"><div className="idx">05</div><h3>Launch &amp; support</h3><p>Rollout with your team, then monthly re-scoring and fixes from the people who built it.</p></div>
            </div>
            <div className="timelineAction">
              <a className="btn btn-primary" href="#hero">Scope my Shopify agent</a>
              <a className="btn btn-ghost" href={COST_GUIDE}>Read the cost guide</a>
            </div>
          </div>
        </section>

        {/* ═══ OWNERSHIP ═══ */}
        <section className="vlog" id="ownership">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">What You Own</div>
              <h2>Everything We Build Is Yours</h2>
              <p>We are a services team, not a platform you rent. When the project ends, this is what stays with you.</p>
            </div>
            <div className="ventries">
              <div className="ventry"><span className="vtag">CODE</span><h3>The agent and the custom app</h3><p>Source code in your own repository, the custom app installed on your store, and the agent running in your cloud account.</p></div>
              <div className="ventry"><span className="vtag">ACCOUNTS</span><h3>Your model and cloud bills</h3><p>You hold the accounts with the AI model provider and the host and pay them directly, with no markup through us.</p></div>
              <div className="ventry"><span className="vtag">PROOF</span><h3>Test sets and action logs</h3><p>The test cases, pass marks and monthly scores, plus a log of every input, decision and change the agent made.</p></div>
              <div className="ventry"><span className="vtag">HANDOVER</span><h3>Docs for whoever comes next</h3><p>Written for the developer after us. If you move the work in-house or to another team, the agent keeps running.</p></div>
            </div>
          </div>
        </section>

        {/* ═══ WHEN NOT TO HIRE US ═══ */}
        <section className="section platforms" id="build-or-buy">
          <div className="wrap">
            <div className="section-head plat-head">
              <div><div className="eyebrow">Honest Advice</div><h2>When You Should Not Build a Custom Shopify Agent</h2></div>
              <p>A custom agent is the right answer less often than AI vendors admit.</p>
            </div>
            <div className="platlist" role="list">
              <div className="plat" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>A fixed rule would do</h3></div><div className="plat-fit"><span className="k">Do this instead</span>Set up Shopify Flow</div><p className="plat-build">If you can write the job as &quot;when this, then that&quot;, Flow does it for free on most plans. No AI needed.</p><span className="plat-go" aria-hidden="true"></span></div>
              <div className="plat" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>It is only support</h3></div><div className="plat-fit"><span className="k">Do this instead</span>Turn on your helpdesk&apos;s AI agent</div><p className="plat-build">Gorgias, Zendesk and Intercom all sell AI agents for routine tickets. Set one up well first and build only for the gap.</p><span className="plat-go" aria-hidden="true"></span></div>
              <div className="plat" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>Low volume</h3></div><div className="plat-fit"><span className="k">Do this instead</span>Keep a person on it, use Sidekick</div><p className="plat-build">If the job takes an hour a week, the build and support will cost more than the time it saves.</p><span className="plat-go" aria-hidden="true"></span></div>
              <a className="plat" role="listitem" href="/services/shopify-development"><span className="capid">04</span><div className="plat-name"><h3>The store itself is the problem</h3></div><div className="plat-fit"><span className="k">Do this instead</span>Fix the store first</div><p className="plat-build">An agent cannot fix messy product data, broken apps or a slow theme. Clean the store up, then automate.</p><span className="plat-go" aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        {/* ═══ FAQ ═══ */}
        <section className="section faq" id="faq">
          <div className="wrap">
            <div className="faqwrap">
              <div className="faqintro">
                <div className="eyebrow">FAQ</div>
                <h2 className="faqHeading">Shopify AI Agent Questions, Answered Directly</h2>
                <p>{SHOPIFY_AI_FAQS.length} questions store owners ask ChatGPT, Perplexity and Google about AI agents for Shopify, answered without hedging.</p>
                <nav className="faq-catnav" aria-label="FAQ categories">
                  {SHOPIFY_AI_FAQ_CATEGORIES.map((category) => <a key={category.id} href={`#${category.id}`}>{category.label}</a>)}
                </nav>
              </div>
              <DirectoryFaqAccordion />
            </div>
          </div>
        </section>

        <section className="section referencesSection references" id="references">
          <div className="wrap">
            <div className="eyebrow">References &amp; Related</div>
            <div className="refs">
              <a href="/services/ai-agent-development">AI Agent Development</a>
              <a href="/services/ai-customer-support-agents">AI Customer Support Agents</a>
              <a href="/services/shopify-development">Shopify Development</a>
              <a href="/services/shopify-plus-b2b">Shopify Plus B2B</a>
              <a href="/services/ecommerce-development">Ecommerce Development</a>
              <a href="/b2b-ecommerce">B2B Ecommerce</a>
              <a href="/services/ai-agent-monitoring">AI Agent Monitoring &amp; Support</a>
              <a href={COST_GUIDE}>AI Agent Cost Guide</a>
              <a href="/blog/best-ai-agents-for-ecommerce-2026">Best AI Agents for Ecommerce</a>
              <a href="/blog/ai-agents-erp-netsuite-odoo-sap-business-one-2026">AI Agents Inside Your ERP</a>
              <a href={SRC_SHOPIFY_RATE_LIMITS} {...EXT}>Shopify: GraphQL Admin API Rate Limits</a>
              <a href={SRC_OWASP_LLM06} {...EXT}>OWASP: Excessive Agency</a>
            </div>
          </div>
        </section>

        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <h2>Tell Us the Shopify Job You Want an Agent to Handle</h2>
              <p>Send the job, the systems involved and what good looks like. We will tell you if an app will do, or what a custom agent involves, with a fixed quote per phase before any work starts.</p>
            </div>
            <div className="ctas">
              <a className="btn btn-primary" href="#hero">Scope my Shopify agent</a>
              <a className="btn btn-ghost" href="/contact">Talk to the founder</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
