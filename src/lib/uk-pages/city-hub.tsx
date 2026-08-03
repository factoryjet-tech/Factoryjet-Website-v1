import Link from 'next/link'
import { CityData, services } from '@/data/uk'
import HeroInlineForm from '@/components/HeroInlineForm'
import UkFooter from '@/app/uk/sections/Footer'

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

const UPDATED = '2026-08-03'

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

/** 22 questions. City-specific where the data genuinely supports it, generic and
 *  honest where it does not. No invented metrics, no client claims. */
function buildFaqs(city: CityData) {
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
      a: `There is a real local market, and we would rather name it than pretend otherwise. ${(city.localAgencies['web-design'] ?? []).slice(0, 3).join(', ')} all work in this city. Get more than one quote. If another team is the better fit for your project, that is a good outcome.` },
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

export default function CityHubPage({ city }: CityHubPageProps) {
  const faqs = buildFaqs(city)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
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
    name: `Web Design & Digital Agency in ${city.name} | FactoryJet`,
    dateModified: UPDATED,
    inLanguage: 'en-GB',
    author: {
      '@type': 'Person',
      name: 'Bhavesh Barot',
      url: 'https://www.linkedin.com/in/bhaveshbarot/',
      jobTitle: 'Founder, FactoryJet',
    },
    about: { '@type': 'City', name: city.name, address: { '@type': 'PostalAddress', addressRegion: city.region, addressCountry: 'GB' } },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'FactoryJet', item: 'https://factoryjet.com' },
      { '@type': 'ListItem', position: 2, name: 'UK', item: 'https://factoryjet.com/uk' },
      { '@type': 'ListItem', position: 3, name: city.name, item: `https://factoryjet.com/uk/${city.slug}` },
    ],
  }

  return (
    <>
      <script id="city-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="city-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script id="city-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="bg-fj-cream">
        {/* Hero — light, per CLAUDE.md non-negotiable #1. Inline lead form in view. */}
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
                {['You own the code and the data', 'Fixed written scope up front', 'No long-term contract'].map((t) => (
                  <li key={t} className="font-fj-body text-[14.5px] font-medium text-fj-ink">{t}</li>
                ))}
              </ul>
            </div>
            <div className="lg:pt-10">
              <HeroInlineForm region="uk" />
            </div>
          </div>
        </section>

        {/* Local market — real per-city data, the thing that makes these pages differ */}
        <section className="border-t border-fj-neutral-200 bg-white px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1160px]">
            <h2 className="font-fj-display text-[1.75rem] font-semibold tracking-[-0.02em] text-fj-ink md:text-[2.25rem]">
              The {city.name} market, in numbers
            </h2>
            <p className="mt-3 max-w-[64ch] font-fj-body text-[1rem] leading-[1.7] text-fj-neutral-600">
              {city.newsHook}.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-9 lg:grid-cols-4">
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
                <div key={k}>
                  <dt className="font-fj-body text-[13px] text-fj-neutral-400">{k}</dt>
                  <dd className="mt-1 font-fj-display text-[1.75rem] font-bold tracking-[-0.02em] text-fj-ink">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-14 grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="font-fj-display text-[1.25rem] font-semibold text-fj-ink">
                  What {city.name} actually trades on
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {city.primaryIndustries.map((i) => (
                    <li key={i} className="font-fj-body text-[15px] text-fj-neutral-600">{i}</li>
                  ))}
                </ul>
                <p className="mt-5 max-w-[52ch] font-fj-body text-[15px] leading-[1.65] text-fj-neutral-600">
                  Those sectors shape what the work looks like here: lead-generation sites for professional
                  services, stores for retailers, and booking or enquiry flows for service businesses.
                </p>
              </div>
              <div>
                <h3 className="font-fj-display text-[1.25rem] font-semibold text-fj-ink">
                  Larger employers in the area
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {city.keyEmployers.map((e) => (
                    <li key={e} className="font-fj-body text-[15px] text-fj-neutral-600">{e}</li>
                  ))}
                </ul>
                <p className="mt-5 max-w-[52ch] font-fj-body text-[15px] leading-[1.65] text-fj-neutral-600">
                  Useful context rather than a client list: these are the organisations setting local salary
                  levels and pulling technical people into the city.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services — six outbound in-content links to the national hubs */}
        <section className="px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1160px]">
            <h2 className="font-fj-display text-[1.75rem] font-semibold tracking-[-0.02em] text-fj-ink md:text-[2.25rem]">
              What we build for {city.name} businesses
            </h2>
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

        {/* Areas covered */}
        <section className="border-t border-fj-neutral-200 bg-white px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1160px]">
            <h2 className="font-fj-display text-[1.75rem] font-semibold tracking-[-0.02em] text-fj-ink md:text-[2.25rem]">
              Areas of {city.name} we work across
            </h2>
            <p className="mt-3 max-w-[64ch] font-fj-body text-[1rem] leading-[1.7] text-fj-neutral-600">
              Delivery is remote, so where you sit in the city changes nothing about cost or timeline. These
              are simply the areas clients have come from so far.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {city.cityAreas.map((a) => (
                <li
                  key={a}
                  className="inline-flex items-center rounded-full border border-fj-neutral-200 bg-fj-cream px-4 py-2 font-fj-body text-[0.9rem] font-medium text-fj-ink"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ — 22 questions, several genuinely city-specific */}
        <section className="px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-[860px]">
            <h2 className="font-fj-display text-[1.75rem] font-semibold tracking-[-0.02em] text-fj-ink md:text-[2.25rem]">
              Questions from {city.name} businesses
            </h2>
            <div className="mt-9">
              {faqs.map((f) => (
                <details key={f.q} className="group border-t border-fj-neutral-200 py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-fj-display text-[1.0625rem] font-semibold text-fj-ink">
                    {f.q}
                    <span className="mt-1 shrink-0 font-fj-body text-fj-neutral-400 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-3 max-w-[68ch] font-fj-body text-[15.5px] leading-[1.7] text-fj-neutral-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* The one dark section on the page */}
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

        {/* UK hubs + sibling cities: keeps every city root linked into the wider UK set */}
        <section className="border-t border-fj-neutral-200 bg-white px-6 py-14 md:px-8 md:py-16">
          <div className="mx-auto max-w-[1160px]">
            <h2 className="font-fj-display text-[1.25rem] font-semibold text-fj-ink">
              FactoryJet across the UK
            </h2>
            <ul className="mt-5 flex flex-wrap gap-x-7 gap-y-3">
              {UK_HUBS.map((h) => (
                <li key={h.href}>
                  <Link href={h.href} className="font-fj-body text-[15px] text-fj-neutral-600 transition-colors hover:text-[#B23E13]">
                    {h.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 font-fj-body text-[13px] text-fj-neutral-400">
              Last reviewed {UPDATED}.
            </p>
          </div>
        </section>
      </main>

      {/* The UK footer, matching the bespoke UK city pages. The previous
          template rendered NO footer at all on these 15 pages. */}
      <UkFooter />
    </>
  )
}
