/**
 * The scorer: takes a Candidate plus its metrics, returns ScoredCandidate.
 *
 *   score = volume^a × intent^b × payingCapacity^c × competitionGap^d
 *
 * Every factor is normalized to [0, 1] first; exponents are typically
 * <= 1 (dampening). Total is in [0, 1].
 */

import {
  DEFAULT_WEIGHTS,
  type ScoringWeights,
} from '../../config/scoring-weights.js';
import type { KeywordMetrics } from '../keyword-research/types.js';
import { classifyIntent } from './intent.js';
import {
  normalizeCompetitionGap,
  normalizePayingCapacity,
  normalizeVolume,
} from './normalize.js';
import type { Candidate, ScoreBreakdown, ScoredCandidate } from './types.js';

export interface ScoreOptions {
  weights?: ScoringWeights;
}

export function scoreCandidate(
  candidate: Candidate,
  metrics: KeywordMetrics,
  options: ScoreOptions = {},
): ScoredCandidate {
  const w = options.weights ?? DEFAULT_WEIGHTS;

  const midCpc =
    metrics.lowBidUsd !== null && metrics.highBidUsd !== null
      ? (metrics.lowBidUsd + metrics.highBidUsd) / 2
      : 0;

  const volumeRaw = normalizeVolume(metrics.monthlySearches);
  const intentRaw = classifyIntent(candidate.targetKeyword, [candidate.city.slug]);
  const payingCapacityRaw = normalizePayingCapacity(candidate.city.countryCode);
  const competitionGapRaw = normalizeCompetitionGap(metrics.competition, midCpc);

  const weighted = {
    volume: Math.pow(volumeRaw, w.volume),
    intent: Math.pow(intentRaw, w.intent),
    payingCapacity: Math.pow(payingCapacityRaw, w.payingCapacity),
    competitionGap: Math.pow(competitionGapRaw, w.competitionGap),
  };

  const total =
    weighted.volume *
    weighted.intent *
    weighted.payingCapacity *
    weighted.competitionGap;

  const breakdown: ScoreBreakdown = {
    volume: volumeRaw,
    intent: intentRaw,
    payingCapacity: payingCapacityRaw,
    competitionGap: competitionGapRaw,
    weighted,
    total,
  };

  return { candidate, metrics, breakdown };
}
