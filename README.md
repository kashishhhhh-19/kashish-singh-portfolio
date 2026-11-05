# Kashish Singh | Midnight Floral Lavender Developer Portfolio

An elegant, high-performance developer portfolio built with React 19, Vite, and Tailwind CSS. Featuring the **MIDNIGHT FLORAL LAVENDER** aesthetic (deep midnight `#09070F`, soft lavender `#B69AE8`, and gold accents `#C6A45C`), animated botanical layers (drifting lavender, blooming white lilies, falling petals, and graceful butterflies), and honest facts highlighting software development, Python automation, and data analytics projects.

---

## 🌟 Key Highlights & Architecture

- **Visual Theme**: Midnight Floral Lavender — luxurious, dark botanical aesthetic designed for recruiter trust.
- **Structural Integrity**: Directly modeled on the modern clean section hierarchy of `https://anshtayade.netlify.app`.
- **Animated Botanical Environment**: Original inline SVG lilies, lavender sprigs, flutter butterflies on smooth curved trajectories, and falling petals with natural drift.
- **Desktop Cursor Glow**: Lavender-gold halo following cursor on desktop devices; automatically disabled on touch devices and for `prefers-reduced-motion`.
- **Verified Fact-Driven Content**: No fake metrics or placeholder companies; incorporates verified BCA coursework, real GitHub repositories, and direct resume downloads.
- **Single Source of Truth**: All profile data, contact details, and project links are centrally managed in `src/data/siteConfig.js`.

---

## 📁 Project Structure

```text
├── public/
│   ├── assets/
│   │   └── Kashish_Singh_Resume.pdf   # Official resume PDF
│   ├── _redirects                     # Netlify SPA redirect
│   ├── favicon.svg                    # Lavender blossom favicon
│   ├── og-image.svg                   # Social graph banner
│   ├── robots.txt                     # Crawler directives
│   └── sitemap.xml                    # Search engine sitemap
├── src/
│   ├── components/
│   │   ├── FloralEnvironment.jsx     # Botanical lilies, lavender, butterflies & petals
│   │   ├── CursorGlow.jsx            # Desktop-only interactive glow
│   │   ├── Navbar.jsx                # Header with active section tracking & ambience toggle
│   │   ├── NavDrawer.jsx             # Mobile slide-out drawer
│   │   ├── Hero.jsx                  # Letter-by-letter reveal, CTA actions & scroll indicator
│   │   ├── About.jsx                 # Background & core technical domains
│   │   ├── Skills.jsx                # 3-card focus layout (Frontend, Backend & Data, Tools)
│   │   ├── Projects.jsx              # Featured cards with original SVG artwork
│   │   ├── Education.jsx             # Verified BCA academic qualification
│   │   ├── ResumeModal.jsx           # Interactive resume preview & PDF download
│   │   ├── Contact.jsx               # Real transmission form with honeypot & validation
│   │   ├── Footer.jsx                # 4-column navigation & back-to-top action
│   │   ├── Loader.jsx                # Botanical intro loader
│   │   └── Icons.jsx                 # Custom SVG icons (GitHub, LinkedIn)
│   ├── data/
│   │   └── siteConfig.js             # Central configuration (Single source of truth)
│   ├── App.jsx                       # Root application shell
│   ├── index.css                     # Tailwind tokens, botanical scrollbars & reduced-motion
│   └── main.jsx                      # React entrypoint
├── netlify.toml                       # Netlify build & redirect configuration
├── tailwind.config.js                 # Theme color tokens & custom keyframes
└── vite.config.js                     # Vite build configuration
```

---

## 🚀 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kashishhhhh-19/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```

4. **Production Build & Preview**:
   ```bash
   npm run build
   npm run preview
   ```

---

## ⚙️ Configuration & Missing Information Protocol

All customizable variables are stored in `src/data/siteConfig.js`. 

To configure contact form submissions:
1. Create a free Formspree form at [https://formspree.io](https://formspree.io).
2. Create a `.env` file in the root:
   ```env
   VITE_FORMSPREE_ID=your_formspree_id_here
   ```
3. When `VITE_FORMSPREE_ID` is unset, the form safely falls back to a pre-filled direct `mailto:` transmission to `Kashishsingh422@gmail.com`.

---

## 🌐 Deployment Instructions

### Deploy to Netlify
1. Push your code to GitHub.
2. Sign in to [Netlify](https://app.netlify.com/) and click **"Add new site" -> "Import an existing project"**.
3. Select your GitHub repository.
4. Netlify will automatically detect configuration from `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy Site**.

### Deploy to Vercel
1. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
2. Import your GitHub repository.
3. Framework Preset will be automatically detected as **Vite**.
4. Click **Deploy**.

---

## 📄 License & Attribution
Designed & developed with original assets for **Kashish Singh**. Free for personal developer portfolio use.
