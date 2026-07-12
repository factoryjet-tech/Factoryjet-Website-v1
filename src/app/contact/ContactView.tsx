import LeadFormInline from '@/components/LeadFormInline'
import ContactMethods from './ContactMethods'

/* Trimmed FAQ (Bhavesh approved ~6 on 2026-06-18). Each answer opens with a
   self-contained, citable fact for AI engines. No em dashes anywhere. */
const FAQS: { q: string; a: string }[] = [
  {
    q: 'How quickly will I hear back?',
    a: 'You will hear back within 24 hours, and usually the same day. Bhavesh reviews every request himself before replying.',
  },
  {
    q: 'Is the first consultation actually free?',
    a: 'Yes, the first call is free and carries no obligation. We use it to understand your goals and give you a straight recommendation, even when that means a smaller scope than you expected.',
  },
  {
    q: 'Will I be talking to a salesperson?',
    a: 'No, you talk directly with the person who oversees your build. There is no call center and no handoff to a junior rep after you sign.',
  },
  {
    q: 'Do you work with US businesses?',
    a: 'US companies are our main focus. We work across US time zones, write in American English, and keep communication inside your business hours.',
  },
  {
    q: 'What is a realistic timeline?',
    a: 'Most websites of up to five pages go live in about 7 days. Larger stores and custom builds get a dated plan before any work starts, so you are never guessing.',
  },
  {
    q: 'What if I am not sure what I need yet?',
    a: 'That is exactly what the free call is for. Describe the problem in plain words and we will map the right approach, whether that is a new site, a Shopify store, or fixing what you already have.',
  },
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

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      {/* ── Hero with the lead form ─────────────────────────────────────── */}
      <section
        style={{ background: 'radial-gradient(110% 80% at 80% -10%, #FFF4EF 0%, #ffffff 55%)' }}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-12 sm:px-6 md:min-h-[calc(100vh-72px)] md:grid-cols-2 md:py-16 lg:px-8">
          <div>
            <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.14em] text-[#B23E13]">
              Let&rsquo;s talk
            </p>
            <h1 className="mb-4 text-4xl font-extrabold leading-[1.04] tracking-[-0.03em] text-[#0A0F1C] sm:text-5xl">
              Tell us about your <em className="italic text-[#F05A28]">project</em>.
            </h1>
            <p className="mb-7 max-w-md text-lg leading-relaxed text-slate-500">
              We design and build fast websites and online stores for US businesses, and most go
              live in about 7 days. Tell us what you need and Bhavesh replies within 24 hours.
            </p>

            <ul className="mb-7 flex flex-wrap gap-2.5">
              {['500+ businesses served', '7-day delivery', 'Reply within 24 hours'].map((c) => (
                <li
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-[13px] font-semibold text-slate-700"
                >
                  <span className="text-[#F05A28]" aria-hidden="true">&#10003;</span>
                  {c}
                </li>
              ))}
            </ul>

            <p className="text-[13px] text-slate-500">
              No commitment. Free consultation. No spam.
            </p>
          </div>

          <div id="contact-form" className="scroll-mt-24">
            <LeadFormInline
              source="contact_page"
              collectionName="contactpage"
              region="us"
              heading="Get a custom proposal"
              subheading="Just your name and email to start. The rest is optional."
            />
          </div>
        </div>
      </section>

      {/* ── Other ways to reach us ──────────────────────────────────────── */}
      <ContactMethods />

      {/* ── FAQ (trimmed) ───────────────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 text-center">
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.14em] text-[#B23E13]">
              Got questions?
            </p>
            <h2 className="text-2xl font-extrabold tracking-[-0.02em] text-[#0A0F1C] sm:text-3xl">
              Honest answers, before you ask
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
                  <span className="text-2xl font-normal text-[#F05A28] transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-500">{f.a}</p>
              </details>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Still have a question?{' '}
            <a href="#contact-form" className="font-semibold text-[#B23E13]">
              Ask us in the form above
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}
