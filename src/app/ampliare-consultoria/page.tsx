"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const marcosTimeline = [
  { year: "2020", label: "Fundação da Ampliare Consultoria" },
  { year: "2022", label: "Expansão de serviços e primeiros cases de destaque" },
  { year: "2024", label: "Consolidação em marketing, vendas e transformação digital" },
];

const contadores = [
  { valor: 8, sufixo: "", label: "Anos de experiência" },
  { valor: 150, sufixo: "+", label: "Clientes atendidos" },
  { valor: 300, sufixo: "+", label: "Cases entregues" },
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
      <span className="font-display text-4xl font-bold text-primary sm:text-5xl lg:text-6xl">
        {count}
        {sufixo}
      </span>
      <p className="mt-2 text-sm font-medium text-foreground/80 sm:text-base">
        {label}
      </p>
    </motion.div>
  );
}

export default function AmpliareConsultoria() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] overflow-hidden bg-foreground sm:min-h-[55vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/hero-ampliare.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 to-foreground" />
        <div className="absolute inset-0 bg-foreground/70" />
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
      <section className="border-b border-black/5 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
              Sobre a Ampliare Consultoria
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/85 sm:text-lg">
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
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
              Marcos da Nossa Trajetória
            </h2>
            <p className="mt-2 text-lg font-semibold text-primary">
              Crescendo, inovando e impactando
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground/85">
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

          {/* Timeline */}
          <div className="mt-16">
            <div className="relative max-w-2xl">
              <div
                className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-primary/30"
                aria-hidden
              />
              <ul className="space-y-10">
                {marcosTimeline.map((marco, index) => (
                  <motion.li
                    key={marco.year}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative flex gap-6 pl-10"
                  >
                    <span
                      className="absolute left-0 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-white text-xs font-bold text-primary"
                      aria-hidden
                    >
                      {index + 1}
                    </span>
                    <div>
                      <span className="font-display text-xl font-bold text-primary sm:text-2xl">
                        {marco.year}
                      </span>
                      <p className="mt-1 text-base font-medium text-foreground">
                        {marco.label}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Fotos da equipe (placeholders) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h3 className="text-xl font-bold text-foreground">
              Nossa equipe
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl border border-black/5 bg-zinc-100"
                >
                  <div className="aspect-square w-full bg-gradient-to-br from-zinc-200 to-zinc-300 flex items-center justify-center text-zinc-500 text-sm">
                    Equipe {i}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção Transformação */}
      <section className="border-t border-black/5 bg-primary/5 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
              Transformação Digital Inteligente
            </h2>
            <p className="mt-2 text-lg font-semibold text-primary">
              Impulsionando negócios para crescer no ritmo do mundo atual
            </p>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/85 sm:text-lg">
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
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary-light hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
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
