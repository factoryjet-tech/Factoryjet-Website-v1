import Link from 'next/link';
import {
  DeliverableMockup,
  type DeliverableType,
} from './Deliverables/DeliverableMockup';
import { RevealOnScroll } from './RevealOnScroll';

export interface ServiceWithDeliverableMockupProps {
  eyebrow: string;
  headline: string;
  sidebarCta: { label: string; href: string };
  /** length 2 — first paragraph above the deliverable, second between the pull quote and closing */
  introParagraphs: ReadonlyArray<string>;
  pullquoteText: string;
  closingParagraph: string;
  /** Which DeliverableMockup variant to render */
  deliverableType: DeliverableType;
  /** Per-variant payload — see DeliverableMockup for shape per type */
  deliverableData: Record<string, unknown>;
}

// Backward-compat alias so older imports keep working until M4 cleanup.
export type ServiceEditorialPullquoteProps = ServiceWithDeliverableMockupProps;

/**
 * Service explanation v2 — `service_with_deliverable_mockup` per
 * spec §5.5. Replaces the old hand-coded SVG flow diagram with a
 * concrete deliverable mockup (CMS dashboard, Lighthouse score,
 * Figma artifact, GA4 dashboard, or GitHub handover) demonstrating
 * what the buyer actually receives.
 *
 * Right-column order:
 *   intro paragraph 1 → deliverable mockup → pull quote →
 *   intro paragraph 2 → closing paragraph
 *
 * Pure Server Component. The DeliverableMockup variants are also
 * server-rendered (they may contain <BrowserMockup>, which itself
 * is server-only). Entry choreography via <RevealOnScroll>.
 */
export default function ServiceEditorialPullquote({
  eyebrow,
  headline,
  sidebarCta,
  introParagraphs,
  pullquoteText,
  closingParagraph,
  deliverableType,
  deliverableData,
}: ServiceWithDeliverableMockupProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-container-xl px-6 py-section-y lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — sticky sidebar (4/12) */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <div className="mb-6 inline-flex items-center font-mono text-mono-sm uppercase tracking-[0.08em] text-text-meta">
                {eyebrow}
              </div>
              <h2 className="font-display text-display-md text-navy">
                {headline}
              </h2>
              <Link
                href={sidebarCta.href}
                className="mt-8 inline-flex items-center justify-center rounded-lg border border-navy bg-white px-5 py-2.5 text-body-sm font-medium text-navy transition-colors hover:bg-navy hover:text-white"
              >
                {sidebarCta.label}
              </Link>
            </div>
          </aside>

          {/* Right — editorial body (8/12) */}
          <div className="lg:col-span-8">
            {/* Intro paragraph 1 */}
            <p className="text-body-lg text-slate">{introParagraphs[0]}</p>

            {/* Deliverable mockup */}
            <RevealOnScroll className="mt-10">
              <DeliverableMockup
                type={deliverableType}
                data={deliverableData}
              />
            </RevealOnScroll>

            {/* Pull quote */}
            <blockquote className="my-10 border-l-4 border-jet-blue py-2 pl-6 font-serif text-headline italic text-navy">
              {pullquoteText}
            </blockquote>

            {/* Intro paragraph 2 */}
            {introParagraphs[1] && (
              <p className="text-body text-slate">{introParagraphs[1]}</p>
            )}

            {/* Closing paragraph */}
            <p className="mt-6 text-body text-slate">{closingParagraph}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
