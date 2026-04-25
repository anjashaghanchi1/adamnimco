import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MessageCircle, ShoppingBag, Sparkles, ShieldCheck, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";
import { BUSINESS, telLink, waLink } from "@/lib/contact";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adam Nimco — Fresh Nimco & Snacks in Saddar Karachi" },
      {
        name: "description",
        content:
          "Premium quality nimco, bhail puri, papri & sweets — made fresh daily at our Saddar shop. Order on WhatsApp.",
      },
      { property: "og:image", content: hero },
    ],
  }),
  component: HomePage,
});

const trust = [
  { icon: Sparkles, title: "Fresh Daily", text: "Hand-prepared every morning" },
  { icon: ShieldCheck, title: "Hygienic", text: "Premium quality standards" },
  { icon: Heart, title: "Trusted Local", text: "A Saddar favourite" },
  { icon: Clock, title: "Quick Orders", text: "WhatsApp & call ready" },
];

function HomePage() {
  const specials = PRODUCTS.filter((p) => p.special);
  const popular = PRODUCTS.slice(0, 4);

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
        <div className="relative container mx-auto px-4 lg:px-6 py-20 md:py-32 lg:py-40">
          <div className="max-w-2xl text-white">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-bold mb-5 animate-pop-in">
              <Sparkles className="size-3.5" /> Fresh Daily • Saddar, Karachi
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05] text-balance animate-fade-up">
              Fresh Nimco & Snacks —
              <span className="block bg-gradient-to-r from-accent to-amber-300 bg-clip-text text-transparent">
                Taste You'll Love
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/85 max-w-xl animate-fade-up">
              Premium quality snacks — bhail puri, special nimco, papri & sweets — handcrafted
              daily at our Saddar shop. Order in seconds.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 animate-fade-up">
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

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
              <span className="flex items-center gap-1.5"><Sparkles className="size-4 text-accent" /> 100% Fresh</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="size-4 text-accent" /> Hygienic</span>
              <span className="flex items-center gap-1.5"><Heart className="size-4 text-accent" /> Local Favourite</span>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-primary text-primary-foreground py-3 overflow-hidden">
        <div className="flex gap-10 whitespace-nowrap animate-marquee font-semibold text-sm">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-10 shrink-0">
              <span>🔥 Today's Special: Bhail Puri</span>
              <span>•</span>
              <span>⭐ Premium Special Nimco</span>
              <span>•</span>
              <span>📞 Call to order</span>
              <span>•</span>
              <span>💬 WhatsApp anytime</span>
              <span>•</span>
              <span>✨ Made fresh daily</span>
              <span>•</span>
            </div>
          ))}
        </div>
      </div>

      {/* SPECIAL ITEMS */}
      <section className="container mx-auto px-4 lg:px-6 py-16 lg:py-24">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-primary font-bold text-sm uppercase tracking-wider">
              🔥 Most Loved
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mt-1">
              Our Special Items
            </h2>
            <p className="text-muted-foreground mt-1 max-w-md">
              Customer favourites — premium picks made fresh every day.
            </p>
          </div>
          <Link
            to="/special"
            className="hidden md:inline-flex text-sm font-semibold text-primary hover:underline"
          >
            View all →
          </Link>
        </div>

        {/* Mobile horizontal scroll, desktop grid */}
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

      {/* POPULAR PRODUCTS */}
      <section className="container mx-auto px-4 lg:px-6 py-16 lg:py-24">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Menu</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mt-1">
              Fresh Picks
            </h2>
          </div>
          <Link to="/menu" className="text-sm font-semibold text-primary hover:underline">
            See full menu →
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {popular.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="container mx-auto px-4 lg:px-6 pb-16">
        <div className="rounded-3xl bg-gradient-primary text-primary-foreground p-8 md:p-12 shadow-glow relative overflow-hidden">
          <div className="absolute -right-10 -top-10 size-48 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative grid md:grid-cols-[1fr_auto] items-center gap-6">
            <div>
              <h2 className="font-display text-2xl md:text-4xl font-extrabold">
                Hungry? Order in 30 seconds.
              </h2>
              <p className="mt-2 text-white/90 max-w-lg">
                Tap WhatsApp, choose your snack, we'll get it ready. Pickup or simple to arrange.
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button asChild size="lg" className="rounded-full bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 font-bold">
                <a href={waLink("Hi Adam Nimco, I'd like to order.")}>
                  <MessageCircle className="size-5" /> WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full bg-white text-foreground border-white hover:bg-white/90 font-bold">
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
