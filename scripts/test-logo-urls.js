#!/usr/bin/env node

const https = require('https');
const http = require('http');

const domain = 'https://www.cerverse.com';
const logoPaths = [
  '/img/cerverse.svg',
  '/static/img/cerverse.svg'
];

function testLogoUrl(path) {
  return new Promise((resolve, reject) => {
    const url = `${domain}${path}`;
    const client = url.startsWith('https') ? https : http;
    
    const req = client.get(url, (res) => {
      console.log(`✅ ${path}: ${res.statusCode} - ${res.statusMessage}`);
      console.log(`   URL: ${url}`);
      console.log(`   Content-Type: ${res.headers['content-type']}`);
      console.log(`   Content-Length: ${res.headers['content-length']}`);
      console.log('');
      resolve({ path, statusCode: res.statusCode, url });
    });
    
    req.on('error', (err) => {
      console.log(`❌ ${path}: Error - ${err.message}`);
      console.log(`   URL: ${url}`);
      console.log('');
      reject({ path, error: err.message, url });
    });
    
    req.setTimeout(10000, () => {
      console.log(`⏰ ${path}: Timeout`);
      console.log(`   URL: ${url}`);
      console.log('');
      req.destroy();
      reject({ path, error: 'Timeout', url });
    });
  });
}

async function testAllLogos() {
  console.log('🎨 Testing logo URLs on domain...\n');
  
  const results = [];
  
  for (const path of logoPaths) {
    try {
      const result = await testLogoUrl(path);
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
  
  // Hangi path'in çalıştığını göster
  const workingPaths = results.filter(r => r.statusCode === 200).map(r => r.path);
  if (workingPaths.length > 0) {
    console.log(`🎯 Working paths: ${workingPaths.join(', ')}`);
  }
  
  if (failCount > 0) {
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Check if logo file is uploaded to server');
    console.log('2. Check Vercel configuration (vercel.json)');
    console.log('3. Check server logs for errors');
  }
}

testAllLogos().catch(console.error); 