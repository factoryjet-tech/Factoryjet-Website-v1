import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import FAQ, { type FAQCategory, type FAQItem } from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL_URL = 'https://factoryjet.com/services/ecommerce-cro-agency';
const PAGE_MODIFIED = '2026-09-03';

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below, so the two
 *  can never drift into showing a different path than the schema claims. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Ecommerce CRO Agency', url: CANONICAL_URL },
];

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
    url: CANONICAL_URL,
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
    canonical: CANONICAL_URL,
    languages: {
      'en-US': CANONICAL_URL,
      'x-default': CANONICAL_URL,
    },
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
      'An ecommerce CRO agency studies how shoppers behave across your whole buying funnel. We find the friction points: on product pages, in the cart drawer, and at checkout. Then we design careful A/B tests to fix them. The goal is simple. More visitors complete a purchase, and revenue per session goes up, without spending more on ads.',
  },
  {
    category: 'methodology',
    question: 'How do you identify conversion bottlenecks on our online store?',
    answer:
      'We use five data sources together: GA4 funnel reports, heatmaps and click maps, session replays, customer surveys, and Core Web Vitals speed audits. Each one answers a different question. Analytics shows where shoppers drop off. Replays show why. Speed audits catch friction the other tools miss entirely.',
  },
  {
    category: 'methodology',
    question: 'What sample size and traffic volume are required to run statistically valid A/B tests?',
    answer:
      "Stores with 50,000 or more monthly visitors and 500 or more monthly orders can run fast, reliable A/B tests. Smaller stores do not have enough traffic for that. For those, we make high-conviction fixes instead, grounded in Baymard Institute research and real session-replay evidence rather than a guess. A low-traffic store would need months to reach a valid split-test result on just one change.",
  },
  {
    category: 'methodology',
    question: 'How do you ensure A/B test results are statistically significant?',
    answer:
      'Every test runs until it hits at least 95 percent statistical confidence. That takes a minimum of two full business cycles, or 14 to 28 days. This window accounts for weekend shopping patterns and day-of-week swings. We also check that traffic split evenly between the two versions. An uneven split is one of the most common causes of a false result.',
  },
  {
    category: 'shopify',
    question: 'How do you optimize the checkout experience on Shopify Plus?',
    answer:
      "We use Shopify Checkout Extensibility to add custom tools right inside checkout: address autocomplete, order notes, delivery date pickers, gift messages, upsell offers, and trust badges. These extensions run inside Shopify's own checkout. They do not redirect to a third-party page, so they automatically inherit Shop Pay's fast load speed and its PCI security compliance.",
  },
  {
    category: 'shopify',
    question: 'How does Shop Pay integration impact mobile conversion rates?',
    answer:
      "Shop Pay converts about 50 percent higher than a standard guest checkout. It lets more than 150 million registered US shoppers pay in one tap, using a saved biometric login, which skips manual address and card entry entirely. We set Shop Pay as the default option for returning devices on mobile. Typing a card number on a phone keyboard is one of the biggest causes of checkout abandonment.",
  },
  {
    category: 'shopify',
    question: 'How do you optimize Product Detail Pages (PDPs) for higher Add-to-Cart rates?',
    answer:
      'We rework the PDP layout so pricing, variant options, and the Add-to-Cart button sit above the mobile fold. We add a sticky buy bar that follows the scroll, real review snippets, and clear shipping estimates. Every layout change gets tested live first. We check its effect on add-to-cart rate and revenue per visitor. Nothing ships just because it looks better.',
  },
  {
    category: 'shopify',
    question: 'Can you implement custom in-cart upsells and tiered discount progress bars?',
    answer:
      'Yes. We build custom slide-out cart drawers with a free-shipping progress meter, one-click add-on products, and bundle builders. Together these lift Average Order Value by 12 to 25 percent. Our cross-sell picks come from real co-purchase data in your own order history, not a generic "customers also bought" widget bolted onto a theme.',
  },
  {
    category: 'speed',
    question: 'How does mobile page speed affect ecommerce conversion rates?',
    answer:
      'Google research found that every 0.1-second gain in mobile speed lifts retail conversion by 8.4 percent. A slow mobile load causes an immediate spike in bounce rate and cart abandonment. Mobile shoppers are also more likely to be on a weak cell signal. That makes the speed gap between a lean theme and a bloated one feel much bigger on mobile than on desktop.',
  },
  {
    category: 'speed',
    question: 'How do you optimize Core Web Vitals (LCP, INP, CLS) on Shopify themes?',
    answer:
      'We remove dead app scripts, compress hero images as WebP, inline critical CSS, and defer JavaScript that is not needed right away. We also fix whatever is causing layout shift. Together, this gets Largest Contentful Paint under 1.5 seconds. We audit every installed app one at a time, since a single unused review widget or tracking pixel running in the background can add several hundred milliseconds to every page load.',
  },
  {
    category: 'speed',
    question: 'Does technical CRO improve organic search rankings as well as conversion?',
    answer:
      "Yes. Better Core Web Vitals scores directly help Google's Page Experience ranking signal, and lower bounce rates tell Google your content is engaging. A faster PDP or collection page also gets crawled more efficiently. That matters for large catalogs, where crawl budget decides how fast new or updated products get indexed.",
  },
  {
    category: 'speed',
    question: 'How do you audit and remove conversion-killing third-party app bloat?',
    answer:
      'We audit every installed Shopify app and tracking pixel, and measure the load delay each script tag adds. Then we merge redundant apps and build lightweight custom Liquid or React features straight into the theme. Many stores run three or four apps that all do roughly the same job. Replacing them with one custom feature removes all that extra script weight.',
  },
  {
    category: 'process',
    question: 'What conversion rate improvements do clients typically experience?',
    answer:
      'Across a full 90-day CRO program, clients typically see conversion rate rise 15 to 35 percent. Average Order Value usually climbs 10 to 20 percent alongside it. The gains build as winning tests stack up: early wins tend to come from checkout and speed fixes, with PDP and merchandising tests adding more in later weeks.',
  },
  {
    category: 'process',
    question: "How is FactoryJet's CRO process structured?",
    answer:
      'We work in 30-day sprints. Each one runs a full data audit, ranks the test roadmap using the PIE framework (Potential, Importance, Ease), then moves through UI/UX design, Liquid or React development, and statistical A/B analysis. A winning test merges into your live theme once verified. Every sprint ends with a written result, win or loss, and that result feeds straight into the next roadmap instead of starting the audit over.',
  },
  {
    category: 'process',
    question: 'Do you require long-term restrictive retainer contracts?',
    answer:
      'No. We run focused 90-day sprints with clear milestones and statistically validated results. After that, a monthly optimization retainer is optional, not required. If the 90-day sprint does not produce a measurable lift against your baseline, you owe us nothing further, and you keep every winning test we already shipped to your live theme.',
  },
  {
    category: 'process',
    question: 'How do we schedule an ecommerce CRO audit with FactoryJet?',
    answer:
      "You can book a 30-minute discovery call with founder Bhavesh Barot. We review your GA4 funnel data and your mobile PDP and cart experience together, then hand you a ranked conversion roadmap. You leave the call with specific test ideas tied to your own store's data, not a generic checklist copied from a template audit.",
  },
  {
    category: 'playbooks',
    question: 'What specific mobile checkout changes reduce friction the most?',
    answer:
      'The biggest wins usually come from the smallest fixes. A numeric keypad on phone and card fields, instead of a full keyboard. Address autocomplete. A shipping estimate shown early, instead of sprung on the shopper at the final step. And Shop Pay or Apple Pay set as the default option for returning devices.',
  },
  {
    category: 'playbooks',
    question: 'How do you segment cart abandonment recovery instead of sending one generic reminder?',
    answer:
      'We split recovery messages by the exact point where the shopper dropped off: the cart page, the shipping step, or payment. Each group gets different timing and wording, pulled from real GA4 behavior data. The incentive also escalates gradually. We lead with a free-shipping reminder, and only offer a discount code later if it is still needed.',
  },
  {
    category: 'playbooks',
    question: 'What Product Detail Page elements do you test first?',
    answer:
      'We start with whatever is still unresolved above the mobile fold. That means image order and zoom quality, where the review snippet sits, sizing and fit guidance, and whether pricing and shipping costs are clear before the shopper has to scroll. We judge every change against add-to-cart rate and revenue per visitor, never against visual preference alone.',
  },
  {
    category: 'playbooks',
    question: 'Does adding a post-purchase upsell hurt the primary checkout conversion?',
    answer:
      'It can, if the offer interrupts checkout itself. So we test upsell placement on the order confirmation page, and in a separate follow-up flow, never inside checkout. We also measure two things at once: initial conversion and 90-day subscriber retention. That way, an upsell that boosts short-term order value but hurts retention gets caught before it ships for good.',
  },
  {
    category: 'playbooks',
    question: 'How do you make sure an A/B test result is trustworthy and not a false positive?',
    answer:
      'Every test changes exactly one variable at a time. It runs to a minimum sample size and a 95 percent confidence threshold, over at least two full business cycles. We log the result in a written test record either way, win or lose, so a losing test still produces a usable finding instead of getting quietly forgotten.',
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
  '@id': `${CANONICAL_URL}#service`,
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
  itemListElement: BREADCRUMB_ITEMS.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${CANONICAL_URL}#webpage`,
  url: CANONICAL_URL,
  name: 'Ecommerce CRO Agency & Shopify Optimization Services USA | FactoryJet',
  description:
    'Data-driven conversion rate optimization for US Shopify brands: mobile checkout speed, cart drawer UX, Core Web Vitals, and A/B testing frameworks.',
  inLanguage: 'en-US',
  dateModified: `${PAGE_MODIFIED}T00:00:00Z`,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
    jobTitle: 'Founder, FactoryJet',
  },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  about: { '@id': `${CANONICAL_URL}#service` },
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
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* HERO SECTION */}
        <section className="pp-hero">
          <div className="pp-hero-grid">
            <div>
              <p className="pp-eyebrow">// DATA-DRIVEN REVENUE EXPANSION</p>
              <h1 className="pp-h1">
                Ecommerce <span className="pp-grad">CRO Agency</span> &amp; Shopify Optimization
              </h1>
              <p className="pp-lead">
                Turn more store visitors into paying customers. We audit your purchase funnel and fix mobile checkout friction. We optimize Core Web Vitals. Then we run statistically validated A/B tests that lift revenue per session.
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
                Ecommerce Conversion Rate Optimization, or CRO, is the process of finding friction in the shopping experience and fixing it. We diagnose the friction, test mobile design changes, and speed up the technical stack. The goal is simple: more store visitors complete a purchase. That lifts revenue per session and return on ad spend, without needing more traffic.
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
                  Baymard Institute looked at 49 large studies. The average documented shopping cart abandonment rate is over 70 percent.
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
                  Forrester research found that every $1 spent on customer experience and friction reduction returns about $100 in business value.
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
                  Google research found that a 0.1-second gain in mobile page speed lifts conversion rates by 8.4 percent on retail storefronts.
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
                  We build mobile PDPs that cut scroll fatigue. Variant selectors, pricing, and the Add-to-Cart button sit above the thumb zone. A sticky buy bar and a clear shipping estimate back them up.
                </p>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  02 // SLIDE CART &amp; AOV EXPANSION
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Dynamic AJAX Cart Drawers</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Lift Average Order Value with a free-shipping progress bar, one-click cross-sell add-ons, subscription toggles, and gift packaging options.
                </p>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  03 // 1-CLICK CHECKOUT
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Shopify Plus Checkout Extensibility</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Add custom checkout tools inside Shopify&apos;s own secure, one-click checkout: address autocomplete, delivery date pickers, order notes, and trust seals.
                </p>
              </li>

              <li className="pp-card pp-bento-wide p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  04 // CORE WEB VITALS OPTIMIZATION
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Sub-1.5s Largest Contentful Paint (LCP)</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We audit and remove conversion-killing app scripts. Then we inline critical CSS, compress images as responsive WebP, defer third-party tags, and stop layout shifts.
                </p>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  05 // STATISTICAL A/B TESTING
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">95% Confidence Validation</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Every experiment is checked against strict statistical benchmarks, over two full business cycles, before it ships permanently to your theme.
                </p>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  06 // QUANTITATIVE &amp; QUALITATIVE
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">GA4 &amp; Heatmap Behavioral Audits</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  See exactly where shoppers hesitate, rage-click, or leave. We combine GA4 funnel tracking, heatmaps, and customer survey data.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* WHERE THE WORK HAPPENS: 3 REAL IMAGE ROWS */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <div className="text-center max-w-3xl mx-auto mb-6">
              <p className="pp-mlabel">// INSIDE A CONVERSION SPRINT</p>
              <h2 style={{ marginTop: '10px' }}>Where the Work Happens: Speed, Product Pages, and Every Device</h2>
              <p className="pp-lead" style={{ marginTop: '12px' }}>
                Three snapshots from a real sprint: timing a product page, checking Core Web Vitals, and confirming the storefront holds up on every screen.
              </p>
            </div>

            <div className="pp-splitband" style={{ marginTop: '30px' }}>
              <div className="pp-splitband-text">
                <p className="pp-mlabel">01 // PRODUCT PAGE SPEED</p>
                <h3 style={{ fontFamily: 'var(--pp-display)', fontSize: '20px', marginTop: '8px', color: 'var(--pp-ink)' }}>
                  Product Pages Get Timed, Not Guessed At
                </h3>
                <p style={{ marginTop: '12px' }}>
                  Every PDP test starts with a stopwatch, not a hunch. We load the page cold and measure Largest Contentful Paint before we touch a single pixel.
                </p>
                <p>
                  If the hero image, the price, or the Add-to-Cart button loads late, shoppers leave before they ever see them. We fix the load order first, then move on to layout. Curious what a slow PDP costs your own store? Our{' '}
                  <a href="/ecommerce-speed-calculator" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>
                    ecommerce speed calculator
                  </a>{' '}
                  puts a dollar figure on it.
                </p>
                <p className="pp-splitband-note">
                  A PDP that loads slow never gets the chance to convert well, no matter how good the copy is.
                </p>
              </div>
              <figure className="pp-splitband-fig">
                <div className="pp-shot" style={{ position: 'relative', aspectRatio: '4 / 3' }}>
                  <Image
                    src="/images/us/commerce/headless-commerce-speed-lab.webp"
                    alt="A product detail page open on a desktop monitor beside a stopwatch, illustrating page-speed testing during a conversion audit"
                    width={1280}
                    height={800}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    sizes="(max-width: 860px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
              </figure>
            </div>

            <div className="pp-splitband reverse" style={{ marginTop: '48px' }}>
              <div className="pp-splitband-text">
                <p className="pp-mlabel">02 // CORE WEB VITALS</p>
                <h3 style={{ fontFamily: 'var(--pp-display)', fontSize: '20px', marginTop: '8px', color: 'var(--pp-ink)' }}>
                  Core Web Vitals, Checked Before and After
                </h3>
                <p style={{ marginTop: '12px' }}>
                  We pull a Lighthouse report before we start, then again after every sprint. Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift all get tracked against the same baseline.
                </p>
                <p>
                  A page that passes all three thresholds is not just faster. It also carries Google&apos;s Page Experience ranking signal, so the same fix that lifts conversion tends to help organic search too.
                </p>
                <p className="pp-splitband-note">
                  Our internal target is a 95+ Lighthouse score, tracked sprint over sprint, not a one-time score we hit once and stop watching.
                </p>
              </div>
              <figure className="pp-splitband-fig">
                <div className="pp-shot" style={{ position: 'relative', aspectRatio: '4 / 3' }}>
                  <Image
                    src="/images/us/marketplace/ecommerce-speed-core-web-vitals-performance-engine.webp"
                    alt="A Lighthouse performance report on a dual-monitor desk setup, showing a 100 performance score and Core Web Vitals metrics including Largest Contentful Paint under one second"
                    width={1280}
                    height={800}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    sizes="(max-width: 860px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
              </figure>
            </div>

            <div className="pp-splitband" style={{ marginTop: '48px' }}>
              <div className="pp-splitband-text">
                <p className="pp-mlabel">03 // CROSS-DEVICE CONSISTENCY</p>
                <h3 style={{ fontFamily: 'var(--pp-display)', fontSize: '20px', marginTop: '8px', color: 'var(--pp-ink)' }}>
                  One Storefront, Tested on Every Screen
                </h3>
                <p style={{ marginTop: '12px' }}>
                  A fix that works on a 27-inch monitor can break on a phone. So every layout change gets checked on a laptop, a tablet, and a phone before it ships.
                </p>
                <p>
                  If your current theme cannot hold that consistency without a rebuild, that is a separate project from CRO testing. Our{' '}
                  <a href="/services/shopify-plus-agency" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>
                    Shopify Plus agency
                  </a>{' '}
                  team handles that piece.
                </p>
                <p className="pp-splitband-note">
                  Mobile carries most of the traffic. It should get the first look, not the last one.
                </p>
              </div>
              <figure className="pp-splitband-fig">
                <div className="pp-shot" style={{ position: 'relative', aspectRatio: '4 / 3' }}>
                  <Image
                    src="/images/us/services/service-mobile.webp"
                    alt="The same storefront shown responsively on a laptop, a tablet, and a phone side by side on a desk, demonstrating consistent design across devices"
                    width={1200}
                    height={800}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    sizes="(max-width: 860px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
              </figure>
            </div>
          </div>
        </section>

        {/* PLATFORM & SYSTEM COVERAGE */}
        <section className="pp-section pp-tint">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="pp-h2 text-center">Which Analytics, Testing, and Ecommerce Platforms We Connect To</h2>
              <p className="text-base text-[#46403B] mt-3">
                CRO work only helps if it plugs into the systems you already run. Here is exactly what we connect to today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="pp-card p-8 bg-white">
                <h3 className="text-lg font-bold text-[#14110F] mb-4">Analytics &amp; Behavioral Data</h3>
                <ul className="space-y-3 text-sm text-[#46403B] leading-relaxed list-none">
                  <li><span className="font-bold text-[#14110F]">GA4</span>: funnel drop-off, revenue per session, and channel-level conversion tracking.</li>
                  <li><span className="font-bold text-[#14110F]">Hotjar</span> and <span className="font-bold text-[#14110F]">Microsoft Clarity</span>: heatmaps, scroll maps, and session replay.</li>
                  <li><span className="font-bold text-[#14110F]">Native Shopify Analytics</span>: order-level detail cross-checked against GA4.</li>
                </ul>
              </div>

              <div className="pp-card p-8 bg-white">
                <h3 className="text-lg font-bold text-[#14110F] mb-4">Testing &amp; Experimentation</h3>
                <ul className="space-y-3 text-sm text-[#46403B] leading-relaxed list-none">
                  <li><span className="font-bold text-[#14110F]">Optimizely</span> and <span className="font-bold text-[#14110F]">VWO</span>: client-side and server-side A/B and multivariate tests.</li>
                  <li><span className="font-bold text-[#14110F]">Custom Shopify Functions test harness</span>: for checkout-level experiments the other tools cannot reach.</li>
                  <li><span className="font-bold text-[#14110F]">PIE framework scoring</span> (Potential, Importance, Ease): ranks every test idea before it enters a sprint.</li>
                </ul>
              </div>

              <div className="pp-card p-8 bg-white">
                <h3 className="text-lg font-bold text-[#14110F] mb-4">Ecommerce &amp; Payment Systems</h3>
                <ul className="space-y-3 text-sm text-[#46403B] leading-relaxed list-none">
                  <li><span className="font-bold text-[#14110F]">Shopify Plus</span>, through Checkout Extensibility and Shopify Functions.</li>
                  <li><span className="font-bold text-[#14110F]">BigCommerce</span> and <span className="font-bold text-[#14110F]">WooCommerce</span>, for brands not on Shopify.</li>
                  <li><span className="font-bold text-[#14110F]">Shop Pay, Klarna, Affirm</span>, and <span className="font-bold text-[#14110F]">Recharge</span>: one-tap payment and subscription billing.</li>
                </ul>
                <p className="mt-6 text-sm text-[#6E655F] leading-relaxed border-t border-[#E7DED6] pt-4">
                  Still deciding between platforms? Our{' '}
                  <a href="/comparisons/shopify-plus-vs-bigcommerce" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>
                    Shopify Plus vs BigCommerce comparison
                  </a>{' '}
                  covers the checkout and app-ecosystem differences that affect CRO work directly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SUB-VERTICAL DEEP DIVE: FIVE CRO FOCUS AREAS */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-6">
              <h2 className="pp-h2 text-center">Five Places We Look Before We Touch Your Theme</h2>
              <p className="text-base text-[#46403B] mt-3">
                Every store loses revenue in a different spot. We find out which of these five areas is really costing you conversions, before writing a single line of code.
              </p>
            </div>

            <p className="text-sm text-[#46403B] text-center max-w-3xl mx-auto mb-12">
              <span className="font-semibold text-[#14110F]">Shop Pay converts 50 percent higher</span> than a standard guest checkout. Shopify&apos;s own checkout converts 15 percent higher than competing platforms on average, and up to 36 percent higher in some cases.{' '}
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
                  Most ecommerce traffic happens on mobile now, and so does most cart abandonment. A cramped address form sends shoppers away. So does a keyboard that does not match the input type. So does a shipping cost that appears at the worst possible moment.
                </p>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  We rebuild the mobile checkout flow using Shopify Plus Checkout Extensibility. That means numeric keypads for phone and card fields, plus address autocomplete. It also means an upfront shipping estimate before payment. Shop Pay or Apple Pay become the default one-tap option for returning devices.
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
                  A shopper who adds to cart and leaves is not necessarily gone for good. But a generic &ldquo;you left something in your cart&rdquo; email, sent 24 hours later with no context, converts only a small fraction of what a well-timed sequence can.
                </p>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  We build recovery sequences segmented by where the shopper actually dropped off: the cart page, the shipping step, or payment. Timing comes from real GA4 behavior data. The incentive escalates gradually too, starting with a free-shipping reminder before ever offering a discount code, so margin is not given away to shoppers who would have converted anyway.
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
                  A shopper on a Product Detail Page has already shown intent. So a low add-to-cart rate usually means something specific is unresolved: unclear sizing, missing social proof, or a price that looks unjustified without enough context above the fold.
                </p>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  We run structured PDP tests on image order and zoom quality, review snippet placement, sizing and fit guidance, and clear pricing and shipping costs above the fold. We judge each change against add-to-cart rate and revenue per visitor, not surface-level opinion.
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
                  Subscribe-and-save and post-purchase upsell flows are easy to bolt on, and just as easy to get wrong. An upsell shown at the wrong moment reads as a hard sell, and it can suppress the very sale it is supposed to sit beside.
                </p>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  We test subscription frequency defaults and discount framing using Shopify subscription APIs. We also test upsell placement: the order confirmation page versus a follow-up flow, plus Klarna or Affirm installment options at checkout. We measure impact on both initial conversion and 90-day subscriber retention, not just upsell attach rate.
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
                  Many stores run &ldquo;tests&rdquo; that never reach real statistical significance. Some get called early because a stakeholder likes the early numbers. Others cannot tell which change actually drove the result, because three things changed at once.
                </p>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  We build and maintain the testing infrastructure itself. That means single-variable test design, plus GA4-integrated significance tracking against a set minimum sample size. Every result goes into a documented test log. A losing test still produces a usable finding instead of getting quietly forgotten.
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
          sub="Send us your GA4 funnel and mobile checkout data. We will show you which of these five areas is costing you the most conversions right now."
          label="Get my CRO test roadmap"
        />

        {/* 30-DAY CONVERSION SPRINT TIMELINE */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <div className="text-center max-w-3xl mx-auto mb-6">
              <p className="pp-mlabel">// SPRINT TIMELINE</p>
              <h2 style={{ marginTop: '10px' }}>How We Run a 30-Day Conversion Sprint</h2>
              <p className="pp-lead" style={{ marginTop: '12px' }}>
                Every sprint follows the same four steps. Nothing ships to your live theme until it has been tested and verified. Already migrated to Shopify Plus? This is what comes next. Still on Wix or Squarespace? See our{' '}
                <a href="/replatforming/wix-to-shopify" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>
                  replatforming guides
                </a>{' '}
                first.
              </p>
            </div>

            <ol className="pp-bento n4" style={{ marginTop: '32px' }}>
              <li className="pp-card p-6 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">WEEK 1</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Quantitative &amp; Qualitative Funnel Audit</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We pull GA4 checkout drop-off data, heatmap recordings, session replays, and a full Core Web Vitals audit. This shows us where shoppers actually get stuck, not where we assume they do.
                </p>
              </li>
              <li className="pp-card p-6 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">WEEK 1&ndash;2</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Hypothesis Formulation &amp; PIE Prioritization</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Every fix becomes a written hypothesis, scored on Potential, Importance, and Ease using the PIE framework. The highest-scoring ideas go into the sprint first.
                </p>
              </li>
              <li className="pp-card p-6 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">WEEK 2&ndash;3</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Bespoke UI/UX Design &amp; Liquid/React Engineering</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We design the mobile-first interface, then build it in clean Liquid or React code. Checkout extensions and cart drawer changes get built here too.
                </p>
              </li>
              <li className="pp-card p-6 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">WEEK 3&ndash;4</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Statistical A/B Testing &amp; Production Rollout</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  The test runs to 95 percent confidence over two full business cycles. A winning variant merges into your live theme. A losing one still gets logged, so nothing is wasted.
                </p>
              </li>
            </ol>
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

        {/* FOUNDER OVERSIGHT */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <div className="pp-splitband">
              <div className="pp-splitband-text">
                <p className="pp-mlabel">// DIRECT FOUNDER OVERSIGHT</p>
                <h2 style={{ marginTop: '10px' }}>Every Sprint Runs Under Direct Founder Oversight</h2>
                <p style={{ marginTop: '14px' }}>
                  CRO work fails quietly when nobody owns the result. At FactoryJet, founder Bhavesh Barot runs the discovery call for every sprint himself, and reviews every test before it ships.
                </p>
                <p>
                  You work directly with senior developers who have already built checkout extensions and PDP tests for other Shopify Plus brands. We do not hand your funnel to junior staff or offshore contractors. If support tickets, not checkout conversion, are the real cost center, our{' '}
                  <Link href="/services/ai-customer-support-agents" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>
                    AI customer support agents
                  </Link>{' '}
                  page covers that side instead.
                </p>
                <div style={{ marginTop: '22px', display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                  <a
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pp-primary"
                  >
                    Schedule a Call With Bhavesh
                  </a>
                  <ModalCTAButton
                    label="Request a Scoping Proposal"
                    region="us"
                    btnVariant="secondary-light"
                  />
                </div>
                <a
                  href="https://www.linkedin.com/in/bhavesh-ai-gtm-expert/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-block', marginTop: '16px', color: 'var(--pp-orange-dark)', textDecoration: 'underline', fontSize: '13px' }}
                >
                  Connect with Bhavesh on LinkedIn &rarr;
                </a>
              </div>
              <figure className="pp-splitband-fig">
                <div className="pp-shot" style={{ position: 'relative', aspectRatio: '4 / 3', maxWidth: '380px', margin: '0 auto' }}>
                  <Image
                    src="/bhavesh_image.webp"
                    alt="Bhavesh Barot, Founder & CEO of FactoryJet"
                    width={682}
                    height={1024}
                    quality={95}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    sizes="(max-width: 860px) 100vw, 40vw"
                  />
                </div>
              </figure>
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
                Speak directly with founder Bhavesh Barot. We will audit your mobile PDP, cart drawer, and checkout funnel together. You will leave with high-impact opportunities and a projected revenue gain.
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
