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
  title: 'Commerceflo | The Unified Commerce Engine We Build On | FactoryJet',
  description:
    'Commerceflo is a unified commerce engine: one catalog, one inventory, one order engine across your store, marketplaces, and B2B. FactoryJet designs, builds, and implements unified commerce on Commerceflo and on Shopify, Magento, and BigCommerce.',
  openGraph: {
    type: 'website', siteName: 'FactoryJet',
    title: 'Commerceflo | The Unified Commerce Engine We Build On | FactoryJet',
    description: 'Commerceflo is a unified commerce engine, one catalog, one inventory, one order engine across store, marketplaces, and B2B. We build and implement it for you.',
    url: 'https://factoryjet.com/us/commerceflo',
    images: [{ url: 'https://factoryjet.com/logo.png', width: 1200, height: 630, alt: 'Commerceflo, the unified commerce engine FactoryJet builds on' }],
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: 'Commerceflo | The Unified Commerce Engine | FactoryJet', description: 'A unified commerce engine: one catalog, one inventory, one order engine across store, marketplaces, and B2B.', images: ['https://factoryjet.com/logo.png'] },
  alternates: { canonical: 'https://factoryjet.com/us/commerceflo' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'concepts', label: 'What it is' },
  { key: 'build', label: 'Building on it' },
  { key: 'working', label: 'Working together' },
];
const FAQ_ITEMS = [
  { category: 'concepts', question: 'What is Commerceflo?', answer: 'Commerceflo is a unified commerce engine: the layer that keeps one catalog, one live inventory, and one order engine in sync across your store, marketplaces, and B2B. FactoryJet designs, builds, and implements unified commerce on Commerceflo for brands that want a single source of truth under every channel.' },
  { category: 'concepts', question: 'What is a unified commerce engine?', answer: 'A unified commerce engine is the system that delivers omnichannel commerce: products, inventory, orders, and customers stay consistent in real time no matter where the customer buys. It is the architecture beneath an omnichannel experience.' },
  { category: 'concepts', question: 'Is Commerceflo the same as Shopify or BigCommerce?', answer: 'It serves a related goal but a different one. Shopify and BigCommerce are storefront platforms; Commerceflo is the unified engine that connects channels into one catalog, inventory, and order layer. We build on whichever fits, and recommend Commerceflo when a unified engine is the priority.' },
  { category: 'build', question: 'What does Commerceflo power?', answer: 'One catalog published to every channel, one live inventory every channel reads, one order engine for routing and fulfillment, and the AI agents that list, reprice, and sync across channels on that live data.' },
  { category: 'build', question: 'Do you only build on Commerceflo?', answer: 'No. We are platform-agnostic. We build unified commerce on Shopify and Shopify Plus, Adobe Commerce (Magento), BigCommerce, WooCommerce, headless, and Commerceflo, and recommend the fit for your catalog, B2B rules, and budget.' },
  { category: 'build', question: 'When is Commerceflo the right choice?', answer: 'When unifying channels is the main goal, when you sell across your store, marketplaces, and B2B and want one source of truth, and when you want AI agents acting on live, unified data. We make that recommendation honestly after scoping your needs.' },
  { category: 'working', question: 'Who owns and runs the system?', answer: 'You do. We build and implement it; you own and operate it. We are a services partner, not a subscription you depend on.' },
  { category: 'working', question: 'How much does a Commerceflo build cost?', answer: 'It depends on scope, channels, and integrations, so we scope it on a short call and send a fixed proposal before any work starts.' },
  { category: 'working', question: 'Do you work with US brands?', answer: 'Yes, most of the brands we work with are US-based, across DTC and B2B, with a decade-plus of commerce builds.' },
];
const FAQ_SCHEMA = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ_ITEMS.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })) };
const SERVICE_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Unified commerce development',
  name: 'Unified commerce development on Commerceflo',
  description: 'FactoryJet designs, builds, and implements unified commerce on Commerceflo, a unified commerce engine, with one catalog, one inventory, and one order engine across the store, marketplaces, and B2B, plus AI agents on the live data.',
  provider: { '@type': 'Organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' }, audience: { '@type': 'BusinessAudience', name: 'DTC and B2B brands' },
};
const BREADCRUMB_SCHEMA = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/us' },
  { '@type': 'ListItem', position: 2, name: 'Commerceflo', item: 'https://factoryjet.com/us/commerceflo' },
] };

const STATS = [
  { b: '1', s: 'catalog across every channel' },
  { b: '1', s: 'live inventory, no overselling' },
  { b: '1', s: 'order engine for every channel' },
  { b: 'AI', s: 'agents on live, unified data' },
];
const POWERS = [
  { i: '⬚', t: 'One catalog', d: 'Build a product once and publish it to your store, Amazon, Walmart, TikTok Shop, and your B2B portal in the exact shape each one needs.' },
  { i: '◴', t: 'One live inventory', d: 'Every channel reads the same stock count, so the last unit sold anywhere goes unavailable everywhere within moments.' },
  { i: '⇉', t: 'One order engine', d: 'Orders from every channel land in one queue with one status model for routing, fulfillment, and returns.' },
  { i: '✦', t: 'One AI workforce', d: 'Agents that list, reprice, sync stock, and reconcile feeds, acting on live unified data instead of stale exports.' },
];
const STEPS = [
  { n: '01', t: 'Scope', d: 'We map your channels, catalog, and B2B rules and decide whether Commerceflo or another platform is the right engine.' },
  { n: '02', t: 'Build & integrate', d: 'We connect your store, marketplaces, ERP, and POS into one catalog, inventory, and order layer.' },
  { n: '03', t: 'Deploy agents', d: 'We build and implement the commerce agents that work on your live, unified data.' },
  { n: '04', t: 'Own & scale', d: 'You own and run the system; we support and scale it as you add channels.' },
];

export default function CommercefloPage() {
  return (
    <>
      <Script id="cf-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Script id="cf-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <Script id="cf-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader navLinks={[]} cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        {/* Hero */}
        <section className="pp-dotgrid">
          <div className="pp-wrap" style={{ paddingTop: 'clamp(48px,7vh,96px)', paddingBottom: 'clamp(48px,7vh,96px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">Commerceflo · unified commerce engine</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '18ch' }}>
                  The <span className="pp-grad">unified commerce engine</span> we build on.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '47ch' }}>
                  Commerceflo keeps one catalog, one live inventory, and one order engine in sync across your store,
                  marketplaces, and B2B. FactoryJet designs, builds, and implements unified commerce on it, and on
                  Shopify, Magento, and BigCommerce, then hands it over for you to own.
                </p>
                <HeroInlineForm source="us_commerceflo_hero" region="us" submitLabel="Get a commerce audit" />
              </div>
              {/* Hero visual: the unified engine core */}
              <div className="pp-stage" role="img" aria-label="A unified commerce engine core, Commerceflo, with channels feeding into one catalog, inventory, and order engine.">
                <div className="pp-glow" aria-hidden="true" />
                <div className="pp-core" aria-hidden="true">
                  <span className="ring" />
                  <span className="ember" />
                  <span className="tag">Unified<br />Commerce<br />Engine<br /><b>Commerceflo</b></span>
                </div>
                <span className="pp-node" style={{ top: '6%', left: '0%' }} aria-hidden="true"><span className="d" />Store</span>
                <span className="pp-node" style={{ top: '8%', right: '-2%', animationDelay: '.5s' }} aria-hidden="true"><span className="d" />Amazon</span>
                <span className="pp-node" style={{ bottom: '10%', left: '-2%', animationDelay: '.9s' }} aria-hidden="true"><span className="d" />B2B portal</span>
                <span className="pp-node" style={{ bottom: '8%', right: '0%', animationDelay: '1.3s' }} aria-hidden="true"><span className="d" />TikTok Shop</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stat band */}
        <section className="pp-sec tint" style={{ paddingTop: 'clamp(36px,5vh,60px)', paddingBottom: 'clamp(36px,5vh,60px)' }}>
          <div className="pp-wrap"><div className="pp-stats">{STATS.map((s, i) => (<div className="pp-stat" key={i}><b>{s.b}</b><span>{s.s}</span></div>))}</div></div>
        </section>

        {/* What is Commerceflo */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// the engine</p>
            <h2 style={{ marginTop: '10px' }}>What is Commerceflo?</h2>
            <div style={{ marginTop: '18px', display: 'grid', gap: '16px' }} className="pp-lead">
              <p>
                Commerceflo is a unified commerce engine, the layer that delivers true omnichannel by keeping products,
                inventory, orders, and customers in sync in real time across every channel you sell through. Where a
                storefront platform runs one channel well, a unified engine connects them all into one source of truth.
              </p>
              <p>
                FactoryJet is product-agnostic. We build and implement unified commerce on Commerceflo when a unified
                engine is the priority, and on Shopify, Adobe Commerce, BigCommerce, or WooCommerce when those fit better.
                Whatever we build, you own and operate it; there is no subscription to us.
              </p>
            </div>
          </div>
        </section>

        {/* What it powers */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// what it powers</p>
            <h2 style={{ marginTop: '10px' }}>One catalog, one inventory, one order engine</h2>
            <div className="pp-bento" style={{ marginTop: '36px', gridTemplateColumns: 'repeat(4,1fr)' }}>
              {POWERS.map((p) => (
                <article className="pp-card" key={p.t}>
                  <span className="ic" aria-hidden="true" style={{ fontFamily: 'var(--pp-mono)', fontSize: '17px' }}>{p.i}</span>
                  <h3>{p.t}</h3><p>{p.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// how we work</p>
            <h2 style={{ marginTop: '10px' }}>From scope to a system you own</h2>
            <div className="pp-bento" style={{ marginTop: '36px', gridTemplateColumns: 'repeat(4,1fr)' }}>
              {STEPS.map((s) => (
                <article className="pp-card" key={s.n}>
                  <div style={{ fontFamily: 'var(--pp-mono)', fontSize: '12px', fontWeight: 700, color: 'var(--pp-orange-dark)' }}>{s.n}</div>
                  <h3 style={{ marginTop: '8px' }}>{s.t}</h3><p>{s.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FAQ
          eyebrow="COMMERCEFLO FAQ"
          headline="Questions about the unified commerce engine."
          lead="If your question is not below, send a short brief and answers usually come back inside 24 hours."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        <section className="pp-sec tint">
          <div className="pp-wrap">
            <h2 style={{ maxWidth: '22ch' }}>Put every channel on one engine.</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '60ch' }}>
              Tell us where you sell today. We will map your channels, catalog, and B2B into one unified system, on
              Commerceflo or the platform that fits, and send a fixed proposal before any work starts.
            </p>
            <div style={{ marginTop: '28px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '13px', background: 'var(--pp-orange)', padding: '14px 24px', fontSize: '15px', fontWeight: 600, color: '#fff', textDecoration: 'none' }}>Talk to the Founder</a>
              <ModalCTAButton label="Get a commerce audit" region="us" btnVariant="secondary-light" />
            </div>
            <p style={{ marginTop: '28px', fontSize: '14px', color: 'var(--pp-muted)' }}>
              Related:{' '}
              <Link href="/us/omnichannel-commerce" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>omnichannel commerce</Link>,{' '}
              <Link href="/us/b2b-ecommerce" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>B2B e-commerce</Link>, and{' '}
              <Link href="/us/services/ecommerce-development" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>e-commerce development</Link>.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
