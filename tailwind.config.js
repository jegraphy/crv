/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f13c16',
        secondary: '#fedd01',
      },
      backgroundImage: {
        'cerverse-gradient': 'linear-gradient(to bottom right, #131825, #17253e)',
      },
    },
  },
  plugins: [],
};
