import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export interface FinalCTAAnchorProps {
  headline: string;
  lead: string;
  primaryCta: { label: string; href: string };
  whatsappCta: { label: string; href: string };
}

/**
 * Treatment 9 — `anchor_cta_glass`. Final CTA section.
 *
 * Pure Server Component. Full-bleed bg-jet-blue. Inside, a single
 * glass card (white/10 + backdrop-blur-md + white/20 border) with
 * the closing pitch and two CTAs.
 *
 * THIS IS THE ONLY PERMITTED GLASSMORPHISM INSTANCE PER PAGE.
 * (Per spec section 4.1 + GTM master context.) No other component
 * in the programmatic library uses backdrop-blur.
 */
export default function FinalCTAAnchor({
  headline,
  lead,
  primaryCta,
  whatsappCta,
}: FinalCTAAnchorProps) {
  return (
    <section className="bg-jet-blue">
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
    </section>
  );
}
