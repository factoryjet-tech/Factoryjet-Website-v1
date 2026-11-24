import type { Metadata } from 'next';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import FinalCTA from '@/components/v2/FinalCTA';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import HeroInlineForm from '@/components/HeroInlineForm';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/home-services-seo: US hub for trade SEO (built 24 Nov 2026).

   Intent owned by THIS page (DataForSEO US, 24 Nov 2026):
     home services seo (880/mo, KD 0) · home service seo (880/mo, KD 0) ·
     home services marketing (720/mo, KD 0) · contractor seo (590/mo, KD 0) ·
     seo for contractors (390/mo, KD 0) · seo for home services (170/mo, KD 13) ·
     local seo for home services (140/mo, KD 13) · home services seo agency.
   GSC shows 112 trade queries (2,680 impressions, avg position 19.1) landing on
   city /seo pages with no trade page behind them. This hub catches the generic
   intent and routes each trade to its own page.

   Does NOT own: one trade's terms. Roofing (/services/roofing-seo), HVAC
   (/services/hvac-seo), plumbing (/services/plumber-seo), electrical
   (/services/electrician-seo) and cleaning (/services/cleaning-company-seo)
   each have a page. Generic local SEO stays on /services/local-seo.

   Build rules honoured: no em dashes, no FactoryJet prices (one sourced market
   range, labelled), plain <img>, FinalCTA (never GetFreeQuoteCTA), one dark
   section (FinalCTA), no phone number, no team location, plain headlines.

   Schema: WebPage + speakable, Service, ItemList (programme), ItemList (trade
   pages), ItemList (competitor set), FAQPage derived from FAQ_ITEMS,
   BreadcrumbList.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const PAGE_URL = 'https://factoryjet.com/services/home-services-seo';
const REVIEWED_DATE = 'November 24, 2026';
const HERO_IMG = '/images/us/services/local-seo/section-plumber-door-phone-map.webp';

const ORANGE = '#F05A28';
const ORANGE_DARK = '#B23E13';
const CREAM = '#FAFAF7';
const PEACH = '#FAEDE5';
const GREEN = '#0E5C46';
const GREEN_BRIGHT = '#0C7150';
const GREEN_SOFT = '#DCEFE6';
const LAV = '#5046C8';
const LAV_SOFT = '#ECEAFB';

/* ─────────────────────────────────────────────────────────────────────────────
   Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Home Services SEO for HVAC, Plumbing & Trades | FactoryJet',
  description:
    'Home services SEO for US trades: Business Profile, map pack, service-area pages, reviews and AI search, with pages for HVAC, plumbing, electrical and roofing.',
  keywords: [
    'home services seo',
    'home service seo',
    'seo for home services',
    'seo for home service businesses',
    'local seo for home services',
    'home services seo agency',
    'home service seo company',
    'home services marketing',
    'contractor seo',
    'seo for contractors',
    'trades seo',
    'hvac seo',
    'plumber seo',
    'electrician seo',
    'roofing seo',
    'cleaning company seo',
    'google business profile for contractors',
    'local services ads vs seo',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Home Services SEO for HVAC, Plumbing, Electrical & Roofing | FactoryJet',
    description:
      'How home services SEO works for US trades: Business Profile, map pack, service-area pages, reviews, Local Services Ads and AI search. One page per trade.',
    url: PAGE_URL,
    images: [
      {
        url: `https://factoryjet.com${HERO_IMG}`,
        width: 1376,
        height: 768,
        alt: 'A homeowner at her front door shows a plumber a map pin on her phone',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Services SEO for HVAC, Plumbing, Electrical & Roofing | FactoryJet',
    description:
      'Home services SEO for US trades, built around the map pack, service areas, reviews and AI answers. Founder-led, no guaranteed rankings.',
    images: [`https://factoryjet.com${HERO_IMG}`],
  },
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'en-US': PAGE_URL,
      'x-default': PAGE_URL,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   What home-services SEO covers (six pillars)
───────────────────────────────────────────────────────────────────────────── */

type Pillar = { tag: string; title: string; body: string; tint: string; accent: string };

const PILLARS: ReadonlyArray<Pillar> = [
  {
    tag: '01',
    title: 'Google Business Profile',
    body:
      'For a trade business the Business Profile is the storefront most customers see first. The primary category, the services list, the service area, photos from real jobs and the hours all feed the map pack. A plumber listed under a vague category like "contractor" loses searches it should win.',
    tint: PEACH,
    accent: ORANGE_DARK,
  },
  {
    tag: '02',
    title: 'The local pack',
    body:
      'The three map results above the blue links take most of the calls on a "near me" search. Google says local ranking comes down to relevance, distance and prominence. You can work on relevance and prominence. Distance is measured from the person searching, so it decides which towns you can realistically win.',
    tint: LAV_SOFT,
    accent: LAV,
  },
  {
    tag: '03',
    title: 'Service-area pages',
    body:
      'One page per service (water heater repair, panel upgrade, furnace replacement) and one page per town you really work in. Each town page needs something only that town has: jobs you did there, the housing stock, local permit rules. Twenty copies of the same page with the city name swapped is how trade sites get filtered out.',
    tint: GREEN_SOFT,
    accent: GREEN,
  },
  {
    tag: '04',
    title: 'Reviews',
    body:
      'Google states that review count and rating feed prominence, and that replying to reviews helps. The practical fix is a request sent automatically when a job closes in your field software, so asking stops depending on whether the tech remembered. No incentives, no gating: Google’s policy bans both.',
    tint: PEACH,
    accent: ORANGE_DARK,
  },
  {
    tag: '05',
    title: 'AI search',
    body:
      'Homeowners now ask ChatGPT, Perplexity and Google’s AI Overviews which company to call. Those answers lean on pages that state plain facts: what you fix, where, how fast you respond, what is included. Clear service pages, FAQ answers and structured data make you quotable. A brochure site with no facts gives the AI nothing to cite.',
    tint: LAV_SOFT,
    accent: LAV,
  },
  {
    tag: '06',
    title: 'Local Services Ads next to organic',
    body:
      'Most trade searches show Local Services Ads at the very top, where you pay per lead and carry a "Google Verified" badge after screening. They sit above the map pack, not instead of it. A sound plan decides which jobs you buy through ads and which you earn through search, instead of paying twice for the same customer.',
    tint: GREEN_SOFT,
    accent: GREEN,
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Trade pages (also powers an ItemList)
───────────────────────────────────────────────────────────────────────────── */

type Trade = { name: string; href: string; angle: string; terms: string };

const TRADES: ReadonlyArray<Trade> = [
  {
    name: 'HVAC SEO',
    href: '/services/hvac-seo',
    angle:
      'Two peaks a year, "no heat" searches at 11pm, repair versus replace buyers, and Local Services Ads crowding the top of every result.',
    terms: 'hvac seo · seo for hvac companies · hvac seo services',
  },
  {
    name: 'Plumber SEO',
    href: '/services/plumber-seo',
    angle:
      'Emergency calls that decide in minutes, burst pipes and water heaters, and a service area drawn around how far a van can get in an hour.',
    terms: 'plumber seo · seo for plumbers · plumbing seo',
  },
  {
    name: 'Electrician SEO',
    href: '/services/electrician-seo',
    angle:
      'Licensed work, panel upgrades, EV chargers and generators, plus the split between residential callouts and commercial contracts.',
    terms: 'electrician seo · seo for electricians · electrical contractor seo',
  },
  {
    name: 'Roofing SEO',
    href: '/services/roofing-seo',
    angle:
      'Storm spikes, insurance claims, financing questions and pre-season pages that have to be ranked before the hail arrives.',
    terms: 'roofing seo · seo for roofers · roofing company seo',
  },
  {
    name: 'Cleaning company SEO',
    href: '/services/cleaning-company-seo',
    angle:
      'Recurring customers, move-out and deep cleans, commercial janitorial contracts, and trust signals for a stranger entering the home.',
    terms: 'cleaning company seo · seo for cleaning business · house cleaning seo',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Programme listicle (also powers the ItemList schema)
───────────────────────────────────────────────────────────────────────────── */

type Deliverable = { n: string; title: string; body: string };

const DELIVERABLES: ReadonlyArray<Deliverable> = [
  {
    n: '01',
    title: 'Audit the Business Profile before anything else',
    body:
      'Primary and secondary categories, the services list, service area, hours, photos, and whether the address is hidden the way Google asks of a service-area business. This is usually the fastest win on the whole list, and it costs nothing but attention.',
  },
  {
    n: '02',
    title: 'Clean up name, address and phone listings',
    body:
      'Your business name and details should match across Google, Apple Maps, Bing, Yelp, the BBB, Angi and your state licence record. Mismatched or duplicate listings confuse both Google and customers. We find them and fix them.',
  },
  {
    n: '03',
    title: 'Build one page per service you want calls for',
    body:
      'A single "Services" page cannot rank for drain cleaning, sewer line replacement and water heater install at once. Each money service gets its own page with what is included, typical signs of the problem, and how to book.',
  },
  {
    n: '04',
    title: 'Build town pages only where you really work',
    body:
      'Town pages are drawn from your job history, not a list of every place within fifty miles. Each one carries local proof: recent jobs, neighbourhoods, housing age, permit notes. Fewer, better pages beat a doorway farm.',
  },
  {
    n: '05',
    title: 'Wire review requests into job closeout',
    body:
      'When a job is marked complete in ServiceTitan, Housecall Pro or Jobber, the customer gets a short request with a direct link to your Google review form. Then someone replies to every review, good and bad.',
  },
  {
    n: '06',
    title: 'Make the site fast and tappable on a phone',
    body:
      'Most trade searches happen on a phone, often in a hurry. Call buttons that work, forms with four fields, pages that load before the customer gives up. We build websites too, so this ships instead of becoming a ticket for someone else.',
  },
  {
    n: '07',
    title: 'Write the answers homeowners ask before they call',
    body:
      'Repair or replace, what a fair diagnostic involves, how long a job takes, what to do while waiting. Plain answers on your site win long-tail searches and are what AI assistants quote when someone asks which company to use.',
  },
  {
    n: '08',
    title: 'Add structured data and track calls by source',
    body:
      'LocalBusiness, Service and FAQ schema so search engines read the page correctly, plus call and form tracking so you can see which pages and which towns produce booked jobs, not just traffic.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Comparison: four ways trades buy or earn calls
───────────────────────────────────────────────────────────────────────────── */

type CompRow = { label: string; seo: string; lsa: string; ppc: string; market: string };

const COMPARISON_ROWS: ReadonlyArray<CompRow> = [
  {
    label: 'How you pay',
    seo: 'Time and work up front, no per-call fee',
    lsa: 'Per lead, set by Google’s auction',
    ppc: 'Per click, whether or not they call',
    market: 'Per lead or subscription, set by the marketplace',
  },
  {
    label: 'Where it shows',
    seo: 'Map pack and organic results, plus AI answers',
    lsa: 'Very top of the results, above the map',
    ppc: 'Top and bottom of the results',
    market: 'On the marketplace’s own site and app',
  },
  {
    label: 'Who owns the customer',
    seo: 'You. They found your site or profile',
    lsa: 'You, once the lead arrives',
    ppc: 'You, once they land on your site',
    market: 'Often shared with other pros',
  },
  {
    label: 'Speed to first call',
    seo: 'Slow. Weeks for profile fixes, months for pages',
    lsa: 'Fast, once screening is passed',
    ppc: 'Fast. Days',
    market: 'Immediate',
  },
  {
    label: 'What happens when you stop',
    seo: 'Rankings usually hold for a while',
    lsa: 'Leads stop the same day',
    ppc: 'Clicks stop the same day',
    market: 'Leads stop the same day',
  },
  {
    label: 'Main risk',
    seo: 'Impatience and copy-paste city pages',
    lsa: 'Disputing poor leads, rising cost per lead',
    ppc: 'Paying for clicks that never call',
    market: 'Racing other pros to call first',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Who ranks for "home services seo" today (also powers an ItemList)
───────────────────────────────────────────────────────────────────────────── */

type Rival = { domain: string; note: string; detail: string };

const RIVALS: ReadonlyArray<Rival> = [
  {
    domain: 'masterful-marketing.com',
    note: 'Position 3: a technical guide',
    detail:
      'Ranks with a roughly 1,300-word article on technical SEO for home service websites: site structure, mobile, HTTPS, speed and duplicate city pages. Solid on the plumbing of a site. It does not cover the Business Profile, reviews or paid ads.',
  },
  {
    domain: 'znwebpro.com',
    note: 'Position 4: an agency list',
    detail:
      'A "Top 20 home service SEO agencies" list of about 2,000 words, with the author’s own firm ranked first. Useful as a directory of names. It explains little about how the work is done or how the ranking was decided.',
  },
  {
    domain: 'hookagency.com',
    note: 'Position 6: a tips checklist',
    detail:
      'A long, recently updated checklist of home services SEO tips with a monthly scorecard. A trades-focused agency with real depth on the topic. Schema, speed and paid ads get lighter treatment.',
  },
  {
    domain: 'designrush.com and seo.com',
    note: 'Positions 5 and 7: directories',
    detail:
      'Agency directories rank on this query on domain strength. They help you build a shortlist. They do not tell you what a home services SEO programme should contain.',
  },
  {
    domain: 'housecallpro.com',
    note: 'Position 12: field software',
    detail:
      'A field-service software company ranking with marketing resources. A reminder that on trade queries you often compete with software brands contractors already trust, not only with agencies.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   City pages where home-services queries already land (GSC, Aug to Nov 2026)
───────────────────────────────────────────────────────────────────────────── */

const CITY_LINKS: ReadonlyArray<{ city: string; href: string }> = [
  { city: 'Tampa', href: '/tampa/seo' },
  { city: 'Colorado Springs', href: '/colorado-springs/seo' },
  { city: 'Cleveland', href: '/cleveland/seo' },
  { city: 'Arlington, TX', href: '/arlington/seo' },
  { city: 'Charlotte', href: '/charlotte/seo' },
  { city: 'Denver', href: '/denver/seo' },
  { city: 'Nashville', href: '/nashville/seo' },
  { city: 'Boise', href: '/boise/seo' },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ: 24 items, grounded in live US People Also Ask (24 Nov 2026)
───────────────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'Home services SEO basics' },
  { key: 'local', label: 'Map pack, profile & reviews' },
  { key: 'paid', label: 'Ads, leads & SEO together' },
  { key: 'cost', label: 'Cost, timing & results' },
  { key: 'ai', label: 'AI search' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'basics',
    question: 'What is home services SEO?',
    answer:
      'Home services SEO is the work of getting a trade business, such as an HVAC company, plumber, electrician, roofer or cleaner, found when people nearby search for that service. It covers the Google Business Profile and map pack, service and town pages on the website, reviews, and being named in AI answers.',
  },
  {
    category: 'basics',
    question: 'How is home services SEO different from normal SEO?',
    answer:
      'Normal SEO often chases national rankings for articles. Home services SEO is about a radius you can drive to. The map pack, the Business Profile, reviews and town pages matter far more, and most searches happen on a phone with someone ready to call.',
  },
  {
    category: 'basics',
    question: 'What is local SEO called?',
    answer:
      'It goes by local SEO, local search optimisation, map pack SEO or Google Maps SEO. For trades you will also hear contractor SEO or home services SEO. They describe the same core job: showing up for searches in the area you serve.',
  },
  {
    category: 'basics',
    question: 'Which trades does FactoryJet build SEO programmes for?',
    answer:
      'We have dedicated pages and programmes for HVAC, plumbing, electrical, roofing and cleaning companies. The groundwork is shared, and each trade gets its own service pages, seasonal plan and content because buyers search differently for a broken furnace than for a deep clean.',
  },
  {
    category: 'basics',
    question: 'Can I do SEO for my home services business myself?',
    answer:
      'Yes, some of it. Claiming and completing your Business Profile, asking every customer for a review and replying to reviews are things an owner can do in an afternoon a month. Site speed, page structure, schema and town page strategy are where most owners get stuck and where outside help pays off.',
  },
  {
    category: 'basics',
    question: 'Does SEO still work for contractors in 2026?',
    answer:
      'Yes. People still search "plumber near me" and "AC repair" every day, and the map pack still takes most of those calls. What changed is that AI Overviews and assistants now answer some questions before the click, which rewards sites that state clear facts about services, areas and response times.',
  },
  {
    category: 'local',
    question: 'Should a service-area business show its address on Google?',
    answer:
      'Google says a business that serves customers at their location should hide its address, and uses a tradesperson working from home as the example. You set a service area instead. Google also says the area should generally not extend beyond about two hours of driving from your base.',
  },
  {
    category: 'local',
    question: 'How do I get into the Google map pack for my trade?',
    answer:
      'Pick the most accurate primary category, list every service, set a realistic service area, add real job photos, keep hours accurate, and build a steady flow of reviews. Then make sure your website backs it up with matching service and town pages. Distance from the searcher still decides a lot, so focus on towns close to your base first.',
  },
  {
    category: 'local',
    question: 'How many reviews does a home services business need?',
    answer:
      'There is no fixed number. Google says more reviews and positive ratings can help local ranking. What matters in practice is having more recent reviews than the competitors near you, and a steady trickle rather than a burst. Look at the top three map results in your town to see the bar.',
  },
  {
    category: 'local',
    question: 'Can I offer a discount for Google reviews?',
    answer:
      'No. Google’s policy does not allow incentives for reviews, and it does not allow asking only happy customers. Ask every customer the same way, ideally automatically when the job closes, and reply to every review.',
  },
  {
    category: 'local',
    question: 'Do I need a separate page for every city I serve?',
    answer:
      'Only for towns where you really work and can say something specific. A page with real jobs, local housing details and permit notes helps. A page that swaps the city name into the same text can hurt. Start with your closest and most valuable towns.',
  },
  {
    category: 'paid',
    question: 'What is the difference between Local Services Ads and SEO?',
    answer:
      'Local Services Ads sit at the very top of many trade searches. You pay per lead, and Google shows a "Google Verified" badge once your business passes its screening. SEO earns placement in the map pack and organic results without a per-lead fee, but takes longer. Many trades run both.',
  },
  {
    category: 'paid',
    question: 'Should I run Google Ads or invest in SEO?',
    answer:
      'If you need calls this month, ads are faster. If you plan to be in the same area for years, SEO keeps working after you stop paying. Most healthy trade businesses use ads to fill gaps and SEO to lower their dependence on paid leads over time.',
  },
  {
    category: 'paid',
    question: 'Are lead marketplaces like Angi or Thumbtack worth it alongside SEO?',
    answer:
      'They can fill a schedule quickly, but the lead is often shared with other pros and stops the moment you stop paying. SEO builds calls that come to you directly. Plenty of businesses use marketplaces while their own search presence grows, then cut back.',
  },
  {
    category: 'cost',
    question: 'How much does local SEO cost for a home services company?',
    answer:
      'As a market range, not our price: WebFX reports US local SEO retainers of about $500 to $3,000 a month, with one-time projects from $500 to $5,000. FactoryJet quotes a fixed scope in writing after a short call, based on how many services and towns you need.',
  },
  {
    category: 'cost',
    question: 'How long does home services SEO take to work?',
    answer:
      'Business Profile fixes can change map visibility within weeks. New service and town pages usually take a few months to settle in rankings. Competitive metros take longer than small towns. Anyone promising page one in thirty days is guessing.',
  },
  {
    category: 'cost',
    question: 'Is it worth paying someone for SEO?',
    answer:
      'It is worth it when you plan to stay in your area, have capacity for more jobs, and can answer the phone quickly. It is not worth it if you need calls next week or cannot handle more work. Start with an audit if you are unsure.',
  },
  {
    category: 'cost',
    question: 'Can an SEO company guarantee my business will rank first?',
    answer:
      'No. Google’s own guidance says no one can guarantee a number one ranking. Be careful with any agency that promises a position or a timeline. What can be committed to is the scope of work and how results will be measured.',
  },
  {
    category: 'cost',
    question: 'How do I measure if home services SEO is working?',
    answer:
      'Track calls and form fills by source, then booked jobs from those calls. Map pack position for your main services in your closest towns, Business Profile calls and direction requests, and organic visits to service pages are the supporting numbers. Traffic alone is not the goal.',
  },
  {
    category: 'cost',
    question: 'What is the 80/20 rule in SEO for trades?',
    answer:
      'For most trades, a small set of work drives most of the results: the Business Profile, reviews, one page per money service, and a fast mobile site. Do those well before spending on blog content or links.',
  },
  {
    category: 'ai',
    question: 'Can ChatGPT do SEO for my home services business?',
    answer:
      'It can draft text and ideas. It cannot verify your Business Profile, fix your site speed, collect reviews or know which towns you actually serve. AI-written town pages that all say the same thing are a common reason trade sites get filtered out.',
  },
  {
    category: 'ai',
    question: 'Is SEO being replaced by AI search?',
    answer:
      'Not for local trades. AI assistants still pull from websites, Business Profiles and reviews to decide which company to name. Good local SEO is what feeds those answers, so the work overlaps far more than it competes.',
  },
  {
    category: 'ai',
    question: 'How do I get my HVAC or plumbing company mentioned by ChatGPT?',
    answer:
      'Publish clear facts on your site: services, towns, response times, licences, what is included. Keep your Business Profile and directory listings consistent. Earn reviews and mentions on local sites. AI assistants cite sources they can read and trust, so vague brochure copy gets skipped.',
  },
  {
    category: 'ai',
    question: 'Does FactoryJet work on AI search for trades?',
    answer:
      'Yes. Every trade programme treats Google AI Overviews, ChatGPT and Perplexity as targets alongside the map pack. Our AI SEO practice handles the citation side, and you can check where you stand today with our free AI visibility checker.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Schema (server-rendered JSON-LD)
───────────────────────────────────────────────────────────────────────────── */

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'Home Services SEO for HVAC, Plumbing, Electrical, Roofing and Cleaning Companies',
  description:
    'What home services SEO covers for US trade businesses: Google Business Profile, the map pack, service-area pages, reviews, Local Services Ads and AI search, with a page for each trade.',
  inLanguage: 'en-US',
  dateModified: '2026-11-24',
  lastReviewed: '2026-11-24',
  isPartOf: { '@type': 'WebSite', name: 'FactoryJet', url: 'https://factoryjet.com' },
  about: { '@type': 'Thing', name: 'Home services SEO' },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: `https://factoryjet.com${HERO_IMG}`,
    width: 1376,
    height: 768,
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#answer-first', '#what-is-home-services-seo'],
  },
  reviewedBy: { '@type': 'Person', name: 'Bhavesh Barot', jobTitle: 'Founder' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Home Services SEO',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType: 'Home Services SEO / Contractor SEO / Local SEO for Home Service Businesses',
  audience: {
    '@type': 'BusinessAudience',
    name: 'US HVAC, plumbing, electrical, roofing and cleaning companies',
  },
  description:
    'Search programme for US home service businesses covering Google Business Profile, map pack visibility, service and town pages, review generation, site speed, structured data and citation in AI answer engines.',
  url: PAGE_URL,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Home services SEO programme',
    itemListElement: DELIVERABLES.map((d) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: d.title, description: d.body },
    })),
  },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Eight steps in a home services SEO programme',
  numberOfItems: DELIVERABLES.length,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: DELIVERABLES.map((d, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: d.title,
    description: d.body,
  })),
};

const tradeListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'SEO programmes by home services trade',
  numberOfItems: TRADES.length,
  itemListElement: TRADES.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: t.name,
    url: `https://factoryjet.com${t.href}`,
  })),
};

const rivalListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Sites ranking for "home services seo" in the United States, 24 November 2026',
  numberOfItems: RIVALS.length,
  itemListElement: RIVALS.map((r, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: r.domain,
    description: r.detail,
  })),
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Home Services SEO', url: PAGE_URL },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: BREADCRUMB_ITEMS.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
};

const SCHEMAS = [
  { id: 'hs-webpage-schema', data: webPageSchema },
  { id: 'hs-service-schema', data: serviceSchema },
  { id: 'hs-itemlist-schema', data: itemListSchema },
  { id: 'hs-trades-schema', data: tradeListSchema },
  { id: 'hs-rivals-schema', data: rivalListSchema },
  { id: 'hs-faq-schema', data: faqSchema },
  { id: 'hs-breadcrumb-schema', data: breadcrumbSchema },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Shared bits
───────────────────────────────────────────────────────────────────────────── */

const H2_STYLE = { fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' };
const LEAD_STYLE = { fontSize: '1.0625rem', lineHeight: 1.6 };
const EYEBROW = 'font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]';

function CheckCircle({ fill = GREEN_BRIGHT, size = 20 }: { fill?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 flex-shrink-0">
      <circle cx="10" cy="10" r="9" fill={fill} />
      <path d="M6 10.5l2.5 2.5L14 7" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function CrossCircle({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 flex-shrink-0">
      <circle cx="10" cy="10" r="9" fill="#D5453F" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function HomeServicesSeoPage() {
  return (
    <>
      {SCHEMAS.map((s) => (
        <script
          key={s.id}
          id={s.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s.data) }}
        />
      ))}

      <SiteHeader />

      <main style={{ backgroundColor: CREAM }}>
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* ─── 1. HERO ─────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 py-16 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
            <div>
              <p className="fj-eyebrow">Home services SEO &middot; United States</p>
              <h1
                className="fj-display mt-5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(2.3rem, 5vw, 3.7rem)', lineHeight: 1.06, letterSpacing: '-0.03em' }}
              >
                Home services SEO for trades that want the call, not the click
              </h1>
              <p
                className="mt-6 max-w-[545px] font-fj-body font-medium text-fj-neutral-600"
                style={{ fontSize: '1.125rem', lineHeight: 1.6 }}
              >
                When a furnace quits or a pipe bursts, the homeowner picks from three map results and maybe one
                AI answer. We build the Business Profile, service pages, town pages and review flow that put an
                HVAC, plumbing, electrical, roofing or cleaning company in that short list, in the towns its vans
                actually reach.{' '}
                <b className="font-bold text-fj-ink">Calls you own, not leads you rent.</b>
              </p>
              <HeroInlineForm
                region="us"
                source="services_home_services_seo_hero"
                submitLabel="Get a home services SEO review"
              />
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Link
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-fj-body text-base font-semibold text-fj-ink transition-all hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ outlineColor: ORANGE }}
                >
                  Talk to the founder
                  <span aria-hidden="true">&rarr;</span>
                </Link>
                <a
                  href="#trades"
                  className="font-fj-body text-[0.9375rem] font-semibold underline underline-offset-4"
                  style={{ color: ORANGE_DARK }}
                >
                  Jump to your trade
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px]">
              <div
                className="overflow-hidden rounded-3xl border"
                style={{ borderColor: 'rgba(15,15,18,0.10)', boxShadow: '0 24px 60px rgba(20,18,12,0.12)' }}
              >
                <img
                  src={HERO_IMG}
                  alt="A homeowner at her front door shows a plumber a map pin on her phone"
                  width={1376}
                  height={768}
                  fetchPriority="high"
                  decoding="async"
                  className="block h-auto w-full object-cover"
                />
              </div>

              <div
                className="relative z-10 mx-4 -mt-10 rounded-2xl border bg-white p-5 sm:mx-6 sm:p-6"
                style={{ borderColor: 'rgba(15,15,18,0.10)', boxShadow: '0 18px 44px rgba(20,18,12,0.10)' }}
              >
                <span className="font-fj-mono text-[10px] uppercase tracking-[0.12em] text-fj-neutral-500">
                  Live US search demand
                </span>
                <ul className="mt-3 space-y-2.5">
                  {[
                    { k: 'home services seo.', v: '880 a month.', d: 'difficulty 0.' },
                    { k: 'contractor seo.', v: '590 a month.', d: 'difficulty 0.' },
                    { k: 'hvac seo.', v: '480 a month.', d: 'difficulty 9.' },
                    { k: 'plumber seo.', v: '480 a month.', d: 'difficulty 11.' },
                  ].map((row) => (
                    <li
                      key={row.k}
                      className="flex items-baseline justify-between gap-3 border-t pt-2.5 first:border-t-0 first:pt-0"
                      style={{ borderColor: 'rgba(15,15,18,0.08)' }}
                    >
                      <span className="font-fj-body text-[0.875rem] font-bold text-fj-ink">{row.k}</span>
                      <span className="text-right font-fj-mono text-[0.6875rem] text-fj-neutral-600">
                        {row.v}
                        <small className="ml-2" style={{ color: ORANGE_DARK }}>
                          {row.d}
                        </small>
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-fj-body text-[0.75rem] text-fj-neutral-600">
                  US monthly searches and keyword difficulty (0 to 100) from DataForSEO, pulled 24 November 2026.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. ANSWER-FIRST ─────────────────────────────────────────── */}
        <section id="answer-first" className="pb-14 md:pb-16">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <div
              className="rounded-2xl bg-white p-7 md:p-9"
              style={{ borderLeft: `5px solid ${ORANGE}`, boxShadow: '0 12px 34px rgba(20,18,12,0.06)' }}
            >
              <p className="font-fj-mono text-[11px] uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
                Short answer
              </p>
              <h2
                id="what-is-home-services-seo"
                className="fj-display mt-3 text-[1.35rem] font-bold text-fj-ink"
                style={{ letterSpacing: '-0.02em' }}
              >
                What is home services SEO?
              </h2>
              <p className="mt-3 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                <b className="text-fj-ink">Home services SEO is the work of getting a trade business found</b> by
                people nearby who need that trade now. It has five parts: a complete Google Business Profile,
                visibility in the three-result map pack, one page per service and per town you really serve, a
                steady flow of genuine reviews, and clear facts that AI assistants can quote.
              </p>
              <p className="mt-4 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                It differs from general SEO in one big way. Your market is a driving radius, and Google measures
                distance from the person searching. So the job is less about national rankings and more about
                winning the towns closest to your base, on a phone, at the moment something breaks. If you run a
                shop or office that customers visit, our{' '}
                <Link href="/services/local-seo" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                  local SEO service
                </Link>{' '}
                is the better fit.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 3. SIX PILLARS ──────────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className={EYEBROW} style={{ color: ORANGE_DARK }}>
              What it covers
            </p>
            <h2 className="fj-display mt-3.5 max-w-[760px] font-bold text-fj-ink" style={H2_STYLE}>
              Six parts of home services SEO, in the order customers see them
            </h2>
            <p className="mt-4 max-w-[680px] font-fj-body font-medium text-fj-neutral-600" style={LEAD_STYLE}>
              A homeowner with a problem scrolls past the ads, scans the map, taps a profile, reads a few
              reviews and maybe opens your site. Each step below is one of those moments, and each one can lose
              you the call.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {PILLARS.map((p) => (
                <div key={p.tag} className="rounded-2xl p-7" style={{ background: p.tint }}>
                  <span className="font-fj-mono text-[0.8125rem] font-bold" style={{ color: p.accent }}>
                    {p.tag}
                  </span>
                  <h3 className="fj-display mb-2 mt-2 text-[1.125rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {p.title}
                  </h3>
                  <p className="font-fj-body text-[0.9062rem] font-medium leading-[1.6] text-fj-neutral-700">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 4. TRADE CARDS ──────────────────────────────────────────── */}
        <section id="trades" className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className={EYEBROW} style={{ color: ORANGE_DARK }}>
              Pick your trade
            </p>
            <h2 className="fj-display mt-3.5 max-w-[760px] font-bold text-fj-ink" style={H2_STYLE}>
              Each trade searches differently, so each gets its own page
            </h2>
            <p className="mt-4 max-w-[700px] font-fj-body font-medium text-fj-neutral-600" style={LEAD_STYLE}>
              The groundwork above is shared. What changes is demand timing, how urgent the buyer is, which
              services earn the money, and what proof a homeowner needs before letting you in. These pages go
              into that detail for each trade.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {TRADES.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="flex min-h-[210px] flex-col rounded-2xl bg-white p-7 transition-transform duration-300 hover:-translate-y-1"
                  style={{ border: '1px solid rgba(15,15,18,0.10)' }}
                >
                  <h3 className="fj-display text-[1.2rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {t.name}
                  </h3>
                  <p className="mt-2.5 flex-1 font-fj-body text-[0.9375rem] leading-[1.6] text-fj-neutral-700">{t.angle}</p>
                  <p className="mt-4 font-fj-mono text-[0.6875rem] text-fj-neutral-600">{t.terms}</p>
                  <span className="mt-4 font-fj-body text-[0.8125rem] font-bold" style={{ color: ORANGE_DARK }}>
                    Open the {t.name} page &rarr;
                  </span>
                </Link>
              ))}
              <div className="flex min-h-[210px] flex-col rounded-2xl p-7" style={{ background: PEACH }}>
                <h3 className="fj-display text-[1.2rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                  Another trade?
                </h3>
                <p className="mt-2.5 flex-1 font-fj-body text-[0.9375rem] leading-[1.6] text-fj-neutral-700">
                  Garage doors, pest control, landscaping, pool service, solar, foundation repair. The same
                  programme applies with your own services and season. Tell us what you do and where.
                </p>
                <div className="mt-5">
                  <ModalCTAButton label="Describe your business" region="us" modalVariant="seo" btnVariant="primary-light" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 5. PROGRAMME LISTICLE ───────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className={EYEBROW} style={{ color: ORANGE_DARK }}>
              The programme
            </p>
            <h2 className="fj-display mt-3.5 max-w-[780px] font-bold text-fj-ink" style={H2_STYLE}>
              Eight steps in a home services SEO programme
            </h2>
            <p className="mt-4 max-w-[680px] font-fj-body font-medium text-fj-neutral-600" style={LEAD_STYLE}>
              In the order they normally happen. If a proposal starts with monthly blog posts and skips steps
              one to three, the foundation is missing and the blog will not make up for it.
            </p>

            <ol className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
              {DELIVERABLES.map((d) => (
                <li
                  key={d.n}
                  className="flex flex-col rounded-2xl border p-6"
                  style={{ borderColor: 'rgba(15,15,18,0.09)', background: CREAM }}
                >
                  <span className="font-fj-mono text-[0.8125rem] font-bold" style={{ color: ORANGE_DARK }}>
                    {d.n}
                  </span>
                  <h3 className="fj-display mt-2 text-[1.05rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {d.title}
                  </h3>
                  <p className="mt-2.5 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-600">{d.body}</p>
                </li>
              ))}
            </ol>

            <p className="mt-8 max-w-[820px] font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
              Steps six and eight sit with our{' '}
              <Link href="/services/web-design" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                web design team
              </Link>
              , and the AI answer side of step seven with our{' '}
              <Link href="/services/ai-seo" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                AI SEO practice
              </Link>
              . Missed calls are a separate leak: if nobody picks up after hours, an{' '}
              <Link href="/services/ai-receptionist" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                AI receptionist
              </Link>{' '}
              can answer, book and pass the job to your dispatcher.
            </p>
          </div>
        </section>

        {/* ─── 6. COMPARISON TABLE ─────────────────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className={EYEBROW} style={{ color: ORANGE_DARK }}>
              Four ways trades get calls
            </p>
            <h2 className="fj-display mt-3.5 max-w-[800px] font-bold text-fj-ink" style={H2_STYLE}>
              SEO vs Local Services Ads vs Google Ads vs lead marketplaces
            </h2>
            <p className="mt-4 max-w-[700px] font-fj-body font-medium text-fj-neutral-600" style={LEAD_STYLE}>
              An honest side by side. We sell the first column, and we will still tell you to switch on Local
              Services Ads if your crews are idle next week. Most busy trade companies run two or three of these.
            </p>

            <div className="mt-10 overflow-x-auto rounded-2xl border" style={{ borderColor: 'rgba(15,15,18,0.10)' }}>
              <table className="w-full min-w-[900px] border-collapse text-left">
                <caption className="sr-only">
                  Comparison of home services SEO, Google Local Services Ads, Google search ads and lead
                  marketplaces across cost model, placement, ownership, speed, durability and risk.
                </caption>
                <thead>
                  <tr style={{ background: PEACH }}>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      What you are comparing
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em]" style={{ color: ORANGE_DARK }}>
                      SEO
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      Local Services Ads
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      Google search ads
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      Lead marketplaces
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr key={row.label} style={{ background: i % 2 === 1 ? CREAM : '#FFFFFF' }}>
                      <th scope="row" className="border-t p-4 font-fj-body text-[0.875rem] font-bold text-fj-ink" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.label}
                      </th>
                      <td
                        className="border-t p-4 font-fj-body text-[0.875rem] font-medium text-fj-ink"
                        style={{ borderColor: 'rgba(15,15,18,0.08)', background: i % 2 === 1 ? '#F3F8F5' : GREEN_SOFT }}
                      >
                        {row.seo}
                      </td>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.lsa}
                      </td>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.ppc}
                      </td>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.market}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 font-fj-body text-[0.8125rem] text-fj-neutral-600">
              Scroll the table sideways on smaller screens. Ads and marketplaces solve this month. Search solves
              next year, and it is the only one of the four that keeps working after you stop paying.
            </p>
          </div>
        </section>

        {/* ─── 7. MID-PAGE CTA ─────────────────────────────────────────── */}
        <section className="bg-white py-12">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <div className="grid grid-cols-1 items-center gap-6 rounded-2xl p-7 md:p-9 lg:grid-cols-[1.4fr_0.6fr]" style={{ background: GREEN_SOFT }}>
              <div>
                <h2 className="fj-display text-[1.45rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.02em' }}>
                  Not sure which of these your business needs first?
                </h2>
                <p className="mt-2 max-w-[640px] font-fj-body text-[1rem] leading-[1.6] text-fj-neutral-700">
                  Send your website and the towns you serve. We look at your Business Profile, the map pack in your
                  closest towns and your mobile site, then tell you the first three fixes in plain English.
                </p>
              </div>
              <div className="lg:justify-self-end">
                <ModalCTAButton label="Get the first three fixes" region="us" modalVariant="seo" btnVariant="primary-light" />
              </div>
            </div>
          </div>
        </section>

        {/* ─── 8. COMPETITOR SET ───────────────────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className={EYEBROW} style={{ color: ORANGE_DARK }}>
              Who else you will find
            </p>
            <h2 className="fj-display mt-3.5 max-w-[800px] font-bold text-fj-ink" style={H2_STYLE}>
              What ranks for &ldquo;home services seo&rdquo; today
            </h2>
            <p className="mt-4 max-w-[760px] font-fj-body font-medium text-fj-neutral-600" style={LEAD_STYLE}>
              We pulled the live US results on 24 November 2026 and read the top pages. The first page is mostly
              agency lists, directories and tip articles. Here is what each offers, so you can judge any agency,
              including us, against it.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {RIVALS.map((r) => (
                <div key={r.domain} className="flex flex-col rounded-2xl border bg-white p-6" style={{ borderColor: 'rgba(15,15,18,0.09)' }}>
                  <span className="font-fj-mono text-[0.8125rem] font-bold text-fj-ink">{r.domain}</span>
                  <h3 className="fj-display mt-1.5 text-[1.05rem] font-bold" style={{ letterSpacing: '-0.015em', color: ORANGE_DARK }}>
                    {r.note}
                  </h3>
                  <p className="mt-2.5 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">{r.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl p-7 md:p-8" style={{ background: GREEN_SOFT }}>
              <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">What none of them covered well</h3>
              <ul className="mt-5 space-y-3.5">
                {[
                  'How Local Services Ads and organic results share the same screen, and how to stop paying twice for one customer',
                  'What SEO cannot promise. Google says no one can guarantee a number one ranking, yet several vendors sell timed guarantees',
                  'What a fair cost looks like, measured as cost per booked job rather than cost per visit',
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-ink">
                    <CheckCircle size={18} /> {line}
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">
                This page and each trade page answer those three directly.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 9. FIT CHECK ────────────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className={EYEBROW} style={{ color: ORANGE_DARK }}>
              Honest fit check
            </p>
            <h2 className="fj-display mt-3.5 max-w-[720px] font-bold text-fj-ink" style={H2_STYLE}>
              When home services SEO is the wrong thing to buy
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-2xl p-7 md:p-8" style={{ background: GREEN_SOFT }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">A strong fit</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'You plan to serve the same towns for years',
                    'You spend on lead marketplaces or ads and want to depend on them less',
                    'You have happy customers but few reviews to show for it',
                    'Your website was built years ago and nobody has checked it on a phone since',
                    'You can take more jobs and someone answers the phone quickly',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-ink">
                      <CheckCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border p-7 md:p-8" style={{ borderColor: 'rgba(15,15,18,0.12)' }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">A poor fit</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'You need the phone ringing next week. Start with ads, then build search',
                    'You want pages for towns you have never worked in',
                    'You expect a guaranteed ranking or a fixed date for page one',
                    'Your schedule is already full and you cannot add crews',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-neutral-700">
                      <CrossCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">
                  Owner-run and small? Our{' '}
                  <Link href="/services/small-business-seo" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                    small business SEO
                  </Link>{' '}
                  programme is scoped for that. Want to see what is broken first? Start with an{' '}
                  <Link href="/services/seo-audit" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                    SEO audit
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 10. CITATIONS ───────────────────────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className={EYEBROW} style={{ color: ORANGE_DARK }}>
              Check us against the source
            </p>
            <h2 className="fj-display mt-3.5 max-w-[760px] font-bold text-fj-ink" style={H2_STYLE}>
              Where the claims on this page come from
            </h2>
            <p className="mt-4 max-w-[720px] font-fj-body font-medium text-fj-neutral-600" style={LEAD_STYLE}>
              Four Google pages back the rules we describe above. Each was opened and checked on 24 November 2026.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  src: 'Google Business Profile Help',
                  title: 'Service-area businesses',
                  body: 'A business that visits customers should hide its address, and the service area should not extend farther than about two hours of driving.',
                  href: 'https://support.google.com/business/answer/3038177',
                },
                {
                  src: 'Google Business Profile Help',
                  title: 'How local ranking works',
                  body: 'Local results are based mainly on relevance, distance and prominence, which the page now also calls popularity. Review count and rating feed it.',
                  href: 'https://support.google.com/business/answer/7091',
                },
                {
                  src: 'Google Local Services Help',
                  title: 'Local Services Ads',
                  body: 'You pay only for leads related to your services, and a Google Verified badge shows the business passed Google’s screening.',
                  href: 'https://support.google.com/localservices/answer/6224841',
                },
                {
                  src: 'Google Search Central',
                  title: 'Do you need an SEO?',
                  body: 'Google states plainly that no one can guarantee a number one ranking on Google.',
                  href: 'https://developers.google.com/search/docs/fundamentals/do-i-need-seo',
                },
              ].map((c) => (
                <div key={c.href} className="flex flex-col rounded-2xl border bg-white p-6" style={{ borderColor: 'rgba(15,15,18,0.09)' }}>
                  <span className="font-fj-mono text-[10px] uppercase tracking-[0.1em] text-fj-neutral-600">{c.src}</span>
                  <h3 className="fj-display mt-2 text-[1.05rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {c.title}
                  </h3>
                  <p className="mt-2.5 flex-1 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">{c.body}</p>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 font-fj-body text-[0.8125rem] font-bold underline underline-offset-4"
                    style={{ color: ORANGE_DARK }}
                  >
                    Read the source <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 11. CITY PAGES ──────────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative mx-auto w-full max-w-[520px]">
              <img
                src="/images/contractors/dispatch-office-route-map.webp"
                alt="A dispatcher and an owner review a service-area route map on an office monitor"
                width={1376}
                height={860}
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-2xl border object-cover"
                style={{ borderColor: 'rgba(15,15,18,0.10)', boxShadow: '0 18px 44px rgba(20,18,12,0.09)' }}
              />
            </div>
            <div>
              <p className={EYEBROW} style={{ color: ORANGE_DARK }}>
                Home services SEO by city
              </p>
              <h2 className="fj-display mt-3.5 font-bold text-fj-ink" style={H2_STYLE}>
                Local market notes for the cities trades ask us about
              </h2>
              <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                Between August and November 2026, searches like &ldquo;local seo for home services companies
                cleveland oh&rdquo; and &ldquo;hvac seo colorado springs&rdquo; reached our city SEO pages. Each
                one covers the local search market in more detail.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3">
                {CITY_LINKS.map((c) => (
                  <li key={c.href}>
                    <Link
                      href={c.href}
                      className="block rounded-xl px-4 py-3 font-fj-body text-[0.9375rem] font-semibold text-fj-ink"
                      style={{ background: CREAM, border: '1px solid rgba(15,15,18,0.08)' }}
                    >
                      SEO in {c.city} <span aria-hidden="true" style={{ color: ORANGE_DARK }}>&rarr;</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ─── 12. WHO YOU WORK WITH ───────────────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: LAV_SOFT }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className={EYEBROW} style={{ color: LAV }}>
              Who you actually work with
            </p>
            <h2 className="fj-display mt-3.5 max-w-[760px] font-bold text-fj-ink" style={H2_STYLE}>
              One team for search, the website and the AI answers
            </h2>
            <p className="mt-4 max-w-[760px] font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
              FactoryJet has served 500+ businesses since 2014, with 97% on-time delivery. We build websites and
              run search, so a fix to page speed or structure ships in the same sprint instead of waiting in
              another vendor&rsquo;s queue.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
              {[
                { t: 'Founder-led analysis', s: 'The person who scopes the work does the analysis and joins the calls' },
                { t: 'Search and build in one team', s: 'We design and develop sites, so technical fixes ship' },
                { t: 'Map pack, organic and AI answers', s: 'One plan for all three places a homeowner looks' },
                { t: 'No invented numbers', s: 'No fabricated case studies, no guaranteed rankings' },
              ].map((item) => (
                <li key={item.t} className="flex items-start gap-3.5 rounded-2xl bg-white px-5 py-4">
                  <CheckCircle size={20} fill={LAV} />
                  <div className="font-fj-body text-[0.9688rem] font-bold text-fj-ink">
                    {item.t}
                    <small className="mt-0.5 block font-fj-body text-[0.8125rem] font-medium text-fj-neutral-600">{item.s}</small>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-5 font-fj-mono text-[0.78rem] text-fj-neutral-600">
              Reviewed &amp; updated {REVIEWED_DATE} &middot; Bhavesh Barot, Founder, FactoryJet
            </p>
            <p className="mt-2 font-fj-body text-[0.8125rem] text-fj-neutral-600">
              Search volumes from DataForSEO (United States), pulled 24 November 2026. Competitor positions are a
              snapshot from the same date and will move.
            </p>
          </div>
        </section>

        {/* ─── 13. FAQ ─────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="Home services SEO FAQ"
          headline="Questions trade business owners ask about SEO"
          lead="Twenty-four answers on how home services SEO works, the map pack and reviews, how it fits with Local Services Ads, what it costs on the market, and AI search."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ─── 14. FINAL CTA (the one dark section) ────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="FOR HVAC, PLUMBING, ELECTRICAL, ROOFING AND CLEANING"
          headline="Find out what is keeping your trade business out of the map pack"
          sub="Book a call with the founder. We review your Business Profile, service area, reviews and mobile site against the top three companies in your closest towns, then tell you plainly whether SEO is worth it for you now."
          primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See HVAC SEO', href: '/services/hvac-seo' }}
          objectionHandler="Founder-led. No guaranteed rankings, no invented case studies, and you own the site and the plan."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
