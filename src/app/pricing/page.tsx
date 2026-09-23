import type { Metadata } from 'next';
import Link from 'next/link';
import { pricingAlternates } from '@/data/hreflangMap';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';

export const metadata: Metadata = {
  title: 'SEO & Ecommerce Pricing: Scope and Quotes | FactoryJet',
  description:
    'Understand FactoryJet SEO and ecommerce pricing: scope, deliverables, ongoing fees, and project proposals. Discuss your goals and get a written quote.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO & Ecommerce Pricing: Scope and Quotes | FactoryJet',
    description:
      'How FactoryJet scopes SEO engagements and ecommerce builds, with deliverables, fees, and terms agreed before work starts.',
    url: 'https://factoryjet.com/pricing',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet SEO and ecommerce pricing' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO & Ecommerce Pricing: Scope and Quotes | FactoryJet',
    description: 'SEO and ecommerce pricing, with scope, deliverables, fees, and terms agreed before work starts.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/pricing', languages: pricingAlternates },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

// Freshness signal. Benchmark: 56% of AI-Overview-cited pages carry it.
// Keep honest: bump when the page's content actually changes.
const PAGE_MODIFIED = '2026-09-14';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/pricing#webpage',
  url: 'https://factoryjet.com/pricing',
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
      name: 'How much does it cost to build an ecommerce site?',
      acceptedAnswer: { '@type': 'Answer', text: 'It depends on scope, platform, catalog size, B2B rules, and integrations, so we scope it on a short call and send a fixed proposal before any work starts, rather than putting a number on a page.' },
    },
    {
      '@type': 'Question',
      name: 'Do you bill hourly for ecommerce builds?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. We quote a fixed proposal after scoping, paid against milestones. You know the investment before work begins, with no surprise invoices.' },
    },
    {
      '@type': 'Question',
      name: 'What drives the cost of an ecommerce build?',
      acceptedAnswer: { '@type': 'Answer', text: 'The platform, your catalog size, whether you run DTC, B2B, or both, the integrations you need (ERP, POS, 3PL, marketplaces), data migration from an existing store, and any AI agents we build and implement.' },
    },
    {
      '@type': 'Question',
      name: 'How much do SEO services cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'SEO scope depends on your website, locations, services, competition, and implementation needs. We review your starting point and propose the work to prioritize. The written proposal separates initial setup, ongoing deliverables, and any third-party costs so you can assess the commitment before work starts.' },
    },
    {
      '@type': 'Question',
      name: 'What should I check in a no-contract SEO proposal?',
      acceptedAnswer: { '@type': 'Answer', text: 'Check the minimum term, cancellation notice, setup work, monthly deliverables, and ownership of accounts and content. No-contract should not mean unclear obligations. Our written proposal sets out the engagement terms so you can compare scope and commitment, rather than relying on a headline promise.' },
    },
    {
      '@type': 'Question',
      name: 'Are tools, advertising, and third-party subscriptions included?',
      acceptedAnswer: { '@type': 'Answer', text: 'The proposal identifies included work and any separate costs. Depending on the project, these may include hosting, platform subscriptions, apps, reporting tools, or paid media. Ask for recurring costs and one-time costs separately. Additional work and costs are agreed before that work begins.' },
    },
    {
      '@type': 'Question',
      name: 'Do you guarantee rankings or revenue?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. We agree the implementation scope and reporting, but search rankings and customer revenue depend on factors outside any agency’s control. We track visibility and inquiries against a baseline, and work with your team to distinguish useful leads from sales outcomes.' },
    },
  ],
};

const DRIVERS = [
  { k: 'Platform', d: 'Shopify and Shopify Plus, Adobe Commerce (Magento), BigCommerce, WooCommerce, headless, or Commerceflo by FactoryJet. We recommend the fit, not the priciest option.' },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script id="pricing-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

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
          <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#B23E13]">Pricing</p>
          <h1 className="mt-3 max-w-[20ch] font-fj-display text-4xl font-extrabold leading-[1.07] tracking-tight md:text-5xl">
            Know the scope before you commit.
          </h1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-relaxed text-[#46403B]">
            Whether you need more search inquiries or a new commerce system, start with the work your business needs.
            We document deliverables, fees, and engagement terms before work starts. Choose your service below to see what shapes the proposal.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#B23E13] px-6 py-3.5 font-fj-body text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5">Talk to the Founder</a>
            <ModalCTAButton label="Discuss my project" region="us" btnVariant="secondary-light" />
          </div>
          <nav aria-label="Pricing by service" className="mt-8 flex flex-wrap gap-5 font-semibold text-[#C94A1A]">
            <a href="#seo" className="underline">SEO and AI search ↓</a>
            <a href="#commerce" className="underline">Ecommerce development ↓</a>
          </nav>
        </section>

        <section id="seo" className="scroll-mt-24 border-t border-[#E7DED6] bg-white">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <p className="font-fj-mono text-xs font-semibold uppercase text-[#C94A1A]">SEO and AI search</p>
            <h2 className="mt-3 font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">Scope the search work your business needs.</h2>
            <p className="mt-4 max-w-[68ch] text-[17px] leading-relaxed text-[#46403B]">A local service business and a large ecommerce catalog need different work. We start with your website, the customers you want, and how inquiries reach your team. Your proposal turns those findings into specific deliverables.</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <article className="rounded-2xl border border-[#E7DED6] bg-[#FFF8F5] p-6">
                <h3 className="font-fj-display text-xl font-bold">What changes the scope</h3>
                <ul className="mt-4 list-disc space-y-3 pl-5 text-[#46403B]">
                  <li>Locations, service areas, and the services or products you want found.</li>
                  <li>Technical fixes, content gaps, and access to your website and listings.</li>
                  <li>Whether our team implements changes or works with your developer.</li>
                  <li>Tracking for calls, forms, booked meetings, and lead qualification.</li>
                </ul>
              </article>
              <article className="rounded-2xl border border-[#E7DED6] p-6">
                <h3 className="font-fj-display text-xl font-bold">What the proposal should make clear</h3>
                <ul className="mt-4 list-disc space-y-3 pl-5 text-[#46403B]">
                  <li>Initial work and the ongoing monthly deliverables.</li>
                  <li>Fees, third-party costs, and how additional work is approved.</li>
                  <li>Review cadence, account ownership, minimum term, and cancellation notice.</li>
                  <li>What we measure, the starting baseline, and who reviews lead quality.</li>
                </ul>
              </article>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <ModalCTAButton label="Request my SEO audit" region="us" btnVariant="primary-dark" modalVariant="seo" />
              <Link href="/services/ai-seo" className="font-semibold text-[#C94A1A] underline">Explore SEO and AI search services →</Link>
            </div>
          </div>
        </section>

        <section id="commerce" className="scroll-mt-24 border-t border-[#E7DED6] bg-[#FFF8F5]">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">What drives an ecommerce project quote</h2>
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
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">How we quote a commerce build</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s) => (
                <article key={s.n} className="rounded-2xl border border-[#E7DED6] p-6">
                  <div className="font-fj-mono text-xs font-bold text-[#B23E13]">{s.n}</div>
                  <h3 className="mt-2 font-fj-display text-lg font-bold">{s.t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#46403B]">{s.d}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 text-[14px] text-[#6E635A]">
              See our <Link href="/services/ecommerce-development" className="font-semibold text-[#B23E13] underline">e-commerce development services</Link> or read how we think about{' '}
              <Link href="/website-cost" className="font-semibold text-[#B23E13] underline">what an ecommerce build costs</Link>.
            </p>
          </div>
        </section>

        {/* Rendered from FAQ_SCHEMA.mainEntity so the visible FAQ and the
            FAQPage JSON-LD can never drift apart. Before 2026-08-04 these
            questions existed ONLY in schema and rendered nowhere, which is the
            cloaking-adjacent case Google's structured-data policy prohibits. */}
        <section id="faq-visible" className="border-t border-[#E7DED6] bg-[#FFF8F5]">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">Pricing questions</h2>
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
