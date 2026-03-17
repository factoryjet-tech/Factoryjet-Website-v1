# FactoryJet — AI Agent Development Services Page
## Next.js Implementation Guide + Google Ads Launch Checklist

---

## FILE STRUCTURE

Drop these files into your existing Next.js project:

```
app/
└── services/
    └── ai-agent-development/
        ├── page.tsx                    ← Main page (metadata + section imports)
        └── components/
            ├── SchemaMarkup.tsx        ← JSON-LD schemas (Service, FAQ, Breadcrumb, Org)
            ├── HeroSection.tsx         ← Dark hero + lead capture form
            ├── TrustBar.tsx            ← Stats bar + technology partner names
            ├── PainValidation.tsx      ← 4 pain points ("Sound Familiar?")
            ├── WhyFactoryJet.tsx       ← 5 differentiators
            ├── ServiceCards.tsx         ← 6 AI agent types
            ├── ProcessSection.tsx      ← 4-phase methodology (dark section)
            ├── IndustryUseCases.tsx    ← 6 industries (tabbed)
            ├── TechnologyStack.tsx     ← Tech grid (frameworks, LLMs, infra)
            ├── CaseStudies.tsx         ← 3 case studies with metrics
            ├── ROIMetrics.tsx          ← Business case numbers (dark section)
            ├── TrustCompliance.tsx     ← Security & compliance badges
            ├── FAQSection.tsx          ← 12 FAQs (accordion, AEO optimized)
            └── FinalCTA.tsx            ← Full lead form + WhatsApp + contact
```

---

## INSTALLATION STEPS

### 1. Copy Files
```bash
# From your project root
mkdir -p app/services/ai-agent-development/components
# Copy all .tsx files into the correct locations
```

### 2. Verify Dependencies
These components use only:
- React (useState) — already in Next.js
- Tailwind CSS — already configured in your project
- No additional npm packages required

### 3. Connect Lead Form to Your Backend
Both `HeroSection.tsx` and `FinalCTA.tsx` POST to `/api/leads`. Create this API route:

```typescript
// app/api/leads/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  
  // Option 1: Firebase
  // await db.collection("leads").add({ ...data, timestamp: new Date() });
  
  // Option 2: Email notification via Resend/SendGrid
  // await sendEmail({ to: "connect@factoryjet.com", subject: `New Lead: ${data.name}`, body: JSON.stringify(data) });
  
  // Option 3: Google Sheets via Apps Script webhook
  // await fetch("YOUR_APPS_SCRIPT_URL", { method: "POST", body: JSON.stringify(data) });

  return NextResponse.json({ success: true });
}
```

### 4. Update Google Ads Conversion Tracking
In both `HeroSection.tsx` and `FinalCTA.tsx`, replace:
```
send_to: "AW-XXXXXXXXX/XXXXXXXXX"
```
With your actual Google Ads conversion ID. Get this from:
Google Ads → Tools → Conversions → New Conversion Action → Website → Manual setup

---

## GOOGLE ADS LAUNCH CHECKLIST (for tomorrow)

### Pre-Launch (Today)

- [ ] Deploy the page to `factoryjet.com/services/ai-agent-development`
- [ ] Test lead form submission (both hero + final CTA)
- [ ] Verify JSON-LD schemas at https://search.google.com/test/rich-results
- [ ] Install Google Ads conversion tag (gtag.js) in your layout.tsx
- [ ] Set up conversion action in Google Ads (Lead form submission)
- [ ] Verify Google Tag Manager / gtag fires on form submit
- [ ] Test page speed — target Lighthouse 90+
- [ ] Test mobile responsiveness (all CTAs must be thumb-reachable)

### Google Ads Campaign Setup

**Campaign Type:** Search (not Performance Max — you need control)

**Campaign Structure:**
```
Campaign: AI Agent Development — US
├── Ad Group 1: AI Agent Development (Broad)
│   Keywords (phrase match):
│   "ai agent development"
│   "ai agent development company"
│   "ai agent development services"
│   "custom ai agent development"
│   "build ai agent"
│   
├── Ad Group 2: AI Agent Types
│   Keywords (phrase match):
│   "ai customer support agent"
│   "ai sales agent development"
│   "voice ai agent"
│   "ai workflow automation"
│   "ai chatbot development"
│   
├── Ad Group 3: AI Consulting
│   Keywords (phrase match):
│   "ai agent consulting"
│   "ai automation consulting"
│   "enterprise ai agent"
│   "agentic ai development"
│   
└── Ad Group 4: Competitor / Alternative
    Keywords (phrase match):
    "langchain development services"
    "ai agent agency"
    "hire ai agent developer"
    "ai agent development outsource"
```

**Geographic Targeting:** United States (all)
**Language:** English
**Bid Strategy:** Maximize Conversions (start here, switch to Target CPA after 30+ conversions)
**Daily Budget:** Start at $50–$100/day (₹4,200–₹8,400)

### Responsive Search Ads (RSAs)

**Headlines (15 variations):**
1. AI Agent Development Services
2. Custom AI Agents — Deployed in Weeks
3. Enterprise-Grade AI Agents
4. Book a Free AI Strategy Call
5. AI Agents That Actually Work
6. From Concept to Production in Weeks
7. 340% Average First-Year ROI
8. Customer Support AI Agents
9. Sales Qualification AI Agents
10. Voice AI Agent Development
11. Workflow Automation AI Agents
12. Multi-Agent Orchestration Systems
13. Free AI Readiness Assessment
14. SOC 2 & GDPR Compliant Architecture
15. Trusted Across 4 Countries

**Descriptions (4 variations):**
1. FactoryJet builds custom AI agents for customer support, sales, voice & workflow automation. Enterprise quality at startup-friendly pricing. Get a free strategy call.
2. Stop losing money to slow support & manual processes. Our AI agents resolve 87% of inquiries in 11 seconds. Book your free assessment today.
3. LangChain, OpenAI, Claude & Gemini — we build on the best technology for YOUR use case. Full-stack ownership from discovery to deployment.
4. 74% of executives achieve ROI in year one. Custom AI agents designed, built & deployed by senior engineers. No black boxes, no surprises.

**Sitelinks:**
- Customer Support Agents → #services (anchor)
- Our Process → #process (anchor)
- Case Studies → #case-studies (anchor)  
- Book Free Call → #consultation (anchor)

**Callout Extensions:**
- Free Strategy Session
- Deployed in 4–8 Weeks
- SOC 2 & GDPR Compliant
- 200+ System Integrations
- Senior Engineers Only

**Call Extension:** +91 910 339 8557

### Negative Keywords (add immediately)
```
-free ai agent
-open source ai agent
-ai agent tutorial
-how to build ai agent
-ai agent course
-ai agent template
-chatgpt
-ai agent github
-ai agent python tutorial
-ai agent salary
-ai agent jobs
-ai agent internship
```

---

## POST-LAUNCH OPTIMIZATION (Week 1-2)

1. **Monitor Search Terms Report daily** — add irrelevant terms as negatives
2. **Check conversion tracking** — ensure form submissions are recording
3. **Quality Score** — aim for 7+ on all keywords (landing page experience should score high with this content)
4. **Add remarketing tag** — retarget page visitors who didn't convert
5. **Set up Google Analytics 4 events** — track scroll depth, form interactions, CTA clicks
6. **A/B test headlines** — pin top 2 performers after 2 weeks of data

---

## SEO NOTES

This page includes:
- 4 JSON-LD schemas (Service, FAQPage, BreadcrumbList, Organization)
- 12 FAQ items optimized for featured snippets and voice search
- Semantic HTML (h1 → h2 → h3 hierarchy, landmarks, ARIA labels)
- 10 primary/secondary keywords naturally placed
- Mobile-first responsive design
- All accessibility requirements (labels, focus states, touch targets)

**Canonical URL:** `https://www.factoryjet.com/services/ai-agent-development`

---

## CONTENT WORD COUNT

| Section | Approx. Words |
|---|---|
| Hero | 180 |
| Trust Bar | 40 |
| Pain Validation | 350 |
| Why FactoryJet | 280 |
| Service Cards | 480 |
| Process | 420 |
| Industry Use Cases | 360 |
| Technology Stack | 80 |
| Case Studies | 400 |
| ROI Metrics | 250 |
| Trust & Compliance | 200 |
| FAQ Section | 1,800 |
| Final CTA | 300 |
| **TOTAL** | **~4,140** |

All content preserved from the original pillar page content document, adapted for Google Ads conversion (no pricing shown, all CTAs drive to consultation).
