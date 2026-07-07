import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, initializeFirestore, type Firestore } from "firebase/firestore";

// Firebase is used ONLY for Firestore (lead capture). Firebase Analytics is
// intentionally NOT initialized here.
//
// Why (2026-07-06): getAnalytics(app) auto-initializes a SECOND GA4 stream and
// sends page_view/session_start/etc. to the Firebase-linked measurement ID
// (G-ZZ03T8W2VR) — a different property from the site's real analytics
// (G-N40S2Q8E1J, owned by the GTM container GTM-PKWD8SHF). This split every
// pageview/session across two properties and polluted attribution. Verified live
// via a /g/collect beacon: `tid=G-ZZ03T8W2VR ... en=page_view ep.origin=firebase`.
// measurementId is omitted from the config so getAnalytics can never silently
// resurrect the foreign stream. Do NOT re-add firebase/analytics here — all site
// analytics belong to GTM/G-N40S2Q8E1J.
const firebaseConfig = {
  apiKey:            process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain:        process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId:         process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket:     process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId:             process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
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
function createDb(): Firestore | undefined {
  try {
    return initializeFirestore(app, { experimentalAutoDetectLongPolling: true });
  } catch {
    // initializeFirestore has already run once (HMR / chunk re-eval): reuse it.
    try {
      return getFirestore(app);
    } catch {
      // "Service firestore is not available": the firebase/firestore chunk had
      // not registered its service component yet when this module evaluated — a
      // Turbopack chunk-ordering race (non-deterministic across production
      // rebuilds under Next 16). This MUST NOT throw: an uncaught throw here
      // propagates through every form's static `import '@/firebase'` and crashes
      // React hydration for the WHOLE page. Observed symptom (2026-07-07 outage):
      // a blank page in some browsers, a renderer out-of-memory crash ("This page
      // couldn't load") in others. Degrade gracefully instead — leads still
      // capture via the authoritative server path (submitLead -> /api/notify-lead);
      // only the best-effort client Firestore mirror is skipped. The root-cause
      // trigger (barrel-optimizing firebase, which fragments this side-effectful
      // registration) was also removed from next.config.mjs optimizePackageImports.
      return undefined;
    }
  }
}
const db = (typeof window !== 'undefined' ? createDb() : undefined) as Firestore | undefined;

// Keep the async function for backwards compatibility
const initFirebase = async () => {
  return { app, db };
};

export { app, db, initFirebase };
