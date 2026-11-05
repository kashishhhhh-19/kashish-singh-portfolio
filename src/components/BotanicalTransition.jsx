import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

/**
 * Sparse botanical transition between selected sections.
 * Displays fine lavender botanical vine outlines, delicate gold accent, and optional floating petals.
 */
export function BotanicalTransition({ variant = "vine", className = "" }) {
  const reducedMotion = useReducedMotion();

  return (
    <div className={`relative w-full overflow-hidden pointer-events-none py-6 my-2 ${className}`} aria-hidden="true">
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-center gap-4">
        {/* Left fine botanical lavender stroke */}
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#B9A0E8]/30 to-[#B9A0E8]/60" />

        {/* Botanical Motif Center */}
        <div className="relative flex items-center justify-center">
          <svg className="w-8 h-8 text-[#B9A0E8]/70" viewBox="0 0 40 40" fill="none">
            {/* Fine botanical leaf curves */}
            <path
              d="M20 5 C23 12 25 15 20 20 C15 15 17 12 20 5 Z"
              stroke="#B9A0E8"
              strokeWidth="1"
              fill="rgba(185, 160, 232, 0.15)"
            />
            <path
              d="M35 20 C28 23 25 25 20 20 C25 15 28 17 35 20 Z"
              stroke="#B9A0E8"
              strokeWidth="1"
              fill="rgba(185, 160, 232, 0.15)"
            />
            <path
              d="M20 35 C17 28 15 25 20 20 C25 25 23 28 20 35 Z"
              stroke="#B9A0E8"
              strokeWidth="1"
              fill="rgba(185, 160, 232, 0.15)"
            />
            <path
              d="M5 20 C12 17 15 15 20 20 C15 25 12 23 5 20 Z"
              stroke="#B9A0E8"
              strokeWidth="1"
              fill="rgba(185, 160, 232, 0.15)"
            />
            {/* Center Gold Accent Stamen */}
            <circle cx="20" cy="20" r="2.5" fill="#D4AF37" className="filter drop-shadow-[0_0_4px_rgba(212,175,55,0.8)]" />
          </svg>
        </div>

        {/* Right fine botanical lavender stroke */}
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#B9A0E8]/30 to-[#B9A0E8]/60" />
      </div>
    </div>
  );
}
