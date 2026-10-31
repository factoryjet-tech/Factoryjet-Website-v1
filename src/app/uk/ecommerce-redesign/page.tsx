import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { twinAlternates } from '@/data/hreflangMap';
import '../ai-agents/ai-agents.css';

const CANONICAL = 'https://factoryjet.com/uk/ecommerce-redesign';
const PUBLISHED = '2026-10-29';
const UPDATED = '2026-10-31';
const TITLE = 'Ecommerce Website Redesign Services UK | FactoryJet';
const H1 = 'Ecommerce Website Redesign for UK Stores That Already Sell';

/* Design tokens, copied by value from ../ai-agents/ai-agents.css so inline
   styles stay on-system without CSS custom property references in this file. */
const T = {
  ink: '#0F0F12',
  n200: '#E5E5E0',
  n400: '#6E6E68',
  orange: '#FF5C00',
  green: '#047857',
  small: '#B23E13',
  fm: "'Geist Mono',monospace",
  fd: "'Plus Jakarta Sans',sans-serif",
};

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD, so the
   schema can never describe a trail a human cannot see. Never hand-copy a
   second list here. */
const crumbs = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'Ecommerce Redesign', url: CANONICAL },
];

/* ─── External sources, each fetched and read on 2026-10-29 (HTTP 200,
       quoted claim found in the fetched body) ──────────────────────────── */
// Whito, "How Much Does a Website Cost in the UK? Web Design Prices 2026":
// "E-commerce websites range from £5,000 to £20,000 or more. Hidden costs like
// copywriting, photography, and SEO typically add 30 to 50% on top".
const SRC_WHITO = 'https://whito.co.uk/research/website-design-costs-uk/';
// SpotDev, "Website Redesign Cost UK" (22 May 2026, a HubSpot developer):
// "A UK website redesign typically costs between £10,000 and £80,000, with most
// B2B projects landing in the £15,000 to £60,000 range." and "Partner-led
// HubSpot migrations commonly land at £8,000 to £18,000".
const SRC_SPOTDEV = 'https://www.spotdev.co.uk/blog/website-redesign-cost-uk';
// Google Search Central, site moves with URL changes: "We recommend server
// side permanent redirects from the old URLs to the new URLs" and "301 and
// other permanent redirects don't cause a loss in PageRank".
const SRC_GOOGLE_MOVE = 'https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes';
// Shopify Help Center, URL redirects: "redirects only work for URLs that return
// 404 errors" and "If the URL still loads a valid webpage, then" the redirect
// does not apply.
const SRC_SHOPIFY_REDIRECTS = 'https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect';
// web.dev, Web Vitals (read 2026-10-31): "LCP should occur within 2.5 seconds",
// "pages should have a INP of 200 milliseconds or less", "CLS of 0.1. or less".
const SRC_WEBVITALS = 'https://web.dev/articles/vitals';
// Shopify.dev, JSON templates (read 2026-10-31): "Merchants can add, remove, and
// reorder these sections using the theme editor."
const SRC_SHOPIFY_JSON = 'https://shopify.dev/docs/storefronts/themes/architecture/templates/json-templates';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',   label: 'Redesign basics' },
  { key: 'rankings', label: 'SEO and rankings' },
  { key: 'cost',     label: 'Cost and timing' },
  { key: 'working',  label: 'Working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── Redesign basics ──
  { category: 'basics', question: 'What is an ecommerce website redesign?',
    answer: 'An ecommerce website redesign rebuilds how your online shop looks and works while keeping the platform, the products, the customers and the order history. It usually covers the theme, navigation, collection and product pages, search and filters, the basket and the mobile layout. A replatform is different: it moves the whole store to new software.' },
  { category: 'basics', question: 'How do I know if my online store needs a redesign?',
    answer: 'Look at evidence first. If phone visitors leave far more often than desktop visitors, if staff avoid editing the homepage because the theme breaks, if your filters cannot handle the catalogue, or if the store still looks like it did five years ago while rivals moved on, a redesign is likely. If the platform itself blocks you, read the replatform section on this page.' },
  { category: 'basics', question: 'How do you redo a website without starting from scratch?',
    answer: 'You keep everything that already earns: the domain, the URLs that rank, the product data, the reviews and the customer accounts. Then you rebuild the templates around them. On Shopify that means a new or heavily reworked theme published over the old one. Customers keep logging in, orders keep flowing, and the old theme stays saved in case you need it.' },
  { category: 'basics', question: 'Should I redesign my store or move to a new platform?',
    answer: 'Redesign if the platform still does what the business needs and the problem is the shop front. Move platform if you are paying developers to work around missing features every month, if the platform cannot handle your trade pricing or catalogue, or if it is near the end of support. A short review of your store usually settles the question in one call.' },
  { category: 'basics', question: 'Can you redesign a Shopify store without taking it offline?',
    answer: 'Yes. Shopify lets you build and preview a new theme while the current one stays live. We build the redesign as an unpublished theme in your own store, using your real products, and you review it on your phone before anything changes. Launch is a theme switch, plus the redirects for any URLs that changed. Shoppers see no downtime.' },
  { category: 'basics', question: 'How often should you redesign an online store?',
    answer: 'There is no fixed cycle. Redesign when the evidence says so: phone conversion well below desktop in GA4, Core Web Vitals failing in PageSpeed Insights, or staff unable to edit pages without a developer. A store that passes all three can wait and spend the budget on photography and copy.' },
  { category: 'basics', question: 'Can I redesign a WooCommerce store without moving platform?',
    answer: 'Yes. A WooCommerce redesign is a new or reworked WordPress theme built on a staging copy of the site, so the live shop keeps trading. Products, customers and orders stay in the same database. Launch swaps the theme, and any URL that changes gets one permanent redirect. Move platform only if WooCommerce itself blocks how you sell.' },
  { category: 'basics', question: 'Can AI redesign my ecommerce store?',
    answer: 'AI tools can draft layouts, write first-pass product copy and suggest section orders quickly. They cannot decide which URLs to keep, check that every redirect fires once, or test a basket on a real phone. We use AI for drafts and people for the redirect map, the data and the launch checks.' },

  // ── SEO and rankings ──
  { category: 'rankings', question: 'Will a website redesign hurt my Google rankings?',
    answer: 'It can, if URLs change without redirects or if pages that rank lose their content. Google says permanent redirects pass ranking signals without loss, so the risk sits in the mapping, not the redirect itself. We export every URL that gets traffic or links before design starts, map each one to its new home, and check them again after launch.' },
  { category: 'rankings', question: 'How do I redesign a website without losing SEO?',
    answer: 'Five steps. List every URL that gets clicks, impressions or backlinks from Search Console and a crawl. Keep URLs the same where you can. Send every changed URL to its closest new page with one permanent redirect, never a chain. Keep the text and headings that ranking pages rely on. Then watch Search Console coverage and clicks daily for the first few weeks.' },
  { category: 'rankings', question: 'Why did my Shopify redirect not work after a redesign?',
    answer: 'Shopify only follows a URL redirect when the old address returns a 404. Its own help pages say a redirect from a URL that still loads a valid page will not fire. So if an old collection or page is still published, the redirect is ignored. We unpublish or delete the old page first, then test every redirect in the map one by one.' },
  { category: 'rankings', question: 'Does a redesign help with AI search like ChatGPT and Google AI Overviews?',
    answer: 'It can. AI assistants and AI Overviews read your pages the way a search crawler does, so clear product data, collection pages that answer real buying questions, structured data and fast pages all help. A redesign is a good moment to add delivery, returns and sizing answers in plain text. We cover this alongside classic SEO in every store redesign.' },
  { category: 'rankings', question: 'What goes on a website redesign checklist?',
    answer: 'Before design: export URLs with clicks and backlinks from Search Console and a Screaming Frog crawl, note the GA4 conversion rate by device, and run PageSpeed Insights on the top templates. Before launch: test every redirect, check each page has one H1 and its old title, and submit the new sitemap. After launch: watch 404s and clicks for a fortnight.' },
  { category: 'rankings', question: 'What should I check in Search Console after the new store goes live?',
    answer: 'Check four things in the first fortnight. Pages that return 404 errors, which usually means a missing redirect. Redirect chains, where one URL hops through two others. Clicks on your top twenty pages compared with the same days before launch. And whether the new sitemap was read. A dip of a few days is normal while Google recrawls; a slide that keeps going is not.' },

  // ── Cost and timing ──
  { category: 'cost', question: 'How much does an ecommerce website redesign cost in the UK?',
    answer: 'Market figures vary with the size of the job. Whito, a UK price guide updated in October 2026, puts ecommerce websites at £5,000 to £20,000 or more. SpotDev, a UK HubSpot developer, puts UK redesigns at £10,000 to £80,000, with most B2B projects at £15,000 to £60,000. These are market ranges, not our prices. FactoryJet quotes a fixed price in writing after a short scoping call.' },
  { category: 'cost', question: 'What hidden costs come with a store redesign?',
    answer: 'Whito found that copywriting, photography and SEO add 30 to 50% on top of a quoted price when nobody budgets for them. On a store, add product photo reshoots, app subscriptions that the new theme needs, redirect mapping and a fortnight of checks after launch. Ask for a quote that lists every one of these lines, even where the answer is that you supply it.' },
  { category: 'cost', question: 'How long should an ecommerce website redesign take?',
    answer: 'A custom-theme redesign on Shopify or WooCommerce usually takes 3 to 5 weeks. Stores with subscriptions, trade pricing or a migration take 5 to 8 weeks. A headless or custom build takes 8 to 14 weeks. The things that stretch a timeline are late product photos, late copy and features added after the scope was signed, so we agree those up front.' },
  { category: 'cost', question: 'Can I redesign my store in phases to spread the cost?',
    answer: 'Yes, and for a trading store it is often the safer route. A common order is product and collection templates first, because that is where most revenue sits, then the homepage and navigation, then content pages and the blog. You can stop after any phase and still own a working store.' },
  { category: 'cost', question: 'Is a theme refresh enough instead of a full redesign?',
    answer: 'Sometimes. If the store converts well, loads fast and only looks dated, new colours, type, photography and a tidier homepage can be enough. If shoppers struggle with filters, product pages, the basket or the mobile layout, a refresh only paints over the problem. We will tell you which one you need before you spend money on either.' },

  // ── Working with us ──
  { category: 'working', question: 'Can I see the redesign before I sign anything?',
    answer: 'Yes. We build an unpublished preview theme on your own products, so live customers never see it. You tap through a product page, the basket and checkout on your own phone and send us notes.' },
  { category: 'working', question: 'What should I look for in a website redesign agency in the UK?',
    answer: 'Ask four things. Will they show a working draft on your own products before you sign? Who builds and tests the redirect map? Is the price fixed per phase, in writing? Do you own the theme and code from day one? A redesign agency that cannot answer all four clearly is pricing the design and leaving the risk with you.' },
  { category: 'working', question: 'Which platforms do you redesign?',
    answer: 'Shopify and Shopify Plus, WooCommerce, BigCommerce and Adobe Commerce (Magento), plus headless stores built on Next.js. If the review shows your platform is the real problem, we plan a migration instead, and the redesign happens on the new platform as part of the same project.' },
  { category: 'working', question: 'Who owns the new theme and code?',
    answer: 'You do, from day one. The theme sits in your own store and the code in a repository in your name. Apps, hosting and any AI tools can run in your own accounts at cost, with no markup.' },
  { category: 'working', question: 'What happens if something breaks after launch?',
    answer: 'Defects are fixed inside the build price for a cover period we agree before work starts. After that, support is optional: each change is quoted and approved before we do it, and there is no monthly minimum. You can book a one-off check before peak season and nothing else.' },
  { category: 'working', question: 'Who will I deal with day to day?',
    answer: 'The founder, Bhavesh Barot, is involved in every project and replies to new enquiries within 24 hours. FactoryJet was founded in 2014 and has worked with more than 500 businesses, with 97% of projects delivered on time.' },
];

/* ─── Six signs listicle (rendered and reused in nothing else) ──────── */
const SIGNS: { t: string; d: string }[] = [
  { t: 'Phone shoppers leave much faster than desktop shoppers.', d: 'In GA4, compare engagement rate and purchases per session by device category for the last 90 days. A wide gap points at the mobile layout, image weight or a cramped product page, which a redesign fixes. The platform is rarely the cause.' },
  { t: 'Nobody dares edit the homepage.', d: 'If a banner change needs a developer or breaks the layout, the theme has been patched too many times. On Shopify, a theme built on JSON templates lets staff add, remove and reorder sections in the theme editor, which solves it on the platform you already pay for.' },
  { t: 'Filters and search cannot keep up with the catalogue.', d: 'You added ranges, sizes and colours, but collections still show one long grid. Better product data, metafields (extra product fields such as fabric or fit) and filter design usually fix this on the platform you already have.' },
  { t: 'Apps pile up and slow every page.', d: 'Each app can add scripts to every page. Run a product page through PageSpeed Insights: Google counts a page as good when, for at least 75% of visits, the largest element loads within 2.5 seconds and taps respond within 200 milliseconds. A redesign is the moment to check which apps a modern theme can replace, and removing them lifts speed without a platform move.' },
  { t: 'The brand moved on and the store did not.', d: 'New packaging, new photography, a new range, and a store that still looks like the launch version. That is a design problem, and the cheapest one to solve.' },
  { t: 'Product pages hide the answers shoppers need.', d: 'Delivery cost, returns window, sizing and stock sit in tabs or below the fold. Moving them next to the add to basket button is template work, and it also gives AI search plain answers to quote.' },
];

/* ─── Comparison rows: redesign vs replatform vs theme refresh ─────── */
const COMPARE_ROWS: { feat: string; redesign: string; replatform: string; refresh: string }[] = [
  { feat: 'What changes', redesign: 'Templates, navigation, product and collection pages, mobile layout', replatform: 'The whole store moves to new software, then gets designed', refresh: 'Colours, type, photography, homepage banners' },
  { feat: 'Platform', redesign: 'Stays the same', replatform: 'Changes (for example WooCommerce or Magento to Shopify)', refresh: 'Stays the same' },
  { feat: 'URLs and redirects', redesign: 'Some change, mapped one by one', replatform: 'Most change, full redirect map needed', refresh: 'Usually none change' },
  { feat: 'Customer accounts and orders', redesign: 'Untouched', replatform: 'Migrated, then checked record by record', refresh: 'Untouched' },
  { feat: 'Typical timeline', redesign: '3 to 5 weeks on a custom theme', replatform: '5 to 8 weeks, longer for headless', refresh: 'Shorter than a redesign, quoted per job' },
  { feat: 'Risk to rankings', redesign: 'Low with a redirect map', replatform: 'Highest, needs the most care', refresh: 'Lowest' },
  { feat: 'Right when', redesign: 'The platform works and the shop front does not', replatform: 'The platform blocks how you sell', refresh: 'The store converts well but looks dated' },
];

/* Cells that are a real downside render amber; neutral cells stay plain ink. */
const DOWNSIDE = new Set([
  'Most change, full redirect map needed',
  'Migrated, then checked record by record',
  '5 to 8 weeks, longer for headless',
  'Highest, needs the most care',
]);
const cellClass = (v: string) => (DOWNSIDE.has(v) ? 'partial' : undefined);

/* ─── Agency vs freelancer vs theme edit ─────────────────────────────── */
const WHO_ROWS: { feat: string; agency: string; freelancer: string; edit: string }[] = [
  { feat: 'Who builds the redirect map', agency: 'Part of the quoted scope, tested after launch', freelancer: 'Ask, it is often left to you', edit: 'Rarely needed, URLs usually stay' },
  { feat: 'Who owns the code', agency: 'Should be you, written into the contract', freelancer: 'Agree it in writing before work starts', edit: 'You, inside your own store' },
  { feat: 'Cover if something breaks', agency: 'Defect cover period agreed up front', freelancer: 'Depends on one person being free', edit: 'Theme developer support, if any' },
  { feat: 'Right when', agency: 'Templates, filters and URLs all change', freelancer: 'A small catalogue and a narrow brief', edit: 'The store works and only looks dated' },
];

/* ─── JSON-LD. The Organization is defined once, sitewide; this page only
       references it by @id and never redefines it. ─────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Ecommerce Website Redesign UK',
      serviceType: 'Ecommerce website redesign, Shopify store redesign, theme rebuild and SEO-safe redirect mapping',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'Ecommerce website redesign for UK online stores that already trade. A draft theme on your own products before you sign, a redirect map that protects rankings, and a fixed price per phase on Shopify, WooCommerce, BigCommerce or Adobe Commerce.',
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
      inLanguage: 'en-GB',
      datePublished: PUBLISHED,
      dateModified: UPDATED,
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['[data-speakable="true"]'] },
      author: {
        '@type': 'Person',
        '@id': 'https://factoryjet.com/#bhavesh-barot',
        name: 'Bhavesh Barot',
        jobTitle: 'Founder & CEO',
        url: 'https://factoryjet.com/author/bhavesh-barot',
        sameAs: [
          'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
          'https://github.com/factoryjet-tech',
        ],
      },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
      about: { '@id': `${CANONICAL}#service` },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
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
  description:
    'Ecommerce website redesign for UK stores that already sell. See a draft on your own products before you sign, keep your rankings with a full redirect map.',
  alternates: { canonical: CANONICAL, languages: twinAlternates['ecommerce-redesign'] },
  openGraph: {
    title: TITLE,
    description:
      'Shopify store redesign and ecommerce website redesign for UK online retailers. A draft theme on your own catalogue first, SEO-safe redirects, and a fixed price per phase.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/ecommerce-development-og.webp', width: 1200, height: 630, alt: 'Ecommerce website redesign UK by FactoryJet' }],
  },
  robots: { index: true, follow: true },
};

const srcNote = { fontFamily: T.fm, fontSize: 11, color: T.n400, marginTop: 12 } as const;
const srcLink = { textDecoration: 'underline' } as const;

export default function EcommerceRedesignUKPage() {
  return (
    <>
      <script id="ld-uk-ecommerce-redesign" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="uk-aiagents">
      <main>

        <Breadcrumbs items={crumbs} />

        {/* ═══ 1. HERO ═══ */}
        <section className="sec-lg dot-grid" style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />UK Ecommerce Redesign</span>
                  <span className="chip">Shopify Store Redesign</span>
                  <span className="chip">Rankings Kept</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  You have orders, customers and pages that rank. A redesign should keep all of that and fix the shop
                  front: product pages, collections, filters, the basket and the phone layout. We build the new design
                  as a draft theme inside your own store, on your real products, so you see it working before you sign.
                  Our ecommerce website redesign services cover Shopify, WooCommerce, BigCommerce and Adobe Commerce.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><a href="/author/bhavesh-barot"><b>Bhavesh Barot</b></a>, Founder<br /><span>500+ businesses since 2014</span></div>
                  <div className="upd">Last updated<br />31 October 2026</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_ecommerce_redesign_hero"
                    submitLabel="See a draft of my store"
                    trustText="Working software on your own data before you sign. Founder replies within 24 hours."
                    service="Ecommerce Website Redesign" />
                </div>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/shopify-migration/shopify-migration-test-store.webp" width={1200} height={800} fetchPriority="high" decoding="async" alt="Seen from behind, a woman and a man at a desk review a draft store layout on a laptop screen" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What stays, what changes</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Products, customers, orders</div><div className="scorecard-note">same store, same records</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Kept</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">URLs that rank</div><div className="scorecard-note">kept or redirected one by one</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Mapped</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Templates and phone layout</div><div className="scorecard-note">rebuilt around how people buy</div></div>
                    <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>New</div>
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
              <span className="lab">What is an ecommerce website redesign?</span>
              <p>
                An ecommerce website redesign rebuilds the templates, navigation, product pages, filters and mobile
                layout of an online shop while keeping its platform, products, customer accounts and order history.
                Done properly, every URL that earns traffic is kept or redirected once, so the store keeps its Google
                rankings through launch.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Three terms we use on this page</span>
              <p>
                A <b>theme</b> is the set of templates that controls how a Shopify or WooCommerce store looks. A
                <b> 301 redirect</b> is a permanent forwarding rule that sends an old web address, and its ranking, to a
                new one. <b>Replatforming</b> means moving the whole store to different software, for example from
                Magento to Shopify. A <b>handle</b> is the last part of a Shopify product or collection address.
                <b> PageRank</b> is Google&rsquo;s name for the ranking value that links pass to a page. A <b>headless</b>{' '}
                store keeps the platform for products and orders but runs the shop front as separate code.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ 3. SIX SIGNS (LISTICLE) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Before you change platform</span>
              <h2>6 signs your store needs a redesign, not a new platform</h2>
              <p className="lead mt-4">
                A new platform is the most expensive answer to a slow or dated store. These six signs point at a
                redesign on the software you already pay for. Each one can be checked in your own analytics or by
                using the store on a phone for ten minutes.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {SIGNS.map((s, i) => (
                <li key={s.t} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.orange, minWidth: 34 }}>{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-8" style={{ maxWidth: 900 }}>
              If none of the six fit, and the trouble is trade pricing the platform cannot hold, an app bill that keeps
              growing, or software near the end of support, the answer may be a move. Our <a href="/uk/shopify-migration">UK
              Shopify migration</a> page covers that route, and the table further down compares all three options.
            </p>
          </div>
        </section>

        {/* ═══ 4. REDESIGN WITHOUT LOSING RANKINGS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">SEO-safe launch</span>
                <h2>Redesign without losing rankings</h2>
                <div className="stack mt-6">
                  <p>
                    Rankings drop after a redesign when an address Google knew stops working, or stops saying what it
                    said before. Google&rsquo;s own site move guide recommends server-side permanent
                    redirects from each old URL to its new one, and says permanent redirects do not lose PageRank. So the
                    work sits in the map.
                  </p>
                  <h3>1. Redirect map, built before design starts</h3>
                  <p>
                    We export every URL with clicks, impressions or backlinks from Search Console and a full crawl of the
                    store with Screaming Frog. Each one gets a row: keep, or redirect to the closest new page. Every redirect is one hop. A URL
                    that forwards to another URL that forwards again wastes crawl time, so we check each destination is
                    not itself redirected.
                  </p>
                  <h3>2. URL parity wherever possible</h3>
                  <p>
                    The safest redirect is the one you never need. On Shopify, product and collection paths keep the
                    same handles unless someone changes them, so a redesign can leave most addresses untouched. We keep
                    page titles, headings and the copy that ranking pages rely on, and rewrite around them.
                  </p>
                  <h3>3. A Shopify trap worth knowing</h3>
                  <p>
                    Shopify&rsquo;s help centre says a URL redirect only works when the old address returns a 404. If the
                    old page is still published, the redirect is ignored and the old page keeps loading. We unpublish
                    before we redirect, then test every row in the map after launch.
                  </p>
                  <h3>4. Search Console checks for the first fortnight</h3>
                  <p>
                    New 404 errors, redirect chains, clicks on the top twenty pages against the same days before launch,
                    and whether the new sitemap was read. A short dip while Google recrawls is normal. A slide that keeps
                    going gets traced to a page and fixed the same day.
                  </p>
                </div>
                <p style={srcNote}>
                  Sources, read on 29 and 31 October 2026:{' '}
                  <a href={SRC_GOOGLE_MOVE} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>Google Search Central, site moves with URL changes</a>;{' '}
                  <a href={SRC_SHOPIFY_REDIRECTS} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>Shopify Help Center, URL redirects</a>;{' '}
                  <a href={SRC_WEBVITALS} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>web.dev, Web Vitals</a>;{' '}
                  <a href={SRC_SHOPIFY_JSON} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>Shopify.dev, JSON templates</a>.
                </p>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/shopify-migration/shopify-migration-redirect-map.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A woman pins cards joined by orange string in a tree shape on a cork board while a colleague holds more cards" style={{ width: '100%', height: 'auto', aspectRatio: '3 / 2', background: T.n200, borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">Every row in the map</span>
                  <div className="scorecard-row"><div className="scorecard-metric">Old URL and its clicks</div><div className="scorecard-val" style={{ fontSize: 14 }}>Search Console</div></div>
                  <div className="scorecard-row"><div className="scorecard-metric">Backlinks pointing at it</div><div className="scorecard-val" style={{ fontSize: 14 }}>Crawl data</div></div>
                  <div className="scorecard-row"><div className="scorecard-metric">Keep or redirect</div><div className="scorecard-val" style={{ fontSize: 14 }}>Decision</div></div>
                  <div className="scorecard-row"><div className="scorecard-metric">Tested after launch</div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>One hop</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 5. COMPARISON TABLE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <span className="eyebrow">Side by side</span>
            <h2 style={{ maxWidth: 760 }}>Redesign vs replatform vs theme refresh</h2>
            <p className="lead mt-4" style={{ maxWidth: 760 }}>
              Three jobs that agencies often sell under one name. They differ in what moves, how long they take and how
              much they put your rankings at risk. Redesign and replatform timelines are the ranges we work to on our own projects.
            </p>
            <p className="md:hidden mt-8" style={{ fontFamily: T.fm, fontSize: 12, color: T.n400 }}>Swipe sideways to see every column.</p>
            <div className="card mt-8" style={{ padding: 0, overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <table className="cmp-table" style={{ minWidth: 640 }}>
                <thead>
                  <tr>
                    <th>Question</th>
                    <th className="fj">Redesign</th>
                    <th>Replatform</th>
                    <th>Theme refresh</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE_ROWS.map((r) => (
                    <tr key={r.feat}>
                      <td className="feat">{r.feat}</td>
                      <td className="fj"><span className="yes">{r.redesign}</span></td>
                      <td><span className={cellClass(r.replatform)}>{r.replatform}</span></td>
                      <td><span className={cellClass(r.refresh)}>{r.refresh}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6" style={{ maxWidth: 820 }}>
              Not sure which column you are in? That is the question our <a href="/uk/ecommerce-consultant">UK ecommerce
              consultant</a> review answers. If you sell at volume on Shopify and want more control over checkout and
              several storefronts, see <a href="/uk/shopify-plus">Shopify Plus in the UK</a>.
            </p>

            <h3 className="mt-10" style={{ maxWidth: 760 }}>Redesign agency, freelancer or theme edit</h3>
            <p className="mt-4" style={{ maxWidth: 760 }}>
              The best choice is the one where someone is named as responsible for the redirect map and you own the
              code. For prices, use the market ranges in the cost section below; the four rows here cover what a quote
              often leaves out.
            </p>
            <p className="md:hidden mt-6" style={{ fontFamily: T.fm, fontSize: 12, color: T.n400 }}>Swipe sideways to see every column.</p>
            <div className="card mt-6" style={{ padding: 0, overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <table className="cmp-table" style={{ minWidth: 640 }}>
                <thead>
                  <tr>
                    <th>Question</th>
                    <th>Redesign agency</th>
                    <th>Freelancer</th>
                    <th>Theme edit</th>
                  </tr>
                </thead>
                <tbody>
                  {WHO_ROWS.map((r) => (
                    <tr key={r.feat}>
                      <td className="feat">{r.feat}</td>
                      <td>{r.agency}</td>
                      <td>{r.freelancer}</td>
                      <td>{r.edit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ 5b. PROCESS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">Step by step</span>
              <h2>How our UK website redesign service works</h2>
              <p className="lead mt-4">
                Five steps, in this order, on every store. The draft comes before the contract, and the redirect map
                comes before any design.
              </p>
            </div>
            <ol className="stack mt-8" style={{ maxWidth: 900 }}>
              <li className="card">
                <h3 style={{ fontSize: 18 }}>1. Review the store and its numbers</h3>
                <p className="mt-2">We read GA4 conversion by device, run the top templates through PageSpeed Insights and list the pages that earn clicks in Search Console.</p>
              </li>
              <li className="card">
                <h3 style={{ fontSize: 18 }}>2. Build a draft on your own products</h3>
                <p className="mt-2">An unpublished theme in your own store, so you test a product page and the basket on your phone before you sign.</p>
              </li>
              <li className="card">
                <h3 style={{ fontSize: 18 }}>3. Agree the scope and a fixed price per phase</h3>
                <p className="mt-2">Each phase is scoped, priced and signed on its own, in writing. Changes after that are quoted and approved per request.</p>
              </li>
              <li className="card">
                <h3 style={{ fontSize: 18 }}>4. Map URLs, then build the templates</h3>
                <p className="mt-2">The redirect map is finished before design work starts. Templates are built only once the map is signed off.</p>
              </li>
              <li className="card">
                <h3 style={{ fontSize: 18 }}>5. Launch and watch for a fortnight</h3>
                <p className="mt-2">We switch the theme, test every redirect once and check Search Console for 404s and clicks each day for two weeks.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* ═══ 5c. PLATFORMS ═══ */}
        <section className="sec">
          <div className="wrap">
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">Platforms</span>
              <h2>Platforms we redesign: Shopify, WooCommerce, BigCommerce and Adobe Commerce</h2>
              <div className="stack mt-6">
                <p>
                  <b>Shopify and Shopify Plus.</b> A new theme is built unpublished beside the live one, then switched on.
                  See our <a href="/uk/shopify-development">UK Shopify development</a> page for builds beyond the theme.
                </p>
                <p>
                  <b>WooCommerce.</b> The theme is rebuilt on a staging copy of the WordPress site, then swapped on the
                  live shop. More on our <a href="/uk/woocommerce">UK WooCommerce</a> page.
                </p>
                <p>
                  <b>BigCommerce and Adobe Commerce (Magento).</b> Same order of work, with the redirect map built first.
                  See <a href="/uk/magento">Magento in the UK</a> and <a href="/uk/bigcommerce-b2b">BigCommerce B2B</a>.
                </p>
                <p>
                  <b>Headless.</b> The shop front is rebuilt in Next.js while the platform keeps products and orders. Our{' '}
                  <a href="/uk/headless-shopify-development">headless Shopify</a> page covers when that is worth it, and{' '}
                  <a href="/uk/ecommerce-seo">UK ecommerce SEO</a> covers rankings after launch.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 6. MID-PAGE CTA ═══ */}
        <MidPageCTA
          headline={'Want to see your own store redesigned first?'}
          sub={'Send the store address and what bothers you about it. We reply with a plan for a draft theme on your real products. Attach your brief or current analytics export at step 2.'}
          label={'See a draft of my store'}
        />

        {/* ═══ 7. HOUSE TERMS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">How we work</span>
                <h2>Terms for every store redesign</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  The same terms apply whether the redesign is a few templates or the whole shop. They are written into
                  the proposal before any work starts.
                </p>
                <ul className="scope-list num-list mt-6" style={{ maxWidth: 580 }}>
                  <li><b>A draft before you sign.</b> Working software on your own data: a draft theme in your own store, built on your real products and collections.</li>
                  <li><b>A fixed price per phase, quoted in writing.</b> You can stop after any phase.</li>
                  <li><b>You own it from day one.</b> The theme, the code and the repository are yours. Apps and hosting can run in your own accounts at cost, with no markup.</li>
                  <li><b>Defects fixed inside the build price.</b> For a cover period we agree before work starts.</li>
                  <li><b>Support is optional.</b> Each change is quoted and approved before we start, and there is no monthly minimum.</li>
                </ul>
                <div className="mt-8">
                  <ModalCTAButton label="See a draft of my store" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Typical timelines</span>
                <h2 style={{ fontSize: 22, marginTop: 8, marginBottom: 8 }}>How long an ecommerce website redesign takes in the UK</h2>
                <div className="scorecard-row"><div><div className="scorecard-metric">Custom theme redesign</div><div className="scorecard-note">Shopify or WooCommerce</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>3 to 5 weeks</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Subscriptions, trade pricing or a migration</div><div className="scorecard-note">more templates and data to test</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>5 to 8 weeks</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Headless or custom storefront</div><div className="scorecard-note">Next.js front, platform behind it</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>8 to 14 weeks</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Projects delivered on time</div><div className="scorecard-note">across 500+ businesses</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>97%</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 8. UK COST (market ranges only) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">What the UK market charges</span>
              <h2>Ecommerce website redesign cost in the UK</h2>
              <p className="lead mt-4">
                These are market ranges from two UK sources, not our prices. FactoryJet quotes a fixed price in writing
                after a short scoping call, for each phase on its own.
              </p>
            </div>
            <p className="md:hidden mt-8" style={{ fontFamily: T.fm, fontSize: 12, color: T.n400 }}>Swipe sideways to see every column.</p>
            <div className="card mt-8" style={{ padding: 0, overflowX: 'auto', WebkitOverflowScrolling: 'touch', maxWidth: 900 }}>
              <table className="cmp-table" style={{ minWidth: 560 }}>
                <thead>
                  <tr>
                    <th>Job</th>
                    <th>UK market range</th>
                    <th>Source</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Ecommerce website</td><td>£5,000 to £20,000 or more</td><td>Whito, updated October 2026</td></tr>
                  <tr><td className="feat">UK website redesign, all types</td><td>£10,000 to £80,000</td><td>SpotDev, May 2026</td></tr>
                  <tr><td className="feat">Most B2B redesigns</td><td>£15,000 to £60,000</td><td>SpotDev, May 2026</td></tr>
                  <tr><td className="feat">Copy, photography and SEO left out of a quote</td><td>adds 30 to 50%</td><td>Whito, updated October 2026</td></tr>
                </tbody>
              </table>
            </div>
            <div className="stack mt-6" style={{ maxWidth: 820 }}>
              <p>
                Read the two sources for what they are. Whito surveys UK freelancers and agencies, so it shows the
                lower and middle of the market. SpotDev builds on HubSpot and quotes ex VAT, so its figures describe the
                B2B top end.
              </p>
              <p>
                What moves the price on a store: the number of templates that change, how many products need new
                photography or rewritten copy, apps to remove or replace, any trade pricing or subscriptions, and how
                many URLs need a redirect. The full UK picture, with hourly rates and hidden costs line by line, is in
                our <a href="/blog/website-redesign-cost-uk-2026-complete-pricing-guide">UK website redesign cost guide</a>.
              </p>
            </div>
            <p style={srcNote}>
              Sources, read on 29 October 2026:{' '}
              <a href={SRC_WHITO} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>Whito, website design costs UK 2026</a>;{' '}
              <a href={SRC_SPOTDEV} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>SpotDev, website redesign cost UK</a>.
              Market ranges, not FactoryJet prices.
            </p>
          </div>
        </section>

        {/* ═══ 9. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2>Ecommerce redesign questions UK store owners ask</h2>
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
                  <ModalCTAButton label="Still have a question? Ask the founder →" region="uk" modalVariant="default" btnVariant="secondary-light" />
                  <p>Replies within 24 hours.</p>
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

        {/* ═══ 10. RELATED UK PAGES ═══ */}
        <section className="sec">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Related</span>
              <h2>Where to go next</h2>
            </div>
            <div className="flex-wrap mt-6">
              <a className="city-pill" href="/uk/shopify-migration">Shopify migration UK</a>
              <a className="city-pill" href="/uk/ecommerce-consultant">Ecommerce consultant UK</a>
              <a className="city-pill" href="/uk/shopify-plus">Shopify Plus UK</a>
              <a className="city-pill" href="/uk/ecommerce-audit">Free ecommerce audit UK</a>
              <a className="city-pill" href="/blog/website-redesign-cost-uk-2026-complete-pricing-guide">UK website redesign cost guide</a>
              <a className="city-pill" href="/uk">FactoryJet UK</a>
            </div>
          </div>
        </section>

        {/* ═══ 11. FINAL CTA (the only dark section) ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Ready when you are</span>
            <h2>See your store redesigned on your own products</h2>
            <p className="mt-4">
              Send your name, work email and store address. The founder replies within 24 hours with what we would
              change first and how the draft theme would work. No spam, no obligation.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="See a draft of my store" region="uk" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/uk/shopify-migration" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>Moving platform instead?</a>
            </div>
          </div>
        </section>

      </main>
        <Footer />
      </div>
    </>
  );
}
