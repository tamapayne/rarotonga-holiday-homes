import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rarotongaescapes.com',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => page !== 'https://rarotongaescapes.com/thank-you',
    }),
  ],
  output: 'static',
  trailingSlash: 'never',
});