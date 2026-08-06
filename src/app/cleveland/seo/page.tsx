import type { Metadata } from 'next';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';

import HeroInlineForm from '@/components/HeroInlineForm';
import './cleveland-seo.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /us/cleveland/seo. Cleveland local-SEO city page. Built 2026-06-06.
   "Working Drawing" layout (third distinct city design): schematic SERP hero
   with leader-line callouts, ruler facts, title-block BLUF, zero-sum dark stats,
   technical-SEO gauge, scroll-snap industry rail, work order, evaluation
   checklist (targets "evaluating seo company cleveland" 390/KD0), schedule
   comparison, canonical FAQ sidebar. Real SiteHeader/SiteFooter/ModalCTAButton.
   Styles scoped under .clseo (next/font vars, no webfont request). No images,
   no page JS (text LCP, zero CLS) → Lighthouse 95+ target.
   Source: research/mockup-us-cleveland-seo-v1.html + city-cleveland-industry-brief.md.
   Honesty: no price shown, month-to-month, free audit, no guarantee; real clients
   only; founder byline; Census-cited stats. No fake LocalBusiness address, no
   self-serving Review schema. A11y: labeled scroll region, 4.5:1 contrast pairs.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/cleveland/seo';

export const metadata: Metadata = {
  title: 'Cleveland SEO Company | Local SEO Services | FactoryJet',
  description:
    'Trusted SEO company in Cleveland, Ohio. Senior SEO experts delivering local search engine optimization, technical SEO & GBP optimization. 500+ businesses served. Free audit, no lock-in contracts.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Cleveland SEO Company | Local SEO Services | FactoryJet',
    description:
      'Top-rated SEO company in Cleveland, Ohio. Local SEO, technical SEO & Google Business Profile optimization for Ohio businesses. 500+ clients served. Free audit, no contracts.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const TECH_ITEMS: { h: string; p: string }[] = [
  { h: 'Core Web Vitals & speed', p: 'We build and tune for Lighthouse 95+. Slow sites lose rankings and customers.' },
  { h: 'Crawlability, schema & indexing', p: 'Clean architecture, structured data, and sitemaps so Google sees every page.' },
  { h: 'Technical SEO audits', p: 'Every engagement starts with a full technical SEO audit of your site. Free, in plain English.' },
  { h: 'AI SEO / GEO', p: 'Entity data and answer-first content so ChatGPT, Perplexity, and Google AI Overviews can cite you.' },
];

const VERTICALS: { h: string; p: string; badge?: string; first?: boolean }[] = [
  { h: 'Law firms & attorneys', badge: 'high demand', first: true, p: "Lawyer SEO marketing is one of Cleveland's most-searched services. Practice-area pages and reviews that win high-value cases." },
  { h: 'Medical & dental practices', p: 'Independent practices in the shadow of the Clinic still win "near me" patients with a strong profile.' },
  { h: 'Home services & contractors', p: "Cleveland's older housing stock keeps HVAC, roofing, plumbing, and remodel demand steady." },
  { h: 'Manufacturing & B2B suppliers', p: 'Buyers search before they call. Technical SEO and clear specs put you on their shortlist.' },
  { h: 'Restaurants & local commerce', p: 'Ohio City and Tremont dining runs on discovery, reviews, and "open now" intent.' },
  { h: 'Real estate & property managers', p: 'Neighborhood visibility from Lakewood to Beachwood.' },
];

const ORDER: { no: string; h: string; p: string }[] = [
  { no: 'GBP', h: 'Google Business Profile optimization', p: 'The Map Pack is built from your profile: categories, services, photos, posts, Q&A, and consistent name, address, phone.' },
  { no: 'CIT', h: 'Citations & NAP cleanup', p: 'Consistent listings across the directories Google trusts; duplicates removed.' },
  { no: 'REV', h: 'Review growth & response', p: 'A system to earn and answer reviews, the strongest local signal you control.' },
  { no: 'TEC', h: 'Technical SEO services', p: 'Speed, Core Web Vitals, schema, crawlability. The engineering layer most agencies skip.' },
  { no: 'CON', h: 'Local content', p: 'Service and neighborhood pages that earn rankings without reading like doorway pages.' },
  { no: 'RPT', h: 'Monthly SEO reports', p: 'Plain-English reports tied to calls and leads. You keep full access to your own analytics.' },
];

const CHECKS: { b: string; p: string }[] = [
  { b: 'Written deliverables list', p: 'Exactly what gets done each month. Vagueness is a red flag.' },
  { b: 'Scope estimate before you sign', p: 'A detailed deliverables list and written scope before you commit. Ask any agency; most cannot do it.' },
  { b: 'Month-to-month terms', p: '6-12 month lock-ins protect the agency, not you.' },
  { b: 'You own your data and accounts', p: 'Analytics, Search Console, and your Google Business Profile stay yours.' },
  { b: 'Monthly reports tied to calls and leads', p: 'Not ranking screenshots. Revenue first, rankings as the "why".' },
  { b: 'No ranking guarantees', p: 'Google itself warns against SEOs who guarantee #1. Honesty is a feature.' },
];

const COMPARE: { k: string; fj: string; alt: string; hl?: boolean }[] = [
  { k: 'Contract', fj: 'Month-to-month', alt: '6-12 month lock-in', hl: true },
  { k: 'Who does the work', fj: 'Senior engineers', alt: 'Junior account managers' },
  { k: 'Kickoff', fj: '7 days', alt: 'Weeks' },
  { k: 'Reporting', fj: 'Calls & leads, monthly', alt: 'Ranking screenshots' },
  { k: 'Technical + AI SEO / GEO', fj: 'Included', alt: 'Rarely offered' },
  { k: 'Your data & accounts', fj: 'You own them', alt: 'Often locked to the agency' },
];

type FaqGroup = { id: string; label: string; items: { q: string; a: string }[] };
const FAQ_GROUPS: ReadonlyArray<FaqGroup> = [
  {
    id: 'faq-pricing',
    label: 'Pricing & timeline',
    items: [
      { q: 'How much does SEO cost in Cleveland?', a: "Local SEO cost in Cleveland depends on three things: how many locations you're targeting, how competitive your category is, and the current state of your website. A home services business in a crowded suburb needs more work than a niche B2B in a quieter market. We scope every engagement after a free audit so you know exactly what the work is before you commit, no obligation to see the numbers." },
      { q: 'How long does SEO take to work in Cleveland?', a: 'Expect early movement in 3-6 months and stable local-pack rankings in 6-12 months. If your Google Business Profile is under-optimized, the Map Pack can improve in as little as 2-8 weeks. Anyone promising page one in 30 days is selling risk, not results.' },
      { q: 'How fast can I rank in the Cleveland Map Pack?', a: "If you already have reviews, accurate citations, and a half-optimized profile, the 3-pack can move in 15-60 days. Starting from scratch in a competitive category, plan on 3-6 months. The good news: Cleveland's SEO market is softer than most big metros, so well-executed work moves faster here." },
      { q: 'Why is local SEO a monthly fee instead of one-time?', a: 'Rankings are earned and defended continuously: competitors optimize, Google updates its algorithm, and your profile needs ongoing posts, reviews, and citation upkeep. A one-time setup decays; that is why we work month-to-month.' },
    ],
  },
  {
    id: 'faq-choosing',
    label: 'Choosing a company',
    items: [
      { q: 'How do I evaluate an SEO company in Cleveland?', a: 'Use six checks: a written deliverables list, a scope estimate before you commit, month-to-month terms, you owning your data and accounts, monthly reports tied to calls and leads, and no ranking guarantees. The best SEO companies in Cleveland pass all six without flinching.' },
      { q: 'What separates the best Cleveland SEO firms from the rest?', a: "Engineering depth. Most agencies do content and citations; few can fix Core Web Vitals, schema, rendering, and site architecture. Ask to see the agency's own Lighthouse scores. If their site is slow, your site will be too." },
      { q: 'Should I hire a Cleveland SEO expert in-house instead?', a: 'A senior in-house SEO commands a six-figure salary plus tools. An agency delivers the full skill set, from technical SEO to content to reviews, for a fraction of that. Most Cleveland SMBs keep one internal point person and outsource execution.' },
      { q: 'What do your monthly SEO reports include?', a: 'Calls, direction requests, form fills, and booked leads first; then Map Pack rankings, profile views, and organic traffic as the explanation. Plain English, no jargon, and you keep full access to Google Analytics and Search Console.' },
    ],
  },
  {
    id: 'faq-basics',
    label: 'Local SEO basics',
    items: [
      { q: 'What is local SEO?', a: 'Local SEO is how your business shows up when nearby Cleveland customers search for what you sell, in Google Maps, the local 3-pack, and "near me" results. Unlike general SEO, it targets high-intent buyers ready to call or visit.' },
      { q: 'What is the Google Map Pack (local 3-pack)?', a: 'The Map Pack is the block of three businesses with a map at the top of local searches. It is generated entirely from Google Business Profiles and ranked by relevance, distance, and prominence.' },
      { q: 'What is technical SEO and do I need it?', a: "Technical SEO is the engineering layer: site speed, Core Web Vitals, crawlability, schema, and clean architecture. Google can't rank what it can't read quickly. Most rankings problems we see in Cleveland are technical problems wearing a content disguise." },
      { q: 'Does SEO still matter in a slow-growth market like Cleveland?', a: 'More than anywhere. When the customer pool grows slowly, search is zero-sum: the Map Pack decides who gets the call. You are not waiting for new customers to arrive; you are taking existing demand from competitors who ignore their profiles.' },
    ],
  },
  {
    id: 'faq-trust',
    label: 'Contracts & guarantees',
    items: [
      { q: 'Do you require a long-term contract?', a: "No. FactoryJet local SEO is month-to-month: cancel any time with 30 days' notice. Most Cleveland agencies lock you in for 6-12 months; we would rather earn the next month." },
      { q: 'What happens to my work if I leave?', a: 'You keep everything: your Google Business Profile, website content, citations, and reporting access stay yours. Work that disappears when you leave was rented, not built.' },
      { q: 'Can you guarantee #1 rankings in Cleveland?', a: 'No, and you should walk away from anyone who does. Google itself warns against SEOs who guarantee rankings. What we guarantee is real work, a transparent roadmap, month-to-month flexibility, and reporting tied to calls and leads.' },
      { q: 'How do I avoid SEO scams in Cleveland?', a: 'Look for transparent tactics, Google Business Profile and review expertise, realistic timelines, and full access to your own data. Run from guaranteed rankings, no reporting, and one-size-fits-all packages.' },
    ],
  },
  {
    id: 'faq-industry',
    label: 'Industries & near me',
    items: [
      {
        q: 'What do SEO services include?',
        a: "SEO services cover four layers. (1) Technical SEO, site speed, Core Web Vitals, crawlability, schema markup, and site architecture. (2) Local SEO. Google Business Profile optimization, citation cleanup, NAP consistency, and review management. (3) On-page SEO, keyword targeting, title tags, meta descriptions, headings, and internal linking. (4) Content, service pages, blog posts, and FAQ content that earns rankings. At FactoryJet all four are included in one monthly engagement. Most Cleveland SEO companies charge extra for technical work or skip it entirely.",
      },
      {
        q: 'How do I find a good SEO company near me in Cleveland?',
        a: 'Start with Google: search "SEO company near me" and look at who actually ranks. An SEO company that cannot rank its own website is a warning sign. Then apply the six-item checklist on this page: written deliverables, transparent, fixed-price quotes, month-to-month terms, you owning your data, reports tied to calls and leads, and no ranking guarantees. Proximity matters less than expertise, the right local SEO services partner for your Cleveland business may work with a dedicated Cleveland focus rather than a storefront on Euclid.',
      },
      {
        q: 'Do you offer HVAC SEO services near me in Cleveland?',
        a: 'Yes. HVAC SEO is one of the most competitive local categories in Cleveland, emergency heating and AC calls go almost entirely to whoever owns the Map Pack. We optimize your Google Business Profile for service and neighborhood keywords, build suburb pages covering Lakewood, Parma, Westlake, and the wider metro, and run a review pipeline. HVAC companies we work with typically see Map Pack movement within 60–90 days because the category is driven by GBP signals and reviews, not domain authority. Book a free audit to see where your listings stand.',
      },
      {
        q: 'Do you offer SEO services for plumbers in Cleveland and Northeast Ohio?',
        a: 'Yes. Plumber SEO in Northeast Ohio is extremely high-intent, someone searching "plumber near me" needs help right now, and the Map Pack wins nearly every emergency call. We optimize your Google Business Profile, build service-area pages for communities across Cuyahoga, Lake, and Lorain counties, run a review-generation system, and fix the technical issues most plumbing websites carry. Book a free audit and we will show you exactly where you rank for Cleveland plumbing terms.',
      },
      {
        q: 'Do you offer local SEO services for businesses in Lakewood, Ohio?',
        a: 'Yes. FactoryJet provides local SEO services across the entire Cleveland metro, including Lakewood, Parma, Westlake, Beachwood, and Cleveland Heights. We optimize your Google Business Profile for service-area keywords across Cuyahoga County, build suburb-specific landing pages, and run a review pipeline for your area. Lakewood businesses compete in a high-density near-me market directly adjacent to Cleveland proper, which means profile quality and review velocity matter more than in outer suburbs. Book a free audit to see exactly where your Lakewood listing stands.',
      },
      {
        q: 'What makes FactoryJet one of the top SEO companies in Cleveland?',
        a: 'Three things set the top SEO companies in Cleveland apart from the rest: senior engineers doing the actual work (not account managers), reporting tied to calls and leads (not ranking screenshots), and a technical foundation that includes Core Web Vitals, schema markup, and AI/GEO optimization, not just content and links. FactoryJet passes all three: every engagement is run by the same senior engineers who build Lighthouse 95+ sites, with a written deliverables list and month-to-month terms. You can verify our technical work by running PageSpeed on factoryjet.com yourself before you talk to us.',
      },
      {
        q: 'What local SEO services do you provide for Cleveland businesses?',
        a: 'Our local SEO services for Cleveland include: Google Business Profile setup and full optimization, citation building and NAP cleanup across 50+ directories, review growth and response management, local keyword research and on-page optimization, neighborhood and suburb landing pages, schema markup (LocalBusiness, FAQPage, BreadcrumbList), and monthly reporting tied to calls and direction requests, not vanity metrics. Everything is in one flat monthly engagement with no setup fee and no long-term contract.',
      },
    ],
  },
  {
    id: 'faq-fit',
    label: 'Fit & getting started',
    items: [
      { q: 'Does SEO work for law firms in Cleveland?', a: 'Lawyer SEO is one of the most-searched services in Cleveland, and one of the highest-value: a single case from the Map Pack can pay for years of SEO. Practice-area pages, reviews, and local signals decide who gets the call.' },
      { q: 'Do I need SEO if I already run Google Ads?', a: 'Yes, they work together. Ads are a faucet that stops the moment you stop paying; SEO is an asset that keeps producing. Organic local listings earn several times more clicks than paid ads, with no per-click cost once you rank.' },
      { q: 'Does local SEO work for manufacturers and B2B?', a: 'Yes. B2B buyers in Northeast Ohio search and shortlist before they ever call. Technical SEO, clear capability pages, and reviews put you on that shortlist; the Map Pack matters for "near me" supplier and service searches too.' },
      { q: 'Do you serve Cleveland Heights, Lakewood, Parma, and the suburbs?', a: 'Yes. We work across the entire Cleveland metro, including Downtown, University Circle, Ohio City, Tremont, Cleveland Heights, Lakewood, Parma, Westlake, and Beachwood.' },
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
      name: 'Local and Technical SEO Services in Cleveland, Ohio',
      serviceType: 'Search engine optimization',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'City', name: 'Cleveland', containedInPlace: { '@type': 'State', name: 'Ohio' } },
      url: CANONICAL,
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
        { '@type': 'ListItem', position: 2, name: 'US SEO Services', item: 'https://factoryjet.com/services/seo' },
        { '@type': 'ListItem', position: 3, name: 'Cleveland', item: 'https://factoryjet.com/cleveland' },
        { '@type': 'ListItem', position: 4, name: 'SEO', item: CANONICAL },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'Cleveland SEO Company | Local SEO Services | FactoryJet',
      datePublished: '2026-06-06',
      dateModified: '2026-06-15',
      author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/', jobTitle: 'Founder, FactoryJet' },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: faqSchemaItems,
    },
  ],
};

export default function ClevelandSeoPage() {
  return (
    <>
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="clseo">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <span className="loc"><b />Cleveland, OH</span>
              <h1>The Cleveland SEO company that works like an <span className="it">engineering&nbsp;shop</span></h1>
              <p className="lead">Senior engineers run your local and technical SEO. Honest monthly reports show <b>calls and leads</b>, not screenshots.</p>
              <HeroInlineForm region="us" source="cleveland_seo_hero" submitLabel="Get my free SEO audit" />
              <div className="cta-row">
                <a className="btn btn-ghost" href={CALENDLY}>Talk to the founder</a>
              </div>
            </div>
            <div className="draw" aria-hidden="true">
              <div className="sheet">
                <div className="serp">
                  <div className="q"><i />seo company cleveland ohio</div>
                  <div className="row3 win"><div className="nm">Your Business <span className="tag">#1 MAP PACK</span></div><div className="mt"><span className="star">★★★★★</span> 5.0 (124) · Cleveland, OH</div></div>
                  <div className="row3 dim"><div className="nm">A competitor</div><div className="mt">★ 4.0 (18)</div></div>
                  <div className="row3 dim"><div className="nm">Another competitor</div><div className="mt">★ 3.7 (7)</div></div>
                </div>
                <div className="callout c1"><span className="pt" /><span className="ln" /><span className="lbl">GBP <em>fully optimized</em></span></div>
                <div className="callout c2"><span className="pt" /><span className="ln" /><span className="lbl">reviews <em>engineered up</em></span></div>
                <div className="callout c3"><span className="pt" /><span className="ln" /><span className="lbl">technical SEO <em>100/100</em></span></div>
                <div className="dimline"><div className="bar" /><span className="dlbl">audit to kickoff: 7 days</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* RULER FACTS */}
        <div className="ruler">
          <div className="ticks" aria-hidden="true" />
          <div className="wrap row">
            <div className="fact"><div className="v">No lock-in</div><div className="k">month-to-month, cancel anytime</div></div>
            <div className="fact"><div className="v">Free audit</div><div className="k">no setup fee, no pressure</div></div>
            <div className="fact"><div className="v">100/100</div><div className="k">Lighthouse target on every build</div></div>
            <div className="fact"><div className="v"><span className="star">★</span> 4.9</div><div className="k">across 500+ projects</div></div>
          </div>
        </div>

        {/* TITLE BLOCK BLUF */}
        <section className="blufsec">
          <div className="wrap">
            <div className="tblock">
              <div className="thead">
                <div className="tcell"><b>Project</b>Cleveland local + technical SEO</div>
                <div className="tcell"><b>Drawn by</b>Bhavesh Barot, Founder</div>
                <div className="tcell"><b>Terms</b>Month-to-month · no lock-in</div>
              </div>
              <div className="tbody">
                <p>FactoryJet is a Cleveland SEO company that gets local businesses into Google&apos;s Map Pack and &quot;near me&quot; results. Our SEO services in Cleveland, Ohio cover Google Business Profile, citations, reviews, technical SEO, and content, billed month-to-month with a free audit, no setup fee, and honest monthly reports. You work directly with senior SEO experts.</p>
              </div>
            </div>
            <div className="bluf-support" style={{ maxWidth: '920px', margin: '28px 0 0' }}>
              <p className="districts" style={{ maxWidth: 'none' }}>
                In practice the job splits four ways. First, your <Link href="/services/local-seo">Google Business Profile and local listings</Link>, which is what actually decides the three-result Map Pack. Second, the technical condition of your site, which is where the free <Link href="/services/seo-audit">SEO audit</Link> starts, because a slow or broken site will not hold a ranking no matter how good the writing is. Third, pages that match what Cleveland genuinely types into Google, not what an agency assumes. Fourth, <Link href="/services/ai-seo">AI SEO and GEO</Link>: the structured data and answer-first writing that lets ChatGPT, Perplexity, and Google AI Overviews quote you instead of a competitor.
              </p>
              <p className="districts" style={{ marginTop: '16px', maxWidth: 'none' }}>
                If you run a smaller operation, our <Link href="/services/small-business-seo">small business SEO</Link> approach is the shorter version of everything below. If you would rather own the plan and run the work in-house, <Link href="/services/seo-consulting">SEO consulting</Link> covers that instead, and <Link href="/services/seo">US SEO services</Link> is the national picture this page sits inside.
              </p>
            </div>
          </div>
        </section>

        {/* TAKE SHARE */}
        <section className="share">
          <div className="wrap">
            <span className="eyebrow">Why Cleveland is different</span>
            <h2>In a steady market, you don&apos;t ride a wave. You take share.</h2>
            <p className="lead">Cleveland is not a boomtown, and that is exactly the point. When the customer pool grows slowly, local search is zero-sum: every call you win in the Map Pack is a call a competitor loses.</p>
            <div className="sgrid">
              <div className="scell"><div className="n">2.17M</div><div className="t">people in the Cleveland metro, with population growing for the <b>3rd straight year</b>. <span className="src">US Census Bureau, 2025</span></div></div>
              <div className="scell"><div className="n">$138B</div><div className="t">Greater Cleveland GDP. Combined with Akron, the <b>largest metro economy in Ohio</b>. <span className="src">US BEA</span></div></div>
              <div className="scell"><div className="n">44%</div><div className="t">of clicks go to the <b>top-3 Map Pack results</b>. Below that, most buyers never see you. <span className="src">BrightLocal</span></div></div>
              <div className="scell"><div className="n">266%</div><div className="t">more leads for businesses with <b>50+ reviews</b> vs. under 10. Reviews are share you can take this quarter. <span className="src">BrightLocal</span></div></div>
            </div>
          </div>
        </section>

        {/* TECHNICAL SEO */}
        <section className="tech">
          <div className="wrap grid">
            <div>
              <h2>A technical SEO company, not a content mill</h2>
              <p className="lead">Most Cleveland SEO agencies write blog posts and hope. We are engineers: we fix the machine first, because rankings are built on a site Google can crawl, render, and trust.</p>
              <div className="tlist">
                {TECH_ITEMS.map((t) => (
                  <div className="titem" key={t.h}><span className="tick" /><div><h3>{t.h}</h3><p>{t.p}</p></div></div>
                ))}
              </div>
            </div>
            <div className="gaugecard">
              <div className="gauge"><div className="val">100<small>Lighthouse</small></div></div>
              <p className="gcap">Our own pages hit <b>100/100 performance</b>. Ask any SEO firm in Cleveland to show you theirs.</p>
            </div>
          </div>
        </section>

        {/* WHO WE HELP */}
        <section className="who">
          <div className="wrap">
            <h2>Cleveland SEO experts for the businesses that live on local search</h2>
            <p className="lead">If your customers are in Cuyahoga County, the Map Pack turns straight into calls. Swipe through the verticals we serve:</p>
            <div className="rail" role="region" aria-label="Industries we serve in Cleveland" tabIndex={0}>
              {VERTICALS.map((v) => (
                <div className={v.first ? 'vcard first' : 'vcard'} key={v.h}>
                  <h3>{v.h}{v.badge ? <span>{v.badge}</span> : null}</h3>
                  <p>{v.p}</p>
                </div>
              ))}
            </div>
            <p className="districts">Local SEO across the whole metro: <b>Downtown, University Circle, Ohio City, Tremont, Cleveland Heights</b>, plus <b>Lakewood, Parma, Westlake, and Beachwood</b>. Contractors get category-specific work as well, and in a city with housing stock this old, <Link href="/services/roofing-seo">roofing SEO</Link> is the one we get asked for most.</p>
          </div>
        </section>

        {/* WORK ORDER */}
        <section className="order">
          <div className="wrap">
            <h2>The work order: your Cleveland SEO services, end to end</h2>
            <p className="lead">One flat monthly fee covers the whole machine. Senior SEO experts do the work; you read the report.</p>
            <div className="ogrid">
              {ORDER.map((o) => (
                <div className="oitem" key={o.no}><span className="no">{o.no}</span><div><h3>{o.h}</h3><p>{o.p}</p></div></div>
              ))}
            </div>
          </div>
        </section>

        {/* EVALUATION CHECKLIST */}
        <section className="eval">
          <div className="wrap grid">
            <div className="left">
              <h2>Evaluating SEO companies in Cleveland? Use this checklist.</h2>
              <p>Print it, and put every agency you talk to through it, including us. The best SEO companies in Cleveland pass all six. Anyone who fails two or more is selling risk.</p>
              <div className="cta-row"><ModalCTAButton label="Get your free Cleveland SEO audit" region="us" modalVariant="seo" btnVariant="primary-light" /></div>
            </div>
            <div className="checkcard">
              <p className="ch">SEO company evaluation checklist</p>
              {CHECKS.map((c) => (
                <div className="check on" key={c.b}><span className="box" /><div><b>{c.b}</b><p>{c.p}</p></div></div>
              ))}
            </div>
          </div>
        </section>

        {/* SCHEDULE COMPARISON */}
        <section className="sched">
          <div className="wrap">
            <h2>FactoryJet vs. a typical Cleveland SEO agency</h2>
            <p className="lead">Same seven questions. Ask any seo marketing company in Cleveland these before you sign.</p>
            <div className="stable">
              <div className="srow head"><div className="k">What matters</div><div className="fj">FactoryJet</div><div className="alt">Typical agency</div></div>
              {COMPARE.map((r) => (
                <div className="srow" key={r.k}>
                  <div className="k">{r.k}</div>
                  <div className="fj">{r.hl ? <span className="hl">{r.fj}</span> : r.fj}</div>
                  <div className="alt">{r.alt}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROOF */}
        <section className="proof">
          <div className="wrap grid">
            <span className="mark" aria-hidden="true">&ldquo;</span>
            <div>
              <blockquote><p>I started FactoryJet to do the opposite of what most agencies do: senior people doing the actual work, a full scope before you sign, and no 12-month handcuffs. If our Cleveland SEO doesn&apos;t earn its keep, you leave the next month.</p></blockquote>
              <div className="byline"><div className="avatar">BB</div><div><div className="nm">Bhavesh Barot</div><div className="ti">Founder, FactoryJet. 12+ years building for SMBs.</div></div></div>
              <p className="real">No stock screenshots, no invented case studies. Our client builds are live right now: <b>Impulse Branding Solutions, Belle Maison, Shevva Car Driver Hire, and Rukman Transport</b>. Open them and run PageSpeed yourself.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq">
          <div className="wrap">
            <span className="eyebrow">Cleveland SEO FAQ</span>
            <h2>Questions, answered like a real call</h2>
            <p className="lead">Answer-first and honest: the same answers we would give you on the phone.</p>
            <div className="faqgrid">
              <nav className="faqnav">
                {FAQ_GROUPS.map((g) => (
                  <a href={`#${g.id}`} key={g.id}>{g.label} <span className="ct">{g.items.length}</span></a>
                ))}
                <p className="faqnavhelp">Can&apos;t find your answer?<br /><a href={CALENDLY}>Talk to the founder →</a></p>
              </nav>
              <div>
                {FAQ_GROUPS.map((g) => (
                  <div className="faqcat" id={g.id} key={g.id}>
                    <p className="ch">{g.label}</p>
                    {g.items.map((it, i) => (
                      <details key={it.q} open={g.id === 'faq-pricing' && i === 0}>
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

        {/* FINAL CTA */}
        <section className="final">
          <div className="wrap">
            <span className="eyebrow" style={{ color: '#F6A07E', justifyContent: 'center' }}>Get started</span>
            <h2>Ready to take your share of Cleveland&apos;s local search?</h2>
            <p className="lead">Start with a free Cleveland SEO audit. We will show you where you stand in the Map Pack, what is technically broken, and exactly what we would fix, with zero pressure to continue.</p>
            <div className="cta-row">
              <ModalCTAButton label="Get your free Cleveland SEO audit" region="us" modalVariant="seo" btnVariant="primary-light" />
              <a className="btn btn-ghost" href={CALENDLY}>Talk to the founder</a>
            </div>
            <p className="fine">SEO services in Cleveland, Ohio, month-to-month, free audit, no setup fee. Also in Cleveland: <Link href="/cleveland/web-design">web design</Link>. See <Link href="/services/seo">US SEO services</Link> and our <Link href="/services/seo-audit">free SEO audit</Link>. More US cities: <Link href="/nashville/seo">Nashville SEO</Link> · <Link href="/charlotte/seo">Charlotte SEO</Link>.</p>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
