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
const CANONICAL = 'https://factoryjet.com/phoenix/seo';

export const metadata: Metadata = {
  title: 'SEO Agency for Phoenix, AZ Businesses | FactoryJet',
  description:
    'SEO for Phoenix, AZ clinics, law firms, contractors and semiconductor suppliers, from Scottsdale to Chandler. No long-term contract.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Agency for Phoenix, AZ Businesses | FactoryJet',
    description:
      'SEO for Phoenix, AZ clinics, law firms, contractors and semiconductor suppliers, from Scottsdale to Chandler. No long-term contract.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'SEO for Phoenix, AZ businesses by FactoryJet' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency for Phoenix, AZ Businesses | FactoryJet',
    description: 'SEO for Phoenix, AZ clinics, law firms, contractors and semiconductor suppliers, from Scottsdale to Chandler. No long-term contract.',
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
    corridor: 'Camelback Corridor & Biltmore Financial District',
    focus: 'Wealth Advisory, Corporate Law & Commercial Real Estate',
    desc: 'The prestigious financial and legal heart of the Phoenix Valley. Intense competition for high-net-worth estate planning, corporate litigation retainers, and commercial real estate transactions demands precise entity optimization, attorney schema markup, and authoritative local citations across Maricopa County.',
  },
  {
    corridor: 'Scottsdale Airpark & North Scottsdale Medical Core',
    focus: 'Plastic Surgery, Aesthetic Clinics & Luxury Services',
    desc: 'Bustling luxury medical, aviation, and wellness nexus. High-value elective healthcare patient inquiries demand multi-practitioner Google Business Profile optimization, procedure-specific FAQ schema markup, patient review generation funnels, and verified local medical directory placements.',
  },
  {
    corridor: 'Downtown Phoenix & Roosevelt Row Innovation Core',
    focus: 'Bio-Science Core, FinTech & Healthcare Innovation',
    desc: 'Fast-growing urban innovation district anchored by the Phoenix Biomedical Campus. B2B and institutional service queries require deep technical topical authority, nested organization schemas, sub-second edge speeds, and verified industry publication backlinks.',
  },
  {
    corridor: 'Tempe & Silicon Desert University Technology Hub',
    focus: 'Semiconductor Supply, Enterprise SaaS & Microelectronics',
    desc: 'Major university and hardware technology hub surrounding Arizona State University. Features structured entity markup, regional technology directory citations, technical whitepaper landing pages, and high-converting inquiry funnels for high-growth tech firms.',
  },
  {
    corridor: 'Chandler & Price Road High-Tech Manufacturing Corridor',
    focus: 'Autonomous Vehicle Tech, Precision Aviation & Engineering',
    desc: 'High-tech semiconductor and aerospace manufacturing center. Requires precision engineering capability landing pages, AS9100 quality certification schemas, B2B procurement query targeting, and localized search coverage across the East Valley.',
  },
  {
    corridor: 'Gilbert & East Valley Commercial Growth Gateway',
    focus: 'Advanced Manufacturing, Clean Tech & Regional Logistics',
    desc: 'Thriving East Valley commercial engine and corporate expansion hub. Captures commercial HVAC, roofing, and contractor inquiries across high-growth industrial developments with dedicated service area landing pages and geo-targeted review highlights.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Aesthetic Medicine, Plastic Surgery & Concierge Healthcare',
    headline: 'Patient Search Across Scottsdale & Paradise Valley',
    description:
      'In the Valley’s highly competitive cosmetic surgery and elective medical markets, prospective patients conduct rigorous research before booking consultations. We optimize multi-practitioner Google Business Profiles, implement MedicalProcedure structured schemas, build procedure-specific geo silos, and generate steady review velocity.',
    image: '/images/us/phoenix/seo/card-light-therapy-skin-treatment.webp',
    alt: 'A practitioner in a white tunic holding a light wand to the cheek of a woman wearing orange protective goggles in a treatment chair',
    points: [
      'Multi-practitioner Google Business Profile optimization with procedure sub-categories',
      'MedicalProcedure and Physician structured JSON-LD schema linking hospital affiliations',
      'Hyper-local neighborhood geo-pages targeting Scottsdale, Paradise Valley, and Arcadia',
    ],
  },
  {
    sector: 'Corporate Law, Estate Planning & Commercial Real Estate Litigation',
    headline: 'High-Authority Local Search Engines for Biltmore & Downtown Law Firms',
    description:
      'Legal search queries across Maricopa County are fiercely contested. We build local SEO structures with practice area knowledge hubs, attorney bar admission schemas, verified case outcome showcases, and consistent local citations.',
    image: '/images/us/services/law-firm-seo/hero.webp',
    alt: 'An empty wood-panelled office with bookshelves and a desk in warm light',
    points: [
      'LegalService and Attorney schema linking State Bar of Arizona verified credentials',
      'Localized practice area silos targeting Camelback Corridor, Biltmore, and North Scottsdale',
      'High-authority local legal directory citations and editorial publication placements',
    ],
  },
  {
    sector: 'Commercial Construction, Industrial Roofing & Trade Services',
    headline: 'Capturing High-Value Commercial Project Inquiries Across the Valley',
    description:
      'General contractors, roofing enterprises, and commercial HVAC operators across Phoenix require continuous inbound bidding opportunities. We build geo-targeted service area architectures, optimize Service Area Business (SAB) profiles, and capture high-intent commercial keyword searches.',
    image: '/images/us/phoenix/seo/card-concrete-slab-finishing.webp',
    alt: 'Two construction workers in white hard hats smoothing a freshly poured concrete slab with a long float and a hand trowel on a building site',
    points: [
      'Service area radius optimization covering Maricopa and Pinal County commercial hubs',
      'High-speed mobile performance ensuring immediate project bidding phone calls',
      'Structured LocalBusiness and Contractor schema markup',
    ],
  },
  {
    sector: 'Semiconductor Supply, Precision Engineering & B2B Logistics',
    headline: 'Topical Authority & AI Citation Engineering for Silicon Desert Tech',
    description:
      'Semiconductor suppliers, precision CNC machine shops, and logistics operators across Tempe and Chandler require commanding authority in technical search. We engineer deep topical content graphs, researcher schemas, and institutional citations that earn authority across Google, Perplexity, and AI search engines.',
    image: '/images/us/phoenix/seo/card-silicon-wafer-inspection.webp',
    alt: 'A woman in a white lab coat and gloves holding a shiny silicon wafer under a ring lamp while a man slides another wafer into a clear carrier',
    points: [
      'Topical entity architecture covering precision microelectronics and supply chain capabilities',
      'Structured Organization and Service schema for AI citation retrieval on ChatGPT and Perplexity',
      'High-authority regional trade publication and industrial cluster directory synchronization',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Six of ten results were not agency websites',
    problem: 'On 21 Oct 2026 the top 10 Google results for "phoenix seo company" held 3 list pages (including Semrush\'s agency directory and The Manifest) and 3 social profiles: one LinkedIn page and two Facebook pages. Only 4 were agency websites.',
    solution: 'For a Phoenix client we check which lists and directories already rank for your own service searches, then get your business listed and described correctly on those pages before we spend money on anything else.',
  },
  {
    num: '02',
    title: 'The map pack runs on small review counts',
    problem: 'The three businesses in the Google map pack for "phoenix seo company" had 7, 47 and 4 reviews on 21 Oct 2026. Two of the three had fewer than ten.',
    solution: 'We set up a plain review request your staff can send after each job, fix your Google Business Profile categories and hours, and track your review count against the three map pack businesses every month.',
  },
  {
    num: '03',
    title: 'Google Ads bids near $40 a click here',
    problem: 'Google Ads suggested about $39.45 a click for "phoenix seo company" and $40.15 for "phoenix seo services" on 21 Oct 2026. Phoenix businesses in your trade face the same kind of bidding for their own searches.',
    solution: 'We find the searches in your trade where Google Ads bids run high and build an organic page for each one, so a click you would otherwise buy can come from your own listing.',
  },
  {
    num: '04',
    title: 'No AI Overview showed on the main search',
    problem: 'Google showed no AI Overview for "phoenix seo company" when we searched from Phoenix on 21 Oct 2026. The People Also Ask box held questions like "How much should I expect to pay for SEO?" and "Is SEO legitimate?"',
    solution: 'We write short, direct answers to the questions Phoenix buyers ask, in plain words with sources, and mark them up with schema. That gives Google and AI assistants clear text they can quote if they start showing answers.',
  },
];

const ROADMAP_STEPS = [
  {
    phase: 'Phase 01',
    title: 'Phoenix SEO audit',
    desc: 'We check your site, Google Business Profile and listings, then compare you with the 10 results Phoenix buyers see for your main search.',
    deliverables: ['Written audit with every issue ranked', 'Top 10 results mapped by type', 'Map pack review count comparison'],
  },
  {
    phase: 'Phase 02',
    title: 'Fix the foundation',
    desc: 'We fix titles, page speed issues, schema and profile categories, and get you listed on directories such as Yelp, BBB and Bing Places.',
    deliverables: ['Google Business Profile corrected', 'Directory listings matched name for name', 'LocalBusiness schema on every location page'],
  },
  {
    phase: 'Phase 03',
    title: 'Pages for each Valley market',
    desc: 'We write service pages for the areas you serve, from Goodyear and the West Valley to Tempe, Chandler and Gilbert, in your sector\'s words.',
    deliverables: ['One page per suburb you serve', 'FAQ answers built from real searches', 'Internal links between related services'],
  },
  {
    phase: 'Phase 04',
    title: 'Report and adjust',
    desc: 'Each month we report calls, form leads and the searches that brought them, then quote the next changes for your approval.',
    deliverables: ['Monthly calls and leads report', 'Review count tracked against map pack', 'Next changes quoted before work'],
  },
];

const EVALUATION_CRITERIA = [
  {
    label: 'Which lists rank for my main search?',
    factoryjet: 'We name them. On 21 Oct 2026, 3 of the top 10 results for "phoenix seo company" were list pages, and we check the same for your trade.',
    traditional: 'A promise to rank you first with no look at who already holds the top 10 results.',
  },
  {
    label: 'How many reviews do the map pack businesses have?',
    factoryjet: 'We count them. For "phoenix seo company" the three map pack businesses had 7, 47 and 4 reviews on 21 Oct 2026, so the target is concrete.',
    traditional: 'General advice to "get more reviews" with no number to aim at and no request process.',
  },
  {
    label: 'Who owns the work if I leave?',
    factoryjet: 'You do. Your Google Business Profile, pages, schema and content stay yours, and there is no long-term contract.',
    traditional: 'The agency owns the profile login or the pages and keeps them when the contract ends.',
  },
  {
    label: 'What will you report each month?',
    factoryjet: 'Calls, form leads and the searches that brought them, plus every change we made and what it cost after your approval.',
    traditional: 'A traffic chart and a list of keyword positions with no link to calls or sales.',
  },
];

const FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Cost' },
  { key: 'demand', label: 'Phoenix search demand' },
  { key: 'local', label: 'Valley suburbs and sectors' },
  { key: 'process', label: 'How the work runs' },
  { key: 'ai', label: 'AI search' },
];

const FAQ_ITEMS = [
  {
    category: 'pricing',
    question: 'How much should I expect to pay for SEO in Phoenix?',
    answer: 'Most local SEO retainers run about $500 to $3,000 a month, according to WebFX local SEO pricing updated Sep 2026. One-time local SEO projects run $500 to $5,000 on the same WebFX page. An Ahrefs survey of 439 providers put the average local SEO retainer at $1,557 a month. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'pricing',
    question: 'Is there cheap SEO in Phoenix that still works?',
    answer: 'Yes, if the scope is small and clear. A one-time project that fixes your Google Business Profile, listings and key pages costs far less than a retainer. WebFX lists one-time local SEO projects at $500 to $5,000 (Sep 2026). Rock-bottom monthly offers often mean bulk links or copied pages, which can hurt you. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'pricing',
    question: 'What does a Phoenix SEO audit cost?',
    answer: 'Most businesses pay $101 to $750 for a one-time SEO audit, based on WebFX data covering 43% of businesses. A good audit lists every problem, ranks it by impact and shows who already holds the top 10 results for your main search. You keep the report whether or not you hire anyone. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'pricing',
    question: 'Why not just run Google Ads for Phoenix searches?',
    answer: 'You can, but each click costs money every time. Google Ads suggests about $39.45 a click for "phoenix seo company" and $19.48 for "phoenix seo" (21 Oct 2026). Searches in your own trade can cost as much. Organic pages keep bringing visits after the work is done. Many Phoenix businesses run ads while their organic pages grow, then trim ad spend on the searches they start to win.',
  },
  {
    category: 'pricing',
    question: 'How much does a small business in Phoenix spend on SEO?',
    answer: 'Small business SEO usually costs $1,500 to $3,500 a month, according to WebFX SEO pricing updated Sep 2026. A business with one location and a short service list may need less, often a one-time project plus light monthly work. Ahrefs found an average of $2,917 a month across 439 providers. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'demand',
    question: 'How many people search for SEO in Phoenix each month?',
    answer: 'About 1,000 people a month search "phoenix seo" in the US, and about 880 search "phoenix seo company", based on Google Ads data we pulled on 21 Oct 2026. Another 590 search "phoenix seo services" and 320 search "local seo phoenix". Google groups close variants together, so treat these as rounded figures. The Google Ads bid for "phoenix seo company" was about $39.45 a click that day, which is why ranking for it is worth the work.',
  },
  {
    category: 'demand',
    question: 'What shows up when someone in Phoenix searches for an SEO company?',
    answer: 'On 21 Oct 2026 Google showed a map pack of three businesses, then 10 organic results. Of those 10, 4 were agency websites, 3 were list pages such as Semrush\'s agency directory and The Manifest, and 3 were social profiles on LinkedIn and Facebook. Your own trade\'s results may look different. We check them before we plan any work.',
  },
  {
    category: 'demand',
    question: 'Do I need to be on directories like The Manifest or Yelp?',
    answer: 'Often, yes. When list pages rank for your search, being on them puts you in front of buyers who read lists before they call. For "phoenix seo company" on 21 Oct 2026, 3 of the top 10 results were list pages. We check which directories rank for your trade in Phoenix, then fix or create your listing on each one, with the same name, address and phone number.',
  },
  {
    category: 'demand',
    question: 'How many Google reviews do I need to show in the Phoenix map pack?',
    answer: 'There is no fixed number, but you can measure the bar. For "phoenix seo company" on 21 Oct 2026, the three map pack businesses had 7, 47 and 4 reviews. Distance, categories and profile details also count. We count the reviews held by the map pack businesses in your trade and set a monthly target from that.',
  },
  {
    category: 'local',
    question: 'Can you do SEO for a business in Goodyear or the West Valley?',
    answer: 'Yes. We build a service page for Goodyear and each West Valley city you serve, with its own address details, service area and answers to local questions. Your Google Business Profile service area gets set to match. We work remotely with US clients and schedule calls in Arizona business hours, so a Goodyear owner gets the same process as a client in central Phoenix.',
  },
  {
    category: 'local',
    question: 'Do you work with Phoenix technology companies?',
    answer: 'Yes. Tech firms in Tempe and Chandler usually sell to other businesses, so their buyers search for a product type or a problem, not a city name. We write pages that answer those technical questions, add Organization and Product schema (code that labels your business for search engines) and get you listed on platforms such as Built In and Clutch where buyers compare vendors.',
  },
  {
    category: 'local',
    question: 'Can SEO help a Phoenix restaurant or food service business?',
    answer: 'Yes. For food service, most new customers come from the map pack and from listings. We fix your Google Business Profile hours, menu link and photos, then match your details on Yelp, Apple Business Connect and Bing Places. For food service suppliers who sell to other businesses, we write pages around the products and delivery areas your buyers search for.',
  },
  {
    category: 'local',
    question: 'Do you do national SEO for a company based in Phoenix?',
    answer: 'Yes. National SEO targets searches with no city in them, so the work shifts from map pack and suburb pages to topic pages, links from trade sites and technical fixes. Many Phoenix firms need both: local pages for the Valley and national pages for the product. We split the plan so you see which pages serve which goal.',
  },
  {
    category: 'local',
    question: 'Can one site rank in Scottsdale, Tempe, Mesa and Chandler at once?',
    answer: 'Yes, with a separate page for each city you serve. Each page needs its own content, such as the jobs you do there and questions buyers ask. Copying one page and swapping the city name tends to fail. If you have a physical office in more than one city, each office can have its own Google Business Profile.',
  },
  {
    category: 'process',
    question: 'What happens in the first month of a Phoenix SEO project?',
    answer: 'We start with the audit. We check your site, Google Business Profile and listings, then map the top 10 results and the map pack for your main search. You get a written list of problems ranked by impact. Each fix is quoted and approved by you before we start it. Founder Bhavesh Barot replies to questions within 24 hours.',
  },
  {
    category: 'process',
    question: 'Do I have to sign a long contract?',
    answer: 'No. There is no long-term contract. Each change is quoted and approved before we do it, and you can stop at any time. Your Google Business Profile, pages, schema and content stay yours. FactoryJet was founded in 2014, has worked with 500+ businesses and delivers 97% of work on time.',
  },
  {
    category: 'process',
    question: 'How long does SEO take to work in Phoenix?',
    answer: 'Profile and listing fixes can show up in the map pack within weeks. New pages usually take several months to rank, depending on how strong the top 10 results are for your search. A search where list pages and Facebook profiles fill the results, as with "phoenix seo company" on 21 Oct 2026, can open up faster than one held by large brands.',
  },
  {
    category: 'process',
    question: 'Is SEO legitimate, or is it a scam?',
    answer: 'SEO is legitimate work: fixing your site, profile and listings so search engines understand and show your business. The scams are firms that promise first place, hide what they did or keep your logins. Ask for a written list of every change, monthly reports tied to calls and leads, and ownership of your profile and pages.',
  },
  {
    category: 'process',
    question: 'Do you work with Phoenix marketing agencies?',
    answer: 'Yes. Marketing agencies can hire us for audits, technical fixes and page writing for their own clients, and we do white-label work where the agency keeps the client relationship. Direct business clients get the same audit, reporting and ownership terms. Every piece of work is quoted in writing and approved before it starts.',
  },
  {
    category: 'ai',
    question: 'Is SEO dead in 2026, or is it changing?',
    answer: 'It is changing. People still search Google; "phoenix seo" alone gets about 1,000 US searches a month (21 Oct 2026). More buyers now also ask ChatGPT or Perplexity for vendor names. Those tools pull from the same pages, reviews and lists that rank on Google. Clear pages, a complete profile and accurate listings help in both places.',
  },
  {
    category: 'ai',
    question: 'What is an AI Overview, and did one show for Phoenix SEO searches?',
    answer: 'An AI Overview is a short answer Google writes at the top of some results, with links to the pages it drew from. None showed when we searched "phoenix seo company" from Phoenix on 21 Oct 2026. Google decides when to show one. We write direct answers with sources and schema so your pages are easy to quote if it does.',
  },
  {
    category: 'ai',
    question: 'How do I get my Phoenix business named by ChatGPT?',
    answer: 'Make your business easy to find and easy to quote. AI assistants draw on websites, reviews and lists such as Clutch or Yelp. We write plain answers to the questions your buyers ask, add schema, and fix your listings on the directories that rank for your trade in Phoenix. No one can promise a mention, and we report what we see.',
  },
  {
    category: 'ai',
    question: 'What does AI SEO cost for a Phoenix small business?',
    answer: 'AI SEO, sometimes called GEO, runs about $1,500 to $5,000 a month for small businesses, according to WebFX pricing from Sep 2026. Most of the work overlaps with regular SEO: clear answers, schema and accurate listings. Many Phoenix businesses add it to local SEO work they already need. FactoryJet quotes a fixed price in writing after a short scoping call.',
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
  name: 'Phoenix Local SEO & Google Maps Optimization',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  serviceType: 'Local SEO, Google Business Profile Management & AI Search Optimization',
  description:
    'SEO for Phoenix, AZ clinics, law firms, contractors and semiconductor suppliers, from Scottsdale to Chandler. No long-term contract.',
  areaServed: [
    { '@type': 'City', name: 'Phoenix' },
    { '@type': 'City', name: 'Scottsdale' },
    { '@type': 'City', name: 'Tempe' },
    { '@type': 'City', name: 'Chandler' },
    { '@type': 'City', name: 'Gilbert' },
    { '@type': 'State', name: 'Arizona' },
  ],
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'SEO Agency for Phoenix, AZ Businesses | FactoryJet',
  description: 'SEO for Phoenix, AZ clinics, law firms, contractors and semiconductor suppliers, from Scottsdale to Chandler. No long-term contract.',
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
    { '@type': 'ListItem', position: 2, name: 'AI Search & SEO', item: 'https://factoryjet.com/services/ai-seo' },
    { '@type': 'ListItem', position: 3, name: 'Phoenix', item: CANONICAL },
  ],
};

export default function PhoenixSeoPage() {
  return (
    <>
      <script id="phx-seo-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="phx-seo-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="phx-seo-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="phx-seo-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>Phoenix Local SEO &amp; AI Citation Authority</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  SEO for Phoenix Businesses, From Scottsdale to Chandler
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  We work on your Google Business Profile, your service pages and your listings so customers searching in Scottsdale, Tempe, and the Camelback Corridor can find you. Monthly reporting covers calls and inquiries.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Free Local SEO Audit" region="us" btnVariant="primary-dark" modalVariant="seo" />
                  <a href="#phx-seo-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Phoenix Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/phoenix-web-design/hero.webp"
                  alt="Three people at a desk around a monitor showing a handbag shop page, with desert hills through the window"
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
                  src="/images/us/phoenix-web-design/valley-planning.webp"
                  alt="Two people drawing a flow diagram on a glass wall with desert plants outside, beside a monitor and a laptop that show a handbag"
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
                  Engineered for the Valley&apos;s High-Value Commercial Sectors
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  From Scottsdale aesthetic surgeons to Biltmore estate planning attorneys and East Valley commercial contractors, Phoenix businesses need verified search authority to capture high-ticket clients before competitors do.
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

        {/* ── 04. PHOENIX DISTRICTS & INDUSTRY DIRECTORY ── */}
        <section id="phx-seo-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Phoenix Commercial Corridor Depth</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored Local SEO for Phoenix&apos;s Core Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From Scottsdale aesthetic clinics to Biltmore corporate law firms and East Valley commercial contractors:
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
                Specialized Local Search Architectures for Phoenix
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every high-value commercial sector in the Valley demands tailored keyword targeting, entity schemas, and conversion pathways:
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
                What FactoryJet Does Differently for Phoenix Businesses
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                We searched "phoenix seo company" from Phoenix on 21 Oct 2026 and pulled US search volumes the same day; each point below starts from that data.
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
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.08em' }}>What we saw in Phoenix search, 21 Oct 2026:</span>
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
            badge="// PHOENIX LOCAL SEARCH & AI RANKING BLUEPRINT"
            title="4-Layer Local SEO Stack: Google Maps to AI Overviews"
            subtitle="Explore how GBP API optimization, multi-directory citation syncing, structured schema graphs, and AI citation crawlers work together in Phoenix local search."
            city="Phoenix"
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
                Each stage below names the Phoenix searches, suburbs and sectors we start from, so you can see the work before it starts.
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
                Evaluating Phoenix SEO Agencies: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Ask these four questions before you sign with any SEO firm in Phoenix, and compare the answers line by line.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '16px', overflow: 'hidden', maxWidth: '960px', margin: '0 auto' }}>
              <div className="rv-eval-head" style={{ background: '#141414', color: '#FFFFFF', padding: '16px 24px', fontWeight: 700, fontSize: '13.5px' }}>
                <div>Evaluation Factor</div>
                <div style={{ color: '#FF5622' }}>FactoryJet Engineering Model</div>
                <div style={{ color: '#A0A0B0' }}>Traditional SEO Agencies</div>
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
                  <div data-label="Traditional SEO Agencies" style={{ fontSize: '13px', color: '#6E6E80', lineHeight: 1.45 }}>
                    {crit.traditional}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTERACTIVE GOOGLE MAP PACK OPPORTUNITY ESTIMATOR ── */}
        <LocalSeoOpportunityEstimator city="Phoenix" region="us" />

        {/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION ── */}
        <FAQ
          eyebrow="PHOENIX LOCAL SEARCH INTELLIGENCE"
          headline="Frequently Asked Questions About Local SEO in Phoenix AZ"
          lead="Direct, plain English answers to what Phoenix business owners and marketing directors ask about search visibility:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 11. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <SeoCityLinksUS currentCity="phoenix" />
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
              Start With a Free Phoenix Local SEO Audit
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
