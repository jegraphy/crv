#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Version dosyasının yolu
const versionFile = path.join(__dirname, '../src/config/version.ts');
const packageFile = path.join(__dirname, '../package.json');

// Mevcut version'ı oku
function readCurrentVersion() {
  const content = fs.readFileSync(versionFile, 'utf8');
  const majorMatch = content.match(/major: (\d+)/);
  const minorMatch = content.match(/minor: (\d+)/);
  const patchMatch = content.match(/patch: (\d+)/);
  
  return {
    major: parseInt(majorMatch[1]),
    minor: parseInt(minorMatch[1]),
    patch: parseInt(patchMatch[1])
  };
}

// Version'ı artır
function bumpVersion(type = 'patch') {
  const current = readCurrentVersion();
  let newVersion;
  
  switch(type) {
    case 'major':
      newVersion = { ...current, major: current.major + 1, minor: 0, patch: 0 };
      break;
    case 'minor':
      newVersion = { ...current, minor: current.minor + 1, patch: 0 };
      break;
    case 'patch':
    default:
      newVersion = { ...current, patch: current.patch + 1 };
      break;
  }
  
  return newVersion;
}

// Version dosyasını güncelle
function updateVersionFile(version) {
  const content = `// Version bilgisi - her commit ile güncellenir
export const APP_VERSION = {
  major: ${version.major},
  minor: ${version.minor},
  patch: ${version.patch},
  build: process.env.NEXT_PUBLIC_BUILD_NUMBER || '0',
  commit: process.env.NEXT_PUBLIC_COMMIT_HASH || 'dev',
  date: process.env.NEXT_PUBLIC_BUILD_DATE || new Date().toISOString().split('T')[0]
};

// Semantic version string
export const VERSION_STRING = \`\${APP_VERSION.major}.\${APP_VERSION.minor}.\${APP_VERSION.patch}\`;

// Full version string with build info
export const FULL_VERSION_STRING = \`\${VERSION_STRING}+\${APP_VERSION.build}\`;

// Display version string
export const DISPLAY_VERSION = \`v \${VERSION_STRING}\`;
`;

  fs.writeFileSync(versionFile, content);
  console.log(`✅ Version updated to ${version.major}.${version.minor}.${version.patch}`);
}

// Package.json'u güncelle
function updatePackageJson(version) {
  const packageContent = JSON.parse(fs.readFileSync(packageFile, 'utf8'));
  packageContent.version = `${version.major}.${version.minor}.${version.patch}`;
  fs.writeFileSync(packageFile, JSON.stringify(packageContent, null, 2) + '\n');
  console.log(`✅ Package.json version updated to ${version.major}.${version.minor}.${version.patch}`);
}

// Ana fonksiyon
function main() {
  const type = process.argv[2] || 'patch';
  
  if (!['major', 'minor', 'patch'].includes(type)) {
    console.error('❌ Invalid version type. Use: major, minor, or patch');
    process.exit(1);
  }
  
  try {
    const newVersion = bumpVersion(type);
    updateVersionFile(newVersion);
    updatePackageJson(newVersion);
    console.log(`🎉 Version bumped successfully to ${newVersion.major}.${newVersion.minor}.${newVersion.patch}`);
  } catch (error) {
    console.error('❌ Error updating version:', error.message);
    process.exit(1);
  }
}

main(); 