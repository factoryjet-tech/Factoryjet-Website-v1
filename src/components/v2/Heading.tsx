import type { ReactNode } from 'react';

/**
 * Heading — v2.0 display heading wrapper per factoryjet.DESIGN.md §3.3 & §3.5.
 *
 * Renders h1/h2/h3/h4 with the correct --type-* token (size token decoupled
 * from semantic level so an h2 can be rendered at hero scale, etc.). Always
 * applies `.fj-display` for Fraunces axis tuning (opsz/SOFT/WONK/GRAD).
 *
 * Italic-emphasis pattern (the brand signature, §3.5): pass JSX children
 * containing `<em>` for conviction words. The CSS rule `.fj-display em`
 * (src/index.css) auto-styles them in Fraunces Italic at the same axes.
 *
 * On-dark contexts: pass `onDark` to add `.fj-on-dark` to the heading
 * element. The CSS rule `.fj-on-dark em` shifts em children to
 * `--fj-jet-blue-on-dark` (#4A8FFF) for AA contrast on charcoal.
 *
 * Per-instance text colour stays the consumer's responsibility — typically
 * `text-fj-ink` on light, `text-fj-charcoal-text` on dark.
 *
 * Pure server component.
 */

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4';
type HeadingSize = 'hero' | 'h1' | 'h2' | 'h3' | 'h4';

export interface HeadingProps {
  /** Semantic heading level. Defaults to 'h2'. */
  as?: HeadingTag;
  /** Visual size token. Defaults to match `as` (h1 → 'h1', h2 → 'h2', etc.).
   *  Allows e.g. an `<h2>` rendered at 'hero' scale. */
  size?: HeadingSize;
  /** Inside a charcoal/dark surface — italic em children pick up fj-jet-blue-on-dark. */
  onDark?: boolean;
  /** Extra utility classes appended to the heading element. */
  className?: string;
  children: ReactNode;
}

/* Per-size class bundle. Mobile size first, desktop via md: prefix.
 * Tracking and line-height stay constant across breakpoints (per §3.3/3.4
 * which only specifies smaller mobile font sizes, not different metrics). */
const SIZE_CLASSES: Record<HeadingSize, string> = {
  hero: 'text-[3.5rem] md:text-[6.5rem] leading-[1.02] tracking-[-0.03em]',
  h1: 'text-[2.75rem] md:text-[5rem] leading-[1.05] tracking-[-0.025em]',
  h2: 'text-[2rem] md:text-[3.5rem] leading-[1.1] tracking-[-0.02em]',
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
  onDark = false,
  className = '',
  children,
}: HeadingProps) {
  const Tag = as;
  const resolvedSize: HeadingSize = size ?? as;

  const classes = [
    'font-fj-display',
    'fj-display',
    SIZE_CLASSES[resolvedSize],
    WEIGHT_CLASSES[resolvedSize],
    onDark ? 'fj-on-dark' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <Tag className={classes}>{children}</Tag>;
}
