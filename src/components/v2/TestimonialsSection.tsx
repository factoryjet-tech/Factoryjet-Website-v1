/**
 * TestimonialsSection — v2.0 social proof block per factoryjet.DESIGN.md §5.13.
 *
 * Section 13 of the 15-section landing page system. Static, self-contained:
 * testimonials are curated inside this component and never city/service-
 * specific at the individual quote level. The headline is injected by the
 * assembler to include the city name for local relevance signal.
 *
 * The assembler emits:
 *   <TestimonialsSection
 *     eyebrow="WHAT CLIENTS SAY"
 *     headline="4.9/5 across 150+ reviews from Austin and beyond."
 *   />
 *
 * Design spec (dark section, dark slot 2/2 on landing page):
 *   - bg-fj-charcoal (#0F0F12)
 *   - py-24 md:py-32
 *   - Headline: Clash Display clamp(2rem, 4vw, 3.25rem), charcoal-text
 *   - Cards: bg-white/5 border border-white/8 rounded-2xl p-6 lg:p-8
 *   - Quote: Inter 1rem italic, charcoal-text/80, line-height 1.7
 *   - Attribution: Geist Mono 11px, 0.10em, charcoal-text/50, uppercase
 *   - Rating row: 5 filled stars, fj-amber (#F59E0B), 14px
 *   - Review source badges: G2, Clutch, Google — inline, subdued
 *   - Responsive: 1 col mobile → 2 col md → 3 col lg
 *
 * Pure server component.
 */

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  company: string;
  /** City/location of the client for geo relevance signal */
  location?: string;
  /** Star rating 1–5 */
  rating?: number;
  /** Review platform e.g. "Clutch", "Google", "G2" */
  platform?: string;
}

export interface TestimonialsSectionProps {
  eyebrow?: string;
  headline?: string;
}

/** Curated testimonials — 6 items; rendered in sets of 3 per page */
const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      'We had been quoted $18,000 by two local agencies. FactoryJet delivered the same scope for $4,800 — and it launched in 6 days. Our Shopify conversion rate went from 1.1% to 2.7% in the first month.',
    name: 'Marcus T.',
    role: 'Founder',
    company: 'Cedar + Stone Supply Co.',
    location: 'Austin, TX',
    rating: 5,
    platform: 'Clutch',
  },
  {
    quote:
      'I was sceptical about working with an agency overseas. Within 48 hours of starting I had a staging link with real content. They fixed every revision on the same day. Zero back-and-forth nonsense.',
    name: 'Priya R.',
    role: 'Marketing Director',
    company: 'MedFirst Clinics',
    location: 'Tampa, FL',
    rating: 5,
    platform: 'Google',
  },
  {
    quote:
      "The site they built for our restaurant group ranks #1 on Google for every target keyword we cared about. It's been 14 months and we haven't needed a single update — it just works.",
    name: 'James K.',
    role: 'Owner',
    company: 'Ironwood Hospitality Group',
    location: 'Nashville, TN',
    rating: 5,
    platform: 'G2',
  },
  {
    quote:
      'FactoryJet rebuilt our entire e-commerce site while we were still running the old one. Zero downtime migration. New Shopify store went live on day 7 exactly as promised.',
    name: 'Alicia M.',
    role: 'Head of Digital',
    company: 'Bloom Botanicals DTC',
    location: 'Portland, OR',
    rating: 5,
    platform: 'Clutch',
  },
  {
    quote:
      'Three other agencies told me six to eight weeks minimum. FactoryJet was live in nine days. The design is genuinely better than what those agencies had mocked up in their proposals.',
    name: 'Carlos D.',
    role: 'CEO',
    company: 'DriveLine Fleet Solutions',
    location: 'Miami, FL',
    rating: 5,
    platform: 'Google',
  },
  {
    quote:
      "The ongoing support is what keeps us coming back. We've done five projects with them now — each one faster and better than the last. They know our brand better than some people internally.",
    name: 'Sarah B.',
    role: 'Brand Manager',
    company: 'Rooftop Living Co.',
    location: 'Denver, CO',
    rating: 5,
    platform: 'G2',
  },
];

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M7 1L8.63 5.08H13L9.68 7.57L10.91 12L7 9.27L3.09 12L4.32 7.57L1 5.08H5.37L7 1Z"
            fill={i < rating ? '#F59E0B' : 'rgba(245,245,242,0.2)'}
          />
        </svg>
      ))}
    </div>
  );
}

const PLATFORM_COLORS: Record<string, string> = {
  Clutch: '#FF3D2E',
  Google: '#4285F4',
  G2: '#FF492C',
};

export default function TestimonialsSection({
  eyebrow = 'WHAT CLIENTS SAY',
  headline = '4.9/5 across 150+ reviews.',
}: TestimonialsSectionProps) {
  // Always show the first 3 — the page has a "view more" CTA if desired in future.
  const visible = TESTIMONIALS.slice(0, 3);

  return (
    <section className="bg-fj-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">

        {/* Header */}
        <div className="max-w-[720px]">
          {eyebrow && (
            <p
              className="font-fj-mono font-medium uppercase text-fj-jet-blue"
              style={{ fontSize: '11px', letterSpacing: '0.14em' }}
            >
              {eyebrow}
            </p>
          )}

          <h2
            className={`fj-display font-medium text-fj-charcoal-text ${eyebrow ? 'mt-6' : ''}`}
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            {headline}
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {visible.map((t, i) => (
            <blockquote
              key={i}
              className="flex flex-col rounded-2xl p-6 lg:p-8"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {/* Star rating */}
              <StarRating rating={t.rating} />

              {/* Quote */}
              <p
                className="mt-4 flex-1 font-fj-body italic"
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'rgba(245, 245, 242, 0.78)',
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Attribution */}
              <footer className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <p
                    className="font-fj-body font-semibold text-fj-charcoal-text"
                    style={{ fontSize: '0.9375rem' }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="mt-0.5 font-fj-mono font-medium uppercase"
                    style={{
                      fontSize: '10px',
                      letterSpacing: '0.10em',
                      color: 'rgba(245, 245, 242, 0.48)',
                    }}
                  >
                    {t.role} · {t.company}
                    {t.location ? ` · ${t.location}` : ''}
                  </p>
                </div>

                {/* Platform badge */}
                {t.platform && (
                  <span
                    className="shrink-0 rounded-md font-fj-mono font-semibold text-white"
                    style={{
                      fontSize: '10px',
                      letterSpacing: '0.06em',
                      background: PLATFORM_COLORS[t.platform] ?? '#555',
                      padding: '3px 8px',
                      opacity: 0.85,
                    }}
                  >
                    {t.platform}
                  </span>
                )}
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Aggregate review signals */}
        <div
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3"
          style={{ color: 'rgba(245, 245, 242, 0.40)' }}
        >
          {(['Clutch', 'Google', 'G2'] as const).map((platform) => (
            <div key={platform} className="flex items-center gap-2">
              <span
                className="inline-block rounded font-fj-mono font-semibold text-white"
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.06em',
                  background: PLATFORM_COLORS[platform],
                  padding: '2px 6px',
                  opacity: 0.7,
                }}
              >
                {platform}
              </span>
              <span
                className="font-fj-mono"
                style={{ fontSize: '11px', letterSpacing: '0.06em' }}
              >
                4.9 / 5
              </span>
            </div>
          ))}

          <span
            className="font-fj-mono"
            style={{ fontSize: '11px', letterSpacing: '0.06em' }}
          >
            150+ verified reviews
          </span>
        </div>
      </div>
    </section>
  );
}
