import Link from 'next/link'

const ALL_CITIES = [
  { slug: 'atlanta',        label: 'Atlanta, GA' },
  { slug: 'austin',         label: 'Austin, TX' },
  { slug: 'boise',          label: 'Boise, ID' },
  { slug: 'charlotte',      label: 'Charlotte, NC' },
  { slug: 'chattanooga',    label: 'Chattanooga, TN' },
  { slug: 'chicago',        label: 'Chicago, IL' },
  { slug: 'dallas',         label: 'Dallas, TX' },
  { slug: 'denver',         label: 'Denver, CO' },
  { slug: 'fargo',          label: 'Fargo, ND' },
  { slug: 'lincoln',        label: 'Lincoln, NE' },
  { slug: 'los-angeles',    label: 'Los Angeles, CA' },
  { slug: 'miami',          label: 'Miami, FL' },
  { slug: 'minneapolis',    label: 'Minneapolis, MN' },
  { slug: 'nashville',      label: 'Nashville, TN' },
  { slug: 'new-york',       label: 'New York, NY' },
  { slug: 'portland',       label: 'Portland, OR' },
  { slug: 'raleigh',        label: 'Raleigh, NC' },
  { slug: 'salt-lake-city', label: 'Salt Lake City, UT' },
  { slug: 'san-francisco',  label: 'San Francisco, CA' },
  { slug: 'seattle',        label: 'Seattle, WA' },
  { slug: 'sioux-falls',    label: 'Sioux Falls, SD' },
  { slug: 'tampa',          label: 'Tampa, FL' },
] as const

interface Props {
  currentCity: string
}

export default function EcommerceCityLinksUS({ currentCity }: Props) {
  const otherCities = ALL_CITIES.filter((c) => c.slug !== currentCity)

  return (
    <section className="bg-[#FAFAF7] py-14 md:py-20 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#B23E13] mb-3">
            Serving All Major US Markets
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F0F12] font-space">
            E-Commerce Development Across the US
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto text-sm">
            Same 7-day delivery guarantee. Same transparent, fixed-price quotes. Serving small businesses in every major US market.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {otherCities.map((city) => (
            <Link
              key={city.slug}
              href={`/${city.slug}/ecommerce-development/`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-[#0F0F12] hover:border-[#F05A28] hover:text-[#F05A28] transition-colors duration-150"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F05A28] opacity-60" />
              {city.label}
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services/ecommerce-development/"
            className="text-sm font-semibold text-[#B23E13] hover:underline underline-offset-4"
          >
            View all US e-commerce services →
          </Link>
        </div>
      </div>
    </section>
  )
}
