import type { Metadata } from 'next';
import Link from 'next/link';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import MidPageCTA from '@/components/v2/MidPageCTA';
import FinalCTA from '@/components/v2/FinalCTA';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import ComparisonTable, { type ComparisonColumn, type ComparisonRow } from '@/components/v2/ComparisonTable';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import { ORG_ID, ORG_REF, FOUNDER_ID } from '@/data/organization';

import CheckoutMapDiagram from './CheckoutMapDiagram';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/shopify-checkout-customization, built 2026-10-05.

   Why this page exists: narrow service pages that name one job produced the US
   buyer leads in the week before this was built. US monthly searches measured
   2026-10-05: "shopify checkout customization" 170 (rising), "shopify checkout
   extensibility" 110 (falling), "checkout optimization" 90, "shopify checkout
   optimization" 70, at roughly 11 to 16 USD per click. The live top 10 is small
   agencies, Shopify community threads, the app store, Reddit and YouTube, with
   an AI Overview and no Maps pack.

   Truth rules for anyone editing this file:
   - Every platform fact (plan limits, dates, extension rules, Function limits)
     was read from Shopify's own pages on 2026-10-05 and links to that page
     through the SRC map below. Shopify has moved these deadlines before. If you
     change a date, re-fetch the page first and update the "as listed on" wording.
   - Checkout statistics come from one Baymard Institute page, fetched the same
     day. No FactoryJet prices, no client names, no outcome percentages.
   - Mirrors /services/ecommerce-audit for component usage and schema pattern.

   Schema: WebPage + Service + FAQPage + BreadcrumbList. Organization is
   rendered once sitewide by src/app/layout.tsx and referenced here by @id.
   The FAQPage mainEntity is generated from the exact FAQ_ITEMS array the
   visible <FAQ> component renders. There is no second, hand-written array.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services/shopify-checkout-customization';
const PAGE_TITLE = 'Shopify Checkout Customization Services | FactoryJet';
const PAGE_DESC =
  'Shopify checkout customization for US stores: custom fields, upsells, shipping and payment rules, branding, and moves off checkout.liquid and Scripts.';
const PAGE_PUBLISHED = '2026-10-05';
const PAGE_MODIFIED = '2026-10-05';
const CHECKED_ON = '5 Oct 2026';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'shopify checkout customization',
    'shopify checkout extensibility',
    'shopify checkout optimization',
    'checkout optimization',
    'shopify plus checkout customization',
    'shopify checkout ui extensions',
    'shopify functions development',
    'shopify scripts to functions migration',
    'checkout.liquid migration',
    'shopify custom checkout fields',
    'shopify checkout upsell',
  ],
  alternates: {
    canonical: CANONICAL_URL,
    languages: {
      'en-US': CANONICAL_URL,
      'x-default': CANONICAL_URL,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: CANONICAL_URL,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'FactoryJet, Shopify checkout customization services for US stores',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD, so they cannot drift. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Shopify Checkout Customization', url: CANONICAL_URL },
];

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${CANONICAL_URL}#webpage`,
  url: CANONICAL_URL,
  name: PAGE_TITLE,
  description: PAGE_DESC,
  inLanguage: 'en-US',
  datePublished: PAGE_PUBLISHED,
  dateModified: PAGE_MODIFIED,
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://factoryjet.com/#website',
    url: 'https://factoryjet.com',
    name: 'FactoryJet',
  },
  about: { '@id': `${CANONICAL_URL}#service` },
  publisher: { '@id': ORG_ID },
  reviewedBy: { '@type': 'Person', '@id': FOUNDER_ID, name: 'Bhavesh Barot' },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#short-answer'] },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${CANONICAL_URL}#service`,
  name: 'Shopify Checkout Customization',
  serviceType:
    'Shopify checkout customization, checkout UI extensions, Shopify Functions development, migration from checkout.liquid and Shopify Scripts',
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'FactoryJet plans, builds, tests and supports changes to Shopify checkout for US Shopify and Shopify Plus stores: checkout branding, custom fields and validation, upsell offers, shipping and payment rules built on Shopify Functions, Thank you and Order status page blocks, and rebuilding customizations that ran on checkout.liquid or Shopify Scripts.',
  url: CANONICAL_URL,
};

/* ── Sources. One map, used by every inline source link (the `short` label) AND
   by the visible "Sources" list near the foot of the page (the full `label`).
   Each URL was opened on 2026-10-05 and the supporting sentence read before the
   claim was written. ── */
const SRC = {
  helpCustomize: {
    short: 'Shopify Help: checkout features by plan',
    label: 'Shopify Help Center: Customizing and editing your checkout and accounts pages',
    url: 'https://help.shopify.com/en/manual/checkout-settings/customize-checkout-configurations',
  },
  helpApps: {
    short: 'Shopify Help: checkout apps by plan',
    label: 'Shopify Help Center: Customizing your checkout and customer accounts with apps',
    url: 'https://help.shopify.com/en/manual/checkout-settings/customize-checkout-configurations/checkout-apps',
  },
  helpStyle: {
    short: 'Shopify Help: checkout style',
    label: 'Shopify Help Center: Customizing the style of your checkout',
    url: 'https://help.shopify.com/en/manual/checkout-settings/customize-checkout-configurations/checkout-style',
  },
  helpEditor: {
    short: 'Shopify Help: checkout editor',
    label: 'Shopify Help Center: Using the checkout and accounts editor',
    url: 'https://help.shopify.com/en/manual/checkout-settings/customize-checkout-configurations/checkout-editor',
  },
  helpDrafts: {
    short: 'Shopify Help: draft checkouts',
    label: 'Shopify Help Center: Managing your active and draft checkout configurations',
    url: 'https://help.shopify.com/en/manual/checkout-settings/customize-checkout-configurations/active-and-draft-checkouts',
  },
  helpOnePage: {
    short: 'Shopify Help: one-page checkout',
    label: 'Shopify Help Center: One-page checkout',
    url: 'https://help.shopify.com/en/manual/checkout-settings/customize-checkout-configurations/one-page-checkout',
  },
  helpPayDelivery: {
    short: 'Shopify Help: payment and delivery rules',
    label: 'Shopify Help Center: Customizing payment methods and delivery options at checkout',
    url: 'https://help.shopify.com/en/manual/checkout-settings/checkout-customization',
  },
  helpTyosUpgrade: {
    short: 'Shopify Help: Thank you page upgrade',
    label: 'Shopify Help Center: Upgrading and replacing your Thank you and Order status pages',
    url: 'https://help.shopify.com/en/manual/checkout-settings/customize-checkout-configurations/upgrade-thank-you-order-status',
  },
  helpAdditionalScripts: {
    short: 'Shopify Help: replacing additional scripts',
    label: 'Shopify Help Center: Reviewing and replacing additional scripts on your Thank you and Order status pages',
    url: 'https://help.shopify.com/en/manual/checkout-settings/customize-checkout-configurations/upgrade-thank-you-order-status/additional-scripts',
  },
  helpScripts: {
    short: 'Shopify Help: Shopify Scripts',
    label: 'Shopify Help Center: Shopify Scripts and the Script Editor app',
    url: 'https://help.shopify.com/en/manual/checkout-settings/script-editor',
  },
  helpScriptsToFunctions: {
    short: 'Shopify Help: Scripts to Functions',
    label: 'Shopify Help Center: Transitioning from Shopify Scripts to Shopify Functions',
    url: 'https://help.shopify.com/en/manual/checkout-settings/script-editor/transitioning-to-functions',
  },
  helpRollouts: {
    short: 'Shopify Help: rollouts',
    label: 'Shopify Help Center: Requirements and considerations for using rollouts',
    url: 'https://help.shopify.com/en/manual/markets/rollouts/requirements-and-considerations',
  },
  devTech: {
    short: 'shopify.dev: checkout technologies',
    label: 'shopify.dev: Technologies for customizing Shopify checkout',
    url: 'https://shopify.dev/docs/apps/build/checkout/technologies',
  },
  devCheckout: {
    short: 'shopify.dev: apps in checkout',
    label: 'shopify.dev: Apps in checkout',
    url: 'https://shopify.dev/docs/apps/build/checkout',
  },
  devCheckoutLiquid: {
    short: 'shopify.dev: checkout.liquid',
    label: 'shopify.dev: checkout.liquid',
    url: 'https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid',
  },
  devUiExt: {
    short: 'shopify.dev: checkout UI extensions',
    label: 'shopify.dev: Checkout UI extensions',
    url: 'https://shopify.dev/docs/api/checkout-ui-extensions/latest',
  },
  devFunctions: {
    short: 'shopify.dev: about Functions',
    label: 'shopify.dev: About Shopify Functions',
    url: 'https://shopify.dev/docs/apps/build/functions',
  },
  devFunctionsApi: {
    short: 'shopify.dev: Function limits',
    label: 'shopify.dev: Function APIs, availability and limits',
    url: 'https://shopify.dev/docs/api/functions/latest',
  },
  devStyling: {
    short: 'shopify.dev: checkout styling',
    label: 'shopify.dev: About checkout styling',
    url: 'https://shopify.dev/docs/apps/build/checkout/styling',
  },
  devFields: {
    short: 'shopify.dev: banners and fields',
    label: 'shopify.dev: About custom banners and fields',
    url: 'https://shopify.dev/docs/apps/build/checkout/fields-banners',
  },
  devValidation: {
    short: 'shopify.dev: checkout validation',
    label: 'shopify.dev: About cart and checkout validation',
    url: 'https://shopify.dev/docs/apps/build/checkout/cart-checkout-validation',
  },
  devFnValidation: {
    short: 'shopify.dev: Validation Function API',
    label: 'shopify.dev: Cart and Checkout Validation Function API',
    url: 'https://shopify.dev/docs/api/functions/latest/cart-and-checkout-validation',
  },
  devOffers: {
    short: 'shopify.dev: product offers',
    label: 'shopify.dev: About product offers',
    url: 'https://shopify.dev/docs/apps/build/checkout/product-offers',
  },
  devPostPurchase: {
    short: 'shopify.dev: post-purchase offers',
    label: 'shopify.dev: Build a post-purchase offer',
    url: 'https://shopify.dev/docs/apps/build/checkout/product-offers/build-a-post-purchase-offer',
  },
  devDiscounts: {
    short: 'shopify.dev: discounts',
    label: 'shopify.dev: About discounts',
    url: 'https://shopify.dev/docs/apps/build/discounts',
  },
  devPayments: {
    short: 'shopify.dev: payment functions',
    label: 'shopify.dev: About functions in payments',
    url: 'https://shopify.dev/docs/apps/build/checkout/payments',
  },
  devFnPayment: {
    short: 'shopify.dev: Payment Customization API',
    label: 'shopify.dev: Payment Customization Function API',
    url: 'https://shopify.dev/docs/api/functions/latest/payment-customization',
  },
  devDelivery: {
    short: 'shopify.dev: delivery functions',
    label: 'shopify.dev: About delivery and shipping functions',
    url: 'https://shopify.dev/docs/apps/build/checkout/delivery-shipping',
  },
  devFnDelivery: {
    short: 'shopify.dev: Delivery Customization API',
    label: 'shopify.dev: Delivery Customization Function API',
    url: 'https://shopify.dev/docs/api/functions/latest/delivery-customization',
  },
  devTyos: {
    short: 'shopify.dev: Thank you and Order status',
    label: 'shopify.dev: About Thank you and Order status page customization',
    url: 'https://shopify.dev/docs/apps/build/checkout/thank-you-order-status',
  },
  devTest: {
    short: 'shopify.dev: testing extensions',
    label: 'shopify.dev: Test checkout UI extensions',
    url: 'https://shopify.dev/docs/apps/build/checkout/test-checkout-ui-extensions',
  },
  clCheckoutLiquid: {
    short: 'Shopify Changelog, Feb 13, 2023',
    label: 'Shopify Changelog, Feb 13, 2023: The checkout.liquid theme file is being deprecated',
    url: 'https://changelog.shopify.com/posts/the-checkout-liquid-theme-file-is-being-deprecated',
  },
  clScripts: {
    short: 'Shopify Changelog, Mar 12, 2026',
    label: 'Shopify Changelog, Mar 12, 2026: Shopify Scripts deprecation dates',
    url: 'https://changelog.shopify.com/posts/shopify-scripts-can-no-longer-be-edited-or-published',
  },
  baymard: {
    short: 'Baymard Institute, updated Sep 22, 2025',
    label: 'Baymard Institute: 50 Cart Abandonment Rate Statistics 2026 (last updated Sep 22, 2025)',
    url: 'https://baymard.com/lists/cart-abandonment-rate',
  },
  cartcoders: {
    short: 'CartCoders rate guide, 2026',
    label: 'CartCoders: Shopify Developer Cost Breakdown for 2026',
    url: 'https://cartcoders.com/blog/shopify-development/shopify-developer-cost-hourly-rate-project-pricing/',
  },
  shopifyCost: {
    short: 'Shopify cost guide, Sep 3, 2026',
    label: 'Shopify: Ecommerce Website Cost guide (updated Sep 3, 2026)',
    url: 'https://www.shopify.com/blog/ecommerce-website-cost',
  },
} as const;

type SrcKey = keyof typeof SRC;

/* ── FAQ. Single array, rendered visibly below AND used to build the FAQPage
   JSON-LD. Never hand-duplicate this list near the ld+json block.
   Questions come from People Also Ask and related searches pulled from
   DataForSEO (US, location 2840) on 2026-10-05, plus the page's own queries. ── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'What you can change' },
  { key: 'plans', label: 'Plans and limits' },
  { key: 'migration', label: 'checkout.liquid and Scripts' },
  { key: 'working', label: 'Working with us' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── What you can change ──────────────────────────────────────────
  {
    category: 'basics',
    question: 'Can I customize my Shopify checkout page?',
    answer:
      "Yes, within limits set by your plan. Stores on the Basic plan or higher can change the logo, colors and fonts in Shopify's checkout editor and add app blocks to the Thank you and Order status pages. Adding your own blocks, fields or offers inside the information, shipping and payment steps needs Shopify Plus. Direct edits to checkout code are no longer possible on any plan.",
  },
  {
    category: 'basics',
    question: 'How can I customize the style of my Shopify checkout?',
    answer:
      'Go to Settings, then Checkout, in your Shopify admin and edit a checkout configuration. The editor sets your logo, color palette, font, and button and accent colors. Since February 5, 2026 Shopify no longer lets you add a background image to the header or main content area. Finer control, such as corner radius on form fields, needs the Checkout Branding API, which is Shopify Plus only.',
  },
  {
    category: 'basics',
    question: 'What is Shopify checkout extensibility?',
    answer:
      "It is Shopify's name for customizing checkout through apps and extensions that plug into set places, in place of editing checkout code. It covers checkout UI extensions for what shoppers see, Shopify Functions for the rules behind checkout, web pixels for tracking, and branding settings. Shopify's developer docs now also call it Shopify Extensions in Checkout.",
  },
  {
    category: 'basics',
    question: 'What are Shopify Functions?',
    answer:
      "Shopify Functions are small programs that run on Shopify's servers during checkout and change its rules. One can create a new kind of discount, hide or rename a shipping option, reorder payment methods, or stop an order that breaks a rule you set. Each is installed as part of an app. They replaced Shopify Scripts, which stopped running on June 30, 2026.",
  },
  {
    category: 'basics',
    question: 'Can I add custom fields to Shopify checkout?',
    answer:
      "Yes, with a checkout UI extension, which needs Shopify Plus for fields inside checkout. Shopify's own example is a delivery instructions field under the shipping options. Baymard counts 23.48 form elements in the average US checkout against 12 to 14 in a well-built one, so we add a field only when you need the answer to fulfil the order.",
  },
  {
    category: 'basics',
    question: 'Can I add an upsell to Shopify checkout?',
    answer:
      'Yes. An upsell is an offer to add one more product to an order. Inside checkout, an offer block needs Shopify Plus. After payment, a post-purchase page can show an offer before the Thank you page, and App Store apps for it work on Basic and higher. Shopify skips that page when a shopper pays with a wallet such as Apple Pay or Google Pay.',
  },
  {
    category: 'basics',
    question: 'Can I hide, rename or reorder shipping and payment options at checkout?',
    answer:
      'Yes. Shopify Functions can hide, reorder and rename delivery options and payment methods, based on things like the cart total or the shipping destination. Two limits catch people out. Outside Shopify Plus, stores in the United States and Canada cannot change credit card fields this way. On any plan, wallets shown by logo, such as Shop Pay and Apple Pay, cannot be renamed.',
  },
  {
    category: 'basics',
    question: 'Why are people not completing checkout?',
    answer:
      'Baymard Institute asked US online shoppers why they abandoned a cart, leaving out those who were only browsing. Extra costs such as shipping, tax and fees came first at 40%. Slow delivery was 20%, not trusting the site with card details 19%, being made to create an account 18%, and a checkout that was too long or complicated 17%.',
  },
  // ── Plans and limits ─────────────────────────────────────────────
  {
    category: 'plans',
    question: 'Can I customize Shopify checkout without Shopify Plus?',
    answer:
      'Partly. Basic and higher plans get the checkout editor, app blocks on the Thank you and Order status pages, web pixels for tracking, and App Store apps built on Shopify Functions. Without Plus you cannot place app blocks inside the information, shipping and payment steps, install a custom-built app that contains Functions, or use the Checkout Branding API.',
  },
  {
    category: 'plans',
    question: 'Will checkout customizations slow down my checkout?',
    answer:
      "Shopify sets hard limits that keep them light. A compiled checkout UI extension cannot be larger than 64 KB, and Shopify's help center says Functions execute in under 5 milliseconds. The bigger risk is stacking apps. Shopify allows up to three app blocks in one area of checkout, so we check what is already installed before adding anything.",
  },
  // ── checkout.liquid and Scripts ──────────────────────────────────
  {
    category: 'migration',
    question: 'What does "checkout.liquid deprecated" mean?',
    answer:
      "checkout.liquid was a theme file that let Shopify Plus stores edit the code of their checkout pages. Deprecated means Shopify has retired it. Its customizations stopped working on the information, shipping and payment steps on August 13, 2024, and on the Thank you and Order status pages on August 28, 2025 (both as listed on 5 Oct 2026).",
  },
  {
    category: 'migration',
    question: 'Do Shopify Scripts still work?',
    answer:
      "No. Shopify's help center says that as of June 30, 2026 Shopify Scripts has been deprecated, and any Scripts still published have been deactivated and no longer work. Scripts were small pieces of Ruby code that changed discounts, shipping options and payment options. Each one has to be rebuilt as a Shopify Function. Your admin keeps a Scripts customizations report listing what was active.",
  },
  {
    category: 'migration',
    question: 'What happened to the tracking scripts on my Thank you page?',
    answer:
      "Additional scripts are not supported on the new Thank you and Order status pages. Tracking now runs through web pixels, Shopify's replacement for pasted tracking code. Shopify warns that you may see fewer events after the switch, because pixels only track shoppers who have given consent. We rebuild each tag as a pixel, then check event counts against real orders.",
  },
  // ── Working with us ──────────────────────────────────────────────
  {
    category: 'working',
    question: 'Should I use a checkout app or pay for a custom extension?',
    answer:
      'Start with an app. If a well-reviewed App Store app does what you need, it is usually the faster route, and on a non-Plus store it is the only route for shipping, payment and discount rules. A custom extension makes sense when your rule is specific to your business, when apps overlap, or when you want to own the code.',
  },
  {
    category: 'working',
    question: 'How much does Shopify checkout customization cost?',
    answer:
      "It depends on the route. A checkout editor setting costs nothing beyond your plan, and an App Store app costs whatever the app charges. For custom work, Shopify developers in the US and Canada typically charge $120 to $200 an hour, according to CartCoders' 2026 rate guide. In-checkout extensions also need Shopify Plus, which Shopify lists at $2,300 a month on a three-year term. FactoryJet quotes a fixed price in writing after a short scoping call.",
  },
  {
    category: 'working',
    question: 'How long does a Shopify checkout customization take?',
    answer:
      'A single change, such as one field or one shipping rule, is a small job, and the timeline goes in writing with the quote. Moving a store off several Scripts or a heavily edited checkout.liquid is a project. Our focused Shopify Plus builds covering checkout, Functions or a migration usually run 5 to 8 weeks.',
  },
  {
    category: 'working',
    question: 'How do you test checkout changes before they go live?',
    answer:
      'In a draft. Shopify lets a store keep draft checkout configurations beside the live one, so we build there first. The editor preview cannot place orders, so we also place test orders in a development store with payments in test mode, covering both layouts, Shop Pay and phones. Publishing the draft turns the old live configuration into a draft, which gives you a way back.',
  },
  {
    category: 'working',
    question: 'Is FactoryJet a Shopify Plus Partner?',
    answer:
      'No. FactoryJet is a registered Shopify Partner, without a Plus Partner tier. We do the engineering work itself: checkout UI extensions, Shopify Functions, checkout branding, and the rebuilds that follow checkout.liquid and Scripts. If your procurement team requires a Plus Partner badge, tell us on the first call.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

/* ── Checkout research. All four figures are on one Baymard Institute page,
   fetched 2026-10-05. The 40 / 19 / 17 figures are reasons US shoppers gave for
   abandoning a cart, with the "just browsing" group left out, as Baymard states. ── */
const CITED_STATS: ReadonlyArray<{ value: string; label: string }> = [
  {
    value: '70.22%',
    label: 'Average documented online cart abandonment rate, calculated by Baymard Institute from 50 studies.',
  },
  {
    value: '40%',
    label: 'of US shoppers who abandoned a cart blamed extra costs such as shipping, tax and fees.',
  },
  {
    value: '19%',
    label:
      'said they did not trust the site with their card details. Trust content beside the payment step needs a checkout extension.',
  },
  {
    value: '17%',
    label:
      'left because checkout was too long or complicated. Baymard counts 23.48 form elements in the average US checkout, against 12 to 14 in a well-built one.',
  },
];

/* ── What you can customize. Five areas, each tied to the Shopify pages it
   comes from. Bullets are deliberately uneven in shape and length. ── */
type Area = {
  n: string;
  title: string;
  body: string;
  items: ReadonlyArray<string>;
  plan: string;
  sources: ReadonlyArray<SrcKey>;
  span: string;
};

const AREAS: ReadonlyArray<Area> = [
  {
    n: '01',
    title: 'Look and branding',
    body: "Set in Shopify's checkout and accounts editor, which is separate from the theme editor.",
    items: [
      'Your logo, with its width and position',
      'A color palette, plus button and accent colors',
      'The checkout font',
      'An image or color behind the order summary',
    ],
    plan: 'The editor is on Basic and higher. Finer styling, such as corner radius on form fields, goes through the Checkout Branding API on Shopify Plus. Since February 5, 2026 no new background image can be added to the header or main content area.',
    sources: ['helpStyle', 'devStyling', 'devTech'],
    span: 'lg:col-span-7',
  },
  {
    n: '02',
    title: 'Fields and validation',
    body: 'A custom field asks the shopper for something extra. Validation checks an answer, or the whole cart, against your rules.',
    items: [
      "A delivery instructions field under the shipping options, Shopify's own example",
      'A notice, such as final sale, no returns',
      'Field checks that stop the shopper until the entry is valid',
      'Server-side rules through a validation Function, such as order limits for new customers',
    ],
    plan: 'Fields and notices inside checkout need Shopify Plus. Validation from an App Store app works on Basic and higher, and a store can run up to 25 validation Functions.',
    sources: ['devFields', 'devValidation', 'devFnValidation'],
    span: 'lg:col-span-5',
  },
  {
    n: '03',
    title: 'Offers and upsells',
    body: 'An upsell is an offer to add one more product to the order. Shopify allows it before payment, straight after payment, and later on the Order status page.',
    items: [
      'A pre-purchase offer block inside checkout',
      'A post-purchase page between payment and the Thank you page. It is in beta, and Shopify must approve access for a live store',
      'An Order status page offer that adds products through order editing',
      'New discount types through a Discount Function, such as volume tiers',
    ],
    plan: 'Pre-purchase blocks need Shopify Plus. Post-purchase apps from the App Store work on Basic and higher. Shopify skips the post-purchase page for wallet and installment payments such as Apple Pay and Klarna.',
    sources: ['devOffers', 'devPostPurchase', 'devDiscounts', 'devTyos', 'helpApps'],
    span: 'lg:col-span-5',
  },
  {
    n: '04',
    title: 'Shipping and payment rules',
    body: 'These rules decide which delivery options and payment methods a shopper sees. They run as Shopify Functions, so nothing new appears on screen.',
    items: [
      'Delivery options hidden, renamed or reordered, for example by destination',
      'Payment methods hidden, renamed or reordered, for example by cart total',
      'Payment terms, and an order review step for B2B checkouts, both on Plus',
      'A delivery date picker on a shipping rate, which is a checkout extension and needs Plus',
    ],
    plan: 'App Store apps for these rules work on Basic and higher, with up to 25 delivery and 25 payment customization Functions per store. Outside Plus, stores in the United States and Canada cannot change credit card fields.',
    sources: ['helpPayDelivery', 'devPayments', 'devFnPayment', 'devDelivery', 'devFnDelivery'],
    span: 'lg:col-span-7',
  },
  {
    n: '05',
    title: 'Thank you and Order status pages',
    body: 'The Thank you page shows once, right after payment. The Order status page is the one customers return to from their confirmation email.',
    items: [
      'A survey after purchase, such as how did you hear about us',
      'Review requests when the customer comes back to check an order',
      'Download links for digital goods',
      'Conversion tracking through web pixels, which replaced pasted-in additional scripts',
    ],
    plan: 'App blocks and pixels here work on every plan except Shopify Starter.',
    sources: ['devTyos', 'helpTyosUpgrade', 'helpAdditionalScripts', 'devTech'],
    span: 'lg:col-span-12',
  },
];

/* ── Plan table. Restates Shopify's own availability tables in one place. ── */
const PLAN_ROWS: ReadonlyArray<{ cap: string; basic: string; plus: string }> = [
  { cap: 'Checkout and accounts editor: logo, colors, fonts', basic: 'Yes', plus: 'Yes' },
  { cap: 'App blocks on the Thank you and Order status pages', basic: 'Yes', plus: 'Yes' },
  { cap: 'App blocks inside the information, shipping and payment steps', basic: 'No', plus: 'Yes' },
  { cap: 'Checkout Branding API for advanced styling', basic: 'No', plus: 'Yes' },
  { cap: 'App Store apps built with Shopify Functions', basic: 'Yes', plus: 'Yes' },
  { cap: 'Custom apps built with Shopify Functions', basic: 'No', plus: 'Yes' },
  { cap: 'Custom apps with post-purchase extensions', basic: 'No', plus: 'Yes' },
  { cap: 'Credit card field changes, stores in the US and Canada', basic: 'No', plus: 'Yes' },
  { cap: 'Checkout overrides for specific markets', basic: 'Advanced only', plus: 'Yes' },
  { cap: 'Draft checkout configurations', basic: 'Up to 20', plus: 'Up to 99' },
];

/* ── What cannot be changed. Eight walls we plan around. ── */
const LIMITS: ReadonlyArray<{ t: string; b: string; sources: ReadonlyArray<SrcKey> }> = [
  {
    t: 'The checkout code itself',
    b: 'checkout.liquid is unsupported for the information, shipping and payment steps, and extensions cannot reach the page HTML.',
    sources: ['devCheckoutLiquid', 'devUiExt'],
  },
  {
    t: 'Card and payment data',
    b: 'Extensions run in an isolated sandbox with no access to sensitive payment information.',
    sources: ['devUiExt'],
  },
  {
    t: 'Free-form design',
    b: 'Extensions can only use the interface components Shopify provides, and a compiled one cannot be larger than 64 KB.',
    sources: ['devUiExt'],
  },
  {
    t: 'More than three app blocks in one area',
    b: 'Shopify caps each highlighted area of checkout at three apps.',
    sources: ['helpApps'],
  },
  {
    t: 'Wallet buttons',
    b: 'Shop Pay, Apple Pay and Google Pay cannot be renamed. Wallets can be removed but not reordered.',
    sources: ['devPayments'],
  },
  {
    t: 'Payment rules inside Shop Pay',
    b: 'Payment customization Functions do not act there, apart from the gift card field.',
    sources: ['devPayments'],
  },
  {
    t: 'Random or time-based logic in a Function',
    b: 'Shopify does not allow randomizing or clock functions. A Function gets 11 million instructions per run for carts of up to 200 line items.',
    sources: ['devFunctionsApi'],
  },
  {
    t: 'The order, from the Thank you page',
    b: 'Extensions on the Thank you and Order status pages cannot change an order directly.',
    sources: ['devTyos'],
  },
];

/* ── Retirement timeline. Dates exactly as the linked Shopify page shows them
   on 2026-10-05. Re-fetch before editing any of them. ── */
const TIMELINE: ReadonlyArray<{ iso: string; date: string; text: string; src: SrcKey }> = [
  {
    iso: '2023-02-13',
    date: 'Feb 13, 2023',
    text: 'Shopify announces that checkout.liquid is being deprecated.',
    src: 'clCheckoutLiquid',
  },
  {
    iso: '2024-08-13',
    date: 'Aug 13, 2024',
    text: 'checkout.liquid stops working on the information, shipping and payment pages.',
    src: 'clCheckoutLiquid',
  },
  {
    iso: '2025-08-28',
    date: 'Aug 28, 2025',
    text: 'checkout.liquid and additional scripts are sunset on the Thank you and Order status pages, along with script tags for Plus stores.',
    src: 'devCheckoutLiquid',
  },
  {
    iso: '2026-04-15',
    date: 'Apr 15, 2026',
    text: 'Editing and publishing Shopify Scripts ends.',
    src: 'clScripts',
  },
  {
    iso: '2026-06-30',
    date: 'Jun 30, 2026',
    text: 'All Shopify Scripts stop executing. Published Scripts are deactivated.',
    src: 'helpScripts',
  },
  {
    iso: '2026-08-26',
    date: 'Aug 26, 2026',
    text: 'Deadline for non-Plus stores to upgrade the Thank you and Order status pages. Stores not upgraded were upgraded automatically.',
    src: 'helpTyosUpgrade',
  },
];

const REPLACEMENTS: ReadonlyArray<{ old: string; now: string }> = [
  { old: 'checkout.liquid layout edits', now: 'Checkout UI extensions and branding settings' },
  { old: 'Additional scripts and script tags used for tracking', now: 'Web pixels, from an app or as a custom pixel' },
  { old: 'Additional scripts that changed page content', now: 'App blocks on the Thank you and Order status pages' },
  { old: 'Line item Scripts, which set discounts', now: 'Discount Functions' },
  { old: 'Shipping Scripts', now: 'Delivery customization Functions' },
  { old: 'Payment Scripts', now: 'Payment customization Functions' },
];

/* ── Places where two Shopify pages said different things on 2026-10-05. ── */
const DISAGREEMENTS: ReadonlyArray<{ t: string; b: string; sources: ReadonlyArray<SrcKey> }> = [
  {
    t: 'Which layout is the default',
    b: 'The help center says stores default to one-page checkout and that both layouts support the same customizations. The developer testing guide calls three-page checkout the default. We test both.',
    sources: ['helpOnePage', 'devTest'],
  },
  {
    t: 'Who can use Shopify Functions',
    b: 'The developer technologies table says all plans except Starter. The Functions page adds that custom apps containing them need Shopify Plus.',
    sources: ['devTech', 'devFunctions'],
  },
  {
    t: 'The Thank you page deadline',
    b: 'The help center overview gives August 26, 2026. The developer docs add an earlier date for Plus stores, August 28, 2025.',
    sources: ['helpTyosUpgrade', 'devCheckoutLiquid'],
  },
];

/* ── Process. Six steps, in the order we work. ── */
const PROCESS: ReadonlyArray<{ n: string; t: string; b: string }> = [
  {
    n: '01',
    t: 'Read what the store has today',
    b: 'We list your plan, installed checkout apps, active Functions and pixels. You get a short written list of each change you want and the route it would take.',
  },
  {
    n: '02',
    t: 'Pick the lightest route that works',
    b: 'A setting in the checkout editor beats an app. An App Store app beats a custom build. We quote custom work only when the first two cannot do the job.',
  },
  {
    n: '03',
    t: 'Agree the spec and a fixed quote',
    b: 'The spec says what shows, on which step, to which shoppers, and what happens when something fails. The price is fixed in writing before work starts.',
  },
  {
    n: '04',
    t: 'Build in a draft, away from live orders',
    b: 'Shopify allows up to 20 draft checkout configurations on Basic, Grow and Advanced and 99 on Plus, with one live at a time. We build in a development store, then add the work to a draft in your store.',
  },
  {
    n: '05',
    t: 'Test with real test orders',
    b: "Shopify's editor preview cannot place orders, so we place test orders outside it. We cover one-page and three-page layouts, Shop Pay, phones, each discount and shipping combination, and the path when a rule blocks an order.",
  },
  {
    n: '06',
    t: 'Publish, watch, stay on',
    b: 'Publishing the draft turns the old configuration into a draft, so there is a way back. On the online store, Shopify rollouts can show the new checkout to a share of visitors first.',
  },
];

/* ── Comparison: custom extension vs App Store app vs leaving checkout alone ── */
const COMPARE_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: 'Custom extension built by FactoryJet', isFactoryJet: true },
  { label: 'An app from the Shopify App Store' },
  { label: 'Leaving checkout as it is' },
];

const COMPARE_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'Fit to your rules',
    values: ['Built to your exact rule, field or layout', "As close as the app's settings allow", "Shopify's default checkout"],
  },
  {
    feature: 'Shopify plan it needs',
    values: [
      'Plus for in-checkout blocks and custom Functions',
      'Basic and higher for Functions and Thank you page apps. Plus for blocks inside checkout',
      'Any plan',
    ],
  },
  {
    feature: 'Who looks after it',
    values: ['We do, under a support plan. You own the code', "The app's developer", 'Shopify'],
  },
  {
    feature: 'Recurring fees',
    values: ['No app subscription. Build and support quoted in writing', 'Whatever the app charges', 'None'],
  },
  {
    feature: 'Right call when',
    values: [
      'Your rule is specific to your business, or apps overlap',
      'A well-reviewed app already does the job',
      'Checkout converts well and nothing is broken',
    ],
  },
];

const RELATED: ReadonlyArray<{ href: string; t: string; b: string }> = [
  { href: '/services/shopify-plus-agency', t: 'Shopify Plus agency', b: 'What Plus changes beyond checkout.' },
  { href: '/services/shopify-development', t: 'Shopify development', b: 'Full store builds.' },
  { href: '/services/ecommerce-cro-agency', t: 'Ecommerce CRO agency', b: 'Choosing what to test first.' },
  { href: '/services/ecommerce-audit', t: 'Free ecommerce audit', b: 'A written review of your checkout flow.' },
  { href: '/services/shopify-maintenance-services', t: 'Shopify maintenance and support', b: 'Keeps extensions current.' },
  { href: '/omnichannel-commerce', t: 'Omnichannel commerce', b: 'Checkout across every place you sell.' },
];

/** Small inline source links. Same visual pattern as the audit page's stat sources. */
function SourceLinks({ ids }: { ids: ReadonlyArray<SrcKey> }) {
  return (
    <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5">
      {ids.map((id) => (
        <a
          key={id}
          href={SRC[id].url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-fj-mono text-[11px] font-semibold tracking-wide text-[#B23E13] hover:underline"
        >
          <svg width="10" height="10" viewBox="0 0 9 9" fill="none" aria-hidden="true" className="flex-shrink-0">
            <path d="M1.5 7.5L7.5 1.5M7.5 1.5H3M7.5 1.5V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {SRC[id].short}
        </a>
      ))}
    </p>
  );
}

const SOURCE_KEYS = Object.keys(SRC) as SrcKey[];

export default function ShopifyCheckoutCustomizationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />

      <SiteHeader />

      <main className="min-h-screen bg-fj-cream text-fj-ink">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* 1. HERO */}
        <section className="relative overflow-hidden border-b border-fj-neutral-200 bg-fj-cream pt-12 pb-14 md:pt-14 md:pb-16">
          <div className="mx-auto max-w-[1200px] px-6 md:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F05A28]/30 bg-white px-3 py-1.5">
                  <span className="font-fj-mono text-xs font-bold tracking-wide text-[#B23E13]">
                    SHOPIFY CHECKOUT CUSTOMIZATION &middot; UNITED STATES
                  </span>
                </div>

                <h1 className="font-fj-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-fj-ink sm:text-5xl lg:text-[3.2rem]">
                  Shopify checkout customization, built and tested in your store.
                </h1>

                <p className="mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600">
                  We plan, build, test and support changes to your Shopify checkout: custom fields, upsell offers,
                  shipping and payment rules, branding, and Thank you page content. If something stopped working when
                  Shopify switched off checkout.liquid and Scripts, we rebuild it on the current system. You get a fixed
                  quote in writing before work starts.
                </p>

                <div className="mt-6">
                  <HeroInlineForm
                    region="us"
                    source="services_shopify_checkout_customization_hero"
                    service="Shopify Checkout Customization"
                    submitLabel="Scope my checkout change"
                  />
                </div>

                <div className="mt-5">
                  <Link
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-fj-body text-sm font-semibold text-fj-ink hover:opacity-70"
                  >
                    Talk to the founder
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="h-4 w-4">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-fj-neutral-200 pt-5 font-fj-mono text-xs text-fj-neutral-600">
                  <span>Registered Shopify Partner</span>
                  <span>500+ businesses served</span>
                  <span>Founded 2014</span>
                  <span>Shopify facts checked {CHECKED_ON}</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <figure className="rounded-2xl border border-fj-neutral-200 bg-white p-5 sm:p-6">
                  <figcaption className="font-fj-mono text-[11px] font-bold uppercase tracking-wider text-[#B23E13]">
                    What each part of checkout needs
                  </figcaption>
                  <CheckoutMapDiagram />
                  <ul className="mt-4 grid gap-2 font-fj-body text-[13px] leading-snug text-fj-ink">
                    <li className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-[3px] h-3 w-3 flex-shrink-0 rounded-sm border-[1.5px] border-[#F05A28] bg-[#FFF4EE]" />
                      Orange: your own blocks here need Shopify Plus.
                    </li>
                    <li className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-[3px] h-3 w-3 flex-shrink-0 rounded-sm border-[1.5px] border-[#14110F] bg-white" />
                      Black outline: open on the Basic plan and higher.
                    </li>
                  </ul>
                  <p className="mt-3 font-fj-body text-[13px] leading-snug text-fj-neutral-600">
                    Discount, shipping and payment rules run behind these steps as Shopify Functions. App Store apps
                    work on Basic and higher. Custom-built ones need Plus.
                  </p>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ANSWER-FIRST BLOCK */}
        <section className="border-b border-fj-neutral-200 bg-white py-12">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <div id="short-answer" className="rounded-2xl border-2 border-[#F05A28]/25 bg-fj-cream p-6 sm:p-8">
              <div className="mb-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                Short answer
              </div>
              <p className="font-fj-body text-base leading-relaxed text-fj-ink sm:text-lg">
                Yes, you can customize Shopify checkout, and how far depends on your plan. On Basic and higher you can
                change the logo, colors and fonts in the checkout editor, add app blocks to the Thank you and Order
                status pages, and use App Store apps for discount, shipping and payment rules. Custom blocks inside the
                information, shipping and payment steps need Shopify Plus, as do custom-built Shopify Functions and the
                Checkout Branding API. Direct code edits are gone. checkout.liquid is unsupported for those steps, and
                Shopify Scripts stopped running on June 30, 2026 (as listed on {CHECKED_ON}).
              </p>
              <SourceLinks ids={['helpCustomize', 'helpApps', 'devCheckoutLiquid', 'helpScripts']} />
            </div>
          </div>
        </section>

        {/* 3. CITED STATS */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Why checkout is worth the work</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              What shoppers say stops them at checkout.
            </h2>
            <p className="mt-4 max-w-2xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              All four figures are from one Baymard Institute page, last updated September 22, 2025. The three reasons
              are what US shoppers told Baymard, with people who were only browsing left out. We treat them as a bar. A
              change that adds a field or a step needs a reason.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {CITED_STATS.map((s) => (
                <div key={s.value} className="rounded-2xl border border-fj-neutral-200 border-t-[3px] border-t-[#F05A28] bg-white p-6">
                  <div className="font-fj-display text-3xl font-bold tracking-[-0.02em] text-[#F05A28] sm:text-4xl">
                    {s.value}
                  </div>
                  <p className="mt-3 font-fj-body text-sm leading-relaxed text-fj-neutral-600">{s.label}</p>
                  <SourceLinks ids={['baymard']} />
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Choosing which change to test first is conversion work, covered on our{' '}
              <Link href="/services/ecommerce-cro-agency" className="font-semibold text-fj-ink underline underline-offset-4">
                ecommerce CRO agency
              </Link>{' '}
              page. If you do not yet know where checkout loses orders, start with the{' '}
              <Link href="/services/ecommerce-audit" className="font-semibold text-fj-ink underline underline-offset-4">
                free ecommerce audit
              </Link>
              .
            </p>
          </div>
        </section>

        {/* 4. WHAT YOU CAN CUSTOMIZE */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">The five areas</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              What you can customize in Shopify checkout.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Shopify checkout is changed through set openings, each with its own tool and plan rule. A checkout
              extension is a small block that an app adds to one of those openings. Shopify Functions are small
              programs that change checkout&rsquo;s rules on Shopify&rsquo;s servers. If checkout is one part of a
              bigger build, see{' '}
              <Link href="/services/shopify-development" className="font-semibold text-fj-ink underline underline-offset-4">
                Shopify development
              </Link>
              .
            </p>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
              {AREAS.map((a) => (
                <div key={a.n} className={`rounded-2xl border border-fj-neutral-200 bg-fj-cream p-7 ${a.span}`}>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white font-fj-mono text-sm font-bold text-[#B23E13]">
                    {a.n}
                  </div>
                  <h3 className="font-fj-display text-xl font-semibold text-fj-ink">{a.title}</h3>
                  <p className="mt-2 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{a.body}</p>
                  <ul className="mt-4 grid gap-2">
                    {a.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                        <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 rounded-xl border border-fj-neutral-200 bg-white px-4 py-3 font-fj-body text-sm leading-relaxed text-fj-ink">
                    <span className="font-semibold">Plan and limits.</span> {a.plan}
                  </p>
                  <SourceLinks ids={a.sources} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. PLUS-ONLY VS EVERY PLAN */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Plans</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  What needs Shopify Plus, and what every plan gets.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Shopify&rsquo;s own availability table, restated in one place as listed on {CHECKED_ON}. The middle
                  column covers Basic, Grow and Advanced.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  If checkout is the reason you are looking at Plus, our{' '}
                  <Link href="/services/shopify-plus-agency" className="font-semibold text-fj-ink underline underline-offset-4">
                    Shopify Plus agency
                  </Link>{' '}
                  page covers what else the plan changes.
                </p>
                <SourceLinks ids={['helpCustomize', 'helpApps', 'helpPayDelivery', 'helpEditor', 'helpDrafts', 'devPostPurchase']} />
              </div>

              <div className="lg:col-span-8">
                <div className="overflow-x-auto rounded-2xl border border-fj-neutral-200 bg-white">
                  <table className="w-full table-fixed border-collapse text-left">
                    <caption className="sr-only">
                      Shopify checkout customization by plan, as listed in Shopify documentation on {CHECKED_ON}
                    </caption>
                    <thead>
                      <tr className="border-b border-fj-neutral-200">
                        <th scope="col" className="w-[50%] px-3 py-3 font-fj-mono text-[11px] font-bold uppercase tracking-wider text-fj-neutral-600 sm:w-[56%] sm:px-5 sm:py-4">
                          Checkout capability
                        </th>
                        <th scope="col" className="px-3 py-3 font-fj-mono text-[11px] font-bold uppercase tracking-wider text-fj-neutral-600 sm:px-5 sm:py-4">
                          Basic, Grow, Advanced
                        </th>
                        <th scope="col" className="px-3 py-3 font-fj-mono text-[11px] font-bold uppercase tracking-wider text-[#B23E13] sm:px-5 sm:py-4">
                          Shopify Plus
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {PLAN_ROWS.map((r) => (
                        <tr key={r.cap} className="border-b border-fj-neutral-200 last:border-b-0">
                          <th scope="row" className="px-3 py-3 font-fj-body text-sm font-medium leading-snug text-fj-ink sm:px-5 sm:py-4 sm:text-[15px]">
                            {r.cap}
                          </th>
                          <td
                            className={`px-3 py-3 font-fj-body text-sm sm:px-5 sm:py-4 sm:text-[15px] ${
                              r.basic === 'No' ? 'text-fj-neutral-600' : 'font-semibold text-fj-ink'
                            }`}
                          >
                            {r.basic}
                          </td>
                          <td className="px-3 py-3 font-fj-body text-sm font-semibold text-fj-ink sm:px-5 sm:py-4 sm:text-[15px]">{r.plus}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                  Shopify&rsquo;s free Checkout Blocks app is listed for Basic and higher with some feature restrictions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. WHAT YOU CANNOT CHANGE */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">The walls</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              What you cannot change, on any plan.
            </h2>
            <p className="mt-4 max-w-2xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Knowing the walls early saves a build. These eight are the ones we plan around most often.
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {LIMITS.map((l) => (
                <li key={l.t} className="rounded-xl border border-fj-neutral-200 border-l-[3px] border-l-[#F05A28] bg-fj-cream px-5 py-4">
                  <div className="font-fj-display text-[15px] font-semibold text-fj-ink">{l.t}</div>
                  <p className="mt-1 font-fj-body text-sm leading-relaxed text-fj-neutral-600">{l.b}</p>
                  <SourceLinks ids={l.sources} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <MidPageCTA
          headline="Tell us the change. We will tell you the route."
          sub="Send the change you have in mind and your Shopify plan. We reply with the lightest way to do it and a fixed quote if there is work for us."
          label="Scope my checkout change"
        />

        {/* 7. CHECKOUT EXTENSIBILITY: THE MOVE OFF checkout.liquid AND SCRIPTS */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">Migration</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Shopify checkout extensibility: the move off checkout.liquid and Scripts.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Checkout extensibility is the name Shopify used, in its February 13, 2023 changelog, for customizing
                  checkout through apps and extensions in place of code edits. Its developer docs now call it Shopify
                  Extensions in Checkout.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Two older tools were retired along the way. checkout.liquid was a theme file that let Shopify Plus
                  stores edit checkout&rsquo;s code. Shopify Scripts were small pieces of Ruby code that changed
                  discounts, shipping options and payment options.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  Every deadline in that retirement has now passed. The work left is to find what was switched off and
                  decide what is worth rebuilding. Shopify&rsquo;s Scripts customizations report, in your admin, lists
                  the Scripts that were active before June 30, 2026, and we start every migration by reading it.
                </p>
                <SourceLinks ids={['clCheckoutLiquid', 'devCheckout', 'devCheckoutLiquid', 'helpScripts', 'helpScriptsToFunctions']} />
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 sm:p-8">
                  <h3 className="font-fj-display text-xl font-semibold text-fj-ink">
                    The official dates, as listed on {CHECKED_ON}
                  </h3>
                  <ol className="mt-6 grid gap-5">
                    {TIMELINE.map((e) => (
                      <li key={e.iso} className="grid grid-cols-1 gap-1 border-l-[3px] border-l-[#F05A28] pl-4 sm:grid-cols-[120px_1fr] sm:gap-4">
                        <time dateTime={e.iso} className="font-fj-mono text-sm font-bold text-[#B23E13]">
                          {e.date}
                        </time>
                        <div>
                          <p className="font-fj-body text-[15px] leading-relaxed text-fj-ink">{e.text}</p>
                          <SourceLinks ids={[e.src]} />
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 sm:p-8 lg:col-span-7">
                <h3 className="font-fj-display text-xl font-semibold text-fj-ink">What replaces what</h3>
                <ul className="mt-5 grid gap-3">
                  {REPLACEMENTS.map((r) => (
                    <li key={r.old} className="grid grid-cols-1 gap-1 rounded-xl border border-fj-neutral-200 bg-white px-4 py-3 sm:grid-cols-2 sm:gap-4">
                      <span className="font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                        <span className="font-fj-mono text-[11px] font-bold uppercase tracking-wider text-fj-neutral-600">Was </span>
                        {r.old}
                      </span>
                      <span className="font-fj-body text-sm font-semibold leading-relaxed text-fj-ink">
                        <span className="font-fj-mono text-[11px] font-bold uppercase tracking-wider text-[#B23E13]">Now </span>
                        {r.now}
                      </span>
                    </li>
                  ))}
                </ul>
                <SourceLinks ids={['helpScripts', 'helpAdditionalScripts', 'devTech']} />
              </div>

              <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 sm:p-8 lg:col-span-5">
                <h3 className="font-fj-display text-xl font-semibold text-fj-ink">
                  Where Shopify&rsquo;s own pages disagree
                </h3>
                <ul className="mt-5 grid gap-5">
                  {DISAGREEMENTS.map((d) => (
                    <li key={d.t}>
                      <div className="font-fj-display text-[15px] font-semibold text-fj-ink">{d.t}</div>
                      <p className="mt-1 font-fj-body text-sm leading-relaxed text-fj-neutral-600">{d.b}</p>
                      <SourceLinks ids={d.sources} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 8. PROCESS */}
        <section className="bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Process</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  How we plan, build, test and launch a checkout change.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Checkout is the one page where a mistake costs an order straight away, so nothing we build touches
                  live shoppers until it has been through a draft and test orders. After launch,{' '}
                  <Link
                    href="/services/shopify-maintenance-services"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    Shopify maintenance and support
                  </Link>{' '}
                  keeps it current.
                </p>
                <SourceLinks ids={['helpDrafts', 'helpEditor', 'devTest', 'helpRollouts']} />
              </div>
              <ol className="grid gap-4 lg:col-span-8">
                {PROCESS.map((p) => (
                  <li key={p.n} className="flex items-start gap-4 rounded-2xl border border-fj-neutral-200 bg-white p-6">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-fj-cream font-fj-mono text-sm font-bold text-[#B23E13]">
                      {p.n}
                    </div>
                    <div>
                      <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{p.t}</h3>
                      <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{p.b}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 9. COMPARISON: custom extension vs App Store app vs leaving checkout alone */}
        <ComparisonTable
          eyebrow="How the options compare"
          headline="Custom extension, App Store app, or leave checkout alone."
          lead="An App Store app is often the right answer, and we will say so on the scoping call. Custom work earns its cost when your rule is specific to your business or when apps start to overlap."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
          footer={`Plan requirements are from Shopify's documentation as listed on ${CHECKED_ON}.`}
          scrollRegionLabel="Comparison of Shopify checkout customization options"
        />

        {/* 10. RELATED SERVICES */}
        <section className="border-y border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Next to this page</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Related Shopify services.
            </h2>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
              {RELATED.map((r, i) => (
                <li key={r.href} className={i % 4 === 0 || i % 4 === 3 ? 'lg:col-span-7' : 'lg:col-span-5'}>
                  <Link
                    href={r.href}
                    className="block h-full rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 transition-colors hover:border-[#F05A28]"
                  >
                    <span className="font-fj-display text-lg font-semibold text-fj-ink">{r.t}</span>
                    <span className="mt-1.5 block font-fj-body text-sm leading-relaxed text-fj-neutral-600">{r.b}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 11. SOURCES + REVIEW LINE */}
        <section className="bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Method</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Sources, checked on {CHECKED_ON}.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Every plan rule, date and limit on this page was read from the pages listed here on that day. Shopify
                  has moved these deadlines before, so check the linked page before you act on a date.
                </p>
                <p className="mt-6 font-fj-mono text-xs leading-relaxed text-fj-neutral-600">
                  Reviewed and updated {PAGE_MODIFIED} &middot;{' '}
                  <Link href="/author/bhavesh-barot" className="underline underline-offset-4">
                    Bhavesh Barot
                  </Link>
                  , Founder
                </p>
              </div>
              <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2 lg:col-span-8">
                {SOURCE_KEYS.map((k) => (
                  <li key={k}>
                    <a
                      href={SRC[k].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-fj-body text-sm leading-snug text-fj-ink underline decoration-fj-neutral-200 underline-offset-4 hover:decoration-[#F05A28]"
                    >
                      {SRC[k].label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 12. FAQ */}
        <FAQ
          eyebrow="Shopify checkout customization FAQ"
          headline="Checkout questions, answered plainly."
          lead="What merchants ask before changing Shopify checkout. Platform answers are from Shopify's documentation as listed on 5 Oct 2026."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* 13. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="Shopify checkout customization"
          headline="Change your checkout without breaking it."
          sub="Tell us what you want checkout to do. We plan the route, build it in a draft, test it with real test orders and stay on after launch."
          primaryCta={{ label: 'Scope my checkout change', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
          objectionHandler="Registered Shopify Partner. Fixed quote in writing before work starts. You own the code."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
