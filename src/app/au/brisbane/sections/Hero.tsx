import HeroInlineForm from '@/components/HeroInlineForm';
import { SERVICE_AREAS } from '../pageData';

/**
 * Hero for /au/brisbane.
 *
 * Targets "web design brisbane" (2,400/mo, AU) as the primary term and "seo agency
 * brisbane" (1,900/mo) as the secondary. The August 2026 measurement put the weakest
 * page-1 incumbent on the web design term at 18 referring domains against our 28 earned,
 * and on the SEO term at 35. Web design is the more winnable of the two, so it leads the
 * H1. This is the reverse of the UK city pages, and it is deliberate.
 *
 * Light background. Static server component, no client JS beyond the lead form.
 */

const PROOF: Array<{ figure: string; label: string }> = [
  { figure: 'Under 2.5s', label: 'Largest Contentful Paint target on every build' },
  { figure: '7 days', label: 'From approved scope to live, up to five pages' },
  { figure: '500+', label: 'Businesses built for since we started' },
  { figure: 'You', label: 'Owner of the site, the domain and every account' },
];

export default function Hero() {
  return (
    <section
      aria-label="Web design and SEO in Brisbane"
      className="w-full bg-white"
      style={{ maxWidth: '100vw' }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 pb-14 pt-10 sm:px-8 md:pb-20 md:pt-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[58%_1fr] lg:gap-14">
          {/* Left: the proposition */}
          <div>
            <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#B23E13]">
              Brisbane, Queensland
            </p>

            <h1 className="mt-4 font-fj-display text-[clamp(32px,5.2vw,54px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-fj-ink">
              Web design and SEO for Brisbane businesses
            </h1>

            <p className="mt-6 font-fj-body text-[18px] leading-[1.65] text-fj-ink md:text-[19px]">
              We build fast websites for Brisbane companies and get them found in Google.
              Senior engineers do the work, you own everything at the end, and we tell you
              which parts of a search plan pay back in weeks and which take quarters.
            </p>

            <p className="mt-4 font-fj-body text-[15.5px] leading-[1.75] text-fj-neutral-600">
              Most of our Brisbane work is for businesses with a real sales process behind the
              site: trades, professional services, clinics, manufacturers and B2B suppliers
              across the CBD, the inner north, and out through Ipswich, Logan and Moreton Bay.
              If your enquiries come from people searching rather than from a shopfront, this
              is the page for you.
            </p>

            <div className="mt-8 rounded-2xl border border-fj-neutral-200 bg-fj-cream p-5 md:p-6">
              <p className="font-fj-display text-[17px] font-bold text-fj-ink">
                Get a free review of your site and your Google listing
              </p>
              <p className="mt-1.5 font-fj-body text-[14px] leading-[1.6] text-fj-neutral-600">
                Send your address. We crawl the site, check your Google Business Profile, and
                send back a short written note on the three biggest problems. No charge.
              </p>
              <div className="mt-4">
                <HeroInlineForm
                  source="au_brisbane_hero_inline"
                  region="au"
                  submitLabel="Get my free review"
                />
              </div>
            </div>
          </div>

          {/* Right: proof and coverage */}
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
