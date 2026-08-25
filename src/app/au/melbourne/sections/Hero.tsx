import HeroInlineForm from '@/components/HeroInlineForm';
import { SERVICE_AREAS } from '../pageData';

/**
 * Hero for /au/melbourne.
 *
 * Primary term "web design melbourne" (1,900/mo, weakest page-1 incumbent 14 referring
 * domains), secondary "seo consultant melbourne" (1,300/mo, weakest 8). Note the wording:
 * in Melbourne the winnable search is for a CONSULTANT, while in Brisbane it is for an
 * AGENCY. "web design company melbourne" was measured at 6.6x our authority and is
 * deliberately NOT targeted here.
 *
 * Light background. Static server component, no client JS beyond the lead form.
 */

const PROOF: Array<{ figure: string; label: string }> = [
  { figure: 'Senior only', label: 'The person who scopes your project also builds it' },
  { figure: 'Under 2.5s', label: 'Largest Contentful Paint target on every build' },
  { figure: '500+', label: 'Businesses built for since we started' },
  { figure: 'You', label: 'Owner of the site, the domain and every account' },
];

export default function Hero() {
  return (
    <section
      aria-label="Web design and SEO consulting in Melbourne"
      className="w-full bg-white"
      style={{ maxWidth: '100vw' }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 pb-14 pt-10 sm:px-8 md:pb-20 md:pt-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[58%_1fr] lg:gap-14">
          <div>
            <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#B23E13]">
              Melbourne, Victoria
            </p>

            <h1 className="mt-4 font-fj-display text-[clamp(32px,5.2vw,54px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-fj-ink">
              Web design and SEO consulting in Melbourne
            </h1>

            <p className="mt-6 font-fj-body text-[18px] leading-[1.65] text-fj-ink md:text-[19px]">
              We build fast websites for Melbourne businesses and advise on the search work
              that will actually move enquiries. You deal with the engineer doing the job, not
              an account manager relaying messages.
            </p>

            <p className="mt-4 font-fj-body text-[15.5px] leading-[1.75] text-fj-neutral-600">
              Melbourne is a crowded market with a lot of good agencies in it, so this page
              spends more time on how to judge one than on selling you ours. If you are
              comparing three or four options right now, the six questions further down are
              the fastest way to separate them, and they work on us too.
            </p>

            <div className="mt-8 rounded-2xl border border-fj-neutral-200 bg-fj-cream p-5 md:p-6">
              <p className="font-fj-display text-[17px] font-bold text-fj-ink">
                Get a free review of your site and your Google listing
              </p>
              <p className="mt-1.5 font-fj-body text-[14px] leading-[1.6] text-fj-neutral-600">
                Send your address. We will tell you which of the five common problems you have,
                and roughly what it costs you. Straight answer, in writing, no charge.
              </p>
              <div className="mt-4">
                <HeroInlineForm
                  source="au_melbourne_hero_inline"
                  region="au"
                  submitLabel="Get my free review"
                />
              </div>
            </div>
          </div>

          <aside>
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 md:p-7">
              <h2 className="font-fj-display text-[18px] font-bold text-fj-ink">
                How we work
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

            <div className="mt-5 rounded-2xl border border-fj-neutral-200 bg-fj-cream p-5">
              <h2 className="font-fj-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#B23E13]">
                Where we work
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {SERVICE_AREAS.map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-fj-neutral-200 bg-white px-3 py-1 font-fj-body text-[12.5px] font-medium text-fj-ink"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
