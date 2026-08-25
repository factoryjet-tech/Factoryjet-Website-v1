import type { Metadata } from 'next';

import BirminghamPage from './BirminghamPage';
import { CANONICAL, CRUMBS } from './pageData';
import { FAQS } from './faqData';

import Hero from './sections/Hero';
import SeoAnswerFirst from './sections/SeoAnswerFirst';
import DigitalLandscape from './sections/DigitalLandscape';
import Services from './sections/Services';
import SeoEngagement from './sections/SeoEngagement';
import ChoosingAnAgency from './sections/ChoosingAnAgency';
import LocalSignals from './sections/LocalSignals';
import TechStack from './sections/TechStack';
import Pricing from './sections/Pricing';
import Cities from './sections/Cities';
import FAQ from './sections/FAQ';
import FinalCTA from './sections/FinalCTA';

import Breadcrumbs from '@/components/v2/Breadcrumbs';
import MidPageCTA from '@/components/v2/MidPageCTA';
import AuthorCard from '@/components/v2/AuthorCard';
import WebDesignArchitectureBlueprint from '@/components/v2/WebDesignArchitectureBlueprint';
import WebDesignValueCalculator from '@/components/v2/WebDesignValueCalculator';
import RegionalBenchmarkCard from '@/components/v2/RegionalBenchmarkCard';
import CityLinksUK from '@/components/v2/CityLinksUK';
import Footer from '@/app/uk/sections/Footer';

const PAGE_MODIFIED = '2026-08-25';

export const metadata: Metadata = {
  title: 'SEO Agency Birmingham | Local & AI Search | FactoryJet',
  description:
    'Birmingham SEO agency for firms that need enquiries. Technical fixes, Google Business Profile, local landing pages and AI search visibility across the West Midlands. Free site review.',
  // UK-only page with no international twin, so both hreflang entries are self-referential.
  // The page shipped with no hreflang at all until 2026-08-25.
  alternates: {
    canonical: CANONICAL,
    languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL },
  },
  openGraph: {
    title: 'SEO Agency Birmingham | Local & AI Search | FactoryJet',
    description:
      'Technical SEO, local search and AI search visibility for Birmingham and West Midlands businesses. Free site review before anything is charged.',
    url: CANONICAL,
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/birmingham/hero-birmingham.webp' }],
  },
};

const AUTHOR = {
  '@type': 'Person',
  name: 'Bhavesh Barot',
  jobTitle: 'Chief Technical Architect',
  url: 'https://factoryjet.com/about',
  sameAs: [
    'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
    'https://github.com/factoryjet-tech',
  ],
} as const;

// 2026-08-25: an aggregateRating of 4.9 from 64 reviews was removed from the LocalBusiness
// and Service nodes here. There is no review corpus behind those numbers, and review
// snippets Google cannot trace to real reviews are a structured-data policy problem, not a
// nice-to-have. Put it back only when there are real reviews to point at.
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
    // Derived from the same CRUMBS array the visible <Breadcrumbs /> renders, so the trail
    // Google is told about and the trail a human sees cannot drift apart.
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumbs`,
      itemListElement: CRUMBS.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: c.url,
      })),
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
      name: 'FactoryJet Technologies: Birmingham',
      url: CANONICAL,
      description:
        'SEO agency serving Birmingham and the West Midlands. Technical SEO, local search, content and AI search visibility, plus web design and e-commerce build.',
      areaServed: [
        { '@type': 'City', name: 'Birmingham' },
        { '@type': 'AdministrativeArea', name: 'West Midlands' },
      ],
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 52.4862,
        longitude: -1.8904,
      },
      author: AUTHOR,
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'SEO Agency Birmingham',
      serviceType: 'Search engine optimisation',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Birmingham' },
        { '@type': 'AdministrativeArea', name: 'West Midlands' },
      ],
      url: CANONICAL,
      author: AUTHOR,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Birmingham SEO services',
        itemListElement: [
          'Technical SEO audit and repair',
          'Local SEO and Google Business Profile',
          'Content built for Birmingham search terms',
          'Digital PR and link earning',
          'AI search and answer engine visibility',
        ].map((name) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name },
        })),
      },
    },
    // Generated by mapping FAQS, the SAME array sections/FAQ.tsx renders. Never hand-write a
    // second copy of these questions here: when the two drift, the schema describes a page
    // that does not exist.
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: 'SEO Agency Birmingham | Local & AI Search | FactoryJet',
      inLanguage: 'en-GB',
      dateModified: PAGE_MODIFIED,
      breadcrumb: { '@id': `${CANONICAL}#breadcrumbs` },
      author: AUTHOR,
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        id="ld-uk-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="uk-birmingham-root">
        {/*
          Section order note. Everything used to sit AFTER <BirminghamPage />, which closed
          its own <main> with the footer inside it, so seven sections rendered below the
          footer. The shell now takes children, so the running order below is the order a
          reader actually sees.
        */}
        <BirminghamPage>
          <Breadcrumbs items={CRUMBS} />

          <Hero />
          <SeoAnswerFirst />
          <DigitalLandscape />
          <Services />
          <SeoEngagement />

          <section
            className="w-full bg-fj-cream"
            style={{ padding: '48px 0 16px' }}
            aria-label="Regional benchmark"
          >
            <div className="mx-auto w-full max-w-[1120px] px-4">
              <RegionalBenchmarkCard city="Birmingham" vertical="web-design" />
            </div>
          </section>

          {/* Mid-page CTA. Roughly 45% down, well clear of the hero and of the closing CTA. */}
          <MidPageCTA
            headline="See what is actually holding your Birmingham site back"
            sub="Send us the address and we will crawl the site, check your Google Business Profile and pull your own Search Console data, then send a short written summary of the three biggest problems. No charge, and no obligation to go further."
            label="Get a free site review"
            note="Bhavesh replies within one business day."
          />

          <ChoosingAnAgency />

          <div id="birmingham-architecture-blueprint">
            <WebDesignArchitectureBlueprint />
          </div>

          <TechStack />
          <Pricing />

          <WebDesignValueCalculator city="Birmingham" region="uk" />

          <LocalSignals />
          <Cities />
          <CityLinksUK currentCity="birmingham" />

          <FAQ />

          <section
            className="w-full bg-white"
            style={{ padding: '48px 0', borderTop: '1px solid #D9D9D2' }}
            aria-label="About the author"
          >
            <div className="mx-auto w-full max-w-[1120px] px-4">
              <AuthorCard />
            </div>
          </section>

          {/* The single dark section on this page, and it sits immediately above the footer. */}
          <FinalCTA />
        </BirminghamPage>

        <Footer />
      </div>
    </>
  );
}
