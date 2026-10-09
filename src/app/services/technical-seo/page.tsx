import type { Metadata } from 'next';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import { ORG_ID, ORG_REF } from '@/data/organization';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import TechnicalSeoSections, { technicalSeoBreadcrumbs, CAPABILITIES, COMPETITORS } from '@/components/v2/TechnicalSeoSections';
import { TECHNICAL_SEO_FAQS } from '@/components/v2/TechnicalSeoFaqs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { usServiceAlternates } from '@/data/hreflangMap';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/technical-seo: ongoing technical SEO service page, US.

   Built 2026-09-26 per pipeline/research/briefs/US-TIER1-BUILD-BRIEF-2026-09-26.md
   on the current US design system (mirror of /services/ai-seo, hero form from
   /services/web-design). Keywords (DataForSEO, US, 2026-09-26): technical seo
   services 2,400/mo (KD 14), technical seo agency 880, technical seo company 320.

   Keyword split: this page = ongoing technical work. /services/seo-audit keeps the
   one-time audit intent. /services/ai-seo is the SEO hub (/services/seo 301s there).

   Sections: src/components/v2/TechnicalSeoSections.tsx (static server component).
   FAQ: src/components/v2/TechnicalSeoFaqs.ts feeds BOTH the visible accordion and
   the FAQPage JSON-LD below. Service offers come from CAPABILITIES and the ItemList
   from COMPETITORS, the same arrays the page renders. Every schema const declared
   here is rendered into a script tag; do not add one without wiring it up.

   Hreflang: US-only page, en-US + x-default to itself via
   usServiceAlternates['technical-seo'] in src/data/hreflangMap.ts.
   The India page /seo/technical-seo is a different market and is not paired.
───────────────────────────────────────────────────────────────────────────── */

const PAGE_URL = 'https://factoryjet.com/services/technical-seo';
const TITLE = 'Technical SEO Services & Technical SEO Agency | FactoryJet';
const DESCRIPTION =
  'Technical SEO services for ecommerce, JavaScript and Next.js sites: crawling, indexing, Core Web Vitals, migrations, schema and AI crawlers. Fixed in code.';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, alt: 'FactoryJet technical SEO services' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: PAGE_URL,
    languages: usServiceAlternates['technical-seo'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

/** Honest last-substantive-edit date. Bump only when the page content changes. */
const PAGE_PUBLISHED = '2026-09-26';
const PAGE_MODIFIED = '2026-10-10';

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: TITLE,
  description: DESCRIPTION,
  datePublished: PAGE_PUBLISHED,
  dateModified: PAGE_MODIFIED,
  inLanguage: 'en-US',
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
    jobTitle: 'Founder, FactoryJet',
  },
  publisher: { '@id': ORG_ID },
  about: { '@id': ORG_ID },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '[data-speakable]', '.ans'] },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Technical SEO Services',
  serviceType: 'Technical SEO: crawling and indexing, JavaScript rendering, Core Web Vitals, site migrations, structured data, AI crawler access and log file analysis',
  alternateName: ['Technical SEO agency', 'Technical SEO company', 'Technical SEO consultant'],
  description:
    'Ongoing technical SEO for ecommerce, JavaScript and Next.js sites. FactoryJet finds and ships fixes for crawling, indexing, rendering, Core Web Vitals, redirects, structured data and AI crawler access, then verifies each fix in Google Search Console.',
  url: PAGE_URL,
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Technical SEO services',
    itemListElement: CAPABILITIES.map((cap) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: cap.title,
        description: cap.body,
        ...(cap.href ? { url: `https://factoryjet.com${cap.href}` } : {}),
      },
    })),
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: TECHNICAL_SEO_FAQS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const competitorListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'US agencies on Google page one for technical SEO services searches, 26 September 2026',
  itemListOrder: 'https://schema.org/ItemListUnordered',
  numberOfItems: COMPETITORS.length,
  itemListElement: COMPETITORS.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: { '@type': 'Organization', name: c.name, url: `https://${c.domain}`, description: c.offers },
  })),
};

export default function TechnicalSeoServicePage() {
  return (
    <>
      <script id="technical-seo-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script id="technical-seo-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="technical-seo-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="technical-seo-competitor-list-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(competitorListSchema) }} />
      <BreadcrumbSchema items={technicalSeoBreadcrumbs} />

      <SiteHeader />
      <TechnicalSeoSections />
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
