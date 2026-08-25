import { CITATIONS } from '../pageData';

/**
 * The Canberra market section. Distinct from the other three city pages: this one is
 * about how a public-sector-adjacent buyer behaves, because that is the thing that
 * genuinely changes the work in this city.
 */

const SECTORS: Array<{ name: string; note: string }> = [
  {
    name: 'Associations and peak bodies',
    note: 'Concentrated in Barton and Civic. Their site does three unrelated jobs at once: recruit members, publish advocacy positions, and prove legitimacy to a department. Most try to do all three on the home page and do none of them well.',
  },
  {
    name: 'Public-sector suppliers',
    note: 'Consultancies, IT firms, training providers and facilities businesses. The website is read during a procurement check rather than browsed, so evidence, currency and specificity matter far more than persuasion.',
  },
  {
    name: 'Not-for-profits and charities',
    note: 'Two audiences with opposite needs: people seeking help, who need plain language and an obvious next step, and funders, who need governance and impact evidence. These deserve separate paths.',
  },
  {
    name: 'Professional services',
    note: 'Accountants, lawyers and advisers across Civic and Woden. A conventional local search market, and the one where Canberra thin competition is easiest to take advantage of.',
  },
  {
    name: 'Trades and home services',
    note: 'Across Belconnen, Tuggeranong and Gungahlin, plus Queanbeyan. Phone-first buyers, Maps-driven, where a complete Google Business Profile does more work than the website.',
  },
];

export default function LocalMarket() {
  const abs = CITATIONS[1];

  return (
    <section
      id="canberra-market"
      aria-label="The Canberra market"
      className="w-full bg-white"
      style={{ maxWidth: '100vw' }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 sm:px-8 md:py-24">
        <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#B23E13]">
          The local market
        </p>

        <h2 className="mt-4 max-w-[800px] font-fj-display text-[clamp(24px,3.2vw,38px)] font-bold leading-[1.12] tracking-[-0.02em] text-fj-ink">
          Canberra buyers check before they browse
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[55%_1fr] lg:gap-16">
          <div>
            <p className="font-fj-body text-[16.5px] leading-[1.7] text-fj-ink">
              Nationally, 2,814,778 businesses were actively trading at 30 June 2026, with a
              16.9% entry rate and a 13.8% exit rate across the year.
              <sup className="ml-0.5 font-fj-mono text-[11px] text-[#B23E13]">[2]</sup> Canberra
              is a small slice of that, and an unusual one. A large share of the organisations
              here do not sell to consumers at all. They sell to departments, to members, or to
              funders.
            </p>

            <p className="mt-4 font-fj-body text-[15px] leading-[1.75] text-fj-neutral-600">
              That changes the job of the website completely. A consumer visits a site to be
              persuaded. A Canberra buyer visits to verify. They are checking whether your
              organisation is real, current, credentialled and still operating, usually before
              any conversation happens and often as part of a formal process. A site that reads
              as marketing rather than as evidence performs badly with that reader, no matter
              how good the marketing is.
            </p>

            <p className="mt-4 font-fj-body text-[15px] leading-[1.75] text-fj-neutral-600">
              The most common failure we see here is staleness. A news page whose last item is
              from two years ago, a team page listing people who have left, a document library
              of scanned files. Each of those quietly signals that the organisation may not be
              active. For a consumer site that is untidy. For an organisation being assessed, it
              is disqualifying, and it is cheap to fix.
            </p>

            <h3 className="mt-10 font-fj-display text-[20px] font-bold text-fj-ink md:text-[22px]">
              The search side, and why it is unusually open right now
            </h3>
            <p className="mt-4 font-fj-body text-[15px] leading-[1.75] text-fj-neutral-600">
              Canberra had the thinnest competition of any Australian market we measured in
              August 2026. On the main local SEO term, the weakest organisation holding a
              first-page position had links from seven other websites. On the main web design
              term it was twenty one. Both of those are inside reach of a well-built new site,
              which is not true in any other capital. Google also showed no AI Overview on
              either term, so an ordinary ranking still earns the visit.
            </p>
          </div>

          <aside>
            <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
              <h3 className="font-fj-display text-[18px] font-bold text-fj-ink">
                Who we build for in Canberra
              </h3>
              <dl className="mt-5 space-y-5">
                {SECTORS.map((s) => (
                  <div key={s.name}>
                    <dt className="font-fj-display text-[15px] font-bold text-fj-ink">
                      {s.name}
                    </dt>
                    <dd className="mt-1.5 font-fj-body text-[14px] leading-[1.65] text-fj-neutral-600">
                      {s.note}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 border-t border-fj-neutral-200 pt-4 font-fj-body text-[13px] leading-[1.6] text-fj-neutral-600">
                Source [2]: {abs.source}, {abs.title}. Figures read from the release dated
                18 August 2026.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
