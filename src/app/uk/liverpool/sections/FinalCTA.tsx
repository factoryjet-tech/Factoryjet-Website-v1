// Static server component. Light closing CTA.
//
// Rebuilt 2026-08-25. The previous version put 15px white body text on a solid
// #F05A28 background, which measures well under the WCAG AA bar, and it carried
// a "beat your existing agency's price by 50 to 60%" claim that breaks the
// positioning rules. It also linked to /uk/ecommerce, which is not a route.

import Link from 'next/link';
import ModalCTAButton from '@/components/v2/ModalCTAButton';


const SERVICES = [
  { name: 'SEO', slug: 'seo' },
  { name: 'Local SEO', slug: 'local-seo' },
  { name: 'SEO audit', slug: 'seo-audit' },
  { name: 'AI SEO', slug: 'ai-seo' },
  { name: 'E-commerce SEO', slug: 'ecommerce-seo' },
  { name: 'Shopify SEO', slug: 'shopify-seo' },
  { name: 'Web design', slug: 'web-design' },
  { name: 'E-commerce development', slug: 'ecommerce-development' },
  { name: 'AI agents', slug: 'ai-agents' },
];

const WHAT_HAPPENS: string[] = [
  'You tell us what you sell and which service you want more enquiries for',
  'We look at your site live on the call, on a phone, and say what we see',
  'You get a written summary of the main problems within two working days',
  'If search is not the right channel for you, we say so and you owe nothing',
];

export default function FinalCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="final-cta-heading"
      className="w-full border-t border-fj-neutral-200 bg-fj-cream"
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 md:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[55%_1fr] lg:gap-14">
          <div>
            <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#B23E13]">
              Start here
            </p>
            <h2
              id="final-cta-heading"
              className="mt-4 font-fj-display text-3xl font-bold leading-tight tracking-tight text-fj-ink md:text-[42px]"
            >
              Find out what is holding your Liverpool site back
            </h2>
            <p className="mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600">
              A free site review, no obligation, and you keep the notes whether you
              hire us or not. It takes about twenty minutes.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <ModalCTAButton
                label="Get a free site review"
                region="uk"
                modalVariant="default"
                btnVariant="primary-light"
              />
              <a
                href="mailto:connect@factoryjet.com"
                className="font-fj-body text-[15px] font-semibold text-[#B23E13] underline underline-offset-4"
              >
                connect@factoryjet.com
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-fj-neutral-200 bg-white p-7 md:p-8">
            <h3 className="font-fj-display text-xl font-bold text-fj-ink">
              What happens next
            </h3>
            <ol className="mt-5 space-y-3">
              {WHAT_HAPPENS.map((w, i) => (
                <li
                  key={w}
                  className="flex gap-3 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600"
                >
                  <span className="font-fj-mono text-[13px] font-semibold text-[#B23E13]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{w}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Internal links */}
        <div className="mt-16 border-t border-fj-neutral-200 pt-10">
          <nav aria-label="FactoryJet UK services">
            <h3 className="font-fj-mono text-xs font-semibold uppercase tracking-[0.16em] text-fj-neutral-400">
              UK services
            </h3>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/uk/${s.slug}`}
                    className="font-fj-body text-[15px] font-medium text-fj-ink underline-offset-4 hover:text-[#B23E13] hover:underline"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </div>
    </section>
  );
}
