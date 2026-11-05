import { useState, useEffect } from 'react';

/**
 * Tracks the currently visible section using IntersectionObserver.
 * Cleans up observers on unmount.
 */
export function useActiveSection(sectionIds, defaultSection = 'home') {
  const [activeSection, setActiveSection] = useState(defaultSection);

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionIds || sectionIds.length === 0) return;

    const observerCallback = (entries) => {
      // Find the entry that has the highest intersection ratio
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        // Sort by intersection ratio or proximity to viewport center
        visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const topEntry = visibleEntries[0];
        if (topEntry.target.id) {
          setActiveSection(topEntry.target.id);
        }
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: [0, 0.2, 0.5, 0.8],
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeSection;
}
