// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://manse404.github.io/webpage/
// `base` must match the repository name so assets and links resolve correctly.
export default defineConfig({
  site: 'https://manse404.github.io',
  base: '/webpage',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
