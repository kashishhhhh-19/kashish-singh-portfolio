import { memo, useState } from 'react';

/**
 * ORIGINAL INLINE SVG ASSETS FOR MIDNIGHT FLORAL LAVENDER
 */

export const LavenderSprig = ({ className = "", style = {} }) => (
  <svg
    viewBox="0 0 100 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="lavenderStalk" x1="50" y1="240" x2="50" y2="20" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#2A223D" />
        <stop offset="50%" stopColor="#4A3469" />
        <stop offset="100%" stopColor="#70449A" />
      </linearGradient>
      <linearGradient id="lavenderPetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D3C2F3" />
        <stop offset="60%" stopColor="#B69AE8" />
        <stop offset="100%" stopColor="#70449A" />
      </linearGradient>
      <linearGradient id="goldTip" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5F1FA" />
        <stop offset="70%" stopColor="#C6A45C" />
      </linearGradient>
    </defs>
    {/* Elegant central stem */}
    <path
      d="M50 240 Q46 130 50 30"
      stroke="url(#lavenderStalk)"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Delicate lateral leaves */}
    <path d="M49 180 C35 170 30 150 25 140 C35 155 45 168 49 175" fill="#4A3469" opacity="0.6"/>
    <path d="M51 160 C65 150 70 130 75 120 C65 135 55 148 51 155" fill="#4A3469" opacity="0.6"/>
    {/* Clustered lavender florets */}
    <g transform="translate(0, 0)">
      <ellipse cx="44" cy="38" rx="6" ry="4" fill="url(#lavenderPetalGrad)" transform="rotate(-25 44 38)"/>
      <ellipse cx="56" cy="38" rx="6" ry="4" fill="url(#lavenderPetalGrad)" transform="rotate(25 56 38)"/>
      <circle cx="50" cy="30" r="3.5" fill="url(#goldTip)"/>

      <ellipse cx="42" cy="52" rx="7" ry="4.5" fill="url(#lavenderPetalGrad)" transform="rotate(-30 42 52)"/>
      <ellipse cx="58" cy="52" rx="7" ry="4.5" fill="url(#lavenderPetalGrad)" transform="rotate(30 58 52)"/>

      <ellipse cx="41" cy="68" rx="7.5" ry="5" fill="url(#lavenderPetalGrad)" transform="rotate(-35 41 68)"/>
      <ellipse cx="59" cy="68" rx="7.5" ry="5" fill="url(#lavenderPetalGrad)" transform="rotate(35 59 68)"/>

      <ellipse cx="42" cy="85" rx="8" ry="5" fill="url(#lavenderPetalGrad)" transform="rotate(-30 42 85)"/>
      <ellipse cx="58" cy="85" rx="8" ry="5" fill="url(#lavenderPetalGrad)" transform="rotate(30 58 85)"/>

      <ellipse cx="43" cy="102" rx="7.5" ry="5" fill="url(#lavenderPetalGrad)" transform="rotate(-25 43 102)"/>
      <ellipse cx="57" cy="102" rx="7.5" ry="5" fill="url(#lavenderPetalGrad)" transform="rotate(25 57 102)"/>

      <ellipse cx="45" cy="118" rx="7" ry="4.5" fill="url(#lavenderPetalGrad)" transform="rotate(-20 45 118)"/>
      <ellipse cx="55" cy="118" rx="7" ry="4.5" fill="url(#lavenderPetalGrad)" transform="rotate(20 55 118)"/>
    </g>
  </svg>
);

export const WhiteLily = ({ className = "", style = {} }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="lilyPetalGrad" x1="100" y1="100" x2="100" y2="20" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#171521" stopOpacity="0.8" />
        <stop offset="35%" stopColor="#E0D7EE" stopOpacity="0.75" />
        <stop offset="85%" stopColor="#FAF7FD" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#FFFFFF" />
      </linearGradient>
      <linearGradient id="lilyPistil" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5F1FA" />
        <stop offset="70%" stopColor="#C6A45C" />
        <stop offset="100%" stopColor="#9E7E38" />
      </linearGradient>
      <radialGradient id="lilyCenterGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#C6A45C" stopOpacity="0.6"/>
        <stop offset="60%" stopColor="#B69AE8" stopOpacity="0.2"/>
        <stop offset="100%" stopColor="#09070F" stopOpacity="0"/>
      </radialGradient>
    </defs>
    {/* Background central aura */}
    <circle cx="100" cy="100" r="50" fill="url(#lilyCenterGlow)"/>

    {/* 6 Layered Lily Petals with graceful curves */}
    <path d="M100 100 C90 70 82 40 100 15 C118 40 110 70 100 100" fill="url(#lilyPetalGrad)" stroke="rgba(198, 164, 92, 0.35)" strokeWidth="0.8"/>
    <path d="M100 100 C125 110 155 125 168 150 C145 158 120 135 100 100" fill="url(#lilyPetalGrad)" stroke="rgba(198, 164, 92, 0.35)" strokeWidth="0.8"/>
    <path d="M100 100 C75 110 45 125 32 150 C55 158 80 135 100 100" fill="url(#lilyPetalGrad)" stroke="rgba(198, 164, 92, 0.35)" strokeWidth="0.8"/>
    <path d="M100 100 C120 85 150 75 175 60 C165 85 140 102 100 100" fill="url(#lilyPetalGrad)" stroke="rgba(182, 154, 232, 0.3)" strokeWidth="0.8"/>
    <path d="M100 100 C80 85 50 75 25 60 C35 85 60 102 100 100" fill="url(#lilyPetalGrad)" stroke="rgba(182, 154, 232, 0.3)" strokeWidth="0.8"/>
    <path d="M100 100 C92 125 90 160 100 185 C110 160 108 125 100 100" fill="url(#lilyPetalGrad)" stroke="rgba(198, 164, 92, 0.35)" strokeWidth="0.8"/>

    {/* Central Gold Filaments & Anthers */}
    <path d="M100 100 Q95 85 90 75" stroke="#C6A45C" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="90" cy="74" r="2.5" fill="url(#lilyPistil)"/>
    <path d="M100 100 Q105 85 110 75" stroke="#C6A45C" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="110" cy="74" r="2.5" fill="url(#lilyPistil)"/>
    <path d="M100 100 Q108 98 120 95" stroke="#C6A45C" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="120" cy="94" r="2.5" fill="url(#lilyPistil)"/>
    <path d="M100 100 Q92 98 80 95" stroke="#C6A45C" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="80" cy="94" r="2.5" fill="url(#lilyPistil)"/>
    <circle cx="100" cy="100" r="4" fill="#C6A45C"/>
  </svg>
);

export const PurpleButterfly = ({ className = "", style = {} }) => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="bfWingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D3C2F3" />
        <stop offset="50%" stopColor="#9270C5" />
        <stop offset="100%" stopColor="#70449A" />
      </linearGradient>
    </defs>
    <path
      d="M40 38 C32 20 12 18 10 32 C8 42 28 46 40 42"
      fill="url(#bfWingGrad)"
      stroke="rgba(198, 164, 92, 0.4)"
      strokeWidth="0.8"
      className="origin-right animate-butterfly-flutter"
    />
    <path
      d="M40 42 C28 44 18 52 22 62 C26 70 36 60 40 46"
      fill="url(#bfWingGrad)"
      opacity="0.85"
      className="origin-right animate-butterfly-flutter"
    />
    <path
      d="M40 38 C48 20 68 18 70 32 C72 42 52 46 40 42"
      fill="url(#bfWingGrad)"
      stroke="rgba(198, 164, 92, 0.4)"
      strokeWidth="0.8"
      className="origin-left animate-butterfly-flutter"
    />
    <path
      d="M40 42 C52 44 62 52 58 62 C54 70 44 60 40 46"
      fill="url(#bfWingGrad)"
      opacity="0.85"
      className="origin-left animate-butterfly-flutter"
    />
    <ellipse cx="40" cy="42" rx="2" ry="9" fill="#171521" stroke="#C6A45C" strokeWidth="0.5"/>
    <path d="M39 33 Q34 26 31 24" stroke="#C6A45C" strokeWidth="0.8" strokeLinecap="round"/>
    <path d="M41 33 Q46 26 49 24" stroke="#C6A45C" strokeWidth="0.8" strokeLinecap="round"/>
  </svg>
);

/**
 * PART 2: LARGE REALISTIC FULL MOON (SVG WITH LUNAR CRATERS & ETHEREAL GLOW)
 */
export const FullMoon = ({ className = "", style = {} }) => (
  <svg
    viewBox="0 0 300 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden="true"
  >
    <defs>
      {/* Outer Ethereal Halo Glow */}
      <radialGradient id="moonOuterHalo" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#E6DCF8" stopOpacity="0.5" />
        <stop offset="40%" stopColor="#B69AE8" stopOpacity="0.25" />
        <stop offset="70%" stopColor="#70449A" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#09070F" stopOpacity="0" />
      </radialGradient>

      {/* Lunar Surface Sphere Base */}
      <radialGradient id="moonSurface" cx="42%" cy="40%" r="58%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="35%" stopColor="#F5F1FA" />
        <stop offset="68%" stopColor="#E0D5F2" />
        <stop offset="88%" stopColor="#C4B0E6" />
        <stop offset="100%" stopColor="#9C82C7" />
      </radialGradient>

      {/* Lunar Mare / Ocean Texture Gradients */}
      <radialGradient id="mareGrad1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#6C538F" stopOpacity="0.45" />
        <stop offset="70%" stopColor="#8266A8" stopOpacity="0.28" />
        <stop offset="100%" stopColor="#A288C9" stopOpacity="0" />
      </radialGradient>

      <radialGradient id="mareGrad2" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#583E7A" stopOpacity="0.4" />
        <stop offset="65%" stopColor="#7A5E9E" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#9C82C7" stopOpacity="0" />
      </radialGradient>

      {/* Crater Rim Light */}
      <linearGradient id="craterRim" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65" />
        <stop offset="100%" stopColor="#583E7A" stopOpacity="0.4" />
      </linearGradient>

      {/* Soft Gold-Lavender Dust Aura */}
      <radialGradient id="moonGoldDust" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#C6A45C" stopOpacity="0.2" />
        <stop offset="50%" stopColor="#B69AE8" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#09070F" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* 1. Surrounding Atmospheric Glow Rings */}
    <circle cx="150" cy="150" r="145" fill="url(#moonOuterHalo)" />
    <circle cx="150" cy="150" r="125" fill="url(#moonGoldDust)" />

    {/* 2. Full Moon Celestial Body (Radius 98) */}
    <circle
      cx="150"
      cy="150"
      r="98"
      fill="url(#moonSurface)"
      stroke="rgba(245, 241, 250, 0.4)"
      strokeWidth="0.8"
    />

    {/* 3. Subtle Realistic Lunar Maria (Seas) */}
    {/* Oceanus Procellarum / Mare Imbrium (Upper-Left to Center) */}
    <path
      d="M105 105 C120 90 145 92 155 110 C162 125 150 142 135 145 C118 148 95 130 105 105 Z"
      fill="url(#mareGrad1)"
    />
    {/* Mare Serenitatis & Mare Tranquillitatis (Upper-Right) */}
    <path
      d="M165 95 C185 92 205 108 202 128 C198 142 178 148 165 138 C155 125 152 102 165 95 Z"
      fill="url(#mareGrad1)"
    />
    {/* Mare Nubium & Humorum (Lower-Left) */}
    <path
      d="M110 160 C125 152 142 162 140 180 C138 198 118 205 105 195 C95 182 98 168 110 160 Z"
      fill="url(#mareGrad2)"
    />
    {/* Mare Fecunditatis & Nectaris (Lower-Right) */}
    <path
      d="M175 162 C192 158 212 170 208 190 C202 208 182 212 168 200 C160 188 162 168 175 162 Z"
      fill="url(#mareGrad2)"
    />

    {/* 4. Fine Crater Details & Ray Systems */}
    {/* Tycho Crater (Lower-Center with Ray Filaments) */}
    <circle cx="158" cy="215" r="5.5" fill="#FFFFFF" fillOpacity="0.75" />
    <circle cx="158" cy="215" r="3.5" fill="#6C538F" fillOpacity="0.5" stroke="url(#craterRim)" strokeWidth="0.8" />
    <path
      d="M158 215 L145 240 M158 215 L175 238 M158 215 L135 195 M158 215 L182 195"
      stroke="#FFFFFF"
      strokeWidth="0.5"
      strokeOpacity="0.35"
      strokeDasharray="1,2"
    />

    {/* Copernicus Crater */}
    <circle cx="128" cy="138" r="6" fill="#FFFFFF" fillOpacity="0.65" />
    <circle cx="128" cy="138" r="4" fill="#583E7A" fillOpacity="0.45" stroke="url(#craterRim)" strokeWidth="0.8" />

    {/* Kepler Crater */}
    <circle cx="102" cy="134" r="4" fill="#FFFFFF" fillOpacity="0.6" />
    <circle cx="102" cy="134" r="2.5" fill="#6C538F" fillOpacity="0.4" />

    {/* Aristarchus Crater (Luminous bright spot) */}
    <circle cx="98" cy="112" r="3" fill="#FFFFFF" fillOpacity="0.85" filter="drop-shadow(0 0 2px #FFFFFF)" />

    {/* Plato Crater (Dark floored oval in north) */}
    <ellipse cx="142" cy="78" rx="5.5" ry="3.5" fill="#4A3469" fillOpacity="0.6" stroke="rgba(245, 241, 250, 0.5)" strokeWidth="0.6" />

    {/* Grimaldi & Eastern Craters */}
    <circle cx="82" cy="155" r="4" fill="#583E7A" fillOpacity="0.35" />
    <circle cx="218" cy="148" r="3.5" fill="#583E7A" fillOpacity="0.35" />
    <circle cx="192" cy="178" r="4" fill="#583E7A" fillOpacity="0.35" />

    {/* 5. Rim Atmospheric Soft Light Edge */}
    <circle cx="150" cy="150" r="97.5" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="1" fill="none" />
  </svg>
);

/**
 * PART 3: LARGE DETAILED PURPLE BUTTERFLY (LAYERED SVG WINGS WITH 3D FLAPPING)
 */
export const LargePurpleButterfly = ({ className = "", style = {}, flapDuration = 0.35 }) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="largeBfForewingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FAF7FD" />
        <stop offset="25%" stopColor="#D3C2F3" />
        <stop offset="60%" stopColor="#9270C5" />
        <stop offset="90%" stopColor="#70449A" />
        <stop offset="100%" stopColor="#4A286D" />
      </linearGradient>

      <linearGradient id="largeBfHindwingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E6DCF8" />
        <stop offset="40%" stopColor="#B69AE8" />
        <stop offset="85%" stopColor="#70449A" />
        <stop offset="100%" stopColor="#2A1B40" />
      </linearGradient>

      <linearGradient id="bfGoldEdge" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="60%" stopColor="#C6A45C" />
        <stop offset="100%" stopColor="#8C6E2D" />
      </linearGradient>
    </defs>

    {/* LEFT WING ASSEMBLY */}
    <g
      className="origin-[60px_60px] butterfly-left-wing"
      style={{ animationDuration: `${flapDuration}s` }}
    >
      {/* Left Forewing */}
      <path
        d="M60 56 C50 28 20 22 14 42 C10 56 38 68 60 62"
        fill="url(#largeBfForewingGrad)"
        stroke="url(#bfGoldEdge)"
        strokeWidth="1"
      />
      {/* Veins on Left Forewing */}
      <path d="M60 56 Q35 42 22 34" stroke="rgba(245, 241, 250, 0.5)" strokeWidth="0.8" fill="none" />
      <path d="M60 56 Q38 52 20 48" stroke="rgba(245, 241, 250, 0.4)" strokeWidth="0.7" fill="none" />
      <path d="M60 56 Q45 60 30 62" stroke="rgba(198, 164, 92, 0.4)" strokeWidth="0.7" fill="none" />
      <circle cx="18" cy="38" r="1.5" fill="#FFFFFF" opacity="0.9" />
      <circle cx="23" cy="32" r="1.2" fill="#C6A45C" opacity="0.9" />

      {/* Left Hindwing */}
      <path
        d="M60 62 C42 66 26 78 32 94 C38 106 54 92 60 70"
        fill="url(#largeBfHindwingGrad)"
        stroke="url(#bfGoldEdge)"
        strokeWidth="0.9"
        opacity="0.92"
      />
      <path d="M60 62 Q45 78 36 90" stroke="rgba(245, 241, 250, 0.45)" strokeWidth="0.7" fill="none" />
      <circle cx="36" cy="94" r="1.5" fill="#C6A45C" opacity="0.85" />
    </g>

    {/* RIGHT WING ASSEMBLY */}
    <g
      className="origin-[60px_60px] butterfly-right-wing"
      style={{ animationDuration: `${flapDuration}s` }}
    >
      {/* Right Forewing */}
      <path
        d="M60 56 C70 28 100 22 106 42 C110 56 82 68 60 62"
        fill="url(#largeBfForewingGrad)"
        stroke="url(#bfGoldEdge)"
        strokeWidth="1"
      />
      {/* Veins on Right Forewing */}
      <path d="M60 56 Q85 42 98 34" stroke="rgba(245, 241, 250, 0.5)" strokeWidth="0.8" fill="none" />
      <path d="M60 56 Q82 52 100 48" stroke="rgba(245, 241, 250, 0.4)" strokeWidth="0.7" fill="none" />
      <path d="M60 56 Q75 60 90 62" stroke="rgba(198, 164, 92, 0.4)" strokeWidth="0.7" fill="none" />
      <circle cx="102" cy="38" r="1.5" fill="#FFFFFF" opacity="0.9" />
      <circle cx="97" cy="32" r="1.2" fill="#C6A45C" opacity="0.9" />

      {/* Right Hindwing */}
      <path
        d="M60 62 C78 66 94 78 88 94 C82 106 66 92 60 70"
        fill="url(#largeBfHindwingGrad)"
        stroke="url(#bfGoldEdge)"
        strokeWidth="0.9"
        opacity="0.92"
      />
      <path d="M60 62 Q75 78 84 90" stroke="rgba(245, 241, 250, 0.45)" strokeWidth="0.7" fill="none" />
      <circle cx="84" cy="94" r="1.5" fill="#C6A45C" opacity="0.85" />
    </g>

    {/* CENTER BODY & ANTENNAE */}
    <ellipse cx="60" cy="62" rx="2.5" ry="12" fill="#171521" stroke="#C6A45C" strokeWidth="0.7" />
    <circle cx="60" cy="49" r="2" fill="#C6A45C" />
    <path d="M59 49 Q51 38 46 35" stroke="#C6A45C" strokeWidth="1" strokeLinecap="round" fill="none" />
    <circle cx="45" cy="34" r="1" fill="#FFFFFF" />
    <path d="M61 49 Q69 38 74 35" stroke="#C6A45C" strokeWidth="1" strokeLinecap="round" fill="none" />
    <circle cx="75" cy="34" r="1" fill="#FFFFFF" />
  </svg>
);

const FloralEnvironment = memo(function FloralEnvironment({ isAmbienceActive = true }) {
  const [petals] = useState(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const petalCount = isMobile ? 6 : 14;
    return Array.from({ length: petalCount }, (_, i) => ({
      id: i,
      left: Math.random() * 96 + 2,
      duration: Math.random() * 8 + 10,
      delay: Math.random() * 10,
      size: Math.random() * 12 + 10,
      rotation: Math.random() * 360,
      opacity: Math.random() * 0.45 + 0.25,
      type: i % 3 === 0 ? 'lavender' : i % 3 === 1 ? 'rose' : 'gold',
    }));
  });

  const [particles] = useState(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const particleCount = isMobile ? 10 : 22;
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1.5,
      duration: Math.random() * 6 + 5,
      delay: Math.random() * 5,
      color: i % 2 === 0 ? 'rgba(182, 154, 232, ' : 'rgba(198, 164, 92, ',
    }));
  });

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none transition-opacity duration-1000"
      style={{ opacity: isAmbienceActive ? 1 : 0.4 }}
      aria-hidden="true"
    >
      {/* 1. Deep Midnight Botanical Ambient Background Lighting */}
      <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-lavender-deep/12 blur-[130px]" />
      <div className="absolute top-[35%] right-[-15%] w-[50vw] h-[50vw] rounded-full bg-midnight-900/60 blur-[150px]" />
      <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[50vw] rounded-full bg-violet-deep/10 blur-[140px]" />
      <div className="absolute top-[60%] left-[5%] w-[35vw] h-[35vw] rounded-full bg-gold/5 blur-[120px]" />

      {/* ==========================================================
          2. LARGE ANIMATED FULL MOON & FLYING BUTTERFLIES CLUSTER
          ========================================================== */}
      <div className="absolute top-6 sm:top-10 md:top-12 right-2 sm:right-6 md:right-14 lg:right-24 z-0 pointer-events-none select-none">
        {/* Floating & Breathing Full Moon Container */}
        <div className="relative w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-84 lg:h-84 moon-floating drop-shadow-[0_0_35px_rgba(182,154,232,0.4)]">
          <FullMoon className="w-full h-full" />

          {/* Butterfly 1 (Large - Orbiting across front & lower rim) */}
          <div
            className="absolute w-14 h-14 md:w-16 md:h-16 butterfly-orbit"
            style={{
              top: '32%',
              left: '12%',
              animation: 'moonButterflyOrbit1 16s ease-in-out infinite',
            }}
          >
            <LargePurpleButterfly
              className="w-full h-full drop-shadow-[0_0_12px_rgba(182,154,232,0.6)]"
              flapDuration={0.32}
            />
          </div>

          {/* Butterfly 2 (Medium-Large - Arcing gracefully across upper crescent) */}
          <div
            className="absolute w-12 h-12 md:w-14 md:h-14 butterfly-orbit"
            style={{
              top: '8%',
              right: '8%',
              animation: 'moonButterflyOrbit2 20s ease-in-out infinite',
              animationDelay: '2.5s',
            }}
          >
            <LargePurpleButterfly
              className="w-full h-full drop-shadow-[0_0_10px_rgba(211,194,243,0.55)]"
              flapDuration={0.38}
            />
          </div>

          {/* Butterfly 3 (Graceful Outer Wing - Side rim glider) */}
          <div
            className="absolute w-10 h-10 md:w-12 md:h-12 butterfly-orbit"
            style={{
              bottom: '12%',
              right: '2%',
              animation: 'moonButterflyOrbit3 24s ease-in-out infinite',
              animationDelay: '5s',
            }}
          >
            <LargePurpleButterfly
              className="w-full h-full opacity-90 drop-shadow-[0_0_10px_rgba(198,164,92,0.4)]"
              flapDuration={0.29}
            />
          </div>

          {/* Butterfly 4 (Atmospheric Companion - Desktop only) */}
          <div
            className="hidden md:block absolute w-8 h-8 md:w-10 md:h-10 butterfly-orbit"
            style={{
              top: '52%',
              left: '-16%',
              animation: 'moonButterflyOrbit4 22s ease-in-out infinite',
              animationDelay: '8s',
            }}
          >
            <LargePurpleButterfly
              className="w-full h-full opacity-80 drop-shadow-[0_0_8px_rgba(182,154,232,0.45)]"
              flapDuration={0.42}
            />
          </div>
        </div>
      </div>

      {/* 3. Corner Floral Ornaments (White Lilies & Botanical Sprigs) */}
      {/* Top Left Corner */}
      <div className="absolute -top-12 -left-12 opacity-35 hover:opacity-50 transition-opacity duration-700">
        <WhiteLily className="w-56 h-56 rotate-[35deg]" />
      </div>
      <div className="absolute top-16 left-6 opacity-25">
        <LavenderSprig className="w-20 h-48 -rotate-[20deg]" />
      </div>

      {/* Top Right Corner */}
      <div className="absolute -top-14 -right-14 opacity-25">
        <WhiteLily className="w-60 h-60 -rotate-[45deg]" />
      </div>
      <div className="absolute top-20 right-8 opacity-20">
        <LavenderSprig className="w-20 h-48 rotate-[15deg]" />
      </div>

      {/* Subtle Mid-Section Floral Accents */}
      <div className="absolute top-[45%] -left-10 opacity-20 hidden md:block">
        <LavenderSprig className="w-24 h-56 rotate-[25deg]" />
      </div>
      <div className="absolute top-[75%] -right-10 opacity-20 hidden md:block">
        <LavenderSprig className="w-24 h-56 -rotate-[30deg]" />
      </div>

      {/* 4. Ambient Floating Butterflies on Gentle Long Paths */}
      <div
        className="absolute w-12 h-12 butterfly-orbit"
        style={{
          top: '22%',
          left: '8%',
          animation: 'butterflyFlightOne 28s ease-in-out infinite',
        }}
      >
        <PurpleButterfly className="w-9 h-9 opacity-75 drop-shadow-[0_0_12px_rgba(182,154,232,0.4)]" />
      </div>

      <div
        className="absolute w-12 h-12 butterfly-orbit"
        style={{
          top: '68%',
          right: '15%',
          animation: 'butterflyFlightTwo 32s ease-in-out infinite',
        }}
      >
        <PurpleButterfly className="w-8 h-8 opacity-65 drop-shadow-[0_0_10px_rgba(198,164,92,0.35)]" />
      </div>

      {/* 5. Falling Gentle Petals */}
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.left}%`,
            top: '-20px',
            animation: `petalFloat ${petal.duration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
            opacity: petal.opacity,
          }}
        >
          <svg
            viewBox="0 0 24 32"
            width={petal.size}
            height={petal.size * 1.3}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: `rotate(${petal.rotation}deg)` }}
          >
            <path
              d="M12 0 C18 10 24 20 18 28 C12 34 6 30 2 24 C-2 18 4 6 12 0 Z"
              fill={
                petal.type === 'lavender'
                  ? '#B69AE8'
                  : petal.type === 'gold'
                  ? '#C6A45C'
                  : '#9270C5'
              }
              opacity="0.85"
            />
          </svg>
        </div>
      ))}

      {/* 6. Glowing Micro Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: `${p.color}0.7)`,
            boxShadow: `0 0 8px ${p.color}0.9)`,
            animation: `pulseGlow ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* Inline styles for custom moon floating, wing flapping, and curved flight loops */}
      <style>{`
        .moon-floating {
          animation: moonGentleFloat 12s ease-in-out infinite alternate, moonAuraPulse 9s ease-in-out infinite alternate;
        }

        @keyframes moonGentleFloat {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.01); }
          100% { transform: translateY(5px) scale(0.995); }
        }

        @keyframes moonAuraPulse {
          0% { filter: drop-shadow(0 0 25px rgba(182, 154, 232, 0.35)); }
          50% { filter: drop-shadow(0 0 50px rgba(211, 194, 243, 0.55)); }
          100% { filter: drop-shadow(0 0 30px rgba(182, 154, 232, 0.4)); }
        }

        /* 3D Natural Wing Flapping */
        .butterfly-left-wing {
          animation: butterflyFlapLeft infinite ease-in-out alternate;
        }
        .butterfly-right-wing {
          animation: butterflyFlapRight infinite ease-in-out alternate;
        }

        @keyframes butterflyFlapLeft {
          0% { transform: scaleX(1); }
          100% { transform: scaleX(0.2); }
        }
        @keyframes butterflyFlapRight {
          0% { transform: scaleX(1); }
          100% { transform: scaleX(0.2); }
        }

        /* Flight loops around and near the Moon */
        @keyframes moonButterflyOrbit1 {
          0% { transform: translate(0, 0) rotate(-15deg); }
          25% { transform: translate(55px, 60px) rotate(15deg); }
          50% { transform: translate(110px, 15px) rotate(35deg); }
          75% { transform: translate(45px, -35px) rotate(-10deg); }
          100% { transform: translate(0, 0) rotate(-15deg); }
        }

        @keyframes moonButterflyOrbit2 {
          0% { transform: translate(0, 0) rotate(15deg); }
          30% { transform: translate(60px, 45px) rotate(40deg); }
          60% { transform: translate(15px, 75px) rotate(-15deg); }
          85% { transform: translate(-35px, 20px) rotate(5deg); }
          100% { transform: translate(0, 0) rotate(15deg); }
        }

        @keyframes moonButterflyOrbit3 {
          0% { transform: translate(0, 0) rotate(-20deg); }
          35% { transform: translate(-45px, 50px) rotate(15deg); }
          70% { transform: translate(25px, 70px) rotate(30deg); }
          100% { transform: translate(0, 0) rotate(-20deg); }
        }

        @keyframes moonButterflyOrbit4 {
          0% { transform: translate(0, 0) rotate(10deg); }
          50% { transform: translate(-35px, 45px) rotate(-20deg); }
          100% { transform: translate(0, 0) rotate(10deg); }
        }

        @keyframes butterflyFlightOne {
          0% { transform: translate(0, 0) rotate(5deg); }
          25% { transform: translate(25vw, -6vh) rotate(20deg); }
          50% { transform: translate(50vw, 8vh) rotate(-15deg); }
          75% { transform: translate(20vw, 15vh) rotate(10deg); }
          100% { transform: translate(0, 0) rotate(5deg); }
        }

        @keyframes butterflyFlightTwo {
          0% { transform: translate(0, 0) rotate(-10deg); }
          30% { transform: translate(-30vw, -12vh) rotate(-25deg); }
          60% { transform: translate(-50vw, 4vh) rotate(15deg); }
          85% { transform: translate(-20vw, 10vh) rotate(-5deg); }
          100% { transform: translate(0, 0) rotate(-10deg); }
        }

        /* Reduced Motion Compliance */
        @media (prefers-reduced-motion: reduce) {
          .moon-floating,
          .butterfly-orbit,
          .butterfly-left-wing,
          .butterfly-right-wing {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
});

export default FloralEnvironment;
