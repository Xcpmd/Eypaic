// 配置类型定义

// 站点配置接口
export interface SiteConfig {
  title: string;
  subtitle: string;
  lang: string;
  primaryColor: string;
  license: string;
  
  // 横幅配置
  banner: {
    heightRatio: number;
  };
  
  // 导航栏配置
  navbar: {
    projectlink: string;
  };
  
  // 文章配置
  posts: {
    directory: string;
  };
  
  // 页脚配置
  footer: {
    copyright: string;
  };
}

// 社交链接接口
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// 技能项接口
export interface Skill {
  name: string;
  level: number;
}

// 博主配置接口
export interface ProfileConfig {
  name: string;
  bio: string;
  avatar: string;
  tags: string[];
  email: string;
  github: string;
  socialLinks: SocialLink[];
  skills: Skill[];
}

// 打字机效果配置接口
export interface TypewriterConfig {
  enable: boolean;
  texts: string[];
  speed: number;
  deleteSpeed: number;
  pauseTime: number;
}

// 首页配置接口
export interface HomeConfig {
  typewriter: TypewriterConfig;
  recentPostsCount: number;
}

// 目录配置接口
export interface TocConfig {
  enable: boolean;
  depth: number;
  position: "left" | "right";
}

// 版权配置接口
export interface CopyrightConfig {
  enable: boolean;
  license: string;
  licenseUrl: string;
  statement: string;
  authorInfo: boolean;
  additionalInfo: string;
}

// 文章页配置接口
export interface PostConfig {
  toc: TocConfig;
  copyright: CopyrightConfig;
}

// 背景配置接口
export interface BackgroundConfig {
  blur: number;
  zIndex: number;
}

// 排版配置接口
export interface TypographyConfig {
  fontFamily: string;
  lineHeight: number;
  paragraphSpacing: number;
}

// 主题配置接口
export interface ThemeConfig {
  defaultTheme: "light" | "dark" | "auto";
  contentWidth: number;
  sidebarWidth: number;
  background: BackgroundConfig;
  topHighlight: boolean;
  typography: TypographyConfig;
}

// 完整配置接口
export interface Config {
  site: SiteConfig;
  profile: ProfileConfig;
  home: HomeConfig;
  post: PostConfig;
  theme: ThemeConfig;
}

// 配置键名类型
export type ConfigKey = keyof Config;

// 配置值类型
export type ConfigValue<T extends ConfigKey> = Config[T];

// 配置验证函数
export function validateConfig(config: Partial<Config>): config is Config {
  const requiredKeys: ConfigKey[] = ['site', 'profile', 'home', 'post', 'theme'];
  return requiredKeys.every(key => key in config);
}

// 配置默认值
export const defaultConfig: Config = {
  site: {
    title: "",
    subtitle: "",
    lang: "",
    primaryColor: "",
    license: "",
    banner: {
      heightRatio: 0.4
    },
    navbar: {
      projectlink: ""
    },
    posts: {
      directory: ""
    },
    footer: {
      copyright: ""
    }
  },
  profile: {
    name: "",
    bio: "",
    avatar: "",
    tags: [],
    email: "",
    github: "",
    socialLinks: [],
    skills: []
  },
  home: {
    typewriter: {
      enable: false,
      texts: [],
      speed: 0,
      deleteSpeed: 0,
      pauseTime: 0
    },
    recentPostsCount: 0
  },
  post: {
    toc: {
      enable: false,
      depth: 0,
      position: "left"
    },
    copyright: {
      enable: false,
      license: "",
      licenseUrl: "",
      statement: "",
      authorInfo: false,
      additionalInfo: ""
    }
  },
  theme: {
    defaultTheme: "light",
    contentWidth: 0,
    sidebarWidth: 0,
    background: {
      blur: 0,
      zIndex: 0
    },
    topHighlight: false,
    typography: {
      fontFamily: "",
      lineHeight: 0,
      paragraphSpacing: 0
    }
  }
};