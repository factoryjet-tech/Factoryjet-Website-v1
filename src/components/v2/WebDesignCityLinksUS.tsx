import Link from 'next/link'

const ALL_CITIES = [
  { slug: 'austin',     label: 'Austin, TX' },
  { slug: 'charlotte',  label: 'Charlotte, NC' },
  { slug: 'cleveland',  label: 'Cleveland, OH' },
  { slug: 'denver',     label: 'Denver, CO' },
  { slug: 'miami',      label: 'Miami, FL' },
  { slug: 'nashville',  label: 'Nashville, TN' },
  { slug: 'new-york',   label: 'New York, NY' },
  { slug: 'portland',   label: 'Portland, OR' },
  { slug: 'raleigh',    label: 'Raleigh, NC' },
  { slug: 'tampa',      label: 'Tampa, FL' },
] as const

interface Props {
  currentCity: string
}

export default function WebDesignCityLinksUS({ currentCity }: Props) {
  const otherCities = ALL_CITIES.filter((c) => c.slug !== currentCity)

  return (
    <section className="bg-[#FAFAF7] py-14 md:py-20 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#F05A28] mb-3">
            Web Design Across the US
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F0F12] font-space">
            Custom Websites for Every Major US Market
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto text-sm">
            7-day delivery. Fixed-price quotes in 24 hours. Built for SMBs in Austin, Nashville, Miami, and every city in between.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {otherCities.map((city) => (
            <Link
              key={city.slug}
              href={`/${city.slug}/web-design/`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-[#0F0F12] hover:border-[#F05A28] hover:text-[#F05A28] transition-colors duration-150"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F05A28] opacity-60" />
              {city.label}
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services/web-design/"
            className="text-sm font-semibold text-[#F05A28] hover:underline underline-offset-4"
          >
            See all US web design cities →
          </Link>
        </div>
      </div>
    </section>
  )
}
