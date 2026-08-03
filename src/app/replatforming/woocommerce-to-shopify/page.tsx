import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-08-03';

export const metadata: Metadata = {
  title: 'WooCommerce to Shopify Migration Services | WordPress Replatforming | FactoryJet',
  description:
    'WooCommerce to Shopify migration services. We move WooCommerce and WordPress stores to Shopify or Shopify Plus with complete permalink mapping, single-hop 301 redirects, customers and order history, subscriptions, custom fields to metafields, and plugin replacement. Fixed proposal before any work starts.',
  openGraph: {
    type: 'website', siteName: 'FactoryJet',
    title: 'WooCommerce to Shopify Migration Services | FactoryJet',
    description: 'WooCommerce and WordPress to Shopify migration with permalink mapping, order history, subscriptions, and plugin replacement.',
    url: 'https://factoryjet.com/replatforming/woocommerce-to-shopify',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet WooCommerce to Shopify migration services' }],
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: 'WooCommerce to Shopify Migration | FactoryJet', description: 'WooCommerce to Shopify migration without losing rankings, order history, or subscriptions.', images: ['https://factoryjet.com/og-default.png'] },
  alternates: { canonical: 'https://factoryjet.com/replatforming/woocommerce-to-shopify' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Migration basics' },
  { key: 'data', label: 'Data & products' },
  { key: 'seo', label: 'SEO & permalinks' },
  { key: 'plugins', label: 'Plugins & content' },
  { key: 'process', label: 'Process & timing' },
];

const FAQ_ITEMS = [
  { category: 'basics', question: 'Why do WooCommerce stores migrate to Shopify?', answer: 'Usually one of three reasons: the plugin stack has become fragile and updates break things, the security and hosting maintenance burden falls on a team that does not want it, or the checkout underperforms and improving it means yet another plugin. Shopify trades plugin-level control for a hosted platform with a checkout you do not maintain.' },
  { category: 'basics', question: 'Is WooCommerce worse than Shopify?', answer: 'No, they are different trade-offs. WooCommerce gives you complete control and no platform fees in exchange for owning hosting, security, updates, and plugin compatibility. Shopify handles all of that and charges for it. The right answer depends on whether your team wants to operate infrastructure, not on which platform is better.' },
  { category: 'basics', question: 'Should we stay on WooCommerce instead?', answer: 'Often yes. If your team is comfortable maintaining WordPress, your plugin stack is stable, and your hosting is solid, migrating is expensive disruption for limited gain. We recommend staying when the real problem is a slow theme, a bad host, or an unoptimised checkout, all of which are far cheaper to fix in place.' },
  { category: 'basics', question: 'What are the best WooCommerce alternatives?', answer: 'Shopify and Shopify Plus are the most common destination, because they remove hosting and plugin maintenance entirely. BigCommerce suits mid-market catalogues with strong native B2B. Adobe Commerce fits very large or highly customised catalogues. Squarespace and Wix only make sense if you are simplifying rather than scaling. We compare them against your actual plugin stack rather than a feature grid.' },
  { category: 'basics', question: 'Who else does WooCommerce to Shopify migrations?', answer: 'The space splits into tools and agencies. LitExtension, Cart2Cart, and Matrixify are self-serve data-migration tools that move records but leave URL mapping, plugin replacement, subscriptions, and integrations to you. Agencies including Meetanshi, DigitalSuits, HeyCarson, and Magefan take on the full project, as we do. If your store is small and has no subscriptions or integrations, a tool may genuinely be enough, and we will say so.' },
  { category: 'basics', question: 'Can we keep WordPress for content and move only the store?', answer: 'Yes, and for content-heavy sites this is sometimes the better answer. WordPress stays for the blog and marketing pages while commerce moves to Shopify, connected under one domain via subdomain or reverse proxy. It adds architectural complexity, so it is worth it when the content operation is genuinely substantial.' },
  { category: 'data', question: 'What data migrates from WooCommerce to Shopify?', answer: 'Products including simple, variable, and grouped types, categories and tags, images, customers and address books, order and refund history, coupons, product reviews, blog posts and pages, and existing redirects. Custom fields, often built with ACF or a plugin, map to Shopify metafields, which is usually the largest single piece of data work.' },
  { category: 'data', question: 'How do WooCommerce product types map to Shopify?', answer: 'Simple products map directly. Variable products become Shopify products with variant options, subject to Shopify variant limits. Grouped and external or affiliate products have no direct equivalent and need a decision: rebuild as collections, as metafield-driven bundles, or drop them. We identify these during the audit rather than at build time.' },
  { category: 'data', question: 'What happens to custom fields and ACF data?', answer: 'They become Shopify metafields. WooCommerce stores accumulate custom fields in postmeta over years, many written by plugins that are no longer active. We audit which fields are actually populated and rendered before mapping, because porting everything reproduces the mess on a new platform.' },
  { category: 'data', question: 'Will customer passwords transfer?', answer: 'No. WordPress stores password hashes in a format Shopify cannot import, and no honest agency will claim otherwise. Accounts migrate without passwords and customers go through a reset at launch. We plan that communication in advance so it does not read as a breach notice.' },
  { category: 'data', question: 'Does order history come across?', answer: 'Yes. WooCommerce order data lives in the WordPress database and can be exported and imported so customers keep seeing past purchases and your reporting stays continuous. Very large archives sometimes import as summarised records with full detail kept in an exportable archive, which we agree with you rather than deciding quietly.' },
  { category: 'data', question: 'What about WooCommerce Subscriptions?', answer: 'Subscriptions do not transfer automatically and this is the single most underestimated part of a WooCommerce migration. Active subscriptions carry payment tokens tied to your existing gateway. Depending on the gateway, tokens may be portable, or subscribers may need to re-authorise. This has to be resolved before cutover, not after.' },
  { category: 'seo', question: 'Will we lose rankings migrating from WooCommerce?', answer: 'Not if permalink mapping is complete. WooCommerce permalinks are configurable, so two stores can have entirely different URL structures, and the defaults use /product/ and /product-category/ where Shopify uses /products/ and /collections/. We crawl every indexed URL, map each to its equivalent, and ship single-hop 301 redirects before launch.' },
  { category: 'seo', question: 'How do WooCommerce permalinks map to Shopify?', answer: 'It depends entirely on how your permalinks were configured, which is why we never assume. Common WooCommerce structures nest products under a shop base or a category path; Shopify uses fixed /products/ and /collections/ prefixes and does not nest. Every pattern in use has to be identified from a real crawl rather than from the settings page.' },
  { category: 'seo', question: 'What happens to our WordPress blog URLs?', answer: 'Shopify blog URLs sit under /blogs/{blog}/{article}, which almost never matches a WordPress permalink structure. For content-heavy sites this is the largest redirect mapping job in the migration, and it matters because the blog usually carries a meaningful share of the site\'s links and rankings.' },
  { category: 'seo', question: 'Do you migrate our existing redirects?', answer: 'Yes. WooCommerce sites usually carry years of redirects in a plugin such as Redirection or in the SEO plugin. Those have to be flattened and re-pointed at the new destination, otherwise you inherit two-hop chains on launch day where an old URL redirects to another old URL that then redirects again.' },
  { category: 'seo', question: 'What about Yoast or RankMath metadata?', answer: 'Titles, meta descriptions, and canonical settings live in plugin tables and need extracting and mapping rather than re-writing from scratch. Schema generated by those plugins also disappears with them, so structured data has to be rebuilt in the Shopify theme and validated before cutover.' },
  { category: 'plugins', question: 'What happens to our WooCommerce plugins?', answer: 'None transfer. Each needs a Shopify app equivalent, a custom build, or a decision to drop it. Auditing the plugin list is where the real scope of a WooCommerce migration appears, because most stores run plugins nobody remembers installing alongside a handful that are genuinely load-bearing.' },
  { category: 'plugins', question: 'Can you replace our tax and shipping plugins?', answer: 'Usually yes. Shopify handles a lot of tax and shipping logic natively that WooCommerce needs plugins for, so this often simplifies. Complex rules such as per-zone rate tables, dimensional weight, or carrier-specific logic may need an app or Shopify Functions, which we scope explicitly rather than assuming native coverage.' },
  { category: 'plugins', question: 'What about multi-vendor marketplaces built on Dokan or WCFM?', answer: 'Multi-vendor is a genuine architectural difference, not a plugin swap. Shopify has no native multi-vendor model, so it needs a marketplace app or a custom build with vendor payouts handled deliberately. This changes the scope enough that we treat it as a separate conversation rather than a line item.' },
  { category: 'plugins', question: 'Do product reviews migrate?', answer: 'Yes, with care. WooCommerce reviews are stored as WordPress comments, so they export cleanly but need mapping into whichever Shopify reviews app you choose. Review counts and ratings are a real trust and rich-result asset, so losing them in migration is a genuine cost, not a cosmetic one.' },
  { category: 'plugins', question: 'What about multilingual sites using WPML or Polylang?', answer: 'Shopify handles multiple languages differently, through Markets and translation apps rather than duplicated posts. A WPML site does not map one-to-one, and the hreflang structure has to be rebuilt. If translation is central to your traffic, this deserves scoping before anything else in the migration.' },
  { category: 'process', question: 'How long does a WooCommerce to Shopify migration take?', answer: 'Most run from a few weeks to a few months. Catalog size matters less than the plugin list, subscription complexity, and how much content needs migrating alongside the store. Data quality moves the estimate more than anything else, which is why we audit before quoting.' },
  { category: 'process', question: 'How much does it cost to migrate from WooCommerce to Shopify?', answer: 'It depends on catalog size, the plugin stack, whether subscriptions are involved, how much blog content moves, and integration depth. We scope it on a short call and send a fixed proposal before any work starts, so the number does not move mid-project.' },
  { category: 'process', question: 'Will our store go down during cutover?', answer: 'No. We build and test on staging, run a full data migration, then a delta sync of anything that changed during the build, and switch DNS at a low-traffic window. The WooCommerce store stays reachable until the new one is verified, so rollback is a DNS change rather than a rebuild.' },
  { category: 'process', question: 'What do you need from us to start?', answer: 'Admin access or a full database export, a complete plugin list, details of any active subscriptions and the gateway behind them, and ideally a crawl of your indexed URLs. Having those ready shortens scoping considerably and surfaces the expensive surprises while they are still cheap.' },
  { category: 'process', question: 'Do we own the new Shopify store?', answer: 'Yes. You own the code, the data, and the platform accounts. Nothing is rented back to you and there is no proprietary layer you cannot maintain without us.' },
];

const FAQ_SCHEMA = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ_ITEMS.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })) };
const SERVICE_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'Service', serviceType: 'WooCommerce to Shopify migration',
  name: 'WooCommerce and WordPress to Shopify migration',
  description: 'WooCommerce to Shopify and Shopify Plus migration services including product type mapping, custom field and ACF data to metafields, customer and order history migration, subscription and payment token handling, permalink crawling with single-hop 301 redirects, plugin replacement, and blog content migration.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
};
const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  '@id': 'https://factoryjet.com/replatforming/woocommerce-to-shopify#webpage',
  url: 'https://factoryjet.com/replatforming/woocommerce-to-shopify',
  name: 'WooCommerce to Shopify Migration Services',
  description: 'WooCommerce and WordPress to Shopify migration with permalink mapping, order history, subscriptions, and plugin replacement.',
  dateModified: PAGE_MODIFIED,
  author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://www.linkedin.com/in/bhaveshbarot/', jobTitle: 'Founder, FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
};
const ORG_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com',
  description: 'FactoryJet is an e-commerce development agency that builds and migrates commerce platforms for US brands.',
  sameAs: ['https://www.linkedin.com/company/factoryjet'],
};
const BREADCRUMB_SCHEMA = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
  { '@type': 'ListItem', position: 2, name: 'Replatforming', item: 'https://factoryjet.com/replatforming' },
  { '@type': 'ListItem', position: 3, name: 'WooCommerce to Shopify', item: 'https://factoryjet.com/replatforming/woocommerce-to-shopify' },
] };

const STATS = [
  { b: 'Permalinks', s: 'crawled, never assumed' },
  { b: 'Subscriptions', s: 'resolved before cutover' },
  { b: 'Plugins', s: 'audited one by one' },
  { b: 'Blog content', s: 'mapped, not dropped' },
];
const WHY = [
  { i: '⚠', t: 'The plugin stack is fragile', d: 'Every WordPress or plugin update is a compatibility risk, and the more plugins you run the more often something breaks at an inconvenient moment.' },
  { i: '⛨', t: 'Security is your problem', d: 'Self-hosted means you own patching, hardening, and PCI evidence. Plenty of teams would rather that were somebody else\'s job.' },
  { i: '$', t: 'Hosting plus plugins plus a developer', d: 'The free platform is rarely free once managed hosting, premium plugin licences, and a retainer are added up.' },
  { i: '◷', t: 'Checkout needs another plugin', d: 'Improving conversion on WooCommerce often means adding more of exactly the thing that made the site fragile.' },
];
const HARD = [
  { t: 'Subscriptions and payment tokens', d: 'The most underestimated part. Active WooCommerce Subscriptions carry gateway payment tokens. Whether those port depends on the gateway, and if they do not, subscribers must re-authorise. Resolve this before cutover or you churn your recurring revenue.' },
  { t: 'Permalinks are configurable', d: 'WooCommerce URL structure is a setting, so no two stores are alike. Anyone quoting a redirect plan without crawling your actual URLs is guessing.' },
  { t: 'Blog and content mapping', d: 'Shopify blog URLs sit under /blogs/{blog}/{article}, which rarely matches a WordPress permalink. On content-heavy sites this is the biggest redirect job in the project.' },
  { t: 'Plugins have no migration path', d: 'None transfer. Each needs an app equivalent, a custom build, or a decision to drop it. The plugin audit is where the true project scope appears.' },
  { t: 'Custom fields in postmeta', d: 'Years of ACF and plugin-written meta, much of it orphaned. We map what is actually populated and rendered, rather than porting the accumulated sediment.' },
  { t: 'Reviews live as WP comments', d: 'They export cleanly but need mapping into a Shopify reviews app. Review counts and star ratings are a real trust and rich-result asset, so losing them is a genuine cost.' },
];
const STEPS = [
  { n: '01', t: 'Audit', d: 'Crawl every indexed URL to discover the real permalink patterns, inventory the plugin stack, review subscriptions and their gateway, and assess data quality.' },
  { n: '02', t: 'Map', d: 'Complete old-to-new URL map covering products, categories, and the full blog archive, plus custom-field-to-metafield mapping and a plugin replacement plan.' },
  { n: '03', t: 'Build & migrate', d: 'Shopify storefront on staging, catalog, customers, orders, reviews and content migrated, integrations rebuilt and tested against real orders.' },
  { n: '04', t: 'Cutover', d: 'Subscription handling executed, delta sync, single-hop redirects live, DNS switched at a low-traffic window with WooCommerce kept reachable for rollback.' },
  { n: '05', t: 'Monitor', d: 'Daily Search Console coverage and redirect checks for the first weeks, plus subscription renewal and order reconciliation.' },
];

const checkIcon = (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
    <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function WooCommerceToShopifyPage() {
  return (
    <>
      <script id="w2s-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="w2s-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="w2s-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="w2s-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="w2s-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">

        <section className="pp-dotgrid" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)', position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">WooCommerce to Shopify migration</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '18ch' }}>
                  Stop maintaining a plugin stack.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  We migrate WooCommerce and WordPress stores to Shopify and Shopify Plus. Permalinks crawled rather
                  than assumed, subscriptions resolved before cutover, custom fields mapped to metafields, and the blog
                  archive redirected properly instead of quietly abandoned.
                </p>
                <HeroInlineForm source="us_woo_shopify_hero" region="us" submitLabel="Get a migration audit" />
              </div>
              <div className="pp-stage" role="img" aria-label="A WooCommerce store mapping to Shopify with permalinks, subscriptions and content preserved.">
                <div className="pp-store" aria-hidden="true">
                  <div className="bar"><i /><i /><i /></div>
                  <div className="body">
                    <div className="row"><span className="k">Permalinks</span><span className="v">crawled</span></div>
                    <div className="row"><span className="k">Plugins</span><span className="v">audited</span></div>
                    <div className="row win"><span className="k">Subscriptions</span><span className="v">resolved first</span></div>
                    <div className="row"><span className="k">Blog archive</span><span className="v">mapped</span></div>
                  </div>
                </div>
                <span className="pp-node" style={{ top: '4%', left: '-4%' }} aria-hidden="true"><span className="d" />WooCommerce</span>
                <span className="pp-node" style={{ bottom: '6%', right: '-6%', animationDelay: '.8s' }} aria-hidden="true"><span className="d" />Shopify</span>
              </div>
            </div>
          </div>
        </section>

        <section className="pp-sec tint" style={{ paddingTop: 'clamp(32px,4vh,52px)', paddingBottom: 'clamp(32px,4vh,52px)' }}>
          <div className="pp-wrap">
            <div className="pp-stats">
              {STATS.map((s) => (<div className="pp-stat" key={s.b}><b>{s.b}</b><span>{s.s}</span></div>))}
            </div>
          </div>
        </section>

        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// the short answer'}</p>
            <h2 style={{ marginTop: '10px' }}>What does a WooCommerce to Shopify migration involve?</h2>
            <div className="pp-splitband">
              <div className="pp-splitband-text pp-lead">
              <p>
                A WooCommerce to Shopify migration moves your products, customers, order history, reviews, content, and
                URLs from WordPress onto Shopify or Shopify Plus. Because WooCommerce permalinks are a configurable
                setting rather than a fixed structure, no two WooCommerce migrations have the same redirect map, which
                is why any plan built without crawling your actual URLs is guesswork.
              </p>
              <p>
                The parts that decide the outcome are subscriptions and their payment tokens, the plugin audit, and the
                blog archive. None of those are visible from the storefront, and all three are routinely discovered
                halfway through a badly scoped project.
              </p>
                <p className="pp-splitband-note">
                  The plugin audit is where the real scope of a WooCommerce migration appears.
                </p>
              </div>
              <figure className="pp-splitband-fig">
                <div className="pp-shot">
                  <img src="/images/us/commerce/woocommerce-to-shopify-plugin-sprawl.webp"
                       alt="A person grouping coloured notes into columns on a white wall while auditing WooCommerce plugins"
                       width={1280} height={800} loading="lazy" decoding="async" />
                </div>
              </figure>
            </div>
            </div>
          </section>


        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// why teams move'}</p>
            <h2 style={{ marginTop: '10px' }}>Four reasons WooCommerce stores leave</h2>
            <ol className="pp-bento n4" style={{ marginTop: '32px' }}>
              {WHY.map((w) => (
                <li className="pp-card" key={w.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}><span aria-hidden="true">{w.i}</span> {w.t}</h3><p>{w.d}</p>
                </li>
              ))}
            </ol>
            <p className="pp-lead" style={{ marginTop: '24px', maxWidth: '66ch' }}>
              Said plainly: often you should stay. If your team is comfortable running WordPress, the plugin stack is
              stable, and hosting is solid, migration is expensive disruption. When the real problem is a slow theme or
              a bad host, we will tell you to fix that instead.
            </p>
          </div>
        </section>

        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// the hard parts'}</p>
            <h2 style={{ marginTop: '10px' }}>Six things that decide the outcome</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '66ch' }}>
              These separate a clean WooCommerce migration from one that loses traffic and churns subscribers.
            </p>
            <ol className="pp-bento" style={{ marginTop: '32px' }}>
              {HARD.map((h) => (
                <li className="pp-card" key={h.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{h.t}</h3><p>{h.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="pp-sec tint">
          <div className="pp-wrap">
            <div className="pp-card" style={{ padding: 'clamp(28px,4vw,44px)', textAlign: 'left' }}>
              <div className="pp-splitband" style={{ marginTop: 0 }}>
                <div className="pp-splitband-text">
                  <h2 style={{ marginTop: 0 }}>Running active subscriptions?</h2>
                  <p className="pp-lead" style={{ marginTop: '12px' }}>
                Then that is the first thing to scope, not the last. Whether payment tokens port depends on your
                gateway, and getting it wrong means asking every subscriber to re-authorise. We will check your specific
                setup before anyone talks about themes.
              </p>
                  <p className="pp-splitband-note">
                    Subscription payment tokens are resolved before cutover, never after.
                  </p>
                  <div style={{ marginTop: '20px' }}>
                <ModalCTAButton label="Talk to the Founder" region="us" btnVariant="primary-light" />
              </div>
                </div>
                <figure className="pp-splitband-fig">
                  <div className="pp-shot">
                    <img src="/images/us/commerce/woocommerce-to-shopify-subscription-box.webp"
                         alt="A shop owner packing a subscription box, representing subscriptions carried through a migration"
                         width={1280} height={800} loading="lazy" decoding="async" />
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </section>


        {/* Comparison table */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// side by side'}</p>
            <h2 style={{ marginTop: '10px' }}>What actually changes moving off WooCommerce</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>Catalogue size matters less here than the plugin stack and whether you run subscriptions.</p>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead><tr><th>Dimension</th><th>WooCommerce</th><th>Shopify</th><th>What it means for you</th></tr></thead>
                <tbody>
                  <tr>
                    <td className="name">Hosting & security</td>
                    <td>Yours to run, patch, and prove compliant</td>
                    <td>Hosted and patched</td>
                    <td>Removes the job most teams did not want</td>
                  </tr>
                  <tr>
                    <td className="name">Permalinks</td>
                    <td>Configurable, so no two stores match</td>
                    <td>Fixed /products/, /collections/, /blogs/</td>
                    <td>Redirect map must come from a real crawl, never assumed</td>
                  </tr>
                  <tr>
                    <td className="name">Plugins</td>
                    <td>Dozens accumulated, a few load-bearing</td>
                    <td>Apps, Functions, or dropped</td>
                    <td>The plugin audit sets the true project scope</td>
                  </tr>
                  <tr>
                    <td className="name">Custom fields</td>
                    <td>ACF and plugin postmeta, much of it orphaned</td>
                    <td>Metafields</td>
                    <td>Audit what is populated before porting the sediment</td>
                  </tr>
                  <tr>
                    <td className="name">Subscriptions</td>
                    <td>WooCommerce Subscriptions with gateway tokens</td>
                    <td>Shopify subscription apps</td>
                    <td>Most underestimated item; tokens may not port</td>
                  </tr>
                  <tr>
                    <td className="name">Reviews</td>
                    <td>Stored as WordPress comments</td>
                    <td>Reviews app</td>
                    <td>Export cleanly but need mapping; ratings are real trust equity</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// how it runs'}</p>
            <h2 style={{ marginTop: '10px' }}>Our five-stage migration process</h2>
            <div className="pp-splitband reverse">
              <div className="pp-splitband-text pp-lead">
                <p>Each stage has a written exit condition, so nothing moves forward on a verbal &ldquo;looks fine&rdquo;. The order is deliberate: data quality is settled before templates, and the redirect map is built and tested before anything goes live.</p>
                <p className="pp-splitband-note">
                  Orders keep flowing through the migration window.
                </p>
              </div>
              <figure className="pp-splitband-fig">
                <div className="pp-shot">
                  <img src="/images/us/commerce/woocommerce-to-shopify-packing-bench.webp"
                       alt="A packer sealing a shipping box at a bright bench, with orders still flowing during cutover"
                       width={1280} height={800} loading="lazy" decoding="async" />
                </div>
              </figure>
            </div>
            <ol className="pp-bento n5" style={{ marginTop: '36px' }}>
              {STEPS.map((s) => (
                <li className="pp-card" key={s.n}>
                  <p className="pp-mlabel" style={{ marginBottom: '8px' }}>{s.n}</p>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{s.t}</h3><p>{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>


        <section className="pp-sec tint">
          <div className="pp-wrap">
            <div className="pp-splitrow">
              <div>
                <p className="pp-mlabel">{'// related'}</p>
                <h2 style={{ marginTop: '10px' }}>Related work</h2>
              </div>
              <p className="pp-lead" style={{ margin: 0, maxWidth: '68ch' }}>
              See{' '}
              <Link href="/replatforming" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>all replatforming services</Link>{' '}
              for the other migration routes we run, including{' '}
              <Link href="/replatforming/magento-to-shopify" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>Magento to Shopify</Link>.
              If you sell to trade buyers as well as consumers, our{' '}
              <Link href="/b2b-ecommerce" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>B2B e-commerce</Link>{' '}
              build covers account pricing, net terms, and ERP-synced ordering on the new platform.
            </p>
            </div>
          </div>
        </section>

        {/* People */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// who does this'}</p>
            <h2 style={{ marginTop: '10px' }}>Built around how you actually trade</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>Most WooCommerce stores we move are run by small teams who cannot afford a bad launch week.</p>
            <div className="pp-duo" style={{ marginTop: '32px' }}>
              <figure>
                <div className="pp-shot">
                  <img src="/images/us/commerce/woocommerce-to-shopify-people-owner-packing.webp" alt="A shop owner packing a customer order at a wooden bench"
                       width={1280} height={800} loading="lazy" decoding="async" />
                </div>
                <figcaption>Orders keep flowing throughout. The old store stays live until the new one is verified.</figcaption>
              </figure>
              <figure>
                <div className="pp-shot">
                  <img src="/images/us/commerce/woocommerce-to-shopify-people-laptop-orders.webp" alt="A business owner checking an order list on a laptop beside stacked boxes"
                       width={1280} height={800} loading="lazy" decoding="async" />
                </div>
                <figcaption>Subscriptions and their payment tokens are resolved before cutover, never after.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <FAQ
          eyebrow="WOOCOMMERCE TO SHOPIFY FAQ"
          headline="Questions WooCommerce teams ask before migrating"
          items={FAQ_ITEMS}
          categories={FAQ_CATEGORIES}
        />

        <section className="pp-sec tint" id="final-cta">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <h2 style={{ marginTop: 0 }}>Scope your WooCommerce migration</h2>
                <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '52ch' }}>
                  Tell us roughly how many products, which plugins you depend on, and whether you run subscriptions. We
                  will audit the data and the URLs and send a fixed proposal before any work starts.
                </p>
                <div style={{ marginTop: '22px' }}>
                  <ModalCTAButton label="Get a migration audit" region="us" btnVariant="secondary-light" />
                </div>
              </div>
              <div className="pp-card" style={{ padding: 'clamp(24px,3vw,34px)' }}>
                <ul style={{ display: 'grid', gap: '12px' }}>
                  {[
                    'Permalinks discovered from a real crawl, not the settings page',
                    'Subscription and gateway handling resolved before cutover',
                    'Plugin list reviewed one by one',
                    'Blog archive redirect-mapped, not abandoned',
                    'WooCommerce kept live so rollback is a DNS change',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '10px', fontSize: '15px', lineHeight: 1.55, color: 'var(--pp-body)' }}>
                      <span style={{ marginTop: '3px', flex: 'none', display: 'inline-flex', height: '18px', width: '18px', alignItems: 'center', justifyContent: 'center', borderRadius: '999px', background: 'rgba(240,90,40,0.1)', color: 'var(--pp-orange-dark)' }}>{checkIcon}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
