/**
 * End-to-end smoke test for the keyword-research architectural foundation.
 *
 * Registers a minimal echo-stub provider, exercises:
 *
 *   - Cache miss → provider call → cache write → ledger write → daily-aggregate write
 *   - Cache hit on identical second call (no provider call, no ledger write)
 *   - forceRefresh bypasses cache
 *   - Kill-switch increments per call
 *   - Idea expansion path
 *
 * Cleans up all Firestore documents it created on success. Fails fast
 * (process.exit(1)) on any assertion failure or thrown error.
 */

import { db } from '../lib/firebase-admin.js';
import {
  expandKeywordIdeas,
  getDailyUsage,
  registerProvider,
  researchKeywords,
  type KeywordIdea,
  type KeywordMetrics,
  type KeywordResearchProvider,
} from '../lib/keyword-research/index.js';
import {
  _deleteCacheEntryForTesting,
  _internal as cacheInternal,
} from '../lib/keyword-research/cache.js';
import {
  _deleteDailyUsageForTesting,
  _internal as ledgerInternal,
} from '../lib/keyword-research/ledger.js';
import {
  _resetRunCounterForTesting,
  _getRunCounterForTesting,
} from '../lib/keyword-research/kill-switch.js';
import { _resetRegistryForTesting } from '../lib/keyword-research/provider.js';

const TEST_TENANT = `smoke-${Date.now()}`;
const TEST_KEYWORD = `smoke-test-keyword-${Date.now()}`;
const TEST_GEO = ['XX']; // bogus country code, won't collide with real data
const TEST_LANG = 'qq'; // bogus language tag

let providerCallCount = 0;

const echoProvider: KeywordResearchProvider = {
  name: 'echo-stub',
  estimateCostUsd: () => 0,
  async getMetrics(input) {
    providerCallCount += 1;
    return input.keywords.map(
      (k): KeywordMetrics => ({
        keyword: k,
        monthlySearches: 100,
        competition: 50,
        lowBidUsd: 0.5,
        highBidUsd: 1.5,
        geoTargets: input.geoTargets,
        language: input.language,
        provider: 'echo-stub',
        fetchedAt: new Date().toISOString(),
        fromCache: false,
      }),
    );
  },
  async expandIdeas(input) {
    providerCallCount += 1;
    return input.keywords.map(
      (seed): KeywordIdea => ({
        keyword: `${seed}-related`,
        provider: 'echo-stub',
        fetchedAt: new Date().toISOString(),
      }),
    );
  },
};

interface CleanupTask {
  description: string;
  run: () => Promise<void>;
}

const cleanupTasks: CleanupTask[] = [];

function assert(cond: boolean, message: string): void {
  if (!cond) throw new Error(`Assertion failed: ${message}`);
}

async function main(): Promise<void> {
  console.log(`[smoke] Tenant: ${TEST_TENANT}`);
  console.log(`[smoke] Keyword: ${TEST_KEYWORD}`);

  _resetRegistryForTesting();
  _resetRunCounterForTesting();
  registerProvider(echoProvider);

  const input = {
    keywords: [TEST_KEYWORD],
    geoTargets: TEST_GEO,
    language: TEST_LANG,
    tenantId: TEST_TENANT,
  };

  // Schedule cache cleanup regardless of test outcome.
  cleanupTasks.push({
    description: 'metrics cache entry',
    run: () =>
      _deleteCacheEntryForTesting({
        provider: 'echo-stub',
        method: 'getMetrics',
        keyword: TEST_KEYWORD,
        geoTargets: TEST_GEO,
        language: TEST_LANG,
        tenantId: TEST_TENANT,
      }),
  });
  cleanupTasks.push({
    description: 'ideas cache entry',
    run: () =>
      _deleteCacheEntryForTesting({
        provider: 'echo-stub',
        method: 'expandIdeas',
        keyword: TEST_KEYWORD,
        geoTargets: TEST_GEO,
        language: TEST_LANG,
        tenantId: TEST_TENANT,
      }),
  });

  const today = ledgerInternal.todayUtc();
  cleanupTasks.push({
    description: `daily-usage doc ${today}`,
    // We don't delete the daily doc by default — other smoke runs share it.
    // We only delete if the doc didn't exist before this run.
    run: async () => {
      // No-op; daily aggregate is shared across runs and harmless to leave.
      // If you need to inspect, query pipeline_meta/daily_usage_<date>.
      return;
    },
  });

  // ---- 1. Cache miss → provider call ----
  console.log('[smoke] 1. Cache miss → provider call');
  const initialCounter = _getRunCounterForTesting();
  providerCallCount = 0;
  const r1 = await researchKeywords(input, { provider: 'echo-stub' });
  assert(r1.length === 1, 'expected 1 result');
  assert(r1[0]?.keyword === TEST_KEYWORD, 'keyword mismatch');
  assert(r1[0]?.fromCache === false, 'first call should not be cache hit');
  assert(providerCallCount === 1, 'provider should have been called once');
  assert(
    _getRunCounterForTesting() === initialCounter + 1,
    'kill-switch counter should have incremented',
  );
  console.log('[smoke]   ✓ Provider called, fromCache=false');

  // ---- 2. Cache hit on second call ----
  console.log('[smoke] 2. Cache hit on second call');
  providerCallCount = 0;
  const counterBefore = _getRunCounterForTesting();
  const r2 = await researchKeywords(input, { provider: 'echo-stub' });
  assert(r2.length === 1, 'expected 1 result on cache hit');
  assert(r2[0]?.fromCache === true, 'second call should be cache hit');
  assert(providerCallCount === 0, 'provider should NOT have been called');
  assert(
    _getRunCounterForTesting() === counterBefore,
    'kill-switch counter should NOT have incremented on cache hit',
  );
  console.log('[smoke]   ✓ Cache hit, no provider call');

  // ---- 3. forceRefresh bypasses cache ----
  console.log('[smoke] 3. forceRefresh bypasses cache');
  providerCallCount = 0;
  const r3 = await researchKeywords(
    { ...input, forceRefresh: true },
    { provider: 'echo-stub' },
  );
  assert(r3.length === 1, 'expected 1 result on forceRefresh');
  assert(r3[0]?.fromCache === false, 'forceRefresh should bypass cache');
  assert(providerCallCount === 1, 'provider should have been called on forceRefresh');
  console.log('[smoke]   ✓ forceRefresh bypassed cache');

  // ---- 4. Idea expansion path ----
  console.log('[smoke] 4. Idea expansion');
  providerCallCount = 0;
  const ideas1 = await expandKeywordIdeas(input, { provider: 'echo-stub' });
  assert(ideas1.length === 1, 'expected 1 idea');
  assert(
    ideas1[0]?.keyword === `${TEST_KEYWORD}-related`,
    'idea keyword shape mismatch',
  );
  assert(providerCallCount === 1, 'provider should have been called for ideas');

  // Second call should be cache hit.
  providerCallCount = 0;
  const ideas2 = await expandKeywordIdeas(input, { provider: 'echo-stub' });
  assert(ideas2.length === 1, 'expected cached idea');
  assert(providerCallCount === 0, 'ideas cache should have been hit');
  console.log('[smoke]   ✓ Idea expansion cached');

  // ---- 5. Daily-usage aggregate reflects the calls ----
  console.log('[smoke] 5. Daily-usage aggregate');
  const usage = await getDailyUsage();
  assert(
    (usage.byProvider['echo-stub']?.calls ?? 0) >= 3,
    `expected ≥3 echo-stub calls in daily aggregate, got ${usage.byProvider['echo-stub']?.calls ?? 0}`,
  );
  console.log(
    `[smoke]   ✓ Daily aggregate: echo-stub=${usage.byProvider['echo-stub']?.calls} calls today`,
  );

  // ---- 6. Real mock provider (deterministic) ----
  console.log('[smoke] 6. Real mock provider');
  // Import + register mock provider via the auto-registration module.
  // Note: registry was reset at the top of main(), so this is the
  // first registration of 'mock' in this process.
  const { mockProvider } = await import('../lib/keyword-research/providers/mock.js');
  registerProvider(mockProvider);

  const mockInput = {
    keywords: [`${TEST_KEYWORD}-mock`],
    geoTargets: TEST_GEO,
    language: TEST_LANG,
    tenantId: TEST_TENANT,
  };

  const mockResult1 = await researchKeywords(mockInput, { provider: 'mock' });
  assert(mockResult1.length === 1, 'mock should return 1 result');
  assert(
    mockResult1[0]?.provider === 'mock',
    `mock provider tag mismatch: ${mockResult1[0]?.provider}`,
  );
  assert(
    typeof mockResult1[0]?.monthlySearches === 'number',
    'mock should return numeric monthlySearches',
  );
  assert(
    (mockResult1[0]?.monthlySearches ?? 0) >= 10 &&
      (mockResult1[0]?.monthlySearches ?? 0) <= 50_000,
    `mock monthlySearches out of expected range: ${mockResult1[0]?.monthlySearches}`,
  );

  // Determinism check: identical input on a forceRefresh should return
  // identical metrics (PRNG is seeded by keyword+geo+language).
  const mockResult2 = await researchKeywords(
    { ...mockInput, forceRefresh: true },
    { provider: 'mock' },
  );
  assert(
    mockResult1[0]?.monthlySearches === mockResult2[0]?.monthlySearches &&
      mockResult1[0]?.competition === mockResult2[0]?.competition &&
      mockResult1[0]?.lowBidUsd === mockResult2[0]?.lowBidUsd &&
      mockResult1[0]?.highBidUsd === mockResult2[0]?.highBidUsd,
    'mock provider should be deterministic across calls with same input',
  );

  // Idea expansion via mock.
  const mockIdeas = await expandKeywordIdeas(mockInput, { provider: 'mock' });
  assert(
    mockIdeas.length >= 5 && mockIdeas.length <= 15,
    `mock should return 5–15 ideas, got ${mockIdeas.length}`,
  );
  assert(
    mockIdeas.every((i) => i.provider === 'mock'),
    'all mock ideas should carry provider=mock',
  );

  console.log(
    `[smoke]   ✓ Mock provider deterministic; metrics & ${mockIdeas.length} ideas returned`,
  );

  // Schedule cleanup of the mock-keyword cache entries.
  cleanupTasks.push({
    description: 'mock metrics cache entry',
    run: () =>
      _deleteCacheEntryForTesting({
        provider: 'mock',
        method: 'getMetrics',
        keyword: `${TEST_KEYWORD}-mock`,
        geoTargets: TEST_GEO,
        language: TEST_LANG,
        tenantId: TEST_TENANT,
      }),
  });
  cleanupTasks.push({
    description: 'mock ideas cache entry',
    run: () =>
      _deleteCacheEntryForTesting({
        provider: 'mock',
        method: 'expandIdeas',
        keyword: `${TEST_KEYWORD}-mock`,
        geoTargets: TEST_GEO,
        language: TEST_LANG,
        tenantId: TEST_TENANT,
      }),
  });

  console.log('\n[smoke] ALL CHECKS PASSED');
}

async function cleanup(): Promise<void> {
  for (const task of cleanupTasks) {
    try {
      await task.run();
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.warn(`[smoke] cleanup warning (${task.description}): ${msg}`);
    }
  }

  // Best-effort ledger cleanup: query and delete this run's entries.
  try {
    const ledgerSnap = await db
      .collection(ledgerInternal.LEDGER_COLLECTION)
      .where('tenantId', '==', TEST_TENANT)
      .get();
    const deletes: Promise<unknown>[] = [];
    ledgerSnap.forEach((doc) => deletes.push(doc.ref.delete()));
    await Promise.all(deletes);
    console.log(`[smoke]   ✓ Cleanup: deleted ${deletes.length} ledger entries`);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.warn(`[smoke] ledger cleanup warning: ${msg}`);
  }
}

main()
  .then(async () => {
    await cleanup();
    console.log('[smoke] Cleanup complete. Exiting 0.');
    process.exit(0);
  })
  .catch(async (err: unknown) => {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`\n[smoke] FAILED: ${msg}`);
    if (err instanceof Error && err.stack) console.error(err.stack);
    await cleanup();
    process.exit(1);
  });
