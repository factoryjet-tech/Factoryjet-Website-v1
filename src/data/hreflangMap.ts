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
  'en-GB': 'https://factoryjet.com/uk',
  'x-default': 'https://factoryjet.com',
} as const

// ===========================================================================
// SERVICE PAGES (IN + US variants exist; UAE points to /uae landing)
// ===========================================================================

/** Full 3-locale cluster for /services/web-design ↔ /us/services/web-design */
export const webDesignAlternates = {
  'en-IN': 'https://factoryjet.com/web-design',
  'en-US': 'https://factoryjet.com/us/services/web-design',
  'en-AE': 'https://factoryjet.com/uae',
  'en-GB': 'https://factoryjet.com/uk',
  'x-default': 'https://factoryjet.com/web-design',
} as const

/** Full 3-locale cluster for /services/ecommerce-development ↔ /us/services/ecommerce-development */
export const ecommerceAlternates = {
  'en-IN': 'https://factoryjet.com/services/ecommerce-development',
  'en-US': 'https://factoryjet.com/us/services/ecommerce-development',
  'en-AE': 'https://factoryjet.com/uae',
  'en-GB': 'https://factoryjet.com/uk',
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
  'en-GB': 'https://factoryjet.com/uk',
  'x-default': 'https://factoryjet.com/pricing',
} as const

/** About pages: /about ↔ /us/about */
export const aboutAlternates = {
  'en-IN': 'https://factoryjet.com/about',
  'en-US': 'https://factoryjet.com/us/about',
  'en-AE': 'https://factoryjet.com/uae',
  'en-GB': 'https://factoryjet.com/uk',
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

/** Website Cost guide page (US only — no India equivalent) */
export const websiteCostAlternates = {
  'en-US': 'https://factoryjet.com/us/website-cost',
  'x-default': 'https://factoryjet.com/us/website-cost',
} as const

/** AI Agency service page (US only — no India equivalent) */
export const aiAgencyAlternates = {
  'en-US': 'https://factoryjet.com/us/services/ai-agency',
  'x-default': 'https://factoryjet.com/us/services/ai-agency',
} as const

/** Small Business Website Design service page (US only — no India equivalent) */
export const smallBusinessWebDesignAlternates = {
  'en-US': 'https://factoryjet.com/us/services/small-business-website-design',
  'x-default': 'https://factoryjet.com/us/services/small-business-website-design',
} as const

/** Magento Development service page (US only — no India equivalent) */
export const magentoDevelopmentAlternates = {
  'en-US': 'https://factoryjet.com/us/services/magento-development',
  'x-default': 'https://factoryjet.com/us/services/magento-development',
} as const

/** WooCommerce Development service page (US only — no India equivalent) */
export const woocommerceDevelopmentAlternates = {
  'en-US': 'https://factoryjet.com/us/services/woocommerce-development',
  'x-default': 'https://factoryjet.com/us/services/woocommerce-development',
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
    'en-IN': 'https://factoryjet.com/web-design/delhi',
    'x-default': 'https://factoryjet.com/web-design/delhi',
  },
  mumbai: {
    'en-IN': 'https://factoryjet.com/web-design/mumbai',
    'x-default': 'https://factoryjet.com/web-design/mumbai',
  },
  bangalore: {
    'en-IN': 'https://factoryjet.com/web-design/bangalore',
    'x-default': 'https://factoryjet.com/web-design/bangalore',
  },
  chennai: {
    'en-IN': 'https://factoryjet.com/web-design/chennai',
    'x-default': 'https://factoryjet.com/web-design/chennai',
  },
  hyderabad: {
    'en-IN': 'https://factoryjet.com/web-design/hyderabad',
    'x-default': 'https://factoryjet.com/web-design/hyderabad',
  },
  pune: {
    'en-IN': 'https://factoryjet.com/web-design/pune',
    'x-default': 'https://factoryjet.com/web-design/pune',
  },
  ahmedabad: {
    'en-IN': 'https://factoryjet.com/web-design/ahmedabad',
    'x-default': 'https://factoryjet.com/web-design/ahmedabad',
  },
  madurai: {
    'en-IN': 'https://factoryjet.com/web-design/madurai',
    'x-default': 'https://factoryjet.com/web-design/madurai',
  },
  surat: {
    'en-IN': 'https://factoryjet.com/web-design/surat',
    'x-default': 'https://factoryjet.com/web-design/surat',
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
// US priority city pages — /us/{city}/web-design route pattern
// (no India / UAE equivalents exist)
// Per CITY PAGE RULE: only en-US + x-default.
// ---------------------------------------------------------------------------

export const webDesignPriorityCityAlternatesUS = {
  austin: {
    'en-US': 'https://factoryjet.com/us/austin/web-design',
    'x-default': 'https://factoryjet.com/us/austin/web-design',
  },
  charlotte: {
    'en-US': 'https://factoryjet.com/us/charlotte/web-design',
    'x-default': 'https://factoryjet.com/us/charlotte/web-design',
  },
  denver: {
    'en-US': 'https://factoryjet.com/us/denver/web-design',
    'x-default': 'https://factoryjet.com/us/denver/web-design',
  },
  miami: {
    'en-US': 'https://factoryjet.com/us/miami/web-design',
    'x-default': 'https://factoryjet.com/us/miami/web-design',
  },
  nashville: {
    'en-US': 'https://factoryjet.com/us/nashville/web-design',
    'x-default': 'https://factoryjet.com/us/nashville/web-design',
  },
  portland: {
    'en-US': 'https://factoryjet.com/us/portland/web-design',
    'x-default': 'https://factoryjet.com/us/portland/web-design',
  },
  raleigh: {
    'en-US': 'https://factoryjet.com/us/raleigh/web-design',
    'x-default': 'https://factoryjet.com/us/raleigh/web-design',
  },
  tampa: {
    'en-US': 'https://factoryjet.com/us/tampa/web-design',
    'x-default': 'https://factoryjet.com/us/tampa/web-design',
  },
  'new-york': {
    'en-US': 'https://factoryjet.com/us/new-york/web-design',
    'x-default': 'https://factoryjet.com/us/new-york/web-design',
  },
  cleveland: {
    'en-US': 'https://factoryjet.com/us/cleveland/web-design',
    'x-default': 'https://factoryjet.com/us/cleveland/web-design',
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
  'austin': {
    'en-US': 'https://factoryjet.com/us/services/ecommerce-development/austin',
    'x-default': 'https://factoryjet.com/us/services/ecommerce-development/austin',
  },
  'miami': {
    'en-US': 'https://factoryjet.com/us/services/ecommerce-development/miami',
    'x-default': 'https://factoryjet.com/us/services/ecommerce-development/miami',
  },
  'denver': {
    'en-US': 'https://factoryjet.com/us/services/ecommerce-development/denver',
    'x-default': 'https://factoryjet.com/us/services/ecommerce-development/denver',
  },
  'nashville': {
    'en-US': 'https://factoryjet.com/us/services/ecommerce-development/nashville',
    'x-default': 'https://factoryjet.com/us/services/ecommerce-development/nashville',
  },
  'portland': {
    'en-US': 'https://factoryjet.com/us/services/ecommerce-development/portland',
    'x-default': 'https://factoryjet.com/us/services/ecommerce-development/portland',
  },
  'charlotte': {
    'en-US': 'https://factoryjet.com/us/services/ecommerce-development/charlotte',
    'x-default': 'https://factoryjet.com/us/services/ecommerce-development/charlotte',
  },
  'raleigh': {
    'en-US': 'https://factoryjet.com/us/services/ecommerce-development/raleigh',
    'x-default': 'https://factoryjet.com/us/services/ecommerce-development/raleigh',
  },
  'tampa': {
    'en-US': 'https://factoryjet.com/us/services/ecommerce-development/tampa',
    'x-default': 'https://factoryjet.com/us/services/ecommerce-development/tampa',
  },
}

// ===========================================================================
// US-ONLY GENERAL PAGES
// ===========================================================================

/** Portfolio (US only — no India/UAE equivalent) */
export const portfolioAlternatesUS = {
  'en-US': 'https://factoryjet.com/us/portfolio',
  'x-default': 'https://factoryjet.com/us/portfolio',
} as const

// ===========================================================================
// US-ONLY SERVICE PAGES
// Per CITY PAGE RULE: only en-US + x-default.
// ===========================================================================

export const usServiceAlternates = {
  'ai-agents': {
    'en-US': 'https://factoryjet.com/us/services/ai-agents',
    'x-default': 'https://factoryjet.com/us/services/ai-agents',
  },
  'ai-automation': {
    'en-US': 'https://factoryjet.com/us/services/ai-automation',
    'x-default': 'https://factoryjet.com/us/services/ai-automation',
  },
  'law-firm-website-design': {
    'en-US': 'https://factoryjet.com/us/services/law-firm-website-design',
    'x-default': 'https://factoryjet.com/us/services/law-firm-website-design',
  },
  'real-estate-website-design': {
    'en-US': 'https://factoryjet.com/us/services/real-estate-website-design',
    'x-default': 'https://factoryjet.com/us/services/real-estate-website-design',
  },
  'web-application-development': {
    'en-US': 'https://factoryjet.com/us/services/web-application-development',
    'x-default': 'https://factoryjet.com/us/services/web-application-development',
  },
  'website-redesign': {
    'en-US': 'https://factoryjet.com/us/services/website-redesign',
    'x-default': 'https://factoryjet.com/us/services/website-redesign',
  },
  'wordpress-development': {
    'en-US': 'https://factoryjet.com/us/services/wordpress-development',
    'x-default': 'https://factoryjet.com/us/services/wordpress-development',
  },
} as const

// ===========================================================================
// US CITY × AI SERVICE PAGES (US only)
// Pattern: /us/{city}/ai-agents or /us/{city}/ai-automation
// Per CITY PAGE RULE: only en-US + x-default.
// ===========================================================================

export const usCityAIAlternates = {
  'austin-ai-agents': {
    'en-US': 'https://factoryjet.com/us/austin/ai-agents',
    'x-default': 'https://factoryjet.com/us/austin/ai-agents',
  },
  'denver-ai-agents': {
    'en-US': 'https://factoryjet.com/us/denver/ai-agents',
    'x-default': 'https://factoryjet.com/us/denver/ai-agents',
  },
  'raleigh-ai-agents': {
    'en-US': 'https://factoryjet.com/us/raleigh/ai-agents',
    'x-default': 'https://factoryjet.com/us/raleigh/ai-agents',
  },
  'miami-ai-automation': {
    'en-US': 'https://factoryjet.com/us/miami/ai-automation',
    'x-default': 'https://factoryjet.com/us/miami/ai-automation',
  },
  'charlotte-ai-automation': {
    'en-US': 'https://factoryjet.com/us/charlotte/ai-automation',
    'x-default': 'https://factoryjet.com/us/charlotte/ai-automation',
  },
} as const

// ===========================================================================
// NEW YORK SUB-PAGES (US only)
// ===========================================================================

// ===========================================================================
// INDIA ECOMMERCE CITY PAGES (en-IN)
// ===========================================================================

export const ecommerceCityAlternatesIN: Record<string, { 'en-IN': string; 'x-default': string }> = {
  'mumbai': {
    'en-IN': 'https://factoryjet.com/services/ecommerce-development/mumbai',
    'x-default': 'https://factoryjet.com/services/ecommerce-development/mumbai',
  },
} as const

// ===========================================================================
// NEW YORK SUB-PAGES (US only)
// ===========================================================================

export const newYorkSubPageAlternates = {
  faq: {
    'en-US': 'https://factoryjet.com/us/services/web-design/new-york/faq',
    'x-default': 'https://factoryjet.com/us/services/web-design/new-york/faq',
  },
  services: {
    'en-US': 'https://factoryjet.com/us/services/web-design/new-york/services',
    'x-default': 'https://factoryjet.com/us/services/web-design/new-york/services',
  },
} as const
