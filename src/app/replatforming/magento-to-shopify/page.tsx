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
  title: 'Magento to Shopify Migration Services | Adobe Commerce Replatforming | FactoryJet',
  description:
    'Magento to Shopify Plus migration services. We move Adobe Commerce and Magento 1 or 2 stores to Shopify Plus with complete URL mapping, single-hop 301 redirects, customer and order history, B2B contract pricing, and ERP re-integration. Fixed proposal before any work starts.',
  openGraph: {
    type: 'website', siteName: 'FactoryJet',
    title: 'Magento to Shopify Migration Services | FactoryJet',
    description: 'Adobe Commerce and Magento to Shopify Plus migration with URL mapping, order history, B2B pricing, and ERP re-integration.',
    url: 'https://factoryjet.com/replatforming/magento-to-shopify',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet Magento to Shopify migration services' }],
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: 'Magento to Shopify Migration | FactoryJet', description: 'Adobe Commerce to Shopify Plus migration without losing rankings or order history.', images: ['https://factoryjet.com/og-default.png'] },
  alternates: { canonical: 'https://factoryjet.com/replatforming/magento-to-shopify' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Migration basics' },
  { key: 'data', label: 'Data & catalog' },
  { key: 'seo', label: 'SEO & redirects' },
  { key: 'b2b', label: 'B2B & extensions' },
  { key: 'process', label: 'Process & timing' },
];

const FAQ_ITEMS = [
  { category: 'basics', question: 'Why do Magento stores migrate to Shopify?', answer: 'Three reasons come up repeatedly: the maintenance burden of version upgrades and security patches, total cost once hosting, extensions, and developer retainers are added together, and the fact that merchandising changes need a developer. Shopify Plus trades low-level control for a hosted platform your own team can operate.' },
  { category: 'basics', question: 'Is Magento 1 still safe to run?', answer: 'Magento 1 reached end of support, which means no official security patches. Running it now is a risk decision rather than a cost saving, and PCI compliance becomes harder to evidence. Most Magento 1 stores we speak to are choosing between a Magento 2 upgrade and a move to Shopify Plus, and the cost gap is smaller than expected.' },
  { category: 'basics', question: 'Should we upgrade to Magento 2 instead of migrating?', answer: 'Sometimes yes. If you rely on deep native B2B features, a very large catalog with complex attribute logic, or custom modules central to your operation, Magento 2 may fit better. We will say so. The migration is worth it when the platform maintenance itself is the constraint rather than any specific feature.' },
  { category: 'basics', question: 'What are the best Magento alternatives?', answer: 'Shopify Plus is the most common destination for Magento merchants, trading extension-level control for a hosted platform with no upgrade cycle. BigCommerce suits mid-market catalogues wanting native B2B without the licence cost. Adobe Commerce itself remains the answer where merchandising depth is genuinely required. Open-source alternatives such as WooCommerce or PrestaShop reduce licence cost but keep the maintenance burden that most Magento teams are trying to escape.' },
  { category: 'basics', question: 'Who else does Magento to Shopify migrations?', answer: 'Self-serve tools such as LitExtension, Cart2Cart, and Matrixify move records but leave attribute mapping, extension replacement, URL redirects, and ERP integration to your team. Agencies including Meetanshi, Magefan, DigitalSuits, and Fourmeta run full projects, as we do. For a small catalogue with no extensions or ERP, a tool is often genuinely sufficient and cheaper, and we will tell you when that is the case.' },
  { category: 'basics', question: 'What is the difference between Magento and Adobe Commerce?', answer: 'Adobe Commerce is the paid, Adobe-supported edition; Magento Open Source is the free self-hosted one. They share a codebase, so the migration path to Shopify is broadly the same. Adobe Commerce stores usually carry more native B2B configuration, which adds scoping work around contract pricing and company accounts.' },
  { category: 'data', question: 'What data migrates from Magento to Shopify?', answer: 'Products with configurable and simple variants, categories, images, customers and address books, order and invoice history, CMS pages and blog content, discount rules, reviews, and existing URL redirects. Magento attribute sets and custom attributes need mapping to Shopify metafields, which is usually the largest single piece of data work.' },
  { category: 'data', question: 'How do Magento attribute sets map to Shopify?', answer: 'Shopify has no direct equivalent, so attributes become metafields, variant options, or tags depending on how each is used. Magento stores typically accumulate attributes over years, many unused. We audit which are actually populated and referenced before mapping, rather than porting the whole set and inheriting the mess.' },
  { category: 'data', question: 'Can configurable products migrate cleanly?', answer: 'Yes, though Shopify limits how many options a variant can carry. Most configurable products map directly. Where a product exceeds Shopify\'s variant model, we either restructure it or implement the configuration as a metafield-driven selector. We identify these during the audit so there are no surprises at build time.' },
  { category: 'data', question: 'Will customers keep their passwords?', answer: 'No, and no agency can honestly promise otherwise. Magento stores passwords as one-way hashes that Shopify cannot import. Accounts migrate without passwords and customers go through a reset at launch. We plan the customer communication in advance so it does not look like a breach notification.' },
  { category: 'data', question: 'Does order history come across?', answer: 'Yes. Historical orders can be imported so customers see past purchases and your team keeps reporting continuity. Very large order archives sometimes import as a summarised record with the full detail kept in an exportable archive, which we agree with you rather than deciding silently.' },
  { category: 'seo', question: 'Will we lose rankings migrating from Magento to Shopify?', answer: 'Not if the URL mapping is complete. Magento and Shopify use different URL structures, notably around category paths and product suffixes, so almost every URL changes. We crawl every indexed URL first, map each one to its equivalent, and implement single-hop 301 redirects before launch rather than after a traffic drop.' },
  { category: 'seo', question: 'How do Magento URL structures differ from Shopify?', answer: 'Magento commonly serves products at a category-nested path with a configurable suffix, while Shopify uses fixed prefixes such as /products/ and /collections/. That means the mapping is structural rather than cosmetic, and layered navigation URLs from Magento need deliberate handling so they do not become a mass of soft 404s.' },
  { category: 'seo', question: 'What happens to Magento layered navigation URLs?', answer: 'Magento layered navigation can generate large numbers of indexed filter URLs. We identify which of those actually hold rankings or links, map those to the nearest Shopify collection, and let the rest resolve cleanly rather than redirecting thousands of low-value URLs into a chain. Mapping everything indiscriminately creates more problems than it solves.' },
  { category: 'seo', question: 'Do you migrate existing Magento redirects?', answer: 'Yes, and this is routinely missed. Magento stores usually carry years of accumulated redirects from past URL changes. Those have to be flattened and re-pointed at the new destination, otherwise you get two-hop chains where an old URL redirects to another old URL that then redirects again.' },
  { category: 'seo', question: 'What about structured data and rich results?', answer: 'Schema often lives in the Magento theme and quietly disappears in the new Shopify theme, taking rich results and AI-citation eligibility with it. We inventory what structured data exists, rebuild it in the new theme, and validate it before cutover rather than discovering the loss in Search Console weeks later.' },
  { category: 'b2b', question: 'Can Magento B2B features move to Shopify Plus?', answer: 'Most can. Company accounts, shared catalogs, requisition lists, and quote workflows have Shopify Plus B2B equivalents, though the implementation differs. Contract pricing and account hierarchies are the parts most often lost or corrupted in migration, so we reconcile them against your ERP both before and after cutover.' },
  { category: 'b2b', question: 'What happens to our Magento extensions?', answer: 'They do not transfer. Every extension needs an equivalent Shopify app, a custom build, or a decision to drop it. Auditing the extension list is usually where the real scope of a Magento migration becomes clear, because stores typically run extensions nobody remembers installing and a few that are genuinely load-bearing.' },
  { category: 'b2b', question: 'Will our ERP integration need rebuilding?', answer: 'Yes. An integration written against the Magento API has to be rebuilt against Shopify. We treat this as part of the migration, not a follow-up phase, because a storefront that is live but not sending orders to NetSuite, SAP, Dynamics, or Epicor is not actually migrated.' },
  { category: 'b2b', question: 'Can you keep our custom Magento functionality?', answer: 'Depends what it does. Custom modules that express business rules usually get rebuilt as Shopify Functions, apps, or metafield logic. Modules that patched around Magento limitations often turn out to be unnecessary on Shopify. We categorise each one during the audit rather than assuming everything must be recreated.' },
  { category: 'process', question: 'How long does a Magento to Shopify migration take?', answer: 'Most run from a few weeks to a few months. Catalog size, attribute complexity, the extension list, and ERP integration depth drive the estimate. Data quality moves it more than anything else, which is why we audit the source data before quoting rather than after.' },
  { category: 'process', question: 'How much does a Magento to Shopify migration cost?', answer: 'It depends on catalog size, how many extensions need replacing, whether B2B pricing is involved, and how deep the ERP integration goes. We scope it on a short call and send a fixed proposal before any work starts, so the figure does not move mid-project.' },
  { category: 'process', question: 'Will the Magento store go down during cutover?', answer: 'No. We build and test on staging, run a full data migration, then a delta sync of anything that changed during the build, and switch DNS at a low-traffic window. The Magento store stays reachable until the new store is verified, which keeps rollback to a DNS change.' },
  { category: 'process', question: 'Can we migrate in phases?', answer: 'Sometimes. Content and blog can move ahead of the store, and multi-store Magento setups can migrate one storefront at a time. A single store with one catalog is usually cleaner as a single cutover, because running two systems against one inventory pool creates reconciliation problems worse than the risk it avoids.' },
  { category: 'process', question: 'What do you need from us to start?', answer: 'Admin access or a full database export from Magento, a list of every integration touching the store including ones marketing set up independently, and ideally a crawl of your indexed URLs. Having those ready shortens scoping considerably and surfaces surprises while they are still cheap to handle.' },
  { category: 'process', question: 'Do we own the new Shopify store?', answer: 'Yes. You own the code, the data, and the platform accounts. Nothing is rented back to you and there is no proprietary layer you cannot maintain without us.' },
];

const FAQ_SCHEMA = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ_ITEMS.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })) };
const SERVICE_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Magento to Shopify migration',
  name: 'Magento and Adobe Commerce to Shopify Plus migration',
  description: 'Magento 1, Magento 2, and Adobe Commerce to Shopify Plus migration services including catalog and attribute mapping to metafields, customer and order history migration, complete URL mapping with single-hop 301 redirects, B2B contract pricing reconciliation, extension replacement, and ERP re-integration.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
};
const HOWTO_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'HowTo', name: 'How FactoryJet migrates a Magento store to Shopify Plus',
  description: 'The process we follow to move a Magento or Adobe Commerce store to Shopify Plus without losing rankings, order history, or ERP connectivity.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Audit', text: 'Crawl every indexed Magento URL, inventory extensions and integrations, and assess catalog and attribute data quality.' },
    { '@type': 'HowToStep', position: 2, name: 'Map', text: 'Build a complete old-to-new URL map, map Magento attribute sets to Shopify metafields, and plan extension replacements.' },
    { '@type': 'HowToStep', position: 3, name: 'Build and migrate', text: 'Build the Shopify Plus storefront on staging, migrate catalog, customers, and order history, and rebuild ERP and PIM integrations.' },
    { '@type': 'HowToStep', position: 4, name: 'Cutover', text: 'Run a delta sync, implement single-hop 301 redirects, and switch DNS at a low-traffic window with the Magento store kept reachable for rollback.' },
    { '@type': 'HowToStep', position: 5, name: 'Monitor', text: 'Track Search Console coverage and redirect health daily for the first weeks and reconcile orders and inventory against the ERP.' },
  ],
};
const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  '@id': 'https://factoryjet.com/replatforming/magento-to-shopify#webpage',
  url: 'https://factoryjet.com/replatforming/magento-to-shopify',
  name: 'Magento to Shopify Migration Services',
  description: 'Adobe Commerce and Magento to Shopify Plus migration with complete URL mapping, order history, B2B pricing, and ERP re-integration.',
  dateModified: PAGE_MODIFIED,
  author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/', jobTitle: 'Founder, FactoryJet' },
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
  { '@type': 'ListItem', position: 3, name: 'Magento to Shopify', item: 'https://factoryjet.com/replatforming/magento-to-shopify' },
] };

const STATS = [
  { b: 'Magento 1, 2', s: '& Adobe Commerce' },
  { b: 'Attributes', s: 'mapped to metafields' },
  { b: 'B2B pricing', s: 'reconciled vs ERP' },
  { b: 'Single-hop', s: '301 redirect map' },
];
const WHY = [
  { i: '⚠', t: 'Version upgrades never end', d: 'Magento upgrades are projects, not updates. Every one risks breaking extensions, and skipping them means running without security patches.' },
  { i: '$', t: 'The true cost is the stack', d: 'Hosting, extension licences, a developer retainer, and patching add up. Teams often find the self-hosted platform costs more all-in than a hosted one.' },
  { i: '⛌', t: 'Merchandising needs a developer', d: 'When a banner change or a new collection needs a deployment, marketing velocity collapses. This is the reason we hear most, and it rarely opens the brief.' },
  { i: '◷', t: 'Magento 1 is unsupported', d: 'No official security patches, and PCI compliance harder to evidence. Staying is a risk decision rather than a saving.' },
];
const HARD = [
  { t: 'Attribute sets to metafields', d: 'Shopify has no attribute-set equivalent. Every Magento attribute becomes a metafield, variant option, or tag. Stores accumulate hundreds over the years, most unused, so we audit which are actually populated before mapping.' },
  { t: 'Extensions have no path', d: 'No Magento extension transfers. Each needs a Shopify app equivalent, a custom build, or a decision to drop it. This audit is usually where the real project scope appears.' },
  { t: 'Layered navigation URLs', d: 'Magento filter URLs can flood the index. We map the ones holding rankings or links and let the rest resolve cleanly, because redirecting thousands of low-value URLs creates chains, not equity.' },
  { t: 'Accumulated old redirects', d: 'Magento stores carry years of redirects from past URL changes. These must be flattened and re-pointed, or you inherit two-hop chains on day one.' },
  { t: 'Configurable product limits', d: 'Shopify caps variant options. Most configurables map directly; the rest get restructured or driven by metafields. We identify them during the audit, not at build time.' },
  { t: 'ERP integration rebuild', d: 'An integration written against the Magento API has to be rebuilt for Shopify. A live storefront that is not posting orders to your ERP is not a finished migration.' },
];
const STEPS = [
  { n: '01', t: 'Audit', d: 'Crawl every indexed URL, inventory extensions and integrations, assess catalog and attribute data quality. This is what makes the estimate real.' },
  { n: '02', t: 'Map', d: 'Complete old-to-new URL map, attribute-to-metafield mapping, and an extension replacement plan, all agreed before the build starts.' },
  { n: '03', t: 'Build & migrate', d: 'Shopify Plus storefront on staging, catalog and customer and order migration, ERP and PIM integrations rebuilt and tested against real orders.' },
  { n: '04', t: 'Cutover', d: 'Delta sync, single-hop redirects live, DNS switched at a low-traffic window, Magento kept reachable so rollback stays a DNS change.' },
  { n: '05', t: 'Monitor', d: 'Daily Search Console coverage and redirect checks for the first weeks, plus order and inventory reconciliation against the ERP.' },
];

const checkIcon = (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
    <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function MagentoToShopifyPage() {
  return (
    <>
      <script id="m2s-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="m2s-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="m2s-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <script id="m2s-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="m2s-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="m2s-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">

        {/* Hero */}
        <section className="pp-dotgrid" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)', position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">Magento to Shopify migration</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '18ch' }}>
                  Leave Magento without leaving your rankings behind.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  We migrate Magento 1, Magento 2, and Adobe Commerce stores to Shopify Plus. Attribute sets mapped to
                  metafields, extensions replaced deliberately, every indexed URL mapped to a single-hop redirect, and
                  your ERP integration rebuilt as part of the job rather than after it.
                </p>
                <HeroInlineForm source="us_magento_shopify_hero" region="us" submitLabel="Get a migration audit" />
              </div>
              <div className="pp-stage" role="img" aria-label="A Magento store mapping to a Shopify Plus store with redirects and preserved history.">
                <div className="pp-store" aria-hidden="true">
                  <div className="bar"><i /><i /><i /></div>
                  <div className="body">
                    <div className="row"><span className="k">Attribute sets</span><span className="v">→ metafields</span></div>
                    <div className="row"><span className="k">Extensions</span><span className="v">audited</span></div>
                    <div className="row win"><span className="k">Indexed URLs</span><span className="v">mapped 1:1</span></div>
                    <div className="row"><span className="k">Order history</span><span className="v">preserved</span></div>
                  </div>
                </div>
                <span className="pp-node" style={{ top: '4%', left: '-4%' }} aria-hidden="true"><span className="d" />Magento 1 &amp; 2</span>
                <span className="pp-node" style={{ bottom: '6%', right: '-6%', animationDelay: '.8s' }} aria-hidden="true"><span className="d" />Shopify Plus</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stat band */}
        <section className="pp-sec tint" style={{ paddingTop: 'clamp(32px,4vh,52px)', paddingBottom: 'clamp(32px,4vh,52px)' }}>
          <div className="pp-wrap">
            <div className="pp-stats">
              {STATS.map((s) => (<div className="pp-stat" key={s.b}><b>{s.b}</b><span>{s.s}</span></div>))}
            </div>
          </div>
        </section>

        {/* Answer-first */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// the short answer'}</p>
            <h2 style={{ marginTop: '10px' }}>What does a Magento to Shopify migration involve?</h2>
            <div className="pp-splitband">
              <div className="pp-splitband-text pp-lead">
              <p>
                A Magento to Shopify migration moves your catalog, customers, order history, content, and URLs from
                Magento or Adobe Commerce onto Shopify or Shopify Plus. Because the two platforms model data and URLs
                differently, almost nothing transfers unchanged: Magento attribute sets become Shopify metafields,
                category-nested product URLs become Shopify’s fixed prefixes, and every Magento extension needs an app
                equivalent, a custom build, or a deliberate decision to drop it.
              </p>
              <p>
                The storefront is the predictable part. The work that decides whether the migration succeeds is data
                mapping, URL redirect mapping, and rebuilding integrations, particularly the ERP connection. Teams that
                treat it as a design project get surprised. Teams that treat it as a data and redirect project land it.
              </p>
                <p className="pp-splitband-note">
                  Magento upgrades are projects, not updates. Every one risks breaking extensions.
                </p>
              </div>
              <figure className="pp-splitband-fig">
                <div className="pp-shot">
                  <img src="/images/us/commerce/magento-to-shopify-legacy-stack.webp"
                       alt="A developer at a bright desk reviewing a Magento catalogue alongside its rebuilt Shopify storefront"
                       width={1280} height={800} loading="lazy" decoding="async" />
                </div>
              </figure>
            </div>
            </div>
        </section>

        {/* Why */}

        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// why teams move'}</p>
            <h2 style={{ marginTop: '10px' }}>Four reasons Magento stores leave</h2>
            <ol className="pp-bento n4" style={{ marginTop: '32px' }}>
              {WHY.map((w) => (
                <li className="pp-card" key={w.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}><span aria-hidden="true">{w.i}</span> {w.t}</h3><p>{w.d}</p>
                </li>
              ))}
            </ol>
            <p className="pp-lead" style={{ marginTop: '24px', maxWidth: '66ch' }}>
              Worth saying plainly: sometimes the answer is to stay. If you depend on deep native B2B behaviour, a very
              large attribute-heavy catalog, or custom modules central to how you operate, Magento 2 may be the better
              platform and we will tell you so.
            </p>
          </div>
        </section>

        {/* Hard parts */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// the hard parts'}</p>
            <h2 style={{ marginTop: '10px' }}>Six things that decide the outcome</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '66ch' }}>
              These are the specifics that separate a clean Magento migration from one that loses traffic for two quarters.
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

        {/* Mid-page CTA */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <div className="pp-card" style={{ padding: 'clamp(28px,4vw,44px)', textAlign: 'left' }}>
              <div className="pp-splitband" style={{ marginTop: 0 }}>
                <div className="pp-splitband-text">
                  <h2 style={{ marginTop: 0 }}>Want to know what your Magento data actually looks like?</h2>
                  <p className="pp-lead" style={{ marginTop: '12px' }}>
                Attribute sprawl and extension count decide most of the cost, and neither is obvious from the front end.
                We will audit your catalog, your indexed URLs, and your integrations, and tell you what a realistic
                migration looks like before anyone writes a proposal.
              </p>
                  <p className="pp-splitband-note">
                    Attribute sets are audited for what is actually populated, then mapped to Shopify metafields.
                  </p>
                  <div style={{ marginTop: '20px' }}>
                <ModalCTAButton label="Talk to the Founder" region="us" btnVariant="primary-light" />
              </div>
                </div>
                <figure className="pp-splitband-fig">
                  <div className="pp-shot">
                    <img src="/images/us/commerce/magento-to-shopify-catalog-attributes.webp"
                         alt="An overhead view of product samples and a tablet showing a catalogue grid, laid out for attribute mapping"
                         width={1280} height={800} loading="lazy" decoding="async" />
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}

        {/* Comparison table */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// side by side'}</p>
            <h2 style={{ marginTop: '10px' }}>What actually changes moving off Magento</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>The storefront is the visible part. These six differences are what the project is really about.</p>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead><tr><th>Dimension</th><th>Magento / Adobe Commerce</th><th>Shopify</th><th>What it means for you</th></tr></thead>
                <tbody>
                  <tr>
                    <td className="name">Hosting & patching</td>
                    <td>You own servers, security patches, and PCI evidence</td>
                    <td>Hosted, patched by Shopify</td>
                    <td>Removes a standing maintenance cost and a risk you carry</td>
                  </tr>
                  <tr>
                    <td className="name">Upgrade cycle</td>
                    <td>Major upgrades are projects that can break extensions</td>
                    <td>Continuous, no upgrade project</td>
                    <td>Frees the budget that upgrades consume</td>
                  </tr>
                  <tr>
                    <td className="name">Product attributes</td>
                    <td>Attribute sets, often hundreds accumulated over years</td>
                    <td>Metafields, variant options, tags</td>
                    <td>Largest single piece of data work in the migration</td>
                  </tr>
                  <tr>
                    <td className="name">URL structure</td>
                    <td>Category-nested paths with a configurable suffix</td>
                    <td>Fixed /products/ and /collections/, no nesting</td>
                    <td>Almost every URL changes, so redirect mapping decides traffic</td>
                  </tr>
                  <tr>
                    <td className="name">Extensions</td>
                    <td>Marketplace extensions, some unmaintained</td>
                    <td>Apps, Shopify Functions, or custom build</td>
                    <td>None transfer; the audit is where real scope appears</td>
                  </tr>
                  <tr>
                    <td className="name">B2B pricing</td>
                    <td>Native company accounts and shared catalogs</td>
                    <td>Shopify Plus B2B price lists and company accounts</td>
                    <td>Maps across, but must be reconciled against your ERP</td>
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
                  Scope is agreed and written down before any build work begins.
                </p>
              </div>
              <figure className="pp-splitband-fig">
                <div className="pp-shot">
                  <img src="/images/us/commerce/magento-to-shopify-enterprise-retail.webp"
                       alt="A retail team meeting in a bright glass-walled room, agreeing migration scope before the build starts"
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

        {/* Related */}

        <section className="pp-sec tint">
          <div className="pp-wrap">
            <div className="pp-splitrow">
              <div>
                <p className="pp-mlabel">{'// related'}</p>
                <h2 style={{ marginTop: '10px' }}>Related work</h2>
              </div>
              <p className="pp-lead" style={{ margin: 0, maxWidth: '68ch' }}>
              This page covers one migration path. See{' '}
              <Link href="/replatforming" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>all replatforming services</Link>{' '}
              for the other routes we run. If your Magento store carries native B2B configuration, our{' '}
              <Link href="/b2b-ecommerce" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>B2B e-commerce</Link>{' '}
              build covers how contract pricing, net terms, and account hierarchies get rebuilt on Shopify Plus. For
              distributors and manufacturers specifically, see{' '}
              <Link href="/ecommerce-for-manufacturers" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>dealer and distributor portals</Link>.
            </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {/* People */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// who does this'}</p>
            <h2 style={{ marginTop: '10px' }}>The people doing the work</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>Magento migrations succeed or fail on the customisation inventory, and that is a human judgement rather than a script.</p>
            <div className="pp-duo" style={{ marginTop: '32px' }}>
              <figure>
                <div className="pp-shot">
                  <img src="/images/us/commerce/magento-to-shopify-people-pair-review.webp" alt="Two developers reviewing code together on a shared ultrawide monitor"
                       width={1280} height={800} loading="lazy" decoding="async" />
                </div>
                <figcaption>Every extension is reviewed one by one, not assumed replaceable.</figcaption>
              </figure>
              <figure>
                <div className="pp-shot">
                  <img src="/images/us/commerce/magento-to-shopify-people-lead-dev.webp" alt="A developer at a standing desk working across two screens"
                       width={1280} height={800} loading="lazy" decoding="async" />
                </div>
                <figcaption>Attribute sets are audited for what is actually populated before mapping.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <FAQ
          eyebrow="MAGENTO TO SHOPIFY FAQ"
          headline="Questions Magento teams ask before migrating"
          items={FAQ_ITEMS}
          categories={FAQ_CATEGORIES}
        />

        {/* Final CTA */}
        <section className="pp-sec tint" id="final-cta">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <h2 style={{ marginTop: 0 }}>Scope your Magento migration</h2>
                <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '52ch' }}>
                  Tell us which Magento version you run, roughly how many SKUs, and what is integrated. We will audit the
                  data and the URLs and send a fixed proposal before any work starts.
                </p>
                <div style={{ marginTop: '22px' }}>
                  <ModalCTAButton label="Get a migration audit" region="us" btnVariant="secondary-light" />
                </div>
              </div>
              <div className="pp-card" style={{ padding: 'clamp(24px,3vw,34px)' }}>
                <ul style={{ display: 'grid', gap: '12px' }}>
                  {[
                    'Every indexed URL mapped before the build starts',
                    'Attribute sets audited, not blindly ported',
                    'Extension list reviewed one by one',
                    'B2B contract pricing reconciled against your ERP',
                    'Magento kept live so rollback is a DNS change',
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
