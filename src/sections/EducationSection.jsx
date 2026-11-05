import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle, Sparkles } from 'lucide-react';
import { educationData } from '../data/education';
import { GoldSectionDivider } from '../animations/GoldSectionDivider';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function EducationSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="education"
      aria-label="Education Section"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#09090F] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 pointer-events-none rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(113,83,165,0.2) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#B9A0E8] font-semibold">
            Academic Background
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#F8F6FA] mt-2">
            EDUCATION
          </h2>
          <GoldSectionDivider />
          <p className="text-sm sm:text-base text-[#D8C8F3] font-light max-w-xl mx-auto">
            Formal education in computer applications and foundational software engineering principles.
          </p>
        </motion.div>

        {/* Timeline Container with Progressive Draw Line */}
        <div className="relative pl-6 sm:pl-10">
          {/* Progressive Drawing Vertical Line */}
          {!reducedMotion ? (
            <motion.div
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
              className="absolute left-2 sm:left-4 top-2 bottom-6 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#B9A0E8] to-[#7153A5]/40"
            />
          ) : (
            <div className="absolute left-2 sm:left-4 top-2 bottom-6 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#B9A0E8] to-[#7153A5]/40" />
          )}

          {educationData.map((edu, idx) => (
            <div key={idx} className="relative pb-8">
              {/* Timeline Node Icon */}
              <motion.div
                initial={reducedMotion ? {} : { scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: reducedMotion ? 0 : 0.35 }}
                className="absolute -left-6 sm:-left-10 top-1 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#171521] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.6)] z-10"
              >
                <GraduationCap className="w-4 h-4" />
              </motion.div>

              {/* Education Card */}
              <motion.div
                initial={reducedMotion ? {} : { opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: reducedMotion ? 0 : 0.5 }}
                className="relative rounded-2xl bg-[#171521] border border-[#B9A0E8]/30 p-6 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                {/* Gold Top Inset Accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#11111B] text-[#D4AF37] text-xs font-semibold border border-[#D4AF37]/30">
                    <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                    Undergraduate Degree
                  </span>

                  {/* Year Placeholder */}
                  <div className="flex items-center gap-1.5 text-xs text-[#AAA5B5]">
                    <Calendar className="w-3.5 h-3.5 text-[#B9A0E8]" />
                    {edu.isYearPlaceholder ? (
                      <span className="italic text-[#D8C8F3] bg-[#11111B] px-2 py-0.5 rounded border border-[#B9A0E8]/20">
                        {edu.year}
                      </span>
                    ) : (
                      <span>{edu.year}</span>
                    )}
                  </div>
                </div>

                {/* Degree Title */}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F8F6FA] tracking-wide">
                  {edu.degree}
                </h3>

                {/* Institution & Location Placeholders */}
                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#AAA5B5] mt-2 mb-4">
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-[#B9A0E8]" />
                    {edu.isInstitutionPlaceholder ? (
                      <span className="italic text-[#D4AF37] bg-[#11111B] px-2 py-0.5 rounded border border-[#D4AF37]/30">
                        {edu.institution}
                      </span>
                    ) : (
                      <span className="font-medium text-[#F8F6FA]">{edu.institution}</span>
                    )}
                  </div>

                  {edu.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#AAA5B5]" />
                      <span className="italic text-[#AAA5B5]">{edu.location}</span>
                    </div>
                  )}
                </div>

                {/* Summary */}
                <p className="text-sm text-[#AAA5B5] leading-relaxed mb-6">
                  {edu.summary}
                </p>

                {/* Academic Focus */}
                <div className="pt-4 border-t border-[#B9A0E8]/15">
                  <h4 className="text-xs uppercase tracking-wider text-[#D8C8F3] font-semibold mb-3">
                    Curriculum & Key Areas of Study
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {edu.academicFocus.map((item, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#AAA5B5]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
