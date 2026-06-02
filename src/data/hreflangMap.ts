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

/** US market hub page (/us) — US-only, no India/UAE equivalent */
/**
 * /us homepage. Bilingual cluster mirrors India / homepage's emission so
 * Google sees consistent reciprocal hreflang. Fixed 2026-05-25 in PR #2 —
 * previously emitted only en-US + x-default, leaving the en-IN reciprocal
 * to /us asymmetric vs India's en-US → /us back-pointer.
 */
export const usHubAlternates = {
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

/**
 * SEO Services hub page — US only.
 * US:    /us/services/seo
 * The India /seo hub is India-positioned (different market, pricing, copy) and
 * is not treated as a true locale alternate, so this page emits only
 * en-US + x-default per the single-country page rule. Added 2026-06-01.
 */
export const seoServicesAlternatesUS = {
  'en-US': 'https://factoryjet.com/us/services/seo',
  'x-default': 'https://factoryjet.com/us/services/seo',
} as const

/**
 * Local SEO service hub — US-only. The India local-seo page (/seo/local-seo)
 * targets a different market and intent, so it is intentionally NOT linked as a
 * locale alternate. en-US + x-default per the single-country page rule.
 * US: /us/services/local-seo. Added 2026-06-02.
 */
export const localSeoServicesAlternatesUS = {
  'en-US': 'https://factoryjet.com/us/services/local-seo',
  'x-default': 'https://factoryjet.com/us/services/local-seo',
} as const

/**
 * Ecommerce SEO service hub — US-only. en-US + x-default per the single-country
 * page rule. US: /us/services/ecommerce-seo. Added 2026-06-02.
 */
export const ecommerceSeoServicesAlternatesUS = {
  'en-US': 'https://factoryjet.com/us/services/ecommerce-seo',
  'x-default': 'https://factoryjet.com/us/services/ecommerce-seo',
} as const

/**
 * AI SEO / GEO / AEO service page — bilingual cluster.
 * US:    /us/services/ai-seo
 * India: /ai-seo  (root path, matches India URL pattern for services)
 * UAE / UK: generic regional landings.
 * Added 2026-05-25 in PR #2 for the new Framework B+ AI SEO service.
 */
export const aiSeoAlternates = {
  'en-IN': 'https://factoryjet.com/ai-seo',
  'en-US': 'https://factoryjet.com/us/services/ai-seo',
  'en-AE': 'https://factoryjet.com/uae',
  'en-GB': 'https://factoryjet.com/uk',
  'x-default': 'https://factoryjet.com/ai-seo',
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
  indore: {
    'en-IN': 'https://factoryjet.com/web-design/indore',
    'x-default': 'https://factoryjet.com/web-design/indore',
  },
  visakhapatnam: {
    'en-IN': 'https://factoryjet.com/web-design/visakhapatnam',
    'x-default': 'https://factoryjet.com/web-design/visakhapatnam',
  },
  coimbatore: {
    'en-IN': 'https://factoryjet.com/web-design/coimbatore',
    'x-default': 'https://factoryjet.com/web-design/coimbatore',
  },
  jaipur: {
    'en-IN': 'https://factoryjet.com/web-design/jaipur',
    'x-default': 'https://factoryjet.com/web-design/jaipur',
  },
  kochi: {
    'en-IN': 'https://factoryjet.com/web-design/kochi',
    'x-default': 'https://factoryjet.com/web-design/kochi',
  },
  kolkata: {
    'en-IN': 'https://factoryjet.com/web-design/kolkata',
    'x-default': 'https://factoryjet.com/web-design/kolkata',
  },
  noida: {
    'en-IN': 'https://factoryjet.com/web-design/noida',
    'x-default': 'https://factoryjet.com/web-design/noida',
  },
  gurgaon: {
    'en-IN': 'https://factoryjet.com/web-design/gurgaon',
    'x-default': 'https://factoryjet.com/web-design/gurgaon',
  },
  nagpur: {
    'en-IN': 'https://factoryjet.com/web-design/nagpur',
    'x-default': 'https://factoryjet.com/web-design/nagpur',
  },
  vadodara: {
    'en-IN': 'https://factoryjet.com/web-design/vadodara',
    'x-default': 'https://factoryjet.com/web-design/vadodara',
  },
  bhubaneswar: {
    'en-IN': 'https://factoryjet.com/web-design/bhubaneswar',
    'x-default': 'https://factoryjet.com/web-design/bhubaneswar',
  },
  thiruvananthapuram: {
    'en-IN': 'https://factoryjet.com/web-design/thiruvananthapuram',
    'x-default': 'https://factoryjet.com/web-design/thiruvananthapuram',
  },
  rajkot: {
    'en-IN': 'https://factoryjet.com/web-design/rajkot',
    'x-default': 'https://factoryjet.com/web-design/rajkot',
  },
} as const

// ---------------------------------------------------------------------------
// US-only city pages  (no India / UAE equivalents exist)
// Per CITY PAGE RULE: only en-US + x-default.
// ---------------------------------------------------------------------------

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
  'austin': {
    'en-US': 'https://factoryjet.com/us/austin/ecommerce-development',
    'x-default': 'https://factoryjet.com/us/austin/ecommerce-development',
  },
  'boise': {
    'en-US': 'https://factoryjet.com/us/boise/ecommerce-development',
    'x-default': 'https://factoryjet.com/us/boise/ecommerce-development',
  },
  'charlotte': {
    'en-US': 'https://factoryjet.com/us/charlotte/ecommerce-development',
    'x-default': 'https://factoryjet.com/us/charlotte/ecommerce-development',
  },
  'chattanooga': {
    'en-US': 'https://factoryjet.com/us/chattanooga/ecommerce-development',
    'x-default': 'https://factoryjet.com/us/chattanooga/ecommerce-development',
  },
  'denver': {
    'en-US': 'https://factoryjet.com/us/denver/ecommerce-development',
    'x-default': 'https://factoryjet.com/us/denver/ecommerce-development',
  },
  'fargo': {
    'en-US': 'https://factoryjet.com/us/fargo/ecommerce-development',
    'x-default': 'https://factoryjet.com/us/fargo/ecommerce-development',
  },
  'lincoln': {
    'en-US': 'https://factoryjet.com/us/lincoln/ecommerce-development',
    'x-default': 'https://factoryjet.com/us/lincoln/ecommerce-development',
  },
  'miami': {
    'en-US': 'https://factoryjet.com/us/miami/ecommerce-development',
    'x-default': 'https://factoryjet.com/us/miami/ecommerce-development',
  },
  'nashville': {
    'en-US': 'https://factoryjet.com/us/nashville/ecommerce-development',
    'x-default': 'https://factoryjet.com/us/nashville/ecommerce-development',
  },
  'portland': {
    'en-US': 'https://factoryjet.com/us/portland/ecommerce-development',
    'x-default': 'https://factoryjet.com/us/portland/ecommerce-development',
  },
  'raleigh': {
    'en-US': 'https://factoryjet.com/us/raleigh/ecommerce-development',
    'x-default': 'https://factoryjet.com/us/raleigh/ecommerce-development',
  },
  'sioux-falls': {
    'en-US': 'https://factoryjet.com/us/sioux-falls/ecommerce-development',
    'x-default': 'https://factoryjet.com/us/sioux-falls/ecommerce-development',
  },
  'tampa': {
    'en-US': 'https://factoryjet.com/us/tampa/ecommerce-development',
    'x-default': 'https://factoryjet.com/us/tampa/ecommerce-development',
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
  'ai-chatbot-development': {
    'en-US': 'https://factoryjet.com/us/services/ai-chatbot-development',
    'x-default': 'https://factoryjet.com/us/services/ai-chatbot-development',
  },
  'ai-integration-services': {
    'en-US': 'https://factoryjet.com/us/services/ai-integration-services',
    'x-default': 'https://factoryjet.com/us/services/ai-integration-services',
  },
  'ai-workflow-automation': {
    'en-US': 'https://factoryjet.com/us/services/ai-workflow-automation',
    'x-default': 'https://factoryjet.com/us/services/ai-workflow-automation',
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
  'bangalore': {
    'en-IN': 'https://factoryjet.com/services/ecommerce-development/bangalore',
    'x-default': 'https://factoryjet.com/services/ecommerce-development/bangalore',
  },
  'delhi': {
    'en-IN': 'https://factoryjet.com/services/ecommerce-development/delhi',
    'x-default': 'https://factoryjet.com/services/ecommerce-development/delhi',
  },
  'hyderabad': {
    'en-IN': 'https://factoryjet.com/services/ecommerce-development/hyderabad',
    'x-default': 'https://factoryjet.com/services/ecommerce-development/hyderabad',
  },
  'chennai': {
    'en-IN': 'https://factoryjet.com/services/ecommerce-development/chennai',
    'x-default': 'https://factoryjet.com/services/ecommerce-development/chennai',
  },
  'pune': {
    'en-IN': 'https://factoryjet.com/services/ecommerce-development/pune',
    'x-default': 'https://factoryjet.com/services/ecommerce-development/pune',
  },
  'ahmedabad': {
    'en-IN': 'https://factoryjet.com/services/ecommerce-development/ahmedabad',
    'x-default': 'https://factoryjet.com/services/ecommerce-development/ahmedabad',
  },
  'kolkata': {
    'en-IN': 'https://factoryjet.com/services/ecommerce-development/kolkata',
    'x-default': 'https://factoryjet.com/services/ecommerce-development/kolkata',
  },
  'surat': {
    'en-IN': 'https://factoryjet.com/services/ecommerce-development/surat',
    'x-default': 'https://factoryjet.com/services/ecommerce-development/surat',
  },
  'jaipur': {
    'en-IN': 'https://factoryjet.com/services/ecommerce-development/jaipur',
    'x-default': 'https://factoryjet.com/services/ecommerce-development/jaipur',
  },
  'kochi': {
    'en-IN': 'https://factoryjet.com/services/ecommerce-development/kochi',
    'x-default': 'https://factoryjet.com/services/ecommerce-development/kochi',
  },
  'lucknow': {
    'en-IN': 'https://factoryjet.com/services/ecommerce-development/lucknow',
    'x-default': 'https://factoryjet.com/services/ecommerce-development/lucknow',
  },
  'chandigarh': {
    'en-IN': 'https://factoryjet.com/services/ecommerce-development/chandigarh',
    'x-default': 'https://factoryjet.com/services/ecommerce-development/chandigarh',
  },
} as const

// ===========================================================================
// SEO SERVICE PAGES (India only — no US/UAE equivalents yet)
// Per CITY PAGE RULE: India-only pages emit only en-IN + x-default.
// ===========================================================================

/** /seo hub — India only. */
export const seoHubAlternates = {
  'en-IN': 'https://factoryjet.com/seo',
  'x-default': 'https://factoryjet.com/seo',
} as const

/** /seo/[city] pages — India only. */
export const seoCityAlternatesIN = {
  mumbai: {
    'en-IN': 'https://factoryjet.com/seo/mumbai',
    'x-default': 'https://factoryjet.com/seo/mumbai',
  },
  bangalore: {
    'en-IN': 'https://factoryjet.com/seo/bangalore',
    'x-default': 'https://factoryjet.com/seo/bangalore',
  },
  pune: {
    'en-IN': 'https://factoryjet.com/seo/pune',
    'x-default': 'https://factoryjet.com/seo/pune',
  },
  delhi: {
    'en-IN': 'https://factoryjet.com/seo/delhi',
    'x-default': 'https://factoryjet.com/seo/delhi',
  },
  ahmedabad: {
    'en-IN': 'https://factoryjet.com/seo/ahmedabad',
    'x-default': 'https://factoryjet.com/seo/ahmedabad',
  },
  noida: {
    'en-IN': 'https://factoryjet.com/seo/noida',
    'x-default': 'https://factoryjet.com/seo/noida',
  },
  jaipur: {
    'en-IN': 'https://factoryjet.com/seo/jaipur',
    'x-default': 'https://factoryjet.com/seo/jaipur',
  },
  vadodara: {
    'en-IN': 'https://factoryjet.com/seo/vadodara',
    'x-default': 'https://factoryjet.com/seo/vadodara',
  },
  kolkata: {
    'en-IN': 'https://factoryjet.com/seo/kolkata',
    'x-default': 'https://factoryjet.com/seo/kolkata',
  },
  hyderabad: {
    'en-IN': 'https://factoryjet.com/seo/hyderabad',
    'x-default': 'https://factoryjet.com/seo/hyderabad',
  },
} as const

/** /seo/[discipline]-seo sub-service pages — India only. */
export const seoSubServiceAlternatesIN = {
  'local-seo': {
    'en-IN': 'https://factoryjet.com/seo/local-seo',
    'x-default': 'https://factoryjet.com/seo/local-seo',
  },
  'technical-seo': {
    'en-IN': 'https://factoryjet.com/seo/technical-seo',
    'x-default': 'https://factoryjet.com/seo/technical-seo',
  },
  'ecommerce-seo': {
    'en-IN': 'https://factoryjet.com/seo/ecommerce-seo',
    'x-default': 'https://factoryjet.com/seo/ecommerce-seo',
  },
  'link-building': {
    'en-IN': 'https://factoryjet.com/seo/link-building',
    'x-default': 'https://factoryjet.com/seo/link-building',
  },
  'seo-audit': {
    'en-IN': 'https://factoryjet.com/seo/seo-audit',
    'x-default': 'https://factoryjet.com/seo/seo-audit',
  },
} as const

// ===========================================================================
// NEW YORK SUB-PAGES (US only)
// ===========================================================================

