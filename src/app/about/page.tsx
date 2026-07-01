import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { aboutAlternates } from '@/data/hreflangMap';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';

export const metadata: Metadata = {
  title: 'About FactoryJet | E-Commerce Development Agency for DTC & B2B',
  description:
    'FactoryJet is an e-commerce development agency for DTC and B2B brands. We consult, design, build, and implement omnichannel commerce on Shopify, Magento, WooCommerce, and Commerceflo. A decade-plus building commerce, most clients US-based.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'About FactoryJet | E-Commerce Development Agency for DTC & B2B',
    description:
      'An e-commerce development agency that consults, designs, builds, and implements omnichannel commerce for DTC and B2B brands. Platform-agnostic. A decade-plus building commerce.',
    url: 'https://factoryjet.com/about',
    images: [{ url: 'https://factoryjet.com/og/about.png', width: 1200, height: 630, alt: 'FactoryJet, e-commerce development agency for DTC and B2B brands' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About FactoryJet | E-Commerce Development Agency for DTC & B2B',
    description:
      'An e-commerce development agency for DTC and B2B brands. We build omnichannel commerce on Shopify, Magento, WooCommerce, or Commerceflo.',
    images: ['https://factoryjet.com/og/about.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/about', languages: aboutAlternates },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://factoryjet.com/#organization',
      name: 'FactoryJet',
      url: 'https://factoryjet.com',
      logo: { '@type': 'ImageObject', url: 'https://factoryjet.com/logo.png', width: 400, height: 120 },
      description:
        'FactoryJet is an e-commerce development agency for DTC and B2B brands. We consult, design, develop, and implement omnichannel commerce across the store, marketplaces, and B2B portals on Shopify, Shopify Plus, Adobe Commerce (Magento), BigCommerce, WooCommerce, headless, and Commerceflo. Clients own and operate what we build.',
      foundingDate: '2014',
      areaServed: { '@type': 'Country', name: 'United States' },
      knowsAbout: [
        'E-commerce development',
        'Omnichannel commerce',
        'Unified commerce',
        'B2B e-commerce',
        'Shopify development',
        'Adobe Commerce (Magento) development',
        'WooCommerce development',
        'Marketplace integration',
        'Commerce AI agents',
      ],
      contactPoint: { '@type': 'ContactPoint', contactType: 'customer service', email: 'connect@factoryjet.com', availableLanguage: 'English', areaServed: 'US' },
      sameAs: ['https://www.linkedin.com/company/factoryjet'],
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '150', reviewCount: '150', bestRating: '5', worstRating: '1' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
        { '@type': 'ListItem', position: 2, name: 'About', item: 'https://factoryjet.com/about' },
      ],
    },
  ],
};

const WHAT_WE_DO = [
  { k: 'Consult', d: 'We map your channels, catalog, and B2B rules, then recommend the platform and architecture that fit, not the one we happen to prefer.' },
  { k: 'Design & build', d: 'We design and develop the storefront, the B2B portal, and the unified layer underneath, so every channel reads the same products, inventory, and orders.' },
  { k: 'Implement', d: 'We integrate your ERP, POS, 3PL, and marketplaces, migrate your data, and ship the agents that list, price, and sync across channels.' },
  { k: 'Scale', d: 'We stay through launch and beyond, tuning performance, adding channels, and handing your team a system they own and run.' },
];

const PLATFORMS = ['Shopify', 'Shopify Plus', 'Adobe Commerce (Magento)', 'BigCommerce', 'WooCommerce', 'Headless', 'Commerceflo'];

const DIFFERENT = [
  { t: 'A services partner, not a tool', b: 'You hire us to build and implement commerce, then you own and operate it. There is no FactoryJet subscription and no lock-in.' },
  { t: 'Platform-agnostic by design', b: 'We build on Shopify, Magento, WooCommerce, headless, or Commerceflo, and recommend the fit for your catalog, B2B rules, and budget.' },
  { t: 'DTC and B2B on one system', b: 'We build retail and trade on one catalog and inventory, with tiered pricing, net terms, and reordering for your wholesale buyers.' },
  { t: 'Agents we build and implement', b: 'We build and deploy commerce agents into your stack that list, reprice, sync stock, and reconcile feeds, working on your live data.' },
];

export default function AboutPage() {
  return (
    <>
      <Script id="about-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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
        {/* Hero */}
        <section className="mx-auto max-w-[1180px] px-5 py-16 md:py-24">
          <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#F05A28]">About FactoryJet</p>
          <h1 className="mt-3 max-w-[22ch] font-fj-display text-4xl font-extrabold leading-[1.07] tracking-tight md:text-5xl">
            An e-commerce development agency for DTC and B2B brands.
          </h1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-relaxed text-[#46403B]">
            FactoryJet consults, designs, develops, and implements omnichannel commerce. We build the storefront, the
            B2B portal, and the unified layer underneath, so products, inventory, and orders stay in sync across every
            channel you sell through. You own and operate what we build.
          </p>
          <p className="mt-4 max-w-[640px] text-[17px] leading-relaxed text-[#46403B]">
            A decade-plus building commerce. Most of the brands we work with are US-based, across DTC and B2B.
          </p>
        </section>

        {/* What we do */}
        <section className="border-t border-[#E7DED6] bg-white">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">What we do</h2>
            <p className="mt-3 max-w-[60ch] text-[16px] leading-relaxed text-[#46403B]">
              We are the team you hire to build unified commerce, end to end.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {WHAT_WE_DO.map((s) => (
                <article key={s.k} className="rounded-2xl border border-[#E7DED6] p-6">
                  <h3 className="font-fj-display text-xl font-bold">{s.k}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#46403B]">{s.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="border-t border-[#E7DED6] bg-[#FFF8F5]">
          <div className="mx-auto max-w-[1180px] px-5 py-14 md:py-16">
            <h2 className="font-fj-display text-2xl font-extrabold tracking-tight md:text-3xl">Platform-agnostic by design</h2>
            <p className="mt-3 max-w-[62ch] text-[16px] leading-relaxed text-[#46403B]">
              We build on the platform that fits your catalog, your B2B rules, and your budget, and we recommend the fit
              rather than pushing one.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {PLATFORMS.map((p) => (
                <span key={p} className="rounded-full border border-[#E7DED6] bg-white px-4 py-2 font-fj-mono text-[12.5px] text-[#4A443F]">{p}</span>
              ))}
            </div>
          </div>
        </section>

        {/* How we're different */}
        <section className="border-t border-[#E7DED6] bg-white">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">How we work</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {DIFFERENT.map((d) => (
                <article key={d.t} className="rounded-2xl border border-[#E7DED6] p-6">
                  <h3 className="font-fj-display text-lg font-bold text-[#C94A1A]">{d.t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#46403B]">{d.b}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Founder + CTA */}
        <section className="border-t border-[#E7DED6] bg-[#FFF8F5]">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="max-w-[20ch] font-fj-display text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
              Founder-led, from the first call.
            </h2>
            <p className="mt-4 max-w-[60ch] text-[16px] leading-relaxed text-[#46403B]">
              Bhavesh Barot leads FactoryJet and takes the discovery call himself. Tell us what you sell and where, and
              we will map your channels, catalog, and B2B into one system you own.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#F05A28] px-6 py-3.5 font-fj-body text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Talk to the Founder
              </a>
              <ModalCTAButton label="Get a commerce audit" region="us" btnVariant="secondary-light" />
            </div>
            <p className="mt-8 text-[14px] text-[#6E635A]">
              Explore our{' '}
              <Link href="/services/ecommerce-development" className="font-semibold text-[#C94A1A] underline">e-commerce development services</Link>,{' '}
              <Link href="/services/shopify-development" className="font-semibold text-[#C94A1A] underline">Shopify development</Link>, or{' '}
              <Link href="/case-studies" className="font-semibold text-[#C94A1A] underline">client work</Link>.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
