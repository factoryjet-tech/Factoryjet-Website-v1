import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';

export const metadata: Metadata = {
  title: 'Omnichannel Commerce: What It Is and How to Build It | FactoryJet',
  description:
    'A plain guide to omnichannel commerce: what it is, how it differs from unified and multichannel commerce, and how an agency builds one catalog, one inventory, and one order engine across your store, marketplaces, and B2B.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Omnichannel Commerce: What It Is and How to Build It | FactoryJet',
    description:
      'Omnichannel commerce explained and built: one catalog, one inventory, one order engine across your store, marketplaces, and B2B, with AI agents keeping it in sync.',
    url: 'https://factoryjet.com/us/omnichannel-commerce',
    images: [{ url: 'https://factoryjet.com/logo.png', width: 1200, height: 630, alt: 'Omnichannel commerce, explained and built by FactoryJet' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omnichannel Commerce: What It Is and How to Build It | FactoryJet',
    description: 'Omnichannel commerce explained: one catalog, one inventory, one order engine across store, marketplaces, and B2B.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/us/omnichannel-commerce' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'concepts', label: 'Concepts' },
  { key: 'building', label: 'Building it' },
];

const FAQ_ITEMS = [
  { category: 'concepts', question: 'What is omnichannel commerce?', answer: 'Omnichannel commerce is selling across every channel your customers use, your store, marketplaces, social, retail, and B2B, as one connected experience. The products, prices, inventory, and orders stay consistent no matter where the customer buys.' },
  { category: 'concepts', question: 'What is the difference between omnichannel and unified commerce?', answer: 'Omnichannel describes the customer experience across channels. Unified commerce is the architecture underneath it that keeps products, inventory, orders, and customers in sync in real time, usually on one platform. Unified commerce is how you actually deliver omnichannel.' },
  { category: 'concepts', question: 'What is the difference between multichannel and omnichannel commerce?', answer: 'Multichannel means you sell on several channels, but each runs on its own data and they drift apart. Omnichannel connects them so a sale or stock change on one channel updates everywhere.' },
  { category: 'concepts', question: 'Is omnichannel commerce only for large retailers?', answer: 'No. Any DTC or B2B brand selling on more than one channel benefits from one catalog and one live inventory. The build scales to your size and catalog.' },
  { category: 'building', question: 'How do you build omnichannel commerce?', answer: 'We build one catalog, one live inventory, and one order engine under every channel you sell through, integrate your ERP, POS, and marketplaces, and deploy AI agents that list, reprice, and sync across channels.' },
  { category: 'building', question: 'Which platform do you build omnichannel commerce on?', answer: 'Shopify and Shopify Plus, Adobe Commerce (Magento), BigCommerce, WooCommerce, headless, or Commerceflo. We recommend the fit for your catalog, B2B rules, and integrations.' },
  { category: 'building', question: 'Do you work with US brands?', answer: 'Yes, most of the brands we work with are US-based, across DTC and B2B, and we bring a decade-plus of commerce builds to every engagement.' },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })),
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/us' },
    { '@type': 'ListItem', position: 2, name: 'Omnichannel Commerce', item: 'https://factoryjet.com/us/omnichannel-commerce' },
  ],
};

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
      <Script id="omni-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
          <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#F05A28]">Omnichannel commerce</p>
          <h1 className="mt-3 max-w-[20ch] font-fj-display text-4xl font-extrabold leading-[1.07] tracking-tight md:text-5xl">
            Omnichannel commerce, explained and built.
          </h1>
          <p className="mt-5 max-w-[680px] text-[17px] leading-relaxed text-[#46403B]">
            Omnichannel commerce means selling everywhere your customers are, your store, marketplaces, social, retail,
            and B2B, as one connected experience. Below is what it is, how it differs from unified and multichannel
            commerce, and how we build it: one catalog, one inventory, one order engine.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#F05A28] px-6 py-3.5 font-fj-body text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5">Talk to the Founder</a>
            <ModalCTAButton label="Get a commerce audit" region="us" btnVariant="secondary-light" />
          </div>
        </section>

        {/* Concept explainer (answer-first for AI citation) */}
        <section className="border-t border-[#E7DED6] bg-[#FFF8F5]">
          <div className="mx-auto max-w-[820px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">Omnichannel vs unified vs multichannel</h2>
            <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-[#46403B]">
              <p><strong className="text-[#14110F]">Multichannel</strong> means you sell on several channels, but each one runs on its own data, so stock and pricing drift apart and you oversell.</p>
              <p><strong className="text-[#14110F]">Omnichannel</strong> connects those channels into one experience, so a sale or a stock change on one updates everywhere and the customer sees the same brand wherever they buy.</p>
              <p><strong className="text-[#14110F]">Unified commerce</strong> is the architecture that delivers omnichannel: one catalog, one live inventory, and one order engine, usually on a single platform, that every channel reads from in real time.</p>
              <p>In short: omnichannel is the goal, unified commerce is how you build it, and multichannel is what you are stuck with until you do.</p>
            </div>
          </div>
        </section>

        {/* The pieces (links down to lead pages) */}
        <section className="border-t border-[#E7DED6] bg-white">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">How we build it</h2>
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
