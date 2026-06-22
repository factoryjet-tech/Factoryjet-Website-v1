/**
 * Types for the opportunity-scoring subsystem.
 *
 * A Candidate is a (city, service) tuple plus its synthesized target
 * keyword. After research and scoring, it becomes a ScoredCandidate
 * with a numeric total and explainable per-factor breakdown.
 */

import type { City } from '../../config/cities/types.js';
import type { Service } from '../../config/services.js';
import type { KeywordMetrics } from '../keyword-research/types.js';

/** A (city, service) candidate before research. */
export interface Candidate {
  /** Globally-unique identifier: `${citySlug}__${serviceSlug}`. */
  id: string;
  city: City;
  service: Service;
  /** Synthesized target keyword, e.g. 'web design services london'. */
  targetKeyword: string;
}

/**
 * Per-factor breakdown of a candidate's score. All values normalized
 * to [0, 1] BEFORE exponent weighting is applied. The `weighted` field
 * shows the post-exponent value; `total` is the product of weighted
 * factors.
 */
export interface ScoreBreakdown {
  /** Normalized log-volume, 0–1. */
  volume: number;
  /** Intent classifier output, 0–1. */
  intent: number;
  /** Paying capacity from country-tier table, 0–1. */
  payingCapacity: number;
  /** Combined competition + CPC sweet-spot score, 0–1. */
  competitionGap: number;
  /** After-exponent values (for transparency). */
  weighted: {
    volume: number;
    intent: number;
    payingCapacity: number;
    competitionGap: number;
  };
  /** Final score = product of weighted factors. */
  total: number;
}

/** A scored candidate, ready for ranking. */
export interface ScoredCandidate {
  candidate: Candidate;
  metrics: KeywordMetrics;
  breakdown: ScoreBreakdown;
}
