'use client';

import React, { useEffect, useState } from 'react';

const videos = [
  '/video/v1.mp4',
  '/video/v2.mp4',
  '/video/v3.mp4',
  '/video/v4.mp4',
  '/video/v5.mp4',
  '/video/v6.mp4',
  '/video/v7.mp4',
];

export default function VideoBackground() {
  const [selectedVideo, setSelectedVideo] = useState<string>('');

  useEffect(() => {
    // Random video seç
    const randomIndex = Math.floor(Math.random() * videos.length);
    setSelectedVideo(videos[randomIndex]);
  }, []);

  if (!selectedVideo) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-0">
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
      >
        <source src={selectedVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Video üzerine hafif overlay ekle */}
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  );
} 