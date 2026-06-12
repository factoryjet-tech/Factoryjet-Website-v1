/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import './lakewood-ranch-seo.css';

// ─ Constants ────────────────────────────────────────────────────────────────
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/us/lakewood-ranch/seo';

// ─ Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Lakewood Ranch FL SEO Company | Local SEO Services | FactoryJet',
  description:
    'FactoryJet is a Lakewood Ranch FL SEO company that gets Manatee and Sarasota County businesses into Google\'s local 3-pack. High-intent local SEO for the fastest-growing master-planned community in the US. Month-to-month, senior engineers, free audit.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Lakewood Ranch FL SEO Company | FactoryJet',
    description:
      'Lakewood Ranch SEO with the highest buyer intent in the dataset — $11.77 CPC. Serve the new-resident wave, the affluent retiree market, and the growing professional base in Manatee and Sarasota County.',
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
        q: 'How much does local SEO cost for a Lakewood Ranch business?',
        a: 'Cost is scoped to your specific category, how many locations you serve, and your current starting point. Lakewood Ranch is a high-intent market with some of the highest cost-per-click signals in the dataset, which means the buyers in this market have a strong purchase intent. We scope every engagement individually, give you a flat monthly fee upfront, and never add hourly charges. Book a free 30-minute call and we will scope it specifically for your situation at no charge.',
      },
      {
        q: 'How quickly can I see results from SEO in Lakewood Ranch?',
        a: 'Google Business Profile improvements typically show movement in four to eight weeks. Organic keyword ranking shifts take three to five months for competitive queries. The Lakewood Ranch market is still maturing, which means new content can rank faster here than in established Florida metros like Tampa or Sarasota. We track every signal weekly and show you what is moving.',
      },
      {
        q: 'Is there a long-term contract?',
        a: 'No. All FactoryJet engagements are month-to-month. You stay because results keep you here. Pause or cancel with 30 days notice at any point, no penalty.',
      },
      {
        q: 'Are there any setup fees or upfront costs?',
        a: 'No setup fee. The technical and competitive audit we run at kickoff is included in the monthly fee. That covers strategy, content, GBP management, link building, reporting, and a monthly call.',
      },
    ],
  },
  {
    id: 'market',
    label: 'Lakewood Ranch market',
    count: 4,
    items: [
      {
        q: 'Why is Lakewood Ranch such a strong local SEO opportunity?',
        a: 'Lakewood Ranch is the fastest-growing master-planned community in the US. Between 2000 and 2024, it grew from under 10,000 residents to over 65,000, with continued expansion through 2030 and beyond. The community attracts high-income relocating households from the Northeast, Midwest, and West Coast — buyers who immediately search for every local service they used to have in their previous city. That new-resident search behavior is sustained and predictable, and the local search market has not yet caught up to the demand. The $11.77 CPC signal means advertisers are already paying premium rates for this audience — organic SEO delivers those same buyers without the per-click cost.',
      },
      {
        q: 'Who are the primary buyers searching in Lakewood Ranch?',
        a: 'Three distinct segments: recently relocated families setting up their new home (healthcare, home services, schools, gyms, professionals); affluent active retirees from the 55+ communities (medical, wellness, dining, financial, travel); and a growing professional base connected to the Sarasota and Bradenton business corridor (B2B services, consulting, law, finance). Each segment has different search behavior, and we target all three with category-specific content.',
      },
      {
        q: 'Is the Lakewood Ranch search market competitive?',
        a: 'Consumer categories in adjacent Sarasota have significant competition from established Florida agencies. Lakewood Ranch itself remains underserved — many of the businesses that have been here since the early development years have thin digital presences and weak GBP profiles. This creates a window for any business willing to invest in proper technical SEO and content before the market matures. That window is open now and will close as the community grows.',
      },
      {
        q: 'How does the constant stream of new residents affect SEO strategy?',
        a: 'New residents in a master-planned community search for literally everything within the first 90 days of moving in: doctors, dentists, vets, dry cleaners, gyms, landscapers, plumbers, tutors, restaurants, financial advisors, and more. We build content specifically targeting "best [service] in Lakewood Ranch" and "near me" queries that capture this new-resident search wave. The demand is structural and will persist for at least another decade as Phase 4 and Phase 5 communities fill in.',
      },
    ],
  },
  {
    id: 'included',
    label: 'What is included',
    count: 4,
    items: [
      {
        q: 'What does FactoryJet do every month for a Lakewood Ranch SEO client?',
        a: 'Monthly work: technical SEO health (Core Web Vitals, schema, crawl issues), one to two long-form content pieces targeting your highest-value Lakewood Ranch queries, Google Business Profile management (photos, posts, Q&A, review strategy), local citation audits across 40+ directories, internal linking improvements, competitor monitoring, and a monthly performance call with a written summary showing rankings, tracked calls, and traffic breakdown.',
      },
      {
        q: 'Do you manage Google Business Profile for Lakewood Ranch businesses?',
        a: 'Yes. GBP is critical in a market where most buyers are searching from an unfamiliar area with no brand preferences yet. We optimize every field, add photos, write service descriptions, publish weekly posts, manage Q&A, and develop a review strategy. For multi-location businesses serving both Lakewood Ranch and the broader Manatee and Sarasota markets, each location is managed with location-specific content.',
      },
      {
        q: 'What does local link building look like for a Lakewood Ranch business?',
        a: 'Lakewood Ranch specific: community news outlets, the Lakewood Ranch Business Alliance, Manatee Chamber of Commerce, Sarasota Magazine adjacent publications, Visit Sarasota County, and Florida-specific directories. We also target the Lakewood Ranch Lifestyle newsletter and community social platforms where new residents actively seek local recommendations. No paid links.',
      },
      {
        q: 'Do you optimize for AI Overviews and AI search?',
        a: 'Yes. Lakewood Ranch buyers are educated, mobile-first, and frequently use AI tools to make decisions about local services. They ask ChatGPT and Google AI "who is the best [service] in Lakewood Ranch." We structure every content piece to be cited in those answers. Answer-first formatting, FAQ schema, entity markup, and verified local statistics all increase citation probability.',
      },
    ],
  },
  {
    id: 'trust',
    label: 'Trust & process',
    count: 4,
    items: [
      {
        q: 'Who actually does the SEO work at FactoryJet?',
        a: 'Senior engineers and content strategists with 25+ years of combined experience. No junior account managers, no outsourced vendors. Bhavesh Barot, the founder, is directly involved in strategy for every client. You communicate with the people doing the work.',
      },
      {
        q: 'What happens to my accounts and data if I ever leave?',
        a: 'Everything is yours. GSC, GBP, GA4, and all content belong to you. We add ourselves as contributors, not owners, and remove our access cleanly at the end. No data lock-in.',
      },
      {
        q: 'How do you report results for a Lakewood Ranch business?',
        a: 'We track calls and form fills from organic, not just keyword rankings. Monthly reports: tracked phone calls from organic, GBP call volume, form submissions, ranking movement for your primary queries, Core Web Vitals status, and competitor activity. One live call per month to discuss what the data means and the plan for the next 30 days.',
      },
      {
        q: 'Have you worked with Florida businesses before?',
        a: 'Yes. We have served 500+ businesses across the US including Florida markets with similar characteristics: new-development communities, retiree demographics, tourism-adjacent demand, and a B2B layer tied to regional economic growth. The Tampa city SEO page we built performs for a directly comparable Florida demographic.',
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
        a: 'Thirty focused minutes: your GBP health, website technical status, current rankings for your Lakewood Ranch queries, and what your top three local competitors are doing that you are not. You leave with a prioritized action list regardless of whether we work together.',
      },
      {
        q: 'How fast can you start?',
        a: 'Technical work begins within seven days of signing. GBP and content campaigns start in week two after access verification and competitor mapping. Full campaign rhythm is established by week four.',
      },
      {
        q: 'What if my business just opened in Lakewood Ranch?',
        a: 'New businesses in Lakewood Ranch are in the best position to start SEO because they can capture the new-resident search wave from day one rather than playing catch-up. We can get your GBP live and optimized, your site technically clean, and your initial content ranking while the community around you is still setting up. Starting early in a growth market compounds faster.',
      },
      {
        q: 'I serve both Lakewood Ranch and surrounding areas like Sarasota and Bradenton. Can you cover all of them?',
        a: 'Yes. Multi-market campaigns are one of our strongest capabilities. We build location-specific content pages for each geography you serve, manage the GBP presence for each location, and ensure the technical architecture handles multiple service areas cleanly without keyword cannibalization.',
      },
    ],
  },
];

// ─ Listicle ──────────────────────────────────────────────────────────────────
const LISTICLE: { n: string; h: string; p: string }[] = [
  {
    n: '01',
    h: 'New residents are searching for exactly what you offer and finding your competitors',
    p: 'Lakewood Ranch adds thousands of new households every year. Every household searches for a new doctor, dentist, gym, and service provider within 90 days of moving in. If you are not ranking, you are invisible to the most motivated buyers in the market.',
  },
  {
    n: '02',
    h: 'Your GBP has no recent posts, no reviews this month, and outdated photos',
    p: 'Google uses GBP activity as a local ranking signal. A profile that has not been updated in months signals low relevance. New residents do not have loyalty to existing brands — they choose whoever appears most active and credible in the 3-pack.',
  },
  {
    n: '03',
    h: 'The $11.77 CPC signal means you are competing against well-funded advertisers',
    p: 'That CPC is one of the highest in the entire dataset. It means advertisers are paying premium rates for Lakewood Ranch buyers. Organic rankings let you capture that same high-intent traffic every day without paying per click.',
  },
  {
    n: '04',
    h: 'You rank for your business name but not for a category + neighborhood search',
    p: 'Branded search only reaches people who already found you somewhere else. "Dentist lakewood ranch" and "[service] near me" are the searches that actually introduce your business to net-new customers.',
  },
  {
    n: '05',
    h: 'Your website loads slowly on the mobile phones buyers use in the community',
    p: 'Lakewood Ranch residents skew toward high-income, tech-savvy demographics who use mobile constantly. Slow load times kill trust and push Core Web Vitals scores down, which directly affects your ranking position.',
  },
  {
    n: '06',
    h: 'Phase 4 and Phase 5 neighborhoods are opening and you have no presence there yet',
    p: 'New Lakewood Ranch communities like Waterside, Azario, and Lorraine Lakes are bringing in thousands of additional households. The businesses that establish local search presence before residents arrive capture the first-mover advantage in those zones.',
  },
  {
    n: '07',
    h: 'AI tools are recommending other Lakewood Ranch businesses to new residents',
    p: 'Relocating households frequently ask ChatGPT "who is the best [service] in Lakewood Ranch Florida" before they have any brand familiarity. If your website does not have the structured content that gets cited, you are not in that conversation.',
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
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Lakewood Ranch FL Local SEO Services',
      provider: { '@id': 'https://factoryjet.com/#org' },
      areaServed: [
        {
          '@type': 'Place',
          name: 'Lakewood Ranch',
          containedInPlace: { '@type': 'State', name: 'Florida' },
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Manatee County',
          containedInPlace: { '@type': 'State', name: 'Florida' },
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Sarasota County',
          containedInPlace: { '@type': 'State', name: 'Florida' },
        },
      ],
      description:
        'Local SEO for Lakewood Ranch FL businesses: Google Business Profile, local 3-pack ranking, AI-search citation, and technical SEO for Manatee and Sarasota County.',
    },
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#page`,
      url: CANONICAL,
      name: 'Lakewood Ranch FL SEO Company | FactoryJet',
      isPartOf: { '@id': 'https://factoryjet.com/#site' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
          { '@type': 'ListItem', position: 2, name: 'US Services', item: 'https://factoryjet.com/us' },
          { '@type': 'ListItem', position: 3, name: 'Lakewood Ranch', item: 'https://factoryjet.com/us/lakewood-ranch' },
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

// ─ Component ─────────────────────────────────────────────────────────────────
export default function LakewoodRanchSEO() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="lrseo">
        <SiteHeader />

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="hero">
          <div className="wrap hero-grid">
            {/* Left: copy */}
            <div>
              <div className="loc rise"><b />&nbsp;Lakewood Ranch, FL</div>
              <h1 className="rise d1">
                Lakewood Ranch <span className="it">SEO company</span><br />
                for Florida's fastest-growing<br />master-planned community.
              </h1>
              <p className="lead rise d2">
                FactoryJet gets Lakewood Ranch businesses into Google's local 3-pack and AI Overviews.
                The highest buyer-intent market in our dataset. Month-to-month, senior engineers, free audit.
                Serving Manatee and Sarasota County.
              </p>
              <div className="hstat rise d3">
                <div className="n">
                  <span className="star">★</span>&nbsp;5.0
                  <span className="l">/ 500+ clients</span>
                </div>
                <div className="sep" />
                <div className="n">$11.77<span className="l">&nbsp;CPC signal</span></div>
                <div className="sep" />
                <div className="n">7 days<span className="l">&nbsp;to start</span></div>
              </div>
              <div className="cta-row rise d4">
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
            </div>

            {/* Right: blueprint/survey grid visual */}
            <div className="hero-vis float">
              {/* Floating chips */}
              <div className="schip ch1">
                <div className="k">Buyer intent CPC</div>
                <div className="v">$11.77</div>
              </div>
              <div className="schip ch2">
                <div className="cdot" />
                <div className="ct2">Highest in dataset</div>
              </div>

              <div className="surveycard">
                {/* Header */}
                <div className="sv-head">
                  <div className="sv-title">LWR Search Territory Survey</div>
                  <div className="sv-coord">27.41&#176;N 82.39&#176;W</div>
                </div>

                {/* Map area with parcels */}
                <div className="sv-map">
                  {/* Territory parcels */}
                  <div className="parcel p1">Residential North</div>
                  <div className="parcel p2">Commercial</div>
                  <div className="parcel p3 p-you">YOU</div>
                  <div className="parcel p4">Waterside Village</div>
                  <div className="parcel p5">Phase 4 &amp; 5 Expansion</div>

                  {/* Plot markers */}
                  <div className="plotmark p1" />
                  <div className="sv-label l1">HOT</div>

                  <div className="plotmark p2" />
                  <div className="sv-label l2">HOT</div>

                  <div className="plotmark p3" />
                  <div className="sv-label l3">OPEN</div>
                </div>

                {/* Footer */}
                <div className="sv-footer">
                  <div className="stat">
                    <div className="sv-v">65K+</div>
                    <div className="sv-l">residents</div>
                  </div>
                  <div className="sdiv" />
                  <div className="stat">
                    <div className="sv-v">#1</div>
                    <div className="sv-l">US planned community</div>
                  </div>
                  <div className="sdiv" />
                  <div className="stat">
                    <div className="sv-v">$11.77</div>
                    <div className="sv-l">avg CPC</div>
                  </div>
                  <div className="sdiv" />
                  <div className="stat">
                    <div className="sv-v">2030</div>
                    <div className="sv-l">growth projected</div>
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
                <strong>The short version:</strong> Lakewood Ranch has the highest cost-per-click signal in our
                entire 13-city keyword dataset. That number reflects what advertisers know: this community's
                residents are actively searching, affluent, and ready to buy. The local search landscape has
                not yet matured to match that demand. Businesses that invest in organic SEO now will capture
                those buyers at zero per-click cost — and build a compounding advantage that paid ads cannot replicate.
              </p>
            </div>
          </div>
        </section>

        {/* ── DARK STATS ───────────────────────────────────────────────── */}
        <section className="dark">
          <div className="wrap">
            <div className="eyebrow">Lakewood Ranch market data</div>
            <h2>The numbers behind the highest buyer-intent market in Florida.</h2>
            <p className="lead">Real data. Verified sources. This is who you are competing for.</p>
            <div style={{ margin: '40px 0', borderRadius: '20px', overflow: 'hidden' }}>
              <Image
                src="/images/us/lakewood-ranch/seo/lakewood-ranch-seo-hero.webp"
                alt="Lakewood Ranch FL — America's best-selling master-planned community, where affluent new residents search for every service on day one"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="statgrid">
              <div className="scard">
                <div className="n">#1</div>
                <div className="l">Lakewood Ranch is the best-selling master-planned community in the US — for multiple consecutive years running</div>
                <div className="src">RCLCO Real Estate Advisors, Top 50 MPCs Report, 2024</div>
              </div>
              <div className="scard">
                <div className="n">65K+</div>
                <div className="l">Current residents with continued expansion through 2030, adding thousands of new households per year</div>
                <div className="src">Lakewood Ranch Community Authority, 2024</div>
              </div>
              <div className="scard">
                <div className="n">$11.77</div>
                <div className="l">Average cost-per-click for SEO service keywords in Lakewood Ranch — highest buyer-intent signal in the Semrush dataset</div>
                <div className="src">Semrush keyword analysis, 2026</div>
              </div>
              <div className="scard">
                <div className="n">$96K</div>
                <div className="l">Median household income in Manatee County, well above both Florida and national medians</div>
                <div className="src">US Census Bureau ACS, 2023</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHO WE HELP ──────────────────────────────────────────────── */}
        <section>
          <div className="wrap">
            <div className="eyebrow">Who we work with</div>
            <h2>Built for every category new Lakewood Ranch residents search for.</h2>
            <p className="lead">
              From healthcare to home services to professional consulting, every local category
              benefits from capturing the new-resident search wave.
            </p>
            <div style={{ margin: '40px 0', borderRadius: '20px', overflow: 'hidden' }}>
              <Image
                src="/images/us/lakewood-ranch/seo/lakewood-ranch-buyer-intent-dashboard.webp"
                alt="Lakewood Ranch FL buyer intent data dashboard — $11.77 CPC signals the highest purchase-ready search market in Florida"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="grid3">
              {[
                {
                  pill: 'Healthcare & Wellness',
                  h: 'Medical, dental, chiropractic & wellness practices',
                  p: 'New residents immediately search for a new primary care doctor, dentist, and specialist within 90 days of moving. We build GBP presence and content that captures "best [specialty] lakewood ranch" before residents establish loyalty to a competitor.',
                },
                {
                  pill: 'Home Services',
                  h: 'HVAC, landscaping, plumbing & contractors',
                  p: 'New construction communities generate sustained demand for home service professionals. We target both immediate search (new resident service setup) and ongoing search (maintenance and repair) for the full lifecycle of the homeowner relationship.',
                },
                {
                  pill: 'Financial & Legal',
                  h: 'Financial advisors, accountants, attorneys & wealth management',
                  p: 'The affluent retiree and executive demographics in Lakewood Ranch generate some of the highest-value professional services demand in Florida. We build content that captures relocating high-net-worth households specifically.',
                },
                {
                  pill: 'Fitness & Recreation',
                  h: 'Gyms, personal training, yoga & sports facilities',
                  p: 'Active lifestyle is a core identity of the Lakewood Ranch community. Residents search for gyms and fitness studios within weeks of arriving. We build local search presence that captures these searches before a new resident joins a competitor.',
                },
                {
                  pill: 'Restaurants & Dining',
                  h: 'Restaurants, cafes, bakeries & food businesses',
                  p: 'New residents explore their dining options systematically in the first six months. Strong GBP presence and content that answers "best [cuisine] near lakewood ranch" positions your restaurant in the initial discovery phase.',
                },
                {
                  pill: 'Education & Services',
                  h: 'Tutors, childcare, pet services & personal services',
                  p: 'Families moving into Lakewood Ranch search for every recurring personal service simultaneously. Being in the local 3-pack for your category when they search creates a customer relationship that compounds for years.',
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
              We cover all Lakewood Ranch communities and nearby areas:
              <b> Waterside</b>, <b>Azario</b>, <b>Lorraine Lakes</b>, <b>Del Webb</b>,
              <b> University Park</b>, <b>Sarasota</b>, <b>Bradenton</b>, <b>Ellenton</b>,
              <b> Parrish</b>, and <b>North Port</b>.
            </p>
          </div>
        </section>

        {/* ── LISTICLE ─────────────────────────────────────────────────── */}
        <section className="room-peach">
          <div className="wrap">
            <div className="eyebrow">Warning signs</div>
            <h2>7 signs your Lakewood Ranch business is missing the new-resident opportunity.</h2>
            <p className="lead">
              Each one is a revenue leak in the highest buyer-intent market in our dataset.
            </p>
            <div style={{ margin: '40px 0', borderRadius: '20px', overflow: 'hidden' }}>
              <Image
                src="/images/us/lakewood-ranch/seo/lakewood-ranch-new-resident-seo.webp"
                alt="Lakewood Ranch FL new residents searching for local services — the sustained wave of relocating families who need everything within 90 days of moving in"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
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
            <h2>Full-stack SEO built for a growing Florida community.</h2>
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
                  p: 'Core Web Vitals optimization, crawl management, schema markup (LocalBusiness, FAQPage, Service), mobile performance, and structured data for AI citation. Lakewood Ranch buyers skew affluent and tech-savvy — technical quality is a trust signal they notice.',
                },
                {
                  h: 'Google Business Profile management',
                  p: 'Full GBP optimization: photos, service descriptions, weekly posts tied to Lakewood Ranch community events (Farmers Market, concerts, sports), Q&A management, and review velocity strategy. For multi-location businesses, each location managed with local content.',
                },
                {
                  h: 'Lakewood Ranch long-form content',
                  p: 'One to two content pieces per month targeting your highest-value Lakewood Ranch and Sarasota County queries. Structured for Google featured snippets and AI Overviews, with local stats, FAQ schema, and internal links to service pages.',
                },
                {
                  h: 'Florida-specific link building',
                  p: 'Editorial placements in Sarasota Magazine, Bradenton Herald, Lakewood Ranch Lifestyle, Manatee Chamber of Commerce, Visit Sarasota County, and category-specific Florida directories. No paid links.',
                },
                {
                  h: 'AI search optimization for relocation buyers',
                  p: 'Relocating households frequently use ChatGPT and Google AI to research local services before they move. We structure content specifically to be cited in those answers. Being an AI-cited recommendation is a first-mover advantage in a market where residents have no existing brand loyalty.',
                },
                {
                  h: 'Monthly reporting and strategy call',
                  p: 'Tracked calls and form fills from organic, GBP call volume, ranking movement for your primary queries, Core Web Vitals status, and competitor activity. One live call per month with a written plan for the next 30 days.',
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
                alt="FactoryJet founder on a free audit call — 30 minutes that maps your Lakewood Ranch SEO opportunity with zero obligation"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="grid4">
              {[
                { n: '01', h: 'Free audit call', p: '30 minutes. GBP, website health, rankings, and top competitor analysis. You leave with a prioritized action list.' },
                { n: '02', h: 'Scope and kickoff', p: 'Flat monthly fee scoped to your category and goals. Technical baseline in seven days.' },
                { n: '03', h: 'Build and publish', p: 'Technical fixes in weeks one and two. GBP campaign in week two. Content and link building from week three.' },
                { n: '04', h: 'Track, report, adapt', p: 'Monthly performance review, written 30-day plan, competitor monitoring, and a live strategy call.' },
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
            <h2>FactoryJet vs. a traditional Florida agency.</h2>
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
                "We started getting calls from people who had never heard of us before — just found
                us on Google and called. That is exactly what we needed and exactly what FactoryJet delivered."
              </p>
              <div className="byline">
                <div className="avatar">A</div>
                <div>
                  <div className="nm">Arif S — Formative Concepts</div>
                  <div className="ti">MEP and BIM consulting, US market</div>
                </div>
              </div>
            </div>
            <div style={{ margin: '0 0 36px', borderRadius: '20px', overflow: 'hidden' }}>
              <Image
                src="/images/us/lakewood-ranch/seo/lakewood-ranch-affluent-community.webp"
                alt="Lakewood Ranch FL affluent master-planned community — pristine streets, upscale retail, and high-income residents who search for everything locally"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="clients">
              {['Formative Concepts', 'Belle Maison', 'Bombay Petals', 'Impulse Branding', '500+ businesses served'].map(
                (c) => <span key={c}>{c}</span>
              )}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="room-peach">
          <div className="wrap">
            <div className="eyebrow">Questions answered</div>
            <h2>What Lakewood Ranch business owners ask before starting SEO.</h2>
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
              Lakewood Ranch is the highest-intent market in our dataset.<br />
              <span className="it">Let's plant your flag before it fills.</span>
            </h2>
            <p className="lead">
              Free 30-minute audit. We show you where you stand, what competitors are doing,
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
