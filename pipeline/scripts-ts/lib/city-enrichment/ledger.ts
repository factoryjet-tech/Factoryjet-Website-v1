/**
 * Anthropic-specific cost ledger. Mirrors the keyword-research ledger pattern
 * but writes to a separate collection to avoid polluting that module's
 * aggregates. Refactor into a shared cost-tracking module when a third
 * consumer appears.
 */

import { FieldValue } from 'firebase-admin/firestore';
import { db } from '../firebase-admin.js';

const USAGE_COLLECTION = 'anthropic_usage';
const DAILY_DOC_PREFIX = 'pipeline_meta/daily_anthropic_';

export interface AnthropicLedgerEntry {
  tenantId: string;
  citySlug: string;
  countryCode: 'GB' | 'US';
  promptVersion: number;
  enrichmentVersion: number;
  inputTokens: number;
  outputTokens: number;
  estimatedCostUsd: number;
  durationMs: number;
  outcome: 'success' | 'validation_failed' | 'parse_failed' | 'api_error';
  occurredAt: string; // ISO 8601
}

function todayDateKey(): string {
  // YYYY-MM-DD in UTC.
  return new Date().toISOString().slice(0, 10);
}

interface DailyAggregate {
  date?: string;
  calls?: number;
  costUsd?: number;
  inputTokens?: number;
  outputTokens?: number;
}

export async function recordAnthropicUsage(entry: AnthropicLedgerEntry): Promise<void> {
  const dailyPath = `${DAILY_DOC_PREFIX}${todayDateKey()}`;

  await db.runTransaction(async (tx) => {
    const dailyRef = db.doc(dailyPath);
    const usageRef = db.collection(USAGE_COLLECTION).doc();

    const snapshot = await tx.get(dailyRef);
    const existing = (snapshot.exists ? (snapshot.data() as DailyAggregate) : {}) ?? {};
    const prevCalls = existing.calls ?? 0;
    const prevCostUsd = existing.costUsd ?? 0;
    const prevInput = existing.inputTokens ?? 0;
    const prevOutput = existing.outputTokens ?? 0;

    tx.set(usageRef, { ...entry, _writtenAt: FieldValue.serverTimestamp() });
    tx.set(
      dailyRef,
      {
        date: todayDateKey(),
        calls: prevCalls + 1,
        costUsd: prevCostUsd + entry.estimatedCostUsd,
        inputTokens: prevInput + entry.inputTokens,
        outputTokens: prevOutput + entry.outputTokens,
        _updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true },
    );
  });
}

export async function getDailyAnthropicCostUsd(): Promise<number> {
  const dailyPath = `${DAILY_DOC_PREFIX}${todayDateKey()}`;
  const snap = await db.doc(dailyPath).get();
  if (!snap.exists) return 0;
  const data = (snap.data() as DailyAggregate) ?? {};
  return data.costUsd ?? 0;
}
