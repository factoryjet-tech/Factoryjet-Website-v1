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

const URL = 'https://factoryjet.com/ecommerce-speed-calculator';
const TITLE = 'Ecommerce Speed Calculator: Mobile Conversion | FactoryJet';
const DESCRIPTION =
  'Free ecommerce speed calculator. Enter mobile load time, traffic, conversion rate and order value to estimate the revenue a faster store could add.';

// Freshness signal. Bump only when the page content actually changes.
const PAGE_MODIFIED = '2026-10-22';

/* Primary sources, each opened on 22 Oct 2026. */
const SRC_DELOITTE = 'https://www.deloitte.com/ie/en/services/consulting/research/milliseconds-make-millions.html';
const SRC_WEBDEV_IMPACT = 'https://web.dev/case-studies/vitals-business-impact';
const SRC_WEBDEV_VITALS = 'https://web.dev/articles/vitals';
const SRC_GOOGLE_SEARCH_CWV = 'https://developers.google.com/search/docs/appearance/core-web-vitals';
const SRC_LIGHTHOUSE_DOM = 'https://developer.chrome.com/docs/lighthouse/performance/dom-size';
const SRC_ADS_QS = 'https://support.google.com/google-ads/answer/6167118';

const LINK = { color: 'var(--pp-orange-dark)', fontWeight: 600, textDecoration: 'underline' } as const;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Ecommerce Speed Calculator | FactoryJet',
    description:
      'Free tool: estimate how much revenue a faster mobile store could add, from your traffic, conversion rate, order value and load time.',
    url: URL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Ecommerce Speed Calculator' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce Speed Calculator | FactoryJet',
    description: 'Estimate the revenue a faster mobile store could add. Free, instant, no sign-up needed to see the result.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─────────────────────────────────────────────
   FAQ DATA (drives the visible FAQ AND the FAQPage schema)
───────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'latency', label: 'Speed & Latency Economics' },
  { key: 'cwv', label: 'Core Web Vitals (LCP & INP)' },
  { key: 'headless', label: 'Headless & Edge Speed' },
  { key: 'remediation', label: 'Remediation & Terms' },
];

const FAQ_ITEMS = [
  // Speed & Latency Economics
  {
    category: 'latency',
    question: 'How does mobile page speed affect ecommerce conversion rates?',
    answer:
      'Faster stores tend to convert more. A Deloitte study of brands in Europe and the US, run over four weeks, found that a 0.1 second gain in mobile site speed came with 8.4% more retail conversions and a 9.2% higher average order value. That is one study across many brands. Your own store may move more or less, so measure before and after any change.',
  },
  {
    category: 'latency',
    question: 'How does the calculator work out the conversion lift?',
    answer:
      'It takes the seconds you plan to cut from your mobile load time (LCP) and counts them in steps of 0.1 seconds. Each step adds 0.85% to your current conversion rate, and the total lift is capped at 65%. The model is a straight line with a ceiling. It does not use live data from your store, so the result is an estimate.',
  },
  {
    category: 'latency',
    question: 'What is the formula for estimating annual lost revenue?',
    answer:
      'Revenue today = monthly visitors × conversion rate × average order value × 12. Lift % = seconds cut × 10 × 0.85, up to a maximum of 65. Added revenue = revenue today × lift % ÷ 100. The calculator shows that added revenue as the amount a slow store is leaving on the table each year.',
  },
  {
    category: 'latency',
    question: 'Where does the 0.85% lift for every 0.1 seconds come from?',
    answer:
      'It is a FactoryJet planning number, not a measured result. We set it well below the 8.4% retail conversion gain Deloitte reported for a 0.1 second speed-up, because one study across many brands cannot predict what one store will see. If you have your own before-and-after or A/B test data, use that instead.',
  },
  {
    category: 'latency',
    question: 'What return can speed work bring?',
    answer:
      'Take the calculator defaults: 100,000 monthly visitors, a 1.8% conversion rate and a $95 average order value. That is $2,052,000 a year. Cutting LCP from 3.6 to 0.9 seconds is 27 steps of 0.1 seconds, so the lift is 27 × 0.85 = 22.95%. The calculator estimates about $471,000 more a year. That is the model output, not a promise.',
  },
  {
    category: 'latency',
    question: 'Why does a slow mobile page waste ad spend?',
    answer:
      'You pay for every ad click, even when the shopper leaves before the page loads. A slow page means fewer of those paid visitors ever see a product. Google Ads says landing page experience is one of three parts of Quality Score, and its help page describes it as how relevant and useful the page is. It does not publish a speed penalty.',
  },
  {
    category: 'latency',
    question: 'Does Google reward fast pages in search?',
    answer:
      'Google says good Core Web Vitals, along with other page experience signals, line up with what its core ranking systems seek to reward, and it recommends that site owners reach good scores. It does not say speed alone will lift your rankings. Helpful, relevant content still comes first. Fast pages help shoppers who arrive from any source.',
  },
  {
    category: 'latency',
    question: 'What does a 2% conversion rate mean?',
    answer:
      'It means 2 out of every 100 visits end in an order. With 50,000 visits a month at a 2% rate, you get 1,000 orders. At an $80 average order value, that is $80,000 a month. Small changes matter at scale: moving from 2% to 2.2% on the same traffic adds 100 orders a month.',
  },
  {
    category: 'latency',
    question: 'Is a 2.5% conversion rate good?',
    answer:
      'It depends on what you sell, your prices, where your traffic comes from and whether shoppers are on phones or desktops. A store selling low-cost repeat items will look different from a store selling furniture. The best comparison is your own store over time, split by device and traffic source. We do not quote a benchmark here without a source we can show you.',
  },
  {
    category: 'latency',
    question: 'How can I increase my ecommerce conversion rate?',
    answer:
      'Start with speed, because every other fix depends on the page loading. Then make product pages clear about price, delivery and returns. Show shipping costs early. Cut checkout steps and offer the payment methods your buyers expect. Test one change at a time so you know which one worked, and compare results by device.',
  },

  // Core Web Vitals
  {
    category: 'cwv',
    question: 'What is Largest Contentful Paint (LCP) and what is a good score?',
    answer:
      'LCP measures how long the largest thing in the first screen takes to show, usually the main product image or hero banner. Google rates LCP as good when it happens within 2.5 seconds of the page starting to load, measured at the 75th percentile of real visits on mobile and desktop.',
  },
  {
    category: 'cwv',
    question: 'What is Interaction to Next Paint (INP) and why did it replace FID?',
    answer:
      'INP measures how fast the page responds to taps, clicks and key presses during the whole visit, such as adding to cart or opening a filter. First Input Delay only measured the first tap. INP became a stable Core Web Vital in 2024 and replaced FID. Google rates 200 milliseconds or less as good.',
  },
  {
    category: 'cwv',
    question: 'How does Cumulative Layout Shift (CLS) cause accidental clicks and cart drops?',
    answer:
      'CLS measures how much the page jumps around while it loads. Late banners, images with no reserved space and font swaps push content down. If a shopper aims for Add to Cart and the button moves, they tap the wrong thing and may give up. Google rates a CLS of 0.1 or less as good.',
  },
  {
    category: 'cwv',
    question: 'Why do third-party Shopify apps slow a store down?',
    answer:
      'Each popup, review widget and tracking tag usually loads its own JavaScript. That code competes for the same main thread the browser needs to draw the page and respond to taps. Apps that were removed often leave code behind in the theme. Checking what each app loads, and on which pages, is one of the quickest wins.',
  },
  {
    category: 'cwv',
    question: 'How does heavy JavaScript affect shoppers on phones?',
    answer:
      'Phones have slower processors than laptops. Large scripts take longer to download, parse and run, and while they run the page cannot respond. Shoppers feel this as taps that do nothing or menus that open late, which shows up as a poor INP score. Sending less JavaScript, and running it later, helps most on mid-range phones.',
  },
  {
    category: 'cwv',
    question: 'What is a healthy DOM size for an ecommerce product page?',
    answer:
      'Chrome’s Lighthouse documentation says it warns when the page body has more than about 800 nodes and flags an error above about 1,400. Big DOMs make layout and style work slower, which hurts scrolling and tap response. Long product grids, mega menus and repeated hidden markup are the usual causes on store pages.',
  },
  {
    category: 'cwv',
    question: 'How do I measure my store’s mobile speed?',
    answer:
      'Run your key pages through Google PageSpeed Insights. When your site has enough traffic it shows field data from real Chrome users, plus a lab test from Lighthouse. Use the field data for decisions, because it reflects real phones and networks. Test your home page, a collection page, a product page and the cart separately.',
  },
  {
    category: 'cwv',
    question: 'Is BigCommerce mobile speed different from Shopify?',
    answer:
      'The causes are the same on both: theme JavaScript, app scripts, large images and fonts. BigCommerce Stencil themes and Shopify Liquid themes both respond to the same fixes, such as trimming scripts, sizing images and reserving space for content. Measure your own pages with PageSpeed Insights rather than trusting a platform-wide claim.',
  },

  // Headless & Edge Speed
  {
    category: 'headless',
    question: 'How do resource hints like dns-prefetch, preconnect, and modulepreload speed up third-party assets?',
    answer:
      'Resource hints tell the browser to start connecting to important outside servers, such as a payment provider or image CDN, before the page asks for files from them. The DNS lookup and secure connection are then ready when needed. Use them only for a few origins that matter on first load, since each one costs some work.',
  },
  {
    category: 'headless',
    question: 'How does critical CSS reduce first contentful paint (FCP)?',
    answer:
      'Critical CSS means putting only the styles needed for the first screen straight into the HTML head. The browser can draw that screen without waiting for a full stylesheet to download. The rest of the CSS loads after, so it no longer blocks the first paint.',
  },
  {
    category: 'headless',
    question: 'What is a good WebP and AVIF image strategy for mobile catalogs?',
    answer:
      'Serve AVIF or WebP versions in several sizes using picture and srcset, so each phone downloads only the size it needs. Give the main hero or product image a high fetch priority and do not lazy load it. Lazy load the images further down the page, and always set width and height so the layout does not jump.',
  },
  {
    category: 'headless',
    question: 'Why can headless Next.js stores render faster than Liquid themes?',
    answer:
      'A headless store can pre-build pages as HTML and serve them from a CDN close to the shopper, and React Server Components send less JavaScript to the phone. That can make pages faster, but it is not automatic. A headless store with heavy scripts can still be slow, and it costs more to build and run than a theme.',
  },
  {
    category: 'headless',
    question: 'Can a Shopify Liquid theme reach good LCP without going headless?',
    answer:
      'Often, yes. Most slow Liquid stores are held back by app scripts, oversized images, unused theme code and late-loading fonts, and all of those can be fixed inside the theme. We check field data first. If the theme still cannot reach good Core Web Vitals after those fixes, that is when a rebuild is worth pricing.',
  },
  {
    category: 'headless',
    question: 'How does edge caching handle dynamic pricing, inventory, and cart states?',
    answer:
      'The page layout and product content can be cached at the edge and served fast to everyone. Things that change per shopper or per minute, such as stock counts, prices for logged-in buyers and the cart, load separately in small requests after the page shows. That keeps the first screen fast without showing stale data.',
  },

  // Remediation & Guarantees
  {
    category: 'remediation',
    question: 'Why choose FactoryJet for ecommerce speed work?',
    answer:
      'FactoryJet was founded in 2014 and has served 500+ businesses, with 97% on-time delivery. We are a registered Shopify Partner. We fix the code that slows a store, instead of adding another speed app on top. Every phase has a fixed price quoted in writing after scoping, and we measure field data before and after.',
  },
  {
    category: 'remediation',
    question: 'What is included in a FactoryJet speed optimization project?',
    answer:
      'A typical project covers an audit of every app and tracking script, image and font fixes, critical CSS, layout shift fixes, caching setup and a before-and-after report using real-user data. The exact list depends on what the audit finds, and it is written into the quote before work starts. Defect cover is included for a stated period.',
  },
  {
    category: 'remediation',
    question: 'How long does an ecommerce speed project take?',
    answer:
      'A speed fix on an existing store is scoped after the audit, and the timeline is written into the quote. If the audit shows a rebuild is the better route, our build timelines are 3 to 5 weeks for a custom-theme store, 5 to 8 weeks for stores with subscriptions, B2B or a migration, and 8 to 14 weeks for headless or custom builds.',
  },
  {
    category: 'remediation',
    question: 'How do I book a performance call with the founder?',
    answer:
      'Book a 30-minute call with founder Bhavesh Barot using the button on this page. Send your store address first if you can. We look at your real-user Chrome data, point out what slows the page down, and follow up with a fixed price per phase in writing. There is no monthly minimum.',
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

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${URL}#webpage`,
  url: URL,
  name: TITLE,
  description: DESCRIPTION,
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  about: { '@id': `${URL}#app` },
};

const WEBAPP_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  '@id': `${URL}#app`,
  name: 'Ecommerce Speed and Conversion Calculator',
  url: URL,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  description:
    'Free calculator that estimates the extra annual revenue a faster mobile store could earn, from monthly visitors, conversion rate, average order value and the planned cut in mobile load time (LCP).',
  dateModified: PAGE_MODIFIED,
  provider: { '@id': 'https://factoryjet.com/#organization' },
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
    { '@type': 'ListItem', position: 2, name: 'Speed Calculator', item: URL },
  ],
};

const STATS = [
  { b: '+8.4%', s: 'retail conversions after a 0.1s mobile speed gain (Deloitte)' },
  { b: '2.5s', s: 'Google’s “good” LCP limit, at the 75th percentile' },
  { b: '200ms', s: 'Google’s “good” INP limit for tap response' },
  { b: '500+', s: 'businesses served since 2014' },
];

const SOURCED = [
  {
    v: '+8.4%',
    d: 'more retail conversions, and a 9.2% higher average order value, after a 0.1 second mobile site speed gain, in a four-week study of brands in Europe and the US.',
    src: 'Deloitte, Milliseconds Make Millions (read 22 Oct 2026)',
    href: SRC_DELOITTE,
  },
  {
    v: '+16.9%',
    d: 'mobile conversion rate at Lazada, which saw a 3x LCP improvement, as reported in Google’s web.dev case study round-up.',
    src: 'web.dev, Core Web Vitals business impact (read 22 Oct 2026)',
    href: SRC_WEBDEV_IMPACT,
  },
  {
    v: '+6%',
    d: 'revenue uplift in Cdiscount’s Black Friday sale after it improved all three Core Web Vitals, per the same web.dev round-up.',
    src: 'web.dev, Core Web Vitals business impact (read 22 Oct 2026)',
    href: SRC_WEBDEV_IMPACT,
  },
];

const SLOWDOWNS = [
  'App and tracking scripts that load on every page, including code left behind by apps you removed.',
  'Hero and product images sent at full size to small phone screens, or in old formats.',
  'Theme JavaScript that blocks the page from drawing or from responding to taps.',
  'Web fonts that load late and make text jump.',
  'Banners, reviews and images with no reserved space, which push content down as they load.',
  'Slow server response, so the browser waits before it can start on anything.',
];

const HOW_TO = [
  'Run your product page through Google PageSpeed Insights and note the mobile LCP from real-user data.',
  'Enter that LCP as your current load time, then set the target you want to reach.',
  'Add your monthly visitors, mobile conversion rate and average order value from your analytics.',
  'Read the estimated conversion lift and the added yearly revenue.',
  'Change one input at a time to see which number moves the result most.',
];

const PILLARS = [
  { i: '◈', t: '1. Largest Contentful Paint (LCP) within 2.5s', d: 'We inline critical above-the-fold CSS, give the hero image high fetch priority, and cut server response time.' },
  { i: '◇', t: '2. Interaction to Next Paint (INP) of 200ms or less', d: 'We break up long JavaScript tasks, move analytics off the main thread where possible, and keep add to cart and filters quick to respond.' },
  { i: '↯', t: '3. Cumulative Layout Shift (CLS) of 0.1 or less', d: 'We set image aspect ratios, reserve space for banners and reviews, and stop late font swaps from moving text.' },
  { i: '▤', t: '4. Third-Party Script & App Pruning', d: 'We check every installed tracking tag and widget, remove dead code from old apps, and delay scripts that are not needed on first load.' },
  { i: '⛓', t: '5. Edge CDN Caching & WebP/AVIF', d: 'We serve compressed, right-sized images and cached HTML from a CDN close to the shopper.' },
  { i: '⤢', t: '6. Headless Next.js When It Pays', d: 'For large catalogs that a theme cannot make fast enough, we build with React Server Components to send less JavaScript to the phone.' },
];

export default function EcommerceSpeedCalculatorPage() {
  return (
    <>
      <script id="speed-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="speed-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
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
                  This free calculator estimates the revenue a faster mobile store could add. Enter your monthly visitors,
                  conversion rate, average order value and current load time (LCP). It assumes 0.85% more conversions for
                  every 0.1 seconds you cut, capped at 65%, then adds that up over a year. Treat the result as an estimate,
                  not a promise.
                </p>
                <HeroInlineForm source="us_speed_calculator_hero" region="us" submitLabel="Get a Free Speed Audit" />
              </div>

              {/* Visual Graphic */}
              <div
                role="img"
                aria-label="Diagram of the three Core Web Vitals with Google's good thresholds, plus edge caching, app script pruning and the calculator's conversion estimate."
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
                    Good: LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1
                  </small>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {[
                    { name: 'LCP Speed', desc: 'Good: 2.5s or less' },
                    { name: 'INP Response', desc: 'Good: 200ms or less' },
                    { name: 'CLS Stability', desc: 'Good: 0.1 or less' },
                    { name: 'Edge CDN', desc: 'Cloudflare / Vercel' },
                    { name: 'App Script Pruning', desc: 'Remove dead code' },
                    { name: 'Conversion Lift', desc: 'Estimated below' },
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
                  <div>Fixed Price Per Phase · No Monthly Minimum</div>
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
            <h2 style={{ marginTop: '10px' }}>How mobile load time affects revenue</h2>
            <div style={{ margin: '24px 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 12px 36px rgba(0,0,0,0.06)' }}>
              <Image
                src={`/images/us/marketplace/speed-calculator-section-phone-sand-timer.webp`}
                alt="A woman holding a phone that shows a shop page of coloured blocks while turning over a small orange sand timer on a white desk"
                width={1200}
                height={675}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                <strong>The Cost of Milliseconds:</strong> A shopper who waits for a page is a shopper who can leave. In{' '}
                <a href={SRC_DELOITTE} target="_blank" rel="noopener noreferrer" style={LINK}>
                  Deloitte&rsquo;s Milliseconds Make Millions study
                </a>{' '}
                (read 22 Oct 2026), a 0.1 second gain in mobile site speed came with 8.4% more retail conversions and a
                9.2% higher average order value. Slow server response, blocking scripts and heavy images all eat into that.
              </p>
              <p>
                Google sets the targets. Its{' '}
                <a href={SRC_WEBDEV_VITALS} target="_blank" rel="noopener noreferrer" style={LINK}>
                  Core Web Vitals guide
                </a>{' '}
                (read 22 Oct 2026) rates a page as good when LCP is 2.5 seconds or less, INP is 200 milliseconds or less and
                CLS is 0.1 or less, at the 75th percentile of real visits.{' '}
                <a href={SRC_GOOGLE_SEARCH_CWV} target="_blank" rel="noopener noreferrer" style={LINK}>
                  Google Search
                </a>{' '}
                (read 22 Oct 2026) says good scores line up with what its ranking systems seek to reward.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>What slows a store down</h3>
              <ul>
                {SLOWDOWNS.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>How to use the calculator</h3>
              <ol>
                {HOW_TO.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
              <p>
                <strong>What the calculator assumes:</strong> 0.85% more conversions for each 0.1 seconds of LCP you cut,
                capped at a 65% total lift. That is our planning number, not a measured result, and it is set well below
                the 8.4% Deloitte reported, because one study across many brands cannot predict one store. If you have your
                own test data, trust it over ours.
              </p>
              <p>
                FactoryJet fixes slow storefronts on Shopify Plus, WooCommerce, BigCommerce and headless Next.js by cutting
                third-party script bloat, sizing images properly and caching pages at the edge. We measure real-user data
                before and after, so you can see the change for yourself.
              </p>
              <p>
                Speed is one input to conversion, not the whole picture. Once your Core Web Vitals are fixed, the next question is what
                happens on the product page, in the cart, and at checkout. Our{' '}
                <a href="/services/ecommerce-cro-agency" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>
                  ecommerce CRO agency
                </a>{' '}
                services cover that full funnel, and our{' '}
                <a href="/services/ecommerce-growth-agency" style={LINK}>
                  ecommerce growth agency
                </a>{' '}
                team works on the traffic side. Selling on Amazon or Walmart too? Run the{' '}
                <a href="/marketplace-fee-calculator" style={LINK}>
                  marketplace fee calculator
                </a>{' '}
                to compare your margin per channel. And to see whether ChatGPT and Perplexity send shoppers your way at all,
                try the free{' '}
                <a href="/ai-visibility-checker" style={LINK}>
                  AI visibility checker
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ── Sourced Stats ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// verified industry benchmarks</p>
            <h2 style={{ marginTop: '10px' }}>What published studies found about speed and revenue</h2>
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
            <h2 style={{ marginTop: '10px' }}>How we make a store load faster</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '64ch' }}>
              From the first byte the server sends to the last image on the page, we work on each layer that slows a store down.
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
            <h2 style={{ marginTop: '10px' }}>FactoryJet Engineering vs. Speed Apps vs. Standard Agencies</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              Lasting Core Web Vitals gains usually come from changing the code that loads, not from adding another app on top.
            </p>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Performance Dimension</th>
                    <th>FactoryJet</th>
                    <th>Third-Party Speed Apps</th>
                    <th>Standard Creative Agency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="me">
                    <td className="name">Remediation Method</td>
                    <td>Code refactoring &amp; script pruning</td>
                    <td>Adds its own script on top of the theme</td>
                    <td>Often image compression only</td>
                  </tr>
                  <tr>
                    <td className="name">How Results Are Shown</td>
                    <td>Real-user Core Web Vitals, before and after</td>
                    <td>Usually a lab score inside the app</td>
                    <td>Often not measured</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Interaction to Next Paint (INP)</td>
                    <td>Long tasks split up, scripts moved off the main thread</td>
                    <td>Extra script can make INP worse</td>
                    <td>Often not measured</td>
                  </tr>
                  <tr>
                    <td className="name">App Script Governance</td>
                    <td>Full audit &amp; dead code removal</td>
                    <td>Cannot remove other apps&rsquo; scripts</td>
                    <td>Often leaves installed apps alone</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Pricing Model</td>
                    <td>Fixed price per phase, quoted in writing</td>
                    <td>Monthly app subscription</td>
                    <td>Often hourly billing</td>
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
                Getting a store to good Core Web Vitals usually means work across the whole delivery chain, from server to
                browser:
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>1. Edge-Side HTML Streaming and React Server Components</h3>
              <p>
                With Next.js React Server Components rendered close to the shopper, data fetching happens near the user and
                the first HTML streams to the browser early. That cuts Time to First Byte (TTFB), which every other metric waits on.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>2. Third-Party Script Sandboxing &amp; Web Worker Offloading</h3>
              <p>
                Some tracking pixels (Meta, TikTok, Google Tag Manager) can run in a Web Worker through Partytown, or load after
                the page is usable. That leaves the main thread free to handle taps and scrolling. Not every tag works in a worker,
                so we test each one.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>3. Font Preloading and Zero-CLS Layout Reservation</h3>
              <p>
                We self-host fonts, choose a font-display setting that avoids late swaps, and give images and banners fixed
                aspect ratios. Product grids stay lean too: Chrome&rsquo;s{' '}
                <a href={SRC_LIGHTHOUSE_DOM} target="_blank" rel="noopener noreferrer" style={LINK}>
                  Lighthouse DOM size guide
                </a>{' '}
                (read 22 Oct 2026) warns above about 800 body nodes and flags an error above about 1,400. On paid traffic, note
                that{' '}
                <a href={SRC_ADS_QS} target="_blank" rel="noopener noreferrer" style={LINK}>
                  Google Ads Quality Score
                </a>{' '}
                (read 22 Oct 2026) counts landing page experience, which Google describes as relevance and usefulness.
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
                <h2 style={{ margin: '12px 0 16px' }}>Want a faster mobile store?</h2>
                <p className="pp-lead" style={{ maxWidth: '44ch' }}>
                  We audit your store&rsquo;s Core Web Vitals with real-user data, find the scripts and assets that slow it
                  down, and send a fixed price per phase in writing.
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
