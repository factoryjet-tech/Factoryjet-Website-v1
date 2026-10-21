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

const PAGE_MODIFIED = '2026-10-21';
const CANONICAL = 'https://factoryjet.com/austin/seo';

export const metadata: Metadata = {
  title: 'SEO Agency for Austin, TX Businesses | FactoryJet',
  description:
    'Google Business Profile and technical SEO work for Austin, TX businesses. Scope and terms are put in writing before work starts.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Agency for Austin, TX Businesses | FactoryJet',
    description:
      'Google Business Profile and technical SEO work for Austin, TX businesses. Scope and terms are put in writing before work starts.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'SEO for Austin, TX businesses by FactoryJet' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency for Austin, TX Businesses | FactoryJet',
    description: 'Google Business Profile and technical SEO work for Austin, TX businesses. Scope and terms are put in writing before work starts.',
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
    desc: 'Categories, services and the Austin areas you take jobs in, checked against the firms in your map pack.',
    icon: '📍',
  },
  {
    num: 'Leads',
    title: 'Inquiry Tracking',
    desc: 'Calls, forms and booked jobs, agreed with you before the first month ends.',
    icon: '📈',
  },
  {
    num: 'Site',
    title: 'Technical SEO Review',
    desc: 'Indexing and mobile problems on the service pages Austin buyers land on.',
    icon: '🛠️',
  },
  {
    num: 'Plan',
    title: 'Prioritized Next Steps',
    desc: 'A ranked fix list with an owner and a date beside each item.',
    icon: '📋',
  },
];

const DISTRICTS = [
  {
    corridor: 'Downtown & The Capitol District',
    focus: 'Law Firms, Financial Advisory & Corporate Services',
    desc: 'Dense commercial core spanning Congress Avenue, West 6th, and Seaholm. Corporate buyers and legal clients evaluate technical credentials, page speed, and practice area depth before calling.',
  },
  {
    corridor: 'The Domain & Silicon Hills',
    focus: 'Tech Startups, Enterprise SaaS & Venture-Backed Firms',
    desc: 'The Silicon Hills tech artery along MoPac and 183 housing major regional campuses for Apple, Dell, and IBM. High-level decision-makers skip sponsored ads on reflex and evaluate documentation, sub-second performance, and clear architectural depth.',
  },
  {
    corridor: 'East Austin & Mueller Urban Village',
    focus: 'Creative Agencies, Hospitality, Dining & Boutiques',
    desc: 'Fast-moving, highly visual discovery along East Cesar Chavez, 11th Street, and the Mueller development. Fresh high-resolution photography, accurate business hours, structured menu schema, and consistent review velocity outperform standard generic copy.',
  },
  {
    corridor: 'South Congress & Zilker Park',
    focus: 'Retail Flagships, Experiential Dining & Wellness',
    desc: 'High-traffic lifestyle and tourist corridors along South Congress Avenue and Barton Springs Road. Local search volumes surge during major annual events like South by Southwest in March, Austin City Limits in October, and Formula 1 at Circuit of the Americas.',
  },
  {
    corridor: 'Northwest Hills & The Arboretum',
    focus: 'Healthcare Clinics, Dental Specialists & Family Medicine',
    desc: 'Affluent residential and medical corridor along Loop 360 and US-183. High-income patients conduct deep research on provider credentials, clinical reviews, and Google Maps directions before booking appointments.',
  },
  {
    corridor: 'Round Rock & Williamson County',
    focus: 'Home Services, Mechanical Contractors & Multi-Location',
    desc: 'Rapidly expanding northern submarket encompassing Round Rock, Cedar Park, and Georgetown. Capturing suburban market share requires dedicated geographic landing pages with distinct LocalBusiness schema rather than thin cookie-cutter templates.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Healthcare, Dental & Specialized Medical Clinics',
    headline: 'Converting High-Intent Patients Across Central Texas',
    description:
      'Medical practices in Austin face intense competition from hospital networks and private groups. We build verified medical entity schema, optimize provider profiles on Google Maps, and write clinical service pages that answer patient symptoms with absolute accuracy. This gives Google Maps and AI search overviews clear, accurate information about the practice.',
    image: '/images/us/services/dental-seo/hero.webp',
    alt: 'A bright empty reception lobby with a sofa, plants and a white reception desk',
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
      'Austin homeowners search under urgent pressure when air conditioners fail during triple-digit July heatwaves or winter freezes hit Travis County. We work on your Google Maps listing with instant phone tracking, neighborhood-level service pages, and verified licensing credentials.',
    image: '/images/us/services/roofing-seo/hero.webp',
    alt: 'Aerial view of suburban shingle rooftops at golden hour',
    points: [
      'Neighborhood landing pages for Westlake, Circle C, Steiner Ranch, and Lakeway',
      'Live call recording and conversion tracking integrated into Google Analytics 4',
      'Steady review requests to compete with multi-truck competitors',
    ],
  },
  {
    sector: 'Legal Practices, Corporate Counsel & Litigation',
    headline: 'Winning High-Value Legal Retainers in Travis County',
    description:
      'Legal keywords are some of the most expensive to advertise on in Google Ads. We build deep practice-area content hubs and earn relevant links, so the firm can be found in organic results as well as in paid ads.',
    image: '/images/us/austin/seo/card-law-office-document-review.webp',
    alt: 'Two lawyers at a meeting table, one reading a stapled document and the other writing on a yellow legal pad, with bookshelves behind them',
    points: [
      'Detailed practice area silos for personal injury, corporate law, and IP litigation',
      'Attorney profile schema with bar admissions and professional credentials',
      'High-authority local media and legal directory citations with clean NAP consistency',
    ],
  },
  {
    sector: 'B2B Tech, SaaS & Precision Manufacturing',
    headline: 'Search Visibility for National Procurement',
    description:
      'Austin technology companies and advanced manufacturers sell to sophisticated enterprise buyers who conduct exhaustive due diligence before contacting sales. We optimize technical whitepapers, product capability matrices, and software solution pages so they can be found for technical comparison queries and read by generative AI search tools.',
    image: '/images/us/austin/seo/card-precision-part-inspection.webp',
    alt: 'An engineer in a white lab coat measuring a small steel part with a caliper while a colleague views a 3D model of the part on a monitor',
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
    title: 'Half of page one is lists, not agencies',
    problem: 'On 21 Oct 2026 we pulled Google\'s top 10 for "austin seo company" from an Austin location. Five of the ten were lists or directories: a Semrush agency list, a Built In Austin article, Clutch, a Reddit thread and a company database.',
    solution: 'Austin buyers shortlist from those lists before they open a vendor\'s website. We find the lists that rank for your own service terms and check that your business is on them with matching details.',
  },
  {
    num: '02',
    title: 'A firm with 10 reviews still made the map pack',
    problem: 'The three map pack results for that search had 63, 10 and 61 Google reviews. Review count matters, yet the 10-review business sat in the top three anyway.',
    solution: 'Google says local results rest mainly on relevance, distance and how well known a business is. We start with relevance, the part you control fastest: categories, listed services and the page your profile links to.',
  },
  {
    num: '03',
    title: 'Multi-city agency pages rank in Austin too',
    problem: 'Three of the five agency results were city pages from agencies that publish one page per city. One of those agencies had a city page on page one in 5 of the 8 US city searches we ran that day.',
    solution: 'A page written for Austin should carry facts only your Austin business has: the neighborhoods you serve, jobs you finished there and reviews from those customers. We build your service pages around that material.',
  },
  {
    num: '04',
    title: 'Buyers ask Google about price and whether SEO still works',
    problem: 'The People Also Ask box on that search showed three buyer questions: what an SEO company does, whether SEO is dead in 2026, and how much to expect to pay.',
    solution: 'Your own pages should answer the questions your customers type. We write those answers into your service pages and FAQ, and the FAQ schema is generated from the same text visitors read.',
  },
];

const ROADMAP_STEPS = [
  {
    phase: 'Month 1',
    title: 'Audit and Business Profile fixes',
    desc: 'We read your Search Console with read-only access, your Google Business Profile and your top service pages, then fix whatever stops Austin callers first.',
    deliverables: ['Written issue list ranked by effect on inquiries', 'Profile categories and services matched to what you sell'],
  },
  {
    phase: 'Month 2',
    title: 'Listings and tracking',
    desc: 'We correct your name, address and phone on the directories that rank for your Austin terms and set up call and form tracking you agree to.',
    deliverables: ['Listing fixes on Apple Maps, Bing Places and the Austin lists that rank', 'Call and form tracking live'],
  },
  {
    phase: 'Month 3',
    title: 'Pages for the places you serve',
    desc: 'We write or rewrite service pages for the parts of Travis and Williamson County where you take work, using real jobs and reviews.',
    deliverables: ['Area pages only where you serve customers, such as Round Rock or Cedar Park', 'FAQ answers built from your buyers\' searches'],
  },
  {
    phase: 'Months 4 to 6',
    title: 'Reviews, links and AI answers',
    desc: 'We set up a review request routine, look for Austin links you can earn, and check how ChatGPT, Perplexity and Google describe your business.',
    deliverables: ['Review request routine your team can run', 'Monthly note: work done, calls, forms, rankings'],
  },
];

const EVALUATION_CRITERIA = [
  {
    label: 'Austin Experience',
    factoryjet: 'We begin with a check of who ranks for your terms in Austin and hand you the raw results.',
    traditional: 'Ask: "What is your experience in my city?" Google lists this in its own advice on hiring an SEO.',
  },
  {
    label: 'Guarantees',
    factoryjet: 'No ranking guarantee. We commit to deliverables and dates instead.',
    traditional: 'Ask: "Do you guarantee first place?" Google\'s advice is to find someone else if the answer is yes.',
  },
  {
    label: 'Audit Access',
    factoryjet: 'Read-only Search Console access for the audit. Write access only after you sign.',
    traditional: 'Ask what access they need before you have hired them.',
  },
  {
    label: 'Contract Terms',
    factoryjet: 'No long-term contract. Your profile, analytics and pages stay yours.',
    traditional: 'Ask: "Can I stop monthly, and what do I keep if I do?"',
  },
  {
    label: 'Lists and Directories',
    factoryjet: 'The ones that rank for your terms. For "austin seo company" on 21 Oct 2026 that included Clutch and Built In Austin.',
    traditional: 'Ask which Austin lists and directories they will check for you.',
  },
  {
    label: 'Monthly Reporting',
    factoryjet: 'Work completed, calls, forms and ranking changes for the Austin terms you chose.',
    traditional: 'Ask to see a sample monthly report before you sign.',
  },
];

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'contracts', label: 'Contracts & Terms' },
  { key: 'local', label: 'Local Map Pack & GBP' },
  { key: 'technical', label: 'Technical SEO & AI Search' },
  { key: 'corridors', label: 'Austin Corridors & Suburbs' },
  { key: 'attribution', label: 'Lead Tracking & Delivery' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'contracts',
    question: 'How much should I expect to pay for SEO in Austin?',
    answer: 'WebFX\'s 2026 pricing data puts US local SEO retainers at about $500 to $3,000 a month, with one-time projects from $500 to $5,000. Austin is a busy market, so a firm chasing citywide terms usually sits higher in that range than one serving a single suburb. FactoryJet quotes a fixed price in writing after a short scoping call, so you know the number before any work starts.',
  },
  {
    category: 'contracts',
    question: 'Can I hire an Austin SEO company with no contract?',
    answer: 'Yes. Plenty of Austin firms work month to month, and so do we. The detail to check is what you keep when you stop. Your Google Business Profile, Search Console, analytics and website should sit in accounts you own from day one. If an agency owns them, leaving costs you your history.',
  },
  {
    category: 'contracts',
    question: 'Is any Austin SEO service guaranteed?',
    answer: 'Nobody controls Google\'s rankings, so a ranking guarantee is a sales line. Google\'s own page on hiring an SEO says that if someone guarantees first place, you should find someone else. What a firm can promise is the work: which pages, which listings, which fixes, and by what date.',
  },
  {
    category: 'local',
    question: 'What does an SEO company actually do for an Austin business?',
    answer: 'Most of the work is in three places. Your Google Business Profile gets the right categories, services and photos. Your website gets service pages that answer what Austin buyers ask, plus technical fixes so Google can read them. Your listings on other sites get the same name, address and phone. Then you track which calls and forms came from search.',
  },
  {
    category: 'local',
    question: 'How do I get into the Google Maps top three in Austin?',
    answer: 'Google says local results are mainly based on relevance, distance and how well known a business is. When we searched "austin seo company" on 21 Oct 2026, the three map results had 63, 10 and 61 reviews, so reviews alone did not decide it. Match your profile categories to what you sell, link it to a strong service page, then build reviews steadily.',
  },
  {
    category: 'local',
    question: 'What is the difference between organic SEO and local SEO in Austin?',
    answer: 'Local SEO aims at the map results and searches with a place in them, like "plumber near me" or "Austin roofer". Organic SEO aims at the regular blue links, which can come from anywhere. A Lakeway contractor mostly needs local. An Austin software company selling across the US mostly needs organic. Many businesses need some of each.',
  },
  {
    category: 'corridors',
    question: 'Can you rank my business in Round Rock, Cedar Park and Pflugerville too?',
    answer: 'Yes, if you actually serve those places. Distance is one of Google\'s three local factors, so a business based in South Austin will struggle to show in Round Rock map results. Service pages for each suburb still help in the regular results, as long as each page has real jobs, reviews or details from that area and is not a copy with the town name changed.',
  },
  {
    category: 'corridors',
    question: 'I am in Bee Cave or Bear Creek. Does Austin SEO still apply to me?',
    answer: 'Partly. People nearby often search with "Austin" in the phrase, so your pages should mention it where it is true. Your map ranking, though, depends on where your business is and where the searcher stands. A Bee Cave business usually wins its own area first and then works outward toward Lakeway and West Austin.',
  },
  {
    category: 'technical',
    question: 'Is SEO dead now that AI answers sit at the top of Google?',
    answer: 'No. When we checked "austin seo company" on 21 Oct 2026, Google showed no AI Overview at all. It showed a map pack, ten regular results and a People Also Ask box. Where AI answers do appear, they pull from the same pages, listings and reviews that SEO work improves, so the work carries over.',
  },
  {
    category: 'technical',
    question: 'How is SEO different for an Austin SaaS or B2B company?',
    answer: 'Your buyers are rarely in Austin, so the map pack matters less. They search for the problem your product solves and compare vendors. The work shifts to comparison pages, use-case pages and technical health on a larger site. A local profile still helps with hiring and brand searches, but it is not where the revenue comes from.',
  },
  {
    category: 'technical',
    question: 'Do you work on real estate SEO in Austin?',
    answer: 'Yes. Austin real estate is crowded, and the large portals own most broad searches. Agents and brokerages win on narrower ones: a neighborhood guide for Mueller or Tarrytown, a school-zone page, a relocation page for people moving from California. Each needs local facts a portal does not write, and a Business Profile linked to the right page.',
  },
  {
    category: 'attribution',
    question: 'What is in the free Austin SEO audit?',
    answer: 'We look at your Business Profile, your top service pages and your listings, and compare them with the businesses already in your map pack. We ask for read-only Search Console access, which is what Google advises at this stage. You get a short written list of what to fix first. You are free to hand it to anyone to do the work.',
  },
  {
    category: 'attribution',
    question: 'Should I hire an Austin SEO consultant or an agency?',
    answer: 'Ask who will make the changes. A consultant usually advises and your team or web developer carries it out. An agency or implementation team makes the changes itself. If you have a developer with spare time, a consultant can be enough. If nobody on your side can edit the site or profile, pay for the people who will do it.',
  },
  {
    category: 'attribution',
    question: 'How will I know the work is bringing in Austin leads?',
    answer: 'Agree what counts before work starts: phone calls from your profile, form fills, booked estimates. We set up tracking for those in the first month. Each monthly note lists the work done, then the calls and forms, then ranking changes for the terms you chose. Rankings come last because they matter only when they bring calls.',
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
  name: 'Austin SEO Services & Local Search Optimization',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Local SEO, Technical SEO & Generative Engine Optimization',
  description:
    'Google Business Profile and technical SEO work for Austin, TX businesses. Scope and terms are put in writing before work starts.',
  areaServed: [
    { '@type': 'City', name: 'Austin' },
    { '@type': 'State', name: 'Texas' },
    { '@type': 'Country', name: 'United States' },
  ],
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/austin/seo#webpage',
  name: 'SEO Agency for Austin, TX Businesses | FactoryJet',
  description: 'Google Business Profile and technical SEO work for Austin, TX businesses. Scope and terms are put in writing before work starts.',
  url: CANONICAL,
  dateModified: PAGE_MODIFIED,
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
    { '@type': 'ListItem', position: 3, name: 'Austin', item: CANONICAL },
  ],
};

export default function AustinSeoPage() {
  return (
    <>
      <script id="austin-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="austin-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="austin-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="austin-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>Austin SEO with clear scope and terms</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  SEO for Austin Businesses, With Scope and Terms in Writing
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 24px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  We work on your Google Business Profile, your Austin service pages and your technical SEO. Scope and terms are written down before we start, and you talk directly to the people making the changes.
                </p>

                {/* Answer-First Brief */}
                <div style={{ background: '#F6F6F9', borderLeft: '3px solid #FF5622', padding: '14px 18px', borderRadius: '0 12px 12px 0', marginBottom: '28px', maxWidth: '52ch' }}>
                  <p style={{ fontSize: '13.5px', color: '#141414', lineHeight: 1.55, margin: 0, fontWeight: 500 }}>
                    <strong style={{ color: '#FF5622' }}>Considering no-contract SEO?</strong> Compare the work included, the notice period, and who owns your accounts. We put the scope, reporting, and engagement terms in writing before work starts, so you can decide what fits your business.
                  </p>
                </div>

                <div className="rv-actions">
                  <ModalCTAButton label="Get my free Austin SEO audit" region="us" btnVariant="primary-dark" modalVariant="seo" />
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

              {/* Right Column: Clean Organic Curved Photo Frame (Edge-to-Edge) */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/austin/hero-austin.webp"
                  alt="A city skyline at sunset reflected in a lake"
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
                  Austin Local Search Engineering Brief
                </span>
              </div>
              <h2 style={{ fontSize: '19px', fontWeight: 800, color: '#141414', margin: '0 0 10px', letterSpacing: '-0.015em' }}>
                How Local SEO Works for Central Texas Businesses
              </h2>
              <p style={{ fontSize: '14.5px', color: '#494852', lineHeight: 1.6, margin: 0 }}>
                Local SEO is the work that gets you shown when someone nearby searches for what you sell. Google says it ranks local results mainly on relevance, distance and how well known a business is. You cannot move your address. The other two depend on your Business Profile, service pages, listings and reviews, so that is where an Austin audit starts.
              </p>
            </div>
          </div>
        </section>

        {/* ── 02. TOOLS AND PLATFORMS MARQUEE TICKER (plain tool names, no partner or certification claims) ── */}
        <section style={{ backgroundColor: '#F6F6F9', borderBottom: '1px solid #E6E6EC', padding: '36px 0' }}>
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

        {/* ── 03. ABOUT US & 2x2 BENTO COUNTER SECTION ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(56px, 8vh, 96px) 0' }}>
          <div className="pp-wrap">
            <div className="rv-about-grid">
              
              {/* Left Column: Clean Organic Curved Photo Frame (Edge-to-Edge) */}
              <div className="rv-curved-frame-2">
                <Image
                  src="/images/us/austin/seo/team-phone-map-listing-check.webp"
                  alt="A man holding up a phone that shows a pale map with red pins while a woman beside him marks a clipboard at a white table"
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
                  Austin buyers often compare three or four firms from a map pack or a list before calling one. We make your profile, listings and service pages tell them the same facts, then track which calls and forms follow.
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

        {/* ── 05. INDUSTRY DEEP-DIVES ── */}
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
                <span>Austin Search Check, 21 Oct 2026</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                What Page One Shows Austin Buyers Searching for SEO
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                We searched Google from an Austin location. Here is what a buyer sees, and what we take from it:
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
        <section className="pp-sec tint" aria-labelledby="austin-client-proof">
          <div className="pp-wrap">
            <p className="pp-mlabel">Website and ongoing search work</p>
            <h2 id="austin-client-proof">Helping a specialist service business explain what it does</h2>
            <p className="pp-lead" style={{ maxWidth: '68ch', marginTop: '16px' }}>
              FactoryJet built Yadav Entrance Automation’s website and continues its SEO and AI search work. The content explains the entrance systems the business installs and services, so buyers can understand their options before getting in touch.
            </p>
            <p className="pp-lead" style={{ maxWidth: '68ch', marginTop: '12px', fontSize: '15px' }}>
              This is an example of our implementation work for one client. Your Austin audit starts with your services, your customers, and your local competitors.
            </p>
            <div className="rv-actions" style={{ marginTop: '24px' }}>
              <Link href="/case-studies/yadav-entrance-automation-website-seo" className="rv-btn-secondary">Read the client project →</Link>
              <ModalCTAButton label="Request my Austin SEO audit" region="us" btnVariant="primary-dark" modalVariant="seo" />
            </div>
            <p style={{ marginTop: '20px' }}><Link href="/pricing#seo" className="rv-btn-secondary">How SEO scope and fees work →</Link></p>
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
                Our 6-Month Austin SEO Roadmap
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                The first six months, in the order we do the work:
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
                Evaluating Austin SEO Companies: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Six questions to put to any Austin SEO company, with our own answers beside them:
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
        <LocalSeoOpportunityEstimator city="Austin" region="us" />

        <FAQ
          eyebrow="AUSTIN SEO INTELLIGENCE"
          headline="Frequently Asked Questions About SEO in Austin TX"
          lead="Questions Austin owners type into Google before hiring for SEO, answered in plain words:"
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
              Start With a Free Austin SEO Audit
            </h2>
            
            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Send us your website URL. We will perform a complete local search and technical audit of your site and top Austin competitors, completely free.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Claim Your Free Austin SEO Audit" region="us" btnVariant="primary-light" />
            </div>

            <p style={{ marginTop: '28px', fontSize: '13.5px', color: '#8E8E9F' }}>
              Related services: <Link href="/austin/ecommerce-development" style={{ color: '#FF5622', textDecoration: 'underline' }}>Austin ecommerce development</Link>, <Link href="/austin/web-design" style={{ color: '#FF5622', textDecoration: 'underline' }}>Austin web design</Link>, <Link href="/services/local-seo" style={{ color: '#FF5622', textDecoration: 'underline' }}>Local SEO services</Link>, and <Link href="/services/seo-audit" style={{ color: '#FF5622', textDecoration: 'underline' }}>technical SEO audits</Link>.
            </p>
          </div>
        </section>

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
