import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, AlertCircle, CheckCircle2, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/site';
import { GoldSectionDivider } from '../animations/GoldSectionDivider';
import { ShimmerButton } from '../components/ShimmerButton';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function ResumeSection() {
  const [pdfStatus, setPdfStatus] = useState('checking'); // 'checking' | 'available' | 'missing'
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    let isMounted = true;

    // Check if the actual PDF file exists in public/assets/
    fetch(siteConfig.resumePath, { method: 'HEAD' })
      .then((res) => {
        if (!isMounted) return;
        if (res.ok && (res.status === 200 || res.status === 304)) {
          setPdfStatus('available');
        } else {
          setPdfStatus('missing');
        }
      })
      .catch(() => {
        if (isMounted) setPdfStatus('missing');
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section
      id="resume"
      aria-label="Resume Section"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#11111B] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 pointer-events-none rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(185,160,232,0.18) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#B9A0E8] font-semibold">
            Curriculum Vitae
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#F8F6FA] mt-2">
            MY RESUME
          </h2>
          <GoldSectionDivider />
          <p className="text-sm sm:text-base text-[#D8C8F3] font-light max-w-xl mx-auto">
            A closer look at my education, skills and projects.
          </p>
        </motion.div>

        {/* Action Controls Header */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-[#171521] border border-[#B9A0E8]/25 mb-8 shadow-lg"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-[#09090F] border border-[#B9A0E8]/20 text-[#D4AF37]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-semibold text-[#F8F6FA] block">
                Kashish_Singh_Resume.pdf
              </span>
              <span className="text-xs text-[#AAA5B5]">
                {pdfStatus === 'available'
                  ? 'Official PDF document verified & ready'
                  : pdfStatus === 'checking'
                  ? 'Verifying file...'
                  : 'File placeholder state active'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {pdfStatus === 'available' ? (
              <>
                <ShimmerButton
                  href={siteConfig.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="lavender"
                  size="sm"
                  icon={ExternalLink}
                  iconPosition="right"
                  ariaLabel="View Resume PDF in a new browser tab"
                >
                  View Resume
                </ShimmerButton>

                <ShimmerButton
                  href={siteConfig.resumePath}
                  download="Kashish_Singh_Resume.pdf"
                  variant="gold"
                  size="sm"
                  icon={Download}
                  iconPosition="left"
                  ariaLabel="Download Kashish Singh Resume PDF"
                >
                  Download Resume
                </ShimmerButton>
              </>
            ) : (
              <>
                <button
                  disabled
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#11111B] border border-[#B9A0E8]/20 text-[#AAA5B5]/60 cursor-not-allowed"
                >
                  View Resume (Unavailable)
                </button>
                <button
                  disabled
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#11111B] border border-[#D4AF37]/20 text-[#D4AF37]/50 cursor-not-allowed"
                >
                  Download Resume (Unavailable)
                </button>
              </>
            )}
          </div>
        </motion.div>

        {/* PDF Preview Frame or Missing Placeholder */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative rounded-2xl bg-[#171521] border border-[#B9A0E8]/30 overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.7)]"
        >
          {/* Top Inset Gold Accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent z-10" />

          {pdfStatus === 'available' ? (
            <div className="w-full h-[600px] md:h-[750px] bg-[#09090F] flex flex-col">
              {/* Document Window Header */}
              <div className="px-4 py-3 bg-[#11111B] border-b border-[#B9A0E8]/20 flex items-center justify-between text-xs text-[#AAA5B5]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B9A0E8]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7153A5]/80" />
                  <span className="ml-2 font-mono text-[11px] text-[#D8C8F3]">Kashish_Singh_Resume.pdf</span>
                </div>
                <span className="hidden sm:inline-block text-[#AAA5B5]">Document Preview</span>
              </div>

              {/* Embedded PDF iframe / object with fallback */}
              <object
                data={`${siteConfig.resumePath}#toolbar=0&navpanes=0`}
                type="application/pdf"
                className="w-full flex-1 border-0"
                aria-label="Kashish Singh Resume PDF Preview"
              >
                <div className="h-full flex flex-col items-center justify-center p-8 text-center text-[#AAA5B5] space-y-4">
                  <FileText className="w-12 h-12 text-[#D4AF37]" />
                  <p className="text-sm">
                    Your browser does not support embedded PDF preview directly.
                  </p>
                  <ShimmerButton
                    href={siteConfig.resumePath}
                    download="Kashish_Singh_Resume.pdf"
                    variant="gold"
                    size="md"
                    icon={Download}
                  >
                    Download Resume PDF
                  </ShimmerButton>
                </div>
              </object>
            </div>
          ) : (
            /* Clearly marked placeholder state if PDF is absent */
            <div className="p-10 sm:p-14 text-center flex flex-col items-center justify-center space-y-5 bg-gradient-to-b from-[#171521] to-[#11111B]">
              <div className="p-4 rounded-full bg-[#11111B] border border-[#D4AF37]/30 text-[#D4AF37] shadow-lg">
                <AlertCircle className="w-10 h-10" />
              </div>

              <div className="max-w-md space-y-2">
                <h3 className="font-serif text-2xl font-bold text-[#F8F6FA]">
                  Resume File Placeholder
                </h3>
                <p className="text-sm text-[#AAA5B5] leading-relaxed">
                  The resume document is configured to load from{' '}
                  <code className="text-[#D8C8F3] bg-[#09090F] px-2 py-0.5 rounded text-xs">
                    {siteConfig.resumePath}
                  </code>
                  . As soon as you add your official PDF to that directory, it will automatically render here with full download and viewer capabilities.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#09090F]/70 border border-[#B9A0E8]/20 text-xs text-[#D8C8F3] max-w-sm text-left">
                <span className="font-semibold text-[#D4AF37] block mb-1">To activate:</span>
                Place your official file named <span className="font-mono text-white">Kashish_Singh_Resume.pdf</span> inside the <span className="font-mono text-white">public/assets/</span> directory.
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
