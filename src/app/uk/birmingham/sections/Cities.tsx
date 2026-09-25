import Link from "next/link";
import Image from "next/image";
import CityTiltFx from "@/app/uk/sections/CityTiltFx";

type City = {
  slug: string;
  name: string;
  industries: string;
  population: string;
  businesses: string;
  col: string;
  active?: boolean;
};

const CITIES: City[] = [
  // Row 1
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
  // Row 2
  {
    slug: "birmingham",
    name: "Birmingham",
    industries: "Manufacturing, retail, finance, professional services",
    population: "2.6M metro",
    businesses: "60,000",
    col: "lg:col-span-2",
    active: true,
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
  // Row 3
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
    businesses: "14,000",
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
  // Row 4
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

function CityCard({ city }: { city: City }) {
  const imageSrc =
    city.slug === "birmingham"
      ? "/images/uk/city-birmingham.jpg"
      : `/images/uk/city-${city.slug}.jpg`;

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
        ...(city.active
          ? { outline: "3px solid #F05A28", outlineOffset: "2px" }
          : {}),
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
          src={imageSrc}
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

      {/* "You are here" badge, Birmingham only */}
      {city.active && (
        <span
          className="absolute"
          style={{
            top: 20,
            left: 20,
            backgroundColor: "#B23E13",
            color: "#FFFFFF",
            fontSize: 10,
            letterSpacing: "0.1em",
            fontWeight: 600,
            borderRadius: 9999,
            padding: "4px 10px",
            fontFamily: "var(--font-sans)",
            textTransform: "uppercase",
            zIndex: 10,
          }}
        >
          YOU ARE HERE
        </span>
      )}

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

export default function Cities() {

  // 2026-09-26 (perf): the GSAP card stagger-in on scroll was removed; this
  // section is a server component. The hover tilt and shadow are attached by the
  // shared UK CityTiltFx island (same values as the old inline handlers).

  return (
    <section
      id="cities"
      aria-label="Cities we serve across the UK"
      className="relative w-full"
      style={{ backgroundColor: "#F8FAFC", maxWidth: "100vw" }}
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
            We Build Across the UK
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
            Why Birmingham&rsquo;s Most Ambitious Businesses Are Looking Beyond
            the Mailbox
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
              Birmingham is where most of our UK search work starts, but the
              same team runs it across the other cities below. That matters more
              than it sounds: what we learn about which directories, chambers
              and trade titles actually pass weight in one city usually tells us
              where to look in the next one. If your customers sit in more than
              one place, say so early and we will build the page structure for
              that from the start rather than bolting it on later.
            </p>
          </div>
        </div>

        {/* Bento grid */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {CITIES.map((city) => (
            <CityCard key={city.slug} city={city} />
          ))}
        </div>
      </div>
      <CityTiltFx sectionId="cities" />
    </section>
  );
}
