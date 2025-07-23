// Version bilgisi - her commit ile güncellenir
export const APP_VERSION = {
  major: 0,
  minor: 1,
  patch: 11,
  build: process.env.NEXT_PUBLIC_BUILD_NUMBER || '0',
  commit: process.env.NEXT_PUBLIC_COMMIT_HASH || 'dev',
  date: process.env.NEXT_PUBLIC_BUILD_DATE || new Date().toISOString().split('T')[0]
};

// Semantic version string
export const VERSION_STRING = `${APP_VERSION.major}.${APP_VERSION.minor}.${APP_VERSION.patch}`;

// Full version string with build info
export const FULL_VERSION_STRING = `${VERSION_STRING}+${APP_VERSION.build}`;

// Display version string
export const DISPLAY_VERSION = `v ${VERSION_STRING}`;
