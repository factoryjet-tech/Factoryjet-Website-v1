import { readFileSync } from 'node:fs';
import { cert, getApps, initializeApp, type App } from 'firebase-admin/app';
import { getFirestore, type Firestore } from 'firebase-admin/firestore';
import { env } from '../config/env.js';

interface ServiceAccountJson {
  project_id: string;
  client_email: string;
  private_key: string;
  [key: string]: unknown;
}

function loadServiceAccount(): ServiceAccountJson {
  const raw = readFileSync(env.GOOGLE_APPLICATION_CREDENTIALS, 'utf-8');
  const parsed = JSON.parse(raw) as ServiceAccountJson;
  if (!parsed.project_id || !parsed.client_email || !parsed.private_key) {
    throw new Error(
      `[firebase-admin] Service account JSON at ${env.GOOGLE_APPLICATION_CREDENTIALS} is missing required fields (project_id / client_email / private_key).`,
    );
  }
  return parsed;
}

function getAdminApp(): App {
  const existing = getApps()[0];
  if (existing) return existing;

  const sa = loadServiceAccount();
  return initializeApp({
    credential: cert({
      projectId: sa.project_id,
      clientEmail: sa.client_email,
      privateKey: sa.private_key,
    }),
    projectId: sa.project_id,
  });
}

export const app: App = getAdminApp();
export const db: Firestore = getFirestore(app);
