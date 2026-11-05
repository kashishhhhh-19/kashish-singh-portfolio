import { useState, useRef, memo } from 'react';

/**
 * 3D VISUAL PRESENTATION FOR FEATURED PROJECTS
 *
 * Uses CSS 3D transforms, perspective, layered SVG depth, and subtle mouse-tilt parallax.
 * Strictly communicates the real project purpose without fabricated screenshots.
 */

// 1. CAREER SPHERE: Floating Laptop, Opportunity Cards, Notifications, Resume & Graduation Cap
const CareerSphere3D = memo(function CareerSphere3D() {
  return (
    <div className="relative w-full h-[260px] sm:h-[300px] flex items-center justify-center p-4 select-none">
      <svg
        viewBox="0 0 520 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[480px] drop-shadow-[0_15px_35px_rgba(9,7,15,0.9)]"
      >
        <defs>
          <linearGradient id="laptopBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2A1F3D" />
            <stop offset="100%" stopColor="#140F21" />
          </linearGradient>
          <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1F1A2D" />
            <stop offset="100%" stopColor="#0E0B17" />
          </linearGradient>
          <linearGradient id="cardGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2E1B4E" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#171224" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="goldCapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5F1FA" />
            <stop offset="60%" stopColor="#C6A45C" />
            <stop offset="100%" stopColor="#8A6C28" />
          </linearGradient>
          <filter id="csShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#09070F" floodOpacity="0.8" />
          </filter>
        </defs>

        {/* Ambient Glow */}
        <circle cx="260" cy="160" r="130" fill="url(#screenGrad)" opacity="0.6" filter="blur(40px)" />

        {/* ==========================================================
            3D LAPTOP BASE & SCREEN
            ========================================================== */}
        {/* Laptop Shadow on Desk */}
        <ellipse cx="260" cy="275" rx="190" ry="22" fill="#09070F" opacity="0.8" filter="blur(10px)" />

        {/* Laptop Keyboard Base (Isometric Perspective) */}
        <path
          d="M100 245 L420 245 L450 270 L70 270 Z"
          fill="url(#laptopBody)"
          stroke="rgba(182, 154, 232, 0.3)"
          strokeWidth="1.5"
        />
        {/* Trackpad */}
        <rect x="230" y="252" width="60" height="12" rx="3" fill="#120D1C" stroke="rgba(198, 164, 92, 0.3)" />

        {/* Laptop Display Screen (Tilted slightly backward) */}
        <rect
          x="125"
          y="65"
          width="270"
          height="180"
          rx="10"
          fill="url(#laptopBody)"
          stroke="rgba(182, 154, 232, 0.35)"
          strokeWidth="2"
        />
        {/* Inner Screen Display */}
        <rect x="135" y="75" width="250" height="158" rx="6" fill="url(#screenGrad)" />

        {/* Screen Interface: Navigation Header */}
        <rect x="145" y="85" width="230" height="18" rx="4" fill="#171521" />
        <circle cx="155" cy="94" r="3" fill="#C6A45C" />
        <circle cx="165" cy="94" r="3" fill="#B69AE8" />
        <rect x="180" y="90" width="80" height="8" rx="4" fill="#2E2442" />

        {/* Search & Matching Bar */}
        <rect x="145" y="110" width="160" height="16" rx="4" fill="#171521" stroke="rgba(182,154,232,0.2)" />
        <rect x="150" y="114" width="60" height="8" rx="3" fill="#B69AE8" opacity="0.6" />

        {/* Dashboard Job Listing Rows */}
        <rect x="145" y="134" width="230" height="24" rx="4" fill="#1A1526" stroke="rgba(182,154,232,0.15)" />
        <rect x="152" y="140" width="12" height="12" rx="3" fill="#70449A" />
        <rect x="170" y="142" width="70" height="6" rx="2" fill="#F5F1FA" />
        <rect x="335" y="139" width="32" height="14" rx="4" fill="rgba(198,164,92,0.25)" />

        <rect x="145" y="164" width="230" height="24" rx="4" fill="#1A1526" stroke="rgba(182,154,232,0.15)" />
        <rect x="152" y="170" width="12" height="12" rx="3" fill="#C6A45C" />
        <rect x="170" y="172" width="85" height="6" rx="2" fill="#F5F1FA" />
        <rect x="335" y="169" width="32" height="14" rx="4" fill="rgba(182,154,232,0.25)" />

        <rect x="145" y="194" width="230" height="24" rx="4" fill="#1A1526" stroke="rgba(182,154,232,0.15)" />
        <rect x="152" y="200" width="12" height="12" rx="3" fill="#B69AE8" />
        <rect x="170" y="202" width="65" height="6" rx="2" fill="#F5F1FA" />

        {/* ==========================================================
            FLOATING 3D FOREGROUND ELEMENTS
            ========================================================== */}
        {/* 1. Floating Opportunity Match Card (Left Foreground) */}
        <g filter="url(#csShadow)" className="animate-pulse-subtle">
          <rect
            x="50"
            y="110"
            width="130"
            height="90"
            rx="12"
            fill="url(#cardGrad1)"
            stroke="rgba(182, 154, 232, 0.45)"
            strokeWidth="1.5"
          />
          <rect x="62" y="122" width="20" height="20" rx="6" fill="#70449A" />
          <path d="M68 132 L71 135 L77 128" stroke="#F5F1FA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <rect x="88" y="124" width="55" height="7" rx="3" fill="#F5F1FA" />
          <rect x="88" y="135" width="40" height="5" rx="2" fill="#B5AABD" />
          <rect x="62" y="152" width="106" height="1" fill="rgba(182,154,232,0.2)" />
          <rect x="62" y="162" width="45" height="14" rx="7" fill="rgba(198,164,92,0.2)" stroke="#C6A45C" strokeWidth="0.8" />
          <rect x="112" y="162" width="45" height="14" rx="7" fill="rgba(182,154,232,0.2)" stroke="#B69AE8" strokeWidth="0.8" />
        </g>

        {/* 2. Floating Resume Document (Right Foreground) */}
        <g filter="url(#csShadow)">
          <rect
            x="350"
            y="70"
            width="110"
            height="130"
            rx="10"
            fill="#171521"
            stroke="rgba(198, 164, 92, 0.5)"
            strokeWidth="1.5"
            transform="rotate(6 350 70)"
          />
          {/* Document Fold Corner */}
          <path d="M430 79 L445 94 L430 94 Z" fill="#C6A45C" opacity="0.8" />
          <rect x="368" y="98" width="50" height="6" rx="3" fill="#F5F1FA" />
          <rect x="368" y="110" width="70" height="4" rx="2" fill="#B5AABD" />
          <rect x="368" y="120" width="60" height="4" rx="2" fill="#B5AABD" />
          <rect x="368" y="130" width="65" height="4" rx="2" fill="#B5AABD" />
          <circle cx="420" cy="155" r="14" fill="#70449A" stroke="#C6A45C" strokeWidth="1.5" />
          <path d="M415 155 L419 159 L426 151" stroke="#F5F1FA" strokeWidth="2" strokeLinecap="round" fill="none" />
        </g>

        {/* 3. Floating Graduation Cap (Top Left) */}
        <g filter="url(#csShadow)" transform="translate(45, 45) rotate(-10)">
          {/* Diamond Cap */}
          <polygon points="40,10 75,25 40,40 5,25" fill="#1C142A" stroke="#C6A45C" strokeWidth="1.5" />
          {/* Cap Base */}
          <path d="M22 32 C22 42 58 42 58 32" fill="#2E1B4E" stroke="#B69AE8" strokeWidth="1" />
          {/* Golden Tassel */}
          <circle cx="40" cy="25" r="3" fill="#C6A45C" />
          <path d="M40 25 Q55 30 55 45" stroke="#C6A45C" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <rect x="52" y="44" width="6" height="10" rx="2" fill="url(#goldCapGrad)" />
        </g>

        {/* 4. Floating Notification Bell Badge (Top Right) */}
        <g filter="url(#csShadow)" transform="translate(425, 30)">
          <circle cx="20" cy="20" r="18" fill="#1F1530" stroke="#B69AE8" strokeWidth="1.5" />
          <path d="M15 17 C15 13 25 13 25 17 V21 L28 23 H12 L15 21 V17 Z" fill="#C6A45C" />
          <circle cx="20" cy="25" r="2" fill="#C6A45C" />
          <circle cx="28" cy="11" r="5" fill="#70449A" stroke="#F5F1FA" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
});

// 2. SYRAX: Futuristic Assistant, Glowing Microphone, 3D Hand Tracking, Voice Waveform
const Syrax3D = memo(function Syrax3D() {
  return (
    <div className="relative w-full h-[260px] sm:h-[300px] flex items-center justify-center p-4 select-none">
      <svg
        viewBox="0 0 520 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[480px] drop-shadow-[0_15px_35px_rgba(9,7,15,0.9)]"
      >
        <defs>
          <linearGradient id="syraxMic" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5F1FA" />
            <stop offset="50%" stopColor="#B69AE8" />
            <stop offset="100%" stopColor="#70449A" />
          </linearGradient>
          <linearGradient id="handJoint" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5F1FA" />
            <stop offset="60%" stopColor="#C6A45C" />
            <stop offset="100%" stopColor="#70449A" />
          </linearGradient>
          <radialGradient id="holoGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#B69AE8" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#70449A" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#09070F" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Holographic Sphere Core */}
        <circle cx="260" cy="160" r="130" fill="url(#holoGlow)" />

        {/* ==========================================================
            3D HOLOGRAPHIC CONCENTRIC RINGS (Perspective Tilted)
            ========================================================== */}
        <ellipse cx="260" cy="260" rx="180" ry="40" stroke="rgba(182, 154, 232, 0.25)" strokeWidth="1.5" strokeDasharray="6,8" />
        <ellipse cx="260" cy="260" rx="140" ry="30" stroke="rgba(198, 164, 92, 0.4)" strokeWidth="1.2" />
        <ellipse cx="260" cy="260" rx="90" ry="20" stroke="rgba(182, 154, 232, 0.5)" strokeWidth="1.8" />

        {/* Rotating Orbital Particles on Ring */}
        <circle cx="120" cy="260" r="4" fill="#C6A45C" filter="drop-shadow(0 0 6px #C6A45C)" />
        <circle cx="400" cy="260" r="4.5" fill="#B69AE8" filter="drop-shadow(0 0 6px #B69AE8)" />

        {/* ==========================================================
            3D ARTICULATED HAND GESTURE RECOGNITION (Left Side)
            ========================================================== */}
        <g transform="translate(50, 40)">
          {/* Background Hand Aura */}
          <ellipse cx="80" cy="110" rx="55" ry="65" fill="#70449A" opacity="0.15" filter="blur(16px)" />

          {/* Wrist Base Node */}
          <circle cx="80" cy="165" r="7" fill="url(#handJoint)" stroke="#F5F1FA" strokeWidth="1.5" />
          {/* Palm Center Node */}
          <circle cx="80" cy="120" r="6" fill="#C6A45C" />
          <line x1="80" y1="165" x2="80" y2="120" stroke="rgba(198,164,92,0.8)" strokeWidth="2.5" />

          {/* Thumb */}
          <line x1="80" y1="120" x2="45" y2="105" stroke="#B69AE8" strokeWidth="2" />
          <circle cx="45" cy="105" r="5" fill="#B69AE8" />
          <line x1="45" y1="105" x2="30" y2="80" stroke="#B69AE8" strokeWidth="2" />
          <circle cx="30" cy="80" r="6" fill="#C6A45C" filter="drop-shadow(0 0 6px #C6A45C)" />

          {/* Index Finger (Pointing gesture) */}
          <line x1="80" y1="120" x2="65" y2="75" stroke="#B69AE8" strokeWidth="2" />
          <circle cx="65" cy="75" r="5" fill="#B69AE8" />
          <line x1="65" y1="75" x2="58" y2="35" stroke="#F5F1FA" strokeWidth="2" />
          <circle cx="58" cy="35" r="6.5" fill="#F5F1FA" filter="drop-shadow(0 0 8px #F5F1FA)" />

          {/* Middle Finger */}
          <line x1="80" y1="120" x2="85" y2="70" stroke="#B69AE8" strokeWidth="2" />
          <circle cx="85" cy="70" r="5" fill="#B69AE8" />
          <line x1="85" y1="70" x2="88" y2="30" stroke="#C6A45C" strokeWidth="2" />
          <circle cx="88" cy="30" r="6" fill="#C6A45C" filter="drop-shadow(0 0 6px #C6A45C)" />

          {/* Ring & Pinky (Curled inward for gesture) */}
          <line x1="80" y1="120" x2="105" y2="85" stroke="#70449A" strokeWidth="2" />
          <circle cx="105" cy="85" r="4.5" fill="#70449A" />
          <line x1="105" y1="85" x2="115" y2="105" stroke="#70449A" strokeWidth="2" />
          <circle cx="115" cy="105" r="4.5" fill="#B69AE8" />

          {/* Gesture Tracking Spatial Mesh Triangles */}
          <polygon points="80,120 45,105 65,75" fill="rgba(182,154,232,0.12)" stroke="rgba(182,154,232,0.3)" strokeWidth="0.8" />
          <polygon points="80,120 65,75 85,70" fill="rgba(198,164,92,0.15)" stroke="rgba(198,164,92,0.3)" strokeWidth="0.8" />
          <polygon points="65,75 58,35 88,30" fill="rgba(245,241,250,0.1)" stroke="rgba(245,241,250,0.25)" strokeWidth="0.8" />
        </g>

        {/* ==========================================================
            3D GLOWING MICROPHONE (Center Anchor)
            ========================================================== */}
        <g transform="translate(240, 70)">
          {/* Mic Stand Base */}
          <ellipse cx="20" cy="155" rx="35" ry="10" fill="#171521" stroke="#C6A45C" strokeWidth="1.5" />
          <rect x="17" y="95" width="6" height="60" rx="3" fill="#B69AE8" />

          {/* Mic Capsule Ring */}
          <path d="M-5 50 C-5 75 45 75 45 50" stroke="#C6A45C" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <line x1="20" y1="75" x2="20" y2="95" stroke="#C6A45C" strokeWidth="2.5" strokeLinecap="round" />

          {/* Mic Capsule Dome */}
          <rect x="6" y="20" width="28" height="42" rx="14" fill="url(#syraxMic)" stroke="#F5F1FA" strokeWidth="1.5" filter="drop-shadow(0 0 10px rgba(182,154,232,0.6))" />
          {/* Capsule Mesh Pattern */}
          <line x1="8" y1="32" x2="32" y2="32" stroke="#171521" strokeWidth="1.5" opacity="0.6" />
          <line x1="8" y1="42" x2="32" y2="42" stroke="#171521" strokeWidth="1.5" opacity="0.6" />
        </g>

        {/* ==========================================================
            3D VOICE WAVEFORM FREQUENCY BARS (Right Side)
            ========================================================== */}
        <g transform="translate(330, 80)">
          {/* Holographic Equalizer Bars */}
          <rect x="10" y="55" width="8" height="40" rx="4" fill="#70449A" />
          <rect x="25" y="35" width="8" height="80" rx="4" fill="#9270C5" />
          <rect x="40" y="20" width="8" height="110" rx="4" fill="#B69AE8" filter="drop-shadow(0 0 6px #B69AE8)" />
          <rect x="55" y="5" width="8" height="140" rx="4" fill="#F5F1FA" filter="drop-shadow(0 0 10px #F5F1FA)" />
          <rect x="70" y="18" width="8" height="115" rx="4" fill="#C6A45C" filter="drop-shadow(0 0 8px #C6A45C)" />
          <rect x="85" y="38" width="8" height="75" rx="4" fill="#9270C5" />
          <rect x="100" y="60" width="8" height="30" rx="4" fill="#70449A" />

          {/* Waveform Sine Oscillation Curve */}
          <path
            d="M5 75 Q40 0 75 75 T145 75"
            stroke="#C6A45C"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            filter="drop-shadow(0 0 6px #C6A45C)"
          />
        </g>

        {/* Tagline Hologram Pill */}
        <g transform="translate(145, 275)">
          <rect x="0" y="0" width="230" height="28" rx="14" fill="#120D1C" stroke="rgba(198, 164, 92, 0.6)" strokeWidth="1.2" />
          <text x="115" y="18" fill="#F5F1FA" fontSize="11" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="3">
            SPEAK • GESTURE • CONTROL
          </text>
        </g>
      </svg>
    </div>
  );
});

// 3. JOB MARKET ANALYTICS: Isometric Analytics Dashboard, 3D Bar Charts, Database Cylinder
const JobMarketAnalytics3D = memo(function JobMarketAnalytics3D() {
  return (
    <div className="relative w-full h-[260px] sm:h-[300px] flex items-center justify-center p-4 select-none">
      <svg
        viewBox="0 0 520 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[480px] drop-shadow-[0_15px_35px_rgba(9,7,15,0.9)]"
      >
        <defs>
          <linearGradient id="dbGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4A286D" />
            <stop offset="50%" stopColor="#70449A" />
            <stop offset="100%" stopColor="#2A1840" />
          </linearGradient>
          <linearGradient id="barFront" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#B69AE8" />
            <stop offset="100%" stopColor="#70449A" />
          </linearGradient>
          <linearGradient id="barSide" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9270C5" />
            <stop offset="100%" stopColor="#4A286D" />
          </linearGradient>
          <linearGradient id="goldBarFront" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F5F1FA" />
            <stop offset="40%" stopColor="#C6A45C" />
            <stop offset="100%" stopColor="#8A6C28" />
          </linearGradient>
          <linearGradient id="dashPlane" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E172E" />
            <stop offset="100%" stopColor="#110C1A" />
          </linearGradient>
        </defs>

        {/* Ambient Radial Core */}
        <ellipse cx="260" cy="160" rx="170" ry="100" fill="#70449A" opacity="0.15" filter="blur(40px)" />

        {/* ==========================================================
            3D ISOMETRIC DASHBOARD BASE GRID
            ========================================================== */}
        {/* Isometric Grid Floor Lines */}
        <g opacity="0.25" stroke="#B69AE8" strokeWidth="1">
          <line x1="70" y1="210" x2="330" y2="70" />
          <line x1="120" y1="240" x2="380" y2="100" />
          <line x1="170" y1="270" x2="430" y2="130" />
          <line x1="170" y1="90" x2="430" y2="230" />
          <line x1="120" y1="120" x2="380" y2="260" />
          <line x1="70" y1="150" x2="330" y2="290" />
        </g>

        {/* ==========================================================
            3D RELATIONAL DATABASE CYLINDER (Left Side)
            ========================================================== */}
        <g transform="translate(60, 90)">
          {/* Cylinder Layer 3 (Bottom) */}
          <path d="M20 90 A30 12 0 0 0 80 90 V115 A30 12 0 0 1 20 115 Z" fill="url(#dbGrad)" stroke="rgba(182,154,232,0.4)" strokeWidth="1.2" />
          <ellipse cx="50" cy="90" rx="30" ry="12" fill="#2E184A" stroke="rgba(198,164,92,0.4)" strokeWidth="1" />

          {/* Cylinder Layer 2 (Middle) */}
          <path d="M20 60 A30 12 0 0 0 80 60 V85 A30 12 0 0 1 20 85 Z" fill="url(#dbGrad)" stroke="rgba(182,154,232,0.4)" strokeWidth="1.2" />
          <ellipse cx="50" cy="60" rx="30" ry="12" fill="#2E184A" stroke="rgba(198,164,92,0.4)" strokeWidth="1" />

          {/* Cylinder Layer 1 (Top) */}
          <path d="M20 30 A30 12 0 0 0 80 30 V55 A30 12 0 0 1 20 55 Z" fill="url(#dbGrad)" stroke="rgba(182,154,232,0.4)" strokeWidth="1.2" />
          <ellipse cx="50" cy="30" rx="30" ry="12" fill="#70449A" stroke="#C6A45C" strokeWidth="1.5" />

          {/* MySQL Database Key Emblem */}
          <text x="50" y="34" fill="#F5F1FA" fontSize="10" fontFamily="'JetBrains Mono', monospace" fontWeight="700" textAnchor="middle">
            SQL
          </text>
        </g>

        {/* ==========================================================
            3D EXTRUDED ISOMETRIC BAR CHARTS (Center)
            ========================================================== */}
        {/* Bar 1 (Height 60) */}
        <g transform="translate(190, 160)">
          {/* Front Face */}
          <rect x="0" y="20" width="22" height="60" fill="url(#barFront)" />
          {/* Top Face */}
          <polygon points="0,20 10,12 32,12 22,20" fill="#D3C2F3" />
          {/* Side Face */}
          <polygon points="22,20 32,12 32,72 22,80" fill="url(#barSide)" />
        </g>

        {/* Bar 2 (Height 100) */}
        <g transform="translate(235, 120)">
          {/* Front Face */}
          <rect x="0" y="20" width="22" height="100" fill="url(#barFront)" />
          {/* Top Face */}
          <polygon points="0,20 10,12 32,12 22,20" fill="#E6DCF8" />
          {/* Side Face */}
          <polygon points="22,20 32,12 32,112 22,120" fill="url(#barSide)" />
        </g>

        {/* Bar 3 (Max Peak - Gold - Height 135) */}
        <g transform="translate(280, 85)">
          {/* Front Face */}
          <rect x="0" y="20" width="22" height="135" fill="url(#goldBarFront)" filter="drop-shadow(0 0 10px rgba(198,164,92,0.5))" />
          {/* Top Face */}
          <polygon points="0,20 10,12 32,12 22,20" fill="#F5F1FA" />
          {/* Side Face */}
          <polygon points="22,20 32,12 32,147 22,155" fill="#8A6C28" />
        </g>

        {/* Bar 4 (Height 85) */}
        <g transform="translate(325, 135)">
          {/* Front Face */}
          <rect x="0" y="20" width="22" height="85" fill="url(#barFront)" />
          {/* Top Face */}
          <polygon points="0,20 10,12 32,12 22,20" fill="#D3C2F3" />
          {/* Side Face */}
          <polygon points="22,20 32,12 32,97 22,105" fill="url(#barSide)" />
        </g>

        {/* Polynomial Salary Trend Curve */}
        <path
          d="M195 175 Q245 130 295 95 T355 145"
          fill="none"
          stroke="#F5F1FA"
          strokeWidth="3"
          strokeLinecap="round"
          filter="drop-shadow(0 0 8px #F5F1FA)"
        />
        <circle cx="295" cy="95" r="5.5" fill="#C6A45C" stroke="#F5F1FA" strokeWidth="2" />

        {/* ==========================================================
            FLOATING POWER BI & FASTAPI METRIC PANELS (Right Side)
            ========================================================== */}
        <g transform="translate(365, 55)">
          {/* Floating Metric Card */}
          <rect
            x="0"
            y="0"
            width="125"
            height="75"
            rx="10"
            fill="url(#dashPlane)"
            stroke="rgba(198, 164, 92, 0.45)"
            strokeWidth="1.5"
            filter="drop-shadow(0 10px 20px rgba(9,7,15,0.8))"
          />
          <rect x="12" y="14" width="40" height="6" rx="3" fill="#B5AABD" />
          <text x="12" y="42" fill="#F5F1FA" fontSize="18" fontFamily="'Space Grotesk', sans-serif" fontWeight="700">
            +38.4%
          </text>
          <text x="12" y="58" fill="#C6A45C" fontSize="9" fontFamily="'JetBrains Mono', monospace">
            ▲ High Tech Demand
          </text>
          <circle cx="102" cy="22" r="10" fill="#70449A" />
          <path d="M98 22 L101 25 L106 19" stroke="#F5F1FA" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>

        {/* Python & Pandas Tool Badge */}
        <g transform="translate(365, 150)">
          <rect
            x="0"
            y="0"
            width="125"
            height="50"
            rx="10"
            fill="url(#dashPlane)"
            stroke="rgba(182, 154, 232, 0.35)"
            strokeWidth="1.2"
          />
          <text x="14" y="24" fill="#B69AE8" fontSize="11" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
            FASTAPI + PANDAS
          </text>
          <rect x="14" y="32" width="70" height="5" rx="2.5" fill="#C6A45C" />
          <rect x="90" y="32" width="22" height="5" rx="2.5" fill="#70449A" />
        </g>
      </svg>
    </div>
  );
});

export default function ProjectIllustration3D({ projectId }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const renderIllustration = () => {
    switch (projectId) {
      case 'career-sphere':
        return <CareerSphere3D />;
      case 'syrax':
        return <Syrax3D />;
      case 'job-market-analytics':
        return <JobMarketAnalytics3D />;
      default:
        return <CareerSphere3D />;
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full flex items-center justify-center overflow-hidden transition-transform duration-300 ease-out"
      style={{
        perspective: '1000px',
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      {renderIllustration()}
    </div>
  );
}
