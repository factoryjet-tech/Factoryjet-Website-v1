import Link from 'next/link'

// US SEO city pages. There was no SEO equivalent of WebDesignCityLinksUS before 2026-08-12,
// so the 17 existing SEO city pages had no sibling cross-linking at all. Internal linking is
// one of the few levers we control while domain authority is the binding constraint, so this
// exists to stop new SEO city pages shipping as orphans.
const ALL_CITIES = [
  { slug: 'arlington',        label: 'Arlington, TX' },
  { slug: 'atlanta',          label: 'Atlanta, GA' },
  { slug: 'austin',           label: 'Austin, TX' },
  { slug: 'boise',            label: 'Boise, ID' },
  { slug: 'boston',           label: 'Boston, MA' },
  { slug: 'charlotte',        label: 'Charlotte, NC' },
  { slug: 'chattanooga',      label: 'Chattanooga, TN' },
  { slug: 'chicago',          label: 'Chicago, IL' },
  { slug: 'cleveland',        label: 'Cleveland, OH' },
  { slug: 'colorado-springs', label: 'Colorado Springs, CO' },
  { slug: 'corpus-christi',   label: 'Corpus Christi, TX' },
  { slug: 'dallas',           label: 'Dallas, TX' },
  { slug: 'denver',           label: 'Denver, CO' },
  { slug: 'fargo',            label: 'Fargo, ND' },
  { slug: 'huntington-beach', label: 'Huntington Beach, CA' },
  { slug: 'kansas-city',      label: 'Kansas City, MO' },
  { slug: 'lakewood-ranch',   label: 'Lakewood Ranch, FL' },
  { slug: 'las-vegas',        label: 'Las Vegas, NV' },
  { slug: 'lincoln',          label: 'Lincoln, NE' },
  { slug: 'los-angeles',      label: 'Los Angeles, CA' },
  { slug: 'miami',            label: 'Miami, FL' },
  { slug: 'minneapolis',      label: 'Minneapolis, MN' },
  { slug: 'nashville',        label: 'Nashville, TN' },
  { slug: 'phoenix',          label: 'Phoenix, AZ' },
  { slug: 'providence',       label: 'Providence, RI' },
  { slug: 'salt-lake-city',   label: 'Salt Lake City, UT' },
  { slug: 'san-diego',        label: 'San Diego, CA' },
  { slug: 'sioux-falls',      label: 'Sioux Falls, SD' },
  { slug: 'tampa',            label: 'Tampa, FL' },
] as const

interface Props {
  currentCity: string
}

export default function SeoCityLinksUS({ currentCity }: Props) {
  const otherCities = ALL_CITIES.filter((c) => c.slug !== currentCity)

  return (
    <section className="bg-[#FAFAF7] py-14 md:py-20 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#B23E13] mb-3">
            SEO Across the US
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F0F12] font-space">
            Local Search Work in Every Major US Market
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto text-sm">
            Every metro has its own map pack, its own competitors, and its own rules. Pick your city.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {otherCities.map((city) => (
            <Link
              key={city.slug}
              href={`/${city.slug}/seo/`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-[#0F0F12] hover:border-[#F05A28] hover:text-[#F05A28] transition-colors duration-150"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F05A28] opacity-60" />
              {city.label}
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services/seo/"
            className="text-sm font-semibold text-[#B23E13] hover:underline underline-offset-4"
          >
            See all US SEO services →
          </Link>
        </div>
      </div>
    </section>
  )
}
