'use client';

import React, { useState, useRef, useEffect } from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = '' }: GlassCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className={`content-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`,
      } as React.CSSProperties}
    >
      {/* Glass morphism overlay */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300"
        style={{
          background: `
            radial-gradient(circle at var(--mouse-x) var(--mouse-y), 
              rgba(120, 119, 198, 0.4) 0%, 
              transparent 40%),
            radial-gradient(circle at calc(100% - var(--mouse-x)) calc(100% - var(--mouse-y)), 
              rgba(255, 119, 198, 0.3) 0%, 
              transparent 40%),
            radial-gradient(circle at var(--mouse-x) calc(100% - var(--mouse-y)), 
              rgba(120, 219, 255, 0.2) 0%, 
              transparent 40%)
          `,
          opacity: isHovered ? 1 : 0,
          zIndex: 0,
        }}
      />
      
      {/* SVG pattern overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <defs>
          <pattern id="glass-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="currentColor" className="text-white/10" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#glass-pattern)" />
      </svg>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 