import type { Metadata } from 'next';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import { ORG_REF } from '@/data/organization';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import WebflowDevelopmentSections, { webflowBreadcrumbs, CAPABILITIES } from '@/components/v2/WebflowDevelopmentSections';
import { WEBFLOW_FAQS } from '@/components/v2/WebflowDevelopmentFaqs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { usServiceAlternates } from '@/data/hreflangMap';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/webflow-development: Webflow development agency service page (US).

   Built 2026-09-26 (US Tier 1 batch, brief pipeline/research/briefs/
   US-TIER1-BUILD-BRIEF-2026-09-26.md) in the US "Family A" design system,
   mirroring /services/ai-seo and /services/web-design. Founder confirmed on
   2026-09-26 that FactoryJet builds on Webflow. No Webflow partner claim.

   Keyword + PAA data: pipeline/research/data/us-opps-2026-09-26/
   (serps.json "webflow agency", webflow_paa.json, webflow_volumes.json).

   Sections: src/components/v2/WebflowDevelopmentSections.tsx (static server
   component). FAQ: src/components/v2/WebflowDevelopmentFaqs.ts feeds BOTH the
   visible accordion and the FAQPage JSON-LD below. Service offers come from
   CAPABILITIES, the same array the page renders. Every schema const declared
   here is rendered into a script tag; do not add one without wiring it up.

   Hreflang: US-only page, en-US + x-default via
   usServiceAlternates['webflow-development'] in src/data/hreflangMap.ts.
───────────────────────────────────────────────────────────────────────────── */

const PAGE_URL = 'https://factoryjet.com/services/webflow-development';
const TITLE = 'Webflow Development Agency & Webflow Developers | FactoryJet';
const DESCRIPTION =
  'Webflow development agency for US B2B teams: custom Webflow builds, migrations to Webflow, CMS setup, Webflow SEO and CRM integrations, supported after launch.';
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
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'FactoryJet' }],
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
    languages: usServiceAlternates['webflow-development'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

/** Honest last-substantive-edit date. Bump only when the page content changes. */
const PAGE_MODIFIED = '2026-09-26';

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: TITLE,
  description: DESCRIPTION,
  dateModified: PAGE_MODIFIED,
  inLanguage: 'en-US',
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
    jobTitle: 'Founder, FactoryJet',
  },
  publisher: ORG_REF,
  about: { '@id': ORG_REF['@id'] },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '[data-speakable]', '.ans'] },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Webflow Development Services',
  serviceType: 'Webflow development, Webflow website design, migration to Webflow, Webflow CMS, Webflow SEO',
  alternateName: ['Webflow agency', 'Webflow development agency', 'Webflow developer', 'Webflow design agency'],
  description:
    'Custom Webflow website design and development, migrations from WordPress and other platforms to Webflow, Webflow CMS architecture, Webflow SEO and AI search setup, CRM integrations and custom code, and support after launch. The client owns the Webflow Workspace and site.',
  url: PAGE_URL,
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Webflow development services',
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
  mainEntity: WEBFLOW_FAQS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

export default function WebflowDevelopmentPage() {
  return (
    <>
      <script id="webflow-dev-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script id="webflow-dev-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="webflow-dev-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema items={webflowBreadcrumbs} />

      <SiteHeader locale="us" cta={{ label: 'Book an Audit', modal: true, region: 'us' }} />
      <WebflowDevelopmentSections />
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
