@AGENTS.md

# XB Mediation — project notes

German-language marketing site for a mediation practice. Next.js (App Router) + TypeScript + Tailwind v4 + Prisma/Postgres. Full context in `README.md`; implementation plan in this repo's history / the original plan doc.

- **Content lives in `src/content/*.ts`**, not inline in JSX — one typed file per page, imported by the matching `src/app/**/page.tsx`. Edit content there, not in the page components.
- **Design tokens** (navy/olive/cream/sage palette, Fraunces + Public Sans fonts) are defined in `src/app/globals.css` via Tailwind v4's `@theme` block.
- **Prisma is pinned to the 6.x line** (currently 6.19.3) deliberately — do not upgrade to 7.x/8.x without checking: 7.x removed the classic `datasource { url }` config in favor of driver adapters, and 8.x (the `latest` npm tag) is an unstable release pulling in an unrelated Cloudflare Workers toolchain.
- **Hosting target is a self-managed IONOS VPS** (Docker Compose + Caddy), not a managed platform — see `docker-compose.yml`, `Dockerfile`, `Caddyfile`, `deploy/deploy.sh`.
- **Hero images are placeholder SVG art** (`src/components/ui/HeroArt.tsx`), standing in for real photography until licensed stock/real photos are sourced.
- Several content files carry `TODO` comments for real business details (address, phone, legal/registration info, VSBG stance) that must be filled in before launch — see the "Before going live" section in `README.md`.
- Booking/scheduling and Stripe payments are explicitly out of scope for the current build — deferred to a separate spec.
