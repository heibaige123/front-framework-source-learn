docs_packages=(
  'gridstack'
)

for docs_item in "${docs_packages[@]}"; do
  echo "build docs start: $docs_item"
  pnpm -F $docs_item docs
  echo "build docs end: $docs_item"
done

echo "build all docs end"
