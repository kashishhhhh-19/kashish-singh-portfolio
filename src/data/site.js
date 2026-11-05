export const siteConfig = {
  title: "Kashish Singh | Software Developer Portfolio",
  siteName: "MIDNIGHT LAVENDER",
  siteTagline: "A Botanical Developer Portfolio",
  owner: "Kashish Singh",
  role: "Aspiring Software Developer",
  educationBadge: "BCA Graduate",
  heroSubtitle: "Building Technology With Creativity.",
  intro: "I'm a BCA graduate passionate about software development, intelligent applications and data-driven solutions. I enjoy transforming ideas into practical digital experiences through technology.",
  aboutText: [
    "I'm a BCA graduate interested in software development, technology and building practical applications. My experience working on independent projects has helped me explore frontend development, backend systems, databases, automation and data analytics.",
    "I enjoy learning new technologies and turning concepts into functional applications. I'm currently focused on improving my technical skills and exploring opportunities to grow as a software developer."
  ],
  resumePath: "/assets/Kashish_Singh_Resume.pdf",
  formspreeId: import.meta.env.VITE_FORMSPREE_ID || "",
  siteUrl: "https://kashish-singh-portfolio.netlify.app",
  navLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ],
  botanicalAssets: {
    heroLilies: [
      { id: "hero-lily-top-left", src: "/assets/images/lilies/lily-1.svg", alt: "", className: "top-[-40px] left-[-40px] md:top-[-60px] md:left-[-60px] w-64 h-64 md:w-96 md:h-96", initialRotate: -15 },
      { id: "hero-lily-top-right", src: "/assets/images/lilies/lily-2.svg", alt: "", className: "top-[-30px] right-[-50px] md:top-[-40px] md:right-[-60px] w-72 h-72 md:w-96 md:h-96", initialRotate: 20 },
      { id: "hero-lily-bottom-left", src: "/assets/images/lilies/lily-3.svg", alt: "", className: "bottom-[-30px] left-[-30px] md:bottom-[-40px] md:left-[-40px] w-52 h-52 md:w-72 md:h-72", initialRotate: 30 },
      { id: "hero-lily-bottom-right", src: "/assets/images/lilies/lily-1.svg", alt: "", className: "bottom-[-50px] right-[-50px] md:bottom-[-60px] md:right-[-60px] w-64 h-64 md:w-88 md:h-88", initialRotate: -35 },
    ],
    aboutLilies: [
      { id: "about-lily-corner", src: "/assets/images/lilies/lily-3.svg", alt: "", className: "bottom-[-20px] right-[-20px] w-48 h-48 md:w-60 md:h-60 opacity-60", initialRotate: 15 },
    ]
  }
};
