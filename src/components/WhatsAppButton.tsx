import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5491139451919?text=Hola!%20Quiero%20info%20sobre%20Woden%20Fitness%20Club"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-40 size-14 rounded-full bg-gradient-red grid place-items-center shadow-red-glow animate-pulse-red hover:scale-110 transition-transform"
    >
      <MessageCircle className="size-7 text-primary-foreground" />
    </a>
  );
}
