import { RECOGNITION_PROFILES } from '@/data/recognitionProfiles';

/**
 * RecognitionStrip — "Recognized on" third-party trust strip for the dark UK
 * footers (#0A0F1C / #111827). Verified directory profiles; NO review-count/rating claims.
 *
 * Inline-styled to match the UK footers' dark palette. Pure presentational
 * component (no hooks) — safe to render inside the "use client" UK footers.
 * The light v2 SiteFooter renders its own Tailwind version from the same
 * src/data/recognitionProfiles source.
 */
export default function RecognitionStrip() {
  return (
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: 40, paddingTop: 28 }}>
      <p
        style={{
          color: 'rgba(255,255,255,0.55)',
          fontFamily: 'var(--font-sans)',
          fontWeight: 600,
          fontSize: 12,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          marginBottom: 14,
        }}
      >
        Recognized on
      </p>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '10px 24px',
        }}
      >
        {RECOGNITION_PROFILES.map((p) => (
          <li key={p.href}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-sans)', fontSize: 14.5 }}
              className="hover:text-white"
            >
              {p.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
