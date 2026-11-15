import type { Metadata } from 'next';
import { homeAlternates } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ExitIntentLeadForm from '@/components/ExitIntentLeadForm';
import HomeSections from '@/components/v2/HomeSections';
import { HOME_FAQS } from '@/components/v2/HomeFaqs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

/* ─────────────────────────────────────────────────────────────────────────────
   Homepage, rebuilt 2026-09-23 in the AI Agent Development page's design system,
   cut to a short single-offer page on 2026-11-15 (see HomeSections.tsx header).

   Entity (title/meta/Service schema): "Ecommerce Development Company" for DTC and
   B2B brands, with AI development, AI search & SEO, and website design as linked
   secondary lines (each owned by its own service page, see
   pipeline/research/HOMEPAGE-REDESIGN-KEYWORDS-2026-09-23.md).

   Sections live in src/components/v2/HomeSections.tsx; the FAQ array in
   HomeFaqs.ts feeds both the visible accordion and the FAQPage schema below.
───────────────────────────────────────────────────────────────────────────── */

const TITLE = 'Ecommerce Development Company for Shopify & ERP | FactoryJet';
const DESCRIPTION =
  'Shopify and WooCommerce stores and B2B portals, connected to QuickBooks, NetSuite or Odoo, with AI agents for repeat work. Demo before you sign.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://factoryjet.com',
    images: [{ url: 'https://factoryjet.com/images/home/home-unified-commerce-model.webp', width: 1400, height: 933, alt: 'One commerce hub connected to a storefront, a cart, warehouse shelving, and wholesale pallets' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['https://factoryjet.com/images/home/home-unified-commerce-model.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com',
    languages: homeAlternates,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

// Freshness signal. Keep honest: bump when the page's content actually changes.
const PAGE_MODIFIED = '2026-11-15';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com#webpage',
  url: 'https://factoryjet.com',
  name: TITLE,
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.lead', '.answer', '.ans'] },
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HOME_FAQS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const ORG_SCHEMA = { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' };

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Ecommerce development',
  name: 'Ecommerce development and ERP integration',
  description:
    'Ecommerce development for DTC and B2B brands: Shopify, Shopify Plus and WooCommerce stores and B2B portals, connected to QuickBooks, NetSuite, Odoo and other ERPs, plus AI agents that draft sales orders and quotes from emailed purchase orders and RFQs for a person to approve.',
  provider: { '@id': 'https://factoryjet.com/#organization' },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', name: 'DTC and B2B brands' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'FactoryJet services',
    itemListElement: [
      { name: 'Ecommerce development', url: 'https://factoryjet.com/services/ecommerce-development' },
      { name: 'B2B ecommerce portals', url: 'https://factoryjet.com/b2b-ecommerce' },
      { name: 'Ecommerce ERP integration', url: 'https://factoryjet.com/services/ecommerce-erp-integration' },
      { name: 'Shopify QuickBooks integration', url: 'https://factoryjet.com/services/shopify-quickbooks-integration' },
      { name: 'AI agent development', url: 'https://factoryjet.com/services/ai-agent-development' },
    ].map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.name, url: s.url } })),
  },
};

export default function USHomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <BreadcrumbSchema items={[{ name: 'Home', url: 'https://factoryjet.com' }]} />

      <SiteHeader cta={{ label: 'Get a commerce audit', modal: true, region: 'us' }} />

      <HomeSections />

      <ExitIntentLeadForm
        region="us"
        source="exit_intent_us_home"
        heading="Get a free commerce audit"
        subheading="Tell us your store and the systems it should connect to. Just your name and email."
        promo="Free commerce audit, no cost, no obligation"
      />
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
