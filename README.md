# Eypaic - 现代化二次元风格博客

>注: 本项目为作者的高中AI校本课作业, 使用TRAE完成主要代码的编写, 以及部分bug的手动修复, 此readme由ai编写, 内容可能有误, 仅用于学习和展示, 不建议用于生产环境(你要真拿来用也没问题, 遇到的bug基本都修差不多了).

一个基于 Astro 构建的现代化二次元风格个人博客系统，集成了响应式设计、主题切换、动态背景、搜索功能等丰富特性。

![Eypaic Logo](/public/show.png)

## ✨ 项目特色

### 🎨 视觉设计
- **二次元风格界面** - 精心设计的二次元风格UI，提供沉浸式浏览体验
- **毛玻璃效果** - 现代化的毛玻璃设计元素，包括导航栏、搜索框、卡片等
- **动态背景轮播** - 支持桌面端和移动端不同的背景图片自动轮播
- **平滑动画过渡** - 使用 Swup 实现丝滑的页面切换动画效果

### 📱 响应式设计
- **多设备适配** - 完美适配桌面端、平板和移动设备
- **移动端优化** - 下拉式导航菜单、触摸友好的交互设计
- **弹性布局** - 基于 CSS Grid 和 Flexbox 的现代化布局系统

### 🎯 功能特性
- **主题切换系统** - 支持亮色/暗色主题，支持自定义主题色
- **内置搜索功能** - 实时搜索文章内容，支持关键词高亮显示
- **分类标签系统** - 完善的文章分类和标签管理
- **数学公式支持** - 集成 KaTeX 渲染数学公式
- **代码高亮** - 支持多种编程语言的代码语法高亮
- **文章置顶** - 支持文章置顶功能，重要内容优先展示
- **阅读进度** - 文章阅读进度指示器
- **目录导航** - 自动生成文章目录，方便快速导航

### ⚡ 性能优化
- **静态站点生成** - 基于 Astro 的静态生成，极速加载性能
- **代码分割** - 自动代码分割，按需加载资源
- **图片优化** - 自动图片优化和响应式图片处理
- **SEO 友好** - 完善的 SEO 优化，支持 Open Graph 协议

## 🚀 快速开始

### 环境要求
- Node.js 18.0 或更高版本
- pnpm (推荐) 或 npm

### 安装步骤

1. **克隆项目**
```bash
git clone https://github.com/xcpmd/Eypaic.git
cd Eypaic
```

2. **安装依赖**
```bash
# 使用 pnpm (推荐)
pnpm install

# 或使用 npm
npm install
```

3. **启动开发服务器**
```bash
# 启动开发服务器
pnpm dev

# 或使用 npm
npm run dev
```

访问 [http://localhost:4321](http://localhost:4321) 查看你的博客。

4. **构建生产版本**
```bash
# 构建生产版本
pnpm build

# 预览生产版本
pnpm preview
```

## 📁 项目结构

```
Eypaic/
├── public/                     # 静态资源目录
│   ├── assets/                # 静态资源
│   │   ├── desktop/           # 桌面端背景图片
│   │   └── mobile/            # 移动端背景图片
│   ├── scripts/               # 前端脚本
│   └── favicon.svg            # 网站图标
├── src/                       # 源代码目录
│   ├── assets/                # 源资源文件
│   │   ├── avatar.jpg         # 博主头像
│   │   └── background/        # 背景图片源文件
│   ├── components/            # Astro 组件
│   │   ├── BackgroundSwitcher.astro  # 背景切换组件
│   │   ├── Hello.astro        # 问候组件
│   │   └── TypewriterText.astro      # 打字机效果组件
│   ├── content/               # 内容管理系统
│   │   ├── config.ts          # 内容配置
│   │   └── posts/             # 博客文章目录
│   ├── layouts/               # 布局组件
│   │   └── Layout.astro       # 主布局文件
│   ├── pages/                 # 页面文件
│   │   ├── 404.astro          # 404 页面
│   │   ├── about.astro        # 关于页面
│   │   ├── api/               # API 端点
│   │   ├── archive/           # 归档页面
│   │   ├── archive.astro      # 归档主页面
│   │   ├── categories/        # 分类页面
│   │   ├── categories.astro   # 分类主页面
│   │   ├── index.astro        # 首页
│   │   ├── posts/             # 文章页面
│   │   ├── tags/              # 标签页面
│   │   └── tags.astro         # 标签主页面
│   ├── styles/                # 样式文件目录
│   │   ├── 404.css           # 404 页面样式
│   │   ├── about.css          # 关于页面样式
│   │   ├── archive-year.css   # 年度归档样式
│   │   ├── archive.css        # 归档页面样式
│   │   ├── categories.css     # 分类页面样式
│   │   ├── category.css       # 分类详情样式
│   │   ├── global.css         # 全局样式
│   │   ├── hello.css          # 问候组件样式
│   │   ├── index.css          # 首页样式
│   │   ├── layout.css         # 布局样式
│   │   ├── post.css           # 文章页面样式
│   │   ├── search.css         # 搜索功能样式
│   │   ├── tag.css            # 标签详情样式
│   │   ├── tags.css           # 标签页面样式
│   │   ├── theme-switcher.css # 主题切换样式
│   │   ├── typewriter-text.css # 打字机样式
│   │   └── welcome.css        # 欢迎页面样式
│   ├── config.ts              # 网站配置文件
│   ├── types/                 # TypeScript 类型定义
│   └── utils/                 # 工具函数
├── scripts/                   # 工具脚本
│   └── add-post.js           # 添加文章脚本
├── astro.config.mjs          # Astro 配置文件
├── package.json              # 项目依赖配置
├── tsconfig.json             # TypeScript 配置
└── README.md                 # 项目说明文档
```

## 📝 内容管理

### 添加新文章

项目提供了便捷的命令行工具添加新文章：

使用目录下的 **新建文章.exe**

```bash
# 使用 pnpm
pnpm add-post "文章标题"

# 或使用 npm
npm run add-post "文章标题"
```

这将在 `src/content/posts/` 目录下创建一个新的 Markdown 文件，包含完整的 frontmatter 模板。

### 文章 Frontmatter

每篇文章支持以下 frontmatter 字段：

```yaml
---
title: test # 文章标题
date: 2025-11-24 # 文章发布日期 (自动填充)
author: 作者名称 # 文章作者
authorAvatar: /src/assets/avatar.jpg # 文章作者头像链接 (默认为/src/assets/avatar.jpg)
tags: [标签1, 标签2] # 文章标签 (用逗号分隔)
categories: [分类1, 分类2] # 文章分类 (用逗号分隔)
description: "这是一篇测试文章" # 文章描述

url: "" # 文章原文链接
customCopyright: "Copyright © 2025 Xcpmd. All rights reserved." # 版权声明
customLicense: "CC BY-NC-SA 4.0" # 授权协议
customLicenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/" # 授权协议链接
---
```

### 背景图片管理

背景图片支持多种格式（.webp, .jpg, .jpeg, .png），可以放在以下目录：

- `src/assets/background/desktop/` - 桌面端背景图片
- `src/assets/background/mobile/` - 移动端背景图片

系统会自动扫描这些目录并提供随机选择功能，支持任意文件名（包括中文）。

## ⚙️ 配置系统

### 站点配置 (`src/config.ts`)

网站的主要配置集中在 `src/config.ts` 文件中：

```typescript
export const siteConfig = {
  title: "Eypaic",                    // 网站标题
  subtitle: "二次元风格博客",         // 网站副标题
  primaryColor: "#3b82f6",           // 主题色
  lang: "zh_CN",                     // 网站语言
  
  // 主题色配置
  themeColor: {
    hue: 210,                        // 默认色相 (0-360)
    fixed: false,                    // 是否固定主题色
  },
  
  // 背景配置
  background: {
    carousel: {
      enable: true,                   // 启用轮播
      interval: 5,                    // 轮播间隔(秒)
      shuffle: true,                  // 随机顺序
    },
    display: {
      blur: 0,                       // 背景模糊
      opacity: 0.8,                   // 背景透明度
    }
  },
  
  // 导航栏配置
  navbar: {
    links: [
      { name: "首页", url: "/" },
      { name: "归档", url: "/archive" },
      { name: "分类", url: "/categories" },
      { name: "标签", url: "/tags" },
      { name: "关于", url: "/about" },
    ]
  }
};
```

### 博主信息配置

```typescript
export const profileConfig = {
  name: "Xcpmd",                      // 博主名称
  bio: "Ciallo~ (∠・ω< )⌒★",         // 个人简介
  avatar: "/src/assets/avatar.jpg",   // 头像路径
  tags: ["Python", "日漫", "技术"],     // 个人标签
  email: "your-email@example.com",     // 邮箱
  github: "https://github.com/username", // GitHub
  socialLinks: [                      // 社交媒体链接
    { name: "GitHub", url: "...", icon: "..." },
    { name: "Bilibili", url: "...", icon: "..." },
  ]
};
```

## 🌐 API 接口

### 背景图片 API

- `GET /api/background-images` - 获取所有背景图片列表
- `GET /api/background/{device}/{filename}` - 获取指定背景图片
- `GET /api/background/{device}/random` - 随机获取背景图片

其中 `device` 可以是 `desktop` 或 `mobile`。

## 🛠️ 技术栈

- **Astro** - 现代静态网站生成器，提供极致的性能优化
- **Tailwind CSS** - 实用优先的 CSS 框架，快速构建现代化界面
- **Swup** - 轻量级的页面切换动画库，提供流畅的用户体验
- **KaTeX** - 高质量的数学公式渲染引擎
- **Markdown-it** - 功能丰富的 Markdown 解析器
- **TypeScript** - 类型安全的 JavaScript 超集

## 📋 待办事项

### 目前问题

- [ ] config.ts 中部分配置无效
- [ ] 代码复杂度较高, 不整洁, 难以维护

### 🔧 正在进行的功能开发

#### 1. 多浏览器核心兼容性优化
- [ ] 修复 WebKit 内核浏览器的样式兼容性问题
- [ ] 优化 Firefox 浏览器的渲染性能
- [ ] 确保 Edge 浏览器的功能完整性
- [ ] 测试 Safari 移动端的交互体验

#### 2. 移动端折叠导航栏样式优化
- [ ] 完善下拉式导航菜单的动画效果
- [ ] 优化触摸设备的交互反馈
- [ ] 改进小屏幕设备的布局适配
- [ ] 增强移动端导航的可访问性

#### 3. 搜索栏样式和功能增强
- [ ] 优化搜索结果的毛玻璃效果
- [ ] 改进搜索框的响应式设计
- [ ] 增强搜索关键词高亮功能
- [ ] 添加搜索历史记录功能

#### 4. 第三方评论区集成
- [ ] 集成 Twikoo 评论系统
- [ ] 支持 Gitalk GitHub 评论
- [ ] 添加 Valine 无后端评论
- [ ] 实现评论审核和管理功能

### 🚀 计划中的新功能

#### 用户体验优化
- [ ] 添加文章阅读进度条
- [ ] 实现暗色/亮色主题自动切换
- [ ] 添加文章分享功能
- [ ] 集成文章点赞和收藏

#### 内容管理增强
- [ ] 开发文章草稿功能
- [ ] 添加文章版本控制
- [ ] 实现批量文章导入导出
- [ ] 增强媒体文件管理

#### 性能优化
- [ ] 实现图片懒加载
- [ ] 添加服务端渲染缓存
- [ ] 优化 CSS 和 JavaScript 打包
- [ ] 实现 CDN 加速支持

#### 国际化支持
- [ ] 添加多语言界面
- [ ] 实现语言自动检测
- [ ] 添加翻译功能

## 📄 许可证

本项目基于 [MIT 许可证](LICENSE) 开源，您可以自由使用、修改和分发。

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来改进这个项目！

### 贡献流程

1. Fork 本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 开发规范

- 遵循 TypeScript 编码规范
- 确保代码通过 ESLint 检查
- 添加必要的单元测试
- 更新相关文档

## 📞 联系方式

- **项目作者**: Xcpmd
- **邮箱**: xingquna_5418@163.com
- **GitHub**: [https://github.com/xcpmd](https://github.com/xcpmd)
- **项目地址**: [https://github.com/xcpmd/Eypaic](https://github.com/xcpmd/Eypaic)

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者，以及使用和支持 Eypaic 的用户们！

---

⭐ 如果这个项目对您有帮助，请给个 Star 支持一下！