import type { Metadata } from 'next';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import FinalCTA from '@/components/v2/FinalCTA';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/restaurant-website-design: US restaurant web design vertical page.

   Intent owned by THIS page (read before editing):
     restaurant website design (720/mo, KD 14) · restaurant web design ·
     restaurant website design ideas · best restaurant website design ·
     restaurant website templates · do restaurants need a website ·
     what should a restaurant website include · restaurant website cost ·
     restaurant website with online ordering · restaurant menu website.

   Positioning note, from the live SERP pulled 2026-08-12: the top 12 for the
   head term is dribbble, pinterest x2, canva, framer, reddit, figma, getbento,
   intechnic, awwwards, onepagelove and youtube. There is not one clean agency
   competitor on page one. The query is dominated by inspiration galleries and
   template or builder PRODUCTS. So the honest angle for this page is not "hire
   an agency", it is "here is when a template is genuinely the right answer and
   when it is not", with an explicit do-not-hire-us section. Pretending every
   restaurant needs a custom build would lose to Canva anyway and would deserve to.

   Does NOT own: generic web design (/services/web-design), redesigns
   (/services/website-redesign), map pack work (/services/local-seo), AI answer
   engines (/services/ai-seo), storefront commerce (/services/ecommerce-development).
   Each is linked rather than duplicated.

   Build rules honoured: no em dashes, no currency figures anywhere, plain <img>
   only, FinalCTA (never GetFreeQuoteCTA), exactly one dark section (the closing
   FinalCTA), no shared files touched, alternates declared inline. Cost-shaped
   PAA questions are answered with scope drivers, never with a number.

   Schema: WebPage + speakable, Service, ItemList (build checklist), ItemList
   (the option set), FAQPage derived from FAQ_ITEMS, BreadcrumbList. Every const
   below is rendered in a script tag at the top of the component. Verified by eye.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const PAGE_URL = 'https://factoryjet.com/services/restaurant-website-design';
const HERO_IMG = 'https://factoryjet.com/images/us/restaurant-website-design/hero.webp';
const REVIEWED_DATE = 'August 12, 2026';

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
  title: 'Restaurant Website Design: Menus, Ordering & Reservations | FactoryJet',
  description:
    'Restaurant website design that starts with the menu as real HTML instead of a PDF, then handles online ordering, reservations, Google Business Profile, holiday hours and multiple locations. Straight advice on when a template is the better buy.',
  keywords: [
    'restaurant website design',
    'restaurant web design',
    'restaurant website design ideas',
    'best restaurant website design',
    'restaurant website design company',
    'restaurant website designer',
    'restaurant website development',
    'restaurant website builder',
    'restaurant website templates',
    'restaurant menu website',
    'online menu for restaurant',
    'restaurant website with online ordering',
    'restaurant online ordering website',
    'restaurant reservation website',
    'do restaurants need a website',
    'what should a restaurant website include',
    'restaurant website cost',
    'cafe website design',
    'bar website design',
    'multi location restaurant website',
    'restaurant seo',
    'restaurant google business profile',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Restaurant Website Design: Menus, Ordering & Reservations | FactoryJet',
    description:
      'The menu belongs in HTML, not a PDF. Restaurant website design covering online ordering economics, reservation systems, Google Business Profile, holiday hours and multi-location structure.',
    url: PAGE_URL,
    images: [
      {
        url: HERO_IMG,
        width: 1264,
        height: 848,
        alt: 'Guest at a bright restaurant table reading a menu on her phone while a server sets a nearby table',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restaurant Website Design: Menus, Ordering & Reservations | FactoryJet',
    description:
      'A restaurant site has one job on a phone: menu, hours, location, order or book. Here is how to build that, and when a template is the smarter buy.',
    images: [HERO_IMG],
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
   Why restaurant sites fail (answer-first support tiles)
───────────────────────────────────────────────────────────────────────────── */

type Failure = { tag: string; title: string; body: string; tint: string; accent: string };

const FAILURES: ReadonlyArray<Failure> = [
  {
    tag: '01',
    title: 'The menu is a PDF',
    body:
      'A PDF opens in a viewer, forces pinch and zoom on a phone, has no headings a search engine can quote, and cannot be changed by whoever is on shift when the special sells out. Many are flat artwork with no selectable text at all.',
    tint: PEACH,
    accent: ORANGE_DARK,
  },
  {
    tag: '02',
    title: 'Hours that are quietly wrong',
    body:
      'A guest who drives to a closed door does not forgive it, and usually leaves a review about it. Hours on the site drift from hours on the Business Profile, and neither one knows about the holiday.',
    tint: LAV_SOFT,
    accent: LAV,
  },
  {
    tag: '03',
    title: 'Every order routed through a marketplace',
    body:
      'Delivery apps are a real sales channel and we will not tell you to switch them off. But commission is charged on the order total, the customer belongs to the app, and the reorder happens there. A direct order keeps the margin and the email address.',
    tint: GREEN_SOFT,
    accent: GREEN,
  },
  {
    tag: '04',
    title: 'Photos that came with the template',
    body:
      'A generic bowl of pasta on a slate board tells a guest nothing and looks like every other site in town. Real photographs of your plates, your room at seven in the evening and the people who work there are the cheapest credibility available.',
    tint: PEACH,
    accent: ORANGE_DARK,
  },
  {
    tag: '05',
    title: 'It is slow on cellular data',
    body:
      'People look you up on a pavement outside, on a phone, on a patchy signal, deciding between you and the place across the road. A homepage carrying a full-screen video, a slider and three font families loses that comparison before it renders.',
    tint: GREEN_SOFT,
    accent: GREEN,
  },
  {
    tag: '06',
    title: 'Locations stacked on one page',
    body:
      'Two or five sites jammed into one Locations page means no location has an address, hours, a menu or a map of its own. Google has nothing per branch to rank, and a guest searching your name plus a neighbourhood lands on a page about elsewhere.',
    tint: LAV_SOFT,
    accent: LAV,
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Build checklist listicle (also powers the ItemList schema)
───────────────────────────────────────────────────────────────────────────── */

type Deliverable = { n: string; title: string; body: string };

const DELIVERABLES: ReadonlyArray<Deliverable> = [
  {
    n: '01',
    title: 'The menu as a real web page, one page per menu',
    body:
      'Brunch, dinner, drinks and the kids menu each get their own URL. Every dish is a heading or a list item with a plain-text description under it, and dietary tags are words in the markup rather than icons. That is what makes a menu quotable.',
  },
  {
    n: '02',
    title: 'Menu structured data pointing at that page',
    body:
      'Google documents a menu property on local business structured data, described as the fully-qualified URL of the menu for food establishments. That field wants a page, not a download. It is one of the few places you hand Google a fact rather than a guess.',
  },
  {
    n: '03',
    title: 'Hours in one place, feeding everything else',
    body:
      'Regular hours, kitchen close, last seating, and special hours for holidays. Google lets you set special hours for up to six days in a row and recommends confirming them for official holidays even when nothing changes. Site and profile should never disagree.',
  },
  {
    n: '04',
    title: 'Order buttons that go where you want them to go',
    body:
      'Your Business Profile carries links for food ordering, pickup and delivery, and Google lets third-party partners add their own automatically. A marketplace can be taking a cut of orders you never routed to it. Audit the profile, set your preferred link, remove the rest.',
  },
  {
    n: '05',
    title: 'One reservation system, used everywhere',
    body:
      'OpenTable, Resy, Tock, SevenRooms, whatever suits your covers. The failure mode is running two, because then the floor plan lives in two places and you double-book a Saturday. Pick one, embed it, add it as the reservation link on the Business Profile.',
  },
  {
    n: '06',
    title: 'Your own photography, used at the right size',
    body:
      'Plates you actually serve, the room at service, the people who work there. Compressed properly and given explicit width and height so the page does not jump while it loads. The same set feeds the Business Profile.',
  },
  {
    n: '07',
    title: 'A phone number that dials in one tap',
    body:
      'Wrapped in a tel link, in the header, on every page, on mobile. A lot of restaurant sites render the number inside an image or hide it behind a Contact page. For a walk-up guest, the tap is the conversion.',
  },
  {
    n: '08',
    title: 'Built to load fast on a bad signal',
    body:
      'No video header, no carousel nobody swipes, no font stack. Images sized for the slot they sit in. This never appears in a mockup and it is where most of the build time goes.',
  },
  {
    n: '09',
    title: 'A page per location, and a profile per location',
    body:
      'Each branch gets its own URL, address, hours, menu differences, photos and map. Not nine near-identical pages with the town name swapped, which is how groups end up competing against themselves. Then one Business Profile per location, pointing at its own page.',
  },
  {
    n: '10',
    title: 'Readable by people who need it to be',
    body:
      'Real text at a size people can read without zooming, contrast that survives a sunny pavement, alt text on the photographs, and a booking flow that works with a keyboard. Accessibility here is mostly legibility.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Comparison table: the four real options a restaurant actually chooses between
───────────────────────────────────────────────────────────────────────────── */

type CompRow = { label: string; builder: string; platform: string; template: string; custom: string };

const COMPARISON_ROWS: ReadonlyArray<CompRow> = [
  {
    label: 'What you are really buying',
    builder: 'A drag and drop editor and a theme',
    platform: 'A site bolted to a restaurant stack',
    template: 'A layout, plus somebody to fit it',
    custom: 'A site designed around your service model',
  },
  {
    label: 'Time to live',
    builder: 'A weekend, genuinely',
    platform: 'Weeks, waiting on their onboarding',
    template: 'A week or two with a freelancer',
    custom: 'Longest of the four',
  },
  {
    label: 'Who updates the menu',
    builder: 'You, in the editor, easily',
    platform: 'You, often synced from the POS',
    template: 'You, if it was set up well',
    custom: 'You, in a field built for the job',
  },
  {
    label: 'Online ordering',
    builder: 'A link out to a marketplace',
    platform: 'Built in, and the reason people buy',
    template: 'Whatever you wire up yourself',
    custom: 'Direct checkout or a chosen integration',
  },
  {
    label: 'Speed on a phone',
    builder: 'Acceptable, rarely excellent',
    platform: 'Varies widely by vendor',
    template: 'Depends entirely on the template',
    custom: 'The main thing we optimise for',
  },
  {
    label: 'Search and AI visibility',
    builder: 'Basic. Menus end up as one blob',
    platform: 'Decent, and outside your control',
    template: 'Inherits whatever the template does',
    custom: 'Structured per menu, per branch',
  },
  {
    label: 'Multiple locations',
    builder: 'Awkward past two',
    platform: 'Usually handled well',
    template: 'Manual and repetitive',
    custom: 'Designed in from the start',
  },
  {
    label: 'If you stop paying',
    builder: 'Site goes offline',
    platform: 'Offline, and ordering goes with it',
    template: 'You keep the files',
    custom: 'You own the code and the content',
  },
  {
    label: 'Honestly best when',
    builder: 'One location, small menu, tight budget',
    platform: 'Ordering volume is the business',
    template: 'You have taste and a bit of time',
    custom: 'The site is a revenue channel',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Who actually ranks for this query (also powers the second ItemList)
───────────────────────────────────────────────────────────────────────────── */

type Option = { name: string; note: string; detail: string };

const OPTIONS: ReadonlyArray<Option> = [
  {
    name: 'Canva Website Builder',
    note: 'Position 3, and free to start',
    detail:
      'A free restaurant website builder ranking third for the head term. One location, a short menu, no budget: this is a real answer. What you give up is menu structure, page speed control and multi-location handling.',
  },
  {
    name: 'Framer and Figma templates',
    note: 'Positions 5 and 7',
    detail:
      'Framer ranks with a roundup of restaurant site examples, Figma with a template library. Both assume you will do the work yourself or hand a file to a designer. Good taste, low floor, outcome depends entirely on who finishes it.',
  },
  {
    name: 'BentoBox, now part of Clover',
    note: 'Position 8, and worth reading the small print',
    detail:
      'A restaurant website, ordering and catering platform. Its own site now states that BentoBox is part of Clover and that BentoBox products are currently available only to Clover point-of-sale customers. That is the platform trade: excellent inside the ecosystem, a migration outside it.',
  },
  {
    name: 'Dribbble, Pinterest, Awwwards, One Page Love',
    note: 'Positions 1, 2, 4, 10 and 11',
    detail:
      'Five of the top twelve results are inspiration galleries, so most people searching this term are collecting ideas rather than hiring. If that is you, browse, then come back with three links you liked and we will say what they would take to build.',
  },
  {
    name: 'Reddit and YouTube',
    note: 'Positions 6 and 12',
    detail:
      'Owners asking other owners, and a video walkthrough. Both are more candid about running costs and platform lock-in than any vendor page, this one included. Read the thread before you sign anything.',
  },
  {
    name: 'FactoryJet, which is us',
    note: 'The custom build, and not always the right call',
    detail:
      'We design and build the site, structure the menus, wire the ordering and reservation integrations, and set up the Business Profile and schema. Worth paying for when the site is a revenue channel, and not when it is a one-location cafe.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ data: 22 items across 5 categories, grounded in live US PAA
   (see pipeline/research/briefs/restaurant-web-design.json)

   Trimmed 2026-08-12 from 36 items, because the live audit put this page at
   7,482 rendered words against a 2,500 to 5,000 service band. Dropped: the
   generic web-design framework items (5 elements, 7 C's, five golden rules),
   the duplicates of the answer-first block and of the do-not-hire list, the
   reviews item that /services/local-seo owns, and the off-intent restaurant
   trade items (30/30/30, 60/40, tipping). Answers are held to roughly 40 to 55
   words and lead with the answer. Floor is 20 items, do not go below it.

   Note on the cost item. The live PAA carries a cost query phrased with a
   literal dollar figure. Site rules forbid currency values on the page, so it is
   asked here in its natural non-numeric form and answered on the same intent.
───────────────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'Restaurant site basics' },
  { key: 'menu', label: 'Menus, ordering & booking' },
  { key: 'local', label: 'Google, maps & AI answers' },
  { key: 'diy', label: 'Templates, builders & DIY' },
  { key: 'scope', label: 'Scope, timing & budget' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  /* ── Restaurant site basics ─────────────────────────────────────────── */
  {
    category: 'basics',
    question: 'Do I need a website for my restaurant?',
    answer:
      'Yes. Your Google Business Profile, the delivery apps and the review sites all describe you, and none of them are yours. The website is the one page you control, the one that holds the full menu, and the only place a direct order can happen without a cut.',
  },
  {
    category: 'basics',
    question: 'What are the key elements of a good restaurant website?',
    answer:
      'Menu as browsable text, accurate hours including holidays, address with a working map link, a tap-to-call number, an order or reservation path, real photographs of your own food and room, and a page that loads fast on cellular data. More than one location adds a page each.',
  },
  {
    category: 'basics',
    question: 'Why would a restaurant not have a website?',
    answer:
      'They think the Instagram account covers it, which fails the moment somebody searches the menu. They think the delivery app listing covers it, which hands the customer away. Theirs went stale and taking it down felt safer than fixing it. Or the last quote felt out of proportion.',
  },

  /* ── Menus, ordering & booking ──────────────────────────────────────── */
  {
    category: 'menu',
    question: 'Should my restaurant menu be a PDF?',
    answer:
      'No. Google can index PDF files, so the invisibility claim is overstated. The real problem is structure: no headings to quote, no link to your order button, no per-dish detail, and very often no selectable text at all. Publish the menu as a page, keep a PDF for print.',
  },
  {
    category: 'menu',
    question: 'How do I put my menu online so Google can actually read it?',
    answer:
      'Make each menu its own page. Use headings for sections and a list for dishes, with a plain-text description under each and dietary information written as words. Then add local business structured data with the menu property pointing at that page, which Google documents as the fully-qualified URL of the menu.',
  },
  {
    category: 'menu',
    question: 'Should I take online orders on my own site or use a delivery app?',
    answer:
      'Both, deliberately. Marketplaces bring reach. They also charge commission on the order total and keep the customer relationship, so the second order happens in their app rather than yours. Accept that trade for discovery, then make the direct route obviously better: on your site, your profile, the receipt, the bag.',
  },
  {
    category: 'menu',
    question: 'How much is a restaurant website with online ordering?',
    answer:
      'Three routes, and the route matters more than the build. A link out to a marketplace is close to free to build and expensive per order. A restaurant platform bundles ordering into a subscription. Direct checkout on your own site is the largest build and the cheapest per order at volume.',
  },
  {
    category: 'menu',
    question: 'Which reservation system should I use?',
    answer:
      'OpenTable, Resy, Tock and SevenRooms all cover the basics. What differs is cover fees, whether they push diners to you or you to them, and whether the floor plan tools suit your room. What breaks service is running two. Pick one, embed it, use it on your Google profile.',
  },
  {
    category: 'menu',
    question: 'Do I need professional photos of every dish?',
    answer:
      'Not every dish. You need real photographs of about eight to twelve things: signature plates, the room at service, the bar, the front of the building so people recognise it, and the team. Real and slightly imperfect beats polished and generic, because guests are checking whether the place is real.',
  },

  /* ── Google, maps & AI answers ──────────────────────────────────────── */
  {
    category: 'local',
    question: 'How do I get my restaurant to show up on Google Maps?',
    answer:
      'Claim and complete the Google Business Profile. Correct category, correct address, correct hours, real photos, menu link, ordering and reservation links, and reviews you reply to. The website supports the profile rather than replacing it. For most restaurants the profile is the higher-traffic surface, and the more neglected one.',
  },
  {
    category: 'local',
    question: 'Do I really need to update my hours for holidays?',
    answer:
      'Yes. Google lets you set special hours for a temporary change or closure of up to six days in a row, and says it is a good idea to confirm your hours for official holidays even when they match your normal hours. It prevents the review that says you were shut.',
  },
  {
    category: 'local',
    question: 'Why is a delivery app link showing on my Google profile that I never added?',
    answer:
      'Because Google works with third-party providers, and those links can appear automatically rather than through you. You can remove a provider from your profile, and Google says providers need to process a removal request within five days. You can also set a preferred link so your own page sits on top.',
  },
  {
    category: 'local',
    question: 'How do I handle several restaurant locations on one website?',
    answer:
      'One page per location, each with its own address, hours, phone, menu differences, photos and map. Not one Locations page listing five branches, and not five near-identical pages with the suburb swapped. Then one Google Business Profile per location, each linking to its own page.',
  },
  {
    category: 'local',
    question: 'Will ChatGPT or AI search recommend my restaurant?',
    answer:
      'Only if there is text about you to recommend. Assistants assemble answers from pages they can read, so a restaurant whose menu is a PDF and whose only description is an Instagram bio gives them nothing. The fix: menu as text, dietary information in words, hours and location on the page.',
  },

  /* ── Templates, builders & DIY ──────────────────────────────────────── */
  {
    category: 'diy',
    question: 'Can I just use a website builder like Canva, Wix or Squarespace?',
    answer:
      'For a single location with a short menu and a tight budget, yes, and you should. A builder gets you live this weekend with correct hours and a readable menu, which already puts you ahead of most restaurant sites. What you trade away is speed control, menu structure and multi-location handling.',
  },
  {
    category: 'diy',
    question: 'Should I use a restaurant website template?',
    answer:
      'A template is a good starting point and a bad finishing point. What sinks template sites is what comes with them: demo photography nobody replaces, a hero video that wrecks phone speed, a menu pasted in as an image. Buy it, then spend the saved effort on photographs and menu text.',
  },
  {
    category: 'diy',
    question: 'How do I create a website for my restaurant myself?',
    answer:
      'In order: register your own domain, because it should never sit inside an agency account. Pick a builder. Write the menu as text before you touch design. Add hours, address, phone and a map. Take real photographs. Wire an order and a booking button. Claim the Business Profile. Stop.',
  },

  /* ── Scope, timing & budget ─────────────────────────────────────────── */
  {
    category: 'scope',
    question: 'How much does it cost to design a restaurant website?',
    answer:
      'We do not publish a number, because a figure set without seeing your situation is aimed at an average, not at you. What moves scope: how many locations, how many separate menus, direct online ordering or just a link out, whether usable photography exists, fresh build or rescue.',
  },
  {
    category: 'scope',
    question: 'Is there a monthly fee to have a website?',
    answer:
      'There is always some ongoing element. At minimum the domain each year and hosting. Builders and restaurant platforms charge a subscription that bundles hosting and tools. A custom build has hosting plus whatever maintenance you choose. Online ordering adds a per-order fee or a commission. Ask for those lines separately.',
  },
  {
    category: 'scope',
    question: 'Is a very low flat fee a good deal for a restaurant website?',
    answer:
      'Sometimes it genuinely is, and sometimes it is a template with your logo on it and a menu pasted in as an image. Look at what is delivered: is the menu real text, do you own the domain, can staff update it, does it load fast, does anything happen after launch.',
  },
  {
    category: 'scope',
    question: 'How long does a restaurant website take to build?',
    answer:
      'A builder site can be live in a weekend. A template fitted by a freelancer, a week or two. A custom build is longer, and the delay is almost never design. It is content: final menu text, photographs taken, a decision on ordering and reservations. Arrive with menu text ready.',
  },
  {
    category: 'scope',
    question: 'Who should not hire us for this?',
    answer:
      'A single-location cafe with a chalkboard menu and no delivery. A pop-up that ends this season. Anyone who needs a site live this week, since a builder does that better. Anyone wanting three hundred neighbourhood pages for suburbs they do not serve. Anyone expecting the site alone to fill tables.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD. Every const declared here is rendered in a script tag below.
───────────────────────────────────────────────────────────────────────────── */

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'Restaurant Website Design: Menus, Ordering and Reservations',
  description:
    'Restaurant website design for US operators, built around the menu as real HTML, online ordering economics, reservation systems, Google Business Profile, holiday hours and multi-location structure.',
  inLanguage: 'en-US',
  dateModified: '2026-08-12',
  isPartOf: { '@type': 'WebSite', name: 'FactoryJet', url: 'https://factoryjet.com' },
  about: { '@type': 'Thing', name: 'Restaurant website design' },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: HERO_IMG,
    width: 1264,
    height: 848,
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#answer-first', '#best-restaurant-website'],
  },
  lastReviewed: '2026-08-12',
  reviewedBy: { '@type': 'Person', name: 'Bhavesh Barot', jobTitle: 'Founder' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Restaurant Website Design',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType:
    'Restaurant Website Design / Restaurant Web Development / Online Menu Development / Restaurant Online Ordering Integration / Reservation System Integration / Multi-location Restaurant Websites',
  audience: {
    '@type': 'BusinessAudience',
    name: 'US restaurants, cafes, bars and multi-location restaurant groups',
  },
  description:
    'Website design and development for US restaurants covering HTML menu architecture and menu structured data, online ordering routes and their economics, reservation system integration, Google Business Profile setup including special and holiday hours, own-photography direction, mobile performance, and per-location page and profile structure.',
  url: PAGE_URL,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Restaurant website build',
    itemListElement: DELIVERABLES.map((d) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: d.title, description: d.body },
    })),
  },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Ten things a restaurant website has to get right',
  description:
    'The build checklist for a restaurant website, from the menu as a real web page through to per-location pages and legibility, in the order the work normally happens.',
  numberOfItems: DELIVERABLES.length,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: DELIVERABLES.map((d, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: d.title,
    description: d.body,
  })),
};

const optionListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'What actually ranks for restaurant website design in the United States',
  description:
    'The products, galleries and platforms appearing on the live US results for restaurant website design, with an honest note on who each one suits.',
  numberOfItems: OPTIONS.length,
  itemListElement: OPTIONS.map((o, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: o.name,
    description: o.detail,
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
    { '@type': 'ListItem', position: 3, name: 'Restaurant Website Design', item: PAGE_URL },
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

export default function RestaurantWebsiteDesignPage() {
  return (
    <>
      <script
        id="rwd-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="rwd-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="rwd-itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        id="rwd-options-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(optionListSchema) }}
      />
      <script
        id="rwd-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="rwd-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader />

      <main style={{ backgroundColor: CREAM }}>
        {/* ─── 1. HERO ─────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 py-16 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
            <div>
              <p className="fj-eyebrow">Restaurant website design &middot; United States</p>
              <h1
                className="fj-display mt-5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', lineHeight: 1.06, letterSpacing: '-0.03em' }}
              >
                Restaurant website design that starts with{' '}
                <span className="italic" style={{ color: ORANGE }}>the menu</span>
              </h1>
              <p
                className="mt-6 max-w-[545px] font-fj-body font-medium text-fj-neutral-600"
                style={{ fontSize: '1.125rem', lineHeight: 1.6 }}
              >
                Somebody is standing outside on a phone deciding between you and the place across the road.
                They want the menu, the hours and a way to order or book. If your menu is a PDF, they are
                pinching and zooming, and you are losing.{' '}
                <b className="font-bold text-fj-ink">We build the version that answers them in seconds.</b>
              </p>
              <HeroInlineForm
                region="us"
                source="us_restaurant_website_design_hero"
                submitLabel="Get a restaurant site review"
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
                  href="#should-you-hire-anyone"
                  className="font-fj-body text-[0.9375rem] font-semibold underline underline-offset-4"
                  style={{ color: ORANGE_DARK }}
                >
                  Should you even hire us?
                </Link>
              </div>
            </div>

            {/* Right: hero image + a plain checklist card, no blur, no glow */}
            <div className="relative mx-auto w-full max-w-[560px]">
              <div
                className="overflow-hidden rounded-3xl border"
                style={{ borderColor: 'rgba(15,15,18,0.10)', boxShadow: '0 24px 60px rgba(20,18,12,0.12)' }}
              >
                <img
                  src="/images/us/restaurant-website-design/hero.webp"
                  alt="Guest at a bright restaurant table reading a menu on her phone while a server sets a nearby table"
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
                  The ten second test
                </span>
                <ul className="mt-3 space-y-2.5">
                  {[
                    { k: 'What is on the menu', v: 'text, not a PDF' },
                    { k: 'Are you open right now', v: 'holidays included' },
                    { k: 'Where exactly are you', v: 'one tap to a map' },
                    { k: 'How do I order or book', v: 'one obvious button' },
                  ].map((row) => (
                    <li
                      key={row.k}
                      className="flex items-baseline justify-between gap-3 border-t pt-2.5 first:border-t-0 first:pt-0"
                      style={{ borderColor: 'rgba(15,15,18,0.08)' }}
                    >
                      <span className="font-fj-body text-[0.875rem] font-bold text-fj-ink">{row.k}</span>
                      <span className="text-right font-fj-mono text-[0.6875rem]" style={{ color: ORANGE_DARK }}>
                        {row.v}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-fj-body text-[0.75rem] text-fj-neutral-600">
                  Open your own site on a phone, on cellular data, and time it. Most fail at least one of
                  these four.
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
                id="best-restaurant-website"
                className="fj-display mt-3 text-[1.35rem] font-bold text-fj-ink"
                style={{ letterSpacing: '-0.02em' }}
              >
                What is the best website design for a restaurant?
              </h2>
              <p className="mt-3 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                <b className="text-fj-ink">
                  The best restaurant website answers four things on a phone in under ten seconds:
                </b>{' '}
                what is on the menu, when you are open, where you are, and how to order or book. Best does not
                mean most beautiful. The costliest mistake is publishing the menu as a PDF, which strips out
                the structure people and search engines rely on.
              </p>
              <p className="mt-4 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                Everything else follows. The menu is the product, so it is built as a real web page.
                Ordering and reservations are money, so the routes get chosen deliberately. Your Google
                Business Profile is the front door, so it is part of the build.
              </p>
              <p className="mt-4 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                And one thing most agencies will not say on a sales page: for plenty of restaurants a template
                really is the right answer.{' '}
                <Link
                  href="#should-you-hire-anyone"
                  className="font-semibold underline underline-offset-2"
                  style={{ color: ORANGE_DARK }}
                >
                  We have written down exactly when that is
                </Link>
                , including the cases where you should not hire us.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 3. WHY RESTAURANT SITES FAIL ────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Six failures we find on almost every restaurant site
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[780px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Restaurant sites rarely fail on design. They fail on{' '}
              <span className="italic" style={{ color: ORANGE }}>the boring parts</span>
            </h2>
            <p className="mt-4 max-w-[700px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              The sites that lose guests are almost never ugly. They are attractive sites where the menu
              cannot be read on a phone and the hours are from last winter.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {FAILURES.map((f) => (
                <div key={f.tag} className="rounded-2xl p-7" style={{ background: f.tint }}>
                  <span className="font-fj-mono text-[0.8125rem] font-bold" style={{ color: f.accent }}>
                    {f.tag}
                  </span>
                  <h3 className="fj-display mb-2 mt-2 text-[1.125rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {f.title}
                  </h3>
                  <p className="font-fj-body text-[0.9062rem] font-medium leading-[1.6] text-fj-neutral-700">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 4. THE PDF MENU PROBLEM (image + detail) ────────────────── */}
        <section id="pdf-menu" className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative mx-auto w-full max-w-[520px]">
              <img
                src="/images/us/restaurant-website-design/menu-phone.webp"
                alt="Phone standing on a restaurant table showing a menu page with a dish photograph and dish names as plain text"
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
                The single most costly mistake
              </p>
              <h2
                className="fj-display mt-3.5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
              >
                Your menu belongs on a page, <span className="italic" style={{ color: ORANGE }}>not in a download</span>
              </h2>
              <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                Be accurate first: the usual version of this argument is overstated. Google does list PDF
                among the file types it can index, so a PDF menu is not invisible. The real case is
                everything a PDF cannot do.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  {
                    t: 'Very often there is no text in it at all',
                    s: 'A menu exported as flat artwork is pictures of words, so nothing can extract a dish name',
                  },
                  {
                    t: 'No headings, so nothing is quotable',
                    s: 'An assistant answering a question about your vegetarian options needs structured text',
                  },
                  {
                    t: 'It breaks the path to the money',
                    s: 'It opens in a viewer with no order button, no booking link and no way back',
                  },
                  {
                    t: 'Staff cannot fix it during service',
                    s: 'Marking the special sold out should take a phone and a minute, not an email to a designer',
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
              <p className="mt-5 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">
                The fix is the checklist below, starting with one page per menu. Keep a printable PDF if you
                want one. Just stop making it the only copy.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 5. LISTICLE: the build checklist ────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              The build
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[820px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Ten things a restaurant website has to{' '}
              <span className="italic" style={{ color: ORANGE }}>get right</span>
            </h2>
            <p className="mt-4 max-w-[700px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              In roughly the order we do them. Run it against your current site, or anyone&rsquo;s proposal
              including ours. If a quote is mostly items six and seven, the structure work has been skipped.
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

            <p className="mt-8 max-w-[840px] font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
              Items three, four and nine are as much{' '}
              <Link href="/services/local-seo" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                local search work
              </Link>{' '}
              as web design, and item one is what decides whether{' '}
              <Link href="/services/ai-seo" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                AI answer engines
              </Link>{' '}
              can say anything useful about you. We do both, so the structure work ships.
            </p>
          </div>
        </section>

        {/* ─── 6. ORDERING ECONOMICS (image + argument) ────────────────── */}
        <section className="py-14 md:py-20" style={{ background: PEACH }}>
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
                Ordering, reservations and where the margin goes
              </p>
              <h2
                className="fj-display mt-3.5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
              >
                Every order button on your site is a{' '}
                <span className="italic" style={{ color: ORANGE }}>margin decision</span>
              </h2>
              <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                Third-party marketplaces charge a commission on the order total, and the rate depends on
                your plan and on whether they handle delivery. We will not quote a number we cannot verify.
                Read your own agreement. The structural point stands whatever the rate is: the marketplace
                owns the customer, so the reorder happens in their app.
              </p>
              <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                That does not make them bad. They bring discovery you would struggle to buy. The mistake is
                letting them become the only route, because then you pay a share of every regular customer
                forever.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  {
                    t: 'Check what is already on your Google profile',
                    s: 'Third-party ordering links can appear automatically, so a marketplace may be taking orders you never routed to it',
                  },
                  {
                    t: 'Set your preferred link',
                    s: 'Google lets you mark one link as business preferred, so your own page sits on top',
                  },
                  {
                    t: 'Removals are not instant, but they are enforced',
                    s: 'Google states that providers need to process a removal request within five days',
                  },
                  {
                    t: 'Run one reservation system, not two',
                    s: 'Your profile carries a reservation link. Two systems is how a Saturday gets double-booked',
                  },
                ].map((item) => (
                  <li key={item.t} className="flex items-start gap-3.5 rounded-2xl bg-white px-5 py-4">
                    <CheckCircle size={20} fill={ORANGE_DARK} />
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

            <div className="relative mx-auto w-full max-w-[500px]">
              <img
                src="/images/us/restaurant-website-design/ordering.webp"
                alt="Cafe counter with a member of staff handing a takeaway order to a waiting customer"
                width={1200}
                height={896}
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-2xl object-cover"
                style={{ boxShadow: '0 18px 44px rgba(20,18,12,0.14)' }}
              />
            </div>
          </div>
        </section>

        {/* ─── 7. MID-PAGE CTA ─────────────────────────────────────────── */}
        <section className="py-12 md:py-14" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <div
              className="flex flex-col items-start gap-6 rounded-2xl bg-white p-7 md:flex-row md:items-center md:justify-between md:p-9"
              style={{ border: '1px solid rgba(15,15,18,0.10)', boxShadow: '0 12px 34px rgba(20,18,12,0.06)' }}
            >
              <div className="max-w-[640px]">
                <h2 className="fj-display text-[1.4rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.02em' }}>
                  Want us to look at your current site first?
                </h2>
                <p className="mt-2.5 font-fj-body text-[0.9688rem] leading-[1.6] text-fj-neutral-700">
                  Send the link. We will open it on a phone and check whether the menu is readable text,
                  whether the hours match your Google profile, what loads slowly, and which ordering links
                  you did not put there.
                </p>
              </div>
              <ModalCTAButton label="Get a site review" region="us" modalVariant="default" btnVariant="primary-light" />
            </div>
          </div>
        </section>

        {/* ─── 8. COMPARISON TABLE ─────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Four ways to get a restaurant website
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[820px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Builder vs restaurant platform vs template vs{' '}
              <span className="italic" style={{ color: ORANGE }}>custom build</span>
            </h2>
            <p className="mt-4 max-w-[720px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              We sell the last column. We will still tell you to take the first one if you run a single cafe
              with a short menu.
            </p>

            <div className="mt-10 overflow-x-auto rounded-2xl border" style={{ borderColor: 'rgba(15,15,18,0.10)' }}>
              <table className="w-full min-w-[900px] border-collapse text-left">
                <caption className="sr-only">
                  Comparison of website builders, restaurant platforms, templates fitted by a freelancer and
                  a custom build, across nine criteria from time to live through to what happens if you stop
                  paying.
                </caption>
                <thead>
                  <tr style={{ background: PEACH }}>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      What you are comparing
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      Website builder
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      Restaurant platform
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      Template plus freelancer
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em]" style={{ color: ORANGE_DARK }}>
                      Custom build
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
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.builder}
                      </td>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.platform}
                      </td>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.template}
                      </td>
                      <td
                        className="border-t p-4 font-fj-body text-[0.875rem] font-medium text-fj-ink"
                        style={{ borderColor: 'rgba(15,15,18,0.08)', background: i % 2 === 1 ? '#F3F8F5' : GREEN_SOFT }}
                      >
                        {row.custom}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 font-fj-body text-[0.8125rem] text-fj-neutral-600">
              Scroll the table sideways on smaller screens. A builder solves this weekend, a platform solves
              ordering, a template solves taste, and a custom build is worth it when the site carries revenue.
            </p>
          </div>
        </section>

        {/* ─── 9. WHO ACTUALLY RANKS, AND WHO SHOULD NOT HIRE US ───────── */}
        <section id="should-you-hire-anyone" className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              What is actually on this search result
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[840px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Almost nobody searching this term is looking to{' '}
              <span className="italic" style={{ color: ORANGE }}>hire an agency</span>
            </h2>
            <p className="mt-4 max-w-[820px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              We pulled the live United States results for restaurant website design in August 2026. Not one
              conventional agency in the top twelve: inspiration galleries, template libraries, builder
              products and two community threads. Here is the field, us included.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {OPTIONS.map((o) => (
                <div key={o.name} className="flex flex-col rounded-2xl border bg-white p-6" style={{ borderColor: 'rgba(15,15,18,0.09)' }}>
                  <span className="font-fj-mono text-[0.8125rem] font-bold text-fj-ink">{o.name}</span>
                  <h3 className="fj-display mt-1.5 text-[1.05rem] font-bold" style={{ letterSpacing: '-0.015em', color: ORANGE_DARK }}>
                    {o.note}
                  </h3>
                  <p className="mt-2.5 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">{o.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-2xl p-7 md:p-8" style={{ background: GREEN_SOFT }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">Worth hiring us for</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'Several locations, currently jammed onto one page with a dropdown',
                    'A meaningful share of revenue arrives through ordering and you want it direct',
                    'Your menu is a PDF and nobody can update it during service',
                    'You have outgrown a platform and want out without losing visibility',
                    'Private hire, catering or events the current site does not sell',
                    'You want it fast on a phone and nobody has ever measured it',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-ink">
                      <CheckCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border bg-white p-7 md:p-8" style={{ borderColor: 'rgba(15,15,18,0.12)' }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">Do not hire us if</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'One location and a short menu. A builder does this well, live by Sunday',
                    'You need a site this week. We are slower than a template',
                    'You are opening a pop-up or a residency that ends this season',
                    'Ordering volume is the whole business, and a platform bundles that better',
                    'You want the site to fix footfall. The food, reviews and profile do that',
                    'Nobody on your side can supply final menu text or photographs',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-neutral-700">
                      <CrossCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">
                  If the honest answer is a template, take the template. For a second opinion on an existing
                  site rather than a rebuild, our{' '}
                  <Link href="/services/website-redesign" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                    redesign service
                  </Link>{' '}
                  starts by working out whether a rebuild is warranted at all.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 10. CITATIONS ───────────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Check us against the source
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[780px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Where the claims on this page <span className="italic" style={{ color: ORANGE }}>come from</span>
            </h2>
            <p className="mt-4 max-w-[740px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Do not take a web design company&rsquo;s word for how Google treats restaurants. Three primary
              sources back the claims above.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {[
                {
                  src: 'Google Search Central',
                  title: 'The menu property wants a URL',
                  body:
                    'Google’s local business structured data reference lists a menu property described as, for food establishments, the fully-qualified URL of the menu. The same reference covers opening hours and cuisine type.',
                  href: 'https://developers.google.com/search/docs/appearance/structured-data/local-business',
                },
                {
                  src: 'Google Business Profile Help',
                  title: 'Menu, ordering and reservation links',
                  body:
                    'Google documents that a Business Profile can carry a menu link and up to ten links per category for actions such as making a reservation or placing a food order. It also states that third-party partner links can appear automatically, and that providers must process a removal request within five days.',
                  href: 'https://support.google.com/business/answer/6218037',
                },
                {
                  src: 'Google Business Profile Help',
                  title: 'Special and holiday hours',
                  body:
                    'Google explains that special hours cover a temporary change or closure of up to six days in a row, and says it is a good idea to confirm your hours for official holidays even when they match your regular hours.',
                  href: 'https://support.google.com/business/answer/6303076',
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

            <p className="mt-8 max-w-[860px] font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
              Two more we checked. Google publishes a{' '}
              <a
                href="https://developers.google.com/search/docs/crawling-indexing/indexable-file-types"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2"
                style={{ color: ORANGE_DARK }}
              >
                list of indexable file types
              </a>{' '}
              that includes PDF, which is why we call the PDF menu a structure problem, not an invisibility
              one. And{' '}
              <a
                href="https://www.getbento.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2"
                style={{ color: ORANGE_DARK }}
              >
                BentoBox&rsquo;s own site
              </a>{' '}
              states that it is now part of Clover and that its products are currently available only to
              Clover point-of-sale customers. Positions quoted here are from an August 2026 pull and move.
            </p>
          </div>
        </section>

        {/* ─── 11. WHO YOU WORK WITH (E-E-A-T) ─────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: LAV_SOFT }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: LAV }}>
                  Who you actually work with
                </p>
                <h2
                  className="fj-display mt-3.5 font-bold text-fj-ink"
                  style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
                >
                  Founder-led, and blunt about{' '}
                  <span className="italic" style={{ color: ORANGE_DARK }}>what a site can do</span>
                </h2>
                <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                  FactoryJet is a small US-focused web and search team. Bhavesh Barot, our founder, scopes
                  the work and shows up on the calls. There is no account layer between you and the person
                  deciding your menu structure. We build sites and run search programmes, so the structure
                  fixes actually ship.
                </p>
                <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                  We will not publish invented client numbers, borrowed testimonials or guaranteed results.
                  If a restaurant marketing page shows a precise revenue lift with no named source, treat it
                  like a supplier who cannot say where the fish came from.
                </p>
                <p className="mt-5 font-fj-mono text-[0.78rem] text-fj-neutral-600">
                  Reviewed &amp; updated {REVIEWED_DATE} &middot; Bhavesh Barot, Founder, FactoryJet
                </p>
                <div className="mt-6">
                  <ModalCTAButton label="Talk to the Founder" region="us" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>

              <div className="rounded-2xl bg-white p-7 md:p-8">
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">How we work</h3>
                <ul className="mt-5 space-y-3">
                  {[
                    { t: 'Menu structure before styling', s: 'The menu architecture is written first, because everything hangs off it' },
                    { t: 'Search and build in one team', s: 'Structured data, Business Profile and page speed are part of the build' },
                    { t: 'You own everything', s: 'Domain, code and content stay yours, registered in your name from day one' },
                    { t: 'Staff can update it', s: 'If your team cannot mark an item unavailable from a phone, we have not finished' },
                    { t: 'We will talk you out of it', s: 'When a builder or a platform is the better buy, we say so on the first call' },
                  ].map((item) => (
                    <li key={item.t} className="flex items-start gap-3.5 rounded-2xl px-5 py-4" style={{ background: CREAM }}>
                      <CheckCircle size={20} fill={LAV} />
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
          </div>
        </section>

        {/* ─── 12. RELATED SERVICES (internal links) ───────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Where to go next
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[700px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Related <span className="italic" style={{ color: ORANGE }}>services</span>
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  label: 'Web design',
                  href: '/services/web-design',
                  desc: 'The general build service. Same approach to speed and structure, any kind of business.',
                },
                {
                  label: 'Website redesign',
                  href: '/services/website-redesign',
                  desc: 'Find out whether your existing site needs replacing or just needs fixing properly.',
                },
                {
                  label: 'Local SEO',
                  href: '/services/local-seo',
                  desc: 'Google Business Profile, map pack visibility and near-me search for local businesses.',
                },
                {
                  label: 'AI SEO',
                  href: '/services/ai-seo',
                  desc: 'Getting named and quoted inside ChatGPT, Perplexity and Google AI Overviews.',
                },
                {
                  label: 'Small business websites',
                  href: '/services/small-business-website-design',
                  desc: 'Scoped for owner-run businesses, including single-location restaurants.',
                },
                {
                  label: 'Ecommerce development',
                  href: '/services/ecommerce-development',
                  desc: 'For merchandise, gift cards, meal kits and anything you ship rather than plate.',
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

        {/* ─── 13. FAQ ─────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="Restaurant website FAQ"
          headline="The questions restaurant owners actually search"
          lead="What a restaurant site needs, why the menu should never be a PDF, how ordering affects your margin, what Google wants from your profile, and when a template beats hiring anyone."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ─── 14. FINAL CTA (the one dark section) ────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="START WITH THE MENU"
          headline="Send us your site and we will tell you what is losing you tables"
          sub="Book a call with the founder. We will open it on a phone, check the menu, the hours against your Google profile and the load time, then say plainly whether a build is worth it or whether a template would serve you better."
          primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See web design', href: '/services/web-design' }}
          objectionHandler="Founder-led. No invented case studies, no guaranteed results, and you own the domain, the code and the content."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
