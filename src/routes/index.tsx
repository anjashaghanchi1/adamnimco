import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MessageCircle, ShoppingBag, Sparkles, ShieldCheck, Clock, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS, CATEGORIES } from "@/lib/products";
import { BUSINESS, telLink, waLink } from "@/lib/contact";
import logo from "@/assets/adam-logo.png";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adam Nimco — Fresh Nimco & Snacks Since 1939 | Saddar Karachi" },
      {
        name: "description",
        content:
          "Premium quality nimco, bhail puri, chips, peanuts, papri & sweets — handcrafted fresh daily at our Saddar shop since 1939. Order on WhatsApp.",
      },
      { property: "og:image", content: hero },
    ],
  }),
  component: HomePage,
});

const trust = [
  { icon: Award, title: "Since 1939", text: "Three generations of taste" },
  { icon: Sparkles, title: "Fresh Daily", text: "Hand-prepared every morning" },
  { icon: ShieldCheck, title: "Hygienic", text: "Premium quality standards" },
  { icon: Clock, title: "Quick Orders", text: "WhatsApp & call ready" },
];

function HomePage() {
  const specials = PRODUCTS.filter((p) => p.special).slice(0, 6);
  const bhail = PRODUCTS.filter((p) => p.category === "bhail-puri");

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Bowl of fresh Pakistani nimco snack mix"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-6 py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-[auto_1fr] items-center gap-8 lg:gap-12">
            <div className="flex justify-center lg:justify-start animate-pop-in">
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl ring-1 ring-black/5">
                <img
                  src={logo}
                  alt="Adam Nimco logo since 1939"
                  width={320}
                  height={420}
                  className="h-48 md:h-64 lg:h-72 w-auto object-contain"
                />
              </div>
            </div>
            <div className="text-white text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-bold mb-4 animate-pop-in">
                <Award className="size-3.5" /> SINCE 1939 • SADDAR, KARACHI
              </span>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-balance animate-fade-up">
                Adam Nimco
                <span className="block bg-gradient-to-r from-accent to-amber-300 bg-clip-text text-transparent">
                  Fresh Snacks Daily
                </span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-white/90 max-w-xl mx-auto lg:mx-0 animate-fade-up">
                Three generations of premium nimco, bhail puri, chips, peanuts & sweets — hand
                made every morning at our Saddar shop.
              </p>
              <div className="mt-7 flex flex-wrap gap-3 justify-center lg:justify-start animate-fade-up">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 font-bold shadow-glow"
                >
                  <a href={waLink("Hi Adam Nimco, I'd like to place an order.")}>
                    <ShoppingBag className="size-5" /> Order Now
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full bg-white/10 border-white/40 text-white hover:bg-white hover:text-foreground font-bold backdrop-blur"
                >
                  <a href={telLink(BUSINESS.phones[0])}>
                    <Phone className="size-5" /> Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-primary text-primary-foreground py-3 overflow-hidden">
        <div className="flex gap-10 whitespace-nowrap animate-marquee font-semibold text-sm">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-10 shrink-0">
              <span>🏆 Trusted Since 1939</span>
              <span>•</span>
              <span>🔥 Bhail Puri Special</span>
              <span>•</span>
              <span>⭐ Shahi Nimco</span>
              <span>•</span>
              <span>🥔 Fresh Chips Daily</span>
              <span>•</span>
              <span>💬 WhatsApp anytime</span>
              <span>•</span>
            </div>
          ))}
        </div>
      </div>

      {/* BHAIL PURI */}
      <section className="container mx-auto px-4 lg:px-6 py-14 lg:py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-primary font-bold text-sm uppercase tracking-wider">
              🥗 Karachi Favourite
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mt-1">
              Our Famous Bhail Puri
            </h2>
            <p className="text-muted-foreground mt-1 max-w-md">
              Dry or liquid chutney — choose your style.
            </p>
          </div>
          <Link
            to="/menu"
            search={{ cat: "bhail-puri" }}
            className="hidden md:inline-flex text-sm font-semibold text-primary hover:underline"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {bhail.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* SPECIAL ITEMS */}
      <section className="bg-gradient-warm border-y border-border">
        <div className="container mx-auto px-4 lg:px-6 py-14 lg:py-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-primary font-bold text-sm uppercase tracking-wider">
                🔥 Most Loved
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold mt-1">
                Special Items
              </h2>
            </div>
            <Link
              to="/special"
              className="hidden md:inline-flex text-sm font-semibold text-primary hover:underline"
            >
              View all →
            </Link>
          </div>

          <div className="md:hidden flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory">
            {specials.map((p) => (
              <div key={p.slug} className="snap-start w-[78%] shrink-0">
                <ProductCard product={p} featured />
              </div>
            ))}
          </div>
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
            {specials.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section className="container mx-auto px-4 lg:px-6 py-14 lg:py-20">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-primary font-bold text-sm uppercase tracking-wider">
            Browse Menu
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mt-1">
            Shop by Category
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {CATEGORIES.map((c) => {
            const count = PRODUCTS.filter((p) => p.category === c.key).length;
            return (
              <Link
                key={c.key}
                to="/menu"
                search={{ cat: c.key }}
                className="group rounded-2xl bg-card border border-border p-5 text-center shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all"
              >
                <div className="text-4xl mb-2">{c.emoji}</div>
                <h3 className="font-bold">{c.label}</h3>
                <p className="text-xs text-muted-foreground mt-1">{count} items</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-gradient-warm border-y border-border">
        <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-16">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-center mb-8">
            Why <span className="text-primary">Adam Nimco</span>?
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {trust.map((t) => (
              <div
                key={t.title}
                className="bg-card rounded-2xl p-5 text-center shadow-soft border border-border hover:shadow-card hover:-translate-y-1 transition-all"
              >
                <div className="size-12 mx-auto rounded-full bg-gradient-primary text-primary-foreground grid place-items-center mb-3">
                  <t.icon className="size-6" />
                </div>
                <h3 className="font-bold">{t.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="container mx-auto px-4 lg:px-6 py-14">
        <div className="rounded-3xl bg-gradient-primary text-primary-foreground p-8 md:p-12 shadow-glow relative overflow-hidden">
          <div className="absolute -right-10 -top-10 size-48 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative grid md:grid-cols-[1fr_auto] items-center gap-6">
            <div>
              <h2 className="font-display text-2xl md:text-4xl font-extrabold">
                Hungry? Order in 30 seconds.
              </h2>
              <p className="mt-2 text-white/90 max-w-lg">
                Tap WhatsApp, choose your snack, we'll get it ready.
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 font-bold"
              >
                <a href={waLink("Hi Adam Nimco, I'd like to order.")}>
                  <MessageCircle className="size-5" /> WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full bg-white text-foreground border-white hover:bg-white/90 font-bold"
              >
                <a href={telLink(BUSINESS.phones[0])}>
                  <Phone className="size-5" /> Call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
