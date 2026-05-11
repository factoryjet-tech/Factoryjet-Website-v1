import { z } from 'zod';
import { CURRENT_ENRICHMENT_VERSION } from '../../config/city-data/types.js';
import {
  isHeadlineStatHost,
  isAcceptableSecondaryHost,
  isAcceptableCompetitorSource,
} from './source-allowlist.js';

const sourceSchema = z.object({
  url: z.string().url(),
  accessedAt: z.string().datetime({ offset: true }),
  publisher: z.string().min(1).optional(),
});

const sourcedNumberSchema = z.object({
  value: z.number().positive(),
  unit: z.string().min(1).optional(),
  asOfYear: z.number().int().min(2000).max(2030),
  sources: z.array(sourceSchema).min(1),
});

const industryProfileSchema = z.object({
  name: z.string().min(2),
  rank: z.number().int().min(1),
  notes: z.string().min(1).optional(),
  sources: z.array(sourceSchema).min(1),
});

const competitorSchema = z.object({
  name: z.string().min(2),
  websiteUrl: z.string().url(),
  positioning: z.string().min(10),
  pricingPublic: z.boolean(),
  pricingNotes: z.string().min(1).optional(),
  sources: z.array(sourceSchema).min(1),
});

const landmarkSchema = z.object({
  name: z.string().min(2),
  type: z.enum(['architectural', 'cultural', 'commercial', 'natural']),
  visualNotes: z.string().min(1).optional(),
});

export const cityEnrichmentSchema = z.object({
  citySlug: z.string().regex(/^[a-z0-9-]+$/),
  countryCode: z.enum(['GB', 'US']),
  population: sourcedNumberSchema,
  gdpUsdBillions: sourcedNumberSchema.optional(),
  businessCount: sourcedNumberSchema.optional(),
  industries: z.array(industryProfileSchema).min(3),
  competitors: z.array(competitorSchema).min(3),
  landmarks: z.array(landmarkSchema).min(3),
  enrichmentVersion: z.literal(CURRENT_ENRICHMENT_VERSION),
  lastEnrichedAt: z.string().datetime({ offset: true }),
});

export type ValidatedCityEnrichment = z.infer<typeof cityEnrichmentSchema>;

export interface ValidationIssue {
  path: string;
  message: string;
}

export interface ValidationResult {
  ok: boolean;
  issues: ValidationIssue[];
}

const ACCESSED_AT_MAX_AGE_DAYS = 14;

/**
 * Full validation: zod shape + source allowlist enforcement + freshness check.
 */
export function validateEnrichment(input: unknown): ValidationResult {
  const issues: ValidationIssue[] = [];
  const parse = cityEnrichmentSchema.safeParse(input);
  if (!parse.success) {
    for (const issue of parse.error.issues) {
      issues.push({ path: issue.path.join('.'), message: issue.message });
    }
    return { ok: false, issues };
  }

  const record = parse.data;
  const now = Date.now();
  const maxAgeMs = ACCESSED_AT_MAX_AGE_DAYS * 24 * 60 * 60 * 1000;

  // Headline stats: at least ONE source must be on HEADLINE_STAT_HOSTS.
  // Additional sources may be on SECONDARY_HOSTS (supplementary context is fine).
  const checkHeadline = (
    path: string,
    sources: ReadonlyArray<{ url: string; accessedAt: string }>,
  ) => {
    const hasPrimarySource = sources.some((s) => isHeadlineStatHost(s.url));
    if (!hasPrimarySource) {
      issues.push({
        path: `${path}.sources`,
        message: `at least one source must be from a primary government statistics host`,
      });
    }
    sources.forEach((s, i) => {
      // Non-primary sources are fine if they're on the secondary allowlist.
      if (!isHeadlineStatHost(s.url) && !isAcceptableSecondaryHost(s.url)) {
        issues.push({
          path: `${path}.sources[${i}].url`,
          message: `host of "${s.url}" is not on the headline-stat allowlist`,
        });
      }
      const accessed = new Date(s.accessedAt).getTime();
      if (Number.isNaN(accessed) || now - accessed > maxAgeMs) {
        issues.push({
          path: `${path}.sources[${i}].accessedAt`,
          message: `accessedAt is older than ${ACCESSED_AT_MAX_AGE_DAYS} days or invalid`,
        });
      }
    });
  };

  checkHeadline('population', record.population.sources);
  if (record.gdpUsdBillions) checkHeadline('gdpUsdBillions', record.gdpUsdBillions.sources);
  if (record.businessCount) checkHeadline('businessCount', record.businessCount.sources);

  // Qualitative fields: hosts must be on HEADLINE OR SECONDARY.
  const checkSecondary = (
    path: string,
    sources: ReadonlyArray<{ url: string; accessedAt: string }>,
  ) => {
    sources.forEach((s, i) => {
      if (!isAcceptableSecondaryHost(s.url)) {
        issues.push({
          path: `${path}.sources[${i}].url`,
          message: `host of "${s.url}" is not on any allowlist`,
        });
      }
      const accessed = new Date(s.accessedAt).getTime();
      if (Number.isNaN(accessed) || now - accessed > maxAgeMs) {
        issues.push({
          path: `${path}.sources[${i}].accessedAt`,
          message: `accessedAt is older than ${ACCESSED_AT_MAX_AGE_DAYS} days or invalid`,
        });
      }
    });
  };

  const checkCompetitor = (
    path: string,
    sources: ReadonlyArray<{ url: string; accessedAt: string }>,
  ) => {
    sources.forEach((s, i) => {
      if (!isAcceptableCompetitorSource(s.url)) {
        issues.push({
          path: `${path}.sources[${i}].url`,
          message: `competitor source URL "${s.url}" is malformed`,
        });
      }
      const accessed = new Date(s.accessedAt).getTime();
      if (Number.isNaN(accessed) || now - accessed > maxAgeMs) {
        issues.push({
          path: `${path}.sources[${i}].accessedAt`,
          message: `accessedAt is older than ${ACCESSED_AT_MAX_AGE_DAYS} days or invalid`,
        });
      }
    });
  };

  record.industries.forEach((ind, i) => checkSecondary(`industries[${i}]`, ind.sources));
  record.competitors.forEach((c, i) => checkCompetitor(`competitors[${i}]`, c.sources));

  // Industry rank uniqueness.
  const ranks = record.industries.map((i) => i.rank);
  if (new Set(ranks).size !== ranks.length) {
    issues.push({ path: 'industries', message: 'industry ranks must be unique' });
  }

  return { ok: issues.length === 0, issues };
}
