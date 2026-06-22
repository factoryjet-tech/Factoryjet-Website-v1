/**
 * Tunable exponent weights for the opportunity scorer.
 *
 *   score = volume^a × intent^b × payingCapacity^c × competitionGap^d
 *
 * Defaults are hand-tuned starting points:
 *
 *   a=0.6   Volume dampened. High-volume isn't always high-quality;
 *           we care about *qualified* searches more than raw count.
 *   b=1.0   Intent at full weight. Commercial-intent keywords are the
 *           whole point — informational keywords are explicitly devalued.
 *   c=1.0   Paying capacity at full weight. The country-tier rubric
 *           encodes our strategic decision that US > UK > India for
 *           SMB digital-services pricing power.
 *   d=0.8   Competition gap slightly dampened. Over-rewarding low
 *           competition produces obscure long-tail garbage that has
 *           no business value even if it's easy to rank for.
 *
 * After 6 months of "we built this page, here's what happened" data
 * we can fit weights to actual outcomes. Until then, hand-tuning beats
 * overfitting noise.
 */

export interface ScoringWeights {
  volume: number;
  intent: number;
  payingCapacity: number;
  competitionGap: number;
}

export const DEFAULT_WEIGHTS: ScoringWeights = {
  volume: 0.6,
  intent: 1.0,
  payingCapacity: 1.0,
  competitionGap: 0.8,
};
