import type { Metadata } from 'next';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import HeroInlineForm from '@/components/HeroInlineForm';
import WhatsAppCTA from '@/components/v2/WhatsAppCTA';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

import './sioux-falls-seo.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /us/sioux-falls/seo - Sioux Falls local-SEO city page. Built 2026-06-11.
   "The Trust Vault" layout. Real SiteHeader/SiteFooter/ModalCTAButton/WhatsAppCTA.
   Styles scoped under .sfseo (./sioux-falls-seo.css, next/font vars, no webfont
   request). CSS passbook-vault hero (text LCP, zero CLS), market photos lazy
   below the fold → Lighthouse 100 target. Source: research/mockup-us-sioux-falls-seo-v4.html.
   Honesty: NO pricing anywhere (2026-06-11 rule), free audit, no guarantee,
   month-to-month; "0 agencies leading with AI search" claim softened to "almost
   no agency structures sites for AI citation today" (Tiger29 now markets GEO).
   No fake LocalBusiness address, no self-serving Review schema.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/sioux-falls/seo';

export const metadata: Metadata = {
  title: 'Sioux Falls SEO Company | Local SEO Services in Sioux Falls, SD | FactoryJet',
  description:
    'FactoryJet is a Sioux Falls SEO company that wins the Map Pack, organic rankings, and AI answers for Sioux Empire businesses. Local SEO services in Sioux Falls, Brandon, Harrisburg, and Tea. Free SEO audit, month-to-month, built by senior engineers.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Sioux Falls SEO Company | Local SEO Services in Sioux Falls, SD | FactoryJet',
    description:
      'Sioux Falls SEO company for the whole Sioux Empire: Map Pack, organic, and AI answers in one compounding plan. Free SEO audit, month-to-month, senior engineers, founder-led.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://factoryjet.com/blog-images/us-sioux-falls-seo-og.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Sioux Falls SEO company, local SEO services in Sioux Falls, South Dakota',
      },
    ],
  },
  robots: { index: true, follow: true },
};

/* ── FAQ (22) - 10 from the approved v4 mockup verbatim + 12 keyword/trust/process adds ── */

const FAQ_ITEMS: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: 'Who is the best SEO agency in Sioux Falls?',
    a: 'The one that can show compounding proof: calls, Map Pack positions, and AI citations growing month over month. FactoryJet competes for that title with senior engineers doing the work and no long contracts. Whichever SEO company Sioux Falls puts on your shortlist, ask for one client result with real numbers before you sign anything.',
  },
  {
    q: 'How much does SEO cost in Sioux Falls?',
    a: 'It depends on your market, your competition, and how much groundwork your site already has. A clinic competing citywide and a B2B supplier selling into the banks need different scopes. We explain your exact scope and price on a free call, in writing, before you commit to anything.',
  },
  {
    q: 'How long until I see results?',
    a: 'Technical fixes and Google Business Profile work often move Map Pack visibility in four to eight weeks. Competitive organic terms take three to six months. Like any account worth opening, the balance builds monthly, and we show progress markers from week one so you are never guessing.',
  },
  {
    q: 'Do you only work with businesses inside Sioux Falls?',
    a: 'We cover the whole metro: Sioux Falls, Brandon, Harrisburg, Tea, and the rest of Lincoln and Minnehaha counties, plus South Dakota businesses that sell statewide or nationally. The strategy adapts to where your customers actually are, including the four-state trade area that shops here.',
  },
  {
    q: 'Should I hire an SEO expert in Sioux Falls or a bigger firm?',
    a: 'Hire whoever pairs local market knowledge with real engineering. If you do hire SEO expert in Sioux Falls help directly, ask two questions: who writes the code when the audit finds site problems, and can they show AI citations on a report. Most local options answer no to both. We built our service so the answer is yes to both.',
  },
  {
    q: 'Do you offer the best local SEO services in Sioux Falls for small businesses?',
    a: 'We let the scope argue for us: weekly profile management, review systems, town-by-town pages, and engineering, all month to month. Our small business SEO services are the same stack the bigger accounts get, sized to one location, and you can leave with 30 days notice if the numbers do not convince you.',
  },
  {
    q: 'Can you get my business into ChatGPT and Google AI answers?',
    a: 'Yes. AI tools already answer "best accountant in Sioux Falls" style questions with specific names. We structure your site so AI engines can quote it, then report your citations per engine every month. Almost no agency in this market reports that today, which is exactly the point.',
  },
  {
    q: 'Do I need a new website first?',
    a: 'Usually no. If your site is fast and Google can read it, we build on it. If the site itself is the bottleneck we will say so on the first call and you decide. Unlike the web design agencies Sioux Falls owners usually call for that rebuild, we ship in 7 days and keep working the rankings, which keeps the advice honest.',
  },
  {
    q: 'What is in the free SEO audit?',
    a: 'Your rankings, Map Pack position, site speed, citation health, and a live check of what AI engines say about your business. Thirty minutes, screen shared, and the findings are yours either way. It is the same first deposit every engagement starts with, so you see exactly how we work before you pay anything.',
  },
  {
    q: 'Do you work as an ongoing SEO consultant or only on retainers?',
    a: 'Both. Some owners want a local SEO expert running everything monthly; others want an SEO consultant to audit, set direction, and hand their team a plan. Either way you get plain-English reporting and no lock-in, because pragmatic Midwest skepticism about retainers is something we would rather earn through results than argue with.',
  },
  {
    q: 'What should a Sioux Falls SEO company actually deliver each month?',
    a: 'A written list, not vibes: Google Business Profile updates, content shipped, citations fixed, reviews earned, technical issues closed, and a one-page statement tying it all to calls. If an SEO company in Sioux Falls cannot show you last month’s deliverables for a real client, names redacted, keep shopping.',
  },
  {
    q: 'What is included in your SEO services in Sioux Falls month to month?',
    a: 'Everything in the eight-deposit list above: Google Business Profile management, reviews, citations, service-area pages, technical SEO, answer-first content, earned mentions, and per-engine AI tracking. Our Sioux Falls SEO services run as one plan rather than a menu of upsells, so the unglamorous work that actually moves rankings never gets skipped.',
  },
  {
    q: 'Do you offer local SEO services in Sioux Falls on their own?',
    a: 'Yes. If the Map Pack is your battleground, we can run local SEO services in Sioux Falls focused purely on your Google Business Profile, reviews, citations, and town-by-town pages from Brandon to Tea. The best local SEO services in Sioux Falls are the ones measured in phone calls, so that is how we report, whatever the scope.',
  },
  {
    q: 'What makes the best AI SEO agency in Sioux Falls different from a traditional one?',
    a: 'A traditional shop optimizes for ten blue links. An AI SEO agency, sometimes called an AEO agency in Sioux Falls, also structures your site so ChatGPT, Gemini, Claude, and Google AI Overviews can quote it, then proves it with per-engine citation counts. If you are evaluating the best AI SEO agency in Sioux Falls, ask one question: can you show me my citations by engine, monthly? Very few can. We do.',
  },
  {
    q: 'I searched "SEO Sioux Falls" and got national firms. Do you actually work here?',
    a: 'We serve Sioux Falls and the whole Sioux Empire, with the founder on every discovery call. Searches for SEO in Sioux Falls surface national resellers because they outspend locals on ads, and that is exactly the opportunity: businesses that invest in real Sioux Falls SEO outrank those template operations on the searches that matter, because Google rewards genuine local signals.',
  },
  {
    q: 'Are you a web design agency in Sioux Falls too, or only SEO?',
    a: 'Both, and that combination is the point. Most web design agencies Sioux Falls owners call treat SEO as a checkbox, and most SEO shops cannot rebuild the slow site holding rankings back. We design and ship fast sites in 7 days and then rank them, so the audit advice and the build advice come from the same team with the same incentive.',
  },
  {
    q: 'Can SEO work for a B2B firm selling into the trust and banking cluster?',
    a: 'Yes, and it is one of the most underpriced plays in this market. Compliance consultants, staffing firms, fintech vendors, and IT providers selling into Citi, Wells Fargo, and the 100+ trust companies face buyers who shortlist from research, not cold calls. Authority content, plainly written expertise pages, and AI answer coverage put you on that shortlist before a salesperson ever could.',
  },
  {
    q: 'How do 5,000 newcomers a year change my SEO strategy?',
    a: 'They reset the loyalty map. New residents have no dentist, no accountant, no HVAC company, and no friends here to ask yet, so Google and AI assistants are their referral network. That makes rankings in Sioux Falls unusually winnable: the businesses on page one and in the Map Pack collect customers who would otherwise have gone wherever word of mouth sent them.',
  },
  {
    q: 'How do you handle Google reviews and our Google Business Profile?',
    a: 'We manage your Google Business Profile weekly: categories, services, photos, posts, and Q&A. For reviews, we set up a simple ask-and-respond system your team can run in minutes per job, because steady review velocity from real customers beats any shortcut and is one of the strongest local ranking signals you control.',
  },
  {
    q: 'What does your process look like in the first 30 days?',
    a: 'Week one is the live audit on a shared screen. Weeks two through four are foundation work: site speed, schema, crawl fixes, and a proper Google Business Profile rebuild. You get a written scope before anything starts and a progress note every week, so you always know what was deposited and what comes next.',
  },
  {
    q: 'Is SEO in Sioux Falls different from running Google Ads?',
    a: 'Yes, and they compound differently. Ads buy visibility that stops the moment the budget does. Sioux Falls SEO builds an asset: rankings, reviews, and AI citations that keep producing calls without a per-click bill. Many clients run both early on, then watch the paid share shrink as the organic balance grows. In this city, that argument usually makes itself.',
  },
  {
    q: 'Is there a contract, setup fee, or cancellation penalty?',
    a: 'No long-term contract, no setup fee, no penalty. Everything is month to month with 30 days notice, and you keep everything we build: your profile, your content, your citations, your data. We think an SEO partner should re-earn the engagement every month, so that is how we bill.',
  },
];

/* ── Section data ── */

const VAULT_ROWS: { item: string; when: string; kind: string; amt: string }[] = [
  { item: 'Google Business Profile, managed weekly', when: ' · month 1', kind: 'deposit', amt: '+ calls' },
  { item: 'Technical fixes, site rebuilt to 100/100 speed', when: ' · month 1', kind: 'deposit', amt: '+ crawl trust' },
  { item: 'Service pages that answer real questions', when: ' · month 2', kind: 'deposit', amt: '+ rankings' },
  { item: 'Citations AI engines can verify', when: ' · month 3', kind: 'deposit', amt: '+ AI mentions' },
  { item: 'Reviews compounding month over month', when: ' · ongoing', kind: 'interest', amt: '+ trust' },
];

const STATS: { n: string; unit: string; t: string; s: string }[] = [
  { n: '$600', unit: 'B+', t: 'in assets held by the 100+ trust companies chartered in South Dakota, most of them headquartered right here in Sioux Falls', s: 'KELOLAND · Minneapolis Fed' },
  { n: '5,088', unit: '', t: 'new residents in 2025 alone. Every one of them is a searcher with no dentist, no builder, and no provider loyalty yet', s: 'City of Sioux Falls' },
  { n: '1.8', unit: '%', t: 'unemployment. Hiring is the hardest it has ever been, which makes inbound leads the cheapest growth lever left', s: 'BLS' },
];

const FACTS: { k: string; v: string }[] = [
  { k: 'City population, 2025', v: '224,676' },
  { k: 'Added in one year', v: '+5,088' },
  { k: 'Metro growth since 2020', v: '+7.6%' },
  { k: 'Largest SD sector', v: 'Finance, $8.03B' },
  { k: 'Trust companies', v: '100+' },
  { k: 'Anchor employers', v: 'Sanford · Avera · Citi' },
  { k: 'Regional trade area', v: '~1M people' },
  { k: 'Unemployment', v: '1.8%' },
];

const MARKET: { badge: string; h: string; p: string }[] = [
  { badge: '🏦', h: 'Banking and back-office finance', p: "Finance and insurance is South Dakota's largest sector at $8.03 billion, 13.8% of state GDP, and it started with the 1980 usury-law change that brought Citibank's card operation from New York. Citi alone employs around 3,200 people here, with Wells Fargo close behind. The SEO opportunity is the ecosystem around them: compliance consultants, fintech vendors, staffing firms, and B2B services selling into these institutions. Those buyers research like analysts, comparing three providers before one phone call, so the winning play is authority content that holds up to scrutiny, not just a tuned Google profile." },
  { badge: '🛡️', h: 'Trust companies and wealth management', p: 'More than 100 trust companies are chartered in South Dakota, holding over $600 billion in assets, and most keep their headquarters in Sioux Falls. These firms compete nationally for high-net-worth families who search discreetly and verify everything. For them, SEO means owning branded search, publishing plainly written authority pages, and being the name AI engines cite when someone asks about South Dakota trust administration. Map Pack tactics matter less here; credibility at every search surface matters more.' },
  { badge: '🏥', h: 'Healthcare, twice over', p: 'Sioux Falls is the rare 220,000-person city with two competing health systems headquartered in it. Sanford Health employs roughly 10,900 people and Avera around 8,000, and together they pull patients from South Dakota, northwest Iowa, southwest Minnesota, and northeast Nebraska. Every referral that crosses those state lines is also a search: for a dentist near the hospital, a physical therapist, home health, a med spa. Independent practices that rank in the Map Pack catch a four-state stream of patients the big systems cannot see.' },
  { badge: '🥩', h: 'Agriculture and food processing', p: 'Smithfield Foods employs about 3,200 people at its plant, and around it sits a web of ag input suppliers, equipment dealers, and processors selling across the Dakotas and beyond. These are B2B searches with long memories: a dealer who ranks for the parts and service queries farmers actually type becomes the default for a decade. Most ag suppliers here have never had a real SEO plan, which makes the organic ground cheap to take.' },
  { badge: '🛍️', h: 'Regional retail and franchises', p: 'Sioux Falls is the shopping hub for a trade area of roughly one million people spanning four states. Multi-location retailers, franchises, and home-services chains need local SEO services at scale: one properly built location page per store, consistent listings, and review systems that run themselves. Done right, every location earns its own Map Pack spot instead of the brand fighting for a single pin.' },
  { badge: '🏗️', h: 'Construction and home services', p: 'Sustained growth above 2% a year keeps homebuilders, remodelers, HVAC crews, roofers, and landscapers in permanent demand, especially across Harrisburg, Tea, and Brandon where the new rooftops actually go up. This is the highest-intent "near me" battleground in the market, decided by review velocity and service-area pages. If your crew works Lincoln County but your website only says Sioux Falls, Google hands those calls to someone else.' },
];

const DELIVERABLES: { mm: string; h: string; p: string }[] = [
  { mm: 'Deposit 01 · Local', h: 'Google Business Profile', p: 'Managed weekly, not quarterly. Categories, services, photos, posts, and Q&A maintained like the storefront it is.' },
  { mm: 'Deposit 02 · Local', h: 'Reviews engine', p: 'A repeatable system for earning, answering, and learning from reviews. Velocity beats volume, and we build velocity.' },
  { mm: 'Deposit 03 · Local', h: 'Citations and listings', p: 'Your name, address, and phone made consistent across the directories Google and AI engines actually check.' },
  { mm: 'Deposit 04 · Local', h: 'Service-area pages', p: 'Dedicated pages for Sioux Falls, Brandon, Harrisburg, Tea, and beyond, each written for that town, never copy-pasted.' },
  { mm: 'Deposit 05 · Technical', h: 'Technical SEO', p: 'Speed, clean code, schema, crawlability. We build to 100 out of 100 Google speed scores, the engineering gap no generalist shop in town fills.' },
  { mm: 'Deposit 06 · Content', h: 'Answer-first content', p: 'Pages built around the questions Sioux Falls buyers actually type, written plainly, reviewed by a human every time.' },
  { mm: 'Deposit 07 · Authority', h: 'Earned mentions', p: 'Real citations in places search and AI engines trust. No bulk links, no directories nobody reads, no risk.' },
  { mm: 'Deposit 08 · Proof', h: 'Five minute reporting', p: 'Calls, direction requests, rankings, and AI citations per engine. One page, monthly, readable over coffee.' },
];

const PLAN: { wk: string; h: string; p: string }[] = [
  { wk: 'Week 1', h: 'The audit, live', p: 'We pull up your rankings, your Map Pack position, your site speed, and what ChatGPT says about your business while you watch. You see the same screen we do. The findings are yours to keep whether or not we continue, which is what a free SEO audit should mean.' },
  { wk: 'Weeks 2 to 4', h: 'Fix the foundation', p: 'Technical repairs first: speed, schema, crawl issues, and the Google Business Profile rebuilt properly. This is the boring work most agencies skip because it never shows up in a slide deck. It shows up in rankings instead, and it is the first deposit in the passbook.' },
  { wk: 'Weeks 5 to 8', h: 'Build the surface area', p: 'Service-area pages for every town you cover from Brandon to Tea, answer-first content for your highest intent questions, and the citation cleanup that makes Google trust your address.' },
  { wk: 'Weeks 9 to 12', h: 'Earn the trust signals', p: 'Review velocity systems go live. Earned mentions begin landing. The first AI citation checks run, engine by engine, so we know exactly where you stand on the newest surface before your competitors know it exists.' },
  { wk: 'Every month after', h: 'Compound and report', p: 'One page, five minutes: calls, directions, rankings, AI citations, and what we are doing next month. SEO is compounding work and the report shows the curve, not vanity numbers. Like any good statement, the balance only moves one way when the deposits keep landing.' },
];

const FACTORS: { n: string; h: string; p: string }[] = [
  { n: '01', h: 'Relevance', p: 'Does your profile and site clearly say what you do? A profile listing "HVAC contractor" with every service itemized beats a vague one every time. We make relevance explicit on every page, in language both Google and AI engines parse cleanly, which is also what gets you quoted when someone asks an AI assistant for a recommendation.' },
  { n: '02', h: 'Distance', p: 'You cannot move your shop, but you can tell Google exactly where you work. Service-area pages for Brandon, Harrisburg, Tea, and the Lincoln County growth corridor widen your effective radius, which matters in a metro where the new households are landing outside the old city limits.' },
  { n: '03', h: 'Prominence', p: 'Reviews, mentions, links, and the general weight of evidence that you are a real, busy business. This compounds monthly, like everything else in this city. The earlier you start, the harder you are to displace, which is the whole argument for opening the account before the next five thousand residents arrive.' },
];

const COMPARE: { k: string; fj: string; gen: string; seo: string }[] = [
  { k: 'Who does the work', fj: 'Senior engineers, founder on every call', gen: 'Designers first, SEO assigned to whoever is free', seo: 'SEO specialists, no engineers on staff' },
  { k: 'Map Pack focus', fj: 'Weekly GBP management, metro-wide pages', gen: 'Profile set up once, touched quarterly', seo: 'Solid, but stops where the website code starts' },
  { k: 'AI search', fj: 'Citations tracked per engine, monthly', gen: 'Not offered', seo: 'Mentioned, rarely measured' },
  { k: 'Site speed', fj: 'Built and kept at 100 out of 100', gen: 'Depends on the theme', seo: 'Flagged in audits, fixed by no one' },
  { k: 'Can rebuild your site', fj: 'Yes, 7-day builds in house', gen: 'Yes, on a months-long timeline', seo: 'No, you hire a second vendor' },
  { k: 'Contract', fj: 'Month to month, 30 day notice', gen: 'Six to twelve months', seo: 'Six to twelve months' },
  { k: 'Reporting', fj: 'One page: calls, rankings, AI citations', gen: 'Traffic charts', seo: 'Ranking screenshots' },
];

const INDUSTRIES: { h: string; p: string }[] = [
  { h: 'Dentists and clinics', p: 'Map Pack plus reviews plus patient-question content, tuned for a city whose two health systems pull patients from four states past your door.' },
  { h: 'HVAC, plumbing, roofing', p: 'Service-area coverage across the metro and the Lincoln County boom towns, emergency-intent pages, and review velocity that outruns the franchises.' },
  { h: 'Trust and wealth firms', p: 'Discreet, authority-led SEO: branded search dominance, plainly written expertise pages, and AI answer coverage for the questions HNW families actually ask.' },
  { h: 'Law firms and CPAs', p: 'One page per practice area, written clearly enough for AI engines to quote and precise enough for the State Bar, serving a market dense with relocating businesses.' },
  { h: 'B2B suppliers to the anchors', p: 'Compliance, staffing, IT, and fintech vendors selling into Citi, Wells Fargo, Sanford, and Avera need authority content for buyers who shortlist before they ever call.' },
  { h: 'Retail and franchises', p: 'Location-page architecture for the chains serving a million-person trade area, so every store earns its own Map Pack pin.' },
];

const TAGS = ['home builders', 'remodelers', 'physical therapy', 'med spas', 'home health', 'ag equipment dealers', 'insurance agencies', 'restaurants', 'auto repair', 'veterinarians', 'landscaping', 'senior care'];

const REPORT_ROWS: { lab: string; width: string; val: string }[] = [
  { lab: 'GBP calls', width: '82%', val: '↑64' },
  { lab: 'Directions', width: '64%', val: '↑41' },
  { lab: 'Map Pack avg', width: '74%', val: '#2.4' },
  { lab: 'AI citations', width: '44%', val: '12' },
];

/* ── JSON-LD: WebPage + Service (NO offers/pricing) + FAQPage (derived) ── */

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Sioux Falls SEO Company | Local SEO Services in Sioux Falls, SD',
  url: CANONICAL,
  description:
    'FactoryJet is a Sioux Falls SEO company offering local SEO services across the Sioux Empire: Google Business Profile, reviews, citations, technical SEO, content, and AI search optimization, with a free audit and month-to-month terms.',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'FactoryJet', url: 'https://factoryjet.com' },
  author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://www.linkedin.com/in/bhaveshbarot/', jobTitle: 'Founder, FactoryJet' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Local SEO Services in Sioux Falls, SD',
  serviceType: 'Search engine optimization',
  provider: { '@type': 'Organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: [
    { '@type': 'City', name: 'Sioux Falls', containedInPlace: { '@type': 'State', name: 'South Dakota' } },
    { '@type': 'City', name: 'Brandon', containedInPlace: { '@type': 'State', name: 'South Dakota' } },
    { '@type': 'City', name: 'Harrisburg', containedInPlace: { '@type': 'State', name: 'South Dakota' } },
    { '@type': 'City', name: 'Tea', containedInPlace: { '@type': 'State', name: 'South Dakota' } },
  ],
  url: CANONICAL,
  description:
    'Sioux Falls SEO services covering the Google Map Pack, organic rankings, and AI answers: Google Business Profile management, reviews, citations, service-area pages, technical SEO, answer-first content, earned mentions, and per-engine AI citation reporting. Month-to-month, free audit.',
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

export default function SiouxFallsSeoPage() {
  return (
    <>
      <script id="sioux-falls-seo-webpage-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script id="sioux-falls-seo-service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="sioux-falls-seo-faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SiteHeader />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'US SEO Services', url: 'https://factoryjet.com/services/seo' },
          { name: 'Sioux Falls SEO', url: CANONICAL },
        ]}
      />

      <div className="sfseo">
        {/* 1 HERO - The Trust Vault */}
        <section className="hero">
          <div className="wrap">
            <div>
              <span className="eb rise d1">SEO COMPANY · SIOUX FALLS, SOUTH DAKOTA</span>
              <h1 className="rise d2">In the city of trust companies, <em>rankings compound</em> like interest.</h1>
              <p className="sub rise d3">Sioux Falls runs on compounding. The trust cluster grows balances, the banks grow card portfolios, and the city itself added 5,088 residents in a single year. SEO works the same way here: every deposit of content, citations, reviews, and engineering earns more than the month before. Most agencies in town never open the account. We are the Sioux Falls SEO company that does.</p>
              <HeroInlineForm region="us" source="sioux_falls_seo_hero" submitLabel="Get my free SEO audit" />
              <div className="cta-row rise d4">
                <a className="btn btn-ghost" href="#dividend">See what compounds</a>
                <WhatsAppCTA city="Sioux Falls" service="SEO" />
              </div>
              <div className="trustgrid rise d4">
                <div className="tchip"><i /><span><b>Technical + AI search</b>, the gap in this market</span></div>
                <div className="tchip"><i /><span><b>Month to month</b>, no lock-in</span></div>
                <div className="tchip"><i /><span><b>Proof per engine</b>, monthly</span></div>
              </div>
            </div>
            <div className="vault rise d3" aria-label="Search equity passbook, an illustration of how SEO work compounds">
              <div className="vhead"><b>SEARCH EQUITY PASSBOOK</b><span>account: your business</span></div>
              {VAULT_ROWS.map((r) => (
                <div className="vrow" key={r.item}>
                  <span>{r.item}<span className="d">{r.when}</span></span>
                  <span className="d">{r.kind}</span>
                  <span className="amt">{r.amt}</span>
                </div>
              ))}
              <div className="vfoot"><b>Balance after 12 months</b><span className="tot">page one + AI answers</span></div>
            </div>
          </div>
        </section>

        {/* 2 STAT STRIP */}
        <section className="strip">
          <div className="wrap">
            {STATS.map((s) => (
              <div className="stat" key={s.s}>
                <div className="n">{s.n}{s.unit ? <i>{s.unit}</i> : null}</div>
                <div className="t">{s.t}</div>
                <div className="s">{s.s}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 3 WHAT IS LOCAL SEO IN SIOUX FALLS (definition, answer-first) */}
        <section>
          <div className="wrap">
            <div className="edit">
              <div>
                <span className="eb">The short answer</span>
                <h2>What is local SEO in Sioux Falls, <em>actually?</em></h2>
                <p className="body">Local SEO is the work that makes your business show up when someone in the Sioux Empire searches for what you sell. It covers three surfaces at once: <b>the Google Map Pack</b> (the three businesses pinned to the map), <b>the organic results</b> below it, and now <b>the AI answers</b> from ChatGPT, Gemini, and Google AI Overviews that increasingly sit on top of everything.</p>
                <p className="body">In a market like Sioux Falls the Map Pack decides who gets the call for most service businesses. When a Harrisburg homeowner types &quot;furnace repair near me&quot;, the three names on that map split the work. Position four might as well be position forty. That is why our local SEO services start there: Google Business Profile, reviews, citations, and the service-area pages that tell Google you cover Brandon, Tea, and the rest of Lincoln County, the fastest growing county in South Dakota.</p>
                <p className="body">The part most SEO companies in Sioux Falls skip is the third surface. A growing share of buyers now checks an AI answer before calling anyone, and AI engines pick their recommendations from fast, structured, verifiable websites. Every plan we run treats AI search as a first-class surface, not an upsell, because the Sioux Falls businesses cited by AI today are compounding an advantage their competitors have not even noticed. In a city built on compounding, that should sound familiar.</p>
                <div className="midcta">
                  <ModalCTAButton label="Check where you rank today, free" region="us" modalVariant="seo" btnVariant="primary-light" />
                  <span>30 minutes · live screen share · you keep the findings</span>
                </div>
              </div>
              <div className="factbox">
                <h3>Sioux Falls search market, at a glance</h3>
                {FACTS.map((f) => (
                  <div className="fr" key={f.k}><span>{f.k}</span><span className="fv">{f.v}</span></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4 THE SIOUX FALLS MARKET */}
        <section className="room-alt">
          <div className="wrap">
            <span className="eb">Know the market, win the market</span>
            <h2>SEO in Sioux Falls is six different games. <em>We play all of them.</em></h2>
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
                    src="/images/us/sioux-falls/seo/sioux-falls-seo-1.webp"
                    alt="Sioux Falls coffee shop owner in her downtown storefront, the kind of local business our Sioux Falls SEO services put in the Map Pack"
                    width={1536}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="pslot wide">
                  <img
                    src="/images/us/sioux-falls/seo/sioux-falls-seo-2.webp"
                    alt="Front desk of a Sioux Falls clinic taking a patient call generated by local SEO in Sioux Falls, South Dakota"
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

        {/* 5 DELIVERABLES (8 deposits, 4x2) */}
        <section>
          <div className="wrap">
            <span className="eb">What our Sioux Falls SEO services include</span>
            <h2>Eight monthly deposits. <em>One compounding balance.</em></h2>
            <p className="lead">Every engagement is built like a savings plan. Each line of work earns on its own and multiplies the others, because a perfect Google profile on a slow website is a wasted profile, and great content nobody can find is a diary.</p>
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
            <p className="lead">Google has said publicly that local results weigh relevance, distance, and prominence. Here is what each one means for a Sioux Falls business, in plain words.</p>
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
            <h2>FactoryJet vs the usual <em>Sioux Falls options.</em></h2>
            <p className="lead">Most web design agencies Sioux Falls businesses call treat SEO as a line item, and the SEO-only shops cannot rebuild the slow site that is holding the rankings back. We run as both: the web design agency Sioux Falls owners use for fast rebuilds and the SEO team that ranks them. That is the comparison that matters.</p>
            <div className="cmpwrap">
              <table>
                <thead>
                  <tr><th scope="col"><span className="sr-only">Criteria</span></th><th scope="col">FactoryJet</th><th scope="col">Typical design-led generalist</th><th scope="col">Typical SEO-only shop</th></tr>
                </thead>
                <tbody>
                  {COMPARE.map((r) => (
                    <tr key={r.k}>
                      <td>{r.k}</td>
                      <td>{r.fj}</td>
                      <td>{r.gen}</td>
                      <td>{r.seo}</td>
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
            <span className="eb">Built for Sioux Falls businesses</span>
            <h2>The industries we rank <em>in the Sioux Empire.</em></h2>
            <div className="ind">
              {INDUSTRIES.map((i) => (
                <div className="ic" key={i.h}><h3>{i.h}</h3><p>{i.p}</p></div>
              ))}
            </div>
            <ul className="tags" aria-label="More industries we serve in Sioux Falls">
              {TAGS.map((t) => (<li key={t}>{t}</li>))}
            </ul>
          </div>
        </section>

        {/* 10 GROWTH DIVIDEND (split + compounding curve) */}
        <section className="room-alt" id="dividend">
          <div className="wrap">
            <span className="eb">The growth dividend</span>
            <h2>A city this young in loyalty <em>rewards early rankers.</em></h2>
            <div className="vwrap">
              <div>
                <p className="body">Five thousand newcomers a year, plus a steady stream of owners relocating for a state with zero personal and zero corporate income tax, means Sioux Falls searches are unusually winnable. New residents have no dentist, no accountant, no HVAC company, no builder. They pick from page one and the Map Pack, and increasingly from whatever an AI assistant tells them. Word of mouth is strong here, but newcomers do not have any mouths to hear it from yet. Google is their referral network, and it can be yours.</p>
                <p className="body">The supply side is just as lopsided. Local agencies are mostly generalists, one leads with SEO, and nobody in this market leads with engineering plus AI search together. That is the gap a business owner can drive a truck through: rankings in Sioux Falls cost less effort to win than in any coastal metro, and the compounding starts the month you begin. The dividend goes to whoever deposits first.</p>
                <div className="vquote"><b>The dividend, in numbers.</b> New residents in 2025: 5,088. Trust companies anchoring downtown: 100+. Anchor employers: Sanford, Avera, and Citi, the top 3. And almost no agency in this market structures sites for AI citation today.</div>
              </div>
              <div className="curve" role="img" aria-label="Search equity compounding curve showing citations, service pages, reviews, and AI mentions building month over month">
                <span className="clab">DEPOSITS COMPOUND · MONTH OVER MONTH</span>
                <span className="riseline" />
                <span className="axis" />
                <span className="dchip" style={{ left: '7%', bottom: 84 }}><i>📍</i>Citations</span>
                <span className="dchip" style={{ left: '27%', bottom: 136 }}><i>📄</i>Service pages</span>
                <span className="dchip" style={{ left: '48%', bottom: 194 }}><i>⭐</i>Reviews</span>
                <span className="dchip hot" style={{ left: '64%', bottom: 256 }}><i>💬</i>AI mentions</span>
                <span className="imark" style={{ left: '30%' }}>Month 3 · interest</span>
                <span className="imark" style={{ left: '56%' }}>Month 6 · interest</span>
                <span className="imark" style={{ left: '82%' }}>Month 12 · interest</span>
              </div>
            </div>
          </div>
        </section>

        {/* 11 AI SEARCH (peach room) */}
        <section className="proom">
          <div className="wrap">
            <span className="eb">The newest surface</span>
            <h2>When Sioux Falls asks AI, <em>be the answer.</em></h2>
            <div className="aiwrap">
              <div>
                <p className="body">Ask ChatGPT for the best roofing company in Sioux Falls and it names names. Ask Gemini which firm handles South Dakota trust administration and it answers with specific companies, pulled from the websites and mentions it trusts. Google now shows AI Overviews above the regular results for a growing share of local questions, and pages ranked first lose more than half their clicks when that happens. The search results your customers see in 2026 are not the ones your last agency optimized for.</p>
                <p className="body">This is the quietest land grab in local search, and almost nobody here has noticed. If you went looking for an AI SEO agency in Sioux Falls today, or an AEO agency that can show answer-engine citations on a report, you would find almost no one who delivers that. We make your pages quotable: clear questions, direct answers, schema underneath, and real mentions AI engines can verify. Then we track your citations in ChatGPT, Gemini, Claude, and Google AI Overviews every month, so AI visibility becomes a number on your statement instead of a mystery. Pair it with our <Link href="/services/ai-seo">US AI SEO service</Link> for the deepest coverage. In the city that turned a 1980 banking law into a $600 billion industry, being early to a new set of rules is a local tradition.</p>
                <ul className="pills" aria-label="AI engines we track">
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
              <div className="aistack">
                <div className="mini-ac" aria-label="Example of an AI assistant recommending a Sioux Falls business">
                  <div className="h"><i /> ai-assistant · live answer</div>
                  <div className="q">&quot;Best accountant in Sioux Falls?&quot;</div>
                  <div className="a">Based on reviews, response times, and verified credentials, <mark>your business</mark> is a frequently recommended option for Sioux Falls and Lincoln County clients…</div>
                  <div className="h ft">that answer is the product · we engineer it</div>
                </div>
                <div className="report" aria-label="Sample monthly statement format">
                  <div className="rhead"><b>Monthly Statement</b><span>preview</span></div>
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
            </div>
          </div>
        </section>

        {/* 12 FAQ (22) */}
        <section className="room-alt">
          <div className="wrap">
            <span className="eb">Questions, answered straight</span>
            <h2>Sioux Falls SEO <em>FAQ.</em></h2>
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

        {/* 13 TEAM */}
        <section className="team">
          <div className="wrap">
            <div className="twrap">
              <div>
                <img
                  src="/images/us/services/seo/team-cutout.webp"
                  alt="The FactoryJet engineering team that builds and ranks Sioux Falls websites"
                  width={1000}
                  height={688}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <span className="eb">The people behind the rankings</span>
                <h2>Engineers first. <em>Marketers second.</em></h2>
                <p className="body">Where most Sioux Falls agencies are generalists, your rankings are run by senior engineers who build websites scoring 100 out of 100 on Google&apos;s speed tests. That ordering matters: most ranking problems in this market are engineering problems wearing a marketing costume, and an agency that cannot open the code can only write reports about it.</p>
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

        {/* 14 FOUNDER CTA */}
        <section className="founder">
          <div className="wrap">
            <div>
              <span className="eb">FOUNDER ACCESS</span>
              <h2>Open the account. <em>Watch it compound.</em></h2>
              <p className="fp">Book a 30 minute call. We pull up your Sioux Falls rankings, your Map Pack position, and what ChatGPT says about your business, live, while you watch. You keep the findings either way, and the price arrives in writing, never as a surprise. The first deposit costs you nothing but the half hour.</p>
              <p className="fl">Also serving: Brandon · Harrisburg · Tea · explore <Link href="/sioux-falls/ecommerce-development">ecommerce development in Sioux Falls</Link> and our <Link href="/services/seo">US SEO services</Link></p>
            </div>
            <div className="fcard">
              <div className="av" aria-hidden="true">BB</div>
              <p>&quot;Hi, I&apos;m Bhavesh, founder of FactoryJet. I run every discovery call myself, so by minute 10 we already know whether what you need pays for itself, and how fast.&quot;</p>
              <div className="stack">
                <ModalCTAButton label="Get your free Sioux Falls SEO audit" region="us" modalVariant="seo" btnVariant="primary-dark" />
                <a className="btn btn-ghost-dark" href={CALENDLY}>Book a 30 minute call</a>
                <WhatsAppCTA city="Sioux Falls" service="SEO" variant="dark" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
