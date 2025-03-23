#!/bin/bash

library_path='library-sources'

# 列出一级子文件夹（Mac OS X 兼容版本）
docs_packages=()
for dir in "$library_path"/*/; do
  # 移除末尾的斜杠并获取目录名
  dir=${dir%/}
  dir=${dir##*/}
  docs_packages+=("$dir")
done

echo "packages include docs: ${docs_packages[*]}"

for docs_item in "${docs_packages[@]}"; do
  echo "build docs start: $docs_item"
  pnpm -F $docs_item docs
  echo "build docs end: $docs_item"
done

echo "build all docs end"
