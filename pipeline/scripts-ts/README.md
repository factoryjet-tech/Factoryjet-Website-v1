# pipeline/scripts-ts

TypeScript runtime workspace for the FactoryJet programmatic SEO pipeline.
Standalone install — intentionally NOT a pnpm workspace member, to keep
pipeline tooling fully isolated from the Next.js website build.

## Setup

1. Node 20+ and pnpm installed.
2. Service account JSON at `~/.factoryjet/firebase-admin-pipeline.json`
   (mode `600`, project `factoryjet-pipeline`).
3. From this directory:

```bash
   pnpm install
   pnpm typecheck
   pnpm smoke
```

## Smoke test

Asserts the credentials' `project_id` is `factoryjet-pipeline`, then
round-trips a `pipeline_meta/health` document against Firestore
(write → read-back → equality assert → delete → confirm-gone).

Exits `0` on success, `1` on any failure.

## Layout

| Path                         | Purpose                                               |
| ---------------------------- | ----------------------------------------------------- |
| `config/env.ts`              | zod-validated env loader (single source for env vars) |
| `config/country-tiers.ts`    | Geographic priority scoring constants                 |
| `lib/firebase-admin.ts`      | Canonical Firebase Admin SDK init                     |
| `scripts/smoke-test.ts`      | Firestore round-trip health check                     |

## Conventions

- ESM with NodeNext resolution → relative imports use `.js` extension
  even when the source file is `.ts`.
- All env access goes through `config/env.ts`. Never read `process.env.X`
  directly elsewhere.
- All Firestore access goes through `lib/firebase-admin.ts`. Never re-init
  the Admin SDK in another file.
