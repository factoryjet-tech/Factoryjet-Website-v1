import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/omnichannel';

export const metadata: Metadata = {
  title: 'BigCommerce Development Agency | BigCommerce Developers | FactoryJet',
  description:
    'BigCommerce development agency for DTC and B2B brands. We design, build, customize, and migrate BigCommerce stores, with open APIs, B2B Edition, multi-storefront, and headless BigCommerce builds. Get a fixed proposal before any work starts.',
  openGraph: {
    type: 'website', siteName: 'FactoryJet',
    title: 'BigCommerce Development Agency | BigCommerce Developers | FactoryJet',
    description: 'We design, build, and migrate BigCommerce stores: custom themes, B2B Edition, headless, and API integrations.',
    url: 'https://factoryjet.com/bigcommerce-development',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet, BigCommerce development agency' }],
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: 'BigCommerce Development Agency | FactoryJet', description: 'BigCommerce development: custom themes, B2B Edition, headless, API integrations.', images: ['https://factoryjet.com/og-default.png'] },
  alternates: { canonical: 'https://factoryjet.com/bigcommerce-development' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'basics', label: 'BigCommerce basics' },
  { key: 'building', label: 'Building & B2B' },
  { key: 'headless', label: 'Headless & API' },
  { key: 'working', label: 'Working together' },
];
const FAQ_ITEMS = [
  { category: 'basics', question: 'What is BigCommerce and how is it different from Shopify?', answer: 'BigCommerce is an open-SaaS ecommerce platform: hosted and maintained like Shopify, but with open APIs, no transaction fees, and strong native B2B. Shopify leans into a simpler admin and a larger app store. We help you choose the fit and build on it.' },
  { category: 'basics', question: 'BigCommerce vs Shopify: which should you choose?', answer: 'BigCommerce vs Shopify usually comes down to your catalog and B2B needs. BigCommerce gives you open APIs, no transaction fees, and native B2B pricing and price lists, which suits larger catalogs and wholesale. Shopify and Shopify Plus give you a simpler admin and a bigger app store, which suits fast DTC launches. We recommend the fit for your business and build on either.' },
  { category: 'basics', question: 'What is BigCommerce development?', answer: 'BigCommerce development is designing, building, customizing, and migrating online stores on BigCommerce: custom themes, B2B Edition, headless front ends, and integrations through the BigCommerce API.' },
  { category: 'basics', question: 'What kind of brands is BigCommerce best for?', answer: 'BigCommerce suits mid-market DTC and B2B brands that want room to customize, no per-sale platform fee, native B2B, and the option to go headless. We build for both DTC and B2B, often on the same store.' },
  { category: 'basics', question: 'How much does BigCommerce cost?', answer: 'BigCommerce has its own platform plans priced by store size and features. Our build cost depends on scope, so we scope it on a short call and send a fixed proposal before any work starts.' },
  { category: 'building', question: 'Can you build a custom BigCommerce theme?', answer: 'Yes. We build fast, on-brand custom BigCommerce themes from your design, not a generic template, tuned for Core Web Vitals and conversion.' },
  { category: 'building', question: 'Can you set up BigCommerce B2B Edition?', answer: 'Yes. We configure customer groups, price lists, quotes, net terms, and trade portals with B2B Edition so your B2B buyers self-serve on the same store as your DTC shoppers.' },
  { category: 'building', question: 'Can you build a multi-storefront or multi-currency BigCommerce store?', answer: 'Yes. We set up multiple storefronts, regions, and currencies from one BigCommerce account, with catalogs and pricing tuned per market.' },
  { category: 'building', question: 'Can you do BigCommerce dropshipping setups?', answer: 'Yes. We connect supplier and dropshipping apps and automate order routing so products ship from your suppliers without manual handoffs.' },
  { category: 'headless', question: 'Do you build headless BigCommerce stores?', answer: 'Yes. We use BigCommerce as the commerce engine behind a Next.js or custom front end, connected through the BigCommerce API, when you need custom UX or top-tier performance.' },
  { category: 'headless', question: 'Can you work with the BigCommerce API and build apps?', answer: 'Yes. We build with the BigCommerce API and developer tooling, including custom apps, storefront customizations, and back-office integrations.' },
  { category: 'headless', question: 'Can you integrate our ERP, PIM, POS, and marketplaces?', answer: 'Yes. We connect ERP, PIM, POS, 3PL, and marketplaces through the BigCommerce API so your systems share one source of product, inventory, and order data.' },
  { category: 'headless', question: 'Is BigCommerce good for developers?', answer: 'Yes. BigCommerce is API-first with strong developer documentation and tooling, which makes custom storefronts, apps, and integrations straightforward for an experienced team.' },
  { category: 'working', question: 'Can you migrate us to BigCommerce from Magento or WooCommerce?', answer: 'Yes. We migrate products, customers, orders, and content with 301 redirects and a cutover plan that protects your rankings and uptime.' },
  { category: 'working', question: 'How long does a BigCommerce build take?', answer: 'Most builds and migrations run from a few weeks to a few months, depending on catalog size and B2B complexity. You get a phased timeline with milestones after a short scoping call.' },
  { category: 'working', question: 'Do we own the BigCommerce store you build?', answer: 'Yes. You own and operate everything we build. We design, build, implement, and hand it over, and we stay on call to support and scale it. We never run your store for you.' },
  { category: 'working', question: 'Do you work with US BigCommerce brands?', answer: 'Yes, most of the brands we work with are US-based, across DTC and B2B, with a decade-plus of commerce builds behind us.' },
];
const FAQ_SCHEMA = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ_ITEMS.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })) };
const SERVICE_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'Service', serviceType: 'BigCommerce development',
  name: 'BigCommerce development and migration',
  description: 'BigCommerce development agency. We design, build, customize, and migrate BigCommerce stores: custom themes, B2B Edition, headless BigCommerce, multi-storefront, and API integrations, for US DTC and B2B brands.',
  provider: { '@type': 'Organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' }, audience: { '@type': 'BusinessAudience', name: 'DTC and B2B brands on BigCommerce' },
};
const HOWTO_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'HowTo', name: 'How FactoryJet builds a BigCommerce store',
  description: 'Our process for designing, building, and migrating a BigCommerce store for US DTC and B2B brands.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Scope', text: 'We map your catalog, B2B rules, and integrations, then recommend the BigCommerce setup and write a fixed proposal.' },
    { '@type': 'HowToStep', position: 2, name: 'Design and build', text: 'We design and build a custom BigCommerce theme and configure B2B Edition, checkout, and apps.' },
    { '@type': 'HowToStep', position: 3, name: 'Integrate', text: 'We connect ERP, PIM, POS, 3PL, and marketplaces through the BigCommerce API.' },
    { '@type': 'HowToStep', position: 4, name: 'Migrate and launch', text: 'We migrate data with 301 redirects, test on staging, and run a clean cutover that protects SEO.' },
    { '@type': 'HowToStep', position: 5, name: 'Own and scale', text: 'You own and operate the store; we support and scale it as you grow.' },
  ],
};
const ORG_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'Organization', name: 'FactoryJet', url: 'https://factoryjet.com',
  description: 'FactoryJet is an e-commerce development agency that builds BigCommerce, omnichannel, and B2B commerce for DTC and B2B brands.',
  
  sameAs: ['https://www.linkedin.com/company/factoryjet'],
};
const BREADCRUMB_SCHEMA = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
  { '@type': 'ListItem', position: 2, name: 'BigCommerce Development', item: 'https://factoryjet.com/bigcommerce-development' },
] };

const STATS = [
  { b: 'Open SaaS', s: 'open APIs, no transaction fees' },
  { b: 'B2B Edition', s: 'trade pricing & portals' },
  { b: 'Headless-ready', s: 'any front end via API' },
  { b: '10+ yrs', s: 'building commerce' },
];
const SOURCED = [
  { v: '$34B', d: 'in merchant GMV across BigCommerce stores in 2024, up about 18% year over year.', src: 'BigCommerce / Statista', href: 'https://www.statista.com/topics/13154/bigcommerce/' },
  { v: '~2×', d: 'BigCommerce B2B merchants grew about twice as fast as the broader B2B ecommerce market (12.6% vs 6.7% CAGR, 2022 to 2024).', src: 'BigCommerce', href: 'https://www.statista.com/topics/13154/bigcommerce/' },
  { v: '+26%', d: 'Cyber Week 2024 GMV growth for brands on BigCommerce, outperforming global benchmarks.', src: 'BigCommerce, 2024', href: 'https://investors.bigcommerce.com/news-releases/news-release-details/brands-and-retailers-bigcommerce-outperform-global-benchmarks-26' },
];
const BENEFITS = [
  { i: '◇', t: 'Open APIs, no transaction fees', d: 'Customize anything through the API and keep more margin, with no per-sale platform fee.' },
  { i: '▤', t: 'B2B Edition built in', d: 'Price lists, customer groups, quotes, and trade portals without bolting on a separate system.' },
  { i: '⛓', t: 'Headless-ready', d: 'Run any front end against BigCommerce as the commerce engine when you need custom UX or speed.' },
  { i: '▦', t: 'Multi-storefront', d: 'Several storefronts, currencies, and catalogs from one BigCommerce account and admin.' },
  { i: '↻', t: 'Lower total cost', d: 'Hosting, maintenance, and PCI handled, so your team builds instead of babysitting servers.' },
  { i: '⤢', t: 'Built to scale', d: 'High catalog limits and strong performance for fast-growing mid-market brands.' },
];
const CAPABILITIES = [
  { t: 'Custom theme & storefront', d: 'A fast, on-brand BigCommerce theme built from your design, not a generic template.' },
  { t: 'B2B Edition setup', d: 'Customer groups, price lists, net terms, quotes, and trade portals configured for your buyers.' },
  { t: 'Headless builds', d: 'BigCommerce as the engine behind a Next.js or custom front end, connected via API.' },
  { t: 'Apps & integrations', d: 'ERP, PIM, POS, 3PL, and marketplace integrations through the BigCommerce API.' },
  { t: 'Multi-storefront & currency', d: 'Multiple storefronts, regions, and currencies from one account.' },
  { t: 'Migration to BigCommerce', d: 'Move from Magento, WooCommerce, or others with 301 redirects and SEO preserved.' },
];
const USECASES = [
  { t: 'Mid-market DTC brands', img: 'retail-dtc.webp', alt: 'A growing mid-market retail brand serving a customer at a BigCommerce-powered point of sale', d: 'Fast, custom storefronts that scale with a growing catalog, with no transaction fees eating your margin and the open API ready for whatever you bolt on next.' },
  { t: 'B2B on BigCommerce', img: 'wholesale-dtc.webp', alt: 'A wholesale team fulfilling trade orders placed through a BigCommerce B2B Edition store', d: 'B2B Edition with price lists, customer groups, quotes, and net terms, so trade buyers self-serve on the same platform as your DTC store.' },
  { t: 'Multi-storefront & international', img: 'multi-location.webp', alt: 'An operator managing multiple BigCommerce storefronts and currencies from one admin', d: 'Run several storefronts, regions, and currencies from one BigCommerce account, with catalogs and pricing tuned per market.' },
  { t: 'Headless & developer-led', img: 'marketplace.webp', alt: 'A developer building a headless BigCommerce storefront connected through the BigCommerce API', d: 'BigCommerce as a headless commerce engine behind a custom front end, with the open API and BigCommerce developer tooling doing the heavy lifting.' },
];
const COMPARE = [
  { name: 'BigCommerce', model: 'Open SaaS, no transaction fees', b2b: 'B2B Edition', headless: 'Strong, API-first', best: 'Mid-market DTC + B2B', me: true },
  { name: 'Shopify Plus', model: 'SaaS', b2b: 'B2B on Plus', headless: 'Hydrogen / API', best: 'Fast DTC + B2B', me: false },
  { name: 'Adobe Commerce', model: 'Self-hosted / PaaS', b2b: 'Deep native B2B', headless: 'PWA Studio / API', best: 'Large, complex catalogs', me: false },
  { name: 'WooCommerce', model: 'Self-hosted (WordPress)', b2b: 'Via plugins', headless: 'REST API', best: 'Full control, small to mid', me: false },
];
const STEPS = [
  { n: '01', t: 'Scope', d: 'We map your catalog, B2B rules, and integrations, then recommend the setup and write a fixed proposal.' },
  { n: '02', t: 'Design & build', d: 'A custom BigCommerce theme plus B2B Edition, checkout, and apps configured for your store.' },
  { n: '03', t: 'Integrate', d: 'ERP, PIM, POS, 3PL, and marketplaces connected through the BigCommerce API.' },
  { n: '04', t: 'Migrate & launch', d: 'Data migration with 301 redirects, staging QA, a clean cutover, then you own and run it.' },
];

const imgStyle = { width: '100%', height: 'auto', objectFit: 'cover' as const, borderRadius: '18px', border: '1px solid var(--pp-line)', display: 'block' };
const dot = { width: '8px', height: '8px', borderRadius: '50%', background: '#E0D6CC', display: 'inline-block' };
const tile = { height: '38px', borderRadius: '8px', background: 'linear-gradient(180deg,#FFF1EA,#FBE7DD)' };

export default function BigCommerceDevelopmentPage() {
  return (
    <>
      <Script id="bc-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Script id="bc-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <Script id="bc-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <Script id="bc-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <Script id="bc-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader navLinks={[]} cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        {/* Hero */}
        <section className="pp-dotgrid">
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">BigCommerce development</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '16ch' }}>
                  BigCommerce, <span className="pp-grad">built open</span> and built to scale.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  We are a BigCommerce development agency for DTC and B2B brands. We design, build, and migrate stores on
                  BigCommerce, with its open APIs, B2B Edition, multi-storefront, and headless options, then hand you a
                  store you own and run.
                </p>
                <HeroInlineForm source="us_bigcommerce_hero" region="us" submitLabel="Get a BigCommerce audit" />
              </div>
              <div className="pp-stage" role="img" aria-label="A BigCommerce open-SaaS storefront connected through open APIs to apps, channels, B2B Edition, a headless front end, and ERP.">
                <div style={{ width: '64%', background: '#fff', border: '1px solid var(--pp-line)', borderRadius: '14px', boxShadow: '0 18px 50px rgba(20,17,15,.1)', overflow: 'hidden', zIndex: 3 }} aria-hidden="true">
                  <div style={{ display: 'flex', gap: '5px', padding: '9px 12px', borderBottom: '1px solid var(--pp-line)', background: 'var(--pp-tint)' }}><span style={dot} /><span style={dot} /><span style={dot} /></div>
                  <div style={{ padding: '14px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    <span style={tile} /><span style={tile} /><span style={tile} /><span style={tile} />
                    <span style={{ gridColumn: '1 / -1', textAlign: 'center', fontFamily: 'var(--pp-mono)', fontSize: '10px', color: 'var(--pp-orange-dark)', fontWeight: 700, marginTop: '4px' }}>Your storefront</span>
                  </div>
                </div>
                <span aria-hidden="true" style={{ position: 'absolute', bottom: '11%', left: '50%', transform: 'translateX(-50%)', background: '#14110F', color: '#fff', fontFamily: 'var(--pp-mono)', fontSize: '10px', fontWeight: 600, borderRadius: '9px', padding: '7px 12px', zIndex: 4 }}>// Open SaaS API</span>
                <span className="pp-node" style={{ top: '7%', left: '5%' }} aria-hidden="true"><span className="d" />Apps</span>
                <span className="pp-node" style={{ top: '15%', right: '5%' }} aria-hidden="true"><span className="d" />Channels</span>
                <span className="pp-node" style={{ bottom: '8%', left: '6%' }} aria-hidden="true"><span className="d" />B2B Edition</span>
                <span className="pp-node" style={{ bottom: '7%', right: '7%' }} aria-hidden="true"><span className="d" />Headless</span>
                <span className="pp-node" style={{ top: '46%', right: '-3%' }} aria-hidden="true"><span className="d" />ERP sync</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stat band */}
        <section className="pp-sec tint" style={{ paddingTop: 'clamp(32px,4vh,52px)', paddingBottom: 'clamp(32px,4vh,52px)' }}>
          <div className="pp-wrap"><div className="pp-stats">{STATS.map((s) => (<div className="pp-stat" key={s.b}><b>{s.b}</b><span>{s.s}</span></div>))}</div></div>
        </section>

        {/* What is */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// the basics</p>
            <h2 style={{ marginTop: '10px' }}>What is BigCommerce development?</h2>
            <div style={{ marginTop: '18px', display: 'grid', gap: '16px' }} className="pp-lead">
              <p>
                BigCommerce development is designing, building, and customizing an online store on BigCommerce, an
                open-SaaS ecommerce platform. Open SaaS means you get a hosted, maintained platform with open APIs
                underneath, so you are not boxed in: themes, checkout, B2B rules, and integrations can all be customized,
                and the storefront can run headless against any front end.
              </p>
              <p>
                For mid-market DTC and B2B brands, that openness is the draw. There are no per-sale transaction fees, the
                API connects to almost anything, B2B Edition handles trade pricing and portals natively, and you can run
                multiple storefronts and currencies from one admin. It is a platform built to scale with a growing
                catalog rather than one you outgrow.
              </p>
              <p>
                We build BigCommerce stores for DTC and B2B brands, set up B2B Edition for trade buyers, connect apps and
                ERPs through the API, build headless front ends where they earn their keep, and migrate stores from
                Magento, WooCommerce, or other platforms without losing SEO. You own and run what we build.
              </p>
            </div>
          </div>
        </section>

        {/* Sourced stats */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// why brands pick BigCommerce</p>
            <h2 style={{ marginTop: '10px' }}>A platform built for scale</h2>
            <div className="pp-bento" style={{ marginTop: '36px' }}>
              {SOURCED.map((s) => (
                <article className="pp-card" key={s.v}>
                  <div style={{ fontFamily: 'var(--pp-display)', fontWeight: 800, fontSize: '32px', lineHeight: 1, color: 'var(--pp-orange-dark)', letterSpacing: '-0.03em' }}>{s.v}</div>
                  <p style={{ marginTop: '10px' }}>{s.d}</p>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" style={{ marginTop: '12px', display: 'inline-block', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-muted)', textDecoration: 'underline' }}>Source: {s.src}</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// why it pays off</p>
            <h2 style={{ marginTop: '10px' }}>Why build on BigCommerce</h2>
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

        {/* Capabilities */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// what we build</p>
            <h2 style={{ marginTop: '10px' }}>BigCommerce development, end to end</h2>
            <div className="pp-bento" style={{ marginTop: '36px' }}>
              {CAPABILITIES.map((c) => (
                <article className="pp-card" key={c.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{c.t}</h3><p>{c.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases with imagery */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// who we build for</p>
            <h2 style={{ marginTop: '10px' }}>BigCommerce, by business type</h2>
            <div style={{ marginTop: '34px', display: 'grid', gap: 'clamp(28px,4vw,44px)' }}>
              {USECASES.map((u, i) => (
                <div key={u.t} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px,4vw,44px)', alignItems: 'center' }} className="pp-herogrid">
                  <div style={{ order: i % 2 === 1 ? 2 : 1 }}>
                    <h3 style={{ fontSize: '21px' }}>{u.t}</h3>
                    <p className="pp-lead" style={{ marginTop: '10px', fontSize: '16px' }}>{u.d}</p>
                  </div>
                  <div style={{ order: i % 2 === 1 ? 1 : 2 }}>
                    <Image src={`${IMG}/${u.img}`} alt={u.alt} width={1448} height={1086} sizes="(max-width:760px) 100vw, 50vw" style={imgStyle} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// platforms</p>
            <h2 style={{ marginTop: '10px' }}>BigCommerce vs other platforms</h2>
            <div style={{ marginTop: '28px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead><tr><th>Platform</th><th>Model</th><th>Native B2B</th><th>Headless</th><th>Best for</th></tr></thead>
                <tbody>{COMPARE.map((r) => (<tr key={r.name} className={r.me ? 'me' : ''}><td className="name">{r.name}</td><td>{r.model}</td><td>{r.b2b}</td><td>{r.headless}</td><td>{r.best}</td></tr>))}</tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// how we work</p>
            <h2 style={{ marginTop: '10px' }}>From scope to a store you own</h2>
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

        {/* Founder band */}
        <section className="pp-sec tint">
          <div className="pp-wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px,4vw,44px)', alignItems: 'center' }}>
            <div>
              <p className="pp-mlabel">// founder-led</p>
              <h2 style={{ marginTop: '10px', fontSize: 'clamp(24px,2.6vw,32px)' }}>Built with you, owned by you</h2>
              <p className="pp-lead" style={{ marginTop: '12px' }}>
                You work directly with the founder and a small senior team. We design and build your BigCommerce store,
                then hand it over. You own and run it, with us on call to support and scale.
              </p>
            </div>
            <Image src={`${IMG}/founder-advisory.webp`} alt="FactoryJet's founder reviewing a BigCommerce store build with a client team around a laptop" width={1448} height={1086} sizes="(max-width:760px) 100vw, 50vw" style={imgStyle} />
          </div>
        </section>

        {/* Testimonials */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// what clients say</p>
            <h2 style={{ marginTop: '10px' }}>Real founders, real builds</h2>
            <div style={{ marginTop: '34px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="pp-bento">
              <figure style={{ border: '1px solid var(--pp-line)', borderRadius: '18px', background: '#fff', padding: '26px', display: 'flex', flexDirection: 'column', margin: 0 }}>
                <div style={{ color: 'var(--pp-orange)', fontSize: '13px', letterSpacing: '2px' }} aria-hidden="true">★★★★★</div>
                <blockquote style={{ fontFamily: 'var(--pp-display)', fontWeight: 600, fontSize: '18px', lineHeight: 1.5, color: 'var(--pp-ink)', margin: '14px 0 20px', letterSpacing: '-0.01em' }}>
                  “We were live in 6 days, I genuinely did not believe that was possible. The design is stunning, the WhatsApp integration brings in inquiries every day, and the site has stayed lightning fast.”
                </blockquote>
                <figcaption style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: 'auto' }}>
                  <Image src="/images/testimonials/ricky-belle-maison-160.webp" alt="Ricky B., Founder of Belle Maison" width={48} height={48} style={{ borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--pp-line)' }} />
                  <span><b style={{ fontFamily: 'var(--pp-display)', fontSize: '15px', color: 'var(--pp-ink)', display: 'block' }}>Ricky B.</b><span style={{ fontSize: '13px', color: 'var(--pp-muted)' }}>Founder, Belle Maison</span></span>
                </figcaption>
              </figure>
              <figure style={{ border: '1px solid var(--pp-line)', borderRadius: '18px', background: '#fff', padding: '26px', display: 'flex', flexDirection: 'column', margin: 0 }}>
                <div style={{ color: 'var(--pp-orange)', fontSize: '13px', letterSpacing: '2px' }} aria-hidden="true">★★★★★</div>
                <blockquote style={{ fontFamily: 'var(--pp-display)', fontWeight: 600, fontSize: '18px', lineHeight: 1.5, color: 'var(--pp-ink)', margin: '14px 0 20px', letterSpacing: '-0.01em' }}>
                  “In our business, clients size you up before they ever call. FactoryJet built us a website that finally looks as solid as the work we deliver, and we are getting real project inquiries through it.”
                </blockquote>
                <figcaption style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: 'auto' }}>
                  <Image src="/images/testimonials/vishal-impulse-branding-160.webp" alt="Vishal K., Director of Impulse Branding" width={48} height={48} style={{ borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--pp-line)' }} />
                  <span><b style={{ fontFamily: 'var(--pp-display)', fontSize: '15px', color: 'var(--pp-ink)', display: 'block' }}>Vishal K.</b><span style={{ fontSize: '13px', color: 'var(--pp-muted)' }}>Director, Impulse Branding</span></span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <FAQ
          eyebrow="BIGCOMMERCE DEVELOPMENT FAQ"
          headline="Questions before you build."
          lead="If your question is not below, send a short brief and answers usually come back inside 24 hours."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* CTA two-column */}
        <section className="pp-sec tint" id="final-cta">
          <div className="pp-wrap" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'clamp(28px,4vw,44px)', alignItems: 'center' }}>
            <div>
              <p className="pp-mlabel" style={{ color: 'var(--pp-orange-dark)' }}>// before you commit</p>
              <h2 style={{ marginTop: '12px', maxWidth: '18ch' }}>Build BigCommerce the right way.</h2>
              <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '52ch' }}>
                Tell us what you sell and where you are today. We will scope your BigCommerce build or migration and send a
                fixed proposal before any work starts.
              </p>
              <div style={{ marginTop: '26px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '13px', background: 'var(--pp-orange)', padding: '14px 24px', fontSize: '15px', fontWeight: 600, color: '#fff', textDecoration: 'none' }}>Talk to the Founder</a>
                <ModalCTAButton label="Get a BigCommerce audit" region="us" btnVariant="secondary-light" />
              </div>
              <div style={{ marginTop: '26px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span aria-hidden="true" style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'linear-gradient(135deg,#F05A28,#C8431A)', color: '#fff', fontFamily: 'var(--pp-display)', fontWeight: 800, fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>B</span>
                <span><b style={{ fontFamily: 'var(--pp-display)', fontSize: '14px', color: 'var(--pp-ink)', display: 'block' }}>Bhavesh, Founder of FactoryJet</b><span style={{ fontSize: '12px', color: 'var(--pp-muted)' }}>You work with me directly. No handoffs.</span></span>
              </div>
            </div>
            <div style={{ background: '#fff', border: '1px solid var(--pp-line)', borderRadius: '18px', padding: '22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <Image src="/images/testimonials/ricky-belle-maison-160.webp" alt="Ricky B., Belle Maison" width={46} height={46} style={{ borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--pp-line)' }} />
                <span><b style={{ fontFamily: 'var(--pp-display)', fontSize: '14px', color: 'var(--pp-ink)', display: 'block' }}>Ricky B.</b><span style={{ fontSize: '12px', color: 'var(--pp-muted)' }}>Belle Maison</span></span>
              </div>
              <blockquote style={{ fontStyle: 'italic', fontSize: '14px', lineHeight: 1.55, color: 'var(--pp-body)', borderLeft: '2px solid var(--pp-orange)', paddingLeft: '12px', margin: '0 0 16px' }}>
                “We were live in just 6 days. New inquiries come in every day, and the site is still really fast.”
              </blockquote>
              <div style={{ borderTop: '1px solid var(--pp-line)', paddingTop: '14px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--pp-muted)' }}>
                <span aria-hidden="true" style={{ color: 'var(--pp-orange)', letterSpacing: '1px' }}>★★★★★</span>
                <span><strong style={{ color: 'var(--pp-ink)' }}>4.9 on Clutch</strong> · 150+ verified reviews</span>
              </div>
            </div>
          </div>
          <div className="pp-wrap" style={{ marginTop: '28px' }}>
            <p style={{ fontSize: '14px', color: 'var(--pp-muted)' }}>
              Related:{' '}
              <Link href="/headless-commerce" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>headless commerce</Link>,{' '}
              <Link href="/b2b-ecommerce" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>B2B e-commerce</Link>,{' '}
              <Link href="/omnichannel-commerce" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>omnichannel commerce</Link>, and{' '}
              <Link href="/services/ecommerce-development" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>e-commerce development</Link>.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
