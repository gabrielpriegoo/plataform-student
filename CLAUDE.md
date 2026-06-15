# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Atheneum** — A university study platform in Portuguese with subject summaries, multiple-choice questions, and performance tracking. Built with TanStack Start for full-stack React with SSR.

## Development Commands

```bash
bun install          # Install dependencies
bun run dev         # Start development server
bun run build       # Production build
bun run build:dev   # Development build (for preview)
bun run preview     # Preview production build
bun run lint        # Run ESLint
bun run format      # Format code with Prettier
```

## Architecture

### Stack
- **Framework**: TanStack Start (SSR-enabled React framework)
- **Routing**: TanStack React Router with file-based routing (`src/routes/`)
- **State**: TanStack React Query
- **Styling**: Tailwind CSS v4 + shadcn/ui components (Radix UI primitives)
- **Backend**: Supabase (PostgreSQL + Auth)
- **Package Manager**: Bun

### Key Files
- `src/router.tsx` — Router configuration with QueryClient
- `src/server.ts` — Custom SSR server entry with error handling
- `src/routes/__root.tsx` — Root layout with sidebar, header, and providers
- `src/lib/subjects.ts` — Subject data with questions (source of truth for content)
- `src/lib/progress.ts` — localStorage-based attempt tracking (`uni-quiz-attempts-v1`)

### Routes
| Path | File | Purpose |
|------|------|---------|
| `/` | `routes/index.tsx` | Home with subject cards and stats |
| `/desempenho` | `routes/desempenho.tsx` | Performance overview across all subjects |
| `/materias/$slug` | `routes/materias.$slug.tsx` | Subject detail with summary, questions, results |

### Supabase Integration
- `src/integrations/supabase/client.ts` — Client-side auth client (VITE_ prefixed env vars)
- `src/integrations/supabase/client.server.ts` — Server-side admin client (bypasses RLS)
- Auth middleware in `src/integrations/supabase/auth-middleware.ts`

### Adding New Subjects
Edit `src/lib/subjects.ts` — add objects to the `subjects` array with:
```ts
{
  slug: "unique-slug",
  name: "Subject Name",
  category: "Category",
  icon: "emoji",
  accent: "from-color-500/20 to-color-500/10",
  summary: "Description text",
  topics: ["Topic 1", "Topic 2"],
  questions: [{ id, prompt, options, correctIndex, explanation }]
}
```

### Adding New Questions
Add to the `questions` array in the relevant subject object in `src/lib/subjects.ts`.

### Environment Variables
Set in `.env`:
- `SUPABASE_URL` / `VITE_SUPABASE_URL`
- `SUPABASE_PUBLISHABLE_KEY` / `VITE_SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (server-only)

## Configuration Notes

- `vite.config.ts` uses `@lovable.dev/vite-tanstack-config` — do NOT add plugins manually that are already included (tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro)
- Route tree is auto-generated in `routeTree.gen.ts` — do not edit manually
- Path alias `@/*` maps to `src/*` (configured in tsconfig.json)
