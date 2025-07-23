#!/usr/bin/env node

const https = require('https');
const http = require('http');

const domain = 'https://www.cerverse.com';
const videos = ['v1.mp4', 'v2.mp4', 'v3.mp4', 'v4.mp4', 'v5.mp4', 'v6.mp4', 'v7.mp4'];

// Test edilecek path'ler
const testPaths = [
  '/video/',
  '/static/video/'
];

function testVideoUrl(videoName, pathPrefix) {
  return new Promise((resolve, reject) => {
    const url = `${domain}${pathPrefix}${videoName}`;
    const client = url.startsWith('https') ? https : http;
    
    const req = client.get(url, (res) => {
      console.log(`✅ ${pathPrefix}${videoName}: ${res.statusCode} - ${res.statusMessage}`);
      console.log(`   URL: ${url}`);
      console.log(`   Content-Type: ${res.headers['content-type']}`);
      console.log(`   Content-Length: ${res.headers['content-length']}`);
      console.log('');
      resolve({ videoName, pathPrefix, statusCode: res.statusCode, url });
    });
    
    req.on('error', (err) => {
      console.log(`❌ ${pathPrefix}${videoName}: Error - ${err.message}`);
      console.log(`   URL: ${url}`);
      console.log('');
      reject({ videoName, pathPrefix, error: err.message, url });
    });
    
    req.setTimeout(10000, () => {
      console.log(`⏰ ${pathPrefix}${videoName}: Timeout`);
      console.log(`   URL: ${url}`);
      console.log('');
      req.destroy();
      reject({ videoName, pathPrefix, error: 'Timeout', url });
    });
  });
}

async function testAllVideos() {
  console.log('🎬 Testing video URLs on domain...\n');
  
  const results = [];
  
  for (const pathPrefix of testPaths) {
    console.log(`📁 Testing path: ${pathPrefix}`);
    for (const video of videos) {
      try {
        const result = await testVideoUrl(video, pathPrefix);
        results.push(result);
      } catch (error) {
        results.push(error);
      }
    }
    console.log('---\n');
  }
  
  console.log('📊 Summary:');
  const successCount = results.filter(r => r.statusCode === 200).length;
  const failCount = results.length - successCount;
  
  console.log(`✅ Success: ${successCount}/${results.length}`);
  console.log(`❌ Failed: ${failCount}/${results.length}`);
  
  // Hangi path'in çalıştığını göster
  const workingPaths = [...new Set(results.filter(r => r.statusCode === 200).map(r => r.pathPrefix))];
  if (workingPaths.length > 0) {
    console.log(`🎯 Working paths: ${workingPaths.join(', ')}`);
  }
  
  if (failCount > 0) {
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Check if video files are uploaded to server');
    console.log('2. Check Vercel configuration (vercel.json)');
    console.log('3. Check server logs for errors');
    console.log('4. Try different path: /static/video/ instead of /video/');
  }
}

testAllVideos().catch(console.error); 