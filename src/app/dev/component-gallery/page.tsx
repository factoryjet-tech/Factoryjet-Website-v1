import type { Metadata } from 'next';

import { HeroSection } from '@/components/programmatic/HeroSection';
import ProofStripLogosAndStats from '@/components/programmatic/ProofStripLogosAndStats';
import CityContextStatStrip from '@/components/programmatic/CityContextStatStrip';
import StakesVsRewardsSplit from '@/components/programmatic/StakesVsRewardsSplit';
import ServiceEditorialPullquote from '@/components/programmatic/ServiceEditorialPullquote';
import WhyComparisonMatrix from '@/components/programmatic/WhyComparisonMatrix';
import ProcessVisualTimeline from '@/components/programmatic/ProcessVisualTimeline';
import IndustriesGridIllustrated from '@/components/programmatic/IndustriesGridIllustrated';
import PricingThreeTier from '@/components/programmatic/PricingThreeTier';
import TestimonialsNamedWithMetrics from '@/components/programmatic/TestimonialsNamedWithMetrics';
import FAQEditorialColumn from '@/components/programmatic/FAQEditorialColumn';
import FinalCTAAnchor from '@/components/programmatic/FinalCTAAnchor';

import {
  mockHero,
  mockProofStrip,
  mockCityContext,
  mockStakesVsRewards,
  mockServiceDeliverable,
  mockWhyComparison,
  mockProcess,
  mockIndustries,
  mockPricing,
  mockTestimonials,
  mockTestimonialsGranted,
  mockFAQ,
  mockFinalCTA,
} from './mock-data';

export const metadata: Metadata = {
  title: 'Component Gallery v2 (dev)',
  robots: { index: false, follow: false },
};

/**
 * Each entry maps a v2 treatment slug to its section name + render.
 *
 * `note` is shown in a small grey paragraph above the section
 * rendering — used to flag testimonials' permission-gate behavior
 * and the proof strip's logo-row suppression.
 */
interface TreatmentEntry {
  slug: string;
  sectionName: string;
  note?: string;
  render: () => React.ReactNode;
}

/**
 * Render order matches spec §6 v2 canonical sequence:
 *   1.  hero                       → asymmetric_split_with_mockup
 *   2.  proof_strip                → proof_strip_logos_and_stats
 *   3.  city_context               → city_context_v2
 *   4.  stakes_vs_rewards          → stakes_vs_rewards_split
 *   5.  service_explanation        → service_with_deliverable_mockup
 *   6.  why_factoryjet             → why_comparison_matrix_v2
 *   7.  process                    → process_v2_visual_timeline
 *   8.  industries                 → industries_v2_buyer_persona_grid
 *   9.  pricing                    → pricing_3tier_v2
 *   10. testimonials               → testimonials_v2_named_with_metrics
 *                                    (rendered TWICE — pending then granted)
 *   11. faq                        → faq_v2_static_editorial
 *   12. final_cta                  → final_cta_v2_full_bleed
 */
const TREATMENTS: ReadonlyArray<TreatmentEntry> = [
  {
    slug: 'asymmetric_split_with_mockup',
    sectionName: 'hero',
    render: () => <HeroSection {...mockHero} />,
  },
  {
    slug: 'proof_strip_logos_and_stats',
    sectionName: 'proof_strip',
    note: "Logo strip activates when ≥6 clients have displayPermission='granted' in clients.json. Mock fixture is all 'pending' — only the 4-stat strip renders below.",
    render: () => <ProofStripLogosAndStats {...mockProofStrip} />,
  },
  {
    slug: 'city_context_v2',
    sectionName: 'city_context',
    render: () => <CityContextStatStrip {...mockCityContext} />,
  },
  {
    slug: 'stakes_vs_rewards_split',
    sectionName: 'stakes_vs_rewards',
    render: () => <StakesVsRewardsSplit {...mockStakesVsRewards} />,
  },
  {
    slug: 'service_with_deliverable_mockup',
    sectionName: 'service_explanation',
    note: "deliverableType is 'cms_dashboard' here. Other variants (lighthouse_score, figma_artifact, analytics_dashboard, github_handover) ship in M2 page configs.",
    render: () => <ServiceEditorialPullquote {...mockServiceDeliverable} />,
  },
  {
    slug: 'why_comparison_matrix_v2',
    sectionName: 'why_factoryjet',
    render: () => <WhyComparisonMatrix {...mockWhyComparison} />,
  },
  {
    slug: 'process_v2_visual_timeline',
    sectionName: 'process',
    render: () => <ProcessVisualTimeline {...mockProcess} />,
  },
  {
    slug: 'industries_v2_buyer_persona_grid',
    sectionName: 'industries',
    note: 'Photo slots are empty — placeholder treatment renders. Pexels integration deferred to M3.',
    render: () => <IndustriesGridIllustrated {...mockIndustries} />,
  },
  {
    slug: 'pricing_3tier_v2',
    sectionName: 'pricing',
    render: () => <PricingThreeTier {...mockPricing} />,
  },
  // Testimonials rendered TWICE: pending state (component returns null,
  // visual confirmation that the gate works) and granted state (cards
  // render normally). Reviewer sees both in the same scroll.
  {
    slug: 'testimonials_v2_named_with_metrics',
    sectionName: 'testimonials',
    note: "All 3 testimonials marked permissionStatus='pending'. Component returns null. Empty space below the header confirms the gate works.",
    render: () => <TestimonialsNamedWithMetrics {...mockTestimonials} />,
  },
  {
    slug: 'testimonials_v2_named_with_metrics_granted',
    sectionName: 'testimonials (granted preview)',
    note: 'Same 3 testimonials, permissionStatus flipped to granted. Cards render. Real testimonials populate from testimonials.json in M2.',
    render: () => (
      <TestimonialsNamedWithMetrics {...mockTestimonialsGranted} />
    ),
  },
  {
    slug: 'faq_v2_static_editorial',
    sectionName: 'faq',
    render: () => <FAQEditorialColumn {...mockFAQ} />,
  },
  {
    slug: 'final_cta_v2_full_bleed',
    sectionName: 'final_cta',
    render: () => <FinalCTAAnchor {...mockFinalCTA} />,
  },
];

/**
 * Component gallery v2 — internal review surface for the M1.5
 * treatment library. Renders all 12 v2 sections in canonical order
 * with realistic London-themed mock data.
 *
 * Marked noindex via metadata. Lives at /dev/component-gallery.
 */
export default function ComponentGalleryV2Page() {
  return (
    <div className="bg-white">
      {/* Sticky nav strip — anchor links to each treatment */}
      <nav
        aria-label="Treatment navigation"
        className="sticky top-0 z-50 border-b border-border-soft bg-white/95 backdrop-blur"
      >
        <div className="mx-auto max-w-container-xl overflow-x-auto px-6 py-3 lg:px-8">
          <ul className="flex gap-4 whitespace-nowrap font-mono text-mono-sm uppercase tracking-[0.04em] text-text-meta">
            {TREATMENTS.map((t) => (
              <li key={t.slug}>
                <a
                  href={`#${t.slug}`}
                  className="hover:text-navy"
                  title={t.sectionName}
                >
                  {t.slug}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Treatment renderings */}
      {TREATMENTS.map((t, i) => (
        <div key={t.slug}>
          <header className="border-y border-border-soft bg-bg-soft">
            <div className="mx-auto max-w-container-xl px-6 py-6 lg:px-8">
              <h2
                id={t.slug}
                className="font-mono text-body-sm uppercase tracking-[0.08em] text-navy scroll-mt-20"
              >
                <span className="text-text-meta">
                  {String(i + 1).padStart(2, '0')}. {t.sectionName} ·{' '}
                </span>
                {t.slug}
              </h2>
              {t.note && (
                <p className="mt-2 max-w-3xl text-body-sm text-text-meta">
                  {t.note}
                </p>
              )}
            </div>
          </header>
          {t.render()}
        </div>
      ))}
    </div>
  );
}
