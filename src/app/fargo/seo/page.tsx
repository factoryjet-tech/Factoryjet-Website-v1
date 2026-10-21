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
const CANONICAL = 'https://factoryjet.com/fargo/seo';

export const metadata: Metadata = {
  title: 'SEO Agency for Fargo, ND Businesses | FactoryJet',
  description:
    'SEO for Fargo, ND farm equipment dealers, contractors, clinics and law firms across the Red River Valley. No long-term contract.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Agency for Fargo, ND Businesses | FactoryJet',
    description:
      'SEO for Fargo, ND farm equipment dealers, contractors, clinics and law firms across the Red River Valley. No long-term contract.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'SEO for Fargo, ND businesses by FactoryJet' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency for Fargo, ND Businesses | FactoryJet',
    description: 'SEO for Fargo, ND farm equipment dealers, contractors, clinics and law firms across the Red River Valley. No long-term contract.',
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
    corridor: 'Downtown Fargo & Broadway Historic Core',
    focus: 'Corporate Law, Advisory & Tech Consulting',
    desc: 'The vibrant entrepreneurial and financial core along Broadway and Main Avenue. Captures high-value commercial litigation retainers, corporate wealth accounting consults, and B2B technology client inquiries.',
  },
  {
    corridor: 'West Fargo Commercial & Industrial Spine',
    focus: 'Commercial Contracting, Heavy Machinery & Logistics',
    desc: 'Major industrial and freight logistics distribution artery along Main Avenue West and Sheyenne Street. Drives steady inbound emergency service calls, fleet maintenance contracts, and commercial construction project bids.',
  },
  {
    corridor: 'NDSU Campus & Innovation Corridor',
    focus: 'Biomedical Tech, Engineering & Patent Law',
    desc: 'Academic research and technology park hub anchored by North Dakota State University. B2B service queries demand technical capability schemas, patent attorney credentials, and enterprise RFP submission funnels.',
  },
  {
    corridor: '13th Avenue South & 45th Street Power Hub',
    focus: 'Elective Healthcare, Dental Implants & Wellness',
    desc: 'High-density commercial retail and outpatient medical highway. Intense local search competition for cosmetic dentistry, dental implants, plastic surgery, and specialized aesthetic wellness consultations.',
  },
  {
    corridor: 'Red River Valley Healthcare & Medical Enclave',
    focus: 'Specialized Medicine, Orthopedics & Cardiology',
    desc: 'Regional medical district anchored by the flagship campuses of Sanford Medical Center Fargo and Essentia Health 32nd Avenue. Captures high-intent private patient appointments, physical therapy consults, and specialist referral traffic.',
  },
  {
    corridor: 'Moorhead Border Regional Commerce District',
    focus: 'Cross-Border Contracting, Fleets & Regional Services',
    desc: 'Dual-state commercial and transportation corridor serving eastern North Dakota and western Minnesota. Demands multi-state service area schemas, dual licensing disclosures, and multi-county citation synchronization across Cass and Clay counties.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Agricultural Equipment, Farming Supplies & Rural Contracting',
    headline: 'Commercial Lead Engines for Red River Valley Ag Leaders',
    description:
      'As America agricultural powerhouse, Fargo seed distributors, precision farming implement dealers, and rural electrical contractors demand steady commercial RFQ volume. We build specialized technical service pages, link agricultural manufacturer certifications, and optimize commercial keyword rankings.',
    image: '/images/us/fargo/seo/card-tractor-hose-check.webp',
    alt: 'A woman checking a hose on a grey tractor while a man in a plaid shirt holds a wrench and two others look on in an equipment yard',
    points: [
      'Agricultural and industrial service schemas linking dealership accreditations and equipment brands',
      'High-intent B2B keyword silos targeting regional farm operators and grain elevator managers',
      'Authoritative regional business citations across North Dakota and Minnesota commercial directories',
    ],
  },
  {
    sector: 'Commercial Construction, Roofing & Cold-Climate Engineering',
    headline: 'Driving High-Value Project Bidding Across Greater Fargo & Cass County',
    description:
      'Commercial general contractors, specialized flat roofing companies, and structural engineering firms across Fargo require consistent commercial bidding opportunities. We build geo-targeted service area architectures, optimize Service Area Business profiles, and capture high-intent commercial contracting keywords.',
    image: '/images/us/fargo/seo/card-wall-insulation-board-fitting.webp',
    alt: 'Two builders in white hard hats fitting a foam insulation board to a concrete wall, one pressing it flat and one holding an orange rubber mallet',
    points: [
      'ServiceAreaBusiness schema markup defining multi-county Red River Valley operational boundaries',
      'Hyper-local neighborhood geo-pages targeting West Fargo, Horace, Dilworth, and Moorhead',
      'High-authority regional contractor directory citations and verified trade accreditations',
    ],
  },
  {
    sector: 'Specialized Healthcare, Orthopedics & Cardiology',
    headline: 'Capturing High-Value Patients in Fargo Regional Medical Corridors',
    description:
      'In Fargo competitive orthopedic surgery, cosmetic dentistry, and cardiology markets, patients evaluate physician credentials and peer reviews thoroughly. We optimize Google Business Profiles, implement MedicalProcedure schemas, build procedure-specific silos, and generate steady review velocity.',
    image: '/images/us/fargo/seo/card-wrist-brace-fitting.webp',
    alt: 'A doctor in a white coat fastening a wrist brace on an older man sitting on an exam table in a bright clinic room',
    points: [
      'Multi-practitioner Google Business Profile optimization with procedure sub-categories',
      'MedicalProcedure and Physician structured JSON-LD schema linking hospital affiliations',
      'Automated patient review request funnels',
    ],
  },
  {
    sector: 'Legal Practices, Agricultural Estate Planning & Corporate Law',
    headline: 'Local Search for Fargo Law Firms & Estate Planners',
    description:
      'Downtown Fargo law firms competing for agricultural estate planning, farm succession, and corporate litigation retainers must rank in the top positions on Google Maps and organic search. We engineer authoritative legal practice area pages, optimize attorney schema markup, and build high-quality local legal citations.',
    image: '/images/us/fargo/seo/card-estate-lawyer-client-handshake.webp',
    alt: 'A lawyer in a navy suit shaking hands across a desk with a woman in a plaid shirt and work jacket in a small bright law office',
    points: [
      'Attorney and LegalService structured JSON-LD schema linking State Bar of North Dakota credentials',
      'Practice area landing page silos capturing high-intent retainers across Cass and Clay Counties',
      'Authoritative local business directory citations and legal association listings',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Directories Hold Three of the Top 10 Spots',
    problem: 'We searched "fargo seo company" from Fargo on 21 Oct 2026. Three of the top 10 results were list or directory pages, including Expertise.com and Yelp. Two more were Facebook posts. Only five were agency or business websites.',
    solution: 'We get your business listed on the directories that already rank for your service, with the same name, address and phone on each one. Then we build your own service page so it can win the clicks those lists are taking.',
  },
  {
    num: '02',
    title: 'The Map Pack Is Won With Dozens of Reviews',
    problem: 'The three businesses in the Fargo map pack that day had 31, 32 and 15 Google reviews, rated between 4.8 and 5 stars. One business made the top three with only 15 reviews.',
    solution: 'Fifteen reviews is a reachable target for most Fargo firms. We set up a simple ask after each finished job, reply to every review, and fix your Google Business Profile categories so relevance does the rest of the work.',
  },
  {
    num: '03',
    title: 'No AI Overview, So Plain Answers Still Win',
    problem: 'Google showed no AI Overview on "fargo seo company" on 21 Oct 2026. The People Also Ask box asked basic questions, such as whether SEO is legitimate and what an SEO agency is.',
    solution: 'We write your pages to answer those buyer questions in the first two sentences, then add FAQ schema built from the same text. The page reads well for a person today and can be quoted by an answer engine later.',
  },
  {
    num: '04',
    title: 'Fargo Searches Are Few, So Each One Counts',
    problem: 'Google Ads data from 21 Oct 2026 shows about 50 monthly searches each for "fargo seo" and "seo fargo", 20 for "seo company fargo" and about 10 for "local seo fargo". Small numbers, and each searcher is close to buying.',
    solution: 'We skip broad traffic goals. We track calls, form fills and direction requests from your profile, so you can see which of those searches turned into paying work.',
  },
];

const ROADMAP_STEPS = [
  {
    phase: 'Phase 01',
    title: 'Audit What Fargo Searchers See',
    desc: 'We check your site, your Google Business Profile and your listings on Yelp, BBB, Bing Places and Apple Business Connect against the live Fargo results.',
    deliverables: ['Dated screenshot of your main Fargo search', 'Listing errors across directories, one sheet', 'Fix list ranked by likely calls'],
  },
  {
    phase: 'Phase 02',
    title: 'Build Pages for Each Town You Serve',
    desc: 'One clear page per service, plus pages for West Fargo, Moorhead and Grand Forks where your work there differs. Each page answers real buyer questions first.',
    deliverables: ['Service pages with plain first answers', 'Town pages for Moorhead and Grand Forks', 'LocalBusiness and FAQ schema from page text'],
  },
  {
    phase: 'Phase 03',
    title: 'Reviews and Listings That Match',
    desc: 'The map pack leaders had 15 to 32 reviews on 21 Oct 2026. We set up a review routine and clean every listing across both states.',
    deliverables: ['Review request text for your team', 'Matching name, address, phone everywhere', 'Profile categories and services rebuilt'],
  },
  {
    phase: 'Phase 04',
    title: 'Report Calls, Then Adjust',
    desc: 'Each month we report calls, forms and profile actions, rerun the Fargo search, and propose the next changes for you to approve.',
    deliverables: ['Monthly report with dated search snapshot', 'Search Console query review', 'Next changes, quoted before work starts'],
  },
];

const EVALUATION_CRITERIA = [
  {
    label: 'Can you show me today\'s Fargo results for my service?',
    factoryjet: 'We show the live results page with a date, how many spots are directories, and the review counts of the three map pack businesses. On 21 Oct 2026 those counts were 31, 32 and 15.',
    traditional: 'A ranking report with no date, no screenshot and no mention of which directories hold the top spots.',
  },
  {
    label: 'How many reviews do I need, and how will we get them?',
    factoryjet: 'We give you a target from the current map pack, then write the review request your staff sends after each job. One Fargo map pack business had 15 reviews.',
    traditional: 'Talk of a review tool subscription with no target number and no plan for who sends the requests.',
  },
  {
    label: 'Will you cover Moorhead and the Minnesota side?',
    factoryjet: 'Yes. We set your profile service area across the Red River, keep Minnesota listings consistent, and only build a Moorhead page if your work there differs.',
    traditional: 'Dozens of copied town pages with only the city name swapped, which Google tends to ignore.',
  },
  {
    label: 'Who owns the profile, pages and content if we stop?',
    factoryjet: 'You do. Your Google Business Profile, pages, schema and content stay yours, and there is no long-term contract.',
    traditional: 'The agency keeps admin access to your profile or hosts the pages, so leaving means starting over.',
  },
];

const FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Cost, contracts and who you work with' },
  { key: 'local', label: 'Fargo, Moorhead and North Dakota' },
  { key: 'industry', label: 'Trades and industries' },
  { key: 'results', label: 'Results and reporting' },
  { key: 'ai', label: 'AI search and basics' },
];

const FAQ_ITEMS = [
  {
    category: 'pricing',
    question: 'How much does SEO cost for a small business in Fargo?',
    answer: 'Most small businesses pay $1,500 to $3,500 a month for SEO, according to WebFX pricing updated in September 2026. An Ahrefs survey of 439 providers found an average of $2,917 a month. Fargo is a smaller search market than Minneapolis, so you may need less ongoing work than a big city firm. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'pricing',
    question: 'What does local SEO cost in Fargo, ND?',
    answer: 'Local SEO retainers usually run about $500 to $3,000 a month, and one-time local projects run $500 to $5,000, per WebFX local SEO pricing updated September 2026. The same Ahrefs survey put the average local SEO price at $1,557 a month. Local SEO means work on your Google Business Profile, reviews and listings so you show in the map results. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'pricing',
    question: 'How much does an SEO audit cost for a Fargo-Moorhead business?',
    answer: 'Most businesses pay $101 to $750 for a one-time SEO audit, according to WebFX, which found 43% of businesses in that range. An audit is a check of your site, profile and listings with a list of what to fix. Ours includes a dated screenshot of the Fargo results for your main search. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'pricing',
    question: 'Do I have to sign a long contract for SEO?',
    answer: 'No. FactoryJet has no long-term contract. Each change is quoted, and you approve it before we start. Your Google Business Profile, pages, schema and content stay yours if you stop working with us. Ask any Fargo firm the same question in writing, because some keep admin access to your profile, and that makes leaving costly.',
  },
  {
    category: 'local',
    question: 'How many people in Fargo search for an SEO company?',
    answer: 'Not many. Google Ads data from 21 Oct 2026 shows about 50 searches a month each for "fargo seo" and "seo fargo". "Seo company fargo" gets about 20. "Fargo seo company", "fargo seo agency" and "local seo fargo" get about 10 each. Google groups close variants, so treat these as rough. The point holds: in a market this size, a handful of searches a week can decide who gets the call.',
  },
  {
    category: 'local',
    question: 'What shows up when someone in Fargo searches for an SEO company?',
    answer: 'On 21 Oct 2026 we searched "fargo seo company" from Fargo. Google showed a map pack of three businesses and 10 regular results. Five of those 10 were agency or business sites. Three were lists or directories, including Expertise.com and Yelp. Two were Facebook posts. There was no AI Overview. A Fargo business can get found through those directories as well as through its own site.',
  },
  {
    category: 'local',
    question: 'How many Google reviews do I need to get into the Fargo map pack?',
    answer: 'Fewer than you might think. On 21 Oct 2026 the three map pack businesses for "fargo seo company" had 31, 32 and 15 reviews, with ratings from 4.8 to 5 stars. Reviews are one signal. Google also weighs how close you are to the searcher and how well your profile matches the search. Counts differ by trade, so we check your own service search first.',
  },
  {
    category: 'local',
    question: 'Can one SEO plan cover both Fargo and Moorhead?',
    answer: 'Yes. Moorhead sits across the Red River in Minnesota, so one metro spans two states. We set your Google Business Profile service area to include both, keep your listings matching on Bing Places and Apple Business Connect, and add a Moorhead page only if you do different work or hold different licenses there. Copied town pages with a swapped city name rarely help.',
  },
  {
    category: 'local',
    question: 'Do you do SEO for businesses in Grand Forks?',
    answer: 'Yes. Grand Forks businesses search for local SEO and small business SEO too, and the work is the same: a strong Google Business Profile, matching listings, and clear service pages. Google shows map results near the searcher, so a Fargo profile rarely shows to someone in Grand Forks. If you serve both cities, each location needs its own address or a clear service area. We work remotely and schedule calls in US business hours.',
  },
  {
    category: 'local',
    question: 'Can my business rank across all of North Dakota?',
    answer: 'In the map results, mostly no. Google shows map businesses close to the searcher, so a Fargo address rarely appears in Bismarck or Minot. Statewide reach comes from regular results: pages that describe the work you do in each place, backed by real jobs or staff there. We tell you which towns are worth a page and which are not, before you pay for them.',
  },
  {
    category: 'industry',
    question: 'Can SEO help an auto repair shop in Fargo?',
    answer: 'Yes. Most auto repair customers search on a phone and call from the map results, so the Google Business Profile matters most. We set the right categories, list each service you offer, add photos of your bays, and build a steady review routine. On your site, we add a page for each repair you want more of, such as brakes or diesel work. We then track calls from the profile each month.',
  },
  {
    category: 'industry',
    question: 'Does local SEO work for home services companies in Fargo, ND?',
    answer: 'Yes. Plumbers, roofers and HVAC firms often work from home or a shop, so Google treats them as service area businesses. You can hide your address and list the towns you cover, such as West Fargo, Horace and Moorhead. We build a page for each main service, set up review requests after each job, and make sure winter emergency work is on your profile.',
  },
  {
    category: 'industry',
    question: 'We are a machinery manufacturer with almost no online presence. Where do we start?',
    answer: 'Start with pages buyers and engineers look for: one page per product line, with specs, capacities and downloadable data sheets. Add a page on custom work and the industries you serve. Then list the company on Google Business Profile and Bing Places. Trade show and existing customer sales still matter, so we turn your show materials into pages that keep working after the show ends.',
  },
  {
    category: 'industry',
    question: 'Do you do SEO for dentists and clinics in Fargo?',
    answer: 'Yes. For a dental or medical practice we work on the Google Business Profile for each location, a clear page for each procedure, and schema that tells Google who the practice and providers are. Schema is code on the page that labels facts like your address and services. We do not write medical claims we cannot support, and every page goes to you for approval first.',
  },
  {
    category: 'results',
    question: 'How long does SEO take to work in Fargo?',
    answer: 'Profile and listing fixes can show in the map results within weeks, because Google reads them quickly. New pages take longer, often months, to earn a steady spot. Fargo has fewer competing pages than a large city, which can help, but we do not promise a timeline or a ranking. We rerun your Fargo search each month so you can judge the progress yourself.',
  },
  {
    category: 'results',
    question: 'How will I know if SEO is working for my business?',
    answer: 'You should see more calls, form fills and direction requests, not only better rankings. Each month we report those numbers from your Google Business Profile and site, show which searches brought people in from Search Console, and attach a dated screenshot of your main Fargo search. If a change did not help, the report says so and we suggest what to try next.',
  },
  {
    category: 'results',
    question: 'Can you promise my business will rank first in Fargo?',
    answer: 'No. Nobody controls Google\'s results, and any firm that promises a top spot is guessing or hiding a trick that can get your profile suspended. What we can promise is the work: a fixed list of fixes, pages and listings, each quoted before we start, and a monthly report showing what changed in your Fargo results.',
  },
  {
    category: 'results',
    question: 'Is SEO legitimate?',
    answer: 'Yes, when it means fixing your site, writing useful pages and keeping your business listings accurate. Google publishes its own guide to this work. The bad kind buys links, stuffs keywords, or creates fake reviews, and Google can penalize your site or profile for it. Ask any Fargo firm to list exactly what they will change. If they cannot, walk away.',
  },
  {
    category: 'ai',
    question: 'Does Google show an AI answer when people in Fargo search for SEO help?',
    answer: 'Not on the day we checked. On 21 Oct 2026, Google showed no AI Overview for "fargo seo company" searched from Fargo. An AI Overview is the summary Google sometimes writes above the regular results. That can change any week. We write pages that answer common questions in the first sentence or two, so they are easy to quote if Google starts showing one.',
  },
  {
    category: 'ai',
    question: 'Can my Fargo business show up when people ask ChatGPT for a recommendation?',
    answer: 'It can, though no one can promise it. People now type long requests into assistants, like asking which agencies help industrial firms build an online presence from scratch. Assistants pull from pages that state facts plainly: what you do, where, for whom, and since when. We structure your pages and listings that way, and we test sample questions each month to see whether you are named.',
  },
  {
    category: 'ai',
    question: 'What does SEO stand for?',
    answer: 'SEO stands for search engine optimization. It means changing your website, Google Business Profile and online listings so search engines show your business to people looking for what you sell. An SEO agency is a firm that does that work for you. For a Fargo business, most of the value is in the map results and a few service pages.',
  },
  {
    category: 'pricing',
    question: 'Who will I work with at FactoryJet?',
    answer: 'Founder Bhavesh Barot replies to every new inquiry within 24 hours. FactoryJet was founded in 2014, has worked with more than 500 businesses, and delivers 97% of projects on time. We work remotely with US clients and schedule calls in US business hours, so a Fargo client gets the same calls and reports as a client anywhere else. We also do white-label work for agencies.',
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
  name: 'Fargo Local SEO & Google Maps Optimization',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  serviceType: 'Local SEO, Google Business Profile Optimization, Schema Markup & AI Citation Strategy',
  description:
    'SEO for Fargo, ND farm equipment dealers, contractors, clinics and law firms across the Red River Valley. No long-term contract.',
  areaServed: [
    { '@type': 'City', name: 'Fargo' },
    { '@type': 'City', name: 'West Fargo' },
    { '@type': 'City', name: 'Moorhead' },
    { '@type': 'City', name: 'Dilworth' },
    { '@type': 'City', name: 'Horace' },
    { '@type': 'State', name: 'North Dakota' },
  ],
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'SEO Agency for Fargo, ND Businesses | FactoryJet',
  description: 'SEO for Fargo, ND farm equipment dealers, contractors, clinics and law firms across the Red River Valley. No long-term contract.',
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
    { '@type': 'ListItem', position: 3, name: 'Fargo', item: CANONICAL },
  ],
};

export default function FargoSeoPage() {
  return (
    <>
      <script id="fargo-seo-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="fargo-seo-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="fargo-seo-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="fargo-seo-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>Fargo Local SEO &amp; Google Maps Engineering</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  SEO for Fargo and Red River Valley Businesses
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  We work on your Google Business Profile, your service pages and your listings so customers searching in Fargo and the Red River Valley can find you.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Free Local SEO Audit" region="us" btnVariant="primary-dark" modalVariant="seo" />
                  <a href="#fargo-seo-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Red River Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/fargo/seo/hero-farm-supply-counter-map.webp"
                  alt="A man in a green vest showing a woman a laptop with a pale map and coloured pins at the counter of a farm supply shop"
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
                  src="/images/us/fargo/seo/team-wall-map-push-pins.webp"
                  alt="A man pressing a red pin into a pale wall map while a woman beside him holds a small orange box of pins in a bright office"
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
                  Local Search Engineered for North Dakota Leaders
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  From Downtown Fargo legal practices to West Fargo industrial equipment dealers and 13th Avenue medical practices, we build high-converting search architectures that capture regional buyers.
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

        {/* ── 04. FARGO DISTRICTS & INDUSTRY DIRECTORY ── */}
        <section id="fargo-seo-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Red River Valley Corridor Depth</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored Local Search Optimization for North Dakota Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From Downtown practices to West Fargo industrial operators and 13th Avenue healthcare enclaves:
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
                Specialized Local SEO Strategies for North Dakota Brands
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every commercial sector across Fargo demands tailored schema models, citation graphs, and map optimization:
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
                What FactoryJet Does Differently for Fargo Businesses
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                On 21 Oct 2026 we pulled the Google results and search volumes Fargo buyers see, and each point below starts from one of those measurements.
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
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.08em' }}>What we saw in Fargo search, 21 Oct 2026:</span>
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
            badge="// FARGO LOCAL SEARCH &amp; AI RANKING BLUEPRINT"
            title="4-Layer Local SEO Stack: Google Maps to AI Overviews"
            subtitle="Explore how GBP API optimization, multi-directory citation syncing, structured schema graphs, and AI citation crawlers work together in Fargo local search."
            city="Fargo"
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
                Four stages, built around the searches, towns and trades we measured across the Fargo-Moorhead area on 21 Oct 2026.
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
                Evaluating Fargo SEO Agencies: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Ask any Fargo SEO firm these four questions before you sign, and compare their answers to what the Fargo results showed on 21 Oct 2026.
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
        <LocalSeoOpportunityEstimator city="Fargo" region="us" />

        {/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION ── */}
        <FAQ
          eyebrow="FARGO LOCAL SEARCH INTELLIGENCE"
          headline="Frequently Asked Questions About Local SEO in Fargo ND"
          lead="Direct, plain English answers to what North Dakota business owners and marketing leaders ask about Google Maps 3-Pack and search visibility:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 11. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <SeoCityLinksUS currentCity="fargo" />
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
              Start With a Free Fargo Local SEO Audit
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
