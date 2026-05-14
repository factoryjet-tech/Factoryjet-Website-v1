# FactoryJet — Comprehensive Image Generation Prompts
**Created:** 05/14/2026  
**Purpose:** Production-ready AI image prompts for all 20 images in the FactoryJet US image bank  
**Tools:** Midjourney v6.1+ (primary) · DALL-E 3 (fallback) · Adobe Firefly (alt)  
**Output format:** PNG at max resolution → strip metadata → convert to WebP → compress to target KB

---

## HOW TO USE THESE PROMPTS

### Midjourney
1. Paste the **MJ Prompt** directly into `/imagine`
2. Select the best 2 of 4 upscales (U1–U4)
3. Use **Vary (Subtle)** if you need slight adjustments
4. Download → convert to WebP → resize to target dimensions

### DALL-E 3 (ChatGPT)
Use the **DALL-E Prompt** section. Select 1792×1024 for landscape images.

### Quality baseline
Every image must pass this bar before use:
- No text, watermarks, logos, UI labels visible
- No distorted hands, fingers, or faces
- No identifiable brand icons (no Shopify logo, no Slack logo, etc.)
- Correct aspect ratio ±5%
- Photorealistic OR clean vector — never uncanny valley

---

## BATCH 1 — US City Hero Images
**Use in:** `CityContextSection` hero slots  
**Dimensions:** 1200×800px (3:2 ratio) → **save to** `/public/images/us/{city}/hero-{city}.webp`  
**Target file size:** 60–90KB after WebP compression  
**Style direction:** Architectural/travel photography. Think Unsplash premium tier. Not tourist brochure — more "business journal cover photo" energy.

---

### B1-1 · Austin, TX
**Filename:** `hero-austin.webp`  
**Save to:** `/public/images/us/austin/hero-austin.webp`

**MJ Prompt:**
```
aerial drone photography of Austin Texas downtown skyline at golden hour, Colorado River in foreground with Lady Bird Lake reflection, modern glass office towers catching warm orange and amber light, Frost Bank Tower and Indeed Tower prominent, light haze over horizon, foreground water perfectly still, scattered sailing boats on water, warm cinematic color grading, shot on Hasselblad H6D-400C, 85mm equivalent focal length, f/8, ISO 100, professional architectural photography, high dynamic range, no text, no watermarks, no logos --ar 3:2 --style raw --q 2 --v 6.1
```

**DALL-E Prompt:**
```
An aerial photograph of Austin, Texas downtown skyline at golden hour. The Colorado River (Lady Bird Lake) occupies the foreground with mirror-like reflections of the city lights. Modern glass skyscrapers glow orange and amber in late afternoon sun. A few sailboats dot the water. The image has warm cinematic color grading — oranges, golds, and deep sky blue. Shot style: professional architectural drone photography, similar to a magazine cover. No text, no watermarks, no logos. 3:2 landscape aspect ratio.
```

**Photography notes:**
- Capture between 5:45–6:30 PM equivalent (long shadows, golden cast)  
- The water reflection is the hero — foreground must be water, not road  
- Warm color grade: lift shadows toward amber, push highlights to gold  
- If AI adds bridges, that's fine — authentic Austin geography

---

### B1-2 · Miami, FL
**Filename:** `hero-miami.webp`  
**Save to:** `/public/images/us/miami/hero-miami.webp`

**MJ Prompt:**
```
wide angle photography of Miami Florida downtown skyline from Biscayne Bay waterfront, turquoise and teal water in foreground, modern glass skyscrapers, Brickell financial district towers, bright midday sun, vivid tropical colors — electric blue sky, white cumulus clouds, azure water, lush palm tree silhouettes at edges, shot on Sony A1 with 24mm lens, f/11, ISO 64, polarizing filter effect, professional travel/architectural photography, ultra sharp, vibrant but natural, no text, no watermarks, no logos --ar 3:2 --style raw --q 2 --v 6.1
```

**DALL-E Prompt:**
```
A professional wide-angle photograph of Miami's downtown Brickell skyline viewed from Biscayne Bay. Turquoise water fills the foreground. The skyscrapers are modern glass and steel towers. The sky is brilliant tropical blue with large white cumulus clouds. A few palm trees frame the edges. The color palette is vibrant — azure water, white towers, deep blue sky. Midday sun lighting with a polarized sky effect. Professional architectural/travel photography style, not a tourist postcard. No text, no watermarks, no logos. 3:2 landscape ratio.
```

**Photography notes:**
- Miami's signature = water color + sky color. Both must pop.  
- Avoid making it look like a vacation ad — neutral building colors, no people  
- Don't generate Art Deco South Beach style — this is Brickell/financial district

---

### B1-3 · Denver, CO
**Filename:** `hero-denver.webp`  
**Save to:** `/public/images/us/denver/hero-denver.webp`

**MJ Prompt:**
```
professional photography of Denver Colorado downtown skyline with Rocky Mountains snow-capped peaks in background, clear crisp autumn day, deep cobalt blue sky, zero clouds, modern glass office towers in foreground, warm afternoon light casting long shadows, Front Range mountains perfectly sharp in distance, foreground has urban park greenery, trees with autumn yellow foliage, shot on Phase One XF 150MP, 50mm equivalent, f/16 for maximum mountain sharpness, ISO 64, professional architectural photography, no text, no watermarks, no logos --ar 3:2 --style raw --q 2 --v 6.1
```

**DALL-E Prompt:**
```
A professional photograph of Denver, Colorado's downtown skyline with the snow-capped Rocky Mountains clearly visible in the background. The sky is a deep, clear cobalt blue — no clouds. Modern glass towers are in the foreground. Autumn foliage (yellow and orange trees) at the base adds color. The mountains are sharp and majestic. Afternoon light. The overall feel is: prosperous Mountain West city, clean air, business energy meets natural grandeur. No text, no watermarks, no logos. 3:2 landscape ratio.
```

**Photography notes:**
- The mountains ARE the story — they must be visible, sharp, and majestic  
- Avoid winter/snow city scenes — keep urban feel, just mountain snow  
- The color contrast is cobalt sky + warm autumn + white peaks

---

### B1-4 · Nashville, TN
**Filename:** `hero-nashville.webp`  
**Save to:** `/public/images/us/nashville/hero-nashville.webp`

**MJ Prompt:**
```
professional architectural photography of Nashville Tennessee downtown skyline at blue hour twilight, Cumberland River in foreground perfectly still with city light reflections, AT&T Batman Building (black glass tower with twin spires) as focal center, warm amber street lights and cooler blue sky creating dual-tone atmosphere, modern mixed-use development surrounding, bridges crossing river, long exposure effect creating silky water, shot on Canon EOS R5, 35mm, f/8, ISO 400, professional urban photography, cinematic color grade, no text, no watermarks, no logos --ar 3:2 --style raw --q 2 --v 6.1
```

**DALL-E Prompt:**
```
A professional photograph of Nashville, Tennessee's downtown skyline at blue hour (just after sunset). The Cumberland River is in the foreground with reflections of city lights shimmering on the water. The distinctive AT&T Tower (a skyscraper with twin gothic spires) is the centerpiece. The sky is deep blue with orange-amber glow on the horizon from the last light. City lights are on, casting warm tones. A bridge crosses the river in the middle ground. The mood is: vibrant, growing city, warm and welcoming. Long-exposure water effect. No text, no watermarks, no logos. 3:2 ratio.
```

**Photography notes:**
- Nashville's signature = that AT&T Batman Tower — make sure it's recognizable  
- Blue hour is optimal — gives Nashville its "country meets modern" feel  
- Reflections on the Cumberland River are essential

---

### B1-5 · Portland, OR
**Filename:** `hero-portland.webp`  
**Save to:** `/public/images/us/portland/hero-portland.webp`

**MJ Prompt:**
```
professional photography of Portland Oregon downtown skyline from east bank of Willamette River, Mt Hood snow-capped volcano visible in far background, multiple bridges crossing river including Hawthorne Bridge, lush Pacific Northwest green trees lining riverbanks, overcast soft diffused light giving cool Pacific Northwest atmosphere, light morning mist, steel and glass office towers, deep green vegetation foreground, cool gray-blue color palette with forest greens, shot on Nikon Z9, 35mm, f/11, ISO 200, professional architectural/landscape photography, no text, no watermarks, no logos --ar 3:2 --style raw --q 2 --v 6.1
```

**DALL-E Prompt:**
```
A professional photograph of Portland, Oregon's downtown skyline viewed from across the Willamette River. Mt. Hood (a snow-capped volcanic peak) is faintly visible in the background. Multiple historic and modern bridges span the river. Dense Pacific Northwest greenery lines the riverbanks. The light is soft and overcast — characteristic of Portland's climate. The color palette is cool: grey-blue sky, forest greens, silver water. The mood is: eco-conscious, tech-forward, Pacific Northwest authenticity. No text, no watermarks, no logos. 3:2 ratio.
```

**Photography notes:**
- Portland's identity = green + bridges + Mt Hood  
- Don't make it look gloomy — overcast but still professional  
- The green vegetation is a differentiator vs. other city shots

---

### B1-6 · Charlotte, NC
**Filename:** `hero-charlotte.webp`  
**Save to:** `/public/images/us/charlotte/hero-charlotte.webp`

**MJ Prompt:**
```
professional architectural photography of Charlotte North Carolina uptown skyline, Bank of America Corporate Center as tallest tower, modern financial district glass towers, clear sunny afternoon, bright blue sky with light wispy cirrus clouds, foreground urban plaza with manicured landscaping, warm Southern light, trees in full green summer foliage, polished professional financial district atmosphere, shot on Sony A7R V, 50mm equivalent, f/11, ISO 100, clean editorial style, no text, no watermarks, no logos --ar 3:2 --style raw --q 2 --v 6.1
```

**DALL-E Prompt:**
```
A professional photograph of Charlotte, North Carolina's uptown (downtown) skyline. The Bank of America Corporate Center — a distinctive glass tower — is the tallest building and visual anchor. Other modern financial district towers surround it. The sky is bright blue with light clouds. Warm Southern afternoon light. The foreground has an urban plaza with manicured green landscaping. The feel is: confident, prosperous, financial hub of the Southeast — clean and polished. No text, no watermarks, no logos. 3:2 ratio.
```

**Photography notes:**
- Charlotte = finance + growth — should look prosperous, not quirky  
- The Bank of America tower (with its distinctive top) is the landmark  
- Avoid making it look like Anytown, USA — lean into the uptown financial feel

---

### B1-7 · Raleigh, NC
**Filename:** `hero-raleigh.webp`  
**Save to:** `/public/images/us/raleigh/hero-raleigh.webp`

**MJ Prompt:**
```
professional photography of Raleigh North Carolina downtown skyline, modern mixed architecture of glass towers and mid-rise buildings, Research Triangle Park region tech hub feel, clear blue sky sunny day, lush green trees throughout the city, clean and prosperous mid-size city atmosphere, warm afternoon light, foreground has tree-lined streets and greenway trails, contemporary urban development, shot on Fujifilm GFX 100S, 45mm, f/11, ISO 100, clean architectural photography, no text, no watermarks, no logos --ar 3:2 --style raw --q 2 --v 6.1
```

**DALL-E Prompt:**
```
A professional photograph of Raleigh, North Carolina's downtown skyline. It's a mix of modern glass towers and mid-rise office buildings surrounded by abundant tree canopy — Raleigh is known as the "City of Oaks." Bright blue sky, sunny day, warm afternoon light. The feel is: emerging tech hub, clean and educated, Research Triangle energy — prosperous but not flashy. Foreground shows tree-lined streets. No text, no watermarks, no logos. 3:2 ratio.
```

**Photography notes:**
- Raleigh is uniquely green for a city its size — trees must be prominent  
- Not as dramatic as Austin or Miami — moderate height buildings  
- Research Triangle feel: clean, smart, growth-oriented

---

### B1-8 · Tampa, FL
**Filename:** `hero-tampa.webp`  
**Save to:** `/public/images/us/tampa/hero-tampa.webp`

**MJ Prompt:**
```
professional architectural photography of Tampa Florida downtown skyline from Hillsborough Bay waterfront, modern glass towers reflected in calm bay water, SkyPoint and JPMorgan Chase Building towers prominent, Sunshine Skyway Bridge silhouette visible in far background, brilliant Florida sunshine, vibrant blue water and sky, scattered white clouds, palm trees along waterfront, warm tropical atmosphere, shot on Sony A1, 24-70mm at 35mm, f/11, ISO 100, polarizing filter, professional travel and architectural photography, no text, no watermarks, no logos --ar 3:2 --style raw --q 2 --v 6.1
```

**DALL-E Prompt:**
```
A professional photograph of Tampa, Florida's downtown skyline viewed from Hillsborough Bay. Modern glass skyscrapers reflect in the calm, bright blue bay water. The Sunshine Skyway Bridge is faintly visible in the far background. Palm trees line the waterfront. The sky is brilliant Florida blue with white clouds. The overall feel is: sunbelt growth, waterfront city, vibrant and modern. Afternoon sun with polarized colors — deep blue water, bright towers, tropical atmosphere. No text, no watermarks, no logos. 3:2 ratio.
```

**Photography notes:**
- Tampa's signature = the bay + the Skyway Bridge in the distance  
- Strong Florida colors: deep blue water, bright white buildings, palm trees  
- Warmer and more vivid than the Miami shot (Bay vs. ocean vibes)

---

## BATCH 2 — AI Service Hero Images
**Use in:** Hero rightSlot and ServiceExplanation sections for AI service pages  
**Dimensions:** 1200×800px (3:2 ratio) → **save to** `/public/images/us/services/`  
**Target file size:** 60–80KB after WebP compression  
**Style direction:** Product photography meets editorial tech. Think Linear.app's marketing photography — clean, minimal, real interfaces, soft ambient light. NOT stock photo people-at-computers.

---

### B2-1 · AI Chatbot Interface
**Filename:** `hero-ai-chatbot.webp`  
**Use in:** `/us/services/ai-chatbot-development/` hero + ServiceExplanation

**MJ Prompt:**
```
product photography of MacBook Pro on a minimal white oak desk, screen showing a clean modern AI chat interface with conversation bubbles, light blue and white UI color scheme, speech bubbles alternating user and AI messages visible but no readable text, soft natural window light from left, shallow depth of field with desk surface in bokeh, small succulent plant out of focus in background, warm neutral desk accessories, premium product photography style similar to Apple marketing, shot on Canon R5, 85mm macro, f/2.8, ISO 400, soft diffused daylight, no text on screen readable, no logos, no watermarks, no brand icons --ar 3:2 --style raw --q 2 --v 6.1
```

**DALL-E Prompt:**
```
A premium product photograph of a MacBook Pro on a clean white oak desk. The laptop screen shows a modern AI chatbot interface — a clean chat UI with alternating message bubbles in light blue and white. The text in the UI is intentionally blurred/unreadable. Natural window light from the left creates soft shadows. Shallow depth of field blurs the desk accessories in the background. The overall aesthetic is minimal and premium — like an Apple product ad. No readable text anywhere, no logos, no brand icons, no watermarks. 3:2 landscape ratio.
```

**Negative prompt / things to avoid:**
- No cartoonish robot icons  
- No visible "AI" text or brand logos  
- No stock photo style (woman at laptop, man pointing at screen)  
- No dark backgrounds — this page has dark sections, hero needs light

---

### B2-2 · AI Workflow Automation Dashboard
**Filename:** `hero-ai-workflow.webp`  
**Use in:** `/us/services/ai-workflow-automation/` hero + ServiceExplanation

**MJ Prompt:**
```
product photography of a 27-inch iMac on a minimal desk showing a node-based workflow automation interface, connected flowchart nodes with arrows showing process steps, soft blue-gray UI with colored status indicators, no readable text, modern Figma-style interface design, soft cinematic ambient office lighting, warm desk wood surface, single coffee cup out of focus to side, clean professional workspace, deep depth of field on screen then sharp bokeh on surroundings, shot on Sony A7R V, 50mm, f/4, ISO 200, natural warm office light, premium editorial photography, no text, no logos, no watermarks --ar 3:2 --style raw --q 2 --v 6.1
```

**DALL-E Prompt:**
```
A premium product photograph of an iMac on a minimal desk. The screen displays a visual workflow automation tool — a canvas with connected rectangular nodes joined by flowing arrows, representing automated process steps. The UI is clean and modern, light blue-gray with soft colored dots for status. No text is readable. The desk is warm wood. A coffee cup is softly out of focus to one side. The lighting is soft, cinematic office ambient light. The overall feel is: modern, intelligent, professional. No logos, no readable text, no watermarks. 3:2 ratio.
```

**Photography notes:**
- The node graph = the whole story. Must be clearly a workflow/automation tool  
- Inspired by n8n, Zapier, and Make.com visual style — but no branding  
- Warm desk + cool screen creates nice color contrast

---

### B2-3 · AI Integration Architecture
**Filename:** `hero-ai-integration.webp`  
**Use in:** `/us/services/ai-integration-services/` hero + ServiceExplanation

**MJ Prompt:**
```
clean minimalist isometric 3D illustration, six software system icons (generic CRM, website, mobile app, database, email, analytics) as floating geometric cards connected by glowing light-blue data stream lines, central AI brain/processor node in middle, white and off-white background, accent colors: electric blue #0066FF and soft orange #FF6B35, all floating with subtle drop shadows, no text, no logos, each card has generic abstract icon, ultra clean vector aesthetic similar to Stripe Atlas or Linear website illustrations, professional B2B software company art direction, flat isometric perspective, modern 2025 design language --ar 3:2 --q 2 --v 6.1
```

**DALL-E Prompt:**
```
A clean, professional isometric illustration showing AI system integration. Six generic software application icons (representing a CRM, website, mobile app, database, email system, and analytics platform) are floating as separate geometric cards connected by glowing blue data flow lines. At the center is a central AI processing node — shown as a glowing geometric shape, not a robot. The background is pure white. The accent colors are electric blue and soft orange. Everything is clean, minimal, and modern — inspired by the illustration style of Stripe, Linear, or Vercel's marketing. No text anywhere, no identifiable brand logos, no watermarks. 3:2 landscape ratio.
```

**Photography notes:**
- This is the only illustration (not photo) in the batch — that's intentional  
- Isometric illustrations are premium-feeling and technically clear  
- Must feel like a $300/month SaaS product's marketing site, not clipart

---

### B2-4 · AI Agent Monitoring Dashboard
**Filename:** `hero-ai-agent-us.webp`  
**Use in:** `/us/services/ai-agents/` hero (US variant) + general AI pages

**MJ Prompt:**
```
product photography of ultrawide 34-inch curved monitor on a minimal standing desk, screen showing dark-themed AI operations dashboard with multiple task cards, metric graphs, status indicators with green/amber dots, real-time activity feed, clean dark navy #0A0F1E UI with blue accent colors, all text intentionally blurred but layout clearly visible, soft warm ambient desk lamp glow from right, premium mechanical keyboard in foreground out of focus, dark room with subtle gradient lighting, cinematic product photography, shot on Sony A7R V, 35mm, f/2.8, ISO 1600, natural dim office ambience, no logos, no text readable, no watermarks --ar 3:2 --style raw --q 2 --v 6.1
```

**DALL-E Prompt:**
```
A premium product photograph of an ultrawide curved monitor on a minimal standing desk in a dimly lit office. The screen shows a dark-themed AI operations dashboard — multiple card panels with status indicators (green and amber dots), line graphs showing activity metrics, and a task queue list. The UI is dark navy with blue accents. All text in the interface is intentionally blurred beyond readability. A mechanical keyboard is slightly out of focus in the foreground. A warm desk lamp provides ambient light from the right. The overall mood is: powerful, intelligent, running at scale. No readable text, no logos, no watermarks. 3:2 ratio.
```

**Photography notes:**
- Dark UI on screen + warm ambient light = high-contrast cinematic feel  
- The ultrawide monitor signals "serious operation" vs. casual laptop  
- Reference: Linear.app's dark dashboard screenshots

---

## BATCH 3 — Platform-Specific Images
**Use in:** Hero and ServiceExplanation for Tier 3 platform pages  
**Dimensions:** 1200×800px → **save to** `/public/images/us/services/`  
**Target file size:** 60–80KB  
**Style direction:** Match Batch 2 product photography style for consistency.

---

### B3-1 · WordPress Development
**Filename:** `hero-wordpress.webp`  
**Save to:** `/public/images/us/services/hero-wordpress.webp`

**MJ Prompt:**
```
product photography of MacBook Pro on a warm wood desk showing website admin dashboard interface, classic blog post editor with formatting toolbar and content area visible, clean and minimal interface design, light theme UI, soft morning window light casting gentle shadows, warm wooden desk, ceramic coffee mug steam rising on left, small potted plant background, shallow depth of field, writer/designer creative workspace, shot on Canon R5, 85mm, f/2.8, ISO 400, soft diffused morning light, premium editorial product photography, no logos visible, no WordPress branding, no recognizable CMS brand icons, no text readable on screen, no watermarks --ar 3:2 --style raw --q 2 --v 6.1
```

**DALL-E Prompt:**
```
A premium product photograph of a MacBook Pro on a warm wooden desk. The screen shows a generic website content management system — a clean post editor with a formatting toolbar at the top and a content writing area. The UI is light-themed and minimal. A ceramic coffee mug with steam is to the left. A small plant is in the soft background. Morning window light. No recognizable CMS branding — no WordPress logo, no specific brand icons. Text in the interface is blurred. The mood is: creative professional's workspace. No logos, no watermarks. 3:2 ratio.
```

---

### B3-2 · Webflow/Framer Development
**Filename:** `hero-webflow.webp`  
**Save to:** `/public/images/us/services/hero-webflow.webp`

**MJ Prompt:**
```
product photography of dual 27-inch monitors on a minimal white desk in bright modern creative studio, left screen shows visual website design canvas with component drag-and-drop grid, right screen shows rendered website preview, clean white minimal UI, component panel visible on left sidebar with shapes and elements, designer's hand barely visible at wireless keyboard, bright white studio lighting with soft fill, plants in background, concrete wall texture, modern creative agency workspace, shot on Phase One, 50mm, f/5.6, ISO 200, bright editorial style, no logos, no brand names on screen, no Webflow or Framer branding, no text readable, no watermarks --ar 3:2 --style raw --q 2 --v 6.1
```

**DALL-E Prompt:**
```
A premium product photograph of dual monitors on a minimal white desk in a bright, modern creative studio. The left screen shows a visual website design canvas — drag-and-drop style with a component sidebar and a design grid. The right screen shows the resulting website preview. The UI is clean and white. A designer's hands rest on a wireless keyboard. The background has plants and a concrete wall texture. Bright studio lighting, modern creative agency vibe. No Webflow or Framer branding visible. No readable text on any screen. No watermarks. 3:2 ratio.
```

---

### B3-3 · Shopify Development
**Filename:** `hero-shopify.webp`  
**Save to:** `/public/images/us/services/hero-shopify.webp`

**MJ Prompt:**
```
product photography of MacBook Air on a marble surface, screen showing beautiful modern ecommerce product page design, large hero product image, clean typography, add to cart button, product details panel, light and airy UI aesthetic, lifestyle product photography feel, white and soft gray color scheme, some dried flowers and packaging props around the laptop suggesting DTC brand workspace, soft window light, shallow depth of field, premium direct-to-consumer brand aesthetic, shot on Sony A7C, 50mm, f/2.8, ISO 320, soft diffused natural light, editorial ecommerce photography, no Shopify logo, no brand names visible, no readable text on screen, no watermarks --ar 3:2 --style raw --q 2 --v 6.1
```

**DALL-E Prompt:**
```
A premium product photograph of a MacBook Air on a marble surface. The screen shows a beautiful, minimal ecommerce product page — large product image on the left, clean typography, and an "add to cart" button area on the right. The overall feel is airy DTC brand aesthetic (think Allbirds or Glossier). Dried flowers and elegant packaging props are placed around the laptop. Soft window light. No Shopify logo, no brand names readable anywhere on screen. Blurred text throughout. The mood: premium direct-to-consumer ecommerce. No watermarks. 3:2 ratio.
```

---

### B3-4 · Enterprise Ecommerce (Magento/BigCommerce)
**Filename:** `hero-enterprise-ecommerce.webp`  
**Save to:** `/public/images/us/services/hero-enterprise-ecommerce.webp`

**MJ Prompt:**
```
product photography of large 32-inch 4K monitor on a standing desk in a professional corporate office, screen showing enterprise ecommerce backend admin dashboard, product catalog grid with many SKUs visible, order management table, analytics charts, dark navy sidebar navigation, clean B2B enterprise software UI, corporate environment with glass walls in background, city view through windows, warm overhead office lighting, professional business setting, shot on Canon R5, 35mm, f/8, ISO 400, balanced office lighting, editorial B2B technology photography, no logos, no brand names on screen, no text readable, no watermarks --ar 3:2 --style raw --q 2 --v 6.1
```

**DALL-E Prompt:**
```
A professional product photograph of a large 4K monitor on a corporate office standing desk. The screen shows an enterprise ecommerce admin panel — a product catalog grid with many thumbnails, an order management table, and analytics charts. The UI has a dark navy sidebar navigation. The background shows a corporate office with glass walls and a city skyline view through windows. Warm professional overhead lighting. The mood: serious B2B enterprise software, scale and reliability. No brand logos (no Magento, no BigCommerce symbols), no readable text on screen, no watermarks. 3:2 ratio.
```

---

## BATCH 4 — General Service Explanation Images (Rotation Pool)
**Use in:** ServiceExplanation sections across web design and general pages  
**Dimensions:** 1200×800px → **save to** `/public/images/us/services/`  
**Target file size:** 60–80KB  
**Style direction:** Human + work. Real people, real environment. Not posed stock photography — candid, collaborative, authentic. Reference: Basecamp's team photos.

---

### B4-1 · Web Design Process / Discovery Session
**Filename:** `service-web-design-process.webp`  
**Save to:** `/public/images/us/services/service-web-design-process.webp`

**MJ Prompt:**
```
candid documentary photography of two people reviewing website wireframes on a large monitor together in a bright modern agency office, one person pointing at screen while explaining, other person taking notes in notebook, both professionally but casually dressed, natural window light flooding in from left creating soft professional atmosphere, wooden desk with laptop and coffee cups, genuine collaborative conversation, not posed or stock photo looking, shot with Leica Q3, 28mm, f/2.8, ISO 800, natural office light, candid editorial style, no faces clearly identifiable, warm and welcoming atmosphere, no text or brand logos visible on screens, no watermarks --ar 3:2 --style raw --q 2 --v 6.1
```

**DALL-E Prompt:**
```
A candid documentary-style photograph of two people reviewing website wireframes on a large monitor in a bright, modern agency office. One person is pointing at the screen explaining something, the other is taking notes in a notebook. Both are dressed in casual professional attire. Natural light streams in from the left. There are coffee cups and a laptop on the wooden desk. The feel is genuine and collaborative — not staged stock photography. The faces are not clearly identifiable. No brand logos on screen, no readable text. No watermarks. 3:2 ratio.
```

---

### B4-2 · Before/After Website Redesign
**Filename:** `service-redesign.webp`  
**Save to:** `/public/images/us/services/service-redesign.webp`

**MJ Prompt:**
```
product photography concept of single large monitor showing split-screen comparison, left half shows outdated cluttered 2010s-style website with busy background, small text, too many buttons, low quality feel, right half shows modern clean redesigned version of same site with ample whitespace, bold typography, clear hierarchy, professional photography, dramatic contrast between old and new, vertical dividing line down center, monitor on minimal desk, soft studio lighting, no brand names visible on either design, no readable text, illustrating web design transformation, shot on Sony A7R V, 50mm, f/5.6, ISO 200, studio lighting, no watermarks --ar 3:2 --style raw --q 2 --v 6.1
```

**DALL-E Prompt:**
```
A product photograph of a monitor showing a split-screen before/after website comparison. The LEFT half shows an old, cluttered website design — busy patterned background, small fonts, poor hierarchy, dated early 2010s aesthetic. The RIGHT half shows a modern redesign of the same site — clean white background, bold typography, ample whitespace, professional product photography on the page, clear call-to-action button. A vertical line divides the two. The contrast should be dramatic and immediately obvious. The monitor sits on a minimal desk with studio lighting. No brand names or readable text. No watermarks. 3:2 ratio.
```

---

### B4-3 · Development Team Working
**Filename:** `service-team.webp`  
**Save to:** `/public/images/us/services/service-team.webp`

**MJ Prompt:**
```
candid documentary photography of a small team of 3-4 diverse web developers and designers sitting around a large table with laptops open, engaged in active working session, some typing, one person drawing on whiteboard in background, post-it notes on glass wall, bright modern open-plan tech office, natural daylight, casual professional dress, diverse group, genuine productive atmosphere, not a posed meeting photo, shot with Fujifilm X-T5, 23mm, f/2.8, ISO 640, available natural office light, warm editorial photography, no faces sharply identifiable, energy of collaboration and focused work, no text visible on screens, no watermarks --ar 3:2 --style raw --q 2 --v 6.1
```

**DALL-E Prompt:**
```
A candid documentary-style photograph of a small diverse team of 3-4 people at a large table in a modern open-plan tech office. They're actively working — some typing, one draws on a whiteboard visible behind them, sticky notes are on a glass wall. The mood is genuine, collaborative, and focused — not a staged corporate headshot. Natural daylight. Casual professional dress. Multiple ethnicities represented. Laptop screens are visible but text is blurred. The energy is: a real team solving real problems together. No watermarks. 3:2 ratio.
```

---

### B4-4 · Mobile Responsive Design Showcase
**Filename:** `service-mobile.webp`  
**Save to:** `/public/images/us/services/service-mobile.webp`

**MJ Prompt:**
```
premium product photography of a MacBook Pro, iPad Pro, and iPhone 15 Pro arranged in a triangular layout on a clean white desk, all three screens showing the same modern website design adapted to each screen size demonstrating responsive design, consistent color scheme across all devices, soft white studio lighting with gentle shadows, white marble desk surface, minimal styling — no props except the devices, ultra clean product photography style similar to Apple marketing campaigns, shot on Hasselblad X2D 100C, 90mm, f/8, ISO 64, studio softbox lighting, perfectly aligned devices, no text readable on screens, no brand logos on devices, no watermarks --ar 3:2 --style raw --q 2 --v 6.1
```

**DALL-E Prompt:**
```
A premium product photograph of three Apple devices on a white marble desk — a MacBook Pro, an iPad Pro, and an iPhone 15 Pro — arranged in a clean triangular composition. All three screens show the same modern website design adapted for each screen size, demonstrating responsive design. The same clean website color scheme appears on all three. Pure white studio lighting with soft shadows. No props — just the devices. Apple-product-launch photography style: clinical, perfect, aspirational. No readable text on any screen, no identifiable logos on devices. No watermarks. 3:2 ratio.
```

---

## POST-GENERATION PROCESSING

Once you have the raw PNG/JPEG from the AI tool, run this processing pipeline:

### Step 1 — Quality check (do manually)
- [ ] No text or logos visible
- [ ] No distorted limbs, hands, faces
- [ ] Aspect ratio correct (zoom/crop if needed)
- [ ] Lighting looks natural and professional

### Step 2 — Strip metadata and convert to WebP
```bash
# Install tools if needed
brew install imagemagick webp exiftool

# Strip metadata
exiftool -all= input.png -o clean.png

# Convert to WebP with quality 85
cwebp -q 85 clean.png -o output.webp

# Verify file size (target: 60-90KB)
ls -lh output.webp
```

### Step 3 — Resize to target dimensions
```bash
# Resize to 1200x800 maintaining aspect ratio
convert clean.png -resize 1200x800^ -gravity center -extent 1200x800 resized.png
cwebp -q 85 resized.png -o output.webp
```

### Step 4 — Save to correct path
```
hero-austin.webp       → /public/images/us/austin/
hero-miami.webp        → /public/images/us/miami/
hero-denver.webp       → /public/images/us/denver/
hero-nashville.webp    → /public/images/us/nashville/
hero-portland.webp     → /public/images/us/portland/
hero-charlotte.webp    → /public/images/us/charlotte/
hero-raleigh.webp      → /public/images/us/raleigh/
hero-tampa.webp        → /public/images/us/tampa/

hero-ai-chatbot.webp           → /public/images/us/services/
hero-ai-workflow.webp          → /public/images/us/services/
hero-ai-integration.webp       → /public/images/us/services/
hero-ai-agent-us.webp          → /public/images/us/services/

hero-wordpress.webp             → /public/images/us/services/
hero-webflow.webp               → /public/images/us/services/
hero-shopify.webp               → /public/images/us/services/
hero-enterprise-ecommerce.webp  → /public/images/us/services/

service-web-design-process.webp → /public/images/us/services/
service-redesign.webp           → /public/images/us/services/
service-team.webp               → /public/images/us/services/
service-mobile.webp             → /public/images/us/services/
```

---

## RECOMMENDED AI IMAGE TOOLS

| Tool | Best for | Quality | Cost |
|------|----------|---------|------|
| **Midjourney v6.1** | All photorealistic images (Batch 1, 2, 4) | ⭐⭐⭐⭐⭐ | ~$10/mo |
| **DALL-E 3** (ChatGPT Plus) | Product shots and illustration (Batch 3) | ⭐⭐⭐⭐ | $20/mo (ChatGPT) |
| **Adobe Firefly** | Anything with faces/people (Batch 4) | ⭐⭐⭐⭐ | Adobe CC subscription |
| **Ideogram 2.0** | The AI integration illustration (B2-3) | ⭐⭐⭐⭐ | Free tier available |

**Recommended order of generation:**
1. Batch 2 (AI service images) — needed immediately for the 3 pages just built
2. Batch 4 (general service pool) — needed for Tier 2 city pages
3. Batch 1 (city images) — needed for the 5 city AI pages next in build order
4. Batch 3 (platform images) — needed for Tier 3 platform pages (lower urgency)
