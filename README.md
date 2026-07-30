# Portfolio

Personal portfolio site built with **Next.js**, **TypeScript**, and **SCSS modules**.  
English / Polish UI via a small typed i18n layer.

## Stack

- Next.js (App Router)
- React 19
- TypeScript (strict)
- Sass / CSS modules
- Deployed on Vercel (typical)

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run format` | Prettier write |
| `npm run format:check` | Prettier check |

## Setup

```bash
npm install
npm run dev
```

Optional `.env.local` (only if you load images from Supabase):

```bash
cp .env.local.example .env.local
```

## Project structure

```
src/
├── app/              # App Router pages
├── components/       # UI
├── data/             # Structural portfolio & project records
├── hooks/            # Localized data hooks
├── i18n/             # Translations & project copy
├── lib/              # Helpers
├── providers/        # Language context
├── styles/           # SCSS modules
└── types/            # Shared TypeScript types
public/
└── projects/         # Thumbnails, PDFs, secondary media
```

## Adding a project

1. Add a record in `src/data/projects.ts` (slug, tech, links, media paths).
2. Add EN + PL copy in `src/i18n/projectContent.ts`.
3. Drop media into `public/projects/` (prefer WebP/PNG under ~1–2 MB for thumbs).

## Notes on large assets

Some PDFs and videos under `public/projects/` are large. For a lean public clone, consider Git LFS or hosting heavy files externally and linking to them from `projectUrl` / `pdf`.

## License

MIT — see [LICENSE](./LICENSE).
