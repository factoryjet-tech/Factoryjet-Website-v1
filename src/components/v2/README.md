# /src/components/v2/

This directory holds FactoryJet Design System v2.0 components.

**Read first:**
- `factoryjet.DESIGN.md` (canonical design system, locked May 2026)
- `CLAUDE.md` (project anchor)

**Rules:**
- Default font: `font-fj-body` (Geist) for body, `fj-display` class for headings
- Default background: `bg-fj-cream` (#FAFAF7) — never dark for hero or top-of-page sections
- Conviction words italicised in Fraunces Italic via the `<em>` tag inside any major heading
- Asymmetric grids over symmetric — 60/40 or 7/5 splits, left-aligned content
- See `factoryjet.DESIGN.md` Section 12 for the 15-component canon

**Forbidden:**
- Inter, Roboto, Poppins, DM Sans, Manrope, Plus Jakarta Sans (any font in the AI-slop family)
- Gradient text, rainbow gradients, glowing borders, particles, spinning counters
- Glassmorphism over busy backgrounds
- Dark hero on a homepage or city × service landing page

**Build sequence:**
- M1.a — Foundation components (token system, boring-stats, strategic dark)
- M1.b — Hero + trust + CTA components
- M1.c — Content components

Components from `feat/pipeline-m1.5-components-v2` (PR #34) are NOT migrated here — that branch was built against a superseded spec.

Components from PR #32 (`HeroSection`, `BrowserMockup`, `HartwellMockSite`) live at `src/components/programmatic/` and are treated as legacy v1 — they are not deleted and not modified by M0.
