import type { Metadata } from 'next';

import BrisbanePage from './BrisbanePage';
import { CANONICAL, CRUMBS, SERVICE_AREAS } from './pageData';
import { FAQS } from './faqData';

import Hero from './sections/Hero';
import AnswerFirst from './sections/AnswerFirst';
import LocalMarket from './sections/LocalMarket';
import Services from './sections/Services';
import TeamSection from './sections/TeamSection';
import ChoosingAnAgency from './sections/ChoosingAnAgency';
import FAQ from './sections/FAQ';
import Sources from './sections/Sources';
import FinalCTA from './sections/FinalCTA';

import Breadcrumbs from '@/components/v2/Breadcrumbs';
import MidPageCTA from '@/components/v2/MidPageCTA';
import AuthorCard from '@/components/v2/AuthorCard';
import CityLinksAU from '@/components/v2/CityLinksAU';
import RegionalBenchmarkCard from '@/components/v2/RegionalBenchmarkCard';
import AuSubpageHeader from '@/app/au/components/SubpageHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';

const PAGE_MODIFIED = '2026-08-26';

export const metadata: Metadata = {
  title: 'Web Design & SEO Brisbane | Fast Sites, Found on Google | FactoryJet',
  description:
    'Brisbane web design and SEO for businesses that need enquiries. Fast sites built by senior engineers, Google Business Profile done properly, and you own everything. Free site review.',
  // AU-only page with no international twin, so both hreflang entries are self-referential,
  // matching the single-country page rule used on the /uk city pages.
  alternates: {
    canonical: CANONICAL,
    languages: { 'en-AU': CANONICAL, 'x-default': CANONICAL },
  },
  openGraph: {
    title: 'Web Design & SEO Brisbane | FactoryJet',
    description:
      'Fast websites and search visibility for Brisbane businesses, built by senior engineers. Free review of your site and your Google Business Profile before anything is charged.',
    url: CANONICAL,
    locale: 'en_AU',
    type: 'website',
    siteName: 'FactoryJet',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet: web design and SEO in Brisbane',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design & SEO Brisbane | FactoryJet',
    description:
      'Fast websites and search visibility for Brisbane businesses, built by senior engineers.',
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
 * No aggregateRating node on this page.
 *
 * The 4.9 from 64 reviews is real, and it stays where it already ships. It is not added
 * here because Google's structured data policy wants review snippets backed by reviews
 * visible on the same page, and there is no review corpus on this page to point at. Add
 * the rating here at the same time as real review text, not before.
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
      '@id': `${CANONICAL}#business`,
      name: 'FactoryJet Technologies: Brisbane',
      url: CANONICAL,
      description:
        'Web design and SEO for Brisbane and South East Queensland businesses. Fast websites built by senior engineers, technical SEO, Google Business Profile and local search.',
      // Read from the SAME SERVICE_AREAS list the hero renders as visible pills.
      areaServed: [
        { '@type': 'City', name: 'Brisbane' },
        { '@type': 'AdministrativeArea', name: 'Queensland' },
        ...SERVICE_AREAS.map((name) => ({ '@type': 'Place', name })),
      ],
      geo: { '@type': 'GeoCoordinates', latitude: -27.4698, longitude: 153.0251 },
      author: AUTHOR,
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Web Design and SEO Brisbane',
      serviceType: 'Web design and search engine optimisation',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Brisbane' },
        { '@type': 'AdministrativeArea', name: 'Queensland' },
      ],
      url: CANONICAL,
      author: AUTHOR,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Brisbane web design and SEO services',
        itemListElement: [
          'Website design and build',
          'Website speed and Core Web Vitals repair',
          'Technical SEO audit and repair',
          'Local SEO and Google Business Profile',
          'Content built for Brisbane search terms',
          'Digital PR and link earning',
        ].map((name) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name },
        })),
      },
    },
    // Generated by mapping FAQS, the SAME array sections/FAQ.tsx renders. Never hand-write
    // a second copy here: when the two drift, the schema describes a page that does not
    // exist, which is a cloaking-adjacent problem rather than a cosmetic one.
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
      name: 'Web Design & SEO Brisbane | FactoryJet',
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
        id="ld-au-brisbane"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AuSubpageHeader current="/au/brisbane" />

      <BrisbanePage>
        <Breadcrumbs items={CRUMBS} />

        <Hero />
        <AnswerFirst />
        <LocalMarket />
        <Services />
        <TeamSection />

        <section
          className="w-full bg-white"
          style={{ padding: '48px 0 16px' }}
          aria-label="Regional benchmark"
        >
          <div className="mx-auto w-full max-w-[1120px] px-4">
            <RegionalBenchmarkCard city="Brisbane" vertical="web-design" />
          </div>
        </section>

        {/* Mid-page CTA, roughly halfway down and well clear of both the hero form and the
            closing CTA. Most readers never reach the bottom of a page this long. */}
        <MidPageCTA
          headline="See what is actually holding your Brisbane site back"
          sub="Send us the address and we will crawl the site, check your Google Business Profile and read your own Search Console data, then send a short written summary of the three biggest problems. No charge, and no obligation to go further."
          label="Get a free site review"
          note="Bhavesh replies within one business day, Australian hours."
        />

        <ChoosingAnAgency />
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

        <CityLinksAU currentCity="brisbane" />

        {/* The single dark section on this page, immediately above the footer. */}
        <FinalCTA />
      </BrisbanePage>

      <SiteFooter
        linkColumns={AU_FOOTER_COLUMNS}
        variant="dark"
        tagline="Websites, e-commerce and web apps for Australian businesses, built properly by senior engineers, live in 7 days."
      />
    </>
  );
}
