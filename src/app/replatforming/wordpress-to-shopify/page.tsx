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

const PAGE_TITLE = 'Migrate a WordPress Blog to Shopify: WXR & 301s | FactoryJet';
const PAGE_DESC =
  'Migrate a blog from WordPress to Shopify: export the WXR file, turn categories into tags, re-host /wp-content/uploads images and 301 every old permalink.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: 'https://factoryjet.com/replatforming/wordpress-to-shopify',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'WordPress blog to Shopify migration' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/replatforming/wordpress-to-shopify' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* Official sources, all opened and read on 22 Oct 2026. */
const SRC = {
  wpExport: { label: 'WordPress.org: Tools Export screen', url: 'https://wordpress.org/documentation/article/tools-export-screen/' },
  wpPermalinks: { label: 'WordPress.org: Customize permalinks', url: 'https://wordpress.org/documentation/article/customize-permalinks/' },
  shopifyConsiderations: { label: 'Shopify Help: Migration considerations', url: 'https://help.shopify.com/en/manual/migrating-to-shopify/considerations' },
  shopifyBlogPosts: { label: 'Shopify Help: Working with blog posts', url: 'https://help.shopify.com/en/manual/online-store/blogs/writing-blogs/working-with-blog-posts' },
  shopifyArticleUrl: { label: 'Shopify Dev: blog object', url: 'https://shopify.dev/docs/api/liquid/objects/blog' },
  shopifyRedirects: { label: 'Shopify Help: URL redirects', url: 'https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect' },
  shopifyCustomers: { label: 'Shopify Help: Import customers', url: 'https://help.shopify.com/en/manual/customers/import-export-customers' },
  shopifyPricing: { label: 'Shopify: Pricing', url: 'https://www.shopify.com/pricing' },
  shopifyBuyButton: { label: 'Shopify Help: Buy Button', url: 'https://help.shopify.com/en/manual/online-sales-channels/buy-button' },
};

const EXT_LINK = { color: '#141414', textDecoration: 'underline', textUnderlineOffset: '2px' } as const;

const FAQ_CATEGORIES = [
  { key: 'wordpress-planning', label: 'Planning the WordPress Move' },
  { key: 'wordpress-blog-export', label: 'Exporting the WordPress Blog' },
  { key: 'wordpress-content-mapping', label: 'Categories, Authors & Images' },
  { key: 'wordpress-permalinks', label: 'Permalinks & 301 Redirects' },
  { key: 'wordpress-store-and-launch', label: 'Users, Domain & Launch' },
  { key: 'wordpress-cost', label: 'Cost & Timeline' },
];

const FAQ_ITEMS = [
  {
    category: 'wordpress-planning',
    question: 'How do I migrate my blog from WordPress to Shopify?',
    answer:
      'Export the blog in WordPress under Tools > Export, which downloads a WXR (.xml) file of posts, pages, comments, categories, tags and authors. Shopify has no button that reads that file, so posts go in through a migration app or Shopify’s Blog API. Turn categories into tags, re-upload images from /wp-content/uploads, set each article’s SEO title, then 301 every old permalink to its new Shopify URL.',
  },
  {
    category: 'wordpress-planning',
    question: 'Can you transfer a whole WordPress website to Shopify?',
    answer:
      'The content can move; the WordPress machinery cannot. Posts and pages travel in the WXR export, and Shopify’s notes say single pages such as shipping or refund policies can usually be pasted in by hand. Your theme, plugins, forms and page builder layouts do not run on Shopify, so they are rebuilt as Shopify theme sections and apps. Every URL then gets a 301.',
  },
  {
    category: 'wordpress-planning',
    question: 'My WordPress site runs WooCommerce. Is this the right guide?',
    answer:
      'Only for the blog half. If you sell through WooCommerce, the products, variations, customers and orders are a store migration with their own export files and limits, covered on our WooCommerce to Shopify page. This page is for WordPress sites that are mostly content: a blog, a brochure site, or a blog sitting next to a store that already runs on Shopify.',
  },
  {
    category: 'wordpress-planning',
    question: 'Can I keep WordPress for the blog and use Shopify for the store?',
    answer:
      'Yes, and for a large blog it is often the better call. One route is Shopify’s Buy Button, which adds products to an external website or blog post and is included in all Shopify subscription plans. The other keeps WordPress for content and Shopify for the store, linked by menus and shared design. The cost is two systems to update. See our WordPress and Shopify integration service for that setup.',
  },
  {
    category: 'wordpress-planning',
    question: 'Can you run a proper blog on Shopify?',
    answer:
      'Yes. Shopify has a built-in blog: you write posts, add excerpts for the blog landing page, organize posts with tags and edit each post’s search engine listing. You can also create more than one blog, for example a journal and a recipes section. It is simpler than WordPress, with no category tree and no plugin library, which suits stores whose blog supports the products.',
  },
  {
    category: 'wordpress-planning',
    question: 'What do I give up by moving my blog from WordPress to Shopify?',
    answer:
      'Mostly flexibility. Shopify posts use tags instead of a category tree. A post author must be the store owner or a staff account with admin access, which matters for guest writers. Article URLs always sit under /blogs/{blog-name}/, so no WordPress permalink survives unchanged. And plugins such as SEO, related-post or table-of-contents tools need a Shopify app or theme code instead.',
  },
  {
    category: 'wordpress-blog-export',
    question: 'How do I export my WordPress blog?',
    answer:
      'In the WordPress dashboard, open Tools > Export. Choose All content, or choose Posts to filter by category, author, date range or status such as Published. Click Download Export File and WordPress saves a WXR file, short for WordPress eXtended RSS, to your computer. That one file is the starting point for the Shopify import.',
  },
  {
    category: 'wordpress-blog-export',
    question: 'What is inside a WordPress WXR export file?',
    answer:
      'WordPress lists nine kinds of content: posts, pages, custom post types, comments, custom fields, categories, tags, custom taxonomies and users. Image files are not in that list. The file points to your media by URL, so we download each image from /wp-content/uploads and upload it to Shopify before any article is posted. Otherwise posts keep loading images from the old WordPress host.',
  },
  {
    category: 'wordpress-blog-export',
    question: 'Does Shopify import WordPress XML files directly?',
    answer:
      'Not from the Shopify admin. Shopify’s migration notes list migration apps and the Blog API as the ways to bring blog posts across. We parse the WXR file with our own script, clean each post’s HTML and send it to the Blog API, which lets us keep the original publish date, excerpt and slug for every article.',
  },
  {
    category: 'wordpress-blog-export',
    question: 'Can I move only some of my WordPress posts?',
    answer:
      'Yes. The WordPress Posts export can be filtered by category, author, date range and status. Before exporting we pull 12 months of Search Console data so you can see which posts earn clicks. Thin or out-of-date posts can stay behind, and their URLs redirect to the closest post that does move, so no old link ends on a 404.',
  },
  {
    category: 'wordpress-content-mapping',
    question: 'What happens to WordPress categories and tags on Shopify?',
    answer:
      'They merge into Shopify tags. Shopify’s help says you can use tags to organize posts into categories or by subject, so each WordPress category becomes a tag and nested categories flatten. If your blog has a few large, distinct sections, those can become separate Shopify blogs instead, each with its own URL. We agree the mapping with you before import.',
  },
  {
    category: 'wordpress-content-mapping',
    question: 'What happens to post authors when the blog moves?',
    answer:
      'Shopify only lets you pick the store owner or a staff member with admin access as a post’s author. For a blog with guest writers, that means either giving some writers staff accounts or keeping one author and adding a byline line inside each post. Author archive pages in WordPress, such as /author/jane/, are redirected to the blog or to that writer’s best post.',
  },
  {
    category: 'wordpress-content-mapping',
    question: 'Will my Yoast or Rank Math SEO titles carry over?',
    answer:
      'Yes, with mapping. SEO plugins store titles and meta descriptions as custom fields on each post, and custom fields are part of the WXR export. We read those fields and write them into each Shopify article’s search engine listing. Where a post had no custom title, we keep the post title rather than inventing one.',
  },
  {
    category: 'wordpress-content-mapping',
    question: 'Will shortcodes, Gutenberg blocks and page builder layouts survive?',
    answer:
      'Not as they are. Shortcodes such as [gallery] only render while their plugin runs, so in the export they are plain text. We convert them to clean HTML before import. Gutenberg blocks mostly come across as HTML. Pages built in Elementor or Divi depend on those plugins to render, so they are rebuilt as Shopify theme sections.',
  },
  {
    category: 'wordpress-content-mapping',
    question: 'What happens to blog comments?',
    answer:
      'Comments are in the WXR file, so nothing is lost at export. Whether they appear on Shopify is your choice. Many owners leave old comments behind and start fresh; others keep the useful ones as a short quoted section at the end of a post. We agree which option you want before import, since it changes how each post is built.',
  },
  {
    category: 'wordpress-permalinks',
    question: 'How do WordPress permalinks map to Shopify URLs?',
    answer:
      'WordPress offers Plain (/?p=123, the default), Day and name (/2024/05/28/post-name/), Month and name, Numeric, Post name and Custom structures, plus /category/ and /tag/ archives. Shopify articles live at /blogs/{blog-name}/{handle}. The post slug can usually stay the same; the path around it changes, so every post, archive and page gets its own 301.',
  },
  {
    category: 'wordpress-permalinks',
    question: 'Can Shopify redirect old ?p=123 WordPress links?',
    answer:
      'Not reliably with its own tool. Shopify warns that URLs containing query strings might not work as expected with its redirects, and its redirects only fire from broken URLs, while /?p=123 sits on your homepage, a live page. We test a sample after launch. If they fail, the fix is a rule at your DNS or CDN provider that sends each ?p= link to its new article.',
  },
  {
    category: 'wordpress-permalinks',
    question: 'Will my blog lose Google rankings after moving to Shopify?',
    answer:
      'Expect some movement after any platform change; nobody can promise none. What protects rankings is a one-to-one 301 map where each old permalink points straight to its new article in one hop, with titles, meta descriptions, headings and images moved intact. We map from your sitemap and Search Console, then retest the redirects after launch.',
  },
  {
    category: 'wordpress-permalinks',
    question: 'How many redirects can Shopify hold for a big blog?',
    answer:
      'Shopify allows 100,000 URL redirects on standard plans and 20,000,000 on Shopify Plus. A blog with a few thousand posts, plus its category, tag, author and date archives, fits comfortably. We keep the list one row per old URL, so you can audit it in a spreadsheet before launch.',
  },
  {
    category: 'wordpress-store-and-launch',
    question: 'Do WordPress users become Shopify customers?',
    answer:
      'Not automatically. WordPress users in the WXR file are mainly authors and site accounts. If your site has members or subscribers who should become Shopify customers, we export them separately and import them by customer CSV. Shopify says customer passwords cannot be migrated that way, so each person gets an invite to set a new password.',
  },
  {
    category: 'wordpress-store-and-launch',
    question: 'Do I have to move my domain off my WordPress host?',
    answer:
      'No. Most domains stay where they are registered, and we change the DNS records so the domain points to Shopify. Before switching we list your email (MX) records, because many WordPress hosts also run the mailbox, and we confirm mail still arrives after the change. Cancel the old hosting only after launch checks pass.',
  },
  {
    category: 'wordpress-store-and-launch',
    question: 'How do you keep the blog live while it moves?',
    answer:
      'WordPress stays live until launch. We import a first full export into Shopify, review it with you, then freeze publishing for a short window and import anything posted since. DNS switches, we test redirects and pages, and the old host stays paid for until those checks pass, so going back is a DNS change.',
  },
  {
    category: 'wordpress-cost',
    question: 'How much does a WordPress to Shopify migration cost?',
    answer:
      'It depends on post count, how many pages use a page builder, how categories and authors map, and whether you have old ?p= links to handle outside Shopify. A WooCommerce store adds product and order work. FactoryJet quotes a fixed price in writing after a short scoping call, with defects fixed inside the build price for a cover period agreed up front.',
  },
  {
    category: 'wordpress-cost',
    question: 'How long does a WordPress to Shopify migration take?',
    answer:
      'FactoryJet migrations run 5 to 8 weeks from signed scope to launch, and a custom-theme store without migration takes 3 to 5 weeks. A blog-only move into a store you already run on Shopify is scoped on its own and quoted in writing. Across 500+ businesses since 2014, 97% of our projects have shipped on time.',
  },
];

const STAT_CARDS = [
  { num: '9', title: 'Content types in a WXR file', desc: 'Posts, pages, custom post types, comments, custom fields, categories, tags, taxonomies and users.', icon: '📄', src: SRC.wpExport },
  { num: '?p=', title: 'WordPress default permalink', desc: 'Plain permalinks are the install default, so older blogs often carry /?p=123 links.', icon: '🔗', src: SRC.wpPermalinks },
  { num: 'Tags', title: 'Shopify in place of categories', desc: 'Shopify organizes posts with tags, so the WordPress category tree flattens.', icon: '🏷️', src: SRC.shopifyBlogPosts },
  { num: '100,000', title: 'Shopify redirect limit', desc: 'Standard plans hold 100,000 redirects; Shopify Plus holds 20,000,000.', icon: '↪️', src: SRC.shopifyRedirects },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Shopify Has No WXR Import Button',
    problem: 'WordPress hands you one WXR file. Shopify’s migration notes point to apps or the Blog API for blog posts, not an upload screen.',
    solution: 'We parse the WXR file, clean each post’s HTML and post it through the Blog API with its original date, excerpt and slug.',
  },
  {
    num: '02',
    title: 'Categories and Authors Do Not Map One to One',
    problem: 'Shopify posts use tags, not a category tree, and an author must be the store owner or a staff account with admin access.',
    solution: 'Categories become tags or separate blogs, and we agree with you which writers get staff accounts and which posts carry a byline line.',
  },
  {
    num: '03',
    title: 'Images Still Live on the WordPress Host',
    problem: 'The WXR file references images in /wp-content/uploads by URL. Close the host and every image in every post breaks.',
    solution: 'We download each image, upload it to Shopify, and rewrite the image links inside every post before it is published.',
  },
  {
    num: '04',
    title: 'Old Permalinks Come in Five Shapes',
    problem: 'Date-based, ?p= query, category, tag and author URLs all need a target, and Shopify warns that query-string redirects might not work as expected.',
    solution: 'Every permalink shape gets a row in the 301 map, and ?p= links are handled at the DNS or CDN layer if Shopify’s tool cannot catch them.',
  },
];

const PARTNERS = [
  'Shopify Partner (registered)',
  'WordPress WXR export',
  'Shopify Blog API',
  'Yoast and Rank Math fields',
  '/wp-content/uploads images',
  'Shopify URL redirects',
  'Google Search Console',
  'Shopify Buy Button',
];

const MIGRATION_STEPS = [
  {
    n: '01',
    t: 'Decide: blog only, or WooCommerce too?',
    d: 'A WooCommerce store adds product, customer and order files, covered by our WooCommerce guide. A content-only site moves posts, pages and media.',
    icon: '🧭',
  },
  {
    n: '02',
    t: 'Pull 12 months of Search Console data',
    d: 'We rank every post by clicks, so you can choose which posts move and which redirect to a stronger post.',
    icon: '📊',
  },
  {
    n: '03',
    t: 'Export the WXR file from Tools > Export',
    d: 'All content, or Posts filtered by category, author, date range or status. One .xml file comes back.',
    icon: '📦',
  },
  {
    n: '04',
    t: 'Download every image in /wp-content/uploads',
    d: 'Each referenced image is fetched, uploaded to Shopify and its new address written back into the post HTML.',
    icon: '🖼️',
  },
  {
    n: '05',
    t: 'Convert shortcodes and blocks to clean HTML',
    d: 'Shortcodes that only work with a plugin are rewritten. Page builder layouts are listed for a theme rebuild.',
    icon: '🧹',
  },
  {
    n: '06',
    t: 'Map categories, tags and authors',
    d: 'Categories become tags or separate blogs. Authors map to staff accounts or a byline line, agreed with you in writing.',
    icon: '🏷️',
  },
  {
    n: '07',
    t: 'Post articles through the Blog API',
    d: 'Each article keeps its publish date, excerpt, slug and the SEO title and description from Yoast or Rank Math.',
    icon: '📝',
  },
  {
    n: '08',
    t: 'Rebuild pages and the blog design',
    d: 'Static pages move as Shopify pages; page builder layouts become theme sections. You review a working demo before sign-off.',
    icon: '💻',
  },
  {
    n: '09',
    t: 'Write the 301 map for every permalink shape',
    d: 'Posts, date archives, category, tag and author archives, pages and ?p= links each get a target, one row per old URL.',
    icon: '🔗',
  },
  {
    n: '10',
    t: 'Freeze, re-sync, switch DNS',
    d: 'Publishing pauses briefly, new posts are imported, DNS points to Shopify, then redirects and email are tested.',
    icon: '🚀',
  },
];

const URL_PATTERNS = [
  { from: '/2024/05/28/post-name/ or /2024/05/post-name/', to: '/blogs/news/post-name', note: 'Day and name, or Month and name, permalinks. The slug stays; the dates drop.' },
  { from: '/?p=123', to: '/blogs/news/{handle}', note: 'The WordPress default. Shopify warns query-string redirects might not work as expected, so we test these and add a DNS or CDN rule if needed.' },
  { from: '/category/{slug}/ and /tag/{slug}/', to: 'The matching Shopify blog or tag view', note: 'Category and tag bases are WordPress defaults, editable but never removable.' },
  { from: '/author/{name}/', to: '/blogs/news or the writer’s best post', note: 'Shopify has no author archive pages.' },
  { from: '/about/, /contact/ and other pages', to: '/pages/{handle}', note: 'Pages move as Shopify pages with their copy and images.' },
  { from: '/wp-content/uploads/... images', to: 'Shopify-hosted files', note: 'We redirect image URLs that have backlinks or image search traffic.' },
];

const BEFORE_YOU_START = [
  'Check Settings > Permalinks and note which structure you use, plus any category or tag base.',
  'Decide whether WooCommerce is part of the move or the blog alone.',
  'List every plugin that changes post output: SEO, shortcodes, page builders, related posts.',
  'List every writer who needs to appear as an author on Shopify.',
  'Note where your email is hosted, since many WordPress hosts also run the mailbox.',
];

const ASK_A_PARTNER = [
  'How do you get the WXR file into Shopify when there is no import screen?',
  'Will images be re-hosted on Shopify, or still load from my WordPress host?',
  'How will my categories, tags and authors map?',
  'Do my Yoast or Rank Math titles and descriptions carry over?',
  'What is your plan for old ?p= links and date-based permalinks?',
  'Can I see a working demo with my own posts before I sign?',
];

const RELATED_LINKS = [
  { href: '/replatforming/woocommerce-to-shopify', label: 'WooCommerce to Shopify: products, customers and orders' },
  { href: '/services/wordpress-shopify-integration', label: 'Keep WordPress for the blog and connect it to a Shopify store' },
  { href: '/services/wordpress-development', label: 'WordPress development, if you stay on WordPress' },
  { href: '/services/shopify-migration-agency', label: 'Shopify migration agency: scope and fixed quotes' },
  { href: '/replatforming/wix-to-shopify', label: 'Wix to Shopify: rebuilding a blog that Wix cannot export' },
  { href: '/replatforming/squarespace-to-shopify', label: 'Squarespace to Shopify: one blog per .xml export' },
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
  name: 'WordPress to Shopify Blog Migration',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  serviceType: 'WordPress blog and site migration to Shopify',
  description:
    'Moves WordPress posts and pages from a WXR export into Shopify through the Blog API, re-hosts /wp-content/uploads images, maps categories to tags, and redirects every permalink with a single-hop 301.',
  areaServed: ['US', 'GB', 'CA', 'AU'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Replatforming Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'WordPress to Shopify Migration',
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
  url: 'https://factoryjet.com/replatforming/wordpress-to-shopify',
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
    { '@type': 'ListItem', position: 3, name: 'WordPress to Shopify', item: 'https://factoryjet.com/replatforming/wordpress-to-shopify' },
  ],
};


const EVALUATION_CRITERIA = [
  {
    label: 'Getting posts in',
    factoryjet: 'WXR parsed by script and posted through the Blog API with original dates, excerpts, slugs and SEO fields.',
    traditional: 'Posts pasted in one by one, dates reset to launch day, SEO titles lost.',
  },
  {
    label: 'Images',
    factoryjet: 'Every /wp-content/uploads image re-hosted on Shopify and rewritten inside each post.',
    traditional: 'Images left loading from the old host until it is cancelled, then broken.',
  },
  {
    label: 'Permalinks',
    factoryjet: 'Every shape mapped: dates, ?p=, category, tag, author and page URLs, each a single-hop 301.',
    traditional: 'Posts mapped, archives and ?p= links ignored.',
  },
  {
    label: 'Price and accountability',
    factoryjet: 'Fixed price per phase, a working demo on your own posts before you sign, defects fixed inside the build price.',
    traditional: 'Hourly billing that grows with post count.',
  },
];

export default function WordPressToShopifyPage() {
  return (
    <>
      <script id="wordpress-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="wordpress-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="wordpress-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="wordpress-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="wordpress-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>WordPress to Shopify Migration</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Migrate Your WordPress Blog to Shopify, Every Permalink Redirected
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  To migrate a WordPress blog to Shopify, export it from Tools &gt; Export as a WXR (.xml) file holding posts, pages, comments, categories, tags and authors. Shopify has no screen that imports that file, so posts go in through an app or the Blog API. Categories become tags, images are re-uploaded, and every old permalink gets a 301. Running WooCommerce too? That is a store migration as well.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Free Blog Migration Audit" region="us" btnVariant="primary-dark" />
                  <a href="#wordpress-export-table" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>What the WXR File Holds</span>
                  </a>
                </div>

                <p style={{ fontSize: '13px', color: '#6E6E80', margin: '20px 0 0' }}>
                  Updated 22 October 2026 · Bhavesh Barot, Founder
                </p>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame (Edge-to-Edge) */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/replatforming/wordpress-hero-content-timeline.webp"
                  alt="A woman in a green blazer writing in a notebook beside a laptop that shows a timeline of coloured bars"
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
              <div className="rv-ticker-label">What a WordPress Blog Move Touches</div>
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
                  src="/images/replatforming/wordpress-team-layout-compare.webp"
                  alt="Two people at a wooden desk comparing a layout of grey blocks on one monitor with a coloured layout on the other"
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
                  A WordPress Blog in Four Numbers
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  WordPress is generous at export and Shopify is strict at import, so the work sits in between. FactoryJet is a registered Shopify Partner that has served 500+ businesses since 2014, and we build both sides: WordPress and Shopify. You see your own posts running on a Shopify demo before you sign.
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

        {/* ── 04. WHY LEAVE WORDPRESS (RITOVEX NUMBERED SERVICES ROWS) ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Blog Migration Problems</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Where WordPress Blog Moves Break
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                The export button works fine. The trouble starts when hundreds of posts, their images and their old URLs have to fit Shopify’s simpler blog.
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
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.08em' }}>On WordPress:</span>
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
                <h3 className="rv-service-title" style={{ margin: '0 0 12px' }}>Five things to check in WordPress first</h3>
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
            badge="// WORDPRESS WXR TO SHOPIFY BLOG"
            title="From WXR File to Shopify Articles"
            subtitle="Posts and pages from the WXR export into the Blog API, images out of /wp-content/uploads, categories into tags, and a 301 for every permalink shape."
            legacySource="WordPress"
            targetStack="Shopify"
            ctaLabel="Book a WordPress Blog Scoping Call"
            region="us"
          />
        </div>

        {/* ── 06. RITOVEX SIDE-BY-SIDE COMPARISON TABLE ── */}
        <section className="pp-sec" id="wordpress-export-table" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>From WordPress.org and Shopify Docs</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                WordPress Content Next to Its Shopify Home
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Each row cites the WordPress.org or Shopify page we read on 22 October 2026. Where a row says “we”, it describes our method, not a vendor rule.
              </p>
            </div>

            <div style={{ overflowX: 'auto', borderRadius: '14px', border: '1px solid #E6E6EC' }}>
              <table className="pp-table" style={{ margin: 0, width: '100%', background: '#FFFFFF' }}>
                <thead style={{ background: '#F6F6F9' }}>
                  <tr>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Data</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>What WordPress exports</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Where it goes in Shopify</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Source (checked 22 Oct 2026)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Export file</td>
                    <td>One WXR (.xml) file from Tools &gt; Export, filtered by category, author, date range or status.</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>No admin import screen. Blogs move by migration app or Blog API.</td>
                    <td><a href={SRC.wpExport.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.wpExport.label}</a>; <a href={SRC.shopifyConsiderations.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.shopifyConsiderations.label}</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Posts</td>
                    <td>Posts, custom post types and custom fields (where SEO plugins keep titles).</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Articles at /blogs/&#123;blog-name&#125;/&#123;handle&#125;, each with a search engine listing.</td>
                    <td><a href={SRC.wpExport.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.wpExport.label}</a>; <a href={SRC.shopifyArticleUrl.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.shopifyArticleUrl.label}</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Categories and tags</td>
                    <td>Categories, tags and custom taxonomies.</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Tags organize posts into categories or subjects; extra blogs can be created.</td>
                    <td><a href={SRC.wpExport.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.wpExport.label}</a>; <a href={SRC.shopifyBlogPosts.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.shopifyBlogPosts.label}</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Authors</td>
                    <td>Users are included in the export.</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Author must be the store owner or a staff member with admin access.</td>
                    <td><a href={SRC.wpExport.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.wpExport.label}</a>; <a href={SRC.shopifyBlogPosts.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.shopifyBlogPosts.label}</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Pages</td>
                    <td>Pages are included in the export.</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Single pages such as shipping or refund policies can usually be pasted in.</td>
                    <td><a href={SRC.shopifyConsiderations.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.shopifyConsiderations.label}</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Permalinks</td>
                    <td>Plain /?p=N is the install default; Day and name, Month and name, Numeric, Post name or Custom. Category and tag bases cannot be removed.</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Up to 100,000 redirects (20,000,000 on Plus). Query-string URLs might not redirect as expected.</td>
                    <td><a href={SRC.wpPermalinks.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.wpPermalinks.label}</a>; <a href={SRC.shopifyRedirects.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.shopifyRedirects.label}</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Members</td>
                    <td>Site users, if any are shoppers or subscribers.</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Customer CSV import. Passwords cannot be migrated; customers get an invite.</td>
                    <td><a href={SRC.shopifyCustomers.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.shopifyCustomers.label}</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Keep WordPress</td>
                    <td>Your WordPress site stays as it is.</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Buy Button adds Shopify products to an external site; included in all plans.</td>
                    <td><a href={SRC.shopifyBuyButton.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.shopifyBuyButton.label}</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Monthly platform fee</td>
                    <td>Whatever you pay your host and plugin vendors today.</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Basic $39/mo monthly or $29/mo yearly; Grow $105 or $89; Advanced $399 or $359 (USD).</td>
                    <td><a href={SRC.shopifyPricing.url} target="_blank" rel="noopener noreferrer" style={EXT_LINK}>{SRC.shopifyPricing.label}</a></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ maxWidth: '960px', margin: '40px auto 0' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#141414', margin: '0 0 12px' }}>WordPress permalink shapes and where each one points</h3>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', color: '#494852', lineHeight: 1.6 }}>
                {URL_PATTERNS.map((u) => (
                  <li key={u.from} style={{ marginBottom: '8px' }}>
                    <strong style={{ color: '#141414' }}>{u.from}</strong> to <strong style={{ color: '#141414' }}>{u.to}</strong>. {u.note}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '14px', color: '#494852', margin: '16px 0 0', lineHeight: 1.6 }}>
                Selling through WooCommerce as well? Products and orders follow the <Link href="/replatforming/woocommerce-to-shopify" style={EXT_LINK}>WooCommerce to Shopify</Link> plan. Prefer to keep the blog on WordPress? Our <Link href="/services/wordpress-shopify-integration" style={EXT_LINK}>WordPress and Shopify integration</Link> service connects the two instead.
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
                  <span>Blog Migration Steps</span>
                </div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 18px' }}>
                  WordPress Blog to Shopify in 10 Steps
                </h2>
                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  Search Console data comes first, because it decides which posts deserve the move. Images are re-hosted before a single article is published, and the redirect map is tested before DNS changes.
                </p>
                <ModalCTAButton label="Start Your WordPress Audit" region="us" btnVariant="primary-dark" />
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
                Picking a Partner for a WordPress Blog Move
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Blog moves look cheap on paper. Check these four before you compare prices:
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
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#141414', margin: '0 0 12px' }}>Questions for any WordPress migration quote</h3>
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
          eyebrow="WORDPRESS BLOG MIGRATION"
          headline="WordPress to Shopify Blog Migration FAQ"
          lead="What editors and owners ask before moving a WordPress blog or site to Shopify:"
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
              Send Us Your WordPress Site
            </h2>

            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              We read your permalink setup, count posts, pages and images, list the plugins that shape your content, and send a written fixed price with the redirect plan attached.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Schedule WordPress Discovery Call" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
