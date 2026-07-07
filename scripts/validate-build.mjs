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
for (const f of walk(PUBLIC, (p) => p.toLowerCase().endsWith('.html') && !/[/\\]proposal[/\\]/i.test(p))) {
  fatals.push(
    `public/ HTML override: ${rel(f)} — physical .html in public/ is served ` +
    `verbatim and shadows the Next.js app. Delete it (build pages from src/app).`
  );
}

/* ── source-file scans (2,3,5) ───────────────────────────────────────────── */
// AI-facing public text files (llms.txt etc.) carry positioning copy too —
// the 2026-06-11 audit found geo-cheap framing surviving there because only
// src/ was scanned. Scan them with the same rules.
const srcFiles = [
  ...walk(join(ROOT, 'src'), (p) => /\.(tsx?|jsx?|mdx?)$/.test(p)),
  ...walk(join(ROOT, 'public'), (p) => /llms.*\.txt$/.test(p)),
];

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
  // 2026-06-11: added "lower" — "50–60% lower than comparable X agencies"
  // passed the old (cheaper|less|below) alternation on 30+ lines.
  // (?!...) carve-out: performance metrics like "40–60% lower bounce rates"
  // are stats, not positioning.
  { re: /\d{1,2}\s*[–-]?\s*\d{0,2}%\s*(cheaper|lower|less|below)(?!\s+(bounce|conversion|open|click|cart|churn|abandonment)\b)(?!\s+cost\s+per\s+(lead|click|acquisition|order)\b)[^.\n]{0,45}(agenc|studio|rates|benchmark|market|local)/i, msg: 'cost-vs-others positioning framing' },
  // No-% phrasings: "(significantly) lower/cheaper than US/UK/Indian/local/
  // comparable ... agencies". Caught nothing for months because every banned
  // pattern previously required a digit.
  { re: /\b(lower|cheaper)\s+than\s+(comparable\s+)?(typical\s+)?(US|UK|American|British|Indian|local)\b[^.\n]{0,45}agenc/i, msg: 'geo/locale-cheap framing without % figure' },
  // Offshore-cost SELF-positioning is banned (positioning rule 2026-05-31).
  // Scoped to first-person/brand constructs so editorial blog passages that
  // discuss the offshore market category don't trip the build; those are an
  // editorial-policy call, not a brand-positioning violation.
  { re: /(FactoryJet|we are|we're|our)[^.\n]{0,60}offshore (alternative|advantage|pricing|rates|cost|model)/i, msg: 'offshore-cost self-positioning' },
];
// Multi-line JSX check: BigThreeTrustBlock-class misses. JSX splits copy
// across lines ("60–70%" ... "Less Than US Web Design Agencies"), so the
// line-based scan above cannot see it. Run a small set of whole-file regexes
// with the gaps between JSX lines collapsed.
const BANNED_MULTILINE = [
  { re: /Less\s+Than\s+(US|UK|American|British|Indian|Local)[\s\S]{0,80}Agenc/i, msg: 'geo-cheap stat copy (multi-line JSX)' },
];

// Editorial content (blog posts) may legitimately DISCUSS market pricing
// ("offshore providers charge 50–60% less") — that's commentary, not brand
// positioning. In editorial files, only flag a line when FactoryJet (or
// first-person "we/our") appears in the same line, i.e. self-positioning.
// Site copy (src/app, components, llms.txt) stays brand-agnostic strict,
// because there the brand is always implicit.
const EDITORIAL_RE = /(legacy-pages[\\/]Blog|content[\\/]blog)/;
const SELF_REF_RE = /factoryjet|\bwe\b|\bwe['’]re\b|\bour\b/i;

for (const f of srcFiles) {
  const isEditorial = EDITORIAL_RE.test(f);
  const text = readFileSync(f, 'utf8');
  const lines = text.split('\n');
  lines.forEach((line, i) => {
    for (const b of BANNED_FATAL) {
      if (b.re.test(line)) fatals.push(`${rel(f)}:${i + 1} — ${b.msg}`);
    }
    for (const b of BANNED_POSITIONING) {
      if (b.re.test(line) && (!isEditorial || SELF_REF_RE.test(line)))
        warns.push(`${rel(f)}:${i + 1} — ${b.msg}`);
    }
  });
  // Collapse JSX markup between text nodes, then scan across lines.
  const flat = text.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ');
  for (const b of BANNED_MULTILINE) {
    if (b.re.test(flat)) warns.push(`${rel(f)} — ${b.msg}`);
  }
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

/* ── 6. lead-capture forms must use the durable submitLead path ──────────── */
// Root cause of the 2026-06-22 lead outage: forms wrote leads with an AWAITED
// `setDoc(...)` against the browser Firestore SDK (which can hang forever with
// no error), or just `console.log`'d the data, or rendered inputs that were
// never captured at all (the Sheffield decorative form). Every lead form must
// route through src/utils/submitLead.ts (server-first, non-blocking). These
// checks make that impossible to regress. To intentionally exempt a file, add
// it to LEAD_FORM_ALLOW with a comment explaining why.
const LEAD_FORM_SELF = /utils[\\/]submitLead\.(ts|js)$/;       // the helper itself
const LEAD_FORM_ALLOW = new Set([
  // Dead legacy blog template (NOT rendered — live blog is src/app/blog). Its
  // newsletter input is off-brand template cruft, not a sales-lead form; should
  // be deleted rather than wired into the lead pipeline. Allowlisted 2026-06-22.
  'src/lib/legacy-pages/Blog/App.tsx',
]);
for (const f of srcFiles) {
  if (LEAD_FORM_SELF.test(f) || LEAD_FORM_ALLOW.has(rel(f))) continue;
  const text = readFileSync(f, 'utf8');

  // (a) Fake submit — console.log("Submit"...) with no real capture.
  if (/console\.log\(\s*["'`]\s*submit/i.test(text)) {
    fatals.push(`${rel(f)} — fake form submit (console.log("Submit"...)); route it through submitLead() so the lead is saved + emailed.`);
  }

  // (b) Blocking client Firestore write. submitLead uses a NON-awaited best-effort
  //     write; an AWAITED setDoc/addDoc hangs the form if the SDK stalls.
  const mWrite = text.match(/await\s+(setDoc|addDoc)\s*\(/);
  if (mWrite) {
    fatals.push(`${rel(f)} — awaited ${mWrite[1]}() blocks the form on the browser Firestore SDK (can hang forever); use submitLead() instead.`);
  }

  // (c) Decorative lead form — a raw email input in a file that never reaches
  //     submitLead (directly or via a known durable form component).
  if (/type=["']email["']/.test(text)) {
    const usesDurable =
      /submitLead/.test(text) ||
      /<(LeadFormInline|ContactFormModal|HeroInlineForm)\b/.test(text);
    if (!usesDurable) {
      fatals.push(`${rel(f)} — raw email input not wired to submitLead (decorative form discards the lead); wire it through submitLead() or render <LeadFormInline/>.`);
    }
  }
}

/* ── 7. JSON-LD must be server-rendered (native <script>), never next/script ── */
// next/script's <Script> injects inline scripts CLIENT-SIDE (into the React
// hydration payload), so JSON-LD emitted that way is ABSENT from the
// server-rendered HTML that non-JS AI crawlers (GPTBot, PerplexityBot,
// ClaudeBot) read — silently killing entity/schema visibility in AI search.
// Emit JSON-LD with <JsonLd> (src/components/JsonLd.tsx) or a native
// <script type="application/ld+json"> tag. Fixed site-wide 2026-07-07
// (commit 6e61d4d); this check blocks any regression. Multiline-aware.
for (const f of walk(join(ROOT, 'src'), (p) => /\.(tsx|jsx)$/.test(p))) {
  const text = readFileSync(f, 'utf8');
  let idx = 0;
  while ((idx = text.indexOf('<Script', idx)) !== -1) {
    const after = text[idx + 7]; // char right after "<Script"
    if (after && /[A-Za-z0-9_]/.test(after)) { idx += 7; continue; } // e.g. <Scriptable
    const gt = text.indexOf('>', idx);              // end of the opening tag (covers "/>")
    const tag = gt === -1 ? text.slice(idx) : text.slice(idx, gt + 1);
    if (tag.includes('application/ld+json')) {
      const line = text.slice(0, idx).split('\n').length;
      fatals.push(
        `${rel(f)}:${line} — JSON-LD emitted via next/script <Script> (injects ` +
        `client-side, invisible to non-JS AI crawlers). Use <JsonLd> ` +
        `(src/components/JsonLd.tsx) or a native <script type="application/ld+json"> tag.`
      );
    }
    idx = gt === -1 ? text.length : gt + 1;
  }
}

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
