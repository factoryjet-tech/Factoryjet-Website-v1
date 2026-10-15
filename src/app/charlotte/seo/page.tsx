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
const CANONICAL = 'https://factoryjet.com/charlotte/seo';

export const metadata: Metadata = {
  title: 'SEO Agency for Charlotte, NC Businesses | FactoryJet',
  description:
    'Local search and Google Maps work, technical SEO and AI answer visibility for Charlotte, NC businesses. No long-term contract.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Agency for Charlotte, NC Businesses | FactoryJet',
    description:
      'Local search and Google Maps work, technical SEO and AI answer visibility for Charlotte, NC businesses. No long-term contract.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'SEO for Charlotte, NC businesses by FactoryJet' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency for Charlotte, NC Businesses | FactoryJet',
    description: 'Local search and Google Maps work, technical SEO and AI answer visibility for Charlotte, NC businesses. No long-term contract.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

// Plain names of tools and platforms this work uses. These are not partner,
// certification or award claims. Add one only with a public directory listing to point to.
const SEO_TOOLS = [
  'Google Search Console',
  'DataForSEO API',
  'Next.js & React',
  'Cloudflare Edge CDN',
  'Google Analytics 4',
];

const STAT_CARDS = [
  { num: 'Maps', title: 'Business Profile Review', desc: 'Review the categories, services, and business details customers see in local search.', icon: '📍' },
  { num: 'Site', title: 'Technical SEO Review', desc: 'Find crawl, performance, and usability issues that get between a search and an inquiry.', icon: '📈' },
  { num: '500+', title: 'Businesses Served', desc: 'Businesses FactoryJet has built for, across all services.', icon: '🏢' },
  { num: 'Monthly', title: 'Month-to-Month Terms', desc: 'Month-to-month terms with direct communication with senior technical engineers.', icon: '⚡' },
];

const DISTRICTS = [
  {
    corridor: 'Uptown & Financial District',
    focus: 'Banking, Corporate Counsel & Commercial Real Estate',
    desc: 'Dense financial core surrounding Trade and Tryon anchored by Bank of America and Truist. Corporate decision-makers evaluate technical credentials, page speed, and practice area authority before initiating contact.',
  },
  {
    corridor: 'South End & Design District',
    focus: 'Tech Scale-Ups, Creative Studios & Modern Retail',
    desc: 'High-growth urban corridor along the light rail packed with technology scale-ups, architectural firms, and modern dining. Mobile discovery and visual review proof dictate commercial conversions.',
  },
  {
    corridor: 'SouthPark & Sharon Road',
    focus: 'Wealth Advisory, Private Clinics & Luxury Services',
    desc: 'Affluent commercial center where high-net-worth individuals and corporate executives research advisory credentials, certifications, and verified client testimonials before calling.',
  },
  {
    corridor: 'Ballantyne Corporate Park',
    focus: 'Enterprise B2B, Insurance & Regional Headquarters',
    desc: 'Major corporate campus corridor along I-485. Deep B2B content silos, clear service offerings, and fast page loads capture corporate procurement teams across South Charlotte.',
  },
  {
    corridor: 'NoDa & Plaza Midwood',
    focus: 'Hospitality, Dining, Craft Breweries & Arts',
    desc: 'Eclectic cultural districts along North Davidson. Fast mobile load times, updated business hours, structured menu schema, and steady review acquisition drive high foot traffic.',
  },
  {
    corridor: 'Lake Norman & North Mecklenburg',
    focus: 'Home Services, Marine Contractors & Multi-Location',
    desc: 'High-income northern suburbs including Huntersville, Cornelius, Davidson, and Mooresville. Multi-location service coverage requires distinct geographic landing pages.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Banking Ecosystem, Financial Advisory & Private Wealth',
    headline: 'Earning High-Ticket Consultations in America’s Second Banking Capital',
    description:
      'Charlotte is a global financial powerhouse. Wealth management firms, commercial lending brokers, and corporate advisory practices need search visibility that projects institutional stability. We build verified financial entity schema, author deep practice area guides, and engineer sub-second page performance that converts sophisticated corporate clients.',
    image: '/images/us/charlotte/seo/card-wealth-adviser-meeting.webp',
    alt: 'A financial adviser sliding a closed folder across a round table to an older male client, an orange cup and saucer beside him',
    points: [
      'Structured JSON-LD schema for FinancialService, AccountingService, and WealthManagement',
      'High-authority regional media citations and verified NAP directory synchronization',
      'Conversion-optimized lead capture flows designed for high-net-worth consultations',
    ],
  },
  {
    sector: 'High-Ticket Home Services, Roofing & Mechanical Contractors',
    headline: 'Capturing Emergency Search Demand Across Mecklenburg County',
    description:
      'From humid summer air conditioning failures to severe Carolinas storm damage repairs, Charlotte homeowners search under urgent deadlines. We work on your Google Maps listing with live call tracking, hyper-local neighborhood pages, and automated review collection systems.',
    image: '/images/us/services/roofing-seo/hero.webp',
    alt: 'Aerial view of suburban shingle rooftops at golden hour',
    points: [
      'Neighborhood landing pages for Myers Park, Dilworth, SouthPark, and Lake Norman',
      'Real-time call recording and conversion attribution integrated into GA4',
      'Crawl-optimized review velocity systems to outperform regional multi-truck fleets',
    ],
  },
  {
    sector: 'Healthcare, Dental & Specialized Medical Practices',
    headline: 'Converting High-Intent Patients in Growing Residential Corridors',
    description:
      'Private medical practices, orthodontic groups, and specialized surgical clinics face aggressive competition from Atrium Health and Novant Health. We build detailed provider profiles, clinical symptom content, and medical schema that help the practice appear in Google Maps results and AI answer overviews.',
    image: '/images/us/charlotte/seo/card-eye-test-fitting.webp',
    alt: 'An optometrist sliding a lens into a metal trial frame worn by an older woman seated in an exam chair',
    points: [
      'Exhaustive nested schema for MedicalClinic, Physician, and MedicalSpecialty',
      'HIPAA-aware appointment scheduling and instant click-to-call mobile buttons',
      'Post-visit SMS review request workflows',
    ],
  },
  {
    sector: 'Industrial Manufacturing, Logistics & B2B Supply Chain',
    headline: 'National Supplier Procurement Search Along I-85 & I-77',
    description:
      'Charlotte is the logistics and industrial crossroads of the Southeast. Precision fabricators, equipment distributors, and freight carriers need websites that communicate engineering credibility to procurement managers. We optimize technical spec sheets, capability matrices, and RFQ forms to secure national supplier shortlists.',
    image: '/images/us/charlotte/seo/card-pallet-strapping-dock.webp',
    alt: 'Two warehouse workers securing a pallet of plain cartons, one tightening a strap and one steering an orange pallet jack',
    points: [
      'Answer-first technical specifications formatted for generative search engine extraction',
      'Sub-second page speeds on lightweight Next.js and Cloudflare Edge architecture',
      'High-authority regional logistics and trade publication backlink acquisition',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Breaking Through Map Pack Saturation Across the Charlotte Metro Area',
    problem: 'Many businesses across Mecklenburg County compete for the same top 3 Google Map Pack spots. Generic directory spam and neglected profiles sit invisible on page two.',
    solution: 'We execute comprehensive Google Business Profile optimization, primary category audits, geotagged photo feeds, and automated review collection systems.',
  },
  {
    num: '02',
    title: 'Fixing Slow Legacy WordPress Code That Destroys Mobile Search Rankings',
    problem: 'Websites bogged down by bloated plugins, slow server hosting, and missing schema markup fail Google Core Web Vitals tests, resulting in mobile ranking penalties.',
    solution: 'We work on page speed using modern Next.js static architecture, automated image compression, and edge caching on Cloudflare CDN, then check the result with mobile Lighthouse tests.',
  },
  {
    num: '03',
    title: 'Ending Locked 12-Month Agency Retainers with Zero Transparent Lead Data',
    problem: 'Traditional agencies lock Charlotte businesses into rigid annual retainers while delivering meaningless keyword ranking screenshots instead of qualified leads.',
    solution: 'FactoryJet operates strictly on month-to-month terms. We track real phone calls, form completions, and qualified pipeline revenue with custom Google Analytics 4 conversion events.',
  },
  {
    num: '04',
    title: 'Capturing High-Value Geo-Targeted Commercial Keywords Across the Carolinas',
    problem: 'Relying exclusively on broad Charlotte terms causes businesses to miss high-converting localized searches across Huntersville, Matthews, Fort Mill, and Concord.',
    solution: 'We build dedicated geographic service area landing pages and localized content silos that capture micro-corridor search volume throughout the Charlotte metro region.',
  },
];

const ROADMAP_STEPS = [
  {
    phase: 'Month 1',
    title: 'Full Technical Audit, Core Web Vitals Fixes & GBP Baseline',
    desc: 'We conduct a line-by-line audit of your website code, crawl depth, indexing health, server response times, and current Google Business Profile status. We resolve all technical errors, repair broken redirects, clean up duplicate citations, and establish baseline conversion tracking in Google Analytics 4.',
    deliverables: [
      'Comprehensive 50-point technical SEO and crawlability audit report',
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
      'Cleanup and synchronization across 40+ premier local business directories',
      'Implementation of exhaustive nested JSON-LD schema markup',
      'Automated SMS and email review collection system deployment',
      'Competitive gap analysis against top 3 Charlotte Map Pack leaders',
    ],
  },
  {
    phase: 'Month 3',
    title: 'Corridor Landing Pages & Charlotte Content Silo Expansion',
    desc: 'We architect and publish high-converting, answer-first landing pages tailored to specific Charlotte business corridors and surrounding suburbs. Each page is engineered with distinct geographic schema, localized proof points, and targeted commercial copy.',
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
    desc: 'We build high-quality contextual backlinks from reputable North Carolina publications, industry associations, and regional business hubs. We optimize content structure to trigger direct citations across generative AI search platforms including ChatGPT, Perplexity, and Google AI Overviews.',
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
    question: 'How much does professional SEO cost in Charlotte NC?',
    answer:
      'US small businesses typically pay $1,500 to $3,500 a month for SEO, according to WebFX pricing data updated in October 2026. WebFX puts local SEO retainers at $500 to $3,000 a month. What a Charlotte business pays depends on how competitive the sector is, how many locations it has and the condition of the website. FactoryJet quotes a fixed price in writing after a short scoping call and works on month-to-month terms.',
  },
  {
    category: 'pricing',
    question: 'Why do you operate month-to-month instead of requiring 12-month retainers?',
    answer:
      'We believe agency retention must be earned every thirty days through measurable business outcomes rather than enforced through legal contracts. When agencies hide behind annual commitments, client communication slows down and technical momentum stalls. Our month-to-month model aligns our engineering incentives directly with your ongoing commercial revenue growth.',
  },
  {
    category: 'pricing',
    question: 'What hidden fees or setup costs should Charlotte businesses look out for?',
    answer:
      'Many traditional agencies bill extra onboarding fees, charge separately for basic Google Business Profile setup, or invoice additional hourly rates for technical code adjustments. With FactoryJet, your monthly rate covers complete technical execution, on-page optimization, content production, citation management, and conversion tracking with zero unexpected surcharges.',
  },
  {
    category: 'pricing',
    question: 'How do I compare quotes from different Charlotte SEO agencies?',
    answer:
      'When reviewing proposals, ask three fundamental questions: First, who will actually perform the technical work on my website? Second, will you write and deploy code directly or just deliver a list of suggestions? Third, what specific commercial metrics will you report on each month? If an agency will not say who does the technical work and refuses to track qualified inbound phone calls, they are selling marketing reports rather than revenue engineering.',
  },
  {
    category: 'local',
    question: 'How do we get our Charlotte business into the top 3 Google Map Pack results?',
    answer:
      'Securing a spot in the top 3 Google Map Pack requires four synchronized components: selecting the precise primary business category, ensuring absolute Name-Address-Phone consistency across major directories, maintaining a steady velocity of authentic customer reviews, and building localized domain authority through a fast website backed by structured LocalBusiness schema.',
  },
  {
    category: 'local',
    question: 'Can you rank our business in surrounding suburbs like Huntersville, Matthews, and Fort Mill?',
    answer:
      'Yes. We architect dedicated geographic service area landing pages and localized schema markup targeting key suburban centers across Mecklenburg, Cabarrus, and York counties. This allows your brand to capture high-intent searches in Huntersville, Cornelius, Matthews, Mint Hill, Pineville, Concord, and Fort Mill SC without triggering duplicate content penalties.',
  },
  {
    category: 'local',
    question: 'How important are Google customer reviews for local search rankings in Charlotte?',
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
    question: 'What is technical SEO and why is it critical for Charlotte companies?',
    answer:
      'Technical SEO optimizes the fundamental software architecture of your website. It encompasses server response speed, crawl budget optimization, mobile layout stability, internal link architecture, and nested JSON-LD schema markup. In competitive markets like Charlotte, even minor technical defects like slow JavaScript execution can prevent search engine spiders from indexing your highest-value commercial pages.',
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
      'Page experience and Core Web Vitals are among the signals Google can use, but speed alone does not determine rankings. A faster mobile experience also makes it easier for visitors to read, call, or submit a form. We improve performance because it supports both search visibility and conversion, without promising that one speed score will produce a particular position.',
  },
  {
    category: 'technical',
    question: 'What structured data schema do you implement on local Charlotte websites?',
    answer:
      'We deploy comprehensive JSON-LD schemas tailored to your industry, including LocalBusiness, MedicalClinic, FinancialService, FAQPage, BreadcrumbList, and Service schemas. These structured data tags explicitly inform search bots about your geographic service boundaries, business hours, service offerings, and verified customer reviews.',
  },
  {
    category: 'timeline',
    question: 'How long does it take to see measurable SEO ranking improvements in Charlotte?',
    answer:
      'Timing depends on your starting position, competition, location, website, listings, and review profile. Technical and business-profile fixes can be completed early, while meaningful ranking and inquiry growth usually takes sustained work. We establish a baseline first, report progress each month, and do not promise a specific Map Pack position or deadline.',
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
      'They can. Google core updates move rankings for many sites, and no agency controls them. Our work stays inside Google guidelines. That means clean site architecture, authentic local citations and original content, with no link networks or thin automated copy. After each update we check your rankings and inquiries and tell you what changed.',
  },
  {
    category: 'timeline',
    question: 'Can SEO replace our paid Google Ads spend in Charlotte?',
    answer:
      'It can reduce how much you rely on ads, but it rarely replaces them outright. Google Ads buy visibility for as long as you pay per click. SEO work on your site and listings stays in place after it is done. We report calls and inquiries from organic search each month, so you can decide whether and when to move ad budget.',
  },
  {
    category: 'local',
    question: 'How does Charlotte local SEO differ from regional North Carolina statewide optimization?',
    answer:
      'Charlotte local SEO optimizes for hyper-local geographic proximity signals across Mecklenburg County corridors (Uptown, South End, SouthPark, Ballantyne) and Google Maps 3-Pack capture. Statewide North Carolina SEO focuses on broader regional keyword authority, high-volume commercial head terms, and category directory architecture that ranks simultaneously across Charlotte, Raleigh, Greensboro, and Wilmington.',
  },
  {
    category: 'technical',
    question: 'What role do Apple Business Connect and Bing Places play in Queen City local search?',
    answer:
      'While Google represents the majority of local search volume, Apple Business Connect powers default local search on millions of iPhones, Apple CarPlay navigation units, and Siri voice assistants across Charlotte. Bing Places directly powers Copilot conversational search. We synchronize your verified NAP profiles across all primary mapping ecosystems.',
  },
  {
    category: 'local',
    question: 'How do you handle Google Business Profile re-verification and suspension appeals in Charlotte?',
    answer:
      'If your Google Business Profile faces algorithmic suspension or video re-verification requests, we assemble complete physical documentation, including North Carolina Secretary of State filings, utility bills, permanent suite signage photographs, and lease agreements, to rapidly submit compliant reinstatement appeals directly to Google support.',
  },
  {
    category: 'technical',
    question: 'What is internal link siloing and topical authority mapping for Charlotte service businesses?',
    answer:
      'Internal link siloing organizes your website into clear semantic topic clusters. Primary service pillars (e.g. Commercial Litigation, HVAC Installation, Wealth Management) link hierarchically to detailed sub-service guides and neighborhood case studies, concentrating PageRank and proving exhaustive topical depth to search crawlers.',
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
  name: 'Charlotte SEO Services & Local Search Optimization',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  serviceType: 'Local SEO, Technical SEO & Generative Engine Optimization',
  description:
    'Local search and Google Maps work, technical SEO and AI answer visibility for Charlotte, NC businesses. No long-term contract.',
  areaServed: [
    { '@type': 'City', name: 'Charlotte' },
    { '@type': 'City', name: 'Huntersville' },
    { '@type': 'City', name: 'Matthews' },
    { '@type': 'City', name: 'Concord' },
    { '@type': 'City', name: 'Fort Mill' },
    { '@type': 'State', name: 'North Carolina' },
  ],
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'SEO Agency for Charlotte, NC Businesses | FactoryJet',
  description: 'Local search and Google Maps work, technical SEO and AI answer visibility for Charlotte, NC businesses. No long-term contract.',
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
    { '@type': 'ListItem', position: 2, name: 'Charlotte', item: 'https://factoryjet.com/charlotte/ecommerce-development' },
    { '@type': 'ListItem', position: 3, name: 'SEO', item: CANONICAL },
  ],
};

export default function CharlotteSeoPage() {
  return (
    <>
      <script id="charlotte-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="charlotte-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="charlotte-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="charlotte-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>Charlotte Local &amp; Technical SEO</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  SEO for Charlotte Businesses, With No Long-Term Contract
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  We work on your Google Business Profile, your service pages and your listings so customers searching in Charlotte can find you. No long-term contracts. Talk directly with senior technical engineers.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Claim Free Charlotte SEO Audit" region="us" btnVariant="primary-dark" />
                  <a href="#charlotte-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Charlotte Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame (Edge-to-Edge) */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/charlotte/hero-charlotte.webp"
                  alt="A city skyline of glass towers above a tree-lined park"
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
              <div className="rv-ticker-label">Tools we use</div>
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
              
              {/* Left Column: Clean Organic Curved Photo Frame (Edge-to-Edge) */}
              <div className="rv-curved-frame-2">
                <Image
                  src="/images/us/boston-seo/boston-seo-consult.webp"
                  alt="A shopkeeper in a navy apron holding a phone that shows a map pin, talking with a woman carrying a tote bag at the shop door"
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
                  <span>Queen City Market Reality</span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
                  Engineered for Growth in Charlotte&apos;s Fast-Moving Market
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  With many businesses competing across Mecklenburg County, standard generic agency tactics fail. We combine sub-second Core Web Vitals speed optimization, Google Business Profile work, and localized corridor authority to capture real commercial leads.
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
                  <ModalCTAButton label="Schedule Charlotte Strategy Call" region="us" btnVariant="primary-dark" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 04. CHARLOTTE BUSINESS CORRIDORS DIRECTORY ── */}
        <section id="charlotte-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Geographic Precision</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored SEO for Charlotte&apos;s Core Business Corridors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From Uptown financial advisory to South End creative firms and Lake Norman contractors:
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
                Specialized Search Strategies for Charlotte&apos;s Leading Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every vertical in Charlotte demands distinct schema models, citation targets, and conversion architectures:
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
                What FactoryJet Does Differently for Charlotte Businesses
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

        {/* ── 07. ARCHITECTURE BLUEPRINT (AUTO-ROTATING TABS) ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: '48px 0 16px' }}>
          <div className="pp-wrap">
            <RegionalBenchmarkCard city="Charlotte" vertical="seo" />
          </div>
        </section>

        <div id="seo-architecture-blueprint">
          <LocalSeoArchitectureBlueprint
            badge="// CHARLOTTE LOCAL SEO & AI CITATION BLUEPRINT"
            title="Local SEO Architecture: From Map Pack to AI Citations"
            subtitle="Explore how your Google Business Profile, local review velocity, JSON-LD schema, and high-performance frontend synchronize to capture inbound leads."
            city="Charlotte"
            ctaLabel="Claim Free Charlotte SEO Technical Audit"
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
                Our 6-Month Charlotte SEO Roadmap
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                A step-by-step roadmap of the work, month by month:
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
                Evaluating Charlotte SEO Companies: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Compare engineering-led execution against traditional marketing agency retainers before you sign:
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '16px', overflow: 'hidden', maxWidth: '960px', margin: '0 auto' }}>
              <div className="rv-eval-head" style={{ background: '#141414', color: '#FFFFFF', padding: '16px 24px', fontWeight: 700, fontSize: '13.5px' }}>
                <div>Evaluation Factor</div>
                <div style={{ color: '#FF5622' }}>FactoryJet Engineering Model</div>
                <div style={{ color: '#A0A0B0' }}>Traditional Marketing Agencies</div>
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
                  <div data-label="Traditional Marketing Agencies" style={{ fontSize: '13px', color: '#6E6E80', lineHeight: 1.45 }}>
                    {crit.traditional}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION (16 DETAILED QUESTIONS) ── */}
        <LocalSeoOpportunityEstimator city="Charlotte" region="us" />

        <FAQ
          eyebrow="CHARLOTTE SEO INTELLIGENCE"
          headline="Frequently Asked Questions About SEO in Charlotte NC"
          lead="Direct, plain English answers to what Charlotte business owners and marketing leaders ask about local search rankings and lead generation:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 11. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <SeoCityLinksUS currentCity="charlotte" />
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
              <span>No-Contract Charlotte SEO</span>
            </div>
            
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Start With a Free Charlotte SEO Audit
            </h2>
            
            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Send us your website URL. We will perform a complete local search and technical audit of your site and top Charlotte competitors, completely free.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Claim Your Free Charlotte SEO Audit" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
