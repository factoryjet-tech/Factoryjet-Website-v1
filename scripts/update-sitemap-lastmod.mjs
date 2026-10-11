#!/usr/bin/env node
/**
 * update-sitemap-lastmod.mjs: write src/data/sitemap-lastmod.json, the fallback that
 * sitemap-helpers.ts uses when the build has no commit history (see ensure-git-history.mjs).
 *
 * Run it from a full clone before committing page changes:
 *   node scripts/update-sitemap-lastmod.mjs
 * Each page file gets the date of the last commit that touched it. A file with changes
 * not yet committed (modified, staged or new) gets the current time, because the commit
 * about to be made is its real last change.
 */
import { execSync } from 'node:child_process'
import { existsSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import path from 'node:path'

const SCOPE = 'src/app src/data'
const sh = (cmd) => execSync(cmd, { encoding: 'utf8', maxBuffer: 1 << 28, stdio: ['ignore', 'pipe', 'ignore'] })
if (sh('git rev-parse --is-shallow-repository').trim() === 'true') {
  console.error('update-sitemap-lastmod: this clone is shallow, so dates would be wrong. Run it from a full clone.')
  process.exit(1)
}
const wanted = (f) => f.endsWith('/page.tsx') || f.startsWith('src/data/')
const dates = {}
let current = null
for (const line of sh(`git log --format=@%cI --name-only -- ${SCOPE}`).split('\n')) {
  if (line.startsWith('@')) current = line.slice(1)
  else if (line && !(line in dates)) dates[line] = current
}
const now = new Date().toISOString()
const walk = (p) => (statSync(p).isDirectory() ? readdirSync(p).flatMap((n) => walk(path.join(p, n))) : [p])
let dirty = 0
for (const row of sh(`git status --porcelain -- ${SCOPE}`).split('\n').filter(Boolean)) {
  const p = row.slice(3).split(' -> ').pop().trim().replace(/^"|"$/g, '')
  if (!existsSync(p)) continue
  for (const f of walk(p)) { dates[f] = now; dirty++ }
}
const files = {}
for (const f of Object.keys(dates).sort()) if (wanted(f) && f !== 'src/data/sitemap-lastmod.json' && existsSync(f)) files[f] = new Date(dates[f]).toISOString()
writeFileSync('src/data/sitemap-lastmod.json', JSON.stringify({ generated: now, files }, null, 1) + '\n')
console.log(`update-sitemap-lastmod: ${Object.keys(files).length} files, ${dirty} with uncommitted changes dated now`)
