import Link from 'next/link'

/**
 * India web-design city cross-links.
 *
 * Added 31 July 2026 to fix a silo break: all 22 India web-design city pages
 * had ZERO inbound internal links from anywhere on the site, and the
 * /web-design hub linked to none of them. They were reachable only via the
 * sitemap. This one component fixes both directions.
 *
 * Canonical route is /web-design/[city] with no trailing slash
 * (next.config.mjs sets trailingSlash: false).
 */
const ALL_CITIES = [
  { slug: 'ahmedabad',          label: 'Ahmedabad' },
  { slug: 'bangalore',          label: 'Bangalore' },
  { slug: 'bhubaneswar',        label: 'Bhubaneswar' },
  { slug: 'chennai',            label: 'Chennai' },
  { slug: 'coimbatore',         label: 'Coimbatore' },
  { slug: 'delhi',              label: 'Delhi NCR' },
  { slug: 'gurgaon',            label: 'Gurgaon' },
  { slug: 'hyderabad',          label: 'Hyderabad' },
  { slug: 'indore',             label: 'Indore' },
  { slug: 'jaipur',             label: 'Jaipur' },
  { slug: 'kochi',              label: 'Kochi' },
  { slug: 'kolkata',            label: 'Kolkata' },
  { slug: 'madurai',            label: 'Madurai' },
  { slug: 'mumbai',             label: 'Mumbai' },
  { slug: 'nagpur',             label: 'Nagpur' },
  { slug: 'noida',              label: 'Noida' },
  { slug: 'pune',               label: 'Pune' },
  { slug: 'rajkot',             label: 'Rajkot' },
  { slug: 'surat',              label: 'Surat' },
  { slug: 'thiruvananthapuram', label: 'Thiruvananthapuram' },
  { slug: 'vadodara',           label: 'Vadodara' },
  { slug: 'visakhapatnam',      label: 'Visakhapatnam' },
] as const

interface Props {
  /** Slug of the page this renders on, so it is excluded. Omit on the hub. */
  currentCity?: string
  /** Hub renders the full list and skips the redundant self-link. */
  isHub?: boolean
}

export default function WebDesignCityLinksIN({ currentCity, isHub = false }: Props) {
  const cities = ALL_CITIES.filter((c) => c.slug !== currentCity)

  return (
    <section className="border-t border-fj-ink/10 bg-fj-cream px-6 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-[#B23E13]">
            Web design across India
          </p>
          <h2 className="font-fj-display text-2xl font-bold text-fj-ink md:text-3xl">
            Website design companies near you, city by city
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-fj-ink/70">
            Buyers, competition and search behaviour differ in every Indian market. We build
            city-specific web design work across {ALL_CITIES.length} cities, with the same senior
            team behind each one.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/web-design/${city.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-fj-ink/15 bg-white px-4 py-2 text-sm font-medium text-fj-ink transition-colors duration-150 hover:border-[#F05A28] hover:text-[#B23E13]"
            >
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#F05A28] opacity-60" />
              Web design in {city.label}
            </Link>
          ))}
        </div>

        {!isHub && (
          <Link
            href="/web-design"
            className="text-sm font-semibold text-[#B23E13] underline-offset-4 hover:underline"
          >
            See our full web design and development services in India
          </Link>
        )}
      </div>
    </section>
  )
}
