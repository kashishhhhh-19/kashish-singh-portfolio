import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useIsMobile } from '../hooks/useIsMobile';

/**
 * High-performance cursor ambient glow.
 * Runs on a single rAF updating CSS transform directly with zero React state re-renders.
 * Automatically disabled on mobile, touch screens, and when reduced motion is preferred.
 */
export function CursorGlow() {
  const glowRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const { isMobile, hasFinePointer } = useIsMobile();

  useEffect(() => {
    // Strictly disable on mobile, touch, or reduced motion
    if (reducedMotion || isMobile || !hasFinePointer) return;

    const el = glowRef.current;
    if (!el) return;

    let mouseX = -500;
    let mouseY = -500;
    let currentX = -500;
    let currentY = -500;
    let animationFrameId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Smooth lag-free lerp loop
    const render = () => {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      el.style.transform = `translate3d(${currentX - 160}px, ${currentY - 160}px, 0)`;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reducedMotion, isMobile, hasFinePointer]);

  if (reducedMotion || isMobile || !hasFinePointer) return null;

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-80 h-80 rounded-full pointer-events-none z-[9990] transition-opacity duration-300 will-change-transform"
      style={{
        background: 'radial-gradient(circle, rgba(185, 160, 232, 0.08) 0%, rgba(113, 83, 165, 0.03) 45%, transparent 70%)',
        mixBlendMode: 'screen',
      }}
      aria-hidden="true"
    />
  );
}
