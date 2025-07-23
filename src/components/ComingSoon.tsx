import React from 'react';
import EmailForm from './EmailForm';

export default function ComingSoon() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl sm:text-5xl font-bold text-secondary">CERVERSE</h1>
      <h2 className="mt-2 text-xl sm:text-2xl text-primary font-semibold">Create. Engage. Reward.</h2>
      <p className="mt-4 max-w-xl text-secondary">
        A New Era of Storytelling On-Chain
      </p>
      <p className="mt-2 max-w-xl text-secondary">
        Cerverse is the on-chain platform where visionary writers create and share interactive stories, while readers earn as they explore. Here, every story is an opportunity, every interaction, a chance to be rewarded.
      </p>
      <p className="mt-2 max-w-xl text-secondary">Write, read, and unlock real value with every chapter.</p>
      <EmailForm />
    </div>
  );
}
