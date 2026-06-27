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
  title: 'E-Commerce Consulting Services for DTC & B2B | FactoryJet',
  description:
    'E-commerce consulting that ends in a build, not a slide deck. We help DTC and B2B brands with platform selection, migration planning, conversion and operations audits, and a scoped build plan, then we build it. Ecommerce consulting firm with a decade-plus of commerce experience.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'E-Commerce Consulting Services for DTC & B2B | FactoryJet',
    description:
      'E-commerce consulting for DTC and B2B brands: platform selection, migration planning, conversion and operations, and a scoped build plan you can act on.',
    url: 'https://factoryjet.com/us/ecommerce-consulting',
    images: [{ url: 'https://factoryjet.com/logo.png', width: 1200, height: 630, alt: 'FactoryJet, e-commerce consulting services' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce Consulting Services for DTC & B2B | FactoryJet',
    description: 'E-commerce consulting for DTC and B2B: platform selection, migration, conversion, operations, and a scoped build plan.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/us/ecommerce-consulting' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'what', label: 'What we consult on' },
  { key: 'how', label: 'How it works' },
  { key: 'fit', label: 'Is it for us' },
];

const FAQ_ITEMS = [
  { category: 'what', question: 'What does an ecommerce consultant do?', answer: 'An ecommerce consultant helps you decide what to build and how: the right platform, a migration plan, the B2B and DTC model, integrations, and the fixes that move conversion and operations. We do that, and then we can build it.' },
  { category: 'what', question: 'What is the difference between an ecommerce consulting firm and an agency?', answer: 'A consulting firm advises; an agency builds. FactoryJet does both. We give you a clear, scoped plan, and you can have us implement it or hand the plan to your own team. You are not paying for advice you then have to find someone else to act on.' },
  { category: 'what', question: 'Can you help us choose between Shopify, Magento, and BigCommerce?', answer: 'Yes. We match the platform to your catalog size, B2B rules, integrations, and budget on a scoping call, and recommend the fit rather than pushing one platform.' },
  { category: 'what', question: 'Can you audit our existing store?', answer: 'Yes. We review your platform, conversion, operations, integrations, and channel setup, then give you a prioritized list of what to fix and what to build next.' },
  { category: 'what', question: 'Do you offer ecommerce strategy consulting?', answer: 'Yes. Beyond the build, we help with the channel and platform strategy: where to sell, how to run DTC and B2B together, how to connect marketplaces, and what to sequence first for the best return.' },
  { category: 'how', question: 'How does an ecommerce consulting engagement work?', answer: 'We start with a discovery call, review what you run today, and deliver a scoped plan with priorities and a timeline. From there you can engage us to build, or take the plan in-house.' },
  { category: 'how', question: 'What do we get at the end of a consulting engagement?', answer: 'A clear, written plan: the recommended platform, a migration or build approach, the integrations and B2B model, a prioritized list of fixes, and a fixed proposal if you want us to build it.' },
  { category: 'how', question: 'How much does ecommerce consulting cost?', answer: 'It depends on scope, so we scope it on a short call and send a fixed proposal before any work starts, rather than putting a number on a page.' },
  { category: 'fit', question: 'Do you do B2B ecommerce consulting?', answer: 'Yes. B2B is a core focus: account pricing, net terms, quote and approval workflows, dealer and distributor portals, and ERP integration. We advise on the model and build it.' },
  { category: 'fit', question: 'Is consulting worth it if we already know we need to rebuild?', answer: 'Often yes, because the scoping is where rebuilds go wrong. A short consulting pass locks the platform, the data migration, the B2B rules, and the integrations before code starts, which saves cost and rework later.' },
  { category: 'fit', question: 'Do you work with US brands?', answer: 'Yes, most of the brands we work with are US-based, across DTC and B2B, and we bring a decade-plus of commerce builds to every engagement.' },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })),
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'E-commerce consulting',
  name: 'E-commerce consulting services',
  description:
    'E-commerce consulting for DTC and B2B brands: platform selection, migration and replatforming planning, conversion and operations audits, B2B and DTC modeling, integrations, ecommerce strategy, and a scoped build plan.',
  provider: { '@type': 'Organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', name: 'DTC and B2B brands' },
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/us' },
    { '@type': 'ListItem', position: 2, name: 'E-Commerce Consulting', item: 'https://factoryjet.com/us/ecommerce-consulting' },
  ],
};

const TOPICS = [
  { k: 'Platform selection', d: 'Shopify Plus, Adobe Commerce (Magento), BigCommerce, WooCommerce, headless, or Commerceflo, matched to your catalog and B2B rules.' },
  { k: 'Migration & replatforming', d: 'A cutover plan that moves products, customers, orders, and B2B pricing without losing SEO or uptime.' },
  { k: 'DTC + B2B model', d: 'How to run retail and trade on one system with account pricing, net terms, and reordering.' },
  { k: 'Conversion & operations', d: 'Where buyers drop off and where your team loses hours, with a prioritized list of fixes.' },
  { k: 'Channels & marketplaces', d: 'How to sell on Amazon, Walmart, and your store from one catalog and one live inventory.' },
  { k: 'Integrations & data', d: 'Connecting ERP, POS, 3PL, and marketplaces into one order and inventory layer.' },
];

const STEPS = [
  { n: '01', t: 'Discovery call', d: 'We learn your business, channels, and what is slowing you down today.' },
  { n: '02', t: 'Review & audit', d: 'We assess your platform, conversion, operations, and integrations.' },
  { n: '03', t: 'Scoped plan', d: 'You get a prioritized plan with a timeline and a fixed proposal to build it.' },
];

const WHEN = [
  'You are about to replatform and want the scope locked before code starts',
  'You sell on several channels and they keep drifting out of sync',
  'You need B2B and DTC on one system and are not sure how to structure it',
  'Your store converts below where it should and you want a prioritized fix list',
  'You are choosing a platform and want an honest, vendor-neutral recommendation',
];

export default function EcommerceConsultingPage() {
  return (
    <>
      <Script id="consulting-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Script id="consulting-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <Script id="consulting-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader navLinks={[]} cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="bg-white font-fj-body text-[#14110F]">
        <section className="mx-auto max-w-[1180px] px-5 py-16 md:py-24">
          <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#F05A28]">E-commerce consulting</p>
          <h1 className="mt-3 max-w-[20ch] font-fj-display text-4xl font-extrabold leading-[1.07] tracking-tight md:text-5xl">
            E-commerce consulting that ends in a build, not a slide deck.
          </h1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-relaxed text-[#46403B]">
            We help DTC and B2B brands choose the right platform, plan a migration, fix conversion and operations, and
            scope the work, then we build it. Clear answers you can act on, from a team that ships.
          </p>
          <HeroInlineForm source="us_consulting_hero" region="us" submitLabel="Book a consulting call" />
        </section>

        {/* What is ecommerce consulting */}
        <section className="border-t border-[#E7DED6] bg-[#FFF8F5]">
          <div className="mx-auto max-w-[820px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">What is e-commerce consulting?</h2>
            <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-[#46403B]">
              <p>
                E-commerce consulting is expert help deciding what to build and how, before you spend the build budget.
                A good ecommerce consultant looks at your catalog, channels, B2B rules, integrations, and conversion, then
                gives you a clear, prioritized plan: the right platform, the migration approach, what to fix first, and
                what it will take.
              </p>
              <p>
                The difference with FactoryJet is that the plan does not stop at advice. We are an ecommerce consulting
                firm and a build agency, so the same team that scopes the work can implement it, or hand the plan to yours.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-[#E7DED6] bg-white">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">What we consult on</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {TOPICS.map((t) => (
                <article key={t.k} className="rounded-2xl border border-[#E7DED6] bg-white p-6">
                  <h3 className="font-fj-display text-lg font-bold">{t.k}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#46403B]">{t.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* When you need it */}
        <section className="border-t border-[#E7DED6] bg-[#FFF8F5]">
          <div className="mx-auto max-w-[820px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">When ecommerce consulting pays off</h2>
            <ul className="mt-6 space-y-3">
              {WHEN.map((w) => (
                <li key={w} className="flex gap-3 text-[15px] leading-relaxed text-[#46403B]">
                  <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#F05A28]/10 text-[#C94A1A]">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true"><path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-[#E7DED6] bg-white">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">How it works</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {STEPS.map((s) => (
                <article key={s.n} className="rounded-2xl border border-[#E7DED6] p-6">
                  <div className="font-fj-mono text-xs font-bold text-[#C94A1A]">{s.n}</div>
                  <h3 className="mt-2 font-fj-display text-lg font-bold">{s.t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#46403B]">{s.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FAQ
          eyebrow="E-COMMERCE CONSULTING FAQ"
          headline="What to expect from a consulting engagement."
          lead="If your question is not below, send a short brief and answers usually come back inside 24 hours."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        <section className="border-t border-[#E7DED6] bg-[#FFF8F5]">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="max-w-[22ch] font-fj-display text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
              Get a clear plan, then a team that builds it.
            </h2>
            <p className="mt-4 max-w-[60ch] text-[16px] leading-relaxed text-[#46403B]">
              Tell us where you are stuck. We will review what you run and send a scoped plan with priorities.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#F05A28] px-6 py-3.5 font-fj-body text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5">Talk to the Founder</a>
              <ModalCTAButton label="Get a commerce audit" region="us" btnVariant="secondary-light" />
            </div>
            <p className="mt-8 text-[14px] text-[#6E635A]">
              Related:{' '}
              <Link href="/us/services/ecommerce-development" className="font-semibold text-[#C94A1A] underline">e-commerce development</Link>,{' '}
              <Link href="/us/b2b-ecommerce" className="font-semibold text-[#C94A1A] underline">B2B e-commerce</Link>, and{' '}
              <Link href="/us/omnichannel-commerce" className="font-semibold text-[#C94A1A] underline">omnichannel commerce</Link>.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
