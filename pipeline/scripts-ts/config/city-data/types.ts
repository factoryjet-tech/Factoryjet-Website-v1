/**
 * Public types for city enrichment data.
 *
 * These are the typed views consumed by Step 7 (page generation) and any
 * future modules that need city-level facts. The actual data lives as JSON
 * under data/enriched/{gb,us}/{citySlug}.json and is loaded at module init
 * by config/city-data/{country}.ts.
 *
 * Schema version: 1
 * Bump enrichmentVersion on the record AND ENRICHMENT_VERSION in
 * lib/city-enrichment/enrichment-prompt.ts when this shape changes.
 */

export interface Source {
  /** Full URL of the citation. Host is checked against allowlists at write time. */
  url: string;
  /** ISO 8601 timestamp; must be within the last 14 days at write time. */
  accessedAt: string;
  /** Optional human-readable publisher (e.g., "Office for National Statistics"). */
  publisher?: string;
}

export interface SourcedNumber {
  value: number;
  /** Optional unit hint (e.g., "people", "GBP", "businesses"). */
  unit?: string;
  /** Year the figure refers to (NOT the year it was published). */
  asOfYear: number;
  /** ≥1 source. Hosts must be on the headline-stat allowlist. */
  sources: Source[];
}

export interface IndustryProfile {
  /** Display name, title-cased (e.g., "Financial Services"). */
  name: string;
  /** 1 = most dominant in this city. Ranks unique per city. */
  rank: number;
  /** One-sentence "why this matters here" — feeds page copy. */
  notes?: string;
  /** ≥1 source. Allowlist: headline OR secondary. */
  sources: Source[];
}

export interface Competitor {
  /** Agency or service-provider name as publicly known. */
  name: string;
  /** Canonical website URL. */
  websiteUrl: string;
  /** Short positioning summary in our own words (NOT a quote). */
  positioning: string;
  /** True iff public pricing is discoverable on their site. */
  pricingPublic: boolean;
  /**
   * If pricingPublic, a short factual pricing summary (e.g., "from £4,000
   * per landing page"). If not, a positioning hint like "project-quote model".
   */
  pricingNotes?: string;
  /** ≥1 source. Allowlist: headline OR secondary. */
  sources: Source[];
}

export type LandmarkType = 'architectural' | 'cultural' | 'commercial' | 'natural';

export interface Landmark {
  name: string;
  type: LandmarkType;
  /** One-line visual cue for image-gen prompts in Step 7. */
  visualNotes?: string;
}

export interface CityEnrichment {
  /** Matches the slug in config/cities/{country}.ts. */
  citySlug: string;
  countryCode: 'GB' | 'US';
  population: SourcedNumber;
  /** Optional — some metros lack reliable disaggregated data. */
  gdpUsdBillions?: SourcedNumber;
  /** Optional — same. */
  businessCount?: SourcedNumber;
  /** ≥3 entries, ranked. */
  industries: IndustryProfile[];
  /** ≥3 entries. Public-info only; non-defamatory. */
  competitors: Competitor[];
  /** ≥3 entries. */
  landmarks: Landmark[];
  /** Bump on schema changes. Current: 1. */
  enrichmentVersion: number;
  /** ISO 8601 timestamp when this record was generated. */
  lastEnrichedAt: string;
}

export const CURRENT_ENRICHMENT_VERSION = 1 as const;
