import type { Metadata } from 'next';
import AiAgentDevelopmentSections, { breadcrumbs } from '@/components/v2/AiAgentDevelopmentSections';
import { AI_AGENT_FAQS } from '@/components/v2/AiAgentDevelopmentFaqs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import JsonLd from '@/components/JsonLd';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';

const url = 'https://factoryjet.com/services/ai-agent-development';
const title = 'Custom AI Agent Development Company USA | FactoryJet';
const description = 'Real AI agents built into your ERP, CRM, and workflows, not a demo that breaks in week one. Cost, timeline, and how we build. See how FactoryJet does it.';
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

export default function AiAgentDevelopmentPage() {
  return (
    <>
      <JsonLd id="ai-agent-faq-schema" data={faqSchema} />
      <BreadcrumbSchema items={breadcrumbs} />
      <SiteHeader cta={{ label: 'Scope your AI agent', href: '/contact' }} />
      <AiAgentDevelopmentSections />
      <SiteFooter />
    </>
  );
}
