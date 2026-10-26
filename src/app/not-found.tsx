import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

// Root 404 for every unmatched URL. Ships as out/404.html in the static
// export, and Next adds a noindex robots tag on its own. Server-rendered,
// no client JS: a visitor who lands here should get to a real page fast.

const POPULAR_PAGES = [
  {
    href: '/services/ecommerce-development',
    title: 'Ecommerce development',
    note: 'Shopify, BigCommerce and Magento stores, built or fixed.',
  },
  {
    href: '/services/ai-agent-development',
    title: 'AI agent development',
    note: 'Agents that answer customers, write quotes and handle paperwork.',
  },
  {
    href: '/services/web-application-development',
    title: 'Web application development',
    note: 'Custom portals, dashboards and internal tools.',
  },
  {
    href: '/services/ai-seo',
    title: 'AI SEO',
    note: 'Get named in ChatGPT, Perplexity and Google AI answers.',
  },
  {
    href: '/case-studies',
    title: 'Case studies',
    note: 'Work we shipped, and what changed for the client.',
  },
] as const;

export default function NotFound() {
  return (
    <>
      <SiteHeader locale="us" />
      <main className="bg-fj-cream text-fj-ink">
        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="font-fj-mono text-xs uppercase tracking-[0.14em] text-[#B23E13]">
              Error 404 · Page not found
            </p>
            <h1 className="mt-5 font-fj-display text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-[#1A1A1A] md:text-6xl">
              This page isn&apos;t on our site.
            </h1>
            <p className="mt-6 max-w-xl font-fj-body text-lg leading-relaxed text-[#3A3A38]">
              The link may be old or mistyped. Some browser coupon tools also
              open made-up addresses like <span className="font-fj-mono text-base">/discount/CODE</span>,
              which only work on Shopify stores. Pick one of the pages listed
              here, or tell us what you were looking for.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-[#C94A1A] px-6 py-3.5 font-fj-body text-base font-semibold text-white transition-colors hover:bg-[#B23E13]"
              >
                Go to the homepage
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#1A1A1A]/20 bg-white px-6 py-3.5 font-fj-body text-base font-semibold text-[#1A1A1A] transition-colors hover:border-[#1A1A1A]/50"
              >
                Talk to the founder
              </Link>
            </div>
            <p className="mt-6 font-fj-body text-sm text-[#4A4A45]">
              Bhavesh replies within 24 hours.
            </p>
          </div>

          <nav aria-label="Popular pages" className="lg:col-span-5">
            <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-2">
              <h2 className="px-4 pb-2 pt-4 font-fj-mono text-xs uppercase tracking-[0.14em] text-[#4A4A45]">
                Where most visitors go
              </h2>
              <ul>
                {POPULAR_PAGES.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className="group flex items-start justify-between gap-4 rounded-xl px-4 py-4 transition-colors hover:bg-fj-cream"
                    >
                      <span>
                        <span className="block font-fj-body text-base font-semibold text-[#1A1A1A] group-hover:text-[#C94A1A]">
                          {page.title}
                        </span>
                        <span className="mt-1 block font-fj-body text-sm leading-snug text-[#4A4A45]">
                          {page.note}
                        </span>
                      </span>
                      <ArrowUpRight
                        className="mt-1 h-4 w-4 shrink-0 text-[#4A4A45] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#C94A1A]"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="border-t border-[#1A1A1A]/10 px-4 py-4 font-fj-body text-sm text-[#4A4A45]">
                Also: <Link href="/services" className="font-semibold text-[#1A1A1A] underline-offset-4 hover:underline">all services</Link>,{' '}
                <Link href="/pricing" className="font-semibold text-[#1A1A1A] underline-offset-4 hover:underline">pricing</Link> and the{' '}
                <Link href="/blog" className="font-semibold text-[#1A1A1A] underline-offset-4 hover:underline">blog</Link>.
              </p>
            </div>
          </nav>
        </section>
      </main>
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
