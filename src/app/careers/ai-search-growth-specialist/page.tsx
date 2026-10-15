import type { Metadata } from 'next';
import Link from 'next/link';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import { roleBySlug } from '@/data/careers';
import ApplicationForm from '@/components/careers/ApplicationForm';

/**
 * /careers/ai-search-growth-specialist: role page with the application form.
 * Spec: docs/HIRING-PIPELINE-SPEC.md section 4. Applications post to
 * functions/api/job-application.js, which saves them as ERPNext Job Applicants
 * against Job Opening HR-OPN-2026-0001.
 *
 * noindex, nofollow, no sitemap, no menu or footer link, not in llms.txt. It states
 * the Bangalore office. Job boards link here with ?source=linkedin (naukri, indeed...).
 */
const SLUG = 'ai-search-growth-specialist';
const role = roleBySlug(SLUG)!;

export const metadata: Metadata = {
  title: `${role.title} (${role.tag}) | Careers | FactoryJet`,
  description: role.summary,
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  alternates: {
    canonical: 'https://factoryjet.com/careers/ai-search-growth-specialist',
  },
};

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 font-fj-body text-[1rem] leading-relaxed text-fj-ink/80">
          <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fj-ink/40" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const H2 = 'font-fj-display text-[1.5rem] font-extrabold tracking-[-0.02em] text-fj-ink md:text-[1.75rem]';

export default function RolePage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-fj-cream">
        <div className="mx-auto max-w-[1180px] px-6 pt-8 md:px-8">
          <Link href="/careers" className="font-fj-body text-[0.875rem] font-medium text-fj-ink/70 underline-offset-4 hover:underline">
            &larr; All roles
          </Link>
        </div>

        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 px-6 pb-16 pt-8 md:px-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
          {/* Role text, 60% */}
          <article>
            <p className="fj-eyebrow">Careers &middot; {role.type}</p>
            <h1 className="mt-4 font-fj-display text-[2.25rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-fj-ink md:text-[3rem]">
              {role.title} <span className="whitespace-nowrap">({role.tag})</span>
            </h1>
            <p className="mt-5 font-fj-body text-[1.125rem] leading-relaxed text-fj-ink/80">{role.summary}</p>

            <div className="mt-8 space-y-4">
              {role.intro.map((p) => (
                <p key={p} className="font-fj-body text-[1rem] leading-relaxed text-fj-ink/80">{p}</p>
              ))}
            </div>

            <h2 className={`${H2} mt-12`}>What you will do</h2>
            <Bullets items={role.work} />

            <h2 className={`${H2} mt-12`}>A normal week</h2>
            <Bullets items={role.week} />

            <h2 className={`${H2} mt-12`}>Must have</h2>
            <p className="mt-3 font-fj-body text-[1rem] leading-relaxed text-fj-ink/70">
              Each one comes with how we check it, so you know exactly what to show us.
            </p>
            <ul className="mt-5 divide-y divide-fj-ink/10 rounded-2xl border border-fj-ink/10 bg-white">
              {role.mustHave.map((m) => (
                <li key={m.need} className="p-5">
                  <p className="font-fj-body text-[1rem] font-semibold leading-snug text-fj-ink">{m.need}</p>
                  <p className="mt-1.5 font-fj-body text-[0.9375rem] leading-relaxed text-fj-ink/70">{m.check}</p>
                </li>
              ))}
            </ul>

            <h2 className={`${H2} mt-12`}>Good to have</h2>
            <Bullets items={role.goodToHave} />

            <h2 className={`${H2} mt-12`}>Details</h2>
            <Bullets items={role.details} />
          </article>

          {/* Summary card, 40%, sticky on desktop */}
          <aside className="lg:pt-14">
            <div className="rounded-2xl border border-fj-ink/10 bg-white p-6 lg:sticky lg:top-24">
              <dl className="space-y-4">
                {[
                  ['Location', role.location],
                  ['Type', role.type],
                  ['Salary', role.salary],
                  ['Reports to', 'The founder'],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-fj-mono text-[0.6875rem] uppercase tracking-[0.12em] text-fj-ink/60">{k}</dt>
                    <dd className="mt-1 font-fj-body text-[0.9375rem] font-medium leading-snug text-fj-ink">{v}</dd>
                  </div>
                ))}
              </dl>
              <a
                href="#apply"
                className="mt-6 flex w-full items-center justify-center rounded-xl bg-fj-ink px-5 py-3.5 font-fj-body text-[1rem] font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Apply for this role
              </a>
              <p className="mt-3 font-fj-body text-[0.8125rem] leading-relaxed text-fj-ink/70">
                About 10 minutes. No account needed. You will hear from us within 7 days either way.
              </p>
            </div>
          </aside>
        </div>

        <section id="apply" className="scroll-mt-24 border-t border-fj-ink/10 bg-white">
          <div className="mx-auto max-w-[1180px] px-6 py-16 md:px-8">
            <div className="max-w-[760px]">
              <p className="fj-eyebrow">Apply</p>
              <h2 className={`${H2} mt-3`}>Apply for {role.title}</h2>
              <p className="mt-3 font-fj-body text-[1rem] leading-relaxed text-fj-ink/70">
                One page. Fields marked with a star are required.
              </p>
              <ApplicationForm roleSlug={role.slug} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
