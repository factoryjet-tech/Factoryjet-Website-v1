import fs from 'node:fs';

const pages = [
  { name: 'Chemical & Pharma AI Landing Page', path: 'website/src/app/services/chemical-pharmaceutical-ai-agents/page.tsx', targetMin: 2500, targetMax: 5500 },
  { name: 'Agriculture Equipment AI Landing Page', path: 'website/src/app/services/agriculture-equipment-ai-agents/page.tsx', targetMin: 2500, targetMax: 5500 },
  { name: 'Enterprise ERP AI Blog Post', path: 'website/src/lib/legacy-pages/Blog/posts/enterprise-erp-ai-agents-netsuite-sap-epicor-implementation-guide.tsx', targetMin: 1500, targetMax: 4500 }
];

const slopWords = [
  'delve', 'robust', 'seamless', 'seamlessly', 'streamline', 'game-changing', 
  'cutting-edge', 'unprecedented', 'empower', 'elevate', 'transform', 
  'transforming', 'supercharge', 'beacon', "in today's digital landscape", 
  "it's worth noting", 'revolutionary', 'world-class', 'unlock'
];

console.log('=== PHASE 4 AUDIT & VERIFICATION ===\n');

let hasError = false;

for (const p of pages) {
  const content = fs.readFileSync(p.path, 'utf8');

  // Check em dashes
  const emDashes = content.match(/—|--/g) || [];
  if (emDashes.length > 0) {
    console.error(`❌ [${p.name}] Found ${emDashes.length} em-dash (— or --) occurrences!`);
    hasError = true;
  } else {
    console.log(`✅ [${p.name}] 0 em-dashes found.`);
  }

  // Check slop words
  const slopFound = [];
  for (const s of slopWords) {
    const re = new RegExp(`\\b${s}\\b`, 'gi');
    const matches = content.match(re);
    if (matches) {
      slopFound.push(`${s} (${matches.length})`);
    }
  }
  if (slopFound.length > 0) {
    console.error(`❌ [${p.name}] Found forbidden slop words: ${slopFound.join(', ')}`);
    hasError = true;
  } else {
    console.log(`✅ [${p.name}] 0 forbidden slop words found.`);
  }

  // Extract all human visible text
  let s = content;
  s = s.replace(/^import[^\n]*\n/gm, '');
  s = s.replace(/export const metadata[\s\S]*?\n\};\n/m, '');
  s = s.replace(/const [A-Za-z_]*[Ss]chema[\s\S]*?\n\};\n/gm, '');
  s = s.replace(/dangerouslySetInnerHTML=\{\{[\s\S]*?\}\}/g, '');
  s = s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/[^\n]*$/gm, '');
  s = s.replace(/(className|href|src|id|alt|rel|target|type|width|height|loading|fetchPriority)=\{?["'][^"']*["']\}?/g, '');

  const textBlocks = [];
  // 1. Literal strings
  for (const m of s.matchAll(/'([^'\\]{20,})'|"([^"\\]{20,})"|`([^`\\]{20,})`/g)) {
    const txt = m[1] || m[2] || m[3];
    if (!/<[A-Za-z/]/.test(txt)) {
      textBlocks.push(txt);
    }
  }
  // 2. JSX text
  for (const m of s.matchAll(/>\s*([A-Za-z0-9][^<>{}\n]{3,}?)\s*</g)) {
    textBlocks.push(m[1].replace(/\s+/g, ' '));
  }

  const allWords = textBlocks.join(' ').split(/\s+/).filter(w => /[a-zA-Z0-9]/.test(w));
  const totalTokens = content.match(/\b[A-Za-z0-9_'-]+\b/g) || [];

  console.log(`📊 [${p.name}] Natural Prose Words: ${allWords.length} | Raw File Words/Tokens: ${totalTokens.length}`);
  
  if (allWords.length < p.targetMin) {
    console.error(`❌ [${p.name}] Prose word count ${allWords.length} is below minimum ${p.targetMin}!`);
    hasError = true;
  } else {
    console.log(`✅ [${p.name}] Word count meets requirement.`);
  }
  console.log('--------------------------------------------------');
}

if (hasError) {
  console.error('\n❌ AUDIT FAILED! Review issues above.\n');
  process.exit(1);
} else {
  console.log('\n🎉 ALL PHASE 4 AUDIT CHECKS PASSED!\n');
}
