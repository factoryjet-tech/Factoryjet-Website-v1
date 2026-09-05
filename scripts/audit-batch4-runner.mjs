#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');

const VOCAB = JSON.parse(fs.readFileSync(path.join(HERE, 'data/capability-terms.json'), 'utf8'));
const SYSTEMS = [...VOCAB.systems].sort((a, b) => b.length - a.length);
const CAPS = [...VOCAB.capabilities].sort((a, b) => b.length - a.length);

const SLOP_TERMS = [
  'seamless', 'seamlessly', 'robust', 'elevate', 'elevates', 'elevating',
  'unlock', 'unlocks', 'unlocking', 'supercharge', 'supercharges', 'supercharging',
  'empower', 'empowers', 'empowering', 'game-changer', 'game changer',
  'leverage', 'leverages', 'leveraging', 'delve', 'delves', 'delving',
  'testament', 'beacon', 'landscape', 'tapestry'
];

export const TARGET_FILES = [
  'src/app/services/ai-agent-development/page.tsx',
  'src/app/services/ai-customer-support-agents/page.tsx',
  'src/app/services/ai-sdr-development/page.tsx',
  'src/app/services/contractor-ai-receptionist/page.tsx',
  'src/app/services/automotive-ai-voice-agents/page.tsx',
  'src/app/services/restaurant-ai-voice-agents/page.tsx',
  'src/app/services/manufacturing-ai-agents/page.tsx',
  'src/app/services/healthcare-ai-agents/page.tsx',
  'src/app/services/legal-ai-agents/page.tsx',
  'src/app/services/chemical-pharmaceutical-ai-agents/page.tsx',
  'src/app/services/agriculture-equipment-ai-agents/page.tsx',
];

// This is the EXACT algorithm from scripts/estimate-rendered-words.mjs
export function extractProse(raw) {
  let s = raw;
  s = s.replace(/^import[^\n]*\n/gm, '');
  s = s.replace(/export const metadata[\s\S]*?\n\};\n/m, '');
  s = s.replace(/const [A-Za-z_]*[Ss]chema[\s\S]*?\n\};\n/gm, '');
  s = s.replace(/dangerouslySetInnerHTML=\{\{[\s\S]*?\}\}/g, '');
  s = s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/[^\n]*$/gm, '');
  s = s.replace(/(className|href|src|id|alt|rel|target|type|width|height|loading|fetchPriority)=\{?["'][^"']*["']\}?/g, '');

  const out = [];
  const JSXISH = /<[A-Za-z/]/;
  for (const m of s.matchAll(/'([^'\\\n]{25,})'|"([^"\\\n]{25,})"|`([^`\\]{25,})`/g)) {
    const text = m[1] || m[2] || m[3];
    if (JSXISH.test(text)) continue;
    out.push(text);
  }
  for (const m of s.matchAll(/>\s*([A-Za-z][^<>{}]{20,}?)\s*</g)) {
    out.push(m[1].replace(/\s+/g, ' '));
  }
  return out;
}

export function fkGrade(text) {
  const words = text.split(/\s+/).filter(Boolean);
  const sentences = (text.match(/[.!?]+(\s|$)/g) || []).length || 1;
  let syl = 0;
  for (const w of words) {
    const t = w.toLowerCase().replace(/[^a-z]/g, '');
    if (!t) continue;
    const groups = t.replace(/e$/, '').match(/[aeiouy]+/g);
    syl += Math.max(1, groups ? groups.length : 1);
  }
  if (!words.length) return 0;
  return 0.39 * (words.length / sentences) + 11.8 * (syl / words.length) - 15.59;
}

export function countTerms(text, list) {
  const lower = ' ' + text.toLowerCase().replace(/\s+/g, ' ') + ' ';
  let total = 0;
  const hits = [];
  for (const term of list) {
    const re = new RegExp('(?<![a-z0-9])' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?![a-z0-9])', 'g');
    const n = (lower.match(re) || []).length;
    if (n) {
      total += n;
      hits.push({ term, count: n });
    }
  }
  return { total, distinct: hits };
}

export function auditFile(relPath) {
  const absPath = path.join(ROOT, relPath);
  if (!fs.existsSync(absPath)) {
    return { relPath, error: 'FILE_NOT_FOUND' };
  }
  const raw = fs.readFileSync(absPath, 'utf8');

  // Metadata extraction from export const metadata block
  let title = '';
  let desc = '';
  const metaBlockMatch = raw.match(/export const metadata[\s\S]*?\n\};/);
  const metaBlock = metaBlockMatch ? metaBlockMatch[0] : raw;

  const titleDirect = metaBlock.match(/title:\s*['"`]([^'"`]+)['"`]/);
  if (titleDirect) {
    title = titleDirect[1];
  } else {
    const titleVarMatch = metaBlock.match(/title:\s*([A-Za-z0-9_]+)/);
    if (titleVarMatch) {
      const varName = titleVarMatch[1];
      const valMatch = raw.match(new RegExp(`const\\s+${varName}[^=]*=\\s*['"\`]([^'"\`]+)['"\`]`));
      if (valMatch) title = valMatch[1];
    }
  }
  const titleLen = title.length;

  const descDirect = metaBlock.match(/description:\s*['"`]([^'"`]+)['"`]/);
  if (descDirect) {
    desc = descDirect[1];
  } else {
    const descVarMatch = metaBlock.match(/description:\s*([A-Za-z0-9_]+)/);
    if (descVarMatch) {
      const varName = descVarMatch[1];
      const valMatch = raw.match(new RegExp(`const\\s+${varName}[^=]*=\\s*['"\`]([^'"\`]+)['"\`]`));
      if (valMatch) desc = valMatch[1];
    }
  }
  const descLen = desc.length;

  // Em dashes
  const emDashes = (raw.match(/—/g) || []).length;

  // Slop hits in raw text excluding imports/schemas
  const lowerRaw = raw.toLowerCase();
  const slopFound = [];
  for (const slop of SLOP_TERMS) {
    const re = new RegExp('(?<![a-z0-9])' + slop.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?![a-z0-9])', 'g');
    const count = (lowerRaw.match(re) || []).length;
    if (count > 0) {
      slopFound.push({ term: slop, count });
    }
  }

  // Schema variable casing check:
  // Must be top-level camelCase matching `const [A-Za-z_]*[Ss]chema`
  const badSchemaNames = [];
  const schemaDeclarations = [...raw.matchAll(/([ \t]*)const\s+([A-Za-z0-9_]+)\s*=\s*\{[\s\S]*?'@context'/g)];
  for (const match of schemaDeclarations) {
    const indent = match[1];
    const name = match[2];
    if (indent.length > 0) {
      badSchemaNames.push(`${name} (indented inside component)`);
    } else if (!/^[a-z][A-Za-z0-9]*[Ss]chema$/.test(name)) {
      badSchemaNames.push(`${name} (not camelCase ending in Schema)`);
    }
  }

  // Breadcrumbs check
  const hasVisibleBreadcrumb = /<Breadcrumbs\s+items=\{/.test(raw);
  const hasBreadcrumbSchema = /<BreadcrumbSchema\s+items=\{/.test(raw);

  // FAQ items check
  const faqItemsMatch = raw.match(/const\s+FAQ_ITEMS[^=]*=\s*\[([\s\S]*?)\];/);
  let faqCount = 0;
  if (faqItemsMatch) {
    faqCount = (faqItemsMatch[1].match(/question:\s*['"`]/g) || []).length;
  } else {
    faqCount = (raw.match(/question:\s*['"`]/g) || []).length;
  }

  // Prose extraction for word count & FK grade
  const proseArray = extractProse(raw);
  const proseText = proseArray.join(' ');
  const words = proseText.split(/\s+/).filter((w) => /[a-z]/i.test(w)).length;
  const grade = Number(fkGrade(proseText).toFixed(2));

  // Vocabulary
  const sys = countTerms(proseText, SYSTEMS);
  const cap = countTerms(proseText, CAPS);
  const density = words ? Number((((sys.total + cap.total) / words) * 1000).toFixed(1)) : 0;

  return {
    relPath,
    words,
    fkGrade: grade,
    distinctSystems: sys.distinct.length,
    systemsList: sys.distinct.map(s => s.term),
    capabilityDensity: density,
    slopCount: slopFound.reduce((acc, s) => acc + s.count, 0),
    slopFound,
    emDashes,
    titleLen,
    title,
    descLen,
    desc,
    faqCount,
    hasVisibleBreadcrumb,
    hasBreadcrumbSchema,
    badSchemaNames,
    proseSentenceCount: (proseText.match(/[.!?]+(\s|$)/g) || []).length,
  };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const results = TARGET_FILES.map(auditFile);
  console.log('\n=== BATCH 4 DETERMINISTIC AUDIT REPORT ===\n');

  let allPassed = true;

  for (const r of results) {
    if (r.error) {
      console.log(`❌ ${r.relPath}: ${r.error}`);
      allPassed = false;
      continue;
    }

    const failures = [];
    if (r.words < 2500 || r.words > 5000) failures.push(`Words: ${r.words} (need 2500-5000)`);
    if (r.fkGrade > 10.00) failures.push(`FK Grade: ${r.fkGrade} (need <= 10.00)`);
    if (r.distinctSystems < 8) failures.push(`Distinct Systems: ${r.distinctSystems} (need >= 8)`);
    if (r.capabilityDensity < 25.0) failures.push(`Cap Density: ${r.capabilityDensity} (need >= 25.0)`);
    if (r.slopCount > 0) failures.push(`Slop Words: ${r.slopCount} (${JSON.stringify(r.slopFound)})`);
    if (r.emDashes > 0) failures.push(`Em-Dashes: ${r.emDashes}`);
    if (r.titleLen < 15 || r.titleLen > 60) failures.push(`Title Len: ${r.titleLen} (need 15-60)`);
    if (r.descLen < 70 || r.descLen > 160) failures.push(`Desc Len: ${r.descLen} (need 70-160)`);
    if (r.faqCount < 20) failures.push(`FAQs: ${r.faqCount} (need >= 20)`);
    if (!r.hasVisibleBreadcrumb) failures.push('Missing <Breadcrumbs items={...} />');
    if (!r.hasBreadcrumbSchema) failures.push('Missing <BreadcrumbSchema items={...} />');
    if (r.badSchemaNames.length > 0) failures.push(`Bad Schema Names: ${r.badSchemaNames.join(', ')}`);

    const status = failures.length === 0 ? '✅ PASS' : '❌ FAIL';
    if (failures.length > 0) allPassed = false;

    console.log(`${status} ${r.relPath}`);
    console.log(`   Words: ${r.words} | FK: ${r.fkGrade} | Sys: ${r.distinctSystems} | Dens: ${r.capabilityDensity} | Slop: ${r.slopCount} | Em: ${r.emDashes} | Title: ${r.titleLen} | Desc: ${r.descLen} | FAQ: ${r.faqCount}`);
    if (failures.length > 0) {
      console.log(`   Failures: ${failures.join('; ')}`);
    }
    console.log('');
  }

  console.log(`\nOVERALL VERDICT: ${allPassed ? 'ALL 11 PAGES PASS 100%' : 'FAILURES DETECTED - REMEDIATION REQUIRED'}\n`);
}
