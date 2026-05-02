import { ReactNode } from 'react';

interface BrowserMockupProps {
  /** URL shown in the mock browser address bar */
  url: string;
  /** Mock site content rendered inside the chrome */
  children: ReactNode;
  /** Optional aria-label for the whole mockup. Defaults to a generic label. */
  ariaLabel?: string;
}

/**
 * Browser chrome wrapper for displaying a fictional website preview
 * inside a marketing hero. Server Component — no client state, no
 * JS. Single CSS-only motion: subtle oblique tilt + scale on hover
 * (per spec §4 motion treatment 4). Honours prefers-reduced-motion
 * via Tailwind's reduced-motion variant.
 *
 * Usage:
 *   <BrowserMockup url="hartwell-co.com">
 *     <MockHartwellSite />
 *   </BrowserMockup>
 *
 * The mock site content (`children`) is responsible for its own
 * layout. BrowserMockup only provides the chrome.
 */
export function BrowserMockup({
  url,
  children,
  ariaLabel = 'Website preview',
}: BrowserMockupProps) {
  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className="relative w-full overflow-hidden rounded-lg border border-border-soft bg-white transition-transform duration-300 hover:rotate-1 hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:rotate-0 motion-reduce:hover:scale-100"
      style={{
        boxShadow:
          '0 2px 4px rgba(0,0,0,0.02), 0 4px 8px rgba(0,0,0,0.02), 0 16px 32px rgba(0,0,0,0.04)',
      }}
    >
      {/* Browser chrome top bar */}
      <div className="flex items-center gap-3 border-b border-border-soft bg-bg-soft px-4 py-3">
        {/* Traffic light dots — 30% opacity, restrained */}
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/30" />
        </div>

        {/* URL pill */}
        <div className="flex flex-1 justify-center">
          <div className="rounded-md bg-white px-3 py-1 text-mono-sm font-mono text-text-meta">
            {url}
          </div>
        </div>

        {/* Spacer to balance traffic lights */}
        <div className="w-12" aria-hidden />
      </div>

      {/* Mock site content slot */}
      <div className="bg-white">{children}</div>
    </div>
  );
}
