import { Heading } from './Heading';
import MotionFadeUp from './MotionFadeUp';

/**
 * FAQ — v2.0 FAQ block per factoryjet.DESIGN.md §5.12 + §10.
 *
 * Static-HTML answers only — NO `<details>`, NO `<summary>`, NO JS
 * accordion. Every Q-A pair is rendered fully expanded into the initial
 * server-rendered markup so AI crawlers (GPTBot, ClaudeBot, PerplexityBot)
 * can index the full FAQ without executing JavaScript. Per SearchPilot
 * data this delivers a 12–14% ranking uplift over collapsed accordions.
 *
 * Layout: asymmetric 5/12 + 7/12 (header content left, FAQ items right).
 *
 * Items carry data-faq-* attributes so a future schema-extraction utility
 * can build JSON-LD FAQPage markup at the page level. This component
 * does NOT emit JSON-LD — that's the page-assembler's job.
 *
 * Pure server component.
 */

import type { ReactNode } from 'react';

export interface FAQProps {
  eyebrow?: string;
  /** H2 content (plain text post M1.d.2 — italic-emphasis pattern dropped). */
  headline: ReactNode;
  lead?: string;
  /** 6–12 Q-A pairs per spec. */
  items: ReadonlyArray<{ question: string; answer: string }>;
}

export default function FAQ({ eyebrow, headline, lead, items }: FAQProps) {
  return (
    <section className="bg-fj-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        {/* Top-centered header */}
        <MotionFadeUp className="mx-auto max-w-[760px] text-center">
          {eyebrow && <p className="fj-eyebrow">{eyebrow}</p>}
          <Heading
            as="h2"
            size="h2"
            className={`text-fj-ink ${eyebrow ? 'mt-6' : ''}`}
          >
            {headline}
          </Heading>
          {lead && (
            <p className="mt-6 font-fj-body text-[1.0625rem] leading-[1.6] text-fj-neutral-600">
              {lead}
            </p>
          )}
        </MotionFadeUp>

        {/* Two-column FAQ grid */}
        <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-0 md:grid-cols-2">
          {items.map((item, i) => (
            <MotionFadeUp key={i} delay={(i % 2) * 0.1}>
              <article
                data-faq-item
                className="border-t border-fj-neutral-200 py-8"
              >
                <Heading
                  as="h3"
                  size="h4"
                  className="text-fj-ink"
                  data-faq-question
                >
                  {item.question}
                </Heading>
                <p
                  data-faq-answer
                  className="mt-4 font-fj-body text-[1.0625rem] leading-[1.6] text-fj-neutral-600"
                >
                  {item.answer}
                </p>
              </article>
            </MotionFadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
