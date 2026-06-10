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
├── components/       # React components + *.module.scss
├── lib/              # API client
├── styles/           # Shared SCSS mixins & variables
└── types/            # TypeScript types
```

Copy `.env.local.example` to `.env.local` and set:

- `NEXT_PUBLIC_API_URL` — your Django API base URL
- `NEXT_PUBLIC_SUPABASE_URL` — your Supabase project URL (for media via `next/image`)

Supabase S3 credentials belong on the **backend** (Render), not in this frontend.
