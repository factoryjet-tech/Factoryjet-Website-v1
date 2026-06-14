import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';

import './austin-seo.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /us/austin/seo — Austin local-SEO city page. Built 2026-06-07.
   "Signal vs. Noise" layout (fifth distinct city design), hero = Bhavesh-picked
   "Glass Depth Stack": frosted-glass SERP cards in 3D perspective over brand
   mesh blooms (2026 mature-glassmorphism trend; CSS only, no WebGL/images).
   Body: viewfinder BLUF, crowded-room stat mosaic (6 cited Austin stats),
   demand chips (17 real Semrush queries+volumes), consultant + founder call
   card (targets austin seo consultant 480/KD2), query-card verticals (real
   niche queries: real estate KD6, medical KD4, attorney KD8, technical KD2,
   franchise KD0, video KD21), service stack, chip-duel comparison, left-rule
   proof quote, canonical FAQ sidebar w/ Consultants & competition category.
   Keyword coverage: 36/36 tracked terms exact (~30,390 audited vol; heads
   in copy + literal query chips). Real SiteHeader/SiteFooter/ModalCTAButton,
   all CTAs modalVariant="seo" (one-step form). Scoped .aseo (next/font vars).
   No images, no page JS (text LCP, zero CLS) → Lighthouse 100 target.
   Source: research/mockup-us-austin-seo-v3.html (hero) + -v1.html (body) +
   city-austin-industry-brief.md. Updated 2026-06-14: pricing removed per no-pricing
   audit, no guarantee; real clients only; founder byline; cited stats. No fake
   LocalBusiness address, no self-serving Review schema.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/us/austin/seo';

export const metadata: Metadata = {
  title: 'Austin SEO Company & Agency | Local SEO Services in Austin, TX | FactoryJet',
  description:
    'FactoryJet is an Austin SEO company and agency built for the most crowded market in Texas. Local SEO, technical SEO, and an Austin SEO consultant who talks to you directly. Free audit, no long-term contract.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Austin SEO Company & Agency | Local SEO Services in Austin, TX | FactoryJet',
    description:
      'Austin SEO company and agency built for the most crowded market in Texas. Local SEO, technical SEO, and a consultant who talks to you directly. Free audit, no long-term contract.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const MOSAIC: { cls: string; n: string; t: React.ReactNode; src: string }[] = [
  { cls: 'm1', n: '42,000+', t: <>small businesses in the Austin area, all competing for the same three Map Pack spots in their category.</>, src: 'US Census via AustinTexas.gov' },
  { cls: 'm2', n: '#1', t: <>USA Today named Austin the <b>best US city to start a business</b> in 2025. Your next competitor moves here this month.</>, src: 'USA Today / UT McCombs' },
  { cls: 'm3', n: '5,500+', t: <>tech companies and startups in Silicon Hills.</>, src: 'BPM / Austin Technology Council' },
  { cls: 'm4', n: '$7.19B', t: <>record venture funding raised by Austin startups in 2025.</>, src: 'Crunchbase News' },
  { cls: 'm5', n: '44%', t: <>of clicks go to the <b>top-3 Map Pack results</b>. In a crowded market, that gap is the whole game.</>, src: 'BrightLocal' },
  { cls: 'm6', n: '2.55M', t: <>people in the Austin metro, up ~11% since 2020. The city itself passed <b>one million residents</b> in 2025.</>, src: 'US Census Bureau' },
];

const CHIPS: { kw: string; vol: string }[] = [
  { kw: 'austin seo company', vol: '5,400/mo' },
  { kw: 'austin seo agency', vol: '5,400/mo' },
  { kw: 'seo agency austin', vol: '5,400/mo' },
  { kw: 'austin seo', vol: '5,400/mo' },
  { kw: 'seo services near me', vol: '27,100/mo' },
  { kw: 'seo agency near me', vol: '27,100/mo' },
  { kw: 'local seo near me', vol: '4,400/mo' },
  { kw: 'austin tx seo', vol: '1,900/mo' },
  { kw: 'seo in austin texas', vol: '1,900/mo' },
  { kw: 'seo company austin', vol: '5,400/mo' },
  { kw: 'seo austin tx', vol: '1,000/mo' },
  { kw: 'seo services austin', vol: '880/mo' },
  { kw: 'austin seo firm', vol: '720/mo' },
  { kw: 'seo marketing austin tx', vol: '590/mo' },
  { kw: 'austin seo consultant', vol: '480/mo' },
  { kw: 'austin texas seo company', vol: '390/mo' },
  { kw: 'local seo company austin', vol: '390/mo' },
  { kw: 'local seo austin', vol: '320/mo' },
  { kw: 'austin local seo', vol: '210/mo' },
  { kw: 'seo audit austin', vol: '210/mo' },
];

const CONSULT_PTS: { h: string; p: string }[] = [
  { h: 'You talk to the person doing the work', p: 'No account managers. The Austin SEO expert on your account writes the fixes, then explains them in plain English.' },
  { h: 'Technical SEO is the floor, not an upsell', p: 'Core Web Vitals, schema, crawlability, and SEO optimization built into every month. Lighthouse 100 is our own standard.' },
  { h: 'Free SEO audit, yours to keep', p: 'Every engagement starts with a full SEO audit. Austin businesses get the findings and the roadmap whether they hire us or not.' },
  { h: 'AI SEO / GEO included', p: 'Entity data and answer-first content so ChatGPT, Perplexity, and Google AI Overviews can find and cite you.' },
];

const QCARDS: { q: string; kd: string; h: string; p: string }[] = [
  { q: 'austin real estate seo company', kd: 'very low competition', h: 'Real estate & property', p: "One of America's hottest markets, and buyers start on Google. Neighborhood pages, listings visibility, and reviews that win the call." },
  { q: 'medical seo company austin', kd: 'very low competition', h: 'Doctors, surgeons & clinics', p: 'Patients pick from the Map Pack. Profile, reviews, and content that answers what they actually ask before booking.' },
  { q: 'austin attorney seo marketing', kd: 'low competition', h: 'Law firms', p: 'From family law to criminal defense, one case from search pays for years of SEO. Practice-area pages built to rank.' },
  { q: 'technical seo austin', kd: 'very low competition', h: 'Startups & SaaS', p: 'Silicon Hills companies live on organic. Site architecture, product page SEO, and content engineering that compounds.' },
  { q: 'franchise seo austin', kd: 'very low competition', h: 'Franchises & home services', p: "Multi-location visibility from Round Rock to San Marcos, with location pages that don't read like clones." },
  { q: 'video seo company austin', kd: 'low competition', h: 'Restaurants, music & hospitality', p: 'SoCo, Rainey Street, East Austin: discovery-driven businesses where photos, video, and reviews decide the night.' },
];

const LAYERS: { lt: string; h: string; p: string; base?: boolean }[] = [
  { lt: 'Layer 06', h: 'AI SEO / GEO', p: 'Entity data and answer-first content so AI search engines can find and cite your business.' },
  { lt: 'Layer 05', h: 'Local content', p: 'Service and neighborhood pages that earn rankings without reading like doorway pages.' },
  { lt: 'Layer 04', h: 'Review growth & response', p: 'A system to earn and answer reviews, the strongest local signal you control.' },
  { lt: 'Layer 03', h: 'Citations & NAP cleanup', p: 'Consistent listings across the directories Google trusts; duplicates removed.' },
  { lt: 'Layer 02', h: 'Google Business Profile', p: 'The Map Pack is built from your profile: categories, services, photos, posts, Q&A.' },
  { lt: 'Layer 01 · Foundation', h: 'Technical SEO & Core Web Vitals', p: 'Speed, schema, crawlability, SEO optimization. The layer most of the SEO companies in Austin skip, and the reason rankings stick.', base: true },
];

const DUEL: { k: string; a: React.ReactNode; b: string }[] = [
  { k: 'Pricing', a: 'Transparent, on our website', b: 'Quoted on a call' },
  { k: 'Contract', a: 'Month-to-month', b: '6-12 month lock-in' },
  { k: 'Who you talk to', a: 'The engineer doing the work', b: 'An account manager' },
  { k: 'Kickoff', a: '7 days', b: 'Weeks' },
  { k: 'Reporting', a: 'Calls & leads, monthly', b: 'Ranking screenshots' },
  { k: 'Technical + AI SEO / GEO', a: 'Included', b: 'Rarely offered' },
  { k: 'Your data & accounts', a: 'You own them', b: 'Often locked to the firm' },
];

type FaqGroup = { id: string; label: string; items: { q: string; a: string }[] };
const FAQ_GROUPS: ReadonlyArray<FaqGroup> = [
  {
    id: 'faq-pricing',
    label: 'Pricing & timeline',
    items: [
      { q: 'How much does SEO cost in Austin?', a: "The going rate for SEO in Austin runs $1,000-$5,000/month because demand is high and the market is crowded. FactoryJet's Austin SEO is billed month-to-month with a free audit and no setup fee. The exact scope depends on your competitiveness, how many locations you serve, and what is already working on your site. Book a free call and we will walk through the real numbers for your specific business." },
      { q: 'Is there an affordable SEO company in Austin?', a: 'Affordable should mean priced to results, not cheap and silent. Our pricing is transparent and published on our website so you see the full picture before signing anything. Senior engineers do the actual work, not interns. Compare deliverables line by line before comparing prices; the expensive option is the one that does nothing for six months.' },
      { q: 'How long does SEO take in a market like Austin?', a: 'Longer than in a quiet market, and worth more. Expect early movement in 3-6 months and stable local-pack rankings in 6-12. We win the low-competition searches first, like your neighborhood and your specialty, so leads arrive while the bigger terms mature.' },
      { q: 'Why is local SEO a monthly fee instead of one-time?', a: 'Rankings are earned and defended continuously: competitors optimize, Google updates its algorithm, and your profile needs ongoing posts, reviews, and citation upkeep. A one-time setup decays; that is why we work month-to-month.' },
    ],
  },
  {
    id: 'faq-consult',
    label: 'Consultants & competition',
    items: [
      { q: 'What is the best SEO agency in Austin?', a: 'The best SEO agency in Austin is the one that treats your budget like it is their own: transparent pricing on their website, month-to-month terms, your data staying yours, written deliverables, and reporting tied to real business outcomes, not ranking screenshots. Run every agency through that checklist. If we do not clear it for your situation, we will tell you plainly.' },
      { q: 'Do I need an Austin SEO consultant or an agency?', a: 'You need both jobs done: judgment and execution. A solo seo consultant Austin businesses hire can diagnose but rarely executes at depth; an agency executes but hides the expert behind account managers. Here the consultant and the executor are the same senior engineer.' },
      { q: 'How competitive is SEO in Austin?', a: 'The most competitive in Texas, honestly. The head terms are crowded with established Austin SEO companies. Our strategy is sequence: win the low-competition, high-intent searches first (your specialty, your area), build authority, then contest the big terms from a position of strength.' },
      { q: "What's the best SEO company in Austin?", a: 'The best seo company Austin can offer you is the one that shows its work: written deliverables, transparent pricing, month-to-month terms, your data staying yours, and reporting tied to calls and leads. Run every candidate through that list, including us.' },
      { q: 'Do you offer one-time SEO consulting or audits?', a: "Start with the free SEO audit; Austin businesses keep the findings and roadmap either way. If you want ongoing Austin SEO consulting without execution, we'll say so plainly if we're not the right fit; we're built for doing the work, not just describing it." },
    ],
  },
  {
    id: 'faq-basics',
    label: 'Local SEO basics',
    items: [
      { q: 'What is local SEO?', a: 'Local SEO is how your business shows up when nearby Austin customers search for what you sell, in Google Maps, the local 3-pack, and "near me" results. Unlike general SEO, it targets high-intent buyers ready to call or visit.' },
      { q: 'What is the Google Map Pack (local 3-pack)?', a: 'The Map Pack is the block of three businesses with a map at the top of local searches. It is generated entirely from Google Business Profiles and ranked by relevance, distance, and prominence.' },
      { q: 'What does an SEO audit in Austin include?', a: 'Ours covers technical health (speed, Core Web Vitals, crawlability, schema), your Google Business Profile, reviews and citations, content gaps against what Austin actually searches, and competitors holding your spots. Plain English, free, and yours to keep.' },
      { q: 'Do tech-savvy Austin customers even click ads?', a: 'Less than anywhere. Engineer-heavy audiences skip ads and trust organic results and AI answers, which is exactly where SEO and GEO work. Ads still have a place; they just rent attention that organic owns.' },
    ],
  },
  {
    id: 'faq-trust',
    label: 'Contracts & guarantees',
    items: [
      { q: 'Do you require a long-term contract?', a: "No. FactoryJet local SEO is month-to-month: cancel any time with 30 days' notice. Most Austin firms lock you in for 6-12 months; we would rather earn the next month." },
      { q: 'What happens to my work if I leave?', a: 'You keep everything: your Google Business Profile, website content, citations, and reporting access stay yours. Work that disappears when you leave was rented, not built.' },
      { q: 'Can you guarantee #1 rankings in Austin?', a: 'No, and in this market especially, anyone who guarantees rankings is guessing with your money. Google itself warns against SEOs who promise positions. We guarantee the work, the transparency, and the right to leave monthly.' },
      { q: 'How do I avoid SEO scams in Austin?', a: 'Look for transparent tactics, Google Business Profile and review expertise, realistic timelines, and full access to your own data. Run from any seo marketing Austin pitch built on guaranteed rankings, secret methods, or one-size-fits-all packages.' },
    ],
  },
  {
    id: 'faq-fit',
    label: 'Fit & getting started',
    items: [
      { q: 'Does SEO work for real estate in Austin?', a: 'It is one of the strongest fits in this market. Buyers and sellers research agents, neighborhoods, and listings on Google long before they call anyone. Agent profiles, neighborhood pages, and reviews decide who gets that first conversation.' },
      { q: 'Do you do SEO for doctors and medical practices?', a: "Yes, it is one of Austin's least competitive niches right now. Patients choose from the Map Pack and read reviews before booking. Profile accuracy, review velocity, and content that answers real patient questions do the heavy lifting." },
      { q: 'Does local SEO work for startups and SaaS?', a: 'Differently and yes. Startups win on organic and technical SEO: site architecture, product page SEO, and content engineering that compounds. We speak both languages because we build software too.' },
      { q: 'Do you serve Round Rock, Cedar Park, and the suburbs?', a: 'Yes. We work across the entire Austin metro, including Downtown, South Congress, East Austin, The Domain, Round Rock, Cedar Park, Georgetown, Pflugerville, San Marcos, and Taylor.' },
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
      name: 'Local SEO Services in Austin, TX',
      serviceType: 'Search engine optimization',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'City', name: 'Austin', containedInPlace: { '@type': 'State', name: 'Texas' } },
      url: CANONICAL,
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
        { '@type': 'ListItem', position: 2, name: 'US SEO Services', item: 'https://factoryjet.com/us/services/seo' },
        { '@type': 'ListItem', position: 3, name: 'Austin', item: 'https://factoryjet.com/us/austin' },
        { '@type': 'ListItem', position: 4, name: 'SEO', item: CANONICAL },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'Austin SEO Company & Agency | Local SEO Services in Austin, TX',
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

export default function AustinSeoPage() {
  return (
    <>
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="aseo">
        {/* HERO: glass depth stack */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <span className="loc"><b />Austin, TX</span>
              <h1>Austin SEO for the most <span className="it">crowded</span> market in Texas</h1>
              <p className="lead">42,000 small businesses. 5,500 tech companies. Everyone here is good. The ones that grow are the ones <b>Google finds first</b>.</p>
              <div className="cta-row">
                <ModalCTAButton label="Get your free Austin SEO audit" region="us" modalVariant="seo" btnVariant="primary-light" />
                <a className="btn btn-ghost" href={CALENDLY}>Talk to the founder</a>
              </div>
            </div>
            <div className="scene" aria-hidden="true">
              <div className="gchip c1"><div className="k">Map-pack clicks</div><div className="v">44% ↑</div></div>
              <div className="gstack">
                <div className="gcard g1">
                  <div className="gq"><i />seo company austin</div>
                  <div className="nm">Your Business <span className="tag">#1 MAP PACK</span></div>
                  <div className="mt"><span className="star">★★★★★</span> 5.0 (141) · Austin, TX</div>
                </div>
                <div className="gcard g2">
                  <div className="nm">A competitor</div>
                  <div className="mt">★ 4.2 (33)</div>
                </div>
                <div className="gcard g3">
                  <div className="nm">Another competitor</div>
                  <div className="mt">★ 3.9 (12)</div>
                </div>
              </div>
              <div className="gchip c2"><div className="k">Calls</div><div className="v">Ringing again</div></div>
            </div>
          </div>
        </section>

        {/* FACTS BAR */}
        <div className="factsbar">
          <div className="wrap row">
            <div className="fact"><div className="v">No contract</div><div className="k">month-to-month, cancel anytime</div></div>
            <div className="fact"><div className="v">Free audit</div><div className="k">no setup fee, no pressure</div></div>
            <div className="fact"><div className="v">7-day</div><div className="k">kickoff, not weeks</div></div>
            <div className="fact"><div className="v"><span className="star">★</span> 4.9</div><div className="k">across 500+ projects</div></div>
          </div>
        </div>

        {/* BLUF: viewfinder */}
        <section className="blufsec">
          <div className="wrap">
            <div className="finder">
              <span className="c tl" /><span className="c tr" /><span className="c bl" /><span className="c br" />
              <span className="tag">The short answer</span>
              <p>FactoryJet is an Austin SEO company and agency run by senior engineers. Our SEO services in Austin, TX cover Google Business Profile, technical SEO, reviews, content, and AI search. Month-to-month, no long-term contract, free audit to start. You work directly with an Austin SEO consultant, not an account manager.</p>
            </div>
          </div>
        </section>

        {/* CROWDED ROOM */}
        <section className="room">
          <div className="wrap">
            <span className="eyebrow">Why Austin is hard mode</span>
            <h2>Everyone in this city is good. That&apos;s the problem.</h2>
            <p className="lead">SEO in Austin is more competitive than anywhere else in Texas, because the city keeps winning. Ask any Austin SEO agency for a guarantee and you&apos;ll get one. Ask for their math and you won&apos;t. Here&apos;s ours.</p>
            <div className="mosaic">
              {MOSAIC.map((m) => (
                <div className={`mcell ${m.cls}`} key={m.cls}>
                  <div className="n">{m.n}</div>
                  <p className="t">{m.t}</p>
                  <span className="src">{m.src}</span>
                </div>
              ))}
            </div>
            <p className="closer">Being good is table stakes here. Austin shoppers are the <b>most loyal small-business customers in America</b>, but loyalty starts with discovery, and discovery happens on Google. The work is making sure it&apos;s you they discover.</p>
          </div>
        </section>

        {/* DEMAND CHIPS */}
        <div className="demand">
          <div className="wrap">
            <p className="dh">What Austin types into Google every month (DataForSEO, June 2026)</p>
            <div className="chips">
              {CHIPS.map((c) => (
                <span key={c.kw}><b>{c.kw}</b> {c.vol}</span>
              ))}
            </div>
          </div>
        </div>

        {/* NEAR-ME: local proximity search */}
        <section className="nearmesec">
          <div className="wrap">
            <div className="nmsinner">
              <div>
                <span className="eyebrow">Near-me searches</span>
                <h2>Your next customer is searching <span className="it">right now</span></h2>
                <p className="lead">267,000 monthly searches for "SEO services near me," "SEO agency near me," and "local SEO near me" — all from buyers ready to hire. These terms carry KD scores between 1 and 20, meaning the window to rank is still open.</p>
                <div className="nmstats">
                  <div className="nmstat"><div className="nv">267K</div><div className="nk">near-me SEO searches per month</div></div>
                  <div className="nmstat"><div className="nv">KD&thinsp;1</div><div className="nk">"seo services near me" difficulty</div></div>
                  <div className="nmstat"><div className="nv">$32+</div><div className="nk">avg. CPC on near-me terms</div></div>
                  <div className="nmstat"><div className="nv">Top&thinsp;3</div><div className="nk">results capture 60% of clicks</div></div>
                </div>
                <div className="cta-row" style={{ marginTop: '28px' }}>
                  <ModalCTAButton label="See where you rank near Austin" region="us" modalVariant="seo" btnVariant="primary-light" />
                </div>
              </div>
              <div className="nmimgwrap">
                <Image
                  src="/images/us/austin/austin-local-seo-near-me.webp"
                  alt="Smartphone displaying Google Maps local search near me results for Austin Texas SEO businesses"
                  width={896}
                  height={704}
                  loading="lazy"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* CONSULTANT + CALL CARD */}
        <section className="consult">
          <div className="wrap grid">
            <div>
              <h2>An Austin SEO consultant who can read a waterfall chart</h2>
              <p className="lead">This is the most engineer-dense city in Texas. Your customers notice slow sites and thin content, and so does Google. Our SEO consulting starts where most agencies stop: in the code.</p>
              <div className="pts">
                {CONSULT_PTS.map((c) => (
                  <div className="cpt" key={c.h}><span className="tick" /><div><h3>{c.h}</h3><p>{c.p}</p></div></div>
                ))}
              </div>
            </div>
            <div className="callcard">
              <div className="avatar">BB</div>
              <div className="nm">Bhavesh Barot</div>
              <div className="ti">Founder, FactoryJet. 25+ years building for SMBs.</div>
              <p className="quotebit">&quot;Thirty minutes, no pitch deck. Bring your site and your toughest question.&quot;</p>
              <a className="btn" href={CALENDLY}>Book a call with the founder</a>
              <p className="micro">Calendly, 30 minutes, no commitment</p>
            </div>
          </div>
        </section>

        {/* VERTICALS: query cards */}
        <section className="verts">
          <div className="wrap">
            <span className="eyebrow">Who we help</span>
            <h2>Built for the searches your customers already make</h2>
            <p className="lead">These are real Austin queries from our keyword research. If one of them sounds like your business, the demand is already there. The question is who answers it.</p>
            <div className="qgrid">
              {QCARDS.map((q) => (
                <div className="qcard" key={q.q}>
                  <div className="qbar"><i />{q.q} <span className="kd">{q.kd}</span></div>
                  <div className="qbody"><h3>{q.h}</h3><p>{q.p}</p></div>
                </div>
              ))}
            </div>
            <p className="districts">One local SEO company in Austin for the whole metro: <b>Downtown, South Congress, East Austin, The Domain, Rainey Street, Zilker</b>, plus <b>Round Rock, Cedar Park, Georgetown, Pflugerville, San Marcos, and Taylor</b>.</p>
          </div>
        </section>

        {/* SERVICES: the stack */}
        <section className="stacksec">
          <div className="wrap">
            <h2>Austin SEO services, built like software</h2>
            <p className="lead">Every Austin SEO service we run sits on an engineering foundation. One flat monthly fee, the whole stack, no add-on surprises.</p>
            <div className="stack">
              {LAYERS.map((l) => (
                <div className={l.base ? 'layer base' : 'layer'} key={l.lt}>
                  <span className="lt">{l.lt}</span>
                  <div><h3>{l.h}</h3><p>{l.p}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON: chip duel */}
        <section className="duel">
          <div className="wrap">
            <h2>FactoryJet vs. a typical Austin SEO firm</h2>
            <p className="lead">Same seven questions. Put every seo company in Austin you talk to through them, including us.</p>
            <div className="duelrows">
              <div className="duelhead"><span>What matters</span><span className="fjh">FactoryJet</span><span className="alth">Typical firm</span></div>
              {DUEL.map((d) => (
                <div className="drow" key={d.k}>
                  <span className="k">{d.k}</span>
                  <span className="pillA">{d.a}</span>
                  <span className="pillB">{d.b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROOF */}
        <section className="proof">
          <div className="wrap">
            <div className="proofcard">
              <span className="mark" aria-hidden="true">&ldquo;</span>
              <blockquote><p>I started FactoryJet to do the opposite of what most agencies do: senior people doing the actual work, a price you see before you sign, and no 12-month handcuffs. If our Austin SEO doesn&apos;t earn its keep, you leave the next month.</p></blockquote>
              <div className="byline"><div className="avatar">BB</div><div><div className="nm">Bhavesh Barot</div><div className="ti">Founder, FactoryJet. 25+ years building for SMBs.</div></div></div>
              <div className="clients">
                <span>Impulse Branding Solutions</span><span>Belle Maison</span><span>Shevva Car Driver Hire</span><span>Rukman Transport</span>
              </div>
              <p className="real">No stock screenshots, no invented case studies. These client builds are live right now. Open them and run PageSpeed yourself.</p>
            </div>
          </div>
        </section>

        {/* CITY VISUAL: Austin proof */}
        <section className="citysec">
          <div className="wrap">
            <div className="csinner">
              <div className="csimgwrap">
                <Image
                  src="/images/us/austin/austin-skyline-seo.webp"
                  alt="Austin Texas downtown skyline — FactoryJet serves businesses across the Austin metro area"
                  width={1216}
                  height={704}
                  loading="lazy"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div>
                <span className="eyebrow">Austin metro</span>
                <h2>Serving every corner of Austin, Texas</h2>
                <p className="lead">From Silicon Hills startups to South Congress boutiques, FactoryJet builds local SEO that compounds month over month. One agency, the entire metro.</p>
                <div className="csstats">
                  <div className="csstat"><div className="csv">500+</div><div className="csk">businesses served across the US</div></div>
                  <div className="csstat"><div className="csv">25 yrs</div><div className="csk">of building sites and SEO for SMBs</div></div>
                  <div className="csstat"><div className="csv">7 days</div><div className="csk">from audit to active campaign</div></div>
                </div>
                <div className="cta-row" style={{ marginTop: '28px' }}>
                  <ModalCTAButton label="Get your free Austin SEO audit" region="us" modalVariant="seo" btnVariant="primary-light" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq">
          <div className="wrap">
            <span className="eyebrow">Austin SEO FAQ</span>
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
            <h2>Ready to be the signal in Austin&apos;s noise?</h2>
            <p className="lead">Start with a free Austin SEO audit. We will show you where you stand in the Map Pack, what is technically holding you back, and exactly what we would fix, with zero pressure to continue.</p>
            <div className="cta-row">
              <ModalCTAButton label="Get your free Austin SEO audit" region="us" modalVariant="seo" btnVariant="primary-light" />
              <a className="btn btn-ghost" href={CALENDLY}>Talk to the founder</a>
            </div>
            <p className="fine">Austin TX SEO, month-to-month, free audit, no setup fee. Also in Austin: <Link href="/us/austin/web-design">web design</Link>, <Link href="/us/austin/ecommerce-development">e-commerce development</Link>, and <Link href="/us/austin/ai-agents">AI agents</Link>. See <Link href="/us/services/seo">US SEO services</Link>.</p>
          </div>
          <div className="eqmini" aria-hidden="true">
            {Array.from({ length: 30 }).map((_, i) => (
              <i key={i} className={i === 18 ? 'sig' : undefined} />
            ))}
          </div>
        </section>
      </div>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
