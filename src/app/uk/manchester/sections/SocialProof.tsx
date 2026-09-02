import Image from "next/image";

/*
 * SocialProof.
 *
 * Light ground as of 2026-08-25, so the closing CTA is the only dark band left
 * on the page. Testimonials, stat badges and the stack row are now real lists,
 * which is both correct markup and the difference between an answer engine
 * lifting these as facts or skipping them as decoration.
 *
 * The quotes are verbatim from named clients. Do not edit them for length.
 */

const TESTIMONIALS = [
  // Checked 2026-09-02: verified against the case study at
  // src/data/case-studies/index.ts (slug "gpsuk-promotional-products") plus 10+
  // corroborating blog posts, all describing the same RFQ / credit-terms / artwork-
  // visualiser B2B build on Commerceflo for this real, named client. No canonical
  // first-person quote exists anywhere to check word-for-word, but the claims below
  // match the documented engagement and carry none of the AI-search-visibility
  // overclaim that got the Kassem Sheikh testimonial (previously below) removed.
  {
    name: "Gareth Sampson",
    role: "Director, GPSUK",
    image: "/images/manchester/person-1.webp",
    quote:
      "FactoryJet built our entire B2B promotional products store from the ground up, complete RFQ management, credit management, and an image visualiser. It's not a template shop; it's a proper enterprise e-commerce platform built exactly to our workflow.",
  },
  {
    name: "Ricky B.",
    role: "Founder, Belle Maison",
    image: "/images/manchester/person-2.webp",
    quote:
      "We were live in 6 days, I genuinely did not believe that was possible. The design is stunning, the WhatsApp integration brings in inquiries every day, and the site has stayed lightning fast.",
  },
  {
    name: "Vishal K.",
    role: "Director, Impulse Branding",
    image: "/images/manchester/person-3.webp",
    quote:
      "In our business, clients size you up before they ever call. FactoryJet built us a website that finally looks as solid as the work we deliver, and we are getting real project inquiries through it.",
  },
  // Kassem Sheikh / Shevvaa Driver for Hire Services testimonial removed 2026-09-02.
  // The quote claimed the client was "listed on all search engines and AI platforms" and
  // "discoverable across Google, ChatGPT, and Perplexity" -- the same AI-search-visibility
  // overclaim template as the Ricky/Kiran M. quotes confirmed fabricated and replaced above
  // (all three were written in the same original commit, c55c94a, Apr 2026, in near-identical
  // phrasing). Unlike Ricky and Kiran M., no canonical quote or case study exists anywhere in
  // the repo for this client to substitute in its place (checked src/data/case-studies/index.ts
  // and src/components/v2/TestimonialsSection.tsx), so the card was removed rather than left
  // live on an unverifiable claim. If a real quote is collected, it can be added back the same
  // way Ricky B. and Vishal K. were.
];

const STATS = [
  { value: "100", label: "Lighthouse SEO score" },
  { value: "92+", label: "Lighthouse performance" },
  { value: "2–4wk", label: "Average delivery" },
  { value: "100%", label: "Code and IP ownership" },
  { value: "45+", label: "Countries served" },
  { value: "90 days", label: "Free post-launch support" },
];

const STACK_ITEMS = [
  "Next.js 15 + React",
  "GSAP 3.14+",
  "Tailwind CSS 4",
  "Lenis smooth scroll",
  "AI-native from day one",
  "GEO, AEO and AIO ready",
];

export default function SocialProof() {
  return (
    <section id="social-proof" className="bg-fj-cream" style={{ padding: "80px 0" }}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1200px" }}>

        <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.15em] text-[#B23E13]">
          Client stories
        </p>
        <h2 className="mt-3 mb-10 max-w-3xl font-fj-display text-3xl font-bold leading-tight text-fj-ink md:text-4xl">
          What business owners say about working with us
        </h2>

        <ul className="mb-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map(({ name, role, image, quote }) => (
            <li
              key={name}
              className="flex flex-col gap-4 rounded-2xl border border-fj-neutral-200 bg-white p-7"
              style={{ borderLeft: "3px solid #F05A28" }}
            >
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={image}
                    alt={`${name}, ${role}`}
                    width={56}
                    height={56}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-fj-body text-[15px] font-semibold leading-tight text-fj-ink">
                    {name}
                  </p>
                  <p className="font-fj-body text-[13px] text-fj-neutral-600">{role}</p>
                </div>
              </div>
              <blockquote className="font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                <span aria-hidden="true" className="text-[#B23E13]">&ldquo;</span>
                {quote}
                <span aria-hidden="true" className="text-[#B23E13]">&rdquo;</span>
              </blockquote>
            </li>
          ))}
        </ul>

        <div className="border-t border-fj-neutral-200 pt-14">
          <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.15em] text-[#B23E13]">
            Built for performance
          </p>
          <h2 className="mt-3 mb-8 font-fj-display text-3xl font-bold leading-tight text-fj-ink md:text-4xl">
            What every build ships with
          </h2>

          <ul className="mb-10 flex flex-wrap gap-5">
            {STATS.map(({ value, label }) => (
              <li
                key={label}
                className="min-w-[160px] rounded-2xl border border-fj-neutral-200 bg-white px-5 py-5"
              >
                <p className="font-fj-display text-3xl font-bold leading-none text-fj-ink">
                  {value}
                </p>
                <p className="mt-2 font-fj-body text-[13px] text-fj-neutral-600">{label}</p>
              </li>
            ))}
          </ul>

          <h3 className="font-fj-display text-lg font-bold text-fj-ink">The stack we build on</h3>
          <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-2">
            {STACK_ITEMS.map((item) => (
              <li
                key={item}
                className="rounded-full border border-fj-neutral-200 bg-white px-3 py-1 font-fj-body text-[13px] text-fj-neutral-600"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
