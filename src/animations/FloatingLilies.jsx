import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useIsMobile } from '../hooks/useIsMobile';
import { motionConfig } from '../data/motion';

/**
 * Botanical Lily Component with floating animation, soft lavender backdrop glow,
 * natural delays, and strict non-overlapping boundary constraints.
 */
export function FloatingLily({
  src,
  className = "",
  initialRotate = 0,
  delay = 0,
  duration = 9,
  glow = true,
  driftDirection = "top", // top, bottom, left, right
  size = "md"
}) {
  const reducedMotion = useReducedMotion();
  const { isMobile } = useIsMobile();
  const cfg = isMobile ? motionConfig.lilies.mobile : motionConfig.lilies.desktop;

  // On reduced motion, render purely static element
  if (reducedMotion) {
    return (
      <div 
        className={`absolute pointer-events-none select-none z-0 ${className}`}
        aria-hidden="true"
        style={{ transform: `rotate(${initialRotate}deg)` }}
      >
        {glow && (
          <div className="absolute inset-0 -m-8 bg-gradient-radial from-[#7153A5]/25 via-[#B9A0E8]/10 to-transparent rounded-full" />
        )}
        <img 
          src={src} 
          alt="" 
          loading="lazy" 
          decoding="async" 
          className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.85)]" 
        />
      </div>
    );
  }

  const floatY = cfg.floatYRange[1];
  const rotateDelta = cfg.rotateRange[1];

  // Subtle initial entrance drift
  const getInitialDrift = () => {
    switch (driftDirection) {
      case "top": return { y: -30, opacity: 0 };
      case "bottom": return { y: 30, opacity: 0 };
      case "left": return { x: -30, opacity: 0 };
      case "right": return { x: 30, opacity: 0 };
      default: return { opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialDrift()}
      animate={{
        x: 0,
        y: [0, -floatY, 0, floatY * 0.5, 0],
        rotate: [initialRotate, initialRotate + rotateDelta, initialRotate - rotateDelta * 0.6, initialRotate],
        scale: [1, cfg.scaleRange[1], 1],
        opacity: 1
      }}
      transition={{
        opacity: { duration: 1.2, delay },
        x: { duration: 1.5, delay, ease: "easeOut" },
        y: {
          duration,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay
        },
        rotate: {
          duration: duration * 1.3,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: delay + 0.3
        },
        scale: {
          duration: duration * 1.5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay
        }
      }}
      className={`absolute pointer-events-none select-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* Soft lavender glow behind flower - static radial gradient rather than heavy live blur */}
      {glow && (
        <div 
          className="absolute inset-0 -m-8 rounded-full pointer-events-none bg-gradient-to-r from-[#7153A5]/20 via-[#B9A0E8]/15 to-transparent opacity-80"
          style={{
            background: "radial-gradient(circle, rgba(113,83,165,0.3) 0%, rgba(185,160,232,0.12) 50%, transparent 75%)"
          }}
        />
      )}
      <img
        src={src}
        alt=""
        loading="lazy"
        decoding="async"
        className="w-full h-full object-contain filter drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)] opacity-90 transition-opacity duration-500"
      />
    </motion.div>
  );
}
