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
const CANONICAL = 'https://factoryjet.com/huntington-beach/seo';

export const metadata: Metadata = {
  title: 'SEO Agency for Huntington Beach, CA Businesses | FactoryJet',
  description:
    'SEO for Huntington Beach, CA surf brands, clinics, remodelers and aerospace shops. Google Maps listings and AI answer visibility. No long-term contract.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Agency for Huntington Beach, CA Businesses | FactoryJet',
    description:
      'SEO for Huntington Beach, CA surf brands, clinics, remodelers and aerospace shops. Google Maps listings and AI answer visibility. No long-term contract.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'SEO for Huntington Beach, CA businesses by FactoryJet' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency for Huntington Beach, CA Businesses | FactoryJet',
    description: 'SEO for Huntington Beach, CA surf brands, clinics, remodelers and aerospace shops. Google Maps listings and AI answer visibility. No long-term contract.',
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
    corridor: 'Downtown Huntington Beach & Pier District',
    focus: 'Hospitality, Surf Lifestyle & Coastal Retail',
    desc: 'The iconic heart of Surf City USA along Main Street and Pacific Coast Highway. Captures high-intent tourist dining, private event venue bookings, and action sports retail searches.',
  },
  {
    corridor: 'Pacific City & Oceanfront Corridor',
    focus: 'Luxury Dining, Wellness Resorts & Coastal Aesthetics',
    desc: 'Upscale coastal lifestyle and retail enclave. Demands high-trust customer review velocity, visual rich snippet schemas, and local influencer citations for luxury dining and wellness spas.',
  },
  {
    corridor: 'Bella Terra & Beach Boulevard Core',
    focus: 'Elective Healthcare, Law Firms & Home Contracting',
    desc: 'High-density commercial power center in North Huntington Beach. Intense local search competition for dental implants, plastic surgery, personal injury legal retainers, and roofing contractor consults.',
  },
  {
    corridor: 'Huntington Harbour & Marina District',
    focus: 'Yacht Brokerage, Marine Services & Luxury Real Estate',
    desc: 'Affluent private harbor and canal enclave. Captures high-ticket marine maintenance contracts, private wealth management consults, and luxury waterfront residential property inquiries.',
  },
  {
    corridor: 'Aerospace & Industrial Tech Center (Gothard)',
    focus: 'Aerospace Machining, Precision Tooling & Tech Services',
    desc: 'Advanced manufacturing and logistics corridor anchored by tier-1 aerospace suppliers along Gothard Street and Slater Avenue. B2B service queries demand technical capability schemas, AS9100/ISO credentials, and streamlined commercial RFQ funnels.',
  },
  {
    corridor: 'Sunset Beach & North Coast Strip',
    focus: 'Vacation Rentals, Coastal Contracting & Boutiques',
    desc: 'Historic coastal beachfront community along North PCH. Demands hyper-local geo-pages, verified vacation rental schemas, neighborhood entity citations, and high-converting seasonal hospitality booking funnels.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Surf Lifestyle, Action Sports & Outdoor Recreation',
    headline: 'Google Maps Listings for Surf City Retail & Action Sports Brands',
    description:
      'Iconic surf apparel brands, custom surfboard shapers, and action sports retailers across Huntington Beach rely on local search visibility to capture tourists and regional enthusiasts. We optimize Google Maps profiles, build event-driven landing pages, implement structured product schemas, and drive foot traffic.',
    image: '/images/us/huntington-beach/seo/huntington-beach-oc-market.webp',
    alt: 'A busy palm-lined shopping street with people at cafe tables under orange awnings',
    points: [
      'Store and LocalBusiness structured JSON-LD schema with live inventory and hours sync',
      'Google Maps 3-Pack ranking for high-intent surf shop, surfboard shaper, and coastal lifestyle terms',
      'Continuous review velocity management across Google Business Profile, Yelp, and Apple Maps',
    ],
  },
  {
    sector: 'Aesthetic Healthcare, Cosmetic Surgery & Dermatology',
    headline: 'Capturing High-Value Patients in Orange County Coastal Medical Corridors',
    description:
      'In Huntington Beach and Newport Beach competitive cosmetic surgery, medical spa, and dental implant markets, patients evaluate physician credentials and peer reviews thoroughly. We optimize Google Business Profiles, implement MedicalProcedure schemas, build procedure-specific silos, and generate steady review velocity.',
    image: '/images/us/huntington-beach/seo/card-dermatology-skin-check.webp',
    alt: 'A dermatologist in a blue tunic examining the forearm of a red-haired woman with a handheld magnifier in a bright treatment room',
    points: [
      'Multi-practitioner Google Business Profile optimization with procedure sub-categories',
      'MedicalProcedure and Physician structured JSON-LD schema linking hospital affiliations',
      'Automated patient review request funnels',
    ],
  },
  {
    sector: 'Commercial Construction, Luxury Remodeling & Roofing',
    headline: 'Driving High-Value Project Bidding Across Greater Huntington Beach & OC',
    description:
      'Commercial general contractors, luxury coastal home builders, and roofing specialists across Orange County require consistent project bidding opportunities. We build geo-targeted service area architectures, optimize Service Area Business profiles, and capture high-intent contracting keywords.',
    image: '/images/us/huntington-beach/seo/card-concrete-slab-smoothing.webp',
    alt: 'Two workers smoothing a freshly poured concrete slab, a man with a long float and a kneeling woman with a hand trowel in orange rubber boots',
    points: [
      'ServiceAreaBusiness schema markup defining multi-county coastal operational boundaries',
      'Hyper-local neighborhood geo-pages targeting Huntington Harbour, Sunset Beach, and Fountain Valley',
      'High-authority regional contractor directory citations and verified trade accreditations',
    ],
  },
  {
    sector: 'Aerospace Engineering, Precision Machining & Marine Tech',
    headline: 'Commercial Lead Engines for Huntington Beach Industrial Operators',
    description:
      'Precision aerospace machining shops, marine electronics fabricators, and defense subcontractors across the Gothard industrial corridor demand steady commercial RFQ volume. We build specialized technical service pages, link ISO and AS9100 safety certifications, and optimize commercial keyword rankings.',
    image: '/images/us/manufacturing-website-design/shop-floor.webp',
    alt: 'A machinist in safety glasses loading a metal part into a CNC lathe beside a tablet showing the part',
    points: [
      'Industrial engineering service schemas linking ISO, AS9100, and defense certifications',
      'High-intent B2B keyword silos targeting regional aerospace, defense, and maritime procurement teams',
      'Authoritative regional business citations across California commercial databases',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Four of the top ten results are list pages',
    problem: 'We searched “huntington beach seo company” from Huntington Beach on 21 Oct 2026. Four of the top 10 results were list or directory pages, including Yelp and the Semrush agency directory. One more was a Facebook profile.',
    solution: 'We check how your business looks on those lists before touching your website. We fix your Yelp page, claim the free profiles buyers open, and write a service page that answers what the list pages leave out.',
  },
  {
    num: '02',
    title: 'Thirteen reviews was enough for the map pack',
    problem: 'The three businesses in the map pack for that search had 70, 39 and 13 Google reviews, rated between 4.7 and 5 stars. On 21 Oct 2026, a business with 13 reviews held a map spot.',
    solution: 'We set your review target from the counts on your own search, not a guess. We add a short review request to your invoice or receipt flow and reply to every review so new ones keep arriving.',
  },
  {
    num: '03',
    title: 'No AI Overview, but buyers still ask AI tools',
    problem: 'Google showed no AI Overview for “huntington beach seo company” on 21 Oct 2026. The People Also Ask box did ask “Is SEO dead or evolving in 2026?”, so buyers are weighing AI tools too.',
    solution: 'We write plain answers to the questions your buyers ask and add schema, which is code that labels your business facts. Then we check by hand whether ChatGPT and Perplexity name you, and report the dated result.',
  },
  {
    num: '04',
    title: 'City-name searches are small here',
    problem: 'Google Ads data from 21 Oct 2026 shows about 30 searches a month for “huntington beach seo” and about 10 for “local seo huntington beach”. Most buyers here search by service or neighborhood, not by city name.',
    solution: 'We target the phrases your customers type, such as a service plus Sunset Beach or Huntington Harbour. We track calls and forms from each page so you can see which searches bring paying work.',
  },
];

const ROADMAP_STEPS = [
  {
    phase: 'Phase 01',
    title: 'Record what Google shows today',
    desc: 'We search your main service from Huntington Beach, note the map pack, review counts and list pages, and compare your Google Business Profile against them.',
    deliverables: ['Map pack and review count snapshot', 'Business Profile category and service check', 'List of directories that outrank you'],
  },
  {
    phase: 'Phase 02',
    title: 'Fix the profile and the service pages',
    desc: 'We correct categories, hours and service areas, then write a page per service naming the areas you serve, such as Sunset Beach, Huntington Harbour or Fountain Valley.',
    deliverables: ['One page per core service', 'LocalBusiness and FAQ schema added', 'Name, address and phone matched everywhere'],
  },
  {
    phase: 'Phase 03',
    title: 'Grow reviews and clean up listings',
    desc: 'We set a monthly review goal from your map pack rivals (13 to 70 reviews on our 21 Oct 2026 check) and fix Yelp, Apple Business Connect and Bing Places.',
    deliverables: ['Review request text and counter card', 'Yelp, Apple and Bing listings corrected', 'Reply drafts for new reviews'],
  },
  {
    phase: 'Phase 04',
    title: 'Report calls, forms and AI mentions',
    desc: 'Each month we report calls, forms and map views by page, and test whether ChatGPT and Perplexity name you for Orange County questions.',
    deliverables: ['Monthly report with dated screenshots', 'AI answer check on agreed questions', 'Next month\'s changes, quoted for approval'],
  },
];

const EVALUATION_CRITERIA = [
  {
    label: 'Which searches will you target, and how many people make them?',
    factoryjet: 'We show Google Ads volume for each phrase. “huntington beach seo” gets about 30 searches a month, so we add service and neighborhood phrases with more buyers.',
    traditional: 'A promise to rank for your city name, with no search numbers attached to it.',
  },
  {
    label: 'How many reviews do I need to reach the map pack?',
    factoryjet: 'We count reviews for the three map pack businesses on your own search. For SEO companies on 21 Oct 2026 the counts were 13, 39 and 70.',
    traditional: '“More reviews are always better,” with no target and no plan for asking customers.',
  },
  {
    label: 'What will you do about Yelp and the list sites?',
    factoryjet: 'Four of the top 10 results for “huntington beach seo company” were list pages. We fix your profiles on whichever lists show up for your service.',
    traditional: 'They work only on your website and skip the directory pages buyers click first.',
  },
  {
    label: 'Who owns the work if I leave?',
    factoryjet: 'You do. Your Google Business Profile, pages, schema and content stay yours. There is no long-term contract, and each change is quoted and approved first.',
    traditional: 'The agency holds the profile login or the site, so leaving means starting from zero.',
  },
];

const FAQ_CATEGORIES = [
  { key: 'tips', label: 'Ranking tips you can do yourself' },
  { key: 'local', label: 'Neighborhoods and local businesses' },
  { key: 'pricing', label: 'Cost and contracts' },
  { key: 'hiring', label: 'Hiring an SEO company' },
  { key: 'ai', label: 'AI search' },
];

const FAQ_ITEMS = [
  {
    category: 'tips',
    question: 'How do I rank my business in Huntington Beach on Google?',
    answer: 'Start with your Google Business Profile, because the map pack shows above the normal results. Pick the most exact main category, add every service, set real hours and upload photos taken at your business. Then ask each happy customer for a review. On 21 Oct 2026, the three map pack businesses for “huntington beach seo company” had 13, 39 and 70 reviews. That gives you a target. Last, give each service you sell its own page on your website.',
  },
  {
    category: 'tips',
    question: 'What are some local SEO tips for Huntington Beach businesses?',
    answer: 'Here are five steps you can do this week. Use the same name, address and phone number on your website, Google, Yelp, Apple Business Connect and Bing Places. Answer every Google review, good or bad. Post a photo or update on your profile each week. Name the area, like Huntington Harbour or Sunset Beach, on the service pages that serve it. Put your phone number in plain text on every page so people can tap it.',
  },
  {
    category: 'tips',
    question: 'How many Google reviews does a Huntington Beach business need?',
    answer: 'Enough to sit near the businesses already in the map pack for your search. We checked “huntington beach seo company” on 21 Oct 2026. The three map pack businesses had 70, 39 and 13 reviews, rated 4.7, 5 and 4.8 stars. So 13 reviews was enough to get in for that search. Search your own service from your shop, count the reviews of the top three, and aim for the middle number first.',
  },
  {
    category: 'tips',
    question: 'Can I do SEO for my small business in Huntington Beach myself?',
    answer: 'Yes, most of the basics take a few hours a month. Keep your Google Business Profile complete, ask for reviews, and write a clear page for each service, with a price range if you can share one. Owners usually get stuck on the technical part: site speed, schema (code that labels your business facts for Google) and merging duplicate listings. That part is worth paying someone for.',
  },
  {
    category: 'tips',
    question: 'Does Yelp still matter for SEO in Huntington Beach?',
    answer: 'Yes. On 21 Oct 2026, the Yelp page “TOP 10 BEST Seo Company in Huntington Beach, CA” ranked sixth for “huntington beach seo company”. When Google ranks a Yelp list, buyers click it and compare businesses there. Claim your free Yelp page, match your hours and phone number to Google, and add real photos. You do not need Yelp ads to appear on its list pages.',
  },
  {
    category: 'tips',
    question: 'How long does it take to rank a business in Huntington Beach?',
    answer: 'Profile fixes can show in Google Maps within a few weeks. New service pages usually take a few months to settle in the normal results, depending on how many reviews and links your rivals have. Look at who you are up against first: on 21 Oct 2026, list pages held four of the top 10 spots for “huntington beach seo company”. We do not promise a rank or a date.',
  },
  {
    category: 'local',
    question: 'Can you help my business show up in Sunset Beach searches?',
    answer: 'Yes. Sunset Beach sits on Pacific Coast Highway at the north end of Huntington Beach, and people search it by name. If you serve it, name it on a service page with real details: the streets you cover, how soon you can arrive and jobs you have done there. Add it as a service area on your Google Business Profile. A thin page that only swaps the place name will not help.',
  },
  {
    category: 'local',
    question: 'Do you work with businesses in Capistrano Beach?',
    answer: 'Yes. We can work with businesses anywhere in Orange County, Capistrano Beach included, and we work remotely. The steps match Huntington Beach: a complete Google Business Profile, steady reviews, and one page per service that names the area. Search your main service from Capistrano Beach and write down who shows in the map pack. Those businesses are your competition, whatever their street address says.',
  },
  {
    category: 'local',
    question: 'How do I get found by people searching near the 405 and Brookhurst?',
    answer: 'Google ranks map results partly by distance from the person searching. Someone near the 405 and Brookhurst Street sees businesses close to that spot first. You cannot move your shop, but you can name nearby cross streets and landmarks on your location page, list the neighborhoods you serve, and collect reviews that mention the area. Searches naming that intersection showed up in the Huntington Beach search data we reviewed.',
  },
  {
    category: 'local',
    question: 'How should a surf shop in Huntington Beach do SEO?',
    answer: 'Start with Google Maps, because visitors search for a surf shop from their phone near the pier. Choose “Surf shop” as the main category if it fits, add rentals and lessons as services, and post photos of your racks and boards. Keep summer and holiday hours current. List the brands you carry on your website, since people search by brand. Ask renters for a review when they return the board.',
  },
  {
    category: 'local',
    question: 'What local SEO works for home service companies in Huntington Beach?',
    answer: 'Contractors, plumbers and roofers usually have no storefront, so set your Google Business Profile up as a service-area business and hide your home address. List the cities you drive to, such as Huntington Beach, Fountain Valley and Costa Mesa. Write one page per job type with photos from real jobs. Ask for a review when you send the final invoice, because a finished job is fresh in the customer\'s mind.',
  },
  {
    category: 'pricing',
    question: 'How much does SEO cost for a small business in Huntington Beach?',
    answer: 'Small business SEO usually runs $1,500 to $3,500 a month, according to WebFX SEO pricing (updated Sep 2026). WebFX puts local SEO retainers at about $500 to $3,000 a month, and one-time local SEO projects at $500 to $5,000. An Ahrefs survey of 439 providers found an average of $1,557 a month for local SEO. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'pricing',
    question: 'How much does a one-time SEO audit cost?',
    answer: 'Most businesses pay $101 to $750 for a one-time SEO audit, according to WebFX, which found 43% of businesses in that range. An audit should list what is broken on your website and Google Business Profile, sorted by what to fix first. Ask for a sample audit before you pay. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'pricing',
    question: 'Do I have to sign a long-term SEO contract?',
    answer: 'No. FactoryJet works with no long-term contract. Each change is quoted and approved before we start it, so you know what every dollar pays for. Your Google Business Profile, pages, schema and content stay yours if you stop. Ask any Huntington Beach SEO firm the same question, and get the answer in writing before you sign anything.',
  },
  {
    category: 'pricing',
    question: 'Is it worth hiring an SEO company in Huntington Beach?',
    answer: 'It depends on what one new customer is worth to you. If a single job pays a few thousand dollars, two or three extra calls a month can cover the fee. If your sales are small walk-in purchases, the free steps on your Google profile may be enough. Google\'s People Also Ask box showed this exact question on our 21 Oct 2026 search for “huntington beach seo company”.',
  },
  {
    category: 'hiring',
    question: 'What does an SEO company do for a local business?',
    answer: 'An SEO company makes your business easier to find on Google and other search tools. For a local business that means fixing your Google Business Profile, writing service pages, adding schema, cleaning up listings on sites like Yelp and Bing Places, and helping you ask customers for reviews. A good firm also reports which calls and forms came from search. Ask to see a sample monthly report before you hire.',
  },
  {
    category: 'hiring',
    question: 'How do I check out a Huntington Beach SEO company before hiring?',
    answer: 'Search the phrase you want to rank for and read the results yourself. On 21 Oct 2026, “huntington beach seo company” showed five agency sites, four list pages and one Facebook page in the top 10. Lists like Yelp and the Semrush agency directory are a place to start, and they prove little on their own. Ask each firm for dated screenshots of past work and who will own the accounts.',
  },
  {
    category: 'hiring',
    question: 'How many people in Huntington Beach search for an SEO company?',
    answer: 'Not many. Google Ads data from 21 Oct 2026 shows about 30 searches a month for “huntington beach seo”, about 30 for “seo huntington beach”, about 20 for “huntington beach seo company” and about 10 for “local seo huntington beach”. Google groups close variants together, so some of those numbers overlap. Most local buyers search for the service they need and never type the word SEO.',
  },
  {
    category: 'hiring',
    question: 'Who is FactoryJet, and how do we work together?',
    answer: 'FactoryJet was founded in 2014 and has worked with 500+ businesses, with 97% on-time delivery. We work remotely with US clients and schedule calls in US business hours. Founder Bhavesh Barot replies to new inquiries within 24 hours. We also do white-label work for agencies. You get one written plan, and you approve each change before it goes live.',
  },
  {
    category: 'ai',
    question: 'What is AI search optimization for a Huntington Beach business?',
    answer: 'AI search optimization means making your business easy for ChatGPT, Perplexity and Google\'s AI answers to read and quote. In practice that is plain answers to common customer questions, schema that labels your name, address and services, and matching facts on every listing. WebFX puts AI SEO at $1,500 to $5,000 a month for small businesses (Sep 2026). FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'ai',
    question: 'Does Google show AI answers for Huntington Beach SEO searches?',
    answer: 'Not on the search we checked. On 21 Oct 2026, Google showed no AI Overview for “huntington beach seo company” searched from Huntington Beach. It showed a map pack, ten normal results and a People Also Ask box. That can change any week, and question-style searches often do get AI answers. Nobody can promise you a spot in one, but we write pages so they can be quoted.',
  },
  {
    category: 'ai',
    question: 'Is SEO dead in 2026, or still worth doing?',
    answer: 'SEO is still worth doing, and our Huntington Beach check shows why. On 21 Oct 2026, the results for “huntington beach seo company” had a map pack with three businesses and ten normal results, and no AI Overview. The People Also Ask box listed “Is SEO dead or evolving in 2026?” as a question. The work now covers AI tools too, which read the same pages Google does.',
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
  name: 'Huntington Beach Local SEO & Google Maps Optimization',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  serviceType: 'Local SEO, Google Business Profile Optimization, Schema Markup & AI Citation Strategy',
  description:
    'SEO for Huntington Beach, CA surf brands, clinics, remodelers and aerospace shops. Google Maps listings and AI answer visibility. No long-term contract.',
  areaServed: [
    { '@type': 'City', name: 'Huntington Beach' },
    { '@type': 'City', name: 'Fountain Valley' },
    { '@type': 'City', name: 'Costa Mesa' },
    { '@type': 'City', name: 'Newport Beach' },
    { '@type': 'City', name: 'Seal Beach' },
    { '@type': 'State', name: 'California' },
  ],
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'SEO Agency for Huntington Beach, CA Businesses | FactoryJet',
  description: 'SEO for Huntington Beach, CA surf brands, clinics, remodelers and aerospace shops. Google Maps listings and AI answer visibility. No long-term contract.',
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
    { '@type': 'ListItem', position: 2, name: 'Local SEO', item: 'https://factoryjet.com/services/ai-seo' },
    { '@type': 'ListItem', position: 3, name: 'Huntington Beach', item: CANONICAL },
  ],
};

export default function HuntingtonBeachSeoPage() {
  return (
    <>
      <script id="hb-seo-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="hb-seo-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="hb-seo-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="hb-seo-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>Huntington Beach Local SEO &amp; Google Maps Engineering</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  SEO for Huntington Beach and Orange County Businesses
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  We work on your Google Business Profile, your service pages and your listings so customers searching in Huntington Beach and Orange County can find you.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Free Local SEO Audit" region="us" btnVariant="primary-dark" modalVariant="seo" />
                  <a href="#hb-seo-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Surf City Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/huntington-beach/seo/hero-florist-bouquet-handover.webp"
                  alt="A florist handing a paper-wrapped bouquet across the counter to an older man, beside a tablet showing a pale map with three pins"
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
                  src="/images/us/huntington-beach/seo/team-shop-street-phone-map.webp"
                  alt="A woman in a straw hat and a man in a blue shirt looking at a phone that shows a map with pins on a sunny street of white shops"
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
                  Local Search Engineered for Orange County Leaders
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  From Downtown surf brands and Pacific City dining venues to Bella Terra medical aesthetics and Gothard industrial manufacturers, we build high-converting search architectures that capture Southern California buyers.
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
                  <ModalCTAButton label="Schedule Local SEO Consultation" region="us" btnVariant="primary-dark" modalVariant="seo" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04. HUNTINGTON BEACH DISTRICTS & INDUSTRY DIRECTORY ── */}
        <section id="hb-seo-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Orange County Coastal Depth</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored Local Search Optimization for Surf City Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From Downtown surf lifestyle brands to Bella Terra medical aesthetics and Gothard aerospace fabricators:
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
                Specialized Local SEO Strategies for Orange County Brands
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every commercial sector across Huntington Beach demands tailored schema models, citation graphs, and map optimization:
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
                What FactoryJet Does Differently for Huntington Beach Businesses
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Each point below starts with something we measured in Huntington Beach Google results on 21 Oct 2026, then says what we change for a client here.
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
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.08em' }}>What we saw in Huntington Beach search, 21 Oct 2026:</span>
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
            badge="// HUNTINGTON BEACH LOCAL SEARCH &amp; AI RANKING BLUEPRINT"
            title="4-Layer Local SEO Stack: Google Maps to AI Overviews"
            subtitle="Explore how GBP API optimization, multi-directory citation syncing, structured schema graphs, and AI citation crawlers work together in Huntington Beach local search."
            city="Huntington Beach"
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
                Four stages, built around what Huntington Beach buyers search and what Google showed them on 21 Oct 2026.
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
                Evaluating Huntington Beach SEO Agencies: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Ask any Huntington Beach SEO firm these four questions before you sign, and compare the answers to what we measured on 21 Oct 2026.
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
        <LocalSeoOpportunityEstimator city="Huntington Beach" region="us" />

        {/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION ── */}
        <FAQ
          eyebrow="HUNTINGTON BEACH LOCAL SEARCH INTELLIGENCE"
          headline="Frequently Asked Questions About Local SEO in Huntington Beach CA"
          lead="Direct, plain English answers to what Orange County business owners and marketing leaders ask about Google Maps 3-Pack and search visibility:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 11. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <SeoCityLinksUS currentCity="huntington-beach" />
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
              Start With a Free Huntington Beach Local SEO Audit
            </h2>

            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Ask for a free review of your Google Business Profile and local listings. We will show you what is missing or inconsistent, and what we would fix first.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get Your Free Local SEO Audit" region="us" btnVariant="primary-light" modalVariant="seo" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale="us" />
    </>
  );
}
