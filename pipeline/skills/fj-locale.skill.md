# Skill: fj-locale
# Use when: generating ANY page that targets a specific country or city
# Critical: prevents the GBP-hardcoding bug that surfaces AUD/USD pages with £ pricing

## Locale resolver

```typescript
import { resolveLocale } from '@/lib/locales';
const locale = resolveLocale('gb' | 'us' | 'au');
```

Do NOT hardcode currency symbols, stats body names, or regulatory authorities in page copy.
Always derive from `locale.*` fields.

## Locale token reference

| Field | GB (UK) | US | AU |
|-------|---------|----|----|
| `currencySymbol` | `£` | `$` | `A$` |
| `currencyCode` | `GBP` | `USD` | `AUD` |
| `countryName` | `United Kingdom` | `United States` | `Australia` |
| `countryAdjective` | `British` | `American` | `Australian` |
| `officialStatsBodyName` | `Office for National Statistics` | `U.S. Census Bureau` | `Australian Bureau of Statistics` |
| `officialStatsBodyUrl` | `ons.gov.uk` | `census.gov` | `abs.gov.au` |
| `regulatoryAuthorityName` | `Companies House` | `SEC` | `ASIC` |
| `agencyArchetypeLabel` | `London digital agency` | `New York digital agency` | `Sydney digital agency` |

The `agencyArchetypeLabel` is city-specific (not country-level). Update it per page.
Examples: "Austin web design agency", "Miami digital agency", "Manchester web agency"

## Page URL taxonomy

```
/{country}                          → /uk, /us, /au
/{country}/{city}                   → /uk/london, /us/austin
/{country}/{city}/{service}         → /uk/london/web-design
/{country}/{city}/{service}/{niche} → /uk/london/web-design/financial-services
```

## Data source for city stats (cite these in copy)

UK cities: `ons.gov.uk` for population, `companieshouse.gov.uk` for business count
US cities: `census.gov` for population, `bea.gov` for GDP
AU cities: `abs.gov.au` for population and business data

Never cite statista.com, wikipedia.org, or worldbank.org for headline statistics.

## Pricing copy per locale

UK: "From £{price}" — typical range £499–£4,999 for web design
US: "From ${price}" — typical range $599–$5,999 for web design
UAE: "From AED {price}" — typical range AED 2,200–AED 22,000 for web design

## ComparisonTable locale adaptation

The "Local Agency" archetype column label must use `locale.agencyArchetypeLabel`.
The "Freelancer" column pricing uses locale currency.
All pricing in schema.org markup uses `locale.currencyCode`.

## Schema.org locale fields

```json
{
  "@type": "Service",
  "areaServed": { "@type": "City", "name": "{cityDisplayName}" },
  "priceSpecification": {
    "@type": "PriceSpecification",
    "priceCurrency": "{locale.currencyCode}"
  }
}
```

## hreflang

Map bcp47 codes: `en-GB` → `gb`, `en-US` → `us`, `en-AU` → `au`
`x-default` points to `/` (global home).
See `src/data/hreflangMap.ts` for the full map.

## Populating new locales

AU, AE, IN, BR, MX locale.json files are NOT yet authored in `src/data/countries/`.
Calling `resolveLocale('au')` in the pipeline throws intentionally.
Do NOT silently fallback to GB defaults. Fix: author the locale.json first.
