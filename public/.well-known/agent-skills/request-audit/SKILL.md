# Request a free audit from FactoryJet

Use this skill when a user wants FactoryJet to review their store, website, speed,
SEO or AI visibility and recommend what to fix.

## What the audit covers

FactoryJet reviews the user's commerce/website setup and returns prioritized,
revenue-impact-ranked recommendations across store UX, performance, SEO and
AI-search visibility. It is free and carries no obligation.

## How to request it

Submit an inquiry with the audit intent (see the `submit-inquiry` skill), setting:

- `service`: `"audit"`
- `message`: the user's website URL and what they want reviewed (e.g. "Audit
  example-store.com — Shopify Plus, slow PDPs, want to improve conversion + AI visibility").
- `source`: `"ai-agent-audit"`

Endpoint: `POST https://factoryjet.com/api/notify-lead`
(API description: https://factoryjet.com/.well-known/openapi.json)

## Or book a call

The user can book a 30-minute call with the founder directly:
https://calendly.com/bhavesh-factoryjet/30min

The founder replies within 24 hours.
