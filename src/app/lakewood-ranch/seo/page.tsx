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
const CANONICAL = 'https://factoryjet.com/lakewood-ranch/seo';

export const metadata: Metadata = {
  title: 'Lakewood Ranch SEO Company & Local Agency FL | FactoryJet',
  description:
    'Lakewood Ranch SEO company and agency. No-contract local SEO, Google Map Pack rankings, AI answer citations, and Core Web Vitals for Sarasota & Manatee FL.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Lakewood Ranch SEO Company & Local Agency FL | FactoryJet',
    description:
      'Lakewood Ranch SEO company and agency. No-contract local SEO, Google Map Pack rankings, and technical SEO for Lakewood Ranch FL businesses.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Lakewood Ranch SEO Company & Agency' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lakewood Ranch SEO Company & Local Agency FL | FactoryJet',
    description: 'Local and technical SEO in Lakewood Ranch FL. Win the Google Map Pack and AI search citations.',
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
  { num: '44%', title: 'Map Pack Clicks', desc: 'Direct phone calls and clicks won by the top 3 Google local profiles.', icon: '📍' },
  { num: '140+', title: 'Monthly Head Demand', desc: 'Verified monthly searches across Lakewood Ranch SEO company and agency queries.', icon: '📈' },
  { num: '500+', title: 'Client Deployments', desc: 'Websites and local profiles optimized across medical, wealth, and luxury services.', icon: '🏢' },
  { num: '100%', title: 'Direct Engineer Access', desc: 'Month-to-month terms with direct access to senior technical engineers.', icon: '⚡' },
];

const DISTRICTS = [
  {
    corridor: 'Main Street & Town Center',
    query: 'financial advisor lakewood ranch fl',
    focus: 'Wealth Advisory, Estate Law & Executive Services',
    desc: 'The original commercial core of Lakewood Ranch. High-net-worth residents research executive credentials, practice stability, and client reviews before booking consultations.',
  },
  {
    corridor: 'Waterside Place & Lakefront',
    query: 'best restaurant waterside place lakewood ranch',
    focus: 'Hospitality, Dining, Wellness & Modern Retail',
    desc: 'Vibrant lakefront lifestyle hub. Mobile discoverability, live menu schema, and steady review acquisition drive high foot traffic and event bookings.',
  },
  {
    corridor: 'CORE at Lakewood Ranch',
    query: 'biotech life sciences lakewood ranch',
    focus: 'Healthcare Innovation, Med Spas & Specialty Clinics',
    desc: 'Collaboration Opportunities for Research and Exploration park. Healthcare providers and medical specialists require comprehensive medical schema and physician authority.',
  },
  {
    corridor: 'University Parkway & UTC Corridor',
    query: 'cosmetic dentist university parkway fl',
    focus: 'High-Ticket Dentistry, Orthopedics & Aesthetics',
    desc: 'High-traffic border between Sarasota and Manatee counties. Capturing high-intent patient queries requires multi-county LocalBusiness schema and Google Map Pack dominance.',
  },
  {
    corridor: 'Lorraine Road & Eastern Villages',
    query: 'custom home builder lakewood ranch',
    focus: 'Luxury Real Estate, Pool Builders & Home Improvement',
    desc: 'Affluent new residential villages where affluent homeowners search for verified contractors, architects, and high-end landscaping specialists.',
  },
  {
    corridor: 'Premier Sports Campus & SR-70',
    query: 'roofing contractor lakewood ranch fl',
    focus: 'Commercial Services, Roofing & Hurricane Contractors',
    desc: 'Commercial artery servicing fast-growing master-planned communities. Rapid post-storm search spikes require prominent Map Pack placement and instant click-to-call buttons.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Healthcare, Med Spas & Concierge Longevity Practices',
    headline: 'Converting Affluent Patients in America’s Premier Master-Planned Community',
    description:
      'Lakewood Ranch is home to high-income retirees and active families demanding premium healthcare, aesthetic medicine, and concierge longevity care. We build comprehensive medical schema, doctor profile directories, and HIPAA-aware conversion flows that allow practices to dominate the Google 3-Pack and earn direct quotes in AI answer engines.',
    image: '/images/us/lakewood-ranch/seo/lakewood-ranch-buyer-intent-dashboard.webp',
    alt: 'Lakewood Ranch healthcare and medical clinic local search engine optimization',
    points: [
      'Comprehensive schema for Physician, MedicalClinic, and MedicalSpecialty',
      'HIPAA-aware appointment scheduling and instant click-to-call mobile buttons',
      'Post-visit SMS review workflows generating consistent 5-star patient feedback',
    ],
  },
  {
    sector: 'Private Wealth Management, Estate Law & Family Offices',
    headline: 'Earning High-Ticket Consultations Among High-Net-Worth Retirees',
    description:
      'With thousands of high-net-worth individuals relocating to Lakewood Ranch, financial advisory practices and estate planning attorneys require authoritative search visibility. We build verified financial entity schemas, author deep wealth preservation guides, and engineer sub-second page performance.',
    image: '/images/us/services/law-firm-seo/team.webp',
    alt: 'Lakewood Ranch wealth management and estate planning local SEO strategy',
    points: [
      'Structured JSON-LD schema for FinancialService, LegalService, and WealthManagement',
      'High-authority regional media citations and verified NAP directory synchronization',
      'Conversion-optimized lead capture flows designed for high-net-worth consultations',
    ],
  },
  {
    sector: 'Luxury Custom Home Builders, Remodelers & Pool Contractors',
    headline: 'Capturing Multi-Million-Dollar Residential Project Inquiries',
    description:
      'Homeowners in The Lake Club, Country Club East, and Waterside demand elite craftsmanship. We optimize project portfolio galleries, architectural spec sheets, and neighborhood landing pages to position your contracting brand as the premier luxury builder across Sarasota and Manatee counties.',
    image: '/images/us/lakewood-ranch/seo/lakewood-ranch-new-resident-seo.webp',
    alt: 'Lakewood Ranch luxury custom home builder and contractor local SEO',
    points: [
      'High-resolution WebP project galleries optimized for image search and speed',
      'Neighborhood landing pages for The Lake Club, Waterside, and Country Club',
      'Structured LocalBusiness schema capturing high-budget residential inquiries',
    ],
  },
  {
    sector: 'Hurricane Roofing, Impact Windows & Mechanical Contractors',
    headline: 'Dominating Urgent Storm Preparation and Recovery Searches',
    description:
      'Gulf Coast tropical storms and humid subtropical heat create urgent homeowner repair and storm hardening demands. We position your contracting business directly in the Google Map Pack 3-Pack with live call recording and neighborhood service pages from Lakewood Ranch to Sarasota and Bradenton.',
    image: '/images/us/services/roofing-seo/hero.webp',
    alt: 'Lakewood Ranch hurricane roofing and contractor local SEO map pack strategy',
    points: [
      'Multi-county landing pages for Lakewood Ranch, Sarasota, and Bradenton',
      'Live call recording and conversion attribution integrated into Google Analytics 4',
      'Crawl-optimized review velocity systems to outperform regional multi-truck fleets',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Overcoming Map Pack Invisibility Across Sarasota and Manatee Counties',
    problem: 'Because Lakewood Ranch spans both Sarasota and Manatee county lines, generic Google Business Profile setups fail to rank across multi-district boundaries.',
    solution: 'We execute comprehensive Google Business Profile optimization, multi-county radius citation sync, and localized neighborhood landing page silos.',
  },
  {
    num: '02',
    title: 'Fixing Slow Legacy Code and Technical Debt That Blocks Search Rankings',
    problem: 'Sluggish server response times, bloated WordPress plugins, and missing schema markup prevent search engine bots and AI assistants from indexing your pages.',
    solution: 'We engineer sub-second page loads, clean JSON-LD entity schema, and single-hop crawl architecture to earn top organic ranks and Google AI Overview citations.',
  },
  {
    num: '03',
    title: 'Ending Locked 12-Month Contracts with Zero Transparent Lead Attribution',
    problem: 'Traditional agencies lock Lakewood Ranch businesses into rigid annual retainers while delivering meaningless keyword ranking screenshots instead of qualified leads.',
    solution: 'FactoryJet operates on flexible month-to-month agreements. We track real phone calls, form completions, and qualified pipeline revenue with custom GA4 events.',
  },
  {
    num: '04',
    title: 'Capturing High-Value Geo-Targeted Commercial Keywords in Master-Planned Villages',
    problem: 'Relying solely on broad city-level terms causes businesses to miss high-intent searches across Waterside, Main Street, The Lake Club, and University Parkway.',
    solution: 'We build structured local service area landing pages and localized content silos that capture micro-corridor search volume throughout the Lakewood Ranch community.',
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
      'Competitive gap analysis against top 3 Lakewood Ranch Map Pack leaders',
    ],
  },
  {
    phase: 'Month 3',
    title: 'Corridor Landing Pages & Lakewood Ranch Content Silo Expansion',
    desc: 'We architect and publish high-converting, answer-first landing pages tailored to specific Lakewood Ranch business corridors and surrounding suburbs. Each page is engineered with distinct geographic schema, localized proof points, and targeted commercial copy.',
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
    desc: 'We build high-quality contextual backlinks from reputable Florida publications, industry associations, and regional business hubs. We optimize content structure to trigger direct citations across generative AI search platforms including ChatGPT, Perplexity, and Google AI Overviews.',
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
    question: 'How much does SEO cost in Lakewood Ranch FL?',
    answer:
      'Lakewood Ranch SEO services typically range from $1,250 to $3,500 per month depending on sector competitiveness, number of business locations, and technical site condition. FactoryJet operates on month-to-month agreements with no long-term contract lock-ins and starts with a comprehensive free technical audit.',
  },
  {
    category: 'pricing',
    question: 'Why do you offer month-to-month terms instead of 12-month contracts?',
    answer:
      'We believe client retention should be earned through measurable lead generation and ranking improvements rather than legal lock-ins. Month-to-month agreements keep our engineering team accountable to driving real business pipeline every 30 days.',
  },
  {
    category: 'pricing',
    question: 'What hidden fees or setup costs should Lakewood Ranch businesses watch out for?',
    answer:
      'Many traditional agencies bill extra onboarding fees, charge separately for basic Google Business Profile setup, or invoice additional hourly rates for technical code adjustments. With FactoryJet, your monthly rate covers complete technical execution, on-page optimization, content production, citation management, and conversion tracking with zero unexpected surcharges.',
  },
  {
    category: 'pricing',
    question: 'How do I compare quotes from different Lakewood Ranch SEO companies?',
    answer:
      'Compare deliverables, team seniority, and account ownership. Verify whether technical code fixes are included or billed extra, whether you will speak directly with an engineer or an account manager, and confirm that you retain 100% ownership of your content, code, and analytics data.',
  },
  {
    category: 'local',
    question: 'How do we rank our business across both Sarasota and Manatee counties?',
    answer:
      'Lakewood Ranch sits on the border of Sarasota and Manatee counties. We configure multi-location service area schema, build dedicated landing pages for both counties, and align directory citations to ensure you capture searches in Lakewood Ranch, Sarasota, and Bradenton simultaneously.',
  },
  {
    category: 'local',
    question: 'How do we get our Lakewood Ranch business into the Google 3-Pack Map results?',
    answer:
      'Winning the Google Map Pack requires an accurate primary category selection, complete service menus, consistent Name-Address-Phone (NAP) citations, steady customer review acquisition, and high domain authority from a fast, technically optimized website.',
  },
  {
    category: 'local',
    question: 'How important are Google reviews for Lakewood Ranch local rankings?',
    answer:
      'Google reviews are one of the strongest direct ranking factors for local search. We help your business implement frictionless post-service SMS and email review collection workflows that consistently generate verified 5-star customer feedback.',
  },
  {
    category: 'local',
    question: 'What is the difference between Google Map Pack SEO and organic website SEO?',
    answer:
      'Google Map Pack SEO focuses on the localized 3-Pack box displayed at the top of local search results, driven by your Google Business Profile, geographic proximity, citations, and reviews. Organic website SEO focuses on the traditional search listings beneath the map, driven by technical site speed, deep content silos, structured data, and high-authority backlinks. A successful campaign optimizes both layers in unison.',
  },
  {
    category: 'technical',
    question: 'What is technical SEO and why is it essential for Lakewood Ranch businesses?',
    answer:
      'Technical SEO optimizes site architecture, mobile responsiveness, server speed, Core Web Vitals, and structured JSON-LD schema markup. Without a strong technical foundation, Google and AI search engines cannot crawl or rank your content effectively.',
  },
  {
    category: 'technical',
    question: 'How do you optimize Lakewood Ranch websites for Google AI Overviews and ChatGPT search?',
    answer:
      'We format content using answer-first prose, authoritative factual data, structured schema entities, and clean semantic HTML. This enables AI search engines like Perplexity, ChatGPT Search, and Google AI Overviews to parse and quote your brand directly.',
  },
  {
    category: 'technical',
    question: 'Why does website loading speed directly impact Google search rankings?',
    answer:
      'Google utilizes Core Web Vitals as an official ranking metric. Fast-loading websites deliver superior user experiences, resulting in lower bounce rates and higher session engagement. If your site takes longer than two seconds to load on mobile networks, search algorithms demote your listings in favor of faster competitors.',
  },
  {
    category: 'technical',
    question: 'What structured data schema do you implement on local Lakewood Ranch websites?',
    answer:
      'We deploy comprehensive JSON-LD schemas tailored to your industry, including LocalBusiness, ProfessionalService, MedicalClinic, FinancialService, FAQPage, BreadcrumbList, and Service schemas. These structured data tags explicitly inform search bots about your geographic service boundaries, business hours, service offerings, and verified customer reviews.',
  },
  {
    category: 'timeline',
    question: 'How long does it take to see organic ranking improvements in Lakewood Ranch?',
    answer:
      'Initial technical fixes and low-competition neighborhood keyword wins typically show results within 30 to 60 days. Competitive high-volume head terms and stable top-3 Map Pack placements generally mature within 3 to 6 months of continuous optimization.',
  },
  {
    category: 'timeline',
    question: 'How do you track and report SEO return on investment (ROI)?',
    answer:
      'We track real commercial outcomes: phone call leads, form submissions, online appointment bookings, and organic revenue via custom Google Analytics 4 event tracking and Google Search Console data.',
  },
  {
    category: 'timeline',
    question: 'Will algorithm updates from Google disrupt our search rankings?',
    answer:
      'Google algorithm updates penalize websites that rely on manipulative shortcuts like artificial link networks and thin automated copy. Because our methodology is rooted in senior technical engineering, clean site architecture, authentic local citations, and deep original content, our client websites consistently gain ranking authority during core search updates.',
  },
  {
    category: 'timeline',
    question: 'Can SEO replace our paid Google Ads spend in Lakewood Ranch?',
    answer:
      'Yes, over time. While Google Ads provide immediate visibility for a continuous pay-per-click fee, organic SEO builds permanent digital equity. As your organic rankings and Map Pack positions solidify, most Lakewood Ranch clients systematically reduce their paid advertising budgets while maintaining a steady flow of qualified inbound leads.',
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
  name: 'FactoryJet - Lakewood Ranch SEO Company & Local Agency',
  image: 'https://factoryjet.com/og-default.png',
  url: CANONICAL,
  telephone: '+1-832-998-8422',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lakewood Ranch',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 27.4294,
    longitude: -82.3831,
  },
  areaServed: [
    { '@type': 'City', name: 'Lakewood Ranch' },
    { '@type': 'City', name: 'Sarasota' },
    { '@type': 'City', name: 'Bradenton' },
    { '@type': 'City', name: 'University Park' },
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
  name: 'Lakewood Ranch SEO Services & Local Search Optimization',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Local SEO, Technical SEO & Generative Engine Optimization',
  description:
    'Senior engineering-led local SEO, Google Map Pack rankings, technical Core Web Vitals optimization, and AI answer citations for Lakewood Ranch FL businesses.',
  areaServed: { '@type': 'State', name: 'Florida' },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Lakewood Ranch SEO Company & Local Agency FL | FactoryJet',
  description: 'No-contract local SEO, Google Map Pack rankings, and technical SEO for Lakewood Ranch FL businesses.',
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
    { '@type': 'ListItem', position: 2, name: 'Lakewood Ranch', item: CANONICAL },
    { '@type': 'ListItem', position: 3, name: 'SEO', item: CANONICAL },
  ],
};

export default function LakewoodRanchSeoPage() {
  return (
    <>
      <script id="lwr-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="lwr-local-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      <script id="lwr-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="lwr-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="lwr-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>Lakewood Ranch Local &amp; Technical SEO</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Lakewood Ranch SEO Company &amp; Local Search Marketing Agency
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  Win the Google 3-Pack Map results across Sarasota and Manatee counties, dominate high-intent local search terms, and earn citations across AI search engines. No long-term contracts. Talk directly with senior technical engineers.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Claim Free Lakewood Ranch SEO Audit" region="us" btnVariant="primary-dark" />
                  <a href="#lwr-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Local Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame (Edge-to-Edge) */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/lakewood-ranch/seo/lakewood-ranch-seo-hero.webp"
                  alt="Lakewood Ranch Florida local SEO technical optimization and Google Map Pack ranking strategy"
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
              <div className="rv-ticker-label">Local SEO &amp; Citation Footprint</div>
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
                  src="/images/us/lakewood-ranch/seo/lakewood-ranch-affluent-community.webp"
                  alt="FactoryJet senior SEO engineers auditing Lakewood Ranch Google Map Pack and local citations"
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
                  <span>Sarasota &amp; Manatee Reality</span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
                  Engineered for Results in Lakewood Ranch
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  With high-income demographics, rapid medical and commercial expansion, and competition spanning two counties, generic agency tactics fail. We combine sub-second Core Web Vitals speed optimization, Google Business Profile dominance, and localized corridor authority.
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
                  <ModalCTAButton label="Schedule Lakewood Ranch Strategy Call" region="us" btnVariant="primary-dark" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 04. LAKEWOOD RANCH BUSINESS CORRIDORS DIRECTORY ── */}
        <section id="lwr-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Geographic Precision</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored SEO for Lakewood Ranch Core Corridors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From Main Street wealth advisory to CORE biotech healthcare and Waterside dining:
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
                Specialized Search Strategies for Lakewood Ranch Leading Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every vertical in Lakewood Ranch demands distinct schema models, citation targets, and conversion architectures:
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
                Why Lakewood Ranch Businesses Switch to FactoryJet SEO
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
            <RegionalBenchmarkCard city="Lakewood Ranch" vertical="seo" />
          </div>
        </section>

        <div id="seo-architecture-blueprint">
          <LocalSeoArchitectureBlueprint
            badge="// LAKEWOOD RANCH LOCAL SEO & AI CITATION BLUEPRINT"
            title="Local SEO Architecture: From Map Pack to AI Citations"
            subtitle="Explore how your Google Business Profile, local review velocity, JSON-LD schema, and high-performance frontend synchronize to capture inbound leads."
            city="Lakewood Ranch"
            ctaLabel="Claim Free Lakewood Ranch SEO Audit"
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
                Our 6-Month Lakewood Ranch Domination Roadmap
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
                Evaluating Lakewood Ranch SEO Companies: What to Ask
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
        <LocalSeoOpportunityEstimator city="Lakewood Ranch" region="us" />

        <FAQ
          eyebrow="LAKEWOOD RANCH SEO INTELLIGENCE"
          headline="Frequently Asked Questions About SEO in Lakewood Ranch FL"
          lead="Direct, plain English answers to what Lakewood Ranch business owners and marketing leaders ask about local search rankings and lead generation:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 11. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <SeoCityLinksUS currentCity="lakewood-ranch" />
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
              <span>No-Contract Lakewood Ranch SEO</span>
            </div>
            
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Ready to Win the Google Map Pack in Lakewood Ranch?
            </h2>
            
            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Send us your website URL. We will perform a complete local search and technical audit of your site and top Sarasota and Manatee competitors, completely free.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Claim Your Free Lakewood Ranch SEO Audit" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
