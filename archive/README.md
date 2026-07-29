# Archive — v1 site

The original hand-written site that lived at `manse404.github.io/webpage` until
the Astro rebuild. Kept for reference; **not deployed**.

Plain HTML/CSS/JS, no build step: `index.html`, `projects.html`, `css/styles.css`,
`js/main.js`, and `images/`.

## Viewing it

Open `index.html` directly, or serve the folder:

```bash
cd archive && python3 -m http.server 8000
```

Note the "Download CV" link points at `files/`, which stayed at the repository
root — that one link will 404 when browsing the archive in isolation.

## Restoring it

The complete working tree as it stood on the day of the rebuild, including the
last uncommitted edits, is tagged:

```bash
git show v1-legacy --stat     # what was in it
git checkout v1-legacy        # detached checkout of the whole v1 repo
```

The live site is now built from `../website`.
