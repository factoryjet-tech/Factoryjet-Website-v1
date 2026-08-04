/**
 * Shared per-country city + service data types.
 *
 * Extracted from `src/data/uk/index.ts` in M1.d.3 — types are unchanged
 * pending the city/service-shape currency-tag widening (deferred until
 * AU and US data arrive). Today's `gdpBn`, `avgAgencyPricing.*`, and
 * `keyStats.avgSalary` fields remain implicitly currency-coded by the
 * country directory under which the JSON lives.
 */

export interface CityData {
  slug: string
  name: string
  region: string
  country: string
  population: number
  businesses: number
  gdpBn: number
  primaryIndustries: string[]
  keyEmployers: string[]
  avgAgencyPricing: {
    webDesign: number
    ecommerce: number
    seo: number
    aiAgents: number
  }
  // REMOVED 2026-08-04: `localAgencies`. It held template-generated competitor
  // names ("Oxford Web Design", "Digital Oxford", "Leicester SEO Agency") for
  // firms that do not exist, and the UK city hub was naming them in a visible
  // FAQ and in FAQPage schema. Real, measured competitors now come from
  // src/data/countries/gb/cityMarket.ts (DataForSEO SERP data). The field is
  // gone from the type as well as the data so it cannot be quietly re-added.
  keyStats: {
    digitalBusinessGrowth: string
    smeCount: number
    techJobs: number
    avgSalary: number
  }
  cityAreas: string[]
  newsHook: string
  heroImage: string
  coordinates: {
    lat: number
    lng: number
  }
}

export interface ServiceData {
  slug: string
  name: string
  tagline: string
  shortDescription: string
  primaryKeyword: string
  secondaryKeywords: string[]
  heroHeadline: string
  pricingRange: {
    min: number
    max: number
    currency: string
  }
  localAvgMultiplier: number
  deliveryWeeks: {
    standard: number
    express: number
  }
  techStack: string[]
  relatedServices: string[]
  platforms: string[]
}
