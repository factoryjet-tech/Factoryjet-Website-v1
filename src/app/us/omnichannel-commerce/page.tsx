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
  title: 'Omnichannel Commerce: What It Is & How to Build It | FactoryJet',
  description:
    'A clear guide to omnichannel commerce: what it is, how it differs from unified and multichannel commerce, the benefits, and how an agency builds one catalog, one inventory, and one order engine across your store, marketplaces, and B2B.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Omnichannel Commerce: What It Is & How to Build It | FactoryJet',
    description:
      'Omnichannel commerce explained and built: one catalog, one inventory, one order engine across your store, marketplaces, and B2B, with AI agents keeping it in sync.',
    url: 'https://factoryjet.com/us/omnichannel-commerce',
    images: [{ url: 'https://factoryjet.com/logo.png', width: 1200, height: 630, alt: 'Omnichannel commerce, explained and built by FactoryJet' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omnichannel Commerce: What It Is & How to Build It | FactoryJet',
    description: 'Omnichannel commerce explained: one catalog, one inventory, one order engine across store, marketplaces, and B2B.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/us/omnichannel-commerce' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'concepts', label: 'Concepts' },
  { key: 'benefits', label: 'Benefits' },
  { key: 'building', label: 'Building it' },
];

const FAQ_ITEMS = [
  { category: 'concepts', question: 'What is omnichannel commerce?', answer: 'Omnichannel commerce is selling across every channel your customers use, your store, marketplaces, social, retail, and B2B, as one connected experience. The products, prices, inventory, and orders stay consistent no matter where the customer buys.' },
  { category: 'concepts', question: 'What is the difference between omnichannel and unified commerce?', answer: 'Omnichannel describes the customer experience across channels. Unified commerce is the architecture underneath it that keeps products, inventory, orders, and customers in sync in real time, usually on one platform. Unified commerce is how you actually deliver omnichannel.' },
  { category: 'concepts', question: 'What is the difference between multichannel and omnichannel commerce?', answer: 'Multichannel means you sell on several channels, but each runs on its own data and they drift apart. Omnichannel connects them so a sale or stock change on one channel updates everywhere. Multichannel is what you are stuck with until you build the unified layer.' },
  { category: 'concepts', question: 'What is an omnichannel commerce platform?', answer: 'An omnichannel commerce platform is the system that runs your storefront and connects it to marketplaces, social, retail, and B2B on one catalog and one live inventory. We build that on Shopify, Adobe Commerce, BigCommerce, WooCommerce, headless, or Commerceflo, depending on your needs.' },
  { category: 'concepts', question: 'Is omnichannel commerce only for large retailers?', answer: 'No. Any DTC or B2B brand selling on more than one channel benefits from one catalog and one live inventory. The build scales to your size and catalog.' },
  { category: 'benefits', question: 'What are the benefits of omnichannel commerce?', answer: 'You stop overselling, you stop re-keying listings and prices channel by channel, your team gets hours back, and customers get a consistent experience that converts better. One source of truth removes the errors that fragmented selling creates.' },
  { category: 'benefits', question: 'How does omnichannel commerce stop overselling?', answer: 'Overselling happens when each channel keeps its own stock count. We put every channel on one live inventory, so when the last unit sells on one channel it goes unavailable on the rest within moments.' },
  { category: 'building', question: 'How do you build omnichannel commerce?', answer: 'We build one catalog, one live inventory, and one order engine under every channel you sell through, integrate your ERP, POS, and marketplaces, and deploy AI agents that list, reprice, and sync across channels.' },
  { category: 'building', question: 'Which platform do you build omnichannel commerce on?', answer: 'Shopify and Shopify Plus, Adobe Commerce (Magento), BigCommerce, WooCommerce, headless, or Commerceflo. We recommend the fit for your catalog, B2B rules, and integrations.' },
  { category: 'building', question: 'Can omnichannel commerce serve both DTC and B2B?', answer: 'Yes. We build retail and trade on one catalog and inventory, with separate logins, tiered or contract pricing, net terms, and reordering for your B2B buyers.' },
  { category: 'building', question: 'Do you work with US brands?', answer: 'Yes, most of the brands we work with are US-based, across DTC and B2B, and we bring a decade-plus of commerce builds to every engagement.' },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })),
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Omnichannel commerce development',
  name: 'Omnichannel and unified commerce development',
  description:
    'Omnichannel commerce development agency. We design, build, and implement unified commerce, one catalog, one inventory, and one order engine, across the store, marketplaces, social, retail, and B2B, on Shopify, Adobe Commerce (Magento), BigCommerce, WooCommerce, headless, or Commerceflo.',
  provider: { '@type': 'Organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', name: 'DTC and B2B brands' },
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/us' },
    { '@type': 'ListItem', position: 2, name: 'Omnichannel Commerce', item: 'https://factoryjet.com/us/omnichannel-commerce' },
  ],
};

const COMPARE = [
  { term: 'Multichannel commerce', what: 'You sell on several channels, each on its own data.', problem: 'Stock and pricing drift apart; you oversell and re-key everything.' },
  { term: 'Omnichannel commerce', what: 'Those channels are connected into one experience.', problem: 'A sale or stock change on one channel updates everywhere.' },
  { term: 'Unified commerce', what: 'The architecture that delivers omnichannel.', problem: 'One catalog, one live inventory, one order engine every channel reads in real time.' },
];

const BENEFITS = [
  { k: 'No more overselling', d: 'One live inventory every channel reads, so the last unit sold anywhere goes unavailable everywhere within moments.' },
  { k: 'Hours back for your team', d: 'No re-keying listings, prices, and stock channel by channel. Build once, publish everywhere.' },
  { k: 'A consistent buying experience', d: 'Customers see the same products, prices, and availability wherever they shop, which converts better.' },
  { k: 'One set of numbers', d: 'Orders, inventory, and reporting read from one record, not four exports your team reconciles by hand.' },
  { k: 'DTC and B2B together', d: 'Retail and trade on one system, with separate pricing and logins for your wholesale buyers.' },
  { k: 'Ready for AI agents', d: 'A unified data layer is what lets agents list, reprice, and sync reliably across channels.' },
];

const PIECES = [
  { k: 'B2B commerce', d: 'Trade portals with account pricing, net terms, and reordering on the same system as your DTC store.', href: '/us/b2b-ecommerce', cta: 'B2B e-commerce' },
  { k: 'E-commerce development', d: 'The storefront and the unified layer under it, built on the platform that fits.', href: '/us/services/ecommerce-development', cta: 'E-commerce development' },
  { k: 'Shopify development', d: 'Shopify and Shopify Plus builds for DTC and B2B on one store.', href: '/us/services/shopify-development', cta: 'Shopify development' },
  { k: 'Adobe Commerce / Magento', d: 'Deep native B2B and very large catalogs on Adobe Commerce.', href: '/us/services/magento-development', cta: 'Magento development' },
  { k: 'Commerce SEO & visibility', d: 'Get found and chosen in Google, AI answers, and on the marketplaces.', href: '/us/services/ecommerce-seo', cta: 'E-commerce SEO' },
  { k: 'E-commerce consulting', d: 'Platform selection, migration planning, and a scoped build plan.', href: '/us/ecommerce-consulting', cta: 'E-commerce consulting' },
];

export default function OmnichannelCommercePage() {
  return (
    <>
      <Script id="omni-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Script id="omni-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <Script id="omni-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader navLinks={[]} cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="bg-white font-fj-body text-[#14110F]">
        {/* Hero */}
        <section className="mx-auto max-w-[1180px] px-5 py-16 md:py-24">
          <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#F05A28]">Omnichannel commerce</p>
          <h1 className="mt-3 max-w-[20ch] font-fj-display text-4xl font-extrabold leading-[1.07] tracking-tight md:text-5xl">
            Omnichannel commerce, explained and built.
          </h1>
          <p className="mt-5 max-w-[680px] text-[17px] leading-relaxed text-[#46403B]">
            Omnichannel commerce means selling everywhere your customers are, your store, marketplaces, social, retail,
            and B2B, as one connected experience. Below is what it is, how it differs from unified and multichannel
            commerce, the benefits, and how we build it: one catalog, one inventory, one order engine.
          </p>
          <HeroInlineForm source="us_omnichannel_hero" region="us" submitLabel="Get a commerce audit" />
        </section>

        {/* Concept explainer (answer-first for AI citation) */}
        <section className="border-t border-[#E7DED6] bg-[#FFF8F5]">
          <div className="mx-auto max-w-[820px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">What is omnichannel commerce?</h2>
            <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-[#46403B]">
              <p>
                Omnichannel commerce is an approach to selling where every channel a customer can buy through, your
                online store, Amazon, Walmart, TikTok Shop, social shops, physical retail, and B2B portals, works as one
                connected experience. The same products, prices, inventory, and order history follow the customer across
                channels instead of living in separate, drifting systems.
              </p>
              <p>
                The goal is simple to state and hard to fake: a customer (or a buyer) should see the same brand, the same
                availability, and the same prices wherever they shop, and your team should manage it all from one place.
                That only works when there is a single source of truth underneath, which is where unified commerce comes in.
              </p>
            </div>
          </div>
        </section>

        {/* Omni vs unified vs multichannel, table */}
        <section className="border-t border-[#E7DED6] bg-white">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">Omnichannel vs unified vs multichannel commerce</h2>
            <p className="mt-3 max-w-[62ch] text-[16px] leading-relaxed text-[#46403B]">
              These terms get used interchangeably, but they describe different things. Here is the plain version.
            </p>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse text-left text-[14.5px]">
                <thead>
                  <tr className="border-b border-[#E7DED6] font-fj-mono text-[11px] uppercase tracking-wide text-[#6E635A]">
                    <th className="py-3 pr-4">Term</th>
                    <th className="py-3 pr-4">What it means</th>
                    <th className="py-3">What it gives you</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((r) => (
                    <tr key={r.term} className="border-b border-[#F0EAE4] align-top">
                      <td className="py-4 pr-4 font-fj-display font-bold text-[#14110F]">{r.term}</td>
                      <td className="py-4 pr-4 text-[#46403B]">{r.what}</td>
                      <td className="py-4 text-[#46403B]">{r.problem}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 max-w-[62ch] text-[15px] leading-relaxed text-[#46403B]">
              In short: omnichannel is the goal, unified commerce is how you build it, and multichannel is what you are
              stuck with until you do.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-t border-[#E7DED6] bg-[#FFF8F5]">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">The benefits of omnichannel commerce</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {BENEFITS.map((b) => (
                <article key={b.k} className="rounded-2xl border border-[#E7DED6] bg-white p-6">
                  <h3 className="font-fj-display text-lg font-bold">{b.k}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#46403B]">{b.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* The pieces (links down to lead pages) */}
        <section className="border-t border-[#E7DED6] bg-white">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">How we build omnichannel commerce</h2>
            <p className="mt-3 max-w-[62ch] text-[16px] leading-relaxed text-[#46403B]">
              Omnichannel commerce is several pieces working as one system. Here is how each fits, and where to go deeper.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PIECES.map((p) => (
                <article key={p.k} className="flex flex-col rounded-2xl border border-[#E7DED6] p-6">
                  <h3 className="font-fj-display text-lg font-bold">{p.k}</h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-[#46403B]">{p.d}</p>
                  <Link href={p.href} className="mt-4 font-fj-body text-[14px] font-semibold text-[#C94A1A] underline">{p.cta} →</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FAQ
          eyebrow="OMNICHANNEL COMMERCE FAQ"
          headline="The questions people ask about omnichannel commerce."
          lead="If your question is not below, send a short brief and answers usually come back inside 24 hours."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        <section className="border-t border-[#E7DED6] bg-[#FFF8F5]">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="max-w-[22ch] font-fj-display text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
              Sell everywhere, from one system.
            </h2>
            <p className="mt-4 max-w-[60ch] text-[16px] leading-relaxed text-[#46403B]">
              Tell us where you sell today. We will map your channels, catalog, and B2B into one unified system and send
              a fixed proposal before any work starts.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#F05A28] px-6 py-3.5 font-fj-body text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5">Talk to the Founder</a>
              <ModalCTAButton label="Get a commerce audit" region="us" btnVariant="secondary-light" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
