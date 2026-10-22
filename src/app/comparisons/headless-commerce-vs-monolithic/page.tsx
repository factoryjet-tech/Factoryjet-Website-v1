import type { Metadata } from 'next';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import EcommerceRoiCalculator from '@/components/commerce/EcommerceRoiCalculator';
import '@/components/v2/PlatformPage.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/marketplace';
const PAGE_MODIFIED = '2026-10-22';

/* Official sources, all checked 22 Oct 2026. Every vendor fact on this page links to one of these. */
const SRC = {
  shopifyHeadless: 'https://shopify.dev/docs/storefronts/headless',
  shopifyThemes: 'https://shopify.dev/docs/storefronts/themes/architecture',
  shopifyPlus: 'https://www.shopify.com/plus/pricing',
  hydrogen: 'https://shopify.dev/docs/storefronts/hydrogen',
  bcPricing: 'https://www.bigcommerce.com/pricing/',
  bcCatalyst: 'https://developer.bigcommerce.com/docs/storefront/catalyst',
  adobePricing: 'https://business.adobe.com/products/commerce/pricing.html',
  adobeGraphql: 'https://developer.adobe.com/commerce/webapi/graphql/',
  adobeLifecycle: 'https://experienceleague.adobe.com/en/docs/commerce-operations/release/planning/lifecycle-policy',
  magentoGithub: 'https://github.com/magento/magento2',
  woo: 'https://woocommerce.com/',
  wooStoreApi: 'https://developer.woocommerce.com/docs/apis/store-api/',
  commercetools: 'https://commercetools.com/composable-commerce',
  lcp: 'https://web.dev/articles/lcp',
  nextIsr: 'https://nextjs.org/docs/app/guides/incremental-static-regeneration',
};

const linkStyle = { color: 'var(--pp-orange-dark)', textDecoration: 'underline' } as const;
const listStyle = { paddingLeft: '20px', display: 'grid', gap: '8px', color: 'var(--pp-body)', listStyle: 'disc' } as const;
const olStyle = { ...listStyle, listStyle: 'decimal' } as const;

export const metadata: Metadata = {
  title: 'Monolithic vs Headless Commerce: How to Choose | FactoryJet',
  description:
    'Monolithic vs headless commerce: what each one is, what Shopify, BigCommerce, Adobe and WooCommerce publish, and when to stay monolithic or go headless.',
  openGraph: {
    type: 'article',
    siteName: 'FactoryJet',
    title: 'Monolithic vs Headless Commerce: How to Choose | FactoryJet',
    description:
      'Monolithic vs headless commerce: what each one is, what Shopify, BigCommerce, Adobe and WooCommerce publish, and when to stay monolithic or go headless.',
    url: 'https://factoryjet.com/comparisons/headless-commerce-vs-monolithic',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Monolithic vs headless commerce comparison' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monolithic vs Headless Commerce: How to Choose | FactoryJet',
    description: 'What each architecture is, what the vendors publish, and when to stay monolithic or go headless.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/comparisons/headless-commerce-vs-monolithic' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─────────────────────────────────────────────
   FAQ DATA (FAQPage JSON-LD below is generated from this same array)
───────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'architecture', label: 'Architecture & Rendering' },
  { key: 'performance', label: 'Speed & Core Web Vitals' },
  { key: 'cost', label: 'TCO & Maintenance Costs' },
  { key: 'decision', label: 'When to Go Headless' },
];

const FAQ_ITEMS = [
  // Architecture & Rendering
  {
    category: 'architecture',
    question: 'What is a monolithic commerce platform?',
    answer:
      'A monolithic commerce platform is one application that holds everything: the catalog, cart, checkout, admin and the storefront pages shoppers see. A Shopify Liquid theme, a classic WooCommerce site and a Magento store with its own theme all work this way. You change the look through the platform theme system, and plugins hook into the same codebase. It is simpler to run because there is one system to host, update and secure.',
  },
  {
    category: 'architecture',
    question: 'What does headless commerce mean?',
    answer:
      'Headless commerce means the storefront (the "head") is a separate application from the commerce backend. Shopify defines it as separating the frontend from the backend: you build the frontend, and the platform APIs handle the commerce underneath. The frontend is often built in Next.js and can sit on a website, a mobile app, a kiosk or a smart device, all fed by the same backend.',
  },
  {
    category: 'architecture',
    question: 'Monolithic vs headless: what is the core difference?',
    answer:
      'Coupling. In a monolith the page templates live inside the commerce platform and render from its database. In headless, the pages live in their own app and ask the platform for data over an API, such as a GraphQL or REST endpoint. That split gives design freedom and lets one backend serve many channels, at the price of running and maintaining two systems instead of one.',
  },
  {
    category: 'architecture',
    question: 'Is Shopify monolithic or headless?',
    answer:
      'Both. A standard Shopify store is monolithic: Liquid themes render pages inside Shopify, and merchants arrange sections in the theme editor. The same store can also run headless through the Storefront API and Customer Account API, with Hydrogen as Shopify\'s toolkit for building that frontend. Checkout stays on Shopify either way. Our Shopify-specific comparison covers Liquid vs Next.js vs Hydrogen in detail.',
  },
  {
    category: 'architecture',
    question: 'Can you give an example of headless commerce?',
    answer:
      'A typical example: a brand keeps its catalog and checkout in Shopify or BigCommerce, builds the storefront in Next.js, and pulls articles and lookbooks from a CMS such as Sanity. The same product API also feeds the brand iOS app and an in-store kiosk. BigCommerce ships Catalyst, a Next.js storefront framework, for this setup; WooCommerce offers its Store API for cart, checkout and product data.',
  },
  {
    category: 'architecture',
    question: 'What is the difference between headless and composable commerce?',
    answer:
      'Headless splits only the frontend from the backend; the backend can still be one platform. Composable goes further: commercetools describes it as building commerce from independent, best-of-breed components, such as separate services for search, pricing, promotions and content, that you combine and replace over time. Every composable stack is headless, but most headless stores are not composable.',
  },
  {
    category: 'architecture',
    question: 'What is the difference between a monolithic and a microservices architecture?',
    answer:
      'A monolith ships as one deployable application, so a change to checkout means redeploying the whole store. Microservices split the system into small services (catalog, cart, pricing, search) that deploy and scale on their own and talk over APIs. Microservices suit large teams with many releases a week. For most stores the extra moving parts cost more than they save.',
  },
  {
    category: 'architecture',
    question: 'Headless vs monolithic CMS: is it the same choice?',
    answer:
      'It is the same idea applied to content. A monolithic CMS such as classic WordPress stores content and renders pages in one system. A headless CMS such as Sanity, Contentful or Strapi only stores content and serves it over an API to any frontend. Many headless stores pair a headless commerce backend with a headless CMS so editors and merchandisers work in separate tools.',
  },
  {
    category: 'architecture',
    question: 'How do headless stores keep product pages fresh without slowing down?',
    answer:
      'With static pages that refresh in the background. In Next.js this is Incremental Static Regeneration (ISR), which the Next.js docs say updates static content without rebuilding the entire site. A price or stock webhook from the commerce platform tells the frontend which product page to rebuild. Cart and checkout data are always fetched live from the platform API.',
  },
  // Performance & Core Web Vitals
  {
    category: 'performance',
    question: 'Is headless commerce always faster than a monolithic theme?',
    answer:
      "No. Google's target for a good Largest Contentful Paint is 2.5 seconds or less at the 75th percentile of real visits, and both architectures can hit it. Slow monoliths are usually slow because of plugin scripts, unoptimised images and heavy themes. Headless removes some of that by design, but a frontend built carelessly can be slower than a tuned theme. Measure first.",
  },
  {
    category: 'performance',
    question: 'Can a headless store absorb traffic spikes better?',
    answer:
      'Often, because cached pages are served from a CDN (content delivery network) instead of the commerce server. A spike from a social post mostly hits the cache, and only cart and checkout calls reach the platform. Hosted monoliths like Shopify already absorb most spikes on their own infrastructure, so this benefit is largest for self-hosted platforms such as WooCommerce or Magento Open Source.',
  },
  {
    category: 'performance',
    question: 'How does image handling differ between the two?',
    answer:
      'Hosted monoliths resize images through the platform CDN, but the theme decides which size and format to request, and many themes ask for oversized files. A Next.js frontend uses its Image component to serve modern formats such as AVIF and WebP at the right width for each screen. Either can do it well; the difference is who controls the markup.',
  },
  {
    category: 'performance',
    question: 'How do personalisation and A/B tests work on each?',
    answer:
      'On a monolith, most tests run through a script that swaps content after the page loads, which can cause flicker and layout shift. On a headless frontend, middleware can pick the variant on the server before any HTML is sent, so the shopper sees one version only. Monoliths can do server-side testing too, but it usually needs platform-specific apps.',
  },
  // TCO & Maintenance Costs
  {
    category: 'cost',
    question: 'Is headless more expensive than monolithic?',
    answer:
      'Yes. Shopify says plainly that a headless storefront costs more to build and run than a theme, and that the merchant needs developers to maintain it after launch. You pay the same platform fee, plus frontend hosting, often a headless CMS, and developer time for every page type. FactoryJet builds a custom theme in 3 to 5 weeks and a headless store in 8 to 14 weeks, and quotes a fixed price in writing after a scoping call.',
  },
  {
    category: 'cost',
    question: 'What are the disadvantages of headless commerce?',
    answer:
      'Four come up on every project. Plugins that inject widgets into a theme stop working and need API work. Marketers lose the drag-and-drop theme editor unless you add a headless CMS. You now host, monitor and update a second application. And every new page type needs a developer. If none of the headless benefits apply to you, these costs buy nothing.',
  },
  {
    category: 'cost',
    question: 'Do platform plugins and apps work on a headless storefront?',
    answer:
      'Only the ones with an API. Apps that inject scripts or widgets into a Liquid, PHP or WordPress theme have nothing to inject into on a separate frontend. Reviews, loyalty, search and subscription tools often offer headless APIs or SDKs; many smaller widgets do not. List every plugin you rely on and check each vendor before you choose headless.',
  },
  {
    category: 'cost',
    question: 'How do marketing teams edit a headless store?',
    answer:
      'Through a headless CMS such as Sanity, Contentful or Builder.io, using page blocks the developers built. Editors can reorder and fill those blocks without tickets, but a block that does not exist yet needs a developer. On a monolith like a Shopify Online Store 2.0 theme, editors work in the theme editor, where JSON templates hold sections they can add and reorder.',
  },
  {
    category: 'cost',
    question: 'What does a headless release workflow look like?',
    answer:
      'Every pull request builds a preview URL on hosts such as Vercel or Cloudflare Pages, so marketing and engineering check the change before it merges. Automated tests and a performance check run on each build. Monoliths have theme previews too, but plugin and theme updates often go straight to production, which is where many surprise breakages start.',
  },
  // When to Go Headless
  {
    category: 'decision',
    question: 'When should a brand stay on a monolithic platform?',
    answer:
      'Stay monolithic when your pages fit the theme system, marketers edit the store every week, you depend on plugins that only work inside the theme, and you have no developer to own a second application. Shopify\'s own advice is to consider headless only when its themes, apps and sales channels cannot deliver what the business needs. A faster theme is usually the cheaper fix.',
  },
  {
    category: 'decision',
    question: 'When is a brand ready to go headless?',
    answer:
      "Shopify lists the signals: an experience themes cannot support easily, a frontend stack that does not use Liquid, commerce added to infrastructure you already run, selling on channels the platform does not support out of the box, and a CMS that drives content next to products. Add one of your own: a developer who will own the frontend after launch.",
  },
  {
    category: 'decision',
    question: 'Can a brand move from monolithic to headless in stages?',
    answer:
      'Yes. Build one headless piece first, such as a campaign site, a product configurator or a content hub, while the monolithic theme keeps running checkout and the main catalog. Move product and collection pages next, then retire the theme. Each stage ships on its own, and you can stop at any stage if the numbers do not justify the next one.',
  },
  {
    category: 'decision',
    question: 'Can you migrate from headless back to a monolithic theme?',
    answer:
      'Yes, and it is more common than vendors admit. Because the backend never moved, the catalog, customers and orders stay where they are. The work is rebuilding the frontend as a theme, mapping every headless URL to its theme URL with single-hop 301 redirects, and reinstalling theme apps the headless build replaced. Teams do it when the frontend has no owner left.',
  },
  {
    category: 'decision',
    question: 'How do we book a headless feasibility review with FactoryJet?',
    answer:
      'Book a 30-minute scoping call with founder Bhavesh Barot. We review your current speed data, plugin list and content needs, then tell you whether to tune the theme, go headless in stages, or rebuild. You see a working demo on your own data before you sign, the price is fixed per phase, and you own the code.',
  },
];

/* ─────────────────────────────────────────────
   SCHEMAS
───────────────────────────────────────────── */
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
  '@type': 'TechArticle',
  headline: 'Monolithic vs Headless Commerce: How to Choose in 2026',
  description:
    'What monolithic and headless commerce architectures are, what Shopify, BigCommerce, Adobe Commerce and WooCommerce publish about each, and when to stay monolithic or go headless.',
  dateModified: PAGE_MODIFIED,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Founder & Principal Commerce Architect',
    url: 'https://factoryjet.com',
  },
  publisher: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  url: 'https://factoryjet.com/comparisons/headless-commerce-vs-monolithic',
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Comparisons', item: 'https://factoryjet.com/best-ecommerce-platforms' },
    { '@type': 'ListItem', position: 3, name: 'Headless vs Monolithic', item: 'https://factoryjet.com/comparisons/headless-commerce-vs-monolithic' },
  ],
};

const STATS = [
  { b: '500+', s: 'businesses served since 2014' },
  { b: '97%', s: 'of FactoryJet projects delivered on time' },
  { b: '3 to 5 wks', s: 'custom theme build (monolithic)' },
  { b: '8 to 14 wks', s: 'headless storefront build' },
];

const SOURCED = [
  {
    v: 'Costs more',
    d: 'Shopify\'s own developer docs: a headless storefront costs more to build and run than a theme, and needs developers after launch.',
    src: 'Shopify, About headless commerce (checked 22 Oct 2026)',
    href: SRC.shopifyHeadless,
  },
  {
    v: '2.5 s',
    d: 'Google\'s threshold for a good Largest Contentful Paint, measured at the 75th percentile of real visits. Both architectures can meet it.',
    src: 'web.dev, Largest Contentful Paint (checked 22 Oct 2026)',
    href: SRC.lcp,
  },
  {
    v: 'Next.js',
    d: 'BigCommerce built Catalyst, its headless storefront framework, on Next.js; Shopify\'s Hydrogen 2026-10 also plugs into Next.js.',
    src: 'BigCommerce developer docs, Catalyst (checked 22 Oct 2026)',
    href: SRC.bcCatalyst,
  },
];

const PILLARS = [
  { i: '◈', t: '1. Speed Is Yours to Control', d: 'Pages can be prerendered and cached on a CDN, with less JavaScript sent to the phone. The flip side: nobody else tunes it for you.' },
  { i: '◇', t: '2. Design Without Theme Limits', d: 'Configurators, 3D viewers and custom flows are plain React components instead of scripts bolted onto a theme section.' },
  { i: '↯', t: '3. One Backend, Many Channels', d: 'The same commerce API feeds the website, a mobile app, kiosks and partner sites, so prices and stock stay in one place.' },
  { i: '▤', t: '4. Content and Catalog Split Apart', d: 'Editors publish lookbooks and guides in a headless CMS without touching product data or theme code.' },
  { i: '⛓', t: '5. Plugins Need API Work', d: 'Theme plugins and app widgets stop working; each one needs an API path or a custom component.' },
  { i: '⤢', t: '6. Two Systems to Run', d: 'You host, monitor and update a frontend app on top of the platform, and every new page type needs a developer.' },
];

export default function HeadlessVsMonolithicPage() {
  return (
    <>
      <script id="h-m-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="h-m-art-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script id="h-m-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader navLinks={[]} cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        {/* ── Hero ── */}
        <section className="pp-dotgrid">
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">Architecture guide for commerce leaders</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '18ch' }}>
                  Headless Commerce vs <span className="pp-grad">Monolithic Commerce.</span>
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  Monolithic commerce runs the storefront and backend as one system, like a Shopify Liquid theme or
                  WooCommerce. Headless splits them: a separate frontend, often Next.js, gets data from the platform
                  through APIs. Monolithic is cheaper and quicker to launch. Headless gives full design control and one
                  backend for many channels, but Shopify&apos;s own docs say it costs more to build and run.
                </p>
                <HeroInlineForm source="us_headless_vs_monolithic_hero" region="us" submitLabel="Get Headless Architecture Scope" />
              </div>

              {/* Visual Architecture Graphic */}
              <div
                role="img"
                aria-label="Diagram comparing a headless storefront that calls commerce APIs with a monolithic platform that renders its own theme."
                style={{
                  border: '1px solid var(--pp-line)',
                  borderRadius: '18px',
                  background: '#fff',
                  padding: '24px',
                  boxShadow: '0 18px 50px rgba(20,17,15,.08)',
                }}
              >
                <div
                  style={{
                    border: '1.5px solid var(--pp-orange)',
                    borderRadius: '12px',
                    background: 'var(--pp-tint)',
                    padding: '14px',
                    textAlign: 'center',
                    fontFamily: 'var(--pp-disp)',
                    fontWeight: 700,
                    color: 'var(--pp-ink)',
                    marginBottom: '18px',
                  }}
                >
                  Architectural Paradigm Comparison
                  <small style={{ display: 'block', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-orange-dark)', fontWeight: 600, marginTop: '2px' }}>
                    Headless (separate frontend + APIs) vs Monolithic (one system)
                  </small>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                  <div style={{ border: '1px solid var(--pp-line)', borderRadius: '10px', background: '#FAF8F5', padding: '14px 12px' }}>
                    <b style={{ fontFamily: 'var(--pp-disp)', fontSize: '14px', display: 'block', color: 'var(--pp-ink)', borderBottom: '1px solid var(--pp-line)', paddingBottom: '6px' }}>Composable Headless</b>
                    <ul style={{ fontSize: '12px', color: 'var(--pp-body)', marginTop: '8px', paddingLeft: '14px', display: 'grid', gap: '4px' }}>
                      <li>Separate frontend, often Next.js</li>
                      <li>Data from commerce APIs</li>
                      <li>Full UI and UX freedom</li>
                      <li>One backend, many channels</li>
                    </ul>
                  </div>
                  <div style={{ border: '1px solid var(--pp-line)', borderRadius: '10px', background: '#FAF8F5', padding: '14px 12px' }}>
                    <b style={{ fontFamily: 'var(--pp-disp)', fontSize: '14px', display: 'block', color: 'var(--pp-ink)', borderBottom: '1px solid var(--pp-line)', paddingBottom: '6px' }}>Monolithic Themes</b>
                    <ul style={{ fontSize: '12px', color: 'var(--pp-body)', marginTop: '8px', paddingLeft: '14px', display: 'grid', gap: '4px' }}>
                      <li>Fast &amp; affordable to launch</li>
                      <li>All-in-one theme and admin</li>
                      <li>Plugins drop straight in</li>
                      <li>No separate frontend to host</li>
                    </ul>
                  </div>
                </div>
                <div
                  style={{
                    marginTop: '16px',
                    padding: '10px 14px',
                    background: '#14110F',
                    borderRadius: '10px',
                    color: '#fff',
                    fontFamily: 'var(--pp-mono)',
                    fontSize: '10.5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block', marginRight: '6px' }} />
                    Architecture Advisory
                  </div>
                  <div>By Bhavesh Barot · Updated 22 October 2026</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stat Band ── */}
        <section className="pp-sec tint" style={{ paddingTop: '38px', paddingBottom: '38px' }}>
          <div className="pp-wrap">
            <div className="pp-stats">
              {STATS.map((s) => (
                <div className="pp-stat" key={s.b}>
                  <b>{s.b}</b>
                  <span>{s.s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Definitional Answer-First Block ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// executive summary &amp; architectural verdict</p>
            <h2 style={{ marginTop: '10px' }}>Monolithic vs Headless: How to Choose the Right Architecture</h2>
            <div style={{ margin: '24px 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 12px 36px rgba(0,0,0,0.06)' }}>
              <Image
                src={`${IMG}/headless-nextjs-vs-monolithic-liquid-architecture.webp`}
                alt="A man standing at a curved monitor showing line charts in a bright office"
                width={1200}
                height={675}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                <strong>The core decision:</strong> headless is a trade, not an upgrade. You swap the simplicity of one
                system for control over the frontend. Most stores are better served by a tuned monolithic theme; a
                smaller group gets real value from a separate frontend.
              </p>
              <p><strong>Stay monolithic if:</strong></p>
              <ul style={listStyle}>
                <li>Your pages fit the theme&apos;s sections and blocks.</li>
                <li>Marketers launch pages every week without a developer.</li>
                <li>You rely on plugins or apps that only work inside the theme.</li>
                <li>Nobody on your side will own a second application after launch.</li>
              </ul>
              <p><strong>Go headless if:</strong></p>
              <ul style={listStyle}>
                <li>You need an experience the theme system cannot support easily, such as a configurator or app-like flow.</li>
                <li>Your team already builds in a non-theme stack such as Next.js.</li>
                <li>One catalog must feed a website, a mobile app and other channels.</li>
                <li>A CMS drives most of your content and has to sit next to products.</li>
                <li>You have a developer who will own the frontend after launch.</li>
              </ul>
              <p>
                The headless signals above follow{' '}
                <a href={SRC.shopifyHeadless} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                  Shopify&apos;s own guidance on when to build headless
                </a>{' '}
                (checked 22 Oct 2026). For the concrete Shopify choice between a Liquid theme, Next.js and Hydrogen, read{' '}
                <a href="/comparisons/shopify-plus-vs-custom-headless-nextjs" style={linkStyle}>
                  Shopify Plus vs headless Next.js
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ── Sourced Stats ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// verified industry data</p>
            <h2 style={{ marginTop: '10px' }}>What the Vendors and Google Actually Say</h2>
            <div className="pp-bento" style={{ marginTop: '32px' }}>
              {SOURCED.map((s) => (
                <div className="pp-card" key={s.v}>
                  <div style={{ fontFamily: 'var(--pp-disp)', fontWeight: 800, fontSize: '36px', color: 'var(--pp-orange-dark)', letterSpacing: '-.03em', lineHeight: 1 }}>{s.v}</div>
                  <p style={{ marginTop: '10px', fontSize: '15px', color: 'var(--pp-body)' }}>{s.d}</p>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-block', marginTop: '10px', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-muted)', textDecoration: 'underline' }}
                  >
                    {s.src}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6 Core Capabilities ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// architectural dimensions</p>
            <h2 style={{ marginTop: '10px' }}>6 Things That Change When You Go Headless</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '64ch' }}>
              Four gains and two costs. Weigh them against your own team before you weigh them against a competitor&apos;s
              site.
            </p>
            <div className="pp-bento" style={{ marginTop: '32px' }}>
              {PILLARS.map((p) => (
                <div className="pp-card" key={p.t}>
                  <div style={{ fontFamily: 'var(--pp-mono)', fontSize: '20px', color: 'var(--pp-orange-dark)', marginBottom: '10px' }} aria-hidden="true">{p.i}</div>
                  <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '16px', color: 'var(--pp-ink)', marginBottom: '6px' }}>{p.t}</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--pp-body)' }}>{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Interactive ROI Calculator ── */}
        <section className="pp-sec" id="headless-roi-calculator">
          <div className="pp-wrap">
            <EcommerceRoiCalculator
              source="us_headless_vs_monolithic_comparison_page"
              defaultPlatform="shopify"
              defaultTarget="headless"
            />
          </div>
        </section>

        {/* ── Detailed Comparison Matrix ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// side-by-side technical matrix</p>
            <h2 style={{ marginTop: '10px' }}>Monolithic vs Headless Comparison Table</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              How the two architectures differ on the points that decide most projects.
            </p>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Architectural Dimension</th>
                    <th>Headless (separate frontend)</th>
                    <th>Monolithic (theme on the platform)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="me">
                    <td className="name">Who renders the pages</td>
                    <td>Your frontend app, often Next.js, using platform APIs</td>
                    <td>The commerce platform, from its theme templates</td>
                  </tr>
                  <tr>
                    <td className="name">Speed target</td>
                    <td>Same 2.5 s good-LCP bar; you control caching and JavaScript</td>
                    <td>Same 2.5 s bar; plugins and theme weight decide it</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Frontend customisation</td>
                    <td>Any React UI, configurators, app-like flows</td>
                    <td>Within the theme system&apos;s sections and blocks</td>
                  </tr>
                  <tr>
                    <td className="name">Plugins and apps</td>
                    <td>Connected one by one through APIs or SDKs</td>
                    <td>Install and they appear in the theme</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Content editing</td>
                    <td>Headless CMS with developer-built blocks</td>
                    <td>Built-in theme editor or page builder</td>
                  </tr>
                  <tr>
                    <td className="name">Channels served</td>
                    <td>Web, apps, kiosks and partners from one API</td>
                    <td>Mainly the platform&apos;s own storefront</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Build time with FactoryJet</td>
                    <td>8 to 14 weeks</td>
                    <td>3 to 5 weeks for a custom theme</td>
                  </tr>
                  <tr>
                    <td className="name">Ongoing ownership</td>
                    <td>Needs a TypeScript developer after launch</td>
                    <td>Merchants can run day to day without code</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '22px', marginTop: '48px', color: 'var(--pp-ink)' }}>
              Platform Facts: Monolithic Default, Headless Option and List Price
            </h3>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              Every major platform now runs both ways. Vendor facts only, each row linked to the official page, checked
              22 Oct 2026.
            </p>
            <div style={{ marginTop: '24px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Platform</th>
                    <th>Monolithic default</th>
                    <th>Headless option</th>
                    <th>Published price or licence</th>
                    <th>Source (checked 22 Oct 2026)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="me">
                    <td className="name">Shopify Plus</td>
                    <td>Liquid themes; JSON templates hold sections merchants reorder</td>
                    <td>Storefront API and Customer Account API; Hydrogen toolkit</td>
                    <td>$2,300/mo on a 3-year term, $2,500/mo on a 1-year term</td>
                    <td>
                      <a href={SRC.shopifyThemes} target="_blank" rel="noopener noreferrer" style={linkStyle}>Themes</a>,{' '}
                      <a href={SRC.hydrogen} target="_blank" rel="noopener noreferrer" style={linkStyle}>Hydrogen</a>,{' '}
                      <a href={SRC.shopifyPlus} target="_blank" rel="noopener noreferrer" style={linkStyle}>Plus pricing</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="name">BigCommerce</td>
                    <td>Hosted themes on Core, Growth, Scale and Performance plans</td>
                    <td>Catalyst, a Next.js storefront on the GraphQL Storefront API</td>
                    <td>Core $39/mo up to Performance from $1,499/mo billed annually</td>
                    <td>
                      <a href={SRC.bcCatalyst} target="_blank" rel="noopener noreferrer" style={linkStyle}>Catalyst docs</a>,{' '}
                      <a href={SRC.bcPricing} target="_blank" rel="noopener noreferrer" style={linkStyle}>Pricing</a>
                    </td>
                  </tr>
                  <tr className="me">
                    <td className="name">Adobe Commerce</td>
                    <td>Magento themes rendered by the application</td>
                    <td>Two GraphQL implementations for headless storefronts</td>
                    <td>Quote-based; three-year standard support window per version</td>
                    <td>
                      <a href={SRC.adobeGraphql} target="_blank" rel="noopener noreferrer" style={linkStyle}>GraphQL docs</a>,{' '}
                      <a href={SRC.adobePricing} target="_blank" rel="noopener noreferrer" style={linkStyle}>Pricing</a>,{' '}
                      <a href={SRC.adobeLifecycle} target="_blank" rel="noopener noreferrer" style={linkStyle}>Lifecycle</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="name">Magento Open Source</td>
                    <td>Self-hosted PHP application with its own themes</td>
                    <td>Core GraphQL API ships in the open-source codebase</td>
                    <td>Free; OSL-3.0 and AFL-3.0 licences</td>
                    <td>
                      <a href={SRC.magentoGithub} target="_blank" rel="noopener noreferrer" style={linkStyle}>GitHub</a>
                    </td>
                  </tr>
                  <tr className="me">
                    <td className="name">WooCommerce</td>
                    <td>WordPress plugin rendered by the WordPress theme</td>
                    <td>Store API: public REST endpoints for cart, checkout and products</td>
                    <td>Open source, free to download</td>
                    <td>
                      <a href={SRC.wooStoreApi} target="_blank" rel="noopener noreferrer" style={linkStyle}>Store API</a>,{' '}
                      <a href={SRC.woo} target="_blank" rel="noopener noreferrer" style={linkStyle}>woocommerce.com</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="name">commercetools</td>
                    <td>None; API-first by design</td>
                    <td>Composable: independent, best-of-breed components</td>
                    <td>Not published on the page we read</td>
                    <td>
                      <a href={SRC.commercetools} target="_blank" rel="noopener noreferrer" style={linkStyle}>Composable commerce</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Composable Architecture Deep Dive ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// architectural deep-dive</p>
            <h2 style={{ marginTop: '10px' }}>How Each Architecture Serves a Page</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                The difference shows up in what happens when a shopper opens a product page. Our{' '}
                <a href="/headless-commerce" style={linkStyle}>headless commerce</a> overview goes deeper on the
                frontend side.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>1. Monolithic request path</h3>
              <ol style={olStyle}>
                <li>The browser asks the commerce platform for the product URL.</li>
                <li>The platform loads the theme template and fills it from its own database.</li>
                <li>Installed plugins add their scripts and widgets to the page.</li>
                <li>The finished page goes back to the shopper, cached where the platform allows.</li>
              </ol>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>2. Headless request path</h3>
              <ol style={olStyle}>
                <li>The browser asks the frontend app, usually served from a CDN.</li>
                <li>If a cached copy exists, it is returned straight away.</li>
                <li>If not, the frontend calls the commerce API (and the CMS) for data and renders the page on the server.</li>
                <li>Cart and checkout calls go to the platform live; checkout often stays on the platform&apos;s own pages.</li>
              </ol>
              <p>
                That second path is why headless can be fast and why it needs care: every step is code you own. Next.js
                handles the refresh with Incremental Static Regeneration, which{' '}
                <a href={SRC.nextIsr} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                  updates static content without rebuilding the entire site
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ── Headless Developer Experience & Tooling ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// migration path</p>
            <h2 style={{ marginTop: '10px' }}>How to Move From Monolithic to Headless in Stages</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                A full cutover in one release is the riskiest way to go headless. We run it in stages, each one shippable
                on its own, as part of a{' '}
                <a href="/replatforming" style={linkStyle}>replatforming</a> or{' '}
                <a href="/services/headless-shopify-development" style={linkStyle}>headless Shopify</a> project:
              </p>
              <ol style={olStyle}>
                <li>Measure real-user speed data and list every plugin, marking which ones have an API.</li>
                <li>Pick one pilot surface: a campaign site, a configurator or a content hub.</li>
                <li>Build it on the platform API while the monolithic theme keeps running the store.</li>
                <li>Export every live URL and build a one-to-one 301 map, single hop, before any page moves.</li>
                <li>Move product and collection pages; keep checkout on the platform.</li>
                <li>Set up the CMS block library with the marketing team, then retire the theme.</li>
              </ol>
              <p>Things that sink headless projects, in our experience:</p>
              <ul style={listStyle}>
                <li>No named owner for the frontend once the build team leaves.</li>
                <li>Plugins that turned out to have no API, found after launch.</li>
                <li>Changed product URLs without redirects.</li>
                <li>A CMS set up after design sign-off, so editors get the wrong blocks.</li>
              </ul>
              <p>
                Platform-specific help: <a href="/services/shopify-plus-agency" style={linkStyle}>Shopify Plus</a>,{' '}
                <a href="/services/magento-development" style={linkStyle}>Magento</a> and{' '}
                <a href="/services/woocommerce-development" style={linkStyle}>WooCommerce</a>. To size a move first, try
                the <a href="/tools/replatforming-cost-calculator" style={linkStyle}>replatforming cost calculator</a> or
                read <a href="/comparisons/shopify-plus-vs-magento" style={linkStyle}>Shopify Plus vs Magento</a>.
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="pp-sec pp-faqsec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// common questions</p>
            <div style={{ marginTop: '16px' }}>
              <FAQ
                headline="Frequently asked questions about monolithic vs headless commerce"
                categories={FAQ_CATEGORIES}
                items={FAQ_ITEMS}
              />
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <div className="pp-ctagrid">
              <div className="pp-cta">
                <p className="pp-mlabel">// headless feasibility audit</p>
                <h2 style={{ margin: '12px 0 16px' }}>Should your brand transition to headless?</h2>
                <p className="pp-lead" style={{ maxWidth: '44ch' }}>
                  Book a technical architecture consultation directly with our founder. We review your catalog, speed
                  data and plugins, then tell you whether headless or a tuned theme fits. You see a working demo on your
                  own data before you sign.
                </p>
                <div style={{ marginTop: '24px' }}>
                  <a className="pp-primary" href={CALENDLY} target="_blank" rel="noopener noreferrer">
                    Book a 30-Minute Scoping Call
                  </a>
                </div>
                <div className="founder">
                  <Image
                    src="/bhavesh_avatar-240.webp"
                    alt="Bhavesh Barot, Founder of FactoryJet"
                    width={46}
                    height={46}
                    quality={95}
                    style={{ width: '46px', height: '46px', flexShrink: 0, borderRadius: '50%', objectFit: 'cover', border: '1.5px solid var(--pp-orange)' }}
                  />
                  <div>
                    <b>Bhavesh Barot</b>
                    <span>Founder, FactoryJet &bull; 10+ yrs building commerce</span>
                  </div>
                </div>
              </div>
              <div className="pp-proof">
                <div className="top">
                  <Image
                    src="/images/testimonials/vishal-impulse-branding-160.webp"
                    alt="Vishal K, Impulse Branding"
                    width={46}
                    height={46}
                    style={{ borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--pp-line)' }}
                  />
                  <div>
                    <b>Vishal K.</b>
                    <span>Director, Impulse Branding</span>
                  </div>
                </div>
                <blockquote>
                  &ldquo;In our business, clients size you up before they ever call. FactoryJet built us a website
                  that finally looks as solid as the work we deliver, and we are getting real project inquiries
                  through it.&rdquo;
                </blockquote>
                <div className="rate">
                  <a href="/case-studies/impulse-branding-migration" style={{ color: 'var(--pp-orange-dark)', fontWeight: 600, textDecoration: 'underline' }}>
                    Read the Impulse Branding case study →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
