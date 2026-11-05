import { GraduationCap, BookOpen, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Education() {
  const edu = siteConfig.education[0];

  return (
    <section id="education" className="py-24 relative z-10 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lavender/10 border border-lavender/20 text-lavender-light text-xs font-mono uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>Academic Background</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-floral-white">
            Education
          </h2>
          <p className="text-floral-muted text-base sm:text-lg max-w-2xl mt-2 font-sans">
            Verified formal technical qualifications in computer applications.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 md:p-10 border border-lavender/15 bg-midnight-850/80 max-w-3xl shadow-floral-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-lavender/10">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-xl bg-midnight-800 border border-lavender/15 text-gold shrink-0">
                <GraduationCap size={28} />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-floral-white">
                  {edu.degree}
                </h3>
                <p className="text-lavender font-medium text-sm sm:text-base mt-0.5">
                  {edu.institution}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <h4 className="text-xs uppercase font-mono tracking-wider text-floral-muted mb-3 flex items-center gap-2">
              <BookOpen size={14} className="text-gold" />
              <span>Core Academic Studies</span>
            </h4>
            <ul className="space-y-3 font-sans">
              {edu.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-floral-white/85">
                  <CheckCircle2 size={16} className="text-lavender shrink-0 mt-1" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
