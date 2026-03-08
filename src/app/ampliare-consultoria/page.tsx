"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const equipeCards = [
  {
    foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    nome: "Consultoria Estratégica",
    cargo: "Planejamento & Crescimento",
  },
  {
    foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
    nome: "Inteligência de Mercado",
    cargo: "Dados & Performance",
  },
  {
    foto: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&q=80",
    nome: "Marketing & Conteúdo",
    cargo: "Criação & Campanhas",
  },
  {
    foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80",
    nome: "Transformação Digital",
    cargo: "Tecnologia & Inovação",
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
      <span className="font-display text-4xl font-bold text-[#7D2B2B] sm:text-5xl lg:text-6xl">
        {count}
        {sufixo}
      </span>
      <p className="mt-2 text-sm font-medium text-[#A8A8A8] sm:text-base">
        {label}
      </p>
    </motion.div>
  );
}

export default function AmpliareConsultoria() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] overflow-hidden bg-[#0a0a0a] sm:min-h-[55vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/hero-ampliare.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[#0a0a0a]/70" />
        <div className="relative flex min-h-[50vh] flex-col justify-center px-4 py-20 sm:min-h-[55vh] sm:py-24">
          <div className="mx-auto max-w-6xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Nós criamos a evolução
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section className="border-b border-[#2A2A2A] bg-[#111111] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-[#F0EDE8] sm:text-3xl lg:text-4xl">
              Sobre a Ampliare Consultoria
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#A8A8A8] sm:text-lg">
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
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-[#F0EDE8] sm:text-3xl lg:text-4xl">
              Marcos da Nossa Trajetória
            </h2>
            <p className="mt-2 text-lg font-semibold text-[#7D2B2B]">
              Crescendo, inovando e impactando
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#A8A8A8]">
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
                className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-[#7D2B2B]"
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
                      className="absolute left-0 top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#7D2B2B] text-xs font-bold text-white"
                      aria-hidden
                    >
                      {index + 1}
                    </span>
                    <div>
                      <span className="font-display text-xl font-bold text-[#7D2B2B] sm:text-2xl">
                        {marco.year}
                      </span>
                      <p className="mt-2 text-base leading-relaxed text-[#A8A8A8]">
                        {marco.label}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Nossa Equipe — cards com fotos Unsplash */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h3 className="text-xl font-bold text-[#F0EDE8]">
              Nossa equipe
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {equipeCards.map((card, i) => (
                <motion.div
                  key={card.nome}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex flex-col overflow-hidden border border-[#2A2A2A] bg-[#111111]"
                  style={{ borderRadius: 8, height: 320 }}
                >
                  <div className="relative shrink-0 w-full overflow-hidden" style={{ height: "70%" }}>
                    <Image
                      src={card.foto}
                      alt=""
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                  <div className="flex shrink-0 flex-col justify-center p-4" style={{ height: "30%" }}>
                    <p className="font-semibold text-[#F0EDE8]">{card.nome}</p>
                    <p className="mt-1 text-sm text-[#A8A8A8]">{card.cargo}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção Transformação */}
      <section className="border-t border-[#2A2A2A] bg-[#111111] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-[#F0EDE8] sm:text-3xl lg:text-4xl">
              Transformação Digital Inteligente
            </h2>
            <p className="mt-2 text-lg font-semibold text-[#7D2B2B]">
              Impulsionando negócios para crescer no ritmo do mundo atual
            </p>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#A8A8A8] sm:text-lg">
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
                className="inline-flex items-center justify-center rounded bg-[#7D2B2B] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#9B3535] hover:shadow-crimson focus:outline-none focus:ring-2 focus:ring-[#7D2B2B] focus:ring-offset-2 focus:ring-offset-[#111111]"
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
