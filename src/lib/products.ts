import bhailPuri from "@/assets/bhail-puri.jpg";
import nimco from "@/assets/nimco.jpg";
import specialNimco from "@/assets/special-nimco.jpg";
import papri from "@/assets/papri.jpg";
import peanut from "@/assets/peanut.jpg";
import chips from "@/assets/chips.jpg";
import sweets from "@/assets/sweets.jpg";

export type Variant = { label: "200g" | "500g" | "1kg"; price: number };

export type Product = {
  slug: string;
  name: string;
  short: string;
  description: string;
  image: string;
  variants: Variant[];
  badges?: string[];
  category: "snacks" | "sweets";
  special?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    slug: "bhail-puri",
    name: "Bhail Puri",
    short: "Tangy, crunchy chaat classic",
    description:
      "Our signature Bhail Puri — puffed rice tossed with crispy sev, tangy tamarind chutney, fresh onions and tomatoes. Made fresh daily.",
    image: bhailPuri,
    variants: [
      { label: "200g", price: 220 },
      { label: "500g", price: 500 },
      { label: "1kg", price: 950 },
    ],
    badges: ["🔥 Special", "⭐ Popular"],
    category: "snacks",
    special: true,
  },
  {
    slug: "special-nimco",
    name: "Special Nimco",
    short: "Premium mix with cashews & raisins",
    description:
      "A premium blend of crispy sev, roasted cashews, almonds, raisins and aromatic spices. Our most loved special.",
    image: specialNimco,
    variants: [
      { label: "200g", price: 320 },
      { label: "500g", price: 750 },
      { label: "1kg", price: 1400 },
    ],
    badges: ["🔥 Special"],
    category: "snacks",
    special: true,
  },
  {
    slug: "nimco",
    name: "Classic Nimco",
    short: "The original spicy snack mix",
    description:
      "Crunchy, golden, perfectly spiced — our daily-fresh classic nimco blend that started it all.",
    image: nimco,
    variants: [
      { label: "200g", price: 180 },
      { label: "500g", price: 420 },
      { label: "1kg", price: 800 },
    ],
    badges: ["⭐ Popular"],
    category: "snacks",
  },
  {
    slug: "papri",
    name: "Papri",
    short: "Crispy golden flatbread crackers",
    description: "Light, flaky and crisp papri — perfect for chaat or to enjoy on its own.",
    image: papri,
    variants: [
      { label: "200g", price: 160 },
      { label: "500g", price: 380 },
      { label: "1kg", price: 720 },
    ],
    category: "snacks",
  },
  {
    slug: "peanut",
    name: "Roasted Peanut",
    short: "Salted, roasted to perfection",
    description: "Premium roasted and lightly salted peanuts — your classic protein-rich snack.",
    image: peanut,
    variants: [
      { label: "200g", price: 200 },
      { label: "500g", price: 460 },
      { label: "1kg", price: 880 },
    ],
    category: "snacks",
  },
  {
    slug: "chips",
    name: "Spicy Chips",
    short: "Hand-cut, masala dusted",
    description: "Crispy hand-cut chips tossed in our signature red chili masala.",
    image: chips,
    variants: [
      { label: "200g", price: 180 },
      { label: "500g", price: 420 },
      { label: "1kg", price: 800 },
    ],
    category: "snacks",
  },
  {
    slug: "sweets",
    name: "Mithai (Sweets)",
    short: "Assorted traditional sweets",
    description:
      "Handpicked assortment of fresh traditional Pakistani mithai — perfect for gifting or treating yourself.",
    image: sweets,
    variants: [
      { label: "200g", price: 350 },
      { label: "500g", price: 820 },
      { label: "1kg", price: 1550 },
    ],
    badges: ["⭐ Popular"],
    category: "sweets",
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
