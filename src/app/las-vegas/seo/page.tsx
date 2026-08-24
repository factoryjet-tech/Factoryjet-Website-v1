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
const CANONICAL = 'https://factoryjet.com/las-vegas/seo';

export const metadata: Metadata = {
  title: 'Las Vegas Local SEO Agency | Search & AI Visibility | FactoryJet',
  description:
    'Las Vegas local SEO agency. Dominate Google Maps 3-Pack, organic rankings, and AI search citations across Summerlin, Henderson, and Downtown.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Las Vegas Local SEO Agency | Search & AI Visibility | FactoryJet',
    description:
      'Las Vegas local SEO agency. Dominate Google Maps 3-Pack, organic rankings, and AI search citations across Summerlin, Henderson, and Downtown.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Las Vegas Local SEO Agency' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Las Vegas Local SEO Agency | Search & AI Visibility | FactoryJet',
    description: 'Dominate Las Vegas local search and AI answer engines. Verified Google Maps 3-Pack capture and entity optimization.',
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
  { num: 'Top 3', title: 'Google Maps Ranking SLA', desc: 'Engineered for dominance in Google Local 3-Pack across high-value Las Vegas commercial corridors.', icon: '📍' },
  { num: '4.9x', title: 'Inbound Lead Velocity', desc: 'Average qualified local phone call and consultation lead growth within 90 days of rollout.', icon: '📈' },
  { num: '100%', title: 'Clean Entity Attribution', desc: 'Structured JSON-LD schemas linking your Google Knowledge Graph, address, and practitioner licenses.', icon: '🛡️' },
  { num: '0', title: 'Spammy Link Networks', desc: 'Strict white-hat local citation authority and real editorial publication placements only.', icon: '⚡' },
];

const DISTRICTS = [
  {
    corridor: 'The Strip & Resort Corridor',
    query: 'hospitality entertainment management seo las vegas',
    focus: 'Hospitality Groups, Entertainment & Nightlife Management',
    desc: 'The global entertainment capital. Demands high-concurrency event visibility, hospitality schema graphs, and mobile geo-fenced local search optimization.',
  },
  {
    corridor: 'Summerlin & Peccole Ranch',
    query: 'estate planning attorney seo summerlin las vegas',
    focus: 'Private Wealth Advisors, Aesthetic Medicine & Luxury Law',
    desc: 'Affluent master-planned enclave. Intense competition for high-net-worth estate planning, cosmetic surgery consultations, and wealth advisory retainers.',
  },
  {
    corridor: 'Henderson & Green Valley',
    query: 'specialized healthcare clinic seo henderson nv',
    focus: 'Specialized Healthcare, Pediatric Dental & Family Legal Practices',
    desc: 'Fast-growing residential and medical corridor. Multi-practitioner practice architectures, physician directories, and verified review funnels.',
  },
  {
    corridor: 'Downtown Las Vegas & Arts District',
    query: 'tech creative agency seo downtown las vegas',
    focus: 'Tech Startups, Creative Agencies & Boutique Law Firms',
    desc: 'Vibrant urban innovation and legal district. Captures commercial litigation retainers, tech venture inquiries, and creative service contracts.',
  },
  {
    corridor: 'North Las Vegas & Apex Logistics Corridor',
    query: 'industrial warehousing logistics seo north las vegas',
    focus: 'Industrial Warehousing, Advanced Logistics & Distribution',
    desc: 'Major Mountain West distribution and fulfillment nexus. B2B service queries require logistics capability schemas and sub-second edge speeds.',
  },
  {
    corridor: 'Southwest Valley & Spring Valley',
    query: 'commercial hvac roofing contractor seo las vegas',
    focus: 'Commercial Construction, HVAC & General Contractors',
    desc: 'High-growth commercial and trade corridor. Captures high-intent commercial HVAC, roofing, and contractor project bidding inquiries.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Aesthetic Medicine, Plastic Surgery & Luxury Wellness',
    headline: 'Capturing High-Value Patient Consultations in Summerlin & Henderson',
    description:
      'In Las Vegas’s competitive aesthetic surgery and concierge wellness markets, prospective patients evaluate physician credentials and peer reviews thoroughly before booking. We optimize Google Business Profiles, implement MedicalProcedure structured schemas, build procedure-specific geo silos, and generate steady review velocity.',
    image: '/images/us/las-vegas-seo/local-search.webp',
    alt: 'Las Vegas and Summerlin cosmetic surgery aesthetic clinic local SEO ranking strategy',
    points: [
      'Multi-practitioner Google Business Profile optimization with procedure sub-categories',
      'MedicalProcedure and Physician structured JSON-LD schema linking hospital affiliations',
      'Hyper-local neighborhood geo-pages targeting Summerlin, Henderson, and Green Valley',
    ],
  },
  {
    sector: 'Personal Injury Law, Gaming Regulatory & Commercial Litigation',
    headline: 'Dominating High-Stakes Search Corridors for Las Vegas Law Firms',
    description:
      'Legal search queries across Clark County are among the most fiercely contested in the nation. We engineer impenetrable local SEO architectures featuring practice area knowledge hubs, attorney bar admission schemas, verified case outcome showcases, and localized citation dominance.',
    image: '/images/us/services/law-firm-seo/hero.webp',
    alt: 'Las Vegas corporate law firm personal injury and gaming litigation local SEO ranking strategy',
    points: [
      'LegalService and Attorney schema linking State Bar of Nevada verified credentials',
      'Localized practice area silos targeting Summerlin, Downtown Las Vegas, and Henderson',
      'High-authority local legal directory citations and editorial publication placements',
    ],
  },
  {
    sector: 'Hospitality, Entertainment, Convention Services & Tourism',
    headline: 'Hyper-Local Radius Dominance for Convention & Hospitality Leaders',
    description:
      'From convention logistics suppliers near the Las Vegas Convention Center to luxury dining groups on the Strip, mobile travelers and corporate event planners demand instant search answers. We optimize geo-radius signals, event schemas, and real-time review response workflows.',
    image: '/images/us/las-vegas-seo/conventions.webp',
    alt: 'Las Vegas convention center corporate event and hospitality entertainment local SEO optimization',
    points: [
      'Local radius geo-fencing targeting convention corridors and major resort districts',
      'Event and FoodEstablishment structured schema markup for immediate mobile discovery',
      'High-speed mobile performance ensuring frictionless phone reservations and inquiries',
    ],
  },
  {
    sector: 'Commercial HVAC, Roofing & Trade Contracting',
    headline: 'Driving Continuous Commercial Project Bidding Across Clark County',
    description:
      'Commercial HVAC contractors, roofing companies, and trade specialists across the Las Vegas valley require steady commercial project pipelines. We build geo-targeted service area architectures, optimize Service Area Business (SAB) profiles, and capture high-intent commercial keyword searches.',
    image: '/images/us/manufacturing-website-design/shop-floor.webp',
    alt: 'Las Vegas commercial contractor HVAC and roofing local SEO architecture',
    points: [
      'Service area radius optimization covering Clark County commercial and industrial hubs',
      'High-speed mobile performance ensuring immediate project bidding phone calls',
      'Structured LocalBusiness and Contractor schema markup for local search dominance',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Ending Monthly SEO Retainers with Zero Measurable Inbound Calls',
    problem: 'Traditional Las Vegas agencies send generic monthly PDF reports filled with vanity impressions while your Google Maps rankings remain stagnant on page two.',
    solution: 'We focus on concrete local conversion outcomes: Google Local 3-Pack visibility, verified phone calls, consultation bookings, and qualified commercial RFQs.',
  },
  {
    num: '02',
    title: 'Eliminating Risky PBN Links & Automated Citation Spam',
    problem: 'Cheap agencies build spammy automated citations and private blog network links that trigger Google algorithmic penalties and destroy your domain authority.',
    solution: 'We implement 100% white-hat local entity optimization, syncing direct with Google Business Profile API, Apple Business Connect, and tier-one local publications.',
  },
  {
    num: '03',
    title: 'Fixing Inconsistent NAP Data Across Duplicate Profiles',
    problem: 'Duplicate or outdated listings with conflicting phone numbers and suite addresses confuse search engine crawlers and split your local ranking signals.',
    solution: 'We execute complete citation deduplication and NAP synchronization across all major data aggregators, establishing clean, authoritative entity signals.',
  },
  {
    num: '04',
    title: 'Optimizing for AI Answer Engines & SearchGPT Citations',
    problem: 'Basic SEO tactics ignore generative AI engines like ChatGPT, Claude, and Perplexity, causing your business to be omitted from conversational recommendations.',
    solution: 'We structure your content with deep semantic entities, speakable markup, and question-answering schemas that position your firm as the verified local authority.',
  },
];

const ROADMAP_STEPS = [
  {
    phase: 'Phase 01',
    title: 'Local Entity & Citation Audit',
    desc: 'We perform a deep forensic scan of your Google Business Profile, existing citations, NAP consistency, and local competitor ranking signals.',
    deliverables: ['Google Maps rank grid scan across the Las Vegas valley', 'NAP consistency and duplicate listing audit', 'Competitor keyword and backlink gap analysis', 'Baseline local visibility scorecard'],
  },
  {
    phase: 'Phase 02',
    title: 'Google Business Profile & On-Page Geo-Optimization',
    desc: 'We optimize primary categories, service sub-attributes, geo-targeted metadata, and embed structured JSON-LD schema across your website.',
    deliverables: ['GBP category and attribute optimization', 'LocalBusiness & ProfessionalService schema graph', 'Localized service area landing page copy', 'Core Web Vitals performance acceleration'],
  },
  {
    phase: 'Phase 03',
    title: 'Tier-One Citation Sync & Local PR Distribution',
    desc: 'We synchronize your verified business data across major directories and secure localized editorial placements to build genuine regional authority.',
    deliverables: ['Direct API sync with Apple, Bing & Google', 'Tier-one directory citations (Data Axle, Neustar)', 'Localized press release and editorial outreach', 'Review velocity and response workflow setup'],
  },
  {
    phase: 'Phase 04',
    title: 'Rank Defense, AI Citation Monitoring & Expansion',
    desc: 'We track daily local 3-Pack movements, monitor AI search citations, protect against competitor spam, and expand into neighboring suburban corridors.',
    deliverables: ['Weekly geo-grid rank tracking reports', 'SearchGPT and Perplexity citation audits', 'Spam listing monitoring and resolution', 'Quarterly local market expansion roadmap'],
  },
];

const EVALUATION_CRITERIA = [
  {
    label: 'Ranking Target',
    factoryjet: 'Top 3 Google Maps Local Pack & Organic Page 1 for high-intent local commercial terms.',
    traditional: 'Generic keyword impressions and vanity organic traffic that fails to produce paying local clients.',
  },
  {
    label: 'Structured Data',
    factoryjet: 'Deep server-rendered JSON-LD schema (LocalBusiness, GeoCoordinates, OpeningHours, Service, FAQPage).',
    traditional: 'Basic WordPress SEO plugin meta tags without connected entity graphs or practitioner credentials.',
  },
  {
    label: 'Citation Quality',
    factoryjet: 'Direct API synchronization with major data providers and verified local chamber/industry publications.',
    traditional: 'Automated spam submissions to hundreds of low-quality link directories that risk Google penalties.',
  },
  {
    label: 'AI Search Preparedness',
    factoryjet: 'Semantic entity engineering optimized for ChatGPT Search, Perplexity AI, and Google AI Overviews.',
    traditional: 'Outdated keyword stuffing techniques with no consideration for conversational search platforms.',
  },
];

const FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Cost & Retainers' },
  { key: 'timeline', label: 'Timeline & Results' },
  { key: 'technical', label: 'GBP & Schemas' },
  { key: 'local', label: 'Las Vegas Market Focus' },
  { key: 'reporting', label: 'Tracking & Deliverables' },
];

const FAQ_ITEMS = [
  {
    category: 'pricing',
    question: 'How much does local SEO cost for a Las Vegas business?',
    answer:
      'Local SEO campaigns are priced based on your market competition, number of physical locations, practice area scope, and current domain health. A focused single-location local campaign targeting core Las Vegas corridors is structured on a transparent monthly retainer with zero long-term lock-ins. Multi-location healthcare networks or high-stakes legal practices requiring Valley-wide rank dominance receive tailored scoping with clear milestone deliverables.',
  },
  {
    category: 'pricing',
    question: 'Are there any hidden citation fees or third-party listing markups?',
    answer:
      'No. All direct directory submissions, data aggregator distribution fees, schema deployments, and ranking grid audits are fully included in your monthly program fee.',
  },
  {
    category: 'pricing',
    question: 'Do you require long-term lock-in contracts for SEO retainers?',
    answer:
      'No. We operate on flexible month-to-month agreements after an initial 90-day foundational sprint. We earn your continued business through transparent rank improvements, phone call growth, and measurable local revenue.',
  },
  {
    category: 'timeline',
    question: 'How quickly can our Las Vegas business expect to see Google Maps rank improvements?',
    answer:
      'Foundational GBP optimizations, schema deployments, and NAP deduplication typically produce noticeable ranking improvements within 30 to 60 days. Highly competitive queries in Summerlin or Henderson generally achieve solid Top 3 Local Pack dominance within 90 to 120 days of consistent entity authority building.',
  },
  {
    category: 'timeline',
    question: 'What factors determine how fast a Las Vegas business can rank in the Local 3-Pack?',
    answer:
      'Key determinants include your physical office location relative to the searcher, category selection accuracy, total volume of authentic customer reviews, website Core Web Vitals speed, and the clean consistency of your citation profile across data aggregators.',
  },
  {
    category: 'timeline',
    question: 'What happens to our local rankings if we pause or discontinue services?',
    answer:
      'Unlike pay-per-click advertising, the foundational assets we build (optimized GBP profile, clean directory citations, structured website schemas, and localized content silos) remain 100% your permanent intellectual property and provide long-lasting organic value.',
  },
  {
    category: 'technical',
    question: 'How do you optimize our Google Business Profile for maximum local radius reach?',
    answer:
      'We identify and configure primary and secondary categories, craft keyword-optimized business descriptions, upload geo-tagged photo assets, build product and service catalogs, and configure automated review generation funnels.',
  },
  {
    category: 'technical',
    question: 'What structured JSON-LD schemas do you implement on our website?',
    answer:
      'We inject comprehensive server-rendered schemas including LocalBusiness, ProfessionalService, MedicalBusiness or LegalService, GeoCoordinates, OpeningHoursSpecification, Service, FAQPage, and speakable selectors for AI voice search.',
  },
  {
    category: 'technical',
    question: 'How do you ensure our company is recommended by AI search engines like ChatGPT and Perplexity?',
    answer:
      'We optimize your digital entity profile across authoritative data sources that AI training models reference, ensuring consistent factual data regarding your services, locations, credentials, and customer satisfaction ratings.',
  },
  {
    category: 'technical',
    question: 'How do you handle review generation without violating Google policies?',
    answer:
      'We establish frictionless SMS and email review request workflows that invite genuine satisfied clients to share their direct feedback on your Google Business Profile, strictly avoiding review gating or incentivized reviews.',
  },
  {
    category: 'local',
    question: 'Do you manage multi-location local SEO campaigns across Clark County?',
    answer:
      'Yes. We build dedicated, location-specific landing pages and optimize distinct Google Business Profiles for each physical office across Las Vegas, Henderson, Summerlin, and North Las Vegas.',
  },
  {
    category: 'local',
    question: 'Can you help our practice outrank entrenched competitors in Summerlin and Henderson?',
    answer:
      'Yes. By combining technical website speed, deep topical content authority, clean multi-aggregator citations, and consistent review velocity, we systematically capture top 3 map positions from legacy competitors.',
  },
  {
    category: 'local',
    question: 'How do service-area businesses without a public storefront rank in Las Vegas?',
    answer:
      'We configure your Google Business Profile as a verified Service Area Business (SAB), hiding your residential address while establishing explicit service boundaries across your target Valley ZIP codes and commercial corridors.',
  },
  {
    category: 'local',
    question: 'Do you optimize for convention and corporate event searches in Las Vegas?',
    answer:
      'Yes. We build specialized landing pages and event metadata targeting corporate planners, trade show exhibitors, and convention visitors in Las Vegas.',
  },
  {
    category: 'reporting',
    question: 'How do you track and report local SEO progress each month?',
    answer:
      'We provide access to an interactive dashboard showing local 3-Pack geo-grid ranking positions, organic keyword trajectories, verified Google Maps phone calls, website click-throughs, and consultation inquiry submissions.',
  },
  {
    category: 'reporting',
    question: 'What is a Local Geo-Grid rank tracking report?',
    answer:
      'A geo-grid scan measures your Google Maps ranking position at dozens of physical coordinates across the Las Vegas valley, showing exactly where your business appears in the top 3 and where optimization is needed.',
  },
  {
    category: 'reporting',
    question: 'How do you combat spam and fake competitor listings on Google Maps?',
    answer:
      'We continuously monitor your primary search categories in Las Vegas, identifying keyword-stuffed business names and fake virtual office listings, and submit formal redressal complaints to Google to remove spam competitors.',
  },
  {
    category: 'reporting',
    question: 'Who will be our main point of contact during the campaign?',
    answer:
      'You work directly with a dedicated senior SEO strategist who oversees technical implementation, citation distribution, and monthly strategy reviews without layers of junior account coordinators.',
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
  name: 'FactoryJet - Las Vegas Local SEO Agency',
  image: 'https://factoryjet.com/og-default.png',
  url: CANONICAL,
  telephone: '+1-832-998-8422',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.1699,
    longitude: -115.1398,
  },
  areaServed: [
    { '@type': 'City', name: 'Las Vegas' },
    { '@type': 'City', name: 'Henderson' },
    { '@type': 'City', name: 'North Las Vegas' },
    { '@type': 'City', name: 'Boulder City' },
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
      'https://www.linkedin.com/in/bhavesh-barot',
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
  name: 'Las Vegas Local SEO & Google Maps Optimization',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Local SEO, Google Business Profile Management & AI Search Optimization',
  description:
    'Senior engineering-led local search engine optimization, Google Maps 3-Pack capture, structured data graphs, and AI citation engineering for Las Vegas businesses.',
  areaServed: { '@type': 'State', name: 'Nevada' },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Las Vegas Local SEO Agency | Search & AI Visibility | FactoryJet',
  description: 'Las Vegas local SEO agency. Dominate Google Maps 3-Pack, organic rankings, and AI search citations across Summerlin, Henderson, and Downtown.',
  url: CANONICAL,
  dateModified: PAGE_MODIFIED,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Chief Technical Architect',
    url: 'https://factoryjet.com/about',
    sameAs: [
      'https://www.linkedin.com/in/bhavesh-barot',
      'https://github.com/factoryjet-tech',
    ],
  },
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/' },
    { '@type': 'ListItem', position: 2, name: 'SEO', item: 'https://factoryjet.com/services/seo' },
    { '@type': 'ListItem', position: 3, name: 'Las Vegas', item: CANONICAL },
  ],
};

export default function LasVegasSeoPage() {
  return (
    <>
      <script id="lv-seo-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="lv-seo-local-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      <script id="lv-seo-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="lv-seo-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="lv-seo-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>Las Vegas Local SEO &amp; AI Citation Authority</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Las Vegas Local SEO Agency for Market Leaders
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  Dominate the Google Maps 3-Pack, organic search rankings, and AI conversational search across Summerlin, Henderson, and Downtown Las Vegas. Engineered for verified inbound calls and high-ticket consultations.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Free Local SEO Audit" region="us" btnVariant="primary-dark" modalVariant="seo" />
                  <a href="#lv-seo-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Las Vegas Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/las-vegas-seo/hero.webp"
                  alt="Las Vegas Nevada local SEO rankings and Google Maps 3-Pack dominance strategy"
                  width={640}
                  height={640}
                  priority
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 02. RITOVEX PARTNERS / CITATION MARQUEE TICKER ── */}
        <section style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC', padding: '36px 0' }}>
          <div className="pp-wrap">
            <div className="rv-ticker-header">
              <div className="rv-ticker-line" />
              <div className="rv-ticker-label">Local Search &amp; AI Citation Infrastructure</div>
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
                  src="/images/us/las-vegas-seo/local-search.webp"
                  alt="FactoryJet senior SEO strategists conducting local search audit for Las Vegas businesses"
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
                  <span>Precision Local Authority</span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
                  Engineered for Clark County&apos;s High-Value Commercial Sectors
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  From Summerlin aesthetic surgeons and wealth managers to Downtown trial law firms and commercial trade contractors, Las Vegas businesses need verified search authority to capture high-ticket clients before competitors do.
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
                  <ModalCTAButton label="Request Local SEO Competitor Scan" region="us" btnVariant="primary-dark" modalVariant="seo" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04. LAS VEGAS DISTRICTS & INDUSTRY DIRECTORY ── */}
        <section id="lv-seo-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Las Vegas Commercial Corridor Depth</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored Local SEO for Las Vegas&apos;s Core Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From Summerlin cosmetic clinics to Downtown trial law firms and North Las Vegas industrial hubs:
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
                Specialized Local Search Architectures for Las Vegas
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every high-value commercial sector in the valley demands tailored keyword targeting, entity schemas, and conversion pathways:
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
                Why Las Vegas Companies Choose FactoryJet Local SEO
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                We replace generic SEO reports with direct rank dominance and verified phone lead generation:
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
            <RegionalBenchmarkCard city="Las Vegas" vertical="seo" />
          </div>
        </section>

        <LocalSeoArchitectureBlueprint
            badge="// LAS VEGAS LOCAL SEARCH & AI RANKING BLUEPRINT"
            title="4-Layer Local SEO Stack: Google Maps to AI Overviews"
            subtitle="Explore how GBP API optimization, multi-directory citation syncing, structured schema graphs, and AI citation crawlers work together to dominate Las Vegas local search."
            city="Las Vegas"
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
                A systematic, engineering-first methodology for establishing market dominance across Clark County:
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
                Evaluating Las Vegas SEO Agencies: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Compare engineering-led local search optimization against traditional marketing agencies before you sign:
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '16px', overflow: 'hidden', maxWidth: '960px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1.4fr', background: '#141414', color: '#FFFFFF', padding: '16px 24px', fontWeight: 700, fontSize: '13.5px' }}>
                <div>Evaluation Factor</div>
                <div style={{ color: '#FF5622' }}>FactoryJet Engineering Model</div>
                <div style={{ color: '#A0A0B0' }}>Traditional SEO Agencies</div>
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
        <LocalSeoOpportunityEstimator city="Las Vegas" region="us" />

        {/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION ── */}
        <FAQ
          eyebrow="LAS VEGAS LOCAL SEARCH INTELLIGENCE"
          headline="Frequently Asked Questions About Local SEO in Las Vegas NV"
          lead="Direct, plain English answers to what Las Vegas business owners and marketing directors ask about search visibility:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 11. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <SeoCityLinksUS currentCity="las-vegas" />
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
              <span>Verified Rank Dominance</span>
            </div>

            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Ready to Dominate Las Vegas Local Search?
            </h2>

            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Claim your complimentary local SEO audit and discover the exact ranking and citation gaps preventing your firm from capturing the Google Maps 3-Pack.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Claim Your Free SEO Audit" region="us" btnVariant="primary-light" modalVariant="seo" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale="us" />
    </>
  );
}
