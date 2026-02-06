/**
 * Hreflang mapping for FactoryJet service pages.
 *
 * Rules enforced:
 *   - Absolute URLs only.
 *   - x-default always points to the India (en-IN) URL.
 *   - en-AE points to /uae (country landing) until dedicated UAE service pages exist.
 *   - City pages that exist in only one country omit all other locale keys;
 *     only en-IN (or en-US) + x-default are included.
 *
 * Consume via Next.js Metadata API:
 *     import { hreflangMap } from '@/data/hreflangMap'
 *     alternates: { canonical: '...', languages: hreflangMap['web-design'] }
 */

// ---------------------------------------------------------------------------
// Service-level clusters (pages that have both IN and US variants)
// ---------------------------------------------------------------------------

/** Full 3-locale cluster for /services/web-design ↔ /us/services/web-design */
export const webDesignAlternates = {
  'en-IN': 'https://factoryjet.com/services/web-design',
  'en-US': 'https://factoryjet.com/us/services/web-design',
  'en-AE': 'https://factoryjet.com/uae',
  'x-default': 'https://factoryjet.com/services/web-design',
} as const

/** Full 3-locale cluster for /services/ecommerce ↔ /us/services/ecommerce */
export const ecommerceAlternates = {
  'en-IN': 'https://factoryjet.com/services/ecommerce',
  'en-US': 'https://factoryjet.com/us/services/ecommerce',
  'en-AE': 'https://factoryjet.com/uae',
  'x-default': 'https://factoryjet.com/services/ecommerce',
} as const

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
