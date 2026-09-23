import type { SiteConfig } from '@brainage04/astro-shell/config';

export const siteConfig = {
  siteName: 'WebTUI Astro Template',
  description: 'A dark terminal-inspired Astro starter for WebTUI-styled static sites.',
  navItems: [
    { name: 'Home', href: '/', activeMode: 'exact' },
    { name: 'Features', href: '/#features' },
    { name: 'Quick start', href: '/#quick-start' },
  ],
  sourceHref: 'https://github.com/brainage04/WebTuiAstroTemplate',
  faviconHref: '/pfp.webp',
  faviconType: 'image/webp',
  ownerHref: 'https://github.com/brainage04',
  ownerName: 'brainage04',
} as const satisfies SiteConfig;
