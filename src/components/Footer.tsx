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
  { label: "Inbound Marketing", href: "/nossas-atividades#conexao-engajamento" },
  { label: "E-commerce", href: "/nossas-atividades#ecommerce" },
  { label: "Criação de Campanhas", href: "/nossas-atividades#criacao-campanhas" },
  { label: "Insights de Mercado", href: "/nossas-atividades#insights-mercado" },
  { label: "SEO", href: "/nossas-atividades#consultoria-seo" },
  { label: "Agentes de IA", href: "/nossas-atividades#agentes-ia" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      {/* Barra colorida decorativa no topo (gradiente roxo → amarelo → rosa) */}
      <div
        className="h-2 w-full bg-gradient-to-r from-primary via-accent to-pink-400"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo + tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-white hover:opacity-90"
            >
              Ampliare Consultoria
            </Link>
            <p className="mt-2 text-sm text-white/80">
              Criamos a evolução
            </p>
          </div>

          {/* Coluna 1 — Páginas */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/70">
              Páginas
            </h4>
            <ul className="mt-4 flex flex-col gap-2">
              {paginas.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 2 — Serviços */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/70">
              Serviços
            </h4>
            <ul className="mt-4 flex flex-col gap-2">
              {servicos.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — Contato */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/70">
              Contato
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  R. Bruxelas, 188 – Conj 02 – Sumaré, São Paulo – SP, 01259-020
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a
                  href="tel:+5511912613992"
                  className="hover:text-white transition-colors"
                >
                  (11) 91261-3992
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a
                  href="mailto:contato@layerup.com.br"
                  className="hover:text-white transition-colors"
                >
                  contato@layerup.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          © 2025 Ampliare Consultoria. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
