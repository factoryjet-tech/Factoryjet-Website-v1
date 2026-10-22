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

const PAGE_MODIFIED = '2026-10-22';
const CANONICAL = 'https://factoryjet.com/cleveland/seo';

export const metadata: Metadata = {
  title: 'SEO Agency for Cleveland, OH Businesses | FactoryJet',
  description:
    'SEO for Cleveland, OH clinics, manufacturers, law firms and home service companies across Northeast Ohio. Month-to-month terms.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Agency for Cleveland, OH Businesses | FactoryJet',
    description:
      'SEO for Cleveland, OH clinics, manufacturers, law firms and home service companies across Northeast Ohio. Month-to-month terms.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'SEO for Cleveland, OH businesses by FactoryJet' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency for Cleveland, OH Businesses | FactoryJet',
    description: 'SEO for Cleveland, OH clinics, manufacturers, law firms and home service companies across Northeast Ohio. Month-to-month terms.',
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
    desc: 'Categories and service areas checked against the Cleveland map pack for your own terms.',
    icon: '📍',
  },
  {
    num: 'Site',
    title: 'Technical SEO Review',
    desc: 'Crawl, speed and duplicate-page problems on the pages Northeast Ohio buyers land on.',
    icon: '📈',
  },
  {
    num: '500+',
    title: 'Businesses Served',
    desc: 'Businesses FactoryJet has built for, across all services.',
    icon: '🏢',
  },
  {
    num: 'Monthly',
    title: 'Month-to-Month Terms',
    desc: 'Stop any month. Your profile, analytics and pages stay in your accounts.',
    icon: '⚡',
  },
];

const DISTRICTS = [
  {
    corridor: 'Downtown & The Flats',
    focus: 'Legal, Corporate Services & Commercial Real Estate',
    desc: 'High-density commercial center packed around Public Square and East 9th. B2B decision-makers evaluate technical credentials, page speed, and practice area depth before picking up the phone.',
  },
  {
    corridor: 'University Circle & Clinic Corridor',
    focus: 'Healthcare, Dental & Private Practices',
    desc: 'Anchored by the world-renowned Cleveland Clinic and University Hospitals. Independent practices capture high-intent patient queries through verified reviews, accurate medical schema, and Map Pack optimization.',
  },
  {
    corridor: 'Ohio City, Tremont & Gordon Square',
    focus: 'Hospitality, Dining & Creative Studios',
    desc: 'Fast-moving, visual discovery along West 25th and Professor Avenue. Fresh high-resolution photography, live menu schema, and steady review generation drive immediate foot traffic.',
  },
  {
    corridor: 'Lakewood & West Shore',
    focus: 'Local Professional Services & Home Contractors',
    desc: 'High-density residential and commercial zone along Detroit Avenue. Winning requires hyper-local Google Business Profile signals and neighborhood-level landing pages.',
  },
  {
    corridor: 'Beachwood & Chagrin Highlands',
    focus: 'Financial Advisory, Med Spas & Luxury Services',
    desc: 'Affluent eastern suburbs where high-ticket clients and patients research provider reputations and comprehensive credentials before booking consultations.',
  },
  {
    corridor: 'Independence, Solon & Industrial Corridors',
    focus: 'Precision Manufacturing & B2B Supply Chain',
    desc: 'Heavy machinery, polymer fabrication, and industrial distribution across Cuyahoga County. Technical SEO and structured product specifications put your business on national procurement shortlists.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Healthcare, Dental & Specialized Clinical Practices',
    headline: 'Capturing Patient Searches in the Global Healthcare Capital',
    description:
      'Operating in the backyard of the Cleveland Clinic and University Hospitals requires exceptional local authority. Independent medical groups, specialized surgical clinics, and orthodontic practices win patient bookings by building exhaustive medical schema, verifying physician credentials, and automating review request workflows.',
    image: '/images/us/cleveland/seo/card-clinic-stethoscope-exam.webp',
    alt: 'A doctor in a white coat listening to an older man with a stethoscope in a bright clinic exam room',
    points: [
      'Comprehensive schema for Physician, MedicalClinic, and MedicalSpecialty',
      'HIPAA-aware mobile conversion forms and instant click-to-call buttons',
      'Post-appointment SMS review acquisition generating steady patient feedback',
    ],
  },
  {
    sector: 'Precision Manufacturing, Polymers & Industrial B2B',
    headline: 'Winning National Supplier Procurement Across Northeast Ohio',
    description:
      'From polymer compounders and metal fabricators in Solon to machinery suppliers in Independence, industrial buyers research technical specifications online before submitting an RFQ. We format technical capability matrices and spec sheets to rank for B2B buyer queries and earn automated citations in generative AI search tools.',
    image: '/images/us/manufacturing-website-design/shop-floor.webp',
    alt: 'A machinist in safety glasses loading a metal part into a CNC lathe beside a tablet showing the part',
    points: [
      'Answer-first technical specifications formatted for AI answer engine indexing',
      'Sub-second page load speeds on Next.js and Cloudflare Edge CDN infrastructure',
      'Structured capability matrices and downloadable technical PDF spec indexing',
    ],
  },
  {
    sector: 'Legal Practices, Corporate Counsel & Litigation',
    headline: 'Securing High-Value Cases Across Cuyahoga County Courts',
    description:
      'Legal search terms in Downtown Cleveland and surrounding suburbs carry immense commercial value. We build deep practice-area content hubs for personal injury, corporate litigation, and estate planning, so searchers and Google can see what the firm handles and where.',
    image: '/images/us/services/law-firm-seo/hero.webp',
    alt: 'An empty wood-panelled office with bookshelves and a desk in warm light',
    points: [
      'Detailed practice area silos for commercial litigation and injury law',
      'Attorney profile schema with state bar admissions and verified case summaries',
      'High-authority regional media citations and local legal directory synchronization',
    ],
  },
  {
    sector: 'High-Ticket Home Services, HVAC & Roofing Contractors',
    headline: 'Capturing Emergency Search Demand Across Lake Erie Weather Shifts',
    description:
      'Severe winter lake-effect snowstorms and hot, humid summer heatwaves trigger urgent home repair searches across Cuyahoga and Lorain counties. We position your contracting business directly in the Google Map Pack 3-Pack with live call recording and neighborhood service pages from Lakewood to Westlake.',
    image: '/images/us/services/roofing-seo/search-visibility.webp',
    alt: 'A minimal street map illustration with three terracotta location pins',
    points: [
      'Neighborhood landing pages for Lakewood, Westlake, Beachwood, and Strongsville',
      'Live call recording and conversion attribution integrated into Google Analytics 4',
      'Steady review requests to compete with multi-truck competitors',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'One consultant fills three of the top ten spots',
    problem: 'On 21 Oct 2026 we pulled Google\'s top 10 for "cleveland seo services" from a Cleveland location. A single local consultant held three of the ten spots with three different pages: a blog, an about page and an advice page.',
    solution: 'Google will rank several pages from one site when each answers a different question. For a Cleveland trade business that means one page per service you sell, so furnace repair and AC installs are not squeezed onto one page.',
  },
  {
    num: '02',
    title: 'The map pack firms had between 4 and 17 reviews',
    problem: 'The three map results for that search had 15, 4 and 17 Google reviews. That is a low bar compared with other cities we checked the same day, where map pack firms had over 100.',
    solution: 'Where the top three have fewer than 20 reviews each, a steady habit of asking real customers can move you. We set up a short request routine your staff can send after each finished job.',
  },
  {
    num: '03',
    title: 'Directories and lists take three more spots',
    problem: 'Three more results were a LinkedIn services directory, a "top 10 Cleveland SEO companies" list and a company database page. Buyers compare names on those pages before they call anyone.',
    solution: 'We find the directories and lists that rank for your own service terms in Cuyahoga County, then check that your name, address, phone and categories match your Business Profile.',
  },
  {
    num: '04',
    title: 'Cleveland buyers ask Google whether SEO is paid or free',
    problem: 'Google\'s People Also Ask box on that search showed who the best SEO agency is, what the 80/20 rule in SEO means, and whether SEO is paid or free.',
    solution: 'Your customers ask the same kind of cost and trust questions about your trade. We write plain answers into your service pages and FAQ, and generate the FAQ schema from that same text.',
  },
];

const ROADMAP_STEPS = [
  {
    phase: 'Month 1',
    title: 'Read-only audit and profile clean-up',
    desc: 'We start with read-only Search Console access, review your Business Profile and top pages, and fix what stops calls first.',
    deliverables: ['Ranked fix list with a date beside each item', 'Profile categories set to the services you sell'],
  },
  {
    phase: 'Month 2',
    title: 'Listings across Cuyahoga County',
    desc: 'We correct your details on Apple Maps, Bing Places and the Cleveland directories that rank for your terms, and set up call and form tracking.',
    deliverables: ['Listing corrections logged in a shared sheet', 'Call and form tracking agreed with you'],
  },
  {
    phase: 'Month 3',
    title: 'Service and suburb pages',
    desc: 'We write one page per service, then suburb pages only for places you take work, such as Westlake, Parma or Euclid.',
    deliverables: ['Service pages with real job and review detail', 'Suburb pages that are not name swaps'],
  },
  {
    phase: 'Months 4 to 6',
    title: 'Reviews, seasonal pages and monthly notes',
    desc: 'We run the review routine, publish seasonal pages ahead of demand, such as furnace work before winter, and report each month.',
    deliverables: ['Review request routine in use', 'Monthly note: changes made, calls, forms, rankings'],
  },
];

const EVALUATION_CRITERIA = [
  {
    label: 'Examples First',
    factoryjet: 'The free audit shows the exact pages and listings we would change, before you sign.',
    traditional: 'Ask: "Can you show me examples of your previous work?" It is the first question on Google\'s own hiring list.',
  },
  {
    label: 'Search Essentials',
    factoryjet: 'Yes. No bought links and no suburb pages that only swap the town name.',
    traditional: 'Ask: "Do you follow the Google Search Essentials?"',
  },
  {
    label: 'Results and Timeframe',
    factoryjet: 'A fix list with dates. No ranking promise, because Google tells buyers to avoid anyone who makes one.',
    traditional: 'Ask: "What results do you expect, and in what timeframe?"',
  },
  {
    label: 'Measuring Success',
    factoryjet: 'Calls, forms and booked jobs first. Rankings second.',
    traditional: 'Ask: "How do you measure success?"',
  },
  {
    label: 'Cleveland Experience',
    factoryjet: 'We begin with today\'s Cleveland results for your terms and share them as we found them.',
    traditional: 'Ask: "What is your experience in my city?"',
  },
  {
    label: 'Visible Changes',
    factoryjet: 'Every monthly note lists the pages and listings we changed.',
    traditional: 'Ask: "Will you share all the changes you make to my site?"',
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
    question: 'What do Cleveland SEO packages cost?',
    answer: 'Ahrefs surveyed 439 SEO providers and found local SEO averaged about $1,557 a month. Cleveland packages land on both sides of that. Before comparing prices, compare what each package counts. Some count directory submissions or blog posts. Others count fixes and calls. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'pricing',
    question: 'Is SEO paid or free?',
    answer: 'Showing up is free. Google does not charge for a Business Profile, a map listing or a place in the regular results. What costs money is the work: fixing your profile, writing service pages, correcting listings and asking for reviews. You can do that yourself, pay staff, or hire a firm. Paid ads are a separate thing.',
  },
  {
    category: 'pricing',
    question: 'What is in the free Cleveland SEO audit?',
    answer: 'We compare your Business Profile, top pages and listings with the businesses that rank for your terms in Cleveland today. We ask for read-only Search Console access, which is what Google advises before you hire anyone. You get a short written list of what to fix first, and you can give it to anyone.',
  },
  {
    category: 'local',
    question: 'Who is the best SEO company in Cleveland?',
    answer: 'There is no single answer, because the right firm depends on your trade and your budget. Judge each one the same way: ask for examples of past work, how they measure success, and what they would change first. Then look them up. A firm that ranks for its own services in Cleveland has at least shown it can do the work.',
  },
  {
    category: 'local',
    question: 'Can you help my business show up in Fairview Park, North Olmsted or Westlake?',
    answer: 'Yes, if you serve customers there. Google weighs distance between the searcher and your business, so a shop in Parma will find the Westlake map results hard. Regular results are easier. A page for each West Side suburb you work in, with jobs and reviews from that area, can rank there even when the map pack does not.',
  },
  {
    category: 'local',
    question: 'Do I need separate pages for Lakewood, Parma and Euclid?',
    answer: 'Only for places where you take work, and only if each page says something different. Google\'s spam policies call out doorway pages made to rank for many similar searches. A Lakewood page should mention Lakewood jobs, Lakewood reviews and how you serve it. A copy with the city name swapped can drag the whole site down.',
  },
  {
    category: 'local',
    question: 'How many Google reviews does a Cleveland business need?',
    answer: 'No fixed number. Google says more reviews and positive ratings can help local ranking. In our 21 Oct 2026 check of "cleveland seo services", the three map pack firms had 15, 4 and 17 reviews. Look up your own main search and count what the top three have. That is your real target.',
  },
  {
    category: 'technical',
    question: 'What does a technical SEO company in Cleveland actually fix?',
    answer: 'The problems that stop Google reading your site. Common ones: pages blocked from indexing, slow mobile pages, the same content on two addresses, redirects broken by a redesign, and missing schema. These do not show on screen, so owners rarely notice them. A technical audit lists each one with the page it affects.',
  },
  {
    category: 'technical',
    question: 'How does SEO work for HVAC companies in Cleveland?',
    answer: 'Demand flips with the season. Furnace and boiler searches climb as Cleveland gets cold, and AC searches climb in summer. Each service needs its own page, published before the season starts. Set your Business Profile category to HVAC contractor, list the suburbs you cover, and ask for reviews that mention the job and the area.',
  },
  {
    category: 'technical',
    question: 'Is SEO different for Cleveland manufacturers?',
    answer: 'Yes. Your buyers are engineers and purchasing managers, often outside Ohio, so the map pack matters less. They search by process, material and tolerance. You need a page for each capability, real photos, the certifications you actually hold and a quote form that asks for drawings. That brings in the RFQs.',
  },
  {
    category: 'technical',
    question: 'How do I get my Cleveland business named by ChatGPT and AI search?',
    answer: 'AI tools build answers from what they can find about you. Keep your name, address, phone and services the same everywhere: your site, your Business Profile, Apple Maps, Bing and the directories that rank. Write service pages that answer questions directly. Then ask the tools about your trade in Cleveland and see who they name.',
  },
  {
    category: 'timeline',
    question: 'How long does Cleveland SEO take to show results?',
    answer: 'Profile and listing fixes can show up within weeks. Ranking for busy terms like "cleveland hvac" usually takes months, and nobody can promise a date. Google\'s advice on hiring an SEO is to walk away from anyone who guarantees first place. Ask instead for a dated list of what will be done.',
  },
  {
    category: 'timeline',
    question: 'How should I evaluate an SEO company in Cleveland?',
    answer: 'Use the questions Google itself suggests. Ask for examples of past work. Ask if they follow Google Search Essentials, what results they expect and by when, how they measure success, and what experience they have in your industry and your city. Ask whether they will share every change they make to your site.',
  },
  {
    category: 'timeline',
    question: 'Is local SEO worth it for a small Cleveland electrician or trade?',
    answer: 'Usually, because most trade jobs start with a phone search. A small shop does not need a large plan. It needs a complete Business Profile, a page for each service, correct listings and a habit of asking for reviews. Skip the weekly blog posts until those four are done.',
  },
  {
    category: 'local',
    question: 'Can one Google profile cover Northeast Ohio, from Mentor to Medina?',
    answer: 'If you visit customers, yes, within limits. Google gives a service-area business one profile for its whole area and says the boundary should be no more than about two hours of driving from your base. From Cleveland that takes in Mentor, Medina, Akron and Lorain with room to spare. If you also run a staffed office with signage in Akron or Mentor, that office can have its own profile.',
  },
  {
    category: 'local',
    question: 'Does putting a ZIP code like 44145 on my site help me rank in Westlake?',
    answer: 'A ZIP code in your text does little by itself. Google\'s local ranking leans on relevance, distance and how well known you are, and a number in a footer changes none of those. What helps is listing Westlake or 44145 as a service area on your profile if you serve it, and a Westlake page that shows jobs you did there. If your shop is in Westlake, your address already carries that.',
  },
  {
    category: 'local',
    question: 'Why does a \'near me\' search in Cleveland show different companies to different people?',
    answer: 'Distance is one of Google\'s main local factors, and Google measures it from the person searching. Its help page says that when a searcher does not share a location, Google uses what it knows about where they are. A Parma resident and a Euclid resident typing the same words can see different map packs. So test your rankings from a few points across the city, not only from your own office.',
  },
  {
    category: 'technical',
    question: 'What can I check myself before I hire a Cleveland SEO company?',
    answer: 'Start with Google Search Console, which is free. Its Performance report shows the searches that already bring people to your site and your average position for each one. Then search your main service on your phone and see whether your profile shows, and under what category. If both look right and calls are still thin, the gap is usually in your service pages or reviews, and that is where outside help earns its fee.',
  },
  {
    category: 'timeline',
    question: 'How fast do Google profile edits show up for a Cleveland business?',
    answer: 'Some show quickly. Google\'s help page on service areas says approved service-area edits can take up to 48 hours to appear. Ranking changes that follow an edit take longer, because Google weighs your profile against every other one nearby. Make one change at a time and write down the date. That way, when calls go up or down a few weeks later, you can tell which edit caused it.',
  },
  {
    category: 'local',
    question: 'Should I add \'Cleveland\' or my service to my Google profile name?',
    answer: 'No, unless it is part of your real business name. Google\'s profile rules forbid adding service or location words that you do not use on your sign, website and paperwork. Google\'s own example: \'Midas Auto Service Experts\' is not allowed, while \'Midas\' is. The same rules say extra words in a name can get a profile suspended. Put Cleveland and your services in your categories, service areas and website instead.',
  },
];

const SOURCES: ReadonlyArray<{ publisher: string; title: string; url: string; note: string }> = [
  {
    publisher: 'Google Business Profile Help',
    title: 'Manage your service areas for service-area & hybrid businesses',
    url: 'https://support.google.com/business/answer/9157481?hl=en',
    note: 'A service-area business gets one profile for its whole area, can list up to 20 service areas, and should keep the area within about two hours of driving. Approved edits can take up to 48 hours to show.',
  },
  {
    publisher: 'Google Business Profile Help',
    title: 'Tips to improve your local ranking on Google',
    url: 'https://support.google.com/business/answer/7091?hl=en',
    note: 'Local results are based mainly on relevance, distance and prominence. Without a shared location, Google uses what it knows about where the searcher is.',
  },
  {
    publisher: 'Google Business Profile Help',
    title: 'Guidelines for representing your business on Google',
    url: 'https://support.google.com/business/answer/3038177?hl=en',
    note: 'Profile names must not carry service or location words that are not part of the real business name, with "Midas Auto Service Experts" shown as a name that is not allowed.',
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
  name: 'Cleveland SEO Services & Local Search Optimization',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  serviceType: 'Local SEO, Technical SEO & Generative Engine Optimization',
  description:
    'SEO for Cleveland, OH clinics, manufacturers, law firms and home service companies across Northeast Ohio. Month-to-month terms.',
  areaServed: [
    { '@type': 'City', name: 'Cleveland' },
    { '@type': 'City', name: 'Lakewood' },
    { '@type': 'City', name: 'Beachwood' },
    { '@type': 'City', name: 'Westlake' },
    { '@type': 'City', name: 'Solon' },
    { '@type': 'City', name: 'Mentor' },
    { '@type': 'State', name: 'Ohio' },
  ],
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'SEO Agency for Cleveland, OH Businesses | FactoryJet',
  description: 'SEO for Cleveland, OH clinics, manufacturers, law firms and home service companies across Northeast Ohio. Month-to-month terms.',
  url: CANONICAL,
  dateModified: PAGE_MODIFIED,
  citation: SOURCES.map((src) => ({ '@type': 'CreativeWork', name: src.title, url: src.url })),
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
    { '@type': 'ListItem', position: 2, name: 'Cleveland', item: 'https://factoryjet.com/cleveland/web-design' },
    { '@type': 'ListItem', position: 3, name: 'SEO', item: CANONICAL },
  ],
};

export default function ClevelandSeoPage() {
  return (
    <>
      <script id="cleveland-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="cleveland-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="cleveland-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="cleveland-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>Cleveland Local &amp; Technical SEO</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Month-to-Month SEO for Cleveland Businesses
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  We work on your Google Business Profile, your service pages and your listings so people searching in Cleveland and Northeast Ohio find you and call. Month to month, and you talk directly to the people doing the work.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Claim Free Cleveland SEO Audit" region="us" btnVariant="primary-dark" />
                  <a href="#cleveland-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Cleveland Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame (Edge-to-Edge) */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/cleveland/web-design/portfolio-1.webp"
                  alt="Upward view of a pale concrete building with a teal glass strip against a blue sky"
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
                  src="/images/us/boston-seo/boston-seo-workshop.webp"
                  alt="Three people standing around a table of printed page layouts, one pointing at a sheet, with brick townhouses outside the window"
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
                  <span>Northeast Ohio Market Reality</span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
                  Engineered for Results in Greater Cleveland
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  In Cleveland, the map pack for many service terms is still winnable: when we checked on 21 Oct 2026, the top three for "cleveland seo services" had fewer than 20 reviews each. We fix your profile and pages first, then build reviews.
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
                  <ModalCTAButton label="Schedule Cleveland Strategy Call" region="us" btnVariant="primary-dark" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 04. CLEVELAND BUSINESS CORRIDORS DIRECTORY ── */}
        <section id="cleveland-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Geographic Precision</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored SEO for Cleveland&apos;s Core Business Corridors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From Downtown legal practices to University Circle medical corridors and Solon manufacturing:
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
                Specialized Search Strategies for Cleveland&apos;s Leading Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every vertical in Cleveland demands distinct schema models, citation targets, and conversion architectures:
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
                <span>Cleveland Search Check, 21 Oct 2026</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                What Cleveland Buyers See When They Search for SEO Help
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                We ran the search from a Cleveland location and wrote down what came back:
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

        <div id="seo-architecture-blueprint">
          <LocalSeoArchitectureBlueprint
            badge="// CLEVELAND LOCAL SEO & AI CITATION BLUEPRINT"
            title="Local SEO Architecture: From Map Pack to AI Citations"
            subtitle="Explore how your Google Business Profile, local review velocity, JSON-LD schema, and high-performance frontend synchronize to capture inbound leads."
            city="Cleveland"
            ctaLabel="Claim Free Cleveland SEO Technical Audit"
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
                Our 6-Month Cleveland SEO Roadmap
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                What we do in each of the first six months:
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
                Evaluating Cleveland SEO Companies: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Google publishes its own list of questions to ask an SEO. Here are six of them, with our answers:
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
        <LocalSeoOpportunityEstimator city="Cleveland" region="us" />

        <FAQ
          eyebrow="CLEVELAND SEO INTELLIGENCE"
          headline="Frequently Asked Questions About SEO in Cleveland OH"
          lead="Cleveland owners search for prices, packages and how to judge an SEO firm. Plain answers below:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── SOURCES CHECKED FOR THIS PAGE ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: '0 0 56px' }}>
          <div className="pp-wrap" style={{ maxWidth: '860px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#141414', letterSpacing: '-0.015em', margin: '0 0 8px' }}>
              Sources behind these answers
            </h2>
            <p style={{ fontSize: '13.5px', color: '#6E6E80', lineHeight: 1.55, margin: '0 0 16px' }}>
              We fetched and read each of these pages on 22 Oct 2026.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {SOURCES.map((s) => (
                <li key={s.url} style={{ fontSize: '13.5px', color: '#494852', lineHeight: 1.55 }}>
                  <a href={s.url} target="_blank" rel="noopener" style={{ color: '#B23E13', fontWeight: 700, textDecoration: 'underline' }}>
                    {s.publisher}: {s.title}
                  </a>
                  <span style={{ display: 'block' }}>{s.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 11. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <SeoCityLinksUS currentCity="cleveland" />
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
              <span>No-Contract Cleveland SEO</span>
            </div>
            
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Start With a Free Cleveland SEO Audit
            </h2>
            
            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Send us your website URL. We will perform a complete local search and technical audit of your site and top Cleveland competitors, completely free.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Claim Your Free Cleveland SEO Audit" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
