# Goa Hackathon 2026 Landing Page

Official frontend landing page for **Goa Hackathon 2026** conducted at **Parul University Goa**.

## Ownership And Usage

This project and all associated branding/content are part of Parul University Goa property.

- Owner: Parul University Goa
- Intended use: Official event communication and promotion
- Reuse policy: Do not redistribute, rebrand, or republish without written approval from Parul University Goa

## Tech Stack

- React 19
- TypeScript
- Vite 6
- Tailwind CSS 4
- Motion + Lucide icons

## Local Setup

1. Install dependencies:
   `npm install`
2. Start dev server:
   `npm run dev`
3. Open:
   `http://localhost:3000`

## Production Build

1. Type check:
   `npm run lint`
2. Create production bundle:
   `npm run build`
3. Preview production build locally:
   `npm run preview`

## Deployment Notes

- Static assets are served from project root/public paths (for example `/logo.png`, `/fev.png`).
- Ensure the hosting platform serves `dist/` as the web root.
- Recommended platforms: Vercel, Netlify, GitHub Pages, or any static file host.

## Project Structure

- `src/App.tsx`: Main page composition
- `src/components/`: Reusable UI components
- `src/hooks/`: Reusable behavior hooks
- `src/index.css`: Theme and global styles
- `index.html`: Document shell and favicon link

## Quality Status

- `npm run lint` passes (`tsc --noEmit`)
- `npm run build` passes (Vite production build)
- `npm audit` reports 0 vulnerabilities at install time
