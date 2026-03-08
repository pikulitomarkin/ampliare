"use client";

import { useState, useEffect } from "react";
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

const metodologiaItens: { label: string; description: string }[] = [
  {
    label: "Método",
    description:
      "Nosso trabalho é conduzido por um processo estruturado, que organiza etapas, define prioridades e garante clareza na execução. Atuamos com planejamento, acompanhamento contínuo e foco em resultados mensuráveis, assegurando consistência em cada entrega e evolução constante ao longo do projeto.",
  },
  {
    label: "Planejamento",
    description:
      "Construímos caminhos claros para o crescimento das marcas, a partir de análise de mercado, posicionamento e definição de metas. Cada decisão é orientada por dados e visão de longo prazo, conectando comunicação, marketing e vendas a objetivos concretos de negócio.",
  },
  {
    label: "Competência",
    description:
      "Contamos com equipe especializada e experiência prática para transformar estratégia em ação. Nossa capacidade técnica permite executar projetos com eficiência, qualidade e integração entre diferentes frentes digitais, garantindo performance sustentável.",
  },
  {
    label: "Estrutura",
    description:
      "Valorizamos uma organização colaborativa, com processos bem definidos e cultura orientada a resultados. Estimulamos autonomia, inovação e responsabilidade compartilhada, criando um ambiente que favorece alta performance e crescimento contínuo.",
  },
  {
    label: "DNA",
    description:
      "Nosso DNA é orientado por resultados e pela evolução contínua. Valorizamos agilidade, colaboração e aprendizado constante para desenvolver estratégias eficientes e gerar impacto real para nossos clientes. Trabalhamos com flexibilidade e consistência para transformar desafios em oportunidades e construir projetos de sucesso.",
  },
];

// Parceiros: só usamos arquivos que existem em /public/logos/
// Existentes: logo_pizza_prime.png, logo_rede_dor-21331594.png, hotel-ibis-logo-115294069548cavco4znp.png
// Inexistentes: petz.png, fast-shop.png → placeholder com nome da marca
const parceiros: { nome: string; logo: string | null }[] = [
  { nome: "Pizza Prime", logo: "/logos/logo_pizza_prime.png" },
  { nome: "Petz", logo: null },
  { nome: "Fast Shop", logo: null },
  { nome: "Rede D'Or", logo: "/logos/logo_rede_dor-21331594.png" },
  { nome: "Ibis Hotels", logo: "/logos/hotel-ibis-logo-115294069548cavco4znp.png" },
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

const ROTACAO_METODOLOGIA_MS = 3000;

function ParceiroLogo({ nome, logo }: { nome: string; logo: string | null }) {
  const [imgFailed, setImgFailed] = useState(false);
  const showPlaceholder = logo === null || imgFailed;
  return (
    <span className="relative flex h-full w-full items-center justify-center">
      {logo !== null && (
        <Image
          src={logo}
          alt=""
          width={160}
          height={60}
          className="logo-parceiros h-[60px] w-auto max-w-full object-contain transition-[filter] duration-300 ease-out"
          style={{ display: showPlaceholder ? "none" : undefined }}
          onError={(e) => {
            e.currentTarget.style.display = "none";
            setImgFailed(true);
          }}
          unoptimized
        />
      )}
      {showPlaceholder && (
        <span className="absolute inset-0 flex items-center justify-center rounded-xl bg-[#2A2A2A] px-2">
          <span className="text-center text-sm font-medium text-[#6B6B6B]">{nome}</span>
        </span>
      )}
    </span>
  );
}

export default function Home() {
  const [metodologiaAtivo, setMetodologiaAtivo] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setMetodologiaAtivo((i) => (i + 1) % metodologiaItens.length);
    }, ROTACAO_METODOLOGIA_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* Hero — vídeo + fundo com glow bordô sutil */}
      <section className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(125,43,43,0.15)_0%,transparent_60%),#0a0a0a]" aria-hidden />
        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20 lg:px-8 lg:pt-32">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={heroVariants}
            className="flex-1"
          >
            <div className="aspect-video w-full overflow-hidden rounded-xl border border-[#2A2A2A] bg-black/40 shadow-2xl sm:rounded-2xl">
              {/* Placeholder: troque pelo seu vídeo ou ID do YouTube */}
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0"
                title="Vídeo institucional Ampliare Consultoria"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
              {/* Alternativa com <video> local (descomente e ajuste src/poster):
              <video
                className="h-full w-full object-cover"
                poster="/hero-poster.jpg"
                controls
                playsInline
              >
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>
              */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Soluções — tag vertical, título, 4 cards */}
      <section
        id="solucoes"
        className="relative overflow-hidden bg-[#0a0a0a] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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

            <div className="min-w-0 flex-1">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-sm font-semibold uppercase tracking-widest text-[#7D2B2B] lg:sr-only">
                  {"//SOLUÇÕES"}
                </p>
                <h2 className="mt-3 border-l-4 border-[#7D2B2B] pl-4 text-2xl font-bold uppercase tracking-tight text-[#F0EDE8] sm:text-3xl lg:text-4xl">
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

              {/* Cards em scroll horizontal (mobile) / grid (desktop) */}
              <div className="mt-12 lg:mt-14">
                <div className="-mx-4 overflow-x-auto px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:overflow-visible lg:px-0">
                  <ul className="flex gap-5 pb-2 lg:grid lg:grid-cols-4 lg:pb-0">
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
                        className="min-w-[280px] shrink-0 sm:min-w-[320px] lg:min-w-0"
                      >
                        <div className="group flex h-full flex-col rounded-xl border border-[#2A2A2A] bg-[#111111] p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#7D2B2B] hover:shadow-crimson-sm">
                          <div className="flex shrink-0 justify-center">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#7D2B2B]/20 text-[#7D2B2B] transition-colors group-hover:bg-[#7D2B2B]/30">
                              <card.icon className="h-10 w-10 glow-crimson" size={40} />
                            </div>
                          </div>
                          <h3 className="mt-4 text-lg font-semibold text-[#F0EDE8]">
                            {card.title}
                          </h3>
                          <p className="mt-3 text-sm leading-relaxed text-[#A8A8A8]">
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
                <h2 className="mt-3 text-2xl font-bold uppercase tracking-tight text-[#F0EDE8] sm:text-3xl lg:text-4xl">
                  Marcas que estão evoluindo conosco
                </h2>
              </motion.div>

              <div className="mt-10 overflow-hidden lg:mt-12" aria-label="Parceiros">
                <div
                  className="flex w-max gap-8 sm:gap-10"
                  style={{ animation: "marquee-parceiros 40s linear infinite" }}
                >
                  {[...parceiros, ...parceiros].map((p, i) => (
                    <div
                      key={`${p.nome}-${i}`}
                      className="group relative flex h-[60px] w-[160px] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#2A2A2A] bg-[#111111] px-4 py-3 transition-[box-shadow,border-color] duration-300 ease-out hover:border-[#7D2B2B] hover:shadow-crimson-sm"
                      role="img"
                      aria-label={p.nome}
                    >
                      <ParceiroLogo nome={p.nome} logo={p.logo} />
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
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

      {/* Metodologia — fundo escuro, pilares, CAPACIDADE */}
      <section
        id="metodologia"
        className="relative overflow-hidden bg-[#0a0a0a] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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

            <div className="grid min-w-0 flex-1 grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-sm font-semibold uppercase tracking-widest text-[#7D2B2B] lg:sr-only">
                  {"//METODOLOGIAS"}
                </p>
                <h2 className="mt-3 border-l-4 border-[#7D2B2B] pl-4 text-2xl font-bold text-[#F0EDE8] sm:text-3xl lg:text-4xl">
                  Análise de resultados
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#A8A8A8] sm:text-lg">
                  Transformamos empresas com estratégias de evolução digital,
                  serviços de marketing e vendas, outsourcing de times
                  multidisciplinares e proficientes em analytics.
                </p>
              </motion.div>

              <motion.ul
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col gap-3 border-l-2 border-[#2A2A2A] pl-6"
                role="list"
              >
                {metodologiaItens.map((item, index) => {
                  const isAtivo = index === metodologiaAtivo;
                  return (
                    <li key={item.label}>
                      <button
                        type="button"
                        onClick={() => setMetodologiaAtivo(index)}
                        className="flex w-full items-center gap-3 text-left transition-colors hover:opacity-90"
                        aria-pressed={isAtivo}
                        aria-label={`Selecionar ${item.label}`}
                      >
                        <span
                          className={`h-px shrink-0 transition-all duration-300 ${
                            isAtivo ? "w-8 bg-[#7D2B2B]" : "w-6 bg-[#6B6B6B]/60"
                          }`}
                          aria-hidden
                        />
                        <span
                          className={`text-sm font-medium transition-colors duration-300 sm:text-base ${
                            isAtivo ? "text-[#7D2B2B]" : "text-[#A8A8A8]"
                          }`}
                        >
                          {item.label}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </motion.ul>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 border-t border-[#2A2A2A] pt-14 lg:mt-20 lg:grid-cols-2 lg:gap-16 lg:pt-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center lg:justify-start"
            >
              <span
                className="font-display text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-gradient-capacidade"
                style={{ letterSpacing: "-0.02em" }}
              >
                CAPACIDADE
              </span>
            </motion.div>
            <div className="flex min-h-[180px] items-center sm:min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={metodologiaAtivo}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  <p className="text-base leading-relaxed text-[#A8A8A8] sm:text-lg">
                    {metodologiaItens[metodologiaAtivo].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
