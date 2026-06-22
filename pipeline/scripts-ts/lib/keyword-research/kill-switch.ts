/**
 * Kill-switch: enforces hard caps on API consumption.
 *
 * Two layers:
 *
 * 1. Per-run, in-memory counter. Resets every Node process. Catches
 *    runaway loops within a single pipeline invocation.
 * 2. Per-day, Firestore-backed counter. Survives process restarts.
 *    Catches accidentally launching a second pipeline run after the
 *    first has consumed today's budget.
 *
 * Plus a money-cap layer for KeywordsEverywhere ($25 lifetime budget).
 *
 * Limits are intentionally conservative:
 *
 *   PER_RUN_MAX_CALLS:   matches the design doc's stated rate-limit caps.
 *   PER_DAY_MAX_CALLS:   matches the design doc's stated daily soft cap
 *                        and stays well under Basic Access ~15k/day.
 *   KE_LIFETIME_USD_CAP: matches the $25 budget noted in pipeline docs.
 */

import { getDailyUsage, getLifetimeProviderSpend } from './ledger.js';
import type { ProviderName } from './types.js';

export const PER_RUN_MAX_CALLS = 5_000;
export const PER_DAY_MAX_CALLS = 5_000;
export const KE_LIFETIME_USD_CAP = 25;

let runCounter = 0;

export class KillSwitchTrippedError extends Error {
  override readonly name = 'KillSwitchTrippedError';
  constructor(
    public readonly limit: 'per-run' | 'per-day' | 'money-cap',
    message: string,
  ) {
    super(message);
  }
}

/**
 * Call BEFORE every provider call. Throws KillSwitchTrippedError if any
 * cap is breached. On success, increments the per-run counter.
 */
export async function checkAndIncrement(
  provider: ProviderName,
  estimatedCostUsd: number,
): Promise<void> {
  // 1. Per-run cap.
  if (runCounter >= PER_RUN_MAX_CALLS) {
    throw new KillSwitchTrippedError(
      'per-run',
      `Per-run cap of ${PER_RUN_MAX_CALLS} provider calls exceeded.`,
    );
  }

  // 2. Per-day cap.
  const usage = await getDailyUsage();
  if (usage.totalCalls >= PER_DAY_MAX_CALLS) {
    throw new KillSwitchTrippedError(
      'per-day',
      `Per-day cap of ${PER_DAY_MAX_CALLS} provider calls exceeded (current: ${usage.totalCalls}).`,
    );
  }

  // 3. Money cap (KE only, lifetime).
  if (provider === 'keywords-everywhere' && estimatedCostUsd > 0) {
    const lifetime = await getLifetimeProviderSpend('keywords-everywhere');
    if (lifetime + estimatedCostUsd > KE_LIFETIME_USD_CAP) {
      throw new KillSwitchTrippedError(
        'money-cap',
        `KeywordsEverywhere lifetime spend cap of $${KE_LIFETIME_USD_CAP} would be exceeded ` +
          `(current: $${lifetime.toFixed(2)}, this call: $${estimatedCostUsd.toFixed(2)}).`,
      );
    }
  }

  runCounter += 1;
}

/** Test-only — resets the per-run counter. */
export function _resetRunCounterForTesting(): void {
  runCounter = 0;
}

/** Test-only — read-only inspection. */
export function _getRunCounterForTesting(): number {
  return runCounter;
}
