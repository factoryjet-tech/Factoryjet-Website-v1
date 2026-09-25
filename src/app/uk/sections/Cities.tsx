import Link from "next/link";
import Image from "next/image";
import CityTiltFx from "./CityTiltFx";

// ── City data (verbatim from content.md) ─────────────────────────────────────
type City = {
  slug: string;
  name: string;
  industries: string;
  population: string;
  businesses: string;
  // Bento placement — matches the 6-col desktop grid described in CLAUDE.md.
  col: string;
};

const CITIES: City[] = [
  // Row 1 — Leeds + Manchester (wide)
  {
    slug: "leeds",
    name: "Leeds",
    industries: "Financial services, legal, fashion",
    population: "800,000",
    businesses: "42,000",
    col: "sm:col-span-2 lg:col-span-3",
  },
  {
    slug: "manchester",
    name: "Manchester",
    industries: "Tech, media, professional services",
    population: "2.8M metro",
    businesses: "98,000+",
    col: "sm:col-span-2 lg:col-span-3",
  },
  // Row 2 — Birmingham, Sheffield, Bristol
  {
    slug: "birmingham",
    name: "Birmingham",
    industries: "Manufacturing, retail, finance",
    population: "2.6M metro",
    businesses: "84,000+",
    col: "lg:col-span-2",
  },
  {
    slug: "sheffield",
    name: "Sheffield",
    industries: "Advanced manufacturing, digital",
    population: "590,000",
    businesses: "22,000+",
    col: "lg:col-span-2",
  },
  {
    slug: "bristol",
    name: "Bristol",
    industries: "Aerospace, tech startups, creative",
    population: "470,000",
    businesses: "25,000+",
    col: "lg:col-span-2",
  },
  // Row 3 — Edinburgh, Liverpool, Glasgow
  {
    slug: "edinburgh",
    name: "Edinburgh",
    industries: "Finance, tourism, technology",
    population: "540,000",
    businesses: "30,000+",
    col: "lg:col-span-2",
  },
  {
    slug: "liverpool",
    name: "Liverpool",
    industries: "Port/logistics, creative, hospitality",
    population: "500,000",
    businesses: "20,000+",
    col: "lg:col-span-2",
  },
  {
    slug: "glasgow",
    name: "Glasgow",
    industries: "Energy, tech, professional services",
    population: "635,000",
    businesses: "28,000+",
    col: "lg:col-span-2",
  },
  // Row 4 — Newcastle + Nottingham (centred in 6-col grid)
  {
    slug: "newcastle",
    name: "Newcastle",
    industries: "Tech, health, education",
    population: "300,000",
    businesses: "15,000+",
    col: "lg:col-span-2 lg:col-start-2",
  },
  {
    slug: "nottingham",
    name: "Nottingham",
    industries: "Retail, healthcare, education",
    population: "330,000",
    businesses: "14,000+",
    col: "lg:col-span-2",
  },
];

// ── Card ─────────────────────────────────────────────────────────────────────
// Server-rendered. The desktop hover tilt and shadow are attached by the
// ./CityTiltFx island (same handlers, same values).
function CityCard({ city }: { city: City }) {
  return (
    <Link
      href={`/uk/${city.slug}`}
      data-city-card
      className={[
        "group relative block overflow-hidden transition-shadow duration-300",
        "sm:col-span-1",
        city.col,
      ].join(" ")}
      style={{
        borderRadius: 12,
        aspectRatio: "4 / 3",
        transformStyle: "preserve-3d",
        willChange: "transform",
        transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out",
      }}
    >
      {/* Photo background */}
      <div
        data-city-img
        className="absolute inset-0"
        style={{
          transition: "transform 0.4s ease-out",
          willChange: "transform",
        }}
      >
        <Image
          src={`/images/uk/city-${city.slug}.jpg`}
          alt={`${city.name} UK city skyline`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      {/* Dark gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(10,15,28,0.98) 0%, rgba(10,15,28,0.85) 40%, rgba(10,15,28,0.4) 100%)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3
          className="font-clash text-white"
          style={{
            fontWeight: 700,
            fontSize: "clamp(18px, 2vw, 24px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          {city.name}
        </h3>

        <p
          className="mt-1.5"
          style={{
            color: "#FFFFFF",
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(12px, 1vw, 13.5px)",
            lineHeight: 1.5,
          }}
        >
          {city.industries}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold"
            style={{
              backgroundColor: "#0A0F1C",
              color: "#FFFFFF",
              border: "1px solid rgba(255,255,255,0.2)",
              fontFamily: "var(--font-sans)",
              letterSpacing: "0.02em",
            }}
          >
            Pop {city.population}
          </span>
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold"
            style={{
              backgroundColor: "#B23E13",
              color: "#FFFFFF",
              border: "1px solid #B23E13",
              fontFamily: "var(--font-sans)",
              letterSpacing: "0.02em",
            }}
          >
            {city.businesses} businesses
          </span>
        </div>
      </div>

      {/* Chevron cue */}
      <div
        aria-hidden="true"
        className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        style={{
          backgroundColor: "#F05A28",
          color: "#ffffff",
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </div>
    </Link>
  );
}

// ── Section ──────────────────────────────────────────────────────────────────
// Server component. The scroll-in stagger of the city cards was removed for
// performance (cards paint in their final state); hover tilt is ./CityTiltFx.
export default function Cities() {
  return (
    <section
      id="cities"
      aria-label="Cities we serve across the UK"
      className="relative w-full"
      style={{ backgroundColor: "#FFFFFF", maxWidth: "100vw" }}
    >
      <div
        className="mx-auto w-full max-w-[1200px] px-6 sm:px-8"
        style={{
          paddingTop: "clamp(64px, 10vw, 120px)",
          paddingBottom: "clamp(64px, 10vw, 120px)",
        }}
      >
        {/* Heading block */}
        <div className="flex flex-col items-center text-center">
          <p
            style={{
              color: "#B23E13",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Cities We Serve Across the UK
          </p>

          <h2
            className="font-clash mt-5"
            style={{
              color: "#0A0F1C",
              fontWeight: 700,
              fontSize: "clamp(24px, 3.5vw, 44px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: 960,
            }}
          >
            Local Expertise, National Reach, FactoryJet in Your City
          </h2>

          <span
            aria-hidden="true"
            className="mt-6 block"
            style={{ width: 48, height: 2, backgroundColor: "#FF6B35" }}
          />

          <div
            className="mt-8 space-y-5"
            style={{
              color: "#374151",
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(15px, 1.1vw, 17px)",
              lineHeight: 1.8,
              maxWidth: 760,
            }}
          >
            <p>
              FactoryJet delivers tailored digital solutions to businesses
              across every major UK city. Each city page features local market
              data, named competitor comparisons, city-specific pricing
              benchmarks, and industry-relevant examples, because a financial
              services firm in Leeds has different digital needs than a tech
              startup in Bristol or a fashion brand in Manchester.
            </p>
            <p>
              Click your city to see local pricing comparisons, competitor
              analysis, and services tailored to your market. Do not see your
              city listed? Contact us, we serve businesses across the entire
              United Kingdom, regardless of location.
            </p>
          </div>
        </div>

        {/* Bento grid */}
        <div
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6"
        >
          {CITIES.map((city) => (
            <CityCard key={city.slug} city={city} />
          ))}
        </div>
      </div>
      <CityTiltFx sectionId="cities" />
    </section>
  );
}
