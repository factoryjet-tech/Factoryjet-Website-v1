#!/usr/bin/env node
/**
 * Fixture tests for the JSON extraction parser. Runs as part of
 * Patch #24 verification. No live API.
 */

import { tryParseJsonForTesting } from '../lib/city-enrichment/runner.js';

interface Case {
  name: string;
  input: string;
  expectOk: boolean;
  expectedKey?: string;
}

const cases: Case[] = [
  {
    name: 'pure JSON',
    input: '{"citySlug":"london","population":{"value":9100000}}',
    expectOk: true,
    expectedKey: 'citySlug',
  },
  {
    name: 'pure JSON with surrounding whitespace',
    input: '   \n\n  {"citySlug":"london"}  \n  ',
    expectOk: true,
    expectedKey: 'citySlug',
  },
  {
    name: 'JSON inside ```json fence after prose',
    input:
      'I\'ll research these fields.\n\nHere is the data:\n\n```json\n{"citySlug":"london","population":{"value":9100000}}\n```\n\nAll done.',
    expectOk: true,
    expectedKey: 'citySlug',
  },
  {
    name: 'JSON inside bare ``` fence after prose',
    input: 'Done.\n\n```\n{"citySlug":"manchester"}\n```',
    expectOk: true,
    expectedKey: 'citySlug',
  },
  {
    name: 'naked JSON after prose preamble',
    input:
      'I will now compile the profile.\n\n{"citySlug":"london","population":{"value":9100000,"unit":"people"}}',
    expectOk: true,
    expectedKey: 'citySlug',
  },
  {
    name: 'JSON with nested braces inside string literals',
    input: 'Result:\n{"citySlug":"london","note":"contains } brace and { other"}',
    expectOk: true,
    expectedKey: 'citySlug',
  },
  {
    name: 'no JSON at all rejects',
    input: 'I could not find the data.',
    expectOk: false,
  },
  {
    name: 'unbalanced JSON rejects',
    input: '{"citySlug":"london"',
    expectOk: false,
  },
];

let failed = 0;
for (const c of cases) {
  let actualOk = false;
  let parsed: unknown = undefined;
  try {
    parsed = tryParseJsonForTesting(c.input);
    actualOk = true;
  } catch {
    actualOk = false;
  }

  const okMatches = actualOk === c.expectOk;
  let keyMatches = true;
  if (okMatches && c.expectOk && c.expectedKey) {
    keyMatches =
      typeof parsed === 'object' && parsed !== null && c.expectedKey in parsed;
  }

  const pass = okMatches && keyMatches;
  // eslint-disable-next-line no-console
  console.log(`${pass ? 'PASS' : 'FAIL'}  ${c.name}`);
  if (!pass) failed += 1;
}

if (failed > 0) {
  // eslint-disable-next-line no-console
  console.error(`${failed} parser test(s) failed`);
  process.exit(1);
}
