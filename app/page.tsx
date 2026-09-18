"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Code2,
  Database,
  Layers,
  Cpu,
  Sparkles,
  ExternalLink,
  Terminal,
  Boxes,
  BarChart3,
  Workflow,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Waves,
  Swords,
  Zap,
  Dot,
  Check,
  HeartPulse,
  Wallet,
  Utensils,
  ShoppingBag,
} from "lucide-react";

const HeartPulseIcon = HeartPulse;
import { useState, useEffect, useRef } from "react";
import { GlowButton } from "@/components/ui/glow-button";

// -------------------- Helpers --------------------
const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Stack", href: "#stack" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

function TextReveal({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: delay + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

// -------------------- Navbar --------------------
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div
          className={`flex items-center justify-between rounded-full border px-6 py-3 backdrop-blur-xl transition-all ${
            scrolled
              ? "bg-zinc-900/80 border-zinc-800 shadow-2xl shadow-black/20"
              : "bg-zinc-900/40 border-zinc-800/50"
          }`}
        >
          <a href="#hero" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center">
              <Terminal size={14} className="text-white" />
            </div>
            <span className="font-mono text-sm font-semibold tracking-widest">ARTHUR.DEV</span>
            <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 text-[10px] font-mono text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              DISPONÍVEL
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-full text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contato"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white text-zinc-900 px-5 py-2 text-sm font-medium hover:bg-zinc-100 transition-colors"
            >
              <Mail size={14} />
              Contato
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden h-9 w-9 rounded-full bg-zinc-800 grid place-items-center"
            >
              <div className="space-y-1">
                <div className={`h-0.5 w-4 bg-white transition ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                <div className={`h-0.5 w-4 bg-white transition ${mobileOpen ? "opacity-0" : ""}`} />
                <div className={`h-0.5 w-4 bg-white transition ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              className="md:hidden mt-3 rounded-2xl border border-zinc-800 bg-zinc-900 p-2 shadow-2xl"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

// -------------------- Hero --------------------
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#09090b]"
    >
      {/* Background grid + glow */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#09090b]" />
      {/* Neon orbs */}
      <motion.div
        style={{ y }}
        className="absolute -top-[30%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-30 blur-[120px] pointer-events-none"
      >
        <div className="w-full h-full bg-gradient-to-r from-cyan-500/30 via-violet-500/30 to-fuchsia-500/20 rounded-full" />
      </motion.div>
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Code snippet decoration */}
      <div className="absolute right-6 lg:right-[5%] top-[18%] hidden xl:block opacity-20">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur p-4 font-mono text-xs leading-relaxed">
          <div className="flex gap-1.5 mb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          </div>
          <div className="text-zinc-500">{"// architecture.ts"}</div>
          <div>
            <span className="text-violet-400">class</span>{" "}
            <span className="text-cyan-400">ScalableSystem</span> {"{"}
          </div>
          <div className="pl-4 text-zinc-300">
            <span className="text-zinc-500">→</span> microsservices: <span className="text-emerald-400">true</span>
          </div>
          <div className="pl-4 text-zinc-300">
            <span className="text-zinc-500">→</span> scale: <span className="text-cyan-400">"infinite"</span>
          </div>
          <div>{"}"}</div>
        </div>
      </div>

      <motion.div style={{ opacity }} className="relative mx-auto max-w-[1200px] px-6 pt-28 pb-16 w-full">
        <div className="max-w-[800px]">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 backdrop-blur px-3 py-1.5 mb-8"
          >
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-xs font-mono tracking-widest text-zinc-400">
              FULL-STACK • .NET • LARAVEL • MICROSSERVIÇOS
            </span>
            <Sparkles size={12} className="text-violet-400" />
          </motion.div>

          {/* Headline - Cult-UI style */}
          <h1 className="font-display font-bold tracking-tight leading-[0.95] text-[clamp(32px,6vw,64px)]">
            <TextReveal text="Engenharia de" className="block text-zinc-100" delay={0.3} />
            <span className="block bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent pb-2">
              <TextReveal text="Software de Ponta a Ponta:" delay={0.6} />
            </span>
            <span className="block text-zinc-100">
              <TextReveal text="Construindo Soluções" delay={0.9} />
            </span>
            <span className="block text-zinc-500">
              <TextReveal text="Escaláveis e Impactantes." delay={1.15} />
            </span>
          </h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="mt-6 max-w-[620px] text-[15px] sm:text-[17px] leading-relaxed text-zinc-400"
          >
            Sou o <span className="text-white font-medium">Arthur</span> — Desenvolvedor Full-Stack focado em{" "}
            <span className="text-zinc-200">arquitetura limpa, microsserviços, sistemas públicos</span> e ecossistemas
            robustos em <span className="inline-flex items-center gap-1 rounded bg-zinc-800 px-1.5 py-0.5 font-mono text-xs text-cyan-300">.NET</span>{" "}
            e <span className="inline-flex items-center gap-1 rounded bg-zinc-800 px-1.5 py-0.5 font-mono text-xs text-violet-300">Laravel</span>.
          </motion.p>

          {/* CTAs - Glow Buttons Cult-UI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projetos">
              <GlowButton variant="primary">
                Ver Projetos
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </GlowButton>
            </a>
            <a href="#contato">
              <GlowButton variant="secondary">
                <Mail size={16} />
                Entrar em Contato
              </GlowButton>
            </a>
            <a
              href="https://github.com/Arthurmt15"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-6 py-3 text-sm text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors backdrop-blur"
            >
              <Github size={16} />
              GitHub
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-[520px] border-t border-zinc-800/80 pt-8"
          >
            {[
              { value: "3+", label: "Anos experiência" },
              { value: "15+", label: "Projetos entregues" },
              { value: "100%", label: "Foco em qualidade" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-semibold text-white font-display">{stat.value}</div>
                <div className="text-xs font-mono tracking-widest text-zinc-500 uppercase">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom commit bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          className="mt-16 flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-500"
        >
          <span className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5">
            <Dot className="text-emerald-400 -ml-1" />
            Último deploy: <span className="text-zinc-300">vercel • há 2h</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-2">
            <span className="h-px w-6 bg-zinc-800" />
            Otimizado para Lighthouse 100 • SEO • A11y
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-zinc-500"
      >
        SCROLL
        <div className="h-8 w-[1px] bg-gradient-to-b from-zinc-500 to-transparent" />
      </motion.div>
    </section>
  );
}

// -------------------- Sobre Mim - Skiper-UI --------------------
const aboutCards = [
  {
    icon: Code2,
    title: "Arquitetura Performática",
    desc: "DDD, microsserviços e código limpo. Cada linha com propósito de escala.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Dumbbell,
    title: "Disciplina & Energia",
    desc: "Musculação, corrida e artes marciais. Alta performance no código e na vida.",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: Waves,
    title: "Equilíbrio",
    desc: "Surfe e movimento. Criatividade nasce do equilíbrio entre foco e fluidez.",
    color: "from-emerald-500 to-cyan-500",
  },
  {
    icon: Terminal,
    title: "Problem Solver",
    desc: "Movo-me por problemas complexos. Otimizar queries é meu cardio mental.",
    color: "from-orange-500 to-pink-500",
  },
];

function SobreMim() {
  const [active, setActive] = useState(0);

  return (
    <section id="sobre" className="relative bg-[#0a0a0f] border-t border-zinc-900 py-24">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="mx-auto max-w-[1200px] px-6 relative">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Text narrative */}
          <div className="lg:w-[55%]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-mono tracking-widest text-zinc-400"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
              SOBRE MIM — A NARRATIVA
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 font-display text-[32px] sm:text-[42px] font-bold leading-tight tracking-tight"
            >
              Código disciplinado,
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                mente em movimento.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 space-y-4 text-[15px] leading-relaxed text-zinc-400"
            >
              <p>
                Sou desenvolvedor <span className="text-white">full-stack formado em Análise e Desenvolvimento de Sistemas</span>,
                movido pela resolução de problemas complexos e arquitetura de software performática. Tenho experiência prática
                no desenvolvimento de sistemas web, gestão de bancos de dados relacionais e na criação de{" "}
                <span className="text-zinc-200">portais e indicadores públicos</span>.
              </p>
              <p>
                Para mim, a disciplina do código se reflete no dia a dia: divido meu tempo entre{" "}
                <span className="text-cyan-300">otimizar queries</span>, explorar microsserviços e manter uma rotina de alta
                energia com <span className="text-white">musculação, corrida, artes marciais e surfe</span>. Busco sempre o
                próximo nível técnico e novas pontes para atuar no mercado global.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {["ADS • Formado", "Natal • RN", "Remoto / Global", "Disponível para freelance"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs font-mono text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Skiper-UI Carousel / Cards */}
          <div className="lg:w-[45%] w-full">
            <div className="relative">
              {/* Active card large */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative overflow-hidden rounded-[24px] border border-zinc-800 bg-zinc-900 p-8"
                >
                  <div className={`absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br ${aboutCards[active].color} opacity-20 blur-3xl`} />
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${aboutCards[active].color} text-white`}>
                    {(() => {
                      const Icon = aboutCards[active].icon;
                      return <Icon size={20} />;
                    })()}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{aboutCards[active].title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{aboutCards[active].desc}</p>

                  <div className="mt-6 flex items-center gap-2 text-xs font-mono text-zinc-500">
                    <span className="h-px flex-1 bg-zinc-800" />
                    0{active + 1} / 0{aboutCards.length}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Mini carousel */}
              <div className="mt-4 grid grid-cols-4 gap-3">
                {aboutCards.map((card, idx) => {
                  const Icon = card.icon;
                  const isActive = idx === active;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActive(idx)}
                      className={`group relative rounded-2xl border p-4 text-left transition-all ${
                        isActive
                          ? "bg-zinc-800 border-zinc-700 shadow-lg"
                          : "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/50"
                      }`}
                    >
                      <Icon size={18} className={isActive ? "text-white" : "text-zinc-500 group-hover:text-zinc-300"} />
                      <div className={`mt-2 h-1 w-6 rounded-full transition-colors ${isActive ? "bg-gradient-to-r from-cyan-400 to-violet-500" : "bg-zinc-800"}`} />
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => setActive((p) => (p - 1 + aboutCards.length) % aboutCards.length)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-700"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => setActive((p) => (p + 1) % aboutCards.length)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-zinc-900 hover:bg-zinc-100"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Lifestyle ticker */}
            <div className="mt-6 overflow-hidden rounded-full border border-zinc-800 bg-zinc-900">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="flex gap-6 py-2.5 whitespace-nowrap text-xs font-mono tracking-widest text-zinc-500"
              >
                {[...Array(2)].map((_, i) => (
                  <span key={i} className="flex items-center gap-6">
                    <span className="flex items-center gap-2">
                      <Dumbbell size={12} /> MUSCULAÇÃO
                    </span>
                    •
                    <span className="flex items-center gap-2">
                      <Zap size={12} /> CORRIDA
                    </span>
                    •
                    <span className="flex items-center gap-2">
                      <Swords size={12} /> ARTES MARCIAIS
                    </span>
                    •
                    <span className="flex items-center gap-2">
                      <Waves size={12} /> SURFE
                    </span>
                    •<span>CODE</span>•
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// -------------------- Stack - OriginKit --------------------
const stackGroups = [
  {
    title: "Backend & Arquitetura",
    icon: Layers,
    accent: "from-cyan-500 to-blue-600",
    items: ["C#", ".NET Core", "ASP.NET MVC", "PHP", "Laravel", "Python", "FastAPI", "DDD", "POO", "REST APIs", "Microsserviços"],
  },
  {
    title: "Frontend & UI",
    icon: Code2,
    accent: "from-violet-500 to-fuchsia-600",
    items: ["TypeScript", "JavaScript", "Angular", "React", "Bootstrap 5", "Chart.js", "ECharts"],
  },
  {
    title: "DevOps & Dados",
    icon: Database,
    accent: "from-emerald-500 to-teal-600",
    items: ["SQL Server", "MySQL", "Docker", "WSL", "Git", "GitLab"],
  },
];

function Stack() {
  return (
    <section id="stack" className="relative bg-[#09090b] border-t border-zinc-900 py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-mono tracking-widest text-zinc-400">
              <Boxes size={12} className="text-cyan-400" />
              STACK TÉCNICA
            </div>
            <h2 className="mt-4 font-display text-[30px] sm:text-[40px] font-bold tracking-tight leading-none">
              Ferramentas para
              <br />
              <span className="text-zinc-500">escala real.</span>
            </h2>
          </div>
          <p className="max-w-[420px] text-sm leading-relaxed text-zinc-500">
            OriginKit grid • Componentes interativos com hover avançado. Cada tecnologia validada em produção.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {stackGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-[20px] border border-zinc-800 bg-zinc-900 p-6 hover:border-zinc-700 transition-colors"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${group.accent} opacity-0 group-hover:opacity-[0.06] transition-opacity`} />
                <div className="relative">
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${group.accent} text-white shadow-lg`}>
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-4 text-[15px] font-semibold tracking-wide text-white">{group.title}</h3>
                  <div className="mt-1 h-px w-full bg-zinc-800 group-hover:bg-zinc-700 transition-colors" />

                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs font-medium text-zinc-300 group-hover:border-zinc-700 group-hover:text-white transition-colors"
                      >
                        <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${group.accent}`} />
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-xs font-mono text-zinc-500">
                    <Cpu size={12} />
                    {group.items.length} tecnologias • produção
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom metrics */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { k: "Uptime", v: "99.9%" },
            { k: "Latência p95", v: "< 120ms" },
            { k: "Cobertura", v: "DDD + Tests" },
            { k: "Deploy", v: "Docker + CI/CD" },
          ].map((m) => (
            <div key={m.k} className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4">
              <div className="text-xs font-mono tracking-widest text-zinc-500">{m.k}</div>
              <div className="mt-1 text-sm font-semibold text-white">{m.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// -------------------- Projetos - Reais da Vercel --------------------
const projects = [
  {
    title: "Controle de Finanças",
    subtitle: "TypeScript • Next.js • Vercel",
    desc: "Sistema completo de gestão financeira pessoal com dashboard interativo, controle de receitas/despesas, categorias e gráficos em tempo real. Projeto mais recente e estrelado.",
    tags: ["TypeScript", "Next.js", "Tailwind", "Chart.js"],
    gradient: "from-cyan-500 via-blue-500 to-violet-600",
    icon: BarChart3,
    link: "https://controle-de-financas-nine.vercel.app",
    github: "https://github.com/Arthurmt15/Controle-de-Financas",
    stats: "★ Destaque • 2026",
  },
  {
    title: "Restaurante",
    subtitle: "TypeScript • Cardápio Digital",
    desc: "Plataforma para restaurante com cardápio digital, gerenciamento de pedidos e interface moderna. Experiência de usuário otimizada para mobile.",
    tags: ["TypeScript", "React", "Tailwind", "Vercel"],
    gradient: "from-orange-500 via-red-500 to-pink-600",
    icon: Workflow,
    link: "https://restaurante-phi-silk.vercel.app",
    github: "https://github.com/Arthurmt15/restaurante",
    stats: "Food Tech • Live",
  },
  {
    title: "Finanças Beta",
    subtitle: "HTML • Finanças Pessoais",
    desc: "Portal beta de finanças com interface leve e rápida. Protótipo validado para evolução do Controle de Finanças.",
    tags: ["HTML", "JavaScript", "CSS", "Vercel"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    icon: Database,
    link: "https://financas-beta.vercel.app",
    github: "https://github.com/Arthurmt15/financas",
    stats: "Beta • Online",
  },
  {
    title: "SwellRepair",
    subtitle: "HTML • Landing Page",
    desc: "Landing page para serviço de reparo com inspiração no universo do surfe. Design clean, responsivo e focado em conversão.",
    tags: ["HTML", "CSS", "JavaScript", "Vercel"],
    gradient: "from-sky-500 via-cyan-500 to-blue-600",
    icon: Waves,
    link: "https://swellrepair.vercel.app",
    github: "https://github.com/Arthurmt15/swellrepair",
    stats: "Surfe • Conversão",
  },
  {
    title: "DoctorCare",
    subtitle: "HTML • Saúde",
    desc: "Landing page para clínica médica com agendamento, apresentação de serviços e design acolhedor. Foco em acessibilidade e SEO.",
    tags: ["HTML", "CSS", "JavaScript", "Responsivo"],
    gradient: "from-violet-600 via-fuchsia-500 to-pink-500",
    icon: HeartPulseIcon,
    link: "https://doctor-care-mauve.vercel.app",
    github: "https://github.com/Arthurmt15/DoctorCare",
    stats: "Saúde • SEO 100",
  },
  {
    title: "Pagamento Aprovado",
    subtitle: "HTML • Checkout",
    desc: "Página de confirmação de pagamento com feedback visual, animações e pronta para integração com gateway.",
    tags: ["HTML", "CSS", "Checkout", "Vercel"],
    gradient: "from-green-500 via-emerald-500 to-teal-600",
    icon: Check,
    link: "https://pagamento-aprovado-beta.vercel.app",
    github: "https://github.com/Arthurmt15/pagamento-aprovado",
    stats: "Checkout • Live",
  },
];

function Projetos() {
  return (
    <section id="projetos" className="relative bg-[#0a0a0f] border-t border-zinc-900 py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-wrap items-start justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-mono tracking-widest text-zinc-400">
              <Sparkles size={12} className="text-violet-400" />
              PROJETOS EM DESTAQUE
            </div>
            <h2 className="mt-4 font-display text-[30px] sm:text-[40px] font-bold tracking-tight">
              Showcase
              <span className="text-zinc-500"> — impacto mensurável.</span>
            </h2>
          </div>
          <a
            href="https://github.com/Arthurmt15?tab=repositories"
            target="_blank"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            Ver todos no GitHub • 6 projetos na Vercel
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col overflow-hidden rounded-[24px] border border-zinc-800 bg-zinc-900 hover:border-zinc-700 transition-all hover:shadow-2xl hover:shadow-black/20"
              >
                {/* Top gradient bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${p.gradient}`} />

                {/* Image / preview area */}
                <div className="relative h-[180px] overflow-hidden bg-zinc-950 p-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-[0.08] group-hover:opacity-[0.14] transition-opacity`} />
                  {/* Grid */}
                  <div className="absolute inset-0 grid-bg opacity-20" />
                  {/* Mock UI */}
                  <div className="relative h-full rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden">
                    <div className="flex items-center gap-1.5 border-b border-zinc-800 px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-red-500/70" />
                      <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
                      <span className="h-2 w-2 rounded-full bg-green-500/70" />
                      <span className="ml-2 text-[10px] font-mono text-zinc-500">vercel.app/{p.title.toLowerCase().replace(/\s+/g, "-")}</span>
                    </div>
                    <div className="p-4 space-y-2">
                      <div className="h-2 w-3/4 rounded bg-zinc-800" />
                      <div className="h-2 w-1/2 rounded bg-zinc-800" />
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        <div className="h-12 rounded-lg bg-zinc-800/80" />
                        <div className="h-12 rounded-lg bg-zinc-800/80" />
                        <div className={`h-12 rounded-lg bg-gradient-to-br ${p.gradient} opacity-60`} />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-zinc-900 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  <div className={`absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br ${p.gradient} blur-2xl opacity-20`} />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${p.gradient} text-white`}>
                      <Icon size={16} />
                    </div>
                    <span className="rounded-full border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-[10px] font-mono tracking-widest text-zinc-400">
                      {p.stats}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-white">{p.title}</h3>
                  <p className="text-xs font-mono tracking-widest text-zinc-500">{p.subtitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400 line-clamp-3">{p.desc}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-zinc-800 px-2.5 py-1 text-[11px] font-medium text-zinc-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-2">
                    <a
                      href={p.link}
                      target="_blank"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-white text-zinc-900 px-4 py-2.5 text-sm font-medium hover:bg-zinc-100 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Ver na Vercel
                    </a>
                    <a
                      href={(p as any).github}
                      target="_blank"
                      className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 relative overflow-hidden rounded-[24px] border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 md:p-10"
        >
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-600/20 blur-3xl" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white">Tem uma ideia escalável?</h3>
              <p className="mt-2 text-sm text-zinc-400 max-w-[500px]">
                Vamos arquitetar juntos. Do MVP ao sistema distribuído — com foco em performance, observabilidade e código que dura.
              </p>
            </div>
            <a href="#contato" className="shrink-0">
              <GlowButton variant="primary">
                Iniciar conversa
                <ArrowUpRight size={16} />
              </GlowButton>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// -------------------- Contato --------------------
function Contato() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contato" className="relative bg-[#09090b] border-t border-zinc-900 py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12">
          {/* Info */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-mono tracking-widest text-zinc-400">
              <Mail size={12} className="text-cyan-400" />
              CONTATO
            </div>
            <h2 className="mt-4 font-display text-[32px] sm:text-[44px] font-bold leading-none tracking-tight">
              Vamos construir
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                algo impactante.
              </span>
            </h2>
            <p className="mt-4 max-w-[520px] text-sm leading-relaxed text-zinc-400">
              Aberto a projetos desafiadores, colaborações globais e oportunidades onde arquitetura importa. Resposta em até
              24h.
            </p>

            <div className="mt-8 space-y-3">
              {[
                { icon: Mail, label: "E-mail", value: "arthurknf@gmail.com", href: "mailto:arthurknf@gmail.com" },
                { icon: Github, label: "GitHub", value: "github.com/Arthurmt15", href: "https://github.com/Arthurmt15" },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/arthur", href: "https://linkedin.com" },
              ].map((contact) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    className="group flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-4 hover:border-zinc-700 hover:bg-zinc-800/50 transition-colors"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
                      <Icon size={18} className="text-zinc-300" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-mono tracking-widest text-zinc-500">{contact.label}</div>
                      <div className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors">
                        {contact.value}
                      </div>
                    </div>
                    <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                { label: "Resposta rápida", icon: Check },
                { label: "Código limpo garantido", icon: Check },
                { label: "Foco em escala", icon: Check },
              ].map((item) => (
                <span key={item.label} className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 text-xs font-medium text-emerald-300">
                  <item.icon size={12} />
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          {/* Form - OriginKit style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[24px] border border-zinc-800 bg-zinc-900 p-6 sm:p-8"
          >
            <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            <h3 className="text-lg font-semibold text-white">Envie uma mensagem</h3>
            <p className="mt-1 text-sm text-zinc-500">Feedback visual com animações Cult-UI • Inputs refinados OriginKit</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="text-xs font-mono tracking-widest text-zinc-500">NOME</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Seu nome"
                  required
                  className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="text-xs font-mono tracking-widest text-zinc-500">E-MAIL</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="seu@email.com"
                  required
                  className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="text-xs font-mono tracking-widest text-zinc-500">MENSAGEM</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Conte sobre seu projeto, stack e desafio..."
                  rows={4}
                  required
                  className="mt-2 w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3.5 text-sm font-medium text-white shadow-[0_0_20px_rgba(6,182,214,0.3)] hover:shadow-[0_0_30px_rgba(6,182,214,0.5)] transition-all flex items-center justify-center gap-2"
              >
                {sent ? (
                  <>
                    <Check size={16} />
                    Mensagem enviada!
                  </>
                ) : (
                  <>
                    Enviar mensagem
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </button>

              <p className="text-center text-xs font-mono text-zinc-600">
                Ao enviar, você concorda com nossa política de privacidade • Resposta em 24h
              </p>
            </form>

            <AnimatePresence>
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300 flex items-center gap-2"
                >
                  <Check size={16} />
                  Obrigado! Retornarei em breve no seu e-mail.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-[#050507] py-10">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400 to-violet-600 grid place-items-center">
              <Terminal size={14} className="text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white font-mono tracking-widest">ARTHUR.DEV</div>
              <div className="text-xs text-zinc-500">Engenharia de Software de Ponta a Ponta • © 2026</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {[
              { icon: Github, href: "https://github.com/Arthurmt15" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Mail, href: "mailto:arthurknf@gmail.com" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-all hover:scale-105"
              >
                <social.icon size={16} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-zinc-900 pt-6 text-xs font-mono text-zinc-600">
          <span>Feito com Next.js + Tailwind • OriginKit • Skiper-UI • Cult-UI • Deploy na Vercel</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Todos os sistemas operacionais
          </span>
        </div>
      </div>
    </footer>
  );
}

// -------------------- Page --------------------
export default function Page() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-cyan-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <SobreMim />
      <Stack />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  );
}
