#!/usr/bin/env node
/**
 * check-tracked-imports - catch imports that resolve locally but are NOT committed.
 *
 * Why this exists (2026-07-27):
 * Two Cloudflare builds failed with "Module not found: Can't resolve
 * '@/components/ai-visibility/AiVisibilityCtaBand'". The module existed on disk, so
 * `tsc --noEmit` and `next build` both passed locally. But the directory had never
 * been `git add`ed, so CI (which only has committed files) could not resolve it.
 *
 * `tsc` reads the WORKING TREE. CI builds the COMMITTED TREE. This script checks the
 * gap: every local `@/...` or relative import in a tracked source file must resolve
 * to a file that is ALSO tracked by git.
 *
 * Usage:
 *   node scripts/check-tracked-imports.mjs           # fail on untracked imports
 *   node scripts/check-tracked-imports.mjs --staged  # check the staged tree (pre-commit)
 *
 * Exit code 1 on any violation, so it can gate a build or a commit.
 */
import { execSync } from 'node:child_process'
import { existsSync, readFileSync, statSync } from 'node:fs'
import { join, dirname, resolve, relative } from 'node:path'

const ROOT = process.cwd()
const STAGED = process.argv.includes('--staged')

function git(cmd) {
  return execSync(`git ${cmd}`, { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 })
}

/** Files git knows about. With --staged, what WOULD be committed. */
function trackedSet() {
  const out = STAGED
    ? git('diff --cached --name-only --diff-filter=ACMR') + git('ls-files')
    : git('ls-files')
  return new Set(
    out
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean)
  )
}

const tracked = trackedSet()

// Source files we should scan: tracked TS/TSX under src/ (+ staged additions).
const sources = [...tracked].filter(
  (f) => f.startsWith('src/') && /\.(tsx?|mjs|js)$/.test(f) && existsSync(join(ROOT, f))
)

const IMPORT_RE =
  /(?:^|\n)\s*(?:import|export)\s+(?:[\s\S]*?\sfrom\s*)?['"]([^'"]+)['"]|(?:^|[^.\w])require\(\s*['"]([^'"]+)['"]\s*\)|import\(\s*['"]([^'"]+)['"]\s*\)/g

const EXTS = ['', '.ts', '.tsx', '.js', '.jsx', '.mjs', '.json']
const INDEX = ['/index.ts', '/index.tsx', '/index.js', '/index.jsx']

/**
 * tsconfig path aliases, longest prefix first so a more specific alias
 * (@/pages/*) wins over a general one (@/*).
 */
function loadAliases() {
  // Deliberately NOT a JSON parse. tsconfig is JSONC, and stripping block comments
  // corrupts alias keys like "@/*" because the "/*" reads as a comment opener.
  // Pair extraction is both simpler and safe here.
  const found = []
  try {
    const raw = readFileSync(join(ROOT, 'tsconfig.json'), 'utf8')
    const block = raw.match(/"paths"\s*:\s*\{([\s\S]*?)\n\s*\}/)
    if (block) {
      const pair = /"([^"]+)"\s*:\s*\[\s*"([^"]+)"/g
      let m
      while ((m = pair.exec(block[1]))) {
        found.push({ prefix: m[1].replace(/\*$/, ''), target: m[2].replace(/\*$/, '') })
      }
    }
  } catch {
    /* fall through to default */
  }
  if (!found.length) found.push({ prefix: '@/', target: './src/' })
  // longest prefix first so "@/pages/" beats "@/"
  return found.sort((a, b) => b.prefix.length - a.prefix.length)
}
const ALIASES = loadAliases()

/** Resolve a local specifier to a repo-relative path, or null if unresolvable. */
function resolveLocal(spec, fromFile) {
  let base = null
  for (const a of ALIASES) {
    if (spec.startsWith(a.prefix)) {
      base = join(ROOT, a.target, spec.slice(a.prefix.length))
      break
    }
  }
  if (base === null) {
    if (spec.startsWith('./') || spec.startsWith('../')) base = resolve(dirname(join(ROOT, fromFile)), spec)
    else return null // package import, not our problem
  }

  for (const e of EXTS) {
    const p = base + e
    if (existsSync(p) && statSync(p).isFile()) return relative(ROOT, p)
  }
  for (const i of INDEX) {
    const p = base + i
    if (existsSync(p) && statSync(p).isFile()) return relative(ROOT, p)
  }
  return { missing: true, base: relative(ROOT, base) }
}

const untracked = [] // resolves on disk but not committed  -> BREAKS CI
const unresolved = [] // does not resolve at all            -> broken either way

for (const file of sources) {
  const src = readFileSync(join(ROOT, file), 'utf8')
  // strip line comments so a commented-out import is not flagged
  const cleaned = src.replace(/^\s*\/\/.*$/gm, '')
  IMPORT_RE.lastIndex = 0
  let m
  while ((m = IMPORT_RE.exec(cleaned))) {
    const spec = m[1] || m[2] || m[3]
    if (!spec) continue
    const r = resolveLocal(spec, file)
    if (r === null) continue
    if (r.missing) {
      unresolved.push({ file, spec, guess: r.base })
      continue
    }
    if (!tracked.has(r)) untracked.push({ file, spec, target: r })
  }
}

/* ───────────────────────────────────────────────────────────────────────────
   Static asset references.

   Added 2026-07-28 after an audit found 13 live blog posts serving a 404 hero
   image (and a 404 og:image with it). Same failure class as the imports above:
   the reference looks fine in the editor, but the file is either absent or was
   never `git add`ed, so production 404s. The import scanner could not catch it
   because an image is referenced by string path, not by `import`.

   Deliberately conservative: only paths that start with "/" AND end in a known
   asset extension are checked, so route strings like href="/services/seo" and
   API paths like "/api/notify-lead" are never mistaken for files.
   ─────────────────────────────────────────────────────────────────────────── */
const ASSET_EXT = /\.(webp|jpe?g|png|svg|avif|gif|ico|mp4|webm|pdf|txt|xml|json)$/i
const ASSET_REF_RE = /['"](\/[A-Za-z0-9._\-/@]+)['"]/g

/**
 * Routes Next.js GENERATES at build time. These are served fine in production
 * despite having no file in public/, so flagging them is a false positive.
 * Verified: /sitemap.xml returns 200 live while absent from public/.
 */
const GENERATED_ROUTE = /^\/(sitemap[\w-]*\.xml|[\w-]+\/sitemap\.xml|robots\.txt|manifest\.(json|webmanifest)|favicon\.ico|opengraph-image.*|twitter-image.*)$/i

const assetMissing = [] // referenced, not on disk at all
const assetUntracked = [] // on disk, but not committed

for (const file of sources) {
  const src = readFileSync(join(ROOT, file), 'utf8')
  // Strip BOTH line and block comments. Block comments matter: JSDoc examples
  // like `image: '/images/services/foo.webp'` are documentation, not references.
  const cleaned = src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '')
  ASSET_REF_RE.lastIndex = 0
  let m
  const seen = new Set()
  while ((m = ASSET_REF_RE.exec(cleaned))) {
    const ref = m[1]
    if (!ASSET_EXT.test(ref) || seen.has(ref) || GENERATED_ROUTE.test(ref)) continue
    seen.add(ref)
    const onDisk = join(ROOT, 'public', ref)
    const repoRel = `public${ref}`
    if (!existsSync(onDisk)) assetMissing.push({ file, ref })
    else if (!tracked.has(repoRel)) assetUntracked.push({ file, ref, target: repoRel })
  }
}

let bad = false

/*
 * NON-FATAL on purpose. A missing asset still BUILDS fine, it just 404s at
 * runtime, and there is a known pre-existing backlog (27 as of 2026-07-28:
 * the UK og:image set, the case-study images, and two strays). Failing the
 * build on those would block every deploy until all of them are authored.
 * Warn loudly, do not gate. Contrast with untracked assets below, which are
 * always a fresh mistake and are gated.
 */
if (assetMissing.length) {
  console.warn(`\n⚠ ${assetMissing.length} asset reference(s) point at a file that does not exist (these 404 in production):\n`)
  for (const a of assetMissing) console.warn(`   ${a.file}\n      references ${a.ref}\n`)
  console.warn('  Not blocking the build. Fix by creating the asset or correcting the path.\n')
}

/*
 * FATAL. The asset is sitting on disk looking correct locally, but was never
 * `git add`ed, so production 404s it. This is the trap that shipped 13 blog
 * posts with a broken hero and og:image. Always a fresh, one-command fix.
 */
if (assetUntracked.length) {
  bad = true
  console.error(
    `\n✖ ${assetUntracked.length} asset(s) exist on your machine but are NOT committed.` +
      `\n  They will 404 in production:\n`
  )
  for (const a of assetUntracked) console.error(`   ${a.file}\n      references ${a.ref}\n      resolves   ${a.target}   <-- not in git\n`)
  console.error('  Fix: `git add` the asset.\n')
}

if (untracked.length) {
  bad = true
  console.error(
    `\n✖ ${untracked.length} import(s) resolve on your machine but are NOT committed.` +
      `\n  CI only sees committed files, so these WILL fail the production build:\n`
  )
  for (const u of untracked) {
    console.error(`   ${u.file}`)
    console.error(`      imports  ${u.spec}`)
    console.error(`      resolves ${u.target}   <-- not in git\n`)
  }
  console.error('  Fix: either `git add` the target, or remove/comment the import.\n')
}

if (unresolved.length) {
  bad = true
  console.error(`\n✖ ${unresolved.length} import(s) do not resolve at all:\n`)
  for (const u of unresolved) {
    console.error(`   ${u.file}\n      imports ${u.spec}  (looked for ${u.guess}.*)\n`)
  }
}

if (!bad) {
  console.log(
    `✅ check-tracked-imports: passed (${sources.length} tracked source files scanned, imports + static assets).`
  )
} else {
  process.exit(1)
}
