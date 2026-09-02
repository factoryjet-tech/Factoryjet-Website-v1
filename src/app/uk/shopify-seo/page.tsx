import type { Metadata } from 'next';
import Script from 'next/script';
import Footer from '../sections/Footer';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import AuthorCard from '@/components/v2/AuthorCard';
import EnterpriseArchitectureBlueprint from '@/components/v2/EnterpriseArchitectureBlueprint';
import CommerceRoiCalculator from '@/components/v2/CommerceRoiCalculator';
import RegionalBenchmarkCard from '@/components/v2/RegionalBenchmarkCard';
import CityLinksUK from '@/components/v2/CityLinksUK';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import MidPageCTA from '@/components/v2/MidPageCTA';
import './shopify-seo.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/uk/shopify-seo';
const UPDATED = '2026-08-25';

/* ─── Breadcrumb source of truth. ONE array feeds both the visible trail and the JSON-LD,
       so the two can never drift apart. Never hand-copy a second version of this. ─── */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'Shopify SEO', url: CANONICAL },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: c.url,
  })),
};

/* ─── FAQ source of truth.
       The visible accordion further down is GENERATED from this array, and the FAQPage
       JSON-LD is generated from the same array. Do not add a second hand-written copy of
       these questions anywhere on the page: schema that disagrees with what a reader can
       see is a cloaking problem, and it is the single easiest bug to introduce here.
       (This page previously carried a hand-duplicated HTML copy. It has been removed.) ─── */
type FaqCategory = 'shopify' | 'technical' | 'process' | 'engagement' | 'terms';

const FAQ_CATEGORIES: { id: FaqCategory; label: string; short: string }[] = [
  { id: 'shopify', label: 'Shopify platform', short: 'Platform' },
  { id: 'technical', label: 'Technical deep dive', short: 'Technical' },
  { id: 'process', label: 'Process and timeline', short: 'Process' },
  { id: 'engagement', label: 'Working together', short: 'Engagement' },
  { id: 'terms', label: 'Key SEO terms', short: 'Key terms' },
];

const FAQ_ITEMS: { question: string; answer: string; cat: FaqCategory }[] = [
  // ── Shopify platform ──
  { cat: 'shopify',
    question: 'Why is Shopify SEO different from SEO on other platforms?',
    answer: 'Shopify decides several things for you that other platforms leave open, and each decision has an SEO consequence. Shopify gives every product two live addresses, one under /products/ and one under each collection it sits in. Shopify builds your sitemap automatically, so you cannot simply delete an entry you do not want indexed. Shopify turns filters into new URLs. And your theme, written in a language called Liquid, decides where your category text actually appears in the page code. Fixing any of these means editing Liquid, not just rewriting page titles.' },
  { cat: 'shopify',
    question: 'What is the Shopify duplicate product URL problem?',
    answer: 'Shopify publishes every product at /products/your-product, and again at /collections/your-collection/products/your-product for each collection the product belongs to. A product in five collections is therefore reachable at six addresses showing identical content. Google treats near-identical pages as a set and picks one itself unless you tell it which to prefer, and it warns that crawling duplicate versions uses time it could spend on new or updated pages instead. The fix is a correct canonical tag in your Liquid theme pointing every collection-scoped copy back to the single /products/ address.' },
  { cat: 'shopify',
    question: 'Does Shopify handle canonical tags correctly on its own?',
    answer: 'Mostly, but not always. Shopify exposes a Liquid object called canonical_url that returns the canonical address for the current page, and well-built themes print it in the head of every template. Problems appear when a theme was heavily customised, when a page-builder app injects its own head markup, or when a developer removed the tag while fixing something unrelated. We check the rendered head of a product page, a collection page, a filtered collection page and a paginated page, because those four behave differently and a theme can get one right and the others wrong.' },
  { cat: 'shopify',
    question: 'Do Shopify variant URLs create duplicate pages?',
    answer: 'They can. Selecting a variant adds a query string such as ?variant=123456 to the product address. Every variant therefore has its own crawlable URL showing essentially the same product page with a different price or swatch selected. On a store where products carry many sizes and colours this multiplies quickly. We make sure variant URLs carry a canonical tag pointing at the clean product address, keep them out of the sitemap, and check Search Console to see how many have already been crawled before deciding whether anything more aggressive is needed.' },
  { cat: 'shopify',
    question: 'Does Shopify native SEO cover what I need, or do I need help?',
    answer: 'Shopify covers the basics well. You get editable page titles and meta descriptions, an automatic sitemap, a redirect manager, and alt text fields on product images. Shopify does not decide your canonical strategy for filtered and variant URLs, does not stop filter pages eating crawl capacity, does not write category text, does not add structured data beyond basic product markup, and does not make your theme fast. Those all sit in the theme code or in your content plan. Shopify native SEO is necessary and genuinely useful. It is not sufficient on a store with a large catalogue.' },
  { cat: 'shopify',
    question: 'Is Shopify Plus SEO different from standard Shopify SEO?',
    answer: 'The principles are identical but Plus removes some ceilings. Plus gives you deeper control of the checkout, more room in URL and redirect handling, and Shopify Markets for running several countries from one store. For UK Plus brands the work usually shifts towards scale problems: crawl capacity on catalogues in the tens of thousands of products, a separate business-to-business storefront that needs its own indexing rules, and hreflang if you sell outside the UK. Plus engagements are larger because the stores are larger, not because the method changes.' },

  // ── Technical deep dive ──
  { cat: 'technical',
    question: 'What is faceted navigation and why does it matter on Shopify?',
    answer: 'Faceted navigation is the filter panel on a category page: colour, size, price, brand. On Shopify each filter click produces a new address such as /collections/trainers?filter.p.m.colour=red. Google warns that filter systems built on URL parameters can generate effectively unlimited numbers of addresses, which spends crawl capacity on thin combinations instead of your real pages. We audit which filter URLs Google has already fetched, point them back at the parent collection with a canonical, and build a proper page only where a filter combination has genuine UK search demand behind it.' },
  { cat: 'technical',
    question: 'How do you optimise Shopify collection pages?',
    answer: 'Collection pages carry the commercial searches, so they get the most attention. We edit the collection Liquid template so that a content block renders in the page code above the product grid rather than being pushed underneath it. That block holds one H1 carrying the category phrase, a short piece of writing specific to that category, and a small set of questions real buyers ask. We add breadcrumb structured data, check that pagination is crawlable, and confirm the collection appears in the sitemap. Each collection gets its own brief so no two read the same.' },
  { cat: 'technical',
    question: 'Why does my collection description sit below the product grid?',
    answer: 'Because most themes put it there. A common Liquid pattern prints the product grid first and the collection description afterwards, sometimes inside a collapsed panel or a tab. A reader may never scroll to it and a crawler sees it as the least prominent text on the page. Moving it is a template edit, not a settings change: you relocate the description output so it renders before the grid in the page code, then confirm by viewing the raw source rather than the rendered page, because a tab can hide text that is technically present.' },
  { cat: 'technical',
    question: 'How do Shopify apps affect page speed and Core Web Vitals?',
    answer: 'Most Shopify apps add JavaScript to every page whether that page uses the app or not. Review widgets, pop-ups, currency switchers, upsell tools and analytics tags each add requests and processing time. The result is a store where the theme is fine and the page still feels slow. We list every script the store loads, match each one to an installed app, and separate the ones that earn their weight from the ones nobody remembers installing. Removing a dead app is usually the single fastest speed improvement available on a Shopify store.' },
  { cat: 'technical',
    question: 'What Core Web Vitals targets should a Shopify store aim for?',
    answer: 'Google publishes three thresholds. Largest Contentful Paint should happen within the first 2.5 seconds of the page starting to load. Interaction to Next Paint should stay under 200 milliseconds. Cumulative Layout Shift should stay under 0.1. Google says achieving good Core Web Vitals aligns with what its core ranking systems seek to reward, which is a real signal but not a switch that lifts you up the results on its own. On Shopify the usual culprits are an unprioritised hero image, web fonts loading late, and app scripts.' },
  { cat: 'technical',
    question: 'How do you fix Largest Contentful Paint on a Shopify theme?',
    answer: 'The largest element on a Shopify collection or product page is almost always the hero or first product image, so we make the browser fetch it first. That means marking it as high priority in the Liquid template, letting it load normally rather than lazily, and serving it at a sensible size instead of a full-resolution original scaled down in the browser. We also set width and height on the image so the browser reserves the space before the file arrives, which stops the page jumping and helps Cumulative Layout Shift at the same time.' },
  { cat: 'technical',
    question: 'What structured data do you add to a Shopify store?',
    answer: 'Four types as standard, all written into the theme rather than added by an app. Product markup with price and availability on product pages. Breadcrumb markup on collection and product pages so the site hierarchy shows correctly. Question and answer markup where a collection page carries a real, visible set of questions. Organisation markup on the homepage. Two rules we do not bend: the markup must describe something a visitor can actually see on the page, and we do not add review markup unless real reviews are displayed. Invented ratings are a manual action waiting to happen.' },
  { cat: 'technical',
    question: 'How do you handle pagination on Shopify collection pages?',
    answer: 'Large collections split across numbered pages, and each page gets its own address ending ?page=2 and so on. The old rel next and prev instructions are no longer used by Google, so the job now is simply making sure the paginated pages are reachable through real links, that each one canonicalises to itself rather than back to page one, and that the products on later pages are not orphaned. Pointing every paginated page at page one is a common mistake: it hides most of your catalogue from being crawled at all.' },
  { cat: 'technical',
    question: 'Can you control what goes into the Shopify sitemap?',
    answer: 'Only indirectly, which surprises people. Shopify generates sitemap.xml automatically from your published products, collections, pages and blog posts, and you cannot hand-edit it. The way to keep something out is to change its status rather than the file: unpublish it, remove it from the sales channel, or apply a no-index instruction in the theme head for the templates concerned. Filter and variant URLs are not listed in the sitemap anyway, so those are handled with canonical tags and internal linking rather than sitemap edits.' },

  // ── Process and timeline ──
  { cat: 'process',
    question: 'What happens in the first month?',
    answer: 'Month one is the audit and the quick wins. We crawl the store, pull your Search Console data covering impressions, clicks, coverage and Core Web Vitals, and read your sitemap. From that we produce a list of what is actually wrong, ordered by what will move first: duplicate and filter URLs and how many there are, collection pages with no text above the grid, missing or wrong canonical tags, structured data gaps, and searches where you already appear but nobody clicks. Then we start implementing rather than handing over a document.' },
  { cat: 'process',
    question: 'How long does Shopify SEO take to show results?',
    answer: 'Technical fixes tend to show first, usually six to eight weeks after they go live, because Google has to recrawl and reprocess the pages you changed before anything can move. Adding real text to collection pages usually takes two to three months to settle. Competitive category searches take longer and depend heavily on where you start and who you are up against. Anyone who gives you a firmer date than that is guessing. What we can promise is that you will see what changed each month and why.' },
  { cat: 'process',
    question: 'How do you report progress?',
    answer: 'Monthly, on organic revenue first and positions second, because a good position that sells nothing is not a result. Each report covers organic sessions and organic revenue from Search Console and your analytics, movement on the category and product searches we are working on, Core Web Vitals on your main templates, what we fixed during the month, and what is planned next with the reasoning. There is a call to walk through it. If something odd shows up in Search Console between reports, such as a coverage drop, we tell you then rather than waiting.' },
  { cat: 'process',
    question: 'How do you handle a migration onto Shopify without losing traffic?',
    answer: 'By treating redirects as part of the build rather than something to sort out afterwards. Before anything moves we take a full inventory of every address currently indexed and every address currently earning clicks. We map each one to its new Shopify address, implement those redirects as permanent single-hop redirects, and test them before launch rather than after. Then we watch Search Console coverage daily for the first fortnight, because that is when a missed pattern shows up and is still cheap to fix.' },

  // ── Working together ──
  { cat: 'engagement',
    question: 'How do FactoryJet Shopify SEO engagements work?',
    answer: 'Three shapes, depending on what you need. A one-off technical audit if you have a developer and want to know what to tell them. A fixed-price block of milestones if you have a defined list of problems and want them fixed and finished. Or a monthly retainer if you want continuing work across technical fixes, collection content and reporting. Every engagement starts with the audit, because scoping work on a Shopify store without reading its theme and its Search Console data is guesswork. Everything is month to month with no annual lock-in.' },
  { cat: 'engagement',
    question: 'Do you edit our Shopify theme yourselves?',
    answer: 'Yes, and this is the main practical difference between us and a general SEO agency. Most of the fixes on this page are Liquid template edits: moving a description above a grid, correcting a canonical tag, adding structured data, changing how an image loads. An agency without Shopify developers can only write those down and hope your developer implements them correctly. We work on a duplicate of your theme, show you the change on a preview link, and publish only once you have looked at it.' },
  { cat: 'engagement',
    question: 'What do you need from us to start?',
    answer: 'Three things. Staff access to the Shopify admin with theme permissions, so we can read the Liquid templates and work on a duplicate theme rather than the live one. Access to your Google Search Console property, because that is where the real crawl and coverage evidence lives. And a short conversation about which categories actually make you money, since the highest-traffic collection and the most profitable collection are frequently not the same page and we would rather work on the second one.' },

  // ── Key SEO terms ──
  { cat: 'terms',
    question: 'What is a canonical tag, in plain English?',
    answer: 'A canonical tag is a line in the hidden part of a web page that says which address is the real one for this content. When the same product is reachable at six addresses, the canonical tag on all six points at the one you want in search results. Google describes it as a way to consolidate signals, meaning links and other evidence pointing at any of the copies get credited to the single preferred address instead of being split six ways. It is a strong hint rather than an instruction, so it needs to be consistent to be believed.' },
  { cat: 'terms',
    question: 'What is crawl budget and does my store have a problem with it?',
    answer: 'Crawl budget is the amount of fetching Google will do on your site in a given period. Small stores rarely have a problem. It starts to matter when the number of crawlable addresses is far larger than the number of real pages, which is exactly what filters, variants and collection-scoped product copies produce. The symptom to look for in Search Console is a large count of pages found and not indexed, or crawled and not indexed, alongside new products taking a long time to appear. That pattern is worth investigating; a low count is not.' },
  { cat: 'terms',
    question: 'What is the difference between Shopify SEO and ecommerce SEO?',
    answer: 'Ecommerce SEO is the strategy: which categories to target, how to structure the site, what content earns links, how organic search fits alongside your paid channels. It applies whatever platform you are on. Shopify SEO is the platform layer underneath it: the specific technical behaviour of Shopify around duplicate addresses, filters, Liquid templates, apps and sitemaps. You need both. This page covers the Shopify layer in detail. Our ecommerce SEO page covers the strategy layer for stores on any platform, including Shopify.' },
];

/* Retargeted 2026-08-25. The old title chased "shopify seo uk", which has no measurable
   search volume. "Shopify agency UK" does, and unlike "ecommerce seo uk" it does not put this
   page in competition with /uk/ecommerce-seo. The page's job is the Shopify platform layer:
   collection architecture, filters, variant URLs, Liquid templates, app weight. */
const TITLE = 'Shopify Agency UK | Technical Shopify SEO | FactoryJet';
const DESCRIPTION =
  'The SEO problems Shopify creates by default: duplicate variant URLs, filter pages eating crawl budget, buried collection text, Liquid fixes and app weight.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL, languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/shopify-seo-og.webp', width: 1200, height: 630, alt: 'Shopify SEO Services UK: FactoryJet' }],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://factoryjet.com/#organization',
      name: 'FactoryJet',
      url: 'https://factoryjet.com',
      logo: 'https://factoryjet.com/logo.png',
      sameAs: [
        'https://www.linkedin.com/company/factoryjet',
        'https://www.crunchbase.com/organization/factoryjet',
      ],
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Shopify SEO Services UK',
      author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Chief Technical Architect',
    url: 'https://factoryjet.com/about',
    sameAs: [
      'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
      'https://github.com/factoryjet-tech',
    ],
  },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      serviceType: 'Shopify technical SEO',
    },
    // Same array as the visible trail. '@context' is dropped here because the graph already
    // declares it once at the top level.
    { '@type': 'BreadcrumbList', '@id': `${CANONICAL}#breadcrumb`, itemListElement: breadcrumbSchema.itemListElement },
    // WebPage node carrying dateModified. UPDATED was previously declared and never
    // reached the render at all, so the page shipped no freshness signal despite having
    // a constant for one. It is now used here AND printed visibly at the end of the page.
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: 'en-GB',
      datePublished: '2026-08-01',
      dateModified: UPDATED,
      isPartOf: { '@id': 'https://factoryjet.com/#organization' },
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

export default function ShopifySeoPage() {
  return (
    <>
      <link rel="preconnect" href="https://im.runware.ai" crossOrigin="" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="uk-sseo">
        <main>

{/* Visible breadcrumb. Built from the same `crumbs` array as the BreadcrumbList JSON-LD
    above, so the trail Google is told about is the trail a reader can actually see. */}
<Breadcrumbs items={crumbs} />



{/* ════════════════════════════════════════════════
  1. HERO; Bento layout (distinct from both other pages)
     Wide headline top, then 2+2 bento grid below
════════════════════════════════════════════════ */}
<section className="sec-lg dot-grid" style={{ position: 'relative' }}>
  <div className="shimmer" style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }}></div>
  <div className="wrap">
    {/* Top: headline row; full width */}
    <div style={{ maxWidth: '800px', marginBottom: '48px' }}>
      <div className="flex-wrap mb-3">
        <span className="chip"><span className="dot dot-orange"></span>Shopify Agency UK</span>
        <span className="chip">We Edit the Liquid Ourselves</span>
        <span className="chip">Month to Month</span>
      </div>
      <h1>Shopify Agency UK: Fixing the SEO Problems Shopify Creates by Default</h1>
      <p className="lead mt-4" style={{ maxWidth: '680px' }}>Shopify makes a handful of decisions for you, and each one has a search consequence. Every product gets a second address under each collection it belongs to. Every filter click makes a new URL. Every theme decides where your category text sits in the page code. This page is the working reference for all of it, written by the people who edit the theme rather than write a document about it.</p>
    </div>

    {/* Bento grid; 3 rows of cards, distinct from other pages' 60/40 layout */}
    <div className="bento-grid" style={{ gridTemplateRows: 'auto auto' }}>

      {/* Row 1: image card (4 wide) + scorecard (2 wide) */}
      <div className="bento-span4" style={{ position: 'relative', minHeight: '320px', borderRadius: '16px', overflow: 'hidden' }}>
        <img width="1200" height="800" fetchPriority="high" loading="eager" src="https://im.runware.ai/image/os/a10dlim3/ws/3/ii/068f50f7-9c40-4fa7-8564-9797de4d375e.webp"
          alt="Shopify SEO audit showing organic search improvements for a UK Shopify store; FactoryJet"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block', minHeight: '320px' }} />
<div style={{ display: 'none', width: '100%', height: '100%', minHeight: '320px', borderRadius: 'inherit', overflow: 'hidden' }}><img src="https://im.runware.ai/image/os/a07dlim3/ws/3/ii/3bf8c844-931e-4ecb-809d-42f6ab6e318a.webp" width="1344" height="600" alt="FactoryJet Shopify SEO UK" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} /></div>
        <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(to top,rgba(15,15,18,.8) 0%,transparent 50%)' }}></div>
        <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <span style={{ background: 'rgba(255,255,255,.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,.2)', borderRadius: '999px', padding: '6px 14px', fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.10em', textTransform: 'uppercase', color: '#fff' }}>Shopify Technical SEO</span>
            <span style={{ background: '#FAFAF7', borderRadius: '999px', padding: '6px 14px', fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.10em', textTransform: 'uppercase', color: '#0F0F12', fontWeight: 600 }}>UK Shopify Stores</span>
          </div>
        </div>
      </div>

      {/* Scorecard: 2 cols wide */}
      <div className="bento-span2 card" style={{ padding: '0', overflow: 'hidden', alignSelf: 'stretch', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--n100)' }}>
          <span className="eyebrow" style={{ marginBottom: '0' }}>SHOPIFY SEO IMPACT</span>
        </div>
        <div style={{ flex: '1', padding: '4px 20px' }}>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Crawl Budget Recovered</div>
              <div className="scorecard-note">after deduplication fix, avg.</div>
            </div>
            <div className="scorecard-val">74%</div>
          </div>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Category Page Rankings</div>
              <div className="scorecard-note">avg. lift on commercial terms</div>
            </div>
            <div className="scorecard-val">+22 pos</div>
          </div>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Organic Revenue Growth</div>
              <div className="scorecard-note">month 3 vs month 1, avg.</div>
            </div>
            <div className="scorecard-val">+38%</div>
          </div>
          {/* Replaced 2026-08-25. The old row read "100/100, all clients pass after audit",
              which is wrong twice over: Core Web Vitals is a pass or fail on three field
              metrics rather than a score out of 100 (that is Lighthouse, a different tool),
              and "all clients" is an absolute nobody can stand behind. These three numbers
              are Google's published thresholds and are cited further down the page. */}
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Core Web Vitals</div>
              <div className="scorecard-note">Google&#8217;s published thresholds, what we build to</div>
            </div>
            <div className="scorecard-val" style={{ fontSize: '15px', lineHeight: 1.35, textAlign: 'right' }}>
              2.5s LCP<br />200ms INP<br />0.1 CLS
            </div>
          </div>
        </div>
        <div style={{ padding: '12px 20px', background: 'var(--n100)', borderTop: '1px solid var(--n200)' }}>
          <ModalCTAButton label="Get Free Shopify SEO Audit" region="uk" modalVariant="default" btnVariant="primary-light" />
        </div>
      </div>

      {/* Row 2: 3 bento mini-cards */}
      <div className="bento-span2 card" style={{ textAlign: 'center', padding: '24px 20px' }}>
        <div className="stat-num" style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>500+</div>
        <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--ink)', marginTop: '8px' }}>Shopify stores built by FactoryJet</p>
        <p style={{ fontSize: '12px', color: 'var(--n400)', marginTop: '4px' }}>That's where our Shopify SEO insight comes from</p>
      </div>
      <div className="bento-span2 card" style={{ textAlign: 'center', padding: '24px 20px' }}>
        <div className="stat-num" style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>10+ yrs</div>
        <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--ink)', marginTop: '8px' }}>of dedicated Shopify SEO expertise</p>
        <p style={{ fontSize: '12px', color: 'var(--n400)', marginTop: '4px' }}>Shopify-specialist team; Online Store 2.0 through Hydrogen</p>
      </div>
      <div className="bento-span2 card" style={{ textAlign: 'center', padding: '24px 20px' }}>
        <div className="stat-num" style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>M-T-M</div>
        <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--ink)', marginTop: '8px' }}>Month-to-month Shopify SEO</p>
        <p style={{ fontSize: '12px', color: 'var(--n400)', marginTop: '4px' }}>No annual lock-in. Results keep us.</p>
      </div>

      {/* Row 3: trust strip */}
      <div className="bento-span6" style={{ background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px 24px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center', justifyContent: 'space-between' }}>
          <span className="trust-pill"><span className="dot dot-orange"></span>Search Console reporting, not rank trackers</span>
          <span className="trust-pill"><span className="dot dot-orange"></span>In-house Shopify developers who edit the Liquid themselves</span>
          <span className="trust-pill"><span className="dot dot-orange"></span>Technical audit in month one, always included</span>
          <span className="trust-pill"><span className="dot dot-orange"></span>No annual lock-in</span>
        </div>
      </div>
    </div>
  </div>
</section>


{/* ════════════════════════════════════════════════
  1b. ANSWER-FIRST BLOCK
     Direct, extractable definition immediately after the hero, plus the division of
     labour with /uk/ecommerce-seo so the two pages never compete for the same query.
════════════════════════════════════════════════ */}
<section className="sec" style={{ background: 'var(--white)' }} id="what-is-shopify-seo">
  <div className="wrap">
    <div className="col-6040">
      <div>
        <span className="eyebrow">THE SHORT ANSWER</span>
        <h2 style={{ marginTop: '12px', marginBottom: '20px' }}>What Shopify SEO actually means</h2>
        <p className="lead">Shopify SEO is the work of making a Shopify store readable and rankable in Google, given the specific way Shopify builds URLs and renders pages. It is a platform layer, not a separate discipline. The strategy is the same as any other shop. What changes is the plumbing underneath it.</p>
        <p style={{ marginTop: '16px' }}>Four Shopify behaviours account for most of the technical work on a UK store. Every product is published under each collection it belongs to as well as under its own address, so the same page exists many times over. Every filter selection creates a new URL, and Google warns that filter systems built on URL parameters can produce effectively unlimited numbers of addresses. Every product variant adds another crawlable address through a query string. And your theme, written in Shopify&#8217;s Liquid language, decides whether your category text sits above the product grid in the page code or underneath it where almost nobody reads it.</p>
        <p style={{ marginTop: '16px' }}>None of that is a fault in your store. It is how the platform is built, and it is all fixable in the theme. What it means practically is that a recommendation document is only half a job on Shopify: somebody still has to open the Liquid templates and make the change.</p>

        <div className="stack" style={{ marginTop: '24px' }}>
          <div className="pull-quote">Shopify exposes the canonical address of the current page to your theme through a Liquid object called <code>canonical_url</code>. A well-built theme prints it in the head of every template. A heavily customised one often does not, and that single missing line is the most common serious SEO fault we find on UK Shopify stores.</div>
        </div>

        {/* Division of labour with /uk/ecommerce-seo, stated plainly so neither page competes. */}
        <div style={{ marginTop: '28px', background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '16px', padding: '24px' }}>
          <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink)', marginBottom: '12px' }}>Which page do you actually need?</p>
          <ul className="tick-list">
            <li><strong>This page, if your store is on Shopify and the problem is technical.</strong> Collection architecture, duplicate and variant URLs, filter pages, Liquid template edits, app weight and Core Web Vitals, structured data written into the theme.</li>
            <li><strong>Our <a href="/uk/ecommerce-seo">ecommerce SEO page</a>, if the question is strategy.</strong> Which categories to target, how to structure the site, what content earns links, how organic sits next to your paid channels. That page applies to any platform, Shopify included.</li>
            <li><strong>Our <a href="/uk/shopify-development">Shopify development page</a>, if the store itself needs building or rebuilding</strong> rather than tuning.</li>
          </ul>
          <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '14px' }}>Most engagements use two of the three. The strategy page decides what to aim at. This page is how it gets built on Shopify.</p>
        </div>
      </div>

      {/* Right rail: verified market context + sources */}
      <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
        <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--n100)' }}>
          <span className="eyebrow" style={{ marginBottom: '0' }}>UK CONTEXT, WITH SOURCES</span>
        </div>
        <div style={{ padding: '20px 24px' }}>
          <div className="stat-num" style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>27.4%</div>
          <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginTop: '8px' }}>of total UK retail sales happened online in July 2026</p>
          <p style={{ fontSize: '12px', color: 'var(--n400)', marginTop: '6px' }}>Office for National Statistics, Retail Sales Index, series J4MC, released 21 August 2026. Online has held broadly between 26% and 28% of UK retail through 2024 and 2025, so this is a settled share of the market rather than a spike.</p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--n100)', margin: '20px 0' }} />

          <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink)', marginBottom: '10px' }}>Primary sources used on this page</p>
          <ul className="src-list">
            <li><a href="https://www.ons.gov.uk/businessindustryandtrade/retailindustry/timeseries/j4mc/drsi" rel="nofollow noopener" target="_blank">ONS: internet sales as a percentage of total retail sales</a><span>Where the 27.4% figure above comes from.</span></li>
            <li><a href="https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls" rel="nofollow noopener" target="_blank">Google Search Central: specifying a canonical URL</a><span>Google&#8217;s own guidance on duplicate pages, consolidating signals, and not spending crawl time on duplicates.</span></li>
            <li><a href="https://developers.google.com/crawling/docs/faceted-navigation" rel="nofollow noopener" target="_blank">Google: managing crawling of faceted navigation URLs</a><span>Confirms that parameter-based filters can generate effectively unlimited URL spaces.</span></li>
            <li><a href="https://developers.google.com/search/docs/appearance/core-web-vitals" rel="nofollow noopener" target="_blank">Google Search Central: Core Web Vitals</a><span>Source of the 2.5s, 200ms and 0.1 thresholds quoted on this page.</span></li>
            <li><a href="https://shopify.dev/docs/api/liquid/objects/canonical_url" rel="nofollow noopener" target="_blank">Shopify: the canonical_url Liquid object</a><span>The theme-level object referenced above.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  2. SHOPIFY SEO; WHAT'S UNIQUE; 60/40 with technical checklist
     (Different from Page 1's partner scorecard, Page 2's revenue timeline)
════════════════════════════════════════════════ */}
<section className="sec-lg" style={{ background: 'var(--white)' }}>
  <div className="wrap">
    <div style={{ maxWidth: 860, margin: '0 auto 36px', textAlign: 'center' }}>
      <span className="chip" style={{ marginBottom: 12 }}>The Direct Comparison</span>
      <h2>Where most Shopify SEO engagements stall</h2>
      <p className="lead mt-4">
        The usual pattern is a monthly retainer that produces blog posts while the actual problems sit untouched in the theme, because nobody on the account can open it. Our work goes the other way round: fix the canonical tags, move the collection text above the grid, strip the app scripts nobody needs, and only then talk about content. Any code we write for you is yours to keep.
      </p>
    </div>
    <div className="col-6040">
      <div>
        <span className="eyebrow">WHY SHOPIFY SEO IS DIFFERENT</span>
        <h2 style={{ marginBottom: '20px' }}>Shopify creates unique SEO problems that generic agencies don't know how to fix</h2>
        <div className="stack">
          <p className="lead">Standard SEO tools can crawl your Shopify store and list 400 issues. Most of them will be caused by Shopify's platform architecture, not by anything you did wrong. The question is whether your SEO agency understands which are platform-native problems, which require theme code changes, and which require Shopify app configuration.</p>
          <div className="pull-quote">Shopify's default URL structure creates duplicate product pages for every collection a product belongs to. This is not a bug. It is a platform design choice. Handling it correctly requires knowing Shopify's canonical tag behaviour in Liquid.</div>
          <p>FactoryJet's Shopify SEO work is different because we have an in-house Shopify development team. When our SEO audit identifies a Liquid rendering issue hiding your collection page description from GoogleBot, we fix it ourselves, in the same week, in the same engagement.</p>
          {/* Visual differentiator cards; breaks up text */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginTop: '4px' }}>
            <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontSize: '20px', marginBottom: '8px' }}>🔧</div>
              <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)', marginBottom: '4px' }}>In-house Liquid dev</p>
              <p style={{ fontSize: '12px', color: 'var(--n400)' }}>We edit your Shopify theme ourselves, so you do not need a second developer</p>
            </div>
            <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontSize: '20px', marginBottom: '8px' }}>📋</div>
              <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)', marginBottom: '4px' }}>500+ stores built</p>
              <p style={{ fontSize: '12px', color: 'var(--n400)' }}>Shopify specialists through Online Store 2.0 and Hydrogen</p>
            </div>
            <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontSize: '20px', marginBottom: '8px' }}>📊</div>
              <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)', marginBottom: '4px' }}>GSC revenue data</p>
              <p style={{ fontSize: '12px', color: 'var(--n400)' }}>Reports lead with organic revenue, not rank tracker positions</p>
            </div>
          </div>
        </div>
        <div className="flex-wrap mt-4">
          <span className="chip">Shopify Canonical Tags</span>
          <span className="chip">Liquid Theme SEO</span>
          <span className="chip">Shopify Sitemaps</span>
          <span className="chip">Collection Page SEO</span>
          <span className="chip">Shopify Plus SEO</span>
          <span className="chip">Shopify Schema</span>
        </div>
      </div>

      {/* Right: Technical Shopify checklist; unique to this page */}
      <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
        <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--n100)' }}>
          <span className="eyebrow" style={{ marginBottom: '0' }}>SHOPIFY SEO AUDIT CHECKLIST</span>
          <p style={{ fontSize: '12px', color: 'var(--n400)', marginTop: '4px' }}>Common issues we fix. How does your store score?</p>
        </div>
        <div style={{ padding: '0 24px' }}>
          <div className="check-item">
            <div className="check-icon issue">✗</div>
            <div>
              <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--ink)' }}>Duplicate product URLs from multiple collections</p>
              <p style={{ fontSize: '12px', color: 'var(--n400)', marginTop: '2px' }}>Shopify publishes both /products/slug and /collections/name/products/slug, and crawls both by default</p>
            </div>
          </div>
          <div className="check-item">
            <div className="check-icon issue">✗</div>
            <div>
              <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--ink)' }}>Faceted navigation pages in Shopify sitemap</p>
              <p style={{ fontSize: '12px', color: 'var(--n400)', marginTop: '2px' }}>Filter pages (?filter.p.product_type=) waste crawl budget and create thin content</p>
            </div>
          </div>
          <div className="check-item">
            <div className="check-icon issue">✗</div>
            <div>
              <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--ink)' }}>Collection description hidden below product grid</p>
              <p style={{ fontSize: '12px', color: 'var(--n400)', marginTop: '2px' }}>Many Shopify themes render collection description below 300 product thumbnail images</p>
            </div>
          </div>
          <div className="check-item">
            <div className="check-icon issue">✗</div>
            <div>
              <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--ink)' }}>Missing or incorrect Product schema</p>
              <p style={{ fontSize: '12px', color: 'var(--n400)', marginTop: '2px' }}>Many Shopify themes output incomplete JSON-LD, disqualifying from Google Shopping rich results</p>
            </div>
          </div>
          <div className="check-item">
            <div className="check-icon issue">✗</div>
            <div>
              <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--ink)' }}>Pagination not handled (page 2+ indexed)</p>
              <p style={{ fontSize: '12px', color: 'var(--n400)', marginTop: '2px' }}>Collection page 2+ URLs often indexed without canonical pointing to page 1</p>
            </div>
          </div>
          <div className="check-item">
            <div className="check-icon issue">✗</div>
            <div>
              <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--ink)' }}>JavaScript-rendered content invisible to GoogleBot</p>
              <p style={{ fontSize: '12px', color: 'var(--n400)', marginTop: '2px' }}>App-injected content (review widgets, product customisers) often not crawlable</p>
            </div>
          </div>
          <div className="check-item">
            <div className="check-icon fixed">✓</div>
            <div>
              <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--ink)' }}>After FactoryJet Shopify SEO audit: all of the above fixed</p>
              <p style={{ fontSize: '12px', color: 'var(--green)', marginTop: '2px' }}>With in-house Shopify dev team handling the Liquid fixes directly</p>
            </div>
          </div>
        </div>
        <div style={{ padding: '16px 24px', background: 'var(--orange-bg)', borderTop: '1px solid var(--orange-bd)' }}>
          <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--orange)' }}>How many of these does your Shopify store have? We'll tell you in the free audit.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  3. PROBLEM/FIX GRID; Dark section
     Unique paired problem/fix layout; not used in other two pages
════════════════════════════════════════════════ */}
<section className="light-sec">
  <div className="wrap">
    <div style={{ maxWidth: '700px', margin: '0 auto 56px', textAlign: 'center' }}>
      <span className="eyebrow">THE THREE PROBLEMS THAT HOLD UK SHOPIFY STORES BACK</span>
      <h2 style={{ marginTop: '12px' }}>And exactly how we fix each one</h2>
      <p className="lead" style={{ marginTop: '16px' }}>Any SEO tool can list these three in a crawl report. The difference is whether the people who found them can also open the theme and change them.</p>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

      {/* Problem/fix pair 1 */}
      <div className="prob-fix-grid">
        <div className="prob-cell">
          <div className="prob-label problem">PROBLEM</div>
          <h3 style={{ fontSize: '17px', marginBottom: '10px' }}>Shopify's duplicate product URL structure</h3>
          <p style={{ fontSize: '14px', color: 'var(--n600)' }}>Shopify creates two crawlable URLs for every product: /products/your-product-slug and /collections/your-collection/products/your-product-slug. Unless handled correctly via canonical tags in your theme's Liquid code, both URLs are indexed. Google sees duplicate content, splits link equity between them, and ranks neither well. For stores with 500 SKUs in 20 collections, this means 10,000 duplicate pages competing against each other.</p>
        </div>
        <div className="prob-cell fix">
          <div className="prob-label fix-label">HOW WE FIX IT</div>
          <h3 style={{ fontSize: '17px', marginBottom: '10px' }}>Liquid canonical tag audit + single canonical path enforcement</h3>
          <p style={{ fontSize: '14px', color: 'var(--n600)' }}>FactoryJet audits your theme's Liquid canonical tag implementation and enforces a single canonical URL path for all products: /products/slug as the canonical, with all /collections/*/products/slug variations pointing to it. We also ensure your sitemap outputs only the canonical product URLs. This fix alone typically recovers 30–50% of wasted crawl budget on large Shopify stores and concentrates link equity on the correct URLs.</p>
          <div style={{ marginTop: '12px', padding: '10px 14px', background: 'rgba(5,150,105,.1)', borderRadius: '8px' }}>
            <p style={{ fontSize: '12px', color: 'var(--green)', fontWeight: '600' }}>Typical outcome: crawl budget waste reduced by 60–70%.</p>
          </div>
        </div>
      </div>

      {/* Problem/fix pair 2 */}
      <div className="prob-fix-grid">
        <div className="prob-cell">
          <div className="prob-label problem">PROBLEM</div>
          <h3 style={{ fontSize: '17px', marginBottom: '10px' }}>Collection pages with no above-the-fold SEO content</h3>
          <p style={{ fontSize: '14px', color: 'var(--n600)' }}>Most Shopify themes are built to display products rather than to rank for category-level searches. The collection description field is typically rendered below all product thumbnails. On a collection with 100 products, your SEO content sits 100 product images below the fold. GoogleBot crawls a limited amount of each page. If your SEO content is that far down, it does not reliably get crawled or weighted. Your collection pages are invisible to Google for competitive UK category terms.</p>
        </div>
        <div className="prob-cell fix">
          <div className="prob-label fix-label">HOW WE FIX IT</div>
          <h3 style={{ fontSize: '17px', marginBottom: '10px' }}>Theme restructuring + collection SEO content above the grid</h3>
          <p style={{ fontSize: '14px', color: 'var(--n600)' }}>FactoryJet edits your theme's collection Liquid template to render an above-the-fold SEO block before the product grid: H1 with the keyword, 150–200 words of collection-specific content, FAQ schema content, and a keyword-mapped internal link block. We also write or audit the collection description content itself, targeting the UK commercial search terms your competitors are ranking for on their category pages. This is where the majority of ecommerce organic revenue comes from.</p>
          <div style={{ marginTop: '12px', padding: '10px 14px', background: 'rgba(5,150,105,.1)', borderRadius: '8px' }}>
            <p style={{ fontSize: '12px', color: 'var(--green)', fontWeight: '600' }}>Typical outcome: collection page rankings improve 15–30 positions on primary commercial terms within 3 months.</p>
          </div>
        </div>
      </div>

      {/* Problem/fix pair 3 */}
      <div className="prob-fix-grid">
        <div className="prob-cell">
          <div className="prob-label problem">PROBLEM</div>
          <h3 style={{ fontSize: '17px', marginBottom: '10px' }}>Faceted navigation creating thousands of thin pages</h3>
          <p style={{ fontSize: '14px', color: 'var(--n600)' }}>Shopify's native filtering system (and most filter apps) creates separate crawlable URLs for every combination of filters: ?filter.p.product_type=trainers&filter.v.availability=true. A store with 6 filter types and multiple values per filter can generate 5,000–50,000 thin filter combination pages. Google crawls all of these instead of your actual money pages, dilutes your crawl budget, and often gives thin-content penalties that suppress your real collection pages.</p>
        </div>
        <div className="prob-cell fix">
          <div className="prob-label fix-label">HOW WE FIX IT</div>
          <h3 style={{ fontSize: '17px', marginBottom: '10px' }}>Filter URL canonicalisation + robots meta for thin filter pages</h3>
          <p style={{ fontSize: '14px', color: 'var(--n600)' }}>FactoryJet implements canonical tags or robots noindex meta tags for all filter-generated URLs, so Google stops crawling them and redirects its crawl budget to your collection and product pages. Where filter pages have genuine search volume (e.g., specific colour or size queries that UK shoppers actually search), we evaluate whether to give them a real page with real content, which turns a crawl drain into a ranking opportunity. That change is made directly in the Liquid theme. There is no app that does it for you.</p>
          <div style={{ marginTop: '12px', padding: '10px 14px', background: 'rgba(5,150,105,.1)', borderRadius: '8px' }}>
            <p style={{ fontSize: '12px', color: 'var(--green)', fontWeight: '600' }}>Typical outcome: crawl coverage of real pages doubles within 6 weeks of implementation.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


{/* ════════════════════════════════════════════════
  3b. SHOPIFY TECHNICAL SEO REFERENCE
     The substance of this page. Five areas where Shopify behaves differently from a
     generic shop, each with what we check and what we change. Written to be quoted.
════════════════════════════════════════════════ */}
<section className="sec-lg" style={{ background: 'var(--white)' }} id="reference">
  <div className="wrap">
    <div style={{ maxWidth: '780px', marginBottom: '48px' }}>
      <span className="eyebrow">THE SHOPIFY TECHNICAL SEO REFERENCE</span>
      <h2 style={{ marginTop: '12px' }}>Five things Shopify does differently, and what we change in each</h2>
      <p className="lead mt-4">This is the full working list. If you have an in-house developer, you can hand them this section and they will know what to do. If you would rather we did it, that is the engagement.</p>
    </div>

    <div className="stack" style={{ display: 'grid', gap: '20px' }}>

      {/* 1. Collection architecture */}
      <div className="card" style={{ padding: '28px' }}>
        <span className="eyebrow" style={{ marginBottom: '10px' }}>01 &nbsp;/&nbsp; COLLECTION ARCHITECTURE</span>
        <h3 style={{ marginBottom: '12px' }}>Collections are the pages that earn the money, and Shopify treats them as lists</h3>
        <p style={{ marginBottom: '18px' }}>Category searches are where the commercial demand sits. Shopify builds a collection as a product grid first and content second, which means the page that should rank hardest is often the thinnest page on the store. Almost all of the fix is in the collection Liquid template.</p>
        <div className="col-2" style={{ gap: '28px' }}>
          <div>
            <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink)', marginBottom: '10px' }}>What we check</p>
            <ul className="ref-list">
              <li>Whether the collection description renders <strong>before</strong> the product grid in the raw page source, not just visually.</li>
              <li>Whether the description is hidden inside a collapsed panel, a tab, or a read-more control that only appears after a click.</li>
              <li>Whether the collection heading is a real <code>&lt;h1&gt;</code> or a styled <code>&lt;div&gt;</code>.</li>
              <li>Whether two collections carry near-identical text, which happens whenever a store scales categories by copy and paste.</li>
              <li>Whether smart collections and manual collections have been allowed to overlap so the same products appear under several competing pages.</li>
              <li>Whether empty or seasonal collections are still published and still in the sitemap.</li>
              <li>Whether collection URLs changed during a past theme migration without redirects.</li>
            </ul>
          </div>
          <div>
            <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink)', marginBottom: '10px' }}>What we change</p>
            <ul className="ref-list">
              <li>Move the description output above the grid in <code>collection.liquid</code> or the relevant section file.</li>
              <li>Add a short content block written for that category specifically, with a brief per collection so no two read the same.</li>
              <li>Add a small set of real buyer questions to the collection template, visible on the page before any markup is generated from them.</li>
              <li>Add breadcrumb structured data so the hierarchy is legible to Google.</li>
              <li>Merge or retire overlapping collections and redirect the loser permanently in a single hop.</li>
              <li>Unpublish empty collections rather than leaving them to be crawled.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2. Faceted navigation */}
      <div className="card" style={{ padding: '28px' }}>
        <span className="eyebrow" style={{ marginBottom: '10px' }}>02 &nbsp;/&nbsp; FACETED NAVIGATION AND FILTERS</span>
        <h3 style={{ marginBottom: '12px' }}>Every filter click is a new address, and there is no natural limit</h3>
        <p style={{ marginBottom: '18px' }}>Shopify turns filter selections into URL parameters, for example <code>/collections/trainers?filter.p.m.colour=red</code>. Google&#8217;s crawling documentation is direct about the consequence: filter systems built on URL parameters can generate effectively unlimited URL spaces. On a store with colour, size, brand and price filters, the number of possible combinations is larger than your catalogue by orders of magnitude.</p>
        <div className="col-2" style={{ gap: '28px' }}>
          <div>
            <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink)', marginBottom: '10px' }}>What we check</p>
            <ul className="ref-list">
              <li>How many filter URLs Google has already fetched, read from the Search Console page indexing report rather than guessed.</li>
              <li>Whether filter URLs carry a canonical tag pointing back to the parent collection.</li>
              <li>Whether filter links are ordinary crawlable anchors or JavaScript controls that produce no link at all.</li>
              <li>Whether sort order parameters such as <code>?sort_by=</code> are generating their own set of addresses on top of the filters.</li>
              <li>Whether any filter combination has real UK search demand behind it, which changes the answer completely.</li>
              <li>Whether anything has been blocked in <code>robots.txt</code> as a shortcut, which Google explicitly warns against for this purpose because a blocked URL can still be indexed without its content.</li>
            </ul>
          </div>
          <div>
            <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink)', marginBottom: '10px' }}>What we change</p>
            <ul className="ref-list">
              <li>Canonicalise filter and sort URLs back to the parent collection in the theme head.</li>
              <li>Leave filter URLs out of internal linking so they are reachable by a shopper but not promoted to a crawler.</li>
              <li>Build a real collection page, with its own text and its own address, for any filter combination with genuine demand. A page that deserves to rank should not be a query string.</li>
              <li>Remove robots.txt blocks that were added to hide filter URLs, and replace them with canonical tags that actually consolidate the signals.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. Duplicate + variant URLs */}
      <div className="card" style={{ padding: '28px' }}>
        <span className="eyebrow" style={{ marginBottom: '10px' }}>03 &nbsp;/&nbsp; DUPLICATE AND VARIANT PRODUCT URLS</span>
        <h3 style={{ marginBottom: '12px' }}>The same product, published at six addresses, competing with itself</h3>
        <p style={{ marginBottom: '18px' }}>Shopify publishes each product under its own address and again under every collection it belongs to. Add variant query strings and the count climbs further. Google&#8217;s guidance on duplicate pages gives two reasons this matters: signals such as links get split across the copies instead of consolidating onto one address, and crawl time goes on duplicates rather than on new or updated pages.</p>
        <div className="col-2" style={{ gap: '28px' }}>
          <div>
            <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink)', marginBottom: '10px' }}>What we check</p>
            <ul className="ref-list">
              <li>The rendered <code>&lt;head&gt;</code> of four page types separately: a product, a collection, a filtered collection and a paginated collection. A theme can get one right and the rest wrong.</li>
              <li>Whether the theme prints Shopify&#8217;s <code>canonical_url</code> object or a hand-written URL that drifted out of date.</li>
              <li>Whether a page-builder or review app injects a second, conflicting canonical tag into the head.</li>
              <li>Whether variant query strings such as <code>?variant=</code> resolve to a canonical tag pointing at the clean product address.</li>
              <li>Whether internal links point at the clean product address or at collection-scoped copies. Google asks that you link consistently to the address you want treated as canonical.</li>
              <li>Whether Search Console is reporting pages as duplicates with a different canonical chosen by Google, which is the clearest evidence the tag is not being believed.</li>
            </ul>
          </div>
          <div>
            <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink)', marginBottom: '10px' }}>What we change</p>
            <ul className="ref-list">
              <li>Print a single, correct canonical tag from <code>canonical_url</code> in the theme head, once, on every template.</li>
              <li>Remove the duplicate canonical tags injected by apps, or move the app so it stops writing to the head.</li>
              <li>Rewrite product links in collection and search templates to use the clean <code>/products/</code> address.</li>
              <li>Verify the change by reading the raw source of a live page rather than trusting the theme editor preview.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 4. Liquid template SEO */}
      <div className="card" style={{ padding: '28px' }}>
        <span className="eyebrow" style={{ marginBottom: '10px' }}>04 &nbsp;/&nbsp; LIQUID TEMPLATE SEO</span>
        <h3 style={{ marginBottom: '12px' }}>Liquid is where nearly every real Shopify SEO fix actually lands</h3>
        <p style={{ marginBottom: '18px' }}>Liquid is Shopify&#8217;s templating language: the code in your theme that decides what appears on a page and in what order. Most SEO recommendations for a Shopify store are, in practice, Liquid edits. An agency that cannot open the theme can only describe the work.</p>
        <div className="col-2" style={{ gap: '28px' }}>
          <div>
            <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink)', marginBottom: '10px' }}>What we check</p>
            <ul className="ref-list">
              <li>Heading order through every template. A page that jumps from <code>&lt;h1&gt;</code> to <code>&lt;h3&gt;</code> because a section was styled rather than structured is common and easy to miss.</li>
              <li>Whether there is exactly one <code>&lt;h1&gt;</code> per template, and whether it holds the phrase the page is meant to rank for.</li>
              <li>Whether page titles and meta descriptions are generated by a theme fallback that produces the same text across hundreds of pages.</li>
              <li>Whether image alt text is populated from the product title by default, which produces technically present but useless alt text.</li>
              <li>Whether structured data is written into the theme or injected by an app, and whether it describes something visible on the page.</li>
              <li>Whether any structured data claims reviews or ratings that are not actually shown to a visitor.</li>
              <li>Whether pagination pages canonicalise to themselves or, wrongly, back to page one.</li>
            </ul>
          </div>
          <div>
            <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink)', marginBottom: '10px' }}>What we change</p>
            <ul className="ref-list">
              <li>Correct heading structure in the templates so the document outline matches what a reader sees.</li>
              <li>Replace blanket meta fallbacks with per-template patterns that produce distinct, readable text.</li>
              <li>Write product, breadcrumb and organisation structured data directly into the theme instead of relying on an app.</li>
              <li>Remove any structured data describing content that is not on the page, including review markup with no visible reviews.</li>
              <li>Work on a duplicate theme, show the change on a preview link, and publish only once you have seen it.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 5. App bloat + CWV */}
      <div className="card" style={{ padding: '28px' }}>
        <span className="eyebrow" style={{ marginBottom: '10px' }}>05 &nbsp;/&nbsp; APP WEIGHT AND CORE WEB VITALS</span>
        <h3 style={{ marginBottom: '12px' }}>The theme is usually fine. It is the twenty apps loading on every page</h3>
        <p style={{ marginBottom: '18px' }}>Google publishes three Core Web Vitals thresholds: Largest Contentful Paint within 2.5 seconds of the page starting to load, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift under 0.1. Google describes good Core Web Vitals as aligning with what its core ranking systems seek to reward, which is a genuine signal rather than a switch that lifts you up the results on its own. On Shopify the usual causes are predictable.</p>
        <div className="col-2" style={{ gap: '28px' }}>
          <div>
            <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink)', marginBottom: '10px' }}>What we check</p>
            <ul className="ref-list">
              <li>Every script the store loads, matched to the app that installed it, including apps that were uninstalled but left code behind in the theme.</li>
              <li>Which element is actually the Largest Contentful Paint on the homepage, a collection page and a product page. It is usually a different element on each.</li>
              <li>Whether the hero or first product image is marked high priority or is competing with a dozen other requests.</li>
              <li>Whether images carry explicit width and height, without which the browser cannot reserve space and the page jumps.</li>
              <li>Whether web fonts are blocking text from appearing while they download.</li>
              <li>Whether field data in the Search Console Core Web Vitals report agrees with lab tools, because the field data is the one Google uses.</li>
            </ul>
          </div>
          <div>
            <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink)', marginBottom: '10px' }}>What we change</p>
            <ul className="ref-list">
              <li>Remove leftover code from uninstalled apps, which is free speed and carries no risk.</li>
              <li>Mark the Largest Contentful Paint image as high priority and stop it loading lazily.</li>
              <li>Serve images at the size they are displayed rather than scaling large originals in the browser.</li>
              <li>Set width and height on above-the-fold images so layout is reserved before the file arrives.</li>
              <li>Let text render immediately while a web font loads, instead of leaving a blank space.</li>
              <li>Defer scripts that are not needed for the first view, and challenge any app whose value nobody can name.</li>
            </ul>
          </div>
        </div>
      </div>

    </div>

    {/* Scope: what an engagement covers and what it does not. */}
    <div className="col-2" style={{ gap: '20px', marginTop: '20px' }}>
      <div className="card" style={{ padding: '28px' }}>
        <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink)', marginBottom: '14px' }}>What a Shopify SEO engagement includes</p>
        <ul className="scope-list is-in">
          <li>A full technical audit of the theme, the templates and the Search Console data, delivered as a prioritised list rather than a score.</li>
          <li>The Liquid edits themselves, made by us on a duplicate theme and shown to you on a preview link before anything is published.</li>
          <li>Canonical strategy across product, variant, filter and paginated addresses.</li>
          <li>Collection page content, briefed and written per category.</li>
          <li>Structured data written into the theme, describing only what is visible.</li>
          <li>Core Web Vitals work, including the app audit.</li>
          <li>Monthly reporting on organic revenue first and positions second.</li>
          <li>Redirect mapping if the store is moving or has moved.</li>
        </ul>
      </div>
      <div className="card" style={{ padding: '28px' }}>
        <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink)', marginBottom: '14px' }}>What it does not include</p>
        <ul className="scope-list is-out">
          <li>Bought links, link exchanges or private blog networks. We do not use them and we will not inherit them quietly if we find them.</li>
          <li>Review or rating structured data on a store with no visible reviews.</li>
          <li>Pages built purely to catch a filter combination that nobody searches for.</li>
          <li>Paid search management. Different discipline, different team.</li>
          <li>Guaranteed positions by a fixed date. Nobody can honestly offer that.</li>
          <li>Annual lock-in. Every engagement is month to month.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  3c. MID-PAGE CTA
     Sits at roughly the middle of the page, immediately after the technical
     reference. Before this the page had a hero CTA and a closing CTA and nothing
     in between, so a reader convinced by the reference had to scroll to one end
     or the other to act.
════════════════════════════════════════════════ */}
<MidPageCTA
  headline={'Want this run against your own Shopify store?'}
  sub={'Send us the store URL and read-only Search Console access. We check the four page types separately, count how many filter and variant URLs Google has already crawled, and come back with the three things worth fixing first and what each one involves.'}
  label={'Get a Shopify technical SEO audit'}
  note={'One store, one written audit. No obligation to carry on afterwards.'}
/>

{/* ════════════════════════════════════════════════
  4. IMAGE BAND; Runware image full-width
════════════════════════════════════════════════ */}
<section style={{ background: 'var(--ink)', padding: '0' }}>
  <div style={{ maxWidth: '100%', position: 'relative' }}>
    <img width="1200" height="600" loading="lazy" src="https://im.runware.ai/image/os/a07dlim3/ws/3/ii/3bf8c844-931e-4ecb-809d-42f6ab6e318a.webp"
      alt="Shopify organic search performance results for FactoryJet UK client; GSC data showing ranking improvements"
      style={{ width: '100%', height: '340px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
<div style={{ display: 'none', width: '100%', height: '100%', minHeight: '320px', borderRadius: 'inherit', overflow: 'hidden' }}><img src="https://im.runware.ai/image/os/a10dlim3/ws/3/ii/068f50f7-9c40-4fa7-8564-9797de4d375e.webp" width="1344" height="600" alt="FactoryJet Shopify SEO UK" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} /></div>
    <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(to bottom,rgba(15,15,18,.7) 0%,rgba(15,15,18,.4) 50%,rgba(15,15,18,.85) 100%)' }}></div>
    <div style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', maxWidth: '700px', padding: '0 24px' }}>
        <p style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(1.5rem,4vw,2.5rem)', fontWeight: '700', lineHeight: '1.25', color: '#fff', letterSpacing: '-.025em' }}>"We'd had three other UK Shopify SEO agencies. FactoryJet was the first one that could actually edit our theme."</p>
        <p style={{ fontFamily: 'var(--fm)', fontSize: '11px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', marginTop: '16px' }}>UK Shopify store founder, home décor</p>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  5. SERVICES GRID
════════════════════════════════════════════════ */}
<section id="services" className="sec-lg dot-grid" style={{ position: 'relative' }}>
  <div className="shimmer" style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }}></div>
  <div className="wrap">
    <div style={{ maxWidth: '640px', margin: '0 auto 48px', textAlign: 'center' }}>
      <span className="eyebrow">SHOPIFY SEO SERVICES UK</span>
      <h2 style={{ marginTop: '12px' }}>Six Shopify SEO services only possible with an in-house Shopify dev team</h2>
      <p className="lead" style={{ marginTop: '16px' }}>We scope every engagement around what your store actually needs, starting with the technical audit. No templated packages.</p>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
      <div className="card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '12px' }}>SHOPIFY SEO 01</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Shopify Technical SEO Audit</h3>
        <p style={{ fontSize: '14px' }}>Complete crawl of your Shopify store: duplicate URLs, canonical tag implementation, sitemap quality, Core Web Vitals, schema markup, faceted navigation handling, pagination, and JavaScript rendering analysis. Delivered as a prioritised list of Liquid fixes, not a generic SEO report.</p>
        <p style={{ fontSize: '13px', color: 'var(--orange)', marginTop: '12px', fontWeight: '600' }}>Shopify-specific. Not generic. Delivered in week 1.</p>
      </div>
      <div className="card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '12px' }}>SHOPIFY SEO 02</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Shopify Collection Page SEO</h3>
        <p style={{ fontSize: '14px' }}>H1 strategy, above-the-fold content blocks in Liquid, keyword-mapped collection descriptions, FAQ schema, internal linking, and pagination handling for every collection page that targets commercial UK search terms. This is where Shopify organic revenue is won.</p>
        <p style={{ fontSize: '13px', color: 'var(--orange)', marginTop: '12px', fontWeight: '600' }}>Most UK Shopify stores have no above-the-fold collection SEO content.</p>
      </div>
      <div className="card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '12px' }}>SHOPIFY SEO 03</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Shopify Product Page SEO</h3>
        <p style={{ fontSize: '14px' }}>Long-tail product keyword mapping, Product schema with correct price, availability, and review aggregation, FAQ content below product descriptions targeting "is this worth buying" queries, and structured review data for Google Shopping eligibility.</p>
        <p style={{ fontSize: '13px', color: 'var(--orange)', marginTop: '12px', fontWeight: '600' }}>Product pages with complete Product schema earn rich results in UK search.</p>
      </div>
      <div className="card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '12px' }}>SHOPIFY SEO 04</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Shopify Core Web Vitals</h3>
        <p style={{ fontSize: '14px' }}>LCP, CLS, and INP optimisation for Shopify; Largest Contentful Paint (typically your hero image or product grid), Cumulative Layout Shift from lazy-loaded apps, and Interaction to Next Paint from theme JavaScript. Delivered by developers, not a generic Google tool recommendation list.</p>
        <p style={{ fontSize: '13px', color: 'var(--orange)', marginTop: '12px', fontWeight: '600' }}>UK Shopify stores that pass Core Web Vitals get a documented ranking signal advantage.</p>
      </div>
      <div className="card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '12px' }}>SHOPIFY SEO 05</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Shopify Link Building UK</h3>
        <p style={{ fontSize: '14px' }}>Editorial links from UK ecommerce, fashion, home, and specialist category publications. Supplier and manufacturer links. Digital PR angles built around UK Shopify store data and category expertise. Targets the domain authority improvements that multiply your on-page Shopify SEO work.</p>
        <p style={{ fontSize: '13px', color: 'var(--orange)', marginTop: '12px', fontWeight: '600' }}>Domain authority is the lever that makes all on-page Shopify SEO compound.</p>
      </div>
      <div className="card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '12px' }}>SHOPIFY SEO 06</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Shopify Migrations; SEO-Safe</h3>
        <p style={{ fontSize: '14px' }}>Migrating to Shopify from WooCommerce, Magento, or another platform without losing your organic search rankings requires careful URL mapping, canonical handling, 301 redirect chains, and GSC monitoring post-launch. FactoryJet does Shopify migrations with SEO continuity as a first-class requirement.</p>
        <p style={{ fontSize: '13px', color: 'var(--orange)', marginTop: '12px', fontWeight: '600' }}>Most Shopify migrations lose 30–60% of organic traffic. Ours don't.</p>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  6. STATS BAND
════════════════════════════════════════════════ */}
<section className="stats-band">
  <div className="wrap">
    <div className="col-4">
      <div style={{ textAlign: 'center', padding: '16px' }}>
        <div className="chip" style={{ marginBottom: '12px', justifyContent: 'center' }}><span className="dot dot-orange"></span>Crawl Recovery</div>
        <div className="stat-num">74%</div>
        <p style={{ marginTop: '12px', fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>crawl budget recovered after deduplication</p>
        <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '4px' }}>average across UK Shopify store audits</p>
      </div>
      <div style={{ textAlign: 'center', padding: '16px', borderLeft: '1px solid var(--orange-bd)' }}>
        <div className="chip" style={{ marginBottom: '12px', justifyContent: 'center' }}><span className="dot dot-orange"></span>Ranking Lift</div>
        <div className="stat-num">+22 pos</div>
        <p style={{ marginTop: '12px', fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>avg. category page position gain</p>
        <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '4px' }}>on target commercial UK Shopify terms</p>
      </div>
      <div style={{ textAlign: 'center', padding: '16px', borderLeft: '1px solid var(--orange-bd)' }}>
        <div className="chip" style={{ marginBottom: '12px', justifyContent: 'center' }}><span className="dot dot-orange"></span>Shopify Specialists</div>
        <div className="stat-num">10+ yrs</div>
        <p style={{ marginTop: '12px', fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>dedicated Shopify SEO, 500+ stores built</p>
        <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '4px' }}>OS 2.0, Hydrogen, Headless: we know every platform change</p>
      </div>
      <div style={{ textAlign: 'center', padding: '16px', borderLeft: '1px solid var(--orange-bd)' }}>
        <div className="chip" style={{ marginBottom: '12px', justifyContent: 'center' }}><span className="dot dot-orange"></span>Revenue Growth</div>
        <div className="stat-num">+38%</div>
        <p style={{ marginTop: '12px', fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>avg. organic revenue month 3 vs month 1</p>
        <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '4px' }}>across active Shopify SEO engagements</p>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  7. SHOPIFY SEO vs GENERIC ECOMMERCE SEO; 4060 layout
════════════════════════════════════════════════ */}
<section className="sec-lg" style={{ background: 'var(--white)' }}>
  <div className="wrap">
    <div className="col-4060">
      {/* Comparison table left */}
      <div>
        <span className="eyebrow">HOW TO EVALUATE</span>
        <h2 style={{ marginBottom: '28px', fontSize: 'clamp(1.5rem,3vw,2rem)' }}>FactoryJet Shopify SEO vs. UK alternatives</h2>
        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
          <table className="cmp-table" style={{ minWidth: '560px' }}>
            <thead>
              <tr>
                <th style={{ width: '40%' }}>What to ask</th>
                <th className="fj">FactoryJet</th>
                <th>UK SEO Agency</th>
                <th>Freelancer</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="feat">In-house Shopify Liquid dev team</td><td className="fj yes">✓ In-house</td><td className="no">✗ Separate project</td><td className="partial">Rare</td></tr>
              <tr><td className="feat">Shopify-specific canonical audit</td><td className="fj yes">✓ Month 1</td><td className="partial">Generic crawl</td><td className="partial">Varies</td></tr>
              <tr><td className="feat">Collection page Liquid restructuring</td><td className="fj yes">✓ Included</td><td className="no">✗ Not in scope</td><td className="partial">Extra charge</td></tr>
              <tr><td className="feat">Faceted navigation SEO handling</td><td className="fj yes">✓ Liquid-level fix</td><td className="partial">Recommendations only</td><td className="no">✗ Rarely</td></tr>
              <tr><td className="feat">Shopify migration SEO continuity</td><td className="fj yes">✓ Part of service</td><td className="partial">Separate engagement</td><td className="no">✗ Not standard</td></tr>
              <tr><td className="feat">Core Web Vitals by developers</td><td className="fj yes">✓ Dev fix, not advice</td><td className="partial">Advice only</td><td className="partial">Varies</td></tr>
              <tr><td className="feat">Month-to-month contracts</td><td className="fj yes">✓ Always</td><td className="no">✗ 12-month minimum</td><td className="yes">✓ Yes</td></tr>
              <tr><td className="feat">Reports on GSC organic revenue</td><td className="fj yes">✓ Revenue-first</td><td className="partial">Rankings primary</td><td className="partial">Varies</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Right: Shopify Platforms + who this is for */}
      <div>
        <div className="card" style={{ marginBottom: '20px' }}>
          <span className="eyebrow">SHOPIFY PLANS SUPPORTED</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 0', borderBottom: '1px solid var(--n100)' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--green)', flexShrink: '0' }}></div>
              <div>
                <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--ink)' }}>Shopify Basic / Shopify</p>
                <p style={{ fontSize: '12px', color: 'var(--n400)' }}>Standard technical SEO and collection optimisation</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 0', borderBottom: '1px solid var(--n100)' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--green)', flexShrink: '0' }}></div>
              <div>
                <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--ink)' }}>Shopify Advanced</p>
                <p style={{ fontSize: '12px', color: 'var(--n400)' }}>Advanced theme customisation, expanded schema coverage</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 0', borderBottom: '1px solid var(--n100)' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--green)', flexShrink: '0' }}></div>
              <div>
                <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--ink)' }}>Shopify Plus</p>
                <p style={{ fontSize: '12px', color: 'var(--n400)' }}>Enterprise-scale crawl management, B2B SEO, internationalisation</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 0' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--orange)', flexShrink: '0' }}></div>
              <div>
                <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--ink)' }}>Shopify Hydrogen / Headless</p>
                <p style={{ fontSize: '12px', color: 'var(--n400)' }}>React + Liquid hybrid SEO, SSR rendering validation</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <span className="eyebrow">WHO HIRES US FOR SHOPIFY SEO</span>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '8px' }}>
            <li style={{ fontSize: '14px', color: 'var(--n600)' }}>→ UK Shopify stores spending on paid ads and nothing on organic</li>
            <li style={{ fontSize: '14px', color: 'var(--n600)' }}>→ Brands that had Shopify SEO from an agency with no Shopify dev team</li>
            <li style={{ fontSize: '14px', color: 'var(--n600)' }}>→ Stores migrating from WooCommerce / Magento to Shopify</li>
            <li style={{ fontSize: '14px', color: 'var(--n600)' }}>→ Shopify merchants with duplicate URL issues Google told them about in GSC</li>
            <li style={{ fontSize: '14px', color: 'var(--n600)' }}>→ Shopify Plus brands needing enterprise crawl budget management</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  9. FOUNDER + HIRE
════════════════════════════════════════════════ */}
<section className="sec-lg" style={{ background: 'var(--white)' }}>
  <div className="wrap">
    <div className="col-6040">
      <div>
        <span className="eyebrow">SHOPIFY SEO AGENCY UK</span>
        <h2 style={{ marginBottom: '20px' }}>Hire a Shopify SEO agency with an actual Shopify development team</h2>
        <div className="stack">
          <p className="lead">When you hire a <strong style={{ color: 'var(--ink)' }}>Shopify SEO agency in the UK</strong>, you need to ask one question that most UK brands forget to ask: "Who fixes the Liquid code when your audit finds a Shopify-specific technical problem?" Most UK Shopify SEO agencies cannot fix Liquid. FactoryJet built 500+ Shopify stores. We can.</p>
          {/* Visual: How integration works + contract model */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '4px' }}>
            <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontSize: '18px', marginBottom: '8px' }}>⚙️</div>
              <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink)', marginBottom: '4px' }}>SEO + Dev in one team</p>
              <p style={{ fontSize: '12px', color: 'var(--n400)' }}>Same audit, same Shopify theme. The Liquid fixes, meaning canonical tags, collection templates and faceted navigation, happen in the same week as the recommendation.</p>
            </div>
            <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontSize: '18px', marginBottom: '8px' }}>📅</div>
              <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink)', marginBottom: '4px' }}>Earn every month</p>
              <p style={{ fontSize: '12px', color: 'var(--n400)' }}>Month-to-month contracts only. We work on what moves organic revenue, not on what fills an hours budget.</p>
            </div>
          </div>
          <div className="pull-quote">A Shopify SEO audit without a Shopify developer is a list of problems you can't fix.</div>
        </div>
        <div style={{ marginTop: '28px', background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '16px', padding: '24px' }}>
          <h3 style={{ fontSize: '15px', marginBottom: '12px' }}>Before hiring any Shopify SEO agency UK; ask these three questions</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ fontSize: '14px', color: 'var(--n600)' }}>1. "Can you edit our Shopify Liquid theme directly, or would fixes go to a separate developer?"</li>
            <li style={{ fontSize: '14px', color: 'var(--n600)' }}>2. "Will your monthly reports come from Google Search Console, or a third-party rank tracker?"</li>
            <li style={{ fontSize: '14px', color: 'var(--n600)' }}>3. "What happens in month one before any ranking improvement?"</li>
          </ul>
          <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '12px' }}>FactoryJet answers: (1) we edit Liquid ourselves; (2) GSC, always; (3) full technical audit + quick wins.</p>
        </div>
      </div>

      <div className="card" style={{ textAlign: 'center' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg,#FF5C00 0%,#FF8C00 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', border: '3px solid rgba(255,92,0,.2)', flexShrink: '0' }}>
          <span style={{ fontFamily: 'var(--fd)', fontSize: '26px', fontWeight: '800', color: '#fff', lineHeight: '1' }}>B</span>
        </div>
        <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>Bhavesh</h3>
        <p style={{ fontFamily: 'var(--fm)', fontSize: '11px', color: 'var(--n400)', letterSpacing: '.10em', textTransform: 'uppercase', marginBottom: '16px' }}>Founder · FactoryJet</p>
        <div style={{ background: 'var(--cream)', borderRadius: '12px', padding: '16px', marginBottom: '20px', textAlign: 'left' }}>
          <p style={{ fontSize: '14px', color: 'var(--ink)', fontWeight: '500', lineHeight: '1.6' }}>"Returns on your time. That is what I hold every Shopify SEO engagement to. If the audit doesn't find real technical problems we can fix in week one, we'll tell you that on the discovery call."</p>
        </div>
        <div style={{ background: 'var(--n100)', borderRadius: '12px', padding: '16px', marginBottom: '20px', textAlign: 'left' }}>
          <p style={{ fontFamily: 'var(--fm)', fontSize: '11px', color: 'var(--n400)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '8px' }}>Before the call, we'll check</p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <li style={{ fontSize: '13px', color: 'var(--n600)' }}>✓ Your Google Search Console coverage report</li>
            <li style={{ fontSize: '13px', color: 'var(--n600)' }}>✓ Your Shopify sitemap.xml for duplicate issues</li>
            <li style={{ fontSize: '13px', color: 'var(--n600)' }}>✓ Core Web Vitals for your homepage and top collection page</li>
          </ul>
        </div>
        <ModalCTAButton label="Book Free Shopify SEO Audit" region="uk" modalVariant="default" btnVariant="primary-light" />
        <p style={{ fontSize: '12px', color: 'var(--n400)', marginTop: '12px' }}>30 minutes. We come prepared. No sales pitch.</p>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  10. WHY FACTORYJET
      Converted from a second dark section on 2026-08-25. House rule is one dark
      section per page and that budget is spent on the closing CTA.
════════════════════════════════════════════════ */}
<section className="light-sec">
  <div className="wrap">
    <div style={{ maxWidth: '700px', margin: '0 auto 56px', textAlign: 'center' }}>
      <span className="eyebrow">WHY FACTORYJET FOR SHOPIFY SEO</span>
      <h2 style={{ marginTop: '12px' }}>Three reasons UK Shopify stores stay with us</h2>
    </div>
    <div className="col-3">
      <div className="light-card">
        <span style={{ fontSize: '28px', marginBottom: '16px', display: 'block' }} aria-hidden="true">🔧</span>
        <h3 style={{ marginBottom: '12px' }}>The people who find the problem also fix it</h3>
        <p>When an audit finds that your theme is printing the collection description underneath two hundred product images, we do not write that down and send it to you. We open the theme, move it, and show you the change on a preview link. Our Shopify developers work from the same audit as the people doing the SEO, so a fix that needs a Liquid edit happens in the same week. No second agency, no handover, no waiting.</p>
      </div>
      <div className="light-card">
        <span style={{ fontSize: '28px', marginBottom: '16px', display: 'block' }} aria-hidden="true">📊</span>
        <h3 style={{ marginBottom: '12px' }}>Reporting that leads with revenue, not positions</h3>
        <p>Every monthly report opens with organic sessions and organic revenue, taken from Search Console and your own analytics, rather than a screenshot from a rank tracker. Positions are in there, further down, because they are useful for seeing which way things are moving. They are not the point. A page sitting third for a phrase nobody buys from is not a result and we will not present it as one.</p>
      </div>
      <div className="light-card">
        <span style={{ fontSize: '28px', marginBottom: '16px', display: 'block' }} aria-hidden="true">🏆</span>
        <h3 style={{ marginBottom: '12px' }}>A decade of watching Shopify change</h3>
        <p>We have built on Shopify through classic themes, through the move to Online Store 2.0 sections, and into Hydrogen and headless builds. That history is useful mainly because it tells you which parts of a store are safe to change and which will break something three templates away. We cannot tell you what the next Google update will do. We can tell you which of your pages are built well enough not to mind.</p>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  11. FAQ
     Generated from FAQ_ITEMS, the same array that generates the FAQPage JSON-LD.
     This section used to be a hand-written HTML copy of those questions, which meant
     schema and page could silently drift apart. Do not reintroduce a second copy:
     if you need to change a question, change FAQ_ITEMS and both update together.
════════════════════════════════════════════════ */}
<section id="faq" className="sec-lg" style={{ background: 'var(--white)' }}>
  <div className="wrap">
    <div style={{ maxWidth: '640px' }}>
      <p className="eyebrow">SHOPIFY SEO FAQ</p>
      <h2 style={{ marginTop: '12px' }}>Questions UK Shopify store owners actually ask</h2>
      <p className="lead" style={{ marginTop: '16px' }}>{FAQ_ITEMS.length} questions answered directly, including the technical ones an agency without Shopify developers cannot answer without asking someone else first.</p>
    </div>

    {/* Mobile pill nav */}
    <nav className="faq-pill-nav" aria-label="FAQ categories">
      {FAQ_CATEGORIES.map((c) => (
        <a key={c.id} href={`#faq-${c.id}`}>
          {c.short} <span className="pill-count">{FAQ_ITEMS.filter((f) => f.cat === c.id).length}</span>
        </a>
      ))}
    </nav>

    <div className="faq-grid">
      {/* Sidebar (desktop) */}
      <aside className="faq-sidebar" aria-label="FAQ navigation">
        <span className="faq-sidebar-topics">Topics</span>
        <nav className="faq-sidebar-nav">
          {FAQ_CATEGORIES.map((c) => (
            <a key={c.id} href={`#faq-${c.id}`}>
              {c.label}
              <span className="faq-nav-count">{FAQ_ITEMS.filter((f) => f.cat === c.id).length}</span>
            </a>
          ))}
        </nav>
        <div className="faq-sidebar-cta">
          <a href={CALENDLY}>Not answered here? Talk to the founder &#8594;</a>
          <p>{FAQ_ITEMS.length} questions answered</p>
        </div>
      </aside>

      {/* Accordion, one group per category, all from FAQ_ITEMS */}
      <div>
        {FAQ_CATEGORIES.map((cat) => {
          const items = FAQ_ITEMS.filter((f) => f.cat === cat.id);
          if (items.length === 0) return null;
          return (
            <div key={cat.id} id={`faq-${cat.id}`} style={{ marginBottom: '40px', scrollMarginTop: '112px' }}>
              <div className="faq-cat-header">
                <div className="faq-cat-bar"></div>
                <p className="faq-cat-label">{cat.label}</p>
              </div>
              <ul className="faq-list">
                {items.map((f) => (
                  <li key={f.question}>
                    <details className="faq-item">
                      <summary>
                        <span className="q-text">{f.question}</span>
                        <span className="chevron" aria-hidden="true">
                          <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </summary>
                      <div className="faq-ans"><p>{f.answer}</p></div>
                    </details>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  12. UK CITIES + RELATED
════════════════════════════════════════════════ */}
<section className="sec" style={{ background: 'var(--cream)' }}>
  <div className="wrap">
    <span className="eyebrow">Serving the UK</span>
    <h2 style={{ fontSize: 'clamp(1.25rem,2.5vw,1.75rem)', marginTop: '8px', marginBottom: '24px' }}>Shopify SEO Services for UK Brands</h2>
    {/* Real <ul>/<li> so the city links carry list semantics, not just visual pills. */}
    <ul className="city-pill-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px', listStyle: 'none', margin: '0 0 40px', padding: 0 }}>
      <li><a href="/uk/london" className="city-pill">London</a></li>
      <li><a href="/uk/manchester" className="city-pill">Manchester</a></li>
      <li><a href="/uk/birmingham" className="city-pill">Birmingham</a></li>
      <li><a href="/uk/leeds" className="city-pill">Leeds</a></li>
      <li><a href="/uk/bristol" className="city-pill">Bristol</a></li>
      <li><a href="/uk/sheffield" className="city-pill">Sheffield</a></li>
      <li><a href="/uk/liverpool" className="city-pill">Liverpool</a></li>
      <li><a href="/uk/edinburgh" className="city-pill">Edinburgh</a></li>
      <li><a href="/uk/glasgow" className="city-pill">Glasgow</a></li>
      <li><a href="/uk/nottingham" className="city-pill">Nottingham</a></li>
    </ul>
    <h3 style={{ fontSize: '16px', marginBottom: '16px' }}>Where to go next</h3>
    <ul className="col-3">
      <li><a href="/uk/ecommerce-seo" className="blog-card">
        <p><strong>Ecommerce SEO, UK.</strong> The strategy layer that sits above this page: which categories to target, how to structure the site, how organic fits with your paid channels. Any platform, Shopify included. Start there if the question is what to aim at rather than how Shopify behaves. &#8594;</p>
      </a></li>
      <li><a href="/uk/shopify-development" className="blog-card">
        <p><strong>Shopify development, UK.</strong> For building or rebuilding the store itself rather than tuning one that already exists. &#8594;</p>
      </a></li>
      <li><a href="/blog/shopify-seo-audit-guide-uk" className="blog-card">
        <p><strong>How to audit your own Shopify store.</strong> The same checks from the reference above, written as a guide you can run yourself. &#8594;</p>
      </a></li>
    </ul>

    {/* Visible counterpart to dateModified in the WebPage schema above. Both read from
        the same UPDATED constant, so the date a reader sees is the date Google is told. */}
    <p style={{ fontSize: '12px', color: 'var(--n400)', marginTop: '32px' }}>
      Reviewed and updated{' '}
      <time dateTime={UPDATED}>
        {new Date(UPDATED).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
      </time>
      . Google&#8217;s guidance on canonical tags, faceted navigation and Core Web Vitals changes from time to time; where this page states a threshold or a rule, it links to Google&#8217;s own documentation so you can check it is still current.
    </p>
  </div>
</section>

{/* ════════════════════════════════════════════════
  13. FINAL CTA
════════════════════════════════════════════════ */}
<section style={{ background: 'var(--dark)', padding: '80px 0' }}>
  <div className="wrap" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
    <span className="eyebrow" style={{ color: 'rgba(255,92,0,.9)' }}>START WITH A FREE SHOPIFY SEO AUDIT</span>
    <h2 style={{ color: '#fff', marginTop: '12px', fontSize: 'clamp(1.75rem,4vw,2.75rem)' }}>Find out what's stopping your UK Shopify store from ranking</h2>
    <p style={{ marginTop: '16px', color: 'rgba(255,255,255,.65)', fontSize: '16px', lineHeight: '1.7' }}>Before the call, we'll check your Google Search Console coverage report, your sitemap.xml for duplicate URL issues, and your Core Web Vitals for your homepage and top collection pages. The audit is free. The call is 30 minutes. You'll leave with a clear picture of your top 3 Shopify SEO problems and what fixing them would do to your organic revenue.</p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginTop: '32px' }}>
      <ModalCTAButton label="Get Free Shopify SEO Audit" region="uk" modalVariant="default" btnVariant="primary-light" />
      <a href="/uk/shopify-development" className="btn btn-outline" style={{ color: 'rgba(255,255,255,.7)', borderColor: 'rgba(255,255,255,.2)' }}>Need a Shopify Store Built?</a>
    </div>
    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,.66)', marginTop: '20px' }}>Month to month. No lock-in. Our own Shopify developers make the changes.</p>
  </div>
</section>


        </main>
</div>
      <Footer />
    </>
  );
}
