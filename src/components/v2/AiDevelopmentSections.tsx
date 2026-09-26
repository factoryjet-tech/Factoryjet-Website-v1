import { Fragment, type ReactNode } from 'react';
import HeroInlineForm from '@/components/HeroInlineForm';
import MidPageCTA from '@/components/v2/MidPageCTA';
import {
  AI_DEV_FAQ_CATEGORIES,
  AI_DEV_FAQS,
  SRC_ANTHROPIC_TRAINING,
  SRC_ECFR_BA,
  SRC_OPENAI_DATA,
  SRC_OWASP_LLM01,
  SRC_RAG_PAPER,
} from './AiDevelopmentFaqs';
import './AiAgentDevelopmentSections.css';
import './AiDevelopmentSections.css';

/*
 * AI Development Services (/services/ai-development), built 2026-09-26 on the current
 * US design system ("Family A"): same shell and base CSS as /services/ai-seo and
 * /services/web-design (hero with inline form, CSS-only spec panel).
 *
 * Page ownership (written into the copy, keep it that way):
 *   - this page: custom AI software built into existing systems (RAG, integrations,
 *     model and fine-tuning choices, evaluation, deployment, security)
 *   - /services/ai-agent-development: agents that take actions
 *   - /services/ai-integration-services: connecting an AI tool to one existing app
 *   - /services/ai-consulting: strategy, readiness and roadmap
 *
 * Static server component. The only client code is HeroInlineForm.
 * Arrays exported here (CAPABILITIES, AI_DEV_COMPANIES, aiDevBreadcrumbs) also feed the
 * Service, ItemList and BreadcrumbList JSON-LD in page.tsx. The FAQ array lives in
 * AiDevelopmentFaqs.ts and feeds both the accordion and the FAQPage JSON-LD.
 *
 * Visuals: every intended image is a <figure data-visual-slot> placeholder, hidden
 * from visitors by AiDevelopmentSections.css until the visual pass fills it.
 * No prices on this page: cost questions link to the cost guide.
 */

export const aiDevBreadcrumbs = [
  { name: 'Home', url: 'https://factoryjet.com/' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI Development', url: 'https://factoryjet.com/services/ai-development' },
];

/* ─── External sources, each fetch-verified 2026-09-26 (HTTP 200, claim found in body) ─── */
// Census BTOS story (May 26, 2026): national AI use 19.8% as of May 3, 2026; 37% of firms with 250+ employees.
const SRC_CENSUS = 'https://www.census.gov/library/stories/2026/05/ai-use-businesses.html';
// Fortune on MIT NANDA "The GenAI Divide" (Aug 18, 2025): buying from specialized vendors and
// partnerships succeed about 67% of the time, internal builds one-third as often; issue is flawed integration.
const SRC_MIT = 'https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/';
// NIST AI RMF: released January 26, 2023, intended for voluntary use; GenAI profile NIST-AI-600-1 released July 26, 2024.
const SRC_NIST = 'https://www.nist.gov/itl/ai-risk-management-framework';
// OWASP Top 10 for LLM applications, 2025 edition (LLM01 to LLM10 names).
const SRC_OWASP_TOP10 = 'https://genai.owasp.org/llm-top-10/';

/** H1 parts; page.tsx joins them for the WebPage headline so schema and page never drift. */
export const AI_DEV_H1_LEAD = 'AI Development Services That Build AI';
export const AI_DEV_H1_EMPHASIS = 'Into Your Existing Systems';

const COST_GUIDE = '/blog/what-is-an-ai-agent-cost-2026';
const PAGE_KEY = 'ai-development';

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;
const DIAGRAM = { viewBox: '0 0 440 160', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5 } as const;
const EXT = { target: '_blank', rel: 'noopener nofollow' } as const;

/** Placeholder for the later visual pass. Hidden from visitors by CSS while status is "placeholder". */
function VisualSlot({ slot, kind, subject, ratio, className }: { slot: string; kind: 'photo' | 'diagram' | 'illustration' | 'mockup' | 'map'; subject: string; ratio: string; className?: string }) {
  return (
    <figure
      className={className ? `visual-slot ${className}` : 'visual-slot'}
      data-visual-slot={`${PAGE_KEY}:${slot}`}
      data-visual-kind={kind}
      data-visual-subject={subject}
      data-visual-ratio={ratio}
      data-visual-status="placeholder"
      aria-hidden="true"
    />
  );
}

const DIAGRAMS: ReactNode[] = [
  /* 1 custom app: three systems feed one app window */
  <g key="d1"><rect className="diagram-surface" x="30" y="20" width="80" height="30" rx="6" /><path d="M44 35h40" /><rect className="diagram-surface" x="30" y="65" width="80" height="30" rx="6" /><path d="M44 80h40" /><rect className="diagram-surface" x="30" y="110" width="80" height="30" rx="6" /><path d="M44 125h40" /><path className="diagram-wire" d="M110 35h50q14 0 14 14v31m-64 0h64m-64 45h50q14 0 14-14V80m0 0h56" /><rect className="diagram-core" x="230" y="30" width="180" height="100" rx="10" /><path d="M248 52h144M248 72h100M248 92h120M248 112h70" /></g>,
  /* 2 RAG: document stack, search lens, answer with source tab */
  <g key="d2"><rect className="diagram-surface" x="30" y="30" width="90" height="110" rx="8" /><rect className="diagram-surface" x="40" y="20" width="90" height="110" rx="8" /><path d="M54 45h60M54 60h60M54 75h44" /><rect className="diagram-core" x="54" y="88" width="60" height="14" rx="3" /><path className="diagram-wire" d="M130 95h60" /><circle className="diagram-surface" cx="212" cy="95" r="22" /><path d="m228 111 12 12" /><path className="diagram-wire" d="M234 95h66" /><path className="diagram-surface" d="M300 55h110q8 0 8 8v60q0 8-8 8h-70l-18 14v-14h-22q-8 0-8-8V63q0-8 8-8Z" /><path d="M316 78h80M316 94h56" /><rect className="diagram-core" x="316" y="106" width="34" height="10" rx="3" /></g>,
  /* 3 integration: hub with four systems */
  <g key="d3"><path className="diagram-wire" d="M220 80 110 36m110 44-110 44m110-44 110-44m-110 44 110 44" /><rect className="diagram-surface" x="50" y="18" width="90" height="36" rx="7" /><path d="M66 36h58" /><rect className="diagram-surface" x="50" y="106" width="90" height="36" rx="7" /><path d="M66 124h58" /><rect className="diagram-surface" x="300" y="18" width="90" height="36" rx="7" /><path d="M316 36h58" /><rect className="diagram-surface" x="300" y="106" width="90" height="36" rx="7" /><path d="M316 124h58" /><circle className="diagram-core" cx="220" cy="80" r="30" /><path d="M206 80h28M220 66v28" /></g>,
  /* 4 model choice: three model boxes scored, one picked */
  <g key="d4"><path className="diagram-faint" d="M40 136h360" /><rect className="diagram-surface" x="60" y="70" width="70" height="66" rx="6" /><rect className="diagram-core" x="185" y="36" width="70" height="100" rx="6" /><rect className="diagram-surface" x="310" y="88" width="70" height="48" rx="6" /><path d="m205 60 10 10 20-22" /><path d="M78 92h34M328 108h34" /></g>,
  /* 5 evaluation: checklist with pass bar */
  <g key="d5"><rect className="diagram-surface" x="40" y="18" width="200" height="124" rx="10" /><path d="m58 42 5 5 9-10M84 42h120M58 72l5 5 9-10M84 72h96M58 102l5 5 9-10M84 102h110" /><path className="diagram-faint" d="M58 126h160" /><path className="diagram-wire" d="M240 80h50" /><rect className="diagram-surface" x="290" y="40" width="120" height="80" rx="10" /><rect className="diagram-core" x="306" y="86" width="88" height="14" rx="4" /><path d="M306 64h60" /></g>,
  /* 6 secure deployment: shield around app, lock, logs */
  <g key="d6"><path className="diagram-surface" d="M120 20 60 42v38c0 34 60 60 60 60s60-26 60-60V42l-60-22Z" /><rect className="diagram-core" x="102" y="66" width="36" height="30" rx="4" /><path d="M110 66v-8a10 10 0 0 1 20 0v8" /><path className="diagram-wire" d="M180 80h70" /><rect className="diagram-surface" x="250" y="30" width="160" height="100" rx="10" /><path d="M268 52h120M268 70h96M268 88h110M268 106h80" /></g>,
];

export const CAPABILITIES: ReadonlyArray<{ href?: string; icon: string; title: string; body: string; tags: string[] }> = [
  { icon: 'M3 5h18v14H3V5Zm0 4h18M7 13h4M7 16h7', title: 'Custom AI Software & Internal Tools',
    body: 'Focused applications for one team or one job: a quote builder that reads your price rules, a compliance checker, a weekly report drafted from three systems. Built in your repository, on your cloud account.',
    tags: ['TypeScript', 'Python', 'Next.js', 'Your cloud'] },
  { icon: 'M6 3h9l4 4v14H6V3Zm9 0v4h4M9 12h6M9 16h4', title: 'RAG: Answers From Your Own Documents',
    body: 'Retrieval-augmented generation over your manuals, policies, contracts, catalogs and tickets, with your permissions applied and a source on every answer. Staff or customers ask; the system answers only from what you approved.',
    tags: ['Vector search', 'Hybrid search', 'Citations', 'Permissions'] },
  { href: '/services/ai-integration-services', icon: 'M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14', title: 'AI Integrated Into Existing Systems',
    body: 'AI that reads from and writes back to the software you already run: Shopify, BigCommerce, NetSuite, Salesforce, HubSpot, Zendesk, Microsoft 365. Drafts land where people work, and a person approves anything that matters.',
    tags: ['APIs', 'Webhooks', 'ERP', 'CRM'] },
  { icon: 'M12 3v4M12 17v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M3 12h4M17 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8', title: 'Model Choice & Fine-Tuning',
    body: 'We test models from OpenAI, Anthropic, Google and open-weight families on your cases, then pick on accuracy, cost and data terms. Fine-tuning only when prompting and RAG cannot hold the format or tone you need.',
    tags: ['OpenAI', 'Anthropic', 'Gemini', 'Open-weight'] },
  { href: '/services/ai-agent-monitoring', icon: 'M4 20V10m6 10V4m6 16v-8m4 8V7', title: 'Evaluation & Monitoring',
    body: 'A test set of real cases with known answers, a pass mark you approve before build, and the same score tracked every month after launch, so model updates and data drift are caught before your customers notice.',
    tags: ['Eval sets', 'Pass marks', 'Drift checks'] },
  { icon: 'M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6l-8-3Zm-3 9 2 2 4-5', title: 'Secure Deployment',
    body: 'Least-privilege access, secrets kept out of code, logs of every AI action, business terms that keep your data out of model training, and defenses mapped to the OWASP Top 10 for LLM applications.',
    tags: ['Role-based access', 'Audit logs', 'OWASP LLM'] },
];

/** Each item is [bold lead, rest of the line]. */
const DELIVERABLES: ReadonlyArray<{ title: string; lead: string; items: ReadonlyArray<readonly [string, string]> }> = [
  { title: 'Data and retrieval', lead: 'Most AI accuracy problems are data problems. This is where they get fixed.', items: [
    ['Data map', ' of every source the job needs, who owns it, and who may see it'],
    ['Read-only access first', ', write access only where the job needs it'],
    ['Document cleanup', ': duplicates, outdated versions and scanned PDFs handled'],
    ['Chunking designed per document type', ', so a contract clause is not split from its heading'],
    ['Permission-aware retrieval', ', so a user only gets answers from documents they may open'],
    ['Source citations', ' on every answer, linked to the page or record'],
  ] },
  { title: 'Integration and interface', lead: 'The AI has to live where your team already works, or it will not be used.', items: [
    ['Official APIs', ' for your store, ERP, CRM and helpdesk, not screen scraping'],
    ['Drafts, not silent writes', ': AI output lands as a draft a person approves'],
    ['Error handling', ' that alerts a person instead of failing quietly'],
    ['A simple screen', ' or a panel inside the tool your team already uses'],
    ['Model layer kept swappable', ', so a better or cheaper model is a config change'],
    ['Handover docs', ' written for the developer who comes after us'],
  ] },
  { title: 'Evaluation and accuracy', lead: 'If nobody measured it before launch, nobody knows if it works.', items: [
    ['Evaluation set', ' of real cases with the answer a skilled employee would give'],
    ['Pass mark agreed', ' with you before the production build starts'],
    ['Refusal tests', ': the system must say it does not know when sources are silent'],
    ['Adversarial cases', ' such as prompt-injection attempts hidden in emails'],
    ['Monthly re-scoring', ' against the same set after launch'],
    ['Plain report', ' of where it gets things wrong, not only where it is right'],
  ] },
  { title: 'Security and deployment', lead: 'Mapped to the OWASP Top 10 for LLM applications, then checked by a person.', items: [
    ['Least-privilege tokens', ' for every system the AI touches'],
    ['Actions run in code', ' with checks, not by trusting what the model says'],
    ['Human approval', ' on anything with money, customer or legal impact'],
    ['Business API terms', ' that keep your inputs out of model training'],
    ['Spend limits', ' per day so a loop cannot run up a surprise bill'],
    ['Audit log', ' of every prompt, source and action, kept in your account'],
  ] },
];

/** Where custom AI pays off first. Links go to the page that owns each job. */
const USE_CASES: ReadonlyArray<{ href?: string; name: string; flag?: string; fit: string; build: string }> = [
  { href: '/b2b-ecommerce', name: 'B2B order and quote intake', fit: 'Distributors and manufacturers that get orders by email and PDF', build: 'AI reads emailed purchase orders and RFQs, matches items to your catalog and customer pricing, and creates draft orders in the ERP for a person to release.' },
  { href: '/services/ai-customer-support-agents', name: 'Support answers from your policies', fit: 'Stores and service firms with repeat support questions', build: 'RAG over your return policy, warranty terms and order data inside Zendesk or Gorgias, with a suggested reply and a clean handoff for anything sensitive.' },
  { href: '/services/ecommerce-development', name: 'Catalog and product content', fit: 'Retailers with thousands of SKUs and messy supplier data', build: 'Product titles, descriptions and attributes drafted from supplier sheets in your brand voice, checked against rules, and pushed to Shopify or BigCommerce as drafts.' },
  { href: '/services/ai-workflow-automation', name: 'Finance and back-office documents', fit: 'Teams that key invoices, statements and forms by hand', build: 'Extraction from invoices and forms into your accounting system as draft entries, with the matching rules your bookkeeper already uses and nothing posted without approval.' },
  { href: '/services/ai-agent-development', name: 'Agents that take actions', flag: 'OWN PAGE', fit: 'Jobs that need several steps across systems within rules', build: 'When the AI must act, not just draft, it becomes an agent with extra design care: approvals, limits and rollback. Agents have their own page.' },
];

/** US AI development companies, details fetch-verified on their own sites 2026-09-26. */
export const AI_DEV_COMPANIES: ReadonlyArray<{ name: string; domain: string; base: string; offers: string; evidence: string }> = [
  { name: 'ScienceSoft', domain: 'scnsoft.com', base: 'McKinney, Texas (Dallas area)', offers: 'Says it has worked in AI since 1989 and has 750+ professionals. Covers AI consulting, end-to-end AI builds, adding AI to existing software, and publishes sample cost ranges.', evidence: '#5 on Google for ai development company and cited in its AI Overview, 26 Sep 2026.' },
  { name: 'Coherent Solutions', domain: 'coherentsolutions.com', base: 'Minneapolis, Minnesota', offers: 'AI strategy, product development, MLOps and implementation, with dedicated teams or project-based work, plus proof-of-concept and MVP builds.', evidence: '#6 on Google for ai development company, 26 Sep 2026.' },
  { name: 'EffectiveSoft', domain: 'effectivesoft.com', base: 'San Diego, California, with offices in San Francisco and Pittsburgh', offers: 'AI development services with a six-stage production delivery framework, from feasibility and data foundation to monitoring and cost management.', evidence: 'Cited in Google AI Overviews for ai development services and generative ai development services, 26 Sep 2026.' },
  { name: 'Azumo', domain: 'azumo.com', base: 'San Francisco, California (headquarters), nearshore teams', offers: 'Says it has built production AI since 2016. Offers AI engineers, RAG development, LLM fine-tuning and dedicated teams, and runs its own open-weight model platform.', evidence: 'Named by AI assistants for custom AI agent builds in our September 2026 buyer sweep.' },
];

function DirectoryFaqAccordion() {
  return (
    <div className="faqlist">
      {AI_DEV_FAQ_CATEGORIES.map((category) => (
        <Fragment key={category.id}>
          <div className="faq-category" id={category.id}>{category.label}</div>
          {AI_DEV_FAQS.filter((faq) => faq.category === category.id).map((faq) => (
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

export default function AiDevelopmentSections() {
  return (
    <div className="aiAgentPage aiDevPage">
      <nav className="crumbs" aria-label="Breadcrumb">
        <div className="wrap">
          {aiDevBreadcrumbs.map((item, index) => (
            <Fragment key={item.url}>
              {index > 0 && ' / '}
              {index === aiDevBreadcrumbs.length - 1 ? <b aria-current="page">{item.name}</b> : <a href={item.url}>{item.name}</a>}
            </Fragment>
          ))}
        </div>
      </nav>
      <main id="ai-development-content">
        {/* ═══ HERO ═══ */}
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">AI Development Company · Custom AI Software</div>
              <h1>{AI_DEV_H1_LEAD} <span className="hero-emphasis">{AI_DEV_H1_EMPHASIS}</span></h1>
              <p className="lead" data-speakable>FactoryJet designs, builds and supports custom AI for US businesses: answers from your own documents, AI connected to your store, ERP and CRM, and internal tools your team uses every day. Every build is tested on your real cases before launch. You own the code.</p>
              <HeroInlineForm source="us_ai_development_hero" region="us" submitLabel="Scope my AI build" />
              <p className="hero-alt">Need AI that takes actions on its own? See <a href="/services/ai-agent-development">AI agent development</a>.</p>
            </div>

            <form className="specpanel" aria-label="Illustration of how a custom AI build reaches production">
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>BUILD PATH · IDEA TO PRODUCTION</span>
                <span className="sys"><span>RAG</span><span>API</span><span>EVAL</span></span>
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
              <div className="specpanel-body" role="radiogroup" aria-label="Explore the build path">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="aidev-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="M4 5h6v6H4zM14 5h6M14 9h4M4 15h16M4 19h10" /></svg></span>
                  <span className="idx">STEP 01</span>
                  <span className="title">Scope one job with a number to beat</span>
                  <span className="tag">SCOPE</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="aidev-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="M6 3h9l4 4v14H6V3Zm9 0v4h4M9 12h6M9 16h4" /></svg></span>
                  <span className="idx">STEP 02</span>
                  <span className="title">Ground it in your data with RAG</span>
                  <span className="tag">GROUND</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="aidev-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="m4 12 4 4 8-9M14 17h6M17 14v6" /></svg></span>
                  <span className="idx">STEP 03</span>
                  <span className="title">Score it on your real cases</span>
                  <span className="tag">EVAL</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="aidev-step" value="4" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="M12 3 3 7v5c0 5 9 9 9 9s9-4 9-9V7l-9-4Zm-4 9 3 3 5-6" /></svg></span>
                  <span className="idx">STEP 04</span>
                  <span className="title">Ship with permissions and logs</span>
                  <span className="tag">HOLD</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · nothing goes live until it passes the test set you approved.</div>
            </form>
          </div>
        </section>

        <div className="ledger">
          <div className="wrap">
            <div className="ledgercell"><div className="k">Founded</div><div className="v"><strong className="ledger-number">2014</strong></div></div>
            <div className="ledgercell"><div className="k">Built into</div><div className="v">Shopify, BigCommerce, NetSuite, Salesforce, HubSpot, Zendesk and Microsoft 365, through their official APIs.</div></div>
            <div className="ledgercell"><div className="k">What you own</div><div className="v">Code, prompts, evaluation sets and docs, in your repository and cloud account. No license fee to us.</div></div>
            <div className="ledgercell"><div className="k">Track record</div><div className="v"><strong className="ledger-number">500+</strong> businesses served across web, commerce and AI work.</div></div>
          </div>
        </div>

        {/* ═══ ANSWER-FIRST FACTS ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">§ In Plain Terms</div>
              <h2>What AI Development Services Are, and When You Need Them</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><div><p data-speakable><span className="stat">AI development services turn a business job into working AI software: scoped, built on your data, connected to your systems, tested for accuracy and supported after launch.</span> Most projects today are built around a large language model (LLM), the kind of AI behind ChatGPT and Claude, wrapped in the code, data and checks that make it safe to rely on.</p></div></div>
                <div className="fact"><div className="sec">§02</div><p><span className="stat">About 1 in 5 US businesses (19.8%) used AI in the two weeks before the Census Bureau&apos;s early-May 2026 survey, and 37% of firms with 250 or more employees did.</span> Most businesses are still early, which is why the first project should be small, measurable and useful. <a href={SRC_CENSUS} {...EXT}>US Census Bureau, May 2026 ↗</a></p></div>
                <div className="fact"><div className="sec">§03</div><p><span className="stat">MIT researchers found that AI bought from specialized vendors and partners succeeded about 67% of the time, while internal builds succeeded about one-third as often.</span> The failures traced back to flawed integration with real workflows, not weak models. That is the gap an AI development partner is there to close. <a href={SRC_MIT} {...EXT}>Fortune on MIT NANDA, 2025 ↗</a></p></div>
                <div className="fact"><div className="sec">§04</div><p>Your data does not have to train anyone&apos;s model. OpenAI says data sent to its API has not been used for training since March 1, 2023 unless you opt in, and Anthropic says the same by default for its commercial products. We build on those business terms, never on personal accounts. <a href={SRC_OPENAI_DATA} {...EXT}>OpenAI ↗</a> <a href={SRC_ANTHROPIC_TRAINING} {...EXT}>Anthropic ↗</a></p></div>
                <div className="fact"><div className="sec">§05</div><p>FactoryJet builds AI into the systems a business already runs, with a bias toward commerce and B2B operations. Bhavesh Barot, our founder, is involved in every AI project, the same team supports it after launch, and you own everything we build. If a ready-made tool will do, we say so on the first call.</p></div>
              </div>
              <div className="factphoto">
                <VisualSlot slot="facts" kind="photo" ratio="3:2" subject="Two colleagues in a bright US office, seen over their shoulders, reviewing an internal AI assistant on a monitor that faces them; the screen shows an answer with a highlighted source document beside it; no readable text or logos" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ OWNERSHIP SPLIT ═══ */}
        <section className="section comparison" id="which-page">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Compare</div>
              <h2>AI Development vs AI Agents vs AI Integration vs AI Consulting</h2>
            </div>
            <div className="tablewrap">
              <table>
                <thead><tr><th>Service</th><th>What you get</th><th>Best for</th><th>Where it lives</th></tr></thead>
                <tbody>
                  <tr><th>AI consulting<br /><span className="mono tableSubLabel"><a href="/services/ai-consulting">Own page ↗</a></span></th><td>A readiness check, a ranked list of use cases and a roadmap</td><td>Teams that do not yet know which job to give AI first</td><td>Strategy, before any build</td></tr>
                  <tr className="us"><th>AI development<br /><span className="mono tableSubLabel tableSubLabelAccent">This page</span></th><td>Custom AI software: RAG, integrations, model choice, evaluation, secure deployment</td><td>A known job that needs your data and systems to work</td><td>Inside your systems, in your cloud account</td></tr>
                  <tr><th>AI integration services<br /><span className="mono tableSubLabel"><a href="/services/ai-integration-services">Own page ↗</a></span></th><td>An AI tool you already chose, connected properly to one app</td><td>Adding AI features to a CRM, store or helpdesk you keep</td><td>Inside one existing app</td></tr>
                  <tr><th>AI agent development<br /><span className="mono tableSubLabel"><a href="/services/ai-agent-development">Own page ↗</a></span></th><td>AI that takes multi-step actions within rules and approvals</td><td>Jobs where drafting is not enough and the AI must act</td><td>Across several systems</td></tr>
                  <tr><th>AI chatbot development<br /><span className="mono tableSubLabel"><a href="/services/ai-chatbot-development">Own page ↗</a></span></th><td>A customer-facing chat assistant with handoff to people</td><td>Support and pre-sales questions on your site</td><td>Your website and support channels</td></tr>
                </tbody>
              </table>
            </div>
            <p className="tablenote">Most projects start as AI development and add an agent later, once the data and integrations have proven themselves.</p>
          </div>
        </section>

        {/* ═══ DEFINITION ═══ */}
        <section className="definition" id="definition">
          <VisualSlot slot="definition" kind="diagram" ratio="3:2" className="definition-image" subject="Clean white diagram of retrieval-augmented generation: a question goes to a search step over a stack of company documents, the top passages are handed to a language model, and the answer comes out with an orange source tag pointing back to one document; no text labels" />
          <div className="definition-copy">
            <div className="eyebrow">Term</div>
            <h2 className="term">Retrieval-Augmented Generation (RAG)</h2>
            <p>RAG is a way of building AI so it answers from your documents instead of from memory. A search step finds the passages that match the question, the model writes its answer from those passages only, and the answer points back to its source. The idea was set out in a 2020 research paper by Patrick Lewis and colleagues (<a href={SRC_RAG_PAPER} {...EXT}>arXiv 2005.11401</a>), and it is now the standard pattern for business AI.</p>
            <p>Why it matters: prices, policies and stock change every week, and no model was trained on your private files. RAG keeps answers current without retraining, respects who may see what, and makes every answer checkable.</p>
          </div>
        </section>

        {/* ═══ CAPABILITIES ═══ */}
        <section className="section capabilities" id="capabilities">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Capabilities</div>
              <h2>Custom AI Development Services We Deliver</h2>
            </div>
            <div className="capgrid">
              {CAPABILITIES.map((cap, i) => {
                const inner = (
                  <>
                    <div className="caphead"><span className="capid">CAP-{String(i + 1).padStart(2, '0')}</span><svg {...CAP_ICON}><path d={cap.icon} /></svg></div>
                    <div className="cap-diagram" aria-hidden="true"><svg {...DIAGRAM}>{DIAGRAMS[i]}</svg></div>
                    <h3>{cap.title}</h3>
                    <p>{cap.body}</p>
                    <div className="systags">{cap.tags.map((t) => <span key={t}>{t}</span>)}</div>
                    {cap.href && <span className="cap-more">Open the page ↗</span>}
                  </>
                );
                return cap.href
                  ? <a key={cap.title} className={`cap cap-${i + 1}`} href={cap.href}>{inner}</a>
                  : <div key={cap.title} className={`cap cap-${i + 1}`}>{inner}</div>;
              })}
            </div>
          </div>
        </section>

        {/* ═══ ARCHITECTURE DECISION TABLE ═══ */}
        <section className="section comparison" id="architecture">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Architecture</div>
              <h2>Prompting, RAG, Fine-Tuning or an Agent: Which One Your Job Needs</h2>
            </div>
            <div className="tablewrap">
              <table>
                <thead><tr><th>Approach</th><th>Use it when</th><th>What it costs you to keep</th><th>Watch out for</th></tr></thead>
                <tbody>
                  <tr><th>Careful prompting<br /><span className="mono tableSubLabel">start here</span></th><td>The job is general writing, sorting or summarizing, and the facts are in the request itself</td><td>Low. Prompts are text, easy to change and test</td><td>Breaks down when the AI needs facts it was never given</td></tr>
                  <tr className="us"><th>RAG<br /><span className="mono tableSubLabel tableSubLabelAccent">most business projects</span></th><td>Answers must come from your documents or records, which change often</td><td>Medium. The search index needs refreshing and permissions kept in sync</td><td>Bad retrieval means wrong answers. Chunking and search quality decide accuracy</td></tr>
                  <tr><th>Fine-tuning<br /><span className="mono tableSubLabel">only with evidence</span></th><td>You need a fixed format, tone or classification that prompting cannot hold, and you have hundreds of good examples</td><td>Higher. Retrain when your examples or the base model change</td><td>It does not reliably teach new facts. Pair it with RAG when facts matter</td></tr>
                  <tr><th>Agent<br /><span className="mono tableSubLabel"><a href="/services/ai-agent-development">Own page ↗</a></span></th><td>The AI must take several steps across systems, not just draft</td><td>Highest. Tools, permissions and approvals all need upkeep</td><td>Excessive agency: OWASP lists it among the top LLM risks. Keep humans on consequential steps</td></tr>
                </tbody>
              </table>
            </div>
            <p className="tablenote">We make this call with evidence: at the prototype stage we build the simplest option that could work, score it on your test set, and only add complexity when the score says we must. Risk names come from the <a href={SRC_OWASP_TOP10} {...EXT}>OWASP Top 10 for LLM applications (2025)</a>.</p>
          </div>
        </section>

        {/* ═══ DELIVERABLES ═══ */}
        <section className="section changes" id="deliverables">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Implementation</div>
              <h2>What We Build Into Every AI Project, Item by Item</h2>
              <p>Four groups of work, 24 specific items. If an AI development company cannot hand you a list this specific, you are buying a demo, not a system your team can depend on.</p>
            </div>
            {DELIVERABLES.map((group, i) => (
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
          </div>
        </section>

        <MidPageCTA
          headline="Have an AI job that needs your real data and systems?"
          sub="Tell us the job and the tools involved. On a short call with the founder, we will tell you whether a ready-made tool will do, what a custom build would involve, and how many weeks each phase takes."
          label="Scope my AI build"
        />

        {/* ═══ USE CASES ═══ */}
        <section className="section platforms" id="use-cases">
          <div className="wrap">
            <div className="section-head plat-head">
              <div><div className="eyebrow">Where It Pays First</div><h2>Custom AI Projects That Earn Their Keep in Year One</h2></div>
              <p>The best first projects share three traits: a job people repeat daily, data you already have, and a result someone can check in seconds. These five fit that test for most commerce and B2B businesses.</p>
            </div>
            <div className="platlist" role="list">
              {USE_CASES.map((row, i) => {
                const inner = (
                  <>
                    <span className="capid">USE-{String(i + 1).padStart(2, '0')}</span>
                    <div className="plat-name"><h3>{row.name}</h3>{row.flag && <span className="plat-flag">{row.flag}</span>}</div>
                    <div className="plat-fit"><span className="k">Best for</span>{row.fit}</div>
                    <p className="plat-build">{row.build}</p>
                    <span className="plat-go" aria-hidden="true">{row.href ? '↗' : ''}</span>
                  </>
                );
                return row.href
                  ? <a key={row.name} className={row.flag ? 'plat plat-own' : 'plat'} role="listitem" href={row.href}>{inner}</a>
                  : <div key={row.name} className="plat" role="listitem">{inner}</div>;
              })}
            </div>
          </div>
        </section>

        <VisualSlot slot="photobreak" kind="photo" ratio="12:5" className="photobreak" subject="Wide shot of an operations team in a US distribution office, camera behind them, looking at a large monitor that faces them showing a draft order queue with approve buttons; warehouse shelving visible through a window; no readable text or logos" />

        {/* ═══ PROCESS ═══ */}
        <section className="section process" id="how">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Process</div>
              <h2>How We Build Custom AI, From First Call to Live Use</h2>
            </div>
            <div className="timeline">
              <div className="tnode"><div className="idx">01</div><h3>Discover</h3><p>We map the job with the people who do it, agree one measurable goal, and decide build, buy or integrate.</p></div>
              <div className="tnode"><div className="idx">02</div><h3>Data</h3><p>We find where the data lives, check it is accurate and usable, and set up read-only access first.</p></div>
              <div className="tnode"><div className="idx">03</div><h3>Prototype</h3><p>A working prototype on your real data, two or three models scored on your test set, with running cost next to each. Usually 3 to 5 weeks in.</p></div>
              <div className="tnode"><div className="idx">04</div><h3>Build &amp; pilot</h3><p>Integrations, permissions, logging and a simple interface, then a pilot with real users. One job on one or two systems takes 5 to 8 weeks; several systems take 8 to 14.</p></div>
              <div className="tnode"><div className="idx">05</div><h3>Launch &amp; support</h3><p>Rollout with training, then monthly re-scoring and fixes from the team that built it.</p></div>
            </div>
            <div className="timelineAction">
              <a className="btn btn-primary" href="#hero">Scope my AI build</a>
              <a className="btn btn-ghost" href={COST_GUIDE}>Read the cost guide</a>
            </div>
          </div>
        </section>

        {/* ═══ SECURITY & COMPLIANCE ═══ */}
        <section className="vlog" id="security">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Security &amp; Compliance</div>
              <h2>How We Keep Custom AI Safe to Run</h2>
              <p>Four commitments, each tied to a public standard your security team can check.</p>
            </div>
            <div className="ventries">
              <div className="ventry"><span className="vtag">OWASP LLM TOP 10</span><h3>Built against the known attacks</h3><p>Prompt injection is first on OWASP&apos;s 2025 list, and OWASP says it may not be fully preventable. So we limit what a fooled model can do: least-privilege tokens, actions in code with checks, and a person on anything consequential. RAG systems also get checks for vector and embedding weaknesses (LLM08). <a href={SRC_OWASP_LLM01} {...EXT}>OWASP LLM01 ↗</a></p></div>
              <div className="ventry"><span className="vtag">NIST AI RMF</span><h3>Risk managed on a public framework</h3><p>NIST released its AI Risk Management Framework on January 26, 2023 for voluntary use, and a generative AI profile (NIST-AI-600-1) on July 26, 2024. We use its categories to document risks and controls, which gives your compliance team a familiar structure. <a href={SRC_NIST} {...EXT}>NIST ↗</a></p></div>
              <div className="ventry"><span className="vtag">HIPAA</span><h3>Health data only with the right contracts</h3><p>Federal rules treat a vendor that creates, receives, maintains or transmits protected health information for a covered entity as a business associate. If your AI touches that data, every provider in the chain has to be set up for it before we write a line of code. <a href={SRC_ECFR_BA} {...EXT}>45 CFR 160.103 ↗</a></p></div>
              <div className="ventry"><span className="vtag">DISCLOSED</span><h3>We are engineers, not your lawyers</h3><p>We map personal data, minimize it and document where it flows so your counsel can sign off. Legal duties stay with your business; we build to your advisers&apos; requirements.</p></div>
            </div>
          </div>
        </section>

        {/* ═══ WHEN NOT TO HIRE US ═══ */}
        <section className="section platforms" id="build-or-buy">
          <div className="wrap">
            <div className="section-head plat-head">
              <div><div className="eyebrow">Honest Advice</div><h2>When You Should Not Hire an AI Development Company</h2></div>
              <p>Custom AI is the right answer less often than vendors admit.</p>
            </div>
            <div className="platlist" role="list">
              <div className="plat" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>The job is general</h3></div><div className="plat-fit"><span className="k">Do this instead</span>Roll out Microsoft Copilot or ChatGPT Enterprise</div><p className="plat-build">Writing, summarizing and meeting notes are covered by business AI tools that are live in days. Spend on training your team, not on a build.</p><span className="plat-go" aria-hidden="true"></span></div>
              <div className="plat" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>An app already does it</h3></div><div className="plat-fit"><span className="k">Do this instead</span>Check your platform&apos;s app store first</div><p className="plat-build">Shopify, HubSpot and Zendesk all have AI features and app ecosystems. If a proven app fits your process, set it up well. Build only for the gap.</p><span className="plat-go" aria-hidden="true"></span></div>
              <div className="plat" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>Nobody can judge the output</h3></div><div className="plat-fit"><span className="k">Do this instead</span>Fix the process before adding AI</div><p className="plat-build">If no one on your team knows what a correct answer looks like, no one can test the AI either. Document the process first.</p><span className="plat-go" aria-hidden="true"></span></div>
              <a className="plat" role="listitem" href="/services/ai-consulting"><span className="capid">04</span><div className="plat-name"><h3>You do not know the first job yet</h3></div><div className="plat-fit"><span className="k">Do this instead</span>Start with AI consulting</div><p className="plat-build">A short readiness and use-case review ranks your options by value and effort. Build once you know which job pays back first.</p><span className="plat-go" aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        {/* ═══ COMPANIES ═══ */}
        <section className="section agencies" id="companies">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Compare Companies</div>
              <h2>AI Development Companies in the US Worth Comparing</h2>
              <p>US-based firms that showed up for AI development searches on Google and in AI answers on 26 September 2026, with details from their own websites the same day. Directories, forums and firms we could not confirm are US-based are left out. Treat it as a snapshot.</p>
            </div>
            <div className="tablewrap">
              <table>
                <thead><tr><th>Company</th><th>Based in</th><th>What they offer</th><th>Where we saw them</th></tr></thead>
                <tbody>
                  {AI_DEV_COMPANIES.map((c) => (
                    <tr key={c.domain}>
                      <th>{c.name}<br /><span className="mono tableSubLabel">{c.domain}</span></th>
                      <td>{c.base}</td>
                      <td>{c.offers}</td>
                      <td>{c.evidence}</td>
                    </tr>
                  ))}
                  <tr className="us">
                    <th>FactoryJet<br /><span className="mono tableSubLabel tableSubLabelAccent">This page</span></th>
                    <td>Works with US businesses remotely. No local US office.</td>
                    <td>Custom AI built into commerce and B2B systems: RAG, integrations, evaluation and support, with the founder on every project and code you own.</td>
                    <td>Not in Google&apos;s top 10 for these searches today, and far smaller than the firms above. If a big delivery bench matters most, hire one of them.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="sub-note">Shortlisting agent builders specifically? Our roundup of <a href="/blog/best-ai-agent-development-companies-small-business">AI agent development companies for small business</a> reviews more firms, and the <a href="/blog/how-to-hire-an-ai-agent-developer-2026">hiring guide</a> lists the questions to ask each one.</p>
          </div>
        </section>

        {/* ═══ FAQ ═══ */}
        <section className="section faq" id="faq">
          <div className="wrap">
            <div className="faqwrap">
              <div className="faqintro">
                <div className="eyebrow">FAQ</div>
                <h2 className="faqHeading">AI Development Questions, Answered Directly</h2>
                <p>{AI_DEV_FAQS.length} questions US buyers ask Google and AI assistants about AI development, most taken from Google&apos;s People Also Ask boxes, answered without hedging.</p>
                <nav className="faq-catnav" aria-label="FAQ categories">
                  {AI_DEV_FAQ_CATEGORIES.map((category) => <a key={category.id} href={`#${category.id}`}>{category.label}</a>)}
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
              <a href="/services/ai-integration-services">AI Integration Services</a>
              <a href="/services/ai-consulting">AI Consulting</a>
              <a href="/services/ai-chatbot-development">AI Chatbot Development</a>
              <a href="/services/ai-agent-monitoring">AI Monitoring &amp; Support</a>
              <a href={COST_GUIDE}>AI Agent Cost Guide</a>
              <a href="/blog/ai-agent-build-vs-buy-2026">Build vs Buy AI</a>
              <a href={SRC_CENSUS} {...EXT}>Census Bureau: AI Use by US Businesses</a>
              <a href={SRC_MIT} {...EXT}>Fortune: MIT Report on AI Pilots</a>
              <a href={SRC_NIST} {...EXT}>NIST AI Risk Management Framework</a>
              <a href={SRC_OWASP_TOP10} {...EXT}>OWASP Top 10 for LLM Applications</a>
              <a href={SRC_RAG_PAPER} {...EXT}>Lewis et al.: The RAG Paper</a>
            </div>
          </div>
        </section>

        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <h2>Tell Us the Job You Want AI to Do</h2>
              <p>Send the task, the systems involved and what good looks like. We will tell you whether a ready-made tool will do or what a custom build involves, with a fixed quote per phase before any work starts.</p>
            </div>
            <div className="ctas">
              <a className="btn btn-primary" href="#hero">Scope my AI build</a>
              <a className="btn btn-ghost" href="/contact">Talk to the founder</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
