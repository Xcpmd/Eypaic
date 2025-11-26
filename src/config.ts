// 导入类型定义
import type {
  SiteConfig,
  ProfileConfig,
  HomeConfig,
  PostConfig,
  ThemeConfig,
  Config
} from './types/config';

// 站点配置
export const siteConfig: SiteConfig = {
  title: "Eypaic",
  subtitle: "二次元风格博客",
  
  lang: "zh_CN",
  
  primaryColor: "#3b82f6", // 主题色
  
  license: "基于 MIT 许可证", // 网站许可证
  
  // 横幅配置
  banner: {
    heightRatio: 0.4 // 横幅高度与视口高度的比例
  },
  

  
  // 导航栏配置
  navbar: {
    projectlink: "https://github.com/xcpmd/Eypaic", // 项目链接
  },
  
  // 文章配置
  posts: {
    directory: "/content/posts", // 文章目录
  },
  
  // 页脚配置
  footer: {
    copyright: "© {year} Eypaic. All rights reserved.",
  },
};

// 博主配置
export const profileConfig: ProfileConfig = {
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
export const homeConfig: HomeConfig = {
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
export const postConfig: PostConfig = {
  toc: {
    enable: true,
    depth: 3, // 目录深度，1-6
    position: "left", // 目录位置：left 或 right
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

// 主题配置
export const themeConfig: ThemeConfig = {
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
  
  typography: {
    fontFamily: "system-ui, -apple-system, sans-serif",
    lineHeight: 1.6,
    paragraphSpacing: 1.2,
  },
};

// 导出所有配置
export const config: Config = {
  site: siteConfig,
  profile: profileConfig,
  home: homeConfig,
  post: postConfig,
  theme: themeConfig,
};