import Link from 'next/link'

import { IN_WEB_DESIGN_CITIES } from '@/data/inWebDesignCities'

/**
 * India web-design city cross-links, rendered on each /web-design/[city] page.
 *
 * Added 31 July 2026. The 22 India web-design city pages had no cross-links to
 * each other at all: the only route between them was the hub. This gives every
 * city page its 21 siblings plus a link back to the hub.
 *
 * NOT for the hub. The hub has its own "Web design, city by city" block and
 * rendering this there would duplicate it.
 *
 * Styling deliberately mirrors the hub's existing pill list so the two blocks
 * read as one system.
 */
interface Props {
  /** Slug of the page this renders on, so it is excluded from the list. */
  currentCity: string
}

export default function WebDesignCityLinksIN({ currentCity }: Props) {
  const cities = IN_WEB_DESIGN_CITIES.filter((c) => c.slug !== currentCity)
  const current = IN_WEB_DESIGN_CITIES.find((c) => c.slug === currentCity)

  return (
    <section className="border-t border-fj-neutral-200 bg-fj-cream px-6 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-fj-display text-2xl font-bold text-fj-ink md:text-3xl">
          Web design, city by city
        </h2>
        <p className="mt-4 max-w-[62ch] font-fj-body text-[1.0625rem] leading-relaxed text-fj-neutral-600">
          What a website has to do changes with the market it sells into. If you are weighing up
          {current ? ` ${current.name} ` : ' this city '}
          against somewhere else, these pages cover the buyers, the competition and the search
          demand in each one.
        </p>

        <ul className="mt-8 flex flex-wrap gap-2.5">
          {cities.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/web-design/${c.slug}`}
                className="inline-flex items-center rounded-full border border-fj-neutral-200 bg-white px-4 py-2 font-fj-body text-[0.9rem] font-medium text-fj-ink transition-colors hover:border-[#F05A28]/50 hover:text-[#B23E13]"
              >
                Web Design in {c.name}
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-8">
          <Link
            href="/web-design"
            className="font-fj-body text-[0.95rem] font-semibold text-[#B23E13] underline-offset-4 hover:underline"
          >
            See our full web design and development services in India
          </Link>
        </p>
      </div>
    </section>
  )
}
