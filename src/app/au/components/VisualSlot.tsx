import type { ReactNode } from 'react';

/* Exactly five high-value generated placements per AU route. Page files remain
   the source of truth for subject, caption and ratio; this list only selects
   which slots receive artwork. */
const GENERATED_SLOTS: Record<string, readonly string[]> = {
  'accountant-website-design': ['facts', 'proof', 'photobreak', 'process', 'definition'],
  'accounts-payable-automation': ['facts', 'photobreak', 'process', 'definition', 'facts-2'],
  adelaide: ['facts', 'definition', 'photobreak', 'process', 'city-map'],
  'ai-agents': ['facts', 'proof', 'photobreak', 'process', 'definition'],
  'ai-consulting': ['facts', 'proof', 'photobreak', 'process', 'definition'],
  'ai-customer-service': ['facts', 'proof', 'photobreak', 'process', 'definition'],
  'ai-development': ['facts', 'facts-2', 'photobreak', 'process', 'facts-5'],
  'ai-receptionist': ['facts', 'proof', 'photobreak', 'process', 'definition'],
  'ai-seo': ['facts', 'proof', 'photobreak', 'process', 'definition'],
  brisbane: ['facts', 'definition', 'photobreak', 'process', 'city-map'],
  canberra: ['facts', 'definition', 'photobreak', 'process', 'city-map'],
  'dental-website-design': ['facts', 'facts-2', 'proof', 'photobreak', 'facts-4'],
  'ecommerce-development': ['facts', 'photobreak', 'process', 'definition', 'proof'],
  'ecommerce-seo': ['facts', 'definition', 'definition-2', 'facts-2', 'photobreak'],
  'law-firm-seo': ['facts', 'proof', 'photobreak', 'process', 'definition'],
  'local-seo': ['facts', 'proof', 'photobreak', 'process', 'definition'],
  melbourne: ['facts', 'definition', 'photobreak', 'process', 'city-map'],
  'ndis-website-design': ['facts', 'proof', 'photobreak', 'process', 'definition'],
  'real-estate-websites': ['facts', 'proof', 'photobreak', 'process', 'definition'],
  seo: ['facts', 'proof', 'photobreak', 'process', 'definition'],
  'shopify-development': ['facts', 'photobreak', 'definition', 'proof', 'facts-2'],
  'small-business-seo': ['facts', 'proof', 'photobreak', 'process', 'definition'],
  'small-business-web-design': ['facts', 'proof', 'photobreak', 'process', 'definition'],
  'website-maintenance': ['facts', 'proof', 'photobreak', 'process', 'facts-3'],
  'websites-for-tradies': ['facts', 'facts-2', 'photobreak', 'process', 'definition'],
};

function generatedVisualSrc(page: string, slot: string): string | undefined {
  if (!GENERATED_SLOTS[page]?.includes(slot)) return undefined;
  return `/images/au/generated/${page}/${slot}.webp`;
}

/*
 * Named visual slot for AU pages (spec: pipeline/research/AU-US-DESIGN-PARITY-SPEC-2026-09-26.md, section 5).
 * Server component, no client code.
 *
 * Every image, graphic, illustration or mockup on a converted AU page sits inside one of these, so the
 * visual pass can find it by `data-visual-slot="{page}:{slot}"` and knows what it must show.
 * - With children (an existing <img>): data-visual-status="filled", the image renders as before.
 * - Without children: data-visual-status="placeholder", au-page.css hides the empty slot from visitors (markup stays for the visual pass)
 *   (aspect-ratio from data-visual-ratio), so filling it later causes no layout shift.
 */
export type VisualKind = 'photo' | 'illustration' | 'diagram' | 'mockup' | 'map';
export type VisualRatio = '3:2' | '16:9' | '12:5' | '11:4' | '1:1';

export interface VisualSlotProps {
  /** Route without /au/, e.g. "ai-customer-service". */
  page: string;
  /** Slot name from the spec list: hero, facts, definition, capability-01, platforms, process, photobreak, proof, city-map, finalcta. */
  slot: string;
  kind: VisualKind;
  /** One plain sentence: what the visual must show. */
  subject: string;
  ratio: VisualRatio;
  /** Family A module class for the wrapper, e.g. "factphoto", "definition-image", "photobreak". */
  className?: string;
  /** Optional caption rendered as figcaption. */
  caption?: ReactNode;
  captionClassName?: string;
  /** The existing image. Omit for a placeholder. */
  children?: ReactNode;
  /** Explicit artwork for a reviewed visual pass. null keeps the supplied children. */
  src?: string | null;
  srcSet?: string;
  sizes?: string;
  imageAlt?: string;
}

export default function VisualSlot({
  page,
  slot,
  kind,
  subject,
  ratio,
  className,
  caption,
  captionClassName = 'cap',
  children,
  src,
  srcSet,
  sizes,
  imageAlt,
}: VisualSlotProps) {
  const generatedSrc = src === null ? undefined : (src ?? generatedVisualSrc(page, slot));
  const generatedAlt = /^AI-generated\b/i.test(subject)
    ? subject
    : `AI-generated ${kind} showing ${subject}`;
  const ratioSize = ratio === '12:5'
    ? { width: 1536, height: 640 }
    : ratio === '11:4'
      ? { width: 1536, height: 560 }
      : ratio === '16:9'
        ? { width: 1536, height: 864 }
        : ratio === '1:1'
          ? { width: 1024, height: 1024 }
          : { width: 1536, height: 1024 };
  const generatedImage = generatedSrc ? (
    <img
      src={generatedSrc}
      srcSet={srcSet}
      sizes={sizes}
      {...ratioSize}
      loading={slot === 'hero' ? 'eager' : 'lazy'}
      fetchPriority={slot === 'hero' ? 'high' : undefined}
      decoding="async"
      alt={imageAlt ?? generatedAlt}
    />
  ) : null;
  const visual = generatedImage ?? children;
  const filled = visual !== undefined && visual !== null && visual !== false;
  return (
    <figure
      className={className ? `vslot ${className}` : 'vslot'}
      data-visual-slot={`${page}:${slot}`}
      data-visual-kind={kind}
      data-visual-subject={subject}
      data-visual-ratio={ratio}
      data-visual-status={filled ? 'filled' : 'placeholder'}
      aria-hidden={filled ? undefined : true}
    >
      {filled ? visual : null}
      {caption ? <figcaption className={captionClassName}>{caption}</figcaption> : null}
    </figure>
  );
}
