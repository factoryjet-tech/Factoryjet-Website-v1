import type { Metadata } from 'next';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import SeoCityLinksUS from '@/components/v2/SeoCityLinksUS';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import FinalCTA from '@/components/v2/FinalCTA';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';

/* ─────────────────────────────────────────────────────────────────────────────
   /las-vegas/seo :: Las Vegas local-SEO city page. Built 2026-08-12.

   Intent owned by THIS page:
     seo agency las vegas (590 a month, difficulty 13) and its close variants
     (best seo agency las vegas, seo agency las vegas reviews).

   The local angle, and the reason this page is not a template:
     Las Vegas search splits into two audiences that behave nothing alike.
     Roughly 38.5m visitors a year search on a phone within a few blocks of
     where they are standing, with no local knowledge at all. Around 2.4m
     residents search the way any suburban American searches. On top of that
     the Strip is not inside the City of Las Vegas, it sits in unincorporated
     Clark County, which quietly breaks a lot of address and service-area
     setups. Convention demand (about 6m delegates a year) arrives in bursts
     tied to a published show calendar rather than as a flat curve.

   Build rules honoured: no em dashes, no currency figures anywhere, plain
   <img> only, FAQ from @/components/v2/FAQ, FinalCTA (never GetFreeQuoteCTA),
   exactly one dark section (the closing FinalCTA), inline canonical and
   alternates (no hreflangMap import), no shared files touched.

   Schema: WebPage + speakable, Service, ProfessionalService (no invented
   street address), ItemList (the nine fixes), ItemList (real SERP rivals),
   FAQPage derived from FAQ_ITEMS, BreadcrumbList. Every const below is
   rendered in a script tag at the top of the component.

   External citations, all curl-verified 200 on 2026-08-12 with the claim
   present in the fetched HTML:
     clarkcountynv.gov/residents/about_clark_county/ (Strip jurisdiction, 2.4m)
     lvcva.com/stats-and-facts/ (38.5m visitors, 6.0m convention, 150,300 rooms)
     support.google.com/business/answer/7091 (relevance / distance / prominence)
     developers.google.com/search/docs/appearance/ai-features (no special AI markup)
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const PAGE_URL = 'https://factoryjet.com/las-vegas/seo';

const ORANGE = '#F05A28';
const ORANGE_DARK = '#B23E13';
const CREAM = '#FAFAF7';
const PEACH = '#FAEDE5';
const GREEN_SOFT = '#DCEFE6';
const LAV_SOFT = '#ECEAFB';
const LINE = 'rgba(15,15,18,0.10)';

/* ─────────────────────────────────────────────────────────────────────────────
   Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'SEO Agency Las Vegas | Local SEO for Visitors and Residents | FactoryJet',
  description:
    'A Las Vegas SEO agency built for a city with two audiences: 38.5 million visitors searching on a phone and 2.4 million residents searching from home. Free audit, month to month, founder-led.',
  keywords: [
    'seo agency las vegas',
    'las vegas seo',
    'seo company las vegas',
    'local seo las vegas',
    'las vegas seo services',
    'best seo agency las vegas',
    'seo henderson nv',
    'summerlin seo',
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'en-US': PAGE_URL,
      'x-default': PAGE_URL,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Agency Las Vegas | Local SEO for Visitors and Residents | FactoryJet',
    description:
      'Las Vegas SEO for a city where visitors and residents search for the same business in completely different ways. Free audit, month to month, no long contract.',
    url: PAGE_URL,
    locale: 'en_US',
    images: [
      {
        url: 'https://factoryjet.com/images/us/las-vegas-seo/hero.webp',
        width: 1440,
        height: 864,
        alt: 'Two marketing specialists reviewing a local map with location pins in a bright Las Vegas office',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency Las Vegas | FactoryJet',
    description:
      'Las Vegas SEO for a city where visitors and residents search for the same business in completely different ways.',
    images: ['https://factoryjet.com/images/us/las-vegas-seo/hero.webp'],
  },
  robots: { index: true, follow: true },
};

/* ─────────────────────────────────────────────────────────────────────────────
   Content data
───────────────────────────────────────────────────────────────────────────── */

const TRUST: { v: string; k: string }[] = [
  { v: 'Month to month', k: 'cancel with thirty days notice' },
  { v: 'Free audit', k: 'yours to keep, hired or not' },
  { v: '7-day kickoff', k: 'not a six-week onboarding' },
  { v: 'Founder-led', k: 'you talk to the person doing the work' },
];

/* Real Las Vegas districts. Written for people who drive these roads. */
const DISTRICTS: { tag: string; title: string; body: string; tint: string; accent: string }[] = [
  {
    tag: 'The Strip, Paradise and Winchester',
    title: 'Where your address is not what you think it is',
    tint: '#FFFFFF',
    accent: ORANGE_DARK,
    body: 'Most of Las Vegas Boulevard sits in unincorporated Clark County, in the townships of Paradise and Winchester, not inside the City of Las Vegas. Your mail says Las Vegas, your jurisdiction does not. That gap breaks listings quietly: directories disagree on your city and your service area gets drawn around the wrong centre point.',
  },
  {
    tag: 'Downtown and Fremont',
    title: 'Two crowds, eleven seconds each',
    tint: PEACH,
    accent: ORANGE_DARK,
    body: 'Fremont Street, Fremont East and the Arts District run on discovery. Somebody under the canopy opens a phone, types a category, and picks from the first three results. Photos, correct hours (including the ones that shift on show weekends), menu markup and fresh reviews decide that.',
  },
  {
    tag: 'Summerlin and the northwest',
    title: 'Suburban search, high commercial value',
    tint: '#FFFFFF',
    accent: ORANGE_DARK,
    body: 'Summerlin, Centennial Hills and the 215 corridor behave like affluent suburbs anywhere: dentists, orthodontists, med spas, veterinary, private schools, home services, wealth advisers. People search from home, compare a few options, read reviews properly, then call. The most winnable pocket in the valley for professional practices: the head terms are contested, the neighbourhood terms are not.',
  },
  {
    tag: 'Henderson, Green Valley and Anthem',
    title: 'A separate city that Google treats separately',
    tint: LAV_SOFT,
    accent: '#3C34A8',
    body: 'Henderson is the second largest city in Nevada, not a Las Vegas suburb, and Google knows it. Ranking in Las Vegas does not get you found in Green Valley Ranch or Anthem. If you serve both, you need pages that genuinely differ, not one page with the city name swapped.',
  },
  {
    tag: 'North Las Vegas and Apex',
    title: 'Logistics, trades and B2B buyers',
    tint: '#FFFFFF',
    accent: ORANGE_DARK,
    body: 'Warehousing, distribution, manufacturing and the trades that serve them. Buyers here search during working hours, on a desktop, using capability language rather than near me. The winning page says what you make or move, what sizes and certifications, how fast, and who to call. Reviews matter less here than being findable for the exact phrase a procurement person types.',
  },
  {
    tag: 'Spring Valley, Chinatown and the southwest',
    title: 'Where multilingual search is normal',
    tint: GREEN_SOFT,
    accent: '#0A4A38',
    body: 'The Spring Mountain corridor and the southwest are among the most linguistically mixed parts of the valley. A meaningful share of searches here are not in English, and the winners are the businesses whose profile category, service names and reviews reflect how their customers actually write. Most agencies never check. It takes an afternoon and it changes what you build.',
  },
];

/* The listicle. Numbered, scannable, extraction-friendly. */
const FIXES: { title: string; body: string }[] = [
  {
    title: 'Settle which city you are actually in',
    body: 'Paradise, Winchester, Las Vegas, Henderson or North Las Vegas. Pick the truth, then make it identical on your site, your Google Business Profile and every directory. Inconsistent city data is the most common problem we find on valley businesses.',
  },
  {
    title: 'Choose the most specific primary category',
    body: 'Google matches your profile to a search largely through category. Wedding chapel beats event venue. Personal injury attorney beats law firm. One field, enormous effect, and most profiles have not been revisited since the day they were claimed.',
  },
  {
    title: 'Set hours that survive a show week',
    body: 'Vegas hours move: convention weeks, holiday weekends, summer. Wrong hours produce a bad first impression and a review that mentions it. Special hours take ten minutes to set and stop a whole category of complaint.',
  },
  {
    title: 'Add photos that were taken this year',
    body: 'Discovery here is visual. Real interior, exterior, team and product photos beat stock every time, and they keep working. Refresh them on a schedule instead of once at launch.',
  },
  {
    title: 'Build a review habit, not a review campaign',
    body: 'A steady trickle of genuine reviews beats a burst followed by silence. Ask at the moment the customer is happiest, make it one tap, and reply to every review including the awkward ones.',
  },
  {
    title: 'Fix the site before you write for it',
    body: 'Speed on a hotel wifi connection, clean crawling, working structured data. A slow site will not hold a ranking however good the writing is. This is where our free SEO audit starts.',
  },
  {
    title: 'Write one honest page per place you serve',
    body: 'Las Vegas, Henderson, Summerlin, North Las Vegas. Different content, different examples, different landmarks. Google has been good at spotting cloned location pages for years, and a thin clone drags down the pages around it.',
  },
  {
    title: 'Separate the visitor page from the resident page',
    body: 'A visitor wants hours, distance, parking and a phone number in under ten seconds. A resident wants proof and options. One page cannot lead with both. Two pages can, and they rank for different things.',
  },
  {
    title: 'Get ready to be quoted, not just ranked',
    body: 'Answer-first writing, clear entity data and structured data that matches the visible text, so ChatGPT, Perplexity and Google AI Overviews can name you. Our AI visibility checker shows whether any of them currently do.',
  },
];

/* Real page-one rivals for "seo agency las vegas", pulled live 2026-08-12.
   Every detail below was read off the named site itself. Named fairly, no
   disparagement, and our own position stated openly further down the page. */
const RIVALS: { domain: string; role: string; goodAt: string }[] = [
  {
    domain: 'thriveagency.com',
    role: 'Holds position 1, national operator with a downtown Las Vegas office',
    goodAt: 'Thrive lists a Las Vegas address on 4th Street and runs one of the widest service menus in the industry, from technical SEO to paid media and conversion work. If you want one vendor for every channel, they are a fair call. The trade is scale: the strategist who wins the pitch is rarely the person on your monthly call.',
  },
  {
    domain: 'webmarketsonline.com',
    role: 'Position 3, Boise home office with a Las Vegas Nevada office',
    goodAt: 'WebMarkets runs SEO, paid media, creative and social under one roof, with real depth in legal and government-adjacent work. Their own site lists Boise as the home office and Las Vegas as a second location, which is worth knowing when you ask who will be in the room.',
  },
  {
    domain: 'logicalposition.com',
    role: 'Position 4, ranks with a Las Vegas local SEO packages page',
    goodAt: 'Logical Position is headquartered in Lake Oswego, Oregon and is first a serious paid media house, a Google Ads and Microsoft Advertising partner, with SEO alongside. If most of your growth will come from ads and you want SEO in the same account, they are a sensible shortlist entry.',
  },
  {
    domain: 'seo.co',
    role: 'Position 6, national SEO and link authority specialist',
    goodAt: 'SEO.co has run search campaigns since 2010 and now leads with technical SEO plus generative engine optimisation, including white label work for other agencies. Their published addresses are Seattle and West Palm Beach, so treat the Las Vegas page as a market page rather than a local office.',
  },
  {
    domain: 'helium-seo.com',
    role: 'Position 9, data-forward challenger serving many cities',
    goodAt: 'Helium was founded in Cincinnati in 2016 and services a long list of metros including Las Vegas. They lean hard on testing, which suits a business with enough traffic for an experiment to produce a readable result. Below a certain volume, fundamentals tell you more than tests do.',
  },
  {
    domain: 'biglasvegasseocompany.com',
    role: 'Position 11, genuinely local, downtown address',
    goodAt: 'One of the few names here with a real Las Vegas street address, on 4th Street downtown. If you want somebody you can drive to and meet in person, that is a legitimate reason to shortlist a local shop. We will not pretend proximity counts for nothing.',
  },
];

const SERVICES: { title: string; body: string; href: string; label: string }[] = [
  {
    title: 'Local SEO and the map pack',
    body: 'Google Business Profile, categories, services, photos, posts, review growth, citations and duplicate cleanup across the valley.',
    href: '/services/local-seo',
    label: 'Local SEO',
  },
  {
    title: 'Technical SEO and site speed',
    body: 'Core Web Vitals, crawl and index control, structured data that matches the visible page. The floor, not an upsell.',
    href: '/services/seo-audit',
    label: 'Free SEO audit',
  },
  {
    title: 'AI search visibility (GEO)',
    body: 'Answer-first content and entity data so AI answer engines can name your business instead of a competitor.',
    href: '/services/ai-seo',
    label: 'AI SEO',
  },
  {
    title: 'Smaller budgets, same discipline',
    body: 'A narrower scope built around your profile, your reviews and three or four pages that match what people really type.',
    href: '/services/small-business-seo',
    label: 'Small business SEO',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ. Grounded in live People-Also-Ask for this query set, phrased the way
   people actually type. FAQPage schema is derived from THIS array below.
───────────────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'cost', label: 'What it costs' },
  { key: 'choosing', label: 'Choosing an agency' },
  { key: 'local', label: 'Local SEO in Las Vegas' },
  { key: 'ai', label: 'SEO and AI' },
  { key: 'diy', label: 'Doing it yourself' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'cost',
    question: 'How much does an SEO agency charge in Las Vegas?',
    answer:
      'It depends on what you are trying to outrank, and anyone who quotes before opening your site is guessing. The drivers are how competitive your category is, how many places you serve, how much technical repair comes first, and how much content gets made each month. We work month to month, starting with a free audit.',
  },
  {
    category: 'cost',
    question: 'How much should a small business spend on SEO?',
    answer:
      'Less than it brings back. Work out what one new customer is worth over a year, then ask how many extra customers a month would cover the work with room to spare. If the answer is a handful, the scope fits. If it is dozens, start narrower: your profile, your reviews, three good pages.',
  },
  {
    category: 'cost',
    question: 'How much does local SEO cost in the USA, and is Las Vegas different?',
    answer:
      'Published averages blend jobs with nothing in common, so they are close to useless. A single-location dentist in Summerlin and a nine-location home services company are both doing local SEO, and it is not the same work. Ask what happens each month, who does it, and how you will know it worked.',
  },
  {
    category: 'cost',
    question: 'Is an SEO agency worth it, or should I just run ads?',
    answer:
      'Ads rent attention, search earns it. Ads win when you need leads this week or you are testing a new offer. SEO wins when you want a lead source that keeps working after you stop paying. Most Las Vegas businesses eventually run both. Start with whichever one you can measure honestly.',
  },
  {
    category: 'choosing',
    question: 'Who has the best SEO services in Las Vegas?',
    answer:
      'There is no single best, only best for your situation. The filter is the same for everyone: a written scope you read before signing, month-to-month terms, your accounts staying yours, and reporting tied to calls and booked jobs rather than ranking screenshots. Run every agency through it, including us.',
  },
  {
    category: 'choosing',
    question: 'What does an SEO agency actually do all month?',
    answer:
      'Four buckets. Technical work on the site: speed, crawling, structured data. Local work on your Business Profile, citations and reviews. Content that matches real searches. And authority work, meaning mentions and links from sites that matter. A month with none of those four is a month you paid for a report.',
  },
  {
    category: 'choosing',
    question: 'How do I check a Las Vegas SEO company before I sign anything?',
    answer:
      'Ask five things. Who physically does the work. What lands on my account each month. Are technical fixes included or billed separately. What happens to my content if I leave. And what would make you tell me SEO is the wrong spend right now. The last one separates a consultant from a salesperson.',
  },
  {
    category: 'choosing',
    question: 'Do I need an agency that is physically in Las Vegas?',
    answer:
      'Not for the work itself. Several of the agencies ranking for las vegas seo are headquartered in Oregon, Ohio, Idaho or Washington. What you do need is somebody who knows the Strip is not in the City of Las Vegas, that Henderson is its own city, and that show weeks move your demand.',
  },
  {
    category: 'choosing',
    question: 'Can you guarantee number one rankings in Las Vegas?',
    answer:
      'No, and anyone who does is guessing with your money. Google states plainly that there is no way to request or pay for a better local ranking. What we guarantee is the work, a clear record of what we did, and your right to leave at the end of any month.',
  },
  {
    category: 'local',
    question: 'What is local SEO, and how is it different from regular SEO?',
    answer:
      'Local SEO is how you show up when somebody nearby searches for what you sell, mostly in Google Maps and the three-result map pack. Regular SEO ranks a page anywhere. Local runs on your Business Profile, reviews and distance. Regular runs on pages, links and depth. Most valley businesses need both.',
  },
  {
    category: 'local',
    question: 'My business has a Las Vegas address but sits on the Strip. Does that matter?',
    answer:
      'More than people expect. Clark County has jurisdiction over the Strip, and much of Las Vegas Boulevard sits in the unincorporated townships of Paradise and Winchester rather than the city itself. Your post says Las Vegas either way, but directories disagree, and inconsistent city data is a common reason a profile underperforms.',
  },
  {
    category: 'local',
    question: 'How does Google decide who gets into the Las Vegas map pack?',
    answer:
      'Google names three factors: relevance, distance and prominence. Relevance is how well your profile matches what was typed, which is why category and services matter so much. Distance is how far you are from the searcher, and you cannot change it. Prominence is how well known you are. Two of the three are yours.',
  },
  {
    category: 'local',
    question: 'How do I get found by visitors rather than locals?',
    answer:
      'Visitors search from a phone, close to where they are standing, with no local knowledge, and decide in seconds. So: correct hours, current photos, a category matching the words a stranger would use, parking spelled out, and a phone number one tap away. Write it for somebody who arrived yesterday.',
  },
  {
    category: 'local',
    question: 'How long does it take for SEO to kick in here?',
    answer:
      'Expect early movement in three to six months and stable map pack positions in six to twelve. Profile and review work often shows sooner, sometimes within weeks. Content and authority are slower and compound. We win the low-competition searches first, so leads arrive while the bigger terms are still maturing.',
  },
  {
    category: 'local',
    question: 'Is local SEO worth it in a city this size?',
    answer:
      'You are not trying to beat the internet. You are trying to beat the dozen or so businesses in your category within a few miles of you, for three map pack slots. That is a fight a normal owner can win, which is not true of most channels you could spend the same money on.',
  },
  {
    category: 'local',
    question: 'Do you work with hospitality, restaurants and event businesses?',
    answer:
      'Yes, and they are the sharpest fit for the visitor side of this city. Restaurants, bars, chapels, tours, transport, photographers and salons all live on discovery inside a very short window. The work is unglamorous: category accuracy, fresh photos, correct hours, review velocity, and a page that answers where and when.',
  },
  {
    category: 'local',
    question: 'What about businesses that sell to conventions and trade shows?',
    answer:
      'Different job entirely. Convention demand arrives in bursts around published show dates, from people who are not from here and will not be here next week. If you rent, print, staff, cater, build booths or fix technology for exhibitors, you need to be ranked well before the show, not during it.',
  },
  {
    category: 'ai',
    question: 'Is SEO dead now that AI answers everything?',
    answer:
      'No, the destination changed. People still search, they just as often read a summary or ask an assistant instead of clicking. Google states there are no additional requirements or special optimisations needed to appear in AI Overviews, and no special markup. The work that gets you cited is the work that got you ranked.',
  },
  {
    category: 'ai',
    question: 'Will SEO be replaced by AI, and what is replacing it?',
    answer:
      'Nothing is replacing it, the surface is widening. The phrase you will hear is GEO, generative engine optimisation, which just means making your content easy for an answer engine to quote correctly. In practice: answer-first writing, structured data that matches the visible text, and being the clearest source on a topic.',
  },
  {
    category: 'ai',
    question: 'Can ChatGPT do my SEO for me?',
    answer:
      'It does parts of it well: drafting, outlining, clustering keywords, writing schema. It cannot verify what is true about your market, cannot log into your Business Profile and fix a wrong category, and will happily invent a statistic. As an assistant it saves hours. As a strategy it produces pages that rank for nothing.',
  },
  {
    category: 'diy',
    question: 'Can I do local SEO myself?',
    answer:
      'The first chunk, yes, and you should. Claim and fully complete your Google Business Profile, make your name, address and phone identical everywhere, add real photos, set special hours, and ask every happy customer for a review. It gets hard at technical repair and at outranking an established competitor.',
  },
  {
    category: 'diy',
    question: 'What is the 80/20 rule in SEO?',
    answer:
      'The idea that a small slice of the work produces most of the result. In local SEO that slice is usually three things: a complete and correctly categorised Business Profile, a steady flow of genuine reviews, and a fast site that says plainly what you do and where you do it.',
  },
];

const OTHER_CITIES: { name: string; path: string }[] = [
  { name: 'Denver SEO', path: '/denver/seo' },
  { name: 'Austin SEO', path: '/austin/seo' },
  { name: 'Charlotte SEO', path: '/charlotte/seo' },
  { name: 'Tampa SEO', path: '/tampa/seo' },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD. Every const here is rendered in a script tag inside the component.
───────────────────────────────────────────────────────────────────────────── */

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'SEO Agency Las Vegas: Local SEO for Visitors and Residents',
  description:
    'How SEO works in Las Vegas, where roughly 38.5 million visitors and 2.4 million residents search for the same business in completely different ways, who currently ranks for seo agency las vegas, and where FactoryJet fits.',
  inLanguage: 'en-US',
  dateModified: '2026-08-12',
  lastReviewed: '2026-08-12',
  isPartOf: { '@type': 'WebSite', name: 'FactoryJet', url: 'https://factoryjet.com' },
  about: { '@type': 'Thing', name: 'Local search engine optimization in Las Vegas, Nevada' },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: 'https://factoryjet.com/images/us/las-vegas-seo/hero.webp',
    width: 1440,
    height: 864,
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#answer-first', '#two-las-vegases'],
  },
  reviewedBy: { '@type': 'Person', name: 'Bhavesh Barot', jobTitle: 'Founder, FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': ['ProfessionalService', 'LocalBusiness'],
  '@id': `${PAGE_URL}#business`,
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  image: 'https://factoryjet.com/images/us/las-vegas-seo/hero.webp',
  description:
    'Founder-led SEO agency serving Las Vegas, Henderson, North Las Vegas, Summerlin, Paradise and Spring Valley. Local SEO, technical SEO and AI search visibility, month to month.',
  areaServed: [
    { '@type': 'City', name: 'Las Vegas', containedInPlace: { '@type': 'State', name: 'Nevada' } },
    { '@type': 'City', name: 'Henderson', containedInPlace: { '@type': 'State', name: 'Nevada' } },
    { '@type': 'City', name: 'North Las Vegas', containedInPlace: { '@type': 'State', name: 'Nevada' } },
    { '@type': 'Place', name: 'Summerlin, Nevada' },
    { '@type': 'Place', name: 'Paradise, Nevada' },
    { '@type': 'Place', name: 'Spring Valley, Nevada' },
    { '@type': 'Place', name: 'Boulder City, Nevada' },
  ],
  knowsAbout: [
    'Local SEO',
    'Google Business Profile optimisation',
    'Technical SEO',
    'Generative engine optimisation',
    'Hospitality and convention search demand',
  ],
  founder: { '@type': 'Person', name: 'Bhavesh Barot' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'SEO Services in Las Vegas, Nevada',
  serviceType:
    'SEO agency Las Vegas / Local SEO Las Vegas / Google Business Profile optimisation / Technical SEO / AI search visibility',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: [
    { '@type': 'City', name: 'Las Vegas', containedInPlace: { '@type': 'State', name: 'Nevada' } },
    { '@type': 'City', name: 'Henderson', containedInPlace: { '@type': 'State', name: 'Nevada' } },
    { '@type': 'City', name: 'North Las Vegas', containedInPlace: { '@type': 'State', name: 'Nevada' } },
  ],
  audience: {
    '@type': 'BusinessAudience',
    name: 'Las Vegas valley small and medium businesses, hospitality operators and convention suppliers',
  },
  description:
    'Local and technical SEO for businesses across the Las Vegas valley, built around a market that serves both a very large visitor population and a resident metro of more than two million people.',
  url: PAGE_URL,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Las Vegas SEO services',
    itemListElement: SERVICES.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title, description: s.body },
    })),
  },
};

const fixesListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${PAGE_URL}#fixes`,
  name: 'Nine things we fix first for a Las Vegas business',
  description:
    'The nine pieces of work that move a Las Vegas valley business into local search results, in the order they normally happen.',
  numberOfItems: FIXES.length,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: FIXES.map((f, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: f.title,
    description: f.body,
  })),
};

const rivalListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${PAGE_URL}#rivals`,
  name: 'Agencies ranking for seo agency las vegas',
  description:
    'Sites holding page one of Google for the query seo agency las vegas as measured on 12 August 2026, with what each is genuinely good at.',
  numberOfItems: RIVALS.length,
  itemListElement: RIVALS.map((r, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: r.domain,
    description: r.goodAt,
  })),
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${PAGE_URL}#faq`,
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'SEO Services', item: 'https://factoryjet.com/services/seo' },
    { '@type': 'ListItem', position: 3, name: 'Las Vegas SEO', item: PAGE_URL },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function LasVegasSeoPage() {
  return (
    <>
      <script
        id="lv-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="lv-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        id="lv-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="lv-fixes-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fixesListSchema) }}
      />
      <script
        id="lv-rivals-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rivalListSchema) }}
      />
      <script
        id="lv-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="lv-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader />

      <main style={{ backgroundColor: CREAM }}>
        {/* ─── 1. HERO ─────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 py-14 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:py-16">
            <div>
              <p className="fj-eyebrow">SEO Agency &middot; Las Vegas, Nevada</p>
              <h1
                className="fj-display mt-5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(2.2rem, 4.8vw, 3.6rem)', lineHeight: 1.06, letterSpacing: '-0.03em' }}
              >
                Las Vegas SEO for a city with{' '}
                <span style={{ color: ORANGE }}>two completely different customers</span>
              </h1>
              <p
                className="mt-6 max-w-[560px] font-fj-body font-medium text-fj-neutral-600"
                style={{ fontSize: '1.125rem', lineHeight: 1.62 }}
              >
                One is standing on a sidewalk with a phone, three days into a trip, and will decide in
                seconds. The other lives in Summerlin or Henderson and researches you properly before
                calling. Most agencies write one page for both and lose both.{' '}
                <b className="font-bold text-fj-ink">We build for each of them separately.</b>
              </p>
              <HeroInlineForm region="us" source="us_las_vegas_seo_hero" submitLabel="Get my free SEO audit" />
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
                <Link
                  href="/services/local-seo"
                  className="font-fj-body text-[0.9375rem] font-semibold underline underline-offset-4"
                  style={{ color: ORANGE_DARK }}
                >
                  Just need the map pack fixed?
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px]">
              <div
                className="overflow-hidden rounded-3xl border"
                style={{ borderColor: LINE, boxShadow: '0 24px 60px rgba(20,18,12,0.12)' }}
              >
                <img
                  src="/images/us/las-vegas-seo/hero.webp"
                  alt="Two marketing specialists reviewing a street map with location pins on a laptop in a bright Las Vegas office with desert mountains through the window"
                  width={1440}
                  height={864}
                  fetchPriority="high"
                  decoding="async"
                  className="block h-auto w-full object-cover"
                />
              </div>

              <div
                className="relative z-10 mx-4 -mt-10 rounded-2xl border bg-white p-5 sm:mx-6 sm:p-6"
                style={{ borderColor: LINE, boxShadow: '0 18px 44px rgba(20,18,12,0.10)' }}
              >
                <span className="font-fj-mono text-[10px] uppercase tracking-[0.12em] text-fj-neutral-400">
                  What the Las Vegas search results look like today
                </span>
                <ul className="mt-3 space-y-2.5">
                  {[
                    { k: 'seo agency las vegas', v: '590 searches a month', d: 'difficulty 13' },
                    { k: 'page-one slots that are directories or roundups', v: '4 of 12', d: 'not agencies' },
                    { k: 'page-one agencies headquartered outside Nevada', v: '4 of the 6 we opened', d: 'checked on their own sites' },
                  ].map((row) => (
                    <li
                      key={row.k}
                      className="flex items-baseline justify-between gap-3 border-t pt-2.5 first:border-t-0 first:pt-0"
                      style={{ borderColor: 'rgba(15,15,18,0.08)' }}
                    >
                      <span className="font-fj-body text-[0.875rem] font-bold text-fj-ink">{row.k}</span>
                      <span className="shrink-0 text-right font-fj-mono text-[0.6875rem] text-fj-neutral-600">
                        {row.v}
                        <small className="ml-2 block sm:inline" style={{ color: ORANGE_DARK }}>
                          {row.d}
                        </small>
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-fj-body text-[0.75rem] text-fj-neutral-600">
                  Volume and difficulty from DataForSEO, August 2026. Difficulty runs 0 to 100, so 13 is
                  genuinely winnable. Page-one make-up read off the live results the same week.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. ANSWER-FIRST ─────────────────────────────────────────── */}
        <section id="answer-first" className="pb-12 md:pb-16">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <div
              className="rounded-2xl bg-white p-7 md:p-9"
              style={{ borderLeft: `5px solid ${ORANGE}`, boxShadow: '0 12px 34px rgba(20,18,12,0.06)' }}
            >
              <p className="font-fj-mono text-[11px] uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
                Short answer
              </p>
              <h2
                id="two-las-vegases"
                className="fj-display mt-3 text-[1.35rem] font-bold text-fj-ink"
                style={{ letterSpacing: '-0.02em' }}
              >
                What does a Las Vegas SEO agency actually do?
              </h2>
              <p className="mt-3 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                <b className="text-fj-ink">
                  A Las Vegas SEO agency gets your business found by people searching in this valley
                </b>
                : the Google map pack, the regular results, and now AI answers. In Las Vegas that means
                serving two different searchers, roughly 38.5 million visitors a year and about 2.4 million
                residents, who look for the same business in completely different ways.
              </p>
              <p className="mt-4 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                The work itself splits four ways. Your{' '}
                <Link href="/services/local-seo" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                  Google Business Profile and local listings
                </Link>
                , which is what actually decides the three-result map pack. The technical condition of your
                site, which is where a free{' '}
                <Link href="/services/seo-audit" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                  SEO audit
                </Link>{' '}
                starts, because a slow site will not hold a ranking however good the writing is. Pages that
                match what people here genuinely type. And{' '}
                <Link href="/services/ai-seo" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                  AI SEO
                </Link>
                , the structured data and answer-first writing that lets ChatGPT, Perplexity and Google AI
                Overviews quote you instead of a competitor. Our free{' '}
                <Link href="/ai-visibility-checker" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                  AI visibility checker
                </Link>{' '}
                shows whether those engines currently name you at all.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 3. TRUST ROW ────────────────────────────────────────────── */}
        <section className="border-y bg-white py-7" style={{ borderColor: LINE }}>
          <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-6 px-6 md:px-8 lg:grid-cols-4">
            {TRUST.map((t) => (
              <div key={t.v}>
                <p className="fj-display text-[1.0625rem] font-bold text-fj-ink">{t.v}</p>
                <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600">{t.k}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 4. WHY LAS VEGAS SEARCH IS DIFFERENT ────────────────────── */}
        <section className="py-14 md:py-20">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="fj-eyebrow">Why this market is not like other cities</p>
              <h2
                className="fj-display mt-3.5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.7rem)', lineHeight: 1.08, letterSpacing: '-0.025em' }}
              >
                Two audiences, one set of search results
              </h2>
              <p className="mt-4 max-w-[640px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                Las Vegas took in about{' '}
                <a
                  href="https://www.lvcva.com/stats-and-facts/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="font-semibold underline underline-offset-2"
                  style={{ color: ORANGE_DARK }}
                >
                  38.5 million visitors in 2025, including 6.0 million convention attendees
                </a>
                , across roughly 150,300 hotel rooms. At the same time,{' '}
                <a
                  href="https://www.clarkcountynv.gov/residents/about_clark_county/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="font-semibold underline underline-offset-2"
                  style={{ color: ORANGE_DARK }}
                >
                  Clark County serves more than 2.4 million residents
                </a>
                , a million of whom live in unincorporated areas where the county provides the services a
                city normally would.
              </p>
              <p className="mt-4 max-w-[640px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                Those two groups do not search alike. A visitor types a category and a landmark, from a
                phone, within a few blocks of where they are standing, and picks one of the first three
                results. A resident types a category and a suburb, compares options, reads reviews, and calls
                two days later. Different words, different intent, different winning page.
              </p>
              <p className="mt-4 max-w-[640px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                Then there is the calendar. Convention demand arrives in bursts around published show dates.
                If you sell to exhibitors, your demand has a shape you can read months ahead, and ranking
                during the show is already too late. Almost nobody plans for it.
              </p>
              <div className="mt-8">
                <ModalCTAButton
                  label="Get your free Las Vegas SEO audit"
                  region="us"
                  modalVariant="seo"
                  btnVariant="primary-light"
                />
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[520px]">
              <img
                src="/images/us/las-vegas-seo/conventions.webp"
                alt="Two exhibition staff setting up a trade show booth on the floor of a large bright Las Vegas convention hall"
                width={1264}
                height={848}
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-2xl border object-cover"
                style={{ borderColor: LINE, boxShadow: '0 18px 44px rgba(20,18,12,0.09)' }}
              />
            </div>
          </div>
        </section>

        {/* ─── 5. DISTRICTS ────────────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="fj-eyebrow">The valley, district by district</p>
            <h2
              className="fj-display mt-3.5 max-w-[820px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.7rem)', lineHeight: 1.08, letterSpacing: '-0.025em' }}
            >
              Las Vegas is not one market. It is about six of them.
            </h2>
            <p className="mt-4 max-w-[700px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Search demand splits along the same lines the valley does. A chapel on Fremont and an
              orthodontist in Summerlin are both doing local SEO, and almost nothing overlaps. Here is how
              we read the map before writing a page.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {DISTRICTS.map((d) => (
                <div
                  key={d.tag}
                  className="rounded-2xl border p-7"
                  style={{ background: d.tint, borderColor: LINE }}
                >
                  <span className="font-fj-mono text-[0.8125rem] font-bold" style={{ color: d.accent }}>
                    {d.tag}
                  </span>
                  <h3 className="fj-display mb-2 mt-2 text-[1.125rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {d.title}
                  </h3>
                  <p className="font-fj-body text-[0.9375rem] font-medium leading-[1.62] text-fj-neutral-600">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 6. LISTICLE ─────────────────────────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: PEACH }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="fj-eyebrow">First ninety days</p>
            <h2
              className="fj-display mt-3.5 max-w-[820px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.7rem)', lineHeight: 1.08, letterSpacing: '-0.025em' }}
            >
              Nine things we fix first for a Las Vegas business
            </h2>
            <p className="mt-4 max-w-[700px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              In this order, because each one makes the next one work better. The first five you can do yourself.
            </p>

            <ol className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {FIXES.map((f, i) => (
                <li
                  key={f.title}
                  className="rounded-2xl border bg-white p-6"
                  style={{ borderColor: LINE }}
                >
                  <div className="flex items-baseline gap-3">
                    <span
                      className="font-fj-mono text-[0.8125rem] font-bold tabular-nums"
                      style={{ color: ORANGE_DARK }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="fj-display text-[1.0625rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                      {f.title}
                    </h3>
                  </div>
                  <p className="mt-2 font-fj-body text-[0.9375rem] leading-[1.62] text-fj-neutral-600">{f.body}</p>
                </li>
              ))}
            </ol>

            <p className="mt-8 max-w-[760px] font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-600">
              On the map pack specifically, Google is unusually open about how it decides.{' '}
              <a
                href="https://support.google.com/business/answer/7091"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="font-semibold underline underline-offset-2"
                style={{ color: ORANGE_DARK }}
              >
                Its own guidance names relevance, distance and prominence
              </a>
              , and states plainly that there is no way to request or pay for a better local ranking. You
              cannot change distance. You can change the other two, which is what the list above is for.
            </p>
          </div>
        </section>

        {/* ─── 7. LOCAL SEARCH IMAGE + SERVICES ────────────────────────── */}
        <section className="py-14 md:py-20">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative mx-auto w-full max-w-[500px]">
              <img
                src="/images/us/las-vegas-seo/local-search.webp"
                alt="A restaurant manager in a Las Vegas dining room checking a map with a single location pin on his phone"
                width={1200}
                height={896}
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-2xl border object-cover"
                style={{ borderColor: LINE, boxShadow: '0 18px 44px rgba(20,18,12,0.09)' }}
              />
            </div>

            <div>
              <p className="fj-eyebrow">What you get every month</p>
              <h2
                className="fj-display mt-3.5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.7rem)', lineHeight: 1.08, letterSpacing: '-0.025em' }}
              >
                One scope, the whole stack
              </h2>
              <p className="mt-4 max-w-[600px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
                No tiers where the useful parts sit behind the expensive one. Everything below runs every
                month, weighted to whatever your audit says is actually holding you back.
              </p>

              <div className="mt-8 space-y-4">
                {SERVICES.map((s) => (
                  <div key={s.title} className="border-t pt-4" style={{ borderColor: LINE }}>
                    <h3 className="fj-display text-[1.0625rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                      {s.title}
                    </h3>
                    <p className="mt-1 font-fj-body text-[0.9375rem] leading-[1.6] text-fj-neutral-600">
                      {s.body}{' '}
                      <Link href={s.href} className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                        {s.label}
                      </Link>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── 8. COMPARISON: THE REAL SERP ────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="fj-eyebrow">The results page, honestly</p>
            <h2
              className="fj-display mt-3.5 max-w-[820px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.7rem)', lineHeight: 1.08, letterSpacing: '-0.025em' }}
            >
              Who you are actually choosing between
            </h2>
            <p className="mt-4 max-w-[720px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              We pulled the live results for seo agency las vegas in August 2026, then opened every site to
              check what it really is. Four of the twelve page-one slots are directories or roundups rather
              than agencies. Here is the rest, with what each is good at. We are on the list too, at the
              bottom, which is the honest place for us today.
            </p>

            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <caption className="sr-only">
                  Agencies ranking on page one for seo agency las vegas, with position and strengths
                </caption>
                <thead>
                  <tr style={{ borderBottom: `1.5px solid ${LINE}` }}>
                    <th scope="col" className="pb-3 pr-4 font-fj-mono text-[0.6875rem] uppercase tracking-[0.12em] text-fj-neutral-400">
                      Who
                    </th>
                    <th scope="col" className="pb-3 pr-4 font-fj-mono text-[0.6875rem] uppercase tracking-[0.12em] text-fj-neutral-400">
                      Where they sit
                    </th>
                    <th scope="col" className="pb-3 font-fj-mono text-[0.6875rem] uppercase tracking-[0.12em] text-fj-neutral-400">
                      What they are genuinely good at
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {RIVALS.map((r) => (
                    <tr key={r.domain} className="align-top" style={{ borderBottom: `1px solid ${LINE}` }}>
                      <th scope="row" className="py-4 pr-4 font-fj-body text-[0.9375rem] font-bold text-fj-ink">
                        {r.domain}
                      </th>
                      <td className="py-4 pr-4 font-fj-body text-[0.875rem] text-fj-neutral-600">{r.role}</td>
                      <td className="py-4 font-fj-body text-[0.875rem] leading-[1.6] text-fj-neutral-600">{r.goodAt}</td>
                    </tr>
                  ))}
                  <tr className="align-top" style={{ background: '#FFF7F3' }}>
                    <th scope="row" className="py-4 pr-4 font-fj-body text-[0.9375rem] font-bold text-fj-ink">
                      FactoryJet
                    </th>
                    <td className="py-4 pr-4 font-fj-body text-[0.875rem]" style={{ color: ORANGE_DARK }}>
                      Not ranking on this term yet. This page is the attempt.
                    </td>
                    <td className="py-4 font-fj-body text-[0.875rem] leading-[1.6] text-fj-neutral-600">
                      Founder-led, month to month, senior people doing the work rather than briefing an
                      account manager. Technical SEO and AI search visibility included rather than sold
                      separately. Smaller than everyone above us, with a smaller link profile.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div
              className="mt-10 rounded-2xl p-7 md:p-8"
              style={{ background: CREAM, borderLeft: `4px solid ${ORANGE}` }}
            >
              <h3 className="fj-display text-[1.125rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                Why we are showing you our own weakest number
              </h3>
              <p className="mt-3 max-w-[860px] font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-600">
                Because the gap matters much less to you than it does to us. You need to rank in one valley,
                for a handful of categories, against maybe a dozen genuine local rivals. We are trying to
                rank nationally against firms with many times our authority. Your version of the job works
                on a normal timeline. Ours takes years. You get the benefit of us doing the harder version
                every day.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-5">
                <ModalCTAButton
                  label="Get your free Las Vegas SEO audit"
                  region="us"
                  modalVariant="seo"
                  btnVariant="primary-light"
                />
                <Link
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-fj-body text-[0.9375rem] font-semibold underline underline-offset-4"
                  style={{ color: ORANGE_DARK }}
                >
                  Or book thirty minutes with the founder
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 9. FAQ ──────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="Las Vegas SEO FAQ"
          headline="The questions people actually type"
          lead="Twenty-two answers on what to budget, how to judge an agency, how the map pack works here, and whether any of it survives AI. The same answers we would give you on the phone, including the awkward ones."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ─── 10. RELATED ─────────────────────────────────────────────── */}
        <section className="border-t bg-white py-12" style={{ borderColor: LINE }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="fj-eyebrow">Keep reading</p>
            <p className="mt-3 max-w-[880px] font-fj-body text-[0.9375rem] leading-[1.7] text-fj-neutral-600">
              We write every city page one at a time, which is why they do not read like each other. See the
              same approach in{' '}
              {OTHER_CITIES.map((c, i) => (
                <span key={c.path}>
                  <Link href={c.path} className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                    {c.name}
                  </Link>
                  {i < OTHER_CITIES.length - 2 ? ', ' : i === OTHER_CITIES.length - 2 ? ' or ' : '. '}
                </span>
              ))}
              The underlying services live at{' '}
              <Link href="/services/seo" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                SEO services
              </Link>
              ,{' '}
              <Link href="/services/local-seo" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                local SEO
              </Link>
              ,{' '}
              <Link href="/services/small-business-seo" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                small business SEO
              </Link>
              ,{' '}
              <Link href="/services/seo-consulting" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                SEO consulting
              </Link>{' '}
              and{' '}
              <Link href="/services/ai-seo" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                AI SEO
              </Link>
              . On AI answers, Google publishes its own position:{' '}
              <a
                href="https://developers.google.com/search/docs/appearance/ai-features"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="font-semibold underline underline-offset-2"
                style={{ color: ORANGE_DARK }}
              >
                there are no special requirements or markup to appear in AI Overviews
              </a>
              . Good news if your fundamentals are right, bad news if they are not.
            </p>
          </div>
        </section>

        {/* ─── 11. FINAL CTA (the one dark section) ────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="START WITH THE AUDIT"
          headline="Find out what is actually holding your Las Vegas rankings back"
          sub="We will look at your Google Business Profile, your city and address data, your site speed on a phone, and the searches your customers are really making across the valley. Then we will tell you plainly whether search is worth building for you, or whether you should spend the next quarter somewhere else."
          primaryCta={{ label: 'Get my free SEO audit', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See local SEO', href: '/services/local-seo' }}
          objectionHandler="Month to month, founder-led, no guaranteed rankings and no invented case studies. Your profile, content and accounts stay yours."
        />
        <SeoCityLinksUS currentCity="las-vegas" />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
