"use client";

import { useRef, type PointerEvent } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  interactive?: boolean;
}

export function Card({ children, className, delay = 0, interactive = true }: CardProps) {
  const surface = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const lightX = useMotionValue(50);
  const lightY = useMotionValue(50);
  const rotateX = useSpring(x, { stiffness: 180, damping: 24 });
  const rotateY = useSpring(y, { stiffness: 180, damping: 24 });
  const light = useMotionTemplate`radial-gradient(circle at ${lightX}% ${lightY}%, rgba(125, 211, 252, .18), transparent 65%)`;
  function reset() { x.set(0); y.set(0); }
  function tilt(event: PointerEvent<HTMLDivElement>) {
    if (reducedMotion || !interactive || event.pointerType !== "mouse" || !surface.current) return;
    const bounds = surface.current.getBoundingClientRect();
    const px = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
    const py = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));
    x.set((.5 - py) * 14); y.set((px - .5) * 14);
    lightX.set(px * 100); lightY.set(py * 100);
  }
  return (
    <div ref={surface} className="card-perspective h-full" onPointerMove={tilt} onPointerLeave={reset} onPointerCancel={reset}>
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 45, rotateX: 12 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: .15 }}
      transition={{ duration: .65, delay: Math.min(delay, .3) }}
      className="h-full"
    >
    <motion.div
      style={{ rotateX: reducedMotion ? 0 : rotateX, rotateY: reducedMotion ? 0 : rotateY, transformStyle: "preserve-3d" }}
      className={cn(
        "depth-card relative h-full rounded-2xl bg-gradient-to-br from-gray-900/95 to-gray-800/95 border border-gray-700/50 shadow-2xl",
        className
      )}
    >
      <motion.div aria-hidden="true" style={{ background: light }} className="card-light pointer-events-none absolute inset-0 rounded-2xl" />
      <div className="relative h-full card-content">{children}</div>
    </motion.div>
    </motion.div>
    </div>
  );
}
