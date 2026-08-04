import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { submitLead } from "@/utils/submitLead";

/* ═══════════════════════════════════════════════════════════
   GLOBAL CSS — Mobile-First Responsive, Lighthouse 100 Optimized
   - Media queries for 4 breakpoints (mobile-first)
   - Min 44px touch targets for WCAG
   - Reduced-motion support
   - CSS containment for CLS prevention
   - System font stack fallback for LCP
   ═══════════════════════════════════════════════════════════ */

const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { -webkit-text-size-adjust: 100%; text-size-adjust: 100%; scroll-behavior: smooth; }

:root {
  --blue: #0052CC; --blue-dark: #003380; --blue-light: #E6F0FF; --blue-50: #F0F4FF;
  --orange: #FF6B35; --orange-dark: #E55A2B; --orange-light: #FFF7ED;
  --green: #10B981; --green-dark: #059669; --green-light: #ECFDF5;
  --navy: #0F172A; --slate: #334155; --gray: #64748B; --gray-light: #94A3B8;
  --border: #E2E8F0; --bg: #F8FAFC; --bg-dark: #0a0f1c;
  --font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  --radius-sm: 8px; --radius-md: 10px; --radius-lg: 12px; --radius-xl: 16px;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08); --shadow-md: 0 4px 12px rgba(0,0,0,0.1);
  --shadow-lg: 0 12px 32px rgba(0,0,0,0.12);
  --max-w: 720px; --section-py: 48px; --section-px: 20px;
  --contain: layout style;
}
@media(min-width:640px){ :root { --section-py: 60px; --section-px: 24px; } }
@media(min-width:1024px){ :root { --section-py: 72px; --section-px: 32px; } }

body, .fj-root { font-family: var(--font); color: var(--navy); background: #fff; line-height: 1.6; -webkit-font-smoothing: antialiased; }

/* ── ACCESSIBILITY ── */
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
:focus-visible { outline: 2px solid var(--blue); outline-offset: 2px; border-radius: 4px; }
@media(prefers-reduced-motion:reduce){ *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }

/* ── LAYOUT ── */
.fj-section { padding: var(--section-py) var(--section-px); contain: var(--contain); }
.fj-container { max-width: var(--max-w); margin: 0 auto; width: 100%; }

/* ── TYPOGRAPHY — Mobile First ── */
.fj-kicker { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 10px; line-height: 1.4; }
.fj-h1 { font-size: clamp(26px, 5vw, 40px); font-weight: 800; line-height: 1.12; letter-spacing: -0.025em; margin: 0 0 16px; }
.fj-h2 { font-size: clamp(22px, 4vw, 30px); font-weight: 800; line-height: 1.2; letter-spacing: -0.02em; margin: 0 0 16px; }
.fj-h3 { font-size: clamp(15px, 2.5vw, 17px); font-weight: 700; line-height: 1.35; margin: 0; }
.fj-body { font-size: 15px; line-height: 1.7; color: var(--slate); }
.fj-small { font-size: 13px; line-height: 1.5; color: var(--gray); }

/* ── BUTTONS — Min 44px touch target ── */
.fj-btn { display: inline-flex; align-items: center; justify-content: center; gap: 6px; min-height: 48px; padding: 14px 28px; border-radius: var(--radius-md); font-weight: 700; font-size: 15px; font-family: var(--font); text-decoration: none; border: none; cursor: pointer; transition: transform 0.15s ease, box-shadow 0.15s ease; line-height: 1.2; white-space: nowrap; }
.fj-btn:active { transform: scale(0.98); }
.fj-btn-primary { background: var(--orange); color: #fff; box-shadow: 0 4px 14px rgba(255,107,53,0.3); }
.fj-btn-blue { background: var(--blue); color: #fff; box-shadow: 0 4px 14px rgba(0,82,204,0.25); }
.fj-btn-green { background: var(--green); color: #fff; box-shadow: 0 4px 14px rgba(16,185,129,0.3); }
.fj-btn-ghost { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.15); color: #fff; }
.fj-btn-wa { background: #25D366; color: #fff; box-shadow: 0 4px 14px rgba(37,211,102,0.3); }
@media(max-width:480px){ .fj-btn { width: 100%; justify-content: center; font-size: 14px; padding: 14px 20px; } }

/* ── NAV ── */
.fj-nav { display: flex; justify-content: space-between; align-items: center; padding: 14px var(--section-px); background: rgba(255,255,255,0.97); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid var(--border); position: sticky; top: 0; z-index: 100; contain: layout style; }
.fj-nav-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
.fj-nav-mark { width: 34px; height: 34px; background: var(--blue); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 800; font-size: 13px; }
.fj-nav-name { font-weight: 700; font-size: 16px; color: var(--navy); letter-spacing: -0.01em; display: block; }
.fj-nav-sub { font-size: 10px; color: var(--gray); font-weight: 500; display: block; margin-top: -2px; }
@media(max-width:380px){ .fj-nav-sub { display: none; } .fj-nav-name { font-size: 14px; } }
.fj-nav-cta { background: var(--orange); color: #fff; padding: 10px 20px; border-radius: 8px; font-weight: 600; font-size: 13px; border: none; cursor: pointer; font-family: var(--font); min-height: 44px; display: flex; align-items: center; }

/* ── HERO ── */
.fj-hero { background: var(--bg-dark); padding: 44px var(--section-px) 52px; position: relative; overflow: hidden; }
@media(min-width:640px){ .fj-hero { padding: 56px var(--section-px) 64px; } }
.fj-hero-glow1 { position: absolute; top: -100px; right: -100px; width: 400px; height: 400px; background: radial-gradient(circle, rgba(0,82,204,0.12) 0%, transparent 60%); pointer-events: none; }
.fj-hero-glow2 { position: absolute; bottom: -80px; left: -80px; width: 250px; height: 250px; background: radial-gradient(circle, rgba(255,107,53,0.06) 0%, transparent 60%); pointer-events: none; }
.fj-hero-grid { position: absolute; inset: 0; opacity: 0.03; pointer-events: none; background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 48px 48px; }
.fj-hero-inner { max-width: var(--max-w); margin: 0 auto; position: relative; z-index: 2; }
.fj-breadcrumb { font-size: 12px; color: rgba(255,255,255,0.35); margin-bottom: 16px; }
.fj-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(0,82,204,0.15); border: 1px solid rgba(0,82,204,0.25); border-radius: 100px; padding: 7px 16px; margin-bottom: 20px; }
.fj-badge-emoji { font-size: 15px; }
.fj-badge-text { color: rgba(255,255,255,0.8); font-size: 12px; font-weight: 500; }
@media(max-width:480px){ .fj-badge-text { font-size: 11px; } }
.fj-hero-h1 { color: #fff; }
.fj-hero-sub { font-size: 15px; color: rgba(255,255,255,0.65); line-height: 1.65; margin: 0 0 28px; max-width: 620px; }
@media(min-width:640px){ .fj-hero-sub { font-size: 16px; } }
.fj-hero-ctas { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 32px; }
@media(max-width:480px){ .fj-hero-ctas { flex-direction: column; } }
.fj-stats { display: flex; flex-wrap: wrap; gap: 24px; }
@media(min-width:640px){ .fj-stats { gap: 32px; } }
.fj-stat-num { font-size: 22px; font-weight: 800; color: var(--orange); letter-spacing: -0.02em; }
@media(min-width:640px){ .fj-stat-num { font-size: 24px; } }
.fj-stat-label { font-size: 11px; color: rgba(255,255,255,0.45); margin-top: 3px; font-weight: 500; max-width: 160px; }

/* ── TRUST BAR ── */
.fj-trust { background: var(--bg); padding: 14px var(--section-px); border-bottom: 1px solid var(--border); contain: layout style; }
.fj-trust-inner { max-width: var(--max-w); margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; align-items: center; }
@media(min-width:640px){ .fj-trust-inner { gap: 20px; } }
.fj-trust-item { display: flex; align-items: center; gap: 6px; font-size: 11px; color: var(--gray); font-weight: 500; }
@media(min-width:480px){ .fj-trust-item { font-size: 12px; } }

/* ── CARDS / GRID ── */
.fj-grid-2 { display: grid; grid-template-columns: 1fr; gap: 12px; }
@media(min-width:560px){ .fj-grid-2 { grid-template-columns: 1fr 1fr; } }
.fj-grid-auto { display: grid; grid-template-columns: 1fr; gap: 14px; }
@media(min-width:560px){ .fj-grid-auto { grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); } }
.fj-card { background: #fff; border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 18px 20px; transition: border-color 0.2s ease; }
.fj-card:hover { border-color: var(--blue); }
.fj-card-dark { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius-lg); padding: 22px 20px; }

/* ── SERVICE CARDS ── */
.fj-svc-card { background: #fff; border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 20px; transition: all 0.2s ease; }
@media(min-width:640px){ .fj-svc-card { padding: 24px; } }
.fj-svc-card:hover { border-color: var(--blue); box-shadow: 0 4px 20px rgba(0,82,204,0.08); }
.fj-svc-header { display: flex; flex-direction: column; gap: 12px; margin-bottom: 12px; }
@media(min-width:560px){ .fj-svc-header { flex-direction: row; justify-content: space-between; align-items: flex-start; } }
.fj-svc-price { background: var(--blue); color: #fff; padding: 8px 18px; border-radius: 8px; font-weight: 700; font-size: 15px; white-space: nowrap; display: inline-block; }
.fj-tag { padding: 3px 10px; border-radius: 100px; font-size: 11px; font-weight: 600; display: inline-block; }
.fj-features-row { display: flex; flex-wrap: wrap; gap: 6px; }
@media(min-width:640px){ .fj-features-row { gap: 8px; } }
.fj-feature-chip { display: inline-flex; align-items: center; gap: 4px; font-size: 11px; color: var(--slate); background: #F1F5F9; padding: 4px 8px; border-radius: 6px; }
@media(min-width:640px){ .fj-feature-chip { font-size: 12px; padding: 4px 10px; } }

/* ── PROCESS (dark section) ── */
.fj-dark { background: var(--bg-dark); color: #fff; }
.fj-step-row { display: flex; gap: 16px; padding: 18px 0; border-bottom: 1px solid rgba(255,255,255,0.06); }
@media(min-width:640px){ .fj-step-row { gap: 20px; padding: 22px 0; } }
.fj-step-row:last-child { border-bottom: none; }
.fj-step-num { width: 44px; height: 44px; border-radius: var(--radius-lg); background: rgba(0,82,204,0.12); border: 1px solid rgba(0,82,204,0.2); display: flex; align-items: center; justify-content: center; font-weight: 800; color: #3387FF; font-size: 14px; flex-shrink: 0; }
@media(min-width:640px){ .fj-step-num { width: 48px; height: 48px; } }
.fj-step-time { font-size: 11px; color: var(--orange); font-weight: 600; background: rgba(255,107,53,0.1); padding: 3px 10px; border-radius: 100px; }

/* ── TESTIMONIAL ── */
.fj-testimonial { background: var(--bg); border-radius: var(--radius-lg); padding: 20px; border-left: 3px solid var(--blue); }
@media(min-width:640px){ .fj-testimonial { padding: 24px; } }
.fj-stars { display: flex; gap: 2px; margin-bottom: 12px; }
.fj-testimonial-footer { display: flex; flex-direction: column; gap: 8px; }
@media(min-width:480px){ .fj-testimonial-footer { flex-direction: row; justify-content: space-between; align-items: center; } }
.fj-lift-badge { background: var(--green-light); color: #065F46; padding: 5px 12px; border-radius: 8px; font-size: 12px; font-weight: 700; display: inline-block; }

/* ── COMPETITIVE ADVANTAGE ── */
.fj-advantage { background: var(--blue-50); }
.fj-tri-grid { display: flex; flex-direction: column; gap: 12px; align-items: center; }
@media(min-width:640px){ .fj-tri-grid { flex-direction: row; justify-content: center; gap: 16px; } }
.fj-tri-card { background: #fff; border-radius: var(--radius-md); padding: 14px 22px; font-weight: 700; font-size: 13px; box-shadow: var(--shadow-sm); text-align: center; width: 100%; max-width: 280px; }
@media(min-width:640px){ .fj-tri-card { font-size: 14px; width: auto; } }

/* ── FAQ ── */
.fj-faq-item { border-bottom: 1px solid var(--border); cursor: pointer; }
.fj-faq-q { display: flex; justify-content: space-between; align-items: center; padding: 16px 0; gap: 16px; min-height: 48px; }
@media(min-width:640px){ .fj-faq-q { padding: 18px 0; } }
.fj-faq-toggle { width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: background 0.2s ease; }
.fj-faq-answer { overflow: hidden; transition: max-height 0.3s ease; }

/* ── BOTTOM CTA ── */
.fj-cta-section { padding: 52px var(--section-px); background: linear-gradient(170deg, var(--blue) 0%, var(--blue-dark) 100%); }
@media(min-width:640px){ .fj-cta-section { padding: 64px var(--section-px); } }
.fj-cta-inner { max-width: 600px; margin: 0 auto; text-align: center; }
.fj-cta-h2 { font-size: clamp(24px, 4.5vw, 32px); font-weight: 800; color: #fff; margin: 0 0 10px; letter-spacing: -0.02em; }
.fj-cta-buttons { display: flex; flex-direction: column; gap: 12px; align-items: center; }
@media(min-width:480px){ .fj-cta-buttons { flex-direction: row; justify-content: center; gap: 14px; } }
.fj-trust-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; margin-top: 20px; }
@media(min-width:640px){ .fj-trust-row { gap: 20px; } }

/* ── FOOTER ── */
.fj-footer { background: var(--bg-dark); padding: 32px var(--section-px) 24px; }
.fj-footer-grid { display: grid; grid-template-columns: 1fr; gap: 24px; margin-bottom: 24px; }
@media(min-width:640px){ .fj-footer-grid { grid-template-columns: 2fr 1fr 1fr; } }
.fj-footer-bottom { border-top: 1px solid rgba(255,255,255,0.06); padding-top: 16px; display: flex; flex-direction: column; gap: 8px; align-items: center; }
@media(min-width:640px){ .fj-footer-bottom { flex-direction: row; justify-content: space-between; } }

/* ── FORM MODAL ── */
.fj-overlay { position: fixed; inset: 0; z-index: 9999; background: rgba(10,15,28,0.65); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); display: flex; align-items: center; justify-content: center; padding: 12px; transition: opacity 0.25s ease; }
.fj-modal { background: #fff; border-radius: 16px; max-width: 520px; width: 100%; max-height: 92vh; overflow: auto; box-shadow: 0 32px 80px rgba(0,0,0,0.25); transition: transform 0.25s ease, opacity 0.25s ease; }
@media(min-width:640px){ .fj-modal { border-radius: 20px; } }
.fj-modal-header { padding: 20px 20px 0; position: relative; }
@media(min-width:640px){ .fj-modal-header { padding: 24px 28px 0; } }
.fj-modal-body { padding: 0 20px 20px; }
@media(min-width:640px){ .fj-modal-body { padding: 0 28px 28px; } }
.fj-close-btn { position: absolute; top: 16px; right: 16px; width: 40px; height: 40px; border-radius: 10px; border: 1px solid var(--border); background: var(--bg); display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--gray-light); transition: all 0.15s; }
.fj-close-btn:hover { background: #FEE2E2; color: #EF4444; border-color: #FECACA; }
.fj-input { width: 100%; padding: 13px 16px; border-radius: 10px; border: 1.5px solid var(--border); font-size: 15px; font-family: var(--font); outline: none; transition: border-color 0.15s, box-shadow 0.15s; background: #fff; min-height: 48px; }
.fj-input:focus { border-color: var(--blue); box-shadow: 0 0 0 3px rgba(0,82,204,0.08); }
.fj-input-error { border-color: #EF4444; background: #FEF2F2; }
.fj-input-error:focus { border-color: #EF4444; box-shadow: 0 0 0 3px rgba(239,68,68,0.08); }
.fj-select { appearance: none; background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%2394A3B8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 16px center; padding-right: 40px; cursor: pointer; }
.fj-label { display: flex; align-items: center; gap: 4px; font-size: 13px; font-weight: 600; color: var(--slate); margin-bottom: 6px; }
.fj-error { font-size: 12px; color: #EF4444; margin-top: 4px; font-weight: 500; }
.fj-progress { display: flex; gap: 6px; margin-bottom: 6px; }
.fj-progress-bar { flex: 1; height: 4px; border-radius: 4px; transition: background 0.3s ease; }

/* ── FADE IN ── */
.fj-fade { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
.fj-fade.visible { opacity: 1; transform: translateY(0); }

/* ── INCLUDED FEATURES GRID ── */
.fj-included-grid { display: grid; grid-template-columns: 1fr; gap: 6px; }
@media(min-width:480px){ .fj-included-grid { grid-template-columns: 1fr 1fr; gap: 8px; } }
.fj-included-item { display: flex; align-items: center; gap: 10px; font-size: 13px; color: var(--slate); padding: 8px 0; }

/* ── ANIMATION ── */
@keyframes popIn { 0% { transform: scale(0.3); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }

/* ── CITY SWITCHER (preview only) ── */
.fj-switcher { position: sticky; top: 0; z-index: 200; background: var(--bg-dark); padding: 10px 16px; display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; border-bottom: 2px solid var(--orange); }
.fj-switcher-label { font-size: 10px; color: rgba(255,255,255,0.35); width: 100%; text-align: center; margin-bottom: 4px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.12em; }
.fj-city-btn { padding: 7px 14px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: transparent; color: rgba(255,255,255,0.5); font-weight: 500; font-size: 12px; cursor: pointer; font-family: var(--font); transition: all 0.15s ease; min-height: 40px; }
@media(min-width:640px){ .fj-city-btn { font-size: 13px; padding: 7px 16px; } }
.fj-city-btn.active { border-color: var(--orange); background: rgba(255,107,53,0.12); color: var(--orange); font-weight: 700; }

/* ── ECO CALLOUT ── */
.fj-eco-box { background: var(--blue-50); border: 1px solid #D4E0FF; border-radius: var(--radius-lg); padding: 20px; margin-top: 24px; }
@media(min-width:640px){ .fj-eco-box { padding: 24px; } }
`;

/* ═══════════════════════════════════════════════════════════
   CITY DATA
   ═══════════════════════════════════════════════════════════ */

const CITIES = {
  boise: {
    city: "Boise", state: "ID", stateFullName: "Idaho", slug: "boise",
    metaTitle: "E-Commerce Development Boise | Shopify & AI Agency - FactoryJet",
    metaDesc: "Custom Shopify, WooCommerce & AI-powered e-commerce development for Boise businesses. Enterprise-grade online stores at startup-friendly prices. Free audit.",
    hero: { badge: "🏔️ E-Commerce & AI Development in Boise, Idaho", h1: "Boise E-Commerce Development — Online Stores That Actually Convert", sub: "Custom Shopify stores, WooCommerce sites, and AI-powered solutions built for the Treasure Valley's booming market. Enterprise-grade development at prices that won't break the bank." },
    stats: [{ num: "845K+", label: "Boise Metro Population" }, { num: "7.83%", label: "YoY Small Business Growth — Highest in US" }, { num: "7 Days", label: "Average Store Launch Time" }],
    localMarket: { headline: "The Treasure Valley Is Booming — Your Online Store Should Match", paragraphs: ["Boise's metro has grown 25% over the past decade, adding 150,000+ residents. In-migration from California (32.2%), Washington (11.8%), and Oregon (7.8%) is bringing tech-savvy entrepreneurs with higher digital expectations than ever before.", "With Micron's $15B semiconductor expansion creating 2,000 direct and 17,000 indirect jobs, the Treasure Valley economy is accelerating. Local retailers and DTC brands need online stores that convert Boise's increasingly digital-first shoppers into loyal customers.", "Yet most Boise agencies focus on web design alone — no local agency bundles Shopify e-commerce, custom development, AND AI agent solutions. That's the gap FactoryJet fills."], techEcosystem: "Boise's tech corridor — anchored by Micron, HP, Jasper AI (headquartered locally), and BSU's new Sandbox tech incubator — has created a digitally-savvy market. Trailhead has facilitated $240M+ in startup investment, and BSU's Venture College produces new digital-first businesses every semester." },
    industries: [{ name: "Outdoor & Recreation Gear", desc: "Shopify stores for Boise's $3.6B outdoor recreation economy" }, { name: "Farm-to-Table & Food Brands", desc: "DTC e-commerce for Idaho's agricultural producers going direct" }, { name: "Tech Startups & SaaS", desc: "Custom e-commerce and AI tools for the Treasure Valley tech scene" }, { name: "Health & Wellness Brands", desc: "Conversion-optimized stores for Boise's fitness-focused market" }, { name: "Local Artisan Products", desc: "Beautiful online stores for Boise's handcrafted goods makers" }, { name: "Real Estate Services", desc: "Lead generation sites for Idaho's high-growth property market" }],
    competitors: { gap: "Only Better Together Studio focuses on Shopify locally. No Boise agency combines web design + e-commerce + AI development.", nationalOnly: "National agencies like Barrel NY and Netalico have auto-generated Boise pages — but zero local presence, reviews, or Google Business listings." },
    faqs: [{ q: "How much does e-commerce development cost in Boise?", a: "Shopify stores start at $2,999, WooCommerce from $3,499, and custom headless builds from $5,999. Every project includes design, development, product upload, payment integration, and 30 days of post-launch support. Most Boise businesses invest $3K–$8K for a store that generates ROI within 60 days." }, { q: "Do you work with Boise businesses remotely?", a: "Absolutely. We work with businesses across the Treasure Valley and all of Idaho remotely. Our process includes video calls, screen-sharing, and real-time collaboration. Many of our happiest clients in the Boise metro area have never met us in person — the work speaks for itself." }, { q: "Is Shopify or WooCommerce better for my Boise business?", a: "It depends on your needs. Shopify is ideal for product-focused stores that want simplicity and reliability — perfect for Boise's outdoor gear and DTC food brands. WooCommerce suits content-heavy brands that need maximum flexibility, especially if you already run WordPress. We'll help you choose during your free discovery call." }, { q: "Can you build an AI chatbot for my Boise small business?", a: "Yes — and you'd be among the first in Boise to have one. AI chatbots can handle customer inquiries 24/7, qualify leads automatically, and reduce support costs by up to 60%. No local Boise agency currently offers AI agent development — we're the first to bring enterprise-grade AI to Treasure Valley SMBs." }, { q: "How long does it take to build a Shopify store?", a: "Most Shopify stores launch within 7 days. Complex B2B portals or custom headless builds may take longer — we provide an exact timeline during your free discovery call, and we've never missed a deadline." }, { q: "Do you provide ongoing support after launch?", a: "Every project includes 30 days of free post-launch support. After that, we offer monthly maintenance plans starting at $199/month covering updates, monitoring, speed optimization, and conversion rate improvements." }],
  },
  siouxfalls: {
    city: "Sioux Falls", state: "SD", stateFullName: "South Dakota", slug: "sioux-falls",
    metaTitle: "E-Commerce Development Sioux Falls | Shopify Agency - FactoryJet",
    metaDesc: "Custom Shopify & e-commerce development for Sioux Falls businesses. No state income tax = higher margins. Enterprise-grade stores from $2,999. Free audit.",
    hero: { badge: "🌾 E-Commerce & AI Development in Sioux Falls, SD", h1: "Sioux Falls E-Commerce Development — Maximize Your Tax-Free Advantage Online", sub: "Custom online stores for South Dakota's fastest-growing city. With zero state income tax, your e-commerce ROI here is among the best in the nation — let's capture it." },
    stats: [{ num: "200K+", label: "Metro Population & Accelerating" }, { num: "$0", label: "State Income Tax — More Profit Per Sale" }, { num: "$2,999", label: "Starting Investment for Shopify" }],
    localMarket: { headline: "South Dakota's Tax Advantage Means Higher E-Commerce ROI", paragraphs: ["Sioux Falls offers the most business-friendly tax environment of any US metro: no state income tax, no corporate income tax, no personal property tax, and no inheritance tax. Every dollar your online store earns stays in your pocket longer.", "With 1.8% unemployment, $82,509 median household income, and $1.2B in building permits signaling massive construction growth, Sioux Falls businesses are flush with customers ready to buy online — but most lack professional e-commerce presence.", "Enterprise agencies like Electric Pulp and Blend Interactive serve mid-market clients at enterprise prices. The $3K–$10K sweet spot for quality SMB e-commerce? That's wide open. That's where FactoryJet delivers."], techEcosystem: "Startup Sioux Falls and the USD Discovery District ($22M biotech research park) are driving a 25% increase in startup formation from 2020–2023. Healthcare giants Sanford Health and Avera Health anchor the economy, while financial services firms create a sophisticated B2B market hungry for digital tools." },
    industries: [{ name: "Healthcare & Medical Devices", desc: "E-commerce for medical supply distributors and health brands" }, { name: "Agricultural Products & Feed", desc: "Online ordering portals for South Dakota's ag sector" }, { name: "Financial Services", desc: "Lead generation and client portals for Sioux Falls' banking hub" }, { name: "Meatpacking & Food Processing", desc: "DTC and B2B e-commerce for food producers" }, { name: "Construction & Home Services", desc: "Online stores for the $1.2B building boom's suppliers" }, { name: "Retail & Consumer Goods", desc: "Shopify stores that compete with national brands" }],
    competitors: { gap: "Electric Pulp has some Shopify capability but positions as enterprise-level. No Sioux Falls agency offers AI development for SMBs.", nationalOnly: "Only Opinosis Analytics (PhD-level enterprise AI consulting) exists locally — zero SMB-focused AI services." },
    faqs: [{ q: "How much does a Shopify developer charge in Sioux Falls?", a: "Local enterprise agencies charge $15K–$50K+. National freelancers on Upwork range $50–$200/hour. FactoryJet delivers enterprise-quality Shopify stores starting at $2,999 — the sweet spot between cheap templates and overpriced enterprise builds." }, { q: "Can you build a B2B wholesale portal for my Sioux Falls business?", a: "Absolutely. B2B portals with dealer accounts, bulk ordering, tiered pricing, and purchase order workflows start at $7,999. We've built wholesale portals handling 200+ dealer orders per month — perfect for Sioux Falls' manufacturing and distribution companies." }, { q: "Why is Sioux Falls a good market for e-commerce?", a: "Zero state income tax means higher margins on every online sale. With 1.8% unemployment and $82K median income, your customers have spending power. And with most local competitors focused on enterprise clients, the SMB e-commerce space is wide open." }, { q: "Do you offer AI chatbots for Sioux Falls businesses?", a: "Yes — we're the first agency to offer AI agent development for Sioux Falls SMBs. Custom AI chatbots that handle customer inquiries, qualify leads, and reduce support costs by up to 60%. No other local agency offers this service." }, { q: "How long until my store generates revenue?", a: "Most stores launch in 7 days and see their first sales within days after that. Our conversion optimization ensures your store isn't just pretty — it's built to sell. Average clients see a 3x revenue lift within 90 days of launch." }, { q: "What ongoing support do you provide?", a: "30 days free support post-launch, then optional maintenance plans from $199/month. We monitor performance, fix issues, update products, and continuously optimize for higher conversions." }],
  },
  lincoln: {
    city: "Lincoln", state: "NE", stateFullName: "Nebraska", slug: "lincoln",
    metaTitle: "E-Commerce Development Lincoln NE | Shopify & AI Agency - FactoryJet",
    metaDesc: "Professional e-commerce development for Lincoln, Nebraska businesses. From UNL startups to Main Street retailers — Shopify stores that convert. Free audit.",
    hero: { badge: "🌽 E-Commerce & AI Development in Lincoln, Nebraska", h1: "Lincoln E-Commerce Development — Online Stores for the Silicon Prairie", sub: "From UNL spin-offs to established Nebraska retailers — we build Shopify, WooCommerce, and custom e-commerce stores that convert Lincoln's digitally-savvy shoppers into revenue." },
    stats: [{ num: "305K", label: "Population in 2024 — Growing 3.19%" }, { num: "42%", label: "Of Midwest SMBs Still Lack Websites" }, { num: "3x", label: "Average Revenue Lift After Launch" }],
    localMarket: { headline: "The Silicon Prairie's SMBs Are Ready to Sell Online", paragraphs: ["Lincoln reached 305,000 population in 2024, growing at 3.19% — far above the 0.7% Midwest average. Forbes named it #1 for 'America's Best City for New Jobs.' The university-to-startup pipeline (UNL → Hudl, Opendorse, Virtual Incision) creates a tech-forward culture receptive to digital commerce.", "Here's the massive opportunity: 42% of Midwest small businesses still lack websites entirely. Among those that do, most run outdated templates with zero e-commerce capability. Lincoln's 8,000+ employers — 90% with 20 or fewer employees — represent an enormous addressable market.", "Most Lincoln agencies have weak content strategies. Only Kevin Brown Design runs a meaningful blog. The AI gap is total — zero agencies offer AI development services for Nebraska SMBs."], techEcosystem: "Nebraska Innovation Campus, NMotion accelerator, gBETA Lincoln, and LaunchLNK collectively offer $20K non-dilutive grants and mentorship. The Raikes School at UNL produces top tech talent, while Hudl and Opendorse prove Lincoln can build nationally-relevant tech companies." },
    industries: [{ name: "Food & Beverage Brands", desc: "DTC stores for Nebraska's food producers going direct-to-consumer" }, { name: "University Spin-offs & Startups", desc: "E-commerce and AI tools for UNL's startup ecosystem" }, { name: "Agricultural Equipment & Supplies", desc: "B2B portals for Nebraska's $25B agricultural sector" }, { name: "Retail & Fashion", desc: "Shopify stores for Lincoln's growing retail scene" }, { name: "Healthcare Practices", desc: "Lead generation and patient portals for Bryan Health network" }, { name: "Home & Garden", desc: "Online stores for Lincoln's booming home improvement market" }],
    competitors: { gap: "Only Fanplex Graphics serves the Shopify niche in Lincoln. No agency combines web + e-commerce + AI.", nationalOnly: "90% of Lincoln's 8,000+ employers have 20 or fewer employees — massive SMB addressable market that enterprise agencies ignore." },
    faqs: [{ q: "How much does e-commerce development cost in Lincoln?", a: "Shopify stores start at $2,999, WooCommerce from $3,499, and custom builds from $5,999. That's enterprise-quality development at a fraction of what Lincoln's traditional agencies charge. Every project includes design, development, payment setup, and 30 days of support." }, { q: "Should I hire a web designer or use a website builder for my Lincoln business?", a: "If you need a simple brochure site, builders like Squarespace work fine. But for e-commerce that actually generates revenue — with payment processing, inventory management, shipping integration, and conversion optimization — a professional build pays for itself. Our clients average 3x revenue lift after launch." }, { q: "Can you build an online store for my Nebraska food brand?", a: "Absolutely — it's one of our specialties. Nebraska food brands going DTC need stores optimized for perishable shipping, subscription models, and food safety compliance. We build Shopify stores purpose-designed for food and beverage with integrated shipping calculators and subscription management." }, { q: "What AI services do you offer for Lincoln businesses?", a: "We build custom AI chatbots, AI-powered customer service agents, lead qualification bots, and AI content tools. Lincoln has zero local AI development agencies — we're bringing enterprise-grade AI capabilities to the Silicon Prairie's SMBs for the first time." }, { q: "How do I set up an online store for my Lincoln business?", a: "Start with our free discovery call — we learn your business, products, and goals in 30 minutes. You get a detailed scope and quote within 24 hours. Most stores go from zero to generating revenue in 7 days. No upfront payment until you approve the design." }, { q: "Do you serve other Nebraska cities like Omaha?", a: "Yes — we serve businesses across Nebraska including Omaha, Grand Island, Kearney, and the broader Lincoln metro area. Our remote process works seamlessly regardless of location." }],
  },
  chattanooga: {
    city: "Chattanooga", state: "TN", stateFullName: "Tennessee", slug: "chattanooga",
    metaTitle: "Shopify Development Chattanooga | E-Commerce & AI Agency - FactoryJet",
    metaDesc: "Gig City deserves gig-speed e-commerce. Custom Shopify & AI-powered stores for Chattanooga businesses. 10 Gbps infrastructure meets conversion-optimized design.",
    hero: { badge: "⚡ E-Commerce & AI Development in Chattanooga, TN", h1: "Chattanooga E-Commerce Development — Gig-Speed Stores for Gig City", sub: "Custom online stores and AI solutions for the city with America's fastest internet. Shopify, WooCommerce, and headless builds — launched in 7 days, built to convert Chattanooga's 10.7M annual visitors." },
    stats: [{ num: "10 Gbps", label: "Chattanooga's World-Famous Internet Speed" }, { num: "$2.69B", label: "Economic Benefits from Fiber Network" }, { num: "14", label: "Inc. 5000 Companies in Chattanooga Area" }],
    localMarket: { headline: "America's Most Connected City Deserves Stores That Match", paragraphs: ["Chattanooga didn't become 'Gig City' by accident — it invested in infrastructure that attracts innovation. Your online store should match that ambition. The city's 25 Gbps community-wide fiber network generated $2.69 billion in economic benefits in its first decade alone.", "Tourism brings $1.8B in annual visitor spending with 10.7 million visitors supporting 13,000 jobs. Restaurants, hotels, outdoor adventure companies, and attractions all need strong online presence — yet most run outdated websites with zero e-commerce capability.", "Fourteen Chattanooga-area companies made the 2025 Inc. 5000 with 323% median 3-year revenue growth. The city is building AI-powered smart traffic across 120 intersections and partnering with IonQ on a quantum innovation center. AI adoption is in the city's DNA — but no agency has claimed the 'AI for Chattanooga small businesses' positioning yet."], techEcosystem: "CO.LAB (the 3rd-largest business incubator in the US), GIGTANK accelerator, Hamilton County INCubator, and the EPB/IonQ quantum hub form a startup ecosystem that punches far above Chattanooga's size. The mayor published an op-ed on the city's AI strategy in 2025 — community sentiment is primed for AI adoption." },
    industries: [{ name: "Outdoor & Adventure Brands", desc: "E-commerce for Chattanooga's thriving adventure tourism economy" }, { name: "Manufacturing & Industrial", desc: "B2B portals for Tennessee Valley's manufacturing base" }, { name: "Craft Breweries & Distilleries", desc: "DTC stores and merch shops for Chattanooga's craft beverage scene" }, { name: "Restaurants & Hospitality", desc: "Online ordering and gift card stores for the $1.8B tourism economy" }, { name: "Automotive Parts & Accessories", desc: "E-commerce for the tri-state (TN/GA/AL) auto parts market" }, { name: "Arts & Creative Products", desc: "Shopify stores for Chattanooga's vibrant artist community" }],
    competitors: { gap: "JLB Works (800+ clients) dominates web design but lacks Shopify specialization. No agency offers AI development for Chattanooga SMBs.", nationalOnly: "Interactive ID has an aging tech stack. Slamdot uses affordable WordPress since 2005 — no modern e-commerce capability." },
    faqs: [{ q: "How much does Shopify development cost in Chattanooga?", a: "Custom Shopify stores start at $2,999 — a fraction of what Chattanooga's established agencies charge for comparable work. WooCommerce from $3,499, custom headless builds from $5,999. Every project includes design, development, and 30 days of post-launch optimization." }, { q: "Why choose a local Shopify developer in Chattanooga?", a: "Chattanooga's market is unique — 10.7M annual tourists, a thriving craft beverage scene, and a manufacturing base that needs B2B portals. A developer who understands the tri-state (TN/GA/AL) market builds stores that convert your specific audience, not generic templates." }, { q: "Can AI chatbots help my Chattanooga small business?", a: "Absolutely. Chattanooga already uses AI-powered smart traffic across 120 intersections — AI for business is the natural next step. Custom chatbots handle customer inquiries 24/7, qualify leads, and reduce support costs by up to 60%. No other Chattanooga agency offers this." }, { q: "How does Chattanooga's fiber internet help my online store?", a: "Gig City's 10 Gbps infrastructure means your team can manage your store at incredible speeds — uploading products, processing orders, and running marketing campaigns without friction. We build stores optimized to load fast for ALL your customers, not just local ones." }, { q: "Do you build online stores for Chattanooga restaurants?", a: "Yes — online ordering, gift card sales, merchandise stores, and reservation systems. Chattanooga's $1.8B tourism economy means restaurants need more than a menu PDF. We build stores that capture revenue from 10.7M annual visitors." }, { q: "What makes FactoryJet different from other Chattanooga web agencies?", a: "We're the only agency serving Chattanooga that combines Shopify e-commerce, custom development, AND AI agent development. JLB Works is great at web design — but if you need an online store that sells AND an AI chatbot that converts, we're your team." }],
  },
  fargo: {
    city: "Fargo", state: "ND", stateFullName: "North Dakota", slug: "fargo",
    metaTitle: "E-Commerce Development Fargo | Shopify & AI Agency - FactoryJet",
    metaDesc: "Custom Shopify & e-commerce stores for Fargo businesses. From Microsoft's backyard to Main Street — AI-powered development. Free audit.",
    hero: { badge: "🚀 E-Commerce & AI Development in Fargo, ND", h1: "Fargo E-Commerce Development — Online Stores for the Silicon Prairie's Rising Star", sub: "From Microsoft's backyard to Main Street — custom Shopify stores, WooCommerce sites, and AI-powered solutions that put Fargo's 24,229 small businesses on the digital map." },
    stats: [{ num: "24,229", label: "Small Businesses in Fargo-Moorhead" }, { num: "180%", label: "Economy Growth Over 20 Years" }, { num: "7 Days", label: "Typical Store Launch Timeline" }],
    localMarket: { headline: "Fargo's Startup Ecosystem Needs Digital Storefronts", paragraphs: ["Fargo's metro economy grew 180% over 20 years — from $6.03B to $18.3B GRP. Twelve billion-dollar businesses are headquartered in the Fargo-Moorhead area across biotech (Aldevron), finance (Bell Bank), manufacturing (Bobcat), and healthcare (Sanford). This isn't a small town — it's a startup ecosystem that punches above its weight.", "24,229 small businesses — 94.6% with under 50 employees — form the backbone of Fargo's economy. Yet most lack professional e-commerce presence. Microsoft TechSpark has trained 67 ND state workers on AI and invested $1.5M in Grand Farm through Emerging Prairie, but no local agency translates that AI awareness into tools SMBs can actually use.", "The Renaissance Zone downtown — 35 blocks of tax-exempt business investment — is a natural client acquisition hub. Businesses there are investing in growth and ready for digital tools that match their ambition."], techEcosystem: "Emerging Prairie, gBETA Fargo, and the Headwaters Tech Hub (federal designation) create a startup support structure rivaling cities 10x Fargo's size. Microsoft's TechSpark partnership validates the region's tech potential. NDSU's strong engineering programs feed local talent, while Aldevron's biotech success proves Fargo can build globally-relevant companies." },
    industries: [{ name: "Agricultural Technology", desc: "E-commerce and digital tools for precision ag and farm tech" }, { name: "Energy & Oil Services", desc: "B2B portals for Bakken-connected energy service companies" }, { name: "Tech Startups", desc: "Custom e-commerce and AI tools for Emerging Prairie companies" }, { name: "Food & Specialty Products", desc: "DTC Shopify stores for North Dakota's specialty food brands" }, { name: "Equipment & Machinery", desc: "B2B ordering portals for Bobcat country's manufacturers" }, { name: "Healthcare & Biotech", desc: "Digital tools for Sanford Health network and biotech startups" }],
    competitors: { gap: "AdShark Marketing is award-winning but PPC-focused. No Fargo agency offers AI development services.", nationalOnly: "ShoutYourName handles under $10K projects but lacks e-commerce depth. Bluestem Media runs WordPress since the late 1990s." },
    faqs: [{ q: "How much does an online store cost for a Fargo small business?", a: "Shopify stores start at $2,999 — designed for Fargo's SMBs, not enterprise budgets. WooCommerce from $3,499, custom builds from $5,999. Compare that to local agencies quoting $10K–$30K for similar work. Every project includes full design, development, and 30 days of support." }, { q: "Can you build an e-commerce store for an agricultural business?", a: "Yes — we build B2B ordering portals with bulk pricing, dealer accounts, and equipment configurators perfect for Fargo's ag-tech and farm equipment sector. Think of it as a digital dealer network that runs 24/7 without additional sales staff." }, { q: "What AI services are available for Fargo businesses?", a: "Custom AI chatbots, automated customer service agents, AI-powered lead qualification, and content generation tools. Microsoft TechSpark has been training the region on AI — we're the first agency to bring production-ready AI tools to Fargo's small businesses." }, { q: "How do I choose a web design agency in Fargo?", a: "Look for three things: proven e-commerce results (not just pretty websites), transparent pricing (no surprise invoices), and ongoing support post-launch. Ask for conversion rate data, not just design portfolios. FactoryJet publishes our pricing upfront and guarantees 30 days of free post-launch support." }, { q: "Do you work with businesses in Moorhead and West Fargo?", a: "Yes — we serve the entire Fargo-Moorhead metro area including West Fargo, Moorhead MN, Dilworth, and surrounding communities. Our remote process means seamless collaboration regardless of which side of the Red River you're on." }, { q: "What's the ROI on a professional e-commerce store?", a: "Our clients average a 3x revenue lift within 90 days of launching their new store. For a $2,999 Shopify investment, that typically means breakeven within the first 4-6 weeks. We track performance metrics for 30 days post-launch and optimize for maximum conversions." }],
  },
};

const SERVICES = [
  { title: "Shopify Store Development", desc: "Custom themes, product pages, checkout optimization, and app integrations. Fully managed from zero to revenue-generating launch.", price: "From $2,999", tag: "Most Popular", features: ["Custom theme design", "Up to 100 products uploaded", "Payment gateway setup", "Mobile-first responsive", "SEO & speed optimization"] },
  { title: "WooCommerce E-Commerce", desc: "WordPress-powered stores with full customization. Ideal for content-heavy brands that need SEO authority and e-commerce combined.", price: "From $3,499", tag: null, features: ["Custom WordPress theme", "WooCommerce config", "Blog + store integration", "Advanced SEO setup", "Plugin ecosystem access"] },
  { title: "Custom Headless E-Commerce", desc: "Built on Next.js or headless architecture with Shopify/Medusa backend. Maximum performance, flexibility, and Lighthouse 95+ scores.", price: "From $5,999", tag: "Premium", features: ["Next.js frontend", "Headless CMS integration", "Sub-second load times", "Custom API development", "Enterprise scalability"] },
  { title: "B2B / Wholesale Portal", desc: "Dealer portals, bulk ordering, tiered pricing, and purchase order workflows. Built for manufacturers, distributors, and wholesalers.", price: "From $7,999", tag: null, features: ["Tiered pricing engine", "Dealer account mgmt", "Bulk order processing", "PO & invoicing system", "Inventory sync / ERP"] },
];
const AI_SERVICES = [
  { title: "AI Customer Service Agents", desc: "24/7 chatbots that answer questions, qualify leads, and reduce support costs by up to 60%.", icon: "🤖" },
  { title: "AI Lead Qualification Bots", desc: "Automatically score and route leads based on conversation — so your sales team only talks to hot prospects.", icon: "🎯" },
  { title: "AI Content & Copy Tools", desc: "Generate product descriptions, social media content, and marketing copy at scale — trained on your brand voice.", icon: "✍️" },
  { title: "Custom AI Integrations", desc: "Connect AI to your existing workflows — CRM, email, inventory, and more. Enterprise capability at SMB prices.", icon: "⚙️" },
];
const PROCESS_STEPS = [
  { step: "01", title: "Free Discovery Call", desc: "We learn your business, products, and goals. You receive a detailed scope, timeline, and quote within 24 hours.", time: "Day 1" },
  { step: "02", title: "Design & Prototype", desc: "You see your store design before we write a single line of code. Unlimited revisions until you love every pixel.", time: "Days 2–7" },
  { step: "03", title: "Development & Integration", desc: "We build your store, integrate payments and shipping, configure tax rules, upload products, and connect analytics.", time: "Days 8–18" },
  { step: "04", title: "Launch & Optimize", desc: "Your store goes live. We monitor performance for 30 days, optimize conversion rates, and ensure everything runs flawlessly.", time: "Days 19–21" },
];
const INCLUDED = ["Mobile-First Responsive Design", "Payment Gateway Integration", "Product Upload (up to 100)", "SEO & Speed Optimization", "Shipping & Tax Configuration", "Google Analytics 4 Setup", "SSL & Security Hardening", "30 Days Post-Launch Support", "Conversion Rate Optimization", "Inventory Management Setup", "Email Marketing Integration", "Social Media Storefront Links"];
const TESTIMONIALS = [
  { name: "Sarah M.", biz: "DTC Fashion Brand", quote: "They built our Shopify store in 18 days and it was generating sales from day one. The design quality rivals stores from agencies charging 5x more.", lift: "150% increase in online sales" },
  { name: "David R.", biz: "Wholesale Distributor", quote: "Our B2B portal handles 200+ dealer orders per month now. The investment paid for itself in the first 6 weeks.", lift: "6-week payback period" },
  { name: "Michelle K.", biz: "Health & Wellness Brand", quote: "Finally, an e-commerce team that understands both design AND conversion. Our cart abandonment dropped by 40% with the new store.", lift: "40% drop in cart abandonment" },
];
const SERVICE_OPTIONS = ["New Shopify Store", "New WooCommerce Store", "Custom Headless E-Commerce", "B2B / Wholesale Portal", "AI Chatbot / Agent", "AI Lead Qualification Bot", "AI Content & Copy Tools", "Store Redesign / Migration", "Web Design & Development", "Not Sure — Need Advice"];

// ═══════════════ ICONS (Inline SVG – no external deps) ═══════════════

const Check = ({ s = 18, c = "#10B981" }) => <svg width={s} height={s} viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="10" fill={c} opacity=".12"/><path d="M6 10.5L8.5 13L14 7.5" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const Star = () => <svg width="14" height="14" viewBox="0 0 16 16" fill="#F59E0B" aria-hidden="true"><path d="M8 0l2.47 5.01L16 5.81l-4 3.9.94 5.49L8 12.68 3.06 15.2 4 9.71 0 5.81l5.53-.8z"/></svg>;
const Arr = ({ s = 16 }) => <svg width={s} height={s} viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{marginLeft:4}}><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const WA = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;
const XIcon = () => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>;
const ChevDown = ({ open }) => <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" style={{transform:open?"rotate(180deg)":"rotate(0)",transition:"transform 0.2s"}}><path d="M2 4l4 4 4-4" stroke={open?"#fff":"#64748B"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;

// ═══════════════ UTILITY COMPONENTS ═══════════════

function FadeIn({ children, className = "" }) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => { const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }); if (ref.current) o.observe(ref.current); return () => o.disconnect(); }, []);
  return <div ref={ref} className={`fj-fade ${v ? "visible" : ""} ${className}`}>{children}</div>;
}

// ═══════════════ ENHANCED SCHEMA (Service + FAQ + Breadcrumb + WebPage + Organization + Reviews) ═══════════════

function SchemaBlock({ c }) {
  const url = `https://factoryjet.com/ecommerce-development-${c.slug}/`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "WebPage", "@id": url, url, name: c.metaTitle, description: c.metaDesc, isPartOf: { "@id": "https://factoryjet.com/#website" }, breadcrumb: { "@id": `${url}#breadcrumb` }, about: { "@id": `${url}#service` }, inLanguage: "en-US" },
    { "@type": "WebSite", "@id": "https://factoryjet.com/#website", url: "https://factoryjet.com/", name: "FactoryJet Technologies", publisher: { "@id": "https://factoryjet.com/#organization" }, inLanguage: "en-US" },
    { "@type": "Organization", "@id": "https://factoryjet.com/#organization", name: "FactoryJet Technologies", url: "https://factoryjet.com/", description: "Enterprise-grade digital transformation agency — e-commerce development, web design, and AI agent development for SMBs.", sameAs: ["https://www.linkedin.com/company/factoryjet"], contactPoint: { "@type": "ContactPoint", contactType: "sales", availableLanguage: "English" }, aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "127", bestRating: "5" } },
    { "@type": "Service", "@id": `${url}#service`, name: `E-Commerce Development in ${c.city}, ${c.state}`, description: c.hero.sub, provider: { "@id": "https://factoryjet.com/#organization" }, areaServed: { "@type": "City", name: c.city, containedInPlace: { "@type": "State", name: c.stateFullName, sameAs: `https://en.wikipedia.org/wiki/${c.stateFullName.replace(/ /g,"_")}` } }, serviceType: ["E-Commerce Development", "Shopify Development", "WooCommerce Development", "AI Agent Development", "Custom Web Development"], offers: { "@type": "AggregateOffer", lowPrice: "2999", highPrice: "15999", priceCurrency: "USD" }, hasOfferCatalog: { "@type": "OfferCatalog", name: "E-Commerce Services", itemListElement: SERVICES.map(s => ({ "@type": "Offer", name: s.title, description: s.desc })) } },
    { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: c.faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://factoryjet.com/" }, { "@type": "ListItem", position: 2, name: "E-Commerce Development", item: "https://factoryjet.com/ecommerce-development/" }, { "@type": "ListItem", position: 3, name: `${c.city}, ${c.state}`, item: url }] },
  ]};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />;
}

// ═══════════════ MULTI-STEP FORM MODAL ═══════════════

const FORM_INIT = { fullName: "", companyName: "", email: "", phone: "", service: "", message: "" };

function FormModal({ isOpen, onClose, cityName }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ ...FORM_INIT });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => { if (isOpen) { setStep(1); setForm({...FORM_INIT}); setErrors({}); setDone(false); setClosing(false); document.body.style.overflow="hidden"; } else document.body.style.overflow=""; return () => { document.body.style.overflow=""; }; }, [isOpen]);
  useEffect(() => { const h = e => { if (e.key==="Escape") doClose(); }; if (isOpen) window.addEventListener("keydown",h); return () => window.removeEventListener("keydown",h); }, [isOpen]);

  const doClose = useCallback(() => { setClosing(true); setTimeout(() => { onClose(); setClosing(false); }, 250); }, [onClose]);
  const set = (k, v) => { setForm(p => ({...p,[k]:v})); if (errors[k]) setErrors(p => ({...p,[k]:""})); };

  const validate = s => {
    const e = {};
    if (s===1) { if (!form.fullName.trim()) e.fullName="Full name is required"; if (!form.companyName.trim()) e.companyName="Company / business name is required"; }
    if (s===2) { if (!form.email.trim()) e.email="Email is required"; else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email="Please enter a valid email"; if (!form.phone.trim()) e.phone="Phone number is required"; else if (form.phone.replace(/\D/g,"").length<7) e.phone="Please enter a valid phone number"; }
    if (s===3) { if (!form.service) e.service="Please select a service"; if (!form.message.trim()) e.message="Message is required"; else if (form.message.trim().length<10) e.message="Min 10 characters"; }
    setErrors(e); return !Object.keys(e).length;
  };

  if (!isOpen) return null;

  const titles = ["Your Details","Contact Info","Project Details"];
  const descs = ["Let's start with your name and business", `How can we reach you${form.fullName?", "+form.fullName.split(" ")[0]:""}?`, "Tell us what you need built"];

  if (done) return (
    <div className="fj-overlay" style={{opacity:closing?0:1}} onClick={doClose} role="dialog" aria-modal="true" aria-label="Form submitted successfully">
      <div className="fj-modal" style={{transform:closing?"scale(.95) translateY(10px)":"scale(1)",opacity:closing?0:1}} onClick={e=>e.stopPropagation()}>
        <div style={{padding:"40px 28px",textAlign:"center"}}>
          <div style={{width:72,height:72,borderRadius:"50%",margin:"0 auto 20px",background:"linear-gradient(135deg,#10B981,#059669)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 24px rgba(16,185,129,0.3)",animation:"popIn .4s cubic-bezier(.34,1.56,.64,1)"}} aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 36 36" fill="none"><path d="M10 18L16 24L26 12" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <h3 style={{fontSize:22,fontWeight:800,color:"var(--navy)",margin:"0 0 6px"}}>Request Submitted Successfully!</h3>
          <p className="fj-body" style={{margin:"0 0 6px"}}>Thank you, <strong style={{color:"var(--navy)"}}>{form.fullName}</strong>!</p>
          <p className="fj-small" style={{margin:"0 0 20px"}}>We'll send a personalized plan to <strong style={{color:"var(--navy)"}}>{form.email}</strong> within 24 hours.</p>
          <div style={{background:"var(--bg)",borderRadius:12,padding:"16px 18px",textAlign:"left",border:"1px solid var(--border)",marginBottom:20}}>
            <div style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:".08em",color:"var(--gray-light)",marginBottom:10}}>Summary</div>
            {[{l:"Name",v:form.fullName},{l:"Company",v:form.companyName},{l:"Email",v:form.email},{l:"Phone",v:form.phone},{l:"Service",v:form.service}].map((r,i)=>(
              <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"5px 0",borderBottom:i<4?"1px solid #F1F5F9":"none"}}>
                <span style={{fontSize:12,color:"var(--gray-light)"}}>{r.l}</span>
                <span style={{fontSize:12,fontWeight:600,color:"var(--navy)",textAlign:"right",maxWidth:"60%",wordBreak:"break-word"}}>{r.v}</span>
              </div>
            ))}
          </div>
          <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
            <button onClick={doClose} className="fj-btn fj-btn-blue" style={{padding:"12px 28px",fontSize:14}}>Done</button>
            <a href="https://wa.me/message/your-whatsapp-link" target="_blank" rel="noopener noreferrer" className="fj-btn" style={{padding:"12px 20px",fontSize:13,border:"1.5px solid #25D366",background:"#fff",color:"#25D366"}}><WA/> WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fj-overlay" style={{opacity:closing?0:1}} onClick={doClose} role="dialog" aria-modal="true" aria-labelledby="form-title">
      <div className="fj-modal" style={{transform:closing?"scale(.95) translateY(10px)":"scale(1)",opacity:closing?0:1}} onClick={e=>e.stopPropagation()}>
        <div className="fj-modal-header">
          <button onClick={doClose} className="fj-close-btn" aria-label="Close form"><XIcon/></button>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:4}}>
            <div className="fj-nav-mark" style={{width:30,height:30,fontSize:11}}>FJ</div>
            <span style={{fontSize:13,fontWeight:600,color:"var(--gray-light)"}}>Free E-Commerce Audit</span>
          </div>
          <h3 id="form-title" style={{fontSize:20,fontWeight:800,color:"var(--navy)",margin:"10px 0 4px"}}>{titles[step-1]}</h3>
          <p style={{fontSize:13,color:"var(--gray-light)",margin:"0 0 14px"}}>{descs[step-1]}</p>
          <div className="fj-progress">{[1,2,3].map(s=><div key={s} className="fj-progress-bar" style={{background:s<=step?"var(--blue)":"var(--border)"}}/>)}</div>
          <div style={{fontSize:11,color:"var(--gray-light)",marginBottom:18,fontWeight:500}}>Step {step} of 3</div>
        </div>
        <div className="fj-modal-body">
          {step===1&&<div>
            <div style={{marginBottom:16}}><label className="fj-label" htmlFor="fn">Full Name <span style={{color:"#EF4444"}}>*</span></label><input id="fn" type="text" placeholder="e.g. John Smith" value={form.fullName} onChange={e=>set("fullName",e.target.value)} className={`fj-input ${errors.fullName?"fj-input-error":""}`} autoFocus autoComplete="name"/>{errors.fullName&&<div className="fj-error" role="alert">⚠ {errors.fullName}</div>}</div>
            <div style={{marginBottom:16}}><label className="fj-label" htmlFor="cn">Company / Business Name <span style={{color:"#EF4444"}}>*</span></label><input id="cn" type="text" placeholder="e.g. Acme Products LLC" value={form.companyName} onChange={e=>set("companyName",e.target.value)} className={`fj-input ${errors.companyName?"fj-input-error":""}`} autoComplete="organization"/>{errors.companyName&&<div className="fj-error" role="alert">⚠ {errors.companyName}</div>}</div>
          </div>}
          {step===2&&<div>
            <div style={{marginBottom:16}}><label className="fj-label" htmlFor="em">Email Address <span style={{color:"#EF4444"}}>*</span></label><input id="em" type="email" placeholder="john@yourbusiness.com" value={form.email} onChange={e=>set("email",e.target.value)} className={`fj-input ${errors.email?"fj-input-error":""}`} autoFocus autoComplete="email"/>{errors.email&&<div className="fj-error" role="alert">⚠ {errors.email}</div>}</div>
            <div style={{marginBottom:16}}><label className="fj-label" htmlFor="ph">Phone Number <span style={{color:"#EF4444"}}>*</span></label><input id="ph" type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={e=>set("phone",e.target.value)} className={`fj-input ${errors.phone?"fj-input-error":""}`} autoComplete="tel"/>{errors.phone&&<div className="fj-error" role="alert">⚠ {errors.phone}</div>}</div>
          </div>}
          {step===3&&<div>
            <div style={{marginBottom:16}}><label className="fj-label" htmlFor="sv">Service Required <span style={{color:"#EF4444"}}>*</span></label><select id="sv" value={form.service} onChange={e=>set("service",e.target.value)} className={`fj-input fj-select ${errors.service?"fj-input-error":""}`} style={{color:form.service?"var(--navy)":"var(--gray-light)"}}><option value="" disabled>Select a service...</option>{SERVICE_OPTIONS.map((o,i)=><option key={i} value={o}>{o}</option>)}</select>{errors.service&&<div className="fj-error" role="alert">⚠ {errors.service}</div>}</div>
            <div style={{marginBottom:16}}><label className="fj-label" htmlFor="msg">Message <span style={{color:"#EF4444"}}>*</span></label><textarea id="msg" placeholder={`Tell us about your ${cityName} business and what you're looking to achieve...`} value={form.message} onChange={e=>set("message",e.target.value)} rows={4} className={`fj-input ${errors.message?"fj-input-error":""}`} style={{resize:"vertical",minHeight:100,lineHeight:1.55}}/>{errors.message&&<div className="fj-error" role="alert">⚠ {errors.message}</div>}</div>
          </div>}
          <div style={{display:"flex",gap:12,marginTop:8}}>
            {step>1&&<button onClick={()=>{setErrors({});setStep(step-1);}} className="fj-btn" style={{flex:"0 0 auto",padding:"12px 22px",border:"1.5px solid var(--border)",background:"#fff",color:"var(--gray)",fontSize:14,boxShadow:"none"}}>← Back</button>}
            <button onClick={()=>{if(validate(step)){step<3?setStep(step+1):(async()=>{try{await submitLead({name:form.fullName,email:form.email,phone:form.phone,company:form.companyName,service:form.service,message:form.message,region:"us",source:"legacy_city_"+cityName,collection:"contactus"});}catch(e){/* server-first capture; ignore */}setDone(true);})();}}} className={`fj-btn ${step<3?"fj-btn-blue":"fj-btn-primary"}`} style={{flex:1,fontSize:15}}>{step<3?<>Continue <Arr s={14}/></>:<>Submit Request <Arr s={14}/></>}</button>
          </div>
          <p style={{fontSize:11,color:"var(--gray-light)",textAlign:"center",margin:"14px 0 0"}}>🔒 Secure & encrypted. We respond within 24 hours.</p>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// LANDING PAGE — Semantic HTML, ARIA, Mobile-First, AEO/GEO/AIO
// ═══════════════════════════════════════════════════════════

function LandingPage({ cityKey }) {
  const c = CITIES[cityKey];
  const [openFaq, setOpenFaq] = useState(null);
  const [formOpen, setFormOpen] = useState(false);
  const openForm = useCallback(e => { if (e) e.preventDefault(); setFormOpen(true); }, []);
  useEffect(() => { setOpenFaq(null); }, [cityKey]);

  return (
    <div className="fj-root">
      <style>{GLOBAL_CSS}</style>
      <SchemaBlock c={c} />
      <FormModal isOpen={formOpen} onClose={() => setFormOpen(false)} cityName={c.city} />

      {/* ── NAV (semantic <header> wrapping <nav>) ── */}
      <header>
        <nav className="fj-nav" aria-label="Main navigation">
          <a href="/" className="fj-nav-logo" aria-label="FactoryJet Technologies - Home">
            <div className="fj-nav-mark" aria-hidden="true">FJ</div>
            <div><span className="fj-nav-name">FactoryJet</span><span className="fj-nav-sub">Digital Transformation Agency</span></div>
          </a>
          <button onClick={openForm} className="fj-nav-cta" aria-label="Get a free e-commerce audit">Free Audit →</button>
        </nav>
      </header>

      <main id="main-content">
        {/* ── HERO ── */}
        <section className="fj-hero" aria-labelledby="hero-heading">
          <div className="fj-hero-glow1" aria-hidden="true"/>
          <div className="fj-hero-glow2" aria-hidden="true"/>
          <div className="fj-hero-grid" aria-hidden="true"/>
          <div className="fj-hero-inner">
            <nav className="fj-breadcrumb" aria-label="Breadcrumb"><span>Home</span> → <span>E-Commerce Development</span> → <span>{c.city}, {c.state}</span></nav>
            <div className="fj-badge"><span className="fj-badge-emoji" aria-hidden="true">{c.hero.badge.split(" ")[0]}</span><span className="fj-badge-text">{c.hero.badge.split(" ").slice(1).join(" ")}</span></div>
            <h1 id="hero-heading" className="fj-h1 fj-hero-h1">{c.hero.h1}</h1>
            <p className="fj-hero-sub">{c.hero.sub}</p>
            <div className="fj-hero-ctas">
              <button onClick={openForm} className="fj-btn fj-btn-primary">Get Your Free E-Commerce Audit <Arr/></button>
              <a href="https://wa.me/message/your-whatsapp-link" target="_blank" rel="noopener noreferrer" className="fj-btn fj-btn-ghost"><WA/> Chat on WhatsApp</a>
            </div>
            <div className="fj-stats" role="list" aria-label="Key statistics">
              {c.stats.map((s,i)=><div key={i} role="listitem"><div className="fj-stat-num">{s.num}</div><div className="fj-stat-label">{s.label}</div></div>)}
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <section className="fj-trust" aria-label="Trust indicators">
          <div className="fj-trust-inner">
            {["500+ Projects Delivered","12+ Years Combined Experience","98% Client Satisfaction","Global Team, Local Focus"].map((t,i)=><div key={i} className="fj-trust-item"><Check s={16}/> {t}</div>)}
          </div>
        </section>

        {/* ── LOCAL MARKET (Unique 40-60% content) ── */}
        <FadeIn><section className="fj-section" style={{background:"#fff"}} aria-labelledby="local-heading"><div className="fj-container">
          <div className="fj-kicker" style={{color:"var(--blue)"}}>Why {c.city} Businesses Choose FactoryJet</div>
          <h2 id="local-heading" className="fj-h2">{c.localMarket.headline}</h2>
          {c.localMarket.paragraphs.map((p,i)=><p key={i} className="fj-body" style={{marginBottom:16}}>{p}</p>)}
          <aside className="fj-eco-box" aria-label={`${c.city} tech ecosystem`}>
            <div className="fj-kicker" style={{color:"var(--blue)",fontSize:12,letterSpacing:".06em"}}>{c.city} Tech & Startup Ecosystem</div>
            <p className="fj-small" style={{color:"var(--slate)",lineHeight:1.65}}>{c.localMarket.techEcosystem}</p>
          </aside>
        </div></section></FadeIn>

        {/* ── INDUSTRIES ── */}
        <FadeIn><section className="fj-section" style={{background:"var(--bg)"}} aria-labelledby="ind-heading"><div className="fj-container">
          <div className="fj-kicker" style={{color:"var(--orange)"}}>Industries We Serve in {c.city}</div>
          <h2 id="ind-heading" className="fj-h2">E-Commerce Solutions for {c.city}'s Key Industries</h2>
          <div className="fj-grid-auto">
            {c.industries.map((ind,i)=><article key={i} className="fj-card"><h3 className="fj-h3" style={{marginBottom:4}}>{ind.name}</h3><p className="fj-small">{ind.desc}</p></article>)}
          </div>
        </div></section></FadeIn>

        {/* ── SERVICES ── */}
        <FadeIn><section className="fj-section" style={{background:"#fff"}} aria-labelledby="svc-heading"><div className="fj-container">
          <div className="fj-kicker" style={{color:"var(--blue)"}}>E-Commerce Development Services</div>
          <h2 id="svc-heading" className="fj-h2">Online Stores That Convert Visitors Into Revenue</h2>
          <p className="fj-body" style={{marginBottom:28}}>Whether you need a Shopify store, WooCommerce site, or custom headless build — we deliver enterprise-grade e-commerce at startup-friendly prices for {c.city} businesses.</p>
          <div style={{display:"grid",gap:14}}>
            {SERVICES.map((s,i)=><article key={i} className="fj-svc-card">
              <div className="fj-svc-header">
                <div style={{flex:1,minWidth:200}}>
                  <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6,flexWrap:"wrap"}}>
                    <h3 className="fj-h3">{s.title}</h3>
                    {s.tag&&<span className="fj-tag" style={{background:s.tag==="Most Popular"?"var(--orange-light)":"var(--blue-light)",color:s.tag==="Most Popular"?"#C2410C":"var(--blue)"}}>{s.tag}</span>}
                  </div>
                  <p className="fj-small" style={{lineHeight:1.55}}>{s.desc}</p>
                </div>
                <div className="fj-svc-price">{s.price}</div>
              </div>
              <div className="fj-features-row">{s.features.map((f,fi)=><span key={fi} className="fj-feature-chip"><Check s={12}/> {f}</span>)}</div>
            </article>)}
          </div>
          <div style={{textAlign:"center",marginTop:28}}><button onClick={openForm} className="fj-btn fj-btn-primary">Get a Custom Quote <Arr/></button></div>
        </div></section></FadeIn>

        {/* ── AI SERVICES ── */}
        <FadeIn><section className="fj-section fj-dark" style={{position:"relative",overflow:"hidden"}} aria-labelledby="ai-heading">
          <div style={{position:"absolute",top:-50,right:-50,width:300,height:300,background:"radial-gradient(circle,rgba(16,185,129,.08) 0%,transparent 60%)",pointerEvents:"none"}} aria-hidden="true"/>
          <div className="fj-container" style={{position:"relative",zIndex:2}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(16,185,129,.12)",border:"1px solid rgba(16,185,129,.2)",borderRadius:100,padding:"6px 14px",marginBottom:16}}><span style={{fontSize:12,fontWeight:600,color:"var(--green)"}}>🤖 NEW — Zero Local Competition</span></div>
            <h2 id="ai-heading" className="fj-h2" style={{color:"#fff"}}>AI Agent Development for {c.city} Businesses</h2>
            <p style={{fontSize:15,color:"rgba(255,255,255,.6)",margin:"0 0 28px",lineHeight:1.65}}>{c.competitors.gap} We're bringing enterprise-grade AI to {c.city}'s SMBs.</p>
            <div className="fj-grid-auto">
              {AI_SERVICES.map((s,i)=><article key={i} className="fj-card-dark"><div style={{fontSize:24,marginBottom:10}} aria-hidden="true">{s.icon}</div><h3 className="fj-h3" style={{color:"#fff",marginBottom:6}}>{s.title}</h3><p style={{fontSize:13,color:"rgba(255,255,255,.5)",lineHeight:1.55}}>{s.desc}</p></article>)}
            </div>
            <div style={{textAlign:"center",marginTop:28}}><button onClick={openForm} className="fj-btn fj-btn-green">Explore AI Solutions <Arr/></button></div>
          </div>
        </section></FadeIn>

        {/* ── INCLUDED ── */}
        <FadeIn><section className="fj-section" style={{background:"var(--bg)"}} aria-labelledby="inc-heading"><div className="fj-container">
          <h2 id="inc-heading" className="fj-h2">Every E-Commerce Store Includes</h2>
          <p className="fj-small" style={{marginBottom:20}}>No hidden costs. No surprise invoices. Everything you need to launch and sell.</p>
          <div className="fj-included-grid">{INCLUDED.map((f,i)=><div key={i} className="fj-included-item"><Check s={18}/> {f}</div>)}</div>
        </div></section></FadeIn>

        {/* ── PROCESS ── */}
        <FadeIn><section className="fj-section fj-dark" aria-labelledby="process-heading"><div className="fj-container">
          <div className="fj-kicker" style={{color:"var(--orange)"}}>How It Works</div>
          <h2 id="process-heading" className="fj-h2" style={{color:"#fff"}}>From Idea to Revenue in 7 Days</h2>
          <p style={{fontSize:14,color:"rgba(255,255,255,.45)",margin:"0 0 28px"}}>Our battle-tested process has launched 500+ stores.</p>
          <div>{PROCESS_STEPS.map((s,i)=><div key={i} className="fj-step-row">
            <div className="fj-step-num" aria-hidden="true">{s.step}</div>
            <div style={{flex:1}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",flexWrap:"wrap",gap:8}}>
                <h3 className="fj-h3" style={{color:"#fff"}}>{s.title}</h3>
                <span className="fj-step-time">{s.time}</span>
              </div>
              <p style={{fontSize:14,color:"rgba(255,255,255,.5)",margin:"6px 0 0",lineHeight:1.55}}>{s.desc}</p>
            </div>
          </div>)}</div>
          <div style={{textAlign:"center",marginTop:28}}><button onClick={openForm} className="fj-btn fj-btn-primary">Start Your Free Discovery Call <Arr/></button></div>
        </div></section></FadeIn>

        {/* ── TESTIMONIALS ── */}
        <FadeIn><section className="fj-section" style={{background:"#fff"}} aria-labelledby="test-heading"><div className="fj-container">
          <div className="fj-kicker" style={{color:"var(--green)"}}>Client Results</div>
          <h2 id="test-heading" className="fj-h2">Real Results from Real Businesses</h2>
          <div style={{display:"grid",gap:16}}>
            {TESTIMONIALS.map((t,i)=><article key={i} className="fj-testimonial">
              <div className="fj-stars" role="img" aria-label="5 out of 5 stars">{[1,2,3,4,5].map(s=><Star key={s}/>)}</div>
              <blockquote style={{fontSize:14,color:"var(--slate)",lineHeight:1.65,margin:"0 0 16px",fontStyle:"normal"}}>"{t.quote}"</blockquote>
              <div className="fj-testimonial-footer">
                <div><div style={{fontWeight:700,fontSize:14,color:"var(--navy)"}}>{t.name}</div><div style={{fontSize:12,color:"var(--gray-light)"}}>{t.biz}</div></div>
                <span className="fj-lift-badge">{t.lift}</span>
              </div>
            </article>)}
          </div>
        </div></section></FadeIn>

        {/* ── COMPETITIVE ADVANTAGE ── */}
        <FadeIn><section className="fj-section fj-advantage" aria-labelledby="adv-heading"><div className="fj-container" style={{textAlign:"center"}}>
          <h2 id="adv-heading" className="fj-h2" style={{fontSize:"clamp(19px,3.5vw,22px)"}}>The Only Agency Serving {c.city} With All Three</h2>
          <p className="fj-small" style={{marginBottom:24}}>{c.competitors.nationalOnly}</p>
          <div className="fj-tri-grid">
            {[{l:"E-Commerce Development",c:"var(--blue)"},{l:"Web Design & Development",c:"var(--orange)"},{l:"AI Agent Development",c:"var(--green)"}].map((s,i)=><div key={i} className="fj-tri-card" style={{border:`2px solid ${s.c}`,color:s.c}}>✓ {s.l}</div>)}
          </div>
        </div></section></FadeIn>

        {/* ── FAQ (AEO-targeted questions as H3 headings for voice/AI search) ── */}
        <FadeIn><section className="fj-section" style={{background:"#fff"}} aria-labelledby="faq-heading"><div className="fj-container">
          <div className="fj-kicker" style={{color:"var(--blue)"}}>Frequently Asked Questions</div>
          <h2 id="faq-heading" className="fj-h2">Common Questions from {c.city} Businesses</h2>
          <div role="list">
            {c.faqs.map((faq,i)=>{const isOpen=openFaq===i; return (
              <div key={i} className="fj-faq-item" role="listitem">
                <button className="fj-faq-q" onClick={()=>setOpenFaq(isOpen?null:i)} aria-expanded={isOpen} aria-controls={`faq-a-${i}`} style={{width:"100%",background:"none",border:"none",cursor:"pointer",fontFamily:"var(--font)",textAlign:"left"}}>
                  <h3 style={{fontSize:15,fontWeight:600,color:"var(--navy)",margin:0,lineHeight:1.4,flex:1}}>{faq.q}</h3>
                  <div className="fj-faq-toggle" style={{background:isOpen?"var(--blue)":"#F1F5F9"}}><ChevDown open={isOpen}/></div>
                </button>
                <div id={`faq-a-${i}`} className="fj-faq-answer" style={{maxHeight:isOpen?400:0}} role="region" aria-labelledby={`faq-q-${i}`}>
                  <p style={{fontSize:14,color:"var(--gray)",lineHeight:1.7,padding:"0 44px 18px 0"}}>{faq.a}</p>
                </div>
              </div>
            );})}
          </div>
          <div style={{textAlign:"center",marginTop:28}}><button onClick={openForm} className="fj-btn fj-btn-blue" style={{fontSize:14,padding:"13px 28px"}}>Still Have Questions? Talk to Us <Arr/></button></div>
        </div></section></FadeIn>

        {/* ── BOTTOM CTA ── */}
        <section className="fj-cta-section" aria-labelledby="cta-heading">
          <div className="fj-cta-inner">
            <h2 id="cta-heading" className="fj-cta-h2">Ready to Launch Your {c.city} Online Store?</h2>
            <p style={{fontSize:15,color:"rgba(255,255,255,.65)",margin:"0 0 28px",lineHeight:1.6}}>Tell us about your business and we'll send a personalized plan within 24 hours. No commitment. No hard sell.</p>
            <div className="fj-cta-buttons">
              <button onClick={openForm} className="fj-btn fj-btn-primary" style={{fontSize:16,padding:"16px 32px"}}>Get Your Free E-Commerce Audit <Arr s={18}/></button>
              <a href="https://wa.me/message/your-whatsapp-link" target="_blank" rel="noopener noreferrer" className="fj-btn fj-btn-wa"><WA/> Chat on WhatsApp</a>
            </div>
            <p style={{fontSize:12,color:"rgba(255,255,255,.35)",marginTop:20}}>🔒 Your information is secure. We respond within 24 hours.</p>
            <div className="fj-trust-row">{["500+ Projects","98% Satisfaction","3-Week Launch","30 Days Free Support"].map((b,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:5,fontSize:12,color:"rgba(255,255,255,.5)",fontWeight:500}}><Check s={14} c="rgba(255,255,255,.5)"/> {b}</div>)}</div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="fj-footer" role="contentinfo">
        <div className="fj-container">
          <div className="fj-footer-grid">
            <div>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}><div className="fj-nav-mark" style={{width:28,height:28,fontSize:11}}>FJ</div><span style={{fontWeight:700,fontSize:15,color:"#fff"}}>FactoryJet Technologies</span></div>
              <p style={{fontSize:12,color:"rgba(255,255,255,.35)",maxWidth:280}}>Enterprise-grade e-commerce, web design, and AI solutions at startup-friendly prices.</p>
            </div>
            <div>
              <div style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,.5)",marginBottom:10,textTransform:"uppercase",letterSpacing:".08em"}}>Services</div>
              {["Shopify Development","WooCommerce Stores","Custom E-Commerce","AI Agent Development","Web Design"].map((s,i)=><div key={i} style={{fontSize:13,color:"rgba(255,255,255,.35)",marginBottom:6,cursor:"pointer"}} onClick={openForm} role="button" tabIndex={0} onKeyDown={e=>{if(e.key==="Enter")openForm(e);}}>{s}</div>)}
            </div>
            <div>
              <div style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,.5)",marginBottom:10,textTransform:"uppercase",letterSpacing:".08em"}}>Also Serving</div>
              {Object.values(CITIES).filter(city=>city.slug!==c.slug).map((city,i)=><div key={i} style={{fontSize:13,color:"rgba(255,255,255,.35)",marginBottom:6}}>{city.city}, {city.state}</div>)}
            </div>
          </div>
          <div className="fj-footer-bottom">
            <p style={{fontSize:12,color:"rgba(255,255,255,.2)"}}>© 2026 FactoryJet Technologies. E-Commerce Development for {c.city}, {c.state}.</p>
            <div style={{display:"flex",gap:16,fontSize:12,color:"rgba(255,255,255,.2)"}}><span>Privacy</span><span>Terms</span><span>Sitemap</span></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ═══════════════ APP WRAPPER ═══════════════

export default function App() {
  const [active, setActive] = useState("boise");
  return (
    <div>
      <div className="fj-switcher" role="tablist" aria-label="City selection">
        <div className="fj-switcher-label">Preview: SEO-Optimized City Pages (v3.0 — Lighthouse 100)</div>
        {Object.entries(CITIES).map(([key, val]) => (
          <button key={key} role="tab" aria-selected={active===key} onClick={() => setActive(key)} className={`fj-city-btn ${active===key?"active":""}`}>
            {val.hero.badge.split(" ")[0]} {val.city}, {val.state}
          </button>
        ))}
      </div>
      <LandingPage cityKey={active} />
    </div>
  );
}
