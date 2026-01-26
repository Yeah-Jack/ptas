# PTAS - Copilot Instructions

## Project Overview

PTAS (Personentransport-Abrechnungsservice) is a German B2B website for a patient transport billing service. The site is built with Next.js 16 in a Turborepo monorepo structure.

## Architecture

```
ptas/
├── apps/web/           # Next.js 16 frontend (port 3001)
│   └── src/
│       ├── app/        # App Router pages (German routes)
│       ├── components/ # React components
│       │   └── ui/     # shadcn/ui components (radix-vega style)
│       └── lib/        # Utilities (cn function)
├── packages/
│   ├── config/         # Shared TypeScript config
│   └── env/            # Environment validation (@t3-oss/env-nextjs)
```

## Key Commands

```bash
bun install              # Install dependencies
bun run dev              # Start dev server (localhost:3001)
bun run dev:web          # Start only web app
bun run build            # Build all apps
bun run check            # Format & lint with Biome (auto-fix)
bun run check-types      # TypeScript type checking
```

## Code Patterns

### Page Structure
All pages follow a consistent section-based layout:
- Hero section with gradient background (`bg-linear-to-br from-primary/5`)
- Content sections alternating `bg-muted/30` backgrounds
- CTA section with `bg-primary text-primary-foreground`
- Consistent footer with legal links

Example: `apps/web/src/app/page.tsx`

### UI Components
- Use shadcn/ui components from `@/components/ui/*`
- Style: `radix-vega` (Radix UI + Tailwind)
- Icons: `lucide-react`
- Class merging: `cn()` from `@/lib/utils`

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
```

### Styling Conventions
- Tailwind CSS 4 with sorted classes (Biome enforces `useSortedClasses`)
- Use `bg-linear-to-br` not `bg-gradient-to-br`
- Tab indentation (not spaces)
- No unused imports (Biome will error)

### Navigation
Add new pages to header in `apps/web/src/components/header.tsx`:
```tsx
const links = [
  { to: "/", label: "Home" },
  { to: "/leistungen", label: "Leistungen" },
  // Add new routes here
] as const;
```

### Language
- All user-facing content is **German**
- HTML lang attribute: `de`
- Route names in German (e.g., `/abrechnung`, `/vorfinanzierung`)

## Linting & Formatting

Biome handles both linting and formatting. Run before committing:
```bash
bun run check
```

Key rules:
- Sorted CSS classes in `cn()`, `clsx()`, `cva()`
- No unused imports/variables
- Exhaustive React hook dependencies (info level)

## Adding shadcn Components

```bash
bunx shadcn@latest add <component>
```

Components are installed to `apps/web/src/components/ui/`.
