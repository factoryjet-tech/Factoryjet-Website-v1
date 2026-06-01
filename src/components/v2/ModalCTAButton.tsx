'use client';

/**
 * ModalCTAButton — client-side CTA button that opens the contact modal.
 *
 * Server components (Hero, FinalCTA) cannot call hooks, so any CTA that
 * needs to open the modal renders this thin client wrapper instead of a
 * Next.js <Link>. Visually pixel-identical to the existing Link buttons.
 *
 * Variants map to the four CTA appearances used across v2 sections:
 *   primary-light   — orange fill, light-bg sections (Hero, FinalCTA light)
 *   primary-dark    — orange fill + glow, dark sections (FinalCTA dark)
 *   secondary-light — frosted glass, light-bg sections (Hero secondary)
 *   secondary-dark  — ghost/border, dark sections (FinalCTA dark secondary)
 *
 * Primary orange (#F05A28) applied via inline style — cannot use Tailwind
 * custom classes for non-palette hex values.
 */

import type { CSSProperties } from 'react';
import { useContactModal } from '../../context/ContactModalContext';
import type { ModalRegion, ModalVariant } from '../../context/ContactModalContext';

export interface ModalCTAButtonProps {
  label: string;
  region?: ModalRegion;
  modalVariant?: ModalVariant;
  btnVariant?: 'primary-light' | 'primary-dark' | 'secondary-light' | 'secondary-dark';
  className?: string;
  style?: CSSProperties;
}

export default function ModalCTAButton({
  label,
  region = 'us',
  modalVariant = 'default',
  btnVariant = 'primary-light',
  className = '',
  style,
}: ModalCTAButtonProps) {
  const { openModal } = useContactModal();

  const base: Record<ModalCTAButtonProps['btnVariant'] & string, string> = {
    'primary-light':
      'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-fj-body text-base font-semibold text-white transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    'primary-dark':
      'inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-fj-body text-base font-semibold text-white transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    'secondary-light':
      'inline-flex items-center justify-center rounded-full border border-fj-neutral-200 bg-white/60 px-7 py-3.5 font-fj-body text-base font-semibold text-fj-ink backdrop-blur-sm transition-colors hover:border-fj-neutral-400 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F05A28]',
    'secondary-dark':
      'inline-flex items-center justify-center rounded-full border border-white/25 bg-transparent px-7 py-3.5 font-fj-body text-base font-semibold text-fj-charcoal-text transition-colors hover:border-white/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
  };

  const isPrimary = btnVariant === 'primary-light' || btnVariant === 'primary-dark';

  // Orange inline styles for primary variants — merged with any caller-supplied style
  const resolvedStyle: CSSProperties = isPrimary
    ? {
        // #C2440F (deeper burnt orange) gives ~5:1 white-text contrast for a safe
        // WCAG AA margin; #F05A28 was 3.38:1 and failed. Glow keeps the brand feel.
        background: '#C2440F',
        boxShadow: '0 4px 20px rgba(240,90,40,0.38), 0 1px 4px rgba(240,90,40,0.22)',
        outlineColor: '#C2440F',
        ...style,
      }
    : { ...style };

  return (
    <button
      type="button"
      onClick={() => openModal(region, modalVariant)}
      className={`${base[btnVariant]} ${className}`}
      style={resolvedStyle}
    >
      {label}
      {isPrimary && (
        <span
          className="inline-flex h-5 w-5 items-center justify-center rounded-full"
          style={{ background: 'rgba(255,255,255,0.22)' }}
          aria-hidden="true"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M2 5h6M5 2l3 3-3 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </button>
  );
}
