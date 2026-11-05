import { memo } from 'react';
import { Layout, Database, Wrench } from 'lucide-react';

const Skills = memo(function Skills() {
  const cards = [
    {
      key: 'frontend',
      icon: <Layout className="text-lavender" size={28} />,
      title: 'Frontend Development',
      desc: 'Building responsive, modern, and accessible user interfaces with clean component architecture and performant styling.',
      topics: [
        { name: 'React (Hooks & Component State)', url: 'https://react.dev/' },
        { name: 'JavaScript (ES6+, DOM, Async/Await)', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { name: 'Tailwind CSS (Utility-First Design)', url: 'https://tailwindcss.com/' },
        { name: 'HTML5 Semantic Layouts', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { name: 'CSS3 Responsive Grid & Flexbox', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      ],
    },
    {
      key: 'backendData',
      icon: <Database className="text-gold" size={28} />,
      title: 'Backend & Relational SQL',
      desc: 'Structuring relational schemas, writing queries, and designing backend REST API endpoints.',
      topics: [
        { name: 'Python (OOP & Automation Scripting)', url: 'https://www.python.org/' },
        { name: 'MySQL & Relational SQL Queries', url: 'https://dev.mysql.com/doc/' },
        { name: 'FastAPI (REST Endpoints & Routing)', url: 'https://fastapi.tiangolo.com/' },
        { name: 'Java (Core Academic Programming)', url: 'https://dev.java/' },
        { name: 'Relational Database Schema (3NF)', url: 'https://www.w3schools.com/sql/' },
      ],
    },
    {
      key: 'toolsWorkflow',
      icon: <Wrench className="text-lavender" size={28} />,
      title: 'Data, Tools & Workflow',
      desc: 'Data analysis libraries, reporting dashboards, version control, and development environments.',
      topics: [
        { name: 'Pandas (Data Cleaning & Analysis)', url: 'https://pandas.pydata.org/' },
        { name: 'Power BI (Dashboard Visualizations)', url: 'https://powerbi.microsoft.com/' },
        { name: 'Git Version Control & Branching', url: 'https://git-scm.com/' },
        { name: 'GitHub Collaboration & Hosting', url: 'https://github.com/' },
        { name: 'VS Code & Python Environment', url: 'https://code.visualstudio.com/' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative z-10 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header Matching Reference Composition */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lavender/10 border border-lavender/25 text-lavender-light text-xs font-mono uppercase tracking-widest mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>Core Tech Stack</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-floral-white tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="text-floral-muted text-base sm:text-lg max-w-2xl mt-2 font-sans">
            Technologies I apply to build functional web applications, automated utilities, and analytical pipelines.
          </p>
        </div>

        {/* 3-Card Focus Grid Matching Reference .skills-focus-grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.key}
              className="glass-panel rounded-2xl p-7 sm:p-8 bg-midnight-850/80 border border-lavender/15 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shadow-floral-card group"
            >
              <div>
                {/* Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-midnight-900 border border-lavender/20 flex items-center justify-center mb-6 group-hover:border-gold/50 group-hover:scale-105 transition-all">
                  {card.icon}
                </div>

                {/* Card Title */}
                <h3 className="font-serif text-2xl font-bold text-floral-white mb-2.5 group-hover:text-gold transition-colors">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-floral-muted text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                  {card.desc}
                </p>

                {/* Topics List with External Documentation Arrows (.skill-topics-list) */}
                <ul className="space-y-3 font-mono text-xs sm:text-[13px] border-t border-lavender/10 pt-5">
                  {card.topics.map((t, tIdx) => (
                    <li key={tIdx} className="flex items-center">
                      <a
                        href={t.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-floral-muted hover:text-floral-white group/link transition-all"
                        title={`Open documentation for ${t.name}`}
                      >
                        <span className="text-gold text-xs">▸</span>
                        <span className="group-hover/link:translate-x-0.5 transition-transform">{t.name}</span>
                        <span className="text-[10px] text-lavender/60 group-hover/link:text-gold group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all">
                          ↗
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Honest Foundation Tag */}
              <div className="mt-8 pt-4 border-t border-lavender/10 flex items-center justify-between text-[11px] font-mono text-floral-dim">
                <span>0 progress bars</span>
                <span className="text-gold font-medium">Applied in Code ✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Skills;
