#!/usr/bin/env bash
# Run this ON THE IONOS VPS (as root/sudo) to make www.xb-mediation.de
# 301-redirect to https://xb-mediation.de in the live nginx config, so
# search engines only ever see one hostname serving the site.
#
# Must be run AFTER certbot has set up HTTPS: the redirect targets https://,
# and adding it earlier would also redirect certbot's own HTTP challenge for
# the www hostname. That's why it isn't part of nginx/xbmediation.conf.
#
# Safe to re-run: does nothing if the redirect is already there. Backs up
# the live config first, and only reloads nginx if `nginx -t` passes on the
# result (restoring the backup otherwise).
set -euo pipefail

CONF=/etc/nginx/sites-available/xbmediation
APEX=xb-mediation.de
WWW=www.xb-mediation.de

if [ ! -f "$CONF" ]; then
  echo "error: $CONF not found." >&2
  exit 1
fi

if grep -q "return 301 https://$APEX\$request_uri" "$CONF"; then
  echo "www redirect already present in $CONF — nothing to do."
  exit 0
fi

if ! grep -q "listen.*443" "$CONF"; then
  echo "error: no HTTPS server block in $CONF — run certbot first." >&2
  exit 1
fi

BACKUP="$CONF.bak.$(date +%Y%m%d%H%M%S)"
cp "$CONF" "$BACKUP"
echo "Backed up existing config to $BACKUP"

# Adds a host check right after every server_name line that lists the www
# hostname (the same `if ($host = ...)` idiom certbot uses for its own
# HTTP->HTTPS redirect), without touching anything else certbot added to
# this file.
awk -v apex="$APEX" -v www="$WWW" '
  { print }
  /^[[:space:]]*server_name[[:space:]]/ && index($0, www) {
    indent = $0
    sub(/server_name.*/, "", indent)
    print ""
    print indent "if ($host = " www ") {"
    print indent "    return 301 https://" apex "$request_uri;"
    print indent "}"
  }
' "$BACKUP" > "$CONF"

if ! grep -q "return 301 https://$APEX\$request_uri" "$CONF"; then
  echo "error: no server_name line listing $WWW found — restoring backup." >&2
  cp "$BACKUP" "$CONF"
  exit 1
fi

echo "Added www redirect to $CONF"
echo "Testing nginx config..."
if ! nginx -t; then
  echo "error: nginx -t failed — restoring backup." >&2
  cp "$BACKUP" "$CONF"
  exit 1
fi

echo "Config OK — reloading nginx..."
systemctl reload nginx

echo "Done. https://$WWW now redirects to https://$APEX."
