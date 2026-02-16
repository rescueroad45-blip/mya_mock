<div align="center">

# 🎬 MYCUT FILM Co., Ltd.

### Cambodia's Leading Production House & Media Agency

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-CDN-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

*A modern, responsive showcase website built with React + TypeScript + Vite, featuring smooth animations, a dark theme, and bilingual support (English/Khmer).*

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Pages & Routing](#-pages--routing)
- [Design System](#-design-system)
- [Component Library](#-component-library)
- [Internationalization (i18n)](#-internationalization-i18n)
- [Configuration](#-configuration)
- [Building for Production](#-building-for-production)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

**MYCUT FILM Co., Ltd.** is a professional media production company based in Phnom Penh, Cambodia, with over 10 years of experience. This project is a modern showcase website that highlights their services, portfolio, team, and contact information.

The website is designed with a **premium dark theme** accented by golden-yellow (`#eab308`) highlights, featuring smooth scroll-based animations, a hero image carousel, and a fully responsive layout.

---

## ✨ Features

### Core Features
- 🖼️ **Hero Image Carousel** — Auto-rotating background images with parallax scrolling effect
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop viewports
- 🎨 **Premium Dark Theme** — Sleek `zinc-950` backgrounds with `yellow-500` accent highlights
- ✨ **Scroll Animations** — `IntersectionObserver`-based fade-in-up animations for all sections
- 🧩 **Reusable UI Components** — Custom `Button`, `Card`, `Input`, `Textarea`, `Badge`, `Modal`, and `FadeIn` components
- 🔍 **Portfolio Filtering** — Filter projects by category (Corporate, Events, Product Launch, Government/NGO)
- 📖 **Project Detail Modal** — Click any portfolio item to view a full-screen detail overlay with gallery
- 📝 **Contact Form** — Interactive inquiry form with simulated submission and success state
- 🌐 **Bilingual Translations** — Full English and Khmer (ខ្មែរ) translation strings included
- 🧭 **SPA Routing** — Hash-based client-side routing via `react-router-dom`
- 🔝 **Scroll to Top** — Automatic scroll-to-top on route navigation

### Visual & UX Details
- Glass morphism navigation bar with backdrop blur on scroll
- Staggered animation delays for card grids
- Hover effects with scale, translate, and color transitions
- Custom styled scrollbar
- Typography powered by **Outfit** (display) and **Plus Jakarta Sans** (body) from Google Fonts

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **React** | 18.3.x | UI library for component-based rendering |
| **TypeScript** | 5.6.x | Static type checking and enhanced DX |
| **Vite** | 6.0.x | Lightning-fast dev server and bundler |
| **React Router DOM** | 6.28.x | Client-side SPA routing (HashRouter) |
| **TailwindCSS** | CDN (JIT) | Utility-first CSS framework via CDN |
| **Lucide React** | 0.460.x | Beautiful, consistent SVG icons |
| **clsx + tailwind-merge** | 2.x / 2.x | Conditional className composition utilities |

---

## 📂 Project Structure

```
mock_mya/
├── index.html              # Entry HTML with TailwindCSS CDN, fonts, and custom styles
├── index.tsx               # React root mount point
├── App.tsx                 # Root component: Router, Header, Footer, Routes
├── vite.config.ts          # Vite configuration (dev server, plugins, aliases)
├── tsconfig.json           # TypeScript compiler configuration
├── package.json            # Dependencies and scripts
├── metadata.json           # Project metadata
├── .gitignore              # Git ignore rules
├── README.md               # This file
│
├── components/
│   └── ui.tsx              # Shared UI primitives (Button, Card, Input, FadeIn, Modal, etc.)
│
├── pages/
│   ├── Home.tsx            # Landing page: Hero, Services Preview, Recent Projects, Clients, CTA
│   ├── Portfolio.tsx       # Portfolio gallery with category filters and detail modal
│   ├── Services.tsx        # Detailed services showcase (Production, Events, Live Stream, etc.)
│   ├── About.tsx           # Company history, mission/vision, stats, and team section
│   └── Contact.tsx         # Contact information and inquiry form
│
├── translations.ts         # i18n strings for English and Khmer languages
├── LanguageContext.tsx      # React Context for language switching
└── types.ts                # TypeScript interfaces (Project, Service, Testimonial, TeamMember)
```

---

## 📋 Prerequisites

- **Node.js** — v18.0.0 or higher recommended
- **npm** — v9.0.0 or higher (comes with Node.js)

Verify installation:
```bash
node --version   # Should output v18.x.x or higher
npm --version    # Should output 9.x.x or higher
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd mock_mya
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The app will be available at: **http://localhost:3000**

The browser should open automatically. If not, navigate to the URL manually.

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| `dev` | `npm run dev` | Starts the Vite development server on port `3000` with HMR |
| `build` | `npm run build` | Runs TypeScript type-check then bundles for production |
| `preview` | `npm run preview` | Serves the production build locally for testing |
| `lint` | `npm run lint` | Runs TypeScript compiler in `noEmit` mode for type checking |

---

## 🧭 Pages & Routing

The app uses `HashRouter` for client-side routing, making it compatible with static hosting providers.

| Route | Page | Description |
|---|---|---|
| `/#/` | **Home** | Hero carousel, services preview, recent projects, trusted clients, CTA |
| `/#/portfolio` | **Portfolio** | Filterable project gallery with detail modals |
| `/#/services` | **Services** | Detailed breakdown of all service categories |
| `/#/about` | **About** | Company history, mission, vision, stats, and team photo |
| `/#/contact` | **Contact** | Contact info, "Why Choose Us" card, and inquiry form |

---

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `background` | `#09090b` (zinc-950) | Page backgrounds |
| `foreground` | `#fafafa` (zinc-50) | Primary text color |
| `primary` | `#eab308` (yellow-500) | Accent, CTAs, active states |
| `primary-foreground` | `#000000` | Text on primary buttons |
| `secondary` | `#27272a` (zinc-800) | Cards, borders |
| `muted-foreground` | `#a1a1aa` (zinc-400) | Secondary/muted text |

### Typography

| Font | Weights | Usage |
|---|---|---|
| **Outfit** | 300–800 | Headings, display text, nav links |
| **Plus Jakarta Sans** | 300–700 | Body text, paragraphs, form labels |

### Breakpoints

| Breakpoint | Min Width | Usage |
|---|---|---|
| Mobile | `0px` | Default — single column, hamburger nav |
| Tablet (`md`) | `768px` | Two-column grids, desktop nav visible |
| Desktop (`lg`) | `1024px` | Three-column grids, wider spacing |

---

## 🧩 Component Library

All reusable components are in `components/ui.tsx`:

### `<FadeIn>`
Scroll-triggered fade-in-up animation using `IntersectionObserver`.

```tsx
<FadeIn delay={200} threshold={0.1}>
  <h2>Animated content</h2>
</FadeIn>
```

**Props:** `delay` (ms), `threshold` (0-1), `className`

### `<Button>`
Versatile button with multiple variants and sizes.

```tsx
<Button variant="default" size="lg">Click Me</Button>
<Button variant="outline" size="sm">Secondary</Button>
<Button variant="ghost">Ghost</Button>
```

**Variants:** `default`, `outline`, `ghost`, `secondary`  
**Sizes:** `default`, `sm`, `lg`

### `<Card>`, `<CardHeader>`, `<CardTitle>`, `<CardContent>`
Composable card components with dark theme styling.

### `<Input>`, `<Textarea>`
Styled form inputs with focus ring animations.

### `<Badge>`
Inline badge/tag component.

**Variants:** `default`, `outline`

### `<Modal>`
Lightbox/dialog overlay component.

### `cn()` Utility
Merges class names intelligently using `clsx` + `tailwind-merge`.

---

## 🌐 Internationalization (i18n)

The project includes a complete translation system supporting:
- 🇬🇧 **English** (`en`)
- 🇰🇭 **Khmer** (`kh`)

### Architecture

```
translations.ts        → Translation string definitions
LanguageContext.tsx     → React Context + Provider + useLanguage hook
```

### Usage

```tsx
import { useLanguage } from './LanguageContext';

function MyComponent() {
  const { t, language, setLanguage } = useLanguage();
  
  return (
    <div>
      <h1>{t.hero.title_prefix}</h1>
      <button onClick={() => setLanguage('kh')}>ខ្មែរ</button>
    </div>
  );
}
```

> **Note:** The `LanguageProvider` is defined but not yet wrapped around the `App` component. To enable language switching, wrap the `<Router>` with `<LanguageProvider>` in `App.tsx`.

---

## ⚙️ Configuration

### Vite Config (`vite.config.ts`)

| Setting | Value | Description |
|---|---|---|
| Server Port | `3000` | Local dev server port |
| Server Host | `0.0.0.0` | Accessible from any network interface |
| Auto Open | `true` | Browser opens automatically on `npm run dev` |
| Path Alias | `@` → `./` | Allows `@/components/ui` imports |
| Source Maps | `true` | Generated for production builds |

### TypeScript Config (`tsconfig.json`)

- Target: **ES2020**
- Module: **ESNext** with bundler module resolution
- JSX: **react-jsx** (automatic runtime)
- Strict mode: **enabled**
- Path alias: `@/*` → `./*`

---

## 📦 Building for Production

```bash
npm run build
```

This will:
1. Run TypeScript type checking (`tsc --noEmit`)
2. Bundle the app with Vite into the `dist/` folder
3. Generate source maps for debugging

### Preview the production build:

```bash
npm run preview
```

---

## 🚢 Deployment

The production build (`dist/`) is a static site that can be deployed to:

| Platform | Command/Notes |
|---|---|
| **Netlify** | Drag & drop `dist/` or connect Git repo |
| **Vercel** | `vercel deploy` with Vite preset |
| **GitHub Pages** | Set `base` in `vite.config.ts` to repo name |
| **Nginx** | Serve `dist/` as static files |
| **Docker** | Use `nginx:alpine` image serving `dist/` |

> **Note:** Since the app uses `HashRouter`, all routes work correctly with static hosting — no server-side configuration needed.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is private and proprietary. All rights reserved by **MYCUT FILM Co., Ltd.**

---

<div align="center">

**Built with ❤️ for MYCUT FILM Co., Ltd.**

*© 2024-2026 MYCUT FILM Co., Ltd. All Rights Reserved.*

</div>
