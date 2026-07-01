import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import HeroInlineForm from '@/components/HeroInlineForm';
import WhatsAppCTA from '@/components/v2/WhatsAppCTA';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

import './boise-seo.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /us/boise/seo - Boise local-SEO city page. Built 2026-06-11.
   "The Welcome Mat" layout. Real SiteHeader/SiteFooter/ModalCTAButton/WhatsAppCTA.
   Styles scoped under .bseo (./boise-seo.css, next/font vars, no webfont request).
   CSS sign-card hero (text LCP, zero CLS), market photos lazy below the fold
   → Lighthouse 100 target. Source: research/mockup-us-boise-seo-v4.html.
   Honesty: NO pricing anywhere (2026-06-11 rule), free audit, no guarantee,
   month-to-month; real clients only; founder byline. No fake LocalBusiness
   address, no self-serving Review schema.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/boise/seo';

export const metadata: Metadata = {
  title: 'Boise SEO Company | Local SEO Services in Boise, ID | FactoryJet',
  description:
    'FactoryJet is a Boise SEO company that wins the Map Pack, organic rankings, and AI answers for Treasure Valley businesses. Local SEO services in Boise, Meridian, Eagle, Nampa, and Caldwell. Free SEO audit, month-to-month, built by senior engineers.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Boise SEO Company | Local SEO Services in Boise, ID | FactoryJet',
    description:
      'Boise SEO company for the whole Treasure Valley: Map Pack, organic, and AI answers in one plan. Free SEO audit, month-to-month, senior engineers, founder-led.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://factoryjet.com/blog-images/us-boise-seo-og.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Boise SEO company, local SEO services in Boise, Idaho',
      },
    ],
  },
  robots: { index: true, follow: true },
};

/* ── FAQ (22) - 12 from the approved v4 mockup verbatim + 10 keyword/process adds ── */

const FAQ_ITEMS: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: 'Who is the best SEO company in Boise?',
    a: 'The one that shows proof: Map Pack positions, phone calls, and AI citations per engine. FactoryJet competes for that title with senior engineers doing the work and no long contracts. Whoever you shortlist as the best Boise SEO company, ask for one client result with real numbers before signing anything.',
  },
  {
    q: 'How much does SEO cost in Boise?',
    a: 'It depends on your market and your starting point. A dentist in Eagle and a roofer covering all of Ada County need different scopes. We explain your exact scope and price on a free call, in writing, before you commit to anything.',
  },
  {
    q: 'How long until I see results?',
    a: 'Technical fixes and Google Business Profile work often move Map Pack visibility in four to eight weeks. Competitive organic terms take three to six months. We show progress markers from week one so you are never guessing.',
  },
  {
    q: 'Do you only work with businesses in Boise?',
    a: 'We cover the whole Treasure Valley: Boise, Meridian, Eagle, Nampa, and Caldwell, plus Idaho businesses that sell statewide. The strategy adapts to where your customers actually are.',
  },
  {
    q: 'What makes you different from other Boise SEO agencies?',
    a: 'Three things: engineers build and run everything including the site itself, AI search is included rather than upsold, and you can leave with 30 days notice. The comparison table above is the honest version of this answer.',
  },
  {
    q: 'Can you get my business into ChatGPT and Google AI answers?',
    a: 'Yes. AI engines already answer Boise service questions with specific business names. We structure your site so they can quote it, then report your citations per engine every month.',
  },
  {
    q: 'Do I need a new website first?',
    a: 'Usually no. If your site is fast and Google can read it, we build on it. If the site itself is the bottleneck we will say so on the first call and you decide. We build sites too, which keeps that advice honest.',
  },
  {
    q: 'What is in the free SEO audit?',
    a: 'Your rankings, Map Pack position, site speed, citation health, and a live check of what AI engines say about your business. Thirty minutes, screen shared, and the findings are yours either way.',
  },
  {
    q: 'Do you handle local SEO services or full SEO?',
    a: 'Both, in one plan. Local SEO wins the Map Pack while technical, content, and authority work win the organic results and the AI answers. Splitting them is how budgets get wasted.',
  },
  {
    q: 'Who will actually work on my account?',
    a: 'The founder runs every discovery call, and senior engineers do the work. No account manager between you and the people building your rankings, and no junior rotating onto your account next quarter.',
  },
  {
    q: 'Should I hire an SEO expert in Boise or work with an agency?',
    a: 'Both can work, and the honest answer depends on scope. A solo local seo expert brings one skill set, and SEO needs technical work, content, citations, and review strategy running together. If you do hire seo expert in Boise help directly, agree the deliverables in writing and ask how AI search is covered, because most freelancers have not added it yet. A small senior team gives you the full stack at a similar monthly commitment.',
  },
  {
    q: 'Is small business SEO different from what big brands buy?',
    a: 'Yes, and in your favor. Small business seo services live or die on local intent: the Map Pack, reviews, and service pages, which respond to consistent work much faster than national keywords do. A Boise small business that executes for six months can outrank brands a hundred times its size on the searches that produce phone calls, because those searches reward proximity and trust, not advertising budgets.',
  },
  {
    q: 'How do I choose an SEO agency in Boise without getting burned?',
    a: 'Ask every SEO agency in Boise the same four questions: who exactly does the work, what gets delivered each month in writing, how is success measured, and can you leave without a penalty. Then ask what AI engines say about their current clients. Any agency that dodges those questions, or guarantees a number one position, has already answered them for you.',
  },
  {
    q: 'What should an SEO company in Boise, Idaho actually deliver each month?',
    a: 'A written list, not vibes: Google Business Profile updates, content shipped, citations fixed, reviews earned, technical issues closed, and a one-page report tying it all to calls. If an SEO company in Boise cannot show you last month’s deliverables for a real client, names redacted, keep shopping.',
  },
  {
    q: 'Is SEO marketing in Boise different from running Google Ads?',
    a: 'Yes, and they compound differently. Ads buy visibility that stops the moment the budget does. Boise SEO marketing builds an asset: rankings, reviews, and AI citations that keep producing calls without a per-click bill. Many clients run both early on, then watch the paid share shrink as organic takes over.',
  },
  {
    q: 'What is included in your Boise SEO services month to month?',
    a: 'Everything in the eight-job list above: Google Business Profile management, reviews, citations, service-area pages, technical SEO, answer-first content, earned mentions, and per-engine AI tracking. Our SEO services in Boise run as one plan rather than a menu of upsells, so a Boise SEO service engagement never skips the unglamorous work that actually moves rankings.',
  },
  {
    q: 'Do you offer local SEO services in Boise on their own?',
    a: 'Yes. If the Map Pack is your battleground, we can run local SEO services in Boise focused purely on your Google Business Profile, reviews, citations, and service-area pages. The best local SEO services in Boise are the ones measured in phone calls, so that is how we report, whatever the scope.',
  },
  {
    q: 'What makes the best AI SEO agency in Boise different from a traditional one?',
    a: 'A traditional shop optimizes for ten blue links. An AI SEO agency, sometimes called an AEO agency in Boise, also structures your site so ChatGPT, Gemini, Claude, and Google AI Overviews can quote it, then proves it with per-engine citation counts. If you are evaluating the best AI SEO agency in Boise, ask one question: can you show me my citations by engine, monthly? Very few can. We do.',
  },
  {
    q: 'I searched "SEO Boise ID" and got national firms. Do you actually work here?',
    a: 'We serve Boise and the whole Treasure Valley, with the founder on every discovery call. Searches for SEO in Boise, ID surface national resellers because they outspend locals on ads, and that is exactly the opportunity: businesses that invest in real SEO in Boise outrank those template operations on the searches that matter, because Google rewards genuine local signals.',
  },
  {
    q: 'What does your process look like in the first 30 days?',
    a: 'Week one is the live audit on a shared screen. Weeks two through four are foundation work: site speed, schema, crawl fixes, and a proper Google Business Profile rebuild. You get a written scope before anything starts and a progress note every week, so you always know what was done and what comes next.',
  },
  {
    q: 'How do you handle Google reviews and our Google Business Profile?',
    a: 'We manage your Google Business Profile weekly: categories, services, photos, posts, and Q&A. For reviews, we set up a simple ask-and-respond system your team can run in minutes per job, because steady review velocity from real customers beats any shortcut and is one of the strongest local ranking signals you control.',
  },
  {
    q: 'Is there a contract, setup fee, or cancellation penalty?',
    a: 'No long-term contract, no setup fee, no penalty. Everything is month to month with 30 days notice, and you keep everything we build: your profile, your content, your citations, your data. We think an SEO partner should re-earn the engagement every month, so that is how we bill.',
  },
];

/* ── Section data ── */

const STATS: { n: string; unit: string; t: string; s: string }[] = [
  { n: '188', unit: 'K', t: 'small businesses in Idaho, 99.2% of every company in the state, all competing for the same local searches', s: 'SBA Idaho profile, 2025' },
  { n: '17', unit: 'K', t: 'new jobs arriving with the Micron expansion, each one a household that searches before it buys anything', s: 'Idaho Commerce' },
  { n: '46', unit: '%', t: 'of all Google searches carry local intent, and newcomers lean on "near me" harder than anyone else', s: 'Industry benchmark' },
];

const FACTS: { k: string; v: string }[] = [
  { k: 'Metro population', v: '800K+' },
  { k: 'Growth, last decade', v: '~25%' },
  { k: 'Largest employer', v: "St. Luke's" },
  { k: 'Tech anchor', v: 'Micron HQ' },
  { k: 'Idaho small businesses', v: '188,603' },
  { k: 'Searches with local intent', v: '46%' },
  { k: 'Cities in one strategy', v: '5' },
];

const MARKET: { badge: string; h: string; p: string }[] = [
  { badge: '🏥', h: 'Healthcare and clinics', p: "St. Luke's is Idaho's largest employer and the medical corridor pulls patients statewide. Practices live or die on the Map Pack and reviews, and the ones that answer patient questions on their own site get quoted when someone asks ChatGPT for a recommendation. Our clinic clients get answer-first pages, not brochure pages." },
  { badge: '🔧', h: 'Construction and home services', p: "A quarter of the valley arrived in the last decade, and every household needs HVAC, plumbing, roofing, and remodels. This is Boise's most contested local SEO battleground, where review velocity and service-area pages decide winners. If your crew serves Meridian and Eagle but your site only says Boise, Google sends those calls elsewhere." },
  { badge: '💾', h: 'Tech and B2B services', p: "Micron's expansion and the downtown startup scene mean thousands of professionals buying accounting, legal, staffing, and IT. These buyers research like engineers: they compare, they read, and they ask AI assistants for shortlists. Ranking here takes authority content, not just a Google profile." },
  { badge: '⚖️', h: 'Professional services', p: 'Law firms, CPAs, and advisors compete against local rivals and national directories at once. The play is precision: one page per practice area per city, schema search engines can parse, and plainly written answers AI engines lift verbatim.' },
  { badge: '☕', h: 'Hospitality and retail', p: 'Downtown, BoDo, and the Greenbelt corridor feed a constant stream of "best coffee near me" searches from locals and relocation scouts visiting before they move. The Map Pack plus a fast site wins these, and almost nobody in this category has done either properly.' },
];

const DELIVERABLES: { mm: string; h: string; p: string }[] = [
  { mm: '01 · Local', h: 'Google Business Profile', p: 'Managed weekly, not quarterly. Categories, services, photos, posts, and Q&A maintained like the storefront it is.' },
  { mm: '02 · Local', h: 'Reviews engine', p: 'A repeatable system for earning, answering, and learning from reviews. Velocity beats volume, and we build velocity.' },
  { mm: '03 · Local', h: 'Citations and listings', p: 'Your name, address, and phone made consistent across the directories Google and AI engines actually check.' },
  { mm: '04 · Local', h: 'Service-area pages', p: 'Dedicated pages for Boise, Meridian, Eagle, Nampa, and Caldwell, each written for that city, never copy-pasted.' },
  { mm: '05 · Technical', h: 'Technical SEO', p: 'Speed, clean code, schema, crawlability. We build to 100 out of 100 Google speed scores and prove it on request.' },
  { mm: '06 · Content', h: 'Answer-first content', p: 'Pages built around the questions Boise buyers actually type, written plainly, reviewed by a human every time.' },
  { mm: '07 · Authority', h: 'Earned mentions', p: 'Real citations in places search and AI engines trust. No bulk links, no directories nobody reads, no risk.' },
  { mm: '08 · Proof', h: 'Five minute reporting', p: 'Calls, direction requests, rankings, and AI citations per engine. One page, monthly, readable over coffee.' },
];

const PLAN: { wk: string; h: string; p: string }[] = [
  { wk: 'Week 1', h: 'The audit, live', p: 'Your rankings, Map Pack position, site speed, and what ChatGPT says about you, on a shared screen. Findings are yours to keep either way.' },
  { wk: 'Weeks 2 to 4', h: 'Fix the foundation', p: 'Speed, schema, crawl issues, and the Google Business Profile rebuilt properly. The boring work that shows up in rankings, not slide decks.' },
  { wk: 'Weeks 5 to 8', h: 'Build the surface area', p: 'Service-area pages for every valley city, answer-first content for your highest intent questions, and citation cleanup Google can trust.' },
  { wk: 'Weeks 9 to 12', h: 'Earn the trust signals', p: 'Review velocity systems go live, earned mentions land, and the first per-engine AI citation checks run.' },
  { wk: 'Every month after', h: 'Compound and report', p: 'One page, five minutes: calls, directions, rankings, AI citations, and what we are doing next month. The curve, not vanity numbers.' },
];

const FACTORS: { n: string; h: string; p: string }[] = [
  { n: '01', h: 'Relevance', p: 'Does your profile and site clearly say what you do? A profile listing "HVAC contractor" with services itemized beats a vague one every time. We make relevance explicit on every page, in language both Google and AI engines parse cleanly.' },
  { n: '02', h: 'Distance', p: 'You cannot move your shop, but you can tell Google exactly where you work. Service-area pages for Meridian, Eagle, Nampa, and Caldwell widen your effective radius, which matters in a valley where customers cross city lines without noticing.' },
  { n: '03', h: 'Prominence', p: 'Reviews, mentions, links, and the general weight of evidence that you are a real, busy business. This compounds monthly. The earlier you start, the harder you are to displace, which is the whole argument for starting before the next 17,000 households arrive.' },
];

const COMPARE: { k: string; fj: string; local: string; natl: string }[] = [
  { k: 'Who does the work', fj: 'Senior engineers, founder on every call', local: 'One generalist juggling design and ads', natl: 'Offshore queue behind an account manager' },
  { k: 'Map Pack focus', fj: 'Weekly GBP management, valley-wide pages', local: 'Profile set up once, touched quarterly', natl: 'Template city page with your logo' },
  { k: 'AI search', fj: 'Citations tracked per engine, monthly', local: 'Not offered', natl: 'Not offered' },
  { k: 'Site speed', fj: 'Built and kept at 100 out of 100', local: 'Depends on the theme', natl: 'Never measured' },
  { k: 'Contract', fj: 'Month to month, 30 day notice', local: 'Six to twelve months', natl: 'Twelve months, auto-renew' },
  { k: 'Reporting', fj: 'One page: calls, rankings, AI citations', local: 'Ranking screenshots', natl: '20 page PDF nobody reads' },
];

const INDUSTRIES: { h: string; p: string }[] = [
  { h: 'Dentists and clinics', p: 'Map Pack plus reviews plus patient-question content. The trifecta that fills appointment books in a city of newcomers without a family dentist.' },
  { h: 'HVAC, plumbing, roofing', p: 'Service-area coverage across all five valley cities, emergency-intent pages, and review velocity that outruns the franchises.' },
  { h: 'Law firms', p: 'One page per practice area, written plainly enough for AI engines to quote and precise enough for the State Bar.' },
  { h: 'Home builders and remodelers', p: 'Portfolio pages that rank, neighborhood-level content, and the trust signals relocating families look for.' },
  { h: 'Ecommerce and retail', p: 'Local inventory searches, store visits, and the product page SEO we already run for stores nationwide.' },
  { h: 'Professional services', p: 'CPAs, advisors, agencies, IT. Authority content for buyers who compare three providers before one phone call.' },
];

const TAGS = ['restaurants', 'real estate teams', 'physical therapy', 'med spas', 'auto repair', 'veterinarians', 'gyms', 'landscaping', 'solar', 'storage', 'childcare', 'senior care'];

const VALLEY: { b: string; p: string }[] = [
  { b: 'Boise', p: 'Downtown, the Bench, the medical corridor. The center of search gravity.' },
  { b: 'Meridian', p: 'The fastest growing city in the valley and the hottest "near me" market.' },
  { b: 'Eagle', p: 'High value households, high value services, low tolerance for slow websites.' },
  { b: 'Nampa', p: 'Canyon County volume. Underpriced search demand most agencies ignore.' },
  { b: 'Caldwell', p: 'Growing fast off a small base. Early rankings here are cheap to win.' },
];

const REPORT_ROWS: { lab: string; width: string; val: string }[] = [
  { lab: 'GBP calls', width: '82%', val: '↑64' },
  { lab: 'Directions', width: '64%', val: '↑41' },
  { lab: 'Form fills', width: '52%', val: '↑23' },
  { lab: 'Map Pack avg', width: '74%', val: '#2.4' },
  { lab: 'AI citations', width: '44%', val: '12' },
];

/* ── JSON-LD: WebPage + Service (NO offers/pricing) + FAQPage (derived) ── */

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Boise SEO Company | Local SEO Services in Boise, ID',
  url: CANONICAL,
  description:
    'FactoryJet is a Boise SEO company offering local SEO services across the Treasure Valley: Google Business Profile, reviews, citations, technical SEO, content, and AI search optimization, with a free audit and month-to-month terms.',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'FactoryJet', url: 'https://factoryjet.com' },
  author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://www.linkedin.com/in/bhaveshbarot/', jobTitle: 'Founder, FactoryJet' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Local SEO Services in Boise, ID',
  serviceType: 'Search engine optimization',
  provider: { '@type': 'Organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: [
    { '@type': 'City', name: 'Boise', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'City', name: 'Meridian', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'City', name: 'Eagle', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'City', name: 'Nampa', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'City', name: 'Caldwell', containedInPlace: { '@type': 'State', name: 'Idaho' } },
  ],
  url: CANONICAL,
  description:
    'Boise SEO services covering the Google Map Pack, organic rankings, and AI answers: Google Business Profile management, reviews, citations, service-area pages, technical SEO, answer-first content, earned mentions, and per-engine AI citation reporting. Month-to-month, free audit.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function BoiseSeoPage() {
  return (
    <>
      <Script id="boise-seo-webpage-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <Script id="boise-seo-service-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="boise-seo-faq-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SiteHeader />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'US SEO Services', url: 'https://factoryjet.com/services/seo' },
          { name: 'Boise SEO', url: CANONICAL },
        ]}
      />

      <div className="bseo">
        {/* 1 HERO - The Welcome Mat */}
        <section className="hero">
          <div className="wrap">
            <div>
              <span className="eb rise d1">SEO COMPANY · BOISE, IDAHO</span>
              <h1 className="rise d2">Boise grew by 150,000 people. <em>None of them</em> know your name yet.</h1>
              <p className="sub rise d3">Every week, new families in Boise, Meridian, and Eagle search for a dentist, a plumber, a lawyer, an HVAC crew. They have zero loyalty to anyone here. The Boise SEO company that puts you in front of them first wins the next decade of customers, and that window is open right now.</p>
              <HeroInlineForm region="us" source="boise_seo_hero" submitLabel="Get my free SEO audit" />
              <div className="cta-row rise d4">
                <a className="btn btn-ghost" href="#plan">See the 90 day plan</a>
                <WhatsAppCTA city="Boise" service="SEO" />
              </div>
              <div className="trustgrid rise d4">
                <div className="tchip"><i /><span><b>Map Pack first</b>, rankings second</span></div>
                <div className="tchip"><i /><span><b>Month to month</b>, no lock-in</span></div>
                <div className="tchip"><i /><span><b>AI answers tracked</b>, every plan</span></div>
              </div>
            </div>
            <div className="heroR rise d3">
              <div className="sign">
                <p className="sh">WELCOME TO BOISE</p>
                <div className="pop">NEW RESIDENTS, LAST DECADE<b>+150,000</b></div>
                <p className="note">Population: searching for someone like you. Elevation: page one or invisible.</p>
              </div>
              <div className="chiprow">
                <div className="chip"><b>#1</b>fastest-growing US metro across multiple years</div>
                <div className="chip"><b>3 cities</b>Boise, Meridian, Eagle. One valley strategy</div>
              </div>
            </div>
          </div>
        </section>

        {/* 2 STAT STRIP */}
        <section className="strip">
          <div className="wrap">
            {STATS.map((s) => (
              <div className="stat" key={s.s}>
                <div className="n">{s.n}<i>{s.unit}</i></div>
                <div className="t">{s.t}</div>
                <div className="s">{s.s}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 3 WHAT IS LOCAL SEO IN BOISE (definition, answer-first) */}
        <section>
          <div className="wrap">
            <div className="edit">
              <div>
                <span className="eb">The short answer</span>
                <h2>What is local SEO in Boise, <em>actually?</em></h2>
                <p className="body">Local SEO is the work that makes your business show up when someone in the Treasure Valley searches for what you sell. It covers three surfaces at once: <b>the Google Map Pack</b> (the three businesses pinned to the map), <b>the organic results</b> below it, and now <b>the AI answers</b> from ChatGPT, Gemini, and Google AI Overviews that increasingly sit on top of everything.</p>
                <p className="body">In a market like Boise the Map Pack is the whole game for service businesses. When a Meridian homeowner types &quot;water heater replacement near me&quot;, the three names on that map get the calls. Position four might as well be position forty. That is why our Boise SEO services start with local: Google Business Profile, reviews, citations, and the service-area pages that tell Google exactly which parts of the valley you cover.</p>
                <p className="body">The part most Boise SEO companies skip is the third surface. Almost half of buyers now check an AI answer before they call anyone, and AI engines pick their recommendations from structured, verifiable websites. Every plan we run treats AI search as a first-class surface, not an upsell, because the businesses cited by AI today are compounding an advantage their competitors have not noticed yet.</p>
                <div className="midcta">
                  <ModalCTAButton label="Check where you rank today, free" region="us" modalVariant="seo" btnVariant="primary-light" />
                  <span>30 minutes · live screen share · you keep the findings</span>
                </div>
              </div>
              <div className="factbox">
                <h3>Boise search market, at a glance</h3>
                {FACTS.map((f) => (
                  <div className="fr" key={f.k}><span>{f.k}</span><span className="fv">{f.v}</span></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4 THE BOISE MARKET */}
        <section className="room-alt">
          <div className="wrap">
            <span className="eb">Know the market, win the market</span>
            <h2>SEO in Boise is five different games. <em>We play all of them.</em></h2>
            <div className="mwrap">
              <div>
                {MARKET.map((m) => (
                  <div className="mrow" key={m.h}>
                    <div className="badge" aria-hidden="true">{m.badge}</div>
                    <div><h3>{m.h}</h3><p>{m.p}</p></div>
                  </div>
                ))}
              </div>
              <div className="mphotos">
                <div className="pslot tall">
                  <img
                    src="/images/us/boise/seo/boise-seo-1.webp"
                    alt="Boise small business owner outside her storefront near the foothills, the kind of local business our Boise SEO services put in the Map Pack"
                    width={1536}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="pslot wide">
                  <img
                    src="/images/us/boise/seo/boise-seo-2.webp"
                    alt="Front desk of a Boise clinic taking a patient call generated by local SEO in Boise, Idaho"
                    width={1536}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5 DELIVERABLES (8 cards, 4x2) */}
        <section>
          <div className="wrap">
            <span className="eb">What our Boise SEO services include</span>
            <h2>Eight jobs. One plan. <em>Zero filler.</em></h2>
            <p className="lead">Every engagement covers the full stack, because a perfect Google Business Profile on a slow website is a wasted profile, and great content nobody can find is a diary.</p>
            <div className="del">
              {DELIVERABLES.map((d) => (
                <div className="dc" key={d.h}>
                  <span className="mm">{d.mm}</span>
                  <h3>{d.h}</h3>
                  <p>{d.p}</p>
                </div>
              ))}
            </div>
            <div className="midcta">
              <ModalCTAButton label="Get the full scope for your business" region="us" modalVariant="seo" btnVariant="primary-light" />
              <span>explained in writing, on a free call</span>
            </div>
          </div>
        </section>

        {/* 6 PROCESS (90 days) */}
        <section className="room-alt" id="plan">
          <div className="wrap">
            <span className="eb">The first 90 days</span>
            <h2>From audit to answering phones, <em>week by week.</em></h2>
            <div className="plan5">
              {PLAN.map((p) => (
                <div className="pc5" key={p.h}>
                  <span className="wk">{p.wk}</span>
                  <h3>{p.h}</h3>
                  <p>{p.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7 RANKING FACTORS (green room) */}
        <section className="groom">
          <div className="wrap">
            <span className="eb">How Google picks the Map Pack</span>
            <h2>Three factors decide who gets the call. <em>All three are workable.</em></h2>
            <p className="lead">Google has said publicly that local results weigh relevance, distance, and prominence. Here is what each one means for a Boise business, in plain words.</p>
            <div className="rf">
              {FACTORS.map((f) => (
                <div className="rfc" key={f.h}>
                  <h3><span>{f.n}</span> {f.h}</h3>
                  <p>{f.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8 COMPARISON */}
        <section>
          <div className="wrap">
            <span className="eb">An honest comparison</span>
            <h2>FactoryJet vs the usual <em>Boise options.</em></h2>
            <div className="cmpwrap">
              <table>
                <thead>
                  <tr><th scope="col"><span className="sr-only">Criteria</span></th><th scope="col">FactoryJet</th><th scope="col">Typical local shop</th><th scope="col">National reseller</th></tr>
                </thead>
                <tbody>
                  {COMPARE.map((r) => (
                    <tr key={r.k}>
                      <td>{r.k}</td>
                      <td>{r.fj}</td>
                      <td>{r.local}</td>
                      <td>{r.natl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="midcta">
              <ModalCTAButton label="Compare us on your own numbers" region="us" modalVariant="seo" btnVariant="primary-light" />
              <span>bring any proposal, we will walk through it line by line</span>
            </div>
          </div>
        </section>

        {/* 9 INDUSTRIES (lavender room) */}
        <section className="lroom">
          <div className="wrap">
            <span className="eb">Built for Boise businesses</span>
            <h2>The industries we rank <em>in this valley.</em></h2>
            <div className="ind">
              {INDUSTRIES.map((i) => (
                <div className="ic" key={i.h}><h3>{i.h}</h3><p>{i.p}</p></div>
              ))}
            </div>
            <ul className="tags" aria-label="More industries we serve in Boise">
              {TAGS.map((t) => (<li key={t}>{t}</li>))}
            </ul>
          </div>
        </section>

        {/* 10 VALLEY CITIES */}
        <section>
          <div className="wrap">
            <span className="eb">Service area</span>
            <h2>One strategy for the <em>whole valley.</em></h2>
            <div className="vwrap">
              <div>
                <p className="lead">Newcomers settle across the metro, not just inside Boise city limits. Your rankings should follow the same map, which is why every plan covers the five cities your customers actually live in.</p>
                <div className="vquote"><b>The valley is one market with five front doors.</b> Meridian adds residents faster than Boise itself, Eagle skews to high value services, and Canyon County delivers volume most agencies never price in. When a Nampa homeowner and an Eagle homeowner search for the same service, both should find you, on a page that sounds written for their town, because it was.</div>
                <p className="body" style={{ marginTop: 14 }}>A search for &quot;seo companies in boise&quot; misses the point slightly: the winners here build a page worthy of each city and let Google match the searcher to the right front door.</p>
              </div>
              <div className="vmap" role="img" aria-label="Treasure Valley coverage map showing Boise, Meridian, Eagle, Nampa, and Caldwell">
                <span className="road" style={{ top: '48%', left: '8%', width: '84%' }} />
                <span className="road" style={{ top: '30%', left: '30%', width: '40%', transform: 'rotate(24deg)' }} />
                <span className="vpin hot" style={{ top: '38%', left: '56%' }}>Boise</span>
                <span className="vpin" style={{ top: '52%', left: '34%' }}>Meridian</span>
                <span className="vpin" style={{ top: '22%', left: '44%' }}>Eagle</span>
                <span className="vpin" style={{ top: '64%', left: '16%' }}>Nampa</span>
                <span className="vpin" style={{ top: '78%', left: '36%' }}>Caldwell</span>
                <span className="tag">TREASURE VALLEY · ONE PLAN</span>
              </div>
            </div>
            <div className="valley">
              {VALLEY.map((v) => (
                <div className="vc" key={v.b}><b>{v.b}</b><p>{v.p}</p></div>
              ))}
            </div>
          </div>
        </section>

        {/* 11 AI SEARCH (peach room) */}
        <section className="proom">
          <div className="wrap">
            <span className="eb">The newest surface</span>
            <h2>When Boise asks AI, <em>be the answer.</em></h2>
            <div className="aiwrap">
              <div>
                <p className="body">Ask ChatGPT for the best HVAC company in Boise and it names names. Ask Gemini for a family dentist in Meridian and it answers with specific practices, pulled from the websites and mentions it trusts. Google now shows AI Overviews above the regular results for a growing share of local questions, and pages ranked first lose more than half their clicks when that happens.</p>
                <p className="body">This is the quietest land grab in local search. Almost no Boise SEO agency structures sites for AI citation today, which means the businesses that do it now get recommended without a fight. We make your pages quotable, then track your citations in every engine, monthly, so AI visibility becomes a number on your report instead of a mystery. Pair it with our <Link href="/services/ai-seo">US AI SEO service</Link> for the deepest coverage.</p>
              </div>
              <div className="mini-ac" aria-label="Example of an AI assistant recommending a Boise business">
                <div className="h"><i /> ai-assistant · live answer</div>
                <div className="q">&quot;Who is the best HVAC company in Boise?&quot;</div>
                <div className="a">Based on reviews, response times, and verified service areas, <mark>your business</mark> is a frequently recommended option for Boise and Meridian homeowners…</div>
                <div className="h ft">that answer is the product · we engineer it</div>
              </div>
            </div>
            <ul className="engines" aria-label="AI engines we track">
              <li>ChatGPT ✓ tracked</li>
              <li>Gemini ✓ tracked</li>
              <li>Claude ✓ tracked</li>
              <li>AI Overviews ✓ tracked</li>
            </ul>
            <div className="midcta">
              <ModalCTAButton label="Ask us what AI says about you right now" region="us" modalVariant="seo" btnVariant="primary-light" />
              <span>we run the check live on the call</span>
            </div>
          </div>
        </section>

        {/* 12 MEASUREMENT */}
        <section>
          <div className="wrap">
            <span className="eb">What results actually look like</span>
            <h2>We measure phone calls, <em>not vanity charts.</em></h2>
            <div className="measure">
              <div>
                <p className="body">Rankings are a means, not an end. The numbers that matter to a Boise business show up in the bank account: <b>calls from the Google Business Profile</b>, <b>direction requests</b> from people already in their car, <b>form fills</b> from service-area pages, and now <b>mentions inside AI answers</b> where a growing share of buyers make their shortlist. Those four numbers lead every report we send.</p>
                <p className="body">The honest shape of an engagement: month one is foundation work and usually quiet. Months two and three are where Map Pack movement shows, because Google reacts to profile activity faster than it reranks competitive terms. Months four through six are where organic rankings for terms like &quot;seo company boise&quot; climb and review velocity becomes visible proof. From month six the curve compounds, which is exactly why businesses that started a year ago are so hard to displace today.</p>
                <p className="body">Two promises we will not make: a guaranteed number one position, because nobody honest can, and hiding behind impressions when calls are flat. If something is not working, the report says so in plain words along with what we are changing. That is monthly accountability with no annual contract forcing you to stay.</p>
              </div>
              <div className="report" aria-label="Sample monthly report format">
                <div className="rhead"><b>Monthly Report · Boise client</b><span>format preview</span></div>
                {REPORT_ROWS.map((r) => (
                  <div className="rrow" key={r.lab}>
                    <span className="lab">{r.lab}</span>
                    <div className="rbar"><i style={{ width: r.width }} /></div>
                    <span className="val">{r.val}</span>
                  </div>
                ))}
                <p className="rnote">illustrative format, one page, five minutes</p>
              </div>
            </div>
            <div className="midcta">
              <ModalCTAButton label="See a sample report before you commit" region="us" modalVariant="seo" btnVariant="primary-light" />
              <span>one page, real client format, names redacted</span>
            </div>
          </div>
        </section>

        {/* 13 FAQ (22) */}
        <section className="room-alt">
          <div className="wrap">
            <span className="eb">Questions, answered straight</span>
            <h2>Boise SEO <em>FAQ.</em></h2>
            <p className="lead">22 questions, answered the way we would on a call: answer first, no hedging, no fine print.</p>
            <div className="fwrap">
              {FAQ_ITEMS.map((f) => (
                <div className="fi" key={f.q}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
            <p className="fnote">Still deciding? Compare our <Link href="/services/seo">US SEO services</Link> and <Link href="/services/ai-seo">AI SEO services</Link>, or just <a href={CALENDLY}>ask the founder directly</a>.</p>
          </div>
        </section>

        {/* 14 TEAM */}
        <section className="team">
          <div className="wrap">
            <div className="twrap">
              <div>
                <img
                  src="/images/us/services/seo/team-cutout.webp"
                  alt="The FactoryJet engineering team that builds and ranks Boise websites"
                  width={1000}
                  height={688}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <span className="eb">The people behind the rankings</span>
                <h2>Engineers first. <em>Marketers second.</em></h2>
                <p className="body">The same team that ships websites scoring 100 out of 100 on Google&apos;s speed tests runs your SEO. That ordering matters: most ranking problems in Boise are engineering problems wearing a marketing costume, and an agency that cannot open the code can only write reports about it.</p>
                <p className="body">You work with senior people from day one. The founder runs every discovery call, an engineer owns your account, and nobody hands you off to a junior in month two.</p>
                <div className="tstats">
                  <div className="ts"><b>500+</b><span>businesses served</span></div>
                  <div className="ts"><b>100/100</b><span>speed score standard</span></div>
                  <div className="ts"><b>25+ yrs</b><span>engineering depth</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 15 FOUNDER CTA */}
        <section className="founder">
          <div className="wrap">
            <div>
              <span className="eb">FOUNDER ACCESS</span>
              <h2>150,000 newcomers are searching. <em>Claim your share.</em></h2>
              <p className="fp">Book a 30 minute call. We pull up your Boise rankings, your Map Pack position, and what ChatGPT says about your business, live, while you watch. You keep the findings either way, and the price arrives in writing, never as a surprise.</p>
              <p className="fl">Also serving: Meridian · Eagle · Nampa · Caldwell · explore <Link href="/boise/ecommerce-development">ecommerce development in Boise</Link> and our <Link href="/services/seo">US SEO services</Link></p>
            </div>
            <div className="fcard">
              <div className="av" aria-hidden="true">BB</div>
              <p>&quot;Hi, I&apos;m Bhavesh, founder of FactoryJet. I run every discovery call myself, so by minute 10 we already know whether what you need pays for itself, and how fast.&quot;</p>
              <div className="stack">
                <ModalCTAButton label="Get your free Boise SEO audit" region="us" modalVariant="seo" btnVariant="primary-dark" />
                <a className="btn btn-ghost-dark" href={CALENDLY}>Book a 30 minute call</a>
                <WhatsAppCTA city="Boise" service="SEO" variant="dark" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
