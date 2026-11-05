import { memo } from 'react';
import { FileText, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import HeroLily from './HeroLily';
import { siteConfig } from '../data/siteConfig';

const Hero = memo(function Hero({ onOpenResume }) {
  const firstName = "KASHISH";
  const lastName = "SINGH";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden scroll-mt-20"
    >
      {/* SECTION 5: LARGE ANIMATED PURPLE LILY DIRECTLY BEHIND THE NAME */}
      <div className="absolute inset-0 flex items-center justify-center lg:justify-end lg:pr-12 pointer-events-none z-0">
        <HeroLily />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full relative z-10">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-3xl">
          {/* Greeting Badge Matching Reference */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-midnight-900/90 border border-lavender/30 text-lavender-light text-xs font-mono uppercase tracking-widest mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(182,154,232,0.15)]">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse drop-shadow-[0_0_6px_rgba(198,164,92,0.9)]" />
            <span className="text-floral-white/90">Hi, I am</span>
          </div>

          {/* SECTION 4 & NON-NEGOTIABLE 2: KASHISH SINGH IN BOLD TYPOGRAPHY IMMEDIATELY VISIBLE ON FIRST LOAD */}
          <h1
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-floral-white leading-[0.94] mb-6 select-none drop-shadow-[0_4px_30px_rgba(9,7,15,0.95)]"
            aria-label="Kashish Singh"
          >
            <span className="block text-shimmer-gold drop-shadow-[0_0_35px_rgba(245,241,250,0.35)]">
              {firstName}
            </span>
            <span className="block text-shimmer-lavender drop-shadow-[0_0_40px_rgba(182,154,232,0.45)]">
              {lastName}
            </span>
          </h1>

          {/* Professional Developer Tagline Matching Reference Proportions */}
          <div className="mb-10 max-w-xl">
            <p className="font-sans text-base sm:text-lg md:text-xl text-floral-white/95 font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(9,7,15,0.8)]">
              {siteConfig.personal.role}
            </p>
            <p className="font-sans text-sm sm:text-base text-floral-muted mt-1.5 leading-relaxed drop-shadow-[0_2px_8px_rgba(9,7,15,0.8)]">
              {siteConfig.personal.tagline}
            </p>
          </div>

          {/* Actions Container Matching Reference Composition */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 w-full max-w-md sm:max-w-none mb-12">
            {/* Clean White/Floral-White Resume Button */}
            <button
              onClick={onOpenResume}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm md:text-base font-bold text-midnight-950 bg-floral-white hover:bg-lavender-light border border-white/60 shadow-[0_4px_25px_rgba(245,241,250,0.3)] hover:shadow-[0_6px_30px_rgba(182,154,232,0.5)] transition-all flex items-center justify-center gap-2.5 group cursor-pointer active:scale-95"
              aria-label="Open Resume Preview"
            >
              <FileText size={18} className="text-midnight-950 group-hover:scale-110 transition-transform" />
              <span>Resume ↗</span>
            </button>

            {/* Secondary Action Cluster */}
            <div className="flex items-center justify-center gap-3 w-full sm:w-auto">
              {/* Hire Me CTA Button */}
              <a
                href="#contact"
                className="flex-1 sm:flex-initial px-6 py-3.5 rounded-xl text-sm md:text-base font-semibold text-floral-white bg-midnight-900/90 hover:bg-lavender/25 border border-lavender/30 hover:border-gold/50 shadow-[0_0_15px_rgba(182,154,232,0.15)] transition-all text-center backdrop-blur-sm active:scale-95"
              >
                Hire Me
              </a>

              {/* GitHub Button (44px x 44px) */}
              <a
                href={siteConfig.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-midnight-900/90 border border-lavender/25 text-floral-white hover:text-gold hover:border-gold/50 hover:bg-midnight-800 transition-all flex items-center justify-center shadow-md backdrop-blur-sm active:scale-95"
                aria-label="Kashish Singh on GitHub"
                title="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>

              {/* LinkedIn Button (44px x 44px) */}
              {siteConfig.personal.linkedin && (
                <a
                  href={siteConfig.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-midnight-900/90 border border-lavender/25 text-floral-white hover:text-gold hover:border-gold/50 hover:bg-midnight-800 transition-all flex items-center justify-center shadow-md backdrop-blur-sm active:scale-95"
                  aria-label="Kashish Singh on LinkedIn"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                </a>
              )}

              {/* Email Direct Button (44px x 44px) */}
              <a
                href={`mailto:${siteConfig.personal.email}`}
                className="w-11 h-11 rounded-xl bg-midnight-900/90 border border-lavender/25 text-floral-white hover:text-lavender hover:border-lavender/50 hover:bg-midnight-800 transition-all flex items-center justify-center shadow-md backdrop-blur-sm active:scale-95"
                aria-label="Send direct email"
                title={`Send direct email to ${siteConfig.personal.email}`}
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Minimalist Mouse Scroll Pill Indicator Matching Reference */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 pointer-events-auto">
        <a
          href="#about"
          className="group flex flex-col items-center gap-2 text-xs font-mono text-floral-muted/80 hover:text-gold transition-colors"
          aria-label="Scroll to about section"
        >
          <div className="w-6 h-10 rounded-full border-2 border-lavender/35 group-hover:border-gold/60 p-1 flex justify-center">
            <div className="w-1.5 h-2.5 rounded-full bg-floral-white group-hover:bg-gold animate-bounce transition-colors" />
          </div>
          <span className="tracking-widest uppercase text-[10px] opacity-70 group-hover:opacity-100 transition-opacity">
            Scroll
          </span>
        </a>
      </div>
    </section>
  );
});

export default Hero;
