#!/usr/bin/env node
/**
 * ensure-git-history.mjs: give the build the commit history that sitemap dates need.
 *
 * Why: src/lib/sitemap-helpers.ts dates each sitemap URL with `git log -1 -- <file>`.
 * Cloudflare Pages clones the repo one commit deep, so that command returned the newest
 * commit for EVERY file, and six sitemaps (349 URLs) carried one identical lastmod that
 * changed on every deploy (measured live 2026-10-11). Google uses lastmod only when it
 * is consistently and verifiably accurate, so it had no way to tell which pages changed.
 *
 * What it does: if the clone is shallow, fetch the commits and trees (no file contents)
 * from the public repo. Measured 2026-10-11 on a one-commit clone: 2.7 seconds, and
 * per-file dates were correct afterwards.
 *
 * It never fails the build. If the fetch does not work, sitemap-helpers.ts falls back
 * to the committed manifest src/data/sitemap-lastmod.json (scripts/update-sitemap-lastmod.mjs).
 * It writes public/build-info.json so the result can be checked on the live site.
 * Error text is never written to that file: a git error can contain a remote URL.
 */
import { execSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'

const REPO = 'https://github.com/factoryjet-tech/Factoryjet-Website-v1.git'
const run = (cmd) => execSync(cmd, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], timeout: 180000 }).trim()
const safe = (e) => String(e?.stderr || e?.message || e).replace(/\/\/[^@\s/]+@/g, '//***@').slice(0, 300)

const info = { builtAt: new Date().toISOString(), shallowBefore: null, shallowAfter: null, commits: null, fetch: 'not needed' }
try {
  info.shallowBefore = run('git rev-parse --is-shallow-repository') === 'true'
  if (info.shallowBefore) {
    const branch = process.env.CF_PAGES_BRANCH || 'NextJS'
    const attempts = [
      'git fetch --quiet --filter=blob:none --unshallow origin',
      `git fetch --quiet --filter=blob:none --unshallow ${REPO} ${branch}`,
    ]
    info.fetch = 'failed'
    for (let i = 0; i < attempts.length; i++) {
      try {
        run(attempts[i])
        if (run('git rev-parse --is-shallow-repository') === 'false') { info.fetch = `ok (attempt ${i + 1})`; break }
      } catch (e) {
        console.log(`ensure-git-history: attempt ${i + 1} did not work: ${safe(e)}`)
      }
    }
  }
  info.shallowAfter = run('git rev-parse --is-shallow-repository') === 'true'
  info.commits = Number(run('git rev-list --count HEAD'))
} catch (e) {
  info.fetch = 'git unavailable'
  console.log(`ensure-git-history: ${safe(e)}`)
}
console.log(`ensure-git-history: ${JSON.stringify(info)}`)
try { writeFileSync('public/build-info.json', JSON.stringify(info) + '\n') } catch { /* read-only tree: the log line above is enough */ }
process.exit(0)
