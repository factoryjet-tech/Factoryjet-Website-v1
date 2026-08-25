/**
 * Answer-first block. Sits directly under the hero.
 *
 * Purpose: give a reader (and an answer engine) the whole proposition inside the first
 * screen after the headline, before any storytelling. The opening paragraph is written to
 * stand alone if it is the only thing ever quoted.
 *
 * Static server component. No client JS, no hooks.
 */

const AT_A_GLANCE: Array<{ term: string; detail: string }> = [
  {
    term: 'Where we work',
    detail:
      'Birmingham city centre, the wider city, and the West Midlands boroughs around it: Solihull, Sandwell, Dudley, Walsall and Wolverhampton.',
  },
  {
    term: 'Who it is for',
    detail:
      'Businesses with a real sales process behind the website: professional services, trades, manufacturers, B2B suppliers and independent retailers.',
  },
  {
    term: 'How it starts',
    detail:
      'A free review of your site and your Google Business Profile, then a written scope. Nothing is charged before you have seen the scope.',
  },
  {
    term: 'How it is priced',
    detail:
      'A one-off audit as a fixed price, repair work as fixed-price milestones, and ongoing content and link building as a monthly retainer.',
  },
  {
    term: 'What you own',
    detail:
      'Everything. The pages, the content, the fixes, and admin access to every account we touch, from day one and after you leave.',
  },
];

const FIRST_NINETY: string[] = [
  'A full technical audit of the site, written in plain English, with every fault ranked by what it costs you.',
  'Google Business Profile claimed, corrected and categorised, with service areas set to the parts of Birmingham you actually cover.',
  'Business name, address and phone number made identical everywhere they appear online, including the old listings you have forgotten about.',
  'Search Console and Analytics connected properly, so the reporting comes from your data rather than from a third-party estimate.',
  'A shortlist of search terms scored on volume, commercial value and how strong the sites already ranking are.',
  'The first service pages rebuilt around what Birmingham buyers actually type, not around your internal job titles.',
];

export default function SeoAnswerFirst() {
  return (
    <section
      id="what-we-do"
      aria-label="What a Birmingham SEO agency does"
      className="w-full bg-fj-cream"
      style={{ maxWidth: '100vw' }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 sm:px-8 md:py-24">
        <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#B23E13]">
          Answer first
        </p>

        <div className="mt-4 grid grid-cols-1 gap-10 lg:grid-cols-[57%_1fr] lg:gap-16">
          {/* Left: the extractable answer */}
          <div>
            <h2 className="font-fj-display text-[clamp(24px,3.2vw,38px)] font-bold leading-[1.12] tracking-[-0.02em] text-fj-ink">
              What an SEO agency in Birmingham actually does
            </h2>

            <p className="mt-5 font-fj-body text-[17px] leading-[1.7] text-fj-ink md:text-[18px]">
              An SEO agency in Birmingham gets your business found by people searching for what
              you sell in this city. That means three things: repairing the technical faults
              that stop Google reading your site, building pages that answer what Birmingham
              buyers type in and matching them to a correct Google Business Profile, then
              earning mentions from real West Midlands sites so Google treats you as a credible
              local option. FactoryJet does all three, in that order, and reports on enquiries
              rather than on rankings.
            </p>

            <p className="mt-4 font-fj-body text-[15px] leading-[1.75] text-fj-neutral-600">
              The order matters more than most agencies admit. Publishing content on a site
              Google struggles to crawl is money spent on a page nobody will be shown. Chasing
              links before the map listing is correct is effort spent on the slowest lever
              first. So we sequence the work by what pays back soonest for a Birmingham
              business, and we say out loud which parts will take a couple of quarters rather
              than a couple of weeks.
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

          {/* Right: at a glance */}
          <aside>
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 md:p-7">
              <h3 className="font-fj-display text-[18px] font-bold text-fj-ink">
                Birmingham SEO at a glance
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
              No price figures appear on this page on purpose. Birmingham quotes vary by how
              much repair work a site needs, and a number posted here would be wrong for most
              readers. You get yours in writing after the free review.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
