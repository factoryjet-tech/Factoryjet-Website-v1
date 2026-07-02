'use client';

/**
 * WhatsAppCTA — reusable secondary CTA that opens wa.me with a city-specific
 * pre-filled message and fires the Google Ads WhatsApp-click conversion.
 *
 * Why this exists: the city landing pages (/{city}/web-design) are the
 * destination for Google Ads spend, but until 2026-06-09 they had no WhatsApp
 * click target — meaning the WhatsApp conversion action (AW-11127037244/
 * N5PhCPWusNQbELy65Lkp) could never fire from paid traffic. This component
 * gives every city Hero + FinalCTA a WhatsApp button so the conversion can
 * actually record.
 *
 * Tracking note: this is a plain wa.me anchor. GTM (single source of truth)
 * auto-detects the wa.me link click and fires BOTH the WhatsApp Ads conversion
 * and the GA4 whatsapp_click event — no inline gtag call needed. (Firing it in
 * code too would double-count into two different Ads accounts. GTM-only 2026-07-02.)
 */

import type { CSSProperties } from 'react';

const WHATSAPP_NUMBER = '919699977699';

export interface WhatsAppCTAProps {
  /** City name in display form, e.g. "Charlotte" or "New York". */
  city: string;
  /** Visual variant: 'light' (frosted on cream) or 'dark' (ghost on navy). */
  variant?: 'light' | 'dark';
  /** Service vertical, defaults to "web design". */
  service?: string;
}

export default function WhatsAppCTA({
  city,
  variant = 'light',
  service = 'web design',
}: WhatsAppCTAProps) {
  const message = `Hi FactoryJet, I'm interested in ${service} in ${city}.`;
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const ariaLabel = `Message FactoryJet on WhatsApp about ${service} in ${city}`;

  const isDark = variant === 'dark';

  const style: CSSProperties = isDark
    ? {
        background: 'transparent',
        border: '1px solid rgba(255,255,255,0.25)',
      }
    : {
        background: 'rgba(255,255,255,0.70)',
        border: '1px solid rgba(15,15,18,0.14)',
      };

  const className = isDark
    ? 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-fj-body text-[0.9375rem] font-semibold text-fj-charcoal-text transition-colors hover:border-white/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
    : 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-fj-body text-[0.9375rem] font-semibold text-fj-ink backdrop-blur-sm transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      data-cta="whatsapp"
      className={className}
      style={style}
    >
      <WhatsAppIcon />
      Message on WhatsApp
    </a>
  );
}

/* WhatsApp brand glyph — #25D366 fill. Single decorative element per
   DESIGN.md "one dominant visual element per surface" rule, kept small so
   the button itself remains the visual unit, not the icon. */
function WhatsAppIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z"
        fill="#25D366"
      />
      <path
        d="M20.52 3.449C18.244 1.176 15.207 0 11.997 0c-6.602 0-11.99 5.388-11.99 11.99 0 2.116.548 4.18 1.595 6.001L0 24l6.16-1.621c1.755.954 3.731 1.457 5.741 1.457h.005c6.601 0 11.989-5.388 11.989-11.99 0-3.211-1.179-6.246-3.379-8.519l.004.122ZM11.997 21.785h-.005c-1.792 0-3.55-.484-5.084-1.394l-.365-.218-3.78.991 1.012-3.69-.236-.378c-1.001-1.595-1.532-3.434-1.532-5.317 0-5.526 4.495-10.022 10.022-10.022 2.677 0 5.193 1.044 7.082 2.937 1.892 1.893 2.935 4.408 2.935 7.083-.003 5.526-4.498 10.022-10.025 10.022l-.024-.014Z"
        fill="#25D366"
      />
    </svg>
  );
}
