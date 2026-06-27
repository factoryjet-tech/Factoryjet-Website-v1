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
  title: 'B2B E-Commerce Development Agency | B2B Ecommerce Platform Build | FactoryJet',
  description:
    'B2B ecommerce development agency. We build B2B ecommerce platforms with tiered pricing, net terms, account hierarchies, quote workflows, and ERP integration, on Shopify Plus, Adobe Commerce, BigCommerce, Salesforce Commerce Cloud, or Commerceflo. Compare B2B ecommerce platforms and scope your build.',
  openGraph: {
    type: 'website', siteName: 'FactoryJet',
    title: 'B2B E-Commerce Development Agency | B2B Ecommerce Platform Build | FactoryJet',
    description: 'We build B2B ecommerce platforms with tiered pricing, net terms, account hierarchies, quotes, and ERP integration. Self-service ordering your buyers actually use.',
    url: 'https://factoryjet.com/us/b2b-ecommerce',
    images: [{ url: 'https://factoryjet.com/logo.png', width: 1200, height: 630, alt: 'FactoryJet, B2B e-commerce development agency' }],
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: 'B2B E-Commerce Development Agency | FactoryJet', description: 'B2B ecommerce platforms with tiered pricing, net terms, account hierarchies, and ERP integration.', images: ['https://factoryjet.com/logo.png'] },
  alternates: { canonical: 'https://factoryjet.com/us/b2b-ecommerce' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'basics', label: 'B2B basics' },
  { key: 'platforms', label: 'Platforms' },
  { key: 'features', label: 'Features' },
  { key: 'working', label: 'Working together' },
];
const FAQ_ITEMS = [
  { category: 'basics', question: 'What is B2B ecommerce?', answer: 'B2B ecommerce is selling to other businesses online, with the rules trade buyers expect: account-specific pricing, net terms, approvals, and fast reordering. We build the storefront and the system underneath it so your buyers self-serve instead of ordering by email and phone.' },
  { category: 'basics', question: 'What is the difference between B2B and DTC ecommerce?', answer: 'A DTC site sells to consumers at one price. A B2B site adds logins for trade accounts, tiered or contract pricing, net terms, quotes and approvals, account hierarchies, and gated catalogs. We can run both on one unified system.' },
  { category: 'basics', question: 'What are some examples of B2B ecommerce?', answer: 'A manufacturer letting distributors place and reorder online; a wholesaler giving each trade account its own price list and net terms; a brand running a DTC store and a gated B2B portal on the same catalog; a distributor with quote-and-approve workflows for large orders. We build all of these.' },
  { category: 'basics', question: 'What are the benefits of B2B ecommerce?', answer: 'Self-service ordering your buyers prefer, fewer manual errors, faster reorders, larger average orders, and hours back for your sales team. One system replaces the email-and-phone process that slows everyone down.' },
  { category: 'basics', question: 'Can DTC and B2B run on one site with different pricing?', answer: 'Yes. We build one storefront that serves retail shoppers and gives trade buyers their own login with tiered or contract pricing, net terms, and reordering, on one catalog and one inventory.' },
  { category: 'platforms', question: 'What is the best B2B ecommerce platform?', answer: 'There is no single best one; it depends on your catalog size, B2B rules, and budget. Shopify Plus suits a clean DTC-plus-B2B model on one store, Adobe Commerce (Magento) suits deep native B2B and very large catalogs, BigCommerce offers strong mid-market B2B value, Salesforce Commerce Cloud suits enterprise, and Commerceflo fits when a unified engine is the goal. We compare them against your needs on a scoping call.' },
  { category: 'platforms', question: 'How do I choose a B2B ecommerce platform?', answer: 'Match the platform to five things: your catalog size and complexity, your pricing rules (tiers, contracts, customer-specific catalogs), the integrations you need (ERP, PIM, POS, marketplaces), whether you also sell DTC, and your budget for build and ongoing license. We run that comparison with you and recommend the fit rather than the most expensive option.' },
  { category: 'platforms', question: 'Shopify Plus vs Adobe Commerce vs BigCommerce for B2B?', answer: 'Shopify Plus for speed, a clean admin, and DTC + B2B on one store. Adobe Commerce for deep native B2B (company accounts, shared catalogs, requisition lists) and very large catalogs. BigCommerce for strong B2B features at mid-market value. We match it to your SKUs, pricing rules, and integrations.' },
  { category: 'platforms', question: 'Is there an open-source B2B ecommerce platform?', answer: 'Yes. Adobe Commerce (Magento Open Source) and WooCommerce are open-source options we build B2B on. They offer full control and no platform fees, in exchange for hosting and maintenance you own. We help you weigh open-source against hosted SaaS for your case.' },
  { category: 'features', question: 'What B2B ecommerce features can you build?', answer: 'Tiered and contract pricing, quote and approval workflows, account hierarchies, net terms, purchase-order checkout, gated catalogs, customer-specific catalogs, fast reordering, sales-rep order-on-behalf, and ERP integration.' },
  { category: 'features', question: 'Can you integrate our ERP, PIM, POS, and marketplaces?', answer: 'Yes. We connect your ERP, PIM, POS, 3PL, and marketplaces into one order and inventory layer so pricing, stock, and orders stay in sync instead of living in separate systems.' },
  { category: 'features', question: 'Can you build a dealer or distributor portal?', answer: 'Yes. We build dealer, distributor, and wholesale portals with per-account pricing, order history, reordering, quote requests, and net terms, integrated with your ERP.' },
  { category: 'working', question: 'Can you migrate our existing B2B store without losing SEO?', answer: 'Yes. We handle replatforming and data migration, including products, customers, orders, and B2B pricing, with 301 redirects and a cutover plan that protects your rankings and uptime.' },
  { category: 'working', question: 'How long does a B2B ecommerce build take?', answer: 'Most B2B builds and migrations run from a few weeks to a few months, depending on catalog complexity, custom pricing rules, and ERP integration. You get a phased timeline with milestones after scoping.' },
  { category: 'working', question: 'How much does B2B ecommerce development cost?', answer: 'It depends on scope, platform, catalog size, pricing rules, and integrations, so we scope it on a short call and send a fixed proposal before any work starts.' },
  { category: 'working', question: 'Do you work with US B2B brands?', answer: 'Yes, most of the brands we work with are US-based, across DTC and B2B, with a decade-plus of commerce builds.' },
];
const FAQ_SCHEMA = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ_ITEMS.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })) };
const SERVICE_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'Service', serviceType: 'B2B e-commerce development',
  name: 'B2B e-commerce development and implementation',
  description: 'B2B ecommerce development agency. We build B2B ecommerce platforms with tiered and contract pricing, net terms, account hierarchies, quote and approval workflows, gated catalogs, reordering, and ERP integration, on Shopify Plus, Adobe Commerce (Magento), BigCommerce, WooCommerce, Salesforce Commerce Cloud, or Commerceflo.',
  provider: { '@type': 'Organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' }, audience: { '@type': 'BusinessAudience', name: 'B2B brands, wholesalers, and distributors' },
};
const BREADCRUMB_SCHEMA = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/us' },
  { '@type': 'ListItem', position: 2, name: 'B2B E-Commerce', item: 'https://factoryjet.com/us/b2b-ecommerce' },
] };

const STATS = [
  { b: 'DTC + B2B', s: 'on one catalog & inventory' },
  { b: 'Net 30/60', s: 'terms, POs & approvals' },
  { b: 'Any ERP', s: 'integrated to the storefront' },
  { b: '10+ yrs', s: 'building commerce' },
];
const PAINS = [
  { i: '✉', t: 'Orders by email and phone', d: 'Your team re-keys orders from inboxes and voicemails, and buyers wait on a quote instead of placing the order themselves.' },
  { i: '▦', t: 'Pricing lives in spreadsheets', d: 'Account-specific and tiered pricing sits in files, so every quote is manual and mistakes slip through.' },
  { i: '⛌', t: 'No self-service for buyers', d: 'Trade buyers expect to log in, see their price, and reorder. Without it, they buy from whoever makes it easy.' },
];
const BENEFITS = [
  { i: '↻', t: 'Faster, larger reorders', d: 'One-click reordering and saved lists from a buyer’s history lift order frequency and size.' },
  { i: '◷', t: 'Hours back for sales', d: 'Self-service ordering frees your reps from re-keying orders so they can sell, not type.' },
  { i: '✓', t: 'Fewer pricing errors', d: 'Each account sees its own correct price automatically, so quotes stop going out wrong.' },
  { i: '⤢', t: 'Higher average order value', d: 'Volume tiers, suggested reorders, and clear availability nudge bigger orders.' },
  { i: '⇄', t: 'One source of truth', d: 'Pricing, stock, and orders read from one record across every channel and your ERP.' },
  { i: '◎', t: 'DTC and B2B together', d: 'Retail and trade on one system, with separate pricing and logins for wholesale buyers.' },
];
const FEATURES = [
  { t: 'Tiered & contract pricing', d: 'Per-account, per-volume, and contract pricing that shows each buyer their price automatically.' },
  { t: 'Net terms & PO checkout', d: 'Net 30/60 terms, credit limits, and purchase-order checkout for approved accounts.' },
  { t: 'Quote & approval workflows', d: 'Request-for-quote, multi-step approvals, and order limits that match how your buyers purchase.' },
  { t: 'Account hierarchies', d: 'Parent and child accounts, buyer roles, and shared order history across a buying organization.' },
  { t: 'Gated & custom catalogs', d: 'Login-gated products and customer-specific catalogs so each account sees only what it should.' },
  { t: 'Fast reordering', d: 'One-click reordering, reorder pads, and saved lists built from a buyer’s order history.' },
  { t: 'ERP, PIM & marketplace sync', d: 'One order and inventory layer connecting your ERP, PIM, POS, 3PL, and marketplaces.' },
  { t: 'Sales-rep tools', d: 'Order-on-behalf, account dashboards, and quote tools so your reps sell through the same system.' },
];
const COMPARE = [
  { name: 'Shopify Plus', best: 'DTC + B2B on one clean store', b2b: 'Native B2B: company accounts, price lists, net terms', catalog: 'Small to large', me: false },
  { name: 'Adobe Commerce (Magento)', best: 'Deep, complex B2B', b2b: 'Requisition lists, shared catalogs, quotes, company accounts', catalog: 'Large to very large', me: false },
  { name: 'BigCommerce', best: 'Mid-market B2B value', b2b: 'Price lists, customer groups, B2B Edition', catalog: 'Mid to large', me: false },
  { name: 'Salesforce Commerce Cloud', best: 'Enterprise B2B', b2b: 'B2B Commerce, accounts, contracts at scale', catalog: 'Very large', me: false },
  { name: 'WooCommerce / Commerceflo', best: 'Full control / unified engine', b2b: 'B2B via build; unified catalog and inventory', catalog: 'Small to mid / any', me: true },
];
const CHOOSE = [
  'Catalog size and complexity, including variants and channel-specific attributes',
  'Pricing rules: tiers, contracts, customer-specific catalogs, and minimums',
  'Integrations you need: ERP, PIM, POS, 3PL, and marketplaces',
  'Whether you also sell DTC on the same catalog and inventory',
  'Budget for the build and the ongoing platform license',
];
const USE_CASES = [
  { t: 'Manufacturers', d: 'Let distributors and dealers place, track, and reorder online with their own pricing and net terms, integrated with your ERP.' },
  { t: 'Wholesalers & distributors', d: 'Give every trade account a gated catalog, tiered pricing, and one-click reordering, replacing email-and-phone ordering.' },
  { t: 'Brands selling DTC + B2B', d: 'Run a retail storefront and a B2B portal on one catalog and inventory, with separate pricing and logins.' },
  { t: 'Replatforming brands', d: 'Move off an aging B2B store or a manual setup to a modern platform without losing SEO or order history.' },
];

export default function B2BEcommercePage() {
  return (
    <>
      <Script id="b2b-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Script id="b2b-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <Script id="b2b-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader navLinks={[]} cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        {/* Hero */}
        <section className="pp-dotgrid">
          <div className="pp-wrap" style={{ paddingTop: 'clamp(48px,7vh,96px)', paddingBottom: 'clamp(48px,7vh,96px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">B2B e-commerce development</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '17ch' }}>
                  B2B e-commerce your buyers <span className="pp-grad">actually want to use</span>.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '47ch' }}>
                  We build B2B ecommerce platforms with the rules trade buyers expect: account pricing, net terms,
                  approvals, and one-click reordering, integrated with your ERP. Your buyers self-serve, your team stops
                  re-keying orders.
                </p>
                <HeroInlineForm source="us_b2b_hero" region="us" submitLabel="Get a B2B commerce audit" />
              </div>
              <div className="pp-stage" role="img" aria-label="A B2B storefront showing per-account price tiers, net terms, and a trade portal.">
                <div className="pp-store" aria-hidden="true">
                  <div className="bar"><i /><i /><i /></div>
                  <div className="body">
                    <div className="row"><span className="k">1–9 units</span><span className="v">$20.00</span></div>
                    <div className="row"><span className="k">10–49 units</span><span className="v">$18.00</span></div>
                    <div className="row win"><span className="k">50+ units · net 30</span><span className="v">$15.00</span></div>
                    <div className="row"><span className="k">Reorder · 12 SKUs</span><span className="v">1 click</span></div>
                  </div>
                </div>
                <span className="pp-node" style={{ top: '4%', left: '-4%' }} aria-hidden="true"><span className="d" />Trade portal</span>
                <span className="pp-node" style={{ bottom: '6%', right: '-6%', animationDelay: '.8s' }} aria-hidden="true"><span className="d" />ERP synced</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stat band */}
        <section className="pp-sec tint" style={{ paddingTop: 'clamp(36px,5vh,60px)', paddingBottom: 'clamp(36px,5vh,60px)' }}>
          <div className="pp-wrap"><div className="pp-stats">{STATS.map((s) => (<div className="pp-stat" key={s.b}><b>{s.b}</b><span>{s.s}</span></div>))}</div></div>
        </section>

        {/* What is B2B ecommerce */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// the basics</p>
            <h2 style={{ marginTop: '10px' }}>What is B2B e-commerce?</h2>
            <div style={{ marginTop: '18px', display: 'grid', gap: '16px' }} className="pp-lead">
              <p>
                B2B e-commerce is selling to other businesses online, the way trade buyers actually purchase. Unlike a
                direct-to-consumer store with one price for everyone, a B2B ecommerce platform gives each trade account
                its own login, its own pricing, and the workflows a business buyer needs: net terms, purchase orders,
                quotes, approvals, and fast reordering.
              </p>
              <p>
                Done well, it replaces ordering by email and phone with self-service that your buyers prefer and your
                team does not have to babysit. We are the agency that designs, builds, and implements that system on the
                right platform, then hands it over for you to own and run.
              </p>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// the problem</p>
            <h2 style={{ marginTop: '10px' }}>Why most B2B sites stall</h2>
            <div className="pp-bento" style={{ marginTop: '36px' }}>
              {PAINS.map((p) => (
                <article className="pp-card" key={p.t}>
                  <span className="ic" aria-hidden="true" style={{ fontFamily: 'var(--pp-mono)', fontSize: '17px' }}>{p.i}</span>
                  <h3>{p.t}</h3><p>{p.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// why it pays off</p>
            <h2 style={{ marginTop: '10px' }}>The benefits of B2B ecommerce</h2>
            <div className="pp-bento" style={{ marginTop: '36px' }}>
              {BENEFITS.map((b) => (
                <article className="pp-card" key={b.t}>
                  <span className="ic" aria-hidden="true" style={{ fontFamily: 'var(--pp-mono)', fontSize: '17px' }}>{b.i}</span>
                  <h3>{b.t}</h3><p>{b.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// what we build</p>
            <h2 style={{ marginTop: '10px' }}>B2B ecommerce features, built in</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '60ch' }}>The features that turn a catalog into a self-service ordering system your buyers trust.</p>
            <div className="pp-bento" style={{ marginTop: '36px', gridTemplateColumns: 'repeat(4,1fr)' }}>
              {FEATURES.map((f) => (
                <article className="pp-card" key={f.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)', fontSize: '15px' }}>{f.t}</h3><p>{f.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Platform comparison */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// platforms</p>
            <h2 style={{ marginTop: '10px' }}>B2B ecommerce platform comparison</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '62ch' }}>
              We are platform-agnostic. Here is how the leading B2B ecommerce platforms compare, so you can see where each fits.
            </p>
            <div style={{ marginTop: '28px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead><tr><th>Platform</th><th>Best for</th><th>B2B features</th><th>Catalog size</th></tr></thead>
                <tbody>{COMPARE.map((r) => (<tr key={r.name} className={r.me ? 'me' : ''}><td className="name">{r.name}</td><td>{r.best}</td><td>{r.b2b}</td><td>{r.catalog}</td></tr>))}</tbody>
              </table>
            </div>
          </div>
        </section>

        {/* How to choose */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// choosing</p>
            <h2 style={{ marginTop: '10px' }}>How to choose a B2B ecommerce platform</h2>
            <p className="pp-lead" style={{ marginTop: '12px' }}>The right B2B ecommerce platform depends on your business, not a leaderboard. We weigh five things with you, then recommend the fit:</p>
            <ul style={{ marginTop: '20px', display: 'grid', gap: '12px' }}>
              {CHOOSE.map((c) => (
                <li key={c} style={{ display: 'flex', gap: '12px', fontSize: '15px', lineHeight: 1.55, color: 'var(--pp-body)' }}>
                  <span style={{ marginTop: '3px', flex: 'none', display: 'inline-flex', height: '20px', width: '20px', alignItems: 'center', justifyContent: 'center', borderRadius: '999px', background: 'rgba(240,90,40,.1)', color: 'var(--pp-orange-dark)' }}>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true"><path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>{c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Use cases */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// who we build for</p>
            <h2 style={{ marginTop: '10px' }}>B2B ecommerce examples we build</h2>
            <div className="pp-bento" style={{ marginTop: '36px', gridTemplateColumns: 'repeat(2,1fr)' }}>
              {USE_CASES.map((u) => (
                <article className="pp-card" key={u.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{u.t}</h3><p>{u.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Proof */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// select client work</p>
            <h2 style={{ marginTop: '10px' }}>Wholesale ordering, online</h2>
            <div style={{ marginTop: '28px', maxWidth: '760px', border: '1px solid var(--pp-line)', borderRadius: '18px', padding: '26px', background: '#fff' }}>
              <div style={{ fontFamily: 'var(--pp-mono)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--pp-orange-dark)' }}>Bombay Petals · B2B</div>
              <p className="pp-lead" style={{ marginTop: '12px', fontSize: '16px' }}>
                A B2B commerce build for an artificial-plants and decor wholesaler, so trade buyers place and repeat
                orders online with tiered pricing, instead of over email and phone.
              </p>
              <div style={{ marginTop: '18px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['B2B / wholesale', 'Trade reordering', 'Tiered pricing', 'Artificial plants & decor'].map((t) => (
                  <span key={t} style={{ borderRadius: '999px', background: '#F4EEE9', padding: '4px 12px', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: '#5C564F' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FAQ
          eyebrow="B2B E-COMMERCE FAQ"
          headline="Questions B2B brands ask before they build."
          lead="If your question is not below, send a short brief and answers usually come back inside 24 hours."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* CTA */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <h2 style={{ maxWidth: '22ch' }}>Give your trade buyers a store worth logging into.</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '60ch' }}>
              Tell us how your buyers order today. We will map your pricing, accounts, and ERP into one B2B system and
              send a fixed proposal before any work starts.
            </p>
            <div style={{ marginTop: '28px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '13px', background: 'var(--pp-orange)', padding: '14px 24px', fontSize: '15px', fontWeight: 600, color: '#fff', textDecoration: 'none' }}>Talk to the Founder</a>
              <ModalCTAButton label="Get a B2B commerce audit" region="us" btnVariant="secondary-light" />
            </div>
            <p style={{ marginTop: '28px', fontSize: '14px', color: 'var(--pp-muted)' }}>
              Related:{' '}
              <Link href="/us/services/ecommerce-development" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>e-commerce development</Link>,{' '}
              <Link href="/us/services/magento-development" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>Adobe Commerce / Magento</Link>,{' '}
              <Link href="/us/bigcommerce-development" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>BigCommerce</Link>, and{' '}
              <Link href="/us/omnichannel-commerce" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>omnichannel commerce</Link>.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
