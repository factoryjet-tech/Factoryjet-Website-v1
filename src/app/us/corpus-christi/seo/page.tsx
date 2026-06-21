/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import './corpus-christi-seo.css';

// ─ Constants ────────────────────────────────────────────────────────────────
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/us/corpus-christi/seo';

// ─ Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Corpus Christi TX SEO Company | Local SEO Services | FactoryJet',
  description:
    'FactoryJet is a Corpus Christi TX SEO company that puts Gulf Coast businesses into Google\'s local 3-pack. Port city local SEO, Google Business Profile, and AI-search optimization. Month-to-month, senior engineers, free audit.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Corpus Christi TX SEO Company | FactoryJet',
    description:
      'Gulf Coast SEO for Corpus Christi businesses. Get into the local 3-pack, dominate "near me" searches, and capture tourists, energy workers, and Coastal Bend residents finding you first.',
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
        q: 'How much does SEO cost for a Corpus Christi small business?',
        a: 'Cost depends on how competitive your category is, how many locations you have, and what state your website is in today. Tourism and hospitality companies in a high-traffic corridor face different demand than a niche industrial supplier near the Port. We scope every engagement individually, give you a flat monthly fee upfront, and never add hourly charges or surprise add-ons. Book a free 30-minute call and we will scope it for you with no obligation.',
      },
      {
        q: 'How long before I see results from local SEO in Corpus Christi?',
        a: 'Google Business Profile improvements typically show movement in four to eight weeks. Organic ranking shifts for competitive queries like "seo company corpus christi" usually take three to five months. AI overview citations can appear faster if your content directly answers specific questions. We track every signal weekly and show you what is moving and why.',
      },
      {
        q: 'Do I have to sign a long-term contract?',
        a: 'No. Every FactoryJet engagement is month-to-month. We stay because results keep you here, not a contract clause. You can pause or cancel with 30 days notice at any point.',
      },
      {
        q: 'Is there a setup fee or onboarding cost?',
        a: 'No setup fee. We do a full technical and competitive audit as part of kickoff at no additional charge. The monthly fee covers everything: strategy, content, link building, GBP management, reporting, and a monthly call.',
      },
    ],
  },
  {
    id: 'market',
    label: 'Corpus Christi market',
    count: 4,
    items: [
      {
        q: 'Why is local SEO especially important in Corpus Christi?',
        a: 'Corpus Christi has three distinct buyer pools layered on top of each other: 316,000 permanent residents, roughly 5.7 million annual tourists and day visitors, and a large rotating workforce tied to the Port and the petrochemical corridor. All three groups search "near me" on mobile. The businesses that own those local 3-pack results capture customers from every layer. A well-optimized GBP alone can double inbound calls without a single dollar in ads.',
      },
      {
        q: 'Which Corpus Christi neighborhoods and areas matter most for local SEO?',
        a: 'Coverage priority depends on your business, but the highest-traffic search zones are Downtown / Uptown, North Beach, Padre Island, Flour Bluff, Portland, Robstown, Calallen, and the South Side. Industrial and energy services businesses also need to rank for searches originating from Port Aransas, Gregory-Portland, and Aransas Pass. We map keyword volume to geography so you are not spending budget chasing areas where your target customers do not actually search from.',
      },
      {
        q: 'Does the tourism seasonality in Corpus Christi affect SEO strategy?',
        a: 'Yes, and it is a real advantage if you plan for it. Search volume for tourism-adjacent categories spikes April through September and again around spring break. We build content and GBP posts aligned to that calendar so your business captures the surge rather than missing it. For year-round service businesses, we focus on the off-season to build ranking authority before the surge arrives.',
      },
      {
        q: 'How does the Port of Corpus Christi affect the local SEO competitive landscape?',
        a: 'The Port drives a large B2B search market: logistics, marine services, industrial equipment, staffing, food service, and professional services are all heavily searched by people affiliated with port operations. That B2B layer is less saturated than the consumer market and tends to have higher average transaction values. If your business serves the energy, marine, or industrial sectors, we can target those commercial-intent queries specifically.',
      },
    ],
  },
  {
    id: 'included',
    label: 'What is included',
    count: 4,
    items: [
      {
        q: 'What does FactoryJet actually do every month for SEO?',
        a: 'Each month we do: technical SEO health checks (Core Web Vitals, crawl issues, schema), one to two long-form content pieces targeting high-intent Corpus Christi queries, Google Business Profile posts and Q&A management, local citation audits and cleanup, internal linking improvements, a monthly performance call, and a plain-English report showing ranking movement, calls tracked, and traffic source breakdown.',
      },
      {
        q: 'Do you manage Google Business Profile?',
        a: 'Yes. GBP optimization is one of the fastest ways to move in local search. We set up or audit your profile, add photos, write keyword-optimized service descriptions, publish weekly posts, monitor and respond to questions, and flag review trends. If you have multiple locations across the Coastal Bend, we manage each one separately with location-specific content.',
      },
      {
        q: 'Do you handle link building for Corpus Christi businesses?',
        a: 'Yes. Local link building in the Corpus Christi market includes outreach to local media (Caller-Times, KRIS, KZTV), the Corpus Christi Chamber of Commerce, industry-specific directories for the energy and tourism sectors, and Coastal Bend regional business publications. We do not buy links. Every placement is editorial and relevant.',
      },
      {
        q: 'Do you optimize for AI search and Google\'s AI Overviews?',
        a: 'Yes. We structure every content piece to answer the exact question format that AI Overviews quote from. That means answer-first paragraphs, FAQ schema, entity markup, and verified stats with sourced citations. Corpus Christi businesses that publish authoritative content on Gulf Coast-specific topics get cited faster because there is less competition for those specific entity associations.',
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
        a: 'Senior engineers and content strategists with 25+ years of combined web and search experience. You work directly with the people building your campaign. There are no junior account managers acting as go-betweens, and there are no outsourced black-box vendors in the workflow. Bhavesh Barot, the founder, is personally involved in strategy for every account.',
      },
      {
        q: 'What happens to my Google accounts and data if I leave?',
        a: 'You own everything. Your Google Search Console, Google Business Profile, GA4, and any content we produce all belong to you. We add ourselves as contributors, not owners, and we remove our access cleanly at the end of any engagement. There is no lock-in on data or access.',
      },
      {
        q: 'How do you report results and what metrics actually matter?',
        a: 'We care about calls and form fills, not just ranking screenshots. Monthly reports cover: tracked phone calls from organic, GBP call volume, organic form submissions, ranking movement for your primary and secondary keywords, Core Web Vitals status, and the tasks completed that month. We also show you what competitors changed so you understand the context behind any movement.',
      },
      {
        q: 'Have you worked with businesses similar to mine in the Gulf Coast market?',
        a: 'We have served 500+ businesses across the US including tourism and hospitality, energy services, marine, healthcare, professional services, and retail. The Corpus Christi market is structurally similar to other port cities we have worked in: layered buyer types, seasonal surges, and a B2B sector that sits beside the consumer market. We apply that cross-market pattern recognition to your specific category.',
      },
    ],
  },
  {
    id: 'start',
    label: 'Getting started',
    count: 4,
    items: [
      {
        q: 'What happens in the free audit call?',
        a: 'We spend 30 minutes on your current Google Business Profile, your website technical health, what you rank for now, and what your top three competitors are doing that you are not. You walk away with a clear picture of your biggest opportunities ranked by effort and expected impact. No sales pitch, no pressure. If we are a fit, we scope an engagement. If we are not, we tell you honestly.',
      },
      {
        q: 'How quickly can you start?',
        a: 'We can begin technical work within seven days of signing. Content and GBP campaigns start in week two once we have verified access to your accounts and completed the competitor mapping. Full campaign rhythm is established by week four.',
      },
      {
        q: 'Do I need to have a website already?',
        a: 'A website helps, but we can start with GBP optimization and local citation building immediately. If your website needs a rebuild, FactoryJet also builds high-performance websites in seven days, so we can run both tracks in parallel without adding a second vendor.',
      },
      {
        q: 'What if I am already working with another SEO agency in Corpus Christi?',
        a: 'We do competitive audits for clients switching agencies regularly. Before you make a change, request a full export of your account data and a reporting summary from your current agency. Then let us show you what we would do differently. We can compare approaches side by side on the free call with no commitment required.',
      },
    ],
  },
];

// ─ Listicle ──────────────────────────────────────────────────────────────────
const LISTICLE: { n: string; h: string; p: string }[] = [
  {
    n: '01',
    h: 'Tourists search "near me" and find your competitors first',
    p: 'With 5.7 million annual visitors to the Corpus Christi area, ranking in the local 3-pack for even a narrow category can generate a consistent stream of first-time customers who have never heard of you before.',
  },
  {
    n: '02',
    h: 'Your Google Business Profile was set up once and never touched',
    p: 'An unclaimed or incomplete GBP suppresses your local ranking directly. Photos, service descriptions, weekly posts, and Q&A activity all feed the algorithm signals that determine whether you appear or not.',
  },
  {
    n: '03',
    h: 'You show up for your business name but nothing else',
    p: 'Branded searches only reach people who already know you. Local SEO opens the top of the funnel: people searching "corpus christi [service]" who have never heard your name but are ready to buy today.',
  },
  {
    n: '04',
    h: 'Your site loads slowly on a mobile phone with a weaker connection',
    p: 'Visitors browsing from the beach, from Padre Island, or from the North Beach corridor are on mobile with variable signal. A slow site kills conversions and directly hurts your Core Web Vitals ranking signals.',
  },
  {
    n: '05',
    h: 'Energy sector and Port-related buyers cannot find you through Google',
    p: 'B2B search from the Port, the refineries, and the industrial corridor uses specific commercial-intent queries that are lightly contested. Without targeted content, you are invisible to buyers with the highest transaction values in the market.',
  },
  {
    n: '06',
    h: 'You spent money on ads but stopped because the ROI felt unstable',
    p: 'Paid search requires constant budget to maintain visibility. Organic rankings compound over time. A business that builds strong local SEO in Corpus Christi today will have lower customer acquisition costs in year two and three than any competitor still relying purely on paid.',
  },
  {
    n: '07',
    h: 'Your reviews are solid but your competitors have more of them recently',
    p: 'Review velocity matters more than total count. Google prioritizes recency. If competitors are getting five reviews a month and you are getting one, you will slide in local pack rankings over time regardless of your average star rating.',
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
      name: 'Corpus Christi TX Local SEO Services',
      provider: { '@id': 'https://factoryjet.com/#org' },
      areaServed: {
        '@type': 'City',
        name: 'Corpus Christi',
        containedInPlace: { '@type': 'State', name: 'Texas' },
      },
      description:
        'Local SEO for Corpus Christi TX businesses: Google Business Profile optimization, local 3-pack ranking, AI-search citation, and technical SEO.',
    },
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#page`,
      url: CANONICAL,
      name: 'Corpus Christi TX SEO Company | FactoryJet',
      isPartOf: { '@id': 'https://factoryjet.com/#site' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
          { '@type': 'ListItem', position: 2, name: 'US Services', item: 'https://factoryjet.com/us' },
          { '@type': 'ListItem', position: 3, name: 'Corpus Christi', item: 'https://factoryjet.com/us/corpus-christi' },
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
export default function CorpusChristiSEO() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="ccseo">
        <SiteHeader />

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="hero">
          <div className="wrap hero-grid">
            {/* Left: copy */}
            <div>
              <div className="loc rise"><b />&nbsp;Corpus Christi, TX</div>
              <h1 className="rise d1">
                Corpus Christi <span className="it">SEO company</span> that<br />
                puts Gulf Coast businesses<br />on the local map.
              </h1>
              <p className="lead rise d2">
                FactoryJet gets Corpus Christi businesses into Google's local 3-pack and AI Overviews.
                Month-to-month, senior engineers, free audit. Serving the Coastal Bend and Port industries.
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

            {/* Right: harbor/sonar visual */}
            <div className="hero-vis float">
              {/* Floating chips */}
              <div className="schip ch1">
                <div className="k">Monthly searches</div>
                <div className="v">320 / mo</div>
              </div>
              <div className="schip ch2">
                <div className="cdot" />
                <div className="ct2">Low competition</div>
              </div>

              <div className="harborchart">
                {/* Sonar disc */}
                <div className="sonardisc">
                  {/* Rings */}
                  <div className="sring r1" />
                  <div className="sring r2" />
                  <div className="sring r3" />
                  {/* Sweep arm */}
                  <div className="sonarsweep" />
                  {/* Pulse */}
                  <div className="sonarpulse" />
                  {/* Competitor dots */}
                  <div className="sdot c1" />
                  <div className="sdot c2" />
                  <div className="sdot c3" />
                  {/* YOU dot */}
                  <div className="sdot you" />
                  <div className="syou">YOU</div>
                </div>

                {/* Stats strip */}
                <div className="sonarinfo">
                  <div className="si-item">
                    <div className="si-val">316K</div>
                    <div className="si-lbl">residents</div>
                  </div>
                  <div className="si-div" />
                  <div className="si-item">
                    <div className="si-val">5.7M</div>
                    <div className="si-lbl">visitors / yr</div>
                  </div>
                  <div className="si-div" />
                  <div className="si-item">
                    <div className="si-val">#5</div>
                    <div className="si-lbl">US port</div>
                  </div>
                  <div className="si-div" />
                  <div className="si-item">
                    <div className="si-val">KD 10</div>
                    <div className="si-lbl">low difficulty</div>
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
                <strong>The short version:</strong> Corpus Christi has 316,000 permanent residents, 5.7 million annual visitors,
                and one of the largest port complexes on the Gulf Coast — and the local 3-pack for most service categories
                has fewer than three fully optimized competitors. That means a well-run SEO campaign can move you into the
                top results within months, not years. We have done it for 500+ businesses. We can do it for yours.
              </p>
            </div>
          </div>
        </section>

        {/* ── DARK STATS ───────────────────────────────────────────────── */}
        <section className="dark">
          <div className="wrap">
            <div className="eyebrow">Corpus Christi market data</div>
            <h2>The numbers behind the opportunity.</h2>
            <p className="lead">Real data. Verified sources. This is the market you are competing in.</p>
            <div style={{ margin: '40px 0', borderRadius: '20px', overflow: 'hidden' }}>
              <Image
                src="/images/us/corpus-christi/seo/corpus-christi-seo-hero.webp"
                alt="Corpus Christi TX harbor and downtown — the Gulf Coast port city where energy, tourism, and local commerce converge"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="statgrid">
              <div className="scard">
                <div className="n">316K</div>
                <div className="l">Corpus Christi population, making it the 8th largest city in Texas</div>
                <div className="src">US Census Bureau, 2024</div>
              </div>
              <div className="scard">
                <div className="n">5.7M</div>
                <div className="l">Annual visitors to the Corpus Christi metro — tourism is a $1.5B+ economic driver</div>
                <div className="src">Visit Corpus Christi / TxDOT, 2023</div>
              </div>
              <div className="scard">
                <div className="n">#5</div>
                <div className="l">Rank of the Port of Corpus Christi among all US ports by export tonnage</div>
                <div className="src">American Association of Port Authorities, 2024</div>
              </div>
              <div className="scard">
                <div className="n">46%</div>
                <div className="l">Share of local business searches that result in a call or visit within 24 hours</div>
                <div className="src">Google / Ipsos Local Search Study</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHO WE HELP ──────────────────────────────────────────────── */}
        <section>
          <div className="wrap">
            <div className="eyebrow">Who we work with</div>
            <h2>Built for businesses across the Coastal Bend.</h2>
            <p className="lead">
              From North Beach hospitality to South Side industrial suppliers, local SEO compounds for any category
              with a local search audience.
            </p>
            <div style={{ margin: '40px 0', borderRadius: '20px', overflow: 'hidden' }}>
              <Image
                src="/images/us/corpus-christi/seo/corpus-christi-local-seo-business.webp"
                alt="Corpus Christi TX business owners across the Coastal Bend — hospitality, marine, energy, and retail all run on local search"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="grid3">
              {[
                {
                  pill: 'Tourism & Hospitality',
                  h: 'Hotels, vacation rentals & restaurants',
                  p: 'Capture spring breakers, summer visitors, and year-round locals. We optimize GBP, manage review velocity, and build content around the seasonal search spikes that drive your revenue.',
                },
                {
                  pill: 'Energy & Industrial',
                  h: 'Contractors, suppliers & services near the Port',
                  p: 'The Port and refinery corridor generates a steady B2B search market with low competition and high average deal sizes. We target commercial-intent queries that generalist agencies ignore.',
                },
                {
                  pill: 'Healthcare & Clinics',
                  h: 'Medical, dental & wellness practices',
                  p: 'Corpus Christi patients search by neighborhood and specialty. We build landing pages for Calallen, Padre Island, Portland, and other distinct sub-markets so every coverage area ranks independently.',
                },
                {
                  pill: 'Retail & DTC',
                  h: 'Local shops, boutiques & service retailers',
                  p: 'Tourists searching from hotel rooms represent impulse-purchase opportunities. We get your retail location into the maps results that appear on those mobile searches before they leave the island.',
                },
                {
                  pill: 'Professional Services',
                  h: 'Law, accounting, real estate & consulting',
                  p: 'Corpus Christi has a growing professional class connected to the energy and logistics industry. We position your practice for the high-value client segments moving into the market.',
                },
                {
                  pill: 'Marine & Waterfront',
                  h: 'Boat repair, charter, diving & marine services',
                  p: 'The waterfront economy has specific, navigable search terms that rank quickly with the right content. We map every keyword cluster in your niche and build content coverage systematically.',
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
              We cover all Corpus Christi areas: <b>Downtown / Uptown</b>, <b>North Beach</b>, <b>Padre Island</b>,
              <b> Flour Bluff</b>, <b>Calallen</b>, <b>South Side</b>, <b>Portland</b>, <b>Robstown</b>,
              <b> Port Aransas</b>, <b>Rockport</b>, <b>Aransas Pass</b>, and surrounding Coastal Bend communities.
            </p>
          </div>
        </section>

        {/* ── LISTICLE ─────────────────────────────────────────────────── */}
        <section className="room-peach">
          <div className="wrap">
            <div className="eyebrow">Warning signs</div>
            <h2>7 signs your Corpus Christi business is losing customers to Google right now.</h2>
            <p className="lead">
              Each one of these costs you real revenue. Most can be fixed in the first 60 days of a focused SEO campaign.
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
            <h2>Everything a Gulf Coast business needs to rank and grow.</h2>
            <p className="lead">
              No package tiers, no feature gates. One flat engagement that covers the full SEO stack.
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
                  p: 'Core Web Vitals optimization, crawl-budget management, schema markup (LocalBusiness, FAQPage, Service), mobile performance, and structured data for AI citation. Your website has to be technically clean before content can compound.',
                },
                {
                  h: 'Google Business Profile management',
                  p: 'Full GBP optimization: photos, service descriptions, weekly posts, Q&A, attribute updates, and review strategy. For multi-location businesses across the Coastal Bend, each location is managed as its own entity with location-specific content.',
                },
                {
                  h: 'Long-form local content',
                  p: 'One to two in-depth content pieces per month targeting your highest-value Corpus Christi queries. Each piece is structured for Google\'s featured snippets and AI Overviews, with verified local stats, FAQ schema, and internal linking to your service pages.',
                },
                {
                  h: 'Local citation and link building',
                  p: 'NAP consistency across 40+ directories, outreach to local media (Caller-Times, KRIS-TV, KZTV), Chamber of Commerce placement, and industry-specific citations in the energy, tourism, and marine sectors. Zero paid links.',
                },
                {
                  h: 'AI search and GEO optimization',
                  p: 'Every piece of content is structured to be cited in Google AI Overviews, Perplexity, ChatGPT, and other AI search surfaces. Entity markup, answer-first formatting, and verified source attribution all increase citation probability within the first 90 days.',
                },
                {
                  h: 'Monthly reporting and strategy call',
                  p: 'You see tracked calls, form fills, ranking movement for your primary queries, GBP call volume, Core Web Vitals status, and competitor activity. One live call per month to discuss what the data means and what we are doing next.',
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
            <h2>From audit to ranking in four clear steps.</h2>
            <div style={{ margin: '40px 0', borderRadius: '20px', overflow: 'hidden' }}>
              <Image
                src="/images/us/shared/factoryjet-audit-call.webp"
                alt="FactoryJet founder on a free audit call — 30 minutes that maps your Corpus Christi SEO opportunity with zero obligation"
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
                  p: '30 minutes. We audit your GBP, website health, current rankings, and what your top three Corpus Christi competitors are doing differently. You leave with a clear picture regardless of whether we work together.',
                },
                {
                  n: '02',
                  h: 'Scope and kickoff',
                  p: 'We scope a flat-fee engagement based on your market, category, and goals. Access setup and technical baseline take seven days. No delays, no bureaucracy.',
                },
                {
                  n: '03',
                  h: 'Build and publish',
                  p: 'Technical fixes ship in weeks one and two. GBP campaign launches in week two. Content and link building run from week three onward on a consistent monthly cadence.',
                },
                {
                  n: '04',
                  h: 'Track, report, adapt',
                  p: 'Monthly performance review against your specific Corpus Christi market. We adjust targeting based on what is moving and bring you a written plan for the next 30 days.',
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
            <h2>FactoryJet vs. a traditional agency.</h2>
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
              Real client results, real business owners, real industries served across 10+ years of doing this work.
            </p>
            <div className="quote">
              <p>
                "We went from page three to the local 3-pack in under 90 days. The team is senior, the communication
                is clear, and the results track to actual calls and bookings, not just ranking screenshots."
              </p>
              <div className="byline">
                <div className="avatar">V</div>
                <div>
                  <div className="nm">Vishal, Impulse Branding</div>
                  <div className="ti">MEP and print branding solutions</div>
                </div>
              </div>
            </div>
            <div style={{ margin: '0 0 36px', borderRadius: '20px', overflow: 'hidden' }}>
              <Image
                src="/images/us/corpus-christi/seo/corpus-christi-port-economy.webp"
                alt="Corpus Christi TX port and energy economy — the Gulf Coast market where local SEO converts search intent into high-value clients"
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
            <h2>Everything Corpus Christi business owners ask before starting SEO.</h2>
            <div className="faqgrid">
              {/* Nav */}
              <nav aria-label="FAQ categories">
                <div className="faqnav">
                  {FAQ_GROUPS.map((g) => (
                    <a href={`#faq-${g.id}`} key={g.id}>
                      {g.label}<span className="ct">{g.count}</span>
                    </a>
                  ))}
                </div>
                <p className="faqhelp">
                  Still have questions? <a href={CALENDLY} target="_blank" rel="noopener noreferrer">Book a free call</a> and
                  we will answer them live, no sales pitch.
                </p>
              </nav>
              {/* Answers */}
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
              Let's put your Corpus Christi business<br />
              on the <span className="it">map that pays.</span>
            </h2>
            <p className="lead">
              Free 30-minute audit. We show you exactly where you stand, what your competitors are doing,
              and the three moves that will have the biggest impact. No obligation, no pressure.
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
