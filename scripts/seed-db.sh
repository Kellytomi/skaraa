#!/bin/bash
# Wrapper — delegates to infra/scripts/seed-db.sh
exec "$(dirname "$0")/../infra/scripts/seed-db.sh" "$@"
