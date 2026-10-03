import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import postcss from 'postcss';

const css = postcss.parse(readFileSync(new URL('../src/components/v2/AiAgentDevelopmentSections.css', import.meta.url), 'utf8'));
const answers = [];
css.walkRules('.aiAgentPage .ans', rule => answers.push(rule));
const declarations = rule => Object.fromEntries(rule.nodes.filter(node => node.type === 'decl').map(node => [node.prop, node.value]));

test('shared FAQ answers are plain and aligned with question text at every breakpoint', () => {
  assert.equal(answers.length, 2);
  const base = declarations(answers.find(rule => rule.parent.type === 'root'));
  assert.equal(base['border-left'], '0');
  assert.equal(base.background, 'transparent');
  assert.equal(base.padding, '0');
  assert.equal(base.margin, '0 0 22px 44px');
  const mobile = declarations(answers.find(rule => rule.parent.type === 'atrule'));
  assert.equal(mobile['margin-left'], '34px');
  assert.equal(mobile.padding, '0');
});

test('verification checkmark geometry remains intact', () => {
  let checkmark;
  css.walkRules('.aiAgentPage .ventry::before', rule => {
    if (rule.parent.type === 'root') checkmark = declarations(rule);
  });
  assert.equal(checkmark['border-left'], '2px solid var(--accent)');
  assert.equal(checkmark['border-bottom'], '2px solid var(--accent)');
  assert.equal(checkmark.transform, 'rotate(-45deg)');
});
