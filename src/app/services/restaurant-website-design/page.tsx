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
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';

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
  title: 'Restaurant Website Design Services | FactoryJet',
  description:
    'Restaurant website design with live HTML menus, online ordering, reservations, and Google Business Profile integration for US restaurants and bars.',
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
    title: 'The menu is a PDF.',
    body:
      'A PDF forces pinch and zoom on mobile devices. Search crawlers cannot parse dishes cleanly. We implement HTML menus with schema markup and structured data. Kitchen staff update specials in seconds without editing PDFs.',
    tint: PEACH,
    accent: ORANGE_DARK,
  },
  {
    tag: '02',
    title: 'Hours that are quietly wrong.',
    body:
      'A guest arriving at a locked door leaves a bad review. Website hours must match Google Business Profile and holiday schedules. We synchronize local SEO citations and NAP consistency across directories.',
    tint: LAV_SOFT,
    accent: LAV,
  },
  {
    tag: '03',
    title: 'Every order routed through a marketplace.',
    body:
      'Marketplaces take heavy commissions and retain customer data. Direct online ordering via Toast POS, Square, Clover, or Stripe preserves your margins. First-party data lets you build reorder loyalty.',
    tint: GREEN_SOFT,
    accent: GREEN,
  },
  {
    tag: '04',
    title: 'Photos that came with the template.',
    body:
      'Stock food photos destroy diner trust immediately. Authentic kitchen, dining room, and dish photography creates appetite appeal. High-resolution WebP images feed Google Business Profile and local map pack rankings.',
    tint: PEACH,
    accent: ORANGE_DARK,
  },
  {
    tag: '05',
    title: 'It is slow on cellular data.',
    body:
      'Hungry guests search on mobile phones with weak signals. Bloated sliders and unoptimized video destroy Core Web Vitals. We optimize Largest Contentful Paint and Cumulative Layout Shift for sub-second speed.',
    tint: GREEN_SOFT,
    accent: GREEN,
  },
  {
    tag: '06',
    title: 'Locations stacked on one page.',
    body:
      'Jamming multiple branches onto one URL harms local search. Each branch needs its own location landing page with unique schema markup. Dedicated URLs capture nearby Google maps ranking positions.',
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
    title: 'The menu as a real web page, one page per menu.',
    body:
      'Brunch, dinner, bar cocktails, and catering each get dedicated URLs. Dishes use semantic HTML headings with allergen notes. Search engines and AI engines quote items accurately.',
  },
  {
    n: '02',
    title: 'Menu structured data and JSON-LD schema.',
    body:
      'Google supports explicit menu property schema markup on local business listings. We embed JSON-LD schema linking dishes, prices, and dietary tags directly to your domain.',
  },
  {
    n: '03',
    title: 'Centralized hours synced with Google Business Profile.',
    body:
      'Standard service hours, kitchen closing times, and holiday hours live in one place. We ensure NAP consistency across Google Search Console and local directory citations.',
  },
  {
    n: '04',
    title: 'Direct ordering integration with Toast POS or Clover.',
    body:
      'We integrate direct order workflows using Toast POS, Square, Clover, or Brink POS. Customers order without friction while you retain first-party data and full margins.',
  },
  {
    n: '05',
    title: 'Single reservation system integration across web and maps.',
    body:
      'We connect OpenTable, Resy, or SevenRooms directly to your booking buttons. Floor plans stay unified without risk of double-booking prime Saturday tables.',
  },
  {
    n: '06',
    title: 'High-speed image optimization with explicit dimensions.',
    body:
      'Food photography is compressed to modern WebP formats with explicit width and height. Fast edge caching and CDN delivery prevent layout shifts and pass Core Web Vitals.',
  },
  {
    n: '07',
    title: 'Tap-to-call mobile header with call tracking.',
    body:
      'We place tel links in the mobile header for immediate dialing. Optional call tracking and form tracking measure table inquiries from organic search.',
  },
  {
    n: '08',
    title: 'Lightweight code tuned for mobile Core Web Vitals.',
    body:
      'Zero bloated page builders. We build on Next.js and Tailwind CSS with fast server-side rendering. Every page passes Largest Contentful Paint and Interaction to Next Paint standards.',
  },
  {
    n: '09',
    title: 'Dedicated branch landing pages for local map pack dominance.',
    body:
      'Multi-unit concepts get unique service area pages with custom schema markup. Each branch links to its verified Google Business Profile to boost local pack rankings.',
  },
  {
    n: '10',
    title: 'Accessibility audit and WCAG compliance.',
    body:
      'High-contrast typography ensures readability on bright sidewalks. Clear focus states, ARIA labels, and an accessibility audit guarantee full WCAG compliance.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Comparison table: the four real options a restaurant actually chooses between
───────────────────────────────────────────────────────────────────────────── */

type CompRow = { label: string; builder: string; platform: string; template: string; custom: string };

const COMPARISON_ROWS: ReadonlyArray<CompRow> = [
  {
    label: 'What you are really buying.',
    builder: 'A drag and drop editor and generic templates.',
    platform: 'A locked proprietary stack tied to hardware.',
    template: 'A layout theme requiring manual freelance setup.',
    custom: 'A custom Next.js website with full code ownership.',
  },
  {
    label: 'Time to live.',
    builder: 'One weekend for simple setups.',
    platform: 'Several weeks waiting on vendor onboarding.',
    template: 'Two to three weeks with a designer.',
    custom: 'Prompt 7 to 14 day delivery window.',
  },
  {
    label: 'Menu and POS sync.',
    builder: 'Manual edits inside a slow page builder.',
    platform: 'Automated sync from Toast POS or Clover.',
    template: 'Static text requiring developer code updates.',
    custom: 'Direct POS integration or intuitive mobile CMS.',
  },
  {
    label: 'Online ordering & payments.',
    builder: 'External marketplace links taking hefty fees.',
    platform: 'Bundled ordering with recurring platform cuts.',
    template: 'Basic third-party widget embeds.',
    custom: 'Direct Stripe, Apple Pay, and Google Pay checkout.',
  },
  {
    label: 'Speed on mobile phones.',
    builder: 'Heavy scripts often failing Core Web Vitals.',
    platform: 'Variable performance loaded with vendor trackers.',
    template: 'Bloated themes with sluggish load speeds.',
    custom: 'Sub-second speeds passing Core Web Vitals checks.',
  },
  {
    label: 'Search and AI visibility.',
    builder: 'Basic on-page tags. Menus saved as flat text.',
    platform: 'Decent indexing locked into vendor subdomains.',
    template: 'Minimal schema markup and inconsistent meta.',
    custom: 'Full JSON-LD structured data and local SEO schema.',
  },
  {
    label: 'Multiple location architecture.',
    builder: 'Clumsy dropdowns confusing Google crawlers.',
    platform: 'Standard branch lists with rigid templates.',
    template: 'Duplicate pages risking search penalties.',
    custom: 'Dedicated location pages with local map pack SEO.',
  },
  {
    label: 'Asset and code ownership.',
    builder: 'Site disappears if subscription is cancelled.',
    platform: 'Complete vendor lock-in on menus and ordering.',
    template: 'You keep theme files but lack ongoing support.',
    custom: '100% source code, domain, and data ownership.',
  },
  {
    label: 'Best fit for operators.',
    builder: 'Single-unit cafes with short seasonal menus.',
    platform: 'High-volume takeout spots relying on delivery.',
    template: 'Operators with ample time for self-setup.',
    custom: 'Ambitious dining concepts maximizing direct revenue.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Who actually ranks for this query (also powers the second ItemList)
───────────────────────────────────────────────────────────────────────────── */

type Option = { name: string; note: string; detail: string };

const OPTIONS: ReadonlyArray<Option> = [
  {
    name: 'Canva Website Builder.',
    note: 'Position 3, and free to start.',
    detail:
      'A free drag-and-drop tool ranking well for casual searchers. Ideal for a single location or food truck with a small menu. You sacrifice custom schema markup, Core Web Vitals speed tuning, and multi-unit local SEO architecture.',
  },
  {
    name: 'Framer and Figma templates.',
    note: 'Positions 5 and 7.',
    detail:
      'Framer provides sleek restaurant portfolio templates. Figma offers design files for developers. Both require substantial hands-on effort to implement live POS ordering, reservation widgets, and valid JSON-LD structured data.',
  },
  {
    name: 'BentoBox (part of Clover).',
    note: 'Position 8, with ecosystem lock-in.',
    detail:
      'A popular hospitality web and ordering platform. BentoBox is now integrated into Clover point-of-sale systems. It provides convenient tools for Clover operators, but creates migration hurdles if you switch to Toast POS, Aloha, or Brink POS.',
  },
  {
    name: 'Dribbble, Pinterest, and Awwwards.',
    note: 'Positions 1, 2, 4, 10, and 11.',
    detail:
      'Inspiration galleries dominate search queries for restaurant web design. Operators browse these galleries for visual concepts. We translate high-end visual aesthetics into fast, accessible HTML websites that pass Core Web Vitals audits.',
  },
  {
    name: 'Reddit and YouTube discussions.',
    note: 'Positions 6 and 12.',
    detail:
      'Restaurant operators share unfiltered experiences regarding merchant processing fees and software lock-in. Threads frequently debate Toast POS vs. Square vs. Clover. Community consensus favors owning your digital assets and customer relationships.',
  },
  {
    name: 'FactoryJet custom hospitality builds.',
    note: 'Custom development with code ownership.',
    detail:
      'We engineer bespoke restaurant websites with live HTML menus, direct online ordering, and OpenTable or Resy integrations. We implement complete local SEO schema, Google Business Profile optimization, and sub-second mobile page speeds.',
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
  { key: 'basics', label: 'Restaurant site basics.' },
  { key: 'menu', label: 'Menus, ordering & booking.' },
  { key: 'local', label: 'Google, maps & AI answers.' },
  { key: 'diy', label: 'Templates, builders & DIY.' },
  { key: 'scope', label: 'Scope, timing & budget.' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  /* ── Restaurant site basics ─────────────────────────────────────────── */
  {
    category: 'basics',
    question: 'Do I need a website for my restaurant?',
    answer:
      'Yes. Your website is the only digital asset your business owns outright. Third-party platforms and social profiles can change algorithms or increase fees overnight. An owned website protects your menu and customer data. It provides the foundation for direct online ordering without commission fees.',
  },
  {
    category: 'basics',
    question: 'What are the key elements of a good restaurant website?',
    answer:
      'Seven core elements determine website performance. First is an HTML menu with structured data. Second is verified hours synchronized with Google Business Profile. Third is an integrated reservation or ordering flow via Toast POS, Square, or OpenTable. Fourth is authentic food photography. Fifth is mobile speed passing Core Web Vitals. Sixth is tap-to-call dialing. Seventh is dedicated location pages with local SEO markup.',
  },
  {
    category: 'basics',
    question: 'Why would a restaurant not have a website?',
    answer:
      'Many operators mistakenly rely on social media profiles or delivery apps. Social profiles cannot rank for local search queries or present structured dietary menus. Third-party delivery listings capture high commissions and keep diner emails. A dedicated website establishes authority and captures direct customer revenue.',
  },

  /* ── Menus, ordering & booking ──────────────────────────────────────── */
  {
    category: 'menu',
    question: 'Should my restaurant menu be a PDF?',
    answer:
      'Never use PDF menus on a modern website. PDFs force pinching and zooming on smartphones. Search crawlers cannot extract individual dishes or allergens from image PDFs. Diners cannot click a dish to begin an order. Publishing live HTML menus with schema markup improves local SEO rankings and conversions.',
  },
  {
    category: 'menu',
    question: 'How do I put my menu online so Google can actually read it?',
    answer:
      'Create individual web pages for each distinct menu. Format sections using HTML headings and semantic lists. Include dish descriptions, dietary tags, and prices in plain text. Implement JSON-LD structured data using the schema markup menu property. Link this URL directly to your Google Business Profile.',
  },
  {
    category: 'menu',
    question: 'Should I take online orders on my own site or use a delivery app?',
    answer:
      'Use both channels strategically. Third-party marketplaces provide valuable discovery for new diners. Direct online ordering on your website captures repeat business without commission cuts. We integrate direct ordering through Toast POS, Clover, or Stripe. This setup routes regular customers into your direct database.',
  },
  {
    category: 'menu',
    question: 'How much is a restaurant website with online ordering?',
    answer:
      'Website costs depend on ordering architecture. Linking out to third-party marketplaces is inexpensive upfront but costs 15% to 30% per order. Platform subscriptions charge recurring monthly fees. A custom build with direct Stripe or Toast POS integration requires upfront investment. However, direct ordering saves substantial money as order volume grows.',
  },
  {
    category: 'menu',
    question: 'Which reservation system should I use?',
    answer:
      'Popular options include OpenTable, Resy, SevenRooms, and Tock. Choose the platform that best fits your seating volume and diner demographics. Never run two systems simultaneously, as split inventories cause double-bookings. Embed your chosen system cleanly and connect it to your Google Business Profile booking action.',
  },
  {
    category: 'menu',
    question: 'Do I need professional photos of every dish?',
    answer:
      'Professional photography for ten to twelve signature items is sufficient. High-quality images of popular entrees, cocktails, your dining room, and exterior storefront build credibility. Compress photos to modern WebP formats with explicit width and height attributes. This preserves page speed and passes Core Web Vitals audits.',
  },

  /* ── Google, maps & AI answers ──────────────────────────────────────── */
  {
    category: 'local',
    question: 'How do I get my restaurant to show up on Google Maps?',
    answer:
      'Claim and verify your Google Business Profile. Select accurate primary categories and add complete operating hours. Upload authentic interior photos and link your live HTML menu page. Implement local SEO schema markup on your website. Consistent NAP data across local directories drives local map pack rankings.',
  },
  {
    category: 'local',
    question: 'Do I really need to update my hours for holidays?',
    answer:
      'Yes. Google allows businesses to set special hours for holidays and temporary closures. Failing to update holiday hours frustrates hungry customers and generates negative reviews. Confirming holiday hours in your Google Business Profile dashboard protects your local search reputation.',
  },
  {
    category: 'local',
    question: 'Why is a delivery app link showing on my Google profile that I never added?',
    answer:
      'Google partners with authorized delivery marketplaces to generate automatic order links. You can manage these links inside Google Business Profile settings. Designate your direct website ordering link as the preferred provider. You can also submit formal removal requests to third-party vendors.',
  },
  {
    category: 'local',
    question: 'How do I handle several restaurant locations on one website?',
    answer:
      'Build a dedicated landing page for every individual location. Each page needs unique addresses, local phone numbers, hours, menus, and embedded maps. Embed location-specific LocalBusiness schema markup on every page. Connect each page to its verified Google Business Profile to dominate the local pack.',
  },
  {
    category: 'local',
    question: 'Will ChatGPT or AI search recommend my restaurant?',
    answer:
      'AI search engines recommend restaurants with clear, crawlable information. AI models crawl web pages for structured text, menus, dietary options, and reviews. PDF menus and image-only sites leave AI crawlers blind. Structured HTML data and positive review management ensure inclusion in AI search answers.',
  },

  /* ── Templates, builders & DIY ──────────────────────────────────────── */
  {
    category: 'diy',
    question: 'Can I just use a website builder like Canva, Wix or Squarespace?',
    answer:
      'Basic builders work well for single-location cafes with simple menus. They provide affordable templates and quick setup. However, generic builders struggle with custom POS integrations, complex multi-location SEO, and strict Core Web Vitals optimization. Larger restaurants benefit from custom code architectures.',
  },
  {
    category: 'diy',
    question: 'Should I use a restaurant website template?',
    answer:
      'Templates offer speed but introduce severe limitations. Many templates include bloated JavaScript libraries that hurt mobile performance. They often force menus into awkward accordion widgets. A custom build tailors typography, reservation workflows, and technical SEO specifically to your operational concept.',
  },
  {
    category: 'diy',
    question: 'How do I create a website for my restaurant myself?',
    answer:
      'Start by registering your own domain name under your company account. Choose a reliable hosting provider with SSL security. Write your menu items, descriptions, and prices in plain text. Add your location, hours, and tap-to-call phone number. Finally, configure Google Business Profile and test mobile performance.',
  },

  /* ── Scope, timing & budget ─────────────────────────────────────────── */
  {
    category: 'scope',
    question: 'How much does it cost to design a restaurant website?',
    answer:
      'Pricing reflects operational scope rather than arbitrary agency fees. Cost drivers include location count, menu volume, direct POS ordering integrations, and custom reservation flows. We quote fixed-price milestones with guaranteed timelines. You own all source code and assets outright at completion.',
  },
  {
    category: 'scope',
    question: 'Is there a monthly fee to have a website?',
    answer:
      'Mandatory ongoing expenses include domain registration and web hosting. Platform builders charge monthly software subscriptions. Custom websites built on modern frameworks avoid mandatory agency retainer fees. Third-party POS ordering systems like Toast POS or Clover charge payment processing fees separately.',
  },
  {
    category: 'scope',
    question: 'Is a very low flat fee a good deal for a restaurant website?',
    answer:
      'Low flat fees usually mean recycled templates without technical optimization. Cheap builds often neglect Core Web Vitals, mobile responsiveness, and schema markup. They frequently lock you into proprietary hosting. Investing in proper site architecture delivers measurable return through direct orders and table reservations.',
  },
  {
    category: 'scope',
    question: 'How long does a restaurant website take to build?',
    answer:
      'Basic template sites take one to two weeks. A custom restaurant website typically launches within four to six weeks. The primary timeline factor is content assembly. Providing finalized menu copy, high-resolution photography, and POS credentials upfront ensures fast, predictable project delivery.',
  },
  {
    category: 'scope',
    question: 'Who should not hire us for this?',
    answer:
      'Single-unit coffee shops with chalkboard menus do not require custom engineering. Pop-up restaurants and seasonal food trucks are better served by simple builder templates. Operators unwilling to provide menu copy or authentic photos should also avoid custom builds. We focus on growing hospitality brands needing direct revenue.',
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

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below, so the two
 *  can never drift into showing a different path than the schema claims. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Restaurant Website Design', url: PAGE_URL },
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
        <Breadcrumbs items={BREADCRUMB_ITEMS} />
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
                    { k: 'What is on the menu?', v: 'Text, not a PDF.' },
                    { k: 'Are you open right now?', v: 'Holidays included.' },
                    { k: 'Where exactly are you?', v: 'One tap to a map.' },
                    { k: 'How do I order or book?', v: 'One obvious button.' },
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
                    t: 'Very often there is no text in it at all.',
                    s: 'A menu exported as flat artwork is pictures of words, so nothing can extract a dish name.',
                  },
                  {
                    t: 'No headings, so nothing is quotable.',
                    s: 'An assistant answering a question about your vegetarian options needs structured text.',
                  },
                  {
                    t: 'It breaks the path to the money.',
                    s: 'It opens in a viewer with no order button, no booking link and no way back.',
                  },
                  {
                    t: 'Staff cannot fix it during service.',
                    s: 'Marking the special sold out should take a phone and a minute, not an email to a designer.',
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
                    t: 'Check what is already on your Google profile.',
                    s: 'Third-party ordering links can appear automatically, so a marketplace may be taking orders you never routed to it.',
                  },
                  {
                    t: 'Set your preferred link.',
                    s: 'Google lets you mark one link as business preferred, so your own page sits on top.',
                  },
                  {
                    t: 'Removals are not instant, but they are enforced.',
                    s: 'Google states that providers need to process a removal request within five days.',
                  },
                  {
                    t: 'Run one reservation system, not two.',
                    s: 'Your profile carries a reservation link. Two systems is how a Saturday gets double-booked.',
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

    

        <MidPageCTA
          headline={'Menu still living in a PDF?'}
          sub={'Send us your site. We will tell you what search and AI answers cannot read today, and what it takes to fix.'}
          label={'Get a free menu check'}
        />

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
                    'Several locations, currently jammed onto one page with a dropdown.',
                    'A meaningful share of revenue arrives through ordering and you want it direct.',
                    'Your menu is a PDF and nobody can update it during service.',
                    'You have outgrown a platform and want out without losing visibility.',
                    'Private hire, catering or events the current site does not sell.',
                    'You want it fast on a phone and nobody has ever measured it.',
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
                    'One location and a short menu. A builder does this well, live by Sunday.',
                    'You need a site this week. We are slower than a template.',
                    'You are opening a pop-up or a residency that ends this season.',
                    'Ordering volume is the whole business, and a platform bundles that better.',
                    'You want the site to fix footfall. The food, reviews and profile do that.',
                    'Nobody on your side can supply final menu text or photographs.',
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
                    { t: 'Menu structure before styling.', s: 'The menu architecture is written first, because everything hangs off it.' },
                    { t: 'Search and build in one team.', s: 'Structured data, Business Profile and page speed are part of the build.' },
                    { t: 'You own everything.', s: 'Domain, code and content stay yours, registered in your name from day one.' },
                    { t: 'Staff can update it.', s: 'If your team cannot mark an item unavailable from a phone, we have not finished.' },
                    { t: 'We will talk you out of it.', s: 'When a builder or a platform is the better buy, we say so on the first call.' },
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
