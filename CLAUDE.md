# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CervixDetectAI Home is a standalone static website for a cervical imaging AI-assisted screening platform. Built with Vue 3 + TypeScript + Vite, it uses vite-ssg for static site generation to support SEO and static deployment.

## Commands

```bash
bun run dev          # Start development server (port 5174)
bun run build        # Build static site with vite-ssg
bun run preview      # Preview build output
bun run typecheck    # TypeScript type checking
```

Use `bun` as the preferred package manager. The dev server runs on port 5174 and binds to `0.0.0.0`.

## Architecture

### Routing & Static Generation

- `src/main.ts` uses ViteSSG for static site generation
- `src/router.ts` defines routes and dynamically generates news article routes from `newsArticles`
- Routes use lazy-loaded components with `() => import()`
- Page title is set via route `meta.title`

### Content System

- News articles are stored as Markdown files in `content/news/`
- Each article requires YAML frontmatter with: `title`, `slug`, `excerpt`, `publishedAt`, `cover`, `category`, and optional `featured`
- `src/lib/frontmatter.ts` contains a custom YAML frontmatter parser (no external library)
- `src/lib/news.ts` loads all Markdown files at build time via `import.meta.glob`, parses frontmatter, and exports `newsArticles` array

### Configuration

- Site configuration is centralized in `src/config/site.ts` (brand name, logo, navigation, contact info, etc.)
- Design tokens are in `src/styles/tokens.css` (colors, spacing, typography)

### Component Structure

- `src/components/common/` - Reusable UI components (cards, buttons, badges)
- `src/components/layout/` - Layout components (header, footer, page hero)
- `src/directives/reveal.ts` - Custom `v-reveal` directive for scroll animations

### Adding News Articles

1. Create a new `.md` file in `content/news/`
2. Include required frontmatter fields
3. Place cover images in `public/news/`
4. The build will automatically pick up new articles and generate routes

## Key Files

- `src/config/site.ts` - All site-wide configuration (brand, navigation, contact)
- `src/router.ts` - Route definitions including dynamic news routes
- `src/lib/news.ts` - News content loading and processing
- `src/lib/frontmatter.ts` - YAML frontmatter parser
- `src/styles/tokens.css` - Design system variables
