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
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-08-29';
const CANONICAL = 'https://factoryjet.com/tampa/seo';

export const metadata: Metadata = {
  title: 'Tampa Local SEO Agency | Google Maps 3-Pack | FactoryJet',
  description:
    'Tampa local SEO agency. Dominate Google Maps 3-Pack, organic rankings, and AI search citations across Downtown Tampa, Westshore, and Ybor City. Free audit.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Tampa Local SEO Agency | Google Maps 3-Pack | FactoryJet',
    description:
      'Tampa local SEO agency. Dominate Google Maps 3-Pack, organic rankings, and AI search citations across Downtown Tampa, Westshore, and Ybor City.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Tampa Local SEO Agency' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tampa Local SEO Agency | Google Maps 3-Pack | FactoryJet',
    description: 'Dominate Tampa local search and AI answer engines. Verified Google Maps 3-Pack capture and entity optimization.',
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
  { num: 'Top 3', title: 'Google Maps Ranking SLA', desc: 'Engineered for dominance in Google Local 3-Pack across high-value Tampa Bay commercial corridors.', icon: '📍' },
  { num: '4.8x', title: 'Inbound Lead Velocity', desc: 'Average qualified local phone call and consultation lead growth within 90 days of rollout.', icon: '📈' },
  { num: '100%', title: 'Clean Entity Attribution', desc: 'Structured JSON-LD schemas linking your Google Knowledge Graph, address, and practitioner licenses.', icon: '🛡️' },
  { num: '0', title: 'Spammy Link Networks', desc: 'Strict white-hat local citation authority and real editorial publication placements only.', icon: '⚡' },
];

const DISTRICTS = [
  {
    corridor: 'Downtown Tampa & Water Street',
    query: 'corporate law firm seo downtown tampa',
    focus: 'Fintech Headquarters, Corporate Law & Commercial Real Estate',
    desc: 'The vibrant economic core of Tampa Bay. High-intent local searches demand corporate litigation schemas, verified partner credentials, and top organic rankings.',
  },
  {
    corridor: 'Westshore Business District',
    query: 'b2b professional services seo westshore tampa',
    focus: 'Regional Corporate HQs, Executive Search & B2B Professional Services',
    desc: 'The largest commercial office market in Florida. Captures high-ticket executive search inquiries, corporate advisory retainers, and B2B vendor searches.',
  },
  {
    corridor: 'Ybor City & Historic District',
    query: 'creative agency seo ybor city tampa',
    focus: 'Creative Agencies, Architecture Studios & Boutique Hospitality',
    desc: 'Historic creative and technology nexus. Features visual schema integration, localized service radius targeting, and Google Maps prominence.',
  },
  {
    corridor: 'South Tampa & Hyde Park',
    query: 'aesthetic clinic seo south tampa',
    focus: 'Private Wealth Advisory, Aesthetic Medicine & Luxury Real Estate',
    desc: 'Affluent residential and commercial strip. Captures high-ticket elective procedure consultations, private wealth management, and luxury residential listings.',
  },
  {
    corridor: 'Gateway & Carillon Park',
    query: 'medical device seo carillon park',
    focus: 'Healthcare Systems, Medical Device Technology & Clinical Research',
    desc: 'Dense healthcare innovation hub. Multi-location practice architectures, physician directories, and structured patient review funnels.',
  },
  {
    corridor: 'Port Tampa Bay & East Tampa Corridor',
    query: 'maritime logistics seo port tampa bay',
    focus: 'Maritime Logistics, Industrial Cold Storage & Heavy Distribution',
    desc: 'Florida’s largest cargo port. B2B service inquiries require technical capability landing pages, freight quote calculators, and sub-second edge performance.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Medical Specialties, Plastic Surgery & Concierge Health',
    headline: 'Capturing High-Value Patients Across South Tampa & Westshore',
    description:
      'In Tampa Bay’s competitive healthcare and aesthetic sectors, patients research clinic reputations and doctor credentials thoroughly before booking. We optimize Google Business Profiles, implement medical specialty schemas, generate local patient review momentum, and capture top rankings for high-ticket elective queries.',
    image: '/images/us/services/dental-seo/hero.webp',
    alt: 'Tampa healthcare medical clinic and elective surgery local SEO optimization',
    points: [
      'Multi-practitioner Google Business Profile optimization with procedure sub-categories',
      'MedicalProcedure and Physician structured JSON-LD schema linking hospital affiliations',
      'Hyper-local neighborhood geo-pages targeting South Tampa, Hyde Park, and Carrollwood',
    ],
  },
  {
    sector: 'Corporate Law, Maritime Litigation & Commercial Real Estate',
    headline: 'Dominating High-Stakes Search Corridors for Tampa Bay Law Firms',
    description:
      'Legal search terms in Hillsborough and Pinellas counties are intensely competitive. We engineer impenetrable local SEO architectures featuring practice area knowledge hubs, attorney bar admission schemas, verified case settlement showcases, and localized citation dominance.',
    image: '/images/us/services/law-firm-seo/hero.webp',
    alt: 'Tampa corporate law firm litigation and maritime law local SEO strategy',
    points: [
      'LegalService and Attorney schema linking Florida Bar verified credentials',
      'Localized practice area silos targeting Downtown Tampa, St. Petersburg, and Clearwater',
      'High-authority local legal directory citations and editorial publication placements',
    ],
  },
  {
    sector: 'Wealth Management, Family Offices & Executive Consulting',
    headline: 'Topical Authority & AI Citation Engineering for Tampa Financial Leaders',
    description:
      'Water Street and Westshore wealth managers require commanding search presence to capture relocating high-net-worth families and corporate leaders. We build comprehensive topical clusters, executive credential schemas, and structured entity graphs that earn citations in ChatGPT Search, Perplexity, and Google AI Overviews.',
    image: '/images/us/saas-website-design/hero.webp',
    alt: 'Tampa private wealth management and executive financial consulting SEO strategy',
    points: [
      'Topical content graph covering Florida tax advantages and private wealth advisory',
      'Structured FinancialService and Organization schema for AI citation retrieval',
      'High-authority regional financial PR and tier-one publication placements',
    ],
  },
  {
    sector: 'Maritime Cargo, Industrial Cold Storage & Heavy Logistics',
    headline: 'Driving High-Ticket Commercial Inquiries Across Port Tampa Bay',
    description:
      'Marine cargo operators, terminal logistics providers, and cold storage distributors in East Tampa require steady commercial contract flow. We optimize your local digital footprint to capture supply chain directors, fleet managers, and regional logistics coordinators.',
    image: '/images/us/manufacturing-website-design/shop-floor.webp',
    alt: 'Tampa maritime cargo logistics and industrial cold storage local SEO architecture',
    points: [
      'Commercial logistics capability landing pages optimized for regional radius search queries',
      'High-speed mobile performance ensuring immediate freight quote request submissions',
      'Structured LocalBusiness schema with verified commercial service area parameters',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Ending Monthly SEO Retainers with Zero Measurable Inbound Calls',
    problem: 'Traditional Tampa agencies send generic monthly PDF reports filled with vanity impressions while your Google Maps rankings remain stagnant on page two.',
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
    deliverables: ['Google Maps rank grid scan across Tampa Bay', 'NAP consistency and duplicate listing audit', 'Competitor keyword and backlink gap analysis', 'Baseline local visibility scorecard'],
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
  { key: 'local', label: 'Tampa Bay Market Focus' },
  { key: 'reporting', label: 'Tracking & Deliverables' },
];

const FAQ_ITEMS = [
  {
    category: 'pricing',
    question: 'How much does local SEO cost for a Tampa business?',
    answer:
      'Local SEO campaigns are priced based on your market competition, number of physical locations, practice area scope, and current domain health. A focused single-location local campaign targeting core Tampa corridors is structured on a transparent monthly retainer with zero long-term lock-ins. Multi-location healthcare networks or enterprise legal practices requiring county-wide rank dominance receive tailored scoping with clear milestone deliverables.',
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
    question: 'How quickly can our Tampa business expect to see Google Maps rank improvements?',
    answer:
      'Foundational GBP optimizations, schema deployments, and NAP deduplication typically produce noticeable ranking improvements within 30 to 60 days. Highly competitive queries in Westshore or Downtown Tampa generally achieve solid Top 3 Local Pack dominance within 90 to 120 days of consistent entity authority building.',
  },
  {
    category: 'timeline',
    question: 'What factors determine how fast a Tampa business can rank in the Local 3-Pack?',
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
    question: 'Do you manage multi-location local SEO campaigns across Tampa Bay?',
    answer:
      'Yes. We build dedicated, location-specific landing pages and optimize distinct Google Business Profiles for each physical office across Tampa, St. Petersburg, Clearwater, Brandon, Riverview, and Wesley Chapel.',
  },
  {
    category: 'local',
    question: 'Can you help our practice outrank entrenched competitors in Westshore and South Tampa?',
    answer:
      'Yes. By combining technical website speed, deep topical content authority, clean multi-aggregator citations, and consistent review velocity, we systematically capture top 3 map positions from legacy competitors.',
  },
  {
    category: 'local',
    question: 'How do service-area businesses without a public storefront rank in Tampa?',
    answer:
      'We configure your Google Business Profile as a verified Service Area Business (SAB), hiding your residential address while establishing explicit service boundaries across your target ZIP codes and commercial corridors.',
  },
  {
    category: 'local',
    question: 'Can you optimize for both Hillsborough and Pinellas county searches?',
    answer:
      'Yes. We build dedicated geo-targeted landing page silos and citation networks tailored for both sides of Tampa Bay, ensuring strong organic visibility in both Tampa and St. Petersburg.',
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
      'A geo-grid scan measures your Google Maps ranking position at dozens of physical coordinates across Tampa Bay, showing exactly where your business appears in the top 3 and where optimization is needed.',
  },
  {
    category: 'reporting',
    question: 'How do you combat spam and fake competitor listings on Google Maps?',
    answer:
      'We continuously monitor your primary search categories in Tampa, identifying keyword-stuffed business names and fake virtual office listings, and submit formal redressal complaints to Google to remove spam competitors.',
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
  name: 'FactoryJet - Tampa Local SEO Agency',
  image: 'https://factoryjet.com/og-default.png',
  url: CANONICAL,
  telephone: '+1-832-998-8422',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tampa',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 27.9506,
    longitude: -82.4572,
  },
  areaServed: [
    { '@type': 'City', name: 'Tampa' },
    { '@type': 'City', name: 'St. Petersburg' },
    { '@type': 'City', name: 'Clearwater' },
    { '@type': 'City', name: 'Brandon' },
    { '@type': 'City', name: 'Wesley Chapel' },
  ],
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Founder & Chief Technical Architect',
    url: 'https://factoryjet.com/about',
    sameAs: [
      'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
      'https://github.com/factoryjet-tech',
    ],
  },
  name: 'Tampa Local SEO & Google Maps Optimization',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Local SEO, Google Business Profile Management & AI Search Optimization',
  description:
    'Senior engineering-led local search engine optimization, Google Maps 3-Pack capture, structured data graphs, and AI citation engineering for Tampa businesses.',
  areaServed: [
    { '@type': 'City', name: 'Tampa' },
    { '@type': 'State', name: 'Florida' },
    { '@type': 'Country', name: 'United States' },
  ],
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/tampa/seo#webpage',
  name: 'Tampa Local SEO Agency | Google Maps 3-Pack | FactoryJet',
  description: 'Tampa local SEO agency. Dominate Google Maps 3-Pack, organic rankings, and AI search citations across Downtown Tampa, Westshore, and Ybor City.',
  url: CANONICAL,
  dateModified: PAGE_MODIFIED,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Founder & Chief Technical Architect',
    url: 'https://factoryjet.com/about',
    sameAs: [
      'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
      'https://github.com/factoryjet-tech',
    ],
  },
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://factoryjet.com/#website',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/' },
    { '@type': 'ListItem', position: 2, name: 'SEO', item: 'https://factoryjet.com/services/seo' },
    { '@type': 'ListItem', position: 3, name: 'Tampa', item: CANONICAL },
  ],
};

export default function TampaSeoPage() {
  return (
    <>
      <script id="tpa-seo-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="tpa-seo-local-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      <script id="tpa-seo-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="tpa-seo-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="tpa-seo-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>Tampa Local SEO &amp; AI Citation Authority</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Tampa Local SEO Agency for Market Leaders
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 24px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  Dominate the Google Maps 3-Pack, organic search rankings, and AI conversational search across Downtown Tampa, Westshore, and South Tampa. Engineered for verified inbound calls and high-ticket consultations.
                </p>

                {/* Answer-First Brief */}
                <div style={{ background: '#F6F6F9', borderLeft: '3px solid #FF5622', padding: '14px 18px', borderRadius: '0 12px 12px 0', marginBottom: '28px', maxWidth: '52ch' }}>
                  <p style={{ fontSize: '13.5px', color: '#141414', lineHeight: 1.55, margin: 0, fontWeight: 500 }}>
                    <strong style={{ color: '#FF5622' }}>Executive Brief:</strong> FactoryJet delivers senior engineering-led Tampa local SEO services: Google Business Profile optimization, multi-radius geo-grid proximity expansion, 100% NAP citation synchronization across major data aggregators, structured LocalBusiness Schema.org graphs, and high-intent local conversion engineering across Hillsborough County with transparent call tracking and zero locked monthly retainers.
                  </p>
                </div>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Free Local SEO Audit" region="us" btnVariant="primary-dark" modalVariant="seo" />
                  <a href="#tpa-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Tampa Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/tampa/hero-tampa.webp"
                  alt="Tampa Florida local SEO rankings and Google Maps 3-Pack dominance strategy"
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
                  src="/images/us/shared/factoryjet-audit-call.webp"
                  alt="FactoryJet senior SEO strategists conducting local search audit for Tampa Bay businesses"
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
                  Engineered for Tampa Bay&apos;s High-Value Commercial Sectors
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  From Downtown Tampa corporate litigation firms to Westshore business consultants and South Tampa aesthetic clinics, Florida businesses need verified search authority to capture high-ticket clients before competitors do.
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

        {/* ── 04. TAMPA DISTRICTS & INDUSTRY DIRECTORY ── */}
        <section id="tpa-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Tampa Bay Commercial Corridor Depth</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored Local SEO for Tampa&apos;s Core Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From Downtown legal practices to Westshore corporate offices and Port Tampa Bay trade hubs:
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
                Specialized Local Search Architectures for Tampa Bay
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every high-value commercial sector in Florida demands tailored keyword targeting, entity schemas, and conversion pathways:
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
                Why Tampa Companies Choose FactoryJet Local SEO
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
            <RegionalBenchmarkCard city="Tampa" vertical="seo" />
          </div>
        </section>

        <LocalSeoArchitectureBlueprint
            badge="// TAMPA BAY LOCAL SEARCH & AI RANKING BLUEPRINT"
            title="4-Layer Local SEO Stack: Google Maps to AI Overviews"
            subtitle="Explore how GBP API optimization, multi-directory citation syncing, structured schema graphs, and AI citation crawlers work together to dominate Tampa Bay local search."
            city="Tampa"
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
                A systematic, engineering-first methodology for establishing market dominance across Tampa Bay:
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
                Evaluating Tampa SEO Agencies: What to Ask
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
        <LocalSeoOpportunityEstimator city="Tampa" region="us" />

        {/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION ── */}
        <FAQ
          eyebrow="TAMPA BAY LOCAL SEARCH INTELLIGENCE"
          headline="Frequently Asked Questions About Local SEO in Tampa FL"
          lead="Direct, plain English answers to what Tampa Bay business owners and marketing directors ask about search visibility:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 11. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <SeoCityLinksUS currentCity="tampa" />
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
              Ready to Dominate Tampa Bay Local Search?
            </h2>

            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Claim your complimentary local SEO audit and discover the exact ranking and citation gaps preventing your firm from capturing the Google Maps 3-Pack.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Claim Your Free SEO Audit" region="us" btnVariant="primary-light" modalVariant="seo" />
            </div>

            <p style={{ marginTop: '28px', fontSize: '13.5px', color: '#8E8E9F' }}>
              Related services: <Link href="/tampa/ecommerce-development" style={{ color: '#FF5622', textDecoration: 'underline' }}>Tampa ecommerce development</Link>, <Link href="/tampa/web-design" style={{ color: '#FF5622', textDecoration: 'underline' }}>Tampa web design</Link>, <Link href="/services/local-seo" style={{ color: '#FF5622', textDecoration: 'underline' }}>Local SEO services</Link>, and <Link href="/services/seo-audit" style={{ color: '#FF5622', textDecoration: 'underline' }}>technical SEO audits</Link>.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
