import type { Metadata } from 'next';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';

import HeroInlineForm from '@/components/HeroInlineForm';
import './nashville-seo.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /us/nashville/seo — Nashville local-SEO city page. Built 2026-06-06.
   "Top of the Bill" layout (fourth distinct city design, Music City gig-poster):
   bulb-border marquee hero, now-playing facts, ticket-stub BLUF, twin-spotlight
   double-audience stats (16.9M visitors / +136K residents), expert + CSS
   soundboard (targets the KD 4-10 expert/consultant cluster ~1,350 vol),
   gig-poster lineup billing (restaurants headline), numbered setlist + encore,
   inline VS comparison, canonical FAQ sidebar w/ Experts & consultants category.
   Real SiteHeader/SiteFooter/ModalCTAButton, all CTAs modalVariant="seo"
   (pre-selected one-step form). Styles scoped under .nseo (next/font vars).
   No images, no page JS (text LCP, zero CLS) → Lighthouse 100 target.
   Source: research/mockup-us-nashville-seo-v1.html + city-nashville-industry-brief.md.
   Honesty: no pricing shown (no-pricing rule), month-to-month, free audit, no guarantee; real clients
   only; founder byline; Census/Visit-Music-City-cited stats. No fake
   LocalBusiness address, no self-serving Review schema.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/us/nashville/seo';

export const metadata: Metadata = {
  title: 'Nashville SEO Company | Local SEO Services Near Me, TN | FactoryJet',
  description:
    'FactoryJet is a Nashville SEO company that ranks local businesses in the Google Map Pack and "near me" results. Local SEO, GBP optimization, and technical SEO. Free audit, no contracts.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Nashville SEO Company | Local SEO Services Near Me, TN | FactoryJet',
    description:
      'Nashville SEO company. Local SEO, Map Pack rankings, GBP optimization, and technical SEO for Nashville, TN businesses. Free audit, no lock-in.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const EXPERT_PTS: { h: string; p: string }[] = [
  { h: 'Direct line to the expert', p: 'Questions go to the person doing the work, including the founder. No telephone game.' },
  { h: 'SEO consulting included', p: 'Strategy, priorities, and straight answers come with the engagement, not as a paid add-on.' },
  { h: 'Senior engineers only', p: 'Technical SEO, Core Web Vitals, and schema handled by people who build sites for a living.' },
  { h: 'Honest monthly reports', p: 'Calls, leads, and bookings first. Rankings explain the why. You keep your data.' },
];

const FADERS: { cls: string; label: string }[] = [
  { cls: 'f1', label: 'GBP' },
  { cls: 'f2', label: 'Reviews' },
  { cls: 'f3', label: 'Technical' },
  { cls: 'f4', label: 'Content' },
  { cls: 'f5', label: 'Leads' },
];

const LINEUP: { tier: 'head' | 'co' | 'sup'; nm: string; role: string; why: string }[] = [
  { tier: 'head', nm: 'Restaurants, bars & hospitality', role: 'Headliner', why: '16.9 million visitors search "near me" with zero loyalty and full wallets. In Nashville hospitality, the Map Pack decides who gets the table.' },
  { tier: 'co', nm: 'Medical & dental practices', role: 'Co-headliner', why: "Healthcare is Nashville's biggest industry. Independent practices win \"near me\" patients with a strong profile and real reviews." },
  { tier: 'co', nm: 'Home services & contractors', role: 'Co-headliner', why: '136,000 new residents in four years keep HVAC, roofing, plumbing, and remodel demand booked out.' },
  { tier: 'sup', nm: 'Law firms & professional services', role: 'Support', why: 'Transplants need lawyers, CPAs, and advisors, and they have no referral network yet.' },
  { tier: 'sup', nm: 'Music industry services', role: 'Support', why: "Studios, lessons, gear, and event services: Music City's own businesses live on discovery too." },
  { tier: 'sup', nm: 'Real estate & property managers', role: 'Support', why: "One of America's hottest relocation markets searches before it signs." },
];

const SETLIST: { no: string; h: string; p: string }[] = [
  { no: '01', h: 'Google Business Profile optimization', p: 'The Map Pack is built from your profile: categories, services, photos, posts, Q&A, and consistent name, address, phone.' },
  { no: '02', h: 'Citations & NAP cleanup', p: 'Consistent listings across the directories Google trusts; duplicates removed.' },
  { no: '03', h: 'Review growth & response', p: 'A system to earn and answer reviews, the strongest local signal you control.' },
  { no: '04', h: 'On-page & technical SEO', p: 'Speed, Core Web Vitals, schema, crawlability. Built by engineers, tuned for Lighthouse 100.' },
  { no: '05', h: 'Local content', p: 'Service and neighborhood pages that earn rankings without reading like doorway pages.' },
  { no: '06', h: 'AI SEO / GEO', p: 'Entity data and answer-first content so ChatGPT, Perplexity, and Google AI Overviews can cite you.' },
];

const ENCORE: { ew: string; et: string }[] = [
  { ew: 'Day 1', et: 'Free audit' },
  { ew: 'Week 1', et: 'Foundations live' },
  { ew: 'Ongoing', et: 'Content, reviews & links' },
  { ew: 'Monthly', et: 'Report tied to calls & leads' },
];

const COMPARE: { k: string; fj: string; alt: string; hl?: boolean }[] = [
  { k: 'Pricing', fj: 'Scoped & shown upfront', alt: 'Quoted after a sales call', hl: true },
  { k: 'Contract', fj: 'Month-to-month', alt: '6-12 month lock-in' },
  { k: 'Who you talk to', fj: 'The expert doing the work', alt: 'An account manager' },
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
      { q: 'How much does SEO cost in Nashville?', a: "It depends on your competition, how many locations you run, and the current state of your Google Business Profile and citations: a single-location service business needs far less work than a multi-location brand. Rather than a one-size package, we scope it to your market and show you the number before you sign. Your audit is free, with no setup fee and no long-term contract, so book a free call and we'll give you a straight quote." },
      { q: 'How long does SEO take to work in Nashville?', a: 'Expect early movement in 3-6 months and stable local-pack rankings in 6-12 months. If your Google Business Profile is under-optimized, the Map Pack can improve in as little as 2-8 weeks. Anyone promising page one in 30 days is selling risk, not results.' },
      { q: 'How fast can I rank in the Nashville Map Pack?', a: 'If you already have reviews, accurate citations, and a half-optimized profile, the 3-pack can move in 15-60 days. Starting from scratch in a competitive category like Broadway hospitality, plan on 3-6 months. The Map Pack is driven almost entirely by your Google Business Profile.' },
      { q: 'Why is local SEO a monthly fee instead of one-time?', a: 'Rankings are earned and defended continuously: competitors optimize, Google updates its algorithm, and your profile needs ongoing posts, reviews, and citation upkeep. A one-time setup decays; that is why we work month-to-month.' },
    ],
  },
  {
    id: 'faq-services',
    label: 'SEO services & near me',
    items: [
      {
        q: 'Is there an SEO company near me in Nashville that specializes in Map Pack rankings?',
        a: "Yes — and the fact that you searched 'seo company near me Nashville' proves how the Map Pack works. FactoryJet provides local SEO services across the entire Nashville, TN metro, from Broadway and The Gulch to East Nashville, Germantown, Franklin, Brentwood, and Murfreesboro. Every engagement starts with a free audit showing your current Map Pack position, GBP health, and citation accuracy. We work directly with Nashville business owners — you talk to the senior SEO expert running your campaign, not an account manager. Month-to-month terms, no setup fee, and no long-term contract.",
      },
      {
        q: 'What do SEO services include for Nashville businesses?',
        a: 'SEO services for Nashville businesses cover four layers. (1) Local SEO — Google Business Profile optimization, citation cleanup, review growth, and Map Pack targeting for Davidson County and the suburbs. (2) Technical SEO — site speed, Core Web Vitals, crawlability, schema markup. (3) On-page SEO — title tags, meta descriptions, headings, keyword targeting, and internal linking. (4) Content — service pages, neighborhood pages, and FAQ content that earns organic rankings. At FactoryJet all four are included in one monthly engagement. Many Nashville SEO companies charge extra for technical work or skip it entirely.',
      },
      {
        q: 'How do I find a good SEO company near me in Nashville?',
        a: 'Start with Google: search "SEO company near me Nashville" and look at who actually ranks. An SEO company that cannot rank its own site is a warning sign. Then apply these six checks: written deliverables, transparent pricing, month-to-month terms, you own your data, reports tied to calls and leads, and no ranking guarantees. Physical proximity matters less than expertise — a Nashville-focused SEO company does not need a storefront on Broadway to deliver Map Pack results in Germantown or Franklin.',
      },
      {
        q: 'Do you offer local SEO services near me in Nashville, TN?',
        a: 'Yes. FactoryJet provides local SEO services across the entire Nashville metro — from Broadway and The Gulch to East Nashville, 12South, Germantown, and the suburbs including Franklin, Brentwood, Murfreesboro, Hendersonville, and Mt. Juliet. Every engagement starts with a free audit showing your current Map Pack position, GBP health, and citation accuracy.',
      },
      {
        q: 'What is the difference between local SEO and general SEO services?',
        a: 'General SEO targets keywords regardless of location. Local SEO specifically optimizes for "near me" and city-specific searches — ranking in the Google Map Pack, Google Business Profile, and local organic results for people in Nashville right now. For most Nashville small businesses, local SEO drives faster, more qualified leads because the searcher is ready to call or visit, not just browse.',
      },
    ],
  },
  {
    id: 'faq-expert',
    label: 'Experts & consultants',
    items: [
      { q: 'Do I need a Nashville SEO expert or an SEO agency?', a: 'You need both jobs done: expert judgment and consistent execution. A solo SEO consultant advises but rarely executes at full depth; an agency executes but hides the expert behind account managers. We run it differently: the Nashville SEO expert you talk to is the senior engineer doing the work.' },
      { q: 'Do you offer SEO consulting in Nashville?', a: "Yes, and it is built into every engagement rather than sold separately. You get a Nashville SEO consultant's strategy, priorities, and honest answers as part of the monthly work. If you only want a one-time audit and roadmap, start with the free audit and keep the roadmap." },
      { q: 'What makes someone an SEO expert worth hiring?', a: 'Hire an SEO expert Nashville businesses can verify: a track record of live sites you can test, technical depth (Core Web Vitals, schema, site architecture), straight answers about what SEO cannot do, and reporting tied to revenue. Certifications matter less than proof.' },
      { q: "What's the best SEO company in Nashville?", a: 'The one that behaves best, not the one that ranks #1 for this phrase. Judge by behavior: written deliverables, public pricing, month-to-month terms, your data staying yours, reports tied to calls and leads, and no ranking guarantees. Put us and anyone else through that test.' },
    ],
  },
  {
    id: 'faq-basics',
    label: 'Local SEO basics',
    items: [
      { q: 'What is local SEO?', a: 'Local SEO is how your business shows up when nearby Nashville customers search for what you sell, in Google Maps, the local 3-pack, and "near me" results. Unlike general SEO, it targets high-intent buyers ready to call or visit.' },
      { q: 'What is the Google Map Pack (local 3-pack)?', a: 'The Map Pack is the block of three businesses with a map at the top of local searches. It is generated entirely from Google Business Profiles and ranked by relevance, distance, and prominence.' },
      { q: 'How important is Google Business Profile to local SEO?', a: 'It is the single most important asset, because the Map Pack is built from it. A complete profile with consistent name, address, and phone, plus photos, posts, and reviews, is what gets you into the three-pack.' },
      { q: 'Does tourist traffic actually convert through Google?', a: "Heavily. Visitors search \"near me\" the moment they need food, transport, or services, and they choose from the Map Pack because they have no local knowledge. With 16.9 million annual visitors, Nashville's local pack carries more buying intent than almost any city its size." },
    ],
  },
  {
    id: 'faq-trust',
    label: 'Contracts & guarantees',
    items: [
      { q: 'Do you require a long-term contract?', a: "No. FactoryJet local SEO is month-to-month: cancel any time with 30 days' notice. Most Nashville agencies lock you in for 6-12 months; we would rather earn the next month." },
      { q: 'What happens to my work if I leave?', a: 'You keep everything: your Google Business Profile, website content, citations, and reporting access stay yours. Work that disappears when you leave was rented, not built.' },
      { q: 'Can you guarantee #1 rankings in Nashville?', a: 'No, and you should walk away from anyone who does. Google itself warns against SEOs who guarantee rankings. What we guarantee is real work, a transparent roadmap, month-to-month flexibility, and reporting tied to calls and leads.' },
      { q: 'How do I avoid SEO scams in Nashville?', a: 'Look for transparent tactics, Google Business Profile and review expertise, realistic timelines, and full access to your own data. Run from any Nashville SEO marketing company selling guaranteed rankings, no reporting, or one-size-fits-all packages.' },
    ],
  },
  {
    id: 'faq-fit',
    label: 'Fit & getting started',
    items: [
      { q: 'Does SEO work for restaurants and bars in Nashville?', a: 'It is one of the strongest fits in the country. Tourists pick where to eat and drink from the Map Pack, and locals check reviews before trying anywhere new. Profile quality, photos, and review velocity decide who gets the table.' },
      { q: "How do I reach Nashville's new residents before competitors do?", a: 'Be in the pack when they search. 136,000 people joined the metro in four years, and new arrivals pick dentists, plumbers, gyms, and lawyers from Google because they have no referral network yet. Every month you are not visible, a competitor becomes their habit.' },
      { q: 'Does SEO work for music industry businesses?', a: 'Yes. Studios, lessons, instrument shops, and event services all win on discovery searches, from "recording studio near me" to gear and session queries. The same local signals apply: profile, reviews, and content that answers what people actually search.' },
      { q: 'Do you serve Franklin, Murfreesboro, and the suburbs?', a: 'Yes. We work across the entire Nashville metro, including Broadway, The Gulch, Music Row, East Nashville, 12South, Germantown, Franklin, Brentwood, Murfreesboro, Hendersonville, and Mt. Juliet.' },
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
      name: 'Local SEO Services in Nashville, TN',
      serviceType: 'Search engine optimization',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'City', name: 'Nashville', containedInPlace: { '@type': 'State', name: 'Tennessee' } },
      url: CANONICAL,
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
        { '@type': 'ListItem', position: 2, name: 'US SEO Services', item: 'https://factoryjet.com/us/services/seo' },
        { '@type': 'ListItem', position: 3, name: 'Nashville', item: 'https://factoryjet.com/us/nashville' },
        { '@type': 'ListItem', position: 4, name: 'SEO', item: CANONICAL },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'Nashville SEO Company | Local SEO Services Near Me, TN | FactoryJet',
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

export default function NashvilleSeoPage() {
  return (
    <>
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="nseo">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <span className="loc"><b />Nashville, TN</span>
              <h1>The Nashville SEO company that puts your business <span className="it">top of the bill</span></h1>
              <p className="lead">Work directly with a senior <b>Nashville SEO expert</b>, not an account manager. Local SEO services that turn the Map Pack into calls.</p>
              <HeroInlineForm region="us" source="nashville_seo_hero" submitLabel="Get my free SEO audit" />
              <div className="cta-row">
                <a className="btn btn-ghost" href={CALENDLY}>Talk to the founder</a>
              </div>
            </div>
            <div className="stagewrap" aria-hidden="true">
              <div className="mchip m1"><div className="k">Map-pack clicks</div><div className="v">44% ↑</div></div>
              <div className="marquee">
                <div className="bulbs" />
                <div className="sign">
                  <div className="now">Now showing on Google</div>
                  <div className="biz">Your Business</div>
                  <div className="bill">#1 in the Map Pack</div>
                  <div className="stars">★★★★★ <small>5.0 (137)</small></div>
                  <div className="divider" />
                  <div className="meta"><span>Nashville, TN</span><span>Open now</span></div>
                </div>
              </div>
              <div className="mchip m2"><div className="k">Calls</div><div className="v">Ringing again</div></div>
            </div>
          </div>
        </section>

        {/* NOW PLAYING FACTS */}
        <div className="nowbar">
          <div className="wrap row">
            <div className="fact"><div className="v">Month-to-month</div><div className="k">local SEO, no lock-in</div></div>
            <div className="fact"><div className="v">Free audit</div><div className="k">no setup fee, no pressure</div></div>
            <div className="fact"><div className="v">7-day</div><div className="k">kickoff, not weeks</div></div>
            <div className="fact"><div className="v"><span className="star">★</span> 4.9</div><div className="k">across 500+ projects</div></div>
          </div>
        </div>

        {/* TICKET BLUF */}
        <section className="blufsec">
          <div className="wrap">
            <div className="ticket">
              <div className="main">
                <span className="tag">The short answer</span>
                <p>FactoryJet is a Nashville SEO company where you work directly with a senior SEO expert. Our SEO services in Nashville, TN cover Google Business Profile, citations, reviews, technical SEO, and content, billed month-to-month with a free audit and no long-term contract.</p>
              </div>
              <div className="stub">
                <span className="adm">Admit your business</span>
                <span className="price">Free audit</span>
                <span className="per">then month-to-month, no setup fee, no lock-in</span>
              </div>
            </div>
          </div>
        </section>

        {/* DOUBLE AUDIENCE */}
        <section className="aud">
          <div className="spot s1" aria-hidden="true" /><div className="spot s2" aria-hidden="true" />
          <div className="wrap">
            <span className="eyebrow">The Nashville difference</span>
            <h2>Two audiences are searching. Neither knows your name yet.</h2>
            <p className="lead">Tourists and transplants make Nashville unlike any other local market: millions of people with money to spend and zero local knowledge. Nobody asks a neighbor. The Map Pack is the recommendation.</p>
            <div className="twogrid">
              <div className="acard">
                <div className="who">Audience one: visitors</div>
                <div className="n">16.9M</div>
                <p className="t">visitors spent a record <b>$11.2 billion</b> in Nashville in 2024. Every restaurant, bar, tour, and service they chose started with a search.</p>
                <span className="src">Visit Music City, 2024</span>
              </div>
              <div className="acard">
                <div className="who">Audience two: new locals</div>
                <div className="n">+136K</div>
                <p className="t">new residents joined the Nashville metro from 2020 to 2024 (+6.4%). New arrivals have <b>no habits and no referrals</b>: they pick from the pack.</p>
                <span className="src">US Census Bureau</span>
              </div>
            </div>
            <div className="packline">
              <div className="pstat"><div className="n">44%</div><p className="t">of clicks go to the top-3 Map Pack results</p><span className="src">BrightLocal</span></div>
              <div className="pstat"><div className="n">266%</div><p className="t">more leads with 50+ reviews vs. under 10</p><span className="src">BrightLocal</span></div>
              <div className="pstat"><div className="n">2.1M</div><p className="t">people in the Nashville metro and climbing</p><span className="src">US Census Bureau</span></div>
            </div>
          </div>
        </section>

        {/* EXPERT + SOUNDBOARD */}
        <section className="expert">
          <div className="wrap grid">
            <div>
              <h2>Talk to a Nashville SEO expert, not an account manager</h2>
              <p className="lead">Most agencies put a salesperson between you and the work. Here, every question goes straight to a working SEO expert. Nashville businesses get the senior engineer running their campaign, on a first-name basis.</p>
              <div className="pts">
                {EXPERT_PTS.map((e) => (
                  <div className="ept" key={e.h}><span className="tick" /><div><h3>{e.h}</h3><p>{e.p}</p></div></div>
                ))}
              </div>
            </div>
            <div className="board" aria-hidden="true">
              <div className="bh">Your local SEO, mixed right</div>
              <div className="faders">
                {FADERS.map((f) => (
                  <div className={`fader ${f.cls}`} key={f.cls}><div className="trk"><span className="fill" /><span className="knob" /></div><span className="fl">{f.label}</span></div>
                ))}
              </div>
              <p className="bcap">Every channel tuned by one team, mixed for <b>one output: leads</b>.</p>
            </div>
          </div>
        </section>

        {/* LINEUP */}
        <section className="lineup">
          <div className="wrap">
            <span className="eyebrow">Who we help</span>
            <h2>Tonight&apos;s lineup: the businesses that live on local search</h2>
            <p className="lead">If your customers are in Davidson County or the suburbs, the local pack turns straight into calls and bookings.</p>
            <div className="bill">
              {LINEUP.map((a) => (
                <div className={`act ${a.tier}`} key={a.nm}>
                  <span className="nm">{a.nm}</span>
                  <span className="role">{a.role}</span>
                  <p className="why">{a.why}</p>
                </div>
              ))}
            </div>
            <p className="districts">One local SEO company in Nashville for the whole metro: <b>Broadway, The Gulch, Music Row, East Nashville, 12South, Germantown</b>, plus <b>Franklin, Brentwood, Murfreesboro, Hendersonville, and Mt. Juliet</b>.</p>
          </div>
        </section>

        {/* SETLIST */}
        <section className="setlist">
          <div className="wrap">
            <h2>The setlist: your Nashville SEO services, end to end</h2>
            <p className="lead">One flat monthly fee covers the whole show. SEO and digital marketing handled by senior experts in plain English.</p>
            <div className="slgrid">
              {SETLIST.map((s) => (
                <div className="slitem" key={s.no}><span className="no">{s.no}</span><div><h3>{s.h}</h3><p>{s.p}</p></div></div>
              ))}
            </div>
            <div className="encore">
              {ENCORE.map((e) => (
                <div className="estep" key={e.ew}><span className="ew">{e.ew}</span><div className="et">{e.et}</div></div>
              ))}
            </div>
          </div>
        </section>

        {/* VS LIST */}
        <section className="vs">
          <div className="wrap">
            <h2>FactoryJet vs. a typical Nashville SEO agency</h2>
            <p className="lead">Same seven questions. Ask any SEO firm in Nashville these before you sign.</p>
            <div className="vslist">
              <div className="vshead"><span>What matters</span><span className="fjh">FactoryJet</span><span className="alth">Typical agency</span></div>
              {COMPARE.map((r) => (
                <div className="vrow" key={r.k}>
                  <span className="k">{r.k}</span>
                  <span className="a">{r.hl ? <span className="hl">{r.fj}</span> : r.fj}</span>
                  <span className="b">{r.alt}</span>
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
              <blockquote><p>I started FactoryJet to do the opposite of what most agencies do: senior people doing the actual work, a price you see before you sign, and no 12-month handcuffs. If our Nashville SEO doesn&apos;t earn its keep, you leave the next month.</p></blockquote>
              <div className="byline"><div className="avatar">BB</div><div><div className="nm">Bhavesh Barot</div><div className="ti">Founder, FactoryJet. 25+ years building for SMBs.</div></div></div>
              <p className="real">No stock screenshots, no invented case studies. Our client builds are live right now: <b>Impulse Branding Solutions, Belle Maison, Shevva Car Driver Hire, and Rukman Transport</b>. Open them and run PageSpeed yourself.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq">
          <div className="wrap">
            <span className="eyebrow">Nashville SEO FAQ</span>
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

        {/* FINAL */}
        <section className="final">
          <div className="wrap">
            <span className="eyebrow" style={{ color: '#F6A07E', justifyContent: 'center' }}>Get started</span>
            <h2>Ready to top the bill in Nashville&apos;s local search?</h2>
            <p className="lead">Start with a free Nashville SEO audit. We will show you where you stand in the Map Pack, what is holding you back, and exactly what we would fix, with zero pressure to continue.</p>
            <div className="cta-row">
              <ModalCTAButton label="Get your free Nashville SEO audit" region="us" modalVariant="seo" btnVariant="primary-light" />
              <a className="btn btn-ghost" href={CALENDLY}>Talk to the founder</a>
            </div>
            <p className="fine">SEO services in Nashville, TN, billed month-to-month, with a free audit and no setup fee. Also in Nashville: <Link href="/us/nashville/web-design">web design</Link> and <Link href="/us/nashville/ecommerce-development">e-commerce development</Link>. See <Link href="/us/services/seo">US SEO services</Link>. More US cities: <Link href="/us/cleveland/seo">Cleveland SEO</Link> · <Link href="/us/charlotte/seo">Charlotte SEO</Link> · <Link href="/us/austin/seo">Austin SEO</Link>.</p>
          </div>
        </section>
      </div>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
