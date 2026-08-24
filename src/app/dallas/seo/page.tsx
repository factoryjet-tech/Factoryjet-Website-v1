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
const CANONICAL = 'https://factoryjet.com/dallas/seo';

export const metadata: Metadata = {
  title: 'Dallas Local SEO Agency | Google Map Pack 3-Pack | FactoryJet',
  description:
    'Dallas local SEO agency. Top Google Map Pack 3-pack rankings, local citation sync, GBP optimization, and organic search growth for Texas businesses.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Dallas Local SEO Agency | Google Map Pack 3-Pack | FactoryJet',
    description:
      'Dallas local SEO agency. Top Google Map Pack 3-pack rankings, local citation sync, and revenue-driven search growth for Texas businesses.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Dallas Local SEO Agency' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dallas Local SEO Agency | Google Map Pack 3-Pack | FactoryJet',
    description: 'Dominate Dallas Google 3-Pack map rankings and high-intent local search queries with FactoryJet.',
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
  { num: 'Top 3', title: 'Google Map Pack Targets', desc: 'Precision local grid rank optimization capturing high-value phone calls and direction requests.', icon: '📍' },
  { num: '100%', title: 'NAP Citation Consistency', desc: 'Flawless name, address, and phone data syndicated across Apple Maps, Bing, Google, and Yelp.', icon: '🛡️' },
  { num: '150+', title: 'Local Search Audits', desc: 'Detailed ranking factor inspections across on-page, entity schema, and local link profiles.', icon: '🔍' },
  { num: '0%', title: 'Black Hat Risk', desc: 'White-hat entity engineering strictly compliant with Google Webmaster and Local Search guidelines.', icon: '⚖️' },
];

const DISTRICTS = [
  {
    corridor: 'Uptown Dallas & Central Business District',
    query: 'corporate litigation attorney dallas',
    focus: 'Commercial Law, Private Wealth & Executive Advisory',
    desc: 'Dense corporate center in downtown Dallas. We optimize localized legal knowledge graphs, partner practice area silos, and verified client review schemas to capture high-stakes legal inquiries.',
  },
  {
    corridor: 'Plano & Telecom Corridor',
    query: 'it consulting company plano tx',
    focus: 'Enterprise Tech, Cloud Services & B2B Consulting',
    desc: 'High-density tech business district. We build deep service area silos, technical credential schemas, and local B2B directory citations that win regional IT procurement contracts.',
  },
  {
    corridor: 'Frisco & North Platinum Corridor',
    query: 'sports medicine specialist frisco',
    focus: 'Specialty Healthcare, Orthopedics & Med Spas',
    desc: 'Fast-growing medical hub anchored by premier sports venues. We implement medical specialty schema, physician credentials, and local neighborhood landing pages that drive patient bookings.',
  },
  {
    corridor: 'Arlington & Mid-Cities',
    query: 'commercial roofing contractor arlington tx',
    focus: 'Commercial Contractors, Roofing & Mechanical Trades',
    desc: 'Central DFW contractor hub. We dominate high-intent emergency repair searches with verified service radius polygons, localized landing pages, and automated review capture.',
  },
  {
    corridor: 'Irving & Las Colinas Urban Center',
    query: 'corporate staffing agency irving',
    focus: 'Corporate Services, Commercial Real Estate & Staffing',
    desc: 'Major corporate campus cluster. We build localized trust signals, thought leadership content silos, and authoritative local citation networks capturing corporate inquiries.',
  },
  {
    corridor: 'Fort Worth Stockyards & Alliance Corridor',
    query: 'industrial equipment supplier fort worth',
    focus: 'Industrial Tooling, Logistics, Freight & Fabrication',
    desc: 'Heavy industrial and aviation hub. We capture regional B2B supply chain procurement queries by optimizing technical capability pages, B2B service schemas, and local trade citations.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Commercial Contractors, Roofing & Mechanical Trades',
    headline: 'Capturing High-Value Commercial & Emergency Service Calls Across North Texas',
    description:
      'Commercial property managers and facility directors across Dallas, Collin, and Tarrant counties do not browse pages of search results. When hail storms damage roofs or HVAC units fail, they call the top 3 verified businesses in the Google Map Pack. We structure your Google Business Profile, service radius coordinates, localized job photo geo-tagging, and high-authority local contractor citations to dominate high-ticket service queries.',
    image: '/images/us/services/roofing-seo/hero.webp',
    alt: 'Dallas commercial contractor and roofing local SEO ranking strategy',
    points: [
      'Hyper-localized neighborhood landing pages covering 25+ DFW suburban municipalities',
      'Automated review generation workflows securing verified customer testimonials with keyword signals',
      'Structured LocalBusiness and Contractor JSON-LD schema with exact service area coordinates',
    ],
  },
  {
    sector: 'Healthcare Practices, Specialty Dental & Medical Clinics',
    headline: 'Driving High-Value Patient Appointments in Dallas’s Premier Medical Corridors',
    description:
      'From private practices in the Medical District to surgical centers in Frisco and Plano, local search visibility determines your patient acquisition costs. We optimize your medical entity profiles, connect provider NPI registries to local schema, optimize Google Maps categories, and ensure spotless citation consistency across healthcare directories.',
    image: '/images/us/services/dental-seo/team.webp',
    alt: 'Dallas healthcare dental and medical practice local SEO growth',
    points: [
      'Physician-specific and clinic-level Google Business Profile optimization with appointment booking links',
      'MedicalSpecialty and Physician schema markup aligning with state licensing and hospital networks',
      'Strict HIPAA-compliant review response protocols and localized patient guide content hubs',
    ],
  },
  {
    sector: 'Litigation Law Firms, Personal Injury & Defense Practices',
    headline: 'Dominating High-Stakes Legal Search Queries in Uptown Dallas',
    description:
      'Legal keywords in Dallas are among the most competitive in the United States. Ranking in the Map Pack and top organic positions requires deep entity authority. We build comprehensive legal practice area content silos, optimize attorney bar admission entities, earn high-tier legal directory citations, and structure verified case result knowledge panels.',
    image: '/images/us/services/law-firm-seo/team.webp',
    alt: 'Dallas law firm litigation and corporate counsel local SEO architecture',
    points: [
      'Practice area content architecture engineered for high-intent legal search queries',
      'LegalService and Attorney schema with state bar credentials and practice jurisdiction tags',
      'Authoritative local legal citations across Avvo, Justia, Martindale, and Texas Bar associations',
    ],
  },
  {
    sector: 'Industrial Suppliers, Warehousing & Fleet Logistics',
    headline: 'Winning B2B Procurement Searches Across the DFW Logistics Hub',
    description:
      'Industrial buyers and supply chain managers in Fort Worth, Irving, and Alliance search for local fabrication, machining, and logistics partners. We optimize your technical capability matrices, register verified B2B industry citations, and structure commercial supplier schemas to capture corporate purchase orders.',
    image: '/images/us/manufacturing-website-design/rfq-desk.webp',
    alt: 'Dallas Fort Worth industrial supplier and logistics B2B local search optimization',
    points: [
      'B2B supplier and fabrication capability schemas linking equipment specs to regional search queries',
      'Google Maps optimization for commercial loading dock addresses and industrial park locations',
      'Industry-specific citation syndication across ThomasNet, IndustryNet, and Texas manufacturing networks',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Ending Low Proximity Traps & Geo-Grid Disappearance',
    problem: 'Most local businesses rank well right in front of their office but disappear completely from the 3-Pack just two miles away in adjacent DFW suburbs.',
    solution: 'We deploy localized entity content hubs and multi-radius geo-signals that expand your Google Map Pack visibility across Dallas, Collin, and Tarrant counties.',
  },
  {
    num: '02',
    title: 'Resolving Inconsistent NAP Data & Corrupted Directory Citations',
    problem: 'Duplicate listings, old suite numbers, and mismatched phone formats across Yelp, Apple Maps, and Bing confuse search algorithms and suppress rankings.',
    solution: 'We audit and direct-sync your business data across primary data aggregators (Data Axle, Neustar, Foursquare) to guarantee 100% NAP consistency.',
  },
  {
    num: '03',
    title: 'Neutralizing Competitor Map Spam & Fake Listing Floods',
    problem: 'Unscrupulous competitors stuff keywords into their GBP business names and create fake virtual office listings that displace legitimate local companies.',
    solution: 'We run weekly automated geo-grid scans and file formal Google Redressal complaints backed by state corporate records to clear out map spam.',
  },
  {
    num: '04',
    title: 'Transforming Empty Rankings into Tracked Revenue & Phone Calls',
    problem: 'Standard agencies report on vanity impressions or search volume without tracking how many phone calls, form fills, or consultation bookings were produced.',
    solution: 'We implement call tracking, dynamic number insertion, and Google Business Profile conversion tracking to report on actual client revenue.',
  },
];

const ROADMAP_STEPS = [
  {
    phase: 'Phase 01',
    title: 'Local Entity Audit & GBP Optimization',
    desc: 'We perform a 50-point inspection of your Google Business Profile, citation consistency, and local competitors across target DFW ZIP codes.',
    deliverables: ['50-point GBP health audit', 'Geo-grid benchmark scan across 15 miles', 'Category & primary keyword alignment', 'Spam competitor audit'],
  },
  {
    phase: 'Phase 02',
    title: 'On-Page Entity SEO & Local Content Hubs',
    desc: 'We inject advanced LocalBusiness schema and build hyper-relevant neighborhood and suburban landing pages covering core DFW service areas.',
    deliverables: ['JSON-LD LocalBusiness & Service schema', 'DFW neighborhood landing pages', 'Optimized localized header hierarchies', 'Geo-tagged image metadata integration'],
  },
  {
    phase: 'Phase 03',
    title: 'Citation Syndication & Review Acceleration',
    desc: 'We synchronize your business data across tier-1 directories and deploy automated review generation workflows to build verified 5-star ratings.',
    deliverables: ['Data aggregator API syndication', 'Tier-1 directory verification (60+ hubs)', 'Automated SMS/Email review request funnel', 'Local Chamber & industry citations'],
  },
  {
    phase: 'Phase 04',
    title: 'Map Pack Geo-Grid Defense & Monthly Reporting',
    desc: 'We continuously track your 3-Pack rankings across a 15-mile grid, publish weekly profile updates, and report on verified inbound calls.',
    deliverables: ['Weekly geo-grid proximity tracking', 'Weekly GBP photo & post management', 'Ongoing competitor spam removal', 'Transparent call & revenue reporting'],
  },
];

const EVALUATION_CRITERIA = [
  {
    label: 'Google Business Profile Optimization',
    factoryjet: 'Deep Entity Engineering. Complete category optimization, weekly geotagged updates, structured Q&A seed libraries, and automated review velocity workflows.',
    traditional: 'Basic Setup Only. Simple address verification without category testing, geo-grid monitoring, or spam defense against competitors.',
  },
  {
    label: 'Local Schema & Structured Data',
    factoryjet: 'Enterprise JSON-LD Graph. Complete LocalBusiness, ServiceArea, GeoCoordinates, and aggregateRating markup embedded directly in server-rendered code.',
    traditional: 'Generic Plugin Schema. Basic auto-generated Yoast schema lacking exact coordinates, service radius polygons, or verified entity connections.',
  },
  {
    label: 'Reporting & Attribution',
    factoryjet: 'Real Business Metrics. Track verified phone calls, form fills, Map Pack direction requests, and geo-grid ranking improvements over time.',
    traditional: 'Vague Vanity Reports. PDF reports highlighting total impressions or vanity keyword rankings that do not correlate with inbound revenue.',
  },
  {
    label: 'Spam Defense & Listing Security',
    factoryjet: 'Active Map Defense. Regular audits of competitor keyword stuffing and reporting of fake listings that artificially crowd the Dallas Map Pack.',
    traditional: 'Passive Monitoring. Zero intervention against fraudulent competitor tactics that displace your legitimate business from top map rankings.',
  },
];

const FAQ_CATEGORIES = [
  { key: 'local-seo', label: 'Local SEO Strategy' },
  { key: 'map-pack', label: 'Google Map Pack' },
  { key: 'citations', label: 'Citations & NAP' },
  { key: 'dallas', label: 'Dallas Specifics' },
  { key: 'reviews', label: 'Reviews & Reputation' },
  { key: 'timeline', label: 'Timelines & ROI' },
];

const FAQ_ITEMS = [
  {
    category: 'local-seo',
    question: 'What is the difference between local SEO and traditional organic SEO in Dallas?',
    answer:
      'Traditional SEO focuses on nationwide or regional keyword rankings in standard blue search links. Local SEO focuses on capturing geographically constrained searches (such as "commercial roofer Dallas" or "dentist near me") by optimizing for the Google Map Pack 3-pack and localized organic results. Local SEO relies heavily on Google Business Profile health, citation consistency across directories, local reviews, and geo-targeted schema.',
  },
  {
    category: 'timeline',
    question: 'How long does it take to rank in the Dallas Google Map Pack?',
    answer:
      'Initial improvements in low-competition suburbs or niche service categories often appear within 30 to 60 days. In highly competitive Dallas corridors (such as personal injury law or commercial roofing), reaching the top 3 positions typically takes 90 to 180 days of systematic citation building, on-page entity optimization, and review velocity.',
  },
  {
    category: 'map-pack',
    question: 'Why does our Dallas business rank on maps near our office but disappear 3 miles away?',
    answer:
      'Google weighs proximity heavily in map rankings. Without deep localized entity signals, your ranking radius remains tightly clustered around your physical address. We expand your ranking radius across the entire DFW metro area by building neighborhood-specific service pages, earning location-specific backlinks, and optimizing localized service area schema.',
  },
  {
    category: 'dallas',
    question: 'How do you handle local SEO for businesses with multiple DFW locations?',
    answer:
      'We establish dedicated, verified Google Business Profiles for each physical location, ensuring zero phone number or address cross-contamination. On your website, we engineer unique location landing pages with bespoke content, distinct LocalBusiness schema, and individualized driving directions, eliminating internal keyword cannibalization.',
  },
  {
    category: 'citations',
    question: 'What is NAP consistency and why is it crucial for Dallas search rankings?',
    answer:
      'NAP stands for Name, Address, and Phone number. Search engines compare your business data across hundreds of directories like Google, Apple Maps, Bing, Yelp, and Data Axle. If variations in spelling, suite numbers, or phone numbers exist, search engines lose confidence in your location data and suppress your map rankings. We audit and synchronize 100% of your citations.',
  },
  {
    category: 'reviews',
    question: 'Can you help our business remove fake 1-star reviews or competitor spam?',
    answer:
      'We systematically flag and appeal reviews that violate Google’s Prohibited and Restricted Content policies (such as hate speech, conflict of interest, or fake spam accounts). For legitimate negative feedback, we provide professional response frameworks and deploy automated review generation funnels to bury negative ratings with verified 5-star client testimonials.',
  },
  {
    category: 'local-seo',
    question: 'How do you structure local schema markup for Dallas service area businesses?',
    answer:
      'We inject custom server-rendered JSON-LD schema defining your exact primary service categories, GeoShape service radius polygons covering DFW counties (Dallas, Tarrant, Collin, Denton), verified licensing credentials, and explicit opening hours. This ensures Google and AI crawlers understand your exact operating footprint.',
  },
  {
    category: 'citations',
    question: 'Do you optimize Apple Maps and Apple Business Connect alongside Google?',
    answer:
      'Yes. Millions of Dallas iPhone users and CarPlay drivers utilize Apple Maps for local searches. We claim, optimize, and synchronize your Apple Business Connect profile with custom action buttons, verified hours, and high-resolution brand photography.',
  },
  {
    category: 'local-seo',
    question: 'How does local SEO help our business appear in AI search answers like ChatGPT and Perplexity?',
    answer:
      'AI search engines synthesize local recommendations using structured web data, verified citation sources, and Google Business Profile information. By establishing spotless NAP consistency, rich FAQ schemas, and authoritative local business citations, we position your company as the authoritative recommendation when AI models process local queries.',
  },
  {
    category: 'map-pack',
    question: 'How do you combat competitors who stuff keywords into their Google Business Profile name?',
    answer:
      'Keyword stuffing in business names violates Google Business Profile guidelines. We perform regular local grid scans and submit Redressal Complaints with state licensing documentation to remove unauthorized keywords from competitor listings, restoring fair 3-Pack rankings.',
  },
  {
    category: 'timeline',
    question: 'What metrics do you track to measure the ROI of our Dallas local SEO campaign?',
    answer:
      'We track concrete commercial indicators: total verified phone calls from map listings, direction requests, website visits from local search, click-to-call mobile conversions, and geo-grid 3-Pack ranking expansions across target Dallas ZIP codes.',
  },
  {
    category: 'map-pack',
    question: 'Can a service-area business without a public storefront rank in the Dallas Map Pack?',
    answer:
      'Yes. You can configure your Google Business Profile as a Service-Area Business (SAB) with a hidden residential address. We optimize your designated service radius and pair it with strong suburban landing pages to win map pack visibility without displaying your home address.',
  },
  {
    category: 'citations',
    question: 'Why are local backlinks from Dallas websites more valuable than generic links?',
    answer:
      'Search engines evaluate local relevance when ranking Map Pack listings. A link from a Dallas Chamber of Commerce, local business association, or regional news publication passes strong geographic trust signals that generic national links cannot replicate.',
  },
  {
    category: 'reviews',
    question: 'How often should our Dallas business post updates or photos to our Google Profile?',
    answer:
      'We recommend at least one high-quality update and 2 to 4 geotagged project photos weekly. Consistent profile activity signals an active, trustworthy business, which positively influences Google’s local ranking algorithm.',
  },
  {
    category: 'dallas',
    question: 'What is the role of neighborhood landing pages in our Dallas SEO strategy?',
    answer:
      'Neighborhood pages allow your website to target specific commercial micro-markets (such as Plano, Frisco, or Fort Worth) with hyper-relevant content, local testimonials, and tailored schema without diluting your primary homepage focus.',
  },
  {
    category: 'reviews',
    question: 'How do you handle review generation without violating Google’s anti-gating policies?',
    answer:
      'We implement direct SMS and email review request workflows that invite all verified clients to leave honest feedback on Google. We avoid review gating or incentive schemes, ensuring full compliance with Google guidelines and FTC regulations.',
  },
  {
    category: 'citations',
    question: 'What happens if our business moves office locations within DFW?',
    answer:
      'We execute a comprehensive address migration protocol: updating your Google Business Profile, submitting state corporate filing verification, synchronizing primary data aggregators, updating website schema, and monitoring citations to prevent duplicate listing penalties.',
  },
  {
    category: 'timeline',
    question: 'Do you require long-term annual contracts for Dallas local SEO?',
    answer:
      'No. We operate on transparent monthly retainers with clear deliverable milestones. Our retention is built on measurable ranking improvements, verified inbound phone calls, and clear revenue growth rather than restrictive contract terms.',
  },
  {
    category: 'local-seo',
    question: 'Can local SEO help our B2B manufacturing or logistics business in Dallas?',
    answer:
      'Yes. Corporate buyers and procurement officers frequently search for local suppliers, fabrication shops, and logistics providers. Local SEO ensures your facility appears at the top of commercial map queries and localized B2B industrial searches.',
  },
  {
    category: 'timeline',
    question: 'How do we begin our Dallas local SEO campaign with FactoryJet?',
    answer:
      'Schedule a discovery consultation or request a complimentary 50-point Dallas Local SEO Audit. We will analyze your current Map Pack visibility, identify citation errors, evaluate your local competitors, and present an actionable growth plan within 24 hours.',
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
  name: 'FactoryJet - Dallas Local SEO Agency',
  image: 'https://factoryjet.com/og-default.png',
  url: CANONICAL,
  telephone: '+1-832-998-8422',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dallas',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 32.7767,
    longitude: -96.797,
  },
  areaServed: [
    { '@type': 'City', name: 'Dallas' },
    { '@type': 'City', name: 'Plano' },
    { '@type': 'City', name: 'Frisco' },
    { '@type': 'City', name: 'Irving' },
    { '@type': 'City', name: 'Fort Worth' },
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
  name: 'Dallas Local SEO & Map Pack Optimization',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Local SEO, Google Business Profile Optimization & Geo-Grid Defense',
  description:
    'Senior engineering-led Google Business Profile optimization, local citation syndication, and geo-grid rank defense for Dallas businesses.',
  areaServed: { '@type': 'State', name: 'Texas' },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Dallas Local SEO Agency | Google Map Pack 3-Pack | FactoryJet',
  description: 'Top Google Map Pack 3-pack rankings, local citation sync, and revenue-driven search growth for Texas businesses.',
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
    { '@type': 'ListItem', position: 2, name: 'Local SEO', item: 'https://factoryjet.com/services/local-seo' },
    { '@type': 'ListItem', position: 3, name: 'Dallas', item: CANONICAL },
  ],
};

export default function DallasSeoPage() {
  return (
    <>
      <script id="dal-seo-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="dal-seo-local-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      <script id="dal-seo-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="dal-seo-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="dal-seo-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>Dallas Local SEO &amp; Map Pack Dominance</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Dominate the Dallas Google Map Pack &amp; Local Search
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  Capture high-intent local phone calls, consultation inquiries, and foot traffic across the DFW Metroplex. Precision GBP optimization, 100% NAP citation sync, and no long-term contracts.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get Your Free Local SEO Audit" region="us" btnVariant="primary-dark" />
                  <a href="#dal-seo-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Dallas Search Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/dallas-seo/dallas-seo-consultant-call.webp"
                  alt="Dallas Local SEO Google Maps Strategy and Ranking Analysis"
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
              <div className="rv-ticker-label">Enterprise Local SEO &amp; Citation Stack</div>
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
                  src="/images/us/dallas-seo/dallas-local-seo-team.webp"
                  alt="FactoryJet local SEO engineers reviewing Dallas geo-grid ranking signals"
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
                  <span>Proximity, Reviews &amp; Entity Trust</span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
                  Capturing High-Value Inbound Calls in DFW
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  From Uptown Dallas to Plano, Frisco, and Fort Worth, we help commercial contractors, law firms, healthcare providers, and industrial suppliers dominate local search.
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
                  <ModalCTAButton label="Schedule Local SEO Audit" region="us" btnVariant="primary-dark" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04. DALLAS DISTRICTS SECTION ── */}
        <section id="dal-seo-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>DFW Search Coverage</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Targeting Key Dallas-Fort Worth Search Corridors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every commercial sub-market in Dallas, Collin, and Tarrant county demands localized proximity targeting:
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
                <span>Industry-Specific Systems</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Specialized Local Search Frameworks for Dallas Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Discover how our localized entity engineering captures high-value inbound calls across core industries:
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

        {/* ── 06. CORE PAIN POINTS SECTION ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>The FactoryJet Advantage</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Why Dallas Businesses Choose FactoryJet Local SEO
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                We replace empty keyword promises with technical entity engineering and measurable ROI:
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
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#FF5622', letterSpacing: '0.08em' }}>The FactoryJet Technical Approach:</span>
                      <p style={{ fontSize: '13.5px', color: '#141414', fontWeight: 600, margin: '4px 0 0', lineHeight: 1.5 }}>{p.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 07. ARCHITECTURE BLUEPRINT ── */}
        <div id="local-seo-architecture-blueprint">
          <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: '48px 0 16px' }}>
          <div className="pp-wrap">
            <RegionalBenchmarkCard city="Dallas" vertical="seo" />
          </div>
        </section>

        <LocalSeoArchitectureBlueprint
            badge="// DALLAS LOCAL SEO & MAP PACK BLUEPRINT"
            title="Entity-Led Local Search: From Citations to Inbound Calls"
            subtitle="Explore how Google Business Profile signals, data aggregator sync, LocalBusiness schema, and review acceleration work together."
            city="Dallas"
            ctaLabel="Get Your Free Local SEO Audit"
            region="us"
          />
        </div>

        {/* ── 08. STEP-BY-STEP ROADMAP MATRIX ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(64px, 9vh, 104px) 0' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 56px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>90-Day Execution Plan</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Our 90-Day Local Ranking Acceleration Framework
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                A systematic, milestone-driven protocol to establish 3-Pack Map dominance and grow verified phone inquiries:
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

        {/* ── 09. EVALUATION FRAMEWORK TABLE ── */}
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
                Evaluating Dallas Local SEO Agencies: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Compare engineering-first entity optimization against standard directory sellers before you invest:
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '16px', overflow: 'hidden', maxWidth: '960px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1.4fr', background: '#141414', color: '#FFFFFF', padding: '16px 24px', fontWeight: 700, fontSize: '13.5px' }}>
                <div>Evaluation Pillar</div>
                <div style={{ color: '#FF5622' }}>FactoryJet Entity Model</div>
                <div style={{ color: '#A0A0B0' }}>Standard Local SEO Providers</div>
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
        <LocalSeoOpportunityEstimator city="Dallas" region="us" />

        {/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION ── */}
        <FAQ
          eyebrow="DALLAS LOCAL SEO INTELLIGENCE"
          headline="Frequently Asked Questions About Local SEO in Dallas TX"
          lead="Direct, plain English answers to what Dallas business owners ask about Google Map Pack rankings and local search:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 11. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <SeoCityLinksUS currentCity="dallas" />
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
              <span>No Contracts &amp; Transparent ROI</span>
            </div>

            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Ready to Win the Dallas Google Map Pack?
            </h2>

            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Claim your free 50-point Dallas Local SEO audit. We will evaluate your GBP health, citation consistency, and map ranking radius.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get Your Free Local SEO Audit" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale="us" />
    </>
  );
}
