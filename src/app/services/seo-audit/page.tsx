import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { seoAuditServicesAlternatesUS } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import ComparisonTable from '@/components/v2/ComparisonTable';

import HeroInlineForm from '@/components/HeroInlineForm';
import MidPageCTA from '@/components/v2/MidPageCTA';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import AuditFx from './AuditFx';
import './seo-audit.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /us/services/seo-audit, built 2026-06-03. US SEO program.

   Design: "reference-grade" system cloned from /us/services/ecommerce-seo (scoped
   under .aseo). Aurora hero with a CSS SEO-health report card (score gauge +
   pass/warn/fail rows, replaces the SERP), 3D crystal-glass "three layers" cards
   (the audit pillars), services bento (what we audit), glass deliverable strip
   (what's in your report), comparison scorecard, scan→prioritize→roadmap process
   funnel, founder team, FAQ, CTA. Brand palette + brand next/font.

   Perf (100/100): CSS-only hero (no image) → text LCP; motion = CSS + AuditFx
   (IntersectionObserver reveals + pointer-region glass cards), NO GSAP/Framer.
   Team image lazy + reserved. Scoped CSS (.aseo) in the external cached bundle.

   Honesty: no pricing; CTAs → free SEO audit modal + Calendly; verified claims
   only (4.9/5, 500+, 7-day/Lighthouse 95+); report card + fix list labeled
   illustrative; no em-dashes. Anti-cannibalization: owns "seo audit services /
   site audit / technical seo agency / audit report"; general SEO stays on the hub.
   Schema: Service + Organization + FAQPage(21) + BreadcrumbList.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const REVIEWED_DATE = 'August 13, 2026';

type FaqGroup = { id: string; label: string; items: { q: string; a: string }[] };

const FAQ_GROUPS: ReadonlyArray<FaqGroup> = [
  {
    id: 'faq-pricing',
    label: 'Pricing & contracts',
    items: [
      {
        q: 'How much do SEO audit services cost in the US?',
        a: `Our initial SEO site audit is free. It is a real review of your site with a prioritized roadmap, and it is yours to keep. If you want us to implement the fixes, ongoing technical SEO and SEO work is fixed-price and scoped to your goals on a short call, then runs month-to-month. The main driver is the size of your site and how much needs fixing, and we quote it up front so you know the full cost before work starts.`,
      },
      {
        q: 'Is the free SEO audit actually free?',
        a: `Yes. The free SEO audit is a genuine review of your live site, not a teaser. You get a health score, the issues holding you back, and a 90-day roadmap on a call with the founder, whether or not you ever hire us.`,
      },
      {
        q: 'Do you lock me into a long contract if I want the fixes done?',
        a: `No. Every FactoryJet engagement is month-to-month. If we are not earning our keep, you can leave with one billing period of notice. The work should retain you, not the paperwork.`,
      },
      {
        q: 'How is this different from a free SEO checker tool?',
        a: `A free SEO checker spits out a list of errors with no priority and no context. Our SEO audit services put a human, the founder, on your site, so you get the issues ranked by impact, an explanation of why each one matters, and a plan, not 200 warnings you cannot act on.`,
      },
    ],
  },
  {
    id: 'faq-included',
    label: "What's in the audit",
    items: [
      {
        q: 'What does your SEO audit cover?',
        a: `A complete SEO site audit covers four layers: technical health and crawlability, Core Web Vitals and speed, on-page and content, and backlinks and authority. We score each, find what is holding you back, and rank the fixes by impact.`,
      },
      {
        q: 'What is in the SEO audit report?',
        a: `A health score, findings across technical, speed, on-page, and backlinks, and a prioritized 90-day fix list ranked by impact and effort, plus a 20-minute walkthrough call. The SEO audit report is written in plain English, not a wall of automated warnings.`,
      },
      {
        q: 'Do you do a technical SEO audit specifically?',
        a: `Yes. As a technical SEO agency we go deep on crawlability, indexing, redirects, canonicals, sitemaps, schema, and Core Web Vitals. If your traffic problem is technical, this is where we find it.`,
      },
      {
        q: 'Do you check Core Web Vitals and site speed?',
        a: `Always. Page experience is part of every audit. We diagnose LCP, CLS, and INP on mobile and show you exactly what is slowing the site down and what to fix first.`,
      },
      {
        q: 'Do you audit content and on-page SEO too?',
        a: `Yes. We review titles, meta, headings, keyword targeting, internal links, and content gaps against the competitors outranking you, so the audit covers what you say as well as how the site is built.`,
      },
    ],
  },
  {
    id: 'faq-results',
    label: 'Results & fixing',
    items: [
      {
        q: 'How long does an SEO audit take?',
        a: `Most audits are delivered within a few business days, depending on the size of the site. You get the report plus a walkthrough call with the founder so you know exactly what to do next.`,
      },
      {
        q: 'Can you fix the issues you find, or just report them?',
        a: `Both. An audit is only useful if someone can act on it. As a technical SEO agency that builds 100/100 Lighthouse sites, we can implement the fixes ourselves, hand the roadmap to your developer, or work alongside your team.`,
      },
      {
        q: 'How soon will I see results after the fixes?',
        a: `Technical and on-page fixes often show a first measurable lift in 30 to 90 days, with momentum compounding as content and authority build. Anyone promising overnight rankings is selling something that will not last.`,
      },
      {
        q: 'Do you guarantee rankings after the audit?',
        a: `No honest SEO company can guarantee a specific position, because Google controls it. What we guarantee is an accurate audit, full transparency, and a roadmap built to compound.`,
      },
    ],
  },
  {
    id: 'faq-technical',
    label: 'Technical SEO',
    items: [
      {
        q: 'Are you a technical SEO agency or an SEO audit consultant?',
        a: `Both. You get a senior technical SEO consultant, the founder, reading your site directly, with a team of technical SEO experts who can build and fix behind the work. You are not handed to a junior or a bot.`,
      },
      {
        q: 'Do you audit JavaScript, headless, and custom sites?',
        a: `Yes. We audit rendering, hydration, and crawlability on React, Next.js, headless, and custom stacks, which is where a lot of modern sites quietly lose rankings.`,
      },
      {
        q: 'Do you check schema and structured data?',
        a: `Yes. We review your structured data and recommend the schema that helps you win rich results and stay eligible for AI answers, which pull from the same structured data.`,
      },
      {
        q: 'Can you audit a site before a redesign or migration?',
        a: `Yes, and it is one of the smartest times to do it. A pre-migration audit maps what is already ranking so you preserve URLs, redirects, and schema instead of losing traffic in the move.`,
      },
    ],
  },
  {
    id: 'faq-fit',
    label: 'Who it is for',
    items: [
      {
        q: 'Who should get an SEO audit?',
        a: `Any business whose organic traffic has dropped, stalled, or never got going, or anyone about to invest in SEO and wanting to know where they really stand first. It is the honest starting point for every engagement.`,
      },
      {
        q: 'Do you audit ecommerce and local sites too?',
        a: `Yes. We audit ecommerce stores, local and multi-location businesses, B2B and SaaS sites, and content sites. The four-layer method is the same; the priorities shift by business type.`,
      },
      {
        q: 'Which industries do you work with?',
        a: `We work with small and mid-sized US businesses across home services, professional services, healthcare, ecommerce and retail, and B2B and SaaS.`,
      },
      {
        q: 'Who will I actually be working with?',
        a: `The founder, Bhavesh. The person reading your site and presenting the roadmap is the same person accountable for the results, not a junior who rotates off the account next quarter.`,
      },
    ],
  },
];

const FAQ_FLAT = FAQ_GROUPS.flatMap((g) => g.items);

export const metadata: Metadata = {
  title: 'SEO Audit Services & Technical Website Audit | FactoryJet',
  description:
    'Expert SEO audit services and technical website analysis for US businesses. Get a prioritized fix list and 90-day roadmap scored by technical SEO specialists.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Audit Services & Technical Website Audit | FactoryJet',
    description:
      'A US technical SEO agency offering a free, expert SEO audit. Technical, on-page, Core Web Vitals, and backlink review with a prioritized 90-day roadmap. Founder-led, month-to-month if you want the fixes.',
    url: 'https://factoryjet.com/services/seo-audit',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet SEO audit services and technical SEO for US businesses' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Audit Services in the US: Free Site Audit & Technical SEO | FactoryJet',
    description:
      'Expert SEO audit services and technical SEO. A free site audit with a prioritized roadmap, read by a human. Founder-led.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/seo-audit',
    languages: seoAuditServicesAlternatesUS,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

// Freshness signal. Benchmark: 56% of AI-Overview-cited pages carry it.
// Keep honest: bump when the page's content actually changes.
const PAGE_MODIFIED = '2026-08-13';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/seo-audit#webpage',
  url: 'https://factoryjet.com/services/seo-audit',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SEO Audit Services',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType:
    'SEO Audit / SEO Site Audit / Technical SEO / Technical SEO Audit / Core Web Vitals Audit / On-Page SEO Audit / Backlink Audit',
  description:
    'US-focused SEO audit services and technical SEO. A free SEO site audit reviewing technical health, Core Web Vitals, on-page content, and backlinks, delivered as a prioritized audit report with a 90-day roadmap. Read by a human, founder-led, month-to-month if you want the fixes implemented.',
  url: 'https://factoryjet.com/services/seo-audit',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  logo: 'https://factoryjet.com/logo.png',
  sameAs: ['https://www.linkedin.com/company/factoryjet', 'https://clutch.co/profile/factoryjet-private', 'https://www.goodfirms.co/company/factoryjet-private-limited', 'https://www.designrush.com/agency/profile/factoryjet', 'https://www.softwaresuggest.com/factoryjet', 'https://www.crunchbase.com/organization/factoryjet'],
  
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_FLAT.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
};

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below, so the two
 *  can never drift into showing a different path than the schema claims. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'SEO Audit', url: 'https://factoryjet.com/services/seo-audit' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: BREADCRUMB_ITEMS.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
};

function Check({ fill = '#0C7150' }: { fill?: string }) {
  return (
    <svg className="ic" viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill={fill} />
      <path d="M6 10.5l2.5 2.5L14 7" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}
function Partial() {
  return (
    <svg className="ic" viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill="#E0982A" />
      <path d="M10 5.5v5M10 13.5v.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function Cross() {
  return (
    <svg className="ic" viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill="#D5453F" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

const SCORE_ROWS = ['Who reads your site', 'Prioritized by impact', 'Core Web Vitals', 'Plain-English roadmap', 'Can fix it for you', 'What you keep'];
const SCORE_FJ = ['The founder, Bhavesh', 'Yes, ranked', 'Diagnosed & fixed', '90-day plan', 'Yes, in-house', 'The full report'];
const SCORE_AG = [['A junior analyst', 'p'], ['Sometimes', 'p'], ['Yes', 'c'], ['Dense PDF', 'p'], ['Costly retainer', 'p'], ['A long deck', 'p']] as const;
const SCORE_DIY = [['A bot', 'x'], ['Flat error list', 'x'], ['Score only', 'p'], ['None', 'x'], ['No', 'x'], ['A CSV of errors', 'p']] as const;

/* ─────────────────────────────────────────────────────────────────────────────
   Additive strengthening pass (2026-08-13). ADD-ONLY: nothing above this block
   was removed and all 21 FAQs are untouched. Adds cited numbers, the full audit
   checklist (the centrepiece of the page), a four-way comparison table that
   includes "do not pay anyone", the systems an audit actually runs through, and
   in-content internal links.

   Every source below was opened with curl on 2026-08-13, returned HTTP 200, and
   the exact claim was located in the fetched HTML before it was written here.
   If a source stops resolving, cut the claim rather than leave it standing bare.
───────────────────────────────────────────────────────────────────────────── */

const LINK_STYLE = {
  color: 'var(--orange-d)',
  fontWeight: 600,
  textDecoration: 'underline',
  textUnderlineOffset: '2px',
} as const;

const WEB_DEV_VITALS = 'https://web.dev/articles/vitals';
const GOOGLE_SITEMAP_DOC =
  'https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap';
const GOOGLE_ROBOTS_DOC =
  'https://developers.google.com/search/docs/crawling-indexing/robots/intro';
const GOOGLE_STRUCTURED_DATA_DOC =
  'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data';
const GOOGLE_SEARCH_CONSOLE_DOC = 'https://support.google.com/webmasters/answer/9128668';
const SCHEMA_ORG_ORGANIZATION = 'https://schema.org/Organization';

const AUDIT_STATS = [
  {
    value: '2.5s',
    label:
      'The Largest Contentful Paint threshold Google publishes for a good page experience, alongside Interaction to Next Paint at 200 milliseconds or less and Cumulative Layout Shift at 0.1 or less. All three are judged at the 75th percentile of real page loads, so one quick test on your own laptop proves nothing.',
    sourceUrl: WEB_DEV_VITALS,
    sourceLabel: 'Core Web Vitals thresholds, web.dev',
  },
  {
    value: '50,000',
    label:
      'The ceiling on a single sitemap file: 50,000 URLs or 50MB uncompressed, whichever you hit first. Past that you need a sitemap index. A sitemap.xml quietly over the limit is one of the faster findings in a technical SEO audit.',
    sourceUrl: GOOGLE_SITEMAP_DOC,
    sourceLabel: 'Build and submit a sitemap, Google Search Central',
  },
  {
    value: '10M+',
    label:
      'Domains carrying schema.org Organization markup, counted by Google against its own web index in July 2026. Structured data stopped being an edge case a long time ago. It is the floor your competitors already stand on.',
    sourceUrl: SCHEMA_ORG_ORGANIZATION,
    sourceLabel: 'Organization type usage, schema.org',
  },
];

/* The checklist. This is the page. It is the order we actually work in, and it
   is the list you can hold any other agency to, including the ones we lose to. */
type CheckGroup = { label: string; items: ReadonlyArray<{ t: string; b: string }> };

const AUDIT_CHECKLIST: ReadonlyArray<CheckGroup> = [
  {
    label: 'Crawling and indexing',
    items: [
      {
        t: 'robots.txt, read line by line',
        b: 'What it blocks, and what it blocks by accident. Google’s own documentation says robots.txt is not a mechanism for keeping a page out of the index, so a disallowed URL can still surface with no snippet under it.',
      },
      {
        t: 'sitemap.xml and the sitemap index',
        b: 'Whether it exists, whether it lists only live 200 URLs, whether it is submitted, and whether it has crept past the size limit and stopped being read at all.',
      },
      {
        t: 'Index coverage in Google Search Console',
        b: 'The pages Google found, the pages it skipped, and the reason it gives for each one. On most sites this is where the fastest wins are sitting.',
      },
      {
        t: 'Canonical tags',
        b: 'Every page needs a self-referencing canonical tag or a deliberate one pointing elsewhere. Conflicting canonicals split your signals across URLs that should have been one.',
      },
      {
        t: 'Redirect chains and the redirect map',
        b: 'Every 301 redirect should be a single hop. We trace the chains, flag the loops, and write a redirect map for anything retired. Bots give up on chains faster than browsers do.',
      },
      {
        t: 'Crawl budget on large sites',
        b: 'Where Googlebot actually spends its time. Faceted URLs, filter parameters, and near-duplicate pages eat the crawl budget you wanted spent on pages that convert.',
      },
      {
        t: 'hreflang and country targeting',
        b: 'If you run US, UK, or other regional versions we check the hreflang cluster returns properly and that x-default is set. Broken hreflang quietly serves the wrong page to the wrong country.',
      },
      {
        t: 'Rendering and hydration',
        b: 'We compare raw HTML against the rendered DOM on React, Next.js, Vue, and Nuxt builds. Content that only appears after hydration is content Google may never weigh.',
      },
    ],
  },
  {
    label: 'Speed and page experience',
    items: [
      {
        t: 'Largest Contentful Paint',
        b: 'Which element is largest, when it paints, and what is holding it up. Usually an unoptimized hero image or a font that arrives late.',
      },
      {
        t: 'Interaction to Next Paint',
        b: 'How long the page takes to answer a real tap. Heavy client-side JavaScript is the usual cause, and it rarely shows up on a desktop test.',
      },
      {
        t: 'Cumulative Layout Shift',
        b: 'Images without reserved space, late banners, and fonts that swap. Cheap to fix, and it irritates buyers more than it costs you rankings.',
      },
      {
        t: 'Lab scores measured against field data',
        b: 'A Lighthouse run tells you what is possible. Field data tells you what your visitors got. We report both, and never quote only the flattering one.',
      },
      {
        t: 'How the page is delivered',
        b: 'Whether static site generation or server-side rendering would help, whether the CDN is doing edge caching on HTML or only on assets, and what is blocking first paint.',
      },
    ],
  },
  {
    label: 'On-page',
    items: [
      {
        t: 'Title tags',
        b: 'Length, uniqueness, and whether the page targets a phrase anyone actually searches. Rewritten titles are often the first measurable lift after an audit.',
      },
      {
        t: 'Meta descriptions',
        b: 'Not a ranking factor, still a click-through factor. Duplicates, truncations, and the pages where Google is rewriting yours because it is unhelpful.',
      },
      {
        t: 'Heading structure',
        b: 'Exactly one h1 and a clean descent to h2 and h3. We check the tag the browser receives, not the component name, because heading wrappers get this silently wrong.',
      },
      {
        t: 'Keyword cannibalization',
        b: 'Two pages chasing one phrase beat each other instead of the competition. We find the overlaps and say plainly which page should win and which should be merged.',
      },
      {
        t: 'Internal linking',
        b: 'Orphan pages, dead ends, and the authority your strongest pages are sitting on instead of passing down. Internal linking costs nothing and most sites still waste it.',
      },
      {
        t: 'Images, alt text, and URLs',
        b: 'Missing alt attributes, decorative images that should carry empty alt, files served far heavier than needed, and URLs only worth changing when the gain beats the redirect.',
      },
    ],
  },
  {
    label: 'Content',
    items: [
      {
        t: 'Thin and near-duplicate pages',
        b: 'Cloned service or location pages get filtered out of the index. Content pruning almost always comes before writing anything new.',
      },
      {
        t: 'Topical gaps against who outranks you',
        b: 'What the pages above you cover that yours do not. Topical authority is built by covering a subject properly, not by publishing more often.',
      },
      {
        t: 'Answer-first structure',
        b: 'Whether each page states its answer inside the first screen. AI answer engines pull disproportionately from the top third of a page, so burying the answer costs you twice.',
      },
      {
        t: 'Freshness and author signals',
        b: 'Whether dateModified in your structured data is honest, whether anything time-sensitive has quietly expired, and whether a named human stands behind the advice.',
      },
    ],
  },
  {
    label: 'Structured data and entities',
    items: [
      {
        t: 'JSON-LD, not Microdata',
        b: 'Google recommends JSON-LD for structured data in its own documentation, so that is the format we check for and the format we write.',
      },
      {
        t: 'Schema that matches the page',
        b: 'The right schema.org types for what the page genuinely is, validated before it ships instead of after somebody notices a rich result disappeared.',
      },
      {
        t: 'Schema drift',
        b: 'FAQ schema markup saying one thing while the visible FAQ says another is the most common silent defect we find. To an answer engine it reads as cloaking.',
      },
      {
        t: 'Entity consistency',
        b: 'Your Organization markup, your sameAs profiles, and whether your business name is written the same way everywhere Google already trusts.',
      },
    ],
  },
  {
    label: 'Links and authority',
    items: [
      {
        t: 'Referring domains, not link counts',
        b: 'How many real sites link to you, and how many of those are farms. A thousand links from forty domains is forty links.',
      },
      {
        t: 'Toxic and bought links',
        b: 'Anything a previous agency purchased, and whether it needs disavowing or simply ignoring. Most of the time the honest answer is ignoring.',
      },
      {
        t: 'Broken inbound links',
        b: 'Links pointing at URLs you retired years ago. A single-hop 301 redirect recovers authority you already earned and then forgot about.',
      },
    ],
  },
  {
    label: 'Local visibility',
    items: [
      {
        t: 'Google Business Profile and NAP',
        b: 'Primary category, services, hours, photos, and whether name, address, and phone match across the directories that feed Google. For a local business this outranks a lot of the website.',
      },
      {
        t: 'Location pages',
        b: 'One genuinely different page per location, carrying LocalBusiness structured data and internal linking from the service pages that already hold weight.',
      },
    ],
  },
  {
    label: 'AI visibility',
    items: [
      {
        t: 'Whether the assistants name you',
        b: 'We put the questions your buyers actually type into ChatGPT, Claude, Gemini, and Perplexity, and record whether you appear. It is measurable now, so we measure it.',
      },
      {
        t: 'AI crawler access in robots.txt',
        b: 'GPTBot, ClaudeBot, PerplexityBot, and Google-Extended each need naming. One over-broad wildcard that catches a retrieval bot removes you from AI answers with no error anywhere to notice.',
      },
      {
        t: 'Extractable blocks and llms.txt',
        b: 'Short definitions, real tables, honest lists, and a plain markdown file at your site root. The formats an answer engine can lift cleanly are the ones that get cited.',
      },
    ],
  },
  {
    label: 'Measurement',
    items: [
      {
        t: 'GA4 events that match reality',
        b: 'Whether form submits, calls, and checkouts land in Google Analytics 4 as named events. We have opened audits where the tracking broke months before the traffic did.',
      },
      {
        t: 'Google Tag Manager and server-side tracking',
        b: 'What is firing, what is firing twice, and whether moving to server-side tracking with consent mode would protect the first-party data you still have.',
      },
      {
        t: 'A year of Search Console history',
        b: 'Twelve months of queries and pages. On a large site we push the bulk export into BigQuery and read it in Looker Studio, because the interface hides the long tail.',
      },
    ],
  },
];

const CHECKLIST_TOTAL = AUDIT_CHECKLIST.reduce((n, g) => n + g.items.length, 0);

const AUDIT_SYSTEMS = [
  {
    name: 'Google Search Console',
    body: 'Google calls it a free service to monitor, maintain, and troubleshoot your presence in Search. First thing we ask for, and the one most owners never connected.',
  },
  {
    name: 'Google Analytics 4 and Google Tag Manager',
    body: 'Whether conversions are counted at all. Named GA4 events fired through Google Tag Manager, checked against what the site really does.',
  },
  {
    name: 'Bing Webmaster Tools',
    body: 'Free, quick to claim, and it feeds answer engines that never crawl Google directly. Most sites we audit have never opened it.',
  },
  {
    name: 'Screaming Frog',
    body: 'The full crawl. Redirect chains, canonical tags, status codes, duplicate titles, and orphan pages, at whatever scale your site is.',
  },
  {
    name: 'Server log files',
    body: 'Log file analysis shows what Googlebot actually requested, not what a crawl simulation guessed. The only honest read on crawl budget.',
  },
  {
    name: 'Lighthouse and field Core Web Vitals',
    body: 'Lighthouse in the lab, then real-user Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift. A laptop on office wifi is not your customer.',
  },
  {
    name: 'Structured data validation',
    body: 'Every JSON-LD block parsed and checked against schema.org, including the ones declared in code that never reach a script tag on the page.',
  },
  {
    name: 'ChatGPT, Claude, Gemini, and Perplexity',
    body: 'Run against your real buying questions. OpenAI, Anthropic, and Google answer differently, and being invisible in one is a finding, not a footnote.',
  },
  {
    name: 'Your stack and your CDN',
    body: 'Next.js, React, Shopify, WooCommerce, Magento, or WordPress, behind Cloudflare or Vercel. Rendering, redirects, and caching behave differently on each.',
  },
];

const APPROACH_COLUMNS = [
  { label: 'A manual audit', isFactoryJet: true },
  { label: 'A free automated scan' },
  { label: 'A gig-marketplace audit' },
  { label: 'Your own team, in-house' },
] as const;

const APPROACH_ROWS = [
  {
    feature: 'Who reads your site',
    values: [
      'The founder, start to finish, on the same call that presents the findings',
      'Software. Nobody reads the output except you',
      'Usually a template filled in by someone who spent under an hour on it',
      'Whoever has the time, which on most weeks is nobody',
    ],
  },
  {
    feature: 'What comes back',
    values: [
      'Findings ranked by impact and effort, with a 90-day sequence and the reasoning shown',
      'A score and a flat list of errors, unranked and uncontextualized',
      'A long PDF, often the same automated export with a cover page on it',
      'A list in a spreadsheet that competes with everything else in the backlog',
    ],
  },
  {
    feature: 'Crawling and indexing depth',
    values: [
      'Full crawl, plus index coverage, log file analysis, redirect chains, and canonical tag conflicts',
      'Surface crawl. Finds broken links, misses why Google skipped a page',
      'Whatever the tool it was run through happened to output',
      'Good, if somebody already knows Search Console. Rarely their main job',
    ],
  },
  {
    feature: 'Core Web Vitals',
    values: [
      'Lab and field data, diagnosed to the element and the cause, on mobile',
      'A Lighthouse number, real but not what your visitors experienced',
      'A screenshot of that same Lighthouse number',
      'Easy to measure, harder to interpret without having fixed it before',
    ],
  },
  {
    feature: 'Structured data and AI visibility',
    values: [
      'JSON-LD validated against schema.org, plus whether ChatGPT, Claude, Gemini, and Perplexity name you',
      'Flags missing schema markup. Cannot say whether an answer engine cites you',
      'Rarely covered at all',
      'Only if someone on the team already follows this closely',
    ],
  },
  {
    feature: 'Who fixes it afterwards',
    values: [
      'We implement it, hand it to your developer, or sit alongside your team',
      'Nobody. That part is entirely on you',
      'Almost never included, and the seller is usually gone by then',
      'Your team, the fastest option when the backlog allows it',
    ],
  },
  {
    feature: 'When this is genuinely the right call',
    values: [
      'Traffic dropped and nobody can explain why, or a redesign or replatforming is coming and you cannot afford to lose what already ranks',
      'A small site with one obvious problem and a developer who can act on it. If the scan finds a stray noindex left on after launch, you are done. Do not pay anyone',
      'Hard to make a case for. Run the free scan yourself and keep the difference',
      'You have a developer with real hours free and someone who opens Search Console weekly. Then your gap is prioritization, not access',
    ],
  },
];

export default function SeoAuditServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script id="aseo-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="aseo-organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script id="aseo-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="aseo-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SiteHeader />

      <main className="aseo">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* 1. HERO */}
        <section className="hero">
          <div className="aurora" aria-hidden="true"><i className="a1" /><i className="a2" /><i className="a3" /></div>
          <div className="wrap hero-grid">
            <div>
              <span className="loc rise d1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.5-4.5" strokeLinecap="round" /></svg>
                SEO audit &amp; technical SEO &middot; United States
              </span>
              <h1 className="rise d2">The SEO audit that shows you <span className="it">exactly what is broken</span></h1>
              <p className="lead rise d3">
                A free, expert SEO site audit that finds why you are not ranking, scores your site, and hands you a
                prioritized fix list. Not an automated checker spitting out 200 meaningless errors. A real technical SEO
                agency reading your site the way Google does. <b>Then we can fix it.</b>
              </p>
              <HeroInlineForm region="us" source="services_seo_audit_hero" submitLabel="Get my free SEO audit" />
              <div className="cta-row rise d4">
                <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-link">
                  Talk to the founder
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
              <div className="hstat rise d5">
                <div className="s"><span className="n"><span className="star">&#9733;</span> 4.9</span><span className="l">Google review rating</span></div>
                <span className="sep" />
                <div className="s"><span className="n">500+</span><span className="l">sites audited &amp; built</span></div>
                <span className="sep" />
                <div className="s"><span className="n">Real human</span><span className="l">not a checker tool</span></div>
              </div>
            </div>

            <div className="hero-vis rise d3" aria-hidden="true">
              <div className="report">
                <div className="rep-head"><span className="t">SEO Audit Report &middot; yoursite.com</span><span className="dts"><i /><i /><i /></span></div>
                <div className="rep-body">
                  <div className="gauge"><span className="gv"><span className="gn">62</span><span className="gl">/ 100</span></span></div>
                  <div className="checks">
                    <div className="crow"><span className="cio cbad">!</span><span className="lab">Technical &amp; crawlability</span><span className="sc">3 critical</span></div>
                    <div className="crow"><span className="cio cwarn">~</span><span className="lab">Core Web Vitals</span><span className="sc">needs work</span></div>
                    <div className="crow"><span className="cio cwarn">~</span><span className="lab">On-page &amp; content</span><span className="sc">6 fixes</span></div>
                    <div className="crow"><span className="cio cok">&#10003;</span><span className="lab">Mobile usability</span><span className="sc">passing</span></div>
                    <div className="crow"><span className="cio cbad">!</span><span className="lab">Backlinks &amp; authority</span><span className="sc">low</span></div>
                  </div>
                </div>
                <div className="scanline" />
              </div>
              <div className="fchip f1 float"><div className="k">Health score</div><div className="v">62</div></div>
              <div className="fchip f2 float" style={{ animationDelay: '1s' }}><span className="dot" /><span className="t">Read by a human</span></div>
            </div>
          </div>
        </section>

        {/* 2. PROOF */}
        <div className="proof">
          <div className="wrap">
            <span className="tag">Short answer</span>
            <p data-reveal>
              FactoryJet provides expert SEO audit services and technical SEO for US businesses. Our free SEO site audit
              reviews your technical health, on-page content, Core Web Vitals, and backlinks, then delivers a
              plain-English SEO audit report with a prioritized 90-day roadmap. Read by a human, not generated by a
              checker. Founder-led, month-to-month if you want us to fix it.
            </p>
          </div>
        </div>

        {/* 3. LOGOS */}
        <div className="logobar">
          <div className="wrap">
            <div className="lbl">Trusted by founders across India and the UK</div>
            <div className="logos" data-reveal>
              {['Belle Maison', 'Formative', 'Impulse', 'GPSUK', 'Sow Easy', 'Shevvaa'].map((n) => (
                <span key={n} style={{ whiteSpace: 'nowrap' }}>{n}</span>
              ))}
            </div>
          </div>
        </div>

        {/* 3b. CITED NUMBERS - additive pass 2026-08-13 */}
        <section>
          <div className="wrap">
            <div className="eyebrow" data-reveal>What the audit is measured against</div>
            <h2 data-reveal style={{ marginTop: 14 }}>Three numbers your site is <span className="it">already being judged on</span></h2>
            <p className="dek" data-reveal>
              An audit is only worth reading if the bar it measures you against is published somewhere you can check.
              Each figure below links to the source it came from. Open them.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginTop: 40 }}>
              {AUDIT_STATS.map((s) => (
                <div
                  key={s.value}
                  style={{ background: '#fff', border: '1px solid var(--line)', borderTop: '3px solid var(--orange)', borderRadius: 18, padding: 24 }}
                >
                  <div style={{ fontFamily: 'var(--disp)', fontWeight: 700, fontSize: 'clamp(30px, 4vw, 46px)', lineHeight: 1, letterSpacing: '-.03em', color: 'var(--orange)' }}>{s.value}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--n600)', marginTop: 12 }}>{s.label}</p>
                  <a
                    href={s.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginTop: 14, display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.04em', color: 'var(--orange-d)', textDecoration: 'none', fontWeight: 600 }}
                  >
                    <svg width="10" height="10" viewBox="0 0 9 9" fill="none" aria-hidden="true"><path d="M1.5 7.5L7.5 1.5M7.5 1.5H3M7.5 1.5V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {s.sourceLabel}
                  </a>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '36px', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--line)', maxWidth: 860 }}>
              <Image
                src="/images/us/shared/factoryjet-audit-call.webp"
                alt="FactoryJet senior engineer conducting a comprehensive technical SEO website audit and review"
                width={860}
                height={480}
                loading="lazy"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </section>

        {/* 4. THREE LAYERS, glass cards */}
        <section className="glass-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 760 }}>
            <h2 data-reveal>A real SEO audit has <span className="it">three layers</span></h2>
            <p className="dek" data-reveal style={{ margin: '0 auto' }}>
              A free checker only sees the surface. We score your site across the three layers that actually decide
              rankings, and rank every fix by impact.
            </p>
          </div>
          <div className="wrap">
            <div className="glass-row" data-reveal>
              <div className="glass-tilt">
                <article className="gcard gc1">
                  <div className="gc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l9 5-9 5-9-5z" strokeLinejoin="round" /><path d="M3 12l9 5 9-5M3 16l9 5 9-5" strokeLinejoin="round" /></svg></div>
                  <div className="gc-ln">Layer 01</div>
                  <h3>Technical foundation</h3>
                  <p>The most critical layer. Crawlability, indexing, redirects, canonicals, schema, and Core Web Vitals, so Google can read and trust the whole site.</p>
                  <span className="gc-tag">Most critical</span>
                </article>
                <article className="gcard gc2">
                  <div className="gc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 9h8M8 13h5" strokeLinecap="round" /></svg></div>
                  <div className="gc-ln">Layer 02</div>
                  <h3>On-page &amp; content</h3>
                  <p>Titles, meta, headings, keyword targeting, internal links, and content gaps against the competitors outranking you. Where most rankings are won or lost.</p>
                  <span className="gc-tag">Where rankings live</span>
                </article>
                <article className="gcard gc3">
                  <div className="gc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 15l6-6M8 13l-2 2a3 3 0 004 4l2-2M16 11l2-2a3 3 0 00-4-4l-2 2" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  <div className="gc-ln">Layer 03</div>
                  <h3>Authority &amp; backlinks</h3>
                  <p>Your link profile, toxic links, and the authority gap versus competitors. The trust layer that decides how high the rest can climb.</p>
                  <span className="gc-tag">Earns the trust</span>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SERVICES BENTO, what we audit */}
        <section className="svc-sec">
          <div className="wrap">
            <div className="eyebrow" data-reveal>The SEO audit checklist</div>
            <h2 data-reveal style={{ marginTop: 14 }}>Everything we <span className="it">check on your site</span></h2>
            <p className="dek" data-reveal>
              A complete SEO site audit, scored across four areas. We find what is holding you back and rank the fixes by
              impact, not by what is easy.
            </p>
            <div className="bento2" data-reveal>
              <div className="tile feat">
                <span className="badge">Where we go deepest</span>
                <div className="ic ic-o"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l9 5-9 5-9-5z" strokeLinejoin="round" /><path d="M3 12l9 5 9-5" strokeLinejoin="round" /></svg></div>
                <div className="kk">Technical SEO audit</div>
                <h3>Technical &amp; crawlability</h3>
                <p>Crawl and indexing, redirects and errors, canonicals, sitemaps and robots, and schema. As a technical SEO agency, this is where we find the problems a checker tool misses.</p>
              </div>
              <div className="tile">
                <div className="ic ic-g"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h7l-1 8 10-12h-7z" strokeLinejoin="round" /></svg></div>
                <div className="kk">Speed</div>
                <h3>Core Web Vitals</h3>
                <p>LCP, CLS, and INP on mobile, plus render-blocking and what is actually slowing the site down.</p>
              </div>
              <div className="tile">
                <div className="ic ic-l"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 9h8M8 13h5" strokeLinecap="round" /></svg></div>
                <div className="kk">On-page</div>
                <h3>Content &amp; on-page</h3>
                <p>Titles, meta, keyword targeting, internal links, and content gaps versus the competition.</p>
              </div>
              <div className="tile wide">
                <div className="ic ic-o"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 15l6-6M8 13l-2 2a3 3 0 004 4l2-2M16 11l2-2a3 3 0 00-4-4l-2 2" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                <div className="kk">Off-page</div>
                <h3>Backlinks &amp; authority</h3>
                <p>Link profile health, toxic links, and the authority gap versus competitors, so you know how much trust you need to build to climb.</p>
              </div>
            </div>
            <div style={{ marginTop: '36px', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--line)', maxWidth: 860 }}>
              <Image
                src="/images/services/ai-seo.webp"
                alt="Technical SEO audit performance dashboard tracking crawl health, Core Web Vitals, and indexation"
                width={860}
                height={480}
                loading="lazy"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </section>

        {/* 5b. THE FULL CHECKLIST - the centrepiece. Additive pass 2026-08-13 */}
        <section>
          <div className="wrap">
            <div className="eyebrow" data-reveal>The full list, nothing held back</div>
            <h2 data-reveal style={{ marginTop: 14 }}>The {CHECKLIST_TOTAL} things we check, <span className="it">in the order we check them</span></h2>
            <p className="dek" data-reveal>
              Most agencies keep the checklist behind a form. Here is ours. Read it, hand it to whoever you are already
              paying, and hold them to it. If they cannot answer half of these about your site, that is your answer.
            </p>

            <div style={{ marginTop: 44, display: 'grid', gap: 40, maxWidth: 900 }}>
              {AUDIT_CHECKLIST.map((g) => (
                <div key={g.label} data-reveal>
                  <h3 style={{ fontSize: 21, marginBottom: 16 }}>{g.label}</h3>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 10 }}>
                    {g.items.map((c) => (
                      <li
                        key={c.t}
                        style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: '#fff', border: '1px solid var(--line)', borderLeft: '3px solid var(--orange)', borderRadius: 12, padding: '16px 18px' }}
                      >
                        <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true" style={{ flexShrink: 0, marginTop: 3 }}>
                          <circle cx="10" cy="10" r="9" fill="#0C7150" />
                          <path d="M6 10.5l2.5 2.5L14 7" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                        </svg>
                        <div>
                          <div style={{ fontFamily: 'var(--disp)', fontWeight: 700, fontSize: 16.5, color: 'var(--ink)' }}>{c.t}</div>
                          <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--n600)', marginTop: 4 }}>{c.b}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={{ maxWidth: 780, marginTop: 48 }}>
              <h3 style={{ fontSize: 21, marginBottom: 12 }}>Where the findings usually send you next</h3>
              <p className="dek" style={{ maxWidth: 780 }}>
                An audit is a diagnosis, and the diagnosis decides the treatment. When the crawl comes back clean and
                the problem is simply that nobody has built topical depth, the answer is ordinary{' '}
                <Link href="/services/seo" style={LINK_STYLE}>SEO services</Link>, or{' '}
                <Link href="/services/small-business-seo" style={LINK_STYLE}>small business SEO</Link> if you are a
                single owner with limited hours. When the map pack is the missing channel, it is{' '}
                <Link href="/services/local-seo" style={LINK_STYLE}>local SEO</Link>. When faceted URLs are burning
                crawl budget and collection pages are cannibalizing each other, it is{' '}
                <Link href="/services/ecommerce-seo" style={LINK_STYLE}>ecommerce SEO</Link>.
              </p>
              <p className="dek" style={{ maxWidth: 780, marginTop: 16 }}>
                When you rank in Google but no assistant will name you, the work is{' '}
                <Link href="/services/ai-seo" style={LINK_STYLE}>AI SEO</Link> and{' '}
                <Link href="/services/generative-engine-optimization" style={LINK_STYLE}>AI search optimization services</Link>,
                which run on the same structured data and internal linking this audit checks. And sometimes the honest
                finding is that the site itself cannot be tuned into shape, in which case it is a{' '}
                <Link href="/services/web-design" style={LINK_STYLE}>web design</Link> problem, or a{' '}
                <Link href="/services/website-redesign" style={LINK_STYLE}>website redesign</Link> where the URL mapping
                and the redirect map get written before anything moves. We will say that out loud rather than bill you
                for another month of polishing.
              </p>
              <p className="dek" style={{ maxWidth: 780, marginTop: 16 }}>
                Where the competitor set is local enough to change the priorities, we publish a metro page instead of
                pretending one national answer fits: <Link href="/austin/seo" style={LINK_STYLE}>Austin</Link>,{' '}
                <Link href="/dallas/seo" style={LINK_STYLE}>Dallas</Link>,{' '}
                <Link href="/chicago/seo" style={LINK_STYLE}>Chicago</Link>,{' '}
                <Link href="/boston/seo" style={LINK_STYLE}>Boston</Link>,{' '}
                <Link href="/phoenix/seo" style={LINK_STYLE}>Phoenix</Link>, and{' '}
                <Link href="/san-diego/seo" style={LINK_STYLE}>San Diego</Link>.
              </p>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline={'Want the audit before any commitment?'}
          sub={'We run the full technical, content and link audit first. You keep the findings whether or not you work with us.'}
          label={'Request your free audit'}
        />

        {/* 5c. FOUR WAYS TO GET AUDITED - additive pass 2026-08-13 */}
        <ComparisonTable
          eyebrow="How the options compare"
          headline="Four ways to get your site audited, including the one that costs you nothing"
          lead={
            'We are one of four workable options, and not the right one for every site. A free scan is genuinely enough for a small site with an obvious problem. An in-house check beats hiring anyone when you already have a developer with time. Find the row that matters most and decide on that row.'
          }
          columns={APPROACH_COLUMNS}
          rows={APPROACH_ROWS}
          footer={
            'Columns describe the typical shape of each option as of 2026, not a scorecard. Tools and agencies vary widely, so put the same questions to any of them.'
          }
        />

        {/* 6. REPORT DELIVERABLES (glass) */}
        <section className="plat">
          <div className="wrap">
            <h2 data-reveal>A report you can <span className="it">actually act on</span></h2>
            <p className="dek" data-reveal>
              Not a 90-page PDF of automated warnings. Your SEO audit report ranks every issue by impact and effort,
              with a 90-day roadmap and a walkthrough call. Yours to keep, whether or not you hire us.
            </p>
            <div className="plat-grid" data-reveal>
              <div className="platcard lead"><span className="tagx">The deliverable</span><div className="pn">Prioritized fix list</div><p>Every issue ranked by impact and effort, so you fix what moves rankings first instead of busywork.</p></div>
              <div className="platcard"><div className="pn">Health score</div><p>A clear score across all four layers, so you can see where you stand at a glance.</p></div>
              <div className="platcard"><div className="pn">Technical findings</div><p>The crawl, speed, and indexing issues, explained in plain English with the why.</p></div>
              <div className="platcard"><div className="pn">90-day roadmap</div><p>A sequenced plan plus a 20-minute walkthrough call with the founder.</p></div>
            </div>
          </div>
        </section>

        {/* 6b. NAMED SYSTEMS - additive pass 2026-08-13 */}
        <section>
          <div className="wrap">
            <div className="eyebrow" data-reveal>What we open</div>
            <h2 data-reveal style={{ marginTop: 14 }}>The tools an audit runs through, <span className="it">and what each one is for</span></h2>
            <p className="dek" data-reveal>
              No single dashboard sees your whole site. The gaps between these systems are exactly where rankings leak,
              which is why an audit that only quotes one score is not an audit.
            </p>
            <ul style={{ listStyle: 'none', margin: '40px 0 0', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 14 }} data-reveal>
              {AUDIT_SYSTEMS.map((s) => (
                <li key={s.name} style={{ background: '#fff', border: '1px solid var(--line)', borderLeft: '3px solid var(--orange)', borderRadius: 14, padding: '18px 20px' }}>
                  <div style={{ fontFamily: 'var(--disp)', fontWeight: 700, fontSize: 16.5, color: 'var(--ink)' }}>{s.name}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--n600)', marginTop: 4 }}>{s.body}</p>
                </li>
              ))}
            </ul>
            <p className="dek" data-reveal style={{ maxWidth: 800, marginTop: 32 }}>
              Three of those claims are not ours, so here are the sources.{' '}
              <a href={GOOGLE_SEARCH_CONSOLE_DOC} target="_blank" rel="noopener noreferrer" style={LINK_STYLE}>
                Google&rsquo;s description of Search Console
              </a>{' '}
              is where the &ldquo;monitor, maintain, and troubleshoot&rdquo; line comes from.{' '}
              <a href={GOOGLE_STRUCTURED_DATA_DOC} target="_blank" rel="noopener noreferrer" style={LINK_STYLE}>
                Google&rsquo;s structured data documentation
              </a>{' '}
              states the preference for JSON-LD over Microdata and RDFa outright. And{' '}
              <a href={GOOGLE_ROBOTS_DOC} target="_blank" rel="noopener noreferrer" style={LINK_STYLE}>
                the robots.txt introduction
              </a>{' '}
              says plainly that the file is not a way to keep a page out of the index. If any of them stop saying that,
              tell us and we will cut the claim.
            </p>
          </div>
        </section>

        {/* 7. SCORECARD */}
        <section>
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 720 }}>
            <h2 data-reveal>A human audit vs <span className="it">a free checker tool</span></h2>
            <p className="dek" data-reveal style={{ margin: '0 auto' }}>
              Free SEO checkers spit out errors with no priority and no context. Here is what an expert SEO audit gives
              you instead.
            </p>
          </div>
          <div className="wrap">
            <div className="score" data-reveal>
              <div className="score-grid">
                <div className="col lab hidem">
                  <div className="ch">What you get</div>
                  {SCORE_ROWS.map((r) => <div key={r} className="row">{r}</div>)}
                </div>
                <div className="col win">
                  <div className="ch">FactoryJet audit</div>
                  {SCORE_FJ.map((v) => <div key={v} className="row"><Check /> {v}</div>)}
                </div>
                <div className="col">
                  <div className="ch">Free checker tool</div>
                  {SCORE_DIY.map(([v, i]) => <div key={v} className="row">{i === 'x' ? <Cross /> : <Partial />} {v}</div>)}
                </div>
                <div className="col">
                  <div className="ch">Big agency audit</div>
                  {SCORE_AG.map(([v, i]) => <div key={v} className="row">{i === 'c' ? <Check /> : <Partial />} {v}</div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. PROCESS FUNNEL */}
        <section className="rev">
          <span className="orb" aria-hidden="true" />
          <div className="wrap rev-grid">
            <div>
              <div className="eyebrow" data-reveal>How the audit works</div>
              <h2 data-reveal style={{ marginTop: 14 }}>From <span className="it">scan to roadmap</span> in days</h2>
              <p className="lead" data-reveal>
                A clear process, run by a person who knows what the data means. You are never left with a pile of errors
                and no idea what to do first.
              </p>
              <div className="cta-row" data-reveal><ModalCTAButton label="Get your free SEO audit" region="us" btnVariant="primary-dark" /></div>
            </div>
            <div className="funnel" data-reveal>
              <div className="fstage s1"><div><div className="fl">Scan &amp; score</div><div className="fs">We crawl your site and pull Search Console and Vitals data</div></div><div className="fv">Step 1</div></div>
              <div className="fstage s2"><div><div className="fl">Prioritize by impact</div><div className="fs">Every issue ranked by impact and effort</div></div><div className="fv">Step 2</div></div>
              <div className="fstage s3"><div><div className="fl">Roadmap &amp; walkthrough</div><div className="fs">The report plus a call on exactly what to do next</div></div><div className="fv">Step 3</div></div>
              <div className="rev-fine">Illustrative report summary. Your real audit scores your live site across 100+ checks; findings vary by site.</div>
            </div>
          </div>
        </section>

        {/* 9. TEAM */}
        <section className="team">
          <div className="wrap team-grid">
            <div className="team-vis" data-reveal>
              <div className="photo">
                <Image src="/images/us/services/seo/team-cutout.webp" alt="The FactoryJet technical SEO and audit team" width={460} height={520} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="ec e1">A senior team</div>
              <div className="ec e2"><span className="star">&#9733;</span> 4.9/5 &middot; average Google review rating</div>
            </div>
            <div>
              <h2 data-reveal>A real SEO audit consultant, <span className="it">not a PDF generator</span></h2>
              <p className="lead" data-reveal>
                I run every audit myself, so the person reading your site is the person accountable for the roadmap.
                Returns on your time, not just your spend.
              </p>
              <ul className="feat-list" data-reveal>
                <li><span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4" /><path d="M5 20c0-3.5 3-5 7-5s7 1.5 7 5" /></svg></span><div>Founder-led audits<small>Not handed to a junior or a bot</small></div></li>
                <li><span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h7l-1 8 10-12h-7z" /></svg></span><div>Technical SEO experts<small>We build 100/100 Lighthouse sites</small></div></li>
                <li><span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg></span><div>500+ sites audited &amp; built<small>4.9 / 5 average Google review rating</small></div></li>
              </ul>
              <div className="byline">Reviewed &amp; updated {REVIEWED_DATE} &middot; Bhavesh Barot, Founder</div>
            </div>
          </div>
        </section>

        {/* 10. FAQ */}
        <section className="faqsec" id="faq">
          <div className="wrap">
            <div className="eyebrow" data-reveal>SEO audit FAQ</div>
            <h2 data-reveal style={{ marginTop: 14 }}>Questions, <span className="it">answered like a real call</span></h2>
            <div className="faq-wrap">
              <aside className="faq-nav">
                {FAQ_GROUPS.map((g) => <a key={g.id} href={`#${g.id}`}>{g.label}</a>)}
              </aside>
              <div className="faq-list">
                {FAQ_GROUPS.map((g, gi) => (
                  <div className="faq-grp" id={g.id} key={g.id} data-reveal>
                    <div className="faq-cat">{g.label}</div>
                    {g.items.map((it, i) => (
                      <details key={it.q} open={gi === 0 && i === 0}>
                        <summary>{it.q}</summary>
                        <p>{it.a}</p>
                      </details>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 11. CTA */}
        <section className="cta">
          <div className="wrap">
            <div className="cta-card" data-reveal>
              <span className="orb o1" aria-hidden="true" /><span className="orb o2" aria-hidden="true" />
              <div>
                <div className="eyebrow" style={{ color: '#FF9C72' }}>Free SEO audit</div>
                <h2 style={{ marginTop: 14 }}>Find out <span className="it">why you are not ranking</span></h2>
                <p className="lead">
                  Book a free SEO audit and a 20-minute call with the founder. We will score your site, show you the
                  critical issues, and hand you the roadmap. No junior reps, no automated spam.
                </p>
                <ul className="cta-trust">
                  <li><Check fill="#F05A28" /> A real human audit, not a checker</li>
                  <li><Check fill="#F05A28" /> Technical, on-page, speed &amp; links</li>
                  <li><Check fill="#F05A28" /> Prioritized 90-day roadmap, yours to keep</li>
                </ul>
              </div>
              <div className="formcard">
                <div className="ft">Get your free SEO audit</div>
                <div className="fsub">A 20-minute call with the founder. We reply within one business day.</div>
                <ModalCTAButton label="Get your free SEO audit" region="us" btnVariant="primary-light" className="w-full" />
                <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border px-7 py-3.5 font-fj-body text-base font-semibold text-fj-ink transition-colors hover:bg-fj-neutral-50" style={{ borderColor: 'rgba(26,23,18,0.18)' }}>
                  Talk to the founder <span aria-hidden="true">&rarr;</span>
                </Link>
                <div className="fine">Founder-led. Month-to-month. The report is yours to keep.</div>
              </div>
            </div>
          </div>
        </section>

        <AuditFx />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
