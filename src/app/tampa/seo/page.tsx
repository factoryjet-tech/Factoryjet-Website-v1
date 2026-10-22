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
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-10-22';
const CANONICAL = 'https://factoryjet.com/tampa/seo';

export const metadata: Metadata = {
  title: 'SEO Agency for Tampa, FL Businesses | FactoryJet',
  description:
    'SEO for Tampa, FL clinics, law firms, wealth managers and port logistics companies, from Westshore to Ybor City. No long-term contract.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Agency for Tampa, FL Businesses | FactoryJet',
    description:
      'SEO for Tampa, FL clinics, law firms, wealth managers and port logistics companies, from Westshore to Ybor City. No long-term contract.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'SEO for Tampa, FL businesses by FactoryJet' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency for Tampa, FL Businesses | FactoryJet',
    description: 'SEO for Tampa, FL clinics, law firms, wealth managers and port logistics companies, from Westshore to Ybor City. No long-term contract.',
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
  {
    num: 'Maps',
    title: 'Business Profile Review',
    desc: 'Category, services and service area across Hillsborough, Pasco and Pinellas, checked against who ranks now.',
    icon: '📍',
  },
  {
    num: 'Leads',
    title: 'Inquiry Tracking',
    desc: 'Calls and forms from search counted each month, with the source recorded.',
    icon: '📈',
  },
  {
    num: 'Schema',
    title: 'Structured Data Check',
    desc: 'Business and FAQ schema that matches the words visitors actually see on the page.',
    icon: '🛡️',
  },
  {
    num: '0',
    title: 'Bought Links',
    desc: 'We earn mentions from real Tampa Bay sites and directories. No link networks.',
    icon: '⚡',
  },
];

const DISTRICTS = [
  {
    corridor: 'Downtown Tampa & Water Street',
    focus: 'Fintech Headquarters, Corporate Law & Commercial Real Estate',
    desc: 'The vibrant economic core of Tampa Bay. High-intent local searches demand corporate litigation schemas, verified partner credentials, and top organic rankings.',
  },
  {
    corridor: 'Westshore Business District',
    focus: 'Regional Corporate HQs, Executive Search & B2B Professional Services',
    desc: 'The largest commercial office market in Florida. Captures high-ticket executive search inquiries, corporate advisory retainers, and B2B vendor searches.',
  },
  {
    corridor: 'Ybor City & Historic District',
    focus: 'Creative Agencies, Architecture Studios & Boutique Hospitality',
    desc: 'Historic creative and technology nexus. Features visual schema integration, localized service radius targeting, and Google Maps prominence.',
  },
  {
    corridor: 'South Tampa & Hyde Park',
    focus: 'Private Wealth Advisory, Aesthetic Medicine & Luxury Real Estate',
    desc: 'Affluent residential and commercial strip. Captures high-ticket elective procedure consultations, private wealth management, and luxury residential listings.',
  },
  {
    corridor: 'Gateway & Carillon Park',
    focus: 'Healthcare Systems, Medical Device Technology & Clinical Research',
    desc: 'Dense healthcare innovation hub. Multi-location practice architectures, physician directories, and structured patient review funnels.',
  },
  {
    corridor: 'Port Tampa Bay & East Tampa Corridor',
    focus: 'Maritime Logistics, Industrial Cold Storage & Heavy Distribution',
    desc: 'Florida’s largest cargo port. B2B service inquiries require technical capability landing pages, freight quote calculators, and sub-second edge performance.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Medical Specialties, Plastic Surgery & Concierge Health',
    headline: 'Capturing High-Value Patients Across South Tampa & Westshore',
    description:
      'In Tampa Bay’s competitive healthcare and aesthetic sectors, patients research clinic reputations and doctor credentials thoroughly before booking. We optimize Google Business Profiles, implement medical specialty schemas, generate local patient review momentum, and target high-ticket elective queries.',
    image: '/images/us/services/dental-seo/hero.webp',
    alt: 'A bright empty reception lobby with a sofa, plants and a white reception desk',
    points: [
      'Multi-practitioner Google Business Profile optimization with procedure sub-categories',
      'MedicalProcedure and Physician structured JSON-LD schema linking hospital affiliations',
      'Hyper-local neighborhood geo-pages targeting South Tampa, Hyde Park, and Carrollwood',
    ],
  },
  {
    sector: 'Corporate Law, Maritime Litigation & Commercial Real Estate',
    headline: 'Local Search Work for Tampa Bay Law Firms',
    description:
      'Legal search terms in Hillsborough and Pinellas counties are intensely competitive. We build local SEO structures with practice area knowledge hubs, attorney bar admission schemas, verified case settlement showcases, and consistent local citations.',
    image: '/images/us/services/law-firm-seo/hero.webp',
    alt: 'An empty wood-panelled office with bookshelves and a desk in warm light',
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
    image: '/images/us/tampa/seo/card-client-signing-document.webp',
    alt: 'An adviser in a grey suit steadying a document on a desk while a woman in a green dress signs it in a bright office',
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
    alt: 'A machinist in safety glasses loading a metal part into a CNC lathe beside a tablet showing the part',
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
    title: 'No map pack on the main search',
    problem: 'We searched "local seo tampa" from a Tampa location on 21 Oct 2026. Google showed an AI Overview, a business knowledge panel and ten regular results. It showed no map pack at all.',
    solution: 'Google picks a different layout for each search. For some Tampa terms your website pages decide everything, because there is no map to win. We check the layout for each of your main terms before we choose where to spend effort.',
  },
  {
    num: '02',
    title: 'A firm named after the search took three spots',
    problem: 'A company whose name is the search phrase held the knowledge panel and three of the top five results: its own site, its Facebook page and its Yelp listing.',
    solution: 'Names carry weight, but Google\'s profile rules forbid adding keywords to a business name. We keep your real name and make your profile, listings and pages state plainly what you do and which part of Tampa Bay you serve.',
  },
  {
    num: '03',
    title: 'An AI Overview sits above every result',
    problem: 'The AI Overview filled the top of the page before any link. Buyers read a summary first and click second, if at all.',
    solution: 'AI Overviews quote pages that answer a question in their opening lines. We rewrite your key service pages to open with the answer, then check whether Google cites you.',
  },
  {
    num: '04',
    title: 'Tampa searchers ask for technical audits',
    problem: 'Search Console for this page shows "technical seo audit tampa" and "technical seo audit tampa florida" among its top searches, next to Wesley Chapel and trade terms for accountants, electricians and contractors.',
    solution: 'Many Tampa Bay owners suspect something is broken under the hood. Our free audit checks indexing, speed, redirects and schema page by page, and names each problem with its URL.',
  },
];

const ROADMAP_STEPS = [
  {
    phase: 'Phase 01',
    title: 'Technical audit',
    desc: 'We read your site the way Google does: what is indexed, what is blocked, what is slow, and which redirects break.',
    deliverables: ['Issue list with the URL for each problem', 'Fixes ranked by effect on calls'],
  },
  {
    phase: 'Phase 02',
    title: 'Profile and listings',
    desc: 'We set your profile category and service area, then match your details across Apple Maps, Bing, Yelp and Tampa Bay directories.',
    deliverables: ['Corrected profile', 'Listing log for Hillsborough, Pasco and Pinellas'],
  },
  {
    phase: 'Phase 03',
    title: 'Answer-first pages',
    desc: 'We rewrite service pages to open with the answer and add pages for towns you serve, such as Brandon, Riverview or Wesley Chapel.',
    deliverables: ['Service pages that lead with the answer', 'Town pages with local jobs and reviews'],
  },
  {
    phase: 'Phase 04',
    title: 'Reviews and AI Overview checks',
    desc: 'We start a review routine and check monthly whether Google\'s AI Overview and other AI tools cite your pages.',
    deliverables: ['Review request routine', 'Monthly note: changes, calls, forms, citations'],
  },
];

const EVALUATION_CRITERIA = [
  {
    label: 'Search Layout',
    factoryjet: 'Yes. For "local seo tampa" on 21 Oct 2026 there was no map pack, so we would weight your pages first.',
    traditional: 'Ask: "Does Google show a map pack for my main terms in Tampa?"',
  },
  {
    label: 'Technical Audit',
    factoryjet: 'Indexing, speed, redirects and schema, with the URL of each problem.',
    traditional: 'Ask: "Will the audit name each problem and the page it is on?"',
  },
  {
    label: 'Business Name',
    factoryjet: 'No. Google\'s profile rules ban keyword stuffing in names, and it can get a profile suspended.',
    traditional: 'Ask: "Will you change our business name to add keywords?"',
  },
  {
    label: 'AI Overviews',
    factoryjet: 'We check monthly whether Google\'s AI Overview cites your pages and record the result.',
    traditional: 'Ask: "How will you track whether AI Overviews mention us?"',
  },
  {
    label: 'Contract',
    factoryjet: 'Month to month. Your accounts stay in your name.',
    traditional: 'Ask: "Can I stop at any month, and what do I keep?"',
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
    question: 'How much does local SEO cost in Tampa?',
    answer: 'Backlinko\'s 2025 survey of more than 300 SEO professionals found established small businesses often pay $501 to $1,000 a month, with the overall average at $1,000 to $2,500. A single Brandon salon sits at the low end. A Westshore law firm chasing citywide terms sits higher. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'pricing',
    question: 'What does a technical SEO audit in Tampa cost?',
    answer: 'There is no reliable published range for technical audits on their own. Backlinko groups full site audits with other one-time projects at $1,000 to $5,000. Price depends on how many pages you have and how deep the check goes. Our first audit is free, and it names each problem with the page it is on.',
  },
  {
    category: 'timeline',
    question: 'Is local SEO worth it for a Tampa business?',
    answer: 'Check before you spend. Open your Business Profile performance screen and see how many calls and searches it already gets. If people in Tampa Bay search for what you sell, local SEO is usually worth it, because those buyers are ready to call. If almost nobody searches for your service, put the money elsewhere.',
  },
  {
    category: 'timeline',
    question: 'How long does it take to rank in Tampa Bay?',
    answer: 'Fixes to your profile and pages can show within weeks. Busy citywide terms take months, and no one can promise a date. Google\'s advice on hiring an SEO says to find someone else if a firm guarantees first place. A smaller area like Plant City or Zephyrhills usually moves faster than downtown Tampa.',
  },
  {
    category: 'technical',
    question: 'What does a technical SEO audit check?',
    answer: 'It checks whether Google can find, read and trust each page. That covers pages left out of the index, pages blocked by mistake, slow mobile load times, redirect chains after a redesign, duplicate pages on two addresses, missing or wrong schema, and orphan pages nothing links to. A good audit names the URL for each problem.',
  },
  {
    category: 'technical',
    question: 'Why did Google show an AI Overview but no map for "local seo tampa"?',
    answer: 'Google chooses a layout for each search. On 21 Oct 2026 it treated "local seo tampa" as a research question plus a search for a company with that name, so it showed an AI Overview and a knowledge panel instead of a map. Your own terms may look different. Check each one before planning.',
  },
  {
    category: 'technical',
    question: 'Does my business name affect Tampa local rankings?',
    answer: 'It can. In our check, a company named after the search phrase held three of the top five results. Do not copy that by adding words to your profile name, though. Google\'s Business Profile rules forbid it, and profiles get suspended for it. Use your real name and make your categories and pages clear.',
  },
  {
    category: 'local',
    question: 'Do you work with businesses in Wesley Chapel, Westchase and Riverview?',
    answer: 'Yes, if you serve those areas. Wesley Chapel is in Pasco County, while Westchase and Riverview are in Hillsborough. Google weighs distance from the searcher, so a Riverview office will not rank on the map in Wesley Chapel. A page for each area you work in, with real local jobs and reviews, can still rank in the regular results.',
  },
  {
    category: 'local',
    question: 'Is SEO for St. Petersburg and Clearwater different from Tampa?',
    answer: 'Yes. Pinellas is across the bay, and buyers there search by their own city name. A Tampa profile seldom shows in St. Pete map results. If you serve both sides, give each side its own page with jobs and reviews from there, and list both counties in your profile service area.',
  },
  {
    category: 'local',
    question: 'How does SEO work for Tampa accountants and bookkeepers?',
    answer: 'Demand peaks before tax deadlines, so publish and update pages well ahead of them. Give tax prep, bookkeeping and payroll each their own page. State only credentials you actually hold, such as a CPA license. Choose the profile category that matches your main service, and ask business clients for reviews that name the service they used.',
  },
  {
    category: 'local',
    question: 'How does SEO work for Tampa med spas and plastic surgery practices?',
    answer: 'Patients compare procedures, doctors and photos before they call. Each procedure needs its own page with the doctor named and photos used with written consent. Be careful replying to reviews: under federal privacy rules, a reply should not confirm that the reviewer is a patient. Profile reviews still matter a great deal.',
  },
  {
    category: 'local',
    question: 'Do Tampa electricians and contractors need a different SEO plan?',
    answer: 'They need a service-area plan. Google asks service-area businesses to hide the street address and set the area they cover. Show your Florida license number on your site, give each service its own page, and post finished jobs with the neighborhood named. Emergency work needs accurate hours, including nights and weekends if you take those calls.',
  },
  {
    category: 'reporting',
    question: 'What are the top SEO agencies in Tampa?',
    answer: 'Lists disagree, and some are paid placements. A better test: search your own main term from Tampa and see who ranks. Then ask three firms the same things: what they would fix first, how they will measure it, and who will do the work. Compare their answers side by side.',
  },
  {
    category: 'reporting',
    question: 'What should a Tampa SEO report show each month?',
    answer: 'Four things, in order. The work done that month, with links to the pages and listings changed. Calls and forms from search. Profile activity such as calls and direction requests. Then rankings for the terms you agreed on. If a report opens with impressions and traffic charts, ask where the calls are.',
  },
  {
    category: 'local',
    question: 'Do I need a Florida fictitious name before using a brand name on Google?',
    answer: 'Often, yes. Florida law requires a business trading under a fictitious name to register it, and the registrant certifies the name was advertised at least once in a newspaper in the county of its main office, which for many Tampa firms is Hillsborough. An LLC or corporation trading under its exact registered name is exempt. A registration runs until December 31 of the fifth calendar year, then needs renewing.',
  },
  {
    category: 'local',
    question: 'My Tampa business has a showroom and also visits customers. How should my profile be set up?',
    answer: 'As a hybrid business. Google\'s help page says a hybrid business serves customers at its address and also travels or delivers to them, so the profile can show the showroom address and a service area. A pool supply store in Carrollwood that also services pools in Lutz and Westchase fits this. If there is no permanent sign at the address, Google says to list as service-area only.',
  },
  {
    category: 'local',
    question: 'How does Google decide which Tampa businesses show in the map pack?',
    answer: 'Google says local results rest mainly on relevance, distance and prominence. Relevance is how well your profile and site match the words typed. Distance is measured from the searcher, so a Brandon business rarely shows to someone searching in Town \'n\' Country. Prominence is how well known you are, from reviews, links and mentions across the web. You cannot change distance, so the work goes into the other two.',
  },
  {
    category: 'local',
    question: 'How should a Tampa hair salon or barbershop use its Google profile?',
    answer: 'Pick the most specific category, such as hair salon or barber shop, and list every service. Add recent photos of your work and keep hours current, including holidays. Google\'s profile rules do not allow prices or promotions in the business description, so put your price list on your website and link to booking. Ask clients to name the service they had in their review. It helps the next person choose.',
  },
  {
    category: 'local',
    question: 'Can I make a separate Google profile for each Tampa Bay city I serve?',
    answer: 'No. Google\'s rules allow one profile per real location, and a service-area business gets one profile for its whole area. A second profile with a St. Petersburg address you do not staff breaks those rules. Instead, add the cities you cover as service areas, up to 20 of them, and give each city a page on your site with real jobs from there.',
  },
  {
    category: 'reporting',
    question: 'What happens on a first SEO call with a Tampa business?',
    answer: 'We talk about your business before anything else: what you sell, where you take work, which customers bring the most profit and what you have tried. While we talk, we look at your profile and one or two key pages. You leave with the first fixes we would make, in order, whether or not you hire us. If SEO is the wrong spend for you right now, we say so.',
  },
];

const SOURCES: ReadonlyArray<{ publisher: string; title: string; url: string; note: string }> = [
  {
    publisher: 'The Florida Legislature (Online Sunshine)',
    title: 'Florida Statutes section 865.09: Fictitious name registration',
    url: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0800-0899/0865/Sections/0865.09.html',
    note: 'Registrants certify the name was advertised once in a newspaper in the county of the principal place of business. Registrations expire December 31 of the fifth calendar year. Registered entities using their own name are exempt.',
  },
  {
    publisher: 'Google Business Profile Help',
    title: 'Manage your service areas for service-area & hybrid businesses',
    url: 'https://support.google.com/business/answer/9157481?hl=en',
    note: 'A hybrid business serves customers at its address and also visits or delivers, so it can show both. Without permanent signage, a business should be listed as service-area only.',
  },
  {
    publisher: 'Google Business Profile Help',
    title: 'Guidelines for representing your business on Google',
    url: 'https://support.google.com/business/answer/3038177?hl=en',
    note: 'One profile per location; business descriptions may not focus on prices or promotions; choose the most specific category.',
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
    'SEO for Tampa, FL clinics, law firms, wealth managers and port logistics companies, from Westshore to Ybor City. No long-term contract.',
  areaServed: [
    { '@type': 'City', name: 'Tampa' },
    { '@type': 'City', name: 'St. Petersburg' },
    { '@type': 'City', name: 'Clearwater' },
    { '@type': 'City', name: 'Brandon' },
    { '@type': 'City', name: 'Wesley Chapel' },
    { '@type': 'State', name: 'Florida' },
    { '@type': 'Country', name: 'United States' },
  ],
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/tampa/seo#webpage',
  name: 'SEO Agency for Tampa, FL Businesses | FactoryJet',
  description: 'SEO for Tampa, FL clinics, law firms, wealth managers and port logistics companies, from Westshore to Ybor City. No long-term contract.',
  url: CANONICAL,
  dateModified: PAGE_MODIFIED,
  citation: SOURCES.map((src) => ({ '@type': 'CreativeWork', name: src.title, url: src.url })),
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
    { '@type': 'ListItem', position: 2, name: 'AI Search & SEO', item: 'https://factoryjet.com/services/ai-seo' },
    { '@type': 'ListItem', position: 3, name: 'Tampa', item: CANONICAL },
  ],
};

export default function TampaSeoPage() {
  return (
    <>
      <script id="tpa-seo-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
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
                  SEO for Tampa Bay Businesses, From Westshore to Ybor City
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 24px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  We fix your Google Business Profile, your service pages and the technical problems under them, so buyers across Tampa Bay find you and call. Each monthly report starts with calls and inquiries.
                </p>

                {/* Answer-First Brief */}
                <div style={{ background: '#F6F6F9', borderLeft: '3px solid #FF5622', padding: '14px 18px', borderRadius: '0 12px 12px 0', marginBottom: '28px', maxWidth: '52ch' }}>
                  <p style={{ fontSize: '13.5px', color: '#141414', lineHeight: 1.55, margin: 0, fontWeight: 500 }}>
                    <strong style={{ color: '#FF5622' }}>Executive Brief:</strong> FactoryJet delivers senior engineering-led Tampa local SEO services: Google Business Profile optimization, multi-radius geo-grid proximity expansion, NAP citation synchronization across major data aggregators, structured LocalBusiness Schema.org graphs, and high-intent local conversion engineering across Hillsborough County with transparent call tracking and zero locked monthly retainers.
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
                  alt="A waterfront city skyline with palm trees under a blue sky"
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
                  src="/images/us/shared/factoryjet-audit-call.webp"
                  alt="A man in a blue shirt talking to the camera at a white desk, beside a laptop showing a dashboard with orange and green bar charts"
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
                  When we searched "local seo tampa" on 21 Oct 2026, Google showed an AI Overview and no map pack. For searches like that, your own pages decide whether you appear, so the work starts with your site.
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
                <span>Tampa Search Check, 21 Oct 2026</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                What Google Shows Tampa Buyers Searching for Local SEO
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                We searched from a Tampa location and noted the layout. It changes how we plan the work:
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

        {/* ── 07. ARCHITECTURE BLUEPRINT ── */}
        <div id="local-seo-blueprint">

        <LocalSeoArchitectureBlueprint
            badge="// TAMPA BAY LOCAL SEARCH & AI RANKING BLUEPRINT"
            title="4-Layer Local SEO Stack: Google Maps to AI Overviews"
            subtitle="Explore how GBP API optimization, multi-directory citation syncing, structured schema graphs, and AI citation crawlers work together in Tampa Bay local search."
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
                <span>Four Stages of Work</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Our 4-Stage Local SEO Ranking Protocol
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Four phases, starting with the technical audit Tampa owners ask for most:
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
                Evaluating Tampa SEO Agencies: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Five questions to ask any Tampa SEO agency, with our answer to each:
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

        {/* ── INTERACTIVE GOOGLE MAP PACK OPPORTUNITY ESTIMATOR ── */}
        <LocalSeoOpportunityEstimator city="Tampa" region="us" />

        {/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION ── */}
        <FAQ
          eyebrow="TAMPA BAY LOCAL SEARCH INTELLIGENCE"
          headline="Frequently Asked Questions About Local SEO in Tampa FL"
          lead="What Tampa Bay owners ask about audits, cost, towns and trades, answered plainly:"
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
              <span>Google Maps &amp; Local Search</span>
            </div>

            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Start With a Free Tampa Bay Local SEO Audit
            </h2>

            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Ask for a free review of your Google Business Profile and local listings. We will show you what is missing or inconsistent, and what we would fix first.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Claim Your Free SEO Audit" region="us" btnVariant="primary-light" modalVariant="seo" />
            </div>

            <p style={{ marginTop: '28px', fontSize: '13.5px', color: '#8E8E9F' }}>
              Related services: <Link href="/services/ecommerce-development" style={{ color: '#FF5622', textDecoration: 'underline' }}>ecommerce development</Link>, <Link href="/tampa/web-design" style={{ color: '#FF5622', textDecoration: 'underline' }}>Tampa web design</Link>, <Link href="/services/local-seo" style={{ color: '#FF5622', textDecoration: 'underline' }}>Local SEO services</Link>, and <Link href="/services/seo-audit" style={{ color: '#FF5622', textDecoration: 'underline' }}>technical SEO audits</Link>.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
