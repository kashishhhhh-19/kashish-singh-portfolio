import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

/**
 * Animated gold line with luxury diamond center accent.
 * Draws in smoothly when scrolled into view.
 */
export function GoldSectionDivider({ className = "" }) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div className={`flex items-center justify-center gap-3 my-4 ${className}`} aria-hidden="true">
        <div className="h-[1px] w-16 md:w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]" />
        <div className="w-2 h-2 rotate-45 bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
        <div className="h-[1px] w-16 md:w-24 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]" />
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center gap-3 my-4 ${className}`} aria-hidden="true">
      {/* Left drawing line */}
      <motion.div
        initial={{ scaleX: 0, originX: 1 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="h-[1px] w-16 md:w-24 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-[#D4AF37]"
      />
      
      {/* Center luxury diamond */}
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        whileInView={{ scale: 1, rotate: 45 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        className="w-2 h-2 bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.6)]"
      />

      {/* Right drawing line */}
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="h-[1px] w-16 md:w-24 bg-gradient-to-l from-transparent via-[#D4AF37]/60 to-[#D4AF37]"
      />
    </div>
  );
}
