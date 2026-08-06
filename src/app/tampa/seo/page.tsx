import type { Metadata } from 'next';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';

import HeroInlineForm from '@/components/HeroInlineForm';
import './tampa-seo.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /us/tampa/seo, Tampa local-SEO city page. Built 2026-06-06.
   Real SiteHeader/SiteFooter/ModalCTAButton. Styles scoped under .tseo
   (./tampa-seo.css, next/font vars, no webfont request). CSS-drawn map hero
   (text LCP, zero CLS) → Lighthouse 95+ target. Source: research/mockup-us-tampa-seo-v2.html.
   Honesty: fixed-price month-to-month, free audit, no guarantee; real clients
   only; founder byline. No fake LocalBusiness address, no self-serving Review schema.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/tampa/seo';

export const metadata: Metadata = {
  title: 'Tampa SEO Company | Local SEO Services in Tampa | FactoryJet',
  description:
    'FactoryJet is a Tampa SEO company that gets local businesses into the Google Map Pack and "near me" results. Local SEO month-to-month, fixed-price, free audit. Built by senior engineers.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Tampa SEO Company | Local SEO Services in Tampa | FactoryJet',
    description:
      'Tampa SEO company that gets you into the Google Map Pack. Local SEO month-to-month, fixed-price, free audit. Senior team, founder-led.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

type FaqGroup = { id: string; label: string; items: { q: string; a: string }[] };

const FAQ_GROUPS: ReadonlyArray<FaqGroup> = [
  {
    id: 'faq-pricing',
    label: 'Pricing & timeline',
    items: [
      { q: 'How much does local SEO cost in Tampa?', a: "FactoryJet's Tampa local SEO is fixed-price and billed month-to-month, scoped to your competition and number of locations after a free audit, so you know the cost before you start. Most US agencies charge a steep monthly premium for comparable work; we deliver the same quality for far less. There's no setup fee and no long-term contract." },
      { q: 'How long does SEO take to work in Tampa?', a: 'Expect early movement in 3–6 months and stable local-pack rankings in 6–12 months. If your Google Business Profile is under-optimized, the Map Pack can improve in as little as 2–8 weeks. Anyone promising page one in 30 days is selling risk, not results.' },
      { q: 'How fast can I rank in the Tampa Map Pack?', a: 'If you already have reviews, accurate citations, and a half-optimized profile, the 3-pack can move in 15–60 days. Starting from scratch in a competitive category, plan on 3–6 months. The Map Pack is driven almost entirely by your Google Business Profile.' },
      { q: 'Why is local SEO a monthly fee instead of one-time?', a: 'Rankings are earned and defended continuously: competitors optimize, Google updates its algorithm, and your profile needs ongoing posts, reviews, and citation upkeep. A one-time setup decays; that is why we work month-to-month.' },
    ],
  },
  {
    id: 'faq-basics',
    label: 'Local SEO basics',
    items: [
      { q: 'What is local SEO?', a: 'Local SEO is how your business shows up when nearby Tampa customers search for what you sell, in Google Maps, the local 3-pack, and "near me" results. Unlike general SEO, it targets high-intent buyers ready to call or visit.' },
      { q: 'What is the Google Map Pack (local 3-pack)?', a: 'The Map Pack is the block of three businesses with a map at the top of local searches. It is generated entirely from Google Business Profiles and ranked by relevance, distance, and prominence.' },
      { q: 'How important is Google Business Profile to local SEO?', a: 'It is the single most important asset, because the Map Pack is built from it. A complete profile with consistent name, address, and phone, plus photos, posts, and reviews, is what gets you into the three-pack.' },
      { q: "What's the difference between local SEO and regular SEO?", a: 'Regular SEO chases broad web traffic; local SEO captures nearby Tampa buyers with purchase intent and adds Map Pack signals (Google Business Profile, citations, reviews, and proximity) that national SEO ignores.' },
    ],
  },
  {
    id: 'faq-included',
    label: "What's included",
    items: [
      { q: "What's included in your Tampa SEO services?", a: 'Google Business Profile optimization, local citations and NAP cleanup, review generation and response, on-page and technical SEO, local content, AI/GEO optimization, and monthly reporting tied to calls and leads. You get a written deliverables list. Vagueness is a red flag in any SEO company.' },
      { q: 'How do you measure success?', a: 'We lead with revenue, not vanity metrics: phone calls, direction requests, form fills, and booked leads first, then Map Pack rankings, profile views, and organic traffic as the "why."' },
      { q: 'Do I get access to my analytics and a monthly report?', a: 'Yes. You keep full ownership of and access to Google Analytics and Search Console, plus a plain-English monthly report connecting rankings to traffic to calls. No access to your own data is a major red flag with any agency.' },
      { q: 'Will my business get cited by AI tools like ChatGPT?', a: 'We optimize your content and entity data so AI answer engines (ChatGPT, Perplexity, and Google AI Overviews) can find and cite your business. AI engines reward clear, well-structured, well-sourced content, which is exactly how we build.' },
    ],
  },
  {
    id: 'faq-trust',
    label: 'Contracts & guarantees',
    items: [
      { q: 'Do you require a long-term contract?', a: "No. FactoryJet local SEO is month-to-month: cancel any time with 30 days' notice. Most Tampa agencies lock you in for 6–12 months; we would rather earn the next month." },
      { q: 'What happens to my work if I leave?', a: 'You keep everything: your Google Business Profile, website content, citations, and reporting access stay yours. Work that disappears when you leave was rented, not built.' },
      { q: 'Can you guarantee #1 rankings in Tampa?', a: 'No, and you should walk away from anyone who does. Google itself warns against SEOs who guarantee rankings. What we guarantee is real work, a transparent roadmap, month-to-month flexibility, and reporting tied to calls and leads.' },
      { q: 'How do I avoid SEO scams in Tampa?', a: 'Look for transparent tactics, Google Business Profile and review expertise, realistic timelines, and full access to your own data. Run from guaranteed rankings, no reporting, and one-size-fits-all packages.' },
    ],
  },
  {
    id: 'faq-fit',
    label: 'Fit & getting started',
    items: [
      { q: 'Does local SEO work for my industry?', a: 'Yes for any business serving a local area: home services (HVAC, roofing, pools, plumbing), medical and dental, law, real estate, restaurants, and retail all rank well. Service-area businesses without a storefront still dominate the Map Pack.' },
      { q: 'Do I need SEO if I already run Google Ads?', a: 'Yes, they work together. Ads are a faucet that stops the moment you stop paying; SEO is an asset that keeps producing. Studies show organic local listings earn several times more clicks than paid ads, with no per-click cost once you rank.' },
      { q: 'Should I hire an agency or build SEO in-house?', a: 'A senior in-house SEO costs roughly $80K–$120K a year in salary alone, plus tools. An agency delivers the full skill set (GBP, technical, content, links) for a fraction of that. Most Tampa SMBs keep one internal point person and outsource execution.' },
      { q: 'Do you serve St. Petersburg, Clearwater, and Brandon too?', a: 'Yes. We work across the entire Tampa–St. Petersburg–Clearwater metro, including Westshore, Downtown, Ybor City, St. Pete, Clearwater, and Brandon.' },
    ],
  },
];

const VERTICALS: { h: string; p: string }[] = [
  { h: 'Medical & dental practices', p: 'Clinics, dentists, and specialists competing for "near me" patient searches.' },
  { h: 'Law firms & attorneys', p: 'Practice-area pages and reviews that win high-value local cases.' },
  { h: 'Accountants, advisors & insurance', p: 'Professional services that close on trust and proximity.' },
  { h: 'Home services & contractors', p: 'HVAC, roofing, pools, remodeling: the Tampa growth verticals.' },
  { h: 'Real estate & brokers', p: 'Neighborhood and listing visibility across the metro.' },
  { h: 'Restaurants & local e-commerce', p: 'Local discovery, reviews, and "open now" intent.' },
];

const INCLUDED: { h: string; p: string }[] = [
  { h: 'Google Business Profile optimization', p: 'The Map Pack is built from your profile. We optimize categories, services, photos, posts, and Q&A, and keep your name, address, and phone consistent everywhere.' },
  { h: 'Local citations & NAP cleanup', p: 'Accurate, consistent listings across the directories Google trusts, and cleanup of the duplicates dragging you down.' },
  { h: 'Reviews that move rankings', p: 'A system to earn and respond to reviews, one of the strongest local signals you actually control.' },
  { h: 'On-page & technical SEO', p: 'Fast, crawlable pages, Core Web Vitals, schema, and content built around how Tampa customers search.' },
  { h: 'Local content', p: 'Service and neighborhood pages that earn rankings without reading like thin doorway pages.' },
  { h: 'AI SEO / GEO', p: 'We structure your content and entity data so ChatGPT, Perplexity, and Google AI Overviews can find and cite your business.' },
];

const STEPS: { pill: string; h: string; p: string }[] = [
  { pill: 'Day 1', h: 'Free audit', p: 'We show where you rank in the Map Pack today and what is holding you back.' },
  { pill: 'Week 1', h: 'Foundations', p: 'Google Business Profile, citations, and technical fixes.' },
  { pill: 'Ongoing', h: 'Content & links', p: 'Local content, reviews, and authority built month over month.' },
  { pill: 'Monthly', h: 'Reporting', p: 'Tied to calls and leads, not vanity ranking screenshots.' },
];

const COMPARE: { k: string; fj: string; alt: string; hl?: boolean }[] = [
  { k: 'Pricing', fj: 'Fixed-price, month-to-month', alt: 'Premium monthly retainers', hl: true },
  { k: 'Contract', fj: 'Month-to-month', alt: '6–12 month lock-in' },
  { k: 'Who does the work', fj: 'Senior engineers', alt: 'Junior account managers' },
  { k: 'Kickoff', fj: '7 days', alt: 'Weeks' },
  { k: 'Reporting', fj: 'Calls & leads', alt: 'Ranking screenshots' },
  { k: 'AI SEO / GEO', fj: 'Included', alt: 'Rarely offered' },
  { k: 'Your data & accounts', fj: 'You own them', alt: 'Often locked to the agency' },
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
      '@type': 'WebPage',
      '@id': 'https://factoryjet.com/tampa/seo#webpage',
      url: 'https://factoryjet.com/tampa/seo',
      // Freshness signal. Keep honest: bump when content actually changes.
      dateModified: '2026-08-04',
      isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
    },
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
      name: 'Local SEO Services in Tampa, FL',
      serviceType: 'Search engine optimization',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'City', name: 'Tampa', containedInPlace: { '@type': 'State', name: 'Florida' } },
      url: CANONICAL,
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
        { '@type': 'ListItem', position: 2, name: 'US SEO Services', item: 'https://factoryjet.com/services/seo' },
        { '@type': 'ListItem', position: 3, name: 'Tampa', item: 'https://factoryjet.com/tampa' },
        { '@type': 'ListItem', position: 4, name: 'SEO', item: CANONICAL },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'Tampa SEO Company | Local SEO Services in Tampa, FL',
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

export default function TampaSeoPage() {
  return (
    <>
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="tseo">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <span className="loc rise d1"><b />Tampa, FL · Local SEO</span>
              <h1 className="rise d2">The Tampa SEO company that gets you in the <span className="it">Map&nbsp;Pack</span></h1>
              <p className="lead rise d3">We get Tampa businesses into Google&apos;s local 3-pack: the three results customers actually call. Local SEO <b>fixed-price, month-to-month</b>, built and run by senior engineers. No lock-in, no account managers, no guesswork.</p>
              <HeroInlineForm region="us" source="tampa_seo_hero" submitLabel="Get my free SEO audit" />
              <div className="cta-row rise d4">
                <a className="btn btn-ghost" href={CALENDLY}>Talk to the founder</a>
              </div>
              <div className="hstat rise d5">
                <div><div className="n"><span className="star">★</span> 4.9</div><div className="l">on Google, across 500+ projects</div></div>
                <div className="sep" />
                <div><div className="n">Month-to-month</div><div className="l">no lock-in, ever</div></div>
                <div className="sep" />
                <div><div className="n">7-day</div><div className="l">kickoff</div></div>
              </div>
            </div>
            <div className="hero-vis rise d3" aria-hidden="true">
              <div className="mapcard">
                <div className="streets" />
                <div className="park p1" /><div className="park p2" />
                <div className="road r1" /><div className="road r2" />
                <div className="rings" /><div className="pulsering" />
                <div className="pin c1"><div className="head"><i /></div></div>
                <div className="pin c2"><div className="head"><i /></div></div>
                <div className="pin you"><span className="lbl">You · Map Pack #1</span><div className="head"><i /></div></div>
                <div className="pack">
                  <div className="ph">◉ Google · local results</div>
                  <div className="q">seo company tampa</div>
                  <div className="pr win"><div className="nm">Your Business <span className="tag">#1 · MAP PACK</span></div><div className="mt"><span className="star">★★★★★</span> 5.0 (128) · Tampa, FL</div></div>
                  <div className="pr comp"><div className="nm">A competitor</div><div className="mt">★ 4.1 (22)</div></div>
                  <div className="pr comp"><div className="nm">Another competitor</div><div className="mt">★ 3.8 (9)</div></div>
                </div>
                <div className="fchip f1 float"><div className="k">Map-pack clicks</div><div className="v">44% ↑</div></div>
                <div className="fchip f2 float"><span className="dot" /><div><div className="k">Calls</div><div className="t">Ringing again</div></div></div>
              </div>
            </div>
          </div>
        </section>

        {/* BLUF */}
        <section style={{ padding: '0 0 70px' }}>
          <div className="wrap">
            <div className="bluf"><p>FactoryJet is a Tampa SEO company that helps local businesses rank in Google&apos;s Map Pack and &quot;near me&quot; results. We handle Google Business Profile optimization, local citations, reviews, technical SEO, and content, billed month-to-month at a fixed price, with a free audit and no long-term contract. Our Tampa SEO services cover every neighborhood across Tampa Bay, and you work directly with senior SEO experts instead of an account manager.</p></div>
          </div>
        </section>

        {/* STATS */}
        <section className="dark">
          <div className="wrap">
            <span className="eyebrow">Why it matters</span>
            <h2>In Tampa, the local pack is the whole game</h2>
            <p className="lead" style={{ maxWidth: 640 }}>Your competition is not a national brand. It is the business three blocks over. Here is what the numbers say about getting found in Tampa Bay.</p>
            <div className="statgrid">
              <div className="scard"><div className="n">3.42M</div><div className="l">people in the Tampa–St. Petersburg–Clearwater metro</div><div className="src">US Census, 2024</div></div>
              <div className="scard"><div className="n">#1</div><div className="l">Florida leads the US in small businesses per capita</div><div className="src">Clarify Capital</div></div>
              <div className="scard"><div className="n">44%</div><div className="l">of clicks go to the top-3 local "Map Pack" results</div><div className="src">BrightLocal</div></div>
              <div className="scard"><div className="n">266%</div><div className="l">more leads with 50+ reviews vs. under 10</div><div className="src">BrightLocal</div></div>
            </div>
            <p style={{ marginTop: 24, maxWidth: 720, color: 'var(--ct-mut)' }}>Nearly half of all Google searches have local intent: someone looking for a business near them, ready to call or book. If you are not in Tampa&apos;s local pack for the terms that matter, most of those buyers never see you.</p>
          </div>
        </section>

        {/* WHO WE HELP */}
        <section>
          <div className="wrap">
            <span className="eyebrow">Who we help in Tampa</span>
            <h2>Built for the businesses that live on local search</h2>
            <p className="lead" style={{ maxWidth: 680 }}>If your customers are in Hillsborough or Pinellas, ranking in the local pack turns straight into calls and bookings. We focus on the Tampa verticals where that matters most:</p>
            <div className="grid3">
              {VERTICALS.map((v) => (
                <div className="ucard" key={v.h}><h3>{v.h}</h3><p>{v.p}</p></div>
              ))}
            </div>
            <p className="districts">From Westshore to St. Pete, we run Tampa Bay SEO across the whole metro: <b>Westshore, Downtown Tampa, Ybor City, Water Street, St. Petersburg, Clearwater, and Brandon</b>.</p>
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section className="room-peach">
          <div className="wrap">
            <span className="eyebrow">What&apos;s included</span>
            <h2>Your Tampa local SEO, end to end</h2>
            <p className="lead" style={{ maxWidth: 680 }}>SEO services in Tampa, FL and across Tampa Bay, handled by senior SEO experts and billed in one flat monthly fee, with no add-on surprises.</p>
            <div className="grid2">
              {INCLUDED.map((c) => (
                <div className="ucard" key={c.h}><h3>{c.h}</h3><p>{c.p}</p></div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="room-lav">
          <div className="wrap">
            <span className="eyebrow">How it works</span>
            <h2>A 7-day kickoff, then steady monthly work</h2>
            <div className="grid4">
              {STEPS.map((s) => (
                <div className="ucard step" key={s.h}><span className="pill">{s.pill}</span><h3>{s.h}</h3><p>{s.p}</p></div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section>
          <div className="wrap">
            <span className="eyebrow">Honest comparison</span>
            <h2>FactoryJet vs. a typical Tampa SEO agency</h2>
            <div className="cmpwrap">
              <table className="cmp">
                <thead><tr><th>What matters</th><th className="fjh">FactoryJet</th><th>Typical Tampa agency</th></tr></thead>
                <tbody>
                  {COMPARE.map((r) => (
                    <tr key={r.k}>
                      <td className="k">{r.k}</td>
                      <td className="fj">{r.hl ? <span className="hl">{r.fj}</span> : r.fj}</td>
                      <td className="alt">{r.alt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* PROOF */}
        <section className="green">
          <div className="wrap">
            <span className="eyebrow">Proof</span>
            <h2>Real businesses, real sites you can open right now</h2>
            <p className="lead" style={{ maxWidth: 760 }}>We do not use stock screenshots or invented case studies. These are live FactoryJet builds. Open them and run PageSpeed yourself.</p>
            <div className="clients">
              <span>Impulse Branding Solutions</span><span>Belle Maison</span><span>Shevva Car Driver Hire</span><span>Rukman Transport</span>
            </div>
            <div className="quote">
              <p>&quot;I started FactoryJet to do the opposite of what most agencies do: senior people doing the actual work, a price you see before you sign, and no 12-month handcuffs. If our Tampa SEO doesn&apos;t earn its keep, you leave the next month.&quot;</p>
              <div className="byline"><div className="avatar">BB</div><div><div className="nm">Bhavesh Barot</div><div className="ti">Founder, FactoryJet · 12+ years building for SMBs</div></div></div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="room-peach">
          <div className="wrap">
            <span className="eyebrow">Tampa SEO FAQ</span>
            <h2>Questions, answered like a real call</h2>
            <p className="lead" style={{ maxWidth: 640 }}>Answer-first and honest: the same answers we would give you on the phone. <strong>20 questions.</strong></p>
            <div className="faqgrid">
              <nav className="faqnav">
                {FAQ_GROUPS.map((g) => (
                  <a href={`#${g.id}`} key={g.id}>{g.label} <span className="ct">{g.items.length}</span></a>
                ))}
                <p className="faqhelp">Can&apos;t find your answer?<br /><a href={CALENDLY} style={{ fontWeight: 700, color: 'var(--orange-d)' }}>Talk to the founder →</a></p>
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
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Get started</span>
            <h2>Ready to own Tampa&apos;s local search?</h2>
            <p className="lead">Start with a free Tampa SEO audit. We will show you where you stand in the Map Pack, what is holding you back, and exactly what we would fix, with zero pressure to continue.</p>
            <div className="cta-row">
              <ModalCTAButton label="Get your free Tampa SEO audit" region="us" modalVariant="seo" btnVariant="primary-light" />
              <a className="btn btn-ghost" href={CALENDLY}>Talk to the founder</a>
            </div>
            <p className="fine">Local SEO · fixed-price · month-to-month · free audit · no setup fee · <Link href="/services/seo">US SEO services</Link></p>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
