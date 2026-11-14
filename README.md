# Stephanie Fernandes

Personal site for Stephanie Fernandes, a design-minded front end developer based in Brazil.

Built with Next.js App Router, React 19, and Tailwind CSS 4. The homepage is a static editorial folio: intro, work, skills, education, languages, extra tidbits, and a small blog, with copy ported from [msfern.dev](https://msfern.dev/).

Posts live in `content/blog/` as Markdown. The two starter posts are placeholders, marked as samples, and can be replaced in place.

## Getting started

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
yarn build
```

`next.config.ts` uses `output: 'export'` so the site can ship as a static `out/` directory (GitHub Pages-friendly) without changing DNS in this repo.
