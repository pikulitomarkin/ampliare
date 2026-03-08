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
  border: "1px solid #2A2A2A",
  borderRadius: "6px",
  background: "#111111",
  minWidth: "120px",
  height: "72px",
};

const parceiros: { nome: string; logo?: string; svg: React.ReactNode }[] = [
  {
    nome: "Pizza Prime",
    svg: (
      <svg viewBox="0 0 200 60" style={{ width: "140px", height: "45px" }}>
        <text x="100" y="28" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="18" fontWeight="900" fill="#F0EDE8">
          PIZZA
        </text>
        <text x="100" y="52" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="18" fontWeight="900" fill="#F0EDE8">
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
        <text x="80" y="42" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="32" fontWeight="900" fill="#F0EDE8">
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
        <text x="90" y="32" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="20" fontWeight="900" fill="#F0EDE8">
          FAST
        </text>
        <text x="90" y="54" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="13" fill="#A8A8A8" letterSpacing="4">
          SHOP
        </text>
      </svg>
    ),
  },
  {
    nome: "Rede D'Or",
    svg: (
      <svg viewBox="0 0 180 60" style={{ width: "140px", height: "45px" }}>
        <text x="90" y="32" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="18" fontWeight="900" fill="#F0EDE8">
          REDE
        </text>
        <text x="90" y="54" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="13" fill="#A8A8A8">
          D&apos;OR
        </text>
      </svg>
    ),
  },
  {
    nome: "Ibis Hotels",
    svg: (
      <svg viewBox="0 0 200 60" style={{ width: "140px", height: "45px" }}>
        <text x="100" y="32" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="22" fontWeight="900" fill="#F0EDE8">
          Ibis
        </text>
        <text x="100" y="54" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fill="#A8A8A8">
          Hotels
        </text>
      </svg>
    ),
  },
];

const heroVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

function ParceiroCard({ p }: { p: (typeof parceiros)[number] }) {
  const [imgFailed, setImgFailed] = useState(false);
  const useImg = p.logo && !imgFailed;
  return (
    <div style={cardStyleParceiro}>
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
      {/* Hero — imagem "Nós Criamos a Evolução" + fundo dark premium */}
      <section
        className="overflow-hidden"
        style={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          background: `
    radial-gradient(ellipse 90% 70% at 50% 0%, rgba(125,43,43,0.18) 0%, transparent 55%),
    radial-gradient(ellipse 60% 50% at 0% 30%, rgba(101,54,20,0.22) 0%, transparent 50%),
    radial-gradient(ellipse 50% 40% at 100% 60%, rgba(125,43,43,0.15) 0%, transparent 50%),
    radial-gradient(ellipse 80% 40% at 50% 100%, rgba(60,25,10,0.3) 0%, transparent 60%),
    linear-gradient(170deg, #1a0f0f 0%, #120c0c 25%, #0e0a0a 50%, #150d0d 75%, #1a0f0f 100%)
  `,
        }}
      >
        {/* Camada 1: Textura noise sutil */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            opacity: 0.35,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
            pointerEvents: "none",
          }}
          aria-hidden
        />
        {/* Camada 2: Linhas diagonais decorativas sutis */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            backgroundImage: `repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 60px,
    rgba(125,43,43,0.03) 60px,
    rgba(125,43,43,0.03) 61px
  )`,
            pointerEvents: "none",
          }}
          aria-hidden
        />
        {/* Camada 3: Glow bordô superior */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            zIndex: 4,
            background:
              "linear-gradient(90deg, transparent 0%, #7D2B2B 20%, #C8603A 50%, #7D2B2B 80%, transparent 100%)",
            boxShadow:
              "0 0 20px rgba(125,43,43,0.8), 0 0 40px rgba(125,43,43,0.4)",
          }}
          aria-hidden
        />
        {/* Camada 4: Glow bordô inferior */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "2px",
            zIndex: 4,
            background:
              "linear-gradient(90deg, transparent 0%, #7D2B2B 30%, #9B4B2B 50%, #7D2B2B 70%, transparent 100%)",
          }}
          aria-hidden
        />
        {/* Camada 5: Círculo de luz quente à esquerda (reduzido no mobile) */}
        <div
          className="hero-glow-left"
          style={{
            position: "absolute",
            top: "20%",
            zIndex: 1,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(125,43,43,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
          aria-hidden
        />
        {/* Camada 6: Círculo de luz fria (cinza) à direita (reduzido no mobile) */}
        <div
          className="hero-glow-right"
          style={{
            position: "absolute",
            bottom: "10%",
            zIndex: 1,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(107,107,107,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
          aria-hidden
        />

        <div
          className="mx-auto max-w-7xl px-6 pt-24 pb-0 md:px-8 md:pt-28 lg:px-16 lg:pt-32"
          style={{ position: "relative", zIndex: 3 }}
        >
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={heroVariants}
            style={{ position: "relative", zIndex: 3 }}
          >
            <img
              src={`/logos/${encodeURIComponent("NÓS CRIAMOS A EVOLUÇÃO-2.png")}`}
              alt="Nós Criamos a Evolução"
              style={{
                width: "100%",
                maxWidth: "900px",
                height: "auto",
                objectFit: "cover",
                borderRadius: "4px",
                position: "relative",
                zIndex: 3,
                boxShadow:
                  "0 0 80px rgba(125,43,43,0.25), 0 0 160px rgba(80,30,10,0.15)",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Soluções — tag vertical, título, 4 cards (conteúdo direto após o vídeo) */}
      <section
        id="solucoes"
        className="relative overflow-x-hidden overflow-y-visible bg-[#0a0a0a] py-16 sm:py-20 lg:py-24"
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
                className="text-sm font-semibold tracking-[0.2em] text-[#7D2B2B]"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
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
                <p className="text-sm font-semibold uppercase tracking-widest text-[#7D2B2B] lg:sr-only">
                  {"//SOLUÇÕES"}
                </p>
                <h2
                  className="mt-3 border-l-4 border-[#7D2B2B] pl-4 font-bold uppercase tracking-tight text-[#F0EDE8]"
                  style={{
                    fontSize: "clamp(1.6rem, 4vw, 3rem)",
                    wordBreak: "break-word",
                    lineHeight: 1.2,
                  }}
                >
                  Crescimento exige estratégia
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#A8A8A8] sm:text-lg">
                  Nossas soluções propõem uma nova forma de pensar, criar e gerar
                  resultados de alto impacto para o mundo em constante
                  transformação.
                </p>
                <div className="mt-8">
                  <Link
                    href="/solucoes-estrategicas"
                    className="inline-flex items-center justify-center rounded bg-[#7D2B2B] px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#9B3535] hover:shadow-crimson focus:outline-none focus:ring-2 focus:ring-[#7D2B2B] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
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
                      <div className="group flex h-full flex-col rounded-xl border border-[#2A2A2A] bg-[#111111] p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#7D2B2B] hover:shadow-crimson-sm lg:p-6">
                        <div className="flex shrink-0 justify-center">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#7D2B2B]/20 text-[#7D2B2B] transition-colors group-hover:bg-[#7D2B2B]/30">
                            <card.icon className="h-10 w-10 glow-crimson" size={40} />
                          </div>
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-[#F0EDE8]">
                          {card.title}
                        </h3>
                        <p
                          className="mt-3 leading-relaxed text-[#A8A8A8]"
                          style={{ fontSize: "clamp(0.85rem, 2vw, 1rem)" }}
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
        className="relative overflow-hidden bg-[#0a0a0a] py-16 sm:py-20 lg:py-24"
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
                className="text-sm font-semibold tracking-[0.2em] text-[#7D2B2B]"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
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
                <h2 className="mt-3 text-responsive-h2 font-bold uppercase tracking-tight text-[#F0EDE8]">
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

      {/* Ecossistema de Serviços — tag + título à esquerda, texto à direita, grid 3 imagens */}
      <section
        id="servicos"
        className="bg-[#111111] py-16 sm:py-20 lg:py-24"
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
                  className="text-sm font-semibold tracking-[0.2em] text-[#7D2B2B]"
                  style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
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
                <p className="text-sm font-semibold uppercase tracking-widest text-[#7D2B2B] lg:sr-only">
                  {"//SERVIÇOS"}
                </p>
                <h2 className="mt-3 border-l-4 border-[#7D2B2B] pl-4 text-2xl font-bold uppercase tracking-tight text-[#F0EDE8] sm:text-3xl lg:text-4xl">
                  Ecossistema de serviços
                </h2>
                <div className="mt-6">
                  <Link
                    href="/nossas-atividades"
                    className="inline-flex items-center justify-center rounded border-2 border-[#7D2B2B] bg-transparent px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-[#7D2B2B] transition-all hover:bg-[#7D2B2B] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#7D2B2B] focus:ring-offset-2 focus:ring-offset-[#111111]"
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
              <p className="text-base leading-relaxed text-[#A8A8A8] sm:text-lg">
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
                className="relative h-[400px] overflow-hidden rounded-xl border border-[#2A2A2A] shadow-sm"
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

      {/* Metodologia — animação rotativa: palavra + texto (esquerda), menu clicável (direita) */}
      <section
        id="metodologia"
        className="relative overflow-hidden bg-[#0a0a0a] py-16 sm:py-20 lg:py-24"
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
                className="text-sm font-semibold tracking-[0.2em] text-[#7D2B2B]"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              >
                {"//METODOLOGIAS"}
              </span>
            </motion.div>

            <div className="grid min-w-0 flex-1 grid-cols-1 gap-10 md:grid-cols-2 lg:gap-16">
              {/* Coluna esquerda: palavra grande + texto */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-sm font-semibold uppercase tracking-widest text-[#7D2B2B] lg:sr-only">
                  {"//METODOLOGIAS"}
                </p>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={ativo}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      fontSize: "clamp(2rem, 8vw, 6rem)",
                      fontWeight: 900,
                      background: "linear-gradient(135deg, #7D2B2B, #6B6B6B)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      lineHeight: 1,
                      marginBottom: "2rem",
                    }}
                  >
                    {metodologiaItens[ativo].palavra}
                  </motion.div>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={ativo}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ color: "#A8A8A8", lineHeight: 1.8, fontSize: "1rem" }}
                  >
                    {metodologiaItens[ativo].texto}
                  </motion.p>
                </AnimatePresence>
              </motion.div>

              {/* Coluna direita: menu clicável — horizontal scroll no mobile, lista no desktop */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide md:flex-col md:overflow-visible md:gap-0 md:pb-0"
                style={{ scrollbarWidth: "none" }}
              >
                {metodologiaItens.map((item, index) => (
                  <div
                    key={item.titulo}
                    onClick={() => irPara(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        irPara(index);
                      }
                    }}
                    className="shrink-0 md:shrink"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "0.75rem 0",
                      cursor: "pointer",
                      borderBottom: "1px solid #1a1a1a",
                      transition: "all 0.3s",
                    }}
                  >
                    <div
                      style={{
                        width: index === ativo ? "40px" : "20px",
                        height: "2px",
                        background: index === ativo ? "#7D2B2B" : "#333",
                        transition: "all 0.3s",
                      }}
                    />
                    <span
                      style={{
                        color: index === ativo ? "#7D2B2B" : "#6B6B6B",
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
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
