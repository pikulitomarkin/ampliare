"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Building2,
  Target,
  FileText,
  LineChart,
  Gauge,
  Network,
  Puzzle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
const solucoes: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Fortalecimento e Posicionamento de Marca",
    description:
      "Desenvolvemos ou reforçamos a identidade da sua empresa no mercado, alinhando seus valores aos comportamentos e expectativas do consumidor digital. Criamos identidades que trazem significado, diferencial competitivo e conexão com o público-alvo.",
    icon: Sparkles,
  },
  {
    title: "Estruturação e Crescimento de Negócios",
    description:
      "Ajudamos você a organizar e aprimorar os processos de marketing e vendas para que sua empresa atue com mais eficiência, previsibilidade e impacto no mercado. Isso inclui criação de playbooks, definição de perfis ideais de cliente (ICP) e arquitetura de ofertas e serviços.",
    icon: Building2,
  },
  {
    title: "Geração de Demanda com Estratégia de Dados",
    description:
      "Criamos e executamos planos de geração de demanda que combinam análise de dados, planejamento inteligente e execução contínua. Isso garante atração qualificada de leads, conversões mais consistentes e um funil de vendas alinhado às metas do seu negócio.",
    icon: Target,
  },
  {
    title: "Comunicação e Conteúdo com Propósito",
    description:
      "Criamos conteúdos e materiais visuais que reforçam a proposta da sua marca, transmitindo mensagens com clareza, consistência e impacto. Do planejamento editorial ao design de peças multiplataforma, tudo é pensado para fortalecer sua presença e engajamento.",
    icon: FileText,
  },
  {
    title: "Gestão de Mídia e Campanhas de Alta Performance",
    description:
      "Produzimos estratégias de mídia paga com foco em performance, desde definições de públicos e mensagens até ajustes contínuos para maximizar resultados e reduzir custos.",
    icon: LineChart,
  },
  {
    title: "Inteligência de Dados, Métricas e Otimização",
    description:
      "Estabelecemos metas claras e acompanhamos indicadores essenciais para gerar previsibilidade e aprendizado contínuo. Analisamos conversões, taxas de engajamento e outros KPIs, criamos painéis de controle e ajustamos estratégias.",
    icon: Gauge,
  },
  {
    title: "Ampliação de Fontes de Leads e Novos Canais de Venda",
    description:
      "Além das ações orgânicas, desenvolvemos estratégias de prospecção ativa e identificação de novos canais de comercialização para ampliar oportunidades de negócio.",
    icon: Network,
  },
  {
    title: "Integração entre Negócio e Tecnologia",
    description:
      "Conectamos sistemas, processos e ferramentas para otimizar a operação da sua empresa. Facilitamos transformações digitais que aumentam a eficiência, melhoram experiências e sustentam o crescimento.",
    icon: Puzzle,
  },
];

export default function SolucoesEstrategicas() {
  return (
    <>
      {/* Hero: imagem de fundo + overlay escuro + título e subtítulo */}
      <section className="relative min-h-[50vh] overflow-hidden sm:min-h-[55vh]" style={{ background: "var(--bg-deep)" }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/hero-solucoes.jpg)" }}
        />
        <div
          className="absolute inset-0 opacity-90"
          style={{ background: "linear-gradient(to bottom, var(--crimson-glow) 0%, var(--bg-deep) 50%, var(--bg-deep) 100%)" }}
          aria-hidden
        />
        <div className="absolute inset-0 opacity-70" style={{ background: "var(--bg-deep)" }} aria-hidden />

        <div className="relative mx-auto flex min-h-[50vh] max-w-7xl flex-col justify-center px-6 py-20 md:px-8 md:py-24 lg:px-16 sm:min-h-[55vh]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold uppercase tracking-tight sm:text-4xl md:text-5xl" style={{ color: "var(--text-primary)" }}>
              Soluções em marketing e vendas
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg sm:text-xl" style={{ color: "var(--text-secondary)" }}>
              As marcas de destaque no mercado são visionárias, adaptáveis e
              direcionadas por dados.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Seção introdutória */}
      <section className="border-b px-6 py-16 md:px-8 md:py-20 lg:px-16" style={{ borderColor: "var(--border-dark)", background: "var(--bg-dark)" }}>
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl" style={{ color: "var(--text-primary)" }}>
              Soluções Integradas de Marketing e Crescimento
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed sm:text-lg" style={{ color: "var(--text-secondary)" }}>
              Empresas que se destacam são aquelas que combinam visão estratégica
              com execução eficaz. Nossas soluções unem inteligência de mercado,
              criatividade e tecnologia para gerar resultados consistentes e
              sustentáveis em ambientes digitais em constante mudança.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid de soluções */}
      <section className="px-6 py-16 md:px-8 md:py-20 lg:px-16" style={{ background: "var(--bg-deep)" }}>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {solucoes.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group rounded-xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--crimson)] hover:shadow-crimson-sm sm:p-8"
                style={{ borderColor: "var(--border-dark)", background: "var(--bg-card)" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 group-hover:opacity-90" style={{ background: "var(--crimson-glow)", color: "var(--crimson)" }}>
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed sm:text-base" style={{ color: "var(--text-secondary)" }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-14 text-center"
          >
            <Link
              href="/contato"
              className="inline-flex items-center justify-center rounded px-6 py-3 text-sm font-semibold shadow-md transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--crimson)] focus:ring-offset-2 focus:ring-offset-[var(--bg-deep)]"
              style={{ background: "var(--crimson)", color: "var(--text-primary)" }}
            >
              Solicitar proposta
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
