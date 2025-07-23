'use client';

import React, { useEffect, useState } from 'react';

const videos = [
  'v1.mp4',
  'v2.mp4',
  'v3.mp4',
  'v4.mp4',
  'v5.mp4',
  'v6.mp4',
  'v7.mp4',
];

export default function VideoBackground() {
  const [selectedVideo, setSelectedVideo] = useState<string>('');
  const [videoError, setVideoError] = useState(false);
  const [debugInfo, setDebugInfo] = useState<string>('');

  useEffect(() => {
    // Random video seç
    const randomIndex = Math.floor(Math.random() * videos.length);
    const videoName = videos[randomIndex];
    
    // Debug bilgisi
    const debug = {
      hostname: typeof window !== 'undefined' ? window.location.hostname : 'server',
      origin: typeof window !== 'undefined' ? window.location.origin : 'server',
      pathname: typeof window !== 'undefined' ? window.location.pathname : 'server',
      videoName,
      timestamp: new Date().toISOString(),
      isProduction: process.env.NODE_ENV === 'production'
    };
    
    setDebugInfo(JSON.stringify(debug, null, 2));
    
    // Video URL'ini oluştur - sadece relative path kullan
    const videoUrl = `/video/${videoName}`;
    setSelectedVideo(videoUrl);
    
    // Console'a debug bilgisi yazdır
    console.log('VideoBackground Debug:', debug);
    console.log('Selected Video URL:', videoUrl);
    console.log('Environment:', process.env.NODE_ENV);
  }, []);

  const handleVideoError = (e: any) => {
    console.error('Video loading failed:', selectedVideo);
    console.error('Error details:', e);
    console.error('Current URL:', window.location.href);
    setVideoError(true);
  };

  const handleVideoLoad = () => {
    console.log('Video loaded successfully:', selectedVideo);
  };

  if (!selectedVideo) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-0">
      {!videoError ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          onError={handleVideoError}
          onLoadedData={handleVideoLoad}
        >
          <source src={selectedVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        // Fallback: Gradient background
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(180deg, #131825 0%, #17253e 100%)',
          }}
        />
      )}
      
      {/* Debug bilgisi (sadece development'ta göster) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-4 left-4 bg-black/80 text-white p-4 rounded text-xs max-w-md z-50">
          <h3 className="font-bold mb-2">Debug Info:</h3>
          <pre className="whitespace-pre-wrap">{debugInfo}</pre>
          <p className="mt-2">Video URL: {selectedVideo}</p>
          <p>Error: {videoError ? 'Yes' : 'No'}</p>
          <p>Environment: {process.env.NODE_ENV}</p>
        </div>
      )}
      
      {/* Video üzerine hafif overlay ekle */}
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  );
} 