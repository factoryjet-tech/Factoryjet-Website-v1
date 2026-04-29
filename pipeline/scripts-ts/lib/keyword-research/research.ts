/**
 * Orchestrator — the single public entry point for keyword research.
 *
 * Responsibilities:
 *
 *   1. Look up each keyword in the cache.
 *   2. Collect cache misses and call the provider in a single batched call.
 *   3. Run kill-switch check before the provider call.
 *   4. Write provider results to the cache and ledger.
 *   5. Return the merged set (cache hits + fresh results) in input order.
 *
 * Pipeline code never imports providers directly — it imports
 * researchKeywords / expandKeywordIdeas from this module and selects a
 * provider by name.
 */

import {
  getIdeasFromCache,
  getMetricFromCache,
  putIdeasInCache,
  putMetricInCache,
} from './cache.js';
import { checkAndIncrement } from './kill-switch.js';
import { recordLedgerEntry } from './ledger.js';
import { getProvider } from './provider.js';
import type {
  KeywordIdea,
  KeywordMetrics,
  KeywordResearchInput,
  ProviderName,
} from './types.js';

const DEFAULT_TENANT: string = 'factoryjet';

export interface ResearchOptions {
  /** Provider name to dispatch to (must be registered). */
  provider: ProviderName;
}

/**
 * Get historical metrics for an array of keywords. Cache-aware.
 */
export async function researchKeywords(
  input: KeywordResearchInput,
  options: ResearchOptions,
): Promise<KeywordMetrics[]> {
  const tenantId = input.tenantId ?? DEFAULT_TENANT;
  const provider = getProvider(options.provider);
  const cacheKeyBase = {
    provider: options.provider,
    geoTargets: input.geoTargets,
    language: input.language,
    tenantId,
  };

  // 1. Cache lookup.
  const cacheHits: KeywordMetrics[] = [];
  const misses: string[] = [];

  for (const keyword of input.keywords) {
    if (input.forceRefresh) {
      misses.push(keyword);
      continue;
    }
    const hit = await getMetricFromCache({ ...cacheKeyBase, keyword });
    if (hit) {
      cacheHits.push(hit);
    } else {
      misses.push(keyword);
    }
  }

  // 2. Provider call (only for misses).
  let fresh: KeywordMetrics[] = [];
  if (misses.length > 0) {
    const estimatedCost = provider.estimateCostUsd({
      ...input,
      keywords: misses,
    });

    await checkAndIncrement(provider.name, estimatedCost);

    let success = true;
    let errorMessage: string | undefined;

    try {
      fresh = await provider.getMetrics({
        ...input,
        keywords: misses,
        tenantId,
      });
    } catch (err) {
      success = false;
      errorMessage =
        err instanceof Error ? err.message.slice(0, 500) : String(err).slice(0, 500);
      throw err;
    } finally {
      await recordLedgerEntry({
        tenantId,
        provider: provider.name,
        method: 'getMetrics',
        keywordCount: misses.length,
        costUsd: success ? estimatedCost : 0,
        success,
        ...(errorMessage ? { errorMessage } : {}),
      });
    }

    // 3. Cache fresh results.
    for (const m of fresh) {
      await putMetricInCache({ ...cacheKeyBase, keyword: m.keyword }, m);
    }
  }

  // 4. Merge in input order.
  const merged = new Map<string, KeywordMetrics>();
  for (const m of cacheHits) merged.set(m.keyword.toLowerCase(), m);
  for (const m of fresh)
    merged.set(m.keyword.toLowerCase(), { ...m, fromCache: false });

  return input.keywords
    .map((k) => merged.get(k.toLowerCase()))
    .filter((m): m is KeywordMetrics => m !== undefined);
}

/**
 * Generate keyword ideas from seed keywords. Single-shot — ideas are
 * cached as a unit per (seed-set, geo, language, provider) tuple.
 */
export async function expandKeywordIdeas(
  input: KeywordResearchInput,
  options: ResearchOptions,
): Promise<KeywordIdea[]> {
  const tenantId = input.tenantId ?? DEFAULT_TENANT;
  const provider = getProvider(options.provider);

  // Cache key includes the entire seed set as one logical "keyword".
  const seedKey = [...input.keywords].sort().join('||');
  const cacheKeyBase = {
    provider: options.provider,
    keyword: seedKey,
    geoTargets: input.geoTargets,
    language: input.language,
    tenantId,
  };

  if (!input.forceRefresh) {
    const hit = await getIdeasFromCache(cacheKeyBase);
    if (hit) return hit;
  }

  const estimatedCost = provider.estimateCostUsd(input);
  await checkAndIncrement(provider.name, estimatedCost);

  let success = true;
  let errorMessage: string | undefined;
  let ideas: KeywordIdea[] = [];

  try {
    ideas = await provider.expandIdeas({ ...input, tenantId });
  } catch (err) {
    success = false;
    errorMessage =
      err instanceof Error ? err.message.slice(0, 500) : String(err).slice(0, 500);
    throw err;
  } finally {
    await recordLedgerEntry({
      tenantId,
      provider: provider.name,
      method: 'expandIdeas',
      keywordCount: input.keywords.length,
      costUsd: success ? estimatedCost : 0,
      success,
      ...(errorMessage ? { errorMessage } : {}),
    });
  }

  if (success) {
    await putIdeasInCache(cacheKeyBase, ideas, new Date().toISOString());
  }

  return ideas;
}
