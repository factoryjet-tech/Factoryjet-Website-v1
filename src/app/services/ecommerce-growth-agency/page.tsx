import type { Metadata } from 'next';
import { RECOGNITION_PROFILES } from '@/data/recognitionProfiles';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import Link from 'next/link';
import { Megaphone, Mail, Search, MousePointerClick, ShoppingBag, Bot, Check } from 'lucide-react';

import { usServiceAlternates } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import ComparisonTable from '@/components/v2/ComparisonTable';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import JsonLd from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

import './ecommerce-growth-agency.css';

const URL = 'https://factoryjet.com/services/ecommerce-growth-agency';
const PAGE_TITLE = 'Ecommerce Growth Agency for US Brands | FactoryJet';
const PAGE_DESCRIPTION =
  'Ecommerce growth agency for US brands: paid ads, Google Shopping, email and SMS, SEO, CRO and AI automation, run by one senior in-house team. Free growth audit.';

// Freshness signal. Bump only when the page content actually changes.
const PAGE_MODIFIED = '2026-10-22';
const LINK = { color: '#B23E13', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 } as const;
const LIST_RESET = { listStyle: 'none', margin: 0, padding: 0 } as const;

/* ── SEO / Metadata ─────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    'ecommerce growth agency',
    'ecommerce agency',
    'ecommerce marketing agency',
    'ecommerce advertising agency',
    'ecommerce ppc agency',
    'ecommerce seo agency',
    'ecommerce email marketing',
    'ecommerce marketing',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Ecommerce Growth Agency for US Brands | FactoryJet',
    description:
      'Full-funnel ecommerce growth for US brands: ads, email, SEO, CRO, and AI, under one senior in-house team. Free growth audit.',
    url: URL,
    images: [
      { url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet Ecommerce Growth Agency' },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce Growth Agency for US Brands | FactoryJet',
    description:
      'Full-funnel ecommerce growth: ads, email, SEO, CRO, and AI, one senior in-house team. Free growth audit.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: URL,
    languages: usServiceAlternates['ecommerce-growth-agency'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

/* ── FAQ data (drives both the on-page accordion and the FAQPage schema) ──── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'The basics' },
  { key: 'services', label: 'Services & channels' },
  { key: 'working', label: 'Working together' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  { category: 'basics', question: 'What does an ecommerce growth agency do?', answer: 'An ecommerce growth agency runs every channel that brings a store revenue as one plan: paid ads and Google Shopping, email and SMS, SEO, conversion rate optimization and AI automation. Instead of hiring a separate specialist for each, you get one team that ties ad spend to revenue, tests changes on the store and reports on profit, not clicks.' },
  { category: 'basics', question: 'What is ecommerce marketing?', answer: 'Ecommerce marketing is how an online store attracts visitors and turns them into repeat buyers. It covers paid ads, email and SMS, SEO, social and conversion rate optimization. The goal is revenue that repeats and makes a profit, from the channels that pay back what you spend on them. Traffic only counts when it turns into orders.' },
  { category: 'basics', question: 'How do you grow an ecommerce business?', answer: 'You grow revenue on three fronts at once: get more of the right traffic (ads and SEO), convert more of it (CRO and store speed), and keep more customers buying (email, SMS, loyalty). We audit which lever is weakest for you and fix that first for the fastest return.' },
  { category: 'basics', question: 'Which channels do you manage?', answer: 'Paid ads on Google (including Google Shopping), Meta and marketplaces, email and SMS, ecommerce SEO, conversion rate optimization and AI search. We also set up and manage marketplace selling on Amazon, Walmart and TikTok Shop when they fit your brand, so pricing and stock stay in step with your own store.' },
  { category: 'basics', question: 'What makes FactoryJet different from a single-channel agency?', answer: 'Single-channel agencies optimize their slice while your overall revenue can still stall. We own the full funnel and the store itself, so ads, email, SEO, CRO and site changes move together. One team works toward one number: profitable revenue. When a change on the store lifts conversion, the ad budget and email plan adjust the same week.' },

  { category: 'services', question: 'Do you offer ecommerce PPC and advertising management?', answer: 'Yes. We run paid search, paid social, and marketplace ads as a full ecommerce advertising service, managed to blended ROAS and contribution margin. You get clear reporting on what each dollar returns in revenue and profit. Impressions and clicks are in the report too, but they are not how we judge the work.' },
  { category: 'services', question: 'Do you do ecommerce email marketing?', answer: 'Yes. For a store that already has customers, email and SMS are often the quickest place to add profit, because the list is already paid for. We build welcome, abandoned-cart, post-purchase and win-back flows in Klaviyo or Shopify Email, then run campaigns that bring buyers back for a second and third order.' },
  { category: 'services', question: 'Can you help with ecommerce SEO too?', answer: 'Yes, ecommerce SEO is one of our core services. We optimize category, product, and collection pages so buyers find you in Google, and we optimize for AI search so ChatGPT and Google AI Overviews can find and cite you. Work starts with the pages closest to a sale: collections and products.' },
  { category: 'services', question: 'What are the best AI tools for ecommerce?', answer: 'The most useful today are AI for product content and merchandising, AI-driven email and ad creative, AI support agents, and AI search optimization. We help you pick the few that fit your stack and build custom AI agents where an off-the-shelf tool falls short.' },
  { category: 'services', question: 'Do you build or redesign the store as well?', answer: 'Yes. When the store itself is the bottleneck we handle builds, redesigns, and replatforming on Shopify and Magento, including headless commerce. Growth marketing and development under one roof means fixes ship without vendor hand-offs. Builds are quoted as a fixed price per phase: a custom-theme store takes 3 to 5 weeks, headless or custom builds 8 to 14 weeks.' },
  { category: 'services', question: 'Do you sell on Amazon, Walmart, or TikTok Shop?', answer: 'Yes. We set up and manage marketplace selling on Amazon, Walmart Marketplace, and TikTok Shop as additional revenue channels, coordinated with your site so product pricing, inventory, and brand stay consistent. We also run Faire wholesale and Target Plus, and one stock feed keeps every channel from selling the same last unit.' },
  { category: 'services', question: 'Can you use AI to automate our marketing and operations?', answer: 'Yes. We build AI agents that handle customer support, product data, reporting, and repetitive ops, so your team spends time on growth instead of admin. AI work is a core part of what we build, and we show it working on your own data before you sign.' },
  { category: 'services', question: 'What is B2B ecommerce and do you support it?', answer: 'B2B ecommerce is selling to other businesses online, with features like account-based pricing, quotes, and bulk ordering. Yes, we build and grow B2B stores on platforms like Shopify Plus and BigCommerce B2B, alongside your direct-to-consumer channels. B2B builds with custom pricing or ERP links usually take 5 to 8 weeks.' },

  { category: 'working', question: 'How much does an ecommerce agency cost?', answer: 'It depends on the channels you need and the stage of your store, and no survey prices a full multi-channel agency in a way you can compare. We do not sell a fixed package. We scope the work to your goals, then quote a fixed price per phase in writing. Ongoing work is an option you pick, with no monthly minimum. Ask for a free audit and we will size it with you.' },
  { category: 'working', question: 'How long until I see results?', answer: 'Email flows and paid-ad fixes usually show results first, because they work on traffic and customers you already have. SEO and CRO build up more slowly over months. We put the fastest-payback work first, so early gains help fund the longer plays, and we show you the numbers every month.' },
  { category: 'working', question: 'Do I have to sign a long contract?', answer: 'No. There is no monthly minimum, and ongoing work runs on short, rolling terms that we earn each month. A store build or a big project is quoted as a fixed price per phase in writing, with defect cover, so you know the full scope and cost before work starts.' },
  { category: 'working', question: 'Who will actually work on my account?', answer: 'FactoryJet’s senior in-house team. The specialists in your kickoff call are the people doing the work. Nobody hands your account to a junior after the contract is signed. You talk to the same people every week, and the founder stays involved in every engagement.' },
  { category: 'working', question: 'What size businesses do you work with?', answer: 'Mostly US small and mid-market ecommerce brands, from stores doing their first serious growth push to established brands scaling past seven and eight figures. We scope the engagement to your stage rather than forcing one package on everyone. A newer store usually starts with tracking, email flows and conversion fixes. A larger brand often starts with margin-based ad structure.' },
  { category: 'working', question: 'How do you report on performance?', answer: 'You get a live dashboard tied to revenue and contribution margin, plus a plain-language monthly review of what we did, what it returned, and what is next. Every number in the review ties back to revenue or profit, and we tell you plainly when something did not work and what we are changing.' },
  { category: 'working', question: 'How do we get started?', answer: 'Request the free growth audit with your store URL and email. We come back with findings and a suggested 90-day plan, then you decide if you want us to run it. Before you sign anything, we show you working examples on your own store data. There is no long sales cycle.' },
  { category: 'services', question: 'What is Marketing Efficiency Ratio (MER) and why is it superior to platform ROAS?', answer: 'Platform-reported ROAS (in Meta Ads Manager or Google Ads) often takes double-credit for organic conversions and ignores customer acquisition costs. Marketing Efficiency Ratio (Total Net Revenue divided by Total Ad Spend) measures true blended business profitability, ensuring ad spend scales without eroding your bottom line.' },
  { category: 'services', question: 'How do you combat post-iOS 14 ad signal loss and attribution inaccuracies?', answer: 'We implement server-side conversion tracking via Meta Conversions API (CAPI), Google Enhanced Conversions, and first-party data capture. This sends more of your real conversions back to the ad platforms, so their bidding can aim at high-value repeat buyers instead of guessing.' },
  { category: 'services', question: 'How does conversion rate optimization (CRO) interact with customer acquisition costs?', answer: 'Customer acquisition cost is ad spend divided by new orders. With the same traffic and spend, moving conversion from 1.5% to 2.5% gives you two-thirds more orders, so cost per order falls by 40% (1.5 divided by 2.5 is 0.6). That room lets you bid higher than competitors and still make a profit.' },
  { category: 'services', question: 'What is RFM customer segmentation in Klaviyo email marketing?', answer: 'RFM analyzes Recency, Frequency, and Monetary value across your customer database. We build targeted VIP reward flows for high-value champions, automated replenishment triggers for predictable consumables, and win-back flows for buyers who have gone quiet. Segments update on their own as customers buy, so each flow reaches the right people.' },
  { category: 'services', question: 'How do you structure product bundles and threshold upsells to increase Average Order Value (AOV)?', answer: 'We engineer dynamic in-cart progress bars (e.g. "Add $15 for Free Shipping"), post-purchase 1-click upsells in checkout, and tiered bundle discounts (Buy 2 Get 10% Off, Buy 3 Get 20% Off). We test each one against your current store, and keep only what raises order value without hurting margin.' },
  { category: 'services', question: 'How do AI search citations in ChatGPT and Perplexity drive e-commerce revenue?', answer: 'Shoppers now ask AI assistants to compare products and recommend what to buy. Store content with clear schema, fair comparison tables and real reviews is easier for those assistants to quote. That makes your brand more likely to be named in the answer. Our free AI visibility checker shows whether assistants name you today.' },
  { category: 'services', question: 'Which agencies specialize in Google Shopping for large ecommerce brands?', answer: 'Look for an agency that runs Google Shopping and Performance Max as part of a feed and margin plan, not as a standalone ad account. Large catalogs need clean product feeds, product-level bidding tied to margin and a check on which products eat budget without selling. We run Google Shopping for large catalogs this way, next to SEO and CRO.' },
  { category: 'services', question: 'Do you run B2B ecommerce email and SMS retention?', answer: 'Yes. B2B buyers reorder on a cycle, so retention for B2B stores looks different from consumer flows. We build reorder reminders timed to how fast each account uses stock, quote follow-ups, new product alerts for existing accounts and SMS for buyers who prefer it. Flows run in Klaviyo or your ERP’s email tools, tied to account-level pricing.' },
  { category: 'basics', question: 'What is the 80/20 rule in ecommerce?', answer: 'The 80/20 rule, or Pareto principle, says a small share of causes drives most results. In ecommerce it usually means a small group of products or customers brings in most of the revenue. The exact split varies by store. We check your own order data to find those products and customers, then aim ads, email and stock at them first.' },
];

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ecommerce Growth Agency',
  serviceType: 'Ecommerce marketing and growth',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet' },
  areaServed: { '@type': 'Country', name: 'United States' },
  url: URL,
  description:
    'FactoryJet is a full-funnel ecommerce growth agency for US brands, running paid ads, email and SMS, ecommerce SEO, conversion rate optimization, store development, and AI automation as one accountable in-house team.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Ecommerce growth services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ecommerce PPC and advertising' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ecommerce email and SMS marketing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ecommerce SEO' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Conversion rate optimization' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ecommerce store build and redesign' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI search and AI automation for ecommerce' } },
    ],
  },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${URL}#webpage`,
  url: URL,
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

/* ── Small building blocks ───────────────────────────────────────────────── */
const CHANNELS = [
  { Icon: Megaphone, title: 'Ecommerce PPC & advertising', body: 'Google Search, Google Shopping, Meta and marketplace ads, managed to blended ROAS and profit. A full ecommerce advertising service, run in-house.', link: '/services/ecommerce-seo', label: 'How we run paid ads', span: 'w3' },
  { Icon: Mail, title: 'Email & SMS retention', body: 'Ecommerce email marketing flows and campaigns in Klaviyo and Shopify Email that turn one-time buyers into repeat revenue.', link: '/contact', label: 'Retention playbook', span: 'w3' },
  { Icon: Search, title: 'Ecommerce SEO', body: 'Rank category and product pages for buyers, and compound long after ad spend stops.', link: '/services/ecommerce-seo', label: 'Ecommerce SEO', span: 'cell' },
  { Icon: MousePointerClick, title: 'CRO & landing pages', body: 'Turn more of the traffic you already pay for into orders with testing and checkout fixes.', link: '/services/ecommerce-cro-agency', label: 'Conversion work', span: 'cell' },
  { Icon: ShoppingBag, title: 'Store build & redesign', body: 'Shopify and Magento builds, replatforming, and headless commerce.', link: '/services/ecommerce-development', label: 'Ecommerce development', span: 'cell' },
];

const LEVERS = [
  { b: 'Acquisition that pays back', p: 'Paid social and search tuned to contribution margin, so scaling spend does not quietly kill your profit.' },
  { b: 'Retention and lifetime value', p: 'Email, SMS, and loyalty flows that make the second and third order cheaper than the first.' },
  { b: 'Organic and AI search', p: 'Ecommerce SEO plus answer-engine optimization, so buyers find you in Google and in ChatGPT.' },
  { b: 'Conversion rate optimization', p: 'Structured testing on product, cart, and checkout to lift revenue without spending a dollar more.' },
  { b: 'Marketplace expansion', p: 'Amazon, Walmart and TikTok Shop set up and managed as extra revenue channels, with stock and pricing kept in step with your store.' },
  { b: 'AI automation', p: 'Agents that handle support, product data, and reporting so your team spends time on growth, not admin.' },
];

const CHECKS = [
  { b: 'Reports on profit, not clicks', p: 'Ask how they define success. If the answer is impressions or ROAS alone, keep looking.' },
  { b: 'Owns more than one channel', p: 'Single-channel shops optimize their slice while your overall revenue stalls.' },
  { b: 'Senior people on your account', p: 'Confirm who actually does the work, not just who shows up to sell you.' },
  { b: 'Transparent, scoped engagements', p: 'No mystery retainers. You should know what you get and what happens next.' },
  { b: 'Real ecommerce experience', p: 'Platform knowledge of Shopify, Magento, and checkout matters more than generic marketing.' },
  { b: 'No long lock-in', p: 'Good agencies earn the renewal every month. Be cautious of year-long contracts up front.' },
];

const STEPS = [
  { n: 'Step 01', h: 'Audit', p: 'We analyze your store, ads, email, and analytics and show exactly where revenue leaks.' },
  { n: 'Step 02', h: 'Plan', p: 'A prioritized 90-day growth plan, ranked by revenue impact and effort. Yours to keep.' },
  { n: 'Step 03', h: 'Build', p: 'We launch campaigns, flows, tests, and fixes fast, with clear owners and deadlines.' },
  { n: 'Step 04', h: 'Scale', p: 'Weekly iteration and profit-based reporting. We double down on what works, cut what does not.' },
];

/* Cited market stats. Every figure re-read on the source page on 22 Oct 2026. */
const STATS = [
  { v: '$1.19T', l: 'in US ecommerce sales in 2024 ($1.192 trillion).', src: 'Digital Commerce 360, 2025 (read 22 Oct 2026)', href: 'https://www.digitalcommerce360.com/2025/03/03/us-ecommerce-sales-2024/' },
  { v: '7.5%', l: 'how fast US ecommerce grew in 2024, against 2.6% growth for total retail.', src: 'Digital Commerce 360, 2025 (read 22 Oct 2026)', href: 'https://www.digitalcommerce360.com/2025/03/03/us-ecommerce-sales-2024/' },
  { v: '2x', l: 'US ecommerce more than doubled in five years, up from $571 billion in 2019.', src: 'Digital Commerce 360, 2025 (read 22 Oct 2026)', href: 'https://www.digitalcommerce360.com/2025/03/03/us-ecommerce-sales-2024/' },
];

/* Real, named ecommerce growth agencies brands weigh us against, framed honestly. */
const RIVALS = [
  { b: 'Common Thread Collective', p: 'A respected DTC growth shop with a strong paid-media and forecasting framework in the Shopify world. Excellent at paid acquisition, narrower on the full stack.' },
  { b: 'Power Digital', p: 'A broad cross-channel growth partner for brands that want wide coverage. A bigger-agency structure, which can mean more layers between you and the work.' },
  { b: 'Disruptive Advertising', p: 'A recognized PPC and conversion-optimization agency managing serious ad spend. Strong on ads and CRO, lighter on store builds and marketplaces.' },
  { b: 'Where FactoryJet fits', p: 'One senior in-house team running ads, email, SEO, CRO, the store build itself, marketplaces and AI, sized for small and mid-size brands, with no monthly minimum.' },
];

const yes = <span style={{ color: '#177a48', fontWeight: 700 }}>Yes</span>;
const no = (t: string) => <span style={{ color: '#b23e13' }}>{t}</span>;
const partial = (t: string) => <span style={{ color: '#8a5e00' }}>{t}</span>;

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function EcommerceGrowthAgencyPage() {
  return (
    <>
      <JsonLd data={serviceSchema} id="service-schema" />
      <JsonLd data={faqSchema} id="faq-schema" />
      <JsonLd data={webPageSchema} id="webpage-schema" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'Ecommerce Growth Agency', url: URL },
        ]}
      />

      <SiteHeader locale="us" />

      <main className="ega">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'Ecommerce Growth Agency', url: URL },
        ]} />
        {/* HERO */}
        <section className="ega-hero">
          <div className="ega-wrap ega-hero-grid">
            <div>
              <span className="ega-pill"><span className="d" /> Ecommerce Growth Agency · United States</span>
              <h1 className="ega-h1 disp">The ecommerce growth agency that turns your store into a <span className="u">revenue engine</span></h1>
              <p className="ega-lead">One team for the whole funnel: paid ads, email and SMS, ecommerce SEO, CRO, and AI automation. Founded 2014, with 500+ businesses served.</p>
              <HeroInlineForm region="us" source="us_services_ecommerce_growth_hero" submitLabel="Get my free audit" />
              <div className="ega-trust">
                <span className="tk"><Check size={15} strokeWidth={2.4} /> 500+ businesses served</span>
                <span className="tk"><Check size={15} strokeWidth={2.4} /> Founded 2014</span>
                <span className="tk"><Check size={15} strokeWidth={2.4} /> In-house senior team</span>
              </div>
            </div>
            <div className="ega-hero-visual">
              <div className="ega-hero-photo">
                <img src="/images/us/services/ecommerce-growth-agency/hero-fulfillment.webp" alt="Ecommerce business owner preparing an online order for shipping" width={506} height={760} loading="eager" fetchPriority="high" decoding="async" />
              </div>
              {/* Illustrative outcome metric, qualitative visual only (not a specific client claim) */}
              <div className="ega-metric">
                <span aria-hidden="true">
                  <svg width="48" height="26" viewBox="0 0 48 26" fill="none"><polyline points="2,22 11,18 19,20 27,12 35,14 46,3" stroke="#F05A28" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="46" cy="3" r="2.6" fill="#F05A28" /></svg>
                </span>
                <div>
                  <span className="hm-lab">Conversions</span>
                  <b className="hm-val">Tracked<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#177a48" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M17 7H8M17 7v9" /></svg></b>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ANSWER-FIRST */}
        <section className="ega-answer">
          <div className="ega-wrap in">
            <div className="q disp"><span className="ql">Quick answer</span>What does an ecommerce growth agency do?</div>
            <div className="a"><p><b>An ecommerce growth agency runs every channel that brings a store revenue as one plan:</b> paid ads and Google Shopping, email and SMS, SEO, conversion rate optimization and AI automation. You get one team that ties ad spend to revenue, tests changes on the store and reports on profit. FactoryJet does this on Shopify, Magento, BigCommerce and WooCommerce for US brands.</p>
              <p style={{ marginTop: 12 }}>What that covers in practice:</p>
              <ul style={{ paddingLeft: 20, marginTop: 8, display: 'grid', gap: 6, listStyle: 'disc' }}>
                <li>Paid search, Google Shopping and paid social, judged on contribution margin.</li>
                <li>Email and SMS flows for consumer and B2B buyers.</li>
                <li>Conversion work on product, cart and checkout pages, run by our <a href="/services/ecommerce-cro-agency" style={LINK}>ecommerce CRO agency</a> team.</li>
                <li>Store speed fixes. Check what a slow store costs you with the <a href="/ecommerce-speed-calculator" style={LINK}>ecommerce speed calculator</a>.</li>
                <li>Amazon, Walmart and Faire run next to your store through <a href="/marketplace-management" style={LINK}>marketplace management</a>.</li>
                <li>AI search. See whether ChatGPT and other assistants name your brand with the free <a href="/ai-visibility-checker" style={LINK}>AI visibility checker</a>.</li>
              </ul></div>
          </div>
        </section>

        {/* LOGO BAR */}
        <section className="ega-logobar">
          <div className="ega-wrap">
            <div className="t">Building and growing stores on the platforms you already use</div>
            <div className="ega-logos"><span>Shopify</span><span>Shopify Plus</span><span>Magento</span><span>BigCommerce</span><span>WooCommerce</span></div>
          </div>
        </section>

        {/* MARKET STATS (cited) */}
        <section className="ega-sec pt0">
          <div className="ega-wrap">
            <div className="ega-sh"><span className="ega-eyebrow">Why it matters</span><h2 className="disp">Why ecommerce growth is worth investing in</h2><p>Online shopping is still climbing, and the brands that compound the small levers pull away. Three numbers that frame it.</p></div>
            <div className="ega-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 14 }}>
              {STATS.map((s) => (
                <div key={s.v} className="ega-crystal" style={{ padding: '24px 24px 22px' }}>
                  <div className="disp" style={{ fontSize: 34, color: '#F05A28', lineHeight: 1.04 }}>{s.v}</div>
                  <p style={{ color: '#3a3a38', fontSize: 15, lineHeight: 1.5, marginTop: 8 }}>{s.l}</p>
                  <a href={s.href} target="_blank" rel="noopener noreferrer nofollow" style={{ display: 'inline-block', marginTop: 12, fontSize: 12.5, color: '#B23E13', textDecoration: 'underline', textUnderlineOffset: 2 }}>Source: {s.src}</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENTO CHANNELS */}
        <section className="ega-sec">
          <div className="ega-wrap">
            <div className="ega-sh"><span className="ega-eyebrow">What we run</span><h2 className="disp">Full-funnel ecommerce marketing, under one roof</h2><p>Most agencies do one thing. Growth needs all of them working together. Every channel is a service we run in-house, and each links to how we deliver it.</p></div>
            <div className="ega-bento">
              {CHANNELS.map(({ Icon, title, body, link, label, span }) => (
                <Link key={title} href={link} className={`ega-crystal ega-bcard ${span}`}>
                  <div className="ic"><Icon size={22} strokeWidth={2} /></div>
                  <h3 className="disp">{title}</h3>
                  <p>{body}</p>
                  <span className="lk">{label} →</span>
                </Link>
              ))}
              <div className="ega-crystal ega-bcard w6">
                <div>
                  <div className="ic"><Bot size={22} strokeWidth={2} /></div>
                  <h3 className="disp">AI search & AI automation</h3>
                  <p>Get cited in ChatGPT and Google AI Overviews, and build AI agents that automate support, merchandising, and reporting. We do this now, so you win the channels your competitors have not figured out.</p>
                </div>
                <div className="mini"><span>AI SEO</span><span>Answer engines</span><span>AI agents</span><span>Automation</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4-Pillar Profit Telemetry ── */}
        <section className="ega-sec pt0">
          <div className="ega-wrap">
            <div className="ega-sh">
              <span className="ega-eyebrow">Financial Telemetry</span>
              <h2 className="disp">The 4-Pillar Ecommerce Profit Equation: Beyond Vanity ROAS</h2>
              <p>
                Raising ad spend without watching unit economics drains cash. We manage your growth against four financial measures:
              </p>
            </div>
            <ul className="ega-list" style={{ ...LIST_RESET, marginTop: 24 }}>
              <li className="ega-crystal ega-li">
                <span className="num" />
                <div>
                  <b>1. Marketing Efficiency Ratio (Blended MER)</b>
                  <p>
                    Rather than relying on isolated channel platform attribution, we calculate Blended MER (Total Top-Line Revenue divided by Total Marketing Ad Spend across all channels). We set your MER target from your own margins, so paid acquisition adds cash instead of draining it.
                  </p>
                </div>
              </li>
              <li className="ega-crystal ega-li">
                <span className="num" />
                <div>
                  <b>2. Net Contribution Margin (NCM) Modeling</b>
                  <p>
                    We map your gross margin, payment gateway fees, pick-pack-and-ship fulfillment expenses, and returns allowance to establish the exact breakeven Customer Acquisition Cost (CAC) for every SKU and product category in your catalog.
                  </p>
                </div>
              </li>
              <li className="ega-crystal ega-li">
                <span className="num" />
                <div>
                  <b>3. 60-Day &amp; 90-Day LTV:CAC Tracking</b>
                  <p>
                    Acquiring a customer at breakeven is a winning strategy only when your post-purchase email, SMS, and loyalty engine reliably produces repeat purchases within 60 days. We build retention flows that turn single-order buyers into repeat customers, and track LTV against CAC at 60 and 90 days.
                  </p>
                </div>
              </li>
              <li className="ega-crystal ega-li">
                <span className="num" />
                <div>
                  <b>4. Server-Side First-Party Attribution &amp; Meta CAPI Signal Recovery</b>
                  <p>
                    Browser privacy limits and iOS changes mean browser-only tracking misses some conversions. We set up server-side Meta Conversions API (CAPI) and Google Tag Manager server containers, so more real conversions reach the ad platforms.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* ── Full-Funnel Growth System ── */}
        <section className="ega-sec pt0">
          <div className="ega-wrap">
            <div className="ega-sh">
              <span className="ega-eyebrow">Omnichannel Architecture</span>
              <h2 className="disp">How Paid Media, Retention, CRO &amp; AI Search Work as One Engine</h2>
              <p>
                Shoppers see a brand in several places before they buy, so channels run in isolation waste spend. Here is how our senior in-house team keeps your growth stack in step:
              </p>
            </div>
            <ul className="ega-list" style={{ ...LIST_RESET, marginTop: 24 }}>
              <li className="ega-crystal ega-li">
                <span className="num" />
                <div>
                  <b>Paid Media (Meta Advantage+, Google PMax &amp; TikTok Shop Ads)</b>
                  <p>
                    We run UGC creative, short video hooks and value-based bidding (tROAS) aimed at in-market shoppers across Google Search, Google Shopping, YouTube, Instagram Reels and TikTok Shop. For large catalogs, Shopping campaigns are split by margin so budget goes to products that make money.
                  </p>
                </div>
              </li>
              <li className="ega-crystal ega-li">
                <span className="num" />
                <div>
                  <b>Klaviyo Lifecycle Retention &amp; RFM Predictive Segmentation</b>
                  <p>
                    We build automated email and SMS customer journeys, including welcome series, high-intent cart abandonment triggers, price drop alerts, VIP early access drops, and predictive replenishment flows based on SKU consumption cycles.
                  </p>
                </div>
              </li>
              <li className="ega-crystal ega-li">
                <span className="num" />
                <div>
                  <b>Conversion Rate Optimization &amp; Faster Checkout</b>
                  <p>
                    We run A/B tests on product detail pages (PDPs), sticky add-to-cart bars, in-cart bundle builders, trust badges and 1-click Shop Pay checkout, and keep only the changes that lift conversion on your own traffic.
                  </p>
                </div>
              </li>
              <li className="ega-crystal ega-li">
                <span className="num" />
                <div>
                  <b>Organic E-Commerce SEO &amp; Generative AI Search Optimization (GEO)</b>
                  <p>
                    We structure collection pages, product schema and buying guides so they rank in Google and are easier for ChatGPT, Perplexity and Google AI Overviews to cite.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 90-Day Compounding Growth Roadmap ── */}
        <section className="ega-sec pt0">
          <div className="ega-wrap">
            <div className="ega-sh">
              <span className="ega-eyebrow">Execution Methodology</span>
              <h2 className="disp">The 90-Day Compounding Ecommerce Growth Sprint Roadmap</h2>
              <p>
                A phased plan that goes after quick cash first, then builds the gains that grow over time:
              </p>
            </div>
            <ul className="ega-list" style={{ ...LIST_RESET, marginTop: 24 }}>
              <li className="ega-crystal ega-li">
                <span className="num" />
                <div>
                  <b>Sprint 1: Days 1-30 (Foundation &amp; Rapid Cash Flow Levers)</b>
                  <p>
                    Full technical audit, server-side CAPI pixel setup, Klaviyo high-intent core flows overhaul (Welcome, Abandoned Cart, Post-Purchase), ad account restructuring, and quick-win CRO fixes on high-traffic PDPs.
                  </p>
                </div>
              </li>
              <li className="ega-crystal ega-li">
                <span className="num" />
                <div>
                  <b>Sprint 2: Days 31-60 (Creative Testing &amp; Category Scaling)</b>
                  <p>
                    UGC ad creative testing with new angles and hooks each month, Google Shopping and Performance Max asset group segmentation, collection page SEO content optimization, in-cart bundle testing, and SMS list acceleration.
                  </p>
                </div>
              </li>
              <li className="ega-crystal ega-li">
                <span className="num" />
                <div>
                  <b>Sprint 3: Days 61-90 (Retention Compounding &amp; Omnichannel Expansion)</b>
                  <p>
                    Predictive RFM segmentation, custom loyalty reward tiers, marketplace synchronization (Amazon Storefront / TikTok Shop), AI customer support agent deployment, and full quarterly contribution margin financial review.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* LISTICLE 1 */}
        <section className="ega-sec pt0">
          <div className="ega-wrap">
            <div className="ega-sh"><span className="ega-eyebrow">The playbook</span><h2 className="disp">The 6 growth levers we pull for ecommerce brands</h2></div>
            <ul className="ega-list" style={LIST_RESET}>
              {LEVERS.map((l) => (
                <li key={l.b} className="ega-crystal ega-li"><span className="num" /><div><b>{l.b}</b><p>{l.p}</p></div></li>
              ))}
            </ul>
          </div>
        </section>

        {/* DARK */}
        <section className="ega-dark">
          <div className="ega-wrap ega-sec">
            <div className="ega-sh"><span className="ega-eyebrow">Why FactoryJet</span><h2 className="disp">Built to grow revenue, not to bill you for activity</h2><p>Three reasons brands move their growth to us and stay.</p></div>
            <div className="ega-pillars">
              <div className="ega-pillar"><div className="k">One team</div><h3 className="disp">Full funnel, not one channel</h3><p>Ads, email, SEO, CRO, and store fixes handled by people who talk to each other daily. No finger-pointing between three vendors.</p></div>
              <div className="ega-pillar"><div className="k">Senior</div><h3 className="disp">Senior people on your account</h3><p>The people in your kickoff are the people doing the work. A senior in-house team behind 500+ businesses served since 2014.</p></div>
              <div className="ega-pillar"><div className="k">AI-native</div><h3 className="disp">Ahead on AI commerce</h3><p>We build AI agents and optimize for AI search now, so you win the channels your competitors have not figured out yet.</p></div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="ega-sec">
          <div className="ega-wrap">
            <div className="ega-sh"><span className="ega-eyebrow">How it works</span><h2 className="disp">From free audit to compounding growth in four steps</h2></div>
            <ol className="ega-steps" style={LIST_RESET}>
              {STEPS.map((s) => (
                <li key={s.n} className="ega-step"><div className="n">{s.n}</div><h3 className="disp">{s.h}</h3><p>{s.p}</p></li>
              ))}
            </ol>
          </div>
        </section>

        {/* LISTICLE 2 */}
        <section className="ega-sec pt0">
          <div className="ega-wrap">
            <div className="ega-sh"><span className="ega-eyebrow">Before you hire anyone</span><h2 className="disp">6 things to look for in an ecommerce agency</h2><p>Use this as a checklist, whether you talk to us or anyone else.</p></div>
            <ul className="ega-list" style={LIST_RESET}>
              {CHECKS.map((c) => (
                <li key={c.b} className="ega-crystal ega-li"><span className="num" /><div><b>{c.b}</b><p>{c.p}</p></div></li>
              ))}
            </ul>
          </div>
        </section>

        {/* COMPARISON (reused v2 component) */}
        <section className="ega-sec pt0">
          <div className="ega-wrap">
            <ComparisonTable
              eyebrow="COMPARE"
              headline="FactoryJet vs a single-channel agency vs a freelancer vs in-house"
              columns={[
                { label: 'FactoryJet', isFactoryJet: true },
                { label: 'Single-channel agency' },
                { label: 'Freelancer' },
                { label: 'In-house hire' },
              ]}
              rows={[
                { feature: 'Full-funnel (ads, email, SEO, CRO)', values: [yes, no('One channel'), no('One skill'), partial('Depends on hire')] },
                { feature: 'Senior in-house team', values: [yes, partial('Often juniors'), yes, yes] },
                { feature: 'Store build + growth together', values: [yes, no('No'), no('No'), no('Rarely')] },
                { feature: 'AI search + AI automation', values: [yes, no('No'), no('No'), partial('Maybe')] },
                { feature: 'Time to ramp', values: [yes, partial('Weeks'), partial('Weeks'), no('Months')] },
                { feature: 'Profit-based reporting', values: [yes, partial('Channel metrics'), no('Limited'), yes] },
              ]}
            />
          </div>
        </section>

        {/* NAMED COMPETITORS */}
        <section className="ega-sec pt0">
          <div className="ega-wrap">
            <div className="ega-sh"><span className="ega-eyebrow">The alternatives</span><h2 className="disp">Named ecommerce agencies brands compare us with</h2><p>Plenty of good growth agencies exist. Here is where the known names fit, and where we fit.</p></div>
            <ul className="ega-list" style={LIST_RESET}>
              {RIVALS.map((r) => (
                <li key={r.b} className="ega-crystal ega-li"><span className="num" /><div><b>{r.b}</b><p>{r.p}</p></div></li>
              ))}
            </ul>
          </div>
        </section>

        {/* E-E-A-T */}
        <section className="ega-sec pt0">
          <div className="ega-wrap ega-eeat-grid">
            <div className="ega-crystal ega-eeat">
              <div><img className="ega-avatar" src="/bhavesh_avatar-240.webp" alt="Bhavesh Barot, Founder of FactoryJet" width={76} height={76} loading="lazy" decoding="async" /></div>
              <div>
                <div className="role">Led by the founder</div>
                <h3 className="disp">Bhavesh Barot, Founder of FactoryJet</h3>
                <p>Twelve years building and scaling commerce for 500+ businesses. Every engagement is run by FactoryJet&rsquo;s senior in-house team, not handed to subcontractors. You talk to the people doing the work.</p>
                <div className="ega-reco"><span>Recognized on</span>{RECOGNITION_PROFILES.slice(0, 4).map((p) => (<a key={p.href} href={p.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4"><b>{p.label}</b></a>))}</div>
              </div>
            </div>
            <div className="ega-teamframe">
              <img src="/images/us/services/service-team.webp" alt="The FactoryJet team at work" width={800} height={600} loading="lazy" decoding="async" />
            </div>
          </div>
        </section>

        {/* FAQ (reused v2 component, white background) */}
        <FAQ
          bgClassName="bg-white"
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Ecommerce growth agency FAQs"
          lead="The questions US ecommerce founders actually ask us. Straight answers."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* FINAL CTA */}
        <section className="ega-sec pt0" id="final-cta">
          <div className="ega-wrap">
            <div className="ega-finalcta">
              <span className="ega-eyebrow">Get started</span>
              <h2 className="disp">See where your store is leaving revenue on the table</h2>
              <p>Send us your store URL and get a free, no-obligation growth audit from FactoryJet&rsquo;s senior team.</p>
              <Link href="/contact" className="ega-cta-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#B23E13', color: '#fff', fontWeight: 600, fontSize: 16, padding: '15px 30px', borderRadius: 999, boxShadow: '0 4px 20px rgba(178,62,19,.34)' }}>Get my free growth audit</Link>
              <div className="obj">No long contracts. Keep the audit either way.</div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
