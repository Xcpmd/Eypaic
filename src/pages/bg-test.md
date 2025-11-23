---
title: "背景图片测试"
description: "测试背景图片加载功能"
---

# 背景图片测试

这个页面用于测试背景图片加载功能。

<div id="bg-test-results" style="background: rgba(255,255,255,0.8); padding: 20px; border-radius: 10px; margin: 20px 0;">
  <h2>检测结果</h2>
  <div id="bg-count">检测中...</div>
  <div id="bg-current">当前背景: 未知</div>
  <div id="bg-lists">
    <h3>图片列表</h3>
    <div id="desktop-list">桌面端图片列表: 加载中...</div>
    <div id="mobile-list">移动端图片列表: 加载中...</div>
  </div>
  <button id="switch-bg-btn">切换背景</button>
</div>

<div id="debug-info" style="background: rgba(255,255,255,0.8); padding: 20px; border-radius: 10px; margin: 20px 0;">
  <h3>调试信息</h3>
  <p>加载中...</p>
</div>

<script>
  // 创建一个函数来显示背景检测结果
  function showBgTestResults() {
    const bgCountDiv = document.getElementById('bg-count');
    const bgCurrentDiv = document.getElementById('bg-current');
    const desktopListDiv = document.getElementById('desktop-list');
    const mobileListDiv = document.getElementById('mobile-list');
    const switchBtn = document.getElementById('switch-bg-btn');
    const debugDiv = document.getElementById('debug-info');
    
    // 添加调试信息
    debugDiv.innerHTML = `
      <h3>调试信息</h3>
      <p>window.actualMaxBackgroundImages: ${window.actualMaxBackgroundImages || '未定义'}</p>
      <p>window.switchBackground: ${typeof window.switchBackground}</p>
      <p>window.changeBackground: ${typeof window.changeBackground}</p>
      <p>window.setBgImage: ${typeof window.setBgImage}</p>
      <p>window.bgConfig: ${JSON.stringify(window.bgConfig || {}, null, 2)}</p>
    `;
    
    // 获取当前背景图片
    const bgContainer = document.querySelector('.background-container');
    if (bgContainer) {
      const currentBg = bgContainer.style.backgroundImage;
      if (currentBg && currentBg !== 'none') {
        bgCurrentDiv.textContent = `当前背景: ${currentBg}`;
      } else {
        bgCurrentDiv.textContent = '当前背景: 未设置';
      }
    }
    
    // 切换背景按钮
    switchBtn.addEventListener('click', () => {
      if (window.switchBackground) {
        window.switchBackground();
        setTimeout(() => {
          const newBg = bgContainer.style.backgroundImage;
          if (newBg && newBg !== 'none') {
            bgCurrentDiv.textContent = `当前背景: ${newBg}`;
          } else {
            bgCurrentDiv.textContent = '当前背景: 未设置';
          }
        }, 500);
      }
    });
    
    // 显示检测到的背景图片数量
    if (window.actualMaxBackgroundImages) {
      bgCountDiv.textContent = `检测到 ${window.actualMaxBackgroundImages} 张背景图片`;
      
      // 显示图片列表
      if (window.desktopImages && window.mobileImages) {
        desktopListDiv.textContent = `桌面端图片列表: [${window.desktopImages.join(', ')}]`;
        mobileListDiv.textContent = `移动端图片列表: [${window.mobileImages.join(', ')}]`;
      }
    } else {
      // 等待检测完成
      setTimeout(() => {
        if (window.actualMaxBackgroundImages) {
          bgCountDiv.textContent = `检测到 ${window.actualMaxBackgroundImages} 张背景图片`;
          
          // 显示图片列表
          if (window.desktopImages && window.mobileImages) {
            desktopListDiv.textContent = `桌面端图片列表: [${window.desktopImages.join(', ')}]`;
            mobileListDiv.textContent = `移动端图片列表: [${window.mobileImages.join(', ')}]`;
          }
        } else {
          bgCountDiv.textContent = '背景图片检测失败或未完成';
        }
      }, 3000);
    }
  }
  
  // 页面加载完成后显示结果
  document.addEventListener('DOMContentLoaded', showBgTestResults);
  
  // 将实际背景图片数量暴露到全局作用域
  window.addEventListener('load', () => {
    setTimeout(() => {
      const bgCountDiv = document.getElementById('bg-count');
      const desktopListDiv = document.getElementById('desktop-list');
      const mobileListDiv = document.getElementById('mobile-list');
      const debugDiv = document.getElementById('debug-info');
      
      if (window.actualMaxBackgroundImages) {
        bgCountDiv.textContent = `检测到 ${window.actualMaxBackgroundImages} 张背景图片`;
        
        // 显示图片列表
        if (window.desktopImages && window.mobileImages) {
          desktopListDiv.textContent = `桌面端图片列表: [${window.desktopImages.join(', ')}]`;
          mobileListDiv.textContent = `移动端图片列表: [${window.mobileImages.join(', ')}]`;
        }
      }
      
      // 更新调试信息
      debugDiv.innerHTML = `
        <h3>调试信息</h3>
        <p>window.actualMaxBackgroundImages: ${window.actualMaxBackgroundImages || '未定义'}</p>
        <p>window.switchBackground: ${typeof window.switchBackground}</p>
        <p>window.changeBackground: ${typeof window.changeBackground}</p>
        <p>window.setBgImage: ${typeof window.setBgImage}</p>
        <p>window.bgConfig: ${JSON.stringify(window.bgConfig || {}, null, 2)}</p>
        <p>window.desktopImages: ${JSON.stringify(window.desktopImages || [])}</p>
        <p>window.mobileImages: ${JSON.stringify(window.mobileImages || [])}</p>
      `;
    }, 2000);
  });
</script>