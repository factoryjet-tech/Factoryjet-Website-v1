import type { Metadata } from 'next';

import CanberraPage from './CanberraPage';
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
  title: 'Web Design & SEO Canberra | Accessible Sites for the ACT | FactoryJet',
  description:
    'Canberra web design and SEO for businesses, associations and public-sector suppliers. Accessible sites built to WCAG, fast, and yours to own. Free site review.',
  alternates: {
    canonical: CANONICAL,
    languages: { 'en-AU': CANONICAL, 'x-default': CANONICAL },
  },
  openGraph: {
    title: 'Web Design & SEO Canberra | FactoryJet',
    description:
      'Accessible, fast websites for Canberra organisations, plus the thinnest search competition of any Australian capital. We can show you the numbers.',
    url: CANONICAL,
    locale: 'en_AU',
    type: 'website',
    siteName: 'FactoryJet',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet: accessible web design and SEO in Canberra',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design & SEO Canberra | FactoryJet',
    description:
      'Accessible, fast websites for Canberra businesses, associations and suppliers.',
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
      name: 'FactoryJet Technologies: Canberra',
      url: CANONICAL,
      description:
        'Web design and SEO for Canberra organisations: associations, peak bodies, not-for-profits, professional services and public-sector suppliers. Built to the WCAG accessibility criteria.',
      areaServed: [
        { '@type': 'City', name: 'Canberra' },
        { '@type': 'AdministrativeArea', name: 'the Australian Capital Territory' },
        ...SERVICE_AREAS.map((name) => ({ '@type': 'Place', name })),
      ],
      geo: { '@type': 'GeoCoordinates', latitude: -35.2809, longitude: 149.1300 },
      author: AUTHOR,
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Accessible Web Design and SEO Canberra',
      serviceType: 'Accessible web design and search engine optimisation',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Canberra' },
        { '@type': 'AdministrativeArea', name: 'the Australian Capital Territory' },
      ],
      url: CANONICAL,
      author: AUTHOR,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Canberra web design and SEO services',
        itemListElement: [
          'Accessible website design and build',
          'WCAG accessibility audit and remediation',
          'Association and membership websites',
          'Website speed and Core Web Vitals repair',
          'Technical SEO audit and repair',
          'Local SEO and Google Business Profile',
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
      name: 'Web Design & SEO Canberra | Accessible Sites for the ACT | FactoryJet',
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
        id="ld-au-canberra"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AuHeader />

      <CanberraPage>
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
            <RegionalBenchmarkCard city="Canberra" vertical="web-design" />
          </div>
        </section>

        <MidPageCTA
          headline="Find out whether your site would pass an accessibility check"
          sub="Send us your address. We test the site against the WCAG criteria, crawl it for technical faults, and measure the organisations currently holding the Canberra positions you want. You get a short written summary you can act on or attach to a tender. No charge."
          label="Get a free accessibility and site review"
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

        <CityLinksAU currentCity="canberra" />

        {/* The single dark section on this page, immediately above the footer. */}
        <FinalCTA />
      </CanberraPage>

      <SiteFooter
        linkColumns={AU_FOOTER_COLUMNS}
        variant="dark"
        tagline="Websites, e-commerce and web apps for Australian businesses, built properly by senior engineers, live in 7 days."
      />
    </>
  );
}
