/**
 * Smoke test: DeepSeek API end-to-end via the OpenAI-compatible client.
 *
 * Two probes verify both flagship models in their intended modes:
 *
 *   Probe 1 — deepseek-v4-flash, NON-thinking mode (`thinking.type:'disabled'`).
 *             Default mode for the FlashV4 model is thinking-on; we explicitly
 *             disable it to test the cheap fast path most production calls
 *             will use.
 *
 *   Probe 2 — deepseek-v4-pro, thinking mode with `reasoning_effort:'high'`.
 *             Reasoning models burn budget on hidden thinking tokens before
 *             emitting output, so we set max_tokens=4096 to leave room.
 *
 * Hard cost cap: $0.05 across both probes. DeepSeek's chat.completions
 * endpoint does not return cost in the response — we estimate it locally
 * from `usage.prompt_tokens` / `usage.completion_tokens` and the published
 * per-million pricing. Exits 1 if estimated total exceeds the cap.
 *
 * Phase A1.3 — proves the SDK + key wiring work before any production
 * code path consumes DeepSeek.
 *
 * Run: pnpm exec tsx scripts/smoke-deepseek.ts
 */
import OpenAI from 'openai';
import { requireDeepseekKey } from '../config/env.js';

const HARD_CAP_USD = 0.05;

// Per-million-token rates, USD. Cache-miss/hit pricing from
// https://api-docs.deepseek.com/quick_start/pricing as of 2026-04-30.
// Values intentionally documented inline so future readers spot drift.
const PRICING: Record<string, { input: number; output: number }> = {
  'deepseek-v4-flash': { input: 0.28, output: 0.42 },
  'deepseek-v4-pro':   { input: 0.56, output: 1.68 },
};

function estimateCost(model: string, promptTokens: number, completionTokens: number): number | null {
  const p = PRICING[model];
  if (!p) return null;
  return (promptTokens * p.input + completionTokens * p.output) / 1_000_000;
}

interface ProbeReport {
  label: string;
  model: string;
  text: string;
  promptTokens: number;
  completionTokens: number;
  reasoningTokens: number | null;
  estimatedCost: number | null;
}

async function probe(
  client: OpenAI,
  label: string,
  model: string,
  body: Record<string, unknown>,
): Promise<ProbeReport> {
  console.log(`\n[smoke-deepseek] ${label}`);
  console.log(`  model: ${model}`);

  // The OpenAI Node SDK doesn't expose a typed `extra_body`, but its
  // request-builder accepts arbitrary additional fields and forwards them
  // verbatim to the wire. We spread `body` onto the typed call site and
  // cast through `unknown` to satisfy TS.
  const response = await client.chat.completions.create({
    model,
    messages: [{ role: 'user', content: 'Reply with exactly the single word: ok' }],
    ...body,
  } as unknown as Parameters<typeof client.chat.completions.create>[0]);

  // Type asserts: response is the non-streaming variant.
  const r = response as OpenAI.Chat.Completions.ChatCompletion;
  const choice = r.choices[0];
  if (!choice) throw new Error(`${label}: no choices`);

  const text = choice.message.content ?? '';
  const promptTokens = r.usage?.prompt_tokens ?? 0;
  const completionTokens = r.usage?.completion_tokens ?? 0;
  // DeepSeek includes hidden reasoning tokens under
  // completion_tokens_details.reasoning_tokens when thinking fires.
  const details = (r.usage as any)?.completion_tokens_details;
  const reasoningTokens = details?.reasoning_tokens ?? null;
  const estimatedCost = estimateCost(model, promptTokens, completionTokens);

  console.log(`  text:           ${JSON.stringify(text)}`);
  console.log(`  finish_reason:  ${choice.finish_reason}`);
  console.log(`  usage:          prompt=${promptTokens} completion=${completionTokens} reasoning=${reasoningTokens ?? 'n/a'}`);
  console.log(`  estimated cost: ${estimatedCost === null ? 'unknown model' : '$' + estimatedCost.toFixed(8)}`);

  return { label, model, text, promptTokens, completionTokens, reasoningTokens, estimatedCost };
}

async function main(): Promise<void> {
  const apiKey = requireDeepseekKey();
  const client = new OpenAI({
    apiKey,
    baseURL: 'https://api.deepseek.com',
  });

  // Probe 1 — V4 Flash, thinking explicitly disabled (cheap fast path).
  const flash = await probe(client, 'Probe 1: deepseek-v4-flash (non-thinking)', 'deepseek-v4-flash', {
    max_tokens: 10,
    thinking: { type: 'disabled' },
  });

  // Cap check before spending more.
  let runningCost = flash.estimatedCost ?? 0;
  if (runningCost > HARD_CAP_USD) {
    throw new Error(`Cost cap hit after probe 1: $${runningCost.toFixed(6)} > $${HARD_CAP_USD}`);
  }

  // Probe 2 — V4 Pro, thinking on, high reasoning effort.
  const pro = await probe(client, 'Probe 2: deepseek-v4-pro (thinking, reasoning_effort=high)', 'deepseek-v4-pro', {
    max_tokens: 4096,
    reasoning_effort: 'high',
    thinking: { type: 'enabled' },
  });

  runningCost += pro.estimatedCost ?? 0;
  console.log(`\n[smoke-deepseek] Total estimated cost: $${runningCost.toFixed(8)} (cap $${HARD_CAP_USD})`);
  if (runningCost > HARD_CAP_USD) {
    throw new Error(`Cost cap exceeded across both probes: $${runningCost.toFixed(6)}`);
  }

  if (!flash.text.toLowerCase().includes('ok')) {
    throw new Error(`Probe 1 unexpected text: ${JSON.stringify(flash.text)}`);
  }
  if (!pro.text.toLowerCase().includes('ok')) {
    throw new Error(`Probe 2 unexpected text: ${JSON.stringify(pro.text)}`);
  }

  console.log('[smoke-deepseek] PASS');
}

main().catch((err: unknown) => {
  console.error('[smoke-deepseek] FAIL:', err instanceof Error ? err.message : err);
  if (err instanceof Error && err.stack) console.error(err.stack);
  process.exit(1);
});
