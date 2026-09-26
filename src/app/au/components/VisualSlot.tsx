import type { ReactNode } from 'react';

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
}: VisualSlotProps) {
  const filled = children !== undefined && children !== null && children !== false;
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
      {filled ? children : null}
      {caption ? <figcaption className={captionClassName}>{caption}</figcaption> : null}
    </figure>
  );
}
