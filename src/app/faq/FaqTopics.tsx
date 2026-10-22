import Link from 'next/link';
import { Heading } from '@/components/v2/Heading';
import MotionFadeUp from '@/components/v2/MotionFadeUp';

/**
 * /faq topic layout (2026-10-22).
 *
 * Same visual system as the shared v2 FAQ accordion (sidebar topic nav + native
 * <details> accordion), with two differences the shared component cannot carry
 * without touching every page that uses it:
 *   1. each topic label renders as a real <h2>, so the page has an outline
 *      under its h1 (the 22 Oct weak-pages audit counted 0 H2s here);
 *   2. each answer ends with a link to the page that answers it in depth.
 *
 * The FAQPage JSON-LD in page.tsx is built from the same FAQ_ITEMS array this
 * renders, so the visible list and the schema cannot drift.
 *
 * Pure server component.
 */

export interface FaqTopicItem {
  category: string;
  question: string;
  answer: string;
  link: { href: string; label: string };
}

export interface FaqTopic {
  key: string;
  label: string;
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className={className}>
      <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AccordionItem({ item }: { item: FaqTopicItem }) {
  return (
    <details data-faq-item className="group border-t border-fj-neutral-200 first:border-t-0">
      <summary
        data-faq-question
        className="flex cursor-pointer list-none items-start justify-between gap-5 py-5 [&::-webkit-details-marker]:hidden"
      >
        <span className="font-fj-body text-[0.9375rem] font-semibold leading-[1.55] text-fj-ink transition-colors group-open:text-[#B23E13]">
          {item.question}
        </span>
        <span
          aria-hidden="true"
          className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-fj-neutral-200 bg-white text-fj-neutral-400 transition-all group-open:border-[#F05A28]/30 group-open:bg-[#F05A28]/5 group-open:text-[#C94A1A]"
        >
          <ChevronDown className="transition-transform duration-[220ms] ease-in-out group-open:rotate-180" />
        </span>
      </summary>
      <div className="pb-6 pt-0.5 group-open:border-l-2 group-open:pl-4" style={{ borderLeftColor: '#F05A28' }}>
        <p data-faq-answer className="font-fj-body text-[0.9375rem] leading-[1.7] text-fj-neutral-600">
          {item.answer}
        </p>
        <p className="mt-3 font-fj-body text-[0.875rem]">
          <Link href={item.link.href} className="font-semibold underline underline-offset-2" style={{ color: '#B23E13' }}>
            {item.link.label} &rarr;
          </Link>
        </p>
      </div>
    </details>
  );
}

export default function FaqTopics({
  eyebrow,
  headline,
  lead,
  updated,
  topics,
  items,
}: {
  eyebrow: string;
  headline: string;
  lead: string;
  updated: { iso: string; label: string };
  topics: ReadonlyArray<FaqTopic>;
  items: ReadonlyArray<FaqTopicItem>;
}) {
  const grouped: Record<string, FaqTopicItem[]> = {};
  for (const t of topics) grouped[t.key] = [];
  for (const item of items) (grouped[item.category] ?? grouped[topics[0].key]).push(item);

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <MotionFadeUp>
          <p className="fj-eyebrow">{eyebrow}</p>
          <Heading as="h1" size="h3" className="mt-6 max-w-[640px] text-fj-ink">
            {headline}
          </Heading>
          <p className="mt-5 max-w-[560px] font-fj-body text-[1.0625rem] leading-[1.6] text-fj-neutral-600">{lead}</p>
          <p className="mt-3 font-fj-mono text-[0.6875rem] uppercase tracking-[0.12em] text-fj-neutral-500">
            {items.length} questions &middot; Updated <time dateTime={updated.iso}>{updated.label}</time>
          </p>
        </MotionFadeUp>

        {/* Mobile: horizontal pill nav */}
        <div className="mt-8 lg:hidden">
          <div className="flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {topics.map((t) => (
              <a
                key={t.key}
                href={`#faq-${t.key}`}
                className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full border border-fj-neutral-200 bg-white px-4 py-2 font-fj-body text-[0.8125rem] font-medium text-fj-neutral-600 transition-colors hover:border-[#F05A28] hover:text-[#C94A1A]"
              >
                {t.label}
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-fj-neutral-100 font-fj-mono text-[0.5625rem] font-bold text-fj-neutral-500" aria-hidden="true">
                  {grouped[t.key].length}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-14 lg:mt-12 lg:grid-cols-12">
          {/* Sticky topic nav (desktop) */}
          <div className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-24">
              <p className="mb-3 font-fj-mono text-[0.625rem] font-bold uppercase tracking-[0.14em] text-fj-neutral-400">Topics</p>
              <nav aria-label="FAQ topics">
                <ul className="space-y-0.5" role="list">
                  {topics.map((t) => (
                    <li key={t.key}>
                      <a
                        href={`#faq-${t.key}`}
                        className="group flex items-center justify-between border-l-2 border-transparent px-3 py-2.5 transition-all duration-150 hover:border-[#F05A28] hover:bg-[#F05A28]/5"
                      >
                        <span className="font-fj-body text-[0.875rem] font-medium text-fj-neutral-500 transition-colors group-hover:text-[#C94A1A]">{t.label}</span>
                        <span className="ml-2 inline-flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-fj-neutral-100 px-1 font-fj-mono text-[0.5625rem] font-bold text-fj-neutral-400" aria-hidden="true">
                          {grouped[t.key].length}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-5 border-t border-fj-neutral-200 pt-5">
                <p className="font-fj-body text-[0.8125rem] leading-[1.55] text-fj-neutral-400">Looking for prices?</p>
                <Link href="/pricing" className="mt-2 inline-flex font-fj-body text-[0.8125rem] font-semibold hover:underline" style={{ color: '#B23E13' }}>
                  Market cost ranges &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Topics, each with a real h2 */}
          <div className="lg:col-span-9">
            <div className="space-y-10">
              {topics.map((t, ti) => {
                const topicItems = grouped[t.key];
                if (topicItems.length === 0) return null;
                return (
                  <div key={t.key} id={`faq-${t.key}`} className="scroll-mt-28">
                    <MotionFadeUp delay={ti * 0.04}>
                      <div className="mb-1 flex items-center gap-3 pb-4">
                        <div className="h-[2px] w-6 flex-shrink-0" style={{ background: '#F05A28' }} aria-hidden="true" />
                        <h2 className="font-fj-mono text-[0.6875rem] font-bold uppercase tracking-[0.12em]" style={{ color: '#B23E13' }}>
                          {t.label}
                        </h2>
                      </div>
                      <div>
                        {topicItems.map((item) => (
                          <AccordionItem key={item.question} item={item} />
                        ))}
                        <div className="border-t border-fj-neutral-200" />
                      </div>
                    </MotionFadeUp>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
