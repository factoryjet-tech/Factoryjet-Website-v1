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
  title: 'Commerceflo: The Commerce AI Operator | FactoryJet',
  description:
    'Commerceflo is FactoryJet\'s AI-native commerce operator: it audits your storefront in under 90 seconds, ranks what is stalling growth, and fixes it on approve.',
  openGraph: {
    type: 'website', siteName: 'FactoryJet',
    title: 'Commerceflo: The Commerce AI Operator | FactoryJet',
    description: 'An AI-native commerce operator that audits your storefront in under 90 seconds, ranks what is stalling growth, and fixes it on approve across every channel.',
    url: 'https://factoryjet.com/commerceflo',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Commerceflo, the commerce AI operator by FactoryJet' }],
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: 'Commerceflo: The Commerce AI Operator | FactoryJet', description: 'It audits your storefront in under 90 seconds, ranks what is stalling growth, and fixes it on approve across every channel.', images: ['https://factoryjet.com/og-default.png'] },
  alternates: { canonical: 'https://factoryjet.com/commerceflo' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'concepts', label: 'What it is' },
  { key: 'audit', label: 'Audit & fixes' },
  { key: 'working', label: 'Working together' },
];
const FAQ_ITEMS = [
  { category: 'concepts', question: 'What is Commerceflo?', answer: 'Commerceflo is a commerce AI operator: FactoryJet\'s AI-native platform that watches your storefront the way a seasoned growth team would, finds what is holding back revenue, and carries out the fix once you approve it. It works across your store, marketplaces, and B2B, and is built for DTC and B2B brands.' },
  { category: 'concepts', question: 'What is a commerce AI operator?', answer: 'A commerce AI operator is software that does the operating work of running a store, not just reporting on it. It audits the storefront, ranks issues by revenue impact, and executes the fixes you approve across every connected channel, instead of leaving you a dashboard of numbers to act on yourself.' },
  { category: 'concepts', question: 'Is Commerceflo the same as Shopify or BigCommerce?', answer: 'No. Shopify and BigCommerce are storefront platforms that run one channel. Commerceflo is the AI operator layer that sits on top of them, auditing and fixing across every channel you sell through. We run Commerceflo on Shopify, Shopify Plus, Magento, BigCommerce, and WooCommerce.' },
  { category: 'concepts', question: 'How is Commerceflo different from analytics or a store audit tool?', answer: 'Analytics tools show you numbers and audit tools hand you a report. Commerceflo goes further: it ranks the issues by what they cost you, then applies the fix across your channels once you approve. The work gets done, not just measured.' },
  { category: 'audit', question: 'How does the 90-second storefront audit work?', answer: 'Connect your channels and Commerceflo scans your catalog, pricing, inventory, product content, SEO, and checkout in under 90 seconds. It returns a ranked list of what is stalling growth, with the highest-revenue issues first, so you know exactly where to act.' },
  { category: 'audit', question: 'What can Commerceflo fix?', answer: 'It handles catalog and listing gaps, pricing and repricing, inventory and stock sync, product content and feeds, and channel compliance issues. Eight specialist agents cover inventory, pricing, fulfillment, content, compliance, customer segmentation, financial analysis, and growth.' },
  { category: 'audit', question: 'Will it change my store without asking?', answer: 'No. Commerceflo is approve-first: it proposes each worked fix and nothing runs until you click approve. For routine, trusted changes you can set auto-approve rules, so the repetitive work happens on its own while you keep control of the rest.' },
  { category: 'audit', question: 'Which platforms and channels does it work with?', answer: 'Storefronts and marketplaces including Shopify, Shopify Plus, Magento, BigCommerce, WooCommerce, Amazon, Walmart, eBay, TikTok Shop, and B2B portals, plus back-office systems for inventory, orders, and fulfillment. One command center replaces the five to ten tools most brands reconcile by hand.' },
  { category: 'audit', question: 'What are the specialist agents?', answer: 'Eight today, with more arriving: inventory, fulfillment, pricing, financial analysis, content, compliance, customer segmentation, and growth. Each works on your live, unified data instead of stale exports, and each proposal is a completed piece of work waiting for your approval.' },
  { category: 'working', question: 'Who owns and runs the system?', answer: 'You do. FactoryJet designs, builds, and implements Commerceflo for you, then you own and operate it. We are a services partner that sets it up and supports it, not a subscription you depend on.' },
  { category: 'working', question: 'How much does Commerceflo cost?', answer: 'It depends on your channels, catalog, and integrations, so we scope it on a short call and send a fixed proposal before any work starts. You will know the full cost before we begin.' },
  { category: 'working', question: 'How do I get started?', answer: 'Start with a free 90-second storefront audit. Tell us where you sell, we run the audit, and you see the ranked list of what is stalling growth. From there we scope the build and send a fixed proposal.' },
];
const FAQ_SCHEMA = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ_ITEMS.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })) };
const SERVICE_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Commerce AI operator',
  name: 'Commerceflo, the commerce AI operator',
  description: 'Commerceflo is FactoryJet\'s AI-native commerce operator. It audits a storefront in under 90 seconds, ranks what is stalling growth by revenue impact, and applies the fixes on approval across the store, marketplaces, and B2B, run by eight specialist agents.',
  provider: { '@type': 'Organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' }, audience: { '@type': 'BusinessAudience', name: 'DTC and B2B brands' },
};
const BREADCRUMB_SCHEMA = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
  { '@type': 'ListItem', position: 2, name: 'Commerceflo', item: 'https://factoryjet.com/commerceflo' },
] };

const STATS = [
  { b: '90s', s: 'to audit your whole storefront' },
  { b: '8', s: 'specialist agents on the job' },
  { b: '2s', s: 'sync across every channel' },
  { b: '1', s: 'click to approve a fix' },
];
const POWERS = [
  { i: '◎', t: 'Audit in 90 seconds', d: 'Commerceflo scans your catalog, pricing, inventory, content, SEO, and checkout and tells you what is holding back revenue.' },
  { i: '↕', t: 'Ranked by revenue impact', d: 'You get the issues that cost you the most at the top, not a flat wall of warnings to sort through yourself.' },
  { i: '✓', t: 'Fixed on approve', d: 'Each fix is a completed piece of work. Click approve and Commerceflo applies it across your store, marketplaces, and B2B.' },
  { i: '⋔', t: 'Eight specialist agents', d: 'Inventory, pricing, fulfillment, content, compliance, segmentation, financial analysis, and growth, all on your live data.' },
  { i: '▣', t: 'One command center', d: 'One place that replaces the five to ten disconnected tools most brands reconcile by hand every morning.' },
  { i: '◈', t: 'Runs on your stack', d: 'Shopify, Shopify Plus, Magento, BigCommerce, WooCommerce, and the marketplaces and B2B portals you already sell on.' },
];
const COMPARE = [
  { cap: 'Storefront audit', me: true, manual: 'Days of manual review, if it happens at all', cf: 'Full audit in under 90 seconds' },
  { cap: 'Knowing what to fix first', me: false, manual: 'Guesswork across disconnected dashboards', cf: 'Issues ranked by revenue impact' },
  { cap: 'Making the fix', me: false, manual: 'Manual, one channel at a time', cf: 'One approval, applied across every channel' },
  { cap: 'Channel expertise', me: false, manual: 'A hire or agency per channel', cf: 'Eight specialist agents included' },
  { cap: 'Data sync', me: false, manual: 'Daily reconciliation, overselling risk', cf: 'Real-time, roughly two-second sync' },
  { cap: 'Ownership', me: false, manual: 'Locked into another monthly SaaS bill', cf: 'You own and run the system' },
];
const STEPS = [
  { n: '01', t: 'Connect every channel', d: 'We link your store, marketplaces, ERP, and POS into Commerceflo so everything reads one live source of truth.' },
  { n: '02', t: 'Run the 90-second audit', d: 'Commerceflo returns a ranked list of what is stalling growth, highest-revenue issues first.' },
  { n: '03', t: 'Approve, and it is done', d: 'You approve the fixes you want and Commerceflo applies them across every connected channel.' },
  { n: '04', t: 'Own and scale', d: 'You own and run the system. FactoryJet supports it and adds agents as you add channels.' },
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
                <p className="pp-eyebrow">Commerceflo · commerce AI operator</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '18ch' }}>
                  Your storefront&apos;s <span className="pp-grad">AI operator</span>.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  Commerceflo audits your storefront in under 90 seconds, ranks what is costing you conversions and
                  revenue, and fixes it across your store, marketplaces, and B2B the moment you approve. Eight specialist
                  agents in one command center, built and run with FactoryJet.
                </p>
                <HeroInlineForm source="us_commerceflo_hero" region="us" submitLabel="Get your free 90-second audit" />
              </div>
              {/* Hero visual: the operator core with channels feeding in */}
              <div className="pp-stage" role="img" aria-label="A commerce AI operator core, Commerceflo, auditing a storefront and fixing issues across store, Amazon, B2B, and TikTok Shop.">
                <div className="pp-glow" aria-hidden="true" />
                <div className="pp-core" aria-hidden="true">
                  <span className="ring" />
                  <span className="ember" />
                  <span className="tag">Commerce<br />AI Operator<br /><b>Commerceflo</b></span>
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
            <p className="pp-mlabel">// the operator</p>
            <h2 style={{ marginTop: '10px' }}>What is Commerceflo?</h2>
            <div style={{ marginTop: '18px', display: 'grid', gap: '16px' }} className="pp-lead">
              <p>
                Commerceflo is an AI-native commerce operator: software that watches your storefront the way a seasoned
                growth team would, finds what is holding back revenue, and carries out the fix once you approve it. It is
                FactoryJet&apos;s own commerce platform, built for DTC and B2B brands that sell across a store,
                marketplaces, and B2B.
              </p>
              <p>
                It starts with a 90-second audit of your catalog, pricing, inventory, content, and checkout, then hands
                you a ranked list of what is stalling growth. You approve the fixes you want and Commerceflo applies them
                across every connected channel. You own and run the system; FactoryJet sets it up and supports it.
              </p>
            </div>
          </div>
        </section>

        {/* What it does */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// what it does</p>
            <h2 style={{ marginTop: '10px' }}>Audit, prioritize, and fix, on your approval</h2>
            <div className="pp-bento" style={{ marginTop: '36px', gridTemplateColumns: 'repeat(3,1fr)' }}>
              {POWERS.map((p) => (
                <article className="pp-card" key={p.t}>
                  <span className="ic" aria-hidden="true" style={{ fontFamily: 'var(--pp-mono)', fontSize: '17px' }}>{p.i}</span>
                  <h3>{p.t}</h3><p>{p.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// with vs without</p>
            <h2 style={{ marginTop: '10px', maxWidth: '24ch' }}>Running a store by hand vs running it with an operator</h2>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead><tr><th>Capability</th><th>Disconnected apps and spreadsheets</th><th>Commerceflo</th></tr></thead>
                <tbody>{COMPARE.map((r) => (<tr key={r.cap} className={r.me ? 'me' : ''}><td className="name">{r.cap}</td><td>{r.manual}</td><td>{r.cf}</td></tr>))}</tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// how we work</p>
            <h2 style={{ marginTop: '10px' }}>From first audit to a system you own</h2>
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
          headline="Questions about the commerce AI operator."
          lead="If your question is not below, send a short brief and answers usually come back inside 24 hours."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        <section className="pp-sec">
          <div className="pp-wrap">
            <h2 style={{ maxWidth: '22ch' }}>See what is stalling your storefront.</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '60ch' }}>
              Tell us where you sell today. Commerceflo runs a free 90-second audit and shows you the ranked list of what
              is costing you conversions and revenue, before you commit to anything.
            </p>
            <div style={{ marginTop: '28px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <ModalCTAButton label="Get your free 90-second audit" region="us" btnVariant="primary-light" />
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '13px', border: '1px solid var(--pp-line)', padding: '14px 24px', fontSize: '15px', fontWeight: 600, color: 'var(--pp-ink)', textDecoration: 'none' }}>Talk to the Founder</a>
            </div>
            <p style={{ marginTop: '28px', fontSize: '14px', color: 'var(--pp-muted)' }}>
              Related:{' '}
              <Link href="/omnichannel-commerce" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>omnichannel commerce</Link>,{' '}
              <Link href="/b2b-ecommerce" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>B2B e-commerce</Link>, and{' '}
              <Link href="/services/ecommerce-development" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>e-commerce development</Link>.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
