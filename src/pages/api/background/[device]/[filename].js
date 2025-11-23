import fs from 'fs';
import path from 'path';

// 获取图片文件路径
export async function GET({ params }) {
  const { device, filename } = params;
  
  // 构建设备目录路径
  const deviceDir = path.join(process.cwd(), 'src', 'assets', 'background', device);
  
  // 如果filename为"random"，则随机选择一个文件
  let filePath;
  let selectedFilename;
  
  if (filename === 'random') {
    // 检查目录是否存在
    if (!fs.existsSync(deviceDir)) {
      return new Response('Device directory not found', { status: 404 });
    }
    
    // 读取目录中的所有文件
    const files = fs.readdirSync(deviceDir);
    
    // 过滤出图片文件
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.webp', '.jpg', '.jpeg', '.png'].includes(ext);
    });
    
    if (imageFiles.length === 0) {
      return new Response('No image files found in directory', { status: 404 });
    }
    
    // 随机选择一个文件
    const randomIndex = Math.floor(Math.random() * imageFiles.length);
    selectedFilename = imageFiles[randomIndex];
    filePath = path.join(deviceDir, selectedFilename);
  } else {
    // 使用指定的文件名
    selectedFilename = filename;
    filePath = path.join(deviceDir, filename);
  }
  
  // 检查文件是否存在
  if (!fs.existsSync(filePath)) {
    return new Response('Image not found', { status: 404 });
  }
  
  // 读取文件
  const imageBuffer = fs.readFileSync(filePath);
  
  // 根据文件扩展名设置正确的Content-Type
  const ext = path.extname(selectedFilename).toLowerCase();
  let contentType = 'application/octet-stream';
  
  if (ext === '.webp') {
    contentType = 'image/webp';
  } else if (ext === '.jpg' || ext === '.jpeg') {
    contentType = 'image/jpeg';
  } else if (ext === '.png') {
    contentType = 'image/png';
  }
  
  // 返回图片
  return new Response(imageBuffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': filename === 'random' ? 'no-cache' : 'public, max-age=31536000' // 随机文件不缓存
    }
  });
}