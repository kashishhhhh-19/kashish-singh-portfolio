import { useState, useEffect, useRef, memo } from 'react';

/**
 * HERO LILY COMPONENT
 *
 * A large, elegant purple lily centered behind "KASHISH SINGH".
 * Built with layered SVG petals (outer deep purple, middle soft violet, inner lavender),
 * gold-tipped stamens, blooming entrance animation, gentle continuous floating loop,
 * and floating micro-particles.
 *
 * Sits at z-index: 0 with pointer-events: none, ensuring 100% legibility of the name.
 */
const HeroLily = memo(function HeroLily() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(mediaQuery.matches);
      const listener = (e) => setIsReducedMotion(e.matches);
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, []);

  useEffect(() => {
    // Pause animations when hero scrolls offscreen
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Floating micro-particles drifting around the lily
  const particles = [
    { id: 1, x: 25, y: 30, size: 3, delay: 0, dur: 7, color: '#B69AE8' },
    { id: 2, x: 75, y: 25, size: 2.5, delay: 1.5, dur: 8, color: '#C6A45C' },
    { id: 3, x: 20, y: 65, size: 2, delay: 3, dur: 6.5, color: '#D3C2F3' },
    { id: 4, x: 80, y: 60, size: 3.5, delay: 0.8, dur: 9, color: '#C6A45C' },
    { id: 5, x: 35, y: 80, size: 2.5, delay: 2.2, dur: 7.5, color: '#B69AE8' },
    { id: 6, x: 65, y: 85, size: 3, delay: 4, dur: 8.5, color: '#C6A45C' },
    { id: 7, x: 50, y: 15, size: 2, delay: 1, dur: 6, color: '#D3C2F3' },
    { id: 8, x: 45, y: 92, size: 2.5, delay: 2.7, dur: 7.8, color: '#B69AE8' },
    { id: 9, x: 15, y: 45, size: 3, delay: 3.5, dur: 8.2, color: '#C6A45C' },
    { id: 10, x: 85, y: 40, size: 2, delay: 1.8, dur: 6.8, color: '#D3C2F3' },
  ];

  return (
    <div
      ref={containerRef}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] md:w-[620px] lg:w-[720px] h-[340px] sm:h-[480px] md:h-[620px] lg:h-[720px] pointer-events-none select-none z-0 flex items-center justify-center transition-opacity duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        mixBlendMode: 'screen',
      }}
      aria-hidden="true"
      role="presentation"
    >
      {/* 1. Subtle Lavender Ambient Aura Glow Behind Flower */}
      <div
        className={`absolute inset-4 rounded-full bg-gradient-to-r from-deep-purple/20 via-lavender/15 to-gold/10 blur-[80px] md:blur-[110px] ${
          !isReducedMotion ? 'animate-pulse' : ''
        }`}
        style={{ animationDuration: '6s' }}
      />

      {/* 2. Layered SVG Purple Lily with 3D Depth */}
      <div
        className={`relative w-full h-full flex items-center justify-center ${
          !isReducedMotion ? 'animate-lily-float' : ''
        }`}
      >
        <svg
          viewBox="0 0 600 600"
          className="w-full h-full drop-shadow-[0_0_35px_rgba(182,154,232,0.3)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Outer Petals: Deep Purple */}
            <linearGradient id="lilyOuterGrad" x1="300" y1="300" x2="300" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#120D1C" stopOpacity="0.85" />
              <stop offset="40%" stopColor="#4A286D" stopOpacity="0.75" />
              <stop offset="75%" stopColor="#70449A" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#9270C5" stopOpacity="0.9" />
            </linearGradient>

            {/* Middle Petals: Soft Violet */}
            <linearGradient id="lilyMidGrad" x1="300" y1="300" x2="300" y2="60" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1F1530" stopOpacity="0.9" />
              <stop offset="35%" stopColor="#70449A" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#9270C5" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#B69AE8" stopOpacity="0.9" />
            </linearGradient>

            {/* Inner Petals: Lavender with Delicate Light Tips */}
            <linearGradient id="lilyInnerGrad" x1="300" y1="300" x2="300" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2A1B40" stopOpacity="0.95" />
              <stop offset="30%" stopColor="#9270C5" stopOpacity="0.85" />
              <stop offset="70%" stopColor="#B69AE8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#E6DCF8" stopOpacity="0.95" />
            </linearGradient>

            {/* Gold Stamens */}
            <linearGradient id="lilyAnther" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5F1FA" />
              <stop offset="60%" stopColor="#C6A45C" />
              <stop offset="100%" stopColor="#8C6E2D" />
            </linearGradient>

            {/* Central Glow Core */}
            <radialGradient id="lilyCoreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C6A45C" stopOpacity="0.8" />
              <stop offset="40%" stopColor="#B69AE8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#09070F" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Central Atmospheric Radial Core */}
          <circle cx="300" cy="300" r="140" fill="url(#lilyCoreGlow)" />

          {/* ==========================================================
              LAYER 1: OUTER / BACK PETALS (Deep Purple #70449A)
              ========================================================== */}
          <g className={!isReducedMotion ? "bloom-layer-outer" : ""}>
            {/* Top-Right Outer Petal (Angle ~45 deg) */}
            <path
              d="M300 300 C340 230 430 150 490 110 C460 170 380 260 300 300"
              fill="url(#lilyOuterGrad)"
              stroke="rgba(198, 164, 92, 0.25)"
              strokeWidth="0.8"
            />
            {/* Top-Left Outer Petal (Angle ~135 deg) */}
            <path
              d="M300 300 C260 230 170 150 110 110 C140 170 220 260 300 300"
              fill="url(#lilyOuterGrad)"
              stroke="rgba(198, 164, 92, 0.25)"
              strokeWidth="0.8"
            />
            {/* Bottom-Right Outer Petal (Angle ~315 deg) */}
            <path
              d="M300 300 C370 340 450 430 490 490 C430 460 340 380 300 300"
              fill="url(#lilyOuterGrad)"
              stroke="rgba(198, 164, 92, 0.25)"
              strokeWidth="0.8"
            />
            {/* Bottom-Left Outer Petal (Angle ~225 deg) */}
            <path
              d="M300 300 C230 340 150 430 110 490 C170 460 260 380 300 300"
              fill="url(#lilyOuterGrad)"
              stroke="rgba(198, 164, 92, 0.25)"
              strokeWidth="0.8"
            />
          </g>

          {/* ==========================================================
              LAYER 2: MIDDLE PETALS (Soft Violet #9270C5)
              ========================================================== */}
          <g className={!isReducedMotion ? "bloom-layer-mid" : ""}>
            {/* Top Center-Right Petal */}
            <path
              d="M300 300 C325 210 335 120 300 50 C265 120 275 210 300 300"
              fill="url(#lilyMidGrad)"
              stroke="rgba(182, 154, 232, 0.35)"
              strokeWidth="1"
            />
            {/* Bottom Right Petal */}
            <path
              d="M300 300 C380 310 470 340 540 390 C460 410 380 360 300 300"
              fill="url(#lilyMidGrad)"
              stroke="rgba(182, 154, 232, 0.35)"
              strokeWidth="1"
            />
            {/* Bottom Left Petal */}
            <path
              d="M300 300 C220 310 130 340 60 390 C140 410 220 360 300 300"
              fill="url(#lilyMidGrad)"
              stroke="rgba(182, 154, 232, 0.35)"
              strokeWidth="1"
            />
          </g>

          {/* ==========================================================
              LAYER 3: INNER / FRONT PETALS (Lavender #B69AE8 with Light Tips)
              ========================================================== */}
          <g className={!isReducedMotion ? "bloom-layer-inner" : ""}>
            {/* Top-Right Recurved Petal */}
            <path
              d="M300 300 C350 240 440 210 510 170 C470 230 400 280 300 300"
              fill="url(#lilyInnerGrad)"
              stroke="rgba(245, 241, 250, 0.4)"
              strokeWidth="1"
            />
            {/* Central vein line */}
            <path d="M300 300 Q400 230 500 175" stroke="rgba(198, 164, 92, 0.45)" strokeWidth="1" strokeLinecap="round" />

            {/* Top-Left Recurved Petal */}
            <path
              d="M300 300 C250 240 160 210 90 170 C130 230 200 280 300 300"
              fill="url(#lilyInnerGrad)"
              stroke="rgba(245, 241, 250, 0.4)"
              strokeWidth="1"
            />
            {/* Central vein line */}
            <path d="M300 300 Q200 230 100 175" stroke="rgba(198, 164, 92, 0.45)" strokeWidth="1" strokeLinecap="round" />

            {/* Bottom Vertical Petal */}
            <path
              d="M300 300 C270 370 275 460 300 540 C325 460 330 370 300 300"
              fill="url(#lilyInnerGrad)"
              stroke="rgba(245, 241, 250, 0.4)"
              strokeWidth="1"
            />
            {/* Central vein line */}
            <path d="M300 300 L300 530" stroke="rgba(198, 164, 92, 0.45)" strokeWidth="1" strokeLinecap="round" />
          </g>

          {/* ==========================================================
              LAYER 4: REFINED BOTANICAL SPOTTING & ACCENTS
              ========================================================== */}
          <g opacity="0.5">
            <circle cx="295" cy="220" r="1.8" fill="#4A286D" />
            <circle cx="305" cy="200" r="1.5" fill="#4A286D" />
            <circle cx="300" cy="180" r="1.8" fill="#4A286D" />
            <circle cx="360" cy="240" r="1.6" fill="#4A286D" />
            <circle cx="380" cy="220" r="1.8" fill="#4A286D" />
            <circle cx="240" cy="240" r="1.6" fill="#4A286D" />
            <circle cx="220" cy="220" r="1.8" fill="#4A286D" />
            <circle cx="295" cy="380" r="1.8" fill="#4A286D" />
            <circle cx="305" cy="400" r="1.5" fill="#4A286D" />
          </g>

          {/* ==========================================================
              LAYER 5: STAMENS & GOLD-TIPPED ANTHERS
              ========================================================== */}
          <g className={!isReducedMotion ? "bloom-layer-center" : ""}>
            {/* Stamen 1: Top-Left */}
            <path d="M300 300 Q280 250 260 210" stroke="#C6A45C" strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="260" cy="208" rx="6" ry="3.2" fill="url(#lilyAnther)" transform="rotate(-30 260 208)" />

            {/* Stamen 2: Top Center */}
            <path d="M300 300 Q295 240 295 195" stroke="#C6A45C" strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="295" cy="192" rx="6" ry="3.2" fill="url(#lilyAnther)" transform="rotate(10 295 192)" />

            {/* Stamen 3: Top-Right */}
            <path d="M300 300 Q320 250 340 210" stroke="#C6A45C" strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="340" cy="208" rx="6" ry="3.2" fill="url(#lilyAnther)" transform="rotate(35 340 208)" />

            {/* Stamen 4: Middle-Right */}
            <path d="M300 300 Q340 280 375 265" stroke="#C6A45C" strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="377" cy="265" rx="6" ry="3.2" fill="url(#lilyAnther)" transform="rotate(65 377 265)" />

            {/* Stamen 5: Middle-Left */}
            <path d="M300 300 Q260 280 225 265" stroke="#C6A45C" strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="223" cy="265" rx="6" ry="3.2" fill="url(#lilyAnther)" transform="rotate(-65 223 265)" />

            {/* Central Soft Pistil */}
            <path d="M300 300 Q302 270 305 245" stroke="#9270C5" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="305" cy="243" r="4.5" fill="#C6A45C" stroke="#F5F1FA" strokeWidth="1" />

            {/* Center Golden Core */}
            <circle cx="300" cy="300" r="9" fill="#C6A45C" />
            <circle cx="300" cy="300" r="5" fill="#F5F1FA" />
          </g>
        </svg>
      </div>

      {/* 3. Floating Micro-Particles around the Lily */}
      {!isReducedMotion &&
        particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              boxShadow: `0 0 10px ${p.color}`,
              animation: `particleDrift ${p.dur}s ease-in-out infinite alternate`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}

      {/* Custom Styles for Staggered Blooming & Gentle Breathing */}
      <style>{`
        .bloom-layer-outer {
          transform-origin: 300px 300px;
          animation: bloomOuter 3.2s cubic-bezier(0.16, 1, 0.3, 1) forwards, petalBreathe 8s ease-in-out 3.2s infinite alternate;
        }
        .bloom-layer-mid {
          transform-origin: 300px 300px;
          animation: bloomMid 3.4s cubic-bezier(0.16, 1, 0.3, 1) forwards, petalBreathe 7.5s ease-in-out 3.4s infinite alternate;
        }
        .bloom-layer-inner {
          transform-origin: 300px 300px;
          animation: bloomInner 3.6s cubic-bezier(0.16, 1, 0.3, 1) forwards, petalBreathe 9s ease-in-out 3.6s infinite alternate;
        }
        .bloom-layer-center {
          transform-origin: 300px 300px;
          animation: bloomCenter 3.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes bloomOuter {
          0% { transform: scale(0.2) rotate(-25deg); opacity: 0; }
          60% { opacity: 0.8; }
          100% { transform: scale(1) rotate(0deg); opacity: 0.9; }
        }
        @keyframes bloomMid {
          0% { transform: scale(0.15) rotate(20deg); opacity: 0; }
          60% { opacity: 0.85; }
          100% { transform: scale(1) rotate(0deg); opacity: 0.92; }
        }
        @keyframes bloomInner {
          0% { transform: scale(0.1) rotate(-15deg); opacity: 0; }
          60% { opacity: 0.9; }
          100% { transform: scale(1) rotate(0deg); opacity: 0.96; }
        }
        @keyframes bloomCenter {
          0% { transform: scale(0.3); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes petalBreathe {
          0% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.025) rotate(1.2deg); }
          100% { transform: scale(0.985) rotate(-1.2deg); }
        }

        .animate-lily-float {
          animation: lilyFloat 9s ease-in-out infinite alternate;
        }
        @keyframes lilyFloat {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1.5deg); }
          100% { transform: translateY(6px) rotate(-1.5deg); }
        }

        @keyframes particleDrift {
          0% { transform: translate(0, 0) scale(0.8); opacity: 0.3; }
          50% { transform: translate(12px, -15px) scale(1.2); opacity: 0.9; }
          100% { transform: translate(-10px, -25px) scale(0.9); opacity: 0.4; }
        }
      `}</style>
    </div>
  );
});

export default HeroLily;
