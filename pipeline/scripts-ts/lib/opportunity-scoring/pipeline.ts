/**
 * End-to-end opportunity-scoring orchestrator.
 *
 *   buildCandidates → researchKeywords (provider) → scoreCandidate
 *   → return ranked array
 *
 * Country-mixed ranking is the default. Per-country views are
 * convenience filters over the same scored set.
 */

import { researchKeywords } from '../keyword-research/index.js';
import type { ProviderName } from '../keyword-research/types.js';
import {
  buildCandidates,
  type BuildCandidatesOptions,
} from './candidate-builder.js';
import { scoreCandidate, type ScoreOptions } from './score.js';
import type { Candidate, ScoredCandidate } from './types.js';

export interface RunScoringOptions extends BuildCandidatesOptions, ScoreOptions {
  /** Provider name for keyword research (mock, google-ads, etc.). */
  provider: ProviderName;
  /** Default 'en'. */
  language?: string;
  /** Pipeline tenancy scope (default 'factoryjet'). */
  tenantId?: string;
}

/** Group candidates by country to issue one research call per country. */
function groupByCountry(
  candidates: readonly Candidate[],
): Map<string, Candidate[]> {
  const groups = new Map<string, Candidate[]>();
  for (const c of candidates) {
    const cc = c.city.countryCode;
    let group = groups.get(cc);
    if (!group) {
      group = [];
      groups.set(cc, group);
    }
    group.push(c);
  }
  return groups;
}

export interface RunScoringResult {
  /** All scored candidates, sorted by total score descending. */
  ranked: ScoredCandidate[];
  /** Convenience accessors. */
  byCountry: Map<string, ScoredCandidate[]>;
  /** Counts for the report header. */
  stats: {
    candidateCount: number;
    countriesScored: number;
    durationMs: number;
  };
}

export async function runScoringPipeline(
  options: RunScoringOptions,
): Promise<RunScoringResult> {
  const start = Date.now();
  const language = options.language ?? 'en';

  const candidates = buildCandidates(options);
  const grouped = groupByCountry(candidates);

  const scored: ScoredCandidate[] = [];

  // One research batch per country (geo-targeted).
  for (const [countryCode, countryCandidates] of grouped.entries()) {
    const keywords = countryCandidates.map((c) => c.targetKeyword);
    const metrics = await researchKeywords(
      {
        keywords,
        geoTargets: [countryCode],
        language,
        ...(options.tenantId ? { tenantId: options.tenantId } : {}),
      },
      { provider: options.provider },
    );

    // Map metrics back to candidates by lowercase keyword equality.
    const metricsByKeyword = new Map<string, (typeof metrics)[number]>();
    for (const m of metrics) {
      metricsByKeyword.set(m.keyword.toLowerCase(), m);
    }

    for (const candidate of countryCandidates) {
      const m = metricsByKeyword.get(candidate.targetKeyword.toLowerCase());
      if (!m) continue; // provider didn't return this one
      scored.push(scoreCandidate(candidate, m, options));
    }
  }

  scored.sort((a, b) => b.breakdown.total - a.breakdown.total);

  const byCountry = new Map<string, ScoredCandidate[]>();
  for (const sc of scored) {
    const cc = sc.candidate.city.countryCode;
    let group = byCountry.get(cc);
    if (!group) {
      group = [];
      byCountry.set(cc, group);
    }
    group.push(sc);
  }

  return {
    ranked: scored,
    byCountry,
    stats: {
      candidateCount: candidates.length,
      countriesScored: grouped.size,
      durationMs: Date.now() - start,
    },
  };
}
