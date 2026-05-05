# Goa Hackathon 2026 — Parul University

> **AI in Campus** — A 24-hour hackathon organized by the Department of Computer Science and Engineering at Parul University, Goa.

## About

This is the official event website for **Goa Hackathon 2026**, scheduled for **May 11–12, 2026**. The hackathon brings together students to build intelligent solutions that integrate AI into campus life, covering 10 problem statements from navigation to smart cafeterias.

### Features

- Live countdown timer with multi-phase tracking (synced to real-time APIs)
- Responsive, animated UI with a brutalist-modern dark design
- Registration gate with automatic deadline enforcement
- Problem statements revealed only after hackathon begins
- Pre-hackathon workshop section with conditional visibility
- Fullscreen timer mode for event-day projection

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 6** — build tooling
- **Tailwind CSS v4** — utility-first styling
- **Framer Motion** — animations and transitions
- **Lucide React** — icon library

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)

### Installation

```bash
git clone https://github.com/Aaaaaaaaaryan/Goa-Hackathon-PU.git
cd Goa-Hackathon-PU
npm install
```

### Development

```bash
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── AccordionItem.tsx
│   ├── Marquee.tsx
│   ├── PopupModal.tsx
│   ├── RollingDigit.tsx
│   ├── TimeSeparator.tsx
│   └── ToolItem.tsx
├── hooks/            # Custom React hooks
│   ├── useCountdown.ts
│   └── useScrollDirection.ts
├── data/             # Static data and constants
│   └── constants.ts
├── App.tsx           # Main page layout
├── main.tsx          # React entry point
└── index.css         # Global styles and theme
```

## Event Coordinators

- **Aaryan Kumar Tiwari** — Student Coordinator
- **Dr. Dhaval Nimavat** — Faculty Coordinator
- **Dr. Sanjeeta Rane** — Faculty Coordinator
- **Ms. Silica Kole** — Faculty Coordinator

## License

MIT — see [LICENSE](./LICENSE)
