import HeroInlineForm from '@/components/HeroInlineForm';

/**
 * Hero for the /au/seo national hub.
 *
 * Primary term "seo services australia" (590/mo, $57.52 CPC, weakest page-1 incumbent 33
 * referring domains against our 28 earned). NOT "seo agency australia" or "seo company
 * australia" (1,300/mo): those cluster together and their weakest page-1 incumbent
 * measured 143, roughly five times our authority. Targeting them here would be building
 * for a term we cannot reach.
 */

const PROOF: Array<{ figure: string; label: string }> = [
  { figure: '13%', label: 'of Australian web design searches show an AI Overview, against most in the US' },
  { figure: '4 cities', label: 'where we measured a page-1 position within reach' },
  { figure: 'Earned', label: 'links only. We do not buy them, and we will say why' },
  { figure: 'You', label: 'keep the site, the data and every account' },
];

export default function Hero() {
  return (
    <section
      aria-label="SEO services in Australia"
      className="w-full bg-white"
      style={{ maxWidth: '100vw' }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 pb-14 pt-10 sm:px-8 md:pb-20 md:pt-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[58%_1fr] lg:gap-14">
          <div>
            <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#B23E13]">
              SEO services, Australia
            </p>

            <h1 className="mt-4 font-fj-display text-[clamp(32px,5.2vw,54px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-fj-ink">
              SEO services for Australian businesses
            </h1>

            <p className="mt-6 font-fj-body text-[18px] leading-[1.65] text-fj-ink md:text-[19px]">
              We measure before we sell. That means telling you which search terms have real
              Australian demand, which competitors are genuinely beatable, and which parts of
              a search plan are not worth your money.
            </p>

            <p className="mt-4 font-fj-body text-[15.5px] leading-[1.75] text-fj-neutral-600">
              In August 2026 we measured 103 Australian commercial search results in detail:
              volume, competition, whether an AI Overview appears, and how many other websites
              link to each business currently holding a first-page position. Most of what
              follows on this page comes from that work rather than from opinion, and the
              parts where the answer was unfavourable are on the page too.
            </p>

            <div className="mt-8 rounded-2xl border border-fj-neutral-200 bg-fj-cream p-5 md:p-6">
              <p className="font-fj-display text-[17px] font-bold text-fj-ink">
                Get a free review of your site and your Google listing
              </p>
              <p className="mt-1.5 font-fj-body text-[14px] leading-[1.6] text-fj-neutral-600">
                Send your address. We crawl the site, check your Google Business Profile, and
                send back a written note on the three biggest problems. If search is not your
                real problem, we will tell you that instead.
              </p>
              <div className="mt-4">
                <HeroInlineForm
                  source="au_seo_hub_hero_inline"
                  region="au"
                  submitLabel="Get my free review"
                />
              </div>
            </div>
          </div>

          <aside>
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 md:p-7">
              <h2 className="font-fj-display text-[18px] font-bold text-fj-ink">
                What the measurement showed
              </h2>
              <dl className="mt-5 space-y-5">
                {PROOF.map((row) => (
                  <div key={row.label}>
                    <dt className="font-fj-display text-[22px] font-extrabold leading-none tracking-[-0.02em] text-[#B23E13]">
                      {row.figure}
                    </dt>
                    <dd className="mt-1.5 font-fj-body text-[14px] leading-[1.6] text-fj-neutral-600">
                      {row.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
