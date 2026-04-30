/**
 * Per-page user prompt builder.
 *
 * Embeds the full city + service data inline and gives explicit per-section
 * word-count and citation instructions. The model receives this once and
 * must respond via the generate_page_copy tool defined in copyGenerator.ts.
 */

import type { PageGenerationInput } from '../types.js';

const COUNTRY_DISPLAY: Record<PageGenerationInput['country'], { name: string; region: string }> = {
  gb: { name: 'United Kingdom', region: 'United Kingdom' },
  us: { name: 'United States', region: 'United States' },
  au: { name: 'Australia', region: 'Australia' },
  ca: { name: 'Canada', region: 'Canada' },
};

function cityDisplayName(slug: string): string {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function replaceTemplate(s: string, vars: Record<string, string>): string {
  return Object.entries(vars).reduce(
    (acc, [k, v]) => acc.replaceAll(`{${k}}`, v),
    s,
  );
}

export function buildSectionsPrompt(input: PageGenerationInput): string {
  const { city, service, country, targetKeyword, competitorPricingBenchmark } = input;
  const cityName = cityDisplayName(city.citySlug);
  const { name: countryName, region } = COUNTRY_DISPLAY[country];

  // Pre-resolve evergreen FAQs so the model only handles real strings.
  const resolvedEvergreenFAQs = service.evergreenFAQs.map((f) => ({
    q: replaceTemplate(f.q, { city: cityName, region }),
    a: replaceTemplate(f.a, { city: cityName, region }),
  }));

  // Compose competitor block. Always include all of them; the model picks
  // 2–3 to feature, but seeing the full list helps it reason about
  // positioning differentiation.
  const competitorsBlock = city.competitors
    .map((c) => {
      const pricingHint = c.pricingPublic
        ? `pricingPublic=true; ${c.pricingNotes ?? '(public price disclosed but not noted)'}`
        : `pricingPublic=false; ${c.pricingNotes ?? '(no public pricing)'}`;
      return [
        `- ${c.name} — ${c.websiteUrl}`,
        `  Positioning: ${c.positioning}`,
        `  Pricing: ${pricingHint}`,
      ].join('\n');
    })
    .join('\n');

  const industriesBlock = city.industries
    .map((ind) => {
      const noteLine = ind.notes ? `\n  Notes: ${ind.notes}` : '';
      return `- (rank ${ind.rank}) ${ind.name}${noteLine}`;
    })
    .join('\n');

  const landmarksBlock = city.landmarks
    .map((l) => {
      const visual = l.visualNotes ? ` — ${l.visualNotes}` : '';
      return `- ${l.name} (${l.type})${visual}`;
    })
    .join('\n');

  // Collect all distinct source URLs available in this city's enrichment data.
  // Used by the cityContext stats HARD RULE block below to constrain the model
  // to a closed list of allowed source URLs (each stat must use a different one).
  const availableSources: Array<{ url: string; describes: string }> = [];

  if (city.population?.sources) {
    for (const s of city.population.sources) {
      availableSources.push({
        url: s.url,
        describes: `Population: ${city.population.value}`,
      });
    }
  }
  if (city.gdpUsdBillions?.sources) {
    for (const s of city.gdpUsdBillions.sources) {
      availableSources.push({
        url: s.url,
        describes: `GDP: $${city.gdpUsdBillions.value}bn USD`,
      });
    }
  }
  for (const industry of city.industries ?? []) {
    for (const s of industry.sources ?? []) {
      availableSources.push({
        url: s.url,
        describes: `${industry.name} industry data`,
      });
    }
  }

  const seenUrls = new Set<string>();
  const uniqueSources = availableSources.filter((s) => {
    if (seenUrls.has(s.url)) return false;
    seenUrls.add(s.url);
    return true;
  });

  const uniqueSourcesBlock = uniqueSources
    .map((s, i) => `  [${i + 1}] ${s.url}  (describes: ${s.describes})`)
    .join('\n');

  const populationLine = `${city.population.value.toLocaleString()} ${city.population.unit ?? 'people'} (as of ${city.population.asOfYear})`;
  const populationSourceUrl = city.population.sources[0]?.url ?? '';
  const gdpLine = city.gdpUsdBillions
    ? `${city.gdpUsdBillions.value} ${city.gdpUsdBillions.unit ?? 'USD billions'} (as of ${city.gdpUsdBillions.asOfYear})`
    : 'not provided';
  const gdpSourceUrl = city.gdpUsdBillions?.sources[0]?.url ?? '';
  const businessCountLine = city.businessCount
    ? `${city.businessCount.value.toLocaleString()} businesses (as of ${city.businessCount.asOfYear})`
    : 'not provided in this record';

  const processBlock = service.process
    .map(
      (p) =>
        `${p.step}. ${p.title} (${p.duration}) — ${p.description}`,
    )
    .join('\n');

  const pricingBlock = service.pricingUK
    .map((t) =>
      [
        `- ${t.name}${t.highlight ? ' [highlight]' : ''}: ${t.priceGBP}`,
        `  ${t.description}`,
        `  Includes: ${t.includes.join('; ')}`,
        `  Best for: ${t.bestFor}`,
      ].join('\n'),
    )
    .join('\n');

  const evergreenFaqBlock = resolvedEvergreenFAQs
    .map((f, i) => `${i + 1}. Q: ${f.q}\n   A: ${f.a}`)
    .join('\n\n');

  return [
    `Produce landing-page copy for FactoryJet's ${service.name} service targeting ${cityName}, ${countryName}.`,
    `Target keyword: "${targetKeyword}".`,
    '',
    '═══════════════════════════════════════════════════════════',
    'CITY DATA (use only what is here — do not invent figures, employers, or competitors)',
    '═══════════════════════════════════════════════════════════',
    `City: ${cityName} (slug: ${city.citySlug}, country: ${country.toUpperCase()}, region: ${region})`,
    `Population: ${populationLine}`,
    `Population source URL: ${populationSourceUrl}`,
    `GDP: ${gdpLine}`,
    `GDP source URL: ${gdpSourceUrl}`,
    `Business count: ${businessCountLine}`,
    '',
    'INDUSTRIES (ranked):',
    industriesBlock,
    '',
    'COMPETITORS (use these names verbatim; choose 2–3 for the WhyFactoryJet section):',
    competitorsBlock,
    '',
    'LANDMARKS:',
    landmarksBlock,
    '',
    `Competitor pricing benchmark for the "50–60% below local agency rates" framing: £${competitorPricingBenchmark.toLocaleString()} GBP`,
    '',
    '═══════════════════════════════════════════════════════════',
    'SERVICE DATA (process and pricing are EMBEDDED VERBATIM — do not rewrite)',
    '═══════════════════════════════════════════════════════════',
    `Service: ${service.name} (slug: ${service.slug})`,
    `H1 template: ${service.h1Template}`,
    `Meta title template: ${service.metaTitleTemplate}`,
    '',
    'PROCESS (5 steps — embed verbatim into sections.process.steps):',
    processBlock,
    '',
    'PRICING (3 tiers — embed verbatim into sections.pricing.tiers):',
    pricingBlock,
    '',
    'EVERGREEN FAQ TEMPLATES (placeholders already resolved — pick the 4 most relevant for this city):',
    evergreenFaqBlock,
    '',
    '═══════════════════════════════════════════════════════════',
    'PER-SECTION INSTRUCTIONS',
    '═══════════════════════════════════════════════════════════',
    '',
    'sections.hero',
    `  - h1 / headline: replace {City} in "${service.h1Template}" with "${cityName}".`,
    '  - body: 60–80 words. Confident opening that signals outcome over feature.',
    '  - subheadline: must name the city AND a specific local industry from the list above.',
    '  - ctaText: short verb-led, 2–4 words.',
    '',
    'sections.cityContext',
    '  - body: 120–160 words. Frame why a strong web presence matters in this specific market.',
    '  - stats: 2 or 3 StatBlock entries. Each must have label, value, source.',
    '',
    '  CITY CONTEXT STATS — HARD RULE:',
    '  You must pick at most 3 stats from the city data provided.',
    '  Each stat MUST use a source URL from the following list — no other URLs',
    '  are permitted. Each stat must use a DIFFERENT URL from this list.',
    '',
    '  Available source URLs (use ONLY these):',
    uniqueSourcesBlock,
    '',
    '  Assignment rule: stat[0].source ≠ stat[1].source ≠ stat[2].source.',
    '  If you cannot find 3 stats with 3 distinct URLs from the list above,',
    '  use only 2 stats. Do not invent URLs. Do not reuse URLs.',
    '',
    'sections.serviceExplanation',
    '  - body: 200–250 words. Must name at least 2 industries from the city industry list and explain how web design serves them.',
    '  - Reference named employers ONLY if they appear in the industry notes above (e.g. BBC if mentioned). Do not invent employers.',
    '',
    'sections.whyFactoryJet',
    '  - body: 150–200 words.',
    '  - competitors: exactly 2 or 3 CompetitorComparison entries chosen from the competitor list above.',
    '    For each: theirPrice (quote pricingNotes verbatim or summarise; do not invent), ourPrice (cite the Growth tier "£2,500–£5,000"), ourAdvantage (specific — speed, price gap, tech stack — not generic).',
    '',
    'sections.process',
    `  - headline: "How We Build Your ${cityName} Website"`,
    '  - steps: copy the 5 process steps verbatim from the SERVICE DATA section above.',
    '  - No body field on this section.',
    '',
    'sections.industries',
    '  - sectors: 4–6 IndustrySector entries drawn from the ranked industries list above.',
    '  - Each description: 40–60 words explaining how web design specifically helps that industry in this city.',
    '  - Use named employers from industry notes as examples where the notes mention them.',
    '',
    'sections.pricing',
    `  - body: 80–100 words. Reference the £${competitorPricingBenchmark.toLocaleString()} benchmark to justify the "50–60% below local agency rates" framing.`,
    '  - tiers: copy all 3 pricing tiers verbatim from the SERVICE DATA section above. Set highlight=true on Growth.',
    '',
    'sections.faq',
    `  - items: exactly 10 FAQItem entries.`,
    '  - First 4: pick the 4 evergreen FAQs most relevant to this city from the templates above (placeholders already resolved).',
    '  - Remaining 6: generate genuinely city-specific questions a local business owner would ask. Reference local industries, named competitors, the city economy, or landmarks. None should appear unchanged on any other city page.',
    '',
    'sections.finalCta',
    `  - body: 40–60 words. "${cityName}" must appear. Single clear next action.`,
    '  - ctaText: short, verb-led.',
    '',
    'meta',
    `  - title: must contain "${cityName}", "web design", and "FactoryJet". Under 60 chars.`,
    `  - description: must contain "${cityName}" and the primary value prop. MUST be ≤155 chars. Count the characters before emitting. No exceptions.`,
    `  - h1: replace {City} in "${service.h1Template}" with "${cityName}".`,
    `  - slug: "${city.citySlug}"`,
    `  - canonicalUrl: "${country === 'gb' ? '/uk' : `/${country}`}/${city.citySlug}/${service.slug}"`,
    '',
    'uniquenessFlags',
    '  - List every city-specific element used in the copy: each stat value, each industry name used by name, each competitor name used, each landmark referenced, each employer named.',
    '  - Minimum 8 entries. Validator blocks below 6.',
    '',
    'BANNED WORDS — HARD RULE: The following words must not appear anywhere in',
    'your output, including inside JSON string values. Search your output before',
    'returning it and replace any occurrence:',
    '  leverage → use "use" or "apply"',
    '  robust → use "reliable" or "solid"',
    '  synergies → remove or rephrase',
    '  paradigm → rephrase',
    '  game-changing → rephrase',
    '  revolutionary → rephrase',
    '  unprecedented → rephrase',
    '  delve → use "explore" or "look at"',
    '  straightforward → use "simple" or "clear"',
    '  utilise → use "use"',
    '',
    'If you find any of these words in a draft value, rewrite that value before',
    'including it in the JSON. This is not optional.',
    '',
    'Call generate_page_copy with the complete PageCopyOutput now.',
  ].join('\n');
}
