import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#actividades", label: "Actividades" },
  { href: "#instalaciones", label: "Instalaciones" },
  { href: "#horarios", label: "Horarios" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Woden Fitness Club"
            className="size-11 rounded-full object-cover ring-1 ring-primary/40"
          />
          <div className="font-display tracking-wider leading-none">
            <div className="text-lg md:text-xl">WODEN</div>
            <div className="text-[10px] md:text-xs text-muted-foreground tracking-[0.3em]">FITNESS CLUB</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm uppercase tracking-wider font-medium text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden lg:inline-flex items-center bg-gradient-red text-primary-foreground font-display tracking-wider px-6 py-3 rounded-sm hover:scale-105 transition-transform shadow-red"
        >
          Probá Gratis
        </a>

        <button
          aria-label="Menú"
          className="lg:hidden text-foreground"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base uppercase tracking-wider font-medium py-2 border-b border-border/40"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="bg-gradient-red text-primary-foreground font-display tracking-wider px-6 py-3 rounded-sm text-center mt-2"
            >
              Probá Gratis
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
