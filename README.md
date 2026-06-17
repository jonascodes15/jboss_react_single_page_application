# Jboss Furnitures — Website SPA


A production-ready React single-page application built for the Jboss Furnitures Instagram bio link.
Dark brutalist/industrial aesthetic. WhatsApp-first ordering. Price calculator. Zero fluff.

Built by [Jonas Webworks](https://jonasweb.works)

---

## Quick Setup (5 minutes)

### Prerequisites
- [Node.js](https://nodejs.org/) v16 or higher — check with `node -v`
- npm (comes with Node)

### Install & Run

```bash
# 1. Open the project folder in terminal
cd jboss-furnitures

# 2. Install dependencies
npm install

# 3. Start development server
npm start
```

The site opens at **http://localhost:3000** automatically.

---

## How to Replace All Placeholder Images with Real Photos

There are **two places** where images live. You need to update both.

---

### Place 1 — Hero Carousel Background (5 images)

**File:** `src/components/HomePage.jsx`

Open the file and find this block near the top (around line 5):

```js
const CAROUSEL_IMAGES = [
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400&q=85",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1400&q=85",
  "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=1400&q=85",
  "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1400&q=85",
  "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1400&q=85",
];
```

Replace each URL string with your own hosted photo URL. Example:

```js
const CAROUSEL_IMAGES = [
  "https://i.ibb.co/your-sofa-photo.jpg",
  "https://i.ibb.co/your-bed-photo.jpg",
  "https://i.ibb.co/your-chair-photo.jpg",
  "https://i.ibb.co/your-office-photo.jpg",
  "https://i.ibb.co/your-workshop-photo.jpg",
];
```

These images appear as the **slow-fading background** behind the "RAW WOOD. PURE COMFORT." headline. Use your best wide/landscape workshop shots here — they look best at a wide aspect ratio.

---

### Place 2 — Product Catalog & Featured Section (6 images, one per product)

**File:** `src/data/products.js`

Each product object has an `image` field. Find and replace all 6:

```js
// Current placeholders — replace each one:
{ id: "jb-001", name: "The Mainland King",          image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80", ... }
{ id: "jb-002", name: "The Agege Classic",           image: "https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=800&q=80", ... }
{ id: "jb-003", name: "The Office Chair No. 1",      image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80", ... }
{ id: "jb-004", name: "The Surulere Lounger",        image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80", ... }
{ id: "jb-005", name: "The Victoria Island Bed Frame", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80", ... }
{ id: "jb-006", name: "The Corner Hustle Desk",      image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80", ... }
```

These same images are used in both the **Catalog page** and the **Featured Products** section on the home page. Changing them here updates both places automatically.

---

### How to Host Your Photos (Free Options)

You need a public URL for each photo. Here are the easiest free options:

**Option A — imgbb.com (recommended, simplest)**
1. Go to [imgbb.com](https://imgbb.com)
2. Click "Start uploading" — no account needed
3. Upload your photo
4. After upload, click the image → copy the **"Direct link"** (ends in `.jpg` or `.png`)
5. Paste that URL into the `image:` field

**Option B — Cloudinary (best for performance)**
1. Create a free account at [cloudinary.com](https://cloudinary.com)
2. Upload your photo to the Media Library
3. Click the photo → copy the URL shown
4. Paste into the `image:` field

**Option C — Put photos directly in the project**
1. Create a folder: `public/images/`
2. Copy your photo files there (e.g. `sofa1.jpg`)
3. Set the image field as: `"/images/sofa1.jpg"`
4. No external hosting needed — works locally and after deploy

---

### Tips for Best Results

- **Carousel images** — use landscape/wide photos (wider than tall). Workshop shots with the full piece in frame work great.
- **Product card images** — any orientation works but 4:3 ratio looks cleanest in the grid.
- **File size** — keep each photo under 500KB if possible. Use [squoosh.app](https://squoosh.app) to compress without losing quality.
- **Phone photos are fine** — the site is designed around authentic workshop shots. No studio needed.

---

##  Other Things to Update Before Going Live

### WhatsApp Number
**File:** `src/data/products.js` — last line:

```js
export const WHATSAPP_NUMBER = "2349071329638";
```

Format: country code + number, no `+`, no spaces. Already set to Jboss's number.

Also update the hardcoded number in `src/components/HomePage.jsx` (the WhatsApp button in the hero) — search for `2349071329638` and confirm it matches.

### Instagram Handle
**File:** `src/components/ContactPage.jsx` — find:

```js
{ platform: "Instagram", handle: "@jboss.furnitures", url: "https://instagram.com/jboss.furnitures" }
```

Update `handle` and `url` to the real Instagram username.

### Jonas Webworks Credit Link
**File:** `src/components/BuiltBy.jsx` — the `href` already points to `https://jonasweb.works`. No change needed unless the URL changes.

---

##  Build & Deploy

```bash
npm run build
```

Creates a `build/` folder. Deploy it to:

**Netlify Drop (easiest — free)**
1. Run `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `build/` folder onto the page
4. Copy the live URL → paste into Instagram bio 

**Vercel**
```bash
npm install -g vercel
vercel --prod
```

---

##  Full File Map

```
jboss-furnitures/
├── public/
│   └── index.html              ← Google Fonts loaded here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          ← Sticky nav, responsive hamburger, JB SVG logo
│   │   ├── HomePage.jsx        ← Hero with carousel background + all home sections
│   │   ├── HeroCarousel.jsx    ← Standalone carousel (not currently used — backup)
│   │   ├── FeaturedProducts.jsx← 4-card featured section below hero
│   │   ├── CatalogPage.jsx     ← Full product grid with category filter
│   │   ├── PriceCalculator.jsx ← Modal: config × fabric → live price → WhatsApp
│   │   ├── AboutPage.jsx       ← Brand story, process, values
│   │   ├── ContactPage.jsx     ← WhatsApp CTAs, quick templates, social links
│   │   ├── Footer.jsx          ← Bottom navigation + brand tag
│   │   ├── BuiltBy.jsx         ← Jonas Webworks credit below footer
│   │   └── FloatingWhatsApp.jsx← Fixed bottom-right WhatsApp bubble
│   ├── data/
│   │   └── products.js         ← ALL product data, pricing logic, WhatsApp number
│   ├── App.jsx                 ← SPA router (activeTab state)
│   ├── index.js                ← React entry point
│   └── index.css               ← Global styles, brutalist textures, animations
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## How to Add a New Product

In `src/data/products.js`, add a new object to the `PRODUCTS` array:

```js
{
  id: "jb-007",             // unique ID, increment from last
  name: "The New Piece",
  tagline: "A short punchy line.",
  category: "Sofa",         // Sofa | Chair | Bed Frame | Office
  image: "YOUR_IMAGE_URL",  // hosted URL or /images/filename.jpg
  specs: {
    dimensions: "200cm × 90cm × 85cm",
    material: "Hardwood frame, high-density foam",
    finish: "Walnut",
    weight: "60kg",
  },
  configurations: [
    { label: "3-Seater", multiplier: 1.0 },
    { label: "L-Shape",  multiplier: 1.5 },
  ],
  fabrics: [
    { label: "Standard Fabric", surcharge: 0 },
    { label: "Velvet",          surcharge: 20000 },
  ],
  basePrice: 150000,        // Naira, no commas
  leadTime: "10–14 days",
  badge: null,              // "NEW" | "BESTSELLER" | "CUSTOM" | null
  featured: false,          // set true to show in Featured section (max 4)
}
```

### Price formula
```
Final Price = (basePrice × configMultiplier) + fabricSurcharge
```
Rounded to nearest ₦500. Logic lives in `src/data/products.js` → `calculatePrice()`.

---

##  Design Tokens

| Token | Hex | Used for |
|-------|-----|----------|
| Deep black | `#111111` | Page background |
| Dark charcoal | `#1a1a1a` | Cards, panels |
| Rust orange | `#C0572A` | Brand accent, CTAs |
| Warm amber | `#D4892A` | SVG icons |
| Warm cream | `#E8DCC8` | Primary text |
| WhatsApp green | `#25D366` | Order buttons |
| Bebas Neue | — | All headlines |
| Space Mono | — | Labels, nav, specs |
| Inter | — | Body paragraphs |

---

Built with ❤️ for Jboss Furnitures — Lagos, Nigeria 🇳🇬
Designed & developed by [Jonas Webworks](https://jonasweb.works)