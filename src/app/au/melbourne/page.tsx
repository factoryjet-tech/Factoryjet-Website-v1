import type { Metadata } from 'next';

import MelbournePage from './MelbournePage';
import { CANONICAL, CRUMBS, SERVICE_AREAS } from './pageData';
import { FAQS } from './faqData';

import Hero from './sections/Hero';
import AnswerFirst from './sections/AnswerFirst';
import LocalMarket from './sections/LocalMarket';
import Services from './sections/Services';
import ChoosingSomeone from './sections/ChoosingSomeone';
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
  title: 'Web Design & SEO Consultant Melbourne | FactoryJet',
  description:
    'Melbourne web design and SEO consulting. Fast sites built by senior engineers, honest advice on what will move enquiries, and you own everything. Free site review.',
  // AU-only page with no international twin, so both hreflang entries are self-referential.
  alternates: {
    canonical: CANONICAL,
    languages: { 'en-AU': CANONICAL, 'x-default': CANONICAL },
  },
  openGraph: {
    title: 'Web Design & SEO Consultant Melbourne | FactoryJet',
    description:
      'Fast websites and straight advice on search for Melbourne businesses. We build it, or we brief your team. Free review before anything is charged.',
    url: CANONICAL,
    locale: 'en_AU',
    type: 'website',
    siteName: 'FactoryJet',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet: web design and SEO consulting in Melbourne',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design & SEO Consultant Melbourne | FactoryJet',
    description:
      'Fast websites and straight advice on search for Melbourne businesses.',
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

/**
 * No aggregateRating node here, for the same reason as /au/brisbane: Google wants review
 * snippets backed by reviews visible on the same page, and this page has none to show.
 * Add it together with real review text, not before.
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
    // Derived from the same CRUMBS array the visible <Breadcrumbs /> renders.
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
      name: 'FactoryJet Technologies: Melbourne',
      url: CANONICAL,
      description:
        'Web design and SEO consulting for Melbourne and Victorian businesses. Fast websites built by senior engineers, technical SEO advice, Google Business Profile and local search.',
      // Read from the SAME SERVICE_AREAS list the hero renders as visible pills.
      areaServed: [
        { '@type': 'City', name: 'Melbourne' },
        { '@type': 'AdministrativeArea', name: 'Victoria' },
        ...SERVICE_AREAS.map((name) => ({ '@type': 'Place', name })),
      ],
      geo: { '@type': 'GeoCoordinates', latitude: -37.8136, longitude: 144.9631 },
      author: AUTHOR,
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Web Design and SEO Consulting Melbourne',
      serviceType: 'Web design and search engine optimisation consulting',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Melbourne' },
        { '@type': 'AdministrativeArea', name: 'Victoria' },
      ],
      url: CANONICAL,
      author: AUTHOR,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Melbourne web design and SEO services',
        itemListElement: [
          'Website design and build',
          'Website speed and Core Web Vitals repair',
          'Technical SEO audit and written diagnosis',
          'SEO advisory for in-house teams',
          'Local SEO and Google Business Profile',
          'Digital PR and link earning',
        ].map((name) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name },
        })),
      },
    },
    // Generated by mapping FAQS, the SAME array sections/FAQ.tsx renders. Never hand-write
    // a second copy here.
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
      name: 'Web Design & SEO Consultant Melbourne | FactoryJet',
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
        id="ld-au-melbourne"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AuHeader />

      <MelbournePage>
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
            <RegionalBenchmarkCard city="Melbourne" vertical="seo" />
          </div>
        </section>

        {/* Mid-page CTA, roughly halfway down and clear of both the hero form and the
            closing CTA. */}
        <MidPageCTA
          headline="Not sure which of the five problems you have?"
          sub="Send us your address. We crawl the site, check your Google Business Profile and read your own Search Console data, then tell you which one is actually costing you enquiries. Free, and if the answer is that you do not need us, we will say that."
          label="Get a free diagnosis"
          note="Bhavesh replies within one business day, Australian hours."
        />

        <ChoosingSomeone />
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

        <CityLinksAU currentCity="melbourne" />

        {/* The single dark section on this page, immediately above the footer. */}
        <FinalCTA />
      </MelbournePage>

      <SiteFooter
        linkColumns={AU_FOOTER_COLUMNS}
        variant="dark"
        tagline="Websites, e-commerce and web apps for Australian businesses, built properly by senior engineers, live in 7 days."
      />
    </>
  );
}
