#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件的目录
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 获取项目根目录
const rootDir = path.resolve(__dirname, '..');
const postsDir = path.resolve(rootDir, 'src', 'content', 'posts');

// 读取配置文件获取作者信息
const configPath = path.resolve(rootDir, 'src', 'config.ts');
let authorName = "Xcpamd"; // 默认作者名
let authorAvatar = ""; // 默认作者头像为空

try {
  const configContent = fs.readFileSync(configPath, 'utf8');
  // 使用更精确的正则表达式提取profileConfig中的name
  // 先找到profileConfig的定义，然后在其后的内容中查找name字段
  const profileConfigMatch = configContent.match(/export const profileConfig[^{]*\{([\s\S]*?)\n\}/);
  if (profileConfigMatch && profileConfigMatch[1]) {
    const profileConfigContent = profileConfigMatch[1];
    const nameMatch = profileConfigContent.match(/name:\s*"([^"]+)"/);
    if (nameMatch && nameMatch[1]) {
      authorName = nameMatch[1];
    }
    
    // 提取avatar字段
    const avatarMatch = profileConfigContent.match(/avatar:\s*"([^"]+)"/);
    if (avatarMatch && avatarMatch[1]) {
      authorAvatar = avatarMatch[1];
    }
  }
} catch (error) {
  console.warn('无法读取配置文件，将使用默认作者名:', authorName);
}

// 获取命令行参数作为文章名称
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('请提供文章名称');
  console.log('用法: pnpm add-post {post name}');
  process.exit(1);
}

// 将文章名称转换为文件名
const postName = args.join(' ');
// 对于中文标题，我们保留中文但做一些清理
let slug = postName
  .replace(/\s+/g, '-')         // 空格替换为连字符
  .replace(/[<>"'&|?*/\\:]/g, '') // 移除Windows文件名不允许的字符
  .replace(/-+/g, '-')          // 多个连字符替换为单个
  .replace(/^-|-$/g, '');       // 移除首尾连字符

// 确保slug不为空
if (!slug) {
  console.error('无法从提供的文章名称生成有效的文件名');
  process.exit(1);
}

// 创建文章文件路径
const filePath = path.resolve(postsDir, `${slug}.md`);

// 检查文件是否已存在
if (fs.existsSync(filePath)) {
  console.error(`文章已存在: ${filePath}`);
  process.exit(1);
}

// 确保posts目录存在
if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
}

// 生成当前日期
const currentDate = new Date().toISOString().split('T')[0];

// 创建文章内容
const postContent = `---
title: ${postName} # 文章标题
date: ${currentDate} # 文章发布日期
author: ${authorName} # 文章作者
authorAvatar: ${authorAvatar} # 文章作者头像链接 (默认为${authorAvatar})
tags: [] # 文章标签 (用逗号分隔)
categories: [] # 文章分类 (用逗号分隔)
description: "" # 文章描述

url: "" # 文章原文链接
customCopyright: "" # 版权声明
customLicense: "" # 授权协议
customLicenseUrl: "" # 授权协议链接
---

# ${postName}

在这里编写你的文章内容...
`;

// 写入文件
fs.writeFileSync(filePath, postContent, 'utf8');

console.log(`文章已创建: ${filePath}`);
console.log(`文章标题: ${postName}`);
console.log(`文章slug: ${slug}`);
console.log(`请在frontmatter中补充tags、categories和description等信息`);