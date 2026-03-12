# North York Shine — Project Memory

## Project Overview
Landing page website for North York Shine, a home exterior cleaning company in North York / Toronto.

## Tech Stack
- Vite 5 + React 18 + Tailwind CSS 3 + React Router 6
- No backend, no icon library (inline SVG)
- All files live in the worktree: `/Users/vivekkoul/northyorkshine/.claude/worktrees/trusting-hofstadter/`
- Main repo: `/Users/vivekkoul/northyorkshine/`

## Key File Paths
- Config: `tailwind.config.js`, `vite.config.js`, `postcss.config.js`, `index.html`
- Entry: `src/main.jsx`, `src/App.jsx`, `src/index.css`
- Icons: `src/components/icons/Icons.jsx` (all SVGs as named exports)
- UI: `src/components/ui/` — Button, SectionWrapper, SectionHeading, ServiceCard, TrustBadge, StepCard, TestimonialCard
- Layout: `src/components/layout/Navbar.jsx`, `Footer.jsx`
- Sections: `src/sections/` — Hero, Services, WhyChooseUs, HowItWorks, About, Testimonials, ServiceArea, FinalCTA
- Pages: `src/pages/HomePage.jsx`, `ContactPage.jsx`

## Design System
- Primary brand color: `brand-600` (#2563eb)
- Custom Tailwind tokens: `brand-50` through `brand-900`, `neutral-50` through `neutral-900`
- Custom shadows: `shadow-card`, `shadow-card-hover`, `shadow-btn`, `shadow-btn-hover`
- Custom bg images: `bg-hero-pattern`, `bg-cta-gradient`
- Font: Inter (Google Fonts, loaded via `index.html` link tags)
- Utility classes: `section-padding`, `container-width` defined in `src/index.css`

## Business Details
- Company: North York Shine
- Slogan: "Your windows deserve to shine like you do."
- Services: Window Cleaning, Gutter Cleaning, Power Washing (one-time), Snow Removal (subscription)
- Contact placeholder: (416) 555-0100, hello@northyorkshine.ca
- Area: North York, Willowdale, Bayview Village, Don Mills, Newtonbrook, North York Centre, Lansing, Yonge-Eglinton, Midtown Toronto

## Status
- Site fully built and verified running at localhost:5173
- Both Home and Contact pages confirmed working, no console errors
- `.claude/launch.json` configured for `npm run dev` on port 5173

## Known Issue Fixed
- Apostrophes in JS string literals (single-quoted) cause Babel parse errors in JSX files
  - Fix: use double quotes for strings containing apostrophes (e.g., "It's" or "we'll")
