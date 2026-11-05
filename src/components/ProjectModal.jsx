import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Layers, Sparkles } from 'lucide-react';
import { ShimmerButton } from './ShimmerButton';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function ProjectModal({ project, isOpen, onClose }) {
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);
  const reducedMotion = useReducedMotion();

  // Scroll lock and Esc key handling
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement;
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      // Focus first actionable item in modal
      setTimeout(() => {
        if (modalRef.current) {
          const focusable = modalRef.current.querySelectorAll('button, a, input, [tabindex="0"]');
          if (focusable.length > 0) {
            focusable[0].focus();
          }
        }
      }, 50);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
        if (previousFocusRef.current && typeof previousFocusRef.current.focus === 'function') {
          previousFocusRef.current.focus();
        }
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[9995] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#09090F]/85 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Modal Window Container */}
        <motion.div
          ref={modalRef}
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-3xl bg-[#171521] border border-[#B9A0E8]/40 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.85)] overflow-hidden z-10 my-auto text-left"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Subtle top gold accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close project details"
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#11111B]/80 text-[#AAA5B5] hover:text-[#F8F6FA] hover:bg-[#B9A0E8]/20 border border-[#B9A0E8]/20 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#B9A0E8] focus-visible:outline-none"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Banner / Project Header */}
          <div className={`relative px-6 pt-8 pb-6 bg-gradient-to-br ${project.placeholderGradient || 'from-[#1F1934] via-[#171521] to-[#11111B]'} border-b border-[#B9A0E8]/20`}>
            {/* Category tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#09090F]/60 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-medium tracking-wide mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{project.category}</span>
            </div>

            <h2 id="modal-project-title" className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#F8F6FA] tracking-wide">
              {project.name}
            </h2>
            <p className="text-sm sm:text-base text-[#D8C8F3] mt-1 font-light">
              {project.tagline}
            </p>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
            {/* Detailed Description */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#B9A0E8] font-semibold mb-2">
                Project Overview
              </h3>
              <p className="text-sm sm:text-base text-[#AAA5B5] leading-relaxed">
                {project.detailedOverview}
              </p>
            </div>

            {/* Key Highlights */}
            {project.keyHighlights && project.keyHighlights.length > 0 && (
              <div>
                <h3 className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  Key Highlights & Architecture
                </h3>
                <ul className="space-y-2.5">
                  {project.keyHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-[#F8F6FA]/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B9A0E8] mt-2 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies Used */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#B9A0E8] font-semibold mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#B9A0E8]" />
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md bg-[#11111B] text-[#D8C8F3] text-xs font-medium border border-[#B9A0E8]/30 shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer / Action Buttons */}
          <div className="px-6 py-4 sm:px-8 bg-[#11111B] border-t border-[#B9A0E8]/20 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <ShimmerButton
                  href={project.liveUrl}
                  target="_blank"
                  variant="gold"
                  size="sm"
                  icon={ExternalLink}
                  iconPosition="right"
                  ariaLabel={`Open live demo for ${project.name}`}
                >
                  Live Application
                </ShimmerButton>
              )}
              {project.githubUrl && (
                <ShimmerButton
                  href={project.githubUrl}
                  target="_blank"
                  variant="lavender"
                  size="sm"
                  icon={Github}
                  iconPosition="left"
                  ariaLabel={`View GitHub repository for ${project.name}`}
                >
                  GitHub Repository
                </ShimmerButton>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs text-[#AAA5B5] hover:text-[#F8F6FA] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B9A0E8]"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
