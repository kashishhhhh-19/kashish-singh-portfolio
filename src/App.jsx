import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import NavDrawer from './components/NavDrawer';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import FloralEnvironment from './components/FloralEnvironment';
import CursorGlow from './components/CursorGlow';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isAmbienceActive, setIsAmbienceActive] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  // Track active section via IntersectionObserver for navbar indicators
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          },
          { rootMargin: '-30% 0px -40% 0px' }
        );
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [isLoading]);

  return (
    <div className="relative min-h-screen bg-midnight-950 text-floral-white selection:bg-lavender/30 selection:text-floral-white">
      {/* 1. Intro Screen */}
      {isLoading && <Loader onFinish={() => setIsLoading(false)} />}

      {/* 2. Desktop Cursor Glow */}
      <CursorGlow />

      {/* 3. Midnight Floral Botanical Environment (Lilies, Lavender, Falling Petals, Butterflies) */}
      <FloralEnvironment isAmbienceActive={isAmbienceActive} />

      {/* 4. Top Fixed Header */}
      <Navbar
        activeSection={activeSection}
        onOpenResume={() => setIsResumeOpen(true)}
        onToggleDrawer={() => setIsDrawerOpen(true)}
        isAmbienceActive={isAmbienceActive}
        onToggleAmbience={() => setIsAmbienceActive((prev) => !prev)}
      />

      {/* 5. Mobile Navigation Slide-out Drawer */}
      <NavDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        activeSection={activeSection}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* 6. Main Portfolio Content in Reference Structure */}
      <main id="main-content" className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* 7. 4-Column Minimalist Botanical Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* 8. Interactive Resume Preview Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
