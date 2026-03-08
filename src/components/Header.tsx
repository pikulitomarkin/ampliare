"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Soluções Estratégicas", href: "/solucoes-estrategicas" },
  { label: "Nossas Atividades", href: "/nossas-atividades" },
  { label: "Ampliare Consultoria", href: "/ampliare-consultoria" },
];

const overlayVariants = {
  closed: { opacity: 0, transition: { duration: 0.25 } },
  open: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const contentVariants = {
  closed: { opacity: 0, y: 20 },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: 0.05 + i * 0.06, ease: [0.22, 1, 0.36, 1] as const },
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: 10,
    transition: { duration: 0.2, delay: i * 0.02 },
  }),
};

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#2A2A2A] bg-[#0a0a0a]/95 shadow-lg backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0 transition-opacity hover:opacity-90">
          <Image
            src="/logos/logo.png"
            alt="Ampliare Consultoria"
            width={140}
            height={60}
            className="glow-crimson h-10 w-auto object-contain sm:h-12"
          />
        </Link>

        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#A8A8A8] transition-colors hover:text-[#7D2B2B]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <motion.div initial={false} animate={{ rotate: menuOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="exit"
            variants={overlayVariants}
            className="fixed inset-0 z-40 bg-[#0a0a0a]"
            aria-hidden="false"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-8 px-6 py-20" aria-label="Menu principal">
              {navItems.map((item, i) => (
                <motion.div key={item.href} custom={i} variants={contentVariants} initial="closed" animate="open" exit="exit">
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block text-center text-2xl font-medium tracking-tight text-[#F0EDE8] transition-colors sm:text-3xl lg:text-4xl ${
                      pathname === item.href ? "underline decoration-[#7D2B2B] decoration-2 underline-offset-4" : "hover:underline hover:decoration-[#7D2B2B] hover:decoration-2 hover:underline-offset-4"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div custom={navItems.length} variants={contentVariants} initial="closed" animate="open" exit="exit" className="mt-4">
                <Link
                  href="/contato"
                  onClick={() => setMenuOpen(false)}
                  className="inline-block rounded bg-[#7D2B2B] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:bg-[#9B3535] hover:shadow-crimson sm:text-xl"
                >
                  Entre em Contato
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
