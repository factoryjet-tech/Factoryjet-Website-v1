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

import ThreeSetupsDiagram from './ThreeSetupsDiagram';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/wordpress-shopify-integration, built 2026-10-08.

   Why this page exists: US buyers who reached FactoryJet through ChatGPT between
   10 Aug and 8 Oct 2026 landed on narrow pages that name one job, and one of
   them asked for a WordPress site joined to a Shopify store. No page covered it.
   US monthly searches measured 2026-10-08 (DataForSEO, location 2840):
   "shopify wordpress plugin" 590 (KD 19), "shopify wordpress" 480 (KD 17),
   "shopify wordpress integration" 210 (KD 10), "connect shopify to wordpress" 50,
   "shopify buy button for wordpress" 50. Page one is Shopify's own pages and
   community threads, Reddit, YouTube and WordPress.org, with an AI Overview on
   7 of the 9 SERPs that returned. FactoryJet was in none of the top 20s.

   Truth rules for anyone editing this file:
   - Every platform fact (what a plugin needs, what syncs, ratings, launch
     dates, limits) was read from the maker's own page on 2026-10-08 and links
     to that page through the SRC map below. Ratings and install counts move. If
     you change one, re-fetch the page first and update the "as listed on" wording.
   - The plugin-address finding (the WordPress.org address in Shopify's developer
     page leading to a search page) was checked two ways that day: the HTTP
     redirect, and WordPress.org's plugin API answering "Plugin not found" for
     the slug shopify-plugin. Re-check both before keeping it after any edit.
   - Written for every industry on purpose. No client is named or described.
   - No FactoryJet prices. The only dollar figure is a sourced market rate
     inside the one cost FAQ answer.
   - The migration terms ("wordpress to shopify migration") belong to
     /replatforming/wordpress-to-shopify. This page covers the third setup in
     brief and links there. Do not add migration terms to the title or keywords.
   - Mirrors /services/shopify-quickbooks-integration for components and schema.

   Schema: WebPage + Service + FAQPage + BreadcrumbList. Organization is
   rendered once sitewide by src/app/layout.tsx and referenced here by @id.
   The FAQPage mainEntity is generated from the exact FAQ_ITEMS array the
   visible <FAQ> component renders. There is no second, hand-written array.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services/wordpress-shopify-integration';
const PAGE_TITLE = 'WordPress Shopify Integration Services | FactoryJet';
const PAGE_DESC =
  'We join WordPress and Shopify three ways. A store on its own address, Shopify products inside your WordPress pages, or your content moved into Shopify.';
const PAGE_PUBLISHED = '2026-10-08';
const PAGE_MODIFIED = '2026-10-08';
const CHECKED_ON = '8 Oct 2026';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/services/wordpress-shopify-integration';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'wordpress shopify integration',
    'shopify wordpress integration',
    'shopify wordpress plugin',
    'shopify plugin for wordpress',
    'shopify with wordpress',
    'add shopify to wordpress',
    'integrate shopify with wordpress',
    'connect shopify to wordpress',
    'shopify buy button wordpress',
    'can you use shopify with wordpress',
    'shopify subdomain wordpress site',
    'wordpress shopify integration services',
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
        alt: 'FactoryJet, WordPress and Shopify integration services for US businesses',
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
  { name: 'WordPress Shopify Integration', url: CANONICAL_URL },
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
  name: 'WordPress Shopify Integration',
  serviceType:
    'WordPress and Shopify integration, Shopify store on a subdomain of a WordPress site, Shopify plugin and Buy Button setup in WordPress, WordPress content moved into Shopify',
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'FactoryJet plans, builds, tests and supports the join between a WordPress website and a Shopify store, in one of three setups: WordPress stays the main site with the Shopify store on its own address, Shopify products and buy buttons are placed inside WordPress pages, or WordPress pages and posts are moved into Shopify. Work covers DNS and domain setup, matching the design on both sides, plugin and block customization, tracking across both sites, redirects and support after launch.',
  url: CANONICAL_URL,
};

/* ── Sources. One map, used by every inline source link (the `short` label) AND
   by the visible "Sources" list near the foot of the page (the full `label`).
   Each URL was opened on 2026-10-08 and the supporting sentence read before the
   claim was written. Install counts and ratings on WordPress.org were also read
   from WordPress.org's own plugin API the same day. ── */
const SRC = {
  helpSellOnWp: {
    short: 'Shopify Help: Sell on WordPress',
    label: 'Shopify Help Center: Sell on WordPress',
    url: 'https://help.shopify.com/en/manual/online-sales-channels/sell-on-wordpress',
  },
  helpConnect: {
    short: 'Shopify Help: connect to WordPress',
    label: 'Shopify Help Center: Connect Shopify to WordPress',
    url: 'https://help.shopify.com/en/manual/online-sales-channels/sell-on-wordpress/connect-shopify-to-wordpress',
  },
  helpAddProducts: {
    short: 'Shopify Help: add products to WordPress',
    label: 'Shopify Help Center: Add products to WordPress site',
    url: 'https://help.shopify.com/en/manual/online-sales-channels/sell-on-wordpress/add-products-to-wordpress',
  },
  helpCheckoutTraffic: {
    short: 'Shopify Help: checkout traffic',
    label: 'Shopify Help Center: Managing your checkout traffic with the Sell on WordPress theme',
    url: 'https://help.shopify.com/en/manual/online-sales-channels/sell-on-wordpress/manage-checkout-traffic',
  },
  helpAdvanced: {
    short: 'Shopify Help: advanced customizations',
    label: 'Shopify Help Center: Advanced product and collections display customizations for the Shopify plugin',
    url: 'https://help.shopify.com/en/manual/online-sales-channels/sell-on-wordpress/advanced-customizations',
  },
  devPlugin: {
    short: 'shopify.dev: plugin for WordPress',
    label: 'shopify.dev: Shopify Plugin for WordPress',
    url: 'https://shopify.dev/docs/storefronts/headless/bring-your-own-stack/wordpress',
  },
  shopifySellOnWp: {
    short: 'Shopify: Sell on WordPress',
    label: 'Shopify: Shopify plugin, sell on your WordPress website',
    url: 'https://www.shopify.com/sell-on-wordpress',
  },
  appSellOnWp: {
    short: 'Shopify App Store: Sell on WordPress',
    label: 'Shopify App Store: Sell on WordPress, by Shopify',
    url: 'https://apps.shopify.com/sell-on-wordpress',
  },
  helpBuyButton: {
    short: 'Shopify Help: Buy Button',
    label: 'Shopify Help Center: Buy Button',
    url: 'https://help.shopify.com/en/manual/online-sales-channels/buy-button',
  },
  helpBuyButtonCreate: {
    short: 'Shopify Help: creating a Buy Button',
    label: 'Shopify Help Center: Creating a Buy Button',
    url: 'https://help.shopify.com/en/manual/online-sales-channels/buy-button/create-buy-button',
  },
  helpBuyButtonEmbed: {
    short: 'Shopify Help: Buy Button code in WordPress',
    label: 'Shopify Help Center: Adding Buy Button code to HTML',
    url: 'https://help.shopify.com/en/manual/online-sales-channels/buy-button/add-embed-code',
  },
  helpBuyButtonFaq: {
    short: 'Shopify Help: Buy Button FAQ',
    label: 'Shopify Help Center: Buy Button FAQ',
    url: 'https://help.shopify.com/en/manual/online-sales-channels/buy-button/faq',
  },
  appBuyButton: {
    short: 'Shopify App Store: Buy Button channel',
    label: 'Shopify App Store: Buy Button channel, by Shopify',
    url: 'https://apps.shopify.com/buy-button',
  },
  helpSubdomain: {
    short: 'Shopify Help: connect a subdomain',
    label: 'Shopify Help Center: Connecting a third-party subdomain to Shopify',
    url: 'https://help.shopify.com/en/manual/domains/add-a-domain/connecting-domains/connect-subdomain',
  },
  helpMigrate: {
    short: 'Shopify Help: migrate to Shopify',
    label: 'Shopify Help Center: Migrate to Shopify',
    url: 'https://help.shopify.com/en/manual/migrating-to-shopify',
  },
  helpMigrateWoo: {
    short: 'Shopify Help: migrate from WooCommerce',
    label: 'Shopify Help Center: Migrate from WooCommerce',
    url: 'https://help.shopify.com/en/manual/migrating-to-shopify/migrating-from-woocommerce',
  },
  helpRedirects: {
    short: 'Shopify Help: URL redirects',
    label: 'Shopify Help Center: Creating and managing URL redirects',
    url: 'https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect',
  },
  devArticle: {
    short: 'shopify.dev: article object',
    label: 'shopify.dev: Liquid article object, with an example blog post address',
    url: 'https://shopify.dev/docs/api/liquid/objects/article',
  },
  wpExport: {
    short: 'WordPress.org: Tools Export screen',
    label: 'WordPress.org Documentation: Tools Export screen',
    url: 'https://wordpress.org/documentation/article/tools-export-screen/',
  },
  wporgImporter: {
    short: 'WordPress.org: Shopify Importer',
    label: 'WordPress.org Plugin Directory: Shopify Importer',
    url: 'https://wordpress.org/plugins/shopify/',
  },
  wporgShopwp: {
    short: 'WordPress.org: ShopWP',
    label: 'WordPress.org Plugin Directory: ShopWP',
    url: 'https://wordpress.org/plugins/wpshopify/',
  },
  wporgExternalStore: {
    short: 'WordPress.org: External Store for Shopify',
    label: 'WordPress.org Plugin Directory: External Store for Shopify',
    url: 'https://wordpress.org/plugins/wp-shopify/',
  },
  wporgWoo: {
    short: 'WordPress.org: WooCommerce',
    label: 'WordPress.org Plugin Directory: WooCommerce',
    url: 'https://wordpress.org/plugins/woocommerce/',
  },
  matrixify: {
    short: 'Matrixify: WordPress to Shopify tutorial',
    label: 'Matrixify: Migrate your store from WordPress/WooCommerce to Shopify (updated Sep 28, 2026)',
    url: 'https://matrixify.app/tutorials/migrate-store-from-wordpress-woocommerce-to-shopify/',
  },
  gaCrossDomain: {
    short: 'Google Analytics Help: cross-domain',
    label: 'Google Analytics Help: Set up cross-domain measurement',
    url: 'https://support.google.com/analytics/answer/10071811',
  },
  googleSiteMove: {
    short: 'Google Search Central: site moves',
    label: 'Google Search Central: Site moves with URL changes',
    url: 'https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes',
  },
  cartcoders: {
    short: 'CartCoders rate guide, Mar 10, 2026',
    label: 'CartCoders: Shopify Developer Cost Breakdown for 2026 (Mar 10, 2026)',
    url: 'https://cartcoders.com/blog/shopify-development/shopify-developer-cost-hourly-rate-project-pricing/',
  },
} as const;

type SrcKey = keyof typeof SRC;

/* ── FAQ. Single array, rendered visibly below AND used to build the FAQPage
   JSON-LD. Never hand-duplicate this list near the ld+json block.
   Questions come from People Also Ask and related searches pulled from
   DataForSEO (US, location 2840) on 2026-10-08, plus the page's own queries. ── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'Using them together' },
  { key: 'plugin', label: 'Plugins and buy buttons' },
  { key: 'moving', label: 'Addresses and moving' },
  { key: 'working', label: 'Working with us' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── Using them together ──────────────────────────────────────────
  {
    category: 'basics',
    question: 'Can I use Shopify with my WordPress website?',
    answer:
      "Yes, in three ways. WordPress can stay your main site while the Shopify store sits on its own address, such as shop.yourname.com. Shopify products and buy buttons can be placed inside your WordPress pages, with payment on Shopify's checkout. Or your WordPress pages and posts can be moved into Shopify. Shopify's help center documents the first two, and its migration guide covers the third.",
  },
  {
    category: 'basics',
    question: 'How do I integrate Shopify with WordPress?',
    answer:
      "Shopify's own route has three steps. Install and activate the Shopify plugin in WordPress. Install the Sell on WordPress sales channel in your Shopify admin. Then copy the Shopify access token from the sales channel and paste it into the plugin's settings in WordPress. After that, products and collections are added to pages as blocks in the WordPress editor.",
  },
  {
    category: 'basics',
    question: 'Is Shopify built on WordPress?',
    answer:
      "No. They are separate products from separate companies. WordPress is open-source software for publishing a website. Shopify is a hosted platform for running a store. Shopify's own page for its WordPress plugin says the plugin is built by Shopify and is not associated with WordPress.",
  },
  {
    category: 'basics',
    question: 'Which is better, Shopify or WordPress?',
    answer:
      'They do different jobs, and they can run together. WordPress is built for publishing pages and articles. Shopify is built for selling: products, a cart, a checkout and orders. If most of your visitors arrive through articles, keep WordPress and add Shopify. If the store is the whole business, one Shopify site is simpler to run.',
  },
  {
    category: 'basics',
    question: 'Do I still need WooCommerce if I use Shopify with WordPress?',
    answer:
      'No. WooCommerce is the store plugin for WordPress, with more than 7 million active installations on WordPress.org as listed on 8 Oct 2026. If Shopify holds your products and takes payment, WooCommerce has no job left. Running both means two product lists and two stock counts to keep in step.',
  },
  {
    category: 'basics',
    question: 'How do I link my Shopify store to my website?',
    answer:
      "For a store on its own address, you add one DNS record at the company where you bought your domain. Shopify's guide says to create a CNAME record for the subdomain, for example shop, and point it to shops.myshopify.com. Then you connect the subdomain under Settings, Domains in your Shopify admin. Shopify says its check of the records can take a few minutes.",
  },
  {
    category: 'basics',
    question: 'Can I keep my blog on WordPress and sell on Shopify?',
    answer:
      'Yes. That is the first setup on this page. The blog stays on WordPress at the addresses Google already knows, and the store runs on Shopify at its own address. Nothing on the blog has to be redirected. The work is in matching the design on both sides and in tracking visitors across the two, so a sale is credited to the article that led to it.',
  },
  // ── Plugins and buy buttons ──────────────────────────────────────
  {
    category: 'plugin',
    question: 'Is there an official Shopify plugin for WordPress?',
    answer:
      'Yes. Shopify publishes a WordPress plugin and a matching sales channel called Sell on WordPress. The Shopify App Store lists the channel as free and launched on September 15, 2025. As listed on 8 Oct 2026 it had 4 reviews and a rating of 1.7 out of 5, so we test it on a copy of your site before it goes live.',
  },
  {
    category: 'plugin',
    question: 'Where do I download the Shopify plugin for WordPress?',
    answer:
      "From Shopify. Its help center links to a zip file on Shopify's own servers, which you upload on the Plugins page in WordPress. Be careful with names. The plugin at wordpress.org/plugins/shopify is a different one, called Shopify Importer and last updated 12 years ago. On 8 Oct 2026 the WordPress.org address given on Shopify's developer page led to a search results page.",
  },
  {
    category: 'plugin',
    question: 'What does the Shopify plugin need on my WordPress site?',
    answer:
      "Shopify lists WordPress 5.0 or higher and PHP 7.4 or higher. It also needs the Block Editor, known as Gutenberg, and the Site Editor. The Classic Editor is not supported. Shopify's developer page says the plugin is officially supported with the default block themes Twenty Twenty-Three, Twenty Twenty-Four and Twenty Twenty-Five, and that other themes may need customization.",
  },
  {
    category: 'plugin',
    question: 'How do I add a Shopify Buy Button to WordPress?',
    answer:
      'Create the button in the Buy Button sales channel in Shopify and copy its embed code. In WordPress, open the page or post, add a Custom HTML block and paste the code in. Shopify says embedded Buy Buttons work with self-hosted WordPress.org sites and with certain plans offered by WordPress.com.',
  },
  {
    category: 'plugin',
    question: 'Is the Shopify Buy Button free?',
    answer:
      'Shopify says the Buy Button sales channel is included in all Shopify subscription plans, and the Shopify App Store lists it as free. You still pay for the Shopify plan itself. As listed on 8 Oct 2026 the channel was rated 3.8 out of 5 from 194 reviews.',
  },
  {
    category: 'plugin',
    question: 'Does checkout happen on WordPress or on Shopify?',
    answer:
      "On Shopify. With a Buy Button you choose what a click does: add the product to a cart, go straight to checkout, or open the product details. You can also choose whether checkout opens in a new browser window. With Shopify's plugin, a theme called Sell on WordPress, installed in your Shopify admin, decides whether the buyer is sent to your WordPress site or to your Shopify storefront once they have paid.",
  },
  {
    category: 'plugin',
    question: 'Do product changes in Shopify show on my WordPress site?',
    answer:
      "Yes. Shopify's help center says that changes to products and collections in your Shopify admin, such as prices, images, descriptions or availability, sync automatically with your WordPress site when you use its plugin. For Buy Buttons, Shopify says any update to a product's details shows on that product's button.",
  },
  {
    category: 'plugin',
    question: 'Can I change how Shopify products look on my WordPress site?',
    answer:
      "Yes, with code. Shopify's plugin draws four parts: a product card, a quick view pop-up, a product detail page and a collection grid. Each can be replaced by adding a PHP file to a folder named Shopify inside your WordPress theme. Shopify labels this an advanced tutorial and suggests hiring a Shopify Partner. FactoryJet is a registered Shopify Partner, and this is work we do.",
  },
  {
    category: 'plugin',
    question: 'What is the best Shopify plugin for WordPress?',
    answer:
      "Start with Shopify's own plugin, because Shopify supports it and it costs nothing to try. It is new, so test it on a copy of your site first. Read any third-party plugin's listing before you install it. ShopWP's WordPress.org listing, for example, says its free version would stop working on March 1, 2024 and points users to a paid version.",
  },
  // ── Addresses and moving ─────────────────────────────────────────
  {
    category: 'moving',
    question: 'Should my Shopify store go on a subdomain?',
    answer:
      "When WordPress stays as the main site, yes. A subdomain such as shop.yourname.com is the arrangement Shopify's help center describes for running a store beside another website on the same root domain. Running one site inside a folder of the other, such as yourname.com/shop, is not covered in that guide. It needs a proxy in front of both sites, which we scope as custom work.",
  },
  {
    category: 'moving',
    question: 'Can I move my WordPress site to Shopify?',
    answer:
      "Yes. Shopify's migration guide says blogs and pages can be moved in bulk with a migration app or through its Blog and Page APIs, and products by CSV file or app. Web addresses change in the move, so each old address needs a redirect to its new one. Our WordPress to Shopify migration page covers that project in full.",
  },
  {
    category: 'moving',
    question: 'Will I lose Google rankings if I move content from WordPress to Shopify?',
    answer:
      "Redirects are what protect them. Google's site move guidance says 301 and other permanent redirects do not cause a loss in PageRank, and that redirects should be kept for at least a year. It also warns that pointing many old pages at one unrelated page, such as the home page, can be treated as a soft 404, which means Google reads the page as missing.",
  },
  {
    category: 'moving',
    question: 'What if my WordPress site already has a WooCommerce store?',
    answer:
      "Then moving to Shopify is a store-to-store move. Shopify publishes a WooCommerce migration guide that covers products, customers and order history. It notes that Shopify allows 3 product options, so a product with more than 3 needs an app or extra fields. Shopify's own Store Migration app is in early access and available to certain stores only.",
  },
  // ── Working with us ──────────────────────────────────────────────
  {
    category: 'working',
    question: 'How much does a WordPress and Shopify integration cost?',
    answer:
      "It depends on the setup. Shopify's plugin and its Buy Button channel are both listed as free on the Shopify App Store, and you pay for a Shopify plan. For build work, Shopify developers in the US and Canada typically charge $120 to $200 an hour, according to CartCoders' 2026 rate guide. FactoryJet quotes a fixed price in writing after a short scoping call.",
  },
  {
    category: 'working',
    question: 'How long does a WordPress and Shopify integration take?',
    answer:
      "The join itself is quick. A subdomain is one DNS record, and Shopify says its check can take a few minutes. Connecting Shopify's plugin is a token pasted into a settings page. The time goes into what surrounds it: matching the design on both sides, testing checkout, and moving content if you choose the third setup. The timeline goes in writing with the quote.",
  },
  {
    category: 'working',
    question: 'Do you work on the WordPress side as well as the Shopify side?',
    answer:
      'Yes. FactoryJet builds on both. One team handles the WordPress theme, the Shopify store and the join between them, so nothing falls between two vendors.',
  },
  {
    category: 'working',
    question: 'Can I see it working before I sign?',
    answer:
      'Yes. Before a contract, we show working software on your own data. For this kind of project that means one of your own products shown on a copy of your WordPress page, with a test checkout you can click through.',
  },
  {
    category: 'working',
    question: 'Which industries do you work with?',
    answer:
      'Any business with a WordPress site and something to sell: publishers, studios and clinics, makers and manufacturers, nonprofits, schools and clubs. FactoryJet was founded in 2014 and has served more than 500 businesses.',
  },
  {
    category: 'working',
    question: 'Is FactoryJet a Shopify Plus Partner?',
    answer:
      'No. FactoryJet is a registered Shopify Partner, without a Plus Partner tier. We do the engineering work itself. If your procurement team requires a Plus Partner badge, tell us on the first call.',
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

/* ── What each system keeps. The Shopify rows restate Shopify's own help pages
   and App Store listing. The two "both" rows are how FactoryJet sets it up. ── */
type Keeper = 'wordpress' | 'shopify' | 'both';

const KEEPER_LABEL: Record<Keeper, string> = {
  wordpress: 'WordPress keeps',
  shopify: 'Shopify keeps',
  both: 'Set up on both',
};

const KEEPS: ReadonlyArray<{ data: string; keeper: Keeper; note: string }> = [
  {
    data: 'Articles and landing pages',
    keeper: 'wordpress',
    note: 'They stay at the addresses Google already knows. In the first two setups nothing about them changes.',
  },
  {
    data: 'Product details and prices',
    keeper: 'shopify',
    note: "Entered once, in Shopify. With Shopify's plugin, a change to a price, image, description or availability shows on the WordPress page without anyone retyping it.",
  },
  {
    data: 'Stock',
    keeper: 'shopify',
    note: "One count, held in Shopify. Shopify's App Store listing says products, orders and inventory sync across both platforms.",
  },
  {
    data: 'Cart and checkout',
    keeper: 'shopify',
    note: "Payment happens on Shopify's checkout in all three setups, so card details are typed on Shopify's pages.",
  },
  {
    data: 'Orders and customers',
    keeper: 'shopify',
    note: "Shopify's help center says you manage the business in your Shopify admin. Buy Button orders are tracked there too.",
  },
  {
    data: 'Header, footer and menus',
    keeper: 'both',
    note: 'Built to match on both sides when there are two sites, so moving from an article to the store still looks like one website.',
  },
  {
    data: 'Visitor tracking',
    keeper: 'both',
    note: 'Google says that without cross-domain measurement, one person who visits two domains is counted as two users.',
  },
];

/* ── The three setups. Three cards, each tied to the pages it comes from.
   Bullets are deliberately uneven in shape and length. ── */
type Setup = {
  n: string;
  title: string;
  body: string;
  items: ReadonlyArray<string>;
  note: string;
  sources: ReadonlyArray<SrcKey>;
  span: string;
};

const SETUPS: ReadonlyArray<Setup> = [
  {
    n: '01',
    title: 'Two sites, two addresses',
    body: 'WordPress stays your main site. The Shopify store gets its own address, most often shop.yourname.com, and menu links join the two.',
    items: [
      "Shopify's help center describes this case: your root domain runs another website and a subdomain runs the Shopify store",
      "The join is one DNS record. DNS is the internet's address book, and a CNAME record is one line in it. Shopify says to point the subdomain's CNAME to shops.myshopify.com, with no A record needed",
      'Your WordPress addresses do not change, so nothing has to be redirected',
      'The header, footer, fonts and colors are built on both sides, so moving from an article to the store still looks like one website',
    ],
    note: "Google's Analytics help says that without cross-domain measurement, one person visiting two domains is counted as two users and two sessions. It recommends the same setup for subdomains, where self-referrals can appear. We configure it so a sale is credited to the article that earned it.",
    sources: ['helpSubdomain', 'gaCrossDomain'],
    span: 'lg:col-span-7',
  },
  {
    n: '02',
    title: 'Shopify products inside WordPress pages',
    body: "The buyer reads, chooses and adds to cart on your WordPress page. Payment happens on Shopify's checkout.",
    items: [
      "Shopify's own route is a pair: the Shopify plugin in WordPress and the Sell on WordPress sales channel in Shopify, joined by an access token",
      'Products and collections are added as blocks in the WordPress editor',
      'It needs WordPress 5.0 or higher, PHP 7.4 or higher and the Block Editor. The Classic Editor is not supported',
      'The older route is the Buy Button, a snippet of code from Shopify pasted into a Custom HTML block. Shopify says the Buy Button sales channel is included in all its subscription plans',
    ],
    note: "Shopify's developer page says the plugin is officially supported with the default block themes Twenty Twenty-Three, Twenty Twenty-Four and Twenty Twenty-Five, and that other themes may need customization. Changing how a product card looks means adding PHP files to your theme, which Shopify labels an advanced tutorial.",
    sources: ['helpSellOnWp', 'helpConnect', 'helpBuyButton', 'helpBuyButtonEmbed', 'devPlugin', 'helpAdvanced'],
    span: 'lg:col-span-5',
  },
  {
    n: '03',
    title: 'WordPress content moved into Shopify',
    body: 'One system. Pages and posts are rebuilt in Shopify, the domain is pointed at the store and WordPress is switched off.',
    items: [
      "Shopify's migration guide lists two bulk routes for blogs and for pages: a migration app, or its Blog and Page APIs. A product list can also go in by CSV file",
      'Shopify publishes migration guides for ten platforms. WooCommerce is on the list. WordPress without WooCommerce is not',
      "Addresses change. Shopify's own example is a shipping page moving from /policies/shipping-policy to /pages/shipping-policy, and its blog posts sit under /blogs/. Each old address needs a redirect",
      "A WordPress export is an XML file. WordPress.org's instructions for it describe importing it into another WordPress site, so carrying the content into Shopify takes an app or code",
    ],
    note: "Shopify allows up to 100,000 URL redirects on its standard plans, and only from an address that no longer loads a page. Google's guidance is to keep redirects for at least a year.",
    sources: ['helpMigrate', 'helpRedirects', 'devArticle', 'wpExport', 'googleSiteMove'],
    span: 'lg:col-span-12',
  },
];

/* ── Plugins and tools a US search for this term surfaces. Each line restates
   the maker's own listing as read on 2026-10-08. Nothing here was tested by us. ── */
const TOOLS: ReadonlyArray<{
  name: string;
  maker: string;
  fits: string;
  says: string;
  sources: ReadonlyArray<SrcKey>;
  span: string;
}> = [
  {
    name: 'Shopify plugin and Sell on WordPress channel',
    maker: 'Shopify',
    fits: 'Setup 02',
    says: "Shopify's own pair: a plugin in WordPress and a sales channel in Shopify. The App Store lists the channel as free, launched on September 15, 2025, and rated 1.7 out of 5 from 4 reviews. Shopify's page says the plugin is built by Shopify and is not associated with WordPress.",
    sources: ['appSellOnWp', 'shopifySellOnWp'],
    span: 'lg:col-span-7',
  },
  {
    name: 'Buy Button channel',
    maker: 'Shopify',
    fits: 'Setup 02',
    says: 'Makes embed code for one product or a whole collection. Listed as free, on the App Store since January 12, 2012, and rated 3.8 out of 5 from 194 reviews.',
    sources: ['appBuyButton', 'helpBuyButtonCreate'],
    span: 'lg:col-span-5',
  },
  {
    name: 'ShopWP',
    maker: 'an independent developer',
    fits: 'Setup 02',
    says: 'A third-party plugin. Its WordPress.org listing shows 700+ active installations and 4 out of 5 stars. The same listing says the free plugin would stop working on March 1, 2024 and tells users to upgrade to the paid ShopWP Pro.',
    sources: ['wporgShopwp'],
    span: 'lg:col-span-5',
  },
  {
    name: 'External Store for Shopify',
    maker: 'an independent developer',
    fits: 'Setup 02',
    says: 'A third-party plugin that shows Shopify products on a WordPress site through shortcodes, which are short tags typed into a page. Its WordPress.org listing shows 2,000+ active installations and 3.4 out of 5 stars.',
    sources: ['wporgExternalStore'],
    span: 'lg:col-span-7',
  },
  {
    name: 'Matrixify',
    maker: 'Matrixify',
    fits: 'Setup 03',
    says: 'For moving in. Its tutorial says it reads products, customers, orders, blog posts and pages straight from the WordPress and WooCommerce API, and generates redirects from the old WordPress links to the new Shopify links.',
    sources: ['matrixify'],
    span: 'lg:col-span-7',
  },
  {
    name: 'Shopify Importer',
    maker: 'an independent developer, not Shopify',
    fits: 'A name to check',
    says: "The plugin at wordpress.org/plugins/shopify is not Shopify's plugin. It is called Shopify Importer, its listing shows version 1.0 and a last update 12 years ago, and it copies a Shopify product file into WordPress posts.",
    sources: ['wporgImporter'],
    span: 'lg:col-span-5',
  },
];

/* ── Where these setups break. All eight come from the linked pages. ── */
const BREAKS: ReadonlyArray<{ t: string; b: string; sources: ReadonlyArray<SrcKey> }> = [
  {
    t: 'A WordPress site still on the Classic Editor',
    b: "Shopify's plugin supports only the Block Editor and the Site Editor. A site on the Classic Editor has to switch before the plugin can be used.",
    sources: ['helpAddProducts'],
  },
  {
    t: 'A theme outside the supported list',
    b: "Shopify's developer page names three default block themes as officially supported: Twenty Twenty-Three, Twenty Twenty-Four and Twenty Twenty-Five. It says other themes may need customization.",
    sources: ['devPlugin'],
  },
  {
    t: 'Shopify apps that do not show in a Buy Button',
    b: 'Shopify says Buy Buttons are not compatible with apps from the Shopify App Store. Its example is a product review app.',
    sources: ['helpBuyButtonFaq'],
  },
  {
    t: 'Styles on your site that hide the button',
    b: "CSS is the code that sets how a page looks. Shopify's troubleshooting guide says the CSS on your website can interfere with a Buy Button, and that a rule hiding iframes makes the button invisible.",
    sources: ['helpBuyButtonFaq'],
  },
  {
    t: 'Buyers sent to the wrong site once they have paid',
    b: "Connect an existing Shopify account and Shopify's Sell on WordPress theme is installed but not published, so customers are redirected to the Shopify storefront. It has to be published to send them to WordPress.",
    sources: ['helpCheckoutTraffic'],
  },
  {
    t: 'Disconnecting the plugin',
    b: 'Shopify says that when you disconnect, every product shown on your WordPress site is disconnected too, and customers can no longer view or buy them.',
    sources: ['helpConnect'],
  },
  {
    t: 'One visitor counted as two',
    b: 'Google says that without cross-domain measurement, a person who visits two domains is counted as two users and two sessions. For subdomains it warns of self-referrals, where your own site shows up as the source of the visit.',
    sources: ['gaCrossDomain'],
  },
  {
    t: 'Old addresses that still load a page',
    b: 'After a move into Shopify, a redirect works only from an address that no longer loads a page. Shopify also will not redirect its fixed paths, such as /products and /collections.',
    sources: ['helpRedirects'],
  },
];

/* ── Who this is for. Examples of the kinds of business the work suits, not a
   client list. Pictures were generated on 2026-10-08 and checked at full size. ── */
const INDUSTRIES: ReadonlyArray<{ img: string; alt: string; t: string; b: string }> = [
  {
    img: `${IMG}/content-studio.webp`,
    alt: 'A woman in a mustard cardigan writes in a notebook at a desk with a camera, an orange mug and a monitor showing grey blocks and one orange block',
    t: 'Publishers and content-led brands',
    b: 'Years of articles that rank in search. The store has to sit beside them without moving a single address.',
  },
  {
    img: `${IMG}/studio-front-desk.webp`,
    alt: 'A man in a grey t-shirt places a rolled teal exercise mat on a wooden shelf above a row of plain steel water bottles',
    t: 'Studios, clinics and service businesses',
    b: 'A booking site first, with a short list of products to sell. Product blocks inside existing pages are often enough.',
  },
  {
    img: `${IMG}/furniture-workshop.webp`,
    alt: 'A woman in a green apron sands the leg of an unfinished wooden chair in a workshop while two people work at benches behind her',
    t: 'Makers and manufacturers',
    b: 'A WordPress site that shows the range. Adding a cart lets a visitor order what they would otherwise have to ask about.',
  },
  {
    img: `${IMG}/community-hall-table.webp`,
    alt: 'A man in a white t-shirt folds a navy t-shirt beside a woman in a teal sweater stacking cream tote bags at a table in a community hall',
    t: 'Nonprofits, schools and clubs',
    b: 'A site kept up by staff and volunteers, with a small shop for merchandise. Orders and payments are handled in Shopify.',
  },
];

/* ── Process. Six steps, in the order we work. ── */
const PROCESS: ReadonlyArray<{ n: string; t: string; b: string }> = [
  {
    n: '01',
    t: 'List what the WordPress site does today',
    b: 'Pages, posts, forms, logins and plugins go on one list. Beside it goes a second list, of the addresses that bring visitors in from search.',
  },
  {
    n: '02',
    t: 'Choose the setup, in writing',
    b: 'One of the three, with the reason. If the smallest one does the job, that is the one we name.',
  },
  {
    n: '03',
    t: 'Build on a private copy',
    b: 'A staging site is a private copy of your website. The store, the product blocks or the moved content are built there, so your live site is not touched until you approve.',
  },
  {
    n: '04',
    t: 'Match the two sides',
    b: 'Header, footer, fonts and colors are made to match, so a buyer who moves from an article to the store sees one website.',
  },
  {
    n: '05',
    t: 'Test a purchase end to end',
    b: 'A sale, a refund and a discount code go through a test checkout, on a phone and on a desktop, before any real buyer sees it.',
  },
  {
    n: '06',
    t: 'Launch, check, stay on',
    b: 'After launch we check that old addresses land where they should and that orders are credited to the right page in your analytics. The same team stays on for support.',
  },
];

/* ── Comparison: the three setups side by side ── */
const COMPARE_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: '01 Two sites, two addresses' },
  { label: '02 Products inside WordPress pages' },
  { label: '03 Content moved into Shopify' },
];

const COMPARE_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'Where the buyer browses products',
    values: ['The Shopify store, on its own address', 'Your WordPress pages', 'The Shopify store, on your main address'],
  },
  {
    feature: 'Where the buyer pays',
    values: ['Shopify checkout', 'Shopify checkout', 'Shopify checkout'],
  },
  {
    feature: 'Your WordPress addresses',
    values: ['Do not change', 'Do not change', 'Each one needs a redirect to its new Shopify address'],
  },
  {
    feature: 'What you keep up to date',
    values: [
      'Two systems, each doing its own job',
      'Two systems, plus the plugin or embed code that joins them',
      'One system',
    ],
  },
  {
    feature: 'Shopify App Store apps on product pages',
    values: [
      'Work on the store as normal',
      'Not inside a Buy Button, Shopify says. Check each app against the plugin',
      'Work on the store as normal',
    ],
  },
  {
    feature: 'Right call when',
    values: [
      'WordPress brings the visitors and the range is big enough to need full store pages',
      'You sell a short list of products and the article is where the sale is made',
      'The store is the business and the WordPress site is small or out of date',
    ],
  },
];

const RELATED: ReadonlyArray<{ href: string; t: string; b: string }> = [
  { href: '/replatforming/wordpress-to-shopify', t: 'WordPress to Shopify migration', b: 'The third setup as a full project: content, redirects and launch.' },
  { href: '/services/shopify-development', t: 'Shopify development', b: 'The store itself, designed and built.' },
  { href: '/services/wordpress-development', t: 'WordPress development', b: 'Work on the WordPress side of the join.' },
  { href: '/replatforming/woocommerce-to-shopify', t: 'WooCommerce to Shopify migration', b: 'When the WordPress site already runs a WooCommerce store.' },
  { href: '/services/shopify-quickbooks-integration', t: 'Shopify QuickBooks integration', b: 'Stock, prices and books kept in step with the store.' },
  { href: '/headless-commerce', t: 'Headless commerce', b: 'Custom product pages on Shopify checkout, for when blocks are not enough.' },
];

/** Small inline source links. Same visual pattern as the QuickBooks page.
 *  Renders nothing when a claim is our own and has no source.
 *  py-1 makes each link 24.5px tall (16.5px of text plus 8px), which clears the
 *  24px tap-target check when links wrap onto stacked rows. */
function SourceLinks({ ids }: { ids: ReadonlyArray<SrcKey> }) {
  if (ids.length === 0) return null;
  return (
    <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-0">
      {ids.map((id) => (
        <a
          key={id}
          href={SRC[id].url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 py-1 font-fj-mono text-[11px] font-semibold tracking-wide text-[#B23E13] hover:underline"
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

export default function WordPressShopifyIntegrationPage() {
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
                    WORDPRESS SHOPIFY INTEGRATION &middot; UNITED STATES
                  </span>
                </div>

                <h1 className="font-fj-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-fj-ink sm:text-5xl lg:text-[3.2rem]">
                  WordPress Shopify integration, built around the site you already have.
                </h1>

                <p className="mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600">
                  Your WordPress site already brings people in. We add Shopify to it in the way that fits how you sell:
                  a store on its own address, products placed inside your WordPress pages, or your content moved into
                  Shopify. You get a fixed quote in writing before work starts.
                </p>

                <div className="mt-6">
                  <HeroInlineForm
                    region="us"
                    source="services_wordpress_shopify_integration_hero"
                    service="WordPress Shopify Integration"
                    submitLabel="Scope my setup"
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
                  <span>Platform facts checked {CHECKED_ON}</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <figure className="rounded-2xl border border-fj-neutral-200 bg-white p-5 sm:p-6">
                  <figcaption className="font-fj-mono text-[11px] font-bold uppercase tracking-wider text-[#B23E13]">
                    Three ways WordPress and Shopify fit together
                  </figcaption>
                  <ThreeSetupsDiagram />
                  <ul className="mt-4 grid gap-2 font-fj-body text-[13px] leading-snug text-fj-ink">
                    <li className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-[3px] h-3 w-3 flex-shrink-0 rounded-sm border-[1.5px] border-[#14110F] bg-white" />
                      Black outline: WordPress.
                    </li>
                    <li className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-[3px] h-3 w-3 flex-shrink-0 rounded-sm border-[1.5px] border-[#F05A28] bg-[#FFF4EE]" />
                      Orange: Shopify. The buyer pays there in all three.
                    </li>
                  </ul>
                  <p className="mt-3 font-fj-body text-[13px] leading-snug text-fj-neutral-600">
                    You need one of the three. Which one is agreed in writing before anything is built.
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
                Yes, Shopify works with WordPress, and there are three ways to set it up. In the first, WordPress stays
                your main site and the Shopify store sits on its own address, such as shop.yourname.com, with menu
                links joining the two. In the second, Shopify products and buy buttons are placed inside your WordPress
                pages and the buyer pays on Shopify&rsquo;s checkout. Shopify publishes a free plugin for this, and its
                older Buy Button can be pasted into a WordPress page or post. In the third, your WordPress pages and
                posts are moved into Shopify and WordPress is switched off. The right one depends on how much you sell
                and on how much of your traffic arrives through WordPress pages (as listed on {CHECKED_ON}).
              </p>
              <SourceLinks ids={['helpSellOnWp', 'helpBuyButton', 'helpSubdomain', 'helpMigrate']} />
            </div>
          </div>
        </section>

        {/* 3. WHAT EACH SYSTEM KEEPS */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">The first decision</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Decide what each system keeps before you pick a plugin.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  WordPress is built for publishing pages and articles. Shopify is built for selling: products, a cart,
                  a checkout and orders. Joining them works when each one keeps the job it is good at.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  The plugin comes second. First comes a short list of what lives where.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  In every setup on this page, the buyer pays on Shopify&rsquo;s checkout. What changes is where they
                  read about the product before that.
                </p>
                <SourceLinks ids={['helpSellOnWp', 'helpAddProducts', 'appSellOnWp', 'gaCrossDomain']} />
              </div>

              <ul className="grid gap-3 lg:col-span-8">
                {KEEPS.map((k) => (
                  <li
                    key={k.data}
                    className={`grid grid-cols-1 gap-2 rounded-2xl border bg-white px-5 py-4 sm:grid-cols-[190px_1fr] sm:gap-5 ${
                      k.keeper === 'shopify' ? 'border-[#F05A28]/45' : 'border-fj-neutral-200'
                    }`}
                  >
                    <div>
                      <div className="font-fj-display text-base font-semibold text-fj-ink">{k.data}</div>
                      <div
                        className={`mt-1 font-fj-mono text-[11px] font-bold uppercase tracking-wider ${
                          k.keeper === 'shopify' ? 'text-[#B23E13]' : 'text-fj-neutral-600'
                        }`}
                      >
                        {KEEPER_LABEL[k.keeper]}
                      </div>
                    </div>
                    <p className="font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{k.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 4. THE THREE SETUPS */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Three setups</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Three ways WordPress and Shopify fit together.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Two words cover most of what follows. A subdomain is a prefix added to your web address, such as
              shop.yourname.com. A plugin is an add-on installed in WordPress. If the store itself is still to be
              built, see{' '}
              <Link href="/services/shopify-development" className="font-semibold text-fj-ink underline underline-offset-4">
                Shopify development
              </Link>
              .
            </p>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
              {SETUPS.map((s) => (
                <div key={s.n} className={`rounded-2xl border border-fj-neutral-200 bg-fj-cream p-7 ${s.span}`}>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white font-fj-mono text-sm font-bold text-[#B23E13]">
                    {s.n}
                  </div>
                  <h3 className="font-fj-display text-xl font-semibold text-fj-ink">{s.title}</h3>
                  <p className="mt-2 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{s.body}</p>
                  <ul className="mt-4 grid gap-2">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                        <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 rounded-xl border border-fj-neutral-200 bg-white px-4 py-3 font-fj-body text-sm leading-relaxed text-fj-ink">
                    <span className="font-semibold">Worth knowing.</span> {s.note}
                  </p>
                  <SourceLinks ids={s.sources} />
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              The third setup is a project of its own. Our{' '}
              <Link
                href="/replatforming/wordpress-to-shopify"
                className="font-semibold text-fj-ink underline underline-offset-4"
              >
                WordPress to Shopify migration
              </Link>{' '}
              page covers the content move, the redirects and the launch.
            </p>
            <p className="mt-3 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
              Requirements, limits and guide contents are as listed on {CHECKED_ON}.
            </p>
          </div>
        </section>

        {/* 5. PLUGINS AND TOOLS */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">The plugins</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Six Shopify and WordPress tools, as their own listings describe them.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              These are names a US search for a Shopify WordPress plugin brings up. Each line restates the
              maker&rsquo;s own listing, as read on {CHECKED_ON}. We did not test these tools for this page. Read each
              listing for two things: who makes it, and when it was last updated.
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
              {TOOLS.map((c) => (
                <li key={c.name} className={`rounded-2xl border border-fj-neutral-200 bg-white p-6 ${c.span}`}>
                  <div className="font-fj-display text-lg font-semibold text-fj-ink">{c.name}</div>
                  <div className="mt-1 font-fj-mono text-[11px] font-bold uppercase tracking-wider text-fj-neutral-600">
                    Made by {c.maker} &middot; {c.fits}
                  </div>
                  <p className="mt-3 font-fj-body text-[15px] leading-relaxed text-fj-ink">{c.says}</p>
                  <SourceLinks ids={c.sources} />
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border-2 border-[#F05A28]/25 bg-white p-6 sm:p-8">
              <div className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                What we found on {CHECKED_ON}
              </div>
              <h3 className="mt-3 font-fj-display text-xl font-semibold text-fj-ink">
                Check where your copy of the Shopify plugin came from.
              </h3>
              <p className="mt-3 max-w-3xl font-fj-body text-[15px] leading-relaxed text-fj-ink">
                Shopify&rsquo;s developer page tells you to download the plugin from
                wordpress.org/plugins/shopify-plugin. When we opened that address it sent us to a WordPress.org search
                page, and WordPress.org&rsquo;s plugin lookup answered &ldquo;Plugin not found&rdquo; for it.
                Shopify&rsquo;s help center links to a zip file on Shopify&rsquo;s own servers. A different, older
                plugin sits one address away at wordpress.org/plugins/shopify. Download from Shopify&rsquo;s own page,
                and read the name before you click install.
              </p>
              <SourceLinks ids={['devPlugin', 'helpConnect', 'wporgImporter']} />
            </div>

            <p className="mt-8 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              If none of these fits, the product pages can be built to order. Shopify&rsquo;s help page says you are
              not limited to its own components and can use other methods to fetch and show product data. That route
              is{' '}
              <Link href="/headless-commerce" className="font-semibold text-fj-ink underline underline-offset-4">
                headless commerce
              </Link>
              .
            </p>
            <SourceLinks ids={['helpAdvanced']} />
          </div>
        </section>

        {/* 6. WHERE IT BREAKS */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">The traps</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Eight places a WordPress and Shopify setup breaks.
            </h2>
            <p className="mt-4 max-w-2xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Knowing these early saves a rebuild. All eight come straight from the linked pages.
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {BREAKS.map((l) => (
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
          headline="Tell us what your WordPress site does. We will name the setup."
          sub="Send your site address and what you want to sell. We reply with the lightest setup that does the job, and a fixed quote if there is work for us."
          label="Scope my setup"
        />

        {/* 7. WHO THIS IS FOR */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Who this is for</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Built for any business with a WordPress site and something to sell.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Your trade changes the details. The job is the same in each one. Keep the pages that bring people
                  in, and give those people a way to buy.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  If the work is mostly on the WordPress side, see{' '}
                  <Link
                    href="/services/wordpress-development"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    WordPress development
                  </Link>
                  .
                </p>
              </div>

              <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-8">
                {INDUSTRIES.map((ind) => (
                  <li key={ind.t} className="overflow-hidden rounded-2xl border border-fj-neutral-200 bg-fj-cream">
                    <img
                      src={ind.img}
                      alt={ind.alt}
                      width={1200}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[3/2] w-full object-cover"
                    />
                    <div className="p-5">
                      <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{ind.t}</h3>
                      <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{ind.b}</p>
                    </div>
                  </li>
                ))}
              </ul>
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
                  How we plan, build and test the join.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  The setup is agreed first, built on a copy of your site, then tested with a purchase. Before a
                  contract, we show working software on your own data. After launch,{' '}
                  <Link
                    href="/services/shopify-maintenance-services"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    Shopify maintenance and support
                  </Link>{' '}
                  keeps it current.
                </p>
                <img
                  src={`${IMG}/planning-the-setup.webp`}
                  alt="Two people at a desk look at a monitor showing three squares in a row, the middle one orange, while one points with a pencil"
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="mt-6 aspect-[3/2] w-full rounded-2xl border border-fj-neutral-200 object-cover"
                />
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

        {/* 9. COMPARISON: the three setups */}
        <ComparisonTable
          eyebrow="How the setups compare"
          headline="Two addresses, products in WordPress, or everything on Shopify."
          lead="Each setup is the right one for somebody. On the scoping call we say which we would choose for you and why, even when it is the smallest job of the three."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
          footer={`Platform facts are from Shopify's own pages as listed on ${CHECKED_ON}.`}
          scrollRegionLabel="Comparison of three ways to join WordPress and Shopify"
        />

        {/* 10. RELATED SERVICES */}
        <section className="border-y border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Next to this page</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Related WordPress and Shopify services.
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
                  Every requirement, rating, date and limit on this page was read from the pages listed here on that
                  day. Ratings and install counts move, so check the linked page before you act on one.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  What we did not do: install or test any of the plugins named above for this page.
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
          eyebrow="WordPress Shopify integration FAQ"
          headline="WordPress and Shopify questions, answered plainly."
          lead={`What owners and site managers ask before joining the two. Platform answers are from Shopify's, WordPress.org's and Google's own pages as listed on ${CHECKED_ON}.`}
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* 13. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="WordPress Shopify integration"
          headline="Keep the site that brings people in. Add a store they can buy from."
          sub="Tell us what your WordPress site does today and what you want to sell. We name the setup, build it on a copy of your site and stay on after launch."
          primaryCta={{ label: 'Scope my setup', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
          objectionHandler="Registered Shopify Partner. Fixed quote in writing before work starts. You own the code."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
