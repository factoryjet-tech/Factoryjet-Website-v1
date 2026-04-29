import Anthropic from '@anthropic-ai/sdk';
import { requireAnthropicKey } from '../../config/env.js';

const MODEL_ID = 'claude-sonnet-4-6';
const MAX_OUTPUT_TOKENS = 4096;
const MAX_RETRIES = 3;
const BACKOFF_BASE_MS = 2000;

export interface EnrichmentCallResult {
  /** Raw JSON string emitted by the model. May fail to parse — caller handles. */
  rawText: string;
  /** Reported usage in tokens. */
  inputTokens: number;
  outputTokens: number;
  /** Estimated USD cost based on Sonnet 4.6 published pricing at time of write. */
  estimatedCostUsd: number;
  /** Wall clock for the call in ms. */
  durationMs: number;
}

/**
 * Sonnet 4.6 pricing (verify before each release): $3 / 1M input, $15 / 1M output.
 * If pricing changes, update these constants and bump PROMPT_VERSION.
 */
const COST_PER_INPUT_TOKEN_USD = 3 / 1_000_000;
const COST_PER_OUTPUT_TOKEN_USD = 15 / 1_000_000;

let cachedClient: Anthropic | null = null;

function getClient(): Anthropic {
  if (cachedClient) return cachedClient;
  const apiKey = requireAnthropicKey();
  cachedClient = new Anthropic({ apiKey });
  return cachedClient;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export interface CallEnrichmentArgs {
  systemPrompt: string;
  userPrompt: string;
  /** Maximum wall clock in ms. Default 90s. */
  timeoutMs?: number;
}

export async function callEnrichment(args: CallEnrichmentArgs): Promise<EnrichmentCallResult> {
  const client = getClient();
  const start = Date.now();
  const timeoutMs = args.timeoutMs ?? 90_000;

  let lastErr: unknown = null;
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await Promise.race([
        client.messages.create({
          model: MODEL_ID,
          max_tokens: MAX_OUTPUT_TOKENS,
          system: args.systemPrompt,
          messages: [{ role: 'user', content: args.userPrompt }],
          tools: [
            {
              // Anthropic server-side web search tool. Type string is version-pinned.
              type: 'web_search_20250305',
              name: 'web_search',
            } as unknown as Anthropic.Tool,
          ],
        }),
        new Promise<never>((_, reject) =>
          setTimeout(
            () => reject(new Error(`enrichment call timed out after ${timeoutMs}ms`)),
            timeoutMs,
          ),
        ),
      ]);

      // Concatenate all text blocks. Tool-use blocks contain web search round-trips
      // and are handled server-side; the final text block is the JSON we want.
      const texts: string[] = [];
      for (const block of response.content) {
        if (block.type === 'text') texts.push(block.text);
      }
      const rawText = texts.join('').trim();

      const inputTokens = response.usage.input_tokens;
      const outputTokens = response.usage.output_tokens;
      const estimatedCostUsd =
        inputTokens * COST_PER_INPUT_TOKEN_USD + outputTokens * COST_PER_OUTPUT_TOKEN_USD;

      return {
        rawText,
        inputTokens,
        outputTokens,
        estimatedCostUsd,
        durationMs: Date.now() - start,
      };
    } catch (err) {
      lastErr = err;
      if (attempt < MAX_RETRIES) {
        const backoff = BACKOFF_BASE_MS * Math.pow(2, attempt - 1);
        await sleep(backoff);
      }
    }
  }

  throw new Error(
    `enrichment call failed after ${MAX_RETRIES} attempts: ${
      lastErr instanceof Error ? lastErr.message : String(lastErr)
    }`,
  );
}
