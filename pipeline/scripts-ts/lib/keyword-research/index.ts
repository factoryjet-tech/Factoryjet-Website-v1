/**
 * Public surface of the keyword-research subsystem.
 *
 * Pipeline code imports from this module exclusively. Internal modules
 * (cache, ledger, kill-switch internals) are not re-exported.
 */

export {
  researchKeywords,
  expandKeywordIdeas,
  type ResearchOptions,
} from './research.js';

export {
  registerProvider,
  getProvider,
  listProviders,
  type KeywordResearchProvider,
} from './provider.js';

export {
  KillSwitchTrippedError,
  PER_RUN_MAX_CALLS,
  PER_DAY_MAX_CALLS,
  KE_LIFETIME_USD_CAP,
} from './kill-switch.js';

export { getDailyUsage, getLifetimeProviderSpend } from './ledger.js';

export type {
  CountryCode,
  DailyUsage,
  KeywordIdea,
  KeywordMetrics,
  KeywordResearchInput,
  LanguageTag,
  LedgerEntry,
  ProviderName,
  TenantId,
} from './types.js';
