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

let bad = false

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
  console.log(`✅ check-tracked-imports: passed (${sources.length} tracked source files scanned).`)
} else {
  process.exit(1)
}
