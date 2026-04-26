## Adam Nimco — Full Catalog & Branding Update

### 1. Logo & branding
- Copy uploaded logo `user-uploads://WhatsApp_Image_2026-04-24_at_9.03.20_PM.jpeg` → `src/assets/adam-logo.png` (background-removed style is preserved since the source already has white bg; we'll use it as-is and place it on white/light surfaces so it looks clean).
- Generate a clean transparent PNG version using image generation for use over colored hero/dark backgrounds, plus a separate kettle-only mark already visible in the logo.
- Add `Since 1939` lockup beside the logo on:
  - Navbar (logo + small "Since 1939" tag)
  - Footer (logo + tagline)
  - Home hero (large "Adam Nimco" display heading with kettle icon and "Since 1939" badge)

### 2. Navbar
- Show full nav links inline on **all desktop/tablet sizes (md+)** — no hamburger toggle on big screens.
- Hamburger toggle remains for mobile (`<md`) only.
- Add new section links: Home, Bhail Puri, Special, Regular, Chips, Peanuts, Papri, Sweets, Contact (use a compact pill bar; on tablet collapse less-used items into a "More" dropdown if overflow).
- Add Facebook icon link → `https://www.facebook.com/share/1AyBJtcfdz/` (header + footer).

### 3. Phone numbers (sitewide)
- Update `src/lib/contact.ts` so `BUSINESS.phones = ["+923243187567", "+923341923235"]` and `whatsapp = "923243187567"`.
- Audit all components for any other numbers and replace — only these two are allowed anywhere on the site.
- Add Facebook URL to `BUSINESS.facebook`.

### 4. Product catalog rewrite (`src/lib/products.ts`)
Replace product data with 6 categories in this exact order:

1. **bhail-puri** — Bhail Puri Dry Chatni (250g Rs 350), Bhail Puri Liquid Chatni (250g Rs 300)
2. **special** — Punjabi Nimco, Khata Meetha Nimco, Shahi Nimco, Chopati Nimco, Punjabi Black Paper Nimco, Sweet Chewra (prices per user list)
3. **regular** — 18 items (Namkeen Chewra, Sweet Chewra, Namkeen/Sweet Para, Mung Dal, Dal Moth, Masala Chana Dal, Sew sizes ×4, Masala Sew, Masala Mattar, Masala Chana, Gathiya ×3, Murmura)
4. **chips** — Plain, Plain Masala, Crinkle, Crinkle Masala, Finger ×3, Hyderabadi, Top Pops ×2 (per user pricing & weights)
5. **peanuts** — Red, Salty, Masala, Besan Wali (200g Rs 240 each)
6. **papri** — Batasha, Zera, Coin, Coin Masala, Chat Papri
7. **sweets** — Gulab Jamun (250g Rs 240)

Each item has:
- `category` field matching slugs above
- `variants`: base size from list (e.g., 200g, 250g, 100g, 60g) **plus** scaled options 500g, 1kg where weight-based (linear scaling, rounded to nearest 10). Top Pops (60g) keeps 60g/120g/180g (it's a packet item).
- `image` generated via AI (one image per product, food-photo style on warm background).
- WhatsApp + size selector + qty +/- already wired through existing `ProductModal` — works automatically.

### 5. Routes
- Replace `/special` and `/menu` with category-based pages OR keep `/menu` as a tabbed page filtering by the 7 categories in order. Plan: keep single `/menu` page, replace 2-filter pills with 7 category pills in the required order; default to "All".
- Keep `/special` page (now backed by `category === "special"`).
- Home page sections updated to show: Bhail Puri highlight, Special items grid, "Browse by category" tile grid linking to filtered menu, Regular previews.
- Each product card image generated; use placeholder gradient cards if generation lags but generate real images for all 40+ items.

### 6. Image generation strategy
Generate one image per product (≈40 images). Use existing image gen tool with consistent prompt template ("top-down food photo of {item} on warm cream background, soft daylight, premium snack brand"). Reuse images across same-name duplicates.

### 7. Footer
- Add Facebook link, both phone numbers, WhatsApp, address (unchanged), and "Since 1939" tagline.

### Technical files touched
- `src/assets/adam-logo.png` (copied), generated transparent variant
- `src/lib/contact.ts` — phones, whatsapp, facebook
- `src/lib/products.ts` — full rewrite with 7 categories, ~45 products
- `src/components/Navbar.tsx` — desktop full nav, mobile-only toggle, Facebook icon, Since 1939 tag
- `src/components/Footer.tsx` — Facebook, both numbers, tagline
- `src/components/ProductCard.tsx` — keep, ensure overlay logo uses new asset
- `src/routes/index.tsx` — hero rebuilt with logo + Since 1939 + kettle, category showcase
- `src/routes/menu.tsx` — 7 category filter pills in required order
- `src/routes/special.tsx` — driven by `category === "special"`
- ~45 generated product images in `src/assets/products/`

### Out of scope
- No backend/DB changes
- No checkout — WhatsApp pre-filled message only (already working)
