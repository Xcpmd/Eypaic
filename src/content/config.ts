import { defineCollection, z } from 'astro:content';

// 定义文章集合
const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    pubDate: z.date().optional(),
    author: z.string().optional(),
    authorAvatar: z.string().optional(),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
    // 版权相关字段
    customCopyright: z.string().optional(),
    customLicense: z.string().optional(),
    customLicenseUrl: z.string().optional(),
  }),
});

// 导出所有集合
export const collections = {
  posts: postsCollection,
};