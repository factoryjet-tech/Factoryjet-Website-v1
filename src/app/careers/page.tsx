import type { Metadata } from 'next';
import Link from 'next/link';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import { ROLES } from '@/data/careers';

/**
 * /careers: open roles. Spec: docs/HIRING-PIPELINE-SPEC.md section 4.
 *
 * noindex, nofollow, and deliberately absent from every sitemap, menu, footer and
 * llms.txt: this page states the Bangalore office, which commercial pages never do.
 * Reached only from job-board links. Do NOT add a robots.txt Disallow: Google has to
 * crawl the page to see the noindex. public/_headers adds X-Robots-Tag as well.
 */
export const metadata: Metadata = {
  title: 'Careers | FactoryJet',
  description: 'Open roles at FactoryJet.',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  alternates: {
    canonical: 'https://factoryjet.com/careers',
  },
};

export default function CareersPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-fj-cream">
        <section className="mx-auto max-w-[1180px] px-6 pb-20 pt-16 md:px-8 lg:pt-20">
          <p className="fj-eyebrow">Careers</p>
          <h1 className="mt-4 max-w-[760px] font-fj-display text-[2.25rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-fj-ink md:text-[3rem]">
            Work on AI search, AI agents and e-commerce for clients in the US, UK, Europe, Canada and Australia.
          </h1>
          <p className="mt-5 max-w-[620px] font-fj-body text-[1.0625rem] leading-relaxed text-fj-ink/75">
            Small team, work that ships the same week, and a founder you report to directly.
          </p>

          <h2 className="mt-14 font-fj-display text-[1.375rem] font-extrabold tracking-[-0.02em] text-fj-ink">
            Open roles
          </h2>
          <ul className="mt-5 max-w-[880px] divide-y divide-fj-ink/10 border-y border-fj-ink/10">
            {ROLES.map((role) => (
              <li key={role.slug}>
                <Link
                  href={`/careers/${role.slug}`}
                  className="group flex flex-col gap-2 py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 md:flex-row md:items-center md:justify-between"
                >
                  <span>
                    <span className="block font-fj-display text-[1.25rem] font-extrabold tracking-[-0.02em] text-fj-ink group-hover:underline group-hover:underline-offset-4">
                      {role.title} <span className="font-fj-mono text-[0.75rem] font-medium uppercase tracking-[0.12em] text-fj-ink/60">({role.tag})</span>
                    </span>
                    <span className="mt-1 block font-fj-body text-[0.9375rem] text-fj-ink/70">
                      {role.location} &middot; {role.type}
                    </span>
                  </span>
                  <span className="font-fj-body text-[0.9375rem] font-semibold text-fj-ink">
                    View role and apply &rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
