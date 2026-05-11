# Hamad Moiz Chodhry — Cybersecurity Portfolio

## Complete Project Documentation

> **Live Site:** https://2004shark.github.io/hamad-portfolio/
>
> **Repository:** https://github.com/2004shark/hamad-portfolio
>
> **Owner:** Hamad Moiz Chodhry — Cybersecurity Professional (Red Team / Blue Team / AI Security Engineer)

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Directory Structure](#3-directory-structure)
4. [Component Architecture](#4-component-architecture)
5. [Data Layer](#5-data-layer)
6. [Design System](#6-design-system)
7. [Background Effects](#7-background-effects)
8. [Research Publications System](#8-research-publications-system)
9. [Build & Deployment](#9-build--deployment)
10. [Git Workflow](#10-git-workflow)
11. [AI Agent System (ECC)](#11-ai-agent-system-ecc)
12. [Skills Catalog](#12-skills-catalog)
13. [Session Change Log](#13-session-change-log)
14. [Troubleshooting](#14-troubleshooting)

---

## 1. Project Overview

A single-page React portfolio for a cybersecurity professional showcasing:

| Section | Component | Purpose |
|---------|-----------|---------|
| Navigation | `Navbar.tsx` | Fixed top nav with scroll-aware active highlighting, mobile hamburger menu |
| Hero | `Hero.tsx` | Full-screen intro with typewriter role cycling, floating badge orbit, animated grid background |
| About | `About.tsx` | Bio section with Red/Blue team badges, terminal-style info card, key metrics (GPA, University, etc.) |
| Skills | `Skills.tsx` | Toggle between Blue Team / Red Team skill matrices with categorized tool lists |
| Blue Team | `BlueTeam.tsx` | SOC analyst dashboard with stat cards (2,500+ alerts, 95% detection coverage, 120+ MITRE techniques) |
| Experience | `Experience.tsx` | Timeline layout with alternating left/right cards, company logos, role descriptions |
| Projects | `Projects.tsx` | Filterable project grid (All / Blue / Red) with expandable highlight lists |
| Research | `Research.tsx` | Featured publication card + PDF preview modal + ongoing research topic cards |
| Certifications | `Certifications.tsx` | 9 certification badges with issuer logos and status indicators |
| Contact | `Contact.tsx` | CTA section with contact button, social links, location info |
| Footer | `Footer.tsx` | Quick links, branding, social icon links |

---

## 2. Tech Stack

### Core Framework
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.6 | UI framework |
| TypeScript | ^5.7 | Type safety |
| Vite | 8.0.12 | Build tool & dev server |
| Tailwind CSS | 4.3.0 | Utility-first CSS |
| Framer Motion | 12.38.0 | Animations & transitions |
| Node.js | ^20 | Runtime |

### Dependencies (package.json)

```json
{
  "dependencies": {
    "@tailwindcss/vite": "^4.3.0",
    "clsx": "^2.1.1",
    "framer-motion": "^12.38.0",
    "lucide-react": "^1.14.0",
    "react": "^19.2.6",
    "react-dom": "^19.2.6",
    "react-icons": "^5.6.0",
    "tailwindcss": "^4.3.0"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "eslint": "^10.3.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "gh-pages": "^6.3.0",
    "globals": "^17.6.0",
    "vite": "^8.0.12"
  }
}
```

### Build Configuration

**`vite.config.js`**
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/hamad-portfolio/',
})
```

**Key Vite Settings:**
- `base: '/hamad-portfolio/'` — required for GitHub Pages subpath deployment
- Plugins: React Fast Refresh + Tailwind CSS v4 integration

**`tsconfig.json`** — Target: ES2020, JSX: react-jsx, Strict mode enabled, Module: ESNext

---

## 3. Directory Structure

```
hamad-portfolio/
├── .git/                          # Git repository data
├── .github/
│   └── workflows/
│       └── deploy.yml             # GitHub Actions deploy workflow
├── dist/                          # Production build output (gitignored)
├── node_modules/                  # Dependencies (gitignored)
├── public/                        # Static assets (served at /hamad-portfolio/*)
│   ├── research/
│   │   └── ai-soc-paper.pdf       # 449 KB — published research paper
│   ├── favicon.svg                # Browser tab icon
│   └── icons.svg                  # SVG sprite sheet
├── src/
│   ├── assets/                    # Empty (all assets in public/)
│   ├── components/                # 15 React components
│   │   ├── About.tsx              # Bio & stats section
│   │   ├── BlueTeam.tsx           # SOC dashboard stats
│   │   ├── BlurFade.tsx           # Scroll-reveal animation wrapper
│   │   ├── Certifications.tsx     # Certification badges
│   │   ├── Contact.tsx            # Contact CTA section
│   │   ├── CyberWeb.tsx           # Canvas interactive network graph
│   │   ├── Experience.tsx         # Work timeline
│   │   ├── Footer.tsx             # Site footer
│   │   ├── Hero.tsx               # Main hero section
│   │   ├── icons.tsx              # Custom SVG icons (20+)
│   │   ├── Navbar.tsx             # Navigation bar
│   │   ├── Projects.tsx           # Project showcase
│   │   ├── Research.tsx           # Research publications
│   │   ├── Skills.tsx             # Skills matrix
│   │   └── ThreatParticles.tsx    # Floating threat labels
│   ├── data/
│   │   └── resumeData.ts          # ALL content data (322 lines)
│   ├── lib/
│   │   └── utils.ts               # Utility functions
│   ├── App.tsx                    # Root component — composes all sections
│   ├── index.css                  # Global styles + Tailwind + theme
│   └── main.tsx                   # Entry point — ReactDOM.createRoot
├── .gitignore
├── CHANGES.md                     # Session change documentation
├── DOCUMENTATION.md               # THIS FILE
├── eslint.config.js               # ESLint flat config
├── index.html                     # HTML entry (21 lines)
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
├── vercel.json                    # Vercel deployment config
└── vite.config.js                 # Vite build config
```

### File Count & Size

| Category | Files | Total Lines |
|----------|-------|-------------|
| Components | 15 | ~2,100 |
| Data | 1 | 322 |
| Config | 6 | ~100 |
| Static assets | 3 | — |
| **Total** | **~25 source files** | **~2,500 lines** |

---

## 4. Component Architecture

### 4.1 BlurFade (`BlurFade.tsx` — 42 lines)

Reusable scroll-triggered animation wrapper.

**Props:**
- `children: React.ReactNode` — content to animate
- `className?: string` — optional styling
- `delay?: number` — animation delay in seconds (default: 0)
- `direction?: 'up' | 'down' | 'left' | 'right'` — entrance direction (default: 'up')

**Behavior:**
- Uses Framer Motion `whileInView` with `viewport={{ once: true, margin: '-50px' }}`
- Starts hidden with `opacity: 0, filter: blur(8px)` and offset in direction
- Animates to `opacity: 1, filter: blur(0px), x: 0, y: 0` over 0.6s with custom ease curve
- Used by: Research, Experience, Projects, Certifications, Contact sections

### 4.2 Navbar (`Navbar.tsx` — 94 lines)

Fixed top navigation with backdrop blur.

**Features:**
- Fixed positioning at top of viewport
- Backdrop blur effect on scroll
- Mobile hamburger menu toggle
- Active section highlighting based on scroll position
- Smooth scroll to sections on click
- Glassmorphism design (semi-transparent background)

**Navigation items:** Home, About, Skills, Blue Team, Experience, Projects, Research, Certifications, Contact

### 4.3 Hero (`Hero.tsx` — 209 lines)

Full-screen introduction section.

**Features:**
- Typewriter effect cycling through roles (Red Team Analyst, Penetration Tester, etc.)
- Orbiting floating badges around the main heading
- Animated grid background pattern
- Social links (GitHub, LinkedIn, Email)
- "Scroll down" indicator with bouncing arrow
- Gradient accent decorations

### 4.4 About (`About.tsx` — 95 lines)

Biographical information section.

**Features:**
- Professional summary with Red/Blue team role toggle
- Terminal-styled info card (styled like a terminal window)
- Stats display (GPA, University, Location, Availability)
- Decorative gradient accents

### 4.5 Skills (`Skills.tsx` — 112 lines)

Technical skills matrix.

**Features:**
- Tab toggle: Blue Team / Red Team
- Categorized skill groups with icons
- Each category shows a description
- Visual tag-style skill items
- Animated tab transitions

### 4.6 BlueTeam (`BlueTeam.tsx` — 104 lines)

SOC analyst dashboard.

**Features:**
- Stat cards: 2,500+ Alerts Analyzed, 95% Detection Coverage, 120+ MITRE Techniques, 15+ Log Sources
- Each stat has an icon and animated counter
- Gradient stat backgrounds with hover glow effects

### 4.7 Experience (`Experience.tsx` — 88 lines)

Professional experience timeline.

**Features:**
- Alternating left/right timeline layout
- Company logos with icons
- Role title, company name, date range per entry
- Glassmorphism card styling

### 4.8 Projects (`Projects.tsx` — 129 lines)

Project showcase with filtering.

**Features:**
- Filter tabs: All / Blue Team / Red Team
- Expandable project cards with highlight lists
- Tech stack tags
- Gradient hover effects

### 4.9 Research (`Research.tsx` — 367 lines)

Research publications section. (See [Section 8](#8-research-publications-system) for full detail.)

**Contains:**
- `PdfPreviewModal` — Full-screen PDF viewer modal
- `PaperThumbnail` — Visual paper representation (gradient bars)
- `FeaturedPublication` — Main publication card
- `Research` — Main section with topics grid

### 4.10 Certifications (`Certifications.tsx` — 43 lines)

Professional certification badges.

**Features:**
- 9 certifications displayed
- Color-coded by issuer
- Status badges (Completed, In Progress)
- Certificate icons per issuer (ISC2, Fortinet, EC-Council, etc.)

### 4.11 Contact (`Contact.tsx` — 93 lines)

Contact call-to-action section.

**Features:**
- Large "Say Hello" CTA button
- Social link icons (GitHub, LinkedIn, Email, Phone)
- Location display
- Availability status badge

### 4.12 Footer (`Footer.tsx` — 78 lines)

Site footer.

**Features:**
- Four-column quick links layout
- Brand logo + tagline
- Social icon links
- Copyright notice

### 4.13 icons (`icons.tsx` — 211 lines)

Custom SVG icon library.

**Contains 21 icons:**
- `SiWazuh`, `SiQradar`, `SiElastic`, `SiSplunk`, `SiFortinet`
- `FaPython`, `FaLinux`, `FaWindows`, `FaDocker`, `FaAws`
- `SiKubernetes`, `SiAzureDevops`, `SiGrafana`, `SiPrometheus`
- `SiTensorflow`, `SiPytorch`, `IoShieldCheckmark`, `FaGitAlt`, `FaGithub`
- `FaLinkedin`, `FaEnvelope`, `FaPhone`
- `getSkillIcon()` — maps skill names to icon components

---

## 5. Data Layer

All content lives in a single file: `src/data/resumeData.ts` (322 lines).

### Exports

| Export | Type | Purpose |
|--------|------|---------|
| `personalInfo` | object | Name, email, phone, social links, location, GPA, university, degree, summary |
| `roles` | string[] | Role titles for Hero typewriter |
| `socialLinks` | object[] | Social media links with icons |
| `blueTeam` | object | Blue team skills (6 categories with items + descriptions) |
| `redTeam` | object | Red team skills (8 categories with items + descriptions) |
| `experience` | object[] | Work experience entries (company, role, dates, highlights) |
| `projects` | object[] | Project entries (title, description, highlights, tech stack, team color) |
| `publications` | object[] | Research publications (title, authors, journal, URL, PDF URL, abstract, tags) |
| `researchTopics` | object[] | Ongoing research areas (title, description, tags) |
| `certifications` | object[] | Certification entries (name, issuer, color, optional status) |
| `blueTeamStats` | object[] | SOC dashboard statistics (label, value, icon) |

### Data Example: Publications

```typescript
export const publications = [
  {
    title: "Towards Intelligent And Autonomous SOCs...",
    authors: "Hamad Moiz Chodhry",
    journal: "Theses Journal — Computer Science & Engineering",
    year: "2025",
    doi: "",
    url: "https://thesesjournal.com/index.php/1/article/view/2719",
    pdfUrl: "/hamad-portfolio/research/ai-soc-paper.pdf",
    abstract: "This research presents a novel architecture...",
    tags: ["AI Security", "LLM", "MCP", "SOC Automation", "Multi-Agent Systems", "Threat Detection"],
    category: "AI Security / SOC Automation",
    citations: 0,
  },
]
```

---

## 6. Design System

### 6.1 Color Palette

Defined in `src/index.css` using Tailwind v4 `@theme` directive:

```css
@theme {
  --color-bg-primary: #050816;
  --color-bg-surface: #0A0E27;
  --color-accent-purple: #8B5CF6;
  --color-accent-cyan: #06B6D4;
  --color-accent-pink: #EC4899;
  --color-accent-red: #EF4444;
  --color-text-primary: #F8FAFC;
  --color-text-secondary: #94A3B8;
  --color-border-subtle: rgba(148, 163, 184, 0.15);
  --font-family-display: 'Orbitron', sans-serif;
  --font-family-body: 'Inter', sans-serif;
  --font-family-mono: 'JetBrains Mono', monospace;
}
```

### 6.2 Typography

| Role | Font | Weight Range | Used For |
|------|------|-------------|----------|
| Display | Orbitron | 400-900 | Section headings, hero title, major labels |
| Body | Inter | 300-800 | Paragraphs, descriptions, card text |
| Mono | JetBrains Mono | 300-700 | Code, tags, stats, metadata, badges |

### 6.3 CSS Patterns

**Glassmorphism Cards:**
```css
.bg-bg-surface/30 backdrop-blur-sm border border-accent-purple/20 rounded-xl
```

**Gradient Accents:**
```css
.bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-pink
```

**Glow Effects:**
```css
.shadow-[0_0_60px_rgba(139,92,246,0.25)]
```

**Hover Glows (Framer Motion radial gradient on hover):**
```css
radial-gradient(600px circle at 50% 0%, rgba(139,92,246,0.12), transparent 50%)
```

### 6.4 Reusable CSS Classes

Used across components for design consistency:

- `.rounded-xl`, `.rounded-lg` — card corner radii
- `.bg-bg-surface/30 backdrop-blur-sm` — glassmorphism background
- `.border border-accent-purple/20` — subtle borders
- `.font-mono text-xs text-accent-purple/70` — tag styling
- `.font-display text-3xl md:text-4xl font-bold text-text-primary` — section titles
- `.font-body text-base text-text-secondary/80` — body text
- `.bg-gradient-to-br from-accent-purple/10 to-transparent` — hover gradients

---

## 7. Background Effects

### 7.1 CyberWeb (`CyberWeb.tsx` — 176 lines)

Interactive network graph rendered on HTML5 Canvas.

**Technical Details:**
- **32 nodes** positioned randomly across viewport
- **Connections:** Nodes within 220px are linked with gradient lines (purple → cyan → pink)
- **Line opacity:** `(1 - distance / 220) * 0.25` — fades with distance
- **Pulsing glow:** Each node has a radial gradient glow animated via `Math.sin(Date.now() * 0.002 + seed)`
- **Core dots:** Two layers — outer purple circle + inner cyan circle (50% radius)
- **Physics:** Nodes drift with small velocity, bounce off edges, velocity decays at 0.98
- **Mouse interaction:** 
  - Nodes within 180px of cursor are repelled (force inversely proportional to distance)
  - Subtle connection lines drawn from cursor to nearby nodes (within 330px)
  - Cursor connection opacity: `(1 - dist / 330) * 0.06`
  - Mouse effect disabled when cursor is outside window
- **Layer:** `z-index: -2` (behind everything)
- **Performance:** Uses `requestAnimationFrame` loop, canvas clears each frame

### 7.2 ThreatParticles (`ThreatParticles.tsx` — 131 lines)

40 drifting cybersecurity threat labels.

**40 Threats Displayed:**
```
RANSOMWARE, PHISHING, DDoS, SQL INJECTION, XSS, ZERO-DAY, MITM,
BRUTE FORCE, SOCIAL ENGINEERING, MALWARE, SPYWARE, KEYLOGGER,
ROOTKIT, TROJAN, WORM, BOTNET, APT, DNS SPOOFING, ARP POISONING,
SESSION HIJACK, CSRF, SSRF, RCE, LFI, BUFFER OVERFLOW,
PRIVILEGE ESCALATION, PASS-THE-HASH, KERBEROASTING, DCSYNC,
GOLDEN TICKET, FILELESS MALWARE, LOLBINS, DLL HIJACKING,
LLMNR POISONING, SMB RELAY, NTLM RELAY, CREDENTIAL DUMPING,
RACE CONDITION, DCSHADOW, SILVER TICKET
```

**Technical Details:**
- Each particle is a DOM element with CSS `@keyframes` animation
- **5 distinct float patterns** (smooth drift, reverse path, scale pulse, rotateX, skew)
- Size: 9–16px font size
- Duration: 30–70s per loop
- Delay: randomized negative delay for offset phasing
- Colors: pink (#ec4899), purple (#8b5cf6), cyan (#06b6d4), pink alt (#f472b6) — cycled
- Glow: 14px text-shadow with matching color at 0.25 opacity
- Opacity fades in/out (0 → 0.08–0.20 → 0) during animation
- **Layer:** `z-index: -1` (behind content, in front of CyberWeb)
- Rendering: Pure DOM + CSS (no canvas), `pointer-events: none`

### 7.3 Layer Stack

```
z = auto  → Main content (all sections, Navbar)
z = -1    → ThreatParticles (floating threat names)
z = -2    → CyberWeb (interactive network graph)
```

---

## 8. Research Publications System

### 8.1 Component Structure

The Research section (`Research.tsx`, 367 lines) contains 4 sub-components:

#### PaperThumbnail (lines 24-49)
Visual representation of a research paper using gradient bars on a 3:4 aspect card.
- Gradient top bar (purple → cyan → pink)
- 10 horizontal bars at varying widths (55-95%) to simulate text lines
- Bottom gradient overlay with AI SOC Research label
- Border with purple/30 opacity

#### PdfPreviewModal (lines 51-154)
Full-screen modal for viewing PDF papers.

**Features:**
- Fixed positioning with z-50
- Dark overlay (bg-black/70) with backdrop blur
- Glassmorphism card (bg-bg-primary/95, border-purple/20, shadow glow)
- Framer Motion entrance animation: opacity + scale + y offset
- Header bar with:
  - Paper title (truncated) + journal/year metadata
  - Open in new tab button (external link icon)
  - Download button (download icon)
  - Close button (X icon)
- PDF rendered in an `<iframe>` with 100% width/height
- Loading spinner with 2-second auto-dismiss timeout
- Escape key to close
- Scroll lock while modal is open
- **Layer:** Rendered OUTSIDE the overflow-hidden section container

**Critical Implementation Notes:**
- The iframe `onLoad` event was unreliable for PDFs (browser PDF plugins don't fire standard load events)
- Solution: A 2-second `setTimeout` fallback hides the spinner regardless of load state
- Modal must be rendered outside any `overflow-hidden` parent to prevent CSS clipping

#### FeaturedPublication (lines 156-269)
Main publication card with a 5-column grid layout.

**Desktop layout (lg:grid-cols-5):**
- Left 2 columns: PaperThumbnail visual with "Published" badge and volume/year label
- Right 3 columns: Category badges, title, authors, abstract (with quote accent and left border), tag chips, action buttons

**Action buttons:**
1. "Preview PDF" — opens the PdfPreviewModal (Framer Motion hover/tap animation)
2. "View Publication" — external link to thesesjournal.com article page
3. "Download PDF" — downloads the local PDF file

**Hover effects:**
- Radial gradient glow behind card
- Top/bottom border gradient lines
- Paper thumbnail scales up 1.03x with slight Y rotation
- Title transitions to purple

#### Research Section (lines 271-367)
Main exported component that composes everything.

**Structure:**
- Section heading "05. Research Publications" with gradient line
- Subtitle describing published research and ongoing work
- FeaturedPublication card
- "Research Areas" subheading
- 5 research topic cards in a responsive grid (1→2→3 columns)

### 8.2 PDF Management

**Source:** Downloaded from thesesjournal.com (direct download URL)
**File:** `public/research/ai-soc-paper.pdf` (449 KB, valid `%PDF-` header)
**URL in app:** `/hamad-portfolio/research/ai-soc-paper.pdf`
**Vite base path note:** The PDF URL must include the Vite `base` prefix (`/hamad-portfolio/`) because Vite serves `public/` files under the configured base path

**The paper:**
- Title: "Towards Intelligent And Autonomous SOCs: Enabling LLM-Driven, MCP-Integrated, Multi-Agent Security Operations"
- Author: Hamad Moiz Chodhry
- Journal: Theses Journal — Computer Science & Engineering, Vol. 1 No. 1 (2025)
- URL: https://thesesjournal.com/index.php/1/article/view/2719
- Key results: 90% MTTR reduction, 100% alert coverage

### 8.3 Research Topics

5 ongoing research areas displayed as cards with icons:

| Topic | Icon | Tags |
|-------|------|------|
| AI Security & Prompt Injection | Bot | AI Security, LLM, Prompt Injection |
| Android Forensics using MCP | Search | Mobile Forensics, MCP, Android |
| Zero Trust Architecture | Shield | Zero Trust, Network Security, Architecture |
| Detection Engineering | FileSearch | Sigma, Detection, SOC |
| Threat Intelligence Automation | Globe | Threat Intel, MISP, Automation |

---

## 9. Build & Deployment

### 9.1 Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:5173/hamad-portfolio/

# Build for production
npm run build
# → dist/

# Preview production build locally
npm run preview
```

### 9.2 Production Build

```bash
npm run build
```

**Build output:**
```
dist/
├── index.html                   1.4 KB
├── assets/
│   ├── index-xxxxxxxx.js       ~400 KB (gzip: 120 KB)
│   └── index-xxxxxxxx.css      ~70 KB  (gzip: 10 KB)
└── research/
    └── ai-soc-paper.pdf        449 KB
```

**Build stats:** ~2,145 modules transformed, ~300-400ms build time

### 9.3 Deployment Targets

#### GitHub Pages (PRIMARY)
- **URL:** https://2004shark.github.io/hamad-portfolio/
- **Branch:** `gh-pages` (contains `dist/` contents)
- **Deploy command:** `npm run deploy` → builds + pushes to gh-pages branch
- **Automation:** `.github/workflows/deploy.yml` — GitHub Actions deploy on push
- **Vite base:** `/hamad-portfolio/`

#### Vercel (SECONDARY)
- **URL:** https://hamad-portfolio-eight.vercel.app/
- **Config:** `vercel.json` with `handle: "filesystem"` for proper SPA routing
- **Note:** Vercel auto-detects Vite framework but may override routing

### 9.4 Configuration Files

**`vercel.json`**
```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "routes": [
    { "handle": "filesystem" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**GitHub Actions (`.github/workflows/deploy.yml`)**
Configured for automatic deployment to GitHub Pages on push to master.

---

## 10. Git Workflow

### 10.1 Repository

- **Remote:** https://github.com/2004shark/hamad-portfolio.git
- **Default branch:** `master`
- **Deploy branch:** `gh-pages` (auto-generated by `npm run deploy`)

### 10.2 Commit History

| Hash | Message |
|------|---------|
| `15203c8` | feat: GitHub Pages deploy setup with gh-pages |
| `1b5fe8d` | fix: vercel.json — use handle:filesystem before SPA catch-all |
| `e749c42` | fix: Vercel deployment — base path /, remove catch-all rewrite, fix PDF URL |
| `54e3a09` | feat: research publications with PDF preview, cyber web background, threat particles |
| `e5450cd` | feat: full TypeScript portfolio with SOC-themed components |

### 10.3 Commit Convention

Format: `<type>: <description>`

Types used: `feat` (new features), `fix` (bug fixes)

---

## 11. AI Agent System (ECC)

### 11.1 Overview

The project uses **Everything Claude Code (ECC)** v1.10.0 — a production-ready AI coding plugin providing **48 specialized agents**, **183 skills**, **79 commands**, and automated hook workflows.

**Location:** `node_modules/ecc-universal/`

### 11.2 Core Principles

1. **Agent-First** — Delegate to specialized agents for domain tasks
2. **Test-Driven** — Write tests before implementation, 80%+ coverage required
3. **Security-First** — Never compromise on security; validate all inputs
4. **Immutability** — Always create new objects, never mutate existing ones
5. **Plan Before Execute** — Plan complex features before writing code

### 11.3 Agent Catalog (48 Agents)

| # | Agent | Purpose |
|---|-------|---------|
| 1 | a11y-architect | Accessibility architecture |
| 2 | architect | System design and scalability |
| 3 | build-error-resolver | Fix build/type errors |
| 4 | chief-of-staff | Project management |
| 5 | code-architect | Code architecture patterns |
| 6 | code-explorer | Codebase exploration |
| 7 | code-reviewer | Code quality and maintainability |
| 8 | code-simplifier | Code simplification |
| 9 | comment-analyzer | Comment analysis |
| 10 | conversation-analyzer | Conversation analysis |
| 11 | cpp-build-resolver | C/C++ build errors |
| 12 | cpp-reviewer | C/C++ code review |
| 13 | csharp-reviewer | C# code review |
| 14 | dart-build-resolver | Dart build errors |
| 15 | database-reviewer | PostgreSQL/Supabase |
| 16 | doc-updater | Documentation and codemaps |
| 17 | docs-lookup | Documentation lookup |
| 18 | e2e-runner | End-to-end Playwright testing |
| 19 | flutter-reviewer | Flutter code review |
| 20 | gan-evaluator | GAN evaluation |
| 21 | gan-generator | GAN generation |
| 22 | gan-planner | GAN planning |
| 23 | go-build-resolver | Go build errors |
| 24 | go-reviewer | Go code review |
| 25 | harness-optimizer | Harness config tuning |
| 26 | healthcare-reviewer | Healthcare code review |
| 27 | java-build-resolver | Java/Maven/Gradle build errors |
| 28 | java-reviewer | Java/Spring Boot review |
| 29 | kotlin-build-resolver | Kotlin/Gradle build errors |
| 30 | kotlin-reviewer | Kotlin/Android/KMP |
| 31 | loop-operator | Autonomous loop execution |
| 32 | opensource-forker | Open source forking |
| 33 | opensource-packager | Open source packaging |
| 34 | opensource-sanitizer | Open source sanitization |
| 35 | performance-optimizer | Performance optimization |
| 36 | planner | Implementation planning |
| 37 | pr-test-analyzer | PR test analysis |
| 38 | python-reviewer | Python code review |
| 39 | pytorch-build-resolver | PyTorch/CUDA errors |
| 40 | refactor-cleaner | Dead code cleanup |
| 41 | rust-build-resolver | Rust build errors |
| 42 | rust-reviewer | Rust code review |
| 43 | security-reviewer | Vulnerability detection |
| 44 | seo-specialist | SEO optimization |
| 45 | silent-failure-hunter | Silent failure detection |
| 46 | tdd-guide | Test-driven development |
| 47 | type-design-analyzer | Type design analysis |
| 48 | typescript-reviewer | TypeScript/JavaScript review |

### 11.4 Agent Orchestration Rules

Agents should be used proactively without user prompt:
- Complex feature requests → **planner** agent
- Code just written/modified → **code-reviewer** agent
- Bug fix or new feature → **tdd-guide** agent
- Architectural decision → **architect** agent
- Security-sensitive code → **security-reviewer** agent

### 11.5 Project Structure (ECC)

```
node_modules/ecc-universal/
├── agents/          — 48 specialized subagents (.md files)
├── skills/          — 183 workflow skills (each in own directory with SKILL.md)
├── commands/        — 79 slash commands
├── hooks/           — Trigger-based automations
├── rules/           — Always-follow guidelines (common + per-language)
├── scripts/         — Cross-platform Node.js utilities
├── mcp-configs/     — 14 MCP server configurations
├── tests/           — Test suite
└── .opencode/
    └── instructions/
        └── INSTRUCTIONS.md  — Master instruction file for OpenCode
```

---

## 12. Skills Catalog

The ECC system includes **183 skills** organized into domain-specific directories. Each skill has a `SKILL.md` file with detailed workflows.

### Active Skills Used in This Project

| Skill | Purpose | When Used |
|-------|---------|-----------|
| `frontend-design` | Create distinctive, production-grade frontend interfaces | Building all UI components |
| `coding-standards` | Naming, readability, immutability, error-handling | Structuring TypeScript code |
| `frontend-patterns` | React composition, state management, performance | Component architecture |
| `backend-patterns` | API design, data layer, error handling | Data layer (resumeData.ts) |
| `security-review` | Security best practices, input validation | Ensuring no secrets leaked |
| `tdd-workflow` | Test-driven development workflow | Code quality process |
| `verification-loop` | Build, type-check, lint, test verification | Post-change verification |
| `strategic-compact` | Context window management for AI | Session management |

### Full Skills Directory (149 directories)

```
agent-harness-construction, agent-introspection-debugging, agent-sort,
agentic-engineering, ai-first-engineering, ai-regression-testing,
android-clean-architecture, api-connector-builder, api-design,
article-writing, automation-audit-ops, autonomous-loops,
backend-patterns, blueprint, brand-voice, carrier-relationship-management,
claude-api, claude-devfleet, clickhouse-io, code-tour, coding-standards,
compose-multiplatform-patterns, configure-ecc, connections-optimizer,
content-engine, content-hash-cache-pattern, continuous-agent-loop,
continuous-learning-v2, continuous-learning, cost-aware-llm-pipeline,
council, cpp-coding-standards, cpp-testing, crosspost,
csharp-testing, customer-billing-ops, customs-trade-compliance,
dart-flutter-patterns, dashboard-builder, data-scraper-agent,
database-migrations, deep-research, defi-amm-security,
deployment-patterns, django-patterns, django-security, django-tdd,
django-verification, dmux-workflows, docker-patterns, dotnet-patterns,
e2e-testing, ecc-tools-cost-audit, email-ops, energy-procurement,
enterprise-agent-ops, eval-harness, evm-token-decimals, exa-search,
fal-ai-media, finance-billing-ops, foundation-models-on-device,
frontend-design, frontend-patterns, frontend-slides, github-ops,
golang-patterns, golang-testing, google-workspace-ops,
healthcare-phi-compliance, hipaa-compliance, hookify-rules,
inventory-demand-planning, investor-materials, investor-outreach,
iterative-retrieval, java-coding-standards, jira-integration,
jpa-patterns, knowledge-ops, kotlin-coroutines-flows,
kotlin-exposed-patterns, kotlin-ktor-patterns, kotlin-patterns,
kotlin-testing, laravel-patterns, laravel-plugin-discovery,
laravel-security, laravel-tdd, laravel-verification, lead-intelligence,
liquid-glass-design, llm-trading-agent-security,
logistics-exception-management, manim-video, market-research,
mcp-server-patterns, messages-ops, nanoclaw-repl, nestjs-patterns,
nodejs-keccak256, nutrient-document-processing, perl-patterns,
perl-security, perl-testing, plankton-code-quality, postgres-patterns,
product-capability, production-scheduling, project-flow-ops,
prompt-optimizer, python-patterns, python-testing,
quality-nonconformance, ralphinho-rfc-pipeline,
regex-vs-llm-structured-text, remotion-video-creation, research-ops,
returns-reverse-logistics, rust-patterns, rust-testing, search-first,
security-bounty-hunter, security-review, security-scan, seo,
skill-stocktake, social-graph-ranker, springboot-patterns,
springboot-security, springboot-tdd, springboot-verification,
strategic-compact, swift-actor-persistence, swift-concurrency-6-2,
swift-protocol-di-testing, swiftui-patterns, tdd-workflow,
team-builder, terminal-ops, token-budget-advisor, ui-demo,
unified-notifications-ops, verification-loop, video-editing,
videodb, visa-doc-translate, workspace-surface-audit, x-api
```

---

## 13. Session Change Log

### Session 1: Initial Setup & TypeScript Conversion
- Converted portfolio from JSX to TypeScript
- Created missing components: BlueTeam.tsx, Footer.tsx
- Set up global layout (consistent padding, max-w-5xl, responsive breakpoints)
- Hero redesign with typewriter effect, floating badges, animated grid
- Design system: reusable CSS classes (.card, .btn-primary, .btn-outline, .tag)
- Git initialized, repo pushed to github.com/2004shark/hamad-portfolio

### Session 2: Research Publications Section
- Added `publications[]` array to `resumeData.ts`
- Built `Research.tsx` with:
  - Featured publication card (5-column grid layout)
  - Abstract preview with quote accent and left border
  - Tag chips with hover effects
  - Action buttons: Preview PDF, View Publication, Download PDF
  - Research topics grid (3-column responsive)
- Created PdfPreviewModal with:
  - Framer Motion AnimatePresence entrance/exit
  - Dark glassmorphism overlay with backdrop blur
  - PDF displayed in iframe
  - Open in new tab + Download buttons in modal header
  - Escape key to close
- Downloaded PDF from thesesjournal.com (449 KB)
- Stored at `public/research/ai-soc-paper.pdf`

### Session 3: PDF Preview Bug Fix
- **Problem:** PDF preview modal iframe was invisible
- **Root Cause:** iframe `onLoad` event doesn't fire for browser PDF plugins, leaving the iframe stuck at `opacity: 0`
- **Fix:** Replaced `onLoad`-dependent visibility with a 2-second `setTimeout` fallback
- **Also fixed:** Moved modal outside `overflow-hidden` section container to prevent CSS clipping

### Session 4: Background Effects
- Created `CyberWeb.tsx` — Canvas-based interactive network graph (32 nodes, mouse repulsion, pulsing nodes)
- Created `ThreatParticles.tsx` — 40 floating cybersecurity threat labels with 5 distinct CSS animation patterns
- Added both to `App.tsx` as fixed background layers at z-index -2 and -1

### Session 5: Vercel Deployment Fix
- Changed Vite `base` from `/hamad-portfolio/` to `/` for root Vercel deployment
- Simplified `vercel.json` routes with `{ "handle": "filesystem" }` to prevent SPA catch-all from intercepting static assets
- Updated PDF URL to remove `/hamad-portfolio/` prefix

### Session 6: GitHub Pages Setup
- Reverted Vite `base` to `/hamad-portfolio/` for GitHub Pages subpath deployment
- Restored PDF URL with `/hamad-portfolio/` prefix
- Installed `gh-pages` package
- Added `npm run deploy` script
- Deployed to `gh-pages` branch
- Live at: https://2004shark.github.io/hamad-portfolio/

### Key Technical Decisions

| Decision | Rationale |
|----------|-----------|
| Single `resumeData.ts` for all content | Simple data layer, easy to update, no database needed |
| Local PDF storage (not external URL) | Avoids CORS, iframe-blocking, X-Frame-Options issues |
| Canvas for CyberWeb | High-performance for rendering ~500+ connection lines per frame |
| DOM elements for ThreatParticles | CSS animations are GPU-accelerated, smoother than canvas for text |
| iframe `onLoad` replaced with setTimeout | Browser PDF plugins don't fire standard iframe load events |
| Modal outside overflow-hidden parent | Prevents CSS clipping of fixed-position elements |
| Framer Motion AnimatePresence | Smooth enter/exit animations for modals and transitions |
| Tailwind v4 `@theme` directive | Proper CSS custom properties for consistent theming |
| Glassmorphism design language | Modern, premium feel matching cybersecurity/tech aesthetic |

---

## 14. Troubleshooting

### 14.1 PDF Preview Not Working

**Symptoms:** Modal opens but PDF is blank/white/invisible.

**Checklist:**
1. Verify PDF exists at `public/research/ai-soc-paper.pdf`
2. Verify PDF URL matches the Vite base path (`/hamad-portfolio/research/...`)
3. Check browser dev tools → Network tab → PDF request returns 200 with `Content-Type: application/pdf`
4. Check if modal has `overflow-hidden` on any parent (modal must NOT be inside an `overflow-hidden` container)
5. Verify iframe `src` is correctly set to `paper.pdfUrl`

### 14.2 Background Effects Not Visible

**Checklist:**
1. Verify `CyberWeb` and `ThreatParticles` appear BEFORE `<main>` content in `App.tsx`
2. Check z-index: CyberWeb at -2, ThreatParticles at -1, content at auto
3. For ThreatParticles: verify `pointer-events: none` is set, opacity values are 0.08-0.20 range

### 14.3 Build Failures

**Common issues:**
- TypeScript errors: run `npx tsc --noEmit` to check
- Tailwind v4 syntax: Use `@theme` not `@layer utilities`
- Vite base path mismatch between development and production

### 14.4 Vercel Deployment Issues

**Symptom:** Site loads but JS/CSS missing (blank page).

**Fix:** Ensure `vercel.json` has `{ "handle": "filesystem" }` BEFORE the SPA catch-all route:
```json
"routes": [
  { "handle": "filesystem" },
  { "source": "/(.*)", "destination": "/index.html" }
]
```

### 14.5 GitHub Pages Deployment

**Steps:**
1. Ensure `vite.config.js` has correct `base` path (e.g., `/hamad-portfolio/`)
2. Run `npm run deploy` to build and push to `gh-pages` branch
3. In repo Settings → Pages → Source: "Deploy from a branch" → Branch: `gh-pages` → `/ (root)`
4. Wait 1-2 minutes for DNS propagation

---

## Appendix: File Reference

| File | Lines | Key Exports / Functions |
|------|-------|------------------------|
| `src/main.tsx` | 10 | `ReactDOM.createRoot`, imports `App` and `index.css` |
| `src/App.tsx` | 33 | Renders all 12 sections + CyberWeb + ThreatParticles |
| `src/index.css` | 141 | Tailwind v4 `@theme` config, font imports, base styles |
| `src/data/resumeData.ts` | 322 | 11 data exports (personalInfo, roles, skills, projects, etc.) |
| `src/lib/utils.ts` | 14 | `cn()` classname merge utility |
| `src/components/Navbar.tsx` | 94 | Scroll-aware nav, mobile menu |
| `src/components/Hero.tsx` | 209 | Typewriter, badges, grid, social links |
| `src/components/About.tsx` | 95 | Bio, terminal card, stats |
| `src/components/Skills.tsx` | 112 | Blue/Red skill toggle, category cards |
| `src/components/BlueTeam.tsx` | 104 | SOC stats dashboard |
| `src/components/Experience.tsx` | 88 | Timeline, company cards |
| `src/components/Projects.tsx` | 129 | Filterable project grid |
| `src/components/Research.tsx` | 367 | Publication card, PDF modal, research topics |
| `src/components/Certifications.tsx` | 43 | Badge grid, issuer icons |
| `src/components/Contact.tsx` | 93 | CTA, social links |
| `src/components/Footer.tsx` | 78 | Links, branding |
| `src/components/BlurFade.tsx` | 42 | Reusable scroll-reveal wrapper |
| `src/components/CyberWeb.tsx` | 176 | Canvas network graph |
| `src/components/ThreatParticles.tsx` | 131 | Floating threat labels |
| `src/components/icons.tsx` | 211 | 21 SVG icon components |

---

*Document generated: May 11, 2026*
*Portfolio of Hamad Moiz Chodhry — Cybersecurity Professional*
