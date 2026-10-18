import type { Metadata } from 'next';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import { ORG_ID, FOUNDER_ID } from '@/data/organization';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import AiMedicalScribeSections, { scribeBreadcrumbs, CAPABILITIES, SCRIBE_H1_EMPHASIS, SCRIBE_H1_LEAD } from '@/components/v2/AiMedicalScribeSections';
import { SCRIBE_FAQS } from '@/components/v2/AiMedicalScribeFaqs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/ai-medical-scribe-agents: AI agents that draft clinical notes and referral letters
   for specialist clinics, orthopedics first. US. Built 2026-10-18 as the landing page for AI
   agent film 2, "Charting at the kitchen table" (docs/video/ai-agent-film-02-charting/).

   Keywords (DataForSEO US, 18 Oct 2026): ai medical scribe 5,400, ai scribe 2,400,
   ai charting 1,000, ambient ai scribe 880, ai clinical notes 110, ai soap notes 110,
   ambient clinical documentation 110, ai clinical documentation 90, orthopedic scribe 50.
   Research script: pipeline/research/dfs_clinical_notes_page_2026_10_18.py.

   Ownership: this page = clinical note and referral letter drafting. Phone, scheduling and
   intake agents live on /services/healthcare-ai-agents (the parent in the breadcrumb).

   Sections: src/components/v2/AiMedicalScribeSections.tsx (static server component).
   FAQ: src/components/v2/AiMedicalScribeFaqs.ts feeds BOTH the visible accordion and the
   FAQPage JSON-LD below. Every schema const declared here is rendered into a script tag.
   US only: no hreflang cluster yet.
───────────────────────────────────────────────────────────────────────────── */

const PAGE_URL = 'https://factoryjet.com/services/ai-medical-scribe-agents';
const TITLE = 'AI Medical Scribe Agents for Orthopedic Clinics | FactoryJet';
const H1 = `${SCRIBE_H1_LEAD} ${SCRIBE_H1_EMPHASIS}`;
const DESCRIPTION =
  'AI medical scribe agents for specialist clinics: they read the referral, draft the note under your headings and the letter back, flag mismatches, and file nothing.';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'FactoryJet: AI medical scribe agents for specialist clinics' }],
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
  name: 'AI Medical Scribe Agent Development',
  serviceType: 'Custom AI agents that draft clinical notes and referral letters for specialist clinics',
  alternateName: ['AI medical scribe agent', 'AI clinical documentation agent', 'AI scribe for orthopedics', 'Note-drafting AI agent'],
  description:
    'Custom AI agents for referral-based specialist clinics. The agent reads the referral letter, the last visit and the medication list, drafts the visit note under the clinic\'s own headings and a letter back to the referring doctor, flags mismatches between the referral and the visit without deciding them, and queues every draft for the doctor\'s signature without filing or sending anything.',
  url: PAGE_URL,
  provider: { '@id': ORG_ID },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'Audience', audienceType: 'Specialist medical clinics, starting with orthopedic practices' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI medical scribe agent capabilities',
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
  mainEntity: SCRIBE_FAQS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

export default function AiMedicalScribeAgentsPage() {
  return (
    <>
      <script id="ai-medical-scribe-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script id="ai-medical-scribe-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="ai-medical-scribe-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema items={scribeBreadcrumbs} />

      <SiteHeader locale="us" cta={{ label: 'Book an Audit', modal: true, region: 'us' }} />
      <AiMedicalScribeSections />
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
