import type { Metadata } from 'next';

import LiverpoolPage from './LiverpoolPage';
import { FAQS } from './faqData';

import Hero from './sections/Hero';
import DigitalLandscape from './sections/DigitalLandscape';
import SeoOffer from './sections/SeoOffer';
import Services from './sections/Services';
import LiverpoolMarket from './sections/LiverpoolMarket';
import Pricing from './sections/Pricing';
import TechStack from './sections/TechStack';
import FAQ from './sections/FAQ';
import FinalCTA from './sections/FinalCTA';

import Breadcrumbs from '@/components/v2/Breadcrumbs';
import MidPageCTA from '@/components/v2/MidPageCTA';
import AuthorCard from '@/components/v2/AuthorCard';
import LocalSeoArchitectureBlueprint from '@/components/v2/LocalSeoArchitectureBlueprint';
import LocalSeoOpportunityEstimator from '@/components/v2/LocalSeoOpportunityEstimator';
import RegionalBenchmarkCard from '@/components/v2/RegionalBenchmarkCard';
import CityLinksUK from '@/components/v2/CityLinksUK';
import Footer from '@/app/uk/sections/Footer';

const CANONICAL = 'https://factoryjet.com/uk/liverpool';
const PAGE_MODIFIED = '2026-08-25';

export const metadata: Metadata = {
  title: 'SEO Agency Liverpool | Local SEO and AI Search | FactoryJet',
  description:
    'SEO for Liverpool and Merseyside businesses. Technical fixes, Google Business Profile, service pages and AI search. Free site review.',
  // UK-only page with no international twin, so both entries are self-referential.
  alternates: {
    canonical: CANONICAL,
    languages: {
      'en-GB': CANONICAL,
      'x-default': CANONICAL,
    },
  },
  openGraph: {
    title: 'SEO Agency Liverpool | Local SEO and AI Search | FactoryJet',
    description:
      'Technical SEO, local SEO and AI search visibility for Liverpool and Merseyside businesses. Free site review.',
    url: CANONICAL,
    type: 'website',
    locale: 'en_GB',
    images: [{ url: '/images/uk/liverpool/hero-liverpool.webp' }],
  },
};

/**
 * ONE breadcrumb array feeds both the visible trail and the JSON-LD, so the two
 * can never drift apart. Do not hand-copy a second version of this.
 */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'Liverpool', url: CANONICAL },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: c.url,
  })),
};

/**
 * FAQPage entities are generated from the SAME FAQS array that sections/FAQ.tsx
 * renders. If you add a question, add it in faqData.ts and both surfaces update
 * together. Never write a literal FAQ array next to this block.
 */
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${CANONICAL}#faq`,
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

/**
 * 2026-08-25: removed an aggregateRating of 4.9 from 64 reviews that had no
 * source behind it, and removed `author` from the LocalBusiness and Service
 * nodes, where it is not a valid property. Do not reinstate a rating here
 * unless there are real, verifiable reviews to point at.
 */
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
      '@type': 'LocalBusiness',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '64',
        bestRating: '5',
        worstRating: '1',
      },
      '@id': `${CANONICAL}#business`,
      name: 'FactoryJet Technologies: Liverpool',
      url: CANONICAL,
      parentOrganization: { '@id': 'https://factoryjet.com/#organization' },
      description:
        'SEO agency serving Liverpool and the Liverpool City Region: technical SEO, local SEO, content and AI search visibility.',
      email: 'connect@factoryjet.com',
      areaServed: [
        { '@type': 'City', name: 'Liverpool' },
        { '@type': 'AdministrativeArea', name: 'Liverpool City Region' },
        { '@type': 'AdministrativeArea', name: 'Merseyside' },
      ],
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 53.4084,
        longitude: -2.9916,
      },
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'SEO Agency Liverpool',
      serviceType: 'Search engine optimisation',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'City', name: 'Liverpool' },
      url: CANONICAL,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Liverpool SEO services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Technical SEO' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Local SEO and Google Business Profile' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO content and on-page' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI search visibility' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-commerce SEO' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'One-off SEO audit' } },
        ],
      },
    },
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: 'SEO Agency Liverpool | Local SEO and AI Search | FactoryJet',
      inLanguage: 'en-GB',
      dateModified: PAGE_MODIFIED,
      isPartOf: { '@id': 'https://factoryjet.com/#organization' },
      about: { '@id': `${CANONICAL}#service` },
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
    },
  ],
};

/* ── Questions worth asking any Liverpool SEO agency ─────────────────────── */
const EVALUATION: Array<{ ask: string; weak: string; strong: string }> = [
  {
    ask: 'Can you guarantee me first place?',
    weak: 'Yes, we guarantee page one within ninety days.',
    strong:
      'No. Google states nobody can guarantee a number one ranking. Here is what we can commit to instead.',
  },
  {
    ask: 'What will you actually change on my site this month?',
    weak: 'We allocate twenty hours of SEO work per month.',
    strong:
      'A named list of pages and fixes, agreed before the month starts, with a change log you can read afterwards.',
  },
  {
    ask: 'Where do the links come from?',
    weak: 'We have a network of high authority sites.',
    strong:
      'Chambers, trade bodies, partners, suppliers, local press and sponsorships. Nothing bought, nothing from a network.',
  },
  {
    ask: 'Who owns the content and the accounts?',
    weak: 'Everything lives in our platform while you are a client.',
    strong:
      'You do. Content sits on your site, analytics and Search Console sit in your Google account.',
  },
  {
    ask: 'How will I know it is working?',
    weak: 'You will see your rankings improve in the dashboard.',
    strong:
      'By enquiries, tracked from search, alongside clicks, positions and technical health in one monthly report.',
  },
  {
    ask: 'What if it does not work?',
    weak: 'SEO takes time, you need to be patient.',
    strong:
      'We say at the start what would count as failure, and at what point we would tell you to stop spending.',
  },
];

export default function Page() {
  return (
    <>
      <script
        id="ld-uk-liverpool"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        id="ld-uk-liverpool-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="ld-uk-liverpool-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <LiverpoolPage>
        <Breadcrumbs items={crumbs} />

        <Hero />
        <DigitalLandscape />
        <SeoOffer />

        {/* The one dark section on this page, mid-page by design. */}
        <Services />

        <LiverpoolMarket />

        <MidPageCTA
          headline="Not sure which of these your Liverpool site actually needs?"
          sub="Send us the URL. We run a technical crawl and a Google Business Profile check, then send back a written list of what is holding you back, ranked by impact. No obligation, and you keep the notes."
          label="Get a free site review"
          note="Bhavesh replies within one business day."
        />

        <Pricing />
        <TechStack />

        {/* Vendor evaluation, light. Useful whether or not you hire us. */}
        <section
          aria-labelledby="evaluation-heading"
          className="w-full border-t border-fj-neutral-200 bg-white"
        >
          <div className="mx-auto w-full max-w-[1120px] px-6 py-16 md:px-8 md:py-24">
            <div className="max-w-3xl">
              <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#B23E13]">
                Before you sign anything
              </p>
              <h2
                id="evaluation-heading"
                className="mt-4 font-fj-display text-3xl font-bold leading-tight tracking-tight text-fj-ink md:text-[42px]"
              >
                Six questions to ask any Liverpool SEO agency
              </h2>
              <p className="mt-5 font-fj-body text-lg leading-relaxed text-fj-neutral-600">
                Including us. Google publishes its own warning signs for hiring an
                SEO, and most of them show up in the answer to one of these six
                questions. Take this list to every quote you collect.
              </p>
            </div>

            <div className="mt-12 overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <caption className="sr-only">
                  Questions to ask an SEO agency, with weak and strong answers
                </caption>
                <thead>
                  <tr className="border-b border-fj-neutral-200">
                    <th
                      scope="col"
                      className="w-[26%] py-4 pr-6 font-fj-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-fj-neutral-400"
                    >
                      Ask this
                    </th>
                    <th
                      scope="col"
                      className="w-[37%] py-4 pr-6 font-fj-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-fj-neutral-400"
                    >
                      Walk away if you hear
                    </th>
                    <th
                      scope="col"
                      className="w-[37%] py-4 font-fj-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#B23E13]"
                    >
                      A good answer sounds like
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {EVALUATION.map((row) => (
                    <tr key={row.ask} className="border-b border-fj-neutral-200 align-top">
                      <th
                        scope="row"
                        className="py-5 pr-6 font-fj-body text-[15px] font-semibold text-fj-ink"
                      >
                        {row.ask}
                      </th>
                      <td className="py-5 pr-6 font-fj-body text-[14.5px] leading-relaxed text-fj-neutral-600">
                        {row.weak}
                      </td>
                      <td className="py-5 font-fj-body text-[14.5px] leading-relaxed text-fj-ink">
                        {row.strong}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Regional performance benchmark for the SEO vertical */}
        <section className="w-full bg-fj-cream">
          <div className="mx-auto w-full max-w-[1120px] px-6 py-14 md:px-8">
            <RegionalBenchmarkCard city="Liverpool" vertical="seo" />
          </div>
        </section>

        <div id="liverpool-local-seo-blueprint">
          <LocalSeoArchitectureBlueprint
            city="Liverpool"
            region="uk"
            title="How local search actually works, layer by layer"
            subtitle="Your Google Business Profile, review flow, structured data and page speed all feed the same result. This shows how they connect, and where most Liverpool sites break."
            ctaLabel="Get a free Liverpool site review"
          />
        </div>

        <LocalSeoOpportunityEstimator city="Liverpool" region="uk" />

        <FAQ />

        <CityLinksUK currentCity="liverpool" currentService="seo" />

        <section className="w-full border-t border-fj-neutral-200 bg-white">
          <div className="mx-auto w-full max-w-[1120px] px-6 py-14 md:px-8">
            <AuthorCard />
          </div>
        </section>

        <FinalCTA />
      </LiverpoolPage>

      <Footer />
    </>
  );
}
