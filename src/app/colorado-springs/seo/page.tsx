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
const CANONICAL = 'https://factoryjet.com/colorado-springs/seo';

export const metadata: Metadata = {
  title: 'SEO Agency for Colorado Springs, CO Businesses | FactoryJet',
  description:
    'SEO for Colorado Springs, CO defense firms, contractors, clinics and tourism businesses. Local search and technical SEO. Month-to-month terms.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Agency for Colorado Springs, CO Businesses | FactoryJet',
    description:
      'SEO for Colorado Springs, CO defense firms, contractors, clinics and tourism businesses. Local search and technical SEO. Month-to-month terms.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'SEO for Colorado Springs, CO businesses by FactoryJet' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency for Colorado Springs, CO Businesses | FactoryJet',
    description: 'SEO for Colorado Springs, CO defense firms, contractors, clinics and tourism businesses. Local search and technical SEO. Month-to-month terms.',
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
    corridor: 'Downtown & Tejon Corridor',
    focus: 'Legal, Corporate Counsel & Professional Services',
    desc: 'Central commercial district anchored by the Pikes Peak Center and historic Tejon Street. Corporate buyers look for verified client testimonials and clear practice area expertise.',
  },
  {
    corridor: 'Briargate & Northgate',
    focus: 'Healthcare, Dental & High-Income Family Services',
    desc: 'Rapidly expanding northern residential corridor along Powers Boulevard. High-converting practices capture patients through mobile speed, localized reviews, and Map Pack prominence.',
  },
  {
    corridor: 'Interquest & Tech Center',
    focus: 'Defense Technology, Cybersecurity & Engineering',
    desc: 'Defense and aerospace technology corridor near the Air Force Academy. Answer-first content, technical certifications, and CMMC compliance signals capture prime defense procurement.',
  },
  {
    corridor: 'Garden of the Gods & Westside',
    focus: 'Tourism, Outdoor Hospitality & Active Living',
    desc: 'High-volume tourist hub surrounding Manitou Springs and Old Colorado City. Mobile discoverability, seasonal review velocity, and rich visual schema drive bookings.',
  },
  {
    corridor: 'Falcon & Eastern Expansion Corridor',
    focus: 'Home Services, Roofing & General Contractors',
    desc: 'Fast-growing eastern suburbs facing extreme Pikes Peak hail storms. Urgent homeowner search terms require a strong Google Maps listing and immediate click-to-call flows.',
  },
  {
    corridor: 'The Broadmoor & South Suburbs',
    focus: 'Private Wealth, Luxury Real Estate & Med Spas',
    desc: 'Affluent southern corridor where high-net-worth clients research provider reputations and comprehensive credentials before booking consultations.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Defense Technology, Aerospace & Cybersecurity',
    headline: 'Capturing Prime Defense Procurement Around Space Command & Peterson SFB',
    description:
      'Home to U.S. Space Command, Peterson Space Force Base, and Schriever Space Force Base, Colorado Springs is America’s premier defense technology hub. We build authoritative capability silos, government entity schemas, and sub-second page performance that position engineering contractors on prime DoD procurement lists.',
    image: '/images/us/colorado-springs/seo/card-satellite-frame-assembly.webp',
    alt: 'Two engineers in white coats assembling a small foil-wrapped satellite frame, one using an orange torque wrench',
    points: [
      'Structured entity schemas for GovernmentOrganization and DefenseContractor',
      'Answer-first technical capability sheets formatted for AI answer indexing',
      'Sub-second page speeds on Next.js and Cloudflare Edge infrastructure',
    ],
  },
  {
    sector: 'High-Ticket Home Services, Roofing & Storm Repair',
    headline: 'Severe Hail and Freeze-Thaw Emergency Searches',
    description:
      'Severe Rocky Mountain hail storms and drastic Pikes Peak weather shifts create urgent homeowner repair demands across El Paso County. We work on your Google Maps listing with live call recording and neighborhood service pages from Briargate to Falcon.',
    image: '/images/us/services/roofing-seo/roof-detail.webp',
    alt: 'Close-up of a shingle roof ridge with metal flashing',
    points: [
      'Dedicated neighborhood landing pages for Briargate, Northgate, Falcon, and Fountain',
      'Real-time call recording and conversion attribution integrated into Google Analytics 4',
      'Crawl-optimized review velocity systems to outperform multi-truck regional competitors',
    ],
  },
  {
    sector: 'Healthcare, Orthopedics & Sports Medicine',
    headline: 'Winning Patient Trust in America’s Olympic City',
    description:
      'As Olympic City USA, Colorado Springs has an active population demanding top-tier sports medicine, physical therapy, and orthodontic care. We build comprehensive medical schema, doctor profile hubs, and automated patient review systems that support organic search and AI overview visibility.',
    image: '/images/us/colorado-springs/seo/card-ankle-taping-session.webp',
    alt: 'A therapist applying orange kinesiology tape to the ankle of a male runner seated on a treatment table',
    points: [
      'Comprehensive schema for MedicalClinic, Physician, and SportsMedicine',
      'HIPAA-aware mobile conversion forms and instant click-to-call buttons',
      'Post-appointment SMS review request workflows',
    ],
  },
  {
    sector: 'Tourism, Outdoor Recreation & Hospitality',
    headline: 'Converting Millions of Annual Pikes Peak Visitors on Mobile',
    description:
      'From Garden of the Gods to Pikes Peak cog railway tours, millions of tourists visit Colorado Springs each year looking for immediate mobile recommendations. We optimize local entity signals, live event schemas, and mobile page performance to capture tourists searching on their phones.',
    image: '/images/us/colorado-springs/seo/card-lodge-reception-key.webp',
    alt: 'A lodge receptionist handing a brass key across a wooden counter to two guests in hiking clothes, one with an orange backpack',
    points: [
      'Sub-second mobile speed optimization capturing immediate on-the-go visitor searches',
      'Structured TouristAttraction and Event schema for rich Google search snippets',
      'Local citation synchronization across Apple Maps, TripAdvisor, and Google Maps',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Directories hold six of ten spots',
    problem: 'Six of the top 10 organic results for "colorado springs seo company" on 21 Oct 2026 were lists or directories: Yelp, GoodFirms, two Semrush agency directory pages and two software agency roundups. Only four were actual business sites.',
    solution: 'For a client here, we check which directories already rank for their own service search and get the business listed accurately on those pages. A buyer who lands on Yelp or GoodFirms first should still find you there.',
  },
  {
    num: '02',
    title: 'The map pack runs on reviews',
    problem: 'The three businesses in the Google map pack on that search had 83, 50 and 120 reviews, rated 5, 4.9 and 4.8 stars. A profile with a dozen reviews starts far behind that line.',
    solution: 'We count the reviews held by the three map pack businesses for your trade, then set a monthly review target and a simple request routine for your staff. Your Google Business Profile stays in your name.',
  },
  {
    num: '03',
    title: '"Local" wording outsearches "company"',
    problem: 'Google Ads data on 21 Oct 2026 showed about 880 monthly US searches for "colorado springs local seo" against about 720 for "colorado springs seo company" and about 70 for "colorado springs seo services".',
    solution: 'We pull the same volume data for your service before any page is written. Titles and headings use the wording people in Colorado Springs type most, checked against the actual numbers.',
  },
  {
    num: '04',
    title: 'No AI Overview, no question box',
    problem: 'That search showed no AI Overview and no People Also Ask box on 21 Oct 2026. Google gave buyers ten links and a map, so each page has to answer questions itself.',
    solution: 'We write plain question and answer blocks on your service pages, with FAQ schema built from the same text. If Google or ChatGPT starts summarizing this search, your answers are ready to be quoted.',
  },
];

const ROADMAP_STEPS = [
  {
    phase: 'Month 1',
    title: 'Measure your search market',
    desc: 'We pull monthly volumes for your service plus Colorado Springs, check who holds the map pack, and record which directories rank above you.',
    deliverables: ['Search volume sheet for your service', 'Map pack review count comparison', 'Directory listing gap list'],
  },
  {
    phase: 'Month 2',
    title: 'Fix the profile and site',
    desc: 'We correct your Google Business Profile, Bing Places and Apple Business Connect details, then fix the site problems that block calls and form fills.',
    deliverables: ['Profile fixes across three map platforms', 'Conversion audit with ranked fixes', 'Schema matched to visible text'],
  },
  {
    phase: 'Month 3',
    title: 'Write pages for real areas',
    desc: 'We write service pages for the areas you serve, such as Briargate, Falcon, Fountain and Monument, for trades like HVAC, roofing and accounting.',
    deliverables: ['Area pages with real job details', 'FAQ blocks answering buyer questions', 'Copy written at plain reading level'],
  },
  {
    phase: 'Months 4 to 6',
    title: 'Report and adjust monthly',
    desc: 'From month 4 we report calls, form fills and searches you showed for, then quote the next change for your approval.',
    deliverables: ['Monthly calls and leads report', 'Competitor review count check', 'Next change quoted for approval'],
  },
];

const EVALUATION_CRITERIA = [
  {
    label: 'Which directories rank for my search?',
    factoryjet: 'We name them. On 21 Oct 2026, six of the top 10 results for "colorado springs seo company" were lists like Yelp, GoodFirms and Semrush\'s agency directory.',
    traditional: 'A promise to rank your homepage, with no mention of the directory pages already taking most of the clicks.',
  },
  {
    label: 'How many reviews do I need?',
    factoryjet: 'We count the reviews of the three map pack businesses for your trade. For SEO firms here that was 50 to 120 on 21 Oct 2026.',
    traditional: '"More reviews help," with no number, no comparison and no plan for asking customers.',
  },
  {
    label: 'Who owns the work if I leave?',
    factoryjet: 'You do. Your profile, pages, schema and content stay yours, and there is no long-term contract to break.',
    traditional: 'Pages hosted on the agency\'s own platform, or a 12-month agreement with an exit fee.',
  },
  {
    label: 'What will you report each month?',
    factoryjet: 'Calls, form fills and the searches you appeared for, plus the next change and its quoted price for you to approve.',
    traditional: 'A traffic chart and a keyword list, with no link to calls or booked jobs.',
  },
];

const FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Cost' },
  { key: 'local', label: 'Colorado Springs search' },
  { key: 'trades', label: 'HVAC, contractors and firms' },
  { key: 'audits', label: 'Audits and competitors' },
  { key: 'process', label: 'Working with FactoryJet' },
];

const FAQ_ITEMS = [
  {
    category: 'pricing',
    question: 'How much does SEO cost for a small business in Colorado Springs?',
    answer: 'Most small businesses pay $1,500 to $3,500 a month for SEO, according to WebFX SEO pricing updated Sep 2026. Local SEO alone costs less. WebFX lists local retainers at about $500 to $3,000 a month. The right figure depends on how many services and areas you want to show up for. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'pricing',
    question: 'Is it cheaper to run Google Ads than pay for SEO here?',
    answer: 'Not for long. Google Ads suggests about $39.19 a click for "colorado springs seo" (21 Oct 2026). A trade with similar bids pays that every time someone clicks. SEO work costs money up front, but a page that ranks keeps getting visits without a per-click charge. Many businesses run both: ads for fast calls, SEO for steady calls later.',
  },
  {
    category: 'pricing',
    question: 'What does a one-time SEO audit cost?',
    answer: 'Most businesses pay $101 to $750 for a one-time SEO audit, according to WebFX, which found 43% of businesses in that band. An audit is a check of your site and listings that lists what is broken and what to fix first. A one-time local SEO project runs $500 to $5,000 per WebFX. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'pricing',
    question: 'What do other SEO providers charge on average?',
    answer: 'An Ahrefs survey of 439 providers found an average of $2,917 a month for SEO and $1,557 a month for local SEO. Those are national averages, so a Colorado Springs plumber and a Denver law firm both sit inside them. Ask any firm to break its price into hours and tasks. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'local',
    question: 'How many people search for SEO help in Colorado Springs?',
    answer: 'About 2,900 people a month search "colorado springs seo" in the US, per Google Ads data we pulled on 21 Oct 2026. About 880 search "colorado springs local seo" and about 720 search "colorado springs seo company". Google groups close variants, so "seo colorado springs" shows the same 2,900. Those numbers tell you which words to put in your page titles.',
  },
  {
    category: 'local',
    question: 'Why do Yelp and directory lists show up above SEO companies?',
    answer: 'Google trusts large list sites for "best" and "company" searches. On 21 Oct 2026, six of the top 10 results for "colorado springs seo company" were lists: Yelp, GoodFirms, two Semrush agency directory pages and two software agency roundups. The same pattern shows up for many trades. That is why we get clients listed correctly on the directories that rank for their own service.',
  },
  {
    category: 'local',
    question: 'How many Google reviews do I need to show up in the map results?',
    answer: 'Enough to sit near the businesses already there. The map results are the three businesses Google shows beside a map. For "colorado springs seo company" on 21 Oct 2026, those three had 83, 50 and 120 reviews. Your trade will have its own line. We count it for your search, then set a monthly target you can reach with steady asking.',
  },
  {
    category: 'local',
    question: 'What is local SEO and how is it different from regular SEO?',
    answer: 'Local SEO is work that helps you appear when people nearby search for your service. It covers your Google Business Profile, reviews, directory listings and pages for the areas you serve. Regular SEO aims at searches anywhere. In Colorado Springs, "colorado springs local seo" gets about 880 searches a month (21 Oct 2026), so many buyers already think in local terms.',
  },
  {
    category: 'local',
    question: 'Can my business show up in Monument, Falcon and Fountain too?',
    answer: 'Yes, if you serve those towns and say so clearly. Google looks at where you are, the area you list on your profile, and pages that describe work you do in each place. We write one page per area with real details, like the jobs you do there and how you reach customers. Thin copies of the same page with a town name swapped do not help.',
  },
  {
    category: 'local',
    question: 'Did Google show an AI answer for Colorado Springs SEO searches?',
    answer: 'No. On 21 Oct 2026, the search "colorado springs seo company" showed no AI Overview and no People Also Ask box. An AI Overview is the summary Google sometimes writes above the links. We still write pages with short, direct answers and matching FAQ schema, so they are ready to be quoted if Google or ChatGPT starts summarizing these searches.',
  },
  {
    category: 'trades',
    question: 'How does SEO work for an HVAC company in Colorado Springs?',
    answer: 'HVAC SEO starts with the map results, because people with a broken furnace call whoever shows up first. We fix your Google Business Profile, set a review target based on the map leaders for your search, and write pages for each service, like furnace repair or AC installation. Each page names the areas you cover, such as Briargate or Falcon, and has a click-to-call button.',
  },
  {
    category: 'trades',
    question: 'What should a contractor\'s website have to get more calls?',
    answer: 'A phone number at the top of every page, one page per service, and photos of real local jobs. Add short answers to the questions homeowners ask, like cost ranges and how fast you can come out. In Colorado Springs, list the areas you serve by name. We check each of these during an audit and fix the ones that are missing.',
  },
  {
    category: 'trades',
    question: 'Do roofers need different SEO after a hail storm?',
    answer: 'Yes. Storm searches can jump fast and fade within weeks. A roofer needs a storm repair page live before the season, with insurance claim steps, the areas you cover, and a call button. We also post updates to your Google Business Profile during busy weeks. Review requests matter most right after jobs, when customers are happy and remember you.',
  },
  {
    category: 'trades',
    question: 'Can you do SEO for a CPA or accounting firm in Colorado Springs?',
    answer: 'Yes. Accounting firms win on trust, so we start with a complete Google Business Profile, reviews and clear service pages for tax prep, bookkeeping and small business accounting. We add plain answers to the questions clients ask before tax season. We also make sure each partner\'s credentials appear as visible text on the page, since Google reads that.',
  },
  {
    category: 'trades',
    question: 'Is there SEO software that can do this for a small business?',
    answer: 'Software helps you track rankings and find site errors, but it does not write your pages, ask customers for reviews or fix your profile. Tools like Semrush and Ahrefs show data. Someone still has to act on it. Many small businesses use a tool for tracking and pay for the writing and fixes. We report from the same kind of data each month.',
  },
  {
    category: 'audits',
    question: 'What is a website conversion audit?',
    answer: 'A conversion audit checks why visitors leave without calling or filling in a form. We look at load speed on phones, where the phone number sits, how long the form is, and whether each page says clearly what you do and where. You get a ranked list of fixes. Most cost little and can go live within days.',
  },
  {
    category: 'audits',
    question: 'How do you study my competitors in Colorado Springs?',
    answer: 'We search your main service plus "Colorado Springs" from a Colorado Springs location, then record who holds the map results, their review counts, and which directories rank. For SEO firms on 21 Oct 2026, that showed 6 directories in the top 10 and map leaders with 50 to 120 reviews. You get the same table for your own trade.',
  },
  {
    category: 'audits',
    question: 'What does a Colorado Springs SEO audit include?',
    answer: 'An SEO audit checks your site, your Google Business Profile and your listings for problems that keep you out of search. We look at page titles, broken links, speed, schema and duplicate pages. We also compare your reviews to the map leaders for your service. The result is a short list of fixes in order, with the reason for each.',
  },
  {
    category: 'audits',
    question: 'Do you offer SEO copywriting?',
    answer: 'Yes. We write service pages, area pages and FAQ answers in short sentences that customers understand on a phone screen. Each page uses the words people in Colorado Springs type, such as "colorado springs local seo" at about 880 searches a month (21 Oct 2026), without stuffing them in. Jargon gets explained the first time it appears. You approve every page before it goes live.',
  },
  {
    category: 'process',
    question: 'How long does it take to see results from local SEO?',
    answer: 'Profile fixes and new reviews tend to move first, because the map results react to your Google Business Profile. New pages take longer to settle in Google results, and searches with more competition take longest. That is why our roadmap runs six months. We report calls and form fills each month so you can see what is moving. No honest firm can promise a ranking date.',
  },
  {
    category: 'process',
    question: 'Do I have to sign a long-term SEO contract?',
    answer: 'No. FactoryJet has no long-term contract. Each change is quoted and approved before we start. Your Google Business Profile, pages, schema and content stay yours if you stop working with us. Founder Bhavesh Barot replies to new inquiries within 24 hours. FactoryJet was founded in 2014 and has worked with 500+ businesses, with 97% on-time delivery.',
  },
  {
    category: 'process',
    question: 'Can local SEO work be done without meeting in person?',
    answer: 'Yes. We work remotely with US clients and schedule calls in US business hours. You get video calls, shared documents and a written monthly report. Founder Bhavesh Barot replies within 24 hours. Local search work runs through your Google Business Profile, your site and online directories, so none of it needs a visit to your office.',
  },
  {
    category: 'process',
    question: 'What do I need to give you to get started?',
    answer: 'Manager access to your Google Business Profile, access to your website, and a list of the services and areas you want to show up for. A short scoping call covers your goals and your busiest season. FactoryJet then quotes a fixed price in writing. We also do white-label work for agencies. Work starts once you approve the quote.',
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
  name: 'Colorado Springs SEO Services & Local Search Optimization',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  serviceType: 'Local SEO, Technical SEO & Generative Engine Optimization',
  description:
    'SEO for Colorado Springs, CO defense firms, contractors, clinics and tourism businesses. Local search and technical SEO. Month-to-month terms.',
  areaServed: [
    { '@type': 'City', name: 'Colorado Springs' },
    { '@type': 'City', name: 'Briargate' },
    { '@type': 'City', name: 'Monument' },
    { '@type': 'City', name: 'Falcon' },
    { '@type': 'City', name: 'Fountain' },
    { '@type': 'State', name: 'Colorado' },
  ],
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'SEO Agency for Colorado Springs, CO Businesses | FactoryJet',
  description: 'SEO for Colorado Springs, CO defense firms, contractors, clinics and tourism businesses. Local search and technical SEO. Month-to-month terms.',
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
    { '@type': 'ListItem', position: 2, name: 'Colorado Springs', item: CANONICAL },
    { '@type': 'ListItem', position: 3, name: 'SEO', item: CANONICAL },
  ],
};

export default function ColoradoSpringsSeoPage() {
  return (
    <>
      <script id="cos-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="cos-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="cos-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="cos-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>Colorado Springs Local &amp; Technical SEO</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  SEO for Colorado Springs and Pikes Peak Region Businesses
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  We work on your Google Business Profile, your service pages and your listings so customers searching in Colorado Springs and the Pikes Peak region can find you. No long-term contracts. Talk directly with senior technical engineers.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Claim Free Colorado Springs SEO Audit" region="us" btnVariant="primary-dark" />
                  <a href="#cos-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Pikes Peak Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame (Edge-to-Edge) */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/colorado-springs/hero-colorado-springs.webp"
                  alt="A city at the foot of a snow-capped mountain under a sunset sky"
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
                  src="/images/us/colorado-springs/seo/team.webp"
                  alt="Four people in a bright office, three working on laptops at a wooden table and one writing on a whiteboard covered with diagrams and sticky notes"
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
                  <span>Pikes Peak Market Reality</span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
                  Engineered for Results in Colorado Springs
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  With defense expansion, booming residential corridors in Briargate, and rapid commercial growth in El Paso County, standard generic agency tactics fail. We combine sub-second Core Web Vitals speed optimization, Google Business Profile work, and localized corridor authority.
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
                  <ModalCTAButton label="Schedule Colorado Springs Strategy Call" region="us" btnVariant="primary-dark" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 04. COLORADO SPRINGS BUSINESS CORRIDORS DIRECTORY ── */}
        <section id="cos-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Geographic Precision</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored SEO for Colorado Springs Core Corridors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From Downtown legal practices to Interquest defense tech and Briargate dental clinics:
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
                Specialized Search Strategies for Colorado Springs Leading Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every vertical in Colorado Springs demands distinct schema models, citation targets, and conversion architectures:
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
                What FactoryJet Does Differently for Colorado Springs Businesses
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                On 21 Oct 2026 we pulled the Google results for "colorado springs seo company" from inside Colorado Springs, and four findings shape how we work here.
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
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.08em' }}>What we saw in Colorado Springs search, 21 Oct 2026:</span>
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
            badge="// COLORADO SPRINGS LOCAL SEO & AI CITATION BLUEPRINT"
            title="Local SEO Architecture: From Map Pack to AI Citations"
            subtitle="Explore how your Google Business Profile, local review velocity, JSON-LD schema, and high-performance frontend synchronize to capture inbound leads."
            city="Colorado Springs"
            ctaLabel="Claim Free Colorado Springs SEO Audit"
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
                Our 6-Month Colorado Springs SEO Roadmap
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                A six-month roadmap built around what Colorado Springs buyers search and the trades that search hardest here.
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
                Evaluating Colorado Springs SEO Companies: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Ask any Colorado Springs SEO firm these four questions before you sign, and compare the answers to what the local results show.
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
        <LocalSeoOpportunityEstimator city="Colorado Springs" region="us" />

        <FAQ
          eyebrow="COLORADO SPRINGS SEO INTELLIGENCE"
          headline="Frequently Asked Questions About SEO in Colorado Springs CO"
          lead="Direct, plain English answers to what Colorado Springs business owners and marketing leaders ask about local search rankings and lead generation:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 11. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <SeoCityLinksUS currentCity="colorado-springs" />
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
              <span>No-Contract Colorado Springs SEO</span>
            </div>
            
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Start With a Free Colorado Springs SEO Audit
            </h2>
            
            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Send us your website URL. We will perform a complete local search and technical audit of your site and top Colorado Springs competitors, completely free.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Claim Your Free Colorado Springs SEO Audit" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
