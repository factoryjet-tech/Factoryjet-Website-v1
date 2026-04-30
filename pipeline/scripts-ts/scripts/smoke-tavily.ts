/**
 * Smoke test: Tavily web-search SDK end-to-end.
 *
 * Loads TAVILY_API_KEY via requireTavilyKey() (which sources
 * ~/.factoryjet/tavily.env per the standard env loader), runs a single
 * search query, and prints the top result. Exits 0 on success, 1 on any
 * error.
 *
 * Phase A1.1 — proves the SDK + key wiring work before any production
 * code path consumes Tavily.
 *
 * Run: pnpm exec tsx scripts/smoke-tavily.ts
 */
import { tavily } from '@tavily/core';
import { requireTavilyKey } from '../config/env.js';

async function main(): Promise<void> {
  const apiKey = requireTavilyKey();
  const client = tavily({ apiKey });

  const query = 'FactoryJet AI digital agency';
  console.log(`[smoke-tavily] Query: ${query}`);

  const response = await client.search(query);

  const top = response.results?.[0];
  if (!top) {
    throw new Error('[smoke-tavily] No results returned');
  }

  const snippet = (top.content || '').replace(/\s+/g, ' ').trim();
  const twoLines = snippet.length > 240 ? snippet.slice(0, 240) + '…' : snippet;

  console.log('[smoke-tavily] Top result:');
  console.log(`  title: ${top.title}`);
  console.log(`  url:   ${top.url}`);
  console.log(`  score: ${top.score}`);
  console.log(`  snippet: ${twoLines}`);
  console.log(
    `[smoke-tavily] Total results: ${response.results.length}, ` +
      `responseTime: ${response.responseTime}s, ` +
      `credits: ${response.usage?.credits ?? 'n/a'}`,
  );
  console.log('[smoke-tavily] PASS');
}

main().catch((err: unknown) => {
  console.error('[smoke-tavily] FAIL:', err instanceof Error ? err.message : err);
  if (err instanceof Error && err.stack) console.error(err.stack);
  process.exit(1);
});
