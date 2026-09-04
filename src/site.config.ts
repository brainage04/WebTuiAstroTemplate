import type { SiteConfig } from '@brainage04/astro-shell/config';

export const siteConfig = {
  siteName: 'WebTUI Astro Template',
  homeTitle: 'WebTUI Astro Template',
  description: 'A dark terminal-inspired Astro starter based on the GifStudio and BakingCookingRecipes patterns.',
  navItems: [
    { name: 'Home', href: '/', match: '/', activeMode: 'exact' },
    { name: 'Features', href: '/#features' },
    { name: 'Quick start', href: '/#quick-start' },
  ],
  sourceHref: 'https://github.com/brainage04/WebTuiAstroTemplate',
  faviconHref: '/pfp.jpg',
  faviconType: 'image/jpeg',
  image: undefined,
  themeColor: '#151515',
  preconnectHrefs: [],
  ownerHref: 'https://github.com/brainage04',
  ownerName: 'brainage04',
  creatorHref: undefined,
  creatorName: undefined,
} as const satisfies SiteConfig;
