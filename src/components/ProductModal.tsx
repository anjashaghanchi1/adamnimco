import { useMemo, useState } from "react";
import { Minus, Plus, MessageCircle, Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/products";
import { BUSINESS, telLink, waLink } from "@/lib/contact";

export function ProductModal({
  product,
  open,
  onOpenChange,
}: {
  product: Product;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [variantIdx, setVariantIdx] = useState(0);
  const [qty, setQty] = useState(1);

  const variant = product.variants[variantIdx];
  const total = useMemo(() => variant.price * qty, [variant, qty]);

  const message = `Hi Adam Nimco, I'd like to order:\n\n• ${product.name} — ${variant.label} × ${qty}\n• Total: Rs ${total}\n\nPlease confirm availability. Thank you!`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 gap-0 max-h-[92vh] overflow-y-auto sm:rounded-lg">
        <div className="grid md:grid-cols-2">
          <div className="aspect-[4/3] sm:aspect-square bg-muted overflow-hidden max-h-[28vh] md:max-h-none">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              width={800}
              height={800}
            />
          </div>
          <div className="p-4 md:p-6 flex flex-col">
            <DialogHeader className="text-left space-y-2">
              <div className="flex flex-wrap gap-1.5">
                {product.badges?.map((b) => (
                  <span key={b} className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-accent text-accent-foreground">
                    {b}
                  </span>
                ))}
              </div>
              <DialogTitle className="font-display text-2xl">{product.name}</DialogTitle>
              <DialogDescription className="text-sm">{product.description}</DialogDescription>
            </DialogHeader>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                Choose size
              </p>
              <div className="grid grid-cols-3 gap-2">
                {product.variants.map((v, i) => (
                  <button
                    key={v.label}
                    onClick={() => setVariantIdx(i)}
                    className={`rounded-xl border-2 px-3 py-2.5 text-center transition-all ${
                      i === variantIdx
                        ? "border-primary bg-primary/10 shadow-soft"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="font-bold text-sm">{v.label}</div>
                    <div className="text-xs text-muted-foreground">Rs {v.price}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Quantity
              </p>
              <div className="flex items-center gap-1 bg-muted rounded-full p-1">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="size-8 rounded-full bg-background grid place-items-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="size-4" />
                </button>
                <span className="w-8 text-center font-bold tabular-nums">{qty}</span>
                <button
                  onClick={() => setQty((q) => Math.min(99, q + 1))}
                  className="size-8 rounded-full bg-background grid place-items-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="size-4" />
                </button>
              </div>
            </div>

            <div className="mt-5 p-3 rounded-xl bg-gradient-warm border border-border flex items-baseline justify-between">
              <span className="text-sm font-medium">Total</span>
              <span className="font-display text-2xl font-extrabold text-primary">Rs {total}</span>
            </div>

            <div className="mt-4 flex gap-2">
              <Button
                asChild
                className="flex-1 rounded-full bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 font-semibold shadow-soft"
              >
                <a href={waLink(message)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" /> Order on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <a href={telLink(BUSINESS.phones[0])} aria-label="Call to order">
                  <Phone className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
