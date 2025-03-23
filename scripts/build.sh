set -e

sh scripts/build-docs.sh

pnpm -F website build

