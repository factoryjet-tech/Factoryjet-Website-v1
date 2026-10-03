import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

// Run the actual submitLead implementation with isolated transport/storage.
// No network, Firebase write, lead, email or analytics event is created.
function harness(replies) {
  const calls = [], contexts = [];
  const modules = {
    '@/utils/leadAttribution': { readLeadAttribution: () => ({ landingPage: '/au/ai-development' }) },
    '@/utils/leadService': { resolveServiceCategory: () => 'ai-development', serviceFromValue: () => '' },
    '@/utils/leadConversion': { rememberLeadContext: (...args) => contexts.push(args) },
    'firebase/firestore': { setDoc: async () => {}, doc: () => ({}) },
    '@/firebase': { db: null },
  };
  const source = readFileSync(new URL('../src/utils/submitLead.ts', import.meta.url), 'utf8');
  const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  const exports = {};
  vm.runInNewContext(code, {
    exports, require: name => {
      assert.ok(name in modules, `Unexpected dependency ${name}`);
      return modules[name];
    },
    AbortController, setTimeout, clearTimeout,
    fetch: async (url, init) => {
      calls.push({ url, payload: JSON.parse(init.body) });
      const next = replies.shift();
      if (next instanceof Error) throw next;
      return { ok: next.ok, json: async () => next.data };
    },
  });
  return { submit: exports.submitLead, calls, contexts };
}
const input = { name: 'Local fixture', email: 'fixture@example.invalid', source: 'test', page: '/au/ai-development' };

test('two rejected captures retain the failure path, never remember a conversion context or report success', async () => {
  const h = harness([{ ok: false }, { ok: false }]);
  let success = false, retry = false;
  try { await h.submit(input); success = true; } catch (e) { retry = true; assert.match(e.message, /not confirmed/); }
  assert.equal(success, false);
  assert.equal(retry, true);
  assert.equal(h.contexts.length, 0);
  assert.equal(h.calls.length, 2);
  assert.equal(h.calls[0].payload.docId, h.calls[1].payload.docId, 'retry stays idempotent');
});

test('network failures reject instead of reporting success', async () => {
  const h = harness([new Error('offline'), new Error('offline')]);
  await assert.rejects(h.submit(input), /not confirmed/);
  assert.equal(h.contexts.length, 0);
});

test('successful retry still returns the saved lead and enrichment token', async () => {
  const h = harness([{ ok: false }, { ok: true, data: { ok: true, enrichToken: 'fixture-token', erpLeadId: 'fixture-id' } }]);
  const saved = await h.submit(input);
  assert.equal(saved.ok, true);
  assert.equal(saved.docId, h.calls[0].payload.docId);
  assert.equal(saved.enrichToken, 'fixture-token');
  assert.equal(h.contexts.length, 1);
});

test('HTTP 200 without an explicit positive capture acknowledgement cannot show success', async () => {
  for (const data of [{ ok: false }, null, undefined, { enrichToken: 'fixture-token' }]) {
    const h = harness([{ ok: true, data }, { ok: true, data }]);
    await assert.rejects(h.submit(input), /not confirmed/);
    assert.equal(h.contexts.length, 0);
    assert.equal(h.calls.length, 2);
  }
});
