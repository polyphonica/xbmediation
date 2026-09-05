# XB Mediation

Website for XB Mediation (Xaver Behl), a mediation practice based in Marktheidenfeld/Main-Spessart, Germany. Next.js + TypeScript + Tailwind CSS, with a Postgres-backed contact form and a self-hosted deployment target (IONOS VPS).

All site content is German. See the seven public pages under `src/app/` (Startseite, Familienmediation, Wirtschaftsmediation, Mediation, Über mich, Ablauf & Kosten, Kontakt) plus the legally required Impressum, Datenschutzerklärung and § 36 VSBG notice.

## Stack

- **Framework:** Next.js (App Router) + TypeScript + Tailwind CSS v4
- **Database:** PostgreSQL via Prisma (pinned to the stable 6.x line — Prisma's `latest` tag currently points at an unstable 8.0 release, and 7.x dropped the classic connection-string config for a driver-adapter setup that isn't worth the churn here)
- **Content:** authored in code, not a CMS — see `src/content/*.ts`, one file per page, imported by the matching `src/app/**/page.tsx`. Shared values (nav, footer, contact details) live in `src/content/site.ts`
- **Hosting:** self-hosted on an IONOS VPS, running natively (no Docker) — Postgres and the Next.js app both installed directly on the server, matching how the other apps on that box already run, proxied by its existing host nginx (see `deploy/xbmediation.service`, `nginx/xbmediation.conf`, `deploy/deploy.sh`) — no managed platform (e.g. Vercel) in the loop

## Local development

Requires Node.js and a local Postgres instance.

```bash
npm install
cp .env.example .env        # then fill in DATABASE_URL for your local Postgres
npx prisma migrate dev      # creates the Lead table
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

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

The domain `xb-mediation.de` is registered and DNS already points at the VPS; HTTPS still needs to be enabled via `certbot --nginx` there (see Deployment below).

## Deployment

The app runs directly on a self-managed IONOS VPS (Ubuntu) — no Docker, no managed platform. It's a deliberate match for how the other apps on that server (also Node.js/nginx-based) are already run. Node.js is expected to already be installed system-wide at `/usr/bin/node`/`/usr/bin/npm` (true on this VPS already, shared with the other apps); the app listens on port 3000 by default (`next start`'s default) — check that's not already taken by another app before deploying (`sudo ss -tlnp | grep 3000`).

**One-time server setup:**

1. Install Postgres natively (`sudo apt install postgresql`), then create the app's role and database:
   ```sql
   sudo -u postgres psql
   CREATE USER xbmediation WITH PASSWORD 'a-real-password';
   CREATE DATABASE xbmediation OWNER xbmediation;
   ```
2. Create a dedicated system user to run the app, and clone the repo into its home directory (matching `deploy/xbmediation.service`'s `WorkingDirectory=/opt/xbmediation`):
   ```bash
   sudo useradd --system --create-home --home-dir /opt/xbmediation --shell /usr/sbin/nologin xbmediation
   sudo -u xbmediation git clone https://github.com/polyphonica/xbmediation.git /opt/xbmediation
   ```
3. In `/opt/xbmediation`, copy `.env.example` to `.env` and fill in the real `DATABASE_URL` (matching the password from step 1) and `NEXT_PUBLIC_SITE_URL="https://xb-mediation.de"`.
4. As the `xbmediation` user, install dependencies, run migrations, and build:
   ```bash
   sudo -u xbmediation bash -c 'cd /opt/xbmediation && npm ci && npx prisma migrate deploy && npm run build'
   ```
5. Install and enable the systemd service:
   ```bash
   sudo cp deploy/xbmediation.service /etc/systemd/system/
   sudo systemctl enable --now xbmediation
   ```
6. Wire up nginx: `nginx/xbmediation.conf` → `/etc/nginx/sites-available/` → symlink into `sites-enabled` → `nginx -t && systemctl reload nginx`. Then enable HTTPS: `sudo certbot --nginx -d xb-mediation.de -d www.xb-mediation.de`.

**Subsequent deploys:** run `deploy/deploy.sh` on the VPS (pulls, installs, migrates, rebuilds, restarts the service).

See `.env.example` for the environment variables the app expects.
