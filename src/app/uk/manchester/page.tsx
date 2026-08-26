import type { Metadata } from 'next';
import ManchesterPage from './ManchesterPage';
import AuthorCard from '@/components/v2/AuthorCard';
import WebDesignArchitectureBlueprint from '@/components/v2/WebDesignArchitectureBlueprint';
import WebDesignValueCalculator from '@/components/v2/WebDesignValueCalculator';
import RegionalBenchmarkCard from '@/components/v2/RegionalBenchmarkCard';
import CityLinksUK from '@/components/v2/CityLinksUK';
import { CANONICAL } from './crumbs';

const PAGE_MODIFIED = '2026-08-25';

export const metadata: Metadata = {
  title: 'SEO Agency Manchester | Web Design, AI SEO | FactoryJet',
  description:
    'Manchester SEO and web design agency. Technical fixes, local map pack work, fast Next.js builds, and full code ownership for Greater Manchester businesses.',
  alternates: {
    canonical: CANONICAL,
    // UK-only page with no international twin, so both entries point at itself.
    languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL },
  },
  openGraph: {
    title: 'SEO Agency Manchester | Web Design, AI SEO | FactoryJet',
    description:
      'SEO, local search and fast Next.js web design for Manchester businesses. Fixed-price milestones and 100% code ownership.',
    url: CANONICAL,
    // /images/uk/manchester/hero-manchester.webp never existed. This one does.
    images: [{ url: '/images/manchester/hero-skyline.webp' }],
  },
};

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
      '@id': `${CANONICAL}#business`,
      name: 'FactoryJet Technologies: Manchester',
      url: CANONICAL,
      description: 'SEO, web design, e-commerce and AI search agency serving Manchester and the North West.',
      areaServed: {
        '@type': 'City',
        name: 'Manchester',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 53.4808,
        longitude: -2.2426,
      },
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
    // No aggregateRating on the Service node below: there is no review corpus
    // behind a number, and Google treats review markup it can't trace to real
    // reviews as a structured-data policy problem. Add it back only with real,
    // verifiable reviews.
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'SEO Agency Manchester',
      serviceType: 'Search engine optimisation',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'City', name: 'Manchester' },
      url: CANONICAL,
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
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: 'SEO Agency Manchester | Web Design, AI SEO | FactoryJet',
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
        id="ld-uk-manchester"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="uk-manchester-root">
        {/*
          These blocks are passed as children so they render INSIDE <main>, above
          the closing CTA. They used to sit after <ManchesterPage />, which put
          them after the page footer: outside the main landmark, with 25 internal
          links and every list item invisible to anything that reads landmarks.

          The dark counter-narrative table that used to live here was removed on
          2026-08-25. It repeated the CompetitorComparison section almost row for
          row, and it was the third dark band on a page whose brand anchor allows
          one.
        */}
        <ManchesterPage>
          {/* Regional performance benchmark */}
          <section className="bg-white py-12">
            <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
              <RegionalBenchmarkCard city="Manchester" vertical="web-design" />
            </div>
          </section>

          {/* Architecture blueprint */}
          <div id="manchester-architecture-blueprint">
            <WebDesignArchitectureBlueprint />
          </div>

          {/* Interactive speed and pipeline value calculator */}
          <WebDesignValueCalculator city="Manchester" region="uk" />

          {/* UK regional horizontal cross-links */}
          <CityLinksUK currentCity="manchester" />

          {/* Verified author entity card */}
          <section className="bg-fj-cream py-12 border-t border-fj-neutral-200">
            <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
              <AuthorCard />
            </div>
          </section>
        </ManchesterPage>
      </div>
    </>
  );
}
