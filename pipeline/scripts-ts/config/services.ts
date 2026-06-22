/**
 * Service catalog — what FactoryJet sells.
 *
 * Six services, curated from the live offering. Each has:
 *   - slug: URL-safe, used in page paths
 *   - name: display
 *   - keywords: search-term variants we want to rank for
 *   - industries: SMB sectors most likely to buy this service
 *
 * Edits are strategic — code review, not config tweak.
 */

export interface Service {
  slug: string;
  name: string;
  /** Variants like ['web design', 'website design', 'web design services']. */
  keywords: readonly string[];
  /** SMB sectors this service is most relevant to. */
  industries: readonly string[];
}

export const SERVICES: readonly Service[] = [
  {
    slug: 'web-design',
    name: 'Web Design',
    keywords: [
      'web design',
      'website design',
      'web design services',
      'web design agency',
    ],
    industries: ['retail', 'professional services', 'healthcare', 'hospitality', 'real estate'],
  },
  {
    slug: 'seo',
    name: 'SEO',
    keywords: [
      'seo services',
      'seo agency',
      'search engine optimization',
      'seo company',
    ],
    industries: ['e-commerce', 'professional services', 'healthcare', 'legal', 'home services'],
  },
  {
    slug: 'paid-media',
    name: 'Paid Media',
    keywords: [
      'google ads management',
      'ppc agency',
      'paid media agency',
      'google ads agency',
    ],
    industries: ['e-commerce', 'home services', 'b2b saas', 'healthcare', 'legal'],
  },
  {
    slug: 'web-development',
    name: 'Web Development',
    keywords: [
      'web development',
      'web development services',
      'web development agency',
      'custom web development',
    ],
    industries: ['b2b saas', 'fintech', 'e-commerce', 'professional services'],
  },
  {
    slug: 'branding',
    name: 'Branding',
    keywords: [
      'branding agency',
      'brand design',
      'brand identity design',
      'logo design',
    ],
    industries: ['startups', 'consumer goods', 'hospitality', 'professional services'],
  },
  {
    slug: 'programmatic-seo',
    name: 'Programmatic SEO',
    keywords: [
      'programmatic seo',
      'programmatic seo agency',
      'programmatic seo services',
    ],
    industries: ['b2b saas', 'marketplaces', 'directories', 'e-commerce'],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
