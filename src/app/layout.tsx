import type { Metadata, Viewport } from "next";
import { Syne } from "next/font/google";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import "./globals.css";
import { Header } from "@/components/Header";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ampliare Consultoria | Soluções Estratégicas",
    template: "%s | Ampliare Consultoria",
  },
  description:
    "Ampliare Consultoria - Consultoria estratégica para ampliar resultados e transformar negócios. Marketing, vendas e transformação digital.",
  openGraph: {
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${syne.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <footer>
          <section style={{ background: "var(--bg-dark)" }}>
            <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20 lg:px-16 lg:py-24">
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
                <div>
                  <h2 className="font-display text-responsive-h2 font-bold uppercase leading-tight tracking-tight" style={{ color: "var(--text-light)" }}>
                    O digital avança todos os dias
                  </h2>
                  <p className="mt-6 text-base leading-relaxed sm:text-lg" style={{ color: "var(--gray-300)" }}>
                    O ambiente digital se transforma em ritmo acelerado, exigindo adaptação contínua das marcas que desejam permanecer relevantes. Novas tecnologias, comportamentos e oportunidades surgem constantemente, e acompanhar esse movimento deixou de ser diferencial — tornou-se necessidade.
                  </p>
                  <p className="mt-4 text-base leading-relaxed sm:text-lg" style={{ color: "var(--gray-300)" }}>
                    Empresas que evoluem com estratégia, dados e inovação conseguem não apenas acompanhar as mudanças, mas liderar seus mercados.
                  </p>
                </div>
                <div className="flex flex-col justify-center lg:items-end">
                  <ul className="space-y-4 text-sm sm:text-base" style={{ color: "var(--text-light)" }}>
                    <li className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "var(--crimson)" }} />
                      <span>
                        Av. do Batel, 1230, Condomínio do Edifício Batel Trade Center, Batel, Curitiba, Paraná
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone className="h-5 w-5 shrink-0" style={{ color: "var(--crimson)" }} />
                      <a href="tel:+5541988356427" className="transition-colors hover:opacity-90" style={{ color: "var(--text-light)" }}>
                        (41) 98835-6427
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail className="h-5 w-5 shrink-0" style={{ color: "var(--crimson)" }} />
                      <a href="mailto:contato@ampliareconsultoria.com.br" className="transition-colors hover:opacity-90" style={{ color: "var(--text-light)" }}>
                        contato@ampliareconsultoria.com.br
                      </a>
                    </li>
                  </ul>
                  <div className="mt-8 w-full sm:w-auto">
                    <Link
                      href="/contato"
                      className="btn-cta-footer inline-flex w-full items-center justify-center rounded px-6 py-3.5 text-sm font-semibold uppercase tracking-wider shadow-lg transition-all sm:w-auto"
                    >
                      Entre em contato
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="section-separator w-full"
              aria-hidden
            />
          </section>
          <div
            style={{
              borderTop: "1px solid var(--border-light)",
              padding: "1.5rem",
              textAlign: "center",
              color: "var(--text-muted)",
              fontSize: "0.8rem",
              background: "var(--bg-main)",
            }}
          >
            Ampliare Consultoria © 2026 — Todos os direitos reservados
          </div>
        </footer>
      </body>
    </html>
  );
}
