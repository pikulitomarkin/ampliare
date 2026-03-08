"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const paginas = [
  { label: "Início", href: "/" },
  { label: "Soluções Estratégicas", href: "/solucoes-estrategicas" },
  { label: "Nossas Atividades", href: "/nossas-atividades" },
  { label: "Ampliare Consultoria", href: "/ampliare-consultoria" },
  { label: "Contato", href: "/contato" },
];

const servicos = [
  { label: "Gestão de Mídia", href: "/nossas-atividades#gestao-midia" },
  { label: "Redes Sociais", href: "/nossas-atividades#gestao-redes-sociais" },
  { label: "Conexão e Engajamento", href: "/nossas-atividades#conexao-engajamento" },
  { label: "E-commerce", href: "/nossas-atividades#ecommerce" },
  { label: "Criação de Campanhas", href: "/nossas-atividades#criacao-campanhas" },
  { label: "Insights de Mercado", href: "/nossas-atividades#insights-mercado" },
  { label: "SEO", href: "/nossas-atividades#consultoria-seo" },
  { label: "Agentes de IA", href: "/nossas-atividades#agentes-ia" },
];

export function Footer() {
  return (
    <footer className="text-white">
      {/* ━━━ PARTE 1 — Seção CTA (acima do rodapé) */}
      <section className="bg-black">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Coluna esquerda */}
            <div>
              <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-[#F0EDE8] sm:text-4xl md:text-5xl">
                O digital avança todos os dias
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#A8A8A8] sm:text-lg">
                O ambiente digital se transforma em ritmo acelerado, exigindo adaptação contínua das marcas que desejam permanecer relevantes. Novas tecnologias, comportamentos e oportunidades surgem constantemente, e acompanhar esse movimento deixou de ser diferencial — tornou-se necessidade.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#A8A8A8] sm:text-lg">
                Empresas que evoluem com estratégia, dados e inovação conseguem não apenas acompanhar as mudanças, mas liderar seus mercados.
              </p>
            </div>

            <div className="flex flex-col justify-center lg:items-end">
              <ul className="space-y-4 text-sm text-[#F0EDE8] sm:text-base">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#7D2B2B]" />
                  <span>
                    Av. do Batel, 1230, Condomínio do Edifício Batel Trade Center, Batel, Curitiba, Paraná
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-[#7D2B2B]" />
                  <a href="tel:+5541988356427" className="transition-colors hover:text-[#7D2B2B]">
                    (41) 98835-6427
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-[#7D2B2B]" />
                  <a href="mailto:contato@ampliareconsultoria.com.br" className="transition-colors hover:text-[#7D2B2B]">
                    contato@ampliareconsultoria.com.br
                  </a>
                </li>
              </ul>
              <div className="mt-8 w-full sm:w-auto">
                <Link
                  href="/contato"
                  className="inline-flex w-full items-center justify-center rounded bg-[#7D2B2B] px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-[#9B3535] hover:shadow-crimson focus:outline-none focus:ring-2 focus:ring-[#7D2B2B] focus:ring-offset-2 focus:ring-offset-black sm:w-auto"
                >
                  Entre em contato
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Separador decorativo: barra 3px gradiente bordô → steel → bordô */}
        <div
          className="h-[3px] w-full bg-gradient-to-r from-[#7D2B2B] via-[#6B6B6B] to-[#7D2B2B]"
          aria-hidden
        />
      </section>

      {/* ━━━ PARTE 2 — Rodapé inferior (4 colunas) */}
      <section className="bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Coluna 1 — Marca */}
            <div>
              <Link href="/" className="text-lg font-bold tracking-tight text-[#F0EDE8] transition-colors hover:text-[#7D2B2B]">
                Ampliare Consultoria
              </Link>
              <p className="mt-2 text-sm text-[#A8A8A8]">Criamos a evolução</p>
            </div>

            {/* Coluna 2 — Páginas */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A8A8A8]">Páginas</h4>
              <ul className="mt-4 flex flex-col gap-2">
                {paginas.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-[#A8A8A8] transition-colors hover:text-[#7D2B2B]">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3 — Serviços */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A8A8A8]">Serviços</h4>
              <ul className="mt-4 flex flex-col gap-2">
                {servicos.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-[#A8A8A8] transition-colors hover:text-[#7D2B2B]">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 4 — Contato */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A8A8A8]">Contato</h4>
              <ul className="mt-4 space-y-2 text-sm text-[#A8A8A8]">
                <li>
                  <a href="tel:+5541988356427" className="transition-colors hover:text-[#7D2B2B]">(41) 98835-6427</a>
                </li>
                <li>
                  <a href="mailto:contato@ampliareconsultoria.com.br" className="transition-colors hover:text-[#7D2B2B]">
                    contato@ampliareconsultoria.com.br
                  </a>
                </li>
                <li>Curitiba, Paraná</li>
              </ul>
            </div>
          </div>

          {/* Linha final — copyright */}
          <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-sm text-[#6B6B6B]">
            Ampliare Consultoria © 2026 — Todos os direitos reservados
          </div>
        </div>
      </section>
    </footer>
  );
}
