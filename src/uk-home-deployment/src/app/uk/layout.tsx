import type { Viewport } from "next";
import { ukMetadata, ukViewport } from "./metadata";

export const metadata = ukMetadata;
export const viewport: Viewport = ukViewport;

export default function UKLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* ── LCP image preload ──────────────────────────────────────────── */}
      <link
        rel="preload"
        as="image"
        type="image/webp"
        href="/images/uk/hero-uk.webp"
        fetchPriority="high"
      />

      {/* ── Font loading ───────────────────────────────────────────────── */}
      <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
      <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin=""
      />

      {/* Clash Display — LCP H1 font. Preload CSS + fetchPriority high. */}
      <link
        rel="preload"
        as="style"
        href="https://api.fontshare.com/v2/css?f[]=clash-display@700,600&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://api.fontshare.com/v2/css?f[]=clash-display@700,600&display=swap"
        fetchPriority="high"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
      />

      {/* Font fallback metrics — prevents CLS when Clash Display loads. */}
      <style>{`
        @font-face {
          font-family: 'Clash Display Fallback';
          src: local('Arial Black'), local('Helvetica Neue Bold'), local('Arial Bold');
          size-adjust: 108%;
          ascent-override: 92%;
          descent-override: 22%;
          line-gap-override: 0%;
        }
        :root {
          --font-clash: 'Clash Display', 'Clash Display Fallback', 'Arial Black', system-ui, sans-serif;
        }
        .font-clash {
          font-family: var(--font-clash);
        }
      `}</style>

      {children}
    </>
  );
}
