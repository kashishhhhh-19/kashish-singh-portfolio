import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { siteConfig } from '../data/site';
import { socialConfig } from '../data/social';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function FooterSection() {
  const reducedMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#09090F] border-t border-[#B9A0E8]/20 pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      {/* Subtle lavender background glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(185,160,232,0.3) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Brand & Monogram Logo */}
        <div className="space-y-2 mb-8">
          <a
            href="#home"
            className="font-serif text-2xl sm:text-3xl font-bold tracking-widest text-[#F8F6FA] hover:text-[#D8C8F3] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B9A0E8] rounded-md px-2 py-1 inline-block"
            aria-label="Back to top"
          >
            KASHISH SINGH<span className="text-[#D4AF37]">.</span>
          </a>
          <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-medium">
            {siteConfig.role} &bull; {siteConfig.educationBadge}
          </p>
        </div>

        {/* Quick Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-2 mb-8 text-xs sm:text-sm text-[#AAA5B5]">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#F8F6FA] hover:underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B9A0E8]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Social Icons with Smooth Hover Effects */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <a
            href={socialConfig.github.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-full bg-[#171521] border border-[#B9A0E8]/20 text-[#AAA5B5] hover:text-[#F8F6FA] hover:border-[#D4AF37] hover:scale-110 transition-all duration-300 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B9A0E8]"
          >
            <Github className="w-4 h-4" />
          </a>

          {socialConfig.linkedin.isPlaceholder ? (
            <span
              title="LinkedIn profile link to be added in social.js"
              className="p-2.5 rounded-full bg-[#171521]/60 border border-[#B9A0E8]/10 text-[#AAA5B5]/40 cursor-help"
            >
              <Linkedin className="w-4 h-4" />
            </span>
          ) : (
            <a
              href={socialConfig.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-full bg-[#171521] border border-[#B9A0E8]/20 text-[#AAA5B5] hover:text-[#F8F6FA] hover:border-[#D4AF37] hover:scale-110 transition-all duration-300 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B9A0E8]"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}

          {socialConfig.email.isPlaceholder ? (
            <a
              href="#contact"
              aria-label="Send message via contact form"
              className="p-2.5 rounded-full bg-[#171521] border border-[#B9A0E8]/20 text-[#AAA5B5] hover:text-[#F8F6FA] hover:border-[#D4AF37] hover:scale-110 transition-all duration-300 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B9A0E8]"
            >
              <Mail className="w-4 h-4" />
            </a>
          ) : (
            <a
              href={`mailto:${socialConfig.email.address}`}
              aria-label="Email address"
              className="p-2.5 rounded-full bg-[#171521] border border-[#B9A0E8]/20 text-[#AAA5B5] hover:text-[#F8F6FA] hover:border-[#D4AF37] hover:scale-110 transition-all duration-300 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B9A0E8]"
            >
              <Mail className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Animated Gold Separator Line that draws in */}
        {!reducedMotion ? (
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-32 sm:w-48 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-8"
          />
        ) : (
          <div className="w-32 sm:w-48 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-8" />
        )}

        {/* Copyright & Scroll to Top */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#AAA5B5]/80 pt-2 border-t border-[#B9A0E8]/10">
          <p>
            &copy; {new Date().getFullYear()} Kashish Singh. All Rights Reserved.
          </p>

          <p className="text-[11px] text-[#AAA5B5]/60 font-serif italic">
            Midnight Lavender &bull; A Botanical Developer Portfolio
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="inline-flex items-center gap-1.5 text-xs text-[#D8C8F3] hover:text-[#D4AF37] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B9A0E8] py-1 px-2 rounded"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
