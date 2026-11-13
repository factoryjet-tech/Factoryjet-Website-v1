import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import test from 'node:test';
import ts from 'typescript';

// Shell Wave 2 (13 Nov 2026): shared client list, client strip, nav regroup, CTA label.
const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const toModule = (source) => `data:text/javascript;base64,${Buffer.from(ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 },
}).outputText).toString('base64')}`;

const logoFiles = await import(toModule(read('src/data/clientLogoFiles.ts')));
const clients = await import(toModule(read('src/data/clients.ts')
  .replace("from './clientLogoFiles'", `from '${toModule(read('src/data/clientLogoFiles.ts'))}'`)));

// megaNavData imports lucide icons; stub them so the data loads in plain Node.
const navSource = read('src/components/v2/megaNavData.ts').replace(/import \{([\s\S]*?)\} from 'lucide-react';/, (_, names) =>
  `const ${names.split(',').map((n) => n.trim()).filter(Boolean).map((n) => `${n} = null`).join(', ')};`);
const nav = await import(toModule(navSource));

const caseStudySource = readdirSync(new URL('../src/data/case-studies/', import.meta.url))
  .map((f) => read(`src/data/case-studies/${f}`)).join('\n');

test('client list is exactly the 13 Nov 2026 approved names, no metrics', () => {
  assert.deepEqual(clients.CLIENTS.map((c) => c.name), [
    'Exaco', 'GPSUK', 'Sow Easy', 'DTF Virginia', 'Mannik', 'Shop Holistico',
    'Consult Holistico', 'Belle Maison', 'MUE Wholesale', 'Washington Law Group',
  ]);
  for (const c of clients.CLIENTS) {
    assert.match(c.slug, /^[a-z0-9-]+$/);
    assert.doesNotMatch(`${c.name} ${c.work ?? ''}`, /\d+\s*%|\$\d|\d+x\b/i, `${c.name} carries a metric`);
  }
});

test('GPSUK, Sow Easy and Mannik are never described as Shopify work', () => {
  for (const name of ['GPSUK', 'Sow Easy', 'Mannik']) {
    const c = clients.CLIENTS.find((x) => x.name === name);
    assert.doesNotMatch(c.work ?? '', /shopify/i, name);
  }
});

test('every client case-study link points at a case study that exists', () => {
  for (const c of clients.CLIENTS.filter((x) => x.caseStudy)) {
    const slug = c.caseStudy.replace('/case-studies/', '');
    assert.ok(caseStudySource.includes(`slug: '${slug}'`), c.caseStudy);
  }
});

test('logo manifest matches public/clients exactly, and logos resolve only when a file exists', () => {
  const dir = new URL('../public/clients/', import.meta.url);
  const onDisk = existsSync(dir) ? readdirSync(dir).filter((f) => /^[a-z0-9-]+\.(svg|png)$/.test(f)).sort() : [];
  assert.deepEqual([...logoFiles.CLIENT_LOGO_FILES], onDisk, 'run node scripts/sync-client-logos.mjs');
  for (const c of clients.CLIENTS) {
    const expected = onDisk.includes(`${c.slug}.svg`) ? `/clients/${c.slug}.svg`
      : onDisk.includes(`${c.slug}.png`) ? `/clients/${c.slug}.png` : undefined;
    assert.equal(clients.clientLogoSrc(c.slug), expected, c.slug);
  }
});

test('LogoBar and the footer strip share one list; no page shows two strips', () => {
  const logoBar = read('src/components/v2/LogoBar.tsx');
  const strip = read('src/components/v2/ClientLogoStrip.tsx');
  const css = read('src/components/v2/ClientLogoStrip.css');
  const footer = read('src/components/v2/UsSiteFooter.tsx');
  assert.match(logoBar, /import \{ CLIENTS \} from '@\/data\/clients'/);
  assert.doesNotMatch(logoBar, /const LOGOS/);
  assert.match(logoBar, /data-fj-clients="page"/);
  assert.match(strip, /data-fj-clients="footer"/);
  assert.match(css, /body:has\(\[data-fj-clients="page"\]\) \[data-fj-clients="footer"\] \{ display: none; \}/);
  assert.match(footer, /\{showClients && <ClientLogoStrip \/>\}/);
});

test('client strip is a zero-JS section with an accessible, motion-safe duplicate track', () => {
  const strip = read('src/components/v2/ClientLogoStrip.tsx');
  const css = read('src/components/v2/ClientLogoStrip.css');
  assert.doesNotMatch(strip, /['"]use client['"]|useEffect|useState|framer-motion|gsap/);
  assert.match(strip, /<section /);
  assert.match(strip, /fj-clients__list--dup" aria-hidden="true" inert/);
  assert.match(css, /:hover \.fj-clients__track,\s*\n?\.fj-clients__viewport:focus-within \.fj-clients__track \{ animation-play-state: paused; \}/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)[\s\S]*\.fj-clients__track \{ animation: none;[\s\S]*\.fj-clients__list--dup \{ display: none; \}/);
});

test('top menus are Services, Industries, Work, Insights in US, UK and AU', () => {
  for (const menus of [nav.SIMPLE_MENUS, nav.UK_SIMPLE_MENUS, nav.AU_SIMPLE_MENUS]) {
    assert.deepEqual(menus.map((m) => m.label), ['Industries', 'Work', 'Insights']);
  }
  const src = read('src/components/v2/megaNavData.ts');
  assert.doesNotMatch(src, /company:\s*TALK_TO_US|key: 'company'|key: 'resources'/);
});

test('every mega menu link is a route in src/app (or a known case study / blog post)', () => {
  const all = [...nav.SERVICE_HUBS, ...nav.UK_SERVICE_HUBS, ...nav.AU_SERVICE_HUBS].flatMap((h) =>
    [h.hub, h.feature.href, h.note.href, ...h.columns.flatMap((c) => [...c.items, ...(c.more ? [c.more] : [])].map((i) => i.href))])
    .concat([...nav.SIMPLE_MENUS, ...nav.UK_SIMPLE_MENUS, ...nav.AU_SIMPLE_MENUS].flatMap((m) =>
      [m.feature.href, ...m.columns.flatMap((c) => c.items.map((i) => i.href))]));
  const missing = [];
  for (const href of new Set(all)) {
    const path = href.split('#')[0] || '/';
    if (path === '/') continue;
    if (path.startsWith('/blog/')) continue; // blog posts are data-driven, not page.tsx files
    if (path.startsWith('/case-studies/')) {
      if (!caseStudySource.includes(`slug: '${path.slice('/case-studies/'.length)}'`)) missing.push(href);
      continue;
    }
    if (existsSync(new URL(`../src/app${path}/page.tsx`, import.meta.url))) continue;
    // One dynamic segment in the parent folder, e.g. src/app/uk/[city]/page.tsx for /uk/bristol.
    const parent = new URL(`../src/app${path.slice(0, path.lastIndexOf('/'))}/`, import.meta.url);
    const dynamic = existsSync(parent) && readdirSync(parent).some((d) => /^\[[^.\]]+\]$/.test(d)
      && existsSync(new URL(`${d}/page.tsx`, parent)));
    if (!dynamic) missing.push(href);
  }
  assert.deepEqual(missing, []);
});

test('header says "Talk to us" for founder-labelled CTAs and keeps other offers', () => {
  const src = read('src/components/v2/SiteHeader.tsx');
  assert.equal((src.match(/defaultCtaLabel: 'Talk to us'/g) ?? []).length, 3);
  const re = /\^\\s\*talk to the founder\\s\*\$\/i/;
  assert.match(src, re);
  const retired = /^\s*talk to the founder\s*$/i;
  assert.ok(retired.test('Talk to the Founder') && retired.test('Talk to the founder'));
  assert.ok(!retired.test('Book an Audit') && !retired.test('See a demo on my data'));
  assert.match(src, /\{ctaLabelFor\(cta, cfg\.defaultCtaLabel\)\}/);
});
