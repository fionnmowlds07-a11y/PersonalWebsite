import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fionnmowlds.website',
  // Fetch a page as soon as a link is hovered or focused, so the click feels instant.
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  devToolbar: { enabled: false },
});
