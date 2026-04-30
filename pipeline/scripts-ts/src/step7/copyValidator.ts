/**
 * Copy validator. Runs after generatePageCopy returns and before the
 * runner writes output to disk. Errors are blocking (page is rejected);
 * warnings are non-blocking (logged but the file still writes).
 *
 * The validator also computes wordCountEstimate (sum of body.length / 5)
 * and uniquenessScore (uniquenessFlags.length / 10) and returns them
 * for the runner to log in the summary.
 */

import type { PageCopyOutput } from './types.js';

export interface ValidationResult {
  passed: boolean;
  errors: string[];
  warnings: string[];
  wordCountEstimate: number;
  uniquenessScore: number;
}

const BANNED_WORDS: ReadonlyArray<string> = [
  'leverage',
  'robust',
  'synergies',
  'paradigm',
  'game-changing',
  'revolutionary',
  'unprecedented',
  'delve',
];

function cityNameFromSlug(slug: string): string {
  return slug
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(' ');
}

function bodyOf(value: unknown): string {
  if (!value || typeof value !== 'object') return '';
  const v = value as { body?: unknown };
  return typeof v.body === 'string' ? v.body : '';
}

/**
 * Comprehensive word-count estimate for the entire page.
 *
 * Counts narrative bodies, FAQ Q&A, industry sector descriptions, process
 * step descriptions, pricing tier descriptions and includes, and stat block
 * labels/values. The earlier "body fields only" heuristic underestimated by
 * roughly half — FAQ answers and sector descriptions add 1,000+ words on a
 * typical page.
 */
function estimateWordCount(output: PageCopyOutput): number {
  const chars: number[] = [];
  const sections = output.sections;

  // Narrative body fields.
  if (sections.hero.body) chars.push(sections.hero.body.length);
  if (sections.cityContext.body) chars.push(sections.cityContext.body.length);
  if (sections.serviceExplanation.body) chars.push(sections.serviceExplanation.body.length);
  if (sections.whyFactoryJet.body) chars.push(sections.whyFactoryJet.body.length);
  if (sections.pricing.body) chars.push(sections.pricing.body.length);
  if (sections.finalCta.body) chars.push(sections.finalCta.body.length);

  // Industry sector descriptions (40–60 words each).
  for (const sector of sections.industries.sectors) {
    chars.push(sector.description.length);
    if (sector.example) chars.push(sector.example.length);
  }

  // FAQ Q + A.
  for (const item of sections.faq.items) {
    chars.push(item.question.length);
    chars.push(item.answer.length);
  }

  // Process step descriptions.
  for (const step of sections.process.steps) {
    chars.push(step.description.length);
  }

  // Pricing tier descriptions and includes.
  for (const tier of sections.pricing.tiers) {
    chars.push(tier.description.length);
    for (const inc of tier.includes) chars.push(inc.length);
  }

  // Stat block labels + values (sources excluded — they're URLs, not content).
  for (const stat of sections.cityContext.stats) {
    chars.push(stat.label.length + stat.value.length);
  }

  const totalChars = chars.reduce((a, b) => a + b, 0);
  return Math.round(totalChars / 5);
}

export function validatePageCopy(output: PageCopyOutput): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // ---------- Body presence + banned-word scan over body text ----------
  const bodies: Array<{ section: string; text: string }> = [
    { section: 'hero', text: bodyOf(output.sections.hero) },
    { section: 'cityContext', text: bodyOf(output.sections.cityContext) },
    { section: 'serviceExplanation', text: bodyOf(output.sections.serviceExplanation) },
    { section: 'whyFactoryJet', text: bodyOf(output.sections.whyFactoryJet) },
    { section: 'industries', text: bodyOf(output.sections.industries) },
    { section: 'pricing', text: bodyOf(output.sections.pricing) },
    { section: 'finalCta', text: bodyOf(output.sections.finalCta) },
  ];

  for (const { section, text } of bodies) {
    if (!text || text.trim().length === 0) {
      errors.push(`Section "${section}" has empty or missing body field`);
    }
  }

  const wordCountEstimate = estimateWordCount(output);

  // ---------- Banned word scan ----------
  const allBodyText = bodies.map((b) => b.text).join('\n').toLowerCase();
  for (const banned of BANNED_WORDS) {
    // Word-boundary match so "delve" doesn't trigger on "delivered".
    const re = new RegExp(`\\b${banned.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'i');
    if (re.test(allBodyText)) {
      errors.push(`Banned word "${banned}" found in body copy`);
    }
  }

  // ---------- Meta checks ----------
  if (output.meta.title.length > 60) {
    errors.push(`meta.title length ${output.meta.title.length} > 60 chars`);
  }
  if (output.meta.description.length > 160) {
    errors.push(`meta.description length ${output.meta.description.length} > 160 chars`);
  }

  const cityName = cityNameFromSlug(output.input.city.citySlug);
  if (!output.meta.title.toLowerCase().includes(cityName.toLowerCase())) {
    warnings.push(`meta.title does not include city name "${cityName}"`);
  }

  // ---------- Section content counts ----------
  if (output.sections.faq.items.length < 8) {
    errors.push(
      `faq.items.length ${output.sections.faq.items.length} < 8 minimum`,
    );
  } else if (output.sections.faq.items.length < 10) {
    warnings.push(
      `faq.items.length ${output.sections.faq.items.length} < 10 (target)`,
    );
  }

  if (output.sections.cityContext.stats.length < 3) {
    errors.push(
      `cityContext.stats.length ${output.sections.cityContext.stats.length} < 3 minimum`,
    );
  }

  const statSources = output.sections.cityContext.stats.map((s) => s.source);
  const uniqueStatSources = new Set(statSources);
  if (uniqueStatSources.size < statSources.length) {
    errors.push(
      `cityContext stats contain duplicate source URLs: ${statSources
        .filter((s, i) => statSources.indexOf(s) !== i)
        .join(', ')}`,
    );
  }
  if (output.sections.whyFactoryJet.competitors.length < 2) {
    errors.push(
      `whyFactoryJet.competitors.length ${output.sections.whyFactoryJet.competitors.length} < 2 minimum`,
    );
  }
  if (output.sections.industries.sectors.length < 4) {
    errors.push(
      `industries.sectors.length ${output.sections.industries.sectors.length} < 4 minimum`,
    );
  }

  // ---------- Uniqueness flags ----------
  const uniquenessFlagCount = output.uniquenessFlags.length;
  if (uniquenessFlagCount < 6) {
    errors.push(
      `uniquenessFlags.length ${uniquenessFlagCount} < 6 minimum (insufficient city specificity)`,
    );
  } else if (uniquenessFlagCount < 8) {
    warnings.push(
      `uniquenessFlags.length ${uniquenessFlagCount} < 8 (target)`,
    );
  }
  const uniquenessScore = uniquenessFlagCount / 10;

  // ---------- Word count target ----------
  if (wordCountEstimate < 1800) {
    warnings.push(
      `wordCountEstimate ${wordCountEstimate} < 1800 (target for ranking depth)`,
    );
  }

  return {
    passed: errors.length === 0,
    errors,
    warnings,
    wordCountEstimate,
    uniquenessScore,
  };
}
