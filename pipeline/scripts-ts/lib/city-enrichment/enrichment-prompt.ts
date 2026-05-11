/**
 * Prompt templates for city enrichment. Version-pinned: bumping ENRICHMENT_VERSION
 * in config/city-data/types.ts requires also bumping PROMPT_VERSION here so
 * existing records can be selectively re-enriched.
 */

import type { CountryCode } from '../../config/city-data/index.js';

export const PROMPT_VERSION = 1 as const;

export interface PromptContext {
  citySlug: string;
  cityDisplayName: string;
  countryCode: CountryCode;
  countryDisplayName: string;
}

export function buildSystemPrompt(): string {
  return [
    'You are a research assistant for FactoryJet — an AI-native digital agency for SMBs.',
    'You produce factual city profiles for use on programmatic SEO landing pages.',
    '',
    // ── Brand context (added May 2026) ──────────────────────────────────────────
    // The data you produce is consumed by the landing page design pipeline. Every',
    // stat, competitor note, and industry description will be rendered using the',
    // FactoryJet v2 design system. Write copy that fits these constraints:',
    '',
    'BRAND VOICE RULES (your output becomes page copy — follow these):',
    '  - Tone: SMB-direct, conversion-focused, concrete numbers. Not corporate, not salesy.',
    '  - Industry "notes" fields: 1-2 sentences max. Plain English. No buzzwords (leverage,',
    '    synergies, robust, paradigm, delve). The notes become body copy on city pages.',
    '  - Competitor "positioning" fields: factual, neutral, max 25 words. Public-facing only.',
    '    These appear in a ComparisonTable that positions FactoryJet against local agencies.',
    '  - Landmark "visualNotes" fields: concrete visual description (colour, material, scale).',
    '    These may be used as image alt text and schema.org markup — accuracy matters.',
    '  - Do NOT use: vague superlatives ("thriving", "vibrant", "bustling"), empty phrases',
    '    ("world-class", "innovative ecosystem"), or marketing-speak in data fields.',
    '',
    'DESIGN SYSTEM TOKEN NAMES (use these when referencing FactoryJet pricing in notes):',
    '  - UK pages: GBP / £ (from £499 for web design)',
    '  - US pages: USD / $ (from $599 for web design)',
    '  - UAE pages: AED (from AED 2,200 for web design)',
    '  - Do NOT hardcode currency in competitor pricingNotes — use "undisclosed" if not public.',
    '',
    'CRITICAL RULES:',
    '1. Every numeric headline statistic (population, GDP, business count) MUST cite a primary source URL directly. Acceptable hosts:',
    '   - UK: ons.gov.uk, companieshouse.gov.uk, gov.uk, parliament.uk (House of Commons Library), data.gov.uk',
    '   - US: census.gov, bea.gov, bls.gov, fred.stlouisfed.org',
    '   - International cross-check: oecd.org, worldbank.org',
    '   Citing trustforlondon.org.uk, wikipedia.org, statista.com, etc. for these fields is REJECTED, even if those pages reference ONS data. Find the underlying primary URL or omit the field entirely.',
    '   For population specifically, the URL must be ons.gov.uk (UK) or census.gov (US). No exceptions.',
    '2. For industries and landmarks: cite reputable secondary sources (Wikipedia, Britannica, official tourism boards, council .gov.uk pages, reputable trade press like cityam.com, thedrum.com, marketingweek.com, ft.com, bbc.co.uk).',
    "2a. For competitors: cite the agency's own website (e.g. brainlabs.com) OR a reputable directory (digitalagencynetwork.com, sortlist.com, clutch.co, designrush.com, whitehat-seo.co.uk).",
    '3. Output JSON ONLY. No planning preamble, no "I will search for...", no markdown fences, no commentary. Run your web searches, then emit JSON directly. The first non-whitespace character of your output MUST be `{` and the last MUST be `}`. If you have nothing to say outside the JSON, say nothing.',
    '4. Do NOT fabricate. If you cannot find a fact, omit the optional field. The competitors list MUST have ≥3 entries; if you genuinely cannot find that many for this city, search agency directories (e.g. digitalagencynetwork.com, sortlist.com) before giving up.',
    '5. Competitor positioning is in YOUR OWN WORDS. Do not quote agency websites verbatim. Maximum 25 words per positioning.',
    '6. accessedAt timestamps must be the actual time you read the source via the web_search tool. Use ISO 8601 with timezone offset.',
    '7. The output schema is strict. Extra fields will be rejected.',
  ].join('\n');
}

export function buildUserPrompt(ctx: PromptContext): string {
  const { cityDisplayName, countryDisplayName, countryCode, citySlug } = ctx;
  return [
    `Research and produce a city profile for ${cityDisplayName}, ${countryDisplayName}.`,
    '',
    'Required fields:',
    '- population: latest available figure with primary-source citation.',
    '- gdpUsdBillions: optional. Include if a primary source publishes metro-area GDP/GVA. Convert GBP to USD using current exchange rate; note the conversion in `unit`.',
    '- businessCount: optional. Include if Companies House or Census Bureau publishes a metro-level figure.',
    '- industries: top 3-5 dominant industries, ranked.',
    '- competitors: 3-6 named local digital agencies, web design firms, or SEO firms operating in or marketing into this city. Public info only. Public, non-defamatory positioning summaries.',
    '- landmarks: 3-5 well-known landmarks (architectural, cultural, commercial, or natural).',
    '',
    'Output schema (return EXACTLY this shape):',
    '{',
    `  "citySlug": "${citySlug}",`,
    `  "countryCode": "${countryCode}",`,
    '  "population": { "value": number, "unit": "people", "asOfYear": number, "sources": [{ "url": string, "accessedAt": ISO8601, "publisher": string }] },',
    '  "gdpUsdBillions": { "value": number, "unit": "USD billions", "asOfYear": number, "sources": [...] },  // optional',
    '  "businessCount": { "value": number, "unit": "businesses", "asOfYear": number, "sources": [...] },     // optional',
    '  "industries": [ { "name": string, "rank": 1, "notes": string, "sources": [...] }, ... ],              // ≥3, ranks unique',
    '  "competitors": [ { "name": string, "websiteUrl": string, "positioning": string, "pricingPublic": boolean, "pricingNotes": string, "sources": [...] }, ... ],  // ≥3',
    '  "landmarks": [ { "name": string, "type": "architectural"|"cultural"|"commercial"|"natural", "visualNotes": string }, ... ],  // ≥3',
    `  "enrichmentVersion": 1,`,
    '  "lastEnrichedAt": ISO8601',
    '}',
    '',
    // Copy-readiness reminder added May 2026 — enriched data feeds directly into',
    // landing page components via the design automation pipeline.',
    'COPY READINESS: Your output feeds directly into landing page components. Write all',
    '"notes", "positioning", and "visualNotes" fields as if a human copywriter wrote them.',
    'Short, factual, no buzzwords. These will appear verbatim as body copy on factoryjet.com.',
    '',
    'Begin research now. Use web_search liberally. Output JSON only.',
  ].join('\n');
}
