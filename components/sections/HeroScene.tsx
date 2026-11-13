"use client";

import { useRef, type PointerEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { Code2, Layers, Sparkles } from "lucide-react";

export function HeroScene() {
  const scene = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: scene, offset: ["start end", "end start"] });
  const scrollRotation = useTransform(scrollYProgress, [0, 1], [-35, 145]);
  const scrollTilt = useTransform(scrollYProgress, [0, 1], [18, -28]);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(pointerX, { stiffness: 100, damping: 22 });
  const rotateY = useSpring(pointerY, { stiffness: 100, damping: 22 });
  function move(event: PointerEvent<HTMLDivElement>) {
    if (reducedMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((.5 - (event.clientY - bounds.top) / bounds.height) * 28);
    pointerY.set(((event.clientX - bounds.left) / bounds.width - .5) * 36);
  }
  function reset() { pointerX.set(0); pointerY.set(0); }
  return (
    <div ref={scene} className="hero-scene" onPointerMove={move} onPointerLeave={reset} onPointerCancel={reset}>
      <div className="scene-halo" aria-hidden="true" />
      <motion.div className="scene-camera" aria-hidden="true" style={{ rotateX: reducedMotion ? 0 : rotateX, rotateY: reducedMotion ? 0 : rotateY }}>
        <motion.div className="scene-object" style={{ rotateY: reducedMotion ? -25 : scrollRotation, rotateX: reducedMotion ? -15 : scrollTilt }}>
          <div className="scene-ring ring-one" /><div className="scene-ring ring-two" /><div className="scene-ring ring-three" />
          <div className="scene-cube">
            {["front", "back", "right", "left", "top", "bottom"].map((face, index) => (
              <div key={face} className={`cube-face cube-${face}`}>
                {index % 3 === 0 ? <Code2 /> : index % 3 === 1 ? <Layers /> : <Sparkles />}
                <span>{["CREATE", "EXPLORE", "BUILD", "IMAGINE", "DESIGN", "DEVELOP"][index]}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <div className="scene-chip chip-one"><span /> Interactive by design</div>
        <div className="scene-chip chip-two"><Code2 size={14} /> Ideas into experiences</div>
      </motion.div>
      <p className="scene-caption">Move to explore <span> / </span> Scroll to rotate</p>
    </div>
  );
}
