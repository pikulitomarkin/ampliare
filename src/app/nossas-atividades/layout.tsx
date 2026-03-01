import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nossas Atividades | Ampliare Consultoria",
  description:
    "Como atuamos: gestão de mídia, redes sociais, inbound marketing, e-commerce, criação de campanhas, insights de mercado, SEO e agentes de IA. Ações de marketing e vendas com impacto.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
