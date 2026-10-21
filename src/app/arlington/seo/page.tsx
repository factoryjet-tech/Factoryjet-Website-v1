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

const PAGE_MODIFIED = '2026-10-21';
const CANONICAL = 'https://factoryjet.com/arlington/seo';

export const metadata: Metadata = {
  title: 'SEO Agency for Arlington, TX Businesses | FactoryJet',
  description:
    'SEO for Arlington, TX venues, contractors, clinics and industrial suppliers. Google Maps listings and AI answer visibility. No long-term contract.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Agency for Arlington, TX Businesses | FactoryJet',
    description:
      'SEO for Arlington, TX venues, contractors, clinics and industrial suppliers. Google Maps listings and AI answer visibility. No long-term contract.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'SEO for Arlington, TX businesses by FactoryJet' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency for Arlington, TX Businesses | FactoryJet',
    description: 'SEO for Arlington, TX venues, contractors, clinics and industrial suppliers. Google Maps listings and AI answer visibility. No long-term contract.',
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
  { num: 'Maps', title: 'Business Profile Review', desc: 'Check business details, categories, services, and the areas you actually serve.', icon: '📍' },
  { num: 'Leads', title: 'Inquiry Tracking', desc: 'Agree which calls, forms, and booked conversations count as useful inquiries.', icon: '📈' },
  { num: 'Schema', title: 'Clean Entity Attribution', desc: 'Structured JSON-LD schemas linking your Google Knowledge Graph, address, and practitioner licenses.', icon: '🛡️' },
  { num: '0', title: 'Spammy Link Networks', desc: 'Strict white-hat local citation authority and real editorial publication placements only.', icon: '⚡' },
];

const DISTRICTS = [
  {
    corridor: 'Entertainment District & Stadium Corridor',
    focus: 'Event Hospitality, Sports Tourism & Private Dining',
    desc: 'The vibrant heart of DFW entertainment anchored by AT&T Stadium, Globe Life Field, and Choctaw Stadium. Captures high-intent event dining, corporate VIP hospitality, luxury transport, and regional sports tourism queries.',
  },
  {
    corridor: 'Downtown Arlington & UTA Innovation Campus',
    focus: 'Legal Practices, Research Innovation & Venture Technology',
    desc: 'The urban academic and commercial core anchored by UT Arlington and the Levitt Pavilion. Captures high-stakes commercial litigation retainers, patent and IP law inquiries, and technical engineering advisory consultations.',
  },
  {
    corridor: 'Great Southwest Industrial District (GSW)',
    focus: 'Heavy Logistics, Precision Tooling & Industrial Supply',
    desc: 'One of the largest master-planned industrial distribution parks in the American Southwest. B2B service queries demand technical capability schemas, precision equipment matrices, ISO certifications, and streamlined commercial RFQ workflows.',
  },
  {
    corridor: 'South Arlington & Highlands Commercial Hub',
    focus: 'Elective Healthcare, Home Services & Family Law',
    desc: 'High-density commercial and residential enclave along I-20 and Matlock Road. Intense local search competition for elective dental implants, medical aesthetics, roofing contractors, and family law client consultations.',
  },
  {
    corridor: 'Viridian & North Arlington Corridor',
    focus: 'Wealth Advisory, Estate Planning & Luxury Remodeling',
    desc: 'Affluent master-planned residential corridor. Demands high-trust local proof signals, verified client reviews, and refined neighborhood entity silos.',
  },
  {
    corridor: 'I-20 & Cooper Street Commercial Spine',
    focus: 'Commercial Contracting, Automotive & Specialized Services',
    desc: 'Major multi-mile retail and service highway. Drives steady inbound emergency service calls, fleet maintenance contracts, and commercial project bids.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Sports Entertainment, Event Hospitality & Tourism',
    headline: 'Google Maps Listings for Arlington Entertainment Leaders',
    description:
      'Hospitality groups, event venues, and upscale dining establishments in Arlington Entertainment District rely on local search visibility to capture massive stadium crowds. We optimize Google Maps profiles, build event-driven landing pages, implement structured menu schemas, and drive high-intent reservation volume.',
    image: '/images/us/arlington/seo/card-event-hall-table-setup.webp',
    alt: 'A woman in a waistcoat setting glasses on a round table beside a man in a navy apron folding a napkin in a bright event hall',
    points: [
      'Restaurant and EventVenue structured JSON-LD schema with direct reservation booking integration',
      'Google Maps 3-Pack ranking for high-intent game-day, concert, and corporate catering terms',
      'Continuous review velocity management across Google Business Profile, TripAdvisor, and Yelp',
    ],
  },
  {
    sector: 'Commercial Construction, Roofing & Industrial Contracting',
    headline: 'Driving High-Value Project Bidding Across Greater Arlington & Tarrant County',
    description:
      'Commercial general contractors, roofing companies, and mechanical specialists across Arlington require consistent commercial bidding opportunities. We build geo-targeted service area architectures, optimize Service Area Business profiles, and capture high-intent commercial contracting keywords.',
    image: '/images/us/arlington/seo/card-commercial-roofing-crew.webp',
    alt: 'Two roofers in white hard hats and harnesses fixing a grey metal roofing panel on a flat commercial roof, an orange safety cone behind them',
    points: [
      'ServiceAreaBusiness schema markup defining multi-county operational boundaries',
      'Hyper-local neighborhood geo-pages targeting North Arlington, Viridian, and Dalworthington Gardens',
      'High-authority regional contractor directory citations and verified trade accreditations',
    ],
  },
  {
    sector: 'Specialized Healthcare, Orthopedics & Physical Therapy',
    headline: 'Capturing High-Value Patients in Arlington Medical Corridors',
    description:
      'In Arlington competitive sports medicine, orthopedic surgery, and cosmetic dentistry markets, patients evaluate physician credentials and peer reviews thoroughly. We optimize Google Business Profiles, implement MedicalProcedure schemas, build procedure-specific silos, and generate steady review velocity.',
    image: '/images/us/arlington/seo/card-physiotherapy-knee-session.webp',
    alt: 'A physiotherapist in a teal polo supporting the knee of an older woman as she stretches on a treatment table in a bright clinic',
    points: [
      'Multi-practitioner Google Business Profile optimization with procedure sub-categories',
      'MedicalProcedure and Physician structured JSON-LD schema linking hospital affiliations',
      'Automated patient review request funnels',
    ],
  },
  {
    sector: 'Automotive Logistics, Heavy Distribution & Tooling',
    headline: 'Commercial Lead Engines for Great Southwest Industrial Operators',
    description:
      'Precision tooling shops, automotive parts distributors, and intermodal freight operators across the Great Southwest Industrial District demand steady commercial quote requests. We build specialized technical service pages, link ISO quality certifications, and optimize commercial keyword rankings.',
    image: '/images/us/manufacturing-website-design/shop-floor.webp',
    alt: 'A machinist in safety glasses loading a metal part into a CNC lathe beside a tablet showing the part',
    points: [
      'Industrial engineering service schemas linking ISO and manufacturing certifications',
      'High-intent B2B keyword silos targeting regional OEM and tier-1 supplier procurement teams',
      'Authoritative regional business citations across Texas commercial databases',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'The city keyword is small',
    problem: '"Arlington seo" and "arlington seo company" each get about 50 US searches a month. "Local seo arlington" and "arlington seo services" get about 10 each. A plan built on the city name alone chases a few dozen searches.',
    solution: 'We start from the searches your own buyers type, such as a trade plus "arlington tx" or a suburb like Mansfield or Grand Prairie. Then we check monthly volume for each one before a single page is written.',
  },
  {
    num: '02',
    title: 'Ten results, one headline',
    problem: 'Nine of the top 10 Google results for "arlington seo company" were agency pages, and most used almost the same title: "Arlington SEO Company". The tenth was a "Top 40 SEO Agencies" list page.',
    solution: 'Copying that title gets you lost in the pile. For your site we write pages around details only you hold: job photos, the streets and suburbs you serve, real prices you publish, and answers to the calls you get.',
  },
  {
    num: '03',
    title: 'A wide review gap in the map pack',
    problem: 'The three businesses in the Google map pack had 171 reviews, 4 reviews and 2 reviews. Two of the three got in with a handful of five star ratings. Review count was the clearest split.',
    solution: 'We set up a simple review request after each finished job, write replies to every review, and fix your Google Business Profile categories and service areas. You keep the profile and all of its history.',
  },
  {
    num: '04',
    title: 'No AI Overview, but AI questions',
    problem: 'Google showed no AI Overview on "arlington seo company" that day. Its People Also Ask box still asked "Is SEO dead now with AI?" and "How much should I expect to pay for SEO?"',
    solution: 'We write short, direct answers to those buyer questions on your pages, with FAQ schema built from the same text people see. That gives AI tools clean lines to quote. Nobody can promise they will.',
  },
];

const ROADMAP_STEPS = [
  {
    phase: 'Phase 01',
    title: 'Measure the searches that pay',
    desc: 'We pull monthly volume for your trade in Arlington, Grand Prairie, Mansfield and Pantego, and check who holds the map pack and top 10 today.',
    deliverables: ['Keyword list with monthly search volumes', 'Map pack review counts for your terms', 'Top 10 result types noted'],
  },
  {
    phase: 'Phase 02',
    title: 'Fix the profile and the site',
    desc: 'We correct your Google Business Profile, Bing Places and Apple Business Connect listings, then fix crawl errors, page titles and slow pages on your site.',
    deliverables: ['Matching name, address and phone everywhere', 'Profile categories and service areas set', 'Technical fix list, done and checked'],
  },
  {
    phase: 'Phase 03',
    title: 'Write pages for real jobs',
    desc: 'One page per service and area: roofing in North Arlington, game day catering near the Entertainment District, paver patios in Viridian. Each answers the questions buyers ask.',
    deliverables: ['Service and area pages with photos', 'FAQ blocks with matching schema', 'Review request flow after each job'],
  },
  {
    phase: 'Phase 04',
    title: 'Report what moved',
    desc: 'Every month you see calls, form leads and map views next to the work we did, in plain words, plus the next set of changes for approval.',
    deliverables: ['Monthly report of calls and leads', 'Review count tracked against map pack', 'Next changes quoted for approval'],
  },
];

const EVALUATION_CRITERIA = [
  {
    label: 'Which searches will you target, and how many people make them?',
    factoryjet: 'We show monthly volume for every term. "Arlington seo company" gets about 50 a month, so we build around your trade and suburbs where the buyers are.',
    traditional: 'A list of city keywords with no search numbers, or a promise to rank for "Arlington SEO" itself.',
  },
  {
    label: 'How will you close the review gap in the map pack?',
    factoryjet: 'We measured the map pack at 171, 4 and 2 reviews. We set up a review request after each job and reply to every review for you.',
    traditional: '"We optimize your Google profile" with no plan for getting new reviews from real customers.',
  },
  {
    label: 'Who owns the work if I stop?',
    factoryjet: 'You do. Your Google Business Profile, pages, schema and content stay with you. There is no long-term contract and each change is quoted first.',
    traditional: 'A 12 month contract, with the profile or site held in the agency\'s account.',
  },
  {
    label: 'How do you handle AI answers?',
    factoryjet: 'We write direct answers and FAQ schema from the visible page text so AI tools can quote you. We report what we see and promise nothing.',
    traditional: 'A promise to get you "into ChatGPT" or "into AI Overviews" by a set date.',
  },
];

const FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Cost and contracts' },
  { key: 'local', label: 'Arlington search and Google Maps' },
  { key: 'industries', label: 'Contractors, restaurants and home services' },
  { key: 'ai', label: 'AI search' },
  { key: 'process', label: 'Working with FactoryJet' },
];

const FAQ_ITEMS = [
  {
    category: 'local',
    question: 'How many people in Arlington search for an SEO company?',
    answer: 'Few people do. On 21 Oct 2026, Google Ads data showed about 50 US searches a month each for "arlington seo" and "arlington seo company". "Arlington seo agency" and "seo company arlington" got about 20 each. "Local seo arlington" got about 10. So the agency keyword is small. What matters for your business is how many people search for your own service in Arlington, which can be far larger. We measure that before we plan anything.',
  },
  {
    category: 'pricing',
    question: 'How much should I expect to pay for SEO in Arlington, TX?',
    answer: 'Most small businesses pay $500 to $3,000 a month for local SEO, and one-time local SEO projects run $500 to $5,000, per WebFX local SEO pricing updated Sep 2026. Google showed this same question in its People Also Ask box when we searched "arlington seo company" on 21 Oct 2026. Your price depends on how many services and suburbs you want to show up for. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'pricing',
    question: 'What does a full SEO plan cost for a small business compared with local SEO alone?',
    answer: 'Small business SEO usually runs $1,500 to $3,500 a month, per WebFX SEO pricing updated Sep 2026. An Ahrefs survey of 439 providers put the average at $2,917 a month for SEO and $1,557 for local SEO. Local SEO alone covers your map listing, reviews and area pages. A full plan adds wider content and links. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'pricing',
    question: 'Can I start with a one-time SEO audit instead of a monthly plan?',
    answer: 'Yes. Most businesses pay $101 to $750 for a one-time SEO audit, according to WebFX, which found 43% of businesses fall in that range. An audit lists what is broken on your site and Google Business Profile, in order of impact. You can fix it yourself or hire someone. FactoryJet quotes a fixed price in writing after a short scoping call, and there is no long-term contract after it.',
  },
  {
    category: 'pricing',
    question: 'Do I have to sign a long contract with an SEO company in Arlington?',
    answer: 'Not with us. FactoryJet has no long-term contract. Each change is quoted and approved before we start it. You own your Google Business Profile, pages, schema and content, so nothing is locked in an agency account if you leave. Ask any firm you talk to who owns the profile and the site. If the answer is them, keep looking.',
  },
  {
    category: 'local',
    question: 'What shows up when you search for an SEO company in Arlington, TX?',
    answer: 'We searched "arlington seo company" from Arlington, Texas on 21 Oct 2026. Google showed a map pack of three businesses, then 10 regular results. Nine were agency websites, most titled close to "Arlington SEO Company". One was a "Top 40 SEO Agencies in Arlington" list page. There was no AI Overview at the top. For most local trades, the map pack is where calls come from.',
  },
  {
    category: 'local',
    question: 'How many reviews do I need to get into the Google map pack in Arlington?',
    answer: 'There is no fixed number, and the gap here is wide. On 21 Oct 2026, the three map pack businesses for "arlington seo company" had 171, 4 and 2 reviews. Two got in with fewer than five. Distance, categories and how well the profile matches the search all count too. A steady flow of real reviews helps, so we set up a request after each job.',
  },
  {
    category: 'local',
    question: 'What is local SEO and how is it different from regular SEO?',
    answer: 'Local SEO means showing up when someone nearby searches for a service, mostly in the Google map pack and "near me" results. It covers your Google Business Profile, reviews, Bing Places, Apple Business Connect and pages for each area you serve. Regular SEO covers your whole website for searches with no location. An Arlington plumber needs local SEO first. An online store selling nationwide needs the wider kind.',
  },
  {
    category: 'local',
    question: 'Can you help me show up in Grand Prairie, Mansfield and Bedford too?',
    answer: 'Yes, if you serve those places. Google ties map results to where the searcher stands, so one Arlington address will not cover every suburb. We set service areas on your Google Business Profile and write one page per area you work in, such as Grand Prairie, Mansfield, Pantego, Kennedale or Bedford. Each page names real jobs there. We skip areas you do not serve.',
  },
  {
    category: 'local',
    question: 'Are SEO directory and "top agencies" list sites worth trusting?',
    answer: 'Use them as a starting list, not a verdict. One of the top 10 results for "arlington seo company" on 21 Oct 2026 was a "Top 40 SEO Agencies" list. Some list sites sell placement, and some rank firms only on reviews they collect themselves. Check each firm\'s own work, ask who owns the accounts, and ask for search volume numbers before you sign.',
  },
  {
    category: 'industries',
    question: 'How does SEO work for contractors and construction companies in Arlington?',
    answer: 'Contractor SEO starts with your Google Business Profile, set to your exact trade, such as roofer or general contractor. Then each service gets its own page with job photos, the areas you cover and the questions people ask before they call. Reviews from finished jobs carry a lot of weight. For commercial work near the Great Southwest Industrial District, pages should list licenses, insurance and project types.',
  },
  {
    category: 'industries',
    question: 'I own a restaurant in Arlington. How do I get more people to find us when they search for food nearby?',
    answer: 'Start with your Google Business Profile: correct hours, menu link, photos, price range and the right category, such as Tex-Mex restaurant. Most "places to eat near me" searches end in the map, not a website. Add game day hours and parking notes if you are near AT&T Stadium or Globe Life Field. Answer every review. Keep your Yelp and Apple Business Connect listings the same as Google.',
  },
  {
    category: 'industries',
    question: 'What should an SEO agency do for a restaurant that a general marketer would miss?',
    answer: 'A restaurant needs menu data Google can read, event and holiday hours kept current, and photo updates every few weeks. Menu schema is code that tells Google your dishes and prices. Reservation and order links should work on phones. Ask any agency how they handle game day crowds in the Entertainment District and review replies. If they only talk about blog posts, they are a poor fit.',
  },
  {
    category: 'industries',
    question: 'Does local SEO work for home services and paver companies in Arlington?',
    answer: 'Yes, and it fits them well, because people search for these jobs by area. A paver or patio company needs a page per service, such as patios, driveways and pool decks, with photos of finished work. Area pages for places like Viridian or South Arlington help. Reviews that mention the job type help Google match you to searches like "paver installers near me".',
  },
  {
    category: 'ai',
    question: 'Is SEO dead now that people use AI to search?',
    answer: 'No. Google showed this exact question when we searched "arlington seo company" on 21 Oct 2026, and it showed no AI Overview on that search. AI tools like ChatGPT and Google\'s AI answers still pull from web pages and business listings. Pages with clear, direct answers and accurate listings are easier for them to quote. The basics of SEO still decide what they can find.',
  },
  {
    category: 'ai',
    question: 'What is AI SEO, and does an Arlington business need it?',
    answer: 'AI SEO means writing and structuring your pages so AI answer tools can read and quote them. That covers short direct answers, FAQ schema that matches the visible text, and business details that agree across Google, Bing and Apple. Most Arlington businesses should get local SEO right first. AI SEO for small businesses runs $1,500 to $5,000 a month, per WebFX, Sep 2026. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'ai',
    question: 'Can you get my business recommended by ChatGPT or Google\'s AI answers?',
    answer: 'Nobody can promise that, and you should be wary of anyone who does. What we can do is make your pages and listings easy to quote. We write plain answers to the questions buyers ask, add schema built from the same text people see, and keep your details the same on every platform. Then we check AI answers for your key questions and report what we find.',
  },
  {
    category: 'ai',
    question: 'What is an AI Overview?',
    answer: 'An AI Overview is the short summary Google writes at the top of some search results, with links to the pages it drew from. It shows on some searches and not others. When we searched "arlington seo company" from Arlington on 21 Oct 2026, no AI Overview appeared. Question style searches, such as "how much does a roof cost", are more likely to get one.',
  },
  {
    category: 'process',
    question: 'What does an SEO company do day to day?',
    answer: 'An SEO company audits your site and listings, fixes technical problems, writes pages, earns links and reports results. For an Arlington business, most of the work is local: your Google Business Profile, reviews, service area pages and matching listings on Bing Places and Apple Business Connect. Google asked this in its People Also Ask box on 21 Oct 2026. Ask any firm to show you each month what they changed.',
  },
  {
    category: 'process',
    question: 'How do I pick the best SEO consultant in Arlington, Texas?',
    answer: 'Ask four things. Which searches will you target, and how many people make them each month? How will you get more reviews? Who owns the profile and pages if I leave? What will I see in a monthly report? Good answers include numbers. Lists of "top SEO experts" rarely check results, so judge firms by what they show you about your own market.',
  },
  {
    category: 'process',
    question: 'Does an SEO company need to be in Arlington to rank my business?',
    answer: 'No. Google ranks your business on your profile, reviews and pages, not on where your SEO firm sits. FactoryJet works remotely with US clients and schedules calls in US business hours. It needs accurate data about your market, which we pull for each client: search volumes, map pack review counts and who ranks today. Founder Bhavesh Barot replies to new inquiries within 24 hours. FactoryJet was founded in 2014 and has worked with 500+ businesses.',
  },
  {
    category: 'process',
    question: 'How long before local SEO brings more calls?',
    answer: 'Profile fixes can change map visibility within a few weeks, because Google rereads your listing often. New service and area pages take longer to be found and ranked, often a few months. Reviews build over time. We report calls, form leads and map views every month so you can see what moved. We do not promise rankings or dates, and you should doubt anyone who does.',
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
  name: 'Arlington Local SEO & Google Maps Optimization',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Local SEO, Google Business Profile Optimization, Schema Markup & AI Citation Strategy',
  description:
    'SEO for Arlington, TX venues, contractors, clinics and industrial suppliers. Google Maps listings and AI answer visibility. No long-term contract.',
  areaServed: [
    { '@type': 'City', name: 'Arlington' },
    { '@type': 'City', name: 'Grand Prairie' },
    { '@type': 'City', name: 'Mansfield' },
    { '@type': 'City', name: 'Pantego' },
    { '@type': 'City', name: 'Dalworthington Gardens' },
    { '@type': 'State', name: 'Texas' },
    { '@type': 'Country', name: 'United States' },
  ],
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/arlington/seo#webpage',
  name: 'SEO Agency for Arlington, TX Businesses | FactoryJet',
  description: 'SEO for Arlington, TX venues, contractors, clinics and industrial suppliers. Google Maps listings and AI answer visibility. No long-term contract.',
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
    { '@type': 'ListItem', position: 2, name: 'Local SEO', item: 'https://factoryjet.com/services/ai-seo' },
    { '@type': 'ListItem', position: 3, name: 'Arlington', item: CANONICAL },
  ],
};

export default function ArlingtonSeoPage() {
  return (
    <>
      <script id="arlington-seo-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="arlington-seo-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="arlington-seo-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="arlington-seo-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        {/* ── 01. HERO SECTION ── */}
        <section className="pp-sec" style={{ paddingTop: 'clamp(44px, 7vh, 88px)', paddingBottom: 'clamp(44px, 6vh, 72px)', background: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div className="rv-hero-wrap">
              {/* Left Column Typography */}
              <div>
                <div className="rv-badge" style={{ marginBottom: '18px' }}>
                  <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                  </svg>
                  <span>Arlington Local SEO &amp; Google Maps Engineering</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  SEO for Arlington Businesses Competing Across DFW
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 24px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  We work on your Google Business Profile, your service pages and your listings so customers searching in Arlington and the DFW Metroplex can find you.
                </p>

                {/* Answer-First Brief */}
                <div style={{ background: '#F6F6F9', borderLeft: '3px solid #FF5622', padding: '14px 18px', borderRadius: '0 12px 12px 0', marginBottom: '28px', maxWidth: '52ch' }}>
                  <p style={{ fontSize: '13.5px', color: '#141414', lineHeight: 1.55, margin: 0, fontWeight: 500 }}>
                    <strong style={{ color: '#FF5622' }}>Executive Brief:</strong> FactoryJet engineers full-stack Arlington local search visibility through verified Google Business Profile optimization, multi-directory NAP syncing, structured Schema.org entity graphs, and month-to-month accountability without lock-in contracts.
                  </p>
                </div>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Free Local SEO Audit" region="us" btnVariant="primary-dark" modalVariant="seo" />
                  <a href="#arlington-seo-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Arlington Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Organic Curved Photo Frame */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/arlington/seo/hero-map-pins-desk-review.webp"
                  alt="Two people at a desk looking at a monitor that shows a pale map with coloured pins, an orange desk lamp beside them"
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

        {/* ── 03. 2x2 BENTO COUNTER SECTION ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(56px, 8vh, 96px) 0' }}>
          <div className="pp-wrap">
            <div className="rv-about-grid">
              {/* Left Column: Clean Organic Curved Photo Frame */}
              <div className="rv-curved-frame-2">
                <Image
                  src="/images/us/arlington/seo/team-cafe-table-laptop-map.webp"
                  alt="Three people at a round cafe table looking at a laptop that shows a pale map with coloured pins, an orange notebook on the table"
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
                  <span>Search Precision &amp; Real Growth</span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
                  Local Search Engineered for Arlington Leaders
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  From Entertainment District venues to Great Southwest industrial operators and South Arlington medical practices, we build high-converting search architectures that capture the DFW market.
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

                <div style={{ marginTop: '32px' }}>
                  <ModalCTAButton label="Schedule Local SEO Consultation" region="us" btnVariant="primary-dark" modalVariant="seo" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04. ARLINGTON DISTRICTS & INDUSTRY DIRECTORY ── */}
        <section id="arlington-seo-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Arlington Commercial Corridor Depth</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored Local Search Optimization for Arlington Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From Entertainment District venues to Great Southwest industrial operators and North Arlington practices:
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
                Specialized Local SEO Strategies for Arlington Brands
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every commercial sector across Arlington demands tailored schema models, citation graphs, and map optimization:
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
                <span>The FactoryJet Difference</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                What FactoryJet Does Differently for Arlington Businesses
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                We searched "arlington seo company" from Arlington, Texas on 21 Oct 2026 and pulled US search volumes the same day; these four findings shape how we work here.
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
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.08em' }}>What we saw in Arlington, TX search, 21 Oct 2026:</span>
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

        {/* ── 07. ARCHITECTURE BLUEPRINT ── */}
        <div id="local-seo-blueprint">

          <LocalSeoArchitectureBlueprint
            badge="// ARLINGTON LOCAL SEARCH &amp; AI RANKING BLUEPRINT"
            title="4-Layer Local SEO Stack: Google Maps to AI Overviews"
            subtitle="Explore how GBP API optimization, multi-directory citation syncing, structured schema graphs, and AI citation crawlers work together in Arlington local search."
            city="Arlington"
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
                Four stages, each one quoted and approved before work starts, aimed at the searches and suburbs where Arlington buyers look.
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
                Evaluating Arlington SEO Agencies: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Ask any Arlington SEO firm these four questions before you sign, and compare the answers to what we found in local search on 21 Oct 2026.
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

        {/* ── INTERACTIVE GOOGLE MAP PACK OPPORTUNITY ESTIMATOR ── */}
        <LocalSeoOpportunityEstimator city="Arlington" region="us" />

        {/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION ── */}
        <FAQ
          eyebrow="ARLINGTON LOCAL SEARCH INTELLIGENCE"
          headline="Frequently Asked Questions About Local SEO in Arlington TX"
          lead="Direct, plain English answers to what Arlington business owners and marketing leaders ask about Google Maps 3-Pack and search visibility:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 11. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <SeoCityLinksUS currentCity="arlington" />
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
              Start With a Free Arlington Local SEO Audit
            </h2>

            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Ask for a free review of your Google Business Profile and local listings. We will show you what is missing or inconsistent, and what we would fix first.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get Your Free Local SEO Audit" region="us" btnVariant="primary-light" modalVariant="seo" />
            </div>
            
            <p style={{ marginTop: '28px', fontSize: '13.5px', color: '#8E8E9F' }}>
              Related services: <Link href="/services/local-seo" style={{ color: '#FF5622', textDecoration: 'underline' }}>Local SEO services</Link>, <Link href="/services/seo-audit" style={{ color: '#FF5622', textDecoration: 'underline' }}>technical SEO audits</Link>, <Link href="/austin/seo" style={{ color: '#FF5622', textDecoration: 'underline' }}>Austin SEO agency</Link>, and <Link href="/denver/seo" style={{ color: '#FF5622', textDecoration: 'underline' }}>Denver local SEO</Link>.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
