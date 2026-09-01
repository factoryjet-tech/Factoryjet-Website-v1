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
const PAGE_MODIFIED = '2026-09-01';

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
      'We combine quantitative GA4 funnel drop-off analytics, Heatmap scroll and click maps, qualitative session replay analysis, customer survey feedback, and technical Core Web Vitals speed audits to uncover exact friction points causing cart abandonment.',
  },
  {
    category: 'methodology',
    question: 'What sample size and traffic volume are required to run statistically valid A/B tests?',
    answer:
      'Stores generating 50,000 or more monthly unique visitors and 500+ monthly transactions can reliably run rapid A/B test iterations. For lower-volume stores, we execute high-conviction heuristic usability fixes and qualitative UX overhauls.',
  },
  {
    category: 'methodology',
    question: 'How do you ensure A/B test results are statistically significant?',
    answer:
      'Every experiment runs until achieving a minimum 95 percent statistical confidence level over at least two full business cycles (14 to 28 days), accounting for seasonal buying variations, day-of-week fluctuations, and sample ratio mismatches.',
  },
  {
    category: 'shopify',
    question: 'How do you optimize the checkout experience on Shopify Plus?',
    answer:
      'We utilize Shopify Checkout Extensibility to deploy custom checkout UI extensions: 1-click address autocomplete, custom order notes, dynamic delivery date selectors, gift messaging, upsell recommendations, and trust badges within the native checkout flow.',
  },
  {
    category: 'shopify',
    question: 'How does Shop Pay integration impact mobile conversion rates?',
    answer:
      'Shop Pay delivers an average 50 percent higher conversion rate than standard guest checkouts by enabling 1-click biometric payments for over 150 million registered US shoppers, eliminating manual address and credit card entry.',
  },
  {
    category: 'shopify',
    question: 'How do you optimize Product Detail Pages (PDPs) for higher Add-to-Cart rates?',
    answer:
      'We restructure PDP visual hierarchy: moving pricing, variant selectors, and the primary Add-to-Cart button above the mobile fold, integrating sticky buy bars on scroll, embedding verified review snippets, and providing transparent shipping estimates.',
  },
  {
    category: 'shopify',
    question: 'Can you implement custom in-cart upsells and tiered discount progress bars?',
    answer:
      'Yes. We build custom slide-out AJAX cart drawers featuring dynamic free shipping threshold meters, 1-click cross-sell product add-ons, and bundle builder integrations that lift Average Order Value (AOV) by 12 percent to 25 percent.',
  },
  {
    category: 'speed',
    question: 'How does mobile page speed affect ecommerce conversion rates?',
    answer:
      'Google research confirms that every 0.1-second improvement in mobile site speed increases retail conversion rates by 8.4 percent. Slow mobile load times cause immediate bounce rate spikes and cart abandonment.',
  },
  {
    category: 'speed',
    question: 'How do you optimize Core Web Vitals (LCP, INP, CLS) on Shopify themes?',
    answer:
      'We remove dead app scripts, optimize hero image WebP compression, inline critical CSS, defer non-critical JavaScript, and eliminate layout shift triggers to achieve sub-1.5 second Largest Contentful Paint scores.',
  },
  {
    category: 'speed',
    question: 'Does technical CRO improve organic search rankings as well as conversion?',
    answer:
      'Yes. Optimizing Core Web Vitals directly improves Google Page Experience ranking signals while reducing bounce rates, signaling higher content quality and user engagement to search engine algorithms.',
  },
  {
    category: 'speed',
    question: 'How do you audit and remove conversion-killing third-party app bloat?',
    answer:
      'We audit all installed Shopify apps and tracking pixels, measuring execution latency on every script tag. We consolidate redundant apps and hardcode lightweight custom Liquid/React features directly into the theme.',
  },
  {
    category: 'process',
    question: 'What conversion rate improvements do clients typically experience?',
    answer:
      'Across comprehensive 90-day CRO audit and optimization programs, clients typically achieve 15 percent to 35 percent increases in baseline conversion rate, paired with 10 percent to 20 percent gains in Average Order Value.',
  },
  {
    category: 'process',
    question: 'How is FactoryJet’s CRO process structured?',
    answer:
      'We operate in 30-day iterative test sprints: comprehensive quantitative audit, test roadmap prioritization (PIE framework), custom UI/UX design, technical Liquid/React development, statistical A/B analysis, and code merge upon verification.',
  },
  {
    category: 'process',
    question: 'Do you require long-term restrictive retainer contracts?',
    answer:
      'No. We offer focused 90-day conversion sprint engagements with clear milestone deliverables and statistical validation, with optional monthly optimization retainers thereafter.',
  },
  {
    category: 'process',
    question: 'How do we schedule an ecommerce CRO audit with FactoryJet?',
    answer:
      'You can schedule a 30-minute discovery session with founder Bhavesh Barot. We will review your current GA4 funnel data, evaluate your mobile PDP and cart experience, and provide a prioritized conversion optimization roadmap.',
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
            <div className="pp-stat-grid">
              {STATS.map((s, idx) => (
                <div key={idx} className="pp-stat-item">
                  <span className="pp-stat-num">{s.b}</span>
                  <span className="pp-stat-label">{s.s}</span>
                </div>
              ))}
            </div>
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="pp-card p-6 bg-white">
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
              </div>

              <div className="pp-card p-6 bg-white">
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
              </div>

              <div className="pp-card p-6 bg-white">
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
              </div>
            </div>
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

            <div className="pp-bento">
              <div className="pp-card pp-bento-wide p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  01 // MOBILE PDP OPTIMIZATION
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">High-Converting Mobile Product Detail Pages</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We engineer mobile PDPs that eliminate scroll fatigue: placing high-intent variant selectors, pricing, and Add-to-Cart buttons above the thumb zone, paired with sticky bottom buy bars and transparent shipping estimates.
                </p>
              </div>

              <div className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  02 // SLIDE CART &amp; AOV EXPANSION
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Dynamic AJAX Cart Drawers</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Boost Average Order Value with dynamic free shipping progress bars, 1-click complementary product cross-sells, subscription toggles, and gift packaging options.
                </p>
              </div>

              <div className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  03 // 1-CLICK CHECKOUT
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Shopify Plus Checkout Extensibility</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Deploy custom checkout UI extensions: address auto-complete, delivery date selectors, order notes, and trust seals within Shopify secure 1-click checkout environment.
                </p>
              </div>

              <div className="pp-card pp-bento-wide p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  04 // CORE WEB VITALS OPTIMIZATION
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Sub-1.5s Largest Contentful Paint (LCP)</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Audit and purge conversion-killing app scripts. We inline critical CSS, optimize responsive WebP imagery, defer third-party tags, and eliminate cumulative layout shifts.
                </p>
              </div>

              <div className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  05 // STATISTICAL A/B TESTING
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">95% Confidence Validation</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Every experiment is measured against rigorous statistical benchmarks over two full business cycles before permanent code deployment to your theme repository.
                </p>
              </div>

              <div className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  06 // QUANTITATIVE &amp; QUALITATIVE
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">GA4 &amp; Heatmap Behavioral Audits</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Uncover where users hesitate, rage-click, or abandon through combined GA4 funnel tracking, heatmaps, and customer survey analytics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VERTICAL USE CASES */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="pp-h2 text-center">Industry CRO Optimization Playbooks</h2>
              <p className="text-base text-[#46403B] mt-3">
                Tailored conversion strategies calibrated to the buying patterns of your specific customer vertical.
              </p>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              <div className="pp-card p-6 bg-white border border-[#E7DED6]">
                <h3 className="text-lg font-bold text-[#14110F] mb-2">DTC Apparel, Fashion &amp; Footwear</h3>
                <p className="text-sm text-[#46403B]">
                  Solves size uncertainty through interactive sizing calculators, visual fit charts, high-resolution lifestyle galleries, and low-friction 1-click exchange policies.
                </p>
              </div>

              <div className="pp-card p-6 bg-white border border-[#E7DED6]">
                <h3 className="text-lg font-bold text-[#14110F] mb-2">High-AOV Luxury &amp; Home Furnishings</h3>
                <p className="text-sm text-[#46403B]">
                  Builds buyer confidence on $500+ purchases via transparent delivery lead times, white-glove shipping calculators, installment payment options (Affirm/Klarna), and social proof badges.
                </p>
              </div>

              <div className="pp-card p-6 bg-white border border-[#E7DED6]">
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Health, Nutrition &amp; Wellness Supplements</h3>
                <p className="text-sm text-[#46403B]">
                  Optimizes subscribe-and-save conversion funnels, transparent ingredient sourcing breakdowns, clinical trial citations, and bundle-and-save tier pricing.
                </p>
              </div>

              <div className="pp-card p-6 bg-white border border-[#E7DED6]">
                <h3 className="text-lg font-bold text-[#14110F] mb-2">B2B Wholesale &amp; Tiered Contract Catalogs</h3>
                <p className="text-sm text-[#46403B]">
                  Streamlines bulk order matrix tables, Net 30 corporate invoicing applications, quick-order SKU upload tools, and automated tax-exempt certificate collection.
                </p>
              </div>

              <div className="pp-card p-6 bg-white border border-[#E7DED6]">
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Beauty &amp; Personal Care</h3>
                <p className="text-sm text-[#46403B]">
                  Accelerates purchase decisions with shade finders, visual before-and-after customer review carousels, routine builder bundles, and free sample add-ons at checkout.
                </p>
              </div>
            </div>
          </div>
        </section>

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
