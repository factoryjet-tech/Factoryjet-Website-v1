import type { Metadata } from 'next';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import CityContextSection from '@/components/v2/CityContextSection';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import ServiceJourneyRow from '@/components/v2/ServiceJourneyRow';
import ComparisonTable from '@/components/v2/ComparisonTable';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import WhatsAppCTA from '@/components/v2/WhatsAppCTA';
import WebDesignCityLinksUS from '@/components/v2/WebDesignCityLinksUS';
import ModalCTAButton from '@/components/v2/ModalCTAButton';

/* ─────────────────────────────────────────────────────────────────────────────
   /phoenix/web-design: US city page for the Phoenix metro.

   Intent owned by THIS page: "web design company phoenix" (1,900/mo, KD 31)
   plus the Valley variants (phoenix web design, web design phoenix az,
   scottsdale website design, tempe / chandler / mesa / gilbert web design).
   Live SERP on 2026-08-12 shows a service page wins and Google renders NO AI
   Overview on this query, so the win is organic rank plus human conversion.

   Build rules honoured: no em dashes, no currency figures anywhere, plain <img>
   only, FinalCTA (never GetFreeQuoteCTA), exactly ONE dark section (the closing
   FinalCTA), canonical written inline (no hreflangMap import), no shared files
   touched. Cost-shaped PAA questions get scope drivers and pricing models,
   never a number.

   Schema: WebPage + speakable, Service, LocalBusiness/ProfessionalService,
   ItemList (the seven-point checklist), ItemList (the local rival set),
   FAQPage derived from FAQ_ITEMS, BreadcrumbList. All seven reach a script tag.
───────────────────────────────────────────────────────────────────────────── */

const PAGE_URL = 'https://factoryjet.com/phoenix/web-design';
const IMG = '/images/us/phoenix-web-design';

const ORANGE = '#F05A28';
const ORANGE_DARK = '#B23E13';
const CREAM = '#FAFAF7';
const PEACH = '#FAEDE5';

/* Sources fetched and confirmed on 2026-08-12. Every number on this page traces
   to one of these three. If a claim is not here, it is not on the page. */
const SRC_CHANDLER =
  'https://www.chandleraz.gov/business/economic-development/employment-and-business-districts/price-corridor';
const SRC_LCP = 'https://web.dev/articles/lcp';
const SRC_CACTUS = 'https://cactusleague.com/';

export const metadata: Metadata = {
  title: 'Web Design Company in Phoenix, AZ | FactoryJet',
  description:
    'A web design company for Phoenix and the wider Valley: Scottsdale, Tempe, Chandler, Mesa, Gilbert and the West Valley. Fast sites, honest scope, code and design files you keep.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Phoenix, AZ | FactoryJet',
    description:
      'A web design company for Phoenix and the wider Valley: Scottsdale, Tempe, Chandler, Mesa, Gilbert and the West Valley. Fast sites, honest scope, code and design files you keep.',
    url: `${PAGE_URL}/`,
    images: [
      {
        url: `https://factoryjet.com${IMG}/hero.webp`,
        width: 1440,
        height: 864,
        alt: 'A design team reviewing a website layout in a Phoenix studio with the Sonoran Desert outside',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Phoenix, AZ | FactoryJet',
    description:
      'A web design company for Phoenix and the wider Valley: Scottsdale, Tempe, Chandler, Mesa, Gilbert and the West Valley.',
    images: [`https://factoryjet.com${IMG}/hero.webp`],
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────────────────────────── */

/** The listicle. Also the source of the ItemList schema below. Written once. */
const CHECKLIST = [
  {
    title: 'Open fast on a phone in direct sun',
    body:
      'Google publishes an actual number for this. A page is judged good when its Largest Contentful Paint, the moment the biggest thing on screen finishes drawing, lands at 2.5 seconds or less for most visits. Phoenix makes it harder: people search outdoors, on cellular, with the screen at full brightness and a hot handset throttling itself. Build for that phone, not for your desktop.',
  },
  {
    title: 'Say which Valley cities you actually serve',
    body:
      'Someone in Gilbert does not search the same words as someone in Glendale, and Google does not show them the same map. If you cover the East Valley but not Buckeye, write that down. A vague "serving the greater Phoenix area" line loses to a competitor who named the town.',
  },
  {
    title: 'Make contact a one-tap job',
    body:
      'A tappable phone number in the header. A form with two or three fields. A text or WhatsApp option for people who will not call a stranger. Every extra field is a place someone quits. We have never seen a longer form beat a shorter one on a service business site.',
  },
  {
    title: 'Answer the questions before the call',
    body:
      'Buyers arrive with the same short list: what it costs, how long it takes, who does the work, what happens if it goes wrong. Answer all four in plain words on the page. You will get fewer enquiries and far better ones, because the tyre kickers filter themselves out.',
  },
  {
    title: 'Launch for winter, not for summer',
    body:
      'The Valley runs on an inverted calendar. Winter visitors arrive in autumn, spring training brings 15 Major League Baseball teams across 10 stadiums in February and March, and then the heat empties the streets. A site that goes live in October has three months to earn rankings before your busiest season. A site that launches in June misses it.',
  },
  {
    title: 'Be readable by the AI answer layer',
    body:
      'ChatGPT, Perplexity and Google AI Overviews pull short, clean, factual passages. That means real headings in the right order, structured data in the code, a clear answer near the top of every page, and no key fact locked inside an image or a slider. This is now a build requirement, not a nice extra.',
  },
  {
    title: 'Belong to you when it is finished',
    body:
      'You should walk away with the code, the design files, the domain, the hosting account and the analytics property in your own name. If leaving your agency means rebuilding from scratch, you did not buy a website. You rented one.',
  },
];

/** The Valley districts we write and structure pages around. */
const DISTRICTS = [
  {
    area: 'Downtown and Midtown Phoenix',
    note:
      'Law, government, ASU Downtown, the Warehouse District and the Roosevelt Row creative scene. Professional services that sell on credibility.',
  },
  {
    area: 'Camelback Corridor and Biltmore',
    note:
      'Banking, wealth management, insurance and law offices along Camelback Road. Long sales cycles, small lead volumes, high value per lead.',
  },
  {
    area: 'North Phoenix and Deer Valley',
    note:
      'Semiconductor and advanced manufacturing build-out, plus the supplier and trades economy that grows around a fab.',
  },
  {
    area: 'Scottsdale',
    note:
      'Resorts, med spas, aesthetics, real estate, golf and the Airpark business cluster. Heavy seasonal swing and a design-literate audience.',
  },
  {
    area: 'Tempe',
    note:
      'Arizona State University, Tempe Town Lake and a young software and startup base. Mobile traffic dominates and the academic calendar drives demand.',
  },
  {
    area: 'Chandler',
    note:
      'The Price Corridor and the Airpark: Intel, Wells Fargo, Bank of America, Northrop Grumman and Microchip Technology all employ here, and a service economy sits underneath them.',
  },
  {
    area: 'Mesa and Gilbert',
    note:
      'Aerospace at Falcon Field, healthcare, home services and the Gilbert Heritage District. Family-market businesses with strong local search intent.',
  },
  {
    area: 'West Valley',
    note:
      'Glendale, Peoria, Surprise, Goodyear and Buckeye. Fast residential growth, logistics, data centres, trades and new retail catching up to the rooftops.',
  },
];

/** Named local rivals, taken from the live Google top 12 for the target query
 *  on 2026-08-12 and checked by opening each site. Also feeds ItemList schema. */
const RIVALS = [
  {
    name: 'Net-Craft.com (Scottsdale)',
    known:
      'Web plus native mobile app development in one shop, with SEO, paid search and conversion work alongside it.',
    us:
      'We build websites and commerce. App development is not our core, and we will tell you that on the first call.',
    pick: 'You need an iOS or Android app and a site that matches it.',
  },
  {
    name: 'Web Design Phoenix',
    known:
      'An inbound marketing approach. Buyer personas, content offers, downloadable guides and nurture built around the site.',
    us:
      'We build the site, the structure and the schema, then hand you the keys. Ongoing content is a separate decision, not a bundle.',
    pick: 'You want one partner running a full inbound content programme for you.',
  },
  {
    name: 'eCreations',
    known:
      'WordPress and WooCommerce specialists, including audits, maintenance and store performance work on that stack.',
    us:
      'We build on Next.js and headless commerce. If you are staying on WooCommerce, they know that stack better than we do.',
    pick: 'Your store is already on WooCommerce and you want to keep it there.',
  },
  {
    name: 'Thrive Internet Marketing Agency',
    known:
      'A large national agency with Phoenix as one of many locations, covering SEO, paid media, social and franchise or enterprise programmes.',
    us:
      'One small founder-led team. You talk to the people who write the code, not to an account layer.',
    pick: 'You need several paid channels run at once, or you operate a franchise network.',
  },
  {
    name: 'Avenue 25',
    known:
      'Brand strategy and creative for established Phoenix brands, and by their own account more than thirty years in this market.',
    us:
      'We lead with build quality, speed and search visibility. Our brand work is lighter than theirs.',
    pick: 'You need a genuine rebrand, not only a new website.',
  },
  {
    name: 'Directories: Clutch, Yelp, webdesignrankings.com',
    known: 'A fast shortlist with reviews and profiles gathered in one place.',
    us:
      'We are one option on that list and we are happy to be compared against the rest of it.',
    pick: 'You want to see several firms side by side before you talk to anyone.',
  },
];

const FAQ_CATEGORIES = [
  { key: 'cost', label: 'Cost and timeline' },
  { key: 'process', label: 'What you get' },
  { key: 'ai', label: 'AI and the trade' },
  { key: 'local', label: 'Phoenix and the Valley' },
  { key: 'basics', label: 'Website basics' },
];

/** Grounded in the live People Also Ask set for this query, 2026-08-12.
 *  This is the ONLY FAQ array on the page. FAQPage schema is derived from it. */
const FAQ_ITEMS = [
  {
    question: 'How much does it cost to pay someone to design a website?',
    answer:
      'It depends on four things, and any firm that quotes before asking about them is guessing. Those four are: how many pages, how much of the writing and photography you already have, what has to connect to it (booking, payments, a CRM), and how custom the design is. A five page site for a local service business and a store with a thousand products are not the same job. Tell us the four things and you get a fixed number in writing before anyone starts.',
    category: 'cost',
  },
  {
    question: 'How much should a small business in Phoenix pay for a website?',
    answer:
      'Enough that it is built properly and not a penny more. The cheapest option is usually a template you fill in yourself, which is fine if your site only needs to prove you exist. The most expensive is a large agency with an account team between you and the work. Most Phoenix small businesses land in the middle: a real designer, a real developer, a fixed scope, and a number agreed up front. We quote after a short call, not off a rate card.',
    category: 'cost',
  },
  {
    question: 'How much do web design agencies charge, and how do they charge?',
    answer:
      'There are three common models. Fixed scope, where you agree the pages and features and pay an agreed amount for that. Hourly, where you pay for time and the total moves. Monthly retainer, where the site is bundled with ongoing work. We use fixed scope for builds, because it puts the risk of a slow week on us instead of on you. Ongoing work is a separate, cancellable arrangement.',
    category: 'cost',
  },
  {
    question: 'What is a good hourly rate for website design?',
    answer:
      'The wrong question, honestly. An hourly rate tells you what someone charges, not what you will end up paying. A cheaper designer who takes three times as long costs you more and delivers later. Ask instead: what exactly is included, what is the total, what happens if it runs long, and who eats that cost. Get the answers in writing before you sign anything.',
    category: 'cost',
  },
  {
    question: 'How fast can you build a website? Can it be done in three days?',
    answer:
      'A simple site can genuinely go live in a few days if the content is ready. That last part is what actually slows projects down. Almost every late launch we have seen was waiting on copy, photos, logins or one approval, not on design or code. Get your text, images and account access together before you start and a small build moves quickly. A store or a booking system takes longer, and anyone promising otherwise has not scoped it.',
    category: 'cost',
  },
  {
    question: 'What does a web design company do, exactly?',
    answer:
      'Six things. It works out what the site has to achieve and who it is talking to. It plans the pages and how people move between them. It designs the look and the layout. It builds the working site. It sets up search, structured data and analytics so the site can be found and measured. Then it hands everything over and supports you after launch. A firm that only does the middle two is a decorator, not a web design company.',
    category: 'process',
  },
  {
    question: 'What should a business website include?',
    answer:
      'A clear statement of what you do and who for. Individual pages for each real service, not one page listing all of them. The towns you serve. Proof: photos of actual work, reviews, credentials, licence numbers if your trade needs them. Prices or at least how pricing works. A visible way to get in touch on every screen. And the boring legal pages. Everything else is optional.',
    category: 'process',
  },
  {
    question: 'What are the top three features of a good website?',
    answer:
      'It loads fast, it says the right thing in the first screen, and it makes getting in touch effortless. That is genuinely the whole list. Animation, video and clever scrolling can help, but only after those three are true. If a visitor cannot tell what you do and how to reach you within a few seconds, nothing else you add will fix it.',
    category: 'process',
  },
  {
    question: 'What are the five golden rules of web design?',
    answer:
      'There is no official list, whatever the articles claim. Different sources give different fives. Here are ours, and we will defend them: one clear job per page; the most important thing goes at the top; write the way you speak; make it work on a phone first; and cut anything that does not help someone decide. If a rule cannot survive that last test, it is decoration.',
    category: 'basics',
  },
  {
    question: "What are the 7 C's of website design?",
    answer:
      'Context, content, community, customisation, communication, connection and commerce. It comes from an early e-commerce marketing textbook and it still gets quoted in blog posts. It is a decent checklist for auditing a site you already have. It is a poor brief for building one, because it says nothing about speed, accessibility or search. Use it to review, not to specify.',
    category: 'basics',
  },
  {
    question: 'What is the 3 second rule in web design?',
    answer:
      'The folk version says a visitor decides whether to stay within about three seconds. There is no official three second standard, but the instinct is right and there is a real number behind it. Google measures Largest Contentful Paint, the moment the biggest element on screen finishes loading, and treats 2.5 seconds or less as good for most visits. That is the target we build to, measured on a mid range phone rather than a fast laptop.',
    category: 'basics',
  },
  {
    question: 'What are common website red flags?',
    answer:
      'No contact details or a form that goes nowhere. A copyright year several years old. Stock photos of a team that is not yours. Claims with no proof behind them. Pages that take forever on a phone. A blog that stopped two years ago. No pricing information of any kind and no explanation why. Any one of those is survivable. Three of them together and buyers quietly leave for a competitor.',
    category: 'basics',
  },
  {
    question: 'Is web design still worth it in 2026, or is it a dying trade?',
    answer:
      'Building a page has never been easier, which is exactly why good design is worth more. When everyone can generate a decent looking layout in an afternoon, the differences that remain are speed, structure, clear writing and whether the thing actually converts. Those are judgement calls. Demand has moved from making pages to making pages that work.',
    category: 'ai',
  },
  {
    question: 'Can ChatGPT actually create a website?',
    answer:
      'It can write the code for one, and for a simple brochure site the output is often reasonable. What it does not do on its own is decide what your site should say, load a fast image set, set up your domain and hosting, write structured data that matches the visible page, connect your booking system or fix it in six months when something breaks. We use AI tools every day. They speed up the building. They do not replace deciding.',
    category: 'ai',
  },
  {
    question: 'Is AI replacing web designers?',
    answer:
      'It is replacing a specific slice of the work: first drafts, repetitive layout, boilerplate code, image resizing. The parts that survive are the judgement parts. What matters most to this buyer. What to cut. Why this page is not converting. Whether the honest answer is that you do not need a new site at all. If a designer only ever produced first drafts, that job is under real pressure. The rest of the trade is busier.',
    category: 'ai',
  },
  {
    question: 'Which is better, web design or web development?',
    answer:
      'They are two halves of one job, not a ranking. Design decides what it looks like and how it behaves. Development makes it real, fast and reliable in a browser. A beautiful site that loads slowly fails. A fast site nobody understands fails too. Small teams like ours do both, which removes the handover where most of the quality normally leaks out.',
    category: 'basics',
  },
  {
    question: 'Is it better to build your own website or use a website builder?',
    answer:
      'Use a builder if your site is a business card, you are testing an idea, or budget is genuinely the deciding factor. Hire someone when the site is a real sales channel, when it has to connect to other systems, or when you have tried a builder and the enquiries never came. A common and sensible path is to start on a builder, learn what your buyers actually ask, then get it built properly with that knowledge.',
    category: 'basics',
  },
  {
    question: 'Do I need an LLC to run a website?',
    answer:
      'No. You can publish a website and take payments as a sole proprietor. Whether you should form one is a liability and tax question, not a web question, and in Arizona an LLC is formed through the Arizona Corporation Commission. We are not attorneys or accountants, so please ask one before deciding. It does not block starting the site: the entity can change later without rebuilding anything.',
    category: 'basics',
  },
  {
    question: 'Does my LLC need to have the same name as my website?',
    answer:
      'No. Plenty of businesses trade under a name that differs from the registered entity, and register that trading name separately. Your website can use the brand customers know while contracts and invoices use the legal name. Put the legal name in the footer and the terms so it is findable. Again, worth a five minute check with your accountant rather than taking our word for it.',
    category: 'basics',
  },
  {
    question: 'Can I host my own website for free?',
    answer:
      'Yes, and some free tiers are genuinely good. The catch is rarely the hosting itself. It is that free plans often put ads on your pages, force a subdomain instead of your own name, throttle you the month traffic finally arrives, and give you nobody to call at 7am. For a hobby site, free is fine. For the site your leads come through, paid hosting on your own domain costs little and removes all of that.',
    category: 'basics',
  },
  {
    question: 'What companies are headquartered in Phoenix, AZ?',
    answer:
      'Phoenix itself is home to Freeport-McMoRan, Republic Services, Avnet, Knight-Swift Transportation, Sprouts Farmers Market, PetSmart and Banner Health. Around the Valley you get onsemi and Axon in Scottsdale, Carvana in Tempe, and Microchip Technology and Insight Enterprises in Chandler. The useful part for you is what sits underneath them: thousands of suppliers, contractors, clinics and professional firms selling into those campuses and their staff.',
    category: 'local',
  },
  {
    question: 'Do you work with businesses in Scottsdale, Tempe, Chandler and Mesa too?',
    answer:
      'Yes, and we treat them as different markets rather than one blob. A med spa in Old Town Scottsdale, a supplier near the Price Corridor in Chandler and a home services company in Surprise are chasing different searches with different seasons and different buyers. Same team, same build standard, different page structure and different words.',
    category: 'local',
  },
  {
    question: 'Should my site have a separate page for each Valley city I serve?',
    answer:
      'Only for the cities where you genuinely work and can prove it. A real page with local photos, named neighbourhoods, real jobs and honest travel limits earns its place. Twenty near identical pages with the town name swapped do not, and Google has been good at spotting them for years. Better to have four strong city pages than twenty thin ones.',
    category: 'local',
  },
  {
    question: 'Does the Phoenix summer really change when I should launch a new site?',
    answer:
      'It does, more than in most US metros. Winter visitors and seasonal residents arrive from autumn, spring training fills the East and West Valley in February and March, and the summer heat flattens foot traffic for months. New pages usually need a few months to settle in search. Launching in September or October means you are ranked when your season starts. Launching in June means you watch it from the bench.',
    category: 'local',
  },
  {
    question: 'What are the top 10 web design agencies in the USA?',
    answer:
      'Nobody can answer that honestly, including us. The lists you find are either directories ranked by review count and paid placement, or roundups written by agencies who put themselves on them. A national top ten is also not what you need. You need three or four firms who have built the kind of site you want, who will show you real work, and who will put a fixed scope in writing.',
    category: 'process',
  },
  {
    question: 'Who owns the site and the design files when we are done?',
    answer:
      'You do. The code, the design files, the domain, the hosting account and the analytics property all end up in your name. We do not hold your domain hostage and there is no proprietary platform you have to keep paying for. If you want to move to another developer next year, you hand them a repository and they can pick it up.',
    category: 'process',
  },
  {
    question: 'What can I use instead of a website?',
    answer:
      'A Google Business Profile, an Instagram page or a marketplace listing can carry a business a surprisingly long way, and for some trades that is genuinely enough to start. The problem is that you are renting all of it. The rules change, the reach gets throttled, and the audience is not yours. Use those channels to get found, and own one page where the sale actually happens.',
    category: 'basics',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Schema. Every const below reaches a <script type="application/ld+json">.
───────────────────────────────────────────────────────────────────────────── */

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  name: 'Web Design Company in Phoenix, AZ | FactoryJet',
  url: PAGE_URL,
  description:
    'A web design company for Phoenix and the wider Valley: Scottsdale, Tempe, Chandler, Mesa, Gilbert and the West Valley.',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'FactoryJet', url: 'https://factoryjet.com' },
  about: { '@type': 'Thing', name: 'Web design' },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: `https://factoryjet.com${IMG}/hero.webp`,
    width: 1440,
    height: 864,
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#answer-first', '#what-a-phoenix-web-design-company-does'],
  },
  dateModified: '2026-08-12',
  lastReviewed: '2026-08-12',
  reviewedBy: { '@type': 'Person', name: 'Bhavesh Barot', jobTitle: 'Founder' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Web Design Phoenix',
  serviceType: 'Web design, website development and website redesign',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: [
    { '@type': 'City', name: 'Phoenix' },
    { '@type': 'City', name: 'Scottsdale' },
    { '@type': 'City', name: 'Tempe' },
    { '@type': 'City', name: 'Chandler' },
    { '@type': 'City', name: 'Mesa' },
    { '@type': 'City', name: 'Gilbert' },
    { '@type': 'City', name: 'Glendale' },
    { '@type': 'City', name: 'Peoria' },
  ],
  audience: {
    '@type': 'BusinessAudience',
    name: 'Small and mid sized businesses in the Phoenix metro',
  },
  description:
    'Website design and build for Phoenix metro businesses, covering strategy, page structure, design, development, on page search setup, structured data and handover of the code and design files.',
  url: PAGE_URL,
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': `${PAGE_URL}#business`,
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  telephone: '+919699977699',
  areaServed: [
    { '@type': 'City', name: 'Phoenix' },
    { '@type': 'AdministrativeArea', name: 'Maricopa County, Arizona' },
  ],
  knowsAbout: [
    'Web design',
    'Website redesign',
    'Core Web Vitals',
    'Local SEO',
    'Structured data',
    'Ecommerce development',
  ],
  founder: { '@type': 'Person', name: 'Bhavesh Barot', jobTitle: 'Founder' },
};

const checklistSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${PAGE_URL}#checklist`,
  name: 'Seven things a Phoenix business website has to get right',
  numberOfItems: CHECKLIST.length,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: CHECKLIST.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.title,
    description: c.body,
  })),
};

const rivalListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${PAGE_URL}#alternatives`,
  name: 'Web design companies visible on Phoenix search results',
  description:
    'Firms and directories appearing in the Google top twelve for Phoenix web design queries on 12 August 2026, with what each is known for. FactoryJet is one of the options being compared.',
  numberOfItems: RIVALS.length,
  itemListElement: RIVALS.map((r, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: r.name,
    description: r.known,
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
  '@id': `${PAGE_URL}#breadcrumbs`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    // Position 2 points at the national service page, not /phoenix. There is no
    // /phoenix root route and no _redirects rule for it yet (that file is owned
    // centrally), so pointing there would put a 404 inside the breadcrumb.
    { '@type': 'ListItem', position: 2, name: 'Web Design', item: 'https://factoryjet.com/services/web-design' },
    { '@type': 'ListItem', position: 3, name: 'Phoenix', item: PAGE_URL },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function PhoenixWebDesignPage() {
  return (
    <>
      <script
        id="phx-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="phx-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="phx-localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        id="phx-checklist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(checklistSchema) }}
      />
      <script
        id="phx-alternatives-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rivalListSchema) }}
      />
      <script
        id="phx-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="phx-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader />

      <main className="bg-fj-cream">
        {/* ─── 1. HERO (light, never dark) ──────────────────────────────── */}
        <Hero
          formSlot={<HeroInlineForm region="us" source="us_phoenix_web_design_hero" submitLabel="Get my Phoenix quote" />}
          eyebrow={'WEB DESIGN · PHOENIX, AZ'}
          headline={'A Web Design Company in Phoenix Built for the Whole Valley'}
          lead={
            'Phoenix is not one market. It is Downtown, the Camelback Corridor, Scottsdale, Tempe, Chandler, Mesa, Gilbert and a West Valley growing faster than its map can keep up with. We build sites that win in the specific parts of it you actually sell to, and you keep the code when we are done.'
          }
          trustItems={['Fixed scope, agreed up front', 'Built for phones in full sun', 'You own the code and the files']}
          extraCta={<WhatsAppCTA city="Phoenix" variant="light" />}
          rightSlot={
            <div className="relative mx-auto w-full max-w-[600px] py-4">
              <div
                className="overflow-hidden rounded-3xl border"
                style={{ borderColor: 'rgba(15,15,18,0.10)', boxShadow: '0 24px 60px rgba(20,18,12,0.12)' }}
              >
                <img
                  src={`${IMG}/hero.webp`}
                  alt="Three colleagues reviewing a website layout on a large screen in a Phoenix studio, saguaro cactus and desert mountains through the window"
                  width={1440}
                  height={864}
                  fetchPriority="high"
                  decoding="async"
                  className="block h-auto w-full object-cover"
                />
              </div>
            </div>
          }
        />

        {/* ─── 2. ANSWER FIRST ──────────────────────────────────────────── */}
        <section id="answer-first" className="pt-2 pb-12 md:pb-16">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <div
              className="rounded-2xl bg-white p-7 md:p-9"
              style={{ borderLeft: `5px solid ${ORANGE}`, boxShadow: '0 12px 34px rgba(20,18,12,0.06)' }}
            >
              <p className="font-fj-mono text-[11px] uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
                Short answer
              </p>
              <h2
                id="what-a-phoenix-web-design-company-does"
                className="fj-display mt-3 text-[1.35rem] font-bold text-fj-ink"
                style={{ letterSpacing: '-0.02em' }}
              >
                What does a web design company in Phoenix actually do for you?
              </h2>
              <p className="mt-3 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                <b className="text-fj-ink">
                  A Phoenix web design company plans, designs, builds and launches your website, then sets it
                  up to be found.
                </b>{' '}
                The local part is the structure: which Valley cities get their own page, which searches you can
                realistically win, and how the site behaves on a phone outdoors in summer. You should end up
                owning the code, the design files and the analytics.
              </p>
              <p className="mt-4 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                Everything below is the long version: what a Phoenix site has to get right, who else ranks for
                this search, and honest answers to the questions people ask before they book a call. If you
                would rather skip to the money question, the{' '}
                <Link
                  href="#faq-cost"
                  className="font-semibold underline underline-offset-2"
                  style={{ color: ORANGE_DARK }}
                >
                  cost and timeline answers
                </Link>{' '}
                are near the bottom.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 3. TRUST ROW ─────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across the US, UK, and UAE" />
        <BigThreeTrustBlock eyebrow="BY THE NUMBERS" headline={'Built by a team that ships, not one that pitches.'} />

        {/* ─── 4. PHOENIX MARKET CONTEXT ────────────────────────────────── */}
        <CityContextSection
          eyebrow={'THE VALLEY MARKET'}
          headline={'Phoenix Rewards Businesses That Name Their Patch'}
          leadParagraphs={[
            'Greater Phoenix is a metro of many downtowns. A buyer in Gilbert, a procurement manager near the Price Corridor in Chandler and a resort guest in Old Town Scottsdale are three different searches with three different maps behind them. The firms that win here are the ones that stop writing "serving the greater Phoenix area" and start naming the towns, the neighbourhoods and the jobs they actually do.',
            'The Valley also runs on an inverted calendar. Phoenix fills up in autumn as seasonal residents arrive, peaks through spring training in February and March, then empties as the heat sets in. That single fact should decide when your new site goes live.',
          ]}
          stats={[
            {
              value: '10,000',
              label: 'Intel staff in Chandler’s Price Corridor, alongside Wells Fargo, Bank of America, Northrop Grumman and Microchip Technology',
              sourceUrl: SRC_CHANDLER,
              sourceLabel: 'City of Chandler',
            },
            {
              value: '15 teams',
              label: 'Major League Baseball clubs playing spring training across 10 Valley stadiums every February and March',
              sourceUrl: SRC_CACTUS,
              sourceLabel: 'Cactus League',
            },
            {
              value: '2.5s',
              label: 'Google’s Largest Contentful Paint threshold for a good page, measured at the 75th percentile of real visits',
              sourceUrl: SRC_LCP,
              sourceLabel: 'web.dev',
            },
          ]}
        />

        {/* ─── 5. SERVICE EXPLANATION ───────────────────────────────────── */}
        <ServiceExplanation
          eyebrow={'WEB DESIGN · PHOENIX'}
          headline={'What We Actually Build, and What We Refuse to Sell You'}
          lead={
            'A website is not a brochure with a scroll bar. It is the one sales channel you own outright, so we build it like an asset: fast, structured, measurable, and yours to take anywhere.'
          }
          body={
            <>
              <p>
                Every build starts with the same question: who is typing what, and what do they need to see to
                pick up the phone. For a Scottsdale med spa that is treatment pages, before and after proof,
                and booking in two taps. For a supplier selling into a Chandler fab it is capability pages,
                certifications and a request form that a procurement team can forward internally. Same craft,
                completely different site.
              </p>
              <p>
                Then we build it. Real headings in the right order, images that are already the right size,
                structured data that matches what is visible on the page, and analytics wired in before launch
                instead of three weeks after. We test on a mid range Android phone because that is what your
                customer is holding in a parking lot in July, not on the fast laptop we design on.
              </p>
              <p>
                What we will not sell you is a rebuild you do not need. Sometimes your site is fine and the
                real problem is that nobody can find it, in which case{' '}
                <Link href="/services/local-seo" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                  local SEO
                </Link>{' '}
                is the better spend. Sometimes you need a{' '}
                <Link href="/services/website-redesign" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                  redesign
                </Link>{' '}
                rather than a rebuild. We would rather tell you that and keep the relationship than take the
                bigger project.
              </p>
            </>
          }
          rightSlot={
            <img
              src={`${IMG}/valley-planning.webp`}
              alt="Two colleagues planning a website structure by drawing linked boxes on a glass wall, desert landscaping visible outside"
              width={1264}
              height={848}
              loading="lazy"
              decoding="async"
              className="w-full rounded-2xl object-cover"
              style={{ boxShadow: '0 18px 44px rgba(20,18,12,0.09)' }}
            />
          }
        />

        {/* ─── 6. LISTICLE ──────────────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              The build standard
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[820px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Seven things a Phoenix business website has to get right
            </h2>
            <p className="mt-4 max-w-[700px] font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              We check every build against this before it goes live. Five apply anywhere. Two are specific to
              the Valley, and they are the ones out of town agencies miss.
            </p>

            <ol className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {CHECKLIST.map((c, i) => (
                <li
                  key={c.title}
                  className="rounded-2xl p-7"
                  style={{ background: i % 2 === 0 ? CREAM : PEACH, border: '1px solid rgba(15,15,18,0.08)' }}
                >
                  <span className="font-fj-mono text-[0.8125rem] font-bold" style={{ color: ORANGE_DARK }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="fj-display mb-2 mt-2 text-[1.125rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {c.title}
                  </h3>
                  <p className="font-fj-body text-[0.9375rem] font-medium leading-[1.62] text-fj-neutral-700">{c.body}</p>
                </li>
              ))}
            </ol>

            <p className="mt-6 font-fj-body text-[0.8125rem] text-fj-neutral-600">
              Load target from Google&rsquo;s own guidance on{' '}
              <a
                href={SRC_LCP}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline underline-offset-2"
                style={{ color: ORANGE_DARK }}
              >
                Largest Contentful Paint
              </a>
              . Spring training figures from the{' '}
              <a
                href={SRC_CACTUS}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline underline-offset-2"
                style={{ color: ORANGE_DARK }}
              >
                official Cactus League site
              </a>
              , checked 12 August 2026.
            </p>
          </div>
        </section>

        {/* ─── 7. MID PAGE CTA (most readers never reach the footer) ────── */}
        <section className="py-12 md:py-16" style={{ background: PEACH }}>
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-8 px-6 md:px-8 lg:grid-cols-[1.35fr_0.65fr]">
            <div>
              <h2
                className="fj-display font-bold text-fj-ink"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
              >
                Want to know what your site would take?
              </h2>
              <p className="mt-3 max-w-[620px] font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
                Send us the URL and the towns you sell to. You get back what we would change, what we would
                leave alone, and a fixed scope in writing. No pitch deck, no discovery fee.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 lg:justify-end">
              <ModalCTAButton label="Get a fixed scope" region="us" />
              <WhatsAppCTA city="Phoenix" variant="light" />
            </div>
          </div>
        </section>

        {/* ─── 8. PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow={'HOW IT RUNS'}
          headline={'How We Build a Phoenix Website'}
          stages={[
            {
              number: '01',
              title: 'Scope call',
              description:
                'Thirty minutes. What you sell, which Valley cities you serve, who you lose deals to, and what already works. You leave knowing whether we are the right fit, including when the answer is no.',
            },
            {
              number: '02',
              title: 'Structure',
              description:
                'We map the pages before anyone opens a design tool. Which services get their own page, which towns earn one, and what the shortest path to an enquiry looks like. You approve this first.',
            },
            {
              number: '03',
              title: 'Design',
              description:
                'Mobile layouts first, because that is where most of your traffic is. Two rounds of feedback in one shared file, not a chain of email attachments. Nothing gets built until you sign it off.',
            },
            {
              number: '04',
              title: 'Build and search setup',
              description:
                'Development, image work, structured data, internal links, Search Console and analytics. Performance is measured as we go rather than patched the week before launch.',
            },
            {
              number: '05',
              title: 'Launch and handover',
              description:
                'We go live, then hand over the code, the design files and every login in your name, with a recorded walkthrough. Support afterwards is included for a defined window, then optional.',
            },
          ]}
        />

        {/* ─── 9. THE VALLEY MAP + SEASON ───────────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
                  One metro, many markets
                </p>
                <h2
                  className="fj-display mt-3.5 font-bold text-fj-ink"
                  style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
                >
                  Where in the Valley you sell changes what we build
                </h2>
                <p className="mt-4 max-w-[640px] font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
                  Scottsdale website design shows up as its own search term next to this one, which tells you
                  something: Google treats these as different markets even though they share a freeway. Here is
                  how we read each patch before writing a page.
                </p>

                <ul className="mt-8 space-y-4">
                  {DISTRICTS.map((d) => (
                    <li
                      key={d.area}
                      className="border-t pt-4 first:border-t-0 first:pt-0"
                      style={{ borderColor: 'rgba(15,15,18,0.10)' }}
                    >
                      <h3 className="fj-display text-[1.0625rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                        {d.area}
                      </h3>
                      <p className="mt-1 font-fj-body text-[0.9375rem] leading-[1.6] text-fj-neutral-700">{d.note}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <img
                  src={`${IMG}/mobile-first.webp`}
                  alt="A woman on a shaded desert patio in Scottsdale browsing a shop page on her phone in bright daylight"
                  width={1264}
                  height={848}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full rounded-2xl border object-cover"
                  style={{ borderColor: 'rgba(15,15,18,0.10)', boxShadow: '0 18px 44px rgba(20,18,12,0.09)' }}
                />

                <div
                  className="mt-6 rounded-2xl bg-white p-6"
                  style={{ border: '1px solid rgba(15,15,18,0.10)', boxShadow: '0 12px 30px rgba(20,18,12,0.06)' }}
                >
                  <p className="font-fj-mono text-[11px] uppercase tracking-[0.12em]" style={{ color: ORANGE_DARK }}>
                    The Valley year
                  </p>
                  <ul className="mt-4 space-y-3">
                    {[
                      { k: 'Oct to Dec', v: 'Seasonal residents return. Build and launch window.' },
                      { k: 'Jan to Mar', v: 'Peak. Spring training, events, full occupancy.' },
                      { k: 'Apr to May', v: 'Wind down. Best time for a redesign, not a launch.' },
                      { k: 'Jun to Sep', v: 'Heat. Indoor and home services spike, foot traffic drops.' },
                    ].map((row) => (
                      <li
                        key={row.k}
                        className="flex items-baseline gap-3 border-t pt-3 first:border-t-0 first:pt-0"
                        style={{ borderColor: 'rgba(15,15,18,0.08)' }}
                      >
                        <span className="w-[86px] shrink-0 font-fj-mono text-[0.6875rem] font-bold" style={{ color: ORANGE_DARK }}>
                          {row.k}
                        </span>
                        <span className="font-fj-body text-[0.875rem] leading-[1.5] text-fj-neutral-700">{row.v}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 font-fj-body text-[0.75rem] text-fj-neutral-600">
                    Peak window anchored to the{' '}
                    <a
                      href={SRC_CACTUS}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="underline underline-offset-2"
                      style={{ color: ORANGE_DARK }}
                    >
                      Cactus League schedule
                    </a>
                    . The rest is the pattern we see in client traffic, not a published statistic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 10. COMPARISON ───────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow={'THE HONEST SHORTLIST'}
          headline={'Who Else Ranks for Phoenix Web Design, and When to Pick Them'}
          lead={
            'These are the firms and directories sitting in the Google top twelve for this search on 12 August 2026. We opened each one before writing this. Several of them are better than us for specific jobs. FactoryJet is one row on this list, not the answer to it.'
          }
          columns={[
            { label: 'What they are known for' },
            { label: 'FactoryJet', isFactoryJet: true },
            { label: 'Pick them when' },
          ]}
          rows={RIVALS.map((r) => ({ feature: r.name, values: [r.known, r.us, r.pick] }))}
          footer={
            <>
              Compiled from the live organic results for &ldquo;web design company phoenix&rdquo; on 12 August
              2026. Descriptions come from each company&rsquo;s own website, not from reviews or rankings. No
              money changed hands for a position on this table, in either direction.
            </>
          }
        />

        {/* ─── 11. FAQ ──────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="PHOENIX WEB DESIGN FAQ"
          headline={'The Questions People Actually Ask Us'}
          lead="Twenty seven answers, taken from what people genuinely search around Phoenix web design. Cost questions get scope drivers and pricing models rather than a made up number."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ─── 12. RELATED SERVICES ─────────────────────────────────────── */}
        <section className="py-12 md:py-16" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Related work
            </p>
            <h2
              className="fj-display mt-3 font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.125rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
            >
              If a new website is not the right answer yet
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  label: 'Web design',
                  href: '/services/web-design',
                  desc: 'The national service page: process, stack and what a build includes anywhere in the US.',
                },
                {
                  label: 'Website redesign',
                  href: '/services/website-redesign',
                  desc: 'Keep what works, fix what does not. Cheaper and faster than starting from an empty file.',
                },
                {
                  label: 'Local SEO',
                  href: '/services/local-seo',
                  desc: 'When the site is fine and the real problem is that nobody in your suburb can find it.',
                },
                {
                  label: 'Ecommerce development',
                  href: '/services/ecommerce-development',
                  desc: 'For stores rather than brochure sites. Catalogue, checkout, and the systems behind them.',
                },
              ].map((svc) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="flex min-h-[160px] flex-col rounded-2xl bg-white p-6 transition-transform duration-300 hover:-translate-y-1"
                  style={{ border: '1px solid rgba(15,15,18,0.10)' }}
                >
                  <h3 className="fj-display text-[1.0625rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {svc.label}
                  </h3>
                  <p className="mt-2 flex-1 font-fj-body text-[0.875rem] leading-[1.55] text-fj-neutral-700">{svc.desc}</p>
                  <span className="mt-4 font-fj-body text-[0.8125rem] font-bold" style={{ color: ORANGE_DARK }}>
                    Explore &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <WebDesignCityLinksUS currentCity="phoenix" />

        {/* ─── 13. FINAL CTA (the ONE dark section on this page) ─────────── */}
        <FinalCTA
          variant="dark"
          eyebrow={'READY WHEN YOU ARE'}
          headline={'Get a Straight Answer About Your Phoenix Website'}
          sub={
            'Tell us your URL and the towns you sell to. You get back what we would change, what we would leave alone, and a fixed scope in writing. If the honest answer is that you do not need a rebuild, we will say that instead of quoting for one.'
          }
          primaryCta={{ label: 'Start Your Project', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See how we build', href: '/services/web-design' }}
          extraCta={<WhatsAppCTA city="Phoenix" variant="dark" />}
          objectionHandler="Founder-led by Bhavesh Barot. No invented case studies, no guaranteed rankings, and you keep the code, the design files and every login."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
