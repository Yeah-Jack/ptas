# PTAS

<!-- BEGIN:nextjs-agent-rules -->
## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project Overview

PTAS (Personentransport-Abrechnungsservice) is a German B2B website for a patient transport billing service. The site is built with Next.js 16 and Tailwind CSS.

## Architecture

```text
ptas/           # Next.js 16 frontend (port 3000)
├── app/        # App Router pages (German routes)
├── components/ # React components
│   └── ui/     # shadcn/ui components
└── lib/        # Utilities (cn function)
```

## Key Commands

```bash
bun install              # Install dependencies
bun run dev              # Start dev server (localhost:3000)
bun run build            # Build for production
bun run start            # Start in production mode
bun run lint            # Format & lint with Biome (auto-fix)
```

## Code Patterns

### UI Components

- Use shadcn/ui components from `@/components/ui/*`
- Icons: `lucide-react`
- Class merging: `cn()` from `@/lib/utils`

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
```

### Styling Conventions

- Tailwind CSS 4

### Language

- All user-facing content is **German**
- HTML lang attribute: `de`
- Route names in German (e.g., `/abrechnung`, `/vorfinanzierung`)

## Adding shadcn Components

```bash
bunx --bun shadcn@latest add [component]
```

Components are installed to `components/ui`.
