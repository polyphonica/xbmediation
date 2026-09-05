@AGENTS.md

# XB Mediation — project notes

German-language marketing site for a mediation practice. Next.js (App Router) + TypeScript + Tailwind v4 + Prisma/Postgres. Full context in `README.md`; implementation plan in this repo's history / the original plan doc.

- **Content lives in `src/content/*.ts`**, not inline in JSX — one typed file per page, imported by the matching `src/app/**/page.tsx`. Edit content there, not in the page components.
- **Design tokens** (navy/olive/cream/sage palette, Fraunces + Public Sans fonts) are defined in `src/app/globals.css` via Tailwind v4's `@theme` block.
- **Prisma is pinned to the 6.x line** (currently 6.19.3) deliberately — do not upgrade to 7.x/8.x without checking: 7.x removed the classic `datasource { url }` config in favor of driver adapters, and 8.x (the `latest` npm tag) is an unstable release pulling in an unrelated Cloudflare Workers toolchain.
- **Hosting target is a self-managed IONOS VPS, running natively — no Docker.** Postgres and the Next.js app (via `next start`) are both installed directly on the server and managed by systemd, matching how the client's other apps on that box already run; the server's existing host nginx reverse-proxies to `localhost:3000`. See `deploy/xbmediation.service`, `nginx/xbmediation.conf`, `deploy/deploy.sh`, and the Deployment section of `README.md`. (An earlier version of this project used Docker Compose + Caddy; that was deliberately dropped in favor of matching the rest of the server's conventions — don't reintroduce it without checking with the user first.)
- **Hero images are placeholder SVG art** (`src/components/ui/HeroArt.tsx`), standing in for real photography until licensed stock/real photos are sourced.
- Several content files carry `TODO` comments for real business details (address, phone, legal/registration info, VSBG stance) that must be filled in before launch — see the "Before going live" section in `README.md`.
- Booking/scheduling and Stripe payments are explicitly out of scope for the current build — deferred to a separate spec.
- **`/admin`** (`src/app/admin/`) lists leads and lets their status be updated via a server action (`src/app/admin/actions.ts`). It has no login of its own — access control is HTTP Basic Auth at the nginx level (`location /admin` in `nginx/xbmediation.conf`, backed by `/etc/nginx/.htpasswd` on the server). This means credentials are managed by whoever has server access (via `htpasswd`), not self-service by the client. The page sets `robots: { index: false }` and is excluded in `robots.ts`, but that's defense-in-depth, not the actual access control.
- **JSON-LD structured data** (`src/lib/structured-data.ts`, rendered in `layout.tsx`) is built entirely from `src/content/site.ts` so it stays in sync once the phone-number TODO there is resolved. It deliberately omits `address` until the real street address is confirmed — see the TODO in `src/content/impressum.ts`.
