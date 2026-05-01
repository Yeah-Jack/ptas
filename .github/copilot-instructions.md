# PTAS - Copilot Instructions

## Project Overview

PTAS (Personentransport-Abrechnungsservice) is a German B2B website for a patient transport billing service. The site is built with Next.js 16 in a Turborepo monorepo structure.

## Architecture

```
ptas/
├── src/           # Next.js 16 frontend (port 3000)
│   ├── app/        # App Router pages (German routes)
│   ├── components/ # React components
│   │   └── ui/     # shadcn/ui components (radix-vega style)
│   └── lib/        # Utilities (cn function)
```

## Key Commands

```bash
bun install              # Install dependencies
bun run dev              # Start dev server (localhost:3000)
bun run build            # Build for production
bun run start            # Start in production mode
bun run check            # Format & lint with Biome (auto-fix)
```

## Code Patterns

### Page Structure
All pages follow a consistent section-based layout:
- Hero section with gradient background (`bg-linear-to-br from-primary/5`)
- Content sections alternating `bg-muted/30` backgrounds
- CTA section with `bg-primary text-primary-foreground`

Example: `src/app/page.tsx`

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

### Navigation
Add new pages to header in `src/components/header.tsx`:
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

## Adding shadcn Components

```bash
bunx --bun shadcn@latest add [component]
```

Components are installed to `src/components/ui`.
