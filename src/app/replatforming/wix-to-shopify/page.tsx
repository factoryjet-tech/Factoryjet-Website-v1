import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import EnterpriseArchitectureBlueprint from '@/components/v2/EnterpriseArchitectureBlueprint';
import AuthorCard from '@/components/v2/AuthorCard';
import CommerceRoiCalculator from '@/components/v2/CommerceRoiCalculator';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-10-22';

const PAGE_TITLE = 'Migrate from Wix to Shopify: Exports & 301s | FactoryJet';
const PAGE_DESC =
  'How to migrate from Wix to Shopify: what Wix exports (products, customers, orders), what it will not (blog posts, reviews) and how every old URL gets a 301.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: 'https://factoryjet.com/replatforming/wix-to-shopify',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Wix to Shopify migration' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/replatforming/wix-to-shopify' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* Official sources, all opened and read on 22 Oct 2026. */
const SRC = {
  shopifyWix: { label: 'Shopify Help: Migrate from Wix', url: 'https://help.shopify.com/en/manual/migrating-to-shopify/migrating-from-wix' },
  wixProducts: { label: 'Wix Help: Exporting products', url: 'https://support.wix.com/en/article/wix-stores-exporting-products' },
  wixOrders: { label: 'Wix Help: Exporting orders', url: 'https://support.wix.com/en/article/wix-stores-exporting-orders' },
  wixBlog: { label: 'Wix Help: Blog export request', url: 'https://support.wix.com/en/article/wix-blog-request-exporting-blog-posts-to-other-platforms' },
  wixBlogUrls: { label: 'Wix Help: Blog post URLs', url: 'https://support.wix.com/en/article/wix-blog-about-blog-post-web-addresses-urls' },
  wixProductSeo: { label: 'Wix Help: Product page SEO', url: 'https://support.wix.com/en/article/wix-stores-seo-for-product-pages' },
  wixDomain: { label: 'Wix Help: Transfer your domain away', url: 'https://support.wix.com/en/article/transferring-your-wix-domain-away-from-wix-2477749' },
  shopifyProducts: { label: 'Shopify Help: Import products', url: 'https://help.shopify.com/en/manual/products/import-export/import-products' },
  shopifyCustomers: { label: 'Shopify Help: Import customers', url: 'https://help.shopify.com/en/manual/customers/import-export-customers' },
  shopifyRedirects: { label: 'Shopify Help: URL redirects', url: 'https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect' },
  shopifyArticleUrl: { label: 'Shopify Dev: blog object', url: 'https://shopify.dev/docs/api/liquid/objects/blog' },
  shopifyPricing: { label: 'Shopify: Pricing', url: 'https://www.shopify.com/pricing' },
  storeMigrationApp: { label: 'Shopify App Store: Store Migration', url: 'https://apps.shopify.com/store-migration' },
  wixPlans: { label: 'Wix: Plans', url: 'https://www.wix.com/plans' },
  shopifyBuyButton: { label: 'Shopify Help: Buy Button', url: 'https://help.shopify.com/en/manual/online-sales-channels/buy-button' },
};

const EXT_LINK = { color: '#141414', textDecoration: 'underline', textUnderlineOffset: '2px' } as const;

const FAQ_CATEGORIES = [
  { key: 'wix-move-planning', label: 'Planning the Wix Move' },
  { key: 'wix-store-data', label: 'Products, Customers & Orders' },
  { key: 'wix-blog-and-pages', label: 'Blog, Pages & Reviews' },
  { key: 'wix-urls-and-redirects', label: 'Wix URLs & 301 Redirects' },
  { key: 'wix-domain-and-launch', label: 'Wix Domain & Launch Day' },
  { key: 'wix-cost-and-timing', label: 'Cost & Timeline' },
];

const FAQ_ITEMS = [
  {
    category: 'wix-move-planning',
    question: 'How do I migrate from Wix to Shopify?',
    answer:
      'Export your products from the Wix Product tab as a CSV, then import them in Shopify under Products > Import. Move customers and order history next, by CSV or a migration app. Rebuild blog posts and reviews, because Wix does not export them. Then set up shipping, taxes and payments, place test orders, add a 301 redirect for every old Wix URL and connect your domain. Shopify’s own Wix guide lists 19 steps in roughly that order.',
  },
  {
    category: 'wix-move-planning',
    question: 'Can you transfer a whole Wix website to Shopify?',
    answer:
      'Only part of it moves as data. Products, customers and orders come out of Wix as CSV files and go into Shopify. The Wix design does not: Shopify runs its own themes, so the look is rebuilt in a Shopify theme. Wix blog posts have no export, and Shopify’s guide says Wix reviews cannot be exported either. So a Wix transfer means files for the store data, a rebuild for design and content, and redirects for the URLs.',
  },
  {
    category: 'wix-move-planning',
    question: 'Is there a free way to move a Wix store to Shopify?',
    answer:
      'Yes, if you do the work yourself. The Wix product, customer and order exports and the Shopify CSV importer are built into both admins. Shopify’s free Store Migration app lists Wix as a source and moves product and customer data, though Shopify’s Wix guide says it is in early access and open only to some stores on desktop. The real cost is your time: re-mapping CSV columns, rebuilding posts by hand and writing the redirect list.',
  },
  {
    category: 'wix-move-planning',
    question: 'Why do store owners leave Wix for Shopify?',
    answer:
      'The usual reasons are app choice, checkout options and selling on more channels from one admin. Wix is a website builder with a store added; Shopify is built around the store. A move makes sense when product sales, not the brochure pages, pay the bills. If your Wix site is mostly content with a handful of products, staying on Wix or adding a Shopify Buy Button can be the cheaper choice.',
  },
  {
    category: 'wix-move-planning',
    question: 'What are the downsides of Shopify compared with Wix?',
    answer:
      'Watch for these before you switch. Shopify’s blog is simpler: you organize posts with tags, and a post author must be the store owner or a staff account. Many features come from apps, some paid, rather than being built in. And Shopify URLs follow fixed patterns such as /products/ and /blogs/, so every Wix URL needs a redirect. None of these block a move, but price the apps you need first.',
  },
  {
    category: 'wix-move-planning',
    question: 'Can I keep my Wix site and sell through Shopify instead?',
    answer:
      'Yes. Shopify’s Buy Button sales channel adds products to an external website or blog post, and Shopify says it is included in all subscription plans. That lets a Wix content site send shoppers to Shopify checkout without a full move. It works well for a few products. Past that, you run two systems with two logins and two sets of reports, and a full migration is usually simpler.',
  },
  {
    category: 'wix-store-data',
    question: 'How do I transfer products from Wix to Shopify?',
    answer:
      'In Wix, open the Product tab, select all products, then choose More Actions > Export. Wix exports up to 5,000 rows per CSV file, so a big catalog leaves in batches. Re-map the columns to Shopify’s product CSV template and import under Products > Import. Keep each file under Shopify’s 15 MB limit, and clear “Publish new products to all sales channels” until you have checked prices, weights and stock.',
  },
  {
    category: 'wix-store-data',
    question: 'Which Wix product data does not come across?',
    answer:
      'Digital products are the first gap: Wix says exporting them is not currently supported, so download files are re-uploaded by hand. Products with more than 3 options lose those options on import, per Shopify’s Wix guide, and prices by location are not supported. In the audit we list every product that hits one of these limits, so nothing drops out without you knowing.',
  },
  {
    category: 'wix-store-data',
    question: 'Can I move Wix customer accounts and passwords?',
    answer:
      'Customer records move; passwords do not. Shopify says you cannot migrate customer passwords from another store by CSV, so each customer sets a new one from an account invite. The Wix file, WixCustomerDownload.csv, also cannot be imported without editing, and Shopify offers no column mapping for customer CSVs. We rebuild the file to Shopify’s headings and keep the email marketing consent column intact.',
  },
  {
    category: 'wix-store-data',
    question: 'Can Wix order history move to Shopify?',
    answer:
      'Yes, through a migration app. Wix exports orders to CSV with either one row per item or one row per order, and purchase times are always in UTC. Shopify’s Wix guide points to third-party apps in the Shopify App Store for importing that history. Before the import, switch off new order notifications, or staff get an email for every old order that lands.',
  },
  {
    category: 'wix-blog-and-pages',
    question: 'Can I export my Wix blog to Shopify?',
    answer:
      'Not with a Wix tool. The Wix Help Center says it is “not possible to export blog posts to other platforms.” So each post is captured from the live site: title, body, images, publish date and slug. We rebuild it as a Shopify blog article, re-upload the images to Shopify and add the old /post/ URL to the redirect map. For blogs with hundreds of posts we script the capture rather than copy and paste.',
  },
  {
    category: 'wix-blog-and-pages',
    question: 'What happens to my Wix product reviews?',
    answer:
      'They do not move by export. Shopify’s Wix guide states that you cannot export or migrate reviews from Wix to Shopify. You can start fresh with a Shopify review app, or copy the published review text from your live product pages, with your sign-off, and load it into the review app with its original dates. We never label copied reviews as verified purchases.',
  },
  {
    category: 'wix-blog-and-pages',
    question: 'Will my Wix design carry over to Shopify?',
    answer:
      'No. Wix layouts do not run on Shopify. Your store gets a Shopify theme, either an existing theme set up to match your brand or a custom build. FactoryJet builds custom-theme stores in 3 to 5 weeks and migrations in 5 to 8 weeks. Before you sign, you see a working demo running on your own products.',
  },
  {
    category: 'wix-blog-and-pages',
    question: 'What about Wix pages such as About, FAQ and Shipping?',
    answer:
      'Static pages are copied into Shopify pages. Shopify’s migration notes say single pages such as shipping or refund policies can usually be pasted in by hand. We move each one, keep its headings and images and redirect the old Wix path. Forms, bookings and other Wix app widgets do not come across, so we rebuild them with Shopify apps you approve.',
  },
  {
    category: 'wix-urls-and-redirects',
    question: 'Will I lose Google rankings when I move from Wix to Shopify?',
    answer:
      'Expect some movement after any platform change; nobody can promise none. What protects rankings is a one-to-one 301 map, where each old URL points straight to its closest new page in one hop. We pull every URL from your Wix sitemap and Search Console, map each one, and test them again after launch. Page titles, meta descriptions and image alt text move with the content.',
  },
  {
    category: 'wix-urls-and-redirects',
    question: 'How do Wix URLs map to Shopify URLs?',
    answer:
      'Wix product pages use /product-page/ before the product slug by default, and blog posts use /post/. Shopify uses /products/{handle} for products and /blogs/{blog-name}/{handle} for articles. Neither Wix prefix can be kept, so each old path gets its own 301. If you renamed the Wix prefixes in SEO Settings, we read your live sitemap and map the prefix you actually use.',
  },
  {
    category: 'wix-urls-and-redirects',
    question: 'How many redirects can Shopify hold?',
    answer:
      'Shopify allows 100,000 URL redirects on standard plans and 20,000,000 on Shopify Plus. Few Wix stores come close. The catch is that Shopify redirects only work from broken URLs: if a live Shopify page already sits at the old path, the redirect never fires. Shopify also blocks redirects from any URL that begins with /shop. That is why we test every redirect after launch rather than trusting the import.',
  },
  {
    category: 'wix-urls-and-redirects',
    question: 'Do the redirects I set up in Wix carry over?',
    answer:
      'No. Redirects made in Wix SEO tools live in your Wix account and stop working once your domain points to Shopify. We copy them out before launch, merge them into the new map and collapse old chains, so a URL that used to hop twice now goes to its final Shopify page in a single 301.',
  },
  {
    category: 'wix-domain-and-launch',
    question: 'How do I transfer my domain from Wix to Shopify?',
    answer:
      'In Wix, open Domains and choose to transfer the domain away. Wix emails a transfer authorization (EPP) code to the domain’s registrant contact; you enter that code at Shopify or your new registrar. Wix says a transfer usually takes up to 7 days. Changing registrant contact details locks the domain from transfer for 60 days, so update contacts after the move, not before.',
  },
  {
    category: 'wix-domain-and-launch',
    question: 'Can I point my Wix domain to Shopify without transferring it?',
    answer:
      'Yes. You can keep the domain registered at Wix and point it to Shopify with DNS records, which avoids transfer delays and the 60-day lock risk. Wix also supports custom nameservers if you want DNS managed elsewhere. We usually point the domain first, launch, and transfer it later only if you want everything in one account.',
  },
  {
    category: 'wix-domain-and-launch',
    question: 'How do you keep the store selling on launch day?',
    answer:
      'We build the Shopify store while Wix stays live. On launch day we import the orders and customers created since the first export, switch DNS, then check checkout, notification emails and redirects. Your Wix plan stays active until those checks pass, so going back is a DNS change rather than a rebuild.',
  },
  {
    category: 'wix-cost-and-timing',
    question: 'How much does a Wix to Shopify migration cost?',
    answer:
      'It depends on product count, how many products exceed 3 options, blog size and which Wix app features need a Shopify replacement. FactoryJet quotes a fixed price in writing after a short scoping call. Defects are fixed inside the build price for a cover period agreed before work starts, and support afterwards is optional with no monthly minimum.',
  },
  {
    category: 'wix-cost-and-timing',
    question: 'How long does a Wix to Shopify migration take?',
    answer:
      'FactoryJet migrations run 5 to 8 weeks from signed scope to launch. A small catalog with no blog sits at the short end. Hundreds of blog posts, digital products or several Wix apps to replace push it toward the long end. Across 500+ businesses since 2014, 97% of our projects have shipped on time.',
  },
  {
    category: 'wix-cost-and-timing',
    question: 'Should I hire help or migrate from Wix myself?',
    answer:
      'A store with a few hundred products, no blog and no order history to keep is a fair do-it-yourself job using Shopify’s Wix guide. Get help when you have a large blog to rebuild, products with more than 3 options, digital downloads, or search traffic you cannot afford to lose. The scoping call is free and you keep the URL audit either way.',
  },
];

const STAT_CARDS = [
  { num: '5,000', title: 'Rows per Wix CSV', desc: 'Wix exports products in files of up to 5,000 rows, so large catalogs leave in batches.', icon: '📄', src: SRC.wixProducts },
  { num: '0', title: 'Blog export tools in Wix', desc: 'Wix says blog posts cannot be exported to other platforms. We rebuild them from the live site.', icon: '📝', src: SRC.wixBlog },
  { num: '3', title: 'Options per product', desc: 'Shopify’s Wix guide: products with more than 3 options lose them on import.', icon: '🧩', src: SRC.shopifyWix },
  { num: '1-to-1', title: 'Redirect map', desc: 'Each /product-page/ and /post/ URL gets its own single-hop 301 in Shopify.', icon: '🔗', src: SRC.shopifyRedirects },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Wix Blog Posts Have No Export Button',
    problem: 'Wix states that blog posts cannot be exported to other platforms. Copying them by hand loses publish dates, image alt text and slugs.',
    solution: 'We capture each post from the live site, rebuild it as a Shopify article with its original date, and keep the old /post/ slug in the redirect map.',
  },
  {
    num: '02',
    title: 'The Customer File Needs Rebuilding Before Import',
    problem: 'WixCustomerDownload.csv will not import into Shopify unedited, Shopify has no column mapping for customer files, and passwords never transfer.',
    solution: 'We rewrite the file to Shopify headings, keep marketing consent per customer, and plan the account invite email with you.',
  },
  {
    num: '03',
    title: 'Products With More Than Three Options',
    problem: 'Shopify’s Wix guide says products with more than 3 options will not have their options imported, and digital products do not export from Wix at all.',
    solution: 'We list every affected product in the audit, remodel the options before import and re-upload digital files so each product sells on day one.',
  },
  {
    num: '04',
    title: 'Reviews and Wix App Features Stay Behind',
    problem: 'Shopify confirms that Wix reviews cannot be exported or migrated, and forms, bookings and other Wix app widgets do not come across.',
    solution: 'We list each Wix app in use, pick a Shopify app you approve to replace it, and move published review text only with your sign-off.',
  },
];

const PARTNERS = [
  'Shopify Partner (registered)',
  'Wix Stores product CSV',
  'WixCustomerDownload.csv',
  'Shopify product importer',
  'Shopify URL redirects',
  'Shopify Buy Button',
  'Google Search Console',
  'Klaviyo',
];

const MIGRATION_STEPS = [
  {
    n: '01',
    t: 'Crawl the live Wix site and Search Console',
    d: 'We list every URL Wix serves: /product-page/ items, /post/ articles, static pages and any prefix you renamed. Search Console tells us which ones earn clicks.',
    icon: '🔍',
  },
  {
    n: '02',
    t: 'Export products from the Wix Product tab',
    d: 'Select all, then More Actions > Export. Catalogs over 5,000 rows go out in several files. Digital products are listed separately, since Wix does not export them.',
    icon: '📦',
  },
  {
    n: '03',
    t: 'Remodel options and re-map columns',
    d: 'Products with more than 3 options are split or rebuilt. Columns are mapped to Shopify’s template, and each file stays under the 15 MB limit.',
    icon: '🧩',
  },
  {
    n: '04',
    t: 'Import to Shopify with publishing switched off',
    d: 'We clear “Publish new products to all sales channels” so nothing goes live early, then check price, weight and stock against the Wix file line by line.',
    icon: '⬆️',
  },
  {
    n: '05',
    t: 'Rebuild the customer file and import it',
    d: 'WixCustomerDownload.csv is rewritten to Shopify headings with consent kept. Passwords do not transfer, so the invite email is drafted now.',
    icon: '👥',
  },
  {
    n: '06',
    t: 'Load order history with notifications off',
    d: 'The Wix order CSV (times in UTC) goes in through a migration app after new order notifications are switched off for staff.',
    icon: '🧾',
  },
  {
    n: '07',
    t: 'Capture and rebuild every Wix blog post',
    d: 'Title, body, images, publish date and slug are captured from the live site and posted as Shopify articles under the blog handle you choose.',
    icon: '📝',
  },
  {
    n: '08',
    t: 'Build the Shopify theme and replace Wix apps',
    d: 'Your theme is built and shown to you as a working demo on your own products. Each Wix app widget gets a Shopify app you approve.',
    icon: '💻',
  },
  {
    n: '09',
    t: 'Write and test the 301 map',
    d: 'Every old Wix URL maps to one Shopify URL in a single hop. Redirects you had inside Wix are merged in, and chains are collapsed.',
    icon: '🔗',
  },
  {
    n: '10',
    t: 'Point the domain, re-sync and check',
    d: 'We import orders placed since the first export, point DNS to Shopify, then test checkout, emails and redirects before your Wix plan is closed.',
    icon: '🚀',
  },
];

const URL_PATTERNS = [
  { from: '/product-page/{slug}', to: '/products/{handle}', note: 'Wix default product prefix, removable in Wix SEO Settings, so we check what your site uses.' },
  { from: '/post/{slug}', to: '/blogs/news/{handle}', note: 'Wix default post prefix. The Shopify blog handle is your choice; “news” is only the usual default.' },
  { from: '/blog (the Wix blog page)', to: '/blogs/news', note: 'Category and tag archive pages are mapped to the closest Shopify blog or tag view.' },
  { from: '/about, /shipping, /faq', to: '/pages/about, /pages/shipping, /pages/faq', note: 'Static Wix pages move as Shopify pages with their copy and images.' },
  { from: 'Any old URL starting with /shop', to: 'A rule outside Shopify', note: 'Shopify blocks redirects from URLs that begin with /shop, so a Wix shop page at /shop needs a rule at your DNS or CDN provider.' },
  { from: 'Redirects already set in Wix', to: 'Merged into the Shopify map', note: 'Chains are collapsed so each old URL reaches its final page in one 301.' },
];

const BEFORE_YOU_START = [
  'Count your products and variants, and note any with more than 3 options.',
  'List every Wix app on the site: forms, bookings, reviews, loyalty, pop-ups.',
  'Copy out any redirects you already set up in Wix before anything changes.',
  'Check who the registrant contact is on your domain, and leave it unchanged until launch.',
  'Export a Search Console report of pages with clicks in the last 12 months.',
];

const ASK_A_PARTNER = [
  'How will you move my Wix blog posts when Wix has no export for them?',
  'What happens to products with more than three options?',
  'Will you send me the full redirect map before launch, one row per old URL?',
  'Who writes the customer account invite email, and when does it go out?',
  'Is the price fixed per phase, and what is the defect cover period?',
  'Can I see a working demo on my own products before I sign?',
];

const RELATED_LINKS = [
  { href: '/services/shopify-migration-agency', label: 'Shopify migration agency: scope, process and what a fixed quote covers' },
  { href: '/services/shopify-seo', label: 'Shopify SEO after a migration: redirects, Search Console and indexing' },
  { href: '/services/shopify-theme-development', label: 'Shopify theme development to replace your Wix design' },
  { href: '/replatforming/squarespace-to-shopify', label: 'Squarespace to Shopify: a store that exports its blog as XML' },
  { href: '/replatforming/wordpress-to-shopify', label: 'WordPress to Shopify: moving a large blog with its permalinks' },
  { href: '/tools/replatforming-cost-calculator', label: 'Replatforming cost calculator' },
  { href: '/blog/ecommerce-replatforming-without-losing-seo-2026', label: 'Replatforming without losing SEO: the redirect checklist' },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
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
  name: 'Wix to Shopify Migration',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  serviceType: 'Wix Stores to Shopify migration',
  description:
    'Moves Wix Stores products, customers and order history to Shopify, rebuilds Wix blog posts that Wix cannot export, and maps every /product-page/ and /post/ URL to a single-hop 301.',
  areaServed: ['US', 'GB', 'CA', 'AU'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Replatforming Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Wix to Shopify Migration',
        },
      },
    ],
  },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: PAGE_TITLE,
  description: PAGE_DESC,
  url: 'https://factoryjet.com/replatforming/wix-to-shopify',
  dateModified: PAGE_MODIFIED,
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
};

const ORG_SCHEMA = { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' };

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/' },
    { '@type': 'ListItem', position: 2, name: 'Replatforming', item: 'https://factoryjet.com/replatforming' },
    { '@type': 'ListItem', position: 3, name: 'Wix to Shopify', item: 'https://factoryjet.com/replatforming/wix-to-shopify' },
  ],
};


const EVALUATION_CRITERIA = [
  {
    label: 'Wix blog posts',
    factoryjet: 'Every /post/ article rebuilt from the live site with its date, images and alt text, and its slug kept in the redirect map.',
    traditional: 'Blog skipped, or text pasted in without images, dates or redirects.',
  },
  {
    label: 'Old Wix URLs',
    factoryjet: 'One row per old URL, each a single-hop 301 to its closest Shopify page, tested after launch.',
    traditional: 'Every old URL sent to the homepage, which search engines treat like a missing page.',
  },
  {
    label: 'Customer file',
    factoryjet: 'WixCustomerDownload.csv rewritten to Shopify headings with consent kept, plus a planned account invite.',
    traditional: 'Raw file uploaded, rows rejected, and customers left to find out at checkout that their login is gone.',
  },
  {
    label: 'Price and accountability',
    factoryjet: 'Fixed price per phase, a working demo on your products before you sign, defects fixed inside the build price.',
    traditional: 'Open hourly billing, with the redirect work often left out of the estimate.',
  },
];

export default function WixToShopifyPage() {
  return (
    <>
      <script id="wix-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="wix-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="wix-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="wix-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="wix-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">

        {/* ── 01. RITOVEX HERO BANNER SECTION ── */}
        <section className="pp-sec" style={{ paddingTop: 'clamp(44px, 7vh, 88px)', paddingBottom: 'clamp(44px, 6vh, 72px)', background: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div className="rv-hero-wrap">

              {/* Left Column Typography */}
              <div>
                <div className="rv-badge" style={{ marginBottom: '18px' }}>
                  <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                  </svg>
                  <span>Wix to Shopify Migration</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Migrate from Wix to Shopify, Including the Blog Wix Won’t Export
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  To migrate from Wix to Shopify, export products from the Wix Product tab as a CSV (up to 5,000 rows per file), import them in Shopify, then move customers and orders by CSV or app. Wix cannot export blog posts or reviews, so those are rebuilt. Finish by giving every /product-page/ and /post/ URL its own 301 redirect.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Free Wix URL Audit" region="us" btnVariant="primary-dark" />
                  <a href="#wix-export-table" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>What Wix Exports</span>
                  </a>
                </div>

                <p style={{ fontSize: '13px', color: '#6E6E80', margin: '20px 0 0' }}>
                  Updated 22 October 2026 · Bhavesh Barot, Founder
                </p>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame (Edge-to-Edge) */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/replatforming/wix-hero-owner.webp"
                  alt="An older shop owner writing in a paper ledger beside a laptop on the counter"
                  width={640}
                  height={640}
                  priority
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

            </div>
          </div>
        </section>

        {/* ── 02. RITOVEX PARTNERS / TECHNOLOGY MARQUEE TICKER ── */}
        <section style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC', padding: '36px 0' }}>
          <div className="pp-wrap">
            <div className="rv-ticker-header">
              <div className="rv-ticker-line" />
              <div className="rv-ticker-label">Files and Tools in a Wix to Shopify Move</div>
              <div className="rv-ticker-line" />
            </div>

            <div className="rv-marquee-wrapper">
              <div className="rv-marquee">
                {PARTNERS.concat(PARTNERS).map((p, idx) => (
                  <div key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '36px' }}>
                    <span style={{ fontSize: '14.5px', fontWeight: 700, color: '#141414', letterSpacing: '-0.01em' }}>
                      {p}
                    </span>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FF5622' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 03. RITOVEX ABOUT US & 2x2 BENTO COUNTER SECTION ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(56px, 8vh, 96px) 0' }}>
          <div className="pp-wrap">
            <div className="rv-about-grid">

              {/* Left Column: Clean Organic Curved Photo Frame (Edge-to-Edge) */}
              <div className="rv-curved-frame-2">
                <Image
                  src="/images/replatforming/wix-team-devs.webp"
                  alt="FactoryJet migration engineers reviewing product inventory and multi-channel sync"
                  width={640}
                  height={640}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Right Column: 2x2 Bento Counter Grid + Discovery CTA Button */}
              <div>
                <div className="rv-badge" style={{ marginBottom: '14px' }}>
                  <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                  </svg>
                  <span>About FactoryJet</span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
                  Four Wix Limits That Shape Every Plan
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  A Wix move is decided by what Wix lets you take with you. FactoryJet has served 500+ businesses since 2014 and is a registered Shopify Partner. We plan each Wix job around the four limits below, then show you a working Shopify demo on your own products before you sign.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                  {STAT_CARDS.map((s) => (
                    <div className="rv-stat-card-bento" key={s.title}>
                      <div className="rv-stat-icon-outline">
                        <span style={{ fontSize: '20px' }}>{s.icon}</span>
                      </div>
                      <div style={{ fontFamily: 'var(--pp-display)', fontSize: 'clamp(24px, 3.2vw, 32px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.02em', lineHeight: 1 }}>
                        {s.num}
                      </div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#141414', marginTop: '6px' }}>
                        {s.title}
                      </div>
                      <p style={{ fontSize: '12.5px', color: '#6E6E80', margin: '4px 0 0', lineHeight: 1.45 }}>
                        {s.desc}{' '}
                        <a href={s.src.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>Source</a>
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom Actions: Discovery Call CTA Button */}
                <div style={{ marginTop: '32px' }}>
                  <ModalCTAButton label="Schedule Discovery Call" region="us" btnVariant="primary-dark" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 04. WHY LEAVE WIX (RITOVEX NUMBERED SERVICES ROWS) ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Where Wix Moves Go Wrong</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                The Wix Data That Needs Extra Work
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Products leave Wix easily. These four do not, and they are where do-it-yourself moves lose posts, logins and reviews.
              </p>
            </div>

            <div style={{ maxWidth: '960px', margin: '0 auto' }}>
              {PAIN_POINTS.map((p) => (
                <div className="rv-service-row" key={p.num}>
                  <div className="rv-service-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <span className="rv-service-num">{p.num}</span>
                      <h3 className="rv-service-title">{p.title}</h3>
                    </div>
                    <div className="rv-arrow-circle">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 10L10 2M10 2H4M10 2V8" />
                      </svg>
                    </div>
                  </div>
                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #F0F0F5', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.08em' }}>On Wix:</span>
                      <p style={{ fontSize: '13.5px', color: '#494852', margin: '4px 0 0', lineHeight: 1.5 }}>{p.problem}</p>
                    </div>
                    <div>
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#FF5622', letterSpacing: '0.08em' }}>What we do:</span>
                      <p style={{ fontSize: '13.5px', color: '#141414', fontWeight: 600, margin: '4px 0 0', lineHeight: 1.5 }}>{p.solution}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="rv-service-row">
                <h3 className="rv-service-title" style={{ margin: '0 0 12px' }}>Before you start: a Wix owner’s checklist</h3>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', color: '#494852', lineHeight: 1.6 }}>
                  {BEFORE_YOU_START.map((item) => (
                    <li key={item} style={{ marginBottom: '6px' }}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 05. THE ENTERPRISE ARCHITECTURE BLUEPRINT (AUTO-ROTATING TABS) ── */}

        <div id="architecture-blueprint">
          <EnterpriseArchitectureBlueprint
            badge="// WIX STORES TO SHOPIFY DATA MAP"
            title="How Wix Store Data Lands in Shopify"
            subtitle="Products and customers by CSV, order history through an app, blog posts captured from the live site, and a 301 for every /product-page/ and /post/ URL."
            legacySource="Wix Stores"
            targetStack="Shopify"
            ctaLabel="Book a Wix Migration Scoping Call"
            region="us"
          />
        </div>

        {/* ── 06. RITOVEX SIDE-BY-SIDE COMPARISON TABLE ── */}
        <section className="pp-sec" id="wix-export-table" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Sourced From Wix and Shopify Help</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                What Wix Exports, and Where It Lands in Shopify
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Each row comes from the official Wix or Shopify help page linked beside it. We read every page on 22 October 2026.
              </p>
            </div>

            <div style={{ overflowX: 'auto', borderRadius: '14px', border: '1px solid #E6E6EC' }}>
              <table className="pp-table" style={{ margin: 0, width: '100%', background: '#FFFFFF' }}>
                <thead style={{ background: '#F6F6F9' }}>
                  <tr>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Data</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>What Wix gives you</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Where it goes in Shopify</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Source (checked 22 Oct 2026)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Products</td>
                    <td>CSV from the Product tab, up to 5,000 rows per file. Digital products cannot be exported.</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Products &gt; Import. A product CSV cannot exceed 15 MB.</td>
                    <td><a href={SRC.wixProducts.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.wixProducts.label}</a>; <a href={SRC.shopifyProducts.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.shopifyProducts.label}</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Product options</td>
                    <td>Wix option sets per product</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Products with more than 3 options will not have their options imported. Prices by location are not supported.</td>
                    <td><a href={SRC.shopifyWix.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.shopifyWix.label}</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Customers</td>
                    <td>WixCustomerDownload.csv</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Must be edited before import; no column mapping. Passwords cannot be migrated. File limit 15 MB.</td>
                    <td><a href={SRC.shopifyWix.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.shopifyWix.label}</a>; <a href={SRC.shopifyCustomers.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.shopifyCustomers.label}</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Orders</td>
                    <td>CSV, one row per item or one row per order. Purchase times are in UTC.</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Order history imported with a third-party app from the Shopify App Store.</td>
                    <td><a href={SRC.wixOrders.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.wixOrders.label}</a>; <a href={SRC.shopifyWix.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.shopifyWix.label}</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Blog posts</td>
                    <td>No export. Wix: not possible to export blog posts to other platforms.</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Rebuilt as articles under /blogs/&#123;blog-handle&#125;/.</td>
                    <td><a href={SRC.wixBlog.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.wixBlog.label}</a>; <a href={SRC.shopifyArticleUrl.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.shopifyArticleUrl.label}</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Reviews</td>
                    <td>Cannot be exported or migrated from Wix to Shopify.</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Restarted in a Shopify review app, or re-entered with your sign-off.</td>
                    <td><a href={SRC.shopifyWix.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.shopifyWix.label}</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>URLs</td>
                    <td>Products under /product-page/ and posts under /post/ by default.</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Up to 100,000 redirects (20,000,000 on Plus). Redirects work only from broken URLs.</td>
                    <td><a href={SRC.wixProductSeo.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.wixProductSeo.label}</a>; <a href={SRC.wixBlogUrls.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.wixBlogUrls.label}</a>; <a href={SRC.shopifyRedirects.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.shopifyRedirects.label}</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Domain</td>
                    <td>EPP code sent to the registrant email. Transfer usually takes up to 7 days. Contact changes lock it for 60 days.</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Point DNS to Shopify first; transfer later if you want one bill.</td>
                    <td><a href={SRC.wixDomain.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.wixDomain.label}</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Migration app</td>
                    <td>Wix is listed as a source in Shopify’s Store Migration app.</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Free app by Shopify; moves product and customer data. The older Store Importer app is no longer available.</td>
                    <td><a href={SRC.storeMigrationApp.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.storeMigrationApp.label}</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Monthly platform fee</td>
                    <td>Core $29, Business $39, Business Elite $159 per month, billed yearly.</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Basic $39/mo monthly or $29/mo yearly; Grow $105 or $89; Advanced $399 or $359 (USD).</td>
                    <td><a href={SRC.wixPlans.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.wixPlans.label}</a>; <a href={SRC.shopifyPricing.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.shopifyPricing.label}</a></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ maxWidth: '960px', margin: '40px auto 0' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#141414', margin: '0 0 12px' }}>Wix URL patterns in the 301 map</h3>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', color: '#494852', lineHeight: 1.6 }}>
                {URL_PATTERNS.map((u) => (
                  <li key={u.from} style={{ marginBottom: '8px' }}>
                    <strong style={{ color: '#141414' }}>{u.from}</strong> to <strong style={{ color: '#141414' }}>{u.to}</strong>. {u.note}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '14px', color: '#494852', margin: '16px 0 0', lineHeight: 1.6 }}>
                Want the redirect work done for you? Our <Link href="/services/shopify-migration-agency" style={EXT_LINK}>Shopify migration team</Link> builds the full map, and the <Link href="/services/shopify-seo" style={EXT_LINK}>Shopify SEO service</Link> watches Search Console for the weeks after launch.
              </p>
            </div>
          </div>
        </section>

        {/* ── 07. RITOVEX WORKING PROCESS (SPLIT LAYOUT) ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 0.85fr) 1.15fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }}>

              {/* Left Column Sticky Content */}
              <div style={{ position: 'sticky', top: '100px' }}>
                <div className="rv-badge" style={{ marginBottom: '14px' }}>
                  <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                  </svg>
                  <span>Wix Migration Steps</span>
                </div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 18px' }}>
                  10 Steps From Wix Export to Shopify Launch
                </h2>
                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  The order matters. Products go in before customers, customers before orders, and the redirect map is tested before DNS moves. Migrations like this run 5 to 8 weeks with FactoryJet.
                </p>
                <ModalCTAButton label="Start Your Wix Audit" region="us" btnVariant="primary-dark" />
              </div>

              {/* Right Column Step Cards */}
              <ol style={{ display: 'flex', flexDirection: 'column', gap: '16px', listStyle: 'none', margin: 0, padding: 0 }}>
                {MIGRATION_STEPS.map((s) => (
                  <li key={s.n} style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '14px', padding: '24px 28px', transition: 'all 0.25s' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#F6F6F9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
                        {s.icon}
                      </div>
                      <span style={{ fontFamily: 'var(--pp-mono)', fontSize: '14px', fontWeight: 800, color: '#FF5622' }}>
                        {s.n}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#141414', margin: '0 0 6px' }}>
                      {s.t}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#494852', margin: 0, lineHeight: 1.55 }}>
                      {s.d}
                    </p>
                  </li>
                ))}
              </ol>

            </div>
          </div>
        </section>

        {/* ── 09. SEARCHABLE CATEGORIZED FAQ SECTION ── */}

        {/* ── AGENCY EVALUATION FRAMEWORK TABLE ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Vendor Due Diligence</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Hiring Help for a Wix Move: What to Check
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                The Wix-specific gaps are where quotes differ most. Compare how each partner handles them:
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '16px', overflow: 'hidden', maxWidth: '960px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1.4fr', background: '#141414', color: '#FFFFFF', padding: '16px 24px', fontWeight: 700, fontSize: '13.5px' }}>
                <div>Evaluation Factor</div>
                <div style={{ color: '#FF5622' }}>FactoryJet</div>
                <div style={{ color: '#A0A0B0' }}>Common Shortcut</div>
              </div>

              {EVALUATION_CRITERIA.map((crit, cIdx) => (
                <div
                  key={crit.label}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 1.4fr 1.4fr',
                    padding: '20px 24px',
                    borderTop: cIdx > 0 ? '1px solid #F0F0F5' : 'none',
                    background: cIdx % 2 === 0 ? '#FFFFFF' : '#FAFAFC',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div style={{ fontWeight: 800, fontSize: '14px', color: '#141414' }}>
                    {crit.label}
                  </div>
                  <div style={{ fontSize: '13.5px', color: '#141414', fontWeight: 600, lineHeight: 1.45 }}>
                    {crit.factoryjet}
                  </div>
                  <div style={{ fontSize: '13px', color: '#6E6E80', lineHeight: 1.45 }}>
                    {crit.traditional}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ maxWidth: '960px', margin: '40px auto 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#141414', margin: '0 0 12px' }}>Six questions to ask any Wix migration partner</h3>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', color: '#494852', lineHeight: 1.6 }}>
                  {ASK_A_PARTNER.map((q) => (
                    <li key={q} style={{ marginBottom: '6px' }}>{q}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#141414', margin: '0 0 12px' }}>Related pages</h3>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', color: '#494852', lineHeight: 1.6 }}>
                  {RELATED_LINKS.map((l) => (
                    <li key={l.href} style={{ marginBottom: '6px' }}>
                      <Link href={l.href} style={EXT_LINK}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CommerceRoiCalculator city="Enterprise Store" region="us" />

        <FAQ
          eyebrow="WIX MIGRATION QUESTIONS"
          headline="Wix to Shopify Migration: Your Questions Answered"
          lead="Answers to what Wix store owners ask most, from product exports to domain transfers:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#F6F6F9]"
        />

        {/* ── VERIFIED AUTHOR ENTITY CARD ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', padding: '48px 0', borderTop: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <AuthorCard />
          </div>
        </section>

        {/* ── 10. FINAL EXECUTIVE REPLATFORMING CTA ── */}
        <section className="pp-sec" style={{ backgroundColor: '#141414', color: '#FFFFFF', padding: 'clamp(64px, 10vh, 112px) 0', textAlign: 'center' }}>
          <div className="pp-wrap" style={{ maxWidth: '800px' }}>
            <div className="rv-badge" style={{ background: '#26262B', color: '#FF5622', borderColor: '#3E3E48', marginBottom: '20px' }}>
              <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
              </svg>
              <span>Fixed Price Per Phase</span>
            </div>

            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Send Us Your Wix Store URL
            </h2>

            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              We crawl your /product-page/ and /post/ URLs, count products over three options, list the Wix apps to replace, and return a written fixed price with the redirect plan attached.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Schedule Wix Discovery Call" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
