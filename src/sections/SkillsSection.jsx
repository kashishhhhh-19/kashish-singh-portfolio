import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Database, Server, BarChart3, Wrench, CheckCircle } from 'lucide-react';
import { skillCategories } from '../data/skills';
import { GoldSectionDivider } from '../animations/GoldSectionDivider';
import { useReducedMotion } from '../hooks/useReducedMotion';

const iconMap = {
  Code2: Code2,
  Globe: Globe,
  Database: Database,
  Server: Server,
  BarChart3: BarChart3,
  Wrench: Wrench,
};

export function SkillsSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="skills"
      aria-label="Technical Skills Section"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#09090F] overflow-hidden"
    >
      {/* Ambient background glow */}
      <div 
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(185,160,232,0.18) 0%, transparent 70%)',
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
            Capabilities & Technologies
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#F8F6FA] mt-2">
            MY TECHNICAL TOOLKIT
          </h2>
          <GoldSectionDivider />
          <p className="text-sm sm:text-base text-[#D8C8F3] font-light max-w-xl mx-auto">
            Practical competencies developed through computer applications study and hands-on software development.
          </p>
        </motion.div>

        {/* Skill Category Cards - Staggered Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = iconMap[category.icon] || Code2;

            return (
              <motion.div
                key={category.id}
                initial={reducedMotion ? {} : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: reducedMotion ? 0 : idx * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative rounded-2xl bg-[#171521] border border-[#B9A0E8]/25 hover:border-[#D4AF37]/60 p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_40px_rgba(212,175,55,0.12)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Subtle top card lavender glow line */}
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#B9A0E8]/20 to-transparent group-hover:via-[#D4AF37]/50 transition-colors" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="p-2.5 rounded-xl bg-[#11111B] text-[#D8C8F3] group-hover:text-[#D4AF37] border border-[#B9A0E8]/20 group-hover:border-[#D4AF37]/40 transition-colors duration-300 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F8F6FA] tracking-wide group-hover:text-[#F8F6FA] transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-[#AAA5B5]">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List - NO percentage or proficiency bars */}
                  <div className="space-y-3 pt-2">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-lg bg-[#11111B]/60 border border-[#B9A0E8]/10 group-hover:border-[#B9A0E8]/20 transition-colors flex items-start justify-between gap-3"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-[#F8F6FA]">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-xs text-[#AAA5B5]/80 block mt-0.5">
                            {skill.description}
                          </span>
                        </div>
                        <CheckCircle className="w-4 h-4 text-[#D4AF37]/70 shrink-0 mt-0.5" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtle card bottom accent */}
                <div className="mt-5 pt-3 border-t border-[#B9A0E8]/10 flex items-center justify-between text-[11px] text-[#AAA5B5]/70">
                  <span>Category {idx + 1} of {skillCategories.length}</span>
                  <span className="text-[#D4AF37] font-medium">&bull; Verified Toolkit</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
