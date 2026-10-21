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
const CANONICAL = 'https://factoryjet.com/lakewood-ranch/seo';

export const metadata: Metadata = {
  title: 'SEO Agency for Lakewood Ranch, FL Businesses | FactoryJet',
  description:
    'SEO for Lakewood Ranch, FL clinics, wealth advisors, home builders and roofers in Sarasota and Manatee counties. Month-to-month terms.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Agency for Lakewood Ranch, FL Businesses | FactoryJet',
    description:
      'SEO for Lakewood Ranch, FL clinics, wealth advisors, home builders and roofers in Sarasota and Manatee counties. Month-to-month terms.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'SEO for Lakewood Ranch, FL businesses by FactoryJet' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency for Lakewood Ranch, FL Businesses | FactoryJet',
    description: 'SEO for Lakewood Ranch, FL clinics, wealth advisors, home builders and roofers in Sarasota and Manatee counties. Month-to-month terms.',
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
  { num: 'Maps', title: 'Business Profile Review', desc: 'Review the categories, services, and business details customers see in local search.', icon: '📍' },
  { num: 'Site', title: 'Technical SEO Review', desc: 'Find crawl, performance, and usability issues that get between a search and an inquiry.', icon: '📈' },
  { num: '500+', title: 'Businesses Served', desc: 'Businesses FactoryJet has built for, across all services.', icon: '🏢' },
  { num: 'Monthly', title: 'Month-to-Month Terms', desc: 'Month-to-month terms with direct access to senior technical engineers.', icon: '⚡' },
];

const DISTRICTS = [
  {
    corridor: 'Main Street & Town Center',
    focus: 'Wealth Advisory, Estate Law & Executive Services',
    desc: 'The original commercial core of Lakewood Ranch. High-net-worth residents research executive credentials, practice stability, and client reviews before booking consultations.',
  },
  {
    corridor: 'Waterside Place & Lakefront',
    focus: 'Hospitality, Dining, Wellness & Modern Retail',
    desc: 'Vibrant lakefront lifestyle hub. Mobile discoverability, live menu schema, and steady review acquisition drive high foot traffic and event bookings.',
  },
  {
    corridor: 'CORE at Lakewood Ranch',
    focus: 'Healthcare Innovation, Med Spas & Specialty Clinics',
    desc: 'Collaboration Opportunities for Research and Exploration park. Healthcare providers and medical specialists require comprehensive medical schema and physician authority.',
  },
  {
    corridor: 'University Parkway & UTC Corridor',
    focus: 'High-Ticket Dentistry, Orthopedics & Aesthetics',
    desc: 'High-traffic border between Sarasota and Manatee counties. Capturing high-intent patient queries requires multi-county LocalBusiness schema and a strong Google Maps listing.',
  },
  {
    corridor: 'Lorraine Road & Eastern Villages',
    focus: 'Luxury Real Estate, Pool Builders & Home Improvement',
    desc: 'Affluent new residential villages where affluent homeowners search for verified contractors, architects, and high-end landscaping specialists.',
  },
  {
    corridor: 'Premier Sports Campus & SR-70',
    focus: 'Commercial Services, Roofing & Hurricane Contractors',
    desc: 'Commercial artery servicing fast-growing master-planned communities. Rapid post-storm search spikes require prominent Map Pack placement and instant click-to-call buttons.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Healthcare, Med Spas & Concierge Longevity Practices',
    headline: 'Converting Affluent Patients in America’s Premier Master-Planned Community',
    description:
      'Lakewood Ranch is home to high-income retirees and active families demanding premium healthcare, aesthetic medicine, and concierge longevity care. We build comprehensive medical schema, doctor profile directories, and HIPAA-aware conversion flows that help practices appear in Google Maps results and AI answer engines.',
    image: '/images/us/lakewood-ranch/seo/card-blood-pressure-check.webp',
    alt: 'A doctor wrapping a blood pressure cuff around the arm of an older woman in a lilac cardigan seated in an armchair in a bright room',
    points: [
      'Comprehensive schema for Physician, MedicalClinic, and MedicalSpecialty',
      'HIPAA-aware appointment scheduling and instant click-to-call mobile buttons',
      'Post-visit SMS review request workflows',
    ],
  },
  {
    sector: 'Private Wealth Management, Estate Law & Family Offices',
    headline: 'Earning High-Ticket Consultations Among High-Net-Worth Retirees',
    description:
      'With thousands of high-net-worth individuals relocating to Lakewood Ranch, financial advisory practices and estate planning attorneys require authoritative search visibility. We build verified financial entity schemas, author deep wealth preservation guides, and engineer sub-second page performance.',
    image: '/images/us/lakewood-ranch/seo/card-wealth-adviser-retired-couple.webp',
    alt: 'A financial adviser in a cream blazer talking with a retired couple at a round table with two closed folders in a bright meeting room',
    points: [
      'Structured JSON-LD schema for FinancialService, LegalService, and WealthManagement',
      'High-authority regional media citations and verified NAP directory synchronization',
      'Conversion-optimized lead capture flows designed for high-net-worth consultations',
    ],
  },
  {
    sector: 'Luxury Custom Home Builders, Remodelers & Pool Contractors',
    headline: 'Capturing Multi-Million-Dollar Residential Project Inquiries',
    description:
      'Homeowners in The Lake Club, Country Club East, and Waterside demand elite craftsmanship. We optimize project portfolio galleries, architectural spec sheets, and neighborhood landing pages to position your contracting brand as the premier luxury builder across Sarasota and Manatee counties.',
    image: '/images/us/lakewood-ranch/seo/card-timber-wall-frame-raising.webp',
    alt: 'Two carpenters lifting a timber wall frame upright on a concrete slab at a house building site, an orange extension cable on the ground',
    points: [
      'High-resolution WebP project galleries optimized for image search and speed',
      'Neighborhood landing pages for The Lake Club, Waterside, and Country Club',
      'Structured LocalBusiness schema capturing high-budget residential inquiries',
    ],
  },
  {
    sector: 'Hurricane Roofing, Impact Windows & Mechanical Contractors',
    headline: 'Urgent Storm Preparation and Recovery Searches',
    description:
      'Gulf Coast tropical storms and humid subtropical heat create urgent homeowner repair and storm hardening demands. We position your contracting business directly in the Google Map Pack 3-Pack with live call recording and neighborhood service pages from Lakewood Ranch to Sarasota and Bradenton.',
    image: '/images/us/services/roofing-seo/hero.webp',
    alt: 'Aerial view of suburban shingle rooftops at golden hour',
    points: [
      'Multi-county landing pages for Lakewood Ranch, Sarasota, and Bradenton',
      'Live call recording and conversion attribution integrated into Google Analytics 4',
      'Crawl-optimized review velocity systems to outperform regional multi-truck fleets',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Almost nobody types the town name',
    problem: 'Google Ads data from 21 Oct 2026 shows about 10 US searches a month each for "lakewood ranch seo", "seo lakewood ranch" and "lakewood ranch seo company". A plan built only around the Lakewood Ranch name chases a tiny pool of buyers.',
    solution: 'We target what your customers type across Manatee and Sarasota counties: Bradenton and Sarasota phrases, service plus town searches, and "near me" searches that Google answers from your location. Lakewood Ranch stays on the page as one place you serve.',
  },
  {
    num: '02',
    title: 'Six of the top 10 results were directories',
    problem: 'On 21 Oct 2026, six of the top 10 Google results for "lakewood ranch seo company" were lists or directories: two Yelp pages, two BBB pages, a MapQuest listing and the Lakewood Ranch Business Alliance member directory at members.lwrba.org.',
    solution: 'We get your business listed and correct on those same pages, so you show up even where your own site does not rank. That means your Yelp profile, your BBB profile and, if you are a member, your Business Alliance directory entry.',
  },
  {
    num: '03',
    title: 'The map pack runs on reviews',
    problem: 'The three businesses in Google\'s map pack on 21 Oct 2026 had 62, 8 and 49 reviews, rated 5, 4.5 and 5 stars. One business held a map spot with only 8 reviews.',
    solution: 'We set up a steady review request routine for your Google Business Profile, tied to finished jobs or visits. Getting to a few dozen honest reviews puts you in range of what the map pack showed that day.',
  },
  {
    num: '04',
    title: 'Searches spill over to Bradenton and Parrish',
    problem: 'The top 10 for a Lakewood Ranch search on 21 Oct 2026 included a Yelp list titled for Bradenton and an agency page aimed at Parrish. Google mixes nearby towns into the same results.',
    solution: 'We write one service page per real area you serve, such as Bradenton, Sarasota, Parrish or Holmes Beach, each with its own details. No copied pages with only the town name swapped.',
  },
];

const ROADMAP_STEPS = [
  {
    phase: 'Month 1',
    title: 'Measure your real local demand',
    desc: 'We pull monthly volumes for your service in Lakewood Ranch, Bradenton and Sarasota, then run live Google searches from your area to see who ranks today.',
    deliverables: ['Volume table for your service by town', 'Live results check from Lakewood Ranch', 'List of directories ranking for you'],
  },
  {
    phase: 'Month 2',
    title: 'Fix your profile and listings',
    desc: 'We clean up your Google Business Profile, Apple Business Connect, Bing Places, Yelp and BBB so name, address and phone match everywhere.',
    deliverables: ['Google Business Profile categories and services', 'Matching Yelp, BBB and Bing details', 'Review request routine for finished jobs'],
  },
  {
    phase: 'Month 3',
    title: 'Build area and service pages',
    desc: 'We write pages for the services and towns that showed demand, such as roofing in Bradenton or pool building in Sarasota, with plain answers to common questions.',
    deliverables: ['One page per service and town', 'Local business schema on each page', 'Technical fixes for speed and crawling'],
  },
  {
    phase: 'Months 4 to 6',
    title: 'Report what moved',
    desc: 'From month 4 we add pages where demand showed up, then each month we report calls, form leads and searches by town, and quote any next change in writing.',
    deliverables: ['Monthly report of calls and leads', 'Search terms by town', 'Written quote for each next change'],
  },
];

const EVALUATION_CRITERIA = [
  {
    label: 'How many people search for what I sell here?',
    factoryjet: 'We show you the monthly volume for your service in Lakewood Ranch, Bradenton and Sarasota. For "lakewood ranch seo" itself, it was about 10 a month on 21 Oct 2026.',
    traditional: 'A promise of "thousands of local searches" with no table, no source and no date behind it.',
  },
  {
    label: 'Who ranks for my search today?',
    factoryjet: 'We run a live Google search from your area and show you each top 10 result. On our Lakewood Ranch check, six of ten were directories like Yelp and BBB.',
    traditional: 'A general audit score from a tool, with no look at the real results page your buyers see.',
  },
  {
    label: 'What happens to my work if I leave?',
    factoryjet: 'There is no long-term contract. Your Google profile, pages, schema and content stay yours, and each change is quoted and approved before work starts.',
    traditional: 'A 12 month lock-in, with the profile or site held in the agency\'s own account.',
  },
  {
    label: 'Who answers when I have a question?',
    factoryjet: 'Founder Bhavesh Barot replies within 24 hours. We work remotely with US clients and schedule calls in US business hours.',
    traditional: 'A support ticket queue and a new account manager every few months.',
  },
];

const FAQ_CATEGORIES = [
  { key: 'local', label: 'Lakewood Ranch search' },
  { key: 'pricing', label: 'Cost' },
  { key: 'trades', label: 'Contractors and web design' },
  { key: 'ai', label: 'AI search' },
  { key: 'process', label: 'Working with us' },
];

const FAQ_ITEMS = [
  {
    category: 'local',
    question: 'How many people search for an SEO company in Lakewood Ranch?',
    answer: 'Few people type the town name. Google Ads data we pulled on 21 Oct 2026 showed about 10 US searches a month each for "lakewood ranch seo", "seo lakewood ranch" and "lakewood ranch seo company". Google groups close variants, so these may overlap. Most local buyers search for the service plus Bradenton or Sarasota, or use "near me". That is why we plan around the whole area.',
  },
  {
    category: 'local',
    question: 'Why should a Lakewood Ranch business care about Bradenton and Sarasota searches?',
    answer: 'Because that is where most of the searching happens. Lakewood Ranch spans Manatee and Sarasota counties, and the town name alone gets about 10 searches a month for SEO terms (21 Oct 2026). Customers near you often type Bradenton or Sarasota. Even our Lakewood Ranch search showed a Yelp list titled for Bradenton. Pages that mention the towns you serve catch those buyers.',
  },
  {
    category: 'local',
    question: 'What showed up when you searched for an SEO company in Lakewood Ranch?',
    answer: 'Mostly directories. On 21 Oct 2026 we searched "lakewood ranch seo company" from Lakewood Ranch. Six of the top 10 results were lists: two Yelp pages, two BBB pages, a MapQuest listing and the Lakewood Ranch Business Alliance member directory. Four were agency websites. Above them sat a map pack of three businesses. Google did not show an AI Overview on that search.',
  },
  {
    category: 'local',
    question: 'Does joining the Lakewood Ranch Business Alliance help my SEO?',
    answer: 'It can help you get seen. The Alliance member directory at members.lwrba.org ranked in the top 10 for "lakewood ranch seo company" on 21 Oct 2026. If you are a member, your listing there is one more place buyers can find you. We check that your name, address, phone and website match your Google Business Profile, because mismatched details confuse Google.',
  },
  {
    category: 'local',
    question: 'How many Google reviews do I need to show in the Lakewood Ranch map pack?',
    answer: 'There is no fixed number, but the map pack gives a guide. On 21 Oct 2026 the three businesses shown had 62, 8 and 49 reviews, rated 5, 4.5 and 5 stars. One held a spot with just 8. Reviews help, but so do distance, your categories and how complete your profile is. We set up a simple routine to ask happy customers for reviews.',
  },
  {
    category: 'local',
    question: 'Do Yelp and BBB listings matter for local SEO in Lakewood Ranch?',
    answer: 'Yes, here they matter more than usual. Two Yelp pages and two BBB pages made the top 10 for "lakewood ranch seo company" on 21 Oct 2026. Buyers who click those lists should find you on them. We claim or fix your Yelp and BBB profiles and make your details match your website, Google, Apple Business Connect and Bing Places.',
  },
  {
    category: 'local',
    question: 'Can I rank in Holmes Beach or Parrish from a Lakewood Ranch address?',
    answer: 'You can show up in organic results, though the map pack favors businesses close to the searcher. One top 10 result for our Lakewood Ranch search on 21 Oct 2026 was a page aimed at Parrish, so Google does mix nearby towns. We write a real page for each area you serve, such as Holmes Beach on Anna Maria Island, with details specific to that area.',
  },
  {
    category: 'pricing',
    question: 'How much does an SEO agency cost in Lakewood Ranch?',
    answer: 'Local SEO retainers run about $500 to $3,000 a month, and one-time local SEO projects $500 to $5,000, per WebFX local SEO pricing updated Sep 2026. Small business SEO runs $1,500 to $3,500 a month, per WebFX. Your cost depends on how many services and towns you target. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'pricing',
    question: 'What do most businesses pay for SEO each month?',
    answer: 'An Ahrefs survey of 439 SEO providers found an average of $2,917 a month for SEO and $1,557 a month for local SEO. Those are national averages, and small Lakewood Ranch businesses with one location often need less. Ask any agency what is in the price and how they report results. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'pricing',
    question: 'How much does a one-time SEO audit cost near Sarasota?',
    answer: 'Most businesses pay $101 to $750 for a one-time SEO audit, according to WebFX, which found 43% of businesses fall in that range. An audit checks your site for crawl errors, slow pages, missing titles and listing problems. It is a good first step before any monthly plan. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'pricing',
    question: 'Do I have to sign a long contract for SEO?',
    answer: 'Not with us. FactoryJet has no long-term contract. Each change is quoted and approved before we start, and your Google profile, pages, schema and content stay yours if you leave. Ask other firms the same question. Some hold your profile or website in their own account, which makes it hard to switch later.',
  },
  {
    category: 'trades',
    question: 'How does SEO work for roofing and HVAC companies in Bradenton?',
    answer: 'It starts with your Google Business Profile and one page per service. Roofing and HVAC buyers search with urgency, often from a phone, and call the first trusted name they see. We set your profile categories, add each service and the towns you cover, such as Bradenton and Lakewood Ranch, and build a review routine tied to finished jobs. Then we track calls by town.',
  },
  {
    category: 'trades',
    question: 'Can SEO help a pool builder or pool contractor in Sarasota?',
    answer: 'Yes. Pool buyers research for weeks, so photos, project pages and clear answers about permits and timelines help them choose. We build a page for each pool service and each area you serve, such as Sarasota, Lakewood Ranch and Bradenton. We add local business schema, which is code that tells Google your service area. Your project gallery becomes proof Google and buyers can read.',
  },
  {
    category: 'trades',
    question: 'Do you build websites for Lakewood Ranch small businesses?',
    answer: 'Yes. Many people who find our SEO page also search for Lakewood Ranch web design, website builders and WordPress sites. We build and redesign small business websites, and we set them up for search from day one: fast pages, clear titles, one page per service and local business schema. You own the site and its content. We quote the build in writing first.',
  },
  {
    category: 'trades',
    question: 'Should I use a website builder or hire someone in Lakewood Ranch?',
    answer: 'A builder like Wix or Squarespace works for a simple site you will update yourself. It gets harder when you need a page for each service and town, custom schema or fast load times on phones. If your site already exists on a builder, we can fix its SEO there. If you outgrow it, we can rebuild it on a platform you own.',
  },
  {
    category: 'ai',
    question: 'What is AI SEO, and do Lakewood Ranch businesses need it?',
    answer: 'AI SEO means setting up your pages so AI tools like ChatGPT, Perplexity and Google\'s AI answers can read and quote them. You do it with clear question and answer sections, facts with sources and accurate schema. Google showed no AI Overview on "lakewood ranch seo company" on 21 Oct 2026, but buyers ask AI tools for local picks. We structure pages so they can be quoted.',
  },
  {
    category: 'ai',
    question: 'How much do AI SEO services cost for a small business?',
    answer: 'AI SEO, also called GEO (generative engine optimization), runs about $1,500 to $5,000 a month for small businesses, per WebFX in Sep 2026. Much of the work overlaps with regular SEO: clear answers, accurate facts and clean code. A Lakewood Ranch business with one location rarely needs a separate AI plan. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'ai',
    question: 'Is SEO dead now that people use AI to search?',
    answer: 'No. Google showed this exact question as a People Also Ask result on our Lakewood Ranch search on 21 Oct 2026. AI tools still pull from web pages, and many cite pages that rank well or answer plainly. Local buyers also still use Google Maps to find a roofer or dentist nearby. The basics still count: a good profile, honest reviews and clear service pages.',
  },
  {
    category: 'process',
    question: 'What does an SEO company do for a local business?',
    answer: 'An SEO company helps your business show up when people search on Google. For a Lakewood Ranch business that means fixing your Google Business Profile, matching your listings on sites like Yelp and BBB, writing service pages and fixing technical problems on your site. Then it reports what changed. This was a People Also Ask question on our 21 Oct 2026 search.',
  },
  {
    category: 'process',
    question: 'What are technical SEO services?',
    answer: 'Technical SEO fixes the parts of your site that people do not see but Google does. That covers page speed, broken links, pages Google cannot crawl, duplicate pages, missing titles and schema code. A slow or broken site can hold back good content. We test your site, list each problem by impact and quote the fixes before we touch anything.',
  },
  {
    category: 'process',
    question: 'How long does SEO take to work for a Lakewood Ranch business?',
    answer: 'Profile and listing fixes can show up in the map pack within weeks. New service pages usually take a few months to rank. With only about 10 searches a month for Lakewood Ranch SEO terms (21 Oct 2026), small towns can move faster than big cities because fewer firms compete. We report calls and leads each month so you can see what moved.',
  },
  {
    category: 'process',
    question: 'How do I pick the best SEO company near Bradenton or Sarasota?',
    answer: 'Ask each firm to show you the live Google results for your service from your area, and the monthly searches behind it. On our 21 Oct 2026 check for Lakewood Ranch, six of ten results were directories, so a good firm should plan for those. Ask who owns your work, how long the contract runs and who answers your emails.',
  },
  {
    category: 'process',
    question: 'Who will I work with at FactoryJet?',
    answer: 'Founder Bhavesh Barot replies within 24 hours. FactoryJet was founded in 2014, has worked with 500+ businesses and delivers 97% of work on time. We work remotely with US clients and schedule calls in US business hours. We also do white-label SEO work for agencies. Every change is quoted and approved before it starts.',
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
  name: 'Lakewood Ranch SEO Services & Local Search Optimization',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  serviceType: 'Local SEO, Technical SEO & Generative Engine Optimization',
  description:
    'SEO for Lakewood Ranch, FL clinics, wealth advisors, home builders and roofers in Sarasota and Manatee counties. Month-to-month terms.',
  areaServed: [
    { '@type': 'City', name: 'Lakewood Ranch' },
    { '@type': 'City', name: 'Sarasota' },
    { '@type': 'City', name: 'Bradenton' },
    { '@type': 'City', name: 'University Park' },
    { '@type': 'State', name: 'Florida' },
  ],
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'SEO Agency for Lakewood Ranch, FL Businesses | FactoryJet',
  description: 'SEO for Lakewood Ranch, FL clinics, wealth advisors, home builders and roofers in Sarasota and Manatee counties. Month-to-month terms.',
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
    { '@type': 'ListItem', position: 2, name: 'Lakewood Ranch', item: CANONICAL },
    { '@type': 'ListItem', position: 3, name: 'SEO', item: CANONICAL },
  ],
};

export default function LakewoodRanchSeoPage() {
  return (
    <>
      <script id="lwr-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="lwr-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="lwr-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="lwr-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>Lakewood Ranch Local &amp; Technical SEO</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  SEO for Lakewood Ranch Businesses in Sarasota and Manatee Counties
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  We work on your Google Business Profile, your service pages and your listings so customers searching in Sarasota and Manatee counties can find you. No long-term contracts. Talk directly with senior technical engineers.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Claim Free Lakewood Ranch SEO Audit" region="us" btnVariant="primary-dark" />
                  <a href="#lwr-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Local Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame (Edge-to-Edge) */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/lakewood-ranch/seo/lakewood-ranch-seo-hero.webp"
                  alt="A couple at a waterside cafe table looking at a phone, palm trees and shopfronts behind them"
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

        {/* ── 03. RITOVEX ABOUT US & 2x2 BENTO COUNTER SECTION ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(56px, 8vh, 96px) 0' }}>
          <div className="pp-wrap">
            <div className="rv-about-grid">
              
              {/* Left Column: Clean Organic Curved Photo Frame (Edge-to-Edge) */}
              <div className="rv-curved-frame-2">
                <Image
                  src="/images/us/lakewood-ranch/seo/lakewood-ranch-affluent-community.webp"
                  alt="People walking along a palm-lined shopping street past an outdoor cafe with orange awnings, one couple with a dog and another with a stroller"
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
                  <span>Sarasota &amp; Manatee Reality</span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
                  Engineered for Results in Lakewood Ranch
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  With high-income demographics, rapid medical and commercial expansion, and competition spanning two counties, generic agency tactics fail. We combine sub-second Core Web Vitals speed optimization, Google Business Profile work, and localized corridor authority.
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
                  <ModalCTAButton label="Schedule Lakewood Ranch Strategy Call" region="us" btnVariant="primary-dark" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 04. LAKEWOOD RANCH BUSINESS CORRIDORS DIRECTORY ── */}
        <section id="lwr-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Geographic Precision</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored SEO for Lakewood Ranch Core Corridors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From Main Street wealth advisory to CORE biotech healthcare and Waterside dining:
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

        {/* ── 05. INDUSTRY DEEP-DIVES & PHOTOREALISTIC CASE EXAMPLES ── */}
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
                Specialized Search Strategies for Lakewood Ranch Leading Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every vertical in Lakewood Ranch demands distinct schema models, citation targets, and conversion architectures:
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

        {/* ── 06. CORE DRIVERS & PAIN POINTS (RITOVEX NUMBERED SERVICES ROWS) ── */}
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
                What FactoryJet Does Differently for Lakewood Ranch Businesses
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                We searched "lakewood ranch seo company" from Lakewood Ranch on 21 Oct 2026 and pulled US search volumes the same day; these four findings shape how we work here.
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
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.08em' }}>What we saw in Lakewood Ranch search, 21 Oct 2026:</span>
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

        {/* ── 07. ARCHITECTURE BLUEPRINT (AUTO-ROTATING TABS) ── */}

        <div id="seo-architecture-blueprint">
          <LocalSeoArchitectureBlueprint
            badge="// LAKEWOOD RANCH LOCAL SEO & AI CITATION BLUEPRINT"
            title="Local SEO Architecture: From Map Pack to AI Citations"
            subtitle="Explore how your Google Business Profile, local review velocity, JSON-LD schema, and high-performance frontend synchronize to capture inbound leads."
            city="Lakewood Ranch"
            ctaLabel="Claim Free Lakewood Ranch SEO Audit"
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
                Our 6-Month Lakewood Ranch SEO Roadmap
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                A 6-month roadmap built around how people search in Manatee and Sarasota counties, where Bradenton and Sarasota phrases carry most of the demand.
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
                Evaluating Lakewood Ranch SEO Companies: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Ask any Lakewood Ranch SEO firm these four questions before you sign, and compare the answers to what we measured on 21 Oct 2026.
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

        {/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION (16 DETAILED QUESTIONS) ── */}
        <LocalSeoOpportunityEstimator city="Lakewood Ranch" region="us" />

        <FAQ
          eyebrow="LAKEWOOD RANCH SEO INTELLIGENCE"
          headline="Frequently Asked Questions About SEO in Lakewood Ranch FL"
          lead="Direct, plain English answers to what Lakewood Ranch business owners and marketing leaders ask about local search rankings and lead generation:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 11. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <SeoCityLinksUS currentCity="lakewood-ranch" />
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
              <span>No-Contract Lakewood Ranch SEO</span>
            </div>
            
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Start With a Free Lakewood Ranch SEO Audit
            </h2>
            
            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Send us your website URL. We will perform a complete local search and technical audit of your site and top Sarasota and Manatee competitors, completely free.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Claim Your Free Lakewood Ranch SEO Audit" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
