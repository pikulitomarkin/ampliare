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
        <footer className="text-white">
          <section className="bg-black">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
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
            <div
              className="h-[3px] w-full bg-gradient-to-r from-[#7D2B2B] via-[#6B6B6B] to-[#7D2B2B]"
              aria-hidden
            />
          </section>
          <div
            style={{
              borderTop: "1px solid #1a1a1a",
              padding: "1.5rem",
              textAlign: "center",
              color: "#444",
              fontSize: "0.8rem",
            }}
          >
            Ampliare Consultoria © 2026 — Todos os direitos reservados
          </div>
        </footer>
      </body>
    </html>
  );
}
