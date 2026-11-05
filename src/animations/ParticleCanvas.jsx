import React, { useRef, useEffect } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useIsMobile } from '../hooks/useIsMobile';
import { motionConfig } from '../data/motion';

/**
 * Lightweight particle canvas running on a single rAF loop.
 * Features drifting lavender particles and subtle gold highlights.
 * Auto-pauses on visibility change or when out of viewport.
 */
export function ParticleCanvas({ className = "" }) {
  const canvasRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const { isMobile } = useIsMobile();

  useEffect(() => {
    if (reducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let isVisible = true;
    let isIntersecting = true;

    const cfg = isMobile ? motionConfig.particles.mobile : motionConfig.particles.desktop;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Create particles
    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : height + 10;
        this.size = Math.random() * (cfg.maxSize - cfg.minSize) + cfg.minSize;
        this.isGold = Math.random() < cfg.goldRatio;

        // Colors
        if (this.isGold) {
          this.color = '212, 175, 55'; // Gold #D4AF37
          this.baseAlpha = Math.random() * 0.4 + 0.35;
        } else {
          this.color = '185, 160, 232'; // Lavender #B9A0E8
          this.baseAlpha = Math.random() * 0.35 + 0.2;
        }

        this.alpha = this.baseAlpha;
        this.pulseSpeed = Math.random() * 0.02 + 0.008;
        this.pulseOffset = Math.random() * Math.PI * 2;

        this.vx = (Math.random() - 0.5) * cfg.speedX;
        this.vy = -(Math.random() * cfg.speedY + 0.1);
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Subtle opacity pulsing
        this.pulseOffset += this.pulseSpeed;
        this.alpha = this.baseAlpha + Math.sin(this.pulseOffset) * 0.15;

        // Reset if drifted beyond top or edges
        if (this.y < -15 || this.x < -15 || this.x > width + 15) {
          this.reset(false);
        }
      }

      draw(c) {
        c.save();
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fillStyle = `rgba(${this.color}, ${Math.max(0.05, Math.min(1, this.alpha))})`;
        c.shadowColor = `rgba(${this.color}, 0.5)`;
        c.shadowBlur = this.isGold ? 6 : 4;
        c.fill();
        c.restore();
      }
    }

    const particles = Array.from({ length: cfg.count }, () => new Particle());

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Handle tab visibility pause
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible && isIntersecting) {
        loop();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // IntersectionObserver to pause when hero is off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isIntersecting = entry.isIntersecting;
          if (isIntersecting && isVisible) {
            loop();
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    // Animation loop
    const loop = () => {
      if (!isVisible || !isIntersecting) return;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(ctx);
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
    };
  }, [reducedMotion, isMobile]);

  if (reducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
      aria-hidden="true"
    />
  );
}
