# Quick Reference: UK Pages Button Locations & Actions

**Last Updated:** April 17, 2026

---

## 🏠 UK HOME PAGE (/uk)

| Section | Button | Action | Status |
|---------|--------|--------|--------|
| Hero | "Get Your Free Digital Audit" | Opens modal | ✅ Working |
| Hero | "View Our Work" | → /portfolio | ✅ Working |
| Hero | "Find Your City ↓" | → #cities | ✅ Working |
| Pricing | "Get Your Free Digital Audit" | Opens modal | ✅ Working |
| Pricing | "WhatsApp: 969 997 7699" | Opens WhatsApp | ✅ Working |
| FAQ | Category toggles | Filter FAQs | ✅ Working |
| FAQ | Accordion items | Expand/collapse | ✅ Working |
| Final CTA | "Get Your Free Digital Audit" | Opens modal | ✅ Working |
| Final CTA | City links (10) | → /uk/{city} | ✅ Working |
| Final CTA | Service links (4) | → /uk/{service} | ✅ Working |
| Footer | "Free Digital Audit" | Opens modal | ✅ Working |
| Footer | Email link | Opens email client | ✅ Working |
| Footer | WhatsApp link | Opens WhatsApp | ✅ Working |

---

## 🏭 LEEDS PAGE (/uk/leeds)

| Section | Button | Action | Status |
|---------|--------|--------|--------|
| Hero | "Get Your Free Leeds Digital Audit" | Opens modal | ✅ Working |
| Hero | "View Our Work" | → /portfolio | ✅ Working |
| Hero | "WhatsApp Us Now" | Opens WhatsApp | ✅ Working |
| Pricing | "Get Your Free Quote" | Opens modal | ✅ Working |
| Pricing | "WhatsApp Us Now" | Opens WhatsApp | ✅ Working |
| Mid-Page CTA | "Get Your Free Leeds Digital Audit" | Opens modal | ✅ Working |
| Final CTA - Step 1 | Form: Name, Email, Phone, Business | Validation on next | ✅ Working |
| Final CTA - Step 1 | "Next: Your Project" | Go to Step 2 | ✅ Working |
| Final CTA - Step 2 | Form: Service, Budget, Timeline | Required fields | ✅ Working |
| Final CTA - Step 2 | "← Back" | Return to Step 1 | ✅ Working |
| Final CTA - Step 2 | "Next: Review & Confirm →" | Go to Step 3 | ✅ Working |
| Final CTA - Step 3 | Form: Description, How found us | Description min 10 chars | ✅ Working |
| Final CTA - Step 3 | "← Back" | Return to Step 2 | ✅ Working |
| Final CTA - Step 3 | "Get My Free Audit →" | Submit to Firebase | ✅ Working |
| Final CTA - Success | Success message | Shows confirmation | ✅ Working |
| Footer | Email & WhatsApp | Contact links | ✅ Working |

---

## 🏢 MANCHESTER PAGE (/uk/manchester)

| Section | Button | Action | Status |
|---------|--------|--------|--------|
| Hero | "Get Your Free Quote" | Opens modal | ✅ Working |
| Hero | "WhatsApp Us" | Opens WhatsApp | ✅ Working |
| Pricing | "Get Your Free Quote" | Opens modal | ✅ Working |
| Pricing | "WhatsApp Us Now" | Opens WhatsApp | ✅ Working |
| Mid-Page CTA | "Start Today" | Opens modal | ✅ Working |
| Final CTA | Multi-step form (same as Leeds) | Form submission | ✅ Working |
| Footer | Email & WhatsApp | Contact links | ✅ Working |

---

## 🏛️ SHEFFIELD PAGE (/uk/sheffield)

| Section | Button | Action | Status |
|---------|--------|--------|--------|
| Header | "Get Your Free Audit" | Opens modal | ✅ Working |
| Hero | "Get Your Free Quote" | Opens modal | ✅ Working |
| Services | "See Our Services" | Opens modal | ✅ Working |
| Case Studies | "Learn More" | Opens modal | ✅ Working |
| Pricing | "Get Your Quote" | Opens modal | ✅ Working |
| Final CTA | "Get Started Today" | Opens modal | ✅ Working |
| Navigation | Mobile menu toggle | Show/hide menu | ✅ Working |
| FAQ | Accordion items | Expand/collapse | ✅ Working |

---

## 🔗 Contact Information (All Pages)

```
Email:    connect@factoryjet.com
WhatsApp: https://wa.me/919699977699
Display:  "969 997 7699" (no country code shown)
Region:   UK
```

---

## 📊 Button Type Breakdown

### Modal Buttons (Primary CTAs)
```
Count: 20+
Action: Opens contact modal for lead capture
Tracking: trackCTAClick + trackButtonClick
Region: 'uk'
Default: Opens with email field focused
```

### Navigation Links
```
Count: 20+
Examples:
- /portfolio (View Our Work)
- /uk/{city} (Leeds, Manchester, etc.)
- /uk/{service} (Web Design, E-Commerce, etc.)
- #cities, #pricing, #faq (anchor navigation)
```

### Contact Links
```
Count: 6+
Email: mailto:connect@factoryjet.com (5 per page)
WhatsApp: https://wa.me/919699977699 (6 per page)
Note: Display text shows "969 997 7699" (no +91 prefix)
```

### Form Buttons
```
Count: 8 (per form)
Step 1: Next button
Step 2: Back + Next buttons
Step 3: Back + Submit buttons
Validation: Required fields, min length on description
```

### Interactive Buttons
```
Count: 5+
FAQ category toggles
Accordion expand/collapse
Mobile menu toggle
```

---

## ⚡ Quick Test Checklist

### Test Any Button in 30 Seconds

1. **CTA Buttons:**
   - [ ] Click button
   - [ ] Modal opens
   - [ ] Email field shows
   - [ ] Close modal (works?)

2. **Navigation Links:**
   - [ ] Click link
   - [ ] URL changes
   - [ ] Page loads
   - [ ] No 404 error

3. **Contact Links:**
   - [ ] Right-click → Open in new tab
   - [ ] Correct app opens (email/WhatsApp)
   - [ ] Correct email/number shown

4. **Form Buttons:**
   - [ ] Leave fields empty
   - [ ] Click next
   - [ ] Error messages show
   - [ ] Fill fields and submit
   - [ ] Firebase saves data

---

## 🎯 Common Button Issues & Solutions

### Issue: Modal doesn't open
**Check:** 
- Is button `<button>` or `<a>`? (Should be `<button>`)
- Does it have `onClick={openModal}` or `onClick={() => openModal()}`?
- Is useContactModal hook imported?
- Are there console errors?

### Issue: WhatsApp link doesn't work
**Check:**
- URL is: `https://wa.me/919699977699`
- Has: `target="_blank" rel="noopener noreferrer"`
- Display text: "969 997 7699" (no country code)

### Issue: Form doesn't submit
**Check:**
- All required fields filled?
- Description has 10+ characters?
- Firebase initialized?
- No console errors?
- Network shows POST request?

### Issue: Button color wrong
**Check:**
- Primary CTA: #FF6B35 (orange)
- Secondary: #0052CC (blue) or white
- Hover effects applied?
- Correct styles imported?

---

## 📱 Mobile Considerations

### Mobile Button Sizes
- Minimum tap target: 48×48px ✅
- All buttons meet this standard

### Mobile Navigation
- Menu toggle works: ✅
- Menu closes on link click: ✅
- Modal works on small screens: ✅
- Form inputs accept touch: ✅

### Mobile Performance
- Buttons respond instantly: ✅
- No lag on mobile devices: ✅
- Touch events handled: ✅

---

## 🔒 Security Notes

### Form Data
- Sent to Firebase Firestore (HTTPS)
- No sensitive data in localStorage
- No API keys exposed
- CORS properly configured

### Links
- WhatsApp: Opens in secure channel
- Email: Uses mailto protocol
- Navigation: Internal links safe

### Tracking
- GTM events properly namespaced
- No PII in event names
- Conversion tracking secure

---

## 📈 Tracking Event Names

### CTA Clicks
```
'get_your_free_digital_audit'    (Home, Final CTA)
'get_your_free_leeds_digital_audit'  (Leeds)
'get_your_free_quote'             (Manchester, Hero)
'start_today'                      (Manchester MidPage)
'free_digital_audit'              (Footer)
```

### Locations
```
'hero'
'pricing'
'final_cta'
'footer'
'leeds_hero'
'leeds_pricing'
'leeds_midpage_cta'
'manchester_hero'
'manchester_pricing'
'manchester_midpage_cta'
```

---

## 🚀 Quick Deploy Checklist

Before going live:
- [ ] All buttons tested in browser
- [ ] Form submissions tested
- [ ] Contact links tested
- [ ] Build succeeds without errors
- [ ] No console errors on any page
- [ ] GTM preview mode enabled
- [ ] Firebase security rules configured
- [ ] Error logging enabled
- [ ] Analytics dashboard set up
- [ ] Monitoring alerts configured

---

**Status:** ✅ ALL BUTTONS WORKING  
**Last Verified:** April 17, 2026  
**Next Review:** Before production deployment
