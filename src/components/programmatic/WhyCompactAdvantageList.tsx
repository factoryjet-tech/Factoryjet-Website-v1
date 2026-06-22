import { Check } from 'lucide-react';

export interface WhyCompactAdvantageListProps {
  eyebrow: string;
  headline: string;
  lead: string;
  advantages: ReadonlyArray<{
    title: string;
    body: string;
  }>; // 4–6
}

/**
 * Treatment 12 — `compact_advantage_list`. Why FactoryJet (alternate
 * for cities/services where the comparison matrix would feel
 * overwrought).
 *
 * Pure Server Component. White background. Single centered column.
 * Each advantage: green check icon top-left, title + body to the
 * right. No motion.
 */
export default function WhyCompactAdvantageList({
  eyebrow,
  headline,
  lead,
  advantages,
}: WhyCompactAdvantageListProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-section-y lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-6 inline-flex items-center font-mono text-mono-sm uppercase tracking-[0.08em] text-text-meta">
            {eyebrow}
          </div>
          <h2 className="font-display text-display-md text-navy">{headline}</h2>
          <p className="mt-6 text-body-lg text-slate">{lead}</p>
        </div>

        {/* Advantage rows */}
        <ul className="flex flex-col">
          {advantages.map((adv, i) => (
            <li
              key={adv.title}
              className={`grid grid-cols-[auto_1fr] gap-4 ${i > 0 ? 'mt-8' : ''}`}
            >
              <Check
                className="mt-1 size-5 shrink-0 text-jet-green"
                aria-hidden
              />
              <div>
                <h3 className="text-title font-medium text-navy">{adv.title}</h3>
                <p className="mt-2 text-body text-slate">{adv.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
