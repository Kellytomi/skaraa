#!/bin/bash
# Wrapper — delegates to infra/scripts/setup-dev.sh
exec "$(dirname "$0")/../infra/scripts/setup-dev.sh" "$@"
