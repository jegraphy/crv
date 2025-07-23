#!/usr/bin/env node

const https = require('https');
const http = require('http');

const domain = 'https://www.cerverse.com';
const videos = ['v1.mp4', 'v2.mp4', 'v3.mp4', 'v4.mp4', 'v5.mp4', 'v6.mp4', 'v7.mp4'];

function testVideoUrl(videoName) {
  return new Promise((resolve, reject) => {
    const url = `${domain}/video/${videoName}`;
    const client = url.startsWith('https') ? https : http;
    
    const req = client.get(url, (res) => {
      console.log(`✅ ${videoName}: ${res.statusCode} - ${res.statusMessage}`);
      console.log(`   URL: ${url}`);
      console.log(`   Content-Type: ${res.headers['content-type']}`);
      console.log(`   Content-Length: ${res.headers['content-length']}`);
      console.log('');
      resolve({ videoName, statusCode: res.statusCode, url });
    });
    
    req.on('error', (err) => {
      console.log(`❌ ${videoName}: Error - ${err.message}`);
      console.log(`   URL: ${url}`);
      console.log('');
      reject({ videoName, error: err.message, url });
    });
    
    req.setTimeout(10000, () => {
      console.log(`⏰ ${videoName}: Timeout`);
      console.log(`   URL: ${url}`);
      console.log('');
      req.destroy();
      reject({ videoName, error: 'Timeout', url });
    });
  });
}

async function testAllVideos() {
  console.log('🎬 Testing video URLs on domain...\n');
  
  const results = [];
  
  for (const video of videos) {
    try {
      const result = await testVideoUrl(video);
      results.push(result);
    } catch (error) {
      results.push(error);
    }
  }
  
  console.log('📊 Summary:');
  const successCount = results.filter(r => r.statusCode === 200).length;
  const failCount = results.length - successCount;
  
  console.log(`✅ Success: ${successCount}/${results.length}`);
  console.log(`❌ Failed: ${failCount}/${results.length}`);
  
  if (failCount > 0) {
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Check if video files are uploaded to server');
    console.log('2. Check server configuration for static files');
    console.log('3. Check domain DNS settings');
    console.log('4. Check server logs for errors');
  }
}

testAllVideos().catch(console.error); 