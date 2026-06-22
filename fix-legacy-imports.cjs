#!/usr/bin/env node

/**
 * Script to fix imports in legacy pages after moving from src/pages to src/lib/legacy-pages
 * Changes relative imports to use @ alias
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all .ts and .tsx files in src/lib/legacy-pages
const output = execSync('find src/lib/legacy-pages -name "*.ts" -o -name "*.tsx"', { encoding: 'utf-8' });
const files = output.trim().split('\n').filter(Boolean);

console.log(`Processing ${files.length} files...\n`);

let fixed = 0;

// Map of relative import patterns to @ alias imports
const importMappings = [
  // Context imports
  { from: /from ['"]\.\.\/\.\.\/\.\.\/context\/ContactModalContext['"]/g, to: "from '@/context/ContactModalContext'" },
  { from: /from ['"]\.\.\/\.\.\/context\/ContactModalContext['"]/g, to: "from '@/context/ContactModalContext'" },
  { from: /from ['"]\.\.\/context\/ContactModalContext['"]/g, to: "from '@/context/ContactModalContext'" },

  // Firebase imports
  { from: /from ['"]\.\.\/\.\.\/\.\.\/firebase['"]/g, to: "from '@/firebase'" },
  { from: /from ['"]\.\.\/\.\.\/firebase['"]/g, to: "from '@/firebase'" },
  { from: /from ['"]\.\.\/firebase['"]/g, to: "from '@/firebase'" },

  // Component imports
  { from: /from ['"]\.\.\/\.\.\/\.\.\/components\/Header['"]/g, to: "from '@/components/Header'" },
  { from: /from ['"]\.\.\/\.\.\/components\/Header['"]/g, to: "from '@/components/Header'" },
  { from: /from ['"]\.\.\/components\/Header['"]/g, to: "from '@/components/Header'" },

  { from: /from ['"]\.\.\/\.\.\/\.\.\/components\/Footer['"]/g, to: "from '@/components/Footer'" },
  { from: /from ['"]\.\.\/\.\.\/components\/Footer['"]/g, to: "from '@/components/Footer'" },
  { from: /from ['"]\.\.\/components\/Footer['"]/g, to: "from '@/components/Footer'" },

  { from: /from ['"]\.\.\/\.\.\/\.\.\/components\/SEOHead['"]/g, to: "from '@/components/SEOHead'" },
  { from: /from ['"]\.\.\/\.\.\/components\/SEOHead['"]/g, to: "from '@/components/SEOHead'" },
  { from: /from ['"]\.\.\/components\/SEOHead['"]/g, to: "from '@/components/SEOHead'" },

  { from: /from ['"]\.\.\/\.\.\/\.\.\/components\/ScrollToTop['"]/g, to: "from '@/components/ScrollToTop'" },
  { from: /from ['"]\.\.\/\.\.\/components\/ScrollToTop['"]/g, to: "from '@/components/ScrollToTop'" },
  { from: /from ['"]\.\.\/components\/ScrollToTop['"]/g, to: "from '@/components/ScrollToTop'" },

  { from: /from ['"]\.\.\/\.\.\/\.\.\/components\/ScheduleCallModal['"]/g, to: "from '@/components/ScheduleCallModal'" },
  { from: /from ['"]\.\.\/\.\.\/components\/ScheduleCallModal['"]/g, to: "from '@/components/ScheduleCallModal'" },
  { from: /from ['"]\.\.\/components\/ScheduleCallModal['"]/g, to: "from '@/components/ScheduleCallModal'" },

  // Utils imports
  { from: /from ['"]\.\.\/\.\.\/\.\.\/utils\/gtm['"]/g, to: "from '@/utils/gtm'" },
  { from: /from ['"]\.\.\/\.\.\/utils\/gtm['"]/g, to: "from '@/utils/gtm'" },
  { from: /from ['"]\.\.\/utils\/gtm['"]/g, to: "from '@/utils/gtm'" },

  { from: /from ['"]\.\.\/\.\.\/\.\.\/utils\/analytics['"]/g, to: "from '@/utils/analytics'" },
  { from: /from ['"]\.\.\/\.\.\/utils\/analytics['"]/g, to: "from '@/utils/analytics'" },
  { from: /from ['"]\.\.\/utils\/analytics['"]/g, to: "from '@/utils/analytics'" },
];

files.forEach((file) => {
  let content = fs.readFileSync(file, 'utf-8');
  const originalContent = content;
  let modified = false;

  // Apply all import mappings
  importMappings.forEach(({ from, to }) => {
    if (from.test(content)) {
      content = content.replace(from, to);
      modified = true;
    }
  });

  if (modified && content !== originalContent) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`✅ Fixed: ${file}`);
    fixed++;
  }
});

console.log(`\n✨ Done! Fixed ${fixed} files`);
