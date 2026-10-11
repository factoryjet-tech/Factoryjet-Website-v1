import { execSync } from 'node:child_process'
import { existsSync, readFileSync, statSync } from 'node:fs'
import path from 'node:path'

/**
 * Sitemap helpers — derive per-URL lastmod from git commit timestamps,
 * with filesystem mtime as fallback.
 *
 * Why: Google has stated it ignores changefreq and priority but uses
 * lastmod as a crawl-priority signal — provided the value is trustworthy.
 * Build-time uniform lastmod is discounted. Per-file git timestamps
 * tell Google "this specific page was last meaningfully changed on date X".
 *
 * Build-time only. Static-export compatible.
 */

const REPO_ROOT = process.cwd()
const lastModCache = new Map<string, Date>()
const FALLBACK_DATE = new Date()

/**
 * A one-commit clone (what Cloudflare Pages makes) has no history, so
 * `git log -1 -- <file>` answers with the newest commit for every file.
 * Measured live on 2026-10-11: 349 URLs in six sitemaps carried one
 * identical lastmod that moved on every deploy.
 * scripts/ensure-git-history.mjs fetches the history before the build.
 * If the clone is still shallow, the dates come from the committed
 * manifest written by scripts/update-sitemap-lastmod.mjs.
 */
const HAS_HISTORY = (() => {
  try {
    return (
      execSync('git rev-parse --is-shallow-repository', {
        encoding: 'utf-8',
        cwd: REPO_ROOT,
        stdio: ['pipe', 'pipe', 'ignore'],
      }).trim() === 'false'
    )
  } catch {
    return false
  }
})()

const MANIFEST: Record<string, string> = (() => {
  try {
    const file = path.join(/* turbopackIgnore: true */ REPO_ROOT, 'src/data/sitemap-lastmod.json')
    return JSON.parse(readFileSync(file, 'utf-8')).files ?? {}
  } catch {
    return {}
  }
})()

/**
 * Returns the most recent git commit timestamp for a file.
 * Falls back to fs.statSync().mtime if file is untracked.
 * Falls back to build start time if file does not exist.
 *
 * Memoized — safe to call hundreds of times during sitemap generation.
 */
export function getFileLastMod(relativePath: string): Date {
  if (lastModCache.has(relativePath)) {
    return lastModCache.get(relativePath)!
  }

  // turbopackIgnore prevents Turbopack from statically tracing this dynamic
  // path.join and over-bundling the whole project into the sitemap route
  // (build-time-only fs/git read; static-export safe).
  const absPath = path.join(/* turbopackIgnore: true */ REPO_ROOT, relativePath)

  if (!existsSync(absPath)) {
    lastModCache.set(relativePath, FALLBACK_DATE)
    return FALLBACK_DATE
  }

  if (!HAS_HISTORY && MANIFEST[relativePath]) {
    const date = new Date(MANIFEST[relativePath])
    if (!Number.isNaN(date.getTime())) {
      lastModCache.set(relativePath, date)
      return date
    }
  }

  try {
    const stdout = execSync(
      `git log -1 --format=%cI -- "${relativePath}"`,
      { encoding: 'utf-8', cwd: REPO_ROOT, stdio: ['pipe', 'pipe', 'ignore'] }
    ).trim()

    if (stdout) {
      const date = new Date(stdout)
      if (!Number.isNaN(date.getTime())) {
        lastModCache.set(relativePath, date)
        return date
      }
    }
  } catch {
    // git not available, file untracked, or shell error — fall through
  }

  const mtime = statSync(absPath).mtime
  lastModCache.set(relativePath, mtime)
  return mtime
}

/**
 * Returns the latest lastMod across multiple files. Useful for dynamic
 * routes where the rendered page depends on multiple data files —
 * lastmod should reflect the most recent change to any input.
 */
export function getMaxLastMod(...relativePaths: string[]): Date {
  return relativePaths
    .map(getFileLastMod)
    .reduce(
      (latest, current) => (current > latest ? current : latest),
      new Date(0)
    )
}
