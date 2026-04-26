import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { CATEGORIES, PRODUCTS, type CategoryKey } from "@/lib/products";

const VALID_CATS = [
  "all",
  "bhail-puri",
  "special",
  "regular",
  "chips",
  "peanuts",
  "papri",
  "sweets",
] as const;

type CatSearch = { cat: (typeof VALID_CATS)[number] };

export const Route = createFileRoute("/menu")({
  validateSearch: (search: Record<string, unknown>): CatSearch => {
    const cat = search.cat as string;
    return {
      cat: (VALID_CATS as readonly string[]).includes(cat)
        ? (cat as CatSearch["cat"])
        : "all",
    };
  },
  head: () => ({
    meta: [
      { title: "Menu — Adam Nimco | Fresh Nimco, Snacks, Chips & Sweets" },
      {
        name: "description",
        content:
          "Browse our full menu of bhail puri, special nimco, regular snacks, chips, peanuts, papri and sweets. Order on WhatsApp.",
      },
      { property: "og:title", content: "Menu — Adam Nimco" },
      {
        property: "og:description",
        content: "Full menu of fresh snacks & sweets — order on WhatsApp.",
      },
    ],
  }),
  component: MenuPage,
});

const filters: { key: "all" | CategoryKey; label: string; emoji: string }[] = [
  { key: "all", label: "All", emoji: "✨" },
  ...CATEGORIES,
];

function MenuPage() {
  const { cat } = Route.useSearch();
  const navigate = useNavigate({ from: "/menu" });

  const items =
    cat === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat);

  // Group by category when "all" is selected so user sees the required order
  const grouped = cat === "all"
    ? CATEGORIES.map((c) => ({
        ...c,
        products: PRODUCTS.filter((p) => p.category === c.key),
      })).filter((g) => g.products.length > 0)
    : null;

  return (
    <section className="container mx-auto px-4 lg:px-6 py-10 lg:py-14">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-primary font-bold text-sm uppercase tracking-wider">
          Our Menu
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-extrabold mt-2">
          Fresh, Crunchy &<span className="text-primary"> Delicious</span>
        </h1>
        <p className="mt-3 text-muted-foreground">
          Tap any item to choose size, set quantity and order on WhatsApp.
        </p>
      </div>

      <div className="mt-8 sticky top-16 lg:top-20 z-30 -mx-4 px-4 py-3 bg-background/85 backdrop-blur-md border-b border-border/60">
        <div className="flex justify-start lg:justify-center gap-2 overflow-x-auto scrollbar-hide">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() =>
                navigate({ search: { cat: f.key }, resetScroll: false })
              }
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
                cat === f.key
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-muted text-foreground hover:bg-muted/70"
              }`}
            >
              <span className="mr-1">{f.emoji}</span>
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {grouped ? (
        <div className="space-y-12 mt-10">
          {grouped.map((g) => (
            <div key={g.key} id={g.key}>
              <div className="flex items-end justify-between mb-5">
                <div>
                  <span className="text-primary font-bold text-xs uppercase tracking-wider">
                    {g.emoji} {g.label}
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-extrabold mt-1">
                    {g.label}
                  </h2>
                </div>
                <Link
                  to="/menu"
                  search={{ cat: g.key }}
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  View all →
                </Link>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {g.products.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {items.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </section>
  );
}
