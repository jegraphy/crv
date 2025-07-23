import React from 'react';
import EmailForm from './EmailForm';
import VideoBackground from './VideoBackground';

export default function ComingSoon() {
  return (
    <div className="relative min-h-screen">
      <VideoBackground />
      <div className="absolute inset-0 flex items-center justify-center z-10 ">
        <div className="backdrop-blur-md bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 rounded-2xl p-8 mx-4 max-w-2xl border-2 border-white">
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary  mb-12">CERVERSE</h1>
            <h2 className="mt-2 text-xl sm:text-2xl text-primary font-semibold">Create. Engage. Reward.</h2>
            <p className="mt-4 max-w-xl text-secondary mb-12">
              A New Era of Storytelling On-Chain
            </p>
            <p className="mt-2 max-w-xl text-secondary  mb-12">
              Cerverse is the on-chain platform where visionary writers create and share interactive stories, while readers earn as they explore. Here, every story is an opportunity, every interaction, a chance to be rewarded.
            </p>
            <p className="mt-2 max-w-xl text-secondary">Write, read, and unlock real value with every chapter.</p>
            {/* <EmailForm /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
