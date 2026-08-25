import HeroInlineForm from '@/components/HeroInlineForm';
import { SERVICE_AREAS } from '../pageData';

/**
 * Hero for /au/canberra.
 *
 * "seo agency canberra" (880/mo) had the weakest page-1 incumbent of ANY Australian term
 * we measured in August 2026, at 7 referring domains against our 28 earned. "web design
 * canberra" (1,000/mo) sat at 21. Both are reachable now, which is why this page leads on
 * how thin the local field is rather than on our credentials.
 */

const PROOF: Array<{ figure: string; label: string }> = [
  { figure: 'WCAG', label: 'Accessibility built in, not bolted on for a tender' },
  { figure: 'Under 2.5s', label: 'Largest Contentful Paint target on every build' },
  { figure: '500+', label: 'Businesses built for since we started' },
  { figure: 'You', label: 'Owner of the site, the code and every account' },
];

export default function Hero() {
  return (
    <section
      aria-label="Web design and SEO in Canberra"
      className="w-full bg-white"
      style={{ maxWidth: '100vw' }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 pb-14 pt-10 sm:px-8 md:pb-20 md:pt-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[58%_1fr] lg:gap-14">
          <div>
            <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#B23E13]">
              Canberra, ACT
            </p>

            <h1 className="mt-4 font-fj-display text-[clamp(32px,5.2vw,54px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-fj-ink">
              Web design and SEO for Canberra organisations
            </h1>

            <p className="mt-6 font-fj-body text-[18px] leading-[1.65] text-fj-ink md:text-[19px]">
              Websites for businesses, associations and suppliers who work in and around the
              public sector. Accessible, fast, and built so you can answer the questions a
              tender puts to you without scrambling.
            </p>

            <p className="mt-4 font-fj-body text-[15.5px] leading-[1.75] text-fj-neutral-600">
              Canberra also happens to have the thinnest search competition of anywhere we
              measured in Australia. When we checked the main local SEO term in August 2026,
              the weakest organisation holding a first-page position had links from seven other
              websites. That is a genuinely low bar, and it will not stay that way.
            </p>

            <div className="mt-8 rounded-2xl border border-fj-neutral-200 bg-fj-cream p-5 md:p-6">
              <p className="font-fj-display text-[17px] font-bold text-fj-ink">
                Get a free review of your site, including an accessibility check
              </p>
              <p className="mt-1.5 font-fj-body text-[14px] leading-[1.6] text-fj-neutral-600">
                Send your address. We crawl the site, test it against the WCAG criteria, check
                your Google listing, and send back a short written note. No charge.
              </p>
              <div className="mt-4">
                <HeroInlineForm
                  source="au_canberra_hero_inline"
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
