'use client';
import { useState } from 'react';

export default function EmailForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: integrate with real email service
      console.log('Email submitted:', email);
      setSubmitted(true);
      setEmail('');
    } catch (error) {
      console.error('Submission failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-2 w-full max-w-md">
      <input
        type="email"
        required
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-grow rounded px-4 py-2 text-gray-900"
      />
      <button
        type="submit"
        className="rounded bg-primary px-4 py-2 font-semibold text-white hover:opacity-90"
      >
        {submitted ? 'Thanks!' : 'Join Waitlist'}
      </button>
    </form>
  );
}
