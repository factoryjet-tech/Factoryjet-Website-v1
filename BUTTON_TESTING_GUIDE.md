# UK Pages Button Testing Guide

**Last Updated:** April 17, 2026

This guide provides step-by-step instructions for manually testing every button on UK pages to ensure they work as expected.

---

## 🧪 Testing Methodology

### Before Testing
1. Clear browser cache
2. Open browser DevTools (F12) → Console tab
3. Check Network tab to verify API calls
4. Enable Google Tag Manager preview mode (if available)

### What to Look For
- ✅ Button responds to click (visual feedback)
- ✅ Modal opens/closes properly
- ✅ Form fields accept input
- ✅ No JavaScript errors in console
- ✅ Network requests complete successfully
- ✅ Links navigate to correct URLs
- ✅ Tracking events fire in GTM

---

## 🏠 UK HOME PAGE (/uk)

### Section 1: Hero
**Location:** Top of page

#### Button 1: "Get Your Free Digital Audit"
```
Expected behavior:
- Button color: #0052CC (blue)
- On click: Contact modal opens
- Form shows: Email input field focused
- Tracking fired: trackCTAClick('get_your_free_digital_audit', 'hero', 'primary')

Test steps:
1. Click button
2. Verify modal appears with email field focused
3. Check DevTools Console for no errors
4. Check GTM (if available) for event 'get_your_free_digital_audit'
5. Close modal (click X or outside modal)
6. Verify modal closes smoothly
```

#### Button 2: "View Our Work"
```
Expected behavior:
- Button color: rgba(255,255,255,0.1) (transparent white)
- Border: 1px solid white/25
- On click: Navigate to /portfolio (global portfolio page)
- Should NOT have modal functionality

Test steps:
1. Click button
2. Verify navigation to /portfolio page
3. Check URL in address bar reads: .../portfolio
4. Verify portfolio page loads correctly
5. Go back to /uk using browser back button
```

#### Button 3: "Find Your City ↓"
```
Expected behavior:
- Text style: underline, white/70 color
- On click: Scroll to #cities section
- Smooth scroll animation

Test steps:
1. Click button
2. Verify smooth scroll to Cities section
3. Verify URL doesn't change
4. Verify Cities section comes into view
```

### Section 2: Pricing
**Location:** ~Scroll down to "UK Pricing" section

#### Button: "Get Your Free Digital Audit"
```
Expected behavior:
- Button color: #0052CC (blue) with shadow
- Hover effect: translateY(-1px) with increased shadow
- On click: Contact modal opens
- Tracking: trackCTAClick('get_your_free_digital_audit', 'pricing', 'primary')

Test steps:
1. Hover over button - verify lift effect with shadow increase
2. Click button
3. Verify modal opens
4. Type an email and press Tab
5. Verify modal form accepts input
6. Press Escape or click X to close
7. Verify modal closes smoothly
```

#### Button: "WhatsApp: 969 997 7699"
```
Expected behavior:
- Button color: #FFFFFF (white) with border
- Hover effect: Border color changes to #0052CC
- On click: Opens WhatsApp link
- Link target: https://wa.me/919699977699
- Opens in NEW TAB (target="_blank")

Test steps:
1. Hover over button - verify border color change
2. Right-click button → "Open Link in New Tab"
3. Verify WhatsApp link or warning page appears
4. Verify URL shows: web.whatsapp.com or whatsapp.com
5. Close tab and return to UK page
```

### Section 3: FAQ
**Location:** ~Scroll to "Frequently Asked Questions" section

#### Buttons: Category toggles and Accordion items
```
Expected behavior:
- Category buttons: Toggle category filters
- Accordion items: Expand/collapse FAQ answers
- Active state: Bold font weight

Test steps:
1. Click a category button (e.g., "Website Design")
2. Verify FAQs filter to show only that category
3. Verify button appears bold/active
4. Click another category
5. Verify FAQs update to new category
6. Click accordion item to expand
7. Verify answer expands smoothly
8. Click again to collapse
9. Verify answer collapses smoothly
```

### Section 4: Final CTA
**Location:** Bottom section with blue background

#### Button: "Get Your Free Digital Audit"
```
Expected behavior:
- Same as pricing CTA
- Tracking: trackCTAClick('get_your_free_digital_audit', 'final_cta', 'primary')

Test steps:
1. Scroll to bottom of page
2. Click button
3. Verify modal opens
4. Submit a test form:
   - Name: "Test User"
   - Email: "test@example.com"
   - Phone: "+44 7700 900000"
   - Business: "Test Company"
   - Click "Next: Your Project"
5. Fill Step 2 fields and continue
6. Fill Step 3 description and submit
7. Verify success message appears
8. Check browser console for no errors
```

#### Links: Cities (Leeds, Manchester, Birmingham, etc.)
```
Expected behavior:
- Text color: rgba(255,255,255,0.75)
- On click: Navigate to /uk/{city}

Test steps:
1. Click "Leeds" link
2. Verify navigation to /uk/leeds
3. Check URL in address bar
4. Verify Leeds page loads
5. Go back and test at least 2 more cities
```

#### Links: Services (Web Design, E-Commerce, etc.)
```
Expected behavior:
- Same as city links but navigate to /uk/{service}

Test steps:
1. Click "Web Design UK"
2. Verify navigation to /uk/web-design
3. Test at least 2 services
```

#### Links: Contact
```
Expected behavior:
- Email link: Opens default email client
- WhatsApp link: Opens WhatsApp in new tab

Test steps:
1. Right-click email link → "Open in New Tab"
2. Verify email client opens or mailto: prompt appears
3. Click WhatsApp link
4. Verify opens in new tab → WhatsApp
```

### Section 5: Footer
**Location:** Bottom of page

#### Button: "Free Digital Audit"
```
Expected behavior:
- Text color: rgba(255,255,255,0.85)
- On click: Opens contact modal
- Tracking: trackCTAClick('free_digital_audit', 'footer', 'primary')

Test steps:
1. Scroll to footer
2. Click "Free Digital Audit" button
3. Verify modal opens with email focused
4. Close modal
```

---

## 🏭 LEEDS PAGE (/uk/leeds)

### Section 1: Hero
**Location:** Top of page

#### Button 1: "Get Your Free Leeds Digital Audit"
```
Expected behavior:
- Button color: #FF6B35 (orange)
- On hover: Darkens to #e55a2b
- On click: Contact modal opens with region='uk'
- Tracking: trackCTAClick('get_your_free_leeds_digital_audit', 'leeds_hero', 'primary')

Test steps:
1. Hover over button - verify color darkens
2. Move away - verify color returns
3. Click button
4. Verify modal opens
5. Verify modal has email field
6. Type email: "test@example.com"
7. Verify field accepts input
8. Close modal
```

#### Button 2: "View Our Work"
```
Expected behavior:
- Button color: #1e293b (dark slate)
- Border: 1px solid white/20
- On hover: bg-white/20 (slightly lighter)
- On click: Navigate to /portfolio

Test steps:
1. Hover - verify background lightens
2. Click - navigate to portfolio
3. Verify portfolio page loads
4. Go back to Leeds page
```

#### Button 3: "WhatsApp Us Now"
```
Expected behavior:
- Link to: https://wa.me/919699977699
- Display text: "WhatsApp Us Now" (NOT "+1339...")
- Opens in new tab

Test steps:
1. Right-click button
2. "Open Link in New Tab"
3. Verify WhatsApp link in new tab
4. Close tab and return
```

### Section 2: Pricing
**Location:** Pricing table section

#### Button: "Get Your Free Quote"
```
Expected behavior:
- Button color: #FF6B35 (orange)
- Hover effect: brightness-110
- On click: Contact modal opens
- Tracking: trackCTAClick('get_your_free_quote', 'leeds_pricing', 'primary')

Test steps:
1. Hover over button - verify brightness increases
2. Click - verify modal opens
3. Form should show email field
4. Close modal
```

#### Button: "WhatsApp Us Now"
```
Expected behavior:
- Link to: https://wa.me/919699977699
- White text, border: 1px solid #E5E7EB

Test steps:
1. Hover - verify border changes to #0052CC, text changes to #0052CC
2. Click - opens WhatsApp in new tab
3. Verify correct link
```

### Section 3: Mid-Page CTA
**Location:** Blue section between other sections

#### Button: "Get Your Free Leeds Digital Audit"
```
Expected behavior:
- Button color: #FF6B35
- Hover: brightness-110
- On click: Modal opens
- Tracking: trackCTAClick('get_your_free_leeds_digital_audit', 'leeds_midpage_cta', 'primary')

Test steps:
1. Click button
2. Verify modal opens
3. Close modal
```

### Section 4: Final CTA - Multi-Step Form
**Location:** Bottom section, dark background

**This is the most important section to test thoroughly!**

#### Form - Step 1: About You

```
Fields to test:
- Full Name (required)
- Business Email (required)
- Phone/WhatsApp (required)
- Business Name (required)

Test steps:
1. Leave all fields empty
2. Click "Next: Your Project"
3. Verify error messages appear: "This field is required"
4. Fill in all required fields:
   - Name: "John Smith"
   - Email: "john@example.com"
   - Phone: "+44 7700 900000"
   - Business: "Smith Ltd"
5. Click "Next: Your Project"
6. Verify Step 2 loads
7. Click "← Back" button
8. Verify Step 1 fields still contain entered data
9. Click "Next: Your Project" again
```

#### Form - Step 2: Your Project

```
Fields to test:
- What do you need? (dropdown, required)
- Estimated budget (dropdown, required)
- Timeline (dropdown, required)

Test steps:
1. Leave dropdowns empty
2. Click "Next: Review & Confirm"
3. Verify error messages appear
4. Select from each dropdown:
   - Service: "Web Design & Development"
   - Budget: "£5,000–£10,000"
   - Timeline: "Within 1 month"
5. Click "Next: Review & Confirm"
6. Verify Step 3 loads
7. Verify Step 2 summary shows selected values
```

#### Form - Step 3: Confirm & Send

```
Fields to test:
- Brief description (required, min 10 chars)
- How did you find us? (optional)

Expected summary:
- Name: "John Smith"
- Email: "john@example.com"
- Phone: "+44 7700 900000"
- Business: "Smith Ltd"
- Service: "Web Design & Development"
- Budget: "£5,000–£10,000"
- Timeline: "Within 1 month"

Test steps:
1. Verify summary displays correctly
2. Leave description empty
3. Click "Get My Free Audit"
4. Verify error: "Please enter at least 10 characters"
5. Type description: "We need a new website" (exactly 20 chars)
6. Verify error clears
7. (Optional) Select "How did you find us?" - e.g., "Google search"
8. Click "Get My Free Audit"
9. Verify:
   - Modal shows: "Audit Request Sent" with checkmark
   - Message: "We'll review your project and get back to you within 4 hours..."
   - No console errors
10. Check Firebase Firestore:
    - Collection: "contactus"
    - Document ID should follow pattern: YYYY-MM-DD_HH-MM-SS_JohnSm...
    - Verify all fields are saved
```

#### Verification Checklist for Form Submission
```
✅ Email notification sent (check spam folder)
✅ Google Ads conversion pixel fires (GTM preview mode)
✅ Form data appears in Firebase Firestore within 5 seconds
✅ No server errors in response
✅ Success message displays
✅ Modal can be closed and page remains functional
✅ Form can be submitted again (new document created)
```

### Section 5: Footer
```
Contact information:
- Email: connect@factoryjet.com
- WhatsApp: https://wa.me/919699977699

Test steps:
1. Click email link → verify email client opens
2. Click WhatsApp link → verify opens in new tab
```

---

## 🏢 MANCHESTER PAGE (/uk/manchester)

### Section 1: Hero
**Location:** Top of page

#### Button 1: "Get Your Free Quote"
```
Expected behavior:
- Button color: #FF6B35 (orange)
- On hover: Darkens to #e55a2b
- On click: Modal opens
- Tracking: trackCTAClick('get_your_free_quote', 'manchester_hero', 'primary')

Test steps:
1. Hover and click
2. Verify modal opens
3. Close modal
```

#### Button 2: "WhatsApp Us"
```
Expected behavior:
- Link to: https://wa.me/919699977699
- Display: "WhatsApp Us" (short text)

Test steps:
1. Click link
2. Verify WhatsApp opens in new tab
3. Verify correct number
```

### Section 2: Pricing
**Location:** Pricing section

Same structure as Leeds - test both buttons work correctly

### Section 3: Mid-Page CTA

#### Button: "Start Today"
```
Expected behavior:
- Button color: #FF6B35
- On click: Modal opens
- Tracking: trackCTAClick('start_today', 'manchester_midpage_cta', 'primary')

Test steps:
1. Click button
2. Verify modal opens
3. Verify email field is focused
```

### Section 4: Final CTA - Multi-Step Form

**Same testing as Leeds form above** (same structure and validation)

Additional tracking verification:
- Region: should be 'uk'
- Page: should be 'manchester'
- Firebase collection: contactus
- Document should have: `"page": "manchester"`

### Section 5: Footer
```
Same as Leeds:
- Email: connect@factoryjet.com
- WhatsApp: https://wa.me/919699977699
```

---

## 🏛️ SHEFFIELD PAGE (/uk/sheffield)

### All CTA Buttons
**Location:** Multiple sections throughout page

#### Button Count: 6+ CTA buttons

```
Expected behavior for ALL buttons:
- Color: #FF6B35 (orange) or variant
- On click: Contact modal opens
- Modal region: 'uk'
- No form submission on this page (modal only)

Locations to test:
1. Header area - "Get Your Free Audit" button
2. Hero section - "Get Your Free Quote" button
3. Services section - "See Our Services" button
4. Case Studies - "Learn More" button
5. Pricing section - "Get Your Quote" button
6. Final CTA - "Get Started Today" button

Test steps for each:
1. Click the button
2. Verify contact modal opens
3. Verify email field is ready for input
4. Type test email
5. Close modal (click X or outside)
6. Verify page state unchanged
7. Move to next button
```

### Menu Toggle Button
```
Location: Top right (mobile) or header

Expected behavior:
- Toggles mobile menu open/close
- Close button in menu also closes
- Clicking CTA in menu: closes menu AND opens modal

Test steps (mobile only):
1. Resize browser to mobile width
2. Click menu icon (hamburger)
3. Verify menu slides open
4. Click menu item with CTA
5. Verify menu closes AND modal opens
6. Close modal
```

### FAQ Accordion
```
Location: FAQ section

Expected behavior:
- Click question to expand answer
- Click again to collapse
- Only one section open at a time (optional - check behavior)

Test steps:
1. Click first FAQ question
2. Verify answer expands smoothly
3. Click second FAQ question
4. Verify first collapses, second expands
5. Click same question again
6. Verify it collapses
```

---

## ⚠️ Common Issues to Check

### Issue 1: Modal doesn't open
```
Check:
✅ Contact modal is imported
✅ useContactModal hook is called
✅ openModal function is called onClick
✅ Browser console shows no errors
✅ ContactModalContext is properly provided in layout
```

### Issue 2: WhatsApp link not working
```
Check:
✅ Link URL is: https://wa.me/919699977699
✅ target="_blank" and rel="noopener noreferrer" present
✅ Display text shows "969 997 7699" NOT "+919699977699"
✅ Link opens in new tab
```

### Issue 3: Form submission fails
```
Check:
✅ All required fields filled
✅ Browser console for error messages
✅ Network tab shows POST request to Firebase
✅ Firebase is initialized (check firebase/index.ts)
✅ Collection path is "contactus"
✅ No CORS errors
```

### Issue 4: GTM tracking not firing
```
Check:
✅ GTM tag manager is loaded on page
✅ trackCTAClick function is imported
✅ onClick handler calls both trackCTAClick and trackButtonClick
✅ Event names are spelled correctly
✅ GTM preview mode is enabled (if testing)
```

### Issue 5: Modal not showing with correct region
```
Check:
✅ openModal called with: openContactModal('uk', 'default')
✅ ContactModalContext receives region prop
✅ Modal component checks region prop
✅ Email subject or form shows "UK" region
```

---

## 📋 Testing Checklist

### Before Deployment
```
UK HOME PAGE (/uk):
☐ Hero "Get Your Free Digital Audit" button opens modal
☐ Hero "View Our Work" button navigates to /portfolio
☐ Hero "Find Your City" button scrolls to cities section
☐ Pricing "Get Your Free Digital Audit" button opens modal
☐ Pricing "WhatsApp" link opens in new tab
☐ FAQ accordion works (expand/collapse)
☐ FAQ category filters work
☐ Final CTA "Get Your Free Digital Audit" button opens modal
☐ Final CTA city links navigate correctly
☐ Final CTA service links navigate correctly
☐ Footer "Free Digital Audit" button opens modal
☐ Footer email link works
☐ Footer WhatsApp link works

LEEDS PAGE (/uk/leeds):
☐ Hero CTA button opens modal
☐ Hero "View Our Work" navigates to /portfolio
☐ Hero WhatsApp link works correctly
☐ Pricing CTA button opens modal
☐ Pricing WhatsApp link works correctly
☐ Mid-page CTA button opens modal
☐ Final CTA form Step 1 validates (required fields)
☐ Final CTA form Step 2 validates (required fields)
☐ Final CTA form Step 3 validates (min 10 chars)
☐ Final CTA form submits to Firebase
☐ Final CTA success message displays
☐ Footer contact info is correct

MANCHESTER PAGE (/uk/manchester):
☐ Hero CTA button opens modal
☐ Hero WhatsApp link works correctly
☐ Pricing CTA button opens modal
☐ Pricing WhatsApp link works correctly
☐ Mid-page CTA button opens modal
☐ Final CTA form submits successfully
☐ Footer contact info is correct

SHEFFIELD PAGE (/uk/sheffield):
☐ All 6 CTA buttons open modal
☐ Menu toggle works (mobile)
☐ Menu CTA closes menu and opens modal
☐ FAQ accordion works
☐ No broken links

GENERAL:
☐ No console errors on any page
☐ GTM tracking events fire
☐ Firebase submissions logged
☐ Google Ads conversion pixel fires
☐ Mobile responsive (buttons work on mobile)
☐ Accessibility: can tab between buttons
☐ Accessibility: modals have proper ARIA labels
☐ No 404 errors in network requests
☐ Load time is acceptable (<3 seconds)
```

---

## 🎯 Success Criteria

**All buttons are working correctly when:**

1. ✅ Click any CTA button → Modal opens with email field ready
2. ✅ Modal form accepts input → Can type email and select options
3. ✅ Modal can be closed → Click X or click outside
4. ✅ Submit form → Data saves to Firebase within 5 seconds
5. ✅ Success message → "Audit Request Sent" displays
6. ✅ Navigation buttons → Correct URL in address bar
7. ✅ Contact links → Email/WhatsApp opens in appropriate app
8. ✅ No errors → Console shows no errors
9. ✅ Tracking works → GTM events fire (if GTM configured)
10. ✅ Mobile works → All buttons work on small screens

---

**Last Updated:** April 17, 2026  
**Next Review:** Before production deployment
