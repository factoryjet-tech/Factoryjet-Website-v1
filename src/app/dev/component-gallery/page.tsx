import type { Metadata } from 'next';

import { HeroSection } from '@/components/programmatic/HeroSection';
import CityContextStatStrip from '@/components/programmatic/CityContextStatStrip';
import ServiceEditorialPullquote from '@/components/programmatic/ServiceEditorialPullquote';
import WhyComparisonMatrix from '@/components/programmatic/WhyComparisonMatrix';
import IndustriesGridIllustrated from '@/components/programmatic/IndustriesGridIllustrated';
import PricingThreeTier from '@/components/programmatic/PricingThreeTier';
import FAQEditorialColumn from '@/components/programmatic/FAQEditorialColumn';
import FinalCTAAnchor from '@/components/programmatic/FinalCTAAnchor';

// NOTE: gallery is intentionally incomplete during M1.5. GATE E rebuilds
// it from scratch against the full 12-treatment v2 sequence.
import {
  mockHero,
  mockCityContextStatStrip,
  mockServiceEditorial,
  mockWhyComparisonMatrix,
  mockIndustriesGridIllustrated,
  mockPricingThreeTier,
  mockFAQEditorialColumn,
  mockFinalCTAAnchor,
} from './mock-data';

export const metadata: Metadata = {
  title: 'Component Gallery (dev)',
  robots: { index: false, follow: false },
};

interface TreatmentEntry {
  slug: string;
  sectionName: string;
  alt?: boolean;
  render: () => React.ReactNode;
}

/**
 * Render order matches the spec:
 *   1.  asymmetric_split_with_mockup           (hero)
 *   2.  stat_strip_3up_with_lead               (city_context default)
 *   3.  prose_with_inline_stats                (city_context ALT)
 *   4.  editorial_prose_with_pullquote_and_diagram   (service default)
 *   5.  service_steps_horizontal               (service ALT)
 *   6.  comparison_matrix_with_advantage_tiles (why default)
 *   7.  compact_advantage_list                 (why ALT)
 *   8.  vertical_timeline_5step                (process)
 *   9.  industries_grid_3x2_illustrated        (industries)
 *   10. pricing_3tier_anchor                   (pricing)
 *   11. faq_static_editorial                   (faq)
 *   12. anchor_cta_glass                       (final_cta)
 */
const TREATMENTS: ReadonlyArray<TreatmentEntry> = [
  {
    slug: 'asymmetric_split_with_mockup',
    sectionName: 'hero',
    render: () => <HeroSection {...mockHero} />,
  },
  {
    slug: 'stat_strip_3up_with_lead',
    sectionName: 'city_context',
    render: () => <CityContextStatStrip {...mockCityContextStatStrip} />,
  },
  {
    slug: 'editorial_prose_with_pullquote_and_diagram',
    sectionName: 'service_explanation',
    render: () => <ServiceEditorialPullquote {...mockServiceEditorial} />,
  },
  {
    slug: 'comparison_matrix_with_advantage_tiles',
    sectionName: 'why_factoryjet',
    render: () => <WhyComparisonMatrix {...mockWhyComparisonMatrix} />,
  },
  {
    slug: 'industries_grid_3x2_illustrated',
    sectionName: 'industries',
    render: () => <IndustriesGridIllustrated {...mockIndustriesGridIllustrated} />,
  },
  {
    slug: 'pricing_3tier_anchor',
    sectionName: 'pricing',
    render: () => <PricingThreeTier {...mockPricingThreeTier} />,
  },
  {
    slug: 'faq_static_editorial',
    sectionName: 'faq',
    render: () => <FAQEditorialColumn {...mockFAQEditorialColumn} />,
  },
  {
    slug: 'anchor_cta_glass',
    sectionName: 'final_cta',
    render: () => <FinalCTAAnchor {...mockFinalCTAAnchor} />,
  },
];

/**
 * Component gallery — internal review surface for the M1 treatment
 * library. Each treatment renders with realistic mock data so a
 * human reviewer can scroll through all 12 in one pass.
 *
 * Marked noindex via metadata. Lives at /dev/component-gallery.
 */
export default function ComponentGalleryPage() {
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
                  title={`${t.sectionName}${t.alt ? ' (alt)' : ''}`}
                >
                  {t.slug}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Treatment renderings */}
      {TREATMENTS.map((t) => (
        <div key={t.slug}>
          <header className="border-y border-border-soft bg-bg-soft">
            <div className="mx-auto max-w-container-xl px-6 py-6 lg:px-8">
              <h2
                id={t.slug}
                className="font-mono text-body-sm uppercase tracking-[0.08em] text-navy"
              >
                <span className="text-text-meta">
                  {t.sectionName}
                  {t.alt ? ' (alt)' : ''} ·{' '}
                </span>
                {t.slug}
              </h2>
            </div>
          </header>
          {t.render()}
        </div>
      ))}
    </div>
  );
}
