"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Target,
  Zap,
  Users,
  TrendingUp,
  ArrowUp,
  Sparkles,
  Megaphone,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { SectionTag } from "@/components/SectionTag";
import { ServiceCard } from "@/components/ServiceCard";

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

const metodologiaPilares = [
  "Método",
  "Planejamento",
  "Competência",
  "Estrutura",
  "Valores",
] as const;
const metodologiaAtivoIndex = 3; // Estrutura

const metodologiaCards: { title: string; description: string }[] = [
  {
    title: "Método",
    description:
      "Nosso trabalho é conduzido por um processo estruturado, que organiza etapas, define prioridades e garante clareza na execução. Atuamos com planejamento, acompanhamento contínuo e foco em resultados mensuráveis.",
  },
  {
    title: "Planejamento",
    description:
      "Construímos caminhos claros para o crescimento das marcas, a partir de análise de mercado, posicionamento e definição de metas. Cada decisão é orientada por dados e visão de longo prazo.",
  },
  {
    title: "Competência",
    description:
      "Contamos com equipe especializada e experiência prática para transformar estratégia em ação. Nossa capacidade técnica permite executar projetos com eficiência, qualidade e integração entre diferentes frentes digitais.",
  },
  {
    title: "Estrutura e Valores",
    description:
      "Valorizamos uma organização colaborativa, com processos bem definidos e cultura orientada a resultados. Estimulamos autonomia, inovação e responsabilidade compartilhada.",
  },
];

// TODO: substituir por imagens reais das logos
const parceiros = [
  "iFood",
  "Fundação GrupoBoticário",
  "Tecnisa",
  "BRF",
  "Vivo",
  "SM",
  "DAKO",
  "Sicredi",
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

export default function Home() {
  return (
    <>
      {/* Hero — vídeo + fundo prismático (gramospirsm) + texto institucional */}
      <section className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
        {/* Efeito prismático / gramospirsm no fundo (roxo, rosa, azul, âmbar) */}
        <div className="absolute inset-0" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_20%_20%,rgba(123,47,190,0.5),transparent_45%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_85%_15%,rgba(236,72,153,0.35),transparent_45%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_95%,rgba(59,130,246,0.25),transparent_45%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_55%_at_15%_75%,rgba(234,179,8,0.2),transparent_45%)]" />
          <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,transparent_0deg,rgba(123,47,190,0.08)_60deg,rgba(236,72,153,0.06)_120deg,rgba(59,130,246,0.06)_180deg,rgba(234,179,8,0.05)_240deg,transparent_360deg)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/40 to-[#0a0a0a]" />
        </div>
        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20 lg:px-8 lg:pt-32">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={heroVariants}
            className="flex-1"
          >
            <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-2xl ring-1 ring-white/5 sm:rounded-2xl">
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

          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={heroVariants}
            className="mt-10 max-w-3xl sm:mt-12"
          >
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-md sm:p-8">
              <p className="text-lg font-medium leading-relaxed text-white sm:text-xl">
                [TEXTO HERO]
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Soluções — tag vertical, título, 4 cards em scroll horizontal */}
      <section
        id="solucoes"
        className="relative overflow-hidden bg-foreground py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
            {/* Tag vertical lateral */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden shrink-0 lg:block"
              aria-hidden
            >
              <span
                className="text-sm font-semibold tracking-[0.2em] text-primary"
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
                <p className="text-sm font-semibold uppercase tracking-widest text-primary lg:sr-only">
                  {"//SOLUÇÕES"}
                </p>
                <h2 className="mt-3 text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl lg:text-4xl">
                  Crescimento exige estratégia
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                  Nossas soluções propõem uma nova forma de pensar, criar e gerar
                  resultados de alto impacto para o mundo em constante
                  transformação.
                </p>
                <div className="mt-8">
                  <Link
                    href="/solucoes-estrategicas"
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:bg-primary-light hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-foreground"
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
                        <div className="group h-full rounded-2xl border border-primary/30 bg-white/5 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary transition-colors group-hover:bg-primary/30">
                            <card.icon className="h-6 w-6" />
                          </div>
                          <h3 className="mt-4 text-lg font-semibold text-white">
                            {card.title}
                          </h3>
                          <p className="mt-3 text-sm leading-relaxed text-white/80">
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

      {/* Parceiros — tag vertical, grid de logos */}
      <section
        id="parceiros"
        className="relative overflow-hidden bg-[#16141f] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
            {/* Tag vertical lateral */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden shrink-0 lg:block"
              aria-hidden
            >
              <span
                className="text-sm font-semibold tracking-[0.2em] text-primary"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              >
                {"//PARCEIROS"}
              </span>
            </motion.div>

            <div className="min-w-0 flex-1">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-sm font-semibold uppercase tracking-widest text-primary lg:sr-only">
                  {"//PARCEIROS"}
                </p>
                <h2 className="mt-3 text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl lg:text-4xl">
                  Marcas que estão evoluindo conosco
                </h2>
              </motion.div>

              {/* Carrossel/marquee infinito horizontal de logos */}
              <div className="mt-10 overflow-hidden lg:mt-12" aria-label="Parceiros">
                <div className="flex w-max animate-marquee gap-6 sm:gap-8">
                  {[...parceiros, ...parceiros].map((nome, i) => (
                    <div
                      key={`${nome}-${i}`}
                      className="flex h-20 w-[180px] shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-4 transition-all duration-300 hover:border-primary/40 hover:bg-white/10 hover:shadow-md hover:shadow-primary/10 sm:h-24 sm:w-[220px]"
                      role="img"
                      aria-label={nome}
                    >
                      <span className="text-center text-sm font-medium text-white/50 transition-colors duration-300 hover:text-primary sm:text-base">
                        {nome}
                      </span>
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
        className="bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Coluna esquerda: tag vertical (desktop) + título + botão */}
            <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="hidden shrink-0 lg:block"
                aria-hidden
              >
                <span
                  className="text-sm font-semibold tracking-[0.2em] text-primary"
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
                <p className="text-sm font-semibold uppercase tracking-widest text-primary lg:sr-only">
                  {"//SERVIÇOS"}
                </p>
                <h2 className="mt-3 text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                  Ecossistema de serviços
                </h2>
                <div className="mt-6">
                  <Link
                    href="/nossas-atividades"
                    className="inline-flex items-center justify-center rounded-lg border-2 border-primary bg-transparent px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-primary transition-all duration-200 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    O que fazemos
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Coluna direita: texto */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-start lg:pt-2"
            >
              <p className="text-base leading-relaxed text-foreground/85 sm:text-lg">
                Entendemos o mercado e as tendências para gerar soluções
                assertivas. Nossos serviços envolvem planejamento, produção,
                análise e otimização de todos os processos de marketing e vendas.
              </p>
            </motion.div>
          </div>

          {/* Grid de 3 imagens de equipe (placeholders 4:3) */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8 lg:mt-16">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i - 1) * 0.1 }}
                className="overflow-hidden rounded-xl border border-black/5 bg-zinc-100 shadow-sm"
              >
                <div
                  className="aspect-[4/3] w-full bg-gradient-to-br from-zinc-200 to-zinc-300 flex items-center justify-center text-zinc-500 text-sm font-medium"
                  aria-hidden
                >
                  Equipe {i}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodologia — fundo escuro, pilares, CAPACIDADE, 4 cards */}
      <section
        id="metodologia"
        className="relative overflow-hidden bg-foreground py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Linha 1: tag + título/texto à esquerda | lista de pilares à direita */}
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden shrink-0 lg:block"
              aria-hidden
            >
              <span
                className="text-sm font-semibold tracking-[0.2em] text-primary"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              >
                {"//METODOLOGIAS"}
              </span>
            </motion.div>

            <div className="grid min-w-0 flex-1 grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Esquerda: título + texto introdutório */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-sm font-semibold uppercase tracking-widest text-primary lg:sr-only">
                  {"//METODOLOGIAS"}
                </p>
                <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                  Análise de resultados
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
                  Transformamos empresas com estratégias de evolução digital,
                  serviços de marketing e vendas, outsourcing de times
                  multidisciplinares e proficientes em analytics.
                </p>
              </motion.div>

              {/* Direita: lista de pilares com dash e destaque roxo no ativo */}
              <motion.ul
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col gap-3 border-l-2 border-white/20 pl-6"
                role="list"
              >
                {metodologiaPilares.map((pilar, index) => {
                  const isAtivo = index === metodologiaAtivoIndex;
                  return (
                    <li key={pilar} className="flex items-center gap-3">
                      <span
                        className={`h-px w-6 shrink-0 bg-white/40 ${
                          isAtivo ? "!w-8 !bg-primary" : ""
                        }`}
                        aria-hidden
                      />
                      <span
                        className={`text-sm font-medium sm:text-base ${
                          isAtivo
                            ? "text-primary"
                            : "text-white/70"
                        }`}
                      >
                        {pilar}
                      </span>
                    </li>
                  );
                })}
              </motion.ul>
            </div>
          </div>

          {/* Linha 2: CAPACIDADE (display) à esquerda | parágrafo à direita */}
          <div className="mt-14 grid grid-cols-1 gap-8 border-t border-white/10 pt-14 lg:mt-20 lg:grid-cols-2 lg:gap-16 lg:pt-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center lg:justify-start"
            >
              <span
                className="font-display text-4xl font-bold tracking-tighter text-white/90 sm:text-5xl md:text-6xl lg:text-7xl"
                style={{ letterSpacing: "-0.02em" }}
              >
                CAPACIDADE
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center"
            >
              <p className="text-base leading-relaxed text-white/80 sm:text-lg">
                Nossas soluções personalizadas de marketing e vendas acompanham a
                jornada do cliente com o objetivo de gerar valor e ampliar o
                fechamento de negócios. Todas as ações são sustentadas pelo uso
                de plataformas tecnológicas e dirigidas por dados.
              </p>
            </motion.div>
          </div>

          {/* Linha 3: 4 cards de metodologia */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16">
            {metodologiaCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8"
              >
                <h3 className="text-lg font-semibold text-primary sm:text-xl">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <SectionTag>O que fazemos</SectionTag>
            <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
              Nossas áreas de atuação
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-foreground/80">
              Serviços desenhados para impulsionar sua organização.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              title="Estratégia"
              description="Planejamento e execução de estratégias alinhadas aos seus objetivos."
              icon={Target}
              href="/solucoes-estrategicas"
              index={0}
            />
            <ServiceCard
              title="Performance"
              description="Otimização de processos e indicadores para melhores resultados."
              icon={Zap}
              href="/solucoes-estrategicas"
              index={1}
            />
            <ServiceCard
              title="Gestão de pessoas"
              description="Desenvolvimento de equipes e cultura organizacional."
              icon={Users}
              href="/nossas-atividades"
              index={2}
            />
            <ServiceCard
              title="Transformação"
              description="Projetos de mudança e inovação para o futuro do negócio."
              icon={ArrowRight}
              href="/nossas-atividades"
              index={3}
            />
          </div>
        </div>
      </section>

      {/* CTA final de conversão — fundo preto, duas colunas + barra decorativa */}
      <section
        id="cta"
        className="relative bg-black text-white"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Coluna esquerda: título + texto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-5xl">
                O digital avança todos os dias
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/85 sm:text-lg">
                O ambiente digital se transforma em ritmo acelerado, exigindo
                adaptação contínua das marcas que desejam permanecer
                relevantes. Novas tecnologias, comportamentos e oportunidades
                surgem constantemente, e acompanhar esse movimento deixou de ser
                diferencial — tornou-se necessidade. Empresas que evoluem com
                estratégia, dados e inovação conseguem não apenas acompanhar as
                mudanças, mas liderar seus mercados.
              </p>
            </motion.div>

            {/* Coluna direita: card de contato */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8 lg:self-start"
            >
              <ul className="space-y-4 text-sm text-white/90 sm:text-base">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>
                    R. Bruxelas, 188 – Conj 02 – Sumaré, São Paulo – SP,
                    01259-020
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  <a
                    href="tel:+5511912613992"
                    className="hover:text-primary transition-colors"
                  >
                    (11) 91261-3992
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-primary" />
                  <a
                    href="mailto:contato@layerup.com.br"
                    className="hover:text-primary transition-colors"
                  >
                    contato@layerup.com.br
                  </a>
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  href="/contato"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-5 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition-all duration-200 hover:bg-primary-light hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black sm:w-auto"
                >
                  Entre em contato
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Barra colorida decorativa (gradiente roxo → amarelo → rosa) + logo */}
        <div className="flex h-12 w-full items-center justify-end bg-gradient-to-r from-primary via-accent to-pink-400 px-4 sm:px-6 lg:px-8">
          <span className="font-display text-xl font-bold tracking-tight text-white drop-shadow-md">
            Ampliare
          </span>
        </div>
      </section>
    </>
  );
}
