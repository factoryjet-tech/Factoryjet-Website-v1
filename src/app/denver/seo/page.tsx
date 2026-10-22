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
import SeoCityLinksUS from '@/components/v2/SeoCityLinksUS';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-10-22';
const CANONICAL = 'https://factoryjet.com/denver/seo';

export const metadata: Metadata = {
  title: 'SEO Agency for Denver, CO Businesses | FactoryJet',
  description:
    'We work on your Google Business Profile, service pages, listings and technical SEO so Denver, CO customers can find you. Month-to-month terms.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Agency for Denver, CO Businesses | FactoryJet',
    description:
      'We work on your Google Business Profile, service pages, listings and technical SEO so Denver, CO customers can find you. Month-to-month terms.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'SEO for Denver, CO businesses by FactoryJet' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency for Denver, CO Businesses | FactoryJet',
    description: 'We work on your Google Business Profile, service pages, listings and technical SEO so Denver, CO customers can find you. Month-to-month terms.',
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
    desc: 'Category, services, hours and service area checked against the Denver map pack for your terms.',
    icon: '📍',
  },
  {
    num: 'Leads',
    title: 'Inquiry Tracking',
    desc: 'Calls, forms and bookings agreed up front, so every report counts the same things.',
    icon: '📈',
  },
  {
    num: 'Data',
    title: 'Listing Consistency',
    desc: 'Your details on Apple Maps, Bing, Yelp and Facebook matched to your profile, one listing at a time.',
    icon: '🛡️',
  },
  {
    num: 'Site',
    title: 'Technical SEO Review',
    desc: 'Pages Google cannot read, slow mobile templates and broken redirects, each named with its URL.',
    icon: '⚡',
  },
];

const DISTRICTS = [
  {
    corridor: 'Lower Downtown (LoDo) & Union Station',
    focus: 'Fintech Platforms, Venture Capital & High-Growth Tech',
    desc: 'The vibrant urban innovation and legal corridor. Captures high-ticket corporate legal retainers, tech venture inquiries, and commercial advisory contracts.',
  },
  {
    corridor: 'Denver Tech Center (DTC) & Greenwood Village',
    focus: 'Enterprise SaaS, Telecommunications & Corporate HQ',
    desc: 'Major corporate and software campus core. B2B service queries demand enterprise capability schemas, localized authority, and sub-second edge speeds.',
  },
  {
    corridor: 'Cherry Creek North',
    focus: 'Private Wealth Advisory, Aesthetic Surgery & Concierge Medicine',
    desc: 'Affluent executive and specialized medical enclave. Intense competition for high-net-worth estate planning, cosmetic surgery consultations, and wealth retainers.',
  },
  {
    corridor: 'RiNo & Five Points',
    focus: 'Creative Agencies, Architecture Studios & Outdoor Lifestyle',
    desc: 'Renowned creative and architectural core. Multi-location practice architectures, studio directories, and verified customer review funnels.',
  },
  {
    corridor: 'Boulder & US-36 Tech Corridor',
    focus: 'CleanTech, Quantum Computing & Aerospace Software',
    desc: 'World-class scientific and deep tech nexus. Requires deep topical content graphs, researcher schemas, and institutional citations across Colorado.',
  },
  {
    corridor: 'Golden & West Metro Industrial',
    focus: 'Advanced Manufacturing, Engineering & Outdoor Gear',
    desc: 'Precision industrial and outdoor brand manufacturing. Features technical capability landing pages, equipment schemas, and RFQ workflows.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Private Wealth Advisory, Estate Planning & Corporate Law',
    headline: 'Local Search Work for Denver Firms',
    description:
      'Legal and financial search queries across Denver and Arapahoe counties are intensely contested. We build local SEO structures with practice area knowledge hubs, attorney bar admission schemas, verified case outcome showcases, and consistent local citations.',
    image: '/images/us/denver/law-firm.webp',
    alt: 'A law office reception with a glass meeting room and a mountain-backed skyline through the windows',
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
    alt: 'A bright clinic reception with a marble desk, pendant lights and armchairs',
    points: [
      'Multi-practitioner Google Business Profile optimization with procedure sub-categories',
      'MedicalProcedure and Physician structured JSON-LD schema linking hospital affiliations',
      'Hyper-local neighborhood geo-pages targeting Cherry Creek, Greenwood Village, and Boulder',
    ],
  },
  {
    sector: 'Outdoor Recreation Brands, Gear Manufacturing & Active Lifestyle',
    headline: 'Local & Regional Search for Colorado Outdoor Leaders',
    description:
      'From Golden technical gear builders to Boulder active apparel brands, outdoor consumers demand immediate regional store discovery. We optimize Google Business Profiles, embed product catalogs, synchronize dealer networks, and capture high-intent gear searches.',
    image: '/images/us/denver/seo/card-ski-waxing-bench.webp',
    alt: 'A technician scraping wax from a ski clamped to a tuning bench while a woman fits a binding, orange ski boots on the floor',
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
    alt: 'A builder in a white hard hat leaning on site plans at a timber-framed building, a city skyline behind him',
    points: [
      'Service area radius optimization covering Denver, Aurora, Lakewood, and Littleton',
      'High-speed mobile performance ensuring immediate project bidding phone calls',
      'Structured LocalBusiness and Contractor schema markup',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Two Facebook posts made page one',
    problem: 'On 21 Oct 2026 we searched "local seo denver" from a Denver location. Two of the top ten results were Facebook posts. A Semrush list of Colorado agencies, a company database and a designers directory took three more spots.',
    solution: 'Half of page one was not an agency website. Google indexes public posts and directories, so your Facebook page and directory listings need the same name, phone and services as your Business Profile. We check each one.',
  },
  {
    num: '02',
    title: 'The map pack ran from 6 reviews to 80',
    problem: 'The three map results for that search had 6, 80 and 54 Google reviews. The 6-review business held its place next to firms with nine and thirteen times as many.',
    solution: 'Google says local ranking rests on relevance, distance and how well known a business is. Reviews feed the last one. Category, services and the page your profile points to feed the first, and that is where we start.',
  },
  {
    num: '03',
    title: 'No AI Overview, no questions box',
    problem: 'For that search Google showed the map pack, ten regular results and related searches. No AI Overview appeared, and no People Also Ask box.',
    solution: 'For local service searches in Denver, the map and the regular results still decide who gets the call. We put the first months of work there, then check AI assistants separately with your buyers\' own questions.',
  },
  {
    num: '04',
    title: 'Denver searchers ask for audits',
    problem: 'Search Console for this page shows a run of audit searches: "denver seo audit", "local seo audit denver" and "denver website seo audit service", along with "google maps optimization denver".',
    solution: 'Denver owners want to know what is wrong before they pay for a plan. Our audit is free and written so you can act on it with or without us. It covers your profile, listings, pages and technical health.',
  },
];

const ROADMAP_STEPS = [
  {
    phase: 'Phase 01',
    title: 'Free audit and quick fixes',
    desc: 'We compare your profile, listings and pages with the Denver businesses ranking for your terms, then fix the problems that cost calls.',
    deliverables: ['Audit with a ranked fix list', 'Category, hours and services corrected'],
  },
  {
    phase: 'Phase 02',
    title: 'Listings and locations',
    desc: 'We match your details across Apple Maps, Bing, Yelp and Facebook. Multi-location Colorado businesses get one profile and one page per site.',
    deliverables: ['Listing log you can check', 'Location pages for each verified site'],
  },
  {
    phase: 'Phase 03',
    title: 'Pages for the areas you serve',
    desc: 'We write service pages and area pages for the parts of the metro where you take work, from Golden to Commerce City.',
    deliverables: ['Service pages with your own project detail', 'Area pages only where you serve'],
  },
  {
    phase: 'Phase 04',
    title: 'Reviews, tracking and AI checks',
    desc: 'We set up review requests, call and form tracking, and a monthly check of what AI assistants say about you.',
    deliverables: ['Review request routine', 'Monthly note: work done, calls, forms'],
  },
];

const EVALUATION_CRITERIA = [
  {
    label: 'Switching Providers',
    factoryjet: 'Admin access to every account stays with you, and nothing we build is removed if you leave.',
    traditional: 'Ask: "If we leave, which accounts and pages do we keep?"',
  },
  {
    label: 'Multi-Location',
    factoryjet: 'One verified profile and one page per location, each with its own details and photos.',
    traditional: 'Ask: "How will you handle each of our Colorado locations?"',
  },
  {
    label: 'Audit Scope',
    factoryjet: 'Profile, listings, pages and technical health. Free, with read-only Search Console access.',
    traditional: 'Ask: "What does your audit check, and what access do you need for it?"',
  },
  {
    label: 'Expected Results',
    factoryjet: 'A dated fix list and monthly calls and forms. No ranking guarantee.',
    traditional: 'Ask: "What results should we expect, and when?"',
  },
  {
    label: 'Local Proof',
    factoryjet: 'Yes. We pull the live results from a Denver location in the first call.',
    traditional: 'Ask: "Can you show who ranks for our terms in Denver right now?"',
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
    category: 'contracts',
    question: 'How much does local SEO cost in Denver?',
    answer: 'WebFX\'s 2026 pricing guide puts local SEO retainers at $500 to $3,000 a month and one-time local projects at $500 to $5,000. A single-location Denver shop in a quiet trade sits near the bottom. A multi-location group or a busy category like personal injury sits near the top. FactoryJet quotes a fixed price in writing after a scoping call.',
  },
  {
    category: 'contracts',
    question: 'How do I switch SEO providers in Denver without losing rankings?',
    answer: 'Get admin access to everything before you give notice: Business Profile, Search Console, analytics, your domain and your website. Download past reports. Keep page addresses the same, or redirect any that change. Ask the old firm not to remove content or listings it set up in your name. Rankings rarely drop from a clean handover.',
  },
  {
    category: 'contracts',
    question: 'What results can I expect from a Denver SEO company?',
    answer: 'Expect finished work on a schedule: fixes made, pages written, listings corrected. Expect calls and forms counted each month. Do not expect a promised ranking. Google\'s own advice on hiring an SEO says to find someone else if a firm guarantees first place. Profile fixes can show in weeks, busy terms take months.',
  },
  {
    category: 'local',
    question: 'What does Google Maps optimization in Denver involve?',
    answer: 'The work happens mostly inside your Business Profile and on the page it links to. Pick the primary category that matches your main service. List every service. Keep hours right, including holidays. Add real photos. Set a service area if customers do not visit you. Then build reviews and reply to them, the good and the bad.',
  },
  {
    category: 'local',
    question: 'How should a multi-location Colorado business manage Google Business Profiles?',
    answer: 'Give each real location its own verified profile, and give each one its own page on your site with that address and phone. Do not share photos or descriptions across locations. Google offers bulk verification for businesses with 10 or more locations. Keep one person or firm in charge so details do not drift apart.',
  },
  {
    category: 'local',
    question: 'Can Facebook posts rank for Denver local searches?',
    answer: 'Yes. When we checked "local seo denver" on 21 Oct 2026, two Facebook posts sat in the top ten. Google indexes public posts like any page. That is useful, but you do not control how long a post ranks. Keep your Facebook details matching your profile, and put your main answers on your own site.',
  },
  {
    category: 'corridors',
    question: 'Do you help businesses in Commerce City, Golden and the Denver Tech Center?',
    answer: 'Yes. Each area pulls a different search. Commerce City searches lean industrial and trades, Golden mixes local services with visitors, and the Tech Center is mostly offices. Google weighs distance from the searcher, so a profile in one area will not rank everywhere. Area pages help in regular results where you take work.',
  },
  {
    category: 'corridors',
    question: 'Should a Boulder business target Denver searches?',
    answer: 'Win Boulder first. Map results favor businesses close to the searcher, and Boulder buyers often search "Boulder" by name. If you also take Denver work, add a Denver page with jobs and reviews from there. A Boulder address will rarely show in central Denver map results, however good the profile.',
  },
  {
    category: 'technical',
    question: 'What is in a Denver SEO audit, and what should it cost?',
    answer: 'WebFX reports that 43% of businesses pay $101 to $750 for a one-time SEO audit. A useful audit covers your Business Profile, listings, page content, technical health and the businesses ranking above you. Ours is free and asks for read-only Search Console access, which is what Google advises at that stage.',
  },
  {
    category: 'technical',
    question: 'Can a Denver cannabis business use SEO?',
    answer: 'Yes, and it matters more for cannabis than most trades because Google\'s ad policies leave little room for paid search. Organic pages and map listings carry the load. Keep the profile within Google\'s rules for your category, show your hours and menu as text, follow Colorado\'s advertising rules on every page, and ask customers for reviews.',
  },
  {
    category: 'technical',
    question: 'How does SEO work for Denver restaurants and hotels?',
    answer: 'Restaurants win on the profile: correct hours, menu as text on your site, real photos, a reservation link and replies to reviews. Hotels compete with booking sites for their own name, so a fast direct-booking page and an accurate profile matter most. Both need updates before ski season and summer.',
  },
  {
    category: 'technical',
    question: 'Does AI search change local SEO in Denver?',
    answer: 'Not yet for most local searches. Our 21 Oct 2026 check of "local seo denver" showed no AI Overview. People do ask ChatGPT and Perplexity which Denver firm to hire. Those tools pull from your site, profile, listings and reviews, so the same work serves both. We check what they say about you each month.',
  },
  {
    category: 'attribution',
    question: 'How do I measure local SEO results in Denver?',
    answer: 'Watch three numbers. Calls and direction requests from your Business Profile. Form fills and calls from your website, with the source recorded. Booked jobs you can trace back to those. Rankings help explain the numbers, but they are not the goal. We agree what counts before the first month ends.',
  },
  {
    category: 'attribution',
    question: 'Do you work with Denver architects and home service companies?',
    answer: 'Yes. Architects win with project pages that name the neighborhood, the building type and the problem solved, plus photos you own. Home service firms win with a service-area profile, a page per service and reviews that mention the job. Both need the same name, address and phone everywhere.',
  },
  {
    category: 'local',
    question: 'Do I need a Colorado trade name before my Google profile uses a brand name?',
    answer: 'If the brand differs from your legal name, yes. The Colorado Secretary of State says a for-profit business not using its entity\'s true name, or a person not using their legal first and last name, must file a trade name. Its FAQ also notes trade names are not unique, so two Denver businesses can file the same one. Your address, phone number and reviews are what tell them apart on Google.',
  },
  {
    category: 'local',
    question: 'Can my Denver business list a coworking space address on Google?',
    answer: 'Only if you work from it every business day. Google\'s profile rules say an office in a coworking space qualifies only if it has clear signage, receives customers during business hours and is staffed by your own people in those hours. A hot desk you use twice a week does not meet that bar. If you go to customers instead, set up as a service-area business with no address shown.',
  },
  {
    category: 'contracts',
    question: 'What should a Denver SEO package include?',
    answer: 'Named deliverables with dates, not a count of hours. A fair package lists which Business Profile fixes, which pages written or rewritten, which listings corrected and what tracking is set up. It should also say who owns each account and how much notice you give to stop. If a package only promises improved rankings or a number of SEO hours, ask what you will have in hand at the end of month three.',
  },
  {
    category: 'technical',
    question: 'Is geofencing the same as local SEO?',
    answer: 'No. Geofencing is an advertising method: you pay to show ads to phones inside a mapped area, such as the blocks around a competitor\'s store. Local SEO is unpaid and works through your Google profile, website pages and reviews. Both aim at nearby buyers, so they can run side by side. Geofencing stops the day the ad budget stops. We do the SEO side and do not sell geofencing ads.',
  },
  {
    category: 'local',
    question: 'Should my Denver and Colorado Springs locations use different names on Google?',
    answer: 'Only if the signs on the buildings differ. Google\'s rules say all locations should share one name unless the business\'s real-world name consistently varies by location, and locations offering the same service should share a category. So your brand stays the same at both sites. Put the city in each address and on each location\'s page on your website, not in the profile name.',
  },
  {
    category: 'attribution',
    question: 'Can a Denver small business do its own local SEO?',
    answer: 'Much of it, yes. Google\'s own page on hiring an SEO says a small local business can probably do much of the work itself, using free tools like Search Console. Keep your profile complete, ask every happy customer for a review and answer common questions on your site. Bring in help for technical problems, site moves or several locations, where a mistake costs more to undo.',
  },
];

const SOURCES: ReadonlyArray<{ publisher: string; title: string; url: string; note: string }> = [
  {
    publisher: 'Colorado Secretary of State',
    title: 'Business FAQs: Trade names',
    url: 'https://www.coloradosos.gov/pubs/business/FAQs/tradeNames.html',
    note: 'A for-profit business not using its entity\'s true name, or an individual not using their legal first and last name, must file a trade name. Trade names are not unique, so more than one person can file the same one.',
  },
  {
    publisher: 'Google Business Profile Help',
    title: 'Guidelines for representing your business on Google',
    url: 'https://support.google.com/business/answer/3038177?hl=en',
    note: 'Coworking addresses qualify only with clear signage, customers received and staff present during business hours. Locations share one name unless the real-world name varies.',
  },
  {
    publisher: 'Google Search Central',
    title: 'Do you need an SEO?',
    url: 'https://developers.google.com/search/docs/fundamentals/do-i-need-seo',
    note: 'Google says a small local business can probably do much of the SEO work itself.',
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
  name: 'Denver Local SEO & Google Maps Optimization',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Local SEO, Google Business Profile Management & AI Search Optimization',
  description:
    'We work on your Google Business Profile, service pages, listings and technical SEO so Denver, CO customers can find you. Month-to-month terms.',
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
  name: 'SEO Agency for Denver, CO Businesses | FactoryJet',
  description: 'We work on your Google Business Profile, service pages, listings and technical SEO so Denver, CO customers can find you. Month-to-month terms.',
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
    { '@type': 'ListItem', position: 3, name: 'Denver', item: CANONICAL },
  ],
};

export default function DenverSeoPage() {
  return (
    <>
      <script id="den-seo-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
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
                  <span>Local SEO for Denver businesses</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Local SEO for Denver Businesses, From LoDo to the Tech Center
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 24px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  FactoryJet fixes your Google Business Profile, your service pages and your technical SEO so Denver buyers find you on the map and call. Start with a free audit you can use whether or not you hire us.
                </p>

                {/* Answer-First Brief */}
                <div style={{ background: '#F6F6F9', borderLeft: '3px solid #FF5622', padding: '14px 18px', borderRadius: '0 12px 12px 0', marginBottom: '28px', maxWidth: '52ch' }}>
                  <p style={{ fontSize: '13.5px', color: '#141414', lineHeight: 1.55, margin: 0, fontWeight: 500 }}>
                    <strong style={{ color: '#FF5622' }}>Where we start:</strong> We check how customers find your business, which services matter most, and where your website or business listings lose them. Then we prioritize profile updates, website fixes, and content around those opportunities, so the work follows how your customers choose a provider.
                  </p>
                </div>

                <div className="rv-actions">
                  <ModalCTAButton label="Get my free Denver SEO audit" region="us" btnVariant="primary-dark" modalVariant="seo" />
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
                  alt="A downtown skyline in front of snow-capped mountains under a blue sky"
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
                How Local SEO Works for Colorado Businesses
              </h2>
              <p style={{ fontSize: '14.5px', color: '#494852', lineHeight: 1.6, margin: 0 }}>
                Google says it ranks local results mainly on relevance, distance and how well known a business is. Distance is fixed by where you are. Relevance comes from your profile category, services and pages. Being well known comes from reviews and from other sites mentioning you. A Denver plan works on those last two, in that order.
              </p>
            </div>
          </div>
        </section>

        {/* ── 02. TOOLS AND PLATFORMS MARQUEE TICKER (plain tool names, no partner or certification claims) ── */}
        <section style={{ backgroundColor: '#F6F6F9', borderBottom: '1px solid #E6E6EC', padding: '36px 0' }}>
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

        {/* ── 03. ABOUT US & 2x2 BENTO COUNTER SECTION ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(56px, 8vh, 96px) 0' }}>
          <div className="pp-wrap">
            <div className="rv-about-grid">
              {/* Left Column: Clean Organic Curved Photo Frame */}
              <div className="rv-curved-frame-2">
                <Image
                  src="/images/us/denver/tech-office.webp"
                  alt="A busy open-plan office with people working at laptops and a mountain-backed city skyline through the windows"
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
                  On page one for "local seo denver" on 21 Oct 2026, half the results were Facebook posts, lists and directories. Your details need to match in all of those places, and your own pages need to answer what Denver buyers ask.
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

        {/* ── 06. PAIN POINTS & FACTORYJET DIFFERENCE ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Denver Search Check, 21 Oct 2026</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                What Page One Looks Like for Local SEO in Denver
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                We ran "local seo denver" from a Denver location. Four things stood out:
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
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: '48px 0 16px' }}>
          <div className="pp-wrap">
            <div className="pp-card">
              <p className="pp-mlabel">Website and ongoing search work</p>
              <h2>Yadav Entrance Automation</h2>
              <p className="pp-lead">
                FactoryJet built the website for Yadav Entrance Automation, a business that installs and services automatic entrance systems. We also provide ongoing SEO and AI search work, with content organized around the systems customers need and the services they buy.
              </p>
              <Link href="/case-studies/yadav-entrance-automation-website-seo" className="rv-btn-secondary">
                Explore the Yadav Entrance Automation project
              </Link>
            </div>
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
                Our 4-Phase Denver SEO Roadmap
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Four phases for a Front Range business, starting with the free audit:
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
                Evaluating Denver SEO Companies: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Five questions to ask a Denver SEO company, with how we answer each:
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

        {/* ── 10. INTERACTIVE LEAD OPPORTUNITY ESTIMATOR & FAQ ── */}
        <LocalSeoOpportunityEstimator city="Denver" region="us" />

        <FAQ
          eyebrow="DENVER SEO INTELLIGENCE"
          headline="Frequently Asked Questions About Local SEO in Denver CO"
          lead="What Denver owners search before hiring: cost, audits, switching firms, multi-location profiles and more:"
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
              <span>Denver Local SEO</span>
            </div>

            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Start With a Free Denver SEO Audit
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
