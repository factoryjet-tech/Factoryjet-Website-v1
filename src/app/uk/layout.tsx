import type { Viewport } from "next";
import { ukMetadata, ukViewport } from "./metadata";
import SiteHeader from "@/components/v2/SiteHeader";

export const metadata = ukMetadata;
export const viewport: Viewport = ukViewport;

export default function UKLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* ── Header (US-style commerce mega-nav, UK locale) ─────────────── */}
      <SiteHeader locale="gb" logoHref="/uk" />

      {/* Performance: the hero-image preload and JetBrains Mono webfont are
          NOT loaded here. They are only needed by the UK homepage hero and the
          TechStack section, so they are loaded on those pages/components alone.
          Keeping the shared layout lean lets the service and city pages (which
          use neither) hit 100/100 without loading unused bytes. */}

      {/* Skip-link style only, Clash fallback metrics are in src/index.css */}
      <style>{`
        .uk-skip-link {
          position: absolute;
          top: -40px;
          left: 0;
          background: #F05A28;
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
