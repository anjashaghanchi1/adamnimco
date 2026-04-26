import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Menu, X, Facebook } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/adam-logo.png";
import { BUSINESS, telLink, waLink } from "@/lib/contact";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu", search: { cat: "all" as const } },
  { to: "/menu", label: "Bhail Puri", search: { cat: "bhail-puri" as const } },
  { to: "/special", label: "Special" },
  { to: "/menu", label: "Regular", search: { cat: "regular" as const } },
  { to: "/menu", label: "Chips", search: { cat: "chips" as const } },
  { to: "/menu", label: "Peanuts", search: { cat: "peanuts" as const } },
  { to: "/menu", label: "Papri", search: { cat: "papri" as const } },
  { to: "/menu", label: "Sweets", search: { cat: "sweets" as const } },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-3 lg:px-6">
        <div className="flex items-center justify-between gap-3 h-16 lg:h-20">
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0"
            onClick={() => setOpen(false)}
          >
            <img
              src={logo}
              alt="Adam Nimco logo"
              width={56}
              height={72}
              className="h-12 lg:h-14 w-auto object-contain"
            />
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-base lg:text-lg font-extrabold text-primary">
                Adam Nimco
              </span>
              <span className="text-[10px] lg:text-xs font-semibold tracking-widest text-accent-foreground/70">
                SINCE 1939
              </span>
            </span>
          </Link>

          {/* Desktop nav — visible md+ */}
          <nav className="hidden md:flex items-center gap-0.5 flex-1 justify-center flex-wrap">
            {links.map((l, i) => (
              <Link
                key={`${l.to}-${l.label}-${i}`}
                to={l.to}
                {...(("search" in l && l.search) ? { search: l.search } : {})}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary bg-primary/10" }}
                inactiveProps={{
                  className: "text-foreground/80 hover:text-primary hover:bg-muted",
                }}
                className="px-2.5 lg:px-3 py-1.5 rounded-full text-[13px] lg:text-sm font-medium transition-colors whitespace-nowrap"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <a
              href={BUSINESS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="size-9 rounded-full grid place-items-center bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Facebook className="size-4" />
            </a>
            <Button
              asChild
              size="sm"
              className="rounded-full font-semibold bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 shadow-soft"
            >
              <a href={waLink("Hi Adam Nimco, I'd like to place an order.")}>
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted text-foreground"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="md:hidden pb-4 animate-fade-up">
            <nav className="flex flex-col gap-1 pt-2">
              {links.map((l, i) => (
                <Link
                  key={`${l.to}-${l.label}-${i}`}
                  to={l.to}
                  {...(("search" in l && l.search) ? { search: l.search } : {})}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-primary bg-primary/10" }}
                  inactiveProps={{ className: "text-foreground/85 hover:bg-muted" }}
                  className="px-4 py-3 rounded-lg text-base font-medium"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="grid grid-cols-3 gap-2 mt-3">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="rounded-full"
              >
                <a href={telLink(BUSINESS.phones[0])}>
                  <Phone className="size-4" /> Call
                </a>
              </Button>
              <Button
                asChild
                size="sm"
                className="rounded-full bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90"
              >
                <a href={waLink("Hi Adam Nimco, I'd like to place an order.")}>
                  <MessageCircle className="size-4" /> WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="rounded-full">
                <a
                  href={BUSINESS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="size-4" /> Facebook
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
