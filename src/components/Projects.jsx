import { memo } from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectIllustration3D from './ProjectIllustration3D';
import { siteConfig } from '../data/siteConfig';

// Mapping for official tech documentation links
const techDocs = {
  React: 'https://react.dev/',
  FastAPI: 'https://fastapi.tiangolo.com/',
  Python: 'https://www.python.org/',
  JavaScript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  'Tailwind CSS': 'https://tailwindcss.com/',
  'REST API': 'https://restfulapi.net/',
  OpenCV: 'https://opencv.org/',
  SpeechRecognition: 'https://pypi.org/project/SpeechRecognition/',
  Pyttsx3: 'https://pypi.org/project/pyttsx3/',
  MediaPipe: 'https://developers.google.com/mediapipe',
  MySQL: 'https://dev.mysql.com/doc/',
  Pandas: 'https://pandas.pydata.org/',
  'Power BI': 'https://powerbi.microsoft.com/',
  SQL: 'https://www.w3schools.com/sql/',
};

const Projects = memo(function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header Matching Reference Composition */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lavender/10 border border-lavender/25 text-lavender-light text-xs font-mono uppercase tracking-widest mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>Personally Engineered</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-floral-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-floral-muted text-base sm:text-lg max-w-2xl mt-2 font-sans">
            Software applications personally engineered with Python, React, APIs, and data analytics pipelines.
          </p>
        </div>

        {/* Projects Grid Matching Reference .projects-container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-14">
          {siteConfig.projects.map((project, idx) => (
            <article
              key={project.id}
              className={`glass-panel rounded-2xl overflow-hidden border border-lavender/15 bg-midnight-850/80 hover:border-gold/40 transition-all duration-300 flex flex-col shadow-floral-card group ${
                idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* 16:9 Aspect Ratio 3D Illustration Panel (.project-shot-wrapper) */}
              <div className="relative w-full aspect-video bg-midnight-950/90 overflow-hidden border-b border-lavender/15 flex items-center justify-center p-2 group-hover:bg-midnight-900/90 transition-colors">
                <ProjectIllustration3D projectId={project.id} />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Project Meta Box (.project-meta-box) */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                <div>
                  {/* Badge & Live Status */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-lavender/10 text-lavender border border-lavender/25">
                      {project.badge}
                    </span>
                    {project.liveUrl && (
                      <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-gold/15 text-gold border border-gold/30 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                        Live Demo
                      </span>
                    )}
                  </div>

                  {/* Heading & Title Link with External Link Icon */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-floral-white mb-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 group-hover:text-gold transition-colors"
                      title={`Open ${project.name} on GitHub`}
                    >
                      <span>{project.name}</span>
                      <ExternalLink size={16} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                  </h3>

                  {/* Summary */}
                  <p className="text-floral-muted text-xs sm:text-sm leading-relaxed mb-4 font-sans">
                    {project.description}
                  </p>

                  {/* Key Highlights Bullet Points */}
                  <ul className="mb-5 space-y-1.5 text-xs font-sans text-floral-white/80">
                    {project.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="text-gold shrink-0 mt-0.5 text-[11px]">▸</span>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Pills with Documentation Arrows (a.tech-tag) */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t, tIdx) => {
                      const docUrl = techDocs[t] || `https://www.google.com/search?q=${encodeURIComponent(t + ' documentation')}`;
                      return (
                        <a
                          key={tIdx}
                          href={docUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono bg-midnight-900/90 border border-lavender/15 text-floral-muted hover:text-floral-white hover:border-gold/40 hover:bg-midnight-800 transition-all"
                          title={`Documentation for ${t}`}
                        >
                          <span>{t}</span>
                          <span className="text-[10px] opacity-50">↗</span>
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Actions: View Code (btn-resume-white) and Live Demo if available */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-lavender/10">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-floral-white text-midnight-950 hover:bg-lavender-light border border-white/60 shadow-sm transition-all group/btn active:scale-95"
                    title={`View ${project.name} source code on GitHub`}
                  >
                    <GithubIcon size={14} className="group-hover/btn:scale-110 transition-transform" />
                    <span>View Code</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-gold border border-gold/40 bg-gold/10 hover:bg-gold/20 hover:border-gold transition-all active:scale-95"
                      title={`Open ${project.name} live web application`}
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* More Repositories Discovery Bar (.projects-more-bar) */}
        <div className="rounded-2xl p-6 sm:p-7 border border-dashed border-lavender/25 bg-midnight-900/40 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-lg font-bold text-floral-white">
              Explore more repositories
            </h4>
            <p className="text-floral-muted text-xs sm:text-sm mt-0.5 font-sans">
              Discover additional scripts, backend services, and experiments on GitHub.
            </p>
          </div>
          <a
            href={`${siteConfig.personal.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-floral-white bg-midnight-850 hover:bg-lavender/20 border border-lavender/30 hover:border-gold/50 transition-all active:scale-95"
          >
            <GithubIcon size={16} />
            <span>All Repositories on GitHub</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
});

export default Projects;
