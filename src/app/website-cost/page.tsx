import type { Metadata } from 'next';
import Link from 'next/link';
import { websiteCostAlternates } from '@/data/hreflangMap';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';

export const metadata: Metadata = {
  title: 'How Much Does an E-Commerce Website Cost in 2026? | FactoryJet',
  description:
    'What an ecommerce website actually costs and what drives the price: platform, catalog size, DTC vs B2B, integrations, migration, and AI agents. An honest guide to the cost of an ecommerce build, with no fixed price on the page.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'How Much Does an E-Commerce Website Cost in 2026? | FactoryJet',
    description:
      'What an ecommerce website costs and what drives the price: platform, catalog, DTC vs B2B, integrations, migration, and AI agents. An honest cost guide.',
    url: 'https://factoryjet.com/website-cost',
    images: [{ url: 'https://factoryjet.com/images/us/hero-us.webp', width: 1200, height: 630, alt: 'Cost of an e-commerce build, FactoryJet' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Much Does an E-Commerce Website Cost in 2026? | FactoryJet',
    description: 'What drives the cost of an ecommerce build: platform, catalog, DTC vs B2B, integrations, migration, and AI agents.',
    images: ['https://factoryjet.com/images/us/hero-us.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/website-cost', languages: websiteCostAlternates },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

// Freshness signal. Benchmark: 56% of AI-Overview-cited pages carry it.
// Keep honest: bump when the page's content actually changes.
const PAGE_MODIFIED = '2026-08-04';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/website-cost#webpage',
  url: 'https://factoryjet.com/website-cost',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does an ecommerce website cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'There is no single number. The cost of an ecommerce build depends on the platform, your catalog size, whether you sell DTC, B2B, or both, the integrations you need, and whether you are migrating an existing store. We scope yours on a call and quote a fixed proposal before any work starts.' },
    },
    {
      '@type': 'Question',
      name: 'What makes a B2B ecommerce build cost more than a simple store?',
      acceptedAnswer: { '@type': 'Answer', text: 'B2B adds tiered and contract pricing, account hierarchies, quote and approval workflows, net terms, gated catalogs, and ERP integration on top of the storefront, which is more to design, build, and integrate.' },
    },
    {
      '@type': 'Question',
      name: 'Should we build it ourselves on a DIY platform?',
      acceptedAnswer: { '@type': 'Answer', text: 'A DIY platform can launch a simple store quickly, but multichannel selling, B2B rules, and integrations are where most brands hit a wall and re-platform. Building it right once usually saves a rebuild later.' },
    },
  ],
};

const DRIVERS = [
  { k: 'Platform', d: 'Shopify, Shopify Plus, Adobe Commerce (Magento), BigCommerce, WooCommerce, headless, or Commerceflo. The platform shapes both the build effort and the ongoing license.' },
  { k: 'Catalog size', d: 'More products, variants, and channel-specific attributes mean more to set up and keep in sync.' },
  { k: 'DTC, B2B, or both', d: 'Trade pricing, net terms, account hierarchies, and reordering sit on top of the retail store and add real build work.' },
  { k: 'Integrations', d: 'ERP, POS, 3PL, and marketplace connections that put every system on one order and inventory layer.' },
  { k: 'Migration', d: 'Moving products, customers, orders, and B2B pricing off an existing platform, with redirects that protect your rankings.' },
  { k: 'AI agents', d: 'Agents we build and implement that list, reprice, sync stock, and reconcile feeds across channels.' },
];

const APPROACHES = [
  { t: 'DIY platform', b: 'Fast to launch a simple store, but multichannel, B2B rules, and integrations are where most brands stall and end up re-platforming.' },
  { t: 'Freelancer', b: 'Workable for a small storefront. Harder when the build needs unified inventory, B2B, ERP integration, and someone accountable through launch.' },
  { t: 'Commerce agency', b: 'A team that consults, designs, builds, and implements unified commerce end to end, and stays through launch and scale. The right fit when the build has to hold up.' },
];

export default function WebsiteCostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script id="cost-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <SiteHeader
        navLinks={[
          { label: 'E-Commerce', href: '/services/ecommerce-development' },
          { label: 'Shopify', href: '/services/shopify-development' },
          { label: 'Magento', href: '/services/magento-development' },
          { label: 'Services', href: '/services' },
          { label: 'Work', href: '/case-studies' },
          { label: 'FAQ', href: '/faq' },
        ]}
        cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
      />

      <main className="bg-white font-fj-body text-[#14110F]">
        <section className="mx-auto max-w-[1180px] px-5 py-16 md:py-24">
          <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#B23E13]">Cost guide</p>
          <h1 className="mt-3 max-w-[22ch] font-fj-display text-4xl font-extrabold leading-[1.07] tracking-tight md:text-5xl">
            What an e-commerce build costs, and what drives the price.
          </h1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-relaxed text-[#46403B]">
            There is no single price for an ecommerce website, and any page that gives you one is guessing. What it costs
            depends on your scope. Here is an honest look at what moves the number, and how we quote yours.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#B23E13] px-6 py-3.5 font-fj-body text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5">Talk to the Founder</a>
            <ModalCTAButton label="Get a commerce audit" region="us" btnVariant="secondary-light" />
          </div>
        </section>

        <section className="border-t border-[#E7DED6] bg-[#FFF8F5]">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">What drives the cost of an ecommerce build</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {DRIVERS.map((d) => (
                <article key={d.k} className="rounded-2xl border border-[#E7DED6] bg-white p-6">
                  <h3 className="font-fj-display text-lg font-bold">{d.k}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#46403B]">{d.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#E7DED6] bg-white">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">Build it yourself, hire a freelancer, or work with an agency</h2>
            <p className="mt-3 max-w-[62ch] text-[16px] leading-relaxed text-[#46403B]">Each fits a different stage. The honest trade-offs:</p>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {APPROACHES.map((a) => (
                <article key={a.t} className="rounded-2xl border border-[#E7DED6] p-6">
                  <h3 className="font-fj-display text-lg font-bold text-[#C94A1A]">{a.t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#46403B]">{a.b}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#E7DED6] bg-[#FFF8F5]">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="max-w-[22ch] font-fj-display text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
              The honest answer: tell us your scope, and we will quote it.
            </h2>
            <p className="mt-4 max-w-[60ch] text-[16px] leading-relaxed text-[#46403B]">
              We scope your build on a short call and send a fixed, written proposal before any work starts, so you know
              the investment up front with no surprise invoices.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#B23E13] px-6 py-3.5 font-fj-body text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5">Talk to the Founder</a>
              <ModalCTAButton label="Get a commerce audit" region="us" btnVariant="secondary-light" />
            </div>
            <p className="mt-8 text-[14px] text-[#6E635A]">
              More on{' '}
              <Link href="/pricing" className="font-semibold text-[#C94A1A] underline">how we scope and price commerce work</Link> and our{' '}
              <Link href="/services/ecommerce-development" className="font-semibold text-[#C94A1A] underline">e-commerce development services</Link>.
            </p>
          </div>
        </section>

        {/* Rendered from FAQ_SCHEMA.mainEntity so the visible FAQ and the
            FAQPage JSON-LD can never drift apart. Before 2026-08-04 these
            questions existed ONLY in schema and rendered nowhere, which is the
            cloaking-adjacent case Google's structured-data policy prohibits. */}
        <section id="faq-visible" className="border-t border-[#E7DED6] bg-[#FFF8F5]">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">Cost questions</h2>
            <dl className="mt-10 grid gap-6">
              {FAQ_SCHEMA.mainEntity.map((q) => (
                <div key={q.name} className="rounded-2xl border border-[#E7DED6] bg-white p-6">
                  <dt className="font-fj-display text-lg font-bold">{q.name}</dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-[#46403B]">{q.acceptedAnswer.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
