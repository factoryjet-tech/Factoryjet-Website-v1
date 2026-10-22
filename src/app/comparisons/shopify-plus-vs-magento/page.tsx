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
const PAGE_TITLE = 'Shopify Plus vs Magento 2: Cost, Support and Fit (2026)';
const PAGE_DESCRIPTION =
  'Shopify Plus vs Magento 2 and Adobe Commerce: list prices, gateway fees, Adobe support deadlines, B2B and variant limits. Sources checked 22 Oct 2026.';

/* Official sources, each fetched and read on 2026-10-22. */
const SRC = {
  plusPricing: 'https://www.shopify.com/plus/pricing',
  shopifyPricing: 'https://www.shopify.com/pricing',
  apiLimits: 'https://shopify.dev/docs/api/usage/limits',
  variants: 'https://help.shopify.com/en/manual/products/variants/add-variants',
  b2bPlans: 'https://help.shopify.com/en/manual/b2b/getting-started/plan-features',
  adobeLifecycle: 'https://experienceleague.adobe.com/en/docs/commerce-operations/release/planning/lifecycle-policy',
  adobeSysreq: 'https://experienceleague.adobe.com/en/docs/commerce-operations/installation-guide/system-requirements',
  adobeB2b: 'https://experienceleague.adobe.com/en/docs/commerce-admin/b2b/introduction',
  magentoRepo: 'https://github.com/magento/magento2',
  adobePricing: 'https://business.adobe.com/products/commerce/pricing.html',
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
    url: 'https://factoryjet.com/comparisons/shopify-plus-vs-magento',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Shopify Plus vs Magento Adobe Commerce Comparison' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/comparisons/shopify-plus-vs-magento' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'tco', label: 'Prices & Fees' },
  { key: 'maintenance', label: 'Support & Upgrades' },
  { key: 'velocity', label: 'Features & Limits' },
  { key: 'migration', label: 'Switching & Next Steps' },
];

const FAQ_ITEMS = [
  // Prices & Fees
  {
    category: 'tco',
    question: 'What does Shopify Plus cost compared with Magento?',
    answer:
      'Shopify Plus starts at $2,300 a month on a 3-year term or $2,500 a month on a 1-year term, and Shopify may charge a variable platform fee instead for complex businesses. Magento Open Source has no licence fee; its code is published on GitHub under OSL 3.0. Adobe Commerce is sold through Adobe sales, so its price comes as a quote. On Magento you also pay separately for hosting, extensions and the people who apply patches.',
  },
  {
    category: 'tco',
    question: 'Is Shopify Plus cheaper than Magento 2 over three years?',
    answer:
      'It depends on what you pay today for hosting, extensions and upgrade work. Shopify Plus folds hosting and platform updates into the subscription, so those lines mostly disappear. Magento leaves them with you, and they grow when a version leaves support. To compare fairly, list the last 12 months of Magento invoices next to 36 months of the Plus fee plus the apps you would add. Our replatforming cost calculator walks through the same lines.',
  },
  {
    category: 'tco',
    question: 'Does Shopify Plus charge a fee if I keep my own payment gateway?',
    answer:
      'Yes. Shopify lists a 0.2% third-party transaction fee on the Plus plan when orders go through a gateway other than Shopify Payments. Magento charges no platform fee per order, whichever processor you use, so you pay only the processor. If you plan to keep an existing Adyen, Braintree or Authorize.Net contract, add that 0.2% of revenue to your Plus cost model before comparing.',
  },
  {
    category: 'tco',
    question: 'What are Shopify Payments card rates on Shopify Plus in the US?',
    answer:
      'Shopify lists Plus online standard card rates from 2.25% + 30¢, premium cards at 2.95% + 30¢, and an extra 1% for international cards. In-person card rates on Plus are 2.3% + 10¢. On Magento, rates come from the processor contract you sign, so pull your current effective rate from last quarter’s statements and compare it with these figures before you decide.',
  },
  {
    category: 'tco',
    question: 'What does Shopify Plus include that Magento needs extensions or hosting for?',
    answer:
      'Shopify’s pricing page lists unlimited web hosting, a free SSL certificate, unlimited staff accounts, POS Pro with 20 locations included, and unlimited B2B catalogs on Plus. On Magento Open Source you add these through your host, extensions or custom code. Adobe Commerce ships its own B2B module, so the gap is smaller there, but hosting and certificates still sit with you or Adobe’s Cloud plan.',
  },

  // Support & Upgrades
  {
    category: 'maintenance',
    question: 'Is Magento 2 still supported in 2026?',
    answer:
      'Yes. Adobe released Adobe Commerce 2.4.9 on May 12, 2026, with standard support until May 31, 2029. Adobe gives each version three years of standard support from its release date. Older lines are closing: 2.4.6 standard support ended August 11, 2026, and 2.4.4 extended support ended April 14, 2026. Magento 2 itself is current software. Stores stuck on old 2.4.x lines are the ones at risk.',
  },
  {
    category: 'maintenance',
    question: 'What are the main disadvantages of Magento?',
    answer:
      'The biggest one is upkeep. You own the server stack, which for 2.4.9 means PHP 8.5, MariaDB 12.3, OpenSearch 3, Valkey 9 and RabbitMQ 4.3 at the versions Adobe tests. Every release line must be upgraded inside its support window. Extensions run inside the same codebase, so one module can break checkout after an upgrade. Teams with in-house PHP developers cope well. Small teams usually struggle.',
  },
  {
    category: 'maintenance',
    question: 'Is Magento outdated compared with Shopify Plus?',
    answer:
      'No. Magento is older, but it is still active, with a 2026 release and a public GitHub repository. What has changed is the effort to run it. Shopify Plus moves hosting and core updates to Shopify, while Magento keeps them with you. Brands that need deep code changes still pick Magento. Brands that want fewer moving parts and a smaller technical team tend to pick Plus.',
  },
  {
    category: 'maintenance',
    question: 'What happens to Adobe Commerce Cloud stores on unsupported versions after June 2027?',
    answer:
      'Adobe says that from June 1, 2027 it will stop maintaining Cloud environments that run unsupported Commerce versions and may suspend traffic, which takes the storefront offline. If you run 2.4.4 through 2.4.6 on Adobe’s Cloud, you must upgrade, move to Adobe Commerce as a Cloud Service, or replatform before your line’s deadline. Self-hosted Open Source stores are outside this rule but still lose security patches.',
  },
  {
    category: 'maintenance',
    question: 'Who applies security patches on Shopify Plus vs Magento?',
    answer:
      'On Shopify Plus, Shopify patches the platform and there is no version for you to install. On Magento, Adobe publishes cumulative security patches and isolated patch files, and your team or agency applies and tests them. Adobe also states it does not fix third-party dependencies such as PHP and MySQL that reach end of life, so those upgrades fall to you as well.',
  },
  {
    category: 'maintenance',
    question: 'Do people still use Magento in 2026?',
    answer:
      'Yes. Adobe still ships releases and runs Adobe Commerce on Cloud, and the open-source edition is maintained on GitHub. Many merchants with heavy B2B rules or custom PHP stay put. The pressure on them comes from version deadlines, not from the software going away. Check which 2.4.x line you run and find its end date in Adobe’s lifecycle table before planning anything.',
  },

  // Features & Limits
  {
    category: 'velocity',
    question: 'What are the key differences between Magento and Shopify Plus?',
    answer:
      'Ownership is the main one. Magento is software you host and change at the code level. Shopify Plus is a hosted service you extend through apps, Shopify Functions and checkout UI extensions. Magento gives full code access and charges no platform transaction fee. Plus gives managed hosting, Shop Pay, and POS Pro with 20 locations included. The right pick depends on how much engineering you want to own.',
  },
  {
    category: 'velocity',
    question: 'Can Shopify handle products with as many options as Magento configurable products?',
    answer:
      'Up to a point. Shopify allows 2,048 variants per product and three options per product. Magento configurable products are built from attributes you define, so an item with four or five option axes, such as size, colour, length and finish, needs a different model on Shopify. Common fixes are split products linked by metafields or Shopify’s Combined Listings app. Check your largest product before choosing.',
  },
  {
    category: 'velocity',
    question: 'How do B2B features compare between Adobe Commerce and Shopify Plus?',
    answer:
      'Both cover the basics. Adobe Commerce B2B includes company accounts, shared catalogs, negotiable quotes, requisition lists, purchase orders and pay on account. Shopify includes companies, catalogs and net payment terms on all plans, and Plus lifts the 3-catalog cap to unlimited B2B catalogs. Negotiated quotes are built into Adobe Commerce. On Shopify, quote haggling usually runs through draft orders or an app.',
  },
  {
    category: 'velocity',
    question: 'Is Shopify Plus or Magento better for a headless storefront?',
    answer:
      'Both can run headless. Shopify Plus offers the Storefront API and says you can deploy its React-based headless stack, Hydrogen, at no extra cost. Magento exposes GraphQL and REST APIs, and you host both the front end and the PHP back end. Headless on Magento therefore means two stacks to run. On Plus it means one front end plus Shopify’s hosted back end.',
  },
  {
    category: 'velocity',
    question: 'How much checkout traffic can Shopify Plus take during a big sale?',
    answer:
      'Shopify says its checkout is load-tested at 10K+ checkouts per minute and reports 99.99% average uptime across Shopify during the biggest sales events of the year. Those are Shopify’s own figures, published on its Plus pricing page. On Magento, peak capacity depends on your hosting, full-page cache and database setup, so run a load test at least a month before peak season.',
  },
  {
    category: 'velocity',
    question: 'Can Shopify Plus connect to our ERP the way Magento does?',
    answer:
      'Yes. Shopify Plus connects to ERPs through the Admin API, webhooks and middleware, and Shopify’s pricing page lists up to 500% higher API call limits on Plus than on other plans. We have built links to Odoo, NetSuite, SAP Business One and ERPNext. Agree which system owns price, stock and customer records before the build starts, because that choice shapes every sync rule.',
  },

  // Switching & Next Steps
  {
    category: 'migration',
    question: 'Should I upgrade Magento or move to Shopify Plus?',
    answer:
      'Upgrade if your store depends on custom PHP modules, Adobe B2B quoting or hosting you control, and your team can keep pace with releases. Move if most of your budget goes to keeping the stack alive rather than shipping features. A quick test: add up the hours spent on upgrades, patches and extension conflicts in the last 12 months, then compare that with the Plus fee.',
  },
  {
    category: 'migration',
    question: 'How long does a Magento to Shopify Plus move take with FactoryJet?',
    answer:
      'We plan advanced builds, which include migrations, at 5 to 8 weeks, and headless or custom builds at 8 to 14 weeks. The main drivers are product data clean-up, the number of Magento extensions to replace, and ERP links. You see a working demo on your own data before you sign, and the price is fixed per phase and agreed in writing.',
  },
  {
    category: 'migration',
    question: 'What happens to Magento URLs and rankings when we switch?',
    answer:
      'Magento URLs often end in .html and sit at the site root, while Shopify uses fixed paths such as /products/ and /collections/. Every old URL needs a one-to-one 301 redirect to its new page, in a single hop. Plus stores can hold up to 20 million redirects. We crawl the live site, build the map, and test each redirect on staging first. Rankings can still move for a few weeks while Google re-crawls.',
  },
  {
    category: 'migration',
    question: 'Which Magento extensions need replacing on Shopify Plus?',
    answer:
      'Most extensions map to a Shopify app or a built-in feature: layered navigation to Search & Discovery filters, custom checkout steps to checkout UI extensions, custom pricing rules to Shopify Functions. Extensions that rewrite core Magento classes have no direct match and need a fresh design. List every module in app/code and composer.json, then mark each one keep, replace or drop.',
  },
  {
    category: 'migration',
    question: 'Can we move from Shopify Plus back to Magento later?',
    answer:
      'Yes. Shopify lets you export products, customers and orders as CSV files or through the Admin API, and Magento can import them. Themes and apps do not carry over, and customer passwords cannot be exported, so customers reset them on first login. Keep your redirect map on file so the 301s can be reversed, and you own any custom code we write.',
  },
  {
    category: 'migration',
    question: 'Who can give a fair Shopify Plus vs Magento recommendation?',
    answer:
      'Ideally a team that builds on both, so the advice is not tied to one platform. FactoryJet works on Shopify as a registered Shopify Partner and also does Magento development, so we can scope an upgrade and a move side by side. Book a 30-minute call with founder Bhavesh Barot and we will compare both paths for your store.',
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
  headline: 'Shopify Plus vs Magento 2 (Adobe Commerce): Cost, Support and Fit',
  description: PAGE_DESCRIPTION,
  dateModified: PAGE_MODIFIED,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Founder & Principal Commerce Architect',
    url: 'https://factoryjet.com',
  },
  publisher: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  url: 'https://factoryjet.com/comparisons/shopify-plus-vs-magento',
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Comparisons', item: 'https://factoryjet.com/best-ecommerce-platforms' },
    { '@type': 'ListItem', position: 3, name: 'Shopify Plus vs Magento', item: 'https://factoryjet.com/comparisons/shopify-plus-vs-magento' },
  ],
};

const STATS = [
  { b: 'Hosted vs self-run', s: 'who patches the servers' },
  { b: 'Demo first', s: 'on your own data, before you sign' },
  { b: 'Fixed price', s: 'per phase, agreed in writing' },
  { b: 'Since 2014', s: '500+ businesses served' },
];

const SOURCED = [
  {
    v: '$2,300/mo',
    d: 'Shopify Plus starting price on a 3-year term ($2,500 a month on a 1-year term), or a variable platform fee for more complex businesses.',
    src: 'Shopify Plus pricing, checked 22 Oct 2026',
    href: SRC.plusPricing,
  },
  {
    v: '3 years',
    d: 'standard support Adobe gives each Adobe Commerce version from its release date. Adobe Commerce 2.4.6 left standard support on August 11, 2026.',
    src: 'Adobe Commerce lifecycle policy, checked 22 Oct 2026',
    href: SRC.adobeLifecycle,
  },
  {
    v: 'June 1, 2027',
    d: 'date from which Adobe stops maintaining Cloud environments on unsupported versions and may suspend their traffic, taking the storefront offline.',
    src: 'Adobe Commerce lifecycle policy, checked 22 Oct 2026',
    href: SRC.adobeLifecycle,
  },
];

const PILLARS = [
  { i: '◈', t: '1. Who runs the servers', d: 'Shopify hosts Plus stores. Magento Open Source runs on hosting you pick and manage; Adobe Commerce can run on Adobe’s Cloud.' },
  { i: '◇', t: '2. Who installs upgrades', d: 'Shopify updates the platform for everyone at once. On Magento your team upgrades each 2.4.x line before Adobe’s support date passes.' },
  { i: '↯', t: '3. How checkout is changed', d: 'Plus uses checkout UI extensions and Shopify Functions. Magento lets developers edit checkout code directly, with more freedom and more testing.' },
  { i: '▤', t: '4. How the catalog is modelled', d: 'Shopify caps products at 2,048 variants and three options. Magento builds configurable products from any attributes you define.' },
  { i: '⛓', t: '5. How B2B is handled', d: 'Adobe Commerce B2B has negotiable quotes and requisition lists built in. Shopify covers companies, catalogs and net terms on every plan.' },
  { i: '⤢', t: '6. How fees are charged', d: 'Plus charges a monthly fee plus 0.2% on third-party gateways. Magento charges no per-order platform fee; you pay hosting and people instead.' },
];

export default function ShopifyVsMagentoPage() {
  return (
    <>
      <script id="sp-mag-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="sp-mag-art-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script id="sp-mag-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader navLinks={[]} cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        {/* ── Hero ── */}
        <section className="pp-dotgrid">
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">Platform comparison · Updated 22 October 2026</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '18ch' }}>
                  Shopify Plus vs <span className="pp-grad">Magento Adobe Commerce.</span>
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  Pick Shopify Plus if you want Shopify to run hosting, security patches and checkout for a fee that starts at
                  $2,300 a month on a 3-year term (<Ext href={SRC.plusPricing}>Shopify</Ext>). Stay on Magento if you need to change
                  core code, control your own servers, or keep Adobe&apos;s built-in B2B quoting. Either way, each Adobe Commerce
                  version gets three years of standard support (<Ext href={SRC.adobeLifecycle}>Adobe</Ext>), so plan upgrades.
                </p>
                <HeroInlineForm source="us_shopify_vs_magento_hero" region="us" submitLabel="Get a Magento Migration Scope" />
              </div>

              {/* Visual Architecture Graphic */}
              <div
                role="img"
                aria-label="Shopify Plus vs Magento Adobe Commerce comparison showing who runs hosting, patches, checkout and code on each platform."
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
                  Who owns what
                  <small style={{ display: 'block', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-orange-dark)', fontWeight: 600, marginTop: '2px' }}>
                    Shopify Plus (hosted service) vs Magento (software you run)
                  </small>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                  <div style={{ border: '1px solid var(--pp-line)', borderRadius: '10px', background: '#FAF8F5', padding: '14px 12px' }}>
                    <b style={{ fontFamily: 'var(--pp-disp)', fontSize: '14px', display: 'block', color: 'var(--pp-ink)', borderBottom: '1px solid var(--pp-line)', paddingBottom: '6px' }}>Shopify Plus</b>
                    <ul style={{ fontSize: '12px', color: 'var(--pp-body)', marginTop: '8px', paddingLeft: '14px', display: 'grid', gap: '4px' }}>
                      <li>Shopify hosts and patches</li>
                      <li>Shop Pay at checkout</li>
                      <li>Apps and Functions extend it</li>
                      <li>Monthly platform fee</li>
                    </ul>
                  </div>
                  <div style={{ border: '1px solid var(--pp-line)', borderRadius: '10px', background: '#FAF8F5', padding: '14px 12px' }}>
                    <b style={{ fontFamily: 'var(--pp-disp)', fontSize: '14px', display: 'block', color: 'var(--pp-ink)', borderBottom: '1px solid var(--pp-line)', paddingBottom: '6px' }}>Magento 2</b>
                    <ul style={{ fontSize: '12px', color: 'var(--pp-body)', marginTop: '8px', paddingLeft: '14px', display: 'grid', gap: '4px' }}>
                      <li>You host and patch</li>
                      <li>Full access to PHP code</li>
                      <li>Version upgrades on a clock</li>
                      <li>No per-order platform fee</li>
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
                    Migration Engineering
                  </div>
                  <div>One-to-one 301 map · Fixed price per phase</div>
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
            <h2 style={{ marginTop: '10px' }}>Shopify Plus vs Magento 2: which one fits your store</h2>
            <div style={{ margin: '24px 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 12px 36px rgba(0,0,0,0.06)' }}>
              <Image
                src={`${IMG}/replatforming-cost-chart-review.webp`}
                alt="A woman at a white desk holding a printed bar chart beside a laptop that shows the same chart"
                width={1280}
                height={800}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Magento and Shopify Plus solve the same problem with opposite trade-offs. Magento (sold by Adobe as Adobe Commerce,
                with a free edition called Magento Open Source) is software: you get the full PHP code, and you carry the hosting,
                upgrades and patching. Shopify Plus is a hosted service: Shopify carries those jobs, and you work inside its APIs,
                apps and limits.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Shopify Plus is the better fit if</h3>
              <ul style={{ margin: '14px 0', paddingLeft: '20px', display: 'grid', gap: '8px' }}>
                <li>Your team spends more time on upgrades, patches and extension conflicts than on new features.</li>
                <li>You sell mostly direct to consumers and want Shop Pay and POS Pro, which comes with 20 locations on Plus (<Ext href={SRC.shopifyPricing}>Shopify pricing</Ext>).</li>
                <li>Your products fit inside 2,048 variants and three options each (<Ext href={SRC.variants}>Shopify Help Center</Ext>).</li>
                <li>Your B2B needs are companies, price catalogs and net terms, which Shopify covers on every plan (<Ext href={SRC.b2bPlans}>Shopify B2B plan features</Ext>).</li>
                <li>Your current Magento line is close to its end of support and the upgrade is large anyway.</li>
              </ul>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Magento is the better fit if</h3>
              <ul style={{ margin: '14px 0', paddingLeft: '20px', display: 'grid', gap: '8px' }}>
                <li>You rely on custom PHP modules that change how orders, pricing or stock behave at the core.</li>
                <li>Buyers negotiate quotes, use requisition lists or buy through purchase orders, all built into Adobe Commerce B2B (<Ext href={SRC.adobeB2b}>Adobe</Ext>).</li>
                <li>You must host on your own servers or in a specific cloud region for contract or compliance reasons.</li>
                <li>You have in-house PHP developers who can keep pace with each 2.4.x release.</li>
                <li>You want to avoid Shopify&apos;s 0.2% fee on third-party gateways because you have a low processor rate already.</li>
              </ul>
              <p>
                Not sure which list describes you? Our{' '}
                <a href="/services/magento-development" style={INLINK}>Magento development</a> and{' '}
                <a href="/services/shopify-plus-agency" style={INLINK}>Shopify Plus</a> teams scope both paths, so the advice is not tied to one platform.
              </p>
            </div>
          </div>
        </section>

        {/* ── Sourced Stats ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// sourced figures</p>
            <h2 style={{ marginTop: '10px' }}>Three dates and prices that drive the decision</h2>
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
            <p className="pp-mlabel">// architectural comparison</p>
            <h2 style={{ marginTop: '10px' }}>Six differences that matter more than feature lists</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '64ch' }}>
              Both platforms can run a large store. These six questions decide which one costs your team less effort.
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
        <section className="pp-sec" id="magento-roi-calculator">
          <div className="pp-wrap">
            <EcommerceRoiCalculator
              source="us_shopify_vs_magento_comparison_page"
              defaultPlatform="magento"
              defaultTarget="shopify-plus"
            />
          </div>
        </section>

        {/* ── Sourced Spec & Fee Table ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// specs and fees, with sources</p>
            <h2 style={{ marginTop: '10px' }}>Shopify Plus vs Magento: specs and fees side by side</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              Every row comes from the vendor&apos;s own page. Prices are US list prices. Adobe does not publish an Adobe Commerce
              list price, so that cell says so instead of guessing.
            </p>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Shopify Plus</th>
                    <th>Magento 2 / Adobe Commerce</th>
                    <th>Source</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="me">
                    <td className="name">Platform fee</td>
                    <td>From $2,300/mo (3-year term) or $2,500/mo (1-year term), or a variable platform fee</td>
                    <td>Open Source: no licence fee, code under OSL 3.0. Adobe Commerce: quoted by Adobe sales</td>
                    <td><Ext href={SRC.plusPricing}>Shopify</Ext>, <Ext href={SRC.magentoRepo}>GitHub</Ext> and <Ext href={SRC.adobePricing}>Adobe</Ext>, checked 22 Oct 2026</td>
                  </tr>
                  <tr>
                    <td className="name">Online card rate (US)</td>
                    <td>Shopify Payments from 2.25% + 30¢ standard, 2.95% + 30¢ premium, +1% international</td>
                    <td>Set by the processor you contract with</td>
                    <td><Ext href={SRC.shopifyPricing}>Shopify pricing</Ext>, checked 22 Oct 2026</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Fee for a third-party gateway</td>
                    <td>0.2% per order</td>
                    <td>No platform fee per order</td>
                    <td><Ext href={SRC.shopifyPricing}>Shopify pricing</Ext>, checked 22 Oct 2026</td>
                  </tr>
                  <tr>
                    <td className="name">Hosting</td>
                    <td>Unlimited web hosting and free SSL included</td>
                    <td>You run it. Adobe tests 2.4.9 on-premises with PHP 8.5, MariaDB 12.3 or MySQL 8.4, OpenSearch 3, Valkey 9, RabbitMQ 4.3, nginx 1.30</td>
                    <td><Ext href={SRC.shopifyPricing}>Shopify</Ext> and <Ext href={SRC.adobeSysreq}>Adobe system requirements</Ext>, checked 22 Oct 2026</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Upgrades and support window</td>
                    <td>No versions to install; Shopify updates the platform</td>
                    <td>3 years of standard support per version. 2.4.7 ends May 31, 2027; 2.4.9 ends May 31, 2029</td>
                    <td><Ext href={SRC.adobeLifecycle}>Adobe lifecycle policy</Ext>, checked 22 Oct 2026</td>
                  </tr>
                  <tr>
                    <td className="name">Variants per product</td>
                    <td>Up to 2,048 variants and 3 options</td>
                    <td>Configurable products built from attributes you define</td>
                    <td><Ext href={SRC.variants}>Shopify Help Center</Ext>, checked 22 Oct 2026</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Bulk variant creation</td>
                    <td>Plus is exempt from the 10,000 new variants a day throttle that applies after 500,000 variants</td>
                    <td>Limited by your own servers</td>
                    <td><Ext href={SRC.apiLimits}>Shopify API limits</Ext>, checked 22 Oct 2026</td>
                  </tr>
                  <tr>
                    <td className="name">B2B</td>
                    <td>Unlimited B2B catalogs on Plus (3 on other plans); companies and net terms on all plans</td>
                    <td>Adobe Commerce B2B: company accounts, shared catalogs, negotiable quotes, requisition lists, purchase orders</td>
                    <td><Ext href={SRC.b2bPlans}>Shopify</Ext> and <Ext href={SRC.adobeB2b}>Adobe</Ext>, checked 22 Oct 2026</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Peak checkout</td>
                    <td>Shopify reports 10K+ checkouts per minute load-tested and 99.99% average uptime in its biggest sales events</td>
                    <td>Depends on your hosting and caching</td>
                    <td><Ext href={SRC.plusPricing}>Shopify Plus pricing</Ext>, checked 22 Oct 2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Enterprise Migration Architecture Deep Dive ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// what upkeep looks like</p>
            <h2 style={{ marginTop: '10px' }}>What running Magento involves that Shopify Plus takes off your plate</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Running Magento 2.4.9 on your own servers means keeping each part of Adobe&apos;s tested on-premises stack at the right
                version. Adobe states it only supports the combinations in its table (<Ext href={SRC.adobeSysreq}>Adobe system requirements</Ext>):
              </p>
              <ul style={{ margin: '14px 0', paddingLeft: '20px', display: 'grid', gap: '8px' }}>
                <li><strong>PHP 8.5:</strong> the language Magento runs on. Adobe does not patch PHP itself.</li>
                <li><strong>MariaDB 12.3 or MySQL 8.4:</strong> the database that holds products, customers and orders.</li>
                <li><strong>OpenSearch 3:</strong> the search engine behind catalog search and layered navigation.</li>
                <li><strong>Valkey 9 and Varnish 8:</strong> the caches that keep sessions and full pages fast.</li>
                <li><strong>RabbitMQ 4.3:</strong> the message queue that runs background jobs such as bulk imports.</li>
                <li><strong>nginx 1.30 and Composer 2.10:</strong> the web server and the tool that installs Magento packages.</li>
              </ul>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Patching is your job on Magento</h3>
              <p>
                Adobe ships cumulative security patches and isolated patch files during the three-year window, plus hotfixes for
                zero-day issues on supported versions (<Ext href={SRC.adobeLifecycle}>Adobe lifecycle policy</Ext>). Someone on your
                side applies each one, runs regression tests on staging, and deploys. On Shopify Plus that work does not exist for you,
                because there is no version to install.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Freedom has a cost on Shopify</h3>
              <p>
                The trade is control. You cannot edit Shopify&apos;s core, and you work within its limits, such as three options per
                product. Custom checkout logic moves into Shopify Functions and checkout UI extensions. If your store depends on
                a long list of core overrides, price those rewrites before you compare subscription fees. Our{' '}
                <a href="/tools/replatforming-cost-calculator" style={INLINK}>replatforming cost calculator</a> helps you list them.
              </p>
            </div>
          </div>
        </section>

        {/* ── Enterprise Replatforming Risk Mitigation ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// if you decide to move</p>
            <h2 style={{ marginTop: '10px' }}>How a Magento to Shopify Plus move runs, step by step</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                If the lists above point to Shopify Plus, this is the order we work in. Advanced builds that include a migration
                take 5 to 8 weeks; headless or custom builds take 8 to 14 weeks.
              </p>
              <ol style={{ margin: '14px 0', paddingLeft: '20px', display: 'grid', gap: '8px' }}>
                <li><strong>Extension audit:</strong> list every module in app/code and composer.json and mark it keep, replace or drop.</li>
                <li><strong>Catalog model:</strong> map Magento EAV attributes (product fields stored as separate rows) to Shopify metafields, and split any product above 2,048 variants or three options.</li>
                <li><strong>Demo on your data:</strong> we load a slice of your real catalog into a working Shopify store before you sign.</li>
                <li><strong>Data move:</strong> products, customers and order history move by script, with counts and totals checked against Magento.</li>
                <li><strong>Integrations:</strong> ERP, tax and shipping links are rebuilt. See our <a href="/services/ecommerce-erp-integration" style={INLINK}>ERP integration work</a>.</li>
                <li><strong>Redirect map:</strong> every indexed Magento URL gets a one-to-one 301 to its new Shopify path, in a single hop.</li>
                <li><strong>Staging tests:</strong> we test checkout, tax, emails and every redirect before DNS changes.</li>
                <li><strong>Launch and cover:</strong> defects found after launch are fixed inside the build price for a cover period agreed before work starts.</li>
              </ol>
              <p>
                For published cost ranges and the full runbook, see our{' '}
                <a href="/replatforming/magento-to-shopify#migration-runbook" style={INLINK}>
                  Magento to Shopify Plus migration guide
                </a>{' '}
                or the <a href="/services/shopify-migration-agency" style={INLINK}>Shopify migration service</a>. Weighing a third option?
                Read <a href="/comparisons/shopify-plus-vs-bigcommerce" style={INLINK}>Shopify Plus vs BigCommerce</a>.
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
                headline="Frequently asked questions about Shopify Plus vs Magento"
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
                <p className="pp-mlabel">// replatforming consultation</p>
                <h2 style={{ margin: '12px 0 16px' }}>Upgrade Magento or move to Shopify Plus?</h2>
                <p className="pp-lead" style={{ maxWidth: '44ch' }}>
                  Book a call with our founder. We review your Magento version, extensions and integrations, then lay out both paths.
                  FactoryJet quotes a fixed price in writing after a short scoping call.
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
                    src="/images/testimonials/ricky-belle-maison-160.webp"
                    alt="Ricky B, Belle Maison"
                    width={46}
                    height={46}
                    style={{ borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--pp-line)' }}
                  />
                  <div>
                    <b>Ricky B.</b>
                    <span>Founder, Belle Maison</span>
                  </div>
                </div>
                <blockquote>
                  &ldquo;We were live in 6 days, I genuinely did not believe that was possible. The design is
                  stunning, the WhatsApp integration brings in inquiries every day, and the site has stayed
                  lightning fast.&rdquo;
                </blockquote>
                <div className="rate">
                  <a href="/case-studies/belle-maison-ecommerce-success" style={{ color: 'var(--pp-orange-dark)', fontWeight: 600, textDecoration: 'underline' }}>
                    Read the Belle Maison case study →
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
