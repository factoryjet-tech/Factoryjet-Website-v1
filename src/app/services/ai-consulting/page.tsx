import type { Metadata } from 'next';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import { ORG_ID, ORG_REF } from '@/data/organization';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import AiConsultingSections, { aiConsultingBreadcrumbs, CAPABILITIES, PAGE_ONE_FIRMS } from '@/components/v2/AiConsultingSections';
import { AI_CONSULTING_FAQS } from '@/components/v2/AiConsultingFaqs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { aiConsultingAlternates } from '@/data/hreflangMap';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/ai-consulting: AI consulting services for the US.

   Built 2026-09-26 (US Tier 1 batch) in the current US design system, mirroring
   /services/ai-seo. Brief: pipeline/research/briefs/US-TIER1-BUILD-BRIEF-2026-09-26.md.
   Research: pipeline/research/US-OPPORTUNITIES-2026-09-26.md and
   pipeline/research/data/us-opps-2026-09-26/ (DataForSEO US, location 2840).

   Sections: src/components/v2/AiConsultingSections.tsx (static server component).
   FAQ: src/components/v2/AiConsultingFaqs.ts feeds BOTH the visible accordion and the
   FAQPage JSON-LD below. Service offers come from CAPABILITIES and the ItemList from
   PAGE_ONE_FIRMS, the same arrays the page renders. Every schema const declared here is
   rendered into a script tag; do not add one without wiring it up. The Organization
   node itself comes from the root layout (src/data/organization.ts), referenced by ORG_ID.

   Hreflang: aiConsultingAlternates in src/data/hreflangMap.ts, a reciprocal cluster
   with /uk/ai-consulting and /au/ai-consulting (en-US, en-GB, en-AU; x-default = this page).
───────────────────────────────────────────────────────────────────────────── */

const PAGE_URL = 'https://factoryjet.com/services/ai-consulting';
const TITLE = 'AI Consulting Services & AI Implementation | FactoryJet';
const DESCRIPTION =
  'AI consulting services for US small and mid-size businesses: an AI readiness assessment, a ranked roadmap, then the build and support from one team.';
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
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'FactoryJet AI consulting services' }],
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
    languages: aiConsultingAlternates,
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
  datePublished: PAGE_MODIFIED,
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
  name: 'AI Consulting Services',
  serviceType: 'AI consulting, AI strategy consulting, AI readiness assessment, AI implementation services',
  alternateName: ['AI consulting company', 'AI consultant', 'AI strategy consulting', 'AI implementation consultant', 'AI readiness assessment'],
  description:
    'AI consulting for small and mid-size US businesses: an AI readiness assessment, a ranked use-case roadmap and a build-or-buy recommendation, followed by implementation of the chosen AI on the client\'s own systems and monthly support after launch. The client owns everything built.',
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI consulting services',
    itemListElement: CAPABILITIES.map((cap) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: cap.title,
        description: cap.body,
        ...(cap.href && cap.href.startsWith('/') ? { url: `https://factoryjet.com${cap.href}` } : {}),
      },
    })),
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: AI_CONSULTING_FAQS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const firmListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Consulting firms on Google page one for AI consulting services and AI implementation services in the US, 26 September 2026',
  itemListOrder: 'https://schema.org/ItemListUnordered',
  numberOfItems: PAGE_ONE_FIRMS.length,
  itemListElement: PAGE_ONE_FIRMS.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: { '@type': 'Organization', name: c.name, url: `https://${c.domain}`, description: c.offers },
  })),
};

export default function AiConsultingServicePage() {
  return (
    <>
      <script id="ai-consulting-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script id="ai-consulting-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="ai-consulting-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="ai-consulting-firm-list-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(firmListSchema) }} />
      <BreadcrumbSchema items={aiConsultingBreadcrumbs} />

      <SiteHeader />
      <AiConsultingSections />
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
