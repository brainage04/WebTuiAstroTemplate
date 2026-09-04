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

Update shared site metadata and navigation in `src/site.config.ts`; keep project-specific presentation in `src/styles/site.css`.

## Validation

```bash
npm run check
npm run lint
npm run format:check
npm run build
```

## Deployment

Pushes to `main` are validated and deployed to GitHub Pages through GitHub Actions. The deployment workflow derives the correct site and base path for either a user site or a project site.
