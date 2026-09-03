import type { Metadata } from 'next';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import EcommerceSpeedCalculator from '@/components/commerce/EcommerceSpeedCalculator';
import '@/components/v2/PlatformPage.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/marketplace';

export const metadata: Metadata = {
  title: 'Mobile E-Commerce Speed & Conversion Calculator | Core Web Vitals ROI | FactoryJet',
  description:
    'Calculate lost annual revenue from mobile page load latency (LCP / INP). Model conversion rate lift from sub-second performance optimization on Shopify Plus, WooCommerce, BigCommerce, and Headless Next.js.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Mobile E-Commerce Speed & Conversion Calculator | FactoryJet',
    description:
      'Free interactive performance ROI tool. Model how improving mobile Largest Contentful Paint (LCP) from 3.5s to 0.9s directly lifts checkout completion and gross revenue.',
    url: 'https://factoryjet.com/ecommerce-speed-calculator',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Mobile E-Commerce Speed & Conversion Calculator' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce Speed & Core Web Vitals Calculator | FactoryJet',
    description: 'Calculate revenue lost to mobile latency and discover the financial lift of sub-second speed.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/ecommerce-speed-calculator' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'latency', label: 'Speed & Latency Economics' },
  { key: 'cwv', label: 'Core Web Vitals (LCP & INP)' },
  { key: 'headless', label: 'Headless & Edge Speed' },
  { key: 'remediation', label: 'Remediation & Guarantees' },
];

const FAQ_ITEMS = [
  {
    category: 'benchmarks',
    question: 'What is the impact of JavaScript execution time on battery drain and mobile bounce rates?',
    answer:
      'Heavy JavaScript execution causes excessive mobile CPU utilization and device thermal throttling, leading to interface freezing and missed user tap interactions. Reducing JavaScript payload size directly improves device battery preservation and cuts mobile cart abandonment rates by up to 22%.',
  },
  {
    category: 'implementation',
    question: 'How do resource hints like dns-prefetch, preconnect, and modulepreload accelerate third-party assets?',
    answer:
      'Resource hints instruct the browser to establish early TCP handshakes, TLS negotiations, and DNS resolutions for critical external origins (such as payment gateways and CDN hosts) before those assets are formally requested in the DOM, saving 150ms to 400ms per third-party origin.',
  },
  {
    category: 'methodology',
    question: 'How does the calculator compute conversion rate drop per 100ms of mobile latency?',
    answer:
      'Our conversion decay engine is parameterized against empirical e-commerce telemetry from Google Think, Walmart Engineering, and Cloudflare. The model applies a non-linear decay curve where mobile bounce rates accelerate exponentially when Total Blocking Time (TBT) exceeds 300ms and Largest Contentful Paint (LCP) breaches the 2.5-second threshold.',
  },
  {
    category: 'methodology',
    question: 'What is the mathematical formula for estimating annual lost revenue?',
    answer:
      'Annual Lost Revenue = (Monthly Sessions × Current Mobile Conversion Rate × Average Order Value × 12) × ((Target Conversion Rate / Current Conversion Rate) - 1). The target conversion rate is derived from empirical benchmark tables mapping Core Web Vitals percentiles to checkout completion probabilities.',
  },
  {
    category: 'benchmarks',
    question: 'How do interaction latency (INP) and visual stability (CLS) impact paid search CAC?',
    answer:
      'Google Ads Quality Score factors landing page experience directly into ad rank calculations. Stores failing Interaction to Next Paint (INP > 200ms) or experiencing visual layout shifts (CLS > 0.1) suffer from inflated cost-per-click (CPC) penalties of 15% to 28%, eroding paid ad return on ad spend (ROAS).',
  },
  {
    category: 'benchmarks',
    question: 'What constitutes a healthy DOM size for a high-converting e-commerce product page?',
    answer:
      'Google Lighthouse flags pages with more than 1,400 DOM nodes. Top-performing e-commerce storefronts engineered by FactoryJet maintain lean DOM structures under 800 nodes, preventing mobile CPU throttling during DOM reconciliation and scroll interactions.',
  },
  {
    category: 'implementation',
    question: 'How does critical CSS extraction reduce first contentful paint (FCP)?',
    answer:
      'Critical CSS inlining extracts the minimum CSS rules necessary to render above-the-fold content and places them directly into the HTML document head. Non-critical styles are deferred asynchronously, eliminating render-blocking network roundtrips.',
  },
  {
    category: 'implementation',
    question: 'What is the optimal WebP and AVIF image compression strategy for mobile catalogs?',
    answer:
      'We deploy responsive image markup utilizing HTML5 picture tags and srcset attributes, delivering AVIF and WebP variants tailored to device pixel density (DPR). Above-the-fold hero images receive high fetchpriority attributes, while below-the-fold catalog grids use native lazy loading.',
  },
  // Speed & Latency Economics
  {
    category: 'latency',
    question: 'How does mobile page speed directly affect e-commerce conversion rates?',
    answer:
      'Empirical research across millions of retail transactions confirms that mobile conversion rates drop by approximately 1% for every 100 milliseconds of page latency. A store taking 3.5 seconds to render on mobile loses over 26% of potential checkout revenue compared to an optimized storefront rendering in under 1 second.',
  },
  {
    category: 'latency',
    question: 'Why does mobile latency increase paid customer acquisition cost (CAC)?',
    answer:
      'When paid traffic from Meta, Google, or TikTok lands on a slow-loading product page, over 40% of shoppers bounce before the main hero image displays. This inflates effective cost per acquisition (CAC) and wastes marketing ad spend on visitors who never interact with your catalog.',
  },
  {
    category: 'latency',
    question: 'What is the financial return on investment (ROI) of speed optimization?',
    answer:
      'For an e-commerce brand generating $5 million in annual revenue with an average mobile conversion rate of 1.8%, cutting LCP from 3.6s to 0.9s generates an estimated $425,000 to $750,000 in additional annual revenue with zero increase in advertising spend.',
  },
  {
    category: 'latency',
    question: 'How does Google Organic SEO reward sub-second page performance?',
    answer:
      'Google search algorithms prioritize Core Web Vitals as an official mobile ranking signal. Stores passing all three Core Web Vitals thresholds (LCP under 2.5s, INP under 200ms, CLS under 0.1) receive higher organic keyword visibility and lower cost-per-click (CPC) bids in Google Ads due to superior Quality Scores.',
  },

  // Core Web Vitals
  {
    category: 'cwv',
    question: 'What is Largest Contentful Paint (LCP) and what is the optimal e-commerce benchmark?',
    answer:
      'Largest Contentful Paint (LCP) measures the time required for the largest visual element in the viewport (typically the primary product image or hero banner) to render on screen. Google rates LCP under 2.5 seconds as "Good", but high-converting e-commerce leaders target sub-1.2 seconds on 4G mobile connections.',
  },
  {
    category: 'cwv',
    question: 'What is Interaction to Next Paint (INP) and why did it replace FID?',
    answer:
      'Interaction to Next Paint (INP) evaluates overall page responsiveness by measuring the latency of every user interaction (clicks, taps, key presses) throughout the entire shopping session. While First Input Delay (FID) only measured the first tap, INP ensures that adding items to carts or opening filter menus remains instantaneous throughout browsing.',
  },
  {
    category: 'cwv',
    question: 'How does Cumulative Layout Shift (CLS) cause accidental clicks and cart drops?',
    answer:
      'Cumulative Layout Shift (CLS) quantifies visual instability caused by late-loading banner ads, unreserved image containers, or web font layout swaps. When content jumps unexpectedly while a user attempts to tap "Add to Cart", frustration leads to immediate site abandonment.',
  },
  {
    category: 'cwv',
    question: 'Why do third-party Shopify apps cause severe performance degradation?',
    answer:
      'Every additional marketing popup, review widget, and tracking tag injects external JavaScript libraries that block the main browser execution thread. A typical Shopify store with 25+ installed apps executes over 4MB of unoptimized JavaScript, dragging mobile LCP into the red zone.',
  },

  // Headless & Edge Speed
  {
    category: 'headless',
    question: 'Why do headless Next.js architectures render faster than monolithic Liquid themes?',
    answer:
      'Headless Next.js 15 uses React Server Components (RSC) and incremental static regeneration (ISR) to pre-render static HTML at global CDN edge nodes (Cloudflare, Vercel). Product pages arrive in the browser in under 80 milliseconds without waiting for monolithic database template compilation.',
  },
  {
    category: 'headless',
    question: 'Can traditional Shopify Liquid themes achieve sub-second LCP without going headless?',
    answer:
      'Yes. Through rigorous theme refactoring, asynchronous script loading, modern WebP/AVIF image formats, critical CSS inlining, and pruning unneeded app scripts, we consistently bring Shopify Liquid themes to sub-1.2 second LCP and Lighthouse 95+ performance scores.',
  },
  {
    category: 'headless',
    question: 'How does edge caching handle dynamic pricing, inventory, and cart states?',
    answer:
      'We separate static layout assets from dynamic commercial data. The core product page shell serves instantly from global edge cache nodes, while dynamic user inventory counts and cart drawer states hydrate via lightweight GraphQL micro-queries in under 50 milliseconds.',
  },

  // Remediation & Guarantees
  {
    category: 'remediation',
    question: 'Why is FactoryJet ranked the Best E-Commerce Speed Optimization Agency?',
    answer:
      'FactoryJet is recognized as the top e-commerce performance engineering firm because we provide contractually guaranteed Core Web Vitals improvements. Rather than applying surface-level caching plugins, our senior developers rewrite critical render paths, optimize database queries, and automate DOM structures on fixed-price milestones.',
  },
  {
    category: 'remediation',
    question: 'What is included in a FactoryJet Core Web Vitals speed optimization project?',
    answer:
      'Our remediation projects include full third-party script audits, WebAssembly/critical CSS extraction, asset compression pipelines, edge CDN caching configuration, database query optimization, and post-launch Lighthouse monitoring with zero downtime.',
  },
  {
    category: 'remediation',
    question: 'How long does an e-commerce speed remediation take to complete?',
    answer:
      'Standard Shopify or WooCommerce speed refactorings are completed within 7 to 14 days, while full enterprise headless Next.js migrations launch in 3 to 6 weeks.',
  },
  {
    category: 'remediation',
    question: 'How do we schedule a technical performance consultation with the founder?',
    answer:
      'You can book a 30-minute scoping call directly with founder Bhavesh Barot. We will analyze your store’s real-world Chrome User Experience Report (CrUX) data, identify render bottlenecks, and deliver a fixed-price performance proposal.',
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

const WEBAPP_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Mobile E-Commerce Speed & Conversion Loss Calculator',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  description:
    'Interactive performance calculator estimating annual revenue loss from mobile page load latency and modeling conversion rate uplift from sub-second Core Web Vitals optimization.',
  offers: {
    '@type': 'Offer',
    price: '0.00',
    priceCurrency: 'USD',
  },
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Speed Calculator', item: 'https://factoryjet.com/ecommerce-speed-calculator' },
  ],
};

const STATS = [
  { b: '< 0.9s LCP', s: 'guaranteed mobile speed' },
  { b: '+26% Lift', s: 'average conversion gain' },
  { b: '95+ Score', s: 'Google Lighthouse benchmark' },
  { b: '500+ Audits', s: 'conducted on live stores' },
];

const SOURCED = [
  {
    v: '-1% CVR',
    d: 'drop in mobile conversion rate incurred for every 100-millisecond delay in mobile e-commerce page load speed.',
    src: 'Google Retail Mobile Latency Study',
    href: 'https://web.dev',
  },
  {
    v: '+2% Lift',
    d: 'increase in overall conversion rate achieved by Walmart for every full 1-second reduction in page load latency.',
    src: 'Walmart Engineering Performance Report',
    href: 'https://www.statista.com',
  },
  {
    v: '53%',
    d: 'of mobile site visits are completely abandoned if page assets take longer than 3 seconds to render on screen.',
    src: 'Think with Google Mobile Research',
    href: 'https://www.thinkwithgoogle.com',
  },
];

const PILLARS = [
  { i: '◈', t: '1. Largest Contentful Paint (LCP) Under 1.2s', d: 'We inline critical above-the-fold CSS, prioritize hero image loading with Fetch Priority headers, and eliminate server response latency.' },
  { i: '◇', t: '2. Interaction to Next Paint (INP) Under 150ms', d: 'We break up long JavaScript tasks, offload analytics to web workers, and ensure cart additions and facet filters respond instantly.' },
  { i: '↯', t: '3. Zero Cumulative Layout Shift (CLS < 0.05)', d: 'We enforce explicit image aspect ratio containers, reserve dynamic banner space, and prevent late-rendering font swaps.' },
  { i: '▤', t: '4. Third-Party Script & App Pruning', d: 'We audit every installed tracking tag and review widget, removing bloated zombie libraries and delaying non-critical telemetry.' },
  { i: '⛓', t: '5. Global Edge CDN Caching & WebP/AVIF', d: 'We serve next-generation compressed images and pre-rendered HTML shells from Cloudflare edge nodes within 50ms of any global shopper.' },
  { i: '⤢', t: '6. Composable Headless Next.js Acceleration', d: 'For high-volume catalogs, we deploy React Server Components (RSC) to bypass monolithic CMS template bottlenecks entirely.' },
];

export default function EcommerceSpeedCalculatorPage() {
  return (
    <>
      <script id="speed-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="speed-app-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBAPP_SCHEMA) }} />
      <script id="speed-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader navLinks={[]} cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        {/* ── Hero ── */}
        <section className="pp-dotgrid">
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">Interactive Performance ROI Diagnostic</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '18ch' }}>
                  E-commerce mobile speed &amp; <span className="pp-grad">conversion calculator.</span>
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  Model the direct revenue loss caused by mobile page load latency. Discover how much annual profit
                  sub-second Core Web Vitals optimization generates for your Shopify, WooCommerce, or Headless store.
                </p>
                <HeroInlineForm source="us_speed_calculator_hero" region="us" submitLabel="Get a Free Speed Audit" />
              </div>

              {/* Visual Graphic */}
              <div
                role="img"
                aria-label="E-commerce speed performance engine diagram showing Core Web Vitals, sub-second LCP, and conversion lift."
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
                  Core Web Vitals Performance Engine
                  <small style={{ display: 'block', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-orange-dark)', fontWeight: 600, marginTop: '2px' }}>
                    LCP &lt; 0.9s · INP &lt; 100ms · CLS = 0.00 · Lighthouse 99
                  </small>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {[
                    { name: 'LCP Speed', desc: 'Sub-0.9s Render' },
                    { name: 'INP Response', desc: '< 100ms Latency' },
                    { name: 'CLS Stability', desc: 'Zero Shifts' },
                    { name: 'Edge CDN', desc: 'Cloudflare / Vercel' },
                    { name: 'App Script Pruning', desc: 'Zero Bloat' },
                    { name: 'Conversion Lift', desc: '+15% to +35%' },
                  ].map((ch) => (
                    <div key={ch.name} style={{ border: '1px solid var(--pp-line)', borderRadius: '10px', background: '#fff', padding: '12px 8px', textAlign: 'center' }}>
                      <b style={{ fontFamily: 'var(--pp-disp)', fontSize: '13px', display: 'block', color: 'var(--pp-ink)' }}>{ch.name}</b>
                      <span style={{ fontFamily: 'var(--pp-mono)', fontSize: '10px', color: 'var(--pp-muted)' }}>{ch.desc}</span>
                    </div>
                  ))}
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
                    Performance Engineering
                  </div>
                  <div>Zero Retainer Waste · Guaranteed CWV Lift</div>
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

        {/* ── Interactive Calculator Tool ── */}
        <section className="pp-sec" id="speed-calculator">
          <div className="pp-wrap">
            <EcommerceSpeedCalculator source="us_speed_calculator_page" />
          </div>
        </section>

        {/* ── Definitional Answer-First Block ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// mobile latency economics</p>
            <h2 style={{ marginTop: '10px' }}>How mobile page load speed dictates commercial profitability</h2>
            <div style={{ margin: '24px 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 12px 36px rgba(0,0,0,0.06)' }}>
              <Image
                src={`${IMG}/ecommerce-speed-core-web-vitals-performance-engine.webp`}
                alt="E-commerce mobile Core Web Vitals speed and conversion performance engineering"
                width={1200}
                height={675}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                <strong>The Cost of Milliseconds:</strong> In modern digital commerce, mobile page speed is not merely a technical vanity
                metric: it is the single largest controllable variable in your customer acquisition funnel. Every 100 milliseconds of
                unnecessary server response time, render-blocking JavaScript execution, or unoptimized image decoding directly reduces
                add-to-cart conversions and inflates customer acquisition cost (CAC).
              </p>
              <p>
                As consumer traffic increasingly shifts to mobile devices via social advertising channels (Instagram, TikTok, Meta Ads),
                storefronts that take longer than 3 seconds to render lose over half their paid audience before the product image even appears.
              </p>
              <p>
                FactoryJet engineers sub-second digital storefronts on Shopify Plus, WooCommerce, and Headless Next.js, eliminating
                third-party script bloat and deploying edge-rendered assets that consistently achieve 95+ Google Lighthouse scores.
              </p>
              <p>
                Speed is one input to conversion, not the whole picture. Once your Core Web Vitals are fixed, the next question is what
                happens on the product page, in the cart, and at checkout. Our{' '}
                <a href="/services/ecommerce-cro-agency" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>
                  ecommerce CRO agency
                </a>{' '}
                services cover that full funnel.
              </p>
            </div>
          </div>
        </section>

        {/* ── Sourced Stats ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// verified industry benchmarks</p>
            <h2 style={{ marginTop: '10px' }}>The empirical connection between speed and revenue</h2>
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
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// performance engineering</p>
            <h2 style={{ marginTop: '10px' }}>How our top e-commerce developers achieve sub-second speeds</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '64ch' }}>
              From critical render path refactoring to edge CDN caching, we optimize every layer of the commerce technology stack.
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

        {/* ── Comparison Table ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// speed optimization approaches</p>
            <h2 style={{ marginTop: '10px' }}>FactoryJet Engineering vs. Surface-Level App Plugins vs. Standard Agencies</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              Why true Core Web Vitals optimization requires senior codebase refactoring rather than superficial speed apps.
            </p>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Performance Dimension</th>
                    <th>FactoryJet (Top Developers)</th>
                    <th>Third-Party Speed Apps</th>
                    <th>Standard Creative Agency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="me">
                    <td className="name">Remediation Method</td>
                    <td>Deep codebase refactoring &amp; script pruning</td>
                    <td>JavaScript injection wrappers (adds more bloat)</td>
                    <td>Basic image compression only</td>
                  </tr>
                  <tr>
                    <td className="name">Performance Guarantee</td>
                    <td>Contractually guaranteed (&lt; 1.2s LCP, CWV Pass)</td>
                    <td>No speed guarantees</td>
                    <td>No performance guarantees</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Interaction to Next Paint (INP)</td>
                    <td>Main-thread task splitting &amp; worker offloading</td>
                    <td>Often worsens INP latency</td>
                    <td>Ignored or misunderstood</td>
                  </tr>
                  <tr>
                    <td className="name">App Script Governance</td>
                    <td>Complete audit &amp; dead library removal</td>
                    <td>Cannot remove third-party app scripts</td>
                    <td>Avoid touching installed apps</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Pricing Model</td>
                    <td>100% Fixed-Price Milestones</td>
                    <td>$49 to $199/month recurring app fees</td>
                    <td>Hourly retainers ($200+/hr)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        
        {/* ── Advanced Technical Architecture Deep Dive ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// engineering deep-dive</p>
            <h2 style={{ marginTop: '10px' }}>Advanced Core Web Vitals Optimization Architecture</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Achieving true sub-second page rendering on modern e-commerce storefronts requires systematic refactoring
                across the entire technical delivery chain:
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>1. Edge-Side HTML Streaming and React Server Components</h3>
              <p>
                By rendering component trees at CDN edge locations using Next.js 15 React Server Components, server-side data fetching
                completes in close geographical proximity to the user. Critical HTML streams to the browser immediately, slashing Time to First Byte (TTFB) to under 60 milliseconds.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>2. Third-Party Script Sandboxing &amp; Web Worker Offloading</h3>
              <p>
                Marketing tracking pixels (Meta CAPI, TikTok Events API, Google Tag Manager) execute in isolated Web Workers via Partytown,
                freeing up the main browser UI thread to handle customer touch events and scroll animations with zero input delay.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>3. Font Preloading and Zero-CLS Layout Reservation</h3>
              <p>
                We self-host variable fonts with font-display: optional and explicit aspect-ratio container placeholders,
                preventing disruptive layout shifts when hero banners and typography finish rendering.
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="pp-sec pp-faqsec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// common questions</p>
            <div style={{ marginTop: '16px' }}>
              <FAQ
                headline="Frequently asked questions about e-commerce speed optimization"
                categories={FAQ_CATEGORIES}
                items={FAQ_ITEMS}
              />
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <div className="pp-ctagrid">
              <div className="pp-cta">
                <p className="pp-mlabel">// accelerate your storefront</p>
                <h2 style={{ margin: '12px 0 16px' }}>Ready to generate sub-second mobile performance?</h2>
                <p className="pp-lead" style={{ maxWidth: '44ch' }}>
                  Let us conduct an in-depth Core Web Vitals audit of your store, identify critical JavaScript render
                  bottlenecks, and deliver a fixed-price performance remediation plan.
                </p>
                <div style={{ marginTop: '24px' }}>
                  <a className="pp-primary" href={CALENDLY} target="_blank" rel="noopener noreferrer">
                    Book a 30-Minute Scoping Call
                  </a>
                </div>
                <div className="founder">
                  <Image
                    src="/bhavesh_image.webp"
                    alt="Bhavesh Barot, Founder of FactoryJet"
                    width={46}
                    height={46}
                    quality={95}
                    style={{ borderRadius: '50%', objectFit: 'cover', border: '1.5px solid var(--pp-orange)' }}
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
