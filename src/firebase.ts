import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, initializeFirestore, type Firestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey:            process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain:        process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId:         process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket:     process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId:             process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId:     process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Fail fast in dev if env vars are missing — caught at module load
if (process.env.NODE_ENV !== 'production') {
  const missing = Object.entries(firebaseConfig)
    .filter(([, v]) => !v)
    .map(([k]) => k);
  if (missing.length) {
    console.warn(
      `[firebase] missing env vars: ${missing.join(', ')}. ` +
      `Set them in .env.local — see .env.example.`
    );
  }
}

// Initialize Firebase (idempotent — avoids duplicate-app errors on re-import).
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

// Firestore is initialised in the browser only. Calling getFirestore() during
// the static-export server prerender can intermittently throw "Service
// firestore is not available" under Turbopack chunk ordering, and since every
// page carries Firebase (via the sitewide contact modal) that error can break
// the build on any route. Every read/write happens client-side in a form
// submit handler, so the server-side value is never used.
//
// Transport: use initializeFirestore with experimentalAutoDetectLongPolling so
// the SDK falls back to long-polling when the streaming WebChannel can't open.
// The default transport was hanging `setDoc` forever in production (no error,
// no network) and silently dropping every lead (incident 2026-06-22). Wrapped
// in try/catch because initializeFirestore must run at most once per app —
// a re-import (HMR / chunk re-eval) falls back to the already-created instance.
function createDb(): Firestore {
  try {
    return initializeFirestore(app, { experimentalAutoDetectLongPolling: true });
  } catch {
    return getFirestore(app);
  }
}
const db = (typeof window !== 'undefined' ? createDb() : undefined) as Firestore;

// Keep the async function for backwards compatibility
const initFirebase = async () => {
  return { app, analytics, db };
};

export { app, analytics, db, initFirebase };
