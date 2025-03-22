1. 下载仓库到单独的目录

```sh
brew install git-filter-repo

git clone git@github.com:gridstack/gridstack.js.gitgit@github.com:gridstack/gridstack.js.git

git filter-repo --path-rename "":"gridstack/"

git remote add gridstack /Users/huoguang/Documents/code/source-code/demo01/gridstack.js

git merge --allow-unrelated-histories gridstack/master

```

- [docusaurus](https://docusaurus.io/zh-CN/docs/installation)