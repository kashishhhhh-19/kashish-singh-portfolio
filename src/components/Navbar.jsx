import { useState, useEffect } from 'react';
import { Menu, Sparkles, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { siteConfig } from '../data/siteConfig';

export default function Navbar({
  activeSection,
  onOpenResume,
  onToggleDrawer,
  isAmbienceActive,
  onToggleAmbience,
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? 'bg-midnight-950/85 backdrop-blur-md border-b border-lavender/15 py-3 shadow-lg shadow-midnight-950/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2 font-serif text-xl md:text-2xl font-bold tracking-wider text-floral-white hover:text-lavender transition-colors"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-gold group-hover:scale-125 transition-transform drop-shadow-[0_0_8px_rgba(198,164,92,0.8)]" />
          <span className="text-shimmer-gold tracking-widest font-extrabold">KASHISH</span>
          <span className="font-sans text-xs uppercase tracking-widest text-lavender/70 hidden sm:inline">
            SINGH
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-floral-white bg-lavender/15 border border-lavender/35 shadow-[0_0_12px_rgba(182,154,232,0.2)]'
                    : 'text-floral-muted hover:text-floral-white hover:bg-midnight-850/60'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-[2px] bg-gold rounded-full" />
                )}
              </a>
            );
          })}

          {/* Resume Modal Trigger */}
          <button
            onClick={onOpenResume}
            className="ml-1 px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium text-gold/90 hover:text-gold border border-gold/30 hover:border-gold hover:bg-gold/10 transition-all flex items-center gap-1.5 cursor-pointer"
            aria-label="View Resume modal"
          >
            <FileText size={14} />
            <span>Resume ↗</span>
          </button>
        </nav>

        {/* Right Cluster */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Ambience / Atmosphere Toggle */}
          <button
            onClick={onToggleAmbience}
            className="p-2 rounded-full border border-lavender/20 bg-midnight-850/60 hover:bg-lavender/15 text-lavender hover:text-floral-white transition-all cursor-pointer"
            title={isAmbienceActive ? 'Mute Botanical Ambience' : 'Enable Botanical Ambience'}
            aria-label="Toggle botanical environment lighting"
          >
            <Sparkles size={16} className={isAmbienceActive ? 'text-gold animate-pulse' : 'text-floral-muted'} />
          </button>

          {/* GitHub Profile Button */}
          <a
            href={siteConfig.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-lavender/20 bg-midnight-850/60 hover:bg-lavender/15 hover:border-lavender/40 text-floral-white transition-all text-xs font-medium"
            title="Kashish Singh GitHub Profile"
            aria-label="Kashish Singh on GitHub"
          >
            <GithubIcon size={15} />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          {/* LinkedIn Profile Button */}
          {siteConfig.personal.linkedin && (
            <a
              href={siteConfig.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-lavender/20 bg-midnight-850/60 hover:bg-lavender/15 hover:border-lavender/40 text-floral-white transition-all text-xs font-medium"
              title="Kashish Singh LinkedIn Profile"
              aria-label="Kashish Singh on LinkedIn"
            >
              <LinkedinIcon size={15} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          )}

          {/* Mobile Menu Hamburger */}
          <button
            onClick={onToggleDrawer}
            className="md:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-lavender/20 bg-midnight-850/60 text-floral-white hover:bg-lavender/15 transition-all text-xs font-medium cursor-pointer"
            aria-label="Open Mobile Navigation"
          >
            <span>Menu</span>
            <Menu size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
