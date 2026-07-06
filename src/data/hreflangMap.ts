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
  'en-US': 'https://factoryjet.com',
  'en-AE': 'https://factoryjet.com/uae',
  'en-GB': 'https://factoryjet.com/uk',
  'en-AU': 'https://factoryjet.com/au',
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
  'en-US': 'https://factoryjet.com',
  'en-AE': 'https://factoryjet.com/uae',
  'en-GB': 'https://factoryjet.com/uk',
  'en-AU': 'https://factoryjet.com/au',
  'x-default': 'https://factoryjet.com',
} as const

/**
 * /au homepage (AU market hub). Full cluster so Google sees consistent
 * reciprocal hreflang — en-AU added to homeAlternates / usHubAlternates /
 * /uk metadata.ts in the same change (PR #2 lesson: never emit asymmetric
 * hreflang). Added 2026-06-11 with the AU market launch.
 */
export const auHubAlternates = {
  'en-IN': 'https://factoryjet.com',
  'en-US': 'https://factoryjet.com',
  'en-AE': 'https://factoryjet.com/uae',
  'en-GB': 'https://factoryjet.com/uk',
  'en-AU': 'https://factoryjet.com/au',
  'x-default': 'https://factoryjet.com',
} as const

// ===========================================================================
// SERVICE PAGES (IN + US variants exist; UAE points to /uae landing)
// ===========================================================================

/** Full 3-locale cluster for /services/web-design ↔ /us/services/web-design */
export const webDesignAlternates = {
  'en-IN': 'https://factoryjet.com/web-design',
  'en-US': 'https://factoryjet.com/services/web-design',
  'en-AE': 'https://factoryjet.com/uae',
  'en-GB': 'https://factoryjet.com/uk',
  // x-default → US hub (not the India hub) so NA/generic searchers land on the US
  // web-design page, not the India one. Matches the aiSeoAlternates fix. (geo-seg 2026-07-06)
  'x-default': 'https://factoryjet.com/services/web-design',
} as const

/**
 * Ecommerce development service hub — US-owned.
 *
 * US owns /services/ecommerce-development (US is the primary domain). Previously
 * this emitted BOTH en-IN and en-US pointing at the SAME URL — a self-referential
 * duplicate that told Google two locales share one page, which is invalid and let
 * India intent bleed onto the US hub. Fixed 2026-07-05: en-US + x-default only,
 * per the single-country page rule.
 *
 * NOTE: India ecommerce has no dedicated hub page yet. When the India ecommerce
 * hub is built (its own URL, e.g. /ecommerce-development), convert this back to a
 * bilingual cluster: add 'en-IN' → the new India URL and repoint x-default to it.
 * The India ecommerce *city* pages (ecommerceCityAlternatesIN) are unaffected.
 */
export const ecommerceAlternates = {
  'en-US': 'https://factoryjet.com/services/ecommerce-development',
  'x-default': 'https://factoryjet.com/services/ecommerce-development',
} as const

// ===========================================================================
// GENERAL PAGES (IN + US variants exist)
// ===========================================================================

/** Pricing pages: /pricing ↔ /us/pricing */
export const pricingAlternates = {
  'en-IN': 'https://factoryjet.com/pricing',
  'en-US': 'https://factoryjet.com/pricing',
  'en-AE': 'https://factoryjet.com/uae',
  'en-GB': 'https://factoryjet.com/uk',
  'x-default': 'https://factoryjet.com/pricing',
} as const

/** About pages: /about ↔ /us/about */
export const aboutAlternates = {
  'en-IN': 'https://factoryjet.com/about',
  'en-US': 'https://factoryjet.com/about',
  'en-AE': 'https://factoryjet.com/uae',
  'en-GB': 'https://factoryjet.com/uk',
  'x-default': 'https://factoryjet.com/about',
} as const

// ===========================================================================
// SINGLE-COUNTRY PAGES (no alternates in other countries)
// ===========================================================================

/** Contact page — GLOBAL/primary-domain page (renders the US header). Signalled
 *  as en-US so Google does not treat /contact as India-only. (geo-segmentation 2026-07-06) */
export const contactAlternates = {
  'en-US': 'https://factoryjet.com/contact',
  'x-default': 'https://factoryjet.com/contact',
} as const

/** FAQ page (US only) */
export const faqAlternates = {
  'en-US': 'https://factoryjet.com/faq',
  'x-default': 'https://factoryjet.com/faq',
} as const

/** Website Cost guide page (US only — no India equivalent) */
export const websiteCostAlternates = {
  'en-US': 'https://factoryjet.com/website-cost',
  'x-default': 'https://factoryjet.com/website-cost',
} as const

/** AI Agency service page (US only — no India equivalent) */
export const aiAgencyAlternates = {
  'en-US': 'https://factoryjet.com/services/ai-agency',
  'x-default': 'https://factoryjet.com/services/ai-agency',
} as const

/** Small Business Website Design service page (US only — no India equivalent) */
export const smallBusinessWebDesignAlternates = {
  'en-US': 'https://factoryjet.com/services/small-business-website-design',
  'x-default': 'https://factoryjet.com/services/small-business-website-design',
} as const

/** Magento Development service page (US only — no India equivalent) */
export const magentoDevelopmentAlternates = {
  'en-US': 'https://factoryjet.com/services/magento-development',
  'x-default': 'https://factoryjet.com/services/magento-development',
} as const

/** WooCommerce Development service page (US only — no India equivalent) */
export const woocommerceDevelopmentAlternates = {
  'en-US': 'https://factoryjet.com/services/woocommerce-development',
  'x-default': 'https://factoryjet.com/services/woocommerce-development',
} as const

/**
 * SEO Services hub page — US only.
 * US:    /us/services/seo
 * The India /seo hub is India-positioned (different market, pricing, copy) and
 * is not treated as a true locale alternate, so this page emits only
 * en-US + x-default per the single-country page rule. Added 2026-06-01.
 */
export const seoServicesAlternatesUS = {
  'en-US': 'https://factoryjet.com/services/seo',
  'x-default': 'https://factoryjet.com/services/seo',
} as const

/**
 * Local SEO service hub — US-only. The India local-seo page (/seo/local-seo)
 * targets a different market and intent, so it is intentionally NOT linked as a
 * locale alternate. en-US + x-default per the single-country page rule.
 * US: /us/services/local-seo. Added 2026-06-02.
 */
export const localSeoServicesAlternatesUS = {
  'en-US': 'https://factoryjet.com/services/local-seo',
  'x-default': 'https://factoryjet.com/services/local-seo',
} as const

/**
 * Ecommerce SEO service hub — US-only. en-US + x-default per the single-country
 * page rule. US: /us/services/ecommerce-seo. Added 2026-06-02.
 */
export const ecommerceSeoServicesAlternatesUS = {
  'en-US': 'https://factoryjet.com/services/ecommerce-seo',
  'x-default': 'https://factoryjet.com/services/ecommerce-seo',
} as const

/**
 * Small business SEO service hub — US-only. en-US + x-default per the single-country
 * page rule. US: /us/services/small-business-seo. Added 2026-06-03.
 */
export const smallBusinessSeoServicesAlternatesUS = {
  'en-US': 'https://factoryjet.com/services/small-business-seo',
  'x-default': 'https://factoryjet.com/services/small-business-seo',
} as const

/**
 * SEO audit & technical SEO service hub — US-only. en-US + x-default per the
 * single-country page rule. US: /us/services/seo-audit. Added 2026-06-03.
 */
export const seoAuditServicesAlternatesUS = {
  'en-US': 'https://factoryjet.com/services/seo-audit',
  'x-default': 'https://factoryjet.com/services/seo-audit',
} as const

/**
 * AI SEO / GEO / AEO service page — bilingual cluster.
 * US:    /services/ai-seo   (targets the "AI SEO agency/services/company" head term)
 * India: /ai-seo            (root path, matches India URL pattern for services; GEO-scoped)
 * UAE / UK: generic regional landings.
 * Added 2026-05-25 in PR #2 for the new Framework B+ AI SEO service.
 *
 * x-default DEVIATION (2026-07-06): this page intentionally breaks the file-wide
 * "x-default → India" convention. The commercial head term "ai seo agency" is
 * US-intent and lives only in /services/ai-seo's title/H1, but x-default previously
 * pointed to the India GEO page (/ai-seo), so Google served the India-scoped page to
 * generic searchers — splitting authority and pinning the correct US page to ~pos 50.
 * x-default now points to the US page. Do NOT "restore" it to /ai-seo. Keep
 * en-IN → /ai-seo so India intent still resolves to the India page.
 */
export const aiSeoAlternates = {
  'en-IN': 'https://factoryjet.com/ai-seo',
  'en-US': 'https://factoryjet.com/services/ai-seo',
  'en-AE': 'https://factoryjet.com/uae',
  'en-GB': 'https://factoryjet.com/uk',
  'x-default': 'https://factoryjet.com/services/ai-seo',
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
  },
  mumbai: {
    'en-IN': 'https://factoryjet.com/web-design/mumbai',
  },
  bangalore: {
    'en-IN': 'https://factoryjet.com/web-design/bangalore',
  },
  chennai: {
    'en-IN': 'https://factoryjet.com/web-design/chennai',
  },
  hyderabad: {
    'en-IN': 'https://factoryjet.com/web-design/hyderabad',
  },
  pune: {
    'en-IN': 'https://factoryjet.com/web-design/pune',
  },
  ahmedabad: {
    'en-IN': 'https://factoryjet.com/web-design/ahmedabad',
  },
  madurai: {
    'en-IN': 'https://factoryjet.com/web-design/madurai',
  },
  surat: {
    'en-IN': 'https://factoryjet.com/web-design/surat',
  },
  indore: {
    'en-IN': 'https://factoryjet.com/web-design/indore',
  },
  visakhapatnam: {
    'en-IN': 'https://factoryjet.com/web-design/visakhapatnam',
  },
  coimbatore: {
    'en-IN': 'https://factoryjet.com/web-design/coimbatore',
  },
  jaipur: {
    'en-IN': 'https://factoryjet.com/web-design/jaipur',
  },
  kochi: {
    'en-IN': 'https://factoryjet.com/web-design/kochi',
  },
  kolkata: {
    'en-IN': 'https://factoryjet.com/web-design/kolkata',
  },
  noida: {
    'en-IN': 'https://factoryjet.com/web-design/noida',
  },
  gurgaon: {
    'en-IN': 'https://factoryjet.com/web-design/gurgaon',
  },
  nagpur: {
    'en-IN': 'https://factoryjet.com/web-design/nagpur',
  },
  vadodara: {
    'en-IN': 'https://factoryjet.com/web-design/vadodara',
  },
  bhubaneswar: {
    'en-IN': 'https://factoryjet.com/web-design/bhubaneswar',
  },
  thiruvananthapuram: {
    'en-IN': 'https://factoryjet.com/web-design/thiruvananthapuram',
  },
  rajkot: {
    'en-IN': 'https://factoryjet.com/web-design/rajkot',
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
    'en-US': 'https://factoryjet.com/austin/web-design',
    'x-default': 'https://factoryjet.com/austin/web-design',
  },
  charlotte: {
    'en-US': 'https://factoryjet.com/charlotte/web-design',
    'x-default': 'https://factoryjet.com/charlotte/web-design',
  },
  denver: {
    'en-US': 'https://factoryjet.com/denver/web-design',
    'x-default': 'https://factoryjet.com/denver/web-design',
  },
  miami: {
    'en-US': 'https://factoryjet.com/miami/web-design',
    'x-default': 'https://factoryjet.com/miami/web-design',
  },
  nashville: {
    'en-US': 'https://factoryjet.com/nashville/web-design',
    'x-default': 'https://factoryjet.com/nashville/web-design',
  },
  portland: {
    'en-US': 'https://factoryjet.com/portland/web-design',
    'x-default': 'https://factoryjet.com/portland/web-design',
  },
  raleigh: {
    'en-US': 'https://factoryjet.com/raleigh/web-design',
    'x-default': 'https://factoryjet.com/raleigh/web-design',
  },
  tampa: {
    'en-US': 'https://factoryjet.com/tampa/web-design',
    'x-default': 'https://factoryjet.com/tampa/web-design',
  },
  'new-york': {
    'en-US': 'https://factoryjet.com/new-york/web-design',
    'x-default': 'https://factoryjet.com/new-york/web-design',
  },
  cleveland: {
    'en-US': 'https://factoryjet.com/cleveland/web-design',
    'x-default': 'https://factoryjet.com/cleveland/web-design',
  },
} as const

// ---------------------------------------------------------------------------
// US-only e-commerce city pages  (no India / UAE equivalents exist)
// Per CITY PAGE RULE: only en-US + x-default.
// ---------------------------------------------------------------------------

export const ecommerceCityAlternatesUS: Record<string, { 'en-US': string; 'x-default': string }> = {
  'austin': {
    'en-US': 'https://factoryjet.com/austin/ecommerce-development',
    'x-default': 'https://factoryjet.com/austin/ecommerce-development',
  },
  'boise': {
    'en-US': 'https://factoryjet.com/boise/ecommerce-development',
    'x-default': 'https://factoryjet.com/boise/ecommerce-development',
  },
  'charlotte': {
    'en-US': 'https://factoryjet.com/charlotte/ecommerce-development',
    'x-default': 'https://factoryjet.com/charlotte/ecommerce-development',
  },
  'chattanooga': {
    'en-US': 'https://factoryjet.com/chattanooga/ecommerce-development',
    'x-default': 'https://factoryjet.com/chattanooga/ecommerce-development',
  },
  'denver': {
    'en-US': 'https://factoryjet.com/denver/ecommerce-development',
    'x-default': 'https://factoryjet.com/denver/ecommerce-development',
  },
  'fargo': {
    'en-US': 'https://factoryjet.com/fargo/ecommerce-development',
    'x-default': 'https://factoryjet.com/fargo/ecommerce-development',
  },
  'lincoln': {
    'en-US': 'https://factoryjet.com/lincoln/ecommerce-development',
    'x-default': 'https://factoryjet.com/lincoln/ecommerce-development',
  },
  'miami': {
    'en-US': 'https://factoryjet.com/miami/ecommerce-development',
    'x-default': 'https://factoryjet.com/miami/ecommerce-development',
  },
  'nashville': {
    'en-US': 'https://factoryjet.com/nashville/ecommerce-development',
    'x-default': 'https://factoryjet.com/nashville/ecommerce-development',
  },
  'portland': {
    'en-US': 'https://factoryjet.com/portland/ecommerce-development',
    'x-default': 'https://factoryjet.com/portland/ecommerce-development',
  },
  'raleigh': {
    'en-US': 'https://factoryjet.com/raleigh/ecommerce-development',
    'x-default': 'https://factoryjet.com/raleigh/ecommerce-development',
  },
  'sioux-falls': {
    'en-US': 'https://factoryjet.com/sioux-falls/ecommerce-development',
    'x-default': 'https://factoryjet.com/sioux-falls/ecommerce-development',
  },
  'tampa': {
    'en-US': 'https://factoryjet.com/tampa/ecommerce-development',
    'x-default': 'https://factoryjet.com/tampa/ecommerce-development',
  },
}

// ===========================================================================
// US-ONLY GENERAL PAGES
// ===========================================================================

/** Portfolio (US only — no India/UAE equivalent) */
export const portfolioAlternatesUS = {
  'en-US': 'https://factoryjet.com/portfolio',
  'x-default': 'https://factoryjet.com/portfolio',
} as const

// ===========================================================================
// US-ONLY SERVICE PAGES
// Per CITY PAGE RULE: only en-US + x-default.
// ===========================================================================

export const usServiceAlternates = {
  'ai-agents': {
    'en-US': 'https://factoryjet.com/services/ai-agents',
    'x-default': 'https://factoryjet.com/services/ai-agents',
  },
  'ai-automation': {
    'en-US': 'https://factoryjet.com/services/ai-automation',
    'x-default': 'https://factoryjet.com/services/ai-automation',
  },
  'law-firm-website-design': {
    'en-US': 'https://factoryjet.com/services/law-firm-website-design',
    'x-default': 'https://factoryjet.com/services/law-firm-website-design',
  },
  'real-estate-website-design': {
    'en-US': 'https://factoryjet.com/services/real-estate-website-design',
    'x-default': 'https://factoryjet.com/services/real-estate-website-design',
  },
  'web-application-development': {
    'en-US': 'https://factoryjet.com/services/web-application-development',
    'x-default': 'https://factoryjet.com/services/web-application-development',
  },
  'website-redesign': {
    'en-US': 'https://factoryjet.com/services/website-redesign',
    'x-default': 'https://factoryjet.com/services/website-redesign',
  },
  'wordpress-development': {
    'en-US': 'https://factoryjet.com/services/wordpress-development',
    'x-default': 'https://factoryjet.com/services/wordpress-development',
  },
  'ai-chatbot-development': {
    'en-US': 'https://factoryjet.com/services/ai-chatbot-development',
    'x-default': 'https://factoryjet.com/services/ai-chatbot-development',
  },
  'ai-integration-services': {
    'en-US': 'https://factoryjet.com/services/ai-integration-services',
    'x-default': 'https://factoryjet.com/services/ai-integration-services',
  },
  'ai-workflow-automation': {
    'en-US': 'https://factoryjet.com/services/ai-workflow-automation',
    'x-default': 'https://factoryjet.com/services/ai-workflow-automation',
  },
} as const

// ===========================================================================
// US CITY × AI SERVICE PAGES (US only)
// Pattern: /us/{city}/ai-agents or /us/{city}/ai-automation
// Per CITY PAGE RULE: only en-US + x-default.
// ===========================================================================

export const usCityAIAlternates = {
  'austin-ai-agents': {
    'en-US': 'https://factoryjet.com/austin/ai-agents',
    'x-default': 'https://factoryjet.com/austin/ai-agents',
  },
  'denver-ai-agents': {
    'en-US': 'https://factoryjet.com/denver/ai-agents',
    'x-default': 'https://factoryjet.com/denver/ai-agents',
  },
  'raleigh-ai-agents': {
    'en-US': 'https://factoryjet.com/raleigh/ai-agents',
    'x-default': 'https://factoryjet.com/raleigh/ai-agents',
  },
  'miami-ai-automation': {
    'en-US': 'https://factoryjet.com/miami/ai-automation',
    'x-default': 'https://factoryjet.com/miami/ai-automation',
  },
  'charlotte-ai-automation': {
    'en-US': 'https://factoryjet.com/charlotte/ai-automation',
    'x-default': 'https://factoryjet.com/charlotte/ai-automation',
  },
} as const

// ===========================================================================
// NEW YORK SUB-PAGES (US only)
// ===========================================================================

// ===========================================================================
// INDIA ECOMMERCE CITY PAGES (en-IN)
// ===========================================================================

export const ecommerceCityAlternatesIN: Record<string, { 'en-IN': string }> = {
  'mumbai': {
    'en-IN': 'https://factoryjet.com/services/ecommerce-development/mumbai',
  },
  'bangalore': {
    'en-IN': 'https://factoryjet.com/services/ecommerce-development/bangalore',
  },
  'delhi': {
    'en-IN': 'https://factoryjet.com/services/ecommerce-development/delhi',
  },
  'hyderabad': {
    'en-IN': 'https://factoryjet.com/services/ecommerce-development/hyderabad',
  },
  'chennai': {
    'en-IN': 'https://factoryjet.com/services/ecommerce-development/chennai',
  },
  'pune': {
    'en-IN': 'https://factoryjet.com/services/ecommerce-development/pune',
  },
  'ahmedabad': {
    'en-IN': 'https://factoryjet.com/services/ecommerce-development/ahmedabad',
  },
  'kolkata': {
    'en-IN': 'https://factoryjet.com/services/ecommerce-development/kolkata',
  },
  'surat': {
    'en-IN': 'https://factoryjet.com/services/ecommerce-development/surat',
  },
  'jaipur': {
    'en-IN': 'https://factoryjet.com/services/ecommerce-development/jaipur',
  },
  'kochi': {
    'en-IN': 'https://factoryjet.com/services/ecommerce-development/kochi',
  },
  'lucknow': {
    'en-IN': 'https://factoryjet.com/services/ecommerce-development/lucknow',
  },
  'chandigarh': {
    'en-IN': 'https://factoryjet.com/services/ecommerce-development/chandigarh',
  },
} as const

// ===========================================================================
// SEO SERVICE PAGES (India only — no US/UAE equivalents yet)
// Per CITY PAGE RULE: India-only pages emit only en-IN + x-default.
// ===========================================================================

/** /seo hub — India only. */
export const seoHubAlternates = {
  'en-IN': 'https://factoryjet.com/seo',
} as const

/** /seo/[city] pages — India only. */
export const seoCityAlternatesIN = {
  mumbai: {
    'en-IN': 'https://factoryjet.com/seo/mumbai',
  },
  bangalore: {
    'en-IN': 'https://factoryjet.com/seo/bangalore',
  },
  pune: {
    'en-IN': 'https://factoryjet.com/seo/pune',
  },
  delhi: {
    'en-IN': 'https://factoryjet.com/seo/delhi',
  },
  ahmedabad: {
    'en-IN': 'https://factoryjet.com/seo/ahmedabad',
  },
  noida: {
    'en-IN': 'https://factoryjet.com/seo/noida',
  },
  jaipur: {
    'en-IN': 'https://factoryjet.com/seo/jaipur',
  },
  vadodara: {
    'en-IN': 'https://factoryjet.com/seo/vadodara',
  },
  kolkata: {
    'en-IN': 'https://factoryjet.com/seo/kolkata',
  },
  hyderabad: {
    'en-IN': 'https://factoryjet.com/seo/hyderabad',
  },
  chennai: {
    'en-IN': 'https://factoryjet.com/seo/chennai',
  },
} as const

/** /seo/[discipline]-seo sub-service pages — India only. */
export const seoSubServiceAlternatesIN = {
  'local-seo': {
    'en-IN': 'https://factoryjet.com/seo/local-seo',
  },
  'technical-seo': {
    'en-IN': 'https://factoryjet.com/seo/technical-seo',
  },
  'ecommerce-seo': {
    'en-IN': 'https://factoryjet.com/seo/ecommerce-seo',
  },
  'link-building': {
    'en-IN': 'https://factoryjet.com/seo/link-building',
  },
  'seo-audit': {
    'en-IN': 'https://factoryjet.com/seo/seo-audit',
  },
} as const

// ===========================================================================
// NEW YORK SUB-PAGES (US only)
// ===========================================================================

