1. 下载仓库到单独的目录

```sh
brew install git-filter-repo

# 1. git clone 主项目
# 2. git clone 子项目
git clone git@github.com:vercel/ms.git

# 3. 子项目更改历史文件路径
git filter-repo --path-rename "":"ms/"

# 4. 在主项目下fetch本地的子项目
git remote add ms /Users/huoguang/Documents/code/source-code/demo01/ms

git pull ms

# 5. 合并两个仓库历史
git merge --allow-unrelated-histories ms/main


```

- [docusaurus](https://docusaurus.io/zh-CN/docs/installation)
- Starlight
  - https://starlight.astro.build/zh-cn/getting-started/
  - https://github1s.com/withastro/starlight
- Astro
  - https://github.com/withastro/astro
  - https://github1s.com/withastro/docs/blob/main/src/content.ts
  