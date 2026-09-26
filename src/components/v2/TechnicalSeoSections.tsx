import { Fragment, type ReactNode } from 'react';
import HeroInlineForm from '@/components/HeroInlineForm';
import { TECHNICAL_SEO_FAQ_CATEGORIES, TECHNICAL_SEO_FAQS } from './TechnicalSeoFaqs';
import './AiAgentDevelopmentSections.css';
import './TechnicalSeoSections.css';

/*
 * Technical SEO service page (/services/technical-seo), built 2026-09-26 on the
 * current US design system ("Family A"): same anatomy as /services/ai-seo, with the
 * hero inline form from /services/web-design. Brief:
 * pipeline/research/briefs/US-TIER1-BUILD-BRIEF-2026-09-26.md.
 *
 * Keyword ownership: this page owns "technical seo services / agency / company"
 * (ongoing technical work). /services/seo-audit keeps the one-off audit intent,
 * /services/ai-seo is the SEO hub and owns AI citation work.
 *
 * Static server component. The only client code is HeroInlineForm. The hero
 * crawl-path panel animates with CSS only (same mechanism as the reference pages).
 *
 * Arrays exported here (CAPABILITIES, COMPETITORS, technicalSeoBreadcrumbs) also
 * feed the Service, ItemList and BreadcrumbList JSON-LD in page.tsx, so schema
 * always matches what the reader sees. The FAQ array lives in TechnicalSeoFaqs.ts.
 *
 * Visuals: every intended image is a <figure data-visual-slot> placeholder, hidden
 * from visitors by TechnicalSeoSections.css until the visual pass fills it.
 */

export const technicalSeoBreadcrumbs = [
  { name: 'Home', url: 'https://factoryjet.com/' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI Search & SEO', url: 'https://factoryjet.com/services/ai-seo' },
  { name: 'Technical SEO', url: 'https://factoryjet.com/services/technical-seo' },
];

/* Primary sources, each fetch-verified on 2026-09-26. */
const G = 'https://developers.google.com/search/docs';
const SRC = {
  cwv: `${G}/appearance/core-web-vitals`,
  vitals: 'https://web.dev/articles/vitals',
  js: `${G}/crawling-indexing/javascript/javascript-seo-basics`,
  dynamic: `${G}/crawling-indexing/javascript/dynamic-rendering`,
  budget: 'https://developers.google.com/crawling/docs/crawl-budget',
  move: `${G}/crawling-indexing/site-move-with-url-changes`,
  robots: `${G}/crawling-indexing/robots/intro`,
  noindex: `${G}/crawling-indexing/block-indexing`,
  canonical: `${G}/crawling-indexing/consolidate-duplicate-urls`,
  sitemap: `${G}/crawling-indexing/sitemaps/build-sitemap`,
  status: `${G}/crawling-indexing/http-network-errors`,
  googlebot: `${G}/crawling-indexing/googlebot`,
  verify: `${G}/crawling-indexing/verifying-googlebot`,
  facets: `${G}/crawling-indexing/crawling-managing-faceted-navigation`,
  mobile: `${G}/crawling-indexing/mobile/mobile-sites-mobile-first-indexing`,
  hreflang: `${G}/specialty/international/localized-versions`,
  sd: `${G}/appearance/structured-data/sd-policies`,
  ai: `${G}/appearance/ai-features`,
  gcrawlers: `${G}/crawling-indexing/google-common-crawlers`,
  links: `${G}/crawling-indexing/links-crawlable`,
  openai: 'https://developers.openai.com/api/docs/bots',
  anthropic: 'https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler',
  perplexity: 'https://docs.perplexity.ai/guides/bots',
} as const;

const SEO_AUDIT = '/services/seo-audit';
const AI_SEO = '/services/ai-seo';
const AUDIT_COST = '/blog/seo-audit-cost-2026';
const SEO_COST = '/blog/seo-cost-small-business-2026';

function Src({ href, children }: { href: string; children: ReactNode }) {
  return <a className="srclink" href={href} target="_blank" rel="noopener">{children} ↗</a>;
}

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

/* Line diagrams for the capability cards, drawn in the same 440x160 frame as the reference pages. */
const DIAGRAMS: ReactNode[] = [
  // Crawl and index control: a site tree, a gate, an index stack
  <g key="d1"><rect className="diagram-core" x="30" y="62" width="60" height="36" rx="7" /><path d="M45 80h30" /><path className="diagram-wire" d="M90 80h30m0-46v92m0-92h30m-30 46h30m-30 46h30" /><rect className="diagram-surface" x="150" y="20" width="70" height="28" rx="6" /><rect className="diagram-surface" x="150" y="66" width="70" height="28" rx="6" /><rect className="diagram-surface" x="150" y="112" width="70" height="28" rx="6" /><path className="diagram-faint" d="M220 126h40" /><path d="m244 118 12 16m0-16-12 16" /><path className="diagram-wire" d="M220 34h80M220 80h80" /><rect className="diagram-core" x="300" y="22" width="110" height="24" rx="5" /><rect className="diagram-core" x="300" y="68" width="110" height="24" rx="5" /><path d="m318 34 5 5 9-10m-14 51 5 5 9-10" /></g>,
  // Rendering: empty shell vs full HTML
  <g key="d2"><rect className="diagram-surface" x="30" y="22" width="150" height="116" rx="10" /><path className="diagram-faint" d="M48 46h114M48 66h114M48 86h114M48 106h80" /><path d="M90 76h30" /><path className="diagram-wire" d="M180 80h80" /><path className="diagram-wire" d="m246 68 14 12-14 12" /><rect className="diagram-core" x="270" y="22" width="150" height="116" rx="10" /><path d="M288 46h114M288 66h96M288 86h114M288 106h70" /></g>,
  // Core Web Vitals: three gauges
  <g key="d3"><path className="diagram-faint" d="M40 132h360" /><path d="M60 112a40 40 0 0 1 80 0" /><path className="diagram-wire" d="M100 112 122 86" /><path d="M180 112a40 40 0 0 1 80 0" /><path className="diagram-wire" d="M220 112 236 80" /><path d="M300 112a40 40 0 0 1 80 0" /><path className="diagram-wire" d="M340 112 358 88" /><circle className="diagram-core" cx="100" cy="112" r="5" /><circle className="diagram-core" cx="220" cy="112" r="5" /><circle className="diagram-core" cx="340" cy="112" r="5" /><path className="diagram-faint" d="M78 40h44M198 40h44M318 40h44" /></g>,
  // Migration: old URLs mapped one hop to new URLs
  <g key="d4"><rect className="diagram-surface" x="30" y="18" width="110" height="26" rx="5" /><rect className="diagram-surface" x="30" y="56" width="110" height="26" rx="5" /><rect className="diagram-surface" x="30" y="94" width="110" height="26" rx="5" /><path className="diagram-wire" d="M140 31h150M140 69h150M140 107h150" /><path d="m276 25 12 6-12 6m0 32 12 6-12 6m0 32 12 6-12 6" /><rect className="diagram-core" x="300" y="18" width="110" height="26" rx="5" /><rect className="diagram-core" x="300" y="56" width="110" height="26" rx="5" /><rect className="diagram-core" x="300" y="94" width="110" height="26" rx="5" /><path className="diagram-faint" d="M190 140h60" /></g>,
  // Structured data: visible page and matching JSON-LD
  <g key="d5"><rect className="diagram-surface" x="40" y="18" width="150" height="124" rx="10" /><rect className="diagram-core" x="58" y="36" width="60" height="40" rx="5" /><path d="M130 44h44M130 58h30M58 94h114M58 110h90" /><path className="diagram-wire" d="M190 80h60" /><rect className="diagram-core" x="250" y="30" width="150" height="100" rx="10" /><path d="M270 50q-6 0-6 6v6q0 4-4 4 4 0 4 4v6q0 6 6 6m110-32q6 0 6 6v6q0 4 4 4-4 0-4 4v6q0 6-6 6" /><path d="M292 60h60M292 74h44M292 88h56" /></g>,
  // AI crawlers and logs: bots hitting a server log
  <g key="d6"><circle className="diagram-surface" cx="60" cy="36" r="16" /><circle className="diagram-surface" cx="60" cy="80" r="16" /><circle className="diagram-surface" cx="60" cy="124" r="16" /><path className="diagram-wire" d="M76 36h60q14 0 14 14v30m-74 0h74m-74 44h60q14 0 14-14V80h60" /><rect className="diagram-core" x="210" y="30" width="200" height="100" rx="10" /><path d="M228 52h120M228 70h160M228 88h96M228 106h140" /><circle className="diagram-core" cx="390" cy="52" r="5" /></g>,
];

export const CAPABILITIES: ReadonlyArray<{ href?: string; icon: string; title: string; body: string; tags: string[] }> = [
  { icon: 'M4 6h16M4 12h10M4 18h6m10-6-3 3 3 3', title: 'Crawling & Indexing Control',
    body: 'robots.txt, XML sitemaps, canonical tags, noindex rules, status codes and internal links, set so Google spends its time on the pages that earn money and skips the ones that should never rank.',
    tags: ['Page indexing report', 'Canonicals', 'Sitemaps'] },
  { icon: 'm8 8-4 4 4 4M16 8l4 4-4 4M13 5l-2 14', title: 'JavaScript & Next.js Rendering',
    body: 'We make React, Next.js, Vue and headless storefronts send their content, links and metadata in the first HTML response, so search engines and AI crawlers that do not run scripts still see the page.',
    tags: ['SSR', 'Static rendering', 'Hydration'] },
  { href: '/blog/core-web-vitals-optimization-service', icon: 'M12 3a9 9 0 1 0 9 9M12 12l5-5', title: 'Core Web Vitals',
    body: 'Template-by-template fixes for LCP, INP and CLS, measured on real-user data, not a one-off lab score. Images, fonts, third-party scripts and app bloat are where most of the time goes.',
    tags: ['LCP', 'INP', 'CLS'] },
  { href: '/services/website-redesign', icon: 'M4 7h11l-3-3M20 17H9l3 3', title: 'Migrations & Replatforming',
    body: 'Domain moves, redesigns and platform changes such as Magento or WooCommerce to Shopify, with every old URL mapped and redirected in one hop, and Search Console watched daily after launch.',
    tags: ['301 map', 'Replatforming', 'HTTPS'] },
  { icon: 'M8 4q-3 0-3 3v2q0 3-2 3 2 0 2 3v2q0 3 3 3m8-16q3 0 3 3v2q0 3 2 3-2 0-2 3v2q0 3-3 3', title: 'Structured Data',
    body: 'JSON-LD generated from the same data the page shows: Product and Offer, Organization, BreadcrumbList, Article and FAQPage. Tested in the Rich Results Test before it ships, never hand-copied.',
    tags: ['Product', 'BreadcrumbList', 'FAQPage'] },
  { href: AI_SEO, icon: 'M4 5h16v10H4zM8 19h8M12 15v4', title: 'AI Crawler Access & Log Files',
    body: 'robots.txt rules that name each search and AI bot on purpose, plus server log analysis that shows which crawlers actually visit, what they fetch, and where crawling is wasted.',
    tags: ['OAI-SearchBot', 'Claude-SearchBot', 'Log analysis'] },
];

/** Each item is [bold lead, rest of the line]. */
const CHECKS: ReadonlyArray<{ title: string; lead: string; items: ReadonlyArray<readonly [string, string]> }> = [
  { title: 'Crawling and indexing', lead: 'Before anything ranks, it has to be fetched and kept. Most lost traffic starts here, quietly.', items: [
    ['Page indexing report', ' read row by row, with a reason for every excluded URL that matters'],
    ['robots.txt', ' checked for rules that block templates, CSS or JavaScript by accident'],
    ['noindex never behind a robots.txt block', ', since Google cannot see a noindex it is not allowed to crawl'],
    ['Canonical tags', ' self-referencing by default, and deliberate where they point elsewhere'],
    ['XML sitemaps', ' split by type, holding only live, indexable, canonical URLs'],
    ['Soft 404s', ' turned into real 404 or 410 responses'],
    ['Orphan pages', ' linked from somewhere a crawler can reach'],
    ['Crawlable links', ' as real anchor tags with an href, not click handlers'],
  ] },
  { title: 'Rendering and JavaScript', lead: 'Google renders JavaScript later, in a queue. Many AI crawlers do not render it at all.', items: [
    ['Rendered HTML compared', ' with the raw HTML on every key template'],
    ['Main copy, links and metadata', ' present in the first server response'],
    ['Client-side routes', ' returning real status codes, not a 200 for a missing page'],
    ['Robots meta tags', ' set on the server, never changed later by JavaScript'],
    ['Lazy-loaded content', ' that does not wait for a click or a scroll to exist'],
    ['Hydration errors', ' that swap content after load, found and fixed'],
    ['Dynamic rendering', ' replaced with server-side or static rendering, as Google now advises'],
    ['HTML weight', ' kept well inside the first 2MB that Googlebot fetches'],
  ] },
  { title: 'Speed and Core Web Vitals', lead: 'Measured at the 75th percentile of real visits, on phones and desktops separately.', items: [
    ['LCP element', ' identified per template, then preloaded or made text'],
    ['Hero images', ' resized, compressed and served in modern formats'],
    ['Fonts', ' subset and preloaded so text does not flash or shift'],
    ['Third-party and app scripts', ' deferred, trimmed or removed'],
    ['Long JavaScript tasks', ' split up so taps respond in under 200ms'],
    ['Space reserved', ' for images, embeds and banners to keep CLS under 0.1'],
    ['Server response time', ' and CDN caching checked on uncached pages'],
    ['Field data tracked', ' in Search Console, not only lab scores'],
  ] },
  { title: 'Structure, schema and international', lead: 'Clear signals about what each page is, who it is for, and which version to show.', items: [
    ['One H1', ' and a clean H1, H2, H3 order on every template'],
    ['Faceted navigation', ' limited to the filter pages that deserve to rank'],
    ['Pagination', ' crawlable, with unique URLs for each page of results'],
    ['Product and Offer markup', ' matching the visible price and stock'],
    ['Organization and BreadcrumbList', ' on every page that needs them'],
    ['Markup only for visible content', ', per Google\'s structured data policy'],
    ['hreflang', ' with return links and an x-default, for multi-country sites'],
    ['Mobile parity', ': same content, links and schema on phone and desktop'],
  ] },
  { title: 'Migrations, logs and AI crawlers', lead: 'The work that protects traffic you already have, and opens the door to AI answers.', items: [
    ['Every old URL saved', ' from crawls, analytics and backlink data before a move'],
    ['301 or 308 redirects', ' in one hop, kept for at least a year'],
    ['Redirect chains', ' collapsed, and internal links pointed at final URLs'],
    ['Server logs', ' filtered to verified Googlebot using reverse DNS'],
    ['Crawl waste', ' on parameters, redirects and errors measured in the logs'],
    ['OAI-SearchBot, Claude-SearchBot, PerplexityBot', ' allowed by name if you want AI citations'],
    ['Training bots', ' such as GPTBot and Google-Extended decided on purpose'],
    ['Release checks', ' so the next deploy does not undo last month\'s fixes'],
  ] },
];

const STACKS: ReadonlyArray<{ href?: string; name: string; fit: string; issues: string }> = [
  { href: '/services/shopify-seo', name: 'Shopify & Shopify Plus', fit: 'DTC and B2B stores on Shopify', issues: 'Collection-scoped product URLs that create duplicates, app scripts that drag LCP, thin filtered collection pages, and themes that leave Product markup incomplete.' },
  { href: '/bigcommerce-development', name: 'BigCommerce', fit: 'Growing and B2B catalogs', issues: 'Faceted search URLs, duplicate category paths, B2B price lists hidden from crawlers by design, and theme speed on large category pages.' },
  { href: '/services/wordpress-development', name: 'WordPress & WooCommerce', fit: 'Content-heavy sites and WordPress stores', issues: 'Plugin and page-builder bloat, tag and archive pages competing with real pages, attachment URLs, and overlapping SEO plugins writing conflicting tags.' },
  { href: '/services/webflow-development', name: 'Webflow', fit: 'B2B marketing sites', issues: 'CMS collection pages with thin templates, missing canonical rules on filtered lists, image weight from the designer, and 301 rules that need care during migrations.' },
  { href: '/services/web-application-development', name: 'Next.js & React', fit: 'Custom sites, portals and SaaS', issues: 'Pages rendered only in the browser, soft 404s on client routes, metadata set after load, and heavy client bundles that fail INP.' },
  { href: '/headless-commerce', name: 'Headless commerce', fit: 'Stores with a separate front end', issues: 'Two systems generating URLs, canonicals and sitemaps out of sync with the commerce back end, and structured data that has to be rebuilt by hand.' },
];

/** Google organic positions (desktop, English, US) from DataForSEO, 26 Sep 2026. null = not in the top 10. */
const SEARCHES = ['technical seo services', 'technical seo agency'] as const;

export const COMPETITORS: ReadonlyArray<{ name: string; domain: string; hq: string; positions: ReadonlyArray<number | null>; offers: string; note: string }> = [
  { name: 'Thrive Agency', domain: 'thriveagency.com', hq: 'Arlington, TX', positions: [null, 3], offers: 'Audits, crawl error fixes, migrations, speed, structured data, HTTPS, sitemaps and penalty recovery, plus an FAQ that touches on AI Overviews.', note: 'A large full-service agency. Its page does not cover log files, JavaScript rendering or AI crawler rules.' },
  { name: 'Siege Media', domain: 'siegemedia.com', hq: 'Austin, TX', positions: [5, 4], offers: 'Ranks with a list of the best technical SEO agencies rather than a service page. Lists its own headquarters as Austin, San Francisco, New York and Chicago.', note: 'Useful for building a shortlist. A roundup, not a scope of work.' },
  { name: 'Saffron Edge', domain: 'saffronedge.com', hq: 'Totowa, NJ', positions: [9, null], offers: 'Audits, migrations, schema, speed, mobile, log file analysis, sitemaps, robots.txt and canonical fixes, in a five-step process.', note: 'Lists log file analysis and JavaScript rendering as services, without detail on method.' },
];

function DirectoryFaq() {
  return (
    <div className="faqlist">
      {TECHNICAL_SEO_FAQ_CATEGORIES.map((category) => (
        <Fragment key={category.id}>
          <div className="faq-category" id={category.id}>{category.label}</div>
          {TECHNICAL_SEO_FAQS.filter((faq) => faq.category === category.key).map((faq) => (
            <details className="faqitem" data-faq-item key={faq.id}>
              <summary data-faq-question>
                <span className="qid">{faq.id}</span>
                <span className="qtext">{faq.question}</span>
                <span className="chev" aria-hidden="true">+</span>
              </summary>
              <p className="ans" data-faq-answer>
                {faq.answer}
                {faq.source && (
                  <>
                    {' '}
                    <a className="faqsrc" href={faq.source.url} target="_blank" rel="noopener">{faq.source.label} ↗</a>
                  </>
                )}
                {faq.link && (
                  <>
                    {' '}
                    <a className="faqsrc" href={faq.link.url}>{faq.link.label} ↗</a>
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

export default function TechnicalSeoSections() {
  return (
    <div className="aiAgentPage technicalSeo">
      <nav className="crumbs" aria-label="Breadcrumb">
        <div className="wrap">
          {technicalSeoBreadcrumbs.map((item, index) => (
            <Fragment key={item.url}>
              {index > 0 && ' / '}
              {index === technicalSeoBreadcrumbs.length - 1 ? <b aria-current="page">{item.name}</b> : <a href={item.url}>{item.name}</a>}
            </Fragment>
          ))}
        </div>
      </nav>
      <main id="technical-seo-content">
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Technical SEO Agency · Service Specification</div>
              <h1>Technical SEO Services That Get Every Page <span className="hero-emphasis">Crawled and Indexed</span></h1>
              <p className="lead" data-speakable>FactoryJet fixes the infrastructure under your rankings: crawling, indexing, Core Web Vitals, JavaScript rendering, migrations, structured data and AI crawler access. Our developers ship the fixes on Shopify, WordPress, Webflow and Next.js, then prove each one in Search Console.</p>
              <HeroInlineForm source="us_technical_seo_hero" region="us" submitLabel="Get a technical SEO review" />
              <p className="hero-alt">Need a one-time diagnosis instead? See our <a href={SEO_AUDIT}>SEO audit service</a>.</p>
            </div>

            <form className="specpanel" aria-label="Illustration of how a URL moves from discovery to Google's index">
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>CRAWL PATH · URL TO INDEX</span>
                <span className="sys"><span>GOOGLEBOT</span><span>BINGBOT</span><span>OAI-SEARCHBOT</span></span>
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
              <div className="specpanel-body" role="radiogroup" aria-label="Explore the crawl path">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="crawl-step" value="1" />
                  <WorkflowIcon d="M4 6h16M4 12h16M4 18h10" />
                  <span className="idx">STEP 01</span>
                  <span className="title">URL found in a sitemap or a real link</span>
                  <span className="tag">DISCOVER</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="crawl-step" value="2" />
                  <WorkflowIcon d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14" />
                  <span className="idx">STEP 02</span>
                  <span className="title">robots.txt allows it, server returns 200</span>
                  <span className="tag">CRAWL</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="crawl-step" value="3" />
                  <WorkflowIcon d="m8 8-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" />
                  <span className="idx">STEP 03</span>
                  <span className="title">Content is in the rendered HTML</span>
                  <span className="tag">RENDER</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="crawl-step" value="4" />
                  <WorkflowIcon d="M12 3 3 7v5c0 5 9 9 9 9s9-4 9-9V7l-9-4Zm-4 9 3 3 5-6" />
                  <span className="idx">STEP 04</span>
                  <span className="title">Chosen as canonical and indexed</span>
                  <span className="tag">INDEX</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · a fix is done when URL Inspection shows it, not when the ticket closes.</div>
            </form>
          </div>
        </section>

        <div className="ledger">
          <div className="wrap">
            <div className="ledgercell"><div className="k">Founded</div><div className="v"><strong className="ledger-number">2014</strong></div></div>
            <div className="ledgercell"><div className="k">Platforms we fix in code</div><div className="v">Shopify, BigCommerce, WordPress and WooCommerce, Magento, Webflow, and custom Next.js or headless builds.</div></div>
            <div className="ledgercell"><div className="k">Scope</div><div className="v">Ongoing technical SEO, month to month. One-time audits have <a className="inline-link" href={SEO_AUDIT}>their own page</a>.</div></div>
            <div className="ledgercell"><div className="k">Track record</div><div className="v"><strong className="ledger-number">500+</strong>businesses served across web, commerce, and AI work.</div></div>
          </div>
        </div>

        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">§ Key Facts</div>
              <h2>What Technical SEO Services Are, in Plain Terms</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><div><p data-speakable><span className="stat">Technical SEO services make sure search engines and AI crawlers can find, fetch, render and index every page that should rank, quickly and without errors.</span> It is the infrastructure layer of SEO. Content and links only count once this layer works. A technical SEO agency finds the problems, and the good ones fix them.</p></div></div>
                <div className="fact"><div className="sec">§02</div><div><p>An ongoing technical SEO service covers six jobs:</p><ul>
                  <li><span><b>Crawl and index control:</b> robots.txt, sitemaps, canonicals, status codes and internal links</span></li>
                  <li><span><b>Rendering:</b> content in the HTML, not waiting on JavaScript</span></li>
                  <li><span><b>Core Web Vitals:</b> LCP, INP and CLS on real visits</span></li>
                  <li><span><b>Migrations:</b> redirects and monitoring when URLs change</span></li>
                  <li><span><b>Structured data:</b> JSON-LD that matches the page</span></li>
                  <li><span><b>AI crawler access and logs:</b> which bots get in, and what they actually fetch</span></li>
                </ul></div></div>
                <div className="fact"><div className="sec">§03</div><p><span className="stat">Google&apos;s &quot;good&quot; Core Web Vitals are LCP within 2.5 seconds, INP under 200 milliseconds and CLS under 0.1</span>, measured at the 75th percentile of real page loads. <Src href={SRC.vitals}>web.dev</Src> <Src href={SRC.cwv}>Google Search Central</Src></p></div>
                <div className="fact"><div className="sec">§04</div><p><span className="stat">Google processes JavaScript pages in three phases: crawling, rendering and indexing.</span> It still calls server-side or pre-rendering a great idea, because not all bots can run JavaScript. That includes many AI crawlers. <Src href={SRC.js}>Google Search Central</Src></p></div>
                <div className="fact"><div className="sec">§05</div><p><span className="stat">Crawl budget is a real problem for large sites, not most sites.</span> Google&apos;s guide targets sites with over a million unique pages, or over 10,000 pages that change daily. Smaller sites should fix indexing and duplicates first. <Src href={SRC.budget}>Google crawling docs</Src></p></div>
                <div className="fact"><div className="sec">§06</div><p><span className="stat">To appear as a link in Google AI Overviews or AI Mode, a page must be indexed and eligible for a snippet.</span> Google says there are no extra technical requirements. Technical SEO is the entry ticket to AI search, not a separate trick. <Src href={SRC.ai}>Google Search Central</Src></p></div>
                <div className="fact"><div className="sec">§07</div><p>FactoryJet runs technical SEO as a development job, not a reporting job. We build ecommerce stores, websites and AI agents, so the people who find a rendering bug or a redirect chain can also ship the fix. Bhavesh, our founder, and the team stay on after each fix to catch regressions from your next release.</p></div>
              </div>
              <figure className="factphoto" data-visual-slot="technical-seo:facts" data-visual-kind="photo" data-visual-subject="Two US developers at a standing desk in a bright office, one pointing at a large monitor that faces them both, showing a site crawl table with rows of URLs and status codes; camera behind their shoulders so the screen faces them and the camera; no readable text, no logos" data-visual-ratio="3:2" data-visual-status="placeholder">
                <figcaption className="cap">FIELD REFERENCE · A CRAWL REVIEWED LINE BY LINE</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Compare</div>
              <h2>Technical SEO vs. On-Page SEO vs. an SEO Audit</h2>
            </div>
            <div className="tablewrap">
              <table>
                <thead><tr><th>Service</th><th>What it fixes</th><th>Who usually does it</th><th>How long it runs</th></tr></thead>
                <tbody>
                  <tr><th>On-page SEO<br /><span className="mono tableSubLabel">content and HTML</span></th><td>Titles, headings, copy, images and internal links on each page</td><td>SEO writers and editors</td><td>Ongoing, page by page</td></tr>
                  <tr><th>SEO audit<br /><span className="mono tableSubLabel"><a href={SEO_AUDIT}>Own page ↗</a></span></th><td>Nothing directly. It diagnoses technical, content and authority issues and ranks them</td><td>An SEO analyst</td><td>One time, then you decide who fixes what</td></tr>
                  <tr><th>AI SEO<br /><span className="mono tableSubLabel"><a href={AI_SEO}>Own page ↗</a></span></th><td>Whether ChatGPT, Perplexity and AI Overviews cite you</td><td>SEO and content specialists</td><td>Ongoing, tracked per engine</td></tr>
                  <tr className="us"><th>Technical SEO<br /><span className="mono tableSubLabel tableSubLabelAccent">This page</span></th><td>Crawling, indexing, rendering, speed, redirects, schema and crawler access</td><td>Engineers who can change templates, servers and builds</td><td>Ongoing, with a check on every release</td></tr>
                </tbody>
              </table>
            </div>
            <p className="tablenote">What each costs depends on site size and how much is broken. See the <a href={SEO_COST}>US SEO cost guide</a> and the <a href={AUDIT_COST}>SEO audit cost guide</a> for typical market ranges. You get a fixed written scope after a short call.</p>
          </div>
        </section>

        <section className="definition" id="definition">
          <figure className="definition-image" data-visual-slot="technical-seo:definition" data-visual-kind="diagram" data-visual-subject="Clean line diagram on white: one web page icon passing through four unlabeled gates (a sitemap, a robots gate, a render frame, an index stack) with the last gate in orange; flat, no text, no logos" data-visual-ratio="3:2" data-visual-status="placeholder" />
          <div className="definition-copy">
            <div className="eyebrow">Term</div>
            <h2 className="term">Indexability</h2>
            <p>A page is indexable when a search engine is allowed to crawl it, gets a 200 response, can see its main content in the rendered HTML, finds no noindex rule, and picks it as the canonical version rather than a duplicate. Fail any one of those five and the page cannot rank, however good it is. Google&apos;s own documentation warns that robots.txt is not a way to keep a page out of search, and that a noindex rule only works if the page is not blocked from crawling. <Src href={SRC.robots}>robots.txt</Src> <Src href={SRC.noindex}>noindex</Src></p>
          </div>
        </section>

        <section className="section capabilities" id="capabilities">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Capabilities</div>
              <h2>Technical SEO Services We Deliver</h2>
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

        <section className="section changes" id="checks">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Implementation</div>
              <h2>What We Check and Fix, Item by Item</h2>
              <p>Five groups, 40 specific checks. If a technical SEO company cannot hand you a list this specific, and say who will ship each fix, you are buying a report rather than the work.</p>
            </div>
            {CHECKS.map((group, i) => (
              <div className="agentdir-group chg-group" key={group.title}>
                <div className="agentdir-label">
                  <span className="capid">GRP‑{String(i + 1).padStart(2, '0')}</span>
                  <h3>{group.title}</h3>
                  <p>{group.lead}</p>
                  <span className="mono agentdir-count">{group.items.length} checks</span>
                </div>
                <ul className="chg-list">
                  {group.items.map(([bold, rest]) => <li key={bold}><span><b>{bold}</b>{rest}</span></li>)}
                </ul>
              </div>
            ))}
            <p className="chg-note">Every rule above comes from primary documentation: Google on <a href={SRC.canonical} target="_blank" rel="noopener">canonicals ↗</a>, <a href={SRC.sitemap} target="_blank" rel="noopener">sitemaps ↗</a>, <a href={SRC.status} target="_blank" rel="noopener">status codes ↗</a>, <a href={SRC.links} target="_blank" rel="noopener">crawlable links ↗</a>, <a href={SRC.googlebot} target="_blank" rel="noopener">Googlebot&apos;s 2MB fetch limit ↗</a>, <a href={SRC.mobile} target="_blank" rel="noopener">mobile-first indexing ↗</a>, <a href={SRC.hreflang} target="_blank" rel="noopener">hreflang ↗</a> and <a href={SRC.sd} target="_blank" rel="noopener">structured data policy ↗</a>. No secret ruleset, just careful engineering.</p>
          </div>
        </section>

        <section className="midcta" id="midcta" aria-label="Next step">
          <div className="wrap midcta-inner">
            <div>
              <div className="eyebrow">Next step</div>
              <h2>Send Us the Pages That Should Be Ranking</h2>
              <p>Tell us which pages matter most. We check how Google crawls, renders and indexes them, and reply with the three problems we would fix first and who ships each one.</p>
            </div>
            <div className="ctas">
              <a className="btn btn-primary" href="#hero">Get a technical SEO review</a>
              <a className="btn btn-ghost" href="/contact">Talk to Bhavesh and the team</a>
            </div>
          </div>
        </section>

        <section className="section comparison render-compare" id="rendering">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">JavaScript SEO</div>
              <h2>Rendering Options for React and Next.js Sites, Compared</h2>
              <p>Where your HTML is produced decides what crawlers see. Google handles JavaScript, but later and at a cost. Many AI crawlers do not run it at all, so content that exists only after scripts load may never reach an AI answer.</p>
            </div>
            <div className="tablewrap">
              <table>
                <thead><tr><th>Approach</th><th>What a crawler gets first</th><th>SEO risk</th><th>Google&apos;s position</th></tr></thead>
                <tbody>
                  <tr><th>Client-side rendering<br /><span className="mono tableSubLabel">plain React SPA</span></th><td>A near-empty HTML shell plus scripts</td><td>High. Content, links and metadata depend on rendering, and soft 404s are common</td><td>Works, but needs care. <a href={SRC.js} target="_blank" rel="noopener">JS SEO basics ↗</a></td></tr>
                  <tr><th>Dynamic rendering<br /><span className="mono tableSubLabel">bots get a prerendered copy</span></th><td>Full HTML, served only to bots</td><td>Medium. Two versions to keep in sync</td><td>A workaround, not a long-term solution. <a href={SRC.dynamic} target="_blank" rel="noopener">Dynamic rendering ↗</a></td></tr>
                  <tr><th>Server-side rendering<br /><span className="mono tableSubLabel">Next.js, Nuxt, Remix</span></th><td>Full HTML on every request</td><td>Low, if metadata and status codes are set on the server</td><td>Recommended</td></tr>
                  <tr className="us"><th>Static or hybrid rendering<br /><span className="mono tableSubLabel tableSubLabelAccent">what we usually build</span></th><td>Full HTML built ahead of time, refreshed on change</td><td>Lowest, and usually the fastest LCP</td><td>Recommended</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section platforms" id="platforms">
          <div className="wrap">
            <div className="section-head plat-head">
              <div><div className="eyebrow">Platforms</div><h2>Technical SEO by Platform</h2></div>
              <p>Every platform breaks in its own familiar ways. Knowing where to look first cuts the time from finding an issue to shipping the fix. These are the problems we see most often on each one.</p>
            </div>
            <div className="platlist" role="list">
              {STACKS.map((row, i) => {
                const inner = (
                  <>
                    <span className="capid">PLT‑{String(i + 1).padStart(2, '0')}</span>
                    <div className="plat-name"><h3>{row.name}</h3></div>
                    <div className="plat-fit"><span className="k">Best for</span>{row.fit}</div>
                    <p className="plat-build"><span className="k">Common technical issues</span>{row.issues}</p>
                    <span className="plat-go" aria-hidden="true">{row.href ? '↗' : ''}</span>
                  </>
                );
                return row.href
                  ? <a key={row.name} className="plat" role="listitem" href={row.href}>{inner}</a>
                  : <div key={row.name} className="plat" role="listitem">{inner}</div>;
              })}
            </div>
            <div className="plat-foot"><span>Selling online? Our <a href="/services/ecommerce-seo">ecommerce SEO</a> team handles the category and product side, and technical fixes land in the same sprint.</span><a href="/services/ecommerce-seo">Ecommerce SEO services ↗</a></div>
          </div>
        </section>

        <figure className="photobreak" id="photobreak" data-visual-slot="technical-seo:panorama" data-visual-kind="photo" data-visual-subject="Wide shot of a small US product team in a daylight office reviewing a website launch checklist on a wall-mounted screen that faces them, one person at a laptop turned toward the group; screen content abstract charts only, no readable text, no logos" data-visual-ratio="16:6" data-visual-status="placeholder">
          <figcaption className="caption"><span className="dot"></span>FIELD REFERENCE · A RELEASE CHECKED BEFORE IT SHIPS</figcaption>
        </figure>

        <section className="section process" id="how">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Process</div>
              <h2>How We Work</h2>
            </div>
            <div className="timeline">
              <div className="tnode"><div className="idx">01</div><h3>Baseline</h3><p>Search Console, a full crawl, a rendering sample per template, field Core Web Vitals and, on large sites, server logs.</p></div>
              <div className="tnode"><div className="idx">02</div><h3>Prioritize</h3><p>Issues ranked by the pages and revenue they affect, not by how many a tool flagged.</p></div>
              <div className="tnode"><div className="idx">03</div><h3>Fix</h3><p>We ship the code, or write tickets and review your developers&apos; changes. You approve every deploy.</p></div>
              <div className="tnode"><div className="idx">04</div><h3>Verify</h3><p>URL Inspection, the Page indexing report and field data confirm each fix. Closed means Google sees it.</p></div>
              <div className="tnode"><div className="idx">05</div><h3>Guard</h3><p>Each release checked for regressions, with crawl, index and speed numbers in a monthly report.</p></div>
            </div>
            <div className="timelineAction">
              <a className="btn btn-primary" href="#hero">Get a technical SEO review</a>
              <a className="btn btn-ghost" href={SEO_AUDIT}>Start with a one-time audit</a>
            </div>
          </div>
        </section>

        <section className="vlog" id="rules">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Verification Log</div>
              <h2>A Technical SEO Company Should Show Its Working</h2>
              <p>Four rules we hold ourselves to, on this page and in every client report.</p>
            </div>
            <div className="ventries">
              <div className="ventry"><span className="vtag">VERIFIED</span><h3>Every rule links to the source</h3><p>Each technical claim on this page links to Google, OpenAI, Anthropic or Perplexity documentation. When the docs change, we change the advice. Googlebot&apos;s HTML fetch limit, for example, is now documented as 2MB.</p></div>
              <div className="ventry"><span className="vtag">DISCLOSED</span><h3>No crawl budget scare for small sites</h3><p>Google says crawl budget matters for very large or very fast-changing sites. If yours is a 60-page service site, we will tell you so, and spend the time on indexing and speed instead.</p></div>
              <div className="ventry"><span className="vtag">CORRECTED</span><h3>We separate AI search bots from training bots</h3><p>Blocking GPTBot does not remove you from ChatGPT search, and Google-Extended does not affect Google Search. Blanket AI blocks confuse the two, so every bot is decided by name.</p></div>
              <div className="ventry"><span className="vtag">PENDING</span><h3>Case studies are still being written</h3><p>We would rather publish nothing than a before-and-after number we cannot prove. Ask for live references on a call.</p></div>
            </div>
          </div>
        </section>

        <section className="section agencies" id="agencies">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Compare Agencies</div>
              <h2>Who Ranks for Technical SEO Services in the US Today</h2>
              <p>US agency sites on Google&apos;s first page for technical seo services and technical seo agency, from DataForSEO (desktop, English, US) on 26 September 2026. Tool sites, directories and non-US agencies are left out. Positions move every week, so treat this as a snapshot and read each page yourself.</p>
            </div>
            <div className="tablewrap">
              <table>
                <thead><tr><th>Agency</th><th>Google position, 26 Sep 2026</th><th>What their page offers</th><th>Also worth knowing</th></tr></thead>
                <tbody>
                  {COMPETITORS.map((c) => (
                    <tr key={c.domain}>
                      <th>{c.name}<br /><span className="mono tableSubLabel">{c.domain} · {c.hq}</span></th>
                      <td className="poscell">
                        {SEARCHES.map((term, i) => (
                          <span className="posrow" key={term}>
                            <span className="mono">{term}</span>
                            <b>{c.positions[i] ? `#${c.positions[i]}` : 'not top 10'}</b>
                          </span>
                        ))}
                      </td>
                      <td>{c.offers}</td>
                      <td>{c.note}</td>
                    </tr>
                  ))}
                  <tr className="us">
                    <th>FactoryJet<br /><span className="mono tableSubLabel tableSubLabelAccent">This page</span></th>
                    <td className="poscell">Not in the top 10 for either search today.</td>
                    <td>Developers who ship the fixes, JavaScript rendering and log file work described in detail, AI crawler rules per bot, and a check on every release.</td>
                    <td>Far less domain authority than the agencies above. If the most familiar name matters most, hire the incumbent.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="sub-note">Comparing more agencies? Our lists of the <a href="/blog/best-seo-agencies-usa">best SEO agencies in the USA</a> and the <a href="/blog/best-ecommerce-seo-agencies-usa">best ecommerce SEO agencies</a> review more firms.</p>
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="wrap">
            <div className="faqwrap">
              <div className="faqintro">
                <div className="eyebrow">FAQ</div>
                <h2 className="faqHeading">Technical SEO, Answered Directly</h2>
                <p>{TECHNICAL_SEO_FAQS.length} questions US buyers ask Google, most taken word for word from its People Also Ask boxes, answered without hedging and linked to the source.</p>
                <nav className="faq-catnav" aria-label="FAQ categories">
                  {TECHNICAL_SEO_FAQ_CATEGORIES.map((category) => <a key={category.id} href={`#${category.id}`}>{category.label}</a>)}
                </nav>
              </div>
              <DirectoryFaq />
            </div>
          </div>
        </section>

        <section className="section referencesSection references" id="references">
          <div className="wrap">
            <div className="eyebrow">References</div>
            <div className="refs">
              <a href={AI_SEO}>AI Search &amp; SEO Services</a>
              <a href={SEO_AUDIT}>SEO Audit Services</a>
              <a href="/services/generative-engine-optimization">Generative Engine Optimization</a>
              <a href="/services/ecommerce-seo">Ecommerce SEO Services</a>
              <a href="/services/website-maintenance">Website Maintenance Services</a>
              <a href={AUDIT_COST}>SEO Audit Cost Guide</a>
              <a href="/ai-visibility-checker">Free AI Visibility Checker</a>
              <a href={SRC.js} target="_blank" rel="noopener">Google: JavaScript SEO Basics</a>
              <a href={SRC.vitals} target="_blank" rel="noopener">web.dev: Core Web Vitals</a>
              <a href={SRC.budget} target="_blank" rel="noopener">Google: Crawl Budget Guide</a>
              <a href={SRC.move} target="_blank" rel="noopener">Google: Site Moves With URL Changes</a>
              <a href={SRC.facets} target="_blank" rel="noopener">Google: Faceted Navigation</a>
              <a href={SRC.verify} target="_blank" rel="noopener">Google: Verifying Googlebot</a>
              <a href={SRC.gcrawlers} target="_blank" rel="noopener">Google: Common Crawlers</a>
              <a href={SRC.openai} target="_blank" rel="noopener">OpenAI: Overview of Crawlers</a>
              <a href={SRC.anthropic} target="_blank" rel="noopener">Anthropic: How Claude Crawls</a>
              <a href={SRC.perplexity} target="_blank" rel="noopener">Perplexity: Crawlers</a>
            </div>
          </div>
        </section>

        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <h2>Find Out What Google Actually Sees on Your Site</h2>
              <p>Send us your site and the pages that matter most. We check crawling, rendering, indexing and speed on them, then tell you what we would fix first and who ships it. You get a fixed written scope before any work starts.</p>
            </div>
            <div className="ctas">
              <a className="btn btn-primary" href="#hero">Get a technical SEO review</a>
              <a className="btn btn-ghost" href="/contact">Talk to Bhavesh and the team</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
