/**
 * Inline links in case study body copy.
 *
 * `challenge`, `approach`, `solution` and `results` are plain-text strings.
 * The only markup they may carry is a link written as
 * `[anchor text](https://absolute-url)`. The template at
 * `/case-studies/[slug]/page.tsx` turns each segment into a React text node or
 * an <a>, so no HTML in the data can reach the page. Only absolute https URLs
 * become links. Anything else stays visible as text, which makes a typo easy
 * to spot on the page.
 *
 * No imports here on purpose: tests/case-study-inline-links.test.mjs loads
 * this file on its own.
 */

export type InlineSegment = string | { text: string; href: string }

const INLINE_LINK = /\[([^\[\]]+)\]\((https:\/\/[^\s()]+)\)/g

export function parseInlineLinks(body: string): InlineSegment[] {
  const segments: InlineSegment[] = []
  let cursor = 0
  for (const match of body.matchAll(INLINE_LINK)) {
    const start = match.index ?? 0
    if (start > cursor) segments.push(body.slice(cursor, start))
    segments.push({ text: match[1], href: match[2] })
    cursor = start + match[0].length
  }
  if (cursor < body.length) segments.push(body.slice(cursor))
  return segments
}
