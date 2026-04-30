/**
 * Types for the Step 7 page-copy generation module.
 *
 * Imports CityEnrichment from the existing config/city-data/types module
 * (introduced in Patch #22). The pipeline ships enriched city records
 * under data/enriched/{country}/{slug}.json validated against this
 * schema; Step 7 reads them directly.
 */

import type { CityEnrichment } from '../../config/city-data/types.js';
import type { ServiceSeed } from '../../config/services/web-design.js';

export type { CityEnrichment };

export interface PageGenerationInput {
  city: CityEnrichment;
  service: ServiceSeed;
  country: 'gb' | 'us' | 'au' | 'ca';
  /** e.g. "web design london" — used for keyword density and meta. */
  targetKeyword: string;
  /** Mean GBP from city competitors with pricingPublic=true; fallback 5000. */
  competitorPricingBenchmark: number;
}

export interface StatBlock {
  label: string;
  value: string;
  source: string;
}

export interface CompetitorComparison {
  name: string;
  theirPrice: string;
  ourPrice: string;
  ourAdvantage: string;
}

export interface IndustrySector {
  name: string;
  /** How web design serves this sector in this city — 40–60 words. */
  description: string;
  example?: string;
}

export interface PricingDisplay {
  name: string;
  priceGBP: string;
  description: string;
  includes: string[];
  bestFor: string;
  highlight?: boolean;
}

export interface ProcessSectionCopy {
  sectionId: 'process';
  headline: string;
  steps: Array<{
    step: number;
    title: string;
    description: string;
    duration: string;
  }>;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SectionCopy {
  sectionId: string;
  headline?: string;
  subheadline?: string;
  body: string;
  dataPoints?: string[];
  ctaText?: string;
  ctaUrl?: string;
}

export interface PageCopyOutput {
  input: PageGenerationInput;
  generatedAt: string;
  modelUsed: string;
  sections: {
    hero: SectionCopy;
    cityContext: SectionCopy & { stats: StatBlock[] };
    serviceExplanation: SectionCopy;
    whyFactoryJet: SectionCopy & { competitors: CompetitorComparison[] };
    process: ProcessSectionCopy;
    industries: SectionCopy & { sectors: IndustrySector[] };
    pricing: SectionCopy & { tiers: PricingDisplay[] };
    faq: { items: FAQItem[] };
    finalCta: SectionCopy;
  };
  meta: {
    title: string;
    description: string;
    slug: string;
    canonicalUrl: string;
    h1: string;
  };
  wordCountEstimate: number;
  /** Names every city-specific element used; minimum 8 entries. */
  uniquenessFlags: string[];
}
