import { useEffect, useState } from 'react';

export default function Loader({ onFinish }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Quick, elegant 1-second presentation
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 900);

    const finishTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 1300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-midnight-950 transition-opacity duration-500 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Loading portfolio"
    >
      <div className="relative flex flex-col items-center">
        {/* Glowing Floral Ring */}
        <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-lavender/30 border-t-gold animate-spin" style={{ animationDuration: '2s' }} />
          <svg viewBox="0 0 40 40" className="w-10 h-10 text-lavender animate-pulse" fill="none">
            <path
              d="M20 5 C23 12 28 15 35 20 C28 25 23 28 20 35 C17 28 12 25 5 20 C12 15 17 12 20 5 Z"
              fill="currentColor"
              opacity="0.9"
            />
            <circle cx="20" cy="20" r="3.5" fill="#C6A45C" />
          </svg>
        </div>

        {/* Brand Name */}
        <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-widest text-shimmer-gold mb-2">
          KASHISH SINGH
        </h1>

        <p className="font-sans text-xs uppercase tracking-[0.28em] text-lavender/80">
          Midnight Floral Portfolio
        </p>

        {/* Subtle gold line accent */}
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mt-4 opacity-70" />
      </div>
    </div>
  );
}
