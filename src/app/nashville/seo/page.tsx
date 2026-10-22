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
const CANONICAL = 'https://factoryjet.com/nashville/seo';

export const metadata: Metadata = {
  title: 'SEO Agency for Nashville, TN Businesses | FactoryJet',
  description:
    'We improve your Google Business Profile and service pages so Nashville, TN customers can find you. Reporting covers calls and inquiries.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Agency for Nashville, TN Businesses | FactoryJet',
    description:
      'We improve your Google Business Profile and service pages so Nashville, TN customers can find you. Reporting covers calls and inquiries.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'SEO for Nashville, TN businesses by FactoryJet' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency for Nashville, TN Businesses | FactoryJet',
    description: 'We improve your Google Business Profile and service pages so Nashville, TN customers can find you. Reporting covers calls and inquiries.',
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
    desc: 'Your categories and listed services compared with the three Nashville firms already in your map pack.',
    icon: '📍',
  },
  {
    num: 'Leads',
    title: 'Inquiry Tracking',
    desc: 'Profile calls, website forms and booked estimates, counted the same way every month.',
    icon: '📈',
  },
  {
    num: 'Site',
    title: 'Technical SEO Review',
    desc: 'Slow themes, plugin clutter and pages Google skips, listed page by page.',
    icon: '🛠️',
  },
  {
    num: 'Plan',
    title: 'Prioritized Next Steps',
    desc: 'What to fix first across Davidson, Williamson and Wilson counties, in order.',
    icon: '📋',
  },
];

const DISTRICTS = [
  {
    corridor: 'Music Row & Midtown Entertainment District',
    focus: 'Entertainment Law, Artist Management & Recording Studios',
    desc: 'The global epicenter of music business and creative talent representation. High-intent local searches demand entertainment legal schemas, verified studio credentials, copyright litigation case studies, and top organic rankings across Davidson County.',
  },
  {
    corridor: 'Downtown Nashville & SoBro Hospitality Core',
    focus: 'Convention Hospitality, Real Estate Developers & Tourism',
    desc: 'Fast-growing urban core and convention center hub. Captures high-volume corporate event inquiries, private venue bookings, and commercial real estate development searches with structured local landing pages and high-authority event citations.',
  },
  {
    corridor: 'West End & Vanderbilt Medical Corridor',
    focus: 'Hospital Networks, Specialized Clinics & Surgery Centers',
    desc: 'The healthcare management capital of America. Multi-location practice architectures, physician directories, HIPAA-compliant patient inquiry workflows, and structured patient review funnels designed for elective surgical and specialty medical centers.',
  },
  {
    corridor: 'The Gulch & Germantown Retail Enclave',
    focus: 'Culinary Brands, Boutique Retail & Creative Studios',
    desc: 'High-end culinary, residential, and creative studio district. High-intent local searches demand visual schema integration, localized service radius targeting, menu and product schemas, and prominent Google Maps 3-Pack rankings.',
  },
  {
    corridor: 'Brentwood & Cool Springs Corporate Gateway',
    focus: 'Corporate Regional HQs, Healthcare Management & Financial Advisory',
    desc: 'Affluent corporate commercial hub in Williamson County. Captures high-net-worth wealth retainers, corporate consulting contracts, and B2B vendor inquiries through nested financial entity schemas and verified regional citations.',
  },
  {
    corridor: 'Murfreesboro & I-24 Logistics Manufacturing Corridor',
    focus: 'Automotive Manufacturing, Equipment Supply & Freight Hubs',
    desc: 'Dense industrial automotive and logistics supply chain corridor. B2B service inquiries require technical capability landing pages, equipment schemas, and sub-second edge performance across Middle Tennessee.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Healthcare Systems, Medical Specialists & Aesthetics',
    headline: 'Capturing High-Value Patients Across West End & Williamson County',
    description:
      'In Middle Tennessee’s competitive healthcare capital, prospective patients research physician credentials thoroughly before scheduling procedures. We optimize Google Business Profiles, implement medical specialty schemas, generate local patient review momentum, and target competitive surgical and orthopedic queries.',
    image: '/images/us/services/dental-seo/hero.webp',
    alt: 'A bright empty reception lobby with a sofa, plants and a white reception desk',
    points: [
      'Multi-practitioner Google Business Profile optimization with procedure sub-categories',
      'MedicalProcedure and Physician structured JSON-LD schema linking hospital affiliations',
      'Hyper-local neighborhood geo-pages targeting West End, Green Hills, and Brentwood',
    ],
  },
  {
    sector: 'Music Entertainment, Creative Agencies & Media Studios',
    headline: 'Topical Authority & AI Citation Engineering for Music City Brands',
    description:
      'Music Row talent managers, recording studios, and indie labels demand high-visibility digital footprints. We build comprehensive topical clusters, artist event schemas, and structured entity graphs that earn citations in ChatGPT Search, Perplexity, and Google AI Overviews.',
    image: '/images/us/nashville/seo/card-recording-studio-mixing-session.webp',
    alt: 'A sound engineer moving faders on a mixing console while a singer in orange headphones sings into a microphone behind the studio glass',
    points: [
      'Topical content graph covering artist representation, studio services, and licensing',
      'Structured EntertainmentBusiness and Organization schema for AI citation retrieval',
      'High-authority music trade publication and entertainment directory synchronization',
    ],
  },
  {
    sector: 'Corporate Law, Litigation & Intellectual Property',
    headline: 'Local Search Work for Nashville Law Firms',
    description:
      'Legal search terms in Davidson and Williamson counties are fiercely contested. We build local SEO structures with practice area knowledge hubs, attorney bar admission schemas, verified case settlement showcases, and consistent local citations.',
    image: '/images/us/services/law-firm-seo/hero.webp',
    alt: 'An empty wood-panelled office with bookshelves and a desk in warm light',
    points: [
      'LegalService and Attorney schema linking Tennessee Bar verified credentials',
      'Localized practice area silos targeting Davidson, Williamson, and Rutherford counties',
      'High-authority local legal directory citations and editorial publication placements',
    ],
  },
  {
    sector: 'Automotive Manufacturing, Supply Chain & Industrial Parts',
    headline: 'Driving High-Ticket Commercial Inquiries Across Middle Tennessee',
    description:
      'Automotive suppliers, industrial fabricators, and equipment distributors along the I-24 and I-65 corridors require steady commercial contract flow. We optimize your local digital footprint to capture plant engineers, procurement directors, and regional operations managers.',
    image: '/images/us/manufacturing-website-design/shop-floor.webp',
    alt: 'A machinist in safety glasses loading a metal part into a CNC lathe beside a tablet showing the part',
    points: [
      'Commercial capability landing pages optimized for regional radius search queries',
      'High-speed mobile performance ensuring immediate quote request submissions',
      'Structured LocalBusiness schema with verified commercial service area parameters',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Six of the top ten results are lists or directories',
    problem: 'We searched "nashville seo company" from a Nashville location on 21 Oct 2026. Only four of the top ten were agency websites. The other six were a LinkedIn article ranking five agencies, DesignRush, Mayple, Built In, Yelp and a company database.',
    solution: 'Nashville buyers read lists before they read websites. The same pattern shows up in many trades. We look up which lists rank for your service in Nashville and get your business onto the ones that accept real listings.',
  },
  {
    num: '02',
    title: 'A business with 3 reviews sat in the map pack',
    problem: 'The three map pack results for that search had 65, 3 and 6 Google reviews. Two of the three had fewer than ten.',
    solution: 'Google ranks local results on relevance, distance and how well known a business is. With reviews this thin, relevance decides a lot: the right primary category, a full services list and a strong page behind the profile.',
  },
  {
    num: '03',
    title: 'People ask Google whether ChatGPT can do SEO',
    problem: 'Google\'s People Also Ask box showed "Can ChatGPT do SEO?" next to "Who is the best SEO agency?" and a question about the major companies based in Nashville.',
    solution: 'Buyers now check AI tools as well as Google. We ask ChatGPT and Perplexity your customers\' questions before we start, record who they name, and check again after the work.',
  },
  {
    num: '04',
    title: 'Nashville searches name the suburb',
    problem: 'Search Console for this page shows people searching by town: Mount Juliet, Nolensville, Belle Meade, Goodlettsville, Franklin and Brentwood, often with the word "cost" attached.',
    solution: 'A single "Nashville" page will not catch a Mount Juliet search. We build a page for each town where you take jobs, with jobs and reviews from that town, and skip towns you do not serve.',
  },
];

const ROADMAP_STEPS = [
  {
    phase: 'Stage 1',
    title: 'Profile and site check',
    desc: 'We review your Business Profile, Search Console (read-only) and top pages against the Nashville firms ranking for your terms.',
    deliverables: ['Written fix list in order of impact', 'Primary category and services corrected'],
  },
  {
    phase: 'Stage 2',
    title: 'Listings and tracking',
    desc: 'We correct your details on Apple Maps, Bing Places, Yelp and the Nashville lists that rank, and set up call and form tracking.',
    deliverables: ['Listing log you can audit', 'Tracking for calls and forms'],
  },
  {
    phase: 'Stage 3',
    title: 'Town pages and answers',
    desc: 'We write pages for the Middle Tennessee towns you serve and add answers to the questions your buyers search.',
    deliverables: ['Pages for towns you actually serve', 'FAQ text with matching schema'],
  },
  {
    phase: 'Stage 4',
    title: 'Reviews and AI checks',
    desc: 'We start a review routine and re-ask AI tools the same buyer questions to see whether they now name you.',
    deliverables: ['Review request routine', 'Monthly note with calls, forms and AI answers'],
  },
];

const EVALUATION_CRITERIA = [
  {
    label: 'Who Does the Work',
    factoryjet: 'You talk directly to the people editing your site and profile.',
    traditional: 'Ask: "Who will make changes to my site and profile, and can I talk to them?"',
  },
  {
    label: 'AI Search',
    factoryjet: 'We ask ChatGPT and Perplexity your buyers\' questions before and after, and keep the answers.',
    traditional: 'Ask: "How will you check what AI tools say about my business?"',
  },
  {
    label: 'Town Pages',
    factoryjet: 'Only towns where you take jobs, each with its own jobs and reviews.',
    traditional: 'Ask: "Which suburbs will you build pages for, and why those?"',
  },
  {
    label: 'Guarantees',
    factoryjet: 'None. Google tells buyers to avoid anyone who guarantees first place.',
    traditional: 'Ask: "Do you guarantee a top three map ranking?"',
  },
  {
    label: 'Ownership',
    factoryjet: 'You own the profile, analytics and site from the first day.',
    traditional: 'Ask: "Who owns my Business Profile and analytics if we part ways?"',
  },
];

const FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Cost & Retainers' },
  { key: 'timeline', label: 'Timeline & Results' },
  { key: 'technical', label: 'GBP & Schemas' },
  { key: 'local', label: 'Nashville Market Focus' },
  { key: 'reporting', label: 'Tracking & Deliverables' },
];

const FAQ_ITEMS = [
  {
    category: 'pricing',
    question: 'What does SEO cost in Nashville and the suburbs?',
    answer: 'Backlinko\'s survey of more than 300 SEO professionals, updated December 2025, puts the average monthly SEO spend at $1,000 to $2,500. The price for a Mount Juliet plumber and a Nashville law firm differ because of how many rivals chase the same terms, not because of the zip code. FactoryJet gives you a fixed price in writing after a short call.',
  },
  {
    category: 'pricing',
    question: 'Should I hire a solo Nashville SEO guy or a team?',
    answer: 'A solo consultant can cost less and you always reach the same person. The risk is cover: if they are sick or busy, nothing moves. A team costs more but spreads the work. Ask either one who edits your site, who answers when they are away, and whether your accounts stay in your name.',
  },
  {
    category: 'timeline',
    question: 'How fast can local SEO move my Nashville map ranking?',
    answer: 'Profile fixes can show within weeks. In our 21 Oct 2026 check of "nashville seo company", two of the three map pack firms had fewer than ten reviews, so a well-built profile can compete quickly in some trades. Busy terms take months. Nobody can promise a date, and Google advises against anyone who guarantees first place.',
  },
  {
    category: 'timeline',
    question: 'What is on a local SEO checklist for a Nashville business?',
    answer: 'Start with eight items. Set the right primary category. List every service. Add real photos. Set your service area by county or town. Make your name, address and phone match on Apple Maps, Bing and Yelp. Give each main service its own page. Ask every happy customer for a review. Track calls and forms.',
  },
  {
    category: 'technical',
    question: 'Can ChatGPT do SEO for my business?',
    answer: 'It can draft page text, suggest questions to answer and explain a report. It cannot log in to your Business Profile, fix a wrong listing on Apple Maps, or see today\'s Nashville results without other tools. Treat its output as a first draft that a person checks against what actually ranks.',
  },
  {
    category: 'technical',
    question: 'How do I get my Nashville business recommended by AI search tools?',
    answer: 'AI tools name businesses they can describe with confidence. Give them consistent facts: the same name, address, phone and service list on your site, your Business Profile and the directories that rank. Write pages that answer buyer questions in the first sentence. Collect reviews that mention the service and the town.',
  },
  {
    category: 'technical',
    question: 'What are local SEO citations, and which ones matter in Nashville?',
    answer: 'A citation is any listing of your business name, address and phone on another site. The ones that count most are Apple Maps, Bing Places, Yelp, the directories for your trade, and local groups such as the Nashville Area Chamber of Commerce if you are a member. Ten correct listings beat a hundred messy ones.',
  },
  {
    category: 'technical',
    question: 'Does WordPress hurt my Nashville SEO?',
    answer: 'No. WordPress ranks fine. Trouble comes from heavy themes that load slowly on phones, stacked plugins that clash, and thin tag and archive pages that Google indexes by mistake. A technical review lists each problem with the page it affects, and most fixes do not need a rebuild.',
  },
  {
    category: 'local',
    question: 'Do you work with businesses in Franklin, Brentwood and Belle Meade?',
    answer: 'Yes, as long as you serve customers there. Franklin and Brentwood sit in Williamson County, and Belle Meade is its own small city inside Nashville. Each one needs its own page with local jobs and reviews. A page that only swaps the town name helps nobody and can hurt the rest of your site.',
  },
  {
    category: 'local',
    question: 'My business is in Goodlettsville or Fairview. Should I target Nashville searches?',
    answer: 'Win your own town first. Google weighs the distance between the searcher and your business, so a Goodlettsville shop shows more easily for Goodlettsville and Hendersonville searches than for downtown Nashville ones. Mention Nashville on your pages where it is true, and add pages for the areas you serve as your reviews grow.',
  },
  {
    category: 'local',
    question: 'How is SEO different for Nashville contractors?',
    answer: 'Contractors are usually service-area businesses, so Google wants the street address hidden and a service area set instead. Your pages should show finished projects with the town named, the trades you hold licenses for, and photos you took. Reviews that mention the job type and town help both Google and buyers.',
  },
  {
    category: 'local',
    question: 'Who is the best SEO agency in Nashville?',
    answer: 'Lists will not settle it. When we searched on 21 Oct 2026, six of the top ten results were lists or directories, each with its own picks. Ask three firms the same questions: what would you fix first, how will you measure it, and who does the work. Compare the answers, not the badges.',
  },
  {
    category: 'reporting',
    question: 'What does the free Nashville SEO audit include?',
    answer: 'A side-by-side of your Business Profile, top pages and listings against the firms that rank for your terms in Nashville today. We ask for read-only Search Console access only. You get a short list of fixes in order, written so you or any developer can act on it.',
  },
  {
    category: 'reporting',
    question: 'How will I know which calls came from Google?',
    answer: 'Your Business Profile shows calls, direction requests and website clicks each month. Website forms can record where each visitor came from. If you want more detail, a tracking number on the profile separates map calls from other calls. We agree on what counts as a lead before the first report.',
  },
  {
    category: 'local',
    question: 'My Tennessee LLC uses a different trading name. What goes on my Google profile?',
    answer: 'The trading name your customers know, as long as it is on your sign, site and invoices. Tennessee\'s Secretary of State calls this an assumed name, meaning a name other than the entity\'s true name, and says Tennessee does not recognize the terms DBA or fictitious name. A registered assumed name is good for five years and can be renewed. Keep your profile, website footer and directory listings on that same name.',
  },
  {
    category: 'technical',
    question: 'Will Google show an AI Overview when Nashville customers search for my service?',
    answer: 'Not always. Google\'s guide to AI features says AI Overviews appear only when its systems judge them useful beyond the regular results, and that they often do not trigger. When one does appear, the links come from pages that are indexed and allowed to show a snippet. So the same work pays off either way: a page Google can read, with a clear answer near the top.',
  },
  {
    category: 'pricing',
    question: 'Can I pay for a one-time Nashville SEO project instead of a monthly retainer?',
    answer: 'Yes. A one-time project fits when the problems are clear: a profile set up wrong, listings with an old address, a site Google struggles to read. We scope it, put a fixed price in writing and hand over the finished work with notes your team can follow. If you later want ongoing help, that is a separate choice with no monthly minimum.',
  },
  {
    category: 'reporting',
    question: 'Can you work on a website another Nashville agency built?',
    answer: 'Usually, yes. We need admin access to the site, manager access to your Google Business Profile and access to Search Console. Before changing anything, we check who owns the domain, hosting and analytics accounts, because a past agency sometimes holds them. If they do, ask them to move ownership into an account in your name first. That step protects you whoever does your SEO next.',
  },
  {
    category: 'local',
    question: 'What happens to my map ranking if I move my Nashville office?',
    answer: 'Expect some change. Distance from the searcher is one of Google\'s main local factors, so a move from East Nashville to Brentwood shifts which nearby searchers see you. Update the address on your profile first, then on your website and listings, so they all match. Do not keep the old address to hold onto rankings. Google\'s profile rules require your real location.',
  },
  {
    category: 'local',
    question: 'Should my Nashville service area say Nashville or Davidson County?',
    answer: 'Pick whatever matches where you work, and be specific. Google\'s service-area setting takes cities, ZIP codes or other areas, up to 20 in total, and no longer accepts a radius drawn around your base. A plumber covering Davidson County and part of Williamson might list Nashville, Antioch, Hermitage, Brentwood and Franklin. Every area you add should be somewhere you would send a truck this week.',
  },
];

const SOURCES: ReadonlyArray<{ publisher: string; title: string; url: string; note: string }> = [
  {
    publisher: 'Tennessee Secretary of State',
    title: 'All Frequently Asked Questions for Businesses',
    url: 'https://sos.tn.gov/businesses/faqs?page=1',
    note: 'An assumed name is a name other than the entity\'s true name. Tennessee does not recognize "DBA" or fictitious names, and an assumed name is good for five years and can be renewed.',
  },
  {
    publisher: 'Google Search Central',
    title: 'AI features and your website',
    url: 'https://developers.google.com/search/docs/appearance/ai-features',
    note: 'AI Overviews show only when Google judges them additive to classic results and often do not trigger. A page must be indexed and eligible for a snippet to appear as a supporting link.',
  },
  {
    publisher: 'Google Business Profile Help',
    title: 'Manage your service areas for service-area & hybrid businesses',
    url: 'https://support.google.com/business/answer/9157481?hl=en',
    note: 'Service areas are set by city, postal code or other area, up to 20 of them. A radius around the business can no longer be set.',
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
  name: 'Nashville Local SEO & Google Maps Optimization',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  serviceType: 'Local SEO, Google Business Profile Management & AI Search Optimization',
  description:
    'We improve your Google Business Profile and service pages so Nashville, TN customers can find you. Reporting covers calls and inquiries.',
  areaServed: [{ '@type': 'City', name: 'Nashville' }, { '@type': 'State', name: 'Tennessee' }],
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'SEO Agency for Nashville, TN Businesses | FactoryJet',
  description: 'We improve your Google Business Profile and service pages so Nashville, TN customers can find you. Reporting covers calls and inquiries.',
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
    { '@type': 'ListItem', position: 2, name: 'AI Search & SEO', item: 'https://factoryjet.com/services/ai-seo' },
    { '@type': 'ListItem', position: 3, name: 'Nashville', item: CANONICAL },
  ],
};

export default function NashvilleSeoPage() {
  return (
    <>
      <script id="bna-seo-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="bna-seo-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="bna-seo-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="bna-seo-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>Local SEO for Nashville businesses</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Local SEO for Nashville Service Businesses
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  We fix your Google Business Profile, your service pages and your listings so people in Nashville and the surrounding towns find you, call you and book. Reports count calls and inquiries before rankings.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get my free Nashville SEO audit" region="us" btnVariant="primary-dark" modalVariant="seo" />
                  <a href="#bna-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Nashville Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/nashville/hero-nashville.webp"
                  alt="A city skyline at dusk reflected in a river, with a lit bridge"
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
                  Engineered for Nashville&apos;s High-Value Commercial Sectors
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  Nashville is a list-heavy market: when we searched "nashville seo company" on 21 Oct 2026, six of the top ten results were lists or directories. We make sure your business shows up correctly on the lists, the map and your own pages.
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

        {/* ── 04. NASHVILLE DISTRICTS & INDUSTRY DIRECTORY ── */}
        <section id="bna-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Middle Tennessee Commercial Corridor Depth</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored Local SEO for Nashville&apos;s Core Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From Music Row studios to West End healthcare hubs and Brentwood corporate offices:
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
                Specialized Local Search Architectures for Nashville
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every high-value commercial sector in Tennessee demands tailored keyword targeting, entity schemas, and conversion pathways:
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
                <span>Nashville Search Check, 21 Oct 2026</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                What a Nashville Buyer Sees on Google Today
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                We searched from a Nashville location and recorded the results. Four findings shape how we work here:
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
          <section className="pp-sec tint" aria-labelledby="nashville-client-proof">
          <div className="pp-wrap">
            <p className="pp-mlabel">Website and ongoing search work</p>
            <h2 id="nashville-client-proof">Helping a specialist service business explain what it does</h2>
            <p className="pp-lead" style={{ maxWidth: '68ch', marginTop: '16px' }}>
              FactoryJet built Yadav Entrance Automation’s website and continues its SEO and AI search work. The content explains the entrance systems the business installs and services, so buyers can understand their options before getting in touch.
            </p>
            <p className="pp-lead" style={{ maxWidth: '68ch', marginTop: '12px', fontSize: '15px' }}>
              This is an example of our implementation work for one client. Your Nashville audit starts with your services, your customers, and your local competitors.
            </p>
            <div className="rv-actions" style={{ marginTop: '24px' }}>
              <Link href="/case-studies/yadav-entrance-automation-website-seo" className="rv-btn-secondary">Read the client project →</Link>
              <ModalCTAButton label="Request my Nashville SEO audit" region="us" btnVariant="primary-dark" modalVariant="seo" />
            </div>
            <p style={{ marginTop: '20px' }}><Link href="/pricing#seo" className="rv-btn-secondary">How SEO scope and fees work →</Link></p>
          </div>
        </section>

        <LocalSeoArchitectureBlueprint
            badge="// NASHVILLE LOCAL SEARCH & AI RANKING BLUEPRINT"
            title="4-Layer Local SEO Stack: Google Maps to AI Overviews"
            subtitle="Explore how GBP API optimization, multi-directory citation syncing, structured schema graphs, and AI citation crawlers work together in Nashville local search."
            city="Nashville"
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
                Four stages, in order, for a Middle Tennessee business:
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
                Evaluating Nashville SEO Agencies: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Five questions worth asking any Nashville SEO firm, with our own answers:
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
        <LocalSeoOpportunityEstimator city="Nashville" region="us" />

        {/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION ── */}
        <FAQ
          eyebrow="NASHVILLE LOCAL SEARCH INTELLIGENCE"
          headline="Frequently Asked Questions About Local SEO in Nashville TN"
          lead="What Nashville owners ask about cost, suburbs, AI search and choosing a firm:"
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
            <SeoCityLinksUS currentCity="nashville" />
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
              Start With a Free Nashville Local SEO Audit
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
