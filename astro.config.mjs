// @ts-check
import { defineConfig } from 'astro/config';
import swup from '@swup/astro';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  devToolbar: {
    enabled: false,
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    syntaxHighlight: 'prism',
  },
  integrations: [
    swup({
      theme: false,
      animationClass: "transition-swup-", // 避免与Tailwind的transition类冲突
      containers: ["main"],
      smoothScrolling: true,
      cache: true,
      preload: false,
      accessibility: true,
      updateHead: true,
      updateBodyClass: false,
      globalInstance: true,
      resolveUrl: (url) => url,
      animateHistoryBrowsing: false,
      skipPopStateHandling: (event) => {
        // 跳过锚点链接的处理，让浏览器原生处理
        return event.state && event.state.url && event.state.url.includes("#");
      },
    })
  ],
  vite: {
    define: {
      global: 'globalThis'
    }
  }
});
