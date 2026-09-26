import type { Metadata } from 'next';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import { ORG_ID, FOUNDER_ID } from '@/data/organization';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import AiDevelopmentSections, { aiDevBreadcrumbs, AI_DEV_COMPANIES, AI_DEV_H1_EMPHASIS, AI_DEV_H1_LEAD, CAPABILITIES } from '@/components/v2/AiDevelopmentSections';
import { AI_DEV_FAQS } from '@/components/v2/AiDevelopmentFaqs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { aiDevelopmentAlternates } from '@/data/hreflangMap';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/ai-development: AI development services and company page, US.
   Built 2026-09-26 (US Tier 1 wave, brief pipeline/research/briefs/US-TIER1-BUILD-BRIEF-2026-09-26.md)
   on the current US design system, mirroring /services/ai-seo and /services/web-design.

   Keywords (DataForSEO US, 2026-09-26): ai development company 2,900, ai development
   services 2,400, generative ai development services 720, generative ai development
   company 590, custom ai development 210, llm development company 110, rag development
   services 70.

   Ownership: this page = custom AI software built into existing systems. Agents live on
   /services/ai-agent-development, one-app AI integration on /services/ai-integration-services,
   strategy on /services/ai-consulting.

   Sections: src/components/v2/AiDevelopmentSections.tsx (static server component).
   FAQ: src/components/v2/AiDevelopmentFaqs.ts feeds BOTH the visible accordion and the
   FAQPage JSON-LD below. Service offers come from CAPABILITIES and the ItemList from
   AI_DEV_COMPANIES, the same arrays the page renders. Every schema const declared here is
   rendered into a script tag; do not add one without wiring it up.
   Hreflang: aiDevelopmentAlternates in src/data/hreflangMap.ts, a reciprocal cluster
   with /uk/ai-development and /au/ai-development (x-default = this page).
───────────────────────────────────────────────────────────────────────────── */

const PAGE_URL = 'https://factoryjet.com/services/ai-development';
const TITLE = 'AI Development Services & Company USA | FactoryJet';
const H1 = `${AI_DEV_H1_LEAD} ${AI_DEV_H1_EMPHASIS}`;
const DESCRIPTION =
  'AI development company for US businesses: custom AI software, RAG over your documents, and AI built into your store, ERP and CRM, tested before launch.';
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
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'FactoryJet: AI development services' }],
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
    languages: aiDevelopmentAlternates,
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
  headline: H1,
  description: DESCRIPTION,
  datePublished: PAGE_MODIFIED,
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
  name: 'AI Development Services',
  serviceType: 'Custom AI development, AI integration, retrieval-augmented generation (RAG), AI evaluation and secure deployment',
  alternateName: ['AI development company', 'Custom AI development', 'Generative AI development services', 'AI software development'],
  description:
    'Custom AI software built into the systems a business already runs: retrieval-augmented generation over company documents, AI integrated with ecommerce, ERP, CRM and helpdesk platforms, model selection and fine-tuning where justified, evaluation against real test cases, secure deployment and monthly support. The client owns the code, prompts and evaluation sets.',
  url: PAGE_URL,
  provider: { '@id': ORG_ID },
  areaServed: { '@type': 'Country', name: 'United States' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI development services',
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
  mainEntity: AI_DEV_FAQS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const companyListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${PAGE_URL}#companies`,
  name: 'US AI development companies seen on Google and in AI answers, 26 September 2026',
  itemListOrder: 'https://schema.org/ItemListUnordered',
  numberOfItems: AI_DEV_COMPANIES.length,
  itemListElement: AI_DEV_COMPANIES.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: { '@type': 'Organization', name: c.name, url: `https://${c.domain}`, description: c.offers },
  })),
};

export default function AiDevelopmentPage() {
  return (
    <>
      <script id="ai-development-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script id="ai-development-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="ai-development-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="ai-development-company-list-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(companyListSchema) }} />
      <BreadcrumbSchema items={aiDevBreadcrumbs} />

      <SiteHeader locale="us" cta={{ label: 'Book an Audit', modal: true, region: 'us' }} />
      <AiDevelopmentSections />
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
