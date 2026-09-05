import type { Metadata } from 'next';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import { ecommerceAppDevelopmentAlternates } from '@/data/hreflangMap';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import FinalCTA from '@/components/v2/FinalCTA';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import MidPageCTA from '@/components/v2/MidPageCTA';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import EcommerceRoiCalculator from '@/components/commerce/EcommerceRoiCalculator';

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
  title: 'Ecommerce App Development Company USA | FactoryJet',
  description:
    'Native ecommerce app development for US brands on React Native, Swift, and Kotlin over Shopify or headless backends. App store approvals handled.',
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
    languages: ecommerceAppDevelopmentAlternates,
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
  'Customers buy several times a year: replenishment, subscriptions, and recurring orders.',
  'You run subscription billing via ReCharge, Bold, or Shopify with one-tap skip and swap.',
  'You have an active loyalty program with member tiers, exclusive drops, and points.',
  'Your catalog updates frequently with flash sales, product drops, and inventory sync.',
  'B2B wholesale buyers submit quick reorders and bulk purchases from saved lists.',
  'Warehouse, field, or in-store retail teams require fast offline catalog access.',
];

const APP_DOES_NOT: ReadonlyArray<string> = [
  'Customers purchase infrequently or once a year: furniture, appliances, or bespoke items.',
  'Your active customer base is small, where app maintenance costs exceed retention gains.',
  'Your responsive mobile website has slow page speed or poor Core Web Vitals.',
  'The goal is brand vanity rather than measured repeat purchase and customer lifetime value.',
  'Your team cannot commit to regular updates, security patches, and annual OS upgrades.',
  'You expect App Store search to replace search engine optimization and SEO traffic.',
];

/* ─────────────────────────────────────────────────────────────────────────────
   Build checklist (also powers the ItemList schema)
───────────────────────────────────────────────────────────────────────────── */

type Deliverable = { n: string; title: string; body: string };

const DELIVERABLES: ReadonlyArray<Deliverable> = [
  {
    n: '01',
    title: 'Prove repeat purchase and reorder volume first',
    body:
      'Audit your order data for repeat purchase rate, customer lifetime value, and replenishment cycles before writing code.',
  },
  {
    n: '02',
    title: 'Fix mobile web Core Web Vitals before native app build',
    body:
      'Optimize your mobile storefront for Core Web Vitals, Largest Contentful Paint, and mobile conversion before diverting resources.',
  },
  {
    n: '03',
    title: 'Choose React Native, TypeScript, or native Swift and Kotlin',
    body:
      'We build on React Native with TypeScript for cross-platform efficiency, reserving Swift and Kotlin for heavy device hardware access.',
  },
  {
    n: '04',
    title: 'Keep Shopify Plus, BigCommerce, or commercetools in charge',
    body:
      'Connect native apps to Shopify Plus, BigCommerce, WooCommerce, or commercetools via Storefront API and GraphQL for real-time inventory sync.',
  },
  {
    n: '05',
    title: 'Keep checkout on Shopify, Stripe, Apple Pay, and Google Pay',
    body:
      'Retain native web checkout with Apple Pay, Google Pay, and Stripe to ensure full PCI DSS compliance, tax calculation, and fraud protection.',
  },
  {
    n: '06',
    title: 'Unified accounts with single sign-on and loyalty sync',
    body:
      'Share customer accounts, order history, and loyalty tiers across web and mobile using single sign-on (SSO) and customer data webhooks.',
  },
  {
    n: '07',
    title: 'Design targeted push notifications for abandoned cart recovery',
    body:
      'Trigger push notifications for order tracking, back-in-stock alerts, and abandoned cart recovery with Klaviyo integration.',
  },
  {
    n: '08',
    title: 'Configure universal links and deep linking on day one',
    body:
      'Route inbound traffic directly with universal links and App Links, mapping every product URL directly into native app screens.',
  },
  {
    n: '09',
    title: 'Offline catalog browsing with SQLite caching and sync',
    body:
      'Cache product catalogs and user wishlists on-device, preserving fast offline browsing while guarding against stale checkout pricing.',
  },
  {
    n: '10',
    title: 'App Store and Google Play compliance and review approvals',
    body:
      'Prepare App Store and Google Play submissions with demo accounts, WCAG accessibility, privacy policy links, and account deletion workflows.',
  },
  {
    n: '11',
    title: 'Long-term maintenance, OS upgrades, and API deprecations',
    body:
      'Budget continuous maintenance for annual iOS and Android SDK updates, security patches, third-party library upgrades, and Storefront API changes.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Stack comparison table
───────────────────────────────────────────────────────────────────────────── */

type CompRow = { label: string; rn: string; native: string; web: string };

const COMPARISON_ROWS: ReadonlyArray<CompRow> = [
  {
    label: 'What you are buying',
    rn: 'One React Native codebase shipping to Apple App Store and Google Play.',
    native: 'Platform-specific Swift for iOS and Kotlin for Android builds.',
    web: 'Progressive web app with responsive layout and no store review delay.',
  },
  {
    label: 'Team requirements',
    rn: 'React Native and TypeScript engineers with mobile architecture experience.',
    native: 'Dedicated Swift and Kotlin developers managing separate native codebases.',
    web: 'Your existing frontend web team maintaining standard web storefronts.',
  },
  {
    label: 'Storefront API and data sync',
    rn: 'Direct integration with Shopify Storefront API, BigCommerce, or commercetools via GraphQL.',
    native: 'Custom REST or GraphQL API clients built natively in Swift and Kotlin.',
    web: 'Standard server-side rendering or headless Next.js commerce frontend.',
  },
  {
    label: 'Checkout and payment flows',
    rn: 'Native Apple Pay and Google Pay passing to Shopify or Stripe checkout for PCI DSS compliance.',
    native: 'Custom native wallet integrations communicating directly with payment gateways.',
    web: 'Standard responsive web checkout embedded within mobile browser sessions.',
  },
  {
    label: 'Push notifications & retention',
    rn: 'Push notifications via Firebase Cloud Messaging and Klaviyo integration for abandoned cart recovery.',
    native: 'Direct Apple Push Notification Service (APNs) and FCM integration.',
    web: 'Web push notifications limited on iOS, functional primarily on Android.',
  },
  {
    label: 'Annual maintenance overhead',
    rn: 'Unified framework upgrades for annual iOS and Android SDK updates.',
    native: 'Parallel SDK maintenance, dual library dependencies, and dual release cycles.',
    web: 'Continuous browser compatibility handled through standard web hosting.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Who ranks for this query (also powers the second ItemList)
───────────────────────────────────────────────────────────────────────────── */

type Rival = { domain: string; note: string; detail: string };

const RIVALS: ReadonlyArray<Rival> = [
  {
    domain: 'excellentwebworld.com',
    note: 'Position one, a straight service page.',
    detail:
      'A development shop offering standard mobile commerce capabilities and services.',
  },
  {
    domain: 'scnsoft.com',
    note: 'Position three, enterprise consultancy.',
    detail:
      'A global consulting team with in-depth architecture for headless commerce and ERP integrations.',
  },
  {
    domain: 'appinventiv.com',
    note: 'Position four, large mobile studio.',
    detail:
      'A high-volume app development agency focused on enterprise-scale mobile deployments.',
  },
  {
    domain: 'clutch.co',
    note: 'Position five, directory portal.',
    detail:
      'A B2B directory ranking agencies based on verified client reviews and sponsored listings.',
  },
  {
    domain: 'businessofapps.com',
    note: 'Position two, industry publication.',
    detail:
      'An app industry media source publishing roundups of top mobile development companies.',
  },
  {
    domain: 'sparxitsolutions.com',
    note: 'Position seven, development firm.',
    detail:
      'An established digital product team delivering mobile and web applications.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ data: 20 items across 5 categories, grounded in live US People-Also-Ask
   data pulled for this query in August 2026.
───────────────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'need', label: 'Do you need an app' },
  { key: 'cost', label: 'What drives the cost' },
  { key: 'build', label: 'Building it' },
  { key: 'stores', label: 'App Store & Play rules' },
  { key: 'ai', label: 'AI and ecommerce' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  /* ── Do you need an app ─────────────────────────────────────────────── */
  {
    category: 'need',
    question: 'Do I actually need an ecommerce app?',
    answer:
      'Most small stores do not. An app earns its place when customers buy repeatedly through subscriptions, replenishment, loyalty programs, or weekly inventory drops. If typical buyers purchase once a year, an optimized mobile web store with fast Core Web Vitals delivers better ROI without app installation friction.',
  },
  {
    category: 'need',
    question: 'Which is better, a mobile app or a website?',
    answer:
      'They serve complementary funnels. A responsive mobile website powered by Next.js captures new customer search traffic via Google Search Console and SEO rankings. A native mobile app retains existing buyers through push notifications, biometric Apple Pay or Google Pay authentication, and instant reorders.',
  },
  {
    category: 'need',
    question: 'Why make an app instead of a website?',
    answer:
      'Native apps deliver higher conversion through lock-screen push notifications, saved credentials via single sign-on, instant checkout with Apple Pay and Google Pay, and offline product caching. For high-frequency replenishment brands, native apps consistently lift repeat purchase frequency.',
  },
  {
    category: 'need',
    question: 'Does owning an app make money?',
    answer:
      'An app increases revenue by driving higher customer lifetime value, reorder rates, and retention among top-tier buyers. Revenue gains come from reduced cart abandonment and targeted push notifications rather than organic customer acquisition.',
  },
  /* ── What drives the cost ───────────────────────────────────────────── */
  {
    category: 'cost',
    question: 'How much does it cost to develop an ecommerce app?',
    answer:
      'Pricing depends on technical scope. It reflects whether you use React Native or separate Swift and Kotlin codebases. Key factors include your commerce backend, Storefront API complexity, custom loyalty tiers, and ERP inventory sync integrations.',
  },
  {
    category: 'cost',
    question: 'How much does it cost to pay someone to develop an app?',
    answer:
      'Development cost spans UI/UX architecture, backend API integration, App Store and Google Play submissions, and ongoing maintenance. Annual maintenance covers iOS and Android OS updates, API deprecations, security patches, and library dependencies.',
  },
  /* ── Building it ────────────────────────────────────────────────────── */
  {
    category: 'build',
    question: 'How can I develop an ecommerce app?',
    answer:
      'Validate your repeat-purchase cohort in customer data. Select a cross-platform stack like React Native with TypeScript. Connect to your backend using Shopify Storefront API or commercetools GraphQL. Preserve web checkout for PCI DSS compliance. Finally, configure deep linking and follow store review guidelines.',
  },
  {
    category: 'build',
    question: 'How do I create an app for my online store?',
    answer:
      'You can use no-code app wrappers for basic validation. Alternatively, build a custom React Native application. It connects to your Shopify Plus, WooCommerce, or BigCommerce backend via GraphQL Storefront APIs. This gives full control over push notifications, branding, and checkout.',
  },
  {
    category: 'build',
    question: 'React Native or Swift and Kotlin?',
    answer:
      'React Native is the standard recommendation for ecommerce brands. A single TypeScript codebase powers both iOS and Android apps with 90%+ code sharing. Native Swift and Kotlin are reserved for complex AR hardware access or heavy background processing.',
  },
  {
    category: 'build',
    question: 'Can my Shopify store power a native app?',
    answer:
      'Yes. Shopify provides the headless Storefront API to fetch products, collections, and carts via GraphQL. Checkout routes securely through Shopify or Stripe. This maintains native Apple Pay, discount codes, subscription billing via ReCharge, and full PCI DSS compliance.',
  },
  {
    category: 'build',
    question: 'What happens if someone opens the app with no signal?',
    answer:
      'The app uses on-device caching to display recent product catalogs, wishlists, and account order history. Checkout is held until connectivity returns, preventing pricing or inventory sync discrepancies while maintaining smooth offline browsing.',
  },
  {
    category: 'build',
    question: 'Who maintains the app after launch?',
    answer:
      'Our team provides monthly maintenance retainers covering annual iOS and Android SDK version bumps, Storefront API updates, push notification certificate renewals, third-party library patching, and bug fixes.',
  },
  /* ── App Store and Play rules ───────────────────────────────────────── */
  {
    category: 'stores',
    question: 'Do I have to use in-app purchase to sell my products?',
    answer:
      'No. Apple Review Guideline 3.1.3(e) and Google Play Billing policies are clear. Physical goods and services consumed outside the app must use standard merchant processors like Stripe, Apple Pay, or Google Pay. They do not require in-app purchases.',
  },
  {
    category: 'stores',
    question: 'When does in-app purchase apply to an ecommerce app?',
    answer:
      'In-app purchase applies strictly to digital goods consumed inside the app: digital downloads, streaming access, or digital gift credits. Hybrid memberships including physical merchandise shipping require careful policy structuring.',
  },
  {
    category: 'stores',
    question: 'Why do ecommerce apps get rejected from the App Store?',
    answer:
      'Common rejections stem from Guideline 4.2 for insufficient native utility over mobile websites. Other causes include Guideline 2.1 broken demo logins, missing in-app account deletion workflows, or non-compliant WCAG color contrast.',
  },
  {
    category: 'stores',
    question: 'How long does app store review take?',
    answer:
      'Apple and Google review typically completes within 24 to 72 hours. We incorporate buffer time for an initial review round and respond directly to reviewer feedback in App Store Connect and Google Play Console.',
  },
  {
    category: 'stores',
    question: 'How do I get people to turn push notifications on?',
    answer:
      'Display a contextual pre-permission screen after a successful purchase, restock subscription, or order shipment update before triggering the native system prompt. We integrate with Klaviyo and Firebase Cloud Messaging for targeted notification delivery.',
  },
  {
    category: 'stores',
    question: 'What if a customer does not use the App Store?',
    answer:
      'Customers can always purchase through your responsive mobile website. We configure verified universal links and smart app banners that direct customers appropriately between web and native channels.',
  },
  /* ── AI and ecommerce ───────────────────────────────────────────────── */
  {
    category: 'ai',
    question: 'Can AI build an ecommerce app?',
    answer:
      'Generative AI tools assist developers with boilerplate UI components and unit tests. However, enterprise commerce requires senior engineers. They architect Storefront API data pipelines, state management, PCI DSS compliance, and App Store approvals.',
  },
  {
    category: 'ai',
    question: 'Will AI replace ecommerce?',
    answer:
      'AI search agents are transforming product discovery through generative engines and multimodal search. Brands must optimize product feeds, JSON-LD structured data, and inventory APIs so AI assistants accurately recommend their catalog.',
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

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below, so the two
 *  can never drift into showing a different path than the schema claims. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Ecommerce App Development', url: PAGE_URL },
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
        <Breadcrumbs items={BREADCRUMB_ITEMS} />
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
                    { k: 'Do customers buy more than twice a year?', v: 'The whole case.' },
                    { k: 'Is there loyalty or a subscription?', v: 'Strong signal.' },
                    { k: 'Is your mobile site already fast?', v: 'Fix first.' },
                    { k: 'Can you ship a release every few weeks?', v: 'Forever, not once.' },
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
                    t: 'Maintenance decides it, not the demo.',
                    s: 'Two codebases means two backlogs, two release trains and two sets of people to keep.',
                  },
                  {
                    t: 'A wrapped website is not an app.',
                    s: 'Apple rejects apps that are a repackaged website with nothing an app uniquely offers.',
                  },
                  {
                    t: 'Check who owns the code before you sign.',
                    s: 'App builders and some agencies keep the codebase, which quietly decides your next three years.',
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
                  Comparison of React Native, native Swift and Kotlin, and a progressive web app for an ecommerce brand. It covers cost, team needs, and timeline. It also compares urgent fixes, upgrades, and platform defaults.
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
                    'One catalogue, one price, one promotion engine.',
                    'Accounts and order history shared with the website.',
                    'Discounts, gift cards and subscriptions handled by the platform, not reimplemented.',
                    'Inventory that matches what the site shows, in the same moment.',
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
                    'Ask one question of any platform: can it serve products, stock, cart, customer and orders over an API.',
                    'BigCommerce, commercetools and modern WooCommerce setups all answer yes, with varying quality.',
                    'Older custom stores with no clean API are where app budgets actually go.',
                    'One identity across web, app and loyalty, or customers will tell you about it loudly.',
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
                      'After an order, a saved item or a restock signup.',
                      'Your own screen first, explaining what you will send.',
                      'Trigger the system prompt only after they say yes to yours.',
                      'Offer a quieter second chance later.',
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
                      'The system prompt on first launch, before anyone knows what you sell.',
                      'Blocking the app until they agree, which breaks Apple’s rules outright.',
                      'A promotion every day until people switch it off for good.',
                      'Treating installs as the metric instead of opt-in rate.',
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
                    'Guideline 4.2, minimum functionality. Apple says an app has to be more than a repackaged website, and that if it is not useful, unique or app-like it does not belong on the store.',
                    'Guideline 2.1, app completeness. Apple asks for an active demo account or a fully featured demo mode, with back-end services live during review.',
                    'Guideline 5.1.1(v). If your app supports account creation, you must also offer account deletion inside the app.',
                    'Guideline 5.1.1(i). A privacy policy link is required in the store listing and inside the app itself.',
                    'App Tracking Transparency. Tracking people across other companies’ apps and sites for advertising means asking through the ATT prompt.',
                    'Placeholder content, dead links, or a build that crashes on the reviewer’s device.',
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
                    'We run the repeat-purchase check before we quote, and have talked people out of the project on the strength of it.',
                    'We build the store and the headless layer too, so the app is designed by people who know what the back end can give it.',
                    'Store submission, review notes and the rejection round are in scope, not a surprise in month four.',
                    'The codebase and the developer accounts are yours. We hold neither hostage.',
                    'Bhavesh Barot, our founder, runs the assessment and stays on the calls.',
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
                    'The big app studios in these results have far larger portfolios of shipped apps than we do.',
                    'If you need a hundred-person delivery team on a multi-year platform build, one of them fits better than us.',
                    'We publish no client counts, no invented case study numbers and no testimonials we cannot stand behind.',
                    'We are a challenger on domain authority and compete on the thinking, not on being the biggest name in the results.',
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
                { t: 'Founder-led assessment.', s: 'Bhavesh Barot runs the repeat-purchase analysis himself, before any quote exists.' },
                { t: 'Commerce first, app second.', s: 'We have built stores, headless front ends and integrations, so the API conversation is not new.' },
                { t: 'Store rules read, not guessed.', s: 'Submission, review notes, privacy disclosures and payment policy are part of the scope.' },
                { t: 'No invented numbers, ever.', s: 'No fabricated case studies, no borrowed testimonials, no promised revenue lifts.' },
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

        {/* ─── 13B. INTERACTIVE ECOMMERCE ROI ESTIMATOR ─────────────────── */}
        <section className="bg-[#FFF8F5] py-16 md:py-24 border-y border-[#E7DED6]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-sm font-semibold tracking-wider text-[#F05A28] uppercase font-fj-mono">
                Interactive Retention & Revenue Estimator
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-[#0F0F12] sm:text-4xl font-fj-display">
                Estimate Your Mobile App ROI
              </h2>
              <p className="mt-4 text-lg text-[#333333] font-fj-body">
                Calculate estimated repeat order frequency lift, push notification conversion impact, and payback timeline for a native commerce app.
              </p>
            </div>
            <EcommerceRoiCalculator source="ecommerce-app-development" defaultPlatform="shopify" />
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
