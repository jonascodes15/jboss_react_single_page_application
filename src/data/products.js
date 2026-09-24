// ─────────────────────────────────────────────────────────────────
// JBOSS FURNITURES — Product Catalog
// Replace `image` URLs with your actual hosted workshop photo URLs.
// ─────────────────────────────────────────────────────────────────

export const PRODUCTS = [
  {
    id: "jb-001",
    name: "The Mainland King",
    tagline: "Heavy frame. Heavier comfort.",
    category: "Sofa",
    image: "https://i.ibb.co/1YhJ6GHv/e07bb66b-8950-42c7-87c6-058034627268.jpg",
    specs: {
      dimensions: "220cm × 95cm × 85cm (L×W×H)",
      material: "Solid Iroko wood frame, High-density foam, Woven fabric",
      finish: "Dark walnut stain",
      weight: "Approx. 68kg",
    },
    configurations: [
      { label: "3-Seater", multiplier: 1.0 },
      { label: "L-Shape (Left)", multiplier: 1.55 },
      { label: "L-Shape (Right)", multiplier: 1.55 },
      { label: "5-Seater Set", multiplier: 1.9 },
    ],
    fabrics: [
      { label: "Standard Fabric", surcharge: 0 },
      { label: "Premium Velvet", surcharge: 25000 },
      { label: "Bonded Leather", surcharge: 45000 },
      { label: "Full Genuine Leather", surcharge: 90000 },
    ],
    basePrice: 370000,
    leadTime: "10–14 days",
    badge: "BESTSELLER",
    featured: true,
  },
  {
    id: "jb-002",
    name: "The Agege Classic",
    tagline: "Built for the living room that works hard.",
    category: "Sofa",
    image: "https://i.ibb.co/mCd7NRb6/79692c82-45bb-4391-bfcc-ebe3627b06d9.jpg",
    specs: {
      dimensions: "220cm × 95cm × 85cm (L×W×H)",
      material: "Hardwood frame, Medium-density foam, Chenille fabric",
      finish: "Natural wood",
      weight: "Approx. 55kg",
    },
    configurations: [
      { label: "2-Seater", multiplier: 0.75 },
      { label: "3-Seater", multiplier: 1.0 },
      { label: "3+1 Set", multiplier: 1.4 },
      { label: "3+2 Set", multiplier: 1.7 },
    ],
    fabrics: [
      { label: "Standard Fabric", surcharge: 0 },
      { label: "Premium Velvet", surcharge: 20000 },
      { label: "Bonded Leather", surcharge: 40000 },
      { label: "Full Genuine Leather", surcharge: 80000 },
    ],
    basePrice: 418000,
    leadTime: "7–10 days",
    badge: null,
    featured: true,
  },
  {
    id: "jb-003",
    name: "The Office Chair No. 1",
    tagline: "Where business gets done in comfort.",
    category: "Chair",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80",
    specs: {
      dimensions: "65cm × 70cm × 100–115cm (L×W×H)",
      material: "Steel base, High-density foam, PU leather upholstery",
      finish: "Matte black powder coat",
      weight: "Approx. 18kg",
    },
    configurations: [
      { label: "Fixed Height", multiplier: 1.0 },
      { label: "Adjustable Height", multiplier: 1.15 },
      { label: "Executive (Highback)", multiplier: 1.3 },
    ],
    fabrics: [
      { label: "Standard PU Leather", surcharge: 0 },
      { label: "Mesh Back", surcharge: 10000 },
      { label: "Full Genuine Leather", surcharge: 35000 },
    ],
    basePrice: 65000,
    leadTime: "5–7 days",
    badge: "NEW",
    featured: false,
  },
  {
    id: "jb-004",
    name: "The Alaba Royale",
    tagline: "Built for the living room that works hard.",
    category: "Sofa",
    image: "https://i.ibb.co/gMCPbnHH/db09913a-5dbe-42f8-8ccc-8d6f1ae0e853.jpg",
    specs: {
      dimensions: "220cm × 95cm × 85cm (L×W×H)",
      material: "Hardwood frame, Medium-density foam, Chenille fabric",
      finish: "Natural wood",
      weight: "Approx. 55kg",
    },
    configurations: [
      { label: "2-Seater", multiplier: 0.75 },
      { label: "3-Seater", multiplier: 1.0 },
      { label: "3+1 Set", multiplier: 1.4 },
      { label: "3+2 Set", multiplier: 1.7 },
    ],
    fabrics: [
      { label: "Standard Fabric", surcharge: 0 },
      { label: "Premium Velvet", surcharge: 20000 },
      { label: "Bonded Leather", surcharge: 40000 },
      { label: "Full Genuine Leather", surcharge: 80000 },
    ],
    basePrice: 430000,
    leadTime: "7–10 days",
    badge: null,
    featured: true,
  },
  {
    id: "jb-005",
    name: "The Victoria Island Bed Frame",
    tagline: "Sleep like the deal just closed.",
    category: "Bed Frame",
    image: "https://i.ibb.co/whJvQnxw/IMG-2065.jpg",
    specs: {
      dimensions: "180cm × 200cm × 120cm (W×L×H headboard)",
      material: "Iroko wood frame, upholstered headboard, centre-support legs",
      finish: "Dark mahogany or natural teak",
      weight: "Approx. 90kg",
    },
    configurations: [
      { label: "6×6 (Queen)", multiplier: 1.0 },
      { label: "6×7 (King)", multiplier: 1.2 },
      { label: "With Storage Drawers", multiplier: 1.45 },
    ],
    fabrics: [
      { label: "Plain Wood Headboard", surcharge: 0 },
      { label: "Padded Fabric Headboard", surcharge: 20000 },
      { label: "Padded Velvet Headboard", surcharge: 38000 },
      { label: "Tufted Leather Headboard", surcharge: 60000 },
    ],
    basePrice: 380000,
    leadTime: "12–16 days",
    badge: null,
    featured: true,
  },
  {
    id: "jb-006",
    name: "The Vola Classic",
    tagline: "Built for the living room that works hard.",
    category: "Sofa",
    image: "https://i.ibb.co/FqYPhRyv/IMG-2066.jpg",
    specs: {
      dimensions: "220cm × 95cm × 85cm (L×W×H)",
      material: "Hardwood frame, Medium-density foam, Chenille fabric",
      finish: "Natural wood",
      weight: "Approx. 55kg",
    },
    configurations: [
      { label: "2-Seater", multiplier: 0.75 },
      { label: "3-Seater", multiplier: 1.0 },
      { label: "3+1 Set", multiplier: 1.4 },
      { label: "3+2 Set", multiplier: 1.7 },
    ],
    fabrics: [
      { label: "Standard Fabric", surcharge: 0 },
      { label: "Premium Velvet", surcharge: 20000 },
      { label: "Bonded Leather", surcharge: 40000 },
      { label: "Full Genuine Leather", surcharge: 80000 },
    ],
    basePrice: 410000,
    leadTime: "7–10 days",
    badge: null,
    featured: true,
  },
  // {
  //   id: "jb-006",
  //   name: "The Corner Hustle Desk",
  //   tagline: "Built for builders. No excuses.",
  //   category: "Office",
  //   image: "https://i.ibb.co/1YhJ6GHv/e07bb66b-8950-42c7-87c6-058034627268.jpg",
  //   specs: {
  //     dimensions: "140cm × 65cm × 76cm (L×W×H)",
  //     material: "MDF top with hardwood edge banding, steel legs",
  //     finish: "Walnut veneer or matte white",
  //     weight: "Approx. 35kg",
  //   },
  //   configurations: [
  //     { label: "Single Desk", multiplier: 1.0 },
  //     { label: "L-Shape Corner Desk", multiplier: 1.5 },
  //     { label: "With Shelving Unit", multiplier: 1.7 },
  //   ],
  //   fabrics: [
  //     { label: "Standard MDF Top", surcharge: 0 },
  //     { label: "Solid Wood Top", surcharge: 25000 },
  //     { label: "Glass Top Insert", surcharge: 18000 },
  //   ],
  //   basePrice: 80000,
  //   leadTime: "7–10 days",
  //   badge: "CUSTOM",
  //   featured: false,
  // },
];

// ─────────────────────────────────────────────────────────────────
// PRICE CALCULATOR LOGIC
//
// Formula:
//   estimatedPrice = (basePrice × configMultiplier) + fabricSurcharge
// ─────────────────────────────────────────────────────────────────
export function calculatePrice(product, configIndex, fabricIndex) {
  const config = product.configurations[configIndex];
  const fabric = product.fabrics[fabricIndex];
  const raw = product.basePrice * config.multiplier + fabric.surcharge;
  return Math.round(raw / 500) * 500;
}

export function formatNaira(amount) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

// WhatsApp number — international format, no + sign
export const WHATSAPP_NUMBER = "2349071329638";
