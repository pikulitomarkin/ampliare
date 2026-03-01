import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Ampliare Consultoria",
  description:
    "Entre em contato com a Ampliare Consultoria. Vamos conversar sobre como acelerar o crescimento do seu negócio com marketing, vendas e transformação digital.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
