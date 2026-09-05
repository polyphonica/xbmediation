#!/usr/bin/env bash
# Run this ON THE IONOS VPS (as root/sudo), after certbot has already set up
# HTTPS for xb-mediation.de, to wire up HTTP Basic Auth on /admin.
#
# Safe to re-run: does nothing if the /admin block is already present, and
# always backs up the live config before touching it. Does NOT overwrite
# the whole file (certbot has already rewritten it to add the HTTPS server
# block and HTTP->HTTPS redirect) — it only inserts one location block.
#
# Usage: sudo deploy/setup-admin-auth.sh <username>
set -euo pipefail

USERNAME="${1:-}"
if [ -z "$USERNAME" ]; then
  echo "Usage: sudo $0 <username>" >&2
  exit 1
fi

CONF=/etc/nginx/sites-available/xbmediation
HTPASSWD=/etc/nginx/.htpasswd

if [ ! -f "$CONF" ]; then
  echo "error: $CONF not found — has the site been enabled yet? See README.md." >&2
  exit 1
fi

# --- 1. Password file ---
if ! command -v htpasswd >/dev/null 2>&1; then
  echo "Installing apache2-utils (provides htpasswd)..."
  apt-get update -qq && apt-get install -y apache2-utils
fi

if [ -f "$HTPASSWD" ]; then
  echo "$HTPASSWD already exists — leaving it as-is. To add/update a user:"
  echo "  sudo htpasswd $HTPASSWD $USERNAME"
else
  echo "Creating $HTPASSWD — you'll be prompted for a password for '$USERNAME':"
  htpasswd -c "$HTPASSWD" "$USERNAME"
fi

# --- 2. nginx location block ---
if grep -q "location /admin" "$CONF"; then
  echo "location /admin already present in $CONF — skipping config edit."
else
  MATCHES=$(grep -c "location / {" "$CONF" || true)
  if [ "$MATCHES" -ne 1 ]; then
    echo "error: expected exactly one 'location / {' in $CONF to insert before, found $MATCHES." >&2
    echo "Edit the file manually instead — see nginx/xbmediation.conf for the block to add." >&2
    exit 1
  fi

  BACKUP="$CONF.bak.$(date +%Y%m%d%H%M%S)"
  cp "$CONF" "$BACKUP"
  echo "Backed up existing config to $BACKUP"

  awk '
    !inserted && /location \/ \{/ {
      print "    location /admin {"
      print "        auth_basic \"XB Mediation Admin\";"
      print "        auth_basic_user_file /etc/nginx/.htpasswd;"
      print ""
      print "        proxy_pass http://127.0.0.1:3000;"
      print "        proxy_http_version 1.1;"
      print "        proxy_set_header Host $host;"
      print "        proxy_set_header X-Real-IP $remote_addr;"
      print "        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;"
      print "        proxy_set_header X-Forwarded-Proto $scheme;"
      print "    }"
      print ""
      inserted = 1
    }
    { print }
  ' "$BACKUP" > "$CONF"

  if ! grep -q "location /admin" "$CONF"; then
    echo "error: insertion failed — restoring backup." >&2
    cp "$BACKUP" "$CONF"
    exit 1
  fi
  echo "Inserted location /admin block into $CONF"
fi

# --- 3. Test and reload ---
echo "Testing nginx config..."
nginx -t

echo "Config OK — reloading nginx..."
systemctl reload nginx

echo "Done. https://xb-mediation.de/admin should now prompt for Basic Auth."
