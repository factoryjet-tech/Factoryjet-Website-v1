/**
 * Firestore-backed cache for keyword research results.
 *
 * Cache key is a SHA-256 hash of (provider, method, keyword, geoTargets,
 * language, tenantId). The hash becomes the document ID; the keyword
 * itself is stored as a field for readability.
 *
 * Collections:
 *   keyword_research_cache/{hash}            — KeywordMetrics records
 *   keyword_idea_cache/{hash}                — KeywordIdea records
 *
 * TTL is enforced at read time — expired entries are returned as
 * cache-miss. Cleanup of expired docs is left to a periodic sweep
 * (not part of Patch #8).
 */

import { createHash } from 'node:crypto';
import { db } from '../firebase-admin.js';
import type {
  CountryCode,
  KeywordIdea,
  KeywordMetrics,
  LanguageTag,
  ProviderName,
  TenantId,
} from './types.js';

const METRICS_COLLECTION = 'keyword_research_cache';
const IDEAS_COLLECTION = 'keyword_idea_cache';

/** TTL constants. Override per-call via CacheOptions if needed. */
export const METRICS_TTL_DAYS = 30;
/**
 * Keyword ideas effectively never expire — seed→related expansions are
 * stable. We use a very long TTL rather than 'forever' so cleanup
 * sweeps can still aged-out anything pathological.
 */
export const IDEAS_TTL_DAYS = 365;

interface CacheKeyParts {
  provider: ProviderName;
  method: 'getMetrics' | 'expandIdeas';
  keyword: string;
  geoTargets: CountryCode[];
  language: LanguageTag;
  tenantId: TenantId;
}

function hashKey(parts: CacheKeyParts): string {
  const canonical = JSON.stringify({
    p: parts.provider,
    m: parts.method,
    k: parts.keyword.trim().toLowerCase(),
    g: [...parts.geoTargets].sort(),
    l: parts.language.toLowerCase(),
    t: parts.tenantId,
  });
  return createHash('sha256').update(canonical).digest('hex');
}

function isExpired(fetchedAtIso: string, ttlDays: number): boolean {
  const fetched = new Date(fetchedAtIso).getTime();
  if (Number.isNaN(fetched)) return true;
  const ageMs = Date.now() - fetched;
  return ageMs > ttlDays * 24 * 60 * 60 * 1000;
}

/* ------------------------------------------------------------------ */
/*   Metrics cache                                                     */
/* ------------------------------------------------------------------ */

export async function getMetricFromCache(
  parts: Omit<CacheKeyParts, 'method'>,
  ttlDays: number = METRICS_TTL_DAYS,
): Promise<KeywordMetrics | null> {
  const id = hashKey({ ...parts, method: 'getMetrics' });
  const snap = await db.collection(METRICS_COLLECTION).doc(id).get();
  if (!snap.exists) return null;
  const data = snap.data() as KeywordMetrics | undefined;
  if (!data) return null;
  if (isExpired(data.fetchedAt, ttlDays)) return null;
  return { ...data, fromCache: true };
}

export async function putMetricInCache(
  parts: Omit<CacheKeyParts, 'method'>,
  metrics: KeywordMetrics,
): Promise<void> {
  const id = hashKey({ ...parts, method: 'getMetrics' });
  // Strip fromCache before persisting — it's a read-time annotation.
  const { fromCache: _ignored, ...payload } = metrics;
  void _ignored;
  await db.collection(METRICS_COLLECTION).doc(id).set(payload);
}

/* ------------------------------------------------------------------ */
/*   Ideas cache                                                       */
/* ------------------------------------------------------------------ */

export async function getIdeasFromCache(
  parts: Omit<CacheKeyParts, 'method'>,
  ttlDays: number = IDEAS_TTL_DAYS,
): Promise<KeywordIdea[] | null> {
  const id = hashKey({ ...parts, method: 'expandIdeas' });
  const snap = await db.collection(IDEAS_COLLECTION).doc(id).get();
  if (!snap.exists) return null;
  const data = snap.data() as { ideas: KeywordIdea[]; fetchedAt: string } | undefined;
  if (!data) return null;
  if (isExpired(data.fetchedAt, ttlDays)) return null;
  return data.ideas;
}

export async function putIdeasInCache(
  parts: Omit<CacheKeyParts, 'method'>,
  ideas: KeywordIdea[],
  fetchedAt: string,
): Promise<void> {
  const id = hashKey({ ...parts, method: 'expandIdeas' });
  await db.collection(IDEAS_COLLECTION).doc(id).set({ ideas, fetchedAt });
}

/* ------------------------------------------------------------------ */
/*   Test helpers                                                      */
/* ------------------------------------------------------------------ */

/**
 * Test-only — deletes a single cache entry by its parts. Production
 * code should never delete cache entries; sweep is a separate job.
 */
export async function _deleteCacheEntryForTesting(
  parts: CacheKeyParts,
): Promise<void> {
  const id = hashKey(parts);
  const collection =
    parts.method === 'getMetrics' ? METRICS_COLLECTION : IDEAS_COLLECTION;
  await db.collection(collection).doc(id).delete();
}

export const _internal = {
  hashKey,
  isExpired,
  METRICS_COLLECTION,
  IDEAS_COLLECTION,
};
