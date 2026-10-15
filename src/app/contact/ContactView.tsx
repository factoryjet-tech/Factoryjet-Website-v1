import LeadFormInline from '@/components/LeadFormInline'
import ContactMethods from './ContactMethods'

/* FAQ. This one array feeds both the visible accordion and the FAQPage JSON-LD
   below, so the two cannot drift. Each answer opens with a fact that stands on
   its own. No em dashes anywhere.
   Sources for the claims (checked 2026-10-12):
   - 24-hour founder reply, free first call: already on this page and /thank-you.
   - Fixed price in writing after a scoping call: approved wording, 2026-09-30.
   - Working software on the buyer's own data before signing: homepage FAQ Q42.
   - 7 days for sites of up to five pages, and the 3-5 / 5-8 / 8-14 week ranges:
     confirmed 2026-09-24, same figures as /services/ecommerce-development. */
const FAQS: { q: string; a: string }[] = [
  {
    q: 'What happens after I send the form?',
    a: 'Bhavesh Barot, the founder of FactoryJet, reads your request himself and replies within 24 hours, often the same day. The next step is a free call to scope the work. After that call you get a fixed price in writing. For a store or an AI agent, we show you working software built on your own data before you sign.',
  },
  {
    q: 'Is the first call free?',
    a: 'Yes. The first call is free and commits you to nothing. We use it to understand what you want built and to say what we would do. Sometimes that is a smaller job than you expected.',
  },
  {
    q: 'Will I be talking to a salesperson?',
    a: 'No. Your first reply comes from Bhavesh Barot, the founder, and the first call is with him too. He also oversees your build.',
  },
  {
    q: 'What can I contact FactoryJet about?',
    a: 'FactoryJet does four kinds of work. We build online stores on platforms such as Shopify, Adobe Commerce, BigCommerce and WooCommerce. We build AI agents, which are software that does one job for your team, such as answering customer questions or preparing quotes. We build websites. We also work on AI search, which means helping your company show up in answers from tools such as ChatGPT.',
  },
  {
    q: 'How long does a build take?',
    a: 'A website of up to five pages is delivered in 7 days. An online store with a custom design on Shopify or WooCommerce takes 3 to 5 weeks. A store with subscriptions, wholesale (B2B) pricing or a move from another platform takes 5 to 8 weeks. A custom storefront, a marketplace or a custom platform takes 8 to 14 weeks. Larger stores and custom builds, AI agents included, get a dated plan before any work starts.',
  },
  {
    q: 'Do you work with US businesses?',
    a: 'Yes. US companies are our main focus. We work remotely with US clients and schedule calls in US business hours. We also take on projects in the UK and Australia.',
  },
  {
    q: 'What if I am not sure what I need yet?',
    a: 'Send the form anyway and describe the problem in plain words. On the free call we work out what fits. That could be a new store, an AI agent, a website, or a fix to what you already have.',
  },
]

/* Hero facts, rendered as a plain bulleted list. Until 2026-10-12 these were
   rounded bordered chips styled like the selectable service chips in the form
   beside them. Plain text is a tidy-up so nothing here looks like a control.
   The 24-hour reply promise now sits in the form subheading, because on a
   phone the form comes before this list. */
const FACTS: string[] = [
  '500+ businesses served.',
  'Bhavesh Barot, our founder, reads every request himself.',
  '7-day delivery for websites of up to five pages.',
]

export default function ContactView() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  /* page.tsx already wraps this view in <main>, so this returns a fragment.
     A second <main> here nested two main landmarks inside each other. */
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      {/* ── Hero with the lead form ─────────────────────────────────────── */}
      <section
        style={{ background: 'radial-gradient(110% 80% at 80% -10%, #FFF4EF 0%, #ffffff 55%)' }}
      >
        {/* Order on small screens (below md): 1 short H1, 2 the form, 3 the
            supporting copy and facts. A phone visitor who came to send a message
            reaches the form without scrolling past the copy.
            From md up nothing moves: the wrapper below is one block in the left
            column and the form is the right column, as before. The wrapper is
            `display: contents` only below md, which turns its two children into
            grid items so the form can be ordered between them. */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 px-4 pb-12 pt-6 sm:px-6 md:min-h-[calc(100vh-72px)] md:grid-cols-2 md:gap-12 md:py-16 lg:px-8">
          <div className="contents md:block">
            <div className="order-1">
              <p className="mb-4 hidden text-[13px] font-bold uppercase tracking-[0.14em] text-[#B23E13] md:block">
                Contact FactoryJet
              </p>
              <h1 className="font-fj-display text-[28px] font-extrabold leading-[1.04] tracking-[-0.03em] text-[#0A0F1C] sm:text-4xl md:mb-4 md:text-5xl">
                Tell us about your project.
              </h1>
            </div>

            <div className="order-3 mt-4 md:mt-0">
              <p className="mb-7 max-w-md text-lg leading-relaxed text-slate-500">
                FactoryJet builds online stores and AI agents. An AI agent is software we build to
                do one job for your team, such as answering customer questions. We also build
                websites and help companies show up in AI search tools such as ChatGPT.
              </p>

              <ul className="mb-7 max-w-md list-disc space-y-1.5 pl-5 text-[15px] leading-snug text-slate-700 marker:text-slate-400">
                {FACTS.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>

              <p className="text-[13px] text-slate-500">
                The first call is free and commits you to nothing.
              </p>
            </div>
          </div>

          <div id="contact-form" className="order-2 scroll-mt-24 md:order-none">
            <LeadFormInline
              source="contact_page"
              collectionName="contactpage"
              region="us"
              heading="Talk to the founder"
              subheading="Bhavesh replies within 24 hours. Name and email will do."
            />
          </div>
        </div>
      </section>

      {/* ── Other ways to reach us ──────────────────────────────────────── */}
      <ContactMethods />

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 text-center">
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.14em] text-[#B23E13]">
              Common questions
            </p>
            <h2 className="font-fj-display text-2xl font-extrabold tracking-[-0.02em] text-[#0A0F1C] sm:text-3xl">
              What to expect when you contact us
            </h2>
          </div>

          <div>
            {FAQS.map((f, i) => (
              <details
                key={f.q}
                open={i === 0}
                className="group border-b border-slate-100 py-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-[#0A0F1C] [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    aria-hidden="true"
                    className="text-2xl font-normal text-[#F05A28] transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-500">{f.a}</p>
              </details>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            If your question is not here,{' '}
            <a href="#contact-form" className="font-semibold text-[#B23E13]">
              ask it in the form above
            </a>
            .
          </p>
        </div>
      </section>
    </>
  )
}
