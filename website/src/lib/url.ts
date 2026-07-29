/**
 * Prefix a site-root-relative path with Astro's configured `base`.
 *
 * The site deploys to a GitHub Pages project URL (/webpage), so every internal
 * href and asset src has to carry that prefix. BASE_URL is "/webpage/" in this
 * config and "/" in a bare local build, so normalise the slashes either way.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const suffix = path.startsWith('/') ? path : `/${path}`;
  return `${base}${suffix}`;
}
