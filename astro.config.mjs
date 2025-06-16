// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({});

import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'; // ⬅️ ¡Así es como debe ser ahora!

// https://astro.build/config
export default defineConfig({
  output: 'server', // ⬅️ Paso 2a: Configura el tipo de salida como 'server'
  adapter: vercel(), // ⬅️ Paso 2b: Usa el adaptador de Vercel
});