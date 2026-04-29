/**
 * Provider auto-registration.
 *
 * Importing this module registers all currently-implemented providers
 * with the global registry as a side effect. Pipeline entry points
 * (CLI scripts, future cron jobs) should import this module once at
 * startup before calling researchKeywords / expandKeywordIdeas.
 *
 * Currently registered:
 *   - mock          (deterministic fake data, $0)
 *
 * Pending:
 *   - keywords-everywhere   (Patch #10, deferred)
 *   - google-ads            (Patch #11, awaiting Basic Access approval)
 */

import { registerProvider } from '../provider.js';
import { mockProvider } from './mock.js';

registerProvider(mockProvider);

// Re-export the providers module's pending stub so import-graph
// analysis sees google-ads.ts is referenced (prevents accidental
// dead-code elimination if a tool ever prunes unreferenced files).
export { GOOGLE_ADS_PROVIDER_PENDING } from './google-ads.js';
