import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

/**
 * Luxury Interactive Shimmer Button.
 * Features subtle scale, golden light shimmer, press feedback, and accessible focus states.
 */
export function ShimmerButton({
  children,
  onClick,
  href,
  download,
  target,
  rel,
  variant = 'gold', // 'gold' | 'lavender' | 'outline' | 'ghost'
  size = 'md',      // 'sm' | 'md' | 'lg'
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  className = "",
  type = "button",
  ariaLabel,
}) {
  const reducedMotion = useReducedMotion();

  const sizeClasses = {
    sm: "px-4 py-2 text-xs font-medium tracking-wider",
    md: "px-6 py-3 text-sm font-semibold tracking-wide",
    lg: "px-8 py-4 text-base font-semibold tracking-wide",
  }[size] || "px-6 py-3 text-sm font-semibold tracking-wide";

  const variantClasses = {
    gold: "bg-gradient-to-r from-[#D4AF37] via-[#E8D69B] to-[#D4AF37] text-[#09090F] font-bold shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.4)] border border-[#E8D69B]/60",
    lavender: "bg-[#171521] text-[#F8F6FA] border border-[#B9A0E8]/40 hover:border-[#B9A0E8] shadow-[0_4px_18px_rgba(113,83,165,0.2)] hover:shadow-[0_6px_25px_rgba(185,160,232,0.3)]",
    outline: "bg-transparent text-[#F8F6FA] border border-[#D4AF37]/50 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10",
    ghost: "bg-transparent text-[#AAA5B5] hover:text-[#F8F6FA] hover:bg-[#171521]/60",
  }[variant] || "bg-[#171521] text-[#F8F6FA] border border-[#B9A0E8]/40";

  const buttonClasses = `
    relative inline-flex items-center justify-center gap-2.5 rounded-lg overflow-hidden
    transition-all duration-300 ease-out select-none
    focus-visible:ring-2 focus-visible:ring-[#B9A0E8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090F] focus-visible:outline-none
    disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
    ${sizeClasses}
    ${variantClasses}
    ${className}
  `;

  const motionProps = reducedMotion ? {} : {
    whileHover: { scale: 1.025 },
    whileTap: { scale: 0.975 },
    transition: { duration: 0.2, ease: "easeOut" }
  };

  const content = (
    <>
      {/* Golden Shimmer Sweeping Effect */}
      {!reducedMotion && !disabled && (
        <span
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"
          aria-hidden="true"
        >
          <span
            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] animate-shimmer"
            style={{ filter: "blur(4px)" }}
          />
        </span>
      )}

      {/* Button Content */}
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />}
      <span className="relative z-10">{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        aria-label={ariaLabel}
        className={`group ${buttonClasses}`}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`group ${buttonClasses}`}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
