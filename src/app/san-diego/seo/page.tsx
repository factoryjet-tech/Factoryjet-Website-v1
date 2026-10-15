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

const PAGE_MODIFIED = '2026-08-30';
const CANONICAL = 'https://factoryjet.com/san-diego/seo';

export const metadata: Metadata = {
  title: 'SEO Agency for San Diego, CA Businesses | FactoryJet',
  description:
    'SEO for San Diego, CA biotech firms, clinics, law firms and cross-border logistics companies. Google Maps and AI search. No long-term contract.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Agency for San Diego, CA Businesses | FactoryJet',
    description:
      'SEO for San Diego, CA biotech firms, clinics, law firms and cross-border logistics companies. Google Maps and AI search. No long-term contract.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'SEO for San Diego, CA businesses by FactoryJet' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency for San Diego, CA Businesses | FactoryJet',
    description: 'SEO for San Diego, CA biotech firms, clinics, law firms and cross-border logistics companies. Google Maps and AI search. No long-term contract.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

// Plain names of tools and platforms this work uses. These are not partner,
// certification or award claims. Add one only with a public directory listing to point to.
const SEO_TOOLS = [
  'Google Business Profile',
  'Google Search Console',
  'Apple Business Connect',
  'Bing Places for Business',
  'Schema.org structured data',
];

const STAT_CARDS = [
  { num: 'Maps', title: 'Business Profile Review', desc: 'Check business details, categories, services, and the areas you actually serve.', icon: '📍' },
  { num: 'Leads', title: 'Inquiry Tracking', desc: 'Agree which calls, forms, and booked conversations count as useful inquiries.', icon: '📈' },
  { num: 'Schema', title: 'Clean Entity Attribution', desc: 'Structured JSON-LD schemas linking your Google Knowledge Graph, address, and practitioner licenses.', icon: '🛡️' },
  { num: '0', title: 'Spammy Link Networks', desc: 'Strict white-hat local citation authority and real editorial publication placements only.', icon: '⚡' },
];

const DISTRICTS = [
  {
    corridor: 'Torrey Pines & University City',
    focus: 'Biotech Research, Genomics & Life Sciences IP',
    desc: 'The global biotech mesa along North Torrey Pines Road and Genesee Avenue. Intense regional and national competition for venture funding inquiries, patent litigation retainers, and specialized clinical trial participant recruitment.',
  },
  {
    corridor: 'Downtown San Diego & Little Italy',
    focus: 'Maritime Law, Commercial Real Estate & Hospitality',
    desc: 'The dynamic waterfront urban core along Broadway and India Street. Captures high-ticket corporate legal retainers, commercial real estate leasing inquiries, and maritime dispute representations.',
  },
  {
    corridor: 'Sorrento Valley & UTC',
    focus: 'Telecom Hardware, Defense Technology & Venture Portfolios',
    desc: 'Southern California wireless, semiconductor, and defense contracting hub along Mira Mesa Boulevard and Executive Drive. B2B service queries require deep technical topical authority, defense capability schemas, and sub-second edge performance.',
  },
  {
    corridor: 'La Jolla & Pacific Beach',
    focus: 'Wealth Management, Plastic Surgery & Luxury Estate Law',
    desc: 'Affluent coastal enclave along Prospect Street and Girard Avenue. Features structured medical and financial schema, neighborhood rank grid saturation, and VIP client consultation intake flows.',
  },
  {
    corridor: 'Kearny Mesa & Central San Diego',
    focus: 'Medical Systems, Specialized Healthcare & Asian Commerce',
    desc: 'Central commercial and medical corridor anchored by Sharp Memorial Hospital and Rady Children’s Hospital. Multi-location practice architectures, physician directories, and bilingual English and Asian language optimization.',
  },
  {
    corridor: 'Otay Mesa & South County Hub',
    focus: 'Cross-Border Logistics, Maquiladora Trade & Manufacturing',
    desc: 'Critical US-Mexico commercial port of entry and industrial gateway. B2B service inquiries require technical customs broker landing pages, freight capability tables, and bilingual Spanish and English search optimization.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Biotechnology, Life Sciences & Clinical Research',
    headline: 'Topical Authority & AI Citation Engineering for Torrey Pines Biotech',
    description:
      'Biotech enterprises, research CROs, and patent legal practices in San Diego require commanding authority in technical and scientific search. We engineer deep topical content graphs, researcher schemas, and institutional citations that earn authority across Google, Perplexity, and AI search engines.',
    image: '/images/us/san-diego/seo/card-petri-dish-check.webp',
    alt: 'A researcher in a white lab coat holding a petri dish up to the light while a younger colleague swirls pink liquid in a flask',
    points: [
      'Topical entity architecture covering clinical development and regulatory pathways',
      'Structured MedicalScholarlyArticle and Organization schema for AI citation retrieval',
      'High-authority scientific trade publication and bio-cluster directory synchronization',
    ],
  },
  {
    sector: 'Specialty Medicine, Aesthetic Surgery & Concierge Health',
    headline: 'Capturing High-Value Patients Across La Jolla & UTC',
    description:
      'In San Diego’s competitive medical and surgical markets, patients evaluate physician credentials and peer reviews thoroughly before booking. We optimize Google Business Profiles, implement medical specialty schemas, generate local patient review momentum, and target high-ticket elective queries.',
    image: '/images/us/services/dental-seo/hero.webp',
    alt: 'A bright empty reception lobby with a sofa, plants and a white reception desk',
    points: [
      'Multi-practitioner Google Business Profile optimization with procedure sub-categories',
      'MedicalProcedure and Physician structured JSON-LD schema linking hospital affiliations',
      'Hyper-local neighborhood geo-pages targeting La Jolla, Del Mar, and Coronado',
    ],
  },
  {
    sector: 'Corporate Law, Maritime Litigation & Defense Contracting',
    headline: 'Local Search Work for San Diego Law Firms',
    description:
      'Legal search terms in San Diego County are intensely competitive. We build local SEO structures with practice area knowledge hubs, attorney bar admission schemas, verified case outcome showcases, and consistent local citations.',
    image: '/images/us/services/law-firm-seo/hero.webp',
    alt: 'An empty wood-panelled office with bookshelves and a desk in warm light',
    points: [
      'LegalService and Attorney schema linking California State Bar verified credentials',
      'Localized practice area silos targeting Downtown San Diego, UTC, and North County',
      'High-authority local legal directory citations and editorial publication placements',
    ],
  },
  {
    sector: 'Cross-Border Logistics, Customs Brokerage & Manufacturing',
    headline: 'Driving High-Ticket Commercial Inquiries Across Otay Mesa & Port of San Diego',
    description:
      'Customs brokers, freight forwarders, and twin-plant cross-border logistics operators in South County require steady commercial contract flow. We optimize your local digital footprint to capture supply chain directors, binational plant managers, and regional logistics coordinators.',
    image: '/images/us/manufacturing-website-design/shop-floor.webp',
    alt: 'A machinist in safety glasses loading a metal part into a CNC lathe beside a tablet showing the part',
    points: [
      'Commercial logistics capability landing pages optimized for regional radius search queries',
      'High-speed mobile performance ensuring immediate freight quote request submissions',
      'Bilingual English and Spanish content architecture with localized schema markup',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Ending Monthly SEO Retainers with Zero Measurable Inbound Calls',
    problem: 'Traditional San Diego agencies send generic monthly PDF reports filled with vanity impressions while your Google Maps rankings remain stagnant on page two.',
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
    deliverables: ['Google Maps rank grid scan across San Diego County', 'NAP consistency and duplicate listing audit', 'Competitor keyword and backlink gap analysis', 'Baseline local visibility scorecard'],
  },
  {
    phase: 'Phase 02',
    title: 'Google Business Profile & On-Page Geo-Optimization',
    desc: 'We optimize primary categories, service sub-attributes, geo-targeted metadata, and embed structured JSON-LD schema across your website.',
    deliverables: ['GBP category and attribute optimization', 'LocalBusiness and Service schema graph', 'Localized service area landing page copy', 'Core Web Vitals performance acceleration'],
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
    factoryjet: 'Qualified calls and inquiries from the local searches that matter to your business.',
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
  { key: 'local', label: 'San Diego Market Focus' },
  { key: 'reporting', label: 'Tracking & Deliverables' },
];

const FAQ_ITEMS = [
  {
    category: 'pricing',
    question: 'How much does local SEO cost for a San Diego business?',
    answer:
      'Local SEO campaigns are priced based on your market competition, number of physical locations, practice area scope, and current domain health. A focused single-location local campaign targeting core San Diego corridors is structured on a transparent monthly retainer with zero long-term lock-ins. Multi-location healthcare networks or enterprise legal practices requiring county-wide coverage receive tailored scoping with clear milestone deliverables.',
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
    question: 'How quickly can our San Diego business expect to see Google Maps rank improvements?',
    answer:
      'Timing depends on your starting position, competition, location, website, listings, and review profile. Technical and business-profile fixes can be completed early, while meaningful ranking and inquiry growth usually takes sustained work. We establish a baseline first, report progress each month, and do not promise a specific Map Pack position or deadline.',
  },
  {
    category: 'timeline',
    question: 'What factors determine how fast a San Diego business can rank in the Local 3-Pack?',
    answer:
      'Key determinants include your physical office location relative to the searcher, category selection accuracy, total volume of authentic customer reviews, website Core Web Vitals speed, and the clean consistency of your citation profile across data aggregators.',
  },
  {
    category: 'timeline',
    question: 'What happens to our local rankings if we pause or discontinue services?',
    answer:
      'Unlike pay-per-click advertising, the foundational assets we build (optimized GBP profile, clean directory citations, structured website schemas, and localized content silos) remain your property after the engagement ends. Rankings can still change over time as competitors keep working.',
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
      'We inject comprehensive server-rendered schemas including LocalBusiness, MedicalBusiness or LegalService, GeoCoordinates, OpeningHoursSpecification, Service, FAQPage, and speakable selectors for AI voice search.',
  },
  {
    category: 'technical',
    question: 'How do you help our company get recommended by AI search engines like ChatGPT and Perplexity?',
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
    question: 'Do you manage multi-location local SEO campaigns across San Diego County?',
    answer:
      'Yes. We build dedicated, location-specific landing pages and optimize distinct Google Business Profiles for each physical office across San Diego, La Jolla, Carlsbad, Oceanside, Chula Vista, and Escondido.',
  },
  {
    category: 'local',
    question: 'Can you help our practice outrank entrenched competitors in La Jolla and UTC?',
    answer:
      'We can help you compete with them. The work combines website speed, topical content, clean citations and a steady flow of reviews. No agency can promise a map position, so each month we report where you stand next to the work completed.',
  },
  {
    category: 'local',
    question: 'How do service-area businesses without a public storefront rank in San Diego?',
    answer:
      'We configure your Google Business Profile as a verified Service Area Business (SAB), hiding your residential address while establishing explicit service boundaries across your target ZIP codes and commercial corridors.',
  },
  {
    category: 'local',
    question: 'Do you optimize for cross-border binational searches connecting San Diego and Tijuana?',
    answer:
      'Yes. We build specialized bilingual landing pages and cross-border commercial logistics metadata for Otay Mesa and regional trade companies.',
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
      'A geo-grid scan measures your Google Maps ranking position at dozens of physical coordinates across San Diego, showing exactly where your business appears in the top 3 and where optimization is needed.',
  },
  {
    category: 'reporting',
    question: 'How do you combat spam and fake competitor listings on Google Maps?',
    answer:
      'We continuously monitor your primary search categories in San Diego, identifying keyword-stuffed business names and fake virtual office listings, and submit formal redressal complaints to Google to remove spam competitors.',
  },
  {
    category: 'reporting',
    question: 'Who will be our main point of contact during the campaign?',
    answer:
      'You work directly with a dedicated senior SEO strategist who oversees technical implementation, citation distribution, and monthly strategy reviews without layers of junior account coordinators.',
  },
  {
    category: 'local',
    question: 'How do you optimize for life sciences, biopharma, and genomics innovators in Torrey Pines and UTC?',
    answer:
      'San Diego is one of the premier life science clusters in the world. We build technical B2B content hubs, MedicalBusiness and ClinicalTrial schemas, scientific research directories, and enterprise procurement lead funnels that capture national biotech queries.',
  },
  {
    category: 'technical',
    question: 'How do private plastic surgeons and luxury wealth advisors capture high-value clients in La Jolla and Del Mar?',
    answer:
      'We deploy granular MedicalBusiness, Physician, and FinancialService schemas, optimize verified practitioner credentials with California State Medical and Bar boards, construct hyper-local neighborhood landing pages, and engineer frictionless private consultation funnels.',
  },
  {
    category: 'local',
    question: 'How do you structure SEO for cross-border logistics, customs brokers, and maquiladora trade in Otay Mesa?',
    answer:
      'The Otay Mesa border crossing is a crucial international manufacturing and freight hub. We build bilingual Spanish and English landing pages, customs brokerage capability matrices, and rapid RFQ quotation forms to capture cross-border B2B contracts.',
  },
  {
    category: 'technical',
    question: 'How does Google Gemini AI Overview and SearchGPT citation indexing work in Southern California?',
    answer:
      'Generative AI search engines synthesize verified factual entities from structured JSON-LD schemas, official California Secretary of State business filings, and direct answer-first page sections. We format your core service offerings to maximize conversational citation frequency in Google AI Overviews and ChatGPT search.',
  },
  {
    category: 'local',
    question: 'Can you structure local SEO across multi-location healthcare and dental networks in San Diego County?',
    answer:
      'Yes. We construct distinct location landing pages for North County (Carlsbad, Oceanside, Encinitas), East County (El Cajon, La Mesa), and South Bay (Chula Vista) with independent Schema.org LocalBusiness markup, preventing internal keyword cannibalization.',
  },
  {
    category: 'deliverables',
    question: 'What is NAP citation synchronization across San Diego and California business directories?',
    answer:
      'We establish and synchronize verified business citations across essential regional directories, including the San Diego Regional Chamber of Commerce, California BBB, Apple Maps, Bing Places, YellowPages, Dun & Bradstreet, and industry registries, checking that your details match, eliminating duplicates, and reinforcing Google Maps 3-Pack authority.',
  },
  {
    category: 'local',
    question: 'How do defense technology suppliers and maritime contractors near Point Loma capture federal and commercial bids?',
    answer:
      'San Diego is home to the largest concentration of naval and military forces in the country. We engineer technical B2B landing pages with CAGE codes, NAICS classifications, cybersecurity compliance credentials, and defense capability documentation to capture prime contractor searches.',
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

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Founder & CEO',
    url: 'https://factoryjet.com/about',
    sameAs: [
      'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
      'https://github.com/factoryjet-tech',
    ],
  },
  name: 'San Diego Local SEO & Google Maps Optimization',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  serviceType: 'Local SEO, Google Business Profile Management & AI Search Optimization',
  description:
    'SEO for San Diego, CA biotech firms, clinics, law firms and cross-border logistics companies. Google Maps and AI search. No long-term contract.',
  areaServed: [
    { '@type': 'City', name: 'San Diego' },
    { '@type': 'City', name: 'La Jolla' },
    { '@type': 'City', name: 'Carlsbad' },
    { '@type': 'City', name: 'Chula Vista' },
    { '@type': 'City', name: 'Del Mar' },
    { '@type': 'State', name: 'California' },
  ],
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'SEO Agency for San Diego, CA Businesses | FactoryJet',
  description: 'SEO for San Diego, CA biotech firms, clinics, law firms and cross-border logistics companies. Google Maps and AI search. No long-term contract.',
  url: CANONICAL,
  dateModified: PAGE_MODIFIED,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Founder & CEO',
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
    { '@type': 'ListItem', position: 2, name: 'AI Search & SEO', item: 'https://factoryjet.com/services/ai-seo' },
    { '@type': 'ListItem', position: 3, name: 'San Diego', item: CANONICAL },
  ],
};

export default function SanDiegoSeoPage() {
  return (
    <>
      <script id="sd-seo-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="sd-seo-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="sd-seo-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="sd-seo-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>San Diego Local SEO &amp; AI Citation Authority</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  SEO for San Diego Businesses, From Torrey Pines to Otay Mesa
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  We work on your Google Business Profile, your service pages and your listings so customers searching in Torrey Pines, UTC, and Downtown San Diego can find you. Monthly reporting covers calls and inquiries.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Free Local SEO Audit" region="us" btnVariant="primary-dark" modalVariant="seo" />
                  <a href="#sd-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore San Diego Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/san-diego-seo/hero.webp"
                  alt="A man and a woman at a table looking at a laptop that shows a tan tote bag, palm trees outside"
                  width={640}
                  height={640}
                  priority
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 02. TOOLS AND PLATFORMS MARQUEE TICKER (plain tool names, no partner or certification claims) ── */}
        <section style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC', padding: '36px 0' }}>
          <div className="pp-wrap">
            <div className="rv-ticker-header">
              <div className="rv-ticker-line" />
              <div className="rv-ticker-label">Platforms and tools we work with</div>
              <div className="rv-ticker-line" />
            </div>

            <div className="rv-marquee-wrapper">
              <div className="rv-marquee">
                {SEO_TOOLS.concat(SEO_TOOLS).map((p, idx) => (
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
                  src="/images/us/san-diego-seo/planning-session.webp"
                  alt="Three people standing at a whiteboard of flow-chart boxes, one drawing while another points, beside screens that show handbags"
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
                  Engineered for San Diego&apos;s High-Value Commercial Sectors
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  From Torrey Pines life sciences leaders to La Jolla wealth advisors and Otay Mesa cross-border trade operators, Southern California businesses need verified search authority to capture high-ticket clients before competitors do.
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

        {/* ── 04. SAN DIEGO DISTRICTS & INDUSTRY DIRECTORY ── */}
        <section id="sd-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>San Diego Commercial Corridor Depth</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored Local SEO for San Diego&apos;s Core Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From Torrey Pines biotech leaders to La Jolla wealth advisors and Otay Mesa logistics hubs:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '20px' }}>
              {DISTRICTS.map((d) => (
                <div
                  key={d.corridor}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E6E6EC',
                    borderRadius: '16px',
                    padding: '28px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#B23E13', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {d.corridor}
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
                Specialized Local Search Architectures for San Diego
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every high-value commercial sector in Southern California demands tailored keyword targeting, entity schemas, and conversion pathways:
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              {INDUSTRY_SHOWCASE.map((ind, idx) => (
                <div
                  key={ind.sector}
                  className={idx % 2 === 0 ? 'rv-showcase-row' : 'rv-showcase-row rv-showcase-row--flip'}
                  style={{
                    gap: 'clamp(28px, 5vw, 56px)',
                    alignItems: 'center',
                    background: '#F9F9FC',
                    border: '1px solid #E6E6EC',
                    borderRadius: '20px',
                    padding: 'clamp(24px, 4vw, 44px)',
                  }}
                >
                  <div>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#B23E13', background: '#FFF0EB', padding: '4px 12px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
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

                  <div className="rv-showcase-media" style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', border: '1px solid #E2E2E8' }}>
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
                What FactoryJet Does Differently for San Diego Businesses
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                We replace generic SEO reports with reporting on completed work, calls and inquiries:
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
                  <div className="rv-service-compare" style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #F0F0F5', gap: '20px' }}>
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
            <RegionalBenchmarkCard city="San Diego" vertical="seo" />
          </div>
        </section>

        <LocalSeoArchitectureBlueprint
            badge="// SAN DIEGO LOCAL SEARCH & AI RANKING BLUEPRINT"
            title="4-Layer Local SEO Stack: Google Maps to AI Overviews"
            subtitle="Explore how GBP API optimization, multi-directory citation syncing, structured schema graphs, and AI citation crawlers work together in San Diego local search."
            city="San Diego"
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
                <span>Four Stages of Work</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Our 4-Stage Local SEO Ranking Protocol
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                The four stages of work we follow for local search across San Diego County:
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
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#B23E13', background: '#FFF0EB', padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
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
                Evaluating San Diego SEO Agencies: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Compare engineering-led local search optimization against traditional marketing agencies before you sign:
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '16px', overflow: 'hidden', maxWidth: '960px', margin: '0 auto' }}>
              <div className="rv-eval-head" style={{ background: '#141414', color: '#FFFFFF', padding: '16px 24px', fontWeight: 700, fontSize: '13.5px' }}>
                <div>Evaluation Factor</div>
                <div style={{ color: '#FF5622' }}>FactoryJet Engineering Model</div>
                <div style={{ color: '#A0A0B0' }}>Traditional SEO Agencies</div>
              </div>

              {EVALUATION_CRITERIA.map((crit, cIdx) => (
                <div
                  key={crit.label}
                  className="rv-eval-row"
                  style={{
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
                  <div data-label="FactoryJet Engineering Model" style={{ fontSize: '13.5px', color: '#141414', fontWeight: 600, lineHeight: 1.45 }}>
                    {crit.factoryjet}
                  </div>
                  <div data-label="Traditional SEO Agencies" style={{ fontSize: '13px', color: '#6E6E80', lineHeight: 1.45 }}>
                    {crit.traditional}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTERACTIVE GOOGLE MAP PACK OPPORTUNITY ESTIMATOR ── */}
        <LocalSeoOpportunityEstimator city="San Diego" region="us" />

        {/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION ── */}
        <FAQ
          eyebrow="SAN DIEGO LOCAL SEARCH INTELLIGENCE"
          headline="Frequently Asked Questions About Local SEO in San Diego CA"
          lead="Direct, plain English answers to what San Diego business owners and marketing directors ask about search visibility:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 11. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <SeoCityLinksUS currentCity="san-diego" />
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
              <span>Google Maps &amp; Local Search</span>
            </div>

            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Start With a Free San Diego Local SEO Audit
            </h2>

            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Ask for a free review of your Google Business Profile and local listings. We will show you what is missing or inconsistent, and what we would fix first.
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
