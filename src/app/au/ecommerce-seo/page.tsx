import type { Metadata } from 'next';
import { Fragment } from 'react';
import HeroInlineForm from '@/components/HeroInlineForm';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import AuFaq from '../components/AuFaq';
import VisualSlot from '../components/VisualSlot';
import '@/components/v2/AiAgentDevelopmentSections.css';
import '../au-page.css';
import './page.css';

const CANONICAL = 'https://factoryjet.com/au/ecommerce-seo';
const UPDATED = '2026-09-26';
const TITLE = 'Ecommerce SEO Agency Australia | Shopify SEO | FactoryJet';
const H1 = 'Ecommerce SEO Agency Australia: SEO That Sells Products';
const DESCRIPTION =
  'Ecommerce SEO and Shopify SEO for Australian online stores: collection pages, product data, Google Shopping free listings, AI search and safe migrations.';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'Ecommerce SEO', url: CANONICAL },
];

/* ─── External sources, fetch-verified 2026-09-26 ───────────────────── */
// Google Search Central, "Managing crawling of faceted navigation URLs"
// (updated 2025-12-18): use robots.txt to disallow faceted URLs when they do
// not need indexing; canonical to the unfiltered page may reduce crawling;
// return 404 for filter combinations with no results.
const SRC_FACETS = 'https://developers.google.com/search/docs/crawling-indexing/crawling-managing-faceted-navigation';
// Google Merchant Center Help, "Free listings for products": free listings
// show products across Search, Shopping, Maps and more; shipping settings are
// required in countries including Australia; return policy shown next to
// products; products are not guaranteed to show.
const SRC_FREE_LISTINGS = 'https://support.google.com/merchants/answer/9199328';
// Google Search Central, "Introduction to Product structured data": product
// snippets and merchant listings, price, availability, shipping, returns.
const SRC_PRODUCT_SD = 'https://developers.google.com/search/docs/appearance/structured-data/product';
// Shopify Help Center, "Editing robots.txt.liquid": add robots.txt.liquid to
// the theme templates folder; unsupported customisation; incorrect use "can
// result in loss of all traffic".
const SRC_SHOPIFY_ROBOTS = 'https://help.shopify.com/en/manual/promoting-marketing/seo/editing-robots-txt';
// Shopify Help Center, "Finding and submitting your sitemap": all stores
// automatically generate sitemap.xml with products, primary product image,
// pages, collections and blog posts.
const SRC_SHOPIFY_SITEMAP = 'https://help.shopify.com/en/manual/promoting-marketing/seo/find-site-map';
// ACCC, "Online reviews for product and services": illegal to create fake or
// misleading reviews; must not suppress genuine negative reviews; incentives
// apply regardless of rating and must be disclosed.
const SRC_ACCC_REVIEWS = 'https://www.accc.gov.au/business/advertising-and-promotions/online-reviews';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',    label: 'Ecommerce SEO basics' },
  { key: 'shopify',   label: 'Shopify SEO' },
  { key: 'platforms', label: 'WooCommerce, Magento & BigCommerce' },
  { key: 'work',      label: 'Audits, Google Shopping & AI search' },
  { key: 'choosing',  label: 'Cost, timing & choosing an agency' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── Basics ──
  { category: 'basics', question: 'What is SEO for ecommerce?',
    answer: 'Ecommerce SEO is the work that gets an online store’s category, product and brand pages found in Google, Bing and AI answers when people search for what you sell. It covers how the store is structured, what each collection and product page says, how clean the code and URLs are, what product data you give Google, and the links and mentions that make search engines trust the store.' },
  { category: 'basics', question: 'What are ecommerce SEO services?',
    answer: 'Ecommerce SEO services are the paid version of that work, done by an agency or consultant. A typical engagement includes an ecommerce SEO audit, keyword and category research, collection page copy, product page templates, technical fixes for duplicate and filtered URLs, structured data, Google Merchant Center setup for free listings, content that answers buyer questions, earned links, and monthly reporting tied to revenue.' },
  { category: 'basics', question: 'How is ecommerce SEO different from normal SEO?',
    answer: 'A service business might have twenty pages. A store can have thousands, and most are created by the platform rather than written by a person. So ecommerce SEO is more about templates and rules than single pages: which filtered URLs Google should crawl, how variants are handled, what happens when stock runs out, and how product data flows into Google Shopping and AI answers.' },
  { category: 'basics', question: 'What does an ecommerce SEO agency actually do each month?',
    answer: 'In a normal month we fix technical issues found in the crawl, write or improve collection pages for the categories with the most demand, tune product templates, publish buying guides that answer real customer questions, check Merchant Center for disapproved products, and earn a small number of genuine links or mentions. You get a short report showing organic revenue, not just rankings.' },
  { category: 'basics', question: 'Is SEO still worth it in 2026?',
    answer: 'For most online stores, yes. Organic search is the one channel where you do not pay again for every visit, and the same work now feeds AI answers too: Google AI Overviews, AI Mode and assistants such as ChatGPT pull from pages and product data that search engines already trust. What has changed is that thin, copied product pages earn far less than they used to.' },
  { category: 'basics', question: 'What is replacing SEO?',
    answer: 'Nothing is replacing it outright, but it is widening. People now ask AI assistants what to buy as well as searching Google. That is often called GEO (generative engine optimisation) or AI SEO. For a store, the foundations are the same: clear category pages, complete product data, honest reviews and a brand that other sites mention. We treat AI visibility as part of ecommerce SEO, not a separate product.' },
  { category: 'basics', question: 'Can ChatGPT do SEO for my store?',
    answer: 'ChatGPT can help draft descriptions, suggest keywords and explain issues, and we use AI tools every day. It cannot crawl your store the way Google does, see your Search Console data, fix your theme, or earn links. Unedited AI copy pasted across hundreds of products also tends to read the same, which makes pages easy to ignore. Use it as an assistant, with a person checking the work.' },

  // ── Shopify SEO ──
  { category: 'shopify', question: 'Can you do SEO on Shopify?',
    answer: 'Yes. You can edit titles, meta descriptions, URL handles, image alt text and page content for every product, collection, page and blog post, and Shopify builds a sitemap automatically. For deeper work, a developer can edit the theme code and the robots.txt.liquid file. Most Shopify SEO limits are about how the theme and apps are built, not the platform itself.' },
  { category: 'shopify', question: 'Does Shopify have good SEO?',
    answer: 'Shopify is a sound base. It is fast when the theme is lean, it handles hosting and security, it sets canonical tags on products, and it generates sitemap.xml for you. The weak spots are fixed URL prefixes such as /products/ and /collections/, duplicate paths when products are linked through collections, filtered collection URLs, and apps that add slow scripts. All are manageable with the right setup.' },
  { category: 'shopify', question: 'Does Shopify do SEO for me?',
    answer: 'Shopify handles the plumbing, not the strategy. It gives you a sitemap, basic canonical tags, editable titles and a default robots.txt. It does not research what your customers search for, write your collection pages, fix duplicate URLs your theme creates, set up rich product data beyond the theme defaults, or earn links. That is the work a Shopify SEO agency or your own team still has to do.' },
  { category: 'shopify', question: 'What is the best SEO tool or app for Shopify?',
    answer: 'There is no single best one. Google Search Console is free and essential. A crawler such as Screaming Frog finds technical issues. For keywords, Semrush or Ahrefs are the usual choices. On the Shopify side, be careful with SEO apps: several do the same job, and each adds code. We often remove more apps than we add, and build structured data into the theme instead.' },
  { category: 'shopify', question: 'Which SEO agencies are best for Shopify?',
    answer: 'The best Shopify SEO agency for you is one that understands both SEO and Shopify themes, can show you work on stores like yours, and will explain its plan in plain English. Australian options include StudioHawk and 23 Digital, which both have dedicated Shopify SEO pages, and specialists like us who also build Shopify stores. We list the options further down this page.' },
  { category: 'shopify', question: 'Where can I hire a Shopify SEO expert in Australia?',
    answer: 'You can hire a freelancer through a marketplace, an SEO agency, or a Shopify agency that also does SEO. A freelancer suits a one-off clean-up. An agency suits ongoing work across content, technical fixes and links. If your theme is causing the problems, pick someone who can edit Liquid code, the language Shopify themes are written in, so fixes happen at the source.' },
  { category: 'shopify', question: 'How do I stop Shopify creating duplicate product URLs?',
    answer: 'Many Shopify themes link to products through collection paths, such as /collections/shoes/products/runner, as well as the main /products/runner URL. Shopify points the canonical tag at the main URL, but internal links still spread signals across copies. The fix is a small theme change so collection grids link straight to /products/ URLs. We check for this in every Shopify SEO audit.' },
  { category: 'shopify', question: 'Will I lose rankings if I move my store to Shopify?',
    answer: 'Not if the migration is planned properly. Rankings drop when old URLs break, content is thinned out or titles are lost. We crawl the old store first, map every old URL to its new home with 301 redirects, move metadata and reviews, rehearse on a copy, and watch Search Console daily after launch. See our Shopify development page for the full migration process.' },

  // ── Platforms ──
  { category: 'platforms', question: 'Do you do SEO for Magento (Adobe Commerce) stores?',
    answer: 'Yes. Magento SEO services focus on the problems Magento creates at scale: layered navigation that produces huge numbers of filter URLs, duplicate category paths, slow pages from heavy extensions, and messy canonical settings. We fix those in configuration and code, then work on category content and product data. If you are thinking of leaving Magento, we can also plan the move.' },
  { category: 'platforms', question: 'Do you work as a WooCommerce SEO agency?',
    answer: 'Yes. WooCommerce runs on WordPress, which gives you a lot of control and a lot of ways to go wrong. Common issues are thin product tag and category archives, plugin conflicts, slow shared hosting and several SEO plugins fighting each other. We tidy the structure, set indexing rules for archives, speed up the store and write the category pages that carry your main terms.' },
  { category: 'platforms', question: 'Do you do BigCommerce SEO or Maropost (Neto) SEO?',
    answer: 'Yes. BigCommerce and Maropost Commerce Cloud, formerly Neto and popular with Australian retailers, have their own URL rules, faceted search and template systems. The principles are the same as any platform: control which filtered pages get crawled, give every category real content, keep product data complete and clean. If you are weighing a platform change, we will give you an honest view of each.' },
  { category: 'platforms', question: 'Which ecommerce platform is best for SEO?',
    answer: 'Any of the main platforms can rank well. Shopify is simplest to keep healthy. WooCommerce gives the most control but needs care. Magento suits large, complex catalogues but needs strong developers. BigCommerce sits between Shopify and Magento. Pick the platform that fits how you sell, then set it up properly. Our guide to the best ecommerce platform in Australia compares them in more detail.' },
  { category: 'platforms', question: 'Do you do B2B ecommerce SEO?',
    answer: 'Yes. B2B stores often hide prices behind a login and sell thousands of part numbers, so SEO focuses on public category pages, spec-rich product pages that trade buyers search by part number or specification, and content that answers procurement questions. We make sure the public side is crawlable while trade pricing and accounts stay behind the login.' },

  // ── Audits, Shopping & AI ──
  { category: 'work', question: 'What does an ecommerce SEO audit include?',
    answer: 'A proper ecommerce SEO audit covers crawling and indexing (what Google can and cannot reach), duplicate and filtered URLs, collection and product templates, structured data, page speed on mobile, internal links, Merchant Center health, content gaps against real search demand, and your link profile. You get a prioritised list: what to fix first, why, and roughly how much effort each item takes.' },
  { category: 'work', question: 'How do I stop product and category pages competing with each other?',
    answer: 'Give each page one job. Category or collection pages target the broad term, such as "linen sheets", and product pages target the specific item, such as a named colour and size. Write collection copy for the broad term, keep product titles specific, and link from products back up to their main category. When two pages chase the same term, we merge or re-focus one of them.' },
  { category: 'work', question: 'How do I get my products into Google Shopping free listings?',
    answer: 'Set up Google Merchant Center, connect your product feed (Shopify, WooCommerce and BigCommerce all have integrations), and fill in shipping settings, which Google requires in Australia. Add your returns policy so it can show next to your products. Then fix any disapproved items. Google says free listings are not guaranteed, because it relies on your product data to match searches, so complete data matters.' },
  { category: 'work', question: 'How do products show up when people ask ChatGPT what to buy?',
    answer: 'AI assistants build shopping answers from web pages, product data and reviews they can find and trust. Stores that appear tend to have clear category pages, complete product details (materials, sizes, compatibility, shipping), genuine reviews and mentions on other sites. Nobody can guarantee a placement, but you can make your products easy to understand and easy to cite. Our AI SEO page covers this in depth.' },
  { category: 'work', question: 'What happens to SEO when a product goes out of stock?',
    answer: 'If it is coming back, keep the page live, mark it out of stock in the structured data and offer similar products or a back-in-stock alert. If it is gone for good and has links or traffic, 301 redirect it to the closest product or category. If it never had traffic, let it return a 404. Deleting pages that rank, without a redirect, is one of the most common ways stores lose traffic.' },
  { category: 'work', question: 'Can you help with product reviews for SEO?',
    answer: 'Yes, within the rules. Genuine reviews help shoppers and add useful words to product pages. The ACCC says it is illegal to create fake reviews, suppress genuine negative ones, or offer incentives only for positive reviews, and incentives must be disclosed. We set up honest review requests after delivery and mark up review data correctly, and we never write or buy reviews.' },

  // ── Cost & choosing ──
  { category: 'choosing', question: 'What is the best SEO agency for ecommerce in Australia?',
    answer: 'The best one for you depends on your platform, catalogue size and whether you need code changes as well as advice. Large SEO agencies such as StudioHawk and 23 Digital have deep ecommerce SEO teams. Specialists such as Kia Ora Digital focus on online stores. We suit stores that want SEO and theme or platform work from one team. Ask each for work on stores like yours.' },
  { category: 'choosing', question: 'How much does ecommerce SEO cost in Australia?',
    answer: 'It depends on the size of the catalogue, how much technical debt the store carries, how competitive your categories are, and whether you need content and links as well as fixes. We do not publish a price list. We quote a fixed scope after a free review. For typical Australian market ranges from third-party sources, read our SEO cost guide for Australia.' },
  { category: 'choosing', question: 'How much does Shopify SEO cost?',
    answer: 'A one-off Shopify SEO clean-up after a build or migration is a fixed piece of work. Ongoing Shopify SEO, covering collection content, product templates and links over months, is a monthly engagement. The main drivers are catalogue size, how much duplicate content the theme creates, how many apps need untangling, and how crowded your category is. Our SEO and Shopify cost guides show current Australian market ranges.' },
  { category: 'choosing', question: 'How long does ecommerce SEO take to work?',
    answer: 'Technical fixes on an established store can show in Search Console within weeks, once Google recrawls the pages. New collection content and links usually take a few months to move rankings in a competitive category. A brand-new store with no history takes longer. We set a realistic timeline after the audit, and report on leading signals, such as pages indexed and impressions, before revenue follows.' },
  { category: 'choosing', question: 'Is it worth hiring an ecommerce SEO agency?',
    answer: 'It is worth it when organic revenue could be a meaningful share of sales and you do not have the time or skills in-house. It is not worth it if the store has almost no products, no budget to act on the advice, or a platform that needs replacing first. A good agency will tell you which of those applies before it asks you to sign anything.' },
  { category: 'choosing', question: 'What does an ecommerce SEO consultant do?',
    answer: 'An ecommerce SEO consultant advises rather than does all the work. They audit the store, set the strategy, prioritise fixes and guide your team or developers. It suits businesses with an in-house marketer or developer who can implement. We work either way: as consultants to your team, or as the team that does the work, including theme and code changes.' },
  { category: 'choosing', question: 'Can I do ecommerce SEO myself?',
    answer: 'You can do a lot yourself: write collection descriptions, tidy product titles, add alt text, set up Merchant Center and submit your sitemap in Search Console. Where owners usually need help is theme code, filtered URL control, structured data, migrations and link earning. A one-off audit is a sensible middle path: we find the issues, you fix what you can, and we handle the rest.' },
  { category: 'choosing', question: 'Do you work with stores in Sydney, Melbourne, Brisbane and Perth?',
    answer: 'Yes. We work with online stores right across Australia, including Sydney, Melbourne, Brisbane, Perth and Adelaide, remotely and with video calls. Ecommerce SEO does not depend on where your office is, because you sell to the whole country. If you want local search as well, for example a showroom or click and collect, we add local SEO for that location.' },
];

/* ─── Named Australian ecommerce SEO providers (open self-disclosure,
       ItemList). Each note is based on the company’s own ecommerce or
       Shopify SEO page, fetched 2026-09-26. ─────────────────────────── */
const PROVIDERS: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. Ecommerce SEO from a team that also builds and migrates Shopify, WooCommerce and Magento stores, so fixes happen in the theme, not around it. Founder involved on every project, and you own every account and file.' },
  { name: 'StudioHawk', note: 'An Australian SEO agency with dedicated ecommerce SEO and Shopify SEO pages. Its pages describe technical foundations, category and product optimisation, content and links, and AI search, across Shopify, WooCommerce, Magento, BigCommerce and Neto.' },
  { name: '23 Digital', note: 'An Australian digital agency with separate ecommerce SEO, Shopify SEO and Magento SEO pages, covering keyword research, site architecture, on-page, off-page and paid media, with sections for Melbourne, Sydney, Brisbane and Perth.' },
  { name: 'Impressive Digital', note: 'An Australian digital agency whose ecommerce SEO page covers on-page, technical and off-page SEO, Google Merchant Center and organic Shopping, and programmatic SEO for online retailers.' },
  { name: 'Kia Ora Digital', note: 'An ecommerce SEO agency based in Melbourne, with offices in Queenstown and London, offering keyword research, technical SEO, content and link building for platforms such as Shopify and BigCommerce.' },
  { name: 'Sentius', note: 'A Melbourne-based digital agency whose ecommerce SEO page covers technical fixes, product and category page optimisation, and platform work on Shopify, WooCommerce and BigCommerce.' },
];

/* ─── JSON-LD. The Organization is referenced by @id only. ─────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Ecommerce SEO Agency Australia',
      serviceType: 'Ecommerce SEO, Shopify SEO, WooCommerce SEO and Magento SEO services',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'Ecommerce SEO services for Australian online stores on Shopify, WooCommerce, Magento (Adobe Commerce), BigCommerce and Maropost: ecommerce SEO audits, collection and product page optimisation, technical SEO for large catalogues, Google Shopping free listings, AI search visibility and migration protection.',
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
      datePublished: '2026-09-26',
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
      '@id': `${CANONICAL}#providers`,
      name: 'Australian ecommerce SEO and Shopify SEO agencies',
      itemListElement: PROVIDERS.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.name,
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
      'Ecommerce SEO services for Australian online stores on Shopify, WooCommerce and Magento. Collection pages, product data, Google Shopping, AI search and migrations, from a team that also builds stores.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/images/au/ecommerce-seo/ecommerce-seo-og.webp', width: 1200, height: 630, alt: 'Ecommerce SEO Australia: a store founder and an SEO consultant plan an online store’s category structure on a wall of blank cards' }],
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* The eight areas ecommerce SEO covers (numbered listicle). */
const AREAS: { t: string; d: string }[] = [
  { t: 'Category and collection pages', d: 'These carry your most valuable search terms, such as "linen bedding" or "trail running shoes". Each one needs a clear title, a short helpful introduction, sensible filters and links to related categories.' },
  { t: 'Product pages', d: 'Unique descriptions instead of supplier copy, specific titles, real photos with descriptive alt text, sizes, materials, delivery and returns information, and genuine reviews.' },
  { t: 'Technical SEO for large catalogues', d: 'Crawling and indexing, duplicate URLs from variants and collection paths, filtered navigation, pagination, page speed on mobile, and what happens when stock runs out.' },
  { t: 'Structured data', d: 'Product markup that tells Google the price, availability, shipping and returns, so products can appear as rich results and merchant listings.' },
  { t: 'Google Shopping free listings', d: 'A clean Merchant Center feed with shipping and returns set up, so products can show for free across Search, the Shopping tab, Images and Maps.' },
  { t: 'AI search for products', d: 'Making products easy for Google AI Overviews, AI Mode, ChatGPT and Perplexity to understand and recommend: complete product facts, buying guides and mentions on other sites.' },
  { t: 'Content that answers buyers', d: 'Buying guides, size guides, comparisons and care guides that answer the questions people ask before they buy, and link to the right categories.' },
  { t: 'Migration protection', d: 'When you replatform or redesign, a full redirect map and pre-launch checks so years of rankings move with you instead of disappearing.' },
];

/* Icons and visual-slot subjects for the eight area cards (same order as AREAS). */
const AREA_ICONS = [
  'M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z',
  'M3 12 12 3h8v8l-9 9-8-8Zm13-5h.01',
  'M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0-6v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1m-8.6 8.6-2.1 2.1',
  'm8 7-5 5 5 5m8-10 5 5-5 5M14 4l-4 16',
  'M5 8h14l-1 12H6L5 8Zm4 0V6a3 3 0 0 1 6 0v2',
  'M12 3v4m0 10v4M3 12h4m10 0h4M7 7l2 2m6 6 2 2m0-10-2 2m-6 6-2 2',
  'M4 5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0-2 2V5Zm4 3h8',
  'M4 8h13l-3-3m6 11H7l3 3',
] as const;
const AREA_SUBJECTS = [
  'AI-generated model: white category cards arranged as a tree, the top card outlined in orange',
  'AI-generated model: a white product card with a photo, sizes and an orange delivery tag',
  'AI-generated model: a white catalogue grid where orange lines mark the few filter pages worth crawling',
  'AI-generated model: a white product page with an orange code bracket showing price, stock and returns',
  'AI-generated model: white product tiles appearing in a shopping strip, one with an orange free listing badge',
  'AI-generated model: a white chat bubble recommending three product cards, one outlined in orange',
  'AI-generated model: a white buying guide booklet with orange arrows pointing to category cards',
  'AI-generated model: old and new store pages joined by a single orange redirect arrow',
] as const;

/* Platform comparison rows. */
const PLATFORMS: { p: string; good: string; watch: string; fix: string }[] = [
  { p: 'Shopify', good: 'Fast hosting, automatic sitemap, canonical tags on products, easy editing of titles and handles.', watch: 'Fixed /products/ and /collections/ prefixes, collection-path duplicates, filtered collection URLs, app scripts slowing pages.', fix: 'Theme edits so grids link to /products/ URLs, careful robots.txt.liquid rules, app clean-up, structured data built into the theme.' },
  { p: 'WooCommerce', good: 'Full control of URLs, content and code on WordPress.', watch: 'Thin tag and category archives, plugin conflicts, several SEO plugins at once, slow shared hosting.', fix: 'Indexing rules for archives, one SEO plugin, hosting and caching review, real copy on product categories.' },
  { p: 'Magento (Adobe Commerce)', good: 'Built for large, complex catalogues and many store views.', watch: 'Layered navigation creating huge numbers of filter URLs, duplicate category paths, heavy extensions.', fix: 'Crawl rules for layered navigation, canonical configuration, extension audit, category content at scale.' },
  { p: 'BigCommerce', good: 'Clean hosted platform with editable URLs and built-in faceted search.', watch: 'Faceted search URLs, template limits, default category structures.', fix: 'Crawl rules for facets, custom URL structure, richer category templates.' },
  { p: 'Maropost (formerly Neto)', good: 'Popular with Australian retailers for inventory and multichannel selling.', watch: 'Template-driven pages that can end up thin, filter URLs, older themes.', fix: 'Template content, filter handling, speed work, or a planned move if the platform no longer fits.' },
];

/* "Which option fits you" self-check, rendered as <details>. */
const FIT_CHECK: { q: string; a: string; verdict: string }[] = [
  { q: 'We are a new store with a small catalogue and a tight budget.', verdict: 'Do it yourself first', a: 'Set up Search Console and Merchant Center, write a proper introduction on each collection, and use specific product titles. That covers the basics. Come back when you have traffic worth growing, or book a one-off audit to check the setup.' },
  { q: 'Traffic has flattened and we do not know why.', verdict: 'Ecommerce SEO audit', a: 'An audit is the right first step. It will show whether the cause is technical (pages not indexed, duplicates, speed), content (thin collections), competition, or a change in how Google shows results for your category.' },
  { q: 'We have a marketer in-house who can do the work with guidance.', verdict: 'Consultant', a: 'An ecommerce SEO consultant sets the strategy and priorities and reviews the work, while your team implements. It keeps costs down and builds skills in your business.' },
  { q: 'The theme or platform keeps getting in the way of fixes.', verdict: 'SEO plus development', a: 'You need an agency that can edit theme code and understands the platform, not one that sends you a spreadsheet of fixes your developer cannot action. This is where we are strongest.' },
  { q: 'We are about to replatform or redesign the store.', verdict: 'Migration protection', a: 'Bring SEO in before the new store is built, not after launch. The redirect map, content decisions and URL structure are far cheaper to get right before the switch.' },
];

/* What an ecommerce SEO audit checks, rendered as <details>. */
const AUDIT: { t: string; d: string }[] = [
  { t: 'Crawling and indexing', d: 'We crawl the store the way Google does and compare it with Search Console: which pages are indexed, which are excluded and why, and whether your sitemap matches what you actually want found.' },
  { t: 'Duplicate and filtered URLs', d: 'Variants, collection paths, sort orders, filters and tracking parameters. We measure how many URLs the store really exposes and which ones should be crawlable.' },
  { t: 'Collection and category pages', d: 'Whether each important category has a clear title, useful copy, sensible filters and links to related categories, and whether two pages are competing for the same term.' },
  { t: 'Product templates', d: 'Titles, descriptions, images, alt text, variant handling, out-of-stock behaviour and internal links, checked on a sample of products across your range.' },
  { t: 'Structured data and Merchant Center', d: 'Product markup against Google’s requirements, and the health of your Merchant Center feed: disapprovals, missing shipping and returns, price mismatches.' },
  { t: 'Speed and mobile experience', d: 'Core Web Vitals from real users where available, heavy apps and scripts, image sizes, and theme code that slows the first view on a phone.' },
  { t: 'Demand and content gaps', d: 'Real Australian search demand for your categories compared with the pages you have, including buyer questions you do not yet answer.' },
  { t: 'Links, mentions and AI visibility', d: 'Who links to you, who mentions you, and whether AI assistants name your store or your competitors when asked what to buy in your category.' },
];

const PROCESS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Free review call', d: 'You tell us about the store, platform, categories and goals. We look at the site before the call and tell you honestly whether SEO is the right lever right now.' },
  { n: '02', t: 'Ecommerce SEO audit', d: 'A full technical and content audit, with a prioritised list of fixes. You own the report whether or not you continue with us.' },
  { n: '03', t: 'Category and keyword map', d: 'We match real Australian search demand to your categories and products, so every important term has one page that owns it.' },
  { n: '04', t: 'Technical fixes', d: 'Theme and configuration changes for duplicates, filters, speed and structured data, done by developers who work on your platform every day.' },
  { n: '05', t: 'Collection and product work', d: 'We write collection copy, improve product templates and tidy titles, starting with the categories that bring in the most revenue.' },
  { n: '06', t: 'Merchant Center and free listings', d: 'Feed setup or clean-up, shipping and returns settings, and fixing disapproved products so they can appear across Google.' },
  { n: '07', t: 'Content, links and AI visibility', d: 'Buying guides that answer real questions, earned links and mentions, and checks on how AI assistants describe your products.' },
  { n: '08', t: 'Report and repeat', d: 'A monthly report on organic revenue, indexed pages and rankings for the terms that matter, then the next priorities, agreed with you.' },
];

const SIBLINGS: { href: string; t: string; d: string }[] = [
  { href: '/au/shopify-development', t: 'Shopify development', d: 'New Shopify stores, Shopify Plus, migrations and B2B, built by a registered Shopify Partner with SEO designed in.' },
  { href: '/au/ecommerce-development', t: 'Ecommerce development', d: 'Custom ecommerce builds on WooCommerce, Magento, BigCommerce and headless stacks, connected to Xero, MYOB and your 3PL.' },
  { href: '/au/ai-seo', t: 'AI SEO', d: 'Get your brand and products named when Australians ask ChatGPT, Perplexity or Google AI what to buy.' },
  { href: '/au/seo', t: 'SEO services', d: 'Technical SEO, SEO audits and local SEO for Australian businesses that are not only selling online.' },
  { href: '/au/website-maintenance', t: 'Website maintenance', d: 'Updates, security, backups and small fixes, so the store stays fast and healthy after the SEO work is done.' },
  { href: '/au', t: 'FactoryJet Australia', d: 'Everything we build for Australian businesses: ecommerce, websites, AI agents and AI search.' },
];

/* Visual slot page key (route without /au/). */
const PAGE_KEY = 'ecommerce-seo';

/* H1 split for the Family A hero emphasis. Same string as H1 (schema headline); only the
   closing benefit phrase is wrapped in .hero-emphasis. */
const H1_EMPHASIS = 'SEO That Sells Products';
const H1_LEAD = H1.slice(0, H1.lastIndexOf(H1_EMPHASIS)).trimEnd();

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

export default function EcommerceSeoAUPage() {
  return (
    <>
      <script id="ld-au-ecommerce-seo" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader locale="au" logoHref="/au" />
      <div className="aiAgentPage auPage">
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

        {/* ═══ HERO (US web-design hub hero: copy + inline form left, spec panel right) ═══ */}
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Ecommerce SEO Australia</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                FactoryJet is an ecommerce SEO agency for Australian online stores, covering Shopify, WooCommerce and
                Magento SEO. We get your collection and product pages found in Google, Google Shopping and AI answers,
                on Shopify, WooCommerce, Magento (Adobe Commerce), BigCommerce and Maropost. Because we also build and
                migrate stores, we fix problems in the theme itself, and every account and file stays yours.
              </p>
              <HeroInlineForm region="au" source="au_ecommerce_seo_hero" submitLabel="Review my store’s SEO" />
            </div>

            <form
              className="specpanel"
              aria-label="Where online store traffic comes from"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="Where store traffic comes from: collection pages for head terms, product pages and free listings for the long tail, and AI answers"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>TRAFFIC · WHERE STORE TRAFFIC COMES FROM</span>
                <span className="sys"><span>Shopify SEO Services</span><span>We Build Stores Too</span></span>
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
              <div className="specpanel-body" role="radiogroup" aria-label="Explore where traffic comes from">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="ecomseo-au-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={AREA_ICONS[0]} /></svg></span>
                  <span className="idx">the broad terms buyers search</span>
                  <span className="title">Collection pages</span>
                  <span className="tag">Head terms</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="ecomseo-au-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={AREA_ICONS[1]} /></svg></span>
                  <span className="idx">the specific items and the Shopping tab</span>
                  <span className="title">Product pages and free listings</span>
                  <span className="tag">Long tail</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="ecomseo-au-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={AREA_ICONS[5]} /></svg></span>
                  <span className="idx">AI Overviews, ChatGPT, Perplexity</span>
                  <span className="title">AI answers</span>
                  <span className="tag">Growing</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · When we build a keyword map, every important term gets exactly one owner.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (was the facts band; verified only) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '500+', t: 'businesses served by FactoryJet since 2014, founder-led on every project', s: 'About FactoryJet', u: '/about' },
              { v: 'Free', t: 'product listings can show across Google Search, Shopping, Maps and more, if your product data is complete', s: 'Google Merchant Center Help', u: SRC_FREE_LISTINGS },
              { v: 'Auto', t: 'every Shopify store generates a sitemap.xml with products, collections, pages and blog posts', s: 'Shopify Help Center', u: SRC_SHOPIFY_SITEMAP },
              { v: 'Block', t: 'filter URLs that do not need to be found, using robots.txt, is one option Google documents for faceted navigation', s: 'Google Search Central', u: SRC_FACETS },
            ].map((r) => (
              <div className="ledgercell" key={r.t}>
                <div className="k"><a href={r.u} {...(r.u.startsWith('http') ? extLink : {})}>{r.s}</a></div>
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
          <div className="upd">Last updated<br />26 September 2026</div>
        </div>

        {/* ═══ ANSWER-FIRST DEFINITION (GEO) → Family A facts ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What does an ecommerce SEO agency do for an Australian online store?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">An ecommerce SEO agency gets a store’s category and product pages found when people search for what
                    it sells.</span> It fixes duplicate and filtered URLs, writes collection pages, improves product data, sets
                    up Google Shopping free listings and prepares products for AI answers, then reports on organic
                    revenue, not just rankings.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Three terms we use a lot</div>
                    <p>
                      A <b>collection</b> (Shopify’s word for a category page) groups products, such as &ldquo;linen
                      sheets&rdquo;. <b>Faceted navigation</b> means the filters for size, colour and price, which can create
                      thousands of near-identical URLs. <b>Structured data</b> is hidden code that tells Google a page’s
                      price, stock and reviews, so products can show richer results.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    Ecommerce SEO is the fastest-growing SEO topic we measured in Australia: search interest roughly doubled
                    on a year earlier. Most agencies selling it are SEO specialists who hand you a list of fixes. That is
                    fine until the fix lives in your theme code and nobody can action it. We are a build team as well as an
                    SEO team, so the audit, the fix and the follow-up happen in one place.
                  </p>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts" kind="photo" ratio="3:2" className="factphoto"
                subject="A homewares store founder and an ecommerce SEO consultant arranging blank cards into a category tree on a wall">
                <img src="/images/au/ecommerce-seo/ecommerce-seo-hero.webp" width={1400} height={933} loading="lazy" decoding="async" alt="A Melbourne homewares founder and an ecommerce SEO consultant arrange blank cards into a category tree on the wall of her warehouse office, planning the store’s structure" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ EIGHT AREAS (listicle) → capgrid ═══ */}
        <section className="section capabilities" id="services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">What ecommerce SEO services cover</div>
              <h2>Ecommerce SEO services: the 8 areas that move an online store</h2>
              <p className="lead">
                Every store is different, but the work always falls into these eight areas. A good ecommerce SEO
                strategy decides which ones matter most for your catalogue this quarter, instead of doing a little of
                everything.
              </p>
            </div>
            <div className="capgrid">
              {AREAS.map((a, i) => {
                const n = String(i + 1).padStart(2, '0');
                return (
                  <div key={a.t} className={`cap cap-${i + 1}`}>
                    <div className="caphead"><span className="capid">CAP‑{n}</span><svg {...CAP_ICON}><path d={AREA_ICONS[i]} /></svg></div>
                    <VisualSlot page={PAGE_KEY} slot={`capability-${n}`} kind="diagram" ratio="11:4" className="cap-diagram" subject={AREA_SUBJECTS[i]} />
                    <h3>{a.t}</h3>
                    <p>{a.d}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ SHOPIFY SEO → facts + "at a glance" panel ═══ */}
        <section className="section facts" id="shopify-seo">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Shopify SEO agency</div>
              <h2>Shopify SEO services: what the platform does for you, and what it leaves to you</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Most Australian online stores we see run on Shopify, and Shopify is a good base for SEO. It hosts
                  the store on fast infrastructure, sets canonical tags on product pages, lets you edit every title,
                  meta description and URL handle, and generates a sitemap.xml automatically as you add products,
                  collections, pages and blog posts.
                </p></div>
                <div className="fact"><div className="sec">§02</div><div>
                  <p>
                    What it does not do is decide your strategy. It will not research which collections Australians
                    search for, write the words on those collections, or stop your theme and apps from creating
                    problems. The four issues we fix most often in Shopify SEO work:
                  </p>
                  <ol className="au-numlist au-numlist-inline">
                    <li><span><b>Collection-path duplicates.</b> Many themes link to products as /collections/name/products/item as well as /products/item. The canonical tag points to the main URL, but internal links split the signal. A small theme edit fixes it.</span></li>
                    <li><span><b>Filtered collection URLs.</b> Filters for size, colour and price can create thousands of URLs. We decide which filtered pages deserve to be found (sometimes &ldquo;black boots&rdquo; is worth a page) and keep the rest out of the crawl.</span></li>
                    <li><span><b>App bloat.</b> Reviews, upsells, pop-ups and SEO apps each add scripts. We remove duplicates and move what we can, such as structured data, into the theme.</span></li>
                    <li><span><b>Empty collections.</b> A grid of products with no introduction gives Google little to rank. A short, useful intro and links to related collections usually help more than any app.</span></li>
                  </ol>
                </div></div>
                <div className="fact"><div className="sec">§03</div><div>
                  <p>
                    For deeper control, Shopify lets developers edit a robots.txt.liquid file. Shopify’s own help centre
                    calls this an unsupported customisation and warns that incorrect use can result in loss of all
                    traffic, which is why we only change it with a clear reason and test it before and after. As a
                    registered Shopify Partner, we build stores too: see our{' '}
                    <a href="/au/shopify-development">Shopify development services in Australia</a>.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_SHOPIFY_SITEMAP} {...extLink}>Shopify Help Center, sitemap</a>;{' '}
                    <a href={SRC_SHOPIFY_ROBOTS} {...extLink}>Shopify Help Center, editing robots.txt.liquid</a>.
                  </p>
                </div></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">Shopify SEO at a glance</div>
                <ul className="trigrows">
                  <li><span className="m">Sitemap.xml</span><span className="n">generated automatically</span><span className="t">Built in</span></li>
                  <li><span className="m">Product canonical tags</span><span className="n">point to /products/ URLs</span><span className="t">Built in</span></li>
                  <li><span className="m">Collection copy and keyword map</span><span className="n">research and writing</span><span className="t">Your job</span></li>
                  <li><span className="m">Filter and duplicate control</span><span className="n">theme and robots rules</span><span className="t">Your job</span></li>
                  <li><span className="m">Rich product data</span><span className="n">depends on the theme</span><span className="t">Check it</span></li>
                  <li><span className="m">Links and mentions</span><span className="n">earned over time</span><span className="t">Your job</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PLATFORM TABLE → comparison ═══ */}
        <section className="section comparison" id="platforms">
          <div className="wrap">
            <div className="section-head head-split">
              <div className="eyebrow">WooCommerce, Magento and BigCommerce SEO</div>
              <div>
                <h2>SEO on every major ecommerce platform: what helps, what to watch, what we fix</h2>
                <p className="lead">
                  The principles of SEO for ecommerce do not change between platforms. The plumbing does. This is what we
                  look for first on each one, whether you need a WooCommerce SEO agency, Magento SEO services or help on
                  BigCommerce.
                </p>
              </div>
            </div>
            <div className="tablewrap">
              <table>
                <thead>
                  <tr>
                    <th>Platform</th>
                    <th>What helps SEO</th>
                    <th>What to watch</th>
                    <th className="fj">What we usually fix</th>
                  </tr>
                </thead>
                <tbody>
                  {PLATFORMS.map((r) => (
                    <tr key={r.p}>
                      <th scope="row">{r.p}</th>
                      <td>{r.good}</td>
                      <td>{r.watch}</td>
                      <td className="fj">{r.fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              Choosing or changing platform? Read our guide to{' '}
              <a href="/blog/best-ecommerce-platform-australia-2026">the best ecommerce platform in Australia</a>, or see{' '}
              <a href="/au/ecommerce-development">ecommerce development in Australia</a>.
            </p>
          </div>
        </section>

        {/* ═══ CATEGORY VS PRODUCT → definition module (image + "who owns which search" left, copy right) ═══ */}
        <section className="definition" id="page-structure">
          <div>
            <VisualSlot page={PAGE_KEY} slot="definition" kind="photo" ratio="3:2" className="definition-image"
              subject="A small online retailer setting up original product photos of a linen throw and a mug on a white backdrop">
              <img src="/images/au/ecommerce-seo/ecommerce-seo-product.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A small online retailer arranges a folded linen throw and an orange mug on a white paper backdrop in a bright waterside studio, with a camera on a tripod ready for original product photos" />
            </VisualSlot>
            <div className="au-panel definition-panel">
              <div className="eyebrow">Who owns which search</div>
              <ul className="trigrows">
                <li><span className="m">Broad category term</span><span className="t">Collection</span></li>
                <li><span className="m">Model, colour or size</span><span className="t">Product</span></li>
                <li><span className="m">How to choose, how to use</span><span className="t">Guide</span></li>
                <li><span className="m">Two pages, same term</span><span className="t">Merge</span></li>
              </ul>
            </div>
          </div>
          <div className="definition-copy">
            <div className="eyebrow">Category and product page structure</div>
            <h2>Give every page one job: SEO for ecommerce category pages and product pages</h2>
            <p>
              The most common reason a store stalls is that its pages compete with each other. A collection
              called &ldquo;Sheets&rdquo;, a blog post called &ldquo;Best sheets&rdquo; and ten products with
              &ldquo;sheets&rdquo; in the title all chase the same search. Google has to guess which one to rank,
              and often picks the weakest.
            </p>
            <p>
              <b>Category and collection pages</b> should own the broad terms: &ldquo;linen sheets&rdquo;,
              &ldquo;kids’ gumboots&rdquo;, &ldquo;espresso machines&rdquo;. They need a clear title, a short
              introduction that helps someone choose, useful filters, and links to closely related collections.
            </p>
            <p>
              <b>Product pages</b> should own the specific terms: the model, colour, size or material. They need
              unique descriptions (not the supplier’s copy that fifty other Australian retailers use), real photos
              with descriptive alt text, sizes and specifications, delivery times across Australia, and returns
              information. Original photography helps twice: it makes pages different from competitors, and it
              gives Google Images something unique to show.
            </p>
            <p>
              <b>Guides</b> should own questions: &ldquo;how to choose a thread count&rdquo; or &ldquo;what size
              gumboot for a four-year-old&rdquo;. They link to the collections that answer them. When we build a
              keyword map, every important term gets exactly one owner.
            </p>
          </div>
        </section>

        {/* ═══ TECHNICAL SEO FOR LARGE CATALOGUES → ruled rows ═══ */}
        <section className="section platforms" id="technical">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Technical SEO for ecommerce</div>
                <h2>Technical SEO for large catalogues: filters, variants, stock and speed</h2>
              </div>
              <p>
                A store with two thousand products can easily expose two hundred thousand URLs once filters, sort
                orders and variants multiply. Google will not crawl all of them, and it should not have to. The job
                is deciding which ones matter.
              </p>
            </div>
            <div className="platlist" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>Filtered navigation</h3></div><p className="plat-build">Google documents several ways to manage faceted navigation, including blocking filter URLs in robots.txt when they do not need to be found, and pointing canonical tags at the unfiltered page. We choose per filter: a popular filter like a brand or colour may deserve its own indexable page, while price sorting never does.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Variants</h3></div><p className="plat-build">Sizes and colours usually belong on one product page with a selector, not on separate thin pages. The exception is when people search for a variant by name, such as a specific colourway, and it has its own photos.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>Out-of-stock and discontinued</h3></div><p className="plat-build">Coming back: keep the page, mark it out of stock, show alternatives. Gone for good with traffic or links: redirect to the closest match. Never had traffic: let it return a 404. Mass-deleting old products is a classic way to lose rankings.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">04</span><div className="plat-name"><h3>Speed on mobile</h3></div><p className="plat-build">Most Australian shoppers browse on phones. We look at real-user Core Web Vitals, image sizes, fonts, and the apps and tracking scripts that load before the product does.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">05</span><div className="plat-name"><h3>Pagination and internal links</h3></div><p className="plat-build">Deep products need a path from the homepage. We check that paginated collections are crawlable, that breadcrumbs work, and that important collections are linked from the menu and footer, not only from JavaScript menus.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">06</span><div className="plat-name"><h3>International and B2B</h3></div><p className="plat-build">Selling to New Zealand or overseas means separate currencies and sometimes separate URLs with hreflang tags. B2B stores need public, crawlable catalogue pages while trade pricing stays behind a login.</p></div>
            </div>
            <p className="sub-note">
              Source: <a href={SRC_FACETS} {...extLink}>Google Search Central, managing crawling of faceted navigation URLs</a>.
            </p>
          </div>
        </section>

        <div className="au-midcta">
          <MidPageCTA
            headline={'Store traffic flat, or rankings slipping after a redesign?'}
            sub={'Send us your store URL. On a short call with the founder, we will walk through what we found, the three fixes that matter most, and whether you need an agency at all.'}
            label={'Review my store’s SEO'}
          />
        </div>

        {/* ═══ GOOGLE SHOPPING FREE LISTINGS + STRUCTURED DATA → facts + checklist panel ═══ */}
        <section className="section facts" id="free-listings">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Google Shopping free listings</div>
              <h2>Getting products into Google Shopping free listings and rich results</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Many Australian store owners think the Shopping tab is only for ads. It is not. Google Merchant
                  Center Help says free listings can show your products at no cost across Google Search, the
                  Shopping tab, Maps and more. The catch is data quality: Google says products are not guaranteed to
                  show, because it relies on the data you give it to match your products to searches.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  <b>What Google asks for.</b> Titles, prices, images, descriptions and availability for every
                  product. Shipping settings, which Merchant Center requires for stores in Australia. And your returns
                  policy on the website, so it can appear next to your products. Your feed price also needs to match
                  the price shoppers see on the page, including GST.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  <b>Structured data on the page.</b> Google’s product structured data documentation describes two
                  types: product snippets, which can show price, availability, reviews and shipping in normal search
                  results, and merchant listings, for pages where people can buy. We build this markup into the theme
                  so it always matches what the page shows.
                </p></div>
                <div className="fact"><div className="sec">§04</div><div>
                  <p>
                    <b>Reviews, done honestly.</b> Star ratings help, but only genuine ones. The ACCC says it is against
                    the law to create fake or misleading reviews, to suppress genuine negative ones, or to offer
                    incentives only for positive reviews. We set up review requests after delivery and never write or
                    buy reviews.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_FREE_LISTINGS} {...extLink}>Google Merchant Center Help, free listings</a>;{' '}
                    <a href={SRC_PRODUCT_SD} {...extLink}>Google Search Central, Product structured data</a>;{' '}
                    <a href={SRC_ACCC_REVIEWS} {...extLink}>ACCC, online reviews</a>. General information, not legal advice.
                  </p>
                </div></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">Free listings checklist</div>
                <ul className="trigrows">
                  <li><span className="m">Merchant Center account</span><span className="n">verified and linked to the store</span><span className="t">Set up</span></li>
                  <li><span className="m">Product feed</span><span className="n">titles, prices, images, stock</span><span className="t">Complete</span></li>
                  <li><span className="m">Shipping settings</span><span className="n">required in Australia</span><span className="t">Required</span></li>
                  <li><span className="m">Returns policy</span><span className="n">shown next to products</span><span className="t">Add it</span></li>
                  <li><span className="m">Price on page matches feed</span><span className="n">GST-inclusive, same everywhere</span><span className="t">Match</span></li>
                  <li><span className="m">Disapproved products</span><span className="n">checked every month</span><span className="t">Fixed</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ AI SEARCH FOR PRODUCTS → definition module (image left, copy right) ═══ */}
        <section className="definition" id="ai-search">
          <div>
            <VisualSlot page={PAGE_KEY} slot="definition-2" kind="photo" ratio="3:2" className="definition-image"
              subject="A shopper on his sofa asking an AI assistant on his phone for shoe recommendations">
              <img src="/images/au/ecommerce-seo/ecommerce-seo-aisearch.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over the shoulder of a Brisbane shopper on his sofa asking an AI assistant on his phone for shoe recommendations, with three product photos in the chat" />
            </VisualSlot>
            <p className="figcap">
              When a shopper asks an assistant what to buy, the answer draws on pages and product data it can
              trust. Complete facts and genuine mentions make your products easier to recommend.
            </p>
          </div>
          <div className="definition-copy">
            <div className="eyebrow">AI SEO for ecommerce</div>
            <h2>How products show up when people ask ChatGPT, Perplexity or Google AI what to buy</h2>
            <p>
              Shoppers increasingly start with a question rather than a keyword: &ldquo;what are good waterproof
              hiking boots for wide feet?&rdquo; Google answers with AI Overviews and AI Mode, and assistants such
              as ChatGPT and Perplexity now show product suggestions of their own. Those answers are built from
              pages and product data the systems can find and trust.
            </p>
            <p>
              Nobody can buy a guaranteed placement in those answers, and you should be wary of anyone who says
              they can. What you can do is make your products easy to understand and easy to cite:
            </p>
            <ul className="chg-list chg-list-1col">
              <li><span><b>Complete product facts.</b> Materials, dimensions, fit, compatibility, care, warranty and delivery times, written as plain text, not only inside images.</span></li>
              <li><span><b>Collection pages that explain.</b> A short guide to choosing within the category gives AI systems something quotable.</span></li>
              <li><span><b>Buying guides that answer real questions.</b> The same questions shoppers ask assistants, answered directly.</span></li>
              <li><span><b>Mentions beyond your own site.</b> Reviews, gift guides, news and comparison articles that name your brand.</span></li>
              <li><span><b>Clean product data.</b> Consistent structured data and a healthy Merchant Center feed.</span></li>
            </ul>
            <p>
              This is the same work as good ecommerce SEO, pointed at a new kind of search. For the full picture,
              see <a href="/au/ai-seo">AI SEO in Australia</a> or our guide on{' '}
              <a href="/blog/how-to-get-chatgpt-to-recommend-your-business-2026">how to get ChatGPT to recommend your business</a>.
            </p>
          </div>
        </section>

        {/* ═══ MIGRATION PROTECTION → facts + photo + checks panel ═══ */}
        <section className="section facts" id="migration">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Migration protection</div>
              <h2>Moving to Shopify or redesigning? Protect the rankings you already have</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  A replatform or redesign is the single riskiest moment for a store’s organic traffic. URLs change
                  (a WooCommerce /product/ path becomes a Shopify /products/ path, Magento category paths disappear),
                  content gets trimmed, titles reset to defaults, and years of rankings can vanish in a week.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  Shopify SEO migration work starts before the new store is built. We crawl the old site, pull every
                  URL that has traffic or links from Search Console and analytics, and build a redirect map so each
                  old URL sends a 301 (permanent) redirect to its closest new page, in a single hop. We carry titles,
                  descriptions, reviews and important content across, then test the whole map on a staging copy
                  before the domain switches.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  After launch, we watch Search Console daily for the first weeks: crawl errors, pages dropping out of
                  the index, and redirects that are not behaving. Because we also run migrations as a build team, the
                  SEO plan and the build plan are one plan. For Magento stores, our{' '}
                  <a href="/blog/magento-to-shopify-plus-migration-checklist-2026">Magento to Shopify Plus migration checklist</a>{' '}
                  goes step by step.
                </p></div>
                <div className="fact"><div className="sec">§04</div>
                  <div className="au-panel">
                    <div className="eyebrow">Migration checks we never skip</div>
                    <ul className="trigrows">
                      <li><span className="m">Full crawl of the old store</span><span className="n">plus Search Console and analytics URLs</span><span className="t">Before</span></li>
                      <li><span className="m">301 redirect map, one hop</span><span className="n">no chains, no redirects to the homepage</span><span className="t">Before</span></li>
                      <li><span className="m">Titles, content and reviews moved</span><span className="n">not reset to theme defaults</span><span className="t">During</span></li>
                      <li><span className="m">Daily Search Console checks</span><span className="n">for the first weeks after launch</span><span className="t">After</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-2" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="An engineer reviewing a redirect map that links old store pages to new ones across two monitors"
                caption="Every old URL with traffic or links gets one new home, tested on a copy of the store before launch.">
                <img src="/images/au/ecommerce-seo/ecommerce-seo-migration.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over the shoulder of a FactoryJet engineer in a Sydney office reviewing a redirect map that links old store pages to new ones across two monitors" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ FIT CHECK (<details>) → vlog, questions panel under the sticky head ═══ */}
        <section className="vlog" id="fit-check">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Which option fits you?</div>
              <h2>A 30-second check: do it yourself, audit, consultant or ecommerce SEO agency</h2>
              <p>Tap the line that sounds most like your store. The answer is honest, even when it is not us.</p>
              <div className="au-panel vlog-panel">
                <div className="eyebrow">Questions to ask any ecommerce SEO company, including us</div>
                <ol className="au-numlist">
                  <li><span><b>Who will edit my theme?</b> If the answer is &ldquo;your developer&rdquo;, ask how fixes get done.</span></li>
                  <li><span><b>What do you report on?</b> Organic revenue and indexed pages matter more than a ranking chart.</span></li>
                  <li><span><b>Show me work on my platform.</b> Shopify, WooCommerce and Magento need different skills.</span></li>
                  <li><span><b>How do you earn links?</b> Avoid anyone selling link packages or bulk directory listings.</span></li>
                  <li><span><b>What do I own?</b> Search Console, analytics, Merchant Center and content should all be in your name.</span></li>
                  <li><span><b>What if I leave?</b> You should be able to walk away with everything, with no lock-in.</span></li>
                </ol>
              </div>
            </div>
            <div className="ventries">
              {FIT_CHECK.map((f) => (
                <details key={f.q} className="ventry">
                  <summary><h3>{f.q}</h3><span className="chev" aria-hidden="true">+</span></summary>
                  <span className="vtag">{f.verdict}</span>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ COMPARISON TABLE ═══ */}
        <section className="section" id="comparison">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Side by side</div>
              <h2>Doing it yourself vs a freelancer vs an SEO-only agency vs an ecommerce SEO agency that builds stores</h2>
              <p className="lead">
                Four common ways Australian stores handle SEO. Each suits someone. This compares what changes day to day,
                not price.
              </p>
            </div>
            <div className="tablewrap">
              <table>
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">Ecommerce SEO + build team (FactoryJet)</th>
                    <th>SEO-only agency</th>
                    <th>Freelancer</th>
                    <th>Do it yourself</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row">Finds the problems</th><td className="fj">Full audit</td><td>Full audit</td><td>Depends on the person</td><td>With free tools</td></tr>
                  <tr><th scope="row">Fixes theme and code</th><td className="fj">Yes, in-house developers</td><td>Often hands it to your developer</td><td>Sometimes</td><td>Rarely</td></tr>
                  <tr><th scope="row">Collection and product copy</th><td className="fj">Yes</td><td>Yes</td><td>Sometimes</td><td>Yes, if you have time</td></tr>
                  <tr><th scope="row">Merchant Center and free listings</th><td className="fj">Yes</td><td>Often a paid media team</td><td>Sometimes</td><td>Possible</td></tr>
                  <tr><th scope="row">Migration protection</th><td className="fj">SEO and build in one plan</td><td>Advice to your build team</td><td>Advice</td><td>High risk</td></tr>
                  <tr><th scope="row">AI search visibility</th><td className="fj">Included</td><td>Varies</td><td>Varies</td><td>Basics</td></tr>
                  <tr><th scope="row">Links and mentions</th><td className="fj">Earned, never bought</td><td>Usually a strength</td><td>Varies</td><td>Slow</td></tr>
                  <tr><th scope="row">Who owns accounts and content</th><td className="fj">You do</td><td>Check the contract</td><td>Check</td><td>You do</td></tr>
                  <tr><th scope="row">Support after the project</th><td className="fj">Same team, ongoing</td><td>Monthly retainer</td><td>If available</td><td>You</td></tr>
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              Comparing costs? Our{' '}
              <a href="/blog/seo-cost-australia-2026">SEO cost guide for Australia</a> and{' '}
              <a href="/blog/shopify-cost-australia-2026">Shopify cost guide for Australia</a>{' '}
              show typical market ranges from third-party sources. We do not publish a price list.
            </p>
          </div>
        </section>

        {/* ═══ AUDIT (<details>) → facts layout: head + demand panel left, openable parts right ═══ */}
        <section className="section facts" id="audit">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Ecommerce SEO audit</div>
              <h2>What our ecommerce SEO audit checks, in eight parts</h2>
              <p className="lead">
                An audit should end with a short list of what to fix first, not a two-hundred-page export. Open any
                part to see what we look at. You keep the report whatever you decide next.
              </p>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="ventries">
                  {AUDIT.map((a, i) => (
                    <details key={a.t} className="ventry ventry-num">
                      <summary><h3><span className="ventry-n">{String(i + 1).padStart(2, '0')}</span>{a.t}</h3><span className="chev" aria-hidden="true">+</span></summary>
                      <p>{a.d}</p>
                    </details>
                  ))}
                </div>
              </div>
              <div className="factphoto">
                <div className="demand">
                  <div className="demand-head"><span>Australia · Monthly Search Demand</span><b>DataForSEO</b></div>
                  <ul>
                    {[
                      { kw: 'ecommerce seo', v: '480', w: '100%', kd: 'The head term' },
                      { kw: 'magento seo services', v: '480', w: '100%', kd: 'Magento and Adobe Commerce stores' },
                      { kw: 'ecommerce seo agency', v: '390', w: '81%', kd: 'Buyers comparing agencies' },
                      { kw: 'shopify seo services', v: '320', w: '67%', kd: 'Shopify store owners' },
                      { kw: 'ecommerce seo services', v: '320', w: '67%', kd: 'What the work includes' },
                      { kw: 'ecommerce seo consultant', v: '210', w: '44%', kd: 'Advice for in-house teams' },
                      { kw: 'ecommerce seo australia', v: '110', w: '23%', kd: 'National intent' },
                      { kw: 'ecommerce seo audit', v: '70', w: '15%', kd: 'The usual first step' },
                    ].map((r) => (
                      <li key={r.kw} className="demand-row">
                        <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<small> searches</small></span></div>
                        <div className="demand-bar"><i style={{ width: r.w }} /></div>
                        <div className="demand-kd">{r.kd}</div>
                      </li>
                    ))}
                  </ul>
                  <p className="demand-src">Source: DataForSEO, Australia, September 2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PHOTOBREAK (US template visual, no AU image yet) ═══ */}
        <VisualSlot page={PAGE_KEY} slot="photobreak" kind="illustration" ratio="12:5" className="photobreak"
          subject="AI-generated model: a white online store on a table with category cards, product tags and a single orange redirect arrow, seen from above" />

        {/* ═══ PROCESS (<details>) + ENGAGEMENT SHAPES → timeline with the scope panel beside the head ═══ */}
        <section className="section process" id="how-we-work">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How we work</div>
                <h2>How our ecommerce SEO services run, in eight steps</h2>
                <p className="lead">
                  The same path for a fifty-product boutique in Adelaide and a ten-thousand-SKU retailer in Sydney. The
                  depth changes, the order does not. Open any step.
                </p>
              </div>
              <div className="au-panel">
                <div className="eyebrow">Scope, not packages</div>
                <h3 className="au-panel-title">Three ways to work with us</h3>
                <ol className="au-numlist">
                  <li><span><b>One-off ecommerce SEO audit.</b> A full audit and prioritised fix list. Ideal before a redesign, after a traffic drop, or to brief your own team.</span></li>
                  <li><span><b>Fix and build.</b> The audit plus implementation: theme fixes, structured data, collection copy and Merchant Center, delivered as a fixed scope.</span></li>
                  <li><span><b>Ongoing ecommerce SEO.</b> Monthly work on content, product templates, links and AI visibility, with a report tied to organic revenue.</span></li>
                </ol>
                <p className="au-panel-intro">
                  What moves the scope: catalogue size, platform, how much technical debt the theme carries, how
                  competitive your categories are, and whether you need content and links as well as fixes. We explain
                  every line of the quote on the call.
                </p>
                <ModalCTAButton label="Review my store’s SEO" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
            </div>
            <div className="timeline timeline-4">
              {PROCESS.map((s) => (
                <details key={s.n} className="tnode">
                  <summary>
                    <div className="idx">{s.n}</div>
                    <h3>{s.t}<span className="chev" aria-hidden="true">+</span></h3>
                  </summary>
                  <p>{s.d}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PROVIDER LIST (self-disclosure, ItemList from PROVIDERS) → ruled rows ═══ */}
        <section className="section platforms" id="providers">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">The honest landscape</div>
                <h2>Australian ecommerce SEO and Shopify SEO agencies worth knowing</h2>
              </div>
              <p>
                We are one option, not the only one. These Australian agencies rank for ecommerce SEO and Shopify SEO
                searches in Australia. Each note is based on what the agency says on its own ecommerce SEO page.
              </p>
            </div>
            <div className="platlist" role="list">
              {PROVIDERS.map((p, i) => (
                <div key={p.name} className={p.name === 'FactoryJet' ? 'plat plat-2col plat-own' : 'plat plat-2col'} role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{p.name}</h3>{p.name === 'FactoryJet' && <span className="plat-flag">That is us</span>}</div>
                  <p className="plat-build">{p.note}</p>
                </div>
              ))}
            </div>
            <p className="sub-note">
              Agencies named from live Australian search results for ecommerce SEO and Shopify SEO queries, September 2026. Notes reflect each agency’s own website on 26 September 2026. Listing is not endorsement.
            </p>
          </div>
        </section>

        {/* ═══ SIBLING SERVICES → agentdir ═══ */}
        <section className="section agentdir" id="more-services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Beyond SEO</div>
              <h2>The rest of what we build for Australian online stores</h2>
              <p>
                Ecommerce SEO works best when the store underneath it is sound. These are built and supported by the
                same team.
              </p>
            </div>
            <ul className="agentdir-grid">
              {SIBLINGS.map((s) => (
                <li key={s.href}>
                  <a href={s.href}>
                    <span className="agentdir-t">{s.t}</span>
                    <span className="agentdir-l">{s.d}</span>
                    <span className="agentdir-go" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ FAQ (Family A accordion; same FAQ_ITEMS array as the FAQPage JSON-LD) ═══ */}
        <AuFaq
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          heading="Ecommerce SEO and Shopify SEO questions Australian store owners ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ FINAL CTA (light, US finalcta) ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>Turn your collections and products into organic sales</h2>
              <p>
                Send your name, work email and store URL. The founder replies within 24 hours to book a short call about
                your platform, your categories and what is holding the store back, and whether you need an agency, a
                one-off audit or just a few fixes. No spam, no obligation.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="Review my store’s SEO" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
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
