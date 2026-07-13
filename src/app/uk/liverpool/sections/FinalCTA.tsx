"use client";

import Link from "next/link";
import { useContactModal } from "@/context/ContactModalContext";
import { trackButtonClick, trackCTAClick } from "@/utils/gtm";

// ── Link data ─────────────────────────────────────────────────────────────────
const CITIES = [
  { name: "Manchester", slug: "manchester" },
  { name: "Leeds", slug: "leeds" },
  { name: "Birmingham", slug: "birmingham" },
  { name: "Bristol", slug: "bristol" },
  { name: "Edinburgh", slug: "edinburgh" },
  { name: "Glasgow", slug: "glasgow" },
  { name: "Newcastle", slug: "newcastle" },
  { name: "Sheffield", slug: "sheffield" },
  { name: "Nottingham", slug: "nottingham" },
  { name: "Liverpool", slug: "liverpool" },
];

const SERVICES = [
  { name: "Web Design", slug: "web-design" },
  { name: "E-Commerce", slug: "ecommerce" },
  { name: "AI Agents", slug: "ai-agents" },
  { name: "AI SEO", slug: "ai-seo" },
];

// Liverpool-specific watermarks
const WATERMARKS: Array<{
  label: string;
  top: string;
  left: string;
  rotate: number;
}> = [
  { label: "£43.3bn", top: "8%", left: "4%", rotate: -6 },
  { label: "14,000", top: "14%", left: "78%", rotate: 5 },
  { label: "£11bn", top: "62%", left: "6%", rotate: 4 },
  { label: "LCR Freeport", top: "68%", left: "72%", rotate: -5 },
];

export default function FinalCTA() {
  const { openModal: openContactModal } = useContactModal();
  const openModal = () => openContactModal("uk", "default");

  return (
    <section
      id="contact"
      aria-label="Ready to build Liverpool's most ambitious website"
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: "#F05A28",
        color: "#FFFFFF",
        maxWidth: "100vw",
      }}
    >
      {/* Decorative stat watermarks — behind content */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {WATERMARKS.map((w) => (
          <span
            key={w.label}
            className="font-clash hidden lg:block"
            style={{
              position: "absolute",
              top: w.top,
              left: w.left,
              fontWeight: 700,
              fontSize: 140,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: "rgba(255,255,255,0.04)",
              transform: `rotate(${w.rotate}deg)`,
              whiteSpace: "nowrap",
            }}
          >
            {w.label}
          </span>
        ))}
      </div>

      {/* Subtle grid texture overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at 50% 50%, #000 25%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 50%, #000 25%, transparent 75%)",
        }}
      />

      <div
        className="relative mx-auto w-full max-w-[1200px] px-6 sm:px-8"
        style={{
          paddingTop: "clamp(64px, 10vw, 120px)",
          paddingBottom: "clamp(64px, 10vw, 120px)",
        }}
      >
        {/* Headline block */}
        <div className="flex flex-col items-center text-center">
          <p
            style={{
              color: "#FF6B35",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Start Your Liverpool Project
          </p>

          <h2
            className="font-clash mt-5"
            style={{
              color: "#FFFFFF",
              fontWeight: 700,
              fontSize: "clamp(24px, 4vw, 52px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 960,
            }}
          >
            Ready to Build Liverpool&rsquo;s Most Ambitious Website?
          </h2>

          <span
            aria-hidden="true"
            className="mt-6 block"
            style={{ width: 56, height: 2, backgroundColor: "#FF6B35" }}
          />

          <p
            className="mt-8"
            style={{
              color: "rgba(255,255,255,0.85)",
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(15px, 1.2vw, 18px)",
              lineHeight: 1.8,
              maxWidth: 820,
            }}
          >
            FactoryJet is the AI-native agency built for Liverpool&rsquo;s next
            chapter. Whether you&rsquo;re a logistics operator at Peel Ports, a
            creative studio in the Baltic Triangle, a hospitality group near
            Bramley-Moore Dock, or a life sciences firm in the Knowledge Quarter
            — we build digital systems that match your ambition and beat your
            existing agency&rsquo;s price by 50–60%.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => {
                trackCTAClick(
                  "get_a_free_liverpool_quote",
                  "final_cta",
                  "primary"
                );
                trackButtonClick("get_a_free_liverpool_quote", "final_cta");
                openModal();
              }}
              className="inline-flex items-center justify-center gap-2"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#B23E13",
                padding: "17px 32px",
                borderRadius: 8,
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: 16,
                letterSpacing: "0.01em",
                boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
                border: "none",
                cursor: "pointer",
                minHeight: 48,
              }}
            >
              Get a Free Liverpool Quote
              <span aria-hidden="true" style={{ fontSize: 18, lineHeight: 1 }}>
                →
              </span>
            </button>
            <a
              href="https://wa.me/919699977699"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2"
              style={{
                backgroundColor: "transparent",
                color: "#FFFFFF",
                padding: "16px 30px",
                borderRadius: 8,
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: 15.5,
                border: "1.5px solid rgba(255,255,255,0.5)",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us Directly
            </a>
          </div>

          <p
            className="mt-5"
            style={{
              color: "rgba(255,255,255,0.7)",
              fontFamily: "var(--font-sans)",
              fontSize: 14.5,
            }}
          >
            Email:{" "}
            <a
              href="mailto:connect@factoryjet.com"
              style={{
                color: "#FFFFFF",
                textDecoration: "underline",
                textDecorationColor: "rgba(255,255,255,0.5)",
              }}
            >
              connect@factoryjet.com
            </a>
          </p>
        </div>

        {/* Divider */}
        <div
          aria-hidden="true"
          className="mt-16"
          style={{
            height: 1,
            backgroundColor: "rgba(255,255,255,0.14)",
          }}
        />

        {/* City links */}
        <div className="mt-12">
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 12.5,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Explore Our City Pages
          </p>
          <ul
            className="flex flex-wrap items-center gap-x-5 gap-y-3"
            style={{ listStyle: "none", padding: 0, margin: 0 }}
          >
            {CITIES.map((c, i) => (
              <li key={c.slug} className="flex items-center gap-5">
                <Link
                  href={`/uk/${c.slug}`}
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    fontSize: 15.5,
                    textDecorationColor: "rgba(255,255,255,0.35)",
                  }}
                  className="underline-offset-4 hover:underline"
                >
                  {c.name}
                </Link>
                {i < CITIES.length - 1 && (
                  <span
                    aria-hidden="true"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    •
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Service links */}
        <div className="mt-10">
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 12.5,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Explore Our Service Pages
          </p>
          <ul
            className="flex flex-wrap items-center gap-x-5 gap-y-3"
            style={{ listStyle: "none", padding: 0, margin: 0 }}
          >
            {SERVICES.map((s, i) => (
              <li key={s.slug} className="flex items-center gap-5">
                <Link
                  href={`/uk/${s.slug}`}
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    fontSize: 15.5,
                    textDecorationColor: "rgba(255,255,255,0.35)",
                  }}
                  className="underline-offset-4 hover:underline"
                >
                  {s.name}
                </Link>
                {i < SERVICES.length - 1 && (
                  <span
                    aria-hidden="true"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    •
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
