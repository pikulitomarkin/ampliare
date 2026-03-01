import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soluções Estratégicas | Ampliare Consultoria",
  description:
    "Soluções integradas de marketing e crescimento: fortalecimento de marca, geração de demanda, gestão de mídia, comunicação e identidade. Resultados sustentáveis para seu negócio.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
