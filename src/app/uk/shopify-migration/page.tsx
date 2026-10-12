import type { Metadata } from 'next';
import styles from './visual-qa.module.css';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import '../ai-agents/ai-agents.css';

const CANONICAL = 'https://factoryjet.com/uk/shopify-migration';
const UPDATED = '2026-10-11';
const TITLE = 'Shopify Migration Service UK: Magento, WooCommerce | FactoryJet';
const DESCRIPTION =
  'Shopify migration for UK stores on Magento, WooCommerce, BigCommerce or a custom cart. Sourced UK price ranges, redirect limits and what will not carry over.';
const H1 = 'Shopify Migration for UK Stores: Magento, WooCommerce, BigCommerce and Custom Carts';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD, so the
   schema can never describe a trail a human cannot see. Never hand-copy a
   second list here. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'Shopify Migration', url: CANONICAL },
];

/* ─── External sources. Every one was opened and read on 2026-10-11, and the
       supporting words are logged in the page ledger (sources.json). ─────── */
// Shopify Help Centre, "Migrate to Shopify": eleven steps; five ways to move content; import
// products, then customers, then past orders; orders have no CSV route; staff get a new order
// email for every imported order; ten platform guides listed, WooCommerce among them.
const SRC_MIGRATE = 'https://help.shopify.com/en/manual/migrating-to-shopify';
// Shopify Help Centre, importing customers: passwords are encrypted outside Shopify and cannot
// be migrated with a CSV; customer CSV files are limited to 15 MB; marketing columns are yes or no.
const SRC_CUSTOMER_IMPORT = 'https://help.shopify.com/en/manual/customers/import-export-customers';
// Shopify Help Centre, customer accounts: sign in with an email address and a one-time 6-digit code.
const SRC_CUSTOMER_ACCOUNTS = 'https://help.shopify.com/en/manual/customers/customer-accounts';
// Shopify Help Centre, upgrading customer accounts: legacy customer accounts are deprecated.
const SRC_ACCOUNTS_UPGRADE = 'https://help.shopify.com/en/manual/customers/customer-accounts/upgrade';
// Shopify developer documentation: Multipass is no longer available to new stores.
const SRC_MULTIPASS = 'https://shopify.dev/docs/api/customer-authentication/multipass';
// Shopify Help Centre, URL redirects: 100,000 redirects, 20,000,000 on Plus; blocked prefixes and
// fixed paths; only broken URLs can be redirected.
const SRC_REDIRECTS = 'https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect';
// Shopify Help Centre, adding variants: up to 2,048 variants and three options per product.
const SRC_VARIANTS = 'https://help.shopify.com/en/manual/products/variants/add-variants';
// Shopify Help Centre, Plus launch checklist: import 2 to 5 years of orders; gift cards right
// before launch and not editable afterwards; subscriptions need Shopify Payments, Authorize.net or
// Stripe; TTL to 300 about a week before launch; companies imported in bulk with Matrixify;
// LitExtension and Cart2Cart named as migration services.
const SRC_PLUS_CHECKLIST = 'https://help.shopify.com/en/manual/intro-to-shopify/plus-launch-checklist';
// Shopify Help Centre, WooCommerce guide: Store Migration app is in early access; WooCommerce
// reviews cannot be exported or migrated and need a third-party app.
const SRC_WOO_GUIDE = 'https://help.shopify.com/en/manual/migrating-to-shopify/migrating-from-woocommerce';
// Shopify App Store listing for Shopify's own Store Migration app (free).
const SRC_STORE_MIGRATION_APP = 'https://apps.shopify.com/store-migration';
// Shopify Help Centre, B2B: trade customers are set up as companies.
const SRC_B2B = 'https://help.shopify.com/en/manual/b2b';
// Shopify Help Centre, UK taxes: Basic Tax only for stores collecting UK tax before 13 May 2026;
// Shopify can charge tax but cannot file or remit it.
const SRC_UK_TAX = 'https://help.shopify.com/en/manual/taxes/uk';
// Shopify Help Centre, Royal Mail and DPD labels: UK fulfilment location needed; Royal Mail is
// domestic only; DPD is drop-off only; no Great Britain to Northern Ireland labels since 1 May 2025.
const SRC_ROYAL_MAIL =
  'https://help.shopify.com/en/manual/fulfillment/fulfilling-orders/shipping-labels/shipping-carriers/royal-mail';
const SRC_DPD =
  'https://help.shopify.com/en/manual/fulfillment/fulfilling-orders/shipping-labels/shipping-carriers/dpd';
// Shopify Help Centre, Klarna: the United Kingdom is on the list of Shopify Payments countries.
const SRC_KLARNA =
  'https://help.shopify.com/en/manual/payments/shopify-payments/local-payment-methods/klarna';
// Clearpay UK retailer page: Shopify shown among its e-commerce platform integrations.
const SRC_CLEARPAY = 'https://www.clearpay.co.uk/en-GB/for-retailers';
// Xero App Store UK: "Shopify, by Xero" syncs sales, payouts, fees and taxes into Xero.
const SRC_XERO = 'https://apps.xero.com/uk/app/shopify';
// GOV.UK: keep VAT records at least 6 years (10 under the VAT One Stop Shop); software must be
// linked digitally, with no copy and paste between packages.
const SRC_VAT_RECORDS = 'https://www.gov.uk/charge-reclaim-record-vat/keeping-vat-records';
// Adobe Commerce lifecycle policy, last updated 18 September 2026: end of support dates by version.
const SRC_ADOBE_LIFECYCLE =
  'https://experienceleague.adobe.com/en/docs/commerce-operations/release/planning/lifecycle-policy';
// Adobe Commerce documentation: each variation of a configurable product is a separate simple product.
const SRC_ADOBE_CONFIGURABLE =
  'https://experienceleague.adobe.com/en/docs/commerce-admin/catalog/products/types/product-create-configurable';
// Adobe Commerce documentation: customer groups set discounts and tax class.
const SRC_ADOBE_GROUPS = 'https://experienceleague.adobe.com/en/docs/commerce-admin/customers/customer-groups';
// WooCommerce documentation: permalink settings, including Shop base and the product-category base.
const SRC_WOO_PERMALINKS = 'https://woocommerce.com/document/permalinks/';
// BigCommerce documentation: price lists hold variant-level prices assigned to customer groups.
const SRC_BC_PRICE_LISTS =
  'https://docs.bigcommerce.com/developer/docs/admin/catalog-and-inventory/pricing/price-lists';
// Google Search Central, moving a site with URL changes: expect ranking fluctuation; a few weeks or
// more for medium-sized sites; keep redirects at least 1 year.
const SRC_GOOGLE_MOVE =
  'https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes';
// Five UK agencies that publish migration price ranges on their own sites.
const SRC_BIGEYEDEERS = 'https://www.bigeyedeers.co.uk/shopify-migration-cost-uk/';
const SRC_CHILLI = 'https://www.chillicommerce.co.uk/magento-to-shopify-migration';
const SRC_WEBDIGITA =
  'https://webdigita.co.uk/blog/top-ecommerce-migration-agencies-uk-how-to-choose-and-what-it-costs/';
const SRC_AGORA = 'https://www.agorastudio.co.uk/pages/magento-to-shopify-migration-cost';
const SRC_NO7 = 'https://no7software.co.uk/magento-to-shopify';

/* ─── Migration steps: ONE array drives the numbered list AND the ItemList schema ─── */
const MIGRATION_STEPS: { n: string; t: string; d: string }[] = [
  {
    n: '01',
    t: 'Audit the store you have',
    d: 'We crawl every live address, export a sample of products, customers and orders, and list each extension, plugin, integration and scheduled job. You get that list in writing, with anything that has no direct Shopify match marked.',
  },
  {
    n: '02',
    t: 'Decide what each piece becomes',
    d: 'Every behaviour gets one of five homes on Shopify: a built-in feature, an app, a Shopify Function (custom code that runs inside Shopify to change how discounts, shipping or payments behave), custom code, or the bin. A move is a good moment to drop what nobody uses.',
  },
  {
    n: '03',
    t: 'Draw the redirect map',
    d: 'Each old product, category and content address is matched to its new Shopify address. We check the list against the address patterns Shopify refuses to redirect before anyone builds a theme, because a blocked pattern changes the plan.',
  },
  {
    n: '04',
    t: 'Move the data in the order Shopify sets',
    d: 'Products go first, then customers, then past orders, so each order attaches to the right product and person. We run the import more than once on a test store and compare counts and samples with the old store each time.',
  },
  {
    n: '05',
    t: 'Rebuild the theme and the rules',
    d: 'The shop front is rebuilt as a Shopify theme. Trade pricing, discount rules and delivery rules are rebuilt with Shopify’s own features where they exist and with custom code where they do not.',
  },
  {
    n: '06',
    t: 'Reconnect payments, couriers, tax and accounts',
    d: 'Card payments, pay-later options, courier labels, VAT settings and the link to your accounts software all belong to the old store. Each one is set up again on the new store and tested.',
  },
  {
    n: '07',
    t: 'Test with real orders',
    d: 'Shopify’s launch checklist says to test different payment methods and different delivery addresses, with attention to how tax is worked out. We place those orders, refund some of them, and follow each one through to your accounts.',
  },
  {
    n: '08',
    t: 'Switch over',
    d: 'About a week before launch the domain’s TTL (how long the internet remembers where your site lives) is lowered to 300, as Shopify advises, so the change spreads quickly. Gift cards move last. Shopify also suggests turning off checkout on the old store while the change spreads, so no order lands in the wrong place.',
  },
  {
    n: '09',
    t: 'Watch the first weeks',
    d: 'We check that every redirect works, fix any broken address and send the new sitemap to Google. Google’s own guide puts the switch to new addresses at a few weeks or more for a medium-sized site, so we keep watching until it settles.',
  },
];

/* ─── Published UK price ranges. Each row is that firm’s own figure, read on its
       own page on 2026-10-11. Market figures only: no FactoryJet price here. ─── */
const PRICE_ROWS: { firm: string; url: string; job: string; range: string; time: string }[] = [
  { firm: 'Big Eye Deers', url: SRC_BIGEYEDEERS, job: 'Standard Magento migration with moderate integrations and a few thousand SKUs', range: '£3,000 to £6,000', time: 'Not stated' },
  { firm: 'Webdigita', url: SRC_WEBDIGITA, job: 'Standard WooCommerce to Shopify, under 2,000 SKUs, no subscriptions', range: '£8,000 to £18,500', time: '8 to 16 weeks' },
  { firm: 'Webdigita', url: SRC_WEBDIGITA, job: 'Standard Magento 2 to Shopify, no custom extensions', range: '£15,000 to £30,000', time: '12 to 20 weeks' },
  { firm: 'Chilli Commerce', url: SRC_CHILLI, job: 'Magento to Shopify for a medium-sized store, with theme rebuild, integrations and testing', range: '£15,000 to £35,000', time: '6 to 12 weeks' },
  { firm: 'Agora Studio', url: SRC_AGORA, job: 'What it says UK agencies typically quote for Magento to Shopify', range: '£15,000 to £60,000', time: '3 to 6 months' },
  { firm: 'No7 Software', url: SRC_NO7, job: 'Standard catalogue migration with theme rebuild and core integrations', range: '£25,000 to £70,000', time: '8 to 16 weeks' },
  { firm: 'Webdigita', url: SRC_WEBDIGITA, job: 'Magento with custom extensions and an ERP, moving to Shopify Plus', range: '£30,000 to £60,000', time: '4 to 6 months' },
  { firm: 'Webdigita', url: SRC_WEBDIGITA, job: 'Enterprise Adobe Commerce, several stores and B2B, moving to Shopify Plus', range: '£60,000 to £150,000 or more', time: '6 to 12 months' },
  { firm: 'No7 Software', url: SRC_NO7, job: 'Large Adobe Commerce store with B2B, heavy customisation and several integrations', range: '£70,000 to £200,000', time: '12 to 20 weeks' },
];

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'cost',      label: 'Who does it and what it costs' },
  { key: 'data',      label: 'Data, accounts and passwords' },
  { key: 'seo',       label: 'Redirects and Google' },
  { key: 'platforms', label: 'Magento, WooCommerce and BigCommerce' },
  { key: 'uk',        label: 'VAT, couriers and payments' },
  { key: 'process',   label: 'Timing and working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── Who does it and what it costs ──
  {
    category: 'cost',
    question: 'Who can migrate my Magento store to Shopify in the UK, and how much does it cost?',
    answer: 'FactoryJet migrates Magento and Adobe Commerce stores to Shopify and Shopify Plus for UK brands. Other firms that publish a Magento to Shopify service for UK stores include Imaginaire, Chilli Commerce, No7 Software and Agora Studio. Published prices vary with what is included: Big Eye Deers puts a standard Magento migration at £3,000 to £6,000, Chilli Commerce puts a medium-sized store at £15,000 to £35,000, and No7 Software puts a standard catalogue with a theme rebuild at £25,000 to £70,000. We quote a fixed price in writing after a short scoping call.',
  },
  {
    category: 'cost',
    question: 'How much does it cost to migrate to Shopify in the UK?',
    answer: 'The platform you are leaving and the amount of rebuilding set the figure. For UK projects, Webdigita publishes £8,000 to £18,500 for a standard WooCommerce to Shopify move under 2,000 SKUs, and £15,000 to £30,000 for a standard Magento 2 move. Big Eye Deers publishes a wider budget of £2,000 to £15,000 across small to complex agency migrations. These are those firms’ own figures, read on 11 October 2026. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'cost',
    question: 'How much does it cost to migrate from Magento to Shopify in the UK?',
    answer: 'Published UK figures rise with complexity. Webdigita lists £15,000 to £30,000 for a standard Magento 2 store with no custom extensions, £30,000 to £60,000 for Magento with custom extensions and an ERP moving to Shopify Plus, and £60,000 to £150,000 or more for enterprise Adobe Commerce with several stores and B2B. Agora Studio says UK agencies typically quote £15,000 to £60,000. Four things move the figure: the shape of the catalogue, custom extensions, integrations, and how much of the theme is rebuilt.',
  },
  {
    category: 'cost',
    question: 'Why do UK agencies quote such different prices for the same migration?',
    answer: 'Because one name covers different amounts of work. On 11 October 2026 we read five UK agencies’ price pages. For a standard Magento move, Big Eye Deers publishes £3,000 to £6,000 and No7 Software publishes £25,000 to £70,000, a gap of about 23 times from the bottom of one to the top of the other. The pages do not all say what is included. No7 Software’s figure names a theme rebuild and core integrations. Ask each bidder to list what is inside the price.',
  },

  // ── Data, accounts and passwords ──
  {
    category: 'data',
    question: 'Do customer passwords carry over when I move to Shopify?',
    answer: 'No. Shopify’s help page on importing customers says passwords are encrypted outside Shopify and cannot be migrated from another store with a customer file. Customer records, addresses and marketing choices do move. On Shopify’s current customer accounts nobody needs a password: a customer enters their email address and receives a one-time six-digit code. We plan a short email before launch so customers know how to sign in.',
  },
  {
    category: 'data',
    question: 'Can Multipass keep my customers logged in after a migration?',
    answer: 'Not on a new store. Multipass was a Shopify Plus feature that let customers who were signed in on another site reach the Shopify store without signing in again. Shopify’s developer documentation, read on 11 October 2026, says Multipass is no longer available to new stores and points new builds to a third-party identity provider. Stores that already use it keep it. A store created for a migration today is a new store.',
  },
  {
    category: 'data',
    question: 'Can I migrate my order history to Shopify?',
    answer: 'Yes, but a spreadsheet will not do it. Shopify’s migration guide gives two routes for past orders, a migration app or its Order API, and no CSV option. Its Plus launch checklist recommends importing the past two to five years, and at least every order still inside your returns window. Orders go in after products and customers so each one links to the right records. Turn off new-order emails to staff first, because every imported order sends one.',
  },
  {
    category: 'data',
    question: 'Is there a Shopify migration app, and is it enough on its own?',
    answer: 'Yes. Store Migration is Shopify’s own free app, and Shopify’s WooCommerce guide says it can import WooCommerce products but is in early access for certain stores. Shopify’s Plus checklist also names the third-party services LitExtension and Cart2Cart, and the Matrixify app for bulk imports. Apps move data. They do not rebuild a theme, custom rules, integrations or the redirect map, and on a store of any size that is most of the project.',
  },
  {
    category: 'data',
    question: 'What is Shopify migration?',
    answer: 'A Shopify migration is the move of an online store from another platform to Shopify. It covers the data (products, customers, past orders, gift cards, blog posts and pages), the shop front design, the rules for pricing and delivery, the connections to payment, courier and accounts systems, and a redirect from every old address to its new one. Shopify’s own guide sets it out as eleven steps, from importing data to setting up the domain and search.',
  },
  {
    category: 'data',
    question: 'What cannot be moved to Shopify?',
    answer: 'Four things, according to Shopify’s own pages. Customer passwords cannot be imported. Reviews cannot be exported from WooCommerce to Shopify and need a third-party reviews app. Gift cards can be imported but cannot be edited or deleted afterwards, so they move right before launch. Some old addresses cannot be redirected, including any that begin with /shop, /cart, /services or /apps. Custom extension code does not move either: the behaviour is rebuilt on Shopify.',
  },

  // ── Redirects and Google ──
  {
    category: 'seo',
    question: 'Will moving to Shopify hurt my Google rankings?',
    answer: 'Expect some movement while Google re-reads the site. Google’s guide to moving a site warns of temporary ranking swings, and puts the switch to new addresses at a few weeks or more for a medium-sized site. Shopify’s launch checklist says 301 redirects are needed or old links become dead links. Google also says to keep redirects for at least a year. The redirect map is a named deliverable in our projects, and we check it after launch.',
  },
  {
    category: 'seo',
    question: 'How many redirects can a Shopify store have?',
    answer: 'Shopify’s Help Centre says a store can hold up to 100,000 URL redirects, or 20,000,000 on the Shopify Plus plan. Redirects can be created one at a time or imported from a CSV file. A store with a few thousand products sits far inside the lower limit. A large catalogue with years of discontinued products, filtered category addresses and several store views can pass it, so we count the addresses during the audit before recommending a plan.',
  },
  {
    category: 'seo',
    question: 'Which URLs can Shopify not redirect?',
    answer: 'Shopify will not redirect addresses that begin with /apps, /application, /cart, /carts, /orders, /services or /shop, or its own fixed paths /products, /collections and /collections/all. It also redirects only addresses that are broken, so an old address that still loads a page is ignored. WooCommerce stores using the Shop base permalink setting have every product under /shop/, which falls inside the blocked list and needs a separate plan.',
  },

  // ── Magento, WooCommerce and BigCommerce ──
  {
    category: 'platforms',
    question: 'Is Magento end of life in 2026?',
    answer: 'Not as a whole, but older versions are. Adobe’s lifecycle page, last updated 18 September 2026, gives each Adobe Commerce version three years of standard support. Version 2.4.9 is supported until 31 May 2029. Version 2.4.6 left standard support on 11 August 2026, and 2.4.4 and 2.4.5 are past both standard and extended support. Adobe also says it does not fix third-party software such as PHP and MySQL when those reach end of life.',
  },
  {
    category: 'platforms',
    question: 'What are the key differences between Magento and Shopify?',
    answer: 'Two show up in every migration. Products: Adobe says each variation of a configurable product is a separate simple product with its own SKU, while Shopify holds one product with up to 2,048 variants across three options. Trade pricing: Magento uses customer groups and tier prices, while Shopify B2B sets each trade customer up as a company. Adobe also supports each version for a fixed window, so the software itself has to be upgraded on a schedule.',
  },
  {
    category: 'platforms',
    question: 'Can I move from WooCommerce to Shopify without losing my search traffic?',
    answer: 'That depends on matching every old address to a new one before launch. WooCommerce’s default category addresses use /product-category/ and its product addresses depend on a permalink setting, so the map starts with a crawl of the live site. One setting, Shop base, puts products under /shop/, which Shopify’s redirect tool refuses, so that case needs its own plan. Shopify also says WooCommerce reviews cannot be migrated directly and need a third-party app.',
  },
  {
    category: 'platforms',
    question: 'Can you move a BigCommerce store to Shopify?',
    answer: 'Yes. BigCommerce’s documentation describes price lists that hold prices at variant level and are assigned to customer groups. On Shopify, those trade prices become catalogues attached to companies. Shopify’s Help Centre lists ten platform migration guides and BigCommerce is not among them, so the general guide applies and the mapping is planned by hand. The steps after that are the same as any other move: redirects, theme, rules, connections and testing.',
  },
  {
    category: 'platforms',
    question: 'Can you migrate a custom-built cart to Shopify?',
    answer: 'Yes. A custom cart usually has no export tool and no migration app that understands it. Shopify’s guide lists this route as the most technical of its five options: a custom migration built on the Shopify API. We read the old database directly, write scripts that load products, then customers, then orders, and run them against a test store until the counts and samples match the live site.',
  },
  {
    category: 'platforms',
    question: 'Should I move to Shopify or Shopify Plus?',
    answer: 'Start from what the store needs. Shopify’s Help Centre gives two differences that show up in migrations: a Plus store can hold 20,000,000 redirects against 100,000, and the daily cap on uploading new variants once a store passes 500,000 variants does not apply on Plus. Trade selling, checkout changes and several stores are the other usual reasons. Our UK Shopify Plus page covers when Plus is worth it and when standard Shopify is enough.',
  },
  {
    category: 'platforms',
    question: 'Should I stay on Magento or WooCommerce instead of moving?',
    answer: 'Sometimes staying is the better call. If your Adobe Commerce version is still inside standard support, your custom logic runs deep and your team knows the platform, a move may cost more than it returns. FactoryJet also builds and supports Magento and WooCommerce stores, so the review covers both answers. The usual reasons to move are a version that has left support and extension upgrades that keep breaking.',
  },

  // ── VAT, couriers and payments ──
  {
    category: 'uk',
    question: 'Does HMRC check Shopify, and what does that mean for a migration?',
    answer: 'HMRC checks your records, whichever platform holds them. GOV.UK says HMRC may check your records to make sure you are paying the right amount of tax, and that VAT records must be kept for at least six years. Shopify says it can charge tax automatically but cannot file or pay it for you. In a migration that means two jobs: set the VAT rules up again on the new store, and keep the old store’s order and invoice records readable.',
  },
  {
    category: 'uk',
    question: 'How does VAT set-up change when I move to Shopify?',
    answer: 'Tax is configured on the new store, not imported: it is step five of Shopify’s own guide. Shopify’s UK tax page says its Basic Tax service is only available to stores that were collecting UK tax before 13 May 2026, so a store created now uses Shopify Tax or manual tax settings. The same page says a UK business selling to EU countries needs to register for VAT with their tax authorities. Your accountant sets the treatment. We build and test the store against it.',
  },
  {
    category: 'uk',
    question: 'Do Royal Mail and DPD work with Shopify?',
    answer: 'Yes. Shopify’s Help Centre says a store with a UK fulfilment location can buy Royal Mail and DPD labels inside Shopify, at rates from Shopify’s own accounts with those carriers. Royal Mail through Shopify covers UK destinations only, and DPD parcels are dropped off because collections are not offered. Since 1 May 2025, labels from Great Britain to Northern Ireland cannot be bought this way. Stores with their own carrier contracts connect those accounts through a shipping app.',
  },
  {
    category: 'uk',
    question: 'Can I keep Klarna and Clearpay after moving to Shopify?',
    answer: 'Yes, though both are set up again on the new store. Shopify’s Help Centre lists the United Kingdom among the countries where Klarna can be switched on through Shopify Payments. Clearpay’s UK retailer page shows Shopify among the e-commerce platforms it connects to. Neither connection copies over from Magento or WooCommerce, so each is added to the new checkout and tested with a real order and a refund before launch.',
  },
  {
    category: 'uk',
    question: 'Will Xero or Sage still receive my sales after the move?',
    answer: 'Only once the link is rebuilt, because the old connector belongs to the old platform. Xero publishes its own Shopify integration, which it says syncs sales, payouts, fees and taxes into Xero. For Sage, the audit records how orders, refunds and payouts arrive today so the same figures keep arriving. GOV.UK’s VAT rules say software holding digital records must be linked digitally, so retyping or copying figures across is not an option.',
  },

  // ── Timing and working with us ──
  {
    category: 'process',
    question: 'How long does a move to Shopify take?',
    answer: 'A FactoryJet store build that includes a migration takes 5 to 8 weeks, and a headless or custom build takes 8 to 14 weeks. Published UK timelines vary: Chilli Commerce gives 6 to 12 weeks for most medium-sized stores, Webdigita gives 8 to 16 weeks for a standard WooCommerce move, and Agora Studio says UK agencies typically take 3 to 6 months for Magento. Custom integrations, the shape of the catalogue and internal sign-off are what stretch a timeline.',
  },
  {
    category: 'process',
    question: 'Will my store go offline during the migration?',
    answer: 'The new store is built and tested beside the live one, so the old store keeps trading until the switch. The switch itself is a domain change. Shopify’s launch checklist advises lowering the domain’s TTL to 300 about a week before, so the change spreads quickly, and suggests turning off checkout on the old store while it spreads so no order lands in the wrong place. We pick a quiet trading hour for it.',
  },
  {
    category: 'process',
    question: 'Can we see something working before we sign?',
    answer: 'Yes. We show working software on your own data before a contract. Ask for it on the scoping call. Clicking through your own products and categories in a test store is a better basis for choosing an agency than a slide deck, and it is a fair thing to ask of every firm you are comparing.',
  },
  {
    category: 'process',
    question: 'Who owns the store and the code after the migration?',
    answer: 'You do. You own the Shopify store, the theme code and every login for the store and the systems connected to it. Your data stays in your own accounts, and FactoryJet works inside them at your invitation. If you ever change agency, nothing has to be handed back, because nothing was held.',
  },
  {
    category: 'process',
    question: 'Do you support the store after launch?',
    answer: 'Yes. FactoryJet designs, builds, implements and supports, and the support is quoted the same way as the build: a fixed price in writing after a short scoping call. After a migration that covers fixes and changes to the theme, watching the redirects and connections through the first weeks, and new features as the store grows.',
  },
];

/* ─── JSON-LD ────────────────────────────────────────────────────────
   The Organization is defined once, sitewide. This page only references
   it by @id and never redefines name, logo, address or sameAs. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Shopify Migration for UK Stores',
      serviceType: 'Migration to Shopify and Shopify Plus from Magento, Adobe Commerce, WooCommerce, BigCommerce and custom carts, including data migration, redirect mapping, theme rebuild, custom rules, reconnecting payment, courier, tax and accounts systems, and support after launch',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'Shopify migration for UK stores. FactoryJet moves stores from Magento, Adobe Commerce, WooCommerce, BigCommerce and custom carts to Shopify and Shopify Plus: products, customers and order history, redirects from every old address, a rebuilt theme and rules, VAT, courier, pay-later and accounts connections, and support after launch.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: c.url,
      })),
    },
    {
      '@type': ['WebPage', 'Article'],
      '@id': CANONICAL,
      url: CANONICAL,
      name: TITLE,
      headline: H1,
      description: DESCRIPTION,
      inLanguage: 'en-GB',
      datePublished: '2026-10-11',
      dateModified: UPDATED,
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        jobTitle: 'Founder & CEO',
        url: 'https://factoryjet.com/about',
        sameAs: [
          'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
          'https://github.com/factoryjet-tech',
        ],
      },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
      about: { '@id': `${CANONICAL}#service` },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['[data-speakable="true"]'] },
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#steps`,
      name: 'Shopify migration steps',
      itemListElement: MIGRATION_STEPS.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: s.t,
      })),
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: FAQ_ITEMS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL, languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: TITLE,
    description:
      'Moving a UK store to Shopify or Shopify Plus from Magento, Adobe Commerce, WooCommerce, BigCommerce or a custom cart: what moves, what does not, the redirect limits Shopify sets, and UK price ranges from five agencies.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/shopify-migration/shopify-migration-og.webp', width: 1200, height: 630, alt: 'A woman with a clipboard and a man holding a cream jug check stock at a table in a bright stockroom' }],
  },
  robots: { index: true, follow: true },
};

export default function ShopifyMigrationUKPage() {
  return (
    <>
      <script id="ld-uk-shopify-migration" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="uk-aiagents">
      <main className={styles.page}>

        <Breadcrumbs items={crumbs} />

        {/* ═══ 1. HERO ═══ */}
        <section className={`sec-lg dot-grid ${styles.hero}`} style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div className={styles.heroCopy}>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />UK Shopify Migration</span>
                  <span className="chip">Magento &amp; WooCommerce</span>
                  <span className="chip">Data &amp; Redirects</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet moves UK online stores to Shopify and Shopify Plus from Magento and Adobe Commerce,
                  WooCommerce, BigCommerce and custom-built carts. We move the products, customers and order
                  history, rebuild the rules your store depends on, reconnect payments and couriers, and match
                  every old address to a new one so Google and your customers land in the right place. Then we
                  stay on and support the store.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />11 October 2026</div>
                </div>

                <div className={styles.heroForm} style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_shopify_migration_hero" submitLabel="Get my free migration review" />
                </div>
                
              </div>

              <div>
                <div className="card" style={{ padding: 8 }}>
                  <img src="/images/uk/shopify-migration/shopify-migration-hero.webp" width={1400} height={933} fetchPriority="high" decoding="async" alt="A woman with a clipboard and a man holding a cream jug check stock at a wooden table in a bright stockroom with shelves of plain boxes" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                </div>
                <div className="card card-top-orange mt-6">
                  <span className="eyebrow">What moves and what does not</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Products, variants and images</div><div className="scorecard-note">by file, app or API</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Moves</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Customers and past orders</div><div className="scorecard-note">orders need an app or the API</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Moves</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Customer passwords</div><div className="scorecard-note">customers sign in with an emailed code</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Stay behind</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Old page addresses</div><div className="scorecard-note">each one pointed at its new home</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Redirected</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Store, theme code and logins</div><div className="scorecard-note">held in your own accounts</div></div>
                    <div className="scorecard-val" style={{ color: 'var(--green)', fontSize: 15 }}>Yours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. ANSWER-FIRST (GEO) ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">Who can migrate a Magento store to Shopify in the UK, and what does it cost?</span>
              <p>
                FactoryJet moves UK stores from Magento, Adobe Commerce, WooCommerce, BigCommerce and custom carts
                to Shopify and Shopify Plus. For a standard Magento move,{' '}
                <a href={SRC_BIGEYEDEERS} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>Big Eye Deers</a>{' '}
                publishes £3,000 to £6,000 and{' '}
                <a href={SRC_NO7} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>No7 Software</a>{' '}
                publishes £25,000 to £70,000, because each includes different work. We quote a fixed price in
                writing after a short scoping call.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Do customer passwords carry over to Shopify?</span>
              <p>
                No.{' '}
                <a href={SRC_CUSTOMER_IMPORT} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>Shopify’s Help Centre</a>{' '}
                says passwords cannot be migrated from another store with a customer import. On Shopify’s
                current customer accounts nobody needs one: a customer types their email address and gets a
                one-time six-digit code. Their profile, addresses and imported orders are there when they sign
                in.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              We wrote this page after reading Shopify’s own migration pages and five UK agencies’ price pages on
              11 October 2026. Two findings shape the rest of it. Published prices for what these agencies call a
              standard Magento move differ by a factor of about 23 from the lowest figure to the highest. And
              Shopify’s redirect tool refuses
              several kinds of address, including the /shop/ product addresses that one WooCommerce setting
              produces. Both are set out below with links, so you can check them yourself.
            </p>
          </div>
        </section>

        {/* ═══ 3. FACTS BAND (each read on the source page, 2026-10-11) ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <div className={styles.comparisonBox} tabIndex={0} role="region" aria-label="Comparison table"><table className={styles.comparisonTable} data-comparison-layout data-sourced-facts><tbody>{[
                { v: '100,000', t: 'URL redirects a Shopify store can hold. A Shopify Plus store can hold 20,000,000', s: 'Shopify Help Centre', u: SRC_REDIRECTS },
                { v: '2,048', t: 'variants one Shopify product can have, across up to three options. Bigger Magento products need a plan', s: 'Shopify Help Centre', u: SRC_VARIANTS },
                { v: '6 years', t: 'the minimum time VAT records must be kept, so old order and invoice data has to stay readable after the switch', s: 'GOV.UK', u: SRC_VAT_RECORDS },
                { v: '11 Aug 2026', t: 'the date Adobe lists as the end of standard support for Adobe Commerce 2.4.6', s: 'Adobe lifecycle policy', u: SRC_ADOBE_LIFECYCLE },
              ].map((r) => (
                <tr key={r.t}><th scope="row"><div style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: 24, color: 'var(--orange)' }}>{r.v}</div></th><td><p style={{ fontSize: 13, color: 'var(--ink)', marginTop: 4 }}>{r.t}</p></td><td><a href={r.u} target="_blank" rel="noopener noreferrer nofollow" className={styles.citation} style={{ fontFamily: 'var(--fm)', fontSize: 12, color: 'var(--n400)', textDecoration: 'underline' }}>{r.s}</a></td></tr>
              ))}</tbody></table></div>
          </div>
        </section>

        {/* ═══ 4. WHAT MOVES (comparison table) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Data migration to Shopify</span>
              <h2>What moves to Shopify, what changes and what stays behind</h2>
              <p className="lead mt-4">
                <a href={SRC_MIGRATE} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>Shopify’s migration guide</a>{' '}
                lists what can be imported and how. This table puts that guide next to what we plan for on each
                line. Every Shopify statement in it was read on Shopify’s own pages on 11 October 2026.
              </p>
            </div>
            <div className={`card mt-8 ${styles.tableBox}`} tabIndex={0} role="region" aria-label="Comparison table" style={{ padding: 0, overflowX: 'auto' }}><table className="cmp-table" data-columns={3}>
                <thead>
                  <tr>
                    <th>Part of the store</th>
                    <th>What Shopify says</th>
                    <th className="fj">What we plan for</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Products, variants and images</td><td><span className="yes">Import by product file or migration app. Up to 2,048 variants and three options per product</span></td><td className="fj"><span className="yes">Reshape configurable products to fit, and flag any that pass the limits before the import</span></td></tr>
                  <tr><td className="feat">Customers</td><td><span className="yes">Import by customer file (15 MB per file), app or API, with a yes or no column for email marketing</span></td><td className="fj"><span className="yes">Split large lists across files and carry each marketing choice across exactly as it stands</span></td></tr>
                  <tr><td className="feat">Customer passwords</td><td><span className="no">Cannot be migrated. Current accounts sign in with a one-time six-digit code</span></td><td className="fj"><span className="yes">A short email before launch that tells customers how to sign in</span></td></tr>
                  <tr><td className="feat">Past orders</td><td><span className="partial">No file import. Migration app or the Order API. Two to five years recommended</span></td><td className="fj"><span className="yes">Import after products and customers, with staff order emails switched off first</span></td></tr>
                  <tr><td className="feat">Gift cards and store credit</td><td><span className="partial">Import right before launch. Cannot be edited or deleted afterwards</span></td><td className="fj"><span className="yes">The last data step of the switch, after the old store stops taking orders</span></td></tr>
                  <tr><td className="feat">Old page addresses</td><td><span className="partial">301 redirects, up to 100,000. Some prefixes cannot be redirected at all</span></td><td className="fj"><span className="yes">A full redirect map, with blocked patterns found in the audit and planned for</span></td></tr>
                  <tr><td className="feat">Product reviews</td><td><span className="no">WooCommerce reviews cannot be exported or migrated. A third-party app is needed</span></td><td className="fj"><span className="yes">Choose the reviews app early, so reviews are live on day one</span></td></tr>
                  <tr><td className="feat">Subscriptions</td><td><span className="partial">Need Shopify Payments, Authorize.net or Stripe as the main gateway. Third-party apps run the move</span></td><td className="fj"><span className="yes">Pick the gateway and the app together, then test a few live subscriptions end to end</span></td></tr>
                  <tr><td className="feat">Trade accounts</td><td><span className="partial">Set up as companies, by hand or in bulk with the Matrixify app</span></td><td className="fj"><span className="yes">Turn customer groups and price tiers into companies and catalogues</span></td></tr>
                </tbody>
              </table>
            </div>
            <div className="stack mt-8" style={{ maxWidth: 820 }}>
              <p>
                Two lines in Shopify’s guide are easy to miss and costly to ignore. The order of the import
                matters: products first, then customers, then past orders, so each order attaches to the right
                product and person. And every imported order sends a new-order email to any staff member set to
                receive them. Import 40,000 orders with notifications on and each of them gets 40,000 emails.
              </p>
              <p>
                The sources for the table are Shopify’s pages on{' '}
                <a href={SRC_VARIANTS} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>variants</a>,{' '}
                <a href={SRC_CUSTOMER_IMPORT} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>customer imports</a>,{' '}
                <a href={SRC_REDIRECTS} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>URL redirects</a>,{' '}
                <a href={SRC_WOO_GUIDE} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>moving from WooCommerce</a>,{' '}
                <a href={SRC_B2B} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>B2B</a>{' '}
                and its{' '}
                <a href={SRC_PLUS_CHECKLIST} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>Plus launch checklist</a>.
                If the destination is Shopify Plus, our <a href="/uk/shopify-plus">UK Shopify Plus</a> page covers
                what the bigger plan adds.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ 5. STEP BY STEP (numbered list, drives ItemList schema) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Shopify migration service</span>
              <h2>How a move to Shopify runs, in nine steps</h2>
              <p className="lead mt-4">
                The steps are the same whichever platform you are leaving. Several come straight from Shopify’s
                own guide and launch checklist, and we say so where they do.
              </p>
            </div>
            <figure className={styles.processFigure} data-process-flow aria-label="How a move to Shopify runs, in nine steps"><ol className={`stack mt-10 ${styles.processFlow}`} style={{ maxWidth: 900 }}>
              {MIGRATION_STEPS.map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontWeight: 700, fontSize: 15, color: '#B23E13', minWidth: 34 }} className={styles.stageMarker}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol></figure>
          </div>
        </section>

        {/* ═══ 6. PLATFORM BY PLATFORM ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Magento to Shopify, WooCommerce to Shopify and more</span>
              <h2>Magento, WooCommerce, BigCommerce or a custom cart: where the work hides</h2>
              <p className="lead mt-4">
                The steps do not change. The hard parts do. Each note below rests on the platform maker’s own
                documentation, read on 11 October 2026.
              </p>
            </div>
            <div className={styles.comparisonBox} tabIndex={0} role="region" aria-label="Comparison table"><table className={styles.comparisonTable} data-comparison-layout><tbody><tr className="card"><th><h3>Magento and Adobe Commerce</h3></th><td><p className="mt-4">
                  <a href={SRC_ADOBE_CONFIGURABLE} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>Adobe’s documentation</a>{' '}
                  says each variation of a configurable product is a separate simple product with its own SKU.
                  Shopify holds the same thing as one product with variants, so the catalogue is reshaped, not
                  copied.{' '}
                  <a href={SRC_ADOBE_GROUPS} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>Customer groups</a>,
                  which Adobe says control discounts and tax class, become companies and catalogues or custom
                  pricing rules.
                </p><p className="mt-4">
                  The clock matters too.{' '}
                  <a href={SRC_ADOBE_LIFECYCLE} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>Adobe’s lifecycle page</a>,
                  last updated 18 September 2026, shows version 2.4.6 left standard support on 11 August 2026,
                  with extended support to 31 August 2027 and a security-only period to 31 May 2028. Adobe tells
                  customers to treat that last period as migration time. Our{' '}
                  <a href="/uk/magento">UK Magento</a> page covers staying, and our{' '}
                  <a href="/replatforming/magento-to-shopify">Magento to Shopify guide</a> goes deeper on this one
                  route.
                </p></td></tr><tr className="card"><th><h3>WooCommerce</h3></th><td><p className="mt-4">
                  WooCommerce address patterns depend on settings.{' '}
                  <a href={SRC_WOO_PERMALINKS} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>Its documentation</a>{' '}
                  gives /product-category/ as the default category base and offers a Shop base option that puts
                  every product under the shop page’s name, which is /shop/ in WooCommerce’s own example.
                  Shopify refuses to redirect any address that starts with /shop, so a store using that option
                  needs a separate plan.
                </p><p className="mt-4">
                  Shopify’s{' '}
                  <a href={SRC_WOO_GUIDE} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>WooCommerce guide</a>{' '}
                  adds two more points. Reviews cannot be exported or migrated and need a third-party app. And
                  Shopify’s own{' '}
                  <a href={SRC_STORE_MIGRATION_APP} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>Store Migration app</a>{' '}
                  can import WooCommerce products but is in early access for certain stores. See our{' '}
                  <a href="/uk/woocommerce">UK WooCommerce</a> page if you are still deciding.
                </p></td></tr><tr className="card"><th><h3>BigCommerce</h3></th><td><p className="mt-4">
                  <a href={SRC_BC_PRICE_LISTS} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>BigCommerce’s documentation</a>{' '}
                  describes price lists that hold prices at variant level and are assigned to customer groups.
                  On Shopify those trade prices become catalogues attached to companies, and the match is rarely
                  one to one.
                </p><p className="mt-4">
                  Shopify’s Help Centre lists ten platform migration guides. BigCommerce, Magento and Adobe
                  Commerce are not among them, so the general guide applies and the mapping is planned by hand.
                </p></td></tr><tr className="card"><th><h3>Custom-built carts</h3></th><td><p className="mt-4">
                  A custom cart usually has no export tool and no migration app that understands its shape.
                  Shopify’s guide lists five ways to move content, from least to most technical, and this is
                  the last one: a custom migration built on the Shopify API.
                </p><p className="mt-4">
                  We read the old database directly, write the scripts that load it, and run them against a test
                  store until the counts and samples match the live site. Address patterns on custom carts are
                  often one of a kind, so the redirect map is built from a crawl and your server logs.
                </p></td></tr></tbody></table></div>
          </div>
        </section>

        <MidPageCTA
          headline={'See what your move to Shopify involves before you compare quotes'}
          sub={'Send us your store address. We look at your platform, catalogue size, address patterns and connected systems, then tell you which parts of the move are simple and which are hard, with a note on what we would do first. The review is free.'}
          label={'Get my free migration review'}
        />

        {/* ═══ 7. REDIRECTS ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Redirects and search traffic</span>
                <h2>Redirects: the limits Shopify sets and the addresses it refuses</h2>
                <div className="stack mt-6">
                  <p>
                    A redirect tells browsers and Google that a page has moved for good. Shopify’s launch
                    checklist says that without 301 redirects, old links become dead links that confuse
                    customers and hurt search results. Shopify uses its own address patterns, so nearly every
                    product and category address changes in a move.
                  </p>
                  <p>
                    <a href={SRC_REDIRECTS} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>Shopify allows 100,000 redirects</a>{' '}
                    on its standard plans and 20,000,000 on Shopify Plus, and they can be imported from a file.
                    A store with a few thousand products sits far inside the lower limit. A large Magento
                    catalogue with years of filtered and discontinued addresses may not.
                  </p>
                  <p>
                    The limit that catches people is a different one. Shopify will not redirect any address that
                    begins with /apps, /application, /cart, /carts, /orders, /services or /shop. A WooCommerce
                    store on the Shop base setting has every product under /shop/. A WordPress site with pages
                    under /services hits the same wall. The usual routes round it are to change those addresses
                    on the old store some weeks before the move, or to catch them at the domain before the
                    request reaches Shopify. Each has a cost, so we choose with your traffic figures in hand.
                  </p>
                  <p>
                    <a href={SRC_GOOGLE_MOVE} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>Google’s guide to moving a site</a>{' '}
                    says to expect rankings to move about for a while, that a medium-sized site can take a few
                    weeks or more to switch over, and that redirects should stay in place for at least a year.
                  </p>
                </div>
                <div className="card mt-8" style={{ padding: 8 }}>
                  <img src="/images/uk/shopify-migration/shopify-migration-redirect-map.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A woman pins blank cards joined by orange string in a tree shape on a cork board while a man holding more cards looks on" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                </div>
              </div>
              <div className="card">
                <span className="eyebrow">Addresses Shopify will not redirect</span>
                <ul className="scope-list no-list mt-4">
                  <li><b>Blocked prefixes.</b> /apps, /application, /cart, /carts, /orders, /services and /shop.</li>
                  <li><b>Fixed paths.</b> /products, /collections and /collections/all.</li>
                  <li><b>Reserved paths.</b> /collections/vendors, /collections/types, /apps/, /a/, /community/ and /tools/.</li>
                  <li><b>Tag filters.</b> Collection addresses that end in a tag name.</li>
                  <li><b>Live pages.</b> Any address that still loads a real page. Only broken addresses redirect.</li>
                </ul>
                <p className="mt-6" style={{ fontSize: 13 }}>
                  Source:{' '}
                  <a href={SRC_REDIRECTS} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>Shopify Help Centre, creating and managing URL redirects</a>,
                  read 11 October 2026.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 8. CUSTOMER ACCOUNTS AND PASSWORDS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Customer accounts</span>
                <h2>Customer accounts after the move: passwords do not carry over</h2>
                <div className="stack mt-6">
                  <p>
                    Store owners often ask whether customers keep their old password. Shopify’s own pages say
                    they do not. Its{' '}
                    <a href={SRC_CUSTOMER_IMPORT} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>guide to importing customers</a>{' '}
                    states that passwords are encrypted outside Shopify and cannot be migrated from another
                    store with a customer file. The customer records move. The passwords stay behind.
                  </p>
                  <p>
                    On{' '}
                    <a href={SRC_CUSTOMER_ACCOUNTS} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>Shopify’s current customer accounts</a>{' '}
                    that matters less than it sounds, because nobody has a password. A customer types their
                    email address, receives a one-time six-digit code and is signed in. Shopify describes its
                    older password-based accounts as{' '}
                    <a href={SRC_ACCOUNTS_UPGRADE} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>deprecated</a>.
                  </p>
                  <p>
                    You may read about Multipass, a Shopify Plus feature that passed signed-in customers across
                    from another site.{' '}
                    <a href={SRC_MULTIPASS} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>Shopify’s developer documentation</a>{' '}
                    now says Multipass is no longer available to new stores. A store created for a migration
                    today is a new store.
                  </p>
                  <p>
                    The plan that works is a short email before launch. It tells customers the shop has moved,
                    that their details and past orders are waiting, and that they sign in with their email
                    address and a code.
                  </p>
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What a returning customer does on day one</span>
                <ul className="scope-list num-list mt-4">
                  <li><b>Opens the shop.</b> The old address redirects to the matching new page.</li>
                  <li><b>Chooses sign in.</b> Types the email address they have always used.</li>
                  <li><b>Gets a code.</b> Shopify emails a one-time six-digit code.</li>
                  <li><b>Is signed in.</b> Their profile, addresses and imported orders are there.</li>
                </ul>
                <p className="mt-6" style={{ fontSize: 13 }}>
                  Trade buyers follow a separate path. Shopify’s launch checklist says a B2B customer assigned
                  to a company can be sent an invitation email to start placing orders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 9. UK SPECIFICS ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Shopify migration in the UK</span>
                <h2>The UK parts of the move: VAT, couriers, pay-later and accounts</h2>
                <div className="stack mt-6">
                  <p>
                    A UK store has four connections that sit outside the product catalogue and are easy to
                    leave until the last week. All four are wired into the old platform through plugins or
                    extensions that will not exist on the new one.
                  </p>
                  <p>
                    VAT settings do not copy across.{' '}
                    <a href={SRC_UK_TAX} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>Shopify’s UK tax page</a>{' '}
                    says Basic Tax is only available to stores that were set up to collect UK tax before 13 May
                    2026, so a store created for a migration now uses Shopify Tax or manual tax settings.
                    Shopify also says it can charge tax for you but cannot file or pay it. Your accountant
                    decides the treatment and we build the store to match.
                  </p>
                  <p>
                    Old records still matter after the old store is switched off.{' '}
                    <a href={SRC_VAT_RECORDS} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>GOV.UK says VAT records must be kept for at least six years</a>,
                    or ten under the VAT One Stop Shop, and that software holding them must be linked digitally,
                    with no copying and pasting between packages. Shopify recommends importing two to five years
                    of orders. Anything older should be exported and stored where your accountant can read it
                    before the old server is closed.
                  </p>
                </div>
                <div className="card mt-8" style={{ padding: 8 }}>
                  <img src="/images/uk/shopify-migration/shopify-migration-records.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A woman with short grey hair and glasses writes in an open ring binder at a desk beside a stack of paper and an orange folder" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                </div>
              </div>

              <div>
                <div className="card" style={{ padding: 8 }}>
                  <img src="/images/uk/shopify-migration/shopify-migration-packing.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A man in a dark apron tapes a plain cardboard parcel shut at a packing bench beside a stack of sealed parcels and a roll of blank labels" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                </div>
                <div className="card mt-6">
                  <span className="eyebrow">What gets set up again on Shopify</span>
                  <div className="mt-6">
                    <p style={{ fontFamily: 'var(--fm)', fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: '#B23E13', marginBottom: 4 }}>Couriers</p>
                    <ul className="int-group">
                      <li><b><a href={SRC_ROYAL_MAIL} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>Royal Mail</a>.</b> Labels can be bought inside Shopify from a UK location, for UK destinations only.</li>
                      <li><b><a href={SRC_DPD} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>DPD</a>.</b> Labels can be bought inside Shopify from a UK location. Parcels are dropped off, with no collection.</li>
                      <li><b>Northern Ireland.</b> Since 1 May 2025, labels from Great Britain to Northern Ireland cannot be bought through Shopify’s carrier accounts, so that lane needs its own courier account or an app.</li>
                      <li><b>Your own contract.</b> Rates inside Shopify come from Shopify’s accounts with the carriers. A store with its own Royal Mail or DPD contract connects that account through a shipping app.</li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <p style={{ fontFamily: 'var(--fm)', fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: '#B23E13', marginBottom: 4 }}>Pay later</p>
                    <ul className="int-group">
                      <li><b><a href={SRC_KLARNA} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>Klarna</a>.</b> Switched on through Shopify Payments. The United Kingdom is on Shopify’s list of supported countries.</li>
                      <li><b><a href={SRC_CLEARPAY} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>Clearpay</a>.</b> Its UK retailer page shows Shopify among the platforms it connects to.</li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <p style={{ fontFamily: 'var(--fm)', fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: '#B23E13', marginBottom: 4 }}>Accounts</p>
                    <ul className="int-group">
                      <li><b><a href={SRC_XERO} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>Xero</a>.</b> Xero publishes its own Shopify integration, which it says syncs sales, payouts, fees and taxes.</li>
                      <li><b>Sage.</b> The audit records how orders, refunds and payouts reach Sage today, so the same figures keep arriving after the move.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 10. COST (market ranges only, each from a named UK source) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Shopify migration cost UK</span>
              <h2>What a Shopify migration costs in the UK: published ranges from five agencies</h2>
              <p className="lead mt-4">
                FactoryJet wrote this page and sells this service, so read this section knowing that. The five
                firms below are UK agencies that publish figures for a migration project. The numbers are
                theirs, read on each firm’s own page on 11 October 2026 and ordered from the lowest starting
                figure to the highest.
              </p>
            </div>
            <div className={`card mt-8 ${styles.tableBox}`} tabIndex={0} role="region" aria-label="Comparison table" style={{ padding: 0, overflowX: 'auto' }}><table className="cmp-table" data-columns={4}>
                <thead>
                  <tr>
                    <th>Source</th>
                    <th>The job, as that firm describes it</th>
                    <th className="fj">Published range</th>
                    <th>Timeline it gives</th>
                  </tr>
                </thead>
                <tbody>
                  {PRICE_ROWS.map((r) => (
                    <tr key={r.firm + r.job}>
                      <td className="feat"><a href={r.url} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>{r.firm}</a></td>
                      <td>{r.job}</td>
                      <td className="fj">{r.range}</td>
                      <td>{r.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="stack mt-8" style={{ maxWidth: 820 }}>
              <p>
                Read the first row beside the sixth. Both firms describe a standard Magento move. One publishes
                £3,000 to £6,000 and the other £25,000 to £70,000. The top of the second range is about 23 times
                the bottom of the first (£70,000 divided by £3,000 is 23.3). Neither figure is wrong. They
                describe different amounts of work under one name.
              </p>
              <p>
                Four things explain most of the gap: whether the theme is rebuilt or bought, how many systems
                are reconnected, whether trade pricing and custom rules are rebuilt, and how much testing
                happens before launch. A quote that does not say which of those it covers cannot be compared
                with one that does.
              </p>
              <p>
                What we could not see: none of these pages shows the quotes behind its range, and each figure is
                that firm’s own description of the market, not a survey. FactoryJet quotes a fixed price in
                writing after a short scoping call. Ask every bidder, us included, to list what is inside the
                price. For Shopify Plus projects, our guide to{' '}
                <a href="/blog/shopify-plus-migration-cost-2026">Shopify Plus migration cost</a> goes further.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ 11. ROUTES COMPARISON ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Migrate to Shopify</span>
              <h2>Do it yourself, use an app or hire a Shopify migration agency</h2>
              <p className="lead mt-4">
                Shopify’s guide lists five ways to move a store, from the least technical to the most. Here is
                what each one suits and what it leaves for you to do.
              </p>
            </div>
            <div className={`card mt-8 ${styles.tableBox}`} tabIndex={0} role="region" aria-label="Comparison table" style={{ padding: 0, overflowX: 'auto' }}><table className="cmp-table" data-columns={3}>
                <thead>
                  <tr>
                    <th>Route</th>
                    <th>What it suits</th>
                    <th>What it leaves undone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Copy and paste</td><td>A few pages, such as delivery and returns policies</td><td><span className="no">Products, customers, orders and redirects</span></td></tr>
                  <tr><td className="feat">CSV files</td><td>Products and customers. Shopify’s example is a catalogue of 250 products</td><td><span className="partial">Past orders, which have no file route, plus redirects and the theme</span></td></tr>
                  <tr><td className="feat">Shopify’s Store Migration app</td><td>Importing data from a supported platform at no charge</td><td><span className="partial">Custom rules, connected systems, redirects and the theme</span></td></tr>
                  <tr><td className="feat">Third-party migration services</td><td>Bulk data, including past orders. Shopify names LitExtension and Cart2Cart</td><td><span className="partial">Checking the mapping, plus rules, connections, redirects and the theme</span></td></tr>
                  <tr><td className="feat">An agency or a custom API build</td><td>Stores with trade pricing, custom rules, an ERP link or a custom cart</td><td><span className="yes">Nothing: the whole move is scoped, built and tested as one project</span></td></tr>
                </tbody>
              </table>
            </div>
            <div className="stack mt-8" style={{ maxWidth: 820 }}>
              <p>
                Small stores with no custom rules can often move with the first three routes. Once trade
                pricing, custom rules or an ERP link are involved, the work those routes leave undone is most
                of the project. Our{' '}
                <a href="/uk/shopify-development">UK Shopify development</a> and{' '}
                <a href="/uk/ecommerce-development">UK ecommerce development</a> pages cover new builds.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ 12. HOW FACTORYJET WORKS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Working with FactoryJet</span>
                <h2>How FactoryJet runs a Shopify migration</h2>
                <div className="stack mt-6">
                  <p>
                    FactoryJet has been in commerce since 2014 and has served 500+ businesses. We design,
                    build, migrate and support Shopify and Shopify Plus stores. We also build and support
                    Magento and WooCommerce stores, so our advice on whether to move is not tied to one
                    platform. We work remotely with brands across the UK and hold calls in UK business hours.
                  </p>
                </div>

                <h3 className="mt-8">What you get from us</h3>
                <ul className="scope-list num-list mt-4">
                  <li><b>A free migration review.</b> A short look at your platform, catalogue, address patterns and connected systems, ending in a written list of what is simple and what is hard.</li>
                  <li><b>A fixed price in writing.</b> Quoted after a short scoping call, before any work starts.</li>
                  <li><b>Working software before you sign.</b> We show working software on your own data before a contract.</li>
                  <li><b>A build measured in weeks.</b> A store build that includes a migration takes 5 to 8 weeks. Headless or custom builds take 8 to 14 weeks.</li>
                  <li><b>Ownership.</b> You own the store, the theme code and every login.</li>
                  <li><b>Support after launch.</b> We stay on, with the build and the ongoing support both quoted as fixed prices in writing.</li>
                </ul>

                <div className="mt-8">
                  <ModalCTAButton label="Get my free migration review" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>

                <div className="flex-wrap mt-8">
                  <a className="city-pill" href="/uk/shopify-plus">UK Shopify Plus</a>
                  <a className="city-pill" href="/uk/shopify-development">UK Shopify development</a>
                  <a className="city-pill" href="/uk/magento">UK Magento</a>
                  <a className="city-pill" href="/uk/woocommerce">UK WooCommerce</a>
                  <a className="city-pill" href="/uk/ecommerce-development">UK ecommerce development</a>
                  <a className="city-pill" href="/uk/shopify-xero-integration">UK Shopify Xero integration</a>
                  <a className="city-pill" href="/replatforming/magento-to-shopify">Magento to Shopify guide</a>
                  <a className="city-pill" href="/blog/shopify-plus-migration-cost-2026">Shopify Plus migration cost</a>
                </div>
              </div>
              <div>
                <div className="card" style={{ padding: 8 }}>
                  <img src="/images/uk/shopify-migration/shopify-migration-test-store.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Seen from behind, a woman and a man stand at a desk looking at a laptop that shows a grid of grey and orange blocks" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                </div>
                <div className="card card-top-orange mt-6">
                  <span className="eyebrow">What moves the scope</span>
                  <div className="scorecard-row"><div className="scorecard-metric">Products, variants and custom fields</div><div className="scorecard-val" style={{ fontSize: 14 }}>Catalogue</div></div>
                  <div className="scorecard-row"><div className="scorecard-metric">Trade pricing and custom rules</div><div className="scorecard-val" style={{ fontSize: 14 }}>Logic</div></div>
                  <div className="scorecard-row"><div className="scorecard-metric">Systems reconnected to the store</div><div className="scorecard-val" style={{ fontSize: 14 }}>Connections</div></div>
                  <div className="scorecard-row"><div className="scorecard-metric">Old addresses to redirect</div><div className="scorecard-val" style={{ fontSize: 14 }}>Redirects</div></div>
                  <div className="scorecard-row"><div className="scorecard-metric">Theme rebuilt or adapted</div><div className="scorecard-val" style={{ fontSize: 14 }}>Design</div></div>
                  <div className="scorecard-row"><div className="scorecard-metric">Migration review before any quote</div><div className="scorecard-val" style={{ color: 'var(--green)', fontSize: 14 }}>Free</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 13. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>Shopify migration questions UK store owners ask</h2>
            </div>
            <div className="faq-grid">
              <aside className="faq-sidebar">
                <span className="faq-sidebar-topics">Topics</span>
                <nav className="faq-sidebar-nav">
                  {FAQ_CATEGORIES.map((c) => (
                    <a key={c.key} href={`#faq-${c.key}`}>
                      {c.label}
                      <span className="faq-nav-count">{FAQ_ITEMS.filter((f) => f.category === c.key).length}</span>
                    </a>
                  ))}
                </nav>
                <div className="faq-sidebar-cta">
                  <ModalCTAButton label="Ask the founder a question" region="uk" modalVariant="default" btnVariant="secondary-light" />
                  <p>Bhavesh replies within one business day.</p>
                </div>
              </aside>

              <div>
                {FAQ_CATEGORIES.map((c) => (
                  <div key={c.key} id={`faq-${c.key}`} style={{ marginBottom: 40 }}>
                    <div className="faq-cat-header">
                      <span className="faq-cat-bar" />
                      <p className="faq-cat-label">{c.label}</p>
                    </div>
                    <ul className="faq-list">{FAQ_ITEMS.filter((f) => f.category === c.key).map((f) => (
                      <li key={f.question}><details className="faq-item">
                        <summary>
                          <span className="q-text">{f.question}</span>
                          <span className="chevron">
                            <svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </span>
                        </summary>
                        <div className="faq-ans"><p>{f.answer}</p></div>
                      </details></li>
                    ))}</ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 14. FINAL CTA ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Free migration review</span>
            <h2>Know what your move to Shopify involves before you commit</h2>
            <p className="mt-4">
              Send your name and work email. Bhavesh replies within one business day to arrange a free migration
              review that sets out which parts of your move are simple and which are hard. No obligation.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get my free migration review" region="uk" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/contact" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>Contact FactoryJet</a>
            </div>
          </div>
        </section>

      </main>
        <Footer />
      </div>
    </>
  );
}
