import fs from 'fs';
import path from 'path';

export const GET = async () => {
  try {
    console.log('Starting background images scan');
    
    // 获取背景图片目录路径
    const desktopDir = path.join(process.cwd(), 'src', 'assets', 'background', 'desktop');
    const mobileDir = path.join(process.cwd(), 'src', 'assets', 'background', 'mobile');
    
    console.log('Desktop dir:', desktopDir);
    console.log('Mobile dir:', mobileDir);
    
    // 检查目录是否存在
    if (!fs.existsSync(desktopDir)) {
      console.error('Desktop directory does not exist:', desktopDir);
      return new Response(JSON.stringify({
        success: false,
        error: 'Desktop directory does not exist'
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    
    if (!fs.existsSync(mobileDir)) {
      console.error('Mobile directory does not exist:', mobileDir);
      return new Response(JSON.stringify({
        success: false,
        error: 'Mobile directory does not exist'
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    
    // 扫描桌面端背景图片
    const desktopFiles = fs.readdirSync(desktopDir)
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ext === '.webp' || ext === '.jpg' || ext === '.jpeg' || ext === '.png';
      })
      .sort();
    
    // 扫描移动端背景图片
    const mobileFiles = fs.readdirSync(mobileDir)
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ext === '.webp' || ext === '.jpg' || ext === '.jpeg' || ext === '.png';
      })
      .sort();
    
    // 计算最大图片数量
    const maxImages = Math.max(desktopFiles.length, mobileFiles.length);
    
    // console.log('Desktop files:', desktopFiles);
    // console.log('Mobile files:', mobileFiles);
    // console.log('Max images:', maxImages);
    
    // 返回结果
    return new Response(JSON.stringify({
      success: true,
      desktopImages: desktopFiles,
      mobileImages: mobileFiles,
      maxImages: maxImages,
      basePath: '/assets/background' // 修改为客户端可访问的基础路径
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error scanning background images:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error.message || 'Failed to scan background images'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};