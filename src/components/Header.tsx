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
    <header className="sticky top-0 z-50 w-full shadow-lg backdrop-blur-md" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", background: "var(--bg-header)" }}>
      <div
        className="mx-auto flex w-full max-w-7xl items-center justify-between py-3 px-4 sm:px-6 md:px-8 lg:px-16"
      >
        <Link
          href="/"
          className="shrink-0 transition-opacity hover:opacity-90"
          style={{ position: "relative", zIndex: 10, maxWidth: "100%" }}
          aria-label="Ampliare Consultoria - início"
        >
          <svg
            viewBox="0 0 260 90"
            style={{ maxWidth: "100%", height: "auto", width: "clamp(120px, 20vw, 160px)", flexShrink: 0 }}
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
          className="flex shrink-0 items-center justify-center rounded-lg transition-colors"
          style={{ color: "var(--text-light)", zIndex: 60, minWidth: "44px", minHeight: "44px" }}
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {menuAberto && (
        <div
          className="fixed left-0 top-0 z-50 flex h-screen w-screen flex-col items-center justify-center gap-8 overflow-hidden"
          style={{ backgroundColor: "#1A1010" }}
        >
          <button
            type="button"
            onClick={() => setMenuAberto(false)}
            className="absolute right-6 top-6 cursor-pointer border-none bg-transparent text-[2rem] transition-colors hover:opacity-80"
            style={{ color: "var(--text-light)" }}
            aria-label="Fechar menu"
          >
            ✕
          </button>

          <nav className="flex flex-col items-center gap-6 px-4">
            <Link href="/" onClick={() => setMenuAberto(false)} className="nav-overlay-link text-2xl sm:text-3xl md:text-4xl font-light no-underline tracking-wide transition-colors">
              Início
            </Link>
            <Link href="/solucoes-estrategicas" onClick={() => setMenuAberto(false)} className="nav-overlay-link text-2xl sm:text-3xl md:text-4xl font-light no-underline tracking-wide transition-colors">
              Soluções Estratégicas
            </Link>
            <Link href="/nossas-atividades" onClick={() => setMenuAberto(false)} className="nav-overlay-link text-2xl sm:text-3xl md:text-4xl font-light no-underline tracking-wide transition-colors">
              Nossas Atividades
            </Link>
            <Link href="/ampliare-consultoria" onClick={() => setMenuAberto(false)} className="nav-overlay-link text-2xl sm:text-3xl md:text-4xl font-light no-underline tracking-wide transition-colors">
              Ampliare Consultoria
            </Link>
            <Link
              href="/contato"
              onClick={() => setMenuAberto(false)}
              className="mt-4 inline-block px-8 py-3.5 text-sm sm:text-base font-medium uppercase tracking-wider no-underline transition-colors hover:opacity-90"
              style={{ backgroundColor: "var(--crimson)", color: "#EDE8E0", minHeight: "44px", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              Entre em Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
