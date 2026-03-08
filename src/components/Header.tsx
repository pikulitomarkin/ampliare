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
      <div
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 md:px-8 lg:px-16"
      >
        <Link
          href="/"
          className="shrink-0 transition-opacity hover:opacity-90"
          style={{ position: "relative", zIndex: 10, maxWidth: "100%" }}
          aria-label="Ampliare Consultoria - início"
        >
          <svg
            viewBox="0 0 260 90"
            style={{ maxWidth: "100%", height: "auto", width: "160px", flexShrink: 0 }}
            className="h-auto"
            aria-hidden
          >
            <rect x="2" y="2" width="62" height="62" fill="#1a1a1a" stroke="#555" strokeWidth="1.5" rx="2" />
            <polygon points="33,10 58,50 8,50" fill="#7D2B2B" />
            <polygon points="8,50 33,50 8,64" fill="#6B6B6B" />
            <polygon points="58,50 33,50 58,64" fill="#8a8a8a" />
            <text x="78" y="38" fontFamily="Georgia, serif" fontSize="22" fontWeight="400" fill="#C8C4BE" letterSpacing="5">
              AMPLIARE
            </text>
            <text x="84" y="56" fontFamily="Georgia, serif" fontSize="9" fontWeight="400" fill="#888884" letterSpacing="4">
              CONSULTORIA
            </text>
          </svg>
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
