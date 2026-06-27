import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';

export const metadata: Metadata = {
  title: 'B2B E-Commerce Development Agency | B2B Ecommerce Platform Build | FactoryJet',
  description:
    'B2B ecommerce development agency for DTC and B2B brands. We build B2B ecommerce platforms with tiered pricing, net terms, account hierarchies, quote workflows, and ERP integration, on Shopify Plus, Adobe Commerce, BigCommerce, or Commerceflo. Compare platforms and scope your build.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'B2B E-Commerce Development Agency | B2B Ecommerce Platform Build | FactoryJet',
    description:
      'We build B2B ecommerce platforms with tiered pricing, net terms, account hierarchies, quote and approval workflows, and ERP integration. Self-service ordering your buyers actually use.',
    url: 'https://factoryjet.com/us/b2b-ecommerce',
    images: [{ url: 'https://factoryjet.com/logo.png', width: 1200, height: 630, alt: 'FactoryJet, B2B e-commerce development agency' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B2B E-Commerce Development Agency | FactoryJet',
    description:
      'B2B ecommerce platforms with tiered pricing, net terms, account hierarchies, and ERP integration, on Shopify Plus, Adobe Commerce, BigCommerce, or Commerceflo.',
    images: ['https://factoryjet.com/logo.png'],
  },
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
  { category: 'basics', question: 'What is the difference between a B2B and a DTC ecommerce site?', answer: 'A DTC site sells to consumers at one price. A B2B site adds logins for trade accounts, tiered or contract pricing, net terms, quotes and approvals, account hierarchies, and gated catalogs. We can run both on one unified system.' },
  { category: 'basics', question: 'What are some examples of B2B ecommerce?', answer: 'A manufacturer letting distributors place and reorder online; a wholesaler giving each trade account its own price list and net terms; a brand running a DTC store and a gated B2B portal on the same catalog; a distributor with quote-and-approve workflows for large orders. We build all of these.' },
  { category: 'basics', question: 'Can DTC and B2B run on one site with different pricing?', answer: 'Yes. We build one storefront that serves retail shoppers and gives trade buyers their own login with tiered or contract pricing, net terms, and reordering, on one catalog and one inventory.' },
  { category: 'platforms', question: 'What is the best B2B ecommerce platform?', answer: 'There is no single best one; it depends on your catalog size, B2B rules, and budget. Shopify Plus suits a clean DTC-plus-B2B model on one store, Adobe Commerce (Magento) suits deep native B2B and very large catalogs, BigCommerce offers strong mid-market B2B value, and Commerceflo fits when a unified engine is the goal. We compare them against your needs on a scoping call.' },
  { category: 'platforms', question: 'How do I choose a B2B ecommerce platform?', answer: 'Match the platform to five things: your catalog size and complexity, your pricing rules (tiers, contracts, customer-specific catalogs), the integrations you need (ERP, POS, 3PL, marketplaces), whether you also sell DTC, and your budget for build and ongoing license. We run that comparison with you and recommend the fit rather than the most expensive option.' },
  { category: 'platforms', question: 'Shopify Plus vs Adobe Commerce vs BigCommerce for B2B?', answer: 'Shopify Plus for speed, a clean admin, and DTC + B2B on one store. Adobe Commerce for deep native B2B (company accounts, shared catalogs, requisition lists) and very large or complex catalogs. BigCommerce for strong B2B features at mid-market value. We match it to your SKUs, pricing rules, and integrations.' },
  { category: 'features', question: 'What B2B ecommerce features can you build?', answer: 'Tiered and contract pricing, quote and approval workflows, account hierarchies, net terms, purchase-order checkout, gated catalogs, customer-specific catalogs, fast reordering, and ERP integration.' },
  { category: 'features', question: 'Can you integrate our ERP, POS, and marketplaces?', answer: 'Yes. We connect your ERP, POS, 3PL, and marketplaces into one order and inventory layer so pricing, stock, and orders stay in sync instead of living in separate systems.' },
  { category: 'features', question: 'Can you build a dealer or distributor portal?', answer: 'Yes. We build dealer, distributor, and wholesale portals with per-account pricing, order history, reordering, quote requests, and net terms, integrated with your ERP.' },
  { category: 'working', question: 'Can you migrate our existing B2B store without losing SEO?', answer: 'Yes. We handle replatforming and data migration, including products, customers, orders, and B2B pricing, with 301 redirects and a cutover plan that protects your rankings and uptime.' },
  { category: 'working', question: 'How long does a B2B ecommerce build take?', answer: 'Most B2B builds and migrations run from a few weeks to a few months, depending on catalog complexity, custom pricing rules, and ERP integration. You get a phased timeline with milestones after scoping.' },
  { category: 'working', question: 'How much does B2B ecommerce development cost?', answer: 'It depends on scope, platform, catalog size, pricing rules, and integrations, so we scope it on a short call and send a fixed proposal before any work starts.' },
  { category: 'working', question: 'Do you work with US B2B brands?', answer: 'Yes, most of the brands we work with are US-based, across DTC and B2B, and we bring a decade-plus of commerce builds to every engagement.' },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })),
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'B2B e-commerce development',
  name: 'B2B e-commerce development and implementation',
  description:
    'B2B ecommerce development agency. We build B2B ecommerce platforms with tiered and contract pricing, net terms, account hierarchies, quote and approval workflows, gated catalogs, reordering, and ERP integration, on Shopify Plus, Adobe Commerce (Magento), BigCommerce, WooCommerce, or Commerceflo.',
  provider: { '@type': 'Organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', name: 'B2B brands, wholesalers, and distributors' },
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/us' },
    { '@type': 'ListItem', position: 2, name: 'B2B E-Commerce', item: 'https://factoryjet.com/us/b2b-ecommerce' },
  ],
};

const PAINS = [
  { t: 'Orders by email and phone', b: 'Your team re-keys orders from inboxes and voicemails, and buyers wait on a quote instead of placing the order themselves.' },
  { t: 'Pricing lives in spreadsheets', b: 'Account-specific and tiered pricing sits in files, so every quote is manual and mistakes slip through.' },
  { t: 'No self-service for buyers', b: 'Trade buyers expect to log in, see their price, and reorder. Without it, they buy from whoever makes it easy.' },
];

const FEATURES = [
  { k: 'Tiered & contract pricing', d: 'Per-account, per-volume, and contract pricing that shows each buyer their price automatically.' },
  { k: 'Net terms & PO checkout', d: 'Net 30/60 terms, credit limits, and purchase-order checkout for approved accounts.' },
  { k: 'Quote & approval workflows', d: 'Request-for-quote, multi-step approvals, and order limits that match how your buyers actually purchase.' },
  { k: 'Account hierarchies', d: 'Parent and child accounts, buyer roles, and shared order history across a buying organization.' },
  { k: 'Gated & custom catalogs', d: 'Login-gated products and customer-specific catalogs so each account sees only what it should.' },
  { k: 'Fast reordering', d: 'One-click reordering, reorder pads, and saved lists built from a buyer’s order history.' },
  { k: 'ERP, POS & marketplace sync', d: 'One order and inventory layer connecting your ERP, POS, 3PL, and marketplaces to the storefront.' },
  { k: 'Sales-rep tools', d: 'Order-on-behalf, account dashboards, and quote tools so your reps sell through the same system.' },
];

const PLATFORMS_TABLE = [
  { name: 'Shopify Plus', best: 'DTC + B2B on one clean store', b2b: 'Native B2B: company accounts, price lists, net terms', catalog: 'Small to large', note: 'Fast to launch, lower maintenance' },
  { name: 'Adobe Commerce (Magento)', best: 'Deep, complex B2B', b2b: 'Requisition lists, shared catalogs, quotes, company accounts', catalog: 'Large to very large', note: 'Most flexible, more to maintain' },
  { name: 'BigCommerce', best: 'Mid-market B2B value', b2b: 'Price lists, customer groups, B2B Edition', catalog: 'Mid to large', note: 'Strong value, open APIs' },
  { name: 'WooCommerce', best: 'WordPress-first B2B', b2b: 'B2B via extensions and custom build', catalog: 'Small to mid', note: 'Full control, plugin-dependent' },
];

const USE_CASES = [
  { k: 'Manufacturers', d: 'Let distributors and dealers place, track, and reorder online with their own pricing and net terms, integrated with your ERP.' },
  { k: 'Wholesalers & distributors', d: 'Give every trade account a gated catalog, tiered pricing, and one-click reordering, replacing email-and-phone ordering.' },
  { k: 'Brands selling DTC + B2B', d: 'Run a retail storefront and a B2B portal on one catalog and inventory, with separate pricing and logins.' },
  { k: 'Replatforming brands', d: 'Move off an aging B2B store or a manual setup to a modern platform without losing SEO or order history.' },
];

const CHOOSE = [
  'Catalog size and complexity, including variants and channel-specific attributes',
  'Pricing rules: tiers, contracts, customer-specific catalogs, and minimums',
  'Integrations you need: ERP, POS, 3PL, and marketplaces',
  'Whether you also sell DTC on the same catalog and inventory',
  'Budget for the build and the ongoing platform license',
];

export default function B2BEcommercePage() {
  return (
    <>
      <Script id="b2b-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Script id="b2b-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <Script id="b2b-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader
        navLinks={[]}
        cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
      />

      <main className="bg-white font-fj-body text-[#14110F]">
        {/* Hero */}
        <section className="mx-auto max-w-[1180px] px-5 py-16 md:py-24">
          <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#F05A28]">B2B e-commerce development</p>
          <h1 className="mt-3 max-w-[20ch] font-fj-display text-4xl font-extrabold leading-[1.07] tracking-tight md:text-5xl">
            B2B e-commerce your buyers actually want to use.
          </h1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-relaxed text-[#46403B]">
            We build B2B ecommerce platforms with the rules trade buyers expect: account pricing, net terms, approvals,
            and one-click reordering, integrated with your ERP. Your buyers self-serve, your team stops re-keying orders.
          </p>
          <HeroInlineForm source="us_b2b_hero" region="us" submitLabel="Get a B2B commerce audit" />
        </section>

        {/* What is B2B ecommerce (answer-first) */}
        <section className="border-t border-[#E7DED6] bg-white">
          <div className="mx-auto max-w-[820px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">What is B2B e-commerce?</h2>
            <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-[#46403B]">
              <p>
                B2B e-commerce is selling to other businesses online, the way trade buyers actually purchase. Unlike a
                direct-to-consumer store with one price for everyone, a B2B e-commerce platform gives each trade account
                its own login, its own pricing, and the workflows a business buyer needs: net terms, purchase orders,
                quotes, approvals, and fast reordering.
              </p>
              <p>
                Done well, it replaces ordering by email and phone with self-service that your buyers prefer and your
                team does not have to babysit. We are the agency that designs, builds, and implements that system, then
                hands it over for you to own and run.
              </p>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="border-t border-[#E7DED6] bg-[#FFF8F5]">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">Why most B2B sites stall</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {PAINS.map((p) => (
                <article key={p.t} className="rounded-2xl border border-[#E7DED6] bg-white p-6">
                  <h3 className="font-fj-display text-lg font-bold">{p.t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#46403B]">{p.b}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-t border-[#E7DED6] bg-white">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">What we build into your B2B store</h2>
            <p className="mt-3 max-w-[60ch] text-[16px] leading-relaxed text-[#46403B]">The B2B ecommerce features that turn a catalog into a self-service ordering system.</p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map((f) => (
                <article key={f.k} className="rounded-2xl border border-[#E7DED6] p-6">
                  <h3 className="font-fj-display text-base font-bold text-[#C94A1A]">{f.k}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#46403B]">{f.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Platform comparison table */}
        <section className="border-t border-[#E7DED6] bg-[#FFF8F5]">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">B2B ecommerce platform comparison</h2>
            <p className="mt-3 max-w-[62ch] text-[16px] leading-relaxed text-[#46403B]">
              We are platform-agnostic. Here is how the leading B2B ecommerce platforms compare, so you can see where each fits.
            </p>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left text-[14px]">
                <thead>
                  <tr className="border-b border-[#E7DED6] font-fj-mono text-[11px] uppercase tracking-wide text-[#6E635A]">
                    <th className="py-3 pr-4">Platform</th>
                    <th className="py-3 pr-4">Best for</th>
                    <th className="py-3 pr-4">B2B features</th>
                    <th className="py-3 pr-4">Catalog size</th>
                    <th className="py-3">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {PLATFORMS_TABLE.map((r) => (
                    <tr key={r.name} className="border-b border-[#F0EAE4] align-top">
                      <td className="py-4 pr-4 font-fj-display font-bold text-[#14110F]">{r.name}</td>
                      <td className="py-4 pr-4 text-[#46403B]">{r.best}</td>
                      <td className="py-4 pr-4 text-[#46403B]">{r.b2b}</td>
                      <td className="py-4 pr-4 text-[#46403B]">{r.catalog}</td>
                      <td className="py-4 text-[#46403B]">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* How to choose */}
        <section className="border-t border-[#E7DED6] bg-white">
          <div className="mx-auto max-w-[820px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">How to choose a B2B ecommerce platform</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-[#46403B]">
              The right B2B ecommerce platform depends on your business, not a leaderboard. We weigh five things with you,
              then recommend the fit:
            </p>
            <ul className="mt-6 space-y-3">
              {CHOOSE.map((c) => (
                <li key={c} className="flex gap-3 text-[15px] leading-relaxed text-[#46403B]">
                  <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#F05A28]/10 text-[#C94A1A]">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true"><path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Use cases */}
        <section className="border-t border-[#E7DED6] bg-[#FFF8F5]">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">Who we build B2B commerce for</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {USE_CASES.map((u) => (
                <article key={u.k} className="rounded-2xl border border-[#E7DED6] bg-white p-6">
                  <h3 className="font-fj-display text-lg font-bold text-[#C94A1A]">{u.k}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#46403B]">{u.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Proof */}
        <section className="border-t border-[#E7DED6] bg-white">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#F05A28]">Select client work</p>
            <h2 className="mt-3 font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">Wholesale ordering, online</h2>
            <div className="mt-8 max-w-[760px] rounded-2xl border border-[#E7DED6] p-7">
              <div className="font-fj-mono text-xs font-bold uppercase tracking-wide text-[#C94A1A]">Bombay Petals · B2B</div>
              <p className="mt-3 text-[16px] leading-relaxed text-[#46403B]">
                A B2B commerce build for an artificial-plants and decor wholesaler, so trade buyers place and repeat
                orders online with tiered pricing, instead of over email and phone.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {['B2B / wholesale', 'Trade reordering', 'Tiered pricing', 'Artificial plants & decor'].map((t) => (
                  <span key={t} className="rounded-full bg-[#F4EEE9] px-3 py-1 font-fj-mono text-[11px] text-[#5C564F]">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ
          eyebrow="B2B E-COMMERCE FAQ"
          headline="Questions B2B brands ask before they build."
          lead="If your question is not below, send a short brief and answers usually come back inside 24 hours."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* Final CTA */}
        <section className="border-t border-[#E7DED6] bg-[#FFF8F5]">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="max-w-[22ch] font-fj-display text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
              Give your trade buyers a store worth logging into.
            </h2>
            <p className="mt-4 max-w-[60ch] text-[16px] leading-relaxed text-[#46403B]">
              Tell us how your buyers order today. We will map your pricing, accounts, and ERP into one B2B system and
              send a fixed proposal before any work starts.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#F05A28] px-6 py-3.5 font-fj-body text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5">Talk to the Founder</a>
              <ModalCTAButton label="Get a B2B commerce audit" region="us" btnVariant="secondary-light" />
            </div>
            <p className="mt-8 text-[14px] text-[#6E635A]">
              Related:{' '}
              <Link href="/us/services/ecommerce-development" className="font-semibold text-[#C94A1A] underline">e-commerce development</Link>,{' '}
              <Link href="/us/services/magento-development" className="font-semibold text-[#C94A1A] underline">Adobe Commerce / Magento</Link>,{' '}
              <Link href="/us/services/shopify-development" className="font-semibold text-[#C94A1A] underline">Shopify Plus</Link>, and{' '}
              <Link href="/us/omnichannel-commerce" className="font-semibold text-[#C94A1A] underline">omnichannel commerce</Link>.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
