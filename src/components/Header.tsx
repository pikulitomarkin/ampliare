"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuAberto(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuAberto ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuAberto]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#2A2A2A] bg-[#0a0a0a]/95 shadow-lg backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0 transition-opacity hover:opacity-90">
          <img
            src="/logos/ampliare.jpeg"
            alt="Ampliare Consultoria"
            style={{ height: "48px", width: "auto", objectFit: "contain" }}
          />
        </Link>

        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#A8A8A8] transition-colors hover:text-[#7D2B2B]"
          style={{ zIndex: 60 }}
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {menuAberto && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#0a0a0a",
            zIndex: 50,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            overflow: "hidden",
          }}
        >
          <button
            type="button"
            onClick={() => setMenuAberto(false)}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              color: "#A8A8A8",
              fontSize: "2rem",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            aria-label="Fechar menu"
          >
            ✕
          </button>

          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <Link
              href="/"
              onClick={() => setMenuAberto(false)}
              style={{
                color: "#F0EDE8",
                fontSize: "2rem",
                fontWeight: "300",
                textDecoration: "none",
                letterSpacing: "0.05em",
              }}
            >
              Início
            </Link>
            <Link
              href="/solucoes-estrategicas"
              onClick={() => setMenuAberto(false)}
              style={{
                color: "#F0EDE8",
                fontSize: "2rem",
                fontWeight: "300",
                textDecoration: "none",
                letterSpacing: "0.05em",
              }}
            >
              Soluções Estratégicas
            </Link>
            <Link
              href="/nossas-atividades"
              onClick={() => setMenuAberto(false)}
              style={{
                color: "#F0EDE8",
                fontSize: "2rem",
                fontWeight: "300",
                textDecoration: "none",
                letterSpacing: "0.05em",
              }}
            >
              Nossas Atividades
            </Link>
            <Link
              href="/ampliare-consultoria"
              onClick={() => setMenuAberto(false)}
              style={{
                color: "#F0EDE8",
                fontSize: "2rem",
                fontWeight: "300",
                textDecoration: "none",
                letterSpacing: "0.05em",
              }}
            >
              Ampliare Consultoria
            </Link>
            <Link
              href="/contato"
              onClick={() => setMenuAberto(false)}
              style={{
                display: "inline-block",
                marginTop: "1rem",
                padding: "0.875rem 2.5rem",
                backgroundColor: "#7D2B2B",
                color: "#F0EDE8",
                fontSize: "1rem",
                fontWeight: "500",
                textDecoration: "none",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Entre em Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
