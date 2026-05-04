import type { ReactNode } from 'react';

/**
 * StrategicDarkSection — v2.0 component per factoryjet.DESIGN.md §5.13.
 *
 * Wrapper imposing the dark-section discipline:
 *   - bg-fj-charcoal              (#0F0F12)
 *   - text-fj-charcoal-text       (#F5F5F2 default body text)
 *   - max-w-[1120px] inner container, centred, px-4 mobile / px-6 desktop
 *   - py --space-10               (128px desktop / 80px mobile)
 *
 * Inside dark sections, italic emphasis must use the .fj-italic--on-dark
 * class for contrast-safe Jet Blue (#4A8FFF) — wired in src/index.css
 * per §2.2.
 *
 * Hard rule: this component does NOT enforce the "max 2 dark sections
 * per page" cap (§5.13). That's a page-level discipline tracked in
 * code review, not at runtime.
 *
 * Pure server component.
 */

export interface StrategicDarkSectionProps {
  children: ReactNode;
  /**
   * Class appended to the outer <section>. Use to layer additional
   * page-level utilities (e.g. extra margin between adjacent dark and
   * light sections). The inner container's width and padding are fixed.
   */
  className?: string;
}

export default function StrategicDarkSection({
  children,
  className = '',
}: StrategicDarkSectionProps) {
  return (
    <section
      className={`bg-fj-charcoal text-fj-charcoal-text py-20 lg:py-32 ${className}`.trim()}
    >
      <div className="mx-auto max-w-[1120px] px-4 lg:px-6">{children}</div>
    </section>
  );
}
