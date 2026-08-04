"use client";

import Image from "next/image";

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
  { value: "100", label: "Lighthouse SEO Score", color: "#60A5FA" },
  { value: "92+", label: "Lighthouse Performance", color: "#10B981" },
  { value: "2–4wk", label: "Average Delivery", color: "#FF6B35" },
  { value: "50–60%", label: "Below Market Rates", color: "#FF6B35" },
  { value: "45+", label: "Countries Served", color: "#60A5FA" },
  { value: "90 days", label: "Free Post-Launch Support", color: "#10B981" },
];

const STACK_ITEMS = [
  "Next.js 15 + React",
  "GSAP 3.14+",
  "Tailwind CSS 4",
  "Lenis Smooth Scroll",
  "AI-Native from Day 1",
  "GEO · AEO · AIO Ready",
];

export default function SocialProof() {
  return (
    <section
      id="social-proof"
      style={{ background: "#0a0f1c", padding: "32px 0 96px" }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1400px" }}>

        {/* ── Testimonials ─────────────────────────────────────────────── */}
        <div className="text-center mb-12">
          <p
            className="font-semibold uppercase"
            style={{
              color: "#FF6B35",
              fontSize: "13px",
              letterSpacing: "0.15em",
              marginBottom: "16px",
            }}
          >
            Client Stories
          </p>
          <h2
            className="font-clash text-white"
            style={{
              fontSize: "clamp(1.8rem, 1.5rem + 1.2vw, 2.8rem)",
              lineHeight: 1.15,
            }}
          >
            What Manchester Business Owners Say
          </h2>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: "20px", marginBottom: "72px" }}
        >
          {TESTIMONIALS.map(({ name, role, image, quote }) => (
            <div
              key={name}
              className="rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{
                background: "white",
                padding: "28px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
                borderLeft: "3px solid #F05A28",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {/* Avatar + name/role */}
              <div className="flex items-center gap-3">
                <div
                  className="flex-shrink-0 rounded-full overflow-hidden"
                  style={{ width: "56px", height: "56px" }}
                >
                  <Image
                    src={image}
                    alt={`${name}, ${role}`}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <p
                    className="font-semibold"
                    style={{ fontSize: "15px", color: "#111827", lineHeight: 1.3 }}
                  >
                    {name}
                  </p>
                  <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.4 }}>
                    {role}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <p
                style={{
                  fontSize: "14px",
                  color: "#374151",
                  lineHeight: 1.65,
                  fontStyle: "italic",
                }}
              >
                <span
                  style={{
                    fontSize: "22px",
                    color: "#F05A28",
                    fontStyle: "normal",
                    lineHeight: 0,
                    verticalAlign: "-6px",
                    marginRight: "2px",
                  }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                {quote}
              </p>
            </div>
          ))}
        </div>

        {/* ── Divider ──────────────────────────────────────────────────── */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            marginBottom: "64px",
          }}
          aria-hidden="true"
        />

        {/* ── Stats (unchanged) ─────────────────────────────────────────── */}
        <div className="text-center">
          <p
            className="font-semibold uppercase"
            style={{
              color: "#FF6B35",
              fontSize: "13px",
              letterSpacing: "0.15em",
              marginBottom: "16px",
            }}
          >
            Built for Performance
          </p>

          <h2
            className="font-clash text-white"
            style={{
              fontSize: "2.5rem",
              lineHeight: 1.15,
              marginBottom: "48px",
            }}
          >
            Proven by Numbers
          </h2>

          {/* Stat badges */}
          <div
            className="flex flex-wrap justify-center"
            style={{ gap: "24px", marginBottom: "48px" }}
          >
            {STATS.map(({ value, label, color }) => (
              <div
                key={label}
                className="rounded-xl text-center"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "20px",
                  minWidth: "160px",
                }}
              >
                <p
                  className="font-clash font-bold"
                  style={{ fontSize: "2rem", color, lineHeight: 1.1, marginBottom: "6px" }}
                >
                  {value}
                </p>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* Tech stack row */}
          <div
            className="flex flex-wrap justify-center items-center"
            style={{ gap: "8px" }}
            aria-label="Technology stack"
          >
            {STACK_ITEMS.map((item, i) => (
              <span key={item} className="flex items-center gap-2">
                <span
                  style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}
                >
                  {item}
                </span>
                {i < STACK_ITEMS.length - 1 && (
                  <span
                    className="rounded-full"
                    style={{
                      width: "5px",
                      height: "5px",
                      background: "#10B981",
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  />
                )}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
