import { Check, X } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export interface StakesVsRewardsSplitProps {
  eyebrow: string;
  stakesHeadline: string;
  /** 3 short statements, 5–9 words each */
  stakes: ReadonlyArray<string>;
  rewardsHeadline: string;
  /** 3 short statements, 5–9 words each */
  rewards: ReadonlyArray<string>;
}

/**
 * `stakes_vs_rewards_split` per spec §5.4. EnterBridge-pattern:
 * a 50/50 split section that contrasts what's at risk on the left
 * with what's available on the right.
 *
 * Pure Server Component. Mobile: stacks (stakes above, rewards
 * below). Desktop: 2-column.
 *
 * Tinted backgrounds (rose-50 + emerald-50) — these are the only
 * non-neutral panels in the page outside of the Jet Blue final CTA.
 * Restraint maintained because the tints are pale and the copy is
 * short.
 *
 * Each side wrapped in <RevealOnScroll>. Stakes side enters first
 * (delay 0), rewards side a beat later (delay 0.1) — subtle staging
 * that mirrors the "before/after" rhythm of the copy.
 */
export default function StakesVsRewardsSplit({
  eyebrow,
  stakesHeadline,
  stakes,
  rewardsHeadline,
  rewards,
}: StakesVsRewardsSplitProps) {
  return (
    <section>
      {/* Optional eyebrow header — full-width above the split */}
      {eyebrow && (
        <div className="bg-white py-12 text-center">
          <div className="mx-auto inline-flex items-center font-mono text-mono-sm uppercase tracking-[0.08em] text-text-meta">
            {eyebrow}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Stakes side — what's at risk */}
        <RevealOnScroll className="bg-rose-50">
          <div className="flex h-full flex-col px-6 py-section-y lg:items-end lg:px-12">
            <div className="lg:max-w-md">
              <h2 className="font-display text-headline text-navy">
                {stakesHeadline}
              </h2>
              <ul className="mt-8 flex flex-col gap-4">
                {stakes.map((item) => (
                  <li
                    key={item}
                    className="grid grid-cols-[auto_1fr] gap-3 text-body-lg text-navy"
                  >
                    <X
                      className="mt-1 size-5 shrink-0 text-red-600"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </RevealOnScroll>

        {/* Rewards side — what's available */}
        <RevealOnScroll className="bg-emerald-50" delay={0.1}>
          <div className="flex h-full flex-col px-6 py-section-y lg:px-12">
            <div className="lg:max-w-md">
              <h2 className="font-display text-headline text-navy">
                {rewardsHeadline}
              </h2>
              <ul className="mt-8 flex flex-col gap-4">
                {rewards.map((item) => (
                  <li
                    key={item}
                    className="grid grid-cols-[auto_1fr] gap-3 text-body-lg text-navy"
                  >
                    <Check
                      className="mt-1 size-5 shrink-0 text-emerald-600"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
