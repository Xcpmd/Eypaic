// 站点配置
export const siteConfig = {
  title: "Eypaic",
  subtitle: "二次元风格博客",
  
  lang: "zh_CN",
  
  primaryColor: "#3b82f6", // 主题色
  
  license: "基于 MIT 许可证", // 网站许可证
  
  themeColor: {
    hue: 210, // 主题色的默认色相，范围从 0 到 360
    fixed: false, // 对访问者隐藏主题色选择器
  },
  
  // 横幅配置
  banner: {
    desktop: [],
    mobile: [],
    heightRatio: 0.4 // 横幅高度与视口高度的比例
  },
  
  // 背景配置
  background: {
    // 轮播配置
    carousel: {
      enable: true, // 启用轮播
      interval: 5, // 轮播间隔时间（秒）
      shuffle: true, // 是否打乱轮播顺序
    },
    // 背景显示配置
    display: {
      blur: 0, // 背景模糊程度
      opacity: 0.8, // 背景透明度
    }
  },
  
  // 导航栏配置
  navbar: {
    links: [
      { name: "首页", url: "/" },
      { name: "归档", url: "/archive" },
      { name: "分类", url: "/categories" },
      { name: "标签", url: "/tags" },
      { name: "集合", url: "/collections" },
      { name: "关于", url: "/about" },
    ],
    projectlink: "https://github.com/xcpmd/Eypaic", // 项目链接
  },
  
  // 文章配置
  posts: {
    directory: "/content/posts", // 文章目录
    frontmatter: {
      title: "标题",
      date: "发布日期",
      tags: "标签",
      categories: "分类",
      description: "描述",
      pinned: "是否置顶",
      cover: "封面图片",
    },
  },
  
  // 页脚配置
  footer: {
    copyright: "© {year} Eypaic. All rights reserved.",
    links: [
      { name: "GitHub", url: "https://github.com" },
      { name: "Gitee", url: "https://gitee.com" },
    ],
  },
};

// 博主配置
export const profileConfig = {
  name: "Xcpmd", // 名称
  bio: "Ciallo~ (∠・ω< )⌒★", // 个人简介
  avatar: "/src/assets/avatar.jpg", // 头像路径
  tags: ["Python", "日漫", "技术", "游戏"], // 个人标签
  email: "xingquna_5418@163.com", // 邮箱地址
  github: "https://github.com/xcpmd", // GitHub链接
  socialLinks: [
    { name: "Gitee", url: "https://gitee.com/xcpmd", icon: "fa-brands fa-git-alt" },
    { name: "Bilibili", url: "https://space.bilibili.com/1510782270", icon: "fa-brands fa-bilibili" },
    { name: "Twitter", url: "https://twitter.com", icon: "fa-brands fa-twitter" },
  ],
  // 技能栈配置 (最大100)
  skills: [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "React/Vue", level: 75 },
    { name: "Node.js", level: 0 },
    { name: "Python", level: 100 },
    { name: "Astro", level: 0 },
    { name: "Tailwind CSS", level: 0 },
    { name: "Git", level: 15 },
    { name: "Docker", level: 10 }
  ]
};

// 首页配置
export const homeConfig = {
  hero: {
    enable: true,
    title: "欢迎来到我的博客",
    subtitle: "分享技术、生活和热爱",
  },
  posts: {
    enable: true,
    showCover: true, // 是否显示封面
    pinnedFirst: true, // 置顶文章是否优先显示
    limit: 10, // 首页显示文章数量
  },
  sidebar: {
    enable: true,
    position: "right", // 侧边栏位置：left 或 right
    filters: [
      { name: "默认排序", value: "default" },
      { name: "按标签", value: "tags" },
      { name: "按时间轴", value: "timeline" },
      { name: "按集合", value: "collections" },
    ],
  },
  typewriter: {
    enable: true,
    texts: [
      "探索技术的无限可能",
      "分享生活的点滴感悟",
      "记录成长的每一个瞬间"
    ],
    speed: 100, // 打字速度（毫秒）
    deleteSpeed: 50, // 删除速度（毫秒）
    pauseTime: 2000 // 暂停时间（毫秒）
  },
  recentPostsCount: 5 // 首页显示的最新文章数量
};

// 文章页配置
export const postConfig = {
  toc: {
    enable: true,
    depth: 3, // 目录深度，1-6
    position: "left", // 目录位置：left 或 right
  },
  relatedPosts: {
    enable: true,
    limit: 5, // 相关文章数量
  },
  navigation: {
    enable: true,
    inCollectionFirst: true, // 是否优先按集合内顺序排列
  },
  readingTime: {
    enable: true,
    wordsPerMinute: 300, // 每分钟阅读字数
  },
  copyright: {
    enable: true, // 是否启用版权声明
    license: "CC BY 4.0", // 默认许可证
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/", // 许可证链接
    statement: "本文采用 {license} 许可协议进行许可。转载请注明出处！", // 版权声明模板
    authorInfo: true, // 是否显示作者信息
    additionalInfo: "" // 额外的版权信息
  }
};

// 评论配置
export const commentConfig = {
  enable: false, // 是否启用评论
  provider: "", // 评论提供商：twikoo, gitalk, valine 等
  config: {}, // 评论提供商配置
};

// 主题配置
export const themeConfig = {
  defaultTheme: "light", // 默认主题：light, dark, auto
  
  // 内容宽度配置
  contentWidth: 1200, // 内容区域最大宽度（像素）
  
  // 侧边栏宽度配置
  sidebarWidth: 300, // 侧边栏宽度（像素）
  
  // 背景配置
  background: {
    blur: 0, // 背景模糊程度（像素）
    zIndex: -1 // 背景层级
  },
  
  // 顶部高光效果
  topHighlight: true, // 是否显示顶部高光效果
  
  darkMode: {
    enable: true,
    default: "auto", // 默认主题：light, dark, auto
    animation: {
      enable: true,
      duration: 0.8, // 动画持续时间（秒）
    },
  },
  glassEffect: {
    enable: true,
    intensity: 0.8, // 毛玻璃效果强度
    shadow: true, // 是否启用阴影
  },
  typography: {
    fontFamily: "system-ui, -apple-system, sans-serif",
    lineHeight: 1.6,
    paragraphSpacing: 1.2,
  },
};

// 欢迎页面配置
export const welcomeConfig = {
  enable: true,
  text: "欢迎来到我的博客",
  animation: {
    enable: true,
    duration: 2, // 动画持续时间（秒）
    fadeOut: 1, // 淡出时间（秒）
  },
};

// 导出所有配置
export const config = {
  site: siteConfig,
  profile: profileConfig,
  home: homeConfig,
  post: postConfig,
  comment: commentConfig,
  theme: themeConfig,
  welcome: welcomeConfig,
};