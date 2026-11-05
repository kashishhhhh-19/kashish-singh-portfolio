import { useEffect } from 'react';
import { X, ExternalLink, FileText, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { siteConfig } from '../data/siteConfig';

export default function NavDrawer({ isOpen, onClose, activeSection, onOpenResume }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[150] bg-midnight-950/80 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Panel */}
      <aside
        id="nav-drawer"
        className={`fixed top-0 right-0 z-[160] h-full w-[290px] max-w-[85vw] bg-midnight-900 border-l border-lavender/15 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-lavender/10">
            <span className="font-serif text-lg tracking-widest text-shimmer-gold font-bold">
              NAVIGATION
            </span>
            <button
              onClick={onClose}
              className="p-1.5 text-floral-muted hover:text-floral-white hover:bg-midnight-800 rounded-lg transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Links */}
          <nav className="mt-6 flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={onClose}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-lavender/15 text-lavender border border-lavender/30'
                      : 'text-floral-muted hover:text-floral-white hover:bg-midnight-850'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />}
                </a>
              );
            })}

            {/* Resume Button in Drawer */}
            <button
              onClick={() => {
                onClose();
                onOpenResume();
              }}
              className="mt-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gold border border-gold/30 bg-gold/5 hover:bg-gold/15 transition-all flex items-center justify-between cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <FileText size={16} />
                <span>Resume (PDF)</span>
              </span>
              <ExternalLink size={14} />
            </button>
          </nav>
        </div>

        {/* Bottom Contact & Social Details */}
        <div className="pt-4 border-t border-lavender/10 flex flex-col gap-2.5">
          <a
            href={`mailto:${siteConfig.personal.email}`}
            className="flex items-center gap-2 text-xs font-mono text-floral-muted hover:text-lavender transition-colors break-all"
            title="Send Email"
          >
            <Mail size={14} className="shrink-0" />
            <span>{siteConfig.personal.email}</span>
          </a>
          <a
            href={siteConfig.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-floral-muted hover:text-lavender transition-colors"
            title="GitHub Profile"
            aria-label="Kashish Singh on GitHub"
          >
            <GithubIcon size={14} className="shrink-0" />
            <span>github.com/kashishhhhh-19 ↗</span>
          </a>
          {siteConfig.personal.linkedin && (
            <a
              href={siteConfig.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-floral-muted hover:text-gold transition-colors"
              title="LinkedIn Profile"
              aria-label="Kashish Singh on LinkedIn"
            >
              <LinkedinIcon size={14} className="shrink-0" />
              <span>linkedin.com/in/kashishsingh190806 ↗</span>
            </a>
          )}
        </div>
      </aside>
    </>
  );
}
