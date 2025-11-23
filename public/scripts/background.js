// 背景图片管理脚本
// 站点配置
const bgConfig = {
    background: {
        carousel: {
            enable: true,
            interval: 5,
            shuffle: true,
        },
        display: {
            blur: 2,
            opacity: 0.8,
        }
    },
    // 背景图片路径
    path: {
        desktop: 'src/assets/background/desktop/',
        mobile: 'src/assets/background/mobile/'
    },
    // 最大背景图片数量（将动态检测）
    maxImages: 5, // 默认值，将被动态更新
    // 图片格式
    format: 'webp'
};

// 存储实际检测到的背景图片文件名
let desktopBackgroundFiles = [];
let mobileBackgroundFiles = [];

// 动态检测背景图片
async function detectBackgroundImages() {
  try {
    console.log('开始检测背景图片...');
    
    // 调用API获取背景图片列表
    const response = await fetch('/api/background-images');
    if (!response.ok) {
      throw new Error(`API请求失败: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.error || '获取背景图片列表失败');
    }
    
    // 使用API返回的文件名列表
    desktopBackgroundFiles = data.desktopImages;
    mobileBackgroundFiles = data.mobileImages;
    
    console.log(`检测到 ${desktopBackgroundFiles.length} 张桌面端背景图片:`, desktopBackgroundFiles);
    console.log(`检测到 ${mobileBackgroundFiles.length} 张移动端背景图片:`, mobileBackgroundFiles);
    
    // 更新配置
    bgConfig.maxImages = Math.max(desktopBackgroundFiles.length, mobileBackgroundFiles.length);
    
    // 将实际背景图片文件名暴露到全局作用域
    window.desktopBackgroundFiles = desktopBackgroundFiles;
    window.mobileBackgroundFiles = mobileBackgroundFiles;
    window.bgConfig = bgConfig;
  } catch (error) {
    console.error('检测背景图片时出错:', error);
    // 保持默认值
    bgConfig.maxImages = 5; // 默认值
    window.bgConfig = bgConfig;
  }
}

// 检测设备类型
const isMobileDevice = () => {
    return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// 背景图片路径
const getBgImagePath = (filename = null) => {
    const isMobile = isMobileDevice();
    const folder = isMobile ? 'mobile' : 'desktop';
    
    // 如果没有指定文件名，则随机选择一个
    if (!filename) {
        const files = isMobile ? mobileBackgroundFiles : desktopBackgroundFiles;
        if (files.length === 0) return null;
        
        const randomIndex = Math.floor(Math.random() * files.length);
        filename = files[randomIndex];
    }
    
    // 使用API端点获取src/assets中的图片
    return `/api/background/${folder}/${filename}`;
};

// 设置背景图片
const setBgImage = (filename = null) => {
    console.log('setBgImage called with filename:', filename);
    const bgContainer = document.querySelector('.background-container');
    console.log('Background container found:', !!bgContainer);
    
    if (!bgContainer) {
        console.error('Background container not found');
        return;
    }
    
    const isMobile = isMobileDevice();
    const files = isMobile ? mobileBackgroundFiles : desktopBackgroundFiles;
    
    // 如果没有指定文件名，则随机选择一个
    if (!filename) {
        if (files.length === 0) {
            console.error('No background images available');
            return;
        }
        
        const randomIndex = Math.floor(Math.random() * files.length);
        filename = files[randomIndex];
    }
    
    const backgroundImageUrl = getBgImagePath(filename);
    
    if (!backgroundImageUrl) {
        console.error('Failed to get background image path');
        return;
    }
    
    console.log('Setting background image to:', backgroundImageUrl);
    
    // 设置背景图片
    bgContainer.style.backgroundImage = `url(${backgroundImageUrl})`;
    
    // 保存当前背景文件名
    sessionStorage.setItem('currentBgFilename', filename);
    
    // 添加调试信息
    console.log(`Background image set to: ${backgroundImageUrl}`);
    
    // 验证背景图片是否已设置
    setTimeout(() => {
        console.log('Current background image style:', bgContainer.style.backgroundImage);
    }, 100);
    
    return filename;
};

// 切换背景图片
const switchBgImage = () => {
    const bgContainer = document.querySelector('.background-container');
    if (!bgContainer) return;
    
    const isMobile = isMobileDevice();
    const files = isMobile ? mobileBackgroundFiles : desktopBackgroundFiles;
    
    if (files.length === 0) {
        console.error('No background images available');
        return;
    }
    
    // 获取当前背景文件名
    let currentFilename = null;
    const savedFilename = sessionStorage.getItem('currentBgFilename');
    if (savedFilename) {
        currentFilename = savedFilename;
    }
    
    // 找到当前文件在列表中的索引
    let currentIndex = -1;
    if (currentFilename) {
        currentIndex = files.indexOf(currentFilename);
    }
    
    // 切换到下一张背景图片
    const nextIndex = (currentIndex + 1) % files.length;
    const nextFilename = files[nextIndex];
    
    return setBgImage(nextFilename);
};

// 检查设备类型是否改变
const checkDeviceChange = () => {
    const bgContainer = document.querySelector('.background-container');
    if (!bgContainer) return;
    
    // 检测当前设备类型
    const isMobile = isMobileDevice();
    const currentDeviceType = isMobile ? 'mobile' : 'desktop';
    
    // 获取上次设备类型，如果不存在则初始化
    let lastDeviceType = window.lastDeviceType || null;
    
    // 如果设备类型发生了变化，立即更新背景图片
    if (lastDeviceType && lastDeviceType !== currentDeviceType) {
        console.log(`Device type changed from ${lastDeviceType} to ${currentDeviceType}, updating background image`);
        
        // 获取当前背景文件名
        const currentFilename = sessionStorage.getItem('currentBgFilename');
        if (currentFilename) {
            // 在新设备类型的文件列表中查找相同的文件名
            const newFiles = isMobile ? mobileBackgroundFiles : desktopBackgroundFiles;
            const matchingIndex = newFiles.indexOf(currentFilename);
            
            if (matchingIndex !== -1) {
                // 找到相同文件名，使用它
                const newImageUrl = getBgImagePath(currentFilename);
                
                // 移除过渡效果
                const originalTransition = bgContainer.style.transition;
                bgContainer.style.transition = 'none';
                
                // 更新背景图片
                bgContainer.style.backgroundImage = `url(${newImageUrl})`;
                
                // 强制重绘以确保立即生效
                bgContainer.offsetHeight;
                
                // 恢复过渡效果
                setTimeout(() => {
                    bgContainer.style.transition = originalTransition;
                }, 50);
                
                console.log(`Background image updated to: ${newImageUrl}`);
            } else {
                // 没有找到相同文件名，随机选择一个
                setBgImage();
            }
        } else {
            // 没有保存的文件名，随机选择一个
            setBgImage();
        }
    }
    
    // 保存当前设备类型到全局变量
    window.lastDeviceType = currentDeviceType;
};

// 立即初始化背景图片
(function initBackground() {
    // 立即将函数暴露到全局作用域
    window.switchBackground = switchBgImage;
    window.setBgImage = setBgImage;
    window.changeBackground = () => {
        const bgContainer = document.querySelector('.background-container');
        if (!bgContainer) return;
        
        // 获取当前背景文件名
        let currentFilename = null;
        const savedFilename = sessionStorage.getItem('currentBgFilename');
        if (savedFilename) {
            currentFilename = savedFilename;
        }
        
        const isMobile = isMobileDevice();
        const files = isMobile ? mobileBackgroundFiles : desktopBackgroundFiles;
        
        if (files.length === 0) {
            console.error('No background images available');
            return;
        }
        
        // 找到当前文件在列表中的索引
        let currentIndex = -1;
        if (currentFilename) {
            currentIndex = files.indexOf(currentFilename);
        }
        
        // 切换到下一张背景图片
        const nextIndex = (currentIndex + 1) % files.length;
        const nextFilename = files[nextIndex];
        
        return setBgImage(nextFilename);
    };
    
    // 添加调试信息
    console.log('Background initialization started');
    
    // 定义初始化函数
    async function initializeBackground() {
        console.log('initializeBackground function called');
        
        // 先检测背景图片数量
        await detectBackgroundImages();
        
        // 检查背景容器是否存在
        const bgContainer = document.querySelector('.background-container');
        console.log('Background container found:', !!bgContainer);
        if (!bgContainer) {
            console.error('Background container not found');
            return;
        }
        
        console.log('Background container found, setting background image');
        setBgImage();
        
        // 初始化背景轮播（如果启用）
        console.log('bgConfig.background:', bgConfig.background);
        console.log('bgConfig.background.carousel:', bgConfig.background?.carousel);
        console.log('bgConfig.background.carousel.enable:', bgConfig.background?.carousel?.enable);
        
        if (bgConfig.background && bgConfig.background.carousel && bgConfig.background.carousel.enable) {
            console.log('Background carousel is enabled');
            
            // 获取当前背景文件名
            let currentFilename = null;
            const savedFilename = sessionStorage.getItem('currentBgFilename');
            if (savedFilename) {
                currentFilename = savedFilename;
            }
            
            // 如果没有保存的文件名，随机选择一个
            if (!currentFilename) {
                setBgImage();
            }
            
            // 清除可能存在的旧轮播定时器
            if (window.backgroundCarouselInterval) {
                console.log('Clearing existing background carousel interval');
                clearInterval(window.backgroundCarouselInterval);
            }
            
            function changeBackground() {
                console.log('changeBackground function called');
                const isMobile = isMobileDevice();
                const files = isMobile ? mobileBackgroundFiles : desktopBackgroundFiles;
                
                if (files.length === 0) {
                    console.error('No background images available for carousel');
                    return;
                }
                
                // 获取当前背景文件名
                let currentFilename = sessionStorage.getItem('currentBgFilename');
                
                // 找到当前文件在列表中的索引
                let currentIndex = -1;
                if (currentFilename) {
                    currentIndex = files.indexOf(currentFilename);
                }
                
                // 切换到下一张背景图片
                const nextIndex = (currentIndex + 1) % files.length;
                const nextFilename = files[nextIndex];
                
                console.log('Switching to background file:', nextFilename);
                setBgImage(nextFilename);
            }
            
            // 设置轮播定时器 - 配置中的秒数转换为毫秒
            const interval = (bgConfig.background.carousel.interval || 5) * 1000;
            console.log(`Setting background carousel with interval: ${interval}ms`);
            window.backgroundCarouselInterval = setInterval(changeBackground, interval);
            console.log(`Background carousel started with interval: ${interval}ms`);
        } else {
            console.log('Background carousel is disabled');
        }
        
        // 监听窗口大小变化，检测设备类型变化
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(checkDeviceChange, 200);
        });
        
        // 初始化设备类型
        checkDeviceChange();
    }
    
    // 如果文档已经加载完成，立即初始化
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        console.log('Document is already loaded');
        initializeBackground();
    } else {
        // 否则等待DOM加载完成
        console.log('Document is still loading, adding DOMContentLoaded listener');
        document.addEventListener('DOMContentLoaded', () => {
            console.log('DOMContentLoaded event fired');
            initializeBackground();
        });
    }
    
    // 添加一个简单的测试，在页面加载后立即设置背景图片
    setTimeout(() => {
        console.log('Setting background image after timeout');
        setBgImage(); // 随机设置一张背景图片
    }, 1000);
})();