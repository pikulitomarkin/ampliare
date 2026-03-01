import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre a Ampliare | Ampliare Consultoria",
  description:
    "Conheça a Ampliare Consultoria: criamos a evolução com soluções estratégicas de marketing, vendas e transformação digital. Parcerias duradouras e crescimento sustentável.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
