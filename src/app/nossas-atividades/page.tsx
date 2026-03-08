"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Servico = {
  id: string;
  title: string;
  subtitle?: string;
  subtitle2?: string;
  intro?: string;
  text?: string;
  objetivo?: string;
  bullets?: string[];
  steps?: string[];
};

const servicos: Servico[] = [
  {
    id: "gestao-midia",
    title: "Como Atuamos",
    subtitle: "Google ADS e Meta ADS",
    intro:
      "Vivemos em um mundo conectado, onde as pessoas passam grande parte do dia interagindo com conteúdos digitais em computadores e celulares. É nesse ambiente que elas consomem informação, se divertem e tomam decisões de compra. Por isso, sua marca precisa ocupar espaço nesses canais: se não estiver online, sua campanha simplesmente não será vista.",
    text: "Nosso time trabalha para transformar cada investimento em mídia paga em resultados reais. Com atenção aos detalhes e análise constante, ajustamos campanhas, peças e canais para que cada ação seja mais eficiente.",
    bullets: [
      "Elaboramos planos de mídia alinhados aos objetivos do negócio",
      "Criamos campanhas adaptadas para diferentes plataformas e públicos",
      "Otimizamos anúncios continuamente para maximizar resultados",
      "Atuamos em: Google, YouTube, Facebook, Instagram, LinkedIn, Programática e Nativa",
      "Fornecemos dashboards com métricas atualizadas em tempo real",
      "Tomamos decisões estratégicas com base em dados precisos",
      "Equipe integrada de mídia, automação e análise de dados",
    ],
  },
  {
    id: "gestao-redes-sociais",
    title: "Gestão de Redes Sociais",
    subtitle: "Gestão Completa de Redes Sociais",
    intro:
      "Identificamos todos os objetivos do seu negócio para criar uma estratégia digital personalizada, potencializando a presença da sua marca nas redes sociais.",
    bullets: [
      "Planejamento estratégico de comunicação e avaliação de canais",
      "Criação de conteúdo multimídia diversificado",
      "Produção audiovisual profissional: fotos e vídeos",
      "Gestão integrada: Facebook, Instagram, LinkedIn, Twitter, YouTube, TikTok, Telegram",
      "Monitoramento de menções e presença digital",
      "Atendimento e engajamento de comunidades e grupos online",
    ],
  },
  {
    id: "conexao-engajamento",
    title: "Conexão e Engajamento de Clientes",
    subtitle: "Marketing de Atração Estratégico",
    intro:
      "Estratégias de atração e relacionamento são essenciais para empresas que querem crescer de forma consistente. Utilizamos automação, conteúdos relevantes e campanhas personalizadas para conquistar, engajar e nutrir leads, transformando interesse em oportunidades reais de negócio.",
    bullets: [
      "Planejamento estratégico de geração de leads",
      "Definição e análise detalhada do perfil do cliente ideal",
      "Criação de estratégias automatizadas de engajamento",
      "Desenvolvimento de conteúdos e fluxos de nutrição personalizados",
      "Organização e segmentação inteligente da base de contatos",
      "Implementação e acompanhamento do lead scoring",
      "Gestão de réguas de relacionamento para maximizar engajamento",
      "Integração entre equipes de marketing e vendas",
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    subtitle: "Sua marca próxima do cliente, em qualquer lugar",
    intro:
      "O comprador atual está cada vez mais criterioso ao realizar compras pela internet: ele busca não apenas o produto ideal, mas também uma experiência completa, que inclua informações confiáveis, navegação eficiente e um atendimento sob medida.",
    text: "Ter um e-commerce vai além de simplesmente oferecer seus produtos e serviços. É uma forma de criar experiências memoráveis para os clientes no ambiente digital. Hoje, contar com uma loja online não é apenas um diferencial, mas uma necessidade para gerar confiança, chamar atenção e estimular a inovação no seu negócio.",
    bullets: [
      "Criação e desenvolvimento de websites",
      "Design de interface e experiência do usuário",
      "Análise e segmentação avançada de leads",
      "Planejamento de jornadas personalizadas",
      "Monitoramento de indicadores e desempenho",
      "Estratégias híbridas: conectando canais online e offline",
      "Aperfeiçoamento contínuo para maximizar resultados",
    ],
  },
  {
    id: "criacao-campanhas",
    title: "Criação de Campanhas e Conteúdos",
    subtitle: "Dê vida às suas ideias",
    intro:
      "Na Ampliare Consultoria, a criação de campanhas e conteúdos se traduz em ideias que ganham vida. Cada projeto combina inovação e estratégia, garantindo que conceitos se tornem experiências reais e impactantes.",
    text: "Comunicar sua marca, lançar novos produtos ou serviços e manter o público conectado exige mais do que boas intenções. A criação de campanhas e conteúdos é um dos pilares de qualquer campanha de sucesso, unindo estratégia, criatividade e execução de forma integrada.",
    subtitle2: "Transformando pensamento em resultado",
    steps: [
      "Análise de contexto e tendências",
      "Sessões de ideação criativa",
      "Desenvolvimento do conceito central",
      "Criação de identidade visual",
      "Produção de materiais: textos, imagens e vídeos",
      "Planejamento e adaptação para múltiplos canais",
      "Revisão, aprovação e publicação",
    ],
  },
  {
    id: "insights-mercado",
    title: "Insights de Mercado",
    subtitle: "Insights que transformam",
    intro:
      "Se antes a inovação podia ser vista como um diferencial, hoje ela se tornou fundamental. Cultivar uma cultura empresarial criativa, ousada e constantemente em evolução é indispensável para garantir relevância e crescimento no futuro.",
    subtitle2: "Impulsionando sua marca rumo ao futuro",
    text: "Analisamos profundamente as necessidades e percepções do seu público, identificando tendências emergentes e padrões de comportamento de consumo. Ao mapear pontos de atrito na comunicação e lacunas deixadas pelos concorrentes, criamos estratégias baseadas em dados concretos que aumentam sua vantagem competitiva.",
    bullets: [
      "Pesquisas qualitativas para entender motivações e percepções",
      "Pesquisas quantitativas para medir comportamentos e preferências",
      "Condução de focus groups para insights profundos",
      "Estudos com clientes atuais para aprimorar experiências",
      "Análises com público-alvo não-cliente para identificar oportunidades",
      "Integração de dados objetivos e interpretações subjetivas para decisões estratégicas",
    ],
  },
  {
    id: "solucoes-digitais",
    title: "Soluções Digitais e Desenvolvimento de Sites",
    subtitle: "Presença digital que converte",
    intro:
      "Desenvolvemos sites, portais e aplicações web sob medida, alinhados à sua estratégia de negócio. Da concepção à entrega, garantimos performance, usabilidade e escalabilidade para sua presença digital.",
    bullets: [
      "Desenvolvimento de sites institucionais e landing pages",
      "Aplicações web e portais personalizados",
      "Integração com sistemas e APIs",
      "Otimização de performance e experiência do usuário",
    ],
  },
  {
    id: "consultoria-seo",
    title: "Consultoria SEO: Aumente seu Tráfego Orgânico",
    intro:
      "Adoramos trabalhar com SEO, ou otimização para mecanismos de busca, que ajuda seu site a ser encontrado pelas pessoas certas na hora certa. Faz parte da nossa estratégia de crescimento. Combinamos análises detalhadas, tecnologia avançada e uma equipe altamente engajada para potencializar resultados de marketing e gerar cases de sucesso.",
    objetivo: "Aumentar a visibilidade orgânica e atrair tráfego qualificado.",
    bullets: [
      "Pesquisa de palavras-chave relevantes",
      "Otimização de títulos, meta descrições e URLs",
      "Produção de conteúdo de qualidade e atualizado",
      "Link building interno e externo",
      "Melhorias na velocidade e experiência do site",
    ],
  },
  {
    id: "agentes-ia",
    title: "Agentes de IA",
    subtitle: "IA que trabalha sozinha pelo seu negócio",
    intro:
      "Já pensou em contar com um assistente que nunca dorme, conhece profundamente seu negócio, analisa dados com precisão, toma decisões de forma autônoma e ainda aprende para aprimorar seus resultados continuamente? Com os agentes de IA, isso pode se tornar realidade na sua empresa.",
    text: "Imagine ter sistemas inteligentes que aprendem com os dados, entendem o que cada situação exige e executam tarefas sem precisar de supervisão constante. Esses agentes conseguem interagir tanto com plataformas digitais quanto com processos físicos, tomando decisões rápidas e precisas para melhorar seus resultados.",
    subtitle2: "Como a inteligência artificial transforma sua operação",
    bullets: [
      "Desenvolvimento de agentes personalizados para cada necessidade",
      "Automação de tarefas rotineiras para ganhar tempo",
      "Conexão com ferramentas e sistemas já existentes",
      "Criação de recomendações e conteúdos adaptados ao público",
      "Monitoramento contínuo e ajustes automáticos para manter a eficiência",
    ],
  },
];

const servicosImagens: { src: string; alt: string }[] = [
  { src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80", alt: "Dashboard de anúncios e performance digital" },
  { src: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80", alt: "Social media e redes sociais" },
  { src: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80", alt: "Equipe em reunião estratégica" },
  { src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80", alt: "E-commerce e compras online" },
  { src: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&q=80", alt: "Equipe criativa em campanha" },
  { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", alt: "Gráficos e análise de dados de mercado" },
  { src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80", alt: "Desenvolvimento web e código" },
  { src: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80", alt: "SEO e pesquisa orgânica" },
  { src: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80", alt: "Inteligência artificial e tecnologia" },
];

export default function NossasAtividades() {
  const [activeId, setActiveId] = useState<string | null>(servicos[0].id);

  useEffect(() => {
    const sections = servicos.map((s) => document.getElementById(s.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] overflow-hidden" style={{ background: "var(--bg-deep)" }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/hero-atividades.jpg)" }}
        />
        <div className="absolute inset-0 opacity-75" style={{ background: "var(--bg-deep)" }} />
        <div className="relative mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-center px-6 py-20 md:px-8 md:py-24 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold uppercase tracking-tight sm:text-4xl md:text-5xl" style={{ color: "var(--text-primary)" }}>
              Ações de marketing e vendas
            </h1>
            <p className="mt-4 text-xl font-medium sm:text-2xl" style={{ color: "var(--crimson)" }}>
              Como Atuamos para Gerar Impacto e Resultados
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed sm:text-lg" style={{ color: "var(--text-secondary)" }}>
              Ajudamos empresas a crescer no ambiente digital com soluções
              integradas de marketing, vendas e tecnologia. Atuamos de forma
              estratégica e orientada por dados, transformando desafios em
              oportunidades e entregando resultados mensuráveis, experiências
              relevantes e crescimento sustentável.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Layout: select (mobile) / menu lateral (desktop) + conteúdo */}
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 lg:py-16 lg:px-16">
        <div className="lg:flex lg:gap-12">
          {/* Select dropdown no mobile */}
          <select
            className="mb-6 w-full rounded border p-3 md:mb-0 md:hidden"
            style={{ borderColor: "var(--border-mid)", background: "var(--bg-card)", color: "var(--text-primary)" }}
            value={Math.max(0, servicos.findIndex((s) => s.id === activeId))}
            onChange={(e) => {
              const i = Number(e.target.value);
              const id = servicos[i]?.id;
              if (id) {
                setActiveId(id);
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            aria-label="Selecionar serviço"
          >
            {servicos.map((s, i) => (
              <option key={s.id} value={i}>
                {s.title}
              </option>
            ))}
          </select>

          {/* Menu lateral (desktop) */}
          <aside className="hidden shrink-0 md:block lg:w-56">
            <nav
              className="sticky top-24 space-y-0.5"
              aria-label="Navegação entre serviços"
            >
              {servicos.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    activeId === s.id ? "bg-[var(--crimson)] text-[var(--text-primary)]" : "text-[var(--text-muted)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Conteúdo: seções de cada serviço */}
          <main className="min-w-0 flex-1 pt-4 lg:pt-0">
            {servicos.map((s, index) => (
              <section
                key={s.id}
                id={s.id}
                className="scroll-mt-28 border-b py-12 last:border-0 lg:scroll-mt-24"
                style={{ borderColor: "var(--border-dark)" }}
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr,280px]">
                  <div>
                    <motion.h2
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-2xl font-bold sm:text-3xl"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {s.title}
                    </motion.h2>
                    {s.subtitle && (
                      <p className="mt-2 text-lg font-semibold" style={{ color: "var(--crimson)" }}>
                        {s.subtitle}
                      </p>
                    )}
                    {s.intro && (
                      <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        {s.intro}
                      </p>
                    )}
                    {s.text && (
                      <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        {s.text}
                      </p>
                    )}
                    {s.subtitle2 && (
                      <p className="mt-6 text-lg font-semibold" style={{ color: "var(--crimson)" }}>
                        {s.subtitle2}
                      </p>
                    )}
                    {s.objetivo && (
                      <p className="mt-3 rounded-lg p-4 text-sm font-medium" style={{ background: "var(--crimson-glow)", color: "var(--text-primary)" }}>
                        {s.objetivo}
                      </p>
                    )}
                    {s.bullets && s.bullets.length > 0 && (
                      <ul className="mt-6 space-y-2">
                        {s.bullets.map((b, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm leading-relaxed sm:text-base"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--crimson)" }} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                    {s.steps && s.steps.length > 0 && (
                      <ol className="mt-6 space-y-3">
                        {s.steps.map((step, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-sm leading-relaxed sm:text-base"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold" style={{ background: "var(--crimson-glow)", color: "var(--crimson)" }}>
                              {i + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    )}
                  </div>
                  {/* Imagem do serviço — Unsplash */}
                  <div className="hidden lg:block">
                    <div className="overflow-hidden rounded-xl shadow-md">
                      <Image
                        src={servicosImagens[index].src}
                        alt={servicosImagens[index].alt}
                        width={500}
                        height={350}
                        className="h-[350px] w-full object-cover"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </main>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contato"
            className="inline-flex items-center justify-center rounded px-6 py-3 text-sm font-semibold shadow-md transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--crimson)] focus:ring-offset-2 focus:ring-offset-[var(--bg-deep)]"
            style={{ background: "var(--crimson)", color: "var(--text-primary)" }}
          >
            Falar sobre um projeto
          </Link>
        </div>
      </div>
    </>
  );
}
