#!/bin/bash
# Run this from your terminal inside FactoryJet/website/
# Commits all landing page pipeline files built May 8 2026

set -e

cd "$(git rev-parse --show-toplevel)"

git add \
  CLAUDE.md \
  pipeline/LANDING-PAGE-PIPELINE.md \
  pipeline/brand-references/factoryjet-canonical.html \
  pipeline/skills/fj-cta.skill.md \
  pipeline/skills/fj-comparison.skill.md \
  pipeline/skills/fj-dark-section.skill.md \
  pipeline/skills/fj-hero.skill.md \
  pipeline/skills/fj-locale.skill.md \
  pipeline/skills/fj-motion.skill.md \
  pipeline/skills/fj-seo-schema.skill.md \
  pipeline/skills/fj-stats.skill.md \
  pipeline/scripts-ts/lib/city-enrichment/enrichment-prompt.ts \
  pipeline/scripts-ts/src/step7/prompts/system.ts \
  public/llms.txt

git commit -m "feat: landing page design automation pipeline (v1)

- CLAUDE.md: backport Clash Display + Inter typography pivot (May 2026)
- pipeline/LANDING-PAGE-PIPELINE.md: master prompt template (Meng To three-layer system)
- pipeline/brand-references/factoryjet-canonical.html: Austin canonical HTML reference
- pipeline/skills/: 8 per-workflow skill files (hero, dark-section, stats, comparison,
  motion, locale, seo-schema, cta)
- enrichment-prompt.ts: brand voice + copy-readiness rules injected
- step7/system.ts: sync banned words + tone/locale pricing rules
- public/llms.txt: US priority cities + programmatic URLs + AI crawler policy

Pipeline execution order: enrich → generate → assemble page → Lighthouse → push
Priority next step: pnpm enrich --country us --city austin"

echo ""
echo "✓ Committed. Run: git push origin \$(git branch --show-current)"
