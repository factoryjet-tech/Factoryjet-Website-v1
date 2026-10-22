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

const PAGE_TITLE = 'Squarespace to Shopify Migration: Steps & 301s | FactoryJet';
const PAGE_DESC =
  'Squarespace to Shopify migration: the product CSV skips images, alt text and reviews, only one blog exports, and /p/ product URLs need 301s. The full plan.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: 'https://factoryjet.com/replatforming/squarespace-to-shopify',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Squarespace to Shopify migration' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/replatforming/squarespace-to-shopify' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* Official sources, all opened and read on 22 Oct 2026. */
const SRC = {
  shopifySq: { label: 'Shopify Help: Migrate from Squarespace', url: 'https://help.shopify.com/en/manual/migrating-to-shopify/migrating-from-squarespace' },
  sqProducts: { label: 'Squarespace Help: Export products to a .csv', url: 'https://support.squarespace.com/hc/en-us/articles/360000694948-Export-products-to-a-csv' },
  sqSite: { label: 'Squarespace Help: Export your site content', url: 'https://support.squarespace.com/hc/en-us/articles/206566687-Export-your-site-content' },
  sqOrders: { label: 'Squarespace Help: Export Commerce orders', url: 'https://support.squarespace.com/hc/en-us/articles/206540677-Export-Commerce-orders' },
  sqMappings: { label: 'Squarespace Help: URL mappings', url: 'https://support.squarespace.com/hc/en-us/articles/205815308-URL-mappings' },
  sqDomain: { label: 'Squarespace Help: Transferring a domain away', url: 'https://support.squarespace.com/hc/en-us/articles/205812338-Transferring-a-domain-away-from-Squarespace' },
  shopifyProducts: { label: 'Shopify Help: Import products', url: 'https://help.shopify.com/en/manual/products/import-export/import-products' },
  shopifyCustomers: { label: 'Shopify Help: Import customers', url: 'https://help.shopify.com/en/manual/customers/import-export-customers' },
  shopifyRedirects: { label: 'Shopify Help: URL redirects', url: 'https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect' },
  shopifyPricing: { label: 'Shopify: Pricing', url: 'https://www.shopify.com/pricing' },
  storeMigrationApp: { label: 'Shopify App Store: Store Migration', url: 'https://apps.shopify.com/store-migration' },
  sqPricing: { label: 'Squarespace: Pricing', url: 'https://www.squarespace.com/pricing' },
  shopifyConsiderations: { label: 'Shopify Help: Migration considerations', url: 'https://help.shopify.com/en/manual/migrating-to-shopify/considerations' },
};

const EXT_LINK = { color: '#141414', textDecoration: 'underline', textUnderlineOffset: '2px' } as const;

const FAQ_CATEGORIES = [
  { key: 'squarespace-planning', label: 'Planning the Squarespace Move' },
  { key: 'squarespace-store-data', label: 'Products, Customers & Orders' },
  { key: 'squarespace-content', label: 'Blog, Pages & Design' },
  { key: 'squarespace-urls', label: 'Squarespace URLs & Redirects' },
  { key: 'squarespace-domain', label: 'Domain & Email' },
  { key: 'squarespace-cost', label: 'Cost & Timeline' },
];

const FAQ_ITEMS = [
  {
    category: 'squarespace-planning',
    question: 'Can I migrate from Squarespace to Shopify?',
    answer:
      'Yes. Shopify publishes its own Squarespace migration guide covering products, customers, order history and reviews. Products and customers move by CSV file. Order history moves through an app; Shopify’s guide names EZ Importer and Migration Pro. Your design, portfolio pages and custom CSS do not move, so they are rebuilt inside a Shopify theme.',
  },
  {
    category: 'squarespace-planning',
    question: 'What is the right order for moving from Squarespace to Shopify?',
    answer:
      'Products first, then customers, then historical orders, which is the order Shopify’s migration notes give. Before any of that, copy your Squarespace URL mappings and note each store page slug, because product URLs depend on it. Blog posts, images and pages can move in parallel. Redirects and the domain come last, after test orders pass.',
  },
  {
    category: 'squarespace-planning',
    question: 'Is it better to sell on Squarespace or Shopify?',
    answer:
      'Squarespace suits a design-led site that sells a small range next to its content. Shopify suits a business where the store is the main event and you need more apps, more sales channels and more checkout choices. If products are a side line and your current setup works, staying on Squarespace is a fair decision. Move when the store has outgrown the site around it.',
  },
  {
    category: 'squarespace-planning',
    question: 'Is Squarespace still a good platform in 2026?',
    answer:
      'For portfolios, service businesses and small catalogs, yes. Stores usually leave because they want a specific Shopify app, a wholesale or subscription setup, or one admin for several sales channels, not because Squarespace stopped working. If none of those apply to you, the cost of a migration may outweigh the gain.',
  },
  {
    category: 'squarespace-planning',
    question: 'Can Squarespace and Shopify work together?',
    answer:
      'There is no built-in sync between them. The common middle ground is Shopify’s Buy Button, which adds Shopify products to an external website, so a Squarespace site can sell through Shopify checkout. That means two catalogs to keep in step and two admins to log into. For more than a handful of products, a full move to Shopify is usually simpler.',
  },
  {
    category: 'squarespace-planning',
    question: 'Is there a Shopify app that imports a Squarespace store automatically?',
    answer:
      'Not from Shopify itself, as of 22 October 2026. Shopify’s free Store Migration app lists Square, WooCommerce, Etsy, Wix, Amazon, eBay, Clover and Lightspeed as sources, and Squarespace was not on that list when we checked. The older Store Importer app is no longer available. So a Squarespace move runs on the product .csv, the .xml export and a few third-party apps.',
  },
  {
    category: 'squarespace-store-data',
    question: 'How do I export my products from Squarespace?',
    answer:
      'Open the Products panel and choose Export all, or select products and click Export. Squarespace exports physical and service products to a .csv, up to 10,000 products. The file is a one-time copy: later edits on either side do not sync. Re-map the columns to Shopify’s product CSV template and import under Products > Import, keeping each file under 15 MB.',
  },
  {
    category: 'squarespace-store-data',
    question: 'Why are product images missing after I import my Squarespace CSV?',
    answer:
      'Because the Squarespace export never had them. Squarespace says its product .csv will not include featured images, variant images, product image alt text, customer reviews or additional product information. We download each image from your live product pages, match it to the right product and variant, and attach it in Shopify with alt text filled in.',
  },
  {
    category: 'squarespace-store-data',
    question: 'Can I move digital download products from Squarespace?',
    answer:
      'Plan to rebuild them. Squarespace’s export article lists physical and service products for Export all and does not list download products. So we recreate each digital product in Shopify, re-upload the files through a digital downloads app you approve, and test a purchase end to end before launch.',
  },
  {
    category: 'squarespace-store-data',
    question: 'Can Squarespace customer accounts and passwords move to Shopify?',
    answer:
      'Customer records move; passwords cannot. Shopify’s Squarespace guide says it cannot import a customer CSV that does not match Shopify’s headings, so the Squarespace file is rewritten first. Shopify also says customer passwords cannot be migrated by CSV, so customers get an invite to set a new one. We draft that invite email with you so it reads as your brand.',
  },
  {
    category: 'squarespace-store-data',
    question: 'Can I move my Squarespace order history?',
    answer:
      'Yes. Squarespace exports Commerce orders as a .csv, filtered by status, date range or product. Know two quirks: partially refunded orders show the full purchase price, and hidden products or disabled store pages are left out. Shopify points to apps such as EZ Importer and Migration Pro for the import. Switch off new order notifications first.',
  },
  {
    category: 'squarespace-store-data',
    question: 'What happens to Squarespace product reviews?',
    answer:
      'They do not travel. Shopify’s guide says you cannot export or migrate reviews from Squarespace to Shopify, and the Squarespace product .csv leaves reviews out too. Shopify’s guide names Judge.me, Loox and Yotpo as review apps. You can start fresh in one of them or, with your sign-off, re-enter published review text with original dates.',
  },
  {
    category: 'squarespace-content',
    question: 'How do I move my Squarespace blog to Shopify?',
    answer:
      'Squarespace exports blog content as an .xml file in WordPress format from the Import and export panel. It holds one blog page, its posts and up to 1,000 comments per post; drafts do not export. Shopify has no admin button for that file, so posts go in through an app or Shopify’s Blog API. We parse the file, re-host the images and keep each slug for the 301 map.',
  },
  {
    category: 'squarespace-content',
    question: 'I have two blogs on Squarespace. What happens to the second?',
    answer:
      'Only one blog page exports. When a site has more than one, Squarespace asks you to pick a primary blog and exports just that one. We take the primary blog from the .xml file and capture the second blog from the live site: title, body, images, date and slug. Shopify supports several blogs, so each keeps its own section.',
  },
  {
    category: 'squarespace-content',
    question: 'Will my Squarespace portfolio, index and album pages move?',
    answer:
      'Not by export. Squarespace lists album, cover, index, portfolio, store and calendar pages as content that does not export, along with audio, video and product blocks. We rebuild those pages as Shopify pages and theme sections, using your original images, and redirect each old path to its new home. Gallery pages are on the export list, but only for version 7.0 sites.',
  },
  {
    category: 'squarespace-content',
    question: 'Will my Shopify store look like my Squarespace site?',
    answer:
      'It can look as close as you want, but it is a rebuild. Squarespace style settings and custom CSS do not export, so the look is recreated in a Shopify theme. FactoryJet builds custom-theme stores in 3 to 5 weeks and migrations in 5 to 8 weeks, and you see a working demo on your own products before you sign anything.',
  },
  {
    category: 'squarespace-content',
    question: 'Will blog images break after I cancel Squarespace?',
    answer:
      'They can. Squarespace warns that when its export is imported with the WordPress Importer plugin, images may come across as links back to Squarespace, which stop working once the Squarespace site is cancelled. The same risk applies to any tool that copies links instead of files. We download every image in the export and upload it to Shopify before posting the articles.',
  },
  {
    category: 'squarespace-urls',
    question: 'Will I lose search rankings when I move off Squarespace?',
    answer:
      'Some movement after a platform change is normal and nobody can promise none. What protects rankings is a one-to-one 301 map, with each old URL pointing straight to its closest Shopify page in one hop. We gather every URL from your Squarespace sitemap and Search Console, map each one and retest after launch. Titles and meta descriptions move with the content.',
  },
  {
    category: 'squarespace-urls',
    question: 'How do Squarespace product URLs change on Shopify?',
    answer:
      'On Squarespace 7.1, a product URL is the store page slug, then /p/, then the product slug, for example /shop/p/linen-apron. Shopify puts every product under /products/{handle}. The slug can often stay the same, but the path cannot, so each product gets its own 301. If you have several store pages, each one has its own prefix to map.',
  },
  {
    category: 'squarespace-urls',
    question: 'My Squarespace store page is called shop. Does that cause a problem?',
    answer:
      'Yes, and it is the trap we check first. Shopify says you cannot redirect URLs that begin with /shop, so old /shop/p/ product links cannot be redirected with Shopify’s own redirect tool. They need a rule outside Shopify, for example at your DNS or CDN provider, and we agree which during scoping. Store pages with other slugs, such as /store or /buy, redirect normally.',
  },
  {
    category: 'squarespace-urls',
    question: 'What happens to my Squarespace URL mappings?',
    answer:
      'They stop working when the domain leaves Squarespace, because they live in your Squarespace settings. That field holds up to 400 KB, roughly 2,500 redirect lines. We copy every line, merge it into the Shopify map and collapse chains. Shopify holds 100,000 redirects on standard plans and 20,000,000 on Plus, and redirects only fire from URLs that return 404.',
  },
  {
    category: 'squarespace-domain',
    question: 'How do I transfer my domain from Squarespace to Shopify?',
    answer:
      'Turn off the domain lock in Squarespace, then copy the transfer authentication code from the email Squarespace sends and give it to your new provider. Squarespace says the transfer can take up to 15 days. A recently purchased domain may have a 60-day lock. While you wait, Squarespace lets you point the domain to your new site, which is how we usually launch.',
  },
  {
    category: 'squarespace-domain',
    question: 'Will I lose my domain if I cancel my Squarespace plan?',
    answer:
      'Treat the domain and the website plan as two separate things. Before you cancel the site, either transfer the domain out or confirm with Squarespace how the domain is billed on its own. We keep the Squarespace site live until Shopify is launched and checked, then you cancel the website plan, never the domain by accident.',
  },
  {
    category: 'squarespace-domain',
    question: 'What happens to Google Workspace email when I leave Squarespace?',
    answer:
      'If Google Workspace is attached to your domain, Squarespace says to adjust your MX records with your new domain provider after transferring, to avoid an email outage. Squarespace also says you keep managing the Workspace subscription through Squarespace unless you cancel it. We list your MX records before launch and check mail delivery after the switch.',
  },
  {
    category: 'squarespace-cost',
    question: 'How much does a Squarespace to Shopify migration cost?',
    answer:
      'It depends on product and variant count, how many product images need re-attaching, how many blogs and portfolio pages need rebuilding, and which apps replace Squarespace features. FactoryJet quotes a fixed price in writing after a short scoping call. Defects are fixed inside the build price for a cover period agreed up front, and later support is optional with no monthly minimum.',
  },
  {
    category: 'squarespace-cost',
    question: 'How long does moving from Squarespace to Shopify take?',
    answer:
      'FactoryJet migrations run 5 to 8 weeks from signed scope to launch. A single store page with a small blog sits at the short end. Several store pages, a second blog captured from the live site, or many portfolio pages push it toward the long end. Across 500+ businesses since 2014, 97% of our projects have shipped on time.',
  },
];

const STAT_CARDS = [
  { num: '10,000', title: 'Products per export', desc: 'Squarespace’s product .csv holds up to 10,000 physical and service products.', icon: '📄', src: SRC.sqProducts },
  { num: '1', title: 'Blog per .xml export', desc: 'If you run two blogs, Squarespace exports only the one you pick as primary.', icon: '📝', src: SRC.sqSite },
  { num: '0', title: 'Product images in the CSV', desc: 'Featured images, variant images and alt text are left out of the export.', icon: '🖼️', src: SRC.sqProducts },
  { num: '15 days', title: 'Domain transfer window', desc: 'Squarespace says a transfer away can take up to 15 days, so we point DNS first.', icon: '🌐', src: SRC.sqDomain },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'The Product CSV Leaves Out Every Image',
    problem: 'Squarespace’s product .csv does not include featured images, variant images, image alt text, reviews or additional product information.',
    solution: 'We download each image from the live product pages, match it to its product and variant, and attach it in Shopify with alt text.',
  },
  {
    num: '02',
    title: 'Only One Blog Leaves, and Store Pages Stay',
    problem: 'The .xml export carries one blog page. Store, index, portfolio, album and cover pages, drafts and custom CSS do not export.',
    solution: 'The primary blog comes from the .xml file; a second blog and every portfolio or index page are captured from the live site and rebuilt.',
  },
  {
    num: '03',
    title: 'Blog Images Can Still Point Back to Squarespace',
    problem: 'Squarespace warns that imported posts may reference images by link, and those links stop working once the Squarespace site is cancelled.',
    solution: 'Every image in the export is downloaded and uploaded to Shopify before the article is posted, so nothing depends on the old site.',
  },
  {
    num: '04',
    title: 'Your Squarespace Redirects Live in Squarespace',
    problem: 'URL mappings you added over the years sit in Squarespace settings and stop working when the domain moves.',
    solution: 'We copy every mapping line, merge it into the Shopify redirect map and collapse old chains into single hops.',
  },
];

const PARTNERS = [
  'Shopify Partner (registered)',
  'Squarespace product .csv',
  'Squarespace .xml site export',
  'Squarespace URL mappings',
  'EZ Importer',
  'Migration Pro',
  'Shopify Blog API',
  'Google Workspace MX records',
];

const MIGRATION_STEPS = [
  {
    n: '01',
    t: 'Confirm version, visibility and store page slugs',
    d: 'We note whether you are on 7.0 or 7.1, set the site to Public (Squarespace will not export from a trial site) and list every store page slug.',
    icon: '🔍',
  },
  {
    n: '02',
    t: 'Export products from the Products panel',
    d: 'Export all covers physical and service products, up to 10,000. Download products are listed for a manual rebuild.',
    icon: '📦',
  },
  {
    n: '03',
    t: 'Collect product images and alt text from the live store',
    d: 'The CSV has no images, so each product page is captured and every image is matched to its product and variant.',
    icon: '🖼️',
  },
  {
    n: '04',
    t: 'Import into Shopify with publishing off',
    d: 'Columns are re-mapped to Shopify’s template, files kept under 15 MB, and products imported to the online store only until checked.',
    icon: '⬆️',
  },
  {
    n: '05',
    t: 'Rewrite the customer file to Shopify headings',
    d: 'Shopify rejects customer files that do not match its headings. Passwords do not move, so the account invite email is drafted now.',
    icon: '👥',
  },
  {
    n: '06',
    t: 'Export Commerce orders and import with an app',
    d: 'Orders come out as a .csv by status and date. Partially refunded orders show full price, so we flag them before EZ Importer or Migration Pro loads the history.',
    icon: '🧾',
  },
  {
    n: '07',
    t: 'Export the blog as .xml and post it to Shopify',
    d: 'Import and export panel, Export, WordPress icon, primary blog. We parse the file, re-host images and post each article through the Blog API.',
    icon: '📝',
  },
  {
    n: '08',
    t: 'Rebuild portfolio and index pages and the design',
    d: 'Pages that do not export are rebuilt as Shopify pages and theme sections. You review a working demo on your own products.',
    icon: '💻',
  },
  {
    n: '09',
    t: 'Build the 301 map, URL mappings included',
    d: 'Every /p/ product URL, blog post and page gets a single-hop 301, and your old Squarespace URL mappings are merged in.',
    icon: '🔗',
  },
  {
    n: '10',
    t: 'Point the domain and check email',
    d: 'DNS points to Shopify while the transfer, if any, runs in the background. MX records for Google Workspace are checked the same day.',
    icon: '🚀',
  },
];

const URL_PATTERNS = [
  { from: '/{store-page}/p/{product-slug}', to: '/products/{handle}', note: 'Squarespace 7.1 puts /p/ between the store page slug and the product slug. If that slug is shop, Shopify’s redirect tool cannot catch it, because Shopify blocks redirects from URLs that begin with /shop.' },
  { from: '/{store-page}', to: '/collections/all or a named collection', note: 'A shop page becomes a Shopify collection. Several shop pages become several collections.' },
  { from: '/{blog-page}/{post-slug}', to: '/blogs/{blog-handle}/{handle}', note: 'Slugs usually stay the same; the blog prefix changes, so each post still needs a 301.' },
  { from: 'Portfolio, index and album pages', to: '/pages/{handle}', note: 'These do not export, so they are rebuilt first and then redirected.' },
  { from: 'Lines in your Squarespace URL mappings', to: 'Merged into the Shopify map', note: 'Old chains collapse, so each URL reaches its final page in one 301.' },
];

const BEFORE_YOU_START = [
  'Check whether the site runs Squarespace 7.0 or 7.1, since URL patterns differ.',
  'Publish the site and set it to Public; exports do not run from a trial site.',
  'Copy the full text of your URL mappings into a document.',
  'Write down every store page slug and every blog page you run, and flag any store page named shop.',
  'Find out whether Google Workspace email is billed through Squarespace.',
];

const ASK_A_PARTNER = [
  'How will you recover the product images and alt text the CSV leaves out?',
  'If I have two blogs, how does the second one move?',
  'Will blog images be re-hosted on Shopify, or still linked to Squarespace?',
  'What happens to the URL mappings I already have?',
  'Will you point my domain first, or transfer it on launch day?',
  'Can I see a working demo on my own products before I sign?',
];

const RELATED_LINKS = [
  { href: '/services/shopify-migration-agency', label: 'Shopify migration agency: scope and what a fixed quote covers' },
  { href: '/services/shopify-theme-development', label: 'Shopify theme development to recreate your Squarespace look' },
  { href: '/services/shopify-seo', label: 'Shopify SEO after launch: Search Console checks and redirects' },
  { href: '/replatforming/wix-to-shopify', label: 'Wix to Shopify: a store whose blog has no export at all' },
  { href: '/replatforming/wordpress-to-shopify', label: 'WordPress to Shopify: moving a large blog by WXR file' },
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
  name: 'Squarespace to Shopify Migration',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  serviceType: 'Squarespace Commerce to Shopify migration',
  description:
    'Moves Squarespace products, customers and order history to Shopify, re-attaches the product images the Squarespace CSV omits, moves the .xml blog export, and maps every /p/ product URL to a single-hop 301.',
  areaServed: ['US', 'GB', 'CA', 'AU'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Replatforming Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Squarespace to Shopify Migration',
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
  url: 'https://factoryjet.com/replatforming/squarespace-to-shopify',
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
    { '@type': 'ListItem', position: 3, name: 'Squarespace to Shopify', item: 'https://factoryjet.com/replatforming/squarespace-to-shopify' },
  ],
};


const EVALUATION_CRITERIA = [
  {
    label: 'Product images',
    factoryjet: 'Images and alt text recovered from the live store and matched to each product and variant before launch.',
    traditional: 'CSV imported as is, so products go live with no photos.',
  },
  {
    label: 'Blogs and portfolio pages',
    factoryjet: 'Primary blog from the .xml file, second blog and portfolio pages captured live, all images re-hosted on Shopify.',
    traditional: 'Primary blog only, with images still linked to the Squarespace site.',
  },
  {
    label: 'Old /p/ URLs',
    factoryjet: 'Every store page prefix mapped, URL mappings merged, each old URL a single-hop 301.',
    traditional: 'Old product links sent to the homepage or left to 404.',
  },
  {
    label: 'Price and accountability',
    factoryjet: 'Fixed price per phase, a working demo on your products before you sign, defects fixed inside the build price.',
    traditional: 'Hourly billing, with image recovery quoted later as extra work.',
  },
];

export default function SquarespaceToShopifyPage() {
  return (
    <>
      <script id="squarespace-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="squarespace-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="squarespace-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="squarespace-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="squarespace-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>Squarespace to Shopify Migration</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Squarespace to Shopify Migration, Product Images Included
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  To move from Squarespace to Shopify, export products as a .csv (up to 10,000), import them into Shopify, then bring customers and order history across. The Squarespace file leaves out product images, alt text and reviews, so those are recovered separately. Blog posts export as a WordPress-format .xml file, one blog only. Every /p/ product URL then needs its own 301.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Free Squarespace Audit" region="us" btnVariant="primary-dark" />
                  <a href="#squarespace-export-table" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>What Squarespace Exports</span>
                  </a>
                </div>

                <p style={{ fontSize: '13px', color: '#6E6E80', margin: '20px 0 0' }}>
                  Updated 22 October 2026 · Bhavesh Barot, Founder
                </p>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame (Edge-to-Edge) */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/replatforming/squarespace-hero-swatch-review.webp"
                  alt="A woman in a white shirt holding a fabric swatch beside a monitor that shows a wooden chair while two colleagues watch from the table"
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
              <div className="rv-ticker-label">Exports, Apps and Records in a Squarespace Move</div>
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
                  src="/images/replatforming/squarespace-team-theme-review.webp"
                  alt="A man pointing at a monitor showing a page of grey blocks and product tiles while a woman sketches boxes in a notebook"
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
                  What the Squarespace Export Hands You
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  Squarespace gives you two files: a product .csv and a WordPress-format .xml. Neither carries your product photos or your design. FactoryJet, a registered Shopify Partner serving 500+ businesses since 2014, plans each Squarespace job around these numbers and shows you a working Shopify demo on your own catalog before you commit.
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

        {/* ── 04. WHY LEAVE SQUARESPACE (RITOVEX NUMBERED SERVICES ROWS) ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Squarespace Export Gaps</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Four Gaps in the Squarespace Export
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                The product list exports cleanly. Images, second blogs, portfolio pages and your old redirects do not, and that is where do-it-yourself moves come up short.
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
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.08em' }}>On Squarespace:</span>
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
                <h3 className="rv-service-title" style={{ margin: '0 0 12px' }}>Five things to do in Squarespace before the move</h3>
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
            badge="// SQUARESPACE COMMERCE TO SHOPIFY"
            title="Where Each Squarespace Export Goes in Shopify"
            subtitle="Product .csv into the Shopify importer, images recovered from the live store, the .xml blog through the Blog API, and URL mappings merged into one redirect map."
            legacySource="Squarespace Commerce"
            targetStack="Shopify"
            ctaLabel="Book a Squarespace Scoping Call"
            region="us"
          />
        </div>

        {/* ── 06. RITOVEX SIDE-BY-SIDE COMPARISON TABLE ── */}
        <section className="pp-sec" id="squarespace-export-table" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>From the Squarespace and Shopify Help Centers</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Squarespace Export Limits Next to Shopify Import Rules
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every fact below is taken from the official help article in the last column, opened on 22 October 2026. Check them again before a large move, since both companies update these pages.
              </p>
            </div>

            <div style={{ overflowX: 'auto', borderRadius: '14px', border: '1px solid #E6E6EC' }}>
              <table className="pp-table" style={{ margin: 0, width: '100%', background: '#FFFFFF' }}>
                <thead style={{ background: '#F6F6F9' }}>
                  <tr>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Data</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>What Squarespace gives you</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Where it goes in Shopify</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Source (checked 22 Oct 2026)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Products</td>
                    <td>.csv of physical and service products, up to 10,000. A one-time copy that does not sync.</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Products &gt; Import. A product CSV cannot exceed 15 MB.</td>
                    <td><a href={SRC.sqProducts.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.sqProducts.label}</a>; <a href={SRC.shopifyProducts.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.shopifyProducts.label}</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Product images</td>
                    <td>Not in the .csv: featured images, variant images, image alt text, reviews, additional information.</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Recovered from the live store and attached per product and variant.</td>
                    <td><a href={SRC.sqProducts.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.sqProducts.label}</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Customers</td>
                    <td>Customer list export</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>File must match Shopify headings. Passwords cannot be migrated. Limit 15 MB.</td>
                    <td><a href={SRC.shopifySq.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.shopifySq.label}</a>; <a href={SRC.shopifyCustomers.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.shopifyCustomers.label}</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Orders</td>
                    <td>.csv filtered by status, date or product. Partially refunded orders show full price; hidden products are left out.</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Imported with an app; Shopify names EZ Importer and Migration Pro.</td>
                    <td><a href={SRC.sqOrders.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.sqOrders.label}</a>; <a href={SRC.shopifySq.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.shopifySq.label}</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Blog</td>
                    <td>WordPress-format .xml: one blog page, its posts and up to 1,000 comments per post. Drafts do not export.</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Posted through a migration app or the Blog API.</td>
                    <td><a href={SRC.sqSite.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.sqSite.label}</a>; <a href={SRC.shopifyConsiderations.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.shopifyConsiderations.label}</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Other pages</td>
                    <td>Store, index, portfolio, album, cover and calendar pages, style settings and custom CSS do not export. Gallery pages export on 7.0 only.</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Rebuilt as Shopify pages and theme sections.</td>
                    <td><a href={SRC.sqSite.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.sqSite.label}</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Redirects</td>
                    <td>URL mappings field, up to 400 KB (about 2,500 lines). Products sit under /p/ on 7.1, often as /shop/p/.</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Up to 100,000 redirects (20,000,000 on Plus), only from broken URLs. URLs that begin with /shop cannot be redirected.</td>
                    <td><a href={SRC.sqMappings.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.sqMappings.label}</a>; <a href={SRC.shopifyRedirects.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.shopifyRedirects.label}</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Domain</td>
                    <td>Lock removed, then the emailed auth code goes to the new provider. Up to 15 days; new domains may carry a 60-day lock.</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Point the domain to Shopify while the transfer runs.</td>
                    <td><a href={SRC.sqDomain.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.sqDomain.label}</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Monthly platform fee</td>
                    <td>Basic $25/mo monthly or $19 yearly (2% store transaction fee); Core $39 or $29; Plus $65 or $49; Advanced $139 or $99.</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Basic $39/mo monthly or $29/mo yearly; Grow $105 or $89; Advanced $399 or $359 (USD).</td>
                    <td><a href={SRC.sqPricing.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.sqPricing.label}</a>; <a href={SRC.shopifyPricing.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.shopifyPricing.label}</a></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ maxWidth: '960px', margin: '40px auto 0' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#141414', margin: '0 0 12px' }}>Squarespace URL patterns and their Shopify targets</h3>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', color: '#494852', lineHeight: 1.6 }}>
                {URL_PATTERNS.map((u) => (
                  <li key={u.from} style={{ marginBottom: '8px' }}>
                    <strong style={{ color: '#141414' }}>{u.from}</strong> to <strong style={{ color: '#141414' }}>{u.to}</strong>. {u.note}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '14px', color: '#494852', margin: '16px 0 0', lineHeight: 1.6 }}>
                Running several store pages? Each one is a separate /p/ prefix in the map. Our <Link href="/services/shopify-migration-agency" style={EXT_LINK}>migration team</Link> handles the mapping, and <Link href="/services/shopify-theme-development" style={EXT_LINK}>theme development</Link> rebuilds the portfolio and index pages that Squarespace does not export.
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
                  <span>Squarespace Migration Steps</span>
                </div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 18px' }}>
                  Moving Off Squarespace in 10 Steps
                </h2>
                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  Images are the long pole on most Squarespace jobs, so we start capturing them on day one while the product file is re-mapped. FactoryJet migrations run 5 to 8 weeks.
                </p>
                <ModalCTAButton label="Start Your Squarespace Audit" region="us" btnVariant="primary-dark" />
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
                Choosing a Squarespace Migration Partner
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Quotes differ most on images and blogs. Ask how each partner handles these four:
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
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#141414', margin: '0 0 12px' }}>Questions to put to any Squarespace migration quote</h3>
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
          eyebrow="SQUARESPACE MIGRATION QUESTIONS"
          headline="Moving From Squarespace to Shopify: FAQ"
          lead="What Squarespace store owners ask before they switch, from missing images to Google Workspace email:"
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
              Send Us Your Squarespace Site
            </h2>

            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              We count your store pages, products and images, check which blogs and portfolio pages will need a live capture, and send back a written fixed price with the URL map attached.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Schedule Squarespace Discovery Call" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
