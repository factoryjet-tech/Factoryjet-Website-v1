import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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
    'E-commerce consulting that ends in a build, not a slide deck. An ecommerce consulting firm for DTC and B2B brands: platform selection, migration and replatforming planning, conversion and operations audits, ecommerce strategy, and a scoped build plan we can implement. Decade-plus of commerce builds.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'E-Commerce Consulting Services for DTC & B2B | FactoryJet',
    description:
      'Ecommerce consulting for DTC and B2B brands: platform selection, migration planning, conversion and operations audits, ecommerce strategy, and a scoped build plan you can act on.',
    url: 'https://factoryjet.com/ecommerce-consulting',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet, e-commerce consulting services for DTC and B2B brands' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce Consulting Services for DTC & B2B | FactoryJet',
    description: 'Ecommerce consulting for DTC and B2B: platform selection, migration, conversion, operations, strategy, and a scoped build plan.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/ecommerce-consulting' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'what', label: 'What we consult on' },
  { key: 'platforms', label: 'Platforms & migration' },
  { key: 'how', label: 'How it works' },
  { key: 'fit', label: 'Is it for us' },
];

const FAQ_ITEMS = [
  { category: 'what', question: 'What does an ecommerce consultant do?', answer: 'An ecommerce consultant helps you decide what to build and how: the right platform, a migration plan, the B2B and DTC model, integrations, and the fixes that move conversion and operations. FactoryJet does that, and then we can build it, so the plan does not sit on a shelf.' },
  { category: 'what', question: 'What is the difference between an ecommerce consulting firm and an agency?', answer: 'A consulting firm advises; an agency builds. FactoryJet is both. We give you a clear, scoped plan, and you can have us implement it or hand the plan to your own team. You are not paying for advice you then have to find someone else to act on.' },
  { category: 'what', question: 'What is ecommerce strategy consulting?', answer: 'Ecommerce strategy consulting is the work of deciding where to sell and in what order: how to run DTC and B2B together, which marketplaces to add, how to connect inventory across channels, and what to sequence first for the best return. We put that into a written plan you can act on.' },
  { category: 'what', question: 'Can you audit our existing store?', answer: 'Yes. An ecommerce audit reviews your platform, conversion, operations, integrations, and channel setup, then gives you a prioritized list of what to fix and what to build next. It is the fastest way to see where you are losing sales and hours.' },
  { category: 'what', question: 'Do you offer ecommerce business consulting beyond the tech?', answer: 'Yes. We advise on the commercial model as well as the build: catalog and pricing structure, trade versus retail, fulfillment and 3PL, and how the systems support the way you actually sell.' },
  { category: 'platforms', question: 'Can you help us choose between Shopify, Magento, and BigCommerce?', answer: 'Yes. We match the platform to your catalog size, B2B rules, integrations, and budget on a scoping call, and recommend the fit rather than pushing one platform. We consult across Shopify and Shopify Plus, Adobe Commerce (Magento), BigCommerce, WooCommerce, headless, and Commerceflo.' },
  { category: 'platforms', question: 'Do you provide ecommerce migration services?', answer: 'Yes. We plan and run replatforming and migration: a cutover that moves products, customers, orders, and B2B pricing to the new platform without losing SEO rankings or uptime. The plan comes first, so the migration has no surprises.' },
  { category: 'platforms', question: 'How does ecommerce replatforming work?', answer: 'We lock the target platform, map the data, plan redirects to protect SEO, rebuild the B2B rules and integrations, then cut over on a schedule that fits your business. Most brands replatform every five to seven years, so we scope the new platform to last that long.' },
  { category: 'platforms', question: 'Do you consult on selling across marketplaces?', answer: 'Yes. We plan how to sell on Amazon, Walmart, and your own store from one catalog and one live inventory, so channels stop drifting out of sync. This ties directly into an omnichannel commerce build if you want it.' },
  { category: 'how', question: 'How does an ecommerce consulting engagement work?', answer: 'We start with a discovery call, review what you run today, and deliver a scoped plan with priorities and a timeline. From there you can engage us to build, or take the plan in-house. No long retainer required to get value.' },
  { category: 'how', question: 'What do we get at the end of a consulting engagement?', answer: 'A clear, written plan: the recommended platform, a migration or build approach, the integrations and B2B model, a prioritized list of fixes, and a fixed proposal if you want us to build it.' },
  { category: 'how', question: 'How long does an ecommerce consulting engagement take?', answer: 'A focused scoping pass is usually days, not months. A deeper audit of a larger store takes a little longer. We agree the scope and timeline on the first call so you know what to expect before anything starts.' },
  { category: 'how', question: 'How much does ecommerce consulting cost?', answer: 'It depends on scope, so we scope it on a short call and send a fixed proposal before any work starts, rather than putting a number on a page. You approve the price before we begin.' },
  { category: 'fit', question: 'Do you do B2B ecommerce consulting?', answer: 'Yes. B2B is a core focus: account pricing, net terms, quote and approval workflows, dealer and distributor portals, and ERP integration. We advise on the model and build it.' },
  { category: 'fit', question: 'Do you do DTC ecommerce consulting?', answer: 'Yes. For DTC brands we focus on conversion, subscription and bundle logic, fulfillment, and the platform that will hold up as you scale, alongside the channel strategy across your store and marketplaces.' },
  { category: 'fit', question: 'Is consulting worth it if we already know we need to rebuild?', answer: 'Often yes, because scoping is where rebuilds go wrong. A short consulting pass locks the platform, the data migration, the B2B rules, and the integrations before code starts, which saves cost and rework later.' },
  { category: 'fit', question: 'What makes a good ecommerce consulting firm?', answer: 'One that has actually built and shipped stores, recommends the platform that fits rather than the one it resells, and can implement the plan or hand it over cleanly. Advice from a team that never builds tends to miss what breaks in practice.' },
  { category: 'fit', question: 'Do you work with US brands?', answer: 'Yes, most of the brands we work with are US-based, across DTC and B2B, and we bring a decade-plus of commerce builds to every engagement.' },
  { category: 'fit', question: 'What size of brand do you consult for?', answer: 'Growing DTC and B2B brands, from teams outgrowing a starter store to established sellers replatforming or unifying channels. If you are choosing a platform, planning a migration, or trying to run DTC and B2B on one system, it is a fit.' },
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
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', name: 'DTC and B2B brands' },
  
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'E-Commerce Consulting', item: 'https://factoryjet.com/ecommerce-consulting' },
  ],
};

const CREDS = [
  { k: '10+ yrs', d: 'building and shipping commerce for DTC and B2B brands' },
  { k: '6 platforms', d: 'Shopify Plus, Adobe Commerce, BigCommerce, WooCommerce, headless, Commerceflo' },
  { k: 'DTC + B2B', d: 'retail and trade running on one system' },
  { k: 'You own it', d: 'full code and data, no lock-in to us' },
];

const STATS = [
  {
    k: '$2.64T',
    d: 'US B2B ecommerce sales in 2024, up 16% year over year, which is why getting the B2B build right matters.',
    src: 'Digital Commerce 360',
    href: 'https://www.digitalcommerce360.com/article/b2b-ecommerce-market-us/',
  },
  {
    k: '1.5 to 2%',
    d: 'the average ecommerce conversion rate, while top stores clear 5%, so a conversion audit usually pays for itself.',
    src: 'Smart Insights',
    href: 'https://www.smartinsights.com/ecommerce/ecommerce-analytics/ecommerce-conversion-rates/',
  },
  {
    k: '5 to 7 yrs',
    d: 'how long most brands run a platform before replatforming, so the choice you scope now has to hold up for years.',
    src: 'Shopify',
    href: 'https://www.shopify.com/enterprise/blog/ecommerce-replatforming-guide',
  },
];

const TOPICS = [
  { k: 'Platform selection', d: 'Shopify Plus, Adobe Commerce (Magento), BigCommerce, WooCommerce, headless, or Commerceflo, matched to your catalog and B2B rules.' },
  { k: 'Migration & replatforming', d: 'A cutover plan that moves products, customers, orders, and B2B pricing without losing SEO or uptime.' },
  { k: 'DTC + B2B model', d: 'How to run retail and trade on one system with account pricing, net terms, and reordering.' },
  { k: 'Conversion & operations', d: 'Where buyers drop off and where your team loses hours, with a prioritized list of fixes.' },
  { k: 'Channels & marketplaces', d: 'How to sell on Amazon, Walmart, and your store from one catalog and one live inventory.' },
  { k: 'Integrations & data', d: 'Connecting ERP, POS, 3PL, and marketplaces into one order and inventory layer.' },
];

const BENEFITS = [
  { t: 'A decision, not a debate', d: 'You leave with the platform chosen, the model set, and the sequence agreed, so the team can stop going in circles.' },
  { t: 'A plan you can build from', d: 'Every recommendation is scoped and prioritized, with a fixed proposal if you want us to implement it.' },
  { t: 'Fewer expensive surprises', d: 'The migration, the B2B rules, and the integrations get locked before code starts, where mistakes are cheap to fix.' },
  { t: 'Vendor-neutral advice', d: 'We recommend the platform that fits your business, not the one that is easiest for us to resell.' },
  { t: 'One team from plan to build', d: 'The people who scope the work can ship it, so nothing gets lost in a handoff to a second vendor.' },
  { t: 'Built for DTC and B2B', d: 'The plan accounts for how you actually sell, whether that is retail, trade, or both on one system.' },
];

const USECASES = [
  {
    img: '/images/us/omnichannel/retail-dtc.webp',
    alt: 'DTC brand owner reviewing an ecommerce consulting plan for their online store',
    t: 'DTC brands scaling up',
    d: 'You have outgrown a starter store and conversion has stalled. We audit the funnel, pick a platform that holds up as you grow, and give you a prioritized plan to lift conversion and speed.',
  },
  {
    img: '/images/us/omnichannel/wholesale-dtc.webp',
    alt: 'B2B wholesale team planning a trade portal with an ecommerce consultant',
    t: 'B2B and wholesale sellers',
    d: 'You need account pricing, net terms, quotes, and a dealer portal alongside retail. We model how B2B and DTC run on one system and connect it to your ERP.',
  },
  {
    img: '/images/us/omnichannel/multi-location.webp',
    alt: 'Retailer reviewing a replatforming and migration plan across store systems',
    t: 'Brands replatforming',
    d: 'Your platform is holding you back and a rebuild feels risky. We lock the target platform, plan the data migration and SEO redirects, and de-risk the cutover before code starts.',
  },
  {
    img: '/images/us/omnichannel/marketplace.webp',
    alt: 'Seller planning a multichannel marketplace strategy across Amazon and their own store',
    t: 'Multichannel sellers',
    d: 'You sell on your store and marketplaces and they keep drifting out of sync. We plan one catalog and one live inventory across Amazon, Walmart, and your own store.',
  },
];

const COMPARE = [
  { row: 'Gives you a written plan', a: true, b: 'Sometimes', c: true },
  { row: 'Actually builds what it recommends', a: false, b: true, c: true },
  { row: 'Vendor-neutral platform advice', a: 'Usually', b: false, c: true },
  { row: 'One team from scope to launch', a: false, b: 'Varies', c: true },
  { row: 'DTC and B2B on one system', a: 'Varies', b: 'Varies', c: true },
  { row: 'You own the code and data', a: 'N/A', b: 'Varies', c: true },
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

function Mark({ v }: { v: boolean | string }) {
  if (v === true) return <span className="font-bold text-[#C94A1A]">Yes</span>;
  if (v === false) return <span className="text-[#9A8F84]">No</span>;
  return <span className="text-[#6E635A]">{v}</span>;
}

export default function EcommerceConsultingPage() {
  return (
    <>
      <script id="consulting-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="consulting-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="consulting-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader navLinks={[]} cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="bg-white font-fj-body text-[#14110F]">
        <section className="mx-auto max-w-[1180px] px-5 py-16 md:py-24">
          <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#F05A28]">E-commerce consulting</p>
          <h1 className="mt-3 max-w-[20ch] font-fj-display text-4xl font-extrabold leading-[1.07] tracking-tight md:text-5xl">
            E-commerce consulting that ends in a build, not a slide deck.
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-relaxed text-[#46403B]">
            FactoryJet is an ecommerce consulting firm for DTC and B2B brands. We help you choose the right platform, plan
            a migration, fix conversion and operations, and scope the work, then we build it. Clear answers you can act on,
            from a team that ships.
          </p>
          <HeroInlineForm source="us_consulting_hero" region="us" submitLabel="Book a consulting call" />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CREDS.map((c) => (
              <div key={c.k} className="rounded-2xl border border-[#E7DED6] bg-[#FFF8F5] p-5">
                <div className="font-fj-display text-2xl font-extrabold text-[#14110F]">{c.k}</div>
                <p className="mt-1 text-[13px] leading-snug text-[#6E635A]">{c.d}</p>
              </div>
            ))}
          </div>
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
                firm and a build agency, so the same team that scopes the work can implement it, or hand the plan to
                yours. That is what people usually mean when they search for ecommerce consulting services: a partner who
                can both tell them the right move and make it.
              </p>
            </div>
          </div>
        </section>

        {/* Sourced stats */}
        <section className="border-t border-[#E7DED6] bg-white">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="max-w-[24ch] font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">Why the plan matters more than the build</h2>
            <p className="mt-4 max-w-[62ch] text-[16px] leading-relaxed text-[#46403B]">
              Most of what goes wrong with an ecommerce project is decided before a line of code is written. The numbers
              below are why we scope first.
            </p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {STATS.map((s) => (
                <article key={s.src} className="rounded-2xl border border-[#E7DED6] bg-white p-6">
                  <div className="font-fj-display text-3xl font-extrabold text-[#C94A1A]">{s.k}</div>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#46403B]">{s.d}</p>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-fj-mono text-[12px] font-semibold uppercase tracking-wide text-[#6E635A] underline">
                    Source: {s.src}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* What we consult on */}
        <section className="border-t border-[#E7DED6] bg-[#FFF8F5]">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">What we consult on</h2>
            <p className="mt-4 max-w-[60ch] text-[16px] leading-relaxed text-[#46403B]">
              Six areas cover most of what brands come to us for. We can go deep on one or scope all of them together.
            </p>
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

        {/* Benefits */}
        <section className="border-t border-[#E7DED6] bg-white">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">What you get from ecommerce consulting</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {BENEFITS.map((b) => (
                <article key={b.t} className="rounded-2xl border border-[#E7DED6] bg-[#FFF8F5] p-6">
                  <h3 className="font-fj-display text-lg font-bold">{b.t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#46403B]">{b.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases by business type */}
        <section className="border-t border-[#E7DED6] bg-[#FFF8F5]">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">Who we consult for</h2>
            <p className="mt-4 max-w-[60ch] text-[16px] leading-relaxed text-[#46403B]">
              The engagement looks different depending on where you are. Here is how ecommerce consulting plays out by
              business type.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {USECASES.map((u) => (
                <article key={u.t} className="overflow-hidden rounded-2xl border border-[#E7DED6] bg-white">
                  <div className="relative aspect-[16/9] w-full">
                    <Image src={u.img} alt={u.alt} fill sizes="(max-width: 768px) 100vw, 560px" style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="p-6">
                    <h3 className="font-fj-display text-lg font-bold">{u.t}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#46403B]">{u.d}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="border-t border-[#E7DED6] bg-white">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="max-w-[28ch] font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">Consulting firm, build agency, or both?</h2>
            <p className="mt-4 max-w-[62ch] text-[16px] leading-relaxed text-[#46403B]">
              Most brands end up hiring twice: a consulting firm to write the plan, then an agency to build it, and the
              plan gets lost in between. Here is how the options compare.
            </p>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left text-[14px]">
                <thead>
                  <tr className="border-b border-[#E7DED6]">
                    <th className="py-3 pr-4 font-fj-body font-semibold text-[#46403B]">What you want</th>
                    <th className="px-4 py-3 font-fj-body font-semibold text-[#6E635A]">Consulting-only firm</th>
                    <th className="px-4 py-3 font-fj-body font-semibold text-[#6E635A]">Build-only agency</th>
                    <th className="px-4 py-3 font-fj-body font-semibold text-[#C94A1A]">FactoryJet</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((r) => (
                    <tr key={r.row} className="border-b border-[#F0E9E2]">
                      <td className="py-3 pr-4 font-medium text-[#14110F]">{r.row}</td>
                      <td className="px-4 py-3"><Mark v={r.a} /></td>
                      <td className="px-4 py-3"><Mark v={r.b} /></td>
                      <td className="bg-[#FFF8F5] px-4 py-3"><Mark v={r.c} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
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

        {/* How it works */}
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

        {/* Proof */}
        <section className="border-t border-[#E7DED6] bg-[#FFF8F5]">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">From the brands we have built for</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <figure className="m-0 flex flex-col rounded-2xl border border-[#E7DED6] bg-white p-6">
                <div className="text-[13px] tracking-[2px] text-[#F05A28]" aria-hidden="true">★★★★★</div>
                <blockquote className="my-4 font-fj-display text-[18px] font-semibold leading-[1.5] text-[#14110F]">
                  “We were live in 6 days, I genuinely did not believe that was possible. The design is stunning, the WhatsApp integration brings in inquiries every day, and the site has stayed lightning fast.”
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3">
                  <Image src="/images/testimonials/ricky-belle-maison-160.webp" alt="Ricky B., Founder of Belle Maison" width={48} height={48} className="rounded-full border border-[#E7DED6] object-cover" />
                  <span><b className="block font-fj-display text-[15px] text-[#14110F]">Ricky B.</b><span className="text-[13px] text-[#6E635A]">Founder, Belle Maison</span></span>
                </figcaption>
              </figure>
              <figure className="m-0 flex flex-col rounded-2xl border border-[#E7DED6] bg-white p-6">
                <div className="text-[13px] tracking-[2px] text-[#F05A28]" aria-hidden="true">★★★★★</div>
                <blockquote className="my-4 font-fj-display text-[18px] font-semibold leading-[1.5] text-[#14110F]">
                  “In our business, clients size you up before they ever call. FactoryJet built us a website that finally looks as solid as the work we deliver, and we are getting real project inquiries through it.”
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3">
                  <Image src="/images/testimonials/vishal-impulse-branding-160.webp" alt="Vishal K., Director of Impulse Branding" width={48} height={48} className="rounded-full border border-[#E7DED6] object-cover" />
                  <span><b className="block font-fj-display text-[15px] text-[#14110F]">Vishal K.</b><span className="text-[13px] text-[#6E635A]">Director, Impulse Branding</span></span>
                </figcaption>
              </figure>
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
              <Link href="/services/ecommerce-development" className="font-semibold text-[#C94A1A] underline">e-commerce development</Link>,{' '}
              <Link href="/b2b-ecommerce" className="font-semibold text-[#C94A1A] underline">B2B e-commerce</Link>, and{' '}
              <Link href="/omnichannel-commerce" className="font-semibold text-[#C94A1A] underline">omnichannel commerce</Link>.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
