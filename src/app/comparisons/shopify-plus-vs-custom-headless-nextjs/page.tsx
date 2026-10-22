import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import FAQ, { type FAQCategory, type FAQItem } from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const PAGE_MODIFIED = '2026-10-22';

/* Official sources, all checked 22 Oct 2026. Every vendor fact on this page links to one of these. */
const SRC = {
  plusPricing: 'https://www.shopify.com/plus/pricing',
  headless: 'https://shopify.dev/docs/storefronts/headless',
  hydrogen: 'https://shopify.dev/docs/storefronts/hydrogen',
  hydrogenDeploy: 'https://shopify.dev/docs/storefronts/hydrogen/deploy',
  oxygen: 'https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen',
  oxygenDeployments: 'https://shopify.dev/docs/storefronts/headless/legacy/hydrogen/deployments',
  storefrontApi: 'https://shopify.dev/docs/api/storefront/latest',
  apiLimits: 'https://shopify.dev/docs/api/usage/limits',
  themeArch: 'https://shopify.dev/docs/storefronts/themes/architecture',
  nextGithub: 'https://github.com/vercel/next.js',
  nextIsr: 'https://nextjs.org/docs/app/guides/incremental-static-regeneration',
  lcp: 'https://web.dev/articles/lcp',
  hydrogen202610: 'https://hydrogen.shopify.dev/update/hydrogen-2026-10-now-available',
  oxygenPlans: 'https://shopify.dev/docs/storefronts/headless/legacy/hydrogen/fundamentals',
  hydrogenGithub: 'https://github.com/Shopify/hydrogen',
  expansion: 'https://help.shopify.com/en/manual/organization-settings/expansion-stores',
  checkoutExt: 'https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility',
  redirects: 'https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect',
};

const linkCls = 'text-[#F05A28] underline';

export const metadata: Metadata = {
  title: 'Shopify vs Next.js: Liquid Theme or Headless? | FactoryJet',
  description:
    'Shopify Plus Liquid theme vs a Next.js storefront on the Storefront API vs Hydrogen on Oxygen: list prices, API limits, hosting and when each one fits.',
  keywords: [
    'shopify vs nextjs',
    'headless shopify nextjs',
    'next js vs shopify',
    'shopify headless nextjs',
    'shopify plus vs headless',
    'hydrogen vs nextjs',
    'shopify oxygen vs vercel',
  ],
  openGraph: {
    type: 'article',
    siteName: 'FactoryJet',
    title: 'Shopify vs Next.js: Liquid Theme or Headless? | FactoryJet',
    description:
      'Shopify Plus Liquid theme vs a Next.js storefront on the Storefront API vs Hydrogen on Oxygen: list prices, API limits, hosting and when each one fits.',
    url: 'https://factoryjet.com/comparisons/shopify-plus-vs-custom-headless-nextjs',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Shopify Plus Liquid vs headless Next.js vs Hydrogen comparison',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify vs Next.js: Liquid Theme or Headless? | FactoryJet',
    description:
      'Liquid theme vs Next.js on the Storefront API vs Hydrogen on Oxygen: list prices, API limits, hosting and when each fits.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/comparisons/shopify-plus-vs-custom-headless-nextjs',
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
   FAQ DATA (FAQPage JSON-LD below is generated from this same array)
───────────────────────────────────────────────────────────────────────────── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'performance', label: 'Speed & Storefront API' },
  { key: 'tco', label: 'Cost & Team Effort' },
  { key: 'apps', label: 'Shopify Apps, Checkout & SEO' },
  { key: 'hydrogen', label: 'Hydrogen, Oxygen & Vercel' },
  { key: 'decision', label: 'Strategic Decision Framework' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'performance',
    question: 'Is a Next.js storefront faster than a Shopify Liquid theme?',
    answer:
      "Not automatically. Both can meet Google's 2.5 second bar for a good Largest Contentful Paint (the time until the main image or headline shows). On most slow Liquid stores the cause is app scripts and oversized images, not Liquid itself. Next.js can prerender pages and ship less JavaScript, but a careless headless build can be slower than a lean theme. Check your store's real-user data before deciding.",
  },
  {
    category: 'performance',
    question: 'How does a Next.js store keep Shopify prices and stock current without full rebuilds?',
    answer:
      'With Incremental Static Regeneration (ISR). The Next.js docs say ISR updates static content without rebuilding the entire site and serves prerendered pages for most requests. On a Shopify build we connect product and inventory webhooks to on-demand revalidation, so only the changed product or collection page is refreshed. Cart and checkout always read live data from the Storefront API.',
  },
  {
    category: 'performance',
    question: 'Will Storefront API rate limits slow a headless store during a big sale?',
    answer:
      "Shopify's API limits page says buyer traffic to the Storefront API is not rate-limited; the limits target bots, crawlers and checkout abuse. The catch is identification. Server-side requests must send the Shopify-Storefront-Buyer-IP header, or Shopify cannot tell buyers apart and may throttle requests, weaken bot protection and break signed-in checkout. Tokenless requests also carry a query complexity cap of 1,000.",
  },
  {
    category: 'performance',
    question: 'How does a headless Next.js store avoid layout shift on mobile?',
    answer:
      'Product data, images and reviews are fetched on the server and sent as finished HTML, with fixed image sizes. Elements do not jump when a third-party script loads later, which is the usual cause of layout shift on Liquid stores running several apps. A Liquid theme can reach the same result if app blocks are trimmed and image dimensions are set in the theme code.',
  },
  {
    category: 'tco',
    question: 'Does headless Shopify cost more than a Liquid theme?',
    answer:
      "Yes, and Shopify says so itself: its headless docs state that a headless storefront costs more to build and run than a theme, and that the merchant needs developers to maintain it after launch. FactoryJet builds a custom theme in 3 to 5 weeks and a headless storefront in 8 to 14 weeks. We quote a fixed price in writing after a short scoping call.",
  },
  {
    category: 'tco',
    question: 'Do I still pay for Shopify Plus if my storefront runs on Next.js?',
    answer:
      'Yes. The catalog, cart, checkout and customer accounts still come from Shopify, so the plan fee stays. On 22 Oct 2026 Shopify listed Plus at $2,300 a month on a 3-year term or $2,500 on a 1-year term, with a variable platform fee for more complex businesses. If you use a third-party payment gateway, Shopify adds 0.20% per transaction.',
  },
  {
    category: 'tco',
    question: 'What extra subscriptions does a headless Shopify build add?',
    answer:
      'Usually two. A headless CMS (content management system) such as Sanity, Contentful or Builder.io, so marketers can edit pages without a developer, and frontend hosting such as Vercel or Cloudflare. Hydrogen storefronts can use Oxygen instead, which Shopify offers at no extra charge on paid plans. Check each vendor pricing page for your traffic level before you sign, because these sit outside your Shopify bill.',
  },
  {
    category: 'tco',
    question: 'How does going headless change day-to-day editing for marketers?',
    answer:
      'On a Liquid theme, marketers use the Shopify theme editor: JSON templates hold sections that can be added, removed and reordered without code. On a Next.js storefront, that editor no longer drives the page. Marketers work in a headless CMS instead, using only the blocks your developers built. New layouts need a developer, so plan the block library before launch.',
  },
  {
    category: 'tco',
    question: 'Can a Next.js storefront replace paid Shopify apps?',
    answer:
      'Some of them. Product filters, mega menus, size charts and simple bundle pickers can become plain components in the Next.js code. Apps that hold data or run business logic, such as reviews, loyalty, subscriptions and search, stay in place, and the storefront calls their APIs. Before a migration, list every app and mark whether it has a headless API.',
  },
  {
    category: 'apps',
    question: 'How does checkout work on a headless Next.js Shopify store?',
    answer:
      "Checkout stays on Shopify. The Next.js app builds the cart through the Storefront API, then sends the shopper to the cart's Shopify checkout URL, where Shop Pay and your payment settings apply. Hydrogen's request handlers answer the /checkout and /api/cart routes for you. Shopify says advanced checkout customisation is available only on Plus, and it is done with Shopify's checkout tools, not in Next.js.",
  },
  {
    category: 'apps',
    question: 'Do Shopify App Store apps work on a Next.js storefront?',
    answer:
      'Apps that insert widgets through theme app extensions only work on Liquid themes. On a Next.js storefront each app must offer an API or JavaScript SDK, and a developer adds it as a component. Reviews, loyalty and subscription apps often support headless; many small widget apps do not. Ask each vendor before you commit to the rebuild.',
  },
  {
    category: 'apps',
    question: 'How do customer logins work on a headless Shopify store?',
    answer:
      "Through Shopify's Customer Account API. It lets customers sign in and serves their orders, addresses and profile to your Next.js pages. The Headless or Hydrogen sales channel gives you a client ID, plus a client secret for code that runs on a server. Hydrogen ships a ready client for it in its customer-account entry point.",
  },
  {
    category: 'apps',
    question: 'Is a 3D product configurator easier in Next.js than in Liquid?',
    answer:
      'Yes. A configurator is an interactive app: it holds state, renders a 3D canvas with a library such as Three.js, and recalculates price as options change. React components in Next.js handle that natively. In Liquid you would bolt a separate JavaScript app onto a theme section. If the configurator is the only custom part, you can embed it in a Liquid theme and skip full headless.',
  },
  {
    category: 'apps',
    question: 'What happens to my SEO URLs if I move from Liquid to Next.js?',
    answer:
      'Keep the same handles and the risk is small. Shopify documents /products/:handle as the standard product URL, and asks headless stores that change it to send a server-side 3XX redirect from that path. We build a one-to-one 301 map from every old URL to its new one, single hop. Plus stores can hold up to 20 million Shopify redirects. Hydrogen also checks the store URL redirects before showing a 404.',
  },
  {
    category: 'hydrogen',
    question: 'What is Shopify Hydrogen in 2026?',
    answer:
      'Hydrogen is Shopify\'s headless toolkit. Version 2026-10 handles the Shopify-specific parts that are easy to get wrong: the cart, variant selection, collection filtering, analytics, and the routes that apps and checkout depend on. It plugs into frameworks that run server code, including Next.js, React Router, Nuxt, Astro and SvelteKit, and leaves routing and UI to them.',
  },
  {
    category: 'hydrogen',
    question: 'Hydrogen vs Next.js: do I have to choose one?',
    answer:
      'Not any more. Up to Hydrogen 2026-04, Hydrogen was its own React Router based framework, now documented as Legacy Hydrogen. Shopify\'s release note says Hydrogen 2026-10 is now a library you add to the framework you already use, so it installs into a Next.js project, and Shopify points to Vercel Shop, a Next.js template, as a starting point. The real choices now are where to host and whether to use Hydrogen helpers or call the Storefront API directly.',
  },
  {
    category: 'hydrogen',
    question: 'What is Oxygen, and can it host a Next.js storefront?',
    answer:
      "Oxygen is Shopify's hosting for Hydrogen storefronts. Shopify's docs say it runs your storefront as a Web Worker, not a Node server, and expects a module Worker, one server bundle and a folder of client assets. The React Router starter deploys there, and Oxygen costs nothing extra on paid Shopify plans. For Next.js, Shopify's deploy guide points to Vercel, or to Node, Cloudflare Workers or Deno.",
  },
  {
    category: 'hydrogen',
    question: 'What do Oxygen deployments give a development team?',
    answer:
      "Every Oxygen deployment gets its own preview URL, so changes can be checked before going live. Shopify supports continuous deployment from GitHub, manual deploys from the Hydrogen CLI, and rollbacks that point the environment back to an earlier deployment. On the Basic plan or above you can share preview links with people who are not logged in, and Oxygen blocks search engines from indexing them.",
  },
  {
    category: 'hydrogen',
    question: 'Is Next.js just React?',
    answer:
      'Next.js is a framework built on React. Its GitHub project calls it "The React Framework" and it is MIT-licensed, so it is free to use. React gives you components. Next.js adds routing, server rendering, static generation with ISR, image handling and API routes, which are the parts a Shopify storefront needs to load fast and rank in search.',
  },
  {
    category: 'decision',
    question: 'When should a brand stay on a Shopify Plus Liquid theme?',
    answer:
      'Stay on Liquid when your pages fit sections and blocks, your marketers edit the store daily in the theme editor, and you rely on apps that only ship theme app extensions. Also stay if you have no developer to own a separate frontend after launch. Shopify\'s own guidance is to go headless only when themes and apps cannot deliver what you need.',
  },
  {
    category: 'decision',
    question: 'When is a headless Next.js storefront justified?',
    answer:
      "Shopify's docs list the cases: a storefront experience themes cannot support easily, a frontend stack that does not use Liquid, Shopify commerce added to infrastructure you already run, selling on channels Shopify does not support out of the box, and a CMS that drives content next to products. If none applies to you, a faster theme will usually pay back sooner.",
  },
  {
    category: 'decision',
    question: 'What is the middle-ground option between Liquid and full headless?',
    answer:
      'A lean Online Store 2.0 theme with the app bloat removed, images sized properly, and small interactive pieces (a configurator, a quiz) built as embedded React islands. Marketers keep the theme editor and apps keep working. We recommend this first for most Plus stores, and move to Next.js only when a named requirement cannot be met inside the theme.',
  },
  {
    category: 'decision',
    question: 'Can we move from Liquid to headless in stages?',
    answer:
      "Yes. A common first step is a Next.js content hub or campaign site on its own subdomain, reading products from the Storefront API while the Liquid theme keeps running the main store. Shopify's Headless channel lets you create several storefronts, each with its own API tokens, so the pilot never touches theme code. Move product and collection pages once the pilot proves its value.",
  },
  {
    category: 'decision',
    question: 'How do we book a Shopify architecture review with FactoryJet?',
    answer:
      'Book a 30-minute call with founder Bhavesh Barot. We look at your catalog, markets, app list and current speed data, then tell you whether to tune the theme, add a headless section, or rebuild in Next.js. FactoryJet is a registered Shopify Partner. You see a working demo on your own data before you sign, and you own the code.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   SOURCED SPEC TABLE (vendor facts only, each row linked, checked 22 Oct 2026)
───────────────────────────────────────────────────────────────────────────── */
const SPEC_ROWS: ReadonlyArray<{
  fact: string;
  liquid: string;
  next: string;
  hydrogen: string;
  sources: ReadonlyArray<{ label: string; href: string }>;
}> = [
  {
    fact: 'Shopify Plus list price',
    liquid: '$2,300/mo (3-year term) or $2,500/mo (1-year)',
    next: 'Same plan fee; frontend hosting billed separately',
    hydrogen: 'Same plan fee',
    sources: [{ label: 'Shopify Plus pricing', href: SRC.plusPricing }],
  },
  {
    fact: 'Third-party payment gateway fee',
    liquid: '0.20% per transaction',
    next: '0.20% per transaction',
    hydrogen: '0.20% per transaction',
    sources: [{ label: 'Shopify Plus pricing', href: SRC.plusPricing }],
  },
  {
    fact: 'Stores included in the Plus fee',
    liquid: 'Up to 10 stores on the contract (main + 9 expansion) at no added cost',
    next: 'Same',
    hydrogen: 'Same',
    sources: [{ label: 'Shopify Help: expansion stores', href: SRC.expansion }],
  },
  {
    fact: 'How pages are built',
    liquid: 'Liquid templates; JSON templates hold sections merchants reorder in the theme editor',
    next: 'React components in Next.js; data from the Storefront API',
    hydrogen: 'Your framework renders; Hydrogen handles cart, variants, filters, analytics',
    sources: [
      { label: 'Theme architecture', href: SRC.themeArch },
      { label: 'Hydrogen docs', href: SRC.hydrogen },
    ],
  },
  {
    fact: 'Sales channel for API keys',
    liquid: 'Online Store (no API keys needed)',
    next: 'Headless channel',
    hydrogen: 'Hydrogen channel (or Headless if hosted off Oxygen)',
    sources: [{ label: 'About headless commerce', href: SRC.headless }],
  },
  {
    fact: 'Where the frontend runs',
    liquid: 'Shopify',
    next: 'Vercel, Node, Cloudflare Workers or Deno',
    hydrogen: 'Oxygen: a Web Worker, not a Node server',
    sources: [
      { label: 'Hydrogen deploy guide', href: SRC.hydrogenDeploy },
      { label: 'Deploy to Oxygen', href: SRC.oxygen },
    ],
  },
  {
    fact: 'Storefront API limits',
    liquid: 'Not applicable',
    next: 'Buyer traffic not rate-limited; tokenless query complexity cap 1,000; up to 100 active tokens per app per shop',
    hydrogen: 'Same API and limits',
    sources: [
      { label: 'Storefront API', href: SRC.storefrontApi },
      { label: 'API limits', href: SRC.apiLimits },
    ],
  },
  {
    fact: 'Product URL rule',
    liquid: '/products/:handle by default',
    next: 'Keep /products/:handle or 3XX redirect to the new path',
    hydrogen: 'Checks store URL redirects before a 404',
    sources: [
      { label: 'About headless commerce', href: SRC.headless },
      { label: 'Hydrogen docs', href: SRC.hydrogen },
    ],
  },
  {
    fact: 'Preview and rollback',
    liquid: 'Unpublished theme previews',
    next: 'Depends on host (Vercel preview deploys)',
    hydrogen: 'Unique preview URL per deployment; GitHub deploys; rollbacks',
    sources: [{ label: 'Oxygen deployments', href: SRC.oxygenDeployments }],
  },
  {
    fact: 'Framework',
    liquid: 'Liquid, run by Shopify',
    next: 'Next.js, MIT licence',
    hydrogen: 'Hydrogen (MIT) inside Next.js, React Router, Nuxt, Astro or SvelteKit',
    sources: [
      { label: 'Next.js on GitHub', href: SRC.nextGithub },
      { label: 'Hydrogen on GitHub', href: SRC.hydrogenGithub },
    ],
  },
  {
    fact: 'Frontend hosting fee from Shopify',
    liquid: 'Included in the plan',
    next: 'None from Shopify; you pay your own host',
    hydrogen: 'Oxygen: no extra charge on paid Shopify plans, including Plus',
    sources: [
      { label: 'Oxygen plans', href: SRC.oxygenPlans },
      { label: 'Hydrogen 2026-10 release', href: SRC.hydrogen202610 },
    ],
  },
  {
    fact: 'Checkout customisation',
    liquid: 'Advanced checkout customisation is Plus-only',
    next: 'Same Shopify checkout and rules',
    hydrogen: 'Same Shopify checkout and rules',
    sources: [{ label: 'Checkout extensibility', href: SRC.checkoutExt }],
  },
  {
    fact: 'URL redirect capacity',
    liquid: 'Up to 20,000,000 redirects on Plus (100,000 on other plans)',
    next: 'Your host handles redirects; Shopify redirects still usable via API',
    hydrogen: 'Hydrogen reads the store URL redirects',
    sources: [
      { label: 'Shopify Help: URL redirects', href: SRC.redirects },
      { label: 'Hydrogen docs', href: SRC.hydrogen },
    ],
  },
  {
    fact: 'Speed target for any option',
    liquid: 'Good LCP is 2.5 s or less at the 75th percentile',
    next: 'Same target',
    hydrogen: 'Same target',
    sources: [{ label: 'web.dev LCP', href: SRC.lcp }],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD SCHEMAS
───────────────────────────────────────────────────────────────────────────── */
const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Shopify vs Next.js: Liquid Theme, Headless Next.js or Hydrogen on Oxygen',
  description:
    'A concrete comparison of a Shopify Plus Liquid theme, a Next.js storefront on the Storefront API, and Hydrogen on Oxygen, with list prices, API limits and hosting facts from Shopify and Vercel docs.',
  datePublished: '2026-09-01T00:00:00Z',
  dateModified: `${PAGE_MODIFIED}T00:00:00Z`,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
    jobTitle: 'Founder, FactoryJet',
  },
  publisher: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://factoryjet.com/comparisons/shopify-plus-vs-custom-headless-nextjs',
  },
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Comparisons', item: 'https://factoryjet.com/best-ecommerce-platforms' },
    { '@type': 'ListItem', position: 3, name: 'Shopify Plus vs Headless Next.js', item: 'https://factoryjet.com/comparisons/shopify-plus-vs-custom-headless-nextjs' },
  ],
};

export default function ShopifyPlusVsHeadlessNextjsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader locale="us" />

      <main className="pp-page">
        {/* HERO SECTION */}
        <section className="pp-hero">
          <div className="pp-hero-grid">
            <div>
              <p className="pp-eyebrow">// SHOPIFY STOREFRONT ARCHITECTURE</p>
              <h1 className="pp-h1">
                Shopify Plus vs <span className="pp-grad">Headless Next.js</span>
              </h1>
              <p className="pp-lead">
                Most Shopify Plus brands should stay on a Liquid theme: Shopify&apos;s own docs say a headless storefront
                costs more to build and run. Choose Next.js on the Storefront API when you need a frontend themes cannot
                support, a CMS-led site, or one frontend for several channels. Hydrogen now plugs into Next.js on Vercel,
                while Oxygen hosts Hydrogen&apos;s React Router template.
              </p>
              <HeroInlineForm
                source="comparisons_shopify_plus_vs_custom_headless_nextjs"
                region="us"
                submitLabel="Request Architecture Consultation"
              />
            </div>

            <div className="pp-hero-card">
              <div className="flex items-center justify-between border-b border-[#E7DED6] pb-3 mb-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F05A28]">
                  Architectural Summary
                </span>
                <span className="text-xs text-[#8C827A]">Updated 22 October 2026</span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-1 border-b border-[#F5EFEA]">
                  <span className="text-[#46403B]">Liquid theme (OS 2.0):</span>
                  <span className="font-semibold text-[#14110F]">Fastest launch, theme editor, apps</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F5EFEA]">
                  <span className="text-[#46403B]">Next.js + Storefront API:</span>
                  <span className="font-semibold text-[#14110F]">Full custom UI, hosted on Vercel</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F5EFEA]">
                  <span className="text-[#46403B]">Hydrogen + Oxygen:</span>
                  <span className="font-semibold text-[#14110F]">Shopify toolkit and hosting</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#46403B]">Checkout in all three:</span>
                  <span className="font-semibold text-[#F05A28]">Shopify checkout + Shop Pay</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ANSWER-FIRST DEFINITION SECTION */}
        <section className="pp-section pp-tint">
          <div className="pp-container">
            <div className="pp-card p-6 md:p-8 bg-white border-l-4 border-[#F05A28]">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                Executive Architectural Verdict
              </span>
              <p className="text-base md:text-lg text-[#14110F] leading-relaxed font-medium">
                Start with the theme. A lean Online Store 2.0 theme keeps the theme editor, works with every app that
                ships a theme app extension, and launches in 3 to 5 weeks with FactoryJet. A headless Next.js storefront
                takes 8 to 14 weeks and needs a developer after launch. Shopify lists the cases where headless is worth
                that extra effort:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-base text-[#46403B]">
                <li>A storefront experience that themes and apps cannot support, or cannot support easily.</li>
                <li>A web frontend stack that does not use Liquid.</li>
                <li>Shopify commerce added to infrastructure you already run.</li>
                <li>Selling on several channels Shopify does not support out of the box.</li>
                <li>A CMS that drives content alongside your products.</li>
              </ul>
              <p className="text-sm text-[#46403B] mt-4">
                Source:{' '}
                <a href={SRC.headless} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  Shopify, About headless commerce
                </a>
                , checked 22 Oct 2026. For the platform-neutral version of this question, read{' '}
                <Link href="/comparisons/headless-commerce-vs-monolithic" className={linkCls}>
                  headless vs monolithic commerce
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* VERIFIED MARKET METRICS */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="pp-h2 text-center">Three Numbers Shopify and Google Publish</h2>
              <p className="text-base text-[#46403B] mt-3">
                These apply whichever frontend you pick. Checked 22 Oct 2026 on the official pages linked below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="pp-card p-6 bg-white">
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">$2,300/mo</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Shopify Plus on a 3-year term</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  Or $2,500 a month on a 1-year term. You pay it for a Liquid theme, a Next.js storefront or Hydrogen
                  alike, because the backend and checkout stay on Shopify.
                </p>
                <a
                  href={SRC.plusPricing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F05A28] font-mono hover:underline"
                >
                  Source: Shopify Plus pricing &rarr;
                </a>
              </div>

              <div className="pp-card p-6 bg-white">
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">1,000</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Tokenless query complexity cap</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  The Storefront API lets a Next.js app read products, collections, search and the cart without a
                  token, up to a query complexity of 1,000. Product tags, metafields, menus and customers need a token.
                </p>
                <a
                  href={SRC.storefrontApi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F05A28] font-mono hover:underline"
                >
                  Source: Shopify Storefront API reference &rarr;
                </a>
              </div>

              <div className="pp-card p-6 bg-white">
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">2.5 s</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Google&apos;s good LCP threshold</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  Largest Contentful Paint of 2.5 seconds or less, measured at the 75th percentile of real visits. A
                  well-built theme and a well-built Next.js store can both pass it.
                </p>
                <a
                  href={SRC.lcp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F05A28] font-mono hover:underline"
                >
                  Source: web.dev, Largest Contentful Paint &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* EVALUATION MATRIX + SOURCED SPEC TABLE */}
        <section className="pp-section pp-tint">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="pp-h2 text-center">Five-Dimensional Architectural Evaluation</h2>
              <p className="text-base text-[#46403B] mt-3">
                Liquid theme vs Next.js on the Storefront API vs Hydrogen on Oxygen, across the five things that decide
                most projects.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Evaluation Criteria</th>
                    <th>Shopify Plus Liquid (OS 2.0)</th>
                    <th>Next.js + Storefront API</th>
                    <th>Hydrogen on Oxygen</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tr-me">
                    <td className="font-bold">1. Speed</td>
                    <td className="font-semibold text-[#F05A28]">Can pass 2.5 s LCP once app scripts are trimmed</td>
                    <td>Prerendered pages with ISR; less JavaScript when built well</td>
                    <td>Server-rendered on Shopify&apos;s Worker hosting</td>
                  </tr>
                  <tr>
                    <td className="font-bold">2. Frontend Freedom</td>
                    <td>Sections, blocks and app blocks</td>
                    <td className="font-semibold text-[#14110F]">Any React UI, 3D, configurators</td>
                    <td>Any React UI; Hydrogen components for cart and variants</td>
                  </tr>
                  <tr className="tr-me">
                    <td className="font-bold">3. Build Time With FactoryJet</td>
                    <td className="font-semibold text-[#F05A28]">3 to 5 weeks (custom theme)</td>
                    <td>8 to 14 weeks</td>
                    <td>8 to 14 weeks</td>
                  </tr>
                  <tr>
                    <td className="font-bold">4. Marketing Editing</td>
                    <td className="font-semibold text-[#F05A28]">Theme editor, no developer</td>
                    <td>Headless CMS blocks built by developers</td>
                    <td>Headless CMS or Shopify metaobjects</td>
                  </tr>
                  <tr className="tr-me">
                    <td className="font-bold">5. App Store Compatibility</td>
                    <td className="font-semibold text-[#F05A28]">Theme app extensions work as installed</td>
                    <td>Only apps with an API or SDK</td>
                    <td>Only apps with an API or SDK</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center max-w-3xl mx-auto mt-14 mb-8">
              <h3 className="text-2xl font-bold text-[#14110F]">Spec Sheet: What Shopify, Vercel and Google Publish</h3>
              <p className="text-base text-[#46403B] mt-3">
                Vendor facts only. Every row links to the official page, checked 22 Oct 2026.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Fact</th>
                    <th>Liquid theme</th>
                    <th>Next.js + Storefront API</th>
                    <th>Hydrogen + Oxygen</th>
                    <th>Source (checked 22 Oct 2026)</th>
                  </tr>
                </thead>
                <tbody>
                  {SPEC_ROWS.map((r, i) => (
                    <tr key={r.fact} className={i % 2 === 0 ? 'tr-me' : undefined}>
                      <td className="font-bold">{r.fact}</td>
                      <td>{r.liquid}</td>
                      <td>{r.next}</td>
                      <td>{r.hydrogen}</td>
                      <td>
                        {r.sources.map((s, j) => (
                          <span key={s.href + s.label}>
                            {j > 0 ? ', ' : ''}
                            <a href={s.href} target="_blank" rel="noopener noreferrer" className={linkCls}>
                              {s.label}
                            </a>
                          </span>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* DEEP DIVE SECTIONS */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="max-w-4xl mx-auto space-y-12">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  ARCHITECTURAL PROFILE // NATIVE SHOPIFY PLUS
                </span>
                <h2 className="text-2xl font-bold text-[#14110F] mb-4">When to Choose Native Shopify Plus Liquid</h2>
                <p className="text-base text-[#46403B] leading-relaxed mb-4">
                  Online Store 2.0 changed what a theme can do. JSON templates are wrappers for sections, section groups
                  let merchants rearrange the header and footer, and theme app extensions let apps add blocks without
                  editing code. A lean theme built this way gives you most of what brands go headless for, without a
                  second codebase. Our{' '}
                  <Link href="/services/shopify-plus-agency" className={linkCls}>Shopify Plus</Link> and{' '}
                  <Link href="/services/shopify-development" className={linkCls}>Shopify development</Link> teams build
                  these themes.
                </p>
                <p className="text-base text-[#46403B] leading-relaxed mb-2"><strong>Best for:</strong></p>
                <ul className="list-disc pl-5 space-y-2 text-base text-[#46403B] mb-4">
                  <li>DTC and wholesale stores whose pages fit sections and blocks.</li>
                  <li>Marketing teams that launch landing pages weekly in the theme editor.</li>
                  <li>Stores that depend on apps which only ship theme app extensions.</li>
                  <li>Teams without a developer to own a separate frontend after launch.</li>
                </ul>
                <p className="text-base text-[#46403B] leading-relaxed mb-2"><strong>Watch out for:</strong></p>
                <ul className="list-disc pl-5 space-y-2 text-base text-[#46403B]">
                  <li>Every installed app can add scripts; audit them before blaming Liquid for slow pages.</li>
                  <li>Deep interactive features (3D, complex configurators) become separate JavaScript apps inside a section.</li>
                  <li>One storefront per theme; content-heavy sites can outgrow the page and blog tools.</li>
                </ul>
              </div>

              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  ARCHITECTURAL PROFILE // HEADLESS NEXT.JS
                </span>
                <h2 className="text-2xl font-bold text-[#14110F] mb-4">When to Choose Composable Headless Next.js</h2>
                <p className="text-base text-[#46403B] leading-relaxed mb-4">
                  A headless store splits the frontend from Shopify. Next.js renders the pages; the Storefront API serves
                  products, collections, search and the cart; the Customer Account API handles sign-in and orders; Shopify
                  checkout still takes the payment. You host the frontend yourself, usually on Vercel, and connect it
                  through Shopify&apos;s Headless channel. This is the work our{' '}
                  <Link href="/services/headless-shopify-development" className={linkCls}>headless Shopify development</Link>{' '}
                  service covers.
                </p>
                <p className="text-base text-[#46403B] leading-relaxed mb-2"><strong>Best for:</strong></p>
                <ul className="list-disc pl-5 space-y-2 text-base text-[#46403B] mb-4">
                  <li>Product configurators, 3D viewers and custom bundle builders.</li>
                  <li>Content-led brands running Sanity, Contentful or another CMS next to the catalog.</li>
                  <li>One codebase serving several regional storefronts or a web app plus a mobile app.</li>
                  <li>Teams that already run Next.js and want Shopify inside their existing stack.</li>
                </ul>
                <p className="text-base text-[#46403B] leading-relaxed mb-2"><strong>Watch out for:</strong></p>
                <ul className="list-disc pl-5 space-y-2 text-base text-[#46403B]">
                  <li>Theme app extensions stop working; each app needs an API path.</li>
                  <li>Send the buyer IP header on server requests, or checkout and bot protection suffer.</li>
                  <li>Keep /products/:handle URLs, or redirect them, to protect search rankings.</li>
                  <li>Budget for a developer after launch, as Shopify&apos;s own docs advise.</li>
                </ul>
              </div>

              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  ARCHITECTURAL PROFILE // HYDROGEN &amp; OXYGEN
                </span>
                <h2 className="text-2xl font-bold text-[#14110F] mb-4">Where Hydrogen and Oxygen Fit in 2026</h2>
                <p className="text-base text-[#46403B] leading-relaxed mb-4">
                  Hydrogen used to be a separate framework you picked instead of Next.js. Since version 2026-10 it is a
                  toolkit that sits inside your framework and handles the Shopify parts: cart, variant selection,
                  collection filters, analytics, and the /api/cart and /checkout routes. Its forms are native HTML, so
                  shoppers can still add to cart before JavaScript loads. Oxygen is Shopify&apos;s hosting for it.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-base text-[#46403B]">
                  <li>
                    <strong>Next.js + Hydrogen on Vercel:</strong> Shopify points Next.js projects to Vercel Shop, a
                    Next.js template. Good when your team already knows Next.js.
                  </li>
                  <li>
                    <strong>React Router + Hydrogen on Oxygen:</strong> Shopify hosts it, with environments, preview
                    deployments and variables managed in the Shopify admin.
                  </li>
                  <li>
                    <strong>Next.js on the raw Storefront API:</strong> no Hydrogen package; you write the cart and
                    variant logic yourself. Fine for small catalogs or unusual stacks.
                  </li>
                </ul>
              </div>

              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  PROCESS // LIQUID TO NEXT.JS
                </span>
                <h2 className="text-2xl font-bold text-[#14110F] mb-4">How a Liquid to Next.js Move Runs</h2>
                <p className="text-base text-[#46403B] leading-relaxed mb-4">
                  The order matters more than the framework. This is the sequence we follow on a{' '}
                  <Link href="/services/shopify-migration-agency" className={linkCls}>Shopify migration</Link>; the
                  backend stays put, so only the storefront changes.
                </p>
                <ol className="list-decimal pl-5 space-y-3 text-base text-[#46403B]">
                  <li>Pull 28 days of real-user speed data and the full app list, and mark which apps have a headless API.</li>
                  <li>Install the Headless channel (or Hydrogen channel for Oxygen) and create a storefront with its own tokens.</li>
                  <li>Export every live URL and build a one-to-one 301 map, single hop, keeping /products/:handle paths.</li>
                  <li>Build product, collection, cart and search pages first; send the buyer IP header from day one.</li>
                  <li>Wire Shopify product and inventory webhooks to on-demand ISR revalidation.</li>
                  <li>Set up the CMS block library with the marketing team before page design is signed off.</li>
                  <li>Show a working demo on your own catalog, then run the old theme and the new frontend side by side.</li>
                  <li>Switch the domain, submit the sitemap, and watch 404s and Search Console for two weeks.</li>
                </ol>
                <p className="text-base text-[#46403B] leading-relaxed mt-4">
                  Want a rough number for your own move first? Try the{' '}
                  <Link href="/tools/replatforming-cost-calculator" className={linkCls}>replatforming cost calculator</Link>
                  , or read our overview of{' '}
                  <Link href="/headless-commerce" className={linkCls}>headless commerce</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQS SECTION */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Questions commerce leaders ask about Shopify and Next.js"
          lead="Speed, Storefront API limits, Hydrogen and Oxygen, apps, checkout, SEO and cost."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* FINAL CTA */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="pp-card p-8 md:p-12 bg-[#FFF8F5] border border-[#F05A28]/20 text-center max-w-4xl mx-auto">
              <p className="pp-eyebrow">// OBJECTIVE COMMERCE ARCHITECTURE EVALUATION</p>
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#14110F] mb-4">
                Schedule a 30-Minute Architecture Scoping Call
              </h2>
              <p className="text-base text-[#46403B] max-w-2xl mx-auto mb-8">
                Speak directly with founder Bhavesh Barot. We review your catalog, markets, app stack and speed data,
                then recommend a tuned Liquid theme, Next.js on the Storefront API, or Hydrogen. FactoryJet quotes a
                fixed price in writing after the call.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#F05A28] text-white font-semibold text-sm hover:bg-[#D8441A] transition-colors shadow-sm"
                >
                  Book Strategy Call via Calendly &rarr;
                </a>
                <ModalCTAButton
                  label="Request Architecture Plan"
                  region="us"
                  btnVariant="secondary-light"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
