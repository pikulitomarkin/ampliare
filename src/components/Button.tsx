"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ButtonVariant = "primary" | "outline" | "accent" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark border border-primary shadow-md hover:shadow-lg",
  outline:
    "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white",
  accent:
    "bg-accent text-foreground hover:bg-accent-light border border-accent font-semibold",
  ghost:
    "bg-transparent text-foreground hover:bg-black/5 border border-transparent",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const pulseClass =
    variant === "primary" || variant === "outline" ? "btn-pulse" : "";

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${pulseClass} ${className}`;

  if (href) {
    return (
      <Link href={href}>
        <motion.span
          className={combinedClassName}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
