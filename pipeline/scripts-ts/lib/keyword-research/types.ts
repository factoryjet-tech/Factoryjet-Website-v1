/**
 * Shared types for the keyword research subsystem.
 *
 * These types are the contract between providers, the orchestrator, the
 * cache, and the ledger. Every provider returns data shaped like
 * KeywordMetrics or KeywordIdea — never provider-native shapes.
 */

/**
 * Tenant identifier. Multi-tenant from day one in schema design,
 * single-tenant in current logic. Defaults to 'factoryjet' when omitted.
 */
export type TenantId = string;

/**
 * ISO 3166-1 alpha-2 country code. Drives geographic scoring and
 * provider geo-targeting (Google Ads geoTargetConstants, KE country code).
 */
export type CountryCode = string;

/**
 * BCP-47 language tag. Pipeline currently uses 'en' exclusively but the
 * type allows future expansion.
 */
export type LanguageTag = string;

/**
 * Provider identifier. Free-form string but in practice limited to the
 * registered providers. Written into cache documents and ledger entries.
 */
export type ProviderName = 'mock' | 'keywords-everywhere' | 'google-ads' | string;

/**
 * Input for a metrics or ideas request. Same shape for both methods —
 * providers ignore irrelevant fields (KE ignores `seedKeywords` for
 * GenerateKeywordHistoricalMetrics-equivalent calls).
 */
export interface KeywordResearchInput {
  /** Keywords to fetch metrics for (used by getMetrics). */
  keywords: string[];
  /** ISO country codes to scope results to. */
  geoTargets: CountryCode[];
  /** Language tag (default 'en'). */
  language: LanguageTag;
  /** Tenant scope; defaults to 'factoryjet' if omitted upstream. */
  tenantId?: TenantId;
  /**
   * If true, bypass the cache and force a fresh provider call.
   * Cache will still be written. Defaults to false.
   */
  forceRefresh?: boolean;
}

/**
 * Historical metrics for a single keyword. The canonical shape returned
 * by providers' getMetrics().
 */
export interface KeywordMetrics {
  keyword: string;
  /** Average monthly searches over the last 12 months. */
  monthlySearches: number;
  /** 0–100, where 100 = highest competition. */
  competition: number;
  /** Low-end CPC bid range, in USD. Null if provider doesn't supply. */
  lowBidUsd: number | null;
  /** High-end CPC bid range, in USD. Null if provider doesn't supply. */
  highBidUsd: number | null;
  /** ISO country code(s) the metrics apply to. */
  geoTargets: CountryCode[];
  /** Language tag. */
  language: LanguageTag;
  /** Which provider produced this record. */
  provider: ProviderName;
  /** ISO timestamp when the underlying API call was made. */
  fetchedAt: string;
  /** True if served from cache (set by orchestrator, not providers). */
  fromCache: boolean;
}

/**
 * A single keyword idea returned by expandIdeas() — usually a related
 * query, longer-tail variant, or contextually adjacent term.
 */
export interface KeywordIdea {
  keyword: string;
  /** Optional metrics if the provider returns them alongside the idea. */
  metrics?: Partial<Omit<KeywordMetrics, 'keyword' | 'fromCache'>>;
  /** Provider-specific relevance score, 0–1. May be undefined. */
  relevance?: number;
  provider: ProviderName;
  fetchedAt: string;
}

/**
 * A single ledger entry — written for every provider call (cache miss).
 * Cache hits do NOT produce ledger entries.
 */
export interface LedgerEntry {
  /** Globally-unique ID. crypto.randomUUID(). */
  id: string;
  tenantId: TenantId;
  provider: ProviderName;
  method: 'getMetrics' | 'expandIdeas';
  /** Number of keywords/ideas in the request payload. */
  keywordCount: number;
  /** USD cost of the call. 0 for free providers (mock, google-ads). */
  costUsd: number;
  /** ISO timestamp of the call. */
  timestamp: string;
  /** True if the provider call succeeded. */
  success: boolean;
  /** If !success, the error class/message. Truncated to 500 chars. */
  errorMessage?: string;
}

/**
 * Daily aggregate counter document. Lives at
 * pipeline_meta/daily_usage_{YYYY-MM-DD} (flat document path; chosen
 * over a subcollection for simpler point reads in getDailyUsage).
 */
export interface DailyUsage {
  date: string;
  totalCalls: number;
  totalCostUsd: number;
  /** Per-provider breakdown for at-a-glance auditing. */
  byProvider: Record<ProviderName, { calls: number; costUsd: number }>;
  /** Last-updated timestamp for write-conflict debugging. */
  updatedAt: string;
}
