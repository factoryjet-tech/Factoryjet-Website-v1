import { readFileSync } from 'node:fs';
import { env } from '../config/env.js';
import { db } from '../lib/firebase-admin.js';

const HEALTH_DOC_PATH = 'pipeline_meta/health';
const EXPECTED_PROJECT_ID = 'factoryjet-pipeline';

interface CredentialsView {
  project_id?: string;
  client_email?: string;
}

async function main(): Promise<void> {
  const creds = JSON.parse(
    readFileSync(env.GOOGLE_APPLICATION_CREDENTIALS, 'utf-8'),
  ) as CredentialsView;

  console.log(`[smoke] Credentials path:    ${env.GOOGLE_APPLICATION_CREDENTIALS}`);
  console.log(`[smoke] Project ID:          ${creds.project_id ?? '(missing)'}`);
  console.log(`[smoke] Service account:     ${creds.client_email ?? '(missing)'}`);

  if (creds.project_id !== EXPECTED_PROJECT_ID) {
    throw new Error(
      `Wrong Firebase project. Expected '${EXPECTED_PROJECT_ID}', got '${creds.project_id ?? 'undefined'}'. Refusing to run smoke test against the wrong project.`,
    );
  }
  console.log(`[smoke] ✓ Project assertion passed`);

  const testValue = `smoke-test-${Date.now()}`;
  const docRef = db.doc(HEALTH_DOC_PATH);

  // 1. Write
  await docRef.set({
    test: testValue,
    timestamp: new Date().toISOString(),
    invocation: 'pipeline-smoke-test',
  });
  console.log(`[smoke] ✓ Write OK`);

  // 2. Read back
  const snap = await docRef.get();
  if (!snap.exists) {
    throw new Error('Health doc missing after write');
  }
  const data = snap.data();
  if (data?.test !== testValue) {
    throw new Error(
      `Value mismatch: wrote '${testValue}', read '${String(data?.test)}'`,
    );
  }
  console.log(`[smoke] ✓ Read OK (value matches)`);

  // 3. Delete
  await docRef.delete();
  console.log(`[smoke] ✓ Delete OK`);

  // 4. Confirm gone
  const after = await docRef.get();
  if (after.exists) {
    throw new Error('Health doc still exists after delete');
  }
  console.log(`[smoke] ✓ Cleanup verified`);

  console.log(`\n[smoke] ALL CHECKS PASSED — Firebase Admin SDK wired correctly`);
  process.exit(0);
}

main().catch((err: unknown) => {
  const message = err instanceof Error ? err.message : String(err);
  console.error(`\n[smoke] FAILED: ${message}`);
  if (err instanceof Error && err.stack) console.error(err.stack);
  process.exit(1);
});
