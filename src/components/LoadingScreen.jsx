import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { motionConfig } from '../data/motion';

/**
 * Botanical Midnight Lavender preloader.
 * Strictly capped at <= 1.2s, skipped on repeat visits in session, and skipped under reduced motion.
 * Renders cleanly above the site without blocking initial HTML structure.
 */
export function LoadingScreen({ onComplete }) {
  const reducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    if (reducedMotion) return false;
    const hasVisited = sessionStorage.getItem(motionConfig.loader.sessionStorageKey);
    return !hasVisited;
  });

  useEffect(() => {
    if (!isVisible) {
      if (onComplete) onComplete();
      return;
    }

    // Set visited flag
    sessionStorage.setItem(motionConfig.loader.sessionStorageKey, 'true');

    // Smoothly exit at max duration
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, motionConfig.loader.maxDurationMs);

    return () => clearTimeout(timer);
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed inset-0 z-[99999] bg-[#09090F] flex flex-col items-center justify-center p-6 text-center select-none"
        aria-hidden="true"
      >
        {/* Soft Lavender ambient backdrop glow */}
        <div 
          className="absolute w-72 h-72 rounded-full pointer-events-none opacity-40 animate-pulse-subtle"
          style={{
            background: 'radial-gradient(circle, rgba(185, 160, 232, 0.25) 0%, rgba(113, 83, 165, 0.1) 50%, transparent 70%)',
          }}
        />

        <div className="relative z-10 space-y-3">
          {/* Site name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-xs uppercase tracking-[0.3em] text-[#B9A0E8] font-medium"
          >
            MIDNIGHT LAVENDER
          </motion.div>

          {/* Owner Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest text-[#F8F6FA]"
          >
            KASHISH SINGH
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-xs sm:text-sm text-[#D8C8F3]/80 tracking-widest font-light uppercase"
          >
            A Botanical Developer Portfolio
          </motion.p>

          {/* Fine gold loading line */}
          <div className="w-48 sm:w-60 h-[1.5px] bg-[#171521] rounded-full mx-auto mt-6 overflow-hidden relative">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1.1,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent shadow-[0_0_8px_rgba(212,175,55,0.7)]"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
