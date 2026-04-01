# Markdown 博客（Contentlayer2）

## 新建文章

在 `content/blog/` 新建 `文章slug.md`，顶部写 Front Matter：

```yaml
---
title: "标题"
date: 2026-03-28
summary: "摘要"
tags: ["AI工具", "培训"]
cover: "/cover.png"
---
```

文件名（不含 `.md`）即为 URL：`/blog/文章slug`。

需要**自动目录**时，在正文加入二级标题 `## 目录`，`remark-toc` 会在其下生成目录。

## 更新与发布

- 开发：`npm run dev`（Contentlayer 在 Next 插件中监听配置与内容）。
- 构建：`npm run build`（已包含 `contentlayer2 build`）。
- 部署：与常规 Next 应用相同；静态图放 `public/`，`cover` 写以 `/` 开头的路径。

## 标签筛选

访问 `/blog?tag=标签名`，或在列表页点击标签。

## 说明

本仓库使用 **contentlayer2 + next-contentlayer2**（与 Next 14+ / React 19 兼容）。官方 `contentlayer` 对新版 Next  peer 依赖较旧，故采用社区维护分支。
