/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import HeroInlineForm from '@/components/HeroInlineForm';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import './huntington-beach-seo.css';

// ─ Constants ────────────────────────────────────────────────────────────────
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/huntington-beach/seo';

// ─ Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Huntington Beach CA SEO Company | Local SEO Services | FactoryJet',
  description:
    'FactoryJet is a Huntington Beach CA SEO company that gets Orange County businesses into Google\'s local 3-pack. Surf City local SEO, Google Business Profile, and AI-search optimization. Month-to-month, senior engineers, free audit.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Huntington Beach CA SEO Company | FactoryJet',
    description:
      'Orange County SEO for Huntington Beach businesses. Dominate local search for "near me" queries from tourists, residents, and the high-income OC demographic that shops and spends locally.',
    url: CANONICAL,
    type: 'website',
  },
};

// ─ FAQ data ──────────────────────────────────────────────────────────────────
const FAQ_GROUPS = [
  {
    id: 'cost',
    label: 'Cost & timeline',
    count: 4,
    items: [
      {
        q: 'How much does SEO cost for a Huntington Beach small business?',
        a: 'Scope drives cost. A single-location surf retail shop competing for "surf shop huntington beach" faces different competitive pressure than a real estate firm targeting Orange County relocation searches. We scope every engagement to your specific category, competitive environment, and starting point, then give you a flat monthly fee with no hourly add-ons. Book a free 30-minute audit and we will scope it in detail at no charge.',
      },
      {
        q: 'How long until I see results from local SEO in Huntington Beach?',
        a: 'Google Business Profile changes typically produce movement in four to eight weeks. Organic keyword rankings in a competitive OC market usually shift in three to five months. AI citation placements in ChatGPT and Google AI Overviews can appear faster when your content directly answers specific questions. We track every signal weekly and show you what is moving.',
      },
      {
        q: 'Do I need a long-term contract?',
        a: 'No. Every FactoryJet engagement is month-to-month. You stay because results keep you here. You can pause or cancel with 30 days notice at any point. No lock-in, no penalty clauses.',
      },
      {
        q: 'Is there a setup fee or any upfront costs?',
        a: 'No setup fee. The full technical and competitive audit we do at kickoff is included. Your monthly fee covers strategy, content, link building, GBP management, reporting, and a monthly call.',
      },
    ],
  },
  {
    id: 'market',
    label: 'Huntington Beach market',
    count: 4,
    items: [
      {
        q: 'Why does local SEO matter so much for Huntington Beach businesses?',
        a: 'Huntington Beach sits inside Orange County, one of the highest-income metro areas in the US with a median household income above $90,000. Residents and visitors search on mobile constantly, and the local 3-pack is the first result that captures that intent. For a destination city that attracts 11+ million visitors annually, the gap between showing up in the map pack and not showing up is the difference between capturing tourists and watching them walk into the competitor that does rank.',
      },
      {
        q: 'What neighborhoods and areas in Huntington Beach matter for local SEO targeting?',
        a: 'Primary search density zones include Downtown HB (Main Street corridor), the Pier area, Bolsa Chica, Huntington Harbour, Southeast HB, and commercial areas along Beach Boulevard and Magnolia. Surrounding OC cities that generate cross-boundary searches include Fountain Valley, Westminster, Costa Mesa, Newport Beach, and Seal Beach. We map keyword volume by geographic origin so your campaign targets where your customers actually search from.',
      },
      {
        q: 'How competitive is the Huntington Beach SEO market?',
        a: 'Consumer categories like restaurants, retail, and beauty services face consistent competition from well-funded Orange County businesses. Niche categories in marine, surf industry, and specialty outdoor retail are significantly less contested. B2B categories serving the Orange County business community are often underoptimized. We identify the exact competitive gap in your specific category before recommending an approach.',
      },
      {
        q: 'Does seasonal tourism in Huntington Beach affect SEO strategy?',
        a: 'Yes. Search volume in tourism-adjacent categories spikes June through September around the US Open of Surfing and summer beach season. We build content and GBP campaigns timed to those surges so your business ranks before the traffic arrives, not after. For year-round service businesses, we build authority in the off-season so the competitive position is established when summer demand returns.',
      },
    ],
  },
  {
    id: 'included',
    label: 'What is included',
    count: 4,
    items: [
      {
        q: 'What does FactoryJet do each month for a Huntington Beach SEO client?',
        a: 'Monthly work covers: technical SEO health (Core Web Vitals, schema, crawl issues), one to two long-form content pieces targeting your highest-value HB queries, Google Business Profile management (photos, posts, Q&A, review strategy), local citation audits and cleanup, internal linking improvements, competitor monitoring, and a monthly performance call with a written summary showing rankings, tracked calls, and traffic source breakdown.',
      },
      {
        q: 'Do you manage Google Business Profile for Huntington Beach businesses?',
        a: 'Yes. GBP is one of the fastest levers in local search. We optimize every field, add high-quality photos with descriptive alt text, write keyword-rich service descriptions, publish weekly posts tied to local events and seasonal demand, and monitor Q&A to keep your profile active. For multi-location OC businesses, each location is managed with location-specific content.',
      },
      {
        q: 'What local link building looks like in the Huntington Beach and Orange County market?',
        a: 'We pursue editorial placements in the Huntington Beach Independent, Surf City Magazine, OC Register coverage of HB businesses, Chamber of Commerce mentions, and industry-specific directories in surf, marine, tourism, and OC real estate. We also build relationships with complementary local businesses for contextual referral links. No paid links, no link farms.',
      },
      {
        q: 'Do you optimize content for Google AI Overviews and AI search?',
        a: 'Yes. Every content piece is structured to appear in Google AI Overviews, Perplexity, and ChatGPT responses when users ask about Huntington Beach services. That means answer-first paragraphs, FAQ schema, entity markup, and verified local statistics. Businesses that invest in this structure now are building citation equity before competitors understand it is a real channel.',
      },
    ],
  },
  {
    id: 'trust',
    label: 'Trust & process',
    count: 4,
    items: [
      {
        q: 'Who actually executes the SEO work at FactoryJet?',
        a: 'Senior engineers and content strategists with 25+ years of combined experience. No junior account managers, no outsourced vendors. Bhavesh Barot, the founder, is personally involved in strategy for every account. You communicate directly with the people doing the work.',
      },
      {
        q: 'What happens to my accounts and data if I ever leave?',
        a: 'Everything is yours. Google Search Console, GBP, GA4, and all content we produce belong to you. We add ourselves as contributors, not owners, and remove our access cleanly at the end of any engagement. There is no data lock-in.',
      },
      {
        q: 'How do you report results and what metrics actually matter for a Huntington Beach business?',
        a: 'We track calls and form fills from organic, not just ranking positions. Monthly reports include: tracked phone calls from organic search, GBP call volume, organic form submissions, ranking movement for primary and secondary HB keywords, Core Web Vitals status, and the specific tasks completed. We also show competitor activity so you have market context for every movement.',
      },
      {
        q: 'Do you have experience working with Orange County businesses specifically?',
        a: 'We have served 500+ businesses across competitive US coastal markets. OC and Southern California share the characteristics that define high-competition local SEO: affluent demographics with high search volume, seasonal demand spikes, and a competitive field where technical quality and content depth are the differentiators. We apply that pattern recognition to every Huntington Beach engagement.',
      },
    ],
  },
  {
    id: 'start',
    label: 'Getting started',
    count: 4,
    items: [
      {
        q: 'What does the free audit call actually cover?',
        a: 'Thirty minutes covering your Google Business Profile, website technical health, current rankings for your primary HB queries, and what your top three local competitors are doing that you are not. You leave with a concrete priority list regardless of whether we work together.',
      },
      {
        q: 'How fast can you start on a Huntington Beach SEO campaign?',
        a: 'We can begin technical work within seven days of signing. GBP and content campaigns start in week two once we have verified access and completed competitor mapping. Full campaign rhythm is established by week four.',
      },
      {
        q: 'Do I need a new website to start?',
        a: 'No. We work with your existing site and improve it. If your website has structural issues that cannot be worked around, we will tell you plainly. FactoryJet also builds high-performance websites in seven days if you need a new one, so we can run both tracks without adding a second vendor.',
      },
      {
        q: 'What if I tried SEO before and it did not work?',
        a: 'That is a common starting point. Before the free call, think about what metrics were tracked (rankings only vs. calls and leads), what content was produced (generic vs. specifically targeting your Huntington Beach queries), and what technical work was done. In the call we will show you exactly what was missing and what a different approach looks like.',
      },
    ],
  },
];

// ─ Listicle ──────────────────────────────────────────────────────────────────
const LISTICLE: { n: string; h: string; p: string }[] = [
  {
    n: '01',
    h: 'Tourists visit Huntington Beach and find your competitors on Google Maps',
    p: 'Over 11 million people visit Surf City every year. A significant percentage search "near me" from the pier, the boardwalk, and Main Street. If you are not in the local 3-pack for your category, that foot traffic converts for someone else.',
  },
  {
    n: '02',
    h: 'Your Google Business Profile is thin, outdated, or never fully claimed',
    p: 'A GBP with no posts, minimal photos, and an incomplete service description ranks lower in maps by default. This is the fastest and most direct fix in local SEO, and most HB businesses have not done the full optimization.',
  },
  {
    n: '03',
    h: 'High-income OC residents search locally and you are invisible to them',
    p: 'Huntington Beach has an affluent residential base that shops and uses services locally. These buyers search before they decide. If you do not appear in the organic results for your category, you are not in their consideration set.',
  },
  {
    n: '04',
    h: 'You rank for your business name but nothing a stranger would search',
    p: 'Branded search only reaches people who already know you. Local SEO captures people who are looking for what you do and have never heard of you. That is the top of the funnel that actually grows a business.',
  },
  {
    n: '05',
    h: 'Your website loads slowly on a mobile phone',
    p: 'People searching from the beach, from Main Street, and from their car are on mobile. A slow site creates poor Core Web Vitals scores, hurts your search ranking, and kills conversions before they start.',
  },
  {
    n: '06',
    h: 'You are spending on paid ads but organic SEO is not compounding',
    p: 'Every paid click costs money. Every organic ranking earns you traffic with no incremental cost. Businesses that build strong local SEO now will have a lower customer acquisition cost in year two and three than any competitor relying purely on paid.',
  },
  {
    n: '07',
    h: 'Google\'s AI Overviews are recommending competitors, not you',
    p: 'When someone asks "who is the best [service] in Huntington Beach" in ChatGPT or Google AI, the answer comes from structured, authoritative content. If your website does not have that structure, you do not get cited regardless of how long you have been in business.',
  },
];

// ─ Comparison ────────────────────────────────────────────────────────────────
const COMPARE: { k: string; fj: string; alt: string; hl?: boolean }[] = [
  { k: 'Pricing model', fj: 'Flat monthly fee, scoped upfront', alt: 'Hourly or retainer with add-ons', hl: true },
  { k: 'Contract', fj: 'Month-to-month', alt: '6 to 12 month lock-in' },
  { k: 'Who does the work', fj: 'Senior engineers', alt: 'Junior account managers' },
  { k: 'Kickoff time', fj: '7 days', alt: '3 to 6 weeks onboarding' },
  { k: 'Reporting', fj: 'Calls & leads tracked', alt: 'Ranking screenshots' },
  { k: 'AI SEO / GEO', fj: 'Included', alt: 'Rarely offered' },
  { k: 'Your data & accounts', fj: 'You own everything', alt: 'Often locked to agency' },
];

// ─ JSON-LD ───────────────────────────────────────────────────────────────────
const faqItems = FAQ_GROUPS.flatMap((g) =>
  g.items.map((it) => ({
    '@type': 'Question',
    name: it.q,
    acceptedAnswer: { '@type': 'Answer', text: it.a },
  }))
);

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://factoryjet.com/#org',
      name: 'FactoryJet',
      url: 'https://factoryjet.com',
      logo: 'https://factoryjet.com/images/factoryjet-logo.png',
      contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: 'bhavesh@factoryjet.com' },
      sameAs: [
        'https://www.linkedin.com/company/factoryjet',
        'https://www.crunchbase.com/organization/factoryjet',
      ],
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Huntington Beach CA Local SEO Services',
      provider: { '@id': 'https://factoryjet.com/#org' },
      areaServed: {
        '@type': 'City',
        name: 'Huntington Beach',
        containedInPlace: { '@type': 'State', name: 'California' },
      },
      description:
        'Local SEO for Huntington Beach CA businesses: Google Business Profile optimization, local 3-pack ranking, AI-search citation, and technical SEO for Orange County.',
    },
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#page`,
      url: CANONICAL,
      name: 'Huntington Beach CA SEO Company | FactoryJet',
      isPartOf: { '@id': 'https://factoryjet.com/#site' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
          { '@type': 'ListItem', position: 2, name: 'US Services', item: 'https://factoryjet.com' },
          { '@type': 'ListItem', position: 3, name: 'Huntington Beach', item: 'https://factoryjet.com/huntington-beach' },
          { '@type': 'ListItem', position: 4, name: 'SEO', item: CANONICAL },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: faqItems,
    },
  ],
};

// Surf report forecast rows
const FORECAST = [
  { day: 'Today', label: 'Your visibility', pct: 22, badge: 'flat' as const },
  { day: 'Week 4', label: 'After GBP opt.', pct: 55, badge: 'fair' as const },
  { day: 'Month 3', label: 'Organic ranking', pct: 78, badge: 'prime' as const },
  { day: 'Month 6', label: 'AI citations', pct: 93, badge: 'prime' as const },
];

// ─ Component ─────────────────────────────────────────────────────────────────
export default function HuntingtonBeachSEO() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="hbseo">
        <SiteHeader />

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="hero">
          <div className="wrap hero-grid">
            {/* Left: copy */}
            <div>
              <div className="loc rise"><b />&nbsp;Huntington Beach, CA</div>
              <h1 className="rise d1">
                Huntington Beach <span className="it">SEO company</span><br />
                that puts Surf City businesses<br />on the local map.
              </h1>
              <p className="lead rise d2">
                FactoryJet gets Huntington Beach and Orange County businesses into Google's
                local 3-pack and AI Overviews. Month-to-month, senior engineers, free audit.
                Serving Surf City and the broader OC market.
              </p>
              <div className="hstat rise d3">
                <div className="n">
                  <span className="star">★</span>&nbsp;5.0
                  <span className="l">/ 500+ clients</span>
                </div>
                <div className="sep" />
                <div className="n">7 days<span className="l">&nbsp;to start</span></div>
                <div className="sep" />
                <div className="n">0<span className="l">&nbsp;setup fee</span></div>
              </div>
              <HeroInlineForm region="us" source="huntington_beach_seo_hero" submitLabel="Get my free SEO audit" />
              <div className="cta-row rise d4">
                <a className="btn btn-ghost" href={CALENDLY} target="_blank" rel="noopener noreferrer">
                  Talk to the founder
                </a>
              </div>
            </div>

            {/* Right: surf report visual */}
            <div className="hero-vis float">
              {/* Floating chips */}
              <div className="schip ch1">
                <div className="k">Monthly searches</div>
                <div className="v">1,180 / mo</div>
              </div>
              <div className="schip ch2">
                <div className="cdot" />
                <div className="ct2">OC affluent market</div>
              </div>

              <div className="surfcard">
                {/* Header */}
                <div className="sc-head">
                  <div className="sc-title">HB Search Visibility Forecast</div>
                  <div className="sc-live">
                    <b />
                    <span>LIVE</span>
                  </div>
                </div>

                {/* Ocean area */}
                <div className="sc-ocean">
                  <div className="swellmark">
                    <div className="sw-val">+341%</div>
                    <div className="sw-lbl">avg. visibility gain</div>
                  </div>
                </div>

                {/* Forecast rows */}
                <div className="sc-forecast">
                  {FORECAST.map(({ day, label, pct, badge }) => (
                    <div className="sf-row" key={day}>
                      <div className="sf-day">{day}</div>
                      <div className="sf-label">{label}</div>
                      <div className="sf-bar-wrap">
                        <div className="sf-bar" style={{ width: `${pct}%` }} />
                      </div>
                      <div className={`sf-badge ${badge}`}>{badge === 'prime' ? 'PRIME' : badge === 'fair' ? 'GOOD' : 'NOW'}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BLUF ─────────────────────────────────────────────────────── */}
        <section style={{ paddingTop: 0, paddingBottom: '60px' }}>
          <div className="wrap">
            <div className="bluf rise">
              <p>
                <strong>The short version:</strong> Huntington Beach gets 11+ million visitors a year on top of its
                200,000 permanent residents, all inside the highest-income county in Southern California. Local
                3-pack positions for most service categories are held by businesses that did basic optimization
                three years ago and have not been challenged since. A focused campaign can displace them
                in months. That window is open right now.
              </p>
            </div>
          </div>
        </section>

        {/* ── DARK STATS ───────────────────────────────────────────────── */}
        <section className="dark">
          <div className="wrap">
            <div className="eyebrow">Orange County market data</div>
            <h2>The numbers behind the Surf City opportunity.</h2>
            <p className="lead">Real data, verified sources. This is your competitive market.</p>
            <div style={{ margin: '40px 0', borderRadius: '20px', overflow: 'hidden' }}>
              <Image
                src="/images/us/huntington-beach/seo/huntington-beach-seo-hero.webp"
                alt="Huntington Beach CA coastline and downtown — Surf City's blend of beach lifestyle and Orange County affluence"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="statgrid">
              <div className="scard">
                <div className="n">200K</div>
                <div className="l">Huntington Beach population — 4th largest city in Orange County</div>
                <div className="src">US Census Bureau, 2024</div>
              </div>
              <div className="scard">
                <div className="n">11M+</div>
                <div className="l">Annual visitors to Huntington Beach, driven by the pier, US Open of Surfing, and Pacific Coast Highway tourism</div>
                <div className="src">Visit Huntington Beach / CA Tourism, 2023</div>
              </div>
              <div className="scard">
                <div className="n">$91K</div>
                <div className="l">Median household income in Orange County — one of the highest in the US, producing high-value local search intent</div>
                <div className="src">US Census Bureau ACS, 2023</div>
              </div>
              <div className="scard">
                <div className="n">76%</div>
                <div className="l">Share of consumers who visit a local business within 24 hours of a "near me" mobile search</div>
                <div className="src">Google / BrightLocal Local Search Study</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHO WE HELP ──────────────────────────────────────────────── */}
        <section>
          <div className="wrap">
            <div className="eyebrow">Who we work with</div>
            <h2>Built for the full range of Huntington Beach businesses.</h2>
            <p className="lead">
              From surf retail on Main Street to professional services serving the OC residential market,
              every local category has a reachable search audience.
            </p>
            <div style={{ margin: '40px 0', borderRadius: '20px', overflow: 'hidden' }}>
              <Image
                src="/images/us/huntington-beach/seo/huntington-beach-oc-market.webp"
                alt="Huntington Beach CA business owners — surf shops, restaurants, and professional services capturing the affluent OC search market"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="grid3">
              {[
                {
                  pill: 'Surf, Outdoor & Retail',
                  h: 'Surf shops, boardsports & specialty retail',
                  p: 'Tourists searching "surf shop near pier" and locals looking for gear represent year-round commercial intent. We build content and GBP presence that captures both, including the spring and summer surge around the US Open.',
                },
                {
                  pill: 'Restaurants & Hospitality',
                  h: 'Restaurants, bars, hotels & vacation rentals',
                  p: 'The most competitive category in HB local search. We focus on the underoptimized sub-niches: Pacific Coast Highway corridor dining, Huntington Harbour waterfront, and specific cuisine categories with lower competition density.',
                },
                {
                  pill: 'Health & Wellness',
                  h: 'Fitness studios, clinics & wellness practices',
                  p: 'HB\'s active, health-conscious demographic generates consistent search demand for fitness, physical therapy, chiropractic, and wellness services. We position your practice for both local residential and visitor-driven intent.',
                },
                {
                  pill: 'Real Estate & Home Services',
                  h: 'Realtors, contractors & home professionals',
                  p: 'Orange County real estate and home services carry some of the highest transaction values in the US local search market. We target the specific property types and neighborhood searches that attract qualified buyers.',
                },
                {
                  pill: 'Marine & Waterfront',
                  h: 'Boat rentals, surf lessons & waterfront services',
                  p: 'Huntington Harbour and the waterfront corridor generate specific activity-based searches that tourists and residents both use. We build category authority so your listings capture bookings before visitors arrive.',
                },
                {
                  pill: 'Professional Services',
                  h: 'Law, finance, accounting & consulting',
                  p: 'The affluent OC professional class searches for local experts constantly. We position your firm for the high-value client segments moving through Huntington Beach and the surrounding communities.',
                },
              ].map(({ pill, h, p }) => (
                <div className="ucard" key={h}>
                  <div className="pill">{pill}</div>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
            <p className="districts">
              We cover all HB zones and nearby OC cities: <b>Downtown / Main Street</b>, <b>Pier area</b>,
              <b> Bolsa Chica</b>, <b>Huntington Harbour</b>, <b>Seacliff</b>, <b>Southeast HB</b>,
              <b> Fountain Valley</b>, <b>Westminster</b>, <b>Costa Mesa</b>, <b>Newport Beach</b>, and <b>Seal Beach</b>.
            </p>
          </div>
        </section>

        {/* ── LISTICLE ─────────────────────────────────────────────────── */}
        <section className="room-peach">
          <div className="wrap">
            <div className="eyebrow">Warning signs</div>
            <h2>7 signs your Huntington Beach business is losing customers to search right now.</h2>
            <p className="lead">
              Each of these is a direct revenue leak. Most can be fixed within the first 60 days of a focused campaign.
            </p>
            <ul className="listicle-list">
              {LISTICLE.map(({ n, h, p }) => (
                <li key={n}>
                  <div className="li-n">{n}</div>
                  <div>
                    <div className="li-h">{h}</div>
                    <div className="li-p">{p}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── WHAT IS INCLUDED ─────────────────────────────────────────── */}
        <section className="room-lav">
          <div className="wrap">
            <div className="eyebrow">What you get</div>
            <h2>Full-stack SEO for the Orange County market.</h2>
            <p className="lead">
              One flat engagement. No package tiers, no feature gates. The whole SEO stack running every month.
            </p>
            <div style={{ margin: '40px 0', borderRadius: '20px', overflow: 'hidden' }}>
              <Image
                src="/images/us/shared/factoryjet-senior-engineer.webp"
                alt="FactoryJet senior engineer reviewing SEO audit data — every engagement is led by a specialist, not handed to a junior"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="grid2">
              {[
                {
                  h: 'Technical SEO and site health',
                  p: 'Core Web Vitals optimization, crawl-budget management, schema markup (LocalBusiness, FAQPage, Service), mobile performance on iOS and Android, and structured data for AI citation. Your technical foundation has to be solid before content compounds.',
                },
                {
                  h: 'Google Business Profile management',
                  p: 'Full GBP optimization: photos with descriptive alt text, service descriptions, weekly posts tied to HB events and seasonal demand, Q&A management, and review strategy. For multi-location OC businesses, each location is managed with location-specific content and tracking.',
                },
                {
                  h: 'Long-form local content',
                  p: 'One to two in-depth content pieces per month targeting your highest-value Huntington Beach and Orange County queries. Every piece is structured for Google featured snippets and AI Overviews with verified local data, FAQ schema, and internal links to your service pages.',
                },
                {
                  h: 'OC-specific link building',
                  p: 'Editorial placements in the Huntington Beach Independent, OC Register, Surf City Magazine, Visit Huntington Beach, Chamber of Commerce, and category-specific directories. Zero paid links. Every link is earned through content quality and local relevance.',
                },
                {
                  h: 'AI search optimization (GEO)',
                  p: 'We structure content to be cited in Google AI Overviews, Perplexity, and ChatGPT when users ask about HB services. Answer-first formatting, entity markup, verified source attribution, and FAQ schema all increase citation probability. This is a real, measurable channel.',
                },
                {
                  h: 'Monthly reporting and strategy call',
                  p: 'Tracked calls from organic, GBP call volume, organic form submissions, ranking movement for primary HB queries, Core Web Vitals status, and competitor activity summary. One live call per month to discuss what the data means and the plan for the next 30 days.',
                },
              ].map(({ h, p }) => (
                <div className="ucard" key={h}>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ──────────────────────────────────────────────────── */}
        <section>
          <div className="wrap">
            <div className="eyebrow">How it works</div>
            <h2>From audit to ranking in four steps.</h2>
            <div style={{ margin: '40px 0', borderRadius: '20px', overflow: 'hidden' }}>
              <Image
                src="/images/us/shared/factoryjet-audit-call.webp"
                alt="FactoryJet founder on a free audit call — 30 minutes that maps your Huntington Beach SEO opportunity with zero obligation"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="grid4">
              {[
                {
                  n: '01',
                  h: 'Free audit call',
                  p: '30 minutes. We review your GBP, website health, current rankings, and what your top Huntington Beach competitors are doing. You leave with a clear picture of the highest-impact opportunities.',
                },
                {
                  n: '02',
                  h: 'Scope and kickoff',
                  p: 'Flat-fee engagement scoped to your category and goals. Access setup and technical baseline take seven days. No bureaucratic delay, no extended onboarding.',
                },
                {
                  n: '03',
                  h: 'Build and publish',
                  p: 'Technical fixes in weeks one and two. GBP campaign in week two. Content and link building from week three onward on a consistent monthly cadence.',
                },
                {
                  n: '04',
                  h: 'Track, report, adapt',
                  p: 'Monthly review against your specific HB and OC market. Written plan for the next 30 days based on what is moving and what competitor activity requires a response.',
                },
              ].map(({ n, h, p }) => (
                <div className="ucard" key={n}>
                  <div className="pill">{n}</div>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARISON ───────────────────────────────────────────────── */}
        <section className="room-peach">
          <div className="wrap">
            <div className="eyebrow">How we compare</div>
            <h2>FactoryJet vs. a traditional Orange County agency.</h2>
            <div className="cmpwrap">
              <table className="cmp">
                <thead>
                  <tr>
                    <th></th>
                    <th className="fjh">FactoryJet</th>
                    <th>Traditional Agency</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map(({ k, fj, alt, hl }) => (
                    <tr key={k}>
                      <td className="k">{k}</td>
                      <td className="fj">
                        {hl ? <span className="hl">{fj}</span> : fj}
                      </td>
                      <td className="alt">{alt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── PROOF ────────────────────────────────────────────────────── */}
        <section className="green">
          <div className="wrap">
            <div className="eyebrow">Results that hold</div>
            <h2>500+ businesses. Senior engineers. Founder-led strategy.</h2>
            <p className="lead">
              Results tracked to actual calls and bookings, not just ranking screenshots.
            </p>
            <div className="quote">
              <p>
                "FactoryJet's team is as senior as any agency I've worked with, but they communicate like
                a partner, not a vendor. We saw GBP call volume double in the first two months and organic
                leads follow in month four."
              </p>
              <div className="byline">
                <div className="avatar">B</div>
                <div>
                  <div className="nm">Ricky B — Belle Maison</div>
                  <div className="ti">Retail and home decor, US market</div>
                </div>
              </div>
            </div>
            <div style={{ margin: '0 0 36px', borderRadius: '20px', overflow: 'hidden' }}>
              <Image
                src="/images/us/huntington-beach/seo/huntington-beach-seo-results.webp"
                alt="Huntington Beach CA business owner reviewing SEO results — local search growth in the competitive Orange County market"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="clients">
              {['Belle Maison', 'Formative Concepts', 'Impulse Branding', '500+ businesses served'].map(
                (c) => <span key={c}>{c}</span>
              )}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="room-peach">
          <div className="wrap">
            <div className="eyebrow">Questions answered</div>
            <h2>What Huntington Beach business owners ask before starting SEO.</h2>
            <div className="faqgrid">
              <nav aria-label="FAQ categories">
                <div className="faqnav">
                  {FAQ_GROUPS.map((g) => (
                    <a href={`#faq-${g.id}`} key={g.id}>
                      {g.label}<span className="ct">{g.count}</span>
                    </a>
                  ))}
                </div>
                <p className="faqhelp">
                  More questions? <a href={CALENDLY} target="_blank" rel="noopener noreferrer">Book a free call</a> and we
                  will answer them live.
                </p>
              </nav>
              <div>
                {FAQ_GROUPS.map((g) => (
                  <div className="faqcat" key={g.id} id={`faq-${g.id}`}>
                    <div className="ch">{g.label}</div>
                    {g.items.map((it) => (
                      <details key={it.q}>
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

        {/* ── FINAL CTA ────────────────────────────────────────────────── */}
        <section className="final">
          <div className="wrap">
            <div className="eyebrow">Ready to start</div>
            <h2>
              Let's put your Huntington Beach business<br />
              where the <span className="it">search traffic breaks.</span>
            </h2>
            <p className="lead">
              Free 30-minute audit. We show you where you stand, what your competitors are doing,
              and the three moves with the biggest impact. No obligation, no pressure.
            </p>
            <div className="cta-row">
              <ModalCTAButton
                label="Get your free SEO audit"
                region="us"
                modalVariant="seo"
                btnVariant="primary-light"
              />
              <a className="btn btn-ghost" href={CALENDLY} target="_blank" rel="noopener noreferrer">
                Talk to the founder
              </a>
            </div>
            <p className="fine">
              Month-to-month &middot; free audit &middot; no setup fee &middot; senior engineers &middot; US SEO services
            </p>
          </div>
        </section>

        <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
      </div>
    </>
  );
}
