import type { Metadata, Viewport } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
        <Footer />
      </body>
    </html>
  );
}
