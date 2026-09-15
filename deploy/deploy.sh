#!/usr/bin/env bash
# Run this AS ROOT (or via sudo) on the IONOS VPS to ship a new release:
# pulls the latest commit, installs dependencies, applies any pending
# Prisma migrations, rebuilds the app, and restarts the systemd service.
#
# The checkout/build steps run as the dedicated "xbmediation" system user
# (matching deploy/xbmediation.service's WorkingDirectory); only the final
# service restart needs root.
set -euo pipefail

APP_DIR=/var/www/xbmediation

sudo -u xbmediation bash -c "
  set -euo pipefail
  cd '$APP_DIR'
  git pull
  npm ci
  npx prisma migrate deploy
  npm run build
  # Next.js's built-in image optimizer caches rendered images on disk
  # (default TTL 4h) keyed by URL, independent of the build. If a static
  # asset under public/ changes without a URL/filename change (e.g. a
  # hero photo swap), stale renditions would otherwise keep being served
  # for up to 4 hours after this deploy. Clear it on every release so a
  # changed asset is reflected immediately.
  rm -rf .next/cache/images
"

systemctl restart xbmediation
systemctl status xbmediation --no-pager
