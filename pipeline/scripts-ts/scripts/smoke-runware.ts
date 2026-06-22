/**
 * Smoke test: Runware text-inference SDK end-to-end.
 *
 * Loads RUNWARE_API_KEY via requireRunwareKey() (which sources
 * ~/.factoryjet/runware.env per the standard env loader), instantiates
 * the SDK, and makes one cheap textInference call. Exits 0 on success,
 * 1 on any error.
 *
 * Phase A1.1 — proves the SDK + key wiring work before any production
 * code path consumes Runware. Model selection: DeepSeek V4 Flash is not
 * present in Runware's catalog as of 2026-04-30, so we fall back to
 * `google:gemini@3.1-flash-lite` — Runware's cheapest documented text
 * model. AIR identifier format verified at
 * https://runware.ai/models/google-gemini-3-1-flash-lite.
 *
 * Run: pnpm exec tsx scripts/smoke-runware.ts
 */
import { Runware } from '@runware/sdk-js';
import { requireRunwareKey } from '../config/env.js';

const MODEL_AIR = 'google:gemini@3.1-flash-lite';

async function main(): Promise<void> {
  const apiKey = requireRunwareKey();
  const runware = new Runware({ apiKey });

  console.log(`[smoke-runware] Model: ${MODEL_AIR}`);

  // NOTE: Despite IRequestTextInference declaring maxTokens at the top level,
  // the live Runware API rejects it there ("Unsupported use of 'maxTokens'
  // parameter"). The error response lists `settings` as the bag for
  // generation-config knobs, so we pass it there. Documented allowed top-
  // level keys: model, messages, seed, numberResults, inputs, tools,
  // toolChoice, settings, taskUUID, deliveryMethod, includeCost,
  // includeUsage, providerSettings.
  const result = await runware.textInference({
    model: MODEL_AIR,
    messages: [{ role: 'user', content: 'Reply with exactly the single word: ok' }],
    settings: { maxTokens: 10 },
    includeCost: true,
    includeUsage: true,
  });

  const first = Array.isArray(result) ? result[0] : result;
  if (!first || typeof first.text !== 'string') {
    throw new Error('[smoke-runware] No text in response: ' + JSON.stringify(first));
  }

  console.log('[smoke-runware] Response:');
  console.log(`  text:         ${JSON.stringify(first.text)}`);
  console.log(`  finishReason: ${first.finishReason}`);
  console.log(
    `  usage:        prompt=${first.usage?.promptTokens} completion=${first.usage?.completionTokens} total=${first.usage?.totalTokens}`,
  );
  console.log(`  cost:         ${first.cost ?? 'n/a'}`);
  console.log(`  taskUUID:     ${first.taskUUID}`);
  console.log('[smoke-runware] PASS');

  await runware.disconnect().catch(() => {
    // disconnect is best-effort — websocket cleanup
  });
}

main().catch((err: unknown) => {
  console.error('[smoke-runware] FAIL:', err instanceof Error ? err.message : err);
  if (err instanceof Error && err.stack) console.error(err.stack);
  process.exit(1);
});
