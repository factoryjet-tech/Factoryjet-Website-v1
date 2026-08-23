import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import EnterpriseArchitectureBlueprint from '@/components/v2/EnterpriseArchitectureBlueprint';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-08-23';

export const metadata: Metadata = {
  title: 'Salesforce Commerce Cloud to Shopify Plus Migration | Zero-Downtime SFCC Replatforming | FactoryJet',
  description:
    'Complete guide and engineering blueprint for migrating from Salesforce Commerce Cloud (SFCC / Demandware) to Shopify Plus. Learn how we replace custom cartridges, rebuild promotions, connect ERPs, and preserve 100% SEO ranking equity with zero cutover downtime.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Salesforce Commerce Cloud to Shopify Plus Migration | Zero-Downtime Blueprint | FactoryJet',
    description:
      'How enterprise brands move from SFCC to Shopify Plus: cartridge replacement, promotions rebuild with Shopify Functions, ERP sync, and zero-downtime cutover.',
    url: 'https://factoryjet.com/replatforming/salesforce-commerce-cloud-to-shopify-plus',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet Salesforce Commerce Cloud to Shopify Plus migration' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SFCC to Shopify Plus Migration | FactoryJet',
    description: 'Salesforce Commerce Cloud to Shopify Plus replatforming made simple, fast, and risk-free.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/replatforming/salesforce-commerce-cloud-to-shopify-plus' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Why Move to Shopify Plus' },
  { key: 'cost', label: 'Costs & ROI' },
  { key: 'arch', label: 'Cartridges & Code' },
  { key: 'data', label: 'Pricing & Promotions' },
  { key: 'integrations', label: 'ERP & Integrations' },
  { key: 'seo', label: 'SEO & Downtime' },
];

const FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'Why are enterprise brands moving from Salesforce Commerce Cloud to Shopify Plus?',
    answer:
      'Enterprise brands leave Salesforce Commerce Cloud (SFCC) primarily for three reasons: 1) Massive cost savings by eliminating GMV percentage fees and expensive developer retainers, 2) Extreme speed of execution where marketing teams can launch new campaigns in minutes rather than waiting weeks for cartridge deployments, and 3) Access to modern commerce features like 1-click Shop Pay checkout, native global selling, and a robust app ecosystem.',
  },
  {
    category: 'basics',
    question: 'Is Shopify Plus truly ready for $20M to $100M+ enterprise scale?',
    answer:
      'Yes. Today, Shopify Plus powers Fortune 500 brands and global powerhouses doing hundreds of millions in sales (including Mattel, Heinz, Gymshark, and Staples). Shopify handles over $40,000 in sales per minute during Black Friday flash sales with 99.99% uptime, built-in global CDN, and automated PCI-DSS Level 1 compliance.',
  },
  {
    category: 'cost',
    question: 'How much money do brands actually save switching from SFCC to Shopify Plus?',
    answer:
      'Most enterprise brands save between 40% to 70% in total cost of ownership (TCO). On SFCC, companies typically pay $150,000–$500,000+ in annual software licenses plus a percentage of gross sales (GMV tax) and $150–$250/hour for specialized SFCC developers. On Shopify Plus, you pay a predictable flat enterprise fee with no mandatory developer retainers for basic content edits.',
  },
  {
    category: 'arch',
    question: 'What happens to our custom SFCC cartridges and ISML templates?',
    answer:
      'SFCC cartridges do not copy over directly because they are proprietary to Salesforce. During migration, we perform a cartridge-by-cartridge inventory to see what business logic is actually used. We then rebuild necessary features using modern Shopify theme sections, custom Shopify Apps, or Shopify Functions (serverless code executed at checkout). Unused or legacy cartridges that slow down your store are safely retired.',
  },
  {
    category: 'arch',
    question: 'Does it matter if we are currently on SiteGenesis or SFRA?',
    answer:
      'We support migrations from both. SFRA (Storefront Reference Architecture) is newer and cleaner, making code auditing faster. SiteGenesis estates are older and often have 5–10 years of accumulated custom code. We audit all custom templates and business rules up front so there are never any mid-project surprises.',
  },
  {
    category: 'data',
    question: 'How do SFCC price books and complex promotions map to Shopify Plus?',
    answer:
      'SFCC price books map cleanly to Shopify Markets, custom price lists, and native Shopify Plus B2B catalogs. For complex tiered discounts and promotion stacking rules, we use Shopify Functions—lightweight serverless scripts that run in under 5 milliseconds directly on Shopify checkout without slowing down the page.',
  },
  {
    category: 'integrations',
    question: 'Can we keep our NetSuite, SAP, Manhattan WMS, and Salesforce CRM connected?',
    answer:
      'Yes. Your enterprise back-office systems stay completely intact as your single source of truth. We connect NetSuite, SAP S/4HANA, Manhattan WMS, Akeneo PIM, and Salesforce Service Cloud directly to Shopify Plus using reliable real-time event webhooks and REST APIs.',
  },
  {
    category: 'integrations',
    question: 'Do we have to leave Salesforce CRM or Marketing Cloud if we leave SFCC?',
    answer:
      'No. Leaving Salesforce B2C Commerce does NOT mean leaving the Salesforce ecosystem. Your Salesforce CRM, Service Cloud, and Marketing Cloud continue to work seamlessly with Shopify Plus via official API connectors.',
  },
  {
    category: 'seo',
    question: 'Will we lose our Google search rankings and organic traffic during migration?',
    answer:
      'No. We protect 100% of your search rankings through comprehensive 1-to-1 301 URL redirect mapping. We crawl every single indexed URL on your legacy SFCC store and map it directly to the corresponding new Shopify page. We also preserve product schema markup, meta titles, image alt tags, and hreflang tags for multi-language stores.',
  },
  {
    category: 'seo',
    question: 'How do you guarantee zero downtime during the cutover?',
    answer:
      'We use a blue/green cutover protocol. We build, test, and verify your complete Shopify Plus store, catalog, and ERP integrations in a secure staging environment using real test orders. When ready, we perform a zero-downtime DNS switch during off-peak hours with instant rollback safety nets and 24/7 engineer monitoring.',
  },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((i) => ({
    '@type': 'Question',
    name: i.question,
    acceptedAnswer: { '@type': 'Answer', text: i.answer },
  })),
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Salesforce Commerce Cloud to Shopify Plus Migration',
  name: 'Salesforce Commerce Cloud to Shopify Plus Replatforming',
  description:
    'Enterprise migration services from Salesforce Commerce Cloud (Demandware) to Shopify Plus. Complete cartridge inventory, Shopify Functions promotion rebuilds, bi-directional ERP integration, 100% SEO ranking preservation, and zero-downtime blue/green cutover.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/replatforming/salesforce-commerce-cloud-to-shopify-plus#webpage',
  url: 'https://factoryjet.com/replatforming/salesforce-commerce-cloud-to-shopify-plus',
  name: 'Salesforce Commerce Cloud to Shopify Plus Migration',
  description: 'How enterprise brands move from SFCC to Shopify Plus with zero downtime and full SEO preservation.',
  dateModified: PAGE_MODIFIED,
  author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/', jobTitle: 'Founder, FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
};

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  description: 'FactoryJet is an enterprise commerce engineering agency specializing in zero-downtime platform migrations and modern architecture.',
  sameAs: ['https://www.linkedin.com/company/factoryjet'],
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Replatforming', item: 'https://factoryjet.com/replatforming' },
    { '@type': 'ListItem', position: 3, name: 'Salesforce Commerce Cloud to Shopify Plus', item: 'https://factoryjet.com/replatforming/salesforce-commerce-cloud-to-shopify-plus' },
  ],
};

const STATS = [
  { b: '40%–70%', s: 'Lower Total Cost of Ownership' },
  { b: '0 Seconds', s: 'Cutover Downtime' },
  { b: '100%', s: 'SEO 301 Ranking Preservation' },
  { b: '10x Faster', s: 'Marketing Campaign Launch Speed' },
];

const PAIN_POINTS = [
  {
    title: 'The "GMV Tax" & High License Fees',
    simple: 'SFCC takes a cut of every dollar you make, plus $150k–$500k/yr in platform fees.',
    solution: 'Shopify Plus has predictable flat pricing with zero revenue penalties as your brand scales.',
  },
  {
    title: 'Slow 3-Week Release Cycles',
    simple: 'Even simple text or banner changes require backend developer cartridges and test builds.',
    solution: 'Shopify Plus gives your marketing team visual drag-and-drop sections to launch updates same-day.',
  },
  {
    title: 'Expensive Specialist Developers',
    simple: 'SFCC developers charge $150–$250/hour and are difficult to hire and retain.',
    solution: 'Shopify is the global standard with tens of thousands of certified engineers and modern APIs.',
  },
  {
    title: 'Fragile Upgrades & Tech Debt',
    simple: 'Legacy cartridges often break whenever Salesforce rolls out core system updates.',
    solution: 'Shopify handles all core updates, security patches, and server scaling automatically in the cloud.',
  },
  {
    title: 'Complex Multi-System Silos',
    simple: 'Connecting POS, wholesale, and DTC requires separate custom cartridge builds.',
    solution: 'Shopify Plus unites retail POS, B2B wholesale, and international markets in a single dashboard.',
  },
  {
    title: 'Slow Checkout & Mobile Friction',
    simple: 'Legacy checkouts have multi-step forms that cause shoppers to abandon carts.',
    solution: 'Shop Pay provides 1-click accelerated checkout with 40%+ higher mobile conversion rates.',
  },
];

const STEPS = [
  { n: '01', t: 'Cartridge & Customization Audit', d: 'We audit every single cartridge, scheduled background job, and active promotion so no business rule is forgotten.' },
  { n: '02', t: 'Data & Architecture Mapping', d: 'We map your price books to Shopify Markets, promotions to Shopify Functions, and catalog attributes to metaobjects.' },
  { n: '03', t: 'Storefront Build & ERP Connectors', d: 'We build your high-converting theme and connect your NetSuite, SAP, or Manhattan WMS via real-time webhooks.' },
  { n: '04', t: '1-to-1 SEO Crawl & Redirect Map', d: 'We crawl every single indexed URL on your legacy store to guarantee 100% link equity and zero 404 broken links.' },
  { n: '05', t: 'Zero-Downtime Blue/Green Cutover', d: 'We switch DNS during off-peak hours with verified real-time order processing and instant rollback safety nets.' },
];

const checkIcon = (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
    <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function SFCCToShopifyPlusPage() {
  return (
    <>
      <script id="sfcc-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="sfcc-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="sfcc-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="sfcc-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="sfcc-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">

        {/* ── HERO SECTION ── */}
        <section className="pp-dotgrid" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)', position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.08fr 0.92fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">Enterprise Replatforming Guide</p>
                <h1 style={{ margin: '14px 0 16px', maxWidth: '20ch' }}>
                  Migrate from Salesforce Commerce Cloud to Shopify Plus with Zero Downtime
                </h1>
                <p className="pp-lead" style={{ maxWidth: '50ch' }}>
                  Escape the high cost and slow release cycles of SFCC (Demandware). We audit your custom cartridges, rebuild promotions with Shopify Functions, sync your ERP in real time, and protect 100% of your Google search rankings.
                </p>
                <HeroInlineForm source="us_sfcc_shopify_hero" region="us" submitLabel="Get a Free Replatforming Audit" />
              </div>
              <div className="pp-stage" role="img" aria-label="A modern Shopify Plus migration replacing SFCC cartridges, promotions, and ERP integrations.">
                <div className="pp-store" aria-hidden="true">
                  <div className="bar"><i /><i /><i /></div>
                  <div className="body">
                    <div className="row"><span className="k">SFCC Cartridges</span><span className="v">Audited &amp; Replaced</span></div>
                    <div className="row win"><span className="k">Promotions Engine</span><span className="v">→ Shopify Functions</span></div>
                    <div className="row"><span className="k">Price Books</span><span className="v">→ Markets &amp; B2B</span></div>
                    <div className="row"><span className="k">NetSuite / SAP ERP</span><span className="v">Sub-150ms Sync</span></div>
                  </div>
                </div>
                <span className="pp-node" style={{ top: '4%', left: '-4%' }} aria-hidden="true"><span className="d" />SiteGenesis &amp; SFRA</span>
                <span className="pp-node" style={{ bottom: '6%', right: '-6%', animationDelay: '.8s' }} aria-hidden="true"><span className="d" />Shopify Plus Enterprise</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ROW ── */}
        <section className="pp-sec tint" style={{ paddingTop: 'clamp(32px,4vh,52px)', paddingBottom: 'clamp(32px,4vh,52px)' }}>
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

        {/* ── WHY BRANDS LEAVE SFCC (PAIN POINTS & SOLUTIONS) ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// the real comparison'}</p>
            <h2 style={{ marginTop: '10px' }}>Why Leading Brands Are Leaving Salesforce Commerce Cloud</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              Salesforce Commerce Cloud (formerly Demandware) was built for an older era of e-commerce. Here is what actually happens when you trade legacy cartridges for a modern, agile commerce stack:
            </p>
            <div className="pp-bento" style={{ marginTop: '32px' }}>
              {PAIN_POINTS.map((p) => (
                <div className="pp-card" key={p.title} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ color: 'var(--pp-orange-dark)', fontSize: '18px', marginBottom: '8px' }}>{p.title}</h3>
                    <p style={{ fontSize: '14px', color: 'var(--pp-muted)', marginBottom: '12px' }}>
                      <strong>The Problem:</strong> {p.simple}
                    </p>
                  </div>
                  <div style={{ background: 'var(--pp-tint)', padding: '12px 14px', borderRadius: '10px', border: '1px solid var(--pp-line)' }}>
                    <p style={{ fontSize: '13.5px', color: 'var(--pp-ink)', margin: 0, lineHeight: 1.5 }}>
                      <strong style={{ color: 'var(--pp-orange-dark)' }}>The Shopify Plus Fix:</strong> {p.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SHORT ANSWER FOR AI CITATIONS ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// in plain english'}</p>
            <h2 style={{ marginTop: '10px' }}>What Does an SFCC to Shopify Plus Migration Involve?</h2>
            <div className="pp-splitband">
              <div className="pp-splitband-text pp-lead">
                <p>
                  A Salesforce Commerce Cloud migration moves your product catalog, customer records, order history, custom promotions, and ERP integrations onto Shopify Plus. 
                </p>
                <p>
                  Because SFCC uses a custom code system called &ldquo;cartridges&rdquo;, code cannot be copied directly. Instead, we audit your active features, rebuild your custom promotions using serverless <strong>Shopify Functions</strong>, map your price books into <strong>Shopify Markets and B2B catalogs</strong>, and connect your warehouse and ERP systems with sub-150ms real-time event queues.
                </p>
                <p className="pp-splitband-note">
                  The result: Your marketing team launches campaigns in minutes, and your business saves hundreds of thousands of dollars each year in license fees and developer retainers.
                </p>
              </div>
              <figure className="pp-splitband-fig">
                <div className="pp-shot">
                  <img
                    src="/images/us/commerce/salesforce-commerce-cloud-to-shopify-plus-enterprise-war-room.webp"
                    alt="An enterprise commerce team reviewing a zero-downtime SFCC to Shopify Plus replatforming plan"
                    width={1280}
                    height={800}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </figure>
            </div>
          </div>
        </section>

        {/* ── THE ENTERPRISE ARCHITECTURE BLUEPRINT (LUMINOUS STRIPE-STYLE GRADIENT WITH AUTO-SCROLL TABS) ── */}
        <EnterpriseArchitectureBlueprint
          badge="// ENTERPRISE MIGRATION BLUEPRINT"
          title="How Modern Enterprise Commerce Works (In Plain English)"
          subtitle="Say goodbye to slow cartridge builds, high license fees, and fragile integrations. Here is how leading brands move from Salesforce Commerce Cloud to Shopify Plus with zero downtime."
          legacySource="SFCC / Demandware"
          targetStack="Shopify Plus Enterprise Architecture"
          ctaLabel="Schedule an Architecture Scoping Call"
          region="us"
        />

        {/* ── COMPARISON TABLE ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// side-by-side comparison'}</p>
            <h2 style={{ marginTop: '10px' }}>Salesforce Commerce Cloud vs. Shopify Plus</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              SFCC gives deep legacy configurability at the cost of high maintenance and slow releases. Shopify Plus gives lightning-fast release velocity, lower total cost of ownership, and a platform your marketing team can actually operate.
            </p>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Feature / Dimension</th>
                    <th>Salesforce Commerce Cloud (SFCC)</th>
                    <th>Shopify Plus Enterprise</th>
                    <th>What It Means for Your Brand</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="name">Cost Model</td>
                    <td>$150k–$500k+/yr license + GMV revenue cut</td>
                    <td>Predictable enterprise plan, zero GMV penalty</td>
                    <td>Save 40%–70% in total annual operating costs</td>
                  </tr>
                  <tr>
                    <td className="name">Custom Code Model</td>
                    <td>Proprietary cartridges (SiteGenesis / SFRA)</td>
                    <td>Theme sections, custom Apps &amp; Functions</td>
                    <td>Easier to maintain, upgrade, and scale</td>
                  </tr>
                  <tr>
                    <td className="name">Release Velocity</td>
                    <td>2–4 weeks per deployment via developers</td>
                    <td>Same-day visual drag-and-drop updates</td>
                    <td>Marketing launches campaigns 10x faster</td>
                  </tr>
                  <tr>
                    <td className="name">Checkout Experience</td>
                    <td>Legacy multi-step custom checkout</td>
                    <td>Shop Pay 1-click accelerated checkout</td>
                    <td>40%+ higher conversion rates on mobile</td>
                  </tr>
                  <tr>
                    <td className="name">Promotions Engine</td>
                    <td>Complex legacy campaign qualifiers</td>
                    <td>Shopify Functions (sub-5ms checkout rules)</td>
                    <td>Complex discounts run without slowing the site</td>
                  </tr>
                  <tr>
                    <td className="name">B2B Wholesale</td>
                    <td>Requires custom portal build</td>
                    <td>Native Shopify Plus B2B built-in</td>
                    <td>Wholesale and DTC managed in one admin</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── MID PAGE CTA ── */}
        <MidPageCTA
          headline={'Approaching Your Commerce Cloud License Renewal?'}
          sub={'Send us your active cartridge list and order volume. We will deliver a complete scope, timeline, and exact TCO cost-savings analysis.'}
          label={'Scope Your SFCC Migration'}
        />

        {/* ── 5 STAGE PROCESS ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// step-by-step roadmap'}</p>
            <h2 style={{ marginTop: '10px' }}>Our 5-Stage Zero-Downtime Migration Protocol</h2>
            <div className="pp-splitband reverse">
              <div className="pp-splitband-text pp-lead">
                <p>
                  We never guess or take shortcuts with enterprise commerce. Every phase has clear sign-off gates: data parity is verified before templates are finalized, and your redirect map is crawled and tested before DNS switch.
                </p>
                <p className="pp-splitband-note">
                  Every single indexed URL is mapped 1-to-1 so you preserve 100% of your Google rankings and search equity.
                </p>
              </div>
              <figure className="pp-splitband-fig">
                <div className="pp-shot">
                  <img
                    src="/images/us/commerce/salesforce-commerce-cloud-to-shopify-plus-multi-market.webp"
                    alt="A solutions architect reviewing global store locales and redirect maps on a monitor"
                    width={1280}
                    height={800}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </figure>
            </div>
            <ol className="pp-bento n5" style={{ marginTop: '36px' }}>
              {STEPS.map((s) => (
                <li className="pp-card" key={s.n}>
                  <p className="pp-mlabel" style={{ marginBottom: '8px' }}>{s.n}</p>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{s.t}</h3>
                  <p>{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── RELATED WORK ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <div className="pp-splitrow">
              <div>
                <p className="pp-mlabel">{'// explore more'}</p>
                <h2 style={{ marginTop: '10px' }}>Related Migration Services</h2>
              </div>
              <p className="pp-lead" style={{ margin: 0, maxWidth: '68ch' }}>
                Looking to replatform from another platform? Explore our guides for{' '}
                <Link href="/replatforming/magento-to-shopify" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>
                  Magento to Shopify
                </Link>
                ,{' '}
                <Link href="/replatforming/netsuite-suitecommerce-to-shopify-plus" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>
                  NetSuite SuiteCommerce to Shopify Plus
                </Link>
                , and{' '}
                <Link href="/replatforming/bigcommerce-to-shopify-plus" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>
                  BigCommerce to Shopify Plus
                </Link>
                . If you need wholesale selling, check our{' '}
                <Link href="/services/shopify-plus-b2b" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>
                  Shopify Plus B2B setup
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ── PEOPLE & GOVERNANCE ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// engineering governance'}</p>
            <h2 style={{ marginTop: '10px' }}>Enterprise Migrations Succeed on Discovery, Not Guesses</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              Most replatforming projects stumble when hidden customizations surface halfway through build. We front-load the discovery so your timeline and budget stay locked.
            </p>
            <div className="pp-duo" style={{ marginTop: '32px' }}>
              <figure>
                <div className="pp-shot">
                  <img
                    src="/images/us/commerce/salesforce-commerce-cloud-to-shopify-plus-people-exec-meeting.webp"
                    alt="Executives and solutions architects in a strategy meeting reviewing migration milestones"
                    width={1280}
                    height={800}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption>Phased milestones with clear sign-off gates agreed before code is written.</figcaption>
              </figure>
              <figure>
                <div className="pp-shot">
                  <img
                    src="/images/us/commerce/salesforce-commerce-cloud-to-shopify-plus-people-architect-review.webp"
                    alt="A senior solutions architect mapping ERP integrations and cart data on a system diagram"
                    width={1280}
                    height={800}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption>Cartridge-by-cartridge inventory before estimating timeline or cost.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ── FAQ COMPONENT ── */}
        <FAQ
          eyebrow="SFCC TO SHOPIFY PLUS FAQ"
          headline="Real Questions Enterprise &amp; SMB Teams Ask"
          items={FAQ_ITEMS}
          categories={FAQ_CATEGORIES}
        />

        {/* ── FINAL CALL TO ACTION ── */}
        <section className="pp-sec tint" id="final-cta">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <h2 style={{ marginTop: 0 }}>Scope Your SFCC Replatforming Project</h2>
                <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '52ch' }}>
                  Tell us if you are on SiteGenesis or SFRA, roughly how many cartridges and regions you manage, and when your contract renews. We will deliver a cartridge inventory and fixed-scope proposal.
                </p>
                <div style={{ marginTop: '22px' }}>
                  <ModalCTAButton label="Get a Free Replatforming Audit" region="us" btnVariant="secondary-light" />
                </div>
              </div>
              <div className="pp-card" style={{ padding: 'clamp(24px,3vw,34px)' }}>
                <ul style={{ display: 'grid', gap: '12px' }}>
                  {[
                    'Complete cartridge inventory before any estimate is signed',
                    'Active promotions listed, then rebuilt with fast Shopify Functions',
                    'Price book model agreed and tested in staging up front',
                    '100% 1-to-1 URL redirect mapping per locale (Zero 404s)',
                    'Phased rollout so the integration pattern is proven before DNS cutover',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '10px', fontSize: '15px', lineHeight: 1.55, color: 'var(--pp-body)' }}>
                      <span style={{ marginTop: '3px', flex: 'none', display: 'inline-flex', height: '18px', width: '18px', alignItems: 'center', justifyContent: 'center', borderRadius: '999px', background: 'rgba(240,90,40,0.1)', color: 'var(--pp-orange-dark)' }}>
                        {checkIcon}
                      </span>
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
