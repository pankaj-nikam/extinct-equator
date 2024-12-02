// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import node from '@astrojs/node';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), react()],
  output: 'hybrid',

  adapter: node({
    mode: 'standalone'
  })
});