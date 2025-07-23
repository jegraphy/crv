#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Checking video files...\n');

// Kontrol edilecek klasörler
const checkPaths = [
  './public/video',
  './src/video',
  './video'
];

const videos = ['v1.mp4', 'v2.mp4', 'v3.mp4', 'v4.mp4', 'v5.mp4', 'v6.mp4', 'v7.mp4'];

function checkDirectory(dirPath) {
  console.log(`📁 Checking: ${dirPath}`);
  
  if (!fs.existsSync(dirPath)) {
    console.log(`   ❌ Directory does not exist`);
    return false;
  }
  
  const files = fs.readdirSync(dirPath);
  console.log(`   📄 Files found: ${files.length}`);
  
  let videoCount = 0;
  videos.forEach(video => {
    const videoPath = path.join(dirPath, video);
    if (fs.existsSync(videoPath)) {
      const stats = fs.statSync(videoPath);
      const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
      console.log(`   ✅ ${video} (${sizeMB} MB)`);
      videoCount++;
    } else {
      console.log(`   ❌ ${video} - Missing`);
    }
  });
  
  console.log(`   📊 Video files: ${videoCount}/${videos.length}\n`);
  return videoCount === videos.length;
}

// Tüm klasörleri kontrol et
let foundInPublic = false;
checkPaths.forEach(dirPath => {
  if (checkDirectory(dirPath)) {
    foundInPublic = true;
    console.log(`✅ All videos found in: ${dirPath}`);
  }
});

if (!foundInPublic) {
  console.log('❌ No complete video collection found in any directory');
  console.log('\n🔧 Solution:');
  console.log('1. Create directory: mkdir -p public/video');
  console.log('2. Copy videos: cp src/video/*.mp4 public/video/');
  console.log('3. Verify: ls -la public/video/');
} else {
  console.log('✅ Video files are properly organized');
}

// Build klasörünü kontrol et
console.log('\n🔍 Checking build output...');
if (fs.existsSync('./.next')) {
  console.log('✅ .next build directory exists');
  
  // Static dosyaları kontrol et
  const staticDirs = ['./.next/static', './.next/static/video'];
  staticDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir);
      console.log(`   📁 ${dir}: ${files.length} files`);
    }
  });
} else {
  console.log('❌ .next build directory not found');
  console.log('   Run: npm run build');
} 