/**
 * Cost & usage ledger.
 *
 * Every provider call (cache miss) writes a LedgerEntry. Daily aggregates
 * are maintained at pipeline_meta/daily_usage/{YYYY-MM-DD} for fast
 * kill-switch lookups and human-readable spot checks.
 *
 * Design notes:
 *
 * - Ledger entries are append-only. We never update an existing entry.
 * - Daily aggregates use a Firestore transaction to avoid lost updates
 *   under concurrent writes.
 * - Per-tenant lifetime spend is computed lazily by the kill-switch
 *   on demand (no separate aggregate doc — keeps schema simple at
 *   single-tenant scale, can add when multi-tenant load justifies it).
 */

import { randomUUID } from 'node:crypto';
import { db } from '../firebase-admin.js';
import type { LedgerEntry, ProviderName, TenantId } from './types.js';

const LEDGER_COLLECTION = 'api_usage';
const DAILY_USAGE_PATH = (date: string) => `pipeline_meta/daily_usage_${date}`;

function todayUtc(): string {
  // YYYY-MM-DD in UTC. Pipeline runs from a single timezone but UTC
  // makes day boundaries unambiguous and stable across DST.
  return new Date().toISOString().slice(0, 10);
}

export async function recordLedgerEntry(
  entry: Omit<LedgerEntry, 'id' | 'timestamp'>,
): Promise<LedgerEntry> {
  const full: LedgerEntry = {
    ...entry,
    id: randomUUID(),
    timestamp: new Date().toISOString(),
  };

  // Append-only entry.
  await db.collection(LEDGER_COLLECTION).doc(full.id).set(full);

  // Daily aggregate update (transactional).
  const date = todayUtc();
  const dailyRef = db.doc(DAILY_USAGE_PATH(date));
  await db.runTransaction(async (tx) => {
    const snap = await tx.get(dailyRef);
    const existing = snap.exists
      ? (snap.data() as {
          totalCalls: number;
          totalCostUsd: number;
          byProvider: Record<ProviderName, { calls: number; costUsd: number }>;
        })
      : { totalCalls: 0, totalCostUsd: 0, byProvider: {} };
    const prov = existing.byProvider[full.provider] ?? {
      calls: 0,
      costUsd: 0,
    };
    tx.set(dailyRef, {
      date,
      totalCalls: existing.totalCalls + 1,
      totalCostUsd: existing.totalCostUsd + full.costUsd,
      byProvider: {
        ...existing.byProvider,
        [full.provider]: {
          calls: prov.calls + 1,
          costUsd: prov.costUsd + full.costUsd,
        },
      },
      updatedAt: full.timestamp,
    });
  });

  return full;
}

export async function getDailyUsage(date?: string): Promise<{
  date: string;
  totalCalls: number;
  totalCostUsd: number;
  byProvider: Record<ProviderName, { calls: number; costUsd: number }>;
}> {
  const d = date ?? todayUtc();
  const snap = await db.doc(DAILY_USAGE_PATH(d)).get();
  if (!snap.exists) {
    return { date: d, totalCalls: 0, totalCostUsd: 0, byProvider: {} };
  }
  return snap.data() as {
    date: string;
    totalCalls: number;
    totalCostUsd: number;
    byProvider: Record<ProviderName, { calls: number; costUsd: number }>;
  };
}

/**
 * Sum of lifetime spend for a given provider across all tenants.
 * Used by the money-cap kill-switch (KE budget enforcement).
 *
 * Cost: O(N) read across the api_usage collection. Acceptable at our
 * volume (thousands of entries lifetime). If volume grows, replace
 * with a maintained aggregate document.
 */
export async function getLifetimeProviderSpend(
  provider: ProviderName,
  tenantId?: TenantId,
): Promise<number> {
  let query = db
    .collection(LEDGER_COLLECTION)
    .where('provider', '==', provider)
    .where('success', '==', true);
  if (tenantId) query = query.where('tenantId', '==', tenantId);
  const snap = await query.get();
  let total = 0;
  snap.forEach((doc) => {
    const data = doc.data() as LedgerEntry;
    total += data.costUsd;
  });
  return total;
}

/* ------------------------------------------------------------------ */
/*   Test helpers                                                      */
/* ------------------------------------------------------------------ */

export async function _deleteLedgerEntryForTesting(id: string): Promise<void> {
  await db.collection(LEDGER_COLLECTION).doc(id).delete();
}

export async function _deleteDailyUsageForTesting(date: string): Promise<void> {
  await db.doc(DAILY_USAGE_PATH(date)).delete();
}

export const _internal = { LEDGER_COLLECTION, DAILY_USAGE_PATH, todayUtc };
