"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  index?: number;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  index = 0,
}: ServiceCardProps) {
  const content = (
    <>
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-foreground/80 leading-relaxed">{description}</p>
      {href && (
        <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
          Saiba mais →
        </span>
      )}
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="flex flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/10"
    >
      {href ? (
        <Link href={href} className="flex flex-col gap-3 text-left">
          {content}
        </Link>
      ) : (
        <div className="flex flex-col gap-3">{content}</div>
      )}
    </motion.div>
  );
}
