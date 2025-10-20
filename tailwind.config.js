/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      colors: {
        // We'll use CSS variables for colors to enable theme switching
        // These will be referenced via var(--color-*) in the CSS
      },
      boxShadow: {
        // These are handled by CSS variables for theme switching
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        scanline: 'scanline 8s linear infinite',
        'skill-fill': 'skillFill 1s ease-out forwards',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        skillFill: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--skill-percentage, 0%)' },
        },
      },
    },
  },
  plugins: [],
};