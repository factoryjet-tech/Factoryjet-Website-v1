// Backward-compat shim — the canonical location is src/data/countries/gb/.
//
// Legacy v1 page paths (`src/app/uk/*`, `src/lib/uk-pages/*`) and the
// `src/app/sitemap-uk/` route import from `@/data/uk`. This shim
// re-exports everything `src/data/countries/gb/index.ts` exposes so
// those import paths keep working without modification.
//
// New v2 code MUST import from `@/data/countries/gb` directly.

export * from '@/data/countries/gb'
