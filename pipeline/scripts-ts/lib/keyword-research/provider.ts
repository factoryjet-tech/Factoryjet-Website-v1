/**
 * The provider interface every keyword research source implements.
 *
 * Pipeline code consumes this interface — never a concrete provider's
 * native API. Adding a new provider means implementing this interface
 * and registering an instance via registerProvider().
 */

import type {
  KeywordIdea,
  KeywordMetrics,
  KeywordResearchInput,
  ProviderName,
} from './types.js';

export interface KeywordResearchProvider {
  /** Stable identifier — used as cache and ledger key. */
  readonly name: ProviderName;

  /**
   * Get historical metrics (volume, competition, CPC) for a known
   * keyword list. Required for every provider.
   */
  getMetrics(input: KeywordResearchInput): Promise<KeywordMetrics[]>;

  /**
   * Generate related keyword ideas from seed keywords. Optional —
   * providers that don't support idea expansion (e.g. KeywordsEverywhere)
   * should return an empty array.
   */
  expandIdeas(input: KeywordResearchInput): Promise<KeywordIdea[]>;

  /**
   * Per-call cost estimate in USD, given the input shape. Used by the
   * money-cap kill-switch BEFORE making the call. Free providers
   * (mock, google-ads) return 0.
   */
  estimateCostUsd(input: KeywordResearchInput): number;
}

/** Process-local registry. Reset between runs (Node process boundary). */
const registry = new Map<ProviderName, KeywordResearchProvider>();

export function registerProvider(provider: KeywordResearchProvider): void {
  if (registry.has(provider.name)) {
    throw new Error(
      `[provider] Provider '${provider.name}' already registered. Did you import a registration module twice?`,
    );
  }
  registry.set(provider.name, provider);
}

export function getProvider(name: ProviderName): KeywordResearchProvider {
  const p = registry.get(name);
  if (!p) {
    throw new Error(
      `[provider] No provider registered for '${name}'. Registered: [${Array.from(registry.keys()).join(', ')}]`,
    );
  }
  return p;
}

export function listProviders(): ProviderName[] {
  return Array.from(registry.keys());
}

/** Test-only — clears the registry. Do not call from production code. */
export function _resetRegistryForTesting(): void {
  registry.clear();
}
