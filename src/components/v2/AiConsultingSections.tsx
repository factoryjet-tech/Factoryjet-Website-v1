import { Fragment, type ReactNode } from 'react';
import HeroInlineForm from '@/components/HeroInlineForm';
import { AI_CONSULTING_FAQ_CATEGORIES, AI_CONSULTING_FAQS } from './AiConsultingFaqs';
import './AiAgentDevelopmentSections.css';
import './AiConsultingSections.css';

/*
 * AI Consulting Services (/services/ai-consulting), built 2026-09-26 in the current US
 * design system ("Family A"): same base CSS and section anatomy as /services/ai-seo and
 * /services/web-design. Brief: pipeline/research/briefs/US-TIER1-BUILD-BRIEF-2026-09-26.md.
 *
 * Keyword ownership: this page owns "ai consulting services", "ai consultant",
 * "ai strategy consulting", "ai implementation services / consultant" and
 * "ai readiness assessment". The listicle /blog/best-ai-consulting-firms-usa-2026 owns
 * "firms / companies / top / best". The build pages (/services/ai-development,
 * /services/ai-agent-development, /services/ai-integration-services) own the build terms.
 *
 * Static server component. The only client code is HeroInlineForm (lead capture).
 * The hero engagement panel animates with CSS only, like the reference pages.
 *
 * Arrays exported here (CAPABILITIES, PAGE_ONE_FIRMS, aiConsultingBreadcrumbs) also feed
 * the Service, ItemList and BreadcrumbList JSON-LD in page.tsx, so schema always matches
 * what the reader sees. The FAQ array lives in AiConsultingFaqs.ts.
 *
 * Visuals: page-specific editorial illustrations and an accessible readiness diagram.
 * No FactoryJet prices on this page: cost questions link to the cost guides.
 */

export const aiConsultingBreadcrumbs = [
  { name: 'Home', url: 'https://factoryjet.com/' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI Consulting', url: 'https://factoryjet.com/services/ai-consulting' },
];

/* Every external source below was fetched and checked on 2026-09-26. */
const CENSUS = 'https://www.census.gov/library/stories/2026/05/ai-use-businesses.html';
const FORTUNE_MIT = 'https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/';
const BCG = 'https://www.bcg.com/capabilities/artificial-intelligence';
const NIST = 'https://www.nist.gov/itl/ai-risk-management-framework';
const HBS = 'https://online.hbs.edu/blog/post/ai-implementation-cost';

const COST_GUIDE = '/blog/what-is-an-ai-agent-cost-2026';
const BUILD_VS_BUY = '/blog/ai-agent-build-vs-buy-2026';
const FIRMS_LIST = '/blog/best-ai-consulting-firms-usa-2026';

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;

function CapIcon({ d }: { d: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C94A1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
  );
}

/** Generated editorial scenes are illustrative, not photographs of staff or clients. */
function VisualSlot({ slot, kind, subject, ratio, className }: { slot: string; kind: 'photo' | 'diagram' | 'illustration' | 'mockup' | 'map'; subject: string; ratio: string; className?: string }) {
  const panoramic = slot === 'photobreak-implementation';
  const asset = panoramic ? 'implementation' : 'workshop';
  const imageRoot = '/images/us/visual-pass-2026-10-02/ai-consulting';
  return (
    <figure
      className={className ? `visual-slot ${className}` : 'visual-slot'}
      data-visual-slot={`ai-consulting:${slot}`}
      data-visual-kind={kind}
      data-visual-subject={subject}
      data-visual-ratio={ratio}
      data-visual-status="ready"
    >
      {kind === 'diagram' ? <ReadinessDiagram /> : (
        <img
          src={`${imageRoot}/${asset}-${panoramic ? 1536 : 960}.webp`}
          srcSet={`${imageRoot}/${asset}-${panoramic ? 768 : 640}.webp ${panoramic ? 768 : 640}w, ${imageRoot}/${asset}-${panoramic ? 1536 : 960}.webp ${panoramic ? 1536 : 960}w`}
          sizes={panoramic ? '(max-width: 820px) calc(100vw - 40px), (max-width: 1264px) calc(100vw - 64px), 1200px' : '(max-width: 820px) calc(100vw - 40px), (max-width: 1264px) 38vw, 420px'}
          width={panoramic ? 1536 : 960}
          height={panoramic ? 560 : 640}
          loading="lazy"
          decoding="async"
          alt={panoramic ? 'AI-generated illustration of colleagues reviewing a draft order in a distribution office.' : 'AI-generated illustration of three business colleagues mapping a workflow with orange sticky notes.'}
        />
      )}
    </figure>
  );
}

function ReadinessDiagram() {
  const pillars = [
    { x: 57, y: 150, height: 122, icon: 'M-12-9c0-7 24-7 24 0s-24 7-24 0Zm0 0v17c0 7 24 7 24 0V-9m-24 8c0 7 24 7 24 0' },
    { x: 145, y: 122, height: 150, icon: 'M-7-15v9m14-9v9M-12-6h24v8c0 7-5 12-12 12S-12 9-12 2v-8Zm12 20v7' },
    { x: 233, y: 205, height: 67, icon: 'M-6-17H6v12H-6v-12ZM0-5v7m-14 0h28M-14 2v7m28-7v7m-34 0h12v12h-12V9Zm28 0h12v12H8V9Z' },
    { x: 321, y: 142, height: 130, icon: 'M0-3a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM-10 16v-5c0-12 20-12 20 0v5M-12-4a5 5 0 1 1 0-10M12-4a5 5 0 1 0 0-10M-17 14V8m34 6V8' },
    { x: 409, y: 132, height: 140, icon: 'M0-17-14-11v12c0 11 14 18 14 18S14 12 14 1v-12L0-17Zm-7 17 5 5 10-11' },
  ];
  return (
    <svg viewBox="0 0 520 347" role="img" aria-labelledby="ai-consulting-readiness-title ai-consulting-readiness-desc" className="readiness-diagram">
      <title id="ai-consulting-readiness-title">Five pillars of AI readiness</title>
      <desc id="ai-consulting-readiness-desc">An illustrative comparison of data, systems, process, people and governance. The shorter orange process pillar identifies a gap to address first. Bar heights are conceptual, not measured client scores.</desc>
      <path className="readiness-grid" d="M40 92h440M40 152h440M40 212h440M40 272h440" />
      {pillars.map((pillar, index) => (
        <g key={pillar.x} className={index === 2 ? 'readiness-pillar readiness-gap' : 'readiness-pillar'}>
          <rect className="readiness-track" x={pillar.x} y="92" width="54" height="180" rx="8" />
          <rect className="readiness-bar" x={pillar.x} y={pillar.y} width="54" height={pillar.height} rx="8" />
          <path className="readiness-icon" d={pillar.icon} transform={`translate(${pillar.x + 27} 57)`} />
        </g>
      ))}
      <path className="readiness-focus" d="M249 190l11 11 11-11" />
      <circle className="readiness-key" cx="260" cy="309" r="5" />
      <path className="readiness-grid" d="M51 309h187m44 0h187" />
    </svg>
  );
}

const DIAGRAMS: ReactNode[] = [
  // Readiness: five pillar bars, one flagged
  <g key="d1"><path className="diagram-faint" d="M40 136h360" /><rect className="diagram-surface" x="62" y="52" width="42" height="84" rx="4" /><rect className="diagram-surface" x="130" y="36" width="42" height="100" rx="4" /><rect className="diagram-core" x="198" y="86" width="42" height="50" rx="4" /><rect className="diagram-surface" x="266" y="60" width="42" height="76" rx="4" /><rect className="diagram-surface" x="334" y="44" width="42" height="92" rx="4" /><path className="diagram-wire" d="M83 44 151 28l68 46 68-22 68-16" /><circle className="diagram-core" cx="219" cy="74" r="6" /></g>,
  // Roadmap: ranked list of use cases
  <g key="d2"><rect className="diagram-surface" x="40" y="18" width="250" height="124" rx="10" /><rect className="diagram-core" x="58" y="34" width="18" height="18" rx="4" /><path d="M88 43h150" /><rect className="diagram-surface" x="58" y="64" width="18" height="18" rx="4" /><path d="M88 73h120" /><rect className="diagram-surface" x="58" y="94" width="18" height="18" rx="4" /><path d="M88 103h96" /><path className="diagram-faint" d="M58 128h200" /><path className="diagram-wire" d="M290 43h50q14 0 14 14v40" /><circle className="diagram-core" cx="354" cy="112" r="16" /><path d="m346 112 6 6 10-12" /></g>,
  // Data & systems audit: three systems into one hub
  <g key="d3"><rect className="diagram-surface" x="30" y="22" width="90" height="34" rx="7" /><path d="M46 39h56" /><rect className="diagram-surface" x="30" y="64" width="90" height="34" rx="7" /><path d="M46 81h56" /><rect className="diagram-surface" x="30" y="106" width="90" height="34" rx="7" /><path d="M46 123h56" /><path className="diagram-wire" d="M120 39h50q16 0 16 16v25m-66 1h66m-66 42h50q16 0 16-16V80m0 0h60" /><rect className="diagram-core" x="246" y="50" width="80" height="60" rx="12" /><circle cx="286" cy="80" r="13" /><path d="m295 89 11 11" /><path className="diagram-faint" d="M326 80h80" /></g>,
  // Build or buy: fork
  <g key="d4"><circle className="diagram-core" cx="70" cy="80" r="20" /><path d="M62 80h16M70 72v16" /><path className="diagram-wire" d="M90 80h60q16 0 16-16V44q0-10 10-10h60M166 80v16q0 20 20 20h50" /><rect className="diagram-surface" x="236" y="16" width="150" height="36" rx="8" /><path d="M252 34h90" /><rect className="diagram-surface" x="236" y="98" width="150" height="36" rx="8" /><path d="M252 116h70" /><path className="diagram-faint" d="M40 150h360" /></g>,
  // Implementation: agent wired into systems
  <g key="d5"><path className="diagram-wire" d="M220 80 110 34m110 46L110 126m110-46 110-46m-110 46 110 46" /><rect className="diagram-surface" x="60" y="16" width="80" height="36" rx="7" /><path d="M76 34h48" /><rect className="diagram-surface" x="60" y="108" width="80" height="36" rx="7" /><path d="M76 126h48" /><rect className="diagram-surface" x="300" y="16" width="80" height="36" rx="7" /><path d="M316 34h48" /><rect className="diagram-surface" x="300" y="108" width="80" height="36" rx="7" /><path d="M316 126h48" /><circle className="diagram-core" cx="220" cy="80" r="30" /><path d="M206 74h28M206 86h18" /></g>,
  // Support: monthly trend with checkpoints
  <g key="d6"><path className="diagram-faint" d="M40 136h360M40 104h360M40 72h360M40 40h360" /><rect className="diagram-wave" x="70" y="96" width="30" height="40" rx="3" stroke="none" /><rect className="diagram-wave" x="136" y="84" width="30" height="52" rx="3" stroke="none" /><rect className="diagram-wave" x="202" y="70" width="30" height="66" rx="3" stroke="none" /><rect className="diagram-wave" x="268" y="58" width="30" height="78" rx="3" stroke="none" /><rect className="diagram-wave" x="334" y="44" width="30" height="92" rx="3" stroke="none" /><path className="diagram-wire" d="M85 88 151 76l66-14 66-12 66-14" /><circle className="diagram-core" cx="349" cy="36" r="6" /></g>,
];

export const CAPABILITIES: ReadonlyArray<{ href?: string; icon: string; title: string; body: string; tags: string[] }> = [
  { icon: 'M4 20V10m6 10V4m6 16v-8m4 8V7', title: 'AI Readiness Assessment',
    body: 'A scored check of your data, systems, processes, people and risk rules, with the gaps named and the use cases you could start now. This is where every engagement begins.',
    tags: ['Data', 'Systems', 'Process', 'People', 'Governance'] },
  { icon: 'M4 6h16M4 12h10M4 18h6', title: 'AI Strategy & Use-Case Roadmap',
    body: 'Every candidate use case scored on value, effort, data fit and risk, then put in order. You get a short list of what to do first, what to do later, and what to skip.',
    tags: ['Prioritization', 'ROI model', '90-day plan'] },
  { icon: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm9 16-4-4', title: 'Data & Systems Audit',
    body: 'We open the CRM, ERP, help desk, store and shared drives the AI would rely on, and check what data exists, how clean it is, and whether each system has an API AI can use.',
    tags: ['CRM', 'ERP', 'Help desk', 'APIs'] },
  { href: BUILD_VS_BUY, icon: 'M6 3v6a6 6 0 0 0 12 0V3M12 15v6', title: 'Build-or-Buy & Vendor Selection',
    body: 'A plain recommendation for each use case: turn on AI already inside your software, buy a proven tool, or build custom. When we recommend buying, we say so, even though we build.',
    tags: ['Build vs. buy', 'Vendor shortlist', 'Total cost'] },
  { href: '/services/ai-agent-development', icon: 'M12 3v4M12 17v4M3 12h4M17 12h4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z', title: 'AI Implementation',
    body: 'The same team builds what the roadmap picks: AI agents, integrations and automated workflows connected to your real systems, tested on real cases, with a human approval step where it matters.',
    tags: ['AI agents', 'Integrations', 'Workflows'] },
  { href: '/services/ai-agent-monitoring', icon: 'M12 3 4 7v5c0 5 8 9 8 9s8-4 8-9V7l-8-4Zm-3 9 2 2 4-5', title: 'Governance, Training & Support',
    body: 'Approval rules, usage policies and staff training at launch, then monthly monitoring, error review and prompt updates so the AI keeps working as models, APIs and your business change.',
    tags: ['NIST AI RMF', 'Training', 'Monitoring'] },
];

/** The readiness assessment, pillar by pillar. Each item is [bold lead, rest of the line]. */
const PILLARS: ReadonlyArray<{ title: string; lead: string; items: ReadonlyArray<readonly [string, string]> }> = [
  { title: 'Data', lead: 'AI is only as good as the records it reads. Most first projects stall here, quietly.', items: [
    ['Where the data lives', ', system by system, including spreadsheets and inboxes'],
    ['Completeness', ': missing fields, duplicates and stale records counted'],
    ['Access', ': whether the data can be read by API, export or only by hand'],
    ['History', ': enough past examples to test an AI against real cases'],
    ['Sensitive fields', ' flagged, such as health, payment and personal data'],
    ['One source of truth', ' named for each record type'],
  ] },
  { title: 'Systems', lead: 'An AI that cannot reach your systems becomes one more tab your team ignores.', items: [
    ['Your core stack', ' listed: CRM, ERP, help desk, store, phone and email'],
    ['API availability', ' and rate limits for each system checked'],
    ['AI already included', ' in software you pay for, found and noted'],
    ['Login and permissions', ' model reviewed for least access'],
    ['Where an AI would run', ' and which accounts it would need'],
    ['Existing automations', ' in tools like Zapier, Make or n8n mapped'],
  ] },
  { title: 'Process', lead: 'If nobody can write the process down, no AI can follow it.', items: [
    ['Repeated tasks', ' ranked by hours spent every week'],
    ['Each step written out', ', with the decisions a person makes along the way'],
    ['Exceptions', ': the cases that break the normal path, and how often'],
    ['Hand-offs', ' between people, teams and systems'],
    ['Current cost of errors', ' and delays, in your own numbers'],
    ['A baseline', ' to measure the AI against after launch'],
  ] },
  { title: 'People', lead: 'BCG says about 70% of the value in an AI program comes from people and process, not the model.', items: [
    ['An owner', ' for each use case, with the authority to change the process'],
    ['The staff who do the work', ' interviewed, not only managers'],
    ['Skills and comfort', ' with AI tools, team by team'],
    ['Personal AI use', ' already happening, and on which tools'],
    ['Training needed', ' for launch, sized honestly'],
    ['How success is judged', ', agreed before anything is built'],
  ] },
  { title: 'Governance & risk', lead: 'We use the NIST AI Risk Management Framework as the checklist, sized for your business.', items: [
    ['Which AI decisions', ' need a human to approve them'],
    ['Industry rules', ' that apply, mapped with your own counsel'],
    ['Provider data terms', ' checked, including whether prompts are used for training'],
    ['A written AI use policy', ' for staff'],
    ['Logging', ' so every AI action can be traced and reviewed'],
    ['A rollback plan', ' if an AI system has to be switched off'],
  ] },
];

/** Where AI tends to pay off first, by department. */
const USE_CASES: ReadonlyArray<{ href: string; code: string; name: string; fit: string; build: string }> = [
  { href: '/services/ai-customer-support-agents', code: 'USE-01', name: 'Customer support', fit: 'Teams answering the same questions by email, chat or ticket every day', build: 'A support agent that reads your help desk, order and policy data, answers routine tickets and routes the rest with a summary.' },
  { href: '/services/ai-sdr', code: 'USE-02', name: 'Sales & lead follow-up', fit: 'Sales teams losing leads between form fill and first call', build: 'Lead research, qualification and first follow-up drafted from your CRM, with a rep approving before anything is sent.' },
  { href: '/services/ai-receptionist', code: 'USE-03', name: 'Front desk & phones', fit: 'Clinics, firms and service businesses that miss calls', build: 'An AI receptionist that answers, books into your calendar and hands urgent calls to a person.' },
  { href: '/services/ai-integration-services', code: 'USE-04', name: 'Operations & ERP', fit: 'Businesses rekeying orders, quotes or invoices between systems', build: 'AI that reads documents and emails, then writes clean records into your ERP, CRM or store.' },
  { href: '/services/ai-workflow-automation', code: 'USE-05', name: 'Back-office workflows', fit: 'Finance, HR and admin tasks that follow a fixed pattern', build: 'Workflows that move data between tools and let AI handle the reading, sorting and drafting steps.' },
  { href: '/services/ai-chatbot-development', code: 'USE-06', name: 'Website & store assistants', fit: 'Sites where buyers ask the same pre-sale questions', build: 'A website or store assistant trained on your catalog, policies and FAQs, with a clean hand-off to a person.' },
];

const INDUSTRIES = [
  { title: 'Manufacturing', href: '/services/manufacturing-ai-agents', line: 'Quotes, orders and supplier email' },
  { title: 'Healthcare practices', href: '/services/healthcare-ai-agents', line: 'Intake, scheduling and patient questions' },
  { title: 'Dental groups & DSOs', href: '/services/dental-support-organization-ai-agents', line: 'Calls, recalls and multi-site admin' },
  { title: 'Law firms', href: '/services/legal-ai-agents', line: 'Intake, document review and follow-up' },
  { title: 'Property management', href: '/services/property-management-ai-agents', line: 'Tenant requests and maintenance routing' },
  { title: 'Real estate', href: '/services/ai-agents-for-real-estate', line: 'Lead response and listing questions' },
  { title: 'Restaurants', href: '/services/restaurant-ai-voice-agents', line: 'Phone orders and reservations' },
  { title: 'Automotive dealers', href: '/services/automotive-ai-voice-agents', line: 'Service booking and sales calls' },
  { title: 'Chemical & pharma', href: '/services/chemical-pharmaceutical-ai-agents', line: 'Batch records, SDS and LIMS sync' },
  { title: 'Agriculture equipment', href: '/services/agriculture-equipment-ai-agents', line: 'Parts lookup, fault triage and service dispatch' },
];

/** Google order among organic results, DataForSEO US desktop pull, 26 Sep 2026. null = not on page one. */
const SEARCHES = ['ai consulting services', 'ai implementation services'] as const;

export const PAGE_ONE_FIRMS: ReadonlyArray<{ name: string; domain: string; positions: ReadonlyArray<number | null>; offers: string; note: string }> = [
  { name: 'EY', domain: 'ey.com', positions: [1, null], offers: 'A US AI consulting practice inside a Big Four firm, next to intelligent automation and analytics consulting.', note: 'Publishes an AI Risk and Governance Survey. Built for large enterprises.' },
  { name: 'The Hackett Group', domain: 'thehackettgroup.com', positions: [2, 1], offers: 'AI strategy, data engineering on platforms like Databricks and Snowflake, proof-of-concept builds, AI agent development and post-launch monitoring.', note: 'The only firm on page one for both searches.' },
  { name: 'IBM Consulting', domain: 'ibm.com', positions: [4, null], offers: 'Enterprise AI and agentic AI design, build and scaling, with a stated 75,000+ consultants trained in generative AI.', note: 'Strongest fit for large, multi-country programs.' },
  { name: 'Centric Consulting', domain: 'centricconsulting.com', positions: [6, 2], offers: 'AI strategy, governance and agent development, with Microsoft Copilot and Salesforce Agentforce work and a free AI readiness self-assessment.', note: 'US offices in cities including Chicago, Columbus, Boston and Seattle.' },
  { name: 'Bent Ear Technology Partners', domain: 'bent-ear-tech.com', positions: [null, 4], offers: 'AI consulting and implementation from a managed IT provider: discovery, roadmap, tool selection, rollout and training.', note: 'Based in Syracuse, NY. Pairs AI with IT and security services.' },
];

function DirectoryList({ items }: { items: ReadonlyArray<{ title: string; href: string; line: string }> }) {
  return (
    <ul className="agentdir-grid">
      {items.map((item) => (
        <li key={item.href}>
          <a href={item.href}>
            <span className="agentdir-t">{item.title}</span>
            <span className="agentdir-l">{item.line}</span>
            <span className="agentdir-go" aria-hidden="true">↗</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function AiConsultingFaqAccordion() {
  return (
    <div className="faqlist">
      {AI_CONSULTING_FAQ_CATEGORIES.map((category) => (
        <Fragment key={category.id}>
          <div className="faq-category" id={category.id}>{category.label}</div>
          {AI_CONSULTING_FAQS.filter((faq) => faq.category === category.id).map((faq) => (
            <details className="faqitem" data-faq-item key={faq.id}>
              <summary data-faq-question>
                <span className="qid">{faq.id}</span>
                <span className="qtext">{faq.question}</span>
                <span className="chev" aria-hidden="true">+</span>
              </summary>
              <p className="ans" data-faq-answer>{faq.answer}</p>
            </details>
          ))}
        </Fragment>
      ))}
    </div>
  );
}

export default function AiConsultingSections() {
  return (
    <div className="aiAgentPage aiConsultingPage">
      <nav className="crumbs" aria-label="Breadcrumb">
        <div className="wrap">
          {aiConsultingBreadcrumbs.map((item, index) => (
            <Fragment key={item.url}>
              {index > 0 && ' / '}
              {index === aiConsultingBreadcrumbs.length - 1 ? <b aria-current="page">{item.name}</b> : <a href={item.url}>{item.name}</a>}
            </Fragment>
          ))}
        </div>
      </nav>
      <main id="ai-consulting-content">
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">AI Consulting · United States · Service Specification</div>
              <h1>AI Consulting Services That End in <span className="hero-emphasis">Working AI, Not a Deck</span></h1>
              <p className="lead" data-speakable>FactoryJet is an AI consulting company for small and mid-size US businesses. We start with an AI readiness assessment, rank the use cases worth doing, then build, implement and support the AI ourselves. You own every line of it.</p>
              <HeroInlineForm source="us_ai_consulting_hero" region="us" submitLabel="Book an AI readiness call" />
              <p className="hero-alt">Already know what to build? See <a href="/services/ai-development">AI development</a> or <a href="/services/ai-agent-development">AI agent development</a>.</p>
            </div>

            <form className="specpanel" aria-label="Illustration of an AI consulting engagement from assessment to support">
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>ENGAGEMENT · IDEA TO SUPPORTED AI</span>
                <span className="sys"><span>ASSESS</span><span>ROADMAP</span><span>BUILD</span><span>SUPPORT</span></span>
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
              <div className="specpanel-body" role="radiogroup" aria-label="Explore the engagement steps">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="consult-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="M4 20V10m6 10V4m6 16v-8m4 8V7" /></svg></span>
                  <span className="idx">STEP 01</span>
                  <span className="title">Score data, systems, process, people, risk</span>
                  <span className="tag">ASSESS</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="consult-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="M4 6h16M4 12h10M4 18h6" /></svg></span>
                  <span className="idx">STEP 02</span>
                  <span className="title">Rank use cases by value and effort</span>
                  <span className="tag">ROADMAP</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="consult-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="m8 8-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" /></svg></span>
                  <span className="idx">STEP 03</span>
                  <span className="title">Build on your real systems and data</span>
                  <span className="tag">BUILD</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="consult-step" value="4" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="M12 3 3 7v5c0 5 9 9 9 9s9-4 9-9V7l-9-4Zm-4 9 3 3 5-6" /></svg></span>
                  <span className="idx">STEP 04</span>
                  <span className="title">Human approval, then monitored support</span>
                  <span className="tag">HOLD</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · nothing goes live without a named owner, a baseline to beat, and a person approving decisions that matter.</div>
            </form>
          </div>
        </section>

        <div className="ledger">
          <div className="wrap">
            <div className="ledgercell"><div className="k">Founded</div><div className="v"><strong className="ledger-number">2014</strong></div></div>
            <div className="ledgercell"><div className="k">Where we start</div><div className="v">An AI readiness assessment with a fixed scope and a fixed quote, before any build.</div></div>
            <div className="ledgercell"><div className="k">Ownership</div><div className="v">Code, prompts, workflows and every AI account set up in your name.</div></div>
            <div className="ledgercell"><div className="k">Track record</div><div className="v"><strong className="ledger-number">500+</strong>businesses served across web, commerce, and AI work.</div></div>
          </div>
        </div>

        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">§ Key Facts</div>
              <h2>What AI Consulting Services Are, and What an AI Consulting Company Does</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><div><p data-speakable><span className="stat">AI consulting services help a business decide where AI will pay off, check that its data and systems are ready, and then put that AI into daily work.</span> The strategy part is called AI strategy consulting. The hands-on part is called AI implementation. Good firms do both, because a plan that nobody builds changes nothing.</p></div></div>
                <div className="fact"><div className="sec">§02</div><div><p>An AI consulting company does five jobs for you:</p><ul>
                  <li><span><b>Readiness assessment:</b> a scored check of your data, systems, processes, people and risk rules</span></li>
                  <li><span><b>Use-case roadmap:</b> every idea ranked by value, effort and risk, with a clear first project</span></li>
                  <li><span><b>Build-or-buy advice:</b> use AI already in your software, buy a proven tool, or build custom</span></li>
                  <li><span><b>Implementation:</b> the AI connected to your CRM, ERP, help desk or store, and tested on real cases</span></li>
                  <li><span><b>Support:</b> monitoring, training and updates after launch, as models and APIs change</span></li>
                </ul></div></div>
                <div className="fact"><div className="sec">§03</div><p><span className="stat">Only about 17% to 20% of US businesses used AI in their operations between December 2025 and May 2026.</span> Use rises with size: 37% of firms with at least 250 employees reported using AI, against less than 20% of firms with four or fewer employees. There is still room to get ahead. <a href={CENSUS} target="_blank" rel="noopener">U.S. Census Bureau, 2026 ↗</a></p></div>
                <div className="fact"><div className="sec">§04</div><p><span className="stat">About 95% of the generative AI pilots in an MIT study had no measurable effect on profit.</span> The researchers blamed poor fit with real work, not weak models. Buying from specialist vendors and working with partners succeeded about 67% of the time, against roughly one third for solo internal builds. <a href={FORTUNE_MIT} target="_blank" rel="noopener">MIT NANDA via Fortune, 2025 ↗</a></p></div>
                <div className="fact"><div className="sec">§05</div><p><span className="stat">BCG puts only about 10% of the value of an AI transformation in the AI application itself.</span> Another 20% comes from data and technology, and 70% from workflow redesign, culture, governance and how people work with the AI. That is why our assessment spends most of its time on process and people. <a href={BCG} target="_blank" rel="noopener">BCG ↗</a></p></div>
                <div className="fact"><div className="sec">§06</div><p>For risk, we use the NIST AI Risk Management Framework, a free, voluntary US framework released in January 2023, as the checklist for approvals, logging and data handling. It scales down well for small and mid-size businesses. <a href={NIST} target="_blank" rel="noopener">NIST ↗</a></p></div>
                <div className="fact"><div className="sec">§07</div><p>FactoryJet is an AI consulting company that also builds. Bhavesh, our founder, and the team run your engagement from the first assessment call to support after launch. We also build ecommerce stores, websites and AI search programs, so a use case that touches your store or your site does not wait on another vendor.</p></div>
              </div>
              <VisualSlot className="factphoto" slot="facts-workshop" kind="photo" ratio="3:2" subject="Two FactoryJet consultants and the owner of a US distribution business at a conference table in a bright office, reviewing a printed process map with sticky notes; a laptop on the table faces the people using it; natural light, no readable text, no logos" />
            </div>
          </div>
        </section>

        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Compare</div>
              <h2>AI Consulting vs. AI Development vs. AI Agent Development</h2>
            </div>
            <div className="tablewrap" tabIndex={0} role="region" aria-label="AI consulting service comparison">
              <table>
                <thead><tr><th>Service</th><th>The question it answers</th><th>What you get</th><th>Start here when</th></tr></thead>
                <tbody>
                  <tr className="us"><th>AI consulting<br /><span className="mono tableSubLabel tableSubLabelAccent">This page</span></th><td>Where should AI go in our business, and are we ready?</td><td>Readiness scores, a ranked use-case roadmap, a build-or-buy call, then the build and support</td><td>You know AI matters but not where to start, or a first pilot went nowhere</td></tr>
                  <tr><th>AI development<br /><span className="mono tableSubLabel"><a href="/services/ai-development">Own page ↗</a></span></th><td>How do we build this AI feature or product?</td><td>Custom AI software: model integrations, retrieval over your documents, AI features inside your app</td><td>The use case is chosen and you need engineers to build it</td></tr>
                  <tr><th>AI agent development<br /><span className="mono tableSubLabel"><a href="/services/ai-agent-development">Own page ↗</a></span></th><td>Can an AI take this job end to end, with approval?</td><td>An agent that reads your systems, takes actions and hands edge cases to a person</td><td>The job is a repeated workflow across your CRM, ERP, help desk or store</td></tr>
                  <tr><th>AI integration<br /><span className="mono tableSubLabel"><a href="/services/ai-integration-services">Own page ↗</a></span></th><td>How do we connect AI to the tools we already run?</td><td>AI wired into existing software through APIs, with clean data flowing both ways</td><td>You already bought an AI tool and it cannot see your data</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="definition" id="definition">
          <VisualSlot className="definition-image" slot="readiness-diagram" kind="diagram" ratio="3:2" subject="Clean flat diagram on white: five vertical bars labelled only by simple icons (database, plug, flowchart, people, shield) with one shorter bar highlighted in orange #F05A28 to show the weakest pillar; no words, no numbers" />
          <div className="definition-copy">
            <div className="eyebrow">Term</div>
            <h2 className="term">AI Readiness Assessment</h2>
            <p>An AI readiness assessment is a short, structured check of whether a business can use AI well today. It scores five pillars: data, systems, process, people, and governance and risk. A weak pillar is not a reason to stop. It tells you what to fix first, or which use case to pick because it avoids that weakness. The output is a score per pillar, a list of gaps in priority order, and the two or three use cases you could start now. It is the entry point for every FactoryJet AI consulting engagement, and it has a fixed scope and a fixed quote.</p>
          </div>
        </section>

        <section className="section capabilities" id="capabilities">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Capabilities</div>
              <h2>AI Consulting Services We Deliver</h2>
            </div>
            <div className="capgrid">
              {CAPABILITIES.map((cap, i) => {
                const inner = (
                  <>
                    <div className="caphead"><span className="capid">CAP‑{String(i + 1).padStart(2, '0')}</span><CapIcon d={cap.icon} /></div>
                    <div className="cap-diagram" aria-hidden="true"><svg viewBox="0 0 440 160" fill="none" stroke="currentColor" strokeWidth="1.5">{DIAGRAMS[i]}</svg></div>
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

        <section className="section changes" id="readiness">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Readiness Assessment</div>
              <h2>What the AI Readiness Assessment Checks, Pillar by Pillar</h2>
              <p>Five pillars, 30 specific checks. If an AI consultant cannot tell you what they will look at before they start, you are paying for a conversation, not an assessment.</p>
            </div>
            {PILLARS.map((group, i) => (
              <div className="agentdir-group chg-group" key={group.title}>
                <div className="agentdir-label">
                  <span className="capid">PIL‑{String(i + 1).padStart(2, '0')}</span>
                  <h3>{group.title}</h3>
                  <p>{group.lead}</p>
                  <span className="mono agentdir-count">{group.items.length} checks</span>
                </div>
                <ul className="chg-list">
                  {group.items.map(([bold, rest]) => <li key={bold}><span><b>{bold}</b>{rest}</span></li>)}
                </ul>
              </div>
            ))}
            <p className="chg-note">The pillar split follows the way most readiness frameworks describe the problem. The risk checks follow the <a href={NIST} target="_blank" rel="noopener">NIST AI Risk Management Framework ↗</a>, and the weight we put on people and process follows <a href={BCG} target="_blank" rel="noopener">BCG&apos;s 10/20/70 finding ↗</a>. You keep the full assessment, whether or not we build anything next.</p>
          </div>
        </section>

        <section className="midcta" id="next-step" aria-labelledby="midcta-heading">
          <div className="wrap midcta-inner">
            <div>
              <div className="eyebrow">Next Step</div>
              <h2 id="midcta-heading">Find Out Where AI Pays Off in Your Business First</h2>
              <p>Book a short call. Bhavesh or a senior team member will ask about your systems and your most repeated work, then tell you whether an assessment is worth it for you. Sometimes the honest answer is to turn on AI you already pay for.</p>
            </div>
            <div className="ctas">
              <a className="btn btn-primary" href="/contact">Book an AI readiness call</a>
              <a className="btn btn-ghost" href="#use-cases">See where AI pays off first</a>
            </div>
          </div>
        </section>

        <section className="section platforms" id="use-cases">
          <div className="wrap">
            <div className="section-head plat-head">
              <div><div className="eyebrow">Use Cases</div><h2>Where AI Pays Off First for Small and Mid-Size Businesses</h2></div>
              <p>MIT found the biggest AI returns in back-office work, even though more than half of generative AI budgets go to sales and marketing tools. Our roadmaps usually land on one of these six first projects. Each has its own page with the full build scope.</p>
            </div>
            <div className="platlist" role="list">
              {USE_CASES.map((row) => (
                <a key={row.href} className="plat" role="listitem" href={row.href}>
                  <span className="capid">{row.code}</span>
                  <div className="plat-name"><h3>{row.name}</h3></div>
                  <div className="plat-fit"><span className="k">Best for</span>{row.fit}</div>
                  <p className="plat-build">{row.build}</p>
                  <span className="plat-go" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
            <div className="agentdir-group ind-block">
              <div className="agentdir-label"><h3>AI consulting by industry</h3><p>The first project looks different in every industry. These pages show the agents we build for each one.</p><span className="mono agentdir-count">{INDUSTRIES.length} industries</span></div>
              <DirectoryList items={INDUSTRIES} />
            </div>
            <div className="plat-foot"><span>Want a rough payback number before a call? Try the calculator.</span><a href="/tools/ai-agent-roi-calculator">Run the AI Agent ROI Calculator ↗</a></div>
          </div>
        </section>

        <section className="photobreak" id="photobreak" aria-label="Illustration">
          <VisualSlot slot="photobreak-implementation" kind="photo" ratio="1536:560" subject="Wide shot of an operations manager at a US warehouse office desk reviewing an AI-drafted order summary on a monitor that faces her, a FactoryJet engineer seated beside her pointing at the screen; shelving visible through a window; no readable text, no logos" />
        </section>

        <section className="section process" id="how">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Process</div>
              <h2>How an AI Consulting Engagement Works</h2>
            </div>
            <div className="timeline">
              <div className="tnode"><div className="idx">01</div><h3>Discovery call</h3><p>A short call about your systems, your most repeated work, and what you have tried. If AI is not the answer yet, we say so.</p></div>
              <div className="tnode"><div className="idx">02</div><h3>Readiness assessment</h3><p>Fixed scope, fixed quote. We score the five pillars, interview the people who do the work, and open the systems.</p></div>
              <div className="tnode"><div className="idx">03</div><h3>Roadmap</h3><p>Use cases ranked by value, effort and risk, a build-or-buy call for each, and a dated plan for the first one.</p></div>
              <div className="tnode"><div className="idx">04</div><h3>Pilot build</h3><p>One use case built on your real data, tested against your baseline. Narrow agents typically reach production in 3 to 12 weeks.</p></div>
              <div className="tnode"><div className="idx">05</div><h3>Support &amp; scale</h3><p>Monitoring, error review and monthly reports, then the next use case on the roadmap when the first one proves out.</p></div>
            </div>
            <div className="timelineAction">
              <a className="btn btn-primary" href="/contact">Book an AI readiness call</a>
              <a className="btn btn-ghost" href={COST_GUIDE}>Read the AI cost guide</a>
            </div>
          </div>
        </section>

        <section className="section comparison firmtypes" id="firm-types">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Choose a Firm</div>
              <h2>Types of AI Consulting Firms, and Who Each One Suits</h2>
              <p>Every kind of firm below does good work for the right client. The mistake is hiring a firm built for a different size of business than yours.</p>
            </div>
            <div className="tablewrap" tabIndex={0} role="region" aria-label="Types of AI consulting firms comparison">
              <table>
                <thead><tr><th>Type of firm</th><th>Best for</th><th>What you usually get</th><th>Watch for</th></tr></thead>
                <tbody>
                  <tr><th>Big Four and strategy firms<br /><span className="mono tableSubLabel">EY, BCG and peers</span></th><td>Large enterprises with board-level AI programs</td><td>Strategy, governance, risk and change programs across many business units</td><td>Scope and team size built for enterprise budgets. Build work is often handed to another team</td></tr>
                  <tr><th>Enterprise IT consultancies<br /><span className="mono tableSubLabel">IBM Consulting, The Hackett Group</span></th><td>Big companies modernizing data platforms and ERP</td><td>Data engineering, platform work and AI at scale</td><td>Long programs. Small first projects are rarely their focus</td></tr>
                  <tr><th>Managed IT providers<br /><span className="mono tableSubLabel">Local MSPs</span></th><td>Businesses that want AI bundled with IT and security</td><td>Tool rollout, Microsoft Copilot setup, policies and training</td><td>Strong on setup, lighter on custom builds and integrations</td></tr>
                  <tr><th>Freelance AI consultants</th><td>A single, well-defined task on a tight budget</td><td>Fast advice or a small automation</td><td>One person to rely on for support, and no team behind them when they are away</td></tr>
                  <tr className="us"><th>FactoryJet<br /><span className="mono tableSubLabel tableSubLabelAccent">Advise, build, support</span></th><td>Small and mid-size US businesses, especially commerce and operations-heavy ones</td><td>Readiness assessment, roadmap, the build itself and monthly support from one team</td><td>Best fit when you want the team that writes the roadmap to build it and support it</td></tr>
                </tbody>
              </table>
            </div>
            <p className="sub-note">Comparing named firms? Our guide to the <a href={FIRMS_LIST}>best AI consulting firms in the USA</a> reviews them by business size, and <a href="/blog/how-to-hire-an-ai-agent-developer-2026">how to hire an AI agent developer</a> covers the build side.</p>
          </div>
        </section>

        <section className="vlog" id="rules">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Verification Log</div>
              <h2>Four Rules We Hold Our AI Consulting To</h2>
              <p>On this page and in every client engagement.</p>
            </div>
            <div className="ventries">
              <div className="ventry"><span className="vtag">VERIFIED</span><h3>Every number links to its source</h3><p>Each statistic on this page links to the report it came from. Client assessments follow the same rule: every saving we estimate is built from your own numbers, shown line by line.</p></div>
              <div className="ventry"><span className="vtag">DISCLOSED</span><h3>We tell you when to buy, not build</h3><p>If AI already inside your software does the job, the roadmap says so. A consultant who only ever recommends custom builds is selling builds, not advice.</p></div>
              <div className="ventry"><span className="vtag">OWNED</span><h3>You own everything we build</h3><p>Code, prompts, workflows and AI provider accounts are set up in your name. Nothing we build stops working if you stop working with us.</p></div>
              <div className="ventry"><span className="vtag">ON REQUEST</span><h3>We only publish results we can prove</h3><p>Ask for live references and a walkthrough of AI we have running for clients on a call.</p></div>
            </div>
          </div>
        </section>

        <section className="section agencies" id="agencies">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Compare</div>
              <h2>Who Ranks for AI Consulting Services in the US Today</h2>
              <p>These are the consulting firms on Google&apos;s first page for ai consulting services and ai implementation services in the US, pulled from DataForSEO (desktop, English) on 26 September 2026. The number is each firm&apos;s order among the organic results. Roundups, review sites and analyst pages are left out because they are not consulting firms. Rankings move every week, so treat this as a snapshot.</p>
            </div>
            <div className="tablewrap" tabIndex={0} role="region" aria-label="AI consulting firms search snapshot">
              <table>
                <thead><tr><th>Firm</th><th>Google order, 26 Sep 2026</th><th>What their page offers</th><th>Also worth knowing</th></tr></thead>
                <tbody>
                  {PAGE_ONE_FIRMS.map((c) => (
                    <tr key={c.domain}>
                      <th>{c.name}<br /><span className="mono tableSubLabel">{c.domain}</span></th>
                      <td className="poscell">
                        {SEARCHES.map((term, i) => (
                          <span className="posrow" key={term}>
                            <span className="mono">{term}</span>
                            <b>{c.positions[i] ? `#${c.positions[i]}` : 'not page one'}</b>
                          </span>
                        ))}
                      </td>
                      <td>{c.offers}</td>
                      <td>{c.note}</td>
                    </tr>
                  ))}
                  <tr className="us">
                    <th>FactoryJet<br /><span className="mono tableSubLabel tableSubLabelAccent">This page</span></th>
                    <td className="poscell">Added for comparison.</td>
                    <td>A readiness assessment, a ranked roadmap, the build itself and monthly support, from Bhavesh and one team.</td>
                    <td>We fit small and mid-size businesses that want advice and a working build from the same people.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="wrap">
            <div className="faqwrap">
              <div className="faqintro">
                <div className="eyebrow">FAQ</div>
                <h2 className="faqHeading">AI Consulting Questions, Answered Directly</h2>
                <p>{AI_CONSULTING_FAQS.length} real questions US buyers ask Google and AI assistants about AI consulting, most taken word for word from Google&apos;s People Also Ask boxes. For prices, see our <a className="inline-link" href={COST_GUIDE}>AI agent cost guide</a>.</p>
                <nav className="faq-catnav" aria-label="FAQ categories">
                  {AI_CONSULTING_FAQ_CATEGORIES.map((category) => <a key={category.id} href={`#${category.id}`}>{category.label}</a>)}
                </nav>
              </div>
              <AiConsultingFaqAccordion />
            </div>
          </div>
        </section>

        <section className="section referencesSection references" id="references">
          <div className="wrap">
            <div className="eyebrow">References</div>
            <div className="refs">
              <a href="/services/ai-development">AI Development Services</a>
              <a href="/services/ai-agent-development">AI Agent Development</a>
              <a href="/services/ai-integration-services">AI Integration Services</a>
              <a href="/services/ai-agent-monitoring">AI Agent Monitoring</a>
              <a href={FIRMS_LIST}>Best AI Consulting Firms in the USA</a>
              <a href={COST_GUIDE}>How Much Does an AI Agent Cost</a>
              <a href="/blog/ai-consultant-cost-2026">How Much Does an AI Consultant Cost</a>
              <a href={BUILD_VS_BUY}>AI Agents: Build vs. Buy</a>
              <a href="/blog/ai-agents-small-business-usa-2026">AI Agents for US Small Businesses</a>
              <a href={CENSUS} target="_blank" rel="noopener">U.S. Census Bureau: AI Use by Businesses</a>
              <a href={FORTUNE_MIT} target="_blank" rel="noopener">Fortune: MIT Report on AI Pilots</a>
              <a href={BCG} target="_blank" rel="noopener">BCG: AI Transformation</a>
              <a href={NIST} target="_blank" rel="noopener">NIST AI Risk Management Framework</a>
              <a href={HBS} target="_blank" rel="noopener">HBS Online: AI Implementation Cost</a>
            </div>
          </div>
        </section>

        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <h2>Get an Honest Answer on Where AI Fits</h2>
              <p>Tell us what your team spends the most time on. We will tell you whether AI can take part of it, what it would take, and whether you need us at all. Fixed quote before any work starts.</p>
            </div>
            <div className="ctas">
              <a className="btn btn-primary" href="/contact">Book an AI readiness call</a>
              <a className="btn btn-ghost" href="/services/ai-agent-development">See the AI agents we build</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
