"use client";

import { motion } from "framer-motion";

const defaultVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  once = true,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px 0px" }}
      variants={{
        ...defaultVariants,
        visible: {
          ...defaultVariants.visible,
          transition: {
            ...defaultVariants.visible.transition,
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
