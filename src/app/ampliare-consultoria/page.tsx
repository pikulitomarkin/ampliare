"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

// Nosso Foco — imagens de serviços (pasta /public/site/ vazia; usando Unsplash)
const focoCards = [
  {
    imagem: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    legenda: "Análise Estratégica",
  },
  {
    imagem: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=600&q=80",
    legenda: "Marketing & Performance",
  },
  {
    imagem: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
    legenda: "Criação de Campanhas",
  },
  {
    imagem: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    legenda: "Soluções Digitais & IA",
  },
];

const marcosTimeline = [
  {
    year: "2021",
    label:
      "Início da atuação em projetos de consultoria nas áreas de estratégia, marketing e desenvolvimento de negócios.",
  },
  {
    year: "2022",
    label:
      "Ampliação da base de clientes e evolução das soluções voltadas à estruturação comercial e crescimento empresarial.",
  },
  {
    year: "2024",
    label:
      "Estruturação da Ampliare Consultoria e consolidação da atuação em marketing, vendas e transformação digital.",
  },
  {
    year: "2026",
    label:
      "Expansão das iniciativas de consultoria e fortalecimento do apoio estratégico a empresas em crescimento.",
  },
];

const contadores = [
  { valor: 5, sufixo: "+", label: "anos de experiência na área" },
  { valor: 400, sufixo: "+", label: "empresas atendidas" },
  { valor: 700, sufixo: "+", label: "projetos e iniciativas desenvolvidas" },
];

function ContadorAnimado({
  valor,
  sufixo,
  label,
}: {
  valor: number;
  sufixo: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 40;
    const stepVal = valor / steps;
    const stepMs = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += stepVal;
      if (current >= valor) {
        setCount(valor);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepMs);
    return () => clearInterval(timer);
  }, [inView, valor]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <span className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl" style={{ color: "var(--crimson)" }}>
        {count}
        {sufixo}
      </span>
      <p className="mt-2 text-sm font-medium sm:text-base" style={{ color: "var(--text-secondary)" }}>
        {label}
      </p>
    </motion.div>
  );
}

export default function AmpliareConsultoria() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] overflow-hidden sm:min-h-[55vh]" style={{ background: "var(--bg-header)" }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/hero-ampliare.jpg)" }}
        />
        <div className="absolute inset-0 opacity-70" style={{ background: "var(--bg-header)" }} />
        <div className="relative flex min-h-[50vh] flex-col justify-center px-6 py-20 md:px-8 md:py-24 lg:px-16 sm:min-h-[55vh]">
          <div className="mx-auto max-w-7xl px-6 text-center md:px-8 lg:px-16">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold uppercase tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
              style={{ color: "var(--text-light)" }}
            >
              Nós criamos a evolução
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section className="border-b px-6 py-16 md:px-8 md:py-20 lg:px-16" style={{ borderColor: "var(--border-light)", background: "var(--bg-section)" }}>
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl" style={{ color: "var(--text-primary)" }}>
              Sobre a Ampliare Consultoria
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed sm:text-lg" style={{ color: "var(--text-secondary)" }}>
              Não esperamos que as oportunidades apareçam, nós mesmas as
              criamos. Somos uma consultoria digital que potencializa
              resultados, redefine posicionamentos e transforma a maneira como
              empresas pensam e atuam. Desenvolvemos soluções estratégicas,
              criativas e personalizadas para marketing e vendas, promovendo
              crescimento e inovação em diferentes setores.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Seção Marcos: timeline + contadores + fotos equipe */}
      <section className="px-6 py-16 md:px-8 md:py-20 lg:px-16" style={{ background: "var(--bg-main)" }}>
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl" style={{ color: "var(--text-primary)" }}>
              Marcos da Nossa Trajetória
            </h2>
            <p className="mt-2 text-lg font-semibold" style={{ color: "var(--crimson)" }}>
              Crescendo, inovando e impactando
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Evolução é essencial. No mercado, empresas que não avançam ficam
              para trás. Na Ampliare Consultoria, buscamos constantemente
              desenvolver soluções mais eficazes e inovadoras, garantindo
              resultados significativos e duradouros para nossos clientes.
            </p>
          </motion.div>

          {/* Contadores animados */}
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
            {contadores.map((c) => (
              <ContadorAnimado
                key={c.label}
                valor={c.valor}
                sufixo={c.sufixo}
                label={c.label}
              />
            ))}
          </div>

          {/* Timeline: linha roxa, círculo com número, ano em roxo, texto em cinza */}
          <div className="mt-16">
            <div className="relative max-w-2xl">
              <div
                className="absolute left-[11px] top-2 bottom-2 w-0.5"
                style={{ background: "var(--crimson)" }}
                aria-hidden
              />
              <ul className="space-y-10">
                {marcosTimeline.map((marco, index) => (
                  <motion.li
                    key={`${marco.year}-${index}`}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative flex gap-6 pl-10"
                  >
                    <span
                      className="absolute left-0 top-0.5 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold"
                      style={{ background: "var(--crimson)", color: "var(--text-light)" }}
                      aria-hidden
                    >
                      {index + 1}
                    </span>
                    <div>
                      <span className="font-display text-xl font-bold sm:text-2xl" style={{ color: "var(--crimson)" }}>
                        {marco.year}
                      </span>
                      <p className="mt-2 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        {marco.label}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Nosso Foco — cards de serviços com overlay e legenda no hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h3 className="text-xl font-bold uppercase tracking-wider" style={{ color: "var(--text-primary)" }}>
              Nosso Foco
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {focoCards.map((card, i) => (
                <motion.div
                  key={card.legenda}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative overflow-hidden"
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #D8D4CE",
                    lineHeight: 0,
                    transition: "border-color 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#7D2B2B")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#D8D4CE")}
                >
                  <img
                    src={card.imagem}
                    alt={card.legenda}
                    style={{
                      width: "100%",
                      height: "clamp(180px, 25vw, 240px)",
                      objectFit: "cover",
                      objectPosition: "center",
                      display: "block",
                      margin: 0,
                      padding: 0,
                    }}
                  />
                  {/* Overlay gradiente escuro no hover */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  />
                  {/* Legenda centralizada, visível no hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-center font-semibold text-white drop-shadow-lg">
                      {card.legenda}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção Transformação */}
      <section className="border-t px-6 py-16 md:px-8 md:py-20 lg:px-16" style={{ borderColor: "var(--border-light)", background: "var(--bg-section)" }}>
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl" style={{ color: "var(--text-primary)" }}>
              Transformação Digital Inteligente
            </h2>
            <p className="mt-2 text-lg font-semibold" style={{ color: "var(--crimson)" }}>
              Impulsionando negócios para crescer no ritmo do mundo atual
            </p>
            <p className="mt-6 max-w-3xl text-base leading-relaxed sm:text-lg" style={{ color: "var(--text-secondary)" }}>
              Planejar, analisar dados e estruturar estratégias eficazes são
              passos essenciais para criar cases de impacto real. Mais do que
              conquistar clientes, buscamos construir parcerias duradouras,
              guiando seu negócio rumo à evolução digital através de soluções
              integradas de marketing, vendas e experiência do cliente. Cada
              serviço é cuidadosamente adaptado às necessidades e objetivos de
              cada parceiro, garantindo resultados consistentes e crescimento
              sustentável.
            </p>
            <div className="mt-10">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center rounded px-6 py-3 text-sm font-semibold shadow-md transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{
                  background: "var(--crimson)",
                  color: "var(--text-light)",
                }}
              >
                Fale conosco
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
