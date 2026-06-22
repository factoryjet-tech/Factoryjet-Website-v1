import Link from 'next/link';
import { Check } from 'lucide-react';

export interface PricingThreeTierProps {
  eyebrow: string;
  headline: string;
  lead: string;
  tiers: ReadonlyArray<{
    name: string;
    priceRange: string; // e.g. "£3,500–£6,500"
    description: string;
    features: ReadonlyArray<string>; // 5–8 items
    cta: { label: string; href: string };
    popular: boolean;
  }>; // Length must be 3, exactly one popular: true (preferably middle)
}

/**
 * Treatment 7 — `pricing_3tier_anchor`. Pricing section.
 *
 * Pure Server Component. Off-white background (bg-soft). Three equal-
 * height tier cards. The popular tier (typically middle) gets a black
 * ring + "Most Popular" badge — restraint lane: black, not Jet Blue,
 * for the highlight ring. Outer tiers use outlined CTAs; popular tier
 * uses the filled Jet Blue CTA.
 */
export default function PricingThreeTier({
  eyebrow,
  headline,
  lead,
  tiers,
}: PricingThreeTierProps) {
  return (
    <section className="bg-bg-soft">
      <div className="mx-auto max-w-container-xl px-6 py-section-y lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="mb-6 inline-flex items-center font-mono text-mono-sm uppercase tracking-[0.08em] text-text-meta">
            {eyebrow}
          </div>
          <h2 className="font-display text-display-md text-navy">{headline}</h2>
          <p className="mt-6 text-body-lg text-slate">{lead}</p>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-1 lg:grid-cols-3">
          {tiers.map((tier) => {
            const baseCard =
              'relative flex flex-col rounded-xl border border-border-soft bg-white p-8';
            const popularRing = tier.popular
              ? ' ring-2 ring-black ring-offset-0'
              : '';

            return (
              <div
                key={tier.name}
                className={baseCard + popularRing}
              >
                {tier.popular && (
                  <div className="absolute left-1/2 -top-3 -translate-x-1/2">
                    <span className="rounded-full bg-black px-3 py-1 font-mono text-mono-sm uppercase text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-title font-medium text-navy">
                  {tier.name}
                </h3>
                <p className="mt-3 text-3xl font-medium text-navy">
                  {tier.priceRange}
                </p>
                <p className="mt-3 text-body-sm text-slate">
                  {tier.description}
                </p>

                <ul className="mt-6 flex flex-col gap-2">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-body-sm text-slate"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-jet-green"
                        aria-hidden
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  {tier.popular ? (
                    <Link
                      href={tier.cta.href}
                      className="block w-full rounded-lg bg-jet-blue px-6 py-3 text-center text-base font-medium text-white transition-colors hover:bg-primary-dark"
                    >
                      {tier.cta.label}
                    </Link>
                  ) : (
                    <Link
                      href={tier.cta.href}
                      className="block w-full rounded-lg border border-navy bg-white px-6 py-3 text-center text-base font-medium text-navy transition-colors hover:bg-navy hover:text-white"
                    >
                      {tier.cta.label}
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
