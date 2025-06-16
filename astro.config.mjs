// @ts-check
import { defineConfig } from 'astro/config';

import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'; // La importación debe ser así

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
});