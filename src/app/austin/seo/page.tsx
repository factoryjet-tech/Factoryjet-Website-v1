import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import EnterpriseArchitectureBlueprint from '@/components/v2/EnterpriseArchitectureBlueprint';
import SeoCityLinksUS from '@/components/v2/SeoCityLinksUS';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-08-24';
const CANONICAL = 'https://factoryjet.com/austin/seo';

export const metadata: Metadata = {
  title: 'Austin SEO Company & Local SEO Agency TX | FactoryJet',
  description:
    'Austin SEO company and agency. No-contract local SEO, Google Map Pack rankings, AI answer citations, and technical Core Web Vitals for Austin TX.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Austin SEO Company & Local SEO Agency TX | FactoryJet',
    description:
      'Austin SEO company built for the most crowded market in Texas. No-contract local SEO, technical SEO, and an engineer who talks to you directly.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Austin SEO Company & Agency' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Austin SEO Company & Local SEO Agency TX | FactoryJet',
    description: 'Local and technical SEO in Austin TX. Win the Google Map Pack and AI search citations.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const PARTNERS = [
  'Google Search Console',
  'DataForSEO API',
  'Screaming Frog Enterprise',
  'BrightLocal Certified',
  'SEMrush Partner',
  'Next.js 15 & React',
  'Cloudflare Edge CDN',
  'Google Analytics 4',
];

const STAT_CARDS = [
  { num: '44%', title: 'Map Pack Clicks', desc: 'Clicks captured by the top 3 Google local profiles in Austin search queries.', icon: '📍' },
  { num: '8,740+', title: 'Monthly Local Demand', desc: 'Verified monthly searches across Austin SEO agency and consultant queries.', icon: '📈' },
  { num: '42,000+', title: 'Local Competitors', desc: 'Registered Austin SMBs competing for local visibility in Texas.', icon: '🏢' },
  { num: '100%', title: 'Direct Engineer Access', desc: 'Month-to-month terms with direct access to senior technical engineers.', icon: '⚡' },
];

const DISTRICTS = [
  {
    corridor: 'Downtown & The Capitol',
    query: 'lawyer near me austin',
    focus: 'Law Firms, Financial Services & Hospitality',
    desc: 'High-density commercial corridor packed around Congress Avenue, Rainey Street, and Seaholm. Searches happen from mobile devices and executive offices, where 44% of calls go directly to the top 3 Map Pack listings.',
  },
  {
    corridor: 'The Domain & Parmer Lane',
    query: 'technical seo austin',
    focus: 'Tech Startups, SaaS & Enterprise B2B',
    desc: 'The Silicon Hills tech artery housing Apple, Dell, and hundreds of high-growth software firms along MoPac and 183. Buyers skip sponsored ads on reflex and evaluate documentation, speed, and architectural depth.',
  },
  {
    corridor: 'East Austin & Mueller',
    query: 'best tacos east austin',
    focus: 'Creative Studios, Restaurants & Lifestyle',
    desc: 'Fast-moving, visual discovery along Cesar Chavez and Mueller. Fresh high-resolution photo uploads, correct opening hours, menu schema markup, and steady review generation outperform standard generic copy.',
  },
  {
    corridor: 'South Congress & Zilker',
    query: 'boutique south congress',
    focus: 'Retail, Wellness & Experiential Brands',
    desc: 'Iconic consumer and tourist hotspots along SoCo and Barton Springs. Search volumes spike around SXSW in March, Austin City Limits (ACL) in October, and Formula 1 at Circuit of the Americas.',
  },
  {
    corridor: 'Northwest Hills & Arboretum',
    query: 'dentist near me austin tx',
    focus: 'Healthcare, Dental & Private Practices',
    desc: 'Affluent professional services corridor along Loop 360 and 183. Highly winnable search territory where commercial intent is strong and many medical practices operate outdated Google Business Profiles.',
  },
  {
    corridor: 'Williamson County & Round Rock',
    query: 'ac repair round rock',
    focus: 'Home Services, Contractors & Multi-Location',
    desc: 'Rapidly expanding northern suburbs around Samsung Taylor, Cedar Park, and Georgetown. Winning multi-location local search requires unique geographic service pages rather than thin cookie-cutter templates.',
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Breaking Through the Google 3-Pack Barrier in Crowded Austin Sectors',
    problem: '42,000+ Austin businesses fight for the same top 3 Google Map Pack spots. Generic directory spam and neglected profiles sit invisible on page two.',
    solution: 'We execute comprehensive Google Business Profile optimization, primary category audits, geotagged photo feeds, and automated review velocity systems.',
  },
  {
    num: '02',
    title: 'Fixing Hidden Technical Debt That Blocks Organic Rankings and AI Overviews',
    problem: 'Slow WordPress themes, bloated plugins, and missing schema markup prevent search engines and AI assistants from indexing your service authority.',
    solution: 'We engineer sub-second Core Web Vitals, JSON-LD entity schema, and single-hop crawl architecture to earn top organic ranks and Google AI Overview citations.',
  },
  {
    num: '03',
    title: 'Ending Locked Agency Retainers with Zero Transparent Lead Attribution',
    problem: 'Traditional agencies lock Austin businesses into 12-month contracts while delivering meaningless vanity keyword screenshots instead of qualified leads.',
    solution: 'FactoryJet operates on flexible month-to-month agreements. We track real phone calls, form completions, and qualified pipeline revenue with custom GA4 events.',
  },
  {
    num: '04',
    title: 'Capturing High-Value Geo-Targeted Commercial Keywords Across Austin Corridors',
    problem: 'Relying solely on broad city-level terms causes businesses to miss high-intent neighborhood searches across Round Rock, The Domain, and Westlake.',
    solution: 'We build structured local service area landing pages and localized content silos that capture micro-corridor search volume throughout Central Texas.',
  },
];

const RIVALS = [
  {
    name: 'TastyPlacement',
    metric: 'Local Incumbent',
    desc: 'An established Austin SEO firm with deep roots in Central Texas. They represent a respected local benchmark for traditional search marketing.',
  },
  {
    name: 'Thrive Agency',
    metric: 'National Multi-City Network',
    desc: 'A large national agency managing thousands of accounts nationwide. Great brand reach, though client work is typically delegated through account managers.',
  },
  {
    name: 'Built In Austin',
    metric: 'Directory Authority',
    desc: 'A tech community and jobs directory that ranks naturally on domain authority. Capturing positions alongside directories requires structured entity citations.',
  },
  {
    name: 'Straight North',
    metric: 'National Lead-Gen Agency',
    desc: 'A performance-focused Chicago firm operating nationally. They focus on lead validation and high-volume paid and organic acquisition funnels.',
  },
];

const WORKING_STEPS = [
  {
    n: '01',
    t: 'Comprehensive Austin Market & Competitor Audit',
    d: 'We analyze your current rankings, Google Business Profile health, Core Web Vitals, backlink profile, and top local competitors in your Austin corridor.',
    icon: '🔍',
  },
  {
    n: '02',
    t: 'Technical SEO & Core Web Vitals Optimization',
    d: 'We repair slow server response times, eliminate render-blocking scripts, fix crawl errors, and implement exhaustive JSON-LD LocalBusiness schema.',
    icon: '⚙️',
  },
  {
    n: '03',
    t: 'Google Business Profile & Map Pack Acceleration',
    d: 'We optimize primary categories, secondary service menus, business descriptions, high-resolution visual assets, and local review collection systems.',
    icon: '📍',
  },
  {
    n: '04',
    t: 'Localized Corridor Content & Entity Building',
    d: 'We write deep, answer-first landing pages tailored to specific Austin districts and surrounding towns from Round Rock to Buda and Lakeway.',
    icon: '✍️',
  },
  {
    n: '05',
    t: 'Live Attribution & Continuous Month-to-Month Growth',
    d: 'We deliver transparent monthly reporting tracking real phone calls, form submissions, revenue growth, and AI citation visibility across ChatGPT and Google.',
    icon: '📈',
  },
];

const FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Pricing & Contracts' },
  { key: 'local', label: 'Local Map Pack & GBP' },
  { key: 'technical', label: 'Technical SEO & AI' },
  { key: 'timeline', label: 'Timeline & ROI' },
];

const FAQ_ITEMS = [
  {
    category: 'pricing',
    question: 'How much does SEO cost in Austin TX?',
    answer:
      'Austin SEO services typically range from $1,500 to $5,000 per month depending on industry competitiveness, number of business locations, and technical site condition. FactoryJet operates on month-to-month agreements with no long-term contract lock-ins and starts with a comprehensive free technical audit.',
  },
  {
    category: 'pricing',
    question: 'Why do you offer month-to-month terms instead of 12-month contracts?',
    answer:
      'We believe client retention should be earned through measurable lead generation and ranking improvements rather than legal lock-ins. Month-to-month agreements keep our engineering team accountable to driving real business pipeline every 30 days.',
  },
  {
    category: 'pricing',
    question: 'How do I compare quotes from different Austin SEO companies?',
    answer:
      'Compare deliverables, team seniority, and account ownership. Verify whether technical code fixes are included or billed extra, whether you will speak directly with an engineer or an account manager, and confirm that you retain 100% ownership of your content, code, and analytics data.',
  },
  {
    category: 'local',
    question: 'How do we get our Austin business into the Google 3-Pack Map results?',
    answer:
      'Winning the Google Map Pack requires an accurate primary category selection, complete service menus, consistent Name-Address-Phone (NAP) citations, steady customer review acquisition, and high domain authority from a fast, technically optimized website.',
  },
  {
    category: 'local',
    question: 'Can you rank our business in surrounding towns like Round Rock, Cedar Park, and Georgetown?',
    answer:
      'Yes. We architect dedicated geographic service area landing pages and localized schema markup targeting Central Texas suburbs including Round Rock, Pflugerville, Cedar Park, Lakeway, Buda, and San Marcos.',
  },
  {
    category: 'local',
    question: 'How important are Google reviews for Austin local rankings?',
    answer:
      'Google reviews are one of the strongest direct ranking factors for local search. We help your business implement frictionless post-service SMS and email review collection workflows that consistently generate verified 5-star customer feedback.',
  },
  {
    category: 'technical',
    question: 'What is technical SEO and why is it essential for Austin businesses?',
    answer:
      'Technical SEO optimizes site architecture, mobile responsiveness, server speed, Core Web Vitals, and structured JSON-LD schema markup. Without a strong technical foundation, Google and AI search engines cannot crawl or rank your content effectively.',
  },
  {
    category: 'technical',
    question: 'How do you optimize Austin websites for Google AI Overviews and ChatGPT search?',
    answer:
      'We format content using answer-first prose, authoritative factual data, structured schema entities, and clean semantic HTML. This enables AI search engines like Perplexity, ChatGPT Search, and Google AI Overviews to parse and quote your brand directly.',
  },
  {
    category: 'timeline',
    question: 'How long does it take to see organic ranking improvements in Austin?',
    answer:
      'Initial technical fixes and low-competition neighborhood keyword wins typically show results within 60 to 90 days. Competitive high-volume head terms and stable top-3 Map Pack placements generally mature within 4 to 6 months of continuous optimization.',
  },
  {
    category: 'timeline',
    question: 'How do you track and report SEO return on investment (ROI)?',
    answer:
      'We track real commercial outcomes: phone call leads, form submissions, online appointment bookings, and organic revenue via custom Google Analytics 4 event tracking and Google Search Console data.',
  },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'FactoryJet - Austin SEO Company & Local Agency',
  image: 'https://factoryjet.com/og-default.png',
  url: CANONICAL,
  telephone: '+1-832-998-8422',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 30.2672,
    longitude: -97.7431,
  },
  areaServed: [
    { '@type': 'City', name: 'Austin' },
    { '@type': 'City', name: 'Round Rock' },
    { '@type': 'City', name: 'Cedar Park' },
    { '@type': 'City', name: 'Pflugerville' },
    { '@type': 'City', name: 'Georgetown' },
    { '@type': 'City', name: 'Lakeway' },
  ],
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Austin SEO Services & Local Search Optimization',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Local SEO, Technical SEO & AI Search Optimization',
  description:
    'Senior engineering-led local SEO, Google Map Pack rankings, technical Core Web Vitals optimization, and AI answer citations for Austin businesses.',
  areaServed: { '@type': 'State', name: 'Texas' },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Austin SEO Company & Local SEO Agency TX | FactoryJet',
  description: 'No-contract local SEO, Google Map Pack rankings, and technical SEO for Austin TX businesses.',
  url: CANONICAL,
  dateModified: PAGE_MODIFIED,
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/' },
    { '@type': 'ListItem', position: 2, name: 'Austin', item: 'https://factoryjet.com/austin/web-design' },
    { '@type': 'ListItem', position: 3, name: 'SEO', item: CANONICAL },
  ],
};

export default function AustinSeoPage() {
  return (
    <>
      <script id="austin-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="austin-local-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      <script id="austin-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="austin-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="austin-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">

        {/* ── 01. RITOVEX HERO BANNER SECTION ── */}
        <section className="pp-sec" style={{ paddingTop: 'clamp(44px, 7vh, 88px)', paddingBottom: 'clamp(44px, 6vh, 72px)', background: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div className="rv-hero-wrap">
              
              {/* Left Column Typography */}
              <div>
                <div className="rv-badge" style={{ marginBottom: '18px' }}>
                  <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                  </svg>
                  <span>Austin Local &amp; Technical SEO</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Austin SEO Company &amp; Local Search Agency
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  Win the Google 3-Pack Map results, dominate high-intent Austin search terms, and earn citations across AI search engines. No long-term contracts. Talk directly with senior technical engineers.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Claim Free Austin SEO Audit" region="us" btnVariant="primary-dark" />
                  <a href="#austin-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Austin Districts</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame (Edge-to-Edge) */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/austin/hero-austin.webp"
                  alt="Austin Texas downtown skyline and business corridor local SEO technology"
                  width={640}
                  height={640}
                  priority
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

            </div>
          </div>
        </section>

        {/* ── 02. RITOVEX PARTNERS / TECHNOLOGY MARQUEE TICKER ── */}
        <section style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC', padding: '36px 0' }}>
          <div className="pp-wrap">
            <div className="rv-ticker-header">
              <div className="rv-ticker-line" />
              <div className="rv-ticker-label">Enterprise Austin SEO &amp; Data Stack</div>
              <div className="rv-ticker-line" />
            </div>
            
            <div className="rv-marquee-wrapper">
              <div className="rv-marquee">
                {PARTNERS.concat(PARTNERS).map((p, idx) => (
                  <div key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '36px' }}>
                    <span style={{ fontSize: '14.5px', fontWeight: 700, color: '#141414', letterSpacing: '-0.01em' }}>
                      {p}
                    </span>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FF5622' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 03. RITOVEX ABOUT US & 2x2 BENTO COUNTER SECTION ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(56px, 8vh, 96px) 0' }}>
          <div className="pp-wrap">
            <div className="rv-about-grid">
              
              {/* Left Column: Clean Organic Curved Photo Frame (Edge-to-Edge) */}
              <div className="rv-curved-frame-2">
                <Image
                  src="/images/us/austin/austin-local-seo-near-me.webp"
                  alt="FactoryJet senior SEO technical engineers auditing Austin Google Map Pack and local citations"
                  width={640}
                  height={640}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Right Column: 2x2 Bento Counter Grid + Discovery CTA Button */}
              <div>
                <div className="rv-badge" style={{ marginBottom: '14px' }}>
                  <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                  </svg>
                  <span>Austin Market Reality</span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
                  Engineered for Results in Texas&apos;s Most Competitive Market
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  With over 42,000 local businesses in Austin, standard keyword stuffing fails. We combine Core Web Vitals speed optimization, Google Business Profile dominance, and localized corridor authority so your brand captures real buyer demand.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                  {STAT_CARDS.map((s) => (
                    <div className="rv-stat-card-bento" key={s.title}>
                      <div className="rv-stat-icon-outline">
                        <span style={{ fontSize: '20px' }}>{s.icon}</span>
                      </div>
                      <div style={{ fontFamily: 'var(--pp-display)', fontSize: 'clamp(24px, 3.2vw, 32px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.02em', lineHeight: 1 }}>
                        {s.num}
                      </div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#141414', marginTop: '6px' }}>
                        {s.title}
                      </div>
                      <p style={{ fontSize: '12.5px', color: '#6E6E80', margin: '4px 0 0', lineHeight: 1.45 }}>
                        {s.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom Actions: Discovery Call CTA Button */}
                <div style={{ marginTop: '32px' }}>
                  <ModalCTAButton label="Schedule Austin Strategy Call" region="us" btnVariant="primary-dark" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 04. AUSTIN BUSINESS CORRIDORS DIRECTORY ── */}
        <section id="austin-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Geographic Precision</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored SEO for Austin&apos;s Core Business Corridors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Each pocket of Austin has unique buyer psychology, search behaviors, and local competition:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {DISTRICTS.map((d) => (
                <div
                  key={d.corridor}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E6E6EC',
                    borderRadius: '16px',
                    padding: '28px',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#FF5622', background: '#FFF0EB', padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {d.corridor}
                    </span>
                    <span style={{ fontFamily: 'var(--pp-mono)', fontSize: '12px', color: '#8E8E9F' }}>
                      {d.query}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#141414', margin: '0 0 8px', letterSpacing: '-0.015em' }}>
                    {d.focus}
                  </h3>

                  <p style={{ fontSize: '13.5px', color: '#6E6E80', lineHeight: 1.55, margin: 0 }}>
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 05. CORE DRIVERS / PAIN POINTS (RITOVEX NUMBERED SERVICES ROWS) ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>The FactoryJet Difference</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Why Austin Businesses Switch to FactoryJet SEO
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                We replace opaque agency retainers with transparent, engineering-driven search performance:
              </p>
            </div>

            <div style={{ maxWidth: '960px', margin: '0 auto' }}>
              {PAIN_POINTS.map((p) => (
                <div className="rv-service-row" key={p.num}>
                  <div className="rv-service-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <span className="rv-service-num">{p.num}</span>
                      <h3 className="rv-service-title">{p.title}</h3>
                    </div>
                    <div className="rv-arrow-circle">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 10L10 2M10 2H4M10 2V8" />
                      </svg>
                    </div>
                  </div>
                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #F0F0F5', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.08em' }}>The Typical Agency Frustration:</span>
                      <p style={{ fontSize: '13.5px', color: '#494852', margin: '4px 0 0', lineHeight: 1.5 }}>{p.problem}</p>
                    </div>
                    <div>
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#FF5622', letterSpacing: '0.08em' }}>The FactoryJet Engineering Approach:</span>
                      <p style={{ fontSize: '13.5px', color: '#141414', fontWeight: 600, margin: '4px 0 0', lineHeight: 1.5 }}>{p.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 06. ARCHITECTURE BLUEPRINT (AUTO-ROTATING TABS) ── */}
        <div id="seo-architecture-blueprint">
          <EnterpriseArchitectureBlueprint
            badge="// AUSTIN LOCAL SEO & AI CITATION BLUEPRINT"
            title="Local SEO Architecture: From Map Pack to AI Citations"
            subtitle="Explore how your Google Business Profile, local review velocity, JSON-LD schema, and high-performance frontend synchronize to capture inbound leads."
            legacySource="Neglected Profile & Slow Monolithic CMS"
            targetStack="High-Speed Local SEO & AI Citation Engine"
            ctaLabel="Claim Free Austin SEO Technical Audit"
            region="us"
          />
        </div>

        {/* ── 07. COMPETITOR BENCHMARKING (HONEST ANALYSIS) ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>SERP Landscape</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                How We Compare to Other Austin SEO Providers
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                An honest overview of the Austin search landscape and how our senior engineering model fits:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {RIVALS.map((r) => (
                <div key={r.name} style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '14px', padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#141414', margin: 0 }}>
                      {r.name}
                    </h3>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#FF5622', background: '#FFF0EB', padding: '3px 8px', borderRadius: '12px' }}>
                      {r.metric}
                    </span>
                  </div>
                  <p style={{ fontSize: '13px', color: '#6E6E80', margin: 0, lineHeight: 1.5 }}>
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 08. RITOVEX WORKING PROCESS (SPLIT LAYOUT) ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 0.85fr) 1.15fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }}>
              
              {/* Left Column Sticky Content */}
              <div style={{ position: 'sticky', top: '100px' }}>
                <div className="rv-badge" style={{ marginBottom: '14px' }}>
                  <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                  </svg>
                  <span>Step-by-Step Delivery</span>
                </div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 18px' }}>
                  Our 5-Step Austin SEO Execution Protocol
                </h2>
                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  We start with a thorough technical audit and move methodically from low-competition quick wins to high-volume commercial keywords and Map Pack rankings.
                </p>
                <ModalCTAButton label="Start Your Free SEO Audit" region="us" btnVariant="primary-dark" />
              </div>

              {/* Right Column Step Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {WORKING_STEPS.map((s) => (
                  <div key={s.n} style={{ background: '#F6F6F9', border: '1px solid #E6E6EC', borderRadius: '14px', padding: '24px 28px', transition: 'all 0.25s' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
                        {s.icon}
                      </div>
                      <span style={{ fontFamily: 'var(--pp-mono)', fontSize: '14px', fontWeight: 800, color: '#FF5622' }}>
                        {s.n}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#141414', margin: '0 0 6px' }}>
                      {s.t}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#494852', margin: 0, lineHeight: 1.55 }}>
                      {s.d}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── 09. SEARCHABLE CATEGORIZED FAQ SECTION ── */}
        <FAQ
          eyebrow="AUSTIN SEO INTELLIGENCE"
          headline="Frequently Asked Questions About SEO in Austin TX"
          lead="Direct, plain English answers to what Austin business owners and marketing leaders ask about local search:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#F6F6F9]"
        />

        {/* ── 10. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#FFFFFF', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <SeoCityLinksUS currentCity="austin" />
          </div>
        </section>

        {/* ── 11. FINAL EXECUTIVE CTA BANNER ── */}
        <section className="pp-sec" style={{ backgroundColor: '#141414', color: '#FFFFFF', padding: 'clamp(64px, 10vh, 112px) 0', textAlign: 'center' }}>
          <div className="pp-wrap" style={{ maxWidth: '800px' }}>
            <div className="rv-badge" style={{ background: '#26262B', color: '#FF5622', borderColor: '#3E3E48', marginBottom: '20px' }}>
              <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
              </svg>
              <span>No-Contract Austin SEO</span>
            </div>
            
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Ready to Win the Google Map Pack in Austin?
            </h2>
            
            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Send us your website URL. We will perform a complete local search and technical audit of your site and top Austin competitors, completely free.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Claim Your Free Austin SEO Audit" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
