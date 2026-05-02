import Link from 'next/link';
import { Link as LinkIcon } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export interface FAQEditorialColumnV2Props {
  eyebrow: string;
  headline: string;
  lead: string;
  faqs: ReadonlyArray<{
    question: string;
    answer: string;
    /** stable anchor id, e.g. "faq-pricing", "faq-timeline" */
    anchorId: string;
  }>; // 8–12 items
}

// Backward-compat alias so older imports keep working until M4 cleanup.
export type FAQEditorialColumnProps = FAQEditorialColumnV2Props;

/**
 * FAQ v2 — `faq_v2_static_editorial` per spec §5.11.
 *
 * Pure Server Component. White background. Single centered column.
 *
 * NO `<details>` / `<summary>` accordions — all answers are fully
 * rendered into static HTML at build time. AEO requirement: AI
 * crawlers must be able to read every Q-A pair from the initial
 * server-rendered markup, not behind a JS-only collapse.
 *
 * v2 additions:
 *   - Each Q-A pair has a stable anchor id on the question heading
 *     so AI search results can deep-link to specific answers
 *     (e.g. https://factoryjet.com/uk/london/web-design#faq-pricing).
 *   - A subtle Link icon next to each question is itself a `<a>`
 *     pointing at the same anchor, so a sighted user can copy the
 *     deep link from the address bar after clicking.
 *   - Wrapped in <RevealOnScroll> for entry choreography.
 */
export default function FAQEditorialColumn({
  eyebrow,
  headline,
  lead,
  faqs,
}: FAQEditorialColumnV2Props) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-section-y lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="mb-6 inline-flex items-center font-mono text-mono-sm uppercase tracking-[0.08em] text-text-meta">
            {eyebrow}
          </div>
          <h2 className="font-display text-display-md text-navy">{headline}</h2>
          <p className="mt-6 text-body-lg text-slate">{lead}</p>
        </div>

        {/* Q-A pairs */}
        <RevealOnScroll>
          <div className="flex flex-col">
            {faqs.map((faq, i) => (
              <div key={faq.anchorId}>
                {i > 0 && <hr className="my-10 border-border-soft" />}
                <h3
                  id={faq.anchorId}
                  className="group flex items-baseline gap-3 font-sans text-headline font-medium text-navy scroll-mt-24"
                >
                  <span>{faq.question}</span>
                  <Link
                    href={`#${faq.anchorId}`}
                    aria-label={`Permalink to ${faq.question}`}
                    className="inline-flex shrink-0 self-center text-text-meta opacity-0 transition-opacity hover:text-jet-blue group-hover:opacity-100"
                  >
                    <LinkIcon className="size-3.5" aria-hidden />
                  </Link>
                </h3>
                <p className="mt-4 max-w-prose text-body text-slate">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
