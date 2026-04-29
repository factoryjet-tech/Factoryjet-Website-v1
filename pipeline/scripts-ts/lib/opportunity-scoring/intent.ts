/**
 * Rule-based commercial-intent classifier.
 *
 * Returns a score in [0, 1] reflecting how likely the keyword is to
 * represent a buyer-mode search vs. a research-mode search.
 *
 * Approach:
 *   - Start at a neutral baseline (0.5).
 *   - Add for commercial signals: explicit purchase intent ("hire", "near me"),
 *     service modifiers ("agency", "services", "company"), pricing terms
 *     ("cost", "pricing"), city tokens (geographic specificity = local intent).
 *   - Subtract for informational signals: "what is", "how to", "guide",
 *     "tutorial", "examples", "definition".
 *   - Clamp to [0, 1].
 *
 * This is deliberately a heuristic. Misclassifications will be obvious in
 * ranked output and we iterate on the rules in code review. We do NOT call
 * an LLM per keyword — too expensive at our volumes and not actually more
 * accurate than good rules at the keyword-shape level.
 */

const COMMERCIAL_STRONG: readonly string[] = [
  'hire', 'near me', 'buy', 'cost', 'pricing', 'quote', 'price',
];

const COMMERCIAL_MEDIUM: readonly string[] = [
  'agency', 'agencies', 'services', 'company', 'companies', 'firm',
  'consultant', 'consultants', 'professional', 'expert', 'experts',
  'best', 'top', 'review', 'reviews',
];

const INFORMATIONAL: readonly string[] = [
  'what is', 'what are', 'how to', 'how do', 'how does',
  'guide', 'tutorial', 'examples', 'definition', 'meaning',
  'why is', 'why are', 'history of', 'tips',
];

const COMMERCIAL_STRONG_BONUS = 0.20;
const COMMERCIAL_MEDIUM_BONUS = 0.10;
const INFORMATIONAL_PENALTY = 0.30;

/**
 * Classify a keyword's commercial intent. Returns 0–1 (1 = highest
 * commercial intent).
 *
 * @param keyword — raw keyword string
 * @param citySlugs — known city tokens to detect (slug or name forms);
 *   presence of a city token adds geographic-specificity bonus
 */
export function classifyIntent(
  keyword: string,
  citySlugs: readonly string[] = [],
): number {
  const k = keyword.toLowerCase().trim();
  if (k.length === 0) return 0.5;

  let score = 0.5;

  for (const phrase of COMMERCIAL_STRONG) {
    if (k.includes(phrase)) score += COMMERCIAL_STRONG_BONUS;
  }

  for (const phrase of COMMERCIAL_MEDIUM) {
    // Word-boundary match to avoid false positives ("agency" in "emergency").
    const re = new RegExp(`\\b${phrase}\\b`);
    if (re.test(k)) score += COMMERCIAL_MEDIUM_BONUS;
  }

  for (const phrase of INFORMATIONAL) {
    if (k.includes(phrase)) score -= INFORMATIONAL_PENALTY;
  }

  // Geographic specificity: if any city token is present, +0.1.
  const hasCityToken = citySlugs.some((c) => {
    const cityForm = c.replace(/-/g, ' ');
    return k.includes(cityForm);
  });
  if (hasCityToken) score += 0.1;

  // Clamp to [0, 1].
  return Math.max(0, Math.min(1, score));
}
