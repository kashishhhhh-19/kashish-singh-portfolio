/**
 * SITE CONFIGURATION - SINGLE SOURCE OF TRUTH
 * Kashish Singh | Developer Portfolio
 *
 * Missing values are handled gracefully with safe fallbacks and console warnings.
 */

export const siteConfig = {
  personal: {
    name: "Kashish Singh",
    role: "BCA Graduate & Aspiring Software Developer",
    tagline: "Building practical technology projects with Python, React & Data Analytics.",
    location: "Bhusawal, Jalgaon, Maharashtra, India",
    email: "Kashishsingh422@gmail.com",
    phone: "7058853395",
    linkedin: "https://www.linkedin.com/in/kashishsingh190806/",
    github: "https://github.com/kashishhhhh-19",
    resumeUrl: "/assets/Kashish_Singh_Resume.pdf",
    about: "I am a BCA graduate and aspiring software developer with a strong focus on software engineering, web development, Python automation, and data analytics. I enjoy building practical, functional software solutions ranging from career platforms to voice and gesture intelligence systems.",
  },

  education: [
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Bhusawal Arts and Science P.O. Nahata Commerce College, Bhusawal, Jalgaon",
      status: "3rd-year pursuing",
      highlights: [
        "Core coursework in Data Structures, Object-Oriented Programming, and Database Management.",
        "Hands-on academic projects in web development and data analytics.",
        "Active member of student technical forums and collaborative workshops."
      ]
    }
  ],

  projects: [
    {
      id: "career-sphere",
      name: "CAREER SPHERE",
      tagline: "Career Discovery & Eligibility Matching Platform",
      badge: "Full-Stack Web Application",
      description: "A comprehensive career discovery platform built to help students and job seekers find corporate jobs, government opportunities, internships, and dynamic eligibility matching with streamlined filtering.",
      tech: ["React", "FastAPI", "Python", "JavaScript", "Tailwind CSS", "REST API"],
      githubUrl: "https://github.com/kashishhhhh-19/CAREER_SPHERE",
      liveUrl: "https://careersphere-uprr.onrender.com",
      accentColor: "#B69AE8",
      features: [
        "Corporate job and government opportunity aggregation",
        "Internship listing with customized criteria filtering",
        "Dynamic eligibility and qualification matcher",
        "Modern, accessible responsive interface"
      ]
    },
    {
      id: "syrax",
      name: "SYRAX",
      tagline: "Speak. Gesture. Control.",
      badge: "Voice & Gesture Intelligence System",
      description: "A smart desktop intelligence system combining voice recognition and real-time computer vision hand-gesture tracking to control system actions, automate tasks, and interact touch-free.",
      tech: ["Python", "OpenCV", "SpeechRecognition", "Pyttsx3", "MediaPipe"],
      githubUrl: "https://github.com/kashishhhhh-19/SYRAX-Voice-Gesture-Intelligence-System",
      liveUrl: null, // Desktop application - no fake live demo
      accentColor: "#9270C5",
      features: [
        "Real-time hand gesture tracking via OpenCV for system navigation",
        "Voice command parsing and natural speech synthesis feedback",
        "Automated desktop workflows and quick application launching",
        "Touchless user interaction design"
      ]
    },
    {
      id: "job-market-analytics",
      name: "JOB MARKET ANALYTICS",
      tagline: "Data-Driven Job Market Intelligence",
      badge: "Data Analytics & FastAPI",
      description: "A data analytics pipeline analyzing job trends, required skill frequencies, salary distributions, and market demands using Python, Pandas, MySQL, FastAPI, and Power BI dashboards.",
      tech: ["Python", "FastAPI", "MySQL", "Pandas", "Power BI", "SQL"],
      githubUrl: "https://github.com/kashishhhhh-19/job-market-analytics",
      liveUrl: null, // Data project - no fabricated live demo URL
      accentColor: "#C6A45C",
      features: [
        "Relational SQL schema for structured job listing aggregation",
        "Pandas data cleaning, transformation, and statistical calculations",
        "FastAPI backend endpoints serving analytical queries",
        "Interactive Power BI dashboard visualizations for market insights"
      ]
    }
  ],

  // Technical skills categorized cleanly matching Section 8
  skills: {
    frontend: {
      title: "Frontend",
      icon: "palette",
      description: "Building responsive, modern, and accessible user interfaces with clean architecture and performant animations.",
      items: [
        { name: "HTML5", doc: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "CSS3", doc: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "JavaScript", doc: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "React", doc: "https://react.dev/" },
        { name: "Tailwind CSS", doc: "https://tailwindcss.com/" }
      ]
    },
    backendData: {
      title: "Backend & Database",
      icon: "database",
      description: "Developing robust APIs, structuring relational schemas, and managing databases.",
      items: [
        { name: "Python", doc: "https://www.python.org/" },
        { name: "Java", doc: "https://dev.java/" },
        { name: "FastAPI", doc: "https://fastapi.tiangolo.com/" },
        { name: "SQL", doc: "https://www.w3schools.com/sql/" },
        { name: "MySQL", doc: "https://dev.mysql.com/doc/" }
      ]
    },
    toolsWorkflow: {
      title: "Data & Tools",
      icon: "terminal",
      description: "Data analysis libraries, reporting dashboards, version control, and development environments.",
      items: [
        { name: "Pandas", doc: "https://pandas.pydata.org/" },
        { name: "Power BI", doc: "https://powerbi.microsoft.com/" },
        { name: "Git", doc: "https://git-scm.com/" },
        { name: "GitHub", doc: "https://github.com/" },
        { name: "VS Code", doc: "https://code.visualstudio.com/" }
      ]
    }
  },

  formspreeId: import.meta.env.VITE_FORMSPREE_ID || "",
  siteUrl: "https://kashishsingh-portfolio.netlify.app"
};

// Check for missing values in development
if (typeof window !== "undefined") {
  const missing = [];
  if (!siteConfig.personal.linkedin) missing.push("LinkedIn profile URL");
  if (!siteConfig.formspreeId) missing.push("Formspree Form ID (VITE_FORMSPREE_ID)");

  if (missing.length > 0) {
    console.info(
      "%c[Portfolio Notice] Missing configuration keys safely fallback-handled:%c\n" +
      missing.map(m => ` - ${m}`).join("\n") +
      "\nProvide these in src/data/siteConfig.js or .env when available.",
      "color: #B69AE8; font-weight: bold;",
      "color: #B5AABD;"
    );
  }
}
