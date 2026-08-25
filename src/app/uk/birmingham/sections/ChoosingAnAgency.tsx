/**
 * How to choose an SEO agency in Birmingham.
 *
 * Replaces a comparison table that claimed a "3.8s average LCP" for unnamed Birmingham
 * agencies and a "7-day delivery SLA" that contradicted the timelines given in the FAQ
 * below. Neither number was sourced, and inventing statistics about competitors is not a
 * defensible thing to publish. This version gives the reader the questions instead, which
 * is more useful and can be checked against us as easily as against anyone else.
 *
 * Static server component. No client JS, no hooks.
 */

interface Question {
  n: string;
  ask: string;
  good: string;
  bad: string;
}

const QUESTIONS: Question[] = [
  {
    n: '01',
    ask: 'Which search terms will you go after, and how strong are the sites already ranking for them?',
    good: 'A named shortlist with search volume, an estimate of commercial value, and a count of how many links the current top ten have.',
    bad: 'A promise to target "all relevant keywords", or a list of terms with no assessment of who you are up against.',
  },
  {
    n: '02',
    ask: 'Who owns the Google Business Profile, the website and the Analytics account at the end?',
    good: 'You do, all of it, and you have admin access from the first week rather than at the end.',
    bad: 'The agency holds the accounts and gives you a login, or the site sits on a platform only they can edit.',
  },
  {
    n: '03',
    ask: 'What will you refuse to do?',
    good: 'A clear answer covering paid links, guaranteed positions and bulk auto-written content.',
    bad: 'Nothing comes to mind, or a vague reassurance that everything they do is "white hat".',
  },
  {
    n: '04',
    ask: 'What does month one look like, in specific tasks?',
    good: 'A named list: crawl, fix, claim the profile, correct the listings, set up measurement, agree the term list.',
    bad: 'Onboarding, strategy and discovery, with the first real deliverable somewhere in month two.',
  },
  {
    n: '05',
    ask: 'Who is actually doing the work, and can I speak to them?',
    good: 'The person who scoped it runs it, and you can talk to whoever is editing your site.',
    bad: 'An account manager fronts everything and the work happens somewhere you are not told about.',
  },
  {
    n: '06',
    ask: 'How will you report, and what is the first number on the report?',
    good: 'Enquiries first, then the changes made, then rankings, with links to evidence you can open.',
    bad: 'A long automated dashboard of impressions and positions that never mentions a phone call.',
  },
  {
    n: '07',
    ask: 'What happens if six months in it has not worked?',
    good: 'A named review point, a willingness to change direction, and an exit you can take without penalty.',
    bad: 'A twelve month minimum term and an explanation that SEO simply takes time.',
  },
  {
    n: '08',
    ask: 'Can you show me a Birmingham or West Midlands client I can ring?',
    good: 'A real reference, or a case study with numbers and a named contact who agreed to be listed.',
    bad: 'Logos on a wall with no story attached, or client names they cannot let you contact.',
  },
];

const RED_FLAGS: string[] = [
  'A guaranteed number one position, or a guaranteed number of enquiries.',
  'A price quoted before anyone has looked at your website.',
  'Reporting that only ever shows terms you already ranked for.',
  'Content published without anyone at your company reading it first.',
  'A refusal to name the sites your links will come from.',
  'Ownership of your domain, hosting or Business Profile held by the agency.',
  'A twelve month contract presented as standard and non-negotiable.',
];

export default function ChoosingAnAgency() {
  return (
    <section
      id="choosing"
      aria-label="How to choose an SEO agency in Birmingham"
      className="w-full bg-white"
      style={{ maxWidth: '100vw' }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 sm:px-8 md:py-24">
        <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#B23E13]">
          Buyer&rsquo;s checklist
        </p>
        <h2 className="mt-4 max-w-[820px] font-fj-display text-[clamp(24px,3.2vw,38px)] font-bold leading-[1.12] tracking-[-0.02em] text-fj-ink">
          Eight questions to ask any Birmingham SEO agency, including us
        </h2>
        <p className="mt-5 max-w-[760px] font-fj-body text-[16px] leading-[1.7] text-fj-neutral-600">
          Most bad SEO engagements are visible in the first sales call, if you know what to
          ask. Take this list to every agency you are considering. If our answers are worse
          than someone else&rsquo;s, hire them.
        </p>

        <ol className="mt-10 space-y-4">
          {QUESTIONS.map((q) => (
            <li
              key={q.n}
              className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 md:p-7"
            >
              <div className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="mt-[3px] flex-shrink-0 font-fj-mono text-[13px] font-bold tabular-nums text-[#B23E13]"
                >
                  {q.n}
                </span>
                <div className="min-w-0">
                  <h3 className="font-fj-display text-[17px] font-bold leading-snug text-fj-ink md:text-[19px]">
                    {q.ask}
                  </h3>
                  <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6">
                    <li className="font-fj-body text-[14.5px] leading-[1.6] text-fj-neutral-600">
                      <span className="font-fj-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#B23E13]">
                        A good answer
                      </span>
                      <span className="mt-1.5 block">{q.good}</span>
                    </li>
                    <li className="font-fj-body text-[14.5px] leading-[1.6] text-fj-neutral-600">
                      <span className="font-fj-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-fj-neutral-400">
                        Walk away from
                      </span>
                      <span className="mt-1.5 block">{q.bad}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 md:p-8">
          <h3 className="font-fj-display text-[19px] font-bold text-fj-ink md:text-[21px]">
            Seven things that should end the conversation
          </h3>
          <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-2">
            {RED_FLAGS.map((f) => (
              <li
                key={f}
                className="flex gap-3 font-fj-body text-[14.5px] leading-[1.6] text-fj-neutral-600"
              >
                <span
                  aria-hidden="true"
                  className="mt-[2px] flex-shrink-0 font-fj-mono text-[13px] font-bold text-[#B23E13]"
                >
                  &times;
                </span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
