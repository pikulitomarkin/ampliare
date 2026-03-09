"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
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

const parceiros: { nome: string; logo?: string; svg: React.ReactNode }[] = [
  {
    nome: "Pizza Prime",
    svg: (
      <svg viewBox="0 0 200 60" style={{ width: "140px", height: "45px" }}>
        <text x="100" y="28" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="18" fontWeight="900" fill="#2C2825">
          PIZZA
        </text>
        <text x="100" y="52" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="18" fontWeight="900" fill="#2C2825">
          PRIME
        </text>
      </svg>
    ),
  },
  {
    nome: "Petz",
    logo: "/logos/Petz.svg",
    svg: (
      <svg viewBox="0 0 160 60" style={{ width: "120px", height: "45px" }}>
        <text x="80" y="42" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="32" fontWeight="900" fill="#2C2825">
          Petz
        </text>
      </svg>
    ),
  },
  {
    nome: "Fast Shop",
    logo: "/logos/FastShop.svg",
    svg: (
      <svg viewBox="0 0 180 60" style={{ width: "140px", height: "45px" }}>
        <text x="90" y="32" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="20" fontWeight="900" fill="#2C2825">
          FAST
        </text>
        <text x="90" y="54" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="13" fill="#5A524E" letterSpacing="4">
          SHOP
        </text>
      </svg>
    ),
  },
  {
    nome: "Rede D'Or",
    svg: (
      <svg viewBox="0 0 180 60" style={{ width: "140px", height: "45px" }}>
        <text x="90" y="32" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="18" fontWeight="900" fill="#2C2825">
          REDE
        </text>
        <text x="90" y="54" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="13" fill="#5A524E">
          D&apos;OR
        </text>
      </svg>
    ),
  },
  {
    nome: "Ibis Hotels",
    svg: (
      <svg viewBox="0 0 200 60" style={{ width: "140px", height: "45px" }}>
        <text x="100" y="32" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="22" fontWeight="900" fill="#2C2825">
          Ibis
        </text>
        <text x="100" y="54" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fill="#5A524E">
          Hotels
        </text>
      </svg>
    ),
  },
];

function ParceiroCard({ p }: { p: (typeof parceiros)[number] }) {
  const [imgFailed, setImgFailed] = useState(false);
  const useImg = p.logo && !imgFailed;
  return (
    <div className="card-parceiro" style={cardStyleParceiro}>
      {useImg ? (
        <img
          src={p.logo}
          alt={p.nome}
          style={{
            maxHeight: "48px",
            width: "auto",
            maxWidth: "120px",
            objectFit: "contain",
            filter: "grayscale(100%)",
            transition: "filter 0.3s ease",
          }}
          onError={() => setImgFailed(true)}
          onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
          onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(100%)")}
        />
      ) : (
        p.svg
      )}
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
      {/* Hero — imagem fullscreen + overlay + conteúdo */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--bg-main)",
        }}
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
            objectPosition: "center",
            zIndex: 0,
          }}
        />

        {/* Overlay gradiente sobre a imagem para profundidade */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background: `
              linear-gradient(to bottom,
                rgba(15,8,8,0.3) 0%,
                rgba(15,8,8,0.1) 40%,
                rgba(15,8,8,0.5) 70%,
                rgba(15,8,8,0.95) 100%
              ),
              linear-gradient(to right,
                rgba(15,8,8,0.6) 0%,
                transparent 50%,
                rgba(15,8,8,0.3) 100%
              )
            `,
          }}
          aria-hidden
        />

        {/* Conteúdo sobre a imagem */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "2rem",
          }}
        >
          {/* Espaço para tagline ou CTA se necessário */}
        </div>
      </section>

      {/* Separador */}
      <div className="section-separator" aria-hidden />

      {/* Soluções — tag vertical, título, 4 cards */}
      <section
        id="solucoes"
        className="relative overflow-x-hidden overflow-y-visible py-16 sm:py-20 lg:py-24"
        style={{ background: "var(--bg-main)" }}
      >
        <div className="mx-auto max-w-7xl overflow-x-hidden px-6 md:px-8 lg:px-16">
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
                <p className="text-sm font-semibold uppercase tracking-widest lg:sr-only" style={{ color: "var(--crimson)" }}>
                  {"//SOLUÇÕES"}
                </p>
                <h2
                  className="mt-3 border-l-4 pl-4 font-bold uppercase tracking-tight"
                  style={{
                    fontSize: "clamp(1.6rem, 4vw, 3rem)",
                    wordBreak: "break-word",
                    lineHeight: 1.2,
                    borderColor: "var(--crimson)",
                    color: "var(--text-primary)",
                  }}
                >
                  Crescimento exige estratégia
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed sm:text-lg" style={{ color: "var(--text-secondary)" }}>
                  Nossas soluções propõem uma nova forma de pensar, criar e gerar
                  resultados de alto impacto para o mundo em constante
                  transformação.
                </p>
                <div className="mt-8">
                  <Link
                    href="/solucoes-estrategicas"
                    className="inline-flex items-center justify-center rounded px-5 py-2.5 text-sm font-semibold uppercase tracking-wider shadow-md transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--crimson)] focus:ring-offset-2 focus:ring-offset-[var(--bg-main)]"
                    style={{ background: "var(--crimson)", color: "var(--text-light)" }}
                  >
                    Conheça nossas soluções
                  </Link>
                </div>
              </motion.div>

              {/* Grid responsivo: 1 col mobile, 2 cols tablet, 4 cols desktop */}
              <div className="mt-12 lg:mt-14">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                      <div className="card-light group flex h-full flex-col rounded-xl border p-4 lg:p-6" style={{ borderColor: "var(--border-light)", backgroundColor: "var(--bg-card)" }}>
                        <div className="flex shrink-0 justify-center">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full transition-colors group-hover:bg-[var(--crimson)] group-hover:text-white" style={{ backgroundColor: "rgba(125,43,43,0.1)", color: "var(--crimson)" }}>
                            <card.icon className="h-10 w-10 glow-crimson" size={40} />
                          </div>
                        </div>
                        <h3 className="mt-4 text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
                            {card.title}
                          </h3>
                          <p
                            className="mt-3 leading-relaxed"
                            style={{ color: "var(--text-secondary)", fontSize: "clamp(0.85rem, 2vw, 1rem)" }}
                          >
                          {card.description}
                        </p>
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
        className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
        style={{ background: "var(--bg-section)" }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-16">
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
                <p className="text-sm font-semibold uppercase tracking-widest text-[#7D2B2B] lg:sr-only">
                  {"//PARCEIROS"}
                </p>
                <h2 className="mt-3 text-responsive-h2 font-bold uppercase tracking-tight" style={{ color: "var(--text-primary)" }}>
                  Marcas que estão evoluindo conosco
                </h2>
              </motion.div>

              <div
                className="mt-10 overflow-x-auto pb-4 scrollbar-hide lg:mt-12 lg:overflow-hidden lg:pb-0"
                style={{ scrollbarWidth: "none" }}
                aria-label="Parceiros"
              >
                <div
                  className="flex w-max gap-8 sm:gap-10"
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
        className="py-16 sm:py-20 lg:py-24"
        style={{ background: "var(--bg-main)" }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-16">
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
                <p className="text-sm font-semibold uppercase tracking-widest lg:sr-only" style={{ color: "var(--crimson)" }}>
                  {"//SERVIÇOS"}
                </p>
                <h2 className="mt-3 border-l-4 pl-4 text-2xl font-bold uppercase tracking-tight sm:text-3xl lg:text-4xl" style={{ borderColor: "var(--crimson)", color: "var(--text-primary)" }}>
                  Ecossistema de serviços
                </h2>
                <div className="mt-6">
                  <Link
                    href="/nossas-atividades"
                    className="inline-flex items-center justify-center rounded border-2 bg-transparent px-5 py-2.5 text-sm font-semibold uppercase tracking-wider transition-all hover:bg-[var(--crimson)] hover:text-[var(--text-light)] focus:outline-none focus:ring-2 focus:ring-[var(--crimson)] focus:ring-offset-2 focus:ring-offset-[var(--bg-main)]"
                    style={{ borderColor: "var(--crimson)", color: "var(--crimson)" }}
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
              <p className="text-base leading-relaxed sm:text-lg" style={{ color: "var(--text-secondary)" }}>
                Entendemos o mercado e as tendências para gerar soluções
                assertivas. Nossos serviços envolvem planejamento, produção,
                análise e otimização de todos os processos de marketing e vendas.
              </p>
            </motion.div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8 lg:mt-16">
            {[
              {
                src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
                alt: "Reunião de estratégia em agência",
              },
              {
                src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
                alt: "Equipe trabalhando em projeto digital",
              },
              {
                src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
                alt: "Apresentação e análise de dados",
              },
            ].map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative h-[400px] overflow-hidden rounded-xl border shadow-sm"
                style={{ borderColor: "var(--border-light)" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
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
        style={{ background: "#2A1F1F", padding: "6rem 0", overflow: "hidden" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          {/* TAG LATERAL */}
          <span
            style={{
              writingMode: "vertical-rl",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              color: "#7D2B2B",
              marginBottom: "2rem",
              display: "block",
            }}
          >
            //METODOLOGIAS
          </span>

          {/* GRID PRINCIPAL — proporção 55/45 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "55% 45%",
              gap: "2rem",
              alignItems: "start",
            }}
          >
            {/* COLUNA ESQUERDA */}
            <div style={{ overflow: "visible", minWidth: 0 }}>
              {/* PALAVRA GRANDE — sem gradient, usa cor sólida */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={ativo}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    fontSize: "clamp(2rem, 5.5vw, 4.5rem)",
                    fontWeight: 900,
                    lineHeight: 1,
                    color: "#7D2B2B",
                    textShadow: "2px 2px 0px #5C1F1F",
                    letterSpacing: "-0.02em",
                    marginBottom: "2rem",
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                    width: "100%",
                    display: "block",
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
                    fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
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
                      fontSize: "0.95rem",
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
