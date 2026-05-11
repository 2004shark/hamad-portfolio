# Hamad Portfolio — Session Changes

## Overview
Research Publications section with PDF preview, background cyber web, and floating threat particles added to the cybersecurity portfolio.

---

## 1. Research Publications Section

### Files Changed
- `src/data/resumeData.ts` — Added `publications[]` array with full paper metadata
- `src/components/Research.tsx` — Complete rewrite with featured publication card + PDF preview modal

### What It Does
- **Featured Publication Card**: Grid layout with paper thumbnail visual, category badge, abstract with quote accent, tag chips, action buttons (Preview PDF, View Publication, Download PDF)
- **PDF Preview Modal**: Full-screen glassmorphism modal with iframe-based PDF viewer, loading spinner with 2s timeout fallback, Open/Download buttons in header, Escape key to close, Framer Motion AnimatePresence
- **Research Topics Grid**: 5 research area cards with icons, descriptions, tags
- Modal rendered OUTSIDE the `overflow-hidden` section to prevent CSS clipping issues

### Data Structure (resumeData.ts)
```typescript
publications = [{
  title, authors, journal, year, doi,
  url: "https://thesesjournal.com/...",
  pdfUrl: "/hamad-portfolio/research/ai-soc-paper.pdf",  // local file
  abstract, tags, category, citations
}]
```

### PDF Source
- Downloaded from thesesjournal.com (449 KB)
- Stored at `public/research/ai-soc-paper.pdf`
- Served via Vite static at `/hamad-portfolio/research/ai-soc-paper.pdf`

---

## 2. Interactive Cyber Web Background

### New File
- `src/components/CyberWeb.tsx`

### What It Does
- **Canvas-based interactive network graph**
- **32 nodes** connected by gradient lines (purple → cyan → pink) within 220px proximity
- **Pulsing glow** on each node via `Math.sin(Date.now())` radial gradients
- **Mouse interactivity**: nodes repel from cursor (180px radius), subtle connection lines radiate from mouse
- **Physics simulation**: nodes drift slowly, bounce off viewport edges, velocity decays at 0.98
- **Layer**: `z-index: -2` (behind threat particles and content)

---

## 3. Floating Threat Particles

### New File
- `src/components/ThreatParticles.tsx`

### What It Does
- **40 cybersecurity threat labels** drifting across the viewport
- Threats include: RANSOMWARE, PHISHING, DDoS, SQL INJECTION, XSS, ZERO-DAY, KERBEROASTING, GOLDEN TICKET, FILELESS MALWARE, LOLBINS, DLL HIJACKING, CREDENTIAL DUMPING, etc.
- **5 distinct float animations**: smooth drift, reverse path, scale pulse, rotateX, skew
- **Color-coded**: each threat gets a deterministic pink/purple/cyan/red color
- **Fade in/out**: particles fade into view, drift, then fade out in 30–70s loop
- **Layer**: `z-index: -1` (behind content, in front of cyber web)

---

## 4. App Integration

### File Changed
- `src/App.tsx` — Added CyberWeb and ThreatParticles as background layers

### Layer Stack
```
z = auto  → Main content (Navbar, Hero, About, Skills, etc.)
z = -1    → ThreatParticles (floating threat names)
z = -2    → CyberWeb (interactive network graph)
```

---

## 5. Build & Deployment

- **Framework**: Vite with `base: '/hamad-portfolio/'`
- **Build**: `npm run build` — 2145 modules, clean pass
- **Static PDF**: served at `/hamad-portfolio/research/ai-soc-paper.pdf`

---

## Key Technical Decisions

| Decision | Rationale |
|----------|-----------|
| Local PDF storage | Avoids CORS, iframe-blocking, and broken external links |
| Canvas for CyberWeb | High-performance 2D rendering for ~1200 connection lines |
| DOM elements for ThreatParticles | Lighter than canvas for text rendering, CSS animations for drift |
| Modal outside overflow-hidden section | Prevents CSS clipping of fixed-position modal |
| iframe `onLoad` replaced with timeout | Browser PDF plugin doesn't fire standard iframe load events |
| Hardcoded base path in pdfUrl | Vite `base: /hamad-portfolio/` requires explicit path prefix |

---

## Git History

```bash
e5450cd  feat: full TypeScript portfolio with SOC-themed components
[Next]   feat: research publications, cyber web background, threat particles
```
