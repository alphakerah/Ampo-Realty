import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ebony: '#050812',
        gold: '#d49c4b',
        sand: '#f7f1e6',
        slate: '#1e2940',
        mist: '#eef2f8',
        accent: '#65d1ff'
      },
      boxShadow: {
        luxe: '0 24px 80px rgba(4, 7, 18, 0.25)',
        glow: '0 0 60px rgba(213, 156, 75, 0.18)'
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top right, rgba(236,141,39,0.16), transparent 38%)'
      }
    }
  },
  plugins: []
};

export default config;
