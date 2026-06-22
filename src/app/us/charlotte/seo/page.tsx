import type { Metadata } from 'next';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import ExitIntentLeadForm from '@/components/ExitIntentLeadForm';

import './charlotte-seo.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /us/charlotte/seo — Charlotte local-SEO city page. Built 2026-06-06.
   "Skyline Ledger" layout, deliberately differentiated from Tampa (same brand
   fonts/palette, new structure): editorial hero + CSS skyline-chart, demand
   ticker (real Semrush volumes), asymmetric growth ledger, sticky split
   verticals, bento, timeline, dual-panel comparison, manifesto quote, FAQ bands.
   Real SiteHeader/SiteFooter/ModalCTAButton. Styles scoped under .cseo
   (./charlotte-seo.css, next/font vars, no webfont request). No images
   (text LCP, zero CLS) → Lighthouse 100 target.
   Source: research/mockup-us-charlotte-seo-v3.html + research/city-charlotte-industry-brief.md.
   Honesty: no pricing shown (no-pricing rule), month-to-month, free audit, no guarantee; real clients
   only; founder byline. Growth stat = Census-derived 148/day (54,100/yr, vintage
   2025), deliberately NOT the CLT Alliance 157/day (older migration data).
   No fake LocalBusiness address, no self-serving Review schema.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/us/charlotte/seo';

export const metadata: Metadata = {
  title: 'Charlotte SEO Company | Local SEO Services Near Me, NC | FactoryJet',
  description:
    'FactoryJet is a Charlotte SEO company that gets local businesses into the Google Map Pack and "near me" results. Local SEO, GBP optimization, and technical SEO. Free audit, no long-term contracts.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Charlotte SEO Company | Local SEO Services Near Me, NC | FactoryJet',
    description:
      'Charlotte SEO company. Map Pack optimization, local SEO services, and technical SEO for Charlotte, NC businesses. Free audit, no lock-in.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const TICKER: { kw: string; vol: string }[] = [
  { kw: 'charlotte seo company', vol: '1,300/mo' },
  { kw: 'seo agency charlotte', vol: '1,000/mo' },
  { kw: 'seo company charlotte nc', vol: '880/mo' },
  { kw: 'seo charlotte', vol: '720/mo' },
  { kw: 'charlotte seo agency', vol: '590/mo' },
  { kw: 'local seo charlotte', vol: '260/mo' },
  { kw: 'charlotte local seo', vol: '210/mo' },
  { kw: 'contractor seo charlotte', vol: '50/mo' },
  { kw: 'charlotte small business seo', vol: '40/mo' },
];

type Vertical = { h: string; p: string; badge?: string };
const VERTICAL_GROUPS: { label: string; items: Vertical[] }[] = [
  {
    label: 'Trades & home services',
    items: [
      { h: 'Contractors & home services', badge: 'strongest fit', p: 'HVAC, roofing, plumbing, landscaping, remodeling. 54,100 new residents a year need all of it, and every job starts with a "near me" search.' },
      { h: 'Real estate & property managers', p: 'Neighborhood visibility in one of the busiest housing markets in the country.' },
    ],
  },
  {
    label: 'Practices & professional services',
    items: [
      { h: 'Medical & dental practices', p: 'Clinics, dentists, and specialists competing for "near me" patient searches.' },
      { h: 'Law firms & attorneys', p: 'Practice-area pages and reviews that win high-value local cases.' },
      { h: 'CPAs, advisors & insurance', p: 'In a banking town full of finance professionals, trust and proximity close the deal.' },
    ],
  },
  {
    label: 'Storefronts & local commerce',
    items: [
      { h: 'Restaurants & local e-commerce', p: 'Local discovery, reviews, and "open now" intent across South End and NoDa.' },
    ],
  },
];

const STEPS: { when: string; h: string; p: string }[] = [
  { when: 'Day 1', h: 'Free audit', p: 'Where you rank in the Map Pack today, and what is holding you back.' },
  { when: 'Week 1', h: 'Foundations', p: 'Google Business Profile, citations, and technical fixes.' },
  { when: 'Ongoing', h: 'Content & links', p: 'Local content, reviews, and authority built month over month.' },
  { when: 'Monthly', h: 'Reporting', p: 'Tied to calls and leads, not vanity ranking screenshots.' },
];

const COMPARE: { k: string; fj: string; alt: string; hl?: boolean }[] = [
  { k: 'Pricing', fj: 'Scoped & shown upfront', alt: 'Quoted after a sales call', hl: true },
  { k: 'Contract', fj: 'Month-to-month', alt: '6-12 month lock-in' },
  { k: 'Who does the work', fj: 'Senior engineers', alt: 'Junior account managers' },
  { k: 'Kickoff', fj: '7 days', alt: 'Weeks' },
  { k: 'Reporting', fj: 'Calls & leads', alt: 'Ranking screenshots' },
  { k: 'AI SEO / GEO', fj: 'Included', alt: 'Rarely offered' },
  { k: 'Your data & accounts', fj: 'You own them', alt: 'Often locked to the agency' },
];

type FaqGroup = { label: string; items: { q: string; a: string }[] };
const FAQ_GROUPS: ReadonlyArray<FaqGroup> = [
  {
    label: 'Pricing & timeline',
    items: [
      { q: 'How much does local SEO cost in Charlotte?', a: "It depends on your competition, how many locations you run, and the current state of your Google Business Profile and citations: a single-location service business needs far less work than a multi-location brand. Rather than a one-size package, we scope it to your market and show you the number before you sign. Your audit is free, with no setup fee and no long-term contract, so book a free call and we'll give you a straight quote." },
      { q: 'How long does SEO take to work in Charlotte?', a: 'Expect early movement in 3-6 months and stable local-pack rankings in 6-12 months. If your Google Business Profile is under-optimized, the Map Pack can improve in as little as 2-8 weeks. Anyone promising page one in 30 days is selling risk, not results.' },
      { q: 'How fast can I rank in the Charlotte Map Pack?', a: 'If you already have reviews, accurate citations, and a half-optimized profile, the 3-pack can move in 15-60 days. Starting from scratch in a competitive category, plan on 3-6 months. The Map Pack is driven almost entirely by your Google Business Profile.' },
      { q: 'Why is local SEO a monthly fee instead of one-time?', a: 'Rankings are earned and defended continuously: competitors optimize, Google updates its algorithm, and your profile needs ongoing posts, reviews, and citation upkeep. A one-time setup decays; that is why we work month-to-month.' },
    ],
  },
  {
    label: 'Local SEO basics',
    items: [
      { q: 'What is local SEO?', a: 'Local SEO is how your business shows up when nearby Charlotte customers search for what you sell, in Google Maps, the local 3-pack, and "near me" results. Unlike general SEO, it targets high-intent buyers ready to call or visit.' },
      { q: 'What is the Google Map Pack (local 3-pack)?', a: 'The Map Pack is the block of three businesses with a map at the top of local searches. It is generated entirely from Google Business Profiles and ranked by relevance, distance, and prominence.' },
      { q: 'How important is Google Business Profile to local SEO?', a: 'It is the single most important asset, because the Map Pack is built from it. A complete profile with consistent name, address, and phone, plus photos, posts, and reviews, is what gets you into the three-pack.' },
      { q: 'Does local SEO still work in a city growing this fast?', a: 'It works better. The Census Bureau counted 54,100 new Charlotte metro residents in one year, about 148 a day. New residents have no habits or referrals yet: they pick businesses straight from the Map Pack. A growing city means search demand resets in your favor every month.' },
    ],
  },
  {
    label: "What's included",
    items: [
      { q: "What's included in your Charlotte SEO services?", a: 'Google Business Profile optimization, local citations and NAP cleanup, review generation and response, on-page and technical SEO, local content, AI/GEO optimization, and monthly reporting tied to calls and leads. You get a written deliverables list. Vagueness is a red flag in any SEO company.' },
      { q: 'How do you measure success?', a: 'We lead with revenue, not vanity metrics: phone calls, direction requests, form fills, and booked leads first, then Map Pack rankings, profile views, and organic traffic as the "why."' },
      { q: 'Do I get access to my analytics and a monthly report?', a: 'Yes. You keep full ownership of and access to Google Analytics and Search Console, plus a plain-English monthly report connecting rankings to traffic to calls. No access to your own data is a major red flag with any agency.' },
      { q: 'Will my business get cited by AI tools like ChatGPT?', a: 'We optimize your content and entity data so AI answer engines (ChatGPT, Perplexity, and Google AI Overviews) can find and cite your business. AI engines reward clear, well-structured, well-sourced content, which is exactly how we build.' },
    ],
  },
  {
    label: 'Contracts & guarantees',
    items: [
      { q: 'Do you require a long-term contract?', a: "No. FactoryJet local SEO is month-to-month: cancel any time with 30 days' notice. Most Charlotte agencies lock you in for 6-12 months; we would rather earn the next month." },
      { q: 'What happens to my work if I leave?', a: 'You keep everything: your Google Business Profile, website content, citations, and reporting access stay yours. Work that disappears when you leave was rented, not built.' },
      { q: 'Can you guarantee #1 rankings in Charlotte?', a: 'No, and you should walk away from anyone who does. Google itself warns against SEOs who guarantee rankings. What we guarantee is real work, a transparent roadmap, month-to-month flexibility, and reporting tied to calls and leads.' },
      { q: 'How do I avoid SEO scams in Charlotte?', a: 'Look for transparent tactics, Google Business Profile and review expertise, realistic timelines, and full access to your own data. Run from guaranteed rankings, no reporting, and one-size-fits-all packages.' },
    ],
  },
  {
    label: 'SEO near me & services',
    items: [
      {
        q: 'What should I look for in an SEO company near me in Charlotte, NC?',
        a: "When searching 'SEO company near me Charlotte NC', three things matter most: (1) Who actually does the work? Senior engineers vs. account managers is the single biggest quality gap in Charlotte SEO. (2) Does the agency report on calls and leads, not just ranking positions? Rankings are the mechanism; booked jobs are the result. (3) Are terms month-to-month? A 6-12 month lock-in protects the agency, not you. FactoryJet meets all three: public pricing, month-to-month terms, and senior SEO experts you can verify by testing our own Lighthouse scores on factoryjet.com before you sign anything.",
      },
      {
        q: 'How do I find a good SEO company near me in Charlotte?',
        a: 'Search "SEO company near me Charlotte" and look at who actually ranks — an agency that cannot rank its own site is a warning sign. Then check six things: written deliverables, pricing shown before you sign, month-to-month terms, you own your data, reports tied to calls and leads, and no ranking guarantees. Proximity matters less than expertise; the right Charlotte SEO company does not need a storefront on Tryon Street to drive Map Pack results in Ballantyne or NoDa.',
      },
      {
        q: 'What do SEO services include for Charlotte businesses?',
        a: 'Complete Charlotte SEO services cover four layers. (1) Local SEO — Google Business Profile optimization, citation cleanup, review growth, and Map Pack targeting across Mecklenburg County and the suburbs. (2) Technical SEO — Core Web Vitals, site speed, schema markup, and crawlability. (3) On-page SEO — title tags, meta descriptions, headings, and internal linking. (4) Content — service pages and neighborhood pages that earn rankings. At FactoryJet all four are in one monthly engagement with a written deliverables list.',
      },
      {
        q: 'Do you offer local SEO services near me for Charlotte small businesses?',
        a: 'Yes. FactoryJet provides local SEO services across the entire Charlotte metro — Uptown, South End, NoDa, Plaza Midwood, University City, Ballantyne, and the broader Mecklenburg, Cabarrus, and Gaston counties, plus Rock Hill, SC. Every engagement starts with a free audit showing your current Map Pack position, GBP health, and citation accuracy across directories.',
      },
      {
        q: 'How does "near me" SEO work for Charlotte businesses?',
        a: '"Near me" searches in Charlotte are driven almost entirely by Google Business Profile signals — your categories, keywords in your description, review count and recency, and the accuracy of your name, address, and phone. GBP proximity is set when searchers do the search, so you cannot fake it, but you can maximize relevance and prominence with a fully optimized profile and consistent citations. That is the core of local SEO near me results.',
      },
    ],
  },
  {
    label: 'Fit & getting started',
    items: [
      { q: 'Does local SEO work for contractors and home services?', a: "It's one of the strongest fits there is. HVAC, roofing, plumbing, and remodeling jobs start with a \"near me\" search, and Charlotte's growth keeps demand high. Service-area businesses without a storefront can still dominate the Map Pack." },
      { q: 'How do I compete with national franchises in Charlotte?', a: 'The Map Pack is your home-field advantage. Google ranks local results by relevance, distance, and prominence, so a well-run local profile with strong reviews routinely outranks national franchises managed from a head office.' },
      { q: 'Do I need SEO if I already run Google Ads?', a: 'Yes, they work together. Ads are a faucet that stops the moment you stop paying; SEO is an asset that keeps producing. Organic local listings earn several times more clicks than paid ads, with no per-click cost once you rank.' },
      { q: 'How do I choose the best SEO company in Charlotte, NC?', a: 'Judge by behavior, not awards. The best Charlotte SEO company for you shows a written deliverables list, prices before you sign, month-to-month terms, full access to your own data, and realistic timelines. Anyone leading with guaranteed rankings or secret tactics is showing you the exit.' },
      { q: 'Do I need a Charlotte SEO expert, a local SEO consultant, or an agency?', a: 'A solo SEO consultant can audit and advise, but local SEO is execution work: profile updates, citations, reviews, content, and links every month. We work like a Charlotte local SEO consultant you can call directly, with an SEO marketing agency behind it doing the monthly work.' },
      { q: 'Do you serve Concord, Gastonia, Huntersville, and Rock Hill too?', a: 'Yes. We work across the entire Charlotte metro, including Uptown, South End, NoDa, Ballantyne, University City, Matthews, Huntersville, and Rock Hill, SC.' },
    ],
  },
];

const faqSchemaItems = FAQ_GROUPS.flatMap((g) =>
  g.items.map((item) => ({
    '@type': 'Question' as const,
    name: item.q,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.a },
  }))
);

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://factoryjet.com/#organization',
      name: 'FactoryJet',
      url: 'https://factoryjet.com',
      logo: 'https://factoryjet.com/logo.png',
      sameAs: [
        'https://www.linkedin.com/company/factoryjet',
        'https://www.crunchbase.com/organization/factoryjet',
      ],
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Local SEO Services in Charlotte, NC',
      serviceType: 'Search engine optimization',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'City', name: 'Charlotte', containedInPlace: { '@type': 'State', name: 'North Carolina' } },
      url: CANONICAL,
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
        { '@type': 'ListItem', position: 2, name: 'US SEO Services', item: 'https://factoryjet.com/us/services/seo' },
        { '@type': 'ListItem', position: 3, name: 'Charlotte', item: 'https://factoryjet.com/us/charlotte' },
        { '@type': 'ListItem', position: 4, name: 'SEO', item: CANONICAL },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'Charlotte SEO Company | Local SEO Services Near Me, NC | FactoryJet',
      datePublished: '2026-06-06',
      dateModified: '2026-06-13',
      author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://www.linkedin.com/in/bhaveshbarot/', jobTitle: 'Founder, FactoryJet' },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: faqSchemaItems,
    },
  ],
};

export default function CharlotteSeoPage() {
  return (
    <>
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="cseo">
        {/* HERO: editorial type + skyline-chart band */}
        <section className="hero">
          <div className="wrap hero-copy">
            <span className="loc"><b />Charlotte, NC</span>
            <h1>The Charlotte SEO company for the city everyone keeps <span className="it">moving&nbsp;to</span></h1>
            <p className="lead">About 148 people arrive daily and search Google for businesses like yours. We make sure they find <b>you</b> first.</p>
            <div className="cta-row">
              <ModalCTAButton label="Get your free Charlotte SEO audit" region="us" modalVariant="seo" btnVariant="primary-light" />
              <a className="btn btn-ghost" href={CALENDLY}>Talk to the founder</a>
            </div>
          </div>
          <div className="skyband" aria-hidden="true">
            <div className="sky">
              <div className="bld b1" /><div className="bld b2" /><div className="bld b3" /><div className="bld b4" /><div className="bld b5" />
              <div className="bld b6" /><div className="bld b7" /><div className="bld b8" /><div className="bld b9" /><div className="bld b10" />
            </div>
            <div className="trend">
              <svg viewBox="0 0 1180 300" preserveAspectRatio="none" aria-hidden="true">
                <path d="M 30 268 C 240 262, 360 240, 520 200 C 690 158, 800 120, 940 78 C 1010 57, 1060 45, 1100 38" />
              </svg>
            </div>
            <div className="endpin"><span className="lbl">You. Map Pack #1</span><div className="head"><i /></div></div>
          </div>
        </section>

        {/* FACTS BAR */}
        <div className="factsbar">
          <div className="wrap row">
            <div className="fact"><div className="v">Month-to-month</div><div className="k">local SEO, no lock-in</div></div>
            <div className="fact"><div className="v">Free audit</div><div className="k">no setup fee, no pressure</div></div>
            <div className="fact"><div className="v">7-day</div><div className="k">kickoff, not weeks</div></div>
            <div className="fact"><div className="v"><span className="star">★</span> 4.9</div><div className="k">across 500+ projects</div></div>
          </div>
        </div>

        {/* DEMAND TICKER: real Semrush volumes, 2026-05.
            role="region" so aria-label is permitted ARIA (prohibited on generic div);
            second copy exists only for the seamless CSS loop, hidden from SR. */}
        <section className="ticker" role="region" aria-label="Monthly Google search volumes for Charlotte SEO terms, per Semrush">
          <div className="label" aria-hidden="true">Searched in Charlotte every month</div>
          <div className="track">
            {TICKER.map((t) => (
              <span key={t.kw}><b>{t.kw}</b> {t.vol}</span>
            ))}
            {TICKER.map((t) => (
              <span key={`${t.kw}-dup`} aria-hidden="true"><b>{t.kw}</b> {t.vol}</span>
            ))}
          </div>
        </section>

        {/* BLUF */}
        <section className="blufsec">
          <div className="wrap">
            <div className="bluf">
              <span className="tag">The short answer</span>
              <p>FactoryJet is a Charlotte SEO company that helps local businesses rank in Google&apos;s Map Pack and &quot;near me&quot; results. We handle Google Business Profile, citations, reviews, technical SEO, and content, billed month-to-month with a free audit and no long-term contract. Our Charlotte SEO services cover the whole metro, from Uptown to Rock Hill, and you work directly with senior SEO experts.</p>
            </div>
          </div>
        </section>

        {/* GROWTH LEDGER */}
        <section className="ledger">
          <div className="wrap">
            <span className="eyebrow">Why Charlotte, why now</span>
            <h2>Your next customer just moved here</h2>
            <div className="grid">
              <div>
                <div className="meganum">148<em>/day</em></div>
                <p className="megacap">people are added to the Charlotte metro every day: <b>54,100 new residents in a single year</b>. New arrivals have no habits and no referrals. They pick a dentist, a plumber, and a lawyer straight from the Map Pack.</p>
                <span className="src">US Census Bureau, vintage 2025 metro estimates</span>
              </div>
              <div className="lrows">
                <div className="lrow"><div className="n">2.9M</div><div className="t">people in the Charlotte-Concord-Gastonia metro, ranked <b>#5 in the US</b> for one-year population growth. <span className="src">US Census, 2025</span></div></div>
                <div className="lrow"><div className="n">44%</div><div className="t">of clicks go to the <b>top-3 Map Pack results</b>. Below that, most buyers never see you. <span className="src">BrightLocal</span></div></div>
                <div className="lrow"><div className="n">266%</div><div className="t">more leads for businesses with <b>50+ reviews</b> vs. under 10. Reviews are a ranking system you control. <span className="src">BrightLocal</span></div></div>
              </div>
            </div>
            <p className="closer">Charlotte is the #2 banking center in America, but your competition is not Bank of America. It is the business three blocks over, fighting you for the same three Map Pack spots among Mecklenburg County&apos;s <b>43,000+ business establishments</b>.</p>
          </div>
        </section>

        {/* WHO WE HELP */}
        <section className="who">
          <div className="wrap grid">
            <div className="left">
              <h2>Built for the businesses that live on local search</h2>
              <p>A metro growing this fast runs on trades, practices, and storefronts. If your customers are in Mecklenburg County or just across the line, the local pack turns straight into calls.</p>
              <div className="districts">We run local SEO services across the whole metro: <b>Uptown, South End, NoDa, Plaza Midwood, University City, Ballantyne</b>, plus <b>Concord, Gastonia, Huntersville, Matthews, and Rock Hill</b>.</div>
            </div>
            <div>
              {VERTICAL_GROUPS.map((g) => (
                <div key={g.label}>
                  <p className="vgroup">{g.label}</p>
                  {g.items.map((v) => (
                    <div className="vrow" key={v.h}>
                      <h3>{v.h}{v.badge ? <span>{v.badge}</span> : null}</h3>
                      <p>{v.p}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT'S INCLUDED: bento */}
        <section className="inc">
          <div className="wrap">
            <h2>Your Charlotte local SEO, end to end</h2>
            <p className="lead">SEO services in Charlotte, NC, handled by senior SEO experts. One flat monthly fee. No add-on surprises.</p>
            <div className="bento">
              <div className="bcell b-gbp">
                <div>
                  <h3>Google Business Profile optimization</h3>
                  <p>The Map Pack is built from your profile. We optimize categories, services, photos, posts, and Q&amp;A, and keep your name, address, and phone consistent everywhere.</p>
                </div>
                <div className="minipack" aria-hidden="true">
                  <div className="q">seo company charlotte</div>
                  <div className="r win">Your Business <span>#1 MAP PACK</span></div>
                  <div className="r lose">A competitor</div>
                </div>
              </div>
              <div className="bcell b-cit"><h3>Citations &amp; NAP cleanup</h3><p>Accurate, consistent listings across the directories Google trusts, and cleanup of the duplicates dragging you down.</p></div>
              <div className="bcell b-rev"><h3>Reviews that move rankings</h3><p>A system to earn and respond to reviews, one of the strongest local signals you actually control.</p></div>
              <div className="bcell b-tech"><h3>On-page &amp; technical SEO</h3><p>Fast, crawlable pages, Core Web Vitals, schema, and SEO optimization built around how Charlotte customers search.</p></div>
              <div className="bcell b-cont"><h3>Local content</h3><p>Service and neighborhood pages that earn rankings without reading like doorway pages.</p></div>
              <div className="bcell b-geo">
                <h3>AI SEO / GEO</h3>
                <p>We structure your content and entity data so AI answer engines can find and cite your business.</p>
                <div className="ai"><span>ChatGPT</span><span>Perplexity</span><span>Google AI Overviews</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS: timeline */}
        <section className="proc">
          <div className="wrap">
            <h2>A 7-day kickoff, then steady monthly work</h2>
            <div className="tl">
              <div className="steps">
                {STEPS.map((s) => (
                  <div className="step" key={s.h}>
                    <div className="dot"><i /></div>
                    <span className="when">{s.when}</span>
                    <h3>{s.h}</h3>
                    <p>{s.p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON: dual panel */}
        <section className="vs">
          <div className="wrap">
            <h2>An honest comparison</h2>
            <p className="lead" style={{ maxWidth: 620 }}>Same seven questions, two very different answers. Ask any agency these before you sign.</p>
            <div className="panels">
              <div className="panel fj">
                <div className="ph">Factory<span>Jet</span></div>
                {COMPARE.map((r) => (
                  <div className="pitem" key={r.k}><span className="k">{r.k}</span><span className={r.hl ? 'v hl' : 'v'}>{r.fj}</span></div>
                ))}
              </div>
              <div className="panel alt">
                <div className="ph">A typical Charlotte agency</div>
                {COMPARE.map((r) => (
                  <div className="pitem" key={r.k}><span className="k">{r.k}</span><span className="v">{r.alt}</span></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROOF: manifesto quote */}
        <section className="proof">
          <div className="wrap">
            <span className="mark">&ldquo;</span>
            <blockquote>
              <p>I started FactoryJet to do the opposite of what most agencies do: senior people doing the actual work, a price you see before you sign, and no 12-month handcuffs. If our Charlotte SEO doesn&apos;t earn its keep, you leave the next month.</p>
            </blockquote>
            <div className="byline"><div className="avatar">BB</div><div><div className="nm">Bhavesh Barot</div><div className="ti">Founder, FactoryJet. 25+ years building for SMBs.</div></div></div>
            <p className="real">No stock screenshots, no invented case studies. Our client builds are live right now: <b>Impulse Branding Solutions, Belle Maison, Shevva Car Driver Hire, and Rukman Transport</b>. Open them and run PageSpeed yourself.</p>
          </div>
        </section>

        {/* FAQ: category bands, 2-col */}
        <section className="faq">
          <div className="wrap">
            <span className="eyebrow">Charlotte SEO FAQ</span>
            <h2>Questions, answered like a real call</h2>
            <p className="lead">Answer-first and honest: the same answers we would give you on the phone.</p>
            {FAQ_GROUPS.map((g) => (
              <div className="fcat" key={g.label}>
                <div className="fh"><h3>{g.label}</h3><span>{g.items.length} questions</span></div>
                <div className="fcols">
                  {g.items.map((it, i) => (
                    <details key={it.q} open={g.label === 'Pricing & timeline' && i === 0}>
                      <summary>{it.q}</summary>
                      <p>{it.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
            <p className="faqhelp">Can&apos;t find your answer? <a href={CALENDLY}>Talk to the founder</a></p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="final">
          <div className="wrap">
            <span className="eyebrow" style={{ color: '#F6A07E', justifyContent: 'center' }}>Get started</span>
            <h2>Ready to own Charlotte&apos;s local search?</h2>
            <p className="lead">Start with a free Charlotte SEO audit. We will show you where you stand in the Map Pack and exactly what we would fix, with zero pressure to continue.</p>
            <div className="cta-row">
              <ModalCTAButton label="Get your free Charlotte SEO audit" region="us" modalVariant="seo" btnVariant="primary-light" />
              <a className="btn btn-ghost" href={CALENDLY}>Talk to the founder</a>
            </div>
            <p className="fine">Local SEO billed month-to-month, with a free audit and no setup fee. Also in Charlotte: <Link href="/us/charlotte/web-design">web design</Link>, <Link href="/us/charlotte/ecommerce-development">e-commerce</Link>, and <Link href="/us/charlotte/ai-automation">AI automation</Link>. <Link href="/us/services/seo">US SEO services</Link>. More US cities: <Link href="/us/cleveland/seo">Cleveland SEO</Link> · <Link href="/us/nashville/seo">Nashville SEO</Link> · <Link href="/us/austin/seo">Austin SEO</Link>.</p>
          </div>
        </section>
      </div>

      <ExitIntentLeadForm
        region="us"
        source="exit_intent_charlotte_seo"
        heading="Claim your free SEO audit"
        subheading="Map Pack, local & technical SEO — just name and email."
        promo="Free Charlotte SEO audit — no obligation"
      />
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
