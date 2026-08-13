import type { Metadata } from 'next';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import FinalCTA from '@/components/v2/FinalCTA';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import MidPageCTA from '@/components/v2/MidPageCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/ecommerce-app-development: US native mobile app page for commerce
   brands.

   Intent owned by THIS page:
     ecommerce app development company (720 a month, KD 12) ·
     ecommerce app development services · ecommerce mobile app development ·
     shopping app development · ecommerce app vs mobile website ·
     do i need an app for my online store.

   Scope split, stated explicitly in the copy and linked rather than duplicated:
     /services/ecommerce-development       → building the STORE itself
     /services/web-application-development → general web apps behind a login
     /headless-commerce                    → the decoupled architecture
     THIS page                             → the native iOS and Android app

   Build rules honoured: no em dashes, no currency figures anywhere, plain <img>
   only, FinalCTA (never GetFreeQuoteCTA), exactly one dark section (the closing
   FinalCTA), no TestimonialsSection (its US_STATS hardcodes a dollar figure),
   no shared files touched, canonical declared inline rather than via hreflangMap.
   Cost questions are answered with scope drivers, never a number.

   Schema: WebPage + speakable, Service, ItemList (build checklist), ItemList
   (live SERP set), FAQPage derived from FAQ_ITEMS, BreadcrumbList. Every const
   below is rendered into a script tag inside the component.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const PAGE_URL = 'https://factoryjet.com/services/ecommerce-app-development';
const REVIEWED_DATE = 'August 12, 2026';

const ORANGE = '#F05A28';
const ORANGE_DARK = '#B23E13';
const CREAM = '#FAFAF7';
const PEACH = '#FAEDE5';
const GREEN_BRIGHT = '#0C7150';
const GREEN_SOFT = '#DCEFE6';
const LAV = '#5046C8';
const LAV_SOFT = '#ECEAFB';

/* ─────────────────────────────────────────────────────────────────────────────
   Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Ecommerce App Development Company | iOS & Android | FactoryJet',
  description:
    'Native ecommerce app development for US commerce brands. We start by telling you whether you need an app at all, then build it on React Native or Swift and Kotlin over Shopify or a headless back end, with push, deep links and store review handled.',
  keywords: [
    'ecommerce app development company',
    'ecommerce app development',
    'ecommerce app development services',
    'ecommerce mobile app development',
    'custom ecommerce app development',
    'shopping app development company',
    'ecommerce app developers',
    'retail mobile app development',
    'shopify mobile app development',
    'react native ecommerce app',
    'ios ecommerce app development',
    'android ecommerce app development',
    'ecommerce app vs mobile website',
    'do i need an app for my online store',
    'how to create an app for my online store',
    'headless commerce mobile app',
    'ecommerce app development united states',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Ecommerce App Development Company | iOS & Android | FactoryJet',
    description:
      'Most small stores do not need an app. Here is when one pays for itself, the store rules that trip everyone up, and how we build the ones worth building.',
    url: PAGE_URL,
    images: [
      {
        url: 'https://factoryjet.com/images/us/ecommerce-app-development/hero.webp',
        width: 1264,
        height: 848,
        alt: 'A shop owner checking a product screen on a phone while a colleague packs an order behind her',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce App Development Company | iOS & Android | FactoryJet',
    description:
      'An app is a retention tool, not an acquisition tool. The honest version of when to build one, and the store rules that catch people out.',
    images: ['https://factoryjet.com/images/us/ecommerce-app-development/hero.webp'],
  },
  alternates: {
    canonical: PAGE_URL,
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
   When an app pays for itself, and when it does not
───────────────────────────────────────────────────────────────────────────── */

const APP_PAYS: ReadonlyArray<string> = [
  'People buy several times a year: supplements, coffee, pet food, beauty refills, groceries, craft and print supplies',
  'You run subscriptions or replenishment and want one-tap skip, swap and reorder',
  'You have a loyalty programme people genuinely check: points, tiers, member-only drops',
  'Your catalogue moves weekly and customers browse it like a feed: fashion drops, resale, sneakers, collectibles',
  'Trade or wholesale buyers reorder from a saved list every few weeks',
  'Your best customers shop from a warehouse, a van or a store aisle where the signal is poor',
];

const APP_DOES_NOT: ReadonlyArray<string> = [
  'Customers buy once a year or less: furniture, mattresses, appliances, weddings',
  'You have a few thousand customers or fewer. The install base will never cover the upkeep',
  'Your mobile site is slow. An app hides that for a few people and leaves it broken for everyone',
  'You want an app for credibility. Nobody buys more because a brand has a store listing',
  'Nobody can commit to a release every few weeks, forever. An app that stops shipping visibly rots',
  'You expect people to find you by searching the App Store. Store search is not a discovery channel for one retail brand',
];

/* ─────────────────────────────────────────────────────────────────────────────
   Build checklist (also powers the ItemList schema)
───────────────────────────────────────────────────────────────────────────── */

type Deliverable = { n: string; title: string; body: string };

const DELIVERABLES: ReadonlyArray<Deliverable> = [
  {
    n: '01',
    title: 'Prove the repeat-purchase number first',
    body:
      'Count how many customers bought twice in twelve months, and how often. That one figure decides whether the app is a retention tool or an expensive icon.',
  },
  {
    n: '02',
    title: 'Fix the mobile site before the app',
    body:
      'Most of your mobile traffic stays on the site forever. An app moves your best customers off a slow site and leaves everyone else stuck on it.',
  },
  {
    n: '03',
    title: 'Pick the stack the team can keep alive',
    body:
      'React Native for most commerce brands, Swift and Kotlin when the app is the product. The wrong answer is whichever one nobody left in the building understands.',
  },
  {
    n: '04',
    title: 'Let the platform stay in charge',
    body:
      'Stock, pricing, promotions, customers and orders live in your commerce platform. Anything the app calculates alone drifts from the site inside a month.',
  },
  {
    n: '05',
    title: 'Keep checkout where it already works',
    body:
      'Payments, tax, fraud screening and card compliance are the most expensive things to get wrong. Rebuilding checkout to save two taps is the fix we are called in for most.',
  },
  {
    n: '06',
    title: 'Make one account work everywhere',
    body:
      'Web login, app login and loyalty balance must be the same account and the same order history. Two identity systems is the defect customers shout about.',
  },
  {
    n: '07',
    title: 'Design the permission moment, not the push feature',
    body:
      'Sending notifications is easy. Being allowed to is the whole game. Ask after an order or a saved item, never on first launch.',
  },
  {
    n: '08',
    title: 'Set up universal links and app links on day one',
    body:
      'A product link should open in the app when installed and the web page when not. That needs an apple-app-site-association file and an assetlinks.json file on your domain.',
  },
  {
    n: '09',
    title: 'Decide what happens with no signal',
    body:
      'Never take an order offline: prices, stock and promotions move. Cache the catalogue, the cart and the customer’s own data, label anything stale, fail honestly.',
  },
  {
    n: '10',
    title: 'Treat submission as work, not paperwork',
    body:
      'Reviewers need a demo account or demo mode, live back-end services, a privacy policy inside the app, and account deletion if you allow sign-up. Plan one rejection round.',
  },
  {
    n: '11',
    title: 'Budget maintenance as a standing line',
    body:
      'Two operating system releases a year, rising build requirements, expiring certificates and push keys, and libraries that stop being maintained. Budget it like hosting.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Stack comparison table
───────────────────────────────────────────────────────────────────────────── */

type CompRow = { label: string; rn: string; native: string; web: string };

const COMPARISON_ROWS: ReadonlyArray<CompRow> = [
  {
    label: 'What you are buying',
    rn: 'One codebase that ships to both stores',
    native: 'The best possible feel on each platform',
    web: 'No store listing, no review, no install',
  },
  {
    label: 'Team you have to keep',
    rn: 'TypeScript people, plus one who can read native code',
    native: 'Two skill sets, or one person context-switching badly',
    web: 'The web team you already have',
  },
  {
    label: 'Time to reach both platforms',
    rn: 'One build, two submissions',
    native: 'Two builds, two backlogs, two submissions',
    web: 'Live the moment you deploy',
  },
  {
    label: 'Where the difference shows',
    rn: 'Complex gestures, very long lists, custom camera work',
    native: 'Nothing feels borrowed, animation is exact',
    web: 'Scroll and animation give it away on older phones',
  },
  {
    label: 'Shipping an urgent fix',
    rn: 'Code-level fixes move fast, native changes need a submission',
    native: 'Every fix is a submission and a review wait',
    web: 'Deploy and it is live in minutes',
  },
  {
    label: 'The upgrade tax nobody quotes',
    rn: 'Framework releases, two annual OS releases, a chain of libraries',
    native: 'Two platform SDKs, once a year each, well documented',
    web: 'Browser updates, mostly invisible',
  },
  {
    label: 'What breaks first',
    rn: 'A third-party package that stops being maintained',
    native: 'The two apps quietly drift apart in behaviour',
    web: 'Whatever you assumed worked the same on iPhone',
  },
  {
    label: 'Honest default for a shop',
    rn: 'Yes, for most of them',
    native: 'When the app is the product, not the shop window',
    web: 'When you are not sure you need an app, which is most of the time',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Who ranks for this query (also powers the second ItemList)
───────────────────────────────────────────────────────────────────────────── */

type Rival = { domain: string; note: string; detail: string };

const RIVALS: ReadonlyArray<Rival> = [
  {
    domain: 'excellentwebworld.com',
    note: 'Position one, a straight service page',
    detail:
      'A development shop with a broad, well-organised services page. The best place to see the standard scope list this category sells.',
  },
  {
    domain: 'scnsoft.com',
    note: 'Position three, also cited by the AI Overview',
    detail:
      'A large consultancy with genuinely deep technical writing across commerce platforms. Read them for reference material on architecture rather than a sales page.',
  },
  {
    domain: 'appinventiv.com',
    note: 'Position four, also cited by the AI Overview',
    detail:
      'A big app studio with a large portfolio. Strong on enterprise scale, and a better fit than us if your project is closer to a platform than a shop.',
  },
  {
    domain: 'clutch.co',
    note: 'Position five, the directory',
    detail:
      'A review directory, not a supplier. Read the verified client interviews rather than the ordering, since placement is influenced by paid tiers.',
  },
  {
    domain: 'businessofapps.com',
    note: 'Position two, a roundup that ranks and gets cited',
    detail:
      'An industry publication running a developer directory. It ranks and the AI Overview quotes it, a reminder that what an assistant says about agencies often comes from a list.',
  },
  {
    domain: 'sparxitsolutions.com, daffodilsw.com, antino.com',
    note: 'Positions seven, ten and eleven',
    detail:
      'Three more established development companies, all real teams. The thing to compare is who is on your call after the contract is signed.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ data: 27 items across 6 categories, grounded in live US People-Also-Ask
   data pulled for this query in August 2026.
───────────────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'need', label: 'Do you need an app' },
  { key: 'cost', label: 'What drives the cost' },
  { key: 'build', label: 'Building it' },
  { key: 'stores', label: 'App Store & Play rules' },
  { key: 'ai', label: 'AI and ecommerce' },
  { key: 'basics', label: 'Ecommerce basics' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  /* ── Do you need an app ─────────────────────────────────────────────── */
  {
    category: 'need',
    question: 'Do I actually need an ecommerce app?',
    answer:
      'Most small stores do not. An app earns its place when people buy repeatedly: subscriptions, replenishment, loyalty, or a catalogue that changes weekly. If a typical customer buys once or twice a year, a fast mobile site does the same job with none of the install friction.',
  },
  {
    category: 'need',
    question: 'Which is better, a mobile app or a website?',
    answer:
      'They do different jobs. A website is how strangers find you, because search engines and AI assistants read websites, not apps. An app is how existing customers come back, because it sits on the home screen and can send push. Almost every brand needs the first. Fewer need the second.',
  },
  {
    category: 'need',
    question: 'Why make an app instead of a website?',
    answer:
      'Three real reasons. Push notifications land on the lock screen with no inbox in between. Saved login and payment remove taps for people who buy often. And the app can hold a loyalty card, a scanner or an offline catalogue. If none of those change behaviour for your customers, you are buying an icon.',
  },
  {
    category: 'need',
    question: 'Is it cheaper to make an app or a website?',
    answer:
      'A website is cheaper to build and much cheaper to keep. A site can sit untouched for a year and still work. An app faces two operating system releases a year, rising minimum build requirements, expiring certificates and libraries that stop being maintained, so it needs a release cadence forever.',
  },
  {
    category: 'need',
    question: 'Does owning an app make money?',
    answer:
      'An app does not create demand, it deepens it. The money shows up in repeat purchase rate and order frequency, not in new customers, because installs come from people who already know you. If those numbers cannot move, the app has no route to paying for itself.',
  },
  /* ── What drives the cost ───────────────────────────────────────────── */
  {
    category: 'cost',
    question: 'How much does it cost to develop an ecommerce app?',
    answer:
      'We do not publish a figure, because a number written without seeing your catalogue is aimed at an average rather than at you. What moves scope: whether one codebase serves both stores, whether your platform has a usable API, how much checkout is reused, and whether loyalty or subscriptions are involved.',
  },
  {
    category: 'cost',
    question: 'How much does it cost to pay someone to develop an app?',
    answer:
      'The build is the smaller half. Design, back-end integration, store submission, analytics and the first three months of fixes usually add up to more than the first version, and maintenance runs forever. Ask any quote to separate build, launch and standing yearly upkeep.',
  },
  {
    category: 'cost',
    question: 'Can I create an app for my business for free?',
    answer:
      'You can get something live with a no-code app builder that plugs into Shopify or WooCommerce, and for a small catalogue that is a reasonable first test. The limits arrive fast: templated design, a recurring platform fee, limited control over push and deep links, and no easy way to take the work with you.',
  },
  /* ── Building it ────────────────────────────────────────────────────── */
  {
    category: 'build',
    question: 'How can I develop an ecommerce app?',
    answer:
      'Confirm repeat purchase in your own order data. Choose the stack your team can maintain. Connect it to your commerce platform through its API so stock, pricing and orders stay in one place. Keep checkout where it works. Then design the push permission moment, set up deep links, and prepare the submission properly.',
  },
  {
    category: 'build',
    question: 'How do I create an app for my online store?',
    answer:
      'Two routes. A no-code app builder reads your store and gets you live quickly on a templated design with a recurring fee. Or a custom build on React Native or native code talks to your store’s API and gives you control of design, push and data. Start with the first if you are testing the idea.',
  },
  {
    category: 'build',
    question: 'React Native or Swift and Kotlin?',
    answer:
      'React Native for most commerce brands. One codebase reaches both stores, your web developers can read it, and shopping screens do not push the framework hard. Go native when the app itself is the product, when you need deep camera or augmented reality work, or when animation precision is the selling point.',
  },
  {
    category: 'build',
    question: 'Can my Shopify store power a native app?',
    answer:
      'Yes. Shopify’s Storefront API hands the app products, collections, search and a cart, and checkout stays on Shopify so payments, tax, fraud and card compliance remain their problem. Customer accounts, discounts and subscriptions flow through too. The same pattern works for BigCommerce, commercetools and most modern platforms.',
  },
  {
    category: 'build',
    question: 'What happens if someone opens the app with no signal?',
    answer:
      'It should show the cached catalogue and the customer’s own data such as past orders, saved items and loyalty balance, keep the cart on the device, and clearly mark anything stale. It should never take an order offline, because prices, stock and promotions change while it is disconnected.',
  },
  {
    category: 'build',
    question: 'Who maintains the app after launch?',
    answer:
      'Someone has to, permanently. Apple and Google each ship a major release every year and periodically raise minimum build requirements, certificates and push keys expire, and third-party libraries stop being maintained. We hand over with the release process documented, and we either run the upkeep or train your team.',
  },
  /* ── App Store and Play rules ───────────────────────────────────────── */
  {
    category: 'stores',
    question: 'Do I have to use in-app purchase to sell my products?',
    answer:
      'Not for physical goods. Apple’s guideline 3.1.3(e) says apps selling physical goods or services consumed outside the app must use a payment method other than in-app purchase, such as Apple Pay or card entry. Google Play’s billing system likewise does not support purchases of physical goods or physical services.',
  },
  {
    category: 'stores',
    question: 'When does in-app purchase apply to an ecommerce app?',
    answer:
      'When what you sell is digital and used inside the app: downloadable content, in-app credit, or a membership whose benefits are all digital. Memberships mixing physical perks such as free shipping with digital ones are the grey area, and that is worth settling in writing before anyone builds a paywall.',
  },
  {
    category: 'stores',
    question: 'Why do ecommerce apps get rejected from the App Store?',
    answer:
      'The two we see most: guideline 4.2, where the app is a repackaged website with nothing an app uniquely offers, and guideline 2.1, where the reviewer hits a login wall with no working demo account. Add a missing privacy policy link, and no way to delete an account inside the app.',
  },
  {
    category: 'stores',
    question: 'How long does app store review take?',
    answer:
      'Usually days rather than weeks, and both stores are faster than their reputation. What hurts is not the queue but the rejection round: a fix, a resubmission and another wait. Plan the launch with at least one rejection in the schedule and never tie a marketing date to a first submission.',
  },
  {
    category: 'stores',
    question: 'How do I get people to turn push notifications on?',
    answer:
      'Ask at the right moment, not on first launch. Wait until someone places an order, saves an item or joins a restock list, then show your own screen explaining what you will send before triggering the system prompt. On iPhone that prompt appears once. Android 13 and above needs a runtime permission too.',
  },
  {
    category: 'stores',
    question: 'What if a customer does not use the App Store?',
    answer:
      'Then they use your website, which is the main reason the site stays the priority. Android users can install from other stores or directly from a website, and anyone can add a web app to their home screen. None of that is a channel to plan a retail launch around.',
  },
  /* ── AI and ecommerce ───────────────────────────────────────────────── */
  {
    category: 'ai',
    question: 'Can AI build an ecommerce app?',
    answer:
      'AI writes a lot of the code now and is genuinely good at screens, forms and boilerplate. What it does not do is decide whether you need the app, negotiate your platform’s API quirks, get through store review, or own the thing in eighteen months. Treat it as fast hands, not a supplier.',
  },
  {
    category: 'ai',
    question: 'Will AI replace ecommerce?',
    answer:
      'No, but it is changing who does the searching. People increasingly ask an assistant to compare products instead of opening a results page, which means your product data, specifications and policy pages now have to be readable by machines. That is a content and structured data problem, not an app problem.',
  },
  /* ── Ecommerce basics ───────────────────────────────────────────────── */
  {
    category: 'basics',
    question: 'What is the 80/20 rule in ecommerce?',
    answer:
      'The observation that a small share of your products and customers produces most of your revenue. It matters because an app is aimed squarely at that small group of repeat buyers. Work out what share of revenue comes from customers who bought more than once. That number is the business case.',
  },
  {
    category: 'basics',
    question: 'Do I need an LLC to build an app?',
    answer:
      'We build software, not legal structures, so treat this as orientation and speak to an accountant or attorney. People form a company to separate personal from business liability and to sign contracts cleanly. One practical point: developer accounts differ for individuals and organisations, so publishing under a company name usually needs the company to exist first.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD
───────────────────────────────────────────────────────────────────────────── */

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  dateModified: '2026-08-12',
  name: 'Ecommerce App Development Company: iOS and Android Apps for Commerce Brands',
  description:
    'Native ecommerce app development for US commerce brands: when an app pays for itself versus when a fast mobile site is the right answer, React Native against Swift and Kotlin, Shopify and headless back ends, push notification opt-in, app store review and rejection reasons, in-app purchase policy for physical goods, deep linking, offline behaviour and ongoing maintenance.',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'FactoryJet', url: 'https://factoryjet.com' },
  about: { '@type': 'Thing', name: 'Ecommerce mobile app development' },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: 'https://factoryjet.com/images/us/ecommerce-app-development/hero.webp',
    width: 1264,
    height: 848,
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#answer-first', '#do-you-need-an-ecommerce-app'],
  },
  lastReviewed: '2026-08-12',
  reviewedBy: { '@type': 'Person', name: 'Bhavesh Barot', jobTitle: 'Founder' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ecommerce App Development',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType:
    'Ecommerce App Development / Ecommerce Mobile App Development / Shopping App Development / React Native Commerce App / iOS and Android Retail App Development / Shopify Mobile App Development',
  audience: {
    '@type': 'BusinessAudience',
    name: 'US ecommerce, retail and direct to consumer brands with repeat customers',
  },
  description:
    'Native iOS and Android app development for commerce brands, built on React Native or Swift and Kotlin over Shopify, headless or custom commerce back ends. Includes the repeat-purchase assessment that decides whether an app is worth building, push notification permission strategy, universal and app link deep linking, offline behaviour, app store submission and the ongoing release maintenance an app requires.',
  url: PAGE_URL,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Ecommerce app build checklist',
    itemListElement: DELIVERABLES.map((d) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: d.title, description: d.body },
    })),
  },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Eleven things that decide whether an ecommerce app ships or stalls',
  description:
    'The checklist we work through on an ecommerce app project, in roughly the order the decisions have to be made.',
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
  name: 'Companies ranking in the United States for ecommerce app development company',
  description:
    'The development companies, directories and publications appearing on the live United States search results for ecommerce app development company in August 2026, with what each is genuinely useful for.',
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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://factoryjet.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Ecommerce App Development', item: PAGE_URL },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Inline SVG helpers
───────────────────────────────────────────────────────────────────────────── */

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

export default function EcommerceAppDevelopmentPage() {
  return (
    <>
      <script
        id="ecomapp-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="ecomapp-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="ecomapp-itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        id="ecomapp-serp-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rivalListSchema) }}
      />
      <script
        id="ecomapp-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="ecomapp-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader />

      <main style={{ backgroundColor: CREAM }}>
        {/* ─── 1. HERO ─────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 py-16 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
            <div>
              <p className="fj-eyebrow">Ecommerce app development &middot; United States</p>
              <h1
                className="fj-display mt-5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(2.1rem, 4.6vw, 3.5rem)', lineHeight: 1.06, letterSpacing: '-0.03em' }}
              >
                Ecommerce app development, starting with{' '}
                <span style={{ color: ORANGE }}>whether you need one</span>
              </h1>
              <p
                className="mt-6 max-w-[545px] font-fj-body font-medium text-fj-neutral-600"
                style={{ fontSize: '1.125rem', lineHeight: 1.6 }}
              >
                We build native iOS and Android apps for commerce brands, on React Native or Swift and Kotlin,
                over Shopify, a headless back end or your own platform. We also talk a fair number of people
                out of it, because an app earns its keep on repeat purchase and not on launch week.{' '}
                <b className="font-bold text-fj-ink">The app, not the store behind it.</b>
              </p>
              <HeroInlineForm
                region="us"
                source="services_ecommerce_app_development_hero"
                submitLabel="Get an honest app assessment"
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
                <Link
                  href="/services/ecommerce-development"
                  className="font-fj-body text-[0.9375rem] font-semibold underline underline-offset-4"
                  style={{ color: ORANGE_DARK }}
                >
                  Need the store built instead?
                </Link>
              </div>
            </div>

            {/* Right: hero image + the quick self-test */}
            <div className="relative mx-auto w-full max-w-[560px]">
              <div
                className="overflow-hidden rounded-3xl border"
                style={{ borderColor: 'rgba(15,15,18,0.10)', boxShadow: '0 24px 60px rgba(20,18,12,0.12)' }}
              >
                <img
                  src="/images/us/ecommerce-app-development/hero.webp"
                  alt="A shop owner checking a product screen on a phone in a bright studio while a colleague packs an order into a box behind her"
                  width={1264}
                  height={848}
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
                  The four-question test we run first
                </span>
                <ul className="mt-3 space-y-2.5">
                  {[
                    { k: 'Do customers buy more than twice a year', v: 'the whole case' },
                    { k: 'Is there loyalty or a subscription', v: 'strong signal' },
                    { k: 'Is your mobile site already fast', v: 'fix first' },
                    { k: 'Can you ship a release every few weeks', v: 'forever, not once' },
                  ].map((row) => (
                    <li
                      key={row.k}
                      className="flex items-baseline justify-between gap-3 border-t pt-2.5 first:border-t-0 first:pt-0"
                      style={{ borderColor: 'rgba(15,15,18,0.08)' }}
                    >
                      <span className="font-fj-body text-[0.875rem] font-bold text-fj-ink">{row.k}</span>
                      <span className="text-right font-fj-mono text-[0.6875rem] text-fj-neutral-600">
                        {row.v}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-fj-body text-[0.75rem] text-fj-neutral-600">
                  Two clear noes and we will tell you to spend the money on your mobile site instead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. ANSWER-FIRST BLUF ────────────────────────────────────── */}
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
                id="do-you-need-an-ecommerce-app"
                className="fj-display mt-3 text-[1.35rem] font-bold text-fj-ink"
                style={{ letterSpacing: '-0.02em' }}
              >
                Do you need an ecommerce app?
              </h2>
              <p className="mt-3 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                <b className="text-fj-ink">Most small stores do not need an app.</b> A native ecommerce app
                pays for itself when people buy from you again and again: repeat purchase, subscription,
                loyalty, or a catalogue people browse weekly. If your customers buy once a year, a fast mobile
                site does the same job with far less work.
              </p>
              <p className="mt-4 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                An app is a retention tool, not an acquisition tool. Nobody discovers a single retail brand by
                searching the App Store the way they find you in Google or in an AI assistant. Installs come
                from customers you already have, so an app cannot bring you new people. It can make the people
                you already have come back more often, and that only pays when there are enough of them.
              </p>
              <p className="mt-4 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                Where this page sits among the others. This one is the{' '}
                <b className="text-fj-ink">native mobile app</b> for a commerce brand. Building the store
                itself is{' '}
                <Link
                  href="/services/ecommerce-development"
                  className="font-semibold underline underline-offset-2"
                  style={{ color: ORANGE_DARK }}
                >
                  ecommerce development
                </Link>
                . Software behind a login that is not a shop, such as a portal or a dashboard, is{' '}
                <Link
                  href="/services/web-application-development"
                  className="font-semibold underline underline-offset-2"
                  style={{ color: ORANGE_DARK }}
                >
                  web application development
                </Link>
                . The decoupled architecture an app and a website can share is{' '}
                <Link
                  href="/headless-commerce"
                  className="font-semibold underline underline-offset-2"
                  style={{ color: ORANGE_DARK }}
                >
                  headless commerce
                </Link>
                . Four jobs, four scopes, and mixing them up is how projects get quoted wrong.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 3. WHEN AN APP PAYS, WHEN IT DOES NOT ───────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              The part most agencies skip
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[820px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              When an app pays for itself, and{' '}
              <span style={{ color: ORANGE }}>when it never will</span>
            </h2>
            <p className="mt-4 max-w-[760px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Every line below comes from one question: does this brand have customers who come back? An app
              multiplies existing habit. It cannot create habit that is not there.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-2xl p-7 md:p-8" style={{ background: GREEN_SOFT }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">Build the app</h3>
                <ul className="mt-5 space-y-3.5">
                  {APP_PAYS.map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-ink">
                      <CheckCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border p-7 md:p-8" style={{ borderColor: 'rgba(15,15,18,0.12)' }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">Fix the mobile site instead</h3>
                <ul className="mt-5 space-y-3.5">
                  {APP_DOES_NOT.map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-neutral-700">
                      <CrossCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">
                  If that is you, the money is better spent on{' '}
                  <Link href="/services/ecommerce-development" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                    the store itself
                  </Link>{' '}
                  or on{' '}
                  <Link href="/services/ecommerce-seo" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                    getting found
                  </Link>
                  . We say so on the first call, not after a discovery phase.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl p-7 md:p-8" style={{ background: CREAM }}>
              <h3 className="fj-display text-[1.15rem] font-bold text-fj-ink">
                The middle option: a progressive web app
              </h3>
              <p className="mt-3 max-w-[900px] font-fj-body text-[0.9688rem] leading-[1.7] text-fj-neutral-700">
                A progressive web app is your site with an icon on the home screen, offline caching for pages
                people have already seen, and push on Android. No store listing, no review queue, no install.
                For a brand that is unsure it is the sensible middle step: you find out whether people keep
                your icon before committing to two native codebases. What you give up is push reliability on
                iPhone, saved payment in a native wallet flow, hardware access such as barcode scanning, and
                how a very long product list feels under a thumb. If none of those four matter, you have your
                answer.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 4. STACK CHOICE + IMAGE + TABLE ─────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative mx-auto w-full max-w-[520px]">
              <img
                src="/images/us/ecommerce-app-development/app-screens.webp"
                alt="Two colleagues reviewing printed app screen layouts pinned to a studio wall, each showing a product photo and a short label"
                width={1200}
                height={896}
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-2xl border object-cover"
                style={{ borderColor: 'rgba(15,15,18,0.10)', boxShadow: '0 18px 44px rgba(20,18,12,0.09)' }}
              />
            </div>

            <div>
              <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
                React Native, native, or neither
              </p>
              <h2
                className="fj-display mt-3.5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
              >
                Pick the stack your team can{' '}
                <span style={{ color: ORANGE }}>still maintain in three years</span>
              </h2>
              <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                Shopping screens are product grids, filters, a cart and an account area. They do not push a
                framework hard. That is why React Native is the right default for most commerce brands: one
                codebase reaches both stores and the people who maintain your website can read it. Swift and
                Kotlin earn their extra cost when the app is the product rather than the shop window, or when
                you need serious camera, augmented reality or wallet work.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  {
                    t: 'Maintenance decides it, not the demo',
                    s: 'Two codebases means two backlogs, two release trains and two sets of people to keep',
                  },
                  {
                    t: 'A wrapped website is not an app',
                    s: 'Apple rejects apps that are a repackaged website with nothing an app uniquely offers',
                  },
                  {
                    t: 'Check who owns the code before you sign',
                    s: 'App builders and some agencies keep the codebase, which quietly decides your next three years',
                  },
                ].map((item) => (
                  <li key={item.t} className="flex items-start gap-3.5 rounded-2xl bg-white px-5 py-4">
                    <CheckCircle size={20} />
                    <div className="font-fj-body text-[0.9688rem] font-bold text-fj-ink">
                      {item.t}
                      <small className="mt-0.5 block font-fj-body text-[0.8125rem] font-medium text-fj-neutral-600">
                        {item.s}
                      </small>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-[1180px] px-6 md:px-8">
            <div className="overflow-x-auto rounded-2xl border bg-white" style={{ borderColor: 'rgba(15,15,18,0.10)' }}>
              <table className="w-full min-w-[820px] border-collapse text-left">
                <caption className="sr-only">
                  Comparison of React Native, native Swift and Kotlin, and a progressive web app for an
                  ecommerce brand, across what you are buying, the team you need, time to reach both
                  platforms, where the difference shows, shipping urgent fixes, the ongoing upgrade burden,
                  what breaks first, and the honest default.
                </caption>
                <thead>
                  <tr style={{ background: PEACH }}>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      Decision
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em]" style={{ color: ORANGE_DARK }}>
                      React Native
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      Swift + Kotlin
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      Progressive web app
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr key={row.label} style={{ background: i % 2 === 1 ? CREAM : '#FFFFFF' }}>
                      <th
                        scope="row"
                        className="border-t p-4 font-fj-body text-[0.875rem] font-bold text-fj-ink"
                        style={{ borderColor: 'rgba(15,15,18,0.08)' }}
                      >
                        {row.label}
                      </th>
                      <td
                        className="border-t p-4 font-fj-body text-[0.875rem] font-medium text-fj-ink"
                        style={{ borderColor: 'rgba(15,15,18,0.08)', background: i % 2 === 1 ? '#F3F8F5' : GREEN_SOFT }}
                      >
                        {row.rn}
                      </td>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.native}
                      </td>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.web}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 font-fj-body text-[0.8125rem] text-fj-neutral-600">
              Scroll the table sideways on smaller screens.
            </p>
          </div>
        </section>

        {/* ─── 5. WHAT SITS BEHIND THE APP ─────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              The back end
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[820px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              The app is a client. Your commerce platform{' '}
              <span style={{ color: ORANGE }}>stays in charge</span>
            </h2>
            <p className="mt-4 max-w-[780px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Products, stock, pricing, promotions, customers and orders live in one system and the app reads
              them. Anything the app works out for itself will drift from the website within a month, and a
              customer will find the gap before your team does.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="rounded-2xl border p-7 md:p-8" style={{ borderColor: 'rgba(15,15,18,0.09)', background: CREAM }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">On Shopify</h3>
                <p className="mt-3 font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
                  Shopify&rsquo;s Storefront API hands the app products, collections, search and a cart, and
                  checkout stays on Shopify. That is the single most important decision on the project.
                  Payments, tax, fraud screening and card compliance are the most expensive things in commerce
                  to get wrong, and rebuilding them inside an app to save two taps is what we get called in to
                  unpick.
                </p>
                <ul className="mt-5 space-y-3">
                  {[
                    'One catalogue, one price, one promotion engine',
                    'Accounts and order history shared with the website',
                    'Discounts, gift cards and subscriptions handled by the platform, not reimplemented',
                    'Inventory that matches what the site shows, in the same moment',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-ink">
                      <CheckCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border p-7 md:p-8" style={{ borderColor: 'rgba(15,15,18,0.09)', background: CREAM }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">On headless or custom</h3>
                <p className="mt-3 font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
                  If you already run a decoupled front end, the app is another client of the API layer you
                  built for the website, which makes it the cheapest app you will ever commission. If you are
                  not there yet and an app is on the roadmap, read our{' '}
                  <Link href="/headless-commerce" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                    headless commerce
                  </Link>{' '}
                  page first.
                </p>
                <ul className="mt-5 space-y-3">
                  {[
                    'Ask one question of any platform: can it serve products, stock, cart, customer and orders over an API',
                    'BigCommerce, commercetools and modern WooCommerce setups all answer yes, with varying quality',
                    'Older custom stores with no clean API are where app budgets actually go',
                    'One identity across web, app and loyalty, or customers will tell you about it loudly',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-ink">
                      <CheckCircle size={18} fill={LAV} /> {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 6. MID-PAGE CTA (not optional) ──────────────────────────── */}
        <section className="py-12 md:py-14" style={{ background: PEACH }}>
          <div className="mx-auto flex max-w-[1180px] flex-col items-start justify-between gap-6 px-6 md:px-8 lg:flex-row lg:items-center">
            <div className="max-w-[640px]">
              <h2 className="fj-display text-[1.5rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.02em' }}>
                Want to know whether an app is worth it for your store?
              </h2>
              <p className="mt-2.5 font-fj-body text-[0.9688rem] leading-[1.6] text-fj-neutral-700">
                Send your store URL and roughly how often people reorder. We come back with a straight yes or
                no, the reasoning, and what we would do instead if the answer is no.
              </p>
            </div>
            <ModalCTAButton label="Get an honest app assessment" region="us" modalVariant="default" btnVariant="primary-light" />
          </div>
        </section>

        {/* ─── 7. PUSH + RETENTION (image) ─────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
                Push notifications
              </p>
              <h2
                className="fj-display mt-3.5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
              >
                Sending push is easy. Being{' '}
                <span style={{ color: ORANGE }}>allowed to</span> is the whole game
              </h2>
              <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                Push is the reason most retail apps exist. It is the only channel you own that lands on a lock
                screen with no inbox in between, and it is permission-gated on both platforms. On iPhone the
                system prompt appears once. On Android 13 and above, notifications need a runtime permission of
                their own. Apple also states plainly that an app may not require someone to turn on push in
                order to use it.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="rounded-2xl p-6" style={{ background: GREEN_SOFT }}>
                  <h3 className="fj-display text-[1.05rem] font-bold text-fj-ink">Ask like this</h3>
                  <ul className="mt-4 space-y-3">
                    {[
                      'After an order, a saved item or a restock signup',
                      'Your own screen first, explaining what you will send',
                      'Trigger the system prompt only after they say yes to yours',
                      'Offer a quieter second chance later',
                    ].map((line) => (
                      <li key={line} className="flex items-start gap-3 font-fj-body text-[0.875rem] font-medium leading-[1.5] text-fj-ink">
                        <CheckCircle size={16} /> {line}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border p-6" style={{ borderColor: 'rgba(15,15,18,0.12)' }}>
                  <h3 className="fj-display text-[1.05rem] font-bold text-fj-ink">Not like this</h3>
                  <ul className="mt-4 space-y-3">
                    {[
                      'The system prompt on first launch, before anyone knows what you sell',
                      'Blocking the app until they agree, which breaks Apple’s rules outright',
                      'A promotion every day until people switch it off for good',
                      'Treating installs as the metric instead of opt-in rate',
                    ].map((line) => (
                      <li key={line} className="flex items-start gap-3 font-fj-body text-[0.875rem] font-medium leading-[1.5] text-fj-neutral-700">
                        <CrossCircle size={16} /> {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-7 max-w-[760px] font-fj-body text-[0.9688rem] leading-[1.7] text-fj-neutral-700">
                What to send: back in stock on a saved item, order shipped and out for delivery, a price drop
                on something watched, a subscription about to renew, points about to expire, early access to a
                drop. Every one of those is information the person asked for. Anything that reads as
                &ldquo;we miss you&rdquo; spends permission you cannot easily get back.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-[500px]">
              <img
                src="/images/us/ecommerce-app-development/retention.webp"
                alt="Two people in aprons in a bright fulfilment room, one holding a phone showing a product screen while the other tapes a shipping box"
                width={1200}
                height={896}
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-2xl border object-cover"
                style={{ borderColor: 'rgba(15,15,18,0.10)', boxShadow: '0 18px 44px rgba(20,18,12,0.09)' }}
              />
            </div>
          </div>
        </section>

    

        <MidPageCTA
          headline={'Not sure an app is worth building?'}
          sub={'Most stores do not need one. Tell us your repeat purchase rate and we will give you an honest yes or no.'}
          label={'Get a straight answer'}
        />

        {/* ─── 8. STORE RULES: IAP, REJECTION, DEEP LINKS, OFFLINE ──────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              The rules that trip everyone up
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[840px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              App review, rejection, and the in-app purchase question{' '}
              <span style={{ color: ORANGE }}>everyone gets backwards</span>
            </h2>
            <p className="mt-4 max-w-[800px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Publishing an app means living inside two companies&rsquo; rulebooks. Both are public and
              readable in an afternoon. The rules below are the ones that cost real projects real weeks, and
              each is quoted from the current published guidelines.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-2xl border bg-white p-7 md:p-8" style={{ borderColor: 'rgba(15,15,18,0.09)' }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">
                  Physical goods do not go through in-app purchase
                </h3>
                <p className="mt-3 font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
                  Nearly everybody has this backwards. Apple&rsquo;s guideline 3.1.3(e) says that if your app
                  lets people buy physical goods or services consumed outside the app, you{' '}
                  <b className="text-fj-ink">must</b> use a payment method other than in-app purchase, such as
                  Apple Pay or ordinary card entry. Google Play says the same from the other side: its billing
                  system does not support purchases of physical goods such as groceries, clothing, appliances
                  or electronics, nor physical services such as transport, airfare or food delivery.
                </p>
                <p className="mt-4 font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
                  So a normal store app takes card payments the way your website does and pays no store
                  commission on the goods. The rules flip for digital items: downloadable content, in-app
                  credit, or a membership whose benefits are all digital. Memberships mixing physical perks
                  like free shipping with digital ones are the grey area, and that gets settled in writing
                  before anyone builds a paywall.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-7 md:p-8" style={{ borderColor: 'rgba(15,15,18,0.09)' }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">
                  The rejections we see over and over
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'Guideline 4.2, minimum functionality. Apple says an app has to be more than a repackaged website, and that if it is not useful, unique or app-like it does not belong on the store',
                    'Guideline 2.1, app completeness. Apple asks for an active demo account or a fully featured demo mode, with back-end services live during review',
                    'Guideline 5.1.1(v). If your app supports account creation, you must also offer account deletion inside the app',
                    'Guideline 5.1.1(i). A privacy policy link is required in the store listing and inside the app itself',
                    'App Tracking Transparency. Tracking people across other companies’ apps and sites for advertising means asking through the ATT prompt',
                    'Placeholder content, dead links, or a build that crashes on the reviewer’s device',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9062rem] font-medium leading-[1.55] text-fj-neutral-700">
                      <CrossCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="rounded-2xl p-7 md:p-8" style={{ background: LAV_SOFT }}>
                <h3 className="fj-display text-[1.15rem] font-bold text-fj-ink">Deep links, or the app is an island</h3>
                <p className="mt-3 font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
                  Every product link you send should open that product in the app when it is installed and the
                  web page when it is not. On iPhone that is universal links, on Android it is app links, and
                  both need a verification file on your own domain: apple-app-site-association and
                  assetlinks.json. The harder case is someone tapping a link with no app, installing it, and
                  still landing on that product. That does not happen by default, and retrofitting it after
                  launch is a project of its own.
                </p>
              </div>
              <div className="rounded-2xl p-7 md:p-8" style={{ background: PEACH }}>
                <h3 className="fj-display text-[1.15rem] font-bold text-fj-ink">Offline, done honestly</h3>
                <p className="mt-3 font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
                  An ecommerce app should never take an order with no connection, because prices, stock and
                  promotions all move. It should show the catalogue it already cached, show the customer their
                  own data such as past orders, saved items and loyalty balance, keep the cart on the device,
                  and mark anything stale. The two worst patterns are a spinner that never resolves and a cart
                  built offline that fails as a whole at checkout.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 9. SHIP CHECKLIST (listicle, powers ItemList) ────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              The build checklist
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[820px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Eleven things that decide whether an ecommerce app{' '}
              <span style={{ color: ORANGE }}>ships or stalls</span>
            </h2>
            <p className="mt-4 max-w-[740px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              In roughly the order the decisions have to be made. Only one of the eleven is about how the app
              looks. If a proposal is mostly screens, the expensive decisions are being left for you to make
              later, under deadline.
            </p>

            <ol className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {DELIVERABLES.map((d) => (
                <li
                  key={d.n}
                  className="flex flex-col rounded-2xl border p-6"
                  style={{ borderColor: 'rgba(15,15,18,0.09)', background: CREAM }}
                >
                  <span className="font-fj-mono text-[0.8125rem] font-bold" style={{ color: ORANGE_DARK }}>
                    {d.n}
                  </span>
                  <h3 className="fj-display mt-2 text-[1.075rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {d.title}
                  </h3>
                  <p className="mt-2.5 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-600">{d.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─── 10. WHO ELSE RANKS HERE ─────────────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Who else you are looking at
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[820px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              The companies that own this search, and{' '}
              <span style={{ color: ORANGE }}>what each is good for</span>
            </h2>
            <p className="mt-4 max-w-[800px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Pulled from the live United States results in August 2026. Several are strong teams and you
              should open them. We are one option among many and would rather say so here.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
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

            <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-2xl p-7 md:p-8" style={{ background: GREEN_SOFT }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">What we do differently</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'We run the repeat-purchase check before we quote, and have talked people out of the project on the strength of it',
                    'We build the store and the headless layer too, so the app is designed by people who know what the back end can give it',
                    'Store submission, review notes and the rejection round are in scope, not a surprise in month four',
                    'The codebase and the developer accounts are yours. We hold neither hostage',
                    'Bhavesh Barot, our founder, runs the assessment and stays on the calls',
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
                    'The big app studios in these results have far larger portfolios of shipped apps than we do',
                    'If you need a hundred-person delivery team on a multi-year platform build, one of them fits better than us',
                    'We publish no client counts, no invented case study numbers and no testimonials we cannot stand behind',
                    'We are a challenger on domain authority and compete on the thinking, not on being the biggest name in the results',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-neutral-700">
                      <CrossCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-8 max-w-[900px] font-fj-body text-[0.9375rem] leading-[1.7] text-fj-neutral-700">
              One thing worth knowing about this search: Google shows an AI Overview for it, citing nine
              sources, and six of those nine do not appear anywhere in the top twelve organic results. The
              summary at the top of the page and the list underneath draw on largely different sets of
              companies. If you are shortlisting from what an assistant tells you, open the sites and check the
              work, because being named in a summary is not the same as being the right fit.
            </p>
          </div>
        </section>

        {/* ─── 11. CITATIONS ───────────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Check us against the source
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[780px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Where the store-policy claims on this page{' '}
              <span style={{ color: ORANGE }}>come from</span>
            </h2>
            <p className="mt-4 max-w-[740px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Do not take an agency&rsquo;s word for what Apple and Google allow. All three sources below are
              the platform owners&rsquo; own current documentation.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {[
                {
                  src: 'Apple',
                  title: 'App Review Guidelines',
                  body:
                    'Guideline 3.1.3(e): apps enabling purchase of physical goods or services consumed outside the app must use payment methods other than in-app purchase. Guideline 4.2 sets the bar above a repackaged website, 2.1 asks for a demo account, and 5.1.1(v) requires in-app account deletion.',
                  href: 'https://developer.apple.com/app-store/review/guidelines/',
                },
                {
                  src: 'Google Play',
                  title: 'Payments policy and Play billing',
                  body:
                    'Google Play lists what its billing system does not support: purchases or rentals of physical goods such as groceries, clothing, appliances and electronics, and physical services such as transport, airfare and food delivery. That is why an ordinary store app takes card payments directly.',
                  href: 'https://support.google.com/googleplay/android-developer/answer/10281818',
                },
                {
                  src: 'Android Developers',
                  title: 'Notification runtime permission',
                  body:
                    'Android 13, which is API level 33, and higher supports a runtime permission for sending notifications from an app: POST_NOTIFICATIONS. That is the technical reason a push strategy has to be designed around a permission moment on Android as well as on iPhone.',
                  href: 'https://developer.android.com/develop/ui/views/notifications/notification-permission',
                },
              ].map((c) => (
                <div key={c.href} className="flex flex-col rounded-2xl border p-6" style={{ borderColor: 'rgba(15,15,18,0.09)', background: CREAM }}>
                  <span className="font-fj-mono text-[10px] uppercase tracking-[0.1em] text-fj-neutral-600">{c.src}</span>
                  <h3 className="fj-display mt-2 text-[1.075rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
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

            <p className="mt-8 max-w-[880px] font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
              Platform rules change. Every quotation above was checked against the live pages on{' '}
              {REVIEWED_DATE}, and you should check them again before committing to a payment or membership
              model. Search volume, keyword difficulty and ranking positions quoted on this page come from
              DataForSEO, United States, pulled in August 2026.
            </p>
          </div>
        </section>

        {/* ─── 12. WHO YOU WORK WITH (E-E-A-T) ─────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: LAV_SOFT }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: LAV }}>
              Who you actually work with
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[800px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              We build the store, the headless layer and the app, so{' '}
              <span style={{ color: ORANGE_DARK }}>nothing gets handed over a wall</span>
            </h2>
            <p className="mt-4 max-w-[820px] font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
              Most app projects break at the join with the commerce platform: the app shows a price the site
              does not, the loyalty balance is wrong, the account is separate. We work on both sides of that
              line, so we can tell you early what the back end can and cannot give the app instead of
              discovering it in week nine.
            </p>

            <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                { t: 'Founder-led assessment', s: 'Bhavesh Barot runs the repeat-purchase analysis himself, before any quote exists' },
                { t: 'Commerce first, app second', s: 'We have built stores, headless front ends and integrations, so the API conversation is not new' },
                { t: 'Store rules read, not guessed', s: 'Submission, review notes, privacy disclosures and payment policy are part of the scope' },
                { t: 'No invented numbers, ever', s: 'No fabricated case studies, no borrowed testimonials, no promised revenue lifts' },
              ].map((item) => (
                <div key={item.t} className="flex items-start gap-3.5 rounded-2xl bg-white px-5 py-4">
                  <CheckCircle size={20} fill={LAV} />
                  <div className="font-fj-body text-[0.9688rem] font-bold text-fj-ink">
                    {item.t}
                    <small className="mt-0.5 block font-fj-body text-[0.8125rem] font-medium text-fj-neutral-600">
                      {item.s}
                    </small>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 font-fj-mono text-[0.78rem] text-fj-neutral-600">
              Reviewed &amp; updated {REVIEWED_DATE} &middot; Bhavesh Barot, Founder, FactoryJet
            </p>
            <div className="mt-6">
              <ModalCTAButton label="Talk to the Founder" region="us" modalVariant="default" btnVariant="primary-light" />
            </div>
          </div>
        </section>

        {/* ─── 13. RELATED SERVICES (internal links) ───────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Where to go next
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[700px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Related <span style={{ color: ORANGE }}>services</span>
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  label: 'Ecommerce development',
                  href: '/services/ecommerce-development',
                  desc: 'Building the store itself: the site people buy on. Start here if the one you have is slow.',
                },
                {
                  label: 'Headless commerce',
                  href: '/headless-commerce',
                  desc: 'The decoupled architecture an app and a website can share. A clean API layer now is the cheapest route to an app later.',
                },
                {
                  label: 'Web application development',
                  href: '/services/web-application-development',
                  desc: 'Software behind a login that is not a shop: portals, dashboards, internal tools and MVPs.',
                },
                {
                  label: 'Shopify development',
                  href: '/services/shopify-development',
                  desc: 'Theme, app and integration work, including the Storefront API layer a native app reads from.',
                },
                {
                  label: 'Ecommerce SEO',
                  href: '/services/ecommerce-seo',
                  desc: 'Getting found in the first place. Apps do not bring new customers. This is the work that does.',
                },
                {
                  label: 'AI agent development',
                  href: '/services/ai-agent-development',
                  desc: 'Automating the work behind the store: support triage, product data and merchandising.',
                },
              ].map((svc) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="flex min-h-[168px] flex-col rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1"
                  style={{ border: '1px solid rgba(15,15,18,0.10)', background: CREAM }}
                >
                  <h3 className="fj-display text-[1.15rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {svc.label}
                  </h3>
                  <p className="mt-2 flex-1 font-fj-body text-[0.9062rem] leading-[1.55] text-fj-neutral-600">
                    {svc.desc}
                  </p>
                  <span className="mt-5 font-fj-body text-[0.8125rem] font-bold" style={{ color: ORANGE_DARK }}>
                    Explore &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 14. FAQ ─────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="Ecommerce app development FAQ"
          headline="The questions store owners actually search"
          lead="Twenty-seven answers covering whether you need an app at all, what really drives the cost, how these get built, the App Store and Google Play rules that catch people out, where AI fits, and the ecommerce basics people ask alongside this one. If yours is not here, send a short brief and we usually reply within one business day."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ─── 15. FINAL CTA (the one dark section) ────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="BEFORE YOU COMMISSION ANYTHING"
          headline="Find out whether an app is worth building for your store"
          sub="Book a call with the founder. We will look at how often your customers reorder, what your commerce platform can hand an app through its API, how fast your mobile site is today, and whether push has anything useful to say to your customers. Then we tell you plainly whether to build the app or spend the money elsewhere."
          primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See ecommerce development', href: '/services/ecommerce-development' }}
          objectionHandler="Founder-led. You own the codebase and the developer accounts, and we will tell you not to build it if the numbers say so."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
