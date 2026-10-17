import type { Metadata } from 'next';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import { ORG_ID, FOUNDER_ID } from '@/data/organization';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import LlmDevelopmentSections, { llmDevBreadcrumbs, CAPABILITIES, LLM_DEV_H1_EMPHASIS, LLM_DEV_H1_LEAD } from '@/components/v2/LlmDevelopmentSections';
import { LLM_DEV_FAQS } from '@/components/v2/LlmDevelopmentFaqs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/llm-development: LLM development services and company page, US.
   Built 2026-10-18 (batch 5, pipeline/research/SESSION-CARRYOVER-2026-10-18-MIDMARKET-AI.md),
   mirroring /services/ai-development (same shell, CSS and schema pattern).

   Keywords (DataForSEO US, 2026-10-17/18): llm development services 260 (KD 10, +700% yoy),
   llm development 140, llm development company 110, llm app development 70,
   llm application development 70, custom llm development 20.

   Ownership: this page = the model work (model choice, RAG, fine-tuning, evaluation, LLM apps
   and APIs, private deployment). Broad custom AI software lives on /services/ai-development,
   agents on /services/ai-agent-development, one-app AI on /services/ai-integration-services.

   Sections: src/components/v2/LlmDevelopmentSections.tsx (static server component).
   FAQ: src/components/v2/LlmDevelopmentFaqs.ts feeds BOTH the visible accordion and the
   FAQPage JSON-LD below. Every schema const declared here is rendered into a script tag.
   US only: no hreflang cluster yet.
───────────────────────────────────────────────────────────────────────────── */

const PAGE_URL = 'https://factoryjet.com/services/llm-development';
const TITLE = 'LLM Development Services & Company USA | FactoryJet';
const H1 = `${LLM_DEV_H1_LEAD} ${LLM_DEV_H1_EMPHASIS}`;
const DESCRIPTION =
  'LLM development services for US businesses: models tested on your own cases, RAG over your documents, fine-tuning when needed, and LLM apps in your ERP and CRM.';
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
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'FactoryJet: LLM development services' }],
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
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

/** Honest last-substantive-edit date. Bump only when the page content changes. */
const PAGE_PUBLISHED = '2026-10-18';
const PAGE_MODIFIED = '2026-10-18';

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: TITLE,
  headline: H1,
  description: DESCRIPTION,
  datePublished: PAGE_PUBLISHED,
  dateModified: PAGE_MODIFIED,
  inLanguage: 'en-US',
  author: { '@id': FOUNDER_ID, '@type': 'Person', name: 'Bhavesh Barot', url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/', jobTitle: 'Founder, FactoryJet' },
  publisher: { '@id': ORG_ID },
  about: { '@id': `${PAGE_URL}#service` },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '[data-speakable]', '.ans'] },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'LLM Development Services',
  serviceType: 'Large language model application development: model selection, retrieval-augmented generation (RAG), fine-tuning, evaluation, LLM integration and private deployment',
  alternateName: ['LLM development company', 'Custom LLM development', 'LLM application development', 'LLM app development'],
  description:
    'Large language model applications built for a business: candidate models scored on the client\'s own test cases, retrieval over company documents with per-user permissions, fine-tuning only when tests show it is needed, integration with ERP, CRM and helpdesk systems through official APIs, and re-testing after every model or data change. The client owns the code, prompts, evaluation sets and any tuned weights.',
  url: PAGE_URL,
  provider: { '@id': ORG_ID },
  areaServed: { '@type': 'Country', name: 'United States' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'LLM development services',
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
  '@id': `${PAGE_URL}#faq`,
  mainEntity: LLM_DEV_FAQS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

export default function LlmDevelopmentPage() {
  return (
    <>
      <script id="llm-development-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script id="llm-development-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="llm-development-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema items={llmDevBreadcrumbs} />

      <SiteHeader locale="us" cta={{ label: 'Book an Audit', modal: true, region: 'us' }} />
      <LlmDevelopmentSections />
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
