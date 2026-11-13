"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export function Button({
  variant = "primary",
  children,
  className,
  href,
  type = "button",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "px-8 py-3 rounded-xl font-medium transition-all duration-300 inline-flex items-center gap-2";
  
  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl",
    secondary:
      "bg-gray-800/80 hover:bg-gray-700/80 text-white border border-gray-600/50",
    ghost: "text-gray-300 hover:text-white hover:bg-gray-800/50",
  };

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={href}
        className={cn(baseStyles, variants[variant], className)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], className)}
    >
      {children}
    </motion.button>
  );
}
