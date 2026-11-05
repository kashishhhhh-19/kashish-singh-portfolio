import { Code2, Cpu, BarChart3, GraduationCap } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function About() {
  const highlights = [
    {
      icon: <Code2 className="text-lavender" size={22} />,
      title: "Web Engineering",
      desc: "Creating responsive, modern frontend interfaces using React, JavaScript, and Tailwind CSS with clean component architecture.",
    },
    {
      icon: <Cpu className="text-gold" size={22} />,
      title: "Python Automation",
      desc: "Developing desktop intelligence utilities, voice commands, computer vision with OpenCV, and API integrations.",
    },
    {
      icon: <BarChart3 className="text-lavender" size={22} />,
      title: "Data Analytics & SQL",
      desc: "Structuring relational databases in MySQL and extracting actionable insights with Pandas and Power BI.",
    },
    {
      icon: <GraduationCap className="text-gold" size={22} />,
      title: "BCA Foundation",
      desc: "Strong academic foundation in computer applications, database systems, object-oriented programming, and software design.",
    },
  ];

  return (
    <section id="about" className="py-24 relative z-10 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lavender/10 border border-lavender/20 text-lavender-light text-xs font-mono uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>Profile & Background</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-floral-white">
            About Me
          </h2>
          <p className="text-floral-muted text-base sm:text-lg max-w-2xl mt-2 font-sans">
            Aspiring software developer with a practical mindset for problem solving and continuous learning.
          </p>
        </div>

        {/* Bio Glass Card */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 md:p-10 mb-10 border border-lavender/15 bg-midnight-850/80 shadow-floral-card">
          <p className="text-floral-white/95 text-base sm:text-lg leading-relaxed font-sans mb-4">
            Hi, I'm <strong className="text-shimmer-gold">Kashish Singh</strong>, a Bachelor of Computer Applications (BCA) student at{' '}
            <strong className="text-floral-white">{siteConfig.education[0].institution}</strong>.
          </p>
          <p className="text-floral-muted text-sm sm:text-base leading-relaxed font-sans mb-4">
            My primary technical interests center on software development, web engineering, Python programming, database management, and data analytics. I am driven by building real, practical technology projects that solve authentic problems — from career opportunity matching platforms and voice-gesture desktop assistants to end-to-end data pipelines analyzing labor market trends.
          </p>
          <p className="text-floral-muted text-sm sm:text-base leading-relaxed font-sans">
            I am continuously expanding my technical proficiencies across modern frontend frameworks, backend APIs, relational database optimization, and business intelligence reporting.
          </p>
        </div>

        {/* 4 Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-xl border border-lavender/10 hover:border-gold/40 bg-midnight-900/60 hover:bg-midnight-850/90 transition-all duration-300 group"
            >
              <div className="p-2.5 rounded-lg bg-midnight-800/80 w-fit mb-4 border border-lavender/10 group-hover:scale-105 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-floral-white mb-1.5 group-hover:text-gold transition-colors">
                {item.title}
              </h3>
              <p className="text-floral-muted text-xs leading-relaxed font-sans">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
