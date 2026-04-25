import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { BUSINESS, telLink, waLink } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="container mx-auto px-4 lg:px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <img src={logo} alt="Adam Nimco" width={140} height={48} className="h-12 w-auto object-contain" loading="lazy" />
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Fresh nimco, snacks & sweets — handcrafted daily at our Saddar shop.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
            <li><Link to="/special" className="text-muted-foreground hover:text-primary">Special Items</Link></li>
            <li><Link to="/menu" className="text-muted-foreground hover:text-primary">Menu</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {BUSINESS.phones.map((p) => (
              <li key={p}>
                <a href={telLink(p)} className="inline-flex items-center gap-2 hover:text-primary">
                  <Phone className="size-4" /> {p}
                </a>
              </li>
            ))}
            <li>
              <a href={waLink("Hi Adam Nimco!")} className="inline-flex items-center gap-2 hover:text-primary">
                <MessageCircle className="size-4" /> WhatsApp Order
              </a>
            </li>
            <li className="flex gap-2">
              <MapPin className="size-4 mt-0.5 shrink-0" />
              <span>{BUSINESS.address}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {BUSINESS.name}. Crafted with ❤️ in Karachi.
      </div>
    </footer>
  );
}
