# Portfolio Frontend

Next.js app with TypeScript and SCSS modules.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — run production build

## Structure

```
src/
├── app/              # App router pages & global SCSS
├── components/       # React components
├── data/             # Portfolio & project data
├── hooks/            # Data hooks (portfolio, projects)
├── i18n/             # Translations & project content
├── lib/              # Project helpers
├── styles/           # Shared SCSS modules
└── types/            # TypeScript types
```

Projects are frontend-only:

- Structure & links: `src/data/projects.ts`
- Translated copy: `src/i18n/projectContent.ts`
- Media: `public/projects/`

Optional `.env.local` — only if you use Supabase-hosted remote images:

- `NEXT_PUBLIC_SUPABASE_URL`
