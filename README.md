# AMPO Realty

A premium luxury real estate platform built with Next.js, Tailwind CSS, Framer Motion, TypeScript, Zustand, and a Node.js Express backend.

## Architecture

- Frontend: `Next.js` + `Tailwind CSS` + `Framer Motion`
- State: `Zustand`
- Backend: `Express` + secure middleware + JWT auth scaffolding
- Database: `PostgreSQL` schema defined with `Prisma`
- Deployment targets: Vercel for frontend, Railway / Supabase for backend and database

## Getting started

1. Install dependencies:
   ```bash
   npm install
   cd server && npm install
   ```

2. Copy environment variables:
   ```bash
   cp .env.example .env
   ```

3. Start the frontend and backend:
   ```bash
   npm run dev
   npm run server:dev
   ```

## Files and features

- `app/page.tsx` — premium luxury homepage with AI search, curated properties, investment insights, and testimonials
- `app/api/search/route.ts` — semantic search endpoint for natural language queries
- `app/api/ai/route.ts` — AI recommendation preview endpoint
- `server/src/` — Express API scaffold with auth and property routes
- `server/prisma/schema.prisma` — PostgreSQL schema for users, properties, inquiries, and roles

## Next steps

- finish backend database integration using Prisma / PostgreSQL
- add full authentication, role-based route protection, and session control
- build agent portal, comparison dashboards, and real-time Socket.io notifications
- integrate Cloudinary / AWS S3 for image storage
- deploy frontend to Vercel and backend to Railway/Supabase
