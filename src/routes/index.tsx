import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Dumbbell,
  Users,
  Award,
  Maximize,
  ArrowRight,
  Star,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Clock,
  Flame,
  Target,
  TrendingUp,
  Zap,
  CheckCircle2,
} from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Counter } from "@/components/Counter";

import heroImg from "@/assets/hero.jpg";
import musculacionImg from "@/assets/musculacion.jpg";
import crossfitImg from "@/assets/crossfit.jpg";
import funcionalImg from "@/assets/funcional.jpg";
import gapImg from "@/assets/gap.jpg";
import facility1 from "@/assets/facility-1.jpg";
import facility2 from "@/assets/facility-2.jpg";
import facility3 from "@/assets/facility-3.jpg";
import ctaImg from "@/assets/cta.jpg";
import logoImg from "@/assets/logo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Woden Fitness Club — CrossFit & Musculación en Berazategui" },
      {
        name: "description",
        content:
          "Woden Fitness Club Berazategui: CrossFit, musculación, funcional y GAP. Equipamiento premium, coaches especializados y comunidad real. Probá una clase gratis.",
      },
      { property: "og:title", content: "Woden Fitness Club — Berazategui" },
      {
        property: "og:description",
        content:
          "Entrená fuerte. Superate todos los días. CrossFit, musculación y funcional en Berazategui.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const benefits = [
  {
    icon: Dumbbell,
    title: "Equipamiento profesional",
    text: "Máquinas modernas, racks, bicicletas y equipamiento funcional de primer nivel.",
  },
  {
    icon: Users,
    title: "Comunidad real",
    text: "Entrená rodeado de personas que te motivan a mejorar cada día.",
  },
  {
    icon: Award,
    title: "Coaches especializados",
    text: "Acompañamiento constante para mejorar técnica, fuerza y rendimiento.",
  },
  {
    icon: Maximize,
    title: "Espacios amplios",
    text: "Área indoor + patio exterior techado para entrenamientos dinámicos.",
  },
];

const activities = [
  {
    title: "Musculación",
    img: musculacionImg,
    text: "Entrenamiento de fuerza con equipamiento moderno y asesoramiento profesional.",
  },
  {
    title: "CrossFit",
    img: crossfitImg,
    text: "WODs dinámicos, trabajo funcional y preparación física de alto rendimiento.",
  },
  {
    title: "Funcional",
    img: funcionalImg,
    text: "Clases intensas para mejorar resistencia, movilidad y condición física general.",
  },
  {
    title: "GAP",
    img: gapImg,
    text: "Entrenamientos enfocados en glúteos, abdomen y piernas.",
  },
];

const method = [
  { icon: Target, title: "Técnica", text: "Bases sólidas para entrenar seguro y eficiente." },
  { icon: Dumbbell, title: "Fuerza", text: "Programación progresiva para crecer cada semana." },
  { icon: Flame, title: "Resistencia", text: "Capacidad cardiovascular y muscular de alto rendimiento." },
  { icon: Zap, title: "Disciplina", text: "Constancia, hábito y mentalidad ganadora." },
  { icon: TrendingUp, title: "Evolución", text: "Resultados medibles, semana tras semana." },
];

const facilities = [
  { img: facility1, label: "Sala de Musculación" },
  { img: facility2, label: "Patio Exterior Techado" },
  { img: facility3, label: "Cardio & Bikes" },
];

const testimonials = [
  { name: "Lucas M.", text: "Excelente ambiente y muy buenos coaches. Cambié mi físico en pocos meses." },
  { name: "Carolina R.", text: "Muchísimo espacio y equipamiento moderno. Las clases son una locura." },
  { name: "Martín F.", text: "El mejor lugar para entrenar en Berazategui. Comunidad de diez." },
  { name: "Sofía L.", text: "Muy buena energía y acompañamiento. Recomiendo 100%." },
];

const schedule = [
  { day: "Lunes a Viernes", hours: "07:00 — 22:00" },
  { day: "Sábados", hours: "10:00 — 14:00" },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <WhatsAppButton />

      <Hero />
      <Ticker />
      <WhyWoden />
      <Activities />
      <Method />
      <Facilities />
      <Testimonials />
      <Schedule />
      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
}

/* ----------------- HERO ----------------- */
function Hero() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain"
    >
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${offset * 0.3}px, 0)` }}
      >
        <img
          src={heroImg}
          alt="Atletas entrenando CrossFit en Woden Fitness Club"
          className="absolute inset-0 size-full object-cover ken-burns"
          width={1920}
          height={1080}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.10_0_0/0.7)_100%)]" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/40 bg-primary/10 rounded-sm mb-6 backdrop-blur-sm">
              <span className="size-2 bg-primary rounded-full animate-pulse" />
              <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
                Berazategui · Buenos Aires
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="font-display text-[14vw] md:text-[8.5rem] lg:text-[10rem] leading-[0.9] tracking-tight">
              CROSSFIT &<br />
              <span className="text-gradient text-glow">MUSCULACIÓN</span>
              <br />
              <span className="text-foreground/90">EN BERAZATEGUI</span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              Entrená fuerte. Superate todos los días. Sumate a una comunidad que te
              impulsa a más.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="group inline-flex items-center gap-3 bg-gradient-red text-primary-foreground font-display tracking-wider text-lg px-8 py-4 rounded-sm shadow-red glow-on-hover hover:scale-[1.04] transition-transform"
              >
                Probá una clase gratis
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#actividades"
                className="inline-flex items-center gap-3 border border-border hover:border-primary text-foreground font-display tracking-wider text-lg px-8 py-4 rounded-sm transition-all hover:bg-primary/5"
              >
                Ver Actividades
              </a>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
              {[
                { v: 100, prefix: "+", suffix: "", decimals: 0, l: "Alumnos activos" },
                { v: 4.8, prefix: "", suffix: "★", decimals: 1, l: "Reseñas Google" },
                { v: 10, prefix: "", suffix: "+", decimals: 0, l: "Coaches expertos" },
                { v: 7, prefix: "", suffix: " días", decimals: 0, l: "Energía premium" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="border-l-2 border-primary pl-4 hover:border-primary-glow transition-colors"
                >
                  <div className="font-display text-3xl md:text-4xl text-foreground">
                    <Counter to={s.v} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} />
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-muted-foreground animate-float">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="block w-px h-10 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}

/* ----------------- TICKER ----------------- */
function Ticker() {
  const items = ["CrossFit", "Musculación", "Funcional", "GAP", "Comunidad", "Disciplina", "Fuerza", "Rendimiento"];
  return (
    <div className="border-y border-border bg-surface overflow-hidden py-6 animate-ticker-wrap">
      <div className="flex animate-ticker whitespace-nowrap">
        {[...items, ...items, ...items].map((it, i) => (
          <div key={i} className="flex items-center gap-8 mx-8 font-display text-3xl md:text-5xl tracking-wider">
            <span className="text-foreground/80 hover:text-primary transition-colors">{it}</span>
            <span className="size-3 bg-primary rounded-full animate-glow" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ----------------- WHY WODEN ----------------- */
function WhyWoden() {
  return (
    <section id="nosotros" className="py-24 md:py-32 container mx-auto px-4 lg:px-8">
      <Reveal>
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
            ¿Por qué Woden?
          </span>
          <h2 className="font-display text-5xl md:text-7xl mt-3">
            ¿POR QUÉ ENTRENAR <br />
            <span className="text-transparent bg-clip-text bg-gradient-red">EN WODEN?</span>
          </h2>
        </div>
      </Reveal>

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b, i) => (
          <Reveal key={b.title} delay={i * 100} direction={i % 2 === 0 ? "up" : "scale"}>
            <div className="group relative h-full bg-surface border border-border rounded-md p-8 hover:border-primary transition-all duration-500 hover:-translate-y-2 hover:shadow-red overflow-hidden hover-tilt">
              <div className="absolute -top-20 -right-20 size-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="size-14 grid place-items-center bg-gradient-red rounded-sm shadow-red mb-6 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500">
                <b.icon className="size-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl mb-3 group-hover:text-primary transition-colors">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ----------------- ACTIVITIES ----------------- */
function Activities() {
  return (
    <section id="actividades" className="py-24 md:py-32 bg-surface relative">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
              Actividades
            </span>
            <h2 className="font-display text-5xl md:text-7xl mt-3">
              ELEGÍ TU <span className="text-transparent bg-clip-text bg-gradient-red">DISCIPLINA</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              Cuatro formas de superarte. Una sola comunidad que te impulsa a más.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {activities.map((a, i) => (
            <Reveal key={a.title} delay={i * 100} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="group relative h-[440px] rounded-md overflow-hidden cursor-pointer hover-tilt shadow-card">
                <img
                  src={a.img}
                  alt={a.title}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.12]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/0 group-hover:from-primary/15 group-hover:to-primary/5 transition-all duration-700" />
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-red scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="font-display text-5xl md:text-6xl mb-3 group-hover:text-primary transition-all duration-500 group-hover:-translate-y-1">
                    {a.title}
                  </h3>
                  <p className="text-muted-foreground max-w-md mb-5 opacity-90 group-hover:opacity-100 transition-opacity">{a.text}</p>
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-2 text-sm font-display tracking-widest text-primary underline-grow w-fit"
                  >
                    Quiero probar
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                <div className="absolute top-6 right-6 size-12 grid place-items-center border border-primary/50 rounded-full text-xs font-display text-primary backdrop-blur-sm bg-background/30 group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-12 transition-all duration-500">
                  0{i + 1}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------- METHOD ----------------- */
function Method() {
  return (
    <section className="py-24 md:py-32 container mx-auto px-4 lg:px-8">
      <Reveal>
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
            Metodología
          </span>
          <h2 className="font-display text-5xl md:text-7xl mt-3">
            ENTRENÁ CON EL <br />
            <span className="text-transparent bg-clip-text bg-gradient-red">MÉTODO WODEN</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Una metodología basada en progreso constante, comunidad y entrenamiento inteligente.
          </p>
        </div>
      </Reveal>

      <div className="mt-16 relative">
        <div className="absolute left-0 right-0 top-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent hidden md:block" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {method.map((m, i) => (
            <Reveal key={m.title} delay={i * 100}>
              <div className="text-center">
                <div className="relative mx-auto size-24 rounded-full bg-surface border-2 border-primary grid place-items-center mb-5 shadow-red">
                  <m.icon className="size-10 text-primary" />
                  <div className="absolute -top-2 -right-2 size-7 bg-gradient-red rounded-full grid place-items-center text-xs font-display text-primary-foreground">
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-display text-2xl mb-2">{m.title}</h3>
                <p className="text-sm text-muted-foreground">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------- FACILITIES ----------------- */
function Facilities() {
  return (
    <section id="instalaciones" className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
              Instalaciones
            </span>
            <h2 className="font-display text-5xl md:text-7xl mt-3">
              UN ESPACIO <br />
              HECHO PARA <span className="text-transparent bg-clip-text bg-gradient-red">ENTRENAR</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-4">
          {facilities.map((f, i) => (
            <Reveal key={f.label} delay={i * 100}>
              <div
                className={`group relative rounded-md overflow-hidden ${
                  i === 0 ? "md:col-span-2 h-[420px]" : "h-[420px]"
                }`}
              >
                <img
                  src={f.img}
                  alt={f.label}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="font-display text-2xl md:text-3xl">{f.label}</div>
                  <div className="red-divider w-16 mt-2" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Equipamiento moderno",
              "Espacios amplios",
              "Ambiente cómodo",
              "Excelente energía",
            ].map((t) => (
              <div key={t} className="flex items-center gap-3 bg-background border border-border rounded-md p-4">
                <CheckCircle2 className="size-5 text-primary shrink-0" />
                <span className="text-sm font-medium">{t}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------- TESTIMONIALS ----------------- */
function Testimonials() {
  return (
    <section id="testimonios" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.58_0.24_27/0.15),transparent_50%)]" />
      <div className="container mx-auto px-4 lg:px-8 relative">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-5xl">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
                Testimonios
              </span>
              <h2 className="font-display text-5xl md:text-7xl mt-3">
                LO QUE DICE <br />
                <span className="text-transparent bg-clip-text bg-gradient-red">LA COMUNIDAD</span>
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-6 fill-primary text-primary" />
                ))}
              </div>
              <div>
                <div className="font-display text-2xl">4.8</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Google Reviews</div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <div className="h-full bg-surface border border-border rounded-md p-6 hover:border-primary transition-colors group">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} className="size-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed mb-6 text-[15px]">
                  “{t.text}”
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="size-10 rounded-full bg-gradient-red grid place-items-center font-display text-primary-foreground">
                    {t.name.charAt(0)}
                  </div>
                  <div className="font-medium text-sm">{t.name}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------- SCHEDULE ----------------- */
function Schedule() {
  const blocks = [
    { time: "Morning", range: "07:00 — 12:00", icon: Flame },
    { time: "Afternoon", range: "13:00 — 18:00", icon: Zap },
    { time: "Evening", range: "18:00 — 22:00", icon: Target },
  ];
  return (
    <section id="horarios" className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
              Horarios
            </span>
            <h2 className="font-display text-5xl md:text-7xl mt-3">
              FLEXIBLES PARA TU <br />
              <span className="text-transparent bg-clip-text bg-gradient-red">RUTINA</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-3 gap-10">
          <Reveal>
            <div className="bg-background border border-border rounded-md overflow-hidden">
              {schedule.map((s) => (
                <div
                  key={s.day}
                  className="flex items-center justify-between p-6 border-b border-border last:border-0"
                >
                  <div>
                    <Clock className="size-5 text-primary mb-2" />
                    <div className="font-display text-2xl">{s.day}</div>
                  </div>
                  <div className="font-display text-3xl text-primary">{s.hours}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-2">
            <div className="grid sm:grid-cols-3 gap-4 h-full">
              {blocks.map((b) => (
                <div
                  key={b.time}
                  className="bg-background border border-border rounded-md p-6 hover:border-primary transition-colors group"
                >
                  <b.icon className="size-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <div className="font-display text-2xl">{b.time}</div>
                  <div className="text-sm text-muted-foreground mt-1">{b.range}</div>
                  <div className="red-divider w-10 mt-4" />
                  <div className="text-xs text-muted-foreground mt-3 uppercase tracking-wider">
                    Functional · Strength
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------- CTA ----------------- */
function CTASection() {
  return (
    <section className="relative py-32 md:py-44 overflow-hidden">
      <img
        src={ctaImg}
        alt=""
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,oklch(0.58_0.24_27/0.35),transparent_60%)]" />

      <div className="relative container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-display text-6xl md:text-8xl lg:text-9xl text-glow leading-[0.9]">
              TU MEJOR VERSIÓN <br />
              <span className="text-transparent bg-clip-text bg-gradient-red">EMPIEZA HOY</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
              Probá una clase gratuita y descubrí la experiencia Woden.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center gap-3 bg-gradient-red text-primary-foreground font-display tracking-wider text-lg px-8 py-4 rounded-sm shadow-red-glow hover:scale-105 transition-transform"
              >
                Reservar clase
                <ArrowRight className="size-5" />
              </a>
              <a
                href="https://wa.me/5491139451919"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-border hover:border-primary text-foreground font-display tracking-wider text-lg px-8 py-4 rounded-sm transition-colors"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------- CONTACT ----------------- */
function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    objetivo: "",
    consulta: "",
  });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre.trim() || !form.telefono.trim() || !form.email.trim()) return;
    const text = encodeURIComponent(
      `Hola Woden! Soy ${form.nombre}.\nTeléfono: ${form.telefono}\nEmail: ${form.email}\nObjetivo: ${form.objetivo}\nConsulta: ${form.consulta}`,
    );
    window.open(`https://wa.me/5491139451919?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contacto" className="py-24 md:py-32 container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <Reveal>
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
              Contacto
            </span>
            <h2 className="font-display text-5xl md:text-7xl mt-3">
              EMPEZÁ <br />
              <span className="text-transparent bg-clip-text bg-gradient-red">HOY MISMO</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Completá el formulario y te contactamos para coordinar tu clase de prueba gratuita.
            </p>

            <div className="mt-10 space-y-5">
              <ContactItem icon={MapPin} title="Dirección" lines={["Calle 142 N.º 818", "Berazategui, Buenos Aires"]} />
              <ContactItem icon={Phone} title="Teléfono" lines={["011 3945-1919"]} />
              <ContactItem icon={Clock} title="Horarios" lines={["Lun-Vie 07:00 — 22:00", "Sáb 10:00 — 14:00"]} />
            </div>

            <div className="mt-8 rounded-md overflow-hidden border border-border h-64">
              <iframe
                title="Mapa Woden Fitness Club"
                src="https://www.google.com/maps?q=Calle+142+818+Berazategui&output=embed"
                className="size-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <form
            onSubmit={onSubmit}
            className="bg-surface border border-border rounded-md p-8 md:p-10 shadow-card"
          >
            <h3 className="font-display text-3xl mb-6">Pedí tu clase gratis</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Nombre" value={form.nombre} onChange={(v) => setForm({ ...form, nombre: v })} required />
              <Field label="Teléfono" value={form.telefono} onChange={(v) => setForm({ ...form, telefono: v })} required />
            </div>
            <div className="mt-4">
              <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
            </div>
            <div className="mt-4">
              <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Objetivo</label>
              <select
                value={form.objetivo}
                onChange={(e) => setForm({ ...form, objetivo: e.target.value })}
                className="w-full bg-background border border-border rounded-sm px-4 py-3 focus:border-primary outline-none transition-colors"
              >
                <option value="">Seleccioná tu objetivo</option>
                <option>Bajar de peso</option>
                <option>Ganar masa muscular</option>
                <option>Mejorar rendimiento</option>
                <option>Salud y bienestar</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Consulta</label>
              <textarea
                value={form.consulta}
                onChange={(e) => setForm({ ...form, consulta: e.target.value.slice(0, 500) })}
                rows={4}
                className="w-full bg-background border border-border rounded-sm px-4 py-3 focus:border-primary outline-none transition-colors resize-none"
                placeholder="Contanos qué buscás..."
              />
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-gradient-red text-primary-foreground font-display tracking-wider text-lg px-8 py-4 rounded-sm shadow-red hover:scale-[1.02] transition-transform inline-flex items-center justify-center gap-3"
            >
              Quiero mi clase gratis
              <ArrowRight className="size-5" />
            </button>
            {sent && (
              <p className="mt-4 text-sm text-primary text-center">
                ¡Te redirigimos a WhatsApp para confirmar tu turno!
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  title,
  lines,
}: {
  icon: typeof MapPin;
  title: string;
  lines: string[];
}) {
  return (
    <div className="flex gap-4">
      <div className="size-12 shrink-0 grid place-items-center bg-surface border border-border rounded-sm">
        <Icon className="size-5 text-primary" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{title}</div>
        {lines.map((l) => (
          <div key={l} className="font-medium">{l}</div>
        ))}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        type={type}
        value={value}
        required={required}
        maxLength={120}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-background border border-border rounded-sm px-4 py-3 focus:border-primary outline-none transition-colors"
      />
    </div>
  );
}

/* ----------------- FOOTER ----------------- */
function Footer() {
  return (
    <footer className="bg-surface border-t-2 border-primary">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoImg}
                alt="Woden Fitness Club"
                className="size-12 rounded-full object-cover ring-1 ring-primary/40"
              />
              <div className="font-display tracking-wider leading-none">
                <div className="text-xl">WODEN</div>
                <div className="text-xs text-muted-foreground tracking-[0.3em]">FITNESS CLUB</div>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md">
              CrossFit, musculación y entrenamiento funcional en Berazategui. Una comunidad
              real que te impulsa a tu mejor versión.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com/woden_fitnessclub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="size-10 grid place-items-center border border-border rounded-sm hover:bg-gradient-red hover:border-transparent transition-all"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="size-10 grid place-items-center border border-border rounded-sm hover:bg-gradient-red hover:border-transparent transition-all"
              >
                <Facebook className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Calle 142 N.º 818</li>
              <li>Berazategui, BA</li>
              <li>011 3945-1919</li>
              <li>@woden_fitnessclub</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl mb-4">Horarios</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Lun-Vie: 07:00 — 22:00</li>
              <li>Sábados: 10:00 — 14:00</li>
              <li>Domingos: Cerrado</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Woden Fitness Club. Todos los derechos reservados.</div>
          <div className="font-display tracking-wider">FORJÁ TU FUERZA · FORJÁ TU CAMINO</div>
        </div>
      </div>
    </footer>
  );
}
