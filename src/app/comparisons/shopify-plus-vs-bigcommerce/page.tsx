import type { Metadata } from 'next';
import type { ReactNode } from 'react';
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
const PAGE_TITLE = 'BigCommerce vs Shopify Plus: Fees, B2B and APIs (2026)';
const PAGE_DESCRIPTION =
  'BigCommerce vs Shopify Plus: Performance vs Plus pricing, gateway fees, B2B quoting, API rate limits and headless options. Vendor sources checked 22 Oct 2026.';

/* Official sources, each fetched and read on 2026-10-22. */
const SRC = {
  plusPricing: 'https://www.shopify.com/plus/pricing',
  shopifyPricing: 'https://www.shopify.com/pricing',
  apiLimits: 'https://shopify.dev/docs/api/usage/limits',
  b2bPlans: 'https://help.shopify.com/en/manual/b2b/getting-started/plan-features',
  variants: 'https://help.shopify.com/en/manual/products/variants/add-variants',
  bcPricing: 'https://www.bigcommerce.com/pricing/',
  bcPlanUpdate: 'https://www.bigcommerce.com/dm/plan-pricing-updates-2026',
  bcRateLimits: 'https://docs.bigcommerce.com/docs/start/best-practices/api-rate-limits',
  bcB2b: 'https://www.bigcommerce.com/b2b-ecommerce/',
  catalyst: 'https://www.catalyst.dev/',
  checkoutJs: 'https://github.com/bigcommerce/checkout-js',
} as const;

const LINK = { color: 'var(--pp-orange-dark)', textDecoration: 'underline' } as const;
const INLINK = { color: 'var(--pp-orange-dark)', fontWeight: 600, textDecoration: 'underline' } as const;

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={LINK}>
      {children}
    </a>
  );
}

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    type: 'article',
    siteName: 'FactoryJet',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: 'https://factoryjet.com/comparisons/shopify-plus-vs-bigcommerce',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Shopify Plus vs BigCommerce Enterprise Comparison' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/comparisons/shopify-plus-vs-bigcommerce' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'tco', label: 'Plans, Fees & GMV Caps' },
  { key: 'b2b', label: 'B2B & Wholesale Features' },
  { key: 'technical', label: 'APIs, Checkout & Headless' },
  { key: 'decision', label: 'Choosing the Right Stack' },
];

const FAQ_ITEMS = [
  // Plans, Fees & GMV Caps
  {
    category: 'tco',
    question: 'How much does Shopify Plus cost compared with BigCommerce Performance?',
    answer:
      'Shopify Plus starts at $2,300 a month on a 3-year term or $2,500 a month on a 1-year term, or a variable platform fee for complex businesses. BigCommerce renamed its Enterprise plan to Performance on June 1, 2026, with custom pricing starting at $1,499 a month billed annually. Both prices move with volume, so ask each vendor for a written quote at your own GMV.',
  },
  {
    category: 'tco',
    question: 'Does BigCommerce charge transaction fees?',
    answer:
      'On the Performance plan under contract, BigCommerce lists its Open Payment Provider Fee at 0.0%. Self-service plans pay that fee on orders run through providers outside BigCommerce’s embedded list: 2.0% on Core, 1.0% on Growth and 0.6% on Scale. Orders through embedded providers, a list that includes Stripe, Adyen, PayPal Braintree and Worldpay, carry no BigCommerce fee on any plan.',
  },
  {
    category: 'tco',
    question: 'Does Shopify Plus charge a fee if I use Adyen or Stripe instead of Shopify Payments?',
    answer:
      'Yes. Shopify lists a 0.2% third-party transaction fee on Plus. On $20M of annual sales through an outside gateway, that is $40,000 a year (0.2% of $20M), on top of the processor’s own rate. BigCommerce Performance under contract charges 0.0% for the same setup. If you switch to Shopify Payments, Plus online card rates start at 2.25% + 30¢ and the 0.2% fee does not apply.',
  },
  {
    category: 'tco',
    question: 'What is the GMV cap on BigCommerce Scale, and when do I need Performance?',
    answer:
      'BigCommerce lists Scale at $299 a month billed annually ($399 month to month) with a GMV cap of $33,333 a month and 0.9% charged on GMV above the cap. BigCommerce counts GMV as gross order value minus 10%, on a trailing 12-month basis. It describes Performance as the plan for businesses with $1M+ in annual sales, which is where most Shopify Plus shoppers land too.',
  },
  {
    category: 'tco',
    question: 'Is Shopify Plus worth it over Shopify Advanced?',
    answer:
      'Plus pays off when you use what only Plus includes. Shopify’s pricing page lists unlimited B2B catalogs (3 on other plans), 200 inventory locations (10 on other plans), POS Pro for 20 locations, unlimited staff accounts, and up to 500% higher API call limits. If you need none of those, Advanced at $359 a month billed yearly covers a single large DTC store.',
  },

  // B2B & Wholesale
  {
    category: 'b2b',
    question: 'Is BigCommerce better than Shopify Plus for B2B wholesale?',
    answer:
      'For quote-heavy wholesale, often yes. BigCommerce’s B2B page lists quotes for B2B and B2C buyers, logging in on behalf of a company, company credit management, buyer tiers with role-based access, net terms per account, and shared shopping lists. Shopify covers companies, catalogs and net payment terms on every plan, with unlimited catalogs on Plus, but quote negotiation usually needs an app or custom build.',
  },
  {
    category: 'b2b',
    question: 'How do customer-specific price lists work on each platform?',
    answer:
      'BigCommerce Price Lists set SKU-level prices for customer groups, and its pricing table shows them on the Performance plan only. Shopify uses B2B catalogs assigned to company locations: Basic, Grow and Advanced allow 3 active catalogs across all B2B markets, while Plus allows unlimited catalogs. If you have dozens of price tiers, both work, but on Shopify it has to be Plus.',
  },
  {
    category: 'b2b',
    question: 'Can our sales reps place orders on behalf of wholesale buyers?',
    answer:
      'Yes on both, in different ways. BigCommerce lists the ability to log in on behalf of a company, so a rep sees exactly what the buyer sees. On Shopify, staff build draft orders for a company location and send the buyer a checkout link, and Shopify’s B2B features table lists checkout to draft on every plan. Reps who quote by phone usually prefer the BigCommerce flow.',
  },
  {
    category: 'b2b',
    question: 'Which platform handles net terms and credit limits better?',
    answer:
      'Both offer net payment terms. BigCommerce goes further on its B2B page by listing company account credit management. Shopify’s B2B plan page lists net payment terms and vaulted cards but does not list credit limits, so on Shopify we usually hold credit limits in the ERP and block orders through a sync rule. If credit control is daily work for your team, weigh this row heavily.',
  },
  {
    category: 'b2b',
    question: 'Is Shopify Plus or BigCommerce better for manufacturers?',
    answer:
      'It depends on how dealers buy. If they reorder from price sheets and saved lists, both platforms fit. If they need negotiated quotes for configured products, BigCommerce B2B has more of that built in. If you also run a consumer brand, Shopify Plus lets one admin serve DTC shoppers and dealers, with POS for showrooms. See our Shopify Plus B2B page for the dealer setup we build.',
  },

  // APIs, Checkout & Headless
  {
    category: 'technical',
    question: 'How do Shopify and BigCommerce API rate limits compare?',
    answer:
      'BigCommerce publishes 20k requests an hour (150 per 30 seconds) on Core and Growth and 60k an hour (450 per 30 seconds) on Scale. Performance limits are set by plan and resource, and some Performance clients get an Unlimited Rate Plan with no request rate limits. Shopify’s GraphQL Admin API uses a calculated query cost by plan, and Plus lists up to 500% higher call limits.',
  },
  {
    category: 'technical',
    question: 'What catalog limits should a large BigCommerce store check before moving to Shopify?',
    answer:
      'Three. Shopify allows 2,048 variants and three options per product. Once a store passes 500,000 variants, Shopify throttles new variants to 10,000 a day, though that throttle does not apply on Plus. And any API input array tops out at 250 items, so bulk jobs must be batched. BigCommerce imports rarely hit these, so test your biggest product and your nightly ERP job first.',
  },
  {
    category: 'technical',
    question: 'Which is better for a headless Next.js storefront?',
    answer:
      'Both are strong. BigCommerce backs Catalyst, which it describes as a UI kit and GraphQL Storefront API client optimized for Next.js and React Server Components. Shopify offers the Storefront API, where real buyer traffic is not rate-limited, and says Plus stores can deploy its React-based headless stack at no extra cost. Choose on the back office you prefer, since either front end works.',
  },
  {
    category: 'technical',
    question: 'How does checkout customization compare?',
    answer:
      'Shopify Plus customizes checkout through checkout UI extensions and Shopify Functions, which run inside Shopify’s hosted checkout. BigCommerce publishes its one-page checkout on GitHub and documents how to fork it and install it as a custom checkout. That gives BigCommerce developers more direct control of checkout markup. Shopify’s approach means fewer upgrade risks, since Shopify maintains the checkout itself.',
  },
  {
    category: 'technical',
    question: 'How do multi-store and international setups compare?',
    answer:
      'BigCommerce sells Multi-Storefront, which runs several storefronts from one control panel. Shopify Plus handles the same need with expansion stores, up to ten on one Plus contract at no added cost, plus Shopify Markets and Managed Markets for selling across countries from a single store. If your brands share one catalog and one team, BigCommerce Multi-Storefront is simpler. Separate brands with separate teams often suit Shopify expansion stores.',
  },
  {
    category: 'technical',
    question: 'Which platform has better point-of-sale support?',
    answer:
      'Shopify. Its pricing page lists POS Pro with 20 locations included on Plus, and up to 200 with Shopify Payments, all sharing one stock pool with the online store. BigCommerce lists inventory locations on each plan (4 on Core, 5 on Growth, 8 on Scale, custom on Performance) and connects to outside POS systems through apps. Retail-heavy brands usually lean to Shopify for this reason.',
  },

  // Choosing the Right Stack
  {
    category: 'decision',
    question: 'Is BigCommerce better than Shopify?',
    answer:
      'For some stores, yes. BigCommerce wins when you process through your own gateway, need built-in B2B quoting, or want direct control of checkout code. Shopify Plus wins when you sell mostly to consumers, run retail stores, want Shop Pay at checkout, or need its larger app ecosystem. Neither is better across the board. List your top five must-haves and score both against them.',
  },
  {
    category: 'decision',
    question: 'Who is Shopify’s biggest competitor for larger stores?',
    answer:
      'For stores past $1M a year, buyers usually shortlist Shopify Plus against BigCommerce, Adobe Commerce (Magento), Salesforce Commerce Cloud and WooCommerce. BigCommerce is the closest like-for-like match, because both are hosted services with monthly fees. Adobe Commerce and WooCommerce give you code you host yourself. Our other comparison pages cover Shopify Plus vs Magento and Shopify vs WooCommerce in the same format.',
  },
  {
    category: 'decision',
    question: 'Is Shopify still worth it in 2026?',
    answer:
      'For most consumer brands, yes. Shopify says it has shipped over 100 product updates every 6 months since 2020 and reports 99.99% average uptime during the biggest sales events of the year. Those are Shopify’s own claims on its Plus pricing page. The case weakens if you sell mostly through your own gateway, where the 0.2% third-party fee adds up.',
  },
  {
    category: 'decision',
    question: 'When should a brand choose Shopify Plus over BigCommerce?',
    answer:
      'Choose Shopify Plus if most revenue comes from consumers, you sell in physical stores, you want Shop Pay at checkout, or you plan to sell across many countries with Managed Markets. Plus also suits teams that want one admin for DTC and a modest wholesale channel. If you would accept Shopify Payments as your processor, the gateway-fee gap with BigCommerce disappears.',
  },
  {
    category: 'decision',
    question: 'When should a brand choose BigCommerce over Shopify Plus?',
    answer:
      'Choose BigCommerce if you must keep a specific processor contract, your wholesale buyers negotiate quotes, reps need to log in as a buyer, or you run several storefronts off one catalog with Multi-Storefront. It also suits teams whose ERP sync is heavy, if your Performance contract includes the Unlimited Rate Plan. Confirm that in writing, because BigCommerce offers it to some Performance clients, not all.',
  },
  {
    category: 'decision',
    question: 'Can FactoryJet migrate a store from BigCommerce to Shopify Plus?',
    answer:
      'Yes. We move products, customers, order history and URLs, and every old URL gets a one-to-one 301 redirect in a single hop. Advanced builds that include a migration take 5 to 8 weeks. You see a working demo on your own data before you sign, and the price is fixed per phase. FactoryJet is a registered Shopify Partner, and you own all code we write.',
  },
  {
    category: 'decision',
    question: 'How do we get a platform recommendation that is not tied to one vendor?',
    answer:
      'Book a 30-minute scoping call with founder Bhavesh Barot. Send your catalog size, ERP, payment processor and B2B rules beforehand. We score both platforms against those inputs and tell you which one we would pick and why, including when the answer is to stay where you are. FactoryJet quotes a fixed price in writing after a short scoping call.',
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
  headline: 'BigCommerce vs Shopify Plus: Fees, B2B and APIs',
  description: PAGE_DESCRIPTION,
  dateModified: PAGE_MODIFIED,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Founder & Principal Commerce Architect',
    url: 'https://factoryjet.com',
  },
  publisher: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  url: 'https://factoryjet.com/comparisons/shopify-plus-vs-bigcommerce',
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Comparisons', item: 'https://factoryjet.com/best-ecommerce-platforms' },
    { '@type': 'ListItem', position: 3, name: 'Shopify Plus vs BigCommerce', item: 'https://factoryjet.com/comparisons/shopify-plus-vs-bigcommerce' },
  ],
};

const STATS = [
  { b: 'Sourced fees', s: 'from both vendors’ own pages' },
  { b: 'B2B matrix', s: 'quotes, price lists, net terms' },
  { b: 'Demo first', s: 'on your own data, before you sign' },
  { b: '500+ clients', s: 'businesses served since 2014' },
];

const SOURCED = [
  {
    v: '$1,499/mo',
    d: 'starting price for BigCommerce Performance (formerly Enterprise), custom pricing billed annually since June 1, 2026.',
    src: 'BigCommerce 2026 plan update, checked 22 Oct 2026',
    href: SRC.bcPlanUpdate,
  },
  {
    v: '$2,300/mo',
    d: 'Shopify Plus starting price on a 3-year term ($2,500 on a 1-year term), or a variable platform fee for complex businesses.',
    src: 'Shopify Plus pricing, checked 22 Oct 2026',
    href: SRC.plusPricing,
  },
  {
    v: '0.2% vs 0.0%',
    d: 'Shopify Plus fee on orders through a third-party gateway, against BigCommerce Performance’s Open Payment Provider Fee under contract.',
    src: 'Shopify and BigCommerce pricing, checked 22 Oct 2026',
    href: SRC.bcPricing,
  },
];

const PILLARS = [
  { i: '◈', t: '1. Plan fee and gateway fee', d: 'Compare the monthly plan, the per-order fee for your processor, and the GMV cap that forces a plan change.' },
  { i: '◇', t: '2. B2B depth', d: 'Check quotes, rep login as buyer, credit limits, price lists per group and shared lists against your wholesale process.' },
  { i: '↯', t: '3. API limits for ERP sync', d: 'Shopify meters GraphQL by query cost. BigCommerce meters requests per 30 seconds, with custom limits on Performance.' },
  { i: '▤', t: '4. Checkout control', d: 'Shopify Plus extends a hosted checkout. BigCommerce lets developers fork its one-page checkout code from GitHub.' },
  { i: '⛓', t: '5. Headless path', d: 'Hydrogen and the Storefront API on Shopify. Catalyst and the GraphQL Storefront API on BigCommerce.' },
  { i: '⤢', t: '6. Retail and channels', d: 'Shopify POS Pro covers 20 locations on Plus. BigCommerce connects to outside POS systems and sells Multi-Storefront.' },
];

export default function ShopifyVsBigCommercePage() {
  return (
    <>
      <script id="sp-bc-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="sp-bc-art-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script id="sp-bc-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader navLinks={[]} cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        {/* ── Hero ── */}
        <section className="pp-dotgrid">
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">Platform comparison · Updated 22 October 2026</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '18ch' }}>
                  Shopify Plus vs <span className="pp-grad">BigCommerce Enterprise.</span>
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  Choose BigCommerce if you keep your own payment processor, sell wholesale on negotiated quotes, or want to
                  fork the checkout code. Choose Shopify Plus if you sell mostly to consumers, run retail stores, or want Shop Pay.
                  Plus starts at $2,300 a month (<Ext href={SRC.plusPricing}>Shopify</Ext>); BigCommerce Performance starts at
                  $1,499 a month billed annually (<Ext href={SRC.bcPricing}>BigCommerce</Ext>).
                </p>
                <HeroInlineForm source="us_shopify_vs_bigcommerce_hero" region="us" submitLabel="Get Platform Architecture Scope" />
              </div>

              {/* Visual Architecture Graphic */}
              <div
                role="img"
                aria-label="Shopify Plus vs BigCommerce comparison showing where each platform is stronger: consumer checkout and retail versus gateway choice and B2B quoting."
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
                  Where each one is stronger
                  <small style={{ display: 'block', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-orange-dark)', fontWeight: 600, marginTop: '2px' }}>
                    Shopify Plus (DTC &amp; POS focus) vs BigCommerce (B2B &amp; gateway choice)
                  </small>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                  <div style={{ border: '1px solid var(--pp-line)', borderRadius: '10px', background: '#FAF8F5', padding: '14px 12px' }}>
                    <b style={{ fontFamily: 'var(--pp-disp)', fontSize: '14px', display: 'block', color: 'var(--pp-ink)', borderBottom: '1px solid var(--pp-line)', paddingBottom: '6px' }}>Shopify Plus</b>
                    <ul style={{ fontSize: '12px', color: 'var(--pp-body)', marginTop: '8px', paddingLeft: '14px', display: 'grid', gap: '4px' }}>
                      <li>Shop Pay at checkout</li>
                      <li>One admin for DTC + B2B</li>
                      <li>POS Pro for retail stores</li>
                      <li>Checkout Functions</li>
                    </ul>
                  </div>
                  <div style={{ border: '1px solid var(--pp-line)', borderRadius: '10px', background: '#FAF8F5', padding: '14px 12px' }}>
                    <b style={{ fontFamily: 'var(--pp-disp)', fontSize: '14px', display: 'block', color: 'var(--pp-ink)', borderBottom: '1px solid var(--pp-line)', paddingBottom: '6px' }}>BigCommerce Performance</b>
                    <ul style={{ fontSize: '12px', color: 'var(--pp-body)', marginTop: '8px', paddingLeft: '14px', display: 'grid', gap: '4px' }}>
                      <li>No gateway fee under contract</li>
                      <li>Built-in B2B quotes</li>
                      <li>Forkable one-page checkout</li>
                      <li>Multi-Storefront</li>
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
                    Senior Architecture Advisory
                  </div>
                  <div>Sourced fees · Fixed price per phase</div>
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
            <p className="pp-mlabel">// the short verdict</p>
            <h2 style={{ marginTop: '10px' }}>BigCommerce vs Shopify Plus: which one fits your store</h2>
            <div style={{ margin: '24px 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 12px 36px rgba(0,0,0,0.06)' }}>
              <Image
                src={`${IMG}/platform-comparison-two-column-screen.webp`}
                alt="A man standing beside a wall screen that shows two columns of coloured bars while a woman writes on a pad at the table"
                width={1280}
                height={800}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                These two are the closest match in the market: both are hosted services, both charge a monthly fee, and both
                run large catalogs. BigCommerce renamed its Enterprise plan to Performance on June 1, 2026
                (<Ext href={SRC.bcPlanUpdate}>BigCommerce</Ext>), so older comparisons that say &ldquo;BigCommerce Enterprise&rdquo;
                mean the same tier. The choice comes down to your payment setup, your B2B process and your sales channels.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Choose Shopify Plus if</h3>
              <ul style={{ margin: '14px 0', paddingLeft: '20px', display: 'grid', gap: '8px' }}>
                <li>Most revenue comes from consumers and you want Shop Pay in checkout.</li>
                <li>You run physical stores: POS Pro for 20 locations is included on Plus (<Ext href={SRC.shopifyPricing}>Shopify pricing</Ext>).</li>
                <li>You can use Shopify Payments, which removes the 0.2% third-party gateway fee.</li>
                <li>Your wholesale side needs companies, catalogs and net terms more than negotiated quotes (<Ext href={SRC.b2bPlans}>Shopify B2B features</Ext>).</li>
                <li>You want a large app ecosystem and a hosted headless stack at no extra cost on Plus (<Ext href={SRC.plusPricing}>Shopify Plus</Ext>).</li>
              </ul>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Choose BigCommerce if</h3>
              <ul style={{ margin: '14px 0', paddingLeft: '20px', display: 'grid', gap: '8px' }}>
                <li>You have a processor contract you must keep, and you sign a Performance contract with a 0.0% Open Payment Provider Fee.</li>
                <li>Wholesale buyers request quotes and reps need to log in on behalf of a company (<Ext href={SRC.bcB2b}>BigCommerce B2B</Ext>).</li>
                <li>Credit limits per company account are daily work for your finance team.</li>
                <li>You want developers to fork and edit the checkout itself (<Ext href={SRC.checkoutJs}>checkout-js on GitHub</Ext>).</li>
                <li>Your ERP pushes heavy volumes, and your contract includes BigCommerce&apos;s Unlimited Rate Plan.</li>
              </ul>
              <p>
                Selling to dealers and consumers at once? Read how we set up{' '}
                <a href="/services/shopify-plus-b2b" style={INLINK}>Shopify Plus B2B</a>, or see the wider{' '}
                <a href="/b2b-ecommerce" style={INLINK}>B2B ecommerce</a> guide.
              </p>
            </div>
          </div>
        </section>

        {/* ── Sourced Stats ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// sourced figures</p>
            <h2 style={{ marginTop: '10px' }}>The three numbers buyers ask about first</h2>
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
            <p className="pp-mlabel">// what to evaluate</p>
            <h2 style={{ marginTop: '10px' }}>Six things to check before you sign either contract</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '64ch' }}>
              Feature lists look alike. These six checks are where the two platforms differ in practice.
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
        <section className="pp-sec" id="platform-roi-calculator">
          <div className="pp-wrap">
            <EcommerceRoiCalculator
              source="us_shopify_vs_bigcommerce_comparison_page"
              defaultPlatform="magento"
              defaultTarget="shopify-plus"
            />
          </div>
        </section>

        {/* ── Detailed Comparison Matrix ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// specs and fees, with sources</p>
            <h2 style={{ marginTop: '10px' }}>Shopify Plus vs BigCommerce: specs and fees side by side</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              Every row comes from the vendor&apos;s own page and shows US list prices. Contract pricing at your volume will differ.
            </p>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Shopify Plus</th>
                    <th>BigCommerce Performance</th>
                    <th>Source</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="me">
                    <td className="name">Plan price</td>
                    <td>From $2,300/mo (3-year term) or $2,500/mo (1-year term), or a variable platform fee</td>
                    <td>Custom pricing from $1,499/mo, billed annually (renamed from Enterprise on June 1, 2026)</td>
                    <td><Ext href={SRC.plusPricing}>Shopify</Ext> and <Ext href={SRC.bcPlanUpdate}>BigCommerce</Ext>, checked 22 Oct 2026</td>
                  </tr>
                  <tr>
                    <td className="name">Fee for an outside payment gateway</td>
                    <td>0.2% per order</td>
                    <td>0.0% under contract (self-service plans: 2.0% Core, 1.0% Growth, 0.6% Scale)</td>
                    <td><Ext href={SRC.shopifyPricing}>Shopify</Ext> and <Ext href={SRC.bcPricing}>BigCommerce</Ext>, checked 22 Oct 2026</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Own card processing (US online)</td>
                    <td>Shopify Payments from 2.25% + 30¢ standard, 2.95% + 30¢ premium</td>
                    <td>BigCommerce Payments or an embedded provider such as Stripe, Adyen or Braintree, at that provider&apos;s rate</td>
                    <td><Ext href={SRC.shopifyPricing}>Shopify</Ext> and <Ext href={SRC.bcPricing}>BigCommerce</Ext>, checked 22 Oct 2026</td>
                  </tr>
                  <tr>
                    <td className="name">B2B</td>
                    <td>Companies, catalogs, net terms on all plans; unlimited B2B catalogs on Plus (3 elsewhere)</td>
                    <td>Quotes, log in on behalf of a company, credit management, buyer roles, net terms, shopping lists; Price Lists on Performance</td>
                    <td><Ext href={SRC.b2bPlans}>Shopify</Ext> and <Ext href={SRC.bcB2b}>BigCommerce</Ext>, checked 22 Oct 2026</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Admin API limits</td>
                    <td>Calculated query cost by plan; Plus lists up to 500% higher API call limits</td>
                    <td>Set by plan and resource; some clients get an Unlimited Rate Plan (Scale: 60k/hour)</td>
                    <td><Ext href={SRC.apiLimits}>Shopify</Ext> and <Ext href={SRC.bcRateLimits}>BigCommerce docs</Ext>, checked 22 Oct 2026</td>
                  </tr>
                  <tr>
                    <td className="name">Variants per product</td>
                    <td>Up to 2,048 variants and 3 options</td>
                    <td>Products, file storage and bandwidth listed as included on every plan</td>
                    <td><Ext href={SRC.variants}>Shopify</Ext> and <Ext href={SRC.bcPricing}>BigCommerce</Ext>, checked 22 Oct 2026</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Checkout customization</td>
                    <td>Checkout customizations, including Shop Pay and payment pages, plus Shopify Functions</td>
                    <td>One-page checkout published on GitHub, documented to fork and install as a custom checkout</td>
                    <td><Ext href={SRC.plusPricing}>Shopify</Ext> and <Ext href={SRC.checkoutJs}>GitHub</Ext>, checked 22 Oct 2026</td>
                  </tr>
                  <tr>
                    <td className="name">Headless</td>
                    <td>Storefront API; React-based headless stack at no extra cost</td>
                    <td>Catalyst, optimized for Next.js and React Server Components</td>
                    <td><Ext href={SRC.plusPricing}>Shopify</Ext> and <Ext href={SRC.catalyst}>Catalyst</Ext>, checked 22 Oct 2026</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Retail and stock locations</td>
                    <td>POS Pro with 20 locations included; 200 inventory locations</td>
                    <td>Inventory locations: custom on Performance (8 on Scale)</td>
                    <td><Ext href={SRC.shopifyPricing}>Shopify</Ext> and <Ext href={SRC.bcPricing}>BigCommerce</Ext>, checked 22 Oct 2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Advanced Architectural Breakdown ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// architectural deep-dive</p>
            <h2 style={{ marginTop: '10px' }}>API limits and checkout: what developers notice first</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                If an ERP or PIM (product information system) pushes thousands of updates a night, rate limits decide how long
                that job takes. Here is what each vendor publishes:
              </p>
              <ul style={{ margin: '14px 0', paddingLeft: '20px', display: 'grid', gap: '8px' }}>
                <li><strong>BigCommerce Core and Growth:</strong> 20k requests an hour, or 150 every 30 seconds (<Ext href={SRC.bcRateLimits}>BigCommerce docs</Ext>).</li>
                <li><strong>BigCommerce Scale:</strong> 60k requests an hour, or 450 every 30 seconds.</li>
                <li><strong>BigCommerce Performance:</strong> set by plan and resource; some clients get an Unlimited Rate Plan with no request rate limits.</li>
                <li><strong>Shopify GraphQL Admin API:</strong> a calculated query cost by plan, enforced as a leaky bucket that refills over time (<Ext href={SRC.apiLimits}>Shopify API limits</Ext>).</li>
                <li><strong>Shopify inputs:</strong> any array input is capped at 250 items, and pagination stops at 25,000 objects, so large syncs run in batches.</li>
              </ul>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Checkout: extend it or fork it</h3>
              <p>
                On Shopify Plus you extend a checkout that Shopify hosts and maintains, using checkout UI extensions for the
                screen and Shopify Functions for discount, shipping and payment rules. On BigCommerce, developers can fork the
                one-page checkout from GitHub and install their own version. Forking gives more control and more upkeep, since
                your copy has to keep up with BigCommerce changes.
              </p>
            </div>
          </div>
        </section>

        {/* ── Payments & fee walk-through ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// payments &amp; fees</p>
            <h2 style={{ marginTop: '10px' }}>How payment fees play out on each platform</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Payment fees are the line item most comparisons get wrong, because both vendors changed their terms. As of
                22 October 2026, this is how they stack up:
              </p>
              <ul style={{ margin: '14px 0', paddingLeft: '20px', display: 'grid', gap: '8px' }}>
                <li><strong>Shopify Plus with Shopify Payments:</strong> online card rates from 2.25% + 30¢ and no third-party fee (<Ext href={SRC.shopifyPricing}>Shopify pricing</Ext>).</li>
                <li><strong>Shopify Plus with your own gateway:</strong> your processor&apos;s rate plus Shopify&apos;s 0.2% third-party fee.</li>
                <li><strong>BigCommerce with an embedded provider:</strong> $0 BigCommerce fee on every plan; the list includes Stripe, Adyen, PayPal Braintree, Checkout.com and Worldpay (<Ext href={SRC.bcPricing}>BigCommerce pricing</Ext>).</li>
                <li><strong>BigCommerce with any other provider:</strong> 0.0% on Performance under contract, 0.6% to 2.0% on self-service plans.</li>
              </ul>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>How to compare for your own store</h3>
              <ol style={{ margin: '14px 0', paddingLeft: '20px', display: 'grid', gap: '8px' }}>
                <li>Pull last year&apos;s GMV and your current processor&apos;s effective rate from statements.</li>
                <li>Price Shopify Plus twice: once with Shopify Payments, once with your processor plus 0.2%.</li>
                <li>Ask BigCommerce for a Performance quote that names the Open Payment Provider Fee and API limits in writing.</li>
                <li>Add the apps or custom work each platform needs for your B2B and retail must-haves.</li>
                <li>Run the totals through our <a href="/tools/replatforming-cost-calculator" style={INLINK}>replatforming cost calculator</a> over three years.</li>
              </ol>
              <p>
                Already on BigCommerce and leaning to Shopify? Our{' '}
                <a href="/replatforming/bigcommerce-to-shopify-plus" style={INLINK}>BigCommerce to Shopify Plus migration</a> page covers the move,
                and our <a href="/services/shopify-plus-agency" style={INLINK}>Shopify Plus agency</a> team builds the store. Also weighing an
                older platform? See <a href="/comparisons/shopify-plus-vs-magento" style={INLINK}>Shopify Plus vs Magento</a> or{' '}
                <a href="/headless-commerce" style={INLINK}>headless commerce</a>.
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
                headline="Frequently asked questions about Shopify Plus vs BigCommerce"
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
                <p className="pp-mlabel">// platform architecture consultation</p>
                <h2 style={{ margin: '12px 0 16px' }}>Unsure which platform fits your 3-year roadmap?</h2>
                <p className="pp-lead" style={{ maxWidth: '44ch' }}>
                  Book a call with our founder. We review your catalog, payment setup and ERP data flows, then recommend one
                  platform. FactoryJet quotes a fixed price in writing after a short scoping call.
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
                    <span>Founder, FactoryJet &bull; building commerce since 2014</span>
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
