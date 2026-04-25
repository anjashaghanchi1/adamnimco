import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Adam Nimco | Fresh Nimco, Snacks & Sweets" },
      { name: "description", content: "Browse our full menu of fresh nimco, bhail puri, papri, peanuts, chips and traditional sweets." },
      { property: "og:title", content: "Menu — Adam Nimco" },
      { property: "og:description", content: "Browse our full menu of fresh snacks & sweets." },
    ],
  }),
  component: MenuPage,
});

const filters = [
  { key: "all", label: "All" },
  { key: "snacks", label: "Snacks" },
  { key: "sweets", label: "Sweets" },
] as const;

function MenuPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]["key"]>("all");
  const items = PRODUCTS.filter((p) => filter === "all" || p.category === filter);

  return (
    <section className="container mx-auto px-4 lg:px-6 py-12 lg:py-16">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-primary font-bold text-sm uppercase tracking-wider">Our Menu</span>
        <h1 className="font-display text-4xl md:text-5xl font-extrabold mt-2">
          Fresh, Crunchy &<span className="text-primary"> Delicious</span>
        </h1>
        <p className="mt-3 text-muted-foreground">
          Tap any item to choose size, set quantity and order on WhatsApp.
        </p>
      </div>

      <div className="mt-8 flex justify-center gap-2 flex-wrap">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              filter === f.key
                ? "bg-primary text-primary-foreground shadow-soft"
                : "bg-muted text-foreground hover:bg-muted/70"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}
