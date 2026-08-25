import type { Metadata } from 'next';

import AdelaidePage from './AdelaidePage';
import { CANONICAL, CRUMBS, SERVICE_AREAS } from './pageData';
import { FAQS } from './faqData';

import Hero from './sections/Hero';
import AnswerFirst from './sections/AnswerFirst';
import LocalMarket from './sections/LocalMarket';
import Services from './sections/Services';
import FAQ from './sections/FAQ';
import Sources from './sections/Sources';
import FinalCTA from './sections/FinalCTA';

import Breadcrumbs from '@/components/v2/Breadcrumbs';
import MidPageCTA from '@/components/v2/MidPageCTA';
import AuthorCard from '@/components/v2/AuthorCard';
import CityLinksAU from '@/components/v2/CityLinksAU';
import RegionalBenchmarkCard from '@/components/v2/RegionalBenchmarkCard';
import AuHeader from '@/app/au/components/Header';
import SiteFooter from '@/components/v2/SiteFooter';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';

const PAGE_MODIFIED = '2026-08-25';

export const metadata: Metadata = {
  title: 'Web Design & SEO Adelaide | Easiest Capital to Rank In | FactoryJet',
  description:
    'Adelaide web design and SEO. Less entrenched competition than Sydney or Perth, so the same work goes further. Fast sites by senior engineers. Free site review.',
  alternates: {
    canonical: CANONICAL,
    languages: { 'en-AU': CANONICAL, 'x-default': CANONICAL },
  },
  openGraph: {
    title: 'Web Design & SEO Adelaide | FactoryJet',
    description:
      'Fast websites and search work for South Australian businesses. Adelaide has the least entrenched first page of any Australian capital, and we can show you the numbers.',
    url: CANONICAL,
    locale: 'en_AU',
    type: 'website',
    siteName: 'FactoryJet',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet: web design and SEO in Adelaide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design & SEO Adelaide | FactoryJet',
    description:
      'Fast websites and search work for South Australian businesses.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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

/** No aggregateRating node: no reviews are visible on this page to back one. */
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
      '@id': `${CANONICAL}#business`,
      name: 'FactoryJet Technologies: Adelaide',
      url: CANONICAL,
      description:
        'Web design and SEO for Adelaide and South Australian businesses, including defence, manufacturing, wine, health and professional services.',
      areaServed: [
        { '@type': 'City', name: 'Adelaide' },
        { '@type': 'AdministrativeArea', name: 'South Australia' },
        ...SERVICE_AREAS.map((name) => ({ '@type': 'Place', name })),
      ],
      geo: { '@type': 'GeoCoordinates', latitude: -34.9285, longitude: 138.6007 },
      author: AUTHOR,
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Web Design and SEO Adelaide',
      serviceType: 'Web design and search engine optimisation',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Adelaide' },
        { '@type': 'AdministrativeArea', name: 'South Australia' },
      ],
      url: CANONICAL,
      author: AUTHOR,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Adelaide web design and SEO services',
        itemListElement: [
          'Website design and build',
          'B2B and government capability websites',
          'Website speed and Core Web Vitals repair',
          'Technical SEO audit and repair',
          'Local SEO and Google Business Profile',
          'Review generation and management',
        ].map((name) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name },
        })),
      },
    },
    // Mapped from FAQS, the SAME array sections/FAQ.tsx renders.
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
      name: 'Web Design & SEO Adelaide | FactoryJet',
      inLanguage: 'en-AU',
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
        id="ld-au-adelaide"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AuHeader />

      <AdelaidePage>
        <Breadcrumbs items={CRUMBS} />

        <Hero />
        <AnswerFirst />
        <LocalMarket />
        <Services />

        <section
          className="w-full bg-white"
          style={{ padding: '48px 0 16px' }}
          aria-label="Regional benchmark"
        >
          <div className="mx-auto w-full max-w-[1120px] px-4">
            <RegionalBenchmarkCard city="Adelaide" vertical="web-design" />
          </div>
        </section>

        <MidPageCTA
          headline="Find out how close you actually are to page one in Adelaide"
          sub="Send us your address. We crawl the site, check your Google Business Profile, and measure the businesses currently holding the positions you want, so you can see the real gap rather than a guess. No charge."
          label="Get a free site review"
          note="Bhavesh replies within one business day, Australian hours."
        />

        <FAQ />
        <Sources />

        <section
          className="w-full bg-fj-cream"
          style={{ padding: '48px 0' }}
          aria-label="About the author"
        >
          <div className="mx-auto w-full max-w-[1120px] px-4">
            <AuthorCard />
          </div>
        </section>

        <CityLinksAU currentCity="adelaide" />

        {/* The single dark section on this page, immediately above the footer. */}
        <FinalCTA />
      </AdelaidePage>

      <SiteFooter
        linkColumns={AU_FOOTER_COLUMNS}
        variant="dark"
        tagline="Websites, e-commerce and web apps for Australian businesses, built properly by senior engineers, live in 7 days."
      />
    </>
  );
}
