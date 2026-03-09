"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  ArrowUp,
  Sparkles,
  Megaphone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

const solucoesCards: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Análise Estratégica",
    description:
      "Definimos metas claras e monitoramos os principais indicadores de desempenho para melhorar continuamente resultados. Utilizamos painéis com métricas integradas de marketing e vendas, acompanhando em tempo real taxas de conversão em sites, landing pages e demais canais digitais, o que permite tomar decisões mais precisas e eficazes.",
    icon: TrendingUp,
  },
  {
    title: "Crescimento",
    description:
      "Aplicamos metodologias de crescimento que potencializam resultados e ampliam oportunidades comerciais. Acompanhamos métricas, identificamos melhorias e implementamos iniciativas que aceleram o desenvolvimento de produtos, serviços e canais de venda.",
    icon: ArrowUp,
  },
  {
    title: "Estratégia de Marca",
    description:
      "Trabalhamos para fortalecer a presença das marcas no mercado, destacando seus valores e diferenciais. Criamos identidades consistentes e estratégias que aumentam o reconhecimento e a confiança do público-alvo.",
    icon: Sparkles,
  },
  {
    title: "Comunicação e Identidade",
    description:
      "Desenvolvemos conteúdos estratégicos e soluções visuais que conectam marcas e clientes. Do planejamento editorial à criação de peças criativas, unimos design, storytelling e marketing digital para gerar engajamento, autoridade e experiências memoráveis.",
    icon: Megaphone,
  },
];

const metodologiaItens = [
  {
    titulo: "Método",
    palavra: "MÉTODO",
    texto:
      "Nosso trabalho é conduzido por um processo estruturado, que organiza etapas, define prioridades e garante clareza na execução. Atuamos com planejamento, acompanhamento contínuo e foco em resultados mensuráveis, assegurando consistência em cada entrega e evolução constante ao longo do projeto.",
  },
  {
    titulo: "Planejamento",
    palavra: "PLANEJAMENTO",
    texto:
      "Construímos caminhos claros para o crescimento das marcas, a partir de análise de mercado, posicionamento e definição de metas. Cada decisão é orientada por dados e visão de longo prazo, conectando comunicação, marketing e vendas a objetivos concretos de negócio.",
  },
  {
    titulo: "Competência",
    palavra: "COMPETÊNCIA",
    texto:
      "Contamos com equipe especializada e experiência prática para transformar estratégia em ação. Nossa capacidade técnica permite executar projetos com eficiência, qualidade e integração entre diferentes frentes digitais, garantindo performance sustentável.",
  },
  {
    titulo: "Estrutura",
    palavra: "ESTRUTURA",
    texto:
      "Valorizamos uma organização colaborativa, com processos bem definidos e cultura orientada a resultados. Estimulamos autonomia, inovação e responsabilidade compartilhada, criando um ambiente que favorece alta performance e crescimento contínuo.",
  },
  {
    titulo: "DNA",
    palavra: "DNA",
    texto:
      "Nosso DNA é orientado por resultados e pela evolução contínua. Valorizamos agilidade, colaboração e aprendizado constante para desenvolver estratégias eficientes e gerar impacto real para nossos clientes. Trabalhamos com flexibilidade e consistência para transformar desafios em oportunidades e construir projetos de sucesso.",
  },
];

// Parceiros: logos em SVG inline (sem dependência de arquivos externos)
const cardStyleParceiro: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "1rem 1.5rem",
  border: "1px solid var(--border-light)",
  borderRadius: "6px",
  background: "var(--bg-card)",
  minWidth: "120px",
  height: "72px",
};

const parceiros: { nome: string; src: string; alt: string }[] = [
  {
    nome: "Pizza Prime",
    src: "/logos/logo_pizza_prime.svg",
    alt: "Pizza Prime",
  },
  {
    nome: "Petz",
    src: "/logos/Petz.svg",
    alt: "Petz",
  },
  {
    nome: "Fast Shop",
    src: "/logos/FastShop.svg",
    alt: "Fast Shop",
  },
  {
    nome: "Rede D'Or",
    src: "/logos/logo_rede_dor-21331594.svg",
    alt: "Rede D'Or",
  },
  {
    nome: "Ibis Hotels",
    src: "/logos/hotel-ibis-logo-115294069548cavco4znp.svg",
    alt: "Ibis Hotels",
  },
  {
    nome: "Curitiba",
    src: "/logos/curitiba.jpeg",
    alt: "Curitiba",
  },
  {
    nome: "Club",
    src: "/logos/club.jpeg",
    alt: "Club",
  },
  {
    nome: "7Place",
    src: "/logos/7place.jpeg",
    alt: "7Place",
  },
];

function ParceiroCard({ p }: { p: (typeof parceiros)[number] }) {
  return (
    <div
      className="card-parceiro"
      style={{
        ...cardStyleParceiro,
        filter: "grayscale(100%)",
        transition: "filter 0.3s ease, border-color 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.filter = "grayscale(0%)";
        e.currentTarget.style.borderColor = "var(--crimson)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.filter = "grayscale(100%)";
        e.currentTarget.style.borderColor = "var(--border-light)";
      }}
    >
      <img
        src={p.src}
        alt={p.alt}
        style={{
          maxWidth: "120px",
          maxHeight: "50px",
          objectFit: "contain",
          display: "block",
        }}
      />
    </div>
  );
}

export default function Home() {
  const [ativo, setAtivo] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const irPara = (index: number) => {
    setAtivo(index);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setAtivo((prev) => (prev + 1) % metodologiaItens.length);
    }, 3000);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setAtivo((prev) => (prev + 1) % metodologiaItens.length);
    }, 3000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <>
      {/* Hero — imagem fullscreen com texto embutido */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          overflow: "hidden",
        }}
        className="hero-section"
      >
        {/* Imagem de fundo fullscreen */}
        <img
          src={`/logos/${encodeURIComponent("NÓS CRIAMOS A EVOLUÇÃO-2.png")}`}
          alt="Nós Criamos a Evolução"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            zIndex: 0,
          }}
          className="hero-image"
        />

        {/* Overlay gradiente sutil para fundir com o site */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              "linear-gradient(to bottom, transparent 60%, rgba(236,234,230,0.95) 100%)",
          }}
          aria-hidden
        />

        {/* Texto sobreposto - NÓS CRIAMOS A EVOLUÇÃO */}
        <div
          style={{
            position: "absolute",
            top: "52%",
            left: "5%",
            zIndex: 2,
            pointerEvents: "none",
          }}
          className="hero-text-overlay"
        >
          {/* Linha decorativa */}
          <div
            style={{
              width: "48px",
              height: "3px",
              background: "#7D2B2B",
              marginBottom: "1rem",
              borderRadius: "2px",
            }}
          />

          {/* NÓS CRIAMOS */}
          <div
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#2C2825",
              marginBottom: "0.15em",
            }}
          >
            NÓS CRIAMOS
          </div>

          {/* A EVOLUÇÃO — em bordô */}
          <div
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#7D2B2B",
            }}
          >
            A EVOLUÇÃO
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            .hero-section {
              min-height: 60vh !important;
            }
            .hero-image {
              object-position: left center !important;
            }
            .hero-text-overlay {
              top: 55% !important;
              left: 4% !important;
            }
            .hero-text-overlay > div:nth-child(2),
            .hero-text-overlay > div:nth-child(3) {
              font-size: clamp(1.4rem, 6vw, 2.2rem) !important;
            }
          }
        `}</style>
      </section>

      {/* Separador */}
      <div className="section-separator" aria-hidden />

      {/* Soluções — tag vertical, título, 4 cards */}
      <section
        id="solucoes"
        className="relative overflow-x-hidden overflow-y-visible py-12 md:py-20 lg:py-28"
        style={{ background: "var(--bg-main)" }}
      >
        <div className="mx-auto max-w-7xl overflow-x-hidden px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden shrink-0 lg:block"
              aria-hidden
            >
              <span
                className="text-sm font-semibold tracking-[0.2em]"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed", color: "var(--crimson)" }}
              >
                {"//SOLUÇÕES"}
              </span>
            </motion.div>

            <div className="min-w-0 flex-1 overflow-x-hidden">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest lg:hidden" style={{ color: "var(--crimson)" }}>
                  {"//SOLUÇÕES"}
                </p>
                <h2
                  className="mt-3 border-l-4 pl-4 font-bold uppercase tracking-tight"
                  style={{
                    fontSize: "clamp(1.6rem, 5vw, 3rem)",
                    wordBreak: "break-word",
                    lineHeight: 1.2,
                    borderColor: "var(--crimson)",
                    color: "var(--text-primary)",
                  }}
                >
                  Crescimento exige estratégia
                </h2>
                <p className="mt-4 max-w-2xl leading-relaxed" style={{ color: "var(--text-secondary)", fontSize: "clamp(0.9rem, 2vw, 1.05rem)" }}>
                  Nossas soluções propõem uma nova forma de pensar, criar e gerar
                  resultados de alto impacto para o mundo em constante
                  transformação.
                </p>
                <div className="mt-8">
                  <Link
                    href="/solucoes-estrategicas"
                    className="inline-flex items-center justify-center rounded px-5 py-3 text-sm font-semibold uppercase tracking-wider shadow-md transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--crimson)] focus:ring-offset-2 focus:ring-offset-[var(--bg-main)]"
                    style={{ background: "var(--crimson)", color: "var(--text-light)", minHeight: "44px" }}
                  >
                    Conheça nossas soluções
                  </Link>
                </div>
              </motion.div>

              {/* Grid responsivo: 1 col mobile, 2 cols tablet, 4 cols desktop */}
              <div className="mt-12 lg:mt-14">
                <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                  {solucoesCards.map((card, index) => (
                    <motion.li
                      key={card.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.08,
                      }}
                    >
                      <div style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid #D8D4CE", background: "#F2F0EC", display: "flex", flexDirection: "column", height: "100%", padding: 0 }}>
                        {/* Imagem do card */}
                        <div style={{
                          position: "relative",
                          width: "100%",
                          height: "180px",
                          overflow: "hidden",
                          borderRadius: "8px 8px 0 0",
                          flexShrink: 0,
                          display: "block",
                        }}>
                          <img
                            src={
                              card.title === "Análise Estratégica"
                                ? "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
                                : card.title === "Crescimento"
                                ? "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
                                : card.title === "Estratégia de Marca"
                                ? "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&h=400&fit=crop"
                                : "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=400&fit=crop"
                            }
                            alt={card.title}
                            style={{
                              position: "absolute",
                              inset: 0,
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              objectPosition: "center",
                              display: "block",
                            }}
                          />
                        </div>
                        {/* Conteúdo com padding */}
                        <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
                          <div className="flex shrink-0 justify-center">
                            <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full transition-colors group-hover:bg-[var(--crimson)] group-hover:text-white" style={{ backgroundColor: "rgba(125,43,43,0.1)", color: "var(--crimson)" }}>
                              <card.icon className="h-8 w-8 sm:h-10 sm:w-10 glow-crimson" />
                            </div>
                          </div>
                          <h3 className="mt-4 text-base sm:text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
                            {card.title}
                          </h3>
                          <p
                            className="mt-3 leading-relaxed"
                            style={{ color: "var(--text-secondary)", fontSize: "clamp(0.85rem, 1.5vw, 1rem)" }}
                          >
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parceiros — marquee infinito de logos */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-parceiros {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
      <section
        id="parceiros"
        className="relative overflow-hidden py-12 md:py-20 lg:py-28"
        style={{ background: "var(--bg-section)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden shrink-0 lg:block"
              aria-hidden
            >
              <span
                className="text-sm font-semibold tracking-[0.2em]"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed", color: "var(--crimson)" }}
              >
                {"//PARCEIROS"}
              </span>
            </motion.div>

            <div className="min-w-0 flex-1 overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest lg:hidden" style={{ color: "var(--crimson)" }}>
                  {"//PARCEIROS"}
                </p>
                <h2 className="mt-3 font-bold uppercase tracking-tight" style={{ color: "var(--text-primary)", fontSize: "clamp(1.4rem, 3.5vw, 2.5rem)" }}>
                  Marcas que estão evoluindo conosco
                </h2>
              </motion.div>

              <div
                className="mt-10 overflow-x-auto pb-4 parceiros-scroll lg:mt-12 lg:overflow-hidden lg:pb-0"
                aria-label="Parceiros"
              >
                <div
                  className="flex w-max gap-6 sm:gap-8 lg:gap-10"
                  style={{ animation: "marquee-parceiros 40s linear infinite" }}
                >
                  {[...parceiros, ...parceiros].map((p, i) => (
                    <div key={`${p.nome}-${i}`} className="shrink-0" role="img" aria-label={p.nome}>
                      <ParceiroCard p={p} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separador */}
      <div className="section-separator" aria-hidden />

      {/* Ecossistema de Serviços — tag + título à esquerda, texto à direita, grid 3 imagens */}
      <section
        id="servicos"
        className="py-12 md:py-20 lg:py-28"
        style={{ background: "var(--bg-main)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="hidden shrink-0 lg:block"
                aria-hidden
              >
                <span
                className="text-sm font-semibold tracking-[0.2em]"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed", color: "var(--crimson)" }}
              >
                {"//SERVIÇOS"}
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="min-w-0"
              >
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest lg:hidden" style={{ color: "var(--crimson)" }}>
                  {"//SERVIÇOS"}
                </p>
                <h2 className="mt-3 border-l-4 pl-4 font-bold uppercase tracking-tight" style={{ borderColor: "var(--crimson)", color: "var(--text-primary)", fontSize: "clamp(1.4rem, 3.5vw, 2.5rem)" }}>
                  Ecossistema de serviços
                </h2>
                <div className="mt-6">
                  <Link
                    href="/nossas-atividades"
                    className="inline-flex items-center justify-center rounded border-2 bg-transparent px-5 py-3 text-sm font-semibold uppercase tracking-wider transition-all hover:bg-[var(--crimson)] hover:text-[var(--text-light)] focus:outline-none focus:ring-2 focus:ring-[var(--crimson)] focus:ring-offset-2 focus:ring-offset-[var(--bg-main)]"
                    style={{ borderColor: "var(--crimson)", color: "var(--crimson)", minHeight: "44px" }}
                  >
                    O que fazemos
                  </Link>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-start lg:pt-2"
            >
              <p className="leading-relaxed" style={{ color: "var(--text-secondary)", fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)" }}>
                Entendemos o mercado e as tendências para gerar soluções
                assertivas. Nossos serviços envolvem planejamento, produção,
                análise e otimização de todos os processos de marketing e vendas.
              </p>
            </motion.div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6 lg:mt-16">
            {[
              {
                src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=500&fit=crop",
                alt: "Ecossistema de serviços - Imagem 1",
              },
              {
                src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop",
                alt: "Ecossistema de serviços - Imagem 2",
              },
              {
                src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=500&fit=crop",
                alt: "Ecossistema de serviços - Imagem 3",
              },
            ].map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: "1px solid #D8D4CE",
                  background: "transparent",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{
                  position: "relative",
                  width: "100%",
                  height: "300px",
                  overflow: "hidden",
                  borderRadius: "8px 8px 0 0",
                  flexShrink: 0,
                  display: "block",
                }}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      display: "block",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Separador */}
      <div className="section-separator" aria-hidden />

      {/* Metodologia — seção escura para contraste */}
      <section
        id="metodologia"
        style={{ background: "#2A1F1F", padding: "clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 4rem)", overflow: "hidden" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* TAG LATERAL */}
          <span
            className="hidden md:block"
            style={{
              writingMode: "vertical-rl",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              color: "#7D2B2B",
              marginBottom: "2rem",
              display: "block",
            }}
          >
            {"//METODOLOGIAS"}
          </span>

          {/* TAG MOBILE */}
          <span
            className="block md:hidden text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#7D2B2B" }}
          >
            {"//METODOLOGIAS"}
          </span>

          {/* GRID PRINCIPAL — 1 coluna mobile, 2 colunas desktop */}
          <div
            className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-8 md:gap-8"
            style={{
              alignItems: "start",
            }}
          >
            {/* COLUNA ESQUERDA */}
            <div style={{ minWidth: 0, overflow: "visible", width: "100%" }}>
              {/* PALAVRA GRANDE — sem gradient, usa cor sólida, NUNCA quebra linha */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={ativo}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    fontSize: "clamp(1.5rem, 4vw, 4rem)",
                    fontWeight: 900,
                    lineHeight: 1,
                    color: "#7D2B2B",
                    textShadow: "2px 2px 0px #5C1F1F",
                    letterSpacing: "-0.02em",
                    marginBottom: "2rem",
                    whiteSpace: "nowrap",
                    width: "fit-content",
                    maxWidth: "100%",
                    display: "block",
                    transform: "scaleX(1)",
                  }}
                >
                  {metodologiaItens[ativo].palavra}
                </motion.div>
              </AnimatePresence>

              {/* TEXTO */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`texto-${ativo}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    color: "#C4BFB8",
                    lineHeight: 1.8,
                    fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
                    maxWidth: "560px",
                  }}
                >
                  {metodologiaItens[ativo].texto}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* COLUNA DIREITA — menu */}
            <div style={{ paddingTop: "0.5rem" }}>
              {metodologiaItens.map((item, index) => (
                <div
                  key={index}
                  onClick={() => irPara(index)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem 0",
                    cursor: "pointer",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    transition: "all 0.3s",
                    minHeight: "44px",
                  }}
                >
                  <div
                    style={{
                      width: index === ativo ? "40px" : "20px",
                      height: "2px",
                      background: index === ativo ? "#7D2B2B" : "#3D2525",
                      transition: "all 0.3s",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      color: index === ativo ? "#B07070" : "#6B5555",
                      fontWeight: index === ativo ? 600 : 400,
                      fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
                      transition: "all 0.3s",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {item.titulo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
