#!/usr/bin/env bash
# Run this ON THE IONOS VPS (as root/sudo) to remove the old HTTP Basic Auth
# location block for /admin from the live nginx config — /admin now has its
# own application-level login (see src/app/admin/), so nginx no longer needs
# to gate it separately.
#
# Safe to re-run: does nothing if the block is already gone. Backs up the
# live config first, and only reloads nginx if `nginx -t` passes on the
# result.
set -euo pipefail

CONF=/etc/nginx/sites-available/xbmediation

if [ ! -f "$CONF" ]; then
  echo "error: $CONF not found." >&2
  exit 1
fi

if ! grep -q "location /admin" "$CONF"; then
  echo "No location /admin block found in $CONF — nothing to do."
  exit 0
fi

BACKUP="$CONF.bak.$(date +%Y%m%d%H%M%S)"
cp "$CONF" "$BACKUP"
echo "Backed up existing config to $BACKUP"

# Removes the `location /admin { ... }` block (and one blank line right
# after it, to avoid leaving a double blank line behind) without touching
# anything else certbot added to this file.
awk '
  /location \/admin \{/ { skipping = 1; next }
  skipping && /^[[:space:]]*}[[:space:]]*$/ { skipping = 0; skip_blank = 1; next }
  skipping { next }
  skip_blank && /^[[:space:]]*$/ { skip_blank = 0; next }
  { skip_blank = 0; print }
' "$BACKUP" > "$CONF"

if grep -q "location /admin" "$CONF"; then
  echo "error: removal failed — restoring backup." >&2
  cp "$BACKUP" "$CONF"
  exit 1
fi

echo "Removed location /admin block from $CONF"
echo "Testing nginx config..."
nginx -t

echo "Config OK — reloading nginx..."
systemctl reload nginx

echo "Done. /admin now goes through the same location / block as everything else — the app's own login handles access control."
echo "Optional cleanup: the Basic Auth password file is no longer used and can be removed: sudo rm /etc/nginx/.htpasswd"
