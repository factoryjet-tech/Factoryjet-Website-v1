import HeroInlineForm from '@/components/HeroInlineForm';
import { SERVICE_AREAS } from '../pageData';

/**
 * Hero for /au/adelaide.
 *
 * Adelaide is the most evenly winnable Australian market in the August 2026 measurement:
 * "web design adelaide" (1,000/mo) has a weakest page-1 incumbent at 27 referring domains
 * against our 28 earned, and "seo agency adelaide" (1,300/mo) at 37. Both services are
 * therefore led equally here, rather than one leading as in Brisbane and Melbourne.
 */

const PROOF: Array<{ figure: string; label: string }> = [
  { figure: 'Both', label: 'Web design and search, and you can take just one' },
  { figure: 'Under 2.5s', label: 'Largest Contentful Paint target on every build' },
  { figure: '500+', label: 'Businesses built for since we started' },
  { figure: 'You', label: 'Owner of the site, the domain and every account' },
];

export default function Hero() {
  return (
    <section
      aria-label="Web design and SEO in Adelaide"
      className="w-full bg-white"
      style={{ maxWidth: '100vw' }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 pb-14 pt-10 sm:px-8 md:pb-20 md:pt-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[58%_1fr] lg:gap-14">
          <div>
            <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#B23E13]">
              Adelaide, South Australia
            </p>

            <h1 className="mt-4 font-fj-display text-[clamp(32px,5.2vw,54px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-fj-ink">
              Web design and SEO for Adelaide businesses
            </h1>

            <p className="mt-6 font-fj-body text-[18px] leading-[1.65] text-fj-ink md:text-[19px]">
              Adelaide is the easiest capital city in Australia to get found in, and we can
              show you why. Fewer entrenched competitors hold the first page here than in
              Sydney, Melbourne or Perth, which changes what is realistic and what it takes.
            </p>

            <p className="mt-4 font-fj-body text-[15.5px] leading-[1.75] text-fj-neutral-600">
              We build fast websites for South Australian businesses and do the search work
              that gets them found. Senior engineers do the job, you own everything at the
              end, and if the numbers say the work is not worth doing for you, we will tell
              you that instead of selling you a retainer.
            </p>

            <div className="mt-8 rounded-2xl border border-fj-neutral-200 bg-fj-cream p-5 md:p-6">
              <p className="font-fj-display text-[17px] font-bold text-fj-ink">
                Get a free review of your site and your Google listing
              </p>
              <p className="mt-1.5 font-fj-body text-[14px] leading-[1.6] text-fj-neutral-600">
                Send your address. We will measure how far you actually are from page one in
                Adelaide, and tell you plainly if the answer is closer than you thought.
              </p>
              <div className="mt-4">
                <HeroInlineForm
                  source="au_adelaide_hero_inline"
                  region="au"
                  submitLabel="Get my free review"
                />
              </div>
            </div>
          </div>

          <aside>
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 md:p-7">
              <h2 className="font-fj-display text-[18px] font-bold text-fj-ink">
                What you get, in short
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
