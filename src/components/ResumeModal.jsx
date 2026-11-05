import { useEffect, useRef, useState } from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function ResumeModal({ isOpen, onClose }) {
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);
  const [activeTab, setActiveTab] = useState('pdf'); // 'pdf' | 'overview'

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      document.body.style.overflow = 'hidden';
      // Focus modal container
      setTimeout(() => {
        modalRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
      if (previousActiveElement.current instanceof HTMLElement) {
        previousActiveElement.current.focus();
      }
    }

    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      }

      // Simple Focus Trap
      if (e.key === 'Tab' && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-5 bg-midnight-950/85 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      ref={modalRef}
      tabIndex={-1}
    >
      <div className="glass-panel w-full max-w-4xl h-[90vh] max-h-[850px] rounded-2xl bg-midnight-900 border border-lavender/30 shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-lavender/15 shrink-0 bg-midnight-950/60">
          <div>
            <h2 id="resume-modal-title" className="font-serif text-xl sm:text-2xl font-bold text-shimmer-gold">
              {siteConfig.personal.name} — Official Resume
            </h2>
            <p className="text-xs font-mono text-lavender tracking-wider uppercase mt-0.5">
              Verified PDF Document • {siteConfig.personal.role}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* View Switcher Tabs */}
            <div className="hidden sm:flex items-center bg-midnight-800 rounded-lg p-1 border border-lavender/15 mr-2">
              <button
                onClick={() => setActiveTab('pdf')}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                  activeTab === 'pdf'
                    ? 'bg-lavender/25 text-floral-white shadow-sm'
                    : 'text-floral-muted hover:text-floral-white'
                }`}
              >
                PDF Document
              </button>
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                  activeTab === 'overview'
                    ? 'bg-lavender/25 text-floral-white shadow-sm'
                    : 'text-floral-muted hover:text-floral-white'
                }`}
              >
                Structured Overview
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-floral-muted hover:text-floral-white hover:bg-midnight-800 rounded-xl transition-colors"
              aria-label="Close resume preview modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-midnight-950/40">
          {activeTab === 'pdf' ? (
            <div className="w-full h-full min-h-[450px] flex flex-col rounded-xl overflow-hidden border border-lavender/15 bg-midnight-900">
              {/* Embedded Document Viewer */}
              <object
                data={`${siteConfig.personal.resumeUrl}#toolbar=0`}
                type="application/pdf"
                className="w-full h-full min-h-[460px] flex-1"
              >
                {/* Fallback for browsers that do not support inline PDF embedding */}
                <div className="p-8 text-center flex flex-col items-center justify-center h-full">
                  <FileText size={48} className="text-lavender mb-3" />
                  <h3 className="font-serif text-lg font-bold text-floral-white mb-2">
                    Kashish Singh Resume PDF
                  </h3>
                  <p className="text-floral-muted text-sm max-w-md mb-6">
                    Your browser does not directly support inline PDF preview. You can open or download the official verified document directly.
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={siteConfig.personal.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-floral-white text-midnight-950 hover:bg-lavender-light flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      <span>Open PDF in New Tab</span>
                    </a>
                  </div>
                </div>
              </object>
            </div>
          ) : (
            /* Structured Overview Tab */
            <div className="max-w-2xl mx-auto space-y-6 py-2">
              <div className="flex flex-wrap gap-4 text-xs font-mono text-floral-muted pb-4 border-b border-lavender/10">
                <span>📍 {siteConfig.personal.location}</span>
                <span>📧 {siteConfig.personal.email}</span>
                <span>🐙 github.com/kashishhhhh-19</span>
              </div>

              <div>
                <h3 className="font-serif text-lg font-bold text-floral-white mb-2">
                  Academic Qualification
                </h3>
                <p className="text-sm font-sans text-floral-white font-medium">
                  {siteConfig.education[0].degree}
                </p>
                <p className="text-xs font-sans text-floral-muted mt-0.5">
                  {siteConfig.education[0].institution}
                </p>
              </div>

              <div>
                <h3 className="font-serif text-lg font-bold text-floral-white mb-2">
                  Core Technical Stack
                </h3>
                <div className="text-xs sm:text-sm font-sans space-y-1 text-floral-muted">
                  <p><strong className="text-floral-white">Frontend:</strong> HTML5, CSS3, JavaScript, React, Tailwind CSS</p>
                  <p><strong className="text-floral-white">Backend &amp; DB:</strong> Python, Java, FastAPI, SQL, MySQL</p>
                  <p><strong className="text-floral-white">Data &amp; Tools:</strong> Pandas, Power BI, Git, GitHub, VS Code</p>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-lg font-bold text-floral-white mb-2">
                  Featured Software
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm font-sans text-floral-muted">
                  {siteConfig.projects.map((p) => (
                    <li key={p.id} className="pl-3 border-l-2 border-lavender/40">
                      <strong className="text-floral-white">{p.name}:</strong> {p.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Actions Footer */}
        <div className="px-6 py-4 border-t border-lavender/15 bg-midnight-950/70 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <span className="text-xs font-mono text-floral-muted hidden sm:inline">
            Location: public/assets/Kashish_Singh_Resume.pdf
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            {/* Open in New Tab Button */}
            <a
              href={siteConfig.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-floral-white bg-midnight-800 hover:bg-midnight-700 border border-lavender/25 transition-all flex items-center gap-1.5"
            >
              <ExternalLink size={14} />
              <span>Open in New Tab ↗</span>
            </a>

            {/* Download Official PDF */}
            <a
              href={siteConfig.personal.resumeUrl}
              download="Kashish_Singh_Resume.pdf"
              className="px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-floral-white text-midnight-950 hover:bg-lavender-light transition-all flex items-center gap-2 shadow-sm"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
