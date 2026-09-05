#!/usr/bin/env bash
# Run this ON THE IONOS VPS (e.g. over SSH) inside the project checkout to
# ship a new release: pulls the latest commit, rebuilds the app image,
# restarts the stack, and applies any pending Prisma migrations.
set -euo pipefail

cd "$(dirname "$0")/.."

git pull
docker compose build app
docker compose up -d
docker compose run --rm app npx prisma migrate deploy
docker compose ps
