import type { Viewport } from "next";
import { ukMetadata, ukViewport } from "./metadata";
import Header from "./components/Header";

export const metadata = ukMetadata;
export const viewport: Viewport = ukViewport;

export default function UKLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <Header />

      {/* ── LCP image preload ──────────────────────────────────────────── */}
      <link
        rel="preload"
        as="image"
        type="image/webp"
        href="/images/uk/hero-uk.webp"
        fetchPriority="high"
      />

      {/* ── JetBrains Mono (TechStack component) ───────────────────────── */}
      {/* Fontshare + Inter are already loaded by the root layout <head>.  */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
      />

      {/* Skip-link style only — Clash fallback metrics are in src/index.css */}
      <style>{`
        .uk-skip-link {
          position: absolute;
          top: -40px;
          left: 0;
          background: #0052CC;
          color: #FFFFFF;
          padding: 8px 16px;
          text-decoration: none;
          z-index: 100;
          font-size: 14px;
          font-weight: 500;
        }
        .uk-skip-link:focus {
          top: 0;
        }
      `}</style>

      {children}
    </>
  );
}
