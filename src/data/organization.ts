/**
 * THE single definition of FactoryJet as an entity (schema.org Organization).
 *
 * Rendered once, sitewide, by src/app/layout.tsx. Every other page must point
 * at it with ORG_REF (or `{ '@id': ORG_ID }`) and must NOT redefine the company's
 * name, description, address, phone, founder or sameAs. Search engines merge
 * every node that shares ORG_ID into one entity, so a page-level copy with
 * different facts silently rewrites who we are.
 *
 * Facts confirmed by Bhavesh on 2026-09-24 (see
 * pipeline/research/ENTITY-AUDIT-2026-09-24.md):
 * - One public name: "FactoryJet". Never "FactoryJet Technologies".
 * - Legal entity: FactoryJet Private Limited, registered office below.
 * - No phone number anywhere (spam). WhatsApp buttons are the only number.
 * - Started in 2014 as a B2B construction-materials marketplace in India, now a
 *   software services company. Stated in disambiguatingDescription so AI
 *   assistants stop splitting us into several companies.
 */

export const SITE_URL = 'https://factoryjet.com';
export const ORG_ID = `${SITE_URL}/#organization`;
export const FOUNDER_ID = `${SITE_URL}/#bhavesh-barot`;

export const ORG_NAME = 'FactoryJet';
export const ORG_LEGAL_NAME = 'FactoryJet Private Limited';
export const ORG_EMAIL = 'connect@factoryjet.com';
export const ORG_LOGO = `${SITE_URL}/logo.png`;

export const ORG_DESCRIPTION =
  'FactoryJet is an ecommerce and AI services company. We design, build, implement and support online stores, B2B portals, AI agents, AI search and SEO, and websites for DTC and B2B brands, and the client owns everything we build.';

export const ORG_DISAMBIGUATION =
  'FactoryJet started in India in 2014 as a B2B marketplace for construction materials and now runs the same brand as an ecommerce and AI services company. It is one company, not several.';

export const ORG_SAME_AS: ReadonlyArray<string> = [
  'https://www.linkedin.com/company/factoryjet',
  'https://www.instagram.com/factoryjetb2b',
  'https://www.facebook.com/factoryjetb2b',
  'https://x.com/FactoryJet_Tech',
  'https://clutch.co/profile/factoryjet-private',
  'https://www.goodfirms.co/company/factoryjet-private-limited',
  'https://www.designrush.com/agency/profile/factoryjet',
  'https://www.softwaresuggest.com/factoryjet',
  'https://www.crunchbase.com/organization/factoryjet',
];

/** Full entity. Render ONLY in src/app/layout.tsx. */
export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: ORG_NAME,
  legalName: ORG_LEGAL_NAME,
  url: SITE_URL,
  logo: { '@type': 'ImageObject', url: ORG_LOGO },
  image: ORG_LOGO,
  description: ORG_DESCRIPTION,
  disambiguatingDescription: ORG_DISAMBIGUATION,
  foundingDate: '2014',
  foundingLocation: { '@type': 'Place', name: 'Bengaluru, India' },
  founder: {
    '@type': 'Person',
    '@id': FOUNDER_ID,
    name: 'Bhavesh Barot',
    jobTitle: 'Founder & CEO',
    url: `${SITE_URL}/author/bhavesh-barot`,
    sameAs: ['https://www.linkedin.com/in/bhavesh-ai-gtm-expert/'],
  },
  email: ORG_EMAIL,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '70/1, Willow Herbs, Tigalarpalya, Kundalahalli',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560037',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: ORG_EMAIL,
    url: `${SITE_URL}/contact`,
    availableLanguage: ['English'],
  },
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'India' },
  ],
  knowsAbout: [
    'Ecommerce development',
    'B2B ecommerce',
    'Omnichannel commerce',
    'Shopify and Shopify Plus development',
    'Adobe Commerce (Magento) development',
    'BigCommerce development',
    'WooCommerce development',
    'AI agent development',
    'AI search optimization (GEO and AEO)',
    'Search engine optimization',
    'Website design and development',
  ],
  sameAs: ORG_SAME_AS,
} as const;

/**
 * Use wherever a page needs FactoryJet as provider / publisher / brand.
 * Carries name + url so validators are happy, nothing else.
 */
export const ORG_REF = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: ORG_NAME,
  url: SITE_URL,
} as const;
