import type { Metadata } from 'next';
import Link from 'next/link';
import HeroInlineForm from '@/components/HeroInlineForm';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import MidPageCTA from '@/components/v2/MidPageCTA';
import FinalCTA from '@/components/v2/FinalCTA';
import FAQ, { type FAQItem } from '@/components/v2/FAQ';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

/* ─────────────────────────────────────────────────────────────────────────────
   /how-we-work: the engagement and data-handling trust page.

   Built 2026-11-13. Before this page the terms lived in pieces: a five-step
   block on /services, a quoting block on /pricing, four positioning cards on
   /about and a few FAQ answers. This page puts the whole engagement in one
   place, plus the data-handling practices buyers ask about.

   Claims are limited to confirmed sources:
   - Engagement terms: house terms approved 15-16 Oct 2026 (memory note
     factoryjet-house-terms-copy-2026-10-16), same wording as /services.
   - Demo before you sign: confirmed by Bhavesh 4 Oct 2026.
   - 500+ businesses, 97% on-time delivery, founded 2014, registered Shopify
     Partner, stores in 3 to 5 weeks: confirmed claims notes.
   - NDA, credential scoping, self-hosted n8n, names removed from samples,
     person-approves drafts: live copy on /services and /services/ai-automation.
   - UK or EU hosting for AI builds: confirmed by Bhavesh 24 Sep 2026.
   - HIPAA-aware scoping: kept by Bhavesh on /pricing, 22 Oct 2026.
   - Washington Law Group security details: the published case study.
   No certifications, no FactoryJet prices, no team location, no running costs.

   Schema: WebPage + Organization ref + FAQPage built from FAQ_ITEMS, the same
   array <FAQ> renders, so visible FAQ and JSON-LD cannot drift.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/how-we-work';
const PAGE_TITLE = 'How We Work: Demo First, Fixed Price per Phase | FactoryJet';
const PAGE_DESC =
  'How a FactoryJet project runs: a scoping call, working software on your own data before you sign, a fixed price per phase, defect cover and no monthly minimum.';
const PAGE_MODIFIED = '2026-11-13';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    locale: 'en_US',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: CANONICAL_URL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'How FactoryJet runs an ecommerce or AI agent project' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ['https://factoryjet.com/og-default.png'],
  },
  robots: { index: true, follow: true },
};

const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'How we work', url: CANONICAL_URL },
];

/* ── The terms in one card (hero, right column). ─────────────────────────── */
const TERMS = [
  'Working software on your own data before you sign',
  'Each phase scoped, priced and signed on its own',
  'One fixed price in writing, paid against milestones',
  'Code and repository yours from day one',
  'Defects fixed inside the build price for an agreed cover period',
  'Support optional, each change quoted, no monthly minimum',
];

/* ── How an engagement runs. Wording follows the house terms. ────────────── */
const STEPS = [
  {
    title: 'A scoping call with the founder',
    body: 'Bhavesh runs the first call himself. We look at the systems you use, the job you want done, and whether a ready-made tool already covers it. If one does, we say so.',
    detail: 'What helps: the systems involved, how often the work happens, who does it today, and a brief or RFP if you have one.',
  },
  {
    title: 'Working software on your own data, before you sign',
    body: 'For a store, that is a draft theme set up in your own store with your own products. For an AI agent, it is a run on a sample of your own files and rules, so you can check its output against a job you have already done by hand.',
    detail: 'What we need: what starts the work (an order email, an invoice, a form), which systems it touches, and a few real examples, with names removed if you prefer.',
  },
  {
    title: 'A fixed price per phase, in writing',
    body: 'You get the scope, a dated plan and one fixed price in writing. Larger projects are split into phases, and each phase is scoped, priced and signed on its own, so you never commit to work you have not seen defined.',
    detail: 'No hourly billing. Payments are tied to milestones, such as signing, go-live and the finished integration.',
  },
  {
    title: 'The build, against the scope you signed',
    body: 'We design, build and connect the systems in the agreed scope. The code sits in a repository you own from the first day of the build, not from launch. Changes to scope are quoted and approved before we do them.',
    detail: 'Most stores go live in 3 to 5 weeks. Migrations, ERP links and agents follow the dated plan in your proposal.',
  },
  {
    title: 'Launch',
    body: 'We put it live and hand over the accounts. For a store migration, every old URL is mapped to its new page with a single-hop 301 redirect, and the redirect map is part of the scope you sign off.',
    detail: 'For an AI agent, a person on your team approves what it drafts until you decide which steps are safe to automate fully.',
  },
  {
    title: 'Defect cover in the build price',
    body: 'Defects found after launch are fixed inside the build price, for a cover period we agree before work starts. You do not pay again to get the agreed scope working.',
    detail: 'The cover period is written into the proposal, next to the price.',
  },
  {
    title: 'Support only if you want it, with no monthly minimum',
    body: 'After the cover period, support is optional. Each change is quoted and approved before we do it. We can keep managing the servers, AI models and integrations for you, or hand the whole thing to your team or another developer.',
    detail: 'AI usage and hosting can be billed to your own accounts at cost, with no markup from us.',
  },
];

/* ── Security and data handling. Confirmed practices only. ───────────────── */
const DATA_PRACTICES = [
  { t: 'NDA before the first call', d: 'We will sign your NDA before the scoping call if you need it. Mutual NDAs are also available.' },
  { t: 'Demo samples on your terms', d: 'The demo runs on a few of your real records. Remove names and personal details first if you prefer; the demo still shows what the software does.' },
  { t: 'Accounts in your name', d: 'Your store, ERP, AI and hosting accounts stay yours. The code lives in your repository from day one, so access to it never depends on us.' },
  { t: 'Access limited to each step', d: 'Workflows connect with API credentials limited to what each step needs, and no credentials are stored in plain text.' },
  { t: 'Data can stay where it has to', d: 'For medical and financial teams we can run self-hosted n8n inside your own infrastructure, so the data never leaves it. AI builds can be hosted in UK or EU cloud regions.' },
  { t: 'A person approves the output', d: 'On most of our builds the agent drafts the record, such as a sales order, a bill or a quote, and a person on your team approves it.' },
  { t: 'Health businesses', d: 'For clinics and other health businesses we scope which pages and forms handle patient information before we quote. Your practice remains the covered entity responsible for HIPAA compliance.' },
];

/* ── One build, shown in detail (from the published case study). ─────────── */
const WLG_SECURITY = [
  'The console sits behind a sign-in that checks each person’s email with a one-time code before the page loads. Only people the firm has named can see the leads.',
  'The server has no public door.',
  'The database is backed up daily, encrypted, to separate storage.',
  'The code written for the system is assigned to the firm, the crash data belongs to the firm, and the news data subscription is on the firm’s own plan.',
];

/* ── Proof. Published case studies only. ─────────────────────────────────── */
const WORK = [
  { tag: 'AI agent · Legal', client: 'Washington Law Group', note: 'An agent that finds qualifying truck accident reports and sends the firm one summary email per case. The code is assigned to the firm.', href: '/case-studies/washington-law-group-accident-detection-agent' },
  { tag: 'DTC store · Supplements', client: 'Shopholistico', note: 'A custom Shopify theme built from scratch, with tiered subscriptions, a bundle and two ad landing pages.', href: '/case-studies/shopholistico-shopify-store' },
  { tag: 'B2B commerce · Distribution', client: 'Sow Easy', note: 'WooCommerce ordering connected to Odoo, so trade orders and stock live in one place. In progress.', href: '/case-studies/sow-easy-distributor-portal' },
  { tag: 'B2B commerce · Promotional products', client: 'GPSUK', note: 'Online ordering for trade buyers who reorder the same products again and again.', href: '/case-studies/gpsuk-promotional-products' },
  { tag: 'DTC and B2B commerce', client: 'Belle Maison', note: 'One storefront for retail shoppers and trade buyers, on Commerceflo by FactoryJet.', href: '/case-studies/belle-maison-ecommerce-success' },
];

/* ── FAQ. Feeds both <FAQ> and the FAQPage JSON-LD. ─────────────────────── */
const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Can we see a demo before we sign a contract?',
    answer:
      'Yes. Before you sign, we show you working software built on your own data. For a store, that is a draft theme set up in your own store. For an AI agent, it is a demo that runs on your sample files and rules, so you can check its output against a job you have already done by hand. You decide after you have seen it work.',
  },
  {
    question: 'How is a project priced?',
    answer:
      'After a short scoping call you get the scope and one fixed price in writing. Larger projects are split into phases, and each phase is scoped, priced and signed on its own. Payments are tied to milestones, such as signing, go-live and the finished integration. We do not bill by the hour.',
  },
  {
    question: 'Is there a monthly fee after launch?',
    answer:
      'No monthly minimum. Defects found after launch are fixed inside the build price for a cover period we agree before work starts. After that, support is optional: each change is quoted and approved before we do it. AI and hosting can run in your own accounts, at cost, with no markup from us.',
  },
  {
    question: 'What happens if something breaks after launch?',
    answer:
      'If it is a defect in the work we agreed, we fix it inside the build price during the cover period written into your proposal. Changes and new features after launch are quoted separately and only done once you approve them.',
  },
  {
    question: 'Do we own the code and the data?',
    answer:
      'Yes. You own the code and the repository from day one, along with the design files. Your store, ERP and AI accounts stay in your name. You can host it anywhere, change it yourself or hand it to another developer.',
  },
  {
    question: 'Will you sign an NDA?',
    answer: 'Yes. We will sign your NDA before the scoping call if you need it. Mutual NDAs are also available.',
  },
  {
    question: 'How do you handle access to our systems?',
    answer:
      'We connect with API credentials limited to what each step needs, and no credentials are stored in plain text. The accounts stay in your name. When the data has to stay inside your own infrastructure, we can run self-hosted n8n there.',
  },
  {
    question: 'Can our data stay in the UK or EU?',
    answer:
      'Yes. AI builds can be hosted in UK or EU cloud regions, and self-hosted n8n can run on servers in the EU. Personal data stays in accounts you control. Whether a setup meets GDPR is your legal team’s call, and we build so they can sign it off.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'Most stores go live in 3 to 5 weeks. A migration, a B2B portal or an ERP link takes longer, because it depends on how many records and systems are involved. An AI agent usually starts with one workflow. You get a dated plan with the fixed price, so the timeline is in writing too.',
  },
  {
    question: 'Will an AI agent act on its own?',
    answer:
      'On most of our builds the agent drafts the record and a person on your team approves it: a sales order, a bill, a quote. You decide which steps are safe to automate fully, and that can change once the agent has a track record on your own data.',
  },
];

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL_URL}#webpage`,
      url: CANONICAL_URL,
      name: PAGE_TITLE,
      description: PAGE_DESC,
      dateModified: PAGE_MODIFIED,
      isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
    },
    { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
    {
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
  ],
};

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="h-4 w-4 flex-shrink-0">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HowWeWorkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />

      <SiteHeader />

      <main className="bg-fj-cream">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* 1. HERO (light, 7/5) */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream pt-12 pb-14 md:pt-14 md:pb-16">
          <div className="mx-auto max-w-[1200px] px-6 md:px-8">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F05A28]/30 bg-white px-3 py-1.5">
                  <span className="font-fj-mono text-xs font-bold tracking-wide text-[#B23E13]">HOW WE WORK</span>
                </div>

                <h1 className="font-fj-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-fj-ink sm:text-5xl lg:text-[3.2rem]">
                  You see it working on your own data before you sign anything.
                </h1>

                <p className="mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600">
                  This is how a FactoryJet store or AI agent project runs, from the first call to the year after launch:
                  what you get at each step, where you can stop, and how we handle your systems and data.
                </p>

                <div className="mt-6">
                  <HeroInlineForm
                    region="us"
                    source="us_how_we_work_hero"
                    submitLabel="See a demo on my data"
                    trustText="Working software on your own data before you sign. Founder replies within 24 hours."
                  />
                </div>

                <div className="mt-5">
                  <Link
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 font-fj-body text-sm font-semibold text-fj-ink hover:opacity-70"
                  >
                    Talk to the founder
                    <Arrow />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-fj-neutral-200 bg-white p-5 sm:p-6">
                  <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">The terms, in one place</p>
                  <ul className="mt-4 divide-y divide-fj-neutral-200">
                    {TERMS.map((t) => (
                      <li key={t} className="flex gap-3 py-3 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-fj-neutral-200 pt-4 font-fj-mono text-xs text-fj-neutral-600">
                    <span>500+ businesses served</span>
                    <span>97% on-time delivery</span>
                    <span>Founded 2014</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SHORT ANSWER */}
        <section className="border-b border-fj-neutral-200 bg-white py-12">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <div className="rounded-2xl border-2 border-[#F05A28]/25 bg-fj-cream p-6 sm:p-8">
              <h2 className="mb-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">Short answer</h2>
              <p className="font-fj-body text-base leading-relaxed text-fj-ink sm:text-lg">
                Every FactoryJet store or AI agent project starts with a scoping call with the founder and a working draft on your own
                data. You then get one fixed price per phase, in writing, paid against milestones. Defects after launch
                are fixed inside the build price for an agreed cover period. Support after that is optional, with no
                monthly minimum, and you own the code from day one.
              </p>
            </div>
          </div>
        </section>

        {/* 3. HOW AN ENGAGEMENT RUNS (4/8) */}
        <section id="steps" className="scroll-mt-24 border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">How an engagement runs</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Seven steps, the same for a store and an agent.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  The first two steps happen before you sign anything. You can stop after either one, and the demo is
                  yours to judge on your own records.
                </p>
              </div>
              <ol className="grid gap-4 lg:col-span-8">
                {STEPS.map((step, i) => (
                  <li key={step.title} className="flex gap-4 rounded-2xl border border-fj-neutral-200 bg-white p-5 sm:p-6">
                    <span className="font-fj-mono text-sm font-bold text-[#B23E13]">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{step.title}</h3>
                      <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{step.body}</p>
                      <p className="mt-3 border-t border-fj-neutral-200 pt-3 font-fj-body text-sm leading-relaxed text-fj-ink">{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 4. MID-PAGE CTA */}
        <MidPageCTA
          headline="Send us the job and the systems it touches."
          sub="We reply with what we would build first and whether a ready-made tool already does it. If there is work for us, you get a working draft on your own data and a fixed price in writing."
          label="Talk to the founder"
          note="Bhavesh replies within 24 hours."
        />

        {/* 5. SECURITY AND DATA HANDLING (5/7) */}
        <section id="data" className="scroll-mt-24 border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">Security and data handling</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Your systems stay in your name, and we only touch what the job needs.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  These are the practices we follow on store and agent builds. If your team needs something specific, such
                  as data that cannot leave your servers, raise it on the scoping call and it goes into the written scope.
                </p>

                <div className="mt-8 rounded-2xl border border-fj-neutral-200 bg-fj-cream p-5 sm:p-6">
                  <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">One build, in detail</p>
                  <p className="mt-3 font-fj-display text-lg font-semibold text-fj-ink">
                    The Washington Law Group accident agent
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {WLG_SECURITY.map((line) => (
                      <li key={line} className="flex gap-3 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                        {line}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/case-studies/washington-law-group-accident-detection-agent"
                    className="mt-4 inline-flex min-h-11 items-center gap-2 font-fj-body text-sm font-semibold text-fj-ink hover:text-[#B23E13]"
                  >
                    Read the case study
                    <Arrow />
                  </Link>
                </div>
              </div>
              <ul className="grid gap-3 self-start lg:col-span-7">
                {DATA_PRACTICES.map((x) => (
                  <li key={x.t} className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-5">
                    <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{x.t}</h3>
                    <p className="mt-1 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{x.d}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 6. PROOF: published case studies only */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Recent work</p>
            <h2 className="mt-4 max-w-3xl font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Stores and agents built this way, with the details in each case study.
            </h2>
            <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {WORK.map((w) => (
                <li key={w.client}>
                  <Link href={w.href} className="group flex h-full flex-col rounded-2xl border border-fj-neutral-200 bg-white p-6 hover:border-[#F05A28]/50">
                    <span className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">{w.tag}</span>
                    <span className="mt-3 font-fj-display text-xl font-semibold text-fj-ink">{w.client}</span>
                    <span className="mt-2 flex-1 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{w.note}</span>
                    <span className="mt-4 inline-flex items-center gap-2 font-fj-body text-sm font-semibold text-fj-ink group-hover:text-[#B23E13]">
                      Read the case study
                      <Arrow />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
              More in <Link href="/case-studies" className="font-semibold text-[#B23E13] underline">all case studies</Link>. For what we
              build, see <Link href="/services" className="font-semibold text-[#B23E13] underline">services</Link>; for how quotes are
              scoped and what drives cost, see <Link href="/pricing" className="font-semibold text-[#B23E13] underline">pricing</Link>.
            </p>
          </div>
        </section>

        {/* 7. FAQ */}
        <FAQ
          eyebrow="How we work FAQ"
          headline="What buyers ask before they start a project with us."
          lead="Short answers on demos, pricing, support after launch and how we handle your data."
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* 8. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="Start here"
          headline="Tell us the job. We will show you it working."
          sub="Send the systems you use and the work you want done. We come back with a working draft on your own data and one fixed price in writing."
          primaryCta={{ label: 'See a demo on my data', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
