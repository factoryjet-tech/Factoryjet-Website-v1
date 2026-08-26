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
  { num: '44%', title: 'Map Pack Clicks', desc: 'Direct calls and clicks won by the top 3 Google local business profiles in Austin.', icon: '📍' },
  { num: '8,740+', title: 'Monthly Search Volume', desc: 'Verified monthly searches across Austin SEO agency and consultant queries.', icon: '📈' },
  { num: '42,000+', title: 'Austin SMB Competitors', desc: 'Registered commercial entities competing for local visibility across Travis County.', icon: '🏢' },
  { num: '100%', title: 'Direct Engineer Access', desc: 'Month-to-month terms with direct communication with senior technical engineers.', icon: '⚡' },
];

const DISTRICTS = [
  {
    corridor: 'Downtown & The Capitol District',
    query: 'personal injury lawyer austin',
    focus: 'Law Firms, Financial Advisory & Corporate Services',
    desc: 'Dense commercial core spanning Congress Avenue, West 6th, and Seaholm. Corporate buyers and legal clients evaluate technical credentials, page speed, and practice area depth before calling. Over 44 percent of clicks go straight to the top 3 Map Pack listings.',
  },
  {
    corridor: 'The Domain & Silicon Hills',
    query: 'b2b saas marketing austin',
    focus: 'Tech Startups, Enterprise SaaS & Venture-Backed Firms',
    desc: 'The Silicon Hills tech artery along MoPac and 183 housing major regional campuses for Apple, Dell, and IBM. High-level decision-makers skip sponsored ads on reflex and evaluate documentation, sub-second performance, and clear architectural depth.',
  },
  {
    corridor: 'East Austin & Mueller Urban Village',
    query: 'best restaurant east austin',
    focus: 'Creative Agencies, Hospitality, Dining & Boutiques',
    desc: 'Fast-moving, highly visual discovery along East Cesar Chavez, 11th Street, and the Mueller development. Fresh high-resolution photography, accurate business hours, structured menu schema, and consistent review velocity outperform standard generic copy.',
  },
  {
    corridor: 'South Congress & Zilker Park',
    query: 'boutique hotel south congress',
    focus: 'Retail Flagships, Experiential Dining & Wellness',
    desc: 'High-traffic lifestyle and tourist corridors along South Congress Avenue and Barton Springs Road. Local search volumes surge during major annual events like South by Southwest in March, Austin City Limits in October, and Formula 1 at Circuit of the Americas.',
  },
  {
    corridor: 'Northwest Hills & The Arboretum',
    query: 'dentist northwest hills austin',
    focus: 'Healthcare Clinics, Dental Specialists & Family Medicine',
    desc: 'Affluent residential and medical corridor along Loop 360 and US-183. High-income patients conduct deep research on provider credentials, clinical reviews, and Google Maps directions before booking appointments.',
  },
  {
    corridor: 'Round Rock & Williamson County',
    query: 'ac repair round rock tx',
    focus: 'Home Services, Mechanical Contractors & Multi-Location',
    desc: 'Rapidly expanding northern submarket encompassing Round Rock, Cedar Park, and Georgetown. Capturing suburban market share requires dedicated geographic landing pages with distinct LocalBusiness schema rather than thin cookie-cutter templates.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Healthcare, Dental & Specialized Medical Clinics',
    headline: 'Converting High-Intent Patients Across Central Texas',
    description:
      'Medical practices in Austin face intense competition from hospital networks and private groups. We build verified medical entity schema, optimize provider profiles on Google Maps, and write clinical service pages that answer patient symptoms with absolute accuracy. This establishes medical authority that ranks in the 3-Pack and earns citations in AI search overviews.',
    image: '/images/us/services/dental-seo/hero.webp',
    alt: 'Austin healthcare and dental practice local SEO ranking strategy',
    points: [
      'Comprehensive schema for Physician, MedicalClinic, and MedicalSpecialty',
      'HIPAA-aware conversion forms and click-to-call mobile buttons',
      'Automated review generation workflows following patient visits',
    ],
  },
  {
    sector: 'High-Ticket Home Services, HVAC & Contractors',
    headline: 'Capturing Emergency Search Demand During Peak Texas Weather',
    description:
      'Austin homeowners search under urgent pressure when air conditioners fail during triple-digit July heatwaves or winter freezes hit Travis County. We position your business directly in the Google Local Services and Map Pack 3-Pack with instant phone tracking, neighborhood-level service pages, and verified licensing credentials.',
    image: '/images/us/services/roofing-seo/hero.webp',
    alt: 'Austin home services and contractor local SEO map pack strategy',
    points: [
      'Neighborhood landing pages for Westlake, Circle C, Steiner Ranch, and Lakeway',
      'Live call recording and conversion tracking integrated into Google Analytics 4',
      'Crawl-optimized review velocity systems to outrank multi-truck competitors',
    ],
  },
  {
    sector: 'Legal Practices, Corporate Counsel & Litigation',
    headline: 'Winning High-Value Legal Retainers in Travis County',
    description:
      'Legal queries in Austin are among the most expensive advertising keywords in the country, often exceeding one hundred dollars per click in Google Ads. We build deep, practice-area content hubs and technical backlink authority that secure permanent top-three organic rankings without paying pay-per-click tolls.',
    image: '/images/us/services/law-firm-seo/team.webp',
    alt: 'Austin law firm organic search marketing and litigation practice SEO',
    points: [
      'Detailed practice area silos for personal injury, corporate law, and IP litigation',
      'Attorney profile schema with bar admissions and professional credentials',
      'High-authority local media and legal directory citations with clean NAP consistency',
    ],
  },
  {
    sector: 'B2B Tech, SaaS & Precision Manufacturing',
    headline: 'Engineering Shortlist Dominance for National Procurement',
    description:
      'Austin technology companies and advanced manufacturers sell to sophisticated enterprise buyers who conduct exhaustive due diligence before contacting sales. We optimize technical whitepapers, product capability matrices, and software solution pages to rank for technical comparison queries and earn automatic citations in generative AI search tools.',
    image: '/images/us/saas-website-design/page-plan.webp',
    alt: 'Austin B2B technology and manufacturing enterprise SEO architecture',
    points: [
      'Answer-first technical specifications formatted for generative search engine indexing',
      'Sub-second page load speeds on Next.js and Cloudflare Edge infrastructure',
      'High-authority technical backlink acquisition through original engineering data assets',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Breaking Through the Google 3-Pack Barrier in Crowded Austin Sectors',
    problem: 'Over 42,000 registered businesses in Travis County compete for just three coveted spots in the Google Local Map Pack. Generic directory submissions and unoptimized Google Business Profiles languish invisibly on pages two and three.',
    solution: 'We execute comprehensive Google Business Profile optimization, audit primary categories, inject localized photo feeds, and implement automated review acquisition systems to secure permanent top-three placements.',
  },
  {
    num: '02',
    title: 'Fixing Slow Legacy WordPress Code That Destroys Mobile Search Rankings',
    problem: 'Websites bogged down by 35 active plugins, heavy tracking scripts, and slow shared hosting fail Google Core Web Vitals tests. This causes high mobile bounce rates and algorithmic ranking penalties.',
    solution: 'We engineer sub-second page performance using modern Next.js static architecture, automated image compression, and edge caching on Cloudflare CDN to achieve flawless 95+ mobile Lighthouse scores.',
  },
  {
    num: '03',
    title: 'Ending Locked 12-Month Agency Retainers with Zero Transparent Lead Data',
    problem: 'Traditional marketing agencies lock Austin businesses into expensive annual retainers while sending automated monthly PDF reports filled with vanity impressions rather than real phone calls.',
    solution: 'FactoryJet operates strictly on month-to-month terms. We track real phone calls, form completions, and qualified pipeline revenue with custom Google Analytics 4 conversion events.',
  },
  {
    num: '04',
    title: 'Capturing High-Value Geo-Targeted Commercial Keywords Across Travis County',
    problem: 'Relying exclusively on broad Austin city keywords ignores high-converting localized searches across Westlake Hills, Lakeway, Round Rock, Cedar Park, and Buda.',
    solution: 'We build dedicated geographic service area landing pages and localized content silos that capture micro-corridor search volume throughout Greater Austin.',
  },
];

const ROADMAP_STEPS = [
  {
    phase: 'Month 1',
    title: 'Full Technical Audit, Core Web Vitals Fixes & GBP Baseline',
    desc: 'We conduct a line-by-line audit of your website code, crawl depth, indexing health, server response times, and current Google Business Profile status. We resolve all technical errors, repair broken redirects, clean up duplicate citations, and establish baseline conversion tracking in Google Analytics 4.',
    deliverables: [
      'Comprehensive 50-point technical SEO and crawlability report',
      'Core Web Vitals code refactoring targeting sub-second LCP and zero CLS',
      'Google Business Profile category audit, address verification, and metadata cleanup',
      'Custom phone call, form submission, and live chat conversion tracking setup',
    ],
  },
  {
    phase: 'Month 2',
    title: 'Local Citation Architecture, Review Systems & Entity Schema',
    desc: 'We rebuild your local citation footprint across essential Tier 1 business directories, mapping your Name, Address, and Phone number with complete consistency. In parallel, we deploy structured JSON-LD LocalBusiness schema and launch automated review generation workflows.',
    deliverables: [
      'Cleanup and synchronization across 40+ premier local directories',
      'Implementation of exhaustive nested JSON-LD schema markup',
      'Automated SMS and email review collection system deployment',
      'Competitive gap analysis against top 3 Austin Map Pack leaders',
    ],
  },
  {
    phase: 'Month 3',
    title: 'Corridor Landing Pages & Austin Content Silo Expansion',
    desc: 'We architect and publish high-converting, answer-first landing pages tailored to specific Austin business corridors and surrounding suburbs. Each page is engineered with distinct geographic schema, localized proof points, and targeted commercial copy.',
    deliverables: [
      'Launch of dedicated neighborhood service pages for key target areas',
      'Publishing of detailed service category guides and comparison matrices',
      'On-page internal linking optimization across core commercial URLs',
      'First quarterly ranking progress review and pipeline attribution report',
    ],
  },
  {
    phase: 'Months 4 to 6',
    title: 'Authority Link Acquisition, AI Engine Optimization & Scale',
    desc: 'We build high-quality contextual backlinks from reputable Texas publications, industry associations, and local business hubs. We optimize content structure to trigger direct citations across generative AI search platforms including ChatGPT, Perplexity, and Google AI Overviews.',
    deliverables: [
      'Targeted local digital PR and editorial backlink acquisition',
      'Generative Engine Optimization formatting for AI answer citation',
      'Ongoing Map Pack rank tracking and competitor defense updates',
      'Monthly executive strategy meetings with senior technical engineers',
    ],
  },
];

const EVALUATION_CRITERIA = [
  {
    label: 'Contract Flexibility',
    factoryjet: 'Month-to-month agreements based on performance and trust.',
    traditional: 'Rigid 6 to 12 month binding contracts with steep cancellation fees.',
  },
  {
    label: 'Team Seniority',
    factoryjet: 'Direct access to senior software engineers and technical SEO architects.',
    traditional: 'Junior account coordinators acting as communication intermediaries.',
  },
  {
    label: 'Technical Implementation',
    factoryjet: 'We write and deploy clean code directly to your Next.js or CMS repository.',
    traditional: 'Provides spreadsheets of generic recommendations for your team to code.',
  },
  {
    label: 'Lead Attribution',
    factoryjet: 'Monitors real phone calls, qualified form leads, and closed pipeline value.',
    traditional: 'Reports on keyword impressions and unverified ranking screenshots.',
  },
  {
    label: 'Data & Account Ownership',
    factoryjet: 'You maintain 100% ownership of your accounts, analytics data, and code.',
    traditional: 'Holds landing pages and tracking accounts hostage inside proprietary tools.',
  },
  {
    label: 'AI & Generative Search',
    factoryjet: 'Builds entity graph schema formatted for ChatGPT, Perplexity, and Google AI.',
    traditional: 'Relies on outdated 2018 keyword stuffing and doorway page tactics.',
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
    question: 'How much does professional SEO cost in Austin TX?',
    answer:
      'Professional SEO services in Austin generally range between $1,500 and $4,500 per month depending on sector competitiveness, the size of your geographic service area, and the technical condition of your existing website. A single-location medical clinic in Northwest Hills requires a different scope than a multi-truck plumbing enterprise serving all of Travis and Williamson counties. FactoryJet operates on month-to-month agreements with no long-term lock-ins and begins every partnership with a comprehensive free technical audit.',
  },
  {
    category: 'pricing',
    question: 'Why do you operate month-to-month instead of requiring 12-month retainers?',
    answer:
      'We believe agency retention must be earned every thirty days through measurable business outcomes rather than enforced through legal contracts. When agencies hide behind annual commitments, client communication slows down and technical momentum stalls. Our month-to-month model aligns our engineering incentives directly with your ongoing commercial revenue growth.',
  },
  {
    category: 'pricing',
    question: 'What hidden fees or setup costs should Austin businesses look out for?',
    answer:
      'Many traditional agencies bill extra onboarding fees, charge separately for basic Google Business Profile setup, or invoice additional hourly rates for technical code adjustments. With FactoryJet, your monthly rate covers complete technical execution, on-page optimization, content production, citation management, and conversion tracking with zero unexpected surcharges.',
  },
  {
    category: 'pricing',
    question: 'How do I compare quotes from different Austin SEO agencies?',
    answer:
      'When reviewing proposals, ask three fundamental questions: First, who will actually perform the technical work on my website? Second, will you write and deploy code directly or just deliver a list of suggestions? Third, what specific commercial metrics will you report on each month? If an agency cannot guarantee senior technical execution and refuses to track qualified inbound phone calls, they are selling marketing reports rather than revenue engineering.',
  },
  {
    category: 'local',
    question: 'How do we get our Austin business into the top 3 Google Map Pack results?',
    answer:
      'Securing a spot in the top 3 Google Map Pack requires four synchronized components: selecting the precise primary business category, ensuring absolute Name-Address-Phone consistency across major directories, maintaining a steady velocity of authentic five-star customer reviews with natural service keywords, and building localized domain authority through a fast website backed by structured LocalBusiness schema.',
  },
  {
    category: 'local',
    question: 'Can you rank our business in surrounding suburbs like Round Rock, Westlake, and Lakeway?',
    answer:
      'Yes. We architect dedicated geographic service area landing pages and localized schema markup targeting key suburban centers across Travis, Williamson, and Hays counties. This allows your brand to capture high-intent searches in Westlake Hills, Lakeway, Round Rock, Cedar Park, Pflugerville, Buda, and Kyle without triggering Google duplicate content penalties.',
  },
  {
    category: 'local',
    question: 'How important are Google customer reviews for local search rankings in Austin?',
    answer:
      'Google customer reviews are one of the most powerful direct ranking factors in local search algorithms. Both review quantity and the frequency of new reviews directly influence your Map Pack proximity radius. We help your team implement frictionless post-service SMS and email review collection workflows that consistently generate verified, detailed customer feedback.',
  },
  {
    category: 'local',
    question: 'What is the difference between Google Map Pack SEO and organic website SEO?',
    answer:
      'Google Map Pack SEO focuses on the localized 3-Pack box displayed at the top of local search results, driven by your Google Business Profile, geographic proximity, citations, and reviews. Organic website SEO focuses on the traditional search listings beneath the map, driven by technical site speed, deep content silos, structured data, and high-authority backlinks. A successful campaign optimizes both layers in unison.',
  },
  {
    category: 'technical',
    question: 'What is technical SEO and why is it critical for Austin companies?',
    answer:
      'Technical SEO optimizes the fundamental software architecture of your website. It encompasses server response speed, crawl budget optimization, mobile layout stability, internal link architecture, and nested JSON-LD schema markup. In competitive markets like Austin, even minor technical defects like slow JavaScript execution can prevent search engine spiders from indexing your highest-value commercial pages.',
  },
  {
    category: 'technical',
    question: 'How do you optimize websites for Google AI Overviews and ChatGPT search?',
    answer:
      'Generative AI search platforms extract facts from websites with clear entity relationships, concise answer-first prose, authoritative data points, and semantic HTML markup. We structure your content using direct informational answers, structured comparison tables, and detailed entity schemas so AI engines can effortlessly parse, cite, and reference your business.',
  },
  {
    category: 'technical',
    question: 'Why does website loading speed directly impact Google search rankings?',
    answer:
      'Google utilizes Core Web Vitals as an official ranking metric. Fast-loading websites deliver superior user experiences, resulting in lower bounce rates and higher session engagement. If your site takes longer than two seconds to load on mobile networks, search algorithms demote your listings in favor of faster competitors.',
  },
  {
    category: 'technical',
    question: 'What structured data schema do you implement on local Austin websites?',
    answer:
      'We deploy comprehensive JSON-LD schemas tailored to your industry, including LocalBusiness, ProfessionalService, MedicalClinic, LegalService, FAQPage, BreadcrumbList, and Service schemas. These structured data tags explicitly inform search bots about your geographic service boundaries, business hours, service offerings, and verified customer reviews.',
  },
  {
    category: 'timeline',
    question: 'How long does it take to see measurable SEO ranking improvements in Austin?',
    answer:
      'Initial technical fixes, Google Business Profile corrections, and low-competition neighborhood keyword wins typically produce measurable visibility gains within 30 to 60 days. Highly competitive commercial terms and dominant top-three Map Pack placements generally mature within 3 to 6 months of continuous optimization.',
  },
  {
    category: 'timeline',
    question: 'How do you track and verify real return on investment for our business?',
    answer:
      'We track concrete commercial outcomes: verified phone calls, qualified contact form submissions, appointment bookings, and organic pipeline revenue. Through custom Google Analytics 4 event tracking and Google Search Console data, you receive transparent monthly reporting showing exactly how search visibility translates into customer acquisition.',
  },
  {
    category: 'timeline',
    question: 'Will algorithm updates from Google disrupt our search rankings?',
    answer:
      'Google algorithm updates penalize websites that rely on manipulative shortcuts like artificial link networks and thin automated copy. Because our methodology is rooted in senior technical engineering, clean site architecture, authentic local citations, and deep original content, our client websites consistently gain ranking authority during core search updates.',
  },
  {
    category: 'timeline',
    question: 'Can SEO replace our paid Google Ads spend in Austin?',
    answer:
      'Yes, over time. While Google Ads provide immediate visibility for a continuous pay-per-click fee, organic SEO builds permanent digital equity. As your organic rankings and Map Pack positions solidify, most Austin clients systematically reduce their paid advertising budgets while maintaining a steady flow of qualified inbound leads.',
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
    { '@type': 'City', name: 'West Lake Hills' },
    { '@type': 'City', name: 'Lakeway' },
    { '@type': 'City', name: 'Pflugerville' },
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
  name: 'Austin SEO Services & Local Search Optimization',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Local SEO, Technical SEO & Generative Engine Optimization',
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
    { '@type': 'ListItem', position: 2, name: 'Austin', item: 'https://factoryjet.com/austin/ecommerce-development' },
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
                  Austin SEO Company &amp; Local Search Marketing Agency
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  Win the Google 3-Pack Map results, dominate high-intent Central Texas search terms, and earn citations across AI answer engines. No long-term contracts. Talk directly with senior technical engineers.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Claim Free Austin SEO Audit" region="us" btnVariant="primary-dark" />
                  <a href="#austin-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Austin Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame (Edge-to-Edge) */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/austin/hero-austin.webp"
                  alt="Austin Texas skyline and local SEO technical optimization strategy"
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
                  alt="FactoryJet senior SEO engineers auditing Austin Google Map Pack and local search citations"
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
                  <span>Central Texas Market Reality</span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
                  Engineered for Growth in Austin&apos;s Crowded Market
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  With over 42,000 active businesses competing across Travis County, standard generic agency tactics fail. We combine sub-second Core Web Vitals speed optimization, Google Business Profile dominance, and localized corridor authority to capture real commercial leads.
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
                From Downtown legal practices to Silicon Hills SaaS firms and Williamson County contractors:
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

        {/* ── 05. INDUSTRY DEEP-DIVES & PHOTOREALISTIC CASE EXAMPLES ── */}
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
                Specialized Search Strategies for Austin&apos;s Leading Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every vertical in Austin demands distinct schema models, citation targets, and conversion architectures:
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

        {/* ── 06. CORE DRIVERS & PAIN POINTS (RITOVEX NUMBERED SERVICES ROWS) ── */}
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

        {/* ── 07. ARCHITECTURE BLUEPRINT (AUTO-ROTATING TABS) ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: '48px 0 16px' }}>
          <div className="pp-wrap">
            <RegionalBenchmarkCard city="Austin" vertical="seo" />
          </div>
        </section>

        <div id="seo-architecture-blueprint">
          <LocalSeoArchitectureBlueprint
            badge="// AUSTIN LOCAL SEO & AI CITATION BLUEPRINT"
            title="Local SEO Architecture: From Map Pack to AI Citations"
            subtitle="Explore how your Google Business Profile, local review velocity, JSON-LD schema, and high-performance frontend synchronize to capture inbound leads."
            city="Austin"
            ctaLabel="Claim Free Austin SEO Technical Audit"
            region="us"
          />
        </div>

        {/* ── 08. STEP-BY-STEP 6-MONTH ROADMAP MATRIX ── */}
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
                Our 6-Month Austin Search Domination Roadmap
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                A transparent, step-by-step engineering roadmap delivering compounding search visibility from day one:
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
                Evaluating Austin SEO Companies: What to Ask
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

        {/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION (16 DETAILED QUESTIONS) ── */}
        <LocalSeoOpportunityEstimator city="Austin" region="us" />

        <FAQ
          eyebrow="AUSTIN SEO INTELLIGENCE"
          headline="Frequently Asked Questions About SEO in Austin TX"
          lead="Direct, plain English answers to what Austin business owners and marketing leaders ask about local search rankings and lead generation:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 11. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <SeoCityLinksUS currentCity="austin" />
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
