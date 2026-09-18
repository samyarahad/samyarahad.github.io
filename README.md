# Pixel & Ping — Network management without the noise

Marketing & showcase site for **Pixel & Ping**, a network management product.
Built with Next.js 16, Tailwind CSS 4 and Framer Motion, deployed to GitHub Pages
as a fully static export.

**Live:** https://samyarahad.github.io/

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4 + shadcn/ui primitives
- Framer Motion for scroll reveals and tab transitions
- Hand-built SVG charts and product mockups (no chart library)

## Development

```bash
bun install
bun run dev        # dev server on :3000
bun run lint       # eslint
```

## Deploy (GitHub Pages)

The site ships as a static export. `scripts/build-static.sh` switches
`next.config.ts` into export mode (`NEXT_STATIC_EXPORT=1`), builds into
`./out`, and adds `.nojekyll` so `_next/` assets are served.

On every push to `main`, the GitHub Action in
`.github/workflows/deploy.yml` rebuilds the site and force-pushes the
result to the `gh-pages` branch, which GitHub Pages serves.

Manual rebuild:

```bash
bash scripts/build-static.sh   # output in ./out
```

## Structure

```
src/components/site/     all page sections & product mockups
  navbar-hero.tsx        sticky nav + hero + dashboard centerpiece
  dashboard-mock.tsx     full product dashboard mockup
  product-mocks.tsx      users / servers / scanner / ports / endpoints mocks
  feature-bento.tsx      stats strip + bento feature grid
  product-tour.tsx       interactive tabbed product tour
  sections.tsx           infrastructure, changelog, CTA, footer
```
