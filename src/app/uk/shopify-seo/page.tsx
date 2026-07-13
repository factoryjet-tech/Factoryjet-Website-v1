import type { Metadata } from 'next';
import Script from 'next/script';
import Footer from '../sections/Footer';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import './shopify-seo.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/uk/shopify-seo';

export const metadata: Metadata = {
  title: 'Shopify SEO Agency UK | Shopify-Specific Technical SEO | FactoryJet',
  description: 'FactoryJet is a Shopify SEO agency UK. We fix Shopify-specific SEO problems: duplicate product URLs, faceted navigation crawl waste, Liquid rendering bugs. We grow organic revenue for UK Shopify stores. Free Shopify SEO audit.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Shopify SEO Agency UK | Shopify-Specific Technical SEO | FactoryJet',
    description: 'FactoryJet is a Shopify SEO agency UK. We fix Shopify-specific SEO problems: duplicate product URLs, faceted navigation crawl waste, Liquid rendering bugs. We grow organic revenue for UK Shopify stores. Free Shopify SEO audit.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/shopify-seo-og.webp', width: 1200, height: 630, alt: 'Shopify SEO Services UK — FactoryJet' }],
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
      serviceType: 'Shopify search engine optimisation',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
        { '@type': 'ListItem', position: 2, name: 'UK', item: 'https://factoryjet.com/uk' },
        { '@type': 'ListItem', position: 3, name: 'Shopify SEO', item: 'https://factoryjet.com/uk/shopify-seo' },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'Shopify SEO Agency UK | Shopify-Specific Technical SEO | FactoryJet',
      inLanguage: 'en-GB',
      author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://www.linkedin.com/in/bhaveshbarot/', jobTitle: 'Founder, FactoryJet' },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
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


{/* ════════════════════════════════════════════════
  HEADER
════════════════════════════════════════════════ */}


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
        <span className="chip"><span className="dot dot-orange"></span>Shopify SEO Agency UK</span>
        <span className="chip">Shopify-Native Dev Team</span>
        <span className="chip">Month-to-Month</span>
      </div>
      <h1>Shopify <span className="grad-text">SEO Agency</span> UK: We Know the Technical Problems Because We Build the Stores</h1>
      <p className="lead mt-4" style={{ maxWidth: '680px' }}>Generic SEO agencies don't know why Shopify generates 400 crawlable filter pages by default, why /products/ and /collections/ create duplicate product URLs, or why Shopify's Liquid theme rendering can hide category content from GoogleBot. FactoryJet does; because we built 500+ Shopify stores before we started doing Shopify SEO.</p>
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
            <span style={{ background: 'rgba(255,92,0,.9)', borderRadius: '999px', padding: '6px 14px', fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.10em', textTransform: 'uppercase', color: '#fff' }}>UK Shopify Stores</span>
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
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Core Web Vitals</div>
              <div className="scorecard-note">all clients pass after audit</div>
            </div>
            <div className="scorecard-val">100/100</div>
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
          <span className="trust-pill"><span className="dot dot-orange"></span>Google Search Console reporting; not rank trackers</span>
          <span className="trust-pill"><span className="dot dot-orange"></span>In-house Shopify dev team; we fix Liquid bugs ourselves</span>
          <span className="trust-pill"><span className="dot dot-orange"></span>Technical audit in month 1; always included</span>
          <span className="trust-pill"><span className="dot dot-orange"></span>No annual lock-in</span>
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
    <div className="col-6040">
      <div>
        <span className="eyebrow">WHY SHOPIFY SEO IS DIFFERENT</span>
        <h2 style={{ marginBottom: '20px' }}>Shopify creates unique SEO problems that generic agencies don't know how to fix</h2>
        <div className="stack">
          <p className="lead">Standard SEO tools can crawl your Shopify store and list 400 issues. Most of them will be caused by Shopify's platform architecture, not by anything you did wrong. The question is whether your SEO agency understands which are platform-native problems, which require theme code changes, and which require Shopify app configuration.</p>
          <div className="pull-quote">Shopify's default URL structure creates duplicate product pages for every collection a product belongs to. This is not a bug; it's a platform design choice. Handling it correctly requires knowing Shopify's canonical tag behaviour in Liquid.</div>
          <p>FactoryJet's Shopify SEO work is different because we have an in-house Shopify development team. When our SEO audit identifies a Liquid rendering issue hiding your collection page description from GoogleBot, we fix it ourselves: in the same week, in the same engagement.</p>
          {/* Visual differentiator cards; breaks up text */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginTop: '4px' }}>
            <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontSize: '20px', marginBottom: '8px' }}>🔧</div>
              <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)', marginBottom: '4px' }}>In-house Liquid dev</p>
              <p style={{ fontSize: '12px', color: 'var(--n400)' }}>We edit your Shopify theme ourselves; no separate developer</p>
            </div>
            <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontSize: '20px', marginBottom: '8px' }}>📋</div>
              <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)', marginBottom: '4px' }}>500+ stores built</p>
              <p style={{ fontSize: '12px', color: 'var(--n400)' }}>Shopify specialists since the platform launched in 2006</p>
            </div>
            <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontSize: '20px', marginBottom: '8px' }}>📊</div>
              <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)', marginBottom: '4px' }}>GSC revenue data</p>
              <p style={{ fontSize: '12px', color: 'var(--n400)' }}>Reports show organic revenue; not rank tracker positions</p>
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
              <p style={{ fontSize: '12px', color: 'var(--n400)', marginTop: '2px' }}>Shopify creates /products/slug AND /collections/name/products/slug; both crawlable by default</p>
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
<section className="dark-sec">
  <div className="wrap">
    <div style={{ maxWidth: '700px', margin: '0 auto 56px', textAlign: 'center' }}>
      <span className="eyebrow">THE 3 SHOPIFY SEO PROBLEMS THAT KILL UK STORE RANKINGS</span>
      <h2 style={{ marginTop: '12px' }}>And exactly how FactoryJet fixes them</h2>
      <p className="lead" style={{ marginTop: '16px', color: 'rgba(255,255,255,.6)' }}>Every Shopify SEO agency in the UK can identify these problems in a crawl report. Only an agency with in-house Shopify developers can fix them in the same engagement.</p>
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
          <p style={{ fontSize: '14px', color: 'var(--n600)' }}>Most Shopify themes are built to display products; not to rank for category-level search terms. The collection description field is typically rendered below all product thumbnails. On a collection with 100 products, your SEO content sits 100 product images below the fold. GoogleBot crawls a limited amount of each page. If your SEO content is that far down, it does not reliably get crawled or weighted. Your collection pages are invisible to Google for competitive UK category terms.</p>
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
          <p style={{ fontSize: '14px', color: 'var(--n600)' }}>FactoryJet implements canonical tags or robots noindex meta tags for all filter-generated URLs, so Google stops crawling them and redirects its crawl budget to your collection and product pages. Where filter pages have genuine search volume (e.g., specific colour or size queries that UK shoppers actually search), we evaluate whether to make them indexable with proper content; turning a crawl budget drain into a ranking opportunity. Implementation requires direct Liquid theme editing; no app workaround.</p>
          <div style={{ marginTop: '12px', padding: '10px 14px', background: 'rgba(5,150,105,.1)', borderRadius: '8px' }}>
            <p style={{ fontSize: '12px', color: 'var(--green)', fontWeight: '600' }}>Typical outcome: crawl coverage of real pages doubles within 6 weeks of implementation.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

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
        <p style={{ fontFamily: 'var(--fm)', fontSize: '11px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', marginTop: '16px' }}>UK Shopify store founder; Home Décor Category</p>
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
      <p className="lead" style={{ marginTop: '16px' }}>We scope every engagement by what your Shopify store actually needs; starting with the technical audit. No templated monthly retainer packages.</p>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
      <div className="card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '12px' }}>SHOPIFY SEO 01</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Shopify Technical SEO Audit</h3>
        <p style={{ fontSize: '14px' }}>Complete crawl of your Shopify store: duplicate URLs, canonical tag implementation, sitemap quality, Core Web Vitals, schema markup, faceted navigation handling, pagination, and JavaScript rendering analysis. Delivered as a prioritised Liquid fix list; not a generic SEO report.</p>
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
  8. CLIENT RESULTS
════════════════════════════════════════════════ */}
<section className="sec-lg dot-grid" style={{ position: 'relative' }}>
  <div className="shimmer" style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }}></div>
  <div className="wrap">
    <div style={{ maxWidth: '640px', margin: '0 auto 48px', textAlign: 'center' }}>
      <span className="eyebrow">SHOPIFY SEO RESULTS</span>
      <h2 style={{ marginTop: '12px' }}>UK Shopify stores on what changed after FactoryJet</h2>
    </div>
    <div className="col-3">
      <div className="card">
        <div style={{ background: 'var(--orange-bg)', border: '1px solid var(--orange-bd)', borderRadius: '8px', padding: '12px 16px', marginBottom: '20px' }}>
          <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.10em', color: 'var(--orange)' }}>RESULT</div>
          <div style={{ fontFamily: 'var(--fd)', fontSize: '20px', fontWeight: '700', color: 'var(--orange)', letterSpacing: '-.03em' }}>+57 positions</div>
          <div style={{ fontSize: '12px', color: 'var(--n600)', marginTop: '2px' }}>"artificial plants UK"; 6 months</div>
        </div>
        <p style={{ fontSize: '15px', color: 'var(--ink)', fontWeight: '500', lineHeight: '1.6', marginBottom: '16px' }}>"FactoryJet found that Shopify had indexed 400 filter combination pages on our store; pages for every combination of colour, size, and availability filter. Google was spending its crawl budget on these instead of our actual collection pages. Fixing the canonicalisation and removing the filter pages from the sitemap was the turning point."</p>
        <div style={{ borderTop: '1px solid var(--n200)', paddingTop: '16px' }}>
          <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)' }}>Vishal; Director, Bombay Petals</p>
          <p style={{ fontSize: '13px', color: 'var(--n400)' }}>B2B artificial plants, UK; Shopify Plus</p>
        </div>
      </div>
      <div className="card">
        <div style={{ background: 'var(--orange-bg)', border: '1px solid var(--orange-bd)', borderRadius: '8px', padding: '12px 16px', marginBottom: '20px' }}>
          <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.10em', color: 'var(--orange)' }}>RESULT</div>
          <div style={{ fontFamily: 'var(--fd)', fontSize: '20px', fontWeight: '700', color: 'var(--orange)', letterSpacing: '-.03em' }}>3.2× organic sessions</div>
          <div style={{ fontSize: '12px', color: 'var(--n600)', marginTop: '2px' }}>8 months after engagement started</div>
        </div>
        <p style={{ fontSize: '15px', color: 'var(--ink)', fontWeight: '500', lineHeight: '1.6', marginBottom: '16px' }}>"Every UK SEO agency we'd spoken to said they could 'do Shopify SEO' but when they described their process it was always the same: write some blog posts, build some links, update meta descriptions. FactoryJet's first call was about canonicalisation and Liquid rendering. That was the first time I felt like someone actually understood our Shopify store."</p>
        <div style={{ borderTop: '1px solid var(--n200)', paddingTop: '16px' }}>
          <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)' }}>Ricky B; Founder, Belle Maison</p>
          <p style={{ fontSize: '13px', color: 'var(--n400)' }}>Home décor ecommerce, UK; Shopify Advanced</p>
        </div>
      </div>
      <div className="card">
        <div style={{ background: 'var(--orange-bg)', border: '1px solid var(--orange-bd)', borderRadius: '8px', padding: '12px 16px', marginBottom: '20px' }}>
          <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.10em', color: 'var(--orange)' }}>RESULT</div>
          <div style={{ fontFamily: 'var(--fd)', fontSize: '20px', fontWeight: '700', color: 'var(--orange)', letterSpacing: '-.03em' }}>Page 1 in 5 months</div>
          <div style={{ fontSize: '12px', color: 'var(--n600)', marginTop: '2px' }}>from position 40+ on core commercial terms</div>
        </div>
        <p style={{ fontSize: '15px', color: 'var(--ink)', fontWeight: '500', lineHeight: '1.6', marginBottom: '16px' }}>"After a Shopify migration from WooCommerce that another agency handled, our organic traffic dropped 60%. FactoryJet identified that 200 of our product URLs had changed and the redirects were set up incorrectly; the link equity wasn't being passed through. They fixed the redirect chain and rebuilt our collection page content. We recovered all the traffic in 5 months."</p>
        <div style={{ borderTop: '1px solid var(--n200)', paddingTop: '16px' }}>
          <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)' }}>Kiran M; Founder, Impulse Branding</p>
          <p style={{ fontSize: '13px', color: 'var(--n400)' }}>Promotional products, UK; Shopify</p>
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
              <p style={{ fontSize: '12px', color: 'var(--n400)' }}>Same audit doc, same Shopify theme. Liquid fixes; canonical tags, collection templates, faceted nav; happen in the same week as the recommendation.</p>
            </div>
            <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontSize: '18px', marginBottom: '8px' }}>📅</div>
              <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink)', marginBottom: '4px' }}>Earn every month</p>
              <p style={{ fontSize: '12px', color: 'var(--n400)' }}>Month-to-month contracts only. We work on what moves organic revenue; not what fills a retainer hours budget.</p>
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
          <p style={{ fontSize: '14px', color: 'var(--ink)', fontWeight: '500', lineHeight: '1.6' }}>"Returns on your time; that's what I hold every Shopify SEO engagement to. If the audit doesn't find real technical problems we can fix in week one, we'll tell you that on the discovery call."</p>
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
  10. WHY FACTORYJET; Second dark section
════════════════════════════════════════════════ */}
<section className="dark-sec">
  <div className="wrap">
    <div style={{ maxWidth: '700px', margin: '0 auto 56px', textAlign: 'center' }}>
      <span className="eyebrow">WHY FACTORYJET FOR SHOPIFY SEO</span>
      <h2 style={{ marginTop: '12px' }}>Three reasons UK Shopify stores choose FactoryJet; and keep choosing us month after month</h2>
    </div>
    <div className="col-3">
      <div className="dark-card">
        <span style={{ fontSize: '28px', marginBottom: '16px', display: 'block' }}>🔧</span>
        <h3 style={{ color: '#fff', marginBottom: '12px' }}>Shopify-native development in the same team</h3>
        <p>When our SEO audit finds that your Shopify theme is rendering collection description content below 200 product images, we don't write a recommendation; we fix it. Our Shopify developers work from the same technical audit as our SEO team. Shopify SEO fixes that require Liquid code changes happen in the same week. No separate project. No separate agency. No separate invoice.</p>
      </div>
      <div className="dark-card">
        <span style={{ fontSize: '28px', marginBottom: '16px', display: 'block' }}>📊</span>
        <h3 style={{ color: '#fff', marginBottom: '12px' }}>GSC-first reporting; organic revenue, not rank tracker positions</h3>
        <p>Every monthly Shopify SEO report from FactoryJet opens with Google Search Console organic revenue data, not a third-party rank tracker screenshot. We track: organic sessions from GSC, organic revenue from GA4, organic conversion rate, and organic share of total store revenue. If we can't show organic revenue growth, we've failed; and we say so plainly.</p>
      </div>
      <div className="dark-card">
        <span style={{ fontSize: '28px', marginBottom: '16px', display: 'block' }}>🏆</span>
        <h3 style={{ color: '#fff', marginBottom: '12px' }}>10+ years of Shopify SEO; 12 years of web expertise</h3>
        <p>FactoryJet has been a dedicated Shopify agency for over a decade, tracking every SEO-relevant platform change from classic themes through Online Store 2.0 to Hydrogen and Headless. That depth of Shopify-specific experience matters when you need advice on what actually survives the next core algorithm update.</p>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  11. FAQ
════════════════════════════════════════════════ */}
<section id="faq" className="sec-lg" style={{ background: 'var(--white)' }}>
  <div className="wrap">
    <div style={{ maxWidth: '640px' }}>
      <p className="eyebrow">SHOPIFY SEO FAQ</p>
      <h2 style={{ marginTop: '12px' }}>Questions UK Shopify store owners ask before starting</h2>
      <p className="lead" style={{ marginTop: '16px' }}>20 questions from UK Shopify store owners answered; including the technical ones most SEO agencies cannot answer because they do not have Liquid developers in-house.</p>
    </div>

    {/* Mobile pill nav */}
    <nav className="faq-pill-nav" aria-label="FAQ categories">
      <a href="#faq-shopify">Shopify <span className="pill-count">4</span></a>
      <a href="#faq-process">Process <span className="pill-count">4</span></a>
      <a href="#faq-pricing">Pricing <span className="pill-count">4</span></a>
      <a href="#faq-technical">Technical <span className="pill-count">4</span></a>
      <a href="#faq-terms">Key Terms <span className="pill-count">4</span></a>
    </nav>

    <div className="faq-grid">
      {/* Sidebar (desktop) */}
      <aside className="faq-sidebar" aria-label="FAQ navigation">
        <span className="faq-sidebar-topics">Topics</span>
        <nav className="faq-sidebar-nav">
          <a href="#faq-shopify">SHOPIFY-SPECIFIC <span className="faq-nav-count">4</span></a>
          <a href="#faq-process">PROCESS & TIMELINE <span className="faq-nav-count">4</span></a>
          <a href="#faq-pricing">PRICING & CONTRACTS <span className="faq-nav-count">4</span></a>
          <a href="#faq-technical">TECHNICAL DEEP DIVE <span className="faq-nav-count">4</span></a>
          <a href="#faq-terms">KEY SEO TERMS <span className="faq-nav-count">4</span></a>
        </nav>
        <div className="faq-sidebar-cta">
          <a href={CALENDLY}>Can&#8217;t find it? Talk to the founder &#8594;</a>
          <p>20 questions answered</p>
        </div>
      </aside>

      {/* Accordion */}
      <div>
        <div id="faq-shopify" style={{ marginBottom: '40px', scrollMarginTop: '112px' }}>
          <div className="faq-cat-header">
            <div className="faq-cat-bar"></div>
            <p className="faq-cat-label">SHOPIFY-SPECIFIC</p>
          </div>
          <details className="faq-item">
            <summary>
              <span className="q-text">Why is Shopify SEO different from other platforms?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Shopify has several SEO characteristics unique to the platform that generic SEO agencies often mishandle. The most significant: Shopify&#8217;s URL structure creates duplicate product pages for every collection a product belongs to (/products/slug AND /collections/collection-name/products/slug). Shopify&#8217;s Liquid templating language controls how content is rendered; and many themes render important SEO content (collection descriptions, FAQs, structured data) in ways that reduce its crawlability or weighting. Shopify&#8217;s faceted navigation generates thin filter combination pages that waste crawl budget. And Shopify&#8217;s sitemap generation can include pages you do not want indexed. These are all fixable; but they require understanding Liquid, not just generic SEO tools.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">What is the Shopify duplicate URL problem and how does FactoryJet fix it?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Shopify creates two crawlable URLs for every product: /products/your-product-slug (the product&#8217;s permanent URL) and /collections/your-collection-name/products/your-product-slug (the product URL within a specific collection). If a product belongs to 5 collections, Shopify creates 6 crawlable versions of the same product page. Unless your theme implements canonical tags correctly in Liquid, Google sees these as 6 different pages competing against each other and diluting link equity. FactoryJet audits the canonical tag implementation in your Shopify theme, ensures all collection-scoped product URLs have a canonical pointing to /products/slug, and removes duplicate product URLs from your sitemap.xml. For large stores, this can recover 40&#8211;70% of wasted crawl budget.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">Does Shopify&#8217;s native SEO cover what I need, or do I need a separate agency?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Shopify&#8217;s native SEO features; editable meta titles and descriptions, auto-generated sitemaps, the 301 redirect manager, and alt text on product images; cover the basics. They do not handle: canonical tag strategy for duplicate product URLs, faceted navigation crawl budget management, above-the-fold collection page content, schema markup beyond basic Product schema, Core Web Vitals optimisation at the theme code level, or link building. For UK Shopify stores that want to rank competitively on commercial category terms, Shopify&#8217;s native features are necessary but not sufficient. FactoryJet layers a full SEO strategy on top of Shopify&#8217;s native functionality.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">Can FactoryJet do Shopify SEO for Shopify Plus stores?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Yes. Shopify Plus SEO has specific advantages and requirements. Shopify Plus gives you access to the checkout.liquid file (useful for conversion rate optimisation and tracking), more control over URL structure and canonical behaviour, and better support for internationalisation through Shopify Markets. For UK Shopify Plus brands, we handle B2B ecommerce SEO (separate B2B store SEO, wholesale category pages), international hreflang if expanding beyond UK, and enterprise-scale crawl budget management for stores with 10,000-plus SKUs. Shopify Plus SEO is a larger engagement by default; the stores are more complex, the keyword opportunities are bigger, and the technical debt from rapid growth is typically higher.</p></div>
          </details>
        </div>

        <div id="faq-process" style={{ marginBottom: '40px', scrollMarginTop: '112px' }}>
          <div className="faq-cat-header">
            <div className="faq-cat-bar"></div>
            <p className="faq-cat-label">PROCESS & TIMELINE</p>
          </div>
          <details className="faq-item">
            <summary>
              <span className="q-text">What happens in the first month of a Shopify SEO engagement?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Month 1 is the technical audit and quick wins. We crawl your Shopify store with Screaming Frog, pull your Google Search Console data (impressions, clicks, coverage, Core Web Vitals), and analyse your sitemap.xml. We identify: (1) duplicate URL issues and their scale; (2) faceted navigation pages consuming crawl budget; (3) Core Web Vitals status on your top pages; (4) collection pages with no above-the-fold content; (5) schema markup gaps; and (6) high-impression/zero-click opportunities in your GSC data. We then deliver a prioritised Liquid fix list and start implementing. First ranking improvements typically appear 6&#8211;8 weeks after technical fixes go live.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">How does FactoryJet handle a Shopify migration from WooCommerce or Magento?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>A Shopify migration handled without SEO continuity planning typically causes 30&#8211;60% organic traffic loss for 3&#8211;6 months. The most common reasons: URL changes without correct 301 redirects, product page URLs that changed but were not redirected, product images that lost alt text, and collection page content that did not migrate. FactoryJet migration SEO includes: (1) pre-migration URL inventory of all indexed pages; (2) redirect mapping from old URL structure to Shopify URL structure; (3) 301 redirect implementation in Shopify and verification; (4) post-migration GSC monitoring for indexing errors; and (5) schema markup rebuild on the new Shopify theme. We work on migration SEO as part of the development project, not as a separate engagement after traffic has already dropped.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">How long does Shopify SEO take to produce results?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Shopify technical SEO fixes; canonical tags, crawl budget management, Core Web Vitals; typically produce first ranking improvements in 6&#8211;8 weeks, as Google recrawls and reindexes your corrected pages. Collection page content additions typically show position improvements in 2&#8211;3 months. Competitive commercial terms for UK Shopify stores typically reach page 1 in 4&#8211;6 months depending on starting position, domain authority, and competition. Organic revenue growth that outpaces paid channels for UK Shopify stores typically happens in months 6&#8211;9. SEO compounds; months 9&#8211;12 typically produce better returns than months 1&#8211;6 from the same monthly investment.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">How do you report on Shopify SEO progress month to month?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Monthly reporting covers: organic sessions and organic revenue from Google Search Console and GA4 (with correct ecommerce event tracking); keyword position movements for the priority collection and product page terms we are targeting; Core Web Vitals status on your top pages; technical issues fixed in the month; and the work planned for next month with rationale. We report on organic revenue as the primary metric, not rank tracker positions, because position 3 in Google does not pay your Shopify subscription. Reports are delivered in Google Slides or Notion, with a monthly video call to walk through the data and answer questions. If something unexpected happens in GSC coverage or organic traffic, we flag it between report cycles.</p></div>
          </details>
        </div>

        <div id="faq-pricing" style={{ marginBottom: '40px', scrollMarginTop: '112px' }}>
          <div className="faq-cat-header">
            <div className="faq-cat-bar"></div>
            <p className="faq-cat-label">PRICING & CONTRACTS</p>
          </div>
          <details className="faq-item">
            <summary>
              <span className="q-text">How much does Shopify SEO cost in the UK?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>FactoryJet prices Shopify SEO engagements after the free technical audit call, not before. We quote based on: the technical complexity of your Shopify store, the size of your product catalogue and number of collections, your organic baseline, and the competitive landscape for your category keywords in the UK. We do not publish pricing because Shopify SEO scope varies too significantly between stores for a pricing table to be honest. We are competitive in the UK market; we will tell you the number on the discovery call. Ask us.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">Do you offer month-to-month Shopify SEO contracts?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>All FactoryJet Shopify SEO engagements are month-to-month with no annual lock-in. We do not use long contracts because we believe they create the wrong incentives for both sides. We have seen UK Shopify brands trapped in 12-month SEO contracts with agencies that stopped producing results in month 3. Month-to-month contracts mean we have to earn the next month. That alignment of incentives is why we prioritise work that will move organic revenue in the current month, not work that fills a contracted hours budget while producing little.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">What is included in a FactoryJet Shopify SEO monthly retainer?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>A Shopify SEO retainer with FactoryJet includes: a defined number of Liquid development hours per month for implementing SEO fixes directly in your theme (canonical edits, schema markup, collection template content, pagination handling); content work (collection page descriptions, FAQ schema content, meta titles and descriptions); monthly reporting with GSC, GA4, and Core Web Vitals data; link building outreach at larger engagement tiers; and access to the same Shopify developer who built or audited your store. Month 1 is always the full technical audit. Months 2 onwards are implementation and iteration. We scope the retainer based on your store size and the volume of priority collection pages, which is why we quote after the audit call.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">Is there a minimum engagement period for Shopify SEO?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>No. All FactoryJet Shopify SEO engagements are month-to-month from day one. There is no minimum commitment, no cancellation fee, and no lock-in period. The only caveat: some technical work started in month 1 takes 2&#8211;3 months to produce visible results in GSC because Google needs time to recrawl and reindex the pages we change. If you cancel after month 1, you keep all the technical fixes and audit documentation we have delivered. We tell every new client this upfront so that expectations are correct. Month-to-month means you control the relationship; we have to earn the next month, every month.</p></div>
          </details>
        </div>

        <div id="faq-technical" style={{ marginBottom: '40px', scrollMarginTop: '112px' }}>
          <div className="faq-cat-header">
            <div className="faq-cat-bar"></div>
            <p className="faq-cat-label">TECHNICAL DEEP DIVE</p>
          </div>
          <details className="faq-item">
            <summary>
              <span className="q-text">How does FactoryJet optimise Shopify collection pages for UK search?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Collection page optimisation is the highest-impact SEO work for UK Shopify stores, because collection pages rank for the highest-volume commercial queries (&#8220;women&#8217;s trainers UK&#8221;, &#8220;leather sofas online UK&#8221;). FactoryJet&#8217;s approach: we edit your collection Liquid template to add an above-the-fold content block that renders before the product grid, containing an H1 with the primary keyword, 150&#8211;200 words of unique collection-specific content, and a structured FAQ block targeting informational queries in the category. We also add BreadcrumbList schema and ensure the collection URL appears correctly in your sitemap.xml. The content is written for UK search intent, not generic copy. Each collection page gets a unique content brief before we write it.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">What is faceted navigation and how does it affect Shopify SEO?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Faceted navigation is the filtering system on collection pages; typically colour, size, price range, and brand filters. When a shopper filters a collection, Shopify generates a new URL (/collections/trainers?filter.p.m.colour=red) with a thin filtered subset of the main collection. These filter URLs can number in the thousands for large catalogues, and if indexed, they dilute crawl budget and create thousands of thin content pages competing with your main collection pages. FactoryJet handles faceted navigation by: auditing which filter URLs are currently indexed in GSC; ensuring filter URLs carry a noindex tag or a canonical pointing back to the main collection; and where filter combinations have genuine search volume (e.g. &#8220;red women&#8217;s trainers UK&#8221;), building dedicated collection pages instead of relying on filter URLs. This is one of the fastest ways to recover crawl budget on UK Shopify stores with large catalogues.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">How do you handle Shopify schema markup for UK Google Search?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>FactoryJet implements four schema types as standard on every Shopify SEO engagement. Product schema with price, availability, and review aggregation on all product pages (required for Google Shopping rich results and AI product recommendations). FAQPage schema on collection pages, targeting informational UK search queries within the category. BreadcrumbList schema on collection and product pages so your site hierarchy displays correctly in UK Google SERPs. Organization schema on the homepage with UK address and contact details. All schema is added via Liquid theme edits (not apps), validated through Google&#8217;s Rich Results Test, and monitored in Google Search Console&#8217;s Rich Results report. We do not use third-party schema apps because they add script-loading overhead that slows your store.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">What Core Web Vitals improvements can I expect on my Shopify store?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Shopify stores on off-the-shelf themes often fail Core Web Vitals on mobile, primarily on LCP (hero image loading too slowly) and CLS (fonts causing layout shift on load). FactoryJet achieves passing Core Web Vitals scores: LCP under 2.5s, INP under 200ms, CLS under 0.1; through hero image preloading with fetchPriority="high" in the Liquid theme head; font-display:swap to prevent flash of invisible text on font load; explicit width and height attributes on all above-the-fold images to reserve layout space before the image loads; and removing or deferring non-critical third-party scripts. We test on PageSpeed Insights mobile throttling, which reflects real Chrome UX field data. Passing Core Web Vitals is a direct Google ranking factor; and faster stores convert better.</p></div>
          </details>
        </div>

        <div id="faq-terms" style={{ scrollMarginTop: '112px' }}>
          <div className="faq-cat-header">
            <div className="faq-cat-bar"></div>
            <p className="faq-cat-label">KEY SEO TERMS</p>
          </div>
          <details className="faq-item">
            <summary>
              <span className="q-text">What is Shopify SEO and why does it matter for UK stores?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Shopify SEO is the practice of optimising a Shopify store so that it ranks in Google for commercial search queries UK shoppers use when looking for products. Shopify SEO combines technical SEO (fixing crawlability and indexing issues specific to Shopify&#8217;s platform architecture), on-page SEO (optimising collection pages, product pages, and metadata for target keywords), and off-page SEO (building domain authority through UK editorial link building). For UK Shopify stores, SEO matters because Google Ads CPCs for ecommerce categories in the UK have increased 61% since 2020; meaning paid acquisition becomes more expensive every year. Organic search, done correctly, is the only customer acquisition channel that gets cheaper and compounds over time.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">Who are the best Shopify SEO agencies in the UK?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>For UK Shopify stores that need technical SEO handled by developers with native Shopify expertise; not just generic SEO recommendations that require a separate Liquid developer to implement; FactoryJet is a strong choice. Other UK Shopify SEO options include Blink SEO, Edge45, and several larger UK digital agencies that offer Shopify SEO as part of broader services. What separates agencies: whether they can edit Liquid themselves, whether they report on organic revenue or rank tracker positions, and whether they offer month-to-month or require annual commitments. Ask every Shopify SEO company UK you speak to those three questions.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">What is the difference between Shopify SEO and ecommerce SEO?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Ecommerce SEO applies to any ecommerce platform; Shopify, WooCommerce, Magento, BigCommerce, custom. The principles are the same: technical crawlability, category page optimisation, product page targeting, link building, and content strategy. Shopify SEO refers specifically to ecommerce SEO applied to Shopify stores; with attention to Shopify-specific technical issues (Liquid canonical tag handling, /collections/ duplicate URLs, faceted navigation, sitemap.xml generation). If your store is on Shopify, Shopify SEO is the correct frame; because generic ecommerce SEO advice often does not account for Shopify&#8217;s specific platform behaviour and may give you technically incorrect guidance.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">What is link building and does FactoryJet do it for Shopify stores?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Link building is the practice of acquiring editorial links from other websites to your Shopify store, which increases your domain authority and helps your collection and product pages rank for competitive UK commercial terms. FactoryJet offers link building as a component of Shopify SEO retainers above a certain monthly engagement size. Our approach is UK editorial outreach: identifying relevant UK press, trade publications, and review sites in your product category; pitching data-led content, product reviews, or expert commentary to earn links rather than buying them; and monitoring new link acquisition alongside GSC authority signal changes. We do not use private blog networks, directory submissions, or link exchanges. For smaller engagements where link building is not in scope, we focus on technical and on-page work first, because that is where the fastest ranking improvements come from.</p></div>
          </details>
        </div>
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
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
      <a href="/uk/london" className="city-pill">London</a>
      <a href="/uk/manchester" className="city-pill">Manchester</a>
      <a href="/uk/birmingham" className="city-pill">Birmingham</a>
      <a href="/uk/leeds" className="city-pill">Leeds</a>
      <a href="/uk/bristol" className="city-pill">Bristol</a>
      <a href="/uk/sheffield" className="city-pill">Sheffield</a>
      <a href="/uk/liverpool" className="city-pill">Liverpool</a>
      <a href="/uk/edinburgh" className="city-pill">Edinburgh</a>
      <a href="/uk/glasgow" className="city-pill">Glasgow</a>
      <a href="/uk/nottingham" className="city-pill">Nottingham</a>
    </div>
    <h3 style={{ fontSize: '16px', marginBottom: '16px' }}>Related Services</h3>
    <div className="col-3">
      <a href="/uk/ecommerce-seo" className="blog-card">
        <p>Ecommerce SEO Agency UK; revenue-focused SEO for all UK ecommerce platforms →</p>
      </a>
      <a href="/uk/shopify-development" className="blog-card">
        <p>Need a new Shopify store? See our Certified Shopify Development Partner services →</p>
      </a>
      <a href="/blog/shopify-seo-audit-guide-uk" className="blog-card">
        <p>How to Audit Your Shopify Store's SEO; UK Guide 2026</p>
      </a>
    </div>
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
    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,.35)', marginTop: '20px' }}>Month-to-month. No lock-in. In-house Shopify dev team. 500+ stores served.</p>
  </div>
</section>


        </main>
</div>
      <Footer />
    </>
  );
}
