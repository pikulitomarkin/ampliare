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
    <section className="min-h-screen bg-foreground px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Entre em Contato
          </h1>
          <p className="mt-3 text-lg text-white/80">
            Vamos conversar sobre como acelerar o crescimento do seu negócio
          </p>
        </motion.header>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          {/* Coluna esquerda — Formulário */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-white/90">
                  Nome *
                </label>
                <input
                  id="nome"
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
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
                <label htmlFor="email" className="block text-sm font-medium text-white/90">
                  E-mail *
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
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
                <label htmlFor="telefone" className="block text-sm font-medium text-white/90">
                  Telefone *
                </label>
                <input
                  id="telefone"
                  type="tel"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
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
                <label htmlFor="empresa" className="block text-sm font-medium text-white/90">
                  Empresa
                </label>
                <input
                  id="empresa"
                  type="text"
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Sua empresa"
                />
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-white/90">
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  rows={4}
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="mt-1.5 w-full resize-y rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 min-h-[120px]"
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
                <p className="rounded-lg bg-primary/20 px-4 py-3 text-sm text-white">
                  Mensagem recebida. Retornaremos em breve!
                </p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-primary-light hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-foreground disabled:cursor-not-allowed disabled:opacity-70"
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
            <h2 className="text-lg font-semibold text-white lg:text-xl">
              Informações de contato
            </h2>
            <ul className="mt-6 space-y-6">
              <li className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-white/70">Endereço</p>
                  <p className="mt-1 text-white/95">
                    R. Bruxelas, 188 – Conj 02 – Sumaré, São Paulo – SP, 01259-020
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-white/70">Telefone</p>
                  <a
                    href="tel:+5511912613992"
                    className="mt-1 block text-white/95 hover:text-primary transition-colors"
                  >
                    (11) 91261-3992
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-white/70">E-mail</p>
                  <a
                    href="mailto:contato@layerup.com.br"
                    className="mt-1 block text-white/95 hover:text-primary transition-colors"
                  >
                    contato@layerup.com.br
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
