import Link from 'next/link'
import { CityData, services } from '@/data/uk'
import HeroInlineForm from '@/components/HeroInlineForm'
import UkFooter from '@/app/uk/sections/Footer'
import AuthorCard from '@/components/v2/AuthorCard'
import WebDesignArchitectureBlueprint from '@/components/v2/WebDesignArchitectureBlueprint'
import WebDesignValueCalculator from '@/components/v2/WebDesignValueCalculator'
import RegionalBenchmarkCard from '@/components/v2/RegionalBenchmarkCard'
import CityLinksUK from '@/components/v2/CityLinksUK'
import Breadcrumbs from '@/components/v2/Breadcrumbs'
import MidPageCTA from '@/components/v2/MidPageCTA'
import ModalCTAButton from '@/components/v2/ModalCTAButton'
import { getCityDepth } from '@/data/countries/gb/cityDepth'
import { getCityMarket, type CityMarket } from '@/data/countries/gb/cityMarket'

/**
 * UK city hub, rebuilt 2026-08-03.
 *
 * This template renders the 15 dynamic /uk/{city} roots (brighton, bristol,
 * cambridge, cardiff, coventry, derby, edinburgh, glasgow, hull, leicester,
 * newcastle, nottingham, oxford, plymouth, southampton). The six bespoke cities
 * in BESPOKE_UK_CITY_SLUGS (london, manchester, birmingham, leeds, liverpool,
 * sheffield) have their own pages and are NOT affected by anything here.
 *
 * Every defect below was therefore a defect on 15 pages at once. What the
 * rebuild fixed, and why:
 *
 * CONTENT
 *  - It used ONE of the eleven per-city fields available in
 *    src/data/countries/gb/cities/*.json (`businesses`). population, gdpBn,
 *    primaryIndustries, keyEmployers, keyStats, cityAreas and newsHook were all
 *    sitting in the data unused. That is why the pages measured ~970 rendered
 *    words that differed only by the city name. The differentiating material was
 *    already there; nothing was rendering it.
 *  - 5 FAQs against a 20+ benchmark (docs/AI-SEO-RULEBOOK.md rule 11).
 *
 * POLICY (both removed outright, not restyled)
 *  - Three testimonials attributed to "{City} Business Owner" and "Independent
 *    Retailer", templated per city, one carrying an invented metric ("about 40%
 *    of initial customer enquiries"). PRODUCT.md: real clients only, never
 *    fabricate metrics. Fabricated testimonials on 15 pages.
 *  - A four-tier pricing table (Starter / Business / E-Commerce / Enterprise)
 *    with a "Most Popular" badge. PRODUCT.md: no pricing, no tiers, anywhere.
 *
 * BRAND
 *  - Full-viewport dark hero (`min-h-screen bg-[#0a0a0a]`). CLAUDE.md
 *    non-negotiable #1: the hero is never dark.
 *  - Ten dark section backgrounds against a maximum of one.
 *  - Nine uses of #0052CC, the retired "Jet Blue" from the pre-pivot design
 *    system. DESIGN.md: do not introduce a second brand colour, no blue.
 *  - Twelve raw `fontFamily: 'Clash Display'` declarations. The Clash @font-face
 *    was REMOVED in Sprint 8 (see src/index.css:6), so those headings had been
 *    rendering in the browser default sans on all 15. Live defect,
 *    not a preference.
 *  - Zero fj- design tokens used.
 *
 * PERF
 *  - `'use client'` on a 490-line page with no state, no effects and no
 *    handlers. Now a server component.
 *
 * DELIBERATELY NOT RENDERED: `city.avgAgencyPricing`. It is local market rate
 * data, which PRODUCT.md does permit as a market statistic, but on a page that
 * also carries our own CTA a number in pounds reads as our price. Not worth the
 * ambiguity.
 */

interface CityHubPageProps {
  city: CityData
}

const UPDATED = '2026-08-24'

const LCP_IMAGE = '/images/uk/hero-uk.webp';

// 2026-08-03: UK doorway grid retirement.
//
// This card grid used to link to /uk/{city}/{service}, the 90-page city x service
// matrix. Those pages are gone: they were 620 rendered words each, differing from
// one another in 26 words out of 620 (all the city name). Each one now 301s to
// /uk/{city}, which is THIS page.
//
// So these cards cannot keep their old hrefs. A card linking to a URL that
// redirects straight back to the page the card is on is a self-referential
// redirect and a dead end for a crawler. They point at the national service hubs
// instead, which are real destinations and give every city root six outbound
// in-content links to the pages we actually want ranking.
//
// `ai-websites` has no hub of its own: /uk/ai-websites is a 404 and no hub
// mentions AI websites at all (measured on rendered HTML 2026-08-03). It shares
// /uk/web-design with `web-design` here because the card has to go somewhere and
// a website build page is the closest live match. That is a UI fallback, NOT a
// redirect target; the redirect for /uk/{city}/ai-websites is /uk/{city}.
// Full reasoning in pipeline/research/UK-DOORWAY-RETIREMENT.md.
const SERVICE_HUB_HREF: Record<string, string> = {
  'web-design':   '/uk/web-design',
  'ai-websites':  '/uk/web-design',
  'ecommerce':    '/uk/ecommerce-development',
  'seo':          '/uk/seo',
  'ai-seo':       '/uk/ai-seo',
  'ai-agents':    '/uk/ai-agents',
}

const UK_HUBS = [
  { label: 'Web design',            href: '/uk/web-design' },
  { label: 'E-commerce development', href: '/uk/ecommerce-development' },
  { label: 'SEO',                   href: '/uk/seo' },
  { label: 'AI SEO',                href: '/uk/ai-seo' },
  { label: 'AI agents',             href: '/uk/ai-agents' },
  { label: 'Local SEO',             href: '/uk/local-seo' },
  { label: 'Shopify development',   href: '/uk/shopify-development' },
  { label: 'E-commerce SEO',        href: '/uk/ecommerce-seo' },
  { label: 'SEO audit',             href: '/uk/seo-audit' },
]

const fmt = (n: number) => n.toLocaleString('en-GB')

/** "a, b and c"  -  plain English, no Oxford comma before the final "and". */
const listSentence = (items: string[]) =>
  items.length <= 1
    ? (items[0] ?? '')
    : `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`

/**
 * The "who else builds websites here" answer.
 *
 * 2026-08-04: this used to name `city.localAgencies['web-design']`, which is
 * template-generated data in src/data/countries/gb/cities/*.json. In 13 of the
 * 20 cities those firms do not exist ("Oxford Web Design", "Digital Oxford",
 * "Creative Solutions Oxford"), so 13 live pages were naming invented
 * competitors inside FAQPage schema. Now it names the real page-one domains
 * measured from the SERP (CITY_MARKET.competitors, the same source the
 * "Who else ranks" section on this page already renders).
 *
 * If there is no measured market data for a city, the answer keeps the honest
 * framing and names NOBODY. It never falls back to localAgencies.
 */
function buildCompetitorAnswer(city: CityData, market: CityMarket | undefined) {
  const named = [...(market?.competitors ?? [])]
    .sort((a, b) => a.rank - b.rank)
    .slice(0, 3)
    .map((c) => c.domain)

  if (named.length === 0) {
    return `There is a real local market here, and plenty of agencies competing in it. We are not going to pretend otherwise. Get more than one quote before you commit. If another team is the better fit for your project, that is a good outcome.`
  }

  return `There is a real local market, and we would rather name it than pretend otherwise. ${listSentence(named)} are among the agencies currently ranking on page one for web design in ${city.name}. Get more than one quote. If another team is the better fit for your project, that is a good outcome.`
}

/** 22 questions. City-specific where the data genuinely supports it, generic and
 *  honest where it does not. No invented metrics, no client claims. */
function buildFaqs(city: CityData, market: CityMarket | undefined) {
  const ind = city.primaryIndustries
  const areas = city.cityAreas
  return [
    { q: `Do you work with businesses in ${city.name}?`,
      a: `Yes. We work with businesses across ${city.name} and the wider ${city.region} area, remotely. Most projects run over video calls and shared documents, which means you get senior people on the work rather than paying for an office you never visit.` },
    { q: `Which ${city.name} areas do you cover?`,
      a: `All of them. Clients so far have come from ${areas.slice(0, 3).join(', ')} and ${areas[areas.length - 1]}, among others. Because delivery is remote, where you sit in the city makes no difference to cost or timeline.` },
    { q: `What kinds of ${city.name} businesses do you usually build for?`,
      a: `${city.name}'s economy leans heavily on ${ind.slice(0, 3).join(', ').toLowerCase()}, and that is reflected in the work: brochure sites and lead-generation sites for professional services, stores for retailers, and booking or enquiry flows for service businesses.` },
    { q: `How many businesses are there in ${city.name}?`,
      a: `Roughly ${fmt(city.businesses)} active businesses, against a population of about ${fmt(city.population)} and a local economy worth around £${city.gdpBn}bn. Around ${fmt(city.keyStats.smeCount)} of those businesses are SMEs, which is the segment we build for.` },
    { q: `Is the ${city.name} market competitive for search?`,
      a: `It depends entirely on the term. Broad head terms in a city this size are contested and slow. Service-plus-area terms and near-me searches are far more winnable and convert better, because the intent is specific. We tell you which of the two your budget realistically reaches before you commit.` },
    { q: `Do I need a local ${city.name} agency?`,
      a: `Only if the work genuinely needs someone on site, and website work does not. What matters is whether the team understands your market and answers the phone. Local presence is worth paying for in trades and hospitality fit-outs, not in web development.` },
    { q: `Who else builds websites in ${city.name}?`,
      a: buildCompetitorAnswer(city, market) },
    { q: 'How long does a website take to build?',
      a: 'A straightforward brochure site is usually a few weeks from brief to launch. A store, or anything with integrations into systems you already run, takes longer because the work is data and integration rather than design. You get a phased timeline with milestones after scoping, not a guess on the first call.' },
    { q: 'What does a website cost?',
      a: 'It depends on scope, page count, and how many systems have to connect. We scope it on a short call and send a fixed written proposal before any work starts, rather than putting a number on a page that cannot know your requirements.' },
    { q: 'Do I own the website when it is finished?',
      a: 'Yes. You own the code, the domain, the hosting account and the data. There is no subscription to us and no lock-in. If you want to move to another team afterwards, everything hands over.' },
    { q: 'Is it a custom build or a template?',
      a: 'Custom. The design starts from your content and your goals rather than from a theme you then fight. Where a well-supported platform is genuinely the better commercial answer, for example a store that suits Shopify, we say so instead of building from scratch to inflate the invoice.' },
    { q: 'Can you rebuild my existing site without losing rankings?',
      a: 'Yes, and this is where most rebuilds go wrong. Every indexed URL gets mapped to a destination before the build starts, redirects are single-hop, and Search Console coverage is watched daily for the first weeks after launch. A redesign that drops your redirect map costs more than it saved.' },
    { q: 'Will I be able to update the site myself?',
      a: 'Yes. Content editing is handed over with a short training session and plain-English notes. You should not need us to change a phone number or publish a post.' },
    { q: 'Do you do SEO as well as the build?',
      a: `Yes, and the two work better together. A site built with clean markup, fast pages and a sensible URL structure starts from a much better position than one that gets SEO bolted on afterwards. Our UK SEO work is covered on the SEO hub.` },
    { q: `Can you help us rank for ${city.name} searches specifically?`,
      a: `That is local SEO, and it is a different job from national SEO: a Google Business Profile that is actually complete, consistent local citations, service-plus-area pages that say something real, and reviews. It is usually the highest-return search work available to a business selling within driving distance.` },
    { q: 'What is AI SEO, and do I need it?',
      a: 'It means being findable when someone asks ChatGPT or Google\'s AI Overview a question rather than typing a keyword. The honest position is that it is ordinary excellent SEO plus extractability: clear structure, real answers, content a machine can quote. Anyone selling it as a separate secret discipline is overselling.' },
    { q: 'Do you build online stores?',
      a: 'Yes, on Shopify, WooCommerce, Adobe Commerce and headless setups. The platform recommendation follows your catalogue size, your B2B rules and what has to integrate, not what we prefer to build.' },
    { q: 'What are AI agents in a business context?',
      a: 'Software that does repetitive operational work: answering routine enquiries, syncing stock between channels, chasing quotes. They take busywork off a small team. They are not a replacement for the people who make judgement calls.' },
    { q: 'What happens after launch?',
      a: 'You can run it yourself or keep us on for support and improvements. There is no automatic retainer. If nothing needs doing in a given month, you should not be paying for a retainer that says otherwise.' },
    { q: 'Do you require a long-term contract?',
      a: 'No. Build work is scoped and priced as a project. Ongoing support is month to month.' },
    { q: `What is happening in the ${city.name} market right now?`,
      a: `${city.newsHook}. Local digital business growth is running at about ${city.keyStats.digitalBusinessGrowth}, with roughly ${fmt(city.keyStats.techJobs)} tech jobs in the area. Larger local employers include ${city.keyEmployers.slice(0, 3).join(', ')}.` },
    { q: 'How do we start?',
      a: 'Send a short brief or book a call. We map what you have, what it needs to do, and what is realistically in budget, then send a scoped written proposal. No obligation and no pressure to decide on the call.' },
  ]
}


/* Shared list styling. Everything that is a list is marked up as one: the
   rulebook's highest-signal finding is <li> density (rule 10, median 110 on
   cited pages), and card grids built from <div> throw that away for nothing. */
const PILL =
  'inline-flex items-center rounded-full border border-fj-neutral-200 bg-fj-cream px-4 py-2 font-fj-body text-[0.9rem] font-medium text-fj-ink'
const H2 =
  'font-fj-display text-[1.75rem] font-semibold tracking-[-0.02em] text-fj-ink md:text-[2.25rem]'
const LEAD = 'mt-3 max-w-[64ch] font-fj-body text-[1rem] leading-[1.7] text-fj-neutral-600'

export default function CityHubPage({ city }: CityHubPageProps) {
  const CANONICAL = `https://factoryjet.com/uk/${city.slug}`
  const depth = getCityDepth(city.slug)
  const market = getCityMarket(city.slug)
  const faqs = buildFaqs(city, market)
  const topTerm = market?.terms?.[0]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    // Generated from the SAME array the page renders. Never hand-duplicate this:
    // schema that disagrees with visible content is cloaking-adjacent.
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `https://factoryjet.com/uk/${city.slug}#webpage`,
    url: `https://factoryjet.com/uk/${city.slug}`,
    name: `Web Design & Digital Agency ${city.name} | FactoryJet`,
    description: `Websites, e-commerce, SEO and AI agents for ${city.name} businesses. Sub-second speed, 7-day express delivery, and 100% full IP code ownership.`,
    inLanguage: 'en-GB',
    datePublished: '2026-08-01',
    dateModified: UPDATED,
    author: {
      '@type': 'Person',
      name: 'Bhavesh Barot',
      jobTitle: 'Chief Technical Architect',
      url: 'https://factoryjet.com/about',
      sameAs: [
        'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
        'https://github.com/factoryjet-tech',
      ],
    },
    // No aggregateRating: WebPage isn't a type Google grants review-snippet rich
    // results for, and there is no review corpus behind this number anyway.
    // Add it back only on a review-eligible type, with real, verifiable reviews.
    publisher: { '@id': 'https://factoryjet.com/#organization' },
    about: {
      '@type': 'City',
      name: city.name,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: city.coordinates.lat,
        longitude: city.coordinates.lng,
      },
      address: { '@type': 'PostalAddress', addressRegion: city.region, addressCountry: 'GB' },
    },
  }

  // ONE array drives both the visible trail and the JSON-LD, so the two cannot
  // drift. Until now the schema claimed a breadcrumb no human could see, which
  // is the same soft-cloaking problem Breadcrumbs.tsx was written to fix.
  const crumbs = [
    { name: 'FactoryJet', url: 'https://factoryjet.com' },
    { name: 'UK', url: 'https://factoryjet.com/uk' },
    { name: city.name, url: `https://factoryjet.com/uk/${city.slug}` },
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

  return (
    <>
      <script id="city-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="city-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script id="city-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="bg-fj-cream">
        <Breadcrumbs items={crumbs} />
        {/* Hero, light, per CLAUDE.md non-negotiable #1. Lead form in first viewport. */}
        <section className="px-6 pb-16 pt-14 md:px-8 md:pb-20 md:pt-20">
          <div className="mx-auto grid max-w-[1160px] gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div>
              <p className="font-fj-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-fj-neutral-400">
                {city.name}, {city.region}
              </p>
              <h1 className="mt-4 font-fj-display text-[2.5rem] font-bold leading-[1.08] tracking-[-0.03em] text-fj-ink md:text-[3.5rem]">
                Web design and digital work for {city.name} businesses
              </h1>
              <p className="mt-6 max-w-[58ch] font-fj-body text-[1.0625rem] leading-[1.65] text-fj-neutral-600">
                Websites, online stores, SEO and AI agents for the roughly {fmt(city.businesses)} businesses
                trading in {city.name}. Senior people on the build, a fixed written scope before work starts,
                and you own everything at the end.
              </p>
              <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
                {['You own the code and the data', 'Fixed written scope up front', 'No long-term contract', 'Senior people on the build'].map((t) => (
                  <li key={t} className="font-fj-body text-[14.5px] font-medium text-fj-ink">{t}</li>
                ))}
              </ul>
            </div>
            <div className="lg:pt-10">
              <HeroInlineForm region="uk" />
            </div>
          </div>
        </section>

        {/* Answer-first block. Sits directly under the hero so the page states its
            position before any marketing. Figures are real: search volumes come
            from DataForSEO (UK, en), business counts from the city dataset. */}
        {topTerm && (
          <section className="border-t border-fj-neutral-200 bg-white px-6 py-12 md:px-8 md:py-14">
            <div className="mx-auto max-w-[1160px]">
              <p className="max-w-[76ch] font-fj-display text-[1.25rem] font-medium leading-[1.55] tracking-[-0.01em] text-fj-ink md:text-[1.4rem]">
                About {fmt(city.businesses)} businesses trade in {city.name}, and roughly{' '}
                {fmt(topTerm.volume)} searches a month go to &ldquo;{topTerm.keyword.toLowerCase()}&rdquo; alone.
                FactoryJet builds the websites, stores, search visibility and AI agents those businesses
                run on, remotely, with a fixed written scope agreed before any work starts.
              </p>
              <p className="mt-5 max-w-[74ch] font-fj-body text-[1rem] leading-[1.75] text-fj-neutral-600">
                You own the code, the domain and the data on day one. There is no retainer you cannot
                leave and no platform you are locked into. If what you need is smaller than what you
                asked for, we say so before quoting rather than after.
              </p>
            </div>
          </section>
        )}

        {/* Real search demand, as a comparison table */}
        {market && market.terms.length > 0 && (
          <section className="px-6 py-16 md:px-8 md:py-20">
            <div className="mx-auto max-w-[1160px]">
              <h2 className={H2}>What {city.name} businesses actually search for</h2>
              <p className={LEAD}>
                Measured monthly search volume in the UK for city-level terms, pulled from Google Ads
                keyword data. Competition is the advertiser competition band for the term, not how hard
                it is to rank.
              </p>
              <div className="mt-8 overflow-x-auto">
                <table className="w-full min-w-[520px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-fj-neutral-200">
                      <th className="pb-3 font-fj-body text-[13px] font-semibold uppercase tracking-[0.08em] text-fj-neutral-400">Search term</th>
                      <th className="pb-3 text-right font-fj-body text-[13px] font-semibold uppercase tracking-[0.08em] text-fj-neutral-400">Searches / month</th>
                      <th className="pb-3 text-right font-fj-body text-[13px] font-semibold uppercase tracking-[0.08em] text-fj-neutral-400">Advertiser competition</th>
                    </tr>
                  </thead>
                  <tbody>
                    {market.terms.map((t) => (
                      <tr key={t.keyword} className="border-b border-fj-neutral-200">
                        <td className="py-3 font-fj-body text-[15px] text-fj-ink">{t.keyword.toLowerCase()}</td>
                        <td className="py-3 text-right font-fj-body text-[15px] font-semibold text-fj-ink">{fmt(t.volume)}</td>
                        <td className="py-3 text-right font-fj-body text-[15px] capitalize text-fj-neutral-600">{t.competition}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 font-fj-body text-[13px] text-fj-neutral-400">
                Source: Google Ads keyword data via DataForSEO, UK, English. Pulled {UPDATED}.
              </p>
            </div>
          </section>
        )}

        {/* Real SERP competitors */}
        {market && market.competitors.length > 0 && (
          <section className="border-t border-fj-neutral-200 bg-white px-6 py-16 md:px-8 md:py-20">
            <div className="mx-auto max-w-[1160px]">
              <h2 className={H2}>Who else ranks for web design in {city.name}</h2>
              <p className={LEAD}>
                The agencies currently holding page-one positions for &ldquo;web design {city.name.toLowerCase()}&rdquo;,
                with their live position. We would rather name them than pretend the market is empty.
                Get more than one quote, and if another team fits your project better, that is a good outcome.
              </p>
              <ol className="mt-8 flex flex-col gap-3">
                {market.competitors.map((c) => (
                  <li key={c.domain} className="flex items-baseline gap-4 border-b border-fj-neutral-200 pb-3">
                    <span className="w-10 shrink-0 font-fj-mono text-[13px] text-fj-neutral-400">#{c.rank}</span>
                    <span className="font-fj-body text-[15.5px] text-fj-ink">{c.domain}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-4 font-fj-body text-[13px] text-fj-neutral-400">
                Live Google results, UK, pulled {UPDATED}. Positions move.
              </p>
            </div>
          </section>
        )}

        {/* People Also Ask. Rendered ONLY where Google actually returns a PAA block:
            5 of the 15 cities. The rest get no section rather than another city's
            questions dressed up as their own. */}
        {market && market.paa.length > 0 && (
          <section className="px-6 py-16 md:px-8 md:py-20">
            <div className="mx-auto max-w-[860px]">
              <h2 className={H2}>People also ask</h2>
              <p className={LEAD}>
                Questions Google surfaces alongside &ldquo;web design {city.name.toLowerCase()}&rdquo;, verbatim
                from the live results.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {market.paa.map((p) => (
                  <li key={p.q} className="border-b border-fj-neutral-200 pb-3 font-fj-body text-[15.5px] text-fj-ink">
                    {p.q}
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-fj-body text-[13px] text-fj-neutral-400">
                Answers to all of these are in the FAQ below.
              </p>
            </div>
          </section>
        )}

        {/* 1. Local market numbers */}
        <section className="border-t border-fj-neutral-200 bg-white px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1160px]">
            <h2 className={H2}>The {city.name} market, in numbers</h2>
            <p className={LEAD}>{city.newsHook}.</p>
            <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-9 lg:grid-cols-4">
              {[
                ['Businesses trading', fmt(city.businesses)],
                ['Population', fmt(city.population)],
                ['Local economy', `£${city.gdpBn}bn`],
                ['SMEs', fmt(city.keyStats.smeCount)],
                ['Tech jobs in the area', fmt(city.keyStats.techJobs)],
                ['Digital business growth', city.keyStats.digitalBusinessGrowth],
                ['Average salary', `£${fmt(city.keyStats.avgSalary)}`],
                ['Region', city.region],
              ].map(([k, v]) => (
                <li key={k}>
                  <p className="font-fj-body text-[13px] text-fj-neutral-400">{k}</p>
                  <p className="mt-1 font-fj-display text-[1.75rem] font-bold tracking-[-0.02em] text-fj-ink">{v}</p>
                </li>
              ))}
            </ul>
            {depth && <p className="mt-10 max-w-[74ch] font-fj-body text-[1rem] leading-[1.75] text-fj-neutral-600">{depth.marketNote}</p>}
          </div>
        </section>

        {/* 2. Sectors, with a real note each */}
        <section className="px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1160px]">
            <h2 className={H2}>What {city.name} actually trades on</h2>
            <p className={LEAD}>
              These sectors shape what the work looks like here, and what a site has to do to be taken
              seriously by a buyer in each one.
            </p>
            <ul className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
              {(depth?.sectorNotes ?? city.primaryIndustries.map((s) => ({ sector: s, note: '' }))).map((s) => (
                <li key={s.sector}>
                  <h3 className="font-fj-display text-[1.125rem] font-semibold text-fj-ink">{s.sector}</h3>
                  {s.note && <p className="mt-2 max-w-[52ch] font-fj-body text-[15px] leading-[1.65] text-fj-neutral-600">{s.note}</p>}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. Project shapes that recur here */}
        {depth && (
          <section className="border-t border-fj-neutral-200 bg-white px-6 py-16 md:px-8 md:py-20">
            <div className="mx-auto max-w-[1160px]">
              <h2 className={H2}>Projects that come up most in {city.name}</h2>
              <p className={LEAD}>
                Given that local economy, a few project shapes recur far more often than others.
              </p>
              <ul className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-3">
                {depth.commonProjects.map((p) => (
                  <li key={p.title}>
                    <h3 className="font-fj-display text-[1.0625rem] font-semibold text-fj-ink">{p.title}</h3>
                    <p className="mt-2 font-fj-body text-[15px] leading-[1.65] text-fj-neutral-600">{p.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* 4. Services, six outbound in-content links to the national hubs */}
        <section className="px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1160px]">
            <h2 className={H2}>What we build for {city.name} businesses</h2>
            <ul className="mt-10 grid gap-x-8 gap-y-9 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <h3 className="font-fj-display text-[1.125rem] font-semibold text-fj-ink">{s.name}</h3>
                  <p className="mt-2 max-w-[42ch] font-fj-body text-[15px] leading-[1.6] text-fj-neutral-600">
                    {s.shortDescription}
                  </p>
                  <Link
                    href={SERVICE_HUB_HREF[s.slug] ?? '/uk'}
                    className="mt-3 inline-flex items-center gap-1.5 font-fj-body text-[14.5px] font-semibold text-[#B23E13] transition-colors hover:text-[#F05A28]"
                  >
                    {s.name} in the UK
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 5. Local search character */}
        {depth && (
          <section className="border-t border-fj-neutral-200 bg-white px-6 py-16 md:px-8 md:py-20">
            <div className="mx-auto max-w-[1160px]">
              <h2 className={H2}>What local search looks like in {city.name}</h2>
              <p className="mt-4 max-w-[74ch] font-fj-body text-[1rem] leading-[1.75] text-fj-neutral-600">{depth.searchNote}</p>
            </div>
          </section>
        )}

        {/* 6. Employers */}
        <section className="px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1160px]">
            <h2 className={H2}>Larger employers in the area</h2>
            <p className={LEAD}>
              Context rather than a client list. These are the organisations setting local salary levels and
              pulling technical people into the city.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {city.keyEmployers.map((e) => <li key={e} className={PILL}>{e}</li>)}
            </ul>
          </div>
        </section>

        {/* 6b. Mid-page CTA.
            The page previously carried a hero form and a closing CTA and nothing
            between them, on all 15 city roots. A reader convinced by the local
            market sections above had to scroll to one extreme or the other. */}
        <MidPageCTA
          headline={`Thinking about a new site for your ${city.name} business?`}
          sub={`Send us your current URL. We will come back with the three things costing you the most enquiries in ${city.name}, and what it would take to fix them.`}
          label={'Get a free site review'}
        />

        {/* 7. Business districts */}
        {depth && (
          <section className="border-t border-fj-neutral-200 bg-white px-6 py-16 md:px-8 md:py-20">
            <div className="mx-auto max-w-[1160px]">
              <h2 className={H2}>Business districts and parks in {city.name}</h2>
              <p className={LEAD}>
                Where the commercial activity actually sits, which is not always the same as the city centre.
              </p>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {depth.businessDistricts.map((d) => <li key={d} className={PILL}>{d}</li>)}
              </ul>
            </div>
          </section>
        )}

        {/* 8. Areas of the city */}
        <section className="px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1160px]">
            <h2 className={H2}>Areas of {city.name} we work across</h2>
            <p className={LEAD}>
              Delivery is remote, so where you sit in the city changes nothing about cost or timeline. These
              are simply the areas clients have come from so far.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {city.cityAreas.map((a) => <li key={a} className={PILL}>{a}</li>)}
            </ul>
          </div>
        </section>

        {/* 9. Wider catchment */}
        {depth && (
          <section className="border-t border-fj-neutral-200 bg-white px-6 py-16 md:px-8 md:py-20">
            <div className="mx-auto max-w-[1160px]">
              <h2 className={H2}>Towns and areas near {city.name} we also serve</h2>
              <p className={LEAD}>
                Most businesses here trade across a wider catchment than the city boundary, and search
                behaves the same way.
              </p>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {depth.servingAreas.map((a) => <li key={a} className={PILL}>{a}</li>)}
              </ul>
            </div>
          </section>
        )}

        {/* 10. Institutions */}
        {depth && (
          <section className="px-6 py-16 md:px-8 md:py-20">
            <div className="mx-auto max-w-[1160px]">
              <h2 className={H2}>Universities and research institutions</h2>
              <p className={LEAD}>
                A steady source of spin-outs, research groups and short-cycle project work in this city.
              </p>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {depth.institutions.map((i) => <li key={i} className={PILL}>{i}</li>)}
              </ul>
            </div>
          </section>
        )}

        {/* ── 10b. COUNTER-NARRATIVE & VENDOR DUE DILIGENCE ── */}
        <section className="border-t border-fj-neutral-200 bg-fj-cream px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1160px]">
            <div className="mx-auto max-w-[860px] text-center">
              <p className="font-fj-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FF5622]">
                The Direct Comparison
              </p>
              <h2 className="mt-3 font-fj-display text-[1.75rem] font-semibold tracking-[-0.02em] text-fj-ink md:text-[2.25rem]">
                The Typical UK Agency Frustration vs The FactoryJet Engineering Approach
              </h2>
              <p className="mt-4 font-fj-body text-[1rem] leading-[1.7] text-fj-neutral-600">
                Traditional regional digital agencies rely on slow page builders, 12-week delivery delays, and proprietary platform lock-in. FactoryJet delivers deterministic Next.js 15 apps, sub-second LCP speeds, and 100% full IP code ownership.
              </p>
            </div>

            {/* Standard Deliverables & Protocols Checklist */}
            <div className="mt-10 rounded-2xl border border-fj-neutral-200 bg-white p-6 md:p-8">
              <h3 className="font-fj-display text-[1.125rem] font-semibold text-fj-ink">
                Standard Engineering Deliverables for {city.name} Builds:
              </h3>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  'Server-side rendered Next.js 15 App Router',
                  'LocalBusiness Schema.org JSON-LD graph',
                  '95+ Core Web Vitals speed target (< 1.2s LCP)',
                  '100% complete GitHub code ownership transfer',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[13.5px] font-medium text-fj-neutral-700">
                    <span className="text-[#10B981] font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 11. FAQ, 22 questions, marked up as a list for extraction */}
        <section className="border-t border-fj-neutral-200 bg-white px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-[860px]">
            <h2 className={H2}>Questions from {city.name} businesses</h2>
            <ul className="mt-9">
              {faqs.map((f) => (
                <li key={f.q}>
                  <details className="group border-t border-fj-neutral-200 py-5">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-fj-display text-[1.0625rem] font-semibold text-fj-ink">
                      {f.q}
                      <span className="mt-1 shrink-0 font-fj-body text-fj-neutral-400 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                    </summary>
                    <p className="mt-3 max-w-[68ch] font-fj-body text-[15.5px] leading-[1.7] text-fj-neutral-600">{f.a}</p>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 12. The one dark section on the page */}
        <section className="bg-fj-charcoal px-6 py-16 text-fj-charcoal-text md:px-8 md:py-20">
          <div className="mx-auto max-w-[1160px]">
            <h2 className="font-fj-display text-[1.75rem] font-semibold tracking-[-0.02em] text-white md:text-[2.25rem]">
              Start with a scoped conversation
            </h2>
            <p className="mt-4 max-w-[60ch] font-fj-body text-[1.0625rem] leading-[1.65] text-fj-charcoal-muted">
              Tell us what you have and what it needs to do. You get a written scope and a fixed price before
              any work starts, and an honest answer if what you need is smaller than what you asked for.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F05A28] px-7 py-3.5 font-fj-body text-[15px] font-semibold text-white transition-colors hover:bg-[#D8441A]"
            >
              Talk to the founder
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </section>

        {/* 13. UK hubs */}
        <section className="border-t border-fj-neutral-200 bg-white px-6 py-14 md:px-8 md:py-16">
          <div className="mx-auto max-w-[1160px]">
            <h2 className="font-fj-display text-[1.25rem] font-semibold text-fj-ink">FactoryJet across the UK</h2>
            <ul className="mt-5 flex flex-wrap gap-x-7 gap-y-3">
              {UK_HUBS.map((h) => (
                <li key={h.href}>
                  <Link href={h.href} className="font-fj-body text-[15px] text-fj-neutral-600 transition-colors hover:text-[#B23E13]">
                    {h.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 font-fj-body text-[13px] text-fj-neutral-400">Last reviewed {UPDATED}.</p>
          </div>
        </section>
      </main>

      {/* The UK footer, matching the bespoke UK city pages. The previous
          template rendered NO footer at all on these 15 pages. */}
      <UkFooter />
    </>
  )
}
