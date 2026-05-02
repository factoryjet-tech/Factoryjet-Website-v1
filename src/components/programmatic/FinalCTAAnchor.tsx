import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export interface FinalCTAAnchorV2Props {
  headline: string;
  lead: string;
  primaryCta: { label: string; href: string };
  whatsappCta: { label: string; href: string };
  /**
   * NEW in v2 — optional atmospheric background image rendered
   * at low opacity behind the solid Jet Blue panel. When absent
   * (M1.5 default), the section stays solid Jet Blue.
   * Path is relative to /public, e.g. "/atmospheric/london-skyline.webp".
   */
  atmosphericImagePath?: string;
}

// Backward-compat alias so older imports keep working until M4 cleanup.
export type FinalCTAAnchorProps = FinalCTAAnchorV2Props;

/**
 * Final CTA v2 — `final_cta_v2_full_bleed_with_atmospheric` per
 * spec §5.12. Adds optional atmospheric background image at low
 * opacity behind the solid Jet Blue. Glass card unchanged: this
 * remains THE only permitted glassmorphism instance per page.
 *
 * Wrapped in <RevealOnScroll variant="fade"> — fade-only entry
 * (no Y translate) because the section is full-bleed and any
 * vertical movement would create a visible jump.
 */
export default function FinalCTAAnchor({
  headline,
  lead,
  primaryCta,
  whatsappCta,
  atmosphericImagePath,
}: FinalCTAAnchorV2Props) {
  return (
    <section className="relative overflow-hidden bg-jet-blue">
      {/* Optional atmospheric image — sits BEHIND the panel content,
       * very low opacity + screen blend so it reads as texture not
       * imagery. Absolute-positioned to fill the section. */}
      {atmosphericImagePath && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={atmosphericImagePath}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10 mix-blend-screen"
        />
      )}

      <RevealOnScroll variant="fade" className="relative">
        <div className="mx-auto max-w-4xl px-6 py-section-y">
          <div className="rounded-xl border border-white/20 bg-white/10 p-12 backdrop-blur-md">
            <h2 className="font-display text-display-md text-white">
              {headline}
            </h2>
            <p className="mt-4 max-w-2xl text-body-lg text-white/80">{lead}</p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-medium text-jet-blue transition-colors hover:bg-bg-soft"
              >
                {primaryCta.label}
              </Link>
              <Link
                href={whatsappCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white bg-transparent px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                <MessageCircle className="size-4" aria-hidden />
                <span>{whatsappCta.label}</span>
              </Link>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
