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
   /services/hvac-seo: US HVAC SEO trade page (built 24 Nov 2026).

   Intent owned by THIS page (DataForSEO US, 24 Nov 2026):
     hvac marketing agency (880/mo, KD 11) · hvac leads (720/mo, KD 0) ·
     hvac seo services (590/mo, KD 12) · hvac seo (480/mo, KD 9) ·
     seo for hvac companies (480/mo, KD 5) · hvac marketing (480/mo, KD 4) ·
     hvac website design (390/mo, KD 9) · hvac seo company (260/mo, KD 18) ·
     hvac seo agency (210/mo, KD 15) · hvac digital marketing (210/mo, KD 0) ·
     seo for hvac (170/mo, KD 15) · hvac local seo · hvac google ads.
   GSC (Aug to Nov 2026): "hvac seo colorado springs" 104 impressions at
   position 20.7, "hvac seo company tampa" 56 at 41.9, all landing on city
   /seo pages because no HVAC page existed.

   Parent hub: /services/home-services-seo. Siblings: roofing, plumber,
   electrician, cleaning-company. Generic local SEO stays on /services/local-seo.

   Build rules honoured: no em dashes, no FactoryJet prices (one sourced market
   range, labelled), plain <img>, FinalCTA (never GetFreeQuoteCTA), one dark
   section (FinalCTA), no phone number, no team location, plain headlines.

   Schema: WebPage + speakable, Service, ItemList (programme), ItemList
   (competitor set), FAQPage derived from FAQ_ITEMS, BreadcrumbList.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const PAGE_URL = 'https://factoryjet.com/services/hvac-seo';
const HUB_URL = 'https://factoryjet.com/services/home-services-seo';
const REVIEWED_DATE = 'November 24, 2026';
const HERO_IMG = '/images/contractors/hvac-technician-service-van-ai.webp';

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
  title: 'HVAC SEO Services: SEO for HVAC Companies | FactoryJet',
  description:
    'HVAC SEO for US heating and cooling contractors: seasonal pages ranked before the rush, emergency searches, service areas, and Local Services Ads vs organic.',
  keywords: [
    'hvac seo',
    'hvac seo services',
    'seo for hvac companies',
    'seo for hvac',
    'hvac seo company',
    'hvac seo agency',
    'hvac local seo',
    'hvac marketing',
    'hvac marketing agency',
    'hvac digital marketing',
    'hvac leads',
    'hvac website design',
    'hvac google ads',
    'local services ads hvac',
    'seo for heating and cooling companies',
    'air conditioning company seo',
    'furnace repair seo',
    'hvac contractor seo',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'HVAC SEO Services: SEO for Heating & Cooling Companies | FactoryJet',
    description:
      'HVAC SEO built around two seasonal peaks, after-hours emergency searches, repair versus replace buyers and the Local Services Ads sitting above the map.',
    url: PAGE_URL,
    images: [
      {
        url: `https://factoryjet.com${HERO_IMG}`,
        width: 1228,
        height: 768,
        alt: 'An HVAC technician checks a job on his phone beside a white service van in a residential driveway',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HVAC SEO Services: SEO for Heating & Cooling Companies | FactoryJet',
    description:
      'HVAC SEO for US contractors: seasonal pages, emergency searches, service areas and Local Services Ads vs organic. Founder-led, no guaranteed rankings.',
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
   Why HVAC search behaves differently
───────────────────────────────────────────────────────────────────────────── */

type Difference = { tag: string; title: string; body: string; tint: string; accent: string };

const DIFFERENCES: ReadonlyArray<Difference> = [
  {
    tag: '01',
    title: 'Two peaks a year, not one',
    body:
      'Cooling searches climb with the first hot week. Heating searches climb with the first cold night. In between sit the shoulder months, when tune-up and replacement planning searches are quieter but cheaper to win. ENERGY STAR advises checking the cooling system in spring and the heating system in fall, and homeowners search on that same rhythm.',
    tint: PEACH,
    accent: ORANGE_DARK,
  },
  {
    tag: '02',
    title: 'The best calls arrive at night',
    body:
      '"No heat", "AC not blowing cold air", "furnace making loud noise". These searches happen at 10pm in a cold house, on a phone, and the homeowner calls the first company that looks open. Emergency pages need visible after-hours wording, a call button that works and accurate hours on the Business Profile.',
    tint: LAV_SOFT,
    accent: LAV,
  },
  {
    tag: '03',
    title: 'Repair and replace are different buyers',
    body:
      'A repair buyer wants someone today. A replacement buyer compares quotes for weeks, reads about system sizes, efficiency ratings and brands, and asks about financing. One page cannot serve both. Separate repair, replacement and maintenance pages let each buyer find the answer they came for.',
    tint: GREEN_SOFT,
    accent: GREEN,
  },
  {
    tag: '04',
    title: 'Local Services Ads sit above everything',
    body:
      'On most HVAC searches, Local Services Ads take the top of the screen, then the map pack, then organic results. Local Services Ads charge per lead and show a "Google Verified" badge after screening. The question is not ads or SEO. It is which jobs you pay for per lead and which you earn in the map.',
    tint: PEACH,
    accent: ORANGE_DARK,
  },
  {
    tag: '05',
    title: 'Maintenance plans are the real asset',
    body:
      'A homeowner on a maintenance agreement calls you, not Google, when the system fails. Tune-up pages ranked in March and September bring in the customers who become plan members. Most HVAC SEO effort chases emergencies and ignores the cheaper, steadier tune-up searches.',
    tint: LAV_SOFT,
    accent: LAV,
  },
  {
    tag: '06',
    title: 'The equipment keeps changing',
    body:
      'EPA rules are phasing down R-410A, and new home systems have moved to lower-impact refrigerants such as R-454B and R-32. Heat pumps keep spreading into colder states. Each change creates new questions homeowners type into Google and ChatGPT. The contractor with clear, current answers earns the visit.',
    tint: GREEN_SOFT,
    accent: GREEN,
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Seasonal publishing calendar (our planning method, not a forecast)
───────────────────────────────────────────────────────────────────────────── */

type Season = { months: string; searches: string; publish: string };

const SEASONS: ReadonlyArray<Season> = [
  {
    months: 'January to February',
    searches: 'No heat, furnace repair, heat pump not heating, frozen lines',
    publish: 'Publish and refresh spring tune-up and AC check pages so they are indexed before March',
  },
  {
    months: 'March to April',
    searches: 'AC tune-up, AC maintenance, replace AC before summer, system quotes',
    publish: 'Push maintenance plan pages and replacement guides. Ask winter repair customers for reviews',
  },
  {
    months: 'May to August',
    searches: 'AC not cooling, AC repair near me, emergency AC repair, AC blowing warm air',
    publish: 'Emergency pages and after-hours wording front and centre. Draft fall heating content now',
  },
  {
    months: 'September to October',
    searches: 'Furnace tune-up, heating maintenance, carbon monoxide checks, heat pump service',
    publish: 'Push heating tune-up and plan pages. Refresh town pages with summer job photos',
  },
  {
    months: 'November to December',
    searches: 'Furnace not working, no heat, emergency heating repair, furnace replacement',
    publish: 'Emergency heating pages lead. Plan the year: which towns and services need new pages',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Programme listicle (also powers the ItemList schema)
───────────────────────────────────────────────────────────────────────────── */

type Deliverable = { n: string; title: string; body: string };

const DELIVERABLES: ReadonlyArray<Deliverable> = [
  {
    n: '01',
    title: 'Business Profile set up for heating and cooling',
    body:
      'The right primary category (usually HVAC contractor) plus secondary categories such as air conditioning contractor, heating contractor or furnace repair service where they match your work. Every service listed, a realistic service area, hours that match when you take calls, and photos from real installs.',
  },
  {
    n: '02',
    title: 'Separate pages for repair, replacement and maintenance',
    body:
      'AC repair, furnace repair, heat pump repair, AC installation, furnace replacement, ductless mini-splits, indoor air quality and maintenance plans each get their own page. Each states what is included, warning signs, and how to book, so the page matches the search.',
  },
  {
    n: '03',
    title: 'Emergency pages that work at 10pm on a phone',
    body:
      'Clear after-hours wording, a call button at the top, a short form for those who will not call, and what to do while waiting (check the thermostat, the breaker, the filter). Fast to load on a weak signal.',
  },
  {
    n: '04',
    title: 'Seasonal pages published before each rush',
    body:
      'Spring cooling content goes live in winter. Fall heating content goes live in summer. Google needs weeks to find and rank a page, so content written when the phones are already ringing is too late.',
  },
  {
    n: '05',
    title: 'Town pages built from your dispatch history',
    body:
      'We map where your jobs actually happen and build pages only for those towns. Each carries local proof: recent installs, housing age and common systems, local permit notes. No copy-paste pages for places your vans rarely reach.',
  },
  {
    n: '06',
    title: 'Review requests triggered from your field software',
    body:
      'When a tech closes a job in ServiceTitan, Housecall Pro, Jobber or FieldEdge, the customer gets a short request with a direct link to your Google review form. Every review gets a reply.',
  },
  {
    n: '07',
    title: 'Brand and equipment pages that answer real questions',
    body:
      'If you install Carrier, Trane, Lennox, Goodman or Daikin, pages about those systems catch replacement buyers comparing brands. Pair them with plain guides: repair or replace, what size system a home needs, what changes with newer refrigerants.',
  },
  {
    n: '08',
    title: 'Local Services Ads and organic planned together',
    body:
      'We look at which services and towns your Local Services Ads already cover and at what cost per lead, then focus organic work where ads are expensive or weak. You stop paying twice to reach the same homeowner.',
  },
  {
    n: '09',
    title: 'Call tracking, schema and AI answers',
    body:
      'HVACBusiness, Service and FAQ structured data, calls and forms tracked by page and town, and plain facts on the site so Google AI Overviews and ChatGPT can name you when someone asks who to call.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Comparison: Local Services Ads vs map pack vs organic vs search ads
───────────────────────────────────────────────────────────────────────────── */

type CompRow = { label: string; lsa: string; map: string; organic: string; ppc: string };

const COMPARISON_ROWS: ReadonlyArray<CompRow> = [
  {
    label: 'Where it appears',
    lsa: 'Very top of the results',
    map: 'Map with three companies, under the ads',
    organic: 'Blue links under the map, plus AI answers',
    ppc: 'Above and below the organic links',
  },
  {
    label: 'How you pay',
    lsa: 'Per lead',
    map: 'No fee. Earned through profile, reviews and distance',
    organic: 'No fee. Earned through pages and links',
    ppc: 'Per click',
  },
  {
    label: 'What gets you in',
    lsa: 'Passing Google’s screening, budget, reviews',
    map: 'Category, distance, reviews, profile completeness',
    organic: 'Service and town pages, site speed, authority',
    ppc: 'Bid, ad quality and landing page',
  },
  {
    label: 'Best for',
    lsa: 'Emergency repair calls this week',
    map: 'Near-me searches from your closest towns',
    organic: 'Replacement research, tune-ups, long-tail questions',
    ppc: 'Controlling exactly which services you advertise',
  },
  {
    label: 'When you stop',
    lsa: 'Leads stop',
    map: 'Holds, if reviews keep coming',
    organic: 'Usually holds for months',
    ppc: 'Clicks stop',
  },
  {
    label: 'Common mistake',
    lsa: 'Not disputing leads that are not real jobs',
    map: 'A service area drawn far too wide',
    organic: 'One page trying to rank for every service',
    ppc: 'Sending ad clicks to the homepage',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Who ranks for "hvac seo" today (also powers an ItemList)
───────────────────────────────────────────────────────────────────────────── */

type Rival = { domain: string; note: string; detail: string };

const RIVALS: ReadonlyArray<Rival> = [
  {
    domain: 'rankhvac.com',
    note: 'Position 1: an HVAC-only agency',
    detail:
      'Ranks first with an essay of about 1,100 words on HVAC SEO strategies: map pack, speed, symptom-based content and citations. HVAC is the whole business. Lighter on profile setup steps, reviews, paid search and seasonal planning.',
  },
  {
    domain: 'contractorsmomentum.com',
    note: 'Position 2: a short sales page',
    detail:
      'A landing page of about 600 words covering the Business Profile, service-area pages, missed-call text-back, review automation and Local Services Ads. Covers the right topics briefly. Several headline statistics carry no source.',
  },
  {
    domain: 'signalseowebdesign.com',
    note: 'Position 5: regional HVAC pages',
    detail:
      'A Colorado HVAC SEO page built around eight metros, with city and service page structure. A good example of the town-page approach. Its average job and lead value figures are not sourced.',
  },
  {
    domain: 'onpurposemedia.com',
    note: 'Position 8: a service-area page',
    detail:
      'An agency page targeting HVAC SEO as one vertical among several. Appears on the home services SEO results too.',
  },
  {
    domain: 'hookagency.com',
    note: 'Position 14: trades specialist',
    detail:
      'A trades-focused agency with an HVAC contractor SEO guide. Ranks across many contractor queries, which reflects real depth in the space.',
  },
  {
    domain: 'hvac-seo.agency',
    note: 'Positions 13, 17 and 19: state pages',
    detail:
      'An exact-match domain ranking three times with state pages (Louisiana, South Carolina, Idaho). Shows that state-level pages still get onto page two, not to the top.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ: 26 items, grounded in live US People Also Ask (24 Nov 2026)
───────────────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'HVAC SEO basics' },
  { key: 'local', label: 'Map pack, reviews & service areas' },
  { key: 'paid', label: 'Leads, LSA & ads' },
  { key: 'season', label: 'Seasons & content' },
  { key: 'cost', label: 'Cost, timing & results' },
  { key: 'ai', label: 'AI search' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'basics',
    question: 'What is HVAC SEO?',
    answer:
      'HVAC SEO is the work of getting a heating and cooling company found when nearby homeowners search for AC repair, furnace repair, installation or maintenance. It covers the Google Business Profile and map pack, separate pages for each service and town, reviews, seasonal content and being named in AI answers.',
  },
  {
    category: 'basics',
    question: 'How does HVAC SEO work?',
    answer:
      'Google matches a search to businesses that offer that service, are close to the searcher and look trustworthy through reviews and links. HVAC SEO improves each of those signals: accurate categories and services on your profile, pages that match each service and town, steady reviews, and a fast site that turns visits into calls.',
  },
  {
    category: 'basics',
    question: 'What SEO services are available for HVAC companies?',
    answer:
      'The usual parts are a Business Profile audit and setup, listing cleanup, service and town pages, review generation, site speed and mobile fixes, structured data, seasonal content, and call tracking. Some agencies also manage Local Services Ads and Google Ads. Ask which of these are included before signing.',
  },
  {
    category: 'basics',
    question: 'What is the best HVAC SEO company?',
    answer:
      'There is no single best one. The right company for you serves your size and market, shows how it measures booked jobs rather than traffic, explains its plan for your Business Profile first, and does not promise guaranteed rankings. Ask to see the exact pages and changes they would make in the first ninety days.',
  },
  {
    category: 'basics',
    question: 'Can I do SEO for my HVAC company myself?',
    answer:
      'Some of it, yes. Completing your Business Profile, adding job photos, asking every customer for a review and replying to reviews are owner-friendly tasks. Building service and town pages, fixing site speed and adding schema take more time and skill, which is where most owners bring in help.',
  },
  {
    category: 'local',
    question: 'What Google Business Profile category should an HVAC company use?',
    answer:
      'Most use HVAC contractor as the primary category, then add secondary categories such as air conditioning contractor, heating contractor or furnace repair service if they match the work. Pick the primary category that describes your main revenue, and only add categories you really serve.',
  },
  {
    category: 'local',
    question: 'Should my HVAC company show its address on Google?',
    answer:
      'If customers do not visit your office, Google says you should hide the address and set a service area instead. Google also says the area should generally not extend beyond about two hours of driving from your base. A tighter, honest area tends to rank better than a huge one.',
  },
  {
    category: 'local',
    question: 'How do I rank in the map pack for AC repair near me?',
    answer:
      'Use the right categories, list AC repair as a service, set accurate hours, add real photos, and keep reviews coming in steadily. Back it up with an AC repair page on your site and town pages for your closest areas. Distance from the searcher still matters most, so expect to win nearby towns first.',
  },
  {
    category: 'local',
    question: 'How many Google reviews does an HVAC company need?',
    answer:
      'There is no magic number. Compare yourself with the three companies in your local map pack: aim to match or beat their review count and recency over time. A steady flow after every job beats a burst once a year.',
  },
  {
    category: 'paid',
    question: 'How much do HVAC leads cost?',
    answer:
      'It depends on the channel, your market and the season. Local Services Ads charge per lead through an auction, search ads charge per click, and marketplaces set their own lead prices, and all of them rise in peak weeks. SEO has no per-lead fee, which is why its cost per booked job usually falls as rankings build.',
  },
  {
    category: 'paid',
    question: 'Should HVAC companies use Local Services Ads or SEO?',
    answer:
      'Usually both. Local Services Ads put you at the very top for emergency calls quickly, and you pay per lead. SEO wins map pack and organic visibility without a per-lead fee and keeps working when you pause spending. Use ads to fill gaps and SEO to lower your cost per job over time.',
  },
  {
    category: 'paid',
    question: 'What is the Google Verified badge for HVAC companies?',
    answer:
      'It is the badge shown on Local Services Ads after a business passes Google’s screening. It only applies to the ad unit. It does not change your map pack or organic rankings, which depend on your Business Profile, reviews and website.',
  },
  {
    category: 'paid',
    question: 'Is HVAC SEO better than buying leads?',
    answer:
      'They do different jobs. Bought leads are fast but often shared with other contractors and stop when you stop paying. SEO is slower but brings calls that come only to you. Many companies buy leads during the first months of an SEO programme, then reduce spending as organic calls grow.',
  },
  {
    category: 'season',
    question: 'When should an HVAC company publish seasonal content?',
    answer:
      'Months before the season. Spring cooling and tune-up pages should be live and indexed by winter, and fall heating pages by summer. Google can take weeks to find and rank a new page, so publishing during the rush is too late.',
  },
  {
    category: 'season',
    question: 'What should an HVAC company blog about?',
    answer:
      'The questions customers ask your techs: repair or replace, why the AC freezes up, what a tune-up includes, how long systems last, what size system a home needs, and what changes with newer refrigerants. Answer each plainly and link to the matching service page.',
  },
  {
    category: 'season',
    question: 'Do HVAC companies need separate pages for heating and cooling?',
    answer:
      'Yes. People search for furnace repair and AC repair separately, often in different months. Separate pages for heating repair, cooling repair, installation, heat pumps and maintenance let each one match its search instead of one general page trying to cover all of them.',
  },
  {
    category: 'season',
    question: 'How do HVAC companies get more calls in the slow season?',
    answer:
      'Rank for tune-up, maintenance plan, indoor air quality and replacement planning searches. These are quieter and cheaper to win than emergency terms, and tune-up customers often become plan members who call you directly next time.',
  },
  {
    category: 'cost',
    question: 'How much does SEO cost for an HVAC company?',
    answer:
      'As a market range, not our price: WebFX reports US local SEO retainers of about $500 to $3,000 a month, with one-time projects from $500 to $5,000. HVAC companies in large metros with many towns sit higher. FactoryJet quotes a fixed scope in writing after a short call.',
  },
  {
    category: 'cost',
    question: 'How long does HVAC SEO take to show results?',
    answer:
      'Business Profile and review fixes can lift map visibility within weeks. New service and town pages usually take a few months to rank, and longer in big competitive metros. Plan around the seasons: work started in winter pays off in the cooling rush.',
  },
  {
    category: 'cost',
    question: 'Can an HVAC SEO agency guarantee first-page rankings?',
    answer:
      'No. Google says no one can guarantee a number one ranking. An agency can commit to a scope of work, a timeline for delivering it and how results will be reported. Treat ranking guarantees as a warning sign.',
  },
  {
    category: 'cost',
    question: 'How do I know if HVAC SEO is working?',
    answer:
      'Track calls and forms by page and town, then booked jobs and revenue from them. Supporting signs are map pack position for AC repair and furnace repair in your closest towns, Business Profile calls, and organic visits to service pages. Compare the same season year on year, not month to month.',
  },
  {
    category: 'cost',
    question: 'Do I need a new website for HVAC SEO?',
    answer:
      'Not always. If the site is reasonably fast on a phone and lets you add pages, we work with it. If it is slow, hard to edit or built on a template that cannot hold separate service pages, a rebuild is often cheaper than patching. We build sites too, so we can advise either way.',
  },
  {
    category: 'ai',
    question: 'Will AI replace SEO for HVAC companies?',
    answer:
      'No. When someone asks ChatGPT or Google AI Overviews which HVAC company to call, the answer is built from websites, Business Profiles and reviews. Strong local SEO is what gets you into those answers.',
  },
  {
    category: 'ai',
    question: 'How do I get my HVAC company recommended by ChatGPT?',
    answer:
      'State clear facts on your site: services, brands installed, towns served, emergency hours, licences, maintenance plan details. Keep your listings consistent across Google, Bing, Apple Maps and Yelp, and earn reviews and local mentions. Vague copy gives the assistant nothing to cite.',
  },
  {
    category: 'ai',
    question: 'Is SEO dead for HVAC in 2026?',
    answer:
      'No. Homeowners still search for AC and furnace repair every day, and the map pack still takes most of those calls. What changed is that AI answers now appear for many questions, which rewards companies whose sites answer those questions clearly.',
  },
  {
    category: 'ai',
    question: 'What does an AI receptionist have to do with HVAC SEO?',
    answer:
      'SEO brings the call, and a missed call is a lost job, especially at night in peak season. An AI receptionist answers, books and passes urgent jobs to your on-call tech, so the calls SEO earns do not go to voicemail.',
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
  name: 'HVAC SEO Services: SEO for Heating and Cooling Companies',
  description:
    'HVAC SEO for US heating and cooling contractors, built around seasonal demand, emergency searches, repair versus replace buyers, service areas and Local Services Ads versus organic results.',
  inLanguage: 'en-US',
  dateModified: '2026-11-24',
  lastReviewed: '2026-11-24',
  isPartOf: { '@type': 'WebSite', name: 'FactoryJet', url: 'https://factoryjet.com' },
  about: { '@type': 'Thing', name: 'HVAC SEO' },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: `https://factoryjet.com${HERO_IMG}`,
    width: 1228,
    height: 768,
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#answer-first', '#what-is-hvac-seo'],
  },
  reviewedBy: { '@type': 'Person', name: 'Bhavesh Barot', jobTitle: 'Founder' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'HVAC SEO Services',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  isRelatedTo: { '@type': 'Service', name: 'Home Services SEO', url: HUB_URL },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType: 'HVAC SEO / SEO for HVAC Companies / HVAC Local SEO / HVAC Marketing',
  audience: {
    '@type': 'BusinessAudience',
    name: 'US heating, ventilation and air conditioning contractors',
  },
  description:
    'Search programme for US HVAC contractors covering Google Business Profile setup, repair, replacement and maintenance pages, emergency pages, seasonal content, town pages, review generation, Local Services Ads planning, structured data and AI answer visibility.',
  url: PAGE_URL,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'HVAC SEO programme',
    itemListElement: DELIVERABLES.map((d) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: d.title, description: d.body },
    })),
  },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Nine parts of an HVAC SEO programme',
  numberOfItems: DELIVERABLES.length,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: DELIVERABLES.map((d, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: d.title,
    description: d.body,
  })),
};

const rivalListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Sites ranking for "hvac seo" in the United States, 24 November 2026',
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
  { name: 'Home Services SEO', url: HUB_URL },
  { name: 'HVAC SEO', url: PAGE_URL },
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
  { id: 'hvac-webpage-schema', data: webPageSchema },
  { id: 'hvac-service-schema', data: serviceSchema },
  { id: 'hvac-itemlist-schema', data: itemListSchema },
  { id: 'hvac-rivals-schema', data: rivalListSchema },
  { id: 'hvac-faq-schema', data: faqSchema },
  { id: 'hvac-breadcrumb-schema', data: breadcrumbSchema },
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

const linkStyle = { color: ORANGE_DARK };
const LINK_CLASS = 'font-semibold underline underline-offset-2';

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function HvacSeoPage() {
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
              <p className="fj-eyebrow">HVAC SEO &middot; United States</p>
              <h1
                className="fj-display mt-5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(2.3rem, 5vw, 3.7rem)', lineHeight: 1.06, letterSpacing: '-0.03em' }}
              >
                HVAC SEO that is ranked before the first heatwave
              </h1>
              <p
                className="mt-6 max-w-[545px] font-fj-body font-medium text-fj-neutral-600"
                style={{ fontSize: '1.125rem', lineHeight: 1.6 }}
              >
                Heating and cooling demand comes in two waves a year, and the best calls arrive after dark from
                a cold house or a hot bedroom. We build the Business Profile, emergency pages, seasonal content
                and town pages that win those calls, and we plan them around the Local Services Ads already
                sitting above your map listing.{' '}
                <b className="font-bold text-fj-ink">Pages ready before the rush, not written during it.</b>
              </p>
              <HeroInlineForm region="us" source="services_hvac_seo_hero" submitLabel="Get an HVAC SEO review" />
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
                <Link href="/services/home-services-seo" className="font-fj-body text-[0.9375rem] font-semibold underline underline-offset-4" style={linkStyle}>
                  See all home services SEO
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px]">
              <div
                className="overflow-hidden rounded-3xl border"
                style={{ borderColor: 'rgba(15,15,18,0.10)', boxShadow: '0 24px 60px rgba(20,18,12,0.12)' }}
              >
                <img
                  src={HERO_IMG}
                  alt="An HVAC technician checks a job on his phone beside a white service van in a residential driveway"
                  width={1228}
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
                    { k: 'hvac marketing agency.', v: '880 a month.', d: 'difficulty 11.' },
                    { k: 'hvac seo services.', v: '590 a month.', d: 'difficulty 12.' },
                    { k: 'hvac seo.', v: '480 a month.', d: 'difficulty 9.' },
                    { k: 'seo for hvac companies.', v: '480 a month.', d: 'difficulty 5.' },
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
                id="what-is-hvac-seo"
                className="fj-display mt-3 text-[1.35rem] font-bold text-fj-ink"
                style={{ letterSpacing: '-0.02em' }}
              >
                What is HVAC SEO, and how is it different from general local SEO?
              </h2>
              <p className="mt-3 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                <b className="text-fj-ink">HVAC SEO is the work of getting a heating and cooling company found</b>{' '}
                in the map pack, the organic results and AI answers when nearby homeowners search for AC repair,
                furnace repair, installation or maintenance. Three things set it apart: demand peaks twice a
                year, many of the most valuable searches are after-hours emergencies, and Local Services Ads sit
                above the map on almost every search.
              </p>
              <p className="mt-4 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                So the plan runs on a calendar. Seasonal pages go live months before the rush, emergency pages
                work on a phone at night, and organic work focuses where Local Services Ads are expensive or
                weak. HVAC is one trade in our{' '}
                <Link href="/services/home-services-seo" className={LINK_CLASS} style={linkStyle}>
                  home services SEO
                </Link>{' '}
                family, which shares the same Business Profile and review groundwork.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 3. SIX DIFFERENCES ──────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className={EYEBROW} style={linkStyle}>
              Six things generic agencies miss
            </p>
            <h2 className="fj-display mt-3.5 max-w-[760px] font-bold text-fj-ink" style={H2_STYLE}>
              HVAC search runs on the weather and the clock
            </h2>
            <p className="mt-4 max-w-[680px] font-fj-body font-medium text-fj-neutral-600" style={LEAD_STYLE}>
              A flat monthly content plan treats July and October the same. For an HVAC company they are
              different businesses. Each point below changes what we build and when.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {DIFFERENCES.map((d) => (
                <div key={d.tag} className="rounded-2xl p-7" style={{ background: d.tint }}>
                  <span className="font-fj-mono text-[0.8125rem] font-bold" style={{ color: d.accent }}>
                    {d.tag}
                  </span>
                  <h3 className="fj-display mb-2 mt-2 text-[1.125rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {d.title}
                  </h3>
                  <p className="font-fj-body text-[0.9062rem] font-medium leading-[1.6] text-fj-neutral-700">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 4. SEASONAL CALENDAR ────────────────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className={EYEBROW} style={linkStyle}>
              The HVAC SEO calendar
            </p>
            <h2 className="fj-display mt-3.5 max-w-[780px] font-bold text-fj-ink" style={H2_STYLE}>
              What homeowners search each season, and what to publish ahead of it
            </h2>
            <p className="mt-4 max-w-[720px] font-fj-body font-medium text-fj-neutral-600" style={LEAD_STYLE}>
              This is the planning calendar we work from for a typical four-season US market. Southern states
              shift it: cooling starts earlier and runs longer, heating is short. The rule holds everywhere:
              publish one season ahead.
            </p>

            <div className="mt-10 overflow-x-auto rounded-2xl border" style={{ borderColor: 'rgba(15,15,18,0.10)' }}>
              <table className="w-full min-w-[760px] border-collapse text-left">
                <caption className="sr-only">
                  HVAC seasonal search calendar showing typical homeowner searches by period and what an HVAC
                  company should publish ahead of each period.
                </caption>
                <thead>
                  <tr style={{ background: PEACH }}>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      Months
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      What homeowners search
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em]" style={linkStyle}>
                      What to publish or push
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {SEASONS.map((s, i) => (
                    <tr key={s.months} style={{ background: i % 2 === 1 ? CREAM : '#FFFFFF' }}>
                      <th scope="row" className="border-t p-4 font-fj-body text-[0.875rem] font-bold text-fj-ink" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {s.months}
                      </th>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {s.searches}
                      </td>
                      <td
                        className="border-t p-4 font-fj-body text-[0.875rem] font-medium text-fj-ink"
                        style={{ borderColor: 'rgba(15,15,18,0.08)', background: i % 2 === 1 ? '#F3F8F5' : GREEN_SOFT }}
                      >
                        {s.publish}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 font-fj-body text-[0.8125rem] text-fj-neutral-600">
              Scroll sideways on smaller screens. The spring and fall maintenance timing matches ENERGY STAR&rsquo;s
              advice to check cooling systems in spring and heating systems in fall.
            </p>
          </div>
        </section>

        {/* ─── 5. LSA VS ORGANIC ───────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-12 px-6 md:px-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className={EYEBROW} style={linkStyle}>
                Local Services Ads vs organic
              </p>
              <h2 className="fj-display mt-3.5 font-bold text-fj-ink" style={H2_STYLE}>
                Four places on one HVAC search, and what earns each
              </h2>
              <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                Search &ldquo;furnace repair near me&rdquo; and you usually see Local Services Ads first, then
                the map pack, then organic results. Google&rsquo;s Local Services help page says you pay only for
                leads, and the Google Verified badge shows the business passed screening. That badge does nothing
                for your map or organic position.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  { t: 'Start with what ads already cover.', s: 'Pull your Local Services Ads lead report by service and town.' },
                  { t: 'Aim organic work where leads cost most.', s: 'Peak-season emergency terms and big-ticket replacement searches.' },
                  { t: 'Win the cheap months.', s: 'Tune-up and maintenance searches rarely draw heavy ad spend.' },
                  { t: 'Dispute bad leads.', s: 'Wrong service, wrong area or spam leads can be disputed in the LSA dashboard.' },
                ].map((item) => (
                  <li key={item.t} className="flex items-start gap-3.5 rounded-2xl px-5 py-4" style={{ background: CREAM }}>
                    <CheckCircle size={20} />
                    <div className="font-fj-body text-[0.9688rem] font-bold text-fj-ink">
                      {item.t}
                      <small className="mt-0.5 block font-fj-body text-[0.8125rem] font-medium text-fj-neutral-600">{item.s}</small>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: 'rgba(15,15,18,0.10)' }}>
              <table className="w-full min-w-[720px] border-collapse text-left">
                <caption className="sr-only">
                  Comparison of Google Local Services Ads, the map pack, organic results and search ads for HVAC
                  companies across placement, cost, entry requirements, best use, durability and common mistakes.
                </caption>
                <thead>
                  <tr style={{ background: PEACH }}>
                    <th scope="col" className="p-3.5 font-fj-body text-[0.75rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      &nbsp;
                    </th>
                    <th scope="col" className="p-3.5 font-fj-body text-[0.75rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      Local Services Ads
                    </th>
                    <th scope="col" className="p-3.5 font-fj-body text-[0.75rem] font-bold uppercase tracking-[0.06em]" style={linkStyle}>
                      Map pack
                    </th>
                    <th scope="col" className="p-3.5 font-fj-body text-[0.75rem] font-bold uppercase tracking-[0.06em]" style={linkStyle}>
                      Organic
                    </th>
                    <th scope="col" className="p-3.5 font-fj-body text-[0.75rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      Search ads
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr key={row.label} style={{ background: i % 2 === 1 ? CREAM : '#FFFFFF' }}>
                      <th scope="row" className="border-t p-3.5 font-fj-body text-[0.8125rem] font-bold text-fj-ink" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.label}
                      </th>
                      <td className="border-t p-3.5 font-fj-body text-[0.8125rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.lsa}
                      </td>
                      <td className="border-t p-3.5 font-fj-body text-[0.8125rem] font-medium text-fj-ink" style={{ borderColor: 'rgba(15,15,18,0.08)', background: GREEN_SOFT }}>
                        {row.map}
                      </td>
                      <td className="border-t p-3.5 font-fj-body text-[0.8125rem] font-medium text-fj-ink" style={{ borderColor: 'rgba(15,15,18,0.08)', background: '#F3F8F5' }}>
                        {row.organic}
                      </td>
                      <td className="border-t p-3.5 font-fj-body text-[0.8125rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.ppc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 6. PROGRAMME LISTICLE ───────────────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className={EYEBROW} style={linkStyle}>
              The programme
            </p>
            <h2 className="fj-display mt-3.5 max-w-[780px] font-bold text-fj-ink" style={H2_STYLE}>
              Nine parts of an HVAC SEO programme
            </h2>
            <p className="mt-4 max-w-[680px] font-fj-body font-medium text-fj-neutral-600" style={LEAD_STYLE}>
              Roughly in the order they happen. The first three usually move the phone more than anything that
              comes after them.
            </p>

            <ol className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {DELIVERABLES.map((d) => (
                <li key={d.n} className="flex flex-col rounded-2xl border bg-white p-6" style={{ borderColor: 'rgba(15,15,18,0.09)' }}>
                  <span className="font-fj-mono text-[0.8125rem] font-bold" style={linkStyle}>
                    {d.n}
                  </span>
                  <h3 className="fj-display mt-2 text-[1.075rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {d.title}
                  </h3>
                  <p className="mt-2.5 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-600">{d.body}</p>
                </li>
              ))}
            </ol>

            <p className="mt-8 max-w-[820px] font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
              Site speed and page builds sit with our{' '}
              <Link href="/services/web-design" className={LINK_CLASS} style={linkStyle}>
                web design team
              </Link>
              , and AI answer visibility with our{' '}
              <Link href="/services/ai-seo" className={LINK_CLASS} style={linkStyle}>
                AI SEO practice
              </Link>
              . If calls go unanswered at night in peak season, an{' '}
              <Link href="/services/ai-receptionist" className={LINK_CLASS} style={linkStyle}>
                AI receptionist
              </Link>{' '}
              can answer, book and pass urgent jobs to your on-call tech.
            </p>
          </div>
        </section>

        {/* ─── 7. MID-PAGE CTA ─────────────────────────────────────────── */}
        <section className="bg-white py-12">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <div className="grid grid-cols-1 items-center gap-6 rounded-2xl p-7 md:p-9 lg:grid-cols-[1.4fr_0.6fr]" style={{ background: GREEN_SOFT }}>
              <div>
                <h2 className="fj-display text-[1.45rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.02em' }}>
                  Want to know where you stand before the next season?
                </h2>
                <p className="mt-2 max-w-[640px] font-fj-body text-[1rem] leading-[1.6] text-fj-neutral-700">
                  Send your website and your main towns. We check your Business Profile categories, the map pack
                  for AC repair and furnace repair near you, and your emergency page on a phone, then send the
                  first three fixes.
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
            <p className={EYEBROW} style={linkStyle}>
              Who else you are looking at
            </p>
            <h2 className="fj-display mt-3.5 max-w-[800px] font-bold text-fj-ink" style={H2_STYLE}>
              What ranks for &ldquo;hvac seo&rdquo; today
            </h2>
            <p className="mt-4 max-w-[760px] font-fj-body font-medium text-fj-neutral-600" style={LEAD_STYLE}>
              We pulled the live US results on 24 November 2026 and read the top pages. HVAC already has real
              specialists. Here is what each one offers, so you can compare any agency, including us.
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

            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-2xl p-7 md:p-8" style={{ background: GREEN_SOFT }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">What we do differently</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'We plan on a seasonal calendar, publishing one season ahead rather than a flat monthly quota',
                    'We plan organic work around your Local Services Ads, so you do not pay twice for the same homeowner',
                    'We build the website as well as the search programme, so speed and page fixes ship',
                    'We treat AI answers as a target alongside the map pack',
                    'We will tell you when ads are the faster answer, even though we are not selling ads',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-ink">
                      <CheckCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border bg-white p-7 md:p-8" style={{ borderColor: 'rgba(15,15,18,0.12)' }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">Where we honestly stand</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'We are not an HVAC-only shop. If HVAC tenure is your only test, an HVAC-only agency has more of it',
                    'We publish no invented case study numbers and no testimonials we cannot stand behind',
                    'We do not guarantee rankings, because Google says no one can',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-neutral-700">
                      <CrossCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 9. FIT CHECK ────────────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className={EYEBROW} style={linkStyle}>
              Honest fit check
            </p>
            <h2 className="fj-display mt-3.5 max-w-[720px] font-bold text-fj-ink" style={H2_STYLE}>
              When HVAC SEO is the wrong thing to buy
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-2xl p-7 md:p-8" style={{ background: GREEN_SOFT }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">A strong fit</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'You serve the same towns year after year and want to own more of them',
                    'Your Local Services Ads cost per lead keeps climbing in peak weeks',
                    'You want more maintenance plan members, not only emergency calls',
                    'Your site lumps heating, cooling and installs onto one page',
                    'You can take on more jobs and someone answers the phone, including after hours',
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
                    'The season starts in two weeks and you have no pages. Run ads now, start SEO for next season',
                    'You want pages for towns your vans never reach',
                    'You expect guaranteed rankings or page one by a fixed date',
                    'Your schedule is full all year and you cannot add techs',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-neutral-700">
                      <CrossCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">
                  Not sure yet? Start with an{' '}
                  <Link href="/services/seo-audit" className={LINK_CLASS} style={linkStyle}>
                    SEO audit
                  </Link>{' '}
                  for a prioritised fix list.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 10. CITATIONS ───────────────────────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className={EYEBROW} style={linkStyle}>
              Check us against the source
            </p>
            <h2 className="fj-display mt-3.5 max-w-[760px] font-bold text-fj-ink" style={H2_STYLE}>
              Where the claims on this page come from
            </h2>
            <p className="mt-4 max-w-[720px] font-fj-body font-medium text-fj-neutral-600" style={LEAD_STYLE}>
              Each source below was opened and checked on 24 November 2026.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  src: 'ENERGY STAR',
                  title: 'Maintenance checklist',
                  body: 'ENERGY STAR advises checking the cooling system in spring and the heating system in fall, which is the timing our seasonal calendar follows.',
                  href: 'https://www.energystar.gov/saveathome/heating-cooling/maintenance-checklist',
                },
                {
                  src: 'Google Local Services Help',
                  title: 'Local Services Ads',
                  body: 'You pay only for leads related to your services. A Google Verified badge shows the business passed Google’s screening.',
                  href: 'https://support.google.com/localservices/answer/6224841',
                },
                {
                  src: 'Google Business Profile Help',
                  title: 'Service-area businesses',
                  body: 'Businesses that visit customers should hide their address, and the service area should not extend beyond about two hours of driving.',
                  href: 'https://support.google.com/business/answer/3038177',
                },
                {
                  src: 'Google Search Central',
                  title: 'Do you need an SEO?',
                  body: 'Google states that no one can guarantee a number one ranking on Google.',
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
                    style={linkStyle}
                  >
                    Read the source <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 11. WHO YOU WORK WITH ───────────────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: LAV_SOFT }}>
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative mx-auto w-full max-w-[480px]">
              <img
                src="/images/us/las-vegas/seo/card-rooftop-hvac-unit-service.webp"
                alt="Two HVAC technicians service an open rooftop air conditioning unit with gauges and a replacement filter"
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-2xl object-cover"
                style={{ boxShadow: '0 18px 40px rgba(40,30,90,0.18)' }}
              />
            </div>
            <div>
              <p className={EYEBROW} style={{ color: LAV }}>
                Who you actually work with
              </p>
              <h2 className="fj-display mt-3.5 font-bold text-fj-ink" style={H2_STYLE}>
                Diagnose first, then fix, same as a good service call
              </h2>
              <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                A good tech checks the thermostat, the filter and the breaker before quoting a new compressor.
                We work the same way: Business Profile, service area and emergency page before any blog plan.
                FactoryJet has served 500+ businesses since 2014, with 97% on-time delivery.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  { t: 'Founder-led analysis', s: 'The person who scopes the work does it' },
                  { t: 'Search and build in one team', s: 'We design and develop sites, so fixes ship' },
                  { t: 'Map pack, organic and AI answers', s: 'One plan for every place a homeowner looks' },
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
              <div className="mt-6">
                <ModalCTAButton label="Talk to the Founder" region="us" modalVariant="seo" btnVariant="primary-light" />
              </div>
            </div>
          </div>
        </section>

        {/* ─── 12. RELATED ─────────────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className={EYEBROW} style={linkStyle}>
              Where to go next
            </p>
            <h2 className="fj-display mt-3.5 max-w-[700px] font-bold text-fj-ink" style={H2_STYLE}>
              Other trades and related services
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
              {[
                { label: 'Home services SEO', href: '/services/home-services-seo', desc: 'The hub: what every trade programme shares, with pages for each trade.' },
                { label: 'Plumber SEO', href: '/services/plumber-seo', desc: 'Emergency plumbing, water heaters and drain work. Many HVAC companies also do plumbing.' },
                { label: 'Electrician SEO', href: '/services/electrician-seo', desc: 'Panel upgrades, EV chargers and generators for residential and commercial electricians.' },
                { label: 'Roofing SEO', href: '/services/roofing-seo', desc: 'Storm-driven demand, insurance claims and financing for roofing contractors.' },
                { label: 'Local SEO', href: '/services/local-seo', desc: 'Map pack and Business Profile work for any local business.' },
                { label: 'HVAC SEO in Colorado Springs', href: '/colorado-springs/seo', desc: 'Our local market notes for one of the cities where HVAC SEO searches reach us most.' },
              ].map((svc) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="flex min-h-[160px] flex-col rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1"
                  style={{ border: '1px solid rgba(15,15,18,0.10)', background: CREAM }}
                >
                  <h3 className="fj-display text-[1.15rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {svc.label}
                  </h3>
                  <p className="mt-2 flex-1 font-fj-body text-[0.9062rem] leading-[1.55] text-fj-neutral-600">{svc.desc}</p>
                  <span className="mt-5 font-fj-body text-[0.8125rem] font-bold" style={linkStyle}>
                    Explore &rarr;
                  </span>
                </Link>
              ))}
            </div>
            <p className="mt-6 font-fj-body text-[0.8125rem] text-fj-neutral-600">
              Search volumes from DataForSEO (United States), pulled 24 November 2026. Competitor positions are a
              snapshot from the same date and will move.
            </p>
          </div>
        </section>

        {/* ─── 13. FAQ ─────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="HVAC SEO FAQ"
          headline="The questions HVAC owners ask about SEO"
          lead="Twenty-six answers on how HVAC SEO works, the map pack, Local Services Ads, seasonal content, what it costs on the market, and AI search."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ─── 14. FINAL CTA (the one dark section) ────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="BEFORE THE NEXT SEASON"
          headline="Find out what is keeping your HVAC company out of the map pack"
          sub="Book a call with the founder. We review your Business Profile, service area, emergency pages and Local Services Ads coverage against the top three HVAC companies in your closest towns, then tell you plainly what to fix first."
          primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See home services SEO', href: '/services/home-services-seo' }}
          objectionHandler="Founder-led. No guaranteed rankings, no invented case studies, and you own the site and the plan."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
