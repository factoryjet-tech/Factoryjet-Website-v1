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
const CANONICAL = 'https://factoryjet.com/dallas/seo';

export const metadata: Metadata = {
  title: 'SEO Agency for Dallas, TX Businesses | FactoryJet',
  description:
    'Local SEO for Dallas, TX businesses, from Uptown to Frisco. Google Business Profile work, citations, reviews and call tracking. No long-term contract.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Agency for Dallas, TX Businesses | FactoryJet',
    description:
      'Local SEO for Dallas, TX businesses, from Uptown to Frisco. Google Business Profile work, citations, reviews and call tracking. No long-term contract.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'SEO for Dallas, TX businesses by FactoryJet' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency for Dallas, TX Businesses | FactoryJet',
    description: 'Local SEO for Dallas, TX businesses, from Uptown to Frisco. Google Business Profile work, citations, reviews and call tracking. No long-term contract.',
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
    desc: 'Category and service area checked against the DFW map pack for your trade, city by city.',
    icon: '📍',
  },
  {
    num: 'Leads',
    title: 'Inquiry Tracking',
    desc: 'Calls, forms and booked jobs from search, agreed before the first report.',
    icon: '📈',
  },
  {
    num: 'Data',
    title: 'Listing Consistency',
    desc: 'Name, address and phone matched on Apple Maps, Bing, Yelp and the Dallas directories that rank.',
    icon: '🛡️',
  },
  {
    num: 'Site',
    title: 'Technical SEO Review',
    desc: 'Sitemap errors, blocked pages and slow mobile templates, each listed with its URL.',
    icon: '⚡',
  },
];

const DISTRICTS = [
  {
    corridor: 'Uptown Dallas & Central Business District',
    focus: 'Commercial Law, Private Wealth & Executive Advisory',
    desc: 'Dense corporate center in downtown Dallas. We optimize localized legal knowledge graphs, partner practice area silos, and verified client review schemas to capture high-stakes legal inquiries.',
  },
  {
    corridor: 'Plano & Telecom Corridor',
    focus: 'Enterprise Tech, Cloud Services & B2B Consulting',
    desc: 'High-density tech business district. We build deep service area silos, technical credential schemas, and local B2B directory citations that win regional IT procurement contracts.',
  },
  {
    corridor: 'Frisco & North Platinum Corridor',
    focus: 'Specialty Healthcare, Orthopedics & Med Spas',
    desc: 'Fast-growing medical hub anchored by premier sports venues. We implement medical specialty schema, physician credentials, and local neighborhood landing pages that drive patient bookings.',
  },
  {
    corridor: 'Arlington & Mid-Cities',
    focus: 'Commercial Contractors, Roofing & Mechanical Trades',
    desc: 'Central DFW contractor hub. We target high-intent emergency repair searches with verified service radius polygons, localized landing pages, and automated review capture.',
  },
  {
    corridor: 'Irving & Las Colinas Urban Center',
    focus: 'Corporate Services, Commercial Real Estate & Staffing',
    desc: 'Major corporate campus cluster. We build localized trust signals, thought leadership content silos, and authoritative local citation networks capturing corporate inquiries.',
  },
  {
    corridor: 'Fort Worth Stockyards & Alliance Corridor',
    focus: 'Industrial Tooling, Logistics, Freight & Fabrication',
    desc: 'Heavy industrial and aviation hub. We capture regional B2B supply chain procurement queries by optimizing technical capability pages, B2B service schemas, and local trade citations.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Commercial Contractors, Roofing & Mechanical Trades',
    headline: 'Storm Season Calls for North Texas Contractors',
    description: 'After a hail storm, property managers call the contractors they see first on the map with recent reviews. That means a service-area profile covering only the counties you work in, a page for each service such as roof replacement or commercial HVAC, and job photos that name the suburb. Show your license details wherever your trade needs one.',
    image: '/images/us/services/roofing-seo/hero.webp',
    alt: 'Aerial view of suburban shingle rooftops at golden hour',
    points: ['Service area set to the Dallas, Collin, Denton or Tarrant towns you serve', 'A page per service with finished jobs named by suburb', 'Review requests sent after every completed job'],
  },
  {
    sector: 'Healthcare Practices, Specialty Dental & Medical Clinics',
    headline: 'Patient Searches From the Medical District to Frisco',
    description: 'Patients search by treatment, by doctor and by insurance plan. Each clinic needs a profile linked to a page with booking, the doctors named, and accepted insurance listed as text rather than a logo image. Replies to reviews must never confirm that the reviewer is a patient.',
    image: '/images/us/dallas/seo/card-blood-pressure-check.webp',
    alt: 'A nurse in burgundy scrubs wrapping a blood pressure cuff around the arm of a seated woman in an exam room',
    points: ['Clinic profiles with booking links and exact hours', 'Treatment pages that name the doctor who performs them', 'Review replies written to protect patient privacy'],
  },
  {
    sector: 'Litigation Law Firms, Personal Injury & Defense Practices',
    headline: 'Practice Area Pages for Dallas and Plano Firms',
    description: 'Legal searches in Dallas are crowded, and legal directories rank well for them. Each practice area needs its own page that answers what clients ask before they call, with attorney names and bar admissions. Your Avvo, Justia and Martindale profiles should match your site. Check anything you publish against the State Bar of Texas advertising rules.',
    image: '/images/us/dallas/seo/card-court-file-packing.webp',
    alt: 'A lawyer in a black suit and orange scarf packing folders into a wheeled case while a younger colleague carries archive boxes',
    points: ['One page per practice area instead of one page listing all of them', 'Attorney bios with bar admissions and case types', 'Matching profiles on the legal directories that rank for your terms'],
  },
  {
    sector: 'Industrial Suppliers, Warehousing & Fleet Logistics',
    headline: 'Quote Requests for Fort Worth and Alliance Suppliers',
    description: 'Industrial buyers search by process, material and capacity, often from outside Texas. Capability pages need real specs, equipment lists and only the certifications you hold, plus a quote form that accepts drawings. A Business Profile at your plant address helps drivers and local buyers find the right gate.',
    image: '/images/us/manufacturing-website-design/rfq-desk.webp',
    alt: 'A man comparing a printed technical drawing with a machined bracket shown on a laptop, calipers on the desk',
    points: ['A capability page per process with equipment and tolerances', 'Listings on Thomasnet and the supplier directories your buyers use', 'A quote form that accepts drawings and specs'],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'A firm named after the search holds three spots',
    problem: 'On 21 Oct 2026 we searched "dallas seo" from a Dallas location. A firm with "Dallas SEO" in its name held the first map pack spot, and its LinkedIn and Facebook pages both sat in the organic top ten.',
    solution: 'Google reads names as a relevance signal, but its profile rules ban adding keywords to a business name. We keep your real name and make every listing and page say clearly what you do and which DFW cities you serve.',
  },
  {
    num: '02',
    title: 'Half of page one is not an agency website',
    problem: 'Five of the ten organic results were a LinkedIn company page, Clutch, a Facebook page, a "top SEO agencies in Dallas" list and a blog post listing Dallas firms.',
    solution: 'Profiles on other platforms rank in Dallas. We check your LinkedIn, Facebook and directory listings so they carry the same name, phone, services and website as your Business Profile.',
  },
  {
    num: '03',
    title: 'Map pack firms had 41 to 89 reviews',
    problem: 'The three map results had 89, 41 and 69 Google reviews. Three of the five agency websites in the top ten were Dallas pages from agencies that publish one page per city.',
    solution: 'Review counts in Dallas are high enough that a new profile needs months of steady requests. Meanwhile, pages that name real Dallas jobs and clients stand apart from city pages written the same way for every market.',
  },
  {
    num: '04',
    title: 'DFW searches name the suburb',
    problem: 'Search Console for this page shows searches naming Denton, McKinney, Irving, Rowlett, Carrollton and Lewisville, plus "seo dfw" and "dfw seo".',
    solution: 'DFW is dozens of cities, each with its own map results. We build a page for each city where you take work and set your profile service area to match, instead of one page that claims the whole Metroplex.',
  },
];

const ROADMAP_STEPS = [
  {
    phase: 'Days 1 to 15',
    title: 'Audit and profile fixes',
    desc: 'We audit your profile, sitemap, pages and listings with read-only access, then fix category, services and hours first.',
    deliverables: ['Fix list with a URL for each problem', 'Corrected Business Profile'],
  },
  {
    phase: 'Days 15 to 45',
    title: 'Listings and tracking',
    desc: 'We match your details on Apple Maps, Bing, Yelp, LinkedIn and the DFW directories that rank, and set up call and form tracking.',
    deliverables: ['Listing log you can check', 'Call and form tracking live'],
  },
  {
    phase: 'Days 45 to 75',
    title: 'Service and city pages',
    desc: 'We write a page per service, then pages for the DFW cities you serve, each with local jobs and reviews.',
    deliverables: ['Service pages with FAQ schema', 'City pages only where you work'],
  },
  {
    phase: 'Days 75 to 90',
    title: 'Reviews and first results',
    desc: 'We start the review routine and send the first full report: work done, calls, forms and ranking moves.',
    deliverables: ['Review request routine', 'First 90-day report'],
  },
];

const EVALUATION_CRITERIA = [
  {
    label: 'Business Name',
    factoryjet: 'No. Keyword stuffing breaks Google\'s profile rules and can get the profile suspended.',
    traditional: 'Ask: "Will you add keywords to our business name on Google?"',
  },
  {
    label: 'City Coverage',
    factoryjet: 'Pages only for DFW cities where you take work, each with local jobs.',
    traditional: 'Ask: "Which DFW cities will you target, and how?"',
  },
  {
    label: 'Review Rules',
    factoryjet: 'We ask every customer the same way. Google forbids rewards for reviews and asking only happy customers.',
    traditional: 'Ask: "How will you get us reviews, and is it within Google\'s rules?"',
  },
  {
    label: 'Guarantees',
    factoryjet: 'None. Google\'s advice is to walk away from anyone who guarantees first place.',
    traditional: 'Ask: "Do you guarantee a top three map ranking?"',
  },
  {
    label: 'Ownership',
    factoryjet: 'Your profile, analytics and site stay in your accounts. No long-term contract.',
    traditional: 'Ask: "What do we keep if we leave?"',
  },
];

const FAQ_CATEGORIES = [
  { key: 'local-seo', label: 'Local SEO Strategy' },
  { key: 'map-pack', label: 'Google Map Pack' },
  { key: 'citations', label: 'Citations & NAP' },
  { key: 'dallas', label: 'Dallas Specifics' },
  { key: 'reviews', label: 'Reviews & Reputation' },
  { key: 'timeline', label: 'Timelines & ROI' },
];

const FAQ_ITEMS = [
  {
    category: 'local-seo',
    question: 'How much should I expect to pay for SEO in Dallas?',
    answer: 'Ahrefs surveyed 439 SEO providers and found general SEO averaged $2,917 a month, with local SEO lower at $1,557. Dallas prices spread widely around those figures because the city is crowded in law, roofing and healthcare. FactoryJet quotes a fixed price in writing after a short scoping call, so you see the number before work starts.',
  },
  {
    category: 'local-seo',
    question: 'Is SEO still relevant in 2026?',
    answer: 'Yes. When we searched "dallas seo" on 21 Oct 2026, Google showed a map pack, ten organic results and a People Also Ask box, with no AI Overview. AI assistants that answer "which Dallas firm should I hire" build their answers from the same websites, profiles and reviews. The work serves both.',
  },
  {
    category: 'local-seo',
    question: 'Do you work with Dallas enterprise and B2B companies?',
    answer: 'Yes. Enterprise and B2B SEO in Dallas is less about the map and more about large sites: thousands of pages, several locations, many people editing. The work is technical health, clear page structure and content for each buying question. Success is measured in qualified pipeline, not phone calls.',
  },
  {
    category: 'map-pack',
    question: 'Do businesses named "Dallas [service]" rank better?',
    answer: 'A name that matches the search can help. In our 21 Oct 2026 check, a firm with "Dallas SEO" in its name held the first map spot plus two organic spots through its LinkedIn and Facebook pages. Do not rename your profile to copy that. Google\'s rules require your real-world name, and stuffed names get suspended.',
  },
  {
    category: 'map-pack',
    question: 'How do I show up in the map pack in McKinney, Denton or Irving?',
    answer: 'Each DFW city has its own map results, and Google weighs the distance between the searcher and your business. A Dallas address rarely wins the McKinney map. If you have a real location in that city, give it its own verified profile. If not, a city page with jobs and reviews from there can still rank in the regular results.',
  },
  {
    category: 'map-pack',
    question: 'Which Google Business Profile category should a Dallas business choose?',
    answer: 'Pick the primary category that names your main service as narrowly as Google allows, such as "Personal injury attorney" rather than "Lawyer". Add secondary categories only for services you offer. Look at the categories of the three firms in your map pack for ideas, but do not copy one that does not fit.',
  },
  {
    category: 'citations',
    question: 'Which citations matter for a Dallas business?',
    answer: 'Start with Apple Maps, Bing Places, Yelp and Facebook. Add the directories for your trade: Avvo and Justia for lawyers, Thomasnet for manufacturers, and the review sites your customers use. If you are a member of the Dallas Regional Chamber or a local trade group, complete that listing too. Accuracy matters more than count.',
  },
  {
    category: 'citations',
    question: 'What is a sitemap audit, and does my Dallas site need one?',
    answer: 'A sitemap is the file that lists your pages for Google. An audit checks that it holds only live pages you want indexed, with no redirects, errors or duplicates. After a redesign, old sitemaps often list dead addresses. Search Console\'s sitemap report shows problems for free, so look there first.',
  },
  {
    category: 'dallas',
    question: 'Should a Dallas business have Spanish-language pages?',
    answer: 'If many of your customers search in Spanish, yes. Each Spanish page should be a real translation written for those customers, linked from its English version, with tags that tell Google which language each page is in. A Spanish page that only runs English text through a translator rarely ranks or converts.',
  },
  {
    category: 'dallas',
    question: 'How does SEO work for Plano and Dallas law firms?',
    answer: 'Give each practice area its own page, name the attorneys and their bar admissions, and answer the questions clients ask before a first call. Legal directories rank well in Dallas, so keep your Avvo, Justia and Martindale profiles current. Check every page and review you publish against the State Bar of Texas advertising rules.',
  },
  {
    category: 'dallas',
    question: 'Is a Magento store harder to rank than Shopify in Dallas?',
    answer: 'The platform rarely decides it. Magento\'s layered navigation can create thousands of near-duplicate filter pages, so it needs careful canonical and indexing settings. Shopify limits some URL choices but is simpler to keep clean. Either can rank if product and category pages are well written and fast on phones.',
  },
  {
    category: 'reviews',
    question: 'How should I read reviews of Dallas SEO companies?',
    answer: 'Look for reviews that describe the work: what changed, how fast they replied, what happened to calls. Skip vague five-star lines. Count how many reviews mention the same person. Then check the firm\'s own rankings. When we searched "dallas seo", the three map pack firms had 89, 41 and 69 reviews.',
  },
  {
    category: 'reviews',
    question: 'How should a Dallas business ask customers for reviews?',
    answer: 'Ask every customer the same way, soon after the job, with a direct link to your profile. Google\'s rules forbid paying or rewarding customers for reviews and forbid asking only the happy ones. Reply to every review, including the bad ones, with a short and calm answer.',
  },
  {
    category: 'timeline',
    question: 'How long does SEO take in Dallas?',
    answer: 'Profile and technical fixes can show within weeks. Busy Dallas terms take many months, because the firms already ranking have years of reviews and links. Suburbs often move faster than the city center. Nobody can promise a date, and Google tells buyers to avoid anyone who guarantees first place.',
  },
  {
    category: 'timeline',
    question: 'Which free SEO tools can a small Dallas business use?',
    answer: 'Four cover most needs. Google Business Profile shows calls and searches. Google Search Console shows which searches find your site and which pages have errors. Bing Webmaster Tools does the same for Bing. PageSpeed Insights tests how fast your pages load on phones. Check them monthly.',
  },
  {
    category: 'map-pack',
    question: 'Can one Google profile cover Dallas, Fort Worth and the suburbs?',
    answer: 'If you go to customers, it can cover a lot. Google lets a service-area business list up to 20 service areas, set by city or ZIP code rather than a radius. DFW has far more than 20 cities, so choose the ones where you actually take jobs, such as Dallas, Plano, Irving and Garland. If customers come to you, the profile shows your address, and map results lean on distance from it.',
  },
  {
    category: 'dallas',
    question: 'Can I use a Dallas virtual office or mailbox address on my Google profile?',
    answer: 'No. Google\'s profile rules say a rented address where you do not operate, which Google calls a virtual office, is not eligible, and P.O. boxes or mailboxes at remote locations are not accepted. If you work from home or on job sites, set up as a service-area business with the address hidden. If you want a storefront listing in Dallas, the address needs permanent signage with your business name.',
  },
  {
    category: 'citations',
    question: 'Can another Dallas company register the same business name as mine?',
    answer: 'It can happen. The Texas Secretary of State\'s Form 503 instructions say an assumed name filing is a notice to the public, and the office does not review whether the name clashes with another name on file. Filing also gives you no right to the name by itself. If a Dallas competitor shares your name, your address, phone number, categories and reviews keep Google and customers from mixing you up.',
  },
  {
    category: 'local-seo',
    question: 'What does a Dallas SEO audit look at first?',
    answer: 'We start with your Google Business Profile: the category, services, hours and whether the address setup follows Google\'s rules. Next come the pages your profile links to, checked for speed and for saying plainly what you do and where. Last, we check your listings on the sites that rank for your Dallas terms for the same name, address and phone. The written audit says which of these is holding you back.',
  },
  {
    category: 'citations',
    question: 'Can I put a call-tracking number on my Dallas Google profile?',
    answer: 'Yes, with care. Google\'s rules say the phone number must be under the business\'s direct control and must not redirect callers to numbers other than the business\'s own. A tracking number you own that rings your own line fits that. One owned by an agency, which you lose when you leave, does not. Keep your main number on your website and listings so your details stay consistent.',
  },
];

const SOURCES: ReadonlyArray<{ publisher: string; title: string; url: string; note: string }> = [
  {
    publisher: 'Texas Secretary of State',
    title: 'Form 503: Instructions for Assumed Name Certificate',
    url: 'https://www.sos.state.tx.us/corp/instructions/503.shtml',
    note: 'An assumed name filing is a public notice. The Secretary of State does not check it against other names on file, and filing gives no right to the name by itself.',
  },
  {
    publisher: 'Google Business Profile Help',
    title: 'Guidelines for representing your business on Google',
    url: 'https://support.google.com/business/answer/3038177?hl=en',
    note: 'Virtual offices, P.O. boxes and remote mailboxes are not eligible addresses. The phone number must be under the direct control of the business and must not redirect to other numbers.',
  },
  {
    publisher: 'Google Business Profile Help',
    title: 'Manage your service areas for service-area & hybrid businesses',
    url: 'https://support.google.com/business/answer/9157481?hl=en',
    note: 'A service-area business can list up to 20 service areas by city or postal code, not by radius.',
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
  name: 'Dallas Local SEO & Map Pack Optimization',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Local SEO, Google Business Profile Optimization & Geo-Grid Defense',
  description:
    'Local SEO for Dallas, TX businesses, from Uptown to Frisco. Google Business Profile work, citations, reviews and call tracking. No long-term contract.',
  areaServed: [
    { '@type': 'City', name: 'Dallas' },
    { '@type': 'City', name: 'Plano' },
    { '@type': 'City', name: 'Frisco' },
    { '@type': 'City', name: 'Irving' },
    { '@type': 'City', name: 'Fort Worth' },
    { '@type': 'State', name: 'Texas' },
    { '@type': 'Country', name: 'United States' },
  ],
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/dallas/seo#webpage',
  name: 'SEO Agency for Dallas, TX Businesses | FactoryJet',
  description: 'Local SEO for Dallas, TX businesses, from Uptown to Frisco. Google Business Profile work, citations, reviews and call tracking. No long-term contract.',
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
    { '@type': 'ListItem', position: 2, name: 'Local SEO', item: 'https://factoryjet.com/services/local-seo' },
    { '@type': 'ListItem', position: 3, name: 'Dallas', item: CANONICAL },
  ],
};

export default function DallasSeoPage() {
  return (
    <>
      <script id="dal-seo-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="dal-seo-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="dal-seo-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="dal-seo-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>Dallas Local SEO &amp; Google Maps Listings</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Local SEO for Dallas Businesses Across the DFW Metroplex
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 24px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  We fix your Google Business Profile, your listings and your service pages so buyers across Dallas and the DFW suburbs find you and call. No long-term contract.
                </p>

                {/* Answer-First Brief */}
                <div style={{ background: '#F6F6F9', borderLeft: '3px solid #FF5622', padding: '14px 18px', borderRadius: '0 12px 12px 0', marginBottom: '28px', maxWidth: '52ch' }}>
                  <p style={{ fontSize: '13.5px', color: '#141414', lineHeight: 1.55, margin: 0, fontWeight: 500 }}>
                    <strong style={{ color: '#FF5622' }}>Executive Brief:</strong> FactoryJet delivers engineering-led Dallas local search optimization: Google Business Profile category calibration, multi-radius geo-grid proximity expansion, NAP data aggregator sync, and transparent call tracking without locked retainers.
                  </p>
                </div>

                <div className="rv-actions">
                  <ModalCTAButton label="Get Your Free Local SEO Audit" region="us" btnVariant="primary-dark" />
                  <a href="#dal-seo-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Dallas Search Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Organic Curved Photo Frame */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/dallas-seo/dallas-seo-consultant-call.webp"
                  alt="A man in a headset gesturing at a laptop that shows a tan handbag"
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

        {/* ── 03. 2x2 BENTO COUNTER SECTION ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(56px, 8vh, 96px) 0' }}>
          <div className="pp-wrap">
            <div className="rv-about-grid">
              {/* Left Column: Clean Organic Curved Photo Frame */}
              <div className="rv-curved-frame-2">
                <Image
                  src="/images/us/dallas-seo/dallas-local-seo-team.webp"
                  alt="Three people at a standing desk by a window with a city skyline, one pointing at a laptop that shows a tan handbag while another takes notes"
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
                  <span>Proximity, Reviews &amp; Entity Trust</span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
                  Capturing High-Value Inbound Calls in DFW
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  DFW is dozens of separate map markets. A McKinney search and an Irving search return different businesses, so we plan city by city, starting where you already take work.
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
                  <ModalCTAButton label="Schedule Local SEO Audit" region="us" btnVariant="primary-dark" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04. DALLAS DISTRICTS SECTION ── */}
        <section id="dal-seo-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>DFW Search Coverage</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Targeting Key Dallas-Fort Worth Search Corridors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every commercial sub-market in Dallas, Collin, and Tarrant county demands localized proximity targeting:
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
                <span>Industry-Specific Systems</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Specialized Local Search Frameworks for Dallas Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                What changes by industry for Dallas businesses:
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

        {/* ── 06. CORE PAIN POINTS SECTION ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Dallas Search Check, 21 Oct 2026</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                What Dallas Buyers See When They Search for SEO
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                We searched "dallas seo" from a Dallas location. Four findings shape the plan:
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
        <div id="local-seo-architecture-blueprint">

          <LocalSeoArchitectureBlueprint
            badge="// DALLAS LOCAL SEO & MAP PACK BLUEPRINT"
            title="Entity-Led Local Search: From Citations to Inbound Calls"
            subtitle="Explore how Google Business Profile signals, data aggregator sync, LocalBusiness schema, and review acceleration work together."
            city="Dallas"
            ctaLabel="Get Your Free Local SEO Audit"
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
                <span>90-Day Execution Plan</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Our 90-Day Local SEO Work Plan
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                What happens in the first 90 days:
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

        {/* ── 09. EVALUATION FRAMEWORK TABLE ── */}
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
                Evaluating Dallas Local SEO Agencies: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Five questions to ask any Dallas SEO agency, with our answers:
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '16px', overflow: 'hidden', maxWidth: '960px', margin: '0 auto' }}>
              <div className="rv-eval-head" style={{ background: '#141414', color: '#FFFFFF', padding: '16px 24px', fontWeight: 700, fontSize: '13.5px' }}>
                <div>Evaluation Pillar</div>
                <div style={{ color: '#FF5622' }}>FactoryJet Entity Model</div>
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
                  <div data-label="FactoryJet Entity Model" style={{ fontSize: '13.5px', color: '#141414', fontWeight: 600, lineHeight: 1.45 }}>
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
        <LocalSeoOpportunityEstimator city="Dallas" region="us" />

        {/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION ── */}
        <FAQ
          eyebrow="DALLAS LOCAL SEO INTELLIGENCE"
          headline="Frequently Asked Questions About Local SEO in Dallas TX"
          lead="What DFW owners ask about cost, suburbs, reviews and choosing an agency, answered plainly:"
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
            <SeoCityLinksUS currentCity="dallas" />
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
              <span>No Contracts &amp; Transparent ROI</span>
            </div>

            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Start With a Free Dallas Local SEO Audit
            </h2>

            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Claim your free 50-point Dallas Local SEO audit. We will evaluate your GBP health, citation consistency, and map ranking radius.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get Your Free Local SEO Audit" region="us" btnVariant="primary-light" />
            </div>

            <p style={{ marginTop: '28px', fontSize: '13.5px', color: '#8E8E9F' }}>
              Related services: <Link href="/services/local-seo" style={{ color: '#FF5622', textDecoration: 'underline' }}>Local SEO services</Link>, <Link href="/services/seo-audit" style={{ color: '#FF5622', textDecoration: 'underline' }}>technical SEO audits</Link>, <Link href="/austin/seo" style={{ color: '#FF5622', textDecoration: 'underline' }}>Austin SEO agency</Link>, and <Link href="/arlington/seo" style={{ color: '#FF5622', textDecoration: 'underline' }}>Arlington local SEO</Link>.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
