import { Fragment } from 'react';
import HeroInlineForm from '@/components/HeroInlineForm';
import MidPageCTA from '@/components/v2/MidPageCTA';
import {
  LLM_DEV_FAQ_CATEGORIES,
  LLM_DEV_FAQS,
  SRC_ANTHROPIC_TRAINING,
  SRC_LAYER3,
  SRC_LORA_PAPER,
  SRC_OPENAI_DATA,
  SRC_OWASP_TOP10,
  SRC_PRODUCTCRAFTERS,
} from './LlmDevelopmentFaqs';
import './AiAgentDevelopmentSections.css';
import './AiDevelopmentSections.css';

/*
 * LLM Development Services (/services/llm-development), built 2026-10-18 (batch 5 of the
 * mid-market plan, pipeline/research/BLOG-PLAN-MIDMARKET-AI-AGENTS-2026-10-17.md) on the same
 * US design system, shell and CSS as /services/ai-development.
 *
 * Target terms (DataForSEO US, 17 to 18 Oct 2026): llm development services 260/mo KD 10 $30.38
 * (+700% yoy, weakest page-one site 54 referring domains), llm development 140, llm development
 * company 110 (moved here from /services/ai-development), llm app development 70, llm application
 * development 70, custom llm development 20. Page one for the main term on 18 Oct 2026 was all
 * dedicated LLM pages, which is why this page exists separately from /services/ai-development.
 *
 * Page ownership (keep it in the copy):
 *   - this page: the model work. Model choice and testing, RAG, fine-tuning, LLM app and API
 *     integration, evaluation, private deployment
 *   - /services/ai-development: custom AI software built into existing systems, broadly
 *   - /services/ai-agent-development: AI that takes actions across systems
 *   - /services/ai-integration-services: an AI tool connected to one existing app
 *
 * Static server component. The only client code is HeroInlineForm. CAPABILITIES and
 * llmDevBreadcrumbs feed the Service and BreadcrumbList JSON-LD in page.tsx; the FAQ array in
 * LlmDevelopmentFaqs.ts feeds both the accordion and the FAQPage JSON-LD.
 * No FactoryJet prices on this page; cost answers cite other firms' market ranges.
 */

export const llmDevBreadcrumbs = [
  { name: 'Home', url: 'https://factoryjet.com/' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'LLM Development', url: 'https://factoryjet.com/services/llm-development' },
];

/** H1 parts; page.tsx joins them for the WebPage headline so schema and page never drift. */
export const LLM_DEV_H1_LEAD = 'LLM Development Services';
export const LLM_DEV_H1_EMPHASIS = 'Built on Your Data and Systems';

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;
const EXT = { target: '_blank', rel: 'noopener nofollow' } as const;
const IMAGE_ROOT = '/images/us/visual-pass-2026-10-02/ai-development';

function LlmStackDiagram() {
  return (
    <svg viewBox="0 0 520 347" role="img" aria-labelledby="llm-dev-stack-title llm-dev-stack-desc" className="retrieval-diagram">
      <title id="llm-dev-stack-title">How an LLM application is built up in layers</title>
      <desc id="llm-dev-stack-desc">A base language model sits at the bottom. Above it, retrieval adds company documents, an optional fine-tuning layer adds examples, and application code adds tools and permissions. An orange test gate checks every answer before it reaches a person.</desc>
      <path className="retrieval-grid" d="M40 74h440M40 174h440M40 274h440" />
      <rect className="retrieval-core" x="60" y="250" width="300" height="50" rx="12" />
      <rect className="retrieval-chip" x="80" y="263" width="24" height="24" rx="5" />
      <path className="retrieval-line" d="M120 275h200" />
      <rect className="retrieval-paper" x="60" y="182" width="140" height="52" rx="10" />
      <path className="retrieval-line" d="M78 200h90M78 216h70" />
      <rect className="retrieval-surface" x="220" y="182" width="140" height="52" rx="10" />
      <path className="retrieval-line" d="M238 200h90M238 216h60" />
      <rect className="retrieval-paper" x="60" y="114" width="300" height="52" rx="10" />
      <path className="retrieval-line" d="M78 132h160M78 148h110" />
      <path className="retrieval-wire" d="M360 140h40m-40 68h40m-40 67h40M400 140v135" />
      <path className="retrieval-arrow" d="m396 136 4 4 4-4" />
      <path className="retrieval-paper" d="M420 92h50a8 8 0 0 1 8 8v80a8 8 0 0 1-8 8h-50a8 8 0 0 1-8-8v-80a8 8 0 0 1 8-8Z" />
      <path className="retrieval-citation" d="m428 140 10 10 20-22" />
      <rect className="retrieval-highlight" x="424" y="164" width="40" height="10" rx="3" />
      <path className="retrieval-citation" d="M445 92V60H210v54" />
      <path className="retrieval-arrow retrieval-citation" d="m204 106 6 8 6-8" />
    </svg>
  );
}

export const CAPABILITIES: ReadonlyArray<{ href?: string; icon: string; title: string; body: string; tags: string[] }> = [
  { icon: 'M12 3v4M12 17v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M3 12h4M17 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8', title: 'Model Selection & Benchmarking',
    body: 'Two or three candidate models from OpenAI, Anthropic, Google and open-weight families, scored on your own test cases for accuracy, speed and data terms before anything is built. You see the scores, not a vendor preference.',
    tags: ['OpenAI', 'Anthropic', 'Gemini', 'Open-weight'] },
  { icon: 'M6 3h9l4 4v14H6V3Zm9 0v4h4M9 12h6M9 16h4', title: 'RAG Over Your Documents',
    body: 'Retrieval-augmented generation over manuals, policies, contracts, catalogs and tickets, with permissions applied per user and a source linked on every answer. Answers stay current without retraining the model.',
    tags: ['Vector search', 'Hybrid search', 'Citations', 'Permissions'] },
  { icon: 'M4 19h16M7 15l3-3 3 3 5-6', title: 'LLM Fine-Tuning',
    body: 'Fine-tuning, often with parameter-efficient methods such as LoRA, when prompting and retrieval cannot hold the format, tone or classification you need. Always compared against the base model on cases it never saw.',
    tags: ['LoRA', 'Eval split', 'Base vs tuned'] },
  { icon: 'M3 5h18v14H3V5Zm0 4h18M7 13h4M7 16h7', title: 'LLM Application Development',
    body: 'Internal tools and customer-facing apps with a language model at the core: a policy assistant, a contract reviewer, a quote drafter. Built in your repository, on your cloud account, with an interface your team will use.',
    tags: ['TypeScript', 'Python', 'Next.js', 'Your cloud'] },
  { href: '/services/ai-integration-services', icon: 'M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14', title: 'LLM Integration & APIs',
    body: 'The model wired into NetSuite, Salesforce, HubSpot, Zendesk, Shopify or your ERP through official APIs, or through a custom MCP server so assistants such as Claude and ChatGPT can reach your data under limits.',
    tags: ['APIs', 'MCP', 'Webhooks', 'ERP'] },
  { href: '/services/ai-agent-monitoring', icon: 'M4 20V10m6 10V4m6 16v-8m4 8V7', title: 'Evaluation & Private Deployment',
    body: 'A test set of real cases with a pass mark you approve before build, re-scored after every model update. Deployment on business API terms or inside your own cloud account when your data rules require it.',
    tags: ['Eval sets', 'Pass marks', 'Your cloud'] },
];

/** Each item is [bold lead, rest of the line]. */
const DELIVERABLES: ReadonlyArray<{ title: string; lead: string; items: ReadonlyArray<readonly [string, string]> }> = [
  { title: 'Model and data', lead: 'The model is chosen on evidence, and the data is made fit to read.', items: [
    ['Test set first', ': 50 to 200 real cases with the answer a skilled employee would give'],
    ['Two or three models scored', ' on that set before one is chosen'],
    ['Data map', ' of every source the job needs, its owner and who may see it'],
    ['Document cleanup', ': duplicates, outdated versions and scanned PDFs handled'],
    ['Chunking per document type', ', so a contract clause stays with its heading'],
    ['Fine-tuning only with evidence', ' that prompting and retrieval fall short'],
  ] },
  { title: 'Application and integration', lead: 'The model has to live where your team already works.', items: [
    ['Official APIs', ' for your ERP, CRM, helpdesk and store, never screen scraping'],
    ['Drafts by default', ': model output lands as a draft a person approves'],
    ['Structured outputs', ' validated in code before anything is written to a system'],
    ['Model layer kept swappable', ', so a better model is a configuration change'],
    ['Error handling', ' that alerts a person instead of failing quietly'],
    ['Handover docs', ' written for the developer who comes after us'],
  ] },
  { title: 'Accuracy and testing', lead: 'If nobody measured it before launch, nobody knows if it works.', items: [
    ['Pass mark agreed', ' with you before the production build starts'],
    ['Refusal tests', ': the system must say it does not know when sources are silent'],
    ['Source shown', ' on every answer so a person can check it in seconds'],
    ['Adversarial cases', ', such as instructions hidden inside an emailed PDF'],
    ['Re-scoring', ' after every model or data change, on the same test set'],
    ['Plain report', ' of where it gets things wrong, not only where it is right'],
  ] },
  { title: 'Security and ownership', lead: 'Mapped to the OWASP Top 10 for LLM applications, then checked by a person.', items: [
    ['Least-privilege access', ' for every system the model can read or write'],
    ['Business API terms', ' that keep your inputs out of model training'],
    ['Per-user permissions', ' carried through retrieval'],
    ['Spend limits per day', ' so a loop cannot run up a surprise bill'],
    ['Audit log', ' of prompts, sources and outputs, kept in your account'],
    ['You own everything', ': code, prompts, evaluation sets and any tuned weights'],
  ] },
];

/** Page-one sites for "llm development services" and "llm development company", US, 18 Oct 2026 (DataForSEO). */
const RANKING_SITES: ReadonlyArray<readonly [string, string]> = [
  ['signitysolutions.com', 'Large Language Model Development Services'],
  ['solulab.com', 'Large Language Model (LLM) Development Company'],
  ['leewayhertz.com', 'Custom domain-specific LLM development company'],
  ['octalsoftware.com', 'LLM Development Company'],
  ['tech.us', 'LLM Development Services | Turn AI Into Business Value'],
  ['indatalabs.com', 'Large Language Model (LLM) Development Services'],
];

function FaqAccordion() {
  return (
    <div className="faqlist">
      {LLM_DEV_FAQ_CATEGORIES.map((category) => (
        <Fragment key={category.id}>
          <div className="faq-category" id={category.id}>{category.label}</div>
          {LLM_DEV_FAQS.filter((faq) => faq.category === category.id).map((faq) => (
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

export default function LlmDevelopmentSections() {
  return (
    <div className="aiAgentPage aiDevPage">
      <nav className="crumbs" aria-label="Breadcrumb">
        <div className="wrap">
          {llmDevBreadcrumbs.map((item, index) => (
            <Fragment key={item.url}>
              {index > 0 && ' / '}
              {index === llmDevBreadcrumbs.length - 1 ? <b aria-current="page">{item.name}</b> : <a href={item.url}>{item.name}</a>}
            </Fragment>
          ))}
        </div>
      </nav>
      <main id="llm-development-content">
        {/* ═══ HERO ═══ */}
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">LLM Development Company · Models, RAG, Fine-Tuning</div>
              <h1>{LLM_DEV_H1_LEAD} <span className="hero-emphasis">{LLM_DEV_H1_EMPHASIS}</span></h1>
              <p className="lead" data-speakable>FactoryJet builds large language model applications for US businesses: we test models on your own cases, ground them in your documents with RAG, fine-tune only when the scores call for it, and connect the result to your ERP, CRM and helpdesk. You see working software on your data before you sign, and you own the code.</p>
              <HeroInlineForm source="us_llm_development_hero" region="us" submitLabel="Scope my LLM build" />
              <p className="hero-alt">Need AI that takes actions on its own? See <a href="/services/ai-agent-development">AI agent development</a>.</p>
            </div>

            <form className="specpanel" aria-label="Illustration of how an LLM application reaches production">
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>LLM BUILD · TEST BEFORE TRUST</span>
                <span className="sys"><span>EVAL</span><span>RAG</span><span>API</span></span>
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
                  <input className="workflow-select" type="radio" name="llmdev-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="M4 5h6v6H4zM14 5h6M14 9h4M4 15h16M4 19h10" /></svg></span>
                  <span className="idx">STEP 01</span>
                  <span className="title">Write the test set from real cases</span>
                  <span className="tag">TEST</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="llmdev-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="M4 20V10m6 10V4m6 16v-8m4 8V7" /></svg></span>
                  <span className="idx">STEP 02</span>
                  <span className="title">Score two or three models on it</span>
                  <span className="tag">MODEL</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="llmdev-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="M6 3h9l4 4v14H6V3Zm9 0v4h4M9 12h6M9 16h4" /></svg></span>
                  <span className="idx">STEP 03</span>
                  <span className="title">Ground it in your data, tune if needed</span>
                  <span className="tag">RAG</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="llmdev-step" value="4" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="M12 3 3 7v5c0 5 9 9 9 9s9-4 9-9V7l-9-4Zm-4 9 3 3 5-6" /></svg></span>
                  <span className="idx">STEP 04</span>
                  <span className="title">Connect it with permissions and logs</span>
                  <span className="tag">HOLD</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · no model ships until it passes the test set you approved.</div>
            </form>
          </div>
        </section>

        <div className="ledger">
          <div className="wrap">
            <div className="ledgercell"><div className="k">Founded</div><div className="v"><strong className="ledger-number">2014</strong></div></div>
            <div className="ledgercell"><div className="k">Models tested</div><div className="v">OpenAI, Anthropic, Google and open-weight families, scored on your own cases.</div></div>
            <div className="ledgercell"><div className="k">What you own</div><div className="v">Code, prompts, evaluation sets and any tuned weights, in your repository and cloud account.</div></div>
            <div className="ledgercell"><div className="k">Track record</div><div className="v"><strong className="ledger-number">500+</strong> businesses served across web, commerce and AI work.</div></div>
          </div>
        </div>

        {/* ═══ ANSWER-FIRST FACTS ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">§ In Plain Terms</div>
              <h2>What LLM Development Services Include, and When You Need Them</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p><span className="stat">LLM development services turn a large language model into software a business can rely on: a model chosen on your test cases, grounded in your data, connected to your systems and measured before launch.</span> Almost no business needs to train its own model. The work is choosing one, feeding it the right information and proving it gets your cases right.</p></div>
                <div className="fact"><div className="sec">§02</div><p><span className="stat">US searches for &quot;llm development services&quot; rose about 700% in a year, to some 260 a month at $30 a click.</span> That is our own DataForSEO measurement for the US on 17 October 2026. On 18 October every business site on Google&apos;s first page for it was a dedicated LLM page, which is why this one exists apart from our broader <a href="/services/ai-development">AI development</a> page.</p></div>
                <div className="fact"><div className="sec">§03</div><p><span className="stat">Your data does not have to train anyone&apos;s model.</span> OpenAI says data sent to its API has not been used for training since 1 March 2023 unless you opt in, and Anthropic says it does not use commercial and API inputs or outputs for training by default. <a href={SRC_OPENAI_DATA} {...EXT}>OpenAI ↗</a> <a href={SRC_ANTHROPIC_TRAINING} {...EXT}>Anthropic ↗</a></p></div>
                <div className="fact"><div className="sec">§04</div><p><span className="stat">Fine-tuning is cheaper than it used to be, but it is still the exception.</span> The LoRA method tunes a small set of added weights, and its authors report it cut trainable parameters by 10,000 times against full fine-tuning of GPT-3 175B. Most business jobs still reach their pass mark with retrieval and careful prompting. <a href={SRC_LORA_PAPER} {...EXT}>Hu et al., 2021 ↗</a></p></div>
              </div>
              <figure className="factphoto visual-slot" data-visual-slot="llm-development:facts" data-visual-kind="photo" data-visual-status="ready">
                <img
                  src={`${IMAGE_ROOT}/document-review-960.webp`}
                  srcSet={`${IMAGE_ROOT}/document-review-640.webp 640w, ${IMAGE_ROOT}/document-review-960.webp 960w`}
                  sizes="(max-width: 820px) calc(100vw - 40px), (max-width: 1264px) 38vw, 420px"
                  width={960}
                  height={640}
                  loading="lazy"
                  decoding="async"
                  alt="AI-generated illustration of two colleagues reviewing an AI answer and its source document."
                />
              </figure>
            </div>
          </div>
        </section>

        {/* ═══ OWNERSHIP SPLIT ═══ */}
        <section className="section comparison" id="which-page">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Compare</div>
              <h2>LLM Development vs AI Development vs AI Agents vs AI Integration</h2>
            </div>
            <div className="tablewrap" tabIndex={0} role="region" aria-label="LLM development service comparison">
              <table>
                <thead><tr><th>Service</th><th>What you get</th><th>Best for</th><th>Where it lives</th></tr></thead>
                <tbody>
                  <tr className="us"><th>LLM development<br /><span className="mono tableSubLabel tableSubLabelAccent">This page</span></th><td>The model work: model choice, RAG, fine-tuning, evaluation, LLM apps and APIs</td><td>A reading or writing job where accuracy on your data decides success</td><td>Your repository and cloud account</td></tr>
                  <tr><th>AI development<br /><span className="mono tableSubLabel"><a href="/services/ai-development">Own page ↗</a></span></th><td>Custom AI software built into existing systems, of any kind</td><td>A known business job that needs AI plus ordinary software around it</td><td>Inside your systems</td></tr>
                  <tr><th>AI agent development<br /><span className="mono tableSubLabel"><a href="/services/ai-agent-development">Own page ↗</a></span></th><td>AI that takes multi-step actions within rules and approvals</td><td>Jobs where a draft is not enough and the AI must act</td><td>Across several systems</td></tr>
                  <tr><th>AI integration services<br /><span className="mono tableSubLabel"><a href="/services/ai-integration-services">Own page ↗</a></span></th><td>An AI tool you already chose, connected properly to one app</td><td>Adding AI features to a CRM, store or helpdesk you keep</td><td>Inside one existing app</td></tr>
                </tbody>
              </table>
            </div>
            <p className="tablenote">Most agent projects sit on top of LLM development work: the same model choice, retrieval and evaluation, with actions added once accuracy is proven.</p>
          </div>
        </section>

        {/* ═══ DEFINITION ═══ */}
        <section className="definition" id="definition">
          <figure className="visual-slot definition-image" data-visual-slot="llm-development:definition" data-visual-kind="diagram" data-visual-status="ready">
            <LlmStackDiagram />
          </figure>
          <div className="definition-copy">
            <div className="eyebrow">Term</div>
            <h2 className="term">Large Language Model (LLM) Application</h2>
            <p>An LLM application is software with a language model at its core and four layers around it: retrieval that brings in your documents (the RAG pattern Patrick Lewis and colleagues published in 2020), optional fine-tuning on your examples, application code that adds tools and permissions, and a test gate that checks answers before people rely on them.</p>
            <p>The model is the part you rent. The layers are the part that makes it right for your business, and they are what LLM development services build.</p>
          </div>
        </section>

        {/* ═══ CAPABILITIES ═══ */}
        <section className="section capabilities" id="capabilities">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Capabilities</div>
              <h2>Custom LLM Development Services We Deliver</h2>
            </div>
            <div className="capgrid">
              {CAPABILITIES.map((cap, i) => {
                const inner = (
                  <>
                    <div className="caphead"><span className="capid">CAP-{String(i + 1).padStart(2, '0')}</span><svg {...CAP_ICON}><path d={cap.icon} /></svg></div>
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

        {/* ═══ MODEL DECISION TABLE ═══ */}
        <section className="section comparison" id="model-choice">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Model Choice</div>
              <h2>API Model, Open-Weight Model, RAG or Fine-Tuning: What Your Job Needs</h2>
            </div>
            <div className="tablewrap" tabIndex={0} role="region" aria-label="LLM approach comparison">
              <table>
                <thead><tr><th>Approach</th><th>Use it when</th><th>Trade-off</th><th>Market range to build</th></tr></thead>
                <tbody>
                  <tr><th>API model + careful prompts<br /><span className="mono tableSubLabel">start here</span></th><td>The facts arrive in the request itself: sorting, summarizing, drafting</td><td>Fastest to ship; breaks down when the model needs facts it was never given</td><td>Part of a $5,000 to $25,000 MVP workflow (Layer3 Labs)</td></tr>
                  <tr className="us"><th>RAG over your data<br /><span className="mono tableSubLabel tableSubLabelAccent">most business projects</span></th><td>Answers must come from documents or records that change often</td><td>Retrieval quality decides accuracy; the index and permissions need upkeep</td><td>Usually inside the same MVP range; more with many sources</td></tr>
                  <tr><th>Fine-tuned model<br /><span className="mono tableSubLabel">only with evidence</span></th><td>You need a fixed format, tone or label and have 1,000+ good examples</td><td>Does not reliably teach new facts; retrain when examples change</td><td>$10,000 to $50,000 (ProductCrafters)</td></tr>
                  <tr><th>Open-weight model in your cloud<br /><span className="mono tableSubLabel">data rules</span></th><td>Prompts and documents must stay inside infrastructure you control</td><td>More hosting and patching work; often a step behind the top API models</td><td>Depends on hosting scope; quoted after scoping</td></tr>
                  <tr><th>Training your own model<br /><span className="mono tableSubLabel">rarely</span></th><td>You hold unique data at scale and a capability no rented model offers</td><td>Large data and compute needs; usually trails models you can rent</td><td>$50,000 to $200,000+ (ProductCrafters)</td></tr>
                </tbody>
              </table>
            </div>
            <p className="tablenote">Ranges are other firms&apos; published build figures, read 18 October 2026: <a href={SRC_LAYER3} {...EXT}>Layer3 Labs (updated 9 September 2026)</a> and <a href={SRC_PRODUCTCRAFTERS} {...EXT}>ProductCrafters (24 February 2026)</a>. They are not FactoryJet prices; we quote a fixed price after a short scoping call.</p>
          </div>
        </section>

        {/* ═══ DELIVERABLES ═══ */}
        <section className="section changes" id="deliverables">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Implementation</div>
              <h2>What Every LLM Build Includes, Item by Item</h2>
              <p>Four groups, 24 items. An LLM development company that cannot hand you a list this specific is selling a demo.</p>
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

        <div className="ai-dev-midcta" id="next-step">
          <MidPageCTA
            headline="Have a job a language model should do on your data?"
            sub="Tell us the job and the systems involved. On a short call with the founder we will say whether a ready-made tool will do, then show working software on your own data before you sign anything, with a fixed price in writing."
            label="Scope my LLM build"
          />
        </div>

        {/* ═══ USE CASES ═══ */}
        <section className="section platforms" id="use-cases">
          <div className="wrap">
            <div className="section-head plat-head">
              <div><div className="eyebrow">Where It Pays First</div><h2>LLM Applications That Earn Their Keep</h2></div>
              <p>Good first jobs share three traits: people repeat them daily, the data already exists, and a person can check the answer in seconds.</p>
            </div>
            <div className="platlist" role="list">
              <a className="plat" role="listitem" href="/b2b-ecommerce"><span className="capid">USE-01</span><div className="plat-name"><h3>Order and RFQ intake</h3></div><div className="plat-fit"><span className="k">Best for</span>Distributors and manufacturers that get orders by email and PDF</div><p className="plat-build">The model reads emailed purchase orders and RFQs, matches lines to your catalog, and code creates draft orders in NetSuite, Odoo or SAP Business One for a person to release.</p><span className="plat-go" aria-hidden="true">↗</span></a>
              <a className="plat" role="listitem" href="/services/ai-customer-support-agents"><span className="capid">USE-02</span><div className="plat-name"><h3>Answers from your policies</h3></div><div className="plat-fit"><span className="k">Best for</span>Support and sales teams with repeat questions</div><p className="plat-build">RAG over return terms, warranties and product specs inside Zendesk or HubSpot, with a suggested reply and the source linked.</p><span className="plat-go" aria-hidden="true">↗</span></a>
              <div className="plat" role="listitem"><span className="capid">USE-03</span><div className="plat-name"><h3>Contract and document review</h3></div><div className="plat-fit"><span className="k">Best for</span>Operations, procurement and legal teams reading the same document types</div><p className="plat-build">The model pulls fields and flags clauses that differ from your standard, and a person reviews the flagged ones instead of reading every page.</p><span className="plat-go" aria-hidden="true"></span></div>
              <a className="plat" role="listitem" href="/services/ai-automation"><span className="capid">USE-04</span><div className="plat-name"><h3>Invoice and form extraction</h3></div><div className="plat-fit"><span className="k">Best for</span>Finance teams keying invoices and statements by hand</div><p className="plat-build">Fields extracted into Xero, QuickBooks or your ERP as draft entries, with the matching rules your team already uses and nothing posted without approval.</p><span className="plat-go" aria-hidden="true">↗</span></a>
              <a className="plat plat-own" role="listitem" href="/services/ai-agent-development"><span className="capid">USE-05</span><div className="plat-name"><h3>When it must act</h3><span className="plat-flag">OWN PAGE</span></div><div className="plat-fit"><span className="k">Best for</span>Jobs that need several steps across systems within rules</div><p className="plat-build">Once the model has to act and not only draft, the build becomes an agent, with approvals, limits and rollback added on top of the same LLM work.</p><span className="plat-go" aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        {/* ═══ PROCESS ═══ */}
        <section className="section process" id="how">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Process</div>
              <h2>The LLM Development Process, From First Call to Live Use</h2>
            </div>
            <div className="timeline">
              <div className="tnode"><div className="idx">01</div><h3>Scope</h3><p>One job, one measurable goal, and an honest answer on whether a ready-made tool would do.</p></div>
              <div className="tnode"><div className="idx">02</div><h3>Test set</h3><p>We collect real past cases with known answers and agree the pass mark with you.</p></div>
              <div className="tnode"><div className="idx">03</div><h3>Prototype</h3><p>Working software on your data, with two or three models scored side by side. Usually 3 to 5 weeks in.</p></div>
              <div className="tnode"><div className="idx">04</div><h3>Build &amp; pilot</h3><p>Integrations, permissions, logging and an interface, then a pilot with real users. One job on one or two systems takes 5 to 8 weeks.</p></div>
              <div className="tnode"><div className="idx">05</div><h3>Launch &amp; re-test</h3><p>Rollout with training, and the same test set re-run after every model or data change.</p></div>
            </div>
            <div className="timelineAction">
              <a className="btn btn-primary" href="#hero">Scope my LLM build</a>
              <a className="btn btn-ghost" href="/blog/what-is-an-ai-agent-cost-2026">Read the cost guide</a>
            </div>
          </div>
        </section>

        {/* ═══ SECURITY ═══ */}
        <section className="vlog" id="security">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Security</div>
              <h2>How We Keep an LLM Application Safe to Run</h2>
              <p>Each commitment is tied to a public source your security team can check.</p>
            </div>
            <div className="ventries">
              <div className="ventry"><span className="vtag">OWASP LLM TOP 10</span><h3>Built against the known attacks</h3><p>Prompt injection is first on OWASP&apos;s 2025 list, followed by sensitive information disclosure, and excessive agency is sixth. So we limit what a fooled model can do: least-privilege access, actions in code with checks, and a person on anything consequential. <a href={SRC_OWASP_TOP10} {...EXT}>OWASP ↗</a></p></div>
              <div className="ventry"><span className="vtag">AUDIT LOG</span><h3>Every answer can be traced</h3><p>Prompts, retrieved sources and outputs are logged in your own account, so a wrong answer can be traced to the document or instruction behind it and fixed at the source.</p></div>
              <div className="ventry"><span className="vtag">APPROVAL</span><h3>People approve consequential steps</h3><p>Model output lands as a draft. Anything that moves money, changes a customer record or carries legal weight waits for a named person, and that rule is enforced in code, not in the prompt.</p></div>
              <div className="ventry"><span className="vtag">DISCLOSED</span><h3>We are engineers, not your lawyers</h3><p>We map personal data, minimise it and document where it flows so your counsel can sign off. Legal duties stay with your business; we build to your advisers&apos; requirements.</p></div>
            </div>
          </div>
        </section>

        {/* ═══ WHEN NOT TO HIRE US ═══ */}
        <section className="section platforms" id="build-or-buy">
          <div className="wrap">
            <div className="section-head plat-head">
              <div><div className="eyebrow">Honest Advice</div><h2>When You Do Not Need an LLM Development Company</h2></div>
              <p>A custom LLM build is the right answer less often than vendors admit.</p>
            </div>
            <div className="platlist" role="list">
              <div className="plat" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>The job is general writing</h3></div><div className="plat-fit"><span className="k">Do this instead</span>Roll out ChatGPT Enterprise, Claude or Microsoft Copilot</div><p className="plat-build">Drafting, summarizing and meeting notes are covered by business AI tools that are live in days. Spend on training your team.</p><span className="plat-go" aria-hidden="true"></span></div>
              <div className="plat" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Your software already has it</h3></div><div className="plat-fit"><span className="k">Do this instead</span>Turn on the built-in AI first</div><p className="plat-build">Salesforce, HubSpot, Zendesk and Shopify all ship AI features. If one fits your process, set it up well and build only for the gap.</p><span className="plat-go" aria-hidden="true"></span></div>
              <div className="plat" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>Nobody can judge the output</h3></div><div className="plat-fit"><span className="k">Do this instead</span>Write the process down first</div><p className="plat-build">If no one can say what a correct answer looks like, no one can write the test set either, and the model cannot be measured.</p><span className="plat-go" aria-hidden="true"></span></div>
              <a className="plat" role="listitem" href="/services/ai-consulting"><span className="capid">04</span><div className="plat-name"><h3>You do not know the first job yet</h3></div><div className="plat-fit"><span className="k">Do this instead</span>Start with AI consulting</div><p className="plat-build">A short readiness and use-case review ranks your options by value and effort. Build once you know which job pays back first.</p><span className="plat-go" aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        {/* ═══ WHAT ELSE RANKS ═══ */}
        <section className="section agencies" id="what-else-ranks">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Compare</div>
              <h2>What Else Ranks for &quot;LLM Development Services&quot;, and How This Page Differs</h2>
              <p>These are business sites on Google&apos;s first page in the US for &quot;llm development services&quot; and &quot;llm development company&quot; when we checked on 18 October 2026 (DataForSEO), with the title Google showed for each. We list them so you can compare; we have not reviewed their services, and the list leaves out forums, video sites and ranking roundups.</p>
            </div>
            <div className="tablewrap" tabIndex={0} role="region" aria-label="Sites ranking for llm development services">
              <table>
                <thead><tr><th>Site</th><th>Page title shown in Google</th></tr></thead>
                <tbody>
                  {RANKING_SITES.map(([domain, title]) => (
                    <tr key={domain}><th>{domain}</th><td>{title}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="sub-note">Most of these pages describe what an LLM development company offers. This page adds the market build ranges with their sources, the test-set-first process, and when a ready-made tool is the better buy.</p>
          </div>
        </section>

        {/* ═══ FAQ ═══ */}
        <section className="section faq" id="faq">
          <div className="wrap">
            <div className="faqwrap">
              <div className="faqintro">
                <div className="eyebrow">FAQ</div>
                <h2 className="faqHeading">LLM Development Questions, Answered Directly</h2>
                <p>{LLM_DEV_FAQS.length} questions US buyers ask Google and AI assistants about LLM development, most taken from Google&apos;s People Also Ask boxes on 18 October 2026.</p>
                <nav className="faq-catnav" aria-label="FAQ categories">
                  {LLM_DEV_FAQ_CATEGORIES.map((category) => <a key={category.id} href={`#${category.id}`}>{category.label}</a>)}
                </nav>
              </div>
              <FaqAccordion />
            </div>
          </div>
        </section>

        <section className="section referencesSection references" id="references">
          <div className="wrap">
            <div className="eyebrow">References &amp; Related</div>
            <div className="refs">
              <a href="/services/ai-development">AI Development</a>
              <a href="/services/ai-agent-development">AI Agent Development</a>
              <a href="/services/ai-integration-services">AI Integration Services</a>
              <a href="/services/ai-consulting">AI Consulting</a>
              <a href="/blog/agentic-ai-vs-generative-ai">Agentic AI vs Generative AI</a>
              <a href="/blog/custom-mcp-server-erp-crm-mid-sized-companies-2026">Custom MCP Servers for ERP and CRM</a>
              <a href="/blog/ai-proof-of-concept-to-production-2026">AI Proof of Concept to Production</a>
              <a href={SRC_LORA_PAPER} {...EXT}>Hu et al.: The LoRA Paper</a>
              <a href={SRC_OWASP_TOP10} {...EXT}>OWASP Top 10 for LLM Applications</a>
            </div>
          </div>
        </section>

        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <h2>Tell Us the Job You Want a Language Model to Do</h2>
              <p>Send the task, the systems involved and what a good answer looks like. We will show working software on your own data before you sign, then put a fixed price per phase in writing.</p>
            </div>
            <div className="ctas">
              <a className="btn btn-primary" href="#hero">Scope my LLM build</a>
              <a className="btn btn-ghost" href="/contact">Talk to the founder</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
