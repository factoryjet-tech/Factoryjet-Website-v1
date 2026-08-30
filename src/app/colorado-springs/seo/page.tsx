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
const CANONICAL = 'https://factoryjet.com/colorado-springs/seo';

export const metadata: Metadata = {
  title: 'Best Colorado Springs SEO Company | Top Local Agency CO | FactoryJet',
  description:
    'Best Colorado Springs SEO company & local agency. Top Google Map Pack rankings, AI answer engine citations, and Core Web Vitals for El Paso County CO businesses.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Best Colorado Springs SEO Company | Top Local Agency CO | FactoryJet',
    description:
      'Premier Colorado Springs SEO company and agency. Top Google Map Pack rankings, AI search citations, and technical Core Web Vitals for Colorado Springs businesses.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Colorado Springs SEO Company & Agency' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Colorado Springs SEO Company | Top Local Agency CO | FactoryJet',
    description: 'Local and technical SEO in Colorado Springs CO. Win the Google Map Pack and AI search citations.',
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
  { num: '180+', title: 'Monthly Head Demand', desc: 'Verified monthly searches across Colorado Springs SEO company and agency queries.', icon: '📈' },
  { num: '500+', title: 'Client Deployments', desc: 'Websites and local profiles optimized across defense, medical, and services.', icon: '🏢' },
  { num: '100%', title: 'Direct Engineer Access', desc: 'Month-to-month terms with direct access to senior technical engineers.', icon: '⚡' },
];

const DISTRICTS = [
  {
    corridor: 'Downtown & Tejon Corridor',
    query: 'colorado springs business attorney',
    focus: 'Legal, Corporate Counsel & Professional Services',
    desc: 'Central commercial district anchored by the Pikes Peak Center and historic Tejon Street. Corporate buyers look for verified client testimonials and clear practice area expertise.',
  },
  {
    corridor: 'Briargate & Northgate',
    query: 'family dentist briargate colorado springs',
    focus: 'Healthcare, Dental & High-Income Family Services',
    desc: 'Rapidly expanding northern residential corridor along Powers Boulevard. High-converting practices capture patients through mobile speed, localized reviews, and Map Pack prominence.',
  },
  {
    corridor: 'Interquest & Tech Center',
    query: 'aerospace defense contractors colorado springs',
    focus: 'Defense Technology, Cybersecurity & Engineering',
    desc: 'Defense and aerospace technology corridor near the Air Force Academy. Answer-first content, technical certifications, and CMMC compliance signals capture prime defense procurement.',
  },
  {
    corridor: 'Garden of the Gods & Westside',
    query: 'outdoor adventure tours colorado springs',
    focus: 'Tourism, Outdoor Hospitality & Active Living',
    desc: 'High-volume tourist hub surrounding Manitou Springs and Old Colorado City. Mobile discoverability, seasonal review velocity, and rich visual schema drive bookings.',
  },
  {
    corridor: 'Falcon & Eastern Expansion Corridor',
    query: 'roofing contractor falcon co',
    focus: 'Home Services, Roofing & General Contractors',
    desc: 'Fast-growing eastern suburbs facing extreme Pikes Peak hail storms. Urgent homeowner search terms require localized Map Pack dominance and immediate click-to-call flows.',
  },
  {
    corridor: 'The Broadmoor & South Suburbs',
    query: 'wealth management broadmoor colorado springs',
    focus: 'Private Wealth, Luxury Real Estate & Med Spas',
    desc: 'Affluent southern corridor where high-net-worth clients research provider reputations and comprehensive credentials before booking consultations.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Defense Technology, Aerospace & Cybersecurity',
    headline: 'Capturing Prime Defense Procurement Around Space Command & Peterson SFB',
    description:
      'Home to U.S. Space Command, Peterson Space Force Base, and Schriever Space Force Base, Colorado Springs is America’s premier defense technology hub. We build authoritative capability silos, government entity schemas, and sub-second page performance that position engineering contractors on prime DoD procurement lists.',
    image: '/images/us/saas-website-design/signup-flow.webp',
    alt: 'Colorado Springs aerospace and defense contracting local SEO strategy',
    points: [
      'Structured entity schemas for GovernmentOrganization and DefenseContractor',
      'Answer-first technical capability sheets formatted for AI answer indexing',
      'Sub-second page speeds on Next.js and Cloudflare Edge infrastructure',
    ],
  },
  {
    sector: 'High-Ticket Home Services, Roofing & Storm Repair',
    headline: 'Dominating Severe Hail and Freeze-Thaw Emergency Searches',
    description:
      'Severe Rocky Mountain hail storms and drastic Pikes Peak weather shifts create urgent homeowner repair demands across El Paso County. We position your contracting business directly in the top 3 Google Map Pack with live call recording and neighborhood service pages from Briargate to Falcon.',
    image: '/images/us/services/roofing-seo/roof-detail.webp',
    alt: 'Colorado Springs roofing contractor and home services local SEO map pack',
    points: [
      'Dedicated neighborhood landing pages for Briargate, Northgate, Falcon, and Fountain',
      'Real-time call recording and conversion attribution integrated into Google Analytics 4',
      'Crawl-optimized review velocity systems to outperform multi-truck regional competitors',
    ],
  },
  {
    sector: 'Healthcare, Orthopedics & Sports Medicine',
    headline: 'Winning Patient Trust in America’s Olympic City',
    description:
      'As Olympic City USA, Colorado Springs has an active population demanding top-tier sports medicine, physical therapy, and orthodontic care. We build comprehensive medical schema, doctor profile hubs, and automated patient review systems that secure top organic rankings and AI overview citations.',
    image: '/images/services/healthcare-seo-process.webp',
    alt: 'Colorado Springs sports medicine and healthcare practice local SEO',
    points: [
      'Comprehensive schema for MedicalClinic, Physician, and SportsMedicine',
      'HIPAA-aware mobile conversion forms and instant click-to-call buttons',
      'Post-appointment SMS review workflows generating steady 5-star patient feedback',
    ],
  },
  {
    sector: 'Tourism, Outdoor Recreation & Hospitality',
    headline: 'Converting Millions of Annual Pikes Peak Visitors on Mobile',
    description:
      'From Garden of the Gods to Pikes Peak cog railway tours, millions of tourists visit Colorado Springs each year looking for immediate mobile recommendations. We optimize local entity signals, live event schemas, and mobile page performance to capture tourists searching on their phones.',
    image: '/images/us/san-diego-seo/taproom-local-search.webp',
    alt: 'Colorado Springs outdoor recreation tourism and hospitality local SEO',
    points: [
      'Sub-second mobile speed optimization capturing immediate on-the-go visitor searches',
      'Structured TouristAttraction and Event schema for rich Google search snippets',
      'Local citation synchronization across Apple Maps, TripAdvisor, and Google Maps',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Overcoming Map Pack Invisibility Across Pikes Peak Region Corridors',
    problem: 'Outdated business listings, missing category signals, and zero review velocity leave your business invisible on the second and third pages of Google Maps.',
    solution: 'We execute comprehensive Google Business Profile optimization, primary category audits, geotagged photo feeds, and automated review collection systems.',
  },
  {
    num: '02',
    title: 'Fixing Slow Legacy Code and Technical Debt That Destroys Rankings',
    problem: 'Bloated WordPress plugins, sluggish server hosting, and missing schema markup prevent search engine bots and AI assistants from indexing your pages.',
    solution: 'We engineer sub-second page loads, clean JSON-LD entity schema, and single-hop crawl architecture to earn top organic ranks and Google AI Overview citations.',
  },
  {
    num: '03',
    title: 'Ending Locked 12-Month Contracts with Zero Transparent Lead Attribution',
    problem: 'Traditional agencies lock Colorado Springs businesses into rigid annual retainers while delivering meaningless keyword ranking screenshots instead of qualified leads.',
    solution: 'FactoryJet operates on flexible month-to-month agreements. We track real phone calls, form completions, and qualified pipeline revenue with custom GA4 events.',
  },
  {
    num: '04',
    title: 'Capturing High-Value Geo-Targeted Commercial Keywords in El Paso County',
    problem: 'Relying solely on broad city-level terms causes businesses to miss high-intent searches across Briargate, Falcon, Fountain, and Monument.',
    solution: 'We build structured local service area landing pages and localized content silos that capture micro-corridor search volume throughout the Pikes Peak region.',
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
      'Competitive gap analysis against top 3 Colorado Springs Map Pack leaders',
    ],
  },
  {
    phase: 'Month 3',
    title: 'Corridor Landing Pages & Pikes Peak Content Silo Expansion',
    desc: 'We architect and publish high-converting, answer-first landing pages tailored to specific Colorado Springs business corridors and surrounding suburbs. Each page is engineered with distinct geographic schema, localized proof points, and targeted commercial copy.',
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
    desc: 'We build high-quality contextual backlinks from reputable Colorado publications, industry associations, and regional business hubs. We optimize content structure to trigger direct citations across generative AI search platforms including ChatGPT, Perplexity, and Google AI Overviews.',
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
    question: 'How much does SEO cost in Colorado Springs CO?',
    answer:
      'Colorado Springs SEO services typically range from $1,250 to $3,500 per month depending on sector competitiveness, number of business locations, and technical site condition. FactoryJet operates on month-to-month agreements with no long-term contract lock-ins and starts with a comprehensive free technical audit.',
  },
  {
    category: 'pricing',
    question: 'Why do you offer month-to-month terms instead of 12-month contracts?',
    answer:
      'We believe client retention should be earned through measurable lead generation and ranking improvements rather than legal lock-ins. Month-to-month agreements keep our engineering team accountable to driving real business pipeline every 30 days.',
  },
  {
    category: 'pricing',
    question: 'What hidden fees or setup costs should Colorado Springs businesses watch out for?',
    answer:
      'Many traditional agencies bill extra onboarding fees, charge separately for basic Google Business Profile setup, or invoice additional hourly rates for technical code adjustments. With FactoryJet, your monthly rate covers complete technical execution, on-page optimization, content production, citation management, and conversion tracking with zero unexpected surcharges.',
  },
  {
    category: 'pricing',
    question: 'How do I compare quotes from different Colorado Springs SEO companies?',
    answer:
      'Compare deliverables, team seniority, and account ownership. Verify whether technical code fixes are included or billed extra, whether you will speak directly with an engineer or an account manager, and confirm that you retain 100% ownership of your content, code, and analytics data.',
  },
  {
    category: 'local',
    question: 'How do we get our Colorado Springs business into the Google 3-Pack Map results?',
    answer:
      'Winning the Google Map Pack requires an accurate primary category selection, complete service menus, consistent Name-Address-Phone (NAP) citations, steady customer review acquisition, and high domain authority from a fast, technically optimized website.',
  },
  {
    category: 'local',
    question: 'Can you rank our business in surrounding towns like Monument, Falcon, and Fountain?',
    answer:
      'Yes. We architect dedicated geographic service area landing pages and localized schema markup targeting Greater El Paso County areas including Monument, Falcon, Fountain, Manitou Springs, and Woodland Park.',
  },
  {
    category: 'local',
    question: 'How important are Google reviews for Colorado Springs local rankings?',
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
    question: 'What is technical SEO and why is it essential for Colorado Springs businesses?',
    answer:
      'Technical SEO optimizes site architecture, mobile responsiveness, server speed, Core Web Vitals, and structured JSON-LD schema markup. Without a strong technical foundation, Google and AI search engines cannot crawl or rank your content effectively.',
  },
  {
    category: 'technical',
    question: 'How do you optimize Colorado Springs websites for Google AI Overviews and ChatGPT search?',
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
    question: 'What structured data schema do you implement on local Colorado Springs websites?',
    answer:
      'We deploy comprehensive JSON-LD schemas tailored to your industry, including LocalBusiness, ProfessionalService, MedicalClinic, GovernmentOrganization, FAQPage, BreadcrumbList, and Service schemas. These structured data tags explicitly inform search bots about your geographic service boundaries, business hours, service offerings, and verified customer reviews.',
  },
  {
    category: 'timeline',
    question: 'How long does it take to see organic ranking improvements in Colorado Springs?',
    answer:
      'Initial technical fixes and low-competition neighborhood keyword wins typically show results within 45 to 60 days. Competitive high-volume head terms and stable top-3 Map Pack placements generally mature within 3 to 6 months of continuous optimization.',
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
    question: 'Can SEO replace our paid Google Ads spend in Colorado Springs?',
    answer:
      'Yes, over time. While Google Ads provide immediate visibility for a continuous pay-per-click fee, organic SEO builds permanent digital equity. As your organic rankings and Map Pack positions solidify, most Colorado Springs clients systematically reduce their paid advertising budgets while maintaining a steady flow of qualified inbound leads.',
  },
  {
    category: 'local',
    question: 'How do you optimize for defense contractors and cybersecurity firms near Peterson SFB and Schriever?',
    answer:
      'Defense technology contractors, cybersecurity consultancies, and aerospace engineering providers in Colorado Springs operate under strict security and procurement standards. We build specialized B2B content hubs highlighting CMMC 2.0 readiness, ISO 9001/AS9100 certifications, cage codes, and NAICS codes with structured Organization and GovernmentPermit schemas.',
  },
  {
    category: 'local',
    question: 'How do you handle urgent storm hail damage search spikes for local roofing contractors?',
    answer:
      'Pikes Peak region weather brings sudden hail and wind storm events that trigger 10x surges in emergency roofing and storm restoration searches across Falcon, Briargate, and Fountain. We build pre-optimized storm response landing pages and automated Google Business Profile update workflows to capture peak hail-repair demand instantly.',
  },
  {
    category: 'technical',
    question: 'How does Google Gemini AI Overview citation indexing work for Olympic City businesses?',
    answer:
      'Generative AI search platforms analyze authoritative entity relationships, verified local business citations, and structured JSON-LD schemas. We engineer answer-first content blocks, transparent pricing ranges, and verified customer testimonials to ensure Google Gemini, ChatGPT, and Perplexity directly cite your company in conversational answers.',
  },
  {
    category: 'local',
    question: 'How do you capture military relocation and family service inquiries near Fort Carson?',
    answer:
      'With significant active-duty military and veteran populations across Fort Carson, Peterson Space Force Base, and the US Air Force Academy, we develop dedicated military relocation guides and VA-approved service pages optimized for service members transitioning to El Paso County.',
  },
  {
    category: 'technical',
    question: 'What is NAP citation synchronization across Colorado Springs and Front Range directories?',
    answer:
      'We establish and maintain 100% consistent business citations across major regional platforms—including the Colorado Springs Chamber & EDC, Better Business Bureau of Southern Colorado, Apple Maps, Bing Places, and Yelp—preventing map pin duplication and strengthening local 3-Pack authority.',
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
  name: 'FactoryJet - Colorado Springs SEO Company & Local Agency',
  image: 'https://factoryjet.com/og-default.png',
  url: CANONICAL,
  telephone: '+1-832-998-8422',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Colorado Springs',
    addressRegion: 'CO',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 38.8339,
    longitude: -104.8214,
  },
  areaServed: [
    { '@type': 'City', name: 'Colorado Springs' },
    { '@type': 'City', name: 'Briargate' },
    { '@type': 'City', name: 'Monument' },
    { '@type': 'City', name: 'Falcon' },
    { '@type': 'City', name: 'Fountain' },
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
  name: 'Colorado Springs SEO Services & Local Search Optimization',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Local SEO, Technical SEO & Generative Engine Optimization',
  description:
    'Senior engineering-led local SEO, Google Map Pack rankings, technical Core Web Vitals optimization, and AI answer citations for Colorado Springs businesses.',
  areaServed: { '@type': 'State', name: 'Colorado' },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Colorado Springs SEO Company & Local Agency | FactoryJet',
  description: 'No-contract local SEO, Google Map Pack rankings, and technical SEO for Colorado Springs CO businesses.',
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
    { '@type': 'ListItem', position: 2, name: 'Colorado Springs', item: CANONICAL },
    { '@type': 'ListItem', position: 3, name: 'SEO', item: CANONICAL },
  ],
};

export default function ColoradoSpringsSeoPage() {
  return (
    <>
      <script id="cos-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="cos-local-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      <script id="cos-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="cos-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="cos-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>Colorado Springs Local &amp; Technical SEO</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Colorado Springs SEO Company &amp; Local Search Marketing Agency
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  Win the Google 3-Pack Map results, dominate high-intent Pikes Peak region search terms, and earn citations across AI search engines. No long-term contracts. Talk directly with senior technical engineers.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Claim Free Colorado Springs SEO Audit" region="us" btnVariant="primary-dark" />
                  <a href="#cos-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Pikes Peak Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame (Edge-to-Edge) */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/colorado-springs/hero-colorado-springs.webp"
                  alt="Colorado Springs mountain landscape and local SEO technical optimization strategy"
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
              <div className="rv-ticker-label">Enterprise Colorado Springs SEO &amp; Data Stack</div>
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
                  src="/images/us/colorado-springs/seo/team.webp"
                  alt="FactoryJet senior SEO engineers auditing Colorado Springs Google Map Pack and local citations"
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
                  <span>Pikes Peak Market Reality</span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
                  Engineered for Results in Colorado Springs
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  With defense expansion, booming residential corridors in Briargate, and rapid commercial growth in El Paso County, standard generic agency tactics fail. We combine sub-second Core Web Vitals speed optimization, Google Business Profile dominance, and localized corridor authority.
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
                  <ModalCTAButton label="Schedule Colorado Springs Strategy Call" region="us" btnVariant="primary-dark" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 04. COLORADO SPRINGS BUSINESS CORRIDORS DIRECTORY ── */}
        <section id="cos-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Geographic Precision</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored SEO for Colorado Springs Core Corridors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From Downtown legal practices to Interquest defense tech and Briargate dental clinics:
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
                Specialized Search Strategies for Colorado Springs Leading Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every vertical in Colorado Springs demands distinct schema models, citation targets, and conversion architectures:
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
                Why Colorado Springs Businesses Switch to FactoryJet SEO
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
            <RegionalBenchmarkCard city="Colorado Springs" vertical="seo" />
          </div>
        </section>

        <div id="seo-architecture-blueprint">
          <LocalSeoArchitectureBlueprint
            badge="// COLORADO SPRINGS LOCAL SEO & AI CITATION BLUEPRINT"
            title="Local SEO Architecture: From Map Pack to AI Citations"
            subtitle="Explore how your Google Business Profile, local review velocity, JSON-LD schema, and high-performance frontend synchronize to capture inbound leads."
            city="Colorado Springs"
            ctaLabel="Claim Free Colorado Springs SEO Audit"
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
                Our 6-Month Colorado Springs Domination Roadmap
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
                Evaluating Colorado Springs SEO Companies: What to Ask
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
        <LocalSeoOpportunityEstimator city="Colorado Springs" region="us" />

        <FAQ
          eyebrow="COLORADO SPRINGS SEO INTELLIGENCE"
          headline="Frequently Asked Questions About SEO in Colorado Springs CO"
          lead="Direct, plain English answers to what Colorado Springs business owners and marketing leaders ask about local search rankings and lead generation:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 11. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <SeoCityLinksUS currentCity="colorado-springs" />
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
              <span>No-Contract Colorado Springs SEO</span>
            </div>
            
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Ready to Win the Google Map Pack in Colorado Springs?
            </h2>
            
            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Send us your website URL. We will perform a complete local search and technical audit of your site and top Colorado Springs competitors, completely free.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Claim Your Free Colorado Springs SEO Audit" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
