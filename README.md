# Katherine Atmar - Portfolio Website

A premium, animated portfolio site built with React + Vite. Designed for senior creative leadership positioning.

## Quick Start

```bash
cd katherine-atmar-portfolio
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Build for Production

```bash
npm run build
```

Creates a `dist/` folder with optimized static files.

## Deploy

**Vercel (Recommended):** Push to GitHub → import at vercel.com → auto-deploys.

**Netlify:** Push to GitHub → connect at netlify.com → build command: `npm run build`, publish: `dist`.

## What to Customize

- **Project images**: Replace placeholder areas in `ProjectCard.jsx` with real screenshots in `public/images/`
- **LinkedIn URL**: Update in `Contact.jsx` and `Footer.jsx`
- **Education**: Update placeholder in `Resume.jsx`
- **Resume PDF**: Add to `public/` and update download link in `Resume.jsx`
- **Contact form**: Wire up to Formspree, Netlify Forms, or EmailJS
- **Colors**: All tokens in `src/index.css` :root block

## Tech Stack

React 18, React Router 6, Framer Motion, CSS Modules, Vite, Google Fonts (DM Sans + Lora)
