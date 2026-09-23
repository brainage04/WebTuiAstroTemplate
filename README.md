# WebTuiAstroTemplate

Minimal Astro starter that uses AstroShell and WebTUI for a shared terminal-style layout, navigation, metadata, and base-path-safe links.

## Requirements

- Node.js 24
- npm

## Development

```bash
npm ci
npm run dev
```

The `astroShell` integration in `astro.config.mjs` supplies the layout, navigation, 404 page, and GitHub Pages site/base handling. Its `config` option takes the shared site metadata and navigation from `src/site.config.ts`, and its `styles` option lists stylesheets that load after the shell's styles. Keep project-specific presentation in `src/styles/site.css`, and add a theme such as `@brainage04/astro-shell/themes/rose.css` to `styles` before it if you want one. Pages import `@brainage04/astro-shell/components/SiteLayout.astro` directly.

## Validation

```bash
npm run check
npm run lint
npm run format:check
npm run build
```

## Deployment

Pushes to `main` are validated and deployed to GitHub Pages by AstroShell's reusable workflows. The deployment derives the correct site and base path for either a user site or a project site.
