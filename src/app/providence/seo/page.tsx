/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import HeroInlineForm from '@/components/HeroInlineForm';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import './providence-seo.css';

// ─ Constants ────────────────────────────────────────────────────────────────
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/providence/seo';

// ─ Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Providence RI SEO Company | Local SEO Services | FactoryJet',
  description:
    'FactoryJet is a Providence RI SEO company that puts Rhode Island businesses into Google\'s local 3-pack. College Hill to Jewelry District local SEO, Google Business Profile optimization, and AI-search citation. Month-to-month, senior engineers, free audit.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Providence RI SEO Company | FactoryJet',
    description:
      'Rhode Island SEO for Providence businesses. Rank in local 3-pack for Brown, RISD, the medical corridor, and the booming restaurant and hospitality scene. KD 5.4 — open right now.',
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
        q: 'How much does local SEO cost for a Providence small business?',
        a: 'Cost depends on your category, how many locations you serve, and how competitive your specific query set is in the Providence market. A single-location restaurant in the East Side competes differently than a law firm targeting Rhode Island statewide searches. We scope every engagement individually, give you a flat monthly fee upfront, and never add hourly charges. Book a free 30-minute audit and we will scope it specifically for your situation.',
      },
      {
        q: 'How long until I see local SEO results in Providence?',
        a: 'Google Business Profile improvements typically move rankings in four to eight weeks. Organic keyword improvements for competitive Providence queries usually take three to five months. With KD 5.4 on primary keywords, Providence is faster-moving than most East Coast markets of comparable size. We track every signal weekly and show you movement with context.',
      },
      {
        q: 'Is there a long-term contract requirement?',
        a: 'No. All FactoryJet engagements are month-to-month. You stay because results keep you here. Pause or cancel with 30 days notice at any point, no penalty.',
      },
      {
        q: 'Are there setup fees or upfront costs?',
        a: 'No setup fee. The technical and competitive audit we run at kickoff is included in the monthly fee. That covers strategy, content, link building, GBP management, reporting, and a monthly call.',
      },
    ],
  },
  {
    id: 'market',
    label: 'Providence RI market',
    count: 4,
    items: [
      {
        q: 'Why is local SEO in Providence such a strong opportunity right now?',
        a: 'Providence has keyword difficulty scores as low as 5.4 for primary SEO service queries — meaning the incumbent agencies ranking in the top results have thin content and weak authority. For any service category in the Providence market, a well-executed SEO campaign can displace existing rankings faster than in Boston, New York, or other Northeast metros. Combined with Brown University, RISD, a growing biotech and education sector, and a national restaurant scene, the organic search opportunity in Providence is genuinely underserved relative to the market size.',
      },
      {
        q: 'Which Providence neighborhoods and areas matter most for local SEO?',
        a: 'The highest search density areas are Downtown / Financial District, College Hill (serving Brown and RISD communities), Federal Hill (restaurant and Italian corridor), the Jewelry District and Wexford Innovation District, Fox Point, South Providence, and the surrounding Cranston, Pawtucket, and East Providence coverage zones. For healthcare and education services, we also target searches originating from Woonsocket, Warwick, and North Providence.',
      },
      {
        q: 'How does the university presence affect SEO strategy in Providence?',
        a: 'Brown University and RISD together generate a combined student, faculty, and staff population of roughly 15,000 people, plus tens of thousands of alumni who return seasonally, plus parent visitor traffic during move-in and graduation. That creates sustained search demand for food, housing, services, and entertainment with predictable seasonal peaks in September and May. We build content calendars and GBP campaigns around those cycles.',
      },
      {
        q: 'Is the Providence restaurant and hospitality market hard to rank in?',
        a: 'Restaurants and hospitality are competitive in GBP searches near Downtown and Federal Hill, but many operators have not done the technical SEO work: their sites have poor Core Web Vitals, no structured data, and GBP profiles that were set up years ago and never maintained. That means a well-optimized competitor can move into the local 3-pack with three to four months of consistent work.',
      },
    ],
  },
  {
    id: 'included',
    label: 'What is included',
    count: 4,
    items: [
      {
        q: 'What does FactoryJet do every month for a Providence SEO client?',
        a: 'Monthly work covers: technical SEO health (Core Web Vitals, schema, crawl issues), one to two long-form content pieces targeting your highest-value Providence queries, Google Business Profile management (photos, posts, Q&A, review strategy), local citation audits and cleanup across 40+ directories, internal linking improvements, competitor monitoring, and a monthly performance call with a written summary of rankings, tracked calls, and traffic breakdown.',
      },
      {
        q: 'Do you manage Google Business Profile for Providence businesses?',
        a: 'Yes. GBP is one of the fastest levers in Providence local search. We optimize every field, add photos, write keyword-rich service descriptions, publish weekly posts, manage Q&A, and develop a review velocity strategy. For multi-location Rhode Island businesses, each location is managed with location-specific content and separate tracking.',
      },
      {
        q: 'What does local link building look like in the Providence market?',
        a: 'Providence-specific editorial opportunities include the Providence Journal, Providence Business News, GoLocalProv, What\'s Up Newp, Brown University and RISD adjacent publications, Rhode Island Commerce, Providence Chamber of Commerce, and category-specific directories for healthcare, hospitality, and the arts. No paid links. Everything is earned through content quality and local context.',
      },
      {
        q: 'Do you optimize for Google AI Overviews and AI search?',
        a: 'Yes. Every content piece is structured to appear in Google AI Overviews, ChatGPT, and Perplexity when users ask about Providence businesses and services. Answer-first content structure, FAQ schema, entity markup, and sourced statistics all increase citation probability. Providence is a relatively early-stage market for AI citation, which means businesses that build this structure now face less competition for those placements.',
      },
    ],
  },
  {
    id: 'trust',
    label: 'Trust & process',
    count: 4,
    items: [
      {
        q: 'Who does the actual SEO work at FactoryJet?',
        a: 'Senior engineers and content strategists with 25+ years of combined experience. No junior account managers, no outsourced vendors. Bhavesh Barot, the founder, is directly involved in strategy for every client account. You communicate with the people doing the work.',
      },
      {
        q: 'What happens to my accounts if I ever leave?',
        a: 'Everything is yours. GSC, GBP, GA4, and all content belong to you. We add ourselves as contributors, not owners, and remove our access cleanly at the end. No data lock-in of any kind.',
      },
      {
        q: 'How do you report results for a Providence business?',
        a: 'We track calls and form fills from organic, not just keyword rankings. Monthly reports include: organic call volume, GBP call tracking, form submissions from organic, ranking movement for primary Providence queries, Core Web Vitals status, and competitor activity. One live call per month to discuss what the data means and the plan for the next 30 days.',
      },
      {
        q: 'Have you worked with Northeast US businesses before?',
        a: 'Yes. We have served 500+ businesses across competitive US markets including New England markets with similar characteristics: university-adjacent demand, strong hospitality and healthcare sectors, and a professional services base. We apply the cross-market pattern recognition to every Providence engagement.',
      },
    ],
  },
  {
    id: 'start',
    label: 'Getting started',
    count: 4,
    items: [
      {
        q: 'What does the free audit call cover?',
        a: 'Thirty focused minutes: your GBP health, website technical status, current keyword rankings for your primary Providence queries, and what your top local competitors are doing that you are not. You leave with a prioritized opportunity list regardless of whether we work together.',
      },
      {
        q: 'How fast can you start?',
        a: 'Technical work begins within seven days of signing. GBP and content campaigns start in week two after access verification and competitor mapping. Full campaign rhythm is established by week four.',
      },
      {
        q: 'What if my website is already slow or outdated?',
        a: 'We flag and fix technical issues as part of the engagement. If the site requires a full rebuild, FactoryJet also builds high-performance websites in seven days, so we can run both tracks without adding a second vendor.',
      },
      {
        q: 'I run a small operation in Providence. Is SEO worth it at my scale?',
        a: 'Local SEO has the highest ROI at small scale precisely because a single phone call or form fill from organic can represent a meaningful percentage of monthly revenue. The investment compounds: a Providence business that builds local search authority now will have a structural advantage over any competitor that starts in year two or three.',
      },
    ],
  },
];

// ─ Listicle ──────────────────────────────────────────────────────────────────
const LISTICLE: { n: string; h: string; p: string }[] = [
  {
    n: '01',
    h: 'Students, faculty, and alumni search locally and you are invisible to them',
    p: 'Brown and RISD together bring tens of thousands of high-spending searchers into Providence. They search for food, services, and experiences on mobile constantly. Not being in the local 3-pack means you do not exist to that cohort.',
  },
  {
    n: '02',
    h: 'Your Google Business Profile was set up years ago and never maintained',
    p: 'An inactive GBP suppresses local ranking directly. Recency of posts, photo updates, Q&A activity, and review response all affect your position in the maps carousel. Most Providence businesses have outdated profiles that can be improved immediately.',
  },
  {
    n: '03',
    h: 'The KD 5.4 window in Providence will not stay open much longer',
    p: 'Keyword difficulty scores under 6 are rare in any metro market. Providence is open right now because the existing top-ranking pages are weak. National agencies will eventually notice this. The time to build authority here is before they do.',
  },
  {
    n: '04',
    h: 'You rank for your business name but not for what a stranger searches',
    p: 'Branded searches only find people who already know you. Local SEO captures "providence [service]" queries from buyers who have never heard of your business. That is the only funnel that actually compounds.',
  },
  {
    n: '05',
    h: 'Your website has slow Core Web Vitals on a Boston or Providence 5G connection',
    p: 'Rhode Island has high mobile internet penetration and tech-savvy users. A slow website signals low quality to Google and kills mobile conversions before a visitor reads a single sentence.',
  },
  {
    n: '06',
    h: 'The biotech and healthcare corridor is generating B2B search you are missing',
    p: 'The Wexford Innovation District and Providence healthcare sector are growing fast. Professional and B2B service providers who build local search authority in this ecosystem now will have a significant advantage as the market matures.',
  },
  {
    n: '07',
    h: 'AI Overviews are recommending other Providence businesses, not yours',
    p: 'When someone asks ChatGPT or Google AI "what is the best [service] in Providence RI," the answer comes from structured, authoritative content. Without that structure on your site, you get no citation regardless of how established your business is.',
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
      name: 'Providence RI Local SEO Services',
      provider: { '@id': 'https://factoryjet.com/#org' },
      areaServed: {
        '@type': 'City',
        name: 'Providence',
        containedInPlace: { '@type': 'State', name: 'Rhode Island' },
      },
      description:
        'Local SEO for Providence RI businesses: Google Business Profile, local 3-pack ranking, AI-search citation, and technical SEO for the Rhode Island market.',
    },
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#page`,
      url: CANONICAL,
      name: 'Providence RI SEO Company | FactoryJet',
      isPartOf: { '@id': 'https://factoryjet.com/#site' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
          { '@type': 'ListItem', position: 2, name: 'US Services', item: 'https://factoryjet.com' },
          { '@type': 'ListItem', position: 3, name: 'Providence', item: 'https://factoryjet.com/providence' },
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

// Broadside columns content
const BS_COL1 = [
  'Providence SEO company',
  'Local SEO Providence RI',
  'Google Business Profile',
  'Near me search ranking',
];
const BS_COL2 = [
  'SEO agency Providence',
  'Rhode Island local SEO',
  'AI Overview citations',
  'College Hill visibility',
];

// ─ Component ─────────────────────────────────────────────────────────────────
export default function ProvidenceSEO() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pvseo">
        <SiteHeader />

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="hero">
          <div className="wrap hero-grid">
            {/* Left: copy */}
            <div>
              <div className="loc rise"><b />&nbsp;Providence, RI</div>
              <h1 className="rise d1">
                Providence <span className="it">SEO company</span><br />
                for Rhode Island businesses<br />that want to rank first.
              </h1>
              <p className="lead rise d2">
                FactoryJet gets Providence businesses into Google's local 3-pack and AI Overviews.
                KD 5.4 market, month-to-month, senior engineers, free audit. Serving College Hill to the
                Jewelry District.
              </p>
              <div className="hstat rise d3">
                <div className="n">
                  <span className="star">★</span>&nbsp;5.0
                  <span className="l">/ 500+ clients</span>
                </div>
                <div className="sep" />
                <div className="n">KD 5.4<span className="l">&nbsp;open market</span></div>
                <div className="sep" />
                <div className="n">7 days<span className="l">&nbsp;to start</span></div>
              </div>
              <HeroInlineForm region="us" source="providence_seo_hero" submitLabel="Get my free SEO audit" />
              <div className="cta-row rise d4">
                <a className="btn btn-ghost" href={CALENDLY} target="_blank" rel="noopener noreferrer">
                  Talk to the founder
                </a>
              </div>
            </div>

            {/* Right: broadside card */}
            <div className="hero-vis float">
              {/* Floating chips */}
              <div className="schip ch1">
                <div className="k">Keyword difficulty</div>
                <div className="v">KD 5.4</div>
              </div>
              <div className="schip ch2">
                <div className="cdot" />
                <div className="ct2">Low competition</div>
              </div>

              <div className="broadside">
                {/* Masthead */}
                <div className="bs-masthead">
                  <div className="bs-name">Providence Search Report</div>
                  <div className="bs-date">Vol. 1 &middot; 2026 Edition</div>
                </div>

                {/* Orange rule */}
                <div className="bs-rule" />

                {/* Deck */}
                <div className="bs-deck">
                  <div className="bs-kicker">Local search intelligence</div>
                  <div className="bs-hl">
                    Providence local 3-pack: lowest KD in New England. Open for capture.
                  </div>
                </div>

                {/* Columns */}
                <div className="bs-cols">
                  <div className="bs-col">
                    <div className="bs-col-head">Top queries</div>
                    <ul>
                      {BS_COL1.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bs-divider" />
                  <div className="bs-col">
                    <div className="bs-col-head">Opportunity</div>
                    <ul>
                      {BS_COL2.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer */}
                <div className="bs-footer">
                  <div className="stat">
                    <div className="sv">180K</div>
                    <div className="sl">residents</div>
                  </div>
                  <div className="sdiv" />
                  <div className="stat">
                    <div className="sv">1,080</div>
                    <div className="sl">mo. searches</div>
                  </div>
                  <div className="sdiv" />
                  <div className="stat">
                    <div className="sv">5.4</div>
                    <div className="sl">avg. KD</div>
                  </div>
                  <div className="sdiv" />
                  <div className="stat">
                    <div className="sv">4</div>
                    <div className="sl">universities</div>
                  </div>
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
                <strong>The short version:</strong> Providence has 180,000 residents, four universities, a nationally
                recognized restaurant scene, a growing biotech and innovation corridor, and keyword difficulty scores
                under 6 for primary SEO queries. That combination does not exist anywhere else in New England.
                The businesses that build local search authority here in the next 12 months will own rankings
                their competitors cannot displace without starting over.
              </p>
            </div>
          </div>
        </section>

        {/* ── DARK STATS ───────────────────────────────────────────────── */}
        <section className="dark">
          <div className="wrap">
            <div className="eyebrow">Providence market data</div>
            <h2>The numbers that make Providence a rare SEO opportunity.</h2>
            <p className="lead">Real data. Verified sources.</p>
            <div style={{ margin: '40px 0', borderRadius: '20px', overflow: 'hidden' }}>
              <Image
                src="/images/us/providence/seo/providence-ri-seo-hero.webp"
                alt="Providence RI downtown and waterfront — the knowledge-economy capital where Brown, RISD, and a dense small business scene converge"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="statgrid">
              <div className="scard">
                <div className="n">180K</div>
                <div className="l">Providence population, capital of Rhode Island and anchor of the Greater Providence metro (1.6M)</div>
                <div className="src">US Census Bureau, 2024</div>
              </div>
              <div className="scard">
                <div className="n">4</div>
                <div className="l">Major universities within city limits: Brown, RISD, Providence College, Johnson &amp; Wales — combined enrollment 30K+</div>
                <div className="src">NCES Integrated Postsecondary Education Data System, 2024</div>
              </div>
              <div className="scard">
                <div className="n">KD 5.4</div>
                <div className="l">Average keyword difficulty for "seo company providence" cluster — among the lowest in any comparable Northeast US market</div>
                <div className="src">Semrush keyword analysis, 2026</div>
              </div>
              <div className="scard">
                <div className="n">28%</div>
                <div className="l">Growth in Providence metro tech and biotech employment since 2020, driving a new wave of B2B search demand</div>
                <div className="src">RI Commerce Corporation, 2024</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHO WE HELP ──────────────────────────────────────────────── */}
        <section>
          <div className="wrap">
            <div className="eyebrow">Who we work with</div>
            <h2>Built for every type of Providence business.</h2>
            <p className="lead">
              From Federal Hill restaurants to Wexford biotech startups, local SEO works for any category
              with a local search audience.
            </p>
            <div style={{ margin: '40px 0', borderRadius: '20px', overflow: 'hidden' }}>
              <Image
                src="/images/us/providence/seo/providence-university-district.webp"
                alt="Providence RI university district and small businesses — Brown University, RISD, and Johnson & Wales create a uniquely dense local search market"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="grid3">
              {[
                {
                  pill: 'Restaurants & Food',
                  h: 'Restaurants, cafes & food businesses',
                  p: 'Providence has a nationally recognized dining scene that attracts visitors specifically for food. We build GBP presence and content that captures both the tourist search ("best restaurants providence") and the local residential search year-round.',
                },
                {
                  pill: 'Healthcare & Wellness',
                  h: 'Medical practices, clinics & therapists',
                  p: 'Brown Medical, Lifespan, and Care New England anchor a large healthcare ecosystem. Adjacent practices, specialists, and wellness services benefit from proximity and can capture both institutional referral traffic and direct patient searches.',
                },
                {
                  pill: 'Education & Tutoring',
                  h: 'Tutors, test prep, coaching & education services',
                  p: 'The student population at Brown, RISD, and PC generates consistent demand for academic support, test prep, and skills training. We target both student-specific and parent-driven search behavior.',
                },
                {
                  pill: 'Professional Services',
                  h: 'Law, accounting, finance & consulting',
                  p: 'The growing Wexford and Jewelry District professional base generates high-value B2B search demand. We position professional service firms for the commercial-intent queries that attract institutional and startup clients.',
                },
                {
                  pill: 'Arts, Design & Creative',
                  h: 'Galleries, studios, creative agencies & services',
                  p: 'Providence\'s RISD-adjacent creative community generates unique search demand for design services, studio space, gallery events, and creative consulting. We build authority in this niche ecosystem.',
                },
                {
                  pill: 'Retail & Home Services',
                  h: 'Local shops, contractors & home professionals',
                  p: 'East Side, Federal Hill, and the growing South Providence residential market all generate consistent local service searches. We get your business into the map results for the neighborhoods you actually serve.',
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
              We cover all Providence neighborhoods and nearby RI cities: <b>College Hill</b>, <b>Federal Hill</b>,
              <b> Jewelry District</b>, <b>Fox Point</b>, <b>Downtown</b>, <b>South Providence</b>,
              <b> Cranston</b>, <b>Pawtucket</b>, <b>East Providence</b>, <b>North Providence</b>, <b>Woonsocket</b>, <b>Warwick</b>.
            </p>
          </div>
        </section>

        {/* ── LISTICLE ─────────────────────────────────────────────────── */}
        <section className="room-peach">
          <div className="wrap">
            <div className="eyebrow">Warning signs</div>
            <h2>7 signs your Providence business is losing customers to Google right now.</h2>
            <p className="lead">
              Each one is a direct revenue leak. Most can be fixed in the first 60 days of a focused campaign.
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
            <h2>Full-stack SEO built for the Rhode Island market.</h2>
            <p className="lead">
              One flat engagement. No package tiers, no feature gates. The complete SEO stack, every month.
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
                  h: 'Technical SEO foundation',
                  p: 'Core Web Vitals, crawl management, schema markup (LocalBusiness, FAQPage, Service), mobile performance, and structured data for AI citation. Providence sites tend to have accumulated technical debt from older CMS installs — we clear that foundation first.',
                },
                {
                  h: 'Google Business Profile management',
                  p: 'Full GBP optimization: photos, service descriptions, weekly posts tied to Providence events (Providence Restaurant Weeks, WaterFire, Brown commencement), Q&A management, and review strategy. For multi-location Rhode Island businesses, each location managed separately.',
                },
                {
                  h: 'Providence-specific long-form content',
                  p: 'One to two in-depth content pieces per month targeting your highest-value Providence queries. Structured for Google featured snippets and AI Overviews, with local stats, FAQ schema, and internal links to your service pages.',
                },
                {
                  h: 'Rhode Island link building',
                  p: 'Editorial placements in the Providence Journal, Providence Business News, GoLocalProv, What\'s Up Newp, Brown and RISD adjacent publications, RI Chamber of Commerce, and category-specific directories. No paid links.',
                },
                {
                  h: 'AI search optimization (GEO)',
                  p: 'Content structured for Google AI Overviews, ChatGPT, and Perplexity citations. Answer-first formatting, entity markup, FAQ schema, and verified sourcing. Providence is early-stage for AI citation competition — now is the time to build that authority.',
                },
                {
                  h: 'Monthly reporting and strategy',
                  p: 'Tracked calls and form fills from organic, GBP call volume, ranking movement for your Providence queries, Core Web Vitals status, and competitor activity. One live call per month with a written plan for the next 30 days.',
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
                alt="FactoryJet founder on a free audit call — 30 minutes that maps your Providence SEO opportunity with zero obligation"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="grid4">
              {[
                { n: '01', h: 'Free audit call', p: '30 minutes. GBP, website health, current Providence rankings, competitor analysis. You leave with a concrete priority list.' },
                { n: '02', h: 'Scope and kickoff', p: 'Flat monthly fee scoped to your Providence market and goals. Technical baseline and access setup within seven days.' },
                { n: '03', h: 'Build and publish', p: 'Technical fixes in weeks one and two. GBP campaign in week two. Content and link building from week three onward.' },
                { n: '04', h: 'Track, report, adapt', p: 'Monthly performance review, written plan for next 30 days, competitor monitoring, and a live call to discuss everything.' },
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
            <h2>FactoryJet vs. a traditional Rhode Island agency.</h2>
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
                      <td className="fj">{hl ? <span className="hl">{fj}</span> : fj}</td>
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
              We track calls and bookings, not ranking screenshots.
            </p>
            <div className="quote">
              <p>
                "Three months in and we had more organic calls than the entire previous year combined.
                The team knows what they are doing and they explain every decision clearly."
              </p>
              <div className="byline">
                <div className="avatar">K</div>
                <div>
                  <div className="nm">Kiran M — Impulse Branding</div>
                  <div className="ti">Brand strategy and digital services</div>
                </div>
              </div>
            </div>
            <div style={{ margin: '0 0 36px', borderRadius: '20px', overflow: 'hidden' }}>
              <Image
                src="/images/us/providence/seo/providence-knowledge-economy.webp"
                alt="Providence RI knowledge economy businesses — healthcare, biotech, creative agencies, and restaurants that win with local SEO"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="clients">
              {['Impulse Branding', 'Belle Maison', 'Formative Concepts', '500+ businesses served'].map(
                (c) => <span key={c}>{c}</span>
              )}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="room-peach">
          <div className="wrap">
            <div className="eyebrow">Questions answered</div>
            <h2>What Providence business owners ask before starting SEO.</h2>
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
                  More questions? <a href={CALENDLY} target="_blank" rel="noopener noreferrer">Book a free call</a>.
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
              The Providence SEO window is open.<br />
              <span className="it">Let's move before it closes.</span>
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
