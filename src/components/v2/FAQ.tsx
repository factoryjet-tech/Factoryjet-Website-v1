import type { ReactNode } from 'react';
import { Heading } from './Heading';
import MotionFadeUp from './MotionFadeUp';

/**
 * FAQ — v2.0 FAQ block, accordion edition.
 *
 * Layout:
 *   Desktop (lg+): 8/12 left col (accordion Q-A) + 4/12 right sticky sidebar
 *                  (category navigation).
 *   Mobile:        horizontal pill nav strip → stacked accordion below.
 *
 * Accordion: native <details>/<summary> — zero JavaScript, fully accessible,
 * Lighthouse-safe. `group-open:` Tailwind variants drive the chevron rotation
 * and question-text colour change via pure CSS.
 *
 * AI citation: browsers and AI crawlers (GPTBot, ClaudeBot, PerplexityBot)
 * index <details> content even when collapsed — content is in the DOM.
 *
 * Active state: CSS :target on the section ID highlights the category header
 * when users jump via anchor link. Sidebar nav uses hover-only — zero JS.
 *
 * Backward compatible: when `categories` is omitted the component falls back
 * to a plain 2-col grid of open (non-collapsible) Q-A pairs.
 *
 * Pure server component.
 */

export interface FAQItem {
  question: string;
  answer: string;
  /** Optional — must match a `key` in the `categories` prop. */
  category?: string;
}

export interface FAQCategory {
  /** URL-safe slug — used as the HTML anchor id ("faq-{key}"). */
  key: string;
  /** Display label in the sidebar and mobile nav. */
  label: string;
}

export interface FAQProps {
  eyebrow?: string;
  headline: ReactNode;
  lead?: string;
  categories?: ReadonlyArray<FAQCategory>;
  items: ReadonlyArray<FAQItem>;
}

/* ─── Chevron icon ──────────────────────────────────────────────────────── */
function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3 5L7 9L11 5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Single accordion item ─────────────────────────────────────────────── */
function AccordionItem({ item }: { item: FAQItem }) {
  return (
    <details
      data-faq-item
      className="group border-t border-fj-neutral-200 first:border-t-0"
    >
      <summary
        data-faq-question
        className="flex cursor-pointer list-none items-start justify-between gap-5 py-5 [&::-webkit-details-marker]:hidden"
      >
        <span className="font-fj-body text-[1rem] font-semibold leading-[1.55] text-fj-ink transition-colors group-open:text-fj-jet-blue">
          {item.question}
        </span>
        {/* Chevron pill */}
        <span
          aria-hidden="true"
          className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-fj-neutral-200 bg-white text-fj-neutral-400 transition-all group-open:border-fj-jet-blue/30 group-open:bg-fj-jet-blue/5 group-open:text-fj-jet-blue"
        >
          <ChevronDown className="transition-transform duration-200 group-open:rotate-180" />
        </span>
      </summary>

      {/* Answer — in DOM even when closed; AI crawlers index it */}
      <div className="pb-6 pt-0.5">
        <p
          data-faq-answer
          className="font-fj-body text-[0.9375rem] leading-[1.7] text-fj-neutral-600"
        >
          {item.answer}
        </p>
      </div>
    </details>
  );
}

/* ─── Main component ────────────────────────────────────────────────────── */
export default function FAQ({
  eyebrow,
  headline,
  lead,
  categories,
  items,
}: FAQProps) {
  const hasCats = !!categories?.length;

  /* Group items by category */
  const grouped: Record<string, FAQItem[]> = {};
  if (hasCats) {
    for (const cat of categories!) grouped[cat.key] = [];
    for (const item of items) {
      const key = item.category ?? categories![0].key;
      if (grouped[key]) grouped[key].push(item);
    }
  }

  const totalCount = items.length;

  /* ── Fallback: no categories → plain 2-col open grid ─────────────────── */
  if (!hasCats) {
    return (
      <section className="bg-fj-cream py-14 md:py-20">
        <div className="mx-auto max-w-[1120px] px-6 md:px-8">
          <MotionFadeUp className="mx-auto max-w-[760px] text-center">
            {eyebrow && <p className="fj-eyebrow">{eyebrow}</p>}
            <Heading as="h2" size="h2" className={`text-fj-ink ${eyebrow ? 'mt-6' : ''}`}>
              {headline}
            </Heading>
            {lead && (
              <p className="mt-6 font-fj-body text-[1.0625rem] leading-[1.6] text-fj-neutral-600">
                {lead}
              </p>
            )}
          </MotionFadeUp>
          <div className="mt-16 grid grid-cols-1 gap-x-16 md:grid-cols-2">
            {items.map((item, i) => (
              <MotionFadeUp key={i} delay={(i % 2) * 0.1}>
                <article data-faq-item className="border-t border-fj-neutral-200 py-7">
                  <Heading as="h3" size="h4" className="text-fj-ink" data-faq-question>
                    {item.question}
                  </Heading>
                  <p
                    data-faq-answer
                    className="mt-4 font-fj-body text-[0.9375rem] leading-[1.7] text-fj-neutral-600"
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

  /* ── Categorised accordion layout ────────────────────────────────────── */
  return (
    <section className="bg-fj-cream py-14 md:py-20">
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">

        {/* ── Section header (full-width) ──────────────────────────────── */}
        <MotionFadeUp>
          {eyebrow && <p className="fj-eyebrow">{eyebrow}</p>}
          <Heading
            as="h2"
            size="h2"
            className={`text-fj-ink ${eyebrow ? 'mt-6' : ''} max-w-[640px]`}
          >
            {headline}
          </Heading>
          {lead && (
            <p className="mt-5 max-w-[560px] font-fj-body text-[1.0625rem] leading-[1.6] text-fj-neutral-600">
              {lead}
            </p>
          )}
        </MotionFadeUp>

        {/* ── Mobile: horizontal pill nav ──────────────────────────────── */}
        <div className="mt-8 lg:hidden">
          <div
            className="flex gap-2 overflow-x-auto pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories!.map((cat) => (
              <a
                key={cat.key}
                href={`#faq-${cat.key}`}
                className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full border border-fj-neutral-200 bg-white px-4 py-2 font-fj-body text-[0.8125rem] font-medium text-fj-neutral-600 transition-colors hover:border-fj-jet-blue hover:text-fj-jet-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fj-jet-blue"
              >
                {cat.label}
                <span
                  className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-fj-neutral-100 font-fj-mono text-[0.5625rem] font-bold text-fj-neutral-500"
                  aria-hidden="true"
                >
                  {grouped[cat.key]?.length ?? 0}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* ── Two-column layout ─────────────────────────────────────────── */}
        <div className="mt-10 grid grid-cols-1 gap-x-14 lg:mt-12 lg:grid-cols-12">

          {/* ── LEFT: Accordion Q-A (col-span-8) ─────────────────────── */}
          <div className="lg:col-span-8">
            <div className="space-y-10">
              {categories!.map((cat, ci) => {
                const catItems = grouped[cat.key] ?? [];
                if (catItems.length === 0) return null;
                return (
                  <div
                    key={cat.key}
                    id={`faq-${cat.key}`}
                    // :target CSS hook — scroll-mt so sticky header doesn't cover anchor
                    className="scroll-mt-28"
                  >
                    <MotionFadeUp delay={ci * 0.04}>
                      {/* Category header */}
                      <div className="mb-1 flex items-center gap-3 pb-4">
                        <div
                          className="h-[3px] w-8 flex-shrink-0 rounded-full bg-fj-jet-blue"
                          aria-hidden="true"
                        />
                        <p className="fj-eyebrow text-fj-jet-blue">{cat.label}</p>
                      </div>

                      {/* Accordion items */}
                      <div>
                        {catItems.map((item, i) => (
                          <AccordionItem key={i} item={item} />
                        ))}
                        {/* Bottom border on last item */}
                        <div className="border-t border-fj-neutral-200" />
                      </div>
                    </MotionFadeUp>
                  </div>
                );
              })}
            </div>

            {/* Freshness note */}
            <p
              className="mt-10 font-fj-mono text-[0.6875rem] tracking-[0.08em] text-fj-neutral-300 uppercase"
              aria-hidden="true"
            >
              {totalCount} questions · answers reflect current FactoryJet services
            </p>
          </div>

          {/* ── RIGHT: Sticky sidebar (col-span-4, desktop only) ─────── */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-24 rounded-2xl border border-fj-neutral-200 bg-white p-6">

              {/* Sidebar header */}
              <div className="mb-4 flex items-center gap-3 border-b border-fj-neutral-100 pb-4">
                <div
                  className="h-[3px] w-6 flex-shrink-0 rounded-full bg-fj-jet-blue"
                  aria-hidden="true"
                />
                <p className="font-fj-mono text-[0.6875rem] font-bold tracking-[0.12em] uppercase text-fj-neutral-400">
                  Topics
                </p>
              </div>

              {/* Nav list */}
              <nav aria-label="FAQ topics">
                <ul className="space-y-1" role="list">
                  {categories!.map((cat) => {
                    const count = grouped[cat.key]?.length ?? 0;
                    return (
                      <li key={cat.key}>
                        <a
                          href={`#faq-${cat.key}`}
                          className="group flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors hover:bg-fj-jet-blue/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fj-jet-blue"
                        >
                          <span className="font-fj-body text-[0.9375rem] font-medium text-fj-neutral-600 transition-colors group-hover:text-fj-jet-blue">
                            {cat.label}
                          </span>
                          <span
                            className="ml-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-fj-neutral-100 px-1.5 font-fj-mono text-[0.625rem] font-bold text-fj-neutral-400 transition-colors group-hover:bg-fj-jet-blue/10 group-hover:text-fj-jet-blue"
                            aria-hidden="true"
                          >
                            {count}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* CTA nudge at bottom of sidebar */}
              <div className="mt-5 border-t border-fj-neutral-100 pt-5">
                <p className="font-fj-body text-[0.8125rem] leading-[1.55] text-fj-neutral-400">
                  Can&rsquo;t find your answer?
                </p>
                <a
                  href="#final-cta"
                  className="mt-2 inline-flex items-center gap-1.5 font-fj-body text-[0.8125rem] font-semibold text-fj-jet-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fj-jet-blue"
                >
                  Book a free strategy call
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
