import type { Metadata } from 'next';
import { Fragment } from 'react';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import AuFaq from '../components/AuFaq';
import '@/components/v2/AiAgentDevelopmentSections.css';
import '../au-page.css';
import './page.css';

const CANONICAL = 'https://factoryjet.com/au/shopify-migration';
const UPDATED = '2026-10-29';
const TITLE = 'Shopify Migration Australia | Magento, Neto, WooCommerce | FactoryJet';
const H1 = 'Shopify Migration Australia: Move Off Magento, WooCommerce, Neto or BigCommerce';
const DESCRIPTION =
  'Shopify migration for established Australian stores leaving Magento, WooCommerce, Neto (Maropost) or BigCommerce, with Xero, MYOB, Afterpay and redirects done.';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD. Never hand-copy a second list. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'Shopify Migration Australia', url: CANONICAL },
];

/* ─── External sources. Each one was fetched and read on 2026-10-29; the supporting
       words are noted beside it. If a claim below loses its source, cut the claim. ── */
// Shopify Help Center, "Migrate to Shopify": "Import your products first, then your customers, and
// then any historical orders." Orders move by migration apps, the Order API or the Transaction API.
// Platform guides listed: Amazon, Clover, Etsy, eBay, GoDaddy, Lightspeed, Square, Squarespace, Wix,
// WooCommerce. No Magento, BigCommerce, Neto or Maropost guide.
const SRC_MIGRATE = 'https://help.shopify.com/en/manual/migrating-to-shopify';
// Shopify App Store, Store Migration app: "Free"; sources Square, WooCommerce, Etsy, Wix, Amazon, eBay,
// Clover, Lightspeed R/X (Vend); moves "product and customer data".
const SRC_STORE_MIGRATION_APP = 'https://apps.shopify.com/store-migration';
// Shopify Help Center, customers: "you can't migrate customer passwords from another online store using
// a CSV" because "passwords are encrypted outside of Shopify"; customer CSV files 15 MB or smaller.
const SRC_CUSTOMER_IMPORT = 'https://help.shopify.com/en/manual/customers/import-export-customers';
// Shopify developer docs: "Multipass is no longer available to new stores"; requires Shopify Plus.
const SRC_MULTIPASS = 'https://shopify.dev/docs/api/customer-authentication/multipass';
// Shopify Help Center, URL redirects: 100,000 redirects (20,000,000 on Plus); no redirects from paths
// starting /apps, /application, /cart, /carts, /orders, /services, /shop, or from fixed paths such as
// /products and /collections; only broken (404) URLs redirect.
const SRC_REDIRECTS = 'https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect';
// Shopify Help Center, Plus launch checklist: import orders from the past 2 to 5 years, at minimum the
// return window; gift cards "right before launching"; TTL to 300 "about a week before you go live";
// consider deactivating the old store's checkout during DNS propagation; test different payment methods
// and shipping addresses "with particular attention to how the tax is calculated".
const SRC_PLUS_CHECKLIST = 'https://help.shopify.com/en/manual/intro-to-shopify/plus-launch-checklist';
// Shopify Help Center, B2B: B2B customers are set up as companies; "Shopify B2B is available on the
// Basic, Grow, Advanced, and Shopify Plus plans."
const SRC_B2B = 'https://help.shopify.com/en/manual/b2b';
// Shopify Australia pricing: plan prices labelled AUD (Basic $56, Grow $149, Advanced $575 a month on
// monthly billing). The page carries no GST wording either way.
const SRC_PRICING = 'https://www.shopify.com/au/pricing';
// Google Search Central, site moves with URL changes: "a small to medium-sized website can take a few
// weeks"; "you may experience ranking fluctuations"; keep redirects "generally at least 1 year".
const SRC_GOOGLE_MOVE = 'https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes';
// Adobe Commerce lifecycle policy, last updated 18 September 2026: 2.4.5 extended support ended
// 11 Aug 2026; 2.4.6 standard support ended 11 Aug 2026, extended ends 31 Aug 2027; 2.4.7 standard
// ends 31 May 2027.
const SRC_ADOBE_LIFECYCLE =
  'https://experienceleague.adobe.com/en/docs/commerce-operations/release/planning/lifecycle-policy';
// BigCommerce docs: a price list is "a collection of price records", each overriding one variant's
// price; price lists are assigned to channels and to customer groups.
// WooCommerce docs, permalinks: product base example.com/product/...; "Shop base" option gives
// example.com/shop/...; default product category base is product-category.
const SRC_WOO_PERMALINKS = 'https://woocommerce.com/document/permalinks/';
const SRC_BC_PRICE_LISTS =
  'https://docs.bigcommerce.com/developer/docs/admin/catalog-and-inventory/pricing/price-lists';
// Maropost (Neto) knowledge base. Its article index lists a Sales Orders Export Wizard, a Customer
// Export Wizard, a Category & Content Export Wizard, and setup guides for Amazon Australia, Catch,
// Bunnings Marketplace, Unleashed, Neto POS and Pick'n Pack.
const SRC_MAROPOST_KB = 'https://galaxy.maropost.com/kb/articles/1457';
// Xero App Store (AU), "Shopify, by Xero": "syncs sales, payouts, fees and taxes from Shopify into Xero".
const SRC_XERO = 'https://apps.xero.com/au/app/shopify';
// Afterpay developer docs, Shopify AU/NZ/US pre-integration checks: store address country and store
// currency (AUD for Australia) must correspond to the Afterpay account region.
const SRC_AFTERPAY =
  'https://developers-beta.afterpay.com/afterpay-online-developer/v-1/guides/shopify-au-nz-us/pre-integration-checks';
// OAIC, small business: "A small business is one with an annual turnover of $3 million or less."
// Most small businesses are not covered by the Privacy Act 1988, but some are.
const SRC_OAIC_SMALL = 'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business';
// OAIC, APP quick reference: APP 8 covers steps before personal information "is disclosed overseas";
// APP 11 requires "reasonable steps to protect personal information".
const SRC_OAIC_APPS = 'https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-quick-reference';
// Market ranges (build only, never running costs). Jaboo, a Shopify Premier Partner whose work includes
// Australian brands, "How much does a Shopify migration cost in Australia?": "anywhere from $5,000 to
// $60,000+ AUD"; Neto migration quotes "typically land between $5,000 and $25,000+"; a "$40K+" tier for
// ERP, B2B and custom work. Perceptiv Digital ("teams in Australia and Europe"), Neto to Shopify page:
// "Migration & Build Cost $45,000 - $160,000" for a mid-level Plus build (upwards of 5,000 SKUs, single
// currency and warehouse, 1 to 2 integrations), in a cost table it labels AUD. Neither page says whether
// its figures include GST.
const SRC_JABOO = 'https://www.jaboo.io/insights/ecommerce-migration-cost-australia/';
const SRC_PERCEPTIV = 'https://perceptiv.digital/migration/neto-to-shopify/';

/* ─── Project steps: ONE array drives the numbered list AND the ItemList schema ─── */
const STEPS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Inventory the old store', d: 'A crawler records every address the old store serves, and we list each extension, plugin, scheduled job and connection, from the Xero or MYOB link to the marketplace feeds. Anything with no direct Shopify match is flagged in writing.' },
  { n: '02', t: 'Agree which system owns what', d: 'Stock, prices, customers and invoices each get one owner. If Cin7, Unleashed, NetSuite or Odoo holds stock today, Shopify reads from it rather than keeping a second count.' },
  { n: '03', t: 'Draft your store on your own data', d: 'A working draft in a development store, loaded with a sample of your real products and customers, so you judge the result before you sign for the full build.' },
  { n: '04', t: 'Write the redirect map', d: 'Every old product, category and content address gets a new home, checked against the paths Shopify will not redirect before any theme work starts.' },
  { n: '05', t: 'Rehearse the data move', d: 'Products, then customers, then past orders, in the order Shopify sets. We run it more than once and compare counts and sample records against the old store each time.' },
  { n: '06', t: 'Reconnect the Australian stack', d: 'Afterpay, Zip and Stripe or Shopify Payments, Australia Post, StarTrack or Sendle, the accounting link and each marketplace channel, each set up again and tested with real orders and refunds.' },
  { n: '07', t: 'Cut over at a quiet hour', d: 'DNS TTL lowered about a week out, gift cards moved last, and checkout on the old store paused while the domain change spreads, so no order lands on the wrong platform.' },
  { n: '08', t: 'Watch the first weeks', d: 'Search Console checked daily, broken addresses fixed, and the old data archive kept. Defects we find are fixed inside the build price for the cover period agreed at the start.' },
];

/* ─── FAQ source of truth (drives the UI and the FAQPage schema) ─────── */
const FAQ_CATEGORIES = [
  { key: 'cost',      label: 'Cost and timing' },
  { key: 'data',      label: 'Data, customers and orders' },
  { key: 'seo',       label: 'Redirects and Google' },
  { key: 'platforms', label: 'Magento, Neto, WooCommerce, BigCommerce' },
  { key: 'au',        label: 'Xero, Afterpay, marketplaces and privacy' },
  { key: 'working',   label: 'Working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
  // ── Cost and timing ──
  { category: 'cost', question: 'How much does a Shopify migration cost in Australia?',
    answer: 'Published Australian ranges are wide. Jaboo, a Shopify Premier Partner, puts migrations at $5,000 to $60,000+ AUD, with ERP, B2B and custom work in a $40,000+ tier. Perceptiv Digital lists $45,000 to $160,000 to migrate and build a mid-level Shopify Plus store of 5,000+ SKUs. Neither page says whether GST is included. FactoryJet quotes a fixed price per phase in writing after a short scoping call.' },
  { category: 'cost', question: 'Why do quotes for the same Shopify migration differ so much?',
    answer: 'Because the word migration covers different jobs. One quote moves products into a stock theme. Another rebuilds the theme, rewires Xero or MYOB, rebuilds trade pricing, moves years of orders and re-points marketplace feeds. Ask each agency for a line-item scope: what data moves, how many years of orders, which integrations are rebuilt, and who writes the redirect map. Then compare like with like.' },
  { category: 'cost', question: 'How long does a move to Shopify take?',
    answer: 'An advanced build that includes a migration usually takes 5 to 8 weeks with us. Big catalogues, several stores, an ERP link or B2B pricing push it longer, and Shopify Plus projects with many integrations can run for several months. We give you the timeline in writing once the scope is agreed, and the first thing you see is a draft of your store, not a slide deck.' },
  { category: 'cost', question: 'Are Shopify prices in Australia shown with or without GST?',
    answer: 'Shopify’s Australian pricing page lists its plans in AUD (Basic is $56 a month on monthly billing as of 29 October 2026) but carries no wording on GST either way, so check your invoice. The agency ranges quoted on this page do not say whether they include GST either. Every FactoryJet quote states plainly whether GST is included.' },

  // ── Data, customers and orders ──
  { category: 'data', question: 'Do customer passwords move to Shopify?',
    answer: 'No. Shopify says customer passwords cannot be migrated with a CSV because they are encrypted outside Shopify. Customer records, addresses and order history do move. On launch day customers sign in to the new store with their email address, and we write the email that explains the change, so the first login feels planned rather than broken.' },
  { category: 'data', question: 'Can Multipass keep our customers logged in after the move?',
    answer: 'Not on a new store. Shopify’s developer documentation says new stores can no longer get Multipass, and it was only ever a Shopify Plus feature. A store moving to Shopify today is a new store, so plan on customers signing in again with their email address, and tell them before launch rather than after.' },
  { category: 'data', question: 'Can our order history move to Shopify, and how many years?',
    answer: 'Yes, through migration apps or Shopify’s APIs rather than a spreadsheet. Shopify’s order is fixed: products first, then customers, then past orders. Its Plus launch checklist suggests importing two to five years of orders, and at least everything inside your returns window. Older orders can stay in an archive export your bookkeeper can still open.' },
  { category: 'data', question: 'Is Shopify’s free Store Migration app enough for our move?',
    answer: 'For a small WooCommerce catalogue it can be a start. The app moves product and customer data, and its listing names WooCommerce, Square, Etsy, Wix, Amazon, eBay, Clover and Lightspeed as sources. Magento, BigCommerce and Neto are not on that list, and it does not rebuild redirects, trade pricing, Xero links or marketplace feeds. Those are where established stores lose money.' },
  { category: 'data', question: 'What happens to gift cards and store credit during the move?',
    answer: 'They move last. Shopify’s Plus launch checklist says gift card data should be migrated right before launch, so balances customers spend on the old store in the final days are not lost. Store credit and loyalty points depend on the app that held them; we export the balances, load them into the Shopify app that replaces it, and spot-check accounts before launch.' },

  // ── Redirects and Google ──
  { category: 'seo', question: 'Will moving to Shopify hurt our Google rankings?',
    answer: 'There will be some movement. Google’s own guide says to expect ranking fluctuations while it recrawls, and that a small to medium site can take a few weeks for most pages to move. What decides whether rankings come back is the redirect map, the titles and content you carry across, and keeping redirects live for at least a year, as Google advises.' },
  { category: 'seo', question: 'Is there a limit on how many redirects Shopify allows?',
    answer: 'Shopify’s Help Center puts the limit at 100,000 URL redirects on standard plans and 20,000,000 on Shopify Plus. Most stores fit inside 100,000, but a large Magento catalogue with filtered category addresses can come close. We count the addresses that earn traffic or links during the crawl, so you know before the build whether the limit matters.' },
  { category: 'seo', question: 'Which old addresses can Shopify not redirect?',
    answer: 'Shopify will not redirect paths that begin with /apps, /application, /cart, /carts, /orders, /services or /shop, or its own fixed paths such as /products and /collections. It also only redirects addresses that return a 404. WooCommerce’s Shop base permalink option puts products under /shop/, so a store using it needs a different plan, which is why we check the map before theme work starts.' },

  // ── Platforms ──
  { category: 'platforms', question: 'Is Magento end of life in 2026?',
    answer: 'Magento as a platform is not, but older versions are. Adobe’s lifecycle policy, updated 18 September 2026, shows standard support for Adobe Commerce 2.4.6 ended on 11 August 2026, with extended support running to 31 August 2027, and 2.4.5 extended support already ended. A store on those versions faces an upgrade either way, which is when many Australian merchants price a move to Shopify.' },
  { category: 'platforms', question: 'Should an established Neto or Maropost store move to Shopify?',
    answer: 'Only if the jobs Neto does today have a clear new home. Maropost’s own knowledge base covers marketplace setups for Amazon Australia, Catch and Bunnings Marketplace, plus POS, Pick’n Pack and an Unleashed link, all inside one platform. On Shopify each of those becomes an app, a connector or your inventory system. We map every one before you commit.' },
  { category: 'platforms', question: 'Can you move WooCommerce to Shopify without losing search traffic?',
    answer: 'Yes, with a full redirect map. WooCommerce addresses follow your permalink settings, by default /product/ and /product-category/, while Shopify uses /products/ and /collections/. If your store uses the Shop base option, products sit under /shop/, a prefix Shopify will not redirect from, so we plan that before the build. Titles, meta descriptions and image alt text carry across too.',
    links: [{ href: '/au/ecommerce-seo', label: 'Ecommerce SEO in Australia' }] },
  { category: 'platforms', question: 'Can you move a BigCommerce store with trade price lists to Shopify?',
    answer: 'Yes. BigCommerce stores trade prices as price lists, which its documentation describes as variant-level price records assigned to customer groups and channels. On Shopify, trade buyers become companies with their own catalogues and pricing, and Shopify says B2B is now available on Basic, Grow, Advanced and Plus plans. We map each price list and group across, then test logins as real trade buyers.' },

  // ── Australian systems, marketplaces and privacy ──
  { category: 'au', question: 'Will Xero or MYOB still receive our sales after the move?',
    answer: 'Yes, once it is reconnected. Xero’s own Shopify integration syncs sales, payouts, fees and taxes from Shopify into Xero. For MYOB Business, MYOB Acumatica or QuickBooks Online we set up a connector that suits your file. The link from your old platform does not carry across, so we set the new one up with your bookkeeper and reconcile a test month before launch.' },
  { category: 'au', question: 'Do Afterpay and Zip keep working after we move to Shopify?',
    answer: 'They work on Shopify, but your accounts need reconnecting to the new store. Afterpay’s developer docs say the Shopify store address and store currency must match your Afterpay account region, which for Australia means an Australian address and AUD. Zip is set up as its own payment method. We place real orders with each one, and refund one, before launch.' },
  { category: 'au', question: 'What happens to our Amazon, eBay, Catch or Bunnings Marketplace listings?',
    answer: 'They need a new source of stock and orders. On Neto, many stores list on Amazon.com.au, eBay and Catch from the platform itself. On Shopify, listings run through each marketplace’s app, a multichannel tool, or your inventory system such as Cin7 Core or Unleashed. We pick one owner per channel so stock is never sold twice.' },
  { category: 'au', question: 'Does the Privacy Act matter when we move customer data to Shopify?',
    answer: 'For most established stores, yes. The OAIC says businesses with annual turnover above $3 million are generally covered by the Privacy Act 1988. APP 8 covers steps before personal information is disclosed overseas, and APP 11 requires reasonable steps to protect it. We move customer files through access-controlled channels, delete working copies after launch, and suggest your adviser reviews your privacy policy.' },

  // ── Working with us ──
  { category: 'working', question: 'Can we see our store running on Shopify before we commit?',
    answer: 'That is how every project starts. We build a draft of your store in a Shopify development store, loaded with a sample of your real products and customers, before you sign for the full migration. You click through it, test a checkout, and see how your catalogue looks on Shopify. Then each phase is scoped, priced and signed on its own.' },
  { category: 'working', question: 'Do we own the Shopify store and theme code once you finish?',
    answer: 'You do, from day one. The Shopify store sits in your own account, apps and hosting are billed to you at cost with no markup from us, and the theme code lives in a repository in your name. If you later move agencies or hire in-house, everything they need is already yours.' },
  { category: 'working', question: 'Do we have to sign a support retainer after launch?',
    answer: 'No. Defects we find after launch are fixed inside the build price for a cover period agreed before work starts. After that, support is optional: each change is quoted and approved before we do it, and there is no monthly minimum. When you want a next phase, such as B2B or an AI agent for customer service, it is scoped and priced the same way.' },
  { category: 'working', question: 'What should our brief or RFP for a Shopify migration include?',
    answer: 'Your current platform and version, SKU and variant counts, how many years of orders you need, every system that touches an order (Xero, MYOB, Cin7, Unleashed, a 3PL), your marketplaces and payment methods, B2B rules, and your target date. Attach it as a PDF or Word file, up to 5 MB, in the step after your name and email on our form.' },
];

/* ─── JSON-LD ────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Shopify Migration Australia',
      serviceType: 'Shopify migration from Magento (Adobe Commerce), WooCommerce, Neto (Maropost Commerce Cloud) and BigCommerce',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'Shopify migration for established Australian stores: data moved in Shopify’s order, a written redirect map, trade pricing rebuilt, and Xero, MYOB, Cin7, Unleashed, Afterpay, Zip, Australia Post, StarTrack, Sendle and marketplace channels reconnected and tested.',
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
      inLanguage: 'en-AU',
      datePublished: UPDATED,
      dateModified: UPDATED,
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['[data-speakable="true"]'] },
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
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#steps`,
      name: 'How a Shopify migration runs',
      itemListElement: STEPS.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: s.t,
        description: s.d,
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
  alternates: { canonical: CANONICAL, languages: { 'en-AU': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: TITLE,
    description:
      'Moving an established Australian store from Magento, WooCommerce, Neto or BigCommerce to Shopify: a draft on your own data before you sign, a written redirect map, and Xero, MYOB, Afterpay and marketplaces reconnected.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* H1 split for the Family A hero emphasis. Same string as H1 (schema headline). */
const H1_EMPHASIS = 'Neto or BigCommerce';
const H1_LEAD = H1.slice(0, H1.lastIndexOf(H1_EMPHASIS)).trimEnd();

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const HERO_ICONS = [
  'M4 4h16v16H4V4Zm0 5h16M9 9v11',
  'M10 14a4 4 0 0 0 6 0l3-3a4 4 0 0 0-6-6l-1 1m2 4a4 4 0 0 0-6 0l-3 3a4 4 0 0 0 6 6l1-1',
  'M4 7h12m0 0-3-3m3 3-3 3M20 17H8m0 0 3-3m-3 3 3 3',
] as const;

/* Four source platforms, each with what is specific to moving it (sources in the notes above). */
const PLATFORMS: { n: string; name: string; d: string; src: string; srcLabel: string }[] = [
  { n: '01', name: 'Magento (Adobe Commerce)',
    d: 'Usually the most custom of the four: extensions, filtered category addresses and customer groups that set trade prices. Adobe ended standard support for 2.4.6 on 11 August 2026, so many stores are choosing between an upgrade and a move. Shopify publishes no Magento migration guide, and its free migration app does not read Magento, so the data move is scripted.',
    src: SRC_ADOBE_LIFECYCLE, srcLabel: 'Adobe Commerce lifecycle policy' },
  { n: '02', name: 'Neto (Maropost Commerce Cloud)',
    d: 'A platform many Australian merchants run, bundling marketplace listings, POS and warehouse picking with the webstore. Maropost’s knowledge base has export wizards for sales orders, customers, and categories and content, which is where the data comes from. The bigger job is giving Amazon Australia, Catch, Bunnings Marketplace and Pick’n Pack a new home on Shopify.',
    src: SRC_MAROPOST_KB, srcLabel: 'Maropost (Neto) knowledge base' },
  { n: '03', name: 'WooCommerce',
    d: 'The one source of the four that Shopify’s free Store Migration app reads, for products and customers. It leaves behind everything a plugin did: subscriptions, wholesale pricing, product add-ons, SEO fields and the Xero or MYOB link. Watch the permalinks too: a store on WooCommerce’s Shop base option keeps products under /shop/, a path Shopify will not redirect from.',
    src: SRC_WOO_PERMALINKS, srcLabel: 'WooCommerce permalinks' },
  { n: '04', name: 'BigCommerce',
    d: 'Close to Shopify in shape, so products move cleanly. Trade pricing is the work: BigCommerce holds it in price lists of variant-level prices assigned to customer groups and channels. On Shopify those become B2B companies with catalogues, and Shopify now offers B2B from the Basic plan up.',
    src: SRC_BC_PRICE_LISTS, srcLabel: 'BigCommerce price lists' },
];

/* Related pages: five live AU routes plus the US service page (all checked in src/app on 2026-10-29). */
const SIBLINGS: { href: string; t: string; d: string; go: string }[] = [
  { href: '/au/shopify-development', t: 'Shopify development Australia', d: 'New Shopify and Shopify Plus stores, custom themes, B2B and integrations, when you are building rather than moving.', go: 'Explore Shopify development →' },
  { href: '/au/ecommerce-development', t: 'Ecommerce development Australia', d: 'Not settled on Shopify yet? We compare it with the alternatives for your catalogue, channels and systems first.', go: 'Explore ecommerce →' },
  { href: '/au/ecommerce-seo', t: 'Ecommerce SEO Australia', d: 'Rankings protected before, during and after the move, then collection pages and content that win new traffic.', go: 'Explore ecommerce SEO →' },
  { href: '/au/website-maintenance', t: 'Website and store care', d: 'Optional support after launch: fixes, app updates and new sections, each change quoted and approved.', go: 'Explore store care →' },
  { href: '/au', t: 'FactoryJet Australia', d: 'Everything we do for Australian businesses: ecommerce, AI agents, websites and AI search.', go: 'Visit the Australia hub →' },
  { href: '/services/shopify-migration-agency', t: 'Shopify Plus migration (US)', d: 'Our US page on enterprise Shopify Plus migrations: ERP links, delta order sync and subscription contracts.', go: 'Read the US page →' },
];

export default function ShopifyMigrationAUPage() {
  return (
    <>
      <script id="ld-au-shopify-migration" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader locale="au" logoHref="/au" />
      <div className="aiAgentPage auPage auMigration">
      <nav className="crumbs" aria-label="Breadcrumb">
        <div className="wrap">
          {crumbs.map((item, index) => (
            <Fragment key={item.url}>
              {index > 0 && ' / '}
              {index === crumbs.length - 1 ? <b aria-current="page">{item.name}</b> : <a href={item.url}>{item.name}</a>}
            </Fragment>
          ))}
        </div>
      </nav>
      <main id="au-content">

        {/* ═══ HERO: copy + inline form left, spec panel right ═══ */}
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Shopify Migration Australia</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                Your store has outgrown its platform. Orders flow into Xero or MYOB, stock sits in Cin7 or
                Unleashed, listings go out to Amazon.com.au, Catch or Bunnings Marketplace, and shoppers pay with
                Afterpay or Zip. We move all of it to Shopify in a rehearsed order, keep every old web address
                working with a written redirect map, and show you a draft of your store on your own data before
                you sign.
              </p>
              <HeroInlineForm region="au" source="au_shopify_migration_hero" submitLabel="See a draft of my store" />
            </div>

            <form className="specpanel" aria-label="What every Shopify migration from FactoryJet includes">
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · EVERY MIGRATION</span>
                <span className="sys"><span>Magento, Neto, WooCommerce, BigCommerce</span><span>to Shopify and Shopify Plus</span></span>
              </div>
              <div className="workflow-controls">
                <label className="workflow-toggle" title="Pause or resume the animation">
                  <input type="checkbox" className="workflow-pause" aria-label="Pause animation" />
                  <svg className="pause-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="M5 3v10M11 3v10" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                  <svg className="play-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="m5 3 8 5-8 5Z" fill="currentColor" /></svg>
                </label>
                <button type="reset" className="workflow-replay" aria-label="Replay animation" title="Replay animation">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6a5 5 0 1 1 0 4M3 2v4h4" /></svg>
                </button>
              </div>
              <div className="specpanel-body" role="radiogroup" aria-label="Explore what every migration includes">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="au-migration-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[0]} /></svg></span>
                  <span className="idx">on your own products and customers</span>
                  <span className="title">A draft of your Shopify store</span>
                  <span className="tag">Before you sign</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="au-migration-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[1]} /></svg></span>
                  <span className="idx">tested with real orders and a refund</span>
                  <span className="title">Xero, MYOB, Afterpay, Australia Post</span>
                  <span className="tag">Reconnected</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="au-migration-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[2]} /></svg></span>
                  <span className="idx">every old address to its new home</span>
                  <span className="title">Redirect map, 301s and checks</span>
                  <span className="tag">In writing</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · A fixed price per phase, and defects after launch fixed inside the build price for a cover period agreed up front.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (verified facts only) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '100,000', t: 'URL redirects on a standard Shopify plan, 20 million on Plus', s: 'Shopify Help Center', u: SRC_REDIRECTS },
              { v: '2 to 5 yrs', t: 'of past orders Shopify suggests importing, at least your returns window', s: 'Shopify Plus launch checklist', u: SRC_PLUS_CHECKLIST },
              { v: '11 Aug 2026', t: 'standard support ended for Adobe Commerce 2.4.6', s: 'Adobe lifecycle policy', u: SRC_ADOBE_LIFECYCLE },
              { v: '$3M', t: 'annual turnover above which most businesses are covered by the Privacy Act 1988', s: 'OAIC, small business', u: SRC_OAIC_SMALL },
            ].map((r) => (
              <div className="ledgercell" key={r.t}>
                <div className="k"><a href={r.u} {...extLink}>{r.s}</a></div>
                <div className="v">
                  <strong className={/\d/.test(r.v) ? 'ledger-number' : 'ledger-word'}>{r.v}</strong>
                  {r.t}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="wrap byline">
          <div className="av">BB</div>
          <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
          <div className="upd">Last updated<br />29 October 2026</div>
        </div>

        {/* ═══ ANSWER FIRST (GEO) ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What does a Shopify migration involve for an Australian store?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">A Shopify migration moves your products, customers, orders, content and web addresses from your current platform to Shopify, then reconnects every system around the store.</span>{' '}
                    For an Australian business that means Xero or MYOB, Cin7 or Unleashed, Afterpay and Zip, Australia
                    Post, StarTrack or Sendle, and any marketplace you sell on. The data is the easy half. The
                    connections and the redirects decide whether sales and rankings survive the switch.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Three terms we use a lot</div>
                    <p>
                      A <b>redirect map</b> is a list matching every old web address to its new Shopify address. A{' '}
                      <b>301 redirect</b> is a permanent forwarding rule that tells Google a page moved rather than
                      vanished. <b>Cutover</b> is the hour your domain stops pointing at the old store and starts
                      pointing at Shopify.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    This page is for established companies with a working store, real order volume and systems
                    hanging off it: brands, wholesalers and retailers whose platform has become slow, costly to
                    patch or hard to hire for. If you are launching a brand new store instead, our{' '}
                    <a href="/au/shopify-development">Shopify development team in Australia</a> is the better
                    starting point.
                  </p>
                </div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">What moves, and how</div>
                <ul className="trigrows">
                  <li><span className="m">Products, variants, images</span><span className="t">First</span></li>
                  <li><span className="m">Customers and addresses</span><span className="t">Second</span></li>
                  <li><span className="m">Past orders, 2 to 5 years</span><span className="t">Third, by API</span></li>
                  <li><span className="m">Customer passwords</span><span className="t">Cannot move</span></li>
                  <li><span className="m">Gift card balances</span><span className="t">Right before launch</span></li>
                  <li><span className="m">Every old URL</span><span className="t">301 redirected</span></li>
                </ul>
                <p className="au-note">
                  Order of import from <a href={SRC_MIGRATE} {...extLink}>Shopify’s migration guide</a>; passwords from{' '}
                  <a href={SRC_CUSTOMER_IMPORT} {...extLink}>Shopify’s customer import notes</a>; order years and gift
                  cards from the <a href={SRC_PLUS_CHECKLIST} {...extLink}>Plus launch checklist</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SOURCE PLATFORMS → ruled rows ═══ */}
        <section className="section platforms" id="platforms">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Where you are moving from</div>
                <h2>Magento, Neto, WooCommerce and BigCommerce each break in a different place</h2>
              </div>
              <p>
                Shopify’s own migration guide covers WooCommerce, Wix, Squarespace and a handful of others. It has
                no guide for Magento, BigCommerce or Neto, which are three of the platforms Australian merchants
                most often leave. Here is what is specific to each.
              </p>
            </div>
            <div className="platlist" role="list">
              {PLATFORMS.map((p) => (
                <div key={p.n} className="plat plat-2col" role="listitem">
                  <span className="capid">{p.n}</span>
                  <div className="plat-name"><h3>{p.name}</h3></div>
                  <p className="plat-build">
                    {p.d} <a href={p.src} {...extLink}>Source: {p.srcLabel}</a>.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ WHAT CARRIES ACROSS → comparison table ═══ */}
        <section className="section comparison" id="what-moves">
          <div className="wrap">
            <div className="section-head head-split">
              <div className="eyebrow">Data and limits</div>
              <div>
                <h2>What carries across to Shopify, and what has to be rebuilt</h2>
                <p className="lead">
                  Most surprises in a migration come from a handful of Shopify rules nobody reads until launch week.
                  These are the ones we check on day one, each taken from Shopify’s own documentation.
                </p>
              </div>
            </div>
            <div className="tablewrap" role="region" tabIndex={0} aria-label="What moves to Shopify and what is rebuilt">
              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>What Shopify allows</th>
                    <th className="fj">What we do about it</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row">Customer passwords</th><td>Cannot be migrated by CSV</td><td className="fj">Launch email that walks customers through signing in</td></tr>
                  <tr><th scope="row">Customer CSV files</th><td>15 MB or smaller each</td><td className="fj">Split and checked against the old store’s counts</td></tr>
                  <tr><th scope="row">Past orders</th><td>Apps or API, after products and customers</td><td className="fj">Two to five years moved, older ones archived</td></tr>
                  <tr><th scope="row">Redirects</th><td>100,000 standard, 20,000,000 on Plus</td><td className="fj">Counted during the crawl, before the build</td></tr>
                  <tr><th scope="row">Blocked paths</th><td>No redirects from /shop, /cart, /orders and others</td><td className="fj">Old addresses on those paths planned around</td></tr>
                  <tr><th scope="row">Multipass single sign-on</th><td>New stores cannot get it</td><td className="fj">Customers told about the new sign-in before launch</td></tr>
                  <tr><th scope="row">Trade pricing</th><td>B2B companies on Basic, Grow, Advanced and Plus</td><td className="fj">Price lists and groups mapped, then tested as buyers</td></tr>
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              Sources, read 29 October 2026: <a href={SRC_CUSTOMER_IMPORT} {...extLink}>customer import</a>,{' '}
              <a href={SRC_MIGRATE} {...extLink}>migrating to Shopify</a>,{' '}
              <a href={SRC_REDIRECTS} {...extLink}>URL redirects</a>,{' '}
              <a href={SRC_MULTIPASS} {...extLink}>Multipass</a> and{' '}
              <a href={SRC_B2B} {...extLink}>Shopify B2B</a>.
            </p>
          </div>
        </section>

        {/* ═══ NUMBERED PROJECT STEPS → timeline (ordered list) ═══ */}
        <section className="section process" id="steps">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How a migration runs</div>
                <h2>Eight steps from your old platform to a live Shopify store</h2>
                <p className="lead">
                  An advanced build that includes a migration usually takes 5 to 8 weeks with us. Larger catalogues,
                  several stores or an ERP link take longer, and you get the timeline in writing once scope is agreed.
                </p>
              </div>
              <div className="au-panel">
                <div className="eyebrow">How it is priced</div>
                <ul className="trigrows">
                  <li><span className="m">Draft store on your data</span><span className="t">Before you sign</span></li>
                  <li><span className="m">Each phase</span><span className="t">Fixed price, signed on its own</span></li>
                  <li><span className="m">Defects after launch</span><span className="t">Inside the build price</span></li>
                  <li><span className="m">Shopify plan and apps</span><span className="t">Your account, at cost</span></li>
                  <li><span className="m">Support after the cover period</span><span className="t">Optional, no minimum</span></li>
                </ul>
              </div>
            </div>
            <ol className="timeline timeline-4">
              {STEPS.map((s) => (
                <li key={s.n} className="tnode">
                  <div className="idx">{s.n}</div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </li>
              ))}
            </ol>
            <p className="tablenote">
              Import order from <a href={SRC_MIGRATE} {...extLink}>Shopify’s migration guide</a>; TTL, gift card and
              checkout timing from the <a href={SRC_PLUS_CHECKLIST} {...extLink}>Shopify Plus launch checklist</a>.
            </p>
          </div>
        </section>

        <div className="au-midcta">
          <MidPageCTA
            headline={'Want to see your catalogue on Shopify before you commit?'}
            sub={'Tell us your platform, SKU count and the systems that touch an order. We build a draft store on a sample of your real products, and the founder walks you through it and the fixed price for the first phase.'}
            label={'See a draft of my store'}
          />
        </div>

        {/* ═══ AUSTRALIAN STACK → definition-style copy ═══ */}
        <section className="section facts" id="australian-stack">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">The systems around the store</div>
              <h2>Reconnecting Xero, MYOB, Cin7, Afterpay and your marketplaces</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  <b>Accounting.</b> Xero’s own Shopify integration syncs sales, payouts, fees and taxes into Xero
                  (<a href={SRC_XERO} {...extLink}>Xero App Store</a>). For MYOB Business, MYOB Acumatica or QuickBooks
                  Online we set up a connector that suits your file. Whichever you run, we agree with your bookkeeper whether
                  orders land one by one or as daily summaries, how GST and card fees are coded, and how refunds
                  post, then reconcile a test month before launch.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  <b>Stock and ERP.</b> If Cin7 Core (the system once called DEAR), Cin7 Omni, Unleashed, NetSuite or
                  Odoo owns your stock today, Shopify should read from it rather than keep its own count. We pick one owner per field before writing any
                  connector, because two systems both counting stock is how a migration oversells on its first
                  busy weekend.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  <b>Payments and delivery.</b> Afterpay’s Shopify setup needs the store address and currency to
                  match your Afterpay account region, so an Australian address and AUD{' '}
                  (<a href={SRC_AFTERPAY} {...extLink}>Afterpay developer docs</a>). Zip, Stripe or Shopify Payments,
                  and Australia Post, StarTrack or Sendle accounts are reconnected and tested to metro and regional
                  postcodes.
                </p></div>
                <div className="fact"><div className="sec">§04</div><p>
                  <b>Marketplaces.</b> Amazon.com.au, eBay, Catch, Kogan, MyDeal, Bunnings Marketplace and THE ICONIC
                  each need a new source of stock and a new path for orders. Neto merchants feel this most, because
                  the old platform ran many of those channels itself. We name one owner per channel and test an
                  order through each before cutover.
                </p></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">Privacy and customer data</div>
                <p className="au-panel-intro">
                  The OAIC says businesses with annual turnover above $3 million are generally covered by the
                  Privacy Act 1988. A migration copies every customer record you hold, so two principles matter:
                </p>
                <ul className="trigrows">
                  <li><span className="m">APP 8, disclosure overseas</span><span className="t">Steps before data leaves Australia</span></li>
                  <li><span className="m">APP 11, security</span><span className="t">Reasonable steps to protect it</span></li>
                  <li><span className="m">Working copies</span><span className="t">Deleted after launch</span></li>
                </ul>
                <p className="au-note">
                  Sources: <a href={SRC_OAIC_SMALL} {...extLink}>OAIC, small business</a> and{' '}
                  <a href={SRC_OAIC_APPS} {...extLink}>OAIC, APP quick reference</a>. We are not lawyers; your adviser
                  should review your privacy policy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ MARKET COST RANGES → ruled rows + split ═══ */}
        <section className="section platforms" id="cost">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">What the market charges</div>
                <h2>Published AUD ranges for a Shopify migration, from agencies working in Australia</h2>
              </div>
              <p>
                These are other firms’ published build figures in AUD, read on their own pages on 29 October 2026.
                Neither page says whether its figures include GST, so ask every agency you talk to.
              </p>
            </div>
            <div className="platlist" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>$5,000 to $60,000+</h3></div><p className="plat-build">Jaboo, a Shopify Premier Partner, for Shopify migrations in Australia overall, from a theme lift-and-shift to a re-platform. <a href={SRC_JABOO} {...extLink}>Jaboo cost guide</a>.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>$5,000 to $25,000+</h3></div><p className="plat-build">Jaboo’s figure for typical migration quotes from platforms such as Neto, depending on complexity. <a href={SRC_JABOO} {...extLink}>Jaboo cost guide</a>.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>$40,000+</h3></div><p className="plat-build">Jaboo’s tier for re-platforming with custom design, ERP or warehouse integration, B2B company accounts and price lists. <a href={SRC_JABOO} {...extLink}>Jaboo cost guide</a>.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">04</span><div className="plat-name"><h3>$45,000 to $160,000</h3></div><p className="plat-build">Perceptiv Digital, migration and build of a mid-level Shopify Plus store from Neto: upwards of 5,000 SKUs, one currency, one warehouse, one or two integrations. <a href={SRC_PERCEPTIV} {...extLink}>Perceptiv Neto to Shopify page</a>.</p></div>
            </div>
            <div className="au-split">
              <div>
                <h3>What moves the number</h3>
                <p>
                  Catalogue size and variant depth, how many years of orders move, how much custom behaviour the old
                  platform carried, how many systems touch an order, and whether trade pricing or Shopify Plus
                  features are in scope. A quote that does not itemise those five is not comparable with one that does.
                </p>
              </div>
              <div>
                <h3>How FactoryJet prices it</h3>
                <p>
                  FactoryJet quotes a fixed price in writing for each phase after a short scoping call, and states
                  whether GST is included. Each phase is signed on its own, so you are never committed to the whole
                  programme on day one.
                </p>
                <ModalCTAButton label="Get a fixed-scope migration quote" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ HOUSE TERMS + PROOF → ruled rows ═══ */}
        <section className="section platforms" id="terms">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Terms</div>
              <h2>How we work on a migration</h2>
              <p className="lead">
                The agencies that disappear after cutover are the real risk in a migration. Problems show up in
                week three, when a refund posts twice in Xero or a marketplace oversells. These terms exist so
                someone accountable is still there.
              </p>
            </div>
            <div className="platlist" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>A draft before you sign</h3></div><p className="plat-build">Working software on your own data, a draft store with a sample of your real products, before you commit to the full build.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Fixed price per phase</h3></div><p className="plat-build">Each phase is scoped, priced and signed on its own: discovery and draft, data and theme, integrations, cutover.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>Defect cover in the build price</h3></div><p className="plat-build">Defects found after launch are fixed inside the build price, for a cover period agreed before work starts.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">04</span><div className="plat-name"><h3>Your accounts, at cost</h3></div><p className="plat-build">The Shopify plan, apps and any hosting sit in your accounts, billed at cost with no markup from us. You own the code and the repository from day one.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">05</span><div className="plat-name"><h3>Support is optional</h3></div><p className="plat-build">After the cover period, each change is quoted and approved before we start. No monthly minimum.</p></div>
            </div>
            <div className="au-split">
              <div>
                <h3>Shopify work we have done</h3>
                <p>
                  <a href="/case-studies/shopholistico-shopify-store">Shop Holistico</a>, a US supplement brand, runs on
                  a custom Shopify theme we built, with Subscribe &amp; Save and a vitamin D and calcium bundle.{' '}
                  <a href="https://dtfvirginia.com/" {...extLink}>DTF Virginia</a>, a US print shop, runs on a custom
                  Shopify theme with gang sheet builders for each transfer size and a reseller sign-up.
                </p>
              </div>
              <div>
                <h3>Platforms we know from the inside</h3>
                <p>
                  We also build on WooCommerce, which is one of the platforms stores most often leave. We are building
                  Sow Easy’s trade store on WooCommerce, with stock, prices and SKUs coming from Odoo, so we know how
                  that data is shaped before we move it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ BRIEF / RFP ASK ═══ */}
        <section className="section facts" id="brief">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Have a brief or an RFP?</div>
              <h2>Send us your migration brief and get a written scope back</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  If you have already written a brief or an RFP, send it. Enter your name and work email in the form
                  at the top of this page, and the next step lets you attach a PDF or Word file up to 5 MB. The
                  founder, Bhavesh Barot, replies within 24 hours.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  No brief yet? These details let us scope a fixed price for the first phase on the first call: your
                  platform and version, SKU and variant counts, years of orders to keep, every system that touches an
                  order, marketplaces and payment methods, B2B rules, and the date you need to be live.
                </p></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">What a good brief names</div>
                <ul className="trigrows">
                  <li><span className="m">Platform and version</span><span className="t">e.g. Magento 2.4.6</span></li>
                  <li><span className="m">SKUs and variants</span><span className="t">Counts</span></li>
                  <li><span className="m">Order history to keep</span><span className="t">Years</span></li>
                  <li><span className="m">Accounting and stock</span><span className="t">Xero, MYOB, Cin7</span></li>
                  <li><span className="m">Channels</span><span className="t">Marketplaces, POS, B2B</span></li>
                  <li><span className="m">Target go-live</span><span className="t">Date</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ RELATED PAGES → agentdir ═══ */}
        <section className="section agentdir" id="more-services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Related FactoryJet services</div>
              <h2>Before and after the migration</h2>
            </div>
            <ul className="agentdir-grid">
              {SIBLINGS.map((s) => (
                <li key={s.href}>
                  <a href={s.href}>
                    <span className="agentdir-t">{s.t}</span>
                    <span className="agentdir-l">{s.d}</span>
                    <span className="agentdir-more">{s.go}</span>
                    <span className="agentdir-go" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ FAQ (same FAQ_ITEMS array as the FAQPage JSON-LD) ═══ */}
        <AuFaq
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          heading="Shopify migration questions Australian merchants ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ SOURCES ═══ */}
        <section className="section referencesSection references" id="references">
          <div className="wrap">
            <div className="eyebrow">Sources, read 29 October 2026</div>
            <div className="refs">
              <a href={SRC_MIGRATE} {...extLink}>Shopify, migrating to Shopify</a>
              <a href={SRC_STORE_MIGRATION_APP} {...extLink}>Shopify Store Migration app</a>
              <a href={SRC_CUSTOMER_IMPORT} {...extLink}>Shopify, importing customers</a>
              <a href={SRC_MULTIPASS} {...extLink}>Shopify, Multipass</a>
              <a href={SRC_REDIRECTS} {...extLink}>Shopify, URL redirects</a>
              <a href={SRC_PLUS_CHECKLIST} {...extLink}>Shopify Plus launch checklist</a>
              <a href={SRC_B2B} {...extLink}>Shopify B2B</a>
              <a href={SRC_PRICING} {...extLink}>Shopify Australia pricing</a>
              <a href={SRC_GOOGLE_MOVE} {...extLink}>Google, site moves with URL changes</a>
              <a href={SRC_ADOBE_LIFECYCLE} {...extLink}>Adobe Commerce lifecycle policy</a>
              <a href={SRC_BC_PRICE_LISTS} {...extLink}>BigCommerce price lists</a>
              <a href={SRC_WOO_PERMALINKS} {...extLink}>WooCommerce permalinks</a>
              <a href={SRC_MAROPOST_KB} {...extLink}>Maropost (Neto) knowledge base</a>
              <a href={SRC_XERO} {...extLink}>Xero App Store, Shopify by Xero</a>
              <a href={SRC_AFTERPAY} {...extLink}>Afterpay, Shopify pre-integration checks</a>
              <a href={SRC_OAIC_SMALL} {...extLink}>OAIC, small business</a>
              <a href={SRC_OAIC_APPS} {...extLink}>OAIC, APP quick reference</a>
              <a href={SRC_JABOO} {...extLink}>Jaboo, Shopify migration cost in Australia</a>
              <a href={SRC_PERCEPTIV} {...extLink}>Perceptiv Digital, Neto to Shopify</a>
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA (light) ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>Move to Shopify with your sales, your rankings and your books intact</h2>
              <p>
                Send your name and work email, and attach your brief if you have one. The founder replies within 24
                hours to book a short call about your platform, your systems and a fixed price for the first phase.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="See a draft of my store" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/au/shopify-development">See Shopify development</a>
            </div>
          </div>
        </section>

      </main>
      </div>
      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}
