/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_URL || '',
  basePath: '',
  
  // Vercel için static dosya optimizasyonu
  experimental: {
    optimizeCss: true,
  },
  
  // Static dosyalar için headers
  async headers() {
    return [
      {
        source: '/video/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Content-Type',
            value: 'video/mp4',
          },
          {
            key: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
      },
    ];
  },

  // Static export için ayarlar
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
