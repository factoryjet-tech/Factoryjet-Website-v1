import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import LocalSeoArchitectureBlueprint from '@/components/v2/LocalSeoArchitectureBlueprint';
import AuthorCard from '@/components/v2/AuthorCard';
import LocalSeoOpportunityEstimator from '@/components/v2/LocalSeoOpportunityEstimator';
import RegionalBenchmarkCard from '@/components/v2/RegionalBenchmarkCard';
import SeoCityLinksUS from '@/components/v2/SeoCityLinksUS';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-08-24';
const CANONICAL = 'https://factoryjet.com/lincoln/seo';

export const metadata: Metadata = {
  title: 'Lincoln Local SEO Agency | Search & AI Visibility | FactoryJet',
  description:
    'Lincoln local SEO agency. Dominate Google Maps 3-Pack, organic rankings, and AI search citations across Downtown, Haymarket, South Lincoln, and Lancaster County.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Lincoln Local SEO Agency | Search & AI Visibility | FactoryJet',
    description:
      'Lincoln local SEO agency. Dominate Google Maps 3-Pack, organic rankings, and AI search citations across Downtown, Haymarket, South Lincoln, and Lancaster County.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Lincoln Local SEO Agency' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lincoln Local SEO Agency | Search & AI Visibility | FactoryJet',
    description: 'Dominate Lincoln local search and AI answer engines. Verified Google Maps 3-Pack capture and entity optimization across Nebraska.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const PARTNERS = [
  'Google Business Profile API',
  'Search Console Integration',
  'Apple Business Connect',
  'Bing Places for Business',
  'Schema.org Knowledge Graph',
  'OpenAI SearchGPT Citations',
  'Perplexity AI Citation Index',
  'BrightLocal & Yext Multi-Sync',
];

const STAT_CARDS = [
  { num: 'Top 3', title: 'Google Maps Ranking SLA', desc: 'Engineered for dominance in Google Local 3-Pack across high-value Lincoln and Lancaster County corridors.', icon: '📍' },
  { num: '5.2x', title: 'Inbound Lead Velocity', desc: 'Average qualified local phone call and consultation lead growth within 90 days of rollout.', icon: '📈' },
  { num: '100%', title: 'Clean Entity Attribution', desc: 'Structured JSON-LD schemas linking your Google Knowledge Graph, address, and practitioner licenses.', icon: '🛡️' },
  { num: '0', title: 'Spammy Link Networks', desc: 'Strict white-hat local citation authority and real editorial publication placements only.', icon: '⚡' },
];

const DISTRICTS = [
  {
    corridor: 'Downtown Lincoln & Historic Haymarket Core',
    query: 'corporate law financial advisory commercial real estate private equity seo downtown lincoln',
    focus: 'Corporate Law, Advisory & Financial Services',
    desc: 'The political and business capital core. Captures commercial litigation retainers, estate planning inquiries, and corporate financial advisory consults.',
  },
  {
    corridor: 'University of Nebraska & Innovation Campus',
    query: 'agtech software consultancy it services engineering precision tech seo lincoln nic',
    focus: 'AgTech Consulting, Software Engineering & Research',
    desc: 'Silicon Prairie innovation hub. B2B service queries demand technical capability schemas, ISO credentials, and RFP lead funnels.',
  },
  {
    corridor: 'West O Street Commercial & Logistics Spine',
    query: 'heavy equipment repair freight transport commercial electrical fleet maintenance seo west o lincoln',
    focus: 'Commercial Contracting, Heavy Machinery & Logistics',
    desc: 'Major industrial and freight artery. Drives steady inbound emergency service calls, fleet maintenance contracts, and commercial project bids.',
  },
  {
    corridor: 'South Lincoln & Pine Lake Commercial Hub',
    query: 'cosmetic dentistry dental implants pediatric medicine luxury remodeling seo south lincoln',
    focus: 'Elective Healthcare, Dental Implants & Remodeling',
    desc: 'Affluent and high-growth residential corridor. Intense local search competition for cosmetic dentistry, orthodontics, and custom residential contracting.',
  },
  {
    corridor: 'North 27th Street Industrial & Contractor District',
    query: 'commercial roofing hvac sheet metal fabrication mechanical contracting seo north 27th lincoln',
    focus: 'Commercial Roofing, HVAC & Sheet Metal Trades',
    desc: 'Precision manufacturing and contractor fulfillment core. Demands multi-county ServiceAreaBusiness schemas and verified trade accreditations.',
  },
  {
    corridor: 'Air Park Industrial & Manufacturing District',
    query: 'aerospace manufacturing warehousing tier 1 supplier industrial supply seo air park lincoln',
    focus: 'Aerospace Components, Industrial Storage & B2B Supply',
    desc: 'Heavy manufacturing park adjacent to Lincoln Airport. Demands technical capability schemas, AS9100 quality credentials, and B2B quote funnels.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Agricultural Technology, Seed & Livestock Contracting',
    headline: 'Commercial Lead Engines for Nebraska AgTech Leaders',
    description:
      'As the capital of Silicon Prairie agriculture, Lincoln seed distributors, livestock genetics consultants, and precision farming implement dealers demand steady commercial RFQ volume. We build specialized technical service pages, link agricultural manufacturer certifications, and optimize commercial keyword rankings.',
    image: '/images/us/lincoln/seo/lincoln-seo-1.webp',
    alt: 'Lincoln Nebraska agricultural technology seed distribution livestock genetics local SEO engine',
    points: [
      'Agricultural and industrial service schemas linking dealership accreditations and equipment brands',
      'High-intent B2B keyword silos targeting regional farm operators and agribusiness procurement teams',
      'Authoritative regional business citations across Nebraska and Midwest commercial directories',
    ],
  },
  {
    sector: 'Commercial Construction, Roofing & Cold-Climate Trades',
    headline: 'Driving High-Value Project Bidding Across Greater Lincoln & Lancaster County',
    description:
      'Commercial general contractors, specialized flat roofing companies, and structural engineering firms across Lincoln require consistent commercial bidding opportunities. We build geo-targeted service area architectures, optimize Service Area Business profiles, and capture high-intent commercial contracting keywords.',
    image: '/images/us/lincoln/seo/lincoln-seo-2.webp',
    alt: 'Lincoln Nebraska commercial roofing general contractor electrical cold climate local SEO strategy',
    points: [
      'ServiceAreaBusiness schema markup defining multi-county Nebraska operational boundaries',
      'Hyper-local neighborhood geo-pages targeting South Lincoln, Waverly, Hickman, and Seward',
      'High-authority regional contractor directory citations and verified trade accreditations',
    ],
  },
  {
    sector: 'Specialized Healthcare, Orthopedics & Surgical Clinics',
    headline: 'Capturing High-Value Patients in Lincoln Medical Corridors',
    description:
      'In Lincoln competitive orthopedic surgery, cosmetic dentistry, and cardiology markets, patients evaluate physician credentials and peer reviews thoroughly. We optimize Google Business Profiles, implement MedicalProcedure schemas, build procedure-specific silos, and generate steady review velocity.',
    image: '/images/us/b2b-website-design/sales-enablement.webp',
    alt: 'Lincoln Nebraska sports medicine orthopedic cardiology physical therapy clinic local SEO',
    points: [
      'Multi-practitioner Google Business Profile optimization with procedure sub-categories',
      'MedicalProcedure and Physician structured JSON-LD schema linking hospital affiliations',
      'Automated patient review generation funnels ensuring continuous 5-star reputation growth',
    ],
  },
  {
    sector: 'Corporate Law, Agricultural Estate Planning & Litigation',
    headline: 'Top-Rank Visibility for Lincoln Law Firms & Estate Planners',
    description:
      'Downtown Lincoln law firms competing for agricultural estate planning, farm succession, and corporate litigation retainers must rank in the top positions on Google Maps and organic search. We engineer authoritative legal practice area pages, optimize attorney schema markup, and build high-quality local legal citations.',
    image: '/images/us/b2b-website-design/hero.webp',
    alt: 'Lincoln Nebraska corporate law agricultural estate planning commercial litigation local SEO',
    points: [
      'Attorney and LegalService structured JSON-LD schema linking Nebraska State Bar Association credentials',
      'Practice area landing page silos capturing high-intent retainers across Lancaster and Gage Counties',
      'Authoritative local business directory citations and legal association listings',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Ending Opaque Monthly Retainers With Zero Visible Map Pack Growth',
    problem: 'Traditional agencies send generic monthly PDF reports filled with vanity impressions while your Google Business Profile remains stuck outside the Local 3-Pack.',
    solution: 'We focus on tangible Google Maps 3-Pack rankings, qualified phone calls, and revenue-generating local search positions with full dashboard transparency.',
  },
  {
    num: '02',
    title: 'Eliminating Fragile Plugin Schemas That Fail AI Citation Crawlers',
    problem: 'Basic WordPress SEO plugins generate disjointed, broken schemas that AI search engines like SearchGPT and Perplexity fail to parse as verified business entities.',
    solution: 'We hand-craft connected Schema.org JSON-LD entity graphs linking your Google Knowledge Graph, licensing credentials, and verified local citations.',
  },
  {
    num: '03',
    title: 'Overcoming High Agency Turnover & Junior Account Handler Runaround',
    problem: 'Big-box marketing agencies assign junior coordinators who do not understand Lincoln municipal boundaries, Silicon Prairie corridors, or industry specifics.',
    solution: 'You work directly with senior local SEO technical engineers who execute hyper-local geo-targeting tailored to Nebraska commercial realities.',
  },
  {
    num: '04',
    title: 'Stopping Toxic Link Networks That Trigger Search Penalties',
    problem: 'Cheap SEO providers build spammy automated backlinks from private blog networks, risking sudden Google algorithmic penalties and ranking demotions.',
    solution: 'We execute 100% white-hat local citation building, regional trade publication placements, and verified local press authority for permanent ranking gains.',
  },
];

const ROADMAP_STEPS = [
  {
    phase: 'Phase 01',
    title: 'Entity Audit, GBP Optimization & Technical Foundations',
    desc: 'We audit your Google Business Profile, fix Name-Address-Phone (NAP) discrepancies, optimize categories, and eliminate technical website crawling bottlenecks.',
    deliverables: ['Comprehensive local ranking audit and competitor gap analysis', 'Complete Google Business Profile category and attribute overhaul', 'NAP consistency audit across 60+ major US citation directories', 'Core Web Vitals and mobile crawlability technical fixes'],
  },
  {
    phase: 'Phase 02',
    title: 'Local Geo-Silo Architecture & JSON-LD Entity Graph Build',
    desc: 'We engineer dedicated geo-targeted service silos and implement nested Schema.org JSON-LD entity graphs connecting your business to the Google Knowledge Graph.',
    deliverables: ['Hyper-local corridor landing pages (Downtown, Haymarket, South Lincoln, West O)', 'Custom JSON-LD schema graphs (LocalBusiness, Service, Physician, LegalService)', 'Internal contextual link graph distributing domain authority', 'Service area boundary definition in Google Maps API'],
  },
  {
    phase: 'Phase 03',
    title: 'High-Authority Regional Citations & Review Velocity Engine',
    desc: 'We build authoritative local citations across regional Lincoln chambers, industry trade directories, and deploy automated review generation workflows.',
    deliverables: ['Tier-1 citation distribution across Apple Maps, Bing, Yelp, and YellowPages', 'Regional Lincoln business directory and chamber of commerce listings', 'Automated SMS and email review generation campaign deployment', 'Review response protocol and Google Maps attribute updates'],
  },
  {
    phase: 'Phase 04',
    title: 'AI Citation Retrieval, Continuous Tracking & Reporting',
    desc: 'We optimize your brand footprint for retrieval in AI answer engines (SearchGPT, Perplexity, Google AI Overviews) and provide real-time ranking dashboards.',
    deliverables: ['AI search engine citation indexing verification', 'Real-time geo-grid local rank tracking dashboard', 'Monthly inbound call and consultation conversion reporting', 'Quarterly strategic expansion and competitor defense roadmaps'],
  },
];

const EVALUATION_CRITERIA = [
  {
    label: 'Local Ranking Method',
    factoryjet: 'Full-stack entity engineering, connected JSON-LD schemas, and verified GBP category optimization.',
    traditional: 'Basic keyword stuffing, generic blog posts, and automated low-quality citation blasts.',
  },
  {
    label: 'AI Search Readiness',
    factoryjet: 'Optimized for OpenAI SearchGPT, Perplexity AI, and Google AI Overviews citation retrieval.',
    traditional: 'Unaware of AI answer engines; relies solely on legacy 10 blue link keyword matching.',
  },
  {
    label: 'Citation Integrity',
    factoryjet: 'Manual 100% NAP synchronization across top-tier business directories and regional chambers.',
    traditional: 'Automated spam submissions leading to duplicate listings and fragmented NAP data.',
  },
  {
    label: 'Contract Flexibility',
    factoryjet: 'Transparent milestone and performance deliverables with zero predatory multi-year lock-ins.',
    traditional: 'Rigid 12-month locking contracts with severe early termination penalties.',
  },
];

const FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Pricing & Retainers' },
  { key: 'timeline', label: 'Rankings & Timeline' },
  { key: 'ai', label: 'Search & AI Citations' },
  { key: 'local', label: 'Lincoln & Nebraska' },
  { key: 'deliverables', label: 'Deliverables & Reporting' },
];

const FAQ_ITEMS = [
  {
    category: 'pricing',
    question: 'How much does local SEO cost for a Lincoln NE business?',
    answer:
      'Monthly investments depend on your industry vertical, market competition, and target geographic coverage. We provide clear, transparent monthly deliverables with zero hidden hourly fees and zero long-term hostage contracts.',
  },
  {
    category: 'pricing',
    question: 'Do you lock clients into mandatory 12-month contracts?',
    answer:
      'No. We operate on performance and transparency. We believe our results should earn your partnership every single month, so you are never locked into an inflexible annual agreement.',
  },
  {
    category: 'pricing',
    question: 'What is included in your monthly local SEO scope?',
    answer:
      'Every engagement includes full Google Business Profile management, local citation building and cleanup, structured schema graph maintenance, geo-silo content engineering, review generation workflows, and monthly conversion tracking.',
  },
  {
    category: 'pricing',
    question: 'How do you calculate ROI on local SEO campaigns?',
    answer:
      'We track qualified phone calls, appointment bookings, contact form submissions, and direct navigation requests generated through Google Maps and local organic search, giving you clear visibility into revenue attribution.',
  },
  {
    category: 'timeline',
    question: 'How quickly can a Lincoln business rank in the Google Maps 3-Pack?',
    answer:
      'Initial improvements in Google Maps visibility and citation consistency typically appear within 30 to 45 days. High-competition search terms in legal, medical, and commercial contracting generally reach Top-3 dominance within 90 to 120 days.',
  },
  {
    category: 'timeline',
    question: 'What factors determine ranking speed in local search?',
    answer:
      'Key factors include existing domain authority, Google Business Profile age and history, review count and sentiment velocity, NAP consistency across citation networks, and the strength of competitor profiles in your specific corridor.',
  },
  {
    category: 'timeline',
    question: 'Can you fix past Google Business Profile suspensions or penalties?',
    answer:
      'Yes. We audit your profile for policy compliance issues, correct address and category discrepancies, submit formal reinstatement appeals to Google, and restore your ranking standing.',
  },
  {
    category: 'timeline',
    question: 'How do you handle review generation without violating Google policies?',
    answer:
      'We set up automated post-service email and SMS review request funnels that invite genuine customers to share their authentic experiences on your verified Google Business Profile in compliance with FTC and Google guidelines.',
  },
  {
    category: 'ai',
    question: 'How does local SEO help my business appear in SearchGPT and AI Overviews?',
    answer:
      'AI answer engines retrieve verified facts from structured knowledge graphs, verified directories, and authoritative publications. We build connected JSON-LD schemas that make your business data unmistakable to LLM crawlers.',
  },
  {
    category: 'ai',
    question: 'Why is structured Schema.org JSON-LD so important for local search?',
    answer:
      'Schema markup explicitly defines your exact business type, physical coordinates, service area, opening hours, accepted payments, and practitioner credentials directly in machine-readable code for search crawlers.',
  },
  {
    category: 'ai',
    question: 'How do you track whether AI search engines are citing our brand?',
    answer:
      'We monitor citation appearances, brand mentions, and referral traffic originating from OpenAI SearchGPT, Perplexity AI, Claude, and Google AI Overviews to ensure continuous visibility.',
  },
  {
    category: 'ai',
    question: 'Can AI search engines replace traditional Google Maps for local queries?',
    answer:
      'No. AI search engines synthesize and cite verified local data from Google Maps, Apple Maps, Yelp, and official websites. Dominating local foundational data ensures you capture both traditional and AI-driven searches.',
  },
  {
    category: 'local',
    question: 'Do you have experience with Lincoln medical and dental practices?',
    answer:
      'Yes. We optimize local search footprints for surgical practices, dental implant specialists, and wellness clinics operating across Downtown, South Lincoln, and Pine Lake.',
  },
  {
    category: 'local',
    question: 'Can you optimize commercial contractors competing across Lancaster County?',
    answer:
      'Yes. We engineer comprehensive Service Area Business profiles and commercial contracting silos targeting Lincoln, Waverly, Hickman, and surrounding areas.',
  },
  {
    category: 'local',
    question: 'How do you target both Lincoln and Omaha without keyword cannibalization?',
    answer:
      'We construct distinct, geo-targeted corridor pages with unique local proof points, localized customer testimonials, and specific municipal service coordinates for Lincoln and Omaha.',
  },
  {
    category: 'local',
    question: 'Can you help agricultural technology and rural equipment companies?',
    answer:
      'Yes. We optimize local search profiles, equipment dealership schemas, and map listings for implement dealers, seed suppliers, and rural contractors across the state.',
  },
  {
    category: 'deliverables',
    question: 'What reports and dashboards will our team receive each month?',
    answer:
      'You receive access to a real-time geo-grid local rank tracking dashboard showing exact keyword positions across every Lincoln neighborhood, plus monthly conversion summaries detailing call volume and lead inquiries.',
  },
  {
    category: 'deliverables',
    question: 'Do we own all citations and profiles created during the campaign?',
    answer:
      'Yes, 100%. All directory listings, Google Business Profiles, and citation accounts belong exclusively to your business with full master ownership credentials.',
  },
  {
    category: 'deliverables',
    question: 'Who will be our primary point of contact during the engagement?',
    answer:
      'You work directly with a senior technical SEO engineer who leads the strategy, executes the code changes, and leads your monthly strategy review sessions.',
  },
  {
    category: 'deliverables',
    question: 'How do we get started with a Lincoln local SEO audit?',
    answer:
      'Schedule a free 30-minute local search audit. We will analyze your Google Business Profile, identify competitor gaps, and deliver an actionable ranking roadmap for your business.',
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
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '64',
    bestRating: '5',
    worstRating: '1',
  },
  name: 'FactoryJet - Lincoln Local SEO Agency',
  image: 'https://factoryjet.com/og-default.png',
  url: CANONICAL,
  telephone: '+1-832-998-8422',
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lincoln',
    addressRegion: 'NE',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.8136,
    longitude: -96.7026,
  },
  areaServed: [
    { '@type': 'City', name: 'Lincoln' },
    { '@type': 'City', name: 'Waverly' },
    { '@type': 'City', name: 'Hickman' },
    { '@type': 'City', name: 'Seward' },
    { '@type': 'City', name: 'Beatrice' },
  ],
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Chief Technical Architect',
    url: 'https://factoryjet.com/about',
    sameAs: [
      'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
      'https://github.com/factoryjet-tech',
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '64',
    bestRating: '5',
    worstRating: '1',
  },
  name: 'Lincoln Local SEO & Google Maps Optimization',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Local SEO, Google Business Profile Optimization, Schema Markup & AI Citation Strategy',
  description:
    'Lincoln local SEO agency. Dominate Google Maps 3-Pack, organic rankings, and AI search citations across Downtown, Haymarket, South Lincoln, and Lancaster County.',
  areaServed: [{ '@type': 'State', name: 'Nebraska' }],
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Lincoln Local SEO Agency | Search & AI Visibility | FactoryJet',
  description: 'Lincoln local SEO agency. Dominate Google Maps 3-Pack, organic rankings, and AI search citations across Downtown, Haymarket, South Lincoln, and Lancaster County.',
  url: CANONICAL,
  dateModified: PAGE_MODIFIED,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Chief Technical Architect',
    url: 'https://factoryjet.com/about',
    sameAs: [
      'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
      'https://github.com/factoryjet-tech',
    ],
  },
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/' },
    { '@type': 'ListItem', position: 2, name: 'Local SEO', item: 'https://factoryjet.com/services/seo' },
    { '@type': 'ListItem', position: 3, name: 'Lincoln', item: CANONICAL },
  ],
};

export default function LincolnSeoPage() {
  return (
    <>
      <script id="lincoln-seo-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="lincoln-seo-local-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      <script id="lincoln-seo-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="lincoln-seo-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="lincoln-seo-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>Lincoln Local SEO &amp; Google Maps Engineering</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Lincoln Local SEO Agency for Market Leaders
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  Dominate the Google Maps 3-Pack, capture high-intent search queries, and secure AI answer citations across Lincoln and Lancaster County.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Free Local SEO Audit" region="us" btnVariant="primary-dark" modalVariant="seo" />
                  <a href="#lincoln-seo-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Lincoln Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/lincoln/seo/lincoln-seo-1.webp"
                  alt="Lincoln Nebraska local SEO Google Maps 3-Pack ranking strategy"
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
              <div className="rv-ticker-label">Search Engines &amp; Knowledge Graph Networks</div>
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
              {/* Left Column: Clean Organic Curved Photo Frame */}
              <div className="rv-curved-frame-2">
                <Image
                  src="/images/us/lincoln/seo/lincoln-seo-2.webp"
                  alt="FactoryJet senior SEO engineers optimizing Lincoln local entity knowledge graph"
                  width={640}
                  height={640}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Right Column: 2x2 Bento Counter Grid */}
              <div>
                <div className="rv-badge" style={{ marginBottom: '14px' }}>
                  <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                  </svg>
                  <span>Search Precision &amp; Real Growth</span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
                  Local Search Engineered for Nebraska Leaders
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  From Downtown legal practices to South Lincoln medical clinics and North 27th industrial contractors, we build high-converting search architectures that capture regional buyers.
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

                {/* Bottom Actions */}
                <div style={{ marginTop: '32px' }}>
                  <ModalCTAButton label="Schedule Local SEO Consultation" region="us" btnVariant="primary-dark" modalVariant="seo" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04. LINCOLN DISTRICTS & INDUSTRY DIRECTORY ── */}
        <section id="lincoln-seo-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Lancaster County Corridor Depth</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored Local Search Optimization for Lincoln Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From Downtown practices to Silicon Prairie AgTech innovators and North 27th industrial contractors:
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

        {/* ── 05. INDUSTRY SHOWCASE SECTION ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(64px, 9vh, 104px) 0' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 56px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Industry-Specific Execution</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Specialized Local SEO Strategies for Nebraska Brands
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every commercial sector across Lincoln demands tailored schema models, citation graphs, and map optimization:
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              {INDUSTRY_SHOWCASE.map((ind, idx) => (
                <div
                  key={ind.sector}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: idx % 2 === 0 ? '1.1fr 0.9fr' : '0.9fr 1.1fr',
                    gap: 'clamp(28px, 5vw, 56px)',
                    alignItems: 'center',
                    background: '#F9F9FC',
                    border: '1px solid #E6E6EC',
                    borderRadius: '20px',
                    padding: 'clamp(24px, 4vw, 44px)',
                  }}
                >
                  <div style={{ order: idx % 2 === 0 ? 1 : 2 }}>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#FF5622', background: '#FFF0EB', padding: '4px 12px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {ind.sector}
                    </span>
                    <h3 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 800, color: '#141414', margin: '14px 0 12px', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
                      {ind.headline}
                    </h3>
                    <p style={{ fontSize: '14.5px', color: '#494852', lineHeight: 1.65, margin: '0 0 20px' }}>
                      {ind.description}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {ind.points.map((pt, pIdx) => (
                        <div key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF5622', flexShrink: 0 }} />
                          <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#141414' }}>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ order: idx % 2 === 0 ? 2 : 1, position: 'relative', borderRadius: '14px', overflow: 'hidden', height: '320px', border: '1px solid #E2E2E8' }}>
                    <Image
                      src={ind.image}
                      alt={ind.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 06. CORE DRIVERS & PAIN POINTS ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>The FactoryJet Difference</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Why Lincoln Leaders Choose FactoryJet Local SEO
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                We replace opaque monthly agency reports with technical local search and AI citation dominance:
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

        {/* ── 07. ARCHITECTURE BLUEPRINT ── */}
        <div id="local-seo-blueprint">
          <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: '48px 0 16px' }}>
          <div className="pp-wrap">
            <RegionalBenchmarkCard city="Lincoln" vertical="seo" />
          </div>
        </section>

        <LocalSeoArchitectureBlueprint
            badge="// LINCOLN LOCAL SEARCH &amp; AI RANKING BLUEPRINT"
            title="4-Layer Local SEO Stack: Google Maps to AI Overviews"
            subtitle="Explore how GBP API optimization, multi-directory citation syncing, structured schema graphs, and AI citation crawlers work together to dominate Lincoln local search."
            city="Lincoln"
            ctaLabel="Get a Free Local SEO Audit"
            region="us"
          />
        </div>

        {/* ── 08. STEP-BY-STEP 4-STAGE RANKING PROTOCOL ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(64px, 9vh, 104px) 0' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 56px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Proven Local Ranking Engine</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Our 4-Stage Local SEO Ranking Protocol
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                A disciplined engineering methodology for guaranteed Local 3-Pack capture and AI citation visibility:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {ROADMAP_STEPS.map((step) => (
                <div
                  key={step.phase}
                  style={{
                    background: '#F9F9FC',
                    border: '1px solid #E6E6EC',
                    borderRadius: '16px',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#FF5622', background: '#FFF0EB', padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {step.phase}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#141414', margin: '0 0 10px', lineHeight: 1.3 }}>
                    {step.title}
                  </h3>

                  <p style={{ fontSize: '13.5px', color: '#494852', lineHeight: 1.55, margin: '0 0 18px', flexGrow: 1 }}>
                    {step.desc}
                  </p>

                  <div style={{ borderTop: '1px solid #E6E6EC', paddingTop: '16px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.06em', display: 'block', marginBottom: '10px' }}>
                      Core Deliverables:
                    </span>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {step.deliverables.map((del, dIdx) => (
                        <li key={dIdx} style={{ fontSize: '12.5px', color: '#141414', display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: 1.4 }}>
                          <span style={{ color: '#FF5622', fontWeight: 800 }}>✓</span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 09. AGENCY EVALUATION FRAMEWORK TABLE ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Vendor Due Diligence</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Evaluating Lincoln SEO Agencies: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Compare engineering-led local search optimization against traditional marketing agencies before you sign:
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '16px', overflow: 'hidden', maxWidth: '960px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1.4fr', background: '#141414', color: '#FFFFFF', padding: '16px 24px', fontWeight: 700, fontSize: '13.5px' }}>
                <div>Evaluation Factor</div>
                <div style={{ color: '#FF5622' }}>FactoryJet Engineering Model</div>
                <div style={{ color: '#A0A0B0' }}>Traditional Marketing Agencies</div>
              </div>

              {EVALUATION_CRITERIA.map((crit, cIdx) => (
                <div
                  key={crit.label}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 1.4fr 1.4fr',
                    padding: '20px 24px',
                    borderTop: cIdx > 0 ? '1px solid #F0F0F5' : 'none',
                    background: cIdx % 2 === 0 ? '#FFFFFF' : '#FAFAFC',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div style={{ fontWeight: 800, fontSize: '14px', color: '#141414' }}>
                    {crit.label}
                  </div>
                  <div style={{ fontSize: '13.5px', color: '#141414', fontWeight: 600, lineHeight: 1.45 }}>
                    {crit.factoryjet}
                  </div>
                  <div style={{ fontSize: '13px', color: '#6E6E80', lineHeight: 1.45 }}>
                    {crit.traditional}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTERACTIVE GOOGLE MAP PACK OPPORTUNITY ESTIMATOR ── */}
        <LocalSeoOpportunityEstimator city="Lincoln" region="us" />

        {/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION ── */}
        <FAQ
          eyebrow="LINCOLN LOCAL SEARCH INTELLIGENCE"
          headline="Frequently Asked Questions About Local SEO in Lincoln NE"
          lead="Direct, plain English answers to what Nebraska business owners and marketing leaders ask about Google Maps 3-Pack and search visibility:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 11. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <SeoCityLinksUS currentCity="lincoln" />
          </div>
        </section>

        {/* ── VERIFIED AUTHOR ENTITY CARD ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', padding: '48px 0', borderTop: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <AuthorCard />
          </div>
        </section>

        {/* ── 12. FINAL EXECUTIVE CTA BANNER ── */}
        <section className="pp-sec" style={{ backgroundColor: '#141414', color: '#FFFFFF', padding: 'clamp(64px, 10vh, 112px) 0', textAlign: 'center' }}>
          <div className="pp-wrap" style={{ maxWidth: '800px' }}>
            <div className="rv-badge" style={{ background: '#26262B', color: '#FF5622', borderColor: '#3E3E48', marginBottom: '20px' }}>
              <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
              </svg>
              <span>Map Pack Dominance &amp; Real Growth</span>
            </div>

            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Ready to Dominate Lincoln Local Search?
            </h2>

            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Claim your complimentary Google Business Profile and local entity audit. We will reveal exactly where you are losing leads to competitors and how to capture the Local 3-Pack.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get Your Free Local SEO Audit" region="us" btnVariant="primary-light" modalVariant="seo" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale="us" />
    </>
  );
}
