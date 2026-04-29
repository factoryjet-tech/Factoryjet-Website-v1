import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { callEnrichment } from './anthropic-client.js';
import { recordAnthropicUsage, getDailyAnthropicCostUsd } from './ledger.js';
import { buildSystemPrompt, buildUserPrompt, PROMPT_VERSION } from './enrichment-prompt.js';
import { validateEnrichment } from './validator.js';
import { writeEnrichedRecord, writeFailure } from './writer.js';
import { CURRENT_ENRICHMENT_VERSION } from '../../config/city-data/types.js';
import type { EnrichmentJob, EnrichmentOutcome, RunBudget } from './types.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SCRIPTS_TS_ROOT = join(__dirname, '..', '..');

export interface EnrichBatchOptions {
  jobs: EnrichmentJob[];
  budget: RunBudget;
  tenantId?: string;
  force?: boolean;
  dryRun?: boolean;
  /** Stream per-city outcomes to the caller (e.g. CLI). */
  onOutcome?: (outcome: EnrichmentOutcome) => void;
}

function isAlreadyEnriched(country: 'GB' | 'US', slug: string): boolean {
  const sub = country === 'GB' ? 'gb' : 'us';
  return existsSync(join(SCRIPTS_TS_ROOT, 'data', 'enriched', sub, `${slug}.json`));
}

function tryParseJson(raw: string): unknown {
  // Tolerate fenced output even though prompt forbids it.
  const trimmed = raw.trim();
  const stripped = trimmed
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/\s*```$/i, '')
    .trim();
  return JSON.parse(stripped);
}

export async function enrichBatch(opts: EnrichBatchOptions): Promise<EnrichmentOutcome[]> {
  const tenantId = opts.tenantId ?? 'factoryjet';
  const outcomes: EnrichmentOutcome[] = [];
  const startingCost = opts.dryRun ? 0 : await getDailyAnthropicCostUsd();
  let runCostUsd = 0;
  let processed = 0;

  for (const job of opts.jobs) {
    if (processed >= opts.budget.maxCities) break;

    if (!opts.force && isAlreadyEnriched(job.countryCode, job.citySlug)) {
      const outcome: EnrichmentOutcome = {
        citySlug: job.citySlug,
        countryCode: job.countryCode,
        outcome: 'success',
        costUsd: 0,
        durationMs: 0,
        errorMessage: 'already enriched (use --force to re-enrich)',
      };
      outcomes.push(outcome);
      opts.onOutcome?.(outcome);
      continue;
    }

    if (runCostUsd + 0.5 > opts.budget.maxUsdPerRun) {
      // Worst-case-per-call estimate ($0.50 conservative). Halt if next call would risk overrun.
      const outcome: EnrichmentOutcome = {
        citySlug: job.citySlug,
        countryCode: job.countryCode,
        outcome: 'api_error',
        costUsd: 0,
        durationMs: 0,
        errorMessage: `budget cap reached: run cost $${runCostUsd.toFixed(4)} of $${opts.budget.maxUsdPerRun.toFixed(2)}`,
      };
      outcomes.push(outcome);
      opts.onOutcome?.(outcome);
      break;
    }

    const systemPrompt = buildSystemPrompt();
    const userPrompt = buildUserPrompt({
      citySlug: job.citySlug,
      cityDisplayName: job.cityDisplayName,
      countryCode: job.countryCode,
      countryDisplayName: job.countryDisplayName,
    });

    if (opts.dryRun) {
      const outcome: EnrichmentOutcome = {
        citySlug: job.citySlug,
        countryCode: job.countryCode,
        outcome: 'success',
        costUsd: 0,
        durationMs: 0,
        errorMessage: `[dry-run] would enrich ${job.cityDisplayName} (${job.countryCode}); prompt assembled (${userPrompt.length} chars)`,
      };
      outcomes.push(outcome);
      opts.onOutcome?.(outcome);
      processed += 1;
      continue;
    }

    const callStart = Date.now();
    let outcome: EnrichmentOutcome;

    try {
      const result = await callEnrichment({
        systemPrompt,
        userPrompt,
        timeoutMs: opts.budget.wallClockPerCityMs,
      });
      runCostUsd += result.estimatedCostUsd;

      let parsed: unknown;
      try {
        parsed = tryParseJson(result.rawText);
      } catch (parseErr) {
        const path = writeFailure({
          citySlug: job.citySlug,
          countryCode: job.countryCode,
          outcome: 'parse_failed',
          rawText: result.rawText,
          modelError: parseErr instanceof Error ? parseErr.message : String(parseErr),
          recordedAt: new Date().toISOString(),
        });
        outcome = {
          citySlug: job.citySlug,
          countryCode: job.countryCode,
          outcome: 'parse_failed',
          costUsd: result.estimatedCostUsd,
          durationMs: result.durationMs,
          outputPath: path,
          errorMessage: parseErr instanceof Error ? parseErr.message : String(parseErr),
        };
        await recordAnthropicUsage({
          tenantId,
          citySlug: job.citySlug,
          countryCode: job.countryCode,
          promptVersion: PROMPT_VERSION,
          enrichmentVersion: CURRENT_ENRICHMENT_VERSION,
          inputTokens: result.inputTokens,
          outputTokens: result.outputTokens,
          estimatedCostUsd: result.estimatedCostUsd,
          durationMs: result.durationMs,
          outcome: 'parse_failed',
          occurredAt: new Date().toISOString(),
        });
        outcomes.push(outcome);
        opts.onOutcome?.(outcome);
        processed += 1;
        continue;
      }

      const validation = validateEnrichment(parsed);
      if (!validation.ok) {
        const path = writeFailure({
          citySlug: job.citySlug,
          countryCode: job.countryCode,
          outcome: 'validation_failed',
          rawText: result.rawText,
          issues: validation.issues,
          recordedAt: new Date().toISOString(),
        });
        outcome = {
          citySlug: job.citySlug,
          countryCode: job.countryCode,
          outcome: 'validation_failed',
          costUsd: result.estimatedCostUsd,
          durationMs: result.durationMs,
          outputPath: path,
          errorMessage: `${validation.issues.length} validation issue(s) — see ${path}`,
        };
        await recordAnthropicUsage({
          tenantId,
          citySlug: job.citySlug,
          countryCode: job.countryCode,
          promptVersion: PROMPT_VERSION,
          enrichmentVersion: CURRENT_ENRICHMENT_VERSION,
          inputTokens: result.inputTokens,
          outputTokens: result.outputTokens,
          estimatedCostUsd: result.estimatedCostUsd,
          durationMs: result.durationMs,
          outcome: 'validation_failed',
          occurredAt: new Date().toISOString(),
        });
        outcomes.push(outcome);
        opts.onOutcome?.(outcome);
        processed += 1;
        continue;
      }

      // Validation passed — write the parsed record (zod-typed via validation.ok branch).
      const enrichedPath = writeEnrichedRecord(job.countryCode, job.citySlug, parsed);

      outcome = {
        citySlug: job.citySlug,
        countryCode: job.countryCode,
        outcome: 'success',
        costUsd: result.estimatedCostUsd,
        durationMs: result.durationMs,
        outputPath: enrichedPath,
      };
      await recordAnthropicUsage({
        tenantId,
        citySlug: job.citySlug,
        countryCode: job.countryCode,
        promptVersion: PROMPT_VERSION,
        enrichmentVersion: CURRENT_ENRICHMENT_VERSION,
        inputTokens: result.inputTokens,
        outputTokens: result.outputTokens,
        estimatedCostUsd: result.estimatedCostUsd,
        durationMs: result.durationMs,
        outcome: 'success',
        occurredAt: new Date().toISOString(),
      });
    } catch (apiErr) {
      outcome = {
        citySlug: job.citySlug,
        countryCode: job.countryCode,
        outcome: 'api_error',
        costUsd: 0,
        durationMs: Date.now() - callStart,
        errorMessage: apiErr instanceof Error ? apiErr.message : String(apiErr),
      };
    }

    outcomes.push(outcome);
    opts.onOutcome?.(outcome);
    processed += 1;
  }

  // Summary line for the caller's logs.
  if (!opts.dryRun) {
    const finalCost = await getDailyAnthropicCostUsd();
    // eslint-disable-next-line no-console
    console.error(
      `[enrich] today's total Anthropic cost: $${finalCost.toFixed(4)} (was $${startingCost.toFixed(4)} at start of run; this run: $${runCostUsd.toFixed(4)})`,
    );
  }

  return outcomes;
}
