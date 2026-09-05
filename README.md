# XB Mediation

Website for XB Mediation (Xaver Behl), a mediation practice based in Marktheidenfeld/Main-Spessart, Germany. Next.js + TypeScript + Tailwind CSS, with a Postgres-backed contact form and a self-hosted deployment target (IONOS VPS).

All site content is German. See the seven public pages under `src/app/` (Startseite, Familienmediation, Wirtschaftsmediation, Mediation, Über mich, Ablauf & Kosten, Kontakt) plus the legally required Impressum, Datenschutzerklärung and § 36 VSBG notice.

## Stack

- **Framework:** Next.js (App Router) + TypeScript + Tailwind CSS v4
- **Database:** PostgreSQL via Prisma (pinned to the stable 6.x line — Prisma's `latest` tag currently points at an unstable 8.0 release, and 7.x dropped the classic connection-string config for a driver-adapter setup that isn't worth the churn here)
- **Content:** authored in code, not a CMS — see `src/content/*.ts`, one file per page, imported by the matching `src/app/**/page.tsx`. Shared values (nav, footer, contact details) live in `src/content/site.ts`
- **Hosting:** self-hosted on an IONOS VPS via Docker Compose, proxied by the server's existing host-installed nginx (see `docker-compose.yml`, `Dockerfile`, `nginx/xbmediation.conf`, `deploy/deploy.sh`) — no managed platform (e.g. Vercel) in the loop

## Local development

Requires Node.js and a local Postgres instance (or Docker, see below).

```bash
npm install
cp .env.example .env        # then fill in DATABASE_URL for your local Postgres
npx prisma migrate dev      # creates the Lead table
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Alternatively, run the whole stack (app + Postgres) via Docker Compose, which mirrors the production setup:

```bash
docker compose up
```

## Editing content

Page copy lives in `src/content/<page>.ts` as typed objects (see `src/types/content.ts`), not inline in JSX — edit the relevant content file rather than the page component. Shared design tokens (palette, fonts) are defined in `src/app/globals.css`. Reusable page sections (hero, icon grids, step flows, callouts, CTA banners) are in `src/components/ui/`.

Hero images are currently placeholder SVG art (`src/components/ui/HeroArt.tsx`) standing in for real photography — swap them for `next/image` once licensed photos are available.

## Before going live

Several pieces of real business information are still placeholders, marked `TODO` in the corresponding content files — do not launch without filling these in:

- `src/content/site.ts` — phone number
- `src/content/impressum.ts` — postal address, VAT ID, professional registration details
- `src/content/datenschutz.ts` — postal address, data retention period, hosting provider name
- `src/content/vsbg.ts` — the practice's actual legal stance on consumer dispute resolution (confirm with counsel)
- `src/content/ueber-mich.ts` — exact wording of professional background, training dates, and volunteer roles
- Real stock/licensed photography to replace the placeholder hero art
- A registered domain (site currently assumes `xb-mediation.de` in `nginx/xbmediation.conf` / `.env.example`)

## Deployment

The app runs on a self-managed IONOS VPS behind the server's own host-installed nginx (the same nginx already reverse-proxying the other apps on that box — this is not a Dockerized nginx):

- `Dockerfile` — multi-stage build, Next.js standalone output
- `docker-compose.yml` — `app` + `db` (Postgres, internal network only); `app` publishes its port to `127.0.0.1` only (see `APP_PORT` in `.env.example`) for nginx to proxy to
- `nginx/xbmediation.conf` — server block to add to the VPS's nginx `sites-available`; serves plain HTTP until a domain exists, then `certbot --nginx` adds HTTPS (see comments in the file)
- `docker-compose.override.yml` / `Dockerfile.dev` — local dev variant with hot reload
- `deploy/deploy.sh` — run on the VPS to pull, rebuild, restart, and apply pending Prisma migrations

See `.env.example` for the environment variables both the app and `docker-compose.yml` itself expect.
