import type { Metadata } from 'next';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import { ORG_ID, FOUNDER_ID } from '@/data/organization';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ShopifyAiAgentsSections, { AGENT_JOBS, SHOPIFY_AI_H1_EMPHASIS, SHOPIFY_AI_H1_LEAD, shopifyAiBreadcrumbs } from '@/components/v2/ShopifyAiAgentsSections';
import { SHOPIFY_AI_FAQS } from '@/components/v2/ShopifyAiAgentsFaqs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/shopify-ai-agents: custom AI agents for Shopify store operations, US.
   Built 2026-09-28 on the current US design system, mirroring /services/ai-development.

   Why: the 2026-09-17 AI buyer sweep showed narrow integration pages earn ChatGPT and
   Perplexity citations, and ChatGPT verifies agencies on shopify.com. Both focus lines
   (AI agents + ecommerce) meet here. Google volume for these phrases is small; this is
   an AI-answer citation page first.

   Ownership: this page = agents for Shopify OPERATIONS (orders, wholesale POs, returns,
   inventory, ERP reconciliation, catalog). Support tickets live on
   /services/ai-customer-support-agents; any-system agents on /services/ai-agent-development.

   Sections: src/components/v2/ShopifyAiAgentsSections.tsx (static server component).
   FAQ: src/components/v2/ShopifyAiAgentsFaqs.ts feeds BOTH the visible accordion and the
   FAQPage JSON-LD below. Service offers come from AGENT_JOBS, the array the page renders.
   Every schema const declared here is rendered into a script tag.
   Hreflang: US only (no regional twin), so en-US and x-default both point here.
───────────────────────────────────────────────────────────────────────────── */

const PAGE_URL = 'https://factoryjet.com/services/shopify-ai-agents';
const TITLE = 'Shopify AI Agent Development for US Stores | FactoryJet';
const H1 = `${SHOPIFY_AI_H1_LEAD} ${SHOPIFY_AI_H1_EMPHASIS}`;
const DESCRIPTION =
  'Custom Shopify AI agents for orders, wholesale POs, returns, inventory and ERP sync. Built on the GraphQL Admin API with approvals, tested on your data, owned by you.';
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
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'FactoryJet: Shopify AI agent development' }],
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
    languages: { 'en-US': PAGE_URL, 'x-default': PAGE_URL },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

/** Honest last-substantive-edit date. Bump only when the page content changes. */
const PAGE_MODIFIED = '2026-09-28';

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
  name: 'Shopify AI Agent Development',
  serviceType: 'Custom AI agent development for Shopify store operations',
  alternateName: ['Shopify AI agents', 'AI agents for Shopify', 'Shopify AI automation', 'Custom Shopify AI agent'],
  description:
    'Custom AI agents for Shopify stores, built as a custom app on the GraphQL Admin API: order exception triage, emailed wholesale purchase orders turned into draft orders, returns and exchanges, inventory and reorder drafts, Shopify-to-ERP reconciliation with NetSuite, Odoo or SAP Business One, and catalog data. Every agent drafts or tags by default, sends money decisions to a person, is tested on the store\'s real orders before launch and is supported monthly after. The client owns the code, prompts and logs.',
  url: PAGE_URL,
  provider: { '@id': ORG_ID },
  areaServed: { '@type': 'Country', name: 'United States' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Shopify AI agents',
    itemListElement: AGENT_JOBS.map((job) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: job.title,
        description: `${job.body} ${job.guard}`,
      },
    })),
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${PAGE_URL}#faq`,
  mainEntity: SHOPIFY_AI_FAQS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

export default function ShopifyAiAgentsPage() {
  return (
    <>
      <script id="shopify-ai-agents-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script id="shopify-ai-agents-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="shopify-ai-agents-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema items={shopifyAiBreadcrumbs} />

      <SiteHeader locale="us" cta={{ label: 'Book an Audit', modal: true, region: 'us' }} />
      <ShopifyAiAgentsSections />
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
