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
const CANONICAL = 'https://factoryjet.com/boston/seo';

export const metadata: Metadata = {
  title: 'SEO Agency for Boston, MA Businesses | FactoryJet',
  description:
    'SEO for Boston, MA life science firms, law firms, clinics and engineering companies, from Kendall Square to Back Bay. No long-term contract.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Agency for Boston, MA Businesses | FactoryJet',
    description:
      'SEO for Boston, MA life science firms, law firms, clinics and engineering companies, from Kendall Square to Back Bay. No long-term contract.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'SEO for Boston, MA businesses by FactoryJet' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency for Boston, MA Businesses | FactoryJet',
    description: 'SEO for Boston, MA life science firms, law firms, clinics and engineering companies, from Kendall Square to Back Bay. No long-term contract.',
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
    corridor: 'Kendall Square & Cambridge',
    focus: 'Biotech Research, Genomics, AI Diagnostics & Life Sciences',
    desc: 'The global biotech innovation capital along Main Street and Broadway. B2B and institutional service queries demand deep scientific topical authority, researcher schemas, and sub-second edge speeds.',
  },
  {
    corridor: 'Boston Seaport & Innovation District',
    focus: 'Fintech, Venture Capital & High-Growth SaaS',
    desc: 'Dynamic waterfront commercial tech hub along Seaport Boulevard and Northern Avenue. Features structured entity markup, executive leadership profiles, and high-converting consultation funnels.',
  },
  {
    corridor: 'Back Bay & Beacon Hill',
    focus: 'Wealth Advisory, Private Family Offices & Corporate Law',
    desc: 'Historic seat of New England wealth and corporate law along Commonwealth Avenue and Boylston Street. Intense competition for high-net-worth estate planning, trust litigation, and wealth advisory retainers.',
  },
  {
    corridor: 'Longwood Medical Area',
    focus: 'Academic Medicine, Hospital Networks & Specialized Clinics',
    desc: 'World-renowned medical research and clinical cluster along Brookline Avenue. Multi-practitioner practice architectures, physician directories, and clinical credential schemas.',
  },
  {
    corridor: 'Route 128 & Waltham Tech Corridor',
    focus: 'Defense Tech, Robotics & Enterprise Hardware',
    desc: 'The historic technology and hardware corridor along Interstate 95 and Winter Street. Requires precision engineering capability landing pages, defense capability schemas, and localized authority.',
  },
  {
    corridor: 'Financial District & Downtown Boston',
    focus: 'Commercial Litigation, Maritime Law & Consulting',
    desc: 'Traditional banking, legal, and insurance center centered around Post Office Square and State Street. Captures high-ticket corporate legal retainers, commercial leasing inquiries, and maritime dispute representations.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Biotechnology, Life Sciences & Clinical Diagnostics',
    headline: 'Topical Authority & AI Citation Engineering for Cambridge & Kendall Biotech',
    description:
      'Biotech enterprises, research CROs, and patent legal practices in Boston and Cambridge require commanding authority in technical and scientific search. We engineer deep topical content graphs, researcher schemas, and institutional citations that earn authority across Google, Perplexity, and AI search engines.',
    image: '/images/us/boston/seo/card-biotech-lab-pipetting.webp',
    alt: 'A scientist in a lab coat pipetting into tubes held in an orange rack while a colleague looks into a microscope',
    points: [
      'Topical entity architecture covering clinical development and regulatory pathways',
      'Structured MedicalScholarlyArticle and Organization schema for AI citation retrieval',
      'High-authority scientific trade publication and Cambridge bio-cluster directory synchronization',
    ],
  },
  {
    sector: 'Corporate Litigation, Patent Law & Financial Services',
    headline: 'Local Search Work for Boston Law Firms',
    description:
      'Legal search terms in Suffolk and Middlesex counties are intensely competitive. We build local SEO structures with practice area knowledge hubs, attorney bar admission schemas, verified case outcome showcases, and consistent local citations.',
    image: '/images/us/boston/seo/card-law-library-research.webp',
    alt: 'A woman on a step stool pulling a bound volume from a law library shelf while an older man in a grey suit holds an open book',
    points: [
      'LegalService and Attorney schema linking Massachusetts Bar verified credentials',
      'Localized practice area silos targeting Back Bay, Financial District, and Waltham',
      'High-authority local legal directory citations and editorial publication placements',
    ],
  },
  {
    sector: 'Academic Healthcare, Specialized Surgery & Clinical Practice',
    headline: 'Capturing High-Value Patients Across Longwood & Back Bay',
    description:
      'In Boston’s premier academic medicine and specialized clinical market, patients evaluate physician credentials and peer reviews thoroughly before booking. We optimize Google Business Profiles, implement medical specialty schemas, generate local patient review momentum, and target high-ticket elective queries.',
    image: '/images/us/boston/seo/card-hospital-teaching-seminar.webp',
    alt: 'A senior doctor pointing to a plastic spine model while two junior doctors in scrubs listen in a hospital seminar room',
    points: [
      'Multi-practitioner Google Business Profile optimization with procedure sub-categories',
      'MedicalProcedure and Physician structured JSON-LD schema linking hospital affiliations',
      'Hyper-local neighborhood geo-pages targeting Back Bay, Brookline, and Newton',
    ],
  },
  {
    sector: 'Robotics, Defense Engineering & Enterprise Hardware',
    headline: 'Driving Commercial Contract Opportunities Across Route 128 Tech Corridor',
    description:
      'Robotics developers, defense contractors, and specialized engineering firms across Waltham and Burlington require steady commercial inquiry flow. We optimize your local digital footprint to capture corporate procurement officers, defense contracting officers, and venture partners.',
    image: '/images/us/boston/seo/card-robot-arm-calibration.webp',
    alt: 'A woman adjusting a small robotic arm that grips an orange foam block while a man types on a laptop in an engineering lab',
    points: [
      'Technical capability landing pages optimized for regional radius search queries',
      'High-speed mobile performance ensuring immediate quotation request submissions',
      'Structured Organization and Service schema for AI answer engine retrieval',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Ranking lists own half the page',
    problem: 'On 21 Oct 2026, 5 of the top 10 Google results for "boston seo company" were lists or directories, including GoodFirms and Trustpilot. Two more were LinkedIn and Facebook pages. Only 3 were agency websites.',
    solution: 'For a Boston client, we check which lists and directories rank for your own service searches. Then we get your business listed and reviewed on the ones buyers open, and we build your own page to compete for the other slots.',
  },
  {
    num: '02',
    title: 'The map pack runs on small review counts',
    problem: 'The three businesses in the Google map pack for "boston seo company" had 11, 69 and 11 reviews on 21 Oct 2026. All three showed 5 stars. Two of the three spots went to firms with only 11 reviews.',
    solution: 'We set up a steady way for your happy customers to leave Google reviews, and we fix your Google Business Profile categories, hours and service areas, from Back Bay out to Waltham and Quincy.',
  },
  {
    num: '03',
    title: 'Paid clicks here cost a lot',
    problem: 'Google Ads suggests about $86.37 a click for "boston seo" and $40.07 a click for "boston seo company" (21 Oct 2026). Both searches get about 720 US searches a month.',
    solution: 'We find the Boston searches where an unpaid ranking is in reach and build pages for those first. That way a client can trim ad spend on the terms where organic results start to bring calls.',
  },
  {
    num: '04',
    title: 'No AI Overview, yet',
    problem: 'Google showed no AI Overview on "boston seo company" when we checked on 21 Oct 2026. The People Also Ask box did show questions such as "Is SEO dead now with AI?" and "How much should I expect to pay for SEO?"',
    solution: 'We write your service pages so each question gets a short, direct answer near the top. Pages built that way are easier for Google and AI assistants to quote if those answers start showing here.',
  },
];

const ROADMAP_STEPS = [
  {
    phase: 'Phase 01',
    title: 'Boston search audit',
    desc: 'We check how your site shows for your real service searches across Boston, Cambridge and Brookline, and we list what Google sees as broken or missing.',
    deliverables: ['Ranking check on your key searches', 'Google Business Profile review', 'List of technical fixes by priority'],
  },
  {
    phase: 'Phase 02',
    title: 'Map pack and listings',
    desc: 'We fix your Google Business Profile, Apple Business Connect and Bing Places, then get you onto the directories that rank for your trade in Boston.',
    deliverables: ['Profile categories and service areas fixed', 'Directory listings matched name for name', 'Review request process set up'],
  },
  {
    phase: 'Phase 03',
    title: 'Pages for each service and area',
    desc: 'We write pages for each service and the areas you serve, such as Back Bay, Seaport, Dorchester or Kendall Square, with plain answers to buyer questions.',
    deliverables: ['Service pages with direct answers', 'Area pages where demand exists', 'Schema markup on every new page'],
  },
  {
    phase: 'Phase 04',
    title: 'Monthly report and next fixes',
    desc: 'Each month we report calls, form leads and rankings for your Boston searches. Then we quote the next set of changes for you to approve.',
    deliverables: ['Monthly leads and rankings report', 'Quoted list of next changes', 'Call with the founder on request'],
  },
];

const EVALUATION_CRITERIA = [
  {
    label: 'Will you show me what you measured for my Boston searches?',
    factoryjet: 'We share the real search volumes and the Google results we pulled for your services, dated, before we suggest any work. For "boston seo" that was about 720 searches a month.',
    traditional: 'A general pitch deck about SEO with no numbers from your own Boston searches.',
  },
  {
    label: 'How will you handle the directories that rank above me?',
    factoryjet: 'We show you which lists rank for your searches, like GoodFirms or Trustpilot, and get your business onto the ones buyers read, with reviews.',
    traditional: 'Mass submissions to hundreds of low quality directories that no Boston buyer ever opens.',
  },
  {
    label: 'Who owns the work if I leave?',
    factoryjet: 'You own your Google Business Profile, pages, schema and content. There is no long-term contract, and each change is quoted and approved first.',
    traditional: 'A 12-month contract, with the profile or site held in the agency\'s own account.',
  },
  {
    label: 'How do you get more Google reviews?',
    factoryjet: 'We set up a simple review request after each job. On 21 Oct 2026 two of the three map pack firms for "boston seo company" had only 11 reviews.',
    traditional: 'Vague talk about "reputation management" with no plan for asking real customers.',
  },
];

const FAQ_CATEGORIES = [
  { key: 'choosing', label: 'Choosing a Boston SEO firm' },
  { key: 'pricing', label: 'Cost and ads' },
  { key: 'local', label: 'Local SEO in Boston' },
  { key: 'ai', label: 'SEO and AI search' },
  { key: 'process', label: 'How we work' },
];

const FAQ_ITEMS = [
  {
    category: 'choosing',
    question: 'How many people in Boston search for an SEO company?',
    answer: 'About 720 people a month in the US search for "boston seo", and the same number search for "boston seo company" and "boston seo agency", per Google Ads data we pulled on 21 Oct 2026. Google groups close versions of a search together, so those figures overlap. Smaller searches add more: "seo company boston" gets about 170 a month and "boston seo services" about 110.',
  },
  {
    category: 'choosing',
    question: 'Who is the best SEO agency in Boston?',
    answer: 'The best SEO agency for you is the one that shows real numbers from your own searches before you pay. No single list settles it. When we searched "boston seo company" on 21 Oct 2026, five of the top 10 Google results were ranking lists, and each list ranked firms in a different order. Ask any firm, us included, to show what it measured for your trade in Boston.',
  },
  {
    category: 'choosing',
    question: 'Can I trust the "top SEO companies in Boston" lists?',
    answer: 'Use them as a starting point only. On 21 Oct 2026, Google showed GoodFirms, Trustpilot and three other ranking or review lists in the top 10 for "boston seo company". Some lists rank firms that pay for placement, and some count reviews without checking them. Open a firm\'s own site, read its client names, and check its Google reviews before you call.',
  },
  {
    category: 'choosing',
    question: 'How do I find a good SEO consultant in Boston?',
    answer: 'Start with a short list of three firms, then ask each one the same questions. Ask what it found on your current Google results. Ask who owns the work if you leave. Ask how it will report leads, and whether there is a long-term contract. A good consultant answers with your own data. A weak one answers with a slide deck about SEO in general.',
  },
  {
    category: 'choosing',
    question: 'Do I need an SEO firm located in Boston?',
    answer: 'No. What matters is that the firm studies Boston search results, not where its desk sits. Google ranks your business by your profile, reviews, pages and links. FactoryJet works remotely with US clients and schedules calls in US business hours. We pull the Google results from a Boston location, so we see what your customers in Back Bay or Dorchester see.',
  },
  {
    category: 'pricing',
    question: 'How much does SEO cost for a Boston business?',
    answer: 'Local SEO retainers usually run about $500 to $3,000 a month, and one-time local SEO projects $500 to $5,000, according to WebFX local SEO pricing updated in Sep 2026. An Ahrefs survey of 439 providers found an average of $1,557 a month for local SEO. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'pricing',
    question: 'How much does a Boston SEO audit cost?',
    answer: 'Most businesses pay $101 to $750 for a one-time SEO audit, per WebFX, which found 43% of businesses fall in that range. An audit checks how Google reads your site, your profile and your rankings, and lists what to fix first. Bigger sites with many pages cost more to audit. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'pricing',
    question: 'Why pay for SEO when I can run Google Ads in Boston?',
    answer: 'Because Boston clicks are expensive. Google Ads suggests about $86.37 a click for "boston seo" and $40.07 for "boston seo company" on 21 Oct 2026. Every ad click costs money, every time. An organic ranking keeps bringing visits after the work is done. You can run both: ads for fast leads, and SEO to lower the ad bill over time.',
  },
  {
    category: 'pricing',
    question: 'Do you lock clients into a long contract?',
    answer: 'No. FactoryJet has no long-term contract. Each change is quoted and approved by you before we start it. You own your Google Business Profile, pages, schema markup and content, so all of it stays with you if you stop working with us. Founder Bhavesh Barot replies to every inquiry within 24 hours.',
  },
  {
    category: 'local',
    question: 'What is local SEO, and does a Boston business need it?',
    answer: 'Local SEO is work that helps your business show in Google Maps and the map pack, the box of three businesses near the top of local searches. A Boston business that serves customers nearby needs it. On 21 Oct 2026 the map pack appeared above the regular results for "boston seo company". About 70 people a month search "local seo boston" alone, per Google Ads data.',
  },
  {
    category: 'local',
    question: 'How many Google reviews do I need to show in the Boston map pack?',
    answer: 'Fewer than most owners think. On 21 Oct 2026, the three map pack businesses for "boston seo company" had 11, 69 and 11 Google reviews, all with 5 stars. Reviews are one signal among several. Your category, your distance from the searcher, and how complete your profile is also count. A steady flow of new reviews matters more than one big push.',
  },
  {
    category: 'local',
    question: 'Can you help my business show up in Dorchester searches?',
    answer: 'Yes. People do search "seo dorchester" and similar phrases, so the demand is there. We add Dorchester to your Google Business Profile service area if you serve it. Then we write a page for your Dorchester customers with real details, such as the streets or jobs you cover. We only build an area page when people in that area search for your service.',
  },
  {
    category: 'local',
    question: 'Should I make a separate page for Cambridge, Back Bay and Seaport?',
    answer: 'Only when each page has something real to say. Google treats near-copy pages with the city name swapped as thin content and may ignore them. If you have a Cambridge office, Seaport clients or Back Bay case work, write about that on its own page. If not, list those areas on one strong Boston page and in your profile\'s service area.',
  },
  {
    category: 'local',
    question: 'Which listings matter besides Google for a Boston business?',
    answer: 'Apple Business Connect and Bing Places matter, because Apple Maps and Bing feed answers on many phones and assistants. After that, pick the directories that rank for your own trade in Boston. For "boston seo company" on 21 Oct 2026, that meant GoodFirms and Trustpilot. For a dentist or a law firm the list will be different, so we check it per client.',
  },
  {
    category: 'local',
    question: 'Do you work with businesses outside the city, like Waltham or Quincy?',
    answer: 'Yes. We can work with businesses anywhere in Greater Boston, such as Waltham, Quincy, Newton, Brookline and Burlington. Each town has its own map results, so a Waltham firm competes with different businesses than one in Back Bay. We pull Google results for your own town and the towns you serve, then plan the work around what we find there.',
  },
  {
    category: 'ai',
    question: 'Is SEO dead now that people use AI to search?',
    answer: 'No. Google still showed a full page of regular results and a map pack for "boston seo company" on 21 Oct 2026, and no AI Overview. "Is SEO dead now with AI?" was one of the People Also Ask questions on that same page. AI tools also pull answers from websites, so a well built site helps you in both places.',
  },
  {
    category: 'ai',
    question: 'What is an AI Overview, and does it show for Boston searches?',
    answer: 'An AI Overview is a short summary Google writes at the top of some results, with links to the sites it used. It did not show on "boston seo company" when we searched from Boston on 21 Oct 2026. It shows on many question searches. We write pages with short, direct answers so they are easier to quote, though no one can promise Google will pick them.',
  },
  {
    category: 'ai',
    question: 'Can you get my Boston business named by ChatGPT or Perplexity?',
    answer: 'We can make your business easier for AI assistants to find and quote, but no firm controls what they say. These tools read your site, your listings and what other sites say about you. We give each service a clear page, add schema markup (code that labels facts for machines), and keep your name and details the same everywhere. WebFX puts AI SEO at $1,500 to $5,000 a month for small businesses.',
  },
  {
    category: 'ai',
    question: 'Will SEO be replaced by AI?',
    answer: 'Not on what we saw. "Will SEO be replaced by AI?" showed in People Also Ask for "boston seo company" on 21 Oct 2026. On that same page, the map pack and ten regular results still took the screen. AI tools change how people search, but they still pull from websites, reviews and listings. Someone has to build and fix those.',
  },
  {
    category: 'process',
    question: 'What happens in the first month of SEO work?',
    answer: 'We start with an audit of your site, your Google Business Profile and your rankings on the Boston searches that bring buyers. Then we fix the profile and the worst technical problems first, because those can move fastest. You get a written list of what we found and a quote for the next set of changes, which you approve before we begin.',
  },
  {
    category: 'process',
    question: 'How long before SEO brings leads in Boston?',
    answer: 'Map pack changes can show within a few weeks once your profile and reviews improve. New pages usually take several months to rank, longer for a crowded search like "boston seo", where Google Ads suggests about $86.37 a click. We report calls and form leads each month, so you can see what is working before you approve more work.',
  },
  {
    category: 'process',
    question: 'What will I see in a monthly SEO report?',
    answer: 'You will see calls, form leads, and where you rank for the Boston searches we agreed on at the start. We also list what we changed that month and what we plan next, with a quote. The report uses plain words. If a number dropped, we say so and explain why we think it happened.',
  },
  {
    category: 'process',
    question: 'Who will I talk to at FactoryJet?',
    answer: 'Founder Bhavesh Barot replies to every inquiry within 24 hours, and you can ask for a call with him at any stage. FactoryJet was founded in 2014, has worked with 500+ businesses, and delivers 97% of work on time. We work remotely with US clients and schedule calls in US business hours. We also do white-label SEO work for agencies.',
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
  name: 'Boston Local SEO & Google Maps Optimization',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  serviceType: 'Local SEO, Google Business Profile Management & AI Search Optimization',
  description:
    'SEO for Boston, MA life science firms, law firms, clinics and engineering companies, from Kendall Square to Back Bay. No long-term contract.',
  areaServed: [
    { '@type': 'City', name: 'Boston' },
    { '@type': 'City', name: 'Cambridge' },
    { '@type': 'City', name: 'Newton' },
    { '@type': 'City', name: 'Waltham' },
    { '@type': 'City', name: 'Quincy' },
    { '@type': 'State', name: 'Massachusetts' },
  ],
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'SEO Agency for Boston, MA Businesses | FactoryJet',
  description: 'SEO for Boston, MA life science firms, law firms, clinics and engineering companies, from Kendall Square to Back Bay. No long-term contract.',
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
    { '@type': 'ListItem', position: 3, name: 'Boston', item: CANONICAL },
  ],
};

export default function BostonSeoPage() {
  return (
    <>
      <script id="bos-seo-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="bos-seo-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="bos-seo-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="bos-seo-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>Boston Local SEO &amp; AI Citation Authority</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  SEO for Boston Businesses, From Kendall Square to the Seaport
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  We work on your Google Business Profile, your service pages and your listings so customers searching in Kendall Square, the Seaport, and Back Bay can find you. Monthly reporting covers calls and inquiries.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Free Local SEO Audit" region="us" btnVariant="primary-dark" modalVariant="seo" />
                  <a href="#bos-seo-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Boston Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/boston/seo/hero-rising-line-review.webp"
                  alt="An older man pointing a pencil at a monitor showing a simple rising line while a young woman with a notebook stands beside him"
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
                  src="/images/us/boston-seo/boston-seo-consult.webp"
                  alt="A shopkeeper in a navy apron holding a phone that shows a map pin, talking with a woman carrying a tote bag at the shop door"
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
                  Engineered for Greater Boston&apos;s High-Value Commercial Sectors
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  From Cambridge biotechnology innovators to Back Bay wealth managers and Seaport venture firms, New England businesses need verified search authority to capture high-ticket clients before competitors do.
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

        {/* ── 04. BOSTON DISTRICTS & INDUSTRY DIRECTORY ── */}
        <section id="bos-seo-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Boston Commercial Corridor Depth</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored Local SEO for Boston&apos;s Core Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From Cambridge biotechnology leaders to Back Bay wealth advisors and Seaport fintech firms:
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
                Specialized Local Search Architectures for Boston
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every high-value commercial sector in Greater Boston demands tailored keyword targeting, entity schemas, and conversion pathways:
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
                What FactoryJet Does Differently for Boston Businesses
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                We searched "boston seo company" from a Boston location on 21 Oct 2026 and pulled US search volumes the same day, and these four findings shape how we work here.
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
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.08em' }}>What we saw in Boston search, 21 Oct 2026:</span>
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
            badge="// BOSTON LOCAL SEARCH & AI RANKING BLUEPRINT"
            title="4-Layer Local SEO Stack: Google Maps to AI Overviews"
            subtitle="Explore how GBP API optimization, multi-directory citation syncing, structured schema graphs, and AI citation crawlers work together in Boston local search."
            city="Boston"
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
                Each stage below is built around the searches Boston buyers typed in October 2026 and the parts of the city your customers come from.
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
                Evaluating Boston SEO Agencies: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Five of the top 10 results for "boston seo company" on 21 Oct 2026 were ranking lists, so ask these questions before you trust any list or sign with any firm.
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
        <LocalSeoOpportunityEstimator city="Boston" region="us" />

        {/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION ── */}
        <FAQ
          eyebrow="BOSTON LOCAL SEARCH INTELLIGENCE"
          headline="Frequently Asked Questions About Local SEO in Boston MA"
          lead="Direct, plain English answers to what Boston business owners and marketing directors ask about search visibility:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 11. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <SeoCityLinksUS currentCity="boston" />
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
              Start With a Free Boston Local SEO Audit
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
