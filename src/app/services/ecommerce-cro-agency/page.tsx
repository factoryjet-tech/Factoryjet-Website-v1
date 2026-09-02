import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import FAQ, { type FAQCategory, type FAQItem } from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const PAGE_MODIFIED = '2026-09-02';

export const metadata: Metadata = {
  title: 'Ecommerce CRO Agency & Shopify Optimization | FactoryJet',
  description:
    'Data-driven ecommerce CRO agency for US brands. Eliminate checkout drop-off, optimize PDPs, and lift revenue per session on Shopify Plus. Get an audit.',
  keywords: [
    'ecommerce conversion rate optimization agency',
    'shopify cro agency',
    'ecommerce cro services',
    'shopify conversion rate optimization',
    'conversion rate optimization agency usa',
    'ecommerce checkout optimization',
    'shopify plus cro audit',
    'revenue per session optimization',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Ecommerce CRO Agency & Shopify Optimization | FactoryJet',
    description:
      'Data-driven conversion rate optimization for US DTC and B2B brands. Eliminate checkout friction, accelerate page speed, and increase revenue per session on Shopify Plus.',
    url: 'https://factoryjet.com/services/ecommerce-cro-agency',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Ecommerce Conversion Rate Optimization Agency Services',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce CRO Agency & Shopify Optimization | FactoryJet',
    description:
      'Technical CRO for Shopify Plus: quantitative analytics, qualitative UX audits, sub-1.5s Core Web Vitals, and statistically validated A/B testing.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ecommerce-cro-agency',
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
   FAQ DATA
───────────────────────────────────────────────────────────────────────────── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'methodology', label: 'Audit & Testing Methodology' },
  { key: 'shopify', label: 'Shopify Plus & Checkout Extensibility' },
  { key: 'speed', label: 'Speed, CWV & Technical CRO' },
  { key: 'process', label: 'Engagement & Revenue Impact' },
  { key: 'playbooks', label: 'CRO Focus Areas & Playbooks' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'methodology',
    question: 'What is an ecommerce CRO agency and how does conversion rate optimization drive revenue?',
    answer:
      'An ecommerce CRO agency analyzes user behavior across your entire purchasing funnel: identifying points of friction on Product Detail Pages (PDPs), cart drawers, and checkout steps. By designing and engineering statistically rigorous A/B tests, we increase the percentage of site visitors who complete purchases, lifting revenue per session without increasing paid ad spend.',
  },
  {
    category: 'methodology',
    question: 'How do you identify conversion bottlenecks on our online store?',
    answer:
      'We combine quantitative GA4 funnel drop-off analytics, Heatmap scroll and click maps, qualitative session replay analysis, customer survey feedback, and technical Core Web Vitals speed audits to uncover exact friction points causing cart abandonment. Each data source flags a different kind of problem: analytics shows where visitors drop, replays show why, and speed audits catch friction analytics alone would miss entirely.',
  },
  {
    category: 'methodology',
    question: 'What sample size and traffic volume are required to run statistically valid A/B tests?',
    answer:
      'Stores generating 50,000 or more monthly unique visitors and 500+ monthly transactions can reliably run rapid A/B test iterations. For lower-volume stores, we execute high-conviction heuristic usability fixes and qualitative UX overhauls. These changes are grounded in Baymard Institute usability research and direct session-replay evidence rather than a formal split test, since a low-traffic store would need months to reach significance on any single change.',
  },
  {
    category: 'methodology',
    question: 'How do you ensure A/B test results are statistically significant?',
    answer:
      'Every experiment runs until achieving a minimum 95 percent statistical confidence level over at least two full business cycles (14 to 28 days), accounting for seasonal buying variations, day-of-week fluctuations, and sample ratio mismatches. We also check that traffic split evenly between variants before trusting a result, since a skewed split is one of the most common causes of a false-positive test.',
  },
  {
    category: 'shopify',
    question: 'How do you optimize the checkout experience on Shopify Plus?',
    answer:
      "We utilize Shopify Checkout Extensibility to deploy custom checkout UI extensions: 1-click address autocomplete, custom order notes, dynamic delivery date selectors, gift messaging, upsell recommendations, and trust badges within the native checkout flow. Because extensions run inside Shopify's own checkout rather than a redirect to a third-party page, they inherit Shop Pay's PCI compliance and load speed automatically.",
  },
  {
    category: 'shopify',
    question: 'How does Shop Pay integration impact mobile conversion rates?',
    answer:
      'Shop Pay delivers an average 50 percent higher conversion rate than standard guest checkouts by enabling 1-click biometric payments for over 150 million registered US shoppers, eliminating manual address and credit card entry. We configure Shop Pay as the default option for returning devices on mobile, since re-entering a card number on a phone keyboard is one of the largest sources of checkout abandonment.',
  },
  {
    category: 'shopify',
    question: 'How do you optimize Product Detail Pages (PDPs) for higher Add-to-Cart rates?',
    answer:
      'We restructure PDP visual hierarchy: moving pricing, variant selectors, and the primary Add-to-Cart button above the mobile fold, integrating sticky buy bars on scroll, embedding verified review snippets, and providing transparent shipping estimates. Every layout change is validated against add-to-cart rate and revenue per visitor in a live test before it ships permanently, rather than shipped on visual preference alone.',
  },
  {
    category: 'shopify',
    question: 'Can you implement custom in-cart upsells and tiered discount progress bars?',
    answer:
      'Yes. We build custom slide-out AJAX cart drawers featuring dynamic free shipping threshold meters, 1-click cross-sell product add-ons, and bundle builder integrations that lift Average Order Value (AOV) by 12 percent to 25 percent. Cross-sell recommendations pull from actual co-purchase data in your order history rather than a generic "customers also bought" widget bolted onto the theme.',
  },
  {
    category: 'speed',
    question: 'How does mobile page speed affect ecommerce conversion rates?',
    answer:
      'Google research confirms that every 0.1-second improvement in mobile site speed increases retail conversion rates by 8.4 percent. Slow mobile load times cause immediate bounce rate spikes and cart abandonment. Mobile shoppers are also more likely to be on inconsistent cellular connections, so the speed gap between a well-optimized and a bloated theme is felt more sharply than it is on desktop.',
  },
  {
    category: 'speed',
    question: 'How do you optimize Core Web Vitals (LCP, INP, CLS) on Shopify themes?',
    answer:
      'We remove dead app scripts, optimize hero image WebP compression, inline critical CSS, defer non-critical JavaScript, and eliminate layout shift triggers to achieve sub-1.5 second Largest Contentful Paint scores. We audit every installed app individually, since a single unused review widget or tracking pixel left running in the background can add several hundred milliseconds to every page load.',
  },
  {
    category: 'speed',
    question: 'Does technical CRO improve organic search rankings as well as conversion?',
    answer:
      'Yes. Optimizing Core Web Vitals directly improves Google Page Experience ranking signals while reducing bounce rates, signaling higher content quality and user engagement to search engine algorithms. A faster PDP or collection page also gets crawled more efficiently, which matters for large catalogs where crawl budget determines how quickly new or updated products get indexed.',
  },
  {
    category: 'speed',
    question: 'How do you audit and remove conversion-killing third-party app bloat?',
    answer:
      'We audit all installed Shopify apps and tracking pixels, measuring execution latency on every script tag. We consolidate redundant apps and hardcode lightweight custom Liquid/React features directly into the theme. Stores frequently run three or four apps that all do some version of the same job, and replacing them with one custom-built feature removes the redundant script weight entirely.',
  },
  {
    category: 'process',
    question: 'What conversion rate improvements do clients typically experience?',
    answer:
      'Across comprehensive 90-day CRO audit and optimization programs, clients typically achieve 15 percent to 35 percent increases in baseline conversion rate, paired with 10 percent to 20 percent gains in Average Order Value. Results compound across the sprint as winning tests stack: early wins usually come from checkout and speed fixes, with PDP and merchandising tests contributing more in later weeks.',
  },
  {
    category: 'process',
    question: 'How is FactoryJet’s CRO process structured?',
    answer:
      "We operate in 30-day iterative test sprints: comprehensive quantitative audit, test roadmap prioritization (PIE framework), custom UI/UX design, technical Liquid/React development, statistical A/B analysis, and code merge upon verification. Each sprint ends with a documented result, win or loss, and feeds directly into the next sprint's prioritized roadmap rather than starting the audit process over from scratch.",
  },
  {
    category: 'process',
    question: 'Do you require long-term restrictive retainer contracts?',
    answer:
      'No. We offer focused 90-day conversion sprint engagements with clear milestone deliverables and statistical validation, with optional monthly optimization retainers thereafter. If the 90-day sprint does not deliver a measurable lift against your baseline, you are under no obligation to continue into a retainer, and you keep every winning test we already shipped to your live theme.',
  },
  {
    category: 'process',
    question: 'How do we schedule an ecommerce CRO audit with FactoryJet?',
    answer:
      "You can schedule a 30-minute discovery session with founder Bhavesh Barot. We will review your current GA4 funnel data, evaluate your mobile PDP and cart experience, and provide a prioritized conversion optimization roadmap. You leave the call with specific, ranked test ideas tied to your own store's data, not a generic checklist copied from a template audit.",
  },
  {
    category: 'playbooks',
    question: 'What specific mobile checkout changes reduce friction the most?',
    answer:
      'The highest-impact fixes are usually the smallest ones: numeric keypads on phone and card number fields instead of a full alphanumeric keyboard, address autocomplete, an upfront shipping estimate shown before payment entry rather than at the final step, and Shop Pay or Apple Pay surfaced as the default option for returning devices.',
  },
  {
    category: 'playbooks',
    question: 'How do you segment cart abandonment recovery instead of sending one generic reminder?',
    answer:
      'We split recovery sequences by the exact point the shopper dropped off: left the cart page, started but abandoned the shipping step, or reached payment and stopped. Each segment gets different messaging and timing pulled from GA4 behavioral data, and the incentive escalates gradually, starting with a free-shipping threshold reminder before ever offering a discount code.',
  },
  {
    category: 'playbooks',
    question: 'What Product Detail Page elements do you test first?',
    answer:
      'We start with whatever is unresolved above the fold on mobile: image order and zoom quality, review snippet placement, sizing and fit guidance, and whether pricing and shipping costs are transparent before the shopper has to scroll. We validate each change against add-to-cart rate and revenue per visitor, not visual preference.',
  },
  {
    category: 'playbooks',
    question: 'Does adding a post-purchase upsell hurt the primary checkout conversion?',
    answer:
      'It can, if the offer interrupts the checkout flow itself. We test upsell placement on the order confirmation page and in a separate follow-up flow rather than inside checkout, and we measure impact on both initial conversion and 90-day subscriber retention so an upsell that lifts short-term Average Order Value but hurts retention gets caught before it ships permanently.',
  },
  {
    category: 'playbooks',
    question: 'How do you make sure an A/B test result is trustworthy and not a false positive?',
    answer:
      'Every test changes one variable at a time, runs to a minimum sample size and a 95 percent statistical confidence threshold over at least two full business cycles, and gets logged in a documented test record regardless of whether it wins or loses, so a losing test still produces a usable finding instead of getting quietly forgotten.',
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

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/services/ecommerce-cro-agency#service',
  serviceType: 'Ecommerce conversion rate optimization services',
  name: 'Ecommerce CRO Agency & Shopify Plus Conversion Optimization',
  description:
    'Data-driven conversion rate optimization for US DTC and B2B brands on Shopify Plus: quantitative analytics, qualitative UX audits, Core Web Vitals speed optimization, and statistically validated A/B testing.',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'BusinessAudience',
    name: 'DTC brands, B2B ecommerce merchants, and e-commerce directors scaling on Shopify Plus',
  },
};

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet Executes High-Impact Ecommerce Conversion Rate Optimization',
  description: 'A 4-step scientific methodology for auditing, designing, and testing ecommerce conversion improvements.',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Step 1: Quantitative & Qualitative Funnel Audit',
      text: 'Analyze GA4 checkout drop-offs, Heatmap scroll recordings, session replays, and mobile Core Web Vitals bottlenecks.',
    },
    {
      '@type': 'HowToStep',
      name: 'Step 2: Hypothesis Formulation & PIE Prioritization',
      text: 'Formulate test hypotheses scored on Potential, Importance, and Ease of implementation to build a prioritized testing roadmap.',
    },
    {
      '@type': 'HowToStep',
      name: 'Step 3: Bespoke UI/UX Design & Liquid/React Engineering',
      text: 'Design high-converting mobile interfaces and engineer clean theme code with custom checkout extensions and slide cart enhancements.',
    },
    {
      '@type': 'HowToStep',
      name: 'Step 4: Statistical A/B Testing & Production Rollout',
      text: 'Run tests to 95 percent statistical confidence over two full business cycles, permanently deploying winning variations into the codebase.',
    },
  ],
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://factoryjet.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Ecommerce CRO Agency', item: 'https://factoryjet.com/services/ecommerce-cro-agency' },
  ],
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ecommerce-cro-agency#webpage',
  url: 'https://factoryjet.com/services/ecommerce-cro-agency',
  name: 'Ecommerce CRO Agency & Shopify Optimization Services USA | FactoryJet',
  description:
    'Data-driven conversion rate optimization for US Shopify brands: mobile checkout speed, cart drawer UX, Core Web Vitals, and A/B testing frameworks.',
  dateModified: `${PAGE_MODIFIED}T00:00:00Z`,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
    jobTitle: 'Founder, FactoryJet',
  },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  about: { '@id': 'https://factoryjet.com/services/ecommerce-cro-agency#service' },
};

const STATS = [
  { b: '15% to 35%', s: 'average baseline conversion rate lift' },
  { b: '70.19%', s: 'industry average cart abandonment' },
  { b: 'Sub-1.5s', s: 'mobile LCP page speed optimization' },
  { b: '95% Conf.', s: 'statistical significance validation' },
];

export default function EcommerceCroAgencyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />

      <SiteHeader locale="us" />

      <main className="pp-page">
        {/* HERO SECTION */}
        <section className="pp-hero">
          <div className="pp-hero-grid">
            <div>
              <p className="pp-eyebrow">// DATA-DRIVEN REVENUE EXPANSION</p>
              <h1 className="pp-h1">
                Ecommerce <span className="pp-grad">CRO Agency</span> &amp; Shopify Optimization
              </h1>
              <p className="pp-lead">
                Turn more store visitors into paying customers. We audit purchasing funnels, eliminate mobile checkout friction, optimize Core Web Vitals, and run statistically validated A/B tests that lift revenue per session.
              </p>
              <HeroInlineForm
                source="services_ecommerce_cro_agency"
                region="us"
                submitLabel="Request Conversion Audit"
              />
            </div>

            <div className="pp-hero-card">
              <div className="flex items-center justify-between border-b border-[#E7DED6] pb-3 mb-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F05A28]">
                  Optimization Engine
                </span>
                <span className="text-xs text-[#8C827A]">Shopify Plus Standards</span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-1 border-b border-[#F5EFEA]">
                  <span className="text-[#46403B]">Target Conversion Lift:</span>
                  <span className="font-semibold text-[#14110F]">15% to 35% Baseline Lift</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F5EFEA]">
                  <span className="text-[#46403B]">Testing Confidence:</span>
                  <span className="font-semibold text-[#14110F]">95%+ Statistical Threshold</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F5EFEA]">
                  <span className="text-[#46403B]">Focus Area:</span>
                  <span className="font-semibold text-[#14110F]">Mobile PDP &amp; 1-Click Checkout</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#46403B]">Approach:</span>
                  <span className="font-semibold text-[#F05A28]">Full-Stack Design &amp; Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS BAND */}
        <section className="pp-stat-band">
          <div className="pp-container">
            <ul className="pp-stat-grid">
              {STATS.map((s, idx) => (
                <li key={idx} className="pp-stat-item">
                  <span className="pp-stat-num">{s.b}</span>
                  <span className="pp-stat-label">{s.s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ANSWER-FIRST DEFINITION SECTION */}
        <section className="pp-section pp-tint">
          <div className="pp-container">
            <div className="pp-card p-6 md:p-8 bg-white border-l-4 border-[#F05A28]">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                Concept Definition: Full-Funnel Ecommerce CRO
              </span>
              <p className="text-base md:text-lg text-[#14110F] leading-relaxed font-medium">
                Ecommerce Conversion Rate Optimization (CRO) is the scientific process of diagnosing user experience friction, testing mobile design improvements, and optimizing technical speed to increase the percentage of store visitors who complete purchases, lifting revenue per session and return on ad spend without requiring additional traffic acquisition.
              </p>
            </div>
          </div>
        </section>

        {/* VERIFIED MARKET STATISTICS */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="pp-h2 text-center">Verified Ecommerce Conversion Research</h2>
              <p className="text-base text-[#46403B] mt-3">
                Key industry benchmarks evaluating the financial return of checkout optimization and UX friction elimination.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <li className="pp-card p-6 bg-white">
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">70.19%</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Average Cart Abandonment</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  Baymard Institute research across 49 large-scale studies shows the average documented shopping cart abandonment rate is over 70 percent.
                </p>
                <a
                  href="https://baymard.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F05A28] font-mono hover:underline"
                >
                  Source: Baymard Institute &rarr;
                </a>
              </li>

              <li className="pp-card p-6 bg-white">
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">$100 : $1</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">ROI on UX Optimization</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  Forrester research demonstrates that every $1 invested in customer experience and friction reduction returns an average of $100 in business value.
                </p>
                <a
                  href="https://www.forrester.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F05A28] font-mono hover:underline"
                >
                  Source: Forrester UX Economic Study &rarr;
                </a>
              </li>

              <li className="pp-card p-6 bg-white">
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">+8.4%</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Lift Per 0.1s Speed Gain</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  Google research reveals that a 0.1-second improvement in mobile retail page speed increases conversion rates by 8.4 percent on consumer storefronts.
                </p>
                <a
                  href="https://www.thinkwithgoogle.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F05A28] font-mono hover:underline"
                >
                  Source: Google Milliseconds Make Millions Study &rarr;
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* BENTO GRID OF CAPABILITIES */}
        <section className="pp-section pp-tint">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="pp-h2 text-center">Comprehensive Conversion Engineering</h2>
              <p className="text-base text-[#46403B] mt-3">
                Full-stack CRO combining quantitative data analytics, behavioral UX design, and clean Shopify development.
              </p>
            </div>

            <ul className="pp-bento">
              <li className="pp-card pp-bento-wide p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  01 // MOBILE PDP OPTIMIZATION
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">High-Converting Mobile Product Detail Pages</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We engineer mobile PDPs that eliminate scroll fatigue: placing high-intent variant selectors, pricing, and Add-to-Cart buttons above the thumb zone, paired with sticky bottom buy bars and transparent shipping estimates.
                </p>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  02 // SLIDE CART &amp; AOV EXPANSION
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Dynamic AJAX Cart Drawers</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Boost Average Order Value with dynamic free shipping progress bars, 1-click complementary product cross-sells, subscription toggles, and gift packaging options.
                </p>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  03 // 1-CLICK CHECKOUT
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Shopify Plus Checkout Extensibility</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Deploy custom checkout UI extensions: address auto-complete, delivery date selectors, order notes, and trust seals within Shopify secure 1-click checkout environment.
                </p>
              </li>

              <li className="pp-card pp-bento-wide p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  04 // CORE WEB VITALS OPTIMIZATION
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Sub-1.5s Largest Contentful Paint (LCP)</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Audit and purge conversion-killing app scripts. We inline critical CSS, optimize responsive WebP imagery, defer third-party tags, and eliminate cumulative layout shifts.
                </p>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  05 // STATISTICAL A/B TESTING
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">95% Confidence Validation</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Every experiment is measured against rigorous statistical benchmarks over two full business cycles before permanent code deployment to your theme repository.
                </p>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  06 // QUANTITATIVE &amp; QUALITATIVE
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">GA4 &amp; Heatmap Behavioral Audits</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Uncover where users hesitate, rage-click, or abandon through combined GA4 funnel tracking, heatmaps, and customer survey analytics.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* SUB-VERTICAL DEEP DIVE: FIVE CRO FOCUS AREAS */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-6">
              <h2 className="pp-h2 text-center">Five Places We Look Before We Touch Your Theme</h2>
              <p className="text-base text-[#46403B] mt-3">
                Every store loses revenue in a different place. We diagnose which of these five areas is actually costing you conversions before writing a single line of code.
              </p>
            </div>

            <p className="text-sm text-[#46403B] text-center max-w-3xl mx-auto mb-12">
              <span className="font-semibold text-[#14110F]">Shop Pay converts 50 percent higher</span> than standard guest checkout, and Shopify&apos;s own checkout converts an average of 15 percent (up to 36 percent) higher than competing platforms.{' '}
              <a
                href="https://www.shopify.com/checkout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F05A28] font-mono text-xs hover:underline"
              >
                Source: Shopify &rarr;
              </a>
            </p>

            <ul className="pp-bento n5">
              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  01 // MOBILE CHECKOUT FRICTION
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Removing the Friction Mobile Shoppers Never Forgive</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-3">
                  Most ecommerce traffic, and most cart abandonment, now happens on mobile, where a cramped address form, a keyboard that does not match the input type, or a shipping cost that surfaces at the worst possible moment sends the shopper back to search results.
                </p>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  We rebuild the mobile checkout flow using Shopify Plus Checkout Extensibility: numeric keypads for phone and card fields, address autocomplete, upfront shipping estimates before payment entry, and Shop Pay or Apple Pay surfaced as the default one-tap option for returning devices.
                </p>
                <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none p-0 m-0">
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Checkout Extensibility UI</li>
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Input-Type-Matched Keyboards</li>
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Shop Pay/Apple Pay Default</li>
                </ul>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  02 // CART ABANDONMENT RECOVERY
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Recovery Sequences Segmented by Drop-Off Point</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-3">
                  A shopper who adds to cart and leaves is not necessarily gone. But a generic &ldquo;you left something in your cart&rdquo; email sent 24 hours later, with no context about what stopped them, converts a small fraction of what a well-timed sequence can.
                </p>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  We build recovery sequences segmented by where the shopper actually dropped off (cart page vs. shipping step vs. payment step), timed around the behavior data in GA4, and paired with a graduated incentive, a free-shipping threshold reminder before a discount code, so margin is not given away to shoppers who would have converted anyway.
                </p>
                <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none p-0 m-0">
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Drop-Off-Stage Segmentation</li>
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">GA4 Behavioral Timing</li>
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Graduated Incentive Sequencing</li>
                </ul>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  03 // PRODUCT PAGE CONVERSION
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Resolving What Stalls an Already-Interested Shopper</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-3">
                  A shopper who lands on a Product Detail Page has already shown intent, so a low add-to-cart rate on that page usually means something specific is unresolved: unclear sizing, missing social proof, or a price that looks unjustified without more context above the fold.
                </p>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  We run structured PDP tests on image order and zoom quality, review snippet placement, sizing and fit guidance, and above-the-fold pricing and shipping transparency, validating each change against add-to-cart rate and revenue per visitor rather than surface-level opinion.
                </p>
                <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none p-0 m-0">
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Above-the-Fold Hierarchy Testing</li>
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Sizing &amp; Fit Guidance</li>
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Add-to-Cart Rate Validation</li>
                </ul>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  04 // SUBSCRIPTION &amp; UPSELL FLOWS
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Upsells That Don&apos;t Undercut the Primary Sale</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-3">
                  Subscribe-and-save and post-purchase upsell flows are easy to bolt on and easy to get wrong: an upsell shown at the wrong moment reads as a hard sell and can suppress the primary conversion it is supposed to sit beside.
                </p>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  We test subscription frequency defaults, discount framing, and post-purchase upsell placement (order confirmation page vs. a follow-up flow) using Shopify subscription APIs and Klarna or Affirm installment options at checkout, measuring impact on both initial conversion and 90-day subscriber retention rather than upsell attach rate alone.
                </p>
                <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none p-0 m-0">
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Subscription Frequency Defaults</li>
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Klarna/Affirm Installment Framing</li>
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">90-Day Retention Measurement</li>
                </ul>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  05 // A/B TESTING INFRASTRUCTURE
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Tests That Actually Reach a Trustworthy Answer</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-3">
                  Many stores run &ldquo;tests&rdquo; that never reach statistical significance, get called early because a stakeholder likes the early numbers, or can&apos;t isolate which specific change actually drove the result because three things changed at once.
                </p>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  We build and maintain the testing infrastructure itself: single-variable test design, GA4-integrated significance tracking against a defined minimum sample size, and a documented test log so a losing test still produces a usable finding instead of getting quietly forgotten.
                </p>
                <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none p-0 m-0">
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Single-Variable Test Design</li>
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">GA4 Significance Tracking</li>
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Documented Test Log</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/* MID-PAGE CTA */}
        <MidPageCTA
          headline="Not sure where your store is actually leaking revenue?"
          sub="Send us your GA4 funnel and mobile checkout, and we'll show which of these five areas is costing you the most conversions right now."
          label="Get my CRO test roadmap"
        />

        {/* COMPARISON MATRIX */}
        <section className="pp-section pp-tint">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="pp-h2 text-center">CRO Partner Approaches Compared</h2>
              <p className="text-base text-[#46403B] mt-3">
                Why full-stack conversion engineering outperforms generic design agencies and automated widget apps.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Evaluation Criteria</th>
                    <th>Technical CRO Agency (FactoryJet)</th>
                    <th>Generic Aesthetic Web Agencies</th>
                    <th>Automated CRO Widget Apps</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tr-me">
                    <td className="font-bold">Optimization Driver</td>
                    <td className="font-semibold text-[#F05A28]">Quantitative behavioral data &amp; GA4 audits</td>
                    <td>Subjective visual opinions</td>
                    <td>Generic popups &amp; countdown timers</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Development Depth</td>
                    <td className="font-semibold text-[#14110F]">Native Liquid, React &amp; Checkout Extensibility</td>
                    <td>Standard template tweaks</td>
                    <td>Third-party script injection (Slows site)</td>
                  </tr>
                  <tr className="tr-me">
                    <td className="font-bold">Core Web Vitals Impact</td>
                    <td className="font-semibold text-[#F05A28]">Sub-1.5s LCP &amp; code speed optimization</td>
                    <td>Often introduces heavy asset bloat</td>
                    <td>Degrades page speed &amp; INP scores</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Testing Rigor</td>
                    <td className="font-semibold text-[#14110F]">95% statistical confidence A/B tests</td>
                    <td>No formal A/B testing</td>
                    <td>Basic unsegmented analytics</td>
                  </tr>
                  <tr className="tr-me">
                    <td className="font-bold">Contract Flexibility</td>
                    <td className="font-semibold text-[#F05A28]">Focused 90-day sprints (Zero lock-in)</td>
                    <td>12-month rigid agency retainers</td>
                    <td>Monthly recurring software subscriptions</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQS SECTION */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Questions ecommerce brands ask about conversion rate optimization"
          lead="Everything ecommerce brand leaders need to know about CRO testing, speed optimization, and revenue results."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* FINAL CTA */}
        <section className="pp-section pp-tint">
          <div className="pp-container">
            <div className="pp-card p-8 md:p-12 bg-white border border-[#F05A28]/20 text-center max-w-4xl mx-auto">
              <p className="pp-eyebrow">// READY TO LIFT REVENUE PER SESSION?</p>
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#14110F] mb-4">
                Schedule a 30-Minute Ecommerce CRO Audit
              </h2>
              <p className="text-base text-[#46403B] max-w-2xl mx-auto mb-8">
                Speak directly with founder Bhavesh Barot. We will audit your current mobile PDP, cart drawer, and checkout funnels to identify high-impact conversion opportunities and projected revenue gains.
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
                  label="Request CRO Roadmap"
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
