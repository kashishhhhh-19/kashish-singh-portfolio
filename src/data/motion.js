export const motionConfig = {
  loader: {
    maxDurationMs: 1200, // Maximum loader duration in milliseconds
    sessionStorageKey: "midnight_lavender_visited",
  },
  particles: {
    desktop: {
      count: 35,
      minSize: 1.5,
      maxSize: 3.8,
      speedY: 0.28,
      speedX: 0.14,
      glowRadius: 8,
      goldRatio: 0.18, // 18% tiny gold highlight particles, 82% lavender
    },
    mobile: {
      count: 14,
      minSize: 1.2,
      maxSize: 2.8,
      speedY: 0.18,
      speedX: 0.08,
      glowRadius: 4,
      goldRatio: 0.15,
    }
  },
  lilies: {
    desktop: {
      floatDurationRange: [7.5, 11.5], // Natural breathing/floating range in seconds
      floatYRange: [12, 18], // Pixels
      rotateRange: [2.5, 4.5], // Degrees
      scaleRange: [1, 1.03],
    },
    mobile: {
      floatDurationRange: [9.0, 13.0],
      floatYRange: [5, 8],
      rotateRange: [1, 2],
      scaleRange: [1, 1.015],
    }
  },
  heroTypography: {
    letterStaggerDelay: 0.045, // Stagger per character in KASHISH SINGH
    initialDelay: 0.2,
    totalDurationLimit: 2.2, // Sequence finishes cleanly under 2.5s
  },
  transitions: {
    springSmooth: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
    fadeGentle: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
    lineDraw: {
      duration: 0.85,
      ease: [0.65, 0, 0.35, 1],
    }
  }
};
