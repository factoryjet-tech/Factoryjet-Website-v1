import { Fragment, type ReactNode } from 'react';
import { AI_SEO_FAQ_CATEGORIES, AI_SEO_FAQS } from './AiSeoHubFaqs';
import { US_SEO_CITY_PAGES } from './SeoCityLinksUS';
import './AiAgentDevelopmentSections.css';
import './AiSeoHubSections.css';

/*
 * AI Search & SEO hub (/services/ai-seo), rebuilt 2026-09-23 in the AI Agent
 * Development page's design system, following the homepage port pattern.
 * Approved mockup: scratchpad hubs/ai-seo/index.html (generator build.py + faqs.py),
 * keyword map in its work/KEYWORD-MAP.md, SERP data from DataForSEO on 2026-09-23.
 *
 * Static server component, no client code. The hero citation-path panel animates
 * with CSS only (same mechanism as /services/ai-agent-development).
 *
 * Arrays exported here (CAPABILITIES, COMPETITORS, breadcrumbs) also feed the
 * Service, ItemList and BreadcrumbList JSON-LD in page.tsx, so schema always
 * matches what the reader sees. The FAQ array lives in AiSeoHubFaqs.ts.
 */

export const breadcrumbs = [
  { name: 'Home', url: 'https://factoryjet.com/' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI Search & SEO', url: 'https://factoryjet.com/services/ai-seo' },
];

const PEW = 'https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/';
const TC = 'https://techcrunch.com/2025/07/23/googles-ai-overviews-have-2b-monthly-users-ai-mode-100m-in-the-us-and-india/';
const FORT = 'https://fortune.com/2025/04/14/sam-altman-openai-user-base-doubled-few-weeks-10-of-world-uses-system/';
const GOOG = 'https://developers.google.com/search/docs/appearance/ai-features';
const OAI = 'https://developers.openai.com/api/docs/bots';
const ANT = 'https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler';

function WorkflowIcon({ d }: { d: string }) {
  return (
    <span className="workflow-icon" aria-hidden="true">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
    </span>
  );
}

function CapIcon({ d }: { d: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C94A1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
  );
}

const DIAGRAMS: ReactNode[] = [
  <g key="d1"><rect className="diagram-surface" x="30" y="14" width="70" height="20" rx="5" /><path d="M42 24h30" /><rect className="diagram-surface" x="30" y="41" width="70" height="20" rx="5" /><path d="M42 51h30" /><rect className="diagram-surface" x="30" y="68" width="70" height="20" rx="5" /><path d="M42 78h30" /><rect className="diagram-surface" x="30" y="95" width="70" height="20" rx="5" /><path d="M42 105h30" /><rect className="diagram-surface" x="30" y="122" width="70" height="20" rx="5" /><path d="M42 132h30" /><path className="diagram-wire" d="M100 24h40q12 0 12 12v44m-52-2h52m-52 29h40q12 0 12-12V80m0 0h66m95 0h40" /><rect className="diagram-core" x="218" y="44" width="95" height="72" rx="12" /><circle cx="260" cy="76" r="15" /><path d="m271 87 14 14" /><rect className="diagram-surface" x="353" y="30" width="62" height="100" rx="8" /><path d="M367 52h34M367 66h34M367 80h20m-20 22 7 7 13-15" /></g>,
  <g key="d2"><rect className="diagram-surface" x="40" y="20" width="190" height="120" rx="10" /><rect className="diagram-core" x="58" y="34" width="14" height="14" rx="3" /><path d="M84 41h110" /><rect className="diagram-core" x="58" y="58" width="14" height="14" rx="3" /><path d="M84 65h96" /><rect className="diagram-core" x="58" y="82" width="14" height="14" rx="3" /><path d="M84 89h82" /><rect className="diagram-surface" x="58" y="106" width="14" height="14" rx="3" /><path d="M84 113h68" /><path d="M61 41l3 3 5-6M61 65l3 3 5-6M61 89l3 3 5-6" /><path className="diagram-wire" d="M230 41h80q14 0 14 14v0h36M230 65h130M230 89h80q14 0 14-14" /><circle className="diagram-core" cx="378" cy="55" r="14" /><circle className="diagram-surface" cx="378" cy="105" r="14" /><path className="diagram-faint" d="M230 113h134" /></g>,
  <g key="d3"><rect className="diagram-core" x="180" y="16" width="80" height="44" rx="10" /><path d="M206 28q-6 0-6 6v4q0 4-4 4 4 0 4 4v4q0 6 6 6m28-28q6 0 6 6v4q0 4 4 4-4 0-4 4v4q0 6-6 6" /><path className="diagram-wire" d="M220 60v20M70 80h300M70 80v18m100-18v18m100-18v18m100-18v18" /><rect className="diagram-surface" x="35" y="98" width="70" height="42" rx="7" /><path d="M48 113h44M48 125h28" /><rect className="diagram-surface" x="135" y="98" width="70" height="42" rx="7" /><path d="M148 113h44M148 125h28" /><rect className="diagram-surface" x="235" y="98" width="70" height="42" rx="7" /><path d="M248 113h44M248 125h28" /><rect className="diagram-surface" x="335" y="98" width="70" height="42" rx="7" /><path d="M348 113h44M348 125h28" /></g>,
  <g key="d4"><rect className="diagram-surface" x="40" y="14" width="200" height="132" rx="10" /><path d="M58 32h90" /><rect className="diagram-core" x="58" y="44" width="164" height="40" rx="6" /><path d="M70 58h120M70 70h86" /><path className="diagram-faint" d="M58 100h164M58 114h164M58 128h110" /><path className="diagram-wire" d="M222 64h80q14 0 14 14v2h24" /><path className="diagram-surface" d="M340 50h66q8 0 8 8v40q0 8-8 8h-40l-16 14v-14h-10q-8 0-8-8V58q0-8 8-8Z" /><path d="M356 70h42M356 84h28" /></g>,
  <g key="d5"><path className="diagram-wire" d="M220 80 100 36m120 44L100 124m120-44 120-44m-120 44 120 44m-120-44h-150m150 0h150" /><rect className="diagram-surface" x="70" y="18" width="60" height="36" rx="7" /><path d="M84 32h32M84 42h20" /><rect className="diagram-surface" x="70" y="106" width="60" height="36" rx="7" /><path d="M84 120h32M84 130h20" /><rect className="diagram-surface" x="310" y="18" width="60" height="36" rx="7" /><path d="M324 32h32M324 42h20" /><rect className="diagram-surface" x="310" y="106" width="60" height="36" rx="7" /><path d="M324 120h32M324 130h20" /><rect className="diagram-surface" x="16" y="62" width="60" height="36" rx="7" /><path d="M30 76h32M30 86h20" /><rect className="diagram-surface" x="364" y="62" width="60" height="36" rx="7" /><path d="M378 76h32M378 86h20" /><circle className="diagram-core" cx="220" cy="80" r="30" /><path d="m206 80 9 9 18-20" /></g>,
  <g key="d6"><path className="diagram-faint" d="M40 136h360M40 104h360M40 72h360M40 40h360" /><rect className="diagram-wave" x="70" y="92" width="30" height="44" rx="3" stroke="none" /><rect className="diagram-wave" x="136" y="66" width="30" height="70" rx="3" stroke="none" /><rect className="diagram-wave" x="202" y="78" width="30" height="58" rx="3" stroke="none" /><rect className="diagram-wave" x="268" y="50" width="30" height="86" rx="3" stroke="none" /><rect className="diagram-wave" x="334" y="32" width="30" height="104" rx="3" stroke="none" /><path className="diagram-wire" d="M85 84 151 60l66 12 66-28 66-20" /><circle className="diagram-core" cx="349" cy="24" r="6" /></g>,
];

export const CAPABILITIES: ReadonlyArray<{ href?: string; icon: string; title: string; body: string; tags: string[] }> = [
  { href: '/ai-visibility-checker', icon: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm9 16-4-4', title: 'AI Visibility Audit',
    body: 'A count of how often ChatGPT, Perplexity, Claude, Gemini and AI Overviews cite you today, the gaps competitors fill, and a 90-day fix list in priority order.',
    tags: ['ChatGPT', 'Perplexity', 'Claude', 'Gemini', 'AI Overviews'] },
  { icon: 'M4 4h16v16H4zM8 9l2 2 4-4M8 15h8', title: 'Crawler Access',
    body: 'robots.txt rules that name every retrieval bot, so the crawlers that fetch pages for AI answers are never blocked by a wildcard by accident.',
    tags: ['OAI-SearchBot', 'Claude-SearchBot', 'PerplexityBot'] },
  { icon: 'M8 4q-3 0-3 3v2q0 3-2 3 2 0 2 3v2q0 3 3 3m8-16q3 0 3 3v2q0 3 2 3-2 0-2 3v2q0 3-3 3', title: 'Schema & Structured Data',
    body: 'Entity and schema work so engines know exactly who you are: JSON-LD that matches what the reader sees, from Organization and Article to an FAQPage built from the visible FAQ.',
    tags: ['Entities', 'JSON-LD', 'FAQPage'] },
  { href: '/services/generative-engine-optimization', icon: 'M6 3h9l4 4v14H6zM9 10h7M9 14h7M9 18h4', title: 'Answer-First Content',
    body: 'Question-shaped headings with a 40 to 60 word answer right underneath, written by people with real expertise, so an engine can lift the answer whole.',
    tags: ['GEO', 'AEO', 'Featured snippets'] },
  { icon: 'M12 3v18M3 12h18M6 6l12 12M18 6 6 18', title: 'Third-Party Citations',
    body: 'Named mentions in industry publications, review sites, podcasts and community threads the engines already read. No bulk guest posts and no link schemes.',
    tags: ['Digital PR', 'Reviews', 'Communities'] },
  { icon: 'M4 20V10m6 10V4m6 16v-8m4 8V7', title: 'AI Visibility Tracking & Leads',
    body: 'The same buyer questions run through every engine on the same schedule each month, reported next to Google rankings, Search Console clicks, and the leads that AI-referred visits turned into.',
    tags: ['Per-engine counts', 'Search Console', 'GA4'] },
];

/** Each item is [bold lead, rest of the line]. */
const CHANGES: ReadonlyArray<{ title: string; lead: string; items: ReadonlyArray<readonly [string, string]> }> = [
  { title: 'Crawler access in robots.txt', lead: 'The cheapest way to disappear from AI answers is blocking the wrong bot by accident.', items: [
    ['OAI-SearchBot allowed', ', the crawler that gates ChatGPT search answers'],
    ['GPTBot decided on purpose', ', since OpenAI documents it as training only'],
    ['ChatGPT-User and OAI-AdsBot', ' handled as their own cases'],
    ['Claude-SearchBot and Claude-User', ' named, never left to a wildcard'],
    ['ClaudeBot', ' treated as the training crawler Anthropic says it is'],
    ['PerplexityBot and Perplexity-User', ' both listed by name'],
    ['Google-Extended and Applebot-Extended', ' set to match your rights policy'],
    ['Bingbot access', ' checked, since ChatGPT search leans on web results'],
    ['Content-Signal line', ' kept consistent with the rules above it'],
  ] },
  { title: 'Structured data that matches the page', lead: 'Google requires markup to describe what a reader actually sees. Schema that says something else is a trust problem.', items: [
    ['Organization', ' with profile links that genuinely resolve'],
    ['WebPage', ' with an honest last-updated date, not a build timestamp'],
    ['Article', ' with a real named author'],
    ['BreadcrumbList', ' on every nested URL'],
    ['FAQPage', ' built from the same list the visible FAQ shows'],
    ['HowTo', ' only where the topic is truly a procedure'],
    ['Service, Product and Offer', ' where they honestly apply'],
    ['ItemList', ' on comparison and roundup pages'],
    ['Every block tested', ' in Rich Results Test and the Schema Markup Validator'],
  ] },
  { title: 'Indexing, freshness and entity signals', lead: 'Getting quoted starts with getting fetched, then fetched again. Most sites lose here quietly.', items: [
    ['Sitemaps split by section', ', with no redirecting URLs inside'],
    ['IndexNow', ' pings so Bing sees a change the same day'],
    ['URL Inspection', ' in Search Console to confirm the rendered page'],
    ['Bing Webmaster Tools', ' verified, because it feeds more than Bing'],
    ['Canonical tags and hreflang', ' with a real x-default'],
    ['Single-hop 301 redirects', ', never a two-hop chain'],
    ['Wikidata and Knowledge Graph', ' work so a model knows who you are'],
    ['llms.txt', ' published, with the honest note that no engine is known to read it'],
    ['Business name, address and profiles', ' kept consistent everywhere'],
  ] },
  { title: 'Rendering, speed and page hygiene', lead: 'AI crawlers are less forgiving than a browser. Content that only exists after JavaScript runs may never be seen.', items: [
    ['Key copy server-rendered', ' into the first HTML response'],
    ['Nothing important', ' that appears only after scripts load'],
    ['Core Web Vitals', ' held at INP under 200ms and CLS near zero'],
    ['LCP element', ' found, then made text or a preloaded image'],
    ['Answer blocks', ' placed in the first third of the page'],
    ['One H1', ' and a strict H1, H2, H3 order with no skipped levels'],
    ['Real tables and lists', ' instead of styled boxes'],
    ['Alt text', ' written for meaning, not keywords'],
    ['Accordion content', ' still in the page when collapsed'],
  ] },
];

const SEO_SERVICES: ReadonlyArray<{ href: string; name: string; flag?: string; fit: string; build: string }> = [
  { href: '/services/generative-engine-optimization', name: 'Generative Engine Optimization', flag: 'OWNS GEO · AEO · LLM SEO', fit: 'Brands that want to be named inside ChatGPT, Perplexity and Claude answers', build: 'The full GEO and AEO playbook on its own page: answer-first page design, entity work, and citation tracking for each engine.' },
  { href: '/services/local-seo', name: 'Local SEO', fit: 'Businesses that serve a city or a service area', build: 'Google Business Profile, map pack rankings, local landing pages, and business listings that match everywhere.' },
  { href: '/services/small-business-seo', name: 'Small Business SEO', fit: 'Owners who need leads without an enterprise budget', build: 'Starts with the handful of fixes that bring the most calls and form fills, not a long list of busywork.' },
  { href: '/services/ecommerce-seo', name: 'E-commerce SEO', fit: 'Online stores on any platform', build: 'Category and product page structure, Product and Offer schema, faceted navigation, and crawl budget.' },
  { href: '/services/shopify-seo', name: 'Shopify SEO', fit: 'Shopify and Shopify Plus stores', build: 'Duplicate collection URLs, thin collection pages, theme speed, and the structured data many themes leave out.' },
  { href: '/services/seo-audit', name: 'SEO Audit', fit: 'Sites that lost traffic, or never gained it', build: 'A technical, content and authority review with a fix list in priority order, before you spend more.' },
  { href: '/services/seo-consulting', name: 'SEO Consulting', fit: 'Teams with their own writers or developers', build: 'Strategy, roadmaps and reviews for your team to carry out, with a senior practitioner on call.' },
];

const INDUSTRY_SEO = [
  { title: 'Healthcare SEO', href: '/services/healthcare-seo', line: 'Clinics and providers, built on strong trust signals' },
  { title: 'Dental SEO', href: '/services/dental-seo', line: 'New patients for practices competing locally' },
  { title: 'Law Firm SEO', href: '/services/law-firm-seo', line: 'High-intent case inquiries in a crowded local market' },
  { title: 'Roofing SEO', href: '/services/roofing-seo', line: 'Storm-driven demand and service-area rankings' },
];

const INDIA_SEO = [
  { title: 'AI SEO Company in India', href: '/ai-seo', line: 'AI SEO, GEO and AEO for Indian businesses' },
  { title: 'SEO Company in India', href: '/seo', line: 'The India SEO hub, with city pages' },
  { title: 'Technical SEO Services in India', href: '/seo/technical-seo', line: 'Speed, crawling, indexing and schema' },
  { title: 'Local SEO Services in India', href: '/seo/local-seo', line: 'Google Business Profile and map results' },
  { title: 'Ecommerce SEO Services in India', href: '/seo/ecommerce-seo', line: 'Category, product and store structure' },
  { title: 'SEO services in Delhi, Mumbai and Bangalore', href: '/seo/delhi', line: 'City pages, starting with Delhi' },
];

/** Google positions from the DataForSEO pull (desktop, English) on 23 Sep 2026. null = not in the top 10. */
const SEARCHES = [
  { market: 'US', term: 'ai seo agency' },
  { market: 'US', term: 'ai seo services' },
  { market: 'India', term: 'ai seo agency' },
  { market: 'India', term: 'ai seo services' },
] as const;

export const COMPETITORS: ReadonlyArray<{ name: string; domain: string; positions: ReadonlyArray<number | null>; offers: string; note: string; citedInAio: boolean }> = [
  { name: 'Thrive Agency', domain: 'thriveagency.com', positions: [4, 5, 6, 2], offers: 'Lists separate ChatGPT, Gemini, Perplexity, Claude and AI Overviews services on its AI SEO page.', note: 'The only agency on page one for all four searches, in both countries.', citedInAio: true },
  { name: 'OuterBox', domain: 'outerboxdesign.com', positions: [2, null, 5, null], offers: 'Tests your brand across ChatGPT, Perplexity, Gemini and Bing Copilot, and adds a conversion layer for AI-referred visits.', note: 'Second only to a Reddit thread for ai seo agency in the US.', citedInAio: true },
  { name: 'Level Agency', domain: 'level.agency', positions: [3, 7, null, null], offers: 'Frames AI SEO as a layer added on top of traditional SEO, with a straight-answers FAQ on generative search.', note: 'Cited inside the US AI Overviews for both searches.', citedInAio: true },
  { name: 'Coalition Technologies', domain: 'coalitiontechnologies.com', positions: [6, null, null, null], offers: 'A six-part framework: entity clarity, technical access, extractable answers, outside validation, tracking and conversion paths.', note: 'Also on page one for seo services in the US.', citedInAio: true },
  { name: 'Techmagnate', domain: 'techmagnate.com', positions: [null, null, 3, 1], offers: 'India-based. Separate ChatGPT, Perplexity, Gemini, AI Mode and Copilot services, and says it has 300+ digital marketing experts.', note: "Named in Google India's AI Overview for seo services too.", citedInAio: true },
  { name: 'SEO Discovery', domain: 'seodiscovery.com', positions: [null, null, 1, 3], offers: 'India-based. Owns the top India result for ai seo agency. Its page would not load without JavaScript, so we could not read its outline.', note: 'Also on page one for seo company in India.', citedInAio: true },
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

function AiSeoFaqAccordion() {
  return (
    <div className="faqlist">
      {AI_SEO_FAQ_CATEGORIES.map((category) => (
        <Fragment key={category.id}>
          <div className="faq-category" id={category.id}>{category.label}</div>
          {AI_SEO_FAQS.filter((faq) => faq.category === category.id).map((faq) => (
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

export default function AiSeoHubSections() {
  return (
    <div className="aiAgentPage aiSeoHub">
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
      <main id="ai-seo-content">
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">AI SEO Agency · US &amp; India · Service Specification</div>
              <h1>AI SEO Services That Get You <span className="hero-emphasis">Cited by AI</span> and Ranked on Google</h1>
              <p className="lead" data-speakable>FactoryJet is an AI SEO agency and SEO company for businesses in the US and India. When buyers ask ChatGPT, Perplexity, Claude, Gemini or Google AI Overviews who to hire, the answer names a few businesses. We work to make yours one of them, and keep your Google rankings climbing, on one month-to-month retainer with both numbers in every report.</p>
              <div className="actions">
                <a className="btn btn-primary" href="/ai-visibility-checker">Get a free AI visibility check</a>
                <a className="btn btn-ghost" href="#how">See how we work</a>
              </div>
            </div>

            <form className="specpanel" aria-label="Illustration of how a page becomes an AI citation">
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>CITATION PATH · BUYER PROMPT</span>
                <span className="sys"><span>CHATGPT</span><span>PERPLEXITY</span><span>CLAUDE</span><span>GEMINI</span><span>AIO</span></span>
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
              <div className="specpanel-body" role="radiogroup" aria-label="Explore the citation path">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="cite-step" value="1" />
                  <WorkflowIcon d="M4 5h16v11H9l-5 4V5Zm4 5h8M8 13h5" />
                  <span className="idx">STEP 01</span>
                  <span className="title">Buyer asks an AI assistant who to hire</span>
                  <span className="tag">ASK</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="cite-step" value="2" />
                  <WorkflowIcon d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14" />
                  <span className="idx">STEP 02</span>
                  <span className="title">Retrieval bot fetches your page</span>
                  <span className="tag">FETCH</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="cite-step" value="3" />
                  <WorkflowIcon d="M6 3h8l4 4v14H6V3Zm8 0v5h4M9 12h6M9 16h4" />
                  <span className="idx">STEP 03</span>
                  <span className="title">A 40 to 60 word answer is lifted out</span>
                  <span className="tag">EXTRACT</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="cite-step" value="4" />
                  <WorkflowIcon d="M12 3 3 7v5c0 5 9 9 9 9s9-4 9-9V7l-9-4Zm-4 9 3 3 5-6" />
                  <span className="idx">STEP 04</span>
                  <span className="title">Your business is named as the source</span>
                  <span className="tag">CITED</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · same buyer questions, same schedule, every month, so a change in citations means something.</div>
            </form>
          </div>
        </section>

        <div className="ledger">
          <div className="wrap">
            <div className="ledgercell"><div className="k">Founded</div><div className="v"><strong className="ledger-number">2014</strong></div></div>
            <div className="ledgercell"><div className="k">On every report</div><div className="v"><strong className="ledger-number">5</strong>AI answer surfaces: ChatGPT, Perplexity, Claude, Gemini and Google AI Overviews, next to classic rankings.</div></div>
            <div className="ledgercell"><div className="k">Contract</div><div className="v">Month to month. One billing cycle of notice, and everything we built stays yours.</div></div>
            <div className="ledgercell"><div className="k">Track record</div><div className="v"><strong className="ledger-number">500+</strong>businesses served across web, commerce, and AI work.</div></div>
          </div>
        </div>

        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">§ Key Facts</div>
              <h2>What AI SEO Services Are, and Why They Matter Now</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><div><p data-speakable><span className="stat">AI SEO services get your business cited, summarized and recommended by AI assistants like ChatGPT, Claude, Perplexity, Gemini and Google AI Overviews, alongside your normal Google rankings.</span> Classic SEO aims for a high spot in a list of blue links. AI SEO, or AI search optimization, aims to be the answer. It overlaps with <a className="inline-link" href="/services/generative-engine-optimization">generative engine optimization (GEO)</a>, answer engine optimization (AEO) and LLM SEO.</p></div></div>
                <div className="fact"><div className="sec">§02</div><div><p>An AI SEO agency does six jobs for you:</p><ul>
                  <li><span><b>GEO and AEO:</b> question-shaped headings with a 40 to 60 word answer right underneath, so an engine can quote it</span></li>
                  <li><span><b>Entities and schema:</b> clear facts about who you are, in Organization, FAQPage and Article markup</span></li>
                  <li><span><b>Crawler access:</b> robots.txt rules that name every retrieval bot instead of leaving them to a wildcard</span></li>
                  <li><span><b>Outside mentions:</b> publications, review sites and community threads the engines already read</span></li>
                  <li><span><b>AI visibility tracking:</b> how often each engine names you, month by month</span></li>
                  <li><span><b>Classic SEO:</b> technical, local and ecommerce SEO, because AI engines still read ranked pages</span></li>
                </ul></div></div>
                <div className="fact"><div className="sec">§03</div><p><span className="stat">When Google shows an AI summary, people click through to a website on 8% of searches, against 15% when there is no summary.</span> Links inside the summary get clicked 1% of the time. Being the source the summary quotes is now part of the job. <a href={PEW} target="_blank" rel="noopener">Pew Research Center, 2025 ↗</a></p></div>
                <div className="fact"><div className="sec">§04</div><p><span className="stat">About 2 billion people a month use Google AI Overviews</span>, the answer box above the blue links, which Google said was live in more than 200 countries and territories. Its chat-style AI Mode passed 100 million monthly users across the US and India. <a href={TC} target="_blank" rel="noopener">Google via TechCrunch, July 2025 ↗</a></p></div>
                <div className="fact"><div className="sec">§05</div><p><span className="stat">Around 800 million people use ChatGPT</span>, with OpenAI saying close to 10% of the world uses its tools. More buyers start their research inside an AI assistant every quarter. <a href={FORT} target="_blank" rel="noopener">Fortune / OpenAI, 2025 ↗</a></p></div>
                <div className="fact"><div className="sec">§06</div><p>Google says you do not need special AI files or special schema to appear in AI Overviews or AI Mode. Most AI SEO is ordinary, excellent SEO plus pages built so an answer can be lifted cleanly. Be wary of anyone selling a secret AI ruleset. <a href={GOOG} target="_blank" rel="noopener">Google Search Central ↗</a></p></div>
                <div className="fact"><div className="sec">§07</div><p>FactoryJet runs AI SEO and classic SEO as one workflow on one retainer, for clients in the US and India, because the same fixes earn both kinds of traffic. Bhavesh, our founder, and the team run your account, and every monthly report shows citations per engine next to Google rankings. We also build ecommerce stores, AI agents and websites, so fixes that need a developer do not wait on another vendor.</p></div>
              </div>
              <div className="factphoto">
                <img width="1000" height="667" src="/images/ai-seo-hub/ai-seo-facts-page-stack.webp" alt="AI-generated illustration for AI SEO services: a hand placing one orange page tile on a stack of white page tiles beside a magnifying lens" loading="lazy" decoding="async" />
                <div className="cap">FIELD REFERENCE · ONE PAGE PICKED AS THE SOURCE</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Compare</div>
              <h2>SEO vs. AI SEO vs. GEO: What Each One Wins</h2>
            </div>
            <div className="tablewrap">
              <table>
                <thead><tr><th>Discipline</th><th>What it wins</th><th>Where you show up</th><th>What gets reported</th></tr></thead>
                <tbody>
                  <tr><th>Classic SEO<br /><span className="mono tableSubLabel">Google, Bing, map pack</span></th><td>A high position in a list of links</td><td>Search results pages and local map results</td><td>Rankings, clicks and leads from Search Console</td></tr>
                  <tr><th>GEO / AEO<br /><span className="mono tableSubLabel"><a href="/services/generative-engine-optimization">Own page ↗</a></span></th><td>A quoted answer or a named mention</td><td>ChatGPT, Perplexity, Claude, Gemini and AI Overviews</td><td>Citations per engine for a fixed set of buyer questions</td></tr>
                  <tr className="us"><th>AI SEO<br /><span className="mono tableSubLabel tableSubLabelAccent">FactoryJet runs both</span></th><td>Both, from one set of fixes to your site</td><td>Everywhere above</td><td>Both numbers side by side in one monthly report</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="definition" id="definition">
          <div className="definition-image">
            <img width="1200" height="800" src="/images/ai-seo-hub/ai-seo-definition-answer-path.webp" alt="AI-generated model of how AI search optimization works: a web page feeds through a lens to several AI engines and one orange answer bubble" loading="lazy" decoding="async" />
          </div>
          <div className="definition-copy">
            <div className="eyebrow">Term</div>
            <h2 className="term">AI Citation</h2>
            <p>A citation is when an AI assistant names your business or links your page as a source inside the answer it writes. It is the AI search version of a ranking. There is no position one, only whether you are in the answer or not. A citation depends on three things: the engine&apos;s crawler could fetch your page, it found a short answer it could lift, and other sites it trusts back up what you say. Miss any one and a competitor gets named instead.</p>
          </div>
        </section>

        <section className="section capabilities" id="capabilities">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Capabilities</div>
              <h2>AI SEO Services We Deliver</h2>
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

        <section className="section changes" id="changes">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Implementation</div>
              <h2>What Changes on Your Site, Item by Item</h2>
              <p>Four groups of work, 36 specific changes. If an AI SEO company cannot hand you a list this specific, you are buying a report, not the work.</p>
            </div>
            {CHANGES.map((group, i) => (
              <div className="agentdir-group chg-group" key={group.title}>
                <div className="agentdir-label">
                  <span className="capid">GRP‑{String(i + 1).padStart(2, '0')}</span>
                  <h3>{group.title}</h3>
                  <p>{group.lead}</p>
                  <span className="mono agentdir-count">{group.items.length} changes</span>
                </div>
                <ul className="chg-list">
                  {group.items.map(([bold, rest]) => <li key={bold}><span><b>{bold}</b>{rest}</span></li>)}
                </ul>
              </div>
            ))}
            <p className="chg-note">Crawler roles above come from the vendors&apos; own documentation: <a href={OAI} target="_blank" rel="noopener">OpenAI crawlers ↗</a> and <a href={ANT} target="_blank" rel="noopener">Anthropic crawlers ↗</a>. None of this is a secret ruleset. It is careful SEO, done completely.</p>
          </div>
        </section>

        <section className="section platforms seo-hub" id="seo-services">
          <div className="wrap">
            <div className="section-head plat-head">
              <div><div className="eyebrow">Classic SEO</div><h2>SEO Services for Every Kind of Business</h2></div>
              <p>Still need rankings first? The same team works as a full SEO company: local SEO services, technical SEO services, ecommerce SEO services and SEO audits. Each service below has its own page with its full scope. Generative engine optimization lives on its own page too, so this hub links to it rather than repeating it.</p>
            </div>
            <div className="platlist" role="list">
              {SEO_SERVICES.map((row, i) => (
                <a key={row.href} className={row.flag ? 'plat plat-own' : 'plat'} role="listitem" href={row.href}>
                  <span className="capid">SEO‑{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{row.name}</h3>{row.flag && <span className="plat-flag">{row.flag}</span>}</div>
                  <div className="plat-fit"><span className="k">Best for</span>{row.fit}</div>
                  <p className="plat-build">{row.build}</p>
                  <span className="plat-go" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
            <div className="agentdir-group ind-block">
              <div className="agentdir-label"><h3>SEO by industry</h3><p>Programs built around one industry&apos;s buyers and rules.</p><span className="mono agentdir-count">{INDUSTRY_SEO.length} industries</span></div>
              <DirectoryList items={INDUSTRY_SEO} />
            </div>
            <div className="agentdir-group ind-block">
              <div className="agentdir-label"><h3>SEO in your US city</h3><p>Local search works differently in every market. Each city page covers the local competitors and what ranking in that map pack takes.</p><span className="mono agentdir-count">{US_SEO_CITY_PAGES.length} cities</span></div>
              <ul className="city-list">
                {US_SEO_CITY_PAGES.map((city) => (
                  <li key={city.slug}><a href={`/${city.slug}/seo`}>{city.label}</a></li>
                ))}
              </ul>
            </div>
            <div className="agentdir-group ind-block">
              <div className="agentdir-label"><h3>AI SEO and SEO in India</h3><p>India has its own hub pages, written for Indian buyers and search results.</p><span className="mono agentdir-count">{INDIA_SEO.length} pages</span></div>
              <DirectoryList items={INDIA_SEO} />
            </div>
            <div className="plat-foot"><span>Not sure where you stand? See who AI assistants recommend in your category today, free.</span><a href="/ai-visibility-checker">Run the free AI Visibility Checker ↗</a></div>
          </div>
        </section>

        <section className="photobreak" id="photobreak" aria-label="Illustration">
          <img width="1536" height="560" src="/images/ai-seo-hub/ai-seo-panorama-picked-answer.webp" alt="AI-generated model of a row of white page cards on a rail with one orange card raised above the rest" loading="lazy" decoding="async" />
          <div className="caption"><span className="dot"></span>FIELD REFERENCE · ONE ANSWER PICKED FROM MANY PAGES</div>
        </section>

        <section className="section process" id="how">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Process</div>
              <h2>How We Work</h2>
            </div>
            <div className="timeline">
              <div className="tnode"><div className="idx">01</div><h3>Audit</h3><p>We map every AI citation you hold today, the gaps competitors fill, and the fixes that close them. You get a 90-day roadmap.</p></div>
              <div className="tnode"><div className="idx">02</div><h3>Architecture</h3><p>Schema, FAQ blocks and page structure reworked so engines can lift answers word for word. Structure first, not a rewrite.</p></div>
              <div className="tnode"><div className="idx">03</div><h3>Content</h3><p>Articles that answer what your buyers ask AI assistants, written by people with real expertise. No AI filler.</p></div>
              <div className="tnode"><div className="idx">04</div><h3>Distribution</h3><p>Named mentions on publications, podcasts and directories the engines already trust.</p></div>
              <div className="tnode"><div className="idx">05</div><h3>Measure</h3><p>Citations per engine, Google rankings and leads, every month. Scope adjusts monthly. No annual lock-in.</p></div>
            </div>
            <div className="timelineAction">
              <a className="btn btn-primary" href="/contact">Scope your AI SEO</a>
              <a className="btn btn-ghost" href="/ai-visibility-checker">Run the free check first</a>
            </div>
          </div>
        </section>

        <section className="vlog" id="vlog">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Verification Log</div>
              <h2>An AI SEO Agency Should Show Its Working</h2>
              <p>Four rules we hold ourselves to, on this page and in every client report.</p>
            </div>
            <div className="ventries">
              <div className="ventry"><span className="vtag">VERIFIED</span><h3>Every number links to its source</h3><p>Each statistic on this page links to the report it came from. If we cannot show where a number came from, we leave it out. Client reports follow the same rule.</p></div>
              <div className="ventry"><span className="vtag">CORRECTED</span><h3>We fixed our own crawler advice</h3><p>Older answers on this site told readers to allow GPTBot for ChatGPT visibility. OpenAI documents GPTBot as a training crawler. OAI-SearchBot is the one that controls ChatGPT search answers. We corrected every answer.</p></div>
              <div className="ventry"><span className="vtag">DISCLOSED</span><h3>No magic files</h3><p>Google says no special AI files are needed for AI Overviews. We still publish llms.txt, and we tell clients plainly that no engine is known to read it yet.</p></div>
              <div className="ventry"><span className="vtag">PENDING</span><h3>Case studies are still being written</h3><p>Named AI visibility case studies are in progress. We would rather publish nothing than a number we cannot prove. Ask for live references on a call.</p></div>
            </div>
          </div>
        </section>

        <section className="section agencies" id="agencies">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Compare Agencies</div>
              <h2>Who Ranks for AI SEO Searches Today, in the US and India</h2>
              <p>These are the agency sites on Google&apos;s first page for ai seo agency and ai seo services, pulled from DataForSEO (desktop, English) on 23 September 2026, for the US and for India. Positions move every week, so treat this as a snapshot. Roundup and forum pages, like Reddit threads and top-ten lists, are left out because they are not agencies.</p>
            </div>
            <div className="tablewrap">
              <table>
                <thead><tr><th>Agency</th><th>Google position, 23 Sep 2026</th><th>What their page offers</th><th>Also worth knowing</th></tr></thead>
                <tbody>
                  {COMPETITORS.map((c) => (
                    <tr key={c.domain}>
                      <th>{c.name}<br /><span className="mono tableSubLabel">{c.domain}</span></th>
                      <td className="poscell">
                        {SEARCHES.map((s, i) => (
                          <span className="posrow" key={`${s.market}-${s.term}`}>
                            <span className="mono">{s.market} · {s.term}</span>
                            <b>{c.positions[i] ? `#${c.positions[i]}` : 'not top 10'}</b>
                          </span>
                        ))}
                      </td>
                      <td>{c.offers}</td>
                      <td>{c.note}{c.citedInAio && <> <span className="aio-flag">Cited in AI Overview</span></>}</td>
                    </tr>
                  ))}
                  <tr className="us">
                    <th>FactoryJet<br /><span className="mono tableSubLabel tableSubLabelAccent">This page</span></th>
                    <td className="poscell">Not in the top 10 for any of these four searches today.</td>
                    <td>Bhavesh, our founder, and the team on your account, citation counts per engine, month-to-month terms, and in-house ecommerce, AI agent and web builds.</td>
                    <td>Far less domain authority than every agency above. If the safest logo on the invoice matters most, hire the incumbent.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="sub-note">Shortlisting, not hiring yet? Our roundups of the <a href="/blog/best-ai-seo-agencies-usa">best AI SEO agencies in the USA</a> and the <a href="/blog/best-ai-seo-agencies-india">best AI SEO agencies in India</a> review more shops, and our <a href="/blog/best-seo-agencies-usa">best SEO agencies in the USA</a> list covers classic SEO.</p>
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="wrap">
            <div className="faqwrap">
              <div className="faqintro">
                <div className="eyebrow">FAQ</div>
                <h2 className="faqHeading">AI SEO and SEO, Answered Directly</h2>
                <p>{AI_SEO_FAQS.length} real questions buyers in the US and India ask Google and AI assistants, most taken from Google&apos;s People Also Ask boxes, answered without hedging.</p>
                <nav className="faq-catnav" aria-label="FAQ categories">
                  {AI_SEO_FAQ_CATEGORIES.map((category) => <a key={category.id} href={`#${category.id}`}>{category.label}</a>)}
                </nav>
              </div>
              <AiSeoFaqAccordion />
            </div>
          </div>
        </section>

        <section className="section referencesSection references" id="references">
          <div className="wrap">
            <div className="eyebrow">References</div>
            <div className="refs">
              <a href="/services/generative-engine-optimization">Generative Engine Optimization Services (GEO)</a>
              <a href="/ai-visibility-checker">Free AI Visibility Checker</a>
              <a href="/blog/best-ai-seo-agencies-usa">Best AI SEO Agencies in the USA</a>
              <a href="/blog/best-ai-seo-agencies-india">Best AI SEO Agencies in India</a>
              <a href="/ai-seo">AI SEO Company in India</a>
              <a href={TC} target="_blank" rel="noopener">TechCrunch: AI Overviews and AI Mode Users</a>
              <a href={GOOG} target="_blank" rel="noopener">Google: AI Features and Your Website</a>
              <a href={OAI} target="_blank" rel="noopener">OpenAI: Overview of Crawlers</a>
              <a href={ANT} target="_blank" rel="noopener">Anthropic: How Claude Crawls the Web</a>
              <a href={PEW} target="_blank" rel="noopener">Pew: Clicks When AI Summaries Appear</a>
              <a href="/services/seo-audit">SEO Audit</a>
            </div>
          </div>
        </section>

        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <h2>Find Out Who AI Recommends in Your Category</h2>
              <p>Run the free check to see which businesses ChatGPT, Perplexity and Google AI Overviews name today. Then talk to Bhavesh and the team about closing the gap, with a fixed quote before any work starts.</p>
            </div>
            <div className="ctas">
              <a className="btn btn-primary" href="/ai-visibility-checker">Get a free AI visibility check</a>
              <a className="btn btn-ghost" href="/contact">Talk to Bhavesh and the team</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
