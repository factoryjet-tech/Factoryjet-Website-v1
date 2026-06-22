/**
 * Step 7 copy generator.
 *
 * Calls Claude Sonnet 4 with a forced tool_use structured output. The
 * synthetic tool generate_page_copy has an input_schema matching
 * PageCopyOutput; we parse the model's tool input as the typed result.
 *
 * No web_search tool. All required data is embedded in the user prompt
 * by sections.ts. Web search at copy generation time would be unbounded
 * and unnecessary — city facts live in the enriched JSON, service facts
 * live in the seed.
 *
 * Pattern mirrors lib/city-enrichment/anthropic-client.ts: same SDK
 * import path, same env var (ANTHROPIC_API_KEY via requireAnthropicKey).
 * Cost logged to console for every call.
 */

import Anthropic from '@anthropic-ai/sdk';
import { requireAnthropicKey } from '../../config/env.js';
import { SYSTEM_PROMPT } from './prompts/system.js';
import { buildSectionsPrompt } from './prompts/sections.js';
import type { PageCopyOutput, PageGenerationInput } from './types.js';

const MODEL_ID = 'claude-sonnet-4-6';
const MAX_OUTPUT_TOKENS = 8000;
const TEMPERATURE = 0;

const COST_PER_INPUT_TOKEN_USD = 3 / 1_000_000;
const COST_PER_OUTPUT_TOKEN_USD = 15 / 1_000_000;

let cachedClient: Anthropic | null = null;
function getClient(): Anthropic {
  if (cachedClient) return cachedClient;
  const apiKey = requireAnthropicKey();
  cachedClient = new Anthropic({ apiKey });
  return cachedClient;
}

/* ------------------------------------------------------------------ */
/*   JSON Schema for the synthetic generate_page_copy tool             */
/* ------------------------------------------------------------------ */

const sectionCopySchema = {
  type: 'object',
  properties: {
    sectionId: { type: 'string' },
    headline: { type: 'string' },
    subheadline: { type: 'string' },
    body: { type: 'string' },
    dataPoints: { type: 'array', items: { type: 'string' } },
    ctaText: { type: 'string' },
    ctaUrl: { type: 'string' },
  },
  required: ['sectionId', 'body'],
};

const statBlockSchema = {
  type: 'object',
  properties: {
    label: { type: 'string' },
    value: { type: 'string' },
    source: { type: 'string' },
  },
  required: ['label', 'value', 'source'],
};

const competitorComparisonSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    theirPrice: { type: 'string' },
    ourPrice: { type: 'string' },
    ourAdvantage: { type: 'string' },
  },
  required: ['name', 'theirPrice', 'ourPrice', 'ourAdvantage'],
};

const industrySectorSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    description: { type: 'string' },
    example: { type: 'string' },
  },
  required: ['name', 'description'],
};

const pricingDisplaySchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    priceLabel: { type: 'string' },
    description: { type: 'string' },
    includes: { type: 'array', items: { type: 'string' } },
    bestFor: { type: 'string' },
    highlight: { type: 'boolean' },
  },
  required: ['name', 'priceLabel', 'description', 'includes', 'bestFor'],
};

const processStepSchema = {
  type: 'object',
  properties: {
    step: { type: 'integer' },
    title: { type: 'string' },
    description: { type: 'string' },
    duration: { type: 'string' },
  },
  required: ['step', 'title', 'description', 'duration'],
};

const faqItemSchema = {
  type: 'object',
  properties: {
    question: { type: 'string' },
    answer: { type: 'string' },
  },
  required: ['question', 'answer'],
};

/**
 * Top-level schema. The full PageCopyOutput.input is intentionally
 * NOT in the schema — we get it back from the caller, not the model.
 * Same for wordCountEstimate (computed by validator). The model is
 * responsible for sections, meta, generatedAt, modelUsed, and
 * uniquenessFlags only.
 */
const generatePageCopyToolInputSchema = {
  type: 'object',
  properties: {
    generatedAt: { type: 'string' },
    modelUsed: { type: 'string' },
    sections: {
      type: 'object',
      properties: {
        hero: sectionCopySchema,
        cityContext: {
          type: 'object',
          properties: {
            ...sectionCopySchema.properties,
            stats: { type: 'array', items: statBlockSchema, minItems: 3 },
          },
          required: [...sectionCopySchema.required, 'stats'],
        },
        serviceExplanation: sectionCopySchema,
        whyFactoryJet: {
          type: 'object',
          properties: {
            ...sectionCopySchema.properties,
            competitors: { type: 'array', items: competitorComparisonSchema, minItems: 2 },
          },
          required: [...sectionCopySchema.required, 'competitors'],
        },
        process: {
          type: 'object',
          properties: {
            sectionId: { type: 'string', enum: ['process'] },
            headline: { type: 'string' },
            steps: { type: 'array', items: processStepSchema, minItems: 5, maxItems: 5 },
          },
          required: ['sectionId', 'headline', 'steps'],
        },
        industries: {
          type: 'object',
          properties: {
            ...sectionCopySchema.properties,
            sectors: { type: 'array', items: industrySectorSchema, minItems: 4 },
          },
          required: [...sectionCopySchema.required, 'sectors'],
        },
        pricing: {
          type: 'object',
          properties: {
            ...sectionCopySchema.properties,
            tiers: { type: 'array', items: pricingDisplaySchema, minItems: 3, maxItems: 3 },
          },
          required: [...sectionCopySchema.required, 'tiers'],
        },
        faq: {
          type: 'object',
          properties: {
            items: { type: 'array', items: faqItemSchema, minItems: 8 },
          },
          required: ['items'],
        },
        finalCta: sectionCopySchema,
      },
      required: [
        'hero',
        'cityContext',
        'serviceExplanation',
        'whyFactoryJet',
        'process',
        'industries',
        'pricing',
        'faq',
        'finalCta',
      ],
    },
    meta: {
      type: 'object',
      properties: {
        title: { type: 'string' },
        description: { type: 'string' },
        slug: { type: 'string' },
        canonicalUrl: { type: 'string' },
        h1: { type: 'string' },
      },
      required: ['title', 'description', 'slug', 'canonicalUrl', 'h1'],
    },
    uniquenessFlags: { type: 'array', items: { type: 'string' }, minItems: 6 },
  },
  required: ['generatedAt', 'modelUsed', 'sections', 'meta', 'uniquenessFlags'],
};

/* ------------------------------------------------------------------ */
/*   Public entry point                                                */
/* ------------------------------------------------------------------ */

interface ToolInputPartial {
  generatedAt: string;
  modelUsed: string;
  sections: PageCopyOutput['sections'];
  meta: PageCopyOutput['meta'];
  uniquenessFlags: string[];
}

export async function generatePageCopy(input: PageGenerationInput): Promise<PageCopyOutput> {
  const client = getClient();
  const userPrompt = buildSectionsPrompt(input);

  const tool: Anthropic.Tool = {
    name: 'generate_page_copy',
    description:
      'Submit the complete landing-page copy as structured JSON. Call exactly once with all sections populated.',
    input_schema: generatePageCopyToolInputSchema as Anthropic.Tool['input_schema'],
  };

  let response: Anthropic.Messages.Message;
  try {
    response = await client.messages.create({
      model: MODEL_ID,
      max_tokens: MAX_OUTPUT_TOKENS,
      temperature: TEMPERATURE,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: userPrompt }],
      tools: [tool],
      tool_choice: { type: 'tool', name: 'generate_page_copy' },
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    throw new Error(
      `City copy generation failed for ${input.city.citySlug}/${input.service.slug}: ${msg}`,
    );
  }

  // Cost logging.
  const inputTokens = response.usage.input_tokens;
  const outputTokens = response.usage.output_tokens;
  const estimatedCostUsd =
    inputTokens * COST_PER_INPUT_TOKEN_USD + outputTokens * COST_PER_OUTPUT_TOKEN_USD;
  // eslint-disable-next-line no-console
  console.log(
    `[step7] Input tokens: ${inputTokens}  Output tokens: ${outputTokens}  Estimated cost: $${estimatedCostUsd.toFixed(4)}`,
  );

  // Find the tool_use block.
  let toolBlock: Anthropic.Messages.ToolUseBlock | null = null;
  for (const block of response.content) {
    if (block.type === 'tool_use' && block.name === 'generate_page_copy') {
      toolBlock = block;
      break;
    }
  }

  if (!toolBlock) {
    const dump = JSON.stringify(response).slice(0, 500);
    throw new Error(`No tool_use block in response for ${input.city.citySlug}: ${dump}`);
  }

  if (!toolBlock.input || typeof toolBlock.input !== 'object') {
    throw new Error(
      `tool_use block has no usable input for ${input.city.citySlug}: ${JSON.stringify(response).slice(0, 500)}`,
    );
  }

  // Round-trip through JSON to ensure clean serialisation (catches any
  // weird non-serialisable references the SDK might attach).
  let parsed: ToolInputPartial;
  try {
    parsed = JSON.parse(JSON.stringify(toolBlock.input)) as ToolInputPartial;
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    throw new Error(
      `Failed to round-trip tool input for ${input.city.citySlug}: ${msg}\nRaw input first 500 chars: ${JSON.stringify(toolBlock.input).slice(0, 500)}`,
    );
  }

  // Compose the full PageCopyOutput. wordCountEstimate is filled in by
  // the validator; we set 0 here as a placeholder.
  const output: PageCopyOutput = {
    input,
    generatedAt: parsed.generatedAt || new Date().toISOString(),
    modelUsed: parsed.modelUsed || MODEL_ID,
    sections: parsed.sections,
    meta: parsed.meta,
    wordCountEstimate: 0,
    uniquenessFlags: parsed.uniquenessFlags,
  };

  return output;
}
