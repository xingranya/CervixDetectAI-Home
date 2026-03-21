# CervixDetectAI Home

`CervixDetectAI Home` 是 `CervixDetectAI` 的独立官网子站项目，面向医疗机构展示品牌信息、产品能力、应用场景、项目介绍、新闻动态与联系方式。

该项目与主业务系统解耦，适合作为单独的静态官网仓库维护和部署。

## 项目特性

- 独立官网子站，不依赖 Quasar 主应用运行
- 基于 `Vue 3 + TypeScript + Vite + Vue Router + vite-ssg`
- 支持静态生成，便于 SEO 与静态部署
- 内置新闻中心，使用本地 Markdown 内容驱动
- 统一品牌配置，便于维护 Logo、站点标题、导航、联系方式等信息
- 首页首屏支持重点提示条，可用于公告、活动或调查问卷提醒
- 联系页支持统一展示邮件、官网、平台入口与问卷等对外联系渠道
- 已补充移动端导航浮层、首页信息密度压缩和联系入口区的小屏适配

## 页面结构

- 首页
- 产品能力
- 应用场景
- 项目介绍
- 新闻中心
- 新闻详情
- 联系我们

## 当前交互入口

- 首页首屏顶部已接入项目调查问卷提醒条
- 联系页已提供独立的问卷填写入口与按钮入口
- 首页服务入口区保留项目介绍、动态、成果、平台等常用访问入口

## 技术栈

- `Vue 3`
- `TypeScript`
- `Vite`
- `Vue Router`
- `vite-ssg`
- `marked`

## 目录说明

```text
home/
├─ content/               # 官网内容
│  └─ news/               # 新闻 Markdown
├─ public/                # 静态资源
├─ src/
│  ├─ components/         # 官网组件
│  ├─ config/             # 站点配置
│  ├─ lib/                # 内容解析与数据处理
│  ├─ pages/              # 页面
│  ├─ styles/             # 全局样式与设计令牌
│  ├─ types/              # 类型定义
│  ├─ App.vue
│  ├─ main.ts
│  └─ router.ts
├─ index.html
├─ package.json
├─ tsconfig.json
└─ vite.config.ts
```

## 本地开发

推荐使用 `bun`：

```bash
bun install
bun run dev
```

如果使用 `npm`：

```bash
npm install
npm run dev
```

## 常用命令

```bash
# 启动开发环境
bun run dev

# 类型检查
bun run typecheck

# 构建静态站点
bun run build

# 预览构建结果
bun run preview
```

## 新闻内容维护

新闻内容目录：

```text
content/news/
```

每篇文章使用 Markdown + frontmatter，至少包含以下字段：

```yaml
title: 标题
slug: 唯一路径
excerpt: 摘要
publishedAt: 2026-03-15
cover: /covers/example.jpg
category: 产品动态
featured: true
```

## 品牌配置

站点基础信息集中维护在：

```text
src/config/site.ts
```

包括：

- 品牌名
- Logo
- 首页标题与副标题
- 导航
- 联系方式
- 首页快捷入口与联系渠道
- 备案号
- 首页精选新闻数量

## 构建产物

执行构建后，静态文件输出到：

```text
dist/
```

适合部署到：

- Nginx
- Vercel
- Netlify
- 静态对象存储/CDN

## 部署建议

- 将官网作为独立静态站部署
- 如需挂到正式域名子路径，可结合服务器重写规则处理
- 如需与主业务系统并存，建议官网与业务系统分别构建、分别发布

## 当前品牌信息

- 品牌：`CervixDetectAI`
- 定位：`宫颈影像智能辅助筛查平台`
- 官网地址：`https://hpvsc.icu`
- 联系邮箱：`support@hpvsc.icu`
- 项目问卷：`https://wj.qq.com/s2/25214446/3453/`
- 备案号：`鄂ICP备2026006203号-2`

## License

当前仓库已补充 `MIT License`，如需改为其他许可证，可直接替换根目录 `LICENSE` 文件。

## GitHub 仓库信息

已额外提供一份 GitHub 仓库简介草案：

```text
GITHUB_ABOUT.md
```

其中包含：

- Description
- Website
- Topics
- 项目短介绍
