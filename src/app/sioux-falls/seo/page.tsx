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
const CANONICAL = 'https://factoryjet.com/sioux-falls/seo';

export const metadata: Metadata = {
  title: 'SEO Agency for Sioux Falls, SD Businesses | FactoryJet',
  description:
    'SEO for Sioux Falls, SD businesses, reported in calls and form submissions. Google Business Profile and service page work. Month-to-month terms.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Agency for Sioux Falls, SD Businesses | FactoryJet',
    description:
      'SEO for Sioux Falls, SD businesses, reported in calls and form submissions. Google Business Profile and service page work. Month-to-month terms.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'SEO for Sioux Falls, SD businesses by FactoryJet' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency for Sioux Falls, SD Businesses | FactoryJet',
    description: 'SEO for Sioux Falls, SD businesses, reported in calls and form submissions. Google Business Profile and service page work. Month-to-month terms.',
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
  {
    num: 'Maps',
    title: 'Business Profile Review',
    desc: 'Category, services and service area compared with the Sioux Falls map pack for your own trade.',
    icon: '📍',
  },
  {
    num: 'Site',
    title: 'Technical SEO Review',
    desc: 'Pages Google skips, slow mobile loads and broken redirects, each listed with its URL.',
    icon: '📈',
  },
  {
    num: 'Pages',
    title: 'Service Content Review',
    desc: 'One clear page per service, written to answer what buyers ask Google and ChatGPT.',
    icon: '🏢',
  },
  {
    num: 'Leads',
    title: 'Inquiry Tracking',
    desc: 'Calls and form fills from search and AI tools, counted before rankings.',
    icon: '⚡',
  },
];

const DISTRICTS = [
  {
    corridor: 'Downtown & Phillips Avenue',
    focus: 'Legal, Wealth Management & Corporate Trust',
    desc: 'Historic commercial center in Minnehaha County. Corporate decision-makers evaluate technical credentials, page speed, and practice area authority before initiating contact.',
  },
  {
    corridor: '57th & Louise Medical Corridor',
    focus: 'Healthcare, Dental & Private Practices',
    desc: 'Anchored by the massive regional footprints of Sanford Health and Avera Health. Independent practices capture high-intent patient queries through verified reviews and medical schema.',
  },
  {
    corridor: 'I-29 & I-90 Logistics Crossroads',
    focus: 'AgTech, Food Processing & Industrial Logistics',
    desc: 'Major Upper Midwest transportation nexus. Technical SEO and structured product specifications put regional equipment suppliers on national procurement shortlists.',
  },
  {
    corridor: 'Empire Mall & 41st Street',
    focus: 'Retail, Hospitality & High-Traffic Dining',
    desc: 'High-density retail and dining district along 41st Street. Mobile discoverability, live menu schema, and steady review acquisition drive high foot traffic.',
  },
  {
    corridor: 'East 10th & Dawley Farm Village',
    focus: 'Suburban Healthcare, Retail & Home Services',
    desc: 'Rapidly growing eastern residential communities. Localized Map Pack ranking signals and neighborhood landing pages capture family service demand.',
  },
  {
    corridor: 'Northern Industrial & Airport Corridor',
    focus: 'Commercial Contracting, Roofing & HVAC',
    desc: 'Contracting hub servicing Minnehaha and Lincoln counties. Extreme weather shifts require urgent emergency search prominence and automated review collection.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Regional Healthcare Systems & Specialty Clinics',
    headline: 'Converting Patients in the Upper Midwest’s Medical Hub',
    description:
      'Sioux Falls is the premier medical referral center for South Dakota, Iowa, and Minnesota. We build exhaustive medical schema, physician profile directories, and HIPAA-aware conversion flows that help independent practices appear in Google Maps results and AI answer engines.',
    image: '/images/services/healthcare-seo.webp',
    alt: 'A clinician working on a laptop that shows charts in a clinic office',
    points: [
      'Comprehensive schema for Physician, MedicalClinic, and MedicalSpecialty',
      'HIPAA-aware appointment scheduling and instant click-to-call mobile buttons',
      'Post-visit SMS review request workflows',
    ],
  },
  {
    sector: 'Financial Services, Trust Administration & Commercial Lending',
    headline: 'Projecting Institutional Trust in America’s Banking Capital',
    description:
      'South Dakota’s favorable trust laws have made Sioux Falls a national center for wealth management and commercial banking. We engineer sub-second page performance, verified financial entity schemas, and deep practice area content that converts sophisticated corporate clients.',
    image: '/images/us/sioux-falls/seo/card-banker-client-handshake.webp',
    alt: 'A loan officer in a grey suit shaking hands with a man in a tweed blazer and an orange necktie beside a desk in a bright office',
    points: [
      'Structured JSON-LD schema for FinancialService, AccountingService, and WealthManagement',
      'High-authority regional media citations and verified NAP directory synchronization',
      'Conversion-optimized lead capture flows designed for high-net-worth consultations',
    ],
  },
  {
    sector: 'AgTech, Precision Equipment & Food Processing',
    headline: 'Winning National Supplier Procurement Across the Upper Midwest',
    description:
      'From agricultural machinery fabricators to bio-processing suppliers along I-90 and I-29, regional B2B buyers search technical specifications online before issuing an RFQ. We format technical capability matrices and spec sheets to rank for commercial buyer queries.',
    image: '/images/us/manufacturing-website-design/shop-floor.webp',
    alt: 'A machinist in safety glasses loading a metal part into a CNC lathe beside a tablet showing the part',
    points: [
      'Answer-first technical specifications formatted for generative AI search crawlers',
      'Sub-second page load speeds on Next.js and Cloudflare Edge infrastructure',
      'Structured capability matrices and downloadable technical PDF spec indexing',
    ],
  },
  {
    sector: 'High-Ticket Home Services, Roofing & Mechanical Contractors',
    headline: 'Capturing Emergency Search Demand Across Extreme Plains Weather',
    description:
      'Severe summer Great Plains hail storms and harsh sub-zero winter freeze-thaw cycles create urgent home repair needs across Minnehaha and Lincoln counties. We position your contracting business directly in the Google Map Pack 3-Pack with live call recording and neighborhood service pages.',
    image: '/images/us/services/roofing-seo/search-visibility.webp',
    alt: 'A minimal street map illustration with three terracotta location pins',
    points: [
      'Neighborhood landing pages for Downtown, Dawley Farm, Brandon, and Harrisburg',
      'Live call recording and conversion attribution integrated into Google Analytics 4',
      'Crawl-optimized review velocity systems to outperform multi-truck competitors',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Directories take four of the top ten spots',
    problem: 'On 21 Oct 2026 we searched "sioux falls seo company" from a Sioux Falls location. Four results were directories: The Manifest, Clutch, DesignRush and the Sioux Falls Area Chamber of Commerce member directory. A fifth was an agency\'s Facebook page.',
    solution: 'Buyers in Sioux Falls compare names on those pages before they call. We check which directories rank for your trade here and whether your listing on each is complete and matches your Business Profile.',
  },
  {
    num: '02',
    title: 'The Chamber directory ranks on page one',
    problem: 'The Chamber\'s directory page for marketing and advertising agencies was the tenth organic result, ahead of most agency websites.',
    solution: 'Local member directories carry weight in a city this size. If you belong to the Chamber or a trade group, a full listing with your website, phone and services is one of the cheapest fixes on the list.',
  },
  {
    num: '03',
    title: 'Three agency results were multi-city pages',
    problem: 'Of the five agency websites in the top ten, three were Sioux Falls pages from agencies that publish one page per city. The three map pack firms had 35, 64 and 39 Google reviews.',
    solution: 'Few pages are written about Sioux Falls in particular. A service page that names Brandon, Harrisburg or Tea jobs and quotes local reviews has little real competition, and a steady review routine closes the map pack gap.',
  },
  {
    num: '04',
    title: 'Sioux Falls searches ask about ChatGPT',
    problem: 'Search Console for this page shows searches like "chatgpt optimization sioux falls sd", "answer engine optimization sioux falls sd" and "who helps businesses show up in chatgpt in sioux falls, sd?"',
    solution: 'Owners here want to know what AI tools say about them. We ask ChatGPT, Perplexity and Google your buyers\' questions before we start, save the answers, and check again each month.',
  },
];

const ROADMAP_STEPS = [
  {
    phase: 'Month 1',
    title: 'Search and AI baseline',
    desc: 'We record who ranks for your terms in Sioux Falls and what ChatGPT and Perplexity say when asked about your trade here.',
    deliverables: ['Baseline of rankings and AI answers', 'Fix list in order of impact'],
  },
  {
    phase: 'Month 2',
    title: 'Profile and directories',
    desc: 'We fix your Business Profile and match your details on the directories that rank, including the Chamber if you are a member.',
    deliverables: ['Corrected profile and listings', 'Call and form tracking'],
  },
  {
    phase: 'Month 3',
    title: 'Answer-first service pages',
    desc: 'We rewrite service pages to answer buyer questions in the first lines and add pages for Brandon, Harrisburg or Tea if you serve them.',
    deliverables: ['Service pages with matching FAQ schema', 'Town pages with local jobs'],
  },
  {
    phase: 'Months 4 to 6',
    title: 'Reviews and monthly AI checks',
    desc: 'We run a review routine and repeat the AI questions every month to see whether the answers now name you.',
    deliverables: ['Review request routine', 'Monthly note: calls, forms, rankings, AI answers'],
  },
];

const EVALUATION_CRITERIA = [
  {
    label: 'AI Baseline',
    factoryjet: 'Yes. We save ChatGPT and Perplexity answers to your buyers\' questions before any work starts.',
    traditional: 'Ask: "Will you show me what AI tools say about us today, before you change anything?"',
  },
  {
    label: 'AI Overviews',
    factoryjet: 'Google says no special optimization is needed for AI Overviews. We apply sound SEO and answer-first pages.',
    traditional: 'Ask: "What do you do for AI Overviews that differs from normal SEO?"',
  },
  {
    label: 'Directories',
    factoryjet: 'The ones that rank for your trade here, including the Chamber directory if you are a member.',
    traditional: 'Ask: "Which Sioux Falls directories will you check, and why those?"',
  },
  {
    label: 'Guarantees',
    factoryjet: 'None. Google advises finding someone else if an SEO guarantees first place.',
    traditional: 'Ask: "Do you guarantee a ranking or an AI mention?"',
  },
  {
    label: 'Ownership',
    factoryjet: 'Month to month. Profile, analytics and site stay in your accounts.',
    traditional: 'Ask: "What do we keep if we stop working with you?"',
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
    question: 'How much does an SEO company cost in Sioux Falls?',
    answer: 'Clutch\'s SEO pricing page, updated September 2026, lists US hourly rates of $100 to $149. Monthly plans depend on how many hours your trade needs. A Sioux Falls pest control firm with one service area needs fewer than an ecommerce store selling nationwide. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'pricing',
    question: 'What does ChatGPT or AI search optimization cost?',
    answer: 'WebFX\'s 2026 guide puts generative engine optimization at about $1,500 to $5,000 a month for small businesses. Much of that work overlaps with good SEO, since AI tools read the same websites, profiles and reviews. Ask any firm which parts of the price are new work and which are SEO under a new name.',
  },
  {
    category: 'technical',
    question: 'Who helps businesses show up in ChatGPT in Sioux Falls?',
    answer: 'Any firm can claim it, so test it yourself. Ask ChatGPT and Perplexity "who is the best [your trade] in Sioux Falls" and note who they name. Then ask the firm what it would change so you appear, and how it will check. We save those answers before we start and repeat them monthly.',
  },
  {
    category: 'technical',
    question: 'What is generative engine optimization (GEO)?',
    answer: 'GEO means shaping your pages so AI tools are more likely to use and cite them. The term comes from a 2024 study by researchers at Princeton and other institutions, which found that adding sources, quotes and statistics to a page made AI engines more likely to show it. Keyword stuffing did not help.',
  },
  {
    category: 'technical',
    question: 'Is AI Overview optimization different from regular SEO?',
    answer: 'Less than people think. Google\'s own guide to AI features says there are no extra requirements to appear in AI Overviews and no special optimization needed. The same basics apply: pages Google can read, answers near the top, accurate facts. Be wary of anyone selling a separate secret method.',
  },
  {
    category: 'technical',
    question: 'Can you do ecommerce SEO for a Sioux Falls online store?',
    answer: 'Yes. Store SEO is national, not local, so the map pack hardly matters. The work is category pages that match how people search, product pages with real descriptions, clean filters that do not create thousands of duplicate pages, and fast mobile loading. FactoryJet is a registered Shopify Partner and also builds on other platforms.',
  },
  {
    category: 'local',
    question: 'Who is the best Google Business Profile optimization service in Sioux Falls?',
    answer: 'Judge the work, not the claim. Good profile work sets the right primary category, lists every service, adds real photos, sets the service area, matches your details on other sites and builds reviews. Ask a firm to show a profile it fixed and what changed in calls after. Then compare.',
  },
  {
    category: 'local',
    question: 'Should I list my business with the Sioux Falls Area Chamber of Commerce?',
    answer: 'If you are a member, fill in the listing fully. When we searched "sioux falls seo company" on 21 Oct 2026, the Chamber\'s directory ranked tenth, ahead of most agency sites. A complete listing with your website and phone is a trusted local mention. Join for the business reasons, not only for SEO.',
  },
  {
    category: 'local',
    question: 'Do you serve businesses in Brandon, Harrisburg and Tea?',
    answer: 'Yes, if you take work there. Brandon sits in Minnehaha County, and Harrisburg and Tea in Lincoln County. Google weighs distance from the searcher, so a Tea shop shows on the map in Tea first. Pages for each town you serve, with jobs and reviews from that town, help in the regular results.',
  },
  {
    category: 'local',
    question: 'Is Sioux City the same SEO market as Sioux Falls?',
    answer: 'No. Sioux City is a separate city in Iowa with its own map results. A Sioux Falls profile will not show in Sioux City map searches. If you serve both, give Sioux City its own page with local jobs and reviews, and list it in your service area only if you take jobs there.',
  },
  {
    category: 'local',
    question: 'How does SEO work for Sioux Falls law firms?',
    answer: 'Give each practice area its own page, name the attorneys and their bar admissions, and answer the questions clients ask before a first call. Follow South Dakota\'s rules on lawyer advertising for any reviews or results you show. Keep the profile category matched to your main practice, not a general one.',
  },
  {
    category: 'timeline',
    question: 'Is SEO dead or evolving in 2026?',
    answer: 'Evolving. On 21 Oct 2026 Google showed no AI Overview for "sioux falls seo company", just a map pack and ten results. Buyers also ask ChatGPT, which builds answers from the same websites and listings. The work is the same foundation, checked in more places.',
  },
  {
    category: 'timeline',
    question: 'How soon will my Sioux Falls business show in AI answers?',
    answer: 'There is no set time. Each AI tool refreshes what it knows on its own schedule, and some answer from live search results. Fixes to your profile and listings can show up in Google within weeks. We repeat the same questions every month so you see the change, or the lack of one.',
  },
  {
    category: 'timeline',
    question: 'How do Sioux Falls home service companies get more calls from search?',
    answer: 'Set up a service-area profile with the street address hidden, list every service, and keep hours accurate through winter, when furnace and snow calls spike. Give each service its own page. Ask every customer for a review that names the job. Track which calls come from the profile so you know what works.',
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
  name: 'Sioux Falls SEO Services & Local Search Optimization',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  serviceType: 'Local SEO, Technical SEO & Generative Engine Optimization',
  description:
    'SEO for Sioux Falls, SD businesses, reported in calls and form submissions. Google Business Profile and service page work. Month-to-month terms.',
  areaServed: { '@type': 'State', name: 'South Dakota' },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'SEO Agency for Sioux Falls, SD Businesses | FactoryJet',
  description: 'SEO for Sioux Falls, SD businesses, reported in calls and form submissions. Google Business Profile and service page work. Month-to-month terms.',
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
    { '@type': 'ListItem', position: 2, name: 'Local SEO', item: 'https://factoryjet.com/services/local-seo' },
    { '@type': 'ListItem', position: 3, name: 'SEO', item: CANONICAL },
  ],
};

export default function SiouxFallsSeoPage() {
  return (
    <>
      <script id="fsd-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="fsd-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="fsd-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="fsd-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>Sioux Falls Local &amp; Technical SEO</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  SEO for Sioux Falls Businesses, Measured in Calls and Inquiries
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  FactoryJet works on your Google Business Profile, your service pages and how AI tools describe you, so Sioux Falls buyers find you on Google and in ChatGPT. Reports start with calls and form fills.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Request my free SEO audit" region="us" btnVariant="primary-dark" modalVariant="seo" />
                  <a href="#fsd-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Sioux Falls Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame (Edge-to-Edge) */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/sioux-falls/seo/hero-upholstery-workshop-call.webp"
                  alt="An upholsterer in a canvas apron answering a phone and writing in a notebook beside a laptop showing a simple rising line"
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
                  src="/images/us/sioux-falls/seo/sioux-falls-seo-2.webp"
                  alt="A receptionist in green scrubs shaking hands with an older woman across the front desk of a health clinic"
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
                  <span>South Dakota Market Reality</span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
                  Engineered for Results in Sioux Falls
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  In our 21 Oct 2026 check, directories and an agency Facebook page took half of page one for "sioux falls seo company". We fix your listings on those directories first, then your profile and pages.
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
                  <ModalCTAButton label="Schedule Sioux Falls Strategy Call" region="us" btnVariant="primary-dark" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 04. SIOUX FALLS BUSINESS CORRIDORS DIRECTORY ── */}
        <section id="fsd-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Geographic Precision</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored SEO for Sioux Falls Core Corridors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From Downtown trust practices to 57th &amp; Louise medical clinics and I-90 logistics hubs:
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
                Specialized Search Strategies for Sioux Falls Leading Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every vertical in Sioux Falls demands distinct schema models, citation targets, and conversion architectures:
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
                <span>Sioux Falls Search Check, 21 Oct 2026</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                What Sioux Falls Buyers See on Google Today
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                We searched from a Sioux Falls location and recorded the page:
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
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.08em' }}>What we saw:</span>
                      <p style={{ fontSize: '13.5px', color: '#494852', margin: '4px 0 0', lineHeight: 1.5 }}>{p.problem}</p>
                    </div>
                    <div>
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#FF5622', letterSpacing: '0.08em' }}>What it means for you:</span>
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
            <div className="rounded-2xl border border-[#E6E6EC] bg-[#FFFFFF] p-6 md:p-8 transition-all shadow-sm" style={{ maxWidth: '960px', margin: '0 auto' }}>
              <p className="pp-mlabel">Implementation example</p>
              <h2>A specialist service website built around buyers’ questions</h2>
              <p className="pp-lead">
                FactoryJet built Yadav Entrance Automation’s website from scratch and continues its SEO and AI search work. The site explains the entrance systems the business installs and services, with content structured around the questions customers ask before getting in touch.
              </p>
              <Link href="/case-studies/yadav-entrance-automation-website-seo" className="rv-btn-secondary">
                Read the Yadav Entrance Automation case study <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <div id="seo-architecture-blueprint">
          <LocalSeoArchitectureBlueprint
            badge="// SIOUX FALLS LOCAL SEO & AI CITATION BLUEPRINT"
            title="Local SEO Architecture: From Map Pack to AI Citations"
            subtitle="Explore how your Google Business Profile, local review velocity, JSON-LD schema, and high-performance frontend synchronize to capture inbound leads."
            city="Sioux Falls"
            ctaLabel="Claim Free Sioux Falls SEO Audit"
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
                Our 6-Month Sioux Falls SEO Roadmap
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Six months of work, starting with a record of where you stand in Google and AI tools:
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
                Evaluating Sioux Falls SEO Companies: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Five questions to ask any Sioux Falls SEO or AI search firm, with our answers:
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '16px', overflow: 'hidden', maxWidth: '960px', margin: '0 auto' }}>
              <div className="rv-eval-head" style={{ background: '#141414', color: '#FFFFFF', padding: '16px 24px', fontWeight: 700, fontSize: '13.5px' }}>
                <div>Evaluation Factor</div>
                <div style={{ color: '#FF5622' }}>FactoryJet Engineering Model</div>
                <div style={{ color: '#A0A0B0' }}>Questions to ask any agency</div>
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
                  <div data-label="Questions to ask any agency" style={{ fontSize: '13px', color: '#6E6E80', lineHeight: 1.45 }}>
                    {crit.traditional}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION (16 DETAILED QUESTIONS) ── */}
        <LocalSeoOpportunityEstimator city="Sioux Falls" region="us" />

        <FAQ
          eyebrow="SIOUX FALLS SEO INTELLIGENCE"
          headline="Frequently Asked Questions About SEO in Sioux Falls SD"
          lead="What Sioux Falls owners ask about cost, ChatGPT, AI Overviews and local search, answered plainly:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 11. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <SeoCityLinksUS currentCity="sioux-falls" />
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
              <span>No-Contract Sioux Falls SEO</span>
            </div>
            
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Start With a Free Sioux Falls SEO Audit
            </h2>
            
            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Send us your website URL. We will perform a complete local search and technical audit of your site and top Sioux Falls competitors, completely free.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Claim Your Free Sioux Falls SEO Audit" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
