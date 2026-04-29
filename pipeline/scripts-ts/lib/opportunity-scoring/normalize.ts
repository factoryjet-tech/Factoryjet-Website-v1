/**
 * Factor normalization — every factor goes to [0, 1] before scoring.
 *
 * Normalization choices:
 *
 *   volume:        log-scaled. log10(1) → 0, log10(100,000) → 1.
 *                  A 10x volume jump is a 0.2 score jump (0–1 over 5
 *                  decades), not a 10x score jump. Long-tail keywords
 *                  with 50 searches/month aren't *zero* value; mega-volume
 *                  keywords aren't 1000x more valuable.
 *
 *   payingCapacity: divide the country-tier 1–10 value by 10. US=1.0,
 *                  GB=0.9, AU=0.8, ..., IN=0.3.
 *
 *   competitionGap: combine (1 - competition/100) with a CPC sweet-spot
 *                  function. Low competition + moderate CPC = high gap.
 *                  Zero CPC = noise (no commercial value), so even with
 *                  zero competition the gap is dampened. Very high CPC =
 *                  expensive market we won't win as the cheap option, so
 *                  also dampened.
 */

import { getPayingCapacity } from '../../config/country-tiers.js';

const VOLUME_LOG_MIN = 0;        // log10(1) → 0
const VOLUME_LOG_MAX = 5;        // log10(100,000) → 5
const VOLUME_RANGE = VOLUME_LOG_MAX - VOLUME_LOG_MIN;

/** Normalize monthly search volume to [0, 1] on a log scale. */
export function normalizeVolume(monthlySearches: number): number {
  if (monthlySearches <= 0) return 0;
  const v = Math.log10(monthlySearches);
  return Math.max(0, Math.min(1, (v - VOLUME_LOG_MIN) / VOLUME_RANGE));
}

/**
 * Normalize country-tier paying capacity (1–10) to [0, 1].
 * Floors at 0.1 even for unknown countries, so we never hard-zero a score.
 */
export function normalizePayingCapacity(countryCode: string): number {
  const raw = getPayingCapacity(countryCode);
  return Math.max(0.1, Math.min(1, raw / 10));
}

/**
 * Combined competition + CPC sweet-spot score, [0, 1].
 *
 *   competition    : 0–100 (0 = easy to rank, 100 = saturated)
 *   midCpcUsd      : average of low and high CPC, used as a market-value proxy
 *
 * The sweet spot is low-medium competition (under ~60) with mid CPC
 * ($1–$8). Penalize:
 *   - Very high competition (>80): we won't outrank entrenched agencies.
 *   - Zero or near-zero CPC: keyword has no commercial value even if
 *     easy to rank for.
 *   - Very high CPC (>$15): expensive auction, we'd be outbid before
 *     organic ranking pays off.
 */
export function normalizeCompetitionGap(
  competition: number,
  midCpcUsd: number,
): number {
  // Competition factor: invert and dampen extremes.
  // 0 → 1.0; 50 → 0.5; 100 → 0.0
  const competitionFactor = Math.max(0, Math.min(1, 1 - competition / 100));

  // CPC sweet-spot: bell-ish curve centered at ~$4, full credit between
  // $1 and $8, dropping off below $0.50 and above $15.
  let cpcFactor: number;
  if (midCpcUsd < 0.5) {
    cpcFactor = midCpcUsd / 0.5; // ramp up to 1 by $0.50
  } else if (midCpcUsd <= 8) {
    cpcFactor = 1.0;
  } else if (midCpcUsd <= 15) {
    cpcFactor = 1 - (midCpcUsd - 8) / 7; // 1 at $8, 0 at $15
  } else {
    cpcFactor = 0;
  }

  // Geometric mean — both factors must be reasonable for a high score.
  return Math.sqrt(competitionFactor * cpcFactor);
}
