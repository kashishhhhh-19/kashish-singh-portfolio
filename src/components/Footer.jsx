import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, NetlifyIcon } from './Icons';
import { siteConfig } from '../data/siteConfig';

export default function Footer({ onOpenResume }) {
  const currentYear = 2026;

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-lavender/15 bg-midnight-950/95 pt-16 pb-12 text-sm select-none">
      {/* Subtle Top Gold Shimmer Accent Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* 4-Column Hyperlinks Grid Matching Reference */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-lavender/10">
          {/* Column 1: Navigation */}
          <div>
            <h4 className="font-serif text-base font-bold text-floral-white mb-4 tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans text-floral-muted">
              <li>
                <a href="#home" className="hover:text-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-gold transition-colors">
                  Skills &amp; Technologies
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-gold transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-gold transition-colors">
                  Academic Education
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-colors">
                  Contact Transmission
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenResume}
                  className="hover:text-gold transition-colors flex items-center gap-1 text-left cursor-pointer"
                >
                  <span>View Resume (PDF) ↗</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Featured Projects */}
          <div>
            <h4 className="font-serif text-base font-bold text-floral-white mb-4 tracking-wider uppercase">
              Featured Projects
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans text-floral-muted">
              {siteConfig.projects.map((proj) => (
                <li key={proj.id}>
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors flex items-center gap-1"
                  >
                    <span>{proj.name} ↗</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`${siteConfig.personal.github}?tab=repositories`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lavender transition-colors font-medium"
                >
                  All GitHub Repositories ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Technologies */}
          <div>
            <h4 className="font-serif text-base font-bold text-floral-white mb-4 tracking-wider uppercase">
              Technologies
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans text-floral-muted">
              <li>
                <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  React ↗
                </a>
              </li>
              <li>
                <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  Python ↗
                </a>
              </li>
              <li>
                <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  FastAPI ↗
                </a>
              </li>
              <li>
                <a href="https://dev.mysql.com/doc/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  MySQL ↗
                </a>
              </li>
              <li>
                <a href="https://powerbi.microsoft.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  Power BI ↗
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  Tailwind CSS ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h4 className="font-serif text-base font-bold text-floral-white mb-4 tracking-wider uppercase">
              Connect
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans text-floral-muted">
              <li>
                <a
                  href={siteConfig.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors flex items-center gap-1.5"
                  aria-label="Kashish Singh on GitHub"
                >
                  <GithubIcon size={14} />
                  <span>GitHub Profile ↗</span>
                </a>
              </li>
              {siteConfig.personal.linkedin && (
                <li>
                  <a
                    href={siteConfig.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors flex items-center gap-1.5"
                    aria-label="Kashish Singh on LinkedIn"
                  >
                    <LinkedinIcon size={14} />
                    <span>LinkedIn Profile ↗</span>
                  </a>
                </li>
              )}
              <li>
                <a
                  href={`mailto:${siteConfig.personal.email}`}
                  className="hover:text-lavender transition-colors flex items-center gap-1.5"
                >
                  <span>Email Direct: {siteConfig.personal.email}</span>
                </a>
              </li>
              <li className="pt-2 text-xs font-mono text-floral-dim">
                📍 {siteConfig.personal.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row Matching Reference */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-floral-muted">
          <div>
            &copy; {currentYear} <strong>{siteConfig.personal.name}</strong>. Midnight Floral Lavender Developer Portfolio.
          </div>
          <div>
            <a
              href="#home"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-lavender hover:text-gold transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </a>
          </div>
        </div>

        {/* SECTION 13: "POWERED BY NETLIFY" BADGE */}
        <div className="pt-6 mt-4 border-t border-lavender/5 flex items-center justify-center">
          <a
            href="https://www.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-midnight-900/90 border border-lavender/15 hover:border-gold/40 text-floral-muted hover:text-floral-white transition-all duration-200 text-[11px] font-mono group"
            title="Deploys and hosts on Netlify"
          >
            <NetlifyIcon size={15} className="group-hover:scale-110 transition-transform" />
            <span>Powered by <strong className="text-floral-white group-hover:text-gold transition-colors">Netlify</strong></span>
          </a>
        </div>
      </div>
    </footer>
  );
}
