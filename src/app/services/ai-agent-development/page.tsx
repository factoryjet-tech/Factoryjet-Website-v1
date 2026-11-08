import type { Metadata } from 'next';
import AiAgentDevelopmentSections, { breadcrumbs } from '@/components/v2/AiAgentDevelopmentSections';
import { AI_AGENT_FAQS } from '@/components/v2/AiAgentDevelopmentFaqs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import JsonLd from '@/components/JsonLd';
import { ORG_ID } from '@/data/organization';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import StickyCtaLabel from '@/components/v2/StickyCtaLabel';

const url = 'https://factoryjet.com/services/ai-agent-development';
// Title and description follow US demand measured 2026-10-05 (DataForSEO):
// "ai agent development company" 720/mo, "ai agent development" 590,
// "ai agent development services" 480, "custom ai agent development" 110.
// 2026-11-08: led with "ai agents for business" (US 3,600/mo, $71 CPC, weakest
// page-one site 35 referring domains). Search Console 8 Aug to 6 Nov 2026 showed
// 185 impressions and 0 clicks, top non-brand queries "custom ai agent development
// services" and "ai agent development company in the usa", so both phrases stay.
const title = 'AI Agents for Business | AI Agent Development Company';
const description = 'Custom AI agents for business, built into your ERP, CRM, help desk and Shopify store by an AI agent development company. Jobs by department, cost and timeline.';
const socialImage = 'https://factoryjet.com/images/us/services/ai-agent-definition-workbench.webp';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { type: 'website', siteName: 'FactoryJet', url, title, description, locale: 'en_US', images: [{ url: socialImage, width: 1400, height: 933, alt: 'AI agent connected to documents, data, tools, and human approval' }] },
  twitter: { card: 'summary_large_image', title, description, images: [socialImage] },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: AI_AGENT_FAQS.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
};

// Freshness signal. Bump only when the page content actually changes.
const PAGE_MODIFIED = '2026-11-08';

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${url}#webpage`,
  url,
  name: title,
  description,
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': ORG_ID },
  about: { '@id': `${url}#service` },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${url}#service`,
  name: 'Custom AI Agent Development',
  serviceType: 'AI agent development',
  alternateName: 'AI agents for business',
  description:
    'FactoryJet designs, builds, integrates and supports custom AI agents that work inside NetSuite, SAP, Odoo, Salesforce, HubSpot, Zendesk, Gorgias and Shopify, with human approval on decisions that matter. The client owns the code.',
  provider: { '@id': ORG_ID },
  areaServed: { '@type': 'Country', name: 'United States' },
  url,
};

export default function AiAgentDevelopmentPage() {
  return (
    <>
      <JsonLd id="ai-agent-faq-schema" data={faqSchema} />
      <JsonLd id="ai-agent-webpage-schema" data={webPageSchema} />
      <JsonLd id="ai-agent-service-schema" data={serviceSchema} />
      <BreadcrumbSchema items={breadcrumbs} />
      <SiteHeader cta={{ label: 'See a demo on my data', href: '/contact' }} />
        <StickyCtaLabel label="See a demo on my data" title="Demo first" />
      <AiAgentDevelopmentSections />
      <SiteFooter />
    </>
  );
}
