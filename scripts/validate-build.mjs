#!/usr/bin/env node
/**
 * validate-build.mjs — pre-build guardrail for factoryjet.com
 *
 * Catches the classes of error found in the 2026-06-05 audit BEFORE they ship.
 * Runs automatically via the "prebuild" npm script (i.e. on `npm run build`).
 *
 * FATAL checks (exit 1 — block the build):
 *   1. Hand-authored .html files in public/  — these are served verbatim by
 *      Cloudflare Pages and SHADOW the Next.js app (root cause of the live
 *      /ecommerce-development/mumbai/ off-brand page). There should be none.
 *   2. Placeholder phone number (888-000-0000).
 *   3. Internal contact email (cadenceworks.com) leaking onto the public site.
 *   4. Canonical URL whose path does not match the page's route (copy-paste
 *      canonical bugs, e.g. /uk/manchester canonicalised to /manchester),
 *      excluding an explicit cross-canonical allowlist.
 *
 * WARN checks (printed, non-fatal unless STRICT=1):
 *   5. Geo-cheap / %-cheaper / %-below-agency positioning (banned brand framing).
 *      Set STRICT=1 (or flip POSITIONING_FATAL below) once the copy is swept to
 *      make these block the build too.
 *
 * Zero dependencies — Node built-ins only.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const ROOT = process.cwd();
const APP = join(ROOT, 'src', 'app');
const PUBLIC = join(ROOT, 'public');
const STRICT = process.env.STRICT === '1';
const POSITIONING_FATAL = true; // positioning swept 2026-06-05 — now enforced

const fatals = [];
const warns = [];

/* ── helpers ─────────────────────────────────────────────────────────────── */
function walk(dir, filter) {
  const out = [];
  let entries;
  try { entries = readdirSync(dir); } catch { return out; }
  for (const name of entries) {
    const p = join(dir, name);
    let st;
    try { st = statSync(p); } catch { continue; }
    if (st.isDirectory()) {
      if (name === 'node_modules' || name === '.next' || name === '.git') continue;
      out.push(...walk(p, filter));
    } else if (!filter || filter(p)) {
      out.push(p);
    }
  }
  return out;
}
const rel = (p) => relative(ROOT, p);

/* ── 1. public/ HTML overrides ───────────────────────────────────────────── */
for (const f of walk(PUBLIC, (p) => p.toLowerCase().endsWith('.html'))) {
  fatals.push(
    `public/ HTML override: ${rel(f)} — physical .html in public/ is served ` +
    `verbatim and shadows the Next.js app. Delete it (build pages from src/app).`
  );
}

/* ── source-file scans (2,3,5) ───────────────────────────────────────────── */
const srcFiles = walk(join(ROOT, 'src'), (p) => /\.(tsx?|jsx?|mdx?)$/.test(p));

const BANNED_FATAL = [
  { re: /888-000-0000/, msg: 'placeholder phone number 888-000-0000' },
  { re: /cadenceworks\.com/i, msg: 'internal email cadenceworks.com (use bhavesh@factoryjet.com)' },
];
const BANNED_POSITIONING = [
  { re: /cheaper than (US|UK)/i, msg: 'geo-cheap framing "cheaper than US/UK"' },
  // Cost-vs-others framing: a %-figure followed (within ~45 chars) by an agency/
  // studio/rates/benchmark/market/local reference. Catches "60–70% below local
  // rates", "below the Mumbai agency benchmark", "60–70% less than UK agencies",
  // "below central London studios". Deliberately does NOT match internal
  // comparisons like "20–30% cheaper than new builds" or "30% less time".
  { re: /\d{1,2}\s*[–-]?\s*\d{0,2}%\s*(cheaper|less|below)[^.\n]{0,45}(agenc|studio|rates|benchmark|market|local)/i, msg: 'cost-vs-others positioning framing' },
];

for (const f of srcFiles) {
  const text = readFileSync(f, 'utf8');
  const lines = text.split('\n');
  lines.forEach((line, i) => {
    for (const b of BANNED_FATAL) {
      if (b.re.test(line)) fatals.push(`${rel(f)}:${i + 1} — ${b.msg}`);
    }
    for (const b of BANNED_POSITIONING) {
      if (b.re.test(line)) warns.push(`${rel(f)}:${i + 1} — ${b.msg}`);
    }
  });
}

/* ── 4. canonical path matches route ─────────────────────────────────────── */
// Routes whose canonical intentionally points to a DIFFERENT (top-level) URL,
// because a /services/ alias 301-redirects to the canonical top-level page.
const CANONICAL_ALLOW = new Set([
  '/services/shopify-development',   // canonical -> /shopify-development
  '/services/whatsapp-chatbot',      // canonical -> /whatsapp-chatbot
]);
const CANON_RE = /canonical:\s*["']https:\/\/factoryjet\.com(\/[^"']*)["']/g;

function routeOf(file) {
  // src/app/<route>/(page|layout|metadata|something).ext -> "/<route>"
  let d = relative(APP, file).split(sep).slice(0, -1);
  d = d.filter((seg) => !(seg.startsWith('(') && seg.endsWith(')'))); // route groups
  if (d.some((seg) => seg.includes('['))) return null;                // dynamic routes
  return '/' + d.join('/');
}
for (const f of walk(APP, (p) => /\.(tsx?|jsx?)$/.test(p))) {
  const route = routeOf(f);
  if (route === null) continue;
  const text = readFileSync(f, 'utf8');
  let m;
  while ((m = CANON_RE.exec(text)) !== null) {
    const canon = m.group ? m.group(1) : m[1];
    const c = canon.replace(/\/+$/, '') || '/';
    const r = route.replace(/\/+$/, '') || '/';
    if (c !== r && !CANONICAL_ALLOW.has(r)) {
      fatals.push(`${rel(f)} — canonical "${canon}" does not match route "${route}" (allowlist the route in validate-build.mjs if intentional)`);
    }
  }
}

/* ── 5b. _redirects loop seed (source also used as a destination) ─────────── */
try {
  const red = readFileSync(join(PUBLIC, '_redirects'), 'utf8');
  const srcs = new Set();
  const dests = new Set();
  for (const ln of red.split('\n')) {
    const t = ln.trim();
    if (!t || t.startsWith('#')) continue;
    const parts = t.split(/\s+/);
    if (parts.length >= 2) {
      srcs.add(parts[0].replace(/\/+$/, '') || '/');
      dests.add(parts[1].replace(/\/+$/, '') || '/');
    }
  }
  for (const s of srcs) {
    if (dests.has(s) && !s.includes('*') && !s.includes(':')) {
      warns.push(`_redirects — "${s}" is both a redirect source and a destination (possible loop; reconcile direction)`);
    }
  }

  /* ── 5c. redirect source shadowed by a live page (ZOMBIE) ───────────────── */
  // If a 301 source ALSO has a real page, Cloudflare serves the page (static
  // asset precedence) and the redirect never fires — the old URL stays live as
  // a duplicate. This is the /services/web-design/* + Mumbai failure mode.
  const REDIRECT_SOURCE_ALLOW = new Set([
    // add a source path here only if a live page at that path is intentional
  ]);
  for (const s of srcs) {
    if (s === '/' || s.includes('*') || s.includes(':') || REDIRECT_SOURCE_ALLOW.has(s)) continue;
    const base = join(APP, ...s.split('/').filter(Boolean));
    const hasPage = ['page.tsx', 'page.ts', 'page.jsx', 'page.mdx'].some((f) => {
      try { statSync(join(base, f)); return true; } catch { return false; }
    });
    if (hasPage) {
      fatals.push(`_redirects — "${s}" 301s but a live page exists at src/app${s}/page.tsx; the redirect can't fire (zombie duplicate). Delete the page (or remove the redirect).`);
    }
  }
} catch { /* no _redirects */ }

/* ── report ──────────────────────────────────────────────────────────────── */
const promotePositioning = STRICT || POSITIONING_FATAL;
const hardFails = [...fatals, ...(promotePositioning ? warns : [])];

if (warns.length) {
  console.warn(`\n⚠️  validate-build: ${warns.length} warning(s)` + (promotePositioning ? ' (treated as FATAL)' : ' (non-fatal)') + ':');
  for (const w of warns) console.warn('   - ' + w);
}
if (hardFails.length) {
  console.error(`\n❌ validate-build: ${hardFails.length} blocking issue(s):`);
  for (const f of hardFails) console.error('   - ' + f);
  console.error('\nBuild blocked. Fix the above or update the allowlists in scripts/validate-build.mjs.\n');
  process.exit(1);
}
console.log(`✅ validate-build: passed (${srcFiles.length} source files scanned, ${warns.length} non-fatal warning(s)).`);
