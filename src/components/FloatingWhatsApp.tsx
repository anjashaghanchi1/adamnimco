import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/contact";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hi Adam Nimco, I'd like to place an order.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-5 right-5 z-40 size-14 rounded-full bg-whatsapp text-whatsapp-foreground grid place-items-center shadow-glow hover:scale-110 transition-transform animate-float"
    >
      <MessageCircle className="size-7" />
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-30" />
    </a>
  );
}
