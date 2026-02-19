"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Country {
  name: string;
  emoji: string;
  color: string;
  bg: string;
  badge: string;
  href: string;
}

const countries: Country[] = [
  {
    name: "India",
    emoji: "🇮🇳",
    color: "#FF9933",
    bg: "linear-gradient(135deg, #FF9933 0%, #FF6B00 100%)",
    badge: "IN",
    href: "/",
  },
  {
    name: "United States",
    emoji: "🇺🇸",
    color: "#3B82F6",
    bg: "linear-gradient(135deg, #1D4ED8 0%, #3B82F6 100%)",
    badge: "US",
    href: "/us",
  },
  {
    name: "UAE",
    emoji: "🇦🇪",
    color: "#00A651",
    bg: "linear-gradient(135deg, #00A651 0%, #007A3D 100%)",
    badge: "AE",
    href: "/uae",
  },
];

const theme = {
  dark: {
    bg: "#0d1117",
    gridLine: "rgba(255,255,255,0.03)",
    text: "#E2E8F0",
    muted: "#64748B",
    cardBg: "#161B22",
    cardHoverBg: "#1C2330",
    border: "#21262D",
  },
  light: {
    bg: "#F8FAFC",
    gridLine: "rgba(0,0,0,0.04)",
    text: "#0F172A",
    muted: "#94A3B8",
    cardBg: "#FFFFFF",
    cardHoverBg: "#F1F5F9",
    border: "#E2E8F0",
  },
};

export default function NotFound() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [dark, setDark] = useState<boolean>(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setDark(mq.matches);
    const handler = (e: MediaQueryListEvent) => setDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const t = dark ? theme.dark : theme.light;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: t.bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.3s ease",
      }}
    >
      {/* Grid texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(${t.gridLine} 1px, transparent 1px), linear-gradient(90deg, ${t.gridLine} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      {/* Theme toggle */}
      <button
        onClick={() => setDark((d) => !d)}
        title="Toggle theme"
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          border: `1px solid ${t.border}`,
          background: t.cardBg,
          fontSize: "18px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          transition: "all 0.2s ease",
          boxShadow: dark ? "0 2px 12px rgba(0,0,0,0.4)" : "0 2px 12px rgba(0,0,0,0.1)",
        }}
      >
        {dark ? "☀️" : "🌙"}
      </button>

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "60px 24px",
          maxWidth: "960px",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(72px, 12vw, 120px)",
            fontWeight: 800,
            color: "#3B82F6",
            margin: 0,
            lineHeight: 1,
            letterSpacing: "-4px",
            textShadow: "0 0 60px #3B82F640",
          }}
        >
          404
        </h1>
        <p
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: t.text,
            margin: "8px 0 0",
            letterSpacing: "0.5px",
            transition: "color 0.3s ease",
          }}
        >
          Not Found
        </p>
        <p
          style={{
            fontSize: "16px",
            color: t.muted,
            margin: "10px 0 0",
            transition: "color 0.3s ease",
          }}
        >
          Whoops! That page doesn&apos;t exist.
        </p>

        <div
          style={{
            width: "48px",
            height: "2px",
            background: "linear-gradient(90deg, #3B82F6, #6366F1)",
            margin: "32px auto",
            borderRadius: "2px",
          }}
        />

        {/* Section heading */}
        {/* <p
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: t.muted,
            letterSpacing: "2px",
            textTransform: "uppercase",
            margin: "0 0 8px",
            transition: "color 0.3s ease",
          }}
        >
          Where would you like to go?
        </p> */}
        <h2
          style={{
            fontSize: "clamp(18px, 3vw, 26px)",
            fontWeight: 700,
            color: t.text,
            margin: "0 0 36px",
            lineHeight: 1.4,
            transition: "color 0.3s ease",
          }}
        >
          Choose Your Country for{" "}
          <span style={{ color: "#3B82F6" }}>Website</span> &amp;{" "}
          <span style={{ color: "#6366F1" }}>eCommerce</span> Development
        </h2>

        {/* Country cards */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {countries.map((c, i) => (
            <Link
              key={c.name}
              href={c.href}
              style={{
                textDecoration: "none",
                background: hovered === i ? t.cardHoverBg : t.cardBg,
                border: `1px solid ${hovered === i ? c.color + "66" : t.border}`,
                borderRadius: "16px",
                padding: "32px 28px",
                width: "220px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
                cursor: "pointer",
                transition: "all 0.25s ease",
                transform: hovered === i ? "translateY(-5px)" : "translateY(0)",
                boxShadow:
                  hovered === i
                    ? dark
                      ? "0 16px 40px rgba(0,0,0,0.5)"
                      : "0 16px 40px rgba(0,0,0,0.12)"
                    : "none",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                style={{
                  width: "68px",
                  height: "68px",
                  borderRadius: "16px",
                  background: c.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "box-shadow 0.25s ease",
                  boxShadow: hovered === i ? `0 8px 24px ${c.color}55` : "none",
                }}
              >
                <span style={{ fontSize: "34px", lineHeight: 1 }}>{c.emoji}</span>
              </div>

              <span
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: t.text,
                  letterSpacing: "0.2px",
                  transition: "color 0.3s ease",
                }}
              >
                {c.name}
              </span>

              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  padding: "3px 10px",
                  borderRadius: "999px",
                  letterSpacing: "1px",
                  fontFamily: "monospace",
                  background: c.color + "22",
                  color: c.color,
                  border: `1px solid ${c.color}44`,
                }}
              >
                {c.badge}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}