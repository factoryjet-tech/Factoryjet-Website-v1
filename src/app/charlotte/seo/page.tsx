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
import SeoCityLinksUS from '@/components/v2/SeoCityLinksUS';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-10-21';
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
    title: 'Three of the top 10 are list pages',
    problem: 'When we searched "charlotte seo company" from Charlotte on 21 Oct 2026, three of the top 10 organic results were list pages: Built In Charlotte, Clutch and The Manifest. A LinkedIn page took a fourth spot. Only six slots went to business websites.',
    solution: 'A Charlotte buyer often meets you on a list before your own site. We fix your Clutch and directory profiles so the facts match your website, then build service pages that answer the questions those lists leave open.',
  },
  {
    num: '02',
    title: 'Map pack trust is thin',
    problem: 'The three map pack businesses on that search had 4.2 stars from 15 reviews, 5 stars from 5 reviews, and no rating at all. That was 20 reviews in total across the three businesses Google chose to show on 21 Oct 2026.',
    solution: 'A small, steady review count can move you in a market this thin. We set up a plain request routine for your customers after each job and complete every field of your Google Business Profile.',
  },
  {
    num: '03',
    title: 'Agency wording gets the searches',
    problem: '"Seo agency charlotte", "seo company charlotte" and "charlotte seo company" each show about 720 US searches a month (21 Oct 2026). "Local seo charlotte" shows about 30, yet Google Ads suggests about $31.87 a click for it.',
    solution: 'We map each of your pages to the exact phrase your buyers type, using fresh volume data for your trade. Small phrases with high ad bids get their own page, because advertisers pay for those clicks for a reason.',
  },
  {
    num: '04',
    title: 'No AI Overview, yet',
    problem: 'Google showed no AI Overview for "charlotte seo company" on 21 Oct 2026. The People Also Ask box did ask "What is replacing SEO?" and "Is SEO still relevant in 2026?", so searchers are already wondering about AI answers.',
    solution: 'We write answer-first pages with schema (code that labels your facts for machines), so ChatGPT, Perplexity and Google\'s AI features have a clean, quotable source when they do answer Charlotte questions.',
  },
];

const ROADMAP_STEPS = [
  {
    phase: 'Month 1',
    title: 'Measure Charlotte demand for your trade',
    desc: 'We pull search volumes and live Charlotte results for your service, whether that is roofing, auto repair or wealth advice, and record who holds the map pack today.',
    deliverables: ['Volume sheet for your Charlotte phrases', 'Map pack review counts, dated', 'List of directories ranking for you'],
  },
  {
    phase: 'Month 2',
    title: 'Fix the profiles and the site',
    desc: 'We clean up your Google Business Profile, Clutch listing and Bing Places entry, then fix crawl errors, titles and schema on your website.',
    deliverables: ['Matching name, address, phone everywhere', 'Schema on service and location pages', 'Fixed list of technical errors'],
  },
  {
    phase: 'Month 3',
    title: 'Write pages for Mecklenburg and beyond',
    desc: 'We write a page for each real service area you cover, such as Matthews, Huntersville or Fort Mill across the South Carolina line, with local proof on each.',
    deliverables: ['One page per suburb you serve', 'Answer-first FAQ on each page', 'Review request routine for customers'],
  },
  {
    phase: 'Months 4 to 6',
    title: 'Report and adjust through month 6',
    desc: 'From month 4 to month 6 we rerun the same Charlotte searches each month, compare rankings and map pack position, and quote any next change for your approval.',
    deliverables: ['Monthly report against the first baseline', 'AI answer checks on buyer questions', 'Written quote for each next change'],
  },
];

const EVALUATION_CRITERIA = [
  {
    label: 'Which Charlotte searches did you check for us?',
    factoryjet: 'We show dated search volumes, such as about 720 a month for "seo company charlotte" on 21 Oct 2026, plus the live results page for your own service.',
    traditional: 'A generic keyword list with no dates, no volumes and nothing about your trade or your part of town.',
  },
  {
    label: 'What will you do about Clutch and Built In?',
    factoryjet: 'Three of the top 10 for "charlotte seo company" were list pages on 21 Oct 2026. We fix your profiles on the lists that rank for your trade.',
    traditional: 'Lists are ignored entirely, or the firm sells paid directory placements without showing they rank for anything.',
  },
  {
    label: 'Who owns the work if we stop?',
    factoryjet: 'You do. Your profile, pages, schema and content stay yours, there is no long-term contract, and each change is quoted and approved first.',
    traditional: 'Pages hosted on the agency\'s system, a 12-month lock-in, and a profile you cannot log in to.',
  },
  {
    label: 'How do you handle AI answers?',
    factoryjet: 'We write answer-first pages with schema so AI tools can quote you, and we test buyer questions in ChatGPT and Perplexity each month.',
    traditional: 'A promise to get you into AI answers with no test method, or a claim that SEO no longer matters.',
  },
];

const FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Cost and contracts' },
  { key: 'local', label: 'Charlotte and nearby towns' },
  { key: 'results', label: 'Rankings and results' },
  { key: 'ai', label: 'AI search and AEO' },
  { key: 'process', label: 'Choosing a Charlotte SEO firm' },
];

const FAQ_ITEMS = [
  {
    category: 'pricing',
    question: 'How much should I expect to pay for SEO in Charlotte?',
    answer: 'Most small businesses pay about $1,500 to $3,500 a month for SEO, according to WebFX\'s pricing page updated Sep 2026. Local SEO retainers run about $500 to $3,000 a month, and one-time local projects $500 to $5,000, also per WebFX. An Ahrefs survey of 439 providers found an average of $2,917 a month. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'pricing',
    question: 'Why do Charlotte SEO ads cost so much per click?',
    answer: 'Because many agencies bid on the same few buyers. On 21 Oct 2026 Google Ads suggested about $31.87 a click for "local seo charlotte" and about $10.22 a click for "seo charlotte". The first phrase gets only about 30 US searches a month. When a click costs that much, a page that ranks on its own for free is worth building.',
  },
  {
    category: 'pricing',
    question: 'How much does a one-time SEO audit cost?',
    answer: 'Most businesses pay $101 to $750 for a one-time SEO audit, according to WebFX, which found 43% of businesses fall in that range. An audit lists what is broken on your site and your Google Business Profile. FactoryJet quotes a fixed price in writing after a short scoping call, and the audit file is yours to keep.',
  },
  {
    category: 'pricing',
    question: 'Do I have to sign a long contract with a Charlotte SEO company?',
    answer: 'No. FactoryJet works with no long-term contract. Each change is quoted in writing and you approve it before work starts. If you stop, your Google Business Profile, pages, schema and content stay yours. Ask any firm you are comparing whether you keep the login to your own profile, because some agencies hold it.',
  },
  {
    category: 'local',
    question: 'How many people search for an SEO company in Charlotte?',
    answer: 'About 720 people a month search "charlotte seo company" in the US, and the same for "seo agency charlotte" and "seo company charlotte" (Google Ads data, 21 Oct 2026). Google groups close variants, so these overlap. "Seo charlotte" shows about 260, "charlotte seo" about 170, and "charlotte seo services" about 110 a month.',
  },
  {
    category: 'local',
    question: 'Can you help us show up in Matthews and Fort Mill, not just Charlotte?',
    answer: 'Yes, if you serve those towns. Google ranks map listings partly on distance, so a Charlotte address alone rarely wins in Matthews or Fort Mill. We write one page per town you serve, with real jobs and details from that town. Fort Mill sits in South Carolina, so that page names York County, not Mecklenburg.',
  },
  {
    category: 'local',
    question: 'Does SEO work differently across Mecklenburg County?',
    answer: 'Yes. The map results change with where the searcher stands. Someone in Huntersville and someone in Pineville can see three different map pack businesses for the same search. We check results from more than one point in the county, then pick the towns where you can compete. Each town you serve gets its own page.',
  },
  {
    category: 'local',
    question: 'Do you work with contractors and home service businesses in Charlotte?',
    answer: 'Yes. Contractor and home service searches lean hard on the Google map pack, and reviews decide a lot there. On the "charlotte seo company" search we checked on 21 Oct 2026, the three map businesses had only 20 reviews between them. We set up a review request routine and pages for each service and town.',
  },
  {
    category: 'local',
    question: 'Can you do SEO for a car dealer or auto repair shop in Charlotte?',
    answer: 'Yes. Auto businesses need a complete Google Business Profile, a page per service such as brake repair or used inventory, and steady reviews. We also add schema, code that tells Google your hours, address and services in a format it reads directly. Each new page or change is quoted and approved before we start.',
  },
  {
    category: 'local',
    question: 'Do you also work outside Charlotte, like Wilmington or the rest of North Carolina?',
    answer: 'Yes. The work is the same in Wilmington, Raleigh or anywhere in North Carolina: measure local searches, fix your profiles, then write pages for the towns you serve. We work remotely with US clients and schedule calls in US business hours, so location does not change the process.',
  },
  {
    category: 'results',
    question: 'Why do Clutch and Built In Charlotte show up when I search for SEO companies?',
    answer: 'Google treats "charlotte seo company" as a comparison search. On 21 Oct 2026, three of the top 10 results were list pages: Built In Charlotte, Clutch and The Manifest. A LinkedIn page held one more spot. So buyers often see a list before any agency site. A complete, accurate profile on those lists matters.',
  },
  {
    category: 'results',
    question: 'How many reviews do I need to get into the Charlotte map pack?',
    answer: 'There is no fixed number, and the bar can be low. On 21 Oct 2026 the map pack for "charlotte seo company" showed 4.2 stars from 15 reviews, 5 stars from 5 reviews, and one business with no rating. Distance and how well your profile matches the search count too. Steady new reviews help.',
  },
  {
    category: 'results',
    question: 'How long does SEO take to work in Charlotte?',
    answer: 'Profile fixes can show up in map results within weeks. New pages usually take a few months to rank, depending on how many strong sites already hold your phrase. A thin market moves faster. We rerun the same Charlotte searches each month and report the changes, so you can see progress against the first baseline.',
  },
  {
    category: 'results',
    question: 'Is SEO still relevant in 2026?',
    answer: 'Yes. Google still sends most search traffic, and "charlotte seo company" gets about 720 US searches a month (21 Oct 2026). What has changed is where answers appear. AI tools now quote web pages, so clear, factual pages win in both places. This question showed up in Google\'s own People Also Ask box.',
  },
  {
    category: 'ai',
    question: 'What is answer engine optimization, and does a Charlotte business need it?',
    answer: 'Answer engine optimization (AEO) means shaping your pages so AI tools such as ChatGPT, Perplexity and Google\'s AI features can quote them. That means direct answers near the top, clear facts and schema. A Charlotte business needs it if buyers ask AI tools for recommendations. AEO builds on normal SEO work and does not replace it.',
  },
  {
    category: 'ai',
    question: 'Does Google show AI answers for Charlotte SEO searches?',
    answer: 'Not on the search we checked. Google showed no AI Overview for "charlotte seo company" from Charlotte on 21 Oct 2026. An AI Overview is the summary box Google puts above normal results. They come and go by search and by day, so we check your own phrases each month and structure pages so they can be quoted.',
  },
  {
    category: 'ai',
    question: 'What is replacing SEO?',
    answer: 'Nothing has replaced it. AI search tools sit on top of it. ChatGPT and Perplexity pull answers from web pages that already rank or are easy to read. This question appeared in Google\'s People Also Ask box for "charlotte seo company" on 21 Oct 2026. The fix is the same: clear pages, real facts and clean schema.',
  },
  {
    category: 'ai',
    question: 'How much does AI SEO or GEO cost?',
    answer: 'AI SEO, also called GEO (generative engine optimization), costs about $1,500 to $5,000 a month for small businesses, according to WebFX in Sep 2026. It covers answer-first pages, schema and checking how AI tools describe you. FactoryJet quotes a fixed price in writing after a short scoping call. We cannot promise any AI tool will name you.',
  },
  {
    category: 'process',
    question: 'What does an SEO company actually do?',
    answer: 'An SEO company fixes, writes and reports. We fix your Google Business Profile and website errors. We write pages for each service and town you serve. We set up review requests and add schema so search engines read your facts. Each month we report what moved. This question topped Google\'s People Also Ask box for Charlotte.',
  },
  {
    category: 'process',
    question: 'SEO firm, SEO expert or SEO agency: what is the difference?',
    answer: 'Mostly the label. Charlotte searchers type all three, and "seo agency charlotte" alone shows about 720 US searches a month (21 Oct 2026). A solo expert may handle everything personally. A firm or agency splits work across a few people. Ask who does the work on your account and who answers your emails.',
  },
  {
    category: 'process',
    question: 'How do I compare Charlotte SEO companies on Clutch?',
    answer: 'Read the reviews for clients like you, not the star average. Clutch\'s Charlotte SEO list ranked sixth on Google for "charlotte seo company" on 21 Oct 2026. Then ask each firm three things: which Charlotte searches they checked for you, who owns the work, and how changes are approved. Written answers make comparison easy.',
  },
  {
    category: 'process',
    question: 'Who will I talk to if I hire FactoryJet for Charlotte SEO?',
    answer: 'Founder Bhavesh Barot replies to messages within 24 hours. FactoryJet was founded in 2014 and has worked with 500+ businesses, with 97% on-time delivery. We work remotely with US clients and schedule calls in US business hours. We also do white-label SEO work for agencies. Every change is quoted and approved before work begins.',
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
                On 21 Oct 2026 we pulled Google's results and search volumes for Charlotte SEO searches, and these four findings shape how we work for clients here.
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
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.08em' }}>What we saw in Charlotte search, 21 Oct 2026:</span>
                      <p style={{ fontSize: '13.5px', color: '#494852', margin: '4px 0 0', lineHeight: 1.5 }}>{p.problem}</p>
                    </div>
                    <div>
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#FF5622', letterSpacing: '0.08em' }}>What we do about it:</span>
                      <p style={{ fontSize: '13.5px', color: '#141414', fontWeight: 600, margin: '4px 0 0', lineHeight: 1.5 }}>{p.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 07. ARCHITECTURE BLUEPRINT (AUTO-ROTATING TABS) ── */}

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
                Over six months, each step below follows the searches, suburbs and trades that showed up in our Charlotte data on 21 Oct 2026.
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
                Ask any Charlotte SEO firm these four questions before you sign, and compare the answers side by side.
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
