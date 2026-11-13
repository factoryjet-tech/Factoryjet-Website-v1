/**
 * LogoBar — v2.0 "trusted by" strip.
 *
 * Client names come from src/data/clients.ts (shared with the footer strip,
 * ClientLogoStrip). Each name renders through ClientMark: a logo image when
 * public/clients/<slug>.svg|png exists, otherwise a text wordmark.
 * data-fj-clients="page" tells the footer to hide its own strip on this page.
 *
 * The assembler emits:
 *   <LogoBar tagline="Trusted by 500+ businesses…" />
 *
 * Renders as a smooth CSS marquee with mask-image fade edges.
 * aria-hidden on the duplicate track prevents double-announcement.
 *
 * Spec (fj-design-inspiration.skill.md §07-LogoBar):
 *   - bg-fj-neutral-50
 *   - py-14 lg:py-16
 *   - tagline: Geist Mono 11px, 0.14em tracking, fj-jet-blue, uppercase
 *   - logos: Clash Display wordmarks, 60% opacity, no hover state
 *   - Marquee: 40s linear infinite, mask-image 10%/90% fade
 *
 * Pure server component.
 */

import { CLIENTS } from '@/data/clients';
import { ClientMark } from './ClientLogoStrip';

export interface LogoBarProps {
  /** Tagline displayed as centered eyebrow above the marquee. */
  tagline?: string;
  className?: string;
}

// 13 Nov 2026: the client list moved to src/data/clients.ts, shared with the
// footer strip (ClientLogoStrip). Formative Concepts, Buddyburst, Shevvaa,
// Impulse Branding and RDB Travels left this strip because they are not on
// Bhavesh's 13 Nov list. Edit names there, never here.

export default function LogoBar({
  tagline = 'Trusted by 500+ businesses across the US, UK, and UAE',
  className = '',
}: LogoBarProps) {
  return (
    <section
      className={`fj-clients-band bg-fj-neutral-50 py-14 lg:py-16 overflow-hidden ${className}`.trim()}
      aria-label="Trusted by"
      data-fj-clients="page"
    >
      <div className="mx-auto max-w-[1120px] px-4 lg:px-6">
        {tagline && (
          <p
            className="text-center font-fj-mono font-medium uppercase text-[#B23E13]"
            style={{ fontSize: '11px', letterSpacing: '0.14em' }}
          >
            {tagline}
          </p>
        )}
      </div>

      {/* Marquee track, overflow-hidden parent on section */}
      <div
        className="relative mt-10"
        style={{
          maskImage:
            'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage:
            'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
        }}
      >
        {/* Keyframes injected inline, no separate CSS file needed for SSR */}
        <style>{`
          @keyframes logoMarquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .logo-marquee-track {
            display: flex;
            gap: 64px;
            width: max-content;
            animation: logoMarquee 40s linear infinite;
          }
          .logo-marquee-track:hover { animation-play-state: paused; }
          .fj-clients-band .fj-client__word { font-size: clamp(18px, 2vw, 22px); }
          @media (prefers-reduced-motion: reduce) {
            .logo-marquee-track {
              animation: none;
            }
          }
        `}</style>

        <div className="logo-marquee-track" aria-hidden="false">
          {/* Primary set. Wrapped in a <ul> for rule 10 (median 110 <li> on
              AI-Overview-cited pages); `contents` keeps the <li> as direct flex
              children so the marquee layout is unchanged. The duplicate set
              below stays plain spans on purpose: it exists only to make the
              loop seamless, and marking it up as list items would pad the
              count with content that is not really there. */}
          <ul className="contents">
          {CLIENTS.map((c) => (
            <li key={`a-${c.slug}`} className="fj-client">
              <ClientMark client={c} />
            </li>
          ))}
          </ul>

          {/* Duplicate set for seamless loop */}
          {CLIENTS.map((c) => (
            <span key={`b-${c.slug}`} aria-hidden="true" className="fj-client">
              <ClientMark client={c} linked={false} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export { LogoBar };
