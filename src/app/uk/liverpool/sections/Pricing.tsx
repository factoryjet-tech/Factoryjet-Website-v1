// Static server component. Light section.
//
// Rebuilt 2026-08-25. This used to be a "transparent pricing" table with no
// prices in it, which is the worst of both worlds. It now does the useful job:
// explains the three shapes an SEO engagement can take, what ships in each, and
// who each one suits, so a Liverpool business can work out which one to ask for
// before the call rather than during it.

import ModalCTAButton from '@/components/v2/ModalCTAButton';

type Shape = {
  id: string;
  name: string;
  shape: string;
  bestFor: string;
  ships: string[];
  notFor: string;
};

const SHAPES: Shape[] = [
  {
    id: 'audit',
    name: 'One-off audit',
    shape: 'Fixed piece of work, single delivery, no ongoing commitment',
    bestFor:
      'You have a developer or an in-house marketer who can carry out fixes, and you want to know exactly what is wrong.',
    ships: [
      'Full technical crawl of every URL on the site',
      'Google Search Console history reviewed for drops, penalties and index gaps',
      'Google Business Profile and citation audit',
      'Competitor check against the Liverpool businesses holding your terms',
      'Keyword map showing which page should target which term',
      'A written list of problems ranked by likely impact, with the pages named',
      'A walkthrough call so your developer can ask questions',
    ],
    notFor:
      'Not for you if nobody internally has time to implement it. An audit nobody acts on changes nothing.',
  },
  {
    id: 'project',
    name: 'Fixed-price project',
    shape: 'Defined scope, milestone payments, agreed end date',
    bestFor:
      'You have one specific job: a site migration, a set of new service pages, a structured data rollout, or recovery after a traffic drop.',
    ships: [
      'Written scope agreed before anything starts, with the deliverables listed',
      'Milestones with dates, so you can see progress rather than trust it',
      'All technical work carried out by us, or ticketed for your developer',
      'Content written, reviewed by you, then published',
      'Redirects, canonicals and structured data shipped as part of the build',
      'Handover document covering every change made and why',
    ],
    notFor:
      'Not for you if the goal is open ended, for example "more traffic". That needs a retainer, not a project.',
  },
  {
    id: 'retainer',
    name: 'Monthly retainer',
    shape: 'Rolling monthly work, scoped fresh each month, cancel with notice',
    bestFor:
      'You want compounding growth: new pages, ongoing technical maintenance, mentions earned month after month.',
    ships: [
      'Agreed deliverables each month, written down before the month starts',
      'Ongoing technical maintenance so nothing quietly breaks',
      'New service and area pages written and published',
      'Google Business Profile kept current, with reviews and posts',
      'Outreach for genuine mentions from chambers, partners and local press',
      'One monthly report covering enquiries, clicks, positions and technical health',
      'A shared change log listing every edit made to your site, with dates',
    ],
    notFor:
      'Not for you if you need results inside a month. Search compounds slowly and paid ads will serve you better in that window.',
  },
];

const HONEST: string[] = [
  'Nothing is quoted until we have looked at your site and your Search Console',
  'The quote is written down before work starts, and it does not move mid-project',
  'Cost is driven by four things: how many pages, how competitive your terms are, whether we write the content, and whether we implement or you do',
  'No setup fee dressed up as something else, and no automatic annual uplift',
  'Retainers are scoped month by month, so you never pay for hours you cannot inspect',
];

export default function Pricing() {
  return (
    <section
      id="engagements"
      aria-labelledby="engagements-heading"
      className="w-full bg-fj-cream"
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 md:px-8 md:py-24">
        <div className="max-w-3xl">
          <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#B23E13]">
            How we work together
          </p>
          <h2
            id="engagements-heading"
            className="mt-4 font-fj-display text-3xl font-bold leading-tight tracking-tight text-fj-ink md:text-[42px]"
          >
            Three shapes an engagement can take
          </h2>
          <p className="mt-5 font-fj-body text-lg leading-relaxed text-fj-neutral-600">
            The shape matters more than the number. Pick the wrong one and you
            either pay for work you cannot use, or you buy a report that sits in a
            folder. Here is what each one is for.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {SHAPES.map((s) => (
            <article
              key={s.id}
              className="flex flex-col rounded-2xl border border-fj-neutral-200 bg-white p-7"
            >
              <h3 className="font-fj-display text-xl font-bold text-fj-ink">
                {s.name}
              </h3>
              <p className="mt-2 font-fj-mono text-[12px] uppercase leading-relaxed tracking-[0.08em] text-fj-neutral-400">
                {s.shape}
              </p>
              <p className="mt-4 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                {s.bestFor}
              </p>

              <p className="mt-6 font-fj-body text-[13px] font-semibold uppercase tracking-wide text-fj-ink">
                What ships
              </p>
              <ul className="mt-3 flex-1 space-y-2.5">
                {s.ships.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 font-fj-body text-[14.5px] leading-relaxed text-fj-ink"
                  >
                    <svg
                      aria-hidden="true"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#B23E13"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1 flex-none"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 border-t border-fj-neutral-200 pt-4 font-fj-body text-[14px] leading-relaxed text-fj-neutral-600">
                {s.notFor}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-fj-neutral-200 bg-white p-7 md:p-10">
          <h3 className="font-fj-display text-2xl font-bold text-fj-ink">
            How quoting works
          </h3>
          <ul className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
            {HONEST.map((h) => (
              <li
                key={h}
                className="flex gap-3 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600"
              >
                <span
                  aria-hidden="true"
                  className="mt-[9px] h-1.5 w-1.5 flex-none rounded-full bg-[#F05A28]"
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <ModalCTAButton
              label="Get a written quote"
              region="uk"
              modalVariant="default"
              btnVariant="primary-light"
            />
            <span className="font-fj-body text-sm text-fj-neutral-600">
              Free, no commitment, and you keep the audit notes either way.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
