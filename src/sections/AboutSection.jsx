import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Code2, Database, Brain, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/site';
import { GoldSectionDivider } from '../animations/GoldSectionDivider';
import { FloatingLily } from '../animations/FloatingLilies';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function AboutSection() {
  const reducedMotion = useReducedMotion();

  const highlights = [
    { icon: Terminal, label: "Core Foundation", desc: "BCA Graduate grounded in computer science fundamentals" },
    { icon: Code2, label: "Full-Stack Exploration", desc: "Crafting intuitive web interfaces and scalable backend logic" },
    { icon: Brain, label: "Intelligent Systems", desc: "Exploring computer vision, gesture tracking and automation" },
    { icon: Database, label: "Data & Persistence", desc: "Database architecture, SQL querying and analytics reporting" }
  ];

  return (
    <section
      id="about"
      aria-label="About Me Section"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#11111B] overflow-hidden"
    >
      {/* Background radial gradient glow */}
      <div 
        className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 pointer-events-none rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(113,83,165,0.2) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#B9A0E8] font-semibold">
            Background & Mindset
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#F8F6FA] mt-2">
            ABOUT ME
          </h2>
          <GoldSectionDivider />
          <p className="text-sm sm:text-base text-[#D8C8F3] font-light max-w-xl mx-auto">
            A little about my journey.
          </p>
        </motion.div>

        {/* Two-Column Grid: Text & Visual Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Narrative Content */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 text-[#AAA5B5] leading-relaxed text-base sm:text-lg"
          >
            {siteConfig.aboutText.map((paragraph, idx) => (
              <p key={idx} className="relative">
                {paragraph}
              </p>
            ))}

            {/* Quick Overview Badges */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#171521]/70 border border-[#B9A0E8]/20 hover:border-[#D4AF37]/50 transition-all duration-300 group shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-1.5">
                      <div className="p-2 rounded-lg bg-[#09090F] text-[#D4AF37] border border-[#D4AF37]/20 group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold text-[#F8F6FA] tracking-wide">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-xs text-[#AAA5B5]/90 pl-1">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Elegant Lavender-and-Gold Visual Panel with Corner Lily Accent */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl bg-[#171521] border border-[#B9A0E8]/30 p-6 sm:p-8 shadow-[0_15px_45px_rgba(0,0,0,0.6)] overflow-hidden">
              {/* Gold Top Border Inset Accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

              {/* Decorative Corner Lily Accent */}
              <FloatingLily
                src="/assets/images/lilies/lily-3.svg"
                className="-bottom-10 -right-10 w-44 h-44 opacity-40 pointer-events-none"
                initialRotate={15}
                duration={10}
                glow={false}
              />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#B9A0E8]/15">
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                    Developer Profile
                  </span>
                  <Sparkles className="w-4 h-4 text-[#B9A0E8]" />
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-[#AAA5B5] uppercase tracking-wider block">Specialization</span>
                    <span className="text-base sm:text-lg font-serif font-medium text-[#F8F6FA]">
                      Software Engineering & Application Logic
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-[#AAA5B5] uppercase tracking-wider block">Academic Path</span>
                    <span className="text-base sm:text-lg font-serif font-medium text-[#F8F6FA]">
                      Bachelor of Computer Applications (BCA)
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-[#AAA5B5] uppercase tracking-wider block">Philosophy</span>
                    <blockquote className="text-sm italic text-[#D8C8F3] mt-1 pl-3 border-l-2 border-[#D4AF37]">
                      "Turning concepts into functional, reliable, and user-centric applications."
                    </blockquote>
                  </div>

                  <div>
                    <span className="text-xs text-[#AAA5B5] uppercase tracking-wider block">Current Focus</span>
                    <span className="text-xs sm:text-sm text-[#AAA5B5] block mt-1">
                      Strengthening backend performance, deepening data pipelines, and exploring open collaborative opportunities.
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] hover:text-[#E8D69B] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
                  >
                    <span>View Projects Portfolio</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
