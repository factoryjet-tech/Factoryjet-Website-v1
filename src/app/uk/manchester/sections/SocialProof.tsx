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
  {
    name: "Gareth Sampson",
    role: "Director, GPSUK",
    image: "/images/manchester/person-1.webp",
    quote:
      "FactoryJet built our entire B2B promotional products store from the ground up, complete RFQ management, credit management, and an image visualiser. It's not a template shop; it's a proper enterprise e-commerce platform built exactly to our workflow.",
  },
  {
    name: "Ricky",
    role: "Founder, Belle Maison",
    image: "/images/manchester/person-2.webp",
    quote:
      "We needed a store that handled both B2B and B2C for artificial plants, flowers, and LED lighting. FactoryJet built the full e-commerce platform and then did SEO, GEO, and AEO, we now show up in AI search results alongside Google.",
  },
  {
    name: "Kiran M.",
    role: "Director, Impulse Branding Solutions",
    image: "/images/manchester/person-3.webp",
    quote:
      "FactoryJet built our website from scratch and got us ranking in the top results on Google Search and AI search for our key terms. For a print branding and civil contracting firm serving India's largest enterprises, that visibility is everything.",
  },
  {
    name: "Kassem Sheikh",
    role: "Director, Shevvaa Driver for Hire Services",
    image: "/images/manchester/person-4.webp",
    quote:
      "They built our entire website from scratch, handled SEO and GEO, and got us listed on all search engines and AI platforms. We went from invisible to discoverable across Google, ChatGPT, and Perplexity.",
  },
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

        <ul className="mb-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
