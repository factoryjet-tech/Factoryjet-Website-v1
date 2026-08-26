/**
 * Answer-first block. Sits directly under the hero.
 *
 * Purpose: give a reader, and an answer engine, the whole proposition inside the first
 * screen after the headline, before any storytelling. The opening paragraph is written to
 * stand alone if it is the only thing ever quoted.
 *
 * Static server component. No client JS, no hooks.
 */

const AT_A_GLANCE: Array<{ term: string; detail: string }> = [
  {
    term: 'Where we work',
    detail:
      'Brisbane City and the inner suburbs, out through Chermside and Mount Gravatt, and across the wider South East: Ipswich, Logan, Redlands and Moreton Bay.',
  },
  {
    term: 'Who it is for',
    detail:
      'Businesses with a sales process behind the website: trades, professional services, clinics, manufacturers, B2B suppliers and independent retailers.',
  },
  {
    term: 'How it starts',
    detail:
      'A free review of your site and your Google Business Profile, then a written scope. Nothing is charged before you have seen that scope.',
  },
  {
    term: 'What you own',
    detail:
      'Everything. The site, the content, the domain, and admin access to every account we touch, from day one and after you leave.',
  },
  {
    term: 'What we will not do',
    detail:
      'Buy links, publish thin suburb pages, lock you into a monthly fee to keep pages online, or promise a position on a date.',
  },
];

const FIRST_NINETY: string[] = [
  'A technical review of the site written in plain English, with each fault ranked by what it is costing you rather than by how hard it is to fix.',
  'Google Business Profile claimed, verified, categorised properly, and set to the parts of South East Queensland you genuinely cover.',
  'Business name, address and phone number made identical everywhere they appear, including the old directory listings you have forgotten about.',
  'Search Console and Analytics connected properly, so the reporting comes from your own data rather than a third-party estimate.',
  'A shortlist of Brisbane search terms scored on volume, commercial value, and how strong the sites already ranking actually are.',
  'The first service pages rebuilt around what Brisbane buyers type, not around your internal job titles.',
];

export default function AnswerFirst() {
  return (
    <section
      id="what-we-do"
      aria-label="What a Brisbane web design and SEO agency does"
      className="w-full bg-fj-cream"
      style={{ maxWidth: '100vw' }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-12 sm:px-8 md:py-20">
        <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#B23E13]">
          Answer first
        </p>

        <div className="mt-4 grid grid-cols-1 gap-10 lg:grid-cols-[57%_1fr] lg:gap-16">
          <div>
            <h2 className="font-fj-display text-[clamp(24px,3.2vw,38px)] font-bold leading-[1.12] tracking-[-0.02em] text-fj-ink">
              What a web design and SEO agency in Brisbane actually does
            </h2>

            <p className="mt-5 font-fj-body text-[17px] leading-[1.7] text-fj-ink md:text-[18px]">
              A web design and SEO agency in Brisbane builds you a site that loads quickly and
              explains what you sell, then gets that site found by people searching for it in
              this city. In practice that is three jobs done in order: fix the technical faults
              that stop Google reading the site, build pages that answer what Brisbane buyers
              type and connect them to a correct Google Business Profile, then earn mentions
              from real Queensland sites so Google treats you as a credible local option.
              FactoryJet does all three, and reports on enquiries rather than on rankings.
            </p>

            <p className="mt-4 font-fj-body text-[15px] leading-[1.75] text-fj-neutral-600">
              The order matters more than most agencies admit. Publishing content on a site
              Google struggles to crawl is money spent on pages nobody will be shown. Chasing
              links before the map listing is correct is effort spent on the slowest lever
              first. So we sequence the work by what pays back soonest, and we say out loud
              which parts take a couple of quarters rather than a couple of weeks.
            </p>

            <h3 className="mt-10 font-fj-display text-[20px] font-bold text-fj-ink md:text-[22px]">
              What happens in the first ninety days
            </h3>
            <ul className="mt-4 space-y-3">
              {FIRST_NINETY.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 font-fj-body text-[15px] leading-[1.65] text-fj-neutral-600"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-[6px] w-[6px] flex-shrink-0 rounded-full bg-[#B23E13]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside>
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 md:p-7">
              <h3 className="font-fj-display text-[18px] font-bold text-fj-ink">
                Brisbane web design and SEO at a glance
              </h3>
              <dl className="mt-5 space-y-5">
                {AT_A_GLANCE.map((row) => (
                  <div key={row.term}>
                    <dt className="font-fj-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#B23E13]">
                      {row.term}
                    </dt>
                    <dd className="mt-1.5 font-fj-body text-[14.5px] leading-[1.6] text-fj-neutral-600">
                      {row.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <p className="mt-4 font-fj-body text-[13px] leading-[1.6] text-fj-neutral-600">
              No price figures appear on this page on purpose. Brisbane quotes vary by how much
              repair a site needs and how much content already exists, and a number posted here
              would be wrong for most readers. You get yours in writing after the free review.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
