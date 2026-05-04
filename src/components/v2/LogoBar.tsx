/**
 * LogoBar — v2.0 customer-logo strip ("trusted by" band).
 *
 * Cream surface. Centered eyebrow above, horizontal row of logos below.
 * When a logo entry has no `src`, the company `name` renders as a
 * Fraunces 500 wordmark in fj-ink — honest about being a layout
 * placeholder while the real logos are pending.
 *
 * Logos render at ~32–40px height; opacity 60 by default, 100 on hover
 * (image logos only — wordmarks have no hover state since the colour
 * is already final).
 *
 * Pure server component.
 */

/* Note on next/image: this component intentionally uses a plain <img>
 * for image-mode logos. Reasoning: callers commonly pass small monochrome
 * SVGs (logos), often as remote URLs from a CDN; next/image's
 * remotePatterns whitelist would need expanding for every new logo host.
 * The repo's static-export config already disables Image Optimisation in
 * production (next.config.mjs), so plain <img> matches the runtime. */

export interface LogoBarLogo {
  /** Display name — used as wordmark fallback when `src` is absent;
   *  always supplied for the alt attribute. */
  name: string;
  /** Optional image URL (PNG/SVG). When omitted, name renders as
   *  Fraunces wordmark. */
  src?: string;
  /** Intrinsic width in px (only used when `src` is supplied). */
  width?: number;
  /** Intrinsic height in px (only used when `src` is supplied). */
  height?: number;
}

export interface LogoBarProps {
  /** Eyebrow line above the logo row. Default "TRUSTED BY". */
  eyebrow?: string;
  /** 5–8 logos. Wordmark fallback when `src` not provided. */
  logos: ReadonlyArray<LogoBarLogo>;
  className?: string;
}

export default function LogoBar({
  eyebrow = 'TRUSTED BY',
  logos,
  className = '',
}: LogoBarProps) {
  return (
    <section className={`bg-fj-cream py-20 lg:py-24 ${className}`.trim()}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        {eyebrow && (
          <p className="text-center font-fj-mono text-[12px] font-medium uppercase tracking-[0.14em] text-fj-jet-blue">
            {eyebrow}
          </p>
        )}

        <ul className="mt-10 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-4">
          {logos.map((logo) => (
            <li key={logo.name} className="flex items-center justify-center">
              {logo.src ? (
                /* Image-mode logo: monochrome ink expected, opacity-60 by default. */
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width ?? 120}
                  height={logo.height ?? 32}
                  className="h-8 w-auto object-contain opacity-60 transition-opacity hover:opacity-100 lg:h-10"
                  loading="lazy"
                />
              ) : (
                /* Wordmark fallback: Fraunces 500, ink. No hover state. */
                <span className="fj-display font-fj-display text-[20px] font-medium leading-none text-fj-ink lg:text-[24px]">
                  {logo.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export { LogoBar };
