import type { Metadata } from 'next';

import BoringStatsRow from '@/components/v2/BoringStatsRow';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import Hero from '@/components/v2/Hero';
import FinalCTA from '@/components/v2/FinalCTA';

/**
 * /dev/v2-foundation — verification surface for M1.a.
 *
 * Renders all three foundation components (BoringStatsRow,
 * BigThreeTrustBlock, StrategicDarkSection) with realistic FactoryJet
 * sample data. noindex via metadata. Pure server component.
 */
export const metadata: Metadata = {
  title: 'V2 Foundation Components (dev)',
  robots: { index: false, follow: false },
};

export default function V2FoundationPage() {
  return (
    <main className="min-h-screen bg-fj-cream">
      {/* Page header — Fraunces display + Geist eyebrow */}
      <div className="mx-auto max-w-[1120px] px-4 pb-8 pt-12 lg:px-6">
        <p
          className="font-fj-body font-semibold uppercase text-fj-neutral-600"
          style={{
            fontSize: '0.8125rem',
            lineHeight: 1.4,
            letterSpacing: '0.12em',
          }}
        >
          v2.0 foundation · M1.a
        </p>
        <h1
          className="fj-display mt-4 font-bold text-fj-ink"
          style={{
            fontSize: 'clamp(2.75rem, 5vw, 5rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
          }}
        >
          v2 foundation components
        </h1>
        <p
          className="mt-4 max-w-[640px] font-fj-body text-fj-neutral-600"
          style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}
        >
          Three server components consumed by every M1.b/M1.c page.
          Inspected here against the v2.0 design tokens (Fraunces +
          Geist, fj-* palette).
        </p>
      </div>

      {/* === BoringStatsRow === */}
      <SectionLabel slug="BoringStatsRow" />
      <BoringStatsRow
        stats={[
          {
            value: '+210%',
            label: 'qualified leads in 90 days',
            microcopy: "we'll tell you if yours will be longer",
          },
          {
            value: '500+',
            label: 'projects shipped',
            microcopy: 'we count the 4-star ones too',
          },
          {
            value: '0',
            label: 'pilot deaths',
            microcopy: 'we keep score',
          },
        ]}
      />

      {/* === BigThreeTrustBlock === */}
      <SectionLabel slug="BigThreeTrustBlock" />
      <BigThreeTrustBlock
        stats={[
          {
            number: '60-day',
            label: 'average time-to-value',
            microcopy: "we'll tell you if yours will be longer",
          },
          {
            number: '100%',
            label: 'code ownership',
            microcopy: "yes, even when it's annoying for us",
          },
          {
            number: '4.9/5',
            label: 'across 500+ projects',
            microcopy: 'we count the 4-star ones too',
          },
        ]}
      />

      {/* === StrategicDarkSection === */}
      <SectionLabel slug="StrategicDarkSection" />
      <StrategicDarkSection>
        <h2
          className="fj-display font-semibold"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          Pilots that <em className="fj-italic--on-dark">actually</em> ship.
        </h2>
        <p
          className="mt-6 max-w-[640px] font-fj-body text-fj-charcoal-text"
          style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}
        >
          Strategic dark sections appear no more than twice per page —
          a deliberate rhythm break, not a default surface. Inside,
          italic emphasis shifts to the contrast-safe Jet Blue
          (#4A8FFF) per spec §2.2.
        </p>
      </StrategicDarkSection>

      {/* === Hero (with rightSlot) === */}
      <SectionLabel slug="M1.b — Hero (with rightSlot)" />
      <Hero
        eyebrow="AI SERVICES · UK"
        headline={
          <>
            AI agents that <em>actually</em> ship.
          </>
        }
        lead="We build the agents your team will actually use, in your stack, with your data, in 60 days. Not pilots that quietly die."
        primaryCta={{ label: 'Book a 30-min call', href: '/contact' }}
        secondaryCta={{ label: 'See case studies', href: '/case' }}
        trustItems={[
          '500+ projects shipped',
          '60-day average launch',
          '100% code ownership',
        ]}
        rightSlot={
          <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-fj-neutral-200 bg-fj-neutral-100">
            <span
              className="font-fj-body text-fj-neutral-400"
              style={{ fontSize: '0.9375rem', letterSpacing: '0.005em' }}
            >
              rightSlot demo
            </span>
          </div>
        }
      />

      {/* === Hero (single-column, no rightSlot) === */}
      <SectionLabel slug="M1.b — Hero (single-column, no rightSlot)" />
      <Hero
        eyebrow="AI SERVICES · UK"
        headline={
          <>
            AI agents that <em>actually</em> ship.
          </>
        }
        lead="We build the agents your team will actually use, in your stack, with your data, in 60 days. Not pilots that quietly die."
        primaryCta={{ label: 'Book a 30-min call', href: '/contact' }}
        secondaryCta={{ label: 'See case studies', href: '/case' }}
        trustItems={[
          '500+ projects shipped',
          '60-day average launch',
          '100% code ownership',
        ]}
      />

      {/* === FinalCTA (light variant) === */}
      <SectionLabel slug="M1.b — FinalCTA (light variant)" />
      <FinalCTA
        eyebrow="READY WHEN YOU ARE"
        headline={
          <>
            Stop running <em>pilots</em>. Start shipping.
          </>
        }
        sub="A 30-minute call. We'll tell you if there's a fit before we tell you the price."
        primaryCta={{ label: 'Book a call', href: '/contact' }}
        secondaryCta={{ label: 'See case studies', href: '/case' }}
        objectionHandler="(We'll tell you on the first call if we're the wrong people for the job.)"
      />

      {/* === FinalCTA (dark variant) === */}
      <SectionLabel slug="M1.b — FinalCTA (dark variant)" />
      <FinalCTA
        variant="dark"
        eyebrow="READY WHEN YOU ARE"
        headline={
          <>
            Stop running <em>pilots</em>. Start shipping.
          </>
        }
        sub="A 30-minute call. We'll tell you if there's a fit before we tell you the price."
        primaryCta={{ label: 'Book a call', href: '/contact' }}
        secondaryCta={{ label: 'See case studies', href: '/case' }}
        objectionHandler="(We'll tell you on the first call if we're the wrong people for the job.)"
      />
    </main>
  );
}

/* ------------------------------------------------------------------ */
/*   Section header used between component renderings.                */
/*   Cream-bg strip with mono uppercase label so reviewers can scan   */
/*   which component they're looking at.                              */
/* ------------------------------------------------------------------ */

function SectionLabel({ slug }: { slug: string }) {
  return (
    <div className="mx-auto max-w-[1120px] px-4 pt-12 lg:px-6">
      <h3
        className="font-fj-body font-semibold uppercase text-fj-ink"
        style={{
          fontSize: '0.9375rem',
          lineHeight: 1,
          letterSpacing: '0.12em',
        }}
      >
        {slug}
      </h3>
    </div>
  );
}
