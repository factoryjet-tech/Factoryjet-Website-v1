// data/index.ts - UK Cities & Services Data Layer

// ---- TYPES ----
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
  localAgencies: {
    [serviceSlug: string]: string[]
  }
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

// ---- DATA IMPORTS ----
import leeds from './cities/leeds.json'
import manchester from './cities/manchester.json'
import birmingham from './cities/birmingham.json'
import bristol from './cities/bristol.json'
import edinburgh from './cities/edinburgh.json'
import sheffield from './cities/sheffield.json'
import nottingham from './cities/nottingham.json'
import leicester from './cities/leicester.json'
import liverpool from './cities/liverpool.json'
import cardiff from './cities/cardiff.json'
import glasgow from './cities/glasgow.json'
import newcastle from './cities/newcastle.json'
import southampton from './cities/southampton.json'
import brighton from './cities/brighton.json'
import oxford from './cities/oxford.json'
import cambridge from './cities/cambridge.json'
import derby from './cities/derby.json'
import coventry from './cities/coventry.json'
import hull from './cities/hull.json'
import plymouth from './cities/plymouth.json'

import webDesign from './services/web-design.json'
import aiWebsites from './services/ai-websites.json'
import ecommerce from './services/ecommerce.json'
import seo from './services/seo.json'
import aiSeo from './services/ai-seo.json'
import aiAgents from './services/ai-agents.json'

// ---- EXPORTS ----
export const cities: CityData[] = [
  leeds, manchester, birmingham, bristol, edinburgh,
  sheffield, nottingham, leicester, liverpool, cardiff,
  glasgow, newcastle, southampton, brighton, oxford,
  cambridge, derby, coventry, hull, plymouth
] as CityData[]

export const services: ServiceData[] = [
  webDesign, aiWebsites, ecommerce, seo, aiSeo, aiAgents
] as ServiceData[]

// Helper functions
export const getCityBySlug = (slug: string): CityData | undefined =>
  cities.find(c => c.slug === slug)

export const getServiceBySlug = (slug: string): ServiceData | undefined =>
  services.find(s => s.slug === slug)

export const getAllCombinations = () =>
  cities.flatMap(city =>
    services.map(service => ({
      city: city.slug,
      service: service.slug
    }))
  )

/**
 * UK city slugs that have bespoke pages at src/app/uk/{slug}/page.tsx.
 * These cities are EXCLUDED from generateStaticParams on the dynamic
 * [city] route and its descendants, because the static segment in
 * src/app/uk/{slug}/ takes routing precedence and dynamic builds for
 * the same slug would be wasted artifacts.
 *
 * To graduate a city to bespoke: add the slug here AND create
 * src/app/uk/{slug}/page.tsx. To demote: reverse both.
 */
export const BESPOKE_UK_CITY_SLUGS = [
  'manchester',
  'birmingham',
  'leeds',
  'liverpool',
  'sheffield',
] as const

/**
 * Cities that should be built via the dynamic [city] route.
 * Equals `cities` minus any slug in BESPOKE_UK_CITY_SLUGS.
 */
export const dynamicCities: CityData[] = cities.filter(
  (c) => !(BESPOKE_UK_CITY_SLUGS as readonly string[]).includes(c.slug)
)
