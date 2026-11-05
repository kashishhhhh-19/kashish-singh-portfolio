import { useEffect, useState } from 'react';

/**
 * CURSOR GLOW - DESKTOP ONLY
 * Disabled on touch screens, mobiles, and prefers-reduced-motion.
 */
export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -200, y: -200 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch] = useState(() => {
    if (typeof window === 'undefined') return true;
    return (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  });

  useEffect(() => {
    if (isTouch) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isTouch]);

  if (isTouch || !isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[1] -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75 ease-out will-change-transform"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '420px',
        height: '420px',
        background: 'radial-gradient(circle, rgba(182, 154, 232, 0.08) 0%, rgba(198, 164, 92, 0.03) 40%, transparent 70%)',
      }}
      aria-hidden="true"
    />
  );
}
