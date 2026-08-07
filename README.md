# matthewyang.io

Personal site. Astro, static output, deployed to GitHub Pages at
[www.matthewyang.io](https://www.matthewyang.io).

## Develop

```sh
npm install
npm run dev      # localhost:4321
npm run build    # static build to dist/
```

## Writing a post

Add a Markdown file to `src/content/writing/`, named for its date. The route
comes from the filename, so `2026-05-14.md` publishes at `/writing/2026-05-14`.

```md
---
title: "What I Learnt About SSH by Fixing My Own Broken Setup"
date: "2026-05-07"
description: "Learning and unlearning SSH configuration"
---
```

`description` is optional; `title` and `date` are not. Work entries live in
`src/content/work/` and additionally require a `hero` image path. Both schemas
are defined in `src/content.config.ts`.

## Deploying

Pushing to `main` builds and deploys via `.github/workflows/deploy.yml`. Pull
requests run the same build without deploying, and `main` requires that build to
pass before merging.

Dependabot opens one grouped npm PR a week. Merge it once the build check is
green.
