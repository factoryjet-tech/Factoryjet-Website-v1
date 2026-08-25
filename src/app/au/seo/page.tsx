import type { Metadata } from 'next';

import AuSeoPage from './AuSeoPage';
import { CANONICAL, CRUMBS } from './pageData';
import { FAQS } from './faqData';

import Hero from './sections/Hero';
import AnswerFirst from './sections/AnswerFirst';
import MarketReality from './sections/MarketReality';
import Engagement from './sections/Engagement';
import FAQ from './sections/FAQ';
import Sources from './sections/Sources';
import FinalCTA from './sections/FinalCTA';

import Breadcrumbs from '@/components/v2/Breadcrumbs';
import MidPageCTA from '@/components/v2/MidPageCTA';
import AuthorCard from '@/components/v2/AuthorCard';
import CityLinksAU from '@/components/v2/CityLinksAU';
import AuSubpageHeader from '@/app/au/components/SubpageHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';

const PAGE_MODIFIED = '2026-08-25';

export const metadata: Metadata = {
  title: 'SEO Services Australia | We Measure Before We Sell | FactoryJet',
  description:
    'SEO services for Australian businesses, based on measured demand rather than opinion. 297 keywords and 103 search results analysed in August 2026. Free site review.',
  alternates: {
    canonical: CANONICAL,
    languages: { 'en-AU': CANONICAL, 'x-default': CANONICAL },
  },
  openGraph: {
    title: 'SEO Services Australia | FactoryJet',
    description:
      'What Australian search actually looks like: where AI Overviews appear, which cities are winnable, and where we will not compete. Measured, not asserted.',
    url: CANONICAL,
    locale: 'en_AU',
    type: 'website',
    siteName: 'FactoryJet',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet: SEO services in Australia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Services Australia | FactoryJet',
    description:
      'Australian search, measured: AI Overview rates by topic and which cities are actually winnable.',
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
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'SEO Services Australia',
      serviceType: 'Search engine optimisation',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      author: AUTHOR,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Australian SEO services',
        itemListElement: [
          'Technical SEO audit and repair',
          'Local SEO and Google Business Profile',
          'Keyword demand verification',
          'Content built for verified Australian search terms',
          'Digital PR and link earning',
          'Search reporting against enquiries',
        ].map((name) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name },
        })),
      },
    },
    // Mapped from FAQS, the SAME array sections/FAQ.tsx renders. Never hand-write a second
    // copy here.
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
      name: 'SEO Services Australia | FactoryJet',
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
        id="ld-au-seo"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AuSubpageHeader current="/au/seo" />

      <AuSeoPage>
        <Breadcrumbs items={CRUMBS} />

        <Hero />
        <AnswerFirst />
        <MarketReality />

        <MidPageCTA
          headline="Want the same measurement done on your own search terms?"
          sub="Tell us what you sell and where. We check real Australian search volume for those terms, look at who currently holds the first page, and count how many sites link to the weakest of them. You get the numbers whether or not they favour us."
          label="Get a free demand check"
          note="Bhavesh replies within one business day, Australian hours."
        />

        <Engagement />
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

        <CityLinksAU />

        {/* The single dark section on this page, immediately above the footer. */}
        <FinalCTA />
      </AuSeoPage>

      <SiteFooter
        linkColumns={AU_FOOTER_COLUMNS}
        variant="dark"
        tagline="Websites, e-commerce and web apps for Australian businesses, built properly by senior engineers, live in 7 days."
      />
    </>
  );
}
