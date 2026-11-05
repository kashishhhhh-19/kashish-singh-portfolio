import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Sparkles, Image as ImageIcon } from 'lucide-react';
import { projectsData } from '../data/projects';
import { GoldSectionDivider } from '../animations/GoldSectionDivider';
import { ProjectModal } from '../components/ProjectModal';
import { ShimmerButton } from '../components/ShimmerButton';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="projects"
      aria-label="Featured Projects Section"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#11111B] overflow-hidden"
    >
      {/* Background glow accent */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none rounded-full opacity-15"
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
            Portfolio Showcase
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#F8F6FA] mt-2">
            FEATURED PROJECTS
          </h2>
          <GoldSectionDivider />
          <p className="text-sm sm:text-base text-[#D8C8F3] font-light max-w-xl mx-auto">
            Things I've built with technology.
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => {
            const hasFeaturedBorder = project.featured;

            return (
              <motion.article
                key={project.id}
                initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: reducedMotion ? 0 : idx * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative rounded-2xl bg-[#171521] border overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.6)] flex flex-col justify-between transition-all duration-300 ${
                  hasFeaturedBorder
                    ? 'border-[#D4AF37]/40 hover:border-[#D4AF37] hover:shadow-[0_15px_45px_rgba(212,175,55,0.15)]'
                    : 'border-[#B9A0E8]/25 hover:border-[#B9A0E8] hover:shadow-[0_15px_45px_rgba(185,160,232,0.15)]'
                }`}
              >
                {/* Gold animated top border accent for featured projects */}
                {hasFeaturedBorder && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent z-10" />
                )}

                <div>
                  {/* Thumbnail / Styled Placeholder Panel */}
                  <div 
                    onClick={() => setSelectedProject(project)}
                    className="relative aspect-video w-full overflow-hidden bg-[#09090F] border-b border-[#B9A0E8]/15 cursor-pointer flex items-center justify-center group-hover:opacity-95 transition-opacity"
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.name} thumbnail`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      /* Clearly marked styled placeholder panel */
                      <div className={`w-full h-full p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br ${project.placeholderGradient} relative overflow-hidden`}>
                        {/* Background pattern */}
                        <div 
                          className="absolute inset-0 opacity-10"
                          style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, #B9A0E8 1px, transparent 0)',
                            backgroundSize: '24px 24px'
                          }}
                        />

                        <div className="relative z-10 flex flex-col items-center">
                          <div className="p-3 rounded-full bg-[#09090F]/80 border border-[#B9A0E8]/30 text-[#D8C8F3] mb-2.5 shadow-md group-hover:scale-110 transition-transform duration-300">
                            <ImageIcon className="w-5 h-5" />
                          </div>
                          <span className="font-serif text-lg font-bold text-[#F8F6FA] tracking-wide">
                            {project.name}
                          </span>
                          <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-semibold mt-1">
                            Screenshot coming soon
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Quick View Hover Overlay */}
                    <div className="absolute inset-0 bg-[#09090F]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#171521] border border-[#D4AF37] text-xs font-semibold text-[#D4AF37] shadow-lg">
                        <Eye className="w-3.5 h-3.5" />
                        View Project Details
                      </span>
                    </div>
                  </div>

                  {/* Card Content Area */}
                  <div className="p-6">
                    {/* Category */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                        {project.category}
                      </span>
                      {hasFeaturedBorder && (
                        <span className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-[#D8C8F3] font-medium bg-[#7153A5]/30 px-2 py-0.5 rounded-full border border-[#B9A0E8]/30">
                          <Sparkles className="w-2.5 h-2.5 text-[#D4AF37]" />
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Project Title */}
                    <h3 
                      onClick={() => setSelectedProject(project)}
                      className="font-serif text-xl sm:text-2xl font-bold text-[#F8F6FA] tracking-wide cursor-pointer hover:text-[#D8C8F3] transition-colors"
                    >
                      {project.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-[#AAA5B5] leading-relaxed mt-2.5 line-clamp-3">
                      {project.shortDescription}
                    </p>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-[#B9A0E8]/10">
                      {project.tech.map((techItem, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-md bg-[#11111B] text-[#D8C8F3] text-[11px] font-medium border border-[#B9A0E8]/20"
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 mt-2 flex flex-wrap items-center justify-between gap-2.5">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D8C8F3] hover:text-[#F8F6FA] transition-colors py-2 px-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B9A0E8]"
                  >
                    <Eye className="w-4 h-4 text-[#B9A0E8]" />
                    <span>View Project</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {/* Live Demo button only where URL exists */}
                    {project.liveUrl && (
                      <ShimmerButton
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="gold"
                        size="sm"
                        icon={ExternalLink}
                        iconPosition="right"
                        ariaLabel={`Open live website for ${project.name}`}
                      >
                        Live Demo
                      </ShimmerButton>
                    )}

                    {/* GitHub Repo button */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View GitHub repo for ${project.name}`}
                        className="p-2 rounded-lg bg-[#11111B] border border-[#B9A0E8]/20 text-[#AAA5B5] hover:text-[#F8F6FA] hover:border-[#D4AF37] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B9A0E8]"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
