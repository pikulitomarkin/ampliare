"use client";

import { motion } from "framer-motion";

interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTag({ children, className = "" }: SectionTagProps) {
  return (
    <motion.span
      className={`inline-block rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ${className}`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.span>
  );
}
