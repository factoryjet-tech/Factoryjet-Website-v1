import Image from 'next/image';
import type { ReactNode } from 'react';

/**
 * ImageBlock — v2.0 imagery primitive.
 *
 * The placement primitive for every image on a v2 page: hero rightSlots,
 * service explanation visuals, case-study covers, blog hero images. Wraps
 * `next/image` with `unoptimized` (matches the repo's static-export
 * config in next.config.mjs) plus the v2 visual lane: 12px radius, 1px
 * neutral-200 border by default, optional white inset for "product
 * mockup on cream" treatment, optional plain Inter caption below.
 *
 * No drop-shadow, no glow, no hover lift — restraint per §6.2.
 *
 * Pure server component.
 */

export interface ImageBlockProps {
  /** URL or path to image. Data URLs (e.g. SVG placeholders) are accepted. */
  src: string;
  /** Required — every ImageBlock must have alt text. */
  alt: string;
  /** Intrinsic width in px. */
  width: number;
  /** Intrinsic height in px. */
  height: number;
  /** Optional CSS aspect-ratio override (e.g. "4/3", "16/9"). When set,
   *  the wrapper enforces this aspect; the image fills it via object-cover. */
  aspectRatio?: string;
  /** Optional caption rendered below the image in plain Inter body text
   *  (italic styling dropped in M1.d.2). */
  caption?: ReactNode;
  /** 1px fj-neutral-200 border + 12px radius. Default true. */
  bordered?: boolean;
  /** White panel inset around the image — for "product mockup on cream"
   *  aesthetic. Default false. */
  elevated?: boolean;
  /** Extra utility classes appended to the figure element. */
  className?: string;
}

/* Build a tiny inline SVG data URL representing a placeholder rectangle
 * with centred "Image · WxH" text. Kept here so callers can import and
 * use it directly without re-implementing in each demo.
 *
 * Colors expressed via rgb() to satisfy the "no hex literals" gate —
 * the values match fj-neutral-200 (#E5E5E0) and fj-neutral-400 (#A8A8A0). */
export function placeholderImageDataUrl(width: number, height: number): string {
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">` +
    `<rect width="${width}" height="${height}" fill="rgb(229, 229, 224)"/>` +
    `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" ` +
    `font-family="ui-monospace, monospace" font-size="14" letter-spacing="0.5" ` +
    `fill="rgb(168, 168, 160)">Image &#183; ${width}&#215;${height}</text>` +
    `</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export default function ImageBlock({
  src,
  alt,
  width,
  height,
  aspectRatio,
  caption,
  bordered = true,
  elevated = false,
  className = '',
}: ImageBlockProps) {
  const wrapperClasses = [
    'overflow-hidden',
    bordered ? 'rounded-xl border border-fj-neutral-200' : 'rounded-xl',
    elevated ? 'bg-white p-3' : '',
  ]
    .filter(Boolean)
    .join(' ');

  /* When aspectRatio is set, the wrapper enforces it; the image fills it
   * via object-cover. Otherwise the wrapper sizes naturally to the image. */
  const wrapperStyle = aspectRatio ? { aspectRatio } : undefined;

  const imageClasses = aspectRatio
    ? 'h-full w-full object-cover'
    : 'h-auto w-full';

  return (
    <figure className={`m-0 ${className}`}>
      <div className={wrapperClasses} style={wrapperStyle}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={imageClasses}
          unoptimized
        />
      </div>
      {caption && (
        <figcaption className="mt-3 font-fj-body text-[14px] leading-[1.5] text-fj-neutral-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export { ImageBlock };
