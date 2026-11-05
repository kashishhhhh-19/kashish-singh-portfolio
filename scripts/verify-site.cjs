const fs = require('fs');
const path = require('path');

console.log('--- RUNNING AUTOMATED VERIFICATION SUITE ---');

let passed = 0;
let failed = 0;

function assert(condition, testName) {
  if (condition) {
    console.log(`[PASS] ${testName}`);
    passed++;
  } else {
    console.error(`[FAIL] ${testName}`);
    failed++;
  }
}

// 1. Check dist build files
const distPath = path.join(__dirname, '../dist');
assert(fs.existsSync(distPath), 'dist/ directory exists');
assert(fs.existsSync(path.join(distPath, 'index.html')), 'dist/index.html exists');
assert(fs.existsSync(path.join(distPath, 'favicon.svg')), 'dist/favicon.svg exists');
assert(fs.existsSync(path.join(distPath, 'robots.txt')), 'dist/robots.txt exists');
assert(fs.existsSync(path.join(distPath, 'sitemap.xml')), 'dist/sitemap.xml exists');

// 2. Check resume file
const resumePath = path.join(distPath, 'assets/Kashish_Singh_Resume.pdf');
assert(fs.existsSync(resumePath), 'Kashish_Singh_Resume.pdf exists in dist/assets/');
if (fs.existsSync(resumePath)) {
  const stat = fs.statSync(resumePath);
  assert(stat.size > 10000, `Resume file has valid content size: ${stat.size} bytes`);
}

// 3. Check lily SVG assets
const liliesDir = path.join(distPath, 'assets/images/lilies');
assert(fs.existsSync(path.join(liliesDir, 'lily-1.svg')), 'lily-1.svg exists');
assert(fs.existsSync(path.join(liliesDir, 'lily-2.svg')), 'lily-2.svg exists');
assert(fs.existsSync(path.join(liliesDir, 'lily-3.svg')), 'lily-3.svg exists');

// 4. Check configuration files
const siteJs = fs.readFileSync(path.join(__dirname, '../src/data/site.js'), 'utf8');
assert(siteJs.includes('MIDNIGHT LAVENDER'), 'site.js contains site name MIDNIGHT LAVENDER');
assert(siteJs.includes('Kashish Singh'), 'site.js contains owner Kashish Singh');
assert(siteJs.includes('Building Technology With Creativity'), 'site.js contains hero subtitle');

const projectsJs = fs.readFileSync(path.join(__dirname, '../src/data/projects.js'), 'utf8');
assert(projectsJs.includes('CAREER SPHERE'), 'projects.js contains CAREER SPHERE');
assert(projectsJs.includes('SYRAX'), 'projects.js contains SYRAX');
assert(projectsJs.includes('JOB MARKET ANALYTICS'), 'projects.js contains JOB MARKET ANALYTICS');
assert(projectsJs.includes('https://careersphere-uprr.onrender.com'), 'projects.js contains live demo for Career Sphere');
assert(projectsJs.includes('https://github.com/kashishhhhh-19/CAREER_SPHERE'), 'projects.js contains GitHub link for Career Sphere');
assert(projectsJs.includes('https://github.com/kashishhhhh-19/SYRAX'), 'projects.js contains GitHub link for SYRAX');
assert(projectsJs.includes('https://github.com/kashishhhhh-19/job-market-analytics'), 'projects.js contains GitHub link for Job Market Analytics');

const skillsJs = fs.readFileSync(path.join(__dirname, '../src/data/skills.js'), 'utf8');
assert(skillsJs.includes('Python') && skillsJs.includes('Java'), 'skills.js contains Python and Java');
assert(skillsJs.includes('FastAPI') && skillsJs.includes('REST APIs'), 'skills.js contains FastAPI and REST APIs');
assert(skillsJs.includes('Pandas') && skillsJs.includes('Power BI'), 'skills.js contains Pandas and Power BI');
assert(!skillsJs.includes('%') && !skillsJs.includes('proficiency'), 'skills.js contains NO skill percentages or proficiency bars');

const educationJs = fs.readFileSync(path.join(__dirname, '../src/data/education.js'), 'utf8');
assert(educationJs.includes('Bachelor of Computer Applications (BCA)'), 'education.js contains BCA degree');
assert(educationJs.includes('[Add College / University Name]'), 'education.js contains placeholder for college name');

const motionJs = fs.readFileSync(path.join(__dirname, '../src/data/motion.js'), 'utf8');
assert(motionJs.includes('desktop:') && motionJs.includes('mobile:'), 'motion.js has separate desktop and mobile particle/motion configs');
assert(motionJs.includes('maxDurationMs: 1200'), 'motion.js caps loader at <= 1.2s');

// 5. Check index.html semantic markup
const indexHtml = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
assert(indexHtml.includes('Kashish Singh | Software Developer Portfolio'), 'index.html contains exact page title');
assert(indexHtml.includes('href="#main-content"'), 'index.html contains skip-to-content accessibility link');
assert(indexHtml.includes('favicon.svg'), 'index.html contains favicon link');

// 6. Check netlify.toml and .env.example
assert(fs.existsSync(path.join(__dirname, '../netlify.toml')), 'netlify.toml exists');
assert(fs.existsSync(path.join(__dirname, '../.env.example')), '.env.example exists');

console.log(`\nVerification complete: ${passed} passed, ${failed} failed.`);
process.exit(failed > 0 ? 1 : 0);
