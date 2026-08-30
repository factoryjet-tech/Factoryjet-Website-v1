import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import LocalSeoArchitectureBlueprint from '@/components/v2/LocalSeoArchitectureBlueprint';
import AuthorCard from '@/components/v2/AuthorCard';
import LocalSeoOpportunityEstimator from '@/components/v2/LocalSeoOpportunityEstimator';
import RegionalBenchmarkCard from '@/components/v2/RegionalBenchmarkCard';
import SeoCityLinksUS from '@/components/v2/SeoCityLinksUS';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-08-30';
const CANONICAL = 'https://factoryjet.com/denver/seo';

export const metadata: Metadata = {
  title: 'Denver Local SEO Agency | Google Maps 3-Pack | FactoryJet',
  description:
    'Denver local SEO agency. Dominate Google Maps 3-Pack, organic rankings, and AI search citations across LoDo, Cherry Creek, DTC, and Boulder. Free audit.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Denver Local SEO Agency | Google Maps 3-Pack | FactoryJet',
    description:
      'Denver local SEO company. Dominate Google Maps 3-Pack, organic rankings, and AI search citations across LoDo, Cherry Creek, DTC, and Boulder.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Denver Local SEO Agency' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Denver Local SEO Agency | Google Maps 3-Pack | FactoryJet',
    description: 'Dominate Denver local search and AI answer engines. Verified Google Maps 3-Pack capture and entity optimization across Colorado.',
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
  { num: 'Top 3', title: 'Google Maps Ranking SLA', desc: 'Engineered for dominance in Google Local 3-Pack across high-value Denver commercial corridors.', icon: '📍' },
  { num: '4.8x', title: 'Inbound Lead Velocity', desc: 'Average qualified local phone call and consultation lead growth within 90 days of rollout.', icon: '📈' },
  { num: '100%', title: 'Clean Entity Attribution', desc: 'Structured JSON-LD schemas linking your Google Knowledge Graph, address, and practitioner licenses.', icon: '🛡️' },
  { num: '0', title: 'Spammy Link Networks', desc: 'Strict white-hat local citation authority and real editorial publication placements only.', icon: '⚡' },
];

const DISTRICTS = [
  {
    corridor: 'Lower Downtown (LoDo) & Union Station',
    query: 'venture capital corporate legal seo lodo denver',
    focus: 'Fintech Platforms, Venture Capital & High-Growth Tech',
    desc: 'The vibrant urban innovation and legal corridor. Captures high-ticket corporate legal retainers, tech venture inquiries, and commercial advisory contracts.',
  },
  {
    corridor: 'Denver Tech Center (DTC) & Greenwood Village',
    query: 'enterprise b2b saas telecommunications seo dtc',
    focus: 'Enterprise SaaS, Telecommunications & Corporate HQ',
    desc: 'Major corporate and software campus core. B2B service queries demand enterprise capability schemas, localized authority, and sub-second edge speeds.',
  },
  {
    corridor: 'Cherry Creek North',
    query: 'plastic surgery private wealth advisory seo cherry creek',
    focus: 'Private Wealth Advisory, Aesthetic Surgery & Concierge Medicine',
    desc: 'Affluent executive and specialized medical enclave. Intense competition for high-net-worth estate planning, cosmetic surgery consultations, and wealth retainers.',
  },
  {
    corridor: 'RiNo & Five Points',
    query: 'creative agency outdoor lifestyle brand seo rino',
    focus: 'Creative Agencies, Architecture Studios & Outdoor Lifestyle',
    desc: 'Renowned creative and architectural core. Multi-location practice architectures, studio directories, and verified customer review funnels.',
  },
  {
    corridor: 'Boulder & US-36 Tech Corridor',
    query: 'cleantech quantum computing enterprise seo boulder',
    focus: 'CleanTech, Quantum Computing & Aerospace Software',
    desc: 'World-class scientific and deep tech nexus. Requires deep topical content graphs, researcher schemas, and institutional citations across Colorado.',
  },
  {
    corridor: 'Golden & West Metro Industrial',
    query: 'precision manufacturing engineering contractor seo golden co',
    focus: 'Advanced Manufacturing, Engineering & Outdoor Gear',
    desc: 'Precision industrial and outdoor brand manufacturing. Features technical capability landing pages, equipment schemas, and RFQ workflows.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Private Wealth Advisory, Estate Planning & Corporate Law',
    headline: 'Dominating High-Stakes Search Corridors for Denver Firms',
    description:
      'Legal and financial search queries across Denver and Arapahoe counties are intensely contested. We engineer impenetrable local SEO architectures featuring practice area knowledge hubs, attorney bar admission schemas, verified case outcome showcases, and localized citation dominance.',
    image: '/images/us/denver/law-firm.webp',
    alt: 'Denver and Cherry Creek private wealth management estate planning and corporate law local SEO',
    points: [
      'LegalService and Attorney schema linking Colorado Bar verified credentials',
      'Localized practice area silos targeting LoDo, Cherry Creek, and the Denver Tech Center',
      'High-authority local legal directory citations and editorial publication placements',
    ],
  },
  {
    sector: 'Aesthetic Surgery, Concierge Medicine & Specialized Clinics',
    headline: 'Capturing High-Value Patient Consultations Across Cherry Creek & DTC',
    description:
      'In Denver’s premier elective surgery and concierge wellness markets, prospective patients evaluate physician credentials and peer reviews thoroughly before booking. We optimize Google Business Profiles, implement MedicalProcedure structured schemas, build procedure-specific geo silos, and generate steady review velocity.',
    image: '/images/us/denver/healthcare-clinic.webp',
    alt: 'Denver Cherry Creek aesthetic plastic surgery medical practice clinic local SEO strategy',
    points: [
      'Multi-practitioner Google Business Profile optimization with procedure sub-categories',
      'MedicalProcedure and Physician structured JSON-LD schema linking hospital affiliations',
      'Hyper-local neighborhood geo-pages targeting Cherry Creek, Greenwood Village, and Boulder',
    ],
  },
  {
    sector: 'Outdoor Recreation Brands, Gear Manufacturing & Active Lifestyle',
    headline: 'Local & Regional Search Dominance for Colorado Outdoor Leaders',
    description:
      'From Golden technical gear builders to Boulder active apparel brands, outdoor consumers demand immediate regional store discovery. We optimize Google Business Profiles, embed product catalogs, synchronize dealer networks, and capture high-intent gear searches.',
    image: '/images/us/denver/ecommerce/portfolio-1.webp',
    alt: 'Denver outdoor gear technical apparel brand retail store local SEO optimization',
    points: [
      'Multi-location retail store and authorized dealer directory optimization',
      'Local radius geo-fencing targeting Front Range recreation corridors',
      'Structured Store and Product schema markup for Google Merchant Center synchronization',
    ],
  },
  {
    sector: 'Commercial Construction, HVAC & General Contracting',
    headline: 'Driving Continuous Commercial Project Bidding Across Front Range',
    description:
      'Commercial general contractors, roofing companies, and HVAC specialists across the Denver metropolitan area require steady commercial project bidding opportunities. We build geo-targeted service area architectures, optimize Service Area Business (SAB) profiles, and capture high-intent commercial keyword searches.',
    image: '/images/us/denver/contractor-site.webp',
    alt: 'Denver commercial general contractor HVAC and roofing local SEO ranking architecture',
    points: [
      'Service area radius optimization covering Denver, Aurora, Lakewood, and Littleton',
      'High-speed mobile performance ensuring immediate project bidding phone calls',
      'Structured LocalBusiness and Contractor schema markup for local search dominance',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Ending Monthly SEO Retainers with Zero Measurable Inbound Calls',
    problem: 'Traditional Denver agencies send generic monthly PDF reports filled with vanity impressions while your Google Maps rankings remain stagnant on page two.',
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
    deliverables: ['Google Maps rank grid scan across the Denver metro', 'NAP consistency and duplicate listing audit', 'Competitor keyword and backlink gap analysis', 'Baseline local visibility scorecard'],
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

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'local', label: 'Local Map Pack & GBP' },
  { key: 'technical', label: 'Technical SEO & AI Search' },
  { key: 'corridors', label: 'Denver & Front Range Corridors' },
  { key: 'contracts', label: 'Contracts & Working Model' },
  { key: 'attribution', label: 'Lead Tracking & ROI' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'local',
    question: 'How do we get our Denver business into the top 3 Google Map Pack results?',
    answer:
      'Securing a top 3 spot in the Denver Google Map Pack requires four synchronized actions: selecting the primary Google Business Profile category with the highest transaction intent, maintaining exact Name-Address-Phone (NAP) consistency across major Tier 1 directories, maintaining a steady velocity of authentic customer reviews, and building localized domain authority through a fast website backed by structured LocalBusiness schema.',
  },
  {
    category: 'local',
    question: 'How do you optimize our Google Business Profile for maximum Front Range reach?',
    answer:
      'We audit and configure primary and secondary categories, craft service-specific business descriptions, upload geo-tagged photo assets, build product and service catalogs, and configure automated post-service review request workflows.',
  },
  {
    category: 'local',
    question: 'How important are Google customer reviews for local search rankings in Denver?',
    answer:
      'Google customer reviews are one of the most powerful direct ranking factors in local search algorithms. Both review volume and the frequency of new reviews directly expand your Map Pack proximity radius. We help your team implement automated post-service SMS and email review collection workflows that generate authentic feedback.',
  },
  {
    category: 'local',
    question: 'How do service-area businesses without a public storefront rank in Denver?',
    answer:
      'We configure your Google Business Profile as a verified Service Area Business (SAB), hiding your private address while establishing explicit service boundaries across your target Denver ZIP codes, Arapahoe County, and surrounding Front Range municipalities.',
  },
  {
    category: 'technical',
    question: 'What structured JSON-LD schemas do you implement on Denver websites?',
    answer:
      'We deploy comprehensive server-rendered schemas including LocalBusiness, ProfessionalService, LegalService, MedicalProcedure, GeoCoordinates, OpeningHoursSpecification, Service, FAQPage, and BreadcrumbList schemas.',
  },
  {
    category: 'technical',
    question: 'How do you optimize websites for Google AI Overviews and SearchGPT citations?',
    answer:
      'Generative AI search platforms extract facts from websites with clear entity relationships, concise answer-first prose, authoritative data points, and semantic HTML markup. We structure your content using direct informational answers, structured comparison tables, and detailed entity schemas so AI engines can effortlessly parse, cite, and reference your business.',
  },
  {
    category: 'technical',
    question: 'Why does website loading speed directly impact Google local search rankings?',
    answer:
      'Google utilizes Core Web Vitals as an official ranking metric. Fast-loading websites deliver superior user experiences, resulting in lower bounce rates and higher session engagement. If your site takes longer than two seconds to load on mobile networks, search algorithms demote your listings in favor of faster competitors.',
  },
  {
    category: 'technical',
    question: 'What is technical SEO and why is it critical for competitive Denver businesses?',
    answer:
      'Technical SEO optimizes the fundamental software architecture of your website. It encompasses server response speed, crawl budget optimization, mobile layout stability, internal link architecture, and nested JSON-LD schema markup. In competitive markets like Denver, minor technical defects like slow JavaScript execution can prevent search engines from indexing your high-value commercial pages.',
  },
  {
    category: 'corridors',
    question: 'Can you rank our business in surrounding Front Range suburbs like Boulder, Lakewood, and Littleton?',
    answer:
      'Yes. We architect dedicated geographic service area landing pages and localized schema markup targeting key Front Range submarkets across Denver, Boulder, Jefferson, and Arapahoe counties without triggering duplicate content issues.',
  },
  {
    category: 'corridors',
    question: 'How do you optimize for technology and enterprise B2B SaaS searches in the Denver Tech Center?',
    answer:
      'We build specialized topical hubs and enterprise B2B schema markup for SaaS, cloud engineering, and telecom providers along the I-25 corridor, capturing enterprise decision-makers conducting vendor due diligence.',
  },
  {
    category: 'corridors',
    question: 'How do you structure SEO for multi-location practices in Colorado?',
    answer:
      'For multi-location practices, we build dedicated location pages with unique NAP data, localized staff profiles, distinct Google Business Profile embeds, specific service menus, and custom LocalBusiness schema for each physical facility. This prevents internal location cannibalization and establishes clear geographic relevance.',
  },
  {
    category: 'corridors',
    question: 'How does Denver local SEO differ from statewide Colorado SEO?',
    answer:
      'Denver local SEO targets hyper-specific geographic proximity signals, Map Pack 3-Pack rankings, and neighborhood-level search terms across the Denver metro. Statewide Colorado SEO focuses on broader regional keyword authority, high-volume commercial head terms, and programmatic category hubs that rank across Denver, Colorado Springs, Fort Collins, and Grand Junction simultaneously.',
  },
  {
    category: 'contracts',
    question: 'Do you require long-term lock-in contracts for Denver SEO services?',
    answer:
      'No. We operate on flexible month-to-month agreements. We believe agency retention must be earned every thirty days through measurable business outcomes rather than enforced through rigid annual commitments.',
  },
  {
    category: 'contracts',
    question: 'How do I compare proposals from different Denver SEO agencies?',
    answer:
      'Ask three fundamental questions: First, who will actually write and deploy the technical code on my website? Second, will you implement fixes directly or only hand over audit spreadsheets? Third, what specific business metrics will you track each month? If an agency cannot guarantee senior technical execution and refuses to track qualified inbound phone calls, they are selling marketing reports rather than revenue engineering.',
  },
  {
    category: 'contracts',
    question: 'Do we maintain full ownership of our website code, analytics, and listings?',
    answer:
      'Yes, 100 percent. You maintain complete direct ownership and administrative control over your domain, code repository, Google Analytics 4 property, Google Search Console account, and Google Business Profile. You are never locked into a proprietary agency ecosystem.',
  },
  {
    category: 'contracts',
    question: 'Who will execute the technical work on our Denver account?',
    answer:
      'Senior software engineers and technical SEO architects execute all code, schema, and content work directly. You speak directly with the technical engineers building your systems rather than junior account coordinators.',
  },
  {
    category: 'attribution',
    question: 'How quickly can our Denver business expect to see Google Maps rank improvements?',
    answer:
      'Foundational GBP optimizations, schema deployments, and NAP deduplication typically produce noticeable ranking improvements within 30 to 60 days. Highly competitive queries in Cherry Creek, LoDo, or the DTC generally achieve solid Top 3 Local Pack dominance within 90 to 120 days of consistent authority building.',
  },
  {
    category: 'attribution',
    question: 'How do you track and report local SEO progress each month?',
    answer:
      'We provide access to an interactive dashboard showing local 3-Pack geo-grid ranking positions, organic keyword trajectories, verified Google Maps phone calls, website click-throughs, and consultation inquiry submissions via custom Google Analytics 4 event tracking.',
  },
  {
    category: 'attribution',
    question: 'What is a Local Geo-Grid rank tracking report?',
    answer:
      'A geo-grid scan measures your Google Maps ranking position at dozens of physical coordinates across Greater Denver, showing exactly where your business appears in the top 3 and where optimization is needed.',
  },
  {
    category: 'attribution',
    question: 'How do you combat spam and fake competitor listings on Google Maps in Denver?',
    answer:
      'We continuously monitor your primary search categories in Denver, identifying keyword-stuffed business names and fake virtual office listings, and submit formal redressal complaints to Google to remove spam competitors.',
  },
  {
    category: 'technical',
    question: 'How does Google Gemini AI Overview citation indexing work for Denver local businesses?',
    answer:
      'Google Gemini AI Overviews synthesize local search answers by querying verified Knowledge Graph entities, high-authority localized directory citations, and authoritative Schema.org LocalBusiness markup. We structure your website content with explicit factual entities and customer review statistics to maximize generative AI citation frequency.',
  },
  {
    category: 'basics',
    question: 'What role do Google Business Profile primary and secondary categories play in Denver Maps rankings?',
    answer:
      'Your primary GBP category carries the heaviest ranking weight for Google Local 3-Pack placement, while up to 9 secondary categories allow you to capture long-tail service inquiries. We conduct reverse-engineering audits on top-ranking Denver competitors to identify the exact category hierarchy that maximizes search impression share.',
  },
  {
    category: 'corridors',
    question: 'How do you handle canonical tags and schema for Colorado multi-city service areas?',
    answer:
      'Each Front Range city page receives self-referential canonical tags, unique localized copy detailing specific neighborhood landmarks, and nested LocalBusiness/AreaServed JSON-LD schemas. This prevents internal duplicate content penalties while securing top organic rankings in Denver, Aurora, Boulder, and Littleton.',
  },
  {
    category: 'technical',
    question: 'What is citation velocity and NAP consistency across Denver commercial directories?',
    answer:
      'Citation velocity refers to the steady, natural acquisition of verified business listings across authoritative platforms (BBB Colorado, Denver Chamber of Commerce, Apple Maps, Bing Places). We maintain 100% NAP (Name, Address, Phone) consistency to reinforce Google Maps algorithmic trust.',
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
  name: 'FactoryJet - Denver Local SEO Agency',
  image: 'https://factoryjet.com/og-default.png',
  url: CANONICAL,
  telephone: '+1-832-998-8422',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Denver',
    addressRegion: 'CO',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 39.7392,
    longitude: -104.9903,
  },
  areaServed: [
    { '@type': 'City', name: 'Denver' },
    { '@type': 'City', name: 'Boulder' },
    { '@type': 'City', name: 'Greenwood Village' },
    { '@type': 'City', name: 'Cherry Creek' },
    { '@type': 'City', name: 'Lakewood' },
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
  name: 'Denver Local SEO & Google Maps Optimization',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Local SEO, Google Business Profile Management & AI Search Optimization',
  description:
    'Senior engineering-led local search engine optimization, Google Maps 3-Pack capture, structured data graphs, and AI citation engineering for Denver businesses.',
  areaServed: [
    { '@type': 'City', name: 'Denver' },
    { '@type': 'State', name: 'Colorado' },
    { '@type': 'Country', name: 'United States' },
  ],
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/denver/seo#webpage',
  name: 'Denver Local SEO Agency | Google Maps 3-Pack | FactoryJet',
  description: 'Denver local SEO company. Dominate Google Maps 3-Pack, organic rankings, and AI search citations across LoDo, Cherry Creek, DTC, and Boulder.',
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
    { '@type': 'ListItem', position: 3, name: 'Denver', item: CANONICAL },
  ],
};

export default function DenverSeoPage() {
  return (
    <>
      <script id="den-seo-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="den-seo-local-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      <script id="den-seo-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="den-seo-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="den-seo-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        {/* ── 01. HERO BANNER SECTION ── */}
        <section className="pp-sec" style={{ paddingTop: 'clamp(44px, 7vh, 88px)', paddingBottom: 'clamp(44px, 6vh, 72px)', background: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div className="rv-hero-wrap">
              {/* Left Column Typography */}
              <div>
                <div className="rv-badge" style={{ marginBottom: '18px' }}>
                  <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                  </svg>
                  <span>Denver Local SEO &amp; AI Citation Authority</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Denver Local SEO Services &amp; Search Marketing Agency
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 24px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  Dominate the Google Maps 3-Pack, capture high-intent Front Range search queries, and earn citations across AI conversational search engines. No long-term contracts. Talk directly with senior technical engineers.
                </p>

                {/* Answer-First Brief */}
                <div style={{ background: '#F6F6F9', borderLeft: '3px solid #FF5622', padding: '14px 18px', borderRadius: '0 12px 12px 0', marginBottom: '28px', maxWidth: '52ch' }}>
                  <p style={{ fontSize: '13.5px', color: '#141414', lineHeight: 1.55, margin: 0, fontWeight: 500 }}>
                    <strong style={{ color: '#FF5622' }}>Executive Brief:</strong> FactoryJet delivers senior engineering-led Denver local SEO services: Google Business Profile geo-radius expansion, 100% NAP citation synchronization across major aggregators, structured LocalBusiness Schema.org graphs, and high-intent local conversion engineering across the Front Range with transparent call tracking and zero locked monthly retainers.
                  </p>
                </div>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Free Local SEO Audit" region="us" btnVariant="primary-dark" modalVariant="seo" />
                  <a href="#den-seo-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Denver Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Organic Curved Photo Frame */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/denver/hero-denver.webp"
                  alt="Denver Colorado local SEO rankings and Google Maps 3-Pack dominance strategy"
                  width={640}
                  height={640}
                  priority
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── ANSWER-FIRST LOCAL SEO BRIEF ── */}
        <section style={{ backgroundColor: '#FAFAF7', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC', padding: '32px 0' }}>
          <div className="pp-wrap">
            <div style={{ maxWidth: '860px', margin: '0 auto', background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '16px', padding: '24px 28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF5622' }} />
                <span style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#FF5622' }}>
                  Denver Local Search Engineering Brief
                </span>
              </div>
              <h2 style={{ fontSize: '19px', fontWeight: 800, color: '#141414', margin: '0 0 10px', letterSpacing: '-0.015em' }}>
                How Colorado Businesses Capture the Google 3-Pack and Front Range Commercial Queries
              </h2>
              <p style={{ fontSize: '14.5px', color: '#494852', lineHeight: 1.6, margin: 0 }}>
                Winning high-intent commercial search terms across the Denver metro area requires four verified technical assets: configuring primary and secondary Google Business Profile categories tailored to local purchase intent, maintaining exact Name-Address-Phone (NAP) synchronization across major Tier 1 directories, deploying nested LocalBusiness JSON-LD markup on high-speed Next.js pages, and operating automated review generation workflows.
              </p>
            </div>
          </div>
        </section>

        {/* ── 02. PARTNERS / CITATION MARQUEE TICKER ── */}
        <section style={{ backgroundColor: '#F6F6F9', borderBottom: '1px solid #E6E6EC', padding: '36px 0' }}>
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

        {/* ── 03. ABOUT US & 2x2 BENTO COUNTER SECTION ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(56px, 8vh, 96px) 0' }}>
          <div className="pp-wrap">
            <div className="rv-about-grid">
              {/* Left Column: Clean Organic Curved Photo Frame */}
              <div className="rv-curved-frame-2">
                <Image
                  src="/images/us/denver/tech-office.webp"
                  alt="FactoryJet senior SEO strategists conducting local search audit for Denver businesses"
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
                  Engineered for Denver&apos;s High-Value Commercial Sectors
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  From LoDo corporate law firms to Cherry Creek aesthetic surgery clinics and DTC enterprise software providers, Colorado businesses need verified search authority to capture high-ticket clients before competitors do.
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

        {/* ── 04. DENVER DISTRICTS & INDUSTRY DIRECTORY ── */}
        <section id="den-seo-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Denver Commercial Corridor Depth</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored Local SEO for Denver&apos;s Core Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From LoDo tech startups to Cherry Creek private wealth and DTC enterprise software:
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
                Specialized Local Search Architectures for Denver
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every high-value commercial sector in the Front Range demands tailored keyword targeting, entity schemas, and conversion pathways:
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

        {/* ── 06. PAIN POINTS & FACTORYJET DIFFERENCE ── */}
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
                Why Denver Businesses Switch to FactoryJet SEO
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

        {/* ── 07. ARCHITECTURE BLUEPRINT ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: '48px 0 16px' }}>
          <div className="pp-wrap">
            <RegionalBenchmarkCard city="Denver" vertical="seo" />
          </div>
        </section>

        <div id="seo-architecture-blueprint">
          <LocalSeoArchitectureBlueprint
            badge="// DENVER LOCAL SEO & AI CITATION BLUEPRINT"
            title="Local SEO Architecture: From Map Pack to AI Citations"
            subtitle="Explore how your Google Business Profile, local review velocity, JSON-LD schema, and high-performance frontend synchronize to capture inbound leads."
            city="Denver"
            ctaLabel="Claim Free Denver SEO Technical Audit"
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
                <span>Predictable Delivery</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Our 4-Phase Denver Search Domination Roadmap
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                A transparent, engineering-led search roadmap delivering compounding visibility across the Front Range:
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
                Evaluating Denver SEO Companies: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Compare engineering-led execution against traditional marketing agency retainers before you sign:
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

        {/* ── 10. INTERACTIVE LEAD OPPORTUNITY ESTIMATOR & FAQ ── */}
        <LocalSeoOpportunityEstimator city="Denver" region="us" />

        <FAQ
          eyebrow="DENVER SEO INTELLIGENCE"
          headline="Frequently Asked Questions About Local SEO in Denver CO"
          lead="Direct, plain English answers to what Denver business owners and marketing leaders ask about local search rankings and lead generation:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 11. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <SeoCityLinksUS currentCity="denver" />
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
              <span>Denver Search Domination</span>
            </div>

            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Ready to Win the Google Map Pack in Denver?
            </h2>

            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Send us your website URL. We will perform a complete local search and technical audit of your site and top Denver competitors, completely free.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Claim Your Free Denver SEO Audit" region="us" btnVariant="primary-light" modalVariant="seo" />
            </div>

            <p style={{ marginTop: '28px', fontSize: '13.5px', color: '#8E8E9F' }}>
              Related services: <Link href="/denver/ecommerce-development" style={{ color: '#FF5622', textDecoration: 'underline' }}>Denver ecommerce development</Link>, <Link href="/denver/web-design" style={{ color: '#FF5622', textDecoration: 'underline' }}>Denver web design</Link>, <Link href="/services/local-seo" style={{ color: '#FF5622', textDecoration: 'underline' }}>Local SEO services</Link>, and <Link href="/services/seo-audit" style={{ color: '#FF5622', textDecoration: 'underline' }}>technical SEO audits</Link>.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
