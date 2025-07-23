'use client';

import React, { useState } from 'react';
import EmailForm from './EmailForm';
import VideoBackground from './VideoBackground';
import AccordionSection from './AccordionSection';
import GlassCard from './GlassCard';

export default function ComingSoon() {
  const [logoSrc, setLogoSrc] = useState(
    process.env.NODE_ENV === 'production' ? '/static/img/cerverse.svg' : '/img/cerverse.svg'
  );
  const [openSection, setOpenSection] = useState<string | null>('about');

  const handleLogoError = () => {
    // Fallback to public folder if static doesn't work
    if (logoSrc.includes('/static/')) {
      setLogoSrc('/img/cerverse.svg');
    }
  };

  const handleSectionToggle = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="relative min-h-screen pb-32">
      <VideoBackground />
      
      {/* Ana içerik bölümü */}
      <div className="relative z-10 pt-20 pb-8">
        <div className="flex flex-col items-center space-y-8">
          <GlassCard>
            <div className="text-left">
              <div className="mb-12">
                <img
                  src={logoSrc}
                  alt="Cerverse Logo"
                  className="w-auto h-16 sm:h-20"
                  onError={handleLogoError}
                />
              </div>
              <h2 className="mt-2 text-xl sm:text-2xl text-primary font-semibold">Create. Engage. Reward.</h2>
              <p className="mt-4 max-w-xl text-secondary mb-12">
                A New Era of Storytelling On-Chain
              </p>
              <p className="mt-2 max-w-xl text-secondary mb-12">
                Cerverse is the on-chain platform where visionary writers create and share interactive stories, while readers earn as they explore. Here, every story is an opportunity, every interaction, a chance to be rewarded.
              </p>
              <p className="mt-2 max-w-xl text-secondary">Write, read, and unlock real value with every chapter.</p>
              {/* <EmailForm /> */}
            </div>
          </GlassCard>

          {/* Akordeon bölümü */}
          <AccordionSection 
            openSection={openSection}
            onSectionToggle={handleSectionToggle}
          />
        </div>
      </div>
    </div>
  );
}
