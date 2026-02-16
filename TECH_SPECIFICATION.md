<div align="center">

# 📋 MYCUT FILM — Technical Specification & Stack Recommendation

### The Best Tech Stack for Speed, Simplicity, and Future Scalability

</div>

---

## 📑 Table of Contents

- [1. Project Analysis](#1-project-analysis)
- [2. Recommended Tech Stack](#2-recommended-tech-stack)
- [3. Why This Stack?](#3-why-this-stack)
- [4. Architecture Overview](#4-architecture-overview)
- [5. Backend API Specification](#5-backend-api-specification)
- [6. Frontend Specification](#6-frontend-specification)
- [7. Integration Layer](#7-integration-layer)
- [8. Migration Path to Next.js](#8-migration-path-to-nextjs)
- [9. Development Timeline Estimate](#9-development-timeline-estimate)
- [10. Folder Structure](#10-folder-structure)
- [11. Deployment Strategy](#11-deployment-strategy)

---

## 1. Project Analysis

### What the Project Is
**MYCUT FILM Co., Ltd.** is a **small company showcase/portfolio website** for a Cambodian production house. Based on the mock, the project needs:

| Feature | Description |
|---|---|
| **Home Page** | Hero carousel, services preview, recent projects, client logos, CTA |
| **Portfolio** | Filterable project gallery with detail modals |
| **Services** | Detailed breakdown of 5-6 service categories |
| **About** | Company history, mission/vision, stats, team |
| **Contact** | Contact info + inquiry form |
| **i18n** | Bilingual support (English 🇬🇧 + Khmer 🇰🇭) |

### Current Mock State
- **Frontend-only** — No backend/API, all data is hardcoded in components
- **React 18 + TypeScript + Vite + TailwindCSS (CDN)**
- **Hash-based SPA routing** via `react-router-dom`
- **~5 pages**, ~1 shared UI component file, ~53KB of source code
- **No database, no CMS, no auth**

### What's Missing (Needs to Be Built)
1. **Backend API** — To serve dynamic content (portfolio, services, team, contact form)
2. **Database** — To store content, portfolio projects, and form submissions
3. **Admin Panel** *(optional)* — To manage content without redeploying
4. **File/Image Storage** — For portfolio images and team photos
5. **Contact Form Processing** — Email notifications or form storage

---

## 2. Recommended Tech Stack

### 🏆 Best Stack: **Hono + SQLite + React (Vite) → Easy Next.js Migration**

| Layer | Technology | Why |
|---|---|---|
| **Backend API** | **[Hono](https://hono.dev/)** | Ultra-lightweight, TypeScript-first, runs anywhere, ~14KB. Fastest to set up. |
| **Database** | **[SQLite](https://www.sqlite.org/) + [Drizzle ORM](https://orm.drizzle.team/)** | Zero setup, file-based, perfect for small projects. Drizzle gives type-safe queries. |
| **Frontend** | **React 18 + Vite** (current) | Already built. Keep it as-is, then swap to Next.js when ready. |
| **Styling** | **TailwindCSS v3** (installed, not CDN) | Proper build-time processing, better performance. Already used in mock. |
| **Image Storage** | **Local filesystem** or **Cloudflare R2 / AWS S3** | Start local, scale to cloud when needed. |
| **Form Handling** | **Hono API endpoint** → Email via **Resend** or **Nodemailer** | Simple REST endpoint, optional email notification. |
| **Deployment** | **Docker** or **VPS (PM2 + Nginx)** | Simple, cheap, full control. |
| **Language** | **TypeScript** everywhere | Shared types between frontend & backend. |

### Alternative Stacks Considered (and why they're not the best fit)

| Stack | Pros | Cons | Verdict |
|---|---|---|---|
| **Express.js + PostgreSQL** | Very popular, lots of tutorials | Heavier setup, Express is old/verbose, Postgres needs a server | ❌ Overkill |
| **Next.js (Full-stack from day 1)** | API Routes + SSR built-in | Learning curve, more complex for a simple portfolio, harder to decouple API | ❌ Too much too soon |
| **NestJS + PostgreSQL** | Enterprise-grade, great DX | Way too heavy for 5 pages, long setup time | ❌ Massive overkill |
| **Strapi / Payload CMS** | Instant admin panel + API | Extra dependency, opinionated, migration complexity | ⚠️ Good if you want CMS, but adds complexity |
| **Hono + SQLite** | Tiny, fast, TypeScript-native, runs anywhere | Less ecosystem than Express | ✅ **Perfect fit** |

---

## 3. Why This Stack?

### ⚡ Speed of Development
| Factor | Benefit |
|---|---|
| **Hono** | Create a full REST API in < 100 lines. No boilerplate. |
| **SQLite** | No database server to install. Just a file. `npm install better-sqlite3` and go. |
| **Drizzle ORM** | Type-safe schema + queries. Auto-generates migrations. |
| **Shared TypeScript types** | Define once in `/shared/types.ts`, use in both frontend & backend. |
| **Vite** | Already set up. Instant HMR. No changes needed. |

### 📦 Small Footprint
```
Total added dependencies: ~5 packages
Backend code: ~300-500 lines
Database: 1 SQLite file (~100KB)
Deployment: Single Docker container or PM2 process
```

### 🔄 Easy Migration to Next.js
The key design principle: **Decouple the API from the frontend**.

```
Current:     React (Vite) ← hardcoded data
After:       React (Vite) ← fetch() → Hono API ← SQLite
Next.js:     Next.js      ← fetch() → Hono API ← SQLite  (same API!)
```

When you switch to Next.js:
1. ✅ **API stays the same** — Hono runs independently
2. ✅ **Components stay the same** — React is React
3. ✅ **Only routing changes** — `react-router-dom` → Next.js `app/` router
4. ✅ **Gain SSR/SSG** — Better SEO for portfolio pages
5. ✅ **Styles stay the same** — TailwindCSS works identically in Next.js

---

## 4. Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│                    CLIENT (Browser)                  │
│  ┌───────────────────────────────────────────────┐  │
│  │         React + Vite (or Next.js later)        │  │
│  │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐│  │
│  │  │ Home │ │Port. │ │Serv. │ │About │ │Cont. ││  │
│  │  └──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘│  │
│  │     └────────┴────────┴────────┴────────┘     │  │
│  │                fetch() / axios                 │  │
│  └──────────────────────┬────────────────────────┘  │
│                         │ HTTP (REST JSON)           │
└─────────────────────────┼───────────────────────────┘
                          │
┌─────────────────────────┼───────────────────────────┐
│                    SERVER                            │
│  ┌──────────────────────┴────────────────────────┐  │
│  │              Hono API (TypeScript)              │  │
│  │  ┌──────────┐ ┌──────────┐ ┌────────────────┐ │  │
│  │  │ /api/    │ │ /api/    │ │ /api/contact   │ │  │
│  │  │ projects │ │ services │ │ (form submit)  │ │  │
│  │  └────┬─────┘ └────┬─────┘ └───────┬────────┘ │  │
│  │       └─────────────┴───────────────┘          │  │
│  │              Drizzle ORM                       │  │
│  └──────────────────────┬────────────────────────┘  │
│                         │                            │
│  ┌──────────────────────┴────────────────────────┐  │
│  │           SQLite Database (file)               │  │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐      │  │
│  │  │ projects │ │ services │ │ contacts │      │  │
│  │  │ team     │ │ settings │ │ images   │      │  │
│  │  └──────────┘ └──────────┘ └──────────┘      │  │
│  └───────────────────────────────────────────────┘  │
│                                                      │
│  ┌───────────────────────────────────────────────┐  │
│  │           /uploads (local filesystem)          │  │
│  │           Portfolio images, team photos         │  │
│  └───────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────┘
```

---

## 5. Backend API Specification

### 5.1 Database Schema (Drizzle ORM + SQLite)

```typescript
// shared/schema.ts
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const projects = sqliteTable('projects', {
  id: text('id').primaryKey(),
  title_en: text('title_en').notNull(),
  title_kh: text('title_kh'),
  category: text('category').notNull(),  // 'Corporate' | 'Events' | etc.
  date: text('date').notNull(),
  cover_image: text('cover_image').notNull(),
  description_en: text('description_en').notNull(),
  description_kh: text('description_kh'),
  created_at: integer('created_at', { mode: 'timestamp' }).notNull(),
});

export const projectImages = sqliteTable('project_images', {
  id: text('id').primaryKey(),
  project_id: text('project_id').notNull().references(() => projects.id),
  url: text('url').notNull(),
  sort_order: integer('sort_order').default(0),
});

export const services = sqliteTable('services', {
  id: text('id').primaryKey(),
  title_en: text('title_en').notNull(),
  title_kh: text('title_kh'),
  description_en: text('description_en').notNull(),
  description_kh: text('description_kh'),
  icon: text('icon').notNull(),          // icon name from lucide
  price_start: text('price_start'),
  sort_order: integer('sort_order').default(0),
});

export const serviceFeatures = sqliteTable('service_features', {
  id: text('id').primaryKey(),
  service_id: text('service_id').notNull().references(() => services.id),
  feature_en: text('feature_en').notNull(),
  feature_kh: text('feature_kh'),
});

export const teamMembers = sqliteTable('team_members', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  role_en: text('role_en').notNull(),
  role_kh: text('role_kh'),
  bio_en: text('bio_en').notNull(),
  bio_kh: text('bio_kh'),
  image: text('image').notNull(),
  sort_order: integer('sort_order').default(0),
});

export const contactSubmissions = sqliteTable('contact_submissions', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  company: text('company'),
  email: text('email').notNull(),
  phone: text('phone'),
  service_interest: text('service_interest'),
  message: text('message').notNull(),
  created_at: integer('created_at', { mode: 'timestamp' }).notNull(),
  is_read: integer('is_read', { mode: 'boolean' }).default(false),
});

export const siteSettings = sqliteTable('site_settings', {
  key: text('key').primaryKey(),       // 'company_name', 'phone', 'email', etc.
  value_en: text('value_en').notNull(),
  value_kh: text('value_kh'),
});
```

### 5.2 API Endpoints

```
GET    /api/projects              → List all projects (with pagination & category filter)
GET    /api/projects/:id          → Get single project with images
POST   /api/projects              → Create project (admin, future)
PUT    /api/projects/:id          → Update project (admin, future)
DELETE /api/projects/:id          → Delete project (admin, future)

GET    /api/services              → List all services with features
GET    /api/services/:id          → Get single service

GET    /api/team                  → List all team members

POST   /api/contact               → Submit contact form
GET    /api/contact               → List submissions (admin, future)

GET    /api/settings              → Get all site settings
PUT    /api/settings/:key         → Update a setting (admin, future)

POST   /api/upload                → Upload image file (returns URL)
```

### 5.3 Example Hono API Code

```typescript
// server/index.ts
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from '../shared/schema';

const sqlite = new Database('mycut.db');
const db = drizzle(sqlite, { schema });

const app = new Hono();

// Middleware
app.use('/api/*', cors());

// Routes
app.get('/api/projects', async (c) => {
  const category = c.req.query('category');
  const projects = await db.select().from(schema.projects);
  // filter by category if provided
  return c.json(projects);
});

app.get('/api/projects/:id', async (c) => {
  const id = c.req.param('id');
  const project = await db.select().from(schema.projects).where(eq(schema.projects.id, id));
  const images = await db.select().from(schema.projectImages).where(eq(schema.projectImages.project_id, id));
  return c.json({ ...project[0], images });
});

app.post('/api/contact', async (c) => {
  const body = await c.req.json();
  // validate & insert
  await db.insert(schema.contactSubmissions).values({
    id: crypto.randomUUID(),
    ...body,
    created_at: new Date(),
  });
  return c.json({ success: true });
});

// Start server
serve({ fetch: app.fetch, port: 3001 });
console.log('🚀 API running on http://localhost:3001');
```

**That's it.** ~40 lines for a working API. 🎉

---

## 6. Frontend Specification

### 6.1 Current State (Keep As-Is)
The current React + Vite setup is **perfectly fine** for now. Changes needed:

| Change | Description |
|---|---|
| **Install TailwindCSS properly** | Replace CDN with `npm install tailwindcss` for build-time processing |
| **Add API client** | Create `lib/api.ts` with `fetch()` wrappers |
| **Replace hardcoded data** | Use `useEffect` + `useState` (or React Query) to fetch from API |
| **Update types** | Import shared types from `shared/types.ts` |

### 6.2 Recommended Frontend Libraries (Minimal)

| Library | Purpose | Size |
|---|---|---|
| **@tanstack/react-query** | Data fetching + caching + loading states | ~13KB |
| **zod** | Form validation (shared with backend) | ~13KB |
| *(already installed)* react, react-dom, react-router-dom, lucide-react | — | — |

### 6.3 API Client Example

```typescript
// src/lib/api.ts
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const api = {
  projects: {
    list: (category?: string) =>
      fetch(`${API_BASE}/api/projects${category ? `?category=${category}` : ''}`)
        .then(r => r.json()),
    get: (id: string) =>
      fetch(`${API_BASE}/api/projects/${id}`).then(r => r.json()),
  },
  services: {
    list: () => fetch(`${API_BASE}/api/services`).then(r => r.json()),
  },
  team: {
    list: () => fetch(`${API_BASE}/api/team`).then(r => r.json()),
  },
  contact: {
    submit: (data: ContactForm) =>
      fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then(r => r.json()),
  },
};
```

---

## 7. Integration Layer

### 7.1 Shared Types (Frontend ↔ Backend)

```typescript
// shared/types.ts — Used by BOTH frontend and backend
export interface Project {
  id: string;
  title_en: string;
  title_kh?: string;
  category: ProjectCategory;
  date: string;
  cover_image: string;
  description_en: string;
  description_kh?: string;
  images?: ProjectImage[];
}

export type ProjectCategory =
  | 'Corporate'
  | 'Events'
  | 'Wedding'
  | 'Concert'
  | 'Portrait'
  | 'Government/NGO'
  | 'Product Launch';

export interface ProjectImage {
  id: string;
  url: string;
  sort_order: number;
}

export interface Service {
  id: string;
  title_en: string;
  title_kh?: string;
  description_en: string;
  description_kh?: string;
  icon: string;
  price_start?: string;
  features: ServiceFeature[];
}

export interface ServiceFeature {
  id: string;
  feature_en: string;
  feature_kh?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role_en: string;
  role_kh?: string;
  bio_en: string;
  bio_kh?: string;
  image: string;
}

export interface ContactForm {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  service_interest?: string;
  message: string;
}

export interface ApiResponse<T> {
  data: T;
  meta?: {
    total: number;
    page: number;
    limit: number;
  };
}
```

### 7.2 Monorepo Structure

Use a simple **npm workspaces** monorepo to share types:

```jsonc
// root package.json
{
  "name": "mycut-film",
  "workspaces": ["frontend", "server", "shared"]
}
```

---

## 8. Migration Path to Next.js

When you're ready to switch the frontend to Next.js, here's exactly what changes:

### What Stays the Same ✅
| Item | Notes |
|---|---|
| **Hono API** | Runs independently, no changes |
| **SQLite + Drizzle** | No changes |
| **All React components** | Copy directly |
| **TailwindCSS styles** | Works identically |
| **Shared types** | No changes |
| **API client** | Minor URL change (`NEXT_PUBLIC_API_URL`) |
| **translations.ts** | Copy directly |
| **components/ui.tsx** | Copy directly |

### What Changes 🔄

| Before (Vite) | After (Next.js) | Effort |
|---|---|---|
| `react-router-dom` HashRouter | Next.js `app/` directory routing | ~2 hours |
| `src/pages/Home.tsx` | `app/page.tsx` | Rename + minor refactor |
| `src/pages/Portfolio.tsx` | `app/portfolio/page.tsx` | Rename + minor refactor |
| `src/pages/Services.tsx` | `app/services/page.tsx` | Rename + minor refactor |
| `src/pages/About.tsx` | `app/about/page.tsx` | Rename + minor refactor |
| `src/pages/Contact.tsx` | `app/contact/page.tsx` | Rename + minor refactor |
| `App.tsx` (Router + Layout) | `app/layout.tsx` | Extract Header/Footer |
| Client-side fetch | Server Components + fetch | Moderate refactor |
| `import.meta.env.VITE_*` | `process.env.NEXT_PUBLIC_*` | Find & replace |

### Migration Steps
```
1. npx create-next-app@latest mycut-next --typescript --tailwind --app --src-dir
2. Copy shared/ and server/ directories (unchanged)
3. Copy components/ui.tsx → src/components/ui.tsx
4. Copy translations.ts → src/lib/translations.ts
5. Convert pages: pages/Home.tsx → app/page.tsx (remove react-router imports)
6. Extract Header + Footer from App.tsx → app/layout.tsx
7. Update env vars: VITE_* → NEXT_PUBLIC_*
8. Convert data fetching to Server Components where possible
9. Done! 🎉
```

**Estimated migration time: 4-8 hours** for an experienced developer.

---

## 9. Development Timeline Estimate

### Phase 1: Backend API (1-2 days)
| Task | Time |
|---|---|
| Set up Hono + SQLite + Drizzle | 2 hours |
| Define schema & run migrations | 1 hour |
| Build CRUD endpoints (projects, services, team) | 3 hours |
| Contact form endpoint + validation | 1 hour |
| Image upload endpoint | 1 hour |
| Seed database with mock data | 1 hour |
| **Total** | **~9 hours** |

### Phase 2: Frontend Integration (1 day)
| Task | Time |
|---|---|
| Install TailwindCSS properly (replace CDN) | 30 min |
| Create API client (`lib/api.ts`) | 30 min |
| Set up React Query | 30 min |
| Connect all 5 pages to API | 3 hours |
| Loading states + error handling | 1 hour |
| **Total** | **~5.5 hours** |

### Phase 3: Polish & Deploy (0.5 day)
| Task | Time |
|---|---|
| Environment configuration | 30 min |
| Dockerize (frontend + backend) | 1 hour |
| Test deployment | 1 hour |
| **Total** | **~2.5 hours** |

### 📊 Grand Total: **~3-4 days**

---

## 10. Folder Structure

```
mycut-film/
├── package.json                  # Root workspace config
├── docker-compose.yml            # Development & production containers
├── .env                          # Environment variables
│
├── shared/                       # Shared code (frontend + backend)
│   ├── package.json
│   ├── types.ts                  # TypeScript interfaces
│   └── schema.ts                 # Drizzle ORM schema
│
├── server/                       # Backend API
│   ├── package.json
│   ├── tsconfig.json
│   ├── src/
│   │   ├── index.ts              # Hono app entry point
│   │   ├── routes/
│   │   │   ├── projects.ts       # /api/projects routes
│   │   │   ├── services.ts       # /api/services routes
│   │   │   ├── team.ts           # /api/team routes
│   │   │   ├── contact.ts        # /api/contact routes
│   │   │   ├── settings.ts       # /api/settings routes
│   │   │   └── upload.ts         # /api/upload routes
│   │   ├── db/
│   │   │   ├── index.ts          # Database connection
│   │   │   ├── migrate.ts        # Migration runner
│   │   │   └── seed.ts           # Seed data
│   │   └── middleware/
│   │       ├── cors.ts
│   │       └── auth.ts           # Future: admin auth
│   ├── drizzle/
│   │   └── migrations/           # Auto-generated migrations
│   ├── uploads/                  # Uploaded images
│   └── mycut.db                  # SQLite database file
│
├── frontend/                     # React + Vite (current mock_mya)
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── tailwind.config.ts
│   ├── index.html
│   ├── src/
│   │   ├── index.tsx
│   │   ├── App.tsx
│   │   ├── lib/
│   │   │   ├── api.ts            # API client
│   │   │   └── utils.ts          # cn() helper etc.
│   │   ├── components/
│   │   │   └── ui.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── About.tsx
│   │   │   └── Contact.tsx
│   │   ├── hooks/
│   │   │   └── useLanguage.ts
│   │   ├── context/
│   │   │   └── LanguageContext.tsx
│   │   └── i18n/
│   │       └── translations.ts
│   └── public/
│       └── images/               # Static assets
│
└── README.md                     # Project documentation
```

---

## 11. Deployment Strategy

### Option A: Simple VPS (Cheapest — $5/month)
```bash
# Server setup
npm run build           # Build frontend
pm2 start server/       # Run Hono API with PM2
nginx → proxy to :3001  # Serve frontend static + proxy API
```

### Option B: Docker (Recommended)
```yaml
# docker-compose.yml
services:
  api:
    build: ./server
    ports: ["3001:3001"]
    volumes:
      - ./data:/app/data        # SQLite persistence
      - ./uploads:/app/uploads  # Image persistence

  frontend:
    build: ./frontend
    ports: ["3000:80"]
    # Nginx serving static build
```

### Option C: Serverless (When migrating to Next.js)
```
Frontend: Vercel (free tier)
API: Cloudflare Workers (Hono runs natively on Workers)
Database: Turso (SQLite edge database, free tier)
Images: Cloudflare R2 (free tier up to 10GB)
```

---

## Summary: What to Install

```bash
# Backend
npm install hono @hono/node-server better-sqlite3 drizzle-orm
npm install -D drizzle-kit @types/better-sqlite3 tsx

# Frontend (add to existing)
npm install @tanstack/react-query zod
npm install -D tailwindcss postcss autoprefixer

# Shared types — just TypeScript, no extra deps
```

**Total new dependencies: 8 runtime + 5 dev = 13 packages**

---

<div align="center">

### 💡 TL;DR

**Use Hono + SQLite + Drizzle for the API (tiny, fast, TypeScript).**
**Keep React + Vite for now.**
**When ready, swap frontend to Next.js in 4-8 hours — the API doesn't change at all.**

*Build time: ~3-4 days. Migration to Next.js: ~1 day.*

</div>
