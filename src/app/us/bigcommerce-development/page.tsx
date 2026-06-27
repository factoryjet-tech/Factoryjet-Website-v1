import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';

export const metadata: Metadata = {
  title: 'BigCommerce Development Agency USA | B2B & Headless | FactoryJet',
  description:
    'BigCommerce development agency for DTC and B2B brands. We build, customize, and migrate BigCommerce stores: B2B Edition, headless (Catalyst), multi-storefront, and ERP integration. Compare BigCommerce vs Shopify and scope your build.',
  openGraph: {
    type: 'website', siteName: 'FactoryJet',
    title: 'BigCommerce Development Agency USA | B2B & Headless | FactoryJet',
    description: 'We build, customize, and migrate BigCommerce stores: B2B Edition, headless, multi-storefront, and ERP integration. BigCommerce vs Shopify, compared.',
    url: 'https://factoryjet.com/us/bigcommerce-development',
    images: [{ url: 'https://factoryjet.com/logo.png', width: 1200, height: 630, alt: 'FactoryJet, BigCommerce development agency' }],
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: 'BigCommerce Development Agency USA | FactoryJet', description: 'Build, customize, and migrate BigCommerce stores. B2B Edition, headless, multi-storefront, ERP.', images: ['https://factoryjet.com/logo.png'] },
  alternates: { canonical: 'https://factoryjet.com/us/bigcommerce-development' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'build', label: 'Building on BigCommerce' },
  { key: 'compare', label: 'BigCommerce vs others' },
  { key: 'working', label: 'Working together' },
];
const FAQ_ITEMS = [
  { category: 'build', question: 'What is BigCommerce?', answer: 'BigCommerce is an open SaaS ecommerce platform: hosted and maintained for you, but with open APIs and no transaction fees, so it suits brands that need flexibility and strong B2B features without managing servers.' },
  { category: 'build', question: 'What can you build on BigCommerce?', answer: 'Custom storefronts, B2B Edition (price lists, customer groups, quotes, company accounts), headless builds on Catalyst, multi-storefront setups, custom apps and integrations, and ERP, POS, and marketplace connections.' },
  { category: 'build', question: 'Does BigCommerce support B2B?', answer: 'Yes. BigCommerce B2B Edition adds customer-specific price lists, customer groups, quoting, purchase orders, and company accounts. We configure and extend it for tiered pricing, net terms, and dealer or distributor portals.' },
  { category: 'build', question: 'Can BigCommerce be headless?', answer: 'Yes. BigCommerce is API-first and supports headless commerce, including its Catalyst framework, so you can run a fast custom front end while BigCommerce handles catalog, cart, and checkout.' },
  { category: 'compare', question: 'BigCommerce vs Shopify, which is better?', answer: 'Shopify is simpler and has the larger app ecosystem; BigCommerce has stronger built-in B2B features, no transaction fees, and more flexible APIs out of the box. For B2B and complex catalogs, BigCommerce often wins; for fast DTC launches, Shopify often does. We recommend the fit after a scoping call.' },
  { category: 'compare', question: 'BigCommerce vs Adobe Commerce (Magento)?', answer: 'BigCommerce is SaaS (hosted, lower maintenance); Adobe Commerce is self-hosted and the most flexible for very large, complex B2B catalogs. BigCommerce is the lighter-weight choice when you want strong B2B without running infrastructure.' },
  { category: 'working', question: 'Can you migrate us to BigCommerce without losing SEO?', answer: 'Yes. We migrate products, customers, orders, and B2B pricing, map every changed URL with 301 redirects, and test checkout on staging before cutover so rankings and uptime are protected.' },
  { category: 'working', question: 'How long does a BigCommerce build take?', answer: 'Most builds and migrations run from a few weeks to a few months depending on catalog size, B2B rules, and integrations. You get a phased timeline with milestones after scoping.' },
  { category: 'working', question: 'How much does BigCommerce development cost?', answer: 'It depends on scope, so we scope it on a short call and send a fixed proposal before any work starts.' },
  { category: 'working', question: 'Do you work with US brands?', answer: 'Yes, most of the brands we work with are US-based, across DTC and B2B, with a decade-plus of commerce builds.' },
];
const FAQ_SCHEMA = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ_ITEMS.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })) };
const SERVICE_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'Service', serviceType: 'BigCommerce development',
  name: 'BigCommerce development and migration',
  description: 'BigCommerce development agency. We build, customize, and migrate BigCommerce stores, including B2B Edition, headless (Catalyst), multi-storefront, custom apps, and ERP integration, for DTC and B2B brands.',
  provider: { '@type': 'Organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' }, audience: { '@type': 'BusinessAudience', name: 'DTC and B2B brands' },
};
const BREADCRUMB_SCHEMA = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/us' },
  { '@type': 'ListItem', position: 2, name: 'BigCommerce Development', item: 'https://factoryjet.com/us/bigcommerce-development' },
] };

const STATS = [
  { b: 'Open SaaS', s: 'hosted, open APIs, no transaction fees' },
  { b: 'B2B Edition', s: 'price lists, quotes, company accounts' },
  { b: 'Headless', s: 'Catalyst & API-first storefronts' },
  { b: '10+ yrs', s: 'building commerce' },
];
const BUILD = [
  { i: '⛬', t: 'B2B Edition setup', d: 'Customer-specific price lists, customer groups, quoting, purchase orders, and company accounts, extended for tiered pricing and net terms.' },
  { i: '↔', t: 'Headless & Catalyst', d: 'Fast custom front ends on BigCommerce’s API-first stack while it runs catalog, cart, and checkout.' },
  { i: '▦', t: 'Multi-storefront', d: 'Run several brands, regions, or DTC-and-B2B storefronts from one BigCommerce account and catalog.' },
  { i: '⤳', t: 'Migrations', d: 'Move off Magento, WooCommerce, or a legacy store to BigCommerce without losing SEO or order history.' },
  { i: '⚙', t: 'Custom apps & APIs', d: 'Bespoke functionality and integrations using BigCommerce’s open REST and GraphQL APIs.' },
  { i: '⇄', t: 'ERP, POS & marketplaces', d: 'One order and inventory layer connecting your ERP, POS, 3PL, and marketplaces to the store.' },
];
const COMPARE = [
  { name: 'BigCommerce', model: 'Open SaaS', b2b: 'Strong, built-in (B2B Edition)', fees: 'No transaction fees', fit: 'B2B + flexible mid-market', me: true },
  { name: 'Shopify Plus', model: 'SaaS', b2b: 'Native B2B, simpler', fees: 'Fees unless Shopify Payments', fit: 'Fast DTC + clean B2B', me: false },
  { name: 'Adobe Commerce', model: 'Self-hosted', b2b: 'Deepest, most flexible', fees: 'License + hosting', fit: 'Very large, complex B2B', me: false },
];
const STEPS = [
  { n: '01', t: 'Scope', d: 'We map your catalog, B2B rules, and integrations and recommend the BigCommerce setup that fits.' },
  { n: '02', t: 'Build & integrate', d: 'Storefront or headless, B2B Edition, and your ERP, POS, and marketplace connections.' },
  { n: '03', t: 'Migrate & launch', d: 'Data migration, 301 redirects, staging QA, then a clean cutover.' },
  { n: '04', t: 'Own & scale', d: 'You own the store; we support and scale it as you add channels.' },
];

export default function BigCommercePage() {
  return (
    <>
      <Script id="bc-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Script id="bc-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <Script id="bc-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader navLinks={[]} cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        {/* Hero */}
        <section className="pp-dotgrid">
          <div className="pp-wrap" style={{ paddingTop: 'clamp(48px,7vh,96px)', paddingBottom: 'clamp(48px,7vh,96px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">BigCommerce development</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '16ch' }}>
                  BigCommerce stores built for <span className="pp-grad">B2B and scale</span>.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '46ch' }}>
                  We design, build, customize, and migrate BigCommerce stores: B2B Edition, headless Catalyst storefronts,
                  multi-storefront, and ERP integration. Open SaaS flexibility, none of the server management.
                </p>
                <HeroInlineForm source="us_bigcommerce_hero" region="us" submitLabel="Get a BigCommerce audit" />
              </div>
              {/* Hero visual: storefront with B2B tiers */}
              <div className="pp-stage" role="img" aria-label="A BigCommerce storefront showing B2B price tiers and a won Buy Box.">
                <div className="pp-store" aria-hidden="true">
                  <div className="bar"><i /><i /><i /></div>
                  <div className="body">
                    <div className="row"><span className="k">1–9 units</span><span className="v">$20.00</span></div>
                    <div className="row"><span className="k">10–49 units</span><span className="v">$18.00</span></div>
                    <div className="row win"><span className="k">50+ units · net 30</span><span className="v">$15.00</span></div>
                    <div className="row"><span className="k">Marketplace listing</span><span className="v">Buy Box won</span></div>
                  </div>
                </div>
                <span className="pp-node" style={{ top: '4%', left: '-4%' }} aria-hidden="true"><span className="d" />B2B Edition</span>
                <span className="pp-node" style={{ bottom: '6%', right: '-6%', animationDelay: '.8s' }} aria-hidden="true"><span className="d" />Headless</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stat band */}
        <section className="pp-sec tint" style={{ paddingTop: 'clamp(36px,5vh,60px)', paddingBottom: 'clamp(36px,5vh,60px)' }}>
          <div className="pp-wrap">
            <div className="pp-stats">
              {STATS.map((s) => (
                <div className="pp-stat" key={s.b}><b>{s.b}</b><span>{s.s}</span></div>
              ))}
            </div>
          </div>
        </section>

        {/* What is BigCommerce */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// the platform</p>
            <h2 style={{ marginTop: '10px' }}>Open SaaS, built for B2B and multichannel</h2>
            <div style={{ marginTop: '18px', display: 'grid', gap: '16px' }} className="pp-lead">
              <p>
                BigCommerce is an open SaaS ecommerce platform. It is hosted and maintained for you like Shopify, but it
                ships with stronger built-in B2B features, no transaction fees, and open REST and GraphQL APIs, so it suits
                brands that need flexibility and real B2B without running their own servers.
              </p>
              <p>
                We build BigCommerce stores end to end: a fast storefront or a headless front end, B2B Edition for trade
                pricing and accounts, multi-storefront for several brands or regions, and the ERP, POS, and marketplace
                integrations that keep everything on one catalog and one live inventory.
              </p>
            </div>
          </div>
        </section>

        {/* What we build (bento) */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// what we build</p>
            <h2 style={{ marginTop: '10px' }}>BigCommerce development, end to end</h2>
            <div className="pp-bento" style={{ marginTop: '36px' }}>
              {BUILD.map((b) => (
                <article className="pp-card" key={b.t}>
                  <span className="ic" aria-hidden="true" style={{ fontFamily: 'var(--pp-mono)', fontSize: '17px' }}>{b.i}</span>
                  <h3>{b.t}</h3>
                  <p>{b.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// how it compares</p>
            <h2 style={{ marginTop: '10px' }}>BigCommerce vs Shopify vs Adobe Commerce</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '60ch' }}>
              We are platform-agnostic. Here is where BigCommerce fits against the other leading platforms for B2B and DTC.
            </p>
            <div style={{ marginTop: '28px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead><tr><th>Platform</th><th>Model</th><th>B2B</th><th>Fees</th><th>Best fit</th></tr></thead>
                <tbody>
                  {COMPARE.map((r) => (
                    <tr key={r.name} className={r.me ? 'me' : ''}>
                      <td className="name">{r.name}</td><td>{r.model}</td><td>{r.b2b}</td><td>{r.fees}</td><td>{r.fit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// how we work</p>
            <h2 style={{ marginTop: '10px' }}>From scope to launch</h2>
            <div className="pp-bento" style={{ marginTop: '36px', gridTemplateColumns: 'repeat(4,1fr)' }}>
              {STEPS.map((s) => (
                <article className="pp-card" key={s.n}>
                  <div style={{ fontFamily: 'var(--pp-mono)', fontSize: '12px', fontWeight: 700, color: 'var(--pp-orange-dark)' }}>{s.n}</div>
                  <h3 style={{ marginTop: '8px' }}>{s.t}</h3>
                  <p>{s.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FAQ
          eyebrow="BIGCOMMERCE FAQ"
          headline="Questions brands ask before building on BigCommerce."
          lead="If your question is not below, send a short brief and answers usually come back inside 24 hours."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* CTA */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <h2 style={{ maxWidth: '20ch' }}>Build BigCommerce the way your business actually sells.</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '60ch' }}>
              Tell us your catalog, your B2B rules, and where you sell. We will recommend the BigCommerce setup that fits
              and send a fixed proposal before any work starts.
            </p>
            <div style={{ marginTop: '28px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '13px', background: 'var(--pp-orange)', padding: '14px 24px', fontSize: '15px', fontWeight: 600, color: '#fff', textDecoration: 'none' }}>Talk to the Founder</a>
              <ModalCTAButton label="Get a BigCommerce audit" region="us" btnVariant="secondary-light" />
            </div>
            <p style={{ marginTop: '28px', fontSize: '14px', color: 'var(--pp-muted)' }}>
              Related:{' '}
              <Link href="/us/b2b-ecommerce" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>B2B e-commerce</Link>,{' '}
              <Link href="/us/headless-commerce" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>headless commerce</Link>, and{' '}
              <Link href="/us/services/ecommerce-development" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>e-commerce development</Link>.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
