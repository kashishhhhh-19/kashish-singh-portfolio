/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#09070F', // Primary background (deep midnight black)
          900: '#120D1C', // Secondary background (dark purple)
          850: '#171521', // Card surface
          800: '#1F1A2D',
          700: '#2A223D',
        },
        lavender: {
          DEFAULT: '#B69AE8', // Lavender
          light: '#D3C2F3',
          soft: '#9270C5',   // Soft violet
          deep: '#70449A',   // Deep purple
          glow: 'rgba(182, 154, 232, 0.25)',
        },
        violet: {
          soft: '#9270C5',
          deep: '#70449A',
        },
        gold: {
          DEFAULT: '#C6A45C', // Gold details
          light: '#E2CB96',
          dark: '#9E7E38',
          glow: 'rgba(198, 164, 92, 0.22)',
        },
        floral: {
          white: '#F5F1FA',  // White
          muted: '#B5AABD',  // Muted text
          dim: '#7C7387',
          border: 'rgba(182, 154, 232, 0.12)',
          borderHover: 'rgba(198, 164, 92, 0.35)',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'floral-card': '0 10px 30px -10px rgba(9, 7, 15, 0.8), 0 0 20px -5px rgba(182, 154, 232, 0.08)',
        'lavender-glow': '0 0 25px rgba(182, 154, 232, 0.28)',
        'gold-glow': '0 0 25px rgba(198, 164, 92, 0.25)',
      },
      animation: {
        'petal-float': 'petalFloat 12s ease-in-out infinite',
        'butterfly-flutter': 'wingFlap 0.35s ease-in-out infinite alternate',
        'shimmer-gold': 'shimmerGold 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'sway': 'sway 6s ease-in-out infinite alternate',
      },
      keyframes: {
        petalFloat: {
          '0%': { transform: 'translateY(-10px) rotate(0deg)', opacity: '0' },
          '20%': { opacity: '0.8' },
          '80%': { opacity: '0.8' },
          '100%': { transform: 'translateY(120vh) rotate(360deg)', opacity: '0' },
        },
        wingFlap: {
          '0%': { transform: 'scaleX(1)' },
          '100%': { transform: 'scaleX(0.2)' },
        },
        shimmerGold: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' },
        },
        sway: {
          '0%': { transform: 'rotate(-3deg)' },
          '100%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}
