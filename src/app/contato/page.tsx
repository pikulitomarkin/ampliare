"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

type FormErrors = Partial<Record<string, string>>;

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!nome.trim()) next.nome = "Nome é obrigatório.";
    if (!email.trim()) next.email = "E-mail é obrigatório.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Informe um e-mail válido.";
    if (!telefone.trim()) next.telefone = "Telefone é obrigatório.";
    if (!mensagem.trim()) next.mensagem = "Mensagem é obrigatória.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      // Simula envio; substitua por chamada à API
      await new Promise((r) => setTimeout(r, 1500));
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen px-6 py-16 md:px-8 md:py-20 lg:px-16 lg:py-24" style={{ background: "var(--bg-main)" }}>
      <div className="mx-auto max-w-7xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "var(--text-primary)" }}>
            Entre em Contato
          </h1>
          <p className="mt-3 text-lg" style={{ color: "var(--text-secondary)" }}>
            Vamos conversar sobre como acelerar o crescimento do seu negócio
          </p>
        </motion.header>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:mt-16 lg:gap-16">
          {/* Coluna esquerda — Formulário */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium" style={{ color: "var(--gray-700)" }}>
                  Nome *
                </label>
                <input
                  id="nome"
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="mt-1.5 w-full rounded border px-4 py-3 transition-colors focus:border-[var(--crimson)] focus:outline-none focus:ring-2 focus:ring-[var(--crimson)] focus:ring-offset-2 focus:ring-offset-[var(--bg-main)]"
                  style={{
                    borderColor: "var(--border-light)",
                    background: "var(--bg-card)",
                    color: "var(--text-primary)",
                  }}
                  placeholder="Seu nome"
                  aria-invalid={!!errors.nome}
                  aria-describedby={errors.nome ? "erro-nome" : undefined}
                />
                {errors.nome && (
                  <p id="erro-nome" className="mt-1.5 text-sm text-red-400">
                    {errors.nome}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium" style={{ color: "var(--gray-700)" }}>
                  E-mail *
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1.5 w-full rounded border px-4 py-3 transition-colors focus:border-[var(--crimson)] focus:outline-none focus:ring-2 focus:ring-[var(--crimson)] focus:ring-offset-2 focus:ring-offset-[var(--bg-main)]"
                  style={{
                    borderColor: "var(--border-light)",
                    background: "var(--bg-card)",
                    color: "var(--text-primary)",
                  }}
                  placeholder="seu@email.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "erro-email" : undefined}
                />
                {errors.email && (
                  <p id="erro-email" className="mt-1.5 text-sm text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium" style={{ color: "var(--gray-700)" }}>
                  Telefone *
                </label>
                <input
                  id="telefone"
                  type="tel"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="mt-1.5 w-full rounded border px-4 py-3 transition-colors focus:border-[var(--crimson)] focus:outline-none focus:ring-2 focus:ring-[var(--crimson)] focus:ring-offset-2 focus:ring-offset-[var(--bg-main)]"
                  style={{
                    borderColor: "var(--border-light)",
                    background: "var(--bg-card)",
                    color: "var(--text-primary)",
                  }}
                  placeholder="(11) 99999-9999"
                  aria-invalid={!!errors.telefone}
                  aria-describedby={errors.telefone ? "erro-telefone" : undefined}
                />
                {errors.telefone && (
                  <p id="erro-telefone" className="mt-1.5 text-sm text-red-400">
                    {errors.telefone}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="empresa" className="block text-sm font-medium" style={{ color: "var(--gray-700)" }}>
                  Empresa
                </label>
                <input
                  id="empresa"
                  type="text"
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value)}
                  className="mt-1.5 w-full rounded border px-4 py-3 transition-colors focus:border-[var(--crimson)] focus:outline-none focus:ring-2 focus:ring-[var(--crimson)] focus:ring-offset-2 focus:ring-offset-[var(--bg-main)]"
                  style={{
                    borderColor: "var(--border-light)",
                    background: "var(--bg-card)",
                    color: "var(--text-primary)",
                  }}
                  placeholder="Sua empresa"
                />
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium" style={{ color: "var(--gray-700)" }}>
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  rows={4}
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="mt-1.5 w-full min-h-[120px] resize-y rounded border px-4 py-3 transition-colors focus:border-[var(--crimson)] focus:outline-none focus:ring-2 focus:ring-[var(--crimson)] focus:ring-offset-2 focus:ring-offset-[var(--bg-main)]"
                  style={{
                    borderColor: "var(--border-light)",
                    background: "var(--bg-card)",
                    color: "var(--text-primary)",
                  }}
                  placeholder="Como podemos ajudar?"
                  aria-invalid={!!errors.mensagem}
                  aria-describedby={errors.mensagem ? "erro-mensagem" : undefined}
                />
                {errors.mensagem && (
                  <p id="erro-mensagem" className="mt-1.5 text-sm text-red-400">
                    {errors.mensagem}
                  </p>
                )}
              </div>
              {submitted && (
                <p className="rounded px-4 py-3 text-sm" style={{ background: "var(--crimson-muted)", color: "var(--text-primary)" }}>
                  Mensagem recebida. Retornaremos em breve!
                </p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded px-4 py-3.5 text-sm font-semibold uppercase tracking-wider shadow-lg transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--crimson)] focus:ring-offset-2 focus:ring-offset-[var(--bg-main)] disabled:cursor-not-allowed disabled:opacity-70"
                style={{ background: "var(--crimson)", color: "var(--text-light)" }}
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" aria-hidden />
                    Enviando...
                  </>
                ) : (
                  "Enviar mensagem"
                )}
              </button>
            </form>
          </motion.div>

          {/* Coluna direita — Informações */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col justify-center lg:pl-4"
          >
            <h2 className="text-lg font-semibold lg:text-xl" style={{ color: "var(--text-primary)" }}>
              Informações de contato
            </h2>
            <ul className="mt-6 space-y-6">
              <li className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ background: "var(--crimson-muted)", color: "var(--crimson)" }}>
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--gray-700)" }}>Endereço</p>
                  <p className="mt-1" style={{ color: "var(--text-primary)" }}>
                    Av. do Batel, 1230, Condomínio do Edifício Batel Trade Center, Batel, Curitiba, Paraná
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ background: "var(--crimson-muted)", color: "var(--crimson)" }}>
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--gray-700)" }}>Telefone</p>
                  <a
                    href="tel:+5541988356427"
                    className="mt-1 block transition-colors hover:opacity-90"
                    style={{ color: "var(--text-primary)" }}
                  >
                    (41) 98835-6427
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ background: "var(--crimson-muted)", color: "var(--crimson)" }}>
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--gray-700)" }}>E-mail</p>
                  <a
                    href="mailto:contato@ampliareconsultoria.com.br"
                    className="mt-1 block transition-colors hover:opacity-90"
                    style={{ color: "var(--text-primary)" }}
                  >
                    contato@ampliareconsultoria.com.br
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
