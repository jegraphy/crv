/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  assetPrefix: process.env.NEXT_PUBLIC_BASE_URL || '',
  basePath: '',
};

export default nextConfig;
