import type { Metadata } from 'next';
import SheffieldPage from './SheffieldPage';
import AuthorCard from '@/components/v2/AuthorCard';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import MidPageCTA from '@/components/v2/MidPageCTA';
import WebDesignArchitectureBlueprint from '@/components/v2/WebDesignArchitectureBlueprint';
import WebDesignValueCalculator from '@/components/v2/WebDesignValueCalculator';
import RegionalBenchmarkCard from '@/components/v2/RegionalBenchmarkCard';
import CityLinksUK from '@/components/v2/CityLinksUK';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import Footer from '@/app/uk/sections/Footer';
import { CANONICAL, CRUMBS } from './seoData';
import {
  SheffieldDeliverables,
  SheffieldProcess,
  SheffieldScope,
  SheffieldLocalContext,
  SheffieldHowGoogleDecides,
  SheffieldSources,
} from './SheffieldSeoSections';

const PAGE_MODIFIED = '2026-08-25';

export const metadata: Metadata = {
  title: 'SEO Agency Sheffield | Local SEO and Web Design | FactoryJet',
  description:
    'Sheffield SEO agency for local search, technical SEO and fast websites. Map pack work, Sheffield area pages, monthly reporting and no lock-in contracts.',
  alternates: {
    canonical: CANONICAL,
    languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL },
  },
  openGraph: {
    title: 'SEO Agency Sheffield | Local SEO and Web Design | FactoryJet',
    description:
      'Local SEO, technical SEO and fast Next.js websites for Sheffield and South Yorkshire businesses. Clear monthly reporting, full code ownership.',
    url: CANONICAL,
    images: [{ url: '/images/uk/hero-uk.webp' }],
  },
};

// The BreadcrumbList markup lives in layout.tsx and is derived from this same
// CRUMBS array, so the visible trail below cannot drift away from the markup.
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
    // No aggregateRating: there is no review corpus behind a number, and Google
    // treats review markup it can't trace to real reviews as a structured-data
    // policy problem. Add it back only with real, verifiable reviews.
    {
      '@type': 'LocalBusiness',
      '@id': `${CANONICAL}#business`,
      name: 'FactoryJet Technologies: Sheffield',
      url: CANONICAL,
      parentOrganization: { '@id': 'https://factoryjet.com/#organization' },
      description:
        'SEO agency and web design studio serving Sheffield and South Yorkshire. Local SEO, technical SEO and fast Next.js websites.',
      areaServed: {
        '@type': 'City',
        name: 'Sheffield',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 53.3811,
        longitude: -1.4701,
      },
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#seo-service`,
      name: 'SEO Agency Sheffield',
      serviceType: 'Search engine optimisation',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'City', name: 'Sheffield' },
      url: CANONICAL,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Sheffield SEO deliverables',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Technical SEO audit and fixes' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Local SEO and Google Business Profile management' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Keyword research and on-page content' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital PR and link earning' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Search reporting and conversion tracking' } },
        ],
      },
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Web Design Sheffield',
      serviceType: 'Web design',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'City', name: 'Sheffield' },
      url: CANONICAL,
    },
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: 'SEO Agency Sheffield | Local SEO and Web Design | FactoryJet',
      inLanguage: 'en-GB',
      dateModified: PAGE_MODIFIED,
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

export default function Page() {
  return (
    <>
      <script
        id="ld-uk-sheffield"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="uk-sheffield-root">
        <Breadcrumbs items={CRUMBS} />

        <SheffieldPage />

        {/* ══ WHAT THE ENGAGEMENT INCLUDES ══ */}
        <SheffieldDeliverables />

        {/* ══ HOW THE WORK RUNS, WEEK BY WEEK ══ */}
        <SheffieldProcess />

        {/* ══ MID-PAGE CTA, roughly halfway down the page ══ */}
        <MidPageCTA
          headline="See what is actually holding your Sheffield rankings back"
          sub="Send us your website address. We run the crawl, check your Google Business Profile and your Core Web Vitals, then send back a written list of what is wrong and what we would fix first. No call required to receive it."
          label="Get a free Sheffield site review"
          note="Written back within two working days."
        />

        {/* ══ SCOPE BOUNDARIES AND FIT ══ */}
        <SheffieldScope />

        {/* ══ SHEFFIELD SPECIFICS, ONS DATA ══ */}
        <SheffieldLocalContext />

        {/* ══ HOW GOOGLE DECIDES, WITH CITATIONS ══ */}
        <SheffieldHowGoogleDecides />

        {/* ── COUNTER-NARRATIVE & VENDOR EVALUATION MATRIX ── */}
        <section className="py-16 bg-fj-cream border-t border-fj-neutral-200 text-fj-ink">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B23E13]">The Direct Comparison</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-fj-ink mt-2">
                The Typical UK Agency Frustration vs FactoryJet Engineering Approach
              </h2>
              <p className="text-fj-neutral-600 mt-4 text-sm leading-relaxed">
                Traditional regional digital agencies rely on slow page builders, 12-week delivery delays, and proprietary platform lock-in. FactoryJet delivers deterministic Next.js 15 apps, sub-second LCP speeds, and 100% full IP code ownership.
              </p>
            </div>

            <div className="overflow-x-auto mb-10">
              <table className="w-full border-collapse bg-white rounded-xl border border-fj-neutral-200 text-left text-sm">
                <thead>
                  <tr className="border-b border-fj-neutral-200 bg-[#F8F9FA]">
                    <th className="p-4 font-bold text-fj-ink">Evaluation Criteria</th>
                    <th className="p-4 font-bold text-fj-neutral-600">Traditional Sheffield Agencies</th>
                    <th className="p-4 font-bold text-[#B23E13]">FactoryJet Engineering</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-fj-neutral-200">
                    <td className="p-4 font-semibold text-fj-ink">Core Web Vitals SLA</td>
                    <td className="p-4 text-fj-neutral-600">Unverified; average 3.9s LCP</td>
                    <td className="p-4 text-[#047857] font-semibold">Guaranteed &lt; 1.2s LCP (95+ score)</td>
                  </tr>
                  <tr className="border-b border-fj-neutral-200">
                    <td className="p-4 font-semibold text-fj-ink">Delivery Speed</td>
                    <td className="p-4 text-fj-neutral-600">8 to 16 weeks typical timeline</td>
                    <td className="p-4 text-[#047857] font-semibold">7-Day Express Delivery SLA</td>
                  </tr>
                  <tr className="border-b border-fj-neutral-200">
                    <td className="p-4 font-semibold text-fj-ink">Pricing Model</td>
                    <td className="p-4 text-fj-neutral-600">Hourly day rates + ongoing retainers</td>
                    <td className="p-4 text-[#047857] font-semibold">Fixed-price milestone model</td>
                  </tr>
                  <tr className="border-b border-fj-neutral-200">
                    <td className="p-4 font-semibold text-fj-ink">SEO Reporting</td>
                    <td className="p-4 text-fj-neutral-600">Impression charts, no enquiry tracking</td>
                    <td className="p-4 text-[#047857] font-semibold">Calls and form fills traced back to searches</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-fj-ink">Code &amp; IP Ownership</td>
                    <td className="p-4 text-fj-neutral-600">Proprietary CMS lock-in or agency hosting</td>
                    <td className="p-4 text-[#047857] font-semibold">100% full codebase pushed to your GitHub</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Standard Deliverables Checklist */}
            <div className="bg-white border border-fj-neutral-200 rounded-xl p-6">
              <h3 className="text-base font-bold text-fj-ink mb-3">Standard engineering deliverables on every Sheffield build:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs text-fj-neutral-600">
                <li className="flex items-center gap-2"><span className="text-[#047857] font-bold">✓</span> Server-rendered Next.js 15 App Router</li>
                <li className="flex items-center gap-2"><span className="text-[#047857] font-bold">✓</span> LocalBusiness Schema.org JSON-LD graph</li>
                <li className="flex items-center gap-2"><span className="text-[#047857] font-bold">✓</span> Core Web Vitals verified before launch</li>
                <li className="flex items-center gap-2"><span className="text-[#047857] font-bold">✓</span> Complete GitHub repository transfer</li>
                <li className="flex items-center gap-2"><span className="text-[#047857] font-bold">✓</span> Google Search Console and Analytics wired up</li>
                <li className="flex items-center gap-2"><span className="text-[#047857] font-bold">✓</span> Sheffield keyword map handed over in writing</li>
                <li className="flex items-center gap-2"><span className="text-[#047857] font-bold">✓</span> Google Business Profile claimed and completed</li>
                <li className="flex items-center gap-2"><span className="text-[#047857] font-bold">✓</span> 30 days of post-launch support included</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── REGIONAL BENCHMARK & ARCHITECTURE BLUEPRINT ── */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <RegionalBenchmarkCard city="Sheffield" vertical="web-design" />
          </div>
        </section>

        <div id="sheffield-architecture-blueprint">
          <WebDesignArchitectureBlueprint />
        </div>

        {/* ── INTERACTIVE SPEED & PIPELINE VALUE CALCULATOR ── */}
        <WebDesignValueCalculator city="Sheffield" region="uk" />

        {/* ── SOURCES AND ONWARD LINKS ── */}
        <SheffieldSources />

        {/* ── UK REGIONAL HORIZONTAL CROSS-LINKS ── */}
        <CityLinksUK currentCity="sheffield" />

        {/* ── VERIFIED AUTHOR ENTITY CARD ── */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AuthorCard />
          </div>
        </section>

        {/* ── FINAL MODAL CTA STRIP ── */}
        <section className="py-12 bg-white border-t border-fj-neutral-200 text-center">
          <div className="max-w-xl mx-auto px-4">
            <h2 className="text-xl font-bold text-fj-ink mb-3">Ready to be found by Sheffield customers?</h2>
            <p className="text-sm text-fj-neutral-600 mb-6">Tell us your website address and what you sell. You get a scoped plan and a fixed timeline back from a senior engineer, not a sales call.</p>
            <ModalCTAButton label="Get my free quote" region="uk" modalVariant="default" btnVariant="primary-light" />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
