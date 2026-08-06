#!/usr/bin/env bash
# One-time setup for scripts/check-tracking-health.py.
#
# Why this exists: this machine's `python3` is /usr/local/bin/python3 = 3.7.4,
# which is end-of-life. The Google client libraries ship no 3.7 wheels, so pip
# falls back to compiling grpcio from source and dies on a permissions error.
# We build an isolated venv from a modern interpreter instead, and never touch
# the system Python. check-tracking-health.py re-execs into this venv on its own,
# so after running this once you can invoke it with plain `python3`.
set -euo pipefail

cd "$(dirname "$0")/.."
VENV=".venv-tracking"

# Pick the newest interpreter available, preferring Homebrew over the system one.
PY=""
for c in /opt/homebrew/bin/python3.13 /opt/homebrew/bin/python3.12 \
         /opt/homebrew/bin/python3.11 /opt/homebrew/bin/python3 \
         /usr/bin/python3 python3; do
  if command -v "$c" >/dev/null 2>&1; then
    v=$("$c" -c 'import sys;print("%d%02d"%sys.version_info[:2])' 2>/dev/null || echo 0)
    if [ "$v" -ge 309 ]; then PY="$c"; break; fi
  fi
done

if [ -z "$PY" ]; then
  echo "No Python 3.9+ found. Install one with:  brew install python@3.11"
  exit 1
fi

echo "Building $VENV with $PY ($("$PY" -c 'import sys;print(sys.version.split()[0])'))"
"$PY" -m venv "$VENV"
"$VENV/bin/pip" install --quiet --upgrade pip
"$VENV/bin/pip" install --quiet google-api-python-client google-analytics-data google-analytics-admin

echo "Done. Now run:"
echo "    python3 scripts/check-tracking-health.py"
