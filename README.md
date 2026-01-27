# ptas

[![DeepSource](https://app.deepsource.com/gh/Yeah-Jack/ptas.svg/?label=active+issues&show_trend=true&token=n9DpIqjD19HJCYoG1EkI-vBd)](https://app.deepsource.com/gh/Yeah-Jack/ptas/)

<img width="2552" height="1433" alt="Website Screenshot" src="https://github.com/user-attachments/assets/89884247-e367-4c53-bf87-731b5467dbfe" />


This project was created with [Better-T-Stack](https://github.com/AmanVarshney01/create-better-t-stack), a modern TypeScript stack that combines Next.js, and more.

## Features

- **TypeScript** - For type safety and improved developer experience
- **Next.js** - Full-stack React framework
- **TailwindCSS** - Utility-first CSS for rapid UI development
- **shadcn/ui** - Reusable UI components
- **Biome** - Linting and formatting
- **Turborepo** - Optimized monorepo build system

## Getting Started

First, install the dependencies:

```bash
bun install
```

Then, run the development server:

```bash
bun run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser to see the web application.

## Git Hooks and Formatting

- Format and lint fix: `bun run check`

## Project Structure

```
ptas/
├── apps/
│   ├── web/         # Frontend application (Next.js)
```

## Available Scripts

- `bun run dev`: Start all applications in development mode
- `bun run build`: Build all applications
- `bun run dev:web`: Start only the web application
- `bun run check-types`: Check TypeScript types across all apps
- `bun run check`: Run Biome formatting and linting
