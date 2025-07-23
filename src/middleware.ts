import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Video dosyaları için özel header'lar
  if (request.nextUrl.pathname.startsWith('/video/')) {
    const response = NextResponse.next();
    
    // CORS header'ları
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    
    // Cache header'ları
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    response.headers.set('Content-Type', 'video/mp4');
    
    return response;
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/video/:path*',
  ],
}; 