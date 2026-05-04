/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Inter for body, UI, navigation, buttons (existing brand body font).
        // Resolved via the --font-inter CSS variable wired in src/app/layout.tsx
        // through next/font/google. The `font-inter` utility was previously
        // undefined (assembler emitted it but no token resolved it) — now wired.
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],

        // Source Serif 4 for editorial moments only (display H1, pull quotes).
        // Brand rule: "Inter for body and UI; Source Serif for editorial moments."
        serif: ['var(--font-source-serif)', 'Georgia', 'serif'],
        display: ['var(--font-source-serif)', 'Georgia', 'serif'],

        // Existing keys preserved for backward compatibility with legacy pages.
        // New programmatic components use font-sans / font-serif / font-display.
        heading: ['Poppins', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],

        // === FactoryJet Design System v2.0 (M0 foundation) ===
        // v2 components MUST use these family names. Resolved via CSS
        // variables wired in src/app/layout.tsx through next/font.
        // Per factoryjet.DESIGN.md §3 (locked May 2026).
        'fj-display': ['var(--font-fraunces)', 'Georgia', 'serif'],
        'fj-body': ['var(--font-geist-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        'fj-mono': ['var(--font-geist-mono)', 'Consolas', 'monospace'],

        // Explicit opt-in fallback for any LEGACY component observed to
        // render with the wrong font after a future cleanup. M0 only
        // adds the class — does not apply it anywhere.
        'legacy-inter': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        // Apple/Anthropic-grounded type scale. Weight 500 (not 700) for display
        // sizes — large text gets visual weight from size, not stroke.
        // Format: [size, { lineHeight, letterSpacing, fontWeight }]
        'display-xl': ['clamp(4.5rem, 6vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '500' }],
        'display-lg': ['clamp(3.5rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '500' }],
        'display-md': ['clamp(2.5rem, 4vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '500' }],
        'headline': ['clamp(1.75rem, 2.5vw, 2rem)', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        'title': ['1.375rem', { lineHeight: '1.4', letterSpacing: '0', fontWeight: '500' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0', fontWeight: '400' }],
        'mono-sm': ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.08em', fontWeight: '400' }],
      },
      spacing: {
        // Semantic section spacing token: clamp(64-96px) section vertical padding.
        'section-y': 'clamp(4rem, 8vw, 6rem)',
      },
      maxWidth: {
        // Canonical container max-width for the redesign series.
        'container-xl': '1280px',
      },
      colors: {
        // === FactoryJet Design System v2.0 (M0 foundation) ===
        // v2 components MUST use the fj-* prefix. Per factoryjet.DESIGN.md §2
        // (locked May 2026). Names overlap with the legacy `jet-*` tokens
        // below at the same hex (#0052CC etc.) — both kept during the
        // v1→v2 transition window. Cleanup is a future milestone.
        'fj-cream': '#FAFAF7',
        'fj-ink': '#1A1A1A',
        'fj-jet-blue': '#0052CC',
        'fj-jet-blue-tint': '#E6F0FF',
        'fj-jet-orange': '#FF6B35',
        'fj-jet-orange-tint': '#FEF3E8',
        'fj-jet-green': '#10B981',
        'fj-jet-green-tint': '#E8FAF1',
        'fj-charcoal': '#0F0F12',
        'fj-charcoal-text': '#F5F5F2',
        'fj-charcoal-muted': '#8A8A8F',
        'fj-neutral-50': '#F8F8F5',
        'fj-neutral-100': '#EFEFEA',
        'fj-neutral-200': '#D9D9D2',
        'fj-neutral-400': '#8A8A82',
        'fj-neutral-600': '#4A4A45',

        // === New tokens for the ProgSEO redesign (PR #31) ===
        // All additive — existing tokens below preserved untouched.
        'dark-hero': '#0A0F1C',     // Was hardcoded in assembler.ts as bg-[#0A0F1C]; now a token.
        'bg-soft': '#F8FAFC',       // Canonical off-white. Resolves drift between offwhite/bgLight/jet.white.
        'bg-warm': '#FAF9F5',       // Optional Anthropic-style warm cream for editorial sections.
        'text-meta': '#64748B',     // Canonical mid-grey for meta/secondary text.
        'border-soft': '#E5E7EB',   // Canonical 1px border color.

        // === Brand (locked, do not change) ===
        primary: '#0052CC', // Jet Blue
        'primary-dark': '#003D99', // Darker Jet Blue for UAE
        secondary: '#FF6B35', // Jet Orange
        accent: '#10B981', // Jet Green
        navy: '#0F172A',
        slate: '#334155',
        light: '#E2E8F0',
        bgLight: '#F8FAFC',
        bgBlueTint: '#EFF6FF',
        offwhite: '#F9FAFB', // UAE page background
        gold: '#FFD700', // UAE accent
        jetBlue: '#0052CC',
        jetOrange: '#FF6B35',
        jetGreen: '#10B981',
        'jet-blue': '#0052CC',
        'jet-orange': '#FF6B35',
        'jet-green': '#10B981',
        jet: {
          blue: '#0052CC',
          orange: '#FF6B35',
          green: '#10B981',
          navy: '#0F172A',
          slate: '#1E293B',
          gray: '#64748B',
          light: '#E2E8F0',
          white: '#F8FAFC',
        },
        // WhatsApp colors - WCAG AA compliant
        whatsapp: {
          DEFAULT: '#128C7E', // Dark teal - passes contrast with white (4.64:1)
          hover: '#075E54',   // Darker teal for hover state
          light: '#25D366',   // Original bright green (for non-text use only)
        },
        slate: {
          850: '#1e293b',
          900: '#0f172a',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0052CC 0%, #003D99 50%, #0052CC 100%)',
        'dubai-gradient': 'linear-gradient(135deg, #0052CC 0%, #003D99 50%, #0052CC 100%)',
        'hero-pattern':
          "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
      },
      boxShadow: {
        neumorphic: '20px 20px 60px #d1d5db, -20px -20px 60px #ffffff',
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 60s linear infinite',
      },
      perspective: {
        '1000': '1000px',
        '1500': '1500px',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'scale(0.9) translateX(20px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateX(0)' },
        },
        floatUp: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        floatDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
        cursorMove: {
          '0%, 100%': { transform: 'translate(60%, 60%)', opacity: '1' },
          '50%': { transform: 'translate(70%, 40%)', opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        dash: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      transitionDelay: {
        '1000': '1000ms',
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
};
