import type { HTMLAttributes, ReactNode } from 'react';

/**
 * Heading — v2.0 display heading wrapper per factoryjet.DESIGN.md §3.
 *
 * Renders h1/h2/h3/h4 with the correct --type-* token (size token decoupled
 * from semantic level so an h2 can be rendered at hero scale, etc.). Always
 * applies `.fj-display` (Clash Display 700 post-pivot) and `font-fj-display`.
 *
 * The italic-conviction-word emphasis pattern was dropped in M1.d.1.1 +
 * M1.d.2 — Clash Display does not render inline italic emphasis at the
 * scale Fraunces did. Headlines are confident statements, not editorial
 * flourishes. Pass plain text in `children`; do NOT wrap conviction words
 * in `<em>`.
 *
 * Per-instance text colour stays the consumer's responsibility — typically
 * `text-fj-ink` on light, `text-fj-charcoal-text` on dark.
 *
 * Available as both a default and named export so consumers can use either
 * `import Heading` or `import { Heading }` style.
 *
 * Pure server component.
 */

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4';
type HeadingSize = 'hero' | 'h1' | 'h2' | 'h3' | 'h4';

/* Accepts and forwards any standard heading-element HTML attribute (id,
 * role, aria-*, data-*, etc.) — required so v2 components can attach
 * extraction hooks like data-faq-question without a wrapper element. */
export interface HeadingProps
  extends Omit<HTMLAttributes<HTMLHeadingElement>, 'className' | 'children'> {
  /** Semantic heading level. Defaults to 'h2'. */
  as?: HeadingTag;
  /** Visual size token. Defaults to match `as` (h1 → 'h1', h2 → 'h2', etc.).
   *  Allows e.g. an `<h2>` rendered at 'hero' scale. */
  size?: HeadingSize;
  /** Extra utility classes appended to the heading element. */
  className?: string;
  children: ReactNode;
}

/* Per-size class bundle. Mobile size first, desktop via md: prefix.
 * Tracking and line-height stay constant across breakpoints (per §3.3/3.4
 * which only specifies smaller mobile font sizes, not different metrics). */
const SIZE_CLASSES: Record<HeadingSize, string> = {
  hero: 'text-[clamp(2.5rem,5.5vw,5rem)] leading-[1.05] tracking-[-0.02em] text-balance',
  h1: 'text-[2.75rem] md:text-[5rem] leading-[1.05] tracking-[-0.025em]',
  h2: 'text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.015em] text-balance',
  h3: 'text-[1.5rem] md:text-[2.25rem] leading-[1.2] tracking-[-0.015em]',
  // h4 has no mobile-specific override per §3.4.
  h4: 'text-[1.5rem] leading-[1.3] tracking-[-0.01em]',
};

/* Weight follows the visual size token, not the semantic tag. Per §3.3:
 * hero/h1 → 700; h2/h3/h4 → 600. */
const WEIGHT_CLASSES: Record<HeadingSize, string> = {
  hero: 'font-bold',
  h1: 'font-bold',
  h2: 'font-semibold',
  h3: 'font-semibold',
  h4: 'font-semibold',
};

export default function Heading({
  as = 'h2',
  size,
  className = '',
  children,
  ...rest
}: HeadingProps) {
  const Tag = as;
  const resolvedSize: HeadingSize = size ?? as;

  const classes = [
    'font-fj-display',
    'fj-display',
    SIZE_CLASSES[resolvedSize],
    WEIGHT_CLASSES[resolvedSize],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag {...rest} className={classes}>
      {children}
    </Tag>
  );
}

export { Heading };
