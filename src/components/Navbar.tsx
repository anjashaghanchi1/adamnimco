import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logoNew from "@/assets/logo-new.png";
import { BUSINESS, telLink, waLink } from "@/lib/contact";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/special", label: "Special Items" },
  { to: "/menu", label: "Menu" },
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
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-background/40 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
            <img
              src={logoNew}
              alt="Adam Nimco logo with NEW tag"
              width={140}
              height={48}
              className="h-10 lg:h-12 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary bg-primary/10" }}
                inactiveProps={{ className: "text-foreground/80 hover:text-primary hover:bg-muted" }}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Button asChild variant="outline" size="sm" className="rounded-full font-semibold">
              <a href={telLink(BUSINESS.phones[0])}>
                <Phone className="size-4" /> Call
              </a>
            </Button>
            <Button asChild size="sm" className="rounded-full font-semibold bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 shadow-soft">
              <a href={waLink("Hi Adam Nimco, I'd like to place an order.")}>
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </Button>
          </div>

          <button
            aria-label="Toggle menu"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted text-foreground"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4 animate-fade-up">
            <nav className="flex flex-col gap-1 pt-2">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
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
            <div className="flex gap-2 mt-3">
              <Button asChild variant="outline" className="flex-1 rounded-full">
                <a href={telLink(BUSINESS.phones[0])}>
                  <Phone className="size-4" /> Call
                </a>
              </Button>
              <Button asChild className="flex-1 rounded-full bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90">
                <a href={waLink("Hi Adam Nimco, I'd like to place an order.")}>
                  <MessageCircle className="size-4" /> WhatsApp
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
