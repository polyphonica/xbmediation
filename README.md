# XB Mediation

Website for XB Mediation (Xaver Behl), a mediation practice based in Marktheidenfeld/Main-Spessart, Germany. Next.js + TypeScript + Tailwind CSS, with a Postgres-backed contact form and a self-hosted deployment target (IONOS VPS).

All site content is German. See the seven public pages under `src/app/` (Startseite, Familienmediation, Wirtschaftsmediation, Mediation, Über mich, Ablauf & Kosten, Kontakt) plus the legally required Impressum, Datenschutzerklärung and § 36 VSBG notice.

`/admin` lists incoming contact-form leads and lets you update their status. It has its own login (`/admin/login`), a signed session cookie, a logout button, and a settings page (`/admin/settings`) where the business owner can change his own password — no server access needed for that. See "Provisioning the admin password" below for the one-time setup step.

## Stack

- **Framework:** Next.js (App Router) + TypeScript + Tailwind CSS v4
- **Database:** PostgreSQL via Prisma (pinned to the stable 6.x line — Prisma's `latest` tag currently points at an unstable 8.0 release, and 7.x dropped the classic connection-string config for a driver-adapter setup that isn't worth the churn here)
- **Content:** authored in code, not a CMS — see `src/content/*.ts`, one file per page, imported by the matching `src/app/**/page.tsx`. Shared values (nav, footer, contact details) live in `src/content/site.ts`
- **Hosting:** self-hosted on an IONOS VPS, running natively (no Docker) — Postgres and the Next.js app both installed directly on the server, matching how the other apps on that box already run, proxied by its existing host nginx (see `deploy/xbmediation.service`, `nginx/xbmediation.conf`, `deploy/deploy.sh`) — no managed platform (e.g. Vercel) in the loop

## Local development

Requires Node.js and a local Postgres instance.

```bash
npm install
cp .env.example .env        # then fill in DATABASE_URL for your local Postgres, and SESSION_SECRET
npx prisma migrate dev      # creates the Lead and AdminCredential tables
npx tsx scripts/create-admin-password.ts <a-password>   # sets the /admin login password
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Log into `/admin` with the password you just set.

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

1. Postgres is already installed on this VPS (shared with the other apps) — just create this app's own role and database in it:
   ```sql
   sudo -u postgres psql
   CREATE USER xbmediation WITH PASSWORD 'a-real-password';
   CREATE DATABASE xbmediation OWNER xbmediation;
   ```
2. Create a dedicated system user to run the app, and clone the repo into its home directory (matching `deploy/xbmediation.service`'s `WorkingDirectory=/var/www/xbmediation`):
   ```bash
   sudo useradd --system --create-home --home-dir /var/www/xbmediation --shell /usr/sbin/nologin xbmediation
   sudo -u xbmediation git clone https://github.com/polyphonica/xbmediation.git /var/www/xbmediation
   ```
3. In `/var/www/xbmediation`, copy `.env.example` to `.env` and fill in the real `DATABASE_URL` (matching the password from step 1), `NEXT_PUBLIC_SITE_URL="https://xb-mediation.de"`, and a real `SESSION_SECRET` (generate one with `openssl rand -base64 32`).
4. As the `xbmediation` user, install dependencies, run migrations, and build:
   ```bash
   sudo -u xbmediation bash -c 'cd /var/www/xbmediation && npm ci && npx prisma migrate deploy && npm run build'
   ```
5. Install and enable the systemd service:
   ```bash
   sudo cp deploy/xbmediation.service /etc/systemd/system/
   sudo systemctl enable --now xbmediation
   ```
6. Wire up nginx: `nginx/xbmediation.conf` → `/etc/nginx/sites-available/` → symlink into `sites-enabled` → `nginx -t && systemctl reload nginx`. Then enable HTTPS: `sudo certbot --nginx -d xb-mediation.de -d www.xb-mediation.de`.
7. Set the initial `/admin` password (see "Provisioning the admin password" below).

**Subsequent deploys:** run `deploy/deploy.sh` on the VPS (pulls, installs, migrates, rebuilds, restarts the service).

**One-time migration note** (only relevant if this deployment previously had `/admin` protected by nginx Basic Auth — a fresh install never had this, so skip it): after pulling the code that adds application-level login, remove the old `location /admin` Basic Auth block from the live nginx config with `sudo deploy/remove-admin-basic-auth.sh`. It backs up the file first and only reloads nginx if the result passes `nginx -t`.

See `.env.example` for the environment variables the app expects.

## Provisioning the admin password

There's deliberately no public sign-up page for `/admin` — the very first password is set with a one-time script, run as the `xbmediation` user in the project directory:

```bash
sudo -u xbmediation bash -c 'cd /var/www/xbmediation && npx tsx scripts/create-admin-password.ts <a-real-password>'
```

After that, the business owner logs in at `/admin/login` and can change his own password any time via `/admin/settings` — no server access needed. Re-running the script (e.g. if the password is forgotten) safely resets it.

## Backlog (not urgent)

- **SEO follow-ups** beyond the JSON-LD already shipped: Open Graph/Twitter card image for link previews; redirect `www.xb-mediation.de` → `xb-mediation.de` (or vice versa) in nginx so both hostnames don't serve identical content as far as search engines are concerned.
