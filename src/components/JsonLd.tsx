import type { ReactElement } from 'react';

/**
 * JsonLd — render a JSON-LD structured-data block as a NATIVE, server-rendered
 * `<script type="application/ld+json">` so it appears in the initial HTML and is
 * visible to AI crawlers (GPTBot, PerplexityBot, ClaudeBot) that do NOT execute
 * JavaScript.
 *
 * ⚠️  Do NOT emit JSON-LD through next/script's `<Script>` component. `<Script>`
 * injects inline scripts CLIENT-SIDE (into the React hydration payload), so the
 * structured data is absent from the server-rendered HTML that non-JS crawlers
 * read — which silently kills your entity/schema visibility in AI search.
 * The build guardrail in `scripts/validate-build.mjs` (check 7) enforces this.
 *
 * Pure server component (no "use client"). Usage:
 *   import JsonLd from '@/components/JsonLd';
 *   <JsonLd id="org-schema" data={ORG_SCHEMA} />
 *   <JsonLd data={[FAQ_SCHEMA, BREADCRUMB_SCHEMA]} />   // multiple nodes
 */
export interface JsonLdProps {
  /** A schema.org node, or an array of nodes to emit together. */
  data: Record<string, unknown> | ReadonlyArray<Record<string, unknown>>;
  /** Optional element id (handy for debugging / de-duping in devtools). */
  id?: string;
}

export default function JsonLd({ data, id }: JsonLdProps): ReactElement {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export { JsonLd };
