import React from 'react';
import { motion } from 'framer-motion';
import { Download, Compass, Send, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/site';
import { socialConfig } from '../data/social';
import { motionConfig } from '../data/motion';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { FloatingLily } from '../animations/FloatingLilies';
import { ParticleCanvas } from '../animations/ParticleCanvas';
import { ShimmerButton } from '../components/ShimmerButton';

export function HeroSection() {
  const reducedMotion = useReducedMotion();
  const nameString = "KASHISH SINGH";
  const nameLetters = Array.from(nameString);

  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#09090F]"
    >
      {/* Layered Cinematic Midnight Background Gradients */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(circle at 50% 20%, rgba(113, 83, 165, 0.18) 0%, transparent 60%),
            radial-gradient(circle at 15% 85%, rgba(185, 160, 232, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 85% 85%, rgba(113, 83, 165, 0.12) 0%, transparent 50%),
            #09090F
          `
        }}
      />

      {/* Floating Particles Canvas */}
      <ParticleCanvas />

      {/* Subtle Botanical Lily Framing - Carefully positioned on far edges/corners so text is never covered */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Top-Left blooming lily */}
        <FloatingLily
          src="/assets/images/lilies/lily-1.svg"
          className="-top-12 -left-12 sm:-top-8 sm:-left-8 md:top-2 md:left-2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 opacity-40 sm:opacity-60 md:opacity-85 pointer-events-none"
          initialRotate={-18}
          duration={9.5}
          delay={0.2}
          driftDirection="top"
          glow={true}
        />

        {/* Top-Right side lily */}
        <FloatingLily
          src="/assets/images/lilies/lily-2.svg"
          className="-top-12 -right-12 sm:-top-8 sm:-right-8 md:top-2 md:right-2 w-48 h-48 sm:w-64 sm:h-64 md:w-88 md:h-88 opacity-40 sm:opacity-60 md:opacity-85 pointer-events-none"
          initialRotate={22}
          duration={11}
          delay={0.5}
          driftDirection="right"
          glow={true}
        />

        {/* Bottom-Left subtle bud cluster */}
        <FloatingLily
          src="/assets/images/lilies/lily-3.svg"
          className="bottom-2 -left-8 sm:bottom-6 sm:-left-4 md:bottom-12 md:left-4 w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 opacity-35 sm:opacity-50 md:opacity-75 pointer-events-none"
          initialRotate={30}
          duration={10}
          delay={0.8}
          driftDirection="bottom"
          glow={false}
        />

        {/* Bottom-Right blooming lily */}
        <FloatingLily
          src="/assets/images/lilies/lily-1.svg"
          className="bottom-2 -right-8 sm:bottom-6 sm:-right-4 md:bottom-12 md:right-4 w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 opacity-35 sm:opacity-50 md:opacity-75 pointer-events-none"
          initialRotate={-28}
          duration={12}
          delay={1.1}
          driftDirection="bottom"
          glow={true}
        />
      </div>

      {/* Central Content Container - strictly framed and shielded from lily overlap */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Soft Lavender Framing Border Tag */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#171521]/90 border border-[#B9A0E8]/30 shadow-[0_0_20px_rgba(185,160,232,0.12)] mb-5"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-xs uppercase tracking-widest text-[#D8C8F3] font-medium">
            Midnight Lavender &bull; Botanical Portfolio
          </span>
        </motion.div>

        {/* Subtitle / Greeting */}
        <motion.p
          initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#D8C8F3] mb-2"
        >
          Hello, I'm
        </motion.p>

        {/* Name: KASHISH SINGH revealed letter by letter with aria-label */}
        <h1
          aria-label={nameString}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider text-[#F8F6FA] leading-tight mb-4 select-none"
        >
          {reducedMotion ? (
            <span>{nameString}</span>
          ) : (
            <span aria-hidden="true" className="inline-block">
              {nameLetters.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: motionConfig.heroTypography.initialDelay + index * motionConfig.heroTypography.letterStaggerDelay,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`inline-block ${char === " " ? "w-3 sm:w-5" : ""}`}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          )}
        </h1>

        {/* Professional Title & Tagline */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reducedMotion ? 0 : 0.8 }}
          className="space-y-1 mb-6"
        >
          <p className="text-base sm:text-xl md:text-2xl font-medium text-[#D4AF37] tracking-wide">
            {siteConfig.role}
          </p>
          <p className="text-xs sm:text-sm md:text-base text-[#AAA5B5] tracking-widest uppercase font-light">
            {siteConfig.heroSubtitle}
          </p>
        </motion.div>

        {/* Introduction Paragraph */}
        <motion.p
          initial={reducedMotion ? {} : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reducedMotion ? 0 : 1.1 }}
          className="max-w-2xl text-sm sm:text-base md:text-lg text-[#AAA5B5] leading-relaxed mb-8 px-2"
        >
          {siteConfig.intro}
        </motion.p>

        {/* Action Buttons: Staggered Delay */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reducedMotion ? 0 : 1.35 }}
          className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mb-10"
        >
          <ShimmerButton
            href={siteConfig.resumePath}
            download="Kashish_Singh_Resume.pdf"
            variant="gold"
            size="md"
            icon={Download}
            iconPosition="left"
            ariaLabel="Download Kashish Singh Resume PDF"
          >
            Download Resume
          </ShimmerButton>

          <ShimmerButton
            href="#projects"
            variant="lavender"
            size="md"
            icon={Compass}
            iconPosition="right"
            ariaLabel="Explore featured projects"
          >
            Explore My Projects
          </ShimmerButton>

          <ShimmerButton
            href="#contact"
            variant="outline"
            size="md"
            icon={Send}
            iconPosition="right"
            ariaLabel="Scroll to contact form"
          >
            Hire Me
          </ShimmerButton>
        </motion.div>

        {/* Social Icons row */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: reducedMotion ? 0 : 1.55 }}
          className="flex items-center justify-center gap-4 text-[#AAA5B5]"
          aria-label="Social profiles"
        >
          <a
            href={socialConfig.github.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub Profile"
            className="p-2.5 rounded-full bg-[#171521] border border-[#B9A0E8]/20 text-[#AAA5B5] hover:text-[#F8F6FA] hover:border-[#D4AF37] transition-all duration-300 hover:scale-110 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B9A0E8]"
          >
            <Github className="w-5 h-5" />
          </a>

          {socialConfig.linkedin.isPlaceholder ? (
            <span
              title="LinkedIn profile link to be added in social.js"
              className="p-2.5 rounded-full bg-[#171521]/60 border border-[#B9A0E8]/10 text-[#AAA5B5]/50 cursor-help"
            >
              <Linkedin className="w-5 h-5" />
            </span>
          ) : (
            <a
              href={socialConfig.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn Profile"
              className="p-2.5 rounded-full bg-[#171521] border border-[#B9A0E8]/20 text-[#AAA5B5] hover:text-[#F8F6FA] hover:border-[#D4AF37] transition-all duration-300 hover:scale-110 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B9A0E8]"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}

          {socialConfig.email.isPlaceholder ? (
            <a
              href="#contact"
              aria-label="Send a message through the contact form"
              className="p-2.5 rounded-full bg-[#171521] border border-[#B9A0E8]/20 text-[#AAA5B5] hover:text-[#F8F6FA] hover:border-[#D4AF37] transition-all duration-300 hover:scale-110 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B9A0E8]"
            >
              <Mail className="w-5 h-5" />
            </a>
          ) : (
            <a
              href={`mailto:${socialConfig.email.address}`}
              aria-label="Send direct email"
              className="p-2.5 rounded-full bg-[#171521] border border-[#B9A0E8]/20 text-[#AAA5B5] hover:text-[#F8F6FA] hover:border-[#D4AF37] transition-all duration-300 hover:scale-110 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B9A0E8]"
            >
              <Mail className="w-5 h-5" />
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
