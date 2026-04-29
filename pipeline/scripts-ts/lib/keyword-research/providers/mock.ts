/**
 * Mock keyword research provider — deterministic fake data.
 *
 * Used for:
 *   - Step 4 (opportunity scoring) development against realistic-shaped
 *     data, before any real provider is wired up.
 *   - Pipeline integration tests that need to be reproducible without
 *     hitting paid APIs.
 *
 * Determinism contract: same (keyword, geoTargets, language) input
 * ALWAYS produces the same output, across processes and machines. This
 * is what makes downstream tests reproducible.
 *
 * Value distributions are calibrated against the order-of-magnitude
 * shape of real UK web-design / SEO keywords as observed in the live
 * FactoryJet UK Search campaign (AW-11127037244):
 *
 *   - monthlySearches: log-uniform between 10 and 50,000
 *   - competition:     0–100, biased toward 30–80 (commercial intent)
 *   - lowBidUsd:       $0.10–$8.00
 *   - highBidUsd:      lowBid × (1.5–4×)
 *
 * Idea expansion returns 5–15 plausible related queries per seed, also
 * deterministic.
 */

import { createHash } from 'node:crypto';
import type {
  KeywordIdea,
  KeywordMetrics,
  KeywordResearchInput,
} from '../types.js';
import type { KeywordResearchProvider } from '../provider.js';

/**
 * Seedable PRNG — mulberry32. Deterministic, fast, good enough for
 * generating mock distributions. Not cryptographic.
 */
function mulberry32(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Hash a string to a 32-bit integer for PRNG seeding. */
function seedFromString(s: string): number {
  const h = createHash('sha256').update(s).digest();
  // Take the first 4 bytes as a uint32.
  return h.readUInt32BE(0);
}

function buildSeed(
  keyword: string,
  geoTargets: string[],
  language: string,
): number {
  const canonical = JSON.stringify({
    k: keyword.trim().toLowerCase(),
    g: [...geoTargets].sort(),
    l: language.toLowerCase(),
  });
  return seedFromString(canonical);
}

/** Log-uniform integer between min and max, inclusive. */
function logUniformInt(rng: () => number, min: number, max: number): number {
  const lnMin = Math.log(min);
  const lnMax = Math.log(max);
  return Math.round(Math.exp(lnMin + (lnMax - lnMin) * rng()));
}

/** Plausible suffix vocabulary for idea expansion. */
const IDEA_SUFFIXES: readonly string[] = [
  'agency',
  'company',
  'services',
  'cost',
  'pricing',
  'near me',
  'reviews',
  'best',
  'cheap',
  'professional',
  'small business',
  'for startups',
  'london',
  'uk',
  'consultant',
];

const IDEA_PREFIXES: readonly string[] = [
  'best',
  'top',
  'affordable',
  'cheap',
  'professional',
  'local',
];

function buildIdeasForSeed(
  seedKeyword: string,
  rng: () => number,
): string[] {
  const count = 5 + Math.floor(rng() * 11); // 5–15
  const ideas = new Set<string>();

  // Mix of suffix-appended and prefix-prepended variants.
  while (ideas.size < count) {
    const usePrefix = rng() < 0.4;
    if (usePrefix) {
      const prefix = IDEA_PREFIXES[Math.floor(rng() * IDEA_PREFIXES.length)] ?? 'best';
      ideas.add(`${prefix} ${seedKeyword}`.trim());
    } else {
      const suffix = IDEA_SUFFIXES[Math.floor(rng() * IDEA_SUFFIXES.length)] ?? 'services';
      ideas.add(`${seedKeyword} ${suffix}`.trim());
    }
    // Safety: 50 attempts max (vocabulary collisions).
    if (ideas.size === 0) break;
  }
  return Array.from(ideas);
}

export const mockProvider: KeywordResearchProvider = {
  name: 'mock',

  estimateCostUsd(): number {
    return 0;
  },

  async getMetrics(input: KeywordResearchInput): Promise<KeywordMetrics[]> {
    const fetchedAt = new Date().toISOString();
    return input.keywords.map((keyword): KeywordMetrics => {
      const seed = buildSeed(keyword, input.geoTargets, input.language);
      const rng = mulberry32(seed);

      const monthlySearches = logUniformInt(rng, 10, 50_000);
      // Competition biased toward commercial-intent middle-high.
      const competition = Math.round(20 + rng() * 70);
      const lowBidUsd = Number((0.1 + rng() * 7.9).toFixed(2));
      const multiplier = 1.5 + rng() * 2.5;
      const highBidUsd = Number((lowBidUsd * multiplier).toFixed(2));

      return {
        keyword,
        monthlySearches,
        competition,
        lowBidUsd,
        highBidUsd,
        geoTargets: input.geoTargets,
        language: input.language,
        provider: 'mock',
        fetchedAt,
        fromCache: false,
      };
    });
  },

  async expandIdeas(input: KeywordResearchInput): Promise<KeywordIdea[]> {
    const fetchedAt = new Date().toISOString();
    const allIdeas: KeywordIdea[] = [];

    for (const seed of input.keywords) {
      const seedNum = buildSeed(seed, input.geoTargets, input.language);
      const rng = mulberry32(seedNum);
      const variants = buildIdeasForSeed(seed, rng);

      for (const variant of variants) {
        allIdeas.push({
          keyword: variant,
          provider: 'mock',
          fetchedAt,
          relevance: Number((0.4 + rng() * 0.6).toFixed(3)),
        });
      }
    }

    return allIdeas;
  },
};
