/**
 * Hreflang mapping for FactoryJet pages.
 *
 * Rules enforced:
 *   - Absolute URLs only.
 *   - x-default always points to the India (en-IN) URL (or US if IN doesn't exist).
 *   - en-AE points to /uae (country landing) until dedicated UAE service pages exist.
 *   - Pages that exist in only one country omit all other locale keys;
 *     only the existing locale + x-default are included.
 *
 * Consume via Next.js Metadata API:
 *     import { homeAlternates } from '@/data/hreflangMap'
 *     alternates: { canonical: '...', languages: homeAlternates }
 */

// ===========================================================================
// COUNTRY-LEVEL LANDING PAGES
// ===========================================================================

/** Full 3-locale cluster for home pages: / ↔ /us ↔ /uae */
export const homeAlternates = {
  'en-IN': 'https://factoryjet.com',
  'en-US': 'https://factoryjet.com/us',
  'en-AE': 'https://factoryjet.com/uae',
  'x-default': 'https://factoryjet.com',
} as const

// ===========================================================================
// SERVICE PAGES (IN + US variants exist; UAE points to /uae landing)
// ===========================================================================

/** Full 3-locale cluster for /services/web-design ↔ /us/services/web-design */
export const webDesignAlternates = {
  'en-IN': 'https://factoryjet.com/services/web-design',
  'en-US': 'https://factoryjet.com/us/services/web-design',
  'en-AE': 'https://factoryjet.com/uae',
  'x-default': 'https://factoryjet.com/services/web-design',
} as const

/** Full 3-locale cluster for /services/ecommerce-development ↔ /us/services/ecommerce-development */
export const ecommerceAlternates = {
  'en-IN': 'https://factoryjet.com/services/ecommerce-development',
  'en-US': 'https://factoryjet.com/us/services/ecommerce-development',
  'en-AE': 'https://factoryjet.com/uae',
  'x-default': 'https://factoryjet.com/services/ecommerce-development',
} as const

// ===========================================================================
// GENERAL PAGES (IN + US variants exist)
// ===========================================================================

/** Pricing pages: /pricing ↔ /us/pricing */
export const pricingAlternates = {
  'en-IN': 'https://factoryjet.com/pricing',
  'en-US': 'https://factoryjet.com/us/pricing',
  'en-AE': 'https://factoryjet.com/uae',
  'x-default': 'https://factoryjet.com/pricing',
} as const

/** About pages: /about ↔ /us/about */
export const aboutAlternates = {
  'en-IN': 'https://factoryjet.com/about',
  'en-US': 'https://factoryjet.com/us/about',
  'en-AE': 'https://factoryjet.com/uae',
  'x-default': 'https://factoryjet.com/about',
} as const

// ===========================================================================
// SINGLE-COUNTRY PAGES (no alternates in other countries)
// ===========================================================================

/** Contact page (India only) */
export const contactAlternates = {
  'en-IN': 'https://factoryjet.com/contact',
  'x-default': 'https://factoryjet.com/contact',
} as const

/** FAQ page (US only) */
export const faqAlternates = {
  'en-US': 'https://factoryjet.com/us/faq',
  'x-default': 'https://factoryjet.com/us/faq',
} as const

// ===========================================================================
// CITY-SPECIFIC SERVICE PAGES
// ===========================================================================

// ---------------------------------------------------------------------------
// India-only city pages  (no US / UAE equivalents exist)
// Per CITY PAGE RULE: only en-IN + x-default.
// ---------------------------------------------------------------------------

export const webDesignCityAlternatesIN = {
  delhi: {
    'en-IN': 'https://factoryjet.com/services/web-design/delhi',
    'x-default': 'https://factoryjet.com/services/web-design/delhi',
  },
  mumbai: {
    'en-IN': 'https://factoryjet.com/services/web-design/mumbai',
    'x-default': 'https://factoryjet.com/services/web-design/mumbai',
  },
  bangalore: {
    'en-IN': 'https://factoryjet.com/services/web-design/bangalore',
    'x-default': 'https://factoryjet.com/services/web-design/bangalore',
  },
  chennai: {
    'en-IN': 'https://factoryjet.com/services/web-design/chennai',
    'x-default': 'https://factoryjet.com/services/web-design/chennai',
  },
  hyderabad: {
    'en-IN': 'https://factoryjet.com/services/web-design/hyderabad',
    'x-default': 'https://factoryjet.com/services/web-design/hyderabad',
  },
  pune: {
    'en-IN': 'https://factoryjet.com/services/web-design/pune',
    'x-default': 'https://factoryjet.com/services/web-design/pune',
  },
  ahmedabad: {
    'en-IN': 'https://factoryjet.com/services/web-design/ahmedabad',
    'x-default': 'https://factoryjet.com/services/web-design/ahmedabad',
  },
  madurai: {
    'en-IN': 'https://factoryjet.com/services/web-design/madurai',
    'x-default': 'https://factoryjet.com/services/web-design/madurai',
  },
  surat: {
    'en-IN': 'https://factoryjet.com/services/web-design/surat',
    'x-default': 'https://factoryjet.com/services/web-design/surat',
  },
} as const

// ---------------------------------------------------------------------------
// US-only city pages  (no India / UAE equivalents exist)
// Per CITY PAGE RULE: only en-US + x-default.
// ---------------------------------------------------------------------------

export const webDesignCityAlternatesUS = {
  'new-york': {
    'en-US': 'https://factoryjet.com/us/services/web-design/new-york',
    'x-default': 'https://factoryjet.com/us/services/web-design/new-york',
  },
  'cleveland': {
    'en-US': 'https://factoryjet.com/us/services/web-design/cleveland',
    'x-default': 'https://factoryjet.com/us/services/web-design/cleveland',
  },
} as const

// ---------------------------------------------------------------------------
// US-only e-commerce city pages  (no India / UAE equivalents exist)
// Per CITY PAGE RULE: only en-US + x-default.
// ---------------------------------------------------------------------------

export const ecommerceCityAlternatesUS: Record<string, { 'en-US': string; 'x-default': string }> = {
  'boise': {
    'en-US': 'https://factoryjet.com/us/services/ecommerce-development/boise',
    'x-default': 'https://factoryjet.com/us/services/ecommerce-development/boise',
  },
  'sioux-falls': {
    'en-US': 'https://factoryjet.com/us/services/ecommerce-development/sioux-falls',
    'x-default': 'https://factoryjet.com/us/services/ecommerce-development/sioux-falls',
  },
  'lincoln': {
    'en-US': 'https://factoryjet.com/us/services/ecommerce-development/lincoln',
    'x-default': 'https://factoryjet.com/us/services/ecommerce-development/lincoln',
  },
  'chattanooga': {
    'en-US': 'https://factoryjet.com/us/services/ecommerce-development/chattanooga',
    'x-default': 'https://factoryjet.com/us/services/ecommerce-development/chattanooga',
  },
  'fargo': {
    'en-US': 'https://factoryjet.com/us/services/ecommerce-development/fargo',
    'x-default': 'https://factoryjet.com/us/services/ecommerce-development/fargo',
  },
}
