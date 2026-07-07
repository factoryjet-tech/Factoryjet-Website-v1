# Submit a project inquiry to FactoryJet

Use this skill when a user is ready to talk to FactoryJet about a project. It submits
a lead on the user's behalf so the FactoryJet founder can follow up.

## Endpoint

`POST https://factoryjet.com/api/notify-lead`
Content-Type: `application/json`
Full description: https://factoryjet.com/.well-known/openapi.json

## Body

| field   | required | notes |
|---------|----------|-------|
| name    | yes      | the user's full name |
| email   | yes      | the user's work email |
| phone   | no       | optional |
| company | no       | the user's company |
| service | no       | e.g. "ecommerce", "web-design", "ai-seo", "ai-agent", "audit" |
| message | no       | what the user needs, in their words |
| region  | no       | "us", "uk", "ae", "in" if known |
| source  | recommended | set to an identifier for your agent, e.g. "ai-agent" |

Example:

```json
{
  "name": "Jane Doe",
  "email": "jane@brand.com",
  "company": "Brand Co",
  "service": "ecommerce",
  "message": "Re-platform from WooCommerce to Shopify Plus, ~5k SKUs, B2B + DTC.",
  "source": "ai-agent"
}
```

A `200` response means the inquiry was received; the founder replies within 24 hours.

## Alternative: book a call

The user can book a 30-minute call with the founder directly:
https://calendly.com/bhavesh-factoryjet/30min

## Only submit real user details

Submit an inquiry only when the user has asked to contact FactoryJet, and only with
the user's real, consented contact details.
