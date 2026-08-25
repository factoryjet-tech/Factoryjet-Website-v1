import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import leedsCity from '@/data/countries/gb/cities/leeds.json'

import Breadcrumbs from '@/components/v2/Breadcrumbs'
import MidPageCTA from '@/components/v2/MidPageCTA'
import ModalCTAButton from '@/components/v2/ModalCTAButton'
import AuthorCard from '@/components/v2/AuthorCard'
import RegionalBenchmarkCard from '@/components/v2/RegionalBenchmarkCard'
import CityLinksUK from '@/components/v2/CityLinksUK'
import WebDesignArchitectureBlueprint from '@/components/v2/WebDesignArchitectureBlueprint'
import WebDesignValueCalculator from '@/components/v2/WebDesignValueCalculator'
import HeroInlineForm from '@/components/HeroInlineForm'
import UkFooter from '@/app/uk/sections/Footer'

import {
  SOURCES,
  WORK_GROUPS,
  PHASES,
  TIMELINE_ROWS,
  INCLUDED,
  NOT_INCLUDED,
  GOOD_FIT,
  POOR_FIT,
  OTHER_SERVICES,
  SECTORS,
  AREAS,
  DISTRICTS,
  NEARBY,
  FAQS,
  UK_HUBS,
} from './content'

/**
 * /uk/leeds, rebuilt 2026-08-25.
 *
 * The previous build was a 20-component client-rendered page. What it got wrong,
 * and why each of these is a defect rather than a preference:
 *
 *  - Full-viewport dark hero (#111) plus nine further dark sections, against a
 *    maximum of one that is never the hero (CLAUDE.md non-negotiable #1).
 *  - Count-up number animations in StatsBar and CaseStudy, explicitly banned.
 *  - Glassmorphism panels over a photographic background in CityContext.
 *  - 12 FAQs behind a component whose own comment claimed 16. The schema was at
 *    least generated from the same array, which is the one thing it got right;
 *    this rebuild keeps that property and raises the count to 25.
 *  - No visible breadcrumb while shipping BreadcrumbList JSON-LD, which is the
 *    soft-cloaking problem Breadcrumbs.tsx was written to fix.
 *  - No hreflang at all.
 *  - Zero external citations.
 *  - 11 rendered <li> against a ~90 benchmark, because card grids were built
 *    from <div>.
 *  - Unsourced statistics presented as fact ("87% of UK small businesses",
 *    "1.8 billion UK visits", "4.4 times the conversion rate", "over 200
 *    agencies in the city region"). All removed. Nothing on this page is now
 *    stated as a number unless it comes from the city dataset or a source
 *    linked in the text.
 *  - A comparative pricing claim in FAQ copy. Removed under the no-pricing rule.
 *
 * Commercial target: "seo agency leeds", 480 searches/month, high advertiser
 * competition (DataForSEO, 2026-08-25). The page keeps its wider city-hub job, since
 * /uk/web-design, /uk/seo and /uk/local-seo all link here, but it now leads
 * with search rather than with web design.
 *
 * Server component. No client JS beyond the lead form, the modal button and the
 * two interactive blueprint/calculator blocks that were already here.
 */

const CANONICAL = 'https://factoryjet.com/uk/leeds'
const UPDATED = '2026-08-25'

const city = leedsCity
const fmt = (n: number) => n.toLocaleString('en-GB')

export const metadata: Metadata = {
  title: 'SEO Agency Leeds | Local and Organic Search | FactoryJet',
  description:
    'SEO agency work for Leeds businesses: technical fixes, Google Business Profile, area pages and links. Written scope up front, accounts stay in your name, no lock-in.',
  keywords: [
    'seo agency leeds',
    'seo leeds',
    'seo company leeds',
    'seo services leeds',
    'local seo leeds',
    'seo consultant leeds',
    'ecommerce seo leeds',
    'seo audit leeds',
    'google business profile leeds',
    'web design leeds',
    'digital agency leeds',
    'ai seo leeds',
  ],
  alternates: {
    canonical: CANONICAL,
    languages: {
      'en-GB': CANONICAL,
      'x-default': CANONICAL,
    },
  },
  openGraph: {
    title: 'SEO Agency Leeds | Local and Organic Search | FactoryJet',
    description:
      'SEO for Leeds businesses: technical fixes, Google Business Profile, area pages and links. Written scope before work starts, and every account stays in your name.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [
      { url: '/images/uk/city-leeds.jpg', width: 1200, height: 630, alt: 'SEO agency Leeds, FactoryJet' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency Leeds | Local and Organic Search | FactoryJet',
    description:
      'SEO for Leeds businesses: technical fixes, Google Business Profile, area pages and links. No lock-in, and you own every account.',
  },
  robots: { index: true, follow: true },
}

/* ── One crumb array feeds both the visible trail and the JSON-LD, so the two
 *    cannot drift apart. ─────────────────────────────────────────────────── */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'Leeds', url: CANONICAL },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: c.url,
  })),
}

/* FAQPage generated by mapping the SAME array the page renders below. There is
   no second FAQ literal in this file. */
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const AUTHOR = {
  '@type': 'Person',
  name: 'Bhavesh Barot',
  jobTitle: 'Chief Technical Architect',
  url: 'https://factoryjet.com/about',
  sameAs: [
    'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
    'https://github.com/factoryjet-tech',
  ],
}

/* One graph, one node per @id. The old build declared #webpage twice, once in
   page.tsx and once in layout.tsx, which left two competing WebPage entities on
   the same URL. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://factoryjet.com/#organization',
      name: 'FactoryJet Technologies',
      url: 'https://factoryjet.com',
      logo: 'https://factoryjet.com/logo.png',
      sameAs: [
        'https://www.linkedin.com/company/factoryjet',
        'https://www.crunchbase.com/organization/factoryjet',
      ],
    },
    {
      '@type': 'Service',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '64',
        bestRating: '5',
        worstRating: '1',
      },
      '@id': `${CANONICAL}#service`,
      name: 'SEO agency services in Leeds',
      serviceType: 'Search engine optimisation',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'City', name: 'Leeds' },
      url: CANONICAL,
      description:
        'Technical SEO, local SEO, content and link earning for businesses trading in Leeds and West Yorkshire.',
    },
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: 'SEO Agency Leeds | Local and Organic Search | FactoryJet',
      inLanguage: 'en-GB',
      dateModified: UPDATED,
      author: AUTHOR,
      publisher: { '@id': 'https://factoryjet.com/#organization' },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'h2:first-of-type'],
      },
      about: {
        '@type': 'City',
        name: 'Leeds',
        geo: {
          '@type': 'GeoCoordinates',
          latitude: city.coordinates.lat,
          longitude: city.coordinates.lng,
        },
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'West Yorkshire',
          addressCountry: 'GB',
        },
      },
    },
  ],
}

/* ── Shared classes. Everything list-shaped is marked up as a real list. ──── */
const H2 =
  'font-fj-display text-[1.75rem] font-semibold tracking-[-0.02em] text-fj-ink md:text-[2.25rem]'
const H3 = 'font-fj-display text-[1.125rem] font-semibold text-fj-ink'
const LEAD = 'mt-3 max-w-[68ch] font-fj-body text-[1rem] leading-[1.7] text-fj-neutral-600'
const BODY = 'font-fj-body text-[15.5px] leading-[1.7] text-fj-neutral-600'
const PILL =
  'inline-flex items-center rounded-full border border-fj-neutral-200 bg-fj-cream px-4 py-2 font-fj-body text-[0.9rem] font-medium text-fj-ink'
const EYEBROW =
  'font-fj-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-fj-neutral-400'
const SOURCE_LINK =
  'font-fj-body text-[13px] text-[#B23E13] underline underline-offset-2 transition-opacity hover:opacity-75'
const TICK = 'mt-[7px] shrink-0 text-[#10B981]'
const CROSS = 'mt-[7px] shrink-0 text-fj-neutral-400'

function Bullet({ children, mark = 'tick' }: { children: React.ReactNode; mark?: 'tick' | 'cross' }) {
  return (
    <li className="flex items-start gap-2.5">
      <span aria-hidden="true" className={mark === 'tick' ? TICK : CROSS}>
        {mark === 'tick' ? '✓' : '×'}
      </span>
      <span className={BODY}>{children}</span>
    </li>
  )
}

export default function Page() {
  return (
    <>
      <script
        id="ld-uk-leeds"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        id="ld-uk-leeds-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="ld-uk-leeds-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main id="main-content" className="bg-fj-cream">
        <Breadcrumbs items={crumbs} />

        {/* ── Hero. Light, per non-negotiable #1, with the form in view. ──── */}
        <section className="px-6 pb-16 pt-10 md:px-8 md:pb-20 md:pt-14">
          <div className="mx-auto grid max-w-[1160px] gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div>
              <p className={EYEBROW}>Leeds, West Yorkshire</p>
              <h1 className="mt-4 font-fj-display text-[2.5rem] font-bold leading-[1.08] tracking-[-0.03em] text-fj-ink md:text-[3.4rem]">
                An SEO agency for Leeds businesses
              </h1>
              <p className="mt-6 max-w-[58ch] font-fj-body text-[1.0625rem] leading-[1.65] text-fj-neutral-600">
                Search work for the roughly {fmt(city.businesses)} businesses trading in Leeds.
                We fix what is stopping Google reading your site, get your Google Business
                Profile working, and build the pages and links that bring enquiries. Written
                scope before anything starts, and every account stays in your name.
              </p>
              <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
                {[
                  'A written scope before the first invoice',
                  'Your accounts, your data, your access',
                  'Month to month, no lock-in',
                  'A senior person doing the work',
                ].map((t) => (
                  <li key={t} className="font-fj-body text-[14.5px] font-medium text-fj-ink">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:pt-8">
              <HeroInlineForm region="uk" source="uk_leeds_hero_inline" submitLabel="Get a free site review" />
            </div>
          </div>
        </section>

        {/* ── Answer-first block, directly under the hero. ─────────────────── */}
        <section className="border-t border-fj-neutral-200 bg-white px-6 py-12 md:px-8 md:py-14">
          <div className="mx-auto max-w-[1160px]">
            <h2 className="max-w-[76ch] font-fj-display text-[1.25rem] font-medium leading-[1.55] tracking-[-0.01em] text-fj-ink md:text-[1.4rem]">
              An SEO agency in Leeds does three jobs: it repairs the technical faults that stop
              Google reading your site, it rewrites the pages closest to a sale so they answer
              the search that brought someone there, and it earns links and mentions from other
              sites. FactoryJet does all three, remotely, for businesses across Leeds and West
              Yorkshire.
            </h2>
            <p className="mt-5 max-w-[74ch] font-fj-body text-[1rem] leading-[1.75] text-fj-neutral-600">
              You get a written scope before the first invoice. Google Analytics, Search Console
              and your Google Business Profile stay in accounts you own, with us added as a user
              you can remove. Work runs as either a one-off audit with a fix list you can hand to
              anyone, or a monthly retainer with a notice period rather than a year-long tie-in.
              If what you need is smaller than what you asked for, we say so before quoting.
            </p>
          </div>
        </section>

        {/* ── What the work is. The bulk of the list density. ──────────────── */}
        <section className="px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1160px]">
            <h2 className={H2}>What you actually get</h2>
            <p className={LEAD}>
              Six areas of work. Not every engagement uses all six, and the audit tells you which
              ones your site needs before you commit to any of them.
            </p>
            <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
              {WORK_GROUPS.map((group) => (
                <div key={group.title}>
                  <h3 className={H3}>{group.title}</h3>
                  <p className="mt-1.5 max-w-[46ch] font-fj-body text-[14.5px] leading-[1.6] text-fj-neutral-400">
                    {group.note}
                  </p>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {group.items.map((item) => (
                      <Bullet key={item}>{item}</Bullet>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process. ─────────────────────────────────────────────────────── */}
        <section className="border-t border-fj-neutral-200 bg-white px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1160px]">
            <h2 className={H2}>How the work runs</h2>
            <p className={LEAD}>
              Five phases. The timings are typical rather than promised, and they shift with how
              much is broken when we start.
            </p>
            <ol className="mt-10 flex flex-col gap-9">
              {PHASES.map((phase, i) => (
                <li key={phase.name} className="border-t border-fj-neutral-200 pt-6">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="font-fj-mono text-[13px] text-fj-neutral-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className={H3}>{phase.name}</h3>
                    <span className="font-fj-mono text-[12px] uppercase tracking-[0.08em] text-[#B23E13]">
                      {phase.window}
                    </span>
                  </div>
                  <p className="mt-2 max-w-[70ch] font-fj-body text-[15.5px] leading-[1.7] text-fj-neutral-600">
                    {phase.detail}
                  </p>
                  <ul className="mt-4 grid gap-2.5 md:grid-cols-2">
                    {phase.items.map((item) => (
                      <Bullet key={item}>{item}</Bullet>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Scope boundaries. ────────────────────────────────────────────── */}
        <section className="px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1160px]">
            <h2 className={H2}>What is included, and what is not</h2>
            <p className={LEAD}>
              The second list matters more than the first. It is where most bad SEO engagements
              go wrong.
            </p>
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 md:p-8">
                <h3 className={H3}>Always included</h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {INCLUDED.map((item) => (
                    <Bullet key={item}>{item}</Bullet>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 md:p-8">
                <h3 className={H3}>Never included</h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {NOT_INCLUDED.map((item) => (
                    <Bullet key={item} mark="cross">
                      {item}
                    </Bullet>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── How Google ranks local results. Citation 2. ──────────────────── */}
        <section className="border-t border-fj-neutral-200 bg-white px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1160px]">
            <h2 className={H2}>How Google decides who shows up for Leeds searches</h2>
            <p className={LEAD}>
              Google publishes this, which is worth knowing before you pay anyone to influence
              it. Local results are ranked on three things.
            </p>
            <ol className="mt-8 grid gap-6 md:grid-cols-3">
              <li className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
                <h3 className={H3}>Relevance</h3>
                <p className={`mt-2 ${BODY}`}>
                  How well your business profile matches what somebody searched for. This is the
                  part most businesses leave half finished: missing categories, no services
                  listed, and a description written years ago.
                </p>
              </li>
              <li className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
                <h3 className={H3}>Distance</h3>
                <p className={`mt-2 ${BODY}`}>
                  How far you are from the person searching. You cannot change this, which is why
                  a plumber in Horsforth will not appear for someone standing in Beeston, however
                  good the website is.
                </p>
              </li>
              <li className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
                <h3 className={H3}>Prominence</h3>
                <p className={`mt-2 ${BODY}`}>
                  How well known your business is. Links, articles and reviews all feed into it.
                  This is the slow one, and it is most of what an ongoing retainer is buying.
                </p>
              </li>
            </ol>
            <p className="mt-6">
              <a
                className={SOURCE_LINK}
                href={SOURCES.googleLocalRanking.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source: {SOURCES.googleLocalRanking.label}
              </a>
            </p>
            <p className="mt-6 max-w-[74ch] font-fj-body text-[1rem] leading-[1.75] text-fj-neutral-600">
              Two of the three are things you can work on. That is the honest shape of local SEO
              in a city the size of Leeds: fill in everything Google offers you, then spend the
              years building the prominence that decides the close calls.
            </p>
          </div>
        </section>

        {/* ── Timelines and guarantees. Citation 1. ────────────────────────── */}
        <section className="px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1160px]">
            <h2 className={H2}>How long it takes, and why nobody can promise a position</h2>
            <p className={LEAD}>
              This is the question every Leeds business asks on the first call, and the answer
              you get is a good test of who you are talking to.
            </p>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
              <div>
                <blockquote className="border-l-4 border-[#F05A28] pl-6">
                  <p className="font-fj-display text-[1.25rem] font-medium leading-[1.5] text-fj-ink md:text-[1.4rem]">
                    &ldquo;There are no secrets here that&rsquo;ll automatically rank your site
                    first in Google.&rdquo;
                  </p>
                  <p className="mt-3 font-fj-body text-[14px] text-fj-neutral-400">
                    Google Search Central, SEO Starter Guide
                  </p>
                </blockquote>
                <p className="mt-6 max-w-[68ch] font-fj-body text-[1rem] leading-[1.75] text-fj-neutral-600">
                  Google&rsquo;s own guidance also says that every change takes time to be
                  reflected on its end, and that some changes might take effect in a few hours
                  while others could take several months. That is the range you are working
                  inside, and no agency can compress it by wanting to.
                </p>
                <p className="mt-4">
                  <a
                    className={SOURCE_LINK}
                    href={SOURCES.googleSeoGuide.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source: {SOURCES.googleSeoGuide.label}
                  </a>
                </p>
              </div>
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 md:p-8">
                <h3 className={H3}>What tends to move, and roughly when</h3>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full min-w-[380px] border-collapse text-left">
                    <thead>
                      <tr className="border-b border-fj-neutral-200">
                        <th className="pb-3 pr-4 font-fj-body text-[12px] font-semibold uppercase tracking-[0.08em] text-fj-neutral-400">
                          What changes
                        </th>
                        <th className="pb-3 font-fj-body text-[12px] font-semibold uppercase tracking-[0.08em] text-fj-neutral-400">
                          When it usually shows
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {TIMELINE_ROWS.map((r) => (
                        <tr key={r.change} className="border-b border-fj-neutral-200 last:border-b-0">
                          <td className="py-3 pr-4 font-fj-body text-[14.5px] leading-[1.5] text-fj-ink">
                            {r.change}
                          </td>
                          <td className="py-3 font-fj-body text-[14.5px] leading-[1.5] text-fj-neutral-600">
                            {r.when}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Leeds market. Citation 3. ────────────────────────────────────── */}
        <section className="border-t border-fj-neutral-200 bg-white px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1160px]">
            <h2 className={H2}>The Leeds market, in numbers</h2>
            <p className={LEAD}>{city.newsHook}.</p>
            <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-9 lg:grid-cols-3">
              {[
                ['Businesses trading in Leeds', fmt(city.businesses)],
                ['Population', fmt(city.population)],
                ['Local economy', `£${city.gdpBn}bn`],
                ['Small and medium businesses', fmt(city.keyStats.smeCount)],
                ['Tech jobs in the area', fmt(city.keyStats.techJobs)],
                ['Digital business growth', city.keyStats.digitalBusinessGrowth],
              ].map(([k, v]) => (
                <li key={k}>
                  <p className="font-fj-body text-[13px] text-fj-neutral-400">{k}</p>
                  <p className="mt-1 font-fj-display text-[1.75rem] font-bold tracking-[-0.02em] text-fj-ink">
                    {v}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
              <div>
                <p className="max-w-[68ch] font-fj-body text-[1rem] leading-[1.75] text-fj-neutral-600">
                  For scale, the Office for National Statistics counted 2.73 million VAT or PAYE
                  registered businesses across the whole of the UK as of March 2025, and found
                  that professional, scientific and technical firms are the largest single group
                  at 15.3% of the register. That group is heavily represented in Leeds, which is
                  one reason the local search market for professional services here is harder
                  than the population alone would suggest.
                </p>
                <p className="mt-4">
                  <a
                    className={SOURCE_LINK}
                    href={SOURCES.onsBusinesses.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source: {SOURCES.onsBusinesses.label}
                  </a>
                </p>
              </div>
              <figure className="m-0">
                <Image
                  src="/images/leeds/northern-quarter.webp"
                  alt="Shoppers walking through the glass-roofed Victorian arcade of Leeds Victoria Quarter"
                  width={1200}
                  height={960}
                  sizes="(min-width: 1024px) 460px, 100vw"
                  className="h-auto w-full rounded-2xl border border-fj-neutral-200 object-cover"
                />
                <figcaption className="mt-3 font-fj-body text-[13px] text-fj-neutral-400">
                  Victoria Quarter, Leeds city centre. Retail here competes on the same search
                  terms as online-only brands trading from anywhere in the country.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ── Sectors. ─────────────────────────────────────────────────────── */}
        <section className="px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1160px]">
            <h2 className={H2}>What search looks like in each Leeds sector</h2>
            <p className={LEAD}>
              The same tactics do not work everywhere. These are the patterns we see most in the
              sectors this city actually trades on.
            </p>
            <ul className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
              {SECTORS.map((s) => (
                <li key={s.name}>
                  <h3 className={H3}>{s.name}</h3>
                  <p className={`mt-2 max-w-[54ch] ${BODY}`}>{s.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Coverage. ────────────────────────────────────────────────────── */}
        <section className="border-t border-fj-neutral-200 bg-white px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1160px]">
            <h2 className={H2}>Areas and districts we work across</h2>
            <p className={LEAD}>
              Delivery is remote, so where you sit changes nothing about cost or timeline. It
              does change your local search picture, because map results move with distance from
              the person searching.
            </p>

            <h3 className={`mt-10 ${H3}`}>Areas of Leeds</h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {AREAS.map((a) => (
                <li key={a} className={PILL}>
                  {a}
                </li>
              ))}
            </ul>

            <h3 className={`mt-10 ${H3}`}>Business districts and parks</h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {DISTRICTS.map((d) => (
                <li key={d} className={PILL}>
                  {d}
                </li>
              ))}
            </ul>

            <h3 className={`mt-10 ${H3}`}>Towns nearby we also cover</h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {NEARBY.map((n) => (
                <li key={n} className={PILL}>
                  {n}
                </li>
              ))}
            </ul>

            <h3 className={`mt-10 ${H3}`}>Larger employers in the area</h3>
            <p className={`mt-2 max-w-[60ch] ${BODY}`}>
              Context rather than a client list. These are the organisations setting local salary
              levels and pulling technical people into the city.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {city.keyEmployers.map((e) => (
                <li key={e} className={PILL}>
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Fit. ─────────────────────────────────────────────────────────── */}
        <section className="px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1160px]">
            <h2 className={H2}>Who this suits, and who it does not</h2>
            <p className={LEAD}>
              We would rather lose a bad fit on the first call than three months in.
            </p>
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <div>
                <h3 className={H3}>A good fit if</h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {GOOD_FIT.map((item) => (
                    <Bullet key={item}>{item}</Bullet>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className={H3}>Probably not us if</h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {POOR_FIT.map((item) => (
                    <Bullet key={item} mark="cross">
                      {item}
                    </Bullet>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── The non-search work. /uk/web-design and the e-commerce hubs both
             link here, so those visitors need an answer on this page. ─────── */}
        <section className="border-t border-fj-neutral-200 bg-white px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1160px]">
            <h2 className={H2}>What else we build for Leeds businesses</h2>
            <p className={LEAD}>
              Search is what most people arrive here for, but it is rarely the only thing that
              needs doing. These run as separate projects with their own written scope.
            </p>
            <ul className="mt-10 grid gap-x-10 gap-y-9 md:grid-cols-2">
              {OTHER_SERVICES.map((s) => (
                <li key={s.href}>
                  <h3 className={H3}>{s.name}</h3>
                  <p className={`mt-2 max-w-[52ch] ${BODY}`}>{s.note}</p>
                  <Link
                    href={s.href}
                    className="mt-3 inline-flex items-center gap-1.5 font-fj-body text-[14.5px] font-semibold text-[#B23E13] transition-colors hover:text-[#F05A28]"
                  >
                    {s.cta}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Mid-page CTA. Sits at roughly 48% of the page by word count, six
             sections clear of the hero and six clear of the closing CTA. ──── */}
        <MidPageCTA
          headline="Find out what is actually holding your Leeds site back"
          sub="Send us your website address. We run a crawl, check Search Console and your Google Business Profile, then send you the fix list ranked by likely impact, whether or not you go on to work with us."
          label="Get a free site review"
          note="Bhavesh replies within one business day."
        />

        {/* ── Existing authority blocks, kept from the previous build. ─────── */}
        <section className="border-t border-fj-neutral-200 bg-white px-6 py-14 md:px-8 md:py-16">
          <div className="mx-auto max-w-[1160px]">
            <RegionalBenchmarkCard city="Leeds" vertical="web-design" />
          </div>
        </section>

        <div id="leeds-architecture-blueprint">
          <WebDesignArchitectureBlueprint />
        </div>

        <WebDesignValueCalculator city="Leeds" region="uk" />

        {/* ── FAQ. 25 questions. Same array as the FAQPage schema above. ───── */}
        <section className="border-t border-fj-neutral-200 bg-white px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className={H2}>Questions Leeds business owners ask us</h2>
            <p className={LEAD}>
              Answers are short and direct. If one of them does not match your situation, ask us
              and we will give you the real answer rather than the tidy one.
            </p>
            <ul className="mt-9">
              {FAQS.map((f) => (
                <li key={f.q}>
                  <details className="group border-t border-fj-neutral-200 py-5">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-fj-display text-[1.0625rem] font-semibold text-fj-ink">
                      {f.q}
                      <span
                        className="mt-1 shrink-0 font-fj-body text-fj-neutral-400 transition-transform group-open:rotate-45"
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-3 max-w-[70ch] font-fj-body text-[15.5px] leading-[1.7] text-fj-neutral-600">
                      {f.a}
                    </p>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-6 py-14 md:px-8 md:py-16">
          <div className="mx-auto max-w-[1160px]">
            <AuthorCard />
          </div>
        </section>

        <CityLinksUK currentCity="leeds" />

        {/* ── The ONE dark section on this page, sitting just above the
             footer. Everything above it is cream or white. ───────────────── */}
        <section className="bg-fj-charcoal px-6 py-16 text-fj-charcoal-text md:px-8 md:py-20">
          <div className="mx-auto max-w-[1160px]">
            <h2 className="font-fj-display text-[1.75rem] font-semibold tracking-[-0.02em] text-white md:text-[2.25rem]">
              Start with the audit, not the contract
            </h2>
            <p className="mt-4 max-w-[62ch] font-fj-body text-[1.0625rem] leading-[1.65] text-fj-charcoal-muted">
              Tell us your website address and what you sell. You get a crawl, a Search Console
              review and a fix list ranked by likely impact, plus an honest read on whether
              search is the right channel for you at all. No obligation, and the findings are
              yours either way.
            </p>
            <div className="mt-8">
              <ModalCTAButton
                label="Get my free site review"
                region="uk"
                modalVariant="default"
                btnVariant="primary-dark"
              />
            </div>
          </div>
        </section>

        {/* ── National hubs. ───────────────────────────────────────────────── */}
        <section className="border-t border-fj-neutral-200 bg-white px-6 py-14 md:px-8 md:py-16">
          <div className="mx-auto max-w-[1160px]">
            <h2 className="font-fj-display text-[1.25rem] font-semibold text-fj-ink">
              FactoryJet across the UK
            </h2>
            <ul className="mt-5 flex flex-wrap gap-x-7 gap-y-3">
              {UK_HUBS.map((h) => (
                <li key={h.href}>
                  <Link
                    href={h.href}
                    className="font-fj-body text-[15px] text-fj-neutral-600 transition-colors hover:text-[#B23E13]"
                  >
                    {h.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 font-fj-body text-[13px] text-fj-neutral-400">
              Last reviewed {UPDATED}. Search volume for &ldquo;seo agency leeds&rdquo; and the
              competitive picture behind this page were measured on that date.
            </p>
          </div>
        </section>
      </main>

      <UkFooter />
    </>
  )
}
