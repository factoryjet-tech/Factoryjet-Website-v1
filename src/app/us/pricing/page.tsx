import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { pricingAlternates } from '@/data/hreflangMap';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';

export const metadata: Metadata = {
  title: 'E-Commerce Development Pricing | How We Scope & Quote | FactoryJet',
  description:
    'How ecommerce development pricing works at FactoryJet: every build is scoped on a call and quoted as a fixed proposal before any work starts. No hourly billing, no surprises. See what drives the cost of an ecommerce build.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'E-Commerce Development Pricing | How We Scope & Quote | FactoryJet',
    description:
      'How ecommerce development pricing works: scoped on a call, quoted as a fixed proposal before any work starts. See what drives the cost of a commerce build.',
    url: 'https://factoryjet.com/us/pricing',
    images: [{ url: 'https://factoryjet.com/logo.png', width: 1200, height: 630, alt: 'FactoryJet, e-commerce development pricing' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce Development Pricing | How We Scope & Quote | FactoryJet',
    description: 'Ecommerce development pricing, scoped on a call and quoted as a fixed proposal before any work starts.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/us/pricing', languages: pricingAlternates },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does it cost to build an ecommerce site?',
      acceptedAnswer: { '@type': 'Answer', text: 'It depends on scope, platform, catalog size, B2B rules, and integrations, so we scope it on a short call and send a fixed proposal before any work starts, rather than putting a number on a page.' },
    },
    {
      '@type': 'Question',
      name: 'Do you bill hourly?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. We quote a fixed proposal after scoping, paid against milestones. You know the investment before work begins, with no surprise invoices.' },
    },
    {
      '@type': 'Question',
      name: 'What drives the cost of an ecommerce build?',
      acceptedAnswer: { '@type': 'Answer', text: 'The platform, your catalog size, whether you run DTC, B2B, or both, the integrations you need (ERP, POS, 3PL, marketplaces), data migration from an existing store, and any AI agents we build and implement.' },
    },
  ],
};

const DRIVERS = [
  { k: 'Platform', d: 'Shopify and Shopify Plus, Adobe Commerce (Magento), BigCommerce, WooCommerce, headless, or Commerceflo. We recommend the fit, not the priciest option.' },
  { k: 'Catalog size', d: 'The number of products, variants, and attributes, and how often they change across channels.' },
  { k: 'DTC, B2B, or both', d: 'Trade buyers need tiered pricing, net terms, account hierarchies, and reordering on top of the retail store.' },
  { k: 'Integrations', d: 'ERP, POS, 3PL, and marketplace connections that put every system on one order and inventory layer.' },
  { k: 'Migration', d: 'Moving products, customers, orders, and B2B pricing off an existing platform, with redirects that protect your rankings.' },
  { k: 'AI agents', d: 'Agents we build and implement that list, reprice, sync stock, and reconcile feeds across your channels.' },
];

const STEPS = [
  { n: '01', t: 'Discovery & scope', d: 'We map your channels, catalog, and B2B rules and agree exactly what we are building.' },
  { n: '02', t: 'Fixed proposal', d: 'You get a written, fixed proposal with scope and milestones before any work begins.' },
  { n: '03', t: 'Milestone build', d: 'We design, build, and integrate against the agreed scope, paid per milestone.' },
  { n: '04', t: 'Launch & ownership', d: 'We launch, hand over the code and accounts, and stay on to support and scale.' },
];

export default function PricingPage() {
  return (
    <>
      <Script id="pricing-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <SiteHeader
        navLinks={[
          { label: 'E-Commerce', href: '/us/services/ecommerce-development' },
          { label: 'Shopify', href: '/us/services/shopify-development' },
          { label: 'Magento', href: '/us/services/magento-development' },
          { label: 'Services', href: '/us/services' },
          { label: 'Work', href: '/case-studies' },
          { label: 'FAQ', href: '/us/faq' },
        ]}
        cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
      />

      <main className="bg-white font-fj-body text-[#14110F]">
        <section className="mx-auto max-w-[1180px] px-5 py-16 md:py-24">
          <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#F05A28]">Pricing</p>
          <h1 className="mt-3 max-w-[20ch] font-fj-display text-4xl font-extrabold leading-[1.07] tracking-tight md:text-5xl">
            How we scope and price your commerce build.
          </h1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-relaxed text-[#46403B]">
            Every commerce build is different, so we do not put a price list on a page. We scope yours on a call and send
            a fixed, written proposal before any work starts. No hourly billing, no surprise invoices.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#F05A28] px-6 py-3.5 font-fj-body text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5">Talk to the Founder</a>
            <ModalCTAButton label="Get a commerce audit" region="us" btnVariant="secondary-light" />
          </div>
        </section>

        <section className="border-t border-[#E7DED6] bg-[#FFF8F5]">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">What drives the cost</h2>
            <p className="mt-3 max-w-[60ch] text-[16px] leading-relaxed text-[#46403B]">A few things move the number more than anything else.</p>
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
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">How we quote</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s) => (
                <article key={s.n} className="rounded-2xl border border-[#E7DED6] p-6">
                  <div className="font-fj-mono text-xs font-bold text-[#C94A1A]">{s.n}</div>
                  <h3 className="mt-2 font-fj-display text-lg font-bold">{s.t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#46403B]">{s.d}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 text-[14px] text-[#6E635A]">
              See our <Link href="/us/services/ecommerce-development" className="font-semibold text-[#C94A1A] underline">e-commerce development services</Link> or read how we think about{' '}
              <Link href="/us/website-cost" className="font-semibold text-[#C94A1A] underline">what an ecommerce build costs</Link>.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
