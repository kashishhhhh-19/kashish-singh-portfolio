import { useState, useEffect } from 'react';

/**
 * Hook to detect viewport width and pointer capability.
 * Safely checks (hover: hover) and (pointer: fine) for luxury cursor glow.
 */
export function useIsMobile() {
  const [state, setState] = useState(() => {
    if (typeof window === 'undefined') {
      return { isMobile: false, hasFinePointer: true };
    }
    const isMobileWidth = window.innerWidth < 768;
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    return { isMobile: isMobileWidth, hasFinePointer };
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      const isMobileWidth = window.innerWidth < 768;
      const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
      setState({ isMobile: isMobileWidth, hasFinePointer });
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return state;
}
